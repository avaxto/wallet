var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var __privateWrapper = (obj, member, setter, getter) => ({
  set _(value) {
    __privateSet(obj, member, value, setter);
  },
  get _() {
    return __privateGet(obj, member, getter);
  }
});
import { EvmWormholeCore as r1, __tla as __tla_0 } from "./index-CmFO2LcR.js";
import { P as k6, t as $0, G as j1, U as ee, L as D0, F as te, s as x6, b7 as v6, b2 as ne, b0 as ae, __tla as __tla_1 } from "./api-JQ13yNkJ.js";
import { aN as s1, c as W0, aO as re, ae as se, aE as i1, __tla as __tla_2 } from "./wormhole-DLdMj1-J.js";
import { Q as w0, R as _, X as ie, a0 as R6, a1 as U0, Z as r0, W as f1, Y as c1, _ as b1, __tla as __tla_3 } from "./platform-pwlICwcg.js";
import { k as fe, __tla as __tla_4 } from "./index-7X6IHuYr.js";
import { W as ce } from "./weth-CkpMya9H.js";
import { __tla as __tla_5 } from "./create-DJGrnIqz.js";
import "./crypto-CvxmDsJu.js";
import { __tla as __tla_6 } from "./balances-Dj6N520d.js";
import "./vendor-C3gEtrcs.js";
let g6, c6, o5;
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
  })(),
  (() => {
    try {
      return __tla_6;
    } catch {
    }
  })()
]).then(async () => {
  var _e2, _e3, _e4, _t2, _s6_instances, n_fn, _e5, _t3, _n, _a, _r, _o6_instances, s_fn, i_fn, _e6, _e7, _t4, _M_instances, n_fn2, _A_instances, e_fn, _x0_instances, e_fn2, _e8, _t5, _n2, _a2, _V_instances, r_fn, s_fn2, _e9, _e10, _e11, _e12, _e13, _a3;
  c6 = class {
    constructor(e, t, n, r) {
      __publicField(this, "network");
      __publicField(this, "chain");
      __publicField(this, "provider");
      __publicField(this, "contracts");
      __publicField(this, "tokenBridge");
      __publicField(this, "core");
      __publicField(this, "tokenBridgeAddress");
      __publicField(this, "chainId");
      this.network = e, this.chain = t, this.provider = n, this.contracts = r, this.chainId = s1.get(e, t);
      const s = this.contracts.tokenBridge;
      if (!s) throw new Error(`Wormhole Token Bridge contract for domain ${t} not found`);
      this.tokenBridgeAddress = s, this.tokenBridge = Q1.connect(this.tokenBridgeAddress, n), this.core = new r1(e, t, n, r);
    }
    static async fromRpc(e, t) {
      const [n, r] = await w0.chainFromRpc(e), s = t[r];
      if (s.network !== n) throw new Error(`Network mismatch: ${s.network} != ${n}`);
      return new c6(n, r, e, s.contracts);
    }
    async isWrappedAsset(e) {
      return await this.tokenBridge.isWrappedAsset(e.toString());
    }
    async getOriginalAsset(e) {
      if (!await this.isWrappedAsset(e)) throw k6(e.toString());
      const t = w0.getTokenImplementation(this.provider, e.toString()), [n, r] = await Promise.all([
        t.chainId().then(Number).then($0).then(j1),
        t.nativeContract().then((s) => new ee(s))
      ]);
      return {
        chain: n,
        address: r
      };
    }
    async getTokenUniversalAddress(e) {
      return new _(e).toUniversalAddress();
    }
    async getTokenNativeAddress(e, t) {
      return new _(t).toNative();
    }
    async hasWrappedAsset(e) {
      try {
        return await this.getWrappedAsset(e), true;
      } catch {
      }
      return false;
    }
    async getWrappedAsset(e) {
      if (W0(e.address)) throw new Error("native asset cannot be a wrapped asset");
      const t = await this.tokenBridge.wrappedAsset($0(e.chain), e.address.toUniversalAddress().toString());
      if (t === ie) throw k6(e.address.toUniversalAddress().toString());
      return new _(t);
    }
    async isTransferCompleted(e) {
      return this.tokenBridge.isTransferCompleted(fe(e.hash));
    }
    async *createAttestation(e) {
      const t = await this.core.getMessageFee();
      yield this.createUnsignedTx(await this.tokenBridge.attestToken.populateTransaction(e.toString(), 0, {
        value: t
      }), "TokenBridge.createAttestation");
    }
    async *submitAttestation(e) {
      const t = await this.hasWrappedAsset({
        ...e.payload.token
      }) ? "updateWrapped" : "createWrapped";
      yield this.createUnsignedTx(await this.tokenBridge[t].populateTransaction(D0(e)), "TokenBridge." + t);
    }
    async *transfer(e, t, n, r, s) {
      const i = new _(e).toString(), f = $0(t.chain), c = t.address.toUniversalAddress().toUint8Array(), b = await this.core.getMessageFee();
      if (W0(n)) {
        const o = await (s === void 0 ? this.tokenBridge.wrapAndTransferETH.populateTransaction(f, c, R6, U0, {
          value: r + b
        }) : this.tokenBridge.wrapAndTransferETHWithPayload.populateTransaction(f, c, U0, s, {
          value: r + b
        }));
        yield this.createUnsignedTx(r0(o, i), "TokenBridge.wrapAndTransferETH" + (s === void 0 ? "" : "WithPayload"));
      } else {
        const o = new _(n).toString(), u = w0.getTokenImplementation(this.provider, o);
        if (await u.allowance(i, this.tokenBridge.target) < r) {
          const E = await u.approve.populateTransaction(this.tokenBridge.target, r);
          yield this.createUnsignedTx(r0(E, i), "TokenBridge.Approve");
        }
        const y = [
          o,
          r,
          f,
          c
        ], w = await (s === void 0 ? this.tokenBridge.transferTokens.populateTransaction(...y, R6, U0, {
          value: b
        }) : this.tokenBridge.transferTokensWithPayload.populateTransaction(...y, U0, s, {
          value: b
        }));
        yield this.createUnsignedTx(r0(w, i), "TokenBridge.transferTokens" + (s === void 0 ? "" : "WithPayload"));
      }
    }
    async *redeem(e, t, n = true) {
      const r = new _(e).toString();
      if (t.payloadName === "TransferWithPayload" && t.payload.token.chain !== this.chain) {
        const i = new _(t.payload.from).unwrap();
        if (i !== r) throw new Error(`VAA.from (${i}) does not match sender (${r})`);
      }
      if (t.payload.token.chain === this.chain) {
        const i = await this.getWeth();
        if (new _(t.payload.token.address).unwrap() === i && n) {
          const c = await this.tokenBridge.completeTransferAndUnwrapETH.populateTransaction(D0(t));
          yield this.createUnsignedTx(r0(c, r), "TokenBridge.completeTransferAndUnwrapETH");
          return;
        }
      }
      const s = await this.tokenBridge.completeTransfer.populateTransaction(D0(t));
      yield this.createUnsignedTx(r0(s, r), "TokenBridge.completeTransfer");
    }
    async getWrappedNative() {
      const e = await this.getWeth();
      return te(this.chain, e);
    }
    async getWeth() {
      var _a4;
      return ((_a4 = ce[this.network]) == null ? void 0 : _a4[this.chain]) ?? this.tokenBridge.WETH();
    }
    createUnsignedTx(e, t, n = false) {
      return new f1(c1(e, this.chainId), this.network, this.chain, t, n);
    }
  };
  const be = "6.17.0";
  function oe(a, e, t) {
    const n = e.split("|").map((s) => s.trim());
    for (let s = 0; s < n.length; s++) switch (e) {
      case "any":
        return;
      case "bigint":
      case "boolean":
      case "number":
      case "string":
        if (typeof a === e) return;
    }
    const r = new Error(`invalid value for type ${e}`);
    throw r.code = "INVALID_ARGUMENT", r.argument = `value.${t}`, r.value = a, r;
  }
  async function n6(a) {
    const e = Object.keys(a);
    return (await Promise.all(e.map((n) => Promise.resolve(a[n])))).reduce((n, r, s) => (n[e[s]] = r, n), {});
  }
  function m(a, e, t) {
    for (let n in e) {
      let r = e[n];
      const s = t ? t[n] : null;
      s && oe(r, s, n), Object.defineProperty(a, n, {
        enumerable: true,
        value: r,
        writable: false
      });
    }
  }
  function l0(a, e) {
    if (a == null) return "null";
    if (e == null && (e = /* @__PURE__ */ new Set()), typeof a == "object") {
      if (e.has(a)) return "[Circular]";
      e.add(a);
    }
    if (Array.isArray(a)) return "[ " + a.map((t) => l0(t, e)).join(", ") + " ]";
    if (a instanceof Uint8Array) {
      const t = "0123456789abcdef";
      let n = "0x";
      for (let r = 0; r < a.length; r++) n += t[a[r] >> 4], n += t[a[r] & 15];
      return n;
    }
    if (typeof a == "object" && typeof a.toJSON == "function") return l0(a.toJSON(), e);
    switch (typeof a) {
      case "boolean":
      case "number":
      case "symbol":
        return a.toString();
      case "bigint":
        return BigInt(a).toString();
      case "string":
        return JSON.stringify(a);
      case "object": {
        const t = Object.keys(a);
        return t.sort(), "{ " + t.map((n) => `${l0(n, e)}: ${l0(a[n], e)}`).join(", ") + " }";
      }
    }
    return "[ COULD NOT SERIALIZE ]";
  }
  function y0(a, e) {
    return a && a.code === e;
  }
  function o1(a) {
    return y0(a, "CALL_EXCEPTION");
  }
  function T0(a, e, t) {
    let n = a;
    {
      const s = [];
      if (t) {
        if ("message" in t || "code" in t || "name" in t) throw new Error(`value will overwrite populated values: ${l0(t)}`);
        for (const i in t) {
          if (i === "shortMessage") continue;
          const f = t[i];
          s.push(i + "=" + l0(f));
        }
      }
      s.push(`code=${e}`), s.push(`version=${be}`), s.length && (a += " (" + s.join(", ") + ")");
    }
    let r;
    switch (e) {
      case "INVALID_ARGUMENT":
        r = new TypeError(a);
        break;
      case "NUMERIC_FAULT":
      case "BUFFER_OVERRUN":
        r = new RangeError(a);
        break;
      default:
        r = new Error(a);
    }
    return m(r, {
      code: e
    }), t && Object.assign(r, t), r.shortMessage == null && m(r, {
      shortMessage: n
    }), r;
  }
  function h(a, e, t, n) {
    if (!a) throw T0(e, t, n);
  }
  function d(a, e, t, n) {
    h(a, e, "INVALID_ARGUMENT", {
      argument: t,
      value: n
    });
  }
  function d1(a, e, t) {
    t == null && (t = ""), t && (t = ": " + t), h(a >= e, "missing argument" + t, "MISSING_ARGUMENT", {
      count: a,
      expectedCount: e
    }), h(a <= e, "too many arguments" + t, "UNEXPECTED_ARGUMENT", {
      count: a,
      expectedCount: e
    });
  }
  [
    "NFD",
    "NFC",
    "NFKD",
    "NFKC"
  ].reduce((a, e) => {
    try {
      if ("test".normalize(e) !== "test") throw new Error("bad");
      if (e === "NFD" && "\xE9".normalize("NFD") !== "e\u0301") throw new Error("broken");
      a.push(e);
    } catch {
    }
    return a;
  }, []);
  function b6(a, e, t) {
    if (t == null && (t = ""), a !== e) {
      let n = t, r = "new";
      t && (n += ".", r += " " + t), h(false, `private constructor; use ${n}from* methods`, "UNSUPPORTED_OPERATION", {
        operation: r
      });
    }
  }
  function u1(a, e, t) {
    if (a instanceof Uint8Array) return t ? new Uint8Array(a) : a;
    if (typeof a == "string" && a.length % 2 === 0 && a.match(/^0x[0-9a-f]*$/i)) {
      const n = new Uint8Array((a.length - 2) / 2);
      let r = 2;
      for (let s = 0; s < n.length; s++) n[s] = parseInt(a.substring(r, r + 2), 16), r += 2;
      return n;
    }
    d(false, "invalid BytesLike value", e || "value", a);
  }
  function S(a, e) {
    return u1(a, e, false);
  }
  function H(a, e) {
    return u1(a, e, true);
  }
  function J(a, e) {
    return !(typeof a != "string" || !a.match(/^0x[0-9A-Fa-f]*$/) || typeof e == "number" && a.length !== 2 + 2 * e || e === true && a.length % 2 !== 0);
  }
  function de(a) {
    return J(a, true) || a instanceof Uint8Array;
  }
  const N6 = "0123456789abcdef";
  function R(a) {
    const e = S(a);
    let t = "0x";
    for (let n = 0; n < e.length; n++) {
      const r = e[n];
      t += N6[(r & 240) >> 4] + N6[r & 15];
    }
    return t;
  }
  function f0(a) {
    return "0x" + a.map((e) => R(e).substring(2)).join("");
  }
  function a0(a, e, t) {
    const n = S(a);
    return t != null && t > n.length && h(false, "cannot slice beyond data bounds", "BUFFER_OVERRUN", {
      buffer: n,
      length: n.length,
      offset: t
    }), R(n.slice(e ?? 0, t ?? n.length));
  }
  function l1(a, e, t) {
    const n = S(a);
    h(e >= n.length, "padding exceeds data length", "BUFFER_OVERRUN", {
      buffer: new Uint8Array(n),
      length: e,
      offset: e + 1
    });
    const r = new Uint8Array(e);
    return r.fill(0), t ? r.set(n, e - n.length) : r.set(n, 0), R(r);
  }
  function ue(a, e) {
    return l1(a, e, true);
  }
  function le(a, e) {
    return l1(a, e, false);
  }
  const v0 = BigInt(0), F = BigInt(1), p0 = 9007199254740991;
  function pe(a, e) {
    const t = G0(a, "value"), n = BigInt(e0(e, "width"));
    if (h(t >> n === v0, "overflow", "NUMERIC_FAULT", {
      operation: "fromTwos",
      fault: "overflow",
      value: a
    }), t >> n - F) {
      const r = (F << n) - F;
      return -((~t & r) + F);
    }
    return t;
  }
  function ye(a, e) {
    let t = j(a, "value");
    const n = BigInt(e0(e, "width")), r = F << n - F;
    if (t < v0) {
      t = -t, h(t <= r, "too low", "NUMERIC_FAULT", {
        operation: "toTwos",
        fault: "overflow",
        value: a
      });
      const s = (F << n) - F;
      return (~t & s) + F;
    } else h(t < r, "too high", "NUMERIC_FAULT", {
      operation: "toTwos",
      fault: "overflow",
      value: a
    });
    return t;
  }
  function C0(a, e) {
    const t = G0(a, "value"), n = BigInt(e0(e, "bits"));
    return t & (F << n) - F;
  }
  function j(a, e) {
    switch (typeof a) {
      case "bigint":
        return a;
      case "number":
        return d(Number.isInteger(a), "underflow", e || "value", a), d(a >= -p0 && a <= p0, "overflow", e || "value", a), BigInt(a);
      case "string":
        try {
          if (a === "") throw new Error("empty string");
          return a[0] === "-" && a[1] !== "-" ? -BigInt(a.substring(1)) : BigInt(a);
        } catch (t) {
          d(false, `invalid BigNumberish string: ${t.message}`, e || "value", a);
        }
    }
    d(false, "invalid BigNumberish value", e || "value", a);
  }
  function G0(a, e) {
    const t = j(a, e);
    return h(t >= v0, "unsigned value cannot be negative", "NUMERIC_FAULT", {
      fault: "overflow",
      operation: "getUint",
      value: a
    }), t;
  }
  const O6 = "0123456789abcdef";
  function p1(a) {
    if (a instanceof Uint8Array) {
      let e = "0x0";
      for (const t of a) e += O6[t >> 4], e += O6[t & 15];
      return BigInt(e);
    }
    return j(a);
  }
  function e0(a, e) {
    switch (typeof a) {
      case "bigint":
        return d(a >= -p0 && a <= p0, "overflow", e || "value", a), Number(a);
      case "number":
        return d(Number.isInteger(a), "underflow", e || "value", a), d(a >= -p0 && a <= p0, "overflow", e || "value", a), a;
      case "string":
        try {
          if (a === "") throw new Error("empty string");
          return e0(BigInt(a), e);
        } catch (t) {
          d(false, `invalid numeric string: ${t.message}`, e || "value", a);
        }
    }
    d(false, "invalid numeric value", e || "value", a);
  }
  function he(a) {
    return e0(p1(a));
  }
  function y1(a, e) {
    const t = G0(a, "value");
    let n = t.toString(16);
    if (e == null) n.length % 2 && (n = "0" + n);
    else {
      const r = e0(e, "width");
      if (r === 0 && t === v0) return "0x";
      for (h(r * 2 >= n.length, `value exceeds width (${r} bytes)`, "NUMERIC_FAULT", {
        operation: "toBeHex",
        fault: "overflow",
        value: a
      }); n.length < r * 2; ) n = "0" + n;
    }
    return "0x" + n;
  }
  function me(a, e) {
    const t = G0(a, "value");
    if (t === v0) return new Uint8Array(0);
    let n = t.toString(16);
    n.length % 2 && (n = "0" + n);
    const r = new Uint8Array(n.length / 2);
    for (let s = 0; s < r.length; s++) {
      const i = s * 2;
      r[s] = parseInt(n.substring(i, i + 2), 16);
    }
    return r;
  }
  class ge {
    constructor(e, t, n) {
      __publicField(this, "filter");
      __publicField(this, "emitter");
      __privateAdd(this, _e2);
      __privateSet(this, _e2, t), m(this, {
        emitter: e,
        filter: n
      });
    }
    async removeListener() {
      __privateGet(this, _e2) != null && await this.emitter.off(this.filter, __privateGet(this, _e2));
    }
  }
  _e2 = new WeakMap();
  function we(a, e, t, n, r) {
    d(false, `invalid codepoint at offset ${e}; ${a}`, "bytes", t);
  }
  function h1(a, e, t, n, r) {
    if (a === "BAD_PREFIX" || a === "UNEXPECTED_CONTINUE") {
      let s = 0;
      for (let i = e + 1; i < t.length && t[i] >> 6 === 2; i++) s++;
      return s;
    }
    return a === "OVERRUN" ? t.length - e - 1 : 0;
  }
  function Te(a, e, t, n, r) {
    return a === "OVERLONG" ? (d(typeof r == "number", "invalid bad code point for replacement", "badCodepoint", r), n.push(r), 0) : (n.push(65533), h1(a, e, t));
  }
  const Ee = Object.freeze({
    error: we,
    ignore: h1,
    replace: Te
  });
  function Ae(a, e) {
    e == null && (e = Ee.error);
    const t = S(a, "bytes"), n = [];
    let r = 0;
    for (; r < t.length; ) {
      const s = t[r++];
      if (s >> 7 === 0) {
        n.push(s);
        continue;
      }
      let i = null, f = null;
      if ((s & 224) === 192) i = 1, f = 127;
      else if ((s & 240) === 224) i = 2, f = 2047;
      else if ((s & 248) === 240) i = 3, f = 65535;
      else {
        (s & 192) === 128 ? r += e("UNEXPECTED_CONTINUE", r - 1, t, n) : r += e("BAD_PREFIX", r - 1, t, n);
        continue;
      }
      if (r - 1 + i >= t.length) {
        r += e("OVERRUN", r - 1, t, n);
        continue;
      }
      let c = s & (1 << 8 - i - 1) - 1;
      for (let b = 0; b < i; b++) {
        let o = t[r];
        if ((o & 192) != 128) {
          r += e("MISSING_CONTINUE", r, t, n), c = null;
          break;
        }
        c = c << 6 | o & 63, r++;
      }
      if (c !== null) {
        if (c > 1114111) {
          r += e("OUT_OF_RANGE", r - 1 - i, t, n, c);
          continue;
        }
        if (c >= 55296 && c <= 57343) {
          r += e("UTF16_SURROGATE", r - 1 - i, t, n, c);
          continue;
        }
        if (c <= f) {
          r += e("OVERLONG", r - 1 - i, t, n, c);
          continue;
        }
        n.push(c);
      }
    }
    return n;
  }
  function m1(a, e) {
    d(typeof a == "string", "invalid string value", "str", a);
    let t = [];
    for (let n = 0; n < a.length; n++) {
      const r = a.charCodeAt(n);
      if (r < 128) t.push(r);
      else if (r < 2048) t.push(r >> 6 | 192), t.push(r & 63 | 128);
      else if ((r & 64512) == 55296) {
        n++;
        const s = a.charCodeAt(n);
        d(n < a.length && (s & 64512) === 56320, "invalid surrogate pair", "str", a);
        const i = 65536 + ((r & 1023) << 10) + (s & 1023);
        t.push(i >> 18 | 240), t.push(i >> 12 & 63 | 128), t.push(i >> 6 & 63 | 128), t.push(i & 63 | 128);
      } else t.push(r >> 12 | 224), t.push(r >> 6 & 63 | 128), t.push(r & 63 | 128);
    }
    return new Uint8Array(t);
  }
  function ke(a) {
    return a.map((e) => e <= 65535 ? String.fromCharCode(e) : (e -= 65536, String.fromCharCode((e >> 10 & 1023) + 55296, (e & 1023) + 56320))).join("");
  }
  function xe(a, e) {
    return ke(Ae(a, e));
  }
  function I6(a) {
    const e = [];
    for (; a; ) e.unshift(a & 255), a >>= 8;
    return e;
  }
  function g1(a) {
    if (Array.isArray(a)) {
      let n = [];
      if (a.forEach(function(s) {
        n = n.concat(g1(s));
      }), n.length <= 55) return n.unshift(192 + n.length), n;
      const r = I6(n.length);
      return r.unshift(247 + r.length), r.concat(n);
    }
    const e = Array.prototype.slice.call(S(a, "object"));
    if (e.length === 1 && e[0] <= 127) return e;
    if (e.length <= 55) return e.unshift(128 + e.length), e;
    const t = I6(e.length);
    return t.unshift(183 + t.length), t.concat(e);
  }
  const P6 = "0123456789abcdef";
  function ve(a) {
    let e = "0x";
    for (const t of g1(a)) e += P6[t >> 4], e += P6[t & 15];
    return e;
  }
  const O = 32, a6 = new Uint8Array(O), Re = [
    "then"
  ], B0 = {}, w1 = /* @__PURE__ */ new WeakMap();
  function s0(a) {
    return w1.get(a);
  }
  function U6(a, e) {
    w1.set(a, e);
  }
  function h0(a, e) {
    const t = new Error(`deferred error during ABI decoding triggered accessing ${a}`);
    throw t.error = e, t;
  }
  function r6(a, e, t) {
    return a.indexOf(null) >= 0 ? e.map((n, r) => n instanceof K ? r6(s0(n), n, t) : n) : a.reduce((n, r, s) => {
      let i = e.getValue(r);
      return r in n || (t && i instanceof K && (i = r6(s0(i), i, t)), n[r] = i), n;
    }, {});
  }
  const _K = class _K extends Array {
    constructor(...e) {
      const t = e[0];
      let n = e[1], r = (e[2] || []).slice(), s = true;
      t !== B0 && (n = e, r = [], s = false);
      super(n.length);
      __privateAdd(this, _e3);
      n.forEach((c, b) => {
        this[b] = c;
      });
      const i = r.reduce((c, b) => (typeof b == "string" && c.set(b, (c.get(b) || 0) + 1), c), /* @__PURE__ */ new Map());
      if (U6(this, Object.freeze(n.map((c, b) => {
        const o = r[b];
        return o != null && i.get(o) === 1 ? o : null;
      }))), __privateSet(this, _e3, []), __privateGet(this, _e3) == null && __privateGet(this, _e3), !s) return;
      Object.freeze(this);
      const f = new Proxy(this, {
        get: (c, b, o) => {
          if (typeof b == "string") {
            if (b.match(/^[0-9]+$/)) {
              const l = e0(b, "%index");
              if (l < 0 || l >= this.length) throw new RangeError("out of result range");
              const y = c[l];
              return y instanceof Error && h0(`index ${l}`, y), y;
            }
            if (Re.indexOf(b) >= 0) return Reflect.get(c, b, o);
            const u = c[b];
            if (u instanceof Function) return function(...l) {
              return u.apply(this === o ? c : this, l);
            };
            if (!(b in c)) return c.getValue.apply(this === o ? c : this, [
              b
            ]);
          }
          return Reflect.get(c, b, o);
        }
      });
      return U6(f, s0(this)), f;
    }
    toArray(e) {
      const t = [];
      return this.forEach((n, r) => {
        n instanceof Error && h0(`index ${r}`, n), e && n instanceof _K && (n = n.toArray(e)), t.push(n);
      }), t;
    }
    toObject(e) {
      const t = s0(this);
      return t.reduce((n, r, s) => (h(r != null, `value at index ${s} unnamed`, "UNSUPPORTED_OPERATION", {
        operation: "toObject()"
      }), r6(t, this, e)), {});
    }
    slice(e, t) {
      e == null && (e = 0), e < 0 && (e += this.length, e < 0 && (e = 0)), t == null && (t = this.length), t < 0 && (t += this.length, t < 0 && (t = 0)), t > this.length && (t = this.length);
      const n = s0(this), r = [], s = [];
      for (let i = e; i < t; i++) r.push(this[i]), s.push(n[i]);
      return new _K(B0, r, s);
    }
    filter(e, t) {
      const n = s0(this), r = [], s = [];
      for (let i = 0; i < this.length; i++) {
        const f = this[i];
        f instanceof Error && h0(`index ${i}`, f), e.call(t, f, i, this) && (r.push(f), s.push(n[i]));
      }
      return new _K(B0, r, s);
    }
    map(e, t) {
      const n = [];
      for (let r = 0; r < this.length; r++) {
        const s = this[r];
        s instanceof Error && h0(`index ${r}`, s), n.push(e.call(t, s, r, this));
      }
      return n;
    }
    getValue(e) {
      const t = s0(this).indexOf(e);
      if (t === -1) return;
      const n = this[t];
      return n instanceof Error && h0(`property ${JSON.stringify(e)}`, n.error), n;
    }
    static fromItems(e, t) {
      return new _K(B0, e, t);
    }
  };
  _e3 = new WeakMap();
  let K = _K;
  function C6(a) {
    let e = me(a);
    return h(e.length <= O, "value out-of-bounds", "BUFFER_OVERRUN", {
      buffer: e,
      length: O,
      offset: e.length
    }), e.length !== O && (e = H(f0([
      a6.slice(e.length % O),
      e
    ]))), e;
  }
  class t0 {
    constructor(e, t, n, r) {
      __publicField(this, "name");
      __publicField(this, "type");
      __publicField(this, "localName");
      __publicField(this, "dynamic");
      m(this, {
        name: e,
        type: t,
        localName: n,
        dynamic: r
      }, {
        name: "string",
        type: "string",
        localName: "string",
        dynamic: "boolean"
      });
    }
    _throwError(e, t) {
      d(false, e, this.localName, t);
    }
  }
  class s6 {
    constructor() {
      __privateAdd(this, _s6_instances);
      __privateAdd(this, _e4);
      __privateAdd(this, _t2);
      __privateSet(this, _e4, []), __privateSet(this, _t2, 0);
    }
    get data() {
      return f0(__privateGet(this, _e4));
    }
    get length() {
      return __privateGet(this, _t2);
    }
    appendWriter(e) {
      return __privateMethod(this, _s6_instances, n_fn).call(this, H(e.data));
    }
    writeBytes(e) {
      let t = H(e);
      const n = t.length % O;
      return n && (t = H(f0([
        t,
        a6.slice(n)
      ]))), __privateMethod(this, _s6_instances, n_fn).call(this, t);
    }
    writeValue(e) {
      return __privateMethod(this, _s6_instances, n_fn).call(this, C6(e));
    }
    writeUpdatableValue() {
      const e = __privateGet(this, _e4).length;
      return __privateGet(this, _e4).push(a6), __privateSet(this, _t2, __privateGet(this, _t2) + O), (t) => {
        __privateGet(this, _e4)[e] = C6(t);
      };
    }
  }
  _e4 = new WeakMap();
  _t2 = new WeakMap();
  _s6_instances = new WeakSet();
  n_fn = function(e) {
    return __privateGet(this, _e4).push(e), __privateSet(this, _t2, __privateGet(this, _t2) + e.length), e.length;
  };
  const _o6 = class _o6 {
    constructor(e, t, n) {
      __privateAdd(this, _o6_instances);
      __publicField(this, "allowLoose");
      __privateAdd(this, _e5);
      __privateAdd(this, _t3);
      __privateAdd(this, _n);
      __privateAdd(this, _a);
      __privateAdd(this, _r);
      m(this, {
        allowLoose: !!t
      }), __privateSet(this, _e5, H(e)), __privateSet(this, _n, 0), __privateSet(this, _a, null), __privateSet(this, _r, n ?? 1024), __privateSet(this, _t3, 0);
    }
    get data() {
      return R(__privateGet(this, _e5));
    }
    get dataLength() {
      return __privateGet(this, _e5).length;
    }
    get consumed() {
      return __privateGet(this, _t3);
    }
    get bytes() {
      return new Uint8Array(__privateGet(this, _e5));
    }
    subReader(e) {
      const t = new _o6(__privateGet(this, _e5).slice(__privateGet(this, _t3) + e), this.allowLoose, __privateGet(this, _r));
      return __privateSet(t, _a, this), t;
    }
    readBytes(e, t) {
      let n = __privateMethod(this, _o6_instances, i_fn).call(this, 0, e, !!t);
      return __privateMethod(this, _o6_instances, s_fn).call(this, e), __privateSet(this, _t3, __privateGet(this, _t3) + n.length), n.slice(0, e);
    }
    readValue() {
      return p1(this.readBytes(O));
    }
    readIndex() {
      return he(this.readBytes(O));
    }
  };
  _e5 = new WeakMap();
  _t3 = new WeakMap();
  _n = new WeakMap();
  _a = new WeakMap();
  _r = new WeakMap();
  _o6_instances = new WeakSet();
  s_fn = function(e) {
    var _a4;
    if (__privateGet(this, _a)) return __privateMethod(_a4 = __privateGet(this, _a), _o6_instances, s_fn).call(_a4, e);
    __privateSet(this, _n, __privateGet(this, _n) + e), h(__privateGet(this, _r) < 1 || __privateGet(this, _n) <= __privateGet(this, _r) * this.dataLength, `compressed ABI data exceeds inflation ratio of ${__privateGet(this, _r)} ( see: https://github.com/ethers-io/ethers.js/issues/4537 )`, "BUFFER_OVERRUN", {
      buffer: H(__privateGet(this, _e5)),
      offset: __privateGet(this, _t3),
      length: e,
      info: {
        bytesRead: __privateGet(this, _n),
        dataLength: this.dataLength
      }
    });
  };
  i_fn = function(e, t, n) {
    let r = Math.ceil(t / O) * O;
    return __privateGet(this, _t3) + r > __privateGet(this, _e5).length && (this.allowLoose && n && __privateGet(this, _t3) + t <= __privateGet(this, _e5).length ? r = t : h(false, "data out-of-bounds", "BUFFER_OVERRUN", {
      buffer: H(__privateGet(this, _e5)),
      length: __privateGet(this, _e5).length,
      offset: __privateGet(this, _t3) + r
    })), __privateGet(this, _e5).slice(__privateGet(this, _t3), __privateGet(this, _t3) + r);
  };
  let o6 = _o6;
  function B6(a) {
    if (!Number.isSafeInteger(a) || a < 0) throw new Error(`Wrong positive integer: ${a}`);
  }
  function T1(a, ...e) {
    if (!(a instanceof Uint8Array)) throw new Error("Expected Uint8Array");
    if (e.length > 0 && !e.includes(a.length)) throw new Error(`Expected Uint8Array of length ${e}, not of length=${a.length}`);
  }
  function S6(a, e = true) {
    if (a.destroyed) throw new Error("Hash instance has been destroyed");
    if (e && a.finished) throw new Error("Hash#digest() has already been called");
  }
  function Ne(a, e) {
    T1(a);
    const t = e.outputLen;
    if (a.length < t) throw new Error(`digestInto() expects output buffer of length at least ${t}`);
  }
  const Oe = (a) => a instanceof Uint8Array, Ie = (a) => new Uint32Array(a.buffer, a.byteOffset, Math.floor(a.byteLength / 4)), Pe = new Uint8Array(new Uint32Array([
    287454020
  ]).buffer)[0] === 68;
  if (!Pe) throw new Error("Non little-endian hardware is not supported");
  function Ue(a) {
    if (typeof a != "string") throw new Error(`utf8ToBytes expected string, got ${typeof a}`);
    return new Uint8Array(new TextEncoder().encode(a));
  }
  function E1(a) {
    if (typeof a == "string" && (a = Ue(a)), !Oe(a)) throw new Error(`expected Uint8Array, got ${typeof a}`);
    return a;
  }
  class Ce {
    clone() {
      return this._cloneInto();
    }
  }
  function Be(a) {
    const e = (n) => a().update(E1(n)).digest(), t = a();
    return e.outputLen = t.outputLen, e.blockLen = t.blockLen, e.create = () => a(), e;
  }
  const S0 = BigInt(2 ** 32 - 1), M6 = BigInt(32);
  function Se(a, e = false) {
    return e ? {
      h: Number(a & S0),
      l: Number(a >> M6 & S0)
    } : {
      h: Number(a >> M6 & S0) | 0,
      l: Number(a & S0) | 0
    };
  }
  function Me(a, e = false) {
    let t = new Uint32Array(a.length), n = new Uint32Array(a.length);
    for (let r = 0; r < a.length; r++) {
      const { h: s, l: i } = Se(a[r], e);
      [t[r], n[r]] = [
        s,
        i
      ];
    }
    return [
      t,
      n
    ];
  }
  const _e = (a, e, t) => a << t | e >>> 32 - t, Fe = (a, e, t) => e << t | a >>> 32 - t, Le = (a, e, t) => e << t - 32 | a >>> 64 - t, $e = (a, e, t) => a << t - 32 | e >>> 64 - t, [A1, k1, x1] = [
    [],
    [],
    []
  ], De = BigInt(0), m0 = BigInt(1), We = BigInt(2), Ve = BigInt(7), He = BigInt(256), Ge = BigInt(113);
  for (let a = 0, e = m0, t = 1, n = 0; a < 24; a++) {
    [t, n] = [
      n,
      (2 * t + 3 * n) % 5
    ], A1.push(2 * (5 * n + t)), k1.push((a + 1) * (a + 2) / 2 % 64);
    let r = De;
    for (let s = 0; s < 7; s++) e = (e << m0 ^ (e >> Ve) * Ge) % He, e & We && (r ^= m0 << (m0 << BigInt(s)) - m0);
    x1.push(r);
  }
  const [ze, Je] = Me(x1, true), _6 = (a, e, t) => t > 32 ? Le(a, e, t) : _e(a, e, t), F6 = (a, e, t) => t > 32 ? $e(a, e, t) : Fe(a, e, t);
  function Ke(a, e = 24) {
    const t = new Uint32Array(10);
    for (let n = 24 - e; n < 24; n++) {
      for (let i = 0; i < 10; i++) t[i] = a[i] ^ a[i + 10] ^ a[i + 20] ^ a[i + 30] ^ a[i + 40];
      for (let i = 0; i < 10; i += 2) {
        const f = (i + 8) % 10, c = (i + 2) % 10, b = t[c], o = t[c + 1], u = _6(b, o, 1) ^ t[f], l = F6(b, o, 1) ^ t[f + 1];
        for (let y = 0; y < 50; y += 10) a[i + y] ^= u, a[i + y + 1] ^= l;
      }
      let r = a[2], s = a[3];
      for (let i = 0; i < 24; i++) {
        const f = k1[i], c = _6(r, s, f), b = F6(r, s, f), o = A1[i];
        r = a[o], s = a[o + 1], a[o] = c, a[o + 1] = b;
      }
      for (let i = 0; i < 50; i += 10) {
        for (let f = 0; f < 10; f++) t[f] = a[i + f];
        for (let f = 0; f < 10; f++) a[i + f] ^= ~t[(f + 2) % 10] & t[(f + 4) % 10];
      }
      a[0] ^= ze[n], a[1] ^= Je[n];
    }
    t.fill(0);
  }
  class d6 extends Ce {
    constructor(e, t, n, r = false, s = 24) {
      if (super(), this.blockLen = e, this.suffix = t, this.outputLen = n, this.enableXOF = r, this.rounds = s, this.pos = 0, this.posOut = 0, this.finished = false, this.destroyed = false, B6(n), 0 >= this.blockLen || this.blockLen >= 200) throw new Error("Sha3 supports only keccak-f1600 function");
      this.state = new Uint8Array(200), this.state32 = Ie(this.state);
    }
    keccak() {
      Ke(this.state32, this.rounds), this.posOut = 0, this.pos = 0;
    }
    update(e) {
      S6(this);
      const { blockLen: t, state: n } = this;
      e = E1(e);
      const r = e.length;
      for (let s = 0; s < r; ) {
        const i = Math.min(t - this.pos, r - s);
        for (let f = 0; f < i; f++) n[this.pos++] ^= e[s++];
        this.pos === t && this.keccak();
      }
      return this;
    }
    finish() {
      if (this.finished) return;
      this.finished = true;
      const { state: e, suffix: t, pos: n, blockLen: r } = this;
      e[n] ^= t, (t & 128) !== 0 && n === r - 1 && this.keccak(), e[r - 1] ^= 128, this.keccak();
    }
    writeInto(e) {
      S6(this, false), T1(e), this.finish();
      const t = this.state, { blockLen: n } = this;
      for (let r = 0, s = e.length; r < s; ) {
        this.posOut >= n && this.keccak();
        const i = Math.min(n - this.posOut, s - r);
        e.set(t.subarray(this.posOut, this.posOut + i), r), this.posOut += i, r += i;
      }
      return e;
    }
    xofInto(e) {
      if (!this.enableXOF) throw new Error("XOF is not possible for this instance");
      return this.writeInto(e);
    }
    xof(e) {
      return B6(e), this.xofInto(new Uint8Array(e));
    }
    digestInto(e) {
      if (Ne(e, this), this.finished) throw new Error("digest() was already called");
      return this.writeInto(e), this.destroy(), e;
    }
    digest() {
      return this.digestInto(new Uint8Array(this.outputLen));
    }
    destroy() {
      this.destroyed = true, this.state.fill(0);
    }
    _cloneInto(e) {
      const { blockLen: t, suffix: n, outputLen: r, rounds: s, enableXOF: i } = this;
      return e || (e = new d6(t, n, r, i, s)), e.state32.set(this.state32), e.pos = this.pos, e.posOut = this.posOut, e.finished = this.finished, e.rounds = s, e.suffix = n, e.outputLen = r, e.enableXOF = i, e.destroyed = this.destroyed, e;
    }
  }
  const Xe = (a, e, t) => Be(() => new d6(e, a, t)), Ye = Xe(1, 136, 256 / 8);
  let v1 = false;
  const R1 = function(a) {
    return Ye(a);
  };
  let N1 = R1;
  function Z(a) {
    const e = S(a, "data");
    return R(N1(e));
  }
  Z._ = R1;
  Z.lock = function() {
    v1 = true;
  };
  Z.register = function(a) {
    if (v1) throw new TypeError("keccak256 is locked");
    N1 = a;
  };
  Object.freeze(Z);
  const Ze = "0x0000000000000000000000000000000000000000", Qe = BigInt(0), qe = BigInt(36);
  function L6(a) {
    a = a.toLowerCase();
    const e = a.substring(2).split(""), t = new Uint8Array(40);
    for (let r = 0; r < 40; r++) t[r] = e[r].charCodeAt(0);
    const n = S(Z(t));
    for (let r = 0; r < 40; r += 2) n[r >> 1] >> 4 >= 8 && (e[r] = e[r].toUpperCase()), (n[r >> 1] & 15) >= 8 && (e[r + 1] = e[r + 1].toUpperCase());
    return "0x" + e.join("");
  }
  const u6 = {};
  for (let a = 0; a < 10; a++) u6[String(a)] = String(a);
  for (let a = 0; a < 26; a++) u6[String.fromCharCode(65 + a)] = String(10 + a);
  const $6 = 15;
  function je(a) {
    a = a.toUpperCase(), a = a.substring(4) + a.substring(0, 2) + "00";
    let e = a.split("").map((n) => u6[n]).join("");
    for (; e.length >= $6; ) {
      let n = e.substring(0, $6);
      e = parseInt(n, 10) % 97 + e.substring(n.length);
    }
    let t = String(98 - parseInt(e, 10) % 97);
    for (; t.length < 2; ) t = "0" + t;
    return t;
  }
  const et = (function() {
    const a = {};
    for (let e = 0; e < 36; e++) {
      const t = "0123456789abcdefghijklmnopqrstuvwxyz"[e];
      a[t] = BigInt(e);
    }
    return a;
  })();
  function tt(a) {
    a = a.toLowerCase();
    let e = Qe;
    for (let t = 0; t < a.length; t++) e = e * qe + et[a[t]];
    return e;
  }
  function Q(a) {
    if (d(typeof a == "string", "invalid address", "address", a), a.match(/^(0x)?[0-9a-fA-F]{40}$/)) {
      a.startsWith("0x") || (a = "0x" + a);
      const e = L6(a);
      return d(!a.match(/([A-F].*[a-f])|([a-f].*[A-F])/) || e === a, "bad address checksum", "address", a), e;
    }
    if (a.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
      d(a.substring(2, 4) === je(a), "bad icap checksum", "address", a);
      let e = tt(a.substring(4)).toString(16);
      for (; e.length < 40; ) e = "0" + e;
      return L6("0x" + e);
    }
    d(false, "invalid address", "address", a);
  }
  function nt(a) {
    const e = Q(a.from);
    let n = j(a.nonce, "tx.nonce").toString(16);
    return n === "0" ? n = "0x" : n.length % 2 ? n = "0x0" + n : n = "0x" + n, Q(a0(Z(ve([
      e,
      n
    ])), 12));
  }
  function O1(a) {
    return a && typeof a.getAddress == "function";
  }
  async function j0(a, e) {
    const t = await e;
    return (t == null || t === "0x0000000000000000000000000000000000000000") && (h(typeof a != "string", "unconfigured name", "UNCONFIGURED_NAME", {
      value: a
    }), d(false, "invalid AddressLike value; did not resolve to a value address", "target", a)), Q(t);
  }
  function E0(a, e) {
    if (typeof a == "string") return a.match(/^0x[0-9a-f]{40}$/i) ? Q(a) : (h(e != null, "ENS resolution requires a provider", "UNSUPPORTED_OPERATION", {
      operation: "resolveName"
    }), j0(a, e.resolveName(a)));
    if (O1(a)) return j0(a, a.getAddress());
    if (a && typeof a.then == "function") return j0(a, a);
    d(false, "unsupported addressable value", "target", a);
  }
  const G = {};
  function p(a, e) {
    let t = false;
    return e < 0 && (t = true, e *= -1), new v(G, `${t ? "" : "u"}int${e}`, a, {
      signed: t,
      width: e
    });
  }
  function g(a, e) {
    return new v(G, `bytes${e || ""}`, a, {
      size: e
    });
  }
  const D6 = Symbol.for("_ethers_typed");
  const _v = class _v {
    constructor(e, t, n, r) {
      __publicField(this, "type");
      __publicField(this, "value");
      __privateAdd(this, _e6);
      __publicField(this, "_typedSymbol");
      r == null && (r = null), b6(G, e, "Typed"), m(this, {
        _typedSymbol: D6,
        type: t,
        value: n
      }), __privateSet(this, _e6, r), this.format();
    }
    format() {
      if (this.type === "array") throw new Error("");
      if (this.type === "dynamicArray") throw new Error("");
      return this.type === "tuple" ? `tuple(${this.value.map((e) => e.format()).join(",")})` : this.type;
    }
    defaultValue() {
      return 0;
    }
    minValue() {
      return 0;
    }
    maxValue() {
      return 0;
    }
    isBigInt() {
      return !!this.type.match(/^u?int[0-9]+$/);
    }
    isData() {
      return this.type.startsWith("bytes");
    }
    isString() {
      return this.type === "string";
    }
    get tupleName() {
      if (this.type !== "tuple") throw TypeError("not a tuple");
      return __privateGet(this, _e6);
    }
    get arrayLength() {
      if (this.type !== "array") throw TypeError("not an array");
      return __privateGet(this, _e6) === true ? -1 : __privateGet(this, _e6) === false ? this.value.length : null;
    }
    static from(e, t) {
      return new _v(G, e, t);
    }
    static uint8(e) {
      return p(e, 8);
    }
    static uint16(e) {
      return p(e, 16);
    }
    static uint24(e) {
      return p(e, 24);
    }
    static uint32(e) {
      return p(e, 32);
    }
    static uint40(e) {
      return p(e, 40);
    }
    static uint48(e) {
      return p(e, 48);
    }
    static uint56(e) {
      return p(e, 56);
    }
    static uint64(e) {
      return p(e, 64);
    }
    static uint72(e) {
      return p(e, 72);
    }
    static uint80(e) {
      return p(e, 80);
    }
    static uint88(e) {
      return p(e, 88);
    }
    static uint96(e) {
      return p(e, 96);
    }
    static uint104(e) {
      return p(e, 104);
    }
    static uint112(e) {
      return p(e, 112);
    }
    static uint120(e) {
      return p(e, 120);
    }
    static uint128(e) {
      return p(e, 128);
    }
    static uint136(e) {
      return p(e, 136);
    }
    static uint144(e) {
      return p(e, 144);
    }
    static uint152(e) {
      return p(e, 152);
    }
    static uint160(e) {
      return p(e, 160);
    }
    static uint168(e) {
      return p(e, 168);
    }
    static uint176(e) {
      return p(e, 176);
    }
    static uint184(e) {
      return p(e, 184);
    }
    static uint192(e) {
      return p(e, 192);
    }
    static uint200(e) {
      return p(e, 200);
    }
    static uint208(e) {
      return p(e, 208);
    }
    static uint216(e) {
      return p(e, 216);
    }
    static uint224(e) {
      return p(e, 224);
    }
    static uint232(e) {
      return p(e, 232);
    }
    static uint240(e) {
      return p(e, 240);
    }
    static uint248(e) {
      return p(e, 248);
    }
    static uint256(e) {
      return p(e, 256);
    }
    static uint(e) {
      return p(e, 256);
    }
    static int8(e) {
      return p(e, -8);
    }
    static int16(e) {
      return p(e, -16);
    }
    static int24(e) {
      return p(e, -24);
    }
    static int32(e) {
      return p(e, -32);
    }
    static int40(e) {
      return p(e, -40);
    }
    static int48(e) {
      return p(e, -48);
    }
    static int56(e) {
      return p(e, -56);
    }
    static int64(e) {
      return p(e, -64);
    }
    static int72(e) {
      return p(e, -72);
    }
    static int80(e) {
      return p(e, -80);
    }
    static int88(e) {
      return p(e, -88);
    }
    static int96(e) {
      return p(e, -96);
    }
    static int104(e) {
      return p(e, -104);
    }
    static int112(e) {
      return p(e, -112);
    }
    static int120(e) {
      return p(e, -120);
    }
    static int128(e) {
      return p(e, -128);
    }
    static int136(e) {
      return p(e, -136);
    }
    static int144(e) {
      return p(e, -144);
    }
    static int152(e) {
      return p(e, -152);
    }
    static int160(e) {
      return p(e, -160);
    }
    static int168(e) {
      return p(e, -168);
    }
    static int176(e) {
      return p(e, -176);
    }
    static int184(e) {
      return p(e, -184);
    }
    static int192(e) {
      return p(e, -192);
    }
    static int200(e) {
      return p(e, -200);
    }
    static int208(e) {
      return p(e, -208);
    }
    static int216(e) {
      return p(e, -216);
    }
    static int224(e) {
      return p(e, -224);
    }
    static int232(e) {
      return p(e, -232);
    }
    static int240(e) {
      return p(e, -240);
    }
    static int248(e) {
      return p(e, -248);
    }
    static int256(e) {
      return p(e, -256);
    }
    static int(e) {
      return p(e, -256);
    }
    static bytes1(e) {
      return g(e, 1);
    }
    static bytes2(e) {
      return g(e, 2);
    }
    static bytes3(e) {
      return g(e, 3);
    }
    static bytes4(e) {
      return g(e, 4);
    }
    static bytes5(e) {
      return g(e, 5);
    }
    static bytes6(e) {
      return g(e, 6);
    }
    static bytes7(e) {
      return g(e, 7);
    }
    static bytes8(e) {
      return g(e, 8);
    }
    static bytes9(e) {
      return g(e, 9);
    }
    static bytes10(e) {
      return g(e, 10);
    }
    static bytes11(e) {
      return g(e, 11);
    }
    static bytes12(e) {
      return g(e, 12);
    }
    static bytes13(e) {
      return g(e, 13);
    }
    static bytes14(e) {
      return g(e, 14);
    }
    static bytes15(e) {
      return g(e, 15);
    }
    static bytes16(e) {
      return g(e, 16);
    }
    static bytes17(e) {
      return g(e, 17);
    }
    static bytes18(e) {
      return g(e, 18);
    }
    static bytes19(e) {
      return g(e, 19);
    }
    static bytes20(e) {
      return g(e, 20);
    }
    static bytes21(e) {
      return g(e, 21);
    }
    static bytes22(e) {
      return g(e, 22);
    }
    static bytes23(e) {
      return g(e, 23);
    }
    static bytes24(e) {
      return g(e, 24);
    }
    static bytes25(e) {
      return g(e, 25);
    }
    static bytes26(e) {
      return g(e, 26);
    }
    static bytes27(e) {
      return g(e, 27);
    }
    static bytes28(e) {
      return g(e, 28);
    }
    static bytes29(e) {
      return g(e, 29);
    }
    static bytes30(e) {
      return g(e, 30);
    }
    static bytes31(e) {
      return g(e, 31);
    }
    static bytes32(e) {
      return g(e, 32);
    }
    static address(e) {
      return new _v(G, "address", e);
    }
    static bool(e) {
      return new _v(G, "bool", !!e);
    }
    static bytes(e) {
      return new _v(G, "bytes", e);
    }
    static string(e) {
      return new _v(G, "string", e);
    }
    static array(e, t) {
      throw new Error("not implemented yet");
    }
    static tuple(e, t) {
      throw new Error("not implemented yet");
    }
    static overrides(e) {
      return new _v(G, "overrides", Object.assign({}, e));
    }
    static isTyped(e) {
      return e && typeof e == "object" && "_typedSymbol" in e && e._typedSymbol === D6;
    }
    static dereference(e, t) {
      if (_v.isTyped(e)) {
        if (e.type !== t) throw new Error(`invalid type: expecetd ${t}, got ${e.type}`);
        return e.value;
      }
      return e;
    }
  };
  _e6 = new WeakMap();
  let v = _v;
  class at extends t0 {
    constructor(e) {
      super("address", "address", e, false);
    }
    defaultValue() {
      return "0x0000000000000000000000000000000000000000";
    }
    encode(e, t) {
      let n = v.dereference(t, "string");
      try {
        n = Q(n);
      } catch (r) {
        return this._throwError(r.message, t);
      }
      return e.writeValue(n);
    }
    decode(e) {
      return Q(y1(e.readValue(), 20));
    }
  }
  class rt extends t0 {
    constructor(e) {
      super(e.name, e.type, "_", e.dynamic);
      __publicField(this, "coder");
      this.coder = e;
    }
    defaultValue() {
      return this.coder.defaultValue();
    }
    encode(e, t) {
      return this.coder.encode(e, t);
    }
    decode(e) {
      return this.coder.decode(e);
    }
  }
  function I1(a, e, t) {
    let n = [];
    if (Array.isArray(t)) n = t;
    else if (t && typeof t == "object") {
      let c = {};
      n = e.map((b) => {
        const o = b.localName;
        return h(o, "cannot encode object for signature with missing names", "INVALID_ARGUMENT", {
          argument: "values",
          info: {
            coder: b
          },
          value: t
        }), h(!c[o], "cannot encode object for signature with duplicate names", "INVALID_ARGUMENT", {
          argument: "values",
          info: {
            coder: b
          },
          value: t
        }), c[o] = true, t[o];
      });
    } else d(false, "invalid tuple value", "tuple", t);
    d(e.length === n.length, "types/value length mismatch", "tuple", t);
    let r = new s6(), s = new s6(), i = [];
    e.forEach((c, b) => {
      let o = n[b];
      if (c.dynamic) {
        let u = s.length;
        c.encode(s, o);
        let l = r.writeUpdatableValue();
        i.push((y) => {
          l(y + u);
        });
      } else c.encode(r, o);
    }), i.forEach((c) => {
      c(r.length);
    });
    let f = a.appendWriter(r);
    return f += a.appendWriter(s), f;
  }
  function P1(a, e) {
    let t = [], n = [], r = a.subReader(0);
    return e.forEach((s) => {
      let i = null;
      if (s.dynamic) {
        let f = a.readIndex(), c = r.subReader(f);
        try {
          i = s.decode(c);
        } catch (b) {
          if (y0(b, "BUFFER_OVERRUN")) throw b;
          i = b, i.baseType = s.name, i.name = s.localName, i.type = s.type;
        }
      } else try {
        i = s.decode(a);
      } catch (f) {
        if (y0(f, "BUFFER_OVERRUN")) throw f;
        i = f, i.baseType = s.name, i.name = s.localName, i.type = s.type;
      }
      if (i == null) throw new Error("investigate");
      t.push(i), n.push(s.localName || null);
    }), K.fromItems(t, n);
  }
  class st extends t0 {
    constructor(e, t, n) {
      const r = e.type + "[" + (t >= 0 ? t : "") + "]", s = t === -1 || e.dynamic;
      super("array", r, n, s);
      __publicField(this, "coder");
      __publicField(this, "length");
      m(this, {
        coder: e,
        length: t
      });
    }
    defaultValue() {
      const e = this.coder.defaultValue(), t = [];
      for (let n = 0; n < this.length; n++) t.push(e);
      return t;
    }
    encode(e, t) {
      const n = v.dereference(t, "array");
      Array.isArray(n) || this._throwError("expected array value", n);
      let r = this.length;
      r === -1 && (r = n.length, e.writeValue(n.length)), d1(n.length, r, "coder array" + (this.localName ? " " + this.localName : ""));
      let s = [];
      for (let i = 0; i < n.length; i++) s.push(this.coder);
      return I1(e, s, n);
    }
    decode(e) {
      let t = this.length;
      t === -1 && (t = e.readIndex(), h(t * O <= e.dataLength, "insufficient data length", "BUFFER_OVERRUN", {
        buffer: e.bytes,
        offset: t * O,
        length: e.dataLength
      }));
      let n = [];
      for (let r = 0; r < t; r++) n.push(new rt(this.coder));
      return P1(e, n);
    }
  }
  class it extends t0 {
    constructor(e) {
      super("bool", "bool", e, false);
    }
    defaultValue() {
      return false;
    }
    encode(e, t) {
      const n = v.dereference(t, "bool");
      return e.writeValue(n ? 1 : 0);
    }
    decode(e) {
      return !!e.readValue();
    }
  }
  class U1 extends t0 {
    constructor(e, t) {
      super(e, e, t, true);
    }
    defaultValue() {
      return "0x";
    }
    encode(e, t) {
      t = H(t);
      let n = e.writeValue(t.length);
      return n += e.writeBytes(t), n;
    }
    decode(e) {
      return e.readBytes(e.readIndex(), true);
    }
  }
  class ft extends U1 {
    constructor(e) {
      super("bytes", e);
    }
    decode(e) {
      return R(super.decode(e));
    }
  }
  class ct extends t0 {
    constructor(e, t) {
      let n = "bytes" + String(e);
      super(n, n, t, false);
      __publicField(this, "size");
      m(this, {
        size: e
      }, {
        size: "number"
      });
    }
    defaultValue() {
      return "0x0000000000000000000000000000000000000000000000000000000000000000".substring(0, 2 + this.size * 2);
    }
    encode(e, t) {
      let n = H(v.dereference(t, this.type));
      return n.length !== this.size && this._throwError("incorrect data length", t), e.writeBytes(n);
    }
    decode(e) {
      return R(e.readBytes(this.size));
    }
  }
  const bt = new Uint8Array([]);
  class ot extends t0 {
    constructor(e) {
      super("null", "", e, false);
    }
    defaultValue() {
      return null;
    }
    encode(e, t) {
      return t != null && this._throwError("not null", t), e.writeBytes(bt);
    }
    decode(e) {
      return e.readBytes(0), null;
    }
  }
  const dt = BigInt(0), ut = BigInt(1), lt = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
  class pt extends t0 {
    constructor(e, t, n) {
      const r = (t ? "int" : "uint") + e * 8;
      super(r, r, n, false);
      __publicField(this, "size");
      __publicField(this, "signed");
      m(this, {
        size: e,
        signed: t
      }, {
        size: "number",
        signed: "boolean"
      });
    }
    defaultValue() {
      return 0;
    }
    encode(e, t) {
      let n = j(v.dereference(t, this.type)), r = C0(lt, O * 8);
      if (this.signed) {
        let s = C0(r, this.size * 8 - 1);
        (n > s || n < -(s + ut)) && this._throwError("value out-of-bounds", t), n = ye(n, 8 * O);
      } else (n < dt || n > C0(r, this.size * 8)) && this._throwError("value out-of-bounds", t);
      return e.writeValue(n);
    }
    decode(e) {
      let t = C0(e.readValue(), this.size * 8);
      return this.signed && (t = pe(t, this.size * 8)), t;
    }
  }
  class yt extends U1 {
    constructor(e) {
      super("string", e);
    }
    defaultValue() {
      return "";
    }
    encode(e, t) {
      return super.encode(e, m1(v.dereference(t, "string")));
    }
    decode(e) {
      return xe(super.decode(e));
    }
  }
  class M0 extends t0 {
    constructor(e, t) {
      let n = false;
      const r = [];
      e.forEach((i) => {
        i.dynamic && (n = true), r.push(i.type);
      });
      const s = "tuple(" + r.join(",") + ")";
      super("tuple", s, t, n);
      __publicField(this, "coders");
      m(this, {
        coders: Object.freeze(e.slice())
      });
    }
    defaultValue() {
      const e = [];
      this.coders.forEach((n) => {
        e.push(n.defaultValue());
      });
      const t = this.coders.reduce((n, r) => {
        const s = r.localName;
        return s && (n[s] || (n[s] = 0), n[s]++), n;
      }, {});
      return this.coders.forEach((n, r) => {
        let s = n.localName;
        !s || t[s] !== 1 || (s === "length" && (s = "_length"), e[s] == null && (e[s] = e[r]));
      }), Object.freeze(e);
    }
    encode(e, t) {
      const n = v.dereference(t, "tuple");
      return I1(e, this.coders, n);
    }
    decode(e) {
      return P1(e, this.coders);
    }
  }
  function e6(a, e) {
    return {
      address: Q(a),
      storageKeys: e.map((t, n) => (d(J(t, 32), "invalid slot", `storageKeys[${n}]`, t), t.toLowerCase()))
    };
  }
  function ht(a) {
    if (Array.isArray(a)) return a.map((t, n) => Array.isArray(t) ? (d(t.length === 2, "invalid slot set", `value[${n}]`, t), e6(t[0], t[1])) : (d(t != null && typeof t == "object", "invalid address-slot set", "value", a), e6(t.address, t.storageKeys)));
    d(a != null && typeof a == "object", "invalid access list", "value", a);
    const e = Object.keys(a).map((t) => {
      const n = a[t].reduce((r, s) => (r[s] = true, r), {});
      return e6(t, Object.keys(n).sort());
    });
    return e.sort((t, n) => t.address.localeCompare(n.address)), e;
  }
  function A0(a) {
    return Z(m1(a));
  }
  function I(a) {
    const e = /* @__PURE__ */ new Set();
    return a.forEach((t) => e.add(t)), Object.freeze(e);
  }
  const mt = "external public payable override", gt = I(mt.split(" ")), C1 = "constant external internal payable private public pure view override", wt = I(C1.split(" ")), B1 = "constructor error event fallback function receive struct", S1 = I(B1.split(" ")), M1 = "calldata memory storage payable indexed", Tt = I(M1.split(" ")), Et = "tuple returns", At = [
    B1,
    M1,
    Et,
    C1
  ].join(" "), kt = I(At.split(" ")), xt = {
    "(": "OPEN_PAREN",
    ")": "CLOSE_PAREN",
    "[": "OPEN_BRACKET",
    "]": "CLOSE_BRACKET",
    ",": "COMMA",
    "@": "AT"
  }, vt = new RegExp("^(\\s*)"), Rt = new RegExp("^([0-9]+)"), Nt = new RegExp("^([a-zA-Z$_][a-zA-Z0-9$_]*)"), _1 = new RegExp("^([a-zA-Z$_][a-zA-Z0-9$_]*)$"), F1 = new RegExp("^(address|bool|bytes([0-9]*)|string|u?int([0-9]*))$");
  const _M = class _M {
    constructor(e) {
      __privateAdd(this, _M_instances);
      __privateAdd(this, _e7);
      __privateAdd(this, _t4);
      __privateSet(this, _e7, 0), __privateSet(this, _t4, e.slice());
    }
    get offset() {
      return __privateGet(this, _e7);
    }
    get length() {
      return __privateGet(this, _t4).length - __privateGet(this, _e7);
    }
    clone() {
      return new _M(__privateGet(this, _t4));
    }
    reset() {
      __privateSet(this, _e7, 0);
    }
    popKeyword(e) {
      const t = this.peek();
      if (t.type !== "KEYWORD" || !e.has(t.text)) throw new Error(`expected keyword ${t.text}`);
      return this.pop().text;
    }
    popType(e) {
      if (this.peek().type !== e) {
        const t = this.peek();
        throw new Error(`expected ${e}; got ${t.type} ${JSON.stringify(t.text)}`);
      }
      return this.pop().text;
    }
    popParen() {
      const e = this.peek();
      if (e.type !== "OPEN_PAREN") throw new Error("bad start");
      const t = __privateMethod(this, _M_instances, n_fn2).call(this, __privateGet(this, _e7) + 1, e.match + 1);
      return __privateSet(this, _e7, e.match + 1), t;
    }
    popParams() {
      const e = this.peek();
      if (e.type !== "OPEN_PAREN") throw new Error("bad start");
      const t = [];
      for (; __privateGet(this, _e7) < e.match - 1; ) {
        const n = this.peek().linkNext;
        t.push(__privateMethod(this, _M_instances, n_fn2).call(this, __privateGet(this, _e7) + 1, n)), __privateSet(this, _e7, n);
      }
      return __privateSet(this, _e7, e.match + 1), t;
    }
    peek() {
      if (__privateGet(this, _e7) >= __privateGet(this, _t4).length) throw new Error("out-of-bounds");
      return __privateGet(this, _t4)[__privateGet(this, _e7)];
    }
    peekKeyword(e) {
      const t = this.peekType("KEYWORD");
      return t != null && e.has(t) ? t : null;
    }
    peekType(e) {
      if (this.length === 0) return null;
      const t = this.peek();
      return t.type === e ? t.text : null;
    }
    pop() {
      const e = this.peek();
      return __privateWrapper(this, _e7)._++, e;
    }
    toString() {
      const e = [];
      for (let t = __privateGet(this, _e7); t < __privateGet(this, _t4).length; t++) {
        const n = __privateGet(this, _t4)[t];
        e.push(`${n.type}:${n.text}`);
      }
      return `<TokenString ${e.join(" ")}>`;
    }
  };
  _e7 = new WeakMap();
  _t4 = new WeakMap();
  _M_instances = new WeakSet();
  n_fn2 = function(e = 0, t = 0) {
    return new _M(__privateGet(this, _t4).slice(e, t).map((n) => Object.freeze(Object.assign({}, n, {
      match: n.match - e,
      linkBack: n.linkBack - e,
      linkNext: n.linkNext - e
    }))));
  };
  let M = _M;
  function n0(a) {
    const e = [], t = (i) => {
      const f = s < a.length ? JSON.stringify(a[s]) : "$EOI";
      throw new Error(`invalid token ${f} at ${s}: ${i}`);
    };
    let n = [], r = [], s = 0;
    for (; s < a.length; ) {
      let i = a.substring(s), f = i.match(vt);
      f && (s += f[1].length, i = a.substring(s));
      const c = {
        depth: n.length,
        linkBack: -1,
        linkNext: -1,
        match: -1,
        type: "",
        text: "",
        offset: s,
        value: -1
      };
      e.push(c);
      let b = xt[i[0]] || "";
      if (b) {
        if (c.type = b, c.text = i[0], s++, b === "OPEN_PAREN") n.push(e.length - 1), r.push(e.length - 1);
        else if (b == "CLOSE_PAREN") n.length === 0 && t("no matching open bracket"), c.match = n.pop(), e[c.match].match = e.length - 1, c.depth--, c.linkBack = r.pop(), e[c.linkBack].linkNext = e.length - 1;
        else if (b === "COMMA") c.linkBack = r.pop(), e[c.linkBack].linkNext = e.length - 1, r.push(e.length - 1);
        else if (b === "OPEN_BRACKET") c.type = "BRACKET";
        else if (b === "CLOSE_BRACKET") {
          let o = e.pop().text;
          if (e.length > 0 && e[e.length - 1].type === "NUMBER") {
            const u = e.pop().text;
            o = u + o, e[e.length - 1].value = e0(u);
          }
          if (e.length === 0 || e[e.length - 1].type !== "BRACKET") throw new Error("missing opening bracket");
          e[e.length - 1].text += o;
        }
        continue;
      }
      if (f = i.match(Nt), f) {
        if (c.text = f[1], s += c.text.length, kt.has(c.text)) {
          c.type = "KEYWORD";
          continue;
        }
        if (c.text.match(F1)) {
          c.type = "TYPE";
          continue;
        }
        c.type = "ID";
        continue;
      }
      if (f = i.match(Rt), f) {
        c.text = f[1], c.type = "NUMBER", s += c.text.length;
        continue;
      }
      throw new Error(`unexpected token ${JSON.stringify(i[0])} at position ${s}`);
    }
    return new M(e.map((i) => Object.freeze(i)));
  }
  function W6(a, e) {
    let t = [];
    for (const n in e.keys()) a.has(n) && t.push(n);
    if (t.length > 1) throw new Error(`conflicting types: ${t.join(", ")}`);
  }
  function z0(a, e) {
    if (e.peekKeyword(S1)) {
      const t = e.pop().text;
      if (t !== a) throw new Error(`expected ${a}, got ${t}`);
    }
    return e.popType("ID");
  }
  function q(a, e) {
    const t = /* @__PURE__ */ new Set();
    for (; ; ) {
      const n = a.peekType("KEYWORD");
      if (n == null || e && !e.has(n)) break;
      if (a.pop(), t.has(n)) throw new Error(`duplicate keywords: ${JSON.stringify(n)}`);
      t.add(n);
    }
    return Object.freeze(t);
  }
  function L1(a) {
    let e = q(a, wt);
    return W6(e, I("constant payable nonpayable".split(" "))), W6(e, I("pure view payable nonpayable".split(" "))), e.has("view") ? "view" : e.has("pure") ? "pure" : e.has("payable") ? "payable" : e.has("nonpayable") ? "nonpayable" : e.has("constant") ? "view" : "nonpayable";
  }
  function Y(a, e) {
    return a.popParams().map((t) => A.from(t, e));
  }
  function $1(a) {
    if (a.peekType("AT")) {
      if (a.pop(), a.peekType("NUMBER")) return j(a.pop().text);
      throw new Error("invalid gas");
    }
    return null;
  }
  function o0(a) {
    if (a.length) throw new Error(`unexpected tokens at offset ${a.offset}: ${a.toString()}`);
  }
  const Ot = new RegExp(/^(.*)\[([0-9]*)\]$/);
  function V6(a) {
    const e = a.match(F1);
    if (d(e, "invalid type", "type", a), a === "uint") return "uint256";
    if (a === "int") return "int256";
    if (e[2]) {
      const t = parseInt(e[2]);
      d(t !== 0 && t <= 32, "invalid bytes length", "type", a);
    } else if (e[3]) {
      const t = parseInt(e[3]);
      d(t !== 0 && t <= 256 && t % 8 === 0, "invalid numeric width", "type", a);
    }
    return a;
  }
  const x = {}, U = Symbol.for("_ethers_internal"), H6 = "_ParamTypeInternal", G6 = "_ErrorInternal", z6 = "_EventInternal", J6 = "_ConstructorInternal", K6 = "_FallbackInternal", X6 = "_FunctionInternal", Y6 = "_StructInternal";
  const _A = class _A {
    constructor(e, t, n, r, s, i, f, c) {
      __privateAdd(this, _A_instances);
      __publicField(this, "name");
      __publicField(this, "type");
      __publicField(this, "baseType");
      __publicField(this, "indexed");
      __publicField(this, "components");
      __publicField(this, "arrayLength");
      __publicField(this, "arrayChildren");
      if (b6(e, x, "ParamType"), Object.defineProperty(this, U, {
        value: H6
      }), i && (i = Object.freeze(i.slice())), r === "array") {
        if (f == null || c == null) throw new Error("");
      } else if (f != null || c != null) throw new Error("");
      if (r === "tuple") {
        if (i == null) throw new Error("");
      } else if (i != null) throw new Error("");
      m(this, {
        name: t,
        type: n,
        baseType: r,
        indexed: s,
        components: i,
        arrayLength: f,
        arrayChildren: c
      });
    }
    format(e) {
      if (e == null && (e = "sighash"), e === "json") {
        const n = this.name || "";
        if (this.isArray()) {
          const s = JSON.parse(this.arrayChildren.format("json"));
          return s.name = n, s.type += `[${this.arrayLength < 0 ? "" : String(this.arrayLength)}]`, JSON.stringify(s);
        }
        const r = {
          type: this.baseType === "tuple" ? "tuple" : this.type,
          name: n
        };
        return typeof this.indexed == "boolean" && (r.indexed = this.indexed), this.isTuple() && (r.components = this.components.map((s) => JSON.parse(s.format(e)))), JSON.stringify(r);
      }
      let t = "";
      return this.isArray() ? (t += this.arrayChildren.format(e), t += `[${this.arrayLength < 0 ? "" : String(this.arrayLength)}]`) : this.isTuple() ? t += "(" + this.components.map((n) => n.format(e)).join(e === "full" ? ", " : ",") + ")" : t += this.type, e !== "sighash" && (this.indexed === true && (t += " indexed"), e === "full" && this.name && (t += " " + this.name)), t;
    }
    isArray() {
      return this.baseType === "array";
    }
    isTuple() {
      return this.baseType === "tuple";
    }
    isIndexable() {
      return this.indexed != null;
    }
    walk(e, t) {
      if (this.isArray()) {
        if (!Array.isArray(e)) throw new Error("invalid array value");
        if (this.arrayLength !== -1 && e.length !== this.arrayLength) throw new Error("array is wrong length");
        const n = this;
        return e.map((r) => n.arrayChildren.walk(r, t));
      }
      if (this.isTuple()) {
        if (!Array.isArray(e)) throw new Error("invalid tuple value");
        if (e.length !== this.components.length) throw new Error("array is wrong length");
        const n = this;
        return e.map((r, s) => n.components[s].walk(r, t));
      }
      return t(this.type, e);
    }
    async walkAsync(e, t) {
      const n = [], r = [
        e
      ];
      return __privateMethod(this, _A_instances, e_fn).call(this, n, e, t, (s) => {
        r[0] = s;
      }), n.length && await Promise.all(n), r[0];
    }
    static from(e, t) {
      if (_A.isParamType(e)) return e;
      if (typeof e == "string") try {
        return _A.from(n0(e), t);
      } catch {
        d(false, "invalid param type", "obj", e);
      }
      else if (e instanceof M) {
        let f = "", c = "", b = null;
        q(e, I([
          "tuple"
        ])).has("tuple") || e.peekType("OPEN_PAREN") ? (c = "tuple", b = e.popParams().map((E) => _A.from(E)), f = `tuple(${b.map((E) => E.format()).join(",")})`) : (f = V6(e.popType("TYPE")), c = f);
        let o = null, u = null;
        for (; e.length && e.peekType("BRACKET"); ) {
          const E = e.pop();
          o = new _A(x, "", f, c, null, b, u, o), u = E.value, f += E.text, c = "array", b = null;
        }
        let l = null;
        if (q(e, Tt).has("indexed")) {
          if (!t) throw new Error("");
          l = true;
        }
        const w = e.peekType("ID") ? e.pop().text : "";
        if (e.length) throw new Error("leftover tokens");
        return new _A(x, w, f, c, l, b, u, o);
      }
      const n = e.name;
      d(!n || typeof n == "string" && n.match(_1), "invalid name", "obj.name", n);
      let r = e.indexed;
      r != null && (d(t, "parameter cannot be indexed", "obj.indexed", e.indexed), r = !!r);
      let s = e.type, i = s.match(Ot);
      if (i) {
        const f = parseInt(i[2] || "-1"), c = _A.from({
          type: i[1],
          components: e.components
        });
        return new _A(x, n || "", s, "array", r, null, f, c);
      }
      if (s === "tuple" || s.startsWith("tuple(") || s.startsWith("(")) {
        const f = e.components != null ? e.components.map((b) => _A.from(b)) : null;
        return new _A(x, n || "", s, "tuple", r, f, null, null);
      }
      return s = V6(e.type), new _A(x, n || "", s, s, r, null, null, null);
    }
    static isParamType(e) {
      return e && e[U] === H6;
    }
  };
  _A_instances = new WeakSet();
  e_fn = function(e, t, n, r) {
    if (this.isArray()) {
      if (!Array.isArray(t)) throw new Error("invalid array value");
      if (this.arrayLength !== -1 && t.length !== this.arrayLength) throw new Error("array is wrong length");
      const i = this.arrayChildren, f = t.slice();
      f.forEach((c, b) => {
        var _a4;
        __privateMethod(_a4 = i, _A_instances, e_fn).call(_a4, e, c, n, (o) => {
          f[b] = o;
        });
      }), r(f);
      return;
    }
    if (this.isTuple()) {
      const i = this.components;
      let f;
      if (Array.isArray(t)) f = t.slice();
      else {
        if (t == null || typeof t != "object") throw new Error("invalid tuple value");
        f = i.map((c) => {
          if (!c.name) throw new Error("cannot use object value with unnamed components");
          if (!(c.name in t)) throw new Error(`missing value for component ${c.name}`);
          return t[c.name];
        });
      }
      if (f.length !== this.components.length) throw new Error("array is wrong length");
      f.forEach((c, b) => {
        var _a4;
        __privateMethod(_a4 = i[b], _A_instances, e_fn).call(_a4, e, c, n, (o) => {
          f[b] = o;
        });
      }), r(f);
      return;
    }
    const s = n(this.type, t);
    s.then ? e.push((async function() {
      r(await s);
    })()) : r(s);
  };
  let A = _A;
  class d0 {
    constructor(e, t, n) {
      __publicField(this, "type");
      __publicField(this, "inputs");
      b6(e, x, "Fragment"), n = Object.freeze(n.slice()), m(this, {
        type: t,
        inputs: n
      });
    }
    static from(e) {
      if (typeof e == "string") {
        try {
          d0.from(JSON.parse(e));
        } catch {
        }
        return d0.from(n0(e));
      }
      if (e instanceof M) switch (e.peekKeyword(S1)) {
        case "constructor":
          return X.from(e);
        case "error":
          return P.from(e);
        case "event":
          return D.from(e);
        case "fallback":
        case "receive":
          return z.from(e);
        case "function":
          return W.from(e);
        case "struct":
          return c0.from(e);
      }
      else if (typeof e == "object") {
        switch (e.type) {
          case "constructor":
            return X.from(e);
          case "error":
            return P.from(e);
          case "event":
            return D.from(e);
          case "fallback":
          case "receive":
            return z.from(e);
          case "function":
            return W.from(e);
          case "struct":
            return c0.from(e);
        }
        h(false, `unsupported type: ${e.type}`, "UNSUPPORTED_OPERATION", {
          operation: "Fragment.from"
        });
      }
      d(false, "unsupported frgament object", "obj", e);
    }
    static isConstructor(e) {
      return X.isFragment(e);
    }
    static isError(e) {
      return P.isFragment(e);
    }
    static isEvent(e) {
      return D.isFragment(e);
    }
    static isFunction(e) {
      return W.isFragment(e);
    }
    static isStruct(e) {
      return c0.isFragment(e);
    }
  }
  class J0 extends d0 {
    constructor(e, t, n, r) {
      super(e, t, r);
      __publicField(this, "name");
      d(typeof n == "string" && n.match(_1), "invalid identifier", "name", n), r = Object.freeze(r.slice()), m(this, {
        name: n
      });
    }
  }
  function k0(a, e) {
    return "(" + e.map((t) => t.format(a)).join(a === "full" ? ", " : ",") + ")";
  }
  class P extends J0 {
    constructor(e, t, n) {
      super(e, "error", t, n), Object.defineProperty(this, U, {
        value: G6
      });
    }
    get selector() {
      return A0(this.format("sighash")).substring(0, 10);
    }
    format(e) {
      if (e == null && (e = "sighash"), e === "json") return JSON.stringify({
        type: "error",
        name: this.name,
        inputs: this.inputs.map((n) => JSON.parse(n.format(e)))
      });
      const t = [];
      return e !== "sighash" && t.push("error"), t.push(this.name + k0(e, this.inputs)), t.join(" ");
    }
    static from(e) {
      if (P.isFragment(e)) return e;
      if (typeof e == "string") return P.from(n0(e));
      if (e instanceof M) {
        const t = z0("error", e), n = Y(e);
        return o0(e), new P(x, t, n);
      }
      return new P(x, e.name, e.inputs ? e.inputs.map(A.from) : []);
    }
    static isFragment(e) {
      return e && e[U] === G6;
    }
  }
  class D extends J0 {
    constructor(e, t, n, r) {
      super(e, "event", t, n);
      __publicField(this, "anonymous");
      Object.defineProperty(this, U, {
        value: z6
      }), m(this, {
        anonymous: r
      });
    }
    get topicHash() {
      return A0(this.format("sighash"));
    }
    format(e) {
      if (e == null && (e = "sighash"), e === "json") return JSON.stringify({
        type: "event",
        anonymous: this.anonymous,
        name: this.name,
        inputs: this.inputs.map((n) => JSON.parse(n.format(e)))
      });
      const t = [];
      return e !== "sighash" && t.push("event"), t.push(this.name + k0(e, this.inputs)), e !== "sighash" && this.anonymous && t.push("anonymous"), t.join(" ");
    }
    static getTopicHash(e, t) {
      return t = (t || []).map((r) => A.from(r)), new D(x, e, t, false).topicHash;
    }
    static from(e) {
      if (D.isFragment(e)) return e;
      if (typeof e == "string") try {
        return D.from(n0(e));
      } catch {
        d(false, "invalid event fragment", "obj", e);
      }
      else if (e instanceof M) {
        const t = z0("event", e), n = Y(e, true), r = !!q(e, I([
          "anonymous"
        ])).has("anonymous");
        return o0(e), new D(x, t, n, r);
      }
      return new D(x, e.name, e.inputs ? e.inputs.map((t) => A.from(t, true)) : [], !!e.anonymous);
    }
    static isFragment(e) {
      return e && e[U] === z6;
    }
  }
  class X extends d0 {
    constructor(e, t, n, r, s) {
      super(e, t, n);
      __publicField(this, "payable");
      __publicField(this, "gas");
      Object.defineProperty(this, U, {
        value: J6
      }), m(this, {
        payable: r,
        gas: s
      });
    }
    format(e) {
      if (h(e != null && e !== "sighash", "cannot format a constructor for sighash", "UNSUPPORTED_OPERATION", {
        operation: "format(sighash)"
      }), e === "json") return JSON.stringify({
        type: "constructor",
        stateMutability: this.payable ? "payable" : "undefined",
        payable: this.payable,
        gas: this.gas != null ? this.gas : void 0,
        inputs: this.inputs.map((n) => JSON.parse(n.format(e)))
      });
      const t = [
        `constructor${k0(e, this.inputs)}`
      ];
      return this.payable && t.push("payable"), this.gas != null && t.push(`@${this.gas.toString()}`), t.join(" ");
    }
    static from(e) {
      if (X.isFragment(e)) return e;
      if (typeof e == "string") try {
        return X.from(n0(e));
      } catch {
        d(false, "invalid constuctor fragment", "obj", e);
      }
      else if (e instanceof M) {
        q(e, I([
          "constructor"
        ]));
        const t = Y(e), n = !!q(e, gt).has("payable"), r = $1(e);
        return o0(e), new X(x, "constructor", t, n, r);
      }
      return new X(x, "constructor", e.inputs ? e.inputs.map(A.from) : [], !!e.payable, e.gas != null ? e.gas : null);
    }
    static isFragment(e) {
      return e && e[U] === J6;
    }
  }
  class z extends d0 {
    constructor(e, t, n) {
      super(e, "fallback", t);
      __publicField(this, "payable");
      Object.defineProperty(this, U, {
        value: K6
      }), m(this, {
        payable: n
      });
    }
    format(e) {
      const t = this.inputs.length === 0 ? "receive" : "fallback";
      if (e === "json") {
        const n = this.payable ? "payable" : "nonpayable";
        return JSON.stringify({
          type: t,
          stateMutability: n
        });
      }
      return `${t}()${this.payable ? " payable" : ""}`;
    }
    static from(e) {
      if (z.isFragment(e)) return e;
      if (typeof e == "string") try {
        return z.from(n0(e));
      } catch {
        d(false, "invalid fallback fragment", "obj", e);
      }
      else if (e instanceof M) {
        const t = e.toString(), n = e.peekKeyword(I([
          "fallback",
          "receive"
        ]));
        if (d(n, "type must be fallback or receive", "obj", t), e.popKeyword(I([
          "fallback",
          "receive"
        ])) === "receive") {
          const f = Y(e);
          return d(f.length === 0, "receive cannot have arguments", "obj.inputs", f), q(e, I([
            "payable"
          ])), o0(e), new z(x, [], true);
        }
        let s = Y(e);
        s.length ? d(s.length === 1 && s[0].type === "bytes", "invalid fallback inputs", "obj.inputs", s.map((f) => f.format("minimal")).join(", ")) : s = [
          A.from("bytes")
        ];
        const i = L1(e);
        if (d(i === "nonpayable" || i === "payable", "fallback cannot be constants", "obj.stateMutability", i), q(e, I([
          "returns"
        ])).has("returns")) {
          const f = Y(e);
          d(f.length === 1 && f[0].type === "bytes", "invalid fallback outputs", "obj.outputs", f.map((c) => c.format("minimal")).join(", "));
        }
        return o0(e), new z(x, s, i === "payable");
      }
      if (e.type === "receive") return new z(x, [], true);
      if (e.type === "fallback") {
        const t = [
          A.from("bytes")
        ], n = e.stateMutability === "payable";
        return new z(x, t, n);
      }
      d(false, "invalid fallback description", "obj", e);
    }
    static isFragment(e) {
      return e && e[U] === K6;
    }
  }
  class W extends J0 {
    constructor(e, t, n, r, s, i) {
      super(e, "function", t, r);
      __publicField(this, "constant");
      __publicField(this, "outputs");
      __publicField(this, "stateMutability");
      __publicField(this, "payable");
      __publicField(this, "gas");
      Object.defineProperty(this, U, {
        value: X6
      }), s = Object.freeze(s.slice()), m(this, {
        constant: n === "view" || n === "pure",
        gas: i,
        outputs: s,
        payable: n === "payable",
        stateMutability: n
      });
    }
    get selector() {
      return A0(this.format("sighash")).substring(0, 10);
    }
    format(e) {
      if (e == null && (e = "sighash"), e === "json") return JSON.stringify({
        type: "function",
        name: this.name,
        constant: this.constant,
        stateMutability: this.stateMutability !== "nonpayable" ? this.stateMutability : void 0,
        payable: this.payable,
        gas: this.gas != null ? this.gas : void 0,
        inputs: this.inputs.map((n) => JSON.parse(n.format(e))),
        outputs: this.outputs.map((n) => JSON.parse(n.format(e)))
      });
      const t = [];
      return e !== "sighash" && t.push("function"), t.push(this.name + k0(e, this.inputs)), e !== "sighash" && (this.stateMutability !== "nonpayable" && t.push(this.stateMutability), this.outputs && this.outputs.length && (t.push("returns"), t.push(k0(e, this.outputs))), this.gas != null && t.push(`@${this.gas.toString()}`)), t.join(" ");
    }
    static getSelector(e, t) {
      return t = (t || []).map((r) => A.from(r)), new W(x, e, "view", t, [], null).selector;
    }
    static from(e) {
      if (W.isFragment(e)) return e;
      if (typeof e == "string") try {
        return W.from(n0(e));
      } catch {
        d(false, "invalid function fragment", "obj", e);
      }
      else if (e instanceof M) {
        const n = z0("function", e), r = Y(e), s = L1(e);
        let i = [];
        q(e, I([
          "returns"
        ])).has("returns") && (i = Y(e));
        const f = $1(e);
        return o0(e), new W(x, n, s, r, i, f);
      }
      let t = e.stateMutability;
      return t == null && (t = "payable", typeof e.constant == "boolean" ? (t = "view", e.constant || (t = "payable", typeof e.payable == "boolean" && !e.payable && (t = "nonpayable"))) : typeof e.payable == "boolean" && !e.payable && (t = "nonpayable")), new W(x, e.name, t, e.inputs ? e.inputs.map(A.from) : [], e.outputs ? e.outputs.map(A.from) : [], e.gas != null ? e.gas : null);
    }
    static isFragment(e) {
      return e && e[U] === X6;
    }
  }
  class c0 extends J0 {
    constructor(e, t, n) {
      super(e, "struct", t, n), Object.defineProperty(this, U, {
        value: Y6
      });
    }
    format() {
      throw new Error("@TODO");
    }
    static from(e) {
      if (typeof e == "string") try {
        return c0.from(n0(e));
      } catch {
        d(false, "invalid struct fragment", "obj", e);
      }
      else if (e instanceof M) {
        const t = z0("struct", e), n = Y(e);
        return o0(e), new c0(x, t, n);
      }
      return new c0(x, e.name, e.inputs ? e.inputs.map(A.from) : []);
    }
    static isFragment(e) {
      return e && e[U] === Y6;
    }
  }
  const L = /* @__PURE__ */ new Map();
  L.set(0, "GENERIC_PANIC");
  L.set(1, "ASSERT_FALSE");
  L.set(17, "OVERFLOW");
  L.set(18, "DIVIDE_BY_ZERO");
  L.set(33, "ENUM_RANGE_ERROR");
  L.set(34, "BAD_STORAGE_DATA");
  L.set(49, "STACK_UNDERFLOW");
  L.set(50, "ARRAY_RANGE_ERROR");
  L.set(65, "OUT_OF_MEMORY");
  L.set(81, "UNINITIALIZED_FUNCTION_CALL");
  const It = new RegExp(/^bytes([0-9]*)$/), Pt = new RegExp(/^(u?int)([0-9]*)$/);
  let t6 = null, Z6 = 1024;
  function Ut(a, e, t, n) {
    let r = "missing revert data", s = null;
    const i = null;
    let f = null;
    if (t) {
      r = "execution reverted";
      const b = S(t);
      if (t = R(t), b.length === 0) r += " (no data present; likely require(false) occurred", s = "require(false)";
      else if (b.length % 32 !== 4) r += " (could not decode reason; invalid data length)";
      else if (R(b.slice(0, 4)) === "0x08c379a0") try {
        s = n.decode([
          "string"
        ], b.slice(4))[0], f = {
          signature: "Error(string)",
          name: "Error",
          args: [
            s
          ]
        }, r += `: ${JSON.stringify(s)}`;
      } catch {
        r += " (could not decode reason; invalid string data)";
      }
      else if (R(b.slice(0, 4)) === "0x4e487b71") try {
        const o = Number(n.decode([
          "uint256"
        ], b.slice(4))[0]);
        f = {
          signature: "Panic(uint256)",
          name: "Panic",
          args: [
            o
          ]
        }, s = `Panic due to ${L.get(o) || "UNKNOWN"}(${o})`, r += `: ${s}`;
      } catch {
        r += " (could not decode panic code)";
      }
      else r += " (unknown custom error)";
    }
    const c = {
      to: e.to ? Q(e.to) : null,
      data: e.data || "0x"
    };
    return e.from && (c.from = Q(e.from)), T0(r, "CALL_EXCEPTION", {
      action: a,
      data: t,
      reason: s,
      transaction: c,
      invocation: i,
      revert: f
    });
  }
  const _x0 = class _x0 {
    constructor() {
      __privateAdd(this, _x0_instances);
    }
    getDefaultValue(e) {
      const t = e.map((r) => __privateMethod(this, _x0_instances, e_fn2).call(this, A.from(r)));
      return new M0(t, "_").defaultValue();
    }
    encode(e, t) {
      d1(t.length, e.length, "types/values length mismatch");
      const n = e.map((i) => __privateMethod(this, _x0_instances, e_fn2).call(this, A.from(i))), r = new M0(n, "_"), s = new s6();
      return r.encode(s, t), s.data;
    }
    decode(e, t, n) {
      const r = e.map((i) => __privateMethod(this, _x0_instances, e_fn2).call(this, A.from(i)));
      return new M0(r, "_").decode(new o6(t, n, Z6));
    }
    static _setDefaultMaxInflation(e) {
      d(typeof e == "number" && Number.isInteger(e), "invalid defaultMaxInflation factor", "value", e), Z6 = e;
    }
    static defaultAbiCoder() {
      return t6 == null && (t6 = new _x0()), t6;
    }
    static getBuiltinCallException(e, t, n) {
      return Ut(e, t, n, _x0.defaultAbiCoder());
    }
  };
  _x0_instances = new WeakSet();
  e_fn2 = function(e) {
    if (e.isArray()) return new st(__privateMethod(this, _x0_instances, e_fn2).call(this, e.arrayChildren), e.arrayLength, e.name);
    if (e.isTuple()) return new M0(e.components.map((n) => __privateMethod(this, _x0_instances, e_fn2).call(this, n)), e.name);
    switch (e.baseType) {
      case "address":
        return new at(e.name);
      case "bool":
        return new it(e.name);
      case "string":
        return new yt(e.name);
      case "bytes":
        return new ft(e.name);
      case "":
        return new ot(e.name);
    }
    let t = e.type.match(Pt);
    if (t) {
      let n = parseInt(t[2] || "256");
      return d(n !== 0 && n <= 256 && n % 8 === 0, "invalid " + t[1] + " bit length", "param", e), new pt(n / 8, t[1] === "int", e.name);
    }
    if (t = e.type.match(It), t) {
      let n = parseInt(t[1]);
      return d(n !== 0 && n <= 32, "invalid bytes length", "param", e), new ct(n, e.name);
    }
    d(false, "invalid type", "type", e.type);
  };
  let x0 = _x0;
  class Ct {
    constructor(e, t, n) {
      __publicField(this, "fragment");
      __publicField(this, "name");
      __publicField(this, "signature");
      __publicField(this, "topic");
      __publicField(this, "args");
      const r = e.name, s = e.format();
      m(this, {
        fragment: e,
        name: r,
        signature: s,
        topic: t,
        args: n
      });
    }
  }
  class Bt {
    constructor(e, t, n, r) {
      __publicField(this, "fragment");
      __publicField(this, "name");
      __publicField(this, "args");
      __publicField(this, "signature");
      __publicField(this, "selector");
      __publicField(this, "value");
      const s = e.name, i = e.format();
      m(this, {
        fragment: e,
        name: s,
        args: n,
        signature: i,
        selector: t,
        value: r
      });
    }
  }
  class St {
    constructor(e, t, n) {
      __publicField(this, "fragment");
      __publicField(this, "name");
      __publicField(this, "args");
      __publicField(this, "signature");
      __publicField(this, "selector");
      const r = e.name, s = e.format();
      m(this, {
        fragment: e,
        name: r,
        args: n,
        signature: s,
        selector: t
      });
    }
  }
  class Q6 {
    constructor(e) {
      __publicField(this, "hash");
      __publicField(this, "_isIndexed");
      m(this, {
        hash: e,
        _isIndexed: true
      });
    }
    static isIndexed(e) {
      return !!(e && e._isIndexed);
    }
  }
  const q6 = {
    0: "generic panic",
    1: "assert(false)",
    17: "arithmetic overflow",
    18: "division or modulo by zero",
    33: "enum overflow",
    34: "invalid encoded storage byte array accessed",
    49: "out-of-bounds array access; popping on an empty array",
    50: "out-of-bounds access of an array or bytesN",
    65: "out of memory",
    81: "uninitialized function"
  }, j6 = {
    "0x08c379a0": {
      signature: "Error(string)",
      name: "Error",
      inputs: [
        "string"
      ],
      reason: (a) => `reverted with reason string ${JSON.stringify(a)}`
    },
    "0x4e487b71": {
      signature: "Panic(uint256)",
      name: "Panic",
      inputs: [
        "uint256"
      ],
      reason: (a) => {
        let e = "unknown panic code";
        return a >= 0 && a <= 255 && q6[a.toString()] && (e = q6[a.toString()]), `reverted with panic code 0x${a.toString(16)} (${e})`;
      }
    }
  };
  const _V = class _V {
    constructor(e) {
      __privateAdd(this, _V_instances);
      __publicField(this, "fragments");
      __publicField(this, "deploy");
      __publicField(this, "fallback");
      __publicField(this, "receive");
      __privateAdd(this, _e8);
      __privateAdd(this, _t5);
      __privateAdd(this, _n2);
      __privateAdd(this, _a2);
      let t = [];
      typeof e == "string" ? t = JSON.parse(e) : t = e, __privateSet(this, _n2, /* @__PURE__ */ new Map()), __privateSet(this, _e8, /* @__PURE__ */ new Map()), __privateSet(this, _t5, /* @__PURE__ */ new Map());
      const n = [];
      for (const i of t) try {
        n.push(d0.from(i));
      } catch (f) {
        console.log(`[Warning] Invalid Fragment ${JSON.stringify(i)}:`, f.message);
      }
      m(this, {
        fragments: Object.freeze(n)
      });
      let r = null, s = false;
      __privateSet(this, _a2, this.getAbiCoder()), this.fragments.forEach((i, f) => {
        let c;
        switch (i.type) {
          case "constructor":
            if (this.deploy) {
              console.log("duplicate definition - constructor");
              return;
            }
            m(this, {
              deploy: i
            });
            return;
          case "fallback":
            i.inputs.length === 0 ? s = true : (d(!r || i.payable !== r.payable, "conflicting fallback fragments", `fragments[${f}]`, i), r = i, s = r.payable);
            return;
          case "function":
            c = __privateGet(this, _n2);
            break;
          case "event":
            c = __privateGet(this, _t5);
            break;
          case "error":
            c = __privateGet(this, _e8);
            break;
          default:
            return;
        }
        const b = i.format();
        c.has(b) || c.set(b, i);
      }), this.deploy || m(this, {
        deploy: X.from("constructor()")
      }), m(this, {
        fallback: r,
        receive: s
      });
    }
    format(e) {
      const t = e ? "minimal" : "full";
      return this.fragments.map((r) => r.format(t));
    }
    formatJson() {
      const e = this.fragments.map((t) => t.format("json"));
      return JSON.stringify(e.map((t) => JSON.parse(t)));
    }
    getAbiCoder() {
      return x0.defaultAbiCoder();
    }
    getFunctionName(e) {
      const t = __privateMethod(this, _V_instances, r_fn).call(this, e, null, false);
      return d(t, "no matching function", "key", e), t.name;
    }
    hasFunction(e) {
      return !!__privateMethod(this, _V_instances, r_fn).call(this, e, null, false);
    }
    getFunction(e, t) {
      return __privateMethod(this, _V_instances, r_fn).call(this, e, t || null, true);
    }
    forEachFunction(e) {
      const t = Array.from(__privateGet(this, _n2).keys());
      t.sort((n, r) => n.localeCompare(r));
      for (let n = 0; n < t.length; n++) {
        const r = t[n];
        e(__privateGet(this, _n2).get(r), n);
      }
    }
    getEventName(e) {
      const t = __privateMethod(this, _V_instances, s_fn2).call(this, e, null, false);
      return d(t, "no matching event", "key", e), t.name;
    }
    hasEvent(e) {
      return !!__privateMethod(this, _V_instances, s_fn2).call(this, e, null, false);
    }
    getEvent(e, t) {
      return __privateMethod(this, _V_instances, s_fn2).call(this, e, t || null, true);
    }
    forEachEvent(e) {
      const t = Array.from(__privateGet(this, _t5).keys());
      t.sort((n, r) => n.localeCompare(r));
      for (let n = 0; n < t.length; n++) {
        const r = t[n];
        e(__privateGet(this, _t5).get(r), n);
      }
    }
    getError(e, t) {
      if (J(e)) {
        const r = e.toLowerCase();
        if (j6[r]) return P.from(j6[r].signature);
        for (const s of __privateGet(this, _e8).values()) if (r === s.selector) return s;
        return null;
      }
      if (e.indexOf("(") === -1) {
        const r = [];
        for (const [s, i] of __privateGet(this, _e8)) s.split("(")[0] === e && r.push(i);
        if (r.length === 0) return e === "Error" ? P.from("error Error(string)") : e === "Panic" ? P.from("error Panic(uint256)") : null;
        if (r.length > 1) {
          const s = r.map((i) => JSON.stringify(i.format())).join(", ");
          d(false, `ambiguous error description (i.e. ${s})`, "name", e);
        }
        return r[0];
      }
      if (e = P.from(e).format(), e === "Error(string)") return P.from("error Error(string)");
      if (e === "Panic(uint256)") return P.from("error Panic(uint256)");
      const n = __privateGet(this, _e8).get(e);
      return n || null;
    }
    forEachError(e) {
      const t = Array.from(__privateGet(this, _e8).keys());
      t.sort((n, r) => n.localeCompare(r));
      for (let n = 0; n < t.length; n++) {
        const r = t[n];
        e(__privateGet(this, _e8).get(r), n);
      }
    }
    _decodeParams(e, t) {
      return __privateGet(this, _a2).decode(e, t);
    }
    _encodeParams(e, t) {
      return __privateGet(this, _a2).encode(e, t);
    }
    encodeDeploy(e) {
      return this._encodeParams(this.deploy.inputs, e || []);
    }
    decodeErrorResult(e, t) {
      if (typeof e == "string") {
        const n = this.getError(e);
        d(n, "unknown error", "fragment", e), e = n;
      }
      return d(a0(t, 0, 4) === e.selector, `data signature does not match error ${e.name}.`, "data", t), this._decodeParams(e.inputs, a0(t, 4));
    }
    encodeErrorResult(e, t) {
      if (typeof e == "string") {
        const n = this.getError(e);
        d(n, "unknown error", "fragment", e), e = n;
      }
      return f0([
        e.selector,
        this._encodeParams(e.inputs, t || [])
      ]);
    }
    decodeFunctionData(e, t) {
      if (typeof e == "string") {
        const n = this.getFunction(e);
        d(n, "unknown function", "fragment", e), e = n;
      }
      return d(a0(t, 0, 4) === e.selector, `data signature does not match function ${e.name}.`, "data", t), this._decodeParams(e.inputs, a0(t, 4));
    }
    encodeFunctionData(e, t) {
      if (typeof e == "string") {
        const n = this.getFunction(e);
        d(n, "unknown function", "fragment", e), e = n;
      }
      return f0([
        e.selector,
        this._encodeParams(e.inputs, t || [])
      ]);
    }
    decodeFunctionResult(e, t) {
      if (typeof e == "string") {
        const s = this.getFunction(e);
        d(s, "unknown function", "fragment", e), e = s;
      }
      let n = "invalid length for result data";
      const r = H(t);
      if (r.length % 32 === 0) try {
        return __privateGet(this, _a2).decode(e.outputs, r);
      } catch {
        n = "could not decode result data";
      }
      h(false, n, "BAD_DATA", {
        value: R(r),
        info: {
          method: e.name,
          signature: e.format()
        }
      });
    }
    makeError(e, t) {
      const n = S(e, "data"), r = x0.getBuiltinCallException("call", t, n);
      if (r.message.startsWith("execution reverted (unknown custom error)")) {
        const f = R(n.slice(0, 4)), c = this.getError(f);
        if (c) try {
          const b = __privateGet(this, _a2).decode(c.inputs, n.slice(4));
          r.revert = {
            name: c.name,
            signature: c.format(),
            args: b
          }, r.reason = r.revert.signature, r.message = `execution reverted: ${r.reason}`;
        } catch {
          r.message = "execution reverted (coult not decode custom error)";
        }
      }
      const i = this.parseTransaction(t);
      return i && (r.invocation = {
        method: i.name,
        signature: i.signature,
        args: i.args
      }), r;
    }
    encodeFunctionResult(e, t) {
      if (typeof e == "string") {
        const n = this.getFunction(e);
        d(n, "unknown function", "fragment", e), e = n;
      }
      return R(__privateGet(this, _a2).encode(e.outputs, t || []));
    }
    encodeFilterTopics(e, t) {
      if (typeof e == "string") {
        const s = this.getEvent(e);
        d(s, "unknown event", "eventFragment", e), e = s;
      }
      h(t.length <= e.inputs.length, `too many arguments for ${e.format()}`, "UNEXPECTED_ARGUMENT", {
        count: t.length,
        expectedCount: e.inputs.length
      });
      const n = [];
      e.anonymous || n.push(e.topicHash);
      const r = (s, i) => s.type === "string" ? A0(i) : s.type === "bytes" ? Z(R(i)) : (s.type === "bool" && typeof i == "boolean" ? i = i ? "0x01" : "0x00" : s.type.match(/^u?int/) ? i = y1(i) : s.type.match(/^bytes/) ? i = le(i, 32) : s.type === "address" && __privateGet(this, _a2).encode([
        "address"
      ], [
        i
      ]), ue(R(i), 32));
      for (t.forEach((s, i) => {
        const f = e.inputs[i];
        if (!f.indexed) {
          d(s == null, "cannot filter non-indexed parameters; must be null", "contract." + f.name, s);
          return;
        }
        s == null ? n.push(null) : f.baseType === "array" || f.baseType === "tuple" ? d(false, "filtering with tuples or arrays not supported", "contract." + f.name, s) : Array.isArray(s) ? n.push(s.map((c) => r(f, c))) : n.push(r(f, s));
      }); n.length && n[n.length - 1] === null; ) n.pop();
      return n;
    }
    encodeEventLog(e, t) {
      if (typeof e == "string") {
        const i = this.getEvent(e);
        d(i, "unknown event", "eventFragment", e), e = i;
      }
      const n = [], r = [], s = [];
      return e.anonymous || n.push(e.topicHash), d(t.length === e.inputs.length, "event arguments/values mismatch", "values", t), e.inputs.forEach((i, f) => {
        const c = t[f];
        if (i.indexed) if (i.type === "string") n.push(A0(c));
        else if (i.type === "bytes") n.push(Z(c));
        else {
          if (i.baseType === "tuple" || i.baseType === "array") throw new Error("not implemented");
          n.push(__privateGet(this, _a2).encode([
            i.type
          ], [
            c
          ]));
        }
        else r.push(i), s.push(c);
      }), {
        data: __privateGet(this, _a2).encode(r, s),
        topics: n
      };
    }
    decodeEventLog(e, t, n) {
      if (typeof e == "string") {
        const y = this.getEvent(e);
        d(y, "unknown event", "eventFragment", e), e = y;
      }
      if (n != null && !e.anonymous) {
        const y = e.topicHash;
        d(J(n[0], 32) && n[0].toLowerCase() === y, "fragment/topic mismatch", "topics[0]", n[0]), n = n.slice(1);
      }
      const r = [], s = [], i = [];
      e.inputs.forEach((y, w) => {
        y.indexed ? y.type === "string" || y.type === "bytes" || y.baseType === "tuple" || y.baseType === "array" ? (r.push(A.from({
          type: "bytes32",
          name: y.name
        })), i.push(true)) : (r.push(y), i.push(false)) : (s.push(y), i.push(false));
      });
      const f = n != null ? __privateGet(this, _a2).decode(r, f0(n)) : null, c = __privateGet(this, _a2).decode(s, t, true), b = [], o = [];
      let u = 0, l = 0;
      return e.inputs.forEach((y, w) => {
        let E = null;
        if (y.indexed) if (f == null) E = new Q6(null);
        else if (i[w]) E = new Q6(f[l++]);
        else try {
          E = f[l++];
        } catch (k) {
          E = k;
        }
        else try {
          E = c[u++];
        } catch (k) {
          E = k;
        }
        b.push(E), o.push(y.name || null);
      }), K.fromItems(b, o);
    }
    parseTransaction(e) {
      const t = S(e.data, "tx.data"), n = j(e.value != null ? e.value : 0, "tx.value"), r = this.getFunction(R(t.slice(0, 4)));
      if (!r) return null;
      const s = __privateGet(this, _a2).decode(r.inputs, t.slice(4));
      return new Bt(r, r.selector, s, n);
    }
    parseCallResult(e) {
      throw new Error("@TODO");
    }
    parseLog(e) {
      const t = this.getEvent(e.topics[0]);
      return !t || t.anonymous ? null : new Ct(t, t.topicHash, this.decodeEventLog(t, e.data, e.topics));
    }
    parseError(e) {
      const t = R(e), n = this.getError(a0(t, 0, 4));
      if (!n) return null;
      const r = __privateGet(this, _a2).decode(n.inputs, a0(t, 4));
      return new St(n, n.selector, r);
    }
    static from(e) {
      return e instanceof _V ? e : typeof e == "string" ? new _V(JSON.parse(e)) : typeof e.formatJson == "function" ? new _V(e.formatJson()) : typeof e.format == "function" ? new _V(e.format("json")) : new _V(e);
    }
  };
  _e8 = new WeakMap();
  _t5 = new WeakMap();
  _n2 = new WeakMap();
  _a2 = new WeakMap();
  _V_instances = new WeakSet();
  r_fn = function(e, t, n) {
    if (J(e)) {
      const s = e.toLowerCase();
      for (const i of __privateGet(this, _n2).values()) if (s === i.selector) return i;
      return null;
    }
    if (e.indexOf("(") === -1) {
      const s = [];
      for (const [i, f] of __privateGet(this, _n2)) i.split("(")[0] === e && s.push(f);
      if (t) {
        const i = t.length > 0 ? t[t.length - 1] : null;
        let f = t.length, c = true;
        v.isTyped(i) && i.type === "overrides" && (c = false, f--);
        for (let b = s.length - 1; b >= 0; b--) {
          const o = s[b].inputs.length;
          o !== f && (!c || o !== f - 1) && s.splice(b, 1);
        }
        for (let b = s.length - 1; b >= 0; b--) {
          const o = s[b].inputs;
          for (let u = 0; u < t.length; u++) if (v.isTyped(t[u])) {
            if (u >= o.length) {
              if (t[u].type === "overrides") continue;
              s.splice(b, 1);
              break;
            }
            if (t[u].type !== o[u].baseType) {
              s.splice(b, 1);
              break;
            }
          }
        }
      }
      if (s.length === 1 && t && t.length !== s[0].inputs.length) {
        const i = t[t.length - 1];
        (i == null || Array.isArray(i) || typeof i != "object") && s.splice(0, 1);
      }
      if (s.length === 0) return null;
      if (s.length > 1 && n) {
        const i = s.map((f) => JSON.stringify(f.format())).join(", ");
        d(false, `ambiguous function description (i.e. matches ${i})`, "key", e);
      }
      return s[0];
    }
    const r = __privateGet(this, _n2).get(W.from(e).format());
    return r || null;
  };
  s_fn2 = function(e, t, n) {
    if (J(e)) {
      const s = e.toLowerCase();
      for (const i of __privateGet(this, _t5).values()) if (s === i.topicHash) return i;
      return null;
    }
    if (e.indexOf("(") === -1) {
      const s = [];
      for (const [i, f] of __privateGet(this, _t5)) i.split("(")[0] === e && s.push(f);
      if (t) {
        for (let i = s.length - 1; i >= 0; i--) s[i].inputs.length < t.length && s.splice(i, 1);
        for (let i = s.length - 1; i >= 0; i--) {
          const f = s[i].inputs;
          for (let c = 0; c < t.length; c++) if (v.isTyped(t[c]) && t[c].type !== f[c].baseType) {
            s.splice(i, 1);
            break;
          }
        }
      }
      if (s.length === 0) return null;
      if (s.length > 1 && n) {
        const i = s.map((f) => JSON.stringify(f.format())).join(", ");
        d(false, `ambiguous event description (i.e. matches ${i})`, "key", e);
      }
      return s[0];
    }
    const r = __privateGet(this, _t5).get(D.from(e).format());
    return r || null;
  };
  let V = _V;
  const D1 = BigInt(0);
  function B(a) {
    return a == null ? null : a.toString();
  }
  function Mt(a) {
    const e = {};
    a.to && (e.to = a.to), a.from && (e.from = a.from), a.data && (e.data = R(a.data));
    const t = "chainId,gasLimit,gasPrice,maxFeePerBlobGas,maxFeePerGas,maxPriorityFeePerGas,value".split(/,/);
    for (const r of t) !(r in a) || a[r] == null || (e[r] = j(a[r], `request.${r}`));
    const n = "type,nonce".split(/,/);
    for (const r of n) !(r in a) || a[r] == null || (e[r] = e0(a[r], `request.${r}`));
    return a.accessList && (e.accessList = ht(a.accessList)), a.authorizationList && (e.authorizationList = a.authorizationList.slice()), "blockTag" in a && (e.blockTag = a.blockTag), "enableCcipRead" in a && (e.enableCcipRead = !!a.enableCcipRead), "customData" in a && (e.customData = a.customData), "blobVersionedHashes" in a && a.blobVersionedHashes && (e.blobVersionedHashes = a.blobVersionedHashes.slice()), "kzg" in a && (e.kzg = a.kzg), "blobWrapperVersion" in a && (e.blobWrapperVersion = a.blobWrapperVersion), "blobs" in a && a.blobs && (e.blobs = a.blobs.map((r) => de(r) ? R(r) : Object.assign({}, r))), e;
  }
  class K0 {
    constructor(e, t) {
      __publicField(this, "provider");
      __publicField(this, "transactionHash");
      __publicField(this, "blockHash");
      __publicField(this, "blockNumber");
      __publicField(this, "removed");
      __publicField(this, "address");
      __publicField(this, "data");
      __publicField(this, "topics");
      __publicField(this, "index");
      __publicField(this, "transactionIndex");
      this.provider = t;
      const n = Object.freeze(e.topics.slice());
      m(this, {
        transactionHash: e.transactionHash,
        blockHash: e.blockHash,
        blockNumber: e.blockNumber,
        removed: e.removed,
        address: e.address,
        data: e.data,
        topics: n,
        index: e.index,
        transactionIndex: e.transactionIndex
      });
    }
    toJSON() {
      const { address: e, blockHash: t, blockNumber: n, data: r, index: s, removed: i, topics: f, transactionHash: c, transactionIndex: b } = this;
      return {
        _type: "log",
        address: e,
        blockHash: t,
        blockNumber: n,
        data: r,
        index: s,
        removed: i,
        topics: f,
        transactionHash: c,
        transactionIndex: b
      };
    }
    async getBlock() {
      const e = await this.provider.getBlock(this.blockHash);
      return h(!!e, "failed to find transaction", "UNKNOWN_ERROR", {}), e;
    }
    async getTransaction() {
      const e = await this.provider.getTransaction(this.transactionHash);
      return h(!!e, "failed to find transaction", "UNKNOWN_ERROR", {}), e;
    }
    async getTransactionReceipt() {
      const e = await this.provider.getTransactionReceipt(this.transactionHash);
      return h(!!e, "failed to find transaction receipt", "UNKNOWN_ERROR", {}), e;
    }
    removedEvent() {
      return Ft(this);
    }
  }
  class _t {
    constructor(e, t) {
      __publicField(this, "provider");
      __publicField(this, "to");
      __publicField(this, "from");
      __publicField(this, "contractAddress");
      __publicField(this, "hash");
      __publicField(this, "index");
      __publicField(this, "blockHash");
      __publicField(this, "blockNumber");
      __publicField(this, "logsBloom");
      __publicField(this, "gasUsed");
      __publicField(this, "blobGasUsed");
      __publicField(this, "cumulativeGasUsed");
      __publicField(this, "gasPrice");
      __publicField(this, "blobGasPrice");
      __publicField(this, "type");
      __publicField(this, "status");
      __publicField(this, "root");
      __privateAdd(this, _e9);
      __privateSet(this, _e9, Object.freeze(e.logs.map((r) => new K0(r, t))));
      let n = D1;
      e.effectiveGasPrice != null ? n = e.effectiveGasPrice : e.gasPrice != null && (n = e.gasPrice), m(this, {
        provider: t,
        to: e.to,
        from: e.from,
        contractAddress: e.contractAddress,
        hash: e.hash,
        index: e.index,
        blockHash: e.blockHash,
        blockNumber: e.blockNumber,
        logsBloom: e.logsBloom,
        gasUsed: e.gasUsed,
        cumulativeGasUsed: e.cumulativeGasUsed,
        blobGasUsed: e.blobGasUsed,
        gasPrice: n,
        blobGasPrice: e.blobGasPrice,
        type: e.type,
        status: e.status,
        root: e.root
      });
    }
    get logs() {
      return __privateGet(this, _e9);
    }
    toJSON() {
      const { to: e, from: t, contractAddress: n, hash: r, index: s, blockHash: i, blockNumber: f, logsBloom: c, logs: b, status: o, root: u } = this;
      return {
        _type: "TransactionReceipt",
        blockHash: i,
        blockNumber: f,
        contractAddress: n,
        cumulativeGasUsed: B(this.cumulativeGasUsed),
        from: t,
        gasPrice: B(this.gasPrice),
        blobGasUsed: B(this.blobGasUsed),
        blobGasPrice: B(this.blobGasPrice),
        gasUsed: B(this.gasUsed),
        hash: r,
        index: s,
        logs: b,
        logsBloom: c,
        root: u,
        status: o,
        to: e
      };
    }
    get length() {
      return this.logs.length;
    }
    [Symbol.iterator]() {
      let e = 0;
      return {
        next: () => e < this.length ? {
          value: this.logs[e++],
          done: false
        } : {
          value: void 0,
          done: true
        }
      };
    }
    get fee() {
      return this.gasUsed * this.gasPrice;
    }
    async getBlock() {
      const e = await this.provider.getBlock(this.blockHash);
      if (e == null) throw new Error("TODO");
      return e;
    }
    async getTransaction() {
      const e = await this.provider.getTransaction(this.hash);
      if (e == null) throw new Error("TODO");
      return e;
    }
    async getResult() {
      return await this.provider.getTransactionResult(this.hash);
    }
    async confirmations() {
      return await this.provider.getBlockNumber() - this.blockNumber + 1;
    }
    removedEvent() {
      return V1(this);
    }
    reorderedEvent(e) {
      return h(!e || e.isMined(), "unmined 'other' transction cannot be orphaned", "UNSUPPORTED_OPERATION", {
        operation: "reorderedEvent(other)"
      }), W1(this, e);
    }
  }
  _e9 = new WeakMap();
  const _l6 = class _l6 {
    constructor(e, t) {
      __publicField(this, "provider");
      __publicField(this, "blockNumber");
      __publicField(this, "blockHash");
      __publicField(this, "index");
      __publicField(this, "hash");
      __publicField(this, "type");
      __publicField(this, "to");
      __publicField(this, "from");
      __publicField(this, "nonce");
      __publicField(this, "gasLimit");
      __publicField(this, "gasPrice");
      __publicField(this, "maxPriorityFeePerGas");
      __publicField(this, "maxFeePerGas");
      __publicField(this, "maxFeePerBlobGas");
      __publicField(this, "data");
      __publicField(this, "value");
      __publicField(this, "chainId");
      __publicField(this, "signature");
      __publicField(this, "accessList");
      __publicField(this, "blobVersionedHashes");
      __publicField(this, "authorizationList");
      __privateAdd(this, _e10);
      this.provider = t, this.blockNumber = e.blockNumber != null ? e.blockNumber : null, this.blockHash = e.blockHash != null ? e.blockHash : null, this.hash = e.hash, this.index = e.index, this.type = e.type, this.from = e.from, this.to = e.to || null, this.gasLimit = e.gasLimit, this.nonce = e.nonce, this.data = e.data, this.value = e.value, this.gasPrice = e.gasPrice, this.maxPriorityFeePerGas = e.maxPriorityFeePerGas != null ? e.maxPriorityFeePerGas : null, this.maxFeePerGas = e.maxFeePerGas != null ? e.maxFeePerGas : null, this.maxFeePerBlobGas = e.maxFeePerBlobGas != null ? e.maxFeePerBlobGas : null, this.chainId = e.chainId, this.signature = e.signature, this.accessList = e.accessList != null ? e.accessList : null, this.blobVersionedHashes = e.blobVersionedHashes != null ? e.blobVersionedHashes : null, this.authorizationList = e.authorizationList != null ? e.authorizationList : null, __privateSet(this, _e10, -1);
    }
    toJSON() {
      const { blockNumber: e, blockHash: t, index: n, hash: r, type: s, to: i, from: f, nonce: c, data: b, signature: o, accessList: u, blobVersionedHashes: l } = this;
      return {
        _type: "TransactionResponse",
        accessList: u,
        blockNumber: e,
        blockHash: t,
        blobVersionedHashes: l,
        chainId: B(this.chainId),
        data: b,
        from: f,
        gasLimit: B(this.gasLimit),
        gasPrice: B(this.gasPrice),
        hash: r,
        maxFeePerGas: B(this.maxFeePerGas),
        maxPriorityFeePerGas: B(this.maxPriorityFeePerGas),
        maxFeePerBlobGas: B(this.maxFeePerBlobGas),
        nonce: c,
        signature: o,
        to: i,
        index: n,
        type: s,
        value: B(this.value)
      };
    }
    async getBlock() {
      let e = this.blockNumber;
      if (e == null) {
        const n = await this.getTransaction();
        n && (e = n.blockNumber);
      }
      if (e == null) return null;
      const t = this.provider.getBlock(e);
      if (t == null) throw new Error("TODO");
      return t;
    }
    async getTransaction() {
      return this.provider.getTransaction(this.hash);
    }
    async confirmations() {
      if (this.blockNumber == null) {
        const { tx: t, blockNumber: n } = await n6({
          tx: this.getTransaction(),
          blockNumber: this.provider.getBlockNumber()
        });
        return t == null || t.blockNumber == null ? 0 : n - t.blockNumber + 1;
      }
      return await this.provider.getBlockNumber() - this.blockNumber + 1;
    }
    async wait(e, t) {
      const n = e ?? 1, r = t ?? 0;
      let s = __privateGet(this, _e10), i = -1, f = s === -1;
      const c = async () => {
        if (f) return null;
        const { blockNumber: l, nonce: y } = await n6({
          blockNumber: this.provider.getBlockNumber(),
          nonce: this.provider.getTransactionCount(this.from)
        });
        if (y < this.nonce) {
          s = l;
          return;
        }
        if (f) return null;
        const w = await this.getTransaction();
        if (!(w && w.blockNumber != null)) for (i === -1 && (i = s - 3, i < __privateGet(this, _e10) && (i = __privateGet(this, _e10))); i <= l; ) {
          if (f) return null;
          const E = await this.provider.getBlock(i, true);
          if (E == null) return;
          for (const k of E) if (k === this.hash) return;
          for (let k = 0; k < E.length; k++) {
            const T = await E.getTransaction(k);
            if (T.from === this.from && T.nonce === this.nonce) {
              if (f) return null;
              const N = await this.provider.getTransactionReceipt(T.hash);
              if (N == null || l - N.blockNumber + 1 < n) return;
              let $ = "replaced";
              T.data === this.data && T.to === this.to && T.value === this.value ? $ = "repriced" : T.data === "0x" && T.from === T.to && T.value === D1 && ($ = "cancelled"), h(false, "transaction was replaced", "TRANSACTION_REPLACED", {
                cancelled: $ === "replaced" || $ === "cancelled",
                reason: $,
                replacement: T.replaceableTransaction(s),
                hash: T.hash,
                receipt: N
              });
            }
          }
          i++;
        }
      }, b = (l) => {
        if (l == null || l.status !== 0) return l;
        h(false, "transaction execution reverted", "CALL_EXCEPTION", {
          action: "sendTransaction",
          data: null,
          reason: null,
          invocation: null,
          revert: null,
          transaction: {
            to: l.to,
            from: l.from,
            data: ""
          },
          receipt: l
        });
      }, o = await this.provider.getTransactionReceipt(this.hash);
      if (n === 0) return b(o);
      if (o) {
        if (n === 1 || await o.confirmations() >= n) return b(o);
      } else if (await c(), n === 0) return null;
      return await new Promise((l, y) => {
        const w = [], E = () => {
          w.forEach((T) => T());
        };
        if (w.push(() => {
          f = true;
        }), r > 0) {
          const T = setTimeout(() => {
            E(), y(T0("wait for transaction timeout", "TIMEOUT"));
          }, r);
          w.push(() => {
            clearTimeout(T);
          });
        }
        const k = async (T) => {
          if (await T.confirmations() >= n) {
            E();
            try {
              l(b(T));
            } catch (N) {
              y(N);
            }
          }
        };
        if (w.push(() => {
          this.provider.off(this.hash, k);
        }), this.provider.on(this.hash, k), s >= 0) {
          const T = async () => {
            try {
              await c();
            } catch (N) {
              if (y0(N, "TRANSACTION_REPLACED")) {
                E(), y(N);
                return;
              }
            }
            f || this.provider.once("block", T);
          };
          w.push(() => {
            this.provider.off("block", T);
          }), this.provider.once("block", T);
        }
      });
    }
    isMined() {
      return this.blockHash != null;
    }
    isLegacy() {
      return this.type === 0;
    }
    isBerlin() {
      return this.type === 1;
    }
    isLondon() {
      return this.type === 2;
    }
    isCancun() {
      return this.type === 3;
    }
    removedEvent() {
      return h(this.isMined(), "unmined transaction canot be orphaned", "UNSUPPORTED_OPERATION", {
        operation: "removeEvent()"
      }), V1(this);
    }
    reorderedEvent(e) {
      return h(this.isMined(), "unmined transaction canot be orphaned", "UNSUPPORTED_OPERATION", {
        operation: "removeEvent()"
      }), h(!e || e.isMined(), "unmined 'other' transaction canot be orphaned", "UNSUPPORTED_OPERATION", {
        operation: "removeEvent()"
      }), W1(this, e);
    }
    replaceableTransaction(e) {
      d(Number.isInteger(e) && e >= 0, "invalid startBlock", "startBlock", e);
      const t = new _l6(this, this.provider);
      return __privateSet(t, _e10, e), t;
    }
  };
  _e10 = new WeakMap();
  let l6 = _l6;
  function W1(a, e) {
    return {
      orphan: "reorder-transaction",
      tx: a,
      other: e
    };
  }
  function V1(a) {
    return {
      orphan: "drop-transaction",
      tx: a
    };
  }
  function Ft(a) {
    return {
      orphan: "drop-log",
      log: {
        transactionHash: a.transactionHash,
        blockHash: a.blockHash,
        blockNumber: a.blockNumber,
        address: a.address,
        data: a.data,
        topics: Object.freeze(a.topics.slice()),
        index: a.index
      }
    };
  }
  class p6 extends K0 {
    constructor(e, t, n) {
      super(e, e.provider);
      __publicField(this, "interface");
      __publicField(this, "fragment");
      __publicField(this, "args");
      const r = t.decodeEventLog(n, e.data, e.topics);
      m(this, {
        args: r,
        fragment: n,
        interface: t
      });
    }
    get eventName() {
      return this.fragment.name;
    }
    get eventSignature() {
      return this.fragment.format();
    }
  }
  class H1 extends K0 {
    constructor(e, t) {
      super(e, e.provider);
      __publicField(this, "error");
      m(this, {
        error: t
      });
    }
  }
  class Lt extends _t {
    constructor(e, t, n) {
      super(n, t);
      __privateAdd(this, _e11);
      __privateSet(this, _e11, e);
    }
    get logs() {
      return super.logs.map((e) => {
        const t = e.topics.length ? __privateGet(this, _e11).getEvent(e.topics[0]) : null;
        if (t) try {
          return new p6(e, __privateGet(this, _e11), t);
        } catch (n) {
          return new H1(e, n);
        }
        return e;
      });
    }
  }
  _e11 = new WeakMap();
  class y6 extends l6 {
    constructor(e, t, n) {
      super(n, t);
      __privateAdd(this, _e12);
      __privateSet(this, _e12, e);
    }
    async wait(e, t) {
      const n = await super.wait(e, t);
      return n == null ? null : new Lt(__privateGet(this, _e12), this.provider, n);
    }
  }
  _e12 = new WeakMap();
  class G1 extends ge {
    constructor(e, t, n, r) {
      super(e, t, n);
      __publicField(this, "log");
      m(this, {
        log: r
      });
    }
    async getBlock() {
      return await this.log.getBlock();
    }
    async getTransaction() {
      return await this.log.getTransaction();
    }
    async getTransactionReceipt() {
      return await this.log.getTransactionReceipt();
    }
  }
  class $t extends G1 {
    constructor(e, t, n, r, s) {
      super(e, t, n, new p6(s, e.interface, r));
      const i = e.interface.decodeEventLog(r, this.log.data, this.log.topics);
      m(this, {
        args: i,
        fragment: r
      });
    }
    get eventName() {
      return this.fragment.name;
    }
    get eventSignature() {
      return this.fragment.format();
    }
  }
  const e1 = BigInt(0);
  function z1(a) {
    return a && typeof a.call == "function";
  }
  function J1(a) {
    return a && typeof a.estimateGas == "function";
  }
  function X0(a) {
    return a && typeof a.resolveName == "function";
  }
  function K1(a) {
    return a && typeof a.sendTransaction == "function";
  }
  function X1(a) {
    if (a != null) {
      if (X0(a)) return a;
      if (a.provider) return a.provider;
    }
  }
  class Dt {
    constructor(e, t, n) {
      __privateAdd(this, _e13);
      __publicField(this, "fragment");
      if (m(this, {
        fragment: t
      }), t.inputs.length < n.length) throw new Error("too many arguments");
      const r = u0(e.runner, "resolveName"), s = X0(r) ? r : null;
      __privateSet(this, _e13, (async function() {
        const i = await Promise.all(t.inputs.map((f, c) => n[c] == null ? null : f.walkAsync(n[c], (o, u) => o === "address" ? Array.isArray(u) ? Promise.all(u.map((l) => E0(l, s))) : E0(u, s) : u)));
        return e.interface.encodeFilterTopics(t, i);
      })());
    }
    getTopicFilter() {
      return __privateGet(this, _e13);
    }
  }
  _e13 = new WeakMap();
  function u0(a, e) {
    return a == null ? null : typeof a[e] == "function" ? a : a.provider && typeof a.provider[e] == "function" ? a.provider : null;
  }
  function i0(a) {
    return a == null ? null : a.provider || null;
  }
  async function h6(a, e) {
    const t = v.dereference(a, "overrides");
    d(typeof t == "object", "invalid overrides parameter", "overrides", a);
    const n = Mt(t);
    return d(n.to == null || (e || []).indexOf("to") >= 0, "cannot override to", "overrides.to", n.to), d(n.data == null || (e || []).indexOf("data") >= 0, "cannot override data", "overrides.data", n.data), n.from && (n.from = n.from), n;
  }
  async function Y1(a, e, t) {
    const n = u0(a, "resolveName"), r = X0(n) ? n : null;
    return await Promise.all(e.map((s, i) => s.walkAsync(t[i], (f, c) => (c = v.dereference(c, f), f === "address" ? E0(c, r) : c))));
  }
  function Wt(a) {
    const e = async function(i) {
      const f = await h6(i, [
        "data"
      ]);
      f.to = await a.getAddress(), f.from && (f.from = await E0(f.from, X1(a.runner)));
      const c = a.interface, b = j(f.value || e1, "overrides.value") === e1, o = (f.data || "0x") === "0x";
      c.fallback && !c.fallback.payable && c.receive && !o && !b && d(false, "cannot send data to receive or send value to non-payable fallback", "overrides", i), d(c.fallback || o, "cannot send data to receive-only contract", "overrides.data", f.data);
      const u = c.receive || c.fallback && c.fallback.payable;
      return d(u || b, "cannot send value to non-payable fallback", "overrides.value", f.value), d(c.fallback || o, "cannot send data to receive-only contract", "overrides.data", f.data), f;
    }, t = async function(i) {
      const f = u0(a.runner, "call");
      h(z1(f), "contract runner does not support calling", "UNSUPPORTED_OPERATION", {
        operation: "call"
      });
      const c = await e(i);
      try {
        return await f.call(c);
      } catch (b) {
        throw o1(b) && b.data ? a.interface.makeError(b.data, c) : b;
      }
    }, n = async function(i) {
      const f = a.runner;
      h(K1(f), "contract runner does not support sending transactions", "UNSUPPORTED_OPERATION", {
        operation: "sendTransaction"
      });
      const c = await f.sendTransaction(await e(i)), b = i0(a.runner);
      return new y6(a.interface, b, c);
    }, r = async function(i) {
      const f = u0(a.runner, "estimateGas");
      return h(J1(f), "contract runner does not support gas estimation", "UNSUPPORTED_OPERATION", {
        operation: "estimateGas"
      }), await f.estimateGas(await e(i));
    }, s = async (i) => await n(i);
    return m(s, {
      _contract: a,
      estimateGas: r,
      populateTransaction: e,
      send: n,
      staticCall: t
    }), s;
  }
  function Vt(a, e) {
    const t = function(...b) {
      const o = a.interface.getFunction(e, b);
      return h(o, "no matching fragment", "UNSUPPORTED_OPERATION", {
        operation: "fragment",
        info: {
          key: e,
          args: b
        }
      }), o;
    }, n = async function(...b) {
      const o = t(...b);
      let u = {};
      if (o.inputs.length + 1 === b.length && (u = await h6(b.pop()), u.from && (u.from = await E0(u.from, X1(a.runner)))), o.inputs.length !== b.length) throw new Error("internal error: fragment inputs doesn't match arguments; should not happen");
      const l = await Y1(a.runner, o.inputs, b);
      return Object.assign({}, u, await n6({
        to: a.getAddress(),
        data: a.interface.encodeFunctionData(o, l)
      }));
    }, r = async function(...b) {
      const o = await f(...b);
      return o.length === 1 ? o[0] : o;
    }, s = async function(...b) {
      const o = a.runner;
      h(K1(o), "contract runner does not support sending transactions", "UNSUPPORTED_OPERATION", {
        operation: "sendTransaction"
      });
      const u = await o.sendTransaction(await n(...b)), l = i0(a.runner);
      return new y6(a.interface, l, u);
    }, i = async function(...b) {
      const o = u0(a.runner, "estimateGas");
      return h(J1(o), "contract runner does not support gas estimation", "UNSUPPORTED_OPERATION", {
        operation: "estimateGas"
      }), await o.estimateGas(await n(...b));
    }, f = async function(...b) {
      const o = u0(a.runner, "call");
      h(z1(o), "contract runner does not support calling", "UNSUPPORTED_OPERATION", {
        operation: "call"
      });
      const u = await n(...b);
      let l = "0x";
      try {
        l = await o.call(u);
      } catch (w) {
        throw o1(w) && w.data ? a.interface.makeError(w.data, u) : w;
      }
      const y = t(...b);
      return a.interface.decodeFunctionResult(y, l);
    }, c = async (...b) => t(...b).constant ? await r(...b) : await s(...b);
    return m(c, {
      name: a.interface.getFunctionName(e),
      _contract: a,
      _key: e,
      getFragment: t,
      estimateGas: i,
      populateTransaction: n,
      send: s,
      staticCall: r,
      staticCallResult: f
    }), Object.defineProperty(c, "fragment", {
      configurable: false,
      enumerable: true,
      get: () => {
        const b = a.interface.getFunction(e);
        return h(b, "no matching fragment", "UNSUPPORTED_OPERATION", {
          operation: "fragment",
          info: {
            key: e
          }
        }), b;
      }
    }), c;
  }
  function Ht(a, e) {
    const t = function(...r) {
      const s = a.interface.getEvent(e, r);
      return h(s, "no matching fragment", "UNSUPPORTED_OPERATION", {
        operation: "fragment",
        info: {
          key: e,
          args: r
        }
      }), s;
    }, n = function(...r) {
      return new Dt(a, t(...r), r);
    };
    return m(n, {
      name: a.interface.getEventName(e),
      _contract: a,
      _key: e,
      getFragment: t
    }), Object.defineProperty(n, "fragment", {
      configurable: false,
      enumerable: true,
      get: () => {
        const r = a.interface.getEvent(e);
        return h(r, "no matching fragment", "UNSUPPORTED_OPERATION", {
          operation: "fragment",
          info: {
            key: e
          }
        }), r;
      }
    }), n;
  }
  const V0 = Symbol.for("_ethersInternal_contract"), Z1 = /* @__PURE__ */ new WeakMap();
  function Gt(a, e) {
    Z1.set(a[V0], e);
  }
  function C(a) {
    return Z1.get(a[V0]);
  }
  function zt(a) {
    return a && typeof a == "object" && "getTopicFilter" in a && typeof a.getTopicFilter == "function" && a.fragment;
  }
  async function m6(a, e) {
    let t, n = null;
    if (Array.isArray(e)) {
      const s = function(i) {
        if (J(i, 32)) return i;
        const f = a.interface.getEvent(i);
        return d(f, "unknown fragment", "name", i), f.topicHash;
      };
      t = e.map((i) => i == null ? null : Array.isArray(i) ? i.map(s) : s(i));
    } else e === "*" ? t = [
      null
    ] : typeof e == "string" ? J(e, 32) ? t = [
      e
    ] : (n = a.interface.getEvent(e), d(n, "unknown fragment", "event", e), t = [
      n.topicHash
    ]) : zt(e) ? t = await e.getTopicFilter() : "fragment" in e ? (n = e.fragment, t = [
      n.topicHash
    ]) : d(false, "unknown event name", "event", e);
    t = t.map((s) => {
      if (s == null) return null;
      if (Array.isArray(s)) {
        const i = Array.from(new Set(s.map((f) => f.toLowerCase())).values());
        return i.length === 1 ? i[0] : (i.sort(), i);
      }
      return s.toLowerCase();
    });
    const r = t.map((s) => s == null ? "null" : Array.isArray(s) ? s.join("|") : s).join("&");
    return {
      fragment: n,
      tag: r,
      topics: t
    };
  }
  async function g0(a, e) {
    const { subs: t } = C(a);
    return t.get((await m6(a, e)).tag) || null;
  }
  async function t1(a, e, t) {
    const n = i0(a.runner);
    h(n, "contract runner does not support subscribing", "UNSUPPORTED_OPERATION", {
      operation: e
    });
    const { fragment: r, tag: s, topics: i } = await m6(a, t), { addr: f, subs: c } = C(a);
    let b = c.get(s);
    if (!b) {
      const u = {
        address: f || a,
        topics: i
      }, l = (k) => {
        let T = r;
        if (T == null) try {
          T = a.interface.getEvent(k.topics[0]);
        } catch {
        }
        if (T) {
          const N = T, $ = r ? a.interface.decodeEventLog(r, k.data, k.topics) : [];
          f6(a, t, $, (R0) => new $t(a, R0, t, N, k));
        } else f6(a, t, [], (N) => new G1(a, N, t, k));
      };
      let y = [];
      b = {
        tag: s,
        listeners: [],
        start: () => {
          y.length || y.push(n.on(u, l));
        },
        stop: async () => {
          if (y.length == 0) return;
          let k = y;
          y = [], await Promise.all(k), n.off(u, l);
        }
      }, c.set(s, b);
    }
    return b;
  }
  let i6 = Promise.resolve();
  async function Jt(a, e, t, n) {
    await i6;
    const r = await g0(a, e);
    if (!r) return false;
    const s = r.listeners.length;
    return r.listeners = r.listeners.filter(({ listener: i, once: f }) => {
      const c = Array.from(t);
      n && c.push(n(f ? null : i));
      try {
        i.call(a, ...c);
      } catch {
      }
      return !f;
    }), r.listeners.length === 0 && (r.stop(), C(a).subs.delete(r.tag)), s > 0;
  }
  async function f6(a, e, t, n) {
    try {
      await i6;
    } catch {
    }
    const r = Jt(a, e, t, n);
    return i6 = r, await r;
  }
  const _0 = [
    "then"
  ];
  _a3 = V0;
  const _b0 = class _b0 {
    constructor(e, t, n, r) {
      __publicField(this, "target");
      __publicField(this, "interface");
      __publicField(this, "runner");
      __publicField(this, "filters");
      __publicField(this, _a3);
      __publicField(this, "fallback");
      d(typeof e == "string" || O1(e), "invalid value for Contract target", "target", e), n == null && (n = null);
      const s = V.from(t);
      m(this, {
        target: e,
        runner: n,
        interface: s
      }), Object.defineProperty(this, V0, {
        value: {}
      });
      let i, f = null, c = null;
      if (r) {
        const u = i0(n);
        c = new y6(this.interface, u, r);
      }
      let b = /* @__PURE__ */ new Map();
      if (typeof e == "string") if (J(e)) f = e, i = Promise.resolve(e);
      else {
        const u = u0(n, "resolveName");
        if (!X0(u)) throw T0("contract runner does not support name resolution", "UNSUPPORTED_OPERATION", {
          operation: "resolveName"
        });
        i = u.resolveName(e).then((l) => {
          if (l == null) throw T0("an ENS name used for a contract target must be correctly configured", "UNCONFIGURED_NAME", {
            value: e
          });
          return C(this).addr = l, l;
        });
      }
      else i = e.getAddress().then((u) => {
        if (u == null) throw new Error("TODO");
        return C(this).addr = u, u;
      });
      Gt(this, {
        addrPromise: i,
        addr: f,
        deployTx: c,
        subs: b
      });
      const o = new Proxy({}, {
        get: (u, l, y) => {
          if (typeof l == "symbol" || _0.indexOf(l) >= 0) return Reflect.get(u, l, y);
          try {
            return this.getEvent(l);
          } catch (w) {
            if (!y0(w, "INVALID_ARGUMENT") || w.argument !== "key") throw w;
          }
        },
        has: (u, l) => _0.indexOf(l) >= 0 ? Reflect.has(u, l) : Reflect.has(u, l) || this.interface.hasEvent(String(l))
      });
      return m(this, {
        filters: o
      }), m(this, {
        fallback: s.receive || s.fallback ? Wt(this) : null
      }), new Proxy(this, {
        get: (u, l, y) => {
          if (typeof l == "symbol" || l in u || _0.indexOf(l) >= 0) return Reflect.get(u, l, y);
          try {
            return u.getFunction(l);
          } catch (w) {
            if (!y0(w, "INVALID_ARGUMENT") || w.argument !== "key") throw w;
          }
        },
        has: (u, l) => typeof l == "symbol" || l in u || _0.indexOf(l) >= 0 ? Reflect.has(u, l) : u.interface.hasFunction(l)
      });
    }
    connect(e) {
      return new _b0(this.target, this.interface, e);
    }
    attach(e) {
      return new _b0(e, this.interface, this.runner);
    }
    async getAddress() {
      return await C(this).addrPromise;
    }
    async getDeployedCode() {
      const e = i0(this.runner);
      h(e, "runner does not support .provider", "UNSUPPORTED_OPERATION", {
        operation: "getDeployedCode"
      });
      const t = await e.getCode(await this.getAddress());
      return t === "0x" ? null : t;
    }
    async waitForDeployment() {
      const e = this.deploymentTransaction();
      if (e) return await e.wait(), this;
      if (await this.getDeployedCode() != null) return this;
      const n = i0(this.runner);
      return h(n != null, "contract runner does not support .provider", "UNSUPPORTED_OPERATION", {
        operation: "waitForDeployment"
      }), new Promise((r, s) => {
        const i = async () => {
          try {
            if (await this.getDeployedCode() != null) return r(this);
            n.once("block", i);
          } catch (f) {
            s(f);
          }
        };
        i();
      });
    }
    deploymentTransaction() {
      return C(this).deployTx;
    }
    getFunction(e) {
      return typeof e != "string" && (e = e.format()), Vt(this, e);
    }
    getEvent(e) {
      return typeof e != "string" && (e = e.format()), Ht(this, e);
    }
    async queryTransaction(e) {
      throw new Error("@TODO");
    }
    async queryFilter(e, t, n) {
      t == null && (t = 0), n == null && (n = "latest");
      const { addr: r, addrPromise: s } = C(this), i = r || await s, { fragment: f, topics: c } = await m6(this, e), b = {
        address: i,
        topics: c,
        fromBlock: t,
        toBlock: n
      }, o = i0(this.runner);
      return h(o, "contract runner does not have a provider", "UNSUPPORTED_OPERATION", {
        operation: "queryFilter"
      }), (await o.getLogs(b)).map((u) => {
        let l = f;
        if (l == null) try {
          l = this.interface.getEvent(u.topics[0]);
        } catch {
        }
        if (l) try {
          return new p6(u, this.interface, l);
        } catch (y) {
          return new H1(u, y);
        }
        return new K0(u, o);
      });
    }
    async on(e, t) {
      const n = await t1(this, "on", e);
      return n.listeners.push({
        listener: t,
        once: false
      }), n.start(), this;
    }
    async once(e, t) {
      const n = await t1(this, "once", e);
      return n.listeners.push({
        listener: t,
        once: true
      }), n.start(), this;
    }
    async emit(e, ...t) {
      return await f6(this, e, t, null);
    }
    async listenerCount(e) {
      if (e) {
        const r = await g0(this, e);
        return r ? r.listeners.length : 0;
      }
      const { subs: t } = C(this);
      let n = 0;
      for (const { listeners: r } of t.values()) n += r.length;
      return n;
    }
    async listeners(e) {
      if (e) {
        const r = await g0(this, e);
        return r ? r.listeners.map(({ listener: s }) => s) : [];
      }
      const { subs: t } = C(this);
      let n = [];
      for (const { listeners: r } of t.values()) n = n.concat(r.map(({ listener: s }) => s));
      return n;
    }
    async off(e, t) {
      const n = await g0(this, e);
      if (!n) return this;
      if (t) {
        const r = n.listeners.map(({ listener: s }) => s).indexOf(t);
        r >= 0 && n.listeners.splice(r, 1);
      }
      return (t == null || n.listeners.length === 0) && (n.stop(), C(this).subs.delete(n.tag)), this;
    }
    async removeAllListeners(e) {
      if (e) {
        const t = await g0(this, e);
        if (!t) return this;
        t.stop(), C(this).subs.delete(t.tag);
      } else {
        const { subs: t } = C(this);
        for (const { tag: n, stop: r } of t.values()) r(), t.delete(n);
      }
      return this;
    }
    async addListener(e, t) {
      return await this.on(e, t);
    }
    async removeListener(e, t) {
      return await this.off(e, t);
    }
    static buildClass(e) {
      class t extends _b0 {
        constructor(r, s = null) {
          super(r, e, s);
        }
      }
      return t;
    }
    static from(e, t, n) {
      return n == null && (n = null), new this(e, t, n);
    }
  };
  let b0 = _b0;
  function Kt() {
    return b0;
  }
  class H0 extends Kt() {
  }
  class Y0 {
    constructor(e, t, n) {
      __publicField(this, "interface");
      __publicField(this, "bytecode");
      __publicField(this, "runner");
      const r = V.from(e);
      t instanceof Uint8Array || (typeof t == "object" && (t = t.object), t.startsWith("0x") || (t = "0x" + t)), t = R(S(t)), m(this, {
        bytecode: t,
        interface: r,
        runner: n || null
      });
    }
    attach(e) {
      return new b0(e, this.interface, this.runner);
    }
    async getDeployTransaction(...e) {
      let t = {};
      const n = this.interface.deploy;
      if (n.inputs.length + 1 === e.length && (t = await h6(e.pop())), n.inputs.length !== e.length) throw new Error("incorrect number of arguments to constructor");
      const r = await Y1(this.runner, n.inputs, e), s = f0([
        this.bytecode,
        this.interface.encodeDeploy(r)
      ]);
      return Object.assign({}, t, {
        data: s
      });
    }
    async deploy(...e) {
      const t = await this.getDeployTransaction(...e);
      h(this.runner && typeof this.runner.sendTransaction == "function", "factory runner does not support sending transactions", "UNSUPPORTED_OPERATION", {
        operation: "sendTransaction"
      });
      const n = await this.runner.sendTransaction(t), r = nt(n);
      return new b0(r, this.interface, this.runner, n);
    }
    connect(e) {
      return new Y0(this.interface, this.bytecode, e);
    }
    static fromSolidity(e, t) {
      d(e != null, "bad compiler output", "output", e), typeof e == "string" && (e = JSON.parse(e));
      const n = e.abi;
      let r = "";
      return e.bytecode ? r = e.bytecode : e.evm && e.evm.bytecode && (r = e.evm.bytecode), new this(n, r, t);
    }
  }
  const Xt = [
    "function transferTokensWithRelay(address token, uint256 amount, uint16 targetChain, bytes32 targetRecipient, uint32 nonce, bytes32 dstTransferRecipient, bytes32 dstExecutionAddress, uint256 executionAmount, address refundAddr, bytes calldata signedQuoteBytes, bytes calldata relayInstructions) payable returns (uint64)",
    "function wrapAndTransferEthWithRelay(uint16 targetChain, bytes32 targetRecipient, uint32 nonce, bytes32 dstTransferRecipient, bytes32 dstExecutionAddress, uint256 executionAmount, address refundAddr, bytes calldata signedQuoteBytes, bytes calldata relayInstructions) payable returns (uint64)",
    "function executeVAAv1(bytes calldata encodedTransferMessage) payable"
  ], Yt = [
    "function transferTokensWithRelay(address tokenBridgeRelayer, address token, uint256 amount, uint16 targetChain, bytes32 targetRecipient, uint32 nonce, bytes32 dstTransferRecipient, bytes32 dstExecutionAddress, uint256 executionAmount, address refundAddr, bytes calldata signedQuoteBytes, bytes calldata relayInstructions, tuple(uint256 transferTokenFee, uint256 nativeTokenFee, address payee) feeArgs) payable returns (uint64)",
    "function wrapAndTransferEthWithRelay(address tokenBridgeRelayer, uint256 amount, uint16 targetChain, bytes32 targetRecipient, uint32 nonce, bytes32 dstTransferRecipient, bytes32 dstExecutionAddress, uint256 executionAmount, address refundAddr, bytes calldata signedQuoteBytes, bytes calldata relayInstructions, tuple(uint256 transferTokenFee, uint256 nativeTokenFee, address payee) feeArgs) payable returns (uint64)"
  ];
  g6 = class {
    constructor(e, t, n, r) {
      __publicField(this, "network");
      __publicField(this, "chain");
      __publicField(this, "provider");
      __publicField(this, "contracts");
      __publicField(this, "chainId");
      __publicField(this, "relayerAddress");
      __publicField(this, "relayerWithReferrerAddress");
      __publicField(this, "relayerWithReferrerContract");
      __publicField(this, "core");
      this.network = e, this.chain = t, this.provider = n, this.contracts = r, this.chainId = s1.get(e, t);
      const s = this.contracts.executorTokenBridge;
      if (!s) throw new Error(`Wormhole Executor Token Bridge contracts for domain ${t} not found`);
      this.relayerAddress = s.relayer;
      const i = s.relayerWithReferrer;
      if (!i) throw new Error(`Wormhole Token Bridge Relayer With Referrer contract for domain ${t} not found`);
      this.relayerWithReferrerAddress = i, this.relayerWithReferrerContract = new H0(this.relayerWithReferrerAddress, Yt, n), this.core = new r1(e, t, n, r);
    }
    static async fromRpc(e, t) {
      const [n, r] = await w0.chainFromRpc(e), s = t[r];
      if (s.network !== n) throw new Error(`Network mismatch: ${s.network} != ${n}`);
      return new g6(n, r, e, s.contracts);
    }
    async *transfer(e, t, n, r, s, i) {
      const f = re.get(this.network, t.chain);
      if (!f || !f.relayer) throw new Error(`Token Bridge Executor Relayer contract for domain ${t.chain} not found`);
      const c = f.relayer, b = new _(e).unwrap(), o = $0(t.chain), u = t.address.toUniversalAddress(), { estimatedCost: l, signedQuote: y, relayInstructions: w } = s, E = x6(ne, y), k = x6(ae, w), T = await this.core.getMessageFee(), N = 0, $ = se(this.network, t.chain, c), R0 = v6(t.chain, $.dstTransferRecipient), w6 = v6(t.chain, $.dstExecutionAddress), N0 = l, T6 = b;
      let Z0;
      const Q0 = (i == null ? void 0 : i.transferTokenFee) ?? 0n, q0 = (i == null ? void 0 : i.nativeTokenFee) ?? 0n, E6 = (i == null ? void 0 : i.referrer.address.toString()) ?? Ze, O0 = (i == null ? void 0 : i.remainingAmount) ?? r;
      if (W0(n)) {
        const I0 = q0 + Q0, P0 = {
          transferTokenFee: 0n,
          nativeTokenFee: I0,
          payee: E6
        };
        Z0 = await this.relayerWithReferrerContract.getFunction("wrapAndTransferEthWithRelay").populateTransaction(this.relayerAddress, O0, o, u.toUint8Array(), N, R0.toUint8Array(), w6.toUint8Array(), N0, T6, E, k, P0, {
          value: O0 + T + N0 + I0
        });
      } else {
        const I0 = {
          transferTokenFee: Q0,
          nativeTokenFee: q0,
          payee: E6
        }, P0 = w0.getTokenImplementation(this.provider, n.toString()), A6 = O0 + Q0;
        if (await P0.allowance(b, this.relayerWithReferrerAddress) < A6) {
          const q1 = await P0.approve.populateTransaction(this.relayerWithReferrerAddress, A6);
          yield this.createUnsignedTx(q1, "approve");
        }
        Z0 = await this.relayerWithReferrerContract.getFunction("transferTokensWithRelay").populateTransaction(this.relayerAddress, n.toString(), O0, o, u.toUint8Array(), N, R0.toUint8Array(), w6.toUint8Array(), N0, T6, E, k, I0, {
          value: T + N0 + q0
        });
      }
      yield this.createUnsignedTx(r0(Z0, b), W0(n) ? "wrapAndTransferEthWithRelay" : "transferTokensWithRelay");
    }
    async *redeem(e, t) {
      const n = new _(e).toString(), r = D0(t), s = new _(t.payload.to.address).toString(), f = await new H0(s, Xt, this.provider).getFunction("executeVAAv1").populateTransaction(r, {
        value: 0n
      });
      yield this.createUnsignedTx(r0(f, n), "ExecutorTokenBridge.executeVAAv1");
    }
    async estimateMsgValueAndGasLimit(e, t) {
      let n;
      switch (e.chain) {
        case "Arbitrum":
        case "Bsc":
        case "MegaETH":
        case "Monad":
        case "Moonbeam":
          n = 1000000n;
          break;
        default:
          n = 650000n;
          break;
      }
      return {
        msgValue: 0n,
        gasLimit: n
      };
    }
    createUnsignedTx(e, t) {
      return new f1(c1(e, this.chainId), this.network, this.chain, t);
    }
  };
  const F0 = [
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "previousAdmin",
          type: "address"
        },
        {
          indexed: false,
          internalType: "address",
          name: "newAdmin",
          type: "address"
        }
      ],
      name: "AdminChanged",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "beacon",
          type: "address"
        }
      ],
      name: "BeaconUpgraded",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "oldContract",
          type: "address"
        },
        {
          indexed: true,
          internalType: "address",
          name: "newContract",
          type: "address"
        }
      ],
      name: "ContractUpgraded",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "uint16",
          name: "emitterChainId",
          type: "uint16"
        },
        {
          indexed: true,
          internalType: "bytes32",
          name: "emitterAddress",
          type: "bytes32"
        },
        {
          indexed: true,
          internalType: "uint64",
          name: "sequence",
          type: "uint64"
        }
      ],
      name: "TransferRedeemed",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "implementation",
          type: "address"
        }
      ],
      name: "Upgraded",
      type: "event"
    },
    {
      inputs: [],
      name: "WETH",
      outputs: [
        {
          internalType: "contract IWETH",
          name: "",
          type: "address"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "bytes",
          name: "encoded",
          type: "bytes"
        }
      ],
      name: "_parseTransferCommon",
      outputs: [
        {
          components: [
            {
              internalType: "uint8",
              name: "payloadID",
              type: "uint8"
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            },
            {
              internalType: "bytes32",
              name: "tokenAddress",
              type: "bytes32"
            },
            {
              internalType: "uint16",
              name: "tokenChain",
              type: "uint16"
            },
            {
              internalType: "bytes32",
              name: "to",
              type: "bytes32"
            },
            {
              internalType: "uint16",
              name: "toChain",
              type: "uint16"
            },
            {
              internalType: "uint256",
              name: "fee",
              type: "uint256"
            }
          ],
          internalType: "struct BridgeStructs.Transfer",
          name: "transfer",
          type: "tuple"
        }
      ],
      stateMutability: "pure",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "tokenAddress",
          type: "address"
        },
        {
          internalType: "uint32",
          name: "nonce",
          type: "uint32"
        }
      ],
      name: "attestToken",
      outputs: [
        {
          internalType: "uint64",
          name: "sequence",
          type: "uint64"
        }
      ],
      stateMutability: "payable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "uint16",
          name: "chainId_",
          type: "uint16"
        }
      ],
      name: "bridgeContracts",
      outputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "chainId",
      outputs: [
        {
          internalType: "uint16",
          name: "",
          type: "uint16"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "bytes",
          name: "encodedVm",
          type: "bytes"
        }
      ],
      name: "completeTransfer",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "bytes",
          name: "encodedVm",
          type: "bytes"
        }
      ],
      name: "completeTransferAndUnwrapETH",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "bytes",
          name: "encodedVm",
          type: "bytes"
        }
      ],
      name: "completeTransferAndUnwrapETHWithPayload",
      outputs: [
        {
          internalType: "bytes",
          name: "",
          type: "bytes"
        }
      ],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "bytes",
          name: "encodedVm",
          type: "bytes"
        }
      ],
      name: "completeTransferWithPayload",
      outputs: [
        {
          internalType: "bytes",
          name: "",
          type: "bytes"
        }
      ],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "bytes",
          name: "encodedVm",
          type: "bytes"
        }
      ],
      name: "createWrapped",
      outputs: [
        {
          internalType: "address",
          name: "token",
          type: "address"
        }
      ],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          components: [
            {
              internalType: "uint8",
              name: "payloadID",
              type: "uint8"
            },
            {
              internalType: "bytes32",
              name: "tokenAddress",
              type: "bytes32"
            },
            {
              internalType: "uint16",
              name: "tokenChain",
              type: "uint16"
            },
            {
              internalType: "uint8",
              name: "decimals",
              type: "uint8"
            },
            {
              internalType: "bytes32",
              name: "symbol",
              type: "bytes32"
            },
            {
              internalType: "bytes32",
              name: "name",
              type: "bytes32"
            }
          ],
          internalType: "struct BridgeStructs.AssetMeta",
          name: "meta",
          type: "tuple"
        }
      ],
      name: "encodeAssetMeta",
      outputs: [
        {
          internalType: "bytes",
          name: "encoded",
          type: "bytes"
        }
      ],
      stateMutability: "pure",
      type: "function"
    },
    {
      inputs: [
        {
          components: [
            {
              internalType: "uint8",
              name: "payloadID",
              type: "uint8"
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            },
            {
              internalType: "bytes32",
              name: "tokenAddress",
              type: "bytes32"
            },
            {
              internalType: "uint16",
              name: "tokenChain",
              type: "uint16"
            },
            {
              internalType: "bytes32",
              name: "to",
              type: "bytes32"
            },
            {
              internalType: "uint16",
              name: "toChain",
              type: "uint16"
            },
            {
              internalType: "uint256",
              name: "fee",
              type: "uint256"
            }
          ],
          internalType: "struct BridgeStructs.Transfer",
          name: "transfer",
          type: "tuple"
        }
      ],
      name: "encodeTransfer",
      outputs: [
        {
          internalType: "bytes",
          name: "encoded",
          type: "bytes"
        }
      ],
      stateMutability: "pure",
      type: "function"
    },
    {
      inputs: [
        {
          components: [
            {
              internalType: "uint8",
              name: "payloadID",
              type: "uint8"
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            },
            {
              internalType: "bytes32",
              name: "tokenAddress",
              type: "bytes32"
            },
            {
              internalType: "uint16",
              name: "tokenChain",
              type: "uint16"
            },
            {
              internalType: "bytes32",
              name: "to",
              type: "bytes32"
            },
            {
              internalType: "uint16",
              name: "toChain",
              type: "uint16"
            },
            {
              internalType: "bytes32",
              name: "fromAddress",
              type: "bytes32"
            },
            {
              internalType: "bytes",
              name: "payload",
              type: "bytes"
            }
          ],
          internalType: "struct BridgeStructs.TransferWithPayload",
          name: "transfer",
          type: "tuple"
        }
      ],
      name: "encodeTransferWithPayload",
      outputs: [
        {
          internalType: "bytes",
          name: "encoded",
          type: "bytes"
        }
      ],
      stateMutability: "pure",
      type: "function"
    },
    {
      inputs: [],
      name: "evmChainId",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "finality",
      outputs: [
        {
          internalType: "uint8",
          name: "",
          type: "uint8"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "hash",
          type: "bytes32"
        }
      ],
      name: "governanceActionIsConsumed",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "governanceChainId",
      outputs: [
        {
          internalType: "uint16",
          name: "",
          type: "uint16"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "governanceContract",
      outputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "isFork",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "impl",
          type: "address"
        }
      ],
      name: "isInitialized",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "hash",
          type: "bytes32"
        }
      ],
      name: "isTransferCompleted",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "token",
          type: "address"
        }
      ],
      name: "isWrappedAsset",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "token",
          type: "address"
        }
      ],
      name: "outstandingBridged",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "bytes",
          name: "encoded",
          type: "bytes"
        }
      ],
      name: "parseAssetMeta",
      outputs: [
        {
          components: [
            {
              internalType: "uint8",
              name: "payloadID",
              type: "uint8"
            },
            {
              internalType: "bytes32",
              name: "tokenAddress",
              type: "bytes32"
            },
            {
              internalType: "uint16",
              name: "tokenChain",
              type: "uint16"
            },
            {
              internalType: "uint8",
              name: "decimals",
              type: "uint8"
            },
            {
              internalType: "bytes32",
              name: "symbol",
              type: "bytes32"
            },
            {
              internalType: "bytes32",
              name: "name",
              type: "bytes32"
            }
          ],
          internalType: "struct BridgeStructs.AssetMeta",
          name: "meta",
          type: "tuple"
        }
      ],
      stateMutability: "pure",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "bytes",
          name: "encoded",
          type: "bytes"
        }
      ],
      name: "parsePayloadID",
      outputs: [
        {
          internalType: "uint8",
          name: "payloadID",
          type: "uint8"
        }
      ],
      stateMutability: "pure",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "bytes",
          name: "encodedRecoverChainId",
          type: "bytes"
        }
      ],
      name: "parseRecoverChainId",
      outputs: [
        {
          components: [
            {
              internalType: "bytes32",
              name: "module",
              type: "bytes32"
            },
            {
              internalType: "uint8",
              name: "action",
              type: "uint8"
            },
            {
              internalType: "uint256",
              name: "evmChainId",
              type: "uint256"
            },
            {
              internalType: "uint16",
              name: "newChainId",
              type: "uint16"
            }
          ],
          internalType: "struct BridgeStructs.RecoverChainId",
          name: "rci",
          type: "tuple"
        }
      ],
      stateMutability: "pure",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "bytes",
          name: "encoded",
          type: "bytes"
        }
      ],
      name: "parseRegisterChain",
      outputs: [
        {
          components: [
            {
              internalType: "bytes32",
              name: "module",
              type: "bytes32"
            },
            {
              internalType: "uint8",
              name: "action",
              type: "uint8"
            },
            {
              internalType: "uint16",
              name: "chainId",
              type: "uint16"
            },
            {
              internalType: "uint16",
              name: "emitterChainID",
              type: "uint16"
            },
            {
              internalType: "bytes32",
              name: "emitterAddress",
              type: "bytes32"
            }
          ],
          internalType: "struct BridgeStructs.RegisterChain",
          name: "chain",
          type: "tuple"
        }
      ],
      stateMutability: "pure",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "bytes",
          name: "encoded",
          type: "bytes"
        }
      ],
      name: "parseTransfer",
      outputs: [
        {
          components: [
            {
              internalType: "uint8",
              name: "payloadID",
              type: "uint8"
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            },
            {
              internalType: "bytes32",
              name: "tokenAddress",
              type: "bytes32"
            },
            {
              internalType: "uint16",
              name: "tokenChain",
              type: "uint16"
            },
            {
              internalType: "bytes32",
              name: "to",
              type: "bytes32"
            },
            {
              internalType: "uint16",
              name: "toChain",
              type: "uint16"
            },
            {
              internalType: "uint256",
              name: "fee",
              type: "uint256"
            }
          ],
          internalType: "struct BridgeStructs.Transfer",
          name: "transfer",
          type: "tuple"
        }
      ],
      stateMutability: "pure",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "bytes",
          name: "encoded",
          type: "bytes"
        }
      ],
      name: "parseTransferWithPayload",
      outputs: [
        {
          components: [
            {
              internalType: "uint8",
              name: "payloadID",
              type: "uint8"
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            },
            {
              internalType: "bytes32",
              name: "tokenAddress",
              type: "bytes32"
            },
            {
              internalType: "uint16",
              name: "tokenChain",
              type: "uint16"
            },
            {
              internalType: "bytes32",
              name: "to",
              type: "bytes32"
            },
            {
              internalType: "uint16",
              name: "toChain",
              type: "uint16"
            },
            {
              internalType: "bytes32",
              name: "fromAddress",
              type: "bytes32"
            },
            {
              internalType: "bytes",
              name: "payload",
              type: "bytes"
            }
          ],
          internalType: "struct BridgeStructs.TransferWithPayload",
          name: "transfer",
          type: "tuple"
        }
      ],
      stateMutability: "pure",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "bytes",
          name: "encoded",
          type: "bytes"
        }
      ],
      name: "parseUpgrade",
      outputs: [
        {
          components: [
            {
              internalType: "bytes32",
              name: "module",
              type: "bytes32"
            },
            {
              internalType: "uint8",
              name: "action",
              type: "uint8"
            },
            {
              internalType: "uint16",
              name: "chainId",
              type: "uint16"
            },
            {
              internalType: "bytes32",
              name: "newContract",
              type: "bytes32"
            }
          ],
          internalType: "struct BridgeStructs.UpgradeContract",
          name: "chain",
          type: "tuple"
        }
      ],
      stateMutability: "pure",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "bytes",
          name: "encodedVM",
          type: "bytes"
        }
      ],
      name: "registerChain",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "bytes",
          name: "encodedVM",
          type: "bytes"
        }
      ],
      name: "submitRecoverChainId",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [],
      name: "tokenImplementation",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "token",
          type: "address"
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256"
        },
        {
          internalType: "uint16",
          name: "recipientChain",
          type: "uint16"
        },
        {
          internalType: "bytes32",
          name: "recipient",
          type: "bytes32"
        },
        {
          internalType: "uint256",
          name: "arbiterFee",
          type: "uint256"
        },
        {
          internalType: "uint32",
          name: "nonce",
          type: "uint32"
        }
      ],
      name: "transferTokens",
      outputs: [
        {
          internalType: "uint64",
          name: "sequence",
          type: "uint64"
        }
      ],
      stateMutability: "payable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "token",
          type: "address"
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256"
        },
        {
          internalType: "uint16",
          name: "recipientChain",
          type: "uint16"
        },
        {
          internalType: "bytes32",
          name: "recipient",
          type: "bytes32"
        },
        {
          internalType: "uint32",
          name: "nonce",
          type: "uint32"
        },
        {
          internalType: "bytes",
          name: "payload",
          type: "bytes"
        }
      ],
      name: "transferTokensWithPayload",
      outputs: [
        {
          internalType: "uint64",
          name: "sequence",
          type: "uint64"
        }
      ],
      stateMutability: "payable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "bytes",
          name: "encodedVm",
          type: "bytes"
        }
      ],
      name: "updateWrapped",
      outputs: [
        {
          internalType: "address",
          name: "token",
          type: "address"
        }
      ],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "bytes",
          name: "encodedVM",
          type: "bytes"
        }
      ],
      name: "upgrade",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [],
      name: "wormhole",
      outputs: [
        {
          internalType: "contract IWormhole",
          name: "",
          type: "address"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "uint16",
          name: "recipientChain",
          type: "uint16"
        },
        {
          internalType: "bytes32",
          name: "recipient",
          type: "bytes32"
        },
        {
          internalType: "uint256",
          name: "arbiterFee",
          type: "uint256"
        },
        {
          internalType: "uint32",
          name: "nonce",
          type: "uint32"
        }
      ],
      name: "wrapAndTransferETH",
      outputs: [
        {
          internalType: "uint64",
          name: "sequence",
          type: "uint64"
        }
      ],
      stateMutability: "payable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "uint16",
          name: "recipientChain",
          type: "uint16"
        },
        {
          internalType: "bytes32",
          name: "recipient",
          type: "bytes32"
        },
        {
          internalType: "uint32",
          name: "nonce",
          type: "uint32"
        },
        {
          internalType: "bytes",
          name: "payload",
          type: "bytes"
        }
      ],
      name: "wrapAndTransferETHWithPayload",
      outputs: [
        {
          internalType: "uint64",
          name: "sequence",
          type: "uint64"
        }
      ],
      stateMutability: "payable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "uint16",
          name: "tokenChainId",
          type: "uint16"
        },
        {
          internalType: "bytes32",
          name: "tokenAddress",
          type: "bytes32"
        }
      ],
      name: "wrappedAsset",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      stateMutability: "payable",
      type: "receive"
    }
  ], n1 = "0x6080806040523461001b576001600d5561522990816100218239f35b600080fdfe608060405260043610156200001d575b36156200001b57600080fd5b005b60003560e01c806301f5325514620002fe57806307dfd8fb14620002f85780630f50900814620002f25780630f5287b014620002ec578063178149e714620002e65780631a2be4da14620002e05780631c8475e414620002da5780631ff1e28614620002d45780632539464514620002ce5780632b51137514620002c85780632c3c02a414620002c25780632f3a3d5d14620002bc5780635f85426614620002b657806364d42b1714620002b0578063739fc8d114620002aa57806384acd1bb14620002a45780639981509f146200029e5780639a8a05921462000298578063a5799f931462000292578063aa4efa5b146200028c578063ad5c46481462000286578063ad66a5f11462000280578063b046223b146200027a578063b172b2221462000274578063b96c7e4d146200026e578063bee9cdfc1462000268578063c3f511c11462000262578063c48fa115146200025c578063c5a5ebda1462000256578063c68785191462000250578063cb4cfea8146200024a578063d56e2e241462000244578063d60b347f146200023e578063e039f2241462000238578063e80598101462000232578063e89bc401146200022c578063ea63738d1462000226578063f768441f1462000220578063fbe3c2cd146200021a578063fbeeacd914620002145763ff200cde036200000f5762001a10565b620019c5565b6200199e565b62001903565b6200186e565b6200184f565b6200174c565b62001729565b620016e6565b62001616565b620015cb565b620015b6565b6200150d565b62001305565b620012e6565b620010ae565b62001070565b62001050565b62000fd3565b62000fa4565b62000f79565b62000f49565b62000e2b565b62000e07565b62000bb6565b62000b8b565b62000b66565b62000b46565b62000ab8565b62000a74565b62000a2e565b620009b7565b620008e2565b6200088f565b6200085b565b620007b9565b620006df565b62000632565b620005bb565b62000559565b62000502565b634e487b7160e01b600052604160045260246000fd5b60e081019081106001600160401b038211176200033657604052565b62000304565b60c081019081106001600160401b038211176200033657604052565b6001600160401b0381116200033657604052565b608081019081106001600160401b038211176200033657604052565b60a081019081106001600160401b038211176200033657604052565b604081019081106001600160401b038211176200033657604052565b90601f801991011681019081106001600160401b038211176200033657604052565b60405190620003f1826200033c565b565b6040519061010082018281106001600160401b038211176200033657604052565b60405190620003f18262000388565b60405190620003f1826200031a565b6040519061016082018281106001600160401b038211176200033657604052565b90620003f16040519283620003c0565b6001600160401b0381116200033657601f01601f191660200190565b81601f82011215620004cc57803590620004998262000463565b92620004a96040519485620003c0565b82845260208383010111620004cc57816000926020809301838601378301015290565b600080fd5b6020600319820112620004cc57600435906001600160401b038211620004cc57620004ff916004016200047f565b90565b34620004cc5760a06200051f6200051936620004d1565b62004421565b6080604051918051835260ff602082015116602084015261ffff806040830151166040850152606082015116606084015201516080820152f35b34620004cc5760c0620005766200057036620004d1565b62003a18565b60a06040519160ff81511683526020810151602084015261ffff604082015116604084015260ff606082015116606084015260808101516080840152015160a0820152f35b34620004cc576020620005d8620005d236620004d1565b620047a1565b60ff60405191168152f35b600435906001600160a01b0382168203620004cc57565b61ffff811603620004cc57565b60a43590620003f182620005fa565b3590620003f182620005fa565b63ffffffff811603620004cc57565b60c0366003190112620004cc57620006db620006bc62000651620005e3565b6044356200065f81620005fa565b6200069660a43592620006728462000623565b620006836002600d54141562001cbd565b6002600d5560843590602435906200208d565b61ffff815116602082015192604083015160806060850151940151946064359362002421565b6001600d556040516001600160401b0390911681529081906020820190565b0390f35b34620004cc57620006f036620004d1565b600c54461462000787576200077560606200074f60e062000723620007196200001b966200410f565b909291926200276b565b6200074761014082015160005260056020526040600020600160ff19825416179055565b015162004591565b6200076c60408201620007654682511462003fa3565b5162004645565b015161ffff1690565b61ffff1661ffff196002541617600255565b60405162461bcd60e51b815260206004820152600a6024820152696e6f74206120666f726b60b01b6044820152606490fd5b34620004cc576020366003190112620004cc576001600160a01b03620007de620005e3565b166000526009602052602060ff604060002054166040519015158152f35b60005b838110620008105750506000910152565b8181015183820152602001620007ff565b906020916200083c81518092818552858086019101620007fc565b601f01601f1916010190565b906020620004ff92818152019062000821565b34620004cc57620006db6200087a6200087436620004d1565b62002e3d565b60405191829160208352602083019062000821565b34620004cc576040366003190112620004cc5761ffff600435620008b381620005fa565b1660005260086020526040600020602435600052602052602060018060a01b0360406000205416604051908152f35b34620004cc576200094260e062000916620007196200090136620004d1565b62000910600c544614620037ea565b6200410f565b6200093a61014082015160005260056020526040600020600160ff19825416179055565b01516200451f565b61ffff806040830151169060025416036200098157606001516200001b906200097b906001600160a01b03165b6001600160a01b031690565b62004236565b60405162461bcd60e51b815260206004820152600e60248201526d1ddc9bdb99c818da185a5b881a5960921b6044820152606490fd5b34620004cc57620006db620009d6620009d036620004d1565b62003b94565b6040519182918291909160c08060e083019460ff8151168452602081015160208501526040810151604085015261ffff8060608301511660608601526080820151608086015260a08201511660a08501520151910152565b34620004cc576020366003190112620004cc57602062000a5e600435600052600560205260ff6040600020541690565b6040519015158152f35b6000910312620004cc57565b34620004cc576000366003190112620004cc576001546040516001600160a01b039091168152602090f35b60ff811603620004cc57565b3590620003f18262000a9f565b34620004cc5760e0366003190112620004cc57620006db62000b3960405162000ae1816200031a565b60043562000aef8162000a9f565b81526024356020820152604435604082015260643562000b0f81620005fa565b6060820152608435608082015262000b2662000607565b60a082015260c43560c0820152620038c9565b6040519182918262000848565b34620004cc576000366003190112620004cc576020600c54604051908152f35b34620004cc576000366003190112620004cc57602060025460ff60405191831c168152f35b34620004cc576000366003190112620004cc576000546040516001600160a01b039091168152602090f35b6080366003190112620004cc576004803562000bd281620005fa565b604435916064359062000be58262000623565b62000bef62001b7d565b50600080546001600160a01b0394839160209062000c0f9088166200096f565b604051631a90a21960e01b815295869182905afa93841562000d9b57839462000dd0575b5062000c4134851062001bc9565b62000c4d843462001c4d565b9662000c5c8882111562001c5b565b6402540be40080890491049362000c7e62000c77836200238f565b8a62001c4d565b818115801562000da5575b5050845462000cb0919062000ca9908b166001600160a01b03166200096f565b9a62001c4d565b98803b1562000da15784604051809b8193630d0e30db60e41b83525af196871562000d9b5760209862000d6c9862000d7d575b50835462000d0990839062000d039084166001600160a01b03166200096f565b620036f6565b62000d306200096f6200096f6200096f61ffff94856002541698541660018060a01b031690565b9062000d4962000d3f62000414565b61ffff9096168652565b818a86015282604086015285606086015286608086015260243594511662002421565b6001600160401b0360405191168152f35b8062000d8d62000d949262000358565b8062000a68565b3862000ce3565b62001b71565b5080fd5b82829162000dc5575b8280929181923390f11562000d9b57813862000c89565b6108fc915062000dae565b62000df791945060203d811162000dff575b62000dee8183620003c0565b81019062001bb9565b923862000c33565b503d62000de2565b34620004cc576000366003190112620004cc57602061ffff60025416604051908152f35b34620004cc576200001b62000e7a60e062000e4e620007196200091036620004d1565b62000e7261014082015160005260056020526040600020600160ff19825416179055565b015162004421565b62000ec662000e8e604083015161ffff1690565b61ffff62000eaa62000ea360025461ffff1690565b61ffff1690565b9116908114908162000f2b575b811562000f21575b5062003f16565b608062000f096060830162000f0162000efa62000ee5835161ffff1690565b61ffff16600052600b60205260406000205490565b1562003f56565b5161ffff1690565b9101519061ffff16600052600b602052604060002055565b9050153862000ebf565b905062000f4262000f3e600c5446141590565b1590565b9062000eb7565b34620004cc576020366003190112620004cc57602062000a5e600435600052600660205260ff6040600020541690565b34620004cc576000366003190112620004cc576004546040516001600160a01b039091168152602090f35b34620004cc576020366003190112620004cc57602062000fcb60043562000ee581620005fa565b604051908152f35b34620004cc5760c0366003190112620004cc57620006db62000b3960405162000ffc816200033c565b6004356200100a8162000a9f565b815260243560208201526044356200102281620005fa565b6040820152606435620010358162000a9f565b6060820152608435608082015260a43560a082015262003860565b34620004cc576000366003190112620004cc576020600354604051908152f35b34620004cc576020366003190112620004cc576001600160a01b0362001095620005e3565b16600052600a6020526020604060002054604051908152f35b6080366003190112620004cc576004803590620010cb82620005fa565b604435620010d98162000623565b6064356001600160401b038111620004cc57620010fa90369084016200047f565b906200110562001b7d565b506000805490946001600160a01b039491829190602090620011299088166200096f565b604051631a90a21960e01b815294859182905afa92831562000d9b578793620012c1575b506200115b34841062001bc9565b62001167833462001c4d565b966402540be4008804906200118062000c77836200238f565b818115801562001296575b50508454620011ab919062000ca9908b166001600160a01b03166200096f565b98803b1562000da157819085604051809c8193630d0e30db60e41b83525af197881562000d9b57620006db9962001265996200127f575b5084546200120290849062000d039084166001600160a01b03166200096f565b620012296200096f6200096f6200096f61ffff94856002541699541660018060a01b031690565b91620012426200123862000414565b61ffff9097168752565b8260208701528360408701526060860152856080860152602435945116620024fd565b6040516001600160401b0390911681529081906020820190565b8062000d8d6200128f9262000358565b38620011e2565b828291620012b6575b8280929181923390f11562000d9b5781386200118b565b6108fc91506200129f565b620012de91935060203d811162000dff5762000dee8183620003c0565b91386200114d565b34620004cc57620006db6200087a620012ff36620004d1565b62003263565b604080600319360112620004cc576200131d620005e3565b602435916200132c8362000623565b805192602080938186019563313ce56760e01b8752600481526200135081620003a4565b6000809781925190845afa506200136662001a49565b86808651858101906395d89b4160e01b8252600481526200138781620003a4565b5190855afa5060ff6200147d6200096f6200146c88620013a662001a49565b958c8083518b8101906306fdde0360e01b825260048152620013c881620003a4565b51908b5afa5088806200141662001406620013f6620013e662001a49565b9584808251830101910162001a8b565b9a83808251830101910162001aed565b9382808251830101910162001aed565b920151910151906200145c600254986200145262001433620003e2565b60028152956001600160a01b039c8d16878f015261ffff8c1690870152565b60ff166060850152565b608083015260a082015262003860565b8a549095166001600160a01b031690565b91620014a38751968795869485946358cd21bf60e11b8652891c16916004850162001b42565b039134905af192831562000d9b57620006db9493620014d7575b5050516001600160401b0390911681529081906020820190565b620014fc929350803d1062001505575b620014f38183620003c0565b81019062001b2b565b903880620014bd565b503d620014e7565b60c0366003190112620004cc5762001524620005e3565b604435906200153382620005fa565b60843590620015428262000623565b60a435916001600160401b038311620004cc57620006db936200159362001572620006bc9536906004016200047f565b93620015846002600d54141562001cbd565b6002600d556024359062001d2f565b9061ffff82511690602083015192608060408201519101519360643593620024fd565b34620004cc576200001b620012ff36620004d1565b34620004cc576080620015e8620015e236620004d1565b62004591565b61ffff6060604051928051845260ff6020820151166020850152604081015160408501520151166060820152f35b34620004cc57600319602036820112620004cc576004356001600160401b0391828211620004cc57610100908236030112620004cc5762001656620003f3565b620016648260040162000aab565b81526024820135602082015260448201356040820152620016886064830162000616565b606082015260848201356080820152620016a560a4830162000616565b60a082015260c482013560c082015260e4820135928311620004cc57620016db62000b39926004620006db95369201016200047f565b60e08201526200393f565b34620004cc576020366003190112620004cc576001600160a01b036200170b620005e3565b166000526007602052602060ff604060002054166040519015158152f35b34620004cc576000366003190112620004cc576020600c54604051904614158152f35b34620004cc57620017916200176136620004d1565b6000805460405163607ec5ef60e11b8152939192839285926001600160a01b031691839182916004830162000848565b03915afa90811562000d9b57620006db9262001801928291839084926200181b575b50620017c19293506200276b565b620017d6620017d08262003826565b6200279e565b620017fa60a0620017eb60e084015162003a18565b9201516001600160401b031690565b9062002a65565b6040516001600160a01b0390911681529081906020820190565b915050620018439150620017c1923d8091833e6200183a8183620003c0565b81019062002632565b909291928392620017b3565b34620004cc57620006db620009d66200186836620004d1565b62003d2e565b34620004cc5760e06200188b6200188536620004d1565b62003c3f565b620006db6040519283926020845260ff8151166020850152602081015160408501526040810151606085015261ffff6060820151166080850152608081015160a0850152620018e560a082015160c086019061ffff169052565b60c08101518285015201516101008084015261012083019062000821565b34620004cc57620019186200176136620004d1565b03915afa90811562000d9b57620006db92620018019282918390849262001973575b50620019489293506200276b565b62001957620017d08262003826565b6200196c60a0620017eb60e084015162003a18565b9062002813565b91505062001992915062001948923d8091833e6200183a8183620003c0565b9092919283926200193a565b34620004cc576000366003190112620004cc57602061ffff60025460101c16604051908152f35b34620004cc576080620019e2620019dc36620004d1565b6200451f565b6060604051918051835260ff602082015116602084015261ffff604082015116604084015201516060820152f35b34620004cc576200001b6200087436620004d1565b60405190602082018281106001600160401b03821117620003365760405260008252565b3d1562001a79573d9062001a5d8262000463565b9162001a6d6040519384620003c0565b82523d6000602084013e565b606090565b5190620003f18262000a9f565b90816020910312620004cc5751620004ff8162000a9f565b81601f82011215620004cc57805162001abc8162000463565b9262001acc6040519485620003c0565b81845260208284010111620004cc57620004ff9160208085019101620007fc565b90602082820312620004cc5781516001600160401b038111620004cc57620004ff920162001aa3565b51906001600160401b0382168203620004cc57565b90816020910312620004cc57620004ff9062001b16565b9162001b6a60ff9163ffffffff60409497969716855260606020860152606085019062000821565b9416910152565b6040513d6000823e3d90fd5b6040519060a082018281106001600160401b03821117620003365760405260006080838281528260208201528260408201528260608201520152565b90816020910312620004cc575190565b1562001bd157565b60405162461bcd60e51b815260206004820152602260248201527f76616c756520697320736d616c6c6572207468616e20776f726d686f6c652066604482015261656560f01b6064820152608490fd5b634e487b7160e01b600052601160045260246000fd5b60841981019190821162001c4757565b62001c21565b9190820391821162001c4757565b1562001c6357565b60405162461bcd60e51b815260206004820152602c60248201527f66656520697320626967676572207468616e20616d6f756e74206d696e75732060448201526b776f726d686f6c652066656560a01b6064820152608490fd5b1562001cc557565b60405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606490fd5b5190620003f182620005fa565b90816020910312620004cc5751620004ff81620005fa565b9062001d3a62001b7d565b506001600160a01b038216600090815260096020526040902062001d60905b5460ff1690565b156200206f57604051634d4502c960e11b81526001600160a01b0383169260209290918381600481885afa90811562000d9b5760049185916000916200203b575b509560405192838092633d6c043b60e01b82525afa90811562000d9b5762001e289460009262002019575b5050905b62001e2e604051916000806020948581019063313ce56760e01b82526004815262001dfb81620003a4565b5190885afa5062001e1e62001e0f62001a49565b84808251830101910162001a8b565b958680926200234d565b620023aa565b9261ffff9462001e43866002541661ffff1690565b87871690810362001f935762001f5362001f3e8362001f388660008062001f479c8b62001f0f60405162001eed8382019486806370a0823160e01b978881528562001ea03060248301919091602081019260018060a01b03169052565b039562001eb6601f1997888101835282620003c0565b51908c5afa5062001ed962001eca62001a49565b86808251830101910162001bb9565b98309033906001600160a01b031662004942565b60405192830193845230602484015282604481015b03908101835282620003c0565b51908b5afa5062001f3262001f2362001a49565b8a808251830101910162001bb9565b62001c4d565b6200234d565b96879362002308565b976002541661ffff1690565b1462001f80575b505062001f6a62000d3f62000414565b8401526040830152606082015234608082015290565b62001f8b91620036f6565b388362001f5a565b6001600160a01b0383169562001fac8130338a62004942565b863b15620004cc57604051632770a7eb60e21b815230600482015260248101829052966000908890604490829084905af196871562000d9b578362001f539262001f3e9262001f479a62002002575b506200234d565b8062000d8d620020129262000358565b3862001ffb565b620020339250803d1062000dff5762000dee8183620003c0565b388062001dcc565b620020609150823d841162002067575b620020578183620003c0565b81019062001d17565b3862001da1565b503d6200204b565b60025461ffff169162001e28916001600160a01b0382169062001dd0565b91906200209962001b7d565b506001600160a01b0383166000908152600960205260409020620020bd9062001d59565b15620022c457604051634d4502c960e11b81526001600160a01b0384169360209290918381600481895afa90811562000d9b576004918591600091620022a2575b509660405192838092633d6c043b60e01b82525afa90811562000d9b5762001e289460009262002280575b5050915b6200217b604051926000806020958681019063313ce56760e01b8252600481526200215881620003a4565b5190865afa5062001e1e6200216c62001a49565b85808251830101910162001a8b565b60025461ffff969188881691879085908a16840362002210576040516370a0823160e01b81890181815230602484015262001f539562001f47956200220795909462001f389491936000938493928f92620021e49262001eed9187908190856044810162001ea0565b51908c5afa5062001f32620021f862001a49565b8b808251830101910162001bb9565b9788946200234d565b50506001600160a01b038416906200222b8130338562004942565b813b15620004cc57604051632770a7eb60e21b815230600482015260248101829052916000908390604490829084905af191821562000d9b578862001f4792620022079262001f53956200200257506200234d565b6200229a9250803d1062000dff5762000dee8183620003c0565b388062002129565b620022bd9150823d84116200206757620020578183620003c0565b38620020fe565b60025461ffff169262001e28916001600160a01b038216916200212d565b60ff6007199116019060ff821162001c4757565b60ff16604d811162001c4757600a0a90565b600090600860ff8216116200231b575090565b6200232a6200233091620022e2565b620022f6565b15620023395790565b634e487b7160e01b81526012600452602490fd5b90600860ff8216116200235e575090565b6200232a6200236d91620022e2565b90811562002379570490565b634e487b7160e01b600052601260045260246000fd5b6402540be4009081810291818304149015171562001c475790565b90600860ff821611620023bb575090565b6200232a620023ca91620022e2565b9081810291818304149015171562001c475790565b15620023e757565b60405162461bcd60e51b815260206004820152601260248201527119995948195e18d959591cc8185b5bdd5b9d60721b6044820152606490fd5b92620024c997959294620024696020989562002479946200244589881115620023df565b6200244f62000423565b60018152985b898c0152604089015261ffff166060880152565b608086015261ffff1660a0850152565b60c0830152600054620024a1906200249a906001600160a01b03166200096f565b92620038c9565b6002546040516358cd21bf60e11b81529687958694938593891c60ff16916004850162001b42565b03925af190811562000d9b57600091620024e1575090565b620004ff915060203d81116200150557620014f38183620003c0565b92620024c997929462002469602098979562002528946200251d620003f3565b600381529862002455565b3360c084015260e0830152600054620024a1906200254f906001600160a01b03166200096f565b926200393f565b5190620003f18262000623565b9080601f83011215620004cc578151916001600160401b03831162000336576040918251936020916200259c838360051b0187620003c0565b818652828087019260071b85010193818511620004cc578301915b848310620025c85750505050505090565b608083830312620004cc57836080918751620025e4816200036c565b85518152828601518382015288860151620025ff8162000a9f565b8982015260608087015190620026158262000a9f565b820152815201920191620025b7565b51908115158203620004cc57565b9091606082840312620004cc578151916001600160401b0392838111620004cc57810161016081860312620004cc576200266b62000432565b90620026778162001a7e565b8252620026876020820162002556565b60208301526200269a6040820162002556565b6040830152620026ad6060820162001d0a565b606083015260808101516080830152620026ca60a0820162001b16565b60a0830152620026dd60c0820162001a7e565b60c083015260e0810151858111620004cc5786620026fd91830162001aa3565b60e08301526101006200271281830162002556565b9083015261012080820151868111620004cc57876200273391840162002563565b90830152610140809101519082015293620027516020830162002624565b936040830151908111620004cc57620004ff920162001aa3565b15620027745750565b60405162461bcd60e51b8152602060048201529081906200279a90602483019062000821565b0390fd5b15620027a657565b60405162461bcd60e51b815260206004820152600f60248201526e34b73b30b634b21032b6b4ba3a32b960891b6044820152606490fd5b9162001b6a6001600160401b03916200280460409497969760608752606087019062000821565b90858203602087015262000821565b906200285061ffff60408401511660208401519061ffff16600052600860205260406000209060005260205260018060a01b036040600020541690565b916001600160a01b038316918215620028d5576200288160806200287860a085015162003e8a565b93015162003e8a565b92803b15620004cc57620028b19360008094604051968795869485936350c66be360e11b855260048501620027dd565b03925af1801562000d9b57620028c5575090565b8062000d8d620004ff9262000358565b60405162461bcd60e51b815260206004820152601d60248201527f7772617070656420617373657420646f6573206e6f74206578697374730000006044820152606490fd5b156200292257565b60405162461bcd60e51b815260206004820152602860248201527f63616e206f6e6c79207772617020746f6b656e732066726f6d20666f726569676044820152676e20636861696e7360c01b6064820152608490fd5b156200298057565b60405162461bcd60e51b815260206004820152601c60248201527f7772617070656420617373657420616c726561647920657869737473000000006044820152606490fd5b936001600160401b039060ff62002a0361ffff969b9a9995620029f460c09a9660e08b5260e08b019062000821565b9089820360208b015262000821565b9a1660408701521660608501526001600160a01b031660808401521660a08201520152565b6001600160a01b039091168152604060208201819052620004ff9291019062000821565b9062002a6160209282815194859201620007fc565b0190565b91909162002bb262002b68604083019462002a9962002a86875161ffff1690565b60025461ffff908116911614156200291a565b85516020858101805161ffff909316600090815260088352604080822094825293835292909220549195909162002b75919062002ae0906001600160a01b03161562002978565b62002b4262002af360a083015162003e8a565b9462002b12606062002b09608086015162003e8a565b94015160ff1690565b9562002b208c5161ffff1690565b908a519260405198899663c71f461560e01b8a890152309360248901620029c5565b039262002b58601f1994858101835282620003c0565b6040519485913085840162002a28565b03838101855284620003c0565b62002bbf6106f69362002b8a83860162000453565b9480865262004afe8487013960405195869162002bab858401809862002a4c565b9062002a4c565b03838101865285620003c0565b62002bfd62002bd0885161ffff1690565b865160405160f09290921b6001600160f01b03191693820193845260028401529192826022850162001f02565b5190209151906000f592833b15620004cc5751905161ffff909116600090815260086020908152604080832093835292815282822080546001600160a01b0319166001600160a01b03871690811790915582526009905220805460ff19166001179055565b1562002c6a57565b60405162461bcd60e51b815260206004820152600e60248201526d34b73b30b634b21039b2b73232b960911b6044820152606490fd5b1562002ca857565b60405162461bcd60e51b815260206004820152601a60248201527f7472616e7366657220616c726561647920636f6d706c657465640000000000006044820152606490fd5b1562002cf557565b60405162461bcd60e51b815260206004820152601460248201527334b73b30b634b2103a30b933b2ba1031b430b4b760611b6044820152606490fd5b1562002d3957565b60405162461bcd60e51b815260206004820152602560248201527f6e6f207772617070657220666f72207468697320746f6b656e2063726561746560448201526419081e595d60da1b6064820152608490fd5b1562002d9457565b60405162461bcd60e51b815260206004820152602360248201527f696e76616c696420746f6b656e2c2063616e206f6e6c7920756e77726170205760448201526208aa8960eb1b6064820152608490fd5b1562002ded57565b60405162461bcd60e51b815260206004820152602260248201527f66656520686967686572207468616e207472616e7366657272656420616d6f756044820152611b9d60f21b6064820152608490fd5b600080546001600160a01b039062002e579082166200096f565b604093838551809363607ec5ef60e11b8252818062002e7b60049687830162000848565b03915afa801562000d9b578492859086926200323c575b509062002e9f916200276b565b62002eae620017d08362003826565b60e082019462002ebf865162003d2e565b8462002ecf608083015162003681565b94600360ff62002ee0855160ff1690565b161462003227575b62002f34610140820162002f1962002f1362000f3e8351600052600660205260ff6040600020541690565b62002ca0565b5160005260066020526040600020600160ff19825416179055565b606081015161ffff16906001600160401b0362002f6060a060808401519301516001600160401b031690565b169061ffff8093167fcaf280c8cfeba144da67230d9b009c8f868a75bac9a528fa0474be1ba317c1698b80a48062002fbb62002fa160a086015161ffff1690565b62002fb1836002541661ffff1690565b9216821462002ced565b606084015161ffff1691821603620031df575062002fe06200096f8484015162003681565b62002ff26020840151838316620037a9565b1686806200300c6200096f8988541660018060a01b031690565b926200301c898516821462002d8c565b855163313ce56760e01b60208201908152888252906200303c81620003a4565b51915afa506200307e620030636200305362001a49565b6020808251830101910162001a8b565b60c062003075826020870151620023aa565b940151620023aa565b9081151580620031d2575b15620031c3576200309d8383111562002de5565b803b15620031bf578784518092632e1a7d4d60e01b8252818381620030c9888c83019190602083019252565b03925af1801562000d9b57620031a8575b5086808280156200319d575b8280929181923390f11562000d9b57620031009162001c4d565b82549092906200311b9086166001600160a01b03166200096f565b91823b15620031995751632e1a7d4d60e01b815290810183815290939291869185919082908490829060200103925af191821562000d9b5785948594859462003182575b508391831562003177575b1690f11562000d9b575190565b6108fc92506200316a565b8062000d8d620031929262000358565b386200315f565b8680fd5b6108fc9150620030e6565b8062000d8d620031b89262000358565b38620030da565b8780fd5b50506200310090869062001c4d565b5033878716141562003089565b620032138291858501519061ffff16600052600860205260406000209060005260205260018060a01b036040600020541690565b166200322181151562002d31565b62002ff2565b62003236828716331462002c62565b62002ee8565b905062002e9f93506200325b91503d8087833e6200183a8183620003c0565b919362002e92565b600080546001600160a01b03906200327d9082166200096f565b92604093838551809263607ec5ef60e11b82528180620032a260049788830162000848565b03915afa801562000d9b57849085869162003658575b620032c59293506200276b565b620032d4620017d08262003826565b60e0810194620032e5865162003d2e565b92620032f5608085015162003681565b93600360ff62003306835160ff1690565b161462003643575b62003339610140850162002f1962002f1362000f3e8351600052600660205260ff6040600020541690565b606084015161ffff16936001600160401b036200336560a060808401519301516001600160401b031690565b169061ffff8096167fcaf280c8cfeba144da67230d9b009c8f868a75bac9a528fa0474be1ba317c1698a80a483620033c0620033a660a084015161ffff1690565b620033b6836002541661ffff1690565b9616861462002ced565b866060830195620033d3875161ffff1690565b908382160362003602575050620033f16200096f8584015162003681565b90620034046020840151898416620037a9565b8782169289808751602081019063313ce56760e01b82528881526200342981620003a4565b5190875afa506200345c620034416200305362001a49565b60c062003453826020860151620023aa565b930151620023aa565b998a151580620035f5575b15620035e6576200347b828c111562002de5565b9962003489885161ffff1690565b836200349a816002541661ffff1690565b911614620035d457843b15620004cc5786516340c10f1960e01b81523387820190815260208101839052909290600090849081906040010381838a5af192831562000d9b57620034f193620035bd575b5062001c4d565b9589156200351657505082546200311b925087166001600160a01b031690506200096f565b909295969498506200352d919397505161ffff1690565b906200353e816002541661ffff1690565b911614620035ac5750813b15620004cc5793516340c10f1960e01b81526001600160a01b03909416928401928352602083019190915260009183919082908490829060400103925af1801562000d9b576200359857505190565b8062000d8d620035a89262000358565b5190565b9150919250620035a89350620048fd565b8062000d8d620035cd9262000358565b38620034ea565b620034f19162001f32823387620048fd565b9950620034f1908a9062001c4d565b50338a8a16141562003467565b8386015161ffff909116600090815260086020908152604080832093835292905220546001600160a01b0316166200363c81151562002d31565b9062003404565b62003652868616331462002c62565b6200330e565b50505062003675620032c5913d8087833e6200183a8183620003c0565b919250829190620032b8565b6001600160a01b031981166200369d576001600160a01b031690565b60405162461bcd60e51b8152602060048201526013602482015272696e76616c69642045564d206164647265737360681b6044820152606490fd5b90601f820180921162001c4757565b608501908160851162001c4757565b6001600160a01b0381166000908152600a60205260409020549091810190811062001c47576001600160401b03811162003746576001600160a01b039091166000908152600a6020526040902055565b60405162461bcd60e51b815260206004820152603560248201527f7472616e736665722065786365656473206d6178206f75747374616e64696e6760448201527408189c9a5919d959081d1bdad95b88185b5bdd5b9d605a1b6064820152608490fd5b6001600160a01b0381166000908152600a60205260409020549091810390811162001c47576001600160a01b039091166000908152600a6020526040902055565b15620037f257565b60405162461bcd60e51b815260206004820152600c60248201526b696e76616c696420666f726b60a01b6044820152606490fd5b62003835600c544614620037ea565b60806200385961ffff60608401511661ffff16600052600b60205260406000205490565b9101511490565b8051602082015191604081015191606082015160a06080840151930151936040519560ff60f81b809460f81b166020880152602187015261ffff60f01b9060f01b16604186015260f81b1660438401526044830152606482015260648152620004ff8162000388565b80519060208101519060408101519060608101519160808201519060c060a0840151930151946040519660ff60f81b9060f81b1660208801526021870152604186015261ffff60f01b809360f01b166061860152606385015260f01b166083830152608582015260858152620004ff816200033c565b620004ff60a582516020840151936040810151906060810151608082015160a08301519060e060c085015194015194604051998a9760ff60f81b9060f81b1660208901526021880152604187015261ffff60f01b809360f01b166061870152606386015260f01b1660838401526085830152620039c68151809260208686019101620007fc565b8101036085810184520182620003c0565b15620039df57565b60405162461bcd60e51b8152602060048201526011602482015270696e76616c69642041737365744d65746160781b6044820152606490fd5b906040519162003a28836200033c565b600090818452602084019082825260408501928084526060860193818552608087019082825260a0880192835262003a7460028960ff62003a6988620047a1565b1680915214620039d7565b602184511062003add57620003f19562003aa962003abb926064976021880151905262003aa18762004831565b61ffff169052565b62003ab485620047fe565b60ff169052565b62003ac683620048b9565b905262003ad382620048db565b90525114620039d7565b60405162461bcd60e51b8152602060048201526015602482015274746f427974657333325f6f75744f66426f756e647360581b6044820152606490fd5b6040519062003b29826200031a565b8160c06000918281528260208201528260408201528260608201528260808201528260a08201520152565b1562003b5c57565b60405162461bcd60e51b815260206004820152601060248201526f34b73b30b634b2102a3930b739b332b960811b6044820152606490fd5b9062003b9f62003b1a565b9162003bbe600160ff62003bb384620047a1565b168086521462003b54565b62003bc98162004853565b602084015262003bd98162004897565b604084015261ffff62003bec8262004820565b166060840152606381511062003add576085816063620003f1930151608086015262003c2762003c1c8262004842565b61ffff1660a0870152565b62003c328162004864565b60c0860152511462003b54565b906040519161010083018381106001600160401b03821117620003365760405260009081845260208401918083526040850181815260608601828152608087019083825260a088019284845260c0890194855260e0890196606088528962003ca788620047a1565b60ff169081905262003cbc9060031462003b54565b62003cc78762004853565b905262003cd48662004897565b905262003ce18562004820565b61ffff16905262003cf284620048ca565b905262003cff8362004842565b61ffff16905262003d1082620048ec565b9052805162003d1f9062001c37565b62003d2a916200470b565b9052565b9062003d3962003b1a565b9160ff62003d4782620047a1565b166001810362003d5f5750620004ff91925062003b94565b60030362003dda5762003dc660a062003d7c62003dd19362003c3f565b60038652602081015160208701526040810151604087015262003db362003da8606083015161ffff1690565b61ffff166060880152565b60808101516080870152015161ffff1690565b61ffff1660a0840152565b600060c0830152565b60405162461bcd60e51b8152602060048201526012602482015271125b9d985b1a59081c185e5b1bd859081a5960721b6044820152606490fd5b634e487b7160e01b600052603260045260246000fd5b600019811462001c475760010190565b9062003e468262000463565b62003e556040519182620003c0565b828152809262003e68601f199162000463565b0190602036910137565b90815181101562003e84570160200190565b62003e14565b60005b602081108062003ef8575b1562003eaf5762003ea99062003e2a565b62003e8d565b9062003ebb8262003e3a565b9160005b81811062003ecd5750505090565b602081101562003e8457808362003ef2921a62003eeb828762003e72565b5362003e2a565b62003ebf565b1562003e845781811a60f81b6001600160f81b031916151562003e98565b1562003f1e57565b60405162461bcd60e51b815260206004820152601060248201526f1a5b9d985b1a590818da185a5b881a5960821b6044820152606490fd5b1562003f5e57565b60405162461bcd60e51b815260206004820152601860248201527f636861696e20616c7265616479207265676973746572656400000000000000006044820152606490fd5b1562003fab57565b60405162461bcd60e51b815260206004820152601160248201527034b73b30b634b21022ab269021b430b4b760791b6044820152606490fd5b6040519061016082018281106001600160401b038211176200033657604052816101406000918281528260208201528260408201528260608201528260808201528260a08201528260c0820152606060e08201528261010082015260606101208201520152565b604051906200405a82620003a4565b60168252753bb937b7339033b7bb32b93730b731b29031b430b4b760511b6020830152565b604051906200408e82620003a4565b601982527f77726f6e6720676f7665726e616e636520636f6e7472616374000000000000006020830152565b60405190606082018281106001600160401b0382111762000336576040526022825261195960f21b6040837f676f7665726e616e636520616374696f6e20616c726561647920636f6e73756d60208201520152565b62004159906200411e62003fe4565b5060008054909182916200413d906200096f906001600160a01b031681565b604051808096819463607ec5ef60e11b83526004830162000848565b03915afa91821562000d9b5781928291839162004211575b50811562004209575050606082015161ffff1661ffff6200419d62000ea360025461ffff9060101c1690565b911603620041fd57608082015160035403620041f157620041d1610140830151600052600560205260ff6040600020541690565b620041e5575090600190620004ff62001a25565b9091620004ff620040ba565b9091620004ff6200407f565b9091620004ff6200404b565b929390929150565b9150506200422c9192503d8084833e6200183a8183620003c0565b9192913862004171565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc908154813b1562004312577f2e4cc16c100f0b55e2df82ab0b1a7e294aa9cbd01b48fbaf622683fbc0507a499060018060a01b039081841694856bffffffffffffffffffffffff60a01b83161790556200430c604051600080968192897fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b8480a263204a7f0760e21b602082019081526004825290620042f781620003a4565b51915af46200430562001a49565b906200276b565b169180a3565b60405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b6064820152608490fd5b156200437557565b60405162461bcd60e51b815260206004820152600c60248201526b77726f6e67206d6f64756c6560a01b6044820152606490fd5b15620043b157565b60405162461bcd60e51b815260206004820152600c60248201526b3bb937b7339030b1ba34b7b760a11b6044820152606490fd5b15620043ed57565b60405162461bcd60e51b815260206004820152600c60248201526b0eee4dedcce40d8cadccee8d60a31b6044820152606490fd5b906200442c62001b7d565b91620044526a546f6b656e427269646765620044488362004875565b808652146200436d565b62004473600160ff6200446584620047ed565b1680602087015214620043a9565b6023815110620044bc576045620003f19161ffff8060238301511660408701526200449e826200480f565b166060860152620044af81620048a8565b60808601525114620043e5565b60405162461bcd60e51b8152602060048201526014602482015273746f55696e7431365f6f75744f66426f756e647360601b6044820152606490fd5b6040519062004507826200036c565b60006060838281528260208201528260408201520152565b906200452a620044f8565b91620045466a546f6b656e427269646765620044488362004875565b62004559600260ff6200446584620047ed565b6023815110620044bc57602381015161ffff166040840152620003f190604390620045848162004886565b60608601525114620043e5565b906200459c620044f8565b91620045b86a546f6b656e427269646765620044488362004875565b620045cb600360ff6200446584620047ed565b604181511062004608576043816041620003f1930151604086015262004600620045f58262004820565b61ffff166060870152565b5114620043e5565b60405162461bcd60e51b8152602060048201526015602482015274746f55696e743235365f6f75744f66426f756e647360581b6044820152606490fd5b4681036200465257600c55565b60405162461bcd60e51b81526020600482015260126024820152711a5b9d985b1a5908195d9b50da185a5b925960721b6044820152606490fd5b156200469457565b60405162461bcd60e51b815260206004820152600e60248201526d736c6963655f6f766572666c6f7760901b6044820152606490fd5b15620046d257565b60405162461bcd60e51b8152602060048201526011602482015270736c6963655f6f75744f66426f756e647360781b6044820152606490fd5b62004723826200471b81620036d8565b10156200468c565b6200473c81516200473484620036e7565b1115620046ca565b8162004755575050604051600081526020810160405290565b60405191601f8116916085831560051b80858701019484860193010101905b8084106200478d5750508252601f01601f191660405290565b909283518152602080910193019062004774565b6001815110620047b2576001015190565b60405162461bcd60e51b8152602060048201526013602482015272746f55696e74385f6f75744f66426f756e647360681b6044820152606490fd5b6021815110620047b2576021015190565b6024815110620047b2576024015190565b6025815110620044bc576025015190565b6043815110620044bc576043015190565b6023815110620044bc576023015190565b6065815110620044bc576065015190565b602181511062004608576021015190565b608581511062004608576085015190565b602081511062003add576020015190565b604381511062003add576043015190565b604181511062003add576041015190565b604581511062003add576045015190565b604481511062003add576044015190565b606381511062003add576063015190565b606481511062003add576064015190565b608581511062003add576085015190565b60405163a9059cbb60e01b60208201526001600160a01b03929092166024830152604480830193909352918152620003f1916200493c606483620003c0565b620049fe565b6040516323b872dd60e01b60208201526001600160a01b039283166024820152929091166044830152606480830193909352918152620003f1916200493c8262000388565b90816020910312620004cc57620004ff9062002624565b15620049a657565b60405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608490fd5b6040516001600160a01b03919091169162004a1982620003a4565b6020928383527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c656484840152803b1562004a9a576000828192828762004a709796519301915af162004a6962001a49565b9062004adf565b8051908162004a7e57505050565b82620003f19362004a9493830101910162004987565b6200499e565b60405162461bcd60e51b815260048101859052601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606490fd5b9091901562004aec575090565b815115620027745750805190602001fdfe6080604052346100a3576106f6803803809161001a826100be565b60803960408160800191126100a35761003161010c565b60a05191906001600160401b0383116100a35781609f840112156100a35782608001519261005e84610122565b9261006c60405194856100e9565b84845260a085830101116100a3576100949361008f9160a060208601910161013d565b610160565b6040516101f690816105008239f35b600080fd5b634e487b7160e01b600052604160045260246000fd5b6080601f91909101601f19168101906001600160401b038211908210176100e457604052565b6100a8565b601f909101601f19168101906001600160401b038211908210176100e457604052565b608051906001600160a01b03821682036100a357565b6001600160401b0381116100e457601f01601f191660200190565b60005b8381106101505750506000910152565b8181015183820152602001610140565b90813b156102c257604051635c60da1b60e01b8082526020939092916001600160a01b038216918582600481865afa918215610298576101ef926101af916000916102a5575b503b1515610340565b7fa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d5080546001600160a01b0319166001600160a01b03909216919091179055565b60405192817f1cf3b03a6cf19fa2baba4df148e9dcabedea7f8a5c07840e207e5c089be95d3e600080a282511580159061029d575b610230575b5050505050565b6004848693819382525afa9182156102985761025e93600093610269575b50506102586103a5565b916103fe565b503880808080610229565b610289929350803d10610291575b61028181836100e9565b810190610315565b90388061024e565b503d610277565b610334565b506000610224565b6102bc9150883d8a116102915761028181836100e9565b386101a6565b60405162461bcd60e51b815260206004820152602560248201527f455243313936373a206e657720626561636f6e206973206e6f74206120636f6e6044820152641d1c9858dd60da1b6064820152608490fd5b908160209103126100a357516001600160a01b03811681036100a35790565b6040513d6000823e3d90fd5b1561034757565b60405162461bcd60e51b815260206004820152603060248201527f455243313936373a20626561636f6e20696d706c656d656e746174696f6e206960448201526f1cc81b9bdd08184818dbdb9d1c9858dd60821b6064820152608490fd5b60405190606082016001600160401b038111838210176100e45760405260278252660819985a5b195960ca1b6040837f416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c60208201520152565b9190823b15610451576000816104469460208394519201905af43d15610449573d9061042982610122565b9161043760405193846100e9565b82523d6000602084013e6104a5565b90565b6060906104a5565b60405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b6064820152608490fd5b909190156104b1575090565b8151156104c15750805190602001fd5b6044604051809262461bcd60e51b8252602060048301526104f1815180928160248601526020868601910161013d565b601f01601f19168101030190fdfe608080604052366100c4577fa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d5054635c60da1b60e01b8252602090829060049082906001600160a01b03165afa9081156100b857600091610060575b5061015b565b6020903d82116100b0575b601f8201601f1916810167ffffffffffffffff81118282101761009c5761009693506040520161017a565b3861005a565b634e487b7160e01b84526041600452602484fd5b3d915061006b565b6040513d6000823e3d90fd5b7fa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d5054604051635c60da1b60e01b815290602090829060049082906001600160a01b03165afa9081156100b85760009161011d575061015b565b60203d8111610154575b601f8101601f1916820167ffffffffffffffff81118382101761009c5761009693506040528101906101a1565b503d610127565b6000808092368280378136915af43d82803e15610176573d90f35b3d90fd5b602090607f19011261019c576080516001600160a01b038116810361019c5790565b600080fd5b9081602091031261019c57516001600160a01b038116810361019c579056fea2646970667358221220a928e3b00b7d19d8e2f067361e93c7712de3e243b0b8be428e9ac989960b767464736f6c63430008130033a26469706673582212200ab8408b24ad8ea6b955a8d00252b04da580f860c567cd433865e841fd49531564736f6c63430008130033", Zt = (a) => a.length > 1;
  class Q1 extends Y0 {
    constructor(...e) {
      Zt(e) ? super(...e) : super(F0, n1, e[0]);
    }
    getDeployTransaction(e) {
      return super.getDeployTransaction(e || {});
    }
    deploy(e) {
      return super.deploy(e || {});
    }
    connect(e) {
      return super.connect(e);
    }
    static createInterface() {
      return new V(F0);
    }
    static connect(e, t) {
      return new H0(e, F0, t);
    }
  }
  __publicField(Q1, "bytecode", n1);
  __publicField(Q1, "abi", F0);
  const L0 = [
    {
      inputs: [
        {
          internalType: "address",
          name: "tokenBridge_",
          type: "address"
        },
        {
          internalType: "address",
          name: "wethAddress",
          type: "address"
        },
        {
          internalType: "address",
          name: "feeRecipient_",
          type: "address"
        },
        {
          internalType: "address",
          name: "ownerAssistant_",
          type: "address"
        },
        {
          internalType: "bool",
          name: "unwrapWeth_",
          type: "bool"
        }
      ],
      stateMutability: "nonpayable",
      type: "constructor"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "oldRecipient",
          type: "address"
        },
        {
          indexed: true,
          internalType: "address",
          name: "newRecipient",
          type: "address"
        }
      ],
      name: "FeeRecipientUpdated",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "oldOwner",
          type: "address"
        },
        {
          indexed: true,
          internalType: "address",
          name: "newOwner",
          type: "address"
        }
      ],
      name: "OwnershipTransfered",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "recipient",
          type: "address"
        },
        {
          indexed: true,
          internalType: "address",
          name: "relayer",
          type: "address"
        },
        {
          indexed: true,
          internalType: "address",
          name: "token",
          type: "address"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "tokenAmount",
          type: "uint256"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "nativeAmount",
          type: "uint256"
        }
      ],
      name: "SwapExecuted",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          components: [
            {
              internalType: "address",
              name: "token",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "value",
              type: "uint256"
            }
          ],
          indexed: true,
          internalType: "struct TokenBridgeRelayerStructs.SwapRateUpdate[]",
          name: "swapRates",
          type: "tuple[]"
        }
      ],
      name: "SwapRateUpdated",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "uint16",
          name: "emitterChainId",
          type: "uint16"
        },
        {
          indexed: true,
          internalType: "bytes32",
          name: "emitterAddress",
          type: "bytes32"
        },
        {
          indexed: true,
          internalType: "uint64",
          name: "sequence",
          type: "uint64"
        }
      ],
      name: "TransferRedeemed",
      type: "event"
    },
    {
      inputs: [],
      name: "VERSION",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "WETH",
      outputs: [
        {
          internalType: "contract IWETH",
          name: "",
          type: "address"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "token",
          type: "address"
        }
      ],
      name: "calculateMaxSwapAmountIn",
      outputs: [
        {
          internalType: "uint256",
          name: "maxAllowed",
          type: "uint256"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "token",
          type: "address"
        },
        {
          internalType: "uint256",
          name: "toNativeAmount",
          type: "uint256"
        }
      ],
      name: "calculateNativeSwapAmountOut",
      outputs: [
        {
          internalType: "uint256",
          name: "nativeAmount",
          type: "uint256"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "uint16",
          name: "targetChainId",
          type: "uint16"
        },
        {
          internalType: "address",
          name: "token",
          type: "address"
        },
        {
          internalType: "uint8",
          name: "decimals",
          type: "uint8"
        }
      ],
      name: "calculateRelayerFee",
      outputs: [
        {
          internalType: "uint256",
          name: "feeInTokenDenomination",
          type: "uint256"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "uint16",
          name: "chainId_",
          type: "uint16"
        }
      ],
      name: "cancelOwnershipTransferRequest",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [],
      name: "chainId",
      outputs: [
        {
          internalType: "uint16",
          name: "",
          type: "uint16"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "bytes",
          name: "encodedTransferMessage",
          type: "bytes"
        }
      ],
      name: "completeTransferWithRelay",
      outputs: [],
      stateMutability: "payable",
      type: "function"
    },
    {
      inputs: [],
      name: "confirmOwnershipTransferRequest",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "bytes",
          name: "encoded",
          type: "bytes"
        }
      ],
      name: "decodeTransferWithRelay",
      outputs: [
        {
          components: [
            {
              internalType: "uint8",
              name: "payloadId",
              type: "uint8"
            },
            {
              internalType: "uint256",
              name: "targetRelayerFee",
              type: "uint256"
            },
            {
              internalType: "uint256",
              name: "toNativeTokenAmount",
              type: "uint256"
            },
            {
              internalType: "bytes32",
              name: "targetRecipient",
              type: "bytes32"
            }
          ],
          internalType: "struct TokenBridgeRelayerStructs.TransferWithRelay",
          name: "transfer",
          type: "tuple"
        }
      ],
      stateMutability: "pure",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256"
        },
        {
          internalType: "uint8",
          name: "decimals",
          type: "uint8"
        }
      ],
      name: "denormalizeAmount",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256"
        }
      ],
      stateMutability: "pure",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "uint16",
          name: "chainId_",
          type: "uint16"
        },
        {
          internalType: "address",
          name: "token",
          type: "address"
        }
      ],
      name: "deregisterToken",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          components: [
            {
              internalType: "uint8",
              name: "payloadId",
              type: "uint8"
            },
            {
              internalType: "uint256",
              name: "targetRelayerFee",
              type: "uint256"
            },
            {
              internalType: "uint256",
              name: "toNativeTokenAmount",
              type: "uint256"
            },
            {
              internalType: "bytes32",
              name: "targetRecipient",
              type: "bytes32"
            }
          ],
          internalType: "struct TokenBridgeRelayerStructs.TransferWithRelay",
          name: "transfer",
          type: "tuple"
        }
      ],
      name: "encodeTransferWithRelay",
      outputs: [
        {
          internalType: "bytes",
          name: "encoded",
          type: "bytes"
        }
      ],
      stateMutability: "pure",
      type: "function"
    },
    {
      inputs: [],
      name: "feeRecipient",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "bytes",
          name: "payload",
          type: "bytes"
        }
      ],
      name: "fetchLocalAddressFromTransferMessage",
      outputs: [
        {
          internalType: "address",
          name: "localAddress",
          type: "address"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "getAcceptedTokensList",
      outputs: [
        {
          internalType: "address[]",
          name: "",
          type: "address[]"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "getPaused",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "uint16",
          name: "emitterChainId",
          type: "uint16"
        }
      ],
      name: "getRegisteredContract",
      outputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "token",
          type: "address"
        }
      ],
      name: "isAcceptedToken",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "token",
          type: "address"
        }
      ],
      name: "maxNativeSwapAmount",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "token",
          type: "address"
        }
      ],
      name: "nativeSwapRate",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256"
        },
        {
          internalType: "uint8",
          name: "decimals",
          type: "uint8"
        }
      ],
      name: "normalizeAmount",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256"
        }
      ],
      stateMutability: "pure",
      type: "function"
    },
    {
      inputs: [],
      name: "owner",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "ownerAssistant",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "pendingOwner",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "uint16",
          name: "chainId_",
          type: "uint16"
        },
        {
          internalType: "bytes32",
          name: "contractAddress",
          type: "bytes32"
        }
      ],
      name: "registerContract",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "uint16",
          name: "chainId_",
          type: "uint16"
        },
        {
          internalType: "address",
          name: "token",
          type: "address"
        }
      ],
      name: "registerToken",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "uint16",
          name: "chainId_",
          type: "uint16"
        }
      ],
      name: "relayerFee",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "relayerFeePrecision",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "uint16",
          name: "chainId_",
          type: "uint16"
        },
        {
          internalType: "bool",
          name: "paused",
          type: "bool"
        }
      ],
      name: "setPauseForTransfers",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "uint16",
          name: "chainId_",
          type: "uint16"
        },
        {
          internalType: "address",
          name: "newOwner",
          type: "address"
        }
      ],
      name: "submitOwnershipTransferRequest",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "token",
          type: "address"
        }
      ],
      name: "swapRate",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "swapRatePrecision",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "tokenBridge",
      outputs: [
        {
          internalType: "contract ITokenBridge",
          name: "",
          type: "address"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "token",
          type: "address"
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256"
        },
        {
          internalType: "uint256",
          name: "toNativeTokenAmount",
          type: "uint256"
        },
        {
          internalType: "uint16",
          name: "targetChain",
          type: "uint16"
        },
        {
          internalType: "bytes32",
          name: "targetRecipient",
          type: "bytes32"
        },
        {
          internalType: "uint32",
          name: "batchId",
          type: "uint32"
        }
      ],
      name: "transferTokensWithRelay",
      outputs: [
        {
          internalType: "uint64",
          name: "messageSequence",
          type: "uint64"
        }
      ],
      stateMutability: "payable",
      type: "function"
    },
    {
      inputs: [],
      name: "unwrapWeth",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "uint16",
          name: "chainId_",
          type: "uint16"
        },
        {
          internalType: "address",
          name: "newFeeRecipient",
          type: "address"
        }
      ],
      name: "updateFeeRecipient",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "uint16",
          name: "chainId_",
          type: "uint16"
        },
        {
          internalType: "address",
          name: "token",
          type: "address"
        },
        {
          internalType: "uint256",
          name: "maxAmount",
          type: "uint256"
        }
      ],
      name: "updateMaxNativeSwapAmount",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "uint16",
          name: "chainId_",
          type: "uint16"
        },
        {
          internalType: "address",
          name: "newAssistant",
          type: "address"
        }
      ],
      name: "updateOwnerAssistant",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "uint16",
          name: "chainId_",
          type: "uint16"
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256"
        }
      ],
      name: "updateRelayerFee",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "uint16",
          name: "chainId_",
          type: "uint16"
        },
        {
          internalType: "uint256",
          name: "relayerFeePrecision_",
          type: "uint256"
        }
      ],
      name: "updateRelayerFeePrecision",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "uint16",
          name: "chainId_",
          type: "uint16"
        },
        {
          components: [
            {
              internalType: "address",
              name: "token",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "value",
              type: "uint256"
            }
          ],
          internalType: "struct TokenBridgeRelayerStructs.SwapRateUpdate[]",
          name: "swapRateUpdate",
          type: "tuple[]"
        }
      ],
      name: "updateSwapRate",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "uint16",
          name: "chainId_",
          type: "uint16"
        },
        {
          internalType: "uint256",
          name: "swapRatePrecision_",
          type: "uint256"
        }
      ],
      name: "updateSwapRatePrecision",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "uint16",
          name: "chainId_",
          type: "uint16"
        },
        {
          internalType: "bool",
          name: "unwrapWeth_",
          type: "bool"
        }
      ],
      name: "updateUnwrapWethFlag",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [],
      name: "wormhole",
      outputs: [
        {
          internalType: "contract IWormhole",
          name: "",
          type: "address"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "toNativeTokenAmount",
          type: "uint256"
        },
        {
          internalType: "uint16",
          name: "targetChain",
          type: "uint16"
        },
        {
          internalType: "bytes32",
          name: "targetRecipient",
          type: "bytes32"
        },
        {
          internalType: "uint32",
          name: "batchId",
          type: "uint32"
        }
      ],
      name: "wrapAndTransferEthWithRelay",
      outputs: [
        {
          internalType: "uint64",
          name: "messageSequence",
          type: "uint64"
        }
      ],
      stateMutability: "payable",
      type: "function"
    },
    {
      stateMutability: "payable",
      type: "receive"
    }
  ], a1 = "0x60806040523480156200001157600080fd5b50604051620049823803806200498283398101604081905262000034916200038c565b6001600f556001600160a01b038516620000955760405162461bcd60e51b815260206004820152601c60248201527f696e76616c696420746f6b656e2062726964676520616464726573730000000060448201526064015b60405180910390fd5b6001600160a01b038416620000ed5760405162461bcd60e51b815260206004820152601460248201527f696e76616c69642077657468206164647265737300000000000000000000000060448201526064016200008c565b6001600160a01b038316620001455760405162461bcd60e51b815260206004820152601560248201527f696e76616c69642066656520726563697069656e74000000000000000000000060448201526064016200008c565b6001600160a01b0382166200019d5760405162461bcd60e51b815260206004820152601760248201527f696e76616c6964206f776e657220617373697374616e7400000000000000000060448201526064016200008c565b600180546001600160a01b03191633179055600380546001600160a01b0319166001600160a01b038516179055600680546001600160a01b0319166001600160a01b03871617905560008054600160201b600160c01b0319166401000000006001600160a01b03871602179055600280546001600160a01b0319166001600160a01b0384161790556000805462ff0000191662010000831515021790556000859050620002c0816001600160a01b0316639a8a05926040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000282573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620002a8919062000410565b6000805461ffff191661ffff92909216919091179055565b6200034b816001600160a01b03166384acd1bb6040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000303573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200032991906200043d565b600580546001600160a01b0319166001600160a01b0392909216919091179055565b620003596305f5e100600755565b620003676305f5e100600855565b5050505050506200045d565b6001600160a01b03811681146200038957600080fd5b50565b600080600080600060a08688031215620003a557600080fd5b8551620003b28162000373565b6020870151909550620003c58162000373565b6040870151909450620003d88162000373565b6060870151909350620003eb8162000373565b608087015190925080151581146200040257600080fd5b809150509295509295909350565b6000602082840312156200042357600080fd5b815161ffff811681146200043657600080fd5b9392505050565b6000602082840312156200045057600080fd5b8151620004368162000373565b614515806200046d6000396000f3fe6080604052600436106102815760003560e01c80636805b84b1161014f5780639fe089ad116100c1578063cd601c781161007a578063cd601c781461083b578063df160d761461085b578063e30c39781461087d578063ea1d2e4a1461089b578063ffa1ad74146108bb578063fff982a8146108ec57600080fd5b80639fe089ad1461076b578063a2f32c8f14610798578063ad5c4648146107b8578063b5419523146107dd578063c6328a46146107fd578063c9c22f9f1461081b57600080fd5b80638da5cb5b116101135780638da5cb5b146106ac5780638e151dd1146106ca57806390a1afaa146106ea57806394cc743d1461070a5780639a8a05921461072a5780639cf278cd1461074d57600080fd5b80636805b84b146105db57806368aa9ef4146105fa5780637c9dec7a146106185780638335572f1461066e57806384acd1bb1461068e57600080fd5b80632def3e16116101f3578063415828bf116101ac578063415828bf14610517578063469048401461052c57806351e2d7b51461054a5780635b9cf0e11461056a578063640d946b1461058a57806366775a6b146105aa57600080fd5b80632def3e16146104145780632efe4f42146104345780632f25e25f1461046a57806339ba66111461047d5780633b6e750f1461049d5780633d62cca0146104e657600080fd5b8063203c509511610245578063203c50951461033357806327105ab91461035357806328ded8e31461037357806329ac8361146103935780632ca8008c146103a65780632d77e8fe146103dc57600080fd5b8063016aa2051461028d578063038c0b66146102af5780631019d654146102c45780631a282195146102f45780631acdab4b1461031457600080fd5b3661028857005b600080fd5b34801561029957600080fd5b506102ad6102a83660046137da565b61090c565b005b3480156102bb57600080fd5b506102ad6109d6565b6102d76102d2366004613825565b610ac3565b6040516001600160401b0390911681526020015b60405180910390f35b34801561030057600080fd5b506102ad61030f36600461389a565b610c63565b34801561032057600080fd5b506007545b6040519081526020016102eb565b34801561033f57600080fd5b506102ad61034e3660046137da565b610cec565b34801561035f57600080fd5b5061032561036e3660046138d7565b610e36565b34801561037f57600080fd5b5061032561038e3660046138d7565b610e70565b6102d76103a13660046138fc565b610e9e565b3480156103b257600080fd5b506103256103c1366004613946565b6001600160a01b03166000908152600a602052604090205490565b3480156103e857600080fd5b506103fc6103f7366004613a3e565b61113c565b6040516001600160a01b0390911681526020016102eb565b34801561042057600080fd5b506102ad61042f366004613abd565b61125c565b34801561044057600080fd5b5061032561044f366004613946565b6001600160a01b03166000908152600b602052604090205490565b6102ad610478366004613ae9565b61131a565b34801561048957600080fd5b50610325610498366004613b5a565b611647565b3480156104a957600080fd5b506104d66104b8366004613946565b6001600160a01b03166000908152600d602052604090205460ff1690565b60405190151581526020016102eb565b3480156104f257600080fd5b50610325610501366004613ba5565b61ffff1660009081526009602052604090205490565b34801561052357600080fd5b50600854610325565b34801561053857600080fd5b506003546001600160a01b03166103fc565b34801561055657600080fd5b506102ad610565366004613abd565b6116fa565b34801561057657600080fd5b506102ad610585366004613abd565b611824565b34801561059657600080fd5b506102ad6105a5366004613bc2565b61193f565b3480156105b657600080fd5b506103256105c5366004613ba5565b61ffff166000908152600c602052604090205490565b3480156105e757600080fd5b506000546301000000900460ff166104d6565b34801561060657600080fd5b506002546001600160a01b03166103fc565b34801561062457600080fd5b50610638610633366004613a3e565b611b83565b6040516102eb9190815160ff16815260208083015190820152604080830151908201526060918201519181019190915260800190565b34801561067a57600080fd5b506102ad61068936600461389a565b611cb4565b34801561069a57600080fd5b506005546001600160a01b03166103fc565b3480156106b857600080fd5b506001546001600160a01b03166103fc565b3480156106d657600080fd5b506103256106e5366004613c49565b611d3b565b3480156106f657600080fd5b506102ad610705366004613abd565b611e1b565b34801561071657600080fd5b506102ad6107253660046137da565b611ed9565b34801561073657600080fd5b5060005460405161ffff90911681526020016102eb565b34801561075957600080fd5b5060005462010000900460ff166104d6565b34801561077757600080fd5b5061078b610786366004613c67565b611fa5565b6040516102eb9190613d25565b3480156107a457600080fd5b506102ad6107b3366004613ba5565b612050565b3480156107c457600080fd5b50600054600160201b90046001600160a01b03166103fc565b3480156107e957600080fd5b506103256107f8366004613946565b6120c7565b34801561080957600080fd5b506006546001600160a01b03166103fc565b34801561082757600080fd5b506102ad6108363660046137da565b612161565b34801561084757600080fd5b50610325610856366004613946565b61221d565b34801561086757600080fd5b50610870612302565b6040516102eb9190613d38565b34801561088957600080fd5b506004546001600160a01b03166103fc565b3480156108a757600080fd5b506102ad6108b63660046137da565b612367565b3480156108c757600080fd5b5061078b604051806040016040528060058152602001640302e322e360dc1b81525081565b3480156108f857600080fd5b506102ad610907366004613d85565b612456565b3361091f6001546001600160a01b031690565b6001600160a01b03161461094e5760405162461bcd60e51b815260040161094590613dc6565b60405180910390fd5b818061ffff1661096160005461ffff1690565b61ffff16146109825760405162461bcd60e51b815260040161094590613df4565b6001600160a01b0382166109c85760405162461bcd60e51b815260206004820152600d60248201526c34b73b30b634b2103a37b5b2b760991b6044820152606401610945565b6109d18261251d565b505050565b60006109ea6004546001600160a01b031690565b9050336001600160a01b03821614610a445760405162461bcd60e51b815260206004820152601b60248201527f63616c6c6572206d7573742062652070656e64696e674f776e657200000000006044820152606401610945565b6000610a586001546001600160a01b031690565b600180546001600160a01b0319166001600160a01b0385161790559050610a7f60006126c2565b816001600160a01b0316816001600160a01b03167f0d18b5fd22306e373229b9439188228edca81207d1667f604daf6cef8aa3ee6760405160405180910390a35050565b6000610acd6126e4565b6000546301000000900460ff1615610b1b5760405162461bcd60e51b81526020600482015260116024820152701c995b185e595c881a5cc81c185d5cd959607a1b6044820152606401610945565b6000610b2f6005546001600160a01b031690565b6001600160a01b0316631a90a2196040518163ffffffff1660e01b8152600401602060405180830381865afa158015610b6c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b909190613e19565b9050803414610bd65760405162461bcd60e51b8152602060048201526012602482015271696e73756666696369656e742076616c756560701b6044820152606401610945565b6000610be18961273d565b9050610bf6610bf08983610e36565b82610e70565b9750610c0289896127df565b9750610c4b6040518060c001604052808b6001600160a01b031681526020018360ff1681526020018a81526020018981526020018861ffff168152602001878152508584612815565b92505050610c596001600f55565b9695505050505050565b33610c766001546001600160a01b031690565b6001600160a01b031614610c9c5760405162461bcd60e51b815260040161094590613dc6565b818061ffff16610caf60005461ffff1690565b61ffff1614610cd05760405162461bcd60e51b815260040161094590613df4565b6000805463ff0000001916630100000084151502179055505050565b33610cff6001546001600160a01b031690565b6001600160a01b031614610d255760405162461bcd60e51b815260040161094590613dc6565b818061ffff16610d3860005461ffff1690565b61ffff1614610d595760405162461bcd60e51b815260040161094590613df4565b6001600160a01b038216610dbf5760405162461bcd60e51b815260206004820152602760248201527f6e6577466565526563697069656e742063616e6e6f7420657175616c206164646044820152667265737328302960c81b6064820152608401610945565b6000610dd36003546001600160a01b031690565b600380546001600160a01b0319166001600160a01b0386161790559050826001600160a01b0316816001600160a01b03167faaebcf1bfa00580e41d966056b48521fa9f202645c86d4ddf28113e617c1b1d360405160405180910390a350505050565b600060088260ff161115610e6757610e4f600883613e48565b610e5a90600a613f45565b610e649084613f54565b92505b50815b92915050565b600060088260ff161115610e6757610e89600883613e48565b610e9490600a613f45565b610e649084613f76565b600080546301000000900460ff1615610eed5760405162461bcd60e51b81526020600482015260116024820152701c995b185e595c881a5cc81c185d5cd959607a1b6044820152606401610945565b60005462010000900460ff16610f455760405162461bcd60e51b815260206004820181905260248201527f574554482066756e6374696f6e616c697479206e6f7420737570706f727465646044820152606401610945565b6000610f596005546001600160a01b031690565b6001600160a01b0316631a90a2196040518163ffffffff1660e01b8152600401602060405180830381865afa158015610f96573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fba9190613e19565b90508034116110005760405162461bcd60e51b8152602060048201526012602482015271696e73756666696369656e742076616c756560701b6044820152606401610945565b600061100c8234613f8d565b9050600061102561101e836012610e36565b6012610e70565b61102f9083613f8d565b9050801561106657604051339082156108fc029083906000818181858888f19350505050158015611064573d6000803e3d6000fd5b505b60006110728284613f8d565b905060006110906000546001600160a01b03600160201b9091041690565b9050806001600160a01b031663d0e30db0836040518263ffffffff1660e01b81526004016000604051808303818588803b1580156110cd57600080fd5b505af11580156110e1573d6000803e3d6000fd5b505050505061112e6040518060c00160405280836001600160a01b03168152602001601260ff1681526020018481526020018c81526020018b61ffff1681526020018a8152508887612815565b9a9950505050505050505050565b60008061114a836021612b3d565b90506000611159846041612b9b565b905061116860005461ffff1690565b61ffff168161ffff1614611249576006546001600160a01b0316604051630ff8f14360e11b815261ffff83166004820152602481018490526001600160a01b039190911690631ff1e28690604401602060405180830381865afa1580156111d3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111f79190613fa0565b92506001600160a01b0383166112445760405162461bcd60e51b81526020600482015260126024820152711d1bdad95b881b9bdd08185d1d195cdd195960721b6044820152606401610945565b611255565b61125282612bf8565b92505b5050919050565b3361126f6001546001600160a01b031690565b6001600160a01b0316146112955760405162461bcd60e51b815260040161094590613dc6565b818061ffff166112a860005461ffff1690565b61ffff16146112c95760405162461bcd60e51b815260040161094590613df4565b600082116113115760405162461bcd60e51b81526020600482015260156024820152740707265636973696f6e206d757374206265203e203605c1b6044820152606401610945565b6109d182600755565b600080600061135e85858080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250612c4c92505050565b925092509250600061136f84611b83565b905060006113808260600151612bf8565b9050600061139760005460ff620100009091041690565b90506001600160a01b03821633036113bf576113b584838784612f41565b5050505050505050565b60006113ca8561273d565b90506113da846020015182610e70565b6020850152600054600160201b90046001600160a01b03166001600160a01b0316856001600160a01b0316036114255761141a868486602001518561306b565b505050505050505050565b6040840151156115ed5761143d846040015182610e70565b6040850152600061144d8661221d565b9050808560400151111561146357604085018190525b6000611473878760400151611d3b565b905080156115af57803410156114cb5760405162461bcd60e51b815260206004820181905260248201527f696e73756666696369656e74206e617469766520617373657420616d6f756e746044820152606401610945565b60006114d78234613f8d565b9050801561150e57604051339082156108fc029083906000818181858888f1935050505015801561150c573d6000803e3d6000fd5b505b6040516001600160a01b0387169083156108fc029084906000818181858888f19350505050158015611544573d6000803e3d6000fd5b50876001600160a01b0316336001600160a01b0316876001600160a01b03167f764f0dc063c06f32d89a3f3af80c0db4be8a090901f589a478b447e0a51f09f18a60400151866040516115a1929190918252602082015260400190565b60405180910390a4506115ea565b6000604087015234156115ea5760405133903480156108fc02916000818181858888f193505050501580156115e8573d6000803e3d6000fd5b505b50505b6000846040015185602001516116039190613fbd565b9050801561162757611627866116216003546001600160a01b031690565b836131e1565b61163b8685611636848b613f8d565b6131e1565b50505050505050505050565b6001600160a01b0382166000908152600a6020526040812054806000036116a45760405162461bcd60e51b81526020600482015260116024820152701cddd85c081c985d19481b9bdd081cd95d607a1b6044820152606401610945565b6008546116b19082613f76565b60075461ffff87166000908152600c60205260409020546116d386600a613f45565b6116dd9190613f76565b6116e79190613f76565b6116f19190613f54565b95945050505050565b3361170d6001546001600160a01b031690565b6001600160a01b0316146117335760405162461bcd60e51b815260040161094590613dc6565b806117905760405162461bcd60e51b815260206004820152602760248201527f636f6e7472616374416464726573732063616e6e6f7420657175616c206279746044820152666573333228302960c81b6064820152608401610945565b61ffff8216158015906117ac575060005461ffff838116911614155b6118085760405162461bcd60e51b815260206004820152602760248201527f636861696e49645f2063616e6e6f7420657175616c2030206f7220746869732060448201526618da185a5b925960ca1b6064820152608401610945565b61ffff91909116600090815260096020526040902055565b5050565b336118376001546001600160a01b031690565b6001600160a01b0316148061186557503361185a6002546001600160a01b031690565b6001600160a01b0316145b6118815760405162461bcd60e51b815260040161094590613fd0565b60005461ffff1661ffff168261ffff16036118ce5760405162461bcd60e51b815260206004820152600d60248201526c34b73b30b634b21031b430b4b760991b6044820152606401610945565b61ffff82166000908152600960205260409020546119275760405162461bcd60e51b815260206004820152601660248201527518dbdb9d1c9858dd08191bd95cdb89dd08195e1a5cdd60521b6044820152606401610945565b61ffff919091166000908152600c6020526040902055565b336119526001546001600160a01b031690565b6001600160a01b031614806119805750336119756002546001600160a01b031690565b6001600160a01b0316145b61199c5760405162461bcd60e51b815260040161094590613fd0565b828061ffff166119af60005461ffff1690565b61ffff16146119d05760405162461bcd60e51b815260040161094590613df4565b8180611a135760405162461bcd60e51b8152602060048201526012602482015271696e76616c69642061727261792073697a6560701b6044820152606401610945565b60005b81811015611b3b57611a49858583818110611a3357611a33614011565b6104b89260206040909202019081019150613946565b611a655760405162461bcd60e51b815260040161094590614027565b6000858583818110611a7957611a79614011565b9050604002016020013511611ad05760405162461bcd60e51b815260206004820152601960248201527f737761702072617465206d757374206265206e6f6e7a65726f000000000000006044820152606401610945565b611b33858583818110611ae557611ae5614011565b611afb9260206040909202019081019150613946565b868684818110611b0d57611b0d614011565b905060400201602001356001600160a01b039091166000908152600a6020526040902055565b600101611a16565b508383604051611b4c929190614053565b604051908190038120907f7abf49a6ebb116bc314846377cd82a3d2c8c1ea48149a652356009fc37100dd790600090a25050505050565b604080516080810182526000808252602082018190529181018290526060810182905290611bb18382613244565b60ff168252611bc1600182613fbd565b9050816000015160ff16600114611c0e5760405162461bcd60e51b81526020600482015260116024820152701a5b9d985b1a59081c185e5b1bd8591259607a1b6044820152606401610945565b611c1883826132a0565b602080840191909152611c2b9082613fbd565b9050611c3783826132a0565b6040830152611c47602082613fbd565b9050611c538382612b3d565b6060830152611c63602082613fbd565b905082518114611cae5760405162461bcd60e51b81526020600482015260166024820152750d2dcecc2d8d2c840dacae6e6c2ceca40d8cadccee8d60531b6044820152606401610945565b50919050565b33611cc76001546001600160a01b031690565b6001600160a01b031614611ced5760405162461bcd60e51b815260040161094590613dc6565b818061ffff16611d0060005461ffff1690565b61ffff1614611d215760405162461bcd60e51b815260040161094590613df4565b6000805462ff000019166201000084151502179055505050565b600080611d478461273d565b90506000611d6d611d686000546001600160a01b03600160201b9091041690565b61273d565b90508060ff168260ff161115611dca57611d878183613e48565b611d9290600a613f45565b611d9b866120c7565b611da59190613f76565b84611daf60075490565b611db99190613f76565b611dc39190613f54565b9250611e13565b611dd3856120c7565b611ddd8383613e48565b611de890600a613f45565b85611df260075490565b611dfc9190613f76565b611e069190613f76565b611e109190613f54565b92505b505092915050565b33611e2e6001546001600160a01b031690565b6001600160a01b031614611e545760405162461bcd60e51b815260040161094590613dc6565b818061ffff16611e6760005461ffff1690565b61ffff1614611e885760405162461bcd60e51b815260040161094590613df4565b60008211611ed05760405162461bcd60e51b81526020600482015260156024820152740707265636973696f6e206d757374206265203e203605c1b6044820152606401610945565b6109d182600855565b33611eec6001546001600160a01b031690565b6001600160a01b031614611f125760405162461bcd60e51b815260040161094590613dc6565b818061ffff16611f2560005461ffff1690565b61ffff1614611f465760405162461bcd60e51b815260040161094590613df4565b6001600160a01b038216611f9c5760405162461bcd60e51b815260206004820181905260248201527f6e65774f776e65722063616e6e6f7420657175616c20616464726573732830296044820152606401610945565b6109d1826126c2565b6060816000015160ff16600114611ff25760405162461bcd60e51b81526020600482015260116024820152701a5b9d985b1a59081c185e5b1bd8591259607a1b6044820152606401610945565b81516020808401516040808601516060870151915161203a95949192910160f89490941b6001600160f81b031916845260018401929092526021830152604182015260610190565b6040516020818303038152906040529050919050565b336120636001546001600160a01b031690565b6001600160a01b0316146120895760405162461bcd60e51b815260040161094590613dc6565b808061ffff1661209c60005461ffff1690565b61ffff16146120bd5760405162461bcd60e51b815260040161094590613df4565b61182060006126c2565b600080546001600160a01b03600160201b90910481168252600a60205260408083205491841683528220546000821180156121025750600081115b6121425760405162461bcd60e51b81526020600482015260116024820152701cddd85c081c985d19481b9bdd081cd95d607a1b6044820152606401610945565b808261214d60075490565b6121579190613f76565b6112529190613f54565b336121746001546001600160a01b031690565b6001600160a01b03161461219a5760405162461bcd60e51b815260040161094590613dc6565b818061ffff166121ad60005461ffff1690565b61ffff16146121ce5760405162461bcd60e51b815260040161094590613df4565b6001600160a01b0382166122145760405162461bcd60e51b815260206004820152600d60248201526c34b73b30b634b2103a37b5b2b760991b6044820152606401610945565b6109d1826132f5565b6000806122298361273d565b9050600061224a611d686000546001600160a01b03600160201b9091041690565b90508060ff168260ff1611156122b9576007546122678284613e48565b61227290600a613f45565b61227b866120c7565b6001600160a01b0387166000908152600b602052604090205461229e9190613f76565b6122a89190613f76565b6122b29190613f54565b9250611255565b6007546122c68383613e48565b6122d190600a613f45565b6122db9190613f76565b6122e4856120c7565b6001600160a01b0386166000908152600b602052604090205461214d565b60606000600e0180548060200260200160405190810160405280929190818152602001828054801561235d57602002820191906000526020600020905b81546001600160a01b0316815260019091019060200180831161233f575b5050505050905090565b3361237a6001546001600160a01b031690565b6001600160a01b0316146123a05760405162461bcd60e51b815260040161094590613dc6565b818061ffff166123b360005461ffff1690565b61ffff16146123d45760405162461bcd60e51b815260040161094590613df4565b6001600160a01b0382166124365760405162461bcd60e51b8152602060048201526024808201527f6e6577417373697374616e742063616e6e6f7420657175616c206164647265736044820152637328302960e01b6064820152608401610945565b600280546001600160a01b0319166001600160a01b038416179055505050565b336124696001546001600160a01b031690565b6001600160a01b03161461248f5760405162461bcd60e51b815260040161094590613dc6565b828061ffff166124a260005461ffff1690565b61ffff16146124c35760405162461bcd60e51b815260040161094590613df4565b6001600160a01b0383166000908152600d602052604090205460ff166124fb5760405162461bcd60e51b815260040161094590614027565b6001600160a01b0383166000908152600b602052604090208290555b50505050565b6001600160a01b0381166000908152600d602052604090205460ff1661257c5760405162461bcd60e51b81526020600482015260146024820152731d1bdad95b881b9bdd081c9959da5cdd195c995960621b6044820152606401610945565b6001600160a01b0381166000908152600d60209081526040808320805460ff19169055600a8252808320839055600b9091528120819055600e54905b8181101561260257826001600160a01b03166000600e0182815481106125e0576125e0614011565b6000918252602090912001546001600160a01b031614612602576001016125b8565b8181146109d157600182111561268a57600e61261f600184613f8d565b8154811061262f5761262f614011565b600091825260209091200154600e80546001600160a01b03909216918390811061265b5761265b614011565b9060005260206000200160006101000a8154816001600160a01b0302191690836001600160a01b031602179055505b600e80548061269b5761269b61409e565b600082815260209020810160001990810180546001600160a01b0319169055019055505050565b600480546001600160a01b0319166001600160a01b0392909216919091179055565b6002600f54036127365760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610945565b6002600f55565b60408051600481526024810182526020810180516001600160e01b031663313ce56760e01b179052905160009182916001600160a01b03851691612780916140b4565b600060405180830381855afa9150503d80600081146127bb576040519150601f19603f3d011682016040523d82523d6000602084013e6127c0565b606091505b50915050808060200190518101906127d891906140e0565b9392505050565b6000806127eb846133c4565b90506127f984333086613470565b80612803856133c4565b61280d9190613f8d565b949350505050565b82516001600160a01b03166000908152600d602052604081205460ff1661284e5760405162461bcd60e51b815260040161094590614027565b60a08401516128ab5760405162461bcd60e51b8152602060048201526024808201527f746172676574526563697069656e742063616e6e6f74206265206279746573336044820152633228302960e01b6064820152608401610945565b60006128bf85604001518660200151610e36565b9050600081116129115760405162461bcd60e51b815260206004820152601d60248201527f6e6f726d616c697a656420616d6f756e74206d757374206265203e20300000006044820152606401610945565b600061292586606001518760200151610e36565b905085606001516000148061293a5750600081115b6129865760405162461bcd60e51b815260206004820152601b60248201527f696e76616c696420746f4e6174697665546f6b656e416d6f756e7400000000006044820152606401610945565b608086015161ffff16600090815260096020526040902054806129e35760405162461bcd60e51b81526020600482015260156024820152741d185c99d95d081b9bdd081c9959da5cdd195c9959605a1b6044820152606401610945565b6000612a096129ff89608001518a600001518b60200151611647565b8960200151610e36565b9050612a158382613fbd565b8411612a595760405162461bcd60e51b81526020600482015260136024820152721a5b9cdd59999a58da595b9d08185b5bdd5b9d606a1b6044820152606401610945565b6000612a8c6040518060800160405280600160ff1681526020018481526020018681526020018b60a00151815250611fa5565b90506000612aa26006546001600160a01b031690565b9050612ab78a60000151828c604001516134a8565b806001600160a01b031663c5a5ebda898c600001518d604001518e60800151898f896040518863ffffffff1660e01b8152600401612afa969594939291906140fd565b60206040518083038185885af1158015612b18573d6000803e3d6000fd5b50505050506040513d601f19601f8201168201806040525081019061112e9190614163565b6000612b4a826020613fbd565b83511015612b925760405162461bcd60e51b8152602060048201526015602482015274746f427974657333325f6f75744f66426f756e647360581b6044820152606401610945565b50016020015190565b6000612ba8826002613fbd565b83511015612bef5760405162461bcd60e51b8152602060048201526014602482015273746f55696e7431365f6f75744f66426f756e647360601b6044820152606401610945565b50016002015190565b60006001600160a01b0319821615612c485760405162461bcd60e51b8152602060048201526013602482015272696e76616c69642045564d206164647265737360681b6044820152606401610945565b5090565b60606000806000612c656005546001600160a01b031690565b6001600160a01b031663a9e11893866040518263ffffffff1660e01b8152600401612c909190613d25565b600060405180830381865afa158015612cad573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052612cd591908101906142a2565b90506000612ce68260e0015161113c565b9050612d0a816001600160a01b03166000908152600d602052604090205460ff1690565b612d4d5760405162461bcd60e51b81526020600482015260146024820152731d1bdad95b881b9bdd081c9959da5cdd195c995960621b6044820152606401610945565b6000612d58826133c4565b90506000612d6e6006546001600160a01b031690565b90506000816001600160a01b031663c3f511c18a6040518263ffffffff1660e01b8152600401612d9e9190613d25565b6000604051808303816000875af1158015612dbd573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052612de591908101906143c6565b9050600083612df3866133c4565b612dfd9190613f8d565b90506000836001600160a01b031663ea63738d846040518263ffffffff1660e01b8152600401612e2d9190613d25565b600060405180830381865afa158015612e4a573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052612e7291908101906143fa565b9050612e92876060015161ffff1660009081526009602052604090205490565b8160c0015114612ee45760405162461bcd60e51b815260206004820152601760248201527f636f6e7472616374206e6f7420726567697374657265640000000000000000006044820152606401610945565b8660a001516001600160401b03168760800151886060015161ffff167fcaf280c8cfeba144da67230d9b009c8f868a75bac9a528fa0474be1ba317c16960405160405180910390a460e001519a9099509397509295505050505050565b3415612f9b5760405162461bcd60e51b815260206004820152602360248201527f726563697069656e742063616e6e6f742073776170206e61746976652061737360448201526265747360e81b6064820152608401610945565b6000546001600160a01b03600160201b909104811690851681148015612fbe5750815b1561305957604051632e1a7d4d60e01b8152600481018490526001600160a01b03821690632e1a7d4d90602401600060405180830381600087803b15801561300557600080fd5b505af1158015613019573d6000803e3d6000fd5b50506040516001600160a01b038716925085156108fc02915085906000818181858888f19350505050158015613053573d6000803e3d6000fd5b50613064565b6130648585856131e1565b5050505050565b34156130ae5760405162461bcd60e51b815260206004820152601260248201527176616c7565206d757374206265207a65726f60701b6044820152606401610945565b80156131a157600054604051632e1a7d4d60e01b815260048101869052600160201b9091046001600160a01b031690632e1a7d4d90602401600060405180830381600087803b15801561310057600080fd5b505af1158015613114573d6000803e3d6000fd5b50505050826001600160a01b03166108fc83866131319190613f8d565b6040518115909202916000818181858888f19350505050158015613159573d6000803e3d6000fd5b50811561319c576003546040516001600160a01b039091169083156108fc029084906000818181858888f1935050505015801561319a573d6000803e3d6000fd5b505b612517565b600054600160201b90046001600160a01b03166131c381856116368689613f8d565b821561306457613064816131df6003546001600160a01b031690565b855b6040516001600160a01b0383166024820152604481018290526109d190849063a9059cbb60e01b906064015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909316929092179091526135bd565b6000613251826001613fbd565b835110156132975760405162461bcd60e51b8152602060048201526013602482015272746f55696e74385f6f75744f66426f756e647360681b6044820152606401610945565b50016001015190565b60006132ad826020613fbd565b83511015612b925760405162461bcd60e51b8152602060048201526015602482015274746f55696e743235365f6f75744f66426f756e647360581b6044820152606401610945565b6001600160a01b0381166000908152600d602052604090205460ff161561335e5760405162461bcd60e51b815260206004820152601860248201527f746f6b656e20616c7265616479207265676973746572656400000000000000006044820152606401610945565b6001600160a01b03166000818152600d60205260408120805460ff19166001908117909155600e805491820181559091527fbb7b4a454dc3493923482f07822329ed19e8244eff582cc204f8554c3620c3fd0180546001600160a01b0319169091179055565b604080513060248083019190915282518083039091018152604490910182526020810180516001600160e01b03166370a0823160e01b179052905160009182916001600160a01b03851691613418916140b4565b600060405180830381855afa9150503d8060008114613453576040519150601f19603f3d011682016040523d82523d6000602084013e613458565b606091505b50915050808060200190518101906127d89190613e19565b6040516001600160a01b03808516602483015283166044820152606481018290526125179085906323b872dd60e01b9060840161320d565b8015806135225750604051636eb1769f60e11b81523060048201526001600160a01b03838116602483015284169063dd62ed3e90604401602060405180830381865afa1580156134fc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906135209190613e19565b155b61358d5760405162461bcd60e51b815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527520746f206e6f6e2d7a65726f20616c6c6f77616e636560501b6064820152608401610945565b6040516001600160a01b0383166024820152604481018290526109d190849063095ea7b360e01b9060640161320d565b6000613612826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b031661368f9092919063ffffffff16565b8051909150156109d1578080602001905181019061363091906144c2565b6109d15760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610945565b606061280d848460008585600080866001600160a01b031685876040516136b691906140b4565b60006040518083038185875af1925050503d80600081146136f3576040519150601f19603f3d011682016040523d82523d6000602084013e6136f8565b606091505b509150915061370987838387613714565b979650505050505050565b6060831561378357825160000361377c576001600160a01b0385163b61377c5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610945565b508161280d565b61280d83838151156137985781518083602001fd5b8060405162461bcd60e51b81526004016109459190613d25565b61ffff811681146137c257600080fd5b50565b6001600160a01b03811681146137c257600080fd5b600080604083850312156137ed57600080fd5b82356137f8816137b2565b91506020830135613808816137c5565b809150509250929050565b63ffffffff811681146137c257600080fd5b60008060008060008060c0878903121561383e57600080fd5b8635613849816137c5565b955060208701359450604087013593506060870135613867816137b2565b92506080870135915060a087013561387e81613813565b809150509295509295509295565b80151581146137c257600080fd5b600080604083850312156138ad57600080fd5b82356138b8816137b2565b915060208301356138088161388c565b60ff811681146137c257600080fd5b600080604083850312156138ea57600080fd5b823591506020830135613808816138c8565b6000806000806080858703121561391257600080fd5b843593506020850135613924816137b2565b925060408501359150606085013561393b81613813565b939692955090935050565b60006020828403121561395857600080fd5b81356127d8816137c5565b634e487b7160e01b600052604160045260246000fd5b604051608081016001600160401b038111828210171561399b5761399b613963565b60405290565b60405161016081016001600160401b038111828210171561399b5761399b613963565b60405161010081016001600160401b038111828210171561399b5761399b613963565b604051601f8201601f191681016001600160401b0381118282101715613a0f57613a0f613963565b604052919050565b60006001600160401b03821115613a3057613a30613963565b50601f01601f191660200190565b600060208284031215613a5057600080fd5b81356001600160401b03811115613a6657600080fd5b8201601f81018413613a7757600080fd5b8035613a8a613a8582613a17565b6139e7565b818152856020838501011115613a9f57600080fd5b81602084016020830137600091810160200191909152949350505050565b60008060408385031215613ad057600080fd5b8235613adb816137b2565b946020939093013593505050565b60008060208385031215613afc57600080fd5b82356001600160401b0380821115613b1357600080fd5b818501915085601f830112613b2757600080fd5b813581811115613b3657600080fd5b866020828501011115613b4857600080fd5b60209290920196919550909350505050565b600080600060608486031215613b6f57600080fd5b8335613b7a816137b2565b92506020840135613b8a816137c5565b91506040840135613b9a816138c8565b809150509250925092565b600060208284031215613bb757600080fd5b81356127d8816137b2565b600080600060408486031215613bd757600080fd5b8335613be2816137b2565b925060208401356001600160401b0380821115613bfe57600080fd5b818601915086601f830112613c1257600080fd5b813581811115613c2157600080fd5b8760208260061b8501011115613c3657600080fd5b6020830194508093505050509250925092565b60008060408385031215613c5c57600080fd5b8235613adb816137c5565b600060808284031215613c7957600080fd5b604051608081018181106001600160401b0382111715613c9b57613c9b613963565b6040528235613ca9816138c8565b808252506020830135602082015260408301356040820152606083013560608201528091505092915050565b60005b83811015613cf0578181015183820152602001613cd8565b50506000910152565b60008151808452613d11816020860160208601613cd5565b601f01601f19169290920160200192915050565b6020815260006127d86020830184613cf9565b6020808252825182820181905260009190848201906040850190845b81811015613d795783516001600160a01b031683529284019291840191600101613d54565b50909695505050505050565b600080600060608486031215613d9a57600080fd5b8335613da5816137b2565b92506020840135613db5816137c5565b929592945050506040919091013590565b60208082526014908201527331b0b63632b9103737ba103a34329037bbb732b960611b604082015260600190565b6020808252600b908201526a3bb937b7339031b430b4b760a91b604082015260600190565b600060208284031215613e2b57600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b60ff8281168282160390811115610e6a57610e6a613e32565b600181815b80851115613e9c578160001904821115613e8257613e82613e32565b80851615613e8f57918102915b93841c9390800290613e66565b509250929050565b600082613eb357506001610e6a565b81613ec057506000610e6a565b8160018114613ed65760028114613ee057613efc565b6001915050610e6a565b60ff841115613ef157613ef1613e32565b50506001821b610e6a565b5060208310610133831016604e8410600b8410161715613f1f575081810a610e6a565b613f298383613e61565b8060001904821115613f3d57613f3d613e32565b029392505050565b60006127d860ff841683613ea4565b600082613f7157634e487b7160e01b600052601260045260246000fd5b500490565b8082028115828204841417610e6a57610e6a613e32565b81810381811115610e6a57610e6a613e32565b600060208284031215613fb257600080fd5b81516127d8816137c5565b80820180821115610e6a57610e6a613e32565b60208082526021908201527f63616c6c6572206e6f7420746865206f776e6572206f7220617373697374616e6040820152601d60fa1b606082015260800190565b634e487b7160e01b600052603260045260246000fd5b6020808252601290820152711d1bdad95b881b9bdd081858d8d95c1d195960721b604082015260600190565b60008184825b8581101561409357813561406c816137c5565b6001600160a01b031683526020828101359084015260409283019290910190600101614059565b509095945050505050565b634e487b7160e01b600052603160045260246000fd5b600082516140c6818460208701613cd5565b9190910192915050565b80516140db816138c8565b919050565b6000602082840312156140f257600080fd5b81516127d8816138c8565b60018060a01b038716815285602082015261ffff8516604082015283606082015263ffffffff8316608082015260c060a0820152600061414060c0830184613cf9565b98975050505050505050565b80516001600160401b03811681146140db57600080fd5b60006020828403121561417557600080fd5b6127d88261414c565b80516140db81613813565b80516140db816137b2565b600082601f8301126141a557600080fd5b81516141b3613a8582613a17565b8181528460208386010111156141c857600080fd5b61280d826020830160208701613cd5565b600082601f8301126141ea57600080fd5b815160206001600160401b0382111561420557614205613963565b614213818360051b016139e7565b82815260079290921b8401810191818101908684111561423257600080fd5b8286015b84811015614297576080818903121561424f5760008081fd5b614257613979565b815181528482015185820152604080830151614272816138c8565b90820152606082810151614285816138c8565b90820152835291830191608001614236565b509695505050505050565b6000602082840312156142b457600080fd5b81516001600160401b03808211156142cb57600080fd5b9083019061016082860312156142e057600080fd5b6142e86139a1565b6142f1836140d0565b81526142ff6020840161417e565b60208201526143106040840161417e565b604082015261432160608401614189565b60608201526080830151608082015261433c60a0840161414c565b60a082015261434d60c084016140d0565b60c082015260e08301518281111561436457600080fd5b61437087828601614194565b60e08301525061010061438481850161417e565b90820152610120838101518381111561439c57600080fd5b6143a8888287016141d9565b91830191909152506101409283015192810192909252509392505050565b6000602082840312156143d857600080fd5b81516001600160401b038111156143ee57600080fd5b61280d84828501614194565b60006020828403121561440c57600080fd5b81516001600160401b038082111561442357600080fd5b90830190610100828603121561443857600080fd5b6144406139c4565b614449836140d0565b8152602083015160208201526040830151604082015261446b60608401614189565b60608201526080830151608082015261448660a08401614189565b60a082015260c083015160c082015260e0830151828111156144a757600080fd5b6144b387828601614194565b60e08301525095945050505050565b6000602082840312156144d457600080fd5b81516127d88161388c56fea26469706673582212204380a2c16f3d3a94e16ceec8dd417389a415486e9286774f1ba51d1e17ea374064736f6c63430008110033", Qt = (a) => a.length > 1;
  class qt extends Y0 {
    constructor(...e) {
      Qt(e) ? super(...e) : super(L0, a1, e[0]);
    }
    getDeployTransaction(e, t, n, r, s, i) {
      return super.getDeployTransaction(e, t, n, r, s, i || {});
    }
    deploy(e, t, n, r, s, i) {
      return super.deploy(e, t, n, r, s, i || {});
    }
    connect(e) {
      return super.connect(e);
    }
    static createInterface() {
      return new V(L0);
    }
    static connect(e, t) {
      return new H0(e, L0, t);
    }
  }
  __publicField(qt, "bytecode", a1);
  __publicField(qt, "abi", L0);
  o5 = Object.freeze(Object.defineProperty({
    __proto__: null,
    Bridge__factory: Q1,
    TokenBridgeRelayer__factory: qt
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  i1(b1, "TokenBridge", c6);
  i1(b1, "ExecutorTokenBridge", g6);
});
export {
  g6 as EvmExecutorTokenBridge,
  c6 as EvmTokenBridge,
  __tla,
  o5 as ethers_contracts
};
