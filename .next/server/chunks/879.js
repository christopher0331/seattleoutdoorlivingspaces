exports.id = 879;
exports.ids = [879];
exports.modules = {

/***/ 5373:
/***/ ((module) => {

// Exports
module.exports = {
	"mapContainer": "LocationsMap_mapContainer__vDjfD",
	"mapWrapper": "LocationsMap_mapWrapper__1aI9W"
};


/***/ }),

/***/ 1879:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2433);
/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_LocationsMap_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5373);
/* harmony import */ var _styles_LocationsMap_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_LocationsMap_module_css__WEBPACK_IMPORTED_MODULE_3__);




const mapContainerStyle = {
    width: "80%",
    height: "400px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    overflow: "hidden"
};
const center = {
    lat: 47.5985273,
    lng: -122.3351692 // GreenView Solutions longitude
};
const libraries = [
    "places",
    "marker"
];
const LocationsMap = ()=>{
    const { isLoaded  } = (0,_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.useJsApiLoader)({
        id: "google-map-script",
        googleMapsApiKey: "AIzaSyBhckNcG0QXLFtnGZBDAQDc3n5Q6KWiy08",
        libraries: libraries
    });
    const { 0: map , 1: setMap  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const onLoad = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function callback(map) {
        map.setZoom(12);
        map.setCenter(center);
        setMap(map);
    }, []);
    const onUnmount = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function callback(map) {
        setMap(null);
    }, []);
    const mapOptions = {
        mapId: "ba5d719eebd15822",
        zoom: 12,
        disableDefaultUI: true,
        zoomControl: true
    };
    const addMarker = async (map)=>{
        if (map && window.google) {
            const { AdvancedMarkerElement  } = await google.maps.importLibrary("marker");
            new AdvancedMarkerElement({
                position: center,
                map: map,
                title: "GreenView Solutions"
            });
        }
    };
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        if (map) {
            addMarker(map);
        }
    }, [
        map
    ]);
    if (!isLoaded) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: "Loading..."
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_styles_LocationsMap_module_css__WEBPACK_IMPORTED_MODULE_3___default().mapWrapper),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.GoogleMap, {
            mapContainerStyle: mapContainerStyle,
            center: center,
            options: mapOptions,
            onLoad: onLoad,
            onUnmount: onUnmount
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().memo(LocationsMap));


/***/ })

};
;