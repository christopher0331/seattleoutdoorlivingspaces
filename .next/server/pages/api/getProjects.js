"use strict";
(() => {
var exports = {};
exports.id = 101;
exports.ids = [101];
exports.modules = {

/***/ 1841:
/***/ ((module) => {

module.exports = require("@aws-sdk/client-s3");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 4778:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1841);
/* harmony import */ var _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


async function handler(req, res) {
    try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get("https://379pj43m47.execute-api.us-west-2.amazonaws.com/default/gvsGetCreds");
        const s3Client = new _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_1__.S3Client({
            region: "us-west-1",
            credentials: {
                accessKeyId: response.data.accessKeyId,
                secretAccessKey: response.data.secretAccessKey
            }
        });
        const projects = [];
        for(let i = 1; i <= 15; i++){
            const projectFolder = `Portfolio/Project${i}/FullSize/`;
            const command = new _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_1__.ListObjectsV2Command({
                Bucket: "greenviewsolutionsimages",
                Prefix: projectFolder
            });
            try {
                const data = await s3Client.send(command);
                const images = await Promise.all(data.Contents.filter((item)=>item.Key.endsWith(".webp") || item.Key.endsWith(".jpeg") || item.Key.endsWith(".JPG")).map(async (item)=>{
                    const headCommand = new _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_1__.HeadObjectCommand({
                        Bucket: "greenviewsolutionsimages",
                        Key: item.Key
                    });
                    const headData = await s3Client.send(headCommand);
                    const url = `https://ik.imagekit.io/greenviewsolutions/${item.Key}?tr=w-700,h-700`;
                    console.log(`Project ${i} image:`, url, "Size:", headData.ContentLength);
                    return {
                        url,
                        size: headData.ContentLength
                    };
                }));
                if (images.length > 0) {
                    projects.push({
                        id: i,
                        images,
                        name: `Project ${i}`,
                        description: `This is a sample description for Project ${i}. Replace with actual project details.`
                    });
                }
            } catch (err) {
                console.log(`Error fetching project ${i}:`, err);
            }
        }
        res.status(200).json(projects);
    } catch (error) {
        console.error("Error fetching projects:", error);
        res.status(500).json({
            error: "Error fetching projects"
        });
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4778));
module.exports = __webpack_exports__;

})();