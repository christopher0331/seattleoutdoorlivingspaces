(() => {
var exports = {};
exports.id = 282;
exports.ids = [282];
exports.modules = {

/***/ 8488:
/***/ ((module) => {

// Exports
module.exports = {
	"faqSection": "VinylFenceFAQ_faqSection__1sjHI",
	"faqTitle": "VinylFenceFAQ_faqTitle__Dx_8k",
	"faqList": "VinylFenceFAQ_faqList__l8YeX",
	"faqItem": "VinylFenceFAQ_faqItem__TANEv",
	"faqQuestion": "VinylFenceFAQ_faqQuestion__RGeKD",
	"active": "VinylFenceFAQ_active__YQh_1",
	"faqIcon": "VinylFenceFAQ_faqIcon__ELJ8V",
	"faqAnswer": "VinylFenceFAQ_faqAnswer__uZI4p",
	"pagination": "VinylFenceFAQ_pagination__g66M_",
	"activePage": "VinylFenceFAQ_activePage__IvYBd"
};


/***/ }),

/***/ 5968:
/***/ ((module) => {

// Exports
module.exports = {
	"seoTextContainer": "VinylFencing_seoTextContainer__29pLt",
	"seoText": "VinylFencing_seoText__F0LlR",
	"fenceTypesSection": "VinylFencing_fenceTypesSection__maJun",
	"container": "VinylFencing_container__KdRim",
	"sectionTitle": "VinylFencing_sectionTitle__am6uE",
	"sectionSubtitle": "VinylFencing_sectionSubtitle__1czGA",
	"fenceTypeGrid": "VinylFencing_fenceTypeGrid__kidIb",
	"fenceTypeWrapper": "VinylFencing_fenceTypeWrapper__XwAHn",
	"fenceTypeImageContainer": "VinylFencing_fenceTypeImageContainer__kb4DJ",
	"fenceTypeImage": "VinylFencing_fenceTypeImage__6Sd_f"
};


/***/ }),

/***/ 5723:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ VinylFenceFAQ)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_VinylFenceFAQ_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8488);
/* harmony import */ var _styles_VinylFenceFAQ_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_VinylFenceFAQ_module_css__WEBPACK_IMPORTED_MODULE_3__);




const faqData = [
    {
        question: "What makes vinyl fencing ideal for Seattle's rainy weather?",
        answer: "Vinyl fencing excels in Seattle's rainy climate due to its complete water resistance. It doesn't absorb moisture, preventing issues like mold, mildew, or rot, which ensures long-lasting performance in the Pacific Northwest's wet conditions."
    },
    {
        question: "How does vinyl fencing withstand Seattle's occasional windstorms?",
        answer: "Vinyl fencing is engineered to be highly flexible and durable, allowing it to bend without breaking during Seattle's windstorms. This resilience, combined with proper installation, helps vinyl fences maintain their structural integrity in harsh weather conditions."
    },
    {
        question: "What are the long-term cost benefits of installing a vinyl fence in Seattle?",
        answer: "While the initial investment may be higher, vinyl fencing offers significant long-term cost benefits in Seattle. Its durability eliminates the need for frequent replacements, and its low maintenance requirements save on ongoing expenses, making it a cost-effective choice over time."
    },
    {
        question: "How does vinyl fencing contribute to property value in Seattle's real estate market?",
        answer: "Vinyl fencing can positively impact property values in Seattle's competitive real estate market. Its attractive appearance, durability, and low maintenance appeal to potential buyers, potentially increasing your home's curb appeal and overall value."
    },
    {
        question: "What color options are available for vinyl fencing in Seattle?",
        answer: "Vinyl fencing in Seattle comes in a wide range of colors to complement any home style. Popular options include white, tan, and gray, but many manufacturers offer custom colors. Unlike painted surfaces, these colors are integrated into the material, ensuring they won't fade or require repainting."
    },
    {
        question: "How does vinyl fencing perform in Seattle's varying temperatures?",
        answer: "Vinyl fencing is designed to withstand Seattle's temperature fluctuations. It doesn't expand or contract significantly with temperature changes, maintaining its shape and structural integrity year-round, from cool, damp winters to warm summers."
    },
    {
        question: "What are the privacy benefits of vinyl fencing for Seattle homeowners?",
        answer: "Vinyl fencing offers excellent privacy options for Seattle homeowners. Solid panel designs provide complete visual screening, while the material's sound-dampening properties can help reduce noise from nearby streets or neighbors, creating a more secluded outdoor space."
    },
    {
        question: "How does vinyl fencing impact Seattle's local ecosystem?",
        answer: "Vinyl fencing has a minimal impact on Seattle's local ecosystem. It doesn't leach chemicals into the soil, doesn't require harmful paint or stain applications, and can last for decades without needing replacement, reducing overall resource consumption and waste."
    },
    {
        question: "What styles of vinyl fencing are popular in Seattle neighborhoods?",
        answer: "Popular vinyl fencing styles in Seattle include privacy fences, picket fences, and ranch-style fences. Many homeowners opt for designs that complement the city's mix of modern and traditional architecture, with options ranging from classic white pickets to sleek, contemporary panels."
    },
    {
        question: "How quickly can vinyl fencing be installed in Seattle?",
        answer: "Vinyl fencing installation in Seattle is typically faster than other fencing materials. Depending on the project size and complexity, professional installers can often complete a vinyl fence installation in just 1-3 days, minimizing disruption to your property and schedule."
    }
];
function VinylFenceFAQ() {
    const { 0: activeIndex , 1: setActiveIndex  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: currentPage , 1: setCurrentPage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const faqsPerPage = 5;
    const toggleFAQ = (index)=>{
        setActiveIndex(activeIndex === index ? null : index);
    };
    const indexOfLastFAQ = currentPage * faqsPerPage;
    const indexOfFirstFAQ = indexOfLastFAQ - faqsPerPage;
    const currentFAQs = faqData.slice(indexOfFirstFAQ, indexOfLastFAQ);
    const changePage = (pageNumber)=>{
        setCurrentPage(pageNumber);
        setActiveIndex(null) // Reset active FAQ when changing pages
        ;
    };
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqData.map((faq)=>({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                }
            }))
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                    type: "application/ld+json",
                    dangerouslySetInnerHTML: {
                        __html: JSON.stringify(schemaData)
                    }
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: (_styles_VinylFenceFAQ_module_css__WEBPACK_IMPORTED_MODULE_3___default().faqSection),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: (_styles_VinylFenceFAQ_module_css__WEBPACK_IMPORTED_MODULE_3___default().faqTitle),
                        children: "Frequently Asked Questions About Vinyl Fencing in Seattle"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_VinylFenceFAQ_module_css__WEBPACK_IMPORTED_MODULE_3___default().faqList),
                        children: currentFAQs.map((faq, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_VinylFenceFAQ_module_css__WEBPACK_IMPORTED_MODULE_3___default().faqItem),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                        className: `${(_styles_VinylFenceFAQ_module_css__WEBPACK_IMPORTED_MODULE_3___default().faqQuestion)} ${activeIndex === index ? (_styles_VinylFenceFAQ_module_css__WEBPACK_IMPORTED_MODULE_3___default().active) : ""}`,
                                        onClick: ()=>toggleFAQ(index),
                                        "aria-expanded": activeIndex === index,
                                        children: [
                                            faq.question,
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: (_styles_VinylFenceFAQ_module_css__WEBPACK_IMPORTED_MODULE_3___default().faqIcon),
                                                "aria-hidden": "true",
                                                children: activeIndex === index ? "−" : "+"
                                            })
                                        ]
                                    }),
                                    activeIndex === index && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_styles_VinylFenceFAQ_module_css__WEBPACK_IMPORTED_MODULE_3___default().faqAnswer),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: faq.answer
                                        })
                                    })
                                ]
                            }, index))
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_VinylFenceFAQ_module_css__WEBPACK_IMPORTED_MODULE_3___default().pagination),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: ()=>changePage(1),
                                className: currentPage === 1 ? (_styles_VinylFenceFAQ_module_css__WEBPACK_IMPORTED_MODULE_3___default().activePage) : "",
                                children: "1"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: ()=>changePage(2),
                                className: currentPage === 2 ? (_styles_VinylFenceFAQ_module_css__WEBPACK_IMPORTED_MODULE_3___default().activePage) : "",
                                children: "2"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 207:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WoodFencing),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5417);
/* harmony import */ var _components_FenceTypeCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4788);
/* harmony import */ var _components_CTASection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(268);
/* harmony import */ var _components_TestimonialSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4081);
/* harmony import */ var _components_FenceShapeShowcase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7635);
/* harmony import */ var _components_VinylFenceFAQ__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5723);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6197);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4009);
/* harmony import */ var _styles_VinylFencing_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5968);
/* harmony import */ var _styles_VinylFencing_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_VinylFencing_module_css__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_FenceShapeShowcase__WEBPACK_IMPORTED_MODULE_7__, framer_motion__WEBPACK_IMPORTED_MODULE_9__, react_intersection_observer__WEBPACK_IMPORTED_MODULE_10__]);
([_components_FenceShapeShowcase__WEBPACK_IMPORTED_MODULE_7__, framer_motion__WEBPACK_IMPORTED_MODULE_9__, react_intersection_observer__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const vinylFenceTypes = [
    {
        title: "Privacy Fence",
        description: "Create a secluded sanctuary with our sturdy privacy fences, perfect for homeowners seeking maximum seclusion and security.",
        image: "https://imagedelivery.net/OHVtjf602XdHccCnziCADA/1fe8c671-e3fa-4e89-24a9-89160e026d00/public",
        benefits: [
            "Complete privacy",
            "Enhanced security",
            "Windbreak protection"
        ]
    },
    {
        title: "Picket Fence",
        description: "Add a touch of classic Americana to your property with our charming picket fences, ideal for defining boundaries with style.",
        image: "https://imagedelivery.net/OHVtjf602XdHccCnziCADA/edde074c-3da2-408a-5a45-b8322ea01100/public",
        benefits: [
            "Decorative appeal",
            "Child and pet-friendly",
            "Enhances curb appeal"
        ]
    }, 
];
const fadeInUp = {
    initial: {
        opacity: 0,
        y: 60
    },
    animate: {
        opacity: 1,
        y: 0
    },
    transition: {
        duration: 0.6
    }
};
function WoodFencing({ heroImage , showHero  }) {
    const { 0: selectedFence , 1: setSelectedFence  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Premium Vinyl Fencing Solutions in Seattle | Seattle Outdoor Living"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "Discover our exceptional range of wood fencing options in Seattle. From privacy fences to picket designs, we offer top-quality solutions to enhance your property's beauty and security."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "canonical",
                        href: "https://www.seattleoutdoorliving.com/fencing/wood"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_VinylFencing_module_css__WEBPACK_IMPORTED_MODULE_11___default().seoTextContainer),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_VinylFencing_module_css__WEBPACK_IMPORTED_MODULE_11___default().seoText),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            children: "Premium Vinyl Fencing Solutions in Seattle"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: "Discover our exceptional range of wood fencing options, perfect for enhancing your property's beauty, privacy, and security. From classic picket fences to modern horizontal designs, our expert team delivers top-quality wood fencing solutions tailored to your needs. Explore our collection and transform your outdoor space today!"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: (_styles_VinylFencing_module_css__WEBPACK_IMPORTED_MODULE_11___default().fenceTypesSection),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_VinylFencing_module_css__WEBPACK_IMPORTED_MODULE_11___default().container),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.h2, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                delay: 0.2
                            },
                            className: (_styles_VinylFencing_module_css__WEBPACK_IMPORTED_MODULE_11___default().sectionTitle),
                            children: "Our Premium Vinyl Fence Collection"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: (_styles_VinylFencing_module_css__WEBPACK_IMPORTED_MODULE_11___default().sectionSubtitle),
                            children: "Discover the perfect blend of aesthetics and functionality"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_VinylFencing_module_css__WEBPACK_IMPORTED_MODULE_11___default().fenceTypeGrid),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
                                    initial: {
                                        opacity: 0,
                                        y: 50
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        delay: 0.1
                                    },
                                    className: (_styles_VinylFencing_module_css__WEBPACK_IMPORTED_MODULE_11___default().fenceTypeWrapper),
                                    onClick: ()=>setSelectedFence(vinylFenceTypes[0]),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_FenceTypeCard__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                        title: "Hamilton",
                                        description: "Elevate your property's privacy with our Hamilton vinyl fencing, offering a sleek and modern solution for homeowners seeking both style and seclusion.",
                                        image: "https://imagedelivery.net/OHVtjf602XdHccCnziCADA/64bdfb33-549d-4c4e-e22f-79b920b4fc00/public",
                                        benefits: [
                                            "Complete privacy",
                                            "Enhanced security",
                                            "Windbreak protection"
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
                                    initial: {
                                        opacity: 0,
                                        y: 50
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        delay: 0.2
                                    },
                                    className: (_styles_VinylFencing_module_css__WEBPACK_IMPORTED_MODULE_11___default().fenceTypeWrapper),
                                    onClick: ()=>setSelectedFence(vinylFenceTypes[1]),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_FenceTypeCard__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                        title: "Split Rail",
                                        description: "Embrace rustic charm with our Split Rail vinyl fencing, perfect for defining property lines and creating a classic, countryside aesthetic without the maintenance of traditional wood.",
                                        image: "https://imagedelivery.net/OHVtjf602XdHccCnziCADA/56fbbe69-a163-40b4-ed24-163f6714c300/public",
                                        benefits: [
                                            "Decorative appeal",
                                            "Child and pet-friendly",
                                            "Enhances curb appeal"
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_9__.AnimatePresence, {
                children: selectedFence && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
                    className: (_styles_VinylFencing_module_css__WEBPACK_IMPORTED_MODULE_11___default().modalOverlay),
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    onClick: ()=>setSelectedFence(null),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
                        className: (_styles_VinylFencing_module_css__WEBPACK_IMPORTED_MODULE_11___default().modalContent),
                        initial: {
                            y: 50,
                            opacity: 0
                        },
                        animate: {
                            y: 0,
                            opacity: 1
                        },
                        exit: {
                            y: 50,
                            opacity: 0
                        },
                        onClick: (e)=>e.stopPropagation(),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                children: selectedFence.title
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: selectedFence.description
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                children: selectedFence.benefits.map((benefit, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: benefit
                                    }, index))
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: ()=>setSelectedFence(null),
                                children: "Close"
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CTASection__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                title: "Ready to Enhance Your Property?",
                description: "Explore our vinyl fencing options and find the perfect solution for your home.",
                buttonText: "Get a Free Quote",
                buttonLink: "/contact" // Make sure this link is correct
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_VinylFenceFAQ__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CTASection__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                title: "Transform Your Outdoor Space Today",
                description: "Schedule a consultation with our expert team to explore the perfect vinyl fencing solution for your property.",
                buttonText: "Request a Free Consultation",
                buttonLink: "/contact" // Make sure this link is correct
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_TestimonialSection__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
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

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9646:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6197:
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

/***/ }),

/***/ 4009:
/***/ ((module) => {

"use strict";
module.exports = import("react-intersection-observer");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,676,664,545], () => (__webpack_exec__(207)));
module.exports = __webpack_exports__;

})();