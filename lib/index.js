// @flow

import * as lib from './amoebalib.bc'

export {lib as lib}
export let ready = lib.ready

export const ErrorCodes = {
    AM_OK: 0,
    AM_FAILED: -1,
    AM_UNSATISFIED: -2,
    AM_UNBOUND: -3
}

type ErrorCode = $Keys<typeof ErrorCodes>

export const Strengths = {
    required: 1000000000,
    strong: 1000000,
    medium: 1000,
    weak: 1
}

type Strength = $Keys<typeof Strengths>

export const Relations = {
    lessThanEqual: 1,
    equal: 2,
    greaterThanEqual: 3
}

type Relation = $Keys<typeof Relations>

export class SolverError extends Error {
    message: string
    code: number
    name: string

    constructor(code: number) {
        let message
        if (code == ErrorCodes.AM_FAILED) {
            message = 'Failed'
        } else if (code == ErrorCodes.AM_UNSATISFIED) {
            message = 'Unsatisfied'
        } else if (code == ErrorCodes.AM_UNBOUND) {
            message = 'Unbound'
        } else {
            message = 'Unknown'
        }
        super(message)
        this.code = code
        this.name = 'SolverError'
        this.stack = (new Error()).stack
    }
}

function guard(result: number) {
    if (result !== ErrorCodes.AM_OK) {
        throw new SolverError(result)
    }
}

const solvers: Map<number, Solver> = new Map()

let varcallback
lib.ready.then(() => {
    varcallback = lib.Runtime.addFunction(function(solverPtr, varPtr, newValue, oldValue) {
        let solver = solvers.get(solverPtr)
        if (typeof solver === 'undefined') {
            console.log("Got callback for untracked solver pointer: " + solverPtr)
            return
        }
        let variable = solver._vars.get(varPtr)
        if (typeof variable === 'undefined') {
            console.log("Got callback for untracked variable pointer: " + varPtr)
            return
        }
        variable._valueChanged(newValue, oldValue)
    })
})

export class Solver {
    _solver: number
    _vars: Map<number, Variable>
    _constraints: Map<number, Constraint>

    constructor() {
        this._solver = lib._am_newsolver(null, null, varcallback);
        solvers.set(this._solver, this)
        this._vars = new Map()
        this._constraints = new Map()
        this.setAutoUpdate(true)
    }

    reset() {
        lib._am_resetsolver(this._solver, 1)
        return this
    }

    free() {
        this._constraints.forEach((constraint, pointer) => constraint.free())
        this._constraints.clear()
        this._vars.forEach((variable, pointer) => variable.free())
        this._vars.clear()
        if (this._solver) { lib._am_delsolver(this._solver) }
        solvers.delete(this._solver);
    }

    get autoupdate(): boolean {
        return !!lib._am_getautoupdate(this._solver)
    }

    setAutoUpdate(au: boolean) {
        lib._am_autoupdate(this._solver, au)
        return this
    }

    updateVars(): Solver {
        lib._am_updatevars(this._solver)
        return this
    }

    newVariable(): Variable {
        let variable = new Variable(this, lib._am_newvariable(this._solver))
        this._vars.set(variable._var, variable)
        return variable
    }

    newConstraint(strength: Strength): Constraint {
        let constraint = new Constraint(this, lib._am_newconstraint(this._solver, strength))
        this._constraints.set(constraint._constraint, constraint)
        return constraint
    }
}

type Expressionable = Variable | Expression | ExpressionLike | Number

class ExpressionLike {
    solver: Solver

    plus(other: Expressionable) {
        return ensureExpression(this.solver, this, true)._plus(ensureExpression(this.solver, other, false))
    }

    subtract(other: Expressionable) {
        return ensureExpression(this.solver, this, true)._plus(ensureExpression(this.solver, other, true)._invert())
    }

    times(multiplier: number) {
        return ensureExpression(this.solver, this, true)._times(multiplier)
    }

    divide(divisor: number) {
        return ensureExpression(this.solver, this, true)._times(1 / divisor)
    }

    shouldEqual(other: Expressionable) {
        return makeConstraint(this, 'equal', other, 'medium')
    }

    mustEqual(other: Expressionable) {
        return makeConstraint(this, 'equal', other, 'required')
    }

    shouldBeLessThanEqual(other: Expressionable) {
        return makeConstraint(this, 'lessThanEqual', other, 'medium')
    }

    mustBeLessThanEqual(other: Expressionable) {
        return makeConstraint(this, 'lessThanEqual', other, 'required')
    }

    shouldBeGreaterThanEqual(other: Expressionable) {
        return makeConstraint(this, 'greaterThanEqual', other, 'medium')
    }

    mustBeGreaterThanEqual(other: Expressionable) {
        return makeConstraint(this, 'greaterThanEqual', other, 'required')
    }
}

export class Variable extends ExpressionLike {
    solver: Solver
    _var: number
    eventListeners: Array<(number, number) => void>

    constructor(solver: Solver, _var: number) {
        super()
        this.solver = solver
        this._var = _var
        this.eventListeners = []
    }

    get id() {
        return lib._am_variableid(this._var)
    }

    get value() {
        return lib._am_value(this._var)
    }

    free() {
        if (this._var) { lib._am_delvariable(this._var) }
    }

    hasEdit(): boolean {
        return !!lib._am_hasedit(this._var)
    }

    addEdit(strength: Strength) {
        if (!strength) {
            strength = 'medium'
        }
        guard(lib._am_addedit(this._var, Strengths[strength]))
        return this
    }

    delEdit() {
        lib._am_deledit(this._var)
        return this
    }

    suggest(value: number) {
        lib._am_suggest(this._var, value)
        return this
    }

    onChange(callback: (number, number) => void) {
        this.eventListeners.push(callback)
        return this
    }

    _valueChanged(newValue: number, oldValue: number) {
        this.eventListeners.forEach((listener) => listener(newValue, oldValue))
    }
}

export class Constraint {
    solver: Solver
    _constraint: number

    constructor(solver: Solver, _constraint: number) {
        this.solver = solver
        this._constraint = _constraint
    }

    clone(strength: Strength) {
        return new Constraint(this.solver, lib._am_cloneconstraint(this._constraint, Strengths[strength]))
    }

    reset() {
        lib._am_resetconstraint(this._constraint)
        return this
    }

    free() {
        if (this._constraint) { lib._am_delconstraint(this._constraint) }
    }

    add() {
        guard(lib._am_add(this._constraint))
        return this
    }

    remove() {
        lib._am_remove(this._constraint)
        return this
    }

    addTerm(variable: Variable, multiplier: number) {
        guard(lib._am_addterm(this._constraint, variable._var, multiplier))
        return this
    }

    setRelation(relation: Relation) {
        guard(lib._am_setrelation(this._constraint, Relations[relation]))
        return this
    }

    addConstant(constant: number) {
        guard(lib._am_addconstant(this._constraint, constant))
        return this
    }

    get strength() {
        return lib._am_getstrength(this._constraint)
    }

    setStrength(strength: Strength) {
        guard(lib._am_setstrength(this._constraint, Strengths[strength]))
    }

    merge(other: Constraint, multiplier: number) {
        lib._am_mergeconstraint(this._constraint, other._constraint, multiplier)
    }
}

export class Expression extends ExpressionLike {
    solver: Solver
    terms: Map<Variable, number>
    constant: number

    constructor(solver: Solver) {
        super()
        this.solver = solver
        this.terms = new Map()
        this.constant = 0
    }

    static fromVariable(variable: Variable): Expression {
        return (new Expression(variable.solver)).addTerm(variable, 1)
    }

    static fromConstant(solver: Solver, constant: number): Expression {
        return (new Expression(solver)).addConstant(constant)
    }

    addConstant(constant: number) {
        this.constant += constant
        return this
    }

    addTerm(variable: Variable, multiplier: number) {
        if (this.terms.has(variable)) {
            this.terms.set(variable, this.terms.get(variable) + multiplier)
        } else {
            this.terms.set(variable, multiplier)
        }
        return this
    }

    _times(x: number) {
        let terms: Map<Variable, number> = new Map()
        this.terms.forEach((multiplier, variable) => {
            terms.set(variable, multiplier * x)
        })
        this.terms = terms
        this.constant *= x
        return this
    }

    _plus(other: Expressionable) {
        let other_exp = ensureExpression(this.solver, other, false)
        other_exp.terms.forEach((multiplier, variable) => {
            this.addTerm(variable, multiplier)
        })
        this.constant += other_exp.constant
        return this
    }

    invert(): Expression {
        return this.clone()._invert()
    }

    _invert() {
        this.constant = -this.constant

        let terms = new Map()
        this.terms.forEach((multiplier, variable) => {
            terms.set(variable, -multiplier)
        })
        this.terms = terms

        return this
    }

    clone(): Expression {
        let exp = new Expression(this.solver)
        exp.terms = new Map(this.terms)
        exp.constant = this.constant
        return exp
    }
}

function makeConstraint(exprLike1: ExpressionLike, relation: Relation, exprLike2: Expressionable, strength: Strength) {
    let expr1 = ensureExpression(exprLike1.solver, exprLike1, false),
        expr2 = ensureExpression(exprLike1.solver, exprLike2, false)

    if (expr1.solver !== expr2.solver) {
        throw new Error("Can't constrain two expressions with different solvers")
    }

    let constraint = expr1.solver.newConstraint(strength)

    constraint.addConstant(expr1.constant)
    expr1.terms.forEach((multiplier, variable) =>
        constraint.addTerm(variable, multiplier))

    constraint.setRelation(relation)

    constraint.addConstant(expr2.constant)
    expr2.terms.forEach((multiplier, variable) =>
        constraint.addTerm(variable, multiplier))

    return constraint
}

function ensureExpression(solver: Solver, obj: Expressionable, shouldClone: boolean): Expression {
    if (obj instanceof Variable) {
        return Expression.fromVariable(obj)
    } else if (obj instanceof Expression) {
        if (shouldClone) {
            return obj.clone()
        } else {
            return obj
        }
    } else if (typeof obj === 'number' && Number.isFinite(obj)) {
        return Expression.fromConstant(solver, obj)
    } else {
        throw new Error(`Couldn't convert to expression: ${String(obj)}`)
    }
}
