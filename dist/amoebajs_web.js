/*!
 * This library contains Amoeba (https://github.com/starwing/amoeba), which is
 * released under the following license:
 * 
 *   Copyright © 2016 Xavier Wang
 * 
 *   Permission is hereby granted, free of charge, to any person obtaining a copy of
 *   this software and associated documentation files (the "Software"), to deal in
 *   the Software without restriction, including without limitation the rights to
 *   use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
 *   of the Software, and to permit persons to whom the Software is furnished to do
 *   so, subject to the following conditions:
 * 
 *   The above copyright notice and this permission notice shall be included in all
 *   copies or substantial portions of the Software.
 * 
 *   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *   SOFTWARE.
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["amoeba"] = factory();
	else
		root["amoeba"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Expression = exports.Constraint = exports.Variable = exports.Solver = exports.SolverError = exports.Relations = exports.Strengths = exports.ErrorCodes = exports.ready = exports.lib = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _amoebalib = __webpack_require__(2);

var lib = _interopRequireWildcard(_amoebalib);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.lib = lib;
var ready = exports.ready = lib.ready;

var ErrorCodes = exports.ErrorCodes = {
    AM_OK: 0,
    AM_FAILED: -1,
    AM_UNSATISFIED: -2,
    AM_UNBOUND: -3
};

var Strengths = exports.Strengths = {
    required: 1000000000,
    strong: 1000000,
    medium: 1000,
    weak: 1
};

var Relations = exports.Relations = {
    lessThanEqual: 1,
    equal: 2,
    greaterThanEqual: 3
};

var SolverError = exports.SolverError = function (_Error) {
    _inherits(SolverError, _Error);

    function SolverError(code) {
        _classCallCheck(this, SolverError);

        var message = void 0;
        if (code == ErrorCodes.AM_FAILED) {
            message = 'Failed';
        } else if (code == ErrorCodes.AM_UNSATISFIED) {
            message = 'Unsatisfied';
        } else if (code == ErrorCodes.AM_UNBOUND) {
            message = 'Unbound';
        } else {
            message = 'Unknown';
        }

        var _this = _possibleConstructorReturn(this, (SolverError.__proto__ || Object.getPrototypeOf(SolverError)).call(this, message));

        _this.code = code;
        _this.name = 'SolverError';
        _this.stack = new Error().stack;
        return _this;
    }

    return SolverError;
}(Error);

function guard(result) {
    if (result !== ErrorCodes.AM_OK) {
        throw new SolverError(result);
    }
}

var solvers = new Map();

var varcallback = void 0;
lib.ready.then(function () {
    varcallback = lib.Runtime.addFunction(function (solverPtr, varPtr, newValue, oldValue) {
        var solver = solvers.get(solverPtr);
        if (typeof solver === 'undefined') {
            console.log("Got callback for untracked solver pointer: " + solverPtr);
            return;
        }
        var variable = solver._vars.get(varPtr);
        if (typeof variable === 'undefined') {
            console.log("Got callback for untracked variable pointer: " + varPtr);
            return;
        }
        variable._valueChanged(newValue, oldValue);
    });
});

var Solver = exports.Solver = function () {
    function Solver() {
        _classCallCheck(this, Solver);

        this._solver = lib._am_newsolver(null, null, varcallback);
        solvers.set(this._solver, this);
        this._vars = new Map();
        this._constraints = new Map();
        this.setAutoUpdate(true);
    }

    _createClass(Solver, [{
        key: 'reset',
        value: function reset() {
            lib._am_resetsolver(this._solver, 1);
            return this;
        }
    }, {
        key: 'free',
        value: function free() {
            this._constraints.forEach(function (constraint, pointer) {
                return constraint.free();
            });
            this._constraints.clear();
            this._vars.forEach(function (variable, pointer) {
                return variable.free();
            });
            this._vars.clear();
            if (this._solver) {
                lib._am_delsolver(this._solver);
            }
            solvers.delete(this._solver);
        }
    }, {
        key: 'setAutoUpdate',
        value: function setAutoUpdate(au) {
            lib._am_autoupdate(this._solver, au);
            return this;
        }
    }, {
        key: 'updateVars',
        value: function updateVars() {
            lib._am_updatevars(this._solver);
            return this;
        }
    }, {
        key: 'newVariable',
        value: function newVariable() {
            var variable = new Variable(this, lib._am_newvariable(this._solver));
            this._vars.set(variable._var, variable);
            return variable;
        }
    }, {
        key: 'newConstraint',
        value: function newConstraint(strength) {
            var constraint = new Constraint(this, lib._am_newconstraint(this._solver, strength));
            this._constraints.set(constraint._constraint, constraint);
            return constraint;
        }
    }, {
        key: 'autoupdate',
        get: function get() {
            return !!lib._am_getautoupdate(this._solver);
        }
    }]);

    return Solver;
}();

var ExpressionLike = function () {
    function ExpressionLike() {
        _classCallCheck(this, ExpressionLike);
    }

    _createClass(ExpressionLike, [{
        key: 'plus',
        value: function plus(other) {
            return ensureExpression(this.solver, this, true)._plus(ensureExpression(this.solver, other, false));
        }
    }, {
        key: 'subtract',
        value: function subtract(other) {
            return ensureExpression(this.solver, this, true)._plus(ensureExpression(this.solver, other, true)._invert());
        }
    }, {
        key: 'times',
        value: function times(multiplier) {
            return ensureExpression(this.solver, this, true)._times(multiplier);
        }
    }, {
        key: 'divide',
        value: function divide(divisor) {
            return ensureExpression(this.solver, this, true)._times(1 / divisor);
        }
    }, {
        key: 'shouldEqual',
        value: function shouldEqual(other) {
            return makeConstraint(this, 'equal', other, 'medium');
        }
    }, {
        key: 'mustEqual',
        value: function mustEqual(other) {
            return makeConstraint(this, 'equal', other, 'required');
        }
    }, {
        key: 'shouldBeLessThanEqual',
        value: function shouldBeLessThanEqual(other) {
            return makeConstraint(this, 'lessThanEqual', other, 'medium');
        }
    }, {
        key: 'mustBeLessThanEqual',
        value: function mustBeLessThanEqual(other) {
            return makeConstraint(this, 'lessThanEqual', other, 'required');
        }
    }, {
        key: 'shouldBeGreaterThanEqual',
        value: function shouldBeGreaterThanEqual(other) {
            return makeConstraint(this, 'greaterThanEqual', other, 'medium');
        }
    }, {
        key: 'mustBeGreaterThanEqual',
        value: function mustBeGreaterThanEqual(other) {
            return makeConstraint(this, 'greaterThanEqual', other, 'required');
        }
    }]);

    return ExpressionLike;
}();

var Variable = exports.Variable = function (_ExpressionLike) {
    _inherits(Variable, _ExpressionLike);

    function Variable(solver, _var) {
        _classCallCheck(this, Variable);

        var _this2 = _possibleConstructorReturn(this, (Variable.__proto__ || Object.getPrototypeOf(Variable)).call(this));

        _this2.solver = solver;
        _this2._var = _var;
        _this2.eventListeners = [];
        return _this2;
    }

    _createClass(Variable, [{
        key: 'free',
        value: function free() {
            if (this._var) {
                lib._am_delvariable(this._var);
            }
        }
    }, {
        key: 'hasEdit',
        value: function hasEdit() {
            return !!lib._am_hasedit(this._var);
        }
    }, {
        key: 'addEdit',
        value: function addEdit(strength) {
            if (!strength) {
                strength = 'medium';
            }
            guard(lib._am_addedit(this._var, Strengths[strength]));
            return this;
        }
    }, {
        key: 'delEdit',
        value: function delEdit() {
            lib._am_deledit(this._var);
            return this;
        }
    }, {
        key: 'suggest',
        value: function suggest(value) {
            lib._am_suggest(this._var, value);
            return this;
        }
    }, {
        key: 'onChange',
        value: function onChange(callback) {
            this.eventListeners.push(callback);
            return this;
        }
    }, {
        key: '_valueChanged',
        value: function _valueChanged(newValue, oldValue) {
            this.eventListeners.forEach(function (listener) {
                return listener(newValue, oldValue);
            });
        }
    }, {
        key: 'id',
        get: function get() {
            return lib._am_variableid(this._var);
        }
    }, {
        key: 'value',
        get: function get() {
            return lib._am_value(this._var);
        }
    }]);

    return Variable;
}(ExpressionLike);

var Constraint = exports.Constraint = function () {
    function Constraint(solver, _constraint) {
        _classCallCheck(this, Constraint);

        this.solver = solver;
        this._constraint = _constraint;
    }

    _createClass(Constraint, [{
        key: 'clone',
        value: function clone(strength) {
            return new Constraint(this.solver, lib._am_cloneconstraint(this._constraint, Strengths[strength]));
        }
    }, {
        key: 'reset',
        value: function reset() {
            lib._am_resetconstraint(this._constraint);
            return this;
        }
    }, {
        key: 'free',
        value: function free() {
            if (this._constraint) {
                lib._am_delconstraint(this._constraint);
            }
        }
    }, {
        key: 'add',
        value: function add() {
            guard(lib._am_add(this._constraint));
            return this;
        }
    }, {
        key: 'remove',
        value: function remove() {
            lib._am_remove(this._constraint);
            return this;
        }
    }, {
        key: 'addTerm',
        value: function addTerm(variable, multiplier) {
            guard(lib._am_addterm(this._constraint, variable._var, multiplier));
            return this;
        }
    }, {
        key: 'setRelation',
        value: function setRelation(relation) {
            guard(lib._am_setrelation(this._constraint, Relations[relation]));
            return this;
        }
    }, {
        key: 'addConstant',
        value: function addConstant(constant) {
            guard(lib._am_addconstant(this._constraint, constant));
            return this;
        }
    }, {
        key: 'setStrength',
        value: function setStrength(strength) {
            guard(lib._am_setstrength(this._constraint, Strengths[strength]));
        }
    }, {
        key: 'merge',
        value: function merge(other, multiplier) {
            lib._am_mergeconstraint(this._constraint, other._constraint, multiplier);
        }
    }, {
        key: 'strength',
        get: function get() {
            return lib._am_getstrength(this._constraint);
        }
    }]);

    return Constraint;
}();

var Expression = exports.Expression = function (_ExpressionLike2) {
    _inherits(Expression, _ExpressionLike2);

    function Expression(solver) {
        _classCallCheck(this, Expression);

        var _this3 = _possibleConstructorReturn(this, (Expression.__proto__ || Object.getPrototypeOf(Expression)).call(this));

        _this3.solver = solver;
        _this3.terms = new Map();
        _this3.constant = 0;
        return _this3;
    }

    _createClass(Expression, [{
        key: 'addConstant',
        value: function addConstant(constant) {
            this.constant += constant;
            return this;
        }
    }, {
        key: 'addTerm',
        value: function addTerm(variable, multiplier) {
            if (this.terms.has(variable)) {
                this.terms.set(variable, this.terms.get(variable) + multiplier);
            } else {
                this.terms.set(variable, multiplier);
            }
            return this;
        }
    }, {
        key: '_times',
        value: function _times(x) {
            var terms = new Map();
            this.terms.forEach(function (multiplier, variable) {
                terms.set(variable, multiplier * x);
            });
            this.terms = terms;
            this.constant *= x;
            return this;
        }
    }, {
        key: '_plus',
        value: function _plus(other) {
            var _this4 = this;

            var other_exp = ensureExpression(this.solver, other, false);
            other_exp.terms.forEach(function (multiplier, variable) {
                _this4.addTerm(variable, multiplier);
            });
            this.constant += other_exp.constant;
            return this;
        }
    }, {
        key: 'invert',
        value: function invert() {
            return this.clone()._invert();
        }
    }, {
        key: '_invert',
        value: function _invert() {
            this.constant = -this.constant;

            var terms = new Map();
            this.terms.forEach(function (multiplier, variable) {
                terms.set(variable, -multiplier);
            });
            this.terms = terms;

            return this;
        }
    }, {
        key: 'clone',
        value: function clone() {
            var exp = new Expression(this.solver);
            exp.terms = new Map(this.terms);
            exp.constant = this.constant;
            return exp;
        }
    }], [{
        key: 'fromVariable',
        value: function fromVariable(variable) {
            return new Expression(variable.solver).addTerm(variable, 1);
        }
    }, {
        key: 'fromConstant',
        value: function fromConstant(solver, constant) {
            return new Expression(solver).addConstant(constant);
        }
    }]);

    return Expression;
}(ExpressionLike);

function makeConstraint(exprLike1, relation, exprLike2, strength) {
    var expr1 = ensureExpression(exprLike1.solver, exprLike1, false),
        expr2 = ensureExpression(exprLike1.solver, exprLike2, false);

    if (expr1.solver !== expr2.solver) {
        throw new Error("Can't constrain two expressions with different solvers");
    }

    var constraint = expr1.solver.newConstraint(strength);

    constraint.addConstant(expr1.constant);
    expr1.terms.forEach(function (multiplier, variable) {
        return constraint.addTerm(variable, multiplier);
    });

    constraint.setRelation(relation);

    constraint.addConstant(expr2.constant);
    expr2.terms.forEach(function (multiplier, variable) {
        return constraint.addTerm(variable, multiplier);
    });

    return constraint;
}

function ensureExpression(solver, obj, shouldClone) {
    if (obj instanceof Variable) {
        return Expression.fromVariable(obj);
    } else if (obj instanceof Expression) {
        if (shouldClone) {
            return obj.clone();
        } else {
            return obj;
        }
    } else if (typeof obj === 'number' && Number.isFinite(obj)) {
        return Expression.fromConstant(solver, obj);
    } else {
        throw new Error('Couldn\'t convert to expression: ' + String(obj));
    }
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {
        var b64chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

        var lookup = new Uint8Array(256);
        for (var i = 0; i < b64chars.length; i++) {
          lookup[b64chars.charCodeAt(i)] = i;
        }

        var decode = function(length, b64) {
            var arrayBuffer = new ArrayBuffer(length);
            var bytes = new Uint8Array(arrayBuffer);
            var p = 0, enc1, enc2, enc3, enc4;

            for (i = 0; i < b64.length; i+= 4) {
                enc1 = lookup[b64.charCodeAt(i)];
                enc2 = lookup[b64.charCodeAt(i + 1)];
                enc3 = lookup[b64.charCodeAt(i + 2)];
                enc4 = lookup[b64.charCodeAt(i + 3)];
                bytes[p++] = (enc1 << 2) | (enc2 >> 4);
                bytes[p++] = ((enc2 & 15) << 4) | (enc3 >> 2);
                bytes[p++] = ((enc3 & 3) << 6) | (enc4 & 63);
            }

            return arrayBuffer;
        }

        module.exports = (function() {
            var Module = {}, readyResolve;

            Module['ready'] = new Promise((resolve, reject) => {
                readyResolve = resolve;
            });

            Module['onRuntimeInitialized'] = () => readyResolve();

            Module['wasmBinary'] = decode(65129, "AGFzbQEAAAABmoGAgAAYYAR/f39/AX9gBH9/fHwAYAR/f39/AGAGf39/f39/AGAFf39/f38AYAF/AGADf39/AX9gAAF/YAV/f39/fwF/YAJ/fwBgBX9/f3x8AGAHf39/f39/fwBgA39/fwBgAABgAX8Bf2ABfwF8YAJ/fwF/YAJ/fAF/YAF8AX9gA39/fAF/YAR/f398AGACf3wAYAN/fH8AYAJ8fAF/AoaHgIAAKQNlbnYORFlOQU1JQ1RPUF9QVFIDfwADZW52DXRlbXBEb3VibGVQdHIDfwADZW52BUFCT1JUA38AA2VudghTVEFDS1RPUAN/AANlbnYJU1RBQ0tfTUFYA38ABmdsb2JhbANOYU4DfAAGZ2xvYmFsCEluZmluaXR5A3wAA2Vudg1lbmxhcmdlTWVtb3J5AAcDZW52DmdldFRvdGFsTWVtb3J5AAcDZW52F2Fib3J0T25DYW5ub3RHcm93TWVtb3J5AAcDZW52EmFib3J0U3RhY2tPdmVyZmxvdwAFA2Vudg5udWxsRnVuY19paWlpaQAFA2Vudg9udWxsRnVuY192aWlpaWkABQNlbnYLbnVsbEZ1bmNfdmkABQNlbnYNbnVsbEZ1bmNfaWlpaQAFA2Vudg5udWxsRnVuY192aWlkZAAFA2VudhBudWxsRnVuY192aWlpaWlpAAUDZW52Dm51bGxGdW5jX3ZpaWlpAAUDZW52DGpzQ2FsbF9paWlpaQAIA2Vudg1qc0NhbGxfdmlpaWlpAAMDZW52CWpzQ2FsbF92aQAJA2Vudgtqc0NhbGxfaWlpaQAAA2Vudgxqc0NhbGxfdmlpZGQACgNlbnYOanNDYWxsX3ZpaWlpaWkACwNlbnYManNDYWxsX3ZpaWlpAAQDZW52HV9fZW1iaW5kX3JlZ2lzdGVyX21lbW9yeV92aWV3AAwDZW52Dl9fX2Fzc2VydF9mYWlsAAIDZW52Fl9fZW1iaW5kX3JlZ2lzdGVyX3ZvaWQACQNlbnYLX19fc2V0RXJyTm8ABQNlbnYdX19lbWJpbmRfcmVnaXN0ZXJfc3RkX3dzdHJpbmcADANlbnYWX2Vtc2NyaXB0ZW5fbWVtY3B5X2JpZwAGA2VudhZfX2VtYmluZF9yZWdpc3Rlcl9ib29sAAQDZW52HF9fZW1iaW5kX3JlZ2lzdGVyX3N0ZF9zdHJpbmcACQNlbnYXX19lbWJpbmRfcmVnaXN0ZXJfZW12YWwACQNlbnYZX19lbWJpbmRfcmVnaXN0ZXJfaW50ZWdlcgAEA2VudhdfX2VtYmluZF9yZWdpc3Rlcl9mbG9hdAAMA2VudgZfYWJvcnQADQNlbnYGbWVtb3J5AgGAAoACA2VudgV0YWJsZQFwAMQBA2VudgptZW1vcnlCYXNlA38AA2Vudgl0YWJsZUJhc2UDfwAD84GAgADxAQ4HBQkJBQcODwUOEAwGBRAJBQkREgUFEBAJERMUBQUTERAVDg4JBgAJCQUJCQkFBQ4MBgkQBgwCDBEUEQUVFgUODwYGEBAXBQkMBgYUDgIJDQ0FBwcFBQUFBQUFBQUFBQcHBwcFBQUFBQUFBQUFBQUHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHDg4FEBAJBwcHBw4OBQUFBQYDBAIGAgIEAAUDBAIFBQUGBQMEAgIDBA0GBg4IAAMECQUABgoBCwMEAgAEBQYBAwIG7YCAgAATfwEjAAt/ASMBC38BIwILfwEjAwt/ASMEC38BQQALfwFBAAt/AUEAC38BQQALfAEjBQt8ASMGC38BQQALfwFBAAt/AUEAC38BQQALfAFEAAAAAAAAAAALfwFBAAt9AUMAAAAAC30BQwAAAAALB92GgIAANAtfYW1faGFzZWRpdABBC19hbV9hZGR0ZXJtAD0PX2FtX3VzZXZhcmlhYmxlACcTX2FtX3Jlc2V0Y29uc3RyYWludAA7CXN0YWNrU2F2ZQAfDl9hbV92YXJpYWJsZWlkACUIc2V0VGhyZXcAIgtfYW1fc3VnZ2VzdABbDV9hbV9kZWxzb2x2ZXIASA9fYW1fZ2V0c3RyZW5ndGgAXw9fYW1fc2V0cmVsYXRpb24APw5fYW1fYXV0b3VwZGF0ZQBDEV9hbV9nZXRhdXRvdXBkYXRlAF4TX2FtX2Nsb25lY29uc3RyYWludAA4DV9hbV9uZXdzb2x2ZXIARBFfYW1fZGVsY29uc3RyYWludAA0C19hbV9kZWxlZGl0AFoHX21lbXNldAD3AQ9fYW1fYWRkY29uc3RhbnQAPgVfc2JyawD5AQdfbWVtY3B5APgBCl9hbV9yZW1vdmUALxFfYW1faGFzY29uc3RyYWludABCB19hbV9hZGQATgpzdGFja0FsbG9jAB4LZ2V0VGVtcFJldDAAJBhfX0dMT0JBTF9fc3ViX0lfYmluZF9jcHAAbgtzZXRUZW1wUmV0MAAjG19lbXNjcmlwdGVuX2dldF9nbG9iYWxfbGliYwDUAQ5fX19nZXRUeXBlTmFtZQDOAQ9fYW1fZGVsdmFyaWFibGUALAxzdGFja1Jlc3RvcmUAIBFfX19lcnJub19sb2NhdGlvbgDVAQtydW5Qb3N0U2V0cwD2AQ9fYW1fc2V0c3RyZW5ndGgAVwtfYW1fYWRkZWRpdABZBV9mcmVlANABD19hbV9uZXd2YXJpYWJsZQAoE2VzdGFibGlzaFN0YWNrU3BhY2UAIQ5fYW1fdXBkYXRldmFycwBMEV9hbV9uZXdjb25zdHJhaW50ADEHX21hbGxvYwDPARNfYW1fbWVyZ2Vjb25zdHJhaW50ADkPX2FtX3Jlc2V0c29sdmVyAEsJX2FtX3ZhbHVlACYNZHluQ2FsbF9paWlpaQD6AQ5keW5DYWxsX3ZpaWlpaQD8AQpkeW5DYWxsX3ZpAP4BDGR5bkNhbGxfaWlpaQCAAg1keW5DYWxsX3ZpaWRkAIICD2R5bkNhbGxfdmlpaWlpaQCEAg1keW5DYWxsX3ZpaWlpAIYCCY6DgIAAAQAjCAvEAYgCiAL7AYgCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCRYgCiAKIAogCiAKIAogCiAKIAokCiQL9AYkCiQKJAokCiQKJAokC4AGJAokCiQLpAYkCiQKJAokCiQLxAYkCiQKJAokCiQKJAokCiQKJAokCiQKKAooC/wGKAtoB2wHcAd0BigKKAooCigLnAYoCigKKAu0BigLvAYoCigKKAooCigKKAooCigKKAooCigKKAooCiwKLAoECiwKLAosCiwKLAt4BiwKLAosCiwKLAosCiwKLAu4BiwKLAosCiwKLAosCiwKLAosCiwKLAosCiwKLAowCjAKDAowCjQKNAoUCjQKNAo0CjQKNAo0C3wGNAo0CjQLoAY0CjQKNAo0CjQLwAY0CjQKNAo0CjQKNAo0CjQKNAo0CjQKNAo4CjgKHAo4CjgKOAo4CjgKOAo4CjgLhAY4CjgKOAuoBjgKOAo4CjgKOAvIBjgKOAo4CjgKO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NwMAICtBEGogLEEQaikDADcDACArQRhqICxBGGopAwA3AwAgK0EgaiAsQSBqKQMANwMAIBchFiAMIRggFiArIBgQUCEZIBkhIiAZQQBHIRogFyEbIBoEQCAMIRwgGyAcEFEgKiEdIBchHiAeQYQBaiEfIB8gHTYCAAUgFyEgICBBCGohISAbICEQUhogFyEjICNBjAFqISQgJCgCACElICVBAEchJiAmBEAgFyEnICcQTAsLICIhKCAoIQEgASEpIDAkDCApDwsLQX8hASABISkgMCQMICkPAAsAC4aJgIAAAmZ/CHwCQCMMIWgjDEHgAGokDCMMIw1OBEBB4AAQAwsgaEHYAGohDCBoQdQAaiELIGhB0ABqIQogaEHMAGohCSBoQcgAaiEIIGhBxABqIQcgaEHAAGohBiBoQTxqIQUgaEE4aiEEIGhBNGohAyBoQShqITUgaEEkaiFAIGhBIGohSSBoQRxqIVQgaEEYaiFeIGhBFGohDSBoQRBqIQ8gaEEMaiEQIGhBCGohESBoQQRqIRIgaCETIAEhISACISsgNUEANgIAIAAQMyArIRQgFEEgaiEVIBUrAwAhaSAAQSBqIRYgFiBpOQMAA0ACQCArIRcgF0EMaiEYIBggNRA1IRkgGUEARyEaIBpFBEAMAQsgISEbICEhHCA1KAIAIR0gHUEEaiEeIEAgHigCADYCACADIEAoAgA2AgAgHCADEDYhHyAbIB8QZiAhISAgNSgCACEiICJBBGohIyBJICMoAgA2AgAgNSgCACEkICRBCGohJSAlKwMAIWogBCBJKAIANgIAICAgACAEIGoQWAwBCwsgKyEmICZBMGohJyAnKAIAISggKEECRyEpAkAgKQRAICEhKiArISwgLEEoaiEtICogLUEBEGcgISEuICshLyAvQShqITAgVCAwKAIANgIAIAUgVCgCADYCACAuIAAgBUQAAAAAAADwvxA6ICshMSAxQThqITIgMisDACFrIGtEAAAAAGXNzUFjITMgMwRAICEhNCArITYgNkEsaiE3IDQgN0ECEGcgISE4ICshOSA5QSxqITogXiA6KAIANgIAIAYgXigCADYCACA4IAAgBkQAAAAAAADwPxA6ICEhOyAhITwgPEEIaiE9ICshPiA+QSxqIT8gDSA/KAIANgIAICshQSBBQThqIUIgQisDACFsIAcg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EyEFBSACKAIAIQYgBiATaiEHIAcoAgAhCCAIIQULIAAoAgAhCSAJKAIAIQogCkEYaiELIAsoAgAhDCACIAVqIQ0gEkECcSEOIA5BAEchDyAPBH8gAwVBAgshECAJIAEgDSAQIAQgDEEfcUEgahEEAA8ACwALg4CAgAAAAQv2goCAAAEEfwJAIAAgAmohAyABQf8BcSEBIAJBwwBOBEADQAJAIABBA3FBAEdFBEAMAQsCQCAAIAE6AAAgAEEBaiEACwwBCwsgA0F8cSEEIARBwABrIQUgASABQQh0ciABQRB0ciABQRh0ciEGA0ACQCAAIAVMRQRADAELAkAgACAGNgIAIABBBGogBjYCACAAQQhqIAY2AgAgAEEMaiAGNgIAIABBEGogBjYCACAAQRRqIAY2AgAgAEEYaiAGNgIAIABBHGogBjYCACAAQSBqIAY2AgAgAEEkaiAGNgIAIABBKGogBjYCACAAQSxqIAY2AgAgAEEwaiAGNgIAIABBNGogBjYCACAAQThqIAY2AgAgAEE8aiAGNgIAIABBwABqIQALDAELCwNAAkAgACAESEUEQAwBCwJAIAAgBjYCACAAQQRqIQALDAELCwsDQAJAIAAgA0hFBEAMAQsCQCAAIAE6AAAgAEEBaiEACwwBCwsgAyACaw8ACwAL6YSAgAABBH8CQCACQYDAAE4EQCAAIAEgAhAXDwsgACEDIAAgAmohBiAAQQNxIAFBA3FGBEADQAJAIABBA3FFBEAMAQsCQCACQQBGBEAgAw8LIAAgASwAADoAACAAQQFqIQAgAUEBaiEBIAJBAWshAgsMAQsLIAZBfHEhBCAEQcAAayEFA0ACQCAAIAVMRQRADAELAkAgACABKAIANgIAIABBBGogAUEEaigCADYCACAAQQhqIAFBCGooAgA2AgAgAEEMaiABQQxqKAIANgIAIABBEGogAUEQaigCADYCACAAQRRqIAFBFGooAgA2AgAgAEEYaiABQRhqKAIANgIAIABBHGogAUEcaigCADYCACAAQSBqIAFBIGooAgA2AgAgAEEkaiABQSRqKAIANgIAIABBKGogAUEoaigCADYCACAAQSxqIAFBLGooAgA2AgAgAEEwaiABQTBqKAIANgIAIABBNGogAUE0aigCADYCACAAQThqIAFBOGooAgA2AgAgAEE8aiABQTxqKAIANgIAIABBwABqIQAgAUHAAGohAQsMAQsLA0ACQCAAIARIRQRADAELAkAgACABKAIANgIAIABBBGohACABQQRqIQELDAELCwUgBkEEayEEA0ACQCAAIARIRQRADAELAkAgACABLAAAOgAAIABBAWogAUEBaiwAADoAACAAQQJqIAFBAmosAAA6AAAgAEEDaiABQQNqLAAAOgAAIABBBGohACABQQRqIQELDAELCwsDQAJAIAAgBkhFBEAMAQsCQCAAIAEsAAA6AAAgAEEBaiEAIAFBAWohAQsMAQsLIAMPAAsAC+uAgIAAAQR/AkAgAEEPakFwcSEAIwkoAgAhASABIABqIQMgAEEASiADIAFIcSADQQBIcgRAEAIaQQwQFUF/DwsjCSADNgIAEAEhBCADIARKBEAQAEEARgRAIwkgATYCAEEMEBVBfw8LCyABDwALAAuWgICAAAAgASACIAMgBCAAQR9xQQBqEQAADwuPgICAAABBACAAIAEgAiADEAsPC5eAgIAAACABIAIgAyAEIAUgAEEfcUEgahEEAAuQgICAAABBACAAIAEgAiADIAQQDAuQgICAAAAgASAAQR9xQcAAahEFAAuIgICAAABBACAAEA0LlYCAgAAAIAEgAiADIABBH3FB4ABqEQYADwuNgICAAABBACAAIAEgAhAODwuWgICAAAAgASACIAMgBCAAQQNxQYABahEBAAuOgICAAABBACAAIAEgAiADEA8LmoCAgAAAIAEgAiADIAQgBSAGIABBH3FBhAFqEQMAC5KAgIAAAEEAIAAgASACIAMgBCAFEBALloCAgAAAIAEgAiADIAQgAEEfcUGkAWoRAgALjoCAgAAAQQAgACABIAIgAxARC46AgIAAAAJAQQAQBEEADwALAAuGgICAAABBARAFC4aAgIAAAEECEAYLjoCAgAAAAkBBAxAHQQAPAAsAC4aAgIAAAEEEEAgLhoCAgAAAQQUQCQuGgICAAABBBhAKCwvkmICAAAEAQYAIC9wYdAYAABYNAAB0BgAANQ0AAHQGAABUDQAAdAYAAHMNAAB0BgAAkg0AAHQGAACxDQAAdAYAANANAAB0BgAA7w0AAHQGAAAODgAAdAYAAC0OAAB0BgAATA4AAHQGAABrDgAAdAYAAIoOAADgBgAAnQ4AAAAAAAABAAAAgAQAAAAAAAB0BgAA3A4AAOAGAAACDwAAAAAAAAEAAACABAAAAAAAAOAGAABBDwAAAAAAAAEAAACABAAAAAAAAJwGAADTDwAAyAQAAAAAAACcBgAAgA8AANgEAAAAAAAAdAYAAKEPAACcBgAArg8AALgEAAAAAAAAnAYAAPUPAADIBAAAAAAAAMQGAAAdEAAAxAYAAB8QAADEBgAAIRAAAMQGAAAjEAAAxAYAACUQAADEBgAAJxAAAMQGAAApEAAAxAYAACsQAADEBgAALRAAAMQGAAAvEAAAxAYAADEQAADEBgAAMxAAAMQGAAA1EAAAnAYAADcQAAC4BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeBIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAuAQAAAQAAAAFAAAABgAAAAcAAAAIAAAACQAAAAoAAAALAAAAAAAAAOAEAAAEAAAADAAAAAYAAAAHAAAACAAAAA0AAAAOAAAADwAAAAAAAADwBAAABAAAABAAAAAGAAAABwAAABEAAAAAAAAAaAUAAAQAAAASAAAABgAAAAcAAAAIAAAAEwAAABQAAAAVAAAAdmUtPnZhcmlhYmxlID09IE5VTEwAYW1vZWJhL2Ftb2ViYS5oAGFtX25ld3ZhcmlhYmxlAGUgIT0gTlVMTABhbV9kZWx2YXJpYWJsZQBjZSAhPSBOVUxMAGFtX2RlbGNvbnN0cmFpbnQAdmFyLT5zeW0uaWQgIT0gMABhbV9hZGR0ZXJtAHZhci0+c29sdmVyID09IGNvbnMtPnNvbHZlcgByZWxhdGlvbiA+PSBBTV9MRVNTRVFVQUwgJiYgcmVsYXRpb24gPD0gQU1fR1JFQVRFUVVBTABhbV9zZXRyZWxhdGlvbgBhbV9uZWFyemVybyhzb2x2ZXItPm9iamVjdGl2ZS5jb25zdGFudCkAYW1fcmVzZXRzb2x2ZXIAc29sdmVyLT5pbmZlYXNpYmxlX3Jvd3MuaWQgPT0gMABzb2x2ZXItPmRpcnR5X3ZhcnMuaWQgPT0gMABleGl0LmlkICE9IDAAYW1fcmVtb3ZlAGFtX2FkZGVkaXQAMAB2YXItPmNvbnN0cmFpbnQgIT0gTlVMTABhbV9zdWdnZXN0AHR5cGUgPj0gQU1fRVhURVJOQUwgJiYgdHlwZSA8PSBBTV9EVU1NWQBhbV9uZXdzeW1ib2wAa2V5LmlkICE9IDAAYW1fc2V0dGFibGUAZi0+a2V5LmlkID09IDAAYW1fbmV3a2V5AGYtPm5leHQgPT0gMAAobmV3c2l6ZSAmIChuZXdzaXplIC0gMSkpID09IDAAYW1faGFzaHNpemUAdmUgIT0gTlVMTABhbV9zeW0ydmFyAHNpemUgPiBzaXplb2Yodm9pZCopICYmIHNpemUgPCBBTV9QT09MU0laRS80AGFtX2luaXRwb29sAGFtX29wdGltaXplAGVudHJ5LmlkICE9IGV4aXQuaWQgJiYgIWFtX25lYXJ6ZXJvKHRlcm0tPm11bHRpcGxpZXIpAGFtX3NvbHZlZm9yAGVudGVyLmlkICE9IDAAYW1fZHVhbF9vcHRpbWl6ZQB2b2lkAGJvb2wAY2hhcgBzaWduZWQgY2hhcgB1bnNpZ25lZCBjaGFyAHNob3J0AHVuc2lnbmVkIHNob3J0AGludAB1bnNpZ25lZCBpbnQAbG9uZwB1bnNpZ25lZCBsb25nAGZsb2F0AGRvdWJsZQBzdGQ6OnN0cmluZwBzdGQ6OmJhc2ljX3N0cmluZzx1bnNpZ25lZCBjaGFyPgBzdGQ6OndzdHJpbmcAZW1zY3JpcHRlbjo6dmFsAGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PGNoYXI+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHNpZ25lZCBjaGFyPgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzx1bnNpZ25lZCBjaGFyPgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxzaG9ydD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8dW5zaWduZWQgc2hvcnQ+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PGludD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8dW5zaWduZWQgaW50PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxsb25nPgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzx1bnNpZ25lZCBsb25nPgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxpbnQ4X3Q+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHVpbnQ4X3Q+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PGludDE2X3Q+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHVpbnQxNl90PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxpbnQzMl90PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzx1aW50MzJfdD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8ZmxvYXQ+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PGRvdWJsZT4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8bG9uZyBkb3VibGU+AE4xMGVtc2NyaXB0ZW4xMW1lbW9yeV92aWV3SWVFRQBOMTBlbXNjcmlwdGVuMTFtZW1vcnlfdmlld0lkRUUATjEwZW1zY3JpcHRlbjExbWVtb3J5X3ZpZXdJZkVFAE4xMGVtc2NyaXB0ZW4xMW1lbW9yeV92aWV3SW1FRQBOMTBlbXNjcmlwdGVuMTFtZW1vcnlfdmlld0lsRUUATjEwZW1zY3JpcHRlbjExbWVtb3J5X3ZpZXdJakVFAE4xMGVtc2NyaXB0ZW4xMW1lbW9yeV92aWV3SWlFRQBOMTBlbXNjcmlwdGVuMTFtZW1vcnlfdmlld0l0RUUATjEwZW1zY3JpcHRlbjExbWVtb3J5X3ZpZXdJc0VFAE4xMGVtc2NyaXB0ZW4xMW1lbW9yeV92aWV3SWhFRQBOMTBlbXNjcmlwdGVuMTFtZW1vcnlfdmlld0lhRUUATjEwZW1zY3JpcHRlbjExbWVtb3J5X3ZpZXdJY0VFAE4xMGVtc2NyaXB0ZW4zdmFsRQBOU3QzX18yMTJiYXNpY19zdHJpbmdJd05TXzExY2hhcl90cmFpdHNJd0VFTlNfOWFsbG9jYXRvckl3RUVFRQBOU3QzX18yMjFfX2Jhc2ljX3N0cmluZ19jb21tb25JTGIxRUVFAE5TdDNfXzIxMmJhc2ljX3N0cmluZ0loTlNfMTFjaGFyX3RyYWl0c0loRUVOU185YWxsb2NhdG9ySWhFRUVFAE5TdDNfXzIxMmJhc2ljX3N0cmluZ0ljTlNfMTFjaGFyX3RyYWl0c0ljRUVOU185YWxsb2NhdG9ySWNFRUVFAE4xMF9fY3h4YWJpdjExNl9fc2hpbV90eXBlX2luZm9FAFN0OXR5cGVfaW5mbwBOMTBfX2N4eGFiaXYxMjBfX3NpX2NsYXNzX3R5cGVfaW5mb0UATjEwX19jeHhhYml2MTE3X19jbGFzc190eXBlX2luZm9FAE4xMF9fY3h4YWJpdjEyM19fZnVuZGFtZW50YWxfdHlwZV9pbmZvRQB2AGIAYwBoAGEAcwB0AGkAagBsAG0AZgBkAE4xMF9fY3h4YWJpdjEyMV9fdm1pX2NsYXNzX3R5cGVfaW5mb0U=");

            // The Module object: Our interface to the outside world. We import
// and export values on it, and do the work to get that through
// closure compiler if necessary. There are various ways Module can be used:
// 1. Not defined. We create it here
// 2. A function parameter, function(Module) { ..generated code.. }
// 3. pre-run appended it, var Module = {}; ..generated code..
// 4. External script tag defines var Module.
// We need to do an eval in order to handle the closure compiler
// case, where this code here is minified but Module was defined
// elsewhere (e.g. case 4 above). We also need to check if Module
// already exists (e.g. case 3 above).
// Note that if you want to run closure, and also to use Module
// after the generated code, you will need to define   var Module = {};
// before the code. Then that object will be used in the code, and you
// can continue to use Module afterwards as well.
var Module;
if (!Module) Module = (typeof Module !== 'undefined' ? Module : null) || {};

// Sometimes an existing Module object exists with properties
// meant to overwrite the default module functionality. Here
// we collect those properties and reapply _after_ we configure
// the current environment's defaults to avoid having to be so
// defensive during initialization.
var moduleOverrides = {};
for (var key in Module) {
  if (Module.hasOwnProperty(key)) {
    moduleOverrides[key] = Module[key];
  }
}

// The environment setup code below is customized to use Module.
// *** Environment setup code ***
var ENVIRONMENT_IS_WEB = false;
var ENVIRONMENT_IS_WORKER = false;
var ENVIRONMENT_IS_NODE = false;
var ENVIRONMENT_IS_SHELL = false;

// Three configurations we can be running in:
// 1) We could be the application main() thread running in the main JS UI thread. (ENVIRONMENT_IS_WORKER == false and ENVIRONMENT_IS_PTHREAD == false)
// 2) We could be the application main() thread proxied to worker. (with Emscripten -s PROXY_TO_WORKER=1) (ENVIRONMENT_IS_WORKER == true, ENVIRONMENT_IS_PTHREAD == false)
// 3) We could be an application pthread running in a worker. (ENVIRONMENT_IS_WORKER == true and ENVIRONMENT_IS_PTHREAD == true)

if (Module['ENVIRONMENT']) {
  if (Module['ENVIRONMENT'] === 'WEB') {
    ENVIRONMENT_IS_WEB = true;
  } else if (Module['ENVIRONMENT'] === 'WORKER') {
    ENVIRONMENT_IS_WORKER = true;
  } else if (Module['ENVIRONMENT'] === 'NODE') {
    ENVIRONMENT_IS_NODE = true;
  } else if (Module['ENVIRONMENT'] === 'SHELL') {
    ENVIRONMENT_IS_SHELL = true;
  } else {
    throw new Error('The provided Module[\'ENVIRONMENT\'] value is not valid. It must be one of: WEB|WORKER|NODE|SHELL.');
  }
} else {
  ENVIRONMENT_IS_WEB = typeof window === 'object';
  ENVIRONMENT_IS_WORKER = typeof importScripts === 'function';
  ENVIRONMENT_IS_NODE = typeof process === 'object' && "function" === 'function' && !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_WORKER;
  ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;
}


if (ENVIRONMENT_IS_NODE) {
  // Expose functionality in the same simple way that the shells work
  // Note that we pollute the global namespace here, otherwise we break in node
  if (!Module['print']) Module['print'] = console.log;
  if (!Module['printErr']) Module['printErr'] = console.warn;

  var nodeFS;
  var nodePath;

  Module['read'] = function shell_read(filename, binary) {
    if (!nodeFS) nodeFS = __webpack_require__(0);
    if (!nodePath) nodePath = __webpack_require__(0);
    filename = nodePath['normalize'](filename);
    var ret = nodeFS['readFileSync'](filename);
    return binary ? ret : ret.toString();
  };

  Module['readBinary'] = function readBinary(filename) {
    var ret = Module['read'](filename, true);
    if (!ret.buffer) {
      ret = new Uint8Array(ret);
    }
    assert(ret.buffer);
    return ret;
  };

  Module['load'] = function load(f) {
    globalEval(read(f));
  };

  if (!Module['thisProgram']) {
    if (process['argv'].length > 1) {
      Module['thisProgram'] = process['argv'][1].replace(/\\/g, '/');
    } else {
      Module['thisProgram'] = 'unknown-program';
    }
  }

  Module['arguments'] = process['argv'].slice(2);

  if (true) {
    module['exports'] = Module;
  }

  process['on']('uncaughtException', function(ex) {
    // suppress ExitStatus exceptions from showing an error
    if (!(ex instanceof ExitStatus)) {
      throw ex;
    }
  });

  Module['inspect'] = function () { return '[Emscripten Module object]'; };
}
else if (ENVIRONMENT_IS_SHELL) {
  if (!Module['print']) Module['print'] = print;
  if (typeof printErr != 'undefined') Module['printErr'] = printErr; // not present in v8 or older sm

  if (typeof read != 'undefined') {
    Module['read'] = read;
  } else {
    Module['read'] = function shell_read() { throw 'no read() available' };
  }

  Module['readBinary'] = function readBinary(f) {
    if (typeof readbuffer === 'function') {
      return new Uint8Array(readbuffer(f));
    }
    var data = read(f, 'binary');
    assert(typeof data === 'object');
    return data;
  };

  if (typeof scriptArgs != 'undefined') {
    Module['arguments'] = scriptArgs;
  } else if (typeof arguments != 'undefined') {
    Module['arguments'] = arguments;
  }

  if (typeof quit === 'function') {
    Module['quit'] = function(status, toThrow) {
      quit(status);
    }
  }

}
else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
  Module['read'] = function shell_read(url) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, false);
    xhr.send(null);
    return xhr.responseText;
  };

  if (ENVIRONMENT_IS_WORKER) {
    Module['readBinary'] = function readBinary(url) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, false);
      xhr.responseType = 'arraybuffer';
      xhr.send(null);
      return new Uint8Array(xhr.response);
    };
  }

  Module['readAsync'] = function readAsync(url, onload, onerror) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'arraybuffer';
    xhr.onload = function xhr_onload() {
      if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) { // file URLs can return 0
        onload(xhr.response);
      } else {
        onerror();
      }
    };
    xhr.onerror = onerror;
    xhr.send(null);
  };

  if (typeof arguments != 'undefined') {
    Module['arguments'] = arguments;
  }

  if (typeof console !== 'undefined') {
    if (!Module['print']) Module['print'] = function shell_print(x) {
      console.log(x);
    };
    if (!Module['printErr']) Module['printErr'] = function shell_printErr(x) {
      console.warn(x);
    };
  } else {
    // Probably a worker, and without console.log. We can do very little here...
    var TRY_USE_DUMP = false;
    if (!Module['print']) Module['print'] = (TRY_USE_DUMP && (typeof(dump) !== "undefined") ? (function(x) {
      dump(x);
    }) : (function(x) {
      // self.postMessage(x); // enable this if you want stdout to be sent as messages
    }));
  }

  if (ENVIRONMENT_IS_WORKER) {
    Module['load'] = importScripts;
  }

  if (typeof Module['setWindowTitle'] === 'undefined') {
    Module['setWindowTitle'] = function(title) { document.title = title };
  }
}
else {
  // Unreachable because SHELL is dependant on the others
  throw 'Unknown runtime environment. Where are we?';
}

function globalEval(x) {
  eval.call(null, x);
}
if (!Module['load'] && Module['read']) {
  Module['load'] = function load(f) {
    globalEval(Module['read'](f));
  };
}
if (!Module['print']) {
  Module['print'] = function(){};
}
if (!Module['printErr']) {
  Module['printErr'] = Module['print'];
}
if (!Module['arguments']) {
  Module['arguments'] = [];
}
if (!Module['thisProgram']) {
  Module['thisProgram'] = './this.program';
}
if (!Module['quit']) {
  Module['quit'] = function(status, toThrow) {
    throw toThrow;
  }
}

// *** Environment setup code ***

// Closure helpers
Module.print = Module['print'];
Module.printErr = Module['printErr'];

// Callbacks
Module['preRun'] = [];
Module['postRun'] = [];

// Merge back in the overrides
for (var key in moduleOverrides) {
  if (moduleOverrides.hasOwnProperty(key)) {
    Module[key] = moduleOverrides[key];
  }
}
// Free the object hierarchy contained in the overrides, this lets the GC
// reclaim data used e.g. in memoryInitializerRequest, which is a large typed array.
moduleOverrides = undefined;



// {{PREAMBLE_ADDITIONS}}

// === Preamble library stuff ===

// Documentation for the public APIs defined in this file must be updated in:
//    site/source/docs/api_reference/preamble.js.rst
// A prebuilt local version of the documentation is available at:
//    site/build/text/docs/api_reference/preamble.js.txt
// You can also build docs locally as HTML or other formats in site/
// An online HTML version (which may be of a different version of Emscripten)
//    is up at http://kripken.github.io/emscripten-site/docs/api_reference/preamble.js.html

//========================================
// Runtime code shared with compiler
//========================================

var Runtime = {
  setTempRet0: function (value) {
    tempRet0 = value;
    return value;
  },
  getTempRet0: function () {
    return tempRet0;
  },
  stackSave: function () {
    return STACKTOP;
  },
  stackRestore: function (stackTop) {
    STACKTOP = stackTop;
  },
  getNativeTypeSize: function (type) {
    switch (type) {
      case 'i1': case 'i8': return 1;
      case 'i16': return 2;
      case 'i32': return 4;
      case 'i64': return 8;
      case 'float': return 4;
      case 'double': return 8;
      default: {
        if (type[type.length-1] === '*') {
          return Runtime.QUANTUM_SIZE; // A pointer
        } else if (type[0] === 'i') {
          var bits = parseInt(type.substr(1));
          assert(bits % 8 === 0);
          return bits/8;
        } else {
          return 0;
        }
      }
    }
  },
  getNativeFieldSize: function (type) {
    return Math.max(Runtime.getNativeTypeSize(type), Runtime.QUANTUM_SIZE);
  },
  STACK_ALIGN: 16,
  prepVararg: function (ptr, type) {
    if (type === 'double' || type === 'i64') {
      // move so the load is aligned
      if (ptr & 7) {
        assert((ptr & 7) === 4);
        ptr += 4;
      }
    } else {
      assert((ptr & 3) === 0);
    }
    return ptr;
  },
  getAlignSize: function (type, size, vararg) {
    // we align i64s and doubles on 64-bit boundaries, unlike x86
    if (!vararg && (type == 'i64' || type == 'double')) return 8;
    if (!type) return Math.min(size, 8); // align structures internally to 64 bits
    return Math.min(size || (type ? Runtime.getNativeFieldSize(type) : 0), Runtime.QUANTUM_SIZE);
  },
  dynCall: function (sig, ptr, args) {
    if (args && args.length) {
      assert(args.length == sig.length-1);
      assert(('dynCall_' + sig) in Module, 'bad function pointer type - no table for sig \'' + sig + '\'');
      return Module['dynCall_' + sig].apply(null, [ptr].concat(args));
    } else {
      assert(sig.length == 1);
      assert(('dynCall_' + sig) in Module, 'bad function pointer type - no table for sig \'' + sig + '\'');
      return Module['dynCall_' + sig].call(null, ptr);
    }
  },
  functionPointers: [null],
  addFunction: function (func) {
    for (var i = 0; i < Runtime.functionPointers.length; i++) {
      if (!Runtime.functionPointers[i]) {
        Runtime.functionPointers[i] = func;
        return 2*(1 + i);
      }
    }
    throw 'Finished up all reserved function pointers. Use a higher value for RESERVED_FUNCTION_POINTERS.';
  },
  removeFunction: function (index) {
    Runtime.functionPointers[(index-2)/2] = null;
  },
  warnOnce: function (text) {
    if (!Runtime.warnOnce.shown) Runtime.warnOnce.shown = {};
    if (!Runtime.warnOnce.shown[text]) {
      Runtime.warnOnce.shown[text] = 1;
      Module.printErr(text);
    }
  },
  funcWrappers: {},
  getFuncWrapper: function (func, sig) {
    assert(sig);
    if (!Runtime.funcWrappers[sig]) {
      Runtime.funcWrappers[sig] = {};
    }
    var sigCache = Runtime.funcWrappers[sig];
    if (!sigCache[func]) {
      // optimize away arguments usage in common cases
      if (sig.length === 1) {
        sigCache[func] = function dynCall_wrapper() {
          return Runtime.dynCall(sig, func);
        };
      } else if (sig.length === 2) {
        sigCache[func] = function dynCall_wrapper(arg) {
          return Runtime.dynCall(sig, func, [arg]);
        };
      } else {
        // general case
        sigCache[func] = function dynCall_wrapper() {
          return Runtime.dynCall(sig, func, Array.prototype.slice.call(arguments));
        };
      }
    }
    return sigCache[func];
  },
  getCompilerSetting: function (name) {
    throw 'You must build with -s RETAIN_COMPILER_SETTINGS=1 for Runtime.getCompilerSetting or emscripten_get_compiler_setting to work';
  },
  stackAlloc: function (size) { var ret = STACKTOP;STACKTOP = (STACKTOP + size)|0;STACKTOP = (((STACKTOP)+15)&-16);(assert((((STACKTOP|0) < (STACK_MAX|0))|0))|0); return ret; },
  staticAlloc: function (size) { var ret = STATICTOP;STATICTOP = (STATICTOP + (assert(!staticSealed),size))|0;STATICTOP = (((STATICTOP)+15)&-16); return ret; },
  dynamicAlloc: function (size) { assert(DYNAMICTOP_PTR);var ret = HEAP32[DYNAMICTOP_PTR>>2];var end = (((ret + size + 15)|0) & -16);HEAP32[DYNAMICTOP_PTR>>2] = end;if (end >= TOTAL_MEMORY) {var success = enlargeMemory();if (!success) {HEAP32[DYNAMICTOP_PTR>>2] = ret;return 0;}}return ret;},
  alignMemory: function (size,quantum) { var ret = size = Math.ceil((size)/(quantum ? quantum : 16))*(quantum ? quantum : 16); return ret; },
  makeBigInt: function (low,high,unsigned) { var ret = (unsigned ? ((+((low>>>0)))+((+((high>>>0)))*4294967296.0)) : ((+((low>>>0)))+((+((high|0)))*4294967296.0))); return ret; },
  GLOBAL_BASE: 1024,
  QUANTUM_SIZE: 4,
  __dummy__: 0
}



Module["Runtime"] = Runtime;



//========================================
// Runtime essentials
//========================================

var ABORT = 0; // whether we are quitting the application. no code should run after this. set in exit() and abort()
var EXITSTATUS = 0;

/** @type {function(*, string=)} */
function assert(condition, text) {
  if (!condition) {
    abort('Assertion failed: ' + text);
  }
}

var globalScope = this;

// Returns the C function with a specified identifier (for C++, you need to do manual name mangling)
function getCFunc(ident) {
  var func = Module['_' + ident]; // closure exported function
  if (!func) {
    try { func = eval('_' + ident); } catch(e) {}
  }
  assert(func, 'Cannot call unknown function ' + ident + ' (perhaps LLVM optimizations or closure removed it?)');
  return func;
}

var cwrap, ccall;
(function(){
  var JSfuncs = {
    // Helpers for cwrap -- it can't refer to Runtime directly because it might
    // be renamed by closure, instead it calls JSfuncs['stackSave'].body to find
    // out what the minified function name is.
    'stackSave': function() {
      Runtime.stackSave()
    },
    'stackRestore': function() {
      Runtime.stackRestore()
    },
    // type conversion from js to c
    'arrayToC' : function(arr) {
      var ret = Runtime.stackAlloc(arr.length);
      writeArrayToMemory(arr, ret);
      return ret;
    },
    'stringToC' : function(str) {
      var ret = 0;
      if (str !== null && str !== undefined && str !== 0) { // null string
        // at most 4 bytes per UTF-8 code point, +1 for the trailing '\0'
        var len = (str.length << 2) + 1;
        ret = Runtime.stackAlloc(len);
        stringToUTF8(str, ret, len);
      }
      return ret;
    }
  };
  // For fast lookup of conversion functions
  var toC = {'string' : JSfuncs['stringToC'], 'array' : JSfuncs['arrayToC']};

  // C calling interface.
  ccall = function ccallFunc(ident, returnType, argTypes, args, opts) {
    var func = getCFunc(ident);
    var cArgs = [];
    var stack = 0;
    assert(returnType !== 'array', 'Return type should not be "array".');
    if (args) {
      for (var i = 0; i < args.length; i++) {
        var converter = toC[argTypes[i]];
        if (converter) {
          if (stack === 0) stack = Runtime.stackSave();
          cArgs[i] = converter(args[i]);
        } else {
          cArgs[i] = args[i];
        }
      }
    }
    var ret = func.apply(null, cArgs);
    if ((!opts || !opts.async) && typeof EmterpreterAsync === 'object') {
      assert(!EmterpreterAsync.state, 'cannot start async op with normal JS calling ccall');
    }
    if (opts && opts.async) assert(!returnType, 'async ccalls cannot return values');
    if (returnType === 'string') ret = Pointer_stringify(ret);
    if (stack !== 0) {
      if (opts && opts.async) {
        EmterpreterAsync.asyncFinalizers.push(function() {
          Runtime.stackRestore(stack);
        });
        return;
      }
      Runtime.stackRestore(stack);
    }
    return ret;
  }

  var sourceRegex = /^function\s*[a-zA-Z$_0-9]*\s*\(([^)]*)\)\s*{\s*([^*]*?)[\s;]*(?:return\s*(.*?)[;\s]*)?}$/;
  function parseJSFunc(jsfunc) {
    // Match the body and the return value of a javascript function source
    var parsed = jsfunc.toString().match(sourceRegex).slice(1);
    return {arguments : parsed[0], body : parsed[1], returnValue: parsed[2]}
  }

  // sources of useful functions. we create this lazily as it can trigger a source decompression on this entire file
  var JSsource = null;
  function ensureJSsource() {
    if (!JSsource) {
      JSsource = {};
      for (var fun in JSfuncs) {
        if (JSfuncs.hasOwnProperty(fun)) {
          // Elements of toCsource are arrays of three items:
          // the code, and the return value
          JSsource[fun] = parseJSFunc(JSfuncs[fun]);
        }
      }
    }
  }

  cwrap = function cwrap(ident, returnType, argTypes) {
    argTypes = argTypes || [];
    var cfunc = getCFunc(ident);
    // When the function takes numbers and returns a number, we can just return
    // the original function
    var numericArgs = argTypes.every(function(type){ return type === 'number'});
    var numericRet = (returnType !== 'string');
    if ( numericRet && numericArgs) {
      return cfunc;
    }
    // Creation of the arguments list (["$1","$2",...,"$nargs"])
    var argNames = argTypes.map(function(x,i){return '$'+i});
    var funcstr = "(function(" + argNames.join(',') + ") {";
    var nargs = argTypes.length;
    if (!numericArgs) {
      // Generate the code needed to convert the arguments from javascript
      // values to pointers
      ensureJSsource();
      funcstr += 'var stack = ' + JSsource['stackSave'].body + ';';
      for (var i = 0; i < nargs; i++) {
        var arg = argNames[i], type = argTypes[i];
        if (type === 'number') continue;
        var convertCode = JSsource[type + 'ToC']; // [code, return]
        funcstr += 'var ' + convertCode.arguments + ' = ' + arg + ';';
        funcstr += convertCode.body + ';';
        funcstr += arg + '=(' + convertCode.returnValue + ');';
      }
    }

    // When the code is compressed, the name of cfunc is not literally 'cfunc' anymore
    var cfuncname = parseJSFunc(function(){return cfunc}).returnValue;
    // Call the function
    funcstr += 'var ret = ' + cfuncname + '(' + argNames.join(',') + ');';
    if (!numericRet) { // Return type can only by 'string' or 'number'
      // Convert the result to a string
      var strgfy = parseJSFunc(function(){return Pointer_stringify}).returnValue;
      funcstr += 'ret = ' + strgfy + '(ret);';
    }
    funcstr += "if (typeof EmterpreterAsync === 'object') { assert(!EmterpreterAsync.state, 'cannot start async op with normal JS calling cwrap') }";
    if (!numericArgs) {
      // If we had a stack, restore it
      ensureJSsource();
      funcstr += JSsource['stackRestore'].body.replace('()', '(stack)') + ';';
    }
    funcstr += 'return ret})';
    return eval(funcstr);
  };
})();
Module["ccall"] = ccall;
Module["cwrap"] = cwrap;

/** @type {function(number, number, string, boolean=)} */
function setValue(ptr, value, type, noSafe) {
  type = type || 'i8';
  if (type.charAt(type.length-1) === '*') type = 'i32'; // pointers are 32-bit
    switch(type) {
      case 'i1': HEAP8[((ptr)>>0)]=value; break;
      case 'i8': HEAP8[((ptr)>>0)]=value; break;
      case 'i16': HEAP16[((ptr)>>1)]=value; break;
      case 'i32': HEAP32[((ptr)>>2)]=value; break;
      case 'i64': (tempI64 = [value>>>0,(tempDouble=value,(+(Math_abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math_min((+(Math_floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math_ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[((ptr)>>2)]=tempI64[0],HEAP32[(((ptr)+(4))>>2)]=tempI64[1]); break;
      case 'float': HEAPF32[((ptr)>>2)]=value; break;
      case 'double': HEAPF64[((ptr)>>3)]=value; break;
      default: abort('invalid type for setValue: ' + type);
    }
}
Module["setValue"] = setValue;

/** @type {function(number, string, boolean=)} */
function getValue(ptr, type, noSafe) {
  type = type || 'i8';
  if (type.charAt(type.length-1) === '*') type = 'i32'; // pointers are 32-bit
    switch(type) {
      case 'i1': return HEAP8[((ptr)>>0)];
      case 'i8': return HEAP8[((ptr)>>0)];
      case 'i16': return HEAP16[((ptr)>>1)];
      case 'i32': return HEAP32[((ptr)>>2)];
      case 'i64': return HEAP32[((ptr)>>2)];
      case 'float': return HEAPF32[((ptr)>>2)];
      case 'double': return HEAPF64[((ptr)>>3)];
      default: abort('invalid type for setValue: ' + type);
    }
  return null;
}
Module["getValue"] = getValue;

var ALLOC_NORMAL = 0; // Tries to use _malloc()
var ALLOC_STACK = 1; // Lives for the duration of the current function call
var ALLOC_STATIC = 2; // Cannot be freed
var ALLOC_DYNAMIC = 3; // Cannot be freed except through sbrk
var ALLOC_NONE = 4; // Do not allocate
Module["ALLOC_NORMAL"] = ALLOC_NORMAL;
Module["ALLOC_STACK"] = ALLOC_STACK;
Module["ALLOC_STATIC"] = ALLOC_STATIC;
Module["ALLOC_DYNAMIC"] = ALLOC_DYNAMIC;
Module["ALLOC_NONE"] = ALLOC_NONE;

// allocate(): This is for internal use. You can use it yourself as well, but the interface
//             is a little tricky (see docs right below). The reason is that it is optimized
//             for multiple syntaxes to save space in generated code. So you should
//             normally not use allocate(), and instead allocate memory using _malloc(),
//             initialize it with setValue(), and so forth.
// @slab: An array of data, or a number. If a number, then the size of the block to allocate,
//        in *bytes* (note that this is sometimes confusing: the next parameter does not
//        affect this!)
// @types: Either an array of types, one for each byte (or 0 if no type at that position),
//         or a single type which is used for the entire block. This only matters if there
//         is initial data - if @slab is a number, then this does not matter at all and is
//         ignored.
// @allocator: How to allocate memory, see ALLOC_*
/** @type {function((TypedArray|Array<number>|number), string, number, number=)} */
function allocate(slab, types, allocator, ptr) {
  var zeroinit, size;
  if (typeof slab === 'number') {
    zeroinit = true;
    size = slab;
  } else {
    zeroinit = false;
    size = slab.length;
  }

  var singleType = typeof types === 'string' ? types : null;

  var ret;
  if (allocator == ALLOC_NONE) {
    ret = ptr;
  } else {
    ret = [typeof _malloc === 'function' ? _malloc : Runtime.staticAlloc, Runtime.stackAlloc, Runtime.staticAlloc, Runtime.dynamicAlloc][allocator === undefined ? ALLOC_STATIC : allocator](Math.max(size, singleType ? 1 : types.length));
  }

  if (zeroinit) {
    var ptr = ret, stop;
    assert((ret & 3) == 0);
    stop = ret + (size & ~3);
    for (; ptr < stop; ptr += 4) {
      HEAP32[((ptr)>>2)]=0;
    }
    stop = ret + size;
    while (ptr < stop) {
      HEAP8[((ptr++)>>0)]=0;
    }
    return ret;
  }

  if (singleType === 'i8') {
    if (slab.subarray || slab.slice) {
      HEAPU8.set(/** @type {!Uint8Array} */ (slab), ret);
    } else {
      HEAPU8.set(new Uint8Array(slab), ret);
    }
    return ret;
  }

  var i = 0, type, typeSize, previousType;
  while (i < size) {
    var curr = slab[i];

    if (typeof curr === 'function') {
      curr = Runtime.getFunctionIndex(curr);
    }

    type = singleType || types[i];
    if (type === 0) {
      i++;
      continue;
    }
    assert(type, 'Must know what type to store in allocate!');

    if (type == 'i64') type = 'i32'; // special case: we have one i32 here, and one i32 later

    setValue(ret+i, curr, type);

    // no need to look up size unless type changes, so cache it
    if (previousType !== type) {
      typeSize = Runtime.getNativeTypeSize(type);
      previousType = type;
    }
    i += typeSize;
  }

  return ret;
}
Module["allocate"] = allocate;

// Allocate memory during any stage of startup - static memory early on, dynamic memory later, malloc when ready
function getMemory(size) {
  if (!staticSealed) return Runtime.staticAlloc(size);
  if (!runtimeInitialized) return Runtime.dynamicAlloc(size);
  return _malloc(size);
}
Module["getMemory"] = getMemory;

/** @type {function(number, number=)} */
function Pointer_stringify(ptr, length) {
  if (length === 0 || !ptr) return '';
  // TODO: use TextDecoder
  // Find the length, and check for UTF while doing so
  var hasUtf = 0;
  var t;
  var i = 0;
  while (1) {
    assert(ptr + i < TOTAL_MEMORY);
    t = HEAPU8[(((ptr)+(i))>>0)];
    hasUtf |= t;
    if (t == 0 && !length) break;
    i++;
    if (length && i == length) break;
  }
  if (!length) length = i;

  var ret = '';

  if (hasUtf < 128) {
    var MAX_CHUNK = 1024; // split up into chunks, because .apply on a huge string can overflow the stack
    var curr;
    while (length > 0) {
      curr = String.fromCharCode.apply(String, HEAPU8.subarray(ptr, ptr + Math.min(length, MAX_CHUNK)));
      ret = ret ? ret + curr : curr;
      ptr += MAX_CHUNK;
      length -= MAX_CHUNK;
    }
    return ret;
  }
  return Module['UTF8ToString'](ptr);
}
Module["Pointer_stringify"] = Pointer_stringify;

// Given a pointer 'ptr' to a null-terminated ASCII-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.

function AsciiToString(ptr) {
  var str = '';
  while (1) {
    var ch = HEAP8[((ptr++)>>0)];
    if (!ch) return str;
    str += String.fromCharCode(ch);
  }
}
Module["AsciiToString"] = AsciiToString;

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in ASCII form. The copy will require at most str.length+1 bytes of space in the HEAP.

function stringToAscii(str, outPtr) {
  return writeAsciiToMemory(str, outPtr, false);
}
Module["stringToAscii"] = stringToAscii;

// Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the given array that contains uint8 values, returns
// a copy of that string as a Javascript String object.

var UTF8Decoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf8') : undefined;
function UTF8ArrayToString(u8Array, idx) {
  var endPtr = idx;
  // TextDecoder needs to know the byte length in advance, it doesn't stop on null terminator by itself.
  // Also, use the length info to avoid running tiny strings through TextDecoder, since .subarray() allocates garbage.
  while (u8Array[endPtr]) ++endPtr;

  if (endPtr - idx > 16 && u8Array.subarray && UTF8Decoder) {
    return UTF8Decoder.decode(u8Array.subarray(idx, endPtr));
  } else {
    var u0, u1, u2, u3, u4, u5;

    var str = '';
    while (1) {
      // For UTF8 byte structure, see http://en.wikipedia.org/wiki/UTF-8#Description and https://www.ietf.org/rfc/rfc2279.txt and https://tools.ietf.org/html/rfc3629
      u0 = u8Array[idx++];
      if (!u0) return str;
      if (!(u0 & 0x80)) { str += String.fromCharCode(u0); continue; }
      u1 = u8Array[idx++] & 63;
      if ((u0 & 0xE0) == 0xC0) { str += String.fromCharCode(((u0 & 31) << 6) | u1); continue; }
      u2 = u8Array[idx++] & 63;
      if ((u0 & 0xF0) == 0xE0) {
        u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
      } else {
        u3 = u8Array[idx++] & 63;
        if ((u0 & 0xF8) == 0xF0) {
          u0 = ((u0 & 7) << 18) | (u1 << 12) | (u2 << 6) | u3;
        } else {
          u4 = u8Array[idx++] & 63;
          if ((u0 & 0xFC) == 0xF8) {
            u0 = ((u0 & 3) << 24) | (u1 << 18) | (u2 << 12) | (u3 << 6) | u4;
          } else {
            u5 = u8Array[idx++] & 63;
            u0 = ((u0 & 1) << 30) | (u1 << 24) | (u2 << 18) | (u3 << 12) | (u4 << 6) | u5;
          }
        }
      }
      if (u0 < 0x10000) {
        str += String.fromCharCode(u0);
      } else {
        var ch = u0 - 0x10000;
        str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
      }
    }
  }
}
Module["UTF8ArrayToString"] = UTF8ArrayToString;

// Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.

function UTF8ToString(ptr) {
  return UTF8ArrayToString(HEAPU8,ptr);
}
Module["UTF8ToString"] = UTF8ToString;

// Copies the given Javascript String object 'str' to the given byte array at address 'outIdx',
// encoded in UTF8 form and null-terminated. The copy will require at most str.length*4+1 bytes of space in the HEAP.
// Use the function lengthBytesUTF8 to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   outU8Array: the array to copy to. Each index in this array is assumed to be one 8-byte element.
//   outIdx: The starting offset in the array to begin the copying.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
//                    terminator, i.e. if maxBytesToWrite=1, only the null terminator will be written and nothing else.
//                    maxBytesToWrite=0 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF8Array(str, outU8Array, outIdx, maxBytesToWrite) {
  if (!(maxBytesToWrite > 0)) // Parameter maxBytesToWrite is not optional. Negative values, 0, null, undefined and false each don't write out any bytes.
    return 0;

  var startIdx = outIdx;
  var endIdx = outIdx + maxBytesToWrite - 1; // -1 for string null terminator.
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    // For UTF8 byte structure, see http://en.wikipedia.org/wiki/UTF-8#Description and https://www.ietf.org/rfc/rfc2279.txt and https://tools.ietf.org/html/rfc3629
    var u = str.charCodeAt(i); // possibly a lead surrogate
    if (u >= 0xD800 && u <= 0xDFFF) u = 0x10000 + ((u & 0x3FF) << 10) | (str.charCodeAt(++i) & 0x3FF);
    if (u <= 0x7F) {
      if (outIdx >= endIdx) break;
      outU8Array[outIdx++] = u;
    } else if (u <= 0x7FF) {
      if (outIdx + 1 >= endIdx) break;
      outU8Array[outIdx++] = 0xC0 | (u >> 6);
      outU8Array[outIdx++] = 0x80 | (u & 63);
    } else if (u <= 0xFFFF) {
      if (outIdx + 2 >= endIdx) break;
      outU8Array[outIdx++] = 0xE0 | (u >> 12);
      outU8Array[outIdx++] = 0x80 | ((u >> 6) & 63);
      outU8Array[outIdx++] = 0x80 | (u & 63);
    } else if (u <= 0x1FFFFF) {
      if (outIdx + 3 >= endIdx) break;
      outU8Array[outIdx++] = 0xF0 | (u >> 18);
      outU8Array[outIdx++] = 0x80 | ((u >> 12) & 63);
      outU8Array[outIdx++] = 0x80 | ((u >> 6) & 63);
      outU8Array[outIdx++] = 0x80 | (u & 63);
    } else if (u <= 0x3FFFFFF) {
      if (outIdx + 4 >= endIdx) break;
      outU8Array[outIdx++] = 0xF8 | (u >> 24);
      outU8Array[outIdx++] = 0x80 | ((u >> 18) & 63);
      outU8Array[outIdx++] = 0x80 | ((u >> 12) & 63);
      outU8Array[outIdx++] = 0x80 | ((u >> 6) & 63);
      outU8Array[outIdx++] = 0x80 | (u & 63);
    } else {
      if (outIdx + 5 >= endIdx) break;
      outU8Array[outIdx++] = 0xFC | (u >> 30);
      outU8Array[outIdx++] = 0x80 | ((u >> 24) & 63);
      outU8Array[outIdx++] = 0x80 | ((u >> 18) & 63);
      outU8Array[outIdx++] = 0x80 | ((u >> 12) & 63);
      outU8Array[outIdx++] = 0x80 | ((u >> 6) & 63);
      outU8Array[outIdx++] = 0x80 | (u & 63);
    }
  }
  // Null-terminate the pointer to the buffer.
  outU8Array[outIdx] = 0;
  return outIdx - startIdx;
}
Module["stringToUTF8Array"] = stringToUTF8Array;

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF8 form. The copy will require at most str.length*4+1 bytes of space in the HEAP.
// Use the function lengthBytesUTF8 to compute the exact number of bytes (excluding null terminator) that this function will write.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF8(str, outPtr, maxBytesToWrite) {
  assert(typeof maxBytesToWrite == 'number', 'stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!');
  return stringToUTF8Array(str, HEAPU8,outPtr, maxBytesToWrite);
}
Module["stringToUTF8"] = stringToUTF8;

// Returns the number of bytes the given Javascript string takes if encoded as a UTF8 byte array, EXCLUDING the null terminator byte.

function lengthBytesUTF8(str) {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var u = str.charCodeAt(i); // possibly a lead surrogate
    if (u >= 0xD800 && u <= 0xDFFF) u = 0x10000 + ((u & 0x3FF) << 10) | (str.charCodeAt(++i) & 0x3FF);
    if (u <= 0x7F) {
      ++len;
    } else if (u <= 0x7FF) {
      len += 2;
    } else if (u <= 0xFFFF) {
      len += 3;
    } else if (u <= 0x1FFFFF) {
      len += 4;
    } else if (u <= 0x3FFFFFF) {
      len += 5;
    } else {
      len += 6;
    }
  }
  return len;
}
Module["lengthBytesUTF8"] = lengthBytesUTF8;

// Given a pointer 'ptr' to a null-terminated UTF16LE-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.

var UTF16Decoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf-16le') : undefined;
function UTF16ToString(ptr) {
  assert(ptr % 2 == 0, 'Pointer passed to UTF16ToString must be aligned to two bytes!');
  var endPtr = ptr;
  // TextDecoder needs to know the byte length in advance, it doesn't stop on null terminator by itself.
  // Also, use the length info to avoid running tiny strings through TextDecoder, since .subarray() allocates garbage.
  var idx = endPtr >> 1;
  while (HEAP16[idx]) ++idx;
  endPtr = idx << 1;

  if (endPtr - ptr > 32 && UTF16Decoder) {
    return UTF16Decoder.decode(HEAPU8.subarray(ptr, endPtr));
  } else {
    var i = 0;

    var str = '';
    while (1) {
      var codeUnit = HEAP16[(((ptr)+(i*2))>>1)];
      if (codeUnit == 0) return str;
      ++i;
      // fromCharCode constructs a character from a UTF-16 code unit, so we can pass the UTF16 string right through.
      str += String.fromCharCode(codeUnit);
    }
  }
}


// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF16 form. The copy will require at most str.length*4+2 bytes of space in the HEAP.
// Use the function lengthBytesUTF16() to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   outPtr: Byte address in Emscripten HEAP where to write the string to.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
//                    terminator, i.e. if maxBytesToWrite=2, only the null terminator will be written and nothing else.
//                    maxBytesToWrite<2 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF16(str, outPtr, maxBytesToWrite) {
  assert(outPtr % 2 == 0, 'Pointer passed to stringToUTF16 must be aligned to two bytes!');
  assert(typeof maxBytesToWrite == 'number', 'stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!');
  // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.
  if (maxBytesToWrite === undefined) {
    maxBytesToWrite = 0x7FFFFFFF;
  }
  if (maxBytesToWrite < 2) return 0;
  maxBytesToWrite -= 2; // Null terminator.
  var startPtr = outPtr;
  var numCharsToWrite = (maxBytesToWrite < str.length*2) ? (maxBytesToWrite / 2) : str.length;
  for (var i = 0; i < numCharsToWrite; ++i) {
    // charCodeAt returns a UTF-16 encoded code unit, so it can be directly written to the HEAP.
    var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
    HEAP16[((outPtr)>>1)]=codeUnit;
    outPtr += 2;
  }
  // Null-terminate the pointer to the HEAP.
  HEAP16[((outPtr)>>1)]=0;
  return outPtr - startPtr;
}


// Returns the number of bytes the given Javascript string takes if encoded as a UTF16 byte array, EXCLUDING the null terminator byte.

function lengthBytesUTF16(str) {
  return str.length*2;
}


function UTF32ToString(ptr) {
  assert(ptr % 4 == 0, 'Pointer passed to UTF32ToString must be aligned to four bytes!');
  var i = 0;

  var str = '';
  while (1) {
    var utf32 = HEAP32[(((ptr)+(i*4))>>2)];
    if (utf32 == 0)
      return str;
    ++i;
    // Gotcha: fromCharCode constructs a character from a UTF-16 encoded code (pair), not from a Unicode code point! So encode the code point to UTF-16 for constructing.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    if (utf32 >= 0x10000) {
      var ch = utf32 - 0x10000;
      str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
    } else {
      str += String.fromCharCode(utf32);
    }
  }
}


// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF32 form. The copy will require at most str.length*4+4 bytes of space in the HEAP.
// Use the function lengthBytesUTF32() to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   outPtr: Byte address in Emscripten HEAP where to write the string to.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
//                    terminator, i.e. if maxBytesToWrite=4, only the null terminator will be written and nothing else.
//                    maxBytesToWrite<4 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF32(str, outPtr, maxBytesToWrite) {
  assert(outPtr % 4 == 0, 'Pointer passed to stringToUTF32 must be aligned to four bytes!');
  assert(typeof maxBytesToWrite == 'number', 'stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!');
  // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.
  if (maxBytesToWrite === undefined) {
    maxBytesToWrite = 0x7FFFFFFF;
  }
  if (maxBytesToWrite < 4) return 0;
  var startPtr = outPtr;
  var endPtr = startPtr + maxBytesToWrite - 4;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
    if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) {
      var trailSurrogate = str.charCodeAt(++i);
      codeUnit = 0x10000 + ((codeUnit & 0x3FF) << 10) | (trailSurrogate & 0x3FF);
    }
    HEAP32[((outPtr)>>2)]=codeUnit;
    outPtr += 4;
    if (outPtr + 4 > endPtr) break;
  }
  // Null-terminate the pointer to the HEAP.
  HEAP32[((outPtr)>>2)]=0;
  return outPtr - startPtr;
}


// Returns the number of bytes the given Javascript string takes if encoded as a UTF16 byte array, EXCLUDING the null terminator byte.

function lengthBytesUTF32(str) {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var codeUnit = str.charCodeAt(i);
    if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) ++i; // possibly a lead surrogate, so skip over the tail surrogate.
    len += 4;
  }

  return len;
}


function demangle(func) {
  var __cxa_demangle_func = Module['___cxa_demangle'] || Module['__cxa_demangle'];
  if (__cxa_demangle_func) {
    try {
      var s =
        func.substr(1);
      var len = lengthBytesUTF8(s)+1;
      var buf = _malloc(len);
      stringToUTF8(s, buf, len);
      var status = _malloc(4);
      var ret = __cxa_demangle_func(buf, 0, 0, status);
      if (getValue(status, 'i32') === 0 && ret) {
        return Pointer_stringify(ret);
      }
      // otherwise, libcxxabi failed
    } catch(e) {
      // ignore problems here
    } finally {
      if (buf) _free(buf);
      if (status) _free(status);
      if (ret) _free(ret);
    }
    // failure when using libcxxabi, don't demangle
    return func;
  }
  Runtime.warnOnce('warning: build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling');
  return func;
}

function demangleAll(text) {
  var regex =
    /__Z[\w\d_]+/g;
  return text.replace(regex,
    function(x) {
      var y = demangle(x);
      return x === y ? x : (x + ' [' + y + ']');
    });
}

function jsStackTrace() {
  var err = new Error();
  if (!err.stack) {
    // IE10+ special cases: It does have callstack info, but it is only populated if an Error object is thrown,
    // so try that as a special-case.
    try {
      throw new Error(0);
    } catch(e) {
      err = e;
    }
    if (!err.stack) {
      return '(no stack trace available)';
    }
  }
  return err.stack.toString();
}

function stackTrace() {
  var js = jsStackTrace();
  if (Module['extraStackTrace']) js += '\n' + Module['extraStackTrace']();
  return demangleAll(js);
}
Module["stackTrace"] = stackTrace;

// Memory management

var PAGE_SIZE = 16384;
var WASM_PAGE_SIZE = 65536;
var ASMJS_PAGE_SIZE = 16777216;
var MIN_TOTAL_MEMORY = 16777216;

function alignUp(x, multiple) {
  if (x % multiple > 0) {
    x += multiple - (x % multiple);
  }
  return x;
}

var HEAP,
/** @type {ArrayBuffer} */
  buffer,
/** @type {Int8Array} */
  HEAP8,
/** @type {Uint8Array} */
  HEAPU8,
/** @type {Int16Array} */
  HEAP16,
/** @type {Uint16Array} */
  HEAPU16,
/** @type {Int32Array} */
  HEAP32,
/** @type {Uint32Array} */
  HEAPU32,
/** @type {Float32Array} */
  HEAPF32,
/** @type {Float64Array} */
  HEAPF64;

function updateGlobalBuffer(buf) {
  Module['buffer'] = buffer = buf;
}

function updateGlobalBufferViews() {
  Module['HEAP8'] = HEAP8 = new Int8Array(buffer);
  Module['HEAP16'] = HEAP16 = new Int16Array(buffer);
  Module['HEAP32'] = HEAP32 = new Int32Array(buffer);
  Module['HEAPU8'] = HEAPU8 = new Uint8Array(buffer);
  Module['HEAPU16'] = HEAPU16 = new Uint16Array(buffer);
  Module['HEAPU32'] = HEAPU32 = new Uint32Array(buffer);
  Module['HEAPF32'] = HEAPF32 = new Float32Array(buffer);
  Module['HEAPF64'] = HEAPF64 = new Float64Array(buffer);
}

var STATIC_BASE, STATICTOP, staticSealed; // static area
var STACK_BASE, STACKTOP, STACK_MAX; // stack area
var DYNAMIC_BASE, DYNAMICTOP_PTR; // dynamic area handled by sbrk

  STATIC_BASE = STATICTOP = STACK_BASE = STACKTOP = STACK_MAX = DYNAMIC_BASE = DYNAMICTOP_PTR = 0;
  staticSealed = false;


// Initializes the stack cookie. Called at the startup of main and at the startup of each thread in pthreads mode.
function writeStackCookie() {
  assert((STACK_MAX & 3) == 0);
  HEAPU32[(STACK_MAX >> 2)-1] = 0x02135467;
  HEAPU32[(STACK_MAX >> 2)-2] = 0x89BACDFE;
}

function checkStackCookie() {
  if (HEAPU32[(STACK_MAX >> 2)-1] != 0x02135467 || HEAPU32[(STACK_MAX >> 2)-2] != 0x89BACDFE) {
    abort('Stack overflow! Stack cookie has been overwritten, expected hex dwords 0x89BACDFE and 0x02135467, but received 0x' + HEAPU32[(STACK_MAX >> 2)-2].toString(16) + ' ' + HEAPU32[(STACK_MAX >> 2)-1].toString(16));
  }
  // Also test the global address 0 for integrity. This check is not compatible with SAFE_SPLIT_MEMORY though, since that mode already tests all address 0 accesses on its own.
  if (HEAP32[0] !== 0x63736d65 /* 'emsc' */) throw 'Runtime error: The application has corrupted its heap memory area (address zero)!';
}

function abortStackOverflow(allocSize) {
  abort('Stack overflow! Attempted to allocate ' + allocSize + ' bytes on the stack, but stack has only ' + (STACK_MAX - Module['asm'].stackSave() + allocSize) + ' bytes available!');
}

function abortOnCannotGrowMemory() {
  abort('Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value ' + TOTAL_MEMORY + ', (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ');
}


function enlargeMemory() {
  abortOnCannotGrowMemory();
}


var TOTAL_STACK = Module['TOTAL_STACK'] || 5242880;
var TOTAL_MEMORY = Module['TOTAL_MEMORY'] || 16777216;
if (TOTAL_MEMORY < TOTAL_STACK) Module.printErr('TOTAL_MEMORY should be larger than TOTAL_STACK, was ' + TOTAL_MEMORY + '! (TOTAL_STACK=' + TOTAL_STACK + ')');

// Initialize the runtime's memory
// check for full engine support (use string 'subarray' to avoid closure compiler confusion)
assert(typeof Int32Array !== 'undefined' && typeof Float64Array !== 'undefined' && Int32Array.prototype.subarray !== undefined && Int32Array.prototype.set !== undefined,
       'JS engine does not provide full typed array support');



// Use a provided buffer, if there is one, or else allocate a new one
if (Module['buffer']) {
  buffer = Module['buffer'];
  assert(buffer.byteLength === TOTAL_MEMORY, 'provided buffer should be ' + TOTAL_MEMORY + ' bytes, but it is ' + buffer.byteLength);
} else {
  // Use a WebAssembly memory where available
  if (typeof WebAssembly === 'object' && typeof WebAssembly.Memory === 'function') {
    assert(TOTAL_MEMORY % WASM_PAGE_SIZE === 0);
    Module['wasmMemory'] = new WebAssembly.Memory({ 'initial': TOTAL_MEMORY / WASM_PAGE_SIZE, 'maximum': TOTAL_MEMORY / WASM_PAGE_SIZE });
    buffer = Module['wasmMemory'].buffer;
  } else
  {
    buffer = new ArrayBuffer(TOTAL_MEMORY);
  }
  assert(buffer.byteLength === TOTAL_MEMORY);
}
updateGlobalBufferViews();


function getTotalMemory() {
  return TOTAL_MEMORY;
}

// Endianness check (note: assumes compiler arch was little-endian)
  HEAP32[0] = 0x63736d65; /* 'emsc' */
HEAP16[1] = 0x6373;
if (HEAPU8[2] !== 0x73 || HEAPU8[3] !== 0x63) throw 'Runtime error: expected the system to be little-endian!';

Module['HEAP'] = HEAP;
Module['buffer'] = buffer;
Module['HEAP8'] = HEAP8;
Module['HEAP16'] = HEAP16;
Module['HEAP32'] = HEAP32;
Module['HEAPU8'] = HEAPU8;
Module['HEAPU16'] = HEAPU16;
Module['HEAPU32'] = HEAPU32;
Module['HEAPF32'] = HEAPF32;
Module['HEAPF64'] = HEAPF64;

function callRuntimeCallbacks(callbacks) {
  while(callbacks.length > 0) {
    var callback = callbacks.shift();
    if (typeof callback == 'function') {
      callback();
      continue;
    }
    var func = callback.func;
    if (typeof func === 'number') {
      if (callback.arg === undefined) {
        Module['dynCall_v'](func);
      } else {
        Module['dynCall_vi'](func, callback.arg);
      }
    } else {
      func(callback.arg === undefined ? null : callback.arg);
    }
  }
}

var __ATPRERUN__  = []; // functions called before the runtime is initialized
var __ATINIT__    = []; // functions called during startup
var __ATMAIN__    = []; // functions called when main() is to be run
var __ATEXIT__    = []; // functions called during shutdown
var __ATPOSTRUN__ = []; // functions called after the runtime has exited

var runtimeInitialized = false;
var runtimeExited = false;


function preRun() {
  // compatibility - merge in anything from Module['preRun'] at this time
  if (Module['preRun']) {
    if (typeof Module['preRun'] == 'function') Module['preRun'] = [Module['preRun']];
    while (Module['preRun'].length) {
      addOnPreRun(Module['preRun'].shift());
    }
  }
  callRuntimeCallbacks(__ATPRERUN__);
}

function ensureInitRuntime() {
  checkStackCookie();
  if (runtimeInitialized) return;
  runtimeInitialized = true;
  callRuntimeCallbacks(__ATINIT__);
}

function preMain() {
  checkStackCookie();
  callRuntimeCallbacks(__ATMAIN__);
}

function exitRuntime() {
  checkStackCookie();
  callRuntimeCallbacks(__ATEXIT__);
  runtimeExited = true;
}

function postRun() {
  checkStackCookie();
  // compatibility - merge in anything from Module['postRun'] at this time
  if (Module['postRun']) {
    if (typeof Module['postRun'] == 'function') Module['postRun'] = [Module['postRun']];
    while (Module['postRun'].length) {
      addOnPostRun(Module['postRun'].shift());
    }
  }
  callRuntimeCallbacks(__ATPOSTRUN__);
}

function addOnPreRun(cb) {
  __ATPRERUN__.unshift(cb);
}
Module["addOnPreRun"] = addOnPreRun;

function addOnInit(cb) {
  __ATINIT__.unshift(cb);
}
Module["addOnInit"] = addOnInit;

function addOnPreMain(cb) {
  __ATMAIN__.unshift(cb);
}
Module["addOnPreMain"] = addOnPreMain;

function addOnExit(cb) {
  __ATEXIT__.unshift(cb);
}
Module["addOnExit"] = addOnExit;

function addOnPostRun(cb) {
  __ATPOSTRUN__.unshift(cb);
}
Module["addOnPostRun"] = addOnPostRun;

// Tools

/** @type {function(string, boolean=, number=)} */
function intArrayFromString(stringy, dontAddNull, length) {
  var len = length > 0 ? length : lengthBytesUTF8(stringy)+1;
  var u8array = new Array(len);
  var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
  if (dontAddNull) u8array.length = numBytesWritten;
  return u8array;
}
Module["intArrayFromString"] = intArrayFromString;

function intArrayToString(array) {
  var ret = [];
  for (var i = 0; i < array.length; i++) {
    var chr = array[i];
    if (chr > 0xFF) {
      assert(false, 'Character code ' + chr + ' (' + String.fromCharCode(chr) + ')  at offset ' + i + ' not in 0x00-0xFF.');
      chr &= 0xFF;
    }
    ret.push(String.fromCharCode(chr));
  }
  return ret.join('');
}
Module["intArrayToString"] = intArrayToString;

// Deprecated: This function should not be called because it is unsafe and does not provide
// a maximum length limit of how many bytes it is allowed to write. Prefer calling the
// function stringToUTF8Array() instead, which takes in a maximum length that can be used
// to be secure from out of bounds writes.
/** @deprecated */
function writeStringToMemory(string, buffer, dontAddNull) {
  Runtime.warnOnce('writeStringToMemory is deprecated and should not be called! Use stringToUTF8() instead!');

  var /** @type {number} */ lastChar, /** @type {number} */ end;
  if (dontAddNull) {
    // stringToUTF8Array always appends null. If we don't want to do that, remember the
    // character that existed at the location where the null will be placed, and restore
    // that after the write (below).
    end = buffer + lengthBytesUTF8(string);
    lastChar = HEAP8[end];
  }
  stringToUTF8(string, buffer, Infinity);
  if (dontAddNull) HEAP8[end] = lastChar; // Restore the value under the null character.
}
Module["writeStringToMemory"] = writeStringToMemory;

function writeArrayToMemory(array, buffer) {
  assert(array.length >= 0, 'writeArrayToMemory array must have a length (should be an array or typed array)')
  HEAP8.set(array, buffer);
}
Module["writeArrayToMemory"] = writeArrayToMemory;

function writeAsciiToMemory(str, buffer, dontAddNull) {
  for (var i = 0; i < str.length; ++i) {
    assert(str.charCodeAt(i) === str.charCodeAt(i)&0xff);
    HEAP8[((buffer++)>>0)]=str.charCodeAt(i);
  }
  // Null-terminate the pointer to the HEAP.
  if (!dontAddNull) HEAP8[((buffer)>>0)]=0;
}
Module["writeAsciiToMemory"] = writeAsciiToMemory;

function unSign(value, bits, ignore) {
  if (value >= 0) {
    return value;
  }
  return bits <= 32 ? 2*Math.abs(1 << (bits-1)) + value // Need some trickery, since if bits == 32, we are right at the limit of the bits JS uses in bitshifts
                    : Math.pow(2, bits)         + value;
}
function reSign(value, bits, ignore) {
  if (value <= 0) {
    return value;
  }
  var half = bits <= 32 ? Math.abs(1 << (bits-1)) // abs is needed if bits == 32
                        : Math.pow(2, bits-1);
  if (value >= half && (bits <= 32 || value > half)) { // for huge values, we can hit the precision limit and always get true here. so don't do that
                                                       // but, in general there is no perfect solution here. With 64-bit ints, we get rounding and errors
                                                       // TODO: In i64 mode 1, resign the two parts separately and safely
    value = -2*half + value; // Cannot bitshift half, as it may be at the limit of the bits JS uses in bitshifts
  }
  return value;
}


// check for imul support, and also for correctness ( https://bugs.webkit.org/show_bug.cgi?id=126345 )
if (!Math['imul'] || Math['imul'](0xffffffff, 5) !== -5) Math['imul'] = function imul(a, b) {
  var ah  = a >>> 16;
  var al = a & 0xffff;
  var bh  = b >>> 16;
  var bl = b & 0xffff;
  return (al*bl + ((ah*bl + al*bh) << 16))|0;
};
Math.imul = Math['imul'];

if (!Math['fround']) {
  var froundBuffer = new Float32Array(1);
  Math['fround'] = function(x) { froundBuffer[0] = x; return froundBuffer[0] };
}
Math.fround = Math['fround'];

if (!Math['clz32']) Math['clz32'] = function(x) {
  x = x >>> 0;
  for (var i = 0; i < 32; i++) {
    if (x & (1 << (31 - i))) return i;
  }
  return 32;
};
Math.clz32 = Math['clz32']

if (!Math['trunc']) Math['trunc'] = function(x) {
  return x < 0 ? Math.ceil(x) : Math.floor(x);
};
Math.trunc = Math['trunc'];

var Math_abs = Math.abs;
var Math_cos = Math.cos;
var Math_sin = Math.sin;
var Math_tan = Math.tan;
var Math_acos = Math.acos;
var Math_asin = Math.asin;
var Math_atan = Math.atan;
var Math_atan2 = Math.atan2;
var Math_exp = Math.exp;
var Math_log = Math.log;
var Math_sqrt = Math.sqrt;
var Math_ceil = Math.ceil;
var Math_floor = Math.floor;
var Math_pow = Math.pow;
var Math_imul = Math.imul;
var Math_fround = Math.fround;
var Math_round = Math.round;
var Math_min = Math.min;
var Math_clz32 = Math.clz32;
var Math_trunc = Math.trunc;

// A counter of dependencies for calling run(). If we need to
// do asynchronous work before running, increment this and
// decrement it. Incrementing must happen in a place like
// PRE_RUN_ADDITIONS (used by emcc to add file preloading).
// Note that you can add dependencies in preRun, even though
// it happens right before run - run will be postponed until
// the dependencies are met.
var runDependencies = 0;
var runDependencyWatcher = null;
var dependenciesFulfilled = null; // overridden to take different actions when all run dependencies are fulfilled
var runDependencyTracking = {};

function getUniqueRunDependency(id) {
  var orig = id;
  while (1) {
    if (!runDependencyTracking[id]) return id;
    id = orig + Math.random();
  }
  return id;
}

function addRunDependency(id) {
  runDependencies++;
  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }
  if (id) {
    assert(!runDependencyTracking[id]);
    runDependencyTracking[id] = 1;
    if (runDependencyWatcher === null && typeof setInterval !== 'undefined') {
      // Check for missing dependencies every few seconds
      runDependencyWatcher = setInterval(function() {
        if (ABORT) {
          clearInterval(runDependencyWatcher);
          runDependencyWatcher = null;
          return;
        }
        var shown = false;
        for (var dep in runDependencyTracking) {
          if (!shown) {
            shown = true;
            Module.printErr('still waiting on run dependencies:');
          }
          Module.printErr('dependency: ' + dep);
        }
        if (shown) {
          Module.printErr('(end of list)');
        }
      }, 10000);
    }
  } else {
    Module.printErr('warning: run dependency added without ID');
  }
}
Module["addRunDependency"] = addRunDependency;

function removeRunDependency(id) {
  runDependencies--;
  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }
  if (id) {
    assert(runDependencyTracking[id]);
    delete runDependencyTracking[id];
  } else {
    Module.printErr('warning: run dependency removed without ID');
  }
  if (runDependencies == 0) {
    if (runDependencyWatcher !== null) {
      clearInterval(runDependencyWatcher);
      runDependencyWatcher = null;
    }
    if (dependenciesFulfilled) {
      var callback = dependenciesFulfilled;
      dependenciesFulfilled = null;
      callback(); // can add another dependenciesFulfilled
    }
  }
}
Module["removeRunDependency"] = removeRunDependency;

Module["preloadedImages"] = {}; // maps url to image data
Module["preloadedAudios"] = {}; // maps url to audio data



var memoryInitializer = null;



var /* show errors on likely calls to FS when it was not included */ FS = {
  error: function() {
    abort('Filesystem support (FS) was not included. The problem is that you are using files from JS, but files were not used from C/C++, so filesystem support was not auto-included. You can force-include filesystem support with  -s FORCE_FILESYSTEM=1');
  },
  init: function() { FS.error() },
  createDataFile: function() { FS.error() },
  createPreloadedFile: function() { FS.error() },
  createLazyFile: function() { FS.error() },
  open: function() { FS.error() },
  mkdev: function() { FS.error() },
  registerDevice: function() { FS.error() },
  analyzePath: function() { FS.error() },
  loadFilesFromDB: function() { FS.error() },

  ErrnoError: function ErrnoError() { FS.error() },
};
Module['FS_createDataFile'] = FS.createDataFile;
Module['FS_createPreloadedFile'] = FS.createPreloadedFile;


function integrateWasmJS(Module) {
  // wasm.js has several methods for creating the compiled code module here:
  //  * 'native-wasm' : use native WebAssembly support in the browser
  //  * 'interpret-s-expr': load s-expression code from a .wast and interpret
  //  * 'interpret-binary': load binary wasm and interpret
  //  * 'interpret-asm2wasm': load asm.js code, translate to wasm, and interpret
  //  * 'asmjs': no wasm, just load the asm.js code and use that (good for testing)
  // The method can be set at compile time (BINARYEN_METHOD), or runtime by setting Module['wasmJSMethod'].
  // The method can be a comma-separated list, in which case, we will try the
  // options one by one. Some of them can fail gracefully, and then we can try
  // the next.

  // inputs

  var method = Module['wasmJSMethod'] || 'native-wasm';
  Module['wasmJSMethod'] = method;

  var wasmTextFile = Module['wasmTextFile'] || 'compiled.3a7d1bdba919cff5.wast';
  var wasmBinaryFile = Module['wasmBinaryFile'] || 'compiled.3a7d1bdba919cff5.wasm';
  var asmjsCodeFile = Module['asmjsCodeFile'] || 'compiled.3a7d1bdba919cff5.temp.asm.js';

  if (typeof Module['locateFile'] === 'function') {
    wasmTextFile = Module['locateFile'](wasmTextFile);
    wasmBinaryFile = Module['locateFile'](wasmBinaryFile);
    asmjsCodeFile = Module['locateFile'](asmjsCodeFile);
  }

  // utilities

  var wasmPageSize = 64*1024;

  var asm2wasmImports = { // special asm2wasm imports
    "f64-rem": function(x, y) {
      return x % y;
    },
    "f64-to-int": function(x) {
      return x | 0;
    },
    "i32s-div": function(x, y) {
      return ((x | 0) / (y | 0)) | 0;
    },
    "i32u-div": function(x, y) {
      return ((x >>> 0) / (y >>> 0)) >>> 0;
    },
    "i32s-rem": function(x, y) {
      return ((x | 0) % (y | 0)) | 0;
    },
    "i32u-rem": function(x, y) {
      return ((x >>> 0) % (y >>> 0)) >>> 0;
    },
    "debugger": function() {
      debugger;
    },
  };

  var info = {
    'global': null,
    'env': null,
    'asm2wasm': asm2wasmImports,
    'parent': Module // Module inside wasm-js.cpp refers to wasm-js.cpp; this allows access to the outside program.
  };

  var exports = null;

  function lookupImport(mod, base) {
    var lookup = info;
    if (mod.indexOf('.') < 0) {
      lookup = (lookup || {})[mod];
    } else {
      var parts = mod.split('.');
      lookup = (lookup || {})[parts[0]];
      lookup = (lookup || {})[parts[1]];
    }
    if (base) {
      lookup = (lookup || {})[base];
    }
    if (lookup === undefined) {
      abort('bad lookupImport to (' + mod + ').' + base);
    }
    return lookup;
  }

  function mergeMemory(newBuffer) {
    // The wasm instance creates its memory. But static init code might have written to
    // buffer already, including the mem init file, and we must copy it over in a proper merge.
    // TODO: avoid this copy, by avoiding such static init writes
    // TODO: in shorter term, just copy up to the last static init write
    var oldBuffer = Module['buffer'];
    if (newBuffer.byteLength < oldBuffer.byteLength) {
      Module['printErr']('the new buffer in mergeMemory is smaller than the previous one. in native wasm, we should grow memory here');
    }
    var oldView = new Int8Array(oldBuffer);
    var newView = new Int8Array(newBuffer);

    // If we have a mem init file, do not trample it
    if (!memoryInitializer) {
      oldView.set(newView.subarray(Module['STATIC_BASE'], Module['STATIC_BASE'] + Module['STATIC_BUMP']), Module['STATIC_BASE']);
    }

    newView.set(oldView);
    updateGlobalBuffer(newBuffer);
    updateGlobalBufferViews();
  }

  var WasmTypes = {
    none: 0,
    i32: 1,
    i64: 2,
    f32: 3,
    f64: 4
  };

  function fixImports(imports) {
    if (true) return imports;
    var ret = {};
    for (var i in imports) {
      var fixed = i;
      if (fixed[0] == '_') fixed = fixed.substr(1);
      ret[fixed] = imports[i];
    }
    return ret;
  }

  function getBinary() {
    try {
      var binary;
      if (Module['wasmBinary']) {
        binary = Module['wasmBinary'];
        binary = new Uint8Array(binary);
      } else if (Module['readBinary']) {
        binary = Module['readBinary'](wasmBinaryFile);
      } else {
        throw "on the web, we need the wasm binary to be preloaded and set on Module['wasmBinary']. emcc.py will do that for you when generating HTML (but not JS)";
      }
      return binary;
    }
    catch (err) {
      abort(err);
    }
  }

  function getBinaryPromise() {
    // if we don't have the binary yet, and have the Fetch api, use that
    if (!Module['wasmBinary'] && typeof fetch === 'function') {
      return fetch(wasmBinaryFile, { credentials: 'same-origin' }).then(function(response) {
        if (!response['ok']) {
          throw "failed to load wasm binary file at '" + wasmBinaryFile + "'";
        }
        return response['arrayBuffer']();
      });
    }
    // Otherwise, getBinary should be able to get it synchronously
    return new Promise(function(resolve, reject) {
      resolve(getBinary());
    });
  }

  // do-method functions

  function doJustAsm(global, env, providedBuffer) {
    // if no Module.asm, or it's the method handler helper (see below), then apply
    // the asmjs
    if (typeof Module['asm'] !== 'function' || Module['asm'] === methodHandler) {
      if (!Module['asmPreload']) {
        // you can load the .asm.js file before this, to avoid this sync xhr and eval
        eval(Module['read'](asmjsCodeFile)); // set Module.asm
      } else {
        Module['asm'] = Module['asmPreload'];
      }
    }
    if (typeof Module['asm'] !== 'function') {
      Module['printErr']('asm evalling did not set the module properly');
      return false;
    }
    return Module['asm'](global, env, providedBuffer);
  }

  function doNativeWasm(global, env, providedBuffer) {
    if (typeof WebAssembly !== 'object') {
      Module['printErr']('no native wasm support detected');
      return false;
    }
    // prepare memory import
    if (!(Module['wasmMemory'] instanceof WebAssembly.Memory)) {
      Module['printErr']('no native wasm Memory in use');
      return false;
    }
    env['memory'] = Module['wasmMemory'];
    // Load the wasm module and create an instance of using native support in the JS engine.
    info['global'] = {
      'NaN': NaN,
      'Infinity': Infinity
    };
    info['global.Math'] = global.Math;
    info['env'] = env;
    // handle a generated wasm instance, receiving its exports and
    // performing other necessary setup
    function receiveInstance(instance) {
      exports = instance.exports;
      if (exports.memory) mergeMemory(exports.memory);
      Module['asm'] = exports;
      Module["usingWasm"] = true;
      removeRunDependency('wasm-instantiate');
    }

    addRunDependency('wasm-instantiate'); // we can't run yet

    // User shell pages can write their own Module.instantiateWasm = function(imports, successCallback) callback
    // to manually instantiate the Wasm module themselves. This allows pages to run the instantiation parallel
    // to any other async startup actions they are performing.
    if (Module['instantiateWasm']) {
      try {
        return Module['instantiateWasm'](info, receiveInstance);
      } catch(e) {
        Module['printErr']('Module.instantiateWasm callback failed with error: ' + e);
        return false;
      }
    }

    getBinaryPromise().then(function(binary) {
      return WebAssembly.instantiate(binary, info)
    }).then(function(output) {
      // receiveInstance() will swap in the exports (to Module.asm) so they can be called
      receiveInstance(output['instance']);
    }).catch(function(reason) {
      Module['printErr']('failed to asynchronously prepare wasm: ' + reason);
      abort(reason);
    });
    return {}; // no exports yet; we'll fill them in later
  }

  function doWasmPolyfill(global, env, providedBuffer, method) {
    if (typeof WasmJS !== 'function') {
      Module['printErr']('WasmJS not detected - polyfill not bundled?');
      return false;
    }

    // Use wasm.js to polyfill and execute code in a wasm interpreter.
    var wasmJS = WasmJS({});

    // XXX don't be confused. Module here is in the outside program. wasmJS is the inner wasm-js.cpp.
    wasmJS['outside'] = Module; // Inside wasm-js.cpp, Module['outside'] reaches the outside module.

    // Information for the instance of the module.
    wasmJS['info'] = info;

    wasmJS['lookupImport'] = lookupImport;

    assert(providedBuffer === Module['buffer']); // we should not even need to pass it as a 3rd arg for wasm, but that's the asm.js way.

    info.global = global;
    info.env = env;

    // polyfill interpreter expects an ArrayBuffer
    assert(providedBuffer === Module['buffer']);
    env['memory'] = providedBuffer;
    assert(env['memory'] instanceof ArrayBuffer);

    wasmJS['providedTotalMemory'] = Module['buffer'].byteLength;

    // Prepare to generate wasm, using either asm2wasm or s-exprs
    var code;
    if (method === 'interpret-binary') {
      code = getBinary();
    } else {
      code = Module['read'](method == 'interpret-asm2wasm' ? asmjsCodeFile : wasmTextFile);
    }
    var temp;
    if (method == 'interpret-asm2wasm') {
      temp = wasmJS['_malloc'](code.length + 1);
      wasmJS['writeAsciiToMemory'](code, temp);
      wasmJS['_load_asm2wasm'](temp);
    } else if (method === 'interpret-s-expr') {
      temp = wasmJS['_malloc'](code.length + 1);
      wasmJS['writeAsciiToMemory'](code, temp);
      wasmJS['_load_s_expr2wasm'](temp);
    } else if (method === 'interpret-binary') {
      temp = wasmJS['_malloc'](code.length);
      wasmJS['HEAPU8'].set(code, temp);
      wasmJS['_load_binary2wasm'](temp, code.length);
    } else {
      throw 'what? ' + method;
    }
    wasmJS['_free'](temp);

    wasmJS['_instantiate'](temp);

    if (Module['newBuffer']) {
      mergeMemory(Module['newBuffer']);
      Module['newBuffer'] = null;
    }

    exports = wasmJS['asmExports'];

    return exports;
  }

  // We may have a preloaded value in Module.asm, save it
  Module['asmPreload'] = Module['asm'];

  // Memory growth integration code

  var asmjsReallocBuffer = Module['reallocBuffer'];

  var wasmReallocBuffer = function(size) {
    var PAGE_MULTIPLE = Module["usingWasm"] ? WASM_PAGE_SIZE : ASMJS_PAGE_SIZE; // In wasm, heap size must be a multiple of 64KB. In asm.js, they need to be multiples of 16MB.
    size = alignUp(size, PAGE_MULTIPLE); // round up to wasm page size
    var old = Module['buffer'];
    var oldSize = old.byteLength;
    if (Module["usingWasm"]) {
      // native wasm support
      try {
        var result = Module['wasmMemory'].grow((size - oldSize) / wasmPageSize); // .grow() takes a delta compared to the previous size
        if (result !== (-1 | 0)) {
          // success in native wasm memory growth, get the buffer from the memory
          return Module['buffer'] = Module['wasmMemory'].buffer;
        } else {
          return null;
        }
      } catch(e) {
        console.error('Module.reallocBuffer: Attempted to grow from ' + oldSize  + ' bytes to ' + size + ' bytes, but got error: ' + e);
        return null;
      }
    } else {
      // wasm interpreter support
      exports['__growWasmMemory']((size - oldSize) / wasmPageSize); // tiny wasm method that just does grow_memory
      // in interpreter, we replace Module.buffer if we allocate
      return Module['buffer'] !== old ? Module['buffer'] : null; // if it was reallocated, it changed
    }
  };

  Module['reallocBuffer'] = function(size) {
    if (finalMethod === 'asmjs') {
      return asmjsReallocBuffer(size);
    } else {
      return wasmReallocBuffer(size);
    }
  };

  // we may try more than one; this is the final one, that worked and we are using
  var finalMethod = '';

  // Provide an "asm.js function" for the application, called to "link" the asm.js module. We instantiate
  // the wasm module at that time, and it receives imports and provides exports and so forth, the app
  // doesn't need to care that it is wasm or olyfilled wasm or asm.js.

  Module['asm'] = function(global, env, providedBuffer) {
    global = fixImports(global);
    env = fixImports(env);

    // import table
    if (!env['table']) {
      var TABLE_SIZE = Module['wasmTableSize'];
      if (TABLE_SIZE === undefined) TABLE_SIZE = 1024; // works in binaryen interpreter at least
      var MAX_TABLE_SIZE = Module['wasmMaxTableSize'];
      if (typeof WebAssembly === 'object' && typeof WebAssembly.Table === 'function') {
        if (MAX_TABLE_SIZE !== undefined) {
          env['table'] = new WebAssembly.Table({ 'initial': TABLE_SIZE, 'maximum': MAX_TABLE_SIZE, 'element': 'anyfunc' });
        } else {
          env['table'] = new WebAssembly.Table({ 'initial': TABLE_SIZE, element: 'anyfunc' });
        }
      } else {
        env['table'] = new Array(TABLE_SIZE); // works in binaryen interpreter at least
      }
      Module['wasmTable'] = env['table'];
    }

    if (!env['memoryBase']) {
      env['memoryBase'] = Module['STATIC_BASE']; // tell the memory segments where to place themselves
    }
    if (!env['tableBase']) {
      env['tableBase'] = 0; // table starts at 0 by default, in dynamic linking this will change
    }

    // try the methods. each should return the exports if it succeeded

    var exports;
    var methods = method.split(',');

    for (var i = 0; i < methods.length; i++) {
      var curr = methods[i];


      finalMethod = curr;

      if (curr === 'native-wasm') {
        if (exports = doNativeWasm(global, env, providedBuffer)) break;
      } else if (curr === 'asmjs') {
        if (exports = doJustAsm(global, env, providedBuffer)) break;
      } else if (curr === 'interpret-asm2wasm' || curr === 'interpret-s-expr' || curr === 'interpret-binary') {
        if (exports = doWasmPolyfill(global, env, providedBuffer, curr)) break;
      } else {
        abort('bad method: ' + curr);
      }
    }

    if (!exports) throw 'no binaryen method succeeded. consider enabling more options, like interpreting, if you want that: https://github.com/kripken/emscripten/wiki/WebAssembly#binaryen-methods';


    return exports;
  };

  var methodHandler = Module['asm']; // note our method handler, as we may modify Module['asm'] later
}

integrateWasmJS(Module);

// === Body ===

var ASM_CONSTS = [];




STATIC_BASE = Runtime.GLOBAL_BASE;

STATICTOP = STATIC_BASE + 4768;
/* global initializers */  __ATINIT__.push({ func: function() { __GLOBAL__sub_I_bind_cpp() } });


memoryInitializer = Module["wasmJSMethod"].indexOf("asmjs") >= 0 || Module["wasmJSMethod"].indexOf("interpret-asm2wasm") >= 0 ? "compiled.3a7d1bdba919cff5.js.mem" : null;




var STATIC_BUMP = 4768;
Module["STATIC_BASE"] = STATIC_BASE;
Module["STATIC_BUMP"] = STATIC_BUMP;

/* no memory initializer */
var tempDoublePtr = STATICTOP; STATICTOP += 16;

assert(tempDoublePtr % 8 == 0);

function copyTempFloat(ptr) { // functions, because inlining this code increases code size too much

  HEAP8[tempDoublePtr] = HEAP8[ptr];

  HEAP8[tempDoublePtr+1] = HEAP8[ptr+1];

  HEAP8[tempDoublePtr+2] = HEAP8[ptr+2];

  HEAP8[tempDoublePtr+3] = HEAP8[ptr+3];

}

function copyTempDouble(ptr) {

  HEAP8[tempDoublePtr] = HEAP8[ptr];

  HEAP8[tempDoublePtr+1] = HEAP8[ptr+1];

  HEAP8[tempDoublePtr+2] = HEAP8[ptr+2];

  HEAP8[tempDoublePtr+3] = HEAP8[ptr+3];

  HEAP8[tempDoublePtr+4] = HEAP8[ptr+4];

  HEAP8[tempDoublePtr+5] = HEAP8[ptr+5];

  HEAP8[tempDoublePtr+6] = HEAP8[ptr+6];

  HEAP8[tempDoublePtr+7] = HEAP8[ptr+7];

}

// {{PRE_LIBRARY}}


  function ___assert_fail(condition, filename, line, func) {
      ABORT = true;
      throw 'Assertion failed: ' + Pointer_stringify(condition) + ', at: ' + [filename ? Pointer_stringify(filename) : 'unknown filename', line, func ? Pointer_stringify(func) : 'unknown function'] + ' at ' + stackTrace();
    }

  
  
  
  function embind_init_charCodes() {
      var codes = new Array(256);
      for (var i = 0; i < 256; ++i) {
          codes[i] = String.fromCharCode(i);
      }
      embind_charCodes = codes;
    }var embind_charCodes=undefined;function readLatin1String(ptr) {
      var ret = "";
      var c = ptr;
      while (HEAPU8[c]) {
          ret += embind_charCodes[HEAPU8[c++]];
      }
      return ret;
    }
  
  
  var awaitingDependencies={};
  
  var registeredTypes={};
  
  var typeDependencies={};
  
  
  
  
  
  
  var char_0=48;
  
  var char_9=57;function makeLegalFunctionName(name) {
      if (undefined === name) {
          return '_unknown';
      }
      name = name.replace(/[^a-zA-Z0-9_]/g, '$');
      var f = name.charCodeAt(0);
      if (f >= char_0 && f <= char_9) {
          return '_' + name;
      } else {
          return name;
      }
    }function createNamedFunction(name, body) {
      name = makeLegalFunctionName(name);
      /*jshint evil:true*/
      return new Function(
          "body",
          "return function " + name + "() {\n" +
          "    \"use strict\";" +
          "    return body.apply(this, arguments);\n" +
          "};\n"
      )(body);
    }function extendError(baseErrorType, errorName) {
      var errorClass = createNamedFunction(errorName, function(message) {
          this.name = errorName;
          this.message = message;
  
          var stack = (new Error(message)).stack;
          if (stack !== undefined) {
              this.stack = this.toString() + '\n' +
                  stack.replace(/^Error(:[^\n]*)?\n/, '');
          }
      });
      errorClass.prototype = Object.create(baseErrorType.prototype);
      errorClass.prototype.constructor = errorClass;
      errorClass.prototype.toString = function() {
          if (this.message === undefined) {
              return this.name;
          } else {
              return this.name + ': ' + this.message;
          }
      };
  
      return errorClass;
    }var BindingError=undefined;function throwBindingError(message) {
      throw new BindingError(message);
    }
  
  
  
  var InternalError=undefined;function throwInternalError(message) {
      throw new InternalError(message);
    }function whenDependentTypesAreResolved(myTypes, dependentTypes, getTypeConverters) {
      myTypes.forEach(function(type) {
          typeDependencies[type] = dependentTypes;
      });
  
      function onComplete(typeConverters) {
          var myTypeConverters = getTypeConverters(typeConverters);
          if (myTypeConverters.length !== myTypes.length) {
              throwInternalError('Mismatched type converter count');
          }
          for (var i = 0; i < myTypes.length; ++i) {
              registerType(myTypes[i], myTypeConverters[i]);
          }
      }
  
      var typeConverters = new Array(dependentTypes.length);
      var unregisteredTypes = [];
      var registered = 0;
      dependentTypes.forEach(function(dt, i) {
          if (registeredTypes.hasOwnProperty(dt)) {
              typeConverters[i] = registeredTypes[dt];
          } else {
              unregisteredTypes.push(dt);
              if (!awaitingDependencies.hasOwnProperty(dt)) {
                  awaitingDependencies[dt] = [];
              }
              awaitingDependencies[dt].push(function() {
                  typeConverters[i] = registeredTypes[dt];
                  ++registered;
                  if (registered === unregisteredTypes.length) {
                      onComplete(typeConverters);
                  }
              });
          }
      });
      if (0 === unregisteredTypes.length) {
          onComplete(typeConverters);
      }
    }function registerType(rawType, registeredInstance, options) {
      options = options || {};
  
      if (!('argPackAdvance' in registeredInstance)) {
          throw new TypeError('registerType registeredInstance requires argPackAdvance');
      }
  
      var name = registeredInstance.name;
      if (!rawType) {
          throwBindingError('type "' + name + '" must have a positive integer typeid pointer');
      }
      if (registeredTypes.hasOwnProperty(rawType)) {
          if (options.ignoreDuplicateRegistrations) {
              return;
          } else {
              throwBindingError("Cannot register type '" + name + "' twice");
          }
      }
  
      registeredTypes[rawType] = registeredInstance;
      delete typeDependencies[rawType];
  
      if (awaitingDependencies.hasOwnProperty(rawType)) {
          var callbacks = awaitingDependencies[rawType];
          delete awaitingDependencies[rawType];
          callbacks.forEach(function(cb) {
              cb();
          });
      }
    }function __embind_register_void(rawType, name) {
      name = readLatin1String(name);
      registerType(rawType, {
          isVoid: true, // void return values can be optimized out sometimes
          name: name,
          'argPackAdvance': 0,
          'fromWireType': function() {
              return undefined;
          },
          'toWireType': function(destructors, o) {
              // TODO: assert if anything else is given?
              return undefined;
          },
      });
    }

  
  function _embind_repr(v) {
      if (v === null) {
          return 'null';
      }
      var t = typeof v;
      if (t === 'object' || t === 'array' || t === 'function') {
          return v.toString();
      } else {
          return '' + v;
      }
    }
  
  function floatReadValueFromPointer(name, shift) {
      switch (shift) {
          case 2: return function(pointer) {
              return this['fromWireType'](HEAPF32[pointer >> 2]);
          };
          case 3: return function(pointer) {
              return this['fromWireType'](HEAPF64[pointer >> 3]);
          };
          default:
              throw new TypeError("Unknown float type: " + name);
      }
    }
  
  function getShiftFromSize(size) {
      switch (size) {
          case 1: return 0;
          case 2: return 1;
          case 4: return 2;
          case 8: return 3;
          default:
              throw new TypeError('Unknown type size: ' + size);
      }
    }function __embind_register_float(rawType, name, size) {
      var shift = getShiftFromSize(size);
      name = readLatin1String(name);
      registerType(rawType, {
          name: name,
          'fromWireType': function(value) {
              return value;
          },
          'toWireType': function(destructors, value) {
              // todo: Here we have an opportunity for -O3 level "unsafe" optimizations: we could
              // avoid the following if() and assume value is of proper type.
              if (typeof value !== "number" && typeof value !== "boolean") {
                  throw new TypeError('Cannot convert "' + _embind_repr(value) + '" to ' + this.name);
              }
              return value;
          },
          'argPackAdvance': 8,
          'readValueFromPointer': floatReadValueFromPointer(name, shift),
          destructorFunction: null, // This type does not need a destructor
      });
    }

   
  Module["_memset"] = _memset;

  function __embind_register_bool(rawType, name, size, trueValue, falseValue) {
      var shift = getShiftFromSize(size);
  
      name = readLatin1String(name);
      registerType(rawType, {
          name: name,
          'fromWireType': function(wt) {
              // ambiguous emscripten ABI: sometimes return values are
              // true or false, and sometimes integers (0 or 1)
              return !!wt;
          },
          'toWireType': function(destructors, o) {
              return o ? trueValue : falseValue;
          },
          'argPackAdvance': 8,
          'readValueFromPointer': function(pointer) {
              // TODO: if heap is fixed (like in asm.js) this could be executed outside
              var heap;
              if (size === 1) {
                  heap = HEAP8;
              } else if (size === 2) {
                  heap = HEAP16;
              } else if (size === 4) {
                  heap = HEAP32;
              } else {
                  throw new TypeError("Unknown boolean type size: " + name);
              }
              return this['fromWireType'](heap[pointer >> shift]);
          },
          destructorFunction: null, // This type does not need a destructor
      });
    }

  function _abort() {
      Module['abort']();
    }

  
  function simpleReadValueFromPointer(pointer) {
      return this['fromWireType'](HEAPU32[pointer >> 2]);
    }function __embind_register_std_string(rawType, name) {
      name = readLatin1String(name);
      registerType(rawType, {
          name: name,
          'fromWireType': function(value) {
              var length = HEAPU32[value >> 2];
              var a = new Array(length);
              for (var i = 0; i < length; ++i) {
                  a[i] = String.fromCharCode(HEAPU8[value + 4 + i]);
              }
              _free(value);
              return a.join('');
          },
          'toWireType': function(destructors, value) {
              if (value instanceof ArrayBuffer) {
                  value = new Uint8Array(value);
              }
  
              function getTAElement(ta, index) {
                  return ta[index];
              }
              function getStringElement(string, index) {
                  return string.charCodeAt(index);
              }
              var getElement;
              if (value instanceof Uint8Array) {
                  getElement = getTAElement;
              } else if (value instanceof Uint8ClampedArray) {
                  getElement = getTAElement;
              } else if (value instanceof Int8Array) {
                  getElement = getTAElement;
              } else if (typeof value === 'string') {
                  getElement = getStringElement;
              } else {
                  throwBindingError('Cannot pass non-string to std::string');
              }
  
              // assumes 4-byte alignment
              var length = value.length;
              var ptr = _malloc(4 + length);
              HEAPU32[ptr >> 2] = length;
              for (var i = 0; i < length; ++i) {
                  var charCode = getElement(value, i);
                  if (charCode > 255) {
                      _free(ptr);
                      throwBindingError('String has UTF-16 code units that do not fit in 8 bits');
                  }
                  HEAPU8[ptr + 4 + i] = charCode;
              }
              if (destructors !== null) {
                  destructors.push(_free, ptr);
              }
              return ptr;
          },
          'argPackAdvance': 8,
          'readValueFromPointer': simpleReadValueFromPointer,
          destructorFunction: function(ptr) { _free(ptr); },
      });
    }

  
  function integerReadValueFromPointer(name, shift, signed) {
      // integers are quite common, so generate very specialized functions
      switch (shift) {
          case 0: return signed ?
              function readS8FromPointer(pointer) { return HEAP8[pointer]; } :
              function readU8FromPointer(pointer) { return HEAPU8[pointer]; };
          case 1: return signed ?
              function readS16FromPointer(pointer) { return HEAP16[pointer >> 1]; } :
              function readU16FromPointer(pointer) { return HEAPU16[pointer >> 1]; };
          case 2: return signed ?
              function readS32FromPointer(pointer) { return HEAP32[pointer >> 2]; } :
              function readU32FromPointer(pointer) { return HEAPU32[pointer >> 2]; };
          default:
              throw new TypeError("Unknown integer type: " + name);
      }
    }function __embind_register_integer(primitiveType, name, size, minRange, maxRange) {
      name = readLatin1String(name);
      if (maxRange === -1) { // LLVM doesn't have signed and unsigned 32-bit types, so u32 literals come out as 'i32 -1'. Always treat those as max u32.
          maxRange = 4294967295;
      }
  
      var shift = getShiftFromSize(size);
      
      var fromWireType = function(value) {
          return value;
      };
      
      if (minRange === 0) {
          var bitshift = 32 - 8*size;
          fromWireType = function(value) {
              return (value << bitshift) >>> bitshift;
          };
      }
  
      var isUnsignedType = (name.indexOf('unsigned') != -1);
  
      registerType(primitiveType, {
          name: name,
          'fromWireType': fromWireType,
          'toWireType': function(destructors, value) {
              // todo: Here we have an opportunity for -O3 level "unsafe" optimizations: we could
              // avoid the following two if()s and assume value is of proper type.
              if (typeof value !== "number" && typeof value !== "boolean") {
                  throw new TypeError('Cannot convert "' + _embind_repr(value) + '" to ' + this.name);
              }
              if (value < minRange || value > maxRange) {
                  throw new TypeError('Passing a number "' + _embind_repr(value) + '" from JS side to C/C++ side to an argument of type "' + name + '", which is outside the valid range [' + minRange + ', ' + maxRange + ']!');
              }
              return isUnsignedType ? (value >>> 0) : (value | 0);
          },
          'argPackAdvance': 8,
          'readValueFromPointer': integerReadValueFromPointer(name, shift, minRange !== 0),
          destructorFunction: null, // This type does not need a destructor
      });
    }

  
  function _emscripten_memcpy_big(dest, src, num) {
      HEAPU8.set(HEAPU8.subarray(src, src+num), dest);
      return dest;
    } 
  Module["_memcpy"] = _memcpy;

  
  function ___setErrNo(value) {
      if (Module['___errno_location']) HEAP32[((Module['___errno_location']())>>2)]=value;
      else Module.printErr('failed to set errno from JS');
      return value;
    } 
  Module["_sbrk"] = _sbrk;

  function __embind_register_std_wstring(rawType, charSize, name) {
      // nb. do not cache HEAPU16 and HEAPU32, they may be destroyed by enlargeMemory().
      name = readLatin1String(name);
      var getHeap, shift;
      if (charSize === 2) {
          getHeap = function() { return HEAPU16; };
          shift = 1;
      } else if (charSize === 4) {
          getHeap = function() { return HEAPU32; };
          shift = 2;
      }
      registerType(rawType, {
          name: name,
          'fromWireType': function(value) {
              var HEAP = getHeap();
              var length = HEAPU32[value >> 2];
              var a = new Array(length);
              var start = (value + 4) >> shift;
              for (var i = 0; i < length; ++i) {
                  a[i] = String.fromCharCode(HEAP[start + i]);
              }
              _free(value);
              return a.join('');
          },
          'toWireType': function(destructors, value) {
              // assumes 4-byte alignment
              var HEAP = getHeap();
              var length = value.length;
              var ptr = _malloc(4 + length * charSize);
              HEAPU32[ptr >> 2] = length;
              var start = (ptr + 4) >> shift;
              for (var i = 0; i < length; ++i) {
                  HEAP[start + i] = value.charCodeAt(i);
              }
              if (destructors !== null) {
                  destructors.push(_free, ptr);
              }
              return ptr;
          },
          'argPackAdvance': 8,
          'readValueFromPointer': simpleReadValueFromPointer,
          destructorFunction: function(ptr) { _free(ptr); },
      });
    }

  
  function __ZSt18uncaught_exceptionv() { // std::uncaught_exception()
      return !!__ZSt18uncaught_exceptionv.uncaught_exception;
    }
  
  
  
  var EXCEPTIONS={last:0,caught:[],infos:{},deAdjust:function (adjusted) {
        if (!adjusted || EXCEPTIONS.infos[adjusted]) return adjusted;
        for (var ptr in EXCEPTIONS.infos) {
          var info = EXCEPTIONS.infos[ptr];
          if (info.adjusted === adjusted) {
            return ptr;
          }
        }
        return adjusted;
      },addRef:function (ptr) {
        if (!ptr) return;
        var info = EXCEPTIONS.infos[ptr];
        info.refcount++;
      },decRef:function (ptr) {
        if (!ptr) return;
        var info = EXCEPTIONS.infos[ptr];
        assert(info.refcount > 0);
        info.refcount--;
        // A rethrown exception can reach refcount 0; it must not be discarded
        // Its next handler will clear the rethrown flag and addRef it, prior to
        // final decRef and destruction here
        if (info.refcount === 0 && !info.rethrown) {
          if (info.destructor) {
            Module['dynCall_vi'](info.destructor, ptr);
          }
          delete EXCEPTIONS.infos[ptr];
          ___cxa_free_exception(ptr);
        }
      },clearRef:function (ptr) {
        if (!ptr) return;
        var info = EXCEPTIONS.infos[ptr];
        info.refcount = 0;
      }};
  function ___resumeException(ptr) {
      if (!EXCEPTIONS.last) { EXCEPTIONS.last = ptr; }
      throw ptr;
    }function ___cxa_find_matching_catch() {
      var thrown = EXCEPTIONS.last;
      if (!thrown) {
        // just pass through the null ptr
        return ((Runtime.setTempRet0(0),0)|0);
      }
      var info = EXCEPTIONS.infos[thrown];
      var throwntype = info.type;
      if (!throwntype) {
        // just pass through the thrown ptr
        return ((Runtime.setTempRet0(0),thrown)|0);
      }
      var typeArray = Array.prototype.slice.call(arguments);
  
      var pointer = Module['___cxa_is_pointer_type'](throwntype);
      // can_catch receives a **, add indirection
      if (!___cxa_find_matching_catch.buffer) ___cxa_find_matching_catch.buffer = _malloc(4);
      HEAP32[((___cxa_find_matching_catch.buffer)>>2)]=thrown;
      thrown = ___cxa_find_matching_catch.buffer;
      // The different catch blocks are denoted by different types.
      // Due to inheritance, those types may not precisely match the
      // type of the thrown object. Find one which matches, and
      // return the type of the catch block which should be called.
      for (var i = 0; i < typeArray.length; i++) {
        if (typeArray[i] && Module['___cxa_can_catch'](typeArray[i], throwntype, thrown)) {
          thrown = HEAP32[((thrown)>>2)]; // undo indirection
          info.adjusted = thrown;
          return ((Runtime.setTempRet0(typeArray[i]),thrown)|0);
        }
      }
      // Shouldn't happen unless we have bogus data in typeArray
      // or encounter a type for which emscripten doesn't have suitable
      // typeinfo defined. Best-efforts match just in case.
      thrown = HEAP32[((thrown)>>2)]; // undo indirection
      return ((Runtime.setTempRet0(throwntype),thrown)|0);
    }function ___gxx_personality_v0() {
    }

  
  
  var emval_free_list=[];
  
  var emval_handle_array=[{},{value:undefined},{value:null},{value:true},{value:false}];function __emval_decref(handle) {
      if (handle > 4 && 0 === --emval_handle_array[handle].refcount) {
          emval_handle_array[handle] = undefined;
          emval_free_list.push(handle);
      }
    }
  
  
  
  function count_emval_handles() {
      var count = 0;
      for (var i = 5; i < emval_handle_array.length; ++i) {
          if (emval_handle_array[i] !== undefined) {
              ++count;
          }
      }
      return count;
    }
  
  function get_first_emval() {
      for (var i = 5; i < emval_handle_array.length; ++i) {
          if (emval_handle_array[i] !== undefined) {
              return emval_handle_array[i];
          }
      }
      return null;
    }function init_emval() {
      Module['count_emval_handles'] = count_emval_handles;
      Module['get_first_emval'] = get_first_emval;
    }function __emval_register(value) {
  
      switch(value){
        case undefined :{ return 1; }
        case null :{ return 2; }
        case true :{ return 3; }
        case false :{ return 4; }
        default:{
          var handle = emval_free_list.length ?
              emval_free_list.pop() :
              emval_handle_array.length;
  
          emval_handle_array[handle] = {refcount: 1, value: value};
          return handle;
          }
        }
    }function __embind_register_emval(rawType, name) {
      name = readLatin1String(name);
      registerType(rawType, {
          name: name,
          'fromWireType': function(handle) {
              var rv = emval_handle_array[handle].value;
              __emval_decref(handle);
              return rv;
          },
          'toWireType': function(destructors, value) {
              return __emval_register(value);
          },
          'argPackAdvance': 8,
          'readValueFromPointer': simpleReadValueFromPointer,
          destructorFunction: null, // This type does not need a destructor
  
          // TODO: do we need a deleteObject here?  write a test where
          // emval is passed into JS via an interface
      });
    }

  function __embind_register_memory_view(rawType, dataTypeIndex, name) {
      var typeMapping = [
          Int8Array,
          Uint8Array,
          Int16Array,
          Uint16Array,
          Int32Array,
          Uint32Array,
          Float32Array,
          Float64Array,
      ];
  
      var TA = typeMapping[dataTypeIndex];
  
      function decodeMemoryView(handle) {
          handle = handle >> 2;
          var heap = HEAPU32;
          var size = heap[handle]; // in elements
          var data = heap[handle + 1]; // byte offset into emscripten heap
          return new TA(heap['buffer'], data, size);
      }
  
      name = readLatin1String(name);
      registerType(rawType, {
          name: name,
          'fromWireType': decodeMemoryView,
          'argPackAdvance': 8,
          'readValueFromPointer': decodeMemoryView,
      }, {
          ignoreDuplicateRegistrations: true,
      });
    }
embind_init_charCodes();
BindingError = Module['BindingError'] = extendError(Error, 'BindingError');;
InternalError = Module['InternalError'] = extendError(Error, 'InternalError');;
init_emval();;
DYNAMICTOP_PTR = allocate(1, "i32", ALLOC_STATIC);

STACK_BASE = STACKTOP = Runtime.alignMemory(STATICTOP);

STACK_MAX = STACK_BASE + TOTAL_STACK;

DYNAMIC_BASE = Runtime.alignMemory(STACK_MAX);

HEAP32[DYNAMICTOP_PTR>>2] = DYNAMIC_BASE;

staticSealed = true; // seal the static portion of memory

assert(DYNAMIC_BASE < TOTAL_MEMORY, "TOTAL_MEMORY not big enough for stack");


function nullFunc_iiiii(x) { Module["printErr"]("Invalid function pointer called with signature 'iiiii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");  Module["printErr"]("Build with ASSERTIONS=2 for more info.");abort(x) }

function nullFunc_viiiii(x) { Module["printErr"]("Invalid function pointer called with signature 'viiiii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");  Module["printErr"]("Build with ASSERTIONS=2 for more info.");abort(x) }

function nullFunc_vi(x) { Module["printErr"]("Invalid function pointer called with signature 'vi'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");  Module["printErr"]("Build with ASSERTIONS=2 for more info.");abort(x) }

function nullFunc_iiii(x) { Module["printErr"]("Invalid function pointer called with signature 'iiii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");  Module["printErr"]("Build with ASSERTIONS=2 for more info.");abort(x) }

function nullFunc_viidd(x) { Module["printErr"]("Invalid function pointer called with signature 'viidd'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");  Module["printErr"]("Build with ASSERTIONS=2 for more info.");abort(x) }

function nullFunc_viiiiii(x) { Module["printErr"]("Invalid function pointer called with signature 'viiiiii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");  Module["printErr"]("Build with ASSERTIONS=2 for more info.");abort(x) }

function nullFunc_viiii(x) { Module["printErr"]("Invalid function pointer called with signature 'viiii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");  Module["printErr"]("Build with ASSERTIONS=2 for more info.");abort(x) }

Module['wasmTableSize'] = 196;

Module['wasmMaxTableSize'] = 196;

function invoke_iiiii(index,a1,a2,a3,a4) {
  try {
    return Module["dynCall_iiiii"](index,a1,a2,a3,a4);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    Module["setThrew"](1, 0);
  }
}

function jsCall_iiiii(index,a1,a2,a3,a4) {
    return Runtime.functionPointers[index](a1,a2,a3,a4);
}

function invoke_viiiii(index,a1,a2,a3,a4,a5) {
  try {
    Module["dynCall_viiiii"](index,a1,a2,a3,a4,a5);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    Module["setThrew"](1, 0);
  }
}

function jsCall_viiiii(index,a1,a2,a3,a4,a5) {
    Runtime.functionPointers[index](a1,a2,a3,a4,a5);
}

function invoke_vi(index,a1) {
  try {
    Module["dynCall_vi"](index,a1);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    Module["setThrew"](1, 0);
  }
}

function jsCall_vi(index,a1) {
    Runtime.functionPointers[index](a1);
}

function invoke_iiii(index,a1,a2,a3) {
  try {
    return Module["dynCall_iiii"](index,a1,a2,a3);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    Module["setThrew"](1, 0);
  }
}

function jsCall_iiii(index,a1,a2,a3) {
    return Runtime.functionPointers[index](a1,a2,a3);
}

function invoke_viidd(index,a1,a2,a3,a4) {
  try {
    Module["dynCall_viidd"](index,a1,a2,a3,a4);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    Module["setThrew"](1, 0);
  }
}

function jsCall_viidd(index,a1,a2,a3,a4) {
    Runtime.functionPointers[index](a1,a2,a3,a4);
}

function invoke_viiiiii(index,a1,a2,a3,a4,a5,a6) {
  try {
    Module["dynCall_viiiiii"](index,a1,a2,a3,a4,a5,a6);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    Module["setThrew"](1, 0);
  }
}

function jsCall_viiiiii(index,a1,a2,a3,a4,a5,a6) {
    Runtime.functionPointers[index](a1,a2,a3,a4,a5,a6);
}

function invoke_viiii(index,a1,a2,a3,a4) {
  try {
    Module["dynCall_viiii"](index,a1,a2,a3,a4);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    Module["setThrew"](1, 0);
  }
}

function jsCall_viiii(index,a1,a2,a3,a4) {
    Runtime.functionPointers[index](a1,a2,a3,a4);
}

Module.asmGlobalArg = { "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array, "NaN": NaN, "Infinity": Infinity };

Module.asmLibraryArg = { "abort": abort, "assert": assert, "enlargeMemory": enlargeMemory, "getTotalMemory": getTotalMemory, "abortOnCannotGrowMemory": abortOnCannotGrowMemory, "abortStackOverflow": abortStackOverflow, "nullFunc_iiiii": nullFunc_iiiii, "nullFunc_viiiii": nullFunc_viiiii, "nullFunc_vi": nullFunc_vi, "nullFunc_iiii": nullFunc_iiii, "nullFunc_viidd": nullFunc_viidd, "nullFunc_viiiiii": nullFunc_viiiiii, "nullFunc_viiii": nullFunc_viiii, "invoke_iiiii": invoke_iiiii, "jsCall_iiiii": jsCall_iiiii, "invoke_viiiii": invoke_viiiii, "jsCall_viiiii": jsCall_viiiii, "invoke_vi": invoke_vi, "jsCall_vi": jsCall_vi, "invoke_iiii": invoke_iiii, "jsCall_iiii": jsCall_iiii, "invoke_viidd": invoke_viidd, "jsCall_viidd": jsCall_viidd, "invoke_viiiiii": invoke_viiiiii, "jsCall_viiiiii": jsCall_viiiiii, "invoke_viiii": invoke_viiii, "jsCall_viiii": jsCall_viiii, "floatReadValueFromPointer": floatReadValueFromPointer, "simpleReadValueFromPointer": simpleReadValueFromPointer, "__embind_register_memory_view": __embind_register_memory_view, "throwInternalError": throwInternalError, "get_first_emval": get_first_emval, "___gxx_personality_v0": ___gxx_personality_v0, "extendError": extendError, "___assert_fail": ___assert_fail, "__embind_register_void": __embind_register_void, "___cxa_find_matching_catch": ___cxa_find_matching_catch, "getShiftFromSize": getShiftFromSize, "embind_init_charCodes": embind_init_charCodes, "___setErrNo": ___setErrNo, "__emval_register": __emval_register, "__embind_register_std_wstring": __embind_register_std_wstring, "_emscripten_memcpy_big": _emscripten_memcpy_big, "__embind_register_bool": __embind_register_bool, "___resumeException": ___resumeException, "__ZSt18uncaught_exceptionv": __ZSt18uncaught_exceptionv, "_embind_repr": _embind_repr, "__embind_register_std_string": __embind_register_std_string, "createNamedFunction": createNamedFunction, "__embind_register_emval": __embind_register_emval, "readLatin1String": readLatin1String, "__embind_register_integer": __embind_register_integer, "__emval_decref": __emval_decref, "__embind_register_float": __embind_register_float, "makeLegalFunctionName": makeLegalFunctionName, "integerReadValueFromPointer": integerReadValueFromPointer, "init_emval": init_emval, "whenDependentTypesAreResolved": whenDependentTypesAreResolved, "registerType": registerType, "_abort": _abort, "throwBindingError": throwBindingError, "count_emval_handles": count_emval_handles, "DYNAMICTOP_PTR": DYNAMICTOP_PTR, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX };
// EMSCRIPTEN_START_ASM
var asm =Module["asm"]// EMSCRIPTEN_END_ASM
(Module.asmGlobalArg, Module.asmLibraryArg, buffer);

var real__am_hasedit = asm["_am_hasedit"]; asm["_am_hasedit"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__am_hasedit.apply(null, arguments);
};

var real__am_addterm = asm["_am_addterm"]; asm["_am_addterm"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__am_addterm.apply(null, arguments);
};

var real__am_usevariable = asm["_am_usevariable"]; asm["_am_usevariable"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__am_usevariable.apply(null, arguments);
};

var real__am_resetconstraint = asm["_am_resetconstraint"]; asm["_am_resetconstraint"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__am_resetconstraint.apply(null, arguments);
};

var real_stackSave = asm["stackSave"]; asm["stackSave"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real_stackSave.apply(null, arguments);
};

var real__am_variableid = asm["_am_variableid"]; asm["_am_variableid"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__am_variableid.apply(null, arguments);
};

var real_setThrew = asm["setThrew"]; asm["setThrew"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real_setThrew.apply(null, arguments);
};

var real__am_suggest = asm["_am_suggest"]; asm["_am_suggest"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__am_suggest.apply(null, arguments);
};

var real__am_delsolver = asm["_am_delsolver"]; asm["_am_delsolver"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__am_delsolver.apply(null, arguments);
};

var real__am_getstrength = asm["_am_getstrength"]; asm["_am_getstrength"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__am_getstrength.apply(null, arguments);
};

var real__am_setrelation = asm["_am_setrelation"]; asm["_am_setrelation"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__am_setrelation.apply(null, arguments);
};

var real__am_autoupdate = asm["_am_autoupdate"]; asm["_am_autoupdate"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__am_autoupdate.apply(null, arguments);
};

var real__am_getautoupdate = asm["_am_getautoupdate"]; asm["_am_getautoupdate"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__am_getautoupdate.apply(null, arguments);
};

var real__am_cloneconstraint = asm["_am_cloneconstraint"]; asm["_am_cloneconstraint"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__am_cloneconstraint.apply(null, arguments);
};

var real__am_newsolver = asm["_am_newsolver"]; asm["_am_newsolver"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__am_newsolver.apply(null, arguments);
};

var real__am_delconstraint = asm["_am_delconstraint"]; asm["_am_delconstraint"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__am_delconstraint.apply(null, arguments);
};

var real__am_deledit = asm["_am_deledit"]; asm["_am_deledit"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__am_deledit.apply(null, arguments);
};

var real__am_addconstant = asm["_am_addconstant"]; asm["_am_addconstant"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__am_addconstant.apply(null, arguments);
};

var real__sbrk = asm["_sbrk"]; asm["_sbrk"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__sbrk.apply(null, arguments);
};

var real__am_remove = asm["_am_remove"]; asm["_am_remove"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__am_remove.apply(null, arguments);
};

var real__am_hasconstraint = asm["_am_hasconstraint"]; asm["_am_hasconstraint"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__am_hasconstraint.apply(null, arguments);
};

var real__am_add = asm["_am_add"]; asm["_am_add"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__am_add.apply(null, arguments);
};

var real_stackAlloc = asm["stackAlloc"]; asm["stackAlloc"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real_stackAlloc.apply(null, arguments);
};

var real_getTempRet0 = asm["getTempRet0"]; asm["getTempRet0"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real_getTempRet0.apply(null, arguments);
};

var real___GLOBAL__sub_I_bind_cpp = asm["__GLOBAL__sub_I_bind_cpp"]; asm["__GLOBAL__sub_I_bind_cpp"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real___GLOBAL__sub_I_bind_cpp.apply(null, arguments);
};

var real_setTempRet0 = asm["setTempRet0"]; asm["setTempRet0"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real_setTempRet0.apply(null, arguments);
};

var real__emscripten_get_global_libc = asm["_emscripten_get_global_libc"]; asm["_emscripten_get_global_libc"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__emscripten_get_global_libc.apply(null, arguments);
};

var real____getTypeName = asm["___getTypeName"]; asm["___getTypeName"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real____getTypeName.apply(null, arguments);
};

var real__am_delvariable = asm["_am_delvariable"]; asm["_am_delvariable"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__am_delvariable.apply(null, arguments);
};

var real_stackRestore = asm["stackRestore"]; asm["stackRestore"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real_stackRestore.apply(null, arguments);
};

var real____errno_location = asm["___errno_location"]; asm["___errno_location"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real____errno_location.apply(null, arguments);
};

var real__am_setstrength = asm["_am_setstrength"]; asm["_am_setstrength"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__am_setstrength.apply(null, arguments);
};

var real__am_addedit = asm["_am_addedit"]; asm["_am_addedit"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__am_addedit.apply(null, arguments);
};

var real__free = asm["_free"]; asm["_free"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__free.apply(null, arguments);
};

var real__am_newvariable = asm["_am_newvariable"]; asm["_am_newvariable"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__am_newvariable.apply(null, arguments);
};

var real_establishStackSpace = asm["establishStackSpace"]; asm["establishStackSpace"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real_establishStackSpace.apply(null, arguments);
};

var real__am_updatevars = asm["_am_updatevars"]; asm["_am_updatevars"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__am_updatevars.apply(null, arguments);
};

var real__am_newconstraint = asm["_am_newconstraint"]; asm["_am_newconstraint"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__am_newconstraint.apply(null, arguments);
};

var real__malloc = asm["_malloc"]; asm["_malloc"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__malloc.apply(null, arguments);
};

var real__am_mergeconstraint = asm["_am_mergeconstraint"]; asm["_am_mergeconstraint"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__am_mergeconstraint.apply(null, arguments);
};

var real__am_resetsolver = asm["_am_resetsolver"]; asm["_am_resetsolver"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__am_resetsolver.apply(null, arguments);
};

var real__am_value = asm["_am_value"]; asm["_am_value"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__am_value.apply(null, arguments);
};
Module["asm"] = asm;
var _am_hasedit = Module["_am_hasedit"] = function() { return Module["asm"]["_am_hasedit"].apply(null, arguments) };
var _am_addterm = Module["_am_addterm"] = function() { return Module["asm"]["_am_addterm"].apply(null, arguments) };
var _am_usevariable = Module["_am_usevariable"] = function() { return Module["asm"]["_am_usevariable"].apply(null, arguments) };
var _am_resetconstraint = Module["_am_resetconstraint"] = function() { return Module["asm"]["_am_resetconstraint"].apply(null, arguments) };
var stackSave = Module["stackSave"] = function() { return Module["asm"]["stackSave"].apply(null, arguments) };
var _am_variableid = Module["_am_variableid"] = function() { return Module["asm"]["_am_variableid"].apply(null, arguments) };
var setThrew = Module["setThrew"] = function() { return Module["asm"]["setThrew"].apply(null, arguments) };
var _am_suggest = Module["_am_suggest"] = function() { return Module["asm"]["_am_suggest"].apply(null, arguments) };
var _am_delsolver = Module["_am_delsolver"] = function() { return Module["asm"]["_am_delsolver"].apply(null, arguments) };
var _am_getstrength = Module["_am_getstrength"] = function() { return Module["asm"]["_am_getstrength"].apply(null, arguments) };
var _am_setrelation = Module["_am_setrelation"] = function() { return Module["asm"]["_am_setrelation"].apply(null, arguments) };
var _am_autoupdate = Module["_am_autoupdate"] = function() { return Module["asm"]["_am_autoupdate"].apply(null, arguments) };
var _am_getautoupdate = Module["_am_getautoupdate"] = function() { return Module["asm"]["_am_getautoupdate"].apply(null, arguments) };
var _am_cloneconstraint = Module["_am_cloneconstraint"] = function() { return Module["asm"]["_am_cloneconstraint"].apply(null, arguments) };
var _am_newsolver = Module["_am_newsolver"] = function() { return Module["asm"]["_am_newsolver"].apply(null, arguments) };
var _am_delconstraint = Module["_am_delconstraint"] = function() { return Module["asm"]["_am_delconstraint"].apply(null, arguments) };
var _am_deledit = Module["_am_deledit"] = function() { return Module["asm"]["_am_deledit"].apply(null, arguments) };
var _memset = Module["_memset"] = function() { return Module["asm"]["_memset"].apply(null, arguments) };
var _am_addconstant = Module["_am_addconstant"] = function() { return Module["asm"]["_am_addconstant"].apply(null, arguments) };
var _sbrk = Module["_sbrk"] = function() { return Module["asm"]["_sbrk"].apply(null, arguments) };
var _memcpy = Module["_memcpy"] = function() { return Module["asm"]["_memcpy"].apply(null, arguments) };
var _am_remove = Module["_am_remove"] = function() { return Module["asm"]["_am_remove"].apply(null, arguments) };
var _am_hasconstraint = Module["_am_hasconstraint"] = function() { return Module["asm"]["_am_hasconstraint"].apply(null, arguments) };
var _am_add = Module["_am_add"] = function() { return Module["asm"]["_am_add"].apply(null, arguments) };
var stackAlloc = Module["stackAlloc"] = function() { return Module["asm"]["stackAlloc"].apply(null, arguments) };
var getTempRet0 = Module["getTempRet0"] = function() { return Module["asm"]["getTempRet0"].apply(null, arguments) };
var __GLOBAL__sub_I_bind_cpp = Module["__GLOBAL__sub_I_bind_cpp"] = function() { return Module["asm"]["__GLOBAL__sub_I_bind_cpp"].apply(null, arguments) };
var setTempRet0 = Module["setTempRet0"] = function() { return Module["asm"]["setTempRet0"].apply(null, arguments) };
var _emscripten_get_global_libc = Module["_emscripten_get_global_libc"] = function() { return Module["asm"]["_emscripten_get_global_libc"].apply(null, arguments) };
var ___getTypeName = Module["___getTypeName"] = function() { return Module["asm"]["___getTypeName"].apply(null, arguments) };
var _am_delvariable = Module["_am_delvariable"] = function() { return Module["asm"]["_am_delvariable"].apply(null, arguments) };
var stackRestore = Module["stackRestore"] = function() { return Module["asm"]["stackRestore"].apply(null, arguments) };
var ___errno_location = Module["___errno_location"] = function() { return Module["asm"]["___errno_location"].apply(null, arguments) };
var runPostSets = Module["runPostSets"] = function() { return Module["asm"]["runPostSets"].apply(null, arguments) };
var _am_setstrength = Module["_am_setstrength"] = function() { return Module["asm"]["_am_setstrength"].apply(null, arguments) };
var _am_addedit = Module["_am_addedit"] = function() { return Module["asm"]["_am_addedit"].apply(null, arguments) };
var _free = Module["_free"] = function() { return Module["asm"]["_free"].apply(null, arguments) };
var _am_newvariable = Module["_am_newvariable"] = function() { return Module["asm"]["_am_newvariable"].apply(null, arguments) };
var establishStackSpace = Module["establishStackSpace"] = function() { return Module["asm"]["establishStackSpace"].apply(null, arguments) };
var _am_updatevars = Module["_am_updatevars"] = function() { return Module["asm"]["_am_updatevars"].apply(null, arguments) };
var _am_newconstraint = Module["_am_newconstraint"] = function() { return Module["asm"]["_am_newconstraint"].apply(null, arguments) };
var _malloc = Module["_malloc"] = function() { return Module["asm"]["_malloc"].apply(null, arguments) };
var _am_mergeconstraint = Module["_am_mergeconstraint"] = function() { return Module["asm"]["_am_mergeconstraint"].apply(null, arguments) };
var _am_resetsolver = Module["_am_resetsolver"] = function() { return Module["asm"]["_am_resetsolver"].apply(null, arguments) };
var _am_value = Module["_am_value"] = function() { return Module["asm"]["_am_value"].apply(null, arguments) };
var dynCall_iiiii = Module["dynCall_iiiii"] = function() { return Module["asm"]["dynCall_iiiii"].apply(null, arguments) };
var dynCall_viiiii = Module["dynCall_viiiii"] = function() { return Module["asm"]["dynCall_viiiii"].apply(null, arguments) };
var dynCall_vi = Module["dynCall_vi"] = function() { return Module["asm"]["dynCall_vi"].apply(null, arguments) };
var dynCall_iiii = Module["dynCall_iiii"] = function() { return Module["asm"]["dynCall_iiii"].apply(null, arguments) };
var dynCall_viidd = Module["dynCall_viidd"] = function() { return Module["asm"]["dynCall_viidd"].apply(null, arguments) };
var dynCall_viiiiii = Module["dynCall_viiiiii"] = function() { return Module["asm"]["dynCall_viiiiii"].apply(null, arguments) };
var dynCall_viiii = Module["dynCall_viiii"] = function() { return Module["asm"]["dynCall_viiii"].apply(null, arguments) };
;
Runtime.stackAlloc = Module['stackAlloc'];
Runtime.stackSave = Module['stackSave'];
Runtime.stackRestore = Module['stackRestore'];
Runtime.establishStackSpace = Module['establishStackSpace'];
Runtime.setTempRet0 = Module['setTempRet0'];
Runtime.getTempRet0 = Module['getTempRet0'];


// === Auto-generated postamble setup entry stuff ===

Module['asm'] = asm;



if (memoryInitializer) {
  if (typeof Module['locateFile'] === 'function') {
    memoryInitializer = Module['locateFile'](memoryInitializer);
  } else if (Module['memoryInitializerPrefixURL']) {
    memoryInitializer = Module['memoryInitializerPrefixURL'] + memoryInitializer;
  }
  if (ENVIRONMENT_IS_NODE || ENVIRONMENT_IS_SHELL) {
    var data = Module['readBinary'](memoryInitializer);
    HEAPU8.set(data, Runtime.GLOBAL_BASE);
  } else {
    addRunDependency('memory initializer');
    var applyMemoryInitializer = function(data) {
      if (data.byteLength) data = new Uint8Array(data);
      for (var i = 0; i < data.length; i++) {
        assert(HEAPU8[Runtime.GLOBAL_BASE + i] === 0, "area for memory initializer should not have been touched before it's loaded");
      }
      HEAPU8.set(data, Runtime.GLOBAL_BASE);
      // Delete the typed array that contains the large blob of the memory initializer request response so that
      // we won't keep unnecessary memory lying around. However, keep the XHR object itself alive so that e.g.
      // its .status field can still be accessed later.
      if (Module['memoryInitializerRequest']) delete Module['memoryInitializerRequest'].response;
      removeRunDependency('memory initializer');
    }
    function doBrowserLoad() {
      Module['readAsync'](memoryInitializer, applyMemoryInitializer, function() {
        throw 'could not load memory initializer ' + memoryInitializer;
      });
    }
    if (Module['memoryInitializerRequest']) {
      // a network request has already been created, just use that
      function useRequest() {
        var request = Module['memoryInitializerRequest'];
        if (request.status !== 200 && request.status !== 0) {
          // If you see this warning, the issue may be that you are using locateFile or memoryInitializerPrefixURL, and defining them in JS. That
          // means that the HTML file doesn't know about them, and when it tries to create the mem init request early, does it to the wrong place.
          // Look in your browser's devtools network console to see what's going on.
          console.warn('a problem seems to have happened with Module.memoryInitializerRequest, status: ' + request.status + ', retrying ' + memoryInitializer);
          doBrowserLoad();
          return;
        }
        applyMemoryInitializer(request.response);
      }
      if (Module['memoryInitializerRequest'].response) {
        setTimeout(useRequest, 0); // it's already here; but, apply it asynchronously
      } else {
        Module['memoryInitializerRequest'].addEventListener('load', useRequest); // wait for it
      }
    } else {
      // fetch it from the network ourselves
      doBrowserLoad();
    }
  }
}



/**
 * @constructor
 * @extends {Error}
 */
function ExitStatus(status) {
  this.name = "ExitStatus";
  this.message = "Program terminated with exit(" + status + ")";
  this.status = status;
};
ExitStatus.prototype = new Error();
ExitStatus.prototype.constructor = ExitStatus;

var initialStackTop;
var preloadStartTime = null;
var calledMain = false;

dependenciesFulfilled = function runCaller() {
  // If run has never been called, and we should call run (INVOKE_RUN is true, and Module.noInitialRun is not false)
  if (!Module['calledRun']) run();
  if (!Module['calledRun']) dependenciesFulfilled = runCaller; // try this again later, after new deps are fulfilled
}

Module['callMain'] = Module.callMain = function callMain(args) {
  assert(runDependencies == 0, 'cannot call main when async dependencies remain! (listen on __ATMAIN__)');
  assert(__ATPRERUN__.length == 0, 'cannot call main when preRun functions remain to be called');

  args = args || [];

  ensureInitRuntime();

  var argc = args.length+1;
  function pad() {
    for (var i = 0; i < 4-1; i++) {
      argv.push(0);
    }
  }
  var argv = [allocate(intArrayFromString(Module['thisProgram']), 'i8', ALLOC_NORMAL) ];
  pad();
  for (var i = 0; i < argc-1; i = i + 1) {
    argv.push(allocate(intArrayFromString(args[i]), 'i8', ALLOC_NORMAL));
    pad();
  }
  argv.push(0);
  argv = allocate(argv, 'i32', ALLOC_NORMAL);


  try {

    var ret = Module['_main'](argc, argv, 0);


    // if we're not running an evented main loop, it's time to exit
    exit(ret, /* implicit = */ true);
  }
  catch(e) {
    if (e instanceof ExitStatus) {
      // exit() throws this once it's done to make sure execution
      // has been stopped completely
      return;
    } else if (e == 'SimulateInfiniteLoop') {
      // running an evented main loop, don't immediately exit
      Module['noExitRuntime'] = true;
      return;
    } else {
      var toLog = e;
      if (e && typeof e === 'object' && e.stack) {
        toLog = [e, e.stack];
      }
      Module.printErr('exception thrown: ' + toLog);
      Module['quit'](1, e);
    }
  } finally {
    calledMain = true;
  }
}




/** @type {function(Array=)} */
function run(args) {
  args = args || Module['arguments'];

  if (preloadStartTime === null) preloadStartTime = Date.now();

  if (runDependencies > 0) {
    return;
  }

  writeStackCookie();

  preRun();

  if (runDependencies > 0) return; // a preRun added a dependency, run will be called later
  if (Module['calledRun']) return; // run may have just been called through dependencies being fulfilled just in this very frame

  function doRun() {
    if (Module['calledRun']) return; // run may have just been called while the async setStatus time below was happening
    Module['calledRun'] = true;

    if (ABORT) return;

    ensureInitRuntime();

    preMain();

    if (ENVIRONMENT_IS_WEB && preloadStartTime !== null) {
      Module.printErr('pre-main prep time: ' + (Date.now() - preloadStartTime) + ' ms');
    }

    if (Module['onRuntimeInitialized']) Module['onRuntimeInitialized']();

    if (Module['_main'] && shouldRunNow) Module['callMain'](args);

    postRun();
  }

  if (Module['setStatus']) {
    Module['setStatus']('Running...');
    setTimeout(function() {
      setTimeout(function() {
        Module['setStatus']('');
      }, 1);
      doRun();
    }, 1);
  } else {
    doRun();
  }
  checkStackCookie();
}
Module['run'] = Module.run = run;

function exit(status, implicit) {
  if (implicit && Module['noExitRuntime']) {
    Module.printErr('exit(' + status + ') implicitly called by end of main(), but noExitRuntime, so not exiting the runtime (you can use emscripten_force_exit, if you want to force a true shutdown)');
    return;
  }

  if (Module['noExitRuntime']) {
    Module.printErr('exit(' + status + ') called, but noExitRuntime, so halting execution but not exiting the runtime or preventing further async execution (you can use emscripten_force_exit, if you want to force a true shutdown)');
  } else {

    ABORT = true;
    EXITSTATUS = status;
    STACKTOP = initialStackTop;

    exitRuntime();

    if (Module['onExit']) Module['onExit'](status);
  }

  if (ENVIRONMENT_IS_NODE) {
    process['exit'](status);
  }
  Module['quit'](status, new ExitStatus(status));
}
Module['exit'] = Module.exit = exit;

var abortDecorators = [];

function abort(what) {
  if (Module['onAbort']) {
    Module['onAbort'](what);
  }

  if (what !== undefined) {
    Module.print(what);
    Module.printErr(what);
    what = JSON.stringify(what)
  } else {
    what = '';
  }

  ABORT = true;
  EXITSTATUS = 1;

  var extra = '';

  var output = 'abort(' + what + ') at ' + stackTrace() + extra;
  if (abortDecorators) {
    abortDecorators.forEach(function(decorator) {
      output = decorator(output, what);
    });
  }
  throw output;
}
Module['abort'] = Module.abort = abort;

// {{PRE_RUN_ADDITIONS}}

if (Module['preInit']) {
  if (typeof Module['preInit'] == 'function') Module['preInit'] = [Module['preInit']];
  while (Module['preInit'].length > 0) {
    Module['preInit'].pop()();
  }
}

// shouldRunNow refers to calling main(), not run().
var shouldRunNow = true;
if (Module['noInitialRun']) {
  shouldRunNow = false;
}

Module["noExitRuntime"] = true;

run();

// {{POST_RUN_ADDITIONS}}





// {{MODULE_ADDITIONS}}





            return Module;
        })();
        
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
    return [];
};

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () {
    return 0;
};

/***/ })
/******/ ]);
});