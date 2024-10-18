exports.id = 545;
exports.ids = [545];
exports.modules = {

/***/ 9134:
/***/ ((module) => {

// Exports
module.exports = {
	"ctaSection": "CTASection_ctaSection__8_Y8_",
	"ctaButton": "CTASection_ctaButton__hbVDU"
};


/***/ }),

/***/ 2250:
/***/ ((module) => {

// Exports
module.exports = {
	"showcase": "FenceShapeShowcase_showcase__6GEXD",
	"title": "FenceShapeShowcase_title__qMy3h",
	"subtitle": "FenceShapeShowcase_subtitle__IdDwU",
	"content": "FenceShapeShowcase_content__uZ_Pf",
	"shapeSelector": "FenceShapeShowcase_shapeSelector__GinVx",
	"shapeButton": "FenceShapeShowcase_shapeButton__Yji45",
	"active": "FenceShapeShowcase_active__KyEx1",
	"shapeInfo": "FenceShapeShowcase_shapeInfo___1Q51",
	"imageWrapper": "FenceShapeShowcase_imageWrapper__zH1ja",
	"description": "FenceShapeShowcase_description__AbKHw"
};


/***/ }),

/***/ 3330:
/***/ ((module) => {

// Exports
module.exports = {
	"card": "FenceTypeCard_card__1uopV",
	"imageWrapper": "FenceTypeCard_imageWrapper__Wu0hS",
	"content": "FenceTypeCard_content__7gGA2"
};


/***/ }),

/***/ 6771:
/***/ ((module) => {

// Exports
module.exports = {
	"testimonialSection": "TestimonialSection_testimonialSection__lRhvi",
	"testimonialGrid": "TestimonialSection_testimonialGrid__F_2qo",
	"testimonial": "TestimonialSection_testimonial__880dT"
};


/***/ }),

/***/ 268:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CTASection)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_CTASection_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9134);
/* harmony import */ var _styles_CTASection_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_CTASection_module_css__WEBPACK_IMPORTED_MODULE_2__);



function CTASection({ title , description , buttonText , buttonLink  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: (_styles_CTASection_module_css__WEBPACK_IMPORTED_MODULE_2___default().ctaSection),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                children: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: description
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                href: buttonLink,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    className: (_styles_CTASection_module_css__WEBPACK_IMPORTED_MODULE_2___default().ctaButton),
                    children: buttonText
                })
            })
        ]
    });
}


/***/ }),

/***/ 7635:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ FenceShapeShowcase)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6197);
/* harmony import */ var _styles_FenceShapeShowcase_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2250);
/* harmony import */ var _styles_FenceShapeShowcase_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_FenceShapeShowcase_module_css__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_3__]);
framer_motion__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const fenceShapes = [
    {
        name: "Convex",
        description: "Arching outward, convex fences create a gentle curve that adds visual interest and a welcoming feel to your property.",
        image: "https://imagedelivery.net/OHVtjf602XdHccCnziCADA/d78f7b95-4814-4835-c316-8d45c8491d00/public"
    },
    {
        name: "Concave",
        description: "Curving inward, concave fences offer a unique aesthetic that can make your yard feel more spacious and open.",
        image: "https://imagedelivery.net/OHVtjf602XdHccCnziCADA/8ff879bb-5e62-4194-fcd6-dfb03b97b100/public"
    },
    {
        name: "Lattice",
        description: "Featuring an open, crisscross pattern, lattice fences provide partial privacy while allowing light and air to flow through.",
        image: "https://imagedelivery.net/OHVtjf602XdHccCnziCADA/25e050d6-db6c-45db-93e5-fc61669ba900/public"
    }
];
function FenceShapeShowcase() {
    const { 0: activeShape , 1: setActiveShape  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(fenceShapes[0]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: (_styles_FenceShapeShowcase_module_css__WEBPACK_IMPORTED_MODULE_4___default().showcase),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: (_styles_FenceShapeShowcase_module_css__WEBPACK_IMPORTED_MODULE_4___default().title),
                children: "Explore Fence Shapes"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: (_styles_FenceShapeShowcase_module_css__WEBPACK_IMPORTED_MODULE_4___default().subtitle),
                children: "Discover how different fence shapes can enhance your outdoor space"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_FenceShapeShowcase_module_css__WEBPACK_IMPORTED_MODULE_4___default().content),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_FenceShapeShowcase_module_css__WEBPACK_IMPORTED_MODULE_4___default().shapeSelector),
                        children: fenceShapes.map((shape)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: `${(_styles_FenceShapeShowcase_module_css__WEBPACK_IMPORTED_MODULE_4___default().shapeButton)} ${activeShape.name === shape.name ? (_styles_FenceShapeShowcase_module_css__WEBPACK_IMPORTED_MODULE_4___default().active) : ""}`,
                                onClick: ()=>setActiveShape(shape),
                                children: shape.name
                            }, shape.name))
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_FenceShapeShowcase_module_css__WEBPACK_IMPORTED_MODULE_4___default().shapeInfo),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_FenceShapeShowcase_module_css__WEBPACK_IMPORTED_MODULE_4___default().imageWrapper),
                                children: fenceShapes.map((shape)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                                        initial: {
                                            opacity: 0
                                        },
                                        animate: {
                                            opacity: activeShape.name === shape.name ? 1 : 0
                                        },
                                        transition: {
                                            duration: 0.3
                                        },
                                        style: {
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            bottom: 0
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            src: shape.image,
                                            alt: shape.name,
                                            layout: "fill",
                                            objectFit: "contain",
                                            sizes: "(max-width: 1024px) 100vw, 50vw"
                                        })
                                    }, shape.name))
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                                className: (_styles_FenceShapeShowcase_module_css__WEBPACK_IMPORTED_MODULE_4___default().description),
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.3
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        children: activeShape.name
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: activeShape.description
                                    })
                                ]
                            }, activeShape.name)
                        ]
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4788:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ FenceTypeCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_FenceTypeCard_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3330);
/* harmony import */ var _styles_FenceTypeCard_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_FenceTypeCard_module_css__WEBPACK_IMPORTED_MODULE_2__);



function FenceTypeCard({ title , description , image , benefits =[] , onSelect  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_FenceTypeCard_module_css__WEBPACK_IMPORTED_MODULE_2___default().card),
        onClick: onSelect,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_FenceTypeCard_module_css__WEBPACK_IMPORTED_MODULE_2___default().imageWrapper),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                    src: image,
                    alt: title,
                    layout: "fill",
                    objectFit: "cover"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_FenceTypeCard_module_css__WEBPACK_IMPORTED_MODULE_2___default().content),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        children: title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: description
                    }),
                    benefits.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                        children: benefits.map((benefit, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: benefit
                            }, index))
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 5417:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);


function Hero({ title , subtitle , backgroundImage  }) {
    return /*#__PURE__*/ _jsx("div", {
        className: styles.hero,
        style: {
            backgroundImage: `url(${backgroundImage})`
        },
        children: /*#__PURE__*/ _jsxs("div", {
            className: styles.heroContent,
            children: [
                /*#__PURE__*/ _jsx("h1", {
                    children: title
                }),
                /*#__PURE__*/ _jsx("p", {
                    children: subtitle
                })
            ]
        })
    });
}


/***/ }),

/***/ 4081:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ TestimonialSection)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_TestimonialSection_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6771);
/* harmony import */ var _styles_TestimonialSection_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_TestimonialSection_module_css__WEBPACK_IMPORTED_MODULE_1__);


const testimonials = [
    {
        author: "John D.",
        text: "Seattle Outdoor Living transformed our backyard with a beautiful cedar fence. Highly recommended!"
    },
    {
        author: "Sarah M.",
        text: "Professional service and top-quality wood fencing. Our new fence looks amazing!"
    },
    {
        author: "Mike R.",
        text: "Great experience from start to finish. The team was knowledgeable and efficient."
    }, 
];
function TestimonialSection() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: (_styles_TestimonialSection_module_css__WEBPACK_IMPORTED_MODULE_1___default().testimonialSection),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_styles_TestimonialSection_module_css__WEBPACK_IMPORTED_MODULE_1___default().container),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    children: "What Our Customers Say"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_styles_TestimonialSection_module_css__WEBPACK_IMPORTED_MODULE_1___default().testimonialGrid),
                    children: testimonials.map((testimonial, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_TestimonialSection_module_css__WEBPACK_IMPORTED_MODULE_1___default().testimonial),
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    children: [
                                        '"',
                                        testimonial.text,
                                        '"'
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    children: [
                                        "- ",
                                        testimonial.author
                                    ]
                                })
                            ]
                        }, index))
                })
            ]
        })
    });
}


/***/ })

};
;