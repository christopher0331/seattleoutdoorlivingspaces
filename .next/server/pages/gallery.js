(() => {
var exports = {};
exports.id = 214;
exports.ids = [214];
exports.modules = {

/***/ 7484:
/***/ ((module) => {

// Exports
module.exports = {
	"galleryContainer": "Gallery_galleryContainer__JORmz",
	"galleryTitle": "Gallery_galleryTitle__Yv8xO",
	"searchContainer": "Gallery_searchContainer__vJCca",
	"searchIcon": "Gallery_searchIcon__55QND",
	"searchInput": "Gallery_searchInput__aXEfA",
	"myMasonryGrid": "Gallery_myMasonryGrid__z__nC",
	"myMasonryGridColumn": "Gallery_myMasonryGridColumn__Au2a6",
	"projectCard": "Gallery_projectCard__S6eQo",
	"imageWrapper": "Gallery_imageWrapper__SPnP6",
	"projectThumbnail": "Gallery_projectThumbnail__eeFFZ",
	"overlay": "Gallery_overlay__rmeM_",
	"viewProjectButton": "Gallery_viewProjectButton__oF6dL",
	"loading": "Gallery_loading__hUZFU",
	"loadMoreButton": "Gallery_loadMoreButton__GaVq_",
	"mobileOverlay": "Gallery_mobileOverlay__VVN5J"
};


/***/ }),

/***/ 8330:
/***/ ((module) => {

// Exports
module.exports = {
	"modalOverlay": "ProjectModal_modalOverlay__gOjDO",
	"modalContent": "ProjectModal_modalContent__kpfSk",
	"projectTitle": "ProjectModal_projectTitle__nAbBM",
	"closeButton": "ProjectModal_closeButton__ixKyz",
	"imageContainer": "ProjectModal_imageContainer__BR_LW",
	"imageWrapper": "ProjectModal_imageWrapper__JZih1",
	"projectImage": "ProjectModal_projectImage__OB6cW",
	"navButton": "ProjectModal_navButton__38xyQ",
	"prevButton": "ProjectModal_prevButton__3__li",
	"nextButton": "ProjectModal_nextButton__22OU0",
	"thumbnailGrid": "ProjectModal_thumbnailGrid__yHoZH",
	"thumbnailWrapper": "ProjectModal_thumbnailWrapper__T8lf_",
	"activeThumbnail": "ProjectModal_activeThumbnail__WAu6f",
	"loadMoreButton": "ProjectModal_loadMoreButton__bb4IM"
};


/***/ }),

/***/ 1752:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ProjectModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6197);
/* harmony import */ var _styles_ProjectModal_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8330);
/* harmony import */ var _styles_ProjectModal_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_ProjectModal_module_css__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_3__]);
framer_motion__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function ProjectModal({ project , onClose  }) {
    const { 0: currentImageIndex , 1: setCurrentImageIndex  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const { 0: direction , 1: setDirection  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const { 0: visibleThumbnails , 1: setVisibleThumbnails  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(10);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const modalHeight = Math.min(800 + (project.images.length - 10) * 20, window.innerHeight * 0.9);
        document.querySelector(`.${(_styles_ProjectModal_module_css__WEBPACK_IMPORTED_MODULE_4___default().modalContent)}`).style.height = `${modalHeight}px`;
    }, [
        project.images.length
    ]);
    const nextImage = ()=>{
        setDirection(1);
        setCurrentImageIndex((prevIndex)=>prevIndex === project.images.length - 1 ? 0 : prevIndex + 1);
    };
    const prevImage = ()=>{
        setDirection(-1);
        setCurrentImageIndex((prevIndex)=>prevIndex === 0 ? project.images.length - 1 : prevIndex - 1);
    };
    const loadMoreThumbnails = ()=>{
        setVisibleThumbnails((prev)=>Math.min(prev + 10, project.images.length));
    };
    const variants = {
        enter: (direction)=>({
                x: direction > 0 ? "100%" : "-100%",
                opacity: 0
            }),
        center: {
            x: 0,
            opacity: 1
        },
        exit: (direction)=>({
                x: direction < 0 ? "100%" : "-100%",
                opacity: 0
            })
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
        className: (_styles_ProjectModal_module_css__WEBPACK_IMPORTED_MODULE_4___default().modalOverlay),
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
            className: (_styles_ProjectModal_module_css__WEBPACK_IMPORTED_MODULE_4___default().modalContent),
            initial: {
                scale: 0.8,
                opacity: 0
            },
            animate: {
                scale: 1,
                opacity: 1
            },
            exit: {
                scale: 0.8,
                opacity: 0
            },
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                    className: (_styles_ProjectModal_module_css__WEBPACK_IMPORTED_MODULE_4___default().projectTitle),
                    children: [
                        "Project ",
                        project.id
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    onClick: onClose,
                    className: (_styles_ProjectModal_module_css__WEBPACK_IMPORTED_MODULE_4___default().closeButton),
                    children: "Close"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_ProjectModal_module_css__WEBPACK_IMPORTED_MODULE_4___default().imageContainer),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.AnimatePresence, {
                            initial: false,
                            custom: direction,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                                custom: direction,
                                variants: variants,
                                initial: "enter",
                                animate: "center",
                                exit: "exit",
                                transition: {
                                    x: {
                                        type: "tween",
                                        duration: 0.3
                                    },
                                    opacity: {
                                        duration: 0.2
                                    }
                                },
                                className: (_styles_ProjectModal_module_css__WEBPACK_IMPORTED_MODULE_4___default().imageWrapper),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    src: project.images[currentImageIndex].url,
                                    alt: `Project ${project.id} image ${currentImageIndex + 1}`,
                                    layout: "fill",
                                    objectFit: "contain",
                                    className: (_styles_ProjectModal_module_css__WEBPACK_IMPORTED_MODULE_4___default().projectImage)
                                })
                            }, currentImageIndex)
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: prevImage,
                            className: `${(_styles_ProjectModal_module_css__WEBPACK_IMPORTED_MODULE_4___default().navButton)} ${(_styles_ProjectModal_module_css__WEBPACK_IMPORTED_MODULE_4___default().prevButton)}`,
                            children: "❮"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: nextImage,
                            className: `${(_styles_ProjectModal_module_css__WEBPACK_IMPORTED_MODULE_4___default().navButton)} ${(_styles_ProjectModal_module_css__WEBPACK_IMPORTED_MODULE_4___default().nextButton)}`,
                            children: "❯"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_styles_ProjectModal_module_css__WEBPACK_IMPORTED_MODULE_4___default().thumbnailGrid),
                    children: project.images.slice(0, visibleThumbnails).map((image, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: `${(_styles_ProjectModal_module_css__WEBPACK_IMPORTED_MODULE_4___default().thumbnailWrapper)} ${index === currentImageIndex ? (_styles_ProjectModal_module_css__WEBPACK_IMPORTED_MODULE_4___default().activeThumbnail) : ""}`,
                            onClick: ()=>{
                                setDirection(index > currentImageIndex ? 1 : -1);
                                setCurrentImageIndex(index);
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                src: image.url,
                                alt: `Project ${project.id} thumbnail ${index + 1}`,
                                layout: "fill",
                                objectFit: "cover"
                            })
                        }, index))
                }),
                visibleThumbnails < project.images.length && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    onClick: loadMoreThumbnails,
                    className: (_styles_ProjectModal_module_css__WEBPACK_IMPORTED_MODULE_4___default().loadMoreButton),
                    children: "Load More"
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 619:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Gallery),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9648);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_masonry_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7125);
/* harmony import */ var react_masonry_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_masonry_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6197);
/* harmony import */ var _styles_Gallery_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7484);
/* harmony import */ var _styles_Gallery_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Gallery_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_ProjectModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1752);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1301);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__, framer_motion__WEBPACK_IMPORTED_MODULE_5__, _components_ProjectModal__WEBPACK_IMPORTED_MODULE_6__, react_icons_fa__WEBPACK_IMPORTED_MODULE_7__]);
([axios__WEBPACK_IMPORTED_MODULE_2__, framer_motion__WEBPACK_IMPORTED_MODULE_5__, _components_ProjectModal__WEBPACK_IMPORTED_MODULE_6__, react_icons_fa__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function Gallery() {
    const { 0: projectImages , 1: setProjectImages  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: filteredProjects , 1: setFilteredProjects  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: selectedProject , 1: setSelectedProject  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const { 0: searchTerm , 1: setSearchTerm  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: visibleProjects , 1: setVisibleProjects  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(8);
    const { 0: isMobile , 1: setIsMobile  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const checkMobile = ()=>{
            setIsMobile(window.innerWidth <= 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return ()=>window.removeEventListener("resize", checkMobile);
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const fetchData = async ()=>{
            try {
                const response = await axios__WEBPACK_IMPORTED_MODULE_2__["default"].get("/api/getProjects");
                setProjectImages(response.data);
                setFilteredProjects(response.data);
            } catch (err) {
                console.log("error", err);
            } finally{
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const filtered = projectImages.filter((project)=>project.name.toLowerCase().includes(searchTerm.toLowerCase()) || project.description.toLowerCase().includes(searchTerm.toLowerCase()));
        setFilteredProjects(filtered);
        setVisibleProjects(8);
    }, [
        searchTerm,
        projectImages
    ]);
    const openModal = (project)=>{
        setSelectedProject(project);
    };
    const closeModal = ()=>{
        setSelectedProject(null);
    };
    const loadMore = ()=>{
        setVisibleProjects((prevVisible)=>prevVisible + 8);
    };
    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_Gallery_module_css__WEBPACK_IMPORTED_MODULE_8___default().galleryContainer),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: (_styles_Gallery_module_css__WEBPACK_IMPORTED_MODULE_8___default().galleryTitle),
                children: "Our Work"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_Gallery_module_css__WEBPACK_IMPORTED_MODULE_8___default().searchContainer),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaSearch, {
                        className: (_styles_Gallery_module_css__WEBPACK_IMPORTED_MODULE_8___default().searchIcon)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        placeholder: "Search projects...",
                        value: searchTerm,
                        onChange: (e)=>setSearchTerm(e.target.value),
                        className: (_styles_Gallery_module_css__WEBPACK_IMPORTED_MODULE_8___default().searchInput)
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.AnimatePresence, {
                children: loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    className: (_styles_Gallery_module_css__WEBPACK_IMPORTED_MODULE_8___default().loading),
                    children: "Loading..."
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_masonry_css__WEBPACK_IMPORTED_MODULE_4___default()), {
                    breakpointCols: breakpointColumnsObj,
                    className: (_styles_Gallery_module_css__WEBPACK_IMPORTED_MODULE_8___default().myMasonryGrid),
                    columnClassName: (_styles_Gallery_module_css__WEBPACK_IMPORTED_MODULE_8___default().myMasonryGridColumn),
                    children: filteredProjects.slice(0, visibleProjects).map((project)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
                            className: (_styles_Gallery_module_css__WEBPACK_IMPORTED_MODULE_8___default().projectCard),
                            whileHover: isMobile ? {} : {
                                y: -10
                            },
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            exit: {
                                opacity: 0,
                                y: 20
                            },
                            transition: {
                                duration: 0.3
                            },
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_Gallery_module_css__WEBPACK_IMPORTED_MODULE_8___default().imageWrapper),
                                children: [
                                    project.images.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        src: project.images[0].url,
                                        alt: `${project.name} thumbnail`,
                                        layout: "fill",
                                        objectFit: "cover",
                                        className: (_styles_Gallery_module_css__WEBPACK_IMPORTED_MODULE_8___default().projectThumbnail)
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: `${(_styles_Gallery_module_css__WEBPACK_IMPORTED_MODULE_8___default().overlay)} ${isMobile ? (_styles_Gallery_module_css__WEBPACK_IMPORTED_MODULE_8___default().mobileOverlay) : ""}`,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                children: project.name
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                onClick: ()=>openModal(project),
                                                className: (_styles_Gallery_module_css__WEBPACK_IMPORTED_MODULE_8___default().viewProjectButton),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaEye, {}),
                                                    " View Project"
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        }, project.id))
                })
            }),
            visibleProjects < filteredProjects.length && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: loadMore,
                className: (_styles_Gallery_module_css__WEBPACK_IMPORTED_MODULE_8___default().loadMoreButton),
                children: "Load More"
            }),
            selectedProject && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ProjectModal__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                project: selectedProject,
                onClose: closeModal
            })
        ]
    });
}
async function getStaticProps({ params  }) {
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

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

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

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 7125:
/***/ ((module) => {

"use strict";
module.exports = require("react-masonry-css");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9648:
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ 6197:
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

/***/ }),

/***/ 1301:
/***/ ((module) => {

"use strict";
module.exports = import("react-icons/fa");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675], () => (__webpack_exec__(619)));
module.exports = __webpack_exports__;

})();