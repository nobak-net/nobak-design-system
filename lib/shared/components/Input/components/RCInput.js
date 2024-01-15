function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import * as React from 'react';
import { useIsFocused } from 'use-is-focused';
import { CodeInput, getSegmentCssWidth } from 'rci';
import { Icon } from "../../Icon";
import clsx from 'clsx';
// import { CheckIcon, XIcon } from '@heroicons/react/solid';

// const checkCodeApiMock = (code: string, expected: string): Promise<boolean> => {
//   return new Promise<boolean>((r) => setTimeout(r, 350, code === expected))
// }

var redirectToAppMock = function redirectToAppMock() {
  alert('redirect to app');
  // window.location.assign(window.location.href)
};
export var RCInput = function RCInput(_ref) {
  var config = _ref.config;
  var id = config.id,
    label = config.label,
    _config$maxLength = config.maxLength,
    maxLength = _config$maxLength === void 0 ? 4 : _config$maxLength,
    validation = config.validation;
  var autoFocus = true;
  var _React$useState = React.useState('input'),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    state = _React$useState2[0],
    setState = _React$useState2[1];
  var inputRef = React.useRef(null);
  var focused = useIsFocused(inputRef);
  var width = getSegmentCssWidth('10px');
  var TextStyle = clsx('text-neutral-1800', focused && 'border-primary-1600');
  var InputStyle = clsx("border border-neutral-1600 rounded-[8px]", state === 'loading' && focused && 'border-primary-1600', state === 'success' && 'border-green-1600', state === 'error' && 'border-red-1600');
  var iconStyle = clsx('pl-[20px] flex items-center text-neutral-1600', state === 'success' && 'text-green-1600', state === 'error' && 'text-red-1600');
  React.useEffect(function () {
    if (validation.state !== 'input') {
      setState(validation.state);
      if (validation.state === 'error') {
        setTimeout(function () {
          setState('input');
        }, 500);
      }
    }
  }, [validation.state]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "flex"
  }, /*#__PURE__*/React.createElement(CodeInput, {
    id: id,
    autoFocus: autoFocus,
    className: TextStyle,
    length: maxLength,
    readOnly: state !== 'input',
    disabled: state === 'loading',
    inputRef: inputRef,
    padding: "8px",
    spacing: "16px",
    spellCheck: false,
    inputMode: "numeric",
    pattern: "[0-9]*",
    autoComplete: "one-time-code",
    onChange: function onChange(_ref2) {
      var input = _ref2.currentTarget;
      // only accept numbers
      input.value = input.value.replace(/\D+/g, '');

      // auto submit on input fill
      if (input.value.length === maxLength) {
        setState('loading');
        validation === null || validation === void 0 || validation.fn(input.value);
        // .then((success: any) => {
        //   if (success) {
        //     setState('success')
        //     return setTimeout(redirectToAppMock, 500)
        //   }
        //   setState('error')
        //   setTimeout(() => {
        //     setState('input')
        //     input.value = ''
        //     input.dispatchEvent(new Event('input'))
        //     input.focus()
        //   }, 500)
        // })
      }
    },
    renderSegment: function renderSegment(_ref3) {
      var state = _ref3.state,
        index = _ref3.index;
      return /*#__PURE__*/React.createElement("div", {
        key: index,
        className: InputStyle,
        "data-state": state,
        style: {
          width: width,
          height: '100%'
        },
        children: /*#__PURE__*/React.createElement("div", null)
      });
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: iconStyle
  }, state === 'loading' && /*#__PURE__*/React.createElement("div", {
    className: "origin-center animate-spin"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "spinner",
    size: "medium"
  })))));
};