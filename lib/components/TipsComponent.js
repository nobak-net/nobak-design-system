function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React from 'react';
import { useState, useEffect } from 'react';
var TipsComponent = function TipsComponent(_ref) {
  var tips = _ref.tips,
    interval = _ref.interval;
  var getRandomNumber = function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
  };
  var _useState = useState(tips[getRandomNumber(tips.length)]),
    _useState2 = _slicedToArray(_useState, 2),
    currentTip = _useState2[0],
    setTip = _useState2[1];
  var intervalId;
  var getNewTip = function getNewTip() {
    var newTip;
    do {
      newTip = tips[getRandomNumber(tips.length)];
    } while (currentTip.name === newTip.name);
    return newTip;
  };
  useEffect(function () {
    if (intervalId === undefined) {
      intervalId = setTimeout(function () {
        return setTip(getNewTip);
      }, interval);
    }
  }, [currentTip]);
  useEffect(function () {
    return function () {
      clearInterval(intervalId);
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "bg-neutral-400 px-[24px] py-[8px] border border-neutral-1200 rounded-[16px] shadow-soft-bevel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-p2-bold mb-[-4px] text-neutral-1600"
  }, currentTip.name), /*#__PURE__*/React.createElement("div", {
    className: "text-p3-medium text-neutral-1200"
  }, currentTip.description));
};
export { TipsComponent };