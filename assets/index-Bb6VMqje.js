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
import { aN as Nn, b as vn, aE as On, __tla as __tla_0 } from "./wormhole-CF4M17IO.js";
import { Q as An, R as Ne, Z as rt, W as kn, Y as In, _ as Rn, __tla as __tla_1 } from "./platform-glgmS_EP.js";
import { c as Pn, __tla as __tla_2 } from "./create-DGkuRurI.js";
import { L as Sn, g as Un, __tla as __tla_3 } from "./api-ca8vt7Jy.js";
import "./crypto-CvxmDsJu.js";
import { __tla as __tla_4 } from "./balances-BncbkBAK.js";
import { __tla as __tla_5 } from "./index-Df8xo8q0.js";
import "./vendor-C3gEtrcs.js";
let We, kr;
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
  var _e2, _e3, _e4, _t2, _Ve_instances, n_fn, _e5, _t3, _n2, _r, _s, _Xe_instances, i_fn, a_fn, _e6, _e7, _t4, _B_instances, n_fn2, _E_instances, e_fn, _Ee_instances, e_fn2, _e8, _t5, _n3, _r2, _H_instances, s_fn, i_fn2, _e9, _e10, _e11, _e12, _e13, _a;
  We = class {
    constructor(e, t, n, s) {
      __publicField(this, "network");
      __publicField(this, "chain");
      __publicField(this, "provider");
      __publicField(this, "contracts");
      __publicField(this, "chainId");
      __publicField(this, "coreAddress");
      __publicField(this, "core");
      __publicField(this, "coreIface");
      this.network = e, this.chain = t, this.provider = n, this.contracts = s, this.chainId = Nn.get(e, t), this.coreIface = Je.createInterface();
      const i = this.contracts.coreBridge;
      if (!i) throw new Error("Core bridge address not found");
      this.coreAddress = i, this.core = Je.connect(i, n);
    }
    async getMessageFee() {
      return await this.core.messageFee.staticCall();
    }
    async getGuardianSetIndex() {
      return Number(await this.core.getCurrentGuardianSetIndex.staticCall());
    }
    async getGuardianSet(e) {
      const t = await this.core.getGuardianSet(e);
      return {
        index: e,
        keys: t[0],
        expiry: t[1]
      };
    }
    static async fromRpc(e, t) {
      const [n, s] = await An.chainFromRpc(e), i = t[s];
      if (i.network !== n) throw new Error(`Network mismatch: ${i.network} != ${n}`);
      return new We(n, s, e, i.contracts);
    }
    async *publishMessage(e, t, n, s) {
      const i = new Ne(e).toString(), a = await this.getMessageFee(), o = await this.core.publishMessage.populateTransaction(n, t, s, {
        value: a
      });
      yield this.createUnsignedTx(rt(o, i), "WormholeCore.publishMessage");
    }
    async *verifyMessage(e, t) {
      const n = new Ne(e).toString(), s = await this.core.parseAndVerifyVM.populateTransaction(Sn(t));
      yield this.createUnsignedTx(rt(s, n), "WormholeCore.verifyMessage");
    }
    async parseTransaction(e) {
      const t = await this.provider.getTransactionReceipt(e);
      return t === null ? [] : t.logs.filter((n) => n.address === this.coreAddress).map((n) => {
        const { topics: s, data: i } = n, a = this.coreIface.parseLog({
          topics: s.slice(),
          data: i
        });
        if (a === null) return;
        const o = new Ne(a.args.sender);
        return {
          chain: this.chain,
          emitter: o.toUniversalAddress(),
          sequence: a.args.sequence
        };
      }).filter(vn);
    }
    async parseMessages(e) {
      const t = await this.provider.getTransactionReceipt(e);
      if (t === null) throw new Error("Could not get transaction receipt");
      const n = await this.getGuardianSetIndex();
      return t.logs.filter((s) => s.address === this.coreAddress).map((s) => {
        const { topics: i, data: a } = s, o = this.coreIface.parseLog({
          topics: i.slice(),
          data: a
        });
        if (o === null) return null;
        const c = new Ne(o.args.sender);
        return Pn("Uint8Array", {
          guardianSet: n,
          timestamp: 0,
          emitterChain: this.chain,
          emitterAddress: c.toUniversalAddress(),
          consistencyLevel: Number(o.args.consistencyLevel),
          sequence: BigInt(o.args.sequence),
          nonce: Number(o.args.nonce),
          signatures: [],
          payload: Un.decode(o.args.payload)
        });
      }).filter((s) => !!s);
    }
    createUnsignedTx(e, t, n = false) {
      return new kn(In(e, this.chainId), this.network, this.chain, t, n);
    }
  };
  const Cn = "6.17.0";
  function Ln(r, e, t) {
    const n = e.split("|").map((i) => i.trim());
    for (let i = 0; i < n.length; i++) switch (e) {
      case "any":
        return;
      case "bigint":
      case "boolean":
      case "number":
      case "string":
        if (typeof r === e) return;
    }
    const s = new Error(`invalid value for type ${e}`);
    throw s.code = "INVALID_ARGUMENT", s.argument = `value.${t}`, s.value = r, s;
  }
  async function $e(r) {
    const e = Object.keys(r);
    return (await Promise.all(e.map((n) => Promise.resolve(r[n])))).reduce((n, s, i) => (n[e[i]] = s, n), {});
  }
  function m(r, e, t) {
    for (let n in e) {
      let s = e[n];
      const i = t ? t[n] : null;
      i && Ln(s, i, n), Object.defineProperty(r, n, {
        enumerable: true,
        value: s,
        writable: false
      });
    }
  }
  function le(r, e) {
    if (r == null) return "null";
    if (e == null && (e = /* @__PURE__ */ new Set()), typeof r == "object") {
      if (e.has(r)) return "[Circular]";
      e.add(r);
    }
    if (Array.isArray(r)) return "[ " + r.map((t) => le(t, e)).join(", ") + " ]";
    if (r instanceof Uint8Array) {
      const t = "0123456789abcdef";
      let n = "0x";
      for (let s = 0; s < r.length; s++) n += t[r[s] >> 4], n += t[r[s] & 15];
      return n;
    }
    if (typeof r == "object" && typeof r.toJSON == "function") return le(r.toJSON(), e);
    switch (typeof r) {
      case "boolean":
      case "number":
      case "symbol":
        return r.toString();
      case "bigint":
        return BigInt(r).toString();
      case "string":
        return JSON.stringify(r);
      case "object": {
        const t = Object.keys(r);
        return t.sort(), "{ " + t.map((n) => `${le(n, e)}: ${le(r[n], e)}`).join(", ") + " }";
      }
    }
    return "[ COULD NOT SERIALIZE ]";
  }
  function de(r, e) {
    return r && r.code === e;
  }
  function Lt(r) {
    return de(r, "CALL_EXCEPTION");
  }
  function me(r, e, t) {
    let n = r;
    {
      const i = [];
      if (t) {
        if ("message" in t || "code" in t || "name" in t) throw new Error(`value will overwrite populated values: ${le(t)}`);
        for (const a in t) {
          if (a === "shortMessage") continue;
          const o = t[a];
          i.push(a + "=" + le(o));
        }
      }
      i.push(`code=${e}`), i.push(`version=${Cn}`), i.length && (r += " (" + i.join(", ") + ")");
    }
    let s;
    switch (e) {
      case "INVALID_ARGUMENT":
        s = new TypeError(r);
        break;
      case "NUMERIC_FAULT":
      case "BUFFER_OVERRUN":
        s = new RangeError(r);
        break;
      default:
        s = new Error(r);
    }
    return m(s, {
      code: e
    }), t && Object.assign(s, t), s.shortMessage == null && m(s, {
      shortMessage: n
    }), s;
  }
  function y(r, e, t, n) {
    if (!r) throw me(e, t, n);
  }
  function l(r, e, t, n) {
    y(r, e, "INVALID_ARGUMENT", {
      argument: t,
      value: n
    });
  }
  function Bt(r, e, t) {
    t == null && (t = ""), t && (t = ": " + t), y(r >= e, "missing argument" + t, "MISSING_ARGUMENT", {
      count: r,
      expectedCount: e
    }), y(r <= e, "too many arguments" + t, "UNEXPECTED_ARGUMENT", {
      count: r,
      expectedCount: e
    });
  }
  [
    "NFD",
    "NFC",
    "NFKD",
    "NFKC"
  ].reduce((r, e) => {
    try {
      if ("test".normalize(e) !== "test") throw new Error("bad");
      if (e === "NFD" && "\xE9".normalize("NFD") !== "e\u0301") throw new Error("broken");
      r.push(e);
    } catch {
    }
    return r;
  }, []);
  function Ke(r, e, t) {
    if (t == null && (t = ""), r !== e) {
      let n = t, s = "new";
      t && (n += ".", s += " " + t), y(false, `private constructor; use ${n}from* methods`, "UNSUPPORTED_OPERATION", {
        operation: s
      });
    }
  }
  function Ft(r, e, t) {
    if (r instanceof Uint8Array) return t ? new Uint8Array(r) : r;
    if (typeof r == "string" && r.length % 2 === 0 && r.match(/^0x[0-9a-f]*$/i)) {
      const n = new Uint8Array((r.length - 2) / 2);
      let s = 2;
      for (let i = 0; i < n.length; i++) n[i] = parseInt(r.substring(s, s + 2), 16), s += 2;
      return n;
    }
    l(false, "invalid BytesLike value", e || "value", r);
  }
  function L(r, e) {
    return Ft(r, e, false);
  }
  function D(r, e) {
    return Ft(r, e, true);
  }
  function z(r, e) {
    return !(typeof r != "string" || !r.match(/^0x[0-9A-Fa-f]*$/) || typeof e == "number" && r.length !== 2 + 2 * e || e === true && r.length % 2 !== 0);
  }
  function Bn(r) {
    return z(r, true) || r instanceof Uint8Array;
  }
  const st = "0123456789abcdef";
  function O(r) {
    const e = L(r);
    let t = "0x";
    for (let n = 0; n < e.length; n++) {
      const s = e[n];
      t += st[(s & 240) >> 4] + st[s & 15];
    }
    return t;
  }
  function ie(r) {
    return "0x" + r.map((e) => O(e).substring(2)).join("");
  }
  function ne(r, e, t) {
    const n = L(r);
    return t != null && t > n.length && y(false, "cannot slice beyond data bounds", "BUFFER_OVERRUN", {
      buffer: n,
      length: n.length,
      offset: t
    }), O(n.slice(e ?? 0, t ?? n.length));
  }
  function _t(r, e, t) {
    const n = L(r);
    y(e >= n.length, "padding exceeds data length", "BUFFER_OVERRUN", {
      buffer: new Uint8Array(n),
      length: e,
      offset: e + 1
    });
    const s = new Uint8Array(e);
    return s.fill(0), t ? s.set(n, e - n.length) : s.set(n, 0), O(s);
  }
  function Fn(r, e) {
    return _t(r, e, true);
  }
  function _n(r, e) {
    return _t(r, e, false);
  }
  const xe = BigInt(0), F = BigInt(1), be = 9007199254740991;
  function Mn(r, e) {
    const t = Se(r, "value"), n = BigInt(q(e, "width"));
    if (y(t >> n === xe, "overflow", "NUMERIC_FAULT", {
      operation: "fromTwos",
      fault: "overflow",
      value: r
    }), t >> n - F) {
      const s = (F << n) - F;
      return -((~t & s) + F);
    }
    return t;
  }
  function $n(r, e) {
    let t = Q(r, "value");
    const n = BigInt(q(e, "width")), s = F << n - F;
    if (t < xe) {
      t = -t, y(t <= s, "too low", "NUMERIC_FAULT", {
        operation: "toTwos",
        fault: "overflow",
        value: r
      });
      const i = (F << n) - F;
      return (~t & i) + F;
    } else y(t < s, "too high", "NUMERIC_FAULT", {
      operation: "toTwos",
      fault: "overflow",
      value: r
    });
    return t;
  }
  function ve(r, e) {
    const t = Se(r, "value"), n = BigInt(q(e, "bits"));
    return t & (F << n) - F;
  }
  function Q(r, e) {
    switch (typeof r) {
      case "bigint":
        return r;
      case "number":
        return l(Number.isInteger(r), "underflow", e || "value", r), l(r >= -be && r <= be, "overflow", e || "value", r), BigInt(r);
      case "string":
        try {
          if (r === "") throw new Error("empty string");
          return r[0] === "-" && r[1] !== "-" ? -BigInt(r.substring(1)) : BigInt(r);
        } catch (t) {
          l(false, `invalid BigNumberish string: ${t.message}`, e || "value", r);
        }
    }
    l(false, "invalid BigNumberish value", e || "value", r);
  }
  function Se(r, e) {
    const t = Q(r, e);
    return y(t >= xe, "unsigned value cannot be negative", "NUMERIC_FAULT", {
      fault: "overflow",
      operation: "getUint",
      value: r
    }), t;
  }
  const it = "0123456789abcdef";
  function Mt(r) {
    if (r instanceof Uint8Array) {
      let e = "0x0";
      for (const t of r) e += it[t >> 4], e += it[t & 15];
      return BigInt(e);
    }
    return Q(r);
  }
  function q(r, e) {
    switch (typeof r) {
      case "bigint":
        return l(r >= -be && r <= be, "overflow", e || "value", r), Number(r);
      case "number":
        return l(Number.isInteger(r), "underflow", e || "value", r), l(r >= -be && r <= be, "overflow", e || "value", r), r;
      case "string":
        try {
          if (r === "") throw new Error("empty string");
          return q(BigInt(r), e);
        } catch (t) {
          l(false, `invalid numeric string: ${t.message}`, e || "value", r);
        }
    }
    l(false, "invalid numeric value", e || "value", r);
  }
  function Dn(r) {
    return q(Mt(r));
  }
  function $t(r, e) {
    const t = Se(r, "value");
    let n = t.toString(16);
    if (e == null) n.length % 2 && (n = "0" + n);
    else {
      const s = q(e, "width");
      if (s === 0 && t === xe) return "0x";
      for (y(s * 2 >= n.length, `value exceeds width (${s} bytes)`, "NUMERIC_FAULT", {
        operation: "toBeHex",
        fault: "overflow",
        value: r
      }); n.length < s * 2; ) n = "0" + n;
    }
    return "0x" + n;
  }
  function Gn(r, e) {
    const t = Se(r, "value");
    if (t === xe) return new Uint8Array(0);
    let n = t.toString(16);
    n.length % 2 && (n = "0" + n);
    const s = new Uint8Array(n.length / 2);
    for (let i = 0; i < s.length; i++) {
      const a = i * 2;
      s[i] = parseInt(n.substring(a, a + 2), 16);
    }
    return s;
  }
  class Vn {
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
  function Hn(r, e, t, n, s) {
    l(false, `invalid codepoint at offset ${e}; ${r}`, "bytes", t);
  }
  function Dt(r, e, t, n, s) {
    if (r === "BAD_PREFIX" || r === "UNEXPECTED_CONTINUE") {
      let i = 0;
      for (let a = e + 1; a < t.length && t[a] >> 6 === 2; a++) i++;
      return i;
    }
    return r === "OVERRUN" ? t.length - e - 1 : 0;
  }
  function zn(r, e, t, n, s) {
    return r === "OVERLONG" ? (l(typeof s == "number", "invalid bad code point for replacement", "badCodepoint", s), n.push(s), 0) : (n.push(65533), Dt(r, e, t));
  }
  const Jn = Object.freeze({
    error: Hn,
    ignore: Dt,
    replace: zn
  });
  function Wn(r, e) {
    e == null && (e = Jn.error);
    const t = L(r, "bytes"), n = [];
    let s = 0;
    for (; s < t.length; ) {
      const i = t[s++];
      if (i >> 7 === 0) {
        n.push(i);
        continue;
      }
      let a = null, o = null;
      if ((i & 224) === 192) a = 1, o = 127;
      else if ((i & 240) === 224) a = 2, o = 2047;
      else if ((i & 248) === 240) a = 3, o = 65535;
      else {
        (i & 192) === 128 ? s += e("UNEXPECTED_CONTINUE", s - 1, t, n) : s += e("BAD_PREFIX", s - 1, t, n);
        continue;
      }
      if (s - 1 + a >= t.length) {
        s += e("OVERRUN", s - 1, t, n);
        continue;
      }
      let c = i & (1 << 8 - a - 1) - 1;
      for (let f = 0; f < a; f++) {
        let u = t[s];
        if ((u & 192) != 128) {
          s += e("MISSING_CONTINUE", s, t, n), c = null;
          break;
        }
        c = c << 6 | u & 63, s++;
      }
      if (c !== null) {
        if (c > 1114111) {
          s += e("OUT_OF_RANGE", s - 1 - a, t, n, c);
          continue;
        }
        if (c >= 55296 && c <= 57343) {
          s += e("UTF16_SURROGATE", s - 1 - a, t, n, c);
          continue;
        }
        if (c <= o) {
          s += e("OVERLONG", s - 1 - a, t, n, c);
          continue;
        }
        n.push(c);
      }
    }
    return n;
  }
  function Gt(r, e) {
    l(typeof r == "string", "invalid string value", "str", r);
    let t = [];
    for (let n = 0; n < r.length; n++) {
      const s = r.charCodeAt(n);
      if (s < 128) t.push(s);
      else if (s < 2048) t.push(s >> 6 | 192), t.push(s & 63 | 128);
      else if ((s & 64512) == 55296) {
        n++;
        const i = r.charCodeAt(n);
        l(n < r.length && (i & 64512) === 56320, "invalid surrogate pair", "str", r);
        const a = 65536 + ((s & 1023) << 10) + (i & 1023);
        t.push(a >> 18 | 240), t.push(a >> 12 & 63 | 128), t.push(a >> 6 & 63 | 128), t.push(a & 63 | 128);
      } else t.push(s >> 12 | 224), t.push(s >> 6 & 63 | 128), t.push(s & 63 | 128);
    }
    return new Uint8Array(t);
  }
  function Kn(r) {
    return r.map((e) => e <= 65535 ? String.fromCharCode(e) : (e -= 65536, String.fromCharCode((e >> 10 & 1023) + 55296, (e & 1023) + 56320))).join("");
  }
  function Xn(r, e) {
    return Kn(Wn(r, e));
  }
  function at(r) {
    const e = [];
    for (; r; ) e.unshift(r & 255), r >>= 8;
    return e;
  }
  function Vt(r) {
    if (Array.isArray(r)) {
      let n = [];
      if (r.forEach(function(i) {
        n = n.concat(Vt(i));
      }), n.length <= 55) return n.unshift(192 + n.length), n;
      const s = at(n.length);
      return s.unshift(247 + s.length), s.concat(n);
    }
    const e = Array.prototype.slice.call(L(r, "object"));
    if (e.length === 1 && e[0] <= 127) return e;
    if (e.length <= 55) return e.unshift(128 + e.length), e;
    const t = at(e.length);
    return t.unshift(183 + t.length), t.concat(e);
  }
  const ot = "0123456789abcdef";
  function Yn(r) {
    let e = "0x";
    for (const t of Vt(r)) e += ot[t >> 4], e += ot[t & 15];
    return e;
  }
  const k = 32, De = new Uint8Array(k), Zn = [
    "then"
  ], Oe = {}, Ht = /* @__PURE__ */ new WeakMap();
  function re(r) {
    return Ht.get(r);
  }
  function ct(r, e) {
    Ht.set(r, e);
  }
  function pe(r, e) {
    const t = new Error(`deferred error during ABI decoding triggered accessing ${r}`);
    throw t.error = e, t;
  }
  function Ge(r, e, t) {
    return r.indexOf(null) >= 0 ? e.map((n, s) => n instanceof J ? Ge(re(n), n, t) : n) : r.reduce((n, s, i) => {
      let a = e.getValue(s);
      return s in n || (t && a instanceof J && (a = Ge(re(a), a, t)), n[s] = a), n;
    }, {});
  }
  const _J = class _J extends Array {
    constructor(...e) {
      const t = e[0];
      let n = e[1], s = (e[2] || []).slice(), i = true;
      t !== Oe && (n = e, s = [], i = false);
      super(n.length);
      __privateAdd(this, _e3);
      n.forEach((c, f) => {
        this[f] = c;
      });
      const a = s.reduce((c, f) => (typeof f == "string" && c.set(f, (c.get(f) || 0) + 1), c), /* @__PURE__ */ new Map());
      if (ct(this, Object.freeze(n.map((c, f) => {
        const u = s[f];
        return u != null && a.get(u) === 1 ? u : null;
      }))), __privateSet(this, _e3, []), __privateGet(this, _e3) == null && __privateGet(this, _e3), !i) return;
      Object.freeze(this);
      const o = new Proxy(this, {
        get: (c, f, u) => {
          if (typeof f == "string") {
            if (f.match(/^[0-9]+$/)) {
              const d = q(f, "%index");
              if (d < 0 || d >= this.length) throw new RangeError("out of result range");
              const h = c[d];
              return h instanceof Error && pe(`index ${d}`, h), h;
            }
            if (Zn.indexOf(f) >= 0) return Reflect.get(c, f, u);
            const b = c[f];
            if (b instanceof Function) return function(...d) {
              return b.apply(this === u ? c : this, d);
            };
            if (!(f in c)) return c.getValue.apply(this === u ? c : this, [
              f
            ]);
          }
          return Reflect.get(c, f, u);
        }
      });
      return ct(o, re(this)), o;
    }
    toArray(e) {
      const t = [];
      return this.forEach((n, s) => {
        n instanceof Error && pe(`index ${s}`, n), e && n instanceof _J && (n = n.toArray(e)), t.push(n);
      }), t;
    }
    toObject(e) {
      const t = re(this);
      return t.reduce((n, s, i) => (y(s != null, `value at index ${i} unnamed`, "UNSUPPORTED_OPERATION", {
        operation: "toObject()"
      }), Ge(t, this, e)), {});
    }
    slice(e, t) {
      e == null && (e = 0), e < 0 && (e += this.length, e < 0 && (e = 0)), t == null && (t = this.length), t < 0 && (t += this.length, t < 0 && (t = 0)), t > this.length && (t = this.length);
      const n = re(this), s = [], i = [];
      for (let a = e; a < t; a++) s.push(this[a]), i.push(n[a]);
      return new _J(Oe, s, i);
    }
    filter(e, t) {
      const n = re(this), s = [], i = [];
      for (let a = 0; a < this.length; a++) {
        const o = this[a];
        o instanceof Error && pe(`index ${a}`, o), e.call(t, o, a, this) && (s.push(o), i.push(n[a]));
      }
      return new _J(Oe, s, i);
    }
    map(e, t) {
      const n = [];
      for (let s = 0; s < this.length; s++) {
        const i = this[s];
        i instanceof Error && pe(`index ${s}`, i), n.push(e.call(t, i, s, this));
      }
      return n;
    }
    getValue(e) {
      const t = re(this).indexOf(e);
      if (t === -1) return;
      const n = this[t];
      return n instanceof Error && pe(`property ${JSON.stringify(e)}`, n.error), n;
    }
    static fromItems(e, t) {
      return new _J(Oe, e, t);
    }
  };
  _e3 = new WeakMap();
  let J = _J;
  function ft(r) {
    let e = Gn(r);
    return y(e.length <= k, "value out-of-bounds", "BUFFER_OVERRUN", {
      buffer: e,
      length: k,
      offset: e.length
    }), e.length !== k && (e = D(ie([
      De.slice(e.length % k),
      e
    ]))), e;
  }
  class j {
    constructor(e, t, n, s) {
      __publicField(this, "name");
      __publicField(this, "type");
      __publicField(this, "localName");
      __publicField(this, "dynamic");
      m(this, {
        name: e,
        type: t,
        localName: n,
        dynamic: s
      }, {
        name: "string",
        type: "string",
        localName: "string",
        dynamic: "boolean"
      });
    }
    _throwError(e, t) {
      l(false, e, this.localName, t);
    }
  }
  class Ve {
    constructor() {
      __privateAdd(this, _Ve_instances);
      __privateAdd(this, _e4);
      __privateAdd(this, _t2);
      __privateSet(this, _e4, []), __privateSet(this, _t2, 0);
    }
    get data() {
      return ie(__privateGet(this, _e4));
    }
    get length() {
      return __privateGet(this, _t2);
    }
    appendWriter(e) {
      return __privateMethod(this, _Ve_instances, n_fn).call(this, D(e.data));
    }
    writeBytes(e) {
      let t = D(e);
      const n = t.length % k;
      return n && (t = D(ie([
        t,
        De.slice(n)
      ]))), __privateMethod(this, _Ve_instances, n_fn).call(this, t);
    }
    writeValue(e) {
      return __privateMethod(this, _Ve_instances, n_fn).call(this, ft(e));
    }
    writeUpdatableValue() {
      const e = __privateGet(this, _e4).length;
      return __privateGet(this, _e4).push(De), __privateSet(this, _t2, __privateGet(this, _t2) + k), (t) => {
        __privateGet(this, _e4)[e] = ft(t);
      };
    }
  }
  _e4 = new WeakMap();
  _t2 = new WeakMap();
  _Ve_instances = new WeakSet();
  n_fn = function(e) {
    return __privateGet(this, _e4).push(e), __privateSet(this, _t2, __privateGet(this, _t2) + e.length), e.length;
  };
  const _Xe = class _Xe {
    constructor(e, t, n) {
      __privateAdd(this, _Xe_instances);
      __publicField(this, "allowLoose");
      __privateAdd(this, _e5);
      __privateAdd(this, _t3);
      __privateAdd(this, _n2);
      __privateAdd(this, _r);
      __privateAdd(this, _s);
      m(this, {
        allowLoose: !!t
      }), __privateSet(this, _e5, D(e)), __privateSet(this, _n2, 0), __privateSet(this, _r, null), __privateSet(this, _s, n ?? 1024), __privateSet(this, _t3, 0);
    }
    get data() {
      return O(__privateGet(this, _e5));
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
      const t = new _Xe(__privateGet(this, _e5).slice(__privateGet(this, _t3) + e), this.allowLoose, __privateGet(this, _s));
      return __privateSet(t, _r, this), t;
    }
    readBytes(e, t) {
      let n = __privateMethod(this, _Xe_instances, a_fn).call(this, 0, e, !!t);
      return __privateMethod(this, _Xe_instances, i_fn).call(this, e), __privateSet(this, _t3, __privateGet(this, _t3) + n.length), n.slice(0, e);
    }
    readValue() {
      return Mt(this.readBytes(k));
    }
    readIndex() {
      return Dn(this.readBytes(k));
    }
  };
  _e5 = new WeakMap();
  _t3 = new WeakMap();
  _n2 = new WeakMap();
  _r = new WeakMap();
  _s = new WeakMap();
  _Xe_instances = new WeakSet();
  i_fn = function(e) {
    var _a2;
    if (__privateGet(this, _r)) return __privateMethod(_a2 = __privateGet(this, _r), _Xe_instances, i_fn).call(_a2, e);
    __privateSet(this, _n2, __privateGet(this, _n2) + e), y(__privateGet(this, _s) < 1 || __privateGet(this, _n2) <= __privateGet(this, _s) * this.dataLength, `compressed ABI data exceeds inflation ratio of ${__privateGet(this, _s)} ( see: https://github.com/ethers-io/ethers.js/issues/4537 )`, "BUFFER_OVERRUN", {
      buffer: D(__privateGet(this, _e5)),
      offset: __privateGet(this, _t3),
      length: e,
      info: {
        bytesRead: __privateGet(this, _n2),
        dataLength: this.dataLength
      }
    });
  };
  a_fn = function(e, t, n) {
    let s = Math.ceil(t / k) * k;
    return __privateGet(this, _t3) + s > __privateGet(this, _e5).length && (this.allowLoose && n && __privateGet(this, _t3) + t <= __privateGet(this, _e5).length ? s = t : y(false, "data out-of-bounds", "BUFFER_OVERRUN", {
      buffer: D(__privateGet(this, _e5)),
      length: __privateGet(this, _e5).length,
      offset: __privateGet(this, _t3) + s
    })), __privateGet(this, _e5).slice(__privateGet(this, _t3), __privateGet(this, _t3) + s);
  };
  let Xe = _Xe;
  function ut(r) {
    if (!Number.isSafeInteger(r) || r < 0) throw new Error(`Wrong positive integer: ${r}`);
  }
  function zt(r, ...e) {
    if (!(r instanceof Uint8Array)) throw new Error("Expected Uint8Array");
    if (e.length > 0 && !e.includes(r.length)) throw new Error(`Expected Uint8Array of length ${e}, not of length=${r.length}`);
  }
  function lt(r, e = true) {
    if (r.destroyed) throw new Error("Hash instance has been destroyed");
    if (e && r.finished) throw new Error("Hash#digest() has already been called");
  }
  function Qn(r, e) {
    zt(r);
    const t = e.outputLen;
    if (r.length < t) throw new Error(`digestInto() expects output buffer of length at least ${t}`);
  }
  const qn = (r) => r instanceof Uint8Array, jn = (r) => new Uint32Array(r.buffer, r.byteOffset, Math.floor(r.byteLength / 4)), e0 = new Uint8Array(new Uint32Array([
    287454020
  ]).buffer)[0] === 68;
  if (!e0) throw new Error("Non little-endian hardware is not supported");
  function t0(r) {
    if (typeof r != "string") throw new Error(`utf8ToBytes expected string, got ${typeof r}`);
    return new Uint8Array(new TextEncoder().encode(r));
  }
  function Jt(r) {
    if (typeof r == "string" && (r = t0(r)), !qn(r)) throw new Error(`expected Uint8Array, got ${typeof r}`);
    return r;
  }
  class n0 {
    clone() {
      return this._cloneInto();
    }
  }
  function r0(r) {
    const e = (n) => r().update(Jt(n)).digest(), t = r();
    return e.outputLen = t.outputLen, e.blockLen = t.blockLen, e.create = () => r(), e;
  }
  const Ae = BigInt(2 ** 32 - 1), bt = BigInt(32);
  function s0(r, e = false) {
    return e ? {
      h: Number(r & Ae),
      l: Number(r >> bt & Ae)
    } : {
      h: Number(r >> bt & Ae) | 0,
      l: Number(r & Ae) | 0
    };
  }
  function i0(r, e = false) {
    let t = new Uint32Array(r.length), n = new Uint32Array(r.length);
    for (let s = 0; s < r.length; s++) {
      const { h: i, l: a } = s0(r[s], e);
      [t[s], n[s]] = [
        i,
        a
      ];
    }
    return [
      t,
      n
    ];
  }
  const a0 = (r, e, t) => r << t | e >>> 32 - t, o0 = (r, e, t) => e << t | r >>> 32 - t, c0 = (r, e, t) => e << t - 32 | r >>> 64 - t, f0 = (r, e, t) => r << t - 32 | e >>> 64 - t, [Wt, Kt, Xt] = [
    [],
    [],
    []
  ], u0 = BigInt(0), he = BigInt(1), l0 = BigInt(2), b0 = BigInt(7), d0 = BigInt(256), p0 = BigInt(113);
  for (let r = 0, e = he, t = 1, n = 0; r < 24; r++) {
    [t, n] = [
      n,
      (2 * t + 3 * n) % 5
    ], Wt.push(2 * (5 * n + t)), Kt.push((r + 1) * (r + 2) / 2 % 64);
    let s = u0;
    for (let i = 0; i < 7; i++) e = (e << he ^ (e >> b0) * p0) % d0, e & l0 && (s ^= he << (he << BigInt(i)) - he);
    Xt.push(s);
  }
  const [h0, y0] = i0(Xt, true), dt = (r, e, t) => t > 32 ? c0(r, e, t) : a0(r, e, t), pt = (r, e, t) => t > 32 ? f0(r, e, t) : o0(r, e, t);
  function m0(r, e = 24) {
    const t = new Uint32Array(10);
    for (let n = 24 - e; n < 24; n++) {
      for (let a = 0; a < 10; a++) t[a] = r[a] ^ r[a + 10] ^ r[a + 20] ^ r[a + 30] ^ r[a + 40];
      for (let a = 0; a < 10; a += 2) {
        const o = (a + 8) % 10, c = (a + 2) % 10, f = t[c], u = t[c + 1], b = dt(f, u, 1) ^ t[o], d = pt(f, u, 1) ^ t[o + 1];
        for (let h = 0; h < 50; h += 10) r[a + h] ^= b, r[a + h + 1] ^= d;
      }
      let s = r[2], i = r[3];
      for (let a = 0; a < 24; a++) {
        const o = Kt[a], c = dt(s, i, o), f = pt(s, i, o), u = Wt[a];
        s = r[u], i = r[u + 1], r[u] = c, r[u + 1] = f;
      }
      for (let a = 0; a < 50; a += 10) {
        for (let o = 0; o < 10; o++) t[o] = r[a + o];
        for (let o = 0; o < 10; o++) r[a + o] ^= ~t[(o + 2) % 10] & t[(o + 4) % 10];
      }
      r[0] ^= h0[n], r[1] ^= y0[n];
    }
    t.fill(0);
  }
  class Ye extends n0 {
    constructor(e, t, n, s = false, i = 24) {
      if (super(), this.blockLen = e, this.suffix = t, this.outputLen = n, this.enableXOF = s, this.rounds = i, this.pos = 0, this.posOut = 0, this.finished = false, this.destroyed = false, ut(n), 0 >= this.blockLen || this.blockLen >= 200) throw new Error("Sha3 supports only keccak-f1600 function");
      this.state = new Uint8Array(200), this.state32 = jn(this.state);
    }
    keccak() {
      m0(this.state32, this.rounds), this.posOut = 0, this.pos = 0;
    }
    update(e) {
      lt(this);
      const { blockLen: t, state: n } = this;
      e = Jt(e);
      const s = e.length;
      for (let i = 0; i < s; ) {
        const a = Math.min(t - this.pos, s - i);
        for (let o = 0; o < a; o++) n[this.pos++] ^= e[i++];
        this.pos === t && this.keccak();
      }
      return this;
    }
    finish() {
      if (this.finished) return;
      this.finished = true;
      const { state: e, suffix: t, pos: n, blockLen: s } = this;
      e[n] ^= t, (t & 128) !== 0 && n === s - 1 && this.keccak(), e[s - 1] ^= 128, this.keccak();
    }
    writeInto(e) {
      lt(this, false), zt(e), this.finish();
      const t = this.state, { blockLen: n } = this;
      for (let s = 0, i = e.length; s < i; ) {
        this.posOut >= n && this.keccak();
        const a = Math.min(n - this.posOut, i - s);
        e.set(t.subarray(this.posOut, this.posOut + a), s), this.posOut += a, s += a;
      }
      return e;
    }
    xofInto(e) {
      if (!this.enableXOF) throw new Error("XOF is not possible for this instance");
      return this.writeInto(e);
    }
    xof(e) {
      return ut(e), this.xofInto(new Uint8Array(e));
    }
    digestInto(e) {
      if (Qn(e, this), this.finished) throw new Error("digest() was already called");
      return this.writeInto(e), this.destroy(), e;
    }
    digest() {
      return this.digestInto(new Uint8Array(this.outputLen));
    }
    destroy() {
      this.destroyed = true, this.state.fill(0);
    }
    _cloneInto(e) {
      const { blockLen: t, suffix: n, outputLen: s, rounds: i, enableXOF: a } = this;
      return e || (e = new Ye(t, n, s, a, i)), e.state32.set(this.state32), e.pos = this.pos, e.posOut = this.posOut, e.finished = this.finished, e.rounds = i, e.suffix = n, e.outputLen = s, e.enableXOF = a, e.destroyed = this.destroyed, e;
    }
  }
  const g0 = (r, e, t) => r0(() => new Ye(e, r, t)), w0 = g0(1, 136, 256 / 8);
  let Yt = false;
  const Zt = function(r) {
    return w0(r);
  };
  let Qt = Zt;
  function X(r) {
    const e = L(r, "data");
    return O(Qt(e));
  }
  X._ = Zt;
  X.lock = function() {
    Yt = true;
  };
  X.register = function(r) {
    if (Yt) throw new TypeError("keccak256 is locked");
    Qt = r;
  };
  Object.freeze(X);
  const T0 = BigInt(0), E0 = BigInt(36);
  function ht(r) {
    r = r.toLowerCase();
    const e = r.substring(2).split(""), t = new Uint8Array(40);
    for (let s = 0; s < 40; s++) t[s] = e[s].charCodeAt(0);
    const n = L(X(t));
    for (let s = 0; s < 40; s += 2) n[s >> 1] >> 4 >= 8 && (e[s] = e[s].toUpperCase()), (n[s >> 1] & 15) >= 8 && (e[s + 1] = e[s + 1].toUpperCase());
    return "0x" + e.join("");
  }
  const Ze = {};
  for (let r = 0; r < 10; r++) Ze[String(r)] = String(r);
  for (let r = 0; r < 26; r++) Ze[String.fromCharCode(65 + r)] = String(10 + r);
  const yt = 15;
  function x0(r) {
    r = r.toUpperCase(), r = r.substring(4) + r.substring(0, 2) + "00";
    let e = r.split("").map((n) => Ze[n]).join("");
    for (; e.length >= yt; ) {
      let n = e.substring(0, yt);
      e = parseInt(n, 10) % 97 + e.substring(n.length);
    }
    let t = String(98 - parseInt(e, 10) % 97);
    for (; t.length < 2; ) t = "0" + t;
    return t;
  }
  const N0 = (function() {
    const r = {};
    for (let e = 0; e < 36; e++) {
      const t = "0123456789abcdefghijklmnopqrstuvwxyz"[e];
      r[t] = BigInt(e);
    }
    return r;
  })();
  function v0(r) {
    r = r.toLowerCase();
    let e = T0;
    for (let t = 0; t < r.length; t++) e = e * E0 + N0[r[t]];
    return e;
  }
  function Y(r) {
    if (l(typeof r == "string", "invalid address", "address", r), r.match(/^(0x)?[0-9a-fA-F]{40}$/)) {
      r.startsWith("0x") || (r = "0x" + r);
      const e = ht(r);
      return l(!r.match(/([A-F].*[a-f])|([a-f].*[A-F])/) || e === r, "bad address checksum", "address", r), e;
    }
    if (r.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
      l(r.substring(2, 4) === x0(r), "bad icap checksum", "address", r);
      let e = v0(r.substring(4)).toString(16);
      for (; e.length < 40; ) e = "0" + e;
      return ht("0x" + e);
    }
    l(false, "invalid address", "address", r);
  }
  function O0(r) {
    const e = Y(r.from);
    let n = Q(r.nonce, "tx.nonce").toString(16);
    return n === "0" ? n = "0x" : n.length % 2 ? n = "0x0" + n : n = "0x" + n, Y(ne(X(Yn([
      e,
      n
    ])), 12));
  }
  function qt(r) {
    return r && typeof r.getAddress == "function";
  }
  async function Fe(r, e) {
    const t = await e;
    return (t == null || t === "0x0000000000000000000000000000000000000000") && (y(typeof r != "string", "unconfigured name", "UNCONFIGURED_NAME", {
      value: r
    }), l(false, "invalid AddressLike value; did not resolve to a value address", "target", r)), Y(t);
  }
  function ge(r, e) {
    if (typeof r == "string") return r.match(/^0x[0-9a-f]{40}$/i) ? Y(r) : (y(e != null, "ENS resolution requires a provider", "UNSUPPORTED_OPERATION", {
      operation: "resolveName"
    }), Fe(r, e.resolveName(r)));
    if (qt(r)) return Fe(r, r.getAddress());
    if (r && typeof r.then == "function") return Fe(r, r);
    l(false, "unsupported addressable value", "target", r);
  }
  const G = {};
  function p(r, e) {
    let t = false;
    return e < 0 && (t = true, e *= -1), new v(G, `${t ? "" : "u"}int${e}`, r, {
      signed: t,
      width: e
    });
  }
  function g(r, e) {
    return new v(G, `bytes${e || ""}`, r, {
      size: e
    });
  }
  const mt = Symbol.for("_ethers_typed");
  const _v = class _v {
    constructor(e, t, n, s) {
      __publicField(this, "type");
      __publicField(this, "value");
      __privateAdd(this, _e6);
      __publicField(this, "_typedSymbol");
      s == null && (s = null), Ke(G, e, "Typed"), m(this, {
        _typedSymbol: mt,
        type: t,
        value: n
      }), __privateSet(this, _e6, s), this.format();
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
      return e && typeof e == "object" && "_typedSymbol" in e && e._typedSymbol === mt;
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
  class A0 extends j {
    constructor(e) {
      super("address", "address", e, false);
    }
    defaultValue() {
      return "0x0000000000000000000000000000000000000000";
    }
    encode(e, t) {
      let n = v.dereference(t, "string");
      try {
        n = Y(n);
      } catch (s) {
        return this._throwError(s.message, t);
      }
      return e.writeValue(n);
    }
    decode(e) {
      return Y($t(e.readValue(), 20));
    }
  }
  class k0 extends j {
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
  function jt(r, e, t) {
    let n = [];
    if (Array.isArray(t)) n = t;
    else if (t && typeof t == "object") {
      let c = {};
      n = e.map((f) => {
        const u = f.localName;
        return y(u, "cannot encode object for signature with missing names", "INVALID_ARGUMENT", {
          argument: "values",
          info: {
            coder: f
          },
          value: t
        }), y(!c[u], "cannot encode object for signature with duplicate names", "INVALID_ARGUMENT", {
          argument: "values",
          info: {
            coder: f
          },
          value: t
        }), c[u] = true, t[u];
      });
    } else l(false, "invalid tuple value", "tuple", t);
    l(e.length === n.length, "types/value length mismatch", "tuple", t);
    let s = new Ve(), i = new Ve(), a = [];
    e.forEach((c, f) => {
      let u = n[f];
      if (c.dynamic) {
        let b = i.length;
        c.encode(i, u);
        let d = s.writeUpdatableValue();
        a.push((h) => {
          d(h + b);
        });
      } else c.encode(s, u);
    }), a.forEach((c) => {
      c(s.length);
    });
    let o = r.appendWriter(s);
    return o += r.appendWriter(i), o;
  }
  function en(r, e) {
    let t = [], n = [], s = r.subReader(0);
    return e.forEach((i) => {
      let a = null;
      if (i.dynamic) {
        let o = r.readIndex(), c = s.subReader(o);
        try {
          a = i.decode(c);
        } catch (f) {
          if (de(f, "BUFFER_OVERRUN")) throw f;
          a = f, a.baseType = i.name, a.name = i.localName, a.type = i.type;
        }
      } else try {
        a = i.decode(r);
      } catch (o) {
        if (de(o, "BUFFER_OVERRUN")) throw o;
        a = o, a.baseType = i.name, a.name = i.localName, a.type = i.type;
      }
      if (a == null) throw new Error("investigate");
      t.push(a), n.push(i.localName || null);
    }), J.fromItems(t, n);
  }
  class I0 extends j {
    constructor(e, t, n) {
      const s = e.type + "[" + (t >= 0 ? t : "") + "]", i = t === -1 || e.dynamic;
      super("array", s, n, i);
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
      let s = this.length;
      s === -1 && (s = n.length, e.writeValue(n.length)), Bt(n.length, s, "coder array" + (this.localName ? " " + this.localName : ""));
      let i = [];
      for (let a = 0; a < n.length; a++) i.push(this.coder);
      return jt(e, i, n);
    }
    decode(e) {
      let t = this.length;
      t === -1 && (t = e.readIndex(), y(t * k <= e.dataLength, "insufficient data length", "BUFFER_OVERRUN", {
        buffer: e.bytes,
        offset: t * k,
        length: e.dataLength
      }));
      let n = [];
      for (let s = 0; s < t; s++) n.push(new k0(this.coder));
      return en(e, n);
    }
  }
  class R0 extends j {
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
  class tn extends j {
    constructor(e, t) {
      super(e, e, t, true);
    }
    defaultValue() {
      return "0x";
    }
    encode(e, t) {
      t = D(t);
      let n = e.writeValue(t.length);
      return n += e.writeBytes(t), n;
    }
    decode(e) {
      return e.readBytes(e.readIndex(), true);
    }
  }
  class P0 extends tn {
    constructor(e) {
      super("bytes", e);
    }
    decode(e) {
      return O(super.decode(e));
    }
  }
  class S0 extends j {
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
      let n = D(v.dereference(t, this.type));
      return n.length !== this.size && this._throwError("incorrect data length", t), e.writeBytes(n);
    }
    decode(e) {
      return O(e.readBytes(this.size));
    }
  }
  const U0 = new Uint8Array([]);
  class C0 extends j {
    constructor(e) {
      super("null", "", e, false);
    }
    defaultValue() {
      return null;
    }
    encode(e, t) {
      return t != null && this._throwError("not null", t), e.writeBytes(U0);
    }
    decode(e) {
      return e.readBytes(0), null;
    }
  }
  const L0 = BigInt(0), B0 = BigInt(1), F0 = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
  class _0 extends j {
    constructor(e, t, n) {
      const s = (t ? "int" : "uint") + e * 8;
      super(s, s, n, false);
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
      let n = Q(v.dereference(t, this.type)), s = ve(F0, k * 8);
      if (this.signed) {
        let i = ve(s, this.size * 8 - 1);
        (n > i || n < -(i + B0)) && this._throwError("value out-of-bounds", t), n = $n(n, 8 * k);
      } else (n < L0 || n > ve(s, this.size * 8)) && this._throwError("value out-of-bounds", t);
      return e.writeValue(n);
    }
    decode(e) {
      let t = ve(e.readValue(), this.size * 8);
      return this.signed && (t = Mn(t, this.size * 8)), t;
    }
  }
  class M0 extends tn {
    constructor(e) {
      super("string", e);
    }
    defaultValue() {
      return "";
    }
    encode(e, t) {
      return super.encode(e, Gt(v.dereference(t, "string")));
    }
    decode(e) {
      return Xn(super.decode(e));
    }
  }
  class ke extends j {
    constructor(e, t) {
      let n = false;
      const s = [];
      e.forEach((a) => {
        a.dynamic && (n = true), s.push(a.type);
      });
      const i = "tuple(" + s.join(",") + ")";
      super("tuple", i, t, n);
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
      const t = this.coders.reduce((n, s) => {
        const i = s.localName;
        return i && (n[i] || (n[i] = 0), n[i]++), n;
      }, {});
      return this.coders.forEach((n, s) => {
        let i = n.localName;
        !i || t[i] !== 1 || (i === "length" && (i = "_length"), e[i] == null && (e[i] = e[s]));
      }), Object.freeze(e);
    }
    encode(e, t) {
      const n = v.dereference(t, "tuple");
      return jt(e, this.coders, n);
    }
    decode(e) {
      return en(e, this.coders);
    }
  }
  function _e(r, e) {
    return {
      address: Y(r),
      storageKeys: e.map((t, n) => (l(z(t, 32), "invalid slot", `storageKeys[${n}]`, t), t.toLowerCase()))
    };
  }
  function $0(r) {
    if (Array.isArray(r)) return r.map((t, n) => Array.isArray(t) ? (l(t.length === 2, "invalid slot set", `value[${n}]`, t), _e(t[0], t[1])) : (l(t != null && typeof t == "object", "invalid address-slot set", "value", r), _e(t.address, t.storageKeys)));
    l(r != null && typeof r == "object", "invalid access list", "value", r);
    const e = Object.keys(r).map((t) => {
      const n = r[t].reduce((s, i) => (s[i] = true, s), {});
      return _e(t, Object.keys(n).sort());
    });
    return e.sort((t, n) => t.address.localeCompare(n.address)), e;
  }
  function we(r) {
    return X(Gt(r));
  }
  function I(r) {
    const e = /* @__PURE__ */ new Set();
    return r.forEach((t) => e.add(t)), Object.freeze(e);
  }
  const D0 = "external public payable override", G0 = I(D0.split(" ")), nn = "constant external internal payable private public pure view override", V0 = I(nn.split(" ")), rn = "constructor error event fallback function receive struct", sn = I(rn.split(" ")), an = "calldata memory storage payable indexed", H0 = I(an.split(" ")), z0 = "tuple returns", J0 = [
    rn,
    an,
    z0,
    nn
  ].join(" "), W0 = I(J0.split(" ")), K0 = {
    "(": "OPEN_PAREN",
    ")": "CLOSE_PAREN",
    "[": "OPEN_BRACKET",
    "]": "CLOSE_BRACKET",
    ",": "COMMA",
    "@": "AT"
  }, X0 = new RegExp("^(\\s*)"), Y0 = new RegExp("^([0-9]+)"), Z0 = new RegExp("^([a-zA-Z$_][a-zA-Z0-9$_]*)"), on = new RegExp("^([a-zA-Z$_][a-zA-Z0-9$_]*)$"), cn = new RegExp("^(address|bool|bytes([0-9]*)|string|u?int([0-9]*))$");
  const _B = class _B {
    constructor(e) {
      __privateAdd(this, _B_instances);
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
      return new _B(__privateGet(this, _t4));
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
      const t = __privateMethod(this, _B_instances, n_fn2).call(this, __privateGet(this, _e7) + 1, e.match + 1);
      return __privateSet(this, _e7, e.match + 1), t;
    }
    popParams() {
      const e = this.peek();
      if (e.type !== "OPEN_PAREN") throw new Error("bad start");
      const t = [];
      for (; __privateGet(this, _e7) < e.match - 1; ) {
        const n = this.peek().linkNext;
        t.push(__privateMethod(this, _B_instances, n_fn2).call(this, __privateGet(this, _e7) + 1, n)), __privateSet(this, _e7, n);
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
  _B_instances = new WeakSet();
  n_fn2 = function(e = 0, t = 0) {
    return new _B(__privateGet(this, _t4).slice(e, t).map((n) => Object.freeze(Object.assign({}, n, {
      match: n.match - e,
      linkBack: n.linkBack - e,
      linkNext: n.linkNext - e
    }))));
  };
  let B = _B;
  function ee(r) {
    const e = [], t = (a) => {
      const o = i < r.length ? JSON.stringify(r[i]) : "$EOI";
      throw new Error(`invalid token ${o} at ${i}: ${a}`);
    };
    let n = [], s = [], i = 0;
    for (; i < r.length; ) {
      let a = r.substring(i), o = a.match(X0);
      o && (i += o[1].length, a = r.substring(i));
      const c = {
        depth: n.length,
        linkBack: -1,
        linkNext: -1,
        match: -1,
        type: "",
        text: "",
        offset: i,
        value: -1
      };
      e.push(c);
      let f = K0[a[0]] || "";
      if (f) {
        if (c.type = f, c.text = a[0], i++, f === "OPEN_PAREN") n.push(e.length - 1), s.push(e.length - 1);
        else if (f == "CLOSE_PAREN") n.length === 0 && t("no matching open bracket"), c.match = n.pop(), e[c.match].match = e.length - 1, c.depth--, c.linkBack = s.pop(), e[c.linkBack].linkNext = e.length - 1;
        else if (f === "COMMA") c.linkBack = s.pop(), e[c.linkBack].linkNext = e.length - 1, s.push(e.length - 1);
        else if (f === "OPEN_BRACKET") c.type = "BRACKET";
        else if (f === "CLOSE_BRACKET") {
          let u = e.pop().text;
          if (e.length > 0 && e[e.length - 1].type === "NUMBER") {
            const b = e.pop().text;
            u = b + u, e[e.length - 1].value = q(b);
          }
          if (e.length === 0 || e[e.length - 1].type !== "BRACKET") throw new Error("missing opening bracket");
          e[e.length - 1].text += u;
        }
        continue;
      }
      if (o = a.match(Z0), o) {
        if (c.text = o[1], i += c.text.length, W0.has(c.text)) {
          c.type = "KEYWORD";
          continue;
        }
        if (c.text.match(cn)) {
          c.type = "TYPE";
          continue;
        }
        c.type = "ID";
        continue;
      }
      if (o = a.match(Y0), o) {
        c.text = o[1], c.type = "NUMBER", i += c.text.length;
        continue;
      }
      throw new Error(`unexpected token ${JSON.stringify(a[0])} at position ${i}`);
    }
    return new B(e.map((a) => Object.freeze(a)));
  }
  function gt(r, e) {
    let t = [];
    for (const n in e.keys()) r.has(n) && t.push(n);
    if (t.length > 1) throw new Error(`conflicting types: ${t.join(", ")}`);
  }
  function Ue(r, e) {
    if (e.peekKeyword(sn)) {
      const t = e.pop().text;
      if (t !== r) throw new Error(`expected ${r}, got ${t}`);
    }
    return e.popType("ID");
  }
  function Z(r, e) {
    const t = /* @__PURE__ */ new Set();
    for (; ; ) {
      const n = r.peekType("KEYWORD");
      if (n == null || e && !e.has(n)) break;
      if (r.pop(), t.has(n)) throw new Error(`duplicate keywords: ${JSON.stringify(n)}`);
      t.add(n);
    }
    return Object.freeze(t);
  }
  function fn(r) {
    let e = Z(r, V0);
    return gt(e, I("constant payable nonpayable".split(" "))), gt(e, I("pure view payable nonpayable".split(" "))), e.has("view") ? "view" : e.has("pure") ? "pure" : e.has("payable") ? "payable" : e.has("nonpayable") ? "nonpayable" : e.has("constant") ? "view" : "nonpayable";
  }
  function K(r, e) {
    return r.popParams().map((t) => E.from(t, e));
  }
  function un(r) {
    if (r.peekType("AT")) {
      if (r.pop(), r.peekType("NUMBER")) return Q(r.pop().text);
      throw new Error("invalid gas");
    }
    return null;
  }
  function ce(r) {
    if (r.length) throw new Error(`unexpected tokens at offset ${r.offset}: ${r.toString()}`);
  }
  const Q0 = new RegExp(/^(.*)\[([0-9]*)\]$/);
  function wt(r) {
    const e = r.match(cn);
    if (l(e, "invalid type", "type", r), r === "uint") return "uint256";
    if (r === "int") return "int256";
    if (e[2]) {
      const t = parseInt(e[2]);
      l(t !== 0 && t <= 32, "invalid bytes length", "type", r);
    } else if (e[3]) {
      const t = parseInt(e[3]);
      l(t !== 0 && t <= 256 && t % 8 === 0, "invalid numeric width", "type", r);
    }
    return r;
  }
  const N = {}, P = Symbol.for("_ethers_internal"), Tt = "_ParamTypeInternal", Et = "_ErrorInternal", xt = "_EventInternal", Nt = "_ConstructorInternal", vt = "_FallbackInternal", Ot = "_FunctionInternal", At = "_StructInternal";
  const _E = class _E {
    constructor(e, t, n, s, i, a, o, c) {
      __privateAdd(this, _E_instances);
      __publicField(this, "name");
      __publicField(this, "type");
      __publicField(this, "baseType");
      __publicField(this, "indexed");
      __publicField(this, "components");
      __publicField(this, "arrayLength");
      __publicField(this, "arrayChildren");
      if (Ke(e, N, "ParamType"), Object.defineProperty(this, P, {
        value: Tt
      }), a && (a = Object.freeze(a.slice())), s === "array") {
        if (o == null || c == null) throw new Error("");
      } else if (o != null || c != null) throw new Error("");
      if (s === "tuple") {
        if (a == null) throw new Error("");
      } else if (a != null) throw new Error("");
      m(this, {
        name: t,
        type: n,
        baseType: s,
        indexed: i,
        components: a,
        arrayLength: o,
        arrayChildren: c
      });
    }
    format(e) {
      if (e == null && (e = "sighash"), e === "json") {
        const n = this.name || "";
        if (this.isArray()) {
          const i = JSON.parse(this.arrayChildren.format("json"));
          return i.name = n, i.type += `[${this.arrayLength < 0 ? "" : String(this.arrayLength)}]`, JSON.stringify(i);
        }
        const s = {
          type: this.baseType === "tuple" ? "tuple" : this.type,
          name: n
        };
        return typeof this.indexed == "boolean" && (s.indexed = this.indexed), this.isTuple() && (s.components = this.components.map((i) => JSON.parse(i.format(e)))), JSON.stringify(s);
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
        return e.map((s) => n.arrayChildren.walk(s, t));
      }
      if (this.isTuple()) {
        if (!Array.isArray(e)) throw new Error("invalid tuple value");
        if (e.length !== this.components.length) throw new Error("array is wrong length");
        const n = this;
        return e.map((s, i) => n.components[i].walk(s, t));
      }
      return t(this.type, e);
    }
    async walkAsync(e, t) {
      const n = [], s = [
        e
      ];
      return __privateMethod(this, _E_instances, e_fn).call(this, n, e, t, (i) => {
        s[0] = i;
      }), n.length && await Promise.all(n), s[0];
    }
    static from(e, t) {
      if (_E.isParamType(e)) return e;
      if (typeof e == "string") try {
        return _E.from(ee(e), t);
      } catch {
        l(false, "invalid param type", "obj", e);
      }
      else if (e instanceof B) {
        let o = "", c = "", f = null;
        Z(e, I([
          "tuple"
        ])).has("tuple") || e.peekType("OPEN_PAREN") ? (c = "tuple", f = e.popParams().map((x) => _E.from(x)), o = `tuple(${f.map((x) => x.format()).join(",")})`) : (o = wt(e.popType("TYPE")), c = o);
        let u = null, b = null;
        for (; e.length && e.peekType("BRACKET"); ) {
          const x = e.pop();
          u = new _E(N, "", o, c, null, f, b, u), b = x.value, o += x.text, c = "array", f = null;
        }
        let d = null;
        if (Z(e, H0).has("indexed")) {
          if (!t) throw new Error("");
          d = true;
        }
        const T = e.peekType("ID") ? e.pop().text : "";
        if (e.length) throw new Error("leftover tokens");
        return new _E(N, T, o, c, d, f, b, u);
      }
      const n = e.name;
      l(!n || typeof n == "string" && n.match(on), "invalid name", "obj.name", n);
      let s = e.indexed;
      s != null && (l(t, "parameter cannot be indexed", "obj.indexed", e.indexed), s = !!s);
      let i = e.type, a = i.match(Q0);
      if (a) {
        const o = parseInt(a[2] || "-1"), c = _E.from({
          type: a[1],
          components: e.components
        });
        return new _E(N, n || "", i, "array", s, null, o, c);
      }
      if (i === "tuple" || i.startsWith("tuple(") || i.startsWith("(")) {
        const o = e.components != null ? e.components.map((f) => _E.from(f)) : null;
        return new _E(N, n || "", i, "tuple", s, o, null, null);
      }
      return i = wt(e.type), new _E(N, n || "", i, i, s, null, null, null);
    }
    static isParamType(e) {
      return e && e[P] === Tt;
    }
  };
  _E_instances = new WeakSet();
  e_fn = function(e, t, n, s) {
    if (this.isArray()) {
      if (!Array.isArray(t)) throw new Error("invalid array value");
      if (this.arrayLength !== -1 && t.length !== this.arrayLength) throw new Error("array is wrong length");
      const a = this.arrayChildren, o = t.slice();
      o.forEach((c, f) => {
        var _a2;
        __privateMethod(_a2 = a, _E_instances, e_fn).call(_a2, e, c, n, (u) => {
          o[f] = u;
        });
      }), s(o);
      return;
    }
    if (this.isTuple()) {
      const a = this.components;
      let o;
      if (Array.isArray(t)) o = t.slice();
      else {
        if (t == null || typeof t != "object") throw new Error("invalid tuple value");
        o = a.map((c) => {
          if (!c.name) throw new Error("cannot use object value with unnamed components");
          if (!(c.name in t)) throw new Error(`missing value for component ${c.name}`);
          return t[c.name];
        });
      }
      if (o.length !== this.components.length) throw new Error("array is wrong length");
      o.forEach((c, f) => {
        var _a2;
        __privateMethod(_a2 = a[f], _E_instances, e_fn).call(_a2, e, c, n, (u) => {
          o[f] = u;
        });
      }), s(o);
      return;
    }
    const i = n(this.type, t);
    i.then ? e.push((async function() {
      s(await i);
    })()) : s(i);
  };
  let E = _E;
  class fe {
    constructor(e, t, n) {
      __publicField(this, "type");
      __publicField(this, "inputs");
      Ke(e, N, "Fragment"), n = Object.freeze(n.slice()), m(this, {
        type: t,
        inputs: n
      });
    }
    static from(e) {
      if (typeof e == "string") {
        try {
          fe.from(JSON.parse(e));
        } catch {
        }
        return fe.from(ee(e));
      }
      if (e instanceof B) switch (e.peekKeyword(sn)) {
        case "constructor":
          return W.from(e);
        case "error":
          return R.from(e);
        case "event":
          return M.from(e);
        case "fallback":
        case "receive":
          return V.from(e);
        case "function":
          return $.from(e);
        case "struct":
          return ae.from(e);
      }
      else if (typeof e == "object") {
        switch (e.type) {
          case "constructor":
            return W.from(e);
          case "error":
            return R.from(e);
          case "event":
            return M.from(e);
          case "fallback":
          case "receive":
            return V.from(e);
          case "function":
            return $.from(e);
          case "struct":
            return ae.from(e);
        }
        y(false, `unsupported type: ${e.type}`, "UNSUPPORTED_OPERATION", {
          operation: "Fragment.from"
        });
      }
      l(false, "unsupported frgament object", "obj", e);
    }
    static isConstructor(e) {
      return W.isFragment(e);
    }
    static isError(e) {
      return R.isFragment(e);
    }
    static isEvent(e) {
      return M.isFragment(e);
    }
    static isFunction(e) {
      return $.isFragment(e);
    }
    static isStruct(e) {
      return ae.isFragment(e);
    }
  }
  class Ce extends fe {
    constructor(e, t, n, s) {
      super(e, t, s);
      __publicField(this, "name");
      l(typeof n == "string" && n.match(on), "invalid identifier", "name", n), s = Object.freeze(s.slice()), m(this, {
        name: n
      });
    }
  }
  function Te(r, e) {
    return "(" + e.map((t) => t.format(r)).join(r === "full" ? ", " : ",") + ")";
  }
  class R extends Ce {
    constructor(e, t, n) {
      super(e, "error", t, n), Object.defineProperty(this, P, {
        value: Et
      });
    }
    get selector() {
      return we(this.format("sighash")).substring(0, 10);
    }
    format(e) {
      if (e == null && (e = "sighash"), e === "json") return JSON.stringify({
        type: "error",
        name: this.name,
        inputs: this.inputs.map((n) => JSON.parse(n.format(e)))
      });
      const t = [];
      return e !== "sighash" && t.push("error"), t.push(this.name + Te(e, this.inputs)), t.join(" ");
    }
    static from(e) {
      if (R.isFragment(e)) return e;
      if (typeof e == "string") return R.from(ee(e));
      if (e instanceof B) {
        const t = Ue("error", e), n = K(e);
        return ce(e), new R(N, t, n);
      }
      return new R(N, e.name, e.inputs ? e.inputs.map(E.from) : []);
    }
    static isFragment(e) {
      return e && e[P] === Et;
    }
  }
  class M extends Ce {
    constructor(e, t, n, s) {
      super(e, "event", t, n);
      __publicField(this, "anonymous");
      Object.defineProperty(this, P, {
        value: xt
      }), m(this, {
        anonymous: s
      });
    }
    get topicHash() {
      return we(this.format("sighash"));
    }
    format(e) {
      if (e == null && (e = "sighash"), e === "json") return JSON.stringify({
        type: "event",
        anonymous: this.anonymous,
        name: this.name,
        inputs: this.inputs.map((n) => JSON.parse(n.format(e)))
      });
      const t = [];
      return e !== "sighash" && t.push("event"), t.push(this.name + Te(e, this.inputs)), e !== "sighash" && this.anonymous && t.push("anonymous"), t.join(" ");
    }
    static getTopicHash(e, t) {
      return t = (t || []).map((s) => E.from(s)), new M(N, e, t, false).topicHash;
    }
    static from(e) {
      if (M.isFragment(e)) return e;
      if (typeof e == "string") try {
        return M.from(ee(e));
      } catch {
        l(false, "invalid event fragment", "obj", e);
      }
      else if (e instanceof B) {
        const t = Ue("event", e), n = K(e, true), s = !!Z(e, I([
          "anonymous"
        ])).has("anonymous");
        return ce(e), new M(N, t, n, s);
      }
      return new M(N, e.name, e.inputs ? e.inputs.map((t) => E.from(t, true)) : [], !!e.anonymous);
    }
    static isFragment(e) {
      return e && e[P] === xt;
    }
  }
  class W extends fe {
    constructor(e, t, n, s, i) {
      super(e, t, n);
      __publicField(this, "payable");
      __publicField(this, "gas");
      Object.defineProperty(this, P, {
        value: Nt
      }), m(this, {
        payable: s,
        gas: i
      });
    }
    format(e) {
      if (y(e != null && e !== "sighash", "cannot format a constructor for sighash", "UNSUPPORTED_OPERATION", {
        operation: "format(sighash)"
      }), e === "json") return JSON.stringify({
        type: "constructor",
        stateMutability: this.payable ? "payable" : "undefined",
        payable: this.payable,
        gas: this.gas != null ? this.gas : void 0,
        inputs: this.inputs.map((n) => JSON.parse(n.format(e)))
      });
      const t = [
        `constructor${Te(e, this.inputs)}`
      ];
      return this.payable && t.push("payable"), this.gas != null && t.push(`@${this.gas.toString()}`), t.join(" ");
    }
    static from(e) {
      if (W.isFragment(e)) return e;
      if (typeof e == "string") try {
        return W.from(ee(e));
      } catch {
        l(false, "invalid constuctor fragment", "obj", e);
      }
      else if (e instanceof B) {
        Z(e, I([
          "constructor"
        ]));
        const t = K(e), n = !!Z(e, G0).has("payable"), s = un(e);
        return ce(e), new W(N, "constructor", t, n, s);
      }
      return new W(N, "constructor", e.inputs ? e.inputs.map(E.from) : [], !!e.payable, e.gas != null ? e.gas : null);
    }
    static isFragment(e) {
      return e && e[P] === Nt;
    }
  }
  class V extends fe {
    constructor(e, t, n) {
      super(e, "fallback", t);
      __publicField(this, "payable");
      Object.defineProperty(this, P, {
        value: vt
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
      if (V.isFragment(e)) return e;
      if (typeof e == "string") try {
        return V.from(ee(e));
      } catch {
        l(false, "invalid fallback fragment", "obj", e);
      }
      else if (e instanceof B) {
        const t = e.toString(), n = e.peekKeyword(I([
          "fallback",
          "receive"
        ]));
        if (l(n, "type must be fallback or receive", "obj", t), e.popKeyword(I([
          "fallback",
          "receive"
        ])) === "receive") {
          const o = K(e);
          return l(o.length === 0, "receive cannot have arguments", "obj.inputs", o), Z(e, I([
            "payable"
          ])), ce(e), new V(N, [], true);
        }
        let i = K(e);
        i.length ? l(i.length === 1 && i[0].type === "bytes", "invalid fallback inputs", "obj.inputs", i.map((o) => o.format("minimal")).join(", ")) : i = [
          E.from("bytes")
        ];
        const a = fn(e);
        if (l(a === "nonpayable" || a === "payable", "fallback cannot be constants", "obj.stateMutability", a), Z(e, I([
          "returns"
        ])).has("returns")) {
          const o = K(e);
          l(o.length === 1 && o[0].type === "bytes", "invalid fallback outputs", "obj.outputs", o.map((c) => c.format("minimal")).join(", "));
        }
        return ce(e), new V(N, i, a === "payable");
      }
      if (e.type === "receive") return new V(N, [], true);
      if (e.type === "fallback") {
        const t = [
          E.from("bytes")
        ], n = e.stateMutability === "payable";
        return new V(N, t, n);
      }
      l(false, "invalid fallback description", "obj", e);
    }
    static isFragment(e) {
      return e && e[P] === vt;
    }
  }
  class $ extends Ce {
    constructor(e, t, n, s, i, a) {
      super(e, "function", t, s);
      __publicField(this, "constant");
      __publicField(this, "outputs");
      __publicField(this, "stateMutability");
      __publicField(this, "payable");
      __publicField(this, "gas");
      Object.defineProperty(this, P, {
        value: Ot
      }), i = Object.freeze(i.slice()), m(this, {
        constant: n === "view" || n === "pure",
        gas: a,
        outputs: i,
        payable: n === "payable",
        stateMutability: n
      });
    }
    get selector() {
      return we(this.format("sighash")).substring(0, 10);
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
      return e !== "sighash" && t.push("function"), t.push(this.name + Te(e, this.inputs)), e !== "sighash" && (this.stateMutability !== "nonpayable" && t.push(this.stateMutability), this.outputs && this.outputs.length && (t.push("returns"), t.push(Te(e, this.outputs))), this.gas != null && t.push(`@${this.gas.toString()}`)), t.join(" ");
    }
    static getSelector(e, t) {
      return t = (t || []).map((s) => E.from(s)), new $(N, e, "view", t, [], null).selector;
    }
    static from(e) {
      if ($.isFragment(e)) return e;
      if (typeof e == "string") try {
        return $.from(ee(e));
      } catch {
        l(false, "invalid function fragment", "obj", e);
      }
      else if (e instanceof B) {
        const n = Ue("function", e), s = K(e), i = fn(e);
        let a = [];
        Z(e, I([
          "returns"
        ])).has("returns") && (a = K(e));
        const o = un(e);
        return ce(e), new $(N, n, i, s, a, o);
      }
      let t = e.stateMutability;
      return t == null && (t = "payable", typeof e.constant == "boolean" ? (t = "view", e.constant || (t = "payable", typeof e.payable == "boolean" && !e.payable && (t = "nonpayable"))) : typeof e.payable == "boolean" && !e.payable && (t = "nonpayable")), new $(N, e.name, t, e.inputs ? e.inputs.map(E.from) : [], e.outputs ? e.outputs.map(E.from) : [], e.gas != null ? e.gas : null);
    }
    static isFragment(e) {
      return e && e[P] === Ot;
    }
  }
  class ae extends Ce {
    constructor(e, t, n) {
      super(e, "struct", t, n), Object.defineProperty(this, P, {
        value: At
      });
    }
    format() {
      throw new Error("@TODO");
    }
    static from(e) {
      if (typeof e == "string") try {
        return ae.from(ee(e));
      } catch {
        l(false, "invalid struct fragment", "obj", e);
      }
      else if (e instanceof B) {
        const t = Ue("struct", e), n = K(e);
        return ce(e), new ae(N, t, n);
      }
      return new ae(N, e.name, e.inputs ? e.inputs.map(E.from) : []);
    }
    static isFragment(e) {
      return e && e[P] === At;
    }
  }
  const _ = /* @__PURE__ */ new Map();
  _.set(0, "GENERIC_PANIC");
  _.set(1, "ASSERT_FALSE");
  _.set(17, "OVERFLOW");
  _.set(18, "DIVIDE_BY_ZERO");
  _.set(33, "ENUM_RANGE_ERROR");
  _.set(34, "BAD_STORAGE_DATA");
  _.set(49, "STACK_UNDERFLOW");
  _.set(50, "ARRAY_RANGE_ERROR");
  _.set(65, "OUT_OF_MEMORY");
  _.set(81, "UNINITIALIZED_FUNCTION_CALL");
  const q0 = new RegExp(/^bytes([0-9]*)$/), j0 = new RegExp(/^(u?int)([0-9]*)$/);
  let Me = null, kt = 1024;
  function er(r, e, t, n) {
    let s = "missing revert data", i = null;
    const a = null;
    let o = null;
    if (t) {
      s = "execution reverted";
      const f = L(t);
      if (t = O(t), f.length === 0) s += " (no data present; likely require(false) occurred", i = "require(false)";
      else if (f.length % 32 !== 4) s += " (could not decode reason; invalid data length)";
      else if (O(f.slice(0, 4)) === "0x08c379a0") try {
        i = n.decode([
          "string"
        ], f.slice(4))[0], o = {
          signature: "Error(string)",
          name: "Error",
          args: [
            i
          ]
        }, s += `: ${JSON.stringify(i)}`;
      } catch {
        s += " (could not decode reason; invalid string data)";
      }
      else if (O(f.slice(0, 4)) === "0x4e487b71") try {
        const u = Number(n.decode([
          "uint256"
        ], f.slice(4))[0]);
        o = {
          signature: "Panic(uint256)",
          name: "Panic",
          args: [
            u
          ]
        }, i = `Panic due to ${_.get(u) || "UNKNOWN"}(${u})`, s += `: ${i}`;
      } catch {
        s += " (could not decode panic code)";
      }
      else s += " (unknown custom error)";
    }
    const c = {
      to: e.to ? Y(e.to) : null,
      data: e.data || "0x"
    };
    return e.from && (c.from = Y(e.from)), me(s, "CALL_EXCEPTION", {
      action: r,
      data: t,
      reason: i,
      transaction: c,
      invocation: a,
      revert: o
    });
  }
  const _Ee = class _Ee {
    constructor() {
      __privateAdd(this, _Ee_instances);
    }
    getDefaultValue(e) {
      const t = e.map((s) => __privateMethod(this, _Ee_instances, e_fn2).call(this, E.from(s)));
      return new ke(t, "_").defaultValue();
    }
    encode(e, t) {
      Bt(t.length, e.length, "types/values length mismatch");
      const n = e.map((a) => __privateMethod(this, _Ee_instances, e_fn2).call(this, E.from(a))), s = new ke(n, "_"), i = new Ve();
      return s.encode(i, t), i.data;
    }
    decode(e, t, n) {
      const s = e.map((a) => __privateMethod(this, _Ee_instances, e_fn2).call(this, E.from(a)));
      return new ke(s, "_").decode(new Xe(t, n, kt));
    }
    static _setDefaultMaxInflation(e) {
      l(typeof e == "number" && Number.isInteger(e), "invalid defaultMaxInflation factor", "value", e), kt = e;
    }
    static defaultAbiCoder() {
      return Me == null && (Me = new _Ee()), Me;
    }
    static getBuiltinCallException(e, t, n) {
      return er(e, t, n, _Ee.defaultAbiCoder());
    }
  };
  _Ee_instances = new WeakSet();
  e_fn2 = function(e) {
    if (e.isArray()) return new I0(__privateMethod(this, _Ee_instances, e_fn2).call(this, e.arrayChildren), e.arrayLength, e.name);
    if (e.isTuple()) return new ke(e.components.map((n) => __privateMethod(this, _Ee_instances, e_fn2).call(this, n)), e.name);
    switch (e.baseType) {
      case "address":
        return new A0(e.name);
      case "bool":
        return new R0(e.name);
      case "string":
        return new M0(e.name);
      case "bytes":
        return new P0(e.name);
      case "":
        return new C0(e.name);
    }
    let t = e.type.match(j0);
    if (t) {
      let n = parseInt(t[2] || "256");
      return l(n !== 0 && n <= 256 && n % 8 === 0, "invalid " + t[1] + " bit length", "param", e), new _0(n / 8, t[1] === "int", e.name);
    }
    if (t = e.type.match(q0), t) {
      let n = parseInt(t[1]);
      return l(n !== 0 && n <= 32, "invalid bytes length", "param", e), new S0(n, e.name);
    }
    l(false, "invalid type", "type", e.type);
  };
  let Ee = _Ee;
  class tr {
    constructor(e, t, n) {
      __publicField(this, "fragment");
      __publicField(this, "name");
      __publicField(this, "signature");
      __publicField(this, "topic");
      __publicField(this, "args");
      const s = e.name, i = e.format();
      m(this, {
        fragment: e,
        name: s,
        signature: i,
        topic: t,
        args: n
      });
    }
  }
  class nr {
    constructor(e, t, n, s) {
      __publicField(this, "fragment");
      __publicField(this, "name");
      __publicField(this, "args");
      __publicField(this, "signature");
      __publicField(this, "selector");
      __publicField(this, "value");
      const i = e.name, a = e.format();
      m(this, {
        fragment: e,
        name: i,
        args: n,
        signature: a,
        selector: t,
        value: s
      });
    }
  }
  class rr {
    constructor(e, t, n) {
      __publicField(this, "fragment");
      __publicField(this, "name");
      __publicField(this, "args");
      __publicField(this, "signature");
      __publicField(this, "selector");
      const s = e.name, i = e.format();
      m(this, {
        fragment: e,
        name: s,
        args: n,
        signature: i,
        selector: t
      });
    }
  }
  class It {
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
  const Rt = {
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
  }, Pt = {
    "0x08c379a0": {
      signature: "Error(string)",
      name: "Error",
      inputs: [
        "string"
      ],
      reason: (r) => `reverted with reason string ${JSON.stringify(r)}`
    },
    "0x4e487b71": {
      signature: "Panic(uint256)",
      name: "Panic",
      inputs: [
        "uint256"
      ],
      reason: (r) => {
        let e = "unknown panic code";
        return r >= 0 && r <= 255 && Rt[r.toString()] && (e = Rt[r.toString()]), `reverted with panic code 0x${r.toString(16)} (${e})`;
      }
    }
  };
  const _H = class _H {
    constructor(e) {
      __privateAdd(this, _H_instances);
      __publicField(this, "fragments");
      __publicField(this, "deploy");
      __publicField(this, "fallback");
      __publicField(this, "receive");
      __privateAdd(this, _e8);
      __privateAdd(this, _t5);
      __privateAdd(this, _n3);
      __privateAdd(this, _r2);
      let t = [];
      typeof e == "string" ? t = JSON.parse(e) : t = e, __privateSet(this, _n3, /* @__PURE__ */ new Map()), __privateSet(this, _e8, /* @__PURE__ */ new Map()), __privateSet(this, _t5, /* @__PURE__ */ new Map());
      const n = [];
      for (const a of t) try {
        n.push(fe.from(a));
      } catch (o) {
        console.log(`[Warning] Invalid Fragment ${JSON.stringify(a)}:`, o.message);
      }
      m(this, {
        fragments: Object.freeze(n)
      });
      let s = null, i = false;
      __privateSet(this, _r2, this.getAbiCoder()), this.fragments.forEach((a, o) => {
        let c;
        switch (a.type) {
          case "constructor":
            if (this.deploy) {
              console.log("duplicate definition - constructor");
              return;
            }
            m(this, {
              deploy: a
            });
            return;
          case "fallback":
            a.inputs.length === 0 ? i = true : (l(!s || a.payable !== s.payable, "conflicting fallback fragments", `fragments[${o}]`, a), s = a, i = s.payable);
            return;
          case "function":
            c = __privateGet(this, _n3);
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
        const f = a.format();
        c.has(f) || c.set(f, a);
      }), this.deploy || m(this, {
        deploy: W.from("constructor()")
      }), m(this, {
        fallback: s,
        receive: i
      });
    }
    format(e) {
      const t = e ? "minimal" : "full";
      return this.fragments.map((s) => s.format(t));
    }
    formatJson() {
      const e = this.fragments.map((t) => t.format("json"));
      return JSON.stringify(e.map((t) => JSON.parse(t)));
    }
    getAbiCoder() {
      return Ee.defaultAbiCoder();
    }
    getFunctionName(e) {
      const t = __privateMethod(this, _H_instances, s_fn).call(this, e, null, false);
      return l(t, "no matching function", "key", e), t.name;
    }
    hasFunction(e) {
      return !!__privateMethod(this, _H_instances, s_fn).call(this, e, null, false);
    }
    getFunction(e, t) {
      return __privateMethod(this, _H_instances, s_fn).call(this, e, t || null, true);
    }
    forEachFunction(e) {
      const t = Array.from(__privateGet(this, _n3).keys());
      t.sort((n, s) => n.localeCompare(s));
      for (let n = 0; n < t.length; n++) {
        const s = t[n];
        e(__privateGet(this, _n3).get(s), n);
      }
    }
    getEventName(e) {
      const t = __privateMethod(this, _H_instances, i_fn2).call(this, e, null, false);
      return l(t, "no matching event", "key", e), t.name;
    }
    hasEvent(e) {
      return !!__privateMethod(this, _H_instances, i_fn2).call(this, e, null, false);
    }
    getEvent(e, t) {
      return __privateMethod(this, _H_instances, i_fn2).call(this, e, t || null, true);
    }
    forEachEvent(e) {
      const t = Array.from(__privateGet(this, _t5).keys());
      t.sort((n, s) => n.localeCompare(s));
      for (let n = 0; n < t.length; n++) {
        const s = t[n];
        e(__privateGet(this, _t5).get(s), n);
      }
    }
    getError(e, t) {
      if (z(e)) {
        const s = e.toLowerCase();
        if (Pt[s]) return R.from(Pt[s].signature);
        for (const i of __privateGet(this, _e8).values()) if (s === i.selector) return i;
        return null;
      }
      if (e.indexOf("(") === -1) {
        const s = [];
        for (const [i, a] of __privateGet(this, _e8)) i.split("(")[0] === e && s.push(a);
        if (s.length === 0) return e === "Error" ? R.from("error Error(string)") : e === "Panic" ? R.from("error Panic(uint256)") : null;
        if (s.length > 1) {
          const i = s.map((a) => JSON.stringify(a.format())).join(", ");
          l(false, `ambiguous error description (i.e. ${i})`, "name", e);
        }
        return s[0];
      }
      if (e = R.from(e).format(), e === "Error(string)") return R.from("error Error(string)");
      if (e === "Panic(uint256)") return R.from("error Panic(uint256)");
      const n = __privateGet(this, _e8).get(e);
      return n || null;
    }
    forEachError(e) {
      const t = Array.from(__privateGet(this, _e8).keys());
      t.sort((n, s) => n.localeCompare(s));
      for (let n = 0; n < t.length; n++) {
        const s = t[n];
        e(__privateGet(this, _e8).get(s), n);
      }
    }
    _decodeParams(e, t) {
      return __privateGet(this, _r2).decode(e, t);
    }
    _encodeParams(e, t) {
      return __privateGet(this, _r2).encode(e, t);
    }
    encodeDeploy(e) {
      return this._encodeParams(this.deploy.inputs, e || []);
    }
    decodeErrorResult(e, t) {
      if (typeof e == "string") {
        const n = this.getError(e);
        l(n, "unknown error", "fragment", e), e = n;
      }
      return l(ne(t, 0, 4) === e.selector, `data signature does not match error ${e.name}.`, "data", t), this._decodeParams(e.inputs, ne(t, 4));
    }
    encodeErrorResult(e, t) {
      if (typeof e == "string") {
        const n = this.getError(e);
        l(n, "unknown error", "fragment", e), e = n;
      }
      return ie([
        e.selector,
        this._encodeParams(e.inputs, t || [])
      ]);
    }
    decodeFunctionData(e, t) {
      if (typeof e == "string") {
        const n = this.getFunction(e);
        l(n, "unknown function", "fragment", e), e = n;
      }
      return l(ne(t, 0, 4) === e.selector, `data signature does not match function ${e.name}.`, "data", t), this._decodeParams(e.inputs, ne(t, 4));
    }
    encodeFunctionData(e, t) {
      if (typeof e == "string") {
        const n = this.getFunction(e);
        l(n, "unknown function", "fragment", e), e = n;
      }
      return ie([
        e.selector,
        this._encodeParams(e.inputs, t || [])
      ]);
    }
    decodeFunctionResult(e, t) {
      if (typeof e == "string") {
        const i = this.getFunction(e);
        l(i, "unknown function", "fragment", e), e = i;
      }
      let n = "invalid length for result data";
      const s = D(t);
      if (s.length % 32 === 0) try {
        return __privateGet(this, _r2).decode(e.outputs, s);
      } catch {
        n = "could not decode result data";
      }
      y(false, n, "BAD_DATA", {
        value: O(s),
        info: {
          method: e.name,
          signature: e.format()
        }
      });
    }
    makeError(e, t) {
      const n = L(e, "data"), s = Ee.getBuiltinCallException("call", t, n);
      if (s.message.startsWith("execution reverted (unknown custom error)")) {
        const o = O(n.slice(0, 4)), c = this.getError(o);
        if (c) try {
          const f = __privateGet(this, _r2).decode(c.inputs, n.slice(4));
          s.revert = {
            name: c.name,
            signature: c.format(),
            args: f
          }, s.reason = s.revert.signature, s.message = `execution reverted: ${s.reason}`;
        } catch {
          s.message = "execution reverted (coult not decode custom error)";
        }
      }
      const a = this.parseTransaction(t);
      return a && (s.invocation = {
        method: a.name,
        signature: a.signature,
        args: a.args
      }), s;
    }
    encodeFunctionResult(e, t) {
      if (typeof e == "string") {
        const n = this.getFunction(e);
        l(n, "unknown function", "fragment", e), e = n;
      }
      return O(__privateGet(this, _r2).encode(e.outputs, t || []));
    }
    encodeFilterTopics(e, t) {
      if (typeof e == "string") {
        const i = this.getEvent(e);
        l(i, "unknown event", "eventFragment", e), e = i;
      }
      y(t.length <= e.inputs.length, `too many arguments for ${e.format()}`, "UNEXPECTED_ARGUMENT", {
        count: t.length,
        expectedCount: e.inputs.length
      });
      const n = [];
      e.anonymous || n.push(e.topicHash);
      const s = (i, a) => i.type === "string" ? we(a) : i.type === "bytes" ? X(O(a)) : (i.type === "bool" && typeof a == "boolean" ? a = a ? "0x01" : "0x00" : i.type.match(/^u?int/) ? a = $t(a) : i.type.match(/^bytes/) ? a = _n(a, 32) : i.type === "address" && __privateGet(this, _r2).encode([
        "address"
      ], [
        a
      ]), Fn(O(a), 32));
      for (t.forEach((i, a) => {
        const o = e.inputs[a];
        if (!o.indexed) {
          l(i == null, "cannot filter non-indexed parameters; must be null", "contract." + o.name, i);
          return;
        }
        i == null ? n.push(null) : o.baseType === "array" || o.baseType === "tuple" ? l(false, "filtering with tuples or arrays not supported", "contract." + o.name, i) : Array.isArray(i) ? n.push(i.map((c) => s(o, c))) : n.push(s(o, i));
      }); n.length && n[n.length - 1] === null; ) n.pop();
      return n;
    }
    encodeEventLog(e, t) {
      if (typeof e == "string") {
        const a = this.getEvent(e);
        l(a, "unknown event", "eventFragment", e), e = a;
      }
      const n = [], s = [], i = [];
      return e.anonymous || n.push(e.topicHash), l(t.length === e.inputs.length, "event arguments/values mismatch", "values", t), e.inputs.forEach((a, o) => {
        const c = t[o];
        if (a.indexed) if (a.type === "string") n.push(we(c));
        else if (a.type === "bytes") n.push(X(c));
        else {
          if (a.baseType === "tuple" || a.baseType === "array") throw new Error("not implemented");
          n.push(__privateGet(this, _r2).encode([
            a.type
          ], [
            c
          ]));
        }
        else s.push(a), i.push(c);
      }), {
        data: __privateGet(this, _r2).encode(s, i),
        topics: n
      };
    }
    decodeEventLog(e, t, n) {
      if (typeof e == "string") {
        const h = this.getEvent(e);
        l(h, "unknown event", "eventFragment", e), e = h;
      }
      if (n != null && !e.anonymous) {
        const h = e.topicHash;
        l(z(n[0], 32) && n[0].toLowerCase() === h, "fragment/topic mismatch", "topics[0]", n[0]), n = n.slice(1);
      }
      const s = [], i = [], a = [];
      e.inputs.forEach((h, T) => {
        h.indexed ? h.type === "string" || h.type === "bytes" || h.baseType === "tuple" || h.baseType === "array" ? (s.push(E.from({
          type: "bytes32",
          name: h.name
        })), a.push(true)) : (s.push(h), a.push(false)) : (i.push(h), a.push(false));
      });
      const o = n != null ? __privateGet(this, _r2).decode(s, ie(n)) : null, c = __privateGet(this, _r2).decode(i, t, true), f = [], u = [];
      let b = 0, d = 0;
      return e.inputs.forEach((h, T) => {
        let x = null;
        if (h.indexed) if (o == null) x = new It(null);
        else if (a[T]) x = new It(o[d++]);
        else try {
          x = o[d++];
        } catch (A) {
          x = A;
        }
        else try {
          x = c[b++];
        } catch (A) {
          x = A;
        }
        f.push(x), u.push(h.name || null);
      }), J.fromItems(f, u);
    }
    parseTransaction(e) {
      const t = L(e.data, "tx.data"), n = Q(e.value != null ? e.value : 0, "tx.value"), s = this.getFunction(O(t.slice(0, 4)));
      if (!s) return null;
      const i = __privateGet(this, _r2).decode(s.inputs, t.slice(4));
      return new nr(s, s.selector, i, n);
    }
    parseCallResult(e) {
      throw new Error("@TODO");
    }
    parseLog(e) {
      const t = this.getEvent(e.topics[0]);
      return !t || t.anonymous ? null : new tr(t, t.topicHash, this.decodeEventLog(t, e.data, e.topics));
    }
    parseError(e) {
      const t = O(e), n = this.getError(ne(t, 0, 4));
      if (!n) return null;
      const s = __privateGet(this, _r2).decode(n.inputs, ne(t, 4));
      return new rr(n, n.selector, s);
    }
    static from(e) {
      return e instanceof _H ? e : typeof e == "string" ? new _H(JSON.parse(e)) : typeof e.formatJson == "function" ? new _H(e.formatJson()) : typeof e.format == "function" ? new _H(e.format("json")) : new _H(e);
    }
  };
  _e8 = new WeakMap();
  _t5 = new WeakMap();
  _n3 = new WeakMap();
  _r2 = new WeakMap();
  _H_instances = new WeakSet();
  s_fn = function(e, t, n) {
    if (z(e)) {
      const i = e.toLowerCase();
      for (const a of __privateGet(this, _n3).values()) if (i === a.selector) return a;
      return null;
    }
    if (e.indexOf("(") === -1) {
      const i = [];
      for (const [a, o] of __privateGet(this, _n3)) a.split("(")[0] === e && i.push(o);
      if (t) {
        const a = t.length > 0 ? t[t.length - 1] : null;
        let o = t.length, c = true;
        v.isTyped(a) && a.type === "overrides" && (c = false, o--);
        for (let f = i.length - 1; f >= 0; f--) {
          const u = i[f].inputs.length;
          u !== o && (!c || u !== o - 1) && i.splice(f, 1);
        }
        for (let f = i.length - 1; f >= 0; f--) {
          const u = i[f].inputs;
          for (let b = 0; b < t.length; b++) if (v.isTyped(t[b])) {
            if (b >= u.length) {
              if (t[b].type === "overrides") continue;
              i.splice(f, 1);
              break;
            }
            if (t[b].type !== u[b].baseType) {
              i.splice(f, 1);
              break;
            }
          }
        }
      }
      if (i.length === 1 && t && t.length !== i[0].inputs.length) {
        const a = t[t.length - 1];
        (a == null || Array.isArray(a) || typeof a != "object") && i.splice(0, 1);
      }
      if (i.length === 0) return null;
      if (i.length > 1 && n) {
        const a = i.map((o) => JSON.stringify(o.format())).join(", ");
        l(false, `ambiguous function description (i.e. matches ${a})`, "key", e);
      }
      return i[0];
    }
    const s = __privateGet(this, _n3).get($.from(e).format());
    return s || null;
  };
  i_fn2 = function(e, t, n) {
    if (z(e)) {
      const i = e.toLowerCase();
      for (const a of __privateGet(this, _t5).values()) if (i === a.topicHash) return a;
      return null;
    }
    if (e.indexOf("(") === -1) {
      const i = [];
      for (const [a, o] of __privateGet(this, _t5)) a.split("(")[0] === e && i.push(o);
      if (t) {
        for (let a = i.length - 1; a >= 0; a--) i[a].inputs.length < t.length && i.splice(a, 1);
        for (let a = i.length - 1; a >= 0; a--) {
          const o = i[a].inputs;
          for (let c = 0; c < t.length; c++) if (v.isTyped(t[c]) && t[c].type !== o[c].baseType) {
            i.splice(a, 1);
            break;
          }
        }
      }
      if (i.length === 0) return null;
      if (i.length > 1 && n) {
        const a = i.map((o) => JSON.stringify(o.format())).join(", ");
        l(false, `ambiguous event description (i.e. matches ${a})`, "key", e);
      }
      return i[0];
    }
    const s = __privateGet(this, _t5).get(M.from(e).format());
    return s || null;
  };
  let H = _H;
  const ln = BigInt(0);
  function C(r) {
    return r == null ? null : r.toString();
  }
  function sr(r) {
    const e = {};
    r.to && (e.to = r.to), r.from && (e.from = r.from), r.data && (e.data = O(r.data));
    const t = "chainId,gasLimit,gasPrice,maxFeePerBlobGas,maxFeePerGas,maxPriorityFeePerGas,value".split(/,/);
    for (const s of t) !(s in r) || r[s] == null || (e[s] = Q(r[s], `request.${s}`));
    const n = "type,nonce".split(/,/);
    for (const s of n) !(s in r) || r[s] == null || (e[s] = q(r[s], `request.${s}`));
    return r.accessList && (e.accessList = $0(r.accessList)), r.authorizationList && (e.authorizationList = r.authorizationList.slice()), "blockTag" in r && (e.blockTag = r.blockTag), "enableCcipRead" in r && (e.enableCcipRead = !!r.enableCcipRead), "customData" in r && (e.customData = r.customData), "blobVersionedHashes" in r && r.blobVersionedHashes && (e.blobVersionedHashes = r.blobVersionedHashes.slice()), "kzg" in r && (e.kzg = r.kzg), "blobWrapperVersion" in r && (e.blobWrapperVersion = r.blobWrapperVersion), "blobs" in r && r.blobs && (e.blobs = r.blobs.map((s) => Bn(s) ? O(s) : Object.assign({}, s))), e;
  }
  class Le {
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
      const { address: e, blockHash: t, blockNumber: n, data: s, index: i, removed: a, topics: o, transactionHash: c, transactionIndex: f } = this;
      return {
        _type: "log",
        address: e,
        blockHash: t,
        blockNumber: n,
        data: s,
        index: i,
        removed: a,
        topics: o,
        transactionHash: c,
        transactionIndex: f
      };
    }
    async getBlock() {
      const e = await this.provider.getBlock(this.blockHash);
      return y(!!e, "failed to find transaction", "UNKNOWN_ERROR", {}), e;
    }
    async getTransaction() {
      const e = await this.provider.getTransaction(this.transactionHash);
      return y(!!e, "failed to find transaction", "UNKNOWN_ERROR", {}), e;
    }
    async getTransactionReceipt() {
      const e = await this.provider.getTransactionReceipt(this.transactionHash);
      return y(!!e, "failed to find transaction receipt", "UNKNOWN_ERROR", {}), e;
    }
    removedEvent() {
      return ar(this);
    }
  }
  class ir {
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
      __privateSet(this, _e9, Object.freeze(e.logs.map((s) => new Le(s, t))));
      let n = ln;
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
      const { to: e, from: t, contractAddress: n, hash: s, index: i, blockHash: a, blockNumber: o, logsBloom: c, logs: f, status: u, root: b } = this;
      return {
        _type: "TransactionReceipt",
        blockHash: a,
        blockNumber: o,
        contractAddress: n,
        cumulativeGasUsed: C(this.cumulativeGasUsed),
        from: t,
        gasPrice: C(this.gasPrice),
        blobGasUsed: C(this.blobGasUsed),
        blobGasPrice: C(this.blobGasPrice),
        gasUsed: C(this.gasUsed),
        hash: s,
        index: i,
        logs: f,
        logsBloom: c,
        root: b,
        status: u,
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
      return dn(this);
    }
    reorderedEvent(e) {
      return y(!e || e.isMined(), "unmined 'other' transction cannot be orphaned", "UNSUPPORTED_OPERATION", {
        operation: "reorderedEvent(other)"
      }), bn(this, e);
    }
  }
  _e9 = new WeakMap();
  const _Qe = class _Qe {
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
      const { blockNumber: e, blockHash: t, index: n, hash: s, type: i, to: a, from: o, nonce: c, data: f, signature: u, accessList: b, blobVersionedHashes: d } = this;
      return {
        _type: "TransactionResponse",
        accessList: b,
        blockNumber: e,
        blockHash: t,
        blobVersionedHashes: d,
        chainId: C(this.chainId),
        data: f,
        from: o,
        gasLimit: C(this.gasLimit),
        gasPrice: C(this.gasPrice),
        hash: s,
        maxFeePerGas: C(this.maxFeePerGas),
        maxPriorityFeePerGas: C(this.maxPriorityFeePerGas),
        maxFeePerBlobGas: C(this.maxFeePerBlobGas),
        nonce: c,
        signature: u,
        to: a,
        index: n,
        type: i,
        value: C(this.value)
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
        const { tx: t, blockNumber: n } = await $e({
          tx: this.getTransaction(),
          blockNumber: this.provider.getBlockNumber()
        });
        return t == null || t.blockNumber == null ? 0 : n - t.blockNumber + 1;
      }
      return await this.provider.getBlockNumber() - this.blockNumber + 1;
    }
    async wait(e, t) {
      const n = e ?? 1, s = t ?? 0;
      let i = __privateGet(this, _e10), a = -1, o = i === -1;
      const c = async () => {
        if (o) return null;
        const { blockNumber: d, nonce: h } = await $e({
          blockNumber: this.provider.getBlockNumber(),
          nonce: this.provider.getTransactionCount(this.from)
        });
        if (h < this.nonce) {
          i = d;
          return;
        }
        if (o) return null;
        const T = await this.getTransaction();
        if (!(T && T.blockNumber != null)) for (a === -1 && (a = i - 3, a < __privateGet(this, _e10) && (a = __privateGet(this, _e10))); a <= d; ) {
          if (o) return null;
          const x = await this.provider.getBlock(a, true);
          if (x == null) return;
          for (const A of x) if (A === this.hash) return;
          for (let A = 0; A < x.length; A++) {
            const w = await x.getTransaction(A);
            if (w.from === this.from && w.nonce === this.nonce) {
              if (o) return null;
              const S = await this.provider.getTransactionReceipt(w.hash);
              if (S == null || d - S.blockNumber + 1 < n) return;
              let te = "replaced";
              w.data === this.data && w.to === this.to && w.value === this.value ? te = "repriced" : w.data === "0x" && w.from === w.to && w.value === ln && (te = "cancelled"), y(false, "transaction was replaced", "TRANSACTION_REPLACED", {
                cancelled: te === "replaced" || te === "cancelled",
                reason: te,
                replacement: w.replaceableTransaction(i),
                hash: w.hash,
                receipt: S
              });
            }
          }
          a++;
        }
      }, f = (d) => {
        if (d == null || d.status !== 0) return d;
        y(false, "transaction execution reverted", "CALL_EXCEPTION", {
          action: "sendTransaction",
          data: null,
          reason: null,
          invocation: null,
          revert: null,
          transaction: {
            to: d.to,
            from: d.from,
            data: ""
          },
          receipt: d
        });
      }, u = await this.provider.getTransactionReceipt(this.hash);
      if (n === 0) return f(u);
      if (u) {
        if (n === 1 || await u.confirmations() >= n) return f(u);
      } else if (await c(), n === 0) return null;
      return await new Promise((d, h) => {
        const T = [], x = () => {
          T.forEach((w) => w());
        };
        if (T.push(() => {
          o = true;
        }), s > 0) {
          const w = setTimeout(() => {
            x(), h(me("wait for transaction timeout", "TIMEOUT"));
          }, s);
          T.push(() => {
            clearTimeout(w);
          });
        }
        const A = async (w) => {
          if (await w.confirmations() >= n) {
            x();
            try {
              d(f(w));
            } catch (S) {
              h(S);
            }
          }
        };
        if (T.push(() => {
          this.provider.off(this.hash, A);
        }), this.provider.on(this.hash, A), i >= 0) {
          const w = async () => {
            try {
              await c();
            } catch (S) {
              if (de(S, "TRANSACTION_REPLACED")) {
                x(), h(S);
                return;
              }
            }
            o || this.provider.once("block", w);
          };
          T.push(() => {
            this.provider.off("block", w);
          }), this.provider.once("block", w);
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
      return y(this.isMined(), "unmined transaction canot be orphaned", "UNSUPPORTED_OPERATION", {
        operation: "removeEvent()"
      }), dn(this);
    }
    reorderedEvent(e) {
      return y(this.isMined(), "unmined transaction canot be orphaned", "UNSUPPORTED_OPERATION", {
        operation: "removeEvent()"
      }), y(!e || e.isMined(), "unmined 'other' transaction canot be orphaned", "UNSUPPORTED_OPERATION", {
        operation: "removeEvent()"
      }), bn(this, e);
    }
    replaceableTransaction(e) {
      l(Number.isInteger(e) && e >= 0, "invalid startBlock", "startBlock", e);
      const t = new _Qe(this, this.provider);
      return __privateSet(t, _e10, e), t;
    }
  };
  _e10 = new WeakMap();
  let Qe = _Qe;
  function bn(r, e) {
    return {
      orphan: "reorder-transaction",
      tx: r,
      other: e
    };
  }
  function dn(r) {
    return {
      orphan: "drop-transaction",
      tx: r
    };
  }
  function ar(r) {
    return {
      orphan: "drop-log",
      log: {
        transactionHash: r.transactionHash,
        blockHash: r.blockHash,
        blockNumber: r.blockNumber,
        address: r.address,
        data: r.data,
        topics: Object.freeze(r.topics.slice()),
        index: r.index
      }
    };
  }
  class qe extends Le {
    constructor(e, t, n) {
      super(e, e.provider);
      __publicField(this, "interface");
      __publicField(this, "fragment");
      __publicField(this, "args");
      const s = t.decodeEventLog(n, e.data, e.topics);
      m(this, {
        args: s,
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
  class pn extends Le {
    constructor(e, t) {
      super(e, e.provider);
      __publicField(this, "error");
      m(this, {
        error: t
      });
    }
  }
  class or extends ir {
    constructor(e, t, n) {
      super(n, t);
      __privateAdd(this, _e11);
      __privateSet(this, _e11, e);
    }
    get logs() {
      return super.logs.map((e) => {
        const t = e.topics.length ? __privateGet(this, _e11).getEvent(e.topics[0]) : null;
        if (t) try {
          return new qe(e, __privateGet(this, _e11), t);
        } catch (n) {
          return new pn(e, n);
        }
        return e;
      });
    }
  }
  _e11 = new WeakMap();
  class je extends Qe {
    constructor(e, t, n) {
      super(n, t);
      __privateAdd(this, _e12);
      __privateSet(this, _e12, e);
    }
    async wait(e, t) {
      const n = await super.wait(e, t);
      return n == null ? null : new or(__privateGet(this, _e12), this.provider, n);
    }
  }
  _e12 = new WeakMap();
  class hn extends Vn {
    constructor(e, t, n, s) {
      super(e, t, n);
      __publicField(this, "log");
      m(this, {
        log: s
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
  class cr extends hn {
    constructor(e, t, n, s, i) {
      super(e, t, n, new qe(i, e.interface, s));
      const a = e.interface.decodeEventLog(s, this.log.data, this.log.topics);
      m(this, {
        args: a,
        fragment: s
      });
    }
    get eventName() {
      return this.fragment.name;
    }
    get eventSignature() {
      return this.fragment.format();
    }
  }
  const St = BigInt(0);
  function yn(r) {
    return r && typeof r.call == "function";
  }
  function mn(r) {
    return r && typeof r.estimateGas == "function";
  }
  function Be(r) {
    return r && typeof r.resolveName == "function";
  }
  function gn(r) {
    return r && typeof r.sendTransaction == "function";
  }
  function wn(r) {
    if (r != null) {
      if (Be(r)) return r;
      if (r.provider) return r.provider;
    }
  }
  class fr {
    constructor(e, t, n) {
      __privateAdd(this, _e13);
      __publicField(this, "fragment");
      if (m(this, {
        fragment: t
      }), t.inputs.length < n.length) throw new Error("too many arguments");
      const s = ue(e.runner, "resolveName"), i = Be(s) ? s : null;
      __privateSet(this, _e13, (async function() {
        const a = await Promise.all(t.inputs.map((o, c) => n[c] == null ? null : o.walkAsync(n[c], (u, b) => u === "address" ? Array.isArray(b) ? Promise.all(b.map((d) => ge(d, i))) : ge(b, i) : b)));
        return e.interface.encodeFilterTopics(t, a);
      })());
    }
    getTopicFilter() {
      return __privateGet(this, _e13);
    }
  }
  _e13 = new WeakMap();
  function ue(r, e) {
    return r == null ? null : typeof r[e] == "function" ? r : r.provider && typeof r.provider[e] == "function" ? r.provider : null;
  }
  function se(r) {
    return r == null ? null : r.provider || null;
  }
  async function et(r, e) {
    const t = v.dereference(r, "overrides");
    l(typeof t == "object", "invalid overrides parameter", "overrides", r);
    const n = sr(t);
    return l(n.to == null || (e || []).indexOf("to") >= 0, "cannot override to", "overrides.to", n.to), l(n.data == null || (e || []).indexOf("data") >= 0, "cannot override data", "overrides.data", n.data), n.from && (n.from = n.from), n;
  }
  async function Tn(r, e, t) {
    const n = ue(r, "resolveName"), s = Be(n) ? n : null;
    return await Promise.all(e.map((i, a) => i.walkAsync(t[a], (o, c) => (c = v.dereference(c, o), o === "address" ? ge(c, s) : c))));
  }
  function ur(r) {
    const e = async function(a) {
      const o = await et(a, [
        "data"
      ]);
      o.to = await r.getAddress(), o.from && (o.from = await ge(o.from, wn(r.runner)));
      const c = r.interface, f = Q(o.value || St, "overrides.value") === St, u = (o.data || "0x") === "0x";
      c.fallback && !c.fallback.payable && c.receive && !u && !f && l(false, "cannot send data to receive or send value to non-payable fallback", "overrides", a), l(c.fallback || u, "cannot send data to receive-only contract", "overrides.data", o.data);
      const b = c.receive || c.fallback && c.fallback.payable;
      return l(b || f, "cannot send value to non-payable fallback", "overrides.value", o.value), l(c.fallback || u, "cannot send data to receive-only contract", "overrides.data", o.data), o;
    }, t = async function(a) {
      const o = ue(r.runner, "call");
      y(yn(o), "contract runner does not support calling", "UNSUPPORTED_OPERATION", {
        operation: "call"
      });
      const c = await e(a);
      try {
        return await o.call(c);
      } catch (f) {
        throw Lt(f) && f.data ? r.interface.makeError(f.data, c) : f;
      }
    }, n = async function(a) {
      const o = r.runner;
      y(gn(o), "contract runner does not support sending transactions", "UNSUPPORTED_OPERATION", {
        operation: "sendTransaction"
      });
      const c = await o.sendTransaction(await e(a)), f = se(r.runner);
      return new je(r.interface, f, c);
    }, s = async function(a) {
      const o = ue(r.runner, "estimateGas");
      return y(mn(o), "contract runner does not support gas estimation", "UNSUPPORTED_OPERATION", {
        operation: "estimateGas"
      }), await o.estimateGas(await e(a));
    }, i = async (a) => await n(a);
    return m(i, {
      _contract: r,
      estimateGas: s,
      populateTransaction: e,
      send: n,
      staticCall: t
    }), i;
  }
  function lr(r, e) {
    const t = function(...f) {
      const u = r.interface.getFunction(e, f);
      return y(u, "no matching fragment", "UNSUPPORTED_OPERATION", {
        operation: "fragment",
        info: {
          key: e,
          args: f
        }
      }), u;
    }, n = async function(...f) {
      const u = t(...f);
      let b = {};
      if (u.inputs.length + 1 === f.length && (b = await et(f.pop()), b.from && (b.from = await ge(b.from, wn(r.runner)))), u.inputs.length !== f.length) throw new Error("internal error: fragment inputs doesn't match arguments; should not happen");
      const d = await Tn(r.runner, u.inputs, f);
      return Object.assign({}, b, await $e({
        to: r.getAddress(),
        data: r.interface.encodeFunctionData(u, d)
      }));
    }, s = async function(...f) {
      const u = await o(...f);
      return u.length === 1 ? u[0] : u;
    }, i = async function(...f) {
      const u = r.runner;
      y(gn(u), "contract runner does not support sending transactions", "UNSUPPORTED_OPERATION", {
        operation: "sendTransaction"
      });
      const b = await u.sendTransaction(await n(...f)), d = se(r.runner);
      return new je(r.interface, d, b);
    }, a = async function(...f) {
      const u = ue(r.runner, "estimateGas");
      return y(mn(u), "contract runner does not support gas estimation", "UNSUPPORTED_OPERATION", {
        operation: "estimateGas"
      }), await u.estimateGas(await n(...f));
    }, o = async function(...f) {
      const u = ue(r.runner, "call");
      y(yn(u), "contract runner does not support calling", "UNSUPPORTED_OPERATION", {
        operation: "call"
      });
      const b = await n(...f);
      let d = "0x";
      try {
        d = await u.call(b);
      } catch (T) {
        throw Lt(T) && T.data ? r.interface.makeError(T.data, b) : T;
      }
      const h = t(...f);
      return r.interface.decodeFunctionResult(h, d);
    }, c = async (...f) => t(...f).constant ? await s(...f) : await i(...f);
    return m(c, {
      name: r.interface.getFunctionName(e),
      _contract: r,
      _key: e,
      getFragment: t,
      estimateGas: a,
      populateTransaction: n,
      send: i,
      staticCall: s,
      staticCallResult: o
    }), Object.defineProperty(c, "fragment", {
      configurable: false,
      enumerable: true,
      get: () => {
        const f = r.interface.getFunction(e);
        return y(f, "no matching fragment", "UNSUPPORTED_OPERATION", {
          operation: "fragment",
          info: {
            key: e
          }
        }), f;
      }
    }), c;
  }
  function br(r, e) {
    const t = function(...s) {
      const i = r.interface.getEvent(e, s);
      return y(i, "no matching fragment", "UNSUPPORTED_OPERATION", {
        operation: "fragment",
        info: {
          key: e,
          args: s
        }
      }), i;
    }, n = function(...s) {
      return new fr(r, t(...s), s);
    };
    return m(n, {
      name: r.interface.getEventName(e),
      _contract: r,
      _key: e,
      getFragment: t
    }), Object.defineProperty(n, "fragment", {
      configurable: false,
      enumerable: true,
      get: () => {
        const s = r.interface.getEvent(e);
        return y(s, "no matching fragment", "UNSUPPORTED_OPERATION", {
          operation: "fragment",
          info: {
            key: e
          }
        }), s;
      }
    }), n;
  }
  const Pe = Symbol.for("_ethersInternal_contract"), En = /* @__PURE__ */ new WeakMap();
  function dr(r, e) {
    En.set(r[Pe], e);
  }
  function U(r) {
    return En.get(r[Pe]);
  }
  function pr(r) {
    return r && typeof r == "object" && "getTopicFilter" in r && typeof r.getTopicFilter == "function" && r.fragment;
  }
  async function tt(r, e) {
    let t, n = null;
    if (Array.isArray(e)) {
      const i = function(a) {
        if (z(a, 32)) return a;
        const o = r.interface.getEvent(a);
        return l(o, "unknown fragment", "name", a), o.topicHash;
      };
      t = e.map((a) => a == null ? null : Array.isArray(a) ? a.map(i) : i(a));
    } else e === "*" ? t = [
      null
    ] : typeof e == "string" ? z(e, 32) ? t = [
      e
    ] : (n = r.interface.getEvent(e), l(n, "unknown fragment", "event", e), t = [
      n.topicHash
    ]) : pr(e) ? t = await e.getTopicFilter() : "fragment" in e ? (n = e.fragment, t = [
      n.topicHash
    ]) : l(false, "unknown event name", "event", e);
    t = t.map((i) => {
      if (i == null) return null;
      if (Array.isArray(i)) {
        const a = Array.from(new Set(i.map((o) => o.toLowerCase())).values());
        return a.length === 1 ? a[0] : (a.sort(), a);
      }
      return i.toLowerCase();
    });
    const s = t.map((i) => i == null ? "null" : Array.isArray(i) ? i.join("|") : i).join("&");
    return {
      fragment: n,
      tag: s,
      topics: t
    };
  }
  async function ye(r, e) {
    const { subs: t } = U(r);
    return t.get((await tt(r, e)).tag) || null;
  }
  async function Ut(r, e, t) {
    const n = se(r.runner);
    y(n, "contract runner does not support subscribing", "UNSUPPORTED_OPERATION", {
      operation: e
    });
    const { fragment: s, tag: i, topics: a } = await tt(r, t), { addr: o, subs: c } = U(r);
    let f = c.get(i);
    if (!f) {
      const b = {
        address: o || r,
        topics: a
      }, d = (A) => {
        let w = s;
        if (w == null) try {
          w = r.interface.getEvent(A.topics[0]);
        } catch {
        }
        if (w) {
          const S = w, te = s ? r.interface.decodeEventLog(s, A.data, A.topics) : [];
          ze(r, t, te, (xn) => new cr(r, xn, t, S, A));
        } else ze(r, t, [], (S) => new hn(r, S, t, A));
      };
      let h = [];
      f = {
        tag: i,
        listeners: [],
        start: () => {
          h.length || h.push(n.on(b, d));
        },
        stop: async () => {
          if (h.length == 0) return;
          let A = h;
          h = [], await Promise.all(A), n.off(b, d);
        }
      }, c.set(i, f);
    }
    return f;
  }
  let He = Promise.resolve();
  async function hr(r, e, t, n) {
    await He;
    const s = await ye(r, e);
    if (!s) return false;
    const i = s.listeners.length;
    return s.listeners = s.listeners.filter(({ listener: a, once: o }) => {
      const c = Array.from(t);
      n && c.push(n(o ? null : a));
      try {
        a.call(r, ...c);
      } catch {
      }
      return !o;
    }), s.listeners.length === 0 && (s.stop(), U(r).subs.delete(s.tag)), i > 0;
  }
  async function ze(r, e, t, n) {
    try {
      await He;
    } catch {
    }
    const s = hr(r, e, t, n);
    return He = s, await s;
  }
  const Ie = [
    "then"
  ];
  _a = Pe;
  const _oe = class _oe {
    constructor(e, t, n, s) {
      __publicField(this, "target");
      __publicField(this, "interface");
      __publicField(this, "runner");
      __publicField(this, "filters");
      __publicField(this, _a);
      __publicField(this, "fallback");
      l(typeof e == "string" || qt(e), "invalid value for Contract target", "target", e), n == null && (n = null);
      const i = H.from(t);
      m(this, {
        target: e,
        runner: n,
        interface: i
      }), Object.defineProperty(this, Pe, {
        value: {}
      });
      let a, o = null, c = null;
      if (s) {
        const b = se(n);
        c = new je(this.interface, b, s);
      }
      let f = /* @__PURE__ */ new Map();
      if (typeof e == "string") if (z(e)) o = e, a = Promise.resolve(e);
      else {
        const b = ue(n, "resolveName");
        if (!Be(b)) throw me("contract runner does not support name resolution", "UNSUPPORTED_OPERATION", {
          operation: "resolveName"
        });
        a = b.resolveName(e).then((d) => {
          if (d == null) throw me("an ENS name used for a contract target must be correctly configured", "UNCONFIGURED_NAME", {
            value: e
          });
          return U(this).addr = d, d;
        });
      }
      else a = e.getAddress().then((b) => {
        if (b == null) throw new Error("TODO");
        return U(this).addr = b, b;
      });
      dr(this, {
        addrPromise: a,
        addr: o,
        deployTx: c,
        subs: f
      });
      const u = new Proxy({}, {
        get: (b, d, h) => {
          if (typeof d == "symbol" || Ie.indexOf(d) >= 0) return Reflect.get(b, d, h);
          try {
            return this.getEvent(d);
          } catch (T) {
            if (!de(T, "INVALID_ARGUMENT") || T.argument !== "key") throw T;
          }
        },
        has: (b, d) => Ie.indexOf(d) >= 0 ? Reflect.has(b, d) : Reflect.has(b, d) || this.interface.hasEvent(String(d))
      });
      return m(this, {
        filters: u
      }), m(this, {
        fallback: i.receive || i.fallback ? ur(this) : null
      }), new Proxy(this, {
        get: (b, d, h) => {
          if (typeof d == "symbol" || d in b || Ie.indexOf(d) >= 0) return Reflect.get(b, d, h);
          try {
            return b.getFunction(d);
          } catch (T) {
            if (!de(T, "INVALID_ARGUMENT") || T.argument !== "key") throw T;
          }
        },
        has: (b, d) => typeof d == "symbol" || d in b || Ie.indexOf(d) >= 0 ? Reflect.has(b, d) : b.interface.hasFunction(d)
      });
    }
    connect(e) {
      return new _oe(this.target, this.interface, e);
    }
    attach(e) {
      return new _oe(e, this.interface, this.runner);
    }
    async getAddress() {
      return await U(this).addrPromise;
    }
    async getDeployedCode() {
      const e = se(this.runner);
      y(e, "runner does not support .provider", "UNSUPPORTED_OPERATION", {
        operation: "getDeployedCode"
      });
      const t = await e.getCode(await this.getAddress());
      return t === "0x" ? null : t;
    }
    async waitForDeployment() {
      const e = this.deploymentTransaction();
      if (e) return await e.wait(), this;
      if (await this.getDeployedCode() != null) return this;
      const n = se(this.runner);
      return y(n != null, "contract runner does not support .provider", "UNSUPPORTED_OPERATION", {
        operation: "waitForDeployment"
      }), new Promise((s, i) => {
        const a = async () => {
          try {
            if (await this.getDeployedCode() != null) return s(this);
            n.once("block", a);
          } catch (o) {
            i(o);
          }
        };
        a();
      });
    }
    deploymentTransaction() {
      return U(this).deployTx;
    }
    getFunction(e) {
      return typeof e != "string" && (e = e.format()), lr(this, e);
    }
    getEvent(e) {
      return typeof e != "string" && (e = e.format()), br(this, e);
    }
    async queryTransaction(e) {
      throw new Error("@TODO");
    }
    async queryFilter(e, t, n) {
      t == null && (t = 0), n == null && (n = "latest");
      const { addr: s, addrPromise: i } = U(this), a = s || await i, { fragment: o, topics: c } = await tt(this, e), f = {
        address: a,
        topics: c,
        fromBlock: t,
        toBlock: n
      }, u = se(this.runner);
      return y(u, "contract runner does not have a provider", "UNSUPPORTED_OPERATION", {
        operation: "queryFilter"
      }), (await u.getLogs(f)).map((b) => {
        let d = o;
        if (d == null) try {
          d = this.interface.getEvent(b.topics[0]);
        } catch {
        }
        if (d) try {
          return new qe(b, this.interface, d);
        } catch (h) {
          return new pn(b, h);
        }
        return new Le(b, u);
      });
    }
    async on(e, t) {
      const n = await Ut(this, "on", e);
      return n.listeners.push({
        listener: t,
        once: false
      }), n.start(), this;
    }
    async once(e, t) {
      const n = await Ut(this, "once", e);
      return n.listeners.push({
        listener: t,
        once: true
      }), n.start(), this;
    }
    async emit(e, ...t) {
      return await ze(this, e, t, null);
    }
    async listenerCount(e) {
      if (e) {
        const s = await ye(this, e);
        return s ? s.listeners.length : 0;
      }
      const { subs: t } = U(this);
      let n = 0;
      for (const { listeners: s } of t.values()) n += s.length;
      return n;
    }
    async listeners(e) {
      if (e) {
        const s = await ye(this, e);
        return s ? s.listeners.map(({ listener: i }) => i) : [];
      }
      const { subs: t } = U(this);
      let n = [];
      for (const { listeners: s } of t.values()) n = n.concat(s.map(({ listener: i }) => i));
      return n;
    }
    async off(e, t) {
      const n = await ye(this, e);
      if (!n) return this;
      if (t) {
        const s = n.listeners.map(({ listener: i }) => i).indexOf(t);
        s >= 0 && n.listeners.splice(s, 1);
      }
      return (t == null || n.listeners.length === 0) && (n.stop(), U(this).subs.delete(n.tag)), this;
    }
    async removeAllListeners(e) {
      if (e) {
        const t = await ye(this, e);
        if (!t) return this;
        t.stop(), U(this).subs.delete(t.tag);
      } else {
        const { subs: t } = U(this);
        for (const { tag: n, stop: s } of t.values()) s(), t.delete(n);
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
      class t extends _oe {
        constructor(s, i = null) {
          super(s, e, i);
        }
      }
      return t;
    }
    static from(e, t, n) {
      return n == null && (n = null), new this(e, t, n);
    }
  };
  let oe = _oe;
  function yr() {
    return oe;
  }
  class mr extends yr() {
  }
  class nt {
    constructor(e, t, n) {
      __publicField(this, "interface");
      __publicField(this, "bytecode");
      __publicField(this, "runner");
      const s = H.from(e);
      t instanceof Uint8Array || (typeof t == "object" && (t = t.object), t.startsWith("0x") || (t = "0x" + t)), t = O(L(t)), m(this, {
        bytecode: t,
        interface: s,
        runner: n || null
      });
    }
    attach(e) {
      return new oe(e, this.interface, this.runner);
    }
    async getDeployTransaction(...e) {
      let t = {};
      const n = this.interface.deploy;
      if (n.inputs.length + 1 === e.length && (t = await et(e.pop())), n.inputs.length !== e.length) throw new Error("incorrect number of arguments to constructor");
      const s = await Tn(this.runner, n.inputs, e), i = ie([
        this.bytecode,
        this.interface.encodeDeploy(s)
      ]);
      return Object.assign({}, t, {
        data: i
      });
    }
    async deploy(...e) {
      const t = await this.getDeployTransaction(...e);
      y(this.runner && typeof this.runner.sendTransaction == "function", "factory runner does not support sending transactions", "UNSUPPORTED_OPERATION", {
        operation: "sendTransaction"
      });
      const n = await this.runner.sendTransaction(t), s = O0(n);
      return new oe(s, this.interface, this.runner, n);
    }
    connect(e) {
      return new nt(this.interface, this.bytecode, e);
    }
    static fromSolidity(e, t) {
      l(e != null, "bad compiler output", "output", e), typeof e == "string" && (e = JSON.parse(e));
      const n = e.abi;
      let s = "";
      return e.bytecode ? s = e.bytecode : e.evm && e.evm.bytecode && (s = e.evm.bytecode), new this(n, s, t);
    }
  }
  const Re = [
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
          internalType: "uint32",
          name: "index",
          type: "uint32"
        }
      ],
      name: "GuardianSetAdded",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "sender",
          type: "address"
        },
        {
          indexed: false,
          internalType: "uint64",
          name: "sequence",
          type: "uint64"
        },
        {
          indexed: false,
          internalType: "uint32",
          name: "nonce",
          type: "uint32"
        },
        {
          indexed: false,
          internalType: "bytes",
          name: "payload",
          type: "bytes"
        },
        {
          indexed: false,
          internalType: "uint8",
          name: "consistencyLevel",
          type: "uint8"
        }
      ],
      name: "LogMessagePublished",
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
      stateMutability: "payable",
      type: "fallback"
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
      name: "getCurrentGuardianSetIndex",
      outputs: [
        {
          internalType: "uint32",
          name: "",
          type: "uint32"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "uint32",
          name: "index",
          type: "uint32"
        }
      ],
      name: "getGuardianSet",
      outputs: [
        {
          components: [
            {
              internalType: "address[]",
              name: "keys",
              type: "address[]"
            },
            {
              internalType: "uint32",
              name: "expirationTime",
              type: "uint32"
            }
          ],
          internalType: "struct Structs.GuardianSet",
          name: "",
          type: "tuple"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "getGuardianSetExpiry",
      outputs: [
        {
          internalType: "uint32",
          name: "",
          type: "uint32"
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
      name: "initialize",
      outputs: [],
      stateMutability: "nonpayable",
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
      inputs: [],
      name: "messageFee",
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
          name: "emitter",
          type: "address"
        }
      ],
      name: "nextSequence",
      outputs: [
        {
          internalType: "uint64",
          name: "",
          type: "uint64"
        }
      ],
      stateMutability: "view",
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
      name: "parseAndVerifyVM",
      outputs: [
        {
          components: [
            {
              internalType: "uint8",
              name: "version",
              type: "uint8"
            },
            {
              internalType: "uint32",
              name: "timestamp",
              type: "uint32"
            },
            {
              internalType: "uint32",
              name: "nonce",
              type: "uint32"
            },
            {
              internalType: "uint16",
              name: "emitterChainId",
              type: "uint16"
            },
            {
              internalType: "bytes32",
              name: "emitterAddress",
              type: "bytes32"
            },
            {
              internalType: "uint64",
              name: "sequence",
              type: "uint64"
            },
            {
              internalType: "uint8",
              name: "consistencyLevel",
              type: "uint8"
            },
            {
              internalType: "bytes",
              name: "payload",
              type: "bytes"
            },
            {
              internalType: "uint32",
              name: "guardianSetIndex",
              type: "uint32"
            },
            {
              components: [
                {
                  internalType: "bytes32",
                  name: "r",
                  type: "bytes32"
                },
                {
                  internalType: "bytes32",
                  name: "s",
                  type: "bytes32"
                },
                {
                  internalType: "uint8",
                  name: "v",
                  type: "uint8"
                },
                {
                  internalType: "uint8",
                  name: "guardianIndex",
                  type: "uint8"
                }
              ],
              internalType: "struct Structs.Signature[]",
              name: "signatures",
              type: "tuple[]"
            },
            {
              internalType: "bytes32",
              name: "hash",
              type: "bytes32"
            }
          ],
          internalType: "struct Structs.VM",
          name: "vm",
          type: "tuple"
        },
        {
          internalType: "bool",
          name: "valid",
          type: "bool"
        },
        {
          internalType: "string",
          name: "reason",
          type: "string"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "bytes",
          name: "encodedUpgrade",
          type: "bytes"
        }
      ],
      name: "parseContractUpgrade",
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
              name: "chain",
              type: "uint16"
            },
            {
              internalType: "address",
              name: "newContract",
              type: "address"
            }
          ],
          internalType: "struct GovernanceStructs.ContractUpgrade",
          name: "cu",
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
          name: "encodedUpgrade",
          type: "bytes"
        }
      ],
      name: "parseGuardianSetUpgrade",
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
              name: "chain",
              type: "uint16"
            },
            {
              components: [
                {
                  internalType: "address[]",
                  name: "keys",
                  type: "address[]"
                },
                {
                  internalType: "uint32",
                  name: "expirationTime",
                  type: "uint32"
                }
              ],
              internalType: "struct Structs.GuardianSet",
              name: "newGuardianSet",
              type: "tuple"
            },
            {
              internalType: "uint32",
              name: "newGuardianSetIndex",
              type: "uint32"
            }
          ],
          internalType: "struct GovernanceStructs.GuardianSetUpgrade",
          name: "gsu",
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
          internalType: "struct GovernanceStructs.RecoverChainId",
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
          name: "encodedSetMessageFee",
          type: "bytes"
        }
      ],
      name: "parseSetMessageFee",
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
              name: "chain",
              type: "uint16"
            },
            {
              internalType: "uint256",
              name: "messageFee",
              type: "uint256"
            }
          ],
          internalType: "struct GovernanceStructs.SetMessageFee",
          name: "smf",
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
          name: "encodedTransferFees",
          type: "bytes"
        }
      ],
      name: "parseTransferFees",
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
              name: "chain",
              type: "uint16"
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            },
            {
              internalType: "bytes32",
              name: "recipient",
              type: "bytes32"
            }
          ],
          internalType: "struct GovernanceStructs.TransferFees",
          name: "tf",
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
      name: "parseVM",
      outputs: [
        {
          components: [
            {
              internalType: "uint8",
              name: "version",
              type: "uint8"
            },
            {
              internalType: "uint32",
              name: "timestamp",
              type: "uint32"
            },
            {
              internalType: "uint32",
              name: "nonce",
              type: "uint32"
            },
            {
              internalType: "uint16",
              name: "emitterChainId",
              type: "uint16"
            },
            {
              internalType: "bytes32",
              name: "emitterAddress",
              type: "bytes32"
            },
            {
              internalType: "uint64",
              name: "sequence",
              type: "uint64"
            },
            {
              internalType: "uint8",
              name: "consistencyLevel",
              type: "uint8"
            },
            {
              internalType: "bytes",
              name: "payload",
              type: "bytes"
            },
            {
              internalType: "uint32",
              name: "guardianSetIndex",
              type: "uint32"
            },
            {
              components: [
                {
                  internalType: "bytes32",
                  name: "r",
                  type: "bytes32"
                },
                {
                  internalType: "bytes32",
                  name: "s",
                  type: "bytes32"
                },
                {
                  internalType: "uint8",
                  name: "v",
                  type: "uint8"
                },
                {
                  internalType: "uint8",
                  name: "guardianIndex",
                  type: "uint8"
                }
              ],
              internalType: "struct Structs.Signature[]",
              name: "signatures",
              type: "tuple[]"
            },
            {
              internalType: "bytes32",
              name: "hash",
              type: "bytes32"
            }
          ],
          internalType: "struct Structs.VM",
          name: "vm",
          type: "tuple"
        }
      ],
      stateMutability: "pure",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "uint32",
          name: "nonce",
          type: "uint32"
        },
        {
          internalType: "bytes",
          name: "payload",
          type: "bytes"
        },
        {
          internalType: "uint8",
          name: "consistencyLevel",
          type: "uint8"
        }
      ],
      name: "publishMessage",
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
          internalType: "uint256",
          name: "numGuardians",
          type: "uint256"
        }
      ],
      name: "quorum",
      outputs: [
        {
          internalType: "uint256",
          name: "numSignaturesRequiredForQuorum",
          type: "uint256"
        }
      ],
      stateMutability: "pure",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "bytes",
          name: "_vm",
          type: "bytes"
        }
      ],
      name: "submitContractUpgrade",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "bytes",
          name: "_vm",
          type: "bytes"
        }
      ],
      name: "submitNewGuardianSet",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "bytes",
          name: "_vm",
          type: "bytes"
        }
      ],
      name: "submitRecoverChainId",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "bytes",
          name: "_vm",
          type: "bytes"
        }
      ],
      name: "submitSetMessageFee",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "bytes",
          name: "_vm",
          type: "bytes"
        }
      ],
      name: "submitTransferFees",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "hash",
          type: "bytes32"
        },
        {
          components: [
            {
              internalType: "bytes32",
              name: "r",
              type: "bytes32"
            },
            {
              internalType: "bytes32",
              name: "s",
              type: "bytes32"
            },
            {
              internalType: "uint8",
              name: "v",
              type: "uint8"
            },
            {
              internalType: "uint8",
              name: "guardianIndex",
              type: "uint8"
            }
          ],
          internalType: "struct Structs.Signature[]",
          name: "signatures",
          type: "tuple[]"
        },
        {
          components: [
            {
              internalType: "address[]",
              name: "keys",
              type: "address[]"
            },
            {
              internalType: "uint32",
              name: "expirationTime",
              type: "uint32"
            }
          ],
          internalType: "struct Structs.GuardianSet",
          name: "guardianSet",
          type: "tuple"
        }
      ],
      name: "verifySignatures",
      outputs: [
        {
          internalType: "bool",
          name: "valid",
          type: "bool"
        },
        {
          internalType: "string",
          name: "reason",
          type: "string"
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
              name: "version",
              type: "uint8"
            },
            {
              internalType: "uint32",
              name: "timestamp",
              type: "uint32"
            },
            {
              internalType: "uint32",
              name: "nonce",
              type: "uint32"
            },
            {
              internalType: "uint16",
              name: "emitterChainId",
              type: "uint16"
            },
            {
              internalType: "bytes32",
              name: "emitterAddress",
              type: "bytes32"
            },
            {
              internalType: "uint64",
              name: "sequence",
              type: "uint64"
            },
            {
              internalType: "uint8",
              name: "consistencyLevel",
              type: "uint8"
            },
            {
              internalType: "bytes",
              name: "payload",
              type: "bytes"
            },
            {
              internalType: "uint32",
              name: "guardianSetIndex",
              type: "uint32"
            },
            {
              components: [
                {
                  internalType: "bytes32",
                  name: "r",
                  type: "bytes32"
                },
                {
                  internalType: "bytes32",
                  name: "s",
                  type: "bytes32"
                },
                {
                  internalType: "uint8",
                  name: "v",
                  type: "uint8"
                },
                {
                  internalType: "uint8",
                  name: "guardianIndex",
                  type: "uint8"
                }
              ],
              internalType: "struct Structs.Signature[]",
              name: "signatures",
              type: "tuple[]"
            },
            {
              internalType: "bytes32",
              name: "hash",
              type: "bytes32"
            }
          ],
          internalType: "struct Structs.VM",
          name: "vm",
          type: "tuple"
        }
      ],
      name: "verifyVM",
      outputs: [
        {
          internalType: "bool",
          name: "valid",
          type: "bool"
        },
        {
          internalType: "string",
          name: "reason",
          type: "string"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      stateMutability: "payable",
      type: "receive"
    }
  ], Ct = "0x60808060405234610016576130a2908161001c8239f35b600080fdfe60806040526004361015610018575b366120d257612105565b60003560e01c80630319e59c146101e857806304ca84cf146101e3578063178149e7146101de5780631a90a219146101d95780631cfe7951146101d45780632c3c02a4146101cf5780634cf842b5146101ca5780634fdc60fa146101c5578063515f3247146101c05780635cb8cae2146101bb57806364d42b17146101b65780636606b4e0146101b15780638129fc1c146101ac578063875be02a146101a757806393df337e146101a25780639a8a05921461019d578063a0cce1b314610198578063a9e1189314610193578063b172b2221461018e578063b19a437e14610189578063c0fd8bde14610184578063cb4cfea81461017f578063d60b347f1461017a578063e039f22414610175578063eb8d3f1214610170578063f42bc6411461016b578063f8ce560a14610166578063f951975a146101615763fbe3c2cd0361000e576112d5565b61129d565b611277565b611203565b6111dd565b6111bc565b61117d565b611137565b6110d2565b610f96565b610f78565b610f50565b610d51565b610d2f565b610c78565b610b50565b610913565b6107c5565b6107a7565b6106d4565b61068e565b61063f565b6105fc565b61059b565b610577565b610559565b610476565b610409565b610363565b634e487b7160e01b600052604160045260246000fd5b608081019081106001600160401b0382111761021e57604052565b6101ed565b604081019081106001600160401b0382111761021e57604052565b60a081019081106001600160401b0382111761021e57604052565b606081019081106001600160401b0382111761021e57604052565b90601f801991011681019081106001600160401b0382111761021e57604052565b6040519061016082018281106001600160401b0382111761021e57604052565b604051906102c282610223565b565b6001600160401b03811161021e57601f01601f191660200190565b9291926102eb826102c4565b916102f96040519384610274565b829481845281830111610316578281602093846000960137010152565b600080fd5b9080601f8301121561031657816020610336933591016102df565b90565b602060031982011261031657600435906001600160401b038211610316576103369160040161031b565b346103165760a061037b61037636610339565b611dc4565b6080604051918051835260ff602082015116602084015261ffff60408201511660408401526060810151606084015201516080820152f35b906040810191805190604083528151809452606083019360208093019060005b8181106103ec5750505081015163ffffffff1691015290565b82516001600160a01b0316875295840195918401916001016103d3565b346103165761041f61041a36610339565b611b9f565b6040518091602082528051602083015260ff602082015116604083015261ffff604082015116606083015263ffffffff6080610469606084015160a08387015260c08601906103b3565b9201511660a08301520390f35b346103165761048436610339565b600854461461052757610513606061049e6105259361287e565b6104b06104aa8261185b565b906113b0565b61050a6104c060e0830151611e9d565b916104d163436f7265845114611459565b61050461014060408501926104e8468551146115ab565b015160005260056020526040600020600160ff19825416179055565b51612ca6565b015161ffff1690565b61ffff1661ffff196000541617600055565b005b60405162461bcd60e51b815260206004820152600a6024820152696e6f74206120666f726b60b01b6044820152606490fd5b34610316576000366003190112610316576020600754604051908152f35b3461031657600036600319011261031657602063ffffffff60035416604051908152f35b346103165760203660031901126103165760206105c8600435600052600560205260ff6040600020541690565b6040519015158152f35b600435906001600160a01b038216820361031657565b35906001600160a01b038216820361031657565b34610316576020366003190112610316576001600160a01b0361061d6105d2565b16600052600460205260206001600160401b0360406000205416604051908152f35b3461031657608061065761065236610339565b611a0c565b604051908051825260ff602082015116602083015261ffff6040820151166040830152606060018060a01b03910151166060820152f35b346103165760806106a66106a136610339565b611ce1565b6060604051918051835260ff602082015116602084015261ffff604082015116604084015201516060820152f35b34610316576106e236610339565b60085446036107735761076e60606106fc6105259361287e565b6107086104aa8261185b565b61076061014061071b60e0840151611a0c565b9261072c63436f72658551146113e0565b6104e861073e604086015161ffff1690565b61ffff61075861075160005461ffff1690565b61ffff1690565b91161461141d565b01516001600160a01b031690565b61163e565b60405162461bcd60e51b815260206004820152600c60248201526b696e76616c696420666f726b60a01b6044820152606490fd5b34610316576000366003190112610316576020600854604051908152f35b34610316576105256108d96107e16107dc36610339565b61287e565b6107ed6104aa8261185b565b6108cf6107fd60e0830151611b9f565b61080d63436f7265825114611459565b61084b61081f604083015161ffff1690565b61ffff61083261075160005461ffff1690565b911690811490816108f8575b81156108ef575b50611496565b6108a9610140608060608401936108668551515115156114d2565b01946104e8610879875163ffffffff1690565b63ffffffff6108a161089861089360035463ffffffff1690565b611534565b63ffffffff1690565b911614611549565b6108c06108bb60035463ffffffff1690565b612b24565b51825163ffffffff1690612c1b565b5163ffffffff1690565b63ffffffff1663ffffffff196003541617600355565b90501538610845565b905061090d61090960085446141590565b1590565b9061083e565b34610316576000806003193601126109cc577f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b03168082526006602052604082205460ff16610991576001600160a01b03166000908152600660205260409020805460ff1916600117905561098e611f42565b80f35b60405162461bcd60e51b8152602060048201526013602482015272185b1c9958591e481a5b9a5d1a585b1a5e9959606a1b6044820152606490fd5b80fd5b6044359060ff8216820361031657565b359060ff8216820361031657565b6004359063ffffffff8216820361031657565b359063ffffffff8216820361031657565b359061ffff8216820361031657565b35906001600160401b038216820361031657565b6001600160401b03811161021e5760051b60200190565b81601f8201121561031657803590610a6282610a34565b92604092610a7284519586610274565b808552602091828087019260071b85010193818511610316578301915b848310610a9f5750505050505090565b60808383031261031657836080918751610ab881610203565b853581528286013583820152610acf8987016109df565b898201526060610ae08188016109df565b90820152815201920191610a8f565b60005b838110610b025750506000910152565b8181015183820152602001610af2565b90602091610b2b81518092818552858086019101610aef565b601f01601f1916010190565b6040906103369392151581528160208201520190610b12565b346103165760031960203682011261031657600435906001600160401b03908183116103165761016090833603011261031657610b8b610295565b90610b98836004016109df565b8252610ba660248401610a00565b6020830152610bb760448401610a00565b6040830152610bc860648401610a11565b606083015260848301356080830152610be360a48401610a20565b60a0830152610bf460c484016109df565b60c083015260e483013581811161031657610c15906004369186010161031b565b60e0830152610c276101048401610a00565b61010083015261012483013590811161031657610c6492610c516101449260043691840101610a4b565b61012084015201356101408201526123f9565b90610c7460405192839283610b37565b0390f35b3461031657610ce2610140610c8f6107dc36610339565b610c9b6104aa8261185b565b6104e8610cab60e0830151611dc4565b610cbb63436f7265825114611459565b604081015161ffff1690600095869586958695869561ffff610832610751895461ffff1690565b6080810151606090610d0c90610d009081906001600160a01b031681565b6001600160a01b031690565b91015190828215610d26575bf115610d215780f35b61159f565b506108fc610d18565b3461031657600036600319011261031657602061ffff60005416604051908152f35b3461031657600319606036820112610316576001600160401b0360243581811161031657610d83903690600401610a4b565b604435928284116103165760409084360301126103165760405191610da783610223565b8360040135908111610316578301923660238501121561031657600484013593610dd085610a34565b90610dde6040519283610274565b85825260209560248784019160051b8301019136831161031657602401905b828210610e26575050506024610c649592610e1a92865201610a00565b9083015260043561268d565b878091610e32846105e8565b815201910190610dfd565b90815180825260208080930193019160005b828110610e5d575050505090565b835180518652808301518684015260408082015160ff90811691880191909152606091820151169086015260809094019392810192600101610e4f565b805160ff1682529060208281015163ffffffff169082015260408281015163ffffffff169082015260608281015161ffff169082015260808201516080820152610ef460a083015160a08301906001600160401b03169052565b60c08281015160ff1690820152610f42610f1d60e08401516101608060e0860152840190610b12565b6101008481015163ffffffff1690840152610120808501519084830390850152610e3d565b916101408091015191015290565b3461031657610c74610f646107dc36610339565b604051918291602083526020830190610e9a565b34610316576000366003190112610316576020600154604051908152f35b606036600319011261031657610faa6109ed565b6001600160401b0360243581811161031657610fca90369060040161031b565b91610fd36109cf565b91600754340361107457336000526004602052806040600020541692600184019482861161106f57610c74957f6eb224fb001ed210e379b335e35efe88672a8ce935d981a6896b27ffdf52a3b293336000526004602052604060002091166001600160401b031982541617905561105260405192839233968885611f06565b0390a26040516001600160401b0390911681529081906020820190565b61151e565b60405162461bcd60e51b815260206004820152600b60248201526a696e76616c69642066656560a81b6044820152606490fd5b6110bd6103369492606083526060830190610e9a565b92151560208201526040818403910152610b12565b34610316576020366003190112610316576001600160401b03600435818111610316573660238201121561031657806004013591821161031657366024838301011161031657610c7491602461112892016121c5565b604093919351938493846110a7565b3461031657608061114f61114a36610339565b611e9d565b61ffff6060604051928051845260ff6020820151166020850152604081015160408501520151166060820152f35b34610316576020366003190112610316576001600160a01b0361119e6105d2565b166000526006602052602060ff604060002054166040519015158152f35b34610316576000366003190112610316576020600854604051904614158152f35b3461031657600036600319011261031657602060035463ffffffff60405191831c168152f35b346103165760606112166107dc36610339565b6112226104aa8261185b565b61126561014061123560e0840151611ce1565b9261124663436f72658551146113e0565b61ffff806040860151169060005416148061126c575b6104e89061141d565b0151600755005b50600854461461125c565b34610316576020366003190112610316576020611295600435612ac1565b604051908152f35b3461031657602036600319011261031657610c746112c16112bc6109ed565b611314565b6040519182916020835260208301906103b3565b3461031657600036600319011261031657602061ffff60005460101c16604051908152f35b6040519061130782610223565b6000602083606081520152565b63ffffffff906113226112fa565b50166000526020600281526040600020906040519161134083610223565b6040518083835491828152019083600052846000209060005b8181106113935750505061033693928261137a611387946001940382610274565b8652015463ffffffff1690565b63ffffffff1690830152565b82546001600160a01b031684529286019260019283019201611359565b156113b85750565b60405162461bcd60e51b8152602060048201529081906113dc906024830190610b12565b0390fd5b156113e757565b60405162461bcd60e51b815260206004820152600e60248201526d496e76616c6964204d6f64756c6560901b6044820152606490fd5b1561142457565b60405162461bcd60e51b815260206004820152600d60248201526c24b73b30b634b21021b430b4b760991b6044820152606490fd5b1561146057565b60405162461bcd60e51b815260206004820152600e60248201526d696e76616c6964204d6f64756c6560901b6044820152606490fd5b1561149d57565b60405162461bcd60e51b815260206004820152600d60248201526c34b73b30b634b21021b430b4b760991b6044820152606490fd5b156114d957565b60405162461bcd60e51b815260206004820152601960248201527f6e657720677561726469616e2073657420697320656d707479000000000000006044820152606490fd5b634e487b7160e01b600052601160045260246000fd5b90600163ffffffff8093160191821161106f57565b1561155057565b60405162461bcd60e51b815260206004820152602160248201527f696e646578206d75737420696e63726561736520696e207374657073206f66206044820152603160f81b6064820152608490fd5b6040513d6000823e3d90fd5b156115b257565b60405162461bcd60e51b815260206004820152601160248201527034b73b30b634b21022ab269021b430b4b760791b6044820152606490fd5b60405190602082018281106001600160401b0382111761021e5760405260008252565b3d15611639573d9061161f826102c4565b9161162d6040519384610274565b82523d6000602084013e565b606090565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc908154813b1561170d577f2e4cc16c100f0b55e2df82ab0b1a7e294aa9cbd01b48fbaf622683fbc0507a499060018060a01b039081841694856bffffffffffffffffffffffff60a01b8316179055611707604051600080968192897fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b8480a263204a7f0760e21b6020820190815260048252906116fb81610223565b51915af46104aa61160e565b169180a3565b60405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b6064820152608490fd5b6040519061177582610259565b6022825261195d60f21b6040837f6e6f74207369676e65642062792063757272656e7420677561726469616e207360208201520152565b604051906117b982610223565b60168252753bb937b7339033b7bb32b93730b731b29031b430b4b760511b6020830152565b604051906117eb82610223565b601982527f77726f6e6720676f7665726e616e636520636f6e7472616374000000000000006020830152565b6040519061182482610259565b6022825261195960f21b6040837f676f7665726e616e636520616374696f6e20616c726561647920636f6e73756d60208201520152565b611864816123f9565b9015611924575061010081015163ffffffff1663ffffffff61188e61089860035463ffffffff1690565b91160361191857606081015161ffff1661ffff6118b561075160005461ffff9060101c1690565b91160361190c57608081015160015403611900576101406118e6910151600052600560205260ff6040600020541690565b6118f5576001906103366115eb565b600090610336611817565b506000906103366117de565b506000906103366117ac565b50600090610336611768565b600092909150565b6040519061193982610203565b60006060838281528260208201528260408201520152565b906020820180921161106f57565b906001820180921161106f57565b906002820180921161106f57565b906004820180921161106f57565b906014820180921161106f57565b906008820180921161106f57565b90601f820180921161106f57565b9190820180921161106f57565b156119c757565b60405162461bcd60e51b815260206004820152601760248201527f696e76616c696420436f6e7472616374557067726164650000000000000000006044820152606490fd5b90611a1561192c565b91611a1f81613030565b8352611a3e600160ff611a3184612e51565b16806020870152146119c0565b61ffff611a4a82612ee8565b1660408401526043815110611a79576043818101516001600160a01b0316606085015290516102c291146119c0565b60405162461bcd60e51b8152602060048201526015602482015274746f427974657333325f6f75744f66426f756e647360581b6044820152606490fd5b60405190611ac38261023e565b6000608083828152826020820152826040820152611adf6112fa565b60608201520152565b15611aef57565b60405162461bcd60e51b815260206004820152601a60248201527f696e76616c696420477561726469616e536574557067726164650000000000006044820152606490fd5b90611b3e82610a34565b611b4b6040519182610274565b8281528092611b5c601f1991610a34565b0190602036910137565b600019811461106f5760010190565b8051821015611b895760209160051b010190565b634e487b7160e01b600052603260045260246000fd5b90611ba8611ab6565b91611bb281613030565b8352611bdb600260ff611bd4611bc785612e51565b60ff166020880181905290565b1614611ae8565b611bf2611be782612ee8565b61ffff166040850152565b611c0b611bfe82612fac565b63ffffffff166080850152565b611c1481612ebc565b60ff6028911691611c2483611b34565b92611c2d6102b5565b93845260006020850152606086019384526000935b818510611c575750506102c292505114611ae8565b909192611c8e81611c89611c6e611c949488612df5565b611c7a89875151611b75565b6001600160a01b039091169052565b611989565b94611b66565b93929190611c42565b15611ca457565b60405162461bcd60e51b8152602060048201526015602482015274696e76616c6964205365744d65737361676546656560581b6044820152606490fd5b90611cea61192c565b91611cf481613030565b8352611d13600360ff611d0684612e51565b1680602087015214611c9d565b61ffff611d1f82612ee8565b1660408401526043815110611d4457604381816102c293015160608601525114611c9d565b60405162461bcd60e51b8152602060048201526015602482015274746f55696e743235365f6f75744f66426f756e647360581b6044820152606490fd5b15611d8857565b60405162461bcd60e51b8152602060048201526014602482015273696e76616c6964205472616e736665724665657360601b6044820152606490fd5b9060405191611dd28361023e565b60008352602083019060008252604084019060008252606085019160008352611e20600460808801956000875288611e0986613030565b905260ff611e1686612e51565b1680915214611d81565b61ffff611e2c83612ee8565b1690526043815110611d44576102c29260639260438301519052611e4f82613040565b90525114611d81565b15611e5f57565b60405162461bcd60e51b81526020600482015260166024820152751a5b9d985b1a5908149958dbdd995c90da185a5b925960521b6044820152606490fd5b90611ea661192c565b91611eb081613030565b8352611ecf600560ff611ec284612e51565b1680602087015214611e58565b6041815110611d445760438160416102c29301516040860152611eff611ef482612f34565b61ffff166060870152565b5114611e58565b92611f3b9063ffffffff6060946001600160401b0360ff95999899168752166020860152608060408601526080850190610b12565b9416910152565b60085415611f4c57565b61ffff611f5c60005461ffff1690565b1660028103611f7057506102c26001612ca6565b60048103611f8357506102c26038612ca6565b60058103611f9657506102c26089612ca6565b60068103611faa57506102c261a86a612ca6565b60078103611fbe57506102c261a516612ca6565b60098103611fd457506102c2634e454152612ca6565b600a8103611fe757506102c260fa612ca6565b600b8103611ffb57506102c26102ae612ca6565b600c810361200f57506102c2610313612ca6565b600d810361202357506102c2612019612ca6565b600e810361203757506102c261a4ec612ca6565b6010810361204b57506102c2610504612ca6565b6011810361206157506102c2630e9ac0d6612ca6565b6017810361207557506102c261a4b1612ca6565b6018810361208857506102c2600a612ca6565b601903612099576102c26064612ca6565b60405162461bcd60e51b81526020600482015260116024820152702ab735b737bbb71031b430b4b71034b21760791b6044820152606490fd5b60405162461bcd60e51b815260206004820152600b60248201526a1d5b9cdd5c1c1bdc9d195960aa1b6044820152606490fd5b60405162461bcd60e51b815260206004820152602c60248201527f74686520576f726d686f6c6520636f6e747261637420646f6573206e6f74206160448201526b63636570742061737365747360a01b6064820152608490fd5b6040519061016082018281106001600160401b0382111761021e57604052816101406000918281528260208201528260408201528260608201528260808201528260a08201528260c0820152606060e08201528261010082015260606101208201520152565b6107dc906121dd926121d561215f565b5036916102df565b906121e782612325565b9091565b94929060339796949263ffffffff60e01b809260e01b16875260e01b16600486015261ffff60f01b9060f01b166008850152600a8401526001600160401b0360c01b9060c01b16602a83015260ff60f81b9060f81b1660328201526122598251809360208685019101610aef565b010190565b6040519061226b82610223565b601a82527f766d2e6861736820646f65736e2774206d6174636820626f64790000000000006020830152565b604051906122a482610223565b60148252731a5b9d985b1a590819dd585c991a585b881cd95d60621b6020830152565b604051906122d482610223565b601882527f677561726469616e2073657420686173206578706972656400000000000000006020830152565b6040519061230d82610223565b60098252686e6f2071756f72756d60b81b6020830152565b610100810161233b6112bc825163ffffffff1690565b90815151156123eb575163ffffffff1661235d61089860035463ffffffff1690565b63ffffffff809216141590816123ce575b506123c1576101208201805151612386835151612ac1565b116123b35761014061239c93015190519061268d565b90156123ae57506001906103366115eb565b600091565b505050600090610336612300565b50506000906103366122c7565b90506123e1602083015163ffffffff1690565b429116103861236e565b505050600090610336612297565b6101008101906124106112bc835163ffffffff1690565b90612422602082015163ffffffff1690565b604082015163ffffffff169061243d606084015161ffff1690565b9161247a608085015161245a60a08701516001600160401b031690565b60c087015160ff169060e0880151926040519788966020880198896121eb565b039161248e601f1993848101835282610274565b519020906124b860405191826124ac60208201958660209181520190565b03908101835282610274565b5190209261014082019384510361255e578251511561254f575163ffffffff166124ea61089860035463ffffffff1690565b63ffffffff80921614159081612532575b506125245761012001805151612512835151612ac1565b116123b35761239c925190519061268d565b5050506000906103366122c7565b9050612545602084015163ffffffff1690565b42911610386124fb565b50505050600090610336612297565b5050505060009061033661225e565b1561257457565b60405162461bcd60e51b815260206004820152601f60248201527f65637265636f766572206661696c65642077697468207369676e6174757265006044820152606490fd5b156125c057565b60405162461bcd60e51b815260206004820152602360248201527f7369676e617475726520696e6469636573206d75737420626520617363656e64604482015262696e6760e81b6064820152608490fd5b1561261857565b60405162461bcd60e51b815260206004820152601c60248201527f677561726469616e20696e646578206f7574206f6620626f756e6473000000006044820152606490fd5b6040519061266a82610223565b60148252731593481cda59db985d1d5c99481a5b9d985b1a5960621b6020830152565b825151919260009291835b85518110156127b2576126ab8187611b75565b51604060006126bd8284015160ff1690565b8351602080860151945188815260ff93909316838201526040830191909152606082019390935281805260809060015afa15610d215760005160609190612723906001600160a01b03169761271389151561256d565b8415908115612795575b506125b9565b0194612771610d00612764612739895160ff1690565b986127488960ff8c1610612611565b61275e6127588951925160ff1690565b60ff1690565b90611b75565b516001600160a01b031690565b036127845761277f90611b66565b612698565b50505050505060009061033661265d565b90506127a48484015160ff1690565b60ff9182169116113861271d565b5050505050506001906103366115eb565b156127ca57565b60405162461bcd60e51b815260206004820152601760248201527f564d2076657273696f6e20696e636f6d70617469626c650000000000000000006044820152606490fd5b9061281982610a34565b6128266040519182610274565b8281528092612837601f1991610a34565b019060005b82811061284857505050565b60209061285361192c565b8282850101520161283c565b60ff601b9116019060ff821161106f57565b9190820391821161106f57565b9061288761215f565b9161289b61289482612e9c565b60ff168452565b6128b4600160ff6128ad865160ff1690565b16146127c3565b6128ce6128c082612f60565b63ffffffff16610100850152565b6128da61275882612eac565b6006906128e68161280f565b9061012086019182526000915b818310612a205750505090612a086129ec6129ca6129b661299961297f87612929612922612a199a8a51612871565b828a612d69565b602081519101206040516129578161294960208201948560209181520190565b03601f198101835282610274565b5190206101408c015261297a61296d828a612fbc565b63ffffffff1660208d0152565b61197b565b61297a61298c8289612fbc565b63ffffffff1660408c0152565b6129b16129a68288612f44565b61ffff1660608b0152565b61196d565b6129c08186613050565b6080890152611951565b6129e76129d78286612fd8565b6001600160401b031660a0890152565b611997565b612a036129f98285612ecc565b60ff1660c0880152565b61195f565b612a13818351612871565b91612d69565b60e0830152565b909192612ab4612a92612a73612a5784612a03612a40612aba978c612ecc565b6060612a4d8c8b51611b75565b51019060ff169052565b612a61818a613050565b612a6c898851611b75565b5152611951565b612a7d8189613050565b6020612a8a898851611b75565b510152611951565b612a03612aa7612aa2838a612ecc565b61285f565b6040612a4d898851611b75565b93611b66565b91906128f3565b610100811015612aea578060011b908082046002149015171561106f576003610336910461195f565b60405162461bcd60e51b8152602060048201526012602482015271746f6f206d616e7920677561726469616e7360701b6044820152606490fd5b63ffffffff62015180814216019080821161106f576102c29216600052600260205260016040600020019063ffffffff1663ffffffff19825416179055565b9080519081516001600160401b03811161021e5768010000000000000000811161021e578354818555808210612bf2575b506020809301612ba985600052602060002090565b60005b838110612bd7575050505001516001909101805463ffffffff191663ffffffff909216919091179055565b82516001600160a01b03168282015591850191600101612bac565b6000858152826020822092830192015b828110612c10575050612b94565b818155600101612c02565b9081515160005b818110612c485750509063ffffffff6102c2921660005260026020526040600020612b63565b83516001600160a01b0390612c5e908390611b75565b511615612c7357612c6e90611b66565b612c22565b60405162461bcd60e51b815260206004820152600b60248201526a496e76616c6964206b657960a81b6044820152606490fd5b468103612cb257600855565b60405162461bcd60e51b81526020600482015260126024820152711a5b9d985b1a5908195d9b50da185a5b925960721b6044820152606490fd5b15612cf357565b60405162461bcd60e51b815260206004820152600e60248201526d736c6963655f6f766572666c6f7760901b6044820152606490fd5b15612d3057565b60405162461bcd60e51b8152602060048201526011602482015270736c6963655f6f75744f66426f756e647360781b6044820152606490fd5b91612d7e81612d77816119a5565b1015612cec565b612d948351612d8d83856119b3565b1115612d29565b80612dad57505050604051600081526020810160405290565b60405192601f821692831560051b80858701019484860193010101905b808410612de25750508252601f01601f191660405290565b9092835181526020809101930190612dca565b908151601482019081831161106f5710612e1457016020015160601c90565b60405162461bcd60e51b8152602060048201526015602482015274746f416464726573735f6f75744f66426f756e647360581b6044820152606490fd5b6021815110612e61576021015190565b60405162461bcd60e51b8152602060048201526013602482015272746f55696e74385f6f75744f66426f756e647360681b6044820152606490fd5b6001815110612e61576001015190565b6006815110612e61576006015190565b6028815110612e61576028015190565b908151600182019081831161106f5710612e6157016001015190565b6023815110612ef8576023015190565b60405162461bcd60e51b8152602060048201526014602482015273746f55696e7431365f6f75744f66426f756e647360601b6044820152606490fd5b6043815110612ef8576043015190565b908151600282019081831161106f5710612ef857016002015190565b6005815110612f70576005015190565b60405162461bcd60e51b8152602060048201526014602482015273746f55696e7433325f6f75744f66426f756e647360601b6044820152606490fd5b6027815110612f70576027015190565b908151600482019081831161106f5710612f7057016004015190565b908151600882019081831161106f5710612ff457016008015190565b60405162461bcd60e51b8152602060048201526014602482015273746f55696e7436345f6f75744f66426f756e647360601b6044820152606490fd5b6020815110611a79576020015190565b6063815110611a79576063015190565b908151602082019081831161106f5710611a795701602001519056fea2646970667358221220e01f3fc19a7b6f650a08aafb55409b8aa16f0ebf4a5804ec4ce7df76358d349364736f6c63430008130033", gr = (r) => r.length > 1;
  class Je extends nt {
    constructor(...e) {
      gr(e) ? super(...e) : super(Re, Ct, e[0]);
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
      return new H(Re);
    }
    static connect(e, t) {
      return new mr(e, Re, t);
    }
  }
  __publicField(Je, "bytecode", Ct);
  __publicField(Je, "abi", Re);
  kr = Object.freeze(Object.defineProperty({
    __proto__: null,
    Implementation__factory: Je
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  On(Rn, "WormholeCore", We);
});
export {
  We as EvmWormholeCore,
  __tla,
  kr as ethers_contracts
};
