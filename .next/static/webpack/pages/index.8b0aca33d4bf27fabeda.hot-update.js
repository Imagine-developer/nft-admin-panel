webpackHotUpdate_N_E("pages/index",{

/***/ "./util/use-auth.js":
/*!**************************!*\
  !*** ./util/use-auth.js ***!
  \**************************/
/*! exports provided: AuthProvider, useAuth, isUnRestrictedRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AuthProvider\", function() { return AuthProvider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useAuth\", function() { return useAuth; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isUnRestrictedRoute\", function() { return isUnRestrictedRoute; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Api */ \"./util/Api.js\");\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/es6/index.js\");\nvar _jsxFileName = \"/Users/andreyplatonov/Downloads/Telegram Desktop/wieldy-v-2.4.3/next-js-jwt-stater-kit/util/use-auth.js\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$(),\n    _s3 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar authContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])(); // Provider component that wraps app and makes auth object ..\n// ... available to any child component that calls useAuth().\n\nfunction AuthProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n  var auth = useProvideAuth();\n  return __jsx(authContext.Provider, {\n    value: auth,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 10\n    }\n  }, children);\n} // Hook for child components to get the auth object ...\n// ... and re-render when it changes.\n\n_s(AuthProvider, \"XNU4Jn8u4aVzJknlKOHFJq03xMo=\", false, function () {\n  return [useProvideAuth];\n});\n\n_c = AuthProvider;\nvar useAuth = function useAuth() {\n  _s2();\n\n  return Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(authContext);\n};\n\n_s2(useAuth, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\n\nvar useProvideAuth = function useProvideAuth() {\n  _s3();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      authUser = _useState[0],\n      setAuthUser = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(true),\n      loadingAuthUser = _useState2[0],\n      setLoadingAuthUser = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isLoading = _useState3[0],\n      setLoading = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      error = _useState4[0],\n      setError = _useState4[1];\n\n  var fetchStart = function fetchStart() {\n    setLoading(true);\n    setError('');\n  };\n\n  var fetchSuccess = function fetchSuccess() {\n    setLoading(false);\n    setError('');\n  };\n\n  var fetchError = function fetchError(error) {\n    setLoading(false);\n    setError(error);\n  };\n\n  var userLogin = function userLogin(data, callbackFun) {\n    fetchStart();\n    _Api__WEBPACK_IMPORTED_MODULE_1__[\"httpClient\"].post('admin/login', data).then(function (_ref2) {\n      var data = _ref2.data;\n\n      if (data.result) {\n        fetchSuccess();\n        _Api__WEBPACK_IMPORTED_MODULE_1__[\"httpClient\"].defaults.headers.common['Authorization'] = 'Bearer ' + data.token.access_token;\n        var cookies = new react_cookie__WEBPACK_IMPORTED_MODULE_2__[\"Cookies\"]();\n        cookies.set('token', data.token.access_token);\n        getAuthUser();\n        if (callbackFun) callbackFun();\n      } else {\n        fetchError(data.error);\n      }\n    })[\"catch\"](function (error) {\n      fetchError(error.message);\n    });\n  };\n\n  var userSignup = function userSignup(data, callbackFun) {\n    fetchStart();\n    _Api__WEBPACK_IMPORTED_MODULE_1__[\"httpClient\"].post('auth/register', data).then(function (_ref3) {\n      var data = _ref3.data;\n\n      if (data.result) {\n        fetchSuccess();\n        _Api__WEBPACK_IMPORTED_MODULE_1__[\"httpClient\"].defaults.headers.common['Authorization'] = 'Bearer ' + data.token.access_token;\n        var cookies = new react_cookie__WEBPACK_IMPORTED_MODULE_2__[\"Cookies\"]();\n        cookies.set('token', data.token.access_token);\n        if (callbackFun) callbackFun();\n      } else {\n        fetchError(data.error);\n      }\n    })[\"catch\"](function (error) {\n      fetchError(error.message);\n    });\n  };\n\n  var userSignOut = function userSignOut(callbackFun) {\n    fetchStart();\n\n    if (data.result) {\n      fetchSuccess();\n      setAuthUser(false);\n      _Api__WEBPACK_IMPORTED_MODULE_1__[\"httpClient\"].defaults.headers.common['Authorization'] = '';\n      var cookies = new react_cookie__WEBPACK_IMPORTED_MODULE_2__[\"Cookies\"]();\n      cookies.remove('token');\n    } else {\n      fetchError(data.error);\n    }\n\n    ß;\n  };\n\n  var getAuthUser = function getAuthUser() {\n    fetchStart();\n    _Api__WEBPACK_IMPORTED_MODULE_1__[\"httpClient\"].post(\"auth/me\").then(function (_ref4) {\n      var data = _ref4.data;\n\n      if (data.user) {\n        fetchSuccess();\n        setAuthUser(data.user);\n      } else {\n        fetchError(data.error);\n      }\n    })[\"catch\"](function (error) {\n      _Api__WEBPACK_IMPORTED_MODULE_1__[\"httpClient\"].defaults.headers.common['Authorization'] = '';\n      fetchError(error.message);\n    });\n  }; // Subscribe to user on mount\n  // Because this sets state in the callback it will cause any ...\n  // ... component that utilizes this hook to re-render with the ...\n  // ... latest auth object.\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var cookies = new react_cookie__WEBPACK_IMPORTED_MODULE_2__[\"Cookies\"]();\n    var token = cookies.get(\"token\");\n    _Api__WEBPACK_IMPORTED_MODULE_1__[\"httpClient\"].defaults.headers.common['Authorization'] = 'Bearer ' + token;\n    _Api__WEBPACK_IMPORTED_MODULE_1__[\"httpClient\"].post(\"auth/me\").then(function (_ref5) {\n      var data = _ref5.data;\n\n      if (data.user) {\n        setAuthUser(data.user);\n      }\n\n      setLoadingAuthUser(false);\n    })[\"catch\"](function (error) {\n      cookies.remove('token');\n      _Api__WEBPACK_IMPORTED_MODULE_1__[\"httpClient\"].defaults.headers.common['Authorization'] = '';\n      setLoadingAuthUser(false);\n    });\n  }, []); // Return the user object and auth methods\n\n  return {\n    loadingAuthUser: loadingAuthUser,\n    isLoading: isLoading,\n    authUser: authUser,\n    error: error,\n    setAuthUser: setAuthUser,\n    getAuthUser: getAuthUser,\n    userLogin: userLogin,\n    userSignup: userSignup,\n    userSignOut: userSignOut\n  };\n};\n\n_s3(useProvideAuth, \"5it/GFBnuEqcklxgiSG1f2VqaH4=\");\n\nvar isUnRestrictedRoute = function isUnRestrictedRoute(pathname) {\n  return pathname === '/signin' || pathname === '/signup' || pathname === '/forgot-password' || pathname === '/reset-password';\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"AuthProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbC91c2UtYXV0aC5qcz80YmZhIl0sIm5hbWVzIjpbImF1dGhDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwiYXV0aCIsInVzZVByb3ZpZGVBdXRoIiwidXNlQXV0aCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsImF1dGhVc2VyIiwic2V0QXV0aFVzZXIiLCJsb2FkaW5nQXV0aFVzZXIiLCJzZXRMb2FkaW5nQXV0aFVzZXIiLCJpc0xvYWRpbmciLCJzZXRMb2FkaW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsImZldGNoU3RhcnQiLCJmZXRjaFN1Y2Nlc3MiLCJmZXRjaEVycm9yIiwidXNlckxvZ2luIiwiZGF0YSIsImNhbGxiYWNrRnVuIiwiaHR0cENsaWVudCIsInBvc3QiLCJ0aGVuIiwicmVzdWx0IiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY29tbW9uIiwidG9rZW4iLCJhY2Nlc3NfdG9rZW4iLCJjb29raWVzIiwiQ29va2llcyIsInNldCIsImdldEF1dGhVc2VyIiwibWVzc2FnZSIsInVzZXJTaWdudXAiLCJ1c2VyU2lnbk91dCIsInJlbW92ZSIsIsOfIiwidXNlciIsInVzZUVmZmVjdCIsImdldCIsImlzVW5SZXN0cmljdGVkUm91dGUiLCJwYXRobmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxXQUFXLGdCQUFHQywyREFBYSxFQUFqQyxDLENBRUE7QUFDQTs7QUFFTyxTQUFTQyxZQUFULE9BQWtDO0FBQUE7O0FBQUEsTUFBWEMsUUFBVyxRQUFYQSxRQUFXO0FBQ3ZDLE1BQU1DLElBQUksR0FBR0MsY0FBYyxFQUEzQjtBQUNBLFNBQU8sTUFBQyxXQUFELENBQWEsUUFBYjtBQUFzQixTQUFLLEVBQUVELElBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBb0NELFFBQXBDLENBQVA7QUFDRCxD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QSxXQU5LO0FBT0xmLGFBQVMsRUFBVEEsU0FQSztBQVFMaUIsY0FBVSxFQUFWQSxVQVJLO0FBU0xDLGVBQVcsRUFBWEE7QUFUSyxHQUFQO0FBV0QsQ0EzSEQ7O0lBQU1qQyxjOztBQTZIQyxJQUFNdUMsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFDQyxRQUFELEVBQWM7QUFDL0MsU0FBT0EsUUFBUSxLQUFLLFNBQWIsSUFBMEJBLFFBQVEsS0FBSyxTQUF2QyxJQUFvREEsUUFBUSxLQUFLLGtCQUFqRSxJQUF1RkEsUUFBUSxLQUFLLGlCQUEzRztBQUNELENBRk0iLCJmaWxlIjoiLi91dGlsL3VzZS1hdXRoLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCwgY3JlYXRlQ29udGV4dH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7aHR0cENsaWVudH0gZnJvbSBcIi4vQXBpXCI7XHJcbmltcG9ydCB7Q29va2llc30gZnJvbSBcInJlYWN0LWNvb2tpZVwiO1xyXG5cclxuY29uc3QgYXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG4vLyBQcm92aWRlciBjb21wb25lbnQgdGhhdCB3cmFwcyBhcHAgYW5kIG1ha2VzIGF1dGggb2JqZWN0IC4uXHJcbi8vIC4uLiBhdmFpbGFibGUgdG8gYW55IGNoaWxkIGNvbXBvbmVudCB0aGF0IGNhbGxzIHVzZUF1dGgoKS5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBBdXRoUHJvdmlkZXIoe2NoaWxkcmVufSkge1xyXG4gIGNvbnN0IGF1dGggPSB1c2VQcm92aWRlQXV0aCgpO1xyXG4gIHJldHVybiA8YXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2F1dGh9PntjaGlsZHJlbn08L2F1dGhDb250ZXh0LlByb3ZpZGVyPjtcclxufVxyXG5cclxuLy8gSG9vayBmb3IgY2hpbGQgY29tcG9uZW50cyB0byBnZXQgdGhlIGF1dGggb2JqZWN0IC4uLlxyXG4vLyAuLi4gYW5kIHJlLXJlbmRlciB3aGVuIGl0IGNoYW5nZXMuXHJcblxyXG5leHBvcnQgY29uc3QgdXNlQXV0aCA9ICgpID0+IHtcclxuICByZXR1cm4gdXNlQ29udGV4dChhdXRoQ29udGV4dCk7XHJcbn07XHJcblxyXG5jb25zdCB1c2VQcm92aWRlQXV0aCA9ICgpID0+IHtcclxuICBjb25zdCBbYXV0aFVzZXIsIHNldEF1dGhVc2VyXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtsb2FkaW5nQXV0aFVzZXIsIHNldExvYWRpbmdBdXRoVXNlcl0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgY29uc3QgZmV0Y2hTdGFydCA9ICgpID0+IHtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBzZXRFcnJvcignJyk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBmZXRjaFN1Y2Nlc3MgPSAoKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIHNldEVycm9yKCcnKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGZldGNoRXJyb3IgPSAoZXJyb3IpID0+IHtcclxuICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgc2V0RXJyb3IoZXJyb3IpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgdXNlckxvZ2luID0gKGRhdGEsIGNhbGxiYWNrRnVuKSA9PiB7XHJcbiAgICBmZXRjaFN0YXJ0KCk7XHJcbiAgICBodHRwQ2xpZW50LnBvc3QoJ2FkbWluL2xvZ2luJywgZGF0YSlcclxuICAgICAgLnRoZW4oKHtkYXRhfSkgPT4ge1xyXG4gICAgICAgIGlmIChkYXRhLnJlc3VsdCkge1xyXG4gICAgICAgICAgZmV0Y2hTdWNjZXNzKCk7XHJcbiAgICAgICAgICBodHRwQ2xpZW50LmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydBdXRob3JpemF0aW9uJ10gPSAnQmVhcmVyICcgKyBkYXRhLnRva2VuLmFjY2Vzc190b2tlbjtcclxuICAgICAgICAgIGNvbnN0IGNvb2tpZXMgPSBuZXcgQ29va2llcygpO1xyXG4gICAgICAgICAgY29va2llcy5zZXQoJ3Rva2VuJywgZGF0YS50b2tlbi5hY2Nlc3NfdG9rZW4pO1xyXG4gICAgICAgICAgZ2V0QXV0aFVzZXIoKTtcclxuICAgICAgICAgIGlmIChjYWxsYmFja0Z1bikgY2FsbGJhY2tGdW4oKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZmV0Y2hFcnJvcihkYXRhLmVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICBmZXRjaEVycm9yKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCB1c2VyU2lnbnVwID0gKGRhdGEsIGNhbGxiYWNrRnVuKSA9PiB7XHJcbiAgICBmZXRjaFN0YXJ0KCk7XHJcbiAgICBodHRwQ2xpZW50LnBvc3QoJ2F1dGgvcmVnaXN0ZXInLCBkYXRhKVxyXG4gICAgICAudGhlbigoe2RhdGF9KSA9PiB7XHJcbiAgICAgICAgaWYgKGRhdGEucmVzdWx0KSB7XHJcbiAgICAgICAgICBmZXRjaFN1Y2Nlc3MoKTtcclxuICAgICAgICAgIGh0dHBDbGllbnQuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ0F1dGhvcml6YXRpb24nXSA9ICdCZWFyZXIgJyArIGRhdGEudG9rZW4uYWNjZXNzX3Rva2VuO1xyXG4gICAgICAgICAgY29uc3QgY29va2llcyA9IG5ldyBDb29raWVzKCk7XHJcbiAgICAgICAgICBjb29raWVzLnNldCgndG9rZW4nLCBkYXRhLnRva2VuLmFjY2Vzc190b2tlbik7XHJcbiAgICAgICAgICBpZiAoY2FsbGJhY2tGdW4pIGNhbGxiYWNrRnVuKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGZldGNoRXJyb3IoZGF0YS5lcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgZmV0Y2hFcnJvcihlcnJvci5tZXNzYWdlKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdXNlclNpZ25PdXQgPSAoY2FsbGJhY2tGdW4pID0+IHtcclxuICAgIGZldGNoU3RhcnQoKTtcclxuICAgICAgICBpZiAoZGF0YS5yZXN1bHQpIHtcclxuICAgICAgICAgIGZldGNoU3VjY2VzcygpO1xyXG4gICAgICAgICAgc2V0QXV0aFVzZXIoZmFsc2UpO1xyXG4gICAgICAgICAgaHR0cENsaWVudC5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQXV0aG9yaXphdGlvbiddID0gJyc7XHJcbiAgICAgICAgICBjb25zdCBjb29raWVzID0gbmV3IENvb2tpZXMoKTtcclxuICAgICAgICAgIGNvb2tpZXMucmVtb3ZlKCd0b2tlbicpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBmZXRjaEVycm9yKGRhdGEuZXJyb3IpO1xyXG4gICAgICAgIH3Dn1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldEF1dGhVc2VyID0gKCkgPT4ge1xyXG4gICAgZmV0Y2hTdGFydCgpO1xyXG4gICAgaHR0cENsaWVudC5wb3N0KFwiYXV0aC9tZVwiKS50aGVuKCh7ZGF0YX0pID0+IHtcclxuICAgICAgaWYgKGRhdGEudXNlcikge1xyXG4gICAgICAgIGZldGNoU3VjY2VzcygpO1xyXG4gICAgICAgIHNldEF1dGhVc2VyKGRhdGEudXNlcik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZmV0Y2hFcnJvcihkYXRhLmVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgIGh0dHBDbGllbnQuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ0F1dGhvcml6YXRpb24nXSA9ICcnO1xyXG4gICAgICBmZXRjaEVycm9yKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBTdWJzY3JpYmUgdG8gdXNlciBvbiBtb3VudFxyXG4gIC8vIEJlY2F1c2UgdGhpcyBzZXRzIHN0YXRlIGluIHRoZSBjYWxsYmFjayBpdCB3aWxsIGNhdXNlIGFueSAuLi5cclxuICAvLyAuLi4gY29tcG9uZW50IHRoYXQgdXRpbGl6ZXMgdGhpcyBob29rIHRvIHJlLXJlbmRlciB3aXRoIHRoZSAuLi5cclxuICAvLyAuLi4gbGF0ZXN0IGF1dGggb2JqZWN0LlxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBjb25zdCBjb29raWVzID0gbmV3IENvb2tpZXMoKTtcclxuICAgICAgY29uc3QgdG9rZW4gPSBjb29raWVzLmdldChcInRva2VuXCIpO1xyXG4gICAgICBodHRwQ2xpZW50LmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydBdXRob3JpemF0aW9uJ10gPSAnQmVhcmVyICcgKyB0b2tlbjtcclxuXHJcbiAgICAgIGh0dHBDbGllbnQucG9zdChcImF1dGgvbWVcIikudGhlbigoe2RhdGF9KSA9PiB7XHJcbiAgICAgICAgaWYgKGRhdGEudXNlcikge1xyXG4gICAgICAgICAgc2V0QXV0aFVzZXIoZGF0YS51c2VyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0TG9hZGluZ0F1dGhVc2VyKGZhbHNlKTtcclxuICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgY29va2llcy5yZW1vdmUoJ3Rva2VuJyk7XHJcbiAgICAgICAgaHR0cENsaWVudC5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQXV0aG9yaXphdGlvbiddID0gJyc7XHJcbiAgICAgICAgc2V0TG9hZGluZ0F1dGhVc2VyKGZhbHNlKTtcclxuICAgICAgfSk7XHJcbiAgICB9LCBbXVxyXG4gICk7XHJcblxyXG4gIC8vIFJldHVybiB0aGUgdXNlciBvYmplY3QgYW5kIGF1dGggbWV0aG9kc1xyXG4gIHJldHVybiB7XHJcbiAgICBsb2FkaW5nQXV0aFVzZXIsXHJcbiAgICBpc0xvYWRpbmcsXHJcbiAgICBhdXRoVXNlcixcclxuICAgIGVycm9yLFxyXG4gICAgc2V0QXV0aFVzZXIsXHJcbiAgICBnZXRBdXRoVXNlcixcclxuICAgIHVzZXJMb2dpbixcclxuICAgIHVzZXJTaWdudXAsXHJcbiAgICB1c2VyU2lnbk91dCxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaXNVblJlc3RyaWN0ZWRSb3V0ZSA9IChwYXRobmFtZSkgPT4ge1xyXG4gIHJldHVybiBwYXRobmFtZSA9PT0gJy9zaWduaW4nIHx8IHBhdGhuYW1lID09PSAnL3NpZ251cCcgfHwgcGF0aG5hbWUgPT09ICcvZm9yZ290LXBhc3N3b3JkJyB8fCBwYXRobmFtZSA9PT0gJy9yZXNldC1wYXNzd29yZCc7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./util/use-auth.js\n");

/***/ })

})