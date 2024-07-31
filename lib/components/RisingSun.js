function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useEffect, useRef, useState } from 'react';
var RisingSun = function RisingSun(_ref) {
  var children = _ref.children;
  var canvasRef = useRef(null);
  var _useState = useState({
      width: 800,
      height: 600
    }),
    _useState2 = _slicedToArray(_useState, 2),
    canvasSize = _useState2[0],
    setCanvasSize = _useState2[1]; // Default size

  useEffect(function () {
    // Check if running in a browser
    if (typeof window !== 'undefined') {
      var handleResize = function handleResize() {
        setCanvasSize({
          width: window.innerWidth,
          height: window.innerHeight
        });
      };
      window.addEventListener('resize', handleResize);
      handleResize(); // Initialize with the current window size

      return function () {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);
  useEffect(function () {
    var canvas = canvasRef.current;
    var context = canvas === null || canvas === void 0 ? void 0 : canvas.getContext('2d');
    if (!context) return;
    var canvasWidth = canvasSize.width,
      canvasHeight = canvasSize.height;
    var sunRadius = 80;
    var startAngle = 0;
    var getRayEndPoint = function getRayEndPoint(angle) {
      var radians = angle * Math.PI / 180;
      var dx = Math.cos(radians);
      var dy = Math.sin(radians);
      if (canvasWidth * dy <= canvasHeight * dx) {
        return {
          x: canvasWidth,
          y: canvasWidth * dy / dx
        };
      } else {
        return {
          x: canvasHeight * dx / dy,
          y: canvasHeight
        };
      }
    };
    var draw = function draw() {
      context.clearRect(0, 0, canvasWidth, canvasHeight);
      context.beginPath();
      context.arc(0, 0, sunRadius, 0, Math.PI / 2);
      context.lineTo(0, 0);
      context.fillStyle = '#CBD4DC';
      context.fill();
      for (var i = 0; i < 30; i++) {
        var angle = (startAngle + 12 * i) % 360;
        var endPoint = getRayEndPoint(angle);
        context.beginPath();
        context.moveTo(0, 0);
        context.lineTo(endPoint.x, endPoint.y);
        context.strokeStyle = '#CBD4DC'; // Custom hex color
        context.lineWidth = 1;
        context.stroke();
      }
      startAngle += 0.05; // Slower rotation speed
      requestAnimationFrame(draw);
    };
    draw();
  }, [canvasSize]);
  return /*#__PURE__*/React.createElement("div", {
    className: "rising-sun-container"
  }, /*#__PURE__*/React.createElement("canvas", {
    className: "rising-sun-canvas",
    ref: canvasRef,
    style: {
      backgroundColor: '#080909'
    },
    width: canvasSize.width,
    height: canvasSize.height
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero-container"
  }, children));
};
export { RisingSun };