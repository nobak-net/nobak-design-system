import React from 'react';
import clsx from 'clsx';
export var Frame = function Frame(_ref) {
  var title = _ref.title,
    CTA = _ref.CTA,
    sidebar = _ref.sidebar,
    variant = _ref.variant,
    children = _ref.children,
    _ref$padding = _ref.padding,
    padding = _ref$padding === void 0 ? 'none' : _ref$padding,
    _ref$border = _ref.border,
    border = _ref$border === void 0 ? 'none' : _ref$border,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? 'small' : _ref$height,
    _ref$overflow = _ref.overflow,
    overflow = _ref$overflow === void 0 ? false : _ref$overflow,
    customCss = _ref.customCss;
  var glass = 'shadow-glass backdrop-filter backdrop-blur-lg bg-glass';
  var style = clsx(padding === 'small' && 'px-2', height === '1/3' && 'h-v76', border === 'bottom' && 'border-b', overflow && 'overflow-y-scroll', glass, 'w-full rounded-[16px] px-24 py-12  border border-neutral-1300', "".concat(customCss));
  var sidebarStyle = clsx('p-[16px] rounded-tl-[16px] rounded-bl-[16px] border border-neutral-1300', glass, "".concat(customCss));
  var contentStyle = clsx(glass, 'w-full rounded-tr-[16px] rounded-br-[16px] bg-neutral-600 px-[24px] py-[12px]  border border-neutral-1300 border-l-0', "".concat(customCss));
  switch (variant) {
    case 'simple':
      return /*#__PURE__*/React.createElement("div", {
        className: style
      }, /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null, children));
    case 'complex':
      return /*#__PURE__*/React.createElement("div", {
        className: style
      }, /*#__PURE__*/React.createElement("div", null, !!CTA && CTA), /*#__PURE__*/React.createElement("div", null, children));
    case 'sidebar':
      return /*#__PURE__*/React.createElement("div", {
        className: "flex flex-row"
      }, /*#__PURE__*/React.createElement("div", {
        className: sidebarStyle
      }, sidebar), /*#__PURE__*/React.createElement("div", {
        className: contentStyle
      }, children));
    case 'glass':
      return /*#__PURE__*/React.createElement("div", {
        className: style
      }, children);
    default:
      return /*#__PURE__*/React.createElement("div", {
        className: style
      }, children);
  }
};