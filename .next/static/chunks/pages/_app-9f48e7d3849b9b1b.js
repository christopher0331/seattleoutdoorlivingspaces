(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{9361:function(e,t){"use strict";t.Z=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}},1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(181)}])},1210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8045:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(9361).Z,o=n(4941).Z,i=n(3929).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,n=e.sizes,c=e.unoptimized,l=void 0!==c&&c,g=e.priority,v=void 0!==g&&g,x=e.loading,z=e.lazyRoot,N=void 0===z?null:z,O=e.lazyBoundary,L=e.className,k=e.quality,I=e.width,E=e.height,M=e.style,P=e.objectFit,A=e.objectPosition,R=e.onLoadingComplete,B=e.placeholder,F=void 0===B?"empty":B,H=e.blurDataURL,W=s(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),D=u.useContext(p.ImageConfigContext),V=u.useMemo((function(){var e=m||D||f.imageConfigDefault,t=i(e.deviceSizes).concat(i(e.imageSizes)).sort((function(e,t){return e-t})),n=e.deviceSizes.sort((function(e,t){return e-t}));return a({},e,{allSizes:t,deviceSizes:n})}),[D]),T=W,Z=n?"responsive":"intrinsic";"layout"in T&&(T.layout&&(Z=T.layout),delete T.layout);var q=S;if("loader"in T){if(T.loader){var U=T.loader;q=function(e){e.config;var t=s(e,["config"]);return U(t)}}delete T.loader}var G="";if(function(e){return"object"===typeof e&&(j(e)||function(e){return void 0!==e.src}(e))}(t)){var K=j(t)?t.default:t;if(!K.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(K)));if(H=H||K.blurDataURL,G=K.src,(!Z||"fill"!==Z)&&(E=E||K.height,I=I||K.width,!K.height||!K.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(K)))}var Q=!v&&("lazy"===x||"undefined"===typeof x);((t="string"===typeof t?t:G).startsWith("data:")||t.startsWith("blob:"))&&(l=!0,Q=!1);b.has(t)&&(Q=!1);V.unoptimized&&(l=!0);var Y,J=o(u.useState(!1),2),X=J[0],$=J[1],ee=o(h.useIntersection({rootRef:N,rootMargin:O||"200px",disabled:!Q}),3),te=ee[0],ne=ee[1],re=ee[2],oe=!Q||ne,ie={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ae={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ce=!1,le={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:P,objectPosition:A},se=w(I),ue=w(E),de=w(k);0;var fe=Object.assign({},M,le),he="blur"!==F||X?{}:{backgroundSize:P||"cover",backgroundPosition:A||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(H,'")')};if("fill"===Z)ie.display="block",ie.position="absolute",ie.top=0,ie.left=0,ie.bottom=0,ie.right=0;else if("undefined"!==typeof se&&"undefined"!==typeof ue){var pe=ue/se,ge=isNaN(pe)?"100%":"".concat(100*pe,"%");"responsive"===Z?(ie.display="block",ie.position="relative",ce=!0,ae.paddingTop=ge):"intrinsic"===Z?(ie.display="inline-block",ie.position="relative",ie.maxWidth="100%",ce=!0,ae.maxWidth="100%",Y="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(se,"%27%20height=%27").concat(ue,"%27/%3e")):"fixed"===Z&&(ie.display="inline-block",ie.position="relative",ie.width=se,ie.height=ue)}else 0;var ve={src:y,srcSet:void 0,sizes:void 0};oe&&(ve=_({config:V,src:t,unoptimized:l,layout:Z,width:se,quality:de,sizes:n,loader:q}));var me=t;0;var be,ye="imagesrcset",xe="imagesizes";ye="imageSrcSet",xe="imageSizes";var je=(r(be={},ye,ve.srcSet),r(be,xe,ve.sizes),r(be,"crossOrigin",T.crossOrigin),be),_e=u.default.useLayoutEffect,we=u.useRef(R),Se=u.useRef(t);u.useEffect((function(){we.current=R}),[R]),_e((function(){Se.current!==t&&(re(),Se.current=t)}),[re,t]);var ze=a({isLazy:Q,imgAttributes:ve,heightInt:ue,widthInt:se,qualityInt:de,layout:Z,className:L,imgStyle:fe,blurStyle:he,loading:x,config:V,unoptimized:l,placeholder:F,loader:q,srcString:me,onLoadingCompleteRef:we,setBlurComplete:$,setIntersection:te,isVisible:oe,noscriptSizes:n},T);return u.default.createElement(u.default.Fragment,null,u.default.createElement("span",{style:ie},ce?u.default.createElement("span",{style:ae},Y?u.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:Y}):null):null,u.default.createElement(C,Object.assign({},ze))),v?u.default.createElement(d.default,null,u.default.createElement("link",Object.assign({key:"__nimg-"+ve.src+ve.srcSet+ve.sizes,rel:"preload",as:"image",href:ve.srcSet?void 0:ve.src},je))):null)};var a=n(6495).Z,c=n(2648).Z,l=n(1598).Z,s=n(7273).Z,u=l(n(7294)),d=c(n(5443)),f=n(9309),h=n(7190),p=n(9977),g=(n(3794),n(2392));function v(e){return"/"===e[0]?e.slice(1):e}var m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1},b=new Set,y=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var x=new Map([["default",function(e){var t=e.config,n=e.src,r=e.width,o=e.quality;return n.endsWith(".svg")&&!t.dangerouslyAllowSVG?n:"".concat(g.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(o||75)}],["imgix",function(e){var t=e.config,n=e.src,r=e.width,o=e.quality,i=new URL("".concat(t.path).concat(v(n))),a=i.searchParams;return a.set("auto",a.getAll("auto").join(",")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||r.toString()),o&&a.set("q",o.toString()),i.href}],["cloudinary",function(e){var t=e.config,n=e.src,r=["f_auto","c_limit","w_"+e.width,"q_"+(e.quality||"auto")].join(",")+"/";return"".concat(t.path).concat(r).concat(v(n))}],["akamai",function(e){var t=e.config,n=e.src,r=e.width;return"".concat(t.path).concat(v(n),"?imwidth=").concat(r)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function j(e){return void 0!==e.default}function _(e){var t=e.config,n=e.src,r=e.unoptimized,o=e.layout,a=e.width,c=e.quality,l=e.sizes,s=e.loader;if(r)return{src:n,srcSet:void 0,sizes:void 0};var u=function(e,t,n,r){var o=e.deviceSizes,a=e.allSizes;if(r&&("fill"===n||"responsive"===n)){for(var c,l=/(^|\s)(1?\d?\d)vw/g,s=[];c=l.exec(r);c)s.push(parseInt(c[2]));if(s.length){var u,d=.01*(u=Math).min.apply(u,i(s));return{widths:a.filter((function(e){return e>=o[0]*d})),kind:"w"}}return{widths:a,kind:"w"}}return"number"!==typeof t||"fill"===n||"responsive"===n?{widths:o,kind:"w"}:{widths:i(new Set([t,2*t].map((function(e){return a.find((function(t){return t>=e}))||a[a.length-1]})))),kind:"x"}}(t,a,o,l),d=u.widths,f=u.kind,h=d.length-1;return{sizes:l||"w"!==f?l:"100vw",srcSet:d.map((function(e,r){return"".concat(s({config:t,src:n,quality:c,width:e})," ").concat("w"===f?e:r+1).concat(f)})).join(", "),src:s({config:t,src:n,quality:c,width:d[h]})}}function w(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function S(e){var t,n=(null==(t=e.config)?void 0:t.loader)||"default",r=x.get(n);if(r)return r(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "),". Received: ").concat(n))}function z(e,t,n,r,o,i){e&&e.src!==y&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(b.add(t),"blur"===r&&i(!0),null==o?void 0:o.current)){var n=e.naturalWidth,a=e.naturalHeight;o.current({naturalWidth:n,naturalHeight:a})}})))}var C=function(e){var t=e.imgAttributes,n=(e.heightInt,e.widthInt),r=e.qualityInt,o=e.layout,i=e.className,c=e.imgStyle,l=e.blurStyle,d=e.isLazy,f=e.placeholder,h=e.loading,p=e.srcString,g=e.config,v=e.unoptimized,m=e.loader,b=e.onLoadingCompleteRef,y=e.setBlurComplete,x=e.setIntersection,j=e.onLoad,w=e.onError,S=(e.isVisible,e.noscriptSizes),C=s(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return h=d?"lazy":h,u.default.createElement(u.default.Fragment,null,u.default.createElement("img",Object.assign({},C,t,{decoding:"async","data-nimg":o,className:i,style:a({},c,l),ref:u.useCallback((function(e){x(e),(null==e?void 0:e.complete)&&z(e,p,0,f,b,y)}),[x,p,o,f,b,y]),onLoad:function(e){z(e.currentTarget,p,0,f,b,y),j&&j(e)},onError:function(e){"blur"===f&&y(!0),w&&w(e)}})),(d||"blur"===f)&&u.default.createElement("noscript",null,u.default.createElement("img",Object.assign({},C,_({config:g,src:p,unoptimized:v,layout:o,width:n,quality:r,sizes:S,loader:m}),{decoding:"async","data-nimg":o,style:c,className:i,loading:h}))))};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;n(5753).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(2648).Z,i=n(7273).Z,a=o(n(7294)),c=n(6273),l=n(2725),s=n(3462),u=n(1018),d=n(7190),f=n(1210),h=n(8684),p={};function g(e,t,n,r){if(e&&c.isLocalURL(t)){Promise.resolve(e.prefetch(t,n,r)).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;p[t+"%"+n+(o?"%"+o:"")]=!0}}var v=a.default.forwardRef((function(e,t){var n,o=e.href,v=e.as,m=e.children,b=e.prefetch,y=e.passHref,x=e.replace,j=e.shallow,_=e.scroll,w=e.locale,S=e.onClick,z=e.onMouseEnter,C=e.onTouchStart,N=e.legacyBehavior,O=void 0===N?!0!==Boolean(!1):N,L=i(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=m,!O||"string"!==typeof n&&"number"!==typeof n||(n=a.default.createElement("a",null,n));var k=!1!==b,I=a.default.useContext(s.RouterContext),E=a.default.useContext(u.AppRouterContext);E&&(I=E);var M,P=a.default.useMemo((function(){var e=r(c.resolveHref(I,o,!0),2),t=e[0],n=e[1];return{href:t,as:v?c.resolveHref(I,v):n||t}}),[I,o,v]),A=P.href,R=P.as,B=a.default.useRef(A),F=a.default.useRef(R);O&&(M=a.default.Children.only(n));var H=O?M&&"object"===typeof M&&M.ref:t,W=r(d.useIntersection({rootMargin:"200px"}),3),D=W[0],V=W[1],T=W[2],Z=a.default.useCallback((function(e){F.current===R&&B.current===A||(T(),F.current=R,B.current=A),D(e),H&&("function"===typeof H?H(e):"object"===typeof H&&(H.current=e))}),[R,H,A,T,D]);a.default.useEffect((function(){var e=V&&k&&c.isLocalURL(A),t="undefined"!==typeof w?w:I&&I.locale,n=p[A+"%"+R+(t?"%"+t:"")];e&&!n&&g(I,A,R,{locale:t})}),[R,A,V,w,k,I]);var q={ref:Z,onClick:function(e){O||"function"!==typeof S||S(e),O&&M.props&&"function"===typeof M.props.onClick&&M.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,i,l,s,u,d){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(n)){e.preventDefault();var f=function(){"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:i,locale:s,scroll:l}):t[o?"replace":"push"](n,{forceOptimisticNavigation:!d})};u?a.default.startTransition(f):f()}}(e,I,A,R,x,j,_,w,Boolean(E),k)},onMouseEnter:function(e){O||"function"!==typeof z||z(e),O&&M.props&&"function"===typeof M.props.onMouseEnter&&M.props.onMouseEnter(e),!k&&E||c.isLocalURL(A)&&g(I,A,R,{priority:!0})},onTouchStart:function(e){O||"function"!==typeof C||C(e),O&&M.props&&"function"===typeof M.props.onTouchStart&&M.props.onTouchStart(e),!k&&E||c.isLocalURL(A)&&g(I,A,R,{priority:!0})}};if(!O||y||"a"===M.type&&!("href"in M.props)){var U="undefined"!==typeof w?w:I&&I.locale,G=I&&I.isLocaleDomain&&f.getDomainLocale(R,U,I.locales,I.domainLocales);q.href=G||h.addBasePath(l.addLocale(R,U,I&&I.defaultLocale))}return O?a.default.cloneElement(M,q):a.default.createElement("a",Object.assign({},L,q),n)}));t.default=v,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,s=e.disabled||!a,u=r(o.useState(!1),2),d=u[0],f=u[1],h=r(o.useState(null),2),p=h[0],g=h[1];o.useEffect((function(){if(a){if(s||d)return;if(p&&p.tagName){var e=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=l.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(r&&(t=c.get(r)))return t;var o=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:i,elements:o},l.push(n),c.set(n,t),t}(n),o=r.id,i=r.observer,a=r.elements;return a.set(e,t),i.observe(e),function(){if(a.delete(e),i.unobserve(e),0===a.size){i.disconnect(),c.delete(o);var t=l.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&l.splice(t,1)}}}(p,(function(e){return e&&f(e)}),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!d){var r=i.requestIdleCallback((function(){return f(!0)}));return function(){return i.cancelIdleCallback(r)}}}),[p,s,n,t,d]);var v=o.useCallback((function(){f(!1)}),[]);return[g,d,v]};var o=n(7294),i=n(9311),a="function"===typeof IntersectionObserver,c=new Map,l=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var r=(0,n(2648).Z)(n(7294)),o=r.default.createContext(null);t.AppRouterContext=o;var i=r.default.createContext(null);t.LayoutRouterContext=i;var a=r.default.createContext(null);t.GlobalLayoutRouterContext=a;var c=r.default.createContext(null);t.TemplateContext=c},181:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){r(e,t,n[t])}))}return e}n.r(t),n.d(t,{default:function(){return N}});var i=n(5893),a=(n(906),n(9008)),c=n.n(a),l=n(1664),s=n.n(l),u=n(7294),d=n(1163),f=n(4066),h=n(1585),p=n.n(h);function g(){var e=(0,u.useState)(!1),t=e[0],n=e[1],r=(0,u.useState)(!1),o=r[0],a=r[1],c=(0,u.useState)(!1),l=c[0],h=c[1],g=(0,u.useState)(!1),v=g[0],m=g[1],b=(0,u.useState)(!0),y=b[0],x=b[1],j=(0,d.useRouter)();(0,u.useEffect)((function(){var e=function(){m(window.innerWidth<=798)};e(),window.addEventListener("resize",e);var t=function(){a(!1),n(!1),h(!1)};j.events.on("routeChangeStart",t);var r=window.pageYOffset,o=!1,i=function(){o||(window.requestAnimationFrame((function(){var e=window.pageYOffset;x(e<=r||e<50),r=e,o=!1})),o=!0)};return window.addEventListener("scroll",i),function(){window.removeEventListener("resize",e),window.removeEventListener("scroll",i),j.events.off("routeChangeStart",t)}}),[j]);return(0,i.jsxs)("div",{className:"".concat(p().navbarWrapper," ").concat(y?"":p().hidden),children:[(0,i.jsxs)("div",{className:p().contactInfo,children:[(0,i.jsxs)("div",{className:p().contactLinks,children:[(0,i.jsx)("a",{href:"tel:+1234567890",children:"\ud83d\udcde (123) 456-7890"}),(0,i.jsx)("a",{href:"mailto:info@example.com",children:"\u2709\ufe0f info@example.com"})]}),(0,i.jsx)("div",{className:"".concat(p().socialIcons," ").concat(l?p().open:""),children:v?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("button",{className:"".concat(p().socialMediaButton," ").concat(l?p().open:""),onClick:function(e){e.preventDefault(),h(!l),n(!1)},children:["Social Media",(0,i.jsx)(f.RiI,{className:p().arrow})]}),(0,i.jsxs)("div",{className:p().socialDropdown,children:[(0,i.jsxs)("a",{href:"https://facebook.com",target:"_blank",rel:"noopener noreferrer",children:[(0,i.jsx)(f.tBk,{})," Facebook"]}),(0,i.jsxs)("a",{href:"https://instagram.com",target:"_blank",rel:"noopener noreferrer",children:[(0,i.jsx)(f.Zf_,{})," Instagram"]}),(0,i.jsxs)("a",{href:"https://google.com",target:"_blank",rel:"noopener noreferrer",children:[(0,i.jsx)(f.ldW,{})," Google"]})]})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("a",{href:"https://facebook.com",target:"_blank",rel:"noopener noreferrer",children:(0,i.jsx)(f.tBk,{})}),(0,i.jsx)("a",{href:"https://instagram.com",target:"_blank",rel:"noopener noreferrer",children:(0,i.jsx)(f.Zf_,{})}),(0,i.jsx)("a",{href:"https://google.com",target:"_blank",rel:"noopener noreferrer",children:(0,i.jsx)(f.ldW,{})})]})})]}),(0,i.jsxs)("nav",{className:p().navbar,children:[(0,i.jsx)("div",{className:p().logo,children:(0,i.jsx)(s(),{href:"/",children:"Seattle Outdoor Living"})}),(0,i.jsxs)("div",{className:"".concat(p().navItems," ").concat(t?p().open:""),children:[(0,i.jsx)("div",{className:p().navItem,children:(0,i.jsx)(s(),{href:"/",children:"Home"})}),(0,i.jsxs)("div",{className:"".concat(p().dropdown," ").concat(o?p().open:""),children:[(0,i.jsxs)("button",{className:p().dropbtn,onClick:function(e){e.preventDefault(),a(!o)},children:["Fencing",(0,i.jsx)("i",{className:"".concat(p().arrow," ").concat(o?p().up:"")})]}),(0,i.jsxs)("div",{className:p().dropdownContent,children:[(0,i.jsx)(s(),{href:"/fencing/wood",children:"Wood Fences"}),(0,i.jsx)(s(),{href:"/fencing/vinyl",children:"Vinyl Fences"}),(0,i.jsx)(s(),{href:"/fencing/decorative-iron",children:"Decorative Iron"}),(0,i.jsx)(s(),{href:"/fencing/composite",children:"Composite Fences"})]})]}),(0,i.jsx)("div",{className:p().navItem,children:(0,i.jsx)(s(),{href:"/contact",children:"Contact"})}),(0,i.jsx)("div",{className:p().navItem,children:(0,i.jsx)(s(),{href:"/gallery",children:"Gallery"})}),(0,i.jsx)("div",{className:p().navItem,children:(0,i.jsx)(s(),{href:"/forms",children:"Forms"})}),(0,i.jsx)("div",{className:p().navItem,children:(0,i.jsx)(s(),{href:"/news",children:"News"})})]}),v&&(0,i.jsxs)("button",{className:"".concat(p().hamburger," ").concat(t?p().open:""),onClick:function(){n(!t),h(!1)},children:[(0,i.jsx)("span",{}),(0,i.jsx)("span",{}),(0,i.jsx)("span",{})]})]})]})}var v=n(5675),m=n.n(v),b=n(5606),y=n.n(b);function x(e){var t=e.heroImage,n=e.showHero;return void 0===n||n?(0,i.jsxs)("header",{className:y().header,children:[(0,i.jsx)("div",{className:y().heroImageWrapper,children:(0,i.jsx)(m(),{src:t,alt:"Seattle Outdoor Living Hero Image",layout:"fill",objectFit:"cover",quality:100,priority:!0})}),(0,i.jsxs)("div",{className:y().heroContent,children:[(0,i.jsx)("h1",{children:"Seattle Outdoor Living"}),(0,i.jsx)("p",{children:"Creating beautiful outdoor spaces since 2005"})]})]}):null}var j=n(3952),_=n.n(j);function w(){return(0,i.jsxs)("footer",{className:_().footer,children:[(0,i.jsxs)("div",{className:_().container,children:[(0,i.jsxs)("div",{className:_().column,children:[(0,i.jsx)("h3",{children:"Seattle Outdoor Living"}),(0,i.jsx)("p",{children:"Creating beautiful outdoor spaces since 2005. We specialize in high-quality fencing solutions for your home and property."}),(0,i.jsxs)("div",{className:_().socialIcons,children:[(0,i.jsx)("a",{href:"https://facebook.com",target:"_blank",rel:"noopener noreferrer",children:(0,i.jsx)(f.tBk,{})}),(0,i.jsx)("a",{href:"https://instagram.com",target:"_blank",rel:"noopener noreferrer",children:(0,i.jsx)(f.Zf_,{})}),(0,i.jsx)("a",{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",children:(0,i.jsx)(f.fWC,{})}),(0,i.jsx)("a",{href:"https://linkedin.com",target:"_blank",rel:"noopener noreferrer",children:(0,i.jsx)(f.BUd,{})})]})]}),(0,i.jsxs)("div",{className:_().column,children:[(0,i.jsx)("h4",{children:"Quick Links"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsx)(s(),{href:"/",children:"Home"})}),(0,i.jsx)("li",{children:(0,i.jsx)(s(),{href:"/about",children:"About Us"})}),(0,i.jsx)("li",{children:(0,i.jsx)(s(),{href:"/fencing",children:"Fencing Services"})}),(0,i.jsx)("li",{children:(0,i.jsx)(s(),{href:"/gallery",children:"Project Gallery"})}),(0,i.jsx)("li",{children:(0,i.jsx)(s(),{href:"/contact",children:"Contact Us"})})]})]}),(0,i.jsxs)("div",{className:_().column,children:[(0,i.jsx)("h4",{children:"Fencing Types"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsx)(s(),{href:"/fencing/wood",children:"Wood Fences"})}),(0,i.jsx)("li",{children:(0,i.jsx)(s(),{href:"/fencing/vinyl",children:"Vinyl Fences"})}),(0,i.jsx)("li",{children:(0,i.jsx)(s(),{href:"/fencing/chain-link",children:"Chain Link Fences"})}),(0,i.jsx)("li",{children:(0,i.jsx)(s(),{href:"/fencing/ornamental",children:"Ornamental Fences"})}),(0,i.jsx)("li",{children:(0,i.jsx)(s(),{href:"/fencing/custom",children:"Custom Fencing Solutions"})})]})]}),(0,i.jsxs)("div",{className:_().column,children:[(0,i.jsx)("h4",{children:"Contact Us"}),(0,i.jsxs)("p",{children:["123 Fencing St,",(0,i.jsx)("br",{}),"Seattle, WA 98101"]}),(0,i.jsx)("p",{children:"Phone: (206) 555-0123"}),(0,i.jsx)("p",{children:"Email: info@seattleoutdoorliving.com"}),(0,i.jsxs)("p",{children:["Mon-Fri: 8am - 6pm",(0,i.jsx)("br",{}),"Sat: 10am - 4pm"]})]})]}),(0,i.jsxs)("div",{className:_().bottom,children:[(0,i.jsx)("p",{children:"\xa9 2023 Seattle Outdoor Living. All rights reserved."}),(0,i.jsxs)("p",{children:[(0,i.jsx)(s(),{href:"/privacy-policy",children:"Privacy Policy"})," | ",(0,i.jsx)(s(),{href:"/terms-of-service",children:"Terms of Service"})]})]})]})}var S=n(3853),z=n.n(S);function C(e){var t=e.children,n=e.heroImage,r=e.showHero,o=void 0===r||r;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(c(),{children:[(0,i.jsx)("title",{children:"Seattle Outdoor Living"}),(0,i.jsx)("meta",{name:"description",content:"Seattle's premier outdoor living solutions"}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,i.jsx)(g,{}),o&&(0,i.jsx)(x,{heroImage:n}),(0,i.jsx)("main",{className:z().main,children:t}),(0,i.jsx)(w,{})]})}var N=function(e){var t=e.Component,n=e.pageProps;return(0,i.jsx)(C,{heroImage:n.heroImage,showHero:n.showHero,children:(0,i.jsx)(t,o({},n))})}},3952:function(e){e.exports={footer:"Footer_footer__Tl1eP",container:"Footer_container__iN3aW",column:"Footer_column__58L1O",socialIcons:"Footer_socialIcons__GyWll",bottom:"Footer_bottom__aENe3"}},5606:function(e){e.exports={header:"Header_header__VYZ3G",heroImageWrapper:"Header_heroImageWrapper__fUBKG",heroContent:"Header_heroContent__Tj9oV",headerContent:"Header_headerContent___iXFk",logoContainer:"Header_logoContainer__P7SvP",logo:"Header_logo__6vBZG",navContainer:"Header_navContainer__30bLR"}},3853:function(e){e.exports={container:"Layout_container__S4aNf",main:"Layout_main__c1pHS",footer:"Layout_footer__mj7GQ"}},1585:function(e){e.exports={navbarWrapper:"Navbar_navbarWrapper__N7ElL",hidden:"Navbar_hidden__LgwY5",contactInfo:"Navbar_contactInfo__cR_PN",contactLinks:"Navbar_contactLinks__pPLNm",socialIcons:"Navbar_socialIcons__YxtA8",navbar:"Navbar_navbar__66x_3",logo:"Navbar_logo__E_Sw_",navItems:"Navbar_navItems__18gWd",navItem:"Navbar_navItem__yI0Db",dropbtn:"Navbar_dropbtn__5r3zt",dropdown:"Navbar_dropdown__ZMVPB",dropdownContent:"Navbar_dropdownContent__AjQyH",open:"Navbar_open__TzCF6",arrow:"Navbar_arrow__rE0TX",up:"Navbar_up__iEspe",hamburger:"Navbar_hamburger__i8zx1",socialDropdown:"Navbar_socialDropdown__8Z4Gu",socialMediaButton:"Navbar_socialMediaButton__fg4FS"}},906:function(){},9008:function(e,t,n){e.exports=n(5443)},5675:function(e,t,n){e.exports=n(8045)},1664:function(e,t,n){e.exports=n(8418)},1163:function(e,t,n){e.exports=n(387)},4066:function(e,t,n){"use strict";n.d(t,{MtH:function(){return x},RiI:function(){return j},bUI:function(){return _},Dli:function(){return w},OdJ:function(){return S},tBk:function(){return g},ldW:function(){return v},Zf_:function(){return m},BUd:function(){return b},fkU:function(){return z},bri:function(){return C},QJe:function(){return N},CP_:function(){return O},fWC:function(){return y}});var r=n(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(o),a=["attr","size","title"];function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e){return e&&e.map(((e,t)=>r.createElement(e.tag,u({key:t},e.attr),f(e.child))))}function h(e){return t=>r.createElement(p,l({attr:u({},e.attr)},t),f(e.child))}function p(e){var t=t=>{var n,{attr:o,size:i,title:s}=e,d=c(e,a),f=i||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,d,{className:n,style:u(u({color:e.color||t.color},t.style),e.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),s&&r.createElement("title",null,s),e.children)};return void 0!==i?r.createElement(i.Consumer,null,(e=>t(e))):t(o)}function g(e){return h({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"},child:[]}]})(e)}function v(e){return h({tag:"svg",attr:{viewBox:"0 0 488 512"},child:[{tag:"path",attr:{d:"M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"},child:[]}]})(e)}function m(e){return h({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(e)}function b(e){return h({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"},child:[]}]})(e)}function y(e){return h({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"},child:[]}]})(e)}function x(e){return h({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M97.12 362.63c-8.69-8.69-4.16-6.24-25.12-11.85-9.51-2.55-17.87-7.45-25.43-13.32L1.2 448.7c-4.39 10.77 3.81 22.47 15.43 22.03l52.69-2.01L105.56 507c8 8.44 22.04 5.81 26.43-4.96l52.05-127.62c-10.84 6.04-22.87 9.58-35.31 9.58-19.5 0-37.82-7.59-51.61-21.37zM382.8 448.7l-45.37-111.24c-7.56 5.88-15.92 10.77-25.43 13.32-21.07 5.64-16.45 3.18-25.12 11.85-13.79 13.78-32.12 21.37-51.62 21.37-12.44 0-24.47-3.55-35.31-9.58L252 502.04c4.39 10.77 18.44 13.4 26.43 4.96l36.25-38.28 52.69 2.01c11.62.44 19.82-11.27 15.43-22.03zM263 340c15.28-15.55 17.03-14.21 38.79-20.14 13.89-3.79 24.75-14.84 28.47-28.98 7.48-28.4 5.54-24.97 25.95-45.75 10.17-10.35 14.14-25.44 10.42-39.58-7.47-28.38-7.48-24.42 0-52.83 3.72-14.14-.25-29.23-10.42-39.58-20.41-20.78-18.47-17.36-25.95-45.75-3.72-14.14-14.58-25.19-28.47-28.98-27.88-7.61-24.52-5.62-44.95-26.41-10.17-10.35-25-14.4-38.89-10.61-27.87 7.6-23.98 7.61-51.9 0-13.89-3.79-28.72.25-38.89 10.61-20.41 20.78-17.05 18.8-44.94 26.41-13.89 3.79-24.75 14.84-28.47 28.98-7.47 28.39-5.54 24.97-25.95 45.75-10.17 10.35-14.15 25.44-10.42 39.58 7.47 28.36 7.48 24.4 0 52.82-3.72 14.14.25 29.23 10.42 39.59 20.41 20.78 18.47 17.35 25.95 45.75 3.72 14.14 14.58 25.19 28.47 28.98C104.6 325.96 106.27 325 121 340c13.23 13.47 33.84 15.88 49.74 5.82a39.676 39.676 0 0 1 42.53 0c15.89 10.06 36.5 7.65 49.73-5.82zM97.66 175.96c0-53.03 42.24-96.02 94.34-96.02s94.34 42.99 94.34 96.02-42.24 96.02-94.34 96.02-94.34-42.99-94.34-96.02z"},child:[]}]})(e)}function j(e){return h({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"},child:[]}]})(e)}function _(e){return h({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"},child:[]}]})(e)}function w(e){return h({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"},child:[]}]})(e)}function S(e){return h({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M416 192c0-88.4-93.1-160-208-160S0 103.6 0 192c0 34.3 14.1 65.9 38 92-13.4 30.2-35.5 54.2-35.8 54.5-2.2 2.3-2.8 5.7-1.5 8.7S4.8 352 8 352c36.6 0 66.9-12.3 88.7-25 32.2 15.7 70.3 25 111.3 25 114.9 0 208-71.6 208-160zm122 220c23.9-26 38-57.7 38-92 0-66.9-53.5-124.2-129.3-148.1.9 6.6 1.3 13.3 1.3 20.1 0 105.9-107.7 192-240 192-10.8 0-21.3-.8-31.7-1.9C207.8 439.6 281.8 480 368 480c41 0 79.1-9.2 111.3-25 21.8 12.7 52.1 25 88.7 25 3.2 0 6.1-1.9 7.3-4.8 1.3-2.9.7-6.3-1.5-8.7-.3-.3-22.4-24.2-35.8-54.5z"},child:[]}]})(e)}function z(e){return h({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"},child:[]}]})(e)}function C(e){return h({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z"},child:[]}]})(e)}function N(e){return h({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"},child:[]}]})(e)}function O(e){return h({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M501.1 395.7L384 278.6c-23.1-23.1-57.6-27.6-85.4-13.9L192 158.1V96L64 0 0 64l96 128h62.1l106.6 106.6c-13.6 27.8-9.2 62.3 13.9 85.4l117.1 117.1c14.6 14.6 38.2 14.6 52.7 0l52.7-52.7c14.5-14.6 14.5-38.2 0-52.7zM331.7 225c28.3 0 54.9 11 74.9 31l19.4 19.4c15.8-6.9 30.8-16.5 43.8-29.5 37.1-37.1 49.7-89.3 37.9-136.7-2.2-9-13.5-12.1-20.1-5.5l-74.4 74.4-67.9-11.3L334 98.9l74.4-74.4c6.6-6.6 3.4-17.9-5.7-20.2-47.4-11.7-99.6.9-136.6 37.9-28.5 28.5-41.9 66.1-41.2 103.6l82.1 82.1c8.1-1.9 16.5-2.9 24.7-2.9zm-103.9 82l-56.7-56.7L18.7 402.8c-25 25-25 65.5 0 90.5s65.5 25 90.5 0l123.6-123.6c-7.6-19.9-9.9-41.6-5-62.7zM64 472c-13.2 0-24-10.8-24-24 0-13.3 10.7-24 24-24s24 10.7 24 24c0 13.2-10.7 24-24 24z"},child:[]}]})(e)}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1118),t(387)}));var n=e.O();_N_E=n}]);