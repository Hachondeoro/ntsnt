webpackHotUpdate_N_E("pages/admin",{

/***/ "./node_modules/@auth0/nextjs-auth0/dist/frontend/index.js":
false,

/***/ "./node_modules/@auth0/nextjs-auth0/dist/frontend/use-config.js":
false,

/***/ "./node_modules/@auth0/nextjs-auth0/dist/frontend/use-user.js":
false,

/***/ "./node_modules/@auth0/nextjs-auth0/dist/frontend/with-page-auth-required.js":
false,

/***/ "./node_modules/@auth0/nextjs-auth0/dist/index.browser.js":
false,

/***/ "./node_modules/@auth0/nextjs-auth0/node_modules/tslib/tslib.es6.js":
false,

/***/ "./node_modules/process/browser.js":
false,

/***/ "./pages/admin.js":
/*!************************!*\
  !*** ./pages/admin.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cms_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cms/config */ "./cms/config.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\frank\\Documents\\React\\ntsnt\\pages\\admin.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



var CMS = next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(_c = function _c() {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! netlify-cms-app */ "./node_modules/netlify-cms-app/dist/netlify-cms-app.js", 7)).then(function (cms) {
    cms.init({
      config: cms_config__WEBPACK_IMPORTED_MODULE_1__["default"]
    });
  });
}, {
  ssr: false,
  loading: function loading() {
    return __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 32
      }
    }, "Loading...");
  },
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! netlify-cms-app */ "./node_modules/netlify-cms-app/dist/netlify-cms-app.js")];
    },
    modules: ["netlify-cms-app"]
  }
});
_c2 = CMS;

var AdminPage = function AdminPage() {
  _s();

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! netlify-cms-app */ "./node_modules/netlify-cms-app/dist/netlify-cms-app.js", 7)).then(function (x) {
      return x["default"];
    }).then(function (CMS) {
      CMS.registerPreviewStyle("/netlifycms.css");
    });
  }, []);
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, __jsx(CMS, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }), ";");
};

_s(AdminPage, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c3 = AdminPage;
/* harmony default export */ __webpack_exports__["default"] = (AdminPage);

var _c, _c2, _c3;

$RefreshReg$(_c, "CMS$dynamic");
$RefreshReg$(_c2, "CMS");
$RefreshReg$(_c3, "AdminPage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4uanMiXSwibmFtZXMiOlsiQ01TIiwiZHluYW1pYyIsInRoZW4iLCJjbXMiLCJpbml0IiwiY29uZmlnIiwic3NyIiwibG9hZGluZyIsIkFkbWluUGFnZSIsInVzZUVmZmVjdCIsIngiLCJyZWdpc3RlclByZXZpZXdTdHlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsR0FBRyxHQUFHQyxtREFBTyxNQUNqQjtBQUFBLFNBQ0Usb0tBQTBCQyxJQUExQixDQUErQixVQUFDQyxHQUFELEVBQVM7QUFDdENBLE9BQUcsQ0FBQ0MsSUFBSixDQUFTO0FBQUVDLFlBQU0sRUFBTkEsa0RBQU1BO0FBQVIsS0FBVDtBQUNELEdBRkQsQ0FERjtBQUFBLENBRGlCLEVBS2pCO0FBQUVDLEtBQUcsRUFBRSxLQUFQO0FBQWNDLFNBQU8sRUFBRTtBQUFBLFdBQU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBTjtBQUFBLEdBQXZCO0FBQUE7QUFBQTtBQUFBLGtDQUhTLCtFQUdUO0FBQUE7QUFBQSxjQUhTLGlCQUdUO0FBQUE7QUFBQSxDQUxpQixDQUFuQjtNQUFNUCxHOztBQVFOLElBQU1RLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFDdEJDLHlEQUFTLENBQUMsWUFBTTtBQUNkLHdLQUNHUCxJQURILENBQ1EsVUFBQ1EsQ0FBRDtBQUFBLGFBQU9BLENBQUMsV0FBUjtBQUFBLEtBRFIsRUFFR1IsSUFGSCxDQUVRLFVBQUNGLEdBQUQsRUFBUztBQUNiQSxTQUFHLENBQUNXLG9CQUFKLENBQXlCLGlCQUF6QjtBQUNELEtBSkg7QUFLRCxHQU5RLEVBTU4sRUFOTSxDQUFUO0FBT0EsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxHQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixNQURGO0FBS0QsQ0FiRDs7R0FBTUgsUzs7TUFBQUEsUztBQWVTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZG1pbi42NmUyZTQzMmM1NzE1ZDYwNjQ0ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xyXG5pbXBvcnQgY29uZmlnIGZyb20gXCJjbXMvY29uZmlnXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IENNUyA9IGR5bmFtaWMoXHJcbiAgKCkgPT5cclxuICAgIGltcG9ydChcIm5ldGxpZnktY21zLWFwcFwiKS50aGVuKChjbXMpID0+IHtcclxuICAgICAgY21zLmluaXQoeyBjb25maWcgfSk7XHJcbiAgICB9KSxcclxuICB7IHNzcjogZmFsc2UsIGxvYWRpbmc6ICgpID0+IDxwPkxvYWRpbmcuLi48L3A+IH0sXHJcbik7XHJcblxyXG5jb25zdCBBZG1pblBhZ2UgPSAoKSA9PiB7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGltcG9ydChcIm5ldGxpZnktY21zLWFwcFwiKVxyXG4gICAgICAudGhlbigoeCkgPT4geC5kZWZhdWx0KVxyXG4gICAgICAudGhlbigoQ01TKSA9PiB7XHJcbiAgICAgICAgQ01TLnJlZ2lzdGVyUHJldmlld1N0eWxlKFwiL25ldGxpZnljbXMuY3NzXCIpO1xyXG4gICAgICB9KTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxDTVMgLz47XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRtaW5QYWdlO1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==