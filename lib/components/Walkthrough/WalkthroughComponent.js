import React from 'react';
import { WalkthroughProvider, useWalkthrough } from "./context/WalkthroughContext";
var RenderComponent = function RenderComponent(_ref) {
  var Component = _ref.component;
  return /*#__PURE__*/React.createElement(Component, null);
};
var ContainerComponent = function ContainerComponent() {
  var _useWalkthrough = useWalkthrough(),
    steps = _useWalkthrough.steps,
    currentIdx = _useWalkthrough.currentIdx;
  if (steps[currentIdx].component) return /*#__PURE__*/React.createElement(RenderComponent, {
    component: steps[currentIdx].component
  });
  return /*#__PURE__*/React.createElement("div", null);
};
var WalkthroughComponent = function WalkthroughComponent(_ref2) {
  var steps = _ref2.steps;
  return /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement(WalkthroughProvider, {
    steps: steps
  }, /*#__PURE__*/React.createElement(ContainerComponent, null)));
};
export { WalkthroughComponent, useWalkthrough };