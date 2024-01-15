import React from 'react';
var ProgressBarComponent = function ProgressBarComponent(_ref) {
  var max = _ref.max,
    value = _ref.value;
  var width = value * 100 / max;
  return /*#__PURE__*/React.createElement("div", {
    className: "relative w-full h-2 bg-neutral-800 rounded-[18px] overflow-hidden shadow-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute h-2 bg-gradient-to-r from-secondary-1100 to-secondary-1400 rounded-tr-[4px] rounded-br-[4px]",
    style: {
      width: "".concat(width, "%")
    }
  }));
};
export { ProgressBarComponent };