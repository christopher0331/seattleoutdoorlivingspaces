exports.id = 60;
exports.ids = [60];
exports.modules = {

/***/ 3180:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Forms_container__q3spf",
	"title": "Forms_title__pY7h_",
	"tabContainer": "Forms_tabContainer__s0Vja",
	"tab": "Forms_tab__IuiAm",
	"activeTab": "Forms_activeTab__CQhth",
	"formContainer": "Forms_formContainer__zYsss",
	"form": "Forms_form__wjR9_",
	"formGroup": "Forms_formGroup__XFdrC",
	"projOverviewDiv": "Forms_projOverviewDiv__vct27",
	"formField": "Forms_formField__an0eN",
	"pofLabel": "Forms_pofLabel__Gh1Nl",
	"radioGroup": "Forms_radioGroup__R8Hs_",
	"postsSection": "Forms_postsSection___6lXX",
	"tempFenceSection": "Forms_tempFenceSection__HJIzJ",
	"picketSizeSection": "Forms_picketSizeSection__xgL0t",
	"orientationImages": "Forms_orientationImages__du_Ts",
	"imageWrapper": "Forms_imageWrapper__OvkR9",
	"installationSection": "Forms_installationSection__nIPRs",
	"imageContainer": "Forms_imageContainer__5JTon",
	"installationOptions": "Forms_installationOptions__jhzJE",
	"description": "Forms_description__XIiPD",
	"addressSection": "Forms_addressSection__T2pRA",
	"cityZipWrapper": "Forms_cityZipWrapper__xEde4",
	"commentsSection": "Forms_commentsSection__TbsSV",
	"formTextarea": "Forms_formTextarea__8mvu8",
	"pofButton": "Forms_pofButton__ecr1L",
	"popup": "Forms_popup___5_om",
	"popupContent": "Forms_popupContent__5TN2e",
	"close": "Forms_close__xSO4U",
	"reviewsSection": "Forms_reviewsSection___Jrr3",
	"pageContainer": "Forms_pageContainer__Jlz7K",
	"mainContent": "Forms_mainContent__RTjEC",
	"sidebar": "Forms_sidebar__bT7Vf",
	"sidebarTitle": "Forms_sidebarTitle__81bo8",
	"sidebarList": "Forms_sidebarList__TlIRu",
	"sidebarSection": "Forms_sidebarSection__zUejC",
	"formBackground": "Forms_formBackground__U5Z0J",
	"contactForm": "Forms_contactForm__vQn_e",
	"formParagraph": "Forms_formParagraph__gtu3w",
	"contactDetails": "Forms_contactDetails__eGIDN",
	"serviceDetails": "Forms_serviceDetails__lPC_n",
	"row": "Forms_row__G_yzk",
	"inputBox": "Forms_inputBox__f0984",
	"inputField": "Forms_inputField__8WMX8",
	"smsConsent": "Forms_smsConsent__I9iJV",
	"submitButtonBox": "Forms_submitButtonBox__g0cwU",
	"submitButton": "Forms_submitButton__J4JsH",
	"error": "Forms_error__8Lhbe",
	"successMessage": "Forms_successMessage__3_QpI"
};


/***/ }),

/***/ 7060:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ContactForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8655);
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(emailjs_com__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3180);
/* harmony import */ var _styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function ContactForm() {
    const { 0: formData , 1: setFormData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        firstName: "",
        lastName: "",
        companyName: "",
        email: "",
        phone: "",
        street1: "",
        street2: "",
        city: "",
        state: "",
        zipCode: "",
        fenceType: "",
        installationType: "",
        linearFeet: "",
        projectDetails: "",
        completionTimeframe: "",
        referralSource: "",
        otherProjectDescription: ""
    });
    const { 0: errors , 1: setErrors  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const { 0: isSubmitted , 1: setIsSubmitted  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleChange = (e)=>{
        const { name , value  } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const validate = ()=>{
        let tempErrors = {};
        if (!formData.firstName) tempErrors.firstName = "First Name is required";
        if (!formData.lastName) tempErrors.lastName = "Last Name is required";
        if (!formData.email) tempErrors.email = "Email is required";
        if (!formData.phone) tempErrors.phone = "Phone is required";
        return tempErrors;
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            setIsSubmitted(true);
            // Handle form submission logic here
            emailjs_com__WEBPACK_IMPORTED_MODULE_3___default().sendForm("service_p6clffh", "template_jidzwzw", e.target, "user_wPYeoaoebNsoGt3GhzLVu").then((result)=>{
                console.log("Email sent:", result.text);
                alert("Thank you for your request, we will be in touch soon!!");
            }, (error)=>{
                console.log("Email error:", error.text);
                alert("Failed to send email, please try again.");
            });
        } else {
            setErrors(validationErrors);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: isSubmitted ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
            className: (_styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_4___default().successMessage),
            initial: {
                opacity: 0,
                y: -20
            },
            animate: {
                opacity: 1,
                y: 0
            },
            transition: {
                duration: 0.5
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    children: "Thank you for reaching out!"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    children: "We will get back to you shortly."
                })
            ]
        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
            className: (_styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_4___default().form),
            onSubmit: handleSubmit,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_4___default().formParagraph),
                    children: "Elevate your surroundings with our quality workmanship, creating a perfect blend of functionality and aesthetics. From sturdy fences that stand the test of time to breathtaking outdoor living spaces, we turn your vision into a reality!"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_4___default().contactDetails),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_4___default().row),
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                    className: (_styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_4___default().inputBox),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            className: (_styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_4___default().inputField),
                                            placeholder: "First Name",
                                            type: "text",
                                            name: "firstName",
                                            value: formData.firstName,
                                            onChange: handleChange
                                        }),
                                        errors.firstName && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: (_styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_4___default().error),
                                            children: errors.firstName
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                    className: (_styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_4___default().inputBox),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            className: (_styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_4___default().inputField),
                                            placeholder: "Last Name",
                                            type: "text",
                                            name: "lastName",
                                            value: formData.lastName,
                                            onChange: handleChange
                                        }),
                                        errors.lastName && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: (_styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_4___default().error),
                                            children: errors.lastName
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_4___default().row),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                className: (_styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_4___default().inputBox),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    className: (_styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_4___default().inputField),
                                    placeholder: "Company Name (if applicable)",
                                    type: "text",
                                    name: "companyName",
                                    value: formData.companyName,
                                    onChange: handleChange
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_4___default().row),
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                className: (_styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_4___default().inputBox),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        className: (_styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_4___default().inputField),
                                        placeholder: "Email",
                                        type: "email",
                                        name: "email",
                                        value: formData.email,
                                        onChange: handleChange
                                    }),
                                    errors.email && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: (_styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_4___default().error),
                                        children: errors.email
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_4___default().row),
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                className: (_styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_4___default().inputBox),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        className: (_styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_4___default().inputField),
                                        placeholder: "Phone Number",
                                        type: "tel",
                                        name: "phone",
                                        value: formData.phone,
                                        onChange: handleChange
                                    }),
                                    errors.phone && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: (_styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_4___default().error),
                                        children: errors.phone
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: (_styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_4___default().smsConsent),
                            children: "By providing your phone number, you agree to receive text messages (SMS) from GreenView Solutions. You can unsubscribe at any time by replying STOP. Message and data rates may apply. Message frequency varies."
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_4___default().row),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                className: (_styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_4___default().inputBox),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    className: (_styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_4___default().inputField),
                                    placeholder: "Street 1",
                                    type: "text",
                                    name: "street1",
                                    value: formData.street1,
                                    onChange: handleChange
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_4___default().row),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                className: (_styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_4___default().inputBox),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    className: (_styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_4___default().inputField),
                                    placeholder: "Street 2",
                                    type: "text",
                                    name: "street2",
                                    value: formData.street2,
                                    onChange: handleChange
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_4___default().row),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    className: (_styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_4___default().inputBox),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        className: (_styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_4___default().inputField),
                                        placeholder: "City",
                                        type: "text",
                                        name: "city",
                                        value: formData.city,
                                        onChange: handleChange
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    className: (_styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_4___default().inputBox),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        className: (_styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_4___default().inputField),
                                        placeholder: "State",
                                        type: "text",
                                        name: "state",
                                        value: formData.state,
                                        onChange: handleChange
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    className: (_styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_4___default().inputBox),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        className: (_styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_4___default().inputField),
                                        placeholder: "ZIP Code",
                                        type: "text",
                                        name: "zipCode",
                                        value: formData.zipCode,
                                        onChange: handleChange
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_4___default().serviceDetails),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_4___default().row),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                className: (_styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_4___default().inputBox),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                    className: (_styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_4___default().inputField),
                                    name: "fenceType",
                                    value: formData.fenceType,
                                    onChange: handleChange,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "",
                                            children: "What type of fencing are you looking for?"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "wood",
                                            children: "Wood"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "vinyl",
                                            children: "Vinyl"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "chainLink",
                                            children: "Chain Link"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "other",
                                            children: "Other"
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_4___default().row),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                className: (_styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_4___default().inputBox),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                    className: (_styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_4___default().inputField),
                                    placeholder: "Is this a new installation or replacement?",
                                    name: "installationType",
                                    value: formData.installationType,
                                    onChange: handleChange
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_4___default().row),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                className: (_styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_4___default().inputBox),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    className: (_styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_4___default().inputField),
                                    placeholder: "Approximate total linear feet of the project",
                                    type: "text",
                                    name: "linearFeet",
                                    value: formData.linearFeet,
                                    onChange: handleChange
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_4___default().row),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                className: (_styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_4___default().inputBox),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                    className: (_styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_4___default().inputField),
                                    placeholder: "Additional project details (e.g., type of fence, wood type, height, number of gates)",
                                    name: "projectDetails",
                                    value: formData.projectDetails,
                                    onChange: handleChange
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_4___default().row),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                className: (_styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_4___default().inputBox),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    className: (_styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_4___default().inputField),
                                    placeholder: "Desired timeframe for project completion",
                                    type: "text",
                                    name: "completionTimeframe",
                                    value: formData.completionTimeframe,
                                    onChange: handleChange
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_4___default().row),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                className: (_styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_4___default().inputBox),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                    className: (_styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_4___default().inputField),
                                    name: "referralSource",
                                    value: formData.referralSource,
                                    onChange: handleChange,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "",
                                            children: "How did you hear about GreenView Solutions?"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "google",
                                            children: "Google"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "socialMedia",
                                            children: "Social Media"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "yardSign",
                                            children: "Yard Sign"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "referral",
                                            children: "Referral"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "googleMaps",
                                            children: "Google Maps"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "magazine",
                                            children: "The Home Mag"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "magazine",
                                            children: "Quality Connections"
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_4___default().row),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                className: (_styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_4___default().inputBox),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                    className: (_styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_4___default().inputField),
                                    placeholder: "Other Project Description",
                                    name: "otherProjectDescription",
                                    value: formData.otherProjectDescription,
                                    onChange: handleChange
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_4___default().submitButtonBox),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        className: (_styles_Forms_module_css__WEBPACK_IMPORTED_MODULE_4___default().submitButton),
                        type: "submit",
                        value: "Submit"
                    })
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;