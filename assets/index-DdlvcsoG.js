import { _ as r, __tla as __tla_0 } from "./index-B9aAL_1d.js";
import "./vendor-C3gEtrcs.js";
import "./crypto-CvxmDsJu.js";
let a;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let o;
  o = {
    type: "sync",
    importFFI: () => r(() => import("./ffi-Boa1QuFa.js"), []).then((t) => t.QuickJSFFI),
    importModuleLoader: () => r(() => import("./emscripten-module.browser-Dc_1vh4d.js"), []).then((t) => t.default)
  };
  a = o;
});
export {
  __tla,
  a as default
};
