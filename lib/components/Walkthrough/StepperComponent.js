import React from "react";
import { ProgressBarComponent } from "../ProgressBarComponent";
var StepperComponent = function StepperComponent(_ref) {
  var steps = _ref.steps,
    currentIdx = _ref.currentIdx,
    currentStep = _ref.currentStep;
  return /*#__PURE__*/React.createElement("div", {
    className: "shadow-soft-bevel bg-neutral-200  border border-neutral-1200 rounded-[16px] overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "px-[24px] py-[4px]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-[-8px]"
  }, "Step ", " ", currentIdx + 1), /*#__PURE__*/React.createElement("div", {
    className: "text-subheading-bold"
  }, currentStep.name)), /*#__PURE__*/React.createElement(ProgressBarComponent, {
    max: steps.length,
    value: currentIdx + 1
  }));
};
export { StepperComponent };