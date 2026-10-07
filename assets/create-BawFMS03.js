import { k as d, __tla as __tla_0 } from "./index-B9aAL_1d.js";
import { d as n, a as s, s as u, e as i, p as m, h as p, __tla as __tla_1 } from "./api-BSeuNwV4.js";
let f;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_1;
    } catch {
    }
  })()
]).then(async () => {
  function t(o) {
    return [
      ...i,
      m(o)
    ];
  }
  f = function(o, e) {
    const [r, c] = n(o), a = s(t(o), e);
    return {
      protocolName: r,
      payloadName: c,
      payloadLiteral: o,
      ...s(p, e),
      ...a,
      hash: d(u(t(o), a))
    };
  };
});
export {
  __tla,
  f as c
};
