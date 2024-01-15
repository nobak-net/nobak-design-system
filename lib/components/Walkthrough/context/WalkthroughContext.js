function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React from 'react';
import { StepperComponent } from "../StepperComponent";
import { TipsComponent } from "../../TipsComponent";
export var WalkthroughContext = /*#__PURE__*/React.createContext({});
export var WalkthroughProvider = function WalkthroughProvider(_ref) {
  var steps = _ref.steps,
    children = _ref.children;
  var _React$useState = React.useState(steps[0]),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    currentStep = _React$useState2[0],
    setStep = _React$useState2[1];
  var _React$useState3 = React.useState({}),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    memory = _React$useState4[0],
    setMemory = _React$useState4[1];
  var currentIdx = steps.indexOf(currentStep);
  if (currentIdx === -1) currentIdx = 0;
  var goNext = function goNext(data) {
    if (data) setMemory(data);
    setStep(steps[currentIdx + 1]);
  };
  var goBack = function goBack(data) {
    if (data) setMemory(data);
    setStep(steps[currentIdx - 1]);
  };
  var getMemory = function getMemory() {
    return memory;
  };
  return /*#__PURE__*/React.createElement(WalkthroughContext.Provider, {
    value: {
      goNext: goNext,
      goBack: goBack,
      getMemory: getMemory,
      steps: steps,
      currentIdx: currentIdx
    }
  }, /*#__PURE__*/React.createElement(StepperComponent, {
    steps: steps,
    currentIdx: currentIdx,
    currentStep: currentStep
  }), children, /*#__PURE__*/React.createElement(TipsComponent, {
    tips: [{
      name: 'Nobakty-Driven Decision-Making',
      description: 'Empower individuals to propose, discuss, and vote on initiatives.'
    }, {
      name: 'Coordinate Collaborative Work Globally',
      description: 'Bridge geographical divides, bringing together talent and expertise from around the world.'
    }, {
      name: 'Democratize Access to Investment Opportunities',
      description: 'Offer equal opportunities for members to invest in promising ventures.'
    }],
    interval: 10000
  }));
};
export var useWalkthrough = function useWalkthrough() {
  return React.useContext(WalkthroughContext);
};