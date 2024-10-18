"use strict";
exports.id = 916;
exports.ids = [916];
exports.modules = {

/***/ 2916:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AU": () => (/* binding */ getPostData),
/* harmony export */   "Le": () => (/* binding */ getAllPostIds),
/* harmony export */   "ld": () => (/* binding */ getSortedPostsData)
/* harmony export */ });
/* harmony import */ var remark__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1774);
/* harmony import */ var remark_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7740);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1423);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8076);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([remark__WEBPACK_IMPORTED_MODULE_0__, remark_html__WEBPACK_IMPORTED_MODULE_1__]);
([remark__WEBPACK_IMPORTED_MODULE_0__, remark_html__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// utils/markdownParser.js





const postsDirectory = path__WEBPACK_IMPORTED_MODULE_2___default().join(process.cwd(), "articles");
function getSortedPostsData() {
    // Get file names under /posts
    const fileNames = fs__WEBPACK_IMPORTED_MODULE_4___default().readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName)=>{
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, "");
        // Read markdown file as string
        const fullPath = path__WEBPACK_IMPORTED_MODULE_2___default().join(postsDirectory, fileName);
        const fileContents = fs__WEBPACK_IMPORTED_MODULE_4___default().readFileSync(fullPath, "utf8");
        // Use gray-matter to parse the post metadata section
        const matterResult = gray_matter__WEBPACK_IMPORTED_MODULE_3___default()(fileContents);
        // Combine the data with the id
        return {
            id,
            ...matterResult.data
        };
    });
    // Sort posts by date
    return allPostsData.sort((a, b)=>{
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}
async function getPostData(id) {
    const fullPath = path__WEBPACK_IMPORTED_MODULE_2___default().join(postsDirectory, `${id}.md`);
    const fileContents = fs__WEBPACK_IMPORTED_MODULE_4___default().readFileSync(fullPath, "utf8");
    const matterResult = gray_matter__WEBPACK_IMPORTED_MODULE_3___default()(fileContents);
    // Convert markdown into HTML string
    const processedContent = await (0,remark__WEBPACK_IMPORTED_MODULE_0__.remark)().use(remark_html__WEBPACK_IMPORTED_MODULE_1__["default"]).process(matterResult.content);
    const contentHtml = processedContent.toString();
    return {
        id,
        contentHtml,
        ...matterResult.data
    };
}
function getAllPostIds() {
    // Read the file names in the posts directory
    const fileNames = fs__WEBPACK_IMPORTED_MODULE_4___default().readdirSync(postsDirectory);
    // Return an array that contains the paths for all markdown files
    return fileNames.map((fileName)=>{
        return {
            params: {
                id: fileName.replace(/\.md$/, "") // Remove the file extension to get the ID
            }
        };
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;