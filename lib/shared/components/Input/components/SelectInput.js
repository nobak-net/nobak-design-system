function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React from 'react';
import { Select } from "../../Select";
import { useForm } from "../../Form/context";
export var SelectInput = function SelectInput(_ref) {
  var config = _ref.config;
  var _useForm = useForm(),
    updateForm = _useForm.updateForm;
  var id = config.id,
    label = config.label,
    defaultValue = config.defaultValue,
    options = config.options,
    required = config.required,
    debug = config.debug,
    mRef = config.mRef,
    belongs_to = config.belongs_to,
    populateOptions = config.populateOptions,
    multiple = config.multiple,
    hidden = config.hidden;
  var _React$useState = React.useState(defaultValue),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    value = _React$useState2[0],
    setValue = _React$useState2[1];
  React.useEffect(function () {
    // Check if parent options has changed
    var hasValue = options.find(function (option) {
      return "".concat(option.value) === value;
    });
    if (!hasValue && options.length > 0) {
      setValue(options[0].value);
    }
  }, [options]);
  var handleChange = function handleChange(e) {
    if (e !== null && e !== void 0 && e.value) {
      setValue("".concat(e.value));
      updateForm();
    }
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, !hidden && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    className: "block text-sm font-medium text-neutral-800"
  }, label), /*#__PURE__*/React.createElement("input", {
    hidden: hidden ? true : !debug ? true : false,
    value: value,
    readOnly: true,
    autoComplete: "off",
    name: id,
    id: id
  }), !hidden && /*#__PURE__*/React.createElement(Select, {
    type: "input",
    id: id,
    mRef: mRef,
    afterUpdate: handleChange,
    defaultValue: value,
    debug: debug,
    options: options ? options : [],
    multiple: multiple
  }));
};