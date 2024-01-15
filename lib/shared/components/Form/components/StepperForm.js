function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React from 'react';
import { Button, Input } from "../../index";
import { useForm } from "../context";
import clsx from 'clsx';
export var StepperForm = function StepperForm(_ref) {
  var fields = _ref.fields,
    _ref$debug = _ref.debug,
    debug = _ref$debug === void 0 ? false : _ref$debug,
    button = _ref.button;
  var maxStep = fields.length - 1;
  var _React$useState = React.useState(0),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    step = _React$useState2[0],
    setStep = _React$useState2[1];
  var _useForm = useForm(),
    fieldsState = _useForm.fieldsState,
    updateForm = _useForm.updateForm,
    formState = _useForm.formState;
  var _React$useState3 = React.useState(null),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    validation = _React$useState4[0],
    setValidation = _React$useState4[1];
  var _React$useState5 = React.useState(false),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    allowance = _React$useState6[0],
    setAllowance = _React$useState6[1];
  var nextStep = function nextStep(_ref2) {
    var key = _ref2.key;
    if (step <= maxStep) {
      setStep(step + 1);
      setAllowance(false);
    }
  };

  // This effect checks for Input validations updates on every onChange
  React.useEffect(function () {
    if (fieldsState.length > 0 && step !== fieldsState.length) {
      _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var validationState, result;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              // Validating all fields in the current step
              validationState = fieldsState[step].map( /*#__PURE__*/function () {
                var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(field, key) {
                  var _field$validation;
                  var _formState$find, value;
                  return _regeneratorRuntime().wrap(function _callee$(_context) {
                    while (1) switch (_context.prev = _context.next) {
                      case 0:
                        if (!(((_field$validation = field.validation) === null || _field$validation === void 0 ? void 0 : _field$validation.fn) === undefined)) {
                          _context.next = 2;
                          break;
                        }
                        return _context.abrupt("return", true);
                      case 2:
                        if (!(formState === null)) {
                          _context.next = 4;
                          break;
                        }
                        return _context.abrupt("return", false);
                      case 4:
                        // Get the value of the field from the formState
                        _formState$find = formState.find(function (_ref5) {
                          var id = _ref5.id;
                          return id === field.id;
                        }), value = _formState$find.value;
                        console.log('value', value);
                        // Run the validation function
                        _context.next = 8;
                        return field.validation.fn(value);
                      case 8:
                        return _context.abrupt("return", _context.sent);
                      case 9:
                      case "end":
                        return _context.stop();
                    }
                  }, _callee);
                }));
                return function (_x, _x2) {
                  return _ref4.apply(this, arguments);
                };
              }()); // Wait for all validations to finish
              _context2.next = 3;
              return Promise.all(validationState);
            case 3:
              result = _context2.sent;
              console.log('RESULT', result);
              // Allow to continue to next step if all validations are true
              setAllowance(result.every(function (e) {
                return e === true || e.valid === true;
              }));
            case 6:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    }
    // validate every time the formState changes
  }, [formState, allowance]);
  var goBack = function goBack() {
    if (step >= 1) {
      setStep(step + -1);
      setAllowance(true);
    }
  };
  var barContainer = clsx("grid gap-[4px] grid-cols-".concat(maxStep + 2));
  return /*#__PURE__*/React.createElement(React.Fragment, null, step === fieldsState.length ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "text-subheading-bold text-neutral-800 mb-[20px]"
  }, "Review details"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-[8px]"
  }, fieldsState.map(function (fields, key) {
    return /*#__PURE__*/React.createElement("div", {
      key: key
    }, fields.map(function (_ref6, key) {
      var id = _ref6.id,
        label = _ref6.label;
      // console.log('id', label)
      var _formState$find2 = formState.find(function (_ref7) {
          var formId = _ref7.id;
          return formId === id;
        }),
        value = _formState$find2.value;
      return /*#__PURE__*/React.createElement("div", {
        key: key
      }, /*#__PURE__*/React.createElement("div", {
        className: "text-neutral-800"
      }, label, ": ", value));
    }));
  }), formState.map(function (_ref8, key) {
    var id = _ref8.id,
      value = _ref8.value;
    return /*#__PURE__*/React.createElement("input", {
      key: key,
      hidden: true,
      id: id,
      name: id,
      defaultValue: value
    });
  })), /*#__PURE__*/React.createElement("div", {
    className: "pt-6 flex flex-col space-y-[20px]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-row justify-start space-x-[8px]"
  }, /*#__PURE__*/React.createElement(Button, {
    text: button.text,
    type: "submit",
    rounded: "medium",
    variant: button.variant,
    customCss: button.customCss
  }), /*#__PURE__*/React.createElement(Button, {
    onClick: function onClick() {
      return goBack();
    },
    text: "back",
    variant: "basic"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col space-y-[8px]"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-green-400 text-p2-bold"
  }, step), /*#__PURE__*/React.createElement("span", {
    className: "text-green-200 text-p2-medium pl-[2px]"
  }, "/", maxStep + 1)), /*#__PURE__*/React.createElement("div", {
    className: barContainer
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-green-400 rounded-[2px] h-[4px] col-span-".concat(step + 1)
  }))))) : /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col justify-between h-[420px]"
  }, fieldsState.map(function (fields, key) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: step !== key ? 'hidden' : 'flex flex-col space-y-[12px]'
    }, fields.map(function (_ref9) {
      var type = _ref9.type,
        id = _ref9.id,
        label = _ref9.label,
        placeholder = _ref9.placeholder,
        autoComplete = _ref9.autoComplete,
        required = _ref9.required,
        icon = _ref9.icon,
        uploadFile = _ref9.uploadFile,
        options = _ref9.options,
        _ref9$hidden = _ref9.hidden,
        hidden = _ref9$hidden === void 0 ? false : _ref9$hidden,
        afterChange = _ref9.afterChange,
        validation = _ref9.validation,
        maxLength = _ref9.maxLength,
        variant = _ref9.variant,
        populateOptions = _ref9.populateOptions,
        belongs_to = _ref9.belongs_to,
        _ref9$disabled = _ref9.disabled,
        disabled = _ref9$disabled === void 0 ? false : _ref9$disabled,
        defaultValue = _ref9.defaultValue,
        title = _ref9.title,
        description = _ref9.description,
        multiple = _ref9.multiple;
      return /*#__PURE__*/React.createElement(React.Fragment, null, title && /*#__PURE__*/React.createElement("div", {
        className: "text-subheading-bold text-neutral-800"
      }, title), description && /*#__PURE__*/React.createElement("div", {
        className: "text-p3-medium text-neutral-400"
      }, description), /*#__PURE__*/React.createElement(Input, {
        key: key,
        type: type,
        id: id,
        disabled: disabled,
        label: label,
        options: options,
        afterChange: type === 'select' || type === 'radiobox' ? afterChange : setValidation,
        maxLength: maxLength,
        variant: variant,
        uploadFile: uploadFile,
        icon: icon,
        validation: validation,
        belongs_to: belongs_to,
        populateOptions: populateOptions,
        hidden: step !== key ? true : hidden,
        debug: debug,
        defaultValue: !!defaultValue ? defaultValue : '',
        autoComplete: autoComplete,
        placeholder: placeholder,
        required: required,
        multiple: multiple
      }));
    })));
  }), /*#__PURE__*/React.createElement("div", {
    className: "pt-6 flex flex-col space-y-[20px]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-row justify-start space-x-[8px]"
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: function onClick() {
      return nextStep({
        data: fields
      });
    },
    text: "next",
    variant: "primary",
    disabled: !Boolean(allowance)
  }), step >= 1 && /*#__PURE__*/React.createElement(Button, {
    onClick: function onClick() {
      return goBack();
    },
    text: "back",
    variant: "basic"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col space-y-[8px]"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-neutral-800 text-p2-bold"
  }, step + 1), /*#__PURE__*/React.createElement("span", {
    className: "text-neutral-400 text-p2-medium pl-[2px]"
  }, "/", maxStep + 1)), /*#__PURE__*/React.createElement("div", {
    className: barContainer
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-primary-400 rounded-[2px] h-[4px] col-span-".concat(step + 1)
  }), /*#__PURE__*/React.createElement("div", {
    className: "bg-neutral-400 rounded-[2px] h-[4px] col-span-".concat(maxStep - step + 1)
  }))))));
};