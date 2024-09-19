(() => {
var exports = {};
exports.id = 335;
exports.ids = [335];
exports.modules = {

/***/ 7912:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Contact_container__u4Z1Q",
	"title": "Contact_title__iGKSD",
	"form": "Contact_form__5n_db",
	"formGroup": "Contact_formGroup__6mfd_",
	"label": "Contact_label__OevUX",
	"input": "Contact_input__fWz9j",
	"textarea": "Contact_textarea__8QEdX",
	"submitButton": "Contact_submitButton___amgW"
};


/***/ }),

/***/ 9144:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Contact),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Contact_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7912);
/* harmony import */ var _styles_Contact_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Contact_module_css__WEBPACK_IMPORTED_MODULE_1__);


function Contact() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_Contact_module_css__WEBPACK_IMPORTED_MODULE_1___default().container),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: (_styles_Contact_module_css__WEBPACK_IMPORTED_MODULE_1___default().title),
                children: "Contact Us"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                className: (_styles_Contact_module_css__WEBPACK_IMPORTED_MODULE_1___default().form),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Contact_module_css__WEBPACK_IMPORTED_MODULE_1___default().formGroup),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                htmlFor: "name",
                                className: (_styles_Contact_module_css__WEBPACK_IMPORTED_MODULE_1___default().label),
                                children: "Name"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                id: "name",
                                name: "name",
                                className: (_styles_Contact_module_css__WEBPACK_IMPORTED_MODULE_1___default().input),
                                required: true
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Contact_module_css__WEBPACK_IMPORTED_MODULE_1___default().formGroup),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                htmlFor: "email",
                                className: (_styles_Contact_module_css__WEBPACK_IMPORTED_MODULE_1___default().label),
                                children: "Email"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "email",
                                id: "email",
                                name: "email",
                                className: (_styles_Contact_module_css__WEBPACK_IMPORTED_MODULE_1___default().input),
                                required: true
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Contact_module_css__WEBPACK_IMPORTED_MODULE_1___default().formGroup),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                htmlFor: "message",
                                className: (_styles_Contact_module_css__WEBPACK_IMPORTED_MODULE_1___default().label),
                                children: "Message"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                id: "message",
                                name: "message",
                                className: (_styles_Contact_module_css__WEBPACK_IMPORTED_MODULE_1___default().textarea),
                                required: true
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "submit",
                        className: (_styles_Contact_module_css__WEBPACK_IMPORTED_MODULE_1___default().submitButton),
                        children: "Send Message"
                    })
                ]
            })
        ]
    });
}
async function getStaticProps() {
    return {
        props: {
            heroImage: "https://imagedelivery.net/OHVtjf602XdHccCnziCADA/564989bf-964c-45c3-2ec6-deeeb9dd2800/public",
            showHero: true
        }
    };
}


/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9144));
module.exports = __webpack_exports__;

})();