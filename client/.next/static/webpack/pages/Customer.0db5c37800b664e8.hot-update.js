"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Customer",{

/***/ "./Components/Sidebar.js":
/*!*******************************!*\
  !*** ./Components/Sidebar.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SidebarTile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SidebarTile */ \"./Components/SidebarTile.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst Sidebar = ()=>{\n    _s();\n    const [url, setUrl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [class_predicted, setClass_predicted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const getClass = ()=>{\n        // var url = 'http://127.0.0.1:5000/predict_home_price';\n        const data = {\n            \"url\": \"https://img.freepik.com/free-vector/realistic-receipt-template_23-2147938550.jpg?w=360\"\n        };\n        fetch(\"http://127.0.0.1:5000/get_class\", {\n            method: \"POST\",\n            body: JSON.stringify(data),\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        }, {\n            mode: \"cors\"\n        }).then((res)=>res.json()).then((data)=>{\n            console.log(data);\n            setClass_predicted(data.predicted_class);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" w-72 h-screen sticky top-0\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" border-b py-5 ml-4 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \" text-4xl font-bold\",\n                        children: \"verifyMe\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Sunpriya\\\\Desktop\\\\verifyme\\\\client\\\\Components\\\\Sidebar.js\",\n                        lineNumber: 38,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-gray-400 py-2\",\n                        children: \"Customer Dashboard\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Sunpriya\\\\Desktop\\\\verifyme\\\\client\\\\Components\\\\Sidebar.js\",\n                        lineNumber: 39,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Sunpriya\\\\Desktop\\\\verifyme\\\\client\\\\Components\\\\Sidebar.js\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-4 space-y-14 border-r-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"space-y-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SidebarTile__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            title: \"Address Proof\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Sunpriya\\\\Desktop\\\\verifyme\\\\client\\\\Components\\\\Sidebar.js\",\n                            lineNumber: 43,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SidebarTile__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            title: \"Bank Statement\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Sunpriya\\\\Desktop\\\\verifyme\\\\client\\\\Components\\\\Sidebar.js\",\n                            lineNumber: 44,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SidebarTile__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            title: \"Business Proof\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Sunpriya\\\\Desktop\\\\verifyme\\\\client\\\\Components\\\\Sidebar.js\",\n                            lineNumber: 45,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SidebarTile__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            title: \"Employement Proof\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Sunpriya\\\\Desktop\\\\verifyme\\\\client\\\\Components\\\\Sidebar.js\",\n                            lineNumber: 46,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SidebarTile__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            title: \"Fund Raising\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Sunpriya\\\\Desktop\\\\verifyme\\\\client\\\\Components\\\\Sidebar.js\",\n                            lineNumber: 47,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SidebarTile__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            title: \"Identity Proof\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Sunpriya\\\\Desktop\\\\verifyme\\\\client\\\\Components\\\\Sidebar.js\",\n                            lineNumber: 48,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SidebarTile__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            title: \"Invoice\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Sunpriya\\\\Desktop\\\\verifyme\\\\client\\\\Components\\\\Sidebar.js\",\n                            lineNumber: 49,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SidebarTile__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            title: \"Personal Finance Statement\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Sunpriya\\\\Desktop\\\\verifyme\\\\client\\\\Components\\\\Sidebar.js\",\n                            lineNumber: 50,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SidebarTile__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            title: \"Power of attorney\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Sunpriya\\\\Desktop\\\\verifyme\\\\client\\\\Components\\\\Sidebar.js\",\n                            lineNumber: 51,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SidebarTile__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            title: \"Receipt\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Sunpriya\\\\Desktop\\\\verifyme\\\\client\\\\Components\\\\Sidebar.js\",\n                            lineNumber: 52,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SidebarTile__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            title: \"Salary Slip\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Sunpriya\\\\Desktop\\\\verifyme\\\\client\\\\Components\\\\Sidebar.js\",\n                            lineNumber: 53,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SidebarTile__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            title: \"Tax Return\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Sunpriya\\\\Desktop\\\\verifyme\\\\client\\\\Components\\\\Sidebar.js\",\n                            lineNumber: 54,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            class: \"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full \",\n                            children: \"Upload Photo\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Sunpriya\\\\Desktop\\\\verifyme\\\\client\\\\Components\\\\Sidebar.js\",\n                            lineNumber: 55,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            class: \"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full \",\n                            children: \"Upload PDF\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Sunpriya\\\\Desktop\\\\verifyme\\\\client\\\\Components\\\\Sidebar.js\",\n                            lineNumber: 58,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            id: \"formContainer\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                action: \"http://127.0.0.1:5000/get_class\",\n                                method: \"POST\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        id: \"imageUploadInput\",\n                                        name: \"imageUploadInput\",\n                                        type: \"file\",\n                                        accept: \"image/*\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Sunpriya\\\\Desktop\\\\verifyme\\\\client\\\\Components\\\\Sidebar.js\",\n                                        lineNumber: 63,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        id: \"submitButton\",\n                                        type: \"submit\",\n                                        children: \"Submit\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Sunpriya\\\\Desktop\\\\verifyme\\\\client\\\\Components\\\\Sidebar.js\",\n                                        lineNumber: 64,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Sunpriya\\\\Desktop\\\\verifyme\\\\client\\\\Components\\\\Sidebar.js\",\n                                lineNumber: 62,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Sunpriya\\\\Desktop\\\\verifyme\\\\client\\\\Components\\\\Sidebar.js\",\n                            lineNumber: 61,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            id: \"imagePreviewContainer\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                onClick: ()=>getClass(),\n                                children: [\n                                    \"Class - \",\n                                    class_predicted\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Sunpriya\\\\Desktop\\\\verifyme\\\\client\\\\Components\\\\Sidebar.js\",\n                                lineNumber: 69,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Sunpriya\\\\Desktop\\\\verifyme\\\\client\\\\Components\\\\Sidebar.js\",\n                            lineNumber: 68,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Sunpriya\\\\Desktop\\\\verifyme\\\\client\\\\Components\\\\Sidebar.js\",\n                    lineNumber: 42,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sunpriya\\\\Desktop\\\\verifyme\\\\client\\\\Components\\\\Sidebar.js\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Sunpriya\\\\Desktop\\\\verifyme\\\\client\\\\Components\\\\Sidebar.js\",\n        lineNumber: 36,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Sidebar, \"i+2+Wmo7A7hneKDbB1pjWIjbN8Y=\");\n_c = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL1NpZGViYXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQXVDO0FBQ29CO0FBQ0o7QUFDTTtBQUNJO0FBQ1o7QUFDRjtBQUNKO0FBQ0Y7QUFDTDtBQUV4QyxNQUFNVyxVQUFVLElBQU07O0lBQ2xCLE1BQU0sQ0FBQ0MsS0FBS0MsT0FBTyxHQUFHWiwrQ0FBUUEsQ0FBQztJQUMvQixNQUFLLENBQUNhLGlCQUFpQkMsbUJBQW1CLEdBQUdkLCtDQUFRQSxDQUFDO0lBQ3RELE1BQU1lLFdBQVcsSUFDakI7UUFDSSx3REFBd0Q7UUFDeEQsTUFBTUMsT0FBTztZQUNiLE9BQU07UUFDTjtRQUNBQyxNQUFNLG1DQUFtQztZQUN6Q0MsUUFBUTtZQUNSQyxNQUFNQyxLQUFLQyxTQUFTLENBQUNMO1lBQ3JCTSxTQUFTO2dCQUNMLGdCQUFnQjtZQUNwQjtRQUNBLEdBQUk7WUFBQ0MsTUFBTTtRQUFNLEdBQ2hCQyxJQUFJLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsSUFBSSxJQUN0QkYsSUFBSSxDQUFDLENBQUNSLE9BQVM7WUFDaEJXLFFBQVFDLEdBQUcsQ0FBQ1o7WUFDWkYsbUJBQW1CRSxLQUFLYSxlQUFlO1FBQ3ZDO0lBRUo7SUFDQSxxQkFDSSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0M7d0JBQUVELFdBQVU7a0NBQXNCOzs7Ozs7a0NBQ25DLDhEQUFDRTt3QkFBR0YsV0FBVTtrQ0FBcUI7Ozs7Ozs7Ozs7OzswQkFFdkMsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNYLDRFQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ1gsOERBQUN0QixvREFBV0E7NEJBQUN5QixPQUFNOzs7Ozs7c0NBQ25CLDhEQUFDekIsb0RBQVdBOzRCQUFDeUIsT0FBTTs7Ozs7O3NDQUNuQiw4REFBQ3pCLG9EQUFXQTs0QkFBQ3lCLE9BQU07Ozs7OztzQ0FDbkIsOERBQUN6QixvREFBV0E7NEJBQUN5QixPQUFNOzs7Ozs7c0NBQ25CLDhEQUFDekIsb0RBQVdBOzRCQUFDeUIsT0FBTTs7Ozs7O3NDQUNuQiw4REFBQ3pCLG9EQUFXQTs0QkFBQ3lCLE9BQU07Ozs7OztzQ0FDbkIsOERBQUN6QixvREFBV0E7NEJBQUN5QixPQUFNOzs7Ozs7c0NBQ25CLDhEQUFDekIsb0RBQVdBOzRCQUFDeUIsT0FBTTs7Ozs7O3NDQUNuQiw4REFBQ3pCLG9EQUFXQTs0QkFBQ3lCLE9BQU07Ozs7OztzQ0FDbkIsOERBQUN6QixvREFBV0E7NEJBQUN5QixPQUFNOzs7Ozs7c0NBQ25CLDhEQUFDekIsb0RBQVdBOzRCQUFDeUIsT0FBTTs7Ozs7O3NDQUNuQiw4REFBQ3pCLG9EQUFXQTs0QkFBQ3lCLE9BQU07Ozs7OztzQ0FDbkIsOERBQUNDOzRCQUFPQyxPQUFNO3NDQUF3RTs7Ozs7O3NDQUd0Riw4REFBQ0Q7NEJBQU9DLE9BQU07c0NBQXdFOzs7Ozs7c0NBR3RGLDhEQUFDTjs0QkFBSU8sSUFBRztzQ0FDSiw0RUFBQ0M7Z0NBQUtDLFFBQU87Z0NBQWtDckIsUUFBTzs7a0RBQ2xELDhEQUFDc0I7d0NBQU1ILElBQUc7d0NBQW1CSSxNQUFLO3dDQUFtQkMsTUFBSzt3Q0FBT0MsUUFBTzs7Ozs7O2tEQUN4RSw4REFBQ1I7d0NBQU9FLElBQUc7d0NBQWVLLE1BQUs7a0RBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUlqRCw4REFBQ1o7NEJBQUlPLElBQUc7c0NBQ0osNEVBQUNPO2dDQUFNQyxTQUFTLElBQUs5Qjs7b0NBQWE7b0NBQ3JCRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRckM7R0FsRU1IO0tBQUFBO0FBb0VOLCtEQUFlQSxPQUFPQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL0NvbXBvbmVudHMvU2lkZWJhci5qcz9iZmI4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgRG9udXRMYXJnZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0RvbnV0TGFyZ2UnO1xyXG5pbXBvcnQgQ2xlYXJBbGxJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DbGVhckFsbCc7XHJcbmltcG9ydCBBcnJvd1Vwd2FyZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93VXB3YXJkJztcclxuaW1wb3J0IEFycm93RG93bndhcmRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BcnJvd0Rvd253YXJkJztcclxuaW1wb3J0IFN5bmNBbHRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TeW5jQWx0JztcclxuaW1wb3J0IExheWVyc0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0xheWVycyc7XHJcbmltcG9ydCBMb2NrSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTG9jayc7XHJcbmltcG9ydCBFY29JY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9FY28nO1xyXG5pbXBvcnQgU2lkZWJhclRpbGUgZnJvbSAnLi9TaWRlYmFyVGlsZSc7XHJcblxyXG5jb25zdCBTaWRlYmFyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3VybCwgc2V0VXJsXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3RbY2xhc3NfcHJlZGljdGVkLCBzZXRDbGFzc19wcmVkaWN0ZWRdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBnZXRDbGFzcyA9ICgpID0+IFxyXG4gICAge1xyXG4gICAgICAgIC8vIHZhciB1cmwgPSAnaHR0cDovLzEyNy4wLjAuMTo1MDAwL3ByZWRpY3RfaG9tZV9wcmljZSc7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICAndXJsJzonaHR0cHM6Ly9pbWcuZnJlZXBpay5jb20vZnJlZS12ZWN0b3IvcmVhbGlzdGljLXJlY2VpcHQtdGVtcGxhdGVfMjMtMjE0NzkzODU1MC5qcGc/dz0zNjAnXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZldGNoKCdodHRwOi8vMTI3LjAuMC4xOjUwMDAvZ2V0X2NsYXNzJywge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsIFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgICB9XHJcbiAgICAgICAgfSAsIHttb2RlOiAnY29ycyd9KVxyXG4gICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICAgIHNldENsYXNzX3ByZWRpY3RlZChkYXRhLnByZWRpY3RlZF9jbGFzcylcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHctNzIgaC1zY3JlZW4gc3RpY2t5IHRvcC0wXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGJvcmRlci1iICBweS01IG1sLTQgIFwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiIHRleHQtNHhsIGZvbnQtYm9sZFwiPnZlcmlmeU1lPC9wPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtZ3JheS00MDAgcHktMlwiPkN1c3RvbWVyIERhc2hib2FyZDwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCBzcGFjZS15LTE0IGJvcmRlci1yLTJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00XCIgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTaWRlYmFyVGlsZSB0aXRsZT1cIkFkZHJlc3MgUHJvb2ZcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTaWRlYmFyVGlsZSB0aXRsZT1cIkJhbmsgU3RhdGVtZW50XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8U2lkZWJhclRpbGUgdGl0bGU9XCJCdXNpbmVzcyBQcm9vZlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNpZGViYXJUaWxlIHRpdGxlPVwiRW1wbG95ZW1lbnQgUHJvb2ZcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTaWRlYmFyVGlsZSB0aXRsZT1cIkZ1bmQgUmFpc2luZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNpZGViYXJUaWxlIHRpdGxlPVwiSWRlbnRpdHkgUHJvb2ZcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTaWRlYmFyVGlsZSB0aXRsZT1cIkludm9pY2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTaWRlYmFyVGlsZSB0aXRsZT1cIlBlcnNvbmFsIEZpbmFuY2UgU3RhdGVtZW50XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8U2lkZWJhclRpbGUgdGl0bGU9XCJQb3dlciBvZiBhdHRvcm5leVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNpZGViYXJUaWxlIHRpdGxlPVwiUmVjZWlwdFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNpZGViYXJUaWxlIHRpdGxlPVwiU2FsYXJ5IFNsaXBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTaWRlYmFyVGlsZSB0aXRsZT1cIlRheCBSZXR1cm5cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJiZy1ibHVlLTUwMCBob3ZlcjpiZy1ibHVlLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgIHctZnVsbCBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVXBsb2FkIFBob3RvXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCAgdy1mdWxsIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBVcGxvYWQgUERGXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImZvcm1Db250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPSdodHRwOi8vMTI3LjAuMC4xOjUwMDAvZ2V0X2NsYXNzJyBtZXRob2Q9J1BPU1QnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiaW1hZ2VVcGxvYWRJbnB1dFwiIG5hbWU9XCJpbWFnZVVwbG9hZElucHV0XCIgdHlwZT1cImZpbGVcIiBhY2NlcHQ9XCJpbWFnZS8qXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJzdWJtaXRCdXR0b25cIiB0eXBlPVwic3VibWl0XCIgPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJpbWFnZVByZXZpZXdDb250YWluZXJcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBvbkNsaWNrPXsoKT0+KGdldENsYXNzKCkpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENsYXNzIC0ge2NsYXNzX3ByZWRpY3RlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGViYXIiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkRvbnV0TGFyZ2VJY29uIiwiQ2xlYXJBbGxJY29uIiwiQXJyb3dVcHdhcmRJY29uIiwiQXJyb3dEb3dud2FyZEljb24iLCJTeW5jQWx0SWNvbiIsIkxheWVyc0ljb24iLCJMb2NrSWNvbiIsIkVjb0ljb24iLCJTaWRlYmFyVGlsZSIsIlNpZGViYXIiLCJ1cmwiLCJzZXRVcmwiLCJjbGFzc19wcmVkaWN0ZWQiLCJzZXRDbGFzc19wcmVkaWN0ZWQiLCJnZXRDbGFzcyIsImRhdGEiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsIm1vZGUiLCJ0aGVuIiwicmVzIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJwcmVkaWN0ZWRfY2xhc3MiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwiaDEiLCJ0aXRsZSIsImJ1dHRvbiIsImNsYXNzIiwiaWQiLCJmb3JtIiwiYWN0aW9uIiwiaW5wdXQiLCJuYW1lIiwidHlwZSIsImFjY2VwdCIsImxhYmVsIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Components/Sidebar.js\n"));

/***/ })

});