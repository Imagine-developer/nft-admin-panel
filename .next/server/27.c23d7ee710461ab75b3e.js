exports.ids = [27];
exports.modules = {

/***/ "Qysn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_IntlMessages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("b3IY");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const FormItem = antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item;

const ResetPassword = () => {
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const onFinish = values => {
    console.log("finish", values);
  };

  return __jsx("div", {
    className: "gx-login-container"
  }, __jsx("div", {
    className: "gx-login-content"
  }, __jsx("div", {
    className: "gx-login-header"
  }, __jsx("img", {
    src: "/images/logo-white.png",
    alt: "wieldy",
    title: "wieldy"
  })), __jsx("div", {
    className: "gx-mb-4"
  }, __jsx("h2", null, "Reset Password"), __jsx("p", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    id: "appModule.enterPasswordReset"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    initialValues: {
      remember: true
    },
    name: "basic",
    onFinish: onFinish,
    onFinishFailed: onFinishFailed,
    className: "gx-signin-form gx-form-row0"
  }, __jsx(FormItem, {
    rules: [{
      required: true,
      message: 'Please input your Password!'
    }],
    name: "password"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    className: "gx-input-lineheight",
    type: "password",
    placeholder: "Password"
  })), __jsx(FormItem, {
    rules: [{
      required: true,
      message: 'Please confirm your password!'
    }],
    name: "confirm"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    className: "gx-input-lineheight",
    placeholder: "Retype New Password",
    type: "password"
  })), __jsx(FormItem, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "primary",
    htmlType: "submit"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    id: "app.userAuth.reset"
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (ResetPassword);

/***/ }),

/***/ "b3IY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("k004");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const InjectMassage = props => __jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], props);

/* harmony default export */ __webpack_exports__["a"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_1__["injectIntl"])(InjectMassage, {
  withRef: false
}));

/***/ })

};;