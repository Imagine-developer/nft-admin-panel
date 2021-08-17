module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		10: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../" + ({}[chunkId]||chunkId) + "." + {"19":"60a4a6e8c7ea6863ac68","24":"2aab3a40cadc28484fed"}[chunkId] + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/T1H":
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "3d09":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const CircularProgress = ({
  className
}) => __jsx("div", {
  className: `loader ${className}`
}, __jsx("img", {
  src: "/images/loader.svg",
  alt: "loader",
  style: {
    height: 60
  }
}));

/* harmony default export */ __webpack_exports__["a"] = (CircularProgress);
CircularProgress.defaultProps = {
  className: ''
};

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "7QRU":
/***/ (function(module, exports) {

module.exports = require("antd/lib/input/TextArea");

/***/ }),

/***/ "BUsa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_asyncComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("WK/C");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



const Contact = Object(_util_asyncComponent__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(() => __webpack_require__.e(/* import() */ 24).then(__webpack_require__.bind(null, "wTKg")));

const ContactPage = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, null, __jsx("title", null, "Users")), __jsx(Contact, null));
};

/* harmony default export */ __webpack_exports__["default"] = (ContactPage);

/***/ }),

/***/ "DB6d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_asyncComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("WK/C");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const SignIn = Object(_util_asyncComponent__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(() => __webpack_require__.e(/* import() */ 19).then(__webpack_require__.bind(null, "MBQT")));

const SignInPage = () => __jsx(SignIn, null);

/* harmony default export */ __webpack_exports__["default"] = (SignInPage);

/***/ }),

/***/ "Exp3":
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _signin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("DB6d");
/* harmony import */ var _util_use_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("S/r9");
/* harmony import */ var _banners__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("BUsa");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const homePage = () => {
  const {
    authUser
  } = Object(_util_use_auth__WEBPACK_IMPORTED_MODULE_2__[/* useAuth */ "c"])();
  return authUser ? __jsx(_banners__WEBPACK_IMPORTED_MODULE_3__["default"], null) : __jsx(_signin__WEBPACK_IMPORTED_MODULE_1__["default"], null);
};

/* harmony default export */ __webpack_exports__["default"] = (homePage);

/***/ }),

/***/ "S/r9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ AuthProvider; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ useAuth; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ isUnRestrictedRoute; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./util/Api.js

const httpClient = external_axios_default.a.create({
  baseURL: `https://desolate-inlet-76011.herokuapp.com/`,
  //YOUR_API_URL HERE
  headers: {
    'Content-Type': 'application/json'
  }
});
// EXTERNAL MODULE: external "react-cookie"
var external_react_cookie_ = __webpack_require__("wEaX");

// CONCATENATED MODULE: ./util/use-auth.js
var __jsx = external_react_default.a.createElement;



const authContext = /*#__PURE__*/Object(external_react_["createContext"])(); // Provider component that wraps app and makes auth object ..
// ... available to any child component that calls useAuth().

function AuthProvider({
  children
}) {
  const auth = useProvideAuth();
  return __jsx(authContext.Provider, {
    value: auth
  }, children);
} // Hook for child components to get the auth object ...
// ... and re-render when it changes.

const useAuth = () => {
  return Object(external_react_["useContext"])(authContext);
};

const useProvideAuth = () => {
  const {
    0: authUser,
    1: setAuthUser
  } = Object(external_react_["useState"])(null);
  const {
    0: loadingAuthUser,
    1: setLoadingAuthUser
  } = Object(external_react_["useState"])(true);
  const {
    0: isLoading,
    1: setLoading
  } = Object(external_react_["useState"])(false);
  const {
    0: error,
    1: setError
  } = Object(external_react_["useState"])('');

  const fetchStart = () => {
    setLoading(true);
    setError('');
  };

  const fetchSuccess = () => {
    setLoading(false);
    setError('');
  };

  const fetchError = error => {
    setLoading(false);
    setError(error);
  };

  const userLogin = (data, callbackFun) => {
    fetchStart();
    httpClient.post('admin/login', data).then(({
      data
    }) => {
      if (data.result) {
        fetchSuccess();
        httpClient.defaults.headers.common['Authorization'] = 'Bearer ' + data.token.access_token;
        const cookies = new external_react_cookie_["Cookies"]();
        cookies.set('token', data.token.access_token);
        getAuthUser();
        if (callbackFun) callbackFun();
      } else {
        fetchError(data.error);
      }
    }).catch(function (error) {
      fetchError(error.message);
    });
  };

  const userSignup = (data, callbackFun) => {
    fetchStart();
    httpClient.post('auth/register', data).then(({
      data
    }) => {
      if (data.result) {
        fetchSuccess();
        httpClient.defaults.headers.common['Authorization'] = 'Bearer ' + data.token.access_token;
        const cookies = new external_react_cookie_["Cookies"]();
        cookies.set('token', data.token.access_token);
        if (callbackFun) callbackFun();
      } else {
        fetchError(data.error);
      }
    }).catch(function (error) {
      fetchError(error.message);
    });
  };

  const userSignOut = callbackFun => {
    fetchStart();
    fetchSuccess();
    setAuthUser(false);
    httpClient.defaults.headers.common['Authorization'] = '';
    const cookies = new external_react_cookie_["Cookies"]();
    cookies.remove('token');
  };

  const getAuthUser = () => {
    fetchStart();
    httpClient.post("auth/me").then(({
      data
    }) => {
      if (data.user) {
        fetchSuccess();
        setAuthUser(data.user);
      } else {
        fetchError(data.error);
      }
    }).catch(function (error) {
      httpClient.defaults.headers.common['Authorization'] = '';
      fetchError(error.message);
    });
  }; // Subscribe to user on mount
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.


  Object(external_react_["useEffect"])(() => {
    const cookies = new external_react_cookie_["Cookies"]();
    const token = cookies.get("token");
    httpClient.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    httpClient.post("auth/me").then(({
      data
    }) => {
      if (data.user) {
        setAuthUser(data.user);
      }

      setLoadingAuthUser(false);
    }).catch(function (error) {
      cookies.remove('token');
      httpClient.defaults.headers.common['Authorization'] = '';
      setLoadingAuthUser(false);
    });
  }, []); // Return the user object and auth methods

  return {
    loadingAuthUser,
    isLoading,
    authUser,
    error,
    setAuthUser,
    getAuthUser,
    userLogin,
    userSignup,
    userSignOut
  };
};

const isUnRestrictedRoute = pathname => {
  return pathname === '/signin' || pathname === '/signup' || pathname === '/forgot-password' || pathname === '/reset-password';
};

/***/ }),

/***/ "WK/C":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return asyncComponent; });
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("/T1H");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_components_CircularProgress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("3d09");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



function asyncComponent(importComponent) {
  return next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(importComponent, {
    loading: () => __jsx(_app_components_CircularProgress__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null)
  });
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "k004":
/***/ (function(module, exports) {

module.exports = require("react-intl");

/***/ }),

/***/ "qC9r":
/***/ (function(module, exports) {

module.exports = require("react-custom-scrollbars");

/***/ }),

/***/ "wEaX":
/***/ (function(module, exports) {

module.exports = require("react-cookie");

/***/ }),

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });