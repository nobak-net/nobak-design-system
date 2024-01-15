function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React from 'react';
import { Tab as TabComponent } from '@headlessui/react';
import clsx from 'clsx';
import { Icon } from "../Icon";
export var Tab = function Tab(_ref) {
  var options = _ref.options,
    _ref$orientation = _ref.orientation,
    orientation = _ref$orientation === void 0 ? 'horizontal' : _ref$orientation;
  var _React$useState = React.useState(options),
    _React$useState2 = _slicedToArray(_React$useState, 1),
    navigation = _React$useState2[0];
  var listStyle = clsx(orientation === 'horizontal' && 'py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3 space-y-2', orientation === 'vertical' && 'flex p-1 space-x-1 bg-blue-900/20 rounded-xl');
  var panelStyle = clsx(orientation === 'horizontal' && 'flex flex-1');
  var gridStyle = {
    right: clsx(orientation === 'horizontal' && 'space-y-6 sm:px-6 lg:px-0 lg:col-span-9'),
    left: clsx(orientation === 'horizontal' && 'lg:grid lg:grid-cols-12 lg:gap-x-5 ')
  };
  var highlightPanel = clsx(false && "bg-white rounded-xl p-3 focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60");
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: gridStyle.left
  }, /*#__PURE__*/React.createElement(TabComponent.Group, null, /*#__PURE__*/React.createElement(TabComponent.List, {
    as: "aside",
    className: listStyle
  }, options.map(function (_ref2) {
    var name = _ref2.name,
      icon = _ref2.icon;
    return /*#__PURE__*/React.createElement(TabComponent, {
      as: "nav",
      key: name,
      className: function className(_ref3) {
        var selected = _ref3.selected;
        return clsx('text-primary border border-primary hover:text-primary-hover hover:bg-secondary-400-hover cursor-pointer group rounded-md px-3 py-2 flex items-center text-sm font-medium', selected ? 'bg-secondary-400 text-background' : 'text-blue-100');
      }
    }, icon && /*#__PURE__*/React.createElement(Icon, {
      name: icon.name,
      size: "medium",
      customCss: "mr-2"
    }), name && /*#__PURE__*/React.createElement("span", {
      className: "py-0.5 px-1"
    }, name));
  })), /*#__PURE__*/React.createElement("div", {
    className: gridStyle.right
  }, /*#__PURE__*/React.createElement("div", {
    className: panelStyle
  }, /*#__PURE__*/React.createElement(TabComponent.Panels, {
    className: "w-full"
  }, Object.values(navigation).map(function (item, idx) {
    return /*#__PURE__*/React.createElement(TabComponent.Panel, {
      key: idx,
      className: highlightPanel
    }, /*#__PURE__*/React.createElement(item.view, null));
  })))))));
};