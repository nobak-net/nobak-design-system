import React from 'react';
import { Button } from "../shared";
import { Logo } from "../components/Logo";
import { Frame } from "../components/Frame";
import { Layout } from "../shared/components";
// import nobakLogo from '../assets/images/NobakLogo.svg';

var DiscordLogin = function DiscordLogin(_ref) {
  var Component = _ref.component,
    openModal = _ref.openModal;
  return /*#__PURE__*/React.createElement("div", {
    className: "bg-gradient-softpurple h-screen"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center h-screen"
  }, /*#__PURE__*/React.createElement(Layout, null, /*#__PURE__*/React.createElement(Frame, null, /*#__PURE__*/React.createElement("div", {
    className: "w-[450px] mx-auto"
  }, /*#__PURE__*/React.createElement(Logo, null)), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col"
  }, /*#__PURE__*/React.createElement(Button, {
    text: "Login",
    variant: "outline",
    type: "button",
    onClick: function onClick() {
      return openModal({
        type: 'connect'
      });
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-center text-neutral-600 text-caption-bold mt-8"
  }, "By signing up, you agree to our Privacy Policy and Terms of Service"))), /*#__PURE__*/React.createElement("div", {
    className: "mt-8"
  }, /*#__PURE__*/React.createElement(Button, {
    text: "Explore Nobaks",
    type: "button",
    onClick: function onClick() {
      return openModal({
        type: 'connect'
      });
    },
    customCss: "w-full"
  })))));
};
var WalletLogin = function WalletLogin(_ref2) {
  var openWallet = _ref2.openWallet;
  return /*#__PURE__*/React.createElement("div", {
    className: "bg-secondary-900 h-screen"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center h-screen"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-[480px] mx-auto px-[30px] py-[15px] bg-neutral-100 rounded-[20px]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-[360px] mx-auto"
  }, /*#__PURE__*/React.createElement(Logo, null)), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col"
  }, /*#__PURE__*/React.createElement(Button, {
    text: "Wallet Login",
    type: "button",
    onClick: function onClick() {
      return openWallet();
    }
  })))));
};
var DefaultView = function DefaultView(_ref3) {
  var Component = _ref3.component,
    openWallet = _ref3.openWallet,
    signTransaction = _ref3.signTransaction;
  return /*#__PURE__*/React.createElement("div", {
    className: "bg-secondary-900 h-screen"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center h-screen"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-[480px] mx-auto px-[30px] py-[15px] bg-neutral-100 rounded-[20px]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-[360px] mx-auto"
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col"
  }, /*#__PURE__*/React.createElement(Button, {
    text: "Send XDR",
    type: "button",
    onClick: function onClick() {
      return signTransaction('xdr', false);
    }
  }), /*#__PURE__*/React.createElement(Button, {
    text: "Wallet Login",
    type: "button",
    onClick: function onClick() {
      return openWallet();
    }
  }), /*#__PURE__*/React.createElement(Button, {
    text: "Logout",
    type: "link",
    to: "/logout",
    component: Component
  })))));
};
export var Home = function Home(_ref4) {
  var Component = _ref4.component,
    view = _ref4.view,
    openWallet = _ref4.openWallet,
    signTransaction = _ref4.signTransaction,
    openModal = _ref4.openModal;
  switch (view) {
    case 'loginEmailView':
      return /*#__PURE__*/React.createElement(DiscordLogin, {
        component: Component,
        openModal: openModal
      });
    case 'loginWalletView':
      return /*#__PURE__*/React.createElement(WalletLogin, {
        openWallet: openWallet
      });
    case 'defaultView':
      return /*#__PURE__*/React.createElement(DefaultView, {
        component: Component,
        signTransaction: signTransaction,
        openWallet: openWallet
      });
    default:
      return /*#__PURE__*/React.createElement(React.Fragment, null);
  }
};