import React from 'react';
import { Avatar } from "../shared/components";
import clsx from 'clsx';
var CardComponent = function CardComponent(_ref) {
  var title = _ref.title,
    avatar_url = _ref.avatar_url,
    description = _ref.description,
    buttonColor = _ref.buttonColor,
    disabled = _ref.disabled,
    loading = _ref.loading,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'medium' : _ref$size,
    customCss = _ref.customCss;
  var cardStyle = clsx('shadow-soft-bevel hover:shadow-hover flex flex-col flex-end justify-between p-[14px] rounded-xl bg-neutral-200 border border-neutral-1200', size == 'medium' && 'w-[200px] h-[200px]', size == 'large' && 'w-96', "".concat(customCss));
  return /*#__PURE__*/React.createElement("div", {
    className: cardStyle
  }, /*#__PURE__*/React.createElement(Avatar, {
    imageUrl: avatar_url,
    size: "small"
  }), /*#__PURE__*/React.createElement("div", {
    className: "text-p1-bold"
  }, title));
};
export { CardComponent };