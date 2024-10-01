"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/getProjects";
exports.ids = ["pages/api/getProjects"];
exports.modules = {

/***/ "@aws-sdk/client-s3":
/*!*************************************!*\
  !*** external "@aws-sdk/client-s3" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("@aws-sdk/client-s3");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ "(api)/./pages/api/getProjects.js":
/*!**********************************!*\
  !*** ./pages/api/getProjects.js ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/client-s3 */ \"@aws-sdk/client-s3\");\n/* harmony import */ var _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_1__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nasync function handler(req, res) {\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"https://379pj43m47.execute-api.us-west-2.amazonaws.com/default/gvsGetCreds\");\n        const s3Client = new _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_1__.S3Client({\n            region: \"us-west-1\",\n            credentials: {\n                accessKeyId: response.data.accessKeyId,\n                secretAccessKey: response.data.secretAccessKey\n            }\n        });\n        const projects = [];\n        for(let i = 1; i <= 15; i++){\n            const projectFolder = `Portfolio/Project${i}/FullSize/`;\n            const command = new _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_1__.ListObjectsV2Command({\n                Bucket: \"greenviewsolutionsimages\",\n                Prefix: projectFolder\n            });\n            try {\n                const data = await s3Client.send(command);\n                const images = await Promise.all(data.Contents.filter((item)=>item.Key.endsWith(\".webp\") || item.Key.endsWith(\".jpeg\") || item.Key.endsWith(\".JPG\")).map(async (item)=>{\n                    const headCommand = new _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_1__.HeadObjectCommand({\n                        Bucket: \"greenviewsolutionsimages\",\n                        Key: item.Key\n                    });\n                    const headData = await s3Client.send(headCommand);\n                    const url = `https://ik.imagekit.io/greenviewsolutions/${item.Key}?tr=w-700,h-700`;\n                    console.log(`Project ${i} image:`, url, \"Size:\", headData.ContentLength);\n                    return {\n                        url,\n                        size: headData.ContentLength\n                    };\n                }));\n                if (images.length > 0) {\n                    projects.push({\n                        id: i,\n                        images,\n                        name: `Project ${i}`,\n                        description: `This is a sample description for Project ${i}. Replace with actual project details.`\n                    });\n                }\n            } catch (err) {\n                console.log(`Error fetching project ${i}:`, err);\n            }\n        }\n        res.status(200).json(projects);\n    } catch (error) {\n        console.error(\"Error fetching projects:\", error);\n        res.status(500).json({\n            error: \"Error fetching projects\"\n        });\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FBRyxDQUFDLENBQUM7WUFDbkQsQ0FBQztRQUNILENBQUM7UUFFRHJDLEdBQUcsQ0FBQ3NDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDOUIsUUFBUSxDQUFDLENBQUM7SUFDakMsRUFBRSxPQUFPK0IsS0FBSyxFQUFFO1FBQ2RaLE9BQU8sQ0FBQ1ksS0FBSyxDQUFDLDBCQUEwQixFQUFFQSxLQUFLLENBQUMsQ0FBQztRQUNqRHhDLEdBQUcsQ0FBQ3NDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVDLEtBQUssRUFBRSx5QkFBeUI7U0FBRSxDQUFDLENBQUM7SUFDN0QsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZWF0dGxlb3V0ZG9vcmxpdmluZ3NwYWNlcy8uL3BhZ2VzL2FwaS9nZXRQcm9qZWN0cy5qcz8wNGUxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBTM0NsaWVudCwgTGlzdE9iamVjdHNWMkNvbW1hbmQsIEhlYWRPYmplY3RDb21tYW5kIH0gZnJvbSBcIkBhd3Mtc2RrL2NsaWVudC1zM1wiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXCJodHRwczovLzM3OXBqNDNtNDcuZXhlY3V0ZS1hcGkudXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vZGVmYXVsdC9ndnNHZXRDcmVkc1wiKTtcbiAgICBjb25zdCBzM0NsaWVudCA9IG5ldyBTM0NsaWVudCh7XG4gICAgICByZWdpb246ICd1cy13ZXN0LTEnLCAvLyBDaGFuZ2VkIGZyb20gJ3VzLXdlc3QtMicgdG8gJ3VzLXdlc3QtMSdcbiAgICAgIGNyZWRlbnRpYWxzOiB7XG4gICAgICAgIGFjY2Vzc0tleUlkOiByZXNwb25zZS5kYXRhLmFjY2Vzc0tleUlkLFxuICAgICAgICBzZWNyZXRBY2Nlc3NLZXk6IHJlc3BvbnNlLmRhdGEuc2VjcmV0QWNjZXNzS2V5LFxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgcHJvamVjdHMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAxNTsgaSsrKSB7XG4gICAgICBjb25zdCBwcm9qZWN0Rm9sZGVyID0gYFBvcnRmb2xpby9Qcm9qZWN0JHtpfS9GdWxsU2l6ZS9gO1xuICAgICAgY29uc3QgY29tbWFuZCA9IG5ldyBMaXN0T2JqZWN0c1YyQ29tbWFuZCh7XG4gICAgICAgIEJ1Y2tldDogJ2dyZWVudmlld3NvbHV0aW9uc2ltYWdlcycsXG4gICAgICAgIFByZWZpeDogcHJvamVjdEZvbGRlcixcbiAgICAgIH0pO1xuXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgczNDbGllbnQuc2VuZChjb21tYW5kKTtcbiAgICAgICAgY29uc3QgaW1hZ2VzID0gYXdhaXQgUHJvbWlzZS5hbGwoZGF0YS5Db250ZW50c1xuICAgICAgICAgIC5maWx0ZXIoaXRlbSA9PiBpdGVtLktleS5lbmRzV2l0aCgnLndlYnAnKSB8fCBpdGVtLktleS5lbmRzV2l0aCgnLmpwZWcnKSB8fCBpdGVtLktleS5lbmRzV2l0aCgnLkpQRycpKVxuICAgICAgICAgIC5tYXAoYXN5bmMgKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGhlYWRDb21tYW5kID0gbmV3IEhlYWRPYmplY3RDb21tYW5kKHtcbiAgICAgICAgICAgICAgQnVja2V0OiAnZ3JlZW52aWV3c29sdXRpb25zaW1hZ2VzJyxcbiAgICAgICAgICAgICAgS2V5OiBpdGVtLktleSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgaGVhZERhdGEgPSBhd2FpdCBzM0NsaWVudC5zZW5kKGhlYWRDb21tYW5kKTtcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IGBodHRwczovL2lrLmltYWdla2l0LmlvL2dyZWVudmlld3NvbHV0aW9ucy8ke2l0ZW0uS2V5fT90cj13LTcwMCxoLTcwMGA7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgUHJvamVjdCAke2l9IGltYWdlOmAsIHVybCwgJ1NpemU6JywgaGVhZERhdGEuQ29udGVudExlbmd0aCk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgIHNpemU6IGhlYWREYXRhLkNvbnRlbnRMZW5ndGgsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pKTtcbiAgICAgICAgaWYgKGltYWdlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgcHJvamVjdHMucHVzaCh7IFxuICAgICAgICAgICAgaWQ6IGksIFxuICAgICAgICAgICAgaW1hZ2VzLFxuICAgICAgICAgICAgbmFtZTogYFByb2plY3QgJHtpfWAsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogYFRoaXMgaXMgYSBzYW1wbGUgZGVzY3JpcHRpb24gZm9yIFByb2plY3QgJHtpfS4gUmVwbGFjZSB3aXRoIGFjdHVhbCBwcm9qZWN0IGRldGFpbHMuYFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coYEVycm9yIGZldGNoaW5nIHByb2plY3QgJHtpfTpgLCBlcnIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHByb2plY3RzKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBwcm9qZWN0czonLCBlcnJvcik7XG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogJ0Vycm9yIGZldGNoaW5nIHByb2plY3RzJyB9KTtcbiAgfVxufSJdLCJuYW1lcyI6WyJheGlvcyIsIlMzQ2xpZW50IiwiTGlzdE9iamVjdHNWMkNvbW1hbmQiLCJIZWFkT2JqZWN0Q29tbWFuZCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJyZXNwb25zZSIsImdldCIsInMzQ2xpZW50IiwicmVnaW9uIiwiY3JlZGVudGlhbHMiLCJhY2Nlc3NLZXlJZCIsImRhdGEiLCJzZWNyZXRBY2Nlc3NLZXkiLCJwcm9qZWN0cyIsImkiLCJwcm9qZWN0Rm9sZGVyIiwiY29tbWFuZCIsIkJ1Y2tldCIsIlByZWZpeCIsInNlbmQiLCJpbWFnZXMiLCJQcm9taXNlIiwiYWxsIiwiQ29udGVudHMiLCJmaWx0ZXIiLCJpdGVtIiwiS2V5IiwiZW5kc1dpdGgiLCJtYXAiLCJoZWFkQ29tbWFuZCIsImhlYWREYXRhIiwidXJsIiwiY29uc29sZSIsImxvZyIsIkNvbnRlbnRMZW5ndGgiLCJzaXplIiwibGVuZ3RoIiwicHVzaCIsImlkIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiZXJyIiwic3RhdHVzIiwianNvbiIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/getProjects.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getProjects.js"));
module.exports = __webpack_exports__;

})();