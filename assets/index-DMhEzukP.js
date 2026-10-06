import { T as f, A as p, P as e, __tla as __tla_0 } from "./index-CP3ROg4i.js";
import { a as K, __tla as __tla_1 } from "./index-CP3ROg4i.js";
import "./crypto-CvxmDsJu.js";
import { L as t, __tla as __tla_2 } from "./index-7X6IHuYr.js";
import { p as s, u as m, b as c, __tla as __tla_3 } from "./web3-Dwh31gFC.js";
import { __tla as __tla_4 } from "./api-JQ13yNkJ.js";
import { __tla as __tla_5 } from "./wormhole-DLdMj1-J.js";
import "./vendor-C3gEtrcs.js";
let d, O, A, R;
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
  })(),
  (() => {
    try {
      return __tla_2;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_3;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_4;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_5;
    } catch {
    }
  })()
]).then(async () => {
  O = class extends Error {
    constructor(r) {
      super(r);
    }
  };
  A = class extends O {
    constructor() {
      super(...arguments), this.name = "TokenOwnerOffCurveError";
    }
  };
  d = t.struct([
    t.u32("mintAuthorityOption"),
    s("mintAuthority"),
    m("supply"),
    t.u8("decimals"),
    c("isInitialized"),
    t.u32("freezeAuthorityOption"),
    s("freezeAuthority")
  ]);
  d.span;
  R = async function(o, r, i = false, u = f, n = p) {
    if (!i && !e.isOnCurve(r.toBuffer())) throw new A();
    const [a] = await e.findProgramAddress([
      r.toBuffer(),
      u.toBuffer(),
      o.toBuffer()
    ], n);
    return a;
  };
});
export {
  p as ASSOCIATED_TOKEN_PROGRAM_ID,
  d as MintLayout,
  K as TOKEN_2022_PROGRAM_ID,
  f as TOKEN_PROGRAM_ID,
  O as TokenError,
  A as TokenOwnerOffCurveError,
  __tla,
  R as getAssociatedTokenAddress
};
