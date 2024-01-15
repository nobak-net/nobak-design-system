function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import clsx from 'clsx';
import React from 'react';
var Header = function Header(_ref) {
  var title = _ref.title,
    Component = _ref.aux;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "px-7 py-4 flex items-center justify-between border bg-neutral-400"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-h2-bold"
  }, title), !!Component && /*#__PURE__*/React.createElement(Component, null)));
};
var Body = function Body(_ref2) {
  var children = _ref2.children,
    gridNumber = _ref2.gridNumber,
    _ref2$gridOrientation = _ref2.gridOrientation,
    gridOrientation = _ref2$gridOrientation === void 0 ? 'vertical' : _ref2$gridOrientation,
    gridComponents = _ref2.gridComponents;
  return /*#__PURE__*/React.createElement(React.Fragment, null, Boolean(children) ? /*#__PURE__*/React.createElement("div", {
    className: "px-[32px] py-[16px]"
  }, children) : /*#__PURE__*/React.createElement("div", {
    className: clsx('flex', gridOrientation === 'vertical' && 'flex-row', gridOrientation === 'horizontal' && 'flex-col')
  }, gridComponents && gridComponents.map(function (_ref3) {
    var ComponentChild = _ref3.component,
      options = _ref3.options;
    return /*#__PURE__*/React.createElement(ComponentChild, _extends({}, options, {
      customCss: "flex-[1_0_auto]"
    }));
  })));
};
var LayoutComponent = function LayoutComponent(_ref4) {
  var variant = _ref4.variant,
    title = _ref4.title,
    Component = _ref4.component,
    children = _ref4.children,
    _ref4$gridNumber = _ref4.gridNumber,
    gridNumber = _ref4$gridNumber === void 0 ? 1 : _ref4$gridNumber,
    _ref4$gridOrientation = _ref4.gridOrientation,
    gridOrientation = _ref4$gridOrientation === void 0 ? 'vertical' : _ref4$gridOrientation,
    gridComponents = _ref4.gridComponents;
  if (variant === 'complex') {
    return /*#__PURE__*/React.createElement("div", {
      className: "w-full border border-neutral-1200 rounded-[16px] bg-neutral-200 overflow-hidden"
    }, /*#__PURE__*/React.createElement(Header, {
      title: title,
      aux: Component
    }), /*#__PURE__*/React.createElement(Body, {
      gridNumber: gridNumber,
      gridOrientation: gridOrientation,
      gridComponents: gridComponents
    }, children));
  } else if (variant === 'simple') {
    return /*#__PURE__*/React.createElement("div", {
      className: "w-full border border-neutral-1200 rounded-[16px] bg-neutral-200 overflow-hidden"
    }, /*#__PURE__*/React.createElement("div", {
      className: "px-7 py-4 border bg-neutral-400"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-subheading-bold"
    }, title)), /*#__PURE__*/React.createElement("div", {
      className: "px-[32px] py-[16px]"
    }, children));
  } else {
    return /*#__PURE__*/React.createElement("div", {
      className: "w-full border border-neutral-1200 rounded-[16px] bg-neutral-200 overflow-hidden"
    }, /*#__PURE__*/React.createElement("div", {
      className: "px-[32px] py-[16px]"
    }, children));
  }
};
export { LayoutComponent };