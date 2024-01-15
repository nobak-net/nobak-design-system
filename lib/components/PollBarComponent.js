import React from 'react';
var PollBarComponent = function PollBarComponent(_ref) {
  var values = _ref.values;
  var total = values.yes + values.no + values.abstain;
  var getValue = function getValue(value, total, decimals) {
    return parseFloat("".concat(value * 100 / total)).toFixed(decimals);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "flex"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "".concat(values.yes, "%")
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-2 bg-primary-800"
  }, "Yes"), /*#__PURE__*/React.createElement("span", null, getValue(values.yes, total, 2), "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "".concat(values.no, "%")
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-2 bg-secondary-800"
  }, "No"), /*#__PURE__*/React.createElement("span", null, getValue(values.no, total, 2), "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "".concat(values.abstain, "%")
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-2 bg-neutral-800"
  }, "Abstain"), /*#__PURE__*/React.createElement("span", null, getValue(values.abstain, total, 2), "%")));
};
export { PollBarComponent };