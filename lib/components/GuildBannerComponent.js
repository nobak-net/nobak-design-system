import React from 'react';
import { Avatar, Button } from "../shared/components";
import clsx from 'clsx';
var GuildBannerComponent = function GuildBannerComponent(_ref) {
  var cover = _ref.cover,
    title = _ref.title,
    description = _ref.description,
    size = _ref.size,
    buttonColor = _ref.buttonColor,
    disabled = _ref.disabled,
    loading = _ref.loading,
    menu = _ref.menu,
    socialLinks = _ref.socialLinks;
  var cardStyle = clsx("rounded-xl border border-slate-900 overflow-hidden", size == "medium" && "w-80", size == "large" && "w-96");
  return /*#__PURE__*/React.createElement("div", {
    className: cardStyle
  }, /*#__PURE__*/React.createElement("img", {
    className: "object-fit h-40 w-full",
    src: cover
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col justify-center items-center pt-16 px-8 pb-8 relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute top-0 -translate-y-1/2"
  }, /*#__PURE__*/React.createElement(Avatar, {
    imageUrl: ""
  })), /*#__PURE__*/React.createElement("div", {
    className: "text-p1-medium"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "mt-2 text-p3-light"
  }, description), /*#__PURE__*/React.createElement(Button, {
    customCss: "mt-4",
    variant: buttonColor,
    disabled: disabled,
    loading: loading,
    size: "small",
    text: "Join"
  }), /*#__PURE__*/React.createElement("div", {
    className: "mt-4"
  }, /*#__PURE__*/React.createElement("ul", null, menu.map(function (menu) {
    return /*#__PURE__*/React.createElement("li", {
      className: "text-center"
    }, menu.name);
  }))), /*#__PURE__*/React.createElement("div", {
    className: "mt-4 flex flex-col justify-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center"
  }, "Settings"), /*#__PURE__*/React.createElement("ul", {
    className: "flex flex-row items-center justify-center space-x-4"
  }, socialLinks.map(function (social) {
    return /*#__PURE__*/React.createElement("li", null, social.name);
  })))));
};
export { GuildBannerComponent };