"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@t3-oss";
exports.ids = ["vendor-chunks/@t3-oss"];
exports.modules = {

/***/ "(rsc)/../../node_modules/@t3-oss/env-core/dist/index.js":
/*!*********************************************************!*\
  !*** ../../node_modules/@t3-oss/env-core/dist/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createEnv: () => (/* binding */ createEnv)\n/* harmony export */ });\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zod */ \"(rsc)/../../node_modules/zod/lib/index.mjs\");\n\n\nfunction createEnv(opts) {\n    const runtimeEnv = opts.runtimeEnvStrict ?? opts.runtimeEnv ?? process.env;\n    const emptyStringAsUndefined = opts.emptyStringAsUndefined ?? false;\n    if (emptyStringAsUndefined) {\n        for (const [key, value] of Object.entries(runtimeEnv)){\n            if (value === \"\") {\n                delete runtimeEnv[key];\n            }\n        }\n    }\n    const skip = !!opts.skipValidation;\n    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-explicit-any\n    if (skip) return runtimeEnv;\n    const _client = typeof opts.client === \"object\" ? opts.client : {};\n    const _server = typeof opts.server === \"object\" ? opts.server : {};\n    const _shared = typeof opts.shared === \"object\" ? opts.shared : {};\n    const client = zod__WEBPACK_IMPORTED_MODULE_0__.z.object(_client);\n    const server = zod__WEBPACK_IMPORTED_MODULE_0__.z.object(_server);\n    const shared = zod__WEBPACK_IMPORTED_MODULE_0__.z.object(_shared);\n    const isServer = opts.isServer ?? typeof window === \"undefined\";\n    const allClient = client.merge(shared);\n    const allServer = server.merge(shared).merge(client);\n    const parsed = isServer ? allServer.safeParse(runtimeEnv) // on server we can validate all env vars\n     : allClient.safeParse(runtimeEnv); // on client we can only validate the ones that are exposed\n    const onValidationError = opts.onValidationError ?? ((error)=>{\n        console.error(\"❌ Invalid environment variables:\", error.flatten().fieldErrors);\n        throw new Error(\"Invalid environment variables\");\n    });\n    const onInvalidAccess = opts.onInvalidAccess ?? ((_variable)=>{\n        throw new Error(\"❌ Attempted to access a server-side environment variable on the client\");\n    });\n    if (parsed.success === false) {\n        return onValidationError(parsed.error);\n    }\n    const env = new Proxy(parsed.data, {\n        get (target, prop) {\n            if (typeof prop !== \"string\" || prop === \"__esModule\" || prop === \"$$typeof\") return undefined;\n            if (!isServer && opts.clientPrefix && !prop.startsWith(opts.clientPrefix) && shared.shape[prop] === undefined) {\n                return onInvalidAccess(prop);\n            }\n            return target[prop];\n        }\n    });\n    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-explicit-any\n    return env;\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vLi4vbm9kZV9tb2R1bGVzL0B0My1vc3MvZW52LWNvcmUvZGlzdC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUF3Qjs7QUFFeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsa0NBQUM7QUFDcEIsbUJBQW1CLGtDQUFDO0FBQ3BCLG1CQUFtQixrQ0FBQztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFcUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AYm9pbGVycGxhdGUvbmV4dGpzLy4uLy4uL25vZGVfbW9kdWxlcy9AdDMtb3NzL2Vudi1jb3JlL2Rpc3QvaW5kZXguanM/OTRlZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB6IH0gZnJvbSAnem9kJztcblxuZnVuY3Rpb24gY3JlYXRlRW52KG9wdHMpIHtcbiAgICBjb25zdCBydW50aW1lRW52ID0gb3B0cy5ydW50aW1lRW52U3RyaWN0ID8/IG9wdHMucnVudGltZUVudiA/PyBwcm9jZXNzLmVudjtcbiAgICBjb25zdCBlbXB0eVN0cmluZ0FzVW5kZWZpbmVkID0gb3B0cy5lbXB0eVN0cmluZ0FzVW5kZWZpbmVkID8/IGZhbHNlO1xuICAgIGlmIChlbXB0eVN0cmluZ0FzVW5kZWZpbmVkKSB7XG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHJ1bnRpbWVFbnYpKXtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gXCJcIikge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBydW50aW1lRW52W2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3Qgc2tpcCA9ICEhb3B0cy5za2lwVmFsaWRhdGlvbjtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1yZXR1cm4sIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICBpZiAoc2tpcCkgcmV0dXJuIHJ1bnRpbWVFbnY7XG4gICAgY29uc3QgX2NsaWVudCA9IHR5cGVvZiBvcHRzLmNsaWVudCA9PT0gXCJvYmplY3RcIiA/IG9wdHMuY2xpZW50IDoge307XG4gICAgY29uc3QgX3NlcnZlciA9IHR5cGVvZiBvcHRzLnNlcnZlciA9PT0gXCJvYmplY3RcIiA/IG9wdHMuc2VydmVyIDoge307XG4gICAgY29uc3QgX3NoYXJlZCA9IHR5cGVvZiBvcHRzLnNoYXJlZCA9PT0gXCJvYmplY3RcIiA/IG9wdHMuc2hhcmVkIDoge307XG4gICAgY29uc3QgY2xpZW50ID0gei5vYmplY3QoX2NsaWVudCk7XG4gICAgY29uc3Qgc2VydmVyID0gei5vYmplY3QoX3NlcnZlcik7XG4gICAgY29uc3Qgc2hhcmVkID0gei5vYmplY3QoX3NoYXJlZCk7XG4gICAgY29uc3QgaXNTZXJ2ZXIgPSBvcHRzLmlzU2VydmVyID8/IHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCI7XG4gICAgY29uc3QgYWxsQ2xpZW50ID0gY2xpZW50Lm1lcmdlKHNoYXJlZCk7XG4gICAgY29uc3QgYWxsU2VydmVyID0gc2VydmVyLm1lcmdlKHNoYXJlZCkubWVyZ2UoY2xpZW50KTtcbiAgICBjb25zdCBwYXJzZWQgPSBpc1NlcnZlciA/IGFsbFNlcnZlci5zYWZlUGFyc2UocnVudGltZUVudikgLy8gb24gc2VydmVyIHdlIGNhbiB2YWxpZGF0ZSBhbGwgZW52IHZhcnNcbiAgICAgOiBhbGxDbGllbnQuc2FmZVBhcnNlKHJ1bnRpbWVFbnYpOyAvLyBvbiBjbGllbnQgd2UgY2FuIG9ubHkgdmFsaWRhdGUgdGhlIG9uZXMgdGhhdCBhcmUgZXhwb3NlZFxuICAgIGNvbnN0IG9uVmFsaWRhdGlvbkVycm9yID0gb3B0cy5vblZhbGlkYXRpb25FcnJvciA/PyAoKGVycm9yKT0+e1xuICAgICAgICBjb25zb2xlLmVycm9yKFwi4p2MIEludmFsaWQgZW52aXJvbm1lbnQgdmFyaWFibGVzOlwiLCBlcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnMpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGVudmlyb25tZW50IHZhcmlhYmxlc1wiKTtcbiAgICB9KTtcbiAgICBjb25zdCBvbkludmFsaWRBY2Nlc3MgPSBvcHRzLm9uSW52YWxpZEFjY2VzcyA/PyAoKF92YXJpYWJsZSk9PntcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwi4p2MIEF0dGVtcHRlZCB0byBhY2Nlc3MgYSBzZXJ2ZXItc2lkZSBlbnZpcm9ubWVudCB2YXJpYWJsZSBvbiB0aGUgY2xpZW50XCIpO1xuICAgIH0pO1xuICAgIGlmIChwYXJzZWQuc3VjY2VzcyA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIG9uVmFsaWRhdGlvbkVycm9yKHBhcnNlZC5lcnJvcik7XG4gICAgfVxuICAgIGNvbnN0IGVudiA9IG5ldyBQcm94eShwYXJzZWQuZGF0YSwge1xuICAgICAgICBnZXQgKHRhcmdldCwgcHJvcCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBwcm9wICE9PSBcInN0cmluZ1wiIHx8IHByb3AgPT09IFwiX19lc01vZHVsZVwiIHx8IHByb3AgPT09IFwiJCR0eXBlb2ZcIikgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGlmICghaXNTZXJ2ZXIgJiYgb3B0cy5jbGllbnRQcmVmaXggJiYgIXByb3Auc3RhcnRzV2l0aChvcHRzLmNsaWVudFByZWZpeCkgJiYgc2hhcmVkLnNoYXBlW3Byb3BdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb25JbnZhbGlkQWNjZXNzKHByb3ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRhcmdldFtwcm9wXTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLXJldHVybiwgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgIHJldHVybiBlbnY7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZUVudiB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/../../node_modules/@t3-oss/env-core/dist/index.js\n");

/***/ }),

/***/ "(rsc)/../../node_modules/@t3-oss/env-nextjs/dist/index.js":
/*!***********************************************************!*\
  !*** ../../node_modules/@t3-oss/env-nextjs/dist/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createEnv: () => (/* binding */ createEnv)\n/* harmony export */ });\n/* harmony import */ var _t3_oss_env_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @t3-oss/env-core */ \"(rsc)/../../node_modules/@t3-oss/env-core/dist/index.js\");\n\n\nconst CLIENT_PREFIX = \"NEXT_PUBLIC_\";\nfunction createEnv(opts) {\n    const client = typeof opts.client === \"object\" ? opts.client : {};\n    const server = typeof opts.server === \"object\" ? opts.server : {};\n    const shared = opts.shared;\n    const runtimeEnv = opts.runtimeEnv ? opts.runtimeEnv : {\n        ...process.env,\n        ...opts.experimental__runtimeEnv\n    };\n    return (0,_t3_oss_env_core__WEBPACK_IMPORTED_MODULE_0__.createEnv)({\n        ...opts,\n        shared,\n        client,\n        server,\n        clientPrefix: CLIENT_PREFIX,\n        runtimeEnv\n    });\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vLi4vbm9kZV9tb2R1bGVzL0B0My1vc3MvZW52LW5leHRqcy9kaXN0L2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTREOztBQUU1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDJEQUFXO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFcUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AYm9pbGVycGxhdGUvbmV4dGpzLy4uLy4uL25vZGVfbW9kdWxlcy9AdDMtb3NzL2Vudi1uZXh0anMvZGlzdC9pbmRleC5qcz85YzRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUVudiBhcyBjcmVhdGVFbnYkMSB9IGZyb20gJ0B0My1vc3MvZW52LWNvcmUnO1xuXG5jb25zdCBDTElFTlRfUFJFRklYID0gXCJORVhUX1BVQkxJQ19cIjtcbmZ1bmN0aW9uIGNyZWF0ZUVudihvcHRzKSB7XG4gICAgY29uc3QgY2xpZW50ID0gdHlwZW9mIG9wdHMuY2xpZW50ID09PSBcIm9iamVjdFwiID8gb3B0cy5jbGllbnQgOiB7fTtcbiAgICBjb25zdCBzZXJ2ZXIgPSB0eXBlb2Ygb3B0cy5zZXJ2ZXIgPT09IFwib2JqZWN0XCIgPyBvcHRzLnNlcnZlciA6IHt9O1xuICAgIGNvbnN0IHNoYXJlZCA9IG9wdHMuc2hhcmVkO1xuICAgIGNvbnN0IHJ1bnRpbWVFbnYgPSBvcHRzLnJ1bnRpbWVFbnYgPyBvcHRzLnJ1bnRpbWVFbnYgOiB7XG4gICAgICAgIC4uLnByb2Nlc3MuZW52LFxuICAgICAgICAuLi5vcHRzLmV4cGVyaW1lbnRhbF9fcnVudGltZUVudlxuICAgIH07XG4gICAgcmV0dXJuIGNyZWF0ZUVudiQxKHtcbiAgICAgICAgLi4ub3B0cyxcbiAgICAgICAgc2hhcmVkLFxuICAgICAgICBjbGllbnQsXG4gICAgICAgIHNlcnZlcixcbiAgICAgICAgY2xpZW50UHJlZml4OiBDTElFTlRfUFJFRklYLFxuICAgICAgICBydW50aW1lRW52XG4gICAgfSk7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZUVudiB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/../../node_modules/@t3-oss/env-nextjs/dist/index.js\n");

/***/ })

};
;