import * as lib from './amoebalib.bc'

export {lib as lib}
export let ready = lib.ready

let ErrorCodes = {
    AM_OK: 0,
    AM_FAILED: -1,
    AM_UNSATISFIED: -2,
    AM_UNBOUND: -3
}

export class SolverError extends Error {
    constructor(code) {
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

export let Strength = {
    required: 1000000000,
    strong: 1000000,
    medium: 1000,
    weak: 1
}

export let Relation = {
    lessThanEqual: 1,
    equal: 2,
    greaterThanEqual: 3
}

function guard(result) {
    if (result !== ErrorCodes.AM_OK) {
        throw new SolverError(result)
    }
}

export class Solver {
    constructor() {
        this._solver = lib._am_newsolver()
        this._vars = []
        this._constraints = []
    }

    reset() {
        lib._am_resetsolver(this._solver, 1)
        return this
    }

    free() {
        while (this._constraints.length > 0) { this._constraints.pop().free() }
        while (this._vars.length > 0) { this._vars.pop().free() }
        lib._am_delsolver(this._solver)
    }

    newVariable() {
        return new Variable(this, lib._am_newvariable(this._solver))
        this._vars.push(variable)
        return variable
    }

    newConstraint(strength) {
        let constraint = new Constraint(this, lib._am_newconstraint(this._solver, strength))
        this._constraints.push(constraint)
        return constraint
    }
}

class ExpressionLike {
    plus(other) {
        return ensureExpression(this.solver, this, true)._plus(ensureExpression(this.solver, other, false))
    }

    subtract(other) {
        return ensureExpression(this.solver, this, true)._plus(ensureExpression(this.solver, other, true)._invert())
    }

    times(multiplier) {
        return ensureExpression(this.solver, this, true)._times(multiplier)
    }

    divide(divisor) {
        return ensureExpression(this.solver, this, true)._times(1 / divisor)
    }

    shouldEqual(other) {
        return makeConstraint(this, Relation.equal, other, Strength.medium)
    }

    mustEqual(other) {
        return makeConstraint(this, Relation.equal, other, Strength.required)
    }

    shouldBeLessThanEqual(other) {
        return makeConstraint(this, Relation.lessThanEqual, other, Strength.medium)
    }

    mustBeLessThanEqual(other) {
        return makeConstraint(this, Relation.lessThanEqual, other, Strength.required)
    }

    shouldBeGreaterThanEqual(other) {
        return makeConstraint(this, Relation.greaterThanEqual, other, Strength.medium)
    }

    mustBeGreaterThanEqual(other) {
        return makeConstraint(this, Relation.greaterThanEqual, other, Strength.required)
    }
}

export class Variable extends ExpressionLike {
    constructor(solver, _var) {
        super()
        this.solver = solver
        this._var = _var
    }

    get id() {
        return lib._am_variableid(this._var)
    }

    get value() {
        return lib._am_value(this._var)
    }

    free() {
        lib._am_delvariable(this._var)
    }

    hasEdit() {
        return !!lib._am_hasedit(this._var)
    }

    addEdit(strength) {
        if (!strength) {
            strength = lib.Strength.medium
        }
        guard(lib._am_addedit(this._var, strength))
        return this
    }

    delEdit() {
        lib._am_deledit(this._var)
        return this
    }

    suggest(value) {
        lib._am_suggest(this._var, value)
        return this
    }
}

export class Constraint {
    constructor(solver, _constraint) {
        this.solver = solver
        this._constraint = _constraint
    }

    clone(strength) {
        return new Constraint(this.solver, lib._am_cloneconstraint(this._constraint, strength))
    }

    reset() {
        lib._am_resetconstraint(this._constraint)
        return this
    }

    free() {
        lib._am_delconstraint(this._constraint)
    }

    add() {
        guard(lib._am_add(this._constraint))
        return this
    }

    remove() {
        lib._am_remove(this._constraint)
        return this
    }

    addTerm(variable, multiplier) {
        guard(lib._am_addterm(this._constraint, variable._var, multiplier))
        return this
    }

    setRelation(relation) {
        guard(lib._am_setrelation(this._constraint, relation))
        return this
    }

    addConstant(constant) {
        guard(lib._am_addconstant(this._constraint, constant))
        return this
    }

    get strength() {
        return lib._am_getstrength(this._constraint)
    }

    set strength(strength) {
        guard(lib._am_setstrength(this._constraint, strength))
    }

    merge(other, multiplier) {
        lib._am_mergeconstraint(this._constraint, other._constraint, multiplier)
    }
}

export class Expression extends ExpressionLike {
    constructor(solver) {
        super()
        this.solver = solver
        this.terms = new Map()
        this.constant = 0
    }

    static fromVariable(variable) {
        return (new Expression(variable.solver)).addTerm(variable, 1)
    }

    static fromConstant(solver, constant) {
        return (new Expression(solver)).addConstant(constant)
    }

    addConstant(constant) {
        this.constant += constant
        return this
    }

    addTerm(variable, multiplier) {
        if (this.terms.has(variable)) {
            this.terms.set(variable, this.terms.get(variable) + multiplier)
        } else {
            this.terms.set(variable, multiplier)
        }
        return this
    }

    _times(x) {
        let terms = new Map()
        this.terms.forEach((multiplier, variable) => {
            terms.set(variable, multiplier * x)
        })
        this.terms = terms
        this.constant *= x
        return this
    }

    _plus(other) {
        let other_exp = ensureExpression(this.solver, other, false)
        other_exp.terms.forEach((multiplier, variable) => {
            this.addTerm(variable, multiplier)
        })
        this.constant += other_exp.constant
        return this
    }

    invert() {
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

    clone() {
        let exp = new Expression(this.solver)
        exp.terms = new Map(this.terms)
        exp.constant = this.constant
        return exp
    }
}

function makeConstraint(expr1, relation, expr2, strength) {
    expr1 = ensureExpression(expr1.solver, expr1, false)
    expr2 = ensureExpression(expr1.solver, expr2, false)

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

function ensureExpression(solver, obj, shouldClone) {
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
        throw new Error("Couldn't convert to expression: " + obj)
    }
}
