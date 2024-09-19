(() => {
var exports = {};
exports.id = 228;
exports.ids = [228];
exports.modules = {

/***/ 3180:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Forms_container__q3spf",
	"title": "Forms_title__pY7h_",
	"formSelector": "Forms_formSelector__H798M",
	"formButton": "Forms_formButton__xaDTY",
	"active": "Forms_active__1_tDb",
	"formContainer": "Forms_formContainer__zYsss",
	"motionForm": "Forms_motionForm__c76eI",
	"form": "Forms_form__wjR9_",
	"formGroup": "Forms_formGroup__XFdrC",
	"label": "Forms_label__7_ZhB",
	"input": "Forms_input__QI5Uy",
	"textarea": "Forms_textarea__2ydS8",
	"submitButton": "Forms_submitButton__J4JsH",
	"errorText": "Forms_errorText__IPN0V",
	"errorInput": "Forms_errorInput__C_VCz",
	"successMessage": "Forms_successMessage__3_QpI"
};


/***/ }),

/***/ 1154:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Forms),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3180);
/* harmony import */ var _styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_2__);



function Forms() {
    const handleSubmit = (e)=>{
        e.preventDefault();
        // Handle form submission logic here
        console.log("Form submitted");
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Contact Us - Seattle Outdoor Living"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "Get in touch with Seattle Outdoor Living for your fencing needs."
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: (_styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_2___default().title),
                children: "Contact Us"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                className: (_styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_2___default().form),
                onSubmit: handleSubmit,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_2___default().formGroup),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                htmlFor: "name",
                                className: (_styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_2___default().label),
                                children: "Name"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                id: "name",
                                name: "name",
                                className: (_styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_2___default().input),
                                required: true
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_2___default().formGroup),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                htmlFor: "email",
                                className: (_styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_2___default().label),
                                children: "Email"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "email",
                                id: "email",
                                name: "email",
                                className: (_styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_2___default().input),
                                required: true
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_2___default().formGroup),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                htmlFor: "message",
                                className: (_styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_2___default().label),
                                children: "Message"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                id: "message",
                                name: "message",
                                className: (_styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_2___default().textarea),
                                required: true
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "submit",
                        className: (_styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_2___default().submitButton),
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

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

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
var __webpack_exports__ = (__webpack_exec__(1154));
module.exports = __webpack_exports__;

})();