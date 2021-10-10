webpackHotUpdate_N_E("pages/admin",{

/***/ "./cms/config.js":
/*!***********************!*\
  !*** ./cms/config.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony default export */ __webpack_exports__["default"] = ({
  cms_manual_init: true,
  backend: {
    name: "git-gateway",
    repo: "Hachondeoro/ntsnt",
    branch: "master"
  },
  media_folder: "/public/images",
  public_folder: "/images",
  // publish_mode: "editorial_workflow",
  logo_url: "https://www.ntsnt.com.au/images/ntsnt%20logo.png",
  collections: [{
    label: "Residential Projects",
    name: "residentialprojects",
    folder: "public/residential",
    create: true,
    extension: "json",
    identifier_field: "title",
    fields: [{
      label: "Title",
      name: "title",
      widget: "string"
    }, {
      label: "Short Description",
      name: "shortDescription",
      widget: "text"
    }, {
      label: "Project Details",
      name: "projectDetails",
      widget: "markdown"
    }, {
      label: "Images",
      name: "image",
      widget: "list",
      summary: "{{fields.image}}",
      field: {
        label: "Image",
        name: "image",
        widget: "image"
      }
    }]
  }, {
    label: "Commercial Projects",
    name: "commercialprojects",
    folder: "public/commercial",
    create: true,
    extension: "json",
    identifier_field: "title",
    fields: [{
      label: "Title",
      name: "title",
      widget: "string"
    }, {
      label: "Short Description",
      name: "shortDescription",
      widget: "text"
    }, {
      label: "Project Details",
      name: "projectDetails",
      widget: "markdown"
    }, {
      label: "Images",
      name: "image",
      widget: "list",
      summary: "{{fields.image}}",
      field: {
        label: "Image",
        name: "image",
        widget: "image"
      }
    }]
  }, {
    label: "Home",
    name: "home",
    extension: "json",
    files: [{
      label: "Background Images",
      name: "backgrounds",
      file: "/public/content/backgrounds.json",
      fields: [{
        label: "Images",
        name: "images",
        widget: "list",
        summary: "{{fields.image}}",
        field: {
          label: "Image",
          name: "image",
          widget: "image"
        }
      }]
    }, {
      label: "Description one",
      name: "descriptionone",
      file: "/public/content/descriptionone.json",
      fields: [{
        name: "title",
        label: "Title",
        widget: "string"
      }, {
        name: "content",
        label: "Content",
        widget: "markdown"
      }]
    }, {
      label: "Description two",
      name: "descriptiontwo",
      file: "/public/content/descriptiontwo.json",
      fields: [{
        name: "title",
        label: "Title",
        widget: "string"
      }, {
        name: "content",
        label: "Content",
        widget: "markdown"
      }]
    }, {
      label: "Awards",
      name: "awards",
      file: "/public/content/awards.json",
      fields: [{
        label: "Images",
        name: "images",
        widget: "list",
        summary: "{{fields.image}}",
        fields: [{
          name: "title",
          label: "Title",
          widget: "string"
        }, {
          label: "Image",
          name: "image",
          widget: "image"
        }]
      }]
    }]
  }, {
    label: "About Us",
    name: "aboutus",
    extension: "json",
    files: [{
      label: "About Us",
      name: "aboutus",
      file: "/public/content/aboutus.json",
      fields: [{
        name: "image",
        label: "Image",
        widget: "image"
      }, {
        name: "content",
        label: "Content",
        widget: "markdown"
      }]
    }]
  }, {
    label: "Our Services",
    name: "ourservices",
    extension: "json",
    files: [{
      label: "Our Services",
      name: "ourservices",
      file: "/public/content/ourservices.json",
      fields: [{
        label: "Services",
        name: "services",
        widget: "list",
        fields: [{
          label: "Title",
          name: "title",
          widget: "string"
        }, {
          label: "Description",
          name: "description",
          widget: "text"
        }, {
          label: "Image",
          name: "image",
          widget: "image"
        }]
      }]
    }]
  }, {
    label: "Employment",
    name: "employment",
    extension: "json",
    files: [{
      label: "Introduction",
      name: "introduction",
      file: "/public/content/introduction.json",
      fields: [{
        name: "introduction",
        label: "Introduction",
        widget: "string"
      }, {
        name: "content",
        label: "Content",
        widget: "markdown"
      }]
    }, {
      label: "Features",
      name: "features",
      file: "/public/content/features.json",
      fields: [{
        label: "Features",
        name: "features",
        widget: "list",
        fields: [{
          label: "Title",
          name: "title",
          widget: "string"
        }, {
          label: "Description",
          name: "description",
          widget: "markdown"
        }, {
          label: "Image",
          name: "image",
          widget: "image"
        }]
      }]
    }, {
      label: "Positions",
      name: "positions",
      file: "/public/content/positions.json",
      fields: [{
        name: "positions",
        label: "Positions",
        widget: "string"
      }, {
        name: "positions_list",
        label: "Positions list",
        widget: "markdown"
      }, {
        name: "requirements",
        label: "Requirements",
        widget: "string"
      }, {
        name: "requirements_list",
        label: "Requirements list",
        widget: "markdown"
      }]
    }]
  }, {
    label: "Contact",
    name: "contact",
    extension: "json",
    files: [{
      label: "Contact Information",
      name: "contact",
      file: "/public/content/contact.json",
      fields: [{
        label: "Address",
        name: "address",
        widget: "string"
      }, {
        label: "Postal Address",
        name: "postaladdress",
        widget: "string"
      }, {
        label: "Phone",
        name: "phone",
        widget: "string"
      }, {
        label: "Email",
        name: "email",
        widget: "string"
      }]
    }]
  }]
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY21zL2NvbmZpZy5qcyJdLCJuYW1lcyI6WyJjbXNfbWFudWFsX2luaXQiLCJiYWNrZW5kIiwibmFtZSIsInJlcG8iLCJicmFuY2giLCJtZWRpYV9mb2xkZXIiLCJwdWJsaWNfZm9sZGVyIiwibG9nb191cmwiLCJjb2xsZWN0aW9ucyIsImxhYmVsIiwiZm9sZGVyIiwiY3JlYXRlIiwiZXh0ZW5zaW9uIiwiaWRlbnRpZmllcl9maWVsZCIsImZpZWxkcyIsIndpZGdldCIsInN1bW1hcnkiLCJmaWVsZCIsImZpbGVzIiwiZmlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUEsOENBQWU7QUFDYkEsaUJBQWUsRUFBRSxJQURKO0FBRWJDLFNBQU8sRUFBRTtBQUNQQyxRQUFJLEVBQUUsYUFEQztBQUVQQyxRQUFJLEVBQUUsbUJBRkM7QUFHUEMsVUFBTSxFQUFFO0FBSEQsR0FGSTtBQU9iQyxjQUFZLEVBQUUsZ0JBUEQ7QUFRYkMsZUFBYSxFQUFFLFNBUkY7QUFTYjtBQUNBQyxVQUFRLEVBQUUsa0RBVkc7QUFXYkMsYUFBVyxFQUFFLENBQ1g7QUFDRUMsU0FBSyxFQUFFLHNCQURUO0FBRUVQLFFBQUksRUFBRSxxQkFGUjtBQUdFUSxVQUFNLEVBQUUsb0JBSFY7QUFJRUMsVUFBTSxFQUFFLElBSlY7QUFLRUMsYUFBUyxFQUFFLE1BTGI7QUFNRUMsb0JBQWdCLEVBQUUsT0FOcEI7QUFPRUMsVUFBTSxFQUFFLENBQ047QUFBRUwsV0FBSyxFQUFFLE9BQVQ7QUFBa0JQLFVBQUksRUFBRSxPQUF4QjtBQUFpQ2EsWUFBTSxFQUFFO0FBQXpDLEtBRE0sRUFFTjtBQUFFTixXQUFLLEVBQUUsbUJBQVQ7QUFBOEJQLFVBQUksRUFBRSxrQkFBcEM7QUFBd0RhLFlBQU0sRUFBRTtBQUFoRSxLQUZNLEVBR047QUFBRU4sV0FBSyxFQUFFLGlCQUFUO0FBQTRCUCxVQUFJLEVBQUUsZ0JBQWxDO0FBQW9EYSxZQUFNLEVBQUU7QUFBNUQsS0FI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RSxPQUFUO0FBQWtCUCxZQUFJLEVBQUUsT0FBeEI7QUFBaUNhLGNBQU0sRUFBRTtBQUF6QyxPQUpNO0FBSlYsS0FESztBQUpULEdBckxXO0FBWEEsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZG1pbi45OGM4MDhjZTFhMWZmY2JiZDhlNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xyXG4gIGNtc19tYW51YWxfaW5pdDogdHJ1ZSxcclxuICBiYWNrZW5kOiB7XHJcbiAgICBuYW1lOiBcImdpdC1nYXRld2F5XCIsXHJcbiAgICByZXBvOiBcIkhhY2hvbmRlb3JvL250c250XCIsXHJcbiAgICBicmFuY2g6IFwibWFzdGVyXCIsXHJcbiAgfSxcclxuICBtZWRpYV9mb2xkZXI6IFwiL3B1YmxpYy9pbWFnZXNcIixcclxuICBwdWJsaWNfZm9sZGVyOiBcIi9pbWFnZXNcIixcclxuICAvLyBwdWJsaXNoX21vZGU6IFwiZWRpdG9yaWFsX3dvcmtmbG93XCIsXHJcbiAgbG9nb191cmw6IFwiaHR0cHM6Ly93d3cubnRzbnQuY29tLmF1L2ltYWdlcy9udHNudCUyMGxvZ28ucG5nXCIsXHJcbiAgY29sbGVjdGlvbnM6IFtcclxuICAgIHtcclxuICAgICAgbGFiZWw6IFwiUmVzaWRlbnRpYWwgUHJvamVjdHNcIixcclxuICAgICAgbmFtZTogXCJyZXNpZGVudGlhbHByb2plY3RzXCIsXHJcbiAgICAgIGZvbGRlcjogXCJwdWJsaWMvcmVzaWRlbnRpYWxcIixcclxuICAgICAgY3JlYXRlOiB0cnVlLFxyXG4gICAgICBleHRlbnNpb246IFwianNvblwiLFxyXG4gICAgICBpZGVudGlmaWVyX2ZpZWxkOiBcInRpdGxlXCIsXHJcbiAgICAgIGZpZWxkczogW1xyXG4gICAgICAgIHsgbGFiZWw6IFwiVGl0bGVcIiwgbmFtZTogXCJ0aXRsZVwiLCB3aWRnZXQ6IFwic3RyaW5nXCIgfSxcclxuICAgICAgICB7IGxhYmVsOiBcIlNob3J0IERlc2NyaXB0aW9uXCIsIG5hbWU6IFwic2hvcnREZXNjcmlwdGlvblwiLCB3aWRnZXQ6IFwidGV4dFwiIH0sXHJcbiAgICAgICAgeyBsYWJlbDogXCJQcm9qZWN0IERldGFpbHNcIiwgbmFtZTogXCJwcm9qZWN0RGV0YWlsc1wiLCB3aWRnZXQ6IFwibWFya2Rvd25cIiB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhYmVsOiBcIkltYWdlc1wiLFxyXG4gICAgICAgICAgbmFtZTogXCJpbWFnZVwiLFxyXG4gICAgICAgICAgd2lkZ2V0OiBcImxpc3RcIixcclxuICAgICAgICAgIHN1bW1hcnk6IFwie3tmaWVsZHMuaW1hZ2V9fVwiLFxyXG4gICAgICAgICAgZmllbGQ6IHsgbGFiZWw6IFwiSW1hZ2VcIiwgbmFtZTogXCJpbWFnZVwiLCB3aWRnZXQ6IFwiaW1hZ2VcIiB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBsYWJlbDogXCJDb21tZXJjaWFsIFByb2plY3RzXCIsXHJcbiAgICAgIG5hbWU6IFwiY29tbWVyY2lhbHByb2plY3RzXCIsXHJcbiAgICAgIGZvbGRlcjogXCJwdWJsaWMvY29tbWVyY2lhbFwiLFxyXG4gICAgICBjcmVhdGU6IHRydWUsXHJcbiAgICAgIGV4dGVuc2lvbjogXCJqc29uXCIsXHJcbiAgICAgIGlkZW50aWZpZXJfZmllbGQ6IFwidGl0bGVcIixcclxuICAgICAgZmllbGRzOiBbXHJcbiAgICAgICAgeyBsYWJlbDogXCJUaXRsZVwiLCBuYW1lOiBcInRpdGxlXCIsIHdpZGdldDogXCJzdHJpbmdcIiB9LFxyXG4gICAgICAgIHsgbGFiZWw6IFwiU2hvcnQgRGVzY3JpcHRpb25cIiwgbmFtZTogXCJzaG9ydERlc2NyaXB0aW9uXCIsIHdpZGdldDogXCJ0ZXh0XCIgfSxcclxuICAgICAgICB7IGxhYmVsOiBcIlByb2plY3QgRGV0YWlsc1wiLCBuYW1lOiBcInByb2plY3REZXRhaWxzXCIsIHdpZGdldDogXCJtYXJrZG93blwiIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6IFwiSW1hZ2VzXCIsXHJcbiAgICAgICAgICBuYW1lOiBcImltYWdlXCIsXHJcbiAgICAgICAgICB3aWRnZXQ6IFwibGlzdFwiLFxyXG4gICAgICAgICAgc3VtbWFyeTogXCJ7e2ZpZWxkcy5pbWFnZX19XCIsXHJcbiAgICAgICAgICBmaWVsZDogeyBsYWJlbDogXCJJbWFnZVwiLCBuYW1lOiBcImltYWdlXCIsIHdpZGdldDogXCJpbWFnZVwiIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGxhYmVsOiBcIkhvbWVcIixcclxuICAgICAgbmFtZTogXCJob21lXCIsXHJcbiAgICAgIGV4dGVuc2lvbjogXCJqc29uXCIsXHJcbiAgICAgIGZpbGVzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6IFwiQmFja2dyb3VuZCBJbWFnZXNcIixcclxuICAgICAgICAgIG5hbWU6IFwiYmFja2dyb3VuZHNcIixcclxuICAgICAgICAgIGZpbGU6IFwiL3B1YmxpYy9jb250ZW50L2JhY2tncm91bmRzLmpzb25cIixcclxuICAgICAgICAgIGZpZWxkczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbGFiZWw6IFwiSW1hZ2VzXCIsXHJcbiAgICAgICAgICAgICAgbmFtZTogXCJpbWFnZXNcIixcclxuICAgICAgICAgICAgICB3aWRnZXQ6IFwibGlzdFwiLFxyXG4gICAgICAgICAgICAgIHN1bW1hcnk6IFwie3tmaWVsZHMuaW1hZ2V9fVwiLFxyXG4gICAgICAgICAgICAgIGZpZWxkOiB7IGxhYmVsOiBcIkltYWdlXCIsIG5hbWU6IFwiaW1hZ2VcIiwgd2lkZ2V0OiBcImltYWdlXCIgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogXCJEZXNjcmlwdGlvbiBvbmVcIixcclxuICAgICAgICAgIG5hbWU6IFwiZGVzY3JpcHRpb25vbmVcIixcclxuICAgICAgICAgIGZpbGU6IFwiL3B1YmxpYy9jb250ZW50L2Rlc2NyaXB0aW9ub25lLmpzb25cIixcclxuICAgICAgICAgIGZpZWxkczogW1xyXG4gICAgICAgICAgICB7IG5hbWU6IFwidGl0bGVcIiwgbGFiZWw6IFwiVGl0bGVcIiwgd2lkZ2V0OiBcInN0cmluZ1wiIH0sXHJcbiAgICAgICAgICAgIHsgbmFtZTogXCJjb250ZW50XCIsIGxhYmVsOiBcIkNvbnRlbnRcIiwgd2lkZ2V0OiBcIm1hcmtkb3duXCIgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogXCJEZXNjcmlwdGlvbiB0d29cIixcclxuICAgICAgICAgIG5hbWU6IFwiZGVzY3JpcHRpb250d29cIixcclxuICAgICAgICAgIGZpbGU6IFwiL3B1YmxpYy9jb250ZW50L2Rlc2NyaXB0aW9udHdvLmpzb25cIixcclxuICAgICAgICAgIGZpZWxkczogW1xyXG4gICAgICAgICAgICB7IG5hbWU6IFwidGl0bGVcIiwgbGFiZWw6IFwiVGl0bGVcIiwgd2lkZ2V0OiBcInN0cmluZ1wiIH0sXHJcbiAgICAgICAgICAgIHsgbmFtZTogXCJjb250ZW50XCIsIGxhYmVsOiBcIkNvbnRlbnRcIiwgd2lkZ2V0OiBcIm1hcmtkb3duXCIgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogXCJBd2FyZHNcIixcclxuICAgICAgICAgIG5hbWU6IFwiYXdhcmRzXCIsXHJcbiAgICAgICAgICBmaWxlOiBcIi9wdWJsaWMvY29udGVudC9hd2FyZHMuanNvblwiLFxyXG4gICAgICAgICAgZmllbGRzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBsYWJlbDogXCJJbWFnZXNcIixcclxuICAgICAgICAgICAgICBuYW1lOiBcImltYWdlc1wiLFxyXG4gICAgICAgICAgICAgIHdpZGdldDogXCJsaXN0XCIsXHJcbiAgICAgICAgICAgICAgc3VtbWFyeTogXCJ7e2ZpZWxkcy5pbWFnZX19XCIsXHJcbiAgICAgICAgICAgICAgZmllbGRzOiBbXHJcbiAgICAgICAgICAgICAgICB7IG5hbWU6IFwidGl0bGVcIiwgbGFiZWw6IFwiVGl0bGVcIiwgd2lkZ2V0OiBcInN0cmluZ1wiIH0sXHJcbiAgICAgICAgICAgICAgICB7IGxhYmVsOiBcIkltYWdlXCIsIG5hbWU6IFwiaW1hZ2VcIiwgd2lkZ2V0OiBcImltYWdlXCIgfSxcclxuICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbGFiZWw6IFwiQWJvdXQgVXNcIixcclxuICAgICAgbmFtZTogXCJhYm91dHVzXCIsXHJcbiAgICAgIGV4dGVuc2lvbjogXCJqc29uXCIsXHJcbiAgICAgIGZpbGVzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6IFwiQWJvdXQgVXNcIixcclxuICAgICAgICAgIG5hbWU6IFwiYWJvdXR1c1wiLFxyXG4gICAgICAgICAgZmlsZTogXCIvcHVibGljL2NvbnRlbnQvYWJvdXR1cy5qc29uXCIsXHJcbiAgICAgICAgICBmaWVsZHM6IFtcclxuICAgICAgICAgICAgeyBuYW1lOiBcImltYWdlXCIsIGxhYmVsOiBcIkltYWdlXCIsIHdpZGdldDogXCJpbWFnZVwiIH0sXHJcbiAgICAgICAgICAgIHsgbmFtZTogXCJjb250ZW50XCIsIGxhYmVsOiBcIkNvbnRlbnRcIiwgd2lkZ2V0OiBcIm1hcmtkb3duXCIgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGxhYmVsOiBcIk91ciBTZXJ2aWNlc1wiLFxyXG4gICAgICBuYW1lOiBcIm91cnNlcnZpY2VzXCIsXHJcbiAgICAgIGV4dGVuc2lvbjogXCJqc29uXCIsXHJcbiAgICAgIGZpbGVzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6IFwiT3VyIFNlcnZpY2VzXCIsXHJcbiAgICAgICAgICBuYW1lOiBcIm91cnNlcnZpY2VzXCIsXHJcbiAgICAgICAgICBmaWxlOiBcIi9wdWJsaWMvY29udGVudC9vdXJzZXJ2aWNlcy5qc29uXCIsXHJcbiAgICAgICAgICBmaWVsZHM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGxhYmVsOiBcIlNlcnZpY2VzXCIsXHJcbiAgICAgICAgICAgICAgbmFtZTogXCJzZXJ2aWNlc1wiLFxyXG4gICAgICAgICAgICAgIHdpZGdldDogXCJsaXN0XCIsXHJcbiAgICAgICAgICAgICAgZmllbGRzOiBbXHJcbiAgICAgICAgICAgICAgICB7IGxhYmVsOiBcIlRpdGxlXCIsIG5hbWU6IFwidGl0bGVcIiwgd2lkZ2V0OiBcInN0cmluZ1wiIH0sXHJcbiAgICAgICAgICAgICAgICB7IGxhYmVsOiBcIkRlc2NyaXB0aW9uXCIsIG5hbWU6IFwiZGVzY3JpcHRpb25cIiwgd2lkZ2V0OiBcInRleHRcIiB9LFxyXG4gICAgICAgICAgICAgICAgeyBsYWJlbDogXCJJbWFnZVwiLCBuYW1lOiBcImltYWdlXCIsIHdpZGdldDogXCJpbWFnZVwiIH0sXHJcbiAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGxhYmVsOiBcIkVtcGxveW1lbnRcIixcclxuICAgICAgbmFtZTogXCJlbXBsb3ltZW50XCIsXHJcbiAgICAgIGV4dGVuc2lvbjogXCJqc29uXCIsXHJcbiAgICAgIGZpbGVzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6IFwiSW50cm9kdWN0aW9uXCIsXHJcbiAgICAgICAgICBuYW1lOiBcImludHJvZHVjdGlvblwiLFxyXG4gICAgICAgICAgZmlsZTogXCIvcHVibGljL2NvbnRlbnQvaW50cm9kdWN0aW9uLmpzb25cIixcclxuICAgICAgICAgIGZpZWxkczogW1xyXG4gICAgICAgICAgICB7IG5hbWU6IFwiaW50cm9kdWN0aW9uXCIsIGxhYmVsOiBcIkludHJvZHVjdGlvblwiLCB3aWRnZXQ6IFwic3RyaW5nXCIgfSxcclxuICAgICAgICAgICAgeyBuYW1lOiBcImNvbnRlbnRcIiwgbGFiZWw6IFwiQ29udGVudFwiLCB3aWRnZXQ6IFwibWFya2Rvd25cIiB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhYmVsOiBcIkZlYXR1cmVzXCIsXHJcbiAgICAgICAgICBuYW1lOiBcImZlYXR1cmVzXCIsXHJcbiAgICAgICAgICBmaWxlOiBcIi9wdWJsaWMvY29udGVudC9mZWF0dXJlcy5qc29uXCIsXHJcbiAgICAgICAgICBmaWVsZHM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGxhYmVsOiBcIkZlYXR1cmVzXCIsXHJcbiAgICAgICAgICAgICAgbmFtZTogXCJmZWF0dXJlc1wiLFxyXG4gICAgICAgICAgICAgIHdpZGdldDogXCJsaXN0XCIsXHJcbiAgICAgICAgICAgICAgZmllbGRzOiBbXHJcbiAgICAgICAgICAgICAgICB7IGxhYmVsOiBcIlRpdGxlXCIsIG5hbWU6IFwidGl0bGVcIiwgd2lkZ2V0OiBcInN0cmluZ1wiIH0sXHJcbiAgICAgICAgICAgICAgICB7IGxhYmVsOiBcIkRlc2NyaXB0aW9uXCIsIG5hbWU6IFwiZGVzY3JpcHRpb25cIiwgd2lkZ2V0OiBcIm1hcmtkb3duXCIgfSxcclxuICAgICAgICAgICAgICAgIHsgbGFiZWw6IFwiSW1hZ2VcIiwgbmFtZTogXCJpbWFnZVwiLCB3aWRnZXQ6IFwiaW1hZ2VcIiB9LFxyXG4gICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6IFwiUG9zaXRpb25zXCIsXHJcbiAgICAgICAgICBuYW1lOiBcInBvc2l0aW9uc1wiLFxyXG4gICAgICAgICAgZmlsZTogXCIvcHVibGljL2NvbnRlbnQvcG9zaXRpb25zLmpzb25cIixcclxuICAgICAgICAgIGZpZWxkczogW1xyXG4gICAgICAgICAgICB7IG5hbWU6IFwicG9zaXRpb25zXCIsIGxhYmVsOiBcIlBvc2l0aW9uc1wiLCB3aWRnZXQ6IFwic3RyaW5nXCIgfSxcclxuICAgICAgICAgICAgeyBuYW1lOiBcInBvc2l0aW9uc19saXN0XCIsIGxhYmVsOiBcIlBvc2l0aW9ucyBsaXN0XCIsIHdpZGdldDogXCJtYXJrZG93blwiIH0sXHJcbiAgICAgICAgICAgIHsgbmFtZTogXCJyZXF1aXJlbWVudHNcIiwgbGFiZWw6IFwiUmVxdWlyZW1lbnRzXCIsIHdpZGdldDogXCJzdHJpbmdcIiB9LFxyXG4gICAgICAgICAgICB7IG5hbWU6IFwicmVxdWlyZW1lbnRzX2xpc3RcIiwgbGFiZWw6IFwiUmVxdWlyZW1lbnRzIGxpc3RcIiwgd2lkZ2V0OiBcIm1hcmtkb3duXCIgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGxhYmVsOiBcIkNvbnRhY3RcIixcclxuICAgICAgbmFtZTogXCJjb250YWN0XCIsXHJcbiAgICAgIGV4dGVuc2lvbjogXCJqc29uXCIsXHJcbiAgICAgIGZpbGVzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6IFwiQ29udGFjdCBJbmZvcm1hdGlvblwiLFxyXG4gICAgICAgICAgbmFtZTogXCJjb250YWN0XCIsXHJcbiAgICAgICAgICBmaWxlOiBcIi9wdWJsaWMvY29udGVudC9jb250YWN0Lmpzb25cIixcclxuICAgICAgICAgIGZpZWxkczogW1xyXG4gICAgICAgICAgICB7IGxhYmVsOiBcIkFkZHJlc3NcIiwgbmFtZTogXCJhZGRyZXNzXCIsIHdpZGdldDogXCJzdHJpbmdcIiB9LFxyXG4gICAgICAgICAgICB7IGxhYmVsOiBcIlBvc3RhbCBBZGRyZXNzXCIsIG5hbWU6IFwicG9zdGFsYWRkcmVzc1wiLCB3aWRnZXQ6IFwic3RyaW5nXCIgfSxcclxuICAgICAgICAgICAgeyBsYWJlbDogXCJQaG9uZVwiLCBuYW1lOiBcInBob25lXCIsIHdpZGdldDogXCJzdHJpbmdcIiB9LFxyXG4gICAgICAgICAgICB7IGxhYmVsOiBcIkVtYWlsXCIsIG5hbWU6IFwiZW1haWxcIiwgd2lkZ2V0OiBcInN0cmluZ1wiIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gIF0sXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=