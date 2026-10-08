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
import { g as hr, U as Pn, b as Ki, aZ as Ua, I as Fa, __tla as __tla_0 } from "./api-CvHQAL7j.js";
import { X as Da, $ as Ga, aC as Ma, aN as Ha, W as Qa, c as Ts, aL as Va, aM as Ja, __tla as __tla_1 } from "./wormhole-DW6GpI7E.js";
import { g as Ka, __tla as __tla_2 } from "./balances-C3kDotXO.js";
let _0, Oa, w, Ne, qn, Wa, Ze, dt, za, $, U, Kt, ue, ts, $r, F0, tc, Ct, Tt, co, Ot, R0, Ra, j0, Vi, z0, K0, Ps, D0, J0, V0, Pc, G0, Tc, d, Z, S, x, Yt, M, rt, Zt, k, Ee, su, M0, Zn, H0, tr, st, mc, ht, ss, gt, B, xt;
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
  })()
]).then(async () => {
  var _t2, _t3, _e2, _t4, _e3, _n2, _r2, _s2, _o2, _i2, _a2, _d, _l2, _g, _p, _h, _u2, _f2, _Lt_instances, c_fn, _t5, _e4, _n3, _r3, _s3, _o3, _t6, _t7, _e5, _Sr_instances, n_fn, _t8, _e6, _n4, _r4, _s4, _es_instances, o_fn, i_fn, _t9, _e7, _n5, _r5, _t10, _a3, _t11, _t12, _e8, _n6, _r6, _s5, _o4, _i3, _a4, _d2, _l3, _g2, _p2, _h2, _u3, _f3, _c2, _m, _b, _Ot_instances, y_fn, _b2, _t13, _e9, _n7, _xt_instances, r_fn, _c3, _t14, _e10, _vt_instances, n_fn2, _j_instances, t_fn, _je_instances, t_fn2, _t15, _e11, _n8, _r7, _zt_instances, s_fn, o_fn2, _t16, _t17, _t18, _t19, _t20, _t21, _d3, _t22, _e12, __t_instances, n_fn3, __t_static, r_fn2, _t23, _e13, _t24, _e14, _n9, _t25, _e15, _n10, _r8, _a0_instances, s_fn2, _t26, _e16, _n11, _t27, _e17, _t28, _t29, _t30, _e18, _n12, _r9, _s6, _xs_instances, o_fn3, _t31, _e19, _n13, _r10, _s7, _o5, _i4, _a5, _d4, _l4, _g3, _p3, _h3, _u4, _g0_instances, f_fn, c_fn2, m_fn, b_fn, y_fn2, E_fn, w_fn, A_fn, _Ra_instances, t_fn3, _e20, _t32, _e21, _n14, _r11, _s8, _o6, _Sa_instances, i_fn2, a_fn, _t33, _t34, _e22, _n15, _r12, _s9, _o7, _i5, _I0_instances, a_fn2, _t35, _t36, _f4, _g4;
  za = "6.17.0";
  function _a(r, t, e) {
    const n = t.split("|").map((i) => i.trim());
    for (let i = 0; i < n.length; i++) switch (t) {
      case "any":
        return;
      case "bigint":
      case "boolean":
      case "number":
      case "string":
        if (typeof r === t) return;
    }
    const s = new Error(`invalid value for type ${t}`);
    throw s.code = "INVALID_ARGUMENT", s.argument = `value.${e}`, s.value = r, s;
  }
  ht = async function(r) {
    const t = Object.keys(r);
    return (await Promise.all(t.map((n) => Promise.resolve(r[n])))).reduce((n, s, i) => (n[t[i]] = s, n), {});
  };
  k = function(r, t, e) {
    for (let n in t) {
      let s = t[n];
      const i = e ? e[n] : null;
      i && _a(s, i, n), Object.defineProperty(r, n, {
        enumerable: true,
        value: s,
        writable: false
      });
    }
  };
  function Fe(r, t) {
    if (r == null) return "null";
    if (t == null && (t = /* @__PURE__ */ new Set()), typeof r == "object") {
      if (t.has(r)) return "[Circular]";
      t.add(r);
    }
    if (Array.isArray(r)) return "[ " + r.map((e) => Fe(e, t)).join(", ") + " ]";
    if (r instanceof Uint8Array) {
      const e = "0123456789abcdef";
      let n = "0x";
      for (let s = 0; s < r.length; s++) n += e[r[s] >> 4], n += e[r[s] & 15];
      return n;
    }
    if (typeof r == "object" && typeof r.toJSON == "function") return Fe(r.toJSON(), t);
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
        const e = Object.keys(r);
        return e.sort(), "{ " + e.map((n) => `${Fe(n, t)}: ${Fe(r[n], t)}`).join(", ") + " }";
      }
    }
    return "[ COULD NOT SERIALIZE ]";
  }
  function lt(r, t) {
    return r && r.code === t;
  }
  function Xr(r) {
    return lt(r, "CALL_EXCEPTION");
  }
  function Y(r, t, e) {
    let n = r;
    {
      const i = [];
      if (e) {
        if ("message" in e || "code" in e || "name" in e) throw new Error(`value will overwrite populated values: ${Fe(e)}`);
        for (const o in e) {
          if (o === "shortMessage") continue;
          const a = e[o];
          i.push(o + "=" + Fe(a));
        }
      }
      i.push(`code=${t}`), i.push(`version=${za}`), i.length && (r += " (" + i.join(", ") + ")");
    }
    let s;
    switch (t) {
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
    return k(s, {
      code: t
    }), e && Object.assign(s, e), s.shortMessage == null && k(s, {
      shortMessage: n
    }), s;
  }
  w = function(r, t, e, n) {
    if (!r) throw Y(t, e, n);
  };
  d = function(r, t, e, n) {
    w(r, t, "INVALID_ARGUMENT", {
      argument: e,
      value: n
    });
  };
  function zi(r, t, e) {
    e == null && (e = ""), e && (e = ": " + e), w(r >= t, "missing argument" + e, "MISSING_ARGUMENT", {
      count: r,
      expectedCount: t
    }), w(r <= t, "too many arguments" + e, "UNEXPECTED_ARGUMENT", {
      count: r,
      expectedCount: t
    });
  }
  const ja = [
    "NFD",
    "NFC",
    "NFKD",
    "NFKC"
  ].reduce((r, t) => {
    try {
      if ("test".normalize(t) !== "test") throw new Error("bad");
      if (t === "NFD" && "\xE9".normalize("NFD") !== "e\u0301") throw new Error("broken");
      r.push(t);
    } catch {
    }
    return r;
  }, []);
  Wa = function(r) {
    w(ja.indexOf(r) >= 0, "platform missing String.prototype.normalize", "UNSUPPORTED_OPERATION", {
      operation: "String.prototype.normalize",
      info: {
        form: r
      }
    });
  };
  qn = function(r, t, e) {
    if (e == null && (e = ""), r !== t) {
      let n = e, s = "new";
      e && (n += ".", s += " " + e), w(false, `private constructor; use ${n}from* methods`, "UNSUPPORTED_OPERATION", {
        operation: s
      });
    }
  };
  function _i(r, t, e) {
    if (r instanceof Uint8Array) return e ? new Uint8Array(r) : r;
    if (typeof r == "string" && r.length % 2 === 0 && r.match(/^0x[0-9a-f]*$/i)) {
      const n = new Uint8Array((r.length - 2) / 2);
      let s = 2;
      for (let i = 0; i < n.length; i++) n[i] = parseInt(r.substring(s, s + 2), 16), s += 2;
      return n;
    }
    d(false, "invalid BytesLike value", t || "value", r);
  }
  S = function(r, t) {
    return _i(r, t, false);
  };
  dt = function(r, t) {
    return _i(r, t, true);
  };
  function _(r, t) {
    return !(typeof r != "string" || !r.match(/^0x[0-9A-Fa-f]*$/) || typeof t == "number" && r.length !== 2 + 2 * t || t === true && r.length % 2 !== 0);
  }
  $r = function(r) {
    return _(r, true) || r instanceof Uint8Array;
  };
  const vs = "0123456789abcdef";
  x = function(r) {
    const t = S(r);
    let e = "0x";
    for (let n = 0; n < t.length; n++) {
      const s = t[n];
      e += vs[(s & 240) >> 4] + vs[s & 15];
    }
    return e;
  };
  Z = function(r) {
    return "0x" + r.map((t) => x(t).substring(2)).join("");
  };
  function Ge(r) {
    return _(r, true) ? (r.length - 2) / 2 : S(r).length;
  }
  $ = function(r, t, e) {
    const n = S(r);
    return e != null && e > n.length && w(false, "cannot slice beyond data bounds", "BUFFER_OVERRUN", {
      buffer: n,
      length: n.length,
      offset: e
    }), x(n.slice(t ?? 0, e ?? n.length));
  };
  function ji(r, t, e) {
    const n = S(r);
    w(t >= n.length, "padding exceeds data length", "BUFFER_OVERRUN", {
      buffer: new Uint8Array(n),
      length: t,
      offset: t + 1
    });
    const s = new Uint8Array(t);
    return s.fill(0), e ? s.set(n, t - n.length) : s.set(n, 0), x(s);
  }
  function Xt(r, t) {
    return ji(r, t, true);
  }
  function Za(r, t) {
    return ji(r, t, false);
  }
  const gn = BigInt(0), St = BigInt(1), De = 9007199254740991;
  function Ya(r, t) {
    const e = Xn(r, "value"), n = BigInt(U(t, "width"));
    if (w(e >> n === gn, "overflow", "NUMERIC_FAULT", {
      operation: "fromTwos",
      fault: "overflow",
      value: r
    }), e >> n - St) {
      const s = (St << n) - St;
      return -((~e & s) + St);
    }
    return e;
  }
  function Wi(r, t) {
    let e = B(r, "value");
    const n = BigInt(U(t, "width")), s = St << n - St;
    if (e < gn) {
      e = -e, w(e <= s, "too low", "NUMERIC_FAULT", {
        operation: "toTwos",
        fault: "overflow",
        value: r
      });
      const i = (St << n) - St;
      return (~e & i) + St;
    } else w(e < s, "too high", "NUMERIC_FAULT", {
      operation: "toTwos",
      fault: "overflow",
      value: r
    });
    return e;
  }
  function tn(r, t) {
    const e = Xn(r, "value"), n = BigInt(U(t, "bits"));
    return e & (St << n) - St;
  }
  B = function(r, t) {
    switch (typeof r) {
      case "bigint":
        return r;
      case "number":
        return d(Number.isInteger(r), "underflow", t || "value", r), d(r >= -De && r <= De, "overflow", t || "value", r), BigInt(r);
      case "string":
        try {
          if (r === "") throw new Error("empty string");
          return r[0] === "-" && r[1] !== "-" ? -BigInt(r.substring(1)) : BigInt(r);
        } catch (e) {
          d(false, `invalid BigNumberish string: ${e.message}`, t || "value", r);
        }
    }
    d(false, "invalid BigNumberish value", t || "value", r);
  };
  function Xn(r, t) {
    const e = B(r, t);
    return w(e >= gn, "unsigned value cannot be negative", "NUMERIC_FAULT", {
      fault: "overflow",
      operation: "getUint",
      value: r
    }), e;
  }
  const Cs = "0123456789abcdef";
  ts = function(r) {
    if (r instanceof Uint8Array) {
      let t = "0x0";
      for (const e of r) t += Cs[e >> 4], t += Cs[e & 15];
      return BigInt(t);
    }
    return B(r);
  };
  U = function(r, t) {
    switch (typeof r) {
      case "bigint":
        return d(r >= -De && r <= De, "overflow", t || "value", r), Number(r);
      case "number":
        return d(Number.isInteger(r), "underflow", t || "value", r), d(r >= -De && r <= De, "overflow", t || "value", r), r;
      case "string":
        try {
          if (r === "") throw new Error("empty string");
          return U(BigInt(r), t);
        } catch (e) {
          d(false, `invalid numeric string: ${e.message}`, t || "value", r);
        }
    }
    d(false, "invalid numeric value", t || "value", r);
  };
  function qa(r) {
    return U(ts(r));
  }
  ue = function(r, t) {
    const e = Xn(r, "value");
    let n = e.toString(16);
    if (t == null) n.length % 2 && (n = "0" + n);
    else {
      const s = U(t, "width");
      if (s === 0 && e === gn) return "0x";
      for (w(s * 2 >= n.length, `value exceeds width (${s} bytes)`, "NUMERIC_FAULT", {
        operation: "toBeHex",
        fault: "overflow",
        value: r
      }); n.length < s * 2; ) n = "0" + n;
    }
    return "0x" + n;
  };
  st = function(r, t) {
    const e = Xn(r, "value");
    if (e === gn) return new Uint8Array(0);
    let n = e.toString(16);
    n.length % 2 && (n = "0" + n);
    const s = new Uint8Array(n.length / 2);
    for (let i = 0; i < s.length; i++) {
      const o = i * 2;
      s[i] = parseInt(n.substring(o, o + 2), 16);
    }
    return s;
  };
  function Rt(r) {
    let t = x($r(r) ? r : st(r)).substring(2);
    for (; t.startsWith("0"); ) t = t.substring(1);
    return t === "" && (t = "0"), "0x" + t;
  }
  const Qn = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
  let Bn = null;
  function Xa(r) {
    if (Bn == null) {
      Bn = {};
      for (let e = 0; e < Qn.length; e++) Bn[Qn[e]] = BigInt(e);
    }
    const t = Bn[r];
    return d(t != null, "invalid base58 value", "letter", r), t;
  }
  const $a = BigInt(0), kr = BigInt(58);
  tc = function(r) {
    const t = S(r);
    let e = ts(t), n = "";
    for (; e; ) n = Qn[Number(e % kr)] + n, e /= kr;
    for (let s = 0; s < t.length && !t[s]; s++) n = Qn[0] + n;
    return n;
  };
  F0 = function(r) {
    let t = $a;
    for (let e = 0; e < r.length; e++) t *= kr, t += Xa(r[e]);
    return t;
  };
  function ec(r) {
    r = atob(r);
    const t = new Uint8Array(r.length);
    for (let e = 0; e < r.length; e++) t[e] = r.charCodeAt(e);
    return S(t);
  }
  function nc(r) {
    const t = S(r);
    let e = "";
    for (let n = 0; n < t.length; n++) e += String.fromCharCode(t[n]);
    return btoa(e);
  }
  class Zi {
    constructor(t, e, n) {
      __publicField(this, "filter");
      __publicField(this, "emitter");
      __privateAdd(this, _t2);
      __privateSet(this, _t2, e), k(this, {
        emitter: t,
        filter: n
      });
    }
    async removeListener() {
      __privateGet(this, _t2) != null && await this.emitter.off(this.filter, __privateGet(this, _t2));
    }
  }
  _t2 = new WeakMap();
  function rc(r, t, e, n, s) {
    d(false, `invalid codepoint at offset ${t}; ${r}`, "bytes", e);
  }
  function Yi(r, t, e, n, s) {
    if (r === "BAD_PREFIX" || r === "UNEXPECTED_CONTINUE") {
      let i = 0;
      for (let o = t + 1; o < e.length && e[o] >> 6 === 2; o++) i++;
      return i;
    }
    return r === "OVERRUN" ? e.length - t - 1 : 0;
  }
  function sc(r, t, e, n, s) {
    return r === "OVERLONG" ? (d(typeof s == "number", "invalid bad code point for replacement", "badCodepoint", s), n.push(s), 0) : (n.push(65533), Yi(r, t, e));
  }
  const ic = Object.freeze({
    error: rc,
    ignore: Yi,
    replace: sc
  });
  function oc(r, t) {
    t == null && (t = ic.error);
    const e = S(r, "bytes"), n = [];
    let s = 0;
    for (; s < e.length; ) {
      const i = e[s++];
      if (i >> 7 === 0) {
        n.push(i);
        continue;
      }
      let o = null, a = null;
      if ((i & 224) === 192) o = 1, a = 127;
      else if ((i & 240) === 224) o = 2, a = 2047;
      else if ((i & 248) === 240) o = 3, a = 65535;
      else {
        (i & 192) === 128 ? s += t("UNEXPECTED_CONTINUE", s - 1, e, n) : s += t("BAD_PREFIX", s - 1, e, n);
        continue;
      }
      if (s - 1 + o >= e.length) {
        s += t("OVERRUN", s - 1, e, n);
        continue;
      }
      let c = i & (1 << 8 - o - 1) - 1;
      for (let l = 0; l < o; l++) {
        let u = e[s];
        if ((u & 192) != 128) {
          s += t("MISSING_CONTINUE", s, e, n), c = null;
          break;
        }
        c = c << 6 | u & 63, s++;
      }
      if (c !== null) {
        if (c > 1114111) {
          s += t("OUT_OF_RANGE", s - 1 - o, e, n, c);
          continue;
        }
        if (c >= 55296 && c <= 57343) {
          s += t("UTF16_SURROGATE", s - 1 - o, e, n, c);
          continue;
        }
        if (c <= a) {
          s += t("OVERLONG", s - 1 - o, e, n, c);
          continue;
        }
        n.push(c);
      }
    }
    return n;
  }
  Zt = function(r, t) {
    d(typeof r == "string", "invalid string value", "str", r), t != null && (Wa(t), r = r.normalize(t));
    let e = [];
    for (let n = 0; n < r.length; n++) {
      const s = r.charCodeAt(n);
      if (s < 128) e.push(s);
      else if (s < 2048) e.push(s >> 6 | 192), e.push(s & 63 | 128);
      else if ((s & 64512) == 55296) {
        n++;
        const i = r.charCodeAt(n);
        d(n < r.length && (i & 64512) === 56320, "invalid surrogate pair", "str", r);
        const o = 65536 + ((s & 1023) << 10) + (i & 1023);
        e.push(o >> 18 | 240), e.push(o >> 12 & 63 | 128), e.push(o >> 6 & 63 | 128), e.push(o & 63 | 128);
      } else e.push(s >> 12 | 224), e.push(s >> 6 & 63 | 128), e.push(s & 63 | 128);
    }
    return new Uint8Array(e);
  };
  function ac(r) {
    return r.map((t) => t <= 65535 ? String.fromCharCode(t) : (t -= 65536, String.fromCharCode((t >> 10 & 1023) + 55296, (t & 1023) + 56320))).join("");
  }
  function Vn(r, t) {
    return ac(oc(r, t));
  }
  function qi(r) {
    async function t(e, n) {
      w(n == null || !n.cancelled, "request cancelled before sending", "CANCELLED");
      const s = e.url.split(":")[0].toLowerCase();
      w(s === "http" || s === "https", `unsupported protocol ${s}`, "UNSUPPORTED_OPERATION", {
        info: {
          protocol: s
        },
        operation: "request"
      }), w(s === "https" || !e.credentials || e.allowInsecureAuthentication, "insecure authorized connections unsupported", "UNSUPPORTED_OPERATION", {
        operation: "request"
      });
      let i = null;
      const o = new AbortController(), a = setTimeout(() => {
        i = Y("request timeout", "TIMEOUT"), o.abort();
      }, e.timeout);
      n && n.addListener(() => {
        i = Y("request cancelled", "CANCELLED"), o.abort();
      });
      const c = Object.assign({}, r, {
        method: e.method,
        headers: new Headers(Array.from(e)),
        body: e.body || void 0,
        signal: o.signal
      });
      let l;
      try {
        l = await fetch(e.url, c);
      } catch (g) {
        throw clearTimeout(a), i || g;
      }
      clearTimeout(a);
      const u = {};
      l.headers.forEach((g, m) => {
        u[m.toLowerCase()] = g;
      });
      const f = await l.arrayBuffer(), h = f == null ? null : new Uint8Array(f);
      return {
        statusCode: l.status,
        statusMessage: l.statusText,
        headers: u,
        body: h
      };
    }
    return t;
  }
  const cc = 12, lc = 250;
  let ks = qi();
  const uc = new RegExp("^data:([^;:]*)?(;base64)?,(.*)$", "i"), fc = new RegExp("^ipfs://(ipfs/)?(.*)$", "i");
  let dr = false;
  async function Xi(r, t) {
    try {
      const e = r.match(uc);
      if (!e) throw new Error("invalid data");
      return new le(200, "OK", {
        "content-type": e[1] || "text/plain"
      }, e[2] ? ec(e[3]) : dc(e[3]));
    } catch {
      return new le(599, "BAD REQUEST (invalid data: URI)", {}, null, new Lt(r));
    }
  }
  function $i(r) {
    async function t(e, n) {
      try {
        const s = e.match(fc);
        if (!s) throw new Error("invalid link");
        return new Lt(`${r}${s[2]}`);
      } catch {
        return new le(599, "BAD REQUEST (invalid IPFS URI)", {}, null, new Lt(e));
      }
    }
    return t;
  }
  const Nn = {
    data: Xi,
    ipfs: $i("https://gateway.ipfs.io/ipfs/")
  }, to = /* @__PURE__ */ new WeakMap();
  class hc {
    constructor(t) {
      __privateAdd(this, _t3);
      __privateAdd(this, _e2);
      __privateSet(this, _t3, []), __privateSet(this, _e2, false), to.set(t, () => {
        if (!__privateGet(this, _e2)) {
          __privateSet(this, _e2, true);
          for (const e of __privateGet(this, _t3)) setTimeout(() => {
            e();
          }, 0);
          __privateSet(this, _t3, []);
        }
      });
    }
    addListener(t) {
      w(!__privateGet(this, _e2), "singal already cancelled", "UNSUPPORTED_OPERATION", {
        operation: "fetchCancelSignal.addCancelListener"
      }), __privateGet(this, _t3).push(t);
    }
    get cancelled() {
      return __privateGet(this, _e2);
    }
    checkSignal() {
      w(!this.cancelled, "cancelled", "CANCELLED", {});
    }
  }
  _t3 = new WeakMap();
  _e2 = new WeakMap();
  function In(r) {
    if (r == null) throw new Error("missing signal; should not happen");
    return r.checkSignal(), r;
  }
  const _Lt = class _Lt {
    constructor(t) {
      __privateAdd(this, _Lt_instances);
      __privateAdd(this, _t4);
      __privateAdd(this, _e3);
      __privateAdd(this, _n2);
      __privateAdd(this, _r2);
      __privateAdd(this, _s2);
      __privateAdd(this, _o2);
      __privateAdd(this, _i2);
      __privateAdd(this, _a2);
      __privateAdd(this, _d);
      __privateAdd(this, _l2);
      __privateAdd(this, _g);
      __privateAdd(this, _p);
      __privateAdd(this, _h);
      __privateAdd(this, _u2);
      __privateAdd(this, _f2);
      __privateSet(this, _o2, String(t)), __privateSet(this, _t4, false), __privateSet(this, _e3, true), __privateSet(this, _n2, {}), __privateSet(this, _r2, ""), __privateSet(this, _s2, 3e5), __privateSet(this, _u2, {
        slotInterval: lc,
        maxAttempts: cc
      }), __privateSet(this, _f2, null);
    }
    get url() {
      return __privateGet(this, _o2);
    }
    set url(t) {
      __privateSet(this, _o2, String(t));
    }
    get body() {
      return __privateGet(this, _i2) == null ? null : new Uint8Array(__privateGet(this, _i2));
    }
    set body(t) {
      if (t == null) __privateSet(this, _i2, void 0), __privateSet(this, _a2, void 0);
      else if (typeof t == "string") __privateSet(this, _i2, Zt(t)), __privateSet(this, _a2, "text/plain");
      else if (t instanceof Uint8Array) __privateSet(this, _i2, t), __privateSet(this, _a2, "application/octet-stream");
      else if (typeof t == "object") __privateSet(this, _i2, Zt(JSON.stringify(t))), __privateSet(this, _a2, "application/json");
      else throw new Error("invalid body");
    }
    hasBody() {
      return __privateGet(this, _i2) != null;
    }
    get method() {
      return __privateGet(this, _r2) ? __privateGet(this, _r2) : this.hasBody() ? "POST" : "GET";
    }
    set method(t) {
      t == null && (t = ""), __privateSet(this, _r2, String(t).toUpperCase());
    }
    get headers() {
      const t = Object.assign({}, __privateGet(this, _n2));
      return __privateGet(this, _d) && (t.authorization = `Basic ${nc(Zt(__privateGet(this, _d)))}`), this.allowGzip && (t["accept-encoding"] = "gzip"), t["content-type"] == null && __privateGet(this, _a2) && (t["content-type"] = __privateGet(this, _a2)), this.body && (t["content-length"] = String(this.body.length)), t;
    }
    getHeader(t) {
      return this.headers[t.toLowerCase()];
    }
    setHeader(t, e) {
      __privateGet(this, _n2)[String(t).toLowerCase()] = String(e);
    }
    clearHeaders() {
      __privateSet(this, _n2, {});
    }
    [Symbol.iterator]() {
      const t = this.headers, e = Object.keys(t);
      let n = 0;
      return {
        next: () => {
          if (n < e.length) {
            const s = e[n++];
            return {
              value: [
                s,
                t[s]
              ],
              done: false
            };
          }
          return {
            value: void 0,
            done: true
          };
        }
      };
    }
    get credentials() {
      return __privateGet(this, _d) || null;
    }
    setCredentials(t, e) {
      d(!t.match(/:/), "invalid basic authentication username", "username", "[REDACTED]"), __privateSet(this, _d, `${t}:${e}`);
    }
    get allowGzip() {
      return __privateGet(this, _e3);
    }
    set allowGzip(t) {
      __privateSet(this, _e3, !!t);
    }
    get allowInsecureAuthentication() {
      return !!__privateGet(this, _t4);
    }
    set allowInsecureAuthentication(t) {
      __privateSet(this, _t4, !!t);
    }
    get timeout() {
      return __privateGet(this, _s2);
    }
    set timeout(t) {
      d(t >= 0, "timeout must be non-zero", "timeout", t), __privateSet(this, _s2, t);
    }
    get preflightFunc() {
      return __privateGet(this, _l2) || null;
    }
    set preflightFunc(t) {
      __privateSet(this, _l2, t);
    }
    get processFunc() {
      return __privateGet(this, _g) || null;
    }
    set processFunc(t) {
      __privateSet(this, _g, t);
    }
    get retryFunc() {
      return __privateGet(this, _p) || null;
    }
    set retryFunc(t) {
      __privateSet(this, _p, t);
    }
    get getUrlFunc() {
      return __privateGet(this, _f2) || ks;
    }
    set getUrlFunc(t) {
      __privateSet(this, _f2, t);
    }
    toString() {
      return `<FetchRequest method=${JSON.stringify(this.method)} url=${JSON.stringify(this.url)} headers=${JSON.stringify(this.headers)} body=${__privateGet(this, _i2) ? x(__privateGet(this, _i2)) : "null"}>`;
    }
    setThrottleParams(t) {
      t.slotInterval != null && (__privateGet(this, _u2).slotInterval = t.slotInterval), t.maxAttempts != null && (__privateGet(this, _u2).maxAttempts = t.maxAttempts);
    }
    send() {
      return w(__privateGet(this, _h) == null, "request already sent", "UNSUPPORTED_OPERATION", {
        operation: "fetchRequest.send"
      }), __privateSet(this, _h, new hc(this)), __privateMethod(this, _Lt_instances, c_fn).call(this, 0, Os() + this.timeout, 0, this, new le(0, "", {}, null, this));
    }
    cancel() {
      w(__privateGet(this, _h) != null, "request has not been sent", "UNSUPPORTED_OPERATION", {
        operation: "fetchRequest.cancel"
      });
      const t = to.get(this);
      if (!t) throw new Error("missing signal; should not happen");
      t();
    }
    redirect(t) {
      const e = this.url.split(":")[0].toLowerCase(), n = t.split(":")[0].toLowerCase();
      w((e !== "https" || n !== "http") && t.match(/^https?:/), "unsupported redirect", "UNSUPPORTED_OPERATION", {
        operation: `redirect(${this.method} ${JSON.stringify(this.url)} => ${JSON.stringify(t)})`
      });
      const s = new _Lt(t);
      return s.method = this.method, s.allowGzip = this.allowGzip, s.timeout = this.timeout, __privateSet(s, _n2, Object.assign({}, __privateGet(this, _n2))), __privateGet(this, _i2) && __privateSet(s, _i2, new Uint8Array(__privateGet(this, _i2))), __privateSet(s, _a2, __privateGet(this, _a2)), s;
    }
    clone() {
      const t = new _Lt(this.url);
      return __privateSet(t, _r2, __privateGet(this, _r2)), __privateGet(this, _i2) && __privateSet(t, _i2, __privateGet(this, _i2)), __privateSet(t, _a2, __privateGet(this, _a2)), __privateSet(t, _n2, Object.assign({}, __privateGet(this, _n2))), __privateSet(t, _d, __privateGet(this, _d)), this.allowGzip && (t.allowGzip = true), t.timeout = this.timeout, this.allowInsecureAuthentication && (t.allowInsecureAuthentication = true), __privateSet(t, _l2, __privateGet(this, _l2)), __privateSet(t, _g, __privateGet(this, _g)), __privateSet(t, _p, __privateGet(this, _p)), __privateSet(t, _u2, Object.assign({}, __privateGet(this, _u2))), __privateSet(t, _f2, __privateGet(this, _f2)), t;
    }
    static lockConfig() {
      dr = true;
    }
    static getGateway(t) {
      return Nn[t.toLowerCase()] || null;
    }
    static registerGateway(t, e) {
      if (t = t.toLowerCase(), t === "http" || t === "https") throw new Error(`cannot intercept ${t}; use registerGetUrl`);
      if (dr) throw new Error("gateways locked");
      Nn[t] = e;
    }
    static registerGetUrl(t) {
      if (dr) throw new Error("gateways locked");
      ks = t;
    }
    static createGetUrlFunc(t) {
      return qi(t);
    }
    static createDataGateway() {
      return Xi;
    }
    static createIpfsGatewayFunc(t) {
      return $i(t);
    }
  };
  _t4 = new WeakMap();
  _e3 = new WeakMap();
  _n2 = new WeakMap();
  _r2 = new WeakMap();
  _s2 = new WeakMap();
  _o2 = new WeakMap();
  _i2 = new WeakMap();
  _a2 = new WeakMap();
  _d = new WeakMap();
  _l2 = new WeakMap();
  _g = new WeakMap();
  _p = new WeakMap();
  _h = new WeakMap();
  _u2 = new WeakMap();
  _f2 = new WeakMap();
  _Lt_instances = new WeakSet();
  c_fn = async function(t, e, n, s, i) {
    var _a6, _b3, _c4;
    if (t >= __privateGet(this, _u2).maxAttempts) return i.makeServerError("exceeded maximum retry limit");
    w(Os() <= e, "timeout", "TIMEOUT", {
      operation: "request.send",
      reason: "timeout",
      request: s
    }), n > 0 && await pc(n);
    let o = this.clone();
    const a = (o.url.split(":")[0] || "").toLowerCase();
    if (a in Nn) {
      const u = await Nn[a](o.url, In(__privateGet(s, _h)));
      if (u instanceof le) {
        let f = u;
        if (this.processFunc) {
          In(__privateGet(s, _h));
          try {
            f = await this.processFunc(o, f);
          } catch (h) {
            (h.throttle == null || typeof h.stall != "number") && f.makeServerError("error in post-processing function", h).assertOk();
          }
        }
        return f;
      }
      o = u;
    }
    this.preflightFunc && (o = await this.preflightFunc(o));
    const c = await this.getUrlFunc(o, In(__privateGet(s, _h)));
    let l = new le(c.statusCode, c.statusMessage, c.headers, c.body, s);
    if ([
      301,
      302,
      307,
      308
    ].indexOf(l.statusCode) >= 0) {
      try {
        const u = l.headers.location || "";
        return __privateMethod(_a6 = o.redirect(u), _Lt_instances, c_fn).call(_a6, t + 1, e, 0, s, l);
      } catch {
      }
      return l;
    } else if (l.statusCode === 429 && (this.retryFunc == null || await this.retryFunc(o, l, t))) {
      const u = l.headers["retry-after"];
      let f = __privateGet(this, _u2).slotInterval * Math.trunc(Math.random() * Math.pow(2, t));
      return typeof u == "string" && u.match(/^[1-9][0-9]*$/) && (f = parseInt(u)), __privateMethod(_b3 = o.clone(), _Lt_instances, c_fn).call(_b3, t + 1, e, f, s, l);
    }
    if (this.processFunc) {
      In(__privateGet(s, _h));
      try {
        l = await this.processFunc(o, l);
      } catch (u) {
        (u.throttle == null || typeof u.stall != "number") && l.makeServerError("error in post-processing function", u).assertOk();
        let f = __privateGet(this, _u2).slotInterval * Math.trunc(Math.random() * Math.pow(2, t));
        return u.stall >= 0 && (f = u.stall), __privateMethod(_c4 = o.clone(), _Lt_instances, c_fn).call(_c4, t + 1, e, f, s, l);
      }
    }
    return l;
  };
  let Lt = _Lt;
  const _le = class _le {
    constructor(t, e, n, s, i) {
      __privateAdd(this, _t5);
      __privateAdd(this, _e4);
      __privateAdd(this, _n3);
      __privateAdd(this, _r3);
      __privateAdd(this, _s3);
      __privateAdd(this, _o3);
      __privateSet(this, _t5, t), __privateSet(this, _e4, e), __privateSet(this, _n3, Object.keys(n).reduce((o, a) => (o[a.toLowerCase()] = String(n[a]), o), {})), __privateSet(this, _r3, s == null ? null : new Uint8Array(s)), __privateSet(this, _s3, i || null), __privateSet(this, _o3, {
        message: ""
      });
    }
    toString() {
      return `<FetchResponse status=${this.statusCode} body=${__privateGet(this, _r3) ? x(__privateGet(this, _r3)) : "null"}>`;
    }
    get statusCode() {
      return __privateGet(this, _t5);
    }
    get statusMessage() {
      return __privateGet(this, _e4);
    }
    get headers() {
      return Object.assign({}, __privateGet(this, _n3));
    }
    get body() {
      return __privateGet(this, _r3) == null ? null : new Uint8Array(__privateGet(this, _r3));
    }
    get bodyText() {
      try {
        return __privateGet(this, _r3) == null ? "" : Vn(__privateGet(this, _r3));
      } catch {
        w(false, "response body is not valid UTF-8 data", "UNSUPPORTED_OPERATION", {
          operation: "bodyText",
          info: {
            response: this
          }
        });
      }
    }
    get bodyJson() {
      try {
        return JSON.parse(this.bodyText);
      } catch {
        w(false, "response body is not valid JSON", "UNSUPPORTED_OPERATION", {
          operation: "bodyJson",
          info: {
            response: this
          }
        });
      }
    }
    [Symbol.iterator]() {
      const t = this.headers, e = Object.keys(t);
      let n = 0;
      return {
        next: () => {
          if (n < e.length) {
            const s = e[n++];
            return {
              value: [
                s,
                t[s]
              ],
              done: false
            };
          }
          return {
            value: void 0,
            done: true
          };
        }
      };
    }
    makeServerError(t, e) {
      let n;
      t ? n = `CLIENT ESCALATED SERVER ERROR (${this.statusCode} ${this.statusMessage}; ${t})` : (t = `${this.statusCode} ${this.statusMessage}`, n = `CLIENT ESCALATED SERVER ERROR (${t})`);
      const s = new _le(599, n, this.headers, this.body, __privateGet(this, _s3) || void 0);
      return __privateSet(s, _o3, {
        message: t,
        error: e
      }), s;
    }
    throwThrottleError(t, e) {
      e == null ? e = -1 : d(Number.isInteger(e) && e >= 0, "invalid stall timeout", "stall", e);
      const n = new Error(t || "throttling requests");
      throw k(n, {
        stall: e,
        throttle: true
      }), n;
    }
    getHeader(t) {
      return this.headers[t.toLowerCase()];
    }
    hasBody() {
      return __privateGet(this, _r3) != null;
    }
    get request() {
      return __privateGet(this, _s3);
    }
    ok() {
      return __privateGet(this, _o3).message === "" && this.statusCode >= 200 && this.statusCode < 300;
    }
    assertOk() {
      if (this.ok()) return;
      let { message: t, error: e } = __privateGet(this, _o3);
      t === "" && (t = `server response ${this.statusCode} ${this.statusMessage}`);
      let n = null;
      this.request && (n = this.request.url);
      let s = null;
      try {
        __privateGet(this, _r3) && (s = Vn(__privateGet(this, _r3)));
      } catch {
      }
      w(false, t, "SERVER_ERROR", {
        request: this.request || "unknown request",
        response: this,
        error: e,
        info: {
          requestUrl: n,
          responseBody: s,
          responseStatus: `${this.statusCode} ${this.statusMessage}`
        }
      });
    }
  };
  _t5 = new WeakMap();
  _e4 = new WeakMap();
  _n3 = new WeakMap();
  _r3 = new WeakMap();
  _s3 = new WeakMap();
  _o3 = new WeakMap();
  let le = _le;
  function Os() {
    return (/* @__PURE__ */ new Date()).getTime();
  }
  function dc(r) {
    return Zt(r.replace(/%([0-9a-f][0-9a-f])/gi, (t, e) => String.fromCharCode(parseInt(e, 16))));
  }
  function pc(r) {
    return new Promise((t) => setTimeout(t, r));
  }
  function gc(r) {
    let t = r.toString(16);
    for (; t.length < 2; ) t = "0" + t;
    return "0x" + t;
  }
  function Rs(r, t, e) {
    let n = 0;
    for (let s = 0; s < e; s++) n = n * 256 + r[t + s];
    return n;
  }
  function Ss(r, t, e, n) {
    const s = [];
    for (; e < t + 1 + n; ) {
      const i = eo(r, e);
      s.push(i.result), e += i.consumed, w(e <= t + 1 + n, "child data too short", "BUFFER_OVERRUN", {
        buffer: r,
        length: n,
        offset: t
      });
    }
    return {
      consumed: 1 + n,
      result: s
    };
  }
  function eo(r, t) {
    w(r.length !== 0, "data too short", "BUFFER_OVERRUN", {
      buffer: r,
      length: 0,
      offset: 1
    });
    const e = (n) => {
      w(n <= r.length, "data short segment too short", "BUFFER_OVERRUN", {
        buffer: r,
        length: r.length,
        offset: n
      });
    };
    if (r[t] >= 248) {
      const n = r[t] - 247;
      e(t + 1 + n);
      const s = Rs(r, t + 1, n);
      return e(t + 1 + n + s), Ss(r, t, t + 1 + n, n + s);
    } else if (r[t] >= 192) {
      const n = r[t] - 192;
      return e(t + 1 + n), Ss(r, t, t + 1, n);
    } else if (r[t] >= 184) {
      const n = r[t] - 183;
      e(t + 1 + n);
      const s = Rs(r, t + 1, n);
      e(t + 1 + n + s);
      const i = x(r.slice(t + 1 + n, t + 1 + n + s));
      return {
        consumed: 1 + n + s,
        result: i
      };
    } else if (r[t] >= 128) {
      const n = r[t] - 128;
      e(t + 1 + n);
      const s = x(r.slice(t + 1, t + 1 + n));
      return {
        consumed: 1 + n,
        result: s
      };
    }
    return {
      consumed: 1,
      result: gc(r[t])
    };
  }
  function yn(r) {
    const t = S(r, "data"), e = eo(t, 0);
    return d(e.consumed === t.length, "unexpected junk after rlp payload", "data", r), e.result;
  }
  function Ls(r) {
    const t = [];
    for (; r; ) t.unshift(r & 255), r >>= 8;
    return t;
  }
  function no(r) {
    if (Array.isArray(r)) {
      let n = [];
      if (r.forEach(function(i) {
        n = n.concat(no(i));
      }), n.length <= 55) return n.unshift(192 + n.length), n;
      const s = Ls(n.length);
      return s.unshift(247 + s.length), s.concat(n);
    }
    const t = Array.prototype.slice.call(S(r, "object"));
    if (t.length === 1 && t[0] <= 127) return t;
    if (t.length <= 55) return t.unshift(128 + t.length), t;
    const e = Ls(t.length);
    return e.unshift(183 + e.length), e.concat(t);
  }
  const Us = "0123456789abcdef";
  Yt = function(r) {
    let t = "0x";
    for (const e of no(r)) t += Us[e >> 4], t += Us[e & 15];
    return t;
  };
  const pt = 32, Or = new Uint8Array(pt), yc = [
    "then"
  ], Tn = {}, ro = /* @__PURE__ */ new WeakMap();
  function ye(r) {
    return ro.get(r);
  }
  function Fs(r, t) {
    ro.set(r, t);
  }
  function Xe(r, t) {
    const e = new Error(`deferred error during ABI decoding triggered accessing ${r}`);
    throw e.error = t, e;
  }
  function Rr(r, t, e) {
    return r.indexOf(null) >= 0 ? t.map((n, s) => n instanceof jt ? Rr(ye(n), n, e) : n) : r.reduce((n, s, i) => {
      let o = t.getValue(s);
      return s in n || (e && o instanceof jt && (o = Rr(ye(o), o, e)), n[s] = o), n;
    }, {});
  }
  const _jt = class _jt extends Array {
    constructor(...t) {
      const e = t[0];
      let n = t[1], s = (t[2] || []).slice(), i = true;
      e !== Tn && (n = t, s = [], i = false);
      super(n.length);
      __privateAdd(this, _t6);
      n.forEach((c, l) => {
        this[l] = c;
      });
      const o = s.reduce((c, l) => (typeof l == "string" && c.set(l, (c.get(l) || 0) + 1), c), /* @__PURE__ */ new Map());
      if (Fs(this, Object.freeze(n.map((c, l) => {
        const u = s[l];
        return u != null && o.get(u) === 1 ? u : null;
      }))), __privateSet(this, _t6, []), __privateGet(this, _t6) == null && __privateGet(this, _t6), !i) return;
      Object.freeze(this);
      const a = new Proxy(this, {
        get: (c, l, u) => {
          if (typeof l == "string") {
            if (l.match(/^[0-9]+$/)) {
              const h = U(l, "%index");
              if (h < 0 || h >= this.length) throw new RangeError("out of result range");
              const g = c[h];
              return g instanceof Error && Xe(`index ${h}`, g), g;
            }
            if (yc.indexOf(l) >= 0) return Reflect.get(c, l, u);
            const f = c[l];
            if (f instanceof Function) return function(...h) {
              return f.apply(this === u ? c : this, h);
            };
            if (!(l in c)) return c.getValue.apply(this === u ? c : this, [
              l
            ]);
          }
          return Reflect.get(c, l, u);
        }
      });
      return Fs(a, ye(this)), a;
    }
    toArray(t) {
      const e = [];
      return this.forEach((n, s) => {
        n instanceof Error && Xe(`index ${s}`, n), t && n instanceof _jt && (n = n.toArray(t)), e.push(n);
      }), e;
    }
    toObject(t) {
      const e = ye(this);
      return e.reduce((n, s, i) => (w(s != null, `value at index ${i} unnamed`, "UNSUPPORTED_OPERATION", {
        operation: "toObject()"
      }), Rr(e, this, t)), {});
    }
    slice(t, e) {
      t == null && (t = 0), t < 0 && (t += this.length, t < 0 && (t = 0)), e == null && (e = this.length), e < 0 && (e += this.length, e < 0 && (e = 0)), e > this.length && (e = this.length);
      const n = ye(this), s = [], i = [];
      for (let o = t; o < e; o++) s.push(this[o]), i.push(n[o]);
      return new _jt(Tn, s, i);
    }
    filter(t, e) {
      const n = ye(this), s = [], i = [];
      for (let o = 0; o < this.length; o++) {
        const a = this[o];
        a instanceof Error && Xe(`index ${o}`, a), t.call(e, a, o, this) && (s.push(a), i.push(n[o]));
      }
      return new _jt(Tn, s, i);
    }
    map(t, e) {
      const n = [];
      for (let s = 0; s < this.length; s++) {
        const i = this[s];
        i instanceof Error && Xe(`index ${s}`, i), n.push(t.call(e, i, s, this));
      }
      return n;
    }
    getValue(t) {
      const e = ye(this).indexOf(t);
      if (e === -1) return;
      const n = this[e];
      return n instanceof Error && Xe(`property ${JSON.stringify(t)}`, n.error), n;
    }
    static fromItems(t, e) {
      return new _jt(Tn, t, e);
    }
  };
  _t6 = new WeakMap();
  let jt = _jt;
  function Ds(r) {
    let t = st(r);
    return w(t.length <= pt, "value out-of-bounds", "BUFFER_OVERRUN", {
      buffer: t,
      length: pt,
      offset: t.length
    }), t.length !== pt && (t = dt(Z([
      Or.slice(t.length % pt),
      t
    ]))), t;
  }
  class te {
    constructor(t, e, n, s) {
      __publicField(this, "name");
      __publicField(this, "type");
      __publicField(this, "localName");
      __publicField(this, "dynamic");
      k(this, {
        name: t,
        type: e,
        localName: n,
        dynamic: s
      }, {
        name: "string",
        type: "string",
        localName: "string",
        dynamic: "boolean"
      });
    }
    _throwError(t, e) {
      d(false, t, this.localName, e);
    }
  }
  class Sr {
    constructor() {
      __privateAdd(this, _Sr_instances);
      __privateAdd(this, _t7);
      __privateAdd(this, _e5);
      __privateSet(this, _t7, []), __privateSet(this, _e5, 0);
    }
    get data() {
      return Z(__privateGet(this, _t7));
    }
    get length() {
      return __privateGet(this, _e5);
    }
    appendWriter(t) {
      return __privateMethod(this, _Sr_instances, n_fn).call(this, dt(t.data));
    }
    writeBytes(t) {
      let e = dt(t);
      const n = e.length % pt;
      return n && (e = dt(Z([
        e,
        Or.slice(n)
      ]))), __privateMethod(this, _Sr_instances, n_fn).call(this, e);
    }
    writeValue(t) {
      return __privateMethod(this, _Sr_instances, n_fn).call(this, Ds(t));
    }
    writeUpdatableValue() {
      const t = __privateGet(this, _t7).length;
      return __privateGet(this, _t7).push(Or), __privateSet(this, _e5, __privateGet(this, _e5) + pt), (e) => {
        __privateGet(this, _t7)[t] = Ds(e);
      };
    }
  }
  _t7 = new WeakMap();
  _e5 = new WeakMap();
  _Sr_instances = new WeakSet();
  n_fn = function(t) {
    return __privateGet(this, _t7).push(t), __privateSet(this, _e5, __privateGet(this, _e5) + t.length), t.length;
  };
  const _es = class _es {
    constructor(t, e, n) {
      __privateAdd(this, _es_instances);
      __publicField(this, "allowLoose");
      __privateAdd(this, _t8);
      __privateAdd(this, _e6);
      __privateAdd(this, _n4);
      __privateAdd(this, _r4);
      __privateAdd(this, _s4);
      k(this, {
        allowLoose: !!e
      }), __privateSet(this, _t8, dt(t)), __privateSet(this, _n4, 0), __privateSet(this, _r4, null), __privateSet(this, _s4, n ?? 1024), __privateSet(this, _e6, 0);
    }
    get data() {
      return x(__privateGet(this, _t8));
    }
    get dataLength() {
      return __privateGet(this, _t8).length;
    }
    get consumed() {
      return __privateGet(this, _e6);
    }
    get bytes() {
      return new Uint8Array(__privateGet(this, _t8));
    }
    subReader(t) {
      const e = new _es(__privateGet(this, _t8).slice(__privateGet(this, _e6) + t), this.allowLoose, __privateGet(this, _s4));
      return __privateSet(e, _r4, this), e;
    }
    readBytes(t, e) {
      let n = __privateMethod(this, _es_instances, i_fn).call(this, 0, t, !!e);
      return __privateMethod(this, _es_instances, o_fn).call(this, t), __privateSet(this, _e6, __privateGet(this, _e6) + n.length), n.slice(0, t);
    }
    readValue() {
      return ts(this.readBytes(pt));
    }
    readIndex() {
      return qa(this.readBytes(pt));
    }
  };
  _t8 = new WeakMap();
  _e6 = new WeakMap();
  _n4 = new WeakMap();
  _r4 = new WeakMap();
  _s4 = new WeakMap();
  _es_instances = new WeakSet();
  o_fn = function(t) {
    var _a6;
    if (__privateGet(this, _r4)) return __privateMethod(_a6 = __privateGet(this, _r4), _es_instances, o_fn).call(_a6, t);
    __privateSet(this, _n4, __privateGet(this, _n4) + t), w(__privateGet(this, _s4) < 1 || __privateGet(this, _n4) <= __privateGet(this, _s4) * this.dataLength, `compressed ABI data exceeds inflation ratio of ${__privateGet(this, _s4)} ( see: https://github.com/ethers-io/ethers.js/issues/4537 )`, "BUFFER_OVERRUN", {
      buffer: dt(__privateGet(this, _t8)),
      offset: __privateGet(this, _e6),
      length: t,
      info: {
        bytesRead: __privateGet(this, _n4),
        dataLength: this.dataLength
      }
    });
  };
  i_fn = function(t, e, n) {
    let s = Math.ceil(e / pt) * pt;
    return __privateGet(this, _e6) + s > __privateGet(this, _t8).length && (this.allowLoose && n && __privateGet(this, _e6) + e <= __privateGet(this, _t8).length ? s = e : w(false, "data out-of-bounds", "BUFFER_OVERRUN", {
      buffer: dt(__privateGet(this, _t8)),
      length: __privateGet(this, _t8).length,
      offset: __privateGet(this, _e6) + s
    })), __privateGet(this, _t8).slice(__privateGet(this, _e6), __privateGet(this, _e6) + s);
  };
  let es = _es;
  Ee = function(r) {
    if (!Number.isSafeInteger(r) || r < 0) throw new Error(`Wrong positive integer: ${r}`);
  };
  function ns(r, ...t) {
    if (!(r instanceof Uint8Array)) throw new Error("Expected Uint8Array");
    if (t.length > 0 && !t.includes(r.length)) throw new Error(`Expected Uint8Array of length ${t}, not of length=${r.length}`);
  }
  function so(r) {
    if (typeof r != "function" || typeof r.create != "function") throw new Error("Hash should be wrapped by utils.wrapConstructor");
    Ee(r.outputLen), Ee(r.blockLen);
  }
  function Qe(r, t = true) {
    if (r.destroyed) throw new Error("Hash instance has been destroyed");
    if (t && r.finished) throw new Error("Hash#digest() has already been called");
  }
  function io(r, t) {
    ns(r);
    const e = t.outputLen;
    if (r.length < e) throw new Error(`digestInto() expects output buffer of length at least ${e}`);
  }
  const pr = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
  let oo, Fn, Gt, bc;
  oo = (r) => r instanceof Uint8Array;
  mc = (r) => new Uint32Array(r.buffer, r.byteOffset, Math.floor(r.byteLength / 4));
  Fn = (r) => new DataView(r.buffer, r.byteOffset, r.byteLength);
  Gt = (r, t) => r << 32 - t | r >>> t;
  bc = new Uint8Array(new Uint32Array([
    287454020
  ]).buffer)[0] === 68;
  if (!bc) throw new Error("Non little-endian hardware is not supported");
  const wc = async () => {
  };
  D0 = async function(r, t, e) {
    let n = Date.now();
    for (let s = 0; s < r; s++) {
      e(s);
      const i = Date.now() - n;
      i >= 0 && i < t || (await wc(), n += i);
    }
  };
  function Ac(r) {
    if (typeof r != "string") throw new Error(`utf8ToBytes expected string, got ${typeof r}`);
    return new Uint8Array(new TextEncoder().encode(r));
  }
  function Ve(r) {
    if (typeof r == "string" && (r = Ac(r)), !oo(r)) throw new Error(`expected Uint8Array, got ${typeof r}`);
    return r;
  }
  function Ec(...r) {
    const t = new Uint8Array(r.reduce((n, s) => n + s.length, 0));
    let e = 0;
    return r.forEach((n) => {
      if (!oo(n)) throw new Error("Uint8Array expected");
      t.set(n, e), e += n.length;
    }), t;
  }
  class rs {
    clone() {
      return this._cloneInto();
    }
  }
  const xc = {}.toString;
  Pc = function(r, t) {
    if (t !== void 0 && xc.call(t) !== "[object Object]") throw new Error("Options should be object or undefined");
    return Object.assign(r, t);
  };
  ss = function(r) {
    const t = (n) => r().update(Ve(n)).digest(), e = r();
    return t.outputLen = e.outputLen, t.blockLen = e.blockLen, t.create = () => r(), t;
  };
  function Bc(r = 32) {
    if (pr && typeof pr.getRandomValues == "function") return pr.getRandomValues(new Uint8Array(r));
    throw new Error("crypto.getRandomValues must be defined");
  }
  class ao extends rs {
    constructor(t, e) {
      super(), this.finished = false, this.destroyed = false, so(t);
      const n = Ve(e);
      if (this.iHash = t.create(), typeof this.iHash.update != "function") throw new Error("Expected instance of class which extends utils.Hash");
      this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
      const s = this.blockLen, i = new Uint8Array(s);
      i.set(n.length > s ? t.create().update(n).digest() : n);
      for (let o = 0; o < i.length; o++) i[o] ^= 54;
      this.iHash.update(i), this.oHash = t.create();
      for (let o = 0; o < i.length; o++) i[o] ^= 106;
      this.oHash.update(i), i.fill(0);
    }
    update(t) {
      return Qe(this), this.iHash.update(t), this;
    }
    digestInto(t) {
      Qe(this), ns(t, this.outputLen), this.finished = true, this.iHash.digestInto(t), this.oHash.update(t), this.oHash.digestInto(t), this.destroy();
    }
    digest() {
      const t = new Uint8Array(this.oHash.outputLen);
      return this.digestInto(t), t;
    }
    _cloneInto(t) {
      t || (t = Object.create(Object.getPrototypeOf(this), {}));
      const { oHash: e, iHash: n, finished: s, destroyed: i, blockLen: o, outputLen: a } = this;
      return t = t, t.finished = s, t.destroyed = i, t.blockLen = o, t.outputLen = a, t.oHash = e._cloneInto(t.oHash), t.iHash = n._cloneInto(t.iHash), t;
    }
    destroy() {
      this.destroyed = true, this.oHash.destroy(), this.iHash.destroy();
    }
  }
  const $n = (r, t, e) => new ao(r, t).update(e).digest();
  $n.create = (r, t) => new ao(r, t);
  function Nc(r, t, e, n) {
    so(r);
    const s = Pc({
      dkLen: 32,
      asyncTick: 10
    }, n), { c: i, dkLen: o, asyncTick: a } = s;
    if (Ee(i), Ee(o), Ee(a), i < 1) throw new Error("PBKDF2: iterations (c) should be >= 1");
    const c = Ve(t), l = Ve(e), u = new Uint8Array(o), f = $n.create(r, c), h = f._cloneInto().update(l);
    return {
      c: i,
      dkLen: o,
      asyncTick: a,
      DK: u,
      PRF: f,
      PRFSalt: h
    };
  }
  function Ic(r, t, e, n, s) {
    return r.destroy(), t.destroy(), n && n.destroy(), s.fill(0), e;
  }
  Tc = function(r, t, e, n) {
    const { c: s, dkLen: i, DK: o, PRF: a, PRFSalt: c } = Nc(r, t, e, n);
    let l;
    const u = new Uint8Array(4), f = Fn(u), h = new Uint8Array(a.outputLen);
    for (let g = 1, m = 0; m < i; g++, m += a.outputLen) {
      const p = o.subarray(m, m + a.outputLen);
      f.setInt32(0, g, false), (l = c._cloneInto(l)).update(u).digestInto(h), p.set(h.subarray(0, p.length));
      for (let y = 1; y < s; y++) {
        a._cloneInto(l).update(h).digestInto(h);
        for (let b = 0; b < p.length; b++) p[b] ^= h[b];
      }
    }
    return Ic(a, c, o, l, h);
  };
  function vc(r, t, e, n) {
    if (typeof r.setBigUint64 == "function") return r.setBigUint64(t, e, n);
    const s = BigInt(32), i = BigInt(4294967295), o = Number(e >> s & i), a = Number(e & i), c = n ? 4 : 0, l = n ? 0 : 4;
    r.setUint32(t + c, o, n), r.setUint32(t + l, a, n);
  }
  co = class extends rs {
    constructor(t, e, n, s) {
      super(), this.blockLen = t, this.outputLen = e, this.padOffset = n, this.isLE = s, this.finished = false, this.length = 0, this.pos = 0, this.destroyed = false, this.buffer = new Uint8Array(t), this.view = Fn(this.buffer);
    }
    update(t) {
      Qe(this);
      const { view: e, buffer: n, blockLen: s } = this;
      t = Ve(t);
      const i = t.length;
      for (let o = 0; o < i; ) {
        const a = Math.min(s - this.pos, i - o);
        if (a === s) {
          const c = Fn(t);
          for (; s <= i - o; o += s) this.process(c, o);
          continue;
        }
        n.set(t.subarray(o, o + a), this.pos), this.pos += a, o += a, this.pos === s && (this.process(e, 0), this.pos = 0);
      }
      return this.length += t.length, this.roundClean(), this;
    }
    digestInto(t) {
      Qe(this), io(t, this), this.finished = true;
      const { buffer: e, view: n, blockLen: s, isLE: i } = this;
      let { pos: o } = this;
      e[o++] = 128, this.buffer.subarray(o).fill(0), this.padOffset > s - o && (this.process(n, 0), o = 0);
      for (let f = o; f < s; f++) e[f] = 0;
      vc(n, s - 8, BigInt(this.length * 8), i), this.process(n, 0);
      const a = Fn(t), c = this.outputLen;
      if (c % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
      const l = c / 4, u = this.get();
      if (l > u.length) throw new Error("_sha2: outputLen bigger than state");
      for (let f = 0; f < l; f++) a.setUint32(4 * f, u[f], i);
    }
    digest() {
      const { buffer: t, outputLen: e } = this;
      this.digestInto(t);
      const n = t.slice(0, e);
      return this.destroy(), n;
    }
    _cloneInto(t) {
      t || (t = new this.constructor()), t.set(...this.get());
      const { blockLen: e, buffer: n, length: s, finished: i, destroyed: o, pos: a } = this;
      return t.length = s, t.pos = a, t.finished = i, t.destroyed = o, s % e && t.buffer.set(n), t;
    }
  };
  const Cc = (r, t, e) => r & t ^ ~r & e, kc = (r, t, e) => r & t ^ r & e ^ t & e, Oc = new Uint32Array([
    1116352408,
    1899447441,
    3049323471,
    3921009573,
    961987163,
    1508970993,
    2453635748,
    2870763221,
    3624381080,
    310598401,
    607225278,
    1426881987,
    1925078388,
    2162078206,
    2614888103,
    3248222580,
    3835390401,
    4022224774,
    264347078,
    604807628,
    770255983,
    1249150122,
    1555081692,
    1996064986,
    2554220882,
    2821834349,
    2952996808,
    3210313671,
    3336571891,
    3584528711,
    113926993,
    338241895,
    666307205,
    773529912,
    1294757372,
    1396182291,
    1695183700,
    1986661051,
    2177026350,
    2456956037,
    2730485921,
    2820302411,
    3259730800,
    3345764771,
    3516065817,
    3600352804,
    4094571909,
    275423344,
    430227734,
    506948616,
    659060556,
    883997877,
    958139571,
    1322822218,
    1537002063,
    1747873779,
    1955562222,
    2024104815,
    2227730452,
    2361852424,
    2428436474,
    2756734187,
    3204031479,
    3329325298
  ]), se = new Uint32Array([
    1779033703,
    3144134277,
    1013904242,
    2773480762,
    1359893119,
    2600822924,
    528734635,
    1541459225
  ]), ie = new Uint32Array(64);
  class Rc extends co {
    constructor() {
      super(64, 32, 8, false), this.A = se[0] | 0, this.B = se[1] | 0, this.C = se[2] | 0, this.D = se[3] | 0, this.E = se[4] | 0, this.F = se[5] | 0, this.G = se[6] | 0, this.H = se[7] | 0;
    }
    get() {
      const { A: t, B: e, C: n, D: s, E: i, F: o, G: a, H: c } = this;
      return [
        t,
        e,
        n,
        s,
        i,
        o,
        a,
        c
      ];
    }
    set(t, e, n, s, i, o, a, c) {
      this.A = t | 0, this.B = e | 0, this.C = n | 0, this.D = s | 0, this.E = i | 0, this.F = o | 0, this.G = a | 0, this.H = c | 0;
    }
    process(t, e) {
      for (let f = 0; f < 16; f++, e += 4) ie[f] = t.getUint32(e, false);
      for (let f = 16; f < 64; f++) {
        const h = ie[f - 15], g = ie[f - 2], m = Gt(h, 7) ^ Gt(h, 18) ^ h >>> 3, p = Gt(g, 17) ^ Gt(g, 19) ^ g >>> 10;
        ie[f] = p + ie[f - 7] + m + ie[f - 16] | 0;
      }
      let { A: n, B: s, C: i, D: o, E: a, F: c, G: l, H: u } = this;
      for (let f = 0; f < 64; f++) {
        const h = Gt(a, 6) ^ Gt(a, 11) ^ Gt(a, 25), g = u + h + Cc(a, c, l) + Oc[f] + ie[f] | 0, p = (Gt(n, 2) ^ Gt(n, 13) ^ Gt(n, 22)) + kc(n, s, i) | 0;
        u = l, l = c, c = a, a = o + g | 0, o = i, i = s, s = n, n = g + p | 0;
      }
      n = n + this.A | 0, s = s + this.B | 0, i = i + this.C | 0, o = o + this.D | 0, a = a + this.E | 0, c = c + this.F | 0, l = l + this.G | 0, u = u + this.H | 0, this.set(n, s, i, o, a, c, l, u);
    }
    roundClean() {
      ie.fill(0);
    }
    destroy() {
      this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
    }
  }
  let vn, Lr;
  tr = ss(() => new Rc());
  vn = BigInt(2 ** 32 - 1);
  Lr = BigInt(32);
  function lo(r, t = false) {
    return t ? {
      h: Number(r & vn),
      l: Number(r >> Lr & vn)
    } : {
      h: Number(r >> Lr & vn) | 0,
      l: Number(r & vn) | 0
    };
  }
  function uo(r, t = false) {
    let e = new Uint32Array(r.length), n = new Uint32Array(r.length);
    for (let s = 0; s < r.length; s++) {
      const { h: i, l: o } = lo(r[s], t);
      [e[s], n[s]] = [
        i,
        o
      ];
    }
    return [
      e,
      n
    ];
  }
  const Sc = (r, t) => BigInt(r >>> 0) << Lr | BigInt(t >>> 0), Lc = (r, t, e) => r >>> e, Uc = (r, t, e) => r << 32 - e | t >>> e, Fc = (r, t, e) => r >>> e | t << 32 - e, Dc = (r, t, e) => r << 32 - e | t >>> e, Gc = (r, t, e) => r << 64 - e | t >>> e - 32, Mc = (r, t, e) => r >>> e - 32 | t << 64 - e, Hc = (r, t) => t, Qc = (r, t) => r, fo = (r, t, e) => r << e | t >>> 32 - e, ho = (r, t, e) => t << e | r >>> 32 - e, po = (r, t, e) => t << e - 32 | r >>> 64 - e, go = (r, t, e) => r << e - 32 | t >>> 64 - e;
  function Vc(r, t, e, n) {
    const s = (t >>> 0) + (n >>> 0);
    return {
      h: r + e + (s / 2 ** 32 | 0) | 0,
      l: s | 0
    };
  }
  const Jc = (r, t, e) => (r >>> 0) + (t >>> 0) + (e >>> 0), Kc = (r, t, e, n) => t + e + n + (r / 2 ** 32 | 0) | 0, zc = (r, t, e, n) => (r >>> 0) + (t >>> 0) + (e >>> 0) + (n >>> 0), _c = (r, t, e, n, s) => t + e + n + s + (r / 2 ** 32 | 0) | 0, jc = (r, t, e, n, s) => (r >>> 0) + (t >>> 0) + (e >>> 0) + (n >>> 0) + (s >>> 0), Wc = (r, t, e, n, s, i) => t + e + n + s + i + (r / 2 ** 32 | 0) | 0, L = {
    fromBig: lo,
    split: uo,
    toBig: Sc,
    shrSH: Lc,
    shrSL: Uc,
    rotrSH: Fc,
    rotrSL: Dc,
    rotrBH: Gc,
    rotrBL: Mc,
    rotr32H: Hc,
    rotr32L: Qc,
    rotlSH: fo,
    rotlSL: ho,
    rotlBH: po,
    rotlBL: go,
    add: Vc,
    add3L: Jc,
    add3H: Kc,
    add4L: zc,
    add4H: _c,
    add5H: Wc,
    add5L: jc
  }, [Zc, Yc] = L.split([
    "0x428a2f98d728ae22",
    "0x7137449123ef65cd",
    "0xb5c0fbcfec4d3b2f",
    "0xe9b5dba58189dbbc",
    "0x3956c25bf348b538",
    "0x59f111f1b605d019",
    "0x923f82a4af194f9b",
    "0xab1c5ed5da6d8118",
    "0xd807aa98a3030242",
    "0x12835b0145706fbe",
    "0x243185be4ee4b28c",
    "0x550c7dc3d5ffb4e2",
    "0x72be5d74f27b896f",
    "0x80deb1fe3b1696b1",
    "0x9bdc06a725c71235",
    "0xc19bf174cf692694",
    "0xe49b69c19ef14ad2",
    "0xefbe4786384f25e3",
    "0x0fc19dc68b8cd5b5",
    "0x240ca1cc77ac9c65",
    "0x2de92c6f592b0275",
    "0x4a7484aa6ea6e483",
    "0x5cb0a9dcbd41fbd4",
    "0x76f988da831153b5",
    "0x983e5152ee66dfab",
    "0xa831c66d2db43210",
    "0xb00327c898fb213f",
    "0xbf597fc7beef0ee4",
    "0xc6e00bf33da88fc2",
    "0xd5a79147930aa725",
    "0x06ca6351e003826f",
    "0x142929670a0e6e70",
    "0x27b70a8546d22ffc",
    "0x2e1b21385c26c926",
    "0x4d2c6dfc5ac42aed",
    "0x53380d139d95b3df",
    "0x650a73548baf63de",
    "0x766a0abb3c77b2a8",
    "0x81c2c92e47edaee6",
    "0x92722c851482353b",
    "0xa2bfe8a14cf10364",
    "0xa81a664bbc423001",
    "0xc24b8b70d0f89791",
    "0xc76c51a30654be30",
    "0xd192e819d6ef5218",
    "0xd69906245565a910",
    "0xf40e35855771202a",
    "0x106aa07032bbd1b8",
    "0x19a4c116b8d2d0c8",
    "0x1e376c085141ab53",
    "0x2748774cdf8eeb99",
    "0x34b0bcb5e19b48a8",
    "0x391c0cb3c5c95a63",
    "0x4ed8aa4ae3418acb",
    "0x5b9cca4f7763e373",
    "0x682e6ff3d6b2b8a3",
    "0x748f82ee5defb2fc",
    "0x78a5636f43172f60",
    "0x84c87814a1f0ab72",
    "0x8cc702081a6439ec",
    "0x90befffa23631e28",
    "0xa4506cebde82bde9",
    "0xbef9a3f7b2c67915",
    "0xc67178f2e372532b",
    "0xca273eceea26619c",
    "0xd186b8c721c0c207",
    "0xeada7dd6cde0eb1e",
    "0xf57d4f7fee6ed178",
    "0x06f067aa72176fba",
    "0x0a637dc5a2c898a6",
    "0x113f9804bef90dae",
    "0x1b710b35131c471b",
    "0x28db77f523047d84",
    "0x32caab7b40c72493",
    "0x3c9ebe0a15c9bebc",
    "0x431d67c49c100d4c",
    "0x4cc5d4becb3e42b6",
    "0x597f299cfc657e2a",
    "0x5fcb6fab3ad6faec",
    "0x6c44198c4a475817"
  ].map((r) => BigInt(r))), oe = new Uint32Array(80), ae = new Uint32Array(80);
  class qc extends co {
    constructor() {
      super(128, 64, 16, false), this.Ah = 1779033703, this.Al = -205731576, this.Bh = -1150833019, this.Bl = -2067093701, this.Ch = 1013904242, this.Cl = -23791573, this.Dh = -1521486534, this.Dl = 1595750129, this.Eh = 1359893119, this.El = -1377402159, this.Fh = -1694144372, this.Fl = 725511199, this.Gh = 528734635, this.Gl = -79577749, this.Hh = 1541459225, this.Hl = 327033209;
    }
    get() {
      const { Ah: t, Al: e, Bh: n, Bl: s, Ch: i, Cl: o, Dh: a, Dl: c, Eh: l, El: u, Fh: f, Fl: h, Gh: g, Gl: m, Hh: p, Hl: y } = this;
      return [
        t,
        e,
        n,
        s,
        i,
        o,
        a,
        c,
        l,
        u,
        f,
        h,
        g,
        m,
        p,
        y
      ];
    }
    set(t, e, n, s, i, o, a, c, l, u, f, h, g, m, p, y) {
      this.Ah = t | 0, this.Al = e | 0, this.Bh = n | 0, this.Bl = s | 0, this.Ch = i | 0, this.Cl = o | 0, this.Dh = a | 0, this.Dl = c | 0, this.Eh = l | 0, this.El = u | 0, this.Fh = f | 0, this.Fl = h | 0, this.Gh = g | 0, this.Gl = m | 0, this.Hh = p | 0, this.Hl = y | 0;
    }
    process(t, e) {
      for (let A = 0; A < 16; A++, e += 4) oe[A] = t.getUint32(e), ae[A] = t.getUint32(e += 4);
      for (let A = 16; A < 80; A++) {
        const R = oe[A - 15] | 0, C = ae[A - 15] | 0, I = L.rotrSH(R, C, 1) ^ L.rotrSH(R, C, 8) ^ L.shrSH(R, C, 7), O = L.rotrSL(R, C, 1) ^ L.rotrSL(R, C, 8) ^ L.shrSL(R, C, 7), v = oe[A - 2] | 0, J = ae[A - 2] | 0, H = L.rotrSH(v, J, 19) ^ L.rotrBH(v, J, 61) ^ L.shrSH(v, J, 6), Q = L.rotrSL(v, J, 19) ^ L.rotrBL(v, J, 61) ^ L.shrSL(v, J, 6), it = L.add4L(O, Q, ae[A - 7], ae[A - 16]), ft = L.add4H(it, I, H, oe[A - 7], oe[A - 16]);
        oe[A] = ft | 0, ae[A] = it | 0;
      }
      let { Ah: n, Al: s, Bh: i, Bl: o, Ch: a, Cl: c, Dh: l, Dl: u, Eh: f, El: h, Fh: g, Fl: m, Gh: p, Gl: y, Hh: b, Hl: P } = this;
      for (let A = 0; A < 80; A++) {
        const R = L.rotrSH(f, h, 14) ^ L.rotrSH(f, h, 18) ^ L.rotrBH(f, h, 41), C = L.rotrSL(f, h, 14) ^ L.rotrSL(f, h, 18) ^ L.rotrBL(f, h, 41), I = f & g ^ ~f & p, O = h & m ^ ~h & y, v = L.add5L(P, C, O, Yc[A], ae[A]), J = L.add5H(v, b, R, I, Zc[A], oe[A]), H = v | 0, Q = L.rotrSH(n, s, 28) ^ L.rotrBH(n, s, 34) ^ L.rotrBH(n, s, 39), it = L.rotrSL(n, s, 28) ^ L.rotrBL(n, s, 34) ^ L.rotrBL(n, s, 39), ft = n & i ^ n & a ^ i & a, Ft = s & o ^ s & c ^ o & c;
        b = p | 0, P = y | 0, p = g | 0, y = m | 0, g = f | 0, m = h | 0, { h: f, l: h } = L.add(l | 0, u | 0, J | 0, H | 0), l = a | 0, u = c | 0, a = i | 0, c = o | 0, i = n | 0, o = s | 0;
        const E = L.add3L(H, it, Ft);
        n = L.add3H(E, J, Q, ft), s = E | 0;
      }
      ({ h: n, l: s } = L.add(this.Ah | 0, this.Al | 0, n | 0, s | 0)), { h: i, l: o } = L.add(this.Bh | 0, this.Bl | 0, i | 0, o | 0), { h: a, l: c } = L.add(this.Ch | 0, this.Cl | 0, a | 0, c | 0), { h: l, l: u } = L.add(this.Dh | 0, this.Dl | 0, l | 0, u | 0), { h: f, l: h } = L.add(this.Eh | 0, this.El | 0, f | 0, h | 0), { h: g, l: m } = L.add(this.Fh | 0, this.Fl | 0, g | 0, m | 0), { h: p, l: y } = L.add(this.Gh | 0, this.Gl | 0, p | 0, y | 0), { h: b, l: P } = L.add(this.Hh | 0, this.Hl | 0, b | 0, P | 0), this.set(n, s, i, o, a, c, l, u, f, h, g, m, p, y, b, P);
    }
    roundClean() {
      oe.fill(0), ae.fill(0);
    }
    destroy() {
      this.buffer.fill(0), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    }
  }
  const is = ss(() => new qc());
  function Xc() {
    if (typeof self < "u") return self;
    if (typeof window < "u") return window;
    if (typeof globalThis < "u") return globalThis;
    throw new Error("unable to locate global object");
  }
  const Gs = Xc(), Ms = Gs.crypto || Gs.msCrypto;
  function $c(r) {
    switch (r) {
      case "sha256":
        return tr.create();
      case "sha512":
        return is.create();
    }
    d(false, "invalid hashing algorithm name", "algorithm", r);
  }
  G0 = function(r, t) {
    const e = {
      sha256: tr,
      sha512: is
    }[r];
    return d(e != null, "invalid hmac algorithm", "algorithm", r), $n.create(e, t);
  };
  M0 = function(r, t, e, n, s) {
    const i = {
      sha256: tr,
      sha512: is
    }[s];
    return d(i != null, "invalid pbkdf2 algorithm", "algorithm", s), Tc(i, r, t, {
      c: e,
      dkLen: n
    });
  };
  H0 = function(r) {
    w(Ms != null, "platform does not support secure random numbers", "UNSUPPORTED_OPERATION", {
      operation: "randomBytes"
    }), d(Number.isInteger(r) && r > 0 && r <= 1024, "invalid length", "length", r);
    const t = new Uint8Array(r);
    return Ms.getRandomValues(t), t;
  };
  const [yo, mo, bo] = [
    [],
    [],
    []
  ], tl = BigInt(0), $e = BigInt(1), el = BigInt(2), nl = BigInt(7), rl = BigInt(256), sl = BigInt(113);
  for (let r = 0, t = $e, e = 1, n = 0; r < 24; r++) {
    [e, n] = [
      n,
      (2 * e + 3 * n) % 5
    ], yo.push(2 * (5 * n + e)), mo.push((r + 1) * (r + 2) / 2 % 64);
    let s = tl;
    for (let i = 0; i < 7; i++) t = (t << $e ^ (t >> nl) * sl) % rl, t & el && (s ^= $e << ($e << BigInt(i)) - $e);
    bo.push(s);
  }
  const [il, ol] = uo(bo, true), Hs = (r, t, e) => e > 32 ? po(r, t, e) : fo(r, t, e), Qs = (r, t, e) => e > 32 ? go(r, t, e) : ho(r, t, e);
  function al(r, t = 24) {
    const e = new Uint32Array(10);
    for (let n = 24 - t; n < 24; n++) {
      for (let o = 0; o < 10; o++) e[o] = r[o] ^ r[o + 10] ^ r[o + 20] ^ r[o + 30] ^ r[o + 40];
      for (let o = 0; o < 10; o += 2) {
        const a = (o + 8) % 10, c = (o + 2) % 10, l = e[c], u = e[c + 1], f = Hs(l, u, 1) ^ e[a], h = Qs(l, u, 1) ^ e[a + 1];
        for (let g = 0; g < 50; g += 10) r[o + g] ^= f, r[o + g + 1] ^= h;
      }
      let s = r[2], i = r[3];
      for (let o = 0; o < 24; o++) {
        const a = mo[o], c = Hs(s, i, a), l = Qs(s, i, a), u = yo[o];
        s = r[u], i = r[u + 1], r[u] = c, r[u + 1] = l;
      }
      for (let o = 0; o < 50; o += 10) {
        for (let a = 0; a < 10; a++) e[a] = r[o + a];
        for (let a = 0; a < 10; a++) r[o + a] ^= ~e[(a + 2) % 10] & e[(a + 4) % 10];
      }
      r[0] ^= il[n], r[1] ^= ol[n];
    }
    e.fill(0);
  }
  class os extends rs {
    constructor(t, e, n, s = false, i = 24) {
      if (super(), this.blockLen = t, this.suffix = e, this.outputLen = n, this.enableXOF = s, this.rounds = i, this.pos = 0, this.posOut = 0, this.finished = false, this.destroyed = false, Ee(n), 0 >= this.blockLen || this.blockLen >= 200) throw new Error("Sha3 supports only keccak-f1600 function");
      this.state = new Uint8Array(200), this.state32 = mc(this.state);
    }
    keccak() {
      al(this.state32, this.rounds), this.posOut = 0, this.pos = 0;
    }
    update(t) {
      Qe(this);
      const { blockLen: e, state: n } = this;
      t = Ve(t);
      const s = t.length;
      for (let i = 0; i < s; ) {
        const o = Math.min(e - this.pos, s - i);
        for (let a = 0; a < o; a++) n[this.pos++] ^= t[i++];
        this.pos === e && this.keccak();
      }
      return this;
    }
    finish() {
      if (this.finished) return;
      this.finished = true;
      const { state: t, suffix: e, pos: n, blockLen: s } = this;
      t[n] ^= e, (e & 128) !== 0 && n === s - 1 && this.keccak(), t[s - 1] ^= 128, this.keccak();
    }
    writeInto(t) {
      Qe(this, false), ns(t), this.finish();
      const e = this.state, { blockLen: n } = this;
      for (let s = 0, i = t.length; s < i; ) {
        this.posOut >= n && this.keccak();
        const o = Math.min(n - this.posOut, i - s);
        t.set(e.subarray(this.posOut, this.posOut + o), s), this.posOut += o, s += o;
      }
      return t;
    }
    xofInto(t) {
      if (!this.enableXOF) throw new Error("XOF is not possible for this instance");
      return this.writeInto(t);
    }
    xof(t) {
      return Ee(t), this.xofInto(new Uint8Array(t));
    }
    digestInto(t) {
      if (io(t, this), this.finished) throw new Error("digest() was already called");
      return this.writeInto(t), this.destroy(), t;
    }
    digest() {
      return this.digestInto(new Uint8Array(this.outputLen));
    }
    destroy() {
      this.destroyed = true, this.state.fill(0);
    }
    _cloneInto(t) {
      const { blockLen: e, suffix: n, outputLen: s, rounds: i, enableXOF: o } = this;
      return t || (t = new os(e, n, s, o, i)), t.state32.set(this.state32), t.pos = this.pos, t.posOut = this.posOut, t.finished = this.finished, t.rounds = i, t.suffix = n, t.outputLen = s, t.enableXOF = o, t.destroyed = this.destroyed, t;
    }
  }
  const cl = (r, t, e) => ss(() => new os(t, r, e)), ll = cl(1, 136, 256 / 8);
  let wo = false;
  const Ao = function(r) {
    return ll(r);
  };
  let Eo = Ao;
  rt = function(r) {
    const t = S(r, "data");
    return x(Eo(t));
  };
  rt._ = Ao;
  rt.lock = function() {
    wo = true;
  };
  rt.register = function(r) {
    if (wo) throw new TypeError("keccak256 is locked");
    Eo = r;
  };
  Object.freeze(rt);
  const xo = function(r) {
    return $c("sha256").update(r).digest();
  };
  let Po = xo, Bo = false;
  Ze = function(r) {
    const t = S(r, "data");
    return x(Po(t));
  };
  Ze._ = xo;
  Ze.lock = function() {
    Bo = true;
  };
  Ze.register = function(r) {
    if (Bo) throw new Error("sha256 is locked");
    Po = r;
  };
  Object.freeze(Ze);
  Object.freeze(Ze);
  BigInt(0);
  const ul = BigInt(1), fl = BigInt(2), er = (r) => r instanceof Uint8Array, hl = Array.from({
    length: 256
  }, (r, t) => t.toString(16).padStart(2, "0"));
  function Je(r) {
    if (!er(r)) throw new Error("Uint8Array expected");
    let t = "";
    for (let e = 0; e < r.length; e++) t += hl[r[e]];
    return t;
  }
  function as(r) {
    if (typeof r != "string") throw new Error("hex string expected, got " + typeof r);
    return BigInt(r === "" ? "0" : `0x${r}`);
  }
  function an(r) {
    if (typeof r != "string") throw new Error("hex string expected, got " + typeof r);
    const t = r.length;
    if (t % 2) throw new Error("padded hex string expected, got unpadded hex of length " + t);
    const e = new Uint8Array(t / 2);
    for (let n = 0; n < e.length; n++) {
      const s = n * 2, i = r.slice(s, s + 2), o = Number.parseInt(i, 16);
      if (Number.isNaN(o) || o < 0) throw new Error("Invalid byte sequence");
      e[n] = o;
    }
    return e;
  }
  function xe(r) {
    return as(Je(r));
  }
  function cs(r) {
    if (!er(r)) throw new Error("Uint8Array expected");
    return as(Je(Uint8Array.from(r).reverse()));
  }
  function Ke(r, t) {
    return an(r.toString(16).padStart(t * 2, "0"));
  }
  function ls(r, t) {
    return Ke(r, t).reverse();
  }
  function kt(r, t, e) {
    let n;
    if (typeof t == "string") try {
      n = an(t);
    } catch (i) {
      throw new Error(`${r} must be valid hex string, got "${t}". Cause: ${i}`);
    }
    else if (er(t)) n = Uint8Array.from(t);
    else throw new Error(`${r} must be hex string or Uint8Array`);
    const s = n.length;
    if (typeof e == "number" && s !== e) throw new Error(`${r} expected ${e} bytes, got ${s}`);
    return n;
  }
  function cn(...r) {
    const t = new Uint8Array(r.reduce((n, s) => n + s.length, 0));
    let e = 0;
    return r.forEach((n) => {
      if (!er(n)) throw new Error("Uint8Array expected");
      t.set(n, e), e += n.length;
    }), t;
  }
  const us = (r) => (fl << BigInt(r - 1)) - ul, gr = (r) => new Uint8Array(r), Vs = (r) => Uint8Array.from(r);
  function No(r, t, e) {
    if (typeof r != "number" || r < 2) throw new Error("hashLen must be a number");
    if (typeof t != "number" || t < 2) throw new Error("qByteLen must be a number");
    if (typeof e != "function") throw new Error("hmacFn must be a function");
    let n = gr(r), s = gr(r), i = 0;
    const o = () => {
      n.fill(1), s.fill(0), i = 0;
    }, a = (...f) => e(s, n, ...f), c = (f = gr()) => {
      s = a(Vs([
        0
      ]), f), n = a(), f.length !== 0 && (s = a(Vs([
        1
      ]), f), n = a());
    }, l = () => {
      if (i++ >= 1e3) throw new Error("drbg: tried 1000 values");
      let f = 0;
      const h = [];
      for (; f < t; ) {
        n = a();
        const g = n.slice();
        h.push(g), f += n.length;
      }
      return cn(...h);
    };
    return (f, h) => {
      o(), c(f);
      let g;
      for (; !(g = h(l())); ) c();
      return o(), g;
    };
  }
  const dl = {
    bigint: (r) => typeof r == "bigint",
    function: (r) => typeof r == "function",
    boolean: (r) => typeof r == "boolean",
    string: (r) => typeof r == "string",
    stringOrUint8Array: (r) => typeof r == "string" || r instanceof Uint8Array,
    isSafeInteger: (r) => Number.isSafeInteger(r),
    array: (r) => Array.isArray(r),
    field: (r, t) => t.Fp.isValid(r),
    hash: (r) => typeof r == "function" && Number.isSafeInteger(r.outputLen)
  };
  function mn(r, t, e = {}) {
    const n = (s, i, o) => {
      const a = dl[i];
      if (typeof a != "function") throw new Error(`Invalid validator "${i}", expected function`);
      const c = r[s];
      if (!(o && c === void 0) && !a(c, r)) throw new Error(`Invalid param ${String(s)}=${c} (${typeof c}), expected ${i}`);
    };
    for (const [s, i] of Object.entries(t)) n(s, i, false);
    for (const [s, i] of Object.entries(e)) n(s, i, true);
    return r;
  }
  const pl = Object.freeze(Object.defineProperty({
    __proto__: null,
    bitMask: us,
    bytesToHex: Je,
    bytesToNumberBE: xe,
    bytesToNumberLE: cs,
    concatBytes: cn,
    createHmacDrbg: No,
    ensureBytes: kt,
    hexToBytes: an,
    hexToNumber: as,
    numberToBytesBE: Ke,
    numberToBytesLE: ls,
    validateObject: mn
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  const ut = BigInt(0), nt = BigInt(1), me = BigInt(2), gl = BigInt(3), Ur = BigInt(4), Js = BigInt(5), Ks = BigInt(8);
  BigInt(9);
  BigInt(16);
  function mt(r, t) {
    const e = r % t;
    return e >= ut ? e : t + e;
  }
  function yl(r, t, e) {
    if (e <= ut || t < ut) throw new Error("Expected power/modulo > 0");
    if (e === nt) return ut;
    let n = nt;
    for (; t > ut; ) t & nt && (n = n * r % e), r = r * r % e, t >>= nt;
    return n;
  }
  function Nt(r, t, e) {
    let n = r;
    for (; t-- > ut; ) n *= n, n %= e;
    return n;
  }
  function Fr(r, t) {
    if (r === ut || t <= ut) throw new Error(`invert: expected positive integers, got n=${r} mod=${t}`);
    let e = mt(r, t), n = t, s = ut, i = nt;
    for (; e !== ut; ) {
      const a = n / e, c = n % e, l = s - i * a;
      n = e, e = c, s = i, i = l;
    }
    if (n !== nt) throw new Error("invert: does not exist");
    return mt(s, t);
  }
  function ml(r) {
    const t = (r - nt) / me;
    let e, n, s;
    for (e = r - nt, n = 0; e % me === ut; e /= me, n++) ;
    for (s = me; s < r && yl(s, t, r) !== r - nt; s++) ;
    if (n === 1) {
      const o = (r + nt) / Ur;
      return function(c, l) {
        const u = c.pow(l, o);
        if (!c.eql(c.sqr(u), l)) throw new Error("Cannot find square root");
        return u;
      };
    }
    const i = (e + nt) / me;
    return function(a, c) {
      if (a.pow(c, t) === a.neg(a.ONE)) throw new Error("Cannot find square root");
      let l = n, u = a.pow(a.mul(a.ONE, s), e), f = a.pow(c, i), h = a.pow(c, e);
      for (; !a.eql(h, a.ONE); ) {
        if (a.eql(h, a.ZERO)) return a.ZERO;
        let g = 1;
        for (let p = a.sqr(h); g < l && !a.eql(p, a.ONE); g++) p = a.sqr(p);
        const m = a.pow(u, nt << BigInt(l - g - 1));
        u = a.sqr(m), f = a.mul(f, m), h = a.mul(h, u), l = g;
      }
      return f;
    };
  }
  function bl(r) {
    if (r % Ur === gl) {
      const t = (r + nt) / Ur;
      return function(n, s) {
        const i = n.pow(s, t);
        if (!n.eql(n.sqr(i), s)) throw new Error("Cannot find square root");
        return i;
      };
    }
    if (r % Ks === Js) {
      const t = (r - Js) / Ks;
      return function(n, s) {
        const i = n.mul(s, me), o = n.pow(i, t), a = n.mul(s, o), c = n.mul(n.mul(a, me), o), l = n.mul(a, n.sub(c, n.ONE));
        if (!n.eql(n.sqr(l), s)) throw new Error("Cannot find square root");
        return l;
      };
    }
    return ml(r);
  }
  const wl = [
    "create",
    "isValid",
    "is0",
    "neg",
    "inv",
    "sqrt",
    "sqr",
    "eql",
    "add",
    "sub",
    "mul",
    "pow",
    "div",
    "addN",
    "subN",
    "mulN",
    "sqrN"
  ];
  function Al(r) {
    const t = {
      ORDER: "bigint",
      MASK: "bigint",
      BYTES: "isSafeInteger",
      BITS: "isSafeInteger"
    }, e = wl.reduce((n, s) => (n[s] = "function", n), t);
    return mn(r, e);
  }
  function El(r, t, e) {
    if (e < ut) throw new Error("Expected power > 0");
    if (e === ut) return r.ONE;
    if (e === nt) return t;
    let n = r.ONE, s = t;
    for (; e > ut; ) e & nt && (n = r.mul(n, s)), s = r.sqr(s), e >>= nt;
    return n;
  }
  function xl(r, t) {
    const e = new Array(t.length), n = t.reduce((i, o, a) => r.is0(o) ? i : (e[a] = i, r.mul(i, o)), r.ONE), s = r.inv(n);
    return t.reduceRight((i, o, a) => r.is0(o) ? i : (e[a] = r.mul(i, e[a]), r.mul(i, o)), s), e;
  }
  function Io(r, t) {
    const e = t !== void 0 ? t : r.toString(2).length, n = Math.ceil(e / 8);
    return {
      nBitLength: e,
      nByteLength: n
    };
  }
  function Pl(r, t, e = false, n = {}) {
    if (r <= ut) throw new Error(`Expected Field ORDER > 0, got ${r}`);
    const { nBitLength: s, nByteLength: i } = Io(r, t);
    if (i > 2048) throw new Error("Field lengths over 2048 bytes are not supported");
    const o = bl(r), a = Object.freeze({
      ORDER: r,
      BITS: s,
      BYTES: i,
      MASK: us(s),
      ZERO: ut,
      ONE: nt,
      create: (c) => mt(c, r),
      isValid: (c) => {
        if (typeof c != "bigint") throw new Error(`Invalid field element: expected bigint, got ${typeof c}`);
        return ut <= c && c < r;
      },
      is0: (c) => c === ut,
      isOdd: (c) => (c & nt) === nt,
      neg: (c) => mt(-c, r),
      eql: (c, l) => c === l,
      sqr: (c) => mt(c * c, r),
      add: (c, l) => mt(c + l, r),
      sub: (c, l) => mt(c - l, r),
      mul: (c, l) => mt(c * l, r),
      pow: (c, l) => El(a, c, l),
      div: (c, l) => mt(c * Fr(l, r), r),
      sqrN: (c) => c * c,
      addN: (c, l) => c + l,
      subN: (c, l) => c - l,
      mulN: (c, l) => c * l,
      inv: (c) => Fr(c, r),
      sqrt: n.sqrt || ((c) => o(a, c)),
      invertBatch: (c) => xl(a, c),
      cmov: (c, l, u) => u ? l : c,
      toBytes: (c) => e ? ls(c, i) : Ke(c, i),
      fromBytes: (c) => {
        if (c.length !== i) throw new Error(`Fp.fromBytes: expected ${i}, got ${c.length}`);
        return e ? cs(c) : xe(c);
      }
    });
    return Object.freeze(a);
  }
  function To(r) {
    if (typeof r != "bigint") throw new Error("field order must be bigint");
    const t = r.toString(2).length;
    return Math.ceil(t / 8);
  }
  function vo(r) {
    const t = To(r);
    return t + Math.ceil(t / 2);
  }
  function Bl(r, t, e = false) {
    const n = r.length, s = To(t), i = vo(t);
    if (n < 16 || n < i || n > 1024) throw new Error(`expected ${i}-1024 bytes of input, got ${n}`);
    const o = e ? xe(r) : cs(r), a = mt(o, t - nt) + nt;
    return e ? ls(a, s) : Ke(a, s);
  }
  const Nl = BigInt(0), yr = BigInt(1);
  function Il(r, t) {
    const e = (s, i) => {
      const o = i.negate();
      return s ? o : i;
    }, n = (s) => {
      const i = Math.ceil(t / s) + 1, o = 2 ** (s - 1);
      return {
        windows: i,
        windowSize: o
      };
    };
    return {
      constTimeNegate: e,
      unsafeLadder(s, i) {
        let o = r.ZERO, a = s;
        for (; i > Nl; ) i & yr && (o = o.add(a)), a = a.double(), i >>= yr;
        return o;
      },
      precomputeWindow(s, i) {
        const { windows: o, windowSize: a } = n(i), c = [];
        let l = s, u = l;
        for (let f = 0; f < o; f++) {
          u = l, c.push(u);
          for (let h = 1; h < a; h++) u = u.add(l), c.push(u);
          l = u.double();
        }
        return c;
      },
      wNAF(s, i, o) {
        const { windows: a, windowSize: c } = n(s);
        let l = r.ZERO, u = r.BASE;
        const f = BigInt(2 ** s - 1), h = 2 ** s, g = BigInt(s);
        for (let m = 0; m < a; m++) {
          const p = m * c;
          let y = Number(o & f);
          o >>= g, y > c && (y -= h, o += yr);
          const b = p, P = p + Math.abs(y) - 1, A = m % 2 !== 0, R = y < 0;
          y === 0 ? u = u.add(e(A, i[b])) : l = l.add(e(R, i[P]));
        }
        return {
          p: l,
          f: u
        };
      },
      wNAFCached(s, i, o, a) {
        const c = s._WINDOW_SIZE || 1;
        let l = i.get(s);
        return l || (l = this.precomputeWindow(s, c), c !== 1 && i.set(s, a(l))), this.wNAF(c, l, o);
      }
    };
  }
  function Co(r) {
    return Al(r.Fp), mn(r, {
      n: "bigint",
      h: "bigint",
      Gx: "field",
      Gy: "field"
    }, {
      nBitLength: "isSafeInteger",
      nByteLength: "isSafeInteger"
    }), Object.freeze({
      ...Io(r.n, r.nBitLength),
      ...r,
      p: r.Fp.ORDER
    });
  }
  function Tl(r) {
    const t = Co(r);
    mn(t, {
      a: "field",
      b: "field"
    }, {
      allowedPrivateKeyLengths: "array",
      wrapPrivateKey: "boolean",
      isTorsionFree: "function",
      clearCofactor: "function",
      allowInfinityPoint: "boolean",
      fromBytes: "function",
      toBytes: "function"
    });
    const { endo: e, Fp: n, a: s } = t;
    if (e) {
      if (!n.eql(s, n.ZERO)) throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");
      if (typeof e != "object" || typeof e.beta != "bigint" || typeof e.splitScalar != "function") throw new Error("Expected endomorphism with beta: bigint and splitScalar: function");
    }
    return Object.freeze({
      ...t
    });
  }
  const { bytesToNumberBE: vl, hexToBytes: Cl } = pl, be = {
    Err: class extends Error {
      constructor(t = "") {
        super(t);
      }
    },
    _parseInt(r) {
      const { Err: t } = be;
      if (r.length < 2 || r[0] !== 2) throw new t("Invalid signature integer tag");
      const e = r[1], n = r.subarray(2, e + 2);
      if (!e || n.length !== e) throw new t("Invalid signature integer: wrong length");
      if (n[0] & 128) throw new t("Invalid signature integer: negative");
      if (n[0] === 0 && !(n[1] & 128)) throw new t("Invalid signature integer: unnecessary leading zero");
      return {
        d: vl(n),
        l: r.subarray(e + 2)
      };
    },
    toSig(r) {
      const { Err: t } = be, e = typeof r == "string" ? Cl(r) : r;
      if (!(e instanceof Uint8Array)) throw new Error("ui8a expected");
      let n = e.length;
      if (n < 2 || e[0] != 48) throw new t("Invalid signature tag");
      if (e[1] !== n - 2) throw new t("Invalid signature: incorrect length");
      const { d: s, l: i } = be._parseInt(e.subarray(2)), { d: o, l: a } = be._parseInt(i);
      if (a.length) throw new t("Invalid signature: left bytes after parsing");
      return {
        r: s,
        s: o
      };
    },
    hexFromSig(r) {
      const t = (l) => Number.parseInt(l[0], 16) & 8 ? "00" + l : l, e = (l) => {
        const u = l.toString(16);
        return u.length & 1 ? `0${u}` : u;
      }, n = t(e(r.s)), s = t(e(r.r)), i = n.length / 2, o = s.length / 2, a = e(i), c = e(o);
      return `30${e(o + i + 4)}02${c}${s}02${a}${n}`;
    }
  }, Jt = BigInt(0), It = BigInt(1);
  BigInt(2);
  const zs = BigInt(3);
  BigInt(4);
  function kl(r) {
    const t = Tl(r), { Fp: e } = t, n = t.toBytes || ((m, p, y) => {
      const b = p.toAffine();
      return cn(Uint8Array.from([
        4
      ]), e.toBytes(b.x), e.toBytes(b.y));
    }), s = t.fromBytes || ((m) => {
      const p = m.subarray(1), y = e.fromBytes(p.subarray(0, e.BYTES)), b = e.fromBytes(p.subarray(e.BYTES, 2 * e.BYTES));
      return {
        x: y,
        y: b
      };
    });
    function i(m) {
      const { a: p, b: y } = t, b = e.sqr(m), P = e.mul(b, m);
      return e.add(e.add(P, e.mul(m, p)), y);
    }
    if (!e.eql(e.sqr(t.Gy), i(t.Gx))) throw new Error("bad generator point: equation left != right");
    function o(m) {
      return typeof m == "bigint" && Jt < m && m < t.n;
    }
    function a(m) {
      if (!o(m)) throw new Error("Expected valid bigint: 0 < bigint < curve.n");
    }
    function c(m) {
      const { allowedPrivateKeyLengths: p, nByteLength: y, wrapPrivateKey: b, n: P } = t;
      if (p && typeof m != "bigint") {
        if (m instanceof Uint8Array && (m = Je(m)), typeof m != "string" || !p.includes(m.length)) throw new Error("Invalid key");
        m = m.padStart(y * 2, "0");
      }
      let A;
      try {
        A = typeof m == "bigint" ? m : xe(kt("private key", m, y));
      } catch {
        throw new Error(`private key must be ${y} bytes, hex or bigint, not ${typeof m}`);
      }
      return b && (A = mt(A, P)), a(A), A;
    }
    const l = /* @__PURE__ */ new Map();
    function u(m) {
      if (!(m instanceof f)) throw new Error("ProjectivePoint expected");
    }
    class f {
      constructor(p, y, b) {
        if (this.px = p, this.py = y, this.pz = b, p == null || !e.isValid(p)) throw new Error("x required");
        if (y == null || !e.isValid(y)) throw new Error("y required");
        if (b == null || !e.isValid(b)) throw new Error("z required");
      }
      static fromAffine(p) {
        const { x: y, y: b } = p || {};
        if (!p || !e.isValid(y) || !e.isValid(b)) throw new Error("invalid affine point");
        if (p instanceof f) throw new Error("projective point not allowed");
        const P = (A) => e.eql(A, e.ZERO);
        return P(y) && P(b) ? f.ZERO : new f(y, b, e.ONE);
      }
      get x() {
        return this.toAffine().x;
      }
      get y() {
        return this.toAffine().y;
      }
      static normalizeZ(p) {
        const y = e.invertBatch(p.map((b) => b.pz));
        return p.map((b, P) => b.toAffine(y[P])).map(f.fromAffine);
      }
      static fromHex(p) {
        const y = f.fromAffine(s(kt("pointHex", p)));
        return y.assertValidity(), y;
      }
      static fromPrivateKey(p) {
        return f.BASE.multiply(c(p));
      }
      _setWindowSize(p) {
        this._WINDOW_SIZE = p, l.delete(this);
      }
      assertValidity() {
        if (this.is0()) {
          if (t.allowInfinityPoint && !e.is0(this.py)) return;
          throw new Error("bad point: ZERO");
        }
        const { x: p, y } = this.toAffine();
        if (!e.isValid(p) || !e.isValid(y)) throw new Error("bad point: x or y not FE");
        const b = e.sqr(y), P = i(p);
        if (!e.eql(b, P)) throw new Error("bad point: equation left != right");
        if (!this.isTorsionFree()) throw new Error("bad point: not in prime-order subgroup");
      }
      hasEvenY() {
        const { y: p } = this.toAffine();
        if (e.isOdd) return !e.isOdd(p);
        throw new Error("Field doesn't support isOdd");
      }
      equals(p) {
        u(p);
        const { px: y, py: b, pz: P } = this, { px: A, py: R, pz: C } = p, I = e.eql(e.mul(y, C), e.mul(A, P)), O = e.eql(e.mul(b, C), e.mul(R, P));
        return I && O;
      }
      negate() {
        return new f(this.px, e.neg(this.py), this.pz);
      }
      double() {
        const { a: p, b: y } = t, b = e.mul(y, zs), { px: P, py: A, pz: R } = this;
        let C = e.ZERO, I = e.ZERO, O = e.ZERO, v = e.mul(P, P), J = e.mul(A, A), H = e.mul(R, R), Q = e.mul(P, A);
        return Q = e.add(Q, Q), O = e.mul(P, R), O = e.add(O, O), C = e.mul(p, O), I = e.mul(b, H), I = e.add(C, I), C = e.sub(J, I), I = e.add(J, I), I = e.mul(C, I), C = e.mul(Q, C), O = e.mul(b, O), H = e.mul(p, H), Q = e.sub(v, H), Q = e.mul(p, Q), Q = e.add(Q, O), O = e.add(v, v), v = e.add(O, v), v = e.add(v, H), v = e.mul(v, Q), I = e.add(I, v), H = e.mul(A, R), H = e.add(H, H), v = e.mul(H, Q), C = e.sub(C, v), O = e.mul(H, J), O = e.add(O, O), O = e.add(O, O), new f(C, I, O);
      }
      add(p) {
        u(p);
        const { px: y, py: b, pz: P } = this, { px: A, py: R, pz: C } = p;
        let I = e.ZERO, O = e.ZERO, v = e.ZERO;
        const J = t.a, H = e.mul(t.b, zs);
        let Q = e.mul(y, A), it = e.mul(b, R), ft = e.mul(P, C), Ft = e.add(y, b), E = e.add(A, R);
        Ft = e.mul(Ft, E), E = e.add(Q, it), Ft = e.sub(Ft, E), E = e.add(y, P);
        let T = e.add(A, C);
        return E = e.mul(E, T), T = e.add(Q, ft), E = e.sub(E, T), T = e.add(b, P), I = e.add(R, C), T = e.mul(T, I), I = e.add(it, ft), T = e.sub(T, I), v = e.mul(J, E), I = e.mul(H, ft), v = e.add(I, v), I = e.sub(it, v), v = e.add(it, v), O = e.mul(I, v), it = e.add(Q, Q), it = e.add(it, Q), ft = e.mul(J, ft), E = e.mul(H, E), it = e.add(it, ft), ft = e.sub(Q, ft), ft = e.mul(J, ft), E = e.add(E, ft), Q = e.mul(it, E), O = e.add(O, Q), Q = e.mul(T, E), I = e.mul(Ft, I), I = e.sub(I, Q), Q = e.mul(Ft, it), v = e.mul(T, v), v = e.add(v, Q), new f(I, O, v);
      }
      subtract(p) {
        return this.add(p.negate());
      }
      is0() {
        return this.equals(f.ZERO);
      }
      wNAF(p) {
        return g.wNAFCached(this, l, p, (y) => {
          const b = e.invertBatch(y.map((P) => P.pz));
          return y.map((P, A) => P.toAffine(b[A])).map(f.fromAffine);
        });
      }
      multiplyUnsafe(p) {
        const y = f.ZERO;
        if (p === Jt) return y;
        if (a(p), p === It) return this;
        const { endo: b } = t;
        if (!b) return g.unsafeLadder(this, p);
        let { k1neg: P, k1: A, k2neg: R, k2: C } = b.splitScalar(p), I = y, O = y, v = this;
        for (; A > Jt || C > Jt; ) A & It && (I = I.add(v)), C & It && (O = O.add(v)), v = v.double(), A >>= It, C >>= It;
        return P && (I = I.negate()), R && (O = O.negate()), O = new f(e.mul(O.px, b.beta), O.py, O.pz), I.add(O);
      }
      multiply(p) {
        a(p);
        let y = p, b, P;
        const { endo: A } = t;
        if (A) {
          const { k1neg: R, k1: C, k2neg: I, k2: O } = A.splitScalar(y);
          let { p: v, f: J } = this.wNAF(C), { p: H, f: Q } = this.wNAF(O);
          v = g.constTimeNegate(R, v), H = g.constTimeNegate(I, H), H = new f(e.mul(H.px, A.beta), H.py, H.pz), b = v.add(H), P = J.add(Q);
        } else {
          const { p: R, f: C } = this.wNAF(y);
          b = R, P = C;
        }
        return f.normalizeZ([
          b,
          P
        ])[0];
      }
      multiplyAndAddUnsafe(p, y, b) {
        const P = f.BASE, A = (C, I) => I === Jt || I === It || !C.equals(P) ? C.multiplyUnsafe(I) : C.multiply(I), R = A(this, y).add(A(p, b));
        return R.is0() ? void 0 : R;
      }
      toAffine(p) {
        const { px: y, py: b, pz: P } = this, A = this.is0();
        p == null && (p = A ? e.ONE : e.inv(P));
        const R = e.mul(y, p), C = e.mul(b, p), I = e.mul(P, p);
        if (A) return {
          x: e.ZERO,
          y: e.ZERO
        };
        if (!e.eql(I, e.ONE)) throw new Error("invZ was invalid");
        return {
          x: R,
          y: C
        };
      }
      isTorsionFree() {
        const { h: p, isTorsionFree: y } = t;
        if (p === It) return true;
        if (y) return y(f, this);
        throw new Error("isTorsionFree() has not been declared for the elliptic curve");
      }
      clearCofactor() {
        const { h: p, clearCofactor: y } = t;
        return p === It ? this : y ? y(f, this) : this.multiplyUnsafe(t.h);
      }
      toRawBytes(p = true) {
        return this.assertValidity(), n(f, this, p);
      }
      toHex(p = true) {
        return Je(this.toRawBytes(p));
      }
    }
    f.BASE = new f(t.Gx, t.Gy, e.ONE), f.ZERO = new f(e.ZERO, e.ONE, e.ZERO);
    const h = t.nBitLength, g = Il(f, t.endo ? Math.ceil(h / 2) : h);
    return {
      CURVE: t,
      ProjectivePoint: f,
      normPrivateKeyToScalar: c,
      weierstrassEquation: i,
      isWithinCurveOrder: o
    };
  }
  function Ol(r) {
    const t = Co(r);
    return mn(t, {
      hash: "hash",
      hmac: "function",
      randomBytes: "function"
    }, {
      bits2int: "function",
      bits2int_modN: "function",
      lowS: "boolean"
    }), Object.freeze({
      lowS: true,
      ...t
    });
  }
  function Rl(r) {
    const t = Ol(r), { Fp: e, n } = t, s = e.BYTES + 1, i = 2 * e.BYTES + 1;
    function o(E) {
      return Jt < E && E < e.ORDER;
    }
    function a(E) {
      return mt(E, n);
    }
    function c(E) {
      return Fr(E, n);
    }
    const { ProjectivePoint: l, normPrivateKeyToScalar: u, weierstrassEquation: f, isWithinCurveOrder: h } = kl({
      ...t,
      toBytes(E, T, F) {
        const W = T.toAffine(), z = e.toBytes(W.x), ot = cn;
        return F ? ot(Uint8Array.from([
          T.hasEvenY() ? 2 : 3
        ]), z) : ot(Uint8Array.from([
          4
        ]), z, e.toBytes(W.y));
      },
      fromBytes(E) {
        const T = E.length, F = E[0], W = E.subarray(1);
        if (T === s && (F === 2 || F === 3)) {
          const z = xe(W);
          if (!o(z)) throw new Error("Point is not on curve");
          const ot = f(z);
          let At = e.sqrt(ot);
          const Et = (At & It) === It;
          return (F & 1) === 1 !== Et && (At = e.neg(At)), {
            x: z,
            y: At
          };
        } else if (T === i && F === 4) {
          const z = e.fromBytes(W.subarray(0, e.BYTES)), ot = e.fromBytes(W.subarray(e.BYTES, 2 * e.BYTES));
          return {
            x: z,
            y: ot
          };
        } else throw new Error(`Point of length ${T} was invalid. Expected ${s} compressed bytes or ${i} uncompressed bytes`);
      }
    }), g = (E) => Je(Ke(E, t.nByteLength));
    function m(E) {
      const T = n >> It;
      return E > T;
    }
    function p(E) {
      return m(E) ? a(-E) : E;
    }
    const y = (E, T, F) => xe(E.slice(T, F));
    class b {
      constructor(T, F, W) {
        this.r = T, this.s = F, this.recovery = W, this.assertValidity();
      }
      static fromCompact(T) {
        const F = t.nByteLength;
        return T = kt("compactSignature", T, F * 2), new b(y(T, 0, F), y(T, F, 2 * F));
      }
      static fromDER(T) {
        const { r: F, s: W } = be.toSig(kt("DER", T));
        return new b(F, W);
      }
      assertValidity() {
        if (!h(this.r)) throw new Error("r must be 0 < r < CURVE.n");
        if (!h(this.s)) throw new Error("s must be 0 < s < CURVE.n");
      }
      addRecoveryBit(T) {
        return new b(this.r, this.s, T);
      }
      recoverPublicKey(T) {
        const { r: F, s: W, recovery: z } = this, ot = O(kt("msgHash", T));
        if (z == null || ![
          0,
          1,
          2,
          3
        ].includes(z)) throw new Error("recovery id invalid");
        const At = z === 2 || z === 3 ? F + t.n : F;
        if (At >= e.ORDER) throw new Error("recovery id 2 or 3 invalid");
        const Et = (z & 1) === 0 ? "02" : "03", ee = l.fromHex(Et + g(At)), ne = c(At), Oe = a(-ot * ne), qe = a(W * ne), re = l.BASE.multiplyAndAddUnsafe(ee, Oe, qe);
        if (!re) throw new Error("point at infinify");
        return re.assertValidity(), re;
      }
      hasHighS() {
        return m(this.s);
      }
      normalizeS() {
        return this.hasHighS() ? new b(this.r, a(-this.s), this.recovery) : this;
      }
      toDERRawBytes() {
        return an(this.toDERHex());
      }
      toDERHex() {
        return be.hexFromSig({
          r: this.r,
          s: this.s
        });
      }
      toCompactRawBytes() {
        return an(this.toCompactHex());
      }
      toCompactHex() {
        return g(this.r) + g(this.s);
      }
    }
    const P = {
      isValidPrivateKey(E) {
        try {
          return u(E), true;
        } catch {
          return false;
        }
      },
      normPrivateKeyToScalar: u,
      randomPrivateKey: () => {
        const E = vo(t.n);
        return Bl(t.randomBytes(E), t.n);
      },
      precompute(E = 8, T = l.BASE) {
        return T._setWindowSize(E), T.multiply(BigInt(3)), T;
      }
    };
    function A(E, T = true) {
      return l.fromPrivateKey(E).toRawBytes(T);
    }
    function R(E) {
      const T = E instanceof Uint8Array, F = typeof E == "string", W = (T || F) && E.length;
      return T ? W === s || W === i : F ? W === 2 * s || W === 2 * i : E instanceof l;
    }
    function C(E, T, F = true) {
      if (R(E)) throw new Error("first arg must be private key");
      if (!R(T)) throw new Error("second arg must be public key");
      return l.fromHex(T).multiply(u(E)).toRawBytes(F);
    }
    const I = t.bits2int || function(E) {
      const T = xe(E), F = E.length * 8 - t.nBitLength;
      return F > 0 ? T >> BigInt(F) : T;
    }, O = t.bits2int_modN || function(E) {
      return a(I(E));
    }, v = us(t.nBitLength);
    function J(E) {
      if (typeof E != "bigint") throw new Error("bigint expected");
      if (!(Jt <= E && E < v)) throw new Error(`bigint expected < 2^${t.nBitLength}`);
      return Ke(E, t.nByteLength);
    }
    function H(E, T, F = Q) {
      if ([
        "recovered",
        "canonical"
      ].some((he) => he in F)) throw new Error("sign() legacy options not supported");
      const { hash: W, randomBytes: z } = t;
      let { lowS: ot, prehash: At, extraEntropy: Et } = F;
      ot == null && (ot = true), E = kt("msgHash", E), At && (E = kt("prehashed msgHash", W(E)));
      const ee = O(E), ne = u(T), Oe = [
        J(ne),
        J(ee)
      ];
      if (Et != null) {
        const he = Et === true ? z(e.BYTES) : Et;
        Oe.push(kt("extraEntropy", he));
      }
      const qe = cn(...Oe), re = ee;
      function fr(he) {
        const Re = I(he);
        if (!h(Re)) return;
        const Bs = c(Re), Dt = l.BASE.multiply(Re).toAffine(), Se = a(Dt.x);
        if (Se === Jt) return;
        const xn = a(Bs * a(re + Se * ne));
        if (xn === Jt) return;
        let Ns = (Dt.x === Se ? 0 : 2) | Number(Dt.y & It), Is = xn;
        return ot && m(xn) && (Is = p(xn), Ns ^= 1), new b(Se, Is, Ns);
      }
      return {
        seed: qe,
        k2sig: fr
      };
    }
    const Q = {
      lowS: t.lowS,
      prehash: false
    }, it = {
      lowS: t.lowS,
      prehash: false
    };
    function ft(E, T, F = Q) {
      const { seed: W, k2sig: z } = H(E, T, F), ot = t;
      return No(ot.hash.outputLen, ot.nByteLength, ot.hmac)(W, z);
    }
    l.BASE._setWindowSize(8);
    function Ft(E, T, F, W = it) {
      var _a6;
      const z = E;
      if (T = kt("msgHash", T), F = kt("publicKey", F), "strict" in W) throw new Error("options.strict was renamed to lowS");
      const { lowS: ot, prehash: At } = W;
      let Et, ee;
      try {
        if (typeof z == "string" || z instanceof Uint8Array) try {
          Et = b.fromDER(z);
        } catch (Dt) {
          if (!(Dt instanceof be.Err)) throw Dt;
          Et = b.fromCompact(z);
        }
        else if (typeof z == "object" && typeof z.r == "bigint" && typeof z.s == "bigint") {
          const { r: Dt, s: Se } = z;
          Et = new b(Dt, Se);
        } else throw new Error("PARSE");
        ee = l.fromHex(F);
      } catch (Dt) {
        if (Dt.message === "PARSE") throw new Error("signature must be Signature instance, Uint8Array or hex string");
        return false;
      }
      if (ot && Et.hasHighS()) return false;
      At && (T = t.hash(T));
      const { r: ne, s: Oe } = Et, qe = O(T), re = c(Oe), fr = a(qe * re), he = a(ne * re), Re = (_a6 = l.BASE.multiplyAndAddUnsafe(ee, fr, he)) == null ? void 0 : _a6.toAffine();
      return Re ? a(Re.x) === ne : false;
    }
    return {
      CURVE: t,
      getPublicKey: A,
      getSharedSecret: C,
      sign: ft,
      verify: Ft,
      ProjectivePoint: l,
      Signature: b,
      utils: P
    };
  }
  function Sl(r) {
    return {
      hash: r,
      hmac: (t, ...e) => $n(r, t, Ec(...e)),
      randomBytes: Bc
    };
  }
  function Ll(r, t) {
    const e = (n) => Rl({
      ...r,
      ...Sl(n)
    });
    return Object.freeze({
      ...e(t),
      create: e
    });
  }
  const ko = BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"), _s = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"), Ul = BigInt(1), Dr = BigInt(2), js = (r, t) => (r + t / Dr) / t;
  function Fl(r) {
    const t = ko, e = BigInt(3), n = BigInt(6), s = BigInt(11), i = BigInt(22), o = BigInt(23), a = BigInt(44), c = BigInt(88), l = r * r * r % t, u = l * l * r % t, f = Nt(u, e, t) * u % t, h = Nt(f, e, t) * u % t, g = Nt(h, Dr, t) * l % t, m = Nt(g, s, t) * g % t, p = Nt(m, i, t) * m % t, y = Nt(p, a, t) * p % t, b = Nt(y, c, t) * y % t, P = Nt(b, a, t) * p % t, A = Nt(P, e, t) * u % t, R = Nt(A, o, t) * m % t, C = Nt(R, n, t) * l % t, I = Nt(C, Dr, t);
    if (!Gr.eql(Gr.sqr(I), r)) throw new Error("Cannot find square root");
    return I;
  }
  const Gr = Pl(ko, void 0, void 0, {
    sqrt: Fl
  }), ce = Ll({
    a: BigInt(0),
    b: BigInt(7),
    Fp: Gr,
    n: _s,
    Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
    Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
    h: BigInt(1),
    lowS: true,
    endo: {
      beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
      splitScalar: (r) => {
        const t = _s, e = BigInt("0x3086d221a7d46bcde86c90e49284eb15"), n = -Ul * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"), s = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"), i = e, o = BigInt("0x100000000000000000000000000000000"), a = js(i * r, t), c = js(-n * r, t);
        let l = mt(r - a * e - c * s, t), u = mt(-a * n - c * i, t);
        const f = l > o, h = u > o;
        if (f && (l = t - l), h && (u = t - u), l > o || u > o) throw new Error("splitScalar: Endomorphism failed, k=" + r);
        return {
          k1neg: f,
          k1: l,
          k2neg: h,
          k2: u
        };
      }
    }
  }, tr);
  BigInt(0);
  ce.ProjectivePoint;
  const Jn = "0x0000000000000000000000000000000000000000", Ws = "0x0000000000000000000000000000000000000000000000000000000000000000", Zs = BigInt(0), Ys = BigInt(1), Mr = BigInt(2), qs = BigInt(27), Xs = BigInt(28), Cn = BigInt(35), Oo = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"), Dl = Oo / Mr, Gl = Symbol.for("nodejs.util.inspect.custom"), de = {};
  function mr(r) {
    return Xt(st(r), 32);
  }
  const _q = class _q {
    constructor(t, e, n, s) {
      __privateAdd(this, _t9);
      __privateAdd(this, _e7);
      __privateAdd(this, _n5);
      __privateAdd(this, _r5);
      qn(t, de, "Signature"), __privateSet(this, _t9, e), __privateSet(this, _e7, n), __privateSet(this, _n5, s), __privateSet(this, _r5, null);
    }
    get r() {
      return __privateGet(this, _t9);
    }
    set r(t) {
      d(Ge(t) === 32, "invalid r", "value", t), __privateSet(this, _t9, x(t));
    }
    get s() {
      return d(parseInt(__privateGet(this, _e7).substring(0, 3)) < 8, "non-canonical s; use ._s", "s", __privateGet(this, _e7)), __privateGet(this, _e7);
    }
    set s(t) {
      d(Ge(t) === 32, "invalid s", "value", t), __privateSet(this, _e7, x(t));
    }
    get _s() {
      return __privateGet(this, _e7);
    }
    isValid() {
      return BigInt(__privateGet(this, _e7)) <= Dl;
    }
    get v() {
      return __privateGet(this, _n5);
    }
    set v(t) {
      const e = U(t, "value");
      d(e === 27 || e === 28, "invalid v", "v", t), __privateSet(this, _n5, e);
    }
    get networkV() {
      return __privateGet(this, _r5);
    }
    get legacyChainId() {
      const t = this.networkV;
      return t == null ? null : _q.getChainId(t);
    }
    get yParity() {
      return this.v === 27 ? 0 : 1;
    }
    get yParityAndS() {
      const t = S(this.s);
      return this.yParity && (t[0] |= 128), x(t);
    }
    get compactSerialized() {
      return Z([
        this.r,
        this.yParityAndS
      ]);
    }
    get serialized() {
      return Z([
        this.r,
        this.s,
        this.yParity ? "0x1c" : "0x1b"
      ]);
    }
    getCanonical() {
      if (this.isValid()) return this;
      const t = Oo - BigInt(this._s), e = 55 - this.v, n = new _q(de, this.r, mr(t), e);
      return this.networkV && __privateSet(n, _r5, this.networkV), n;
    }
    clone() {
      const t = new _q(de, this.r, this._s, this.v);
      return this.networkV && __privateSet(t, _r5, this.networkV), t;
    }
    toJSON() {
      const t = this.networkV;
      return {
        _type: "signature",
        networkV: t != null ? t.toString() : null,
        r: this.r,
        s: this._s,
        v: this.v
      };
    }
    [Gl]() {
      return this.toString();
    }
    toString() {
      return this.isValid() ? `Signature { r: ${this.r}, s: ${this._s}, v: ${this.v} }` : `Signature { r: ${this.r}, s: ${this._s}, v: ${this.v}, valid: false }`;
    }
    static getChainId(t) {
      const e = B(t, "v");
      return e == qs || e == Xs ? Zs : (d(e >= Cn, "invalid EIP-155 v", "v", t), (e - Cn) / Mr);
    }
    static getChainIdV(t, e) {
      return B(t) * Mr + BigInt(35 + e - 27);
    }
    static getNormalizedV(t) {
      const e = B(t);
      return e === Zs || e === qs ? 27 : e === Ys || e === Xs ? 28 : (d(e >= Cn, "invalid v", "v", t), e & Ys ? 27 : 28);
    }
    static from(t) {
      function e(l, u) {
        d(l, u, "signature", t);
      }
      if (t == null) return new _q(de, Ws, Ws, 27);
      if (typeof t == "string") {
        const l = S(t, "signature");
        if (l.length === 64) {
          const u = x(l.slice(0, 32)), f = l.slice(32, 64), h = f[0] & 128 ? 28 : 27;
          return f[0] &= 127, new _q(de, u, x(f), h);
        }
        if (l.length === 65) {
          const u = x(l.slice(0, 32)), f = x(l.slice(32, 64)), h = _q.getNormalizedV(l[64]);
          return new _q(de, u, f, h);
        }
        e(false, "invalid raw signature length");
      }
      if (t instanceof _q) return t.clone();
      const n = t.r;
      e(n != null, "missing r");
      const s = mr(n), i = (function(l, u) {
        if (l != null) return mr(l);
        if (u != null) {
          e(_(u, 32), "invalid yParityAndS");
          const f = S(u);
          return f[0] &= 127, x(f);
        }
        e(false, "missing s");
      })(t.s, t.yParityAndS), { networkV: o, v: a } = (function(l, u, f) {
        if (l != null) {
          const h = B(l);
          return {
            networkV: h >= Cn ? h : void 0,
            v: _q.getNormalizedV(h)
          };
        }
        if (u != null) return e(_(u, 32), "invalid yParityAndS"), {
          v: S(u)[0] & 128 ? 28 : 27
        };
        if (f != null) {
          switch (U(f, "sig.yParity")) {
            case 0:
              return {
                v: 27
              };
            case 1:
              return {
                v: 28
              };
          }
          e(false, "invalid yParity");
        }
        e(false, "missing v");
      })(t.v, t.yParityAndS, t.yParity), c = new _q(de, s, i, a);
      return o && __privateSet(c, _r5, o), e(t.yParity == null || U(t.yParity, "sig.yParity") === c.yParity, "yParity mismatch"), e(t.yParityAndS == null || t.yParityAndS === c.yParityAndS, "yParityAndS mismatch"), c;
    }
  };
  _t9 = new WeakMap();
  _e7 = new WeakMap();
  _n5 = new WeakMap();
  _r5 = new WeakMap();
  let q = _q;
  Kt = (_a3 = class {
    constructor(t) {
      __privateAdd(this, _t10);
      d(Ge(t) === 32, "invalid private key", "privateKey", "[REDACTED]"), __privateSet(this, _t10, x(t));
    }
    get privateKey() {
      return __privateGet(this, _t10);
    }
    get publicKey() {
      return Kt.computePublicKey(__privateGet(this, _t10));
    }
    get compressedPublicKey() {
      return Kt.computePublicKey(__privateGet(this, _t10), true);
    }
    sign(t) {
      d(Ge(t) === 32, "invalid digest length", "digest", t);
      const e = ce.sign(dt(t), dt(__privateGet(this, _t10)), {
        lowS: true
      });
      return q.from({
        r: ue(e.r, 32),
        s: ue(e.s, 32),
        v: e.recovery ? 28 : 27
      });
    }
    computeSharedSecret(t) {
      const e = Kt.computePublicKey(t);
      return x(ce.getSharedSecret(dt(__privateGet(this, _t10)), S(e), false));
    }
    static computePublicKey(t, e) {
      let n = S(t, "key");
      if (n.length === 32) {
        const i = ce.getPublicKey(n, !!e);
        return x(i);
      }
      if (n.length === 64) {
        const i = new Uint8Array(65);
        i[0] = 4, i.set(n, 1), n = i;
      }
      const s = ce.ProjectivePoint.fromHex(n);
      return x(s.toRawBytes(e));
    }
    static recoverPublicKey(t, e) {
      d(Ge(t) === 32, "invalid digest length", "digest", t);
      const n = q.from(e);
      let s = ce.Signature.fromCompact(dt(Z([
        n.r,
        n.s
      ])));
      s = s.addRecoveryBit(n.yParity);
      const i = s.recoverPublicKey(dt(t));
      return d(i != null, "invalid signature for digest", "signature", e), "0x" + i.toHex(false);
    }
    static addPoints(t, e, n) {
      const s = ce.ProjectivePoint.fromHex(Kt.computePublicKey(t).substring(2)), i = ce.ProjectivePoint.fromHex(Kt.computePublicKey(e).substring(2));
      return "0x" + s.add(i).toHex(!!n);
    }
  }, _t10 = new WeakMap(), _a3);
  const Ml = BigInt(0), Hl = BigInt(36);
  function $s(r) {
    r = r.toLowerCase();
    const t = r.substring(2).split(""), e = new Uint8Array(40);
    for (let s = 0; s < 40; s++) e[s] = t[s].charCodeAt(0);
    const n = S(rt(e));
    for (let s = 0; s < 40; s += 2) n[s >> 1] >> 4 >= 8 && (t[s] = t[s].toUpperCase()), (n[s >> 1] & 15) >= 8 && (t[s + 1] = t[s + 1].toUpperCase());
    return "0x" + t.join("");
  }
  const fs = {};
  for (let r = 0; r < 10; r++) fs[String(r)] = String(r);
  for (let r = 0; r < 26; r++) fs[String.fromCharCode(65 + r)] = String(10 + r);
  const ti = 15;
  function Ql(r) {
    r = r.toUpperCase(), r = r.substring(4) + r.substring(0, 2) + "00";
    let t = r.split("").map((n) => fs[n]).join("");
    for (; t.length >= ti; ) {
      let n = t.substring(0, ti);
      t = parseInt(n, 10) % 97 + t.substring(n.length);
    }
    let e = String(98 - parseInt(t, 10) % 97);
    for (; e.length < 2; ) e = "0" + e;
    return e;
  }
  const Vl = (function() {
    const r = {};
    for (let t = 0; t < 36; t++) {
      const e = "0123456789abcdefghijklmnopqrstuvwxyz"[t];
      r[e] = BigInt(t);
    }
    return r;
  })();
  function Jl(r) {
    r = r.toLowerCase();
    let t = Ml;
    for (let e = 0; e < r.length; e++) t = t * Hl + Vl[r[e]];
    return t;
  }
  M = function(r) {
    if (d(typeof r == "string", "invalid address", "address", r), r.match(/^(0x)?[0-9a-fA-F]{40}$/)) {
      r.startsWith("0x") || (r = "0x" + r);
      const t = $s(r);
      return d(!r.match(/([A-F].*[a-f])|([a-f].*[A-F])/) || t === r, "bad address checksum", "address", r), t;
    }
    if (r.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
      d(r.substring(2, 4) === Ql(r), "bad icap checksum", "address", r);
      let t = Jl(r.substring(4)).toString(16);
      for (; t.length < 40; ) t = "0" + t;
      return $s("0x" + t);
    }
    d(false, "invalid address", "address", r);
  };
  function Ro(r) {
    const t = M(r.from);
    let n = B(r.nonce, "tx.nonce").toString(16);
    return n === "0" ? n = "0x" : n.length % 2 ? n = "0x0" + n : n = "0x" + n, M($(rt(Yt([
      t,
      n
    ])), 12));
  }
  function So(r) {
    return r && typeof r.getAddress == "function";
  }
  function Kl(r) {
    try {
      return M(r), true;
    } catch {
    }
    return false;
  }
  async function br(r, t) {
    const e = await t;
    return (e == null || e === "0x0000000000000000000000000000000000000000") && (w(typeof r != "string", "unconfigured name", "UNCONFIGURED_NAME", {
      value: r
    }), d(false, "invalid AddressLike value; did not resolve to a value address", "target", r)), M(e);
  }
  gt = function(r, t) {
    if (typeof r == "string") return r.match(/^0x[0-9a-f]{40}$/i) ? M(r) : (w(t != null, "ENS resolution requires a provider", "UNSUPPORTED_OPERATION", {
      operation: "resolveName"
    }), br(r, t.resolveName(r)));
    if (So(r)) return br(r, r.getAddress());
    if (r && typeof r.then == "function") return br(r, r);
    d(false, "unsupported addressable value", "target", r);
  };
  const Qt = {};
  function N(r, t) {
    let e = false;
    return t < 0 && (e = true, t *= -1), new tt(Qt, `${e ? "" : "u"}int${t}`, r, {
      signed: e,
      width: t
    });
  }
  function V(r, t) {
    return new tt(Qt, `bytes${t || ""}`, r, {
      size: t
    });
  }
  const ei = Symbol.for("_ethers_typed");
  const _tt = class _tt {
    constructor(t, e, n, s) {
      __publicField(this, "type");
      __publicField(this, "value");
      __privateAdd(this, _t11);
      __publicField(this, "_typedSymbol");
      s == null && (s = null), qn(Qt, t, "Typed"), k(this, {
        _typedSymbol: ei,
        type: e,
        value: n
      }), __privateSet(this, _t11, s), this.format();
    }
    format() {
      if (this.type === "array") throw new Error("");
      if (this.type === "dynamicArray") throw new Error("");
      return this.type === "tuple" ? `tuple(${this.value.map((t) => t.format()).join(",")})` : this.type;
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
      return __privateGet(this, _t11);
    }
    get arrayLength() {
      if (this.type !== "array") throw TypeError("not an array");
      return __privateGet(this, _t11) === true ? -1 : __privateGet(this, _t11) === false ? this.value.length : null;
    }
    static from(t, e) {
      return new _tt(Qt, t, e);
    }
    static uint8(t) {
      return N(t, 8);
    }
    static uint16(t) {
      return N(t, 16);
    }
    static uint24(t) {
      return N(t, 24);
    }
    static uint32(t) {
      return N(t, 32);
    }
    static uint40(t) {
      return N(t, 40);
    }
    static uint48(t) {
      return N(t, 48);
    }
    static uint56(t) {
      return N(t, 56);
    }
    static uint64(t) {
      return N(t, 64);
    }
    static uint72(t) {
      return N(t, 72);
    }
    static uint80(t) {
      return N(t, 80);
    }
    static uint88(t) {
      return N(t, 88);
    }
    static uint96(t) {
      return N(t, 96);
    }
    static uint104(t) {
      return N(t, 104);
    }
    static uint112(t) {
      return N(t, 112);
    }
    static uint120(t) {
      return N(t, 120);
    }
    static uint128(t) {
      return N(t, 128);
    }
    static uint136(t) {
      return N(t, 136);
    }
    static uint144(t) {
      return N(t, 144);
    }
    static uint152(t) {
      return N(t, 152);
    }
    static uint160(t) {
      return N(t, 160);
    }
    static uint168(t) {
      return N(t, 168);
    }
    static uint176(t) {
      return N(t, 176);
    }
    static uint184(t) {
      return N(t, 184);
    }
    static uint192(t) {
      return N(t, 192);
    }
    static uint200(t) {
      return N(t, 200);
    }
    static uint208(t) {
      return N(t, 208);
    }
    static uint216(t) {
      return N(t, 216);
    }
    static uint224(t) {
      return N(t, 224);
    }
    static uint232(t) {
      return N(t, 232);
    }
    static uint240(t) {
      return N(t, 240);
    }
    static uint248(t) {
      return N(t, 248);
    }
    static uint256(t) {
      return N(t, 256);
    }
    static uint(t) {
      return N(t, 256);
    }
    static int8(t) {
      return N(t, -8);
    }
    static int16(t) {
      return N(t, -16);
    }
    static int24(t) {
      return N(t, -24);
    }
    static int32(t) {
      return N(t, -32);
    }
    static int40(t) {
      return N(t, -40);
    }
    static int48(t) {
      return N(t, -48);
    }
    static int56(t) {
      return N(t, -56);
    }
    static int64(t) {
      return N(t, -64);
    }
    static int72(t) {
      return N(t, -72);
    }
    static int80(t) {
      return N(t, -80);
    }
    static int88(t) {
      return N(t, -88);
    }
    static int96(t) {
      return N(t, -96);
    }
    static int104(t) {
      return N(t, -104);
    }
    static int112(t) {
      return N(t, -112);
    }
    static int120(t) {
      return N(t, -120);
    }
    static int128(t) {
      return N(t, -128);
    }
    static int136(t) {
      return N(t, -136);
    }
    static int144(t) {
      return N(t, -144);
    }
    static int152(t) {
      return N(t, -152);
    }
    static int160(t) {
      return N(t, -160);
    }
    static int168(t) {
      return N(t, -168);
    }
    static int176(t) {
      return N(t, -176);
    }
    static int184(t) {
      return N(t, -184);
    }
    static int192(t) {
      return N(t, -192);
    }
    static int200(t) {
      return N(t, -200);
    }
    static int208(t) {
      return N(t, -208);
    }
    static int216(t) {
      return N(t, -216);
    }
    static int224(t) {
      return N(t, -224);
    }
    static int232(t) {
      return N(t, -232);
    }
    static int240(t) {
      return N(t, -240);
    }
    static int248(t) {
      return N(t, -248);
    }
    static int256(t) {
      return N(t, -256);
    }
    static int(t) {
      return N(t, -256);
    }
    static bytes1(t) {
      return V(t, 1);
    }
    static bytes2(t) {
      return V(t, 2);
    }
    static bytes3(t) {
      return V(t, 3);
    }
    static bytes4(t) {
      return V(t, 4);
    }
    static bytes5(t) {
      return V(t, 5);
    }
    static bytes6(t) {
      return V(t, 6);
    }
    static bytes7(t) {
      return V(t, 7);
    }
    static bytes8(t) {
      return V(t, 8);
    }
    static bytes9(t) {
      return V(t, 9);
    }
    static bytes10(t) {
      return V(t, 10);
    }
    static bytes11(t) {
      return V(t, 11);
    }
    static bytes12(t) {
      return V(t, 12);
    }
    static bytes13(t) {
      return V(t, 13);
    }
    static bytes14(t) {
      return V(t, 14);
    }
    static bytes15(t) {
      return V(t, 15);
    }
    static bytes16(t) {
      return V(t, 16);
    }
    static bytes17(t) {
      return V(t, 17);
    }
    static bytes18(t) {
      return V(t, 18);
    }
    static bytes19(t) {
      return V(t, 19);
    }
    static bytes20(t) {
      return V(t, 20);
    }
    static bytes21(t) {
      return V(t, 21);
    }
    static bytes22(t) {
      return V(t, 22);
    }
    static bytes23(t) {
      return V(t, 23);
    }
    static bytes24(t) {
      return V(t, 24);
    }
    static bytes25(t) {
      return V(t, 25);
    }
    static bytes26(t) {
      return V(t, 26);
    }
    static bytes27(t) {
      return V(t, 27);
    }
    static bytes28(t) {
      return V(t, 28);
    }
    static bytes29(t) {
      return V(t, 29);
    }
    static bytes30(t) {
      return V(t, 30);
    }
    static bytes31(t) {
      return V(t, 31);
    }
    static bytes32(t) {
      return V(t, 32);
    }
    static address(t) {
      return new _tt(Qt, "address", t);
    }
    static bool(t) {
      return new _tt(Qt, "bool", !!t);
    }
    static bytes(t) {
      return new _tt(Qt, "bytes", t);
    }
    static string(t) {
      return new _tt(Qt, "string", t);
    }
    static array(t, e) {
      throw new Error("not implemented yet");
    }
    static tuple(t, e) {
      throw new Error("not implemented yet");
    }
    static overrides(t) {
      return new _tt(Qt, "overrides", Object.assign({}, t));
    }
    static isTyped(t) {
      return t && typeof t == "object" && "_typedSymbol" in t && t._typedSymbol === ei;
    }
    static dereference(t, e) {
      if (_tt.isTyped(t)) {
        if (t.type !== e) throw new Error(`invalid type: expecetd ${e}, got ${t.type}`);
        return t.value;
      }
      return t;
    }
  };
  _t11 = new WeakMap();
  let tt = _tt;
  class zl extends te {
    constructor(t) {
      super("address", "address", t, false);
    }
    defaultValue() {
      return "0x0000000000000000000000000000000000000000";
    }
    encode(t, e) {
      let n = tt.dereference(e, "string");
      try {
        n = M(n);
      } catch (s) {
        return this._throwError(s.message, e);
      }
      return t.writeValue(n);
    }
    decode(t) {
      return M(ue(t.readValue(), 20));
    }
  }
  class _l extends te {
    constructor(t) {
      super(t.name, t.type, "_", t.dynamic);
      __publicField(this, "coder");
      this.coder = t;
    }
    defaultValue() {
      return this.coder.defaultValue();
    }
    encode(t, e) {
      return this.coder.encode(t, e);
    }
    decode(t) {
      return this.coder.decode(t);
    }
  }
  function Lo(r, t, e) {
    let n = [];
    if (Array.isArray(e)) n = e;
    else if (e && typeof e == "object") {
      let c = {};
      n = t.map((l) => {
        const u = l.localName;
        return w(u, "cannot encode object for signature with missing names", "INVALID_ARGUMENT", {
          argument: "values",
          info: {
            coder: l
          },
          value: e
        }), w(!c[u], "cannot encode object for signature with duplicate names", "INVALID_ARGUMENT", {
          argument: "values",
          info: {
            coder: l
          },
          value: e
        }), c[u] = true, e[u];
      });
    } else d(false, "invalid tuple value", "tuple", e);
    d(t.length === n.length, "types/value length mismatch", "tuple", e);
    let s = new Sr(), i = new Sr(), o = [];
    t.forEach((c, l) => {
      let u = n[l];
      if (c.dynamic) {
        let f = i.length;
        c.encode(i, u);
        let h = s.writeUpdatableValue();
        o.push((g) => {
          h(g + f);
        });
      } else c.encode(s, u);
    }), o.forEach((c) => {
      c(s.length);
    });
    let a = r.appendWriter(s);
    return a += r.appendWriter(i), a;
  }
  function Uo(r, t) {
    let e = [], n = [], s = r.subReader(0);
    return t.forEach((i) => {
      let o = null;
      if (i.dynamic) {
        let a = r.readIndex(), c = s.subReader(a);
        try {
          o = i.decode(c);
        } catch (l) {
          if (lt(l, "BUFFER_OVERRUN")) throw l;
          o = l, o.baseType = i.name, o.name = i.localName, o.type = i.type;
        }
      } else try {
        o = i.decode(r);
      } catch (a) {
        if (lt(a, "BUFFER_OVERRUN")) throw a;
        o = a, o.baseType = i.name, o.name = i.localName, o.type = i.type;
      }
      if (o == null) throw new Error("investigate");
      e.push(o), n.push(i.localName || null);
    }), jt.fromItems(e, n);
  }
  class jl extends te {
    constructor(t, e, n) {
      const s = t.type + "[" + (e >= 0 ? e : "") + "]", i = e === -1 || t.dynamic;
      super("array", s, n, i);
      __publicField(this, "coder");
      __publicField(this, "length");
      k(this, {
        coder: t,
        length: e
      });
    }
    defaultValue() {
      const t = this.coder.defaultValue(), e = [];
      for (let n = 0; n < this.length; n++) e.push(t);
      return e;
    }
    encode(t, e) {
      const n = tt.dereference(e, "array");
      Array.isArray(n) || this._throwError("expected array value", n);
      let s = this.length;
      s === -1 && (s = n.length, t.writeValue(n.length)), zi(n.length, s, "coder array" + (this.localName ? " " + this.localName : ""));
      let i = [];
      for (let o = 0; o < n.length; o++) i.push(this.coder);
      return Lo(t, i, n);
    }
    decode(t) {
      let e = this.length;
      e === -1 && (e = t.readIndex(), w(e * pt <= t.dataLength, "insufficient data length", "BUFFER_OVERRUN", {
        buffer: t.bytes,
        offset: e * pt,
        length: t.dataLength
      }));
      let n = [];
      for (let s = 0; s < e; s++) n.push(new _l(this.coder));
      return Uo(t, n);
    }
  }
  class Wl extends te {
    constructor(t) {
      super("bool", "bool", t, false);
    }
    defaultValue() {
      return false;
    }
    encode(t, e) {
      const n = tt.dereference(e, "bool");
      return t.writeValue(n ? 1 : 0);
    }
    decode(t) {
      return !!t.readValue();
    }
  }
  class Fo extends te {
    constructor(t, e) {
      super(t, t, e, true);
    }
    defaultValue() {
      return "0x";
    }
    encode(t, e) {
      e = dt(e);
      let n = t.writeValue(e.length);
      return n += t.writeBytes(e), n;
    }
    decode(t) {
      return t.readBytes(t.readIndex(), true);
    }
  }
  class Zl extends Fo {
    constructor(t) {
      super("bytes", t);
    }
    decode(t) {
      return x(super.decode(t));
    }
  }
  class Yl extends te {
    constructor(t, e) {
      let n = "bytes" + String(t);
      super(n, n, e, false);
      __publicField(this, "size");
      k(this, {
        size: t
      }, {
        size: "number"
      });
    }
    defaultValue() {
      return "0x0000000000000000000000000000000000000000000000000000000000000000".substring(0, 2 + this.size * 2);
    }
    encode(t, e) {
      let n = dt(tt.dereference(e, this.type));
      return n.length !== this.size && this._throwError("incorrect data length", e), t.writeBytes(n);
    }
    decode(t) {
      return x(t.readBytes(this.size));
    }
  }
  const ql = new Uint8Array([]);
  class Xl extends te {
    constructor(t) {
      super("null", "", t, false);
    }
    defaultValue() {
      return null;
    }
    encode(t, e) {
      return e != null && this._throwError("not null", e), t.writeBytes(ql);
    }
    decode(t) {
      return t.readBytes(0), null;
    }
  }
  const $l = BigInt(0), tu = BigInt(1), eu = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
  class nu extends te {
    constructor(t, e, n) {
      const s = (e ? "int" : "uint") + t * 8;
      super(s, s, n, false);
      __publicField(this, "size");
      __publicField(this, "signed");
      k(this, {
        size: t,
        signed: e
      }, {
        size: "number",
        signed: "boolean"
      });
    }
    defaultValue() {
      return 0;
    }
    encode(t, e) {
      let n = B(tt.dereference(e, this.type)), s = tn(eu, pt * 8);
      if (this.signed) {
        let i = tn(s, this.size * 8 - 1);
        (n > i || n < -(i + tu)) && this._throwError("value out-of-bounds", e), n = Wi(n, 8 * pt);
      } else (n < $l || n > tn(s, this.size * 8)) && this._throwError("value out-of-bounds", e);
      return t.writeValue(n);
    }
    decode(t) {
      let e = tn(t.readValue(), this.size * 8);
      return this.signed && (e = Ya(e, this.size * 8)), e;
    }
  }
  class ru extends Fo {
    constructor(t) {
      super("string", t);
    }
    defaultValue() {
      return "";
    }
    encode(t, e) {
      return super.encode(t, Zt(tt.dereference(e, "string")));
    }
    decode(t) {
      return Vn(super.decode(t));
    }
  }
  class kn extends te {
    constructor(t, e) {
      let n = false;
      const s = [];
      t.forEach((o) => {
        o.dynamic && (n = true), s.push(o.type);
      });
      const i = "tuple(" + s.join(",") + ")";
      super("tuple", i, e, n);
      __publicField(this, "coders");
      k(this, {
        coders: Object.freeze(t.slice())
      });
    }
    defaultValue() {
      const t = [];
      this.coders.forEach((n) => {
        t.push(n.defaultValue());
      });
      const e = this.coders.reduce((n, s) => {
        const i = s.localName;
        return i && (n[i] || (n[i] = 0), n[i]++), n;
      }, {});
      return this.coders.forEach((n, s) => {
        let i = n.localName;
        !i || e[i] !== 1 || (i === "length" && (i = "_length"), t[i] == null && (t[i] = t[s]));
      }), Object.freeze(t);
    }
    encode(t, e) {
      const n = tt.dereference(e, "tuple");
      return Lo(t, this.coders, n);
    }
    decode(t) {
      return Uo(t, this.coders);
    }
  }
  function wr(r, t) {
    return {
      address: M(r),
      storageKeys: t.map((e, n) => (d(_(e, 32), "invalid slot", `storageKeys[${n}]`, e), e.toLowerCase()))
    };
  }
  function Ce(r) {
    if (Array.isArray(r)) return r.map((e, n) => Array.isArray(e) ? (d(e.length === 2, "invalid slot set", `value[${n}]`, e), wr(e[0], e[1])) : (d(e != null && typeof e == "object", "invalid address-slot set", "value", r), wr(e.address, e.storageKeys)));
    d(r != null && typeof r == "object", "invalid access list", "value", r);
    const t = Object.keys(r).map((e) => {
      const n = r[e].reduce((s, i) => (s[i] = true, s), {});
      return wr(e, Object.keys(n).sort());
    });
    return t.sort((e, n) => e.address.localeCompare(n.address)), t;
  }
  function Do(r) {
    return {
      address: M(r.address),
      nonce: B(r.nonce != null ? r.nonce : 0),
      chainId: B(r.chainId != null ? r.chainId : 0),
      signature: q.from(r.signature)
    };
  }
  su = function(r) {
    let t;
    return typeof r == "string" ? t = Kt.computePublicKey(r, false) : t = r.publicKey, M(rt("0x" + t.substring(4)).substring(26));
  };
  function iu(r, t) {
    return su(Kt.recoverPublicKey(r, t));
  }
  const at = BigInt(0), ou = BigInt(2), au = BigInt(27), cu = BigInt(28), lu = BigInt(35), uu = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"), fu = Symbol.for("nodejs.util.inspect.custom"), Ar = 4096 * 32, Dn = 128;
  function hu(r) {
    return {
      blobToKzgCommitment: (n) => {
        if ("computeBlobProof" in r) {
          if ("blobToKzgCommitment" in r && typeof r.blobToKzgCommitment == "function") return S(r.blobToKzgCommitment(x(n)));
        } else if ("blobToKzgCommitment" in r && typeof r.blobToKzgCommitment == "function") return S(r.blobToKzgCommitment(n));
        if ("blobToKZGCommitment" in r && typeof r.blobToKZGCommitment == "function") return S(r.blobToKZGCommitment(x(n)));
        d(false, "unsupported KZG library", "kzg", r);
      },
      computeBlobKzgProof: (n, s) => {
        if ("computeBlobProof" in r && typeof r.computeBlobProof == "function") return S(r.computeBlobProof(x(n), x(s)));
        if ("computeBlobKzgProof" in r && typeof r.computeBlobKzgProof == "function") return r.computeBlobKzgProof(n, s);
        if ("computeBlobKZGProof" in r && typeof r.computeBlobKZGProof == "function") return S(r.computeBlobKZGProof(x(n), x(s)));
        d(false, "unsupported KZG library", "kzg", r);
      }
    };
  }
  function ni(r, t) {
    let e = r.toString(16);
    for (; e.length < 2; ) e = "0" + e;
    return e += Ze(t).substring(4), "0x" + e;
  }
  function Ye(r) {
    return r === "0x" ? null : M(r);
  }
  function nr(r, t) {
    try {
      return Ce(r);
    } catch (e) {
      d(false, e.message, t, r);
    }
  }
  function du(r, t) {
    try {
      if (!Array.isArray(r)) throw new Error("authorizationList: invalid array");
      const e = [];
      for (let n = 0; n < r.length; n++) {
        const s = r[n];
        if (!Array.isArray(s)) throw new Error(`authorization[${n}]: invalid array`);
        if (s.length !== 6) throw new Error(`authorization[${n}]: wrong length`);
        if (!s[1]) throw new Error(`authorization[${n}]: null address`);
        e.push({
          address: Ye(s[1]),
          nonce: K(s[2], "nonce"),
          chainId: K(s[0], "chainId"),
          signature: q.from({
            yParity: ke(s[3], "yParity"),
            r: Xt(s[4], 32),
            s: Xt(s[5], 32)
          })
        });
      }
      return e;
    } catch (e) {
      d(false, e.message, t, r);
    }
  }
  function ke(r, t) {
    return r === "0x" ? 0 : U(r, t);
  }
  function K(r, t) {
    if (r === "0x") return at;
    const e = B(r, t);
    return d(e <= uu, "value exceeds uint size", t, e), e;
  }
  function G(r, t) {
    const e = B(r, "value"), n = st(e);
    return d(n.length <= 32, "value too large", `tx.${t}`, e), n;
  }
  function rr(r) {
    return Ce(r).map((t) => [
      t.address,
      t.storageKeys
    ]);
  }
  function pu(r) {
    return r.map((t) => [
      G(t.chainId, "chainId"),
      t.address,
      G(t.nonce, "nonce"),
      G(t.signature.yParity, "yParity"),
      st(t.signature.r),
      st(t.signature._s)
    ]);
  }
  function gu(r, t) {
    d(Array.isArray(r), `invalid ${t}`, "value", r);
    for (let e = 0; e < r.length; e++) d(_(r[e], 32), "invalid ${ param } hash", `value[${e}]`, r[e]);
    return r;
  }
  function yu(r) {
    const t = yn(r);
    d(Array.isArray(t) && (t.length === 9 || t.length === 6), "invalid field count for legacy transaction", "data", r);
    const e = {
      type: 0,
      nonce: ke(t[0], "nonce"),
      gasPrice: K(t[1], "gasPrice"),
      gasLimit: K(t[2], "gasLimit"),
      to: Ye(t[3]),
      value: K(t[4], "value"),
      data: x(t[5]),
      chainId: at
    };
    if (t.length === 6) return e;
    const n = K(t[6], "v"), s = K(t[7], "r"), i = K(t[8], "s");
    if (s === at && i === at) e.chainId = n;
    else {
      let o = (n - lu) / ou;
      o < at && (o = at), e.chainId = o, d(o !== at || n === au || n === cu, "non-canonical legacy v", "v", t[6]), e.signature = q.from({
        r: Xt(t[7], 32),
        s: Xt(t[8], 32),
        v: n
      });
    }
    return e;
  }
  function mu(r, t) {
    const e = [
      G(r.nonce, "nonce"),
      G(r.gasPrice || 0, "gasPrice"),
      G(r.gasLimit, "gasLimit"),
      r.to || "0x",
      G(r.value, "value"),
      r.data
    ];
    let n = at;
    if (r.chainId != at) n = B(r.chainId, "tx.chainId"), d(!t || t.networkV == null || t.legacyChainId === n, "tx.chainId/sig.v mismatch", "sig", t);
    else if (r.signature) {
      const i = r.signature.legacyChainId;
      i != null && (n = i);
    }
    if (!t) return n !== at && (e.push(st(n)), e.push("0x"), e.push("0x")), Yt(e);
    let s = BigInt(27 + t.yParity);
    return n !== at ? s = q.getChainIdV(n, t.v) : BigInt(t.v) !== s && d(false, "tx.chainId/sig.v mismatch", "sig", t), e.push(st(s)), e.push(st(t.r)), e.push(st(t._s)), Yt(e);
  }
  function sr(r, t) {
    let e;
    try {
      if (e = ke(t[0], "yParity"), e !== 0 && e !== 1) throw new Error("bad yParity");
    } catch {
      d(false, "invalid yParity", "yParity", t[0]);
    }
    const n = Xt(t[1], 32), s = Xt(t[2], 32), i = q.from({
      r: n,
      s,
      yParity: e
    });
    r.signature = i;
  }
  function bu(r) {
    const t = yn(S(r).slice(1));
    d(Array.isArray(t) && (t.length === 9 || t.length === 12), "invalid field count for transaction type: 2", "data", x(r));
    const e = {
      type: 2,
      chainId: K(t[0], "chainId"),
      nonce: ke(t[1], "nonce"),
      maxPriorityFeePerGas: K(t[2], "maxPriorityFeePerGas"),
      maxFeePerGas: K(t[3], "maxFeePerGas"),
      gasPrice: null,
      gasLimit: K(t[4], "gasLimit"),
      to: Ye(t[5]),
      value: K(t[6], "value"),
      data: x(t[7]),
      accessList: nr(t[8], "accessList")
    };
    return t.length === 9 || sr(e, t.slice(9)), e;
  }
  function wu(r, t) {
    const e = [
      G(r.chainId, "chainId"),
      G(r.nonce, "nonce"),
      G(r.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"),
      G(r.maxFeePerGas || 0, "maxFeePerGas"),
      G(r.gasLimit, "gasLimit"),
      r.to || "0x",
      G(r.value, "value"),
      r.data,
      rr(r.accessList || [])
    ];
    return t && (e.push(G(t.yParity, "yParity")), e.push(st(t.r)), e.push(st(t.s))), Z([
      "0x02",
      Yt(e)
    ]);
  }
  function Au(r) {
    const t = yn(S(r).slice(1));
    d(Array.isArray(t) && (t.length === 8 || t.length === 11), "invalid field count for transaction type: 1", "data", x(r));
    const e = {
      type: 1,
      chainId: K(t[0], "chainId"),
      nonce: ke(t[1], "nonce"),
      gasPrice: K(t[2], "gasPrice"),
      gasLimit: K(t[3], "gasLimit"),
      to: Ye(t[4]),
      value: K(t[5], "value"),
      data: x(t[6]),
      accessList: nr(t[7], "accessList")
    };
    return t.length === 8 || sr(e, t.slice(8)), e;
  }
  function Eu(r, t) {
    const e = [
      G(r.chainId, "chainId"),
      G(r.nonce, "nonce"),
      G(r.gasPrice || 0, "gasPrice"),
      G(r.gasLimit, "gasLimit"),
      r.to || "0x",
      G(r.value, "value"),
      r.data,
      rr(r.accessList || [])
    ];
    return t && (e.push(G(t.yParity, "recoveryParam")), e.push(st(t.r)), e.push(st(t.s))), Z([
      "0x01",
      Yt(e)
    ]);
  }
  function xu(r) {
    let t = yn(S(r).slice(1)), e = "3", n = null, s = null;
    if (t.length === 4 && Array.isArray(t[0])) {
      e = "3 (network format)";
      const o = t[1], a = t[2], c = t[3];
      d(Array.isArray(o), "invalid network format: blobs not an array", "fields[1]", o), d(Array.isArray(a), "invalid network format: commitments not an array", "fields[2]", a), d(Array.isArray(c), "invalid network format: proofs not an array", "fields[3]", c), d(o.length === a.length, "invalid network format: blobs/commitments length mismatch", "fields", t), d(o.length === c.length, "invalid network format: blobs/proofs length mismatch", "fields", t), s = [];
      for (let l = 0; l < t[1].length; l++) s.push({
        data: o[l],
        commitment: a[l],
        proof: c[l]
      });
      t = t[0];
    } else if (t.length === 5 && Array.isArray(t[0])) {
      e = "3 (EIP-7594 network format)", n = U(t[1]);
      const o = t[2], a = t[3], c = t[4];
      d(n === 1, `unsupported EIP-7594 network format version: ${n}`, "fields[1]", n), d(Array.isArray(o), "invalid EIP-7594 network format: blobs not an array", "fields[2]", o), d(Array.isArray(a), "invalid EIP-7594 network format: commitments not an array", "fields[3]", a), d(Array.isArray(c), "invalid EIP-7594 network format: proofs not an array", "fields[4]", c), d(o.length === a.length, "invalid network format: blobs/commitments length mismatch", "fields", t), d(o.length * Dn === c.length, "invalid network format: blobs/proofs length mismatch", "fields", t), s = [];
      for (let l = 0; l < o.length; l++) {
        const u = [];
        for (let f = 0; f < Dn; f++) u.push(c[l * Dn + f]);
        s.push({
          data: o[l],
          commitment: a[l],
          proof: Z(u)
        });
      }
      t = t[0];
    }
    d(Array.isArray(t) && (t.length === 11 || t.length === 14), `invalid field count for transaction type: ${e}`, "data", x(r));
    const i = {
      type: 3,
      chainId: K(t[0], "chainId"),
      nonce: ke(t[1], "nonce"),
      maxPriorityFeePerGas: K(t[2], "maxPriorityFeePerGas"),
      maxFeePerGas: K(t[3], "maxFeePerGas"),
      gasPrice: null,
      gasLimit: K(t[4], "gasLimit"),
      to: Ye(t[5]),
      value: K(t[6], "value"),
      data: x(t[7]),
      accessList: nr(t[8], "accessList"),
      maxFeePerBlobGas: K(t[9], "maxFeePerBlobGas"),
      blobVersionedHashes: t[10],
      blobWrapperVersion: n
    };
    s && (i.blobs = s), d(i.to != null, `invalid address for transaction type: ${e}`, "data", r), d(Array.isArray(i.blobVersionedHashes), "invalid blobVersionedHashes: must be an array", "data", r);
    for (let o = 0; o < i.blobVersionedHashes.length; o++) d(_(i.blobVersionedHashes[o], 32), `invalid blobVersionedHash at index ${o}: must be length 32`, "data", r);
    return t.length === 11 || sr(i, t.slice(11)), i;
  }
  function Pu(r, t, e) {
    const n = [
      G(r.chainId, "chainId"),
      G(r.nonce, "nonce"),
      G(r.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"),
      G(r.maxFeePerGas || 0, "maxFeePerGas"),
      G(r.gasLimit, "gasLimit"),
      r.to || Jn,
      G(r.value, "value"),
      r.data,
      rr(r.accessList || []),
      G(r.maxFeePerBlobGas || 0, "maxFeePerBlobGas"),
      gu(r.blobVersionedHashes || [], "blobVersionedHashes")
    ];
    if (t && (n.push(G(t.yParity, "yParity")), n.push(st(t.r)), n.push(st(t.s)), e)) {
      if (r.blobWrapperVersion != null) {
        const s = st(r.blobWrapperVersion), i = [];
        for (const { proof: o } of e) {
          const a = S(o), c = a.length / Dn;
          for (let l = 0; l < a.length; l += c) i.push(a.subarray(l, l + c));
        }
        return Z([
          "0x03",
          Yt([
            n,
            s,
            e.map((o) => o.data),
            e.map((o) => o.commitment),
            i
          ])
        ]);
      }
      return Z([
        "0x03",
        Yt([
          n,
          e.map((s) => s.data),
          e.map((s) => s.commitment),
          e.map((s) => s.proof)
        ])
      ]);
    }
    return Z([
      "0x03",
      Yt(n)
    ]);
  }
  function Bu(r) {
    const t = yn(S(r).slice(1));
    d(Array.isArray(t) && (t.length === 10 || t.length === 13), "invalid field count for transaction type: 4", "data", x(r));
    const e = {
      type: 4,
      chainId: K(t[0], "chainId"),
      nonce: ke(t[1], "nonce"),
      maxPriorityFeePerGas: K(t[2], "maxPriorityFeePerGas"),
      maxFeePerGas: K(t[3], "maxFeePerGas"),
      gasPrice: null,
      gasLimit: K(t[4], "gasLimit"),
      to: Ye(t[5]),
      value: K(t[6], "value"),
      data: x(t[7]),
      accessList: nr(t[8], "accessList"),
      authorizationList: du(t[9], "authorizationList")
    };
    return t.length === 10 || sr(e, t.slice(10)), e;
  }
  function Nu(r, t) {
    const e = [
      G(r.chainId, "chainId"),
      G(r.nonce, "nonce"),
      G(r.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"),
      G(r.maxFeePerGas || 0, "maxFeePerGas"),
      G(r.gasLimit, "gasLimit"),
      r.to || "0x",
      G(r.value, "value"),
      r.data,
      rr(r.accessList || []),
      pu(r.authorizationList || [])
    ];
    return t && (e.push(G(t.yParity, "yParity")), e.push(st(t.r)), e.push(st(t.s))), Z([
      "0x04",
      Yt(e)
    ]);
  }
  Ot = (_b2 = class {
    constructor() {
      __privateAdd(this, _Ot_instances);
      __privateAdd(this, _t12);
      __privateAdd(this, _e8);
      __privateAdd(this, _n6);
      __privateAdd(this, _r6);
      __privateAdd(this, _s5);
      __privateAdd(this, _o4);
      __privateAdd(this, _i3);
      __privateAdd(this, _a4);
      __privateAdd(this, _d2);
      __privateAdd(this, _l3);
      __privateAdd(this, _g2);
      __privateAdd(this, _p2);
      __privateAdd(this, _h2);
      __privateAdd(this, _u3);
      __privateAdd(this, _f3);
      __privateAdd(this, _c2);
      __privateAdd(this, _m);
      __privateAdd(this, _b);
      __privateSet(this, _t12, null), __privateSet(this, _e8, null), __privateSet(this, _r6, 0), __privateSet(this, _s5, at), __privateSet(this, _o4, null), __privateSet(this, _i3, null), __privateSet(this, _a4, null), __privateSet(this, _n6, "0x"), __privateSet(this, _d2, at), __privateSet(this, _l3, at), __privateSet(this, _g2, null), __privateSet(this, _p2, null), __privateSet(this, _h2, null), __privateSet(this, _u3, null), __privateSet(this, _f3, null), __privateSet(this, _c2, null), __privateSet(this, _m, null), __privateSet(this, _b, null);
    }
    get type() {
      return __privateGet(this, _t12);
    }
    set type(t) {
      switch (t) {
        case null:
          __privateSet(this, _t12, null);
          break;
        case 0:
        case "legacy":
          __privateSet(this, _t12, 0);
          break;
        case 1:
        case "berlin":
        case "eip-2930":
          __privateSet(this, _t12, 1);
          break;
        case 2:
        case "london":
        case "eip-1559":
          __privateSet(this, _t12, 2);
          break;
        case 3:
        case "cancun":
        case "eip-4844":
          __privateSet(this, _t12, 3);
          break;
        case 4:
        case "pectra":
        case "eip-7702":
          __privateSet(this, _t12, 4);
          break;
        default:
          d(false, "unsupported transaction type", "type", t);
      }
    }
    get typeName() {
      switch (this.type) {
        case 0:
          return "legacy";
        case 1:
          return "eip-2930";
        case 2:
          return "eip-1559";
        case 3:
          return "eip-4844";
        case 4:
          return "eip-7702";
      }
      return null;
    }
    get to() {
      const t = __privateGet(this, _e8);
      return t == null && this.type === 3 ? Jn : t;
    }
    set to(t) {
      __privateSet(this, _e8, t == null ? null : M(t));
    }
    get nonce() {
      return __privateGet(this, _r6);
    }
    set nonce(t) {
      __privateSet(this, _r6, U(t, "value"));
    }
    get gasLimit() {
      return __privateGet(this, _s5);
    }
    set gasLimit(t) {
      __privateSet(this, _s5, B(t));
    }
    get gasPrice() {
      const t = __privateGet(this, _o4);
      return t == null && (this.type === 0 || this.type === 1) ? at : t;
    }
    set gasPrice(t) {
      __privateSet(this, _o4, t == null ? null : B(t, "gasPrice"));
    }
    get maxPriorityFeePerGas() {
      const t = __privateGet(this, _i3);
      return t ?? (this.type === 2 || this.type === 3 ? at : null);
    }
    set maxPriorityFeePerGas(t) {
      __privateSet(this, _i3, t == null ? null : B(t, "maxPriorityFeePerGas"));
    }
    get maxFeePerGas() {
      const t = __privateGet(this, _a4);
      return t ?? (this.type === 2 || this.type === 3 ? at : null);
    }
    set maxFeePerGas(t) {
      __privateSet(this, _a4, t == null ? null : B(t, "maxFeePerGas"));
    }
    get data() {
      return __privateGet(this, _n6);
    }
    set data(t) {
      __privateSet(this, _n6, x(t));
    }
    get value() {
      return __privateGet(this, _d2);
    }
    set value(t) {
      __privateSet(this, _d2, B(t, "value"));
    }
    get chainId() {
      return __privateGet(this, _l3);
    }
    set chainId(t) {
      __privateSet(this, _l3, B(t));
    }
    get signature() {
      return __privateGet(this, _g2) || null;
    }
    set signature(t) {
      __privateSet(this, _g2, t == null ? null : q.from(t));
    }
    isValid() {
      const t = this.signature;
      if (t && !t.isValid()) return false;
      const e = this.authorizationList;
      if (e) {
        for (const n of e) if (!n.signature.isValid()) return false;
      }
      return true;
    }
    get accessList() {
      const t = __privateGet(this, _p2) || null;
      return t ?? (this.type === 1 || this.type === 2 || this.type === 3 ? [] : null);
    }
    set accessList(t) {
      __privateSet(this, _p2, t == null ? null : Ce(t));
    }
    get authorizationList() {
      const t = __privateGet(this, _m) || null;
      return t == null && this.type === 4 ? [] : t;
    }
    set authorizationList(t) {
      __privateSet(this, _m, t == null ? null : t.map((e) => Do(e)));
    }
    get maxFeePerBlobGas() {
      const t = __privateGet(this, _h2);
      return t == null && this.type === 3 ? at : t;
    }
    set maxFeePerBlobGas(t) {
      __privateSet(this, _h2, t == null ? null : B(t, "maxFeePerBlobGas"));
    }
    get blobVersionedHashes() {
      let t = __privateGet(this, _u3);
      return t == null && this.type === 3 ? [] : t;
    }
    set blobVersionedHashes(t) {
      if (t != null) {
        d(Array.isArray(t), "blobVersionedHashes must be an Array", "value", t), t = t.slice();
        for (let e = 0; e < t.length; e++) d(_(t[e], 32), "invalid blobVersionedHash", `value[${e}]`, t[e]);
      }
      __privateSet(this, _u3, t);
    }
    get blobs() {
      return __privateGet(this, _c2) == null ? null : __privateGet(this, _c2).map((t) => Object.assign({}, t));
    }
    set blobs(t) {
      if (t == null) {
        __privateSet(this, _c2, null);
        return;
      }
      const e = [], n = [];
      for (let s = 0; s < t.length; s++) {
        const i = t[s];
        if ($r(i)) {
          w(__privateGet(this, _f3), "adding a raw blob requires a KZG library", "UNSUPPORTED_OPERATION", {
            operation: "set blobs()"
          });
          let o = S(i);
          if (d(o.length <= Ar, "blob is too large", `blobs[${s}]`, i), o.length !== Ar) {
            const l = new Uint8Array(Ar);
            l.set(o), o = l;
          }
          const a = __privateGet(this, _f3).blobToKzgCommitment(o), c = x(__privateGet(this, _f3).computeBlobKzgProof(o, a));
          e.push({
            data: x(o),
            commitment: x(a),
            proof: c
          }), n.push(ni(1, a));
        } else {
          const o = x(i.data), a = x(i.commitment), c = x(i.proof);
          e.push({
            data: o,
            commitment: a,
            proof: c
          }), n.push(ni(1, a));
        }
      }
      __privateSet(this, _c2, e), __privateSet(this, _u3, n);
    }
    get kzg() {
      return __privateGet(this, _f3);
    }
    set kzg(t) {
      t == null ? __privateSet(this, _f3, null) : __privateSet(this, _f3, hu(t));
    }
    get blobWrapperVersion() {
      return __privateGet(this, _b);
    }
    set blobWrapperVersion(t) {
      __privateSet(this, _b, t);
    }
    get hash() {
      return this.signature == null ? null : rt(__privateMethod(this, _Ot_instances, y_fn).call(this, true, false));
    }
    get unsignedHash() {
      return rt(this.unsignedSerialized);
    }
    get from() {
      return this.signature == null ? null : iu(this.unsignedHash, this.signature.getCanonical());
    }
    get fromPublicKey() {
      return this.signature == null ? null : Kt.recoverPublicKey(this.unsignedHash, this.signature.getCanonical());
    }
    isSigned() {
      return this.signature != null;
    }
    get serialized() {
      return __privateMethod(this, _Ot_instances, y_fn).call(this, true, true);
    }
    get unsignedSerialized() {
      return __privateMethod(this, _Ot_instances, y_fn).call(this, false, false);
    }
    inferType() {
      const t = this.inferTypes();
      return t.indexOf(2) >= 0 ? 2 : t.pop();
    }
    inferTypes() {
      const t = this.gasPrice != null, e = this.maxFeePerGas != null || this.maxPriorityFeePerGas != null, n = this.accessList != null, s = __privateGet(this, _h2) != null || __privateGet(this, _u3);
      this.maxFeePerGas != null && this.maxPriorityFeePerGas != null && w(this.maxFeePerGas >= this.maxPriorityFeePerGas, "priorityFee cannot be more than maxFee", "BAD_DATA", {
        value: this
      }), w(!e || this.type !== 0 && this.type !== 1, "transaction type cannot have maxFeePerGas or maxPriorityFeePerGas", "BAD_DATA", {
        value: this
      }), w(this.type !== 0 || !n, "legacy transaction cannot have accessList", "BAD_DATA", {
        value: this
      });
      const i = [];
      return this.type != null ? i.push(this.type) : this.authorizationList && this.authorizationList.length ? i.push(4) : e ? i.push(2) : t ? (i.push(1), n || i.push(0)) : n ? (i.push(1), i.push(2)) : (s && this.to || (i.push(0), i.push(1), i.push(2)), i.push(3)), i.sort(), i;
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
    clone() {
      return Ot.from(this);
    }
    toJSON() {
      const t = (e) => e == null ? null : e.toString();
      return {
        type: this.type,
        to: this.to,
        data: this.data,
        nonce: this.nonce,
        gasLimit: t(this.gasLimit),
        gasPrice: t(this.gasPrice),
        maxPriorityFeePerGas: t(this.maxPriorityFeePerGas),
        maxFeePerGas: t(this.maxFeePerGas),
        value: t(this.value),
        chainId: t(this.chainId),
        sig: this.signature ? this.signature.toJSON() : null,
        accessList: this.accessList
      };
    }
    [fu]() {
      return this.toString();
    }
    toString() {
      const t = [], e = (s) => {
        let i = this[s];
        typeof i == "string" && (i = JSON.stringify(i)), t.push(`${s}: ${i}`);
      };
      this.type && e("type"), e("to"), e("data"), e("nonce"), e("gasLimit"), e("value"), this.chainId != null && e("chainId"), this.signature && (e("from"), t.push(`signature: ${this.signature.toString()}`));
      const n = this.authorizationList;
      if (n) {
        const s = [];
        for (const i of n) {
          const o = [];
          o.push(`address: ${JSON.stringify(i.address)}`), i.nonce != null && o.push(`nonce: ${i.nonce}`), i.chainId != null && o.push(`chainId: ${i.chainId}`), i.signature && o.push(`signature: ${i.signature.toString()}`), s.push(`Authorization { ${o.join(", ")} }`);
        }
        t.push(`authorizations: [ ${s.join(", ")} ]`);
      }
      return `Transaction { ${t.join(", ")} }`;
    }
    static from(t) {
      if (t == null) return new Ot();
      if (typeof t == "string") {
        const n = S(t);
        if (n[0] >= 127) return Ot.from(yu(n));
        switch (n[0]) {
          case 1:
            return Ot.from(Au(n));
          case 2:
            return Ot.from(bu(n));
          case 3:
            return Ot.from(xu(n));
          case 4:
            return Ot.from(Bu(n));
        }
        w(false, "unsupported transaction type", "UNSUPPORTED_OPERATION", {
          operation: "from"
        });
      }
      const e = new Ot();
      return t.type != null && (e.type = t.type), t.to != null && (e.to = t.to), t.nonce != null && (e.nonce = t.nonce), t.gasLimit != null && (e.gasLimit = t.gasLimit), t.gasPrice != null && (e.gasPrice = t.gasPrice), t.maxPriorityFeePerGas != null && (e.maxPriorityFeePerGas = t.maxPriorityFeePerGas), t.maxFeePerGas != null && (e.maxFeePerGas = t.maxFeePerGas), t.maxFeePerBlobGas != null && (e.maxFeePerBlobGas = t.maxFeePerBlobGas), t.data != null && (e.data = t.data), t.value != null && (e.value = t.value), t.chainId != null && (e.chainId = t.chainId), t.signature != null && (e.signature = q.from(t.signature)), t.accessList != null && (e.accessList = t.accessList), t.authorizationList != null && (e.authorizationList = t.authorizationList), t.blobVersionedHashes != null && (e.blobVersionedHashes = t.blobVersionedHashes), t.kzg != null && (e.kzg = t.kzg), t.blobWrapperVersion != null && (e.blobWrapperVersion = t.blobWrapperVersion), t.blobs != null && (e.blobs = t.blobs), t.hash != null && (d(e.isSigned(), "unsigned transaction cannot define '.hash'", "tx", t), d(e.hash === t.hash, "hash mismatch", "tx", t)), t.from != null && (d(e.isSigned(), "unsigned transaction cannot define '.from'", "tx", t), d(e.from.toLowerCase() === (t.from || "").toLowerCase(), "from mismatch", "tx", t)), e;
    }
  }, _t12 = new WeakMap(), _e8 = new WeakMap(), _n6 = new WeakMap(), _r6 = new WeakMap(), _s5 = new WeakMap(), _o4 = new WeakMap(), _i3 = new WeakMap(), _a4 = new WeakMap(), _d2 = new WeakMap(), _l3 = new WeakMap(), _g2 = new WeakMap(), _p2 = new WeakMap(), _h2 = new WeakMap(), _u3 = new WeakMap(), _f3 = new WeakMap(), _c2 = new WeakMap(), _m = new WeakMap(), _b = new WeakMap(), _Ot_instances = new WeakSet(), y_fn = function(t, e) {
    w(!t || this.signature != null, "cannot serialize unsigned transaction; maybe you meant .unsignedSerialized", "UNSUPPORTED_OPERATION", {
      operation: ".serialized"
    });
    const n = t ? this.signature : null;
    switch (this.inferType()) {
      case 0:
        return mu(this, n);
      case 1:
        return Eu(this, n);
      case 2:
        return wu(this, n);
      case 3:
        return Pu(this, n, e ? this.blobs : null);
      case 4:
        return Nu(this, n);
    }
    w(false, "unsupported transaction type", "UNSUPPORTED_OPERATION", {
      operation: ".serialized"
    });
  }, _b2);
  Ne = function(r) {
    return rt(Zt(r));
  };
  var Iu = "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";
  const ri = /* @__PURE__ */ new Map([
    [
      8217,
      "apostrophe"
    ],
    [
      8260,
      "fraction slash"
    ],
    [
      12539,
      "middle dot"
    ]
  ]), si = 4;
  function Tu(r) {
    let t = 0;
    function e() {
      return r[t++] << 8 | r[t++];
    }
    let n = e(), s = 1, i = [
      0,
      1
    ];
    for (let C = 1; C < n; C++) i.push(s += e());
    let o = e(), a = t;
    t += o;
    let c = 0, l = 0;
    function u() {
      return c == 0 && (l = l << 8 | r[t++], c = 8), l >> --c & 1;
    }
    const f = 31, h = 2 ** f, g = h >>> 1, m = g >> 1, p = h - 1;
    let y = 0;
    for (let C = 0; C < f; C++) y = y << 1 | u();
    let b = [], P = 0, A = h;
    for (; ; ) {
      let C = Math.floor(((y - P + 1) * s - 1) / A), I = 0, O = n;
      for (; O - I > 1; ) {
        let H = I + O >>> 1;
        C < i[H] ? O = H : I = H;
      }
      if (I == 0) break;
      b.push(I);
      let v = P + Math.floor(A * i[I] / s), J = P + Math.floor(A * i[I + 1] / s) - 1;
      for (; ((v ^ J) & g) == 0; ) y = y << 1 & p | u(), v = v << 1 & p, J = J << 1 & p | 1;
      for (; v & ~J & m; ) y = y & g | y << 1 & p >>> 1 | u(), v = v << 1 ^ g, J = (J ^ g) << 1 | g | 1;
      P = v, A = 1 + J - v;
    }
    let R = n - 4;
    return b.map((C) => {
      switch (C - R) {
        case 3:
          return R + 65792 + (r[a++] << 16 | r[a++] << 8 | r[a++]);
        case 2:
          return R + 256 + (r[a++] << 8 | r[a++]);
        case 1:
          return R + r[a++];
        default:
          return C - 1;
      }
    });
  }
  function vu(r) {
    let t = 0;
    return () => r[t++];
  }
  function Go(r) {
    return vu(Tu(Cu(r)));
  }
  function Cu(r) {
    let t = [];
    [
      ..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
    ].forEach((s, i) => t[s.charCodeAt(0)] = i);
    let e = r.length, n = new Uint8Array(6 * e >> 3);
    for (let s = 0, i = 0, o = 0, a = 0; s < e; s++) a = a << 6 | t[r.charCodeAt(s)], o += 6, o >= 8 && (n[i++] = a >> (o -= 8));
    return n;
  }
  function ku(r) {
    return r & 1 ? ~r >> 1 : r >> 1;
  }
  function Ou(r, t) {
    let e = Array(r);
    for (let n = 0, s = 0; n < r; n++) e[n] = s += ku(t());
    return e;
  }
  function ln(r, t = 0) {
    let e = [];
    for (; ; ) {
      let n = r(), s = r();
      if (!s) break;
      t += n;
      for (let i = 0; i < s; i++) e.push(t + i);
      t += s + 1;
    }
    return e;
  }
  function Mo(r) {
    return un(() => {
      let t = ln(r);
      if (t.length) return t;
    });
  }
  function Ho(r) {
    let t = [];
    for (; ; ) {
      let e = r();
      if (e == 0) break;
      t.push(Ru(e, r));
    }
    for (; ; ) {
      let e = r() - 1;
      if (e < 0) break;
      t.push(Su(e, r));
    }
    return t.flat();
  }
  function un(r) {
    let t = [];
    for (; ; ) {
      let e = r(t.length);
      if (!e) break;
      t.push(e);
    }
    return t;
  }
  function Qo(r, t, e) {
    let n = Array(r).fill().map(() => []);
    for (let s = 0; s < t; s++) Ou(r, e).forEach((i, o) => n[o].push(i));
    return n;
  }
  function Ru(r, t) {
    let e = 1 + t(), n = t(), s = un(t);
    return Qo(s.length, 1 + r, t).flatMap((o, a) => {
      let [c, ...l] = o;
      return Array(s[a]).fill().map((u, f) => {
        let h = f * n;
        return [
          c + f * e,
          l.map((g) => g + h)
        ];
      });
    });
  }
  function Su(r, t) {
    let e = 1 + t();
    return Qo(e, 1 + r, t).map((s) => [
      s[0],
      s.slice(1)
    ]);
  }
  function Lu(r) {
    let t = [], e = ln(r);
    return s(n([]), []), t;
    function n(i) {
      let o = r(), a = un(() => {
        let c = ln(r).map((l) => e[l]);
        if (c.length) return n(c);
      });
      return {
        S: o,
        B: a,
        Q: i
      };
    }
    function s({ S: i, B: o }, a, c) {
      if (!(i & 4 && c === a[a.length - 1])) {
        i & 2 && (c = a[a.length - 1]), i & 1 && t.push(a);
        for (let l of o) for (let u of l.Q) s(l, [
          ...a,
          u
        ], c);
      }
    }
  }
  function Uu(r) {
    return r.toString(16).toUpperCase().padStart(2, "0");
  }
  function Vo(r) {
    return `{${Uu(r)}}`;
  }
  function Fu(r) {
    let t = [];
    for (let e = 0, n = r.length; e < n; ) {
      let s = r.codePointAt(e);
      e += s < 65536 ? 1 : 2, t.push(s);
    }
    return t;
  }
  function ze(r) {
    let e = r.length;
    if (e < 4096) return String.fromCodePoint(...r);
    let n = [];
    for (let s = 0; s < e; ) n.push(String.fromCodePoint(...r.slice(s, s += 4096)));
    return n.join("");
  }
  function Du(r, t) {
    let e = r.length, n = e - t.length;
    for (let s = 0; n == 0 && s < e; s++) n = r[s] - t[s];
    return n;
  }
  var Gu = "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";
  const fn = 44032, Kn = 4352, zn = 4449, _n = 4519, Jo = 19, Ko = 21, _e = 28, jn = Ko * _e, Mu = Jo * jn, Hu = fn + Mu, Qu = Kn + Jo, Vu = zn + Ko, Ju = _n + _e;
  function en(r) {
    return r >> 24 & 255;
  }
  function zo(r) {
    return r & 16777215;
  }
  let Hr, ii, Qr, Gn;
  function Ku() {
    let r = Go(Gu);
    Hr = new Map(Mo(r).flatMap((t, e) => t.map((n) => [
      n,
      e + 1 << 24
    ]))), ii = new Set(ln(r)), Qr = /* @__PURE__ */ new Map(), Gn = /* @__PURE__ */ new Map();
    for (let [t, e] of Ho(r)) {
      if (!ii.has(t) && e.length == 2) {
        let [n, s] = e, i = Gn.get(n);
        i || (i = /* @__PURE__ */ new Map(), Gn.set(n, i)), i.set(s, t);
      }
      Qr.set(t, e.reverse());
    }
  }
  function _o(r) {
    return r >= fn && r < Hu;
  }
  function zu(r, t) {
    if (r >= Kn && r < Qu && t >= zn && t < Vu) return fn + (r - Kn) * jn + (t - zn) * _e;
    if (_o(r) && t > _n && t < Ju && (r - fn) % _e == 0) return r + (t - _n);
    {
      let e = Gn.get(r);
      return e && (e = e.get(t), e) ? e : -1;
    }
  }
  function jo(r) {
    Hr || Ku();
    let t = [], e = [], n = false;
    function s(i) {
      let o = Hr.get(i);
      o && (n = true, i |= o), t.push(i);
    }
    for (let i of r) for (; ; ) {
      if (i < 128) t.push(i);
      else if (_o(i)) {
        let o = i - fn, a = o / jn | 0, c = o % jn / _e | 0, l = o % _e;
        s(Kn + a), s(zn + c), l > 0 && s(_n + l);
      } else {
        let o = Qr.get(i);
        o ? e.push(...o) : s(i);
      }
      if (!e.length) break;
      i = e.pop();
    }
    if (n && t.length > 1) {
      let i = en(t[0]);
      for (let o = 1; o < t.length; o++) {
        let a = en(t[o]);
        if (a == 0 || i <= a) {
          i = a;
          continue;
        }
        let c = o - 1;
        for (; ; ) {
          let l = t[c + 1];
          if (t[c + 1] = t[c], t[c] = l, !c || (i = en(t[--c]), i <= a)) break;
        }
        i = en(t[o]);
      }
    }
    return t;
  }
  function _u(r) {
    let t = [], e = [], n = -1, s = 0;
    for (let i of r) {
      let o = en(i), a = zo(i);
      if (n == -1) o == 0 ? n = a : t.push(a);
      else if (s > 0 && s >= o) o == 0 ? (t.push(n, ...e), e.length = 0, n = a) : e.push(a), s = o;
      else {
        let c = zu(n, a);
        c >= 0 ? n = c : s == 0 && o == 0 ? (t.push(n), n = a) : (e.push(a), s = o);
      }
    }
    return n >= 0 && t.push(n, ...e), t;
  }
  function Wo(r) {
    return jo(r).map(zo);
  }
  function ju(r) {
    return _u(jo(r));
  }
  const oi = 45, Zo = ".", Yo = 65039, qo = 1, Wn = (r) => Array.from(r);
  function hn(r, t) {
    return r.P.has(t) || r.Q.has(t);
  }
  class Wu extends Array {
    get is_emoji() {
      return true;
    }
  }
  let Vr, Xo, we, Jr, $o, Me, Er, Ue, ge, ai, Kr;
  function hs() {
    if (Vr) return;
    let r = Go(Iu);
    const t = () => ln(r), e = () => new Set(t()), n = (u, f) => f.forEach((h) => u.add(h));
    Vr = new Map(Ho(r)), Xo = e(), we = t(), Jr = new Set(t().map((u) => we[u])), we = new Set(we), $o = e(), e();
    let s = Mo(r), i = r();
    const o = () => {
      let u = /* @__PURE__ */ new Set();
      return t().forEach((f) => n(u, s[f])), n(u, t()), u;
    };
    Me = un((u) => {
      let f = un(r).map((h) => h + 96);
      if (f.length) {
        let h = u >= i;
        f[0] -= 32, f = ze(f), h && (f = `Restricted[${f}]`);
        let g = o(), m = o(), p = !r();
        return {
          N: f,
          P: g,
          Q: m,
          M: p,
          R: h
        };
      }
    }), Er = e(), Ue = /* @__PURE__ */ new Map();
    let a = t().concat(Wn(Er)).sort((u, f) => u - f);
    a.forEach((u, f) => {
      let h = r(), g = a[f] = h ? a[f - h] : {
        V: [],
        M: /* @__PURE__ */ new Map()
      };
      g.V.push(u), Er.has(u) || Ue.set(u, g);
    });
    for (let { V: u, M: f } of new Set(Ue.values())) {
      let h = [];
      for (let m of u) {
        let p = Me.filter((b) => hn(b, m)), y = h.find(({ G: b }) => p.some((P) => b.has(P)));
        y || (y = {
          G: /* @__PURE__ */ new Set(),
          V: []
        }, h.push(y)), y.V.push(m), n(y.G, p);
      }
      let g = h.flatMap((m) => Wn(m.G));
      for (let { G: m, V: p } of h) {
        let y = new Set(g.filter((b) => !m.has(b)));
        for (let b of p) f.set(b, y);
      }
    }
    ge = /* @__PURE__ */ new Set();
    let c = /* @__PURE__ */ new Set();
    const l = (u) => ge.has(u) ? c.add(u) : ge.add(u);
    for (let u of Me) {
      for (let f of u.P) l(f);
      for (let f of u.Q) l(f);
    }
    for (let u of ge) !Ue.has(u) && !c.has(u) && Ue.set(u, qo);
    n(ge, Wo(ge)), ai = Lu(r).map((u) => Wu.from(u)).sort(Du), Kr = /* @__PURE__ */ new Map();
    for (let u of ai) {
      let f = [
        Kr
      ];
      for (let h of u) {
        let g = f.map((m) => {
          let p = m.get(h);
          return p || (p = /* @__PURE__ */ new Map(), m.set(h, p)), p;
        });
        h === Yo ? f.push(...g) : f = g;
      }
      for (let h of f) h.V = u;
    }
  }
  function ds(r) {
    return (ta(r) ? "" : `${ps(ir([
      r
    ]))} `) + Vo(r);
  }
  function ps(r) {
    return `"${r}"\u200E`;
  }
  function Zu(r) {
    if (r.length >= 4 && r[2] == oi && r[3] == oi) throw new Error(`invalid label extension: "${ze(r.slice(0, 4))}"`);
  }
  function Yu(r) {
    for (let e = r.lastIndexOf(95); e > 0; ) if (r[--e] !== 95) throw new Error("underscore allowed only at start");
  }
  function qu(r) {
    let t = r[0], e = ri.get(t);
    if (e) throw sn(`leading ${e}`);
    let n = r.length, s = -1;
    for (let i = 1; i < n; i++) {
      t = r[i];
      let o = ri.get(t);
      if (o) {
        if (s == i) throw sn(`${e} + ${o}`);
        s = i + 1, e = o;
      }
    }
    if (s == n) throw sn(`trailing ${e}`);
  }
  function ir(r, t = 1 / 0, e = Vo) {
    let n = [];
    Xu(r[0]) && n.push("\u25CC"), r.length > t && (t >>= 1, r = [
      ...r.slice(0, t),
      8230,
      ...r.slice(-t)
    ]);
    let s = 0, i = r.length;
    for (let o = 0; o < i; o++) {
      let a = r[o];
      ta(a) && (n.push(ze(r.slice(s, o))), n.push(e(a)), s = o + 1);
    }
    return n.push(ze(r.slice(s, i))), n.join("");
  }
  function Xu(r, t) {
    return hs(), we.has(r);
  }
  function ta(r) {
    return hs(), $o.has(r);
  }
  function $u(r) {
    return rf(tf(r, ju, af));
  }
  function tf(r, t, e) {
    if (!r) return [];
    hs();
    let n = 0;
    return r.split(Zo).map((s) => {
      let i = Fu(s), o = {
        input: i,
        offset: n
      };
      n += i.length + 1;
      try {
        let a = o.tokens = of(i, t, e), c = a.length, l;
        if (!c) throw new Error("empty label");
        let u = o.output = a.flat();
        if (Yu(u), !(o.emoji = c > 1 || a[0].is_emoji) && u.every((h) => h < 128)) Zu(u), l = "ASCII";
        else {
          let h = a.flatMap((g) => g.is_emoji ? [] : g);
          if (!h.length) l = "Emoji";
          else {
            if (we.has(u[0])) throw sn("leading combining mark");
            for (let p = 1; p < c; p++) {
              let y = a[p];
              if (!y.is_emoji && we.has(y[0])) throw sn(`emoji + combining mark: "${ze(a[p - 1])} + ${ir([
                y[0]
              ])}"`);
            }
            qu(u);
            let g = Wn(new Set(h)), [m] = nf(g);
            sf(m, h), ef(m, g), l = m.N;
          }
        }
        o.type = l;
      } catch (a) {
        o.error = a;
      }
      return o;
    });
  }
  function ef(r, t) {
    let e, n = [];
    for (let s of t) {
      let i = Ue.get(s);
      if (i === qo) return;
      if (i) {
        let o = i.M.get(s);
        if (e = e ? e.filter((a) => o.has(a)) : Wn(o), !e.length) return;
      } else n.push(s);
    }
    if (e) {
      for (let s of e) if (n.every((i) => hn(s, i))) throw new Error(`whole-script confusable: ${r.N}/${s.N}`);
    }
  }
  function nf(r) {
    let t = Me;
    for (let e of r) {
      let n = t.filter((s) => hn(s, e));
      if (!n.length) throw Me.some((s) => hn(s, e)) ? na(t[0], e) : ea(e);
      if (t = n, n.length == 1) break;
    }
    return t;
  }
  function rf(r) {
    return r.map(({ input: t, error: e, output: n }) => {
      if (e) {
        let s = e.message;
        throw new Error(r.length == 1 ? s : `Invalid label ${ps(ir(t, 63))}: ${s}`);
      }
      return ze(n);
    }).join(Zo);
  }
  function ea(r) {
    return new Error(`disallowed character: ${ds(r)}`);
  }
  function na(r, t) {
    let e = ds(t), n = Me.find((s) => s.P.has(t));
    return n && (e = `${n.N} ${e}`), new Error(`illegal mixture: ${r.N} + ${e}`);
  }
  function sn(r) {
    return new Error(`illegal placement: ${r}`);
  }
  function sf(r, t) {
    for (let e of t) if (!hn(r, e)) throw na(r, e);
    if (r.M) {
      let e = Wo(t);
      for (let n = 1, s = e.length; n < s; n++) if (Jr.has(e[n])) {
        let i = n + 1;
        for (let o; i < s && Jr.has(o = e[i]); i++) for (let a = n; a < i; a++) if (e[a] == o) throw new Error(`duplicate non-spacing marks: ${ds(o)}`);
        if (i - n > si) throw new Error(`excessive non-spacing marks: ${ps(ir(e.slice(n - 1, i)))} (${i - n}/${si})`);
        n = i;
      }
    }
  }
  function of(r, t, e) {
    let n = [], s = [];
    for (r = r.slice().reverse(); r.length; ) {
      let i = cf(r);
      if (i) s.length && (n.push(t(s)), s = []), n.push(e(i));
      else {
        let o = r.pop();
        if (ge.has(o)) s.push(o);
        else {
          let a = Vr.get(o);
          if (a) s.push(...a);
          else if (!Xo.has(o)) throw ea(o);
        }
      }
    }
    return s.length && n.push(t(s)), n;
  }
  function af(r) {
    return r.filter((t) => t != Yo);
  }
  function cf(r, t) {
    let e = Kr, n, s = r.length;
    for (; s && (e = e.get(r[--s]), !!e); ) {
      let { V: i } = e;
      i && (n = i, r.length = s);
    }
    return n;
  }
  const ra = new Uint8Array(32);
  ra.fill(0);
  function ci(r) {
    return d(r.length !== 0, "invalid ENS name; empty component", "comp", r), r;
  }
  function gs(r) {
    const t = Zt(sa(r)), e = [];
    if (r.length === 0) return e;
    let n = 0;
    for (let s = 0; s < t.length; s++) t[s] === 46 && (e.push(ci(t.slice(n, s))), n = s + 1);
    return d(n < t.length, "invalid ENS name; empty component", "name", r), e.push(ci(t.slice(n))), e;
  }
  function sa(r) {
    try {
      if (r.length === 0) throw new Error("empty label");
      return $u(r);
    } catch (t) {
      d(false, `invalid ENS name (${t.message})`, "name", r);
    }
  }
  function li(r) {
    try {
      return gs(r).length !== 0;
    } catch {
    }
    return false;
  }
  function ui(r) {
    d(typeof r == "string", "invalid ENS name; not a string", "name", r), d(r.length, "invalid ENS name (empty label)", "name", r);
    let t = ra;
    const e = gs(r);
    for (; e.length; ) t = rt(Z([
      t,
      rt(e.pop())
    ]));
    return x(t);
  }
  function fi(r, t) {
    const e = t;
    return d(e <= 255, "DNS encoded label cannot exceed 255", "length", e), x(Z(gs(r).map((n) => {
      d(n.length <= e, `label ${JSON.stringify(r)} exceeds ${e} bytes`, "name", r);
      const s = new Uint8Array(n.length + 1);
      return s.set(n, 1), s[0] = s.length - 1, s;
    }))) + "00";
  }
  const ia = new Uint8Array(32);
  ia.fill(0);
  const lf = BigInt(-1), oa = BigInt(0), aa = BigInt(1), uf = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
  function ff(r) {
    const t = S(r), e = t.length % 32;
    return e ? Z([
      t,
      ia.slice(e)
    ]) : x(t);
  }
  const hf = ue(aa, 32), df = ue(oa, 32), hi = {
    name: "string",
    version: "string",
    chainId: "uint256",
    verifyingContract: "address",
    salt: "bytes32"
  }, xr = [
    "name",
    "version",
    "chainId",
    "verifyingContract",
    "salt"
  ];
  function di(r) {
    return function(t) {
      return d(typeof t == "string", `invalid domain value for ${JSON.stringify(r)}`, `domain.${r}`, t), t;
    };
  }
  const pf = {
    name: di("name"),
    version: di("version"),
    chainId: function(r) {
      const t = B(r, "domain.chainId");
      return d(t >= 0, "invalid chain ID", "domain.chainId", r), Number.isSafeInteger(t) ? Number(t) : Rt(t);
    },
    verifyingContract: function(r) {
      try {
        return M(r).toLowerCase();
      } catch {
      }
      d(false, 'invalid domain value "verifyingContract"', "domain.verifyingContract", r);
    },
    salt: function(r) {
      const t = S(r, "domain.salt");
      return d(t.length === 32, 'invalid domain value "salt"', "domain.salt", r), x(t);
    }
  };
  function Pr(r) {
    {
      const t = r.match(/^(u?)int(\d+)$/);
      if (t) {
        const e = t[1] === "", n = parseInt(t[2]);
        d(n % 8 === 0 && n !== 0 && n <= 256 && t[2] === String(n), "invalid numeric width", "type", r);
        const s = tn(uf, e ? n - 1 : n), i = e ? (s + aa) * lf : oa;
        return function(o) {
          const a = B(o, "value");
          return d(a >= i && a <= s, `value out-of-bounds for ${r}`, "value", a), ue(e ? Wi(a, 256) : a, 32);
        };
      }
    }
    {
      const t = r.match(/^bytes(\d+)$/);
      if (t) {
        const e = parseInt(t[1]);
        return d(e !== 0 && e <= 32 && t[1] === String(e), "invalid bytes width", "type", r), function(n) {
          const s = S(n);
          return d(s.length === e, `invalid length for ${r}`, "value", n), ff(n);
        };
      }
    }
    switch (r) {
      case "address":
        return function(t) {
          return Xt(M(t), 32);
        };
      case "bool":
        return function(t) {
          return t ? hf : df;
        };
      case "bytes":
        return function(t) {
          return rt(t);
        };
      case "string":
        return function(t) {
          return Ne(t);
        };
    }
    return null;
  }
  function pi(r, t) {
    return `${r}(${t.map(({ name: e, type: n }) => n + " " + e).join(",")})`;
  }
  function On(r) {
    const t = r.match(/^([^\x5b]*)((\x5b\d*\x5d)*)(\x5b(\d*)\x5d)$/);
    return t ? {
      base: t[1],
      index: t[2] + t[4],
      array: {
        base: t[1],
        prefix: t[1] + t[2],
        count: t[5] ? parseInt(t[5]) : -1
      }
    } : {
      base: r
    };
  }
  xt = (_c3 = class {
    constructor(t) {
      __privateAdd(this, _xt_instances);
      __publicField(this, "primaryType");
      __privateAdd(this, _t13);
      __privateAdd(this, _e9);
      __privateAdd(this, _n7);
      __privateSet(this, _e9, /* @__PURE__ */ new Map()), __privateSet(this, _n7, /* @__PURE__ */ new Map());
      const e = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), i = {};
      Object.keys(t).forEach((c) => {
        i[c] = t[c].map(({ name: l, type: u }) => {
          let { base: f, index: h } = On(u);
          return f === "int" && !t.int && (f = "int256"), f === "uint" && !t.uint && (f = "uint256"), {
            name: l,
            type: f + (h || "")
          };
        }), e.set(c, /* @__PURE__ */ new Set()), n.set(c, []), s.set(c, /* @__PURE__ */ new Set());
      }), __privateSet(this, _t13, JSON.stringify(i));
      for (const c in i) {
        const l = /* @__PURE__ */ new Set();
        for (const u of i[c]) {
          d(!l.has(u.name), `duplicate variable name ${JSON.stringify(u.name)} in ${JSON.stringify(c)}`, "types", t), l.add(u.name);
          const f = On(u.type).base;
          d(f !== c, `circular type reference to ${JSON.stringify(f)}`, "types", t), !Pr(f) && (d(n.has(f), `unknown type ${JSON.stringify(f)}`, "types", t), n.get(f).push(c), e.get(c).add(f));
        }
      }
      const o = Array.from(n.keys()).filter((c) => n.get(c).length === 0);
      d(o.length !== 0, "missing primary type", "types", t), d(o.length === 1, `ambiguous primary types or unused types: ${o.map((c) => JSON.stringify(c)).join(", ")}`, "types", t), k(this, {
        primaryType: o[0]
      });
      function a(c, l) {
        d(!l.has(c), `circular type reference to ${JSON.stringify(c)}`, "types", t), l.add(c);
        for (const u of e.get(c)) if (n.has(u)) {
          a(u, l);
          for (const f of l) s.get(f).add(u);
        }
        l.delete(c);
      }
      a(this.primaryType, /* @__PURE__ */ new Set());
      for (const [c, l] of s) {
        const u = Array.from(l);
        u.sort(), __privateGet(this, _e9).set(c, pi(c, i[c]) + u.map((f) => pi(f, i[f])).join(""));
      }
    }
    get types() {
      return JSON.parse(__privateGet(this, _t13));
    }
    getEncoder(t) {
      let e = __privateGet(this, _n7).get(t);
      return e || (e = __privateMethod(this, _xt_instances, r_fn).call(this, t), __privateGet(this, _n7).set(t, e)), e;
    }
    encodeType(t) {
      const e = __privateGet(this, _e9).get(t);
      return d(e, `unknown type: ${JSON.stringify(t)}`, "name", t), e;
    }
    encodeData(t, e) {
      return this.getEncoder(t)(e);
    }
    hashStruct(t, e) {
      return rt(this.encodeData(t, e));
    }
    encode(t) {
      return this.encodeData(this.primaryType, t);
    }
    hash(t) {
      return this.hashStruct(this.primaryType, t);
    }
    _visit(t, e, n) {
      if (Pr(t)) return n(t, e);
      const s = On(t).array;
      if (s) return d(s.count === -1 || s.count === e.length, `array length mismatch; expected length ${s.count}`, "value", e), e.map((o) => this._visit(s.prefix, o, n));
      const i = this.types[t];
      if (i) return i.reduce((o, { name: a, type: c }) => (o[a] = this._visit(c, e[a], n), o), {});
      d(false, `unknown type: ${t}`, "type", t);
    }
    visit(t, e) {
      return this._visit(this.primaryType, t, e);
    }
    static from(t) {
      return new xt(t);
    }
    static getPrimaryType(t) {
      return xt.from(t).primaryType;
    }
    static hashStruct(t, e, n) {
      return xt.from(e).hashStruct(t, n);
    }
    static hashDomain(t) {
      const e = [];
      for (const n in t) {
        if (t[n] == null) continue;
        const s = hi[n];
        d(s, `invalid typed-data domain key: ${JSON.stringify(n)}`, "domain", t), e.push({
          name: n,
          type: s
        });
      }
      return e.sort((n, s) => xr.indexOf(n.name) - xr.indexOf(s.name)), xt.hashStruct("EIP712Domain", {
        EIP712Domain: e
      }, t);
    }
    static encode(t, e, n) {
      return Z([
        "0x1901",
        xt.hashDomain(t),
        xt.from(e).hash(n)
      ]);
    }
    static hash(t, e, n) {
      return rt(xt.encode(t, e, n));
    }
    static async resolveNames(t, e, n, s) {
      t = Object.assign({}, t);
      for (const a in t) t[a] == null && delete t[a];
      const i = {};
      t.verifyingContract && !_(t.verifyingContract, 20) && (i[t.verifyingContract] = "0x");
      const o = xt.from(e);
      o.visit(n, (a, c) => (a === "address" && !_(c, 20) && (i[c] = "0x"), c));
      for (const a in i) i[a] = await s(a);
      return t.verifyingContract && i[t.verifyingContract] && (t.verifyingContract = i[t.verifyingContract]), n = o.visit(n, (a, c) => a === "address" && i[c] ? i[c] : c), {
        domain: t,
        value: n
      };
    }
    static getPayload(t, e, n) {
      xt.hashDomain(t);
      const s = {}, i = [];
      xr.forEach((c) => {
        const l = t[c];
        l != null && (s[c] = pf[c](l), i.push({
          name: c,
          type: hi[c]
        }));
      });
      const o = xt.from(e);
      e = o.types;
      const a = Object.assign({}, e);
      return d(a.EIP712Domain == null, "types must not contain EIP712Domain type", "types.EIP712Domain", e), a.EIP712Domain = i, o.encode(n), {
        types: a,
        domain: s,
        primaryType: o.primaryType,
        message: o.visit(n, (c, l) => {
          if (c.match(/^bytes(\d*)/)) return x(S(l));
          if (c.match(/^u?int/)) return B(l).toString();
          switch (c) {
            case "address":
              return l.toLowerCase();
            case "bool":
              return !!l;
            case "string":
              return d(typeof l == "string", "invalid string", "value", l), l;
          }
          d(false, "unsupported type", "type", c);
        })
      };
    }
  }, _t13 = new WeakMap(), _e9 = new WeakMap(), _n7 = new WeakMap(), _xt_instances = new WeakSet(), r_fn = function(t) {
    {
      const s = Pr(t);
      if (s) return s;
    }
    const e = On(t).array;
    if (e) {
      const s = e.prefix, i = this.getEncoder(s);
      return (o) => {
        d(e.count === -1 || e.count === o.length, `array length mismatch; expected length ${e.count}`, "value", o);
        let a = o.map(i);
        return __privateGet(this, _e9).has(s) && (a = a.map(rt)), rt(Z(a));
      };
    }
    const n = this.types[t];
    if (n) {
      const s = Ne(__privateGet(this, _e9).get(t));
      return (i) => {
        const o = n.map(({ name: a, type: c }) => {
          const l = this.getEncoder(c)(i[a]);
          return __privateGet(this, _e9).has(c) ? rt(l) : l;
        });
        return o.unshift(s), Z(o);
      };
    }
    d(false, `unknown type: ${t}`, "type", t);
  }, _c3);
  function yt(r) {
    const t = /* @__PURE__ */ new Set();
    return r.forEach((e) => t.add(e)), Object.freeze(t);
  }
  const gf = "external public payable override", yf = yt(gf.split(" ")), ca = "constant external internal payable private public pure view override", mf = yt(ca.split(" ")), la = "constructor error event fallback function receive struct", ua = yt(la.split(" ")), fa = "calldata memory storage payable indexed", bf = yt(fa.split(" ")), wf = "tuple returns", Af = [
    la,
    fa,
    wf,
    ca
  ].join(" "), Ef = yt(Af.split(" ")), xf = {
    "(": "OPEN_PAREN",
    ")": "CLOSE_PAREN",
    "[": "OPEN_BRACKET",
    "]": "CLOSE_BRACKET",
    ",": "COMMA",
    "@": "AT"
  }, Pf = new RegExp("^(\\s*)"), Bf = new RegExp("^([0-9]+)"), Nf = new RegExp("^([a-zA-Z$_][a-zA-Z0-9$_]*)"), ha = new RegExp("^([a-zA-Z$_][a-zA-Z0-9$_]*)$"), da = new RegExp("^(address|bool|bytes([0-9]*)|string|u?int([0-9]*))$");
  const _vt = class _vt {
    constructor(t) {
      __privateAdd(this, _vt_instances);
      __privateAdd(this, _t14);
      __privateAdd(this, _e10);
      __privateSet(this, _t14, 0), __privateSet(this, _e10, t.slice());
    }
    get offset() {
      return __privateGet(this, _t14);
    }
    get length() {
      return __privateGet(this, _e10).length - __privateGet(this, _t14);
    }
    clone() {
      return new _vt(__privateGet(this, _e10));
    }
    reset() {
      __privateSet(this, _t14, 0);
    }
    popKeyword(t) {
      const e = this.peek();
      if (e.type !== "KEYWORD" || !t.has(e.text)) throw new Error(`expected keyword ${e.text}`);
      return this.pop().text;
    }
    popType(t) {
      if (this.peek().type !== t) {
        const e = this.peek();
        throw new Error(`expected ${t}; got ${e.type} ${JSON.stringify(e.text)}`);
      }
      return this.pop().text;
    }
    popParen() {
      const t = this.peek();
      if (t.type !== "OPEN_PAREN") throw new Error("bad start");
      const e = __privateMethod(this, _vt_instances, n_fn2).call(this, __privateGet(this, _t14) + 1, t.match + 1);
      return __privateSet(this, _t14, t.match + 1), e;
    }
    popParams() {
      const t = this.peek();
      if (t.type !== "OPEN_PAREN") throw new Error("bad start");
      const e = [];
      for (; __privateGet(this, _t14) < t.match - 1; ) {
        const n = this.peek().linkNext;
        e.push(__privateMethod(this, _vt_instances, n_fn2).call(this, __privateGet(this, _t14) + 1, n)), __privateSet(this, _t14, n);
      }
      return __privateSet(this, _t14, t.match + 1), e;
    }
    peek() {
      if (__privateGet(this, _t14) >= __privateGet(this, _e10).length) throw new Error("out-of-bounds");
      return __privateGet(this, _e10)[__privateGet(this, _t14)];
    }
    peekKeyword(t) {
      const e = this.peekType("KEYWORD");
      return e != null && t.has(e) ? e : null;
    }
    peekType(t) {
      if (this.length === 0) return null;
      const e = this.peek();
      return e.type === t ? e.text : null;
    }
    pop() {
      const t = this.peek();
      return __privateWrapper(this, _t14)._++, t;
    }
    toString() {
      const t = [];
      for (let e = __privateGet(this, _t14); e < __privateGet(this, _e10).length; e++) {
        const n = __privateGet(this, _e10)[e];
        t.push(`${n.type}:${n.text}`);
      }
      return `<TokenString ${t.join(" ")}>`;
    }
  };
  _t14 = new WeakMap();
  _e10 = new WeakMap();
  _vt_instances = new WeakSet();
  n_fn2 = function(t = 0, e = 0) {
    return new _vt(__privateGet(this, _e10).slice(t, e).map((n) => Object.freeze(Object.assign({}, n, {
      match: n.match - t,
      linkBack: n.linkBack - t,
      linkNext: n.linkNext - t
    }))));
  };
  let vt = _vt;
  function fe(r) {
    const t = [], e = (o) => {
      const a = i < r.length ? JSON.stringify(r[i]) : "$EOI";
      throw new Error(`invalid token ${a} at ${i}: ${o}`);
    };
    let n = [], s = [], i = 0;
    for (; i < r.length; ) {
      let o = r.substring(i), a = o.match(Pf);
      a && (i += a[1].length, o = r.substring(i));
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
      t.push(c);
      let l = xf[o[0]] || "";
      if (l) {
        if (c.type = l, c.text = o[0], i++, l === "OPEN_PAREN") n.push(t.length - 1), s.push(t.length - 1);
        else if (l == "CLOSE_PAREN") n.length === 0 && e("no matching open bracket"), c.match = n.pop(), t[c.match].match = t.length - 1, c.depth--, c.linkBack = s.pop(), t[c.linkBack].linkNext = t.length - 1;
        else if (l === "COMMA") c.linkBack = s.pop(), t[c.linkBack].linkNext = t.length - 1, s.push(t.length - 1);
        else if (l === "OPEN_BRACKET") c.type = "BRACKET";
        else if (l === "CLOSE_BRACKET") {
          let u = t.pop().text;
          if (t.length > 0 && t[t.length - 1].type === "NUMBER") {
            const f = t.pop().text;
            u = f + u, t[t.length - 1].value = U(f);
          }
          if (t.length === 0 || t[t.length - 1].type !== "BRACKET") throw new Error("missing opening bracket");
          t[t.length - 1].text += u;
        }
        continue;
      }
      if (a = o.match(Nf), a) {
        if (c.text = a[1], i += c.text.length, Ef.has(c.text)) {
          c.type = "KEYWORD";
          continue;
        }
        if (c.text.match(da)) {
          c.type = "TYPE";
          continue;
        }
        c.type = "ID";
        continue;
      }
      if (a = o.match(Bf), a) {
        c.text = a[1], c.type = "NUMBER", i += c.text.length;
        continue;
      }
      throw new Error(`unexpected token ${JSON.stringify(o[0])} at position ${i}`);
    }
    return new vt(t.map((o) => Object.freeze(o)));
  }
  function gi(r, t) {
    let e = [];
    for (const n in t.keys()) r.has(n) && e.push(n);
    if (e.length > 1) throw new Error(`conflicting types: ${e.join(", ")}`);
  }
  function or(r, t) {
    if (t.peekKeyword(ua)) {
      const e = t.pop().text;
      if (e !== r) throw new Error(`expected ${r}, got ${e}`);
    }
    return t.popType("ID");
  }
  function $t(r, t) {
    const e = /* @__PURE__ */ new Set();
    for (; ; ) {
      const n = r.peekType("KEYWORD");
      if (n == null || t && !t.has(n)) break;
      if (r.pop(), e.has(n)) throw new Error(`duplicate keywords: ${JSON.stringify(n)}`);
      e.add(n);
    }
    return Object.freeze(e);
  }
  function pa(r) {
    let t = $t(r, mf);
    return gi(t, yt("constant payable nonpayable".split(" "))), gi(t, yt("pure view payable nonpayable".split(" "))), t.has("view") ? "view" : t.has("pure") ? "pure" : t.has("payable") ? "payable" : t.has("nonpayable") ? "nonpayable" : t.has("constant") ? "view" : "nonpayable";
  }
  function qt(r, t) {
    return r.popParams().map((e) => j.from(e, t));
  }
  function ga(r) {
    if (r.peekType("AT")) {
      if (r.pop(), r.peekType("NUMBER")) return B(r.pop().text);
      throw new Error("invalid gas");
    }
    return null;
  }
  function Ie(r) {
    if (r.length) throw new Error(`unexpected tokens at offset ${r.offset}: ${r.toString()}`);
  }
  const If = new RegExp(/^(.*)\[([0-9]*)\]$/);
  function yi(r) {
    const t = r.match(da);
    if (d(t, "invalid type", "type", r), r === "uint") return "uint256";
    if (r === "int") return "int256";
    if (t[2]) {
      const e = parseInt(t[2]);
      d(e !== 0 && e <= 32, "invalid bytes length", "type", r);
    } else if (t[3]) {
      const e = parseInt(t[3]);
      d(e !== 0 && e <= 256 && e % 8 === 0, "invalid numeric width", "type", r);
    }
    return r;
  }
  const X = {}, wt = Symbol.for("_ethers_internal"), mi = "_ParamTypeInternal", bi = "_ErrorInternal", wi = "_EventInternal", Ai = "_ConstructorInternal", Ei = "_FallbackInternal", xi = "_FunctionInternal", Pi = "_StructInternal";
  const _j = class _j {
    constructor(t, e, n, s, i, o, a, c) {
      __privateAdd(this, _j_instances);
      __publicField(this, "name");
      __publicField(this, "type");
      __publicField(this, "baseType");
      __publicField(this, "indexed");
      __publicField(this, "components");
      __publicField(this, "arrayLength");
      __publicField(this, "arrayChildren");
      if (qn(t, X, "ParamType"), Object.defineProperty(this, wt, {
        value: mi
      }), o && (o = Object.freeze(o.slice())), s === "array") {
        if (a == null || c == null) throw new Error("");
      } else if (a != null || c != null) throw new Error("");
      if (s === "tuple") {
        if (o == null) throw new Error("");
      } else if (o != null) throw new Error("");
      k(this, {
        name: e,
        type: n,
        baseType: s,
        indexed: i,
        components: o,
        arrayLength: a,
        arrayChildren: c
      });
    }
    format(t) {
      if (t == null && (t = "sighash"), t === "json") {
        const n = this.name || "";
        if (this.isArray()) {
          const i = JSON.parse(this.arrayChildren.format("json"));
          return i.name = n, i.type += `[${this.arrayLength < 0 ? "" : String(this.arrayLength)}]`, JSON.stringify(i);
        }
        const s = {
          type: this.baseType === "tuple" ? "tuple" : this.type,
          name: n
        };
        return typeof this.indexed == "boolean" && (s.indexed = this.indexed), this.isTuple() && (s.components = this.components.map((i) => JSON.parse(i.format(t)))), JSON.stringify(s);
      }
      let e = "";
      return this.isArray() ? (e += this.arrayChildren.format(t), e += `[${this.arrayLength < 0 ? "" : String(this.arrayLength)}]`) : this.isTuple() ? e += "(" + this.components.map((n) => n.format(t)).join(t === "full" ? ", " : ",") + ")" : e += this.type, t !== "sighash" && (this.indexed === true && (e += " indexed"), t === "full" && this.name && (e += " " + this.name)), e;
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
    walk(t, e) {
      if (this.isArray()) {
        if (!Array.isArray(t)) throw new Error("invalid array value");
        if (this.arrayLength !== -1 && t.length !== this.arrayLength) throw new Error("array is wrong length");
        const n = this;
        return t.map((s) => n.arrayChildren.walk(s, e));
      }
      if (this.isTuple()) {
        if (!Array.isArray(t)) throw new Error("invalid tuple value");
        if (t.length !== this.components.length) throw new Error("array is wrong length");
        const n = this;
        return t.map((s, i) => n.components[i].walk(s, e));
      }
      return e(this.type, t);
    }
    async walkAsync(t, e) {
      const n = [], s = [
        t
      ];
      return __privateMethod(this, _j_instances, t_fn).call(this, n, t, e, (i) => {
        s[0] = i;
      }), n.length && await Promise.all(n), s[0];
    }
    static from(t, e) {
      if (_j.isParamType(t)) return t;
      if (typeof t == "string") try {
        return _j.from(fe(t), e);
      } catch {
        d(false, "invalid param type", "obj", t);
      }
      else if (t instanceof vt) {
        let a = "", c = "", l = null;
        $t(t, yt([
          "tuple"
        ])).has("tuple") || t.peekType("OPEN_PAREN") ? (c = "tuple", l = t.popParams().map((p) => _j.from(p)), a = `tuple(${l.map((p) => p.format()).join(",")})`) : (a = yi(t.popType("TYPE")), c = a);
        let u = null, f = null;
        for (; t.length && t.peekType("BRACKET"); ) {
          const p = t.pop();
          u = new _j(X, "", a, c, null, l, f, u), f = p.value, a += p.text, c = "array", l = null;
        }
        let h = null;
        if ($t(t, bf).has("indexed")) {
          if (!e) throw new Error("");
          h = true;
        }
        const m = t.peekType("ID") ? t.pop().text : "";
        if (t.length) throw new Error("leftover tokens");
        return new _j(X, m, a, c, h, l, f, u);
      }
      const n = t.name;
      d(!n || typeof n == "string" && n.match(ha), "invalid name", "obj.name", n);
      let s = t.indexed;
      s != null && (d(e, "parameter cannot be indexed", "obj.indexed", t.indexed), s = !!s);
      let i = t.type, o = i.match(If);
      if (o) {
        const a = parseInt(o[2] || "-1"), c = _j.from({
          type: o[1],
          components: t.components
        });
        return new _j(X, n || "", i, "array", s, null, a, c);
      }
      if (i === "tuple" || i.startsWith("tuple(") || i.startsWith("(")) {
        const a = t.components != null ? t.components.map((l) => _j.from(l)) : null;
        return new _j(X, n || "", i, "tuple", s, a, null, null);
      }
      return i = yi(t.type), new _j(X, n || "", i, i, s, null, null, null);
    }
    static isParamType(t) {
      return t && t[wt] === mi;
    }
  };
  _j_instances = new WeakSet();
  t_fn = function(t, e, n, s) {
    if (this.isArray()) {
      if (!Array.isArray(e)) throw new Error("invalid array value");
      if (this.arrayLength !== -1 && e.length !== this.arrayLength) throw new Error("array is wrong length");
      const o = this.arrayChildren, a = e.slice();
      a.forEach((c, l) => {
        var _a6;
        __privateMethod(_a6 = o, _j_instances, t_fn).call(_a6, t, c, n, (u) => {
          a[l] = u;
        });
      }), s(a);
      return;
    }
    if (this.isTuple()) {
      const o = this.components;
      let a;
      if (Array.isArray(e)) a = e.slice();
      else {
        if (e == null || typeof e != "object") throw new Error("invalid tuple value");
        a = o.map((c) => {
          if (!c.name) throw new Error("cannot use object value with unnamed components");
          if (!(c.name in e)) throw new Error(`missing value for component ${c.name}`);
          return e[c.name];
        });
      }
      if (a.length !== this.components.length) throw new Error("array is wrong length");
      a.forEach((c, l) => {
        var _a6;
        __privateMethod(_a6 = o[l], _j_instances, t_fn).call(_a6, t, c, n, (u) => {
          a[l] = u;
        });
      }), s(a);
      return;
    }
    const i = n(this.type, e);
    i.then ? t.push((async function() {
      s(await i);
    })()) : s(i);
  };
  let j = _j;
  class Te {
    constructor(t, e, n) {
      __publicField(this, "type");
      __publicField(this, "inputs");
      qn(t, X, "Fragment"), n = Object.freeze(n.slice()), k(this, {
        type: e,
        inputs: n
      });
    }
    static from(t) {
      if (typeof t == "string") {
        try {
          Te.from(JSON.parse(t));
        } catch {
        }
        return Te.from(fe(t));
      }
      if (t instanceof vt) switch (t.peekKeyword(ua)) {
        case "constructor":
          return Wt.from(t);
        case "error":
          return bt.from(t);
        case "event":
          return Mt.from(t);
        case "fallback":
        case "receive":
          return Vt.from(t);
        case "function":
          return Ht.from(t);
        case "struct":
          return Pe.from(t);
      }
      else if (typeof t == "object") {
        switch (t.type) {
          case "constructor":
            return Wt.from(t);
          case "error":
            return bt.from(t);
          case "event":
            return Mt.from(t);
          case "fallback":
          case "receive":
            return Vt.from(t);
          case "function":
            return Ht.from(t);
          case "struct":
            return Pe.from(t);
        }
        w(false, `unsupported type: ${t.type}`, "UNSUPPORTED_OPERATION", {
          operation: "Fragment.from"
        });
      }
      d(false, "unsupported frgament object", "obj", t);
    }
    static isConstructor(t) {
      return Wt.isFragment(t);
    }
    static isError(t) {
      return bt.isFragment(t);
    }
    static isEvent(t) {
      return Mt.isFragment(t);
    }
    static isFunction(t) {
      return Ht.isFragment(t);
    }
    static isStruct(t) {
      return Pe.isFragment(t);
    }
  }
  class ar extends Te {
    constructor(t, e, n, s) {
      super(t, e, s);
      __publicField(this, "name");
      d(typeof n == "string" && n.match(ha), "invalid identifier", "name", n), s = Object.freeze(s.slice()), k(this, {
        name: n
      });
    }
  }
  function dn(r, t) {
    return "(" + t.map((e) => e.format(r)).join(r === "full" ? ", " : ",") + ")";
  }
  class bt extends ar {
    constructor(t, e, n) {
      super(t, "error", e, n), Object.defineProperty(this, wt, {
        value: bi
      });
    }
    get selector() {
      return Ne(this.format("sighash")).substring(0, 10);
    }
    format(t) {
      if (t == null && (t = "sighash"), t === "json") return JSON.stringify({
        type: "error",
        name: this.name,
        inputs: this.inputs.map((n) => JSON.parse(n.format(t)))
      });
      const e = [];
      return t !== "sighash" && e.push("error"), e.push(this.name + dn(t, this.inputs)), e.join(" ");
    }
    static from(t) {
      if (bt.isFragment(t)) return t;
      if (typeof t == "string") return bt.from(fe(t));
      if (t instanceof vt) {
        const e = or("error", t), n = qt(t);
        return Ie(t), new bt(X, e, n);
      }
      return new bt(X, t.name, t.inputs ? t.inputs.map(j.from) : []);
    }
    static isFragment(t) {
      return t && t[wt] === bi;
    }
  }
  class Mt extends ar {
    constructor(t, e, n, s) {
      super(t, "event", e, n);
      __publicField(this, "anonymous");
      Object.defineProperty(this, wt, {
        value: wi
      }), k(this, {
        anonymous: s
      });
    }
    get topicHash() {
      return Ne(this.format("sighash"));
    }
    format(t) {
      if (t == null && (t = "sighash"), t === "json") return JSON.stringify({
        type: "event",
        anonymous: this.anonymous,
        name: this.name,
        inputs: this.inputs.map((n) => JSON.parse(n.format(t)))
      });
      const e = [];
      return t !== "sighash" && e.push("event"), e.push(this.name + dn(t, this.inputs)), t !== "sighash" && this.anonymous && e.push("anonymous"), e.join(" ");
    }
    static getTopicHash(t, e) {
      return e = (e || []).map((s) => j.from(s)), new Mt(X, t, e, false).topicHash;
    }
    static from(t) {
      if (Mt.isFragment(t)) return t;
      if (typeof t == "string") try {
        return Mt.from(fe(t));
      } catch {
        d(false, "invalid event fragment", "obj", t);
      }
      else if (t instanceof vt) {
        const e = or("event", t), n = qt(t, true), s = !!$t(t, yt([
          "anonymous"
        ])).has("anonymous");
        return Ie(t), new Mt(X, e, n, s);
      }
      return new Mt(X, t.name, t.inputs ? t.inputs.map((e) => j.from(e, true)) : [], !!t.anonymous);
    }
    static isFragment(t) {
      return t && t[wt] === wi;
    }
  }
  class Wt extends Te {
    constructor(t, e, n, s, i) {
      super(t, e, n);
      __publicField(this, "payable");
      __publicField(this, "gas");
      Object.defineProperty(this, wt, {
        value: Ai
      }), k(this, {
        payable: s,
        gas: i
      });
    }
    format(t) {
      if (w(t != null && t !== "sighash", "cannot format a constructor for sighash", "UNSUPPORTED_OPERATION", {
        operation: "format(sighash)"
      }), t === "json") return JSON.stringify({
        type: "constructor",
        stateMutability: this.payable ? "payable" : "undefined",
        payable: this.payable,
        gas: this.gas != null ? this.gas : void 0,
        inputs: this.inputs.map((n) => JSON.parse(n.format(t)))
      });
      const e = [
        `constructor${dn(t, this.inputs)}`
      ];
      return this.payable && e.push("payable"), this.gas != null && e.push(`@${this.gas.toString()}`), e.join(" ");
    }
    static from(t) {
      if (Wt.isFragment(t)) return t;
      if (typeof t == "string") try {
        return Wt.from(fe(t));
      } catch {
        d(false, "invalid constuctor fragment", "obj", t);
      }
      else if (t instanceof vt) {
        $t(t, yt([
          "constructor"
        ]));
        const e = qt(t), n = !!$t(t, yf).has("payable"), s = ga(t);
        return Ie(t), new Wt(X, "constructor", e, n, s);
      }
      return new Wt(X, "constructor", t.inputs ? t.inputs.map(j.from) : [], !!t.payable, t.gas != null ? t.gas : null);
    }
    static isFragment(t) {
      return t && t[wt] === Ai;
    }
  }
  class Vt extends Te {
    constructor(t, e, n) {
      super(t, "fallback", e);
      __publicField(this, "payable");
      Object.defineProperty(this, wt, {
        value: Ei
      }), k(this, {
        payable: n
      });
    }
    format(t) {
      const e = this.inputs.length === 0 ? "receive" : "fallback";
      if (t === "json") {
        const n = this.payable ? "payable" : "nonpayable";
        return JSON.stringify({
          type: e,
          stateMutability: n
        });
      }
      return `${e}()${this.payable ? " payable" : ""}`;
    }
    static from(t) {
      if (Vt.isFragment(t)) return t;
      if (typeof t == "string") try {
        return Vt.from(fe(t));
      } catch {
        d(false, "invalid fallback fragment", "obj", t);
      }
      else if (t instanceof vt) {
        const e = t.toString(), n = t.peekKeyword(yt([
          "fallback",
          "receive"
        ]));
        if (d(n, "type must be fallback or receive", "obj", e), t.popKeyword(yt([
          "fallback",
          "receive"
        ])) === "receive") {
          const a = qt(t);
          return d(a.length === 0, "receive cannot have arguments", "obj.inputs", a), $t(t, yt([
            "payable"
          ])), Ie(t), new Vt(X, [], true);
        }
        let i = qt(t);
        i.length ? d(i.length === 1 && i[0].type === "bytes", "invalid fallback inputs", "obj.inputs", i.map((a) => a.format("minimal")).join(", ")) : i = [
          j.from("bytes")
        ];
        const o = pa(t);
        if (d(o === "nonpayable" || o === "payable", "fallback cannot be constants", "obj.stateMutability", o), $t(t, yt([
          "returns"
        ])).has("returns")) {
          const a = qt(t);
          d(a.length === 1 && a[0].type === "bytes", "invalid fallback outputs", "obj.outputs", a.map((c) => c.format("minimal")).join(", "));
        }
        return Ie(t), new Vt(X, i, o === "payable");
      }
      if (t.type === "receive") return new Vt(X, [], true);
      if (t.type === "fallback") {
        const e = [
          j.from("bytes")
        ], n = t.stateMutability === "payable";
        return new Vt(X, e, n);
      }
      d(false, "invalid fallback description", "obj", t);
    }
    static isFragment(t) {
      return t && t[wt] === Ei;
    }
  }
  class Ht extends ar {
    constructor(t, e, n, s, i, o) {
      super(t, "function", e, s);
      __publicField(this, "constant");
      __publicField(this, "outputs");
      __publicField(this, "stateMutability");
      __publicField(this, "payable");
      __publicField(this, "gas");
      Object.defineProperty(this, wt, {
        value: xi
      }), i = Object.freeze(i.slice()), k(this, {
        constant: n === "view" || n === "pure",
        gas: o,
        outputs: i,
        payable: n === "payable",
        stateMutability: n
      });
    }
    get selector() {
      return Ne(this.format("sighash")).substring(0, 10);
    }
    format(t) {
      if (t == null && (t = "sighash"), t === "json") return JSON.stringify({
        type: "function",
        name: this.name,
        constant: this.constant,
        stateMutability: this.stateMutability !== "nonpayable" ? this.stateMutability : void 0,
        payable: this.payable,
        gas: this.gas != null ? this.gas : void 0,
        inputs: this.inputs.map((n) => JSON.parse(n.format(t))),
        outputs: this.outputs.map((n) => JSON.parse(n.format(t)))
      });
      const e = [];
      return t !== "sighash" && e.push("function"), e.push(this.name + dn(t, this.inputs)), t !== "sighash" && (this.stateMutability !== "nonpayable" && e.push(this.stateMutability), this.outputs && this.outputs.length && (e.push("returns"), e.push(dn(t, this.outputs))), this.gas != null && e.push(`@${this.gas.toString()}`)), e.join(" ");
    }
    static getSelector(t, e) {
      return e = (e || []).map((s) => j.from(s)), new Ht(X, t, "view", e, [], null).selector;
    }
    static from(t) {
      if (Ht.isFragment(t)) return t;
      if (typeof t == "string") try {
        return Ht.from(fe(t));
      } catch {
        d(false, "invalid function fragment", "obj", t);
      }
      else if (t instanceof vt) {
        const n = or("function", t), s = qt(t), i = pa(t);
        let o = [];
        $t(t, yt([
          "returns"
        ])).has("returns") && (o = qt(t));
        const a = ga(t);
        return Ie(t), new Ht(X, n, i, s, o, a);
      }
      let e = t.stateMutability;
      return e == null && (e = "payable", typeof t.constant == "boolean" ? (e = "view", t.constant || (e = "payable", typeof t.payable == "boolean" && !t.payable && (e = "nonpayable"))) : typeof t.payable == "boolean" && !t.payable && (e = "nonpayable")), new Ht(X, t.name, e, t.inputs ? t.inputs.map(j.from) : [], t.outputs ? t.outputs.map(j.from) : [], t.gas != null ? t.gas : null);
    }
    static isFragment(t) {
      return t && t[wt] === xi;
    }
  }
  class Pe extends ar {
    constructor(t, e, n) {
      super(t, "struct", e, n), Object.defineProperty(this, wt, {
        value: Pi
      });
    }
    format() {
      throw new Error("@TODO");
    }
    static from(t) {
      if (typeof t == "string") try {
        return Pe.from(fe(t));
      } catch {
        d(false, "invalid struct fragment", "obj", t);
      }
      else if (t instanceof vt) {
        const e = or("struct", t), n = qt(t);
        return Ie(t), new Pe(X, e, n);
      }
      return new Pe(X, t.name, t.inputs ? t.inputs.map(j.from) : []);
    }
    static isFragment(t) {
      return t && t[wt] === Pi;
    }
  }
  const Ut = /* @__PURE__ */ new Map();
  Ut.set(0, "GENERIC_PANIC");
  Ut.set(1, "ASSERT_FALSE");
  Ut.set(17, "OVERFLOW");
  Ut.set(18, "DIVIDE_BY_ZERO");
  Ut.set(33, "ENUM_RANGE_ERROR");
  Ut.set(34, "BAD_STORAGE_DATA");
  Ut.set(49, "STACK_UNDERFLOW");
  Ut.set(50, "ARRAY_RANGE_ERROR");
  Ut.set(65, "OUT_OF_MEMORY");
  Ut.set(81, "UNINITIALIZED_FUNCTION_CALL");
  const Tf = new RegExp(/^bytes([0-9]*)$/), vf = new RegExp(/^(u?int)([0-9]*)$/);
  let Br = null, Bi = 1024;
  function Cf(r, t, e, n) {
    let s = "missing revert data", i = null;
    const o = null;
    let a = null;
    if (e) {
      s = "execution reverted";
      const l = S(e);
      if (e = x(e), l.length === 0) s += " (no data present; likely require(false) occurred", i = "require(false)";
      else if (l.length % 32 !== 4) s += " (could not decode reason; invalid data length)";
      else if (x(l.slice(0, 4)) === "0x08c379a0") try {
        i = n.decode([
          "string"
        ], l.slice(4))[0], a = {
          signature: "Error(string)",
          name: "Error",
          args: [
            i
          ]
        }, s += `: ${JSON.stringify(i)}`;
      } catch {
        s += " (could not decode reason; invalid string data)";
      }
      else if (x(l.slice(0, 4)) === "0x4e487b71") try {
        const u = Number(n.decode([
          "uint256"
        ], l.slice(4))[0]);
        a = {
          signature: "Panic(uint256)",
          name: "Panic",
          args: [
            u
          ]
        }, i = `Panic due to ${Ut.get(u) || "UNKNOWN"}(${u})`, s += `: ${i}`;
      } catch {
        s += " (could not decode panic code)";
      }
      else s += " (unknown custom error)";
    }
    const c = {
      to: t.to ? M(t.to) : null,
      data: t.data || "0x"
    };
    return t.from && (c.from = M(t.from)), Y(s, "CALL_EXCEPTION", {
      action: r,
      data: e,
      reason: i,
      transaction: c,
      invocation: o,
      revert: a
    });
  }
  const _je = class _je {
    constructor() {
      __privateAdd(this, _je_instances);
    }
    getDefaultValue(t) {
      const e = t.map((s) => __privateMethod(this, _je_instances, t_fn2).call(this, j.from(s)));
      return new kn(e, "_").defaultValue();
    }
    encode(t, e) {
      zi(e.length, t.length, "types/values length mismatch");
      const n = t.map((o) => __privateMethod(this, _je_instances, t_fn2).call(this, j.from(o))), s = new kn(n, "_"), i = new Sr();
      return s.encode(i, e), i.data;
    }
    decode(t, e, n) {
      const s = t.map((o) => __privateMethod(this, _je_instances, t_fn2).call(this, j.from(o)));
      return new kn(s, "_").decode(new es(e, n, Bi));
    }
    static _setDefaultMaxInflation(t) {
      d(typeof t == "number" && Number.isInteger(t), "invalid defaultMaxInflation factor", "value", t), Bi = t;
    }
    static defaultAbiCoder() {
      return Br == null && (Br = new _je()), Br;
    }
    static getBuiltinCallException(t, e, n) {
      return Cf(t, e, n, _je.defaultAbiCoder());
    }
  };
  _je_instances = new WeakSet();
  t_fn2 = function(t) {
    if (t.isArray()) return new jl(__privateMethod(this, _je_instances, t_fn2).call(this, t.arrayChildren), t.arrayLength, t.name);
    if (t.isTuple()) return new kn(t.components.map((n) => __privateMethod(this, _je_instances, t_fn2).call(this, n)), t.name);
    switch (t.baseType) {
      case "address":
        return new zl(t.name);
      case "bool":
        return new Wl(t.name);
      case "string":
        return new ru(t.name);
      case "bytes":
        return new Zl(t.name);
      case "":
        return new Xl(t.name);
    }
    let e = t.type.match(vf);
    if (e) {
      let n = parseInt(e[2] || "256");
      return d(n !== 0 && n <= 256 && n % 8 === 0, "invalid " + e[1] + " bit length", "param", t), new nu(n / 8, e[1] === "int", t.name);
    }
    if (e = t.type.match(Tf), e) {
      let n = parseInt(e[1]);
      return d(n !== 0 && n <= 32, "invalid bytes length", "param", t), new Yl(n, t.name);
    }
    d(false, "invalid type", "type", t.type);
  };
  let je = _je;
  class kf {
    constructor(t, e, n) {
      __publicField(this, "fragment");
      __publicField(this, "name");
      __publicField(this, "signature");
      __publicField(this, "topic");
      __publicField(this, "args");
      const s = t.name, i = t.format();
      k(this, {
        fragment: t,
        name: s,
        signature: i,
        topic: e,
        args: n
      });
    }
  }
  class Of {
    constructor(t, e, n, s) {
      __publicField(this, "fragment");
      __publicField(this, "name");
      __publicField(this, "args");
      __publicField(this, "signature");
      __publicField(this, "selector");
      __publicField(this, "value");
      const i = t.name, o = t.format();
      k(this, {
        fragment: t,
        name: i,
        args: n,
        signature: o,
        selector: e,
        value: s
      });
    }
  }
  class Rf {
    constructor(t, e, n) {
      __publicField(this, "fragment");
      __publicField(this, "name");
      __publicField(this, "args");
      __publicField(this, "signature");
      __publicField(this, "selector");
      const s = t.name, i = t.format();
      k(this, {
        fragment: t,
        name: s,
        args: n,
        signature: i,
        selector: e
      });
    }
  }
  class Ni {
    constructor(t) {
      __publicField(this, "hash");
      __publicField(this, "_isIndexed");
      k(this, {
        hash: t,
        _isIndexed: true
      });
    }
    static isIndexed(t) {
      return !!(t && t._isIndexed);
    }
  }
  const Ii = {
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
  }, Ti = {
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
        let t = "unknown panic code";
        return r >= 0 && r <= 255 && Ii[r.toString()] && (t = Ii[r.toString()]), `reverted with panic code 0x${r.toString(16)} (${t})`;
      }
    }
  };
  const _zt = class _zt {
    constructor(t) {
      __privateAdd(this, _zt_instances);
      __publicField(this, "fragments");
      __publicField(this, "deploy");
      __publicField(this, "fallback");
      __publicField(this, "receive");
      __privateAdd(this, _t15);
      __privateAdd(this, _e11);
      __privateAdd(this, _n8);
      __privateAdd(this, _r7);
      let e = [];
      typeof t == "string" ? e = JSON.parse(t) : e = t, __privateSet(this, _n8, /* @__PURE__ */ new Map()), __privateSet(this, _t15, /* @__PURE__ */ new Map()), __privateSet(this, _e11, /* @__PURE__ */ new Map());
      const n = [];
      for (const o of e) try {
        n.push(Te.from(o));
      } catch (a) {
        console.log(`[Warning] Invalid Fragment ${JSON.stringify(o)}:`, a.message);
      }
      k(this, {
        fragments: Object.freeze(n)
      });
      let s = null, i = false;
      __privateSet(this, _r7, this.getAbiCoder()), this.fragments.forEach((o, a) => {
        let c;
        switch (o.type) {
          case "constructor":
            if (this.deploy) {
              console.log("duplicate definition - constructor");
              return;
            }
            k(this, {
              deploy: o
            });
            return;
          case "fallback":
            o.inputs.length === 0 ? i = true : (d(!s || o.payable !== s.payable, "conflicting fallback fragments", `fragments[${a}]`, o), s = o, i = s.payable);
            return;
          case "function":
            c = __privateGet(this, _n8);
            break;
          case "event":
            c = __privateGet(this, _e11);
            break;
          case "error":
            c = __privateGet(this, _t15);
            break;
          default:
            return;
        }
        const l = o.format();
        c.has(l) || c.set(l, o);
      }), this.deploy || k(this, {
        deploy: Wt.from("constructor()")
      }), k(this, {
        fallback: s,
        receive: i
      });
    }
    format(t) {
      const e = t ? "minimal" : "full";
      return this.fragments.map((s) => s.format(e));
    }
    formatJson() {
      const t = this.fragments.map((e) => e.format("json"));
      return JSON.stringify(t.map((e) => JSON.parse(e)));
    }
    getAbiCoder() {
      return je.defaultAbiCoder();
    }
    getFunctionName(t) {
      const e = __privateMethod(this, _zt_instances, s_fn).call(this, t, null, false);
      return d(e, "no matching function", "key", t), e.name;
    }
    hasFunction(t) {
      return !!__privateMethod(this, _zt_instances, s_fn).call(this, t, null, false);
    }
    getFunction(t, e) {
      return __privateMethod(this, _zt_instances, s_fn).call(this, t, e || null, true);
    }
    forEachFunction(t) {
      const e = Array.from(__privateGet(this, _n8).keys());
      e.sort((n, s) => n.localeCompare(s));
      for (let n = 0; n < e.length; n++) {
        const s = e[n];
        t(__privateGet(this, _n8).get(s), n);
      }
    }
    getEventName(t) {
      const e = __privateMethod(this, _zt_instances, o_fn2).call(this, t, null, false);
      return d(e, "no matching event", "key", t), e.name;
    }
    hasEvent(t) {
      return !!__privateMethod(this, _zt_instances, o_fn2).call(this, t, null, false);
    }
    getEvent(t, e) {
      return __privateMethod(this, _zt_instances, o_fn2).call(this, t, e || null, true);
    }
    forEachEvent(t) {
      const e = Array.from(__privateGet(this, _e11).keys());
      e.sort((n, s) => n.localeCompare(s));
      for (let n = 0; n < e.length; n++) {
        const s = e[n];
        t(__privateGet(this, _e11).get(s), n);
      }
    }
    getError(t, e) {
      if (_(t)) {
        const s = t.toLowerCase();
        if (Ti[s]) return bt.from(Ti[s].signature);
        for (const i of __privateGet(this, _t15).values()) if (s === i.selector) return i;
        return null;
      }
      if (t.indexOf("(") === -1) {
        const s = [];
        for (const [i, o] of __privateGet(this, _t15)) i.split("(")[0] === t && s.push(o);
        if (s.length === 0) return t === "Error" ? bt.from("error Error(string)") : t === "Panic" ? bt.from("error Panic(uint256)") : null;
        if (s.length > 1) {
          const i = s.map((o) => JSON.stringify(o.format())).join(", ");
          d(false, `ambiguous error description (i.e. ${i})`, "name", t);
        }
        return s[0];
      }
      if (t = bt.from(t).format(), t === "Error(string)") return bt.from("error Error(string)");
      if (t === "Panic(uint256)") return bt.from("error Panic(uint256)");
      const n = __privateGet(this, _t15).get(t);
      return n || null;
    }
    forEachError(t) {
      const e = Array.from(__privateGet(this, _t15).keys());
      e.sort((n, s) => n.localeCompare(s));
      for (let n = 0; n < e.length; n++) {
        const s = e[n];
        t(__privateGet(this, _t15).get(s), n);
      }
    }
    _decodeParams(t, e) {
      return __privateGet(this, _r7).decode(t, e);
    }
    _encodeParams(t, e) {
      return __privateGet(this, _r7).encode(t, e);
    }
    encodeDeploy(t) {
      return this._encodeParams(this.deploy.inputs, t || []);
    }
    decodeErrorResult(t, e) {
      if (typeof t == "string") {
        const n = this.getError(t);
        d(n, "unknown error", "fragment", t), t = n;
      }
      return d($(e, 0, 4) === t.selector, `data signature does not match error ${t.name}.`, "data", e), this._decodeParams(t.inputs, $(e, 4));
    }
    encodeErrorResult(t, e) {
      if (typeof t == "string") {
        const n = this.getError(t);
        d(n, "unknown error", "fragment", t), t = n;
      }
      return Z([
        t.selector,
        this._encodeParams(t.inputs, e || [])
      ]);
    }
    decodeFunctionData(t, e) {
      if (typeof t == "string") {
        const n = this.getFunction(t);
        d(n, "unknown function", "fragment", t), t = n;
      }
      return d($(e, 0, 4) === t.selector, `data signature does not match function ${t.name}.`, "data", e), this._decodeParams(t.inputs, $(e, 4));
    }
    encodeFunctionData(t, e) {
      if (typeof t == "string") {
        const n = this.getFunction(t);
        d(n, "unknown function", "fragment", t), t = n;
      }
      return Z([
        t.selector,
        this._encodeParams(t.inputs, e || [])
      ]);
    }
    decodeFunctionResult(t, e) {
      if (typeof t == "string") {
        const i = this.getFunction(t);
        d(i, "unknown function", "fragment", t), t = i;
      }
      let n = "invalid length for result data";
      const s = dt(e);
      if (s.length % 32 === 0) try {
        return __privateGet(this, _r7).decode(t.outputs, s);
      } catch {
        n = "could not decode result data";
      }
      w(false, n, "BAD_DATA", {
        value: x(s),
        info: {
          method: t.name,
          signature: t.format()
        }
      });
    }
    makeError(t, e) {
      const n = S(t, "data"), s = je.getBuiltinCallException("call", e, n);
      if (s.message.startsWith("execution reverted (unknown custom error)")) {
        const a = x(n.slice(0, 4)), c = this.getError(a);
        if (c) try {
          const l = __privateGet(this, _r7).decode(c.inputs, n.slice(4));
          s.revert = {
            name: c.name,
            signature: c.format(),
            args: l
          }, s.reason = s.revert.signature, s.message = `execution reverted: ${s.reason}`;
        } catch {
          s.message = "execution reverted (coult not decode custom error)";
        }
      }
      const o = this.parseTransaction(e);
      return o && (s.invocation = {
        method: o.name,
        signature: o.signature,
        args: o.args
      }), s;
    }
    encodeFunctionResult(t, e) {
      if (typeof t == "string") {
        const n = this.getFunction(t);
        d(n, "unknown function", "fragment", t), t = n;
      }
      return x(__privateGet(this, _r7).encode(t.outputs, e || []));
    }
    encodeFilterTopics(t, e) {
      if (typeof t == "string") {
        const i = this.getEvent(t);
        d(i, "unknown event", "eventFragment", t), t = i;
      }
      w(e.length <= t.inputs.length, `too many arguments for ${t.format()}`, "UNEXPECTED_ARGUMENT", {
        count: e.length,
        expectedCount: t.inputs.length
      });
      const n = [];
      t.anonymous || n.push(t.topicHash);
      const s = (i, o) => i.type === "string" ? Ne(o) : i.type === "bytes" ? rt(x(o)) : (i.type === "bool" && typeof o == "boolean" ? o = o ? "0x01" : "0x00" : i.type.match(/^u?int/) ? o = ue(o) : i.type.match(/^bytes/) ? o = Za(o, 32) : i.type === "address" && __privateGet(this, _r7).encode([
        "address"
      ], [
        o
      ]), Xt(x(o), 32));
      for (e.forEach((i, o) => {
        const a = t.inputs[o];
        if (!a.indexed) {
          d(i == null, "cannot filter non-indexed parameters; must be null", "contract." + a.name, i);
          return;
        }
        i == null ? n.push(null) : a.baseType === "array" || a.baseType === "tuple" ? d(false, "filtering with tuples or arrays not supported", "contract." + a.name, i) : Array.isArray(i) ? n.push(i.map((c) => s(a, c))) : n.push(s(a, i));
      }); n.length && n[n.length - 1] === null; ) n.pop();
      return n;
    }
    encodeEventLog(t, e) {
      if (typeof t == "string") {
        const o = this.getEvent(t);
        d(o, "unknown event", "eventFragment", t), t = o;
      }
      const n = [], s = [], i = [];
      return t.anonymous || n.push(t.topicHash), d(e.length === t.inputs.length, "event arguments/values mismatch", "values", e), t.inputs.forEach((o, a) => {
        const c = e[a];
        if (o.indexed) if (o.type === "string") n.push(Ne(c));
        else if (o.type === "bytes") n.push(rt(c));
        else {
          if (o.baseType === "tuple" || o.baseType === "array") throw new Error("not implemented");
          n.push(__privateGet(this, _r7).encode([
            o.type
          ], [
            c
          ]));
        }
        else s.push(o), i.push(c);
      }), {
        data: __privateGet(this, _r7).encode(s, i),
        topics: n
      };
    }
    decodeEventLog(t, e, n) {
      if (typeof t == "string") {
        const g = this.getEvent(t);
        d(g, "unknown event", "eventFragment", t), t = g;
      }
      if (n != null && !t.anonymous) {
        const g = t.topicHash;
        d(_(n[0], 32) && n[0].toLowerCase() === g, "fragment/topic mismatch", "topics[0]", n[0]), n = n.slice(1);
      }
      const s = [], i = [], o = [];
      t.inputs.forEach((g, m) => {
        g.indexed ? g.type === "string" || g.type === "bytes" || g.baseType === "tuple" || g.baseType === "array" ? (s.push(j.from({
          type: "bytes32",
          name: g.name
        })), o.push(true)) : (s.push(g), o.push(false)) : (i.push(g), o.push(false));
      });
      const a = n != null ? __privateGet(this, _r7).decode(s, Z(n)) : null, c = __privateGet(this, _r7).decode(i, e, true), l = [], u = [];
      let f = 0, h = 0;
      return t.inputs.forEach((g, m) => {
        let p = null;
        if (g.indexed) if (a == null) p = new Ni(null);
        else if (o[m]) p = new Ni(a[h++]);
        else try {
          p = a[h++];
        } catch (y) {
          p = y;
        }
        else try {
          p = c[f++];
        } catch (y) {
          p = y;
        }
        l.push(p), u.push(g.name || null);
      }), jt.fromItems(l, u);
    }
    parseTransaction(t) {
      const e = S(t.data, "tx.data"), n = B(t.value != null ? t.value : 0, "tx.value"), s = this.getFunction(x(e.slice(0, 4)));
      if (!s) return null;
      const i = __privateGet(this, _r7).decode(s.inputs, e.slice(4));
      return new Of(s, s.selector, i, n);
    }
    parseCallResult(t) {
      throw new Error("@TODO");
    }
    parseLog(t) {
      const e = this.getEvent(t.topics[0]);
      return !e || e.anonymous ? null : new kf(e, e.topicHash, this.decodeEventLog(e, t.data, t.topics));
    }
    parseError(t) {
      const e = x(t), n = this.getError($(e, 0, 4));
      if (!n) return null;
      const s = __privateGet(this, _r7).decode(n.inputs, $(e, 4));
      return new Rf(n, n.selector, s);
    }
    static from(t) {
      return t instanceof _zt ? t : typeof t == "string" ? new _zt(JSON.parse(t)) : typeof t.formatJson == "function" ? new _zt(t.formatJson()) : typeof t.format == "function" ? new _zt(t.format("json")) : new _zt(t);
    }
  };
  _t15 = new WeakMap();
  _e11 = new WeakMap();
  _n8 = new WeakMap();
  _r7 = new WeakMap();
  _zt_instances = new WeakSet();
  s_fn = function(t, e, n) {
    if (_(t)) {
      const i = t.toLowerCase();
      for (const o of __privateGet(this, _n8).values()) if (i === o.selector) return o;
      return null;
    }
    if (t.indexOf("(") === -1) {
      const i = [];
      for (const [o, a] of __privateGet(this, _n8)) o.split("(")[0] === t && i.push(a);
      if (e) {
        const o = e.length > 0 ? e[e.length - 1] : null;
        let a = e.length, c = true;
        tt.isTyped(o) && o.type === "overrides" && (c = false, a--);
        for (let l = i.length - 1; l >= 0; l--) {
          const u = i[l].inputs.length;
          u !== a && (!c || u !== a - 1) && i.splice(l, 1);
        }
        for (let l = i.length - 1; l >= 0; l--) {
          const u = i[l].inputs;
          for (let f = 0; f < e.length; f++) if (tt.isTyped(e[f])) {
            if (f >= u.length) {
              if (e[f].type === "overrides") continue;
              i.splice(l, 1);
              break;
            }
            if (e[f].type !== u[f].baseType) {
              i.splice(l, 1);
              break;
            }
          }
        }
      }
      if (i.length === 1 && e && e.length !== i[0].inputs.length) {
        const o = e[e.length - 1];
        (o == null || Array.isArray(o) || typeof o != "object") && i.splice(0, 1);
      }
      if (i.length === 0) return null;
      if (i.length > 1 && n) {
        const o = i.map((a) => JSON.stringify(a.format())).join(", ");
        d(false, `ambiguous function description (i.e. matches ${o})`, "key", t);
      }
      return i[0];
    }
    const s = __privateGet(this, _n8).get(Ht.from(t).format());
    return s || null;
  };
  o_fn2 = function(t, e, n) {
    if (_(t)) {
      const i = t.toLowerCase();
      for (const o of __privateGet(this, _e11).values()) if (i === o.topicHash) return o;
      return null;
    }
    if (t.indexOf("(") === -1) {
      const i = [];
      for (const [o, a] of __privateGet(this, _e11)) o.split("(")[0] === t && i.push(a);
      if (e) {
        for (let o = i.length - 1; o >= 0; o--) i[o].inputs.length < e.length && i.splice(o, 1);
        for (let o = i.length - 1; o >= 0; o--) {
          const a = i[o].inputs;
          for (let c = 0; c < e.length; c++) if (tt.isTyped(e[c]) && e[c].type !== a[c].baseType) {
            i.splice(o, 1);
            break;
          }
        }
      }
      if (i.length === 0) return null;
      if (i.length > 1 && n) {
        const o = i.map((a) => JSON.stringify(a.format())).join(", ");
        d(false, `ambiguous event description (i.e. matches ${o})`, "key", t);
      }
      return i[0];
    }
    const s = __privateGet(this, _e11).get(Mt.from(t).format());
    return s || null;
  };
  let zt = _zt;
  const ya = BigInt(0);
  function He(r) {
    return r ?? null;
  }
  function et(r) {
    return r == null ? null : r.toString();
  }
  class vi {
    constructor(t, e, n) {
      __publicField(this, "gasPrice");
      __publicField(this, "maxFeePerGas");
      __publicField(this, "maxPriorityFeePerGas");
      k(this, {
        gasPrice: He(t),
        maxFeePerGas: He(e),
        maxPriorityFeePerGas: He(n)
      });
    }
    toJSON() {
      const { gasPrice: t, maxFeePerGas: e, maxPriorityFeePerGas: n } = this;
      return {
        _type: "FeeData",
        gasPrice: et(t),
        maxFeePerGas: et(e),
        maxPriorityFeePerGas: et(n)
      };
    }
  }
  Zn = function(r) {
    const t = {};
    r.to && (t.to = r.to), r.from && (t.from = r.from), r.data && (t.data = x(r.data));
    const e = "chainId,gasLimit,gasPrice,maxFeePerBlobGas,maxFeePerGas,maxPriorityFeePerGas,value".split(/,/);
    for (const s of e) !(s in r) || r[s] == null || (t[s] = B(r[s], `request.${s}`));
    const n = "type,nonce".split(/,/);
    for (const s of n) !(s in r) || r[s] == null || (t[s] = U(r[s], `request.${s}`));
    return r.accessList && (t.accessList = Ce(r.accessList)), r.authorizationList && (t.authorizationList = r.authorizationList.slice()), "blockTag" in r && (t.blockTag = r.blockTag), "enableCcipRead" in r && (t.enableCcipRead = !!r.enableCcipRead), "customData" in r && (t.customData = r.customData), "blobVersionedHashes" in r && r.blobVersionedHashes && (t.blobVersionedHashes = r.blobVersionedHashes.slice()), "kzg" in r && (t.kzg = r.kzg), "blobWrapperVersion" in r && (t.blobWrapperVersion = r.blobWrapperVersion), "blobs" in r && r.blobs && (t.blobs = r.blobs.map((s) => $r(s) ? x(s) : Object.assign({}, s))), t;
  };
  class Sf {
    constructor(t, e) {
      __publicField(this, "provider");
      __publicField(this, "number");
      __publicField(this, "hash");
      __publicField(this, "timestamp");
      __publicField(this, "parentHash");
      __publicField(this, "parentBeaconBlockRoot");
      __publicField(this, "nonce");
      __publicField(this, "difficulty");
      __publicField(this, "gasLimit");
      __publicField(this, "gasUsed");
      __publicField(this, "stateRoot");
      __publicField(this, "receiptsRoot");
      __publicField(this, "transactionsRoot");
      __publicField(this, "blobGasUsed");
      __publicField(this, "excessBlobGas");
      __publicField(this, "miner");
      __publicField(this, "prevRandao");
      __publicField(this, "extraData");
      __publicField(this, "baseFeePerGas");
      __privateAdd(this, _t16);
      __privateSet(this, _t16, t.transactions.map((n) => typeof n != "string" ? new wn(n, e) : n)), k(this, {
        provider: e,
        hash: He(t.hash),
        number: t.number,
        timestamp: t.timestamp,
        parentHash: t.parentHash,
        parentBeaconBlockRoot: t.parentBeaconBlockRoot,
        nonce: t.nonce,
        difficulty: t.difficulty,
        gasLimit: t.gasLimit,
        gasUsed: t.gasUsed,
        blobGasUsed: t.blobGasUsed,
        excessBlobGas: t.excessBlobGas,
        miner: t.miner,
        prevRandao: He(t.prevRandao),
        extraData: t.extraData,
        baseFeePerGas: He(t.baseFeePerGas),
        stateRoot: t.stateRoot,
        receiptsRoot: t.receiptsRoot,
        transactionsRoot: t.transactionsRoot
      });
    }
    get transactions() {
      return __privateGet(this, _t16).map((t) => typeof t == "string" ? t : t.hash);
    }
    get prefetchedTransactions() {
      const t = __privateGet(this, _t16).slice();
      return t.length === 0 ? [] : (w(typeof t[0] == "object", "transactions were not prefetched with block request", "UNSUPPORTED_OPERATION", {
        operation: "transactionResponses()"
      }), t);
    }
    toJSON() {
      const { baseFeePerGas: t, difficulty: e, extraData: n, gasLimit: s, gasUsed: i, hash: o, miner: a, prevRandao: c, nonce: l, number: u, parentHash: f, parentBeaconBlockRoot: h, stateRoot: g, receiptsRoot: m, transactionsRoot: p, timestamp: y, transactions: b } = this;
      return {
        _type: "Block",
        baseFeePerGas: et(t),
        difficulty: et(e),
        extraData: n,
        gasLimit: et(s),
        gasUsed: et(i),
        blobGasUsed: et(this.blobGasUsed),
        excessBlobGas: et(this.excessBlobGas),
        hash: o,
        miner: a,
        prevRandao: c,
        nonce: l,
        number: u,
        parentHash: f,
        timestamp: y,
        parentBeaconBlockRoot: h,
        stateRoot: g,
        receiptsRoot: m,
        transactionsRoot: p,
        transactions: b
      };
    }
    [Symbol.iterator]() {
      let t = 0;
      const e = this.transactions;
      return {
        next: () => t < this.length ? {
          value: e[t++],
          done: false
        } : {
          value: void 0,
          done: true
        }
      };
    }
    get length() {
      return __privateGet(this, _t16).length;
    }
    get date() {
      return this.timestamp == null ? null : new Date(this.timestamp * 1e3);
    }
    async getTransaction(t) {
      let e;
      if (typeof t == "number") e = __privateGet(this, _t16)[t];
      else {
        const n = t.toLowerCase();
        for (const s of __privateGet(this, _t16)) if (typeof s == "string") {
          if (s !== n) continue;
          e = s;
          break;
        } else {
          if (s.hash !== n) continue;
          e = s;
          break;
        }
      }
      if (e == null) throw new Error("no such tx");
      return typeof e == "string" ? await this.provider.getTransaction(e) : e;
    }
    getPrefetchedTransaction(t) {
      const e = this.prefetchedTransactions;
      if (typeof t == "number") return e[t];
      t = t.toLowerCase();
      for (const n of e) if (n.hash === t) return n;
      d(false, "no matching transaction", "indexOrHash", t);
    }
    isMined() {
      return !!this.hash;
    }
    isLondon() {
      return !!this.baseFeePerGas;
    }
    orphanedEvent() {
      if (!this.isMined()) throw new Error("");
      return Lf(this);
    }
  }
  _t16 = new WeakMap();
  class bn {
    constructor(t, e) {
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
      this.provider = e;
      const n = Object.freeze(t.topics.slice());
      k(this, {
        transactionHash: t.transactionHash,
        blockHash: t.blockHash,
        blockNumber: t.blockNumber,
        removed: t.removed,
        address: t.address,
        data: t.data,
        topics: n,
        index: t.index,
        transactionIndex: t.transactionIndex
      });
    }
    toJSON() {
      const { address: t, blockHash: e, blockNumber: n, data: s, index: i, removed: o, topics: a, transactionHash: c, transactionIndex: l } = this;
      return {
        _type: "log",
        address: t,
        blockHash: e,
        blockNumber: n,
        data: s,
        index: i,
        removed: o,
        topics: a,
        transactionHash: c,
        transactionIndex: l
      };
    }
    async getBlock() {
      const t = await this.provider.getBlock(this.blockHash);
      return w(!!t, "failed to find transaction", "UNKNOWN_ERROR", {}), t;
    }
    async getTransaction() {
      const t = await this.provider.getTransaction(this.transactionHash);
      return w(!!t, "failed to find transaction", "UNKNOWN_ERROR", {}), t;
    }
    async getTransactionReceipt() {
      const t = await this.provider.getTransactionReceipt(this.transactionHash);
      return w(!!t, "failed to find transaction receipt", "UNKNOWN_ERROR", {}), t;
    }
    removedEvent() {
      return Uf(this);
    }
  }
  class ma {
    constructor(t, e) {
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
      __privateAdd(this, _t17);
      __privateSet(this, _t17, Object.freeze(t.logs.map((s) => new bn(s, e))));
      let n = ya;
      t.effectiveGasPrice != null ? n = t.effectiveGasPrice : t.gasPrice != null && (n = t.gasPrice), k(this, {
        provider: e,
        to: t.to,
        from: t.from,
        contractAddress: t.contractAddress,
        hash: t.hash,
        index: t.index,
        blockHash: t.blockHash,
        blockNumber: t.blockNumber,
        logsBloom: t.logsBloom,
        gasUsed: t.gasUsed,
        cumulativeGasUsed: t.cumulativeGasUsed,
        blobGasUsed: t.blobGasUsed,
        gasPrice: n,
        blobGasPrice: t.blobGasPrice,
        type: t.type,
        status: t.status,
        root: t.root
      });
    }
    get logs() {
      return __privateGet(this, _t17);
    }
    toJSON() {
      const { to: t, from: e, contractAddress: n, hash: s, index: i, blockHash: o, blockNumber: a, logsBloom: c, logs: l, status: u, root: f } = this;
      return {
        _type: "TransactionReceipt",
        blockHash: o,
        blockNumber: a,
        contractAddress: n,
        cumulativeGasUsed: et(this.cumulativeGasUsed),
        from: e,
        gasPrice: et(this.gasPrice),
        blobGasUsed: et(this.blobGasUsed),
        blobGasPrice: et(this.blobGasPrice),
        gasUsed: et(this.gasUsed),
        hash: s,
        index: i,
        logs: l,
        logsBloom: c,
        root: f,
        status: u,
        to: t
      };
    }
    get length() {
      return this.logs.length;
    }
    [Symbol.iterator]() {
      let t = 0;
      return {
        next: () => t < this.length ? {
          value: this.logs[t++],
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
      const t = await this.provider.getBlock(this.blockHash);
      if (t == null) throw new Error("TODO");
      return t;
    }
    async getTransaction() {
      const t = await this.provider.getTransaction(this.hash);
      if (t == null) throw new Error("TODO");
      return t;
    }
    async getResult() {
      return await this.provider.getTransactionResult(this.hash);
    }
    async confirmations() {
      return await this.provider.getBlockNumber() - this.blockNumber + 1;
    }
    removedEvent() {
      return wa(this);
    }
    reorderedEvent(t) {
      return w(!t || t.isMined(), "unmined 'other' transction cannot be orphaned", "UNSUPPORTED_OPERATION", {
        operation: "reorderedEvent(other)"
      }), ba(this, t);
    }
  }
  _t17 = new WeakMap();
  const _wn = class _wn {
    constructor(t, e) {
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
      __privateAdd(this, _t18);
      this.provider = e, this.blockNumber = t.blockNumber != null ? t.blockNumber : null, this.blockHash = t.blockHash != null ? t.blockHash : null, this.hash = t.hash, this.index = t.index, this.type = t.type, this.from = t.from, this.to = t.to || null, this.gasLimit = t.gasLimit, this.nonce = t.nonce, this.data = t.data, this.value = t.value, this.gasPrice = t.gasPrice, this.maxPriorityFeePerGas = t.maxPriorityFeePerGas != null ? t.maxPriorityFeePerGas : null, this.maxFeePerGas = t.maxFeePerGas != null ? t.maxFeePerGas : null, this.maxFeePerBlobGas = t.maxFeePerBlobGas != null ? t.maxFeePerBlobGas : null, this.chainId = t.chainId, this.signature = t.signature, this.accessList = t.accessList != null ? t.accessList : null, this.blobVersionedHashes = t.blobVersionedHashes != null ? t.blobVersionedHashes : null, this.authorizationList = t.authorizationList != null ? t.authorizationList : null, __privateSet(this, _t18, -1);
    }
    toJSON() {
      const { blockNumber: t, blockHash: e, index: n, hash: s, type: i, to: o, from: a, nonce: c, data: l, signature: u, accessList: f, blobVersionedHashes: h } = this;
      return {
        _type: "TransactionResponse",
        accessList: f,
        blockNumber: t,
        blockHash: e,
        blobVersionedHashes: h,
        chainId: et(this.chainId),
        data: l,
        from: a,
        gasLimit: et(this.gasLimit),
        gasPrice: et(this.gasPrice),
        hash: s,
        maxFeePerGas: et(this.maxFeePerGas),
        maxPriorityFeePerGas: et(this.maxPriorityFeePerGas),
        maxFeePerBlobGas: et(this.maxFeePerBlobGas),
        nonce: c,
        signature: u,
        to: o,
        index: n,
        type: i,
        value: et(this.value)
      };
    }
    async getBlock() {
      let t = this.blockNumber;
      if (t == null) {
        const n = await this.getTransaction();
        n && (t = n.blockNumber);
      }
      if (t == null) return null;
      const e = this.provider.getBlock(t);
      if (e == null) throw new Error("TODO");
      return e;
    }
    async getTransaction() {
      return this.provider.getTransaction(this.hash);
    }
    async confirmations() {
      if (this.blockNumber == null) {
        const { tx: e, blockNumber: n } = await ht({
          tx: this.getTransaction(),
          blockNumber: this.provider.getBlockNumber()
        });
        return e == null || e.blockNumber == null ? 0 : n - e.blockNumber + 1;
      }
      return await this.provider.getBlockNumber() - this.blockNumber + 1;
    }
    async wait(t, e) {
      const n = t ?? 1, s = e ?? 0;
      let i = __privateGet(this, _t18), o = -1, a = i === -1;
      const c = async () => {
        if (a) return null;
        const { blockNumber: h, nonce: g } = await ht({
          blockNumber: this.provider.getBlockNumber(),
          nonce: this.provider.getTransactionCount(this.from)
        });
        if (g < this.nonce) {
          i = h;
          return;
        }
        if (a) return null;
        const m = await this.getTransaction();
        if (!(m && m.blockNumber != null)) for (o === -1 && (o = i - 3, o < __privateGet(this, _t18) && (o = __privateGet(this, _t18))); o <= h; ) {
          if (a) return null;
          const p = await this.provider.getBlock(o, true);
          if (p == null) return;
          for (const y of p) if (y === this.hash) return;
          for (let y = 0; y < p.length; y++) {
            const b = await p.getTransaction(y);
            if (b.from === this.from && b.nonce === this.nonce) {
              if (a) return null;
              const P = await this.provider.getTransactionReceipt(b.hash);
              if (P == null || h - P.blockNumber + 1 < n) return;
              let A = "replaced";
              b.data === this.data && b.to === this.to && b.value === this.value ? A = "repriced" : b.data === "0x" && b.from === b.to && b.value === ya && (A = "cancelled"), w(false, "transaction was replaced", "TRANSACTION_REPLACED", {
                cancelled: A === "replaced" || A === "cancelled",
                reason: A,
                replacement: b.replaceableTransaction(i),
                hash: b.hash,
                receipt: P
              });
            }
          }
          o++;
        }
      }, l = (h) => {
        if (h == null || h.status !== 0) return h;
        w(false, "transaction execution reverted", "CALL_EXCEPTION", {
          action: "sendTransaction",
          data: null,
          reason: null,
          invocation: null,
          revert: null,
          transaction: {
            to: h.to,
            from: h.from,
            data: ""
          },
          receipt: h
        });
      }, u = await this.provider.getTransactionReceipt(this.hash);
      if (n === 0) return l(u);
      if (u) {
        if (n === 1 || await u.confirmations() >= n) return l(u);
      } else if (await c(), n === 0) return null;
      return await new Promise((h, g) => {
        const m = [], p = () => {
          m.forEach((b) => b());
        };
        if (m.push(() => {
          a = true;
        }), s > 0) {
          const b = setTimeout(() => {
            p(), g(Y("wait for transaction timeout", "TIMEOUT"));
          }, s);
          m.push(() => {
            clearTimeout(b);
          });
        }
        const y = async (b) => {
          if (await b.confirmations() >= n) {
            p();
            try {
              h(l(b));
            } catch (P) {
              g(P);
            }
          }
        };
        if (m.push(() => {
          this.provider.off(this.hash, y);
        }), this.provider.on(this.hash, y), i >= 0) {
          const b = async () => {
            try {
              await c();
            } catch (P) {
              if (lt(P, "TRANSACTION_REPLACED")) {
                p(), g(P);
                return;
              }
            }
            a || this.provider.once("block", b);
          };
          m.push(() => {
            this.provider.off("block", b);
          }), this.provider.once("block", b);
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
      return w(this.isMined(), "unmined transaction canot be orphaned", "UNSUPPORTED_OPERATION", {
        operation: "removeEvent()"
      }), wa(this);
    }
    reorderedEvent(t) {
      return w(this.isMined(), "unmined transaction canot be orphaned", "UNSUPPORTED_OPERATION", {
        operation: "removeEvent()"
      }), w(!t || t.isMined(), "unmined 'other' transaction canot be orphaned", "UNSUPPORTED_OPERATION", {
        operation: "removeEvent()"
      }), ba(this, t);
    }
    replaceableTransaction(t) {
      d(Number.isInteger(t) && t >= 0, "invalid startBlock", "startBlock", t);
      const e = new _wn(this, this.provider);
      return __privateSet(e, _t18, t), e;
    }
  };
  _t18 = new WeakMap();
  let wn = _wn;
  function Lf(r) {
    return {
      orphan: "drop-block",
      hash: r.hash,
      number: r.number
    };
  }
  function ba(r, t) {
    return {
      orphan: "reorder-transaction",
      tx: r,
      other: t
    };
  }
  function wa(r) {
    return {
      orphan: "drop-transaction",
      tx: r
    };
  }
  function Uf(r) {
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
  class ys extends bn {
    constructor(t, e, n) {
      super(t, t.provider);
      __publicField(this, "interface");
      __publicField(this, "fragment");
      __publicField(this, "args");
      const s = e.decodeEventLog(n, t.data, t.topics);
      k(this, {
        args: s,
        fragment: n,
        interface: e
      });
    }
    get eventName() {
      return this.fragment.name;
    }
    get eventSignature() {
      return this.fragment.format();
    }
  }
  class Aa extends bn {
    constructor(t, e) {
      super(t, t.provider);
      __publicField(this, "error");
      k(this, {
        error: e
      });
    }
  }
  class Ff extends ma {
    constructor(t, e, n) {
      super(n, e);
      __privateAdd(this, _t19);
      __privateSet(this, _t19, t);
    }
    get logs() {
      return super.logs.map((t) => {
        const e = t.topics.length ? __privateGet(this, _t19).getEvent(t.topics[0]) : null;
        if (e) try {
          return new ys(t, __privateGet(this, _t19), e);
        } catch (n) {
          return new Aa(t, n);
        }
        return t;
      });
    }
  }
  _t19 = new WeakMap();
  class ms extends wn {
    constructor(t, e, n) {
      super(n, e);
      __privateAdd(this, _t20);
      __privateSet(this, _t20, t);
    }
    async wait(t, e) {
      const n = await super.wait(t, e);
      return n == null ? null : new Ff(__privateGet(this, _t20), this.provider, n);
    }
  }
  _t20 = new WeakMap();
  class Ea extends Zi {
    constructor(t, e, n, s) {
      super(t, e, n);
      __publicField(this, "log");
      k(this, {
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
  class Df extends Ea {
    constructor(t, e, n, s, i) {
      super(t, e, n, new ys(i, t.interface, s));
      const o = t.interface.decodeEventLog(s, this.log.data, this.log.topics);
      k(this, {
        args: o,
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
  const Ci = BigInt(0);
  function xa(r) {
    return r && typeof r.call == "function";
  }
  function Pa(r) {
    return r && typeof r.estimateGas == "function";
  }
  function cr(r) {
    return r && typeof r.resolveName == "function";
  }
  function Ba(r) {
    return r && typeof r.sendTransaction == "function";
  }
  function Na(r) {
    if (r != null) {
      if (cr(r)) return r;
      if (r.provider) return r.provider;
    }
  }
  class Gf {
    constructor(t, e, n) {
      __privateAdd(this, _t21);
      __publicField(this, "fragment");
      if (k(this, {
        fragment: e
      }), e.inputs.length < n.length) throw new Error("too many arguments");
      const s = ve(t.runner, "resolveName"), i = cr(s) ? s : null;
      __privateSet(this, _t21, (async function() {
        const o = await Promise.all(e.inputs.map((a, c) => n[c] == null ? null : a.walkAsync(n[c], (u, f) => u === "address" ? Array.isArray(f) ? Promise.all(f.map((h) => gt(h, i))) : gt(f, i) : f)));
        return t.interface.encodeFilterTopics(e, o);
      })());
    }
    getTopicFilter() {
      return __privateGet(this, _t21);
    }
  }
  _t21 = new WeakMap();
  function ve(r, t) {
    return r == null ? null : typeof r[t] == "function" ? r : r.provider && typeof r.provider[t] == "function" ? r.provider : null;
  }
  function Ae(r) {
    return r == null ? null : r.provider || null;
  }
  async function bs(r, t) {
    const e = tt.dereference(r, "overrides");
    d(typeof e == "object", "invalid overrides parameter", "overrides", r);
    const n = Zn(e);
    return d(n.to == null || (t || []).indexOf("to") >= 0, "cannot override to", "overrides.to", n.to), d(n.data == null || (t || []).indexOf("data") >= 0, "cannot override data", "overrides.data", n.data), n.from && (n.from = n.from), n;
  }
  async function Ia(r, t, e) {
    const n = ve(r, "resolveName"), s = cr(n) ? n : null;
    return await Promise.all(t.map((i, o) => i.walkAsync(e[o], (a, c) => (c = tt.dereference(c, a), a === "address" ? gt(c, s) : c))));
  }
  function Mf(r) {
    const t = async function(o) {
      const a = await bs(o, [
        "data"
      ]);
      a.to = await r.getAddress(), a.from && (a.from = await gt(a.from, Na(r.runner)));
      const c = r.interface, l = B(a.value || Ci, "overrides.value") === Ci, u = (a.data || "0x") === "0x";
      c.fallback && !c.fallback.payable && c.receive && !u && !l && d(false, "cannot send data to receive or send value to non-payable fallback", "overrides", o), d(c.fallback || u, "cannot send data to receive-only contract", "overrides.data", a.data);
      const f = c.receive || c.fallback && c.fallback.payable;
      return d(f || l, "cannot send value to non-payable fallback", "overrides.value", a.value), d(c.fallback || u, "cannot send data to receive-only contract", "overrides.data", a.data), a;
    }, e = async function(o) {
      const a = ve(r.runner, "call");
      w(xa(a), "contract runner does not support calling", "UNSUPPORTED_OPERATION", {
        operation: "call"
      });
      const c = await t(o);
      try {
        return await a.call(c);
      } catch (l) {
        throw Xr(l) && l.data ? r.interface.makeError(l.data, c) : l;
      }
    }, n = async function(o) {
      const a = r.runner;
      w(Ba(a), "contract runner does not support sending transactions", "UNSUPPORTED_OPERATION", {
        operation: "sendTransaction"
      });
      const c = await a.sendTransaction(await t(o)), l = Ae(r.runner);
      return new ms(r.interface, l, c);
    }, s = async function(o) {
      const a = ve(r.runner, "estimateGas");
      return w(Pa(a), "contract runner does not support gas estimation", "UNSUPPORTED_OPERATION", {
        operation: "estimateGas"
      }), await a.estimateGas(await t(o));
    }, i = async (o) => await n(o);
    return k(i, {
      _contract: r,
      estimateGas: s,
      populateTransaction: t,
      send: n,
      staticCall: e
    }), i;
  }
  function Hf(r, t) {
    const e = function(...l) {
      const u = r.interface.getFunction(t, l);
      return w(u, "no matching fragment", "UNSUPPORTED_OPERATION", {
        operation: "fragment",
        info: {
          key: t,
          args: l
        }
      }), u;
    }, n = async function(...l) {
      const u = e(...l);
      let f = {};
      if (u.inputs.length + 1 === l.length && (f = await bs(l.pop()), f.from && (f.from = await gt(f.from, Na(r.runner)))), u.inputs.length !== l.length) throw new Error("internal error: fragment inputs doesn't match arguments; should not happen");
      const h = await Ia(r.runner, u.inputs, l);
      return Object.assign({}, f, await ht({
        to: r.getAddress(),
        data: r.interface.encodeFunctionData(u, h)
      }));
    }, s = async function(...l) {
      const u = await a(...l);
      return u.length === 1 ? u[0] : u;
    }, i = async function(...l) {
      const u = r.runner;
      w(Ba(u), "contract runner does not support sending transactions", "UNSUPPORTED_OPERATION", {
        operation: "sendTransaction"
      });
      const f = await u.sendTransaction(await n(...l)), h = Ae(r.runner);
      return new ms(r.interface, h, f);
    }, o = async function(...l) {
      const u = ve(r.runner, "estimateGas");
      return w(Pa(u), "contract runner does not support gas estimation", "UNSUPPORTED_OPERATION", {
        operation: "estimateGas"
      }), await u.estimateGas(await n(...l));
    }, a = async function(...l) {
      const u = ve(r.runner, "call");
      w(xa(u), "contract runner does not support calling", "UNSUPPORTED_OPERATION", {
        operation: "call"
      });
      const f = await n(...l);
      let h = "0x";
      try {
        h = await u.call(f);
      } catch (m) {
        throw Xr(m) && m.data ? r.interface.makeError(m.data, f) : m;
      }
      const g = e(...l);
      return r.interface.decodeFunctionResult(g, h);
    }, c = async (...l) => e(...l).constant ? await s(...l) : await i(...l);
    return k(c, {
      name: r.interface.getFunctionName(t),
      _contract: r,
      _key: t,
      getFragment: e,
      estimateGas: o,
      populateTransaction: n,
      send: i,
      staticCall: s,
      staticCallResult: a
    }), Object.defineProperty(c, "fragment", {
      configurable: false,
      enumerable: true,
      get: () => {
        const l = r.interface.getFunction(t);
        return w(l, "no matching fragment", "UNSUPPORTED_OPERATION", {
          operation: "fragment",
          info: {
            key: t
          }
        }), l;
      }
    }), c;
  }
  function Qf(r, t) {
    const e = function(...s) {
      const i = r.interface.getEvent(t, s);
      return w(i, "no matching fragment", "UNSUPPORTED_OPERATION", {
        operation: "fragment",
        info: {
          key: t,
          args: s
        }
      }), i;
    }, n = function(...s) {
      return new Gf(r, e(...s), s);
    };
    return k(n, {
      name: r.interface.getEventName(t),
      _contract: r,
      _key: t,
      getFragment: e
    }), Object.defineProperty(n, "fragment", {
      configurable: false,
      enumerable: true,
      get: () => {
        const s = r.interface.getEvent(t);
        return w(s, "no matching fragment", "UNSUPPORTED_OPERATION", {
          operation: "fragment",
          info: {
            key: t
          }
        }), s;
      }
    }), n;
  }
  const Yn = Symbol.for("_ethersInternal_contract"), Ta = /* @__PURE__ */ new WeakMap();
  function Vf(r, t) {
    Ta.set(r[Yn], t);
  }
  function Pt(r) {
    return Ta.get(r[Yn]);
  }
  function Jf(r) {
    return r && typeof r == "object" && "getTopicFilter" in r && typeof r.getTopicFilter == "function" && r.fragment;
  }
  async function ws(r, t) {
    let e, n = null;
    if (Array.isArray(t)) {
      const i = function(o) {
        if (_(o, 32)) return o;
        const a = r.interface.getEvent(o);
        return d(a, "unknown fragment", "name", o), a.topicHash;
      };
      e = t.map((o) => o == null ? null : Array.isArray(o) ? o.map(i) : i(o));
    } else t === "*" ? e = [
      null
    ] : typeof t == "string" ? _(t, 32) ? e = [
      t
    ] : (n = r.interface.getEvent(t), d(n, "unknown fragment", "event", t), e = [
      n.topicHash
    ]) : Jf(t) ? e = await t.getTopicFilter() : "fragment" in t ? (n = t.fragment, e = [
      n.topicHash
    ]) : d(false, "unknown event name", "event", t);
    e = e.map((i) => {
      if (i == null) return null;
      if (Array.isArray(i)) {
        const o = Array.from(new Set(i.map((a) => a.toLowerCase())).values());
        return o.length === 1 ? o[0] : (o.sort(), o);
      }
      return i.toLowerCase();
    });
    const s = e.map((i) => i == null ? "null" : Array.isArray(i) ? i.join("|") : i).join("&");
    return {
      fragment: n,
      tag: s,
      topics: e
    };
  }
  async function nn(r, t) {
    const { subs: e } = Pt(r);
    return e.get((await ws(r, t)).tag) || null;
  }
  async function ki(r, t, e) {
    const n = Ae(r.runner);
    w(n, "contract runner does not support subscribing", "UNSUPPORTED_OPERATION", {
      operation: t
    });
    const { fragment: s, tag: i, topics: o } = await ws(r, e), { addr: a, subs: c } = Pt(r);
    let l = c.get(i);
    if (!l) {
      const f = {
        address: a || r,
        topics: o
      }, h = (y) => {
        let b = s;
        if (b == null) try {
          b = r.interface.getEvent(y.topics[0]);
        } catch {
        }
        if (b) {
          const P = b, A = s ? r.interface.decodeEventLog(s, y.data, y.topics) : [];
          _r(r, e, A, (R) => new Df(r, R, e, P, y));
        } else _r(r, e, [], (P) => new Ea(r, P, e, y));
      };
      let g = [];
      l = {
        tag: i,
        listeners: [],
        start: () => {
          g.length || g.push(n.on(f, h));
        },
        stop: async () => {
          if (g.length == 0) return;
          let y = g;
          g = [], await Promise.all(y), n.off(f, h);
        }
      }, c.set(i, l);
    }
    return l;
  }
  let zr = Promise.resolve();
  async function Kf(r, t, e, n) {
    await zr;
    const s = await nn(r, t);
    if (!s) return false;
    const i = s.listeners.length;
    return s.listeners = s.listeners.filter(({ listener: o, once: a }) => {
      const c = Array.from(e);
      n && c.push(n(a ? null : o));
      try {
        o.call(r, ...c);
      } catch {
      }
      return !a;
    }), s.listeners.length === 0 && (s.stop(), Pt(r).subs.delete(s.tag)), i > 0;
  }
  async function _r(r, t, e, n) {
    try {
      await zr;
    } catch {
    }
    const s = Kf(r, t, e, n);
    return zr = s, await s;
  }
  const Rn = [
    "then"
  ];
  _d3 = Yn;
  const _Be = class _Be {
    constructor(t, e, n, s) {
      __publicField(this, "target");
      __publicField(this, "interface");
      __publicField(this, "runner");
      __publicField(this, "filters");
      __publicField(this, _d3);
      __publicField(this, "fallback");
      d(typeof t == "string" || So(t), "invalid value for Contract target", "target", t), n == null && (n = null);
      const i = zt.from(e);
      k(this, {
        target: t,
        runner: n,
        interface: i
      }), Object.defineProperty(this, Yn, {
        value: {}
      });
      let o, a = null, c = null;
      if (s) {
        const f = Ae(n);
        c = new ms(this.interface, f, s);
      }
      let l = /* @__PURE__ */ new Map();
      if (typeof t == "string") if (_(t)) a = t, o = Promise.resolve(t);
      else {
        const f = ve(n, "resolveName");
        if (!cr(f)) throw Y("contract runner does not support name resolution", "UNSUPPORTED_OPERATION", {
          operation: "resolveName"
        });
        o = f.resolveName(t).then((h) => {
          if (h == null) throw Y("an ENS name used for a contract target must be correctly configured", "UNCONFIGURED_NAME", {
            value: t
          });
          return Pt(this).addr = h, h;
        });
      }
      else o = t.getAddress().then((f) => {
        if (f == null) throw new Error("TODO");
        return Pt(this).addr = f, f;
      });
      Vf(this, {
        addrPromise: o,
        addr: a,
        deployTx: c,
        subs: l
      });
      const u = new Proxy({}, {
        get: (f, h, g) => {
          if (typeof h == "symbol" || Rn.indexOf(h) >= 0) return Reflect.get(f, h, g);
          try {
            return this.getEvent(h);
          } catch (m) {
            if (!lt(m, "INVALID_ARGUMENT") || m.argument !== "key") throw m;
          }
        },
        has: (f, h) => Rn.indexOf(h) >= 0 ? Reflect.has(f, h) : Reflect.has(f, h) || this.interface.hasEvent(String(h))
      });
      return k(this, {
        filters: u
      }), k(this, {
        fallback: i.receive || i.fallback ? Mf(this) : null
      }), new Proxy(this, {
        get: (f, h, g) => {
          if (typeof h == "symbol" || h in f || Rn.indexOf(h) >= 0) return Reflect.get(f, h, g);
          try {
            return f.getFunction(h);
          } catch (m) {
            if (!lt(m, "INVALID_ARGUMENT") || m.argument !== "key") throw m;
          }
        },
        has: (f, h) => typeof h == "symbol" || h in f || Rn.indexOf(h) >= 0 ? Reflect.has(f, h) : f.interface.hasFunction(h)
      });
    }
    connect(t) {
      return new _Be(this.target, this.interface, t);
    }
    attach(t) {
      return new _Be(t, this.interface, this.runner);
    }
    async getAddress() {
      return await Pt(this).addrPromise;
    }
    async getDeployedCode() {
      const t = Ae(this.runner);
      w(t, "runner does not support .provider", "UNSUPPORTED_OPERATION", {
        operation: "getDeployedCode"
      });
      const e = await t.getCode(await this.getAddress());
      return e === "0x" ? null : e;
    }
    async waitForDeployment() {
      const t = this.deploymentTransaction();
      if (t) return await t.wait(), this;
      if (await this.getDeployedCode() != null) return this;
      const n = Ae(this.runner);
      return w(n != null, "contract runner does not support .provider", "UNSUPPORTED_OPERATION", {
        operation: "waitForDeployment"
      }), new Promise((s, i) => {
        const o = async () => {
          try {
            if (await this.getDeployedCode() != null) return s(this);
            n.once("block", o);
          } catch (a) {
            i(a);
          }
        };
        o();
      });
    }
    deploymentTransaction() {
      return Pt(this).deployTx;
    }
    getFunction(t) {
      return typeof t != "string" && (t = t.format()), Hf(this, t);
    }
    getEvent(t) {
      return typeof t != "string" && (t = t.format()), Qf(this, t);
    }
    async queryTransaction(t) {
      throw new Error("@TODO");
    }
    async queryFilter(t, e, n) {
      e == null && (e = 0), n == null && (n = "latest");
      const { addr: s, addrPromise: i } = Pt(this), o = s || await i, { fragment: a, topics: c } = await ws(this, t), l = {
        address: o,
        topics: c,
        fromBlock: e,
        toBlock: n
      }, u = Ae(this.runner);
      return w(u, "contract runner does not have a provider", "UNSUPPORTED_OPERATION", {
        operation: "queryFilter"
      }), (await u.getLogs(l)).map((f) => {
        let h = a;
        if (h == null) try {
          h = this.interface.getEvent(f.topics[0]);
        } catch {
        }
        if (h) try {
          return new ys(f, this.interface, h);
        } catch (g) {
          return new Aa(f, g);
        }
        return new bn(f, u);
      });
    }
    async on(t, e) {
      const n = await ki(this, "on", t);
      return n.listeners.push({
        listener: e,
        once: false
      }), n.start(), this;
    }
    async once(t, e) {
      const n = await ki(this, "once", t);
      return n.listeners.push({
        listener: e,
        once: true
      }), n.start(), this;
    }
    async emit(t, ...e) {
      return await _r(this, t, e, null);
    }
    async listenerCount(t) {
      if (t) {
        const s = await nn(this, t);
        return s ? s.listeners.length : 0;
      }
      const { subs: e } = Pt(this);
      let n = 0;
      for (const { listeners: s } of e.values()) n += s.length;
      return n;
    }
    async listeners(t) {
      if (t) {
        const s = await nn(this, t);
        return s ? s.listeners.map(({ listener: i }) => i) : [];
      }
      const { subs: e } = Pt(this);
      let n = [];
      for (const { listeners: s } of e.values()) n = n.concat(s.map(({ listener: i }) => i));
      return n;
    }
    async off(t, e) {
      const n = await nn(this, t);
      if (!n) return this;
      if (e) {
        const s = n.listeners.map(({ listener: i }) => i).indexOf(e);
        s >= 0 && n.listeners.splice(s, 1);
      }
      return (e == null || n.listeners.length === 0) && (n.stop(), Pt(this).subs.delete(n.tag)), this;
    }
    async removeAllListeners(t) {
      if (t) {
        const e = await nn(this, t);
        if (!e) return this;
        e.stop(), Pt(this).subs.delete(e.tag);
      } else {
        const { subs: e } = Pt(this);
        for (const { tag: n, stop: s } of e.values()) s(), e.delete(n);
      }
      return this;
    }
    async addListener(t, e) {
      return await this.on(t, e);
    }
    async removeListener(t, e) {
      return await this.off(t, e);
    }
    static buildClass(t) {
      class e extends _Be {
        constructor(s, i = null) {
          super(s, t, i);
        }
      }
      return e;
    }
    static from(t, e, n) {
      return n == null && (n = null), new this(t, e, n);
    }
  };
  let Be = _Be;
  function zf() {
    return Be;
  }
  class on extends zf() {
  }
  class As {
    constructor(t, e, n) {
      __publicField(this, "interface");
      __publicField(this, "bytecode");
      __publicField(this, "runner");
      const s = zt.from(t);
      e instanceof Uint8Array || (typeof e == "object" && (e = e.object), e.startsWith("0x") || (e = "0x" + e)), e = x(S(e)), k(this, {
        bytecode: e,
        interface: s,
        runner: n || null
      });
    }
    attach(t) {
      return new Be(t, this.interface, this.runner);
    }
    async getDeployTransaction(...t) {
      let e = {};
      const n = this.interface.deploy;
      if (n.inputs.length + 1 === t.length && (e = await bs(t.pop())), n.inputs.length !== t.length) throw new Error("incorrect number of arguments to constructor");
      const s = await Ia(this.runner, n.inputs, t), i = Z([
        this.bytecode,
        this.interface.encodeDeploy(s)
      ]);
      return Object.assign({}, e, {
        data: i
      });
    }
    async deploy(...t) {
      const e = await this.getDeployTransaction(...t);
      w(this.runner && typeof this.runner.sendTransaction == "function", "factory runner does not support sending transactions", "UNSUPPORTED_OPERATION", {
        operation: "sendTransaction"
      });
      const n = await this.runner.sendTransaction(e), s = Ro(n);
      return new Be(s, this.interface, this.runner, n);
    }
    connect(t) {
      return new As(this.interface, this.bytecode, t);
    }
    static fromSolidity(t, e) {
      d(t != null, "bad compiler output", "output", t), typeof t == "string" && (t = JSON.parse(t));
      const n = t.abi;
      let s = "";
      return t.bytecode ? s = t.bytecode : t.evm && t.evm.bytecode && (s = t.evm.bytecode), new this(n, s, e);
    }
  }
  const rn = BigInt(60);
  function Nr(r) {
    return r.match(/^ipfs:\/\/ipfs\//i) ? r = r.substring(12) : r.match(/^ipfs:\/\//i) ? r = r.substring(7) : d(false, "unsupported IPFS format", "link", r), `https://gateway.ipfs.io/ipfs/${r}`;
  }
  class _f {
    constructor(t) {
      __publicField(this, "name");
      k(this, {
        name: t
      });
    }
    connect(t) {
      return this;
    }
    supportsCoinType(t) {
      return false;
    }
    async encodeAddress(t, e) {
      throw new Error("unsupported coin");
    }
    async decodeAddress(t, e) {
      throw new Error("unsupported coin");
    }
  }
  const va = new RegExp("^(ipfs)://(.*)$", "i"), Oi = [
    new RegExp("^(https)://(.*)$", "i"),
    new RegExp("^(data):(.*)$", "i"),
    va,
    new RegExp("^eip155:[0-9]+/(erc[0-9]+):(.*)$", "i")
  ];
  function Ri(r) {
    return r === rn || r >= 2147483648 && r <= 4294967295;
  }
  const __t = class __t {
    constructor(t, e, n, s) {
      __privateAdd(this, __t_instances);
      __publicField(this, "provider");
      __publicField(this, "address");
      __publicField(this, "name");
      __privateAdd(this, _t22);
      __privateAdd(this, _e12);
      k(this, {
        provider: t,
        address: e,
        name: n
      }), __privateSet(this, _t22, s != null ? Promise.resolve(s) : null), __privateSet(this, _e12, new on(e, [
        "function supportsInterface(bytes4) view returns (bool)",
        "function resolve(bytes, bytes) view returns (bytes)",
        "function addr(bytes32) view returns (address)",
        "function addr(bytes32, uint) view returns (bytes)",
        "function text(bytes32, string) view returns (string)",
        "function contenthash(bytes32) view returns (bytes)",
        "function name(bytes32) view returns (string)"
      ], t));
    }
    async supportsWildcard() {
      return __privateGet(this, _t22) == null && __privateSet(this, _t22, (async () => {
        try {
          return await __privateGet(this, _e12).supportsInterface("0x9061b923");
        } catch (t) {
          if (lt(t, "CALL_EXCEPTION")) return false;
          throw __privateSet(this, _t22, null), t;
        }
      })()), await __privateGet(this, _t22);
    }
    async getAddress(t) {
      const e = t == null ? rn : B(t);
      if (e === rn) try {
        const i = await __privateMethod(this, __t_instances, n_fn3).call(this, "addr(bytes32)");
        return i == null || i === Jn ? null : i;
      } catch (i) {
        if (lt(i, "CALL_EXCEPTION")) return null;
        throw i;
      }
      if (Ri(e)) {
        const i = await __privateMethod(this, __t_instances, n_fn3).call(this, "addr(bytes32,uint)", [
          e
        ]);
        return _(i, 20) ? M(i) : null;
      }
      if (e >= 0 && e < 2147483648) {
        let i = e + BigInt(2147483648);
        const o = await __privateMethod(this, __t_instances, n_fn3).call(this, "addr(bytes32,uint)", [
          i
        ]);
        if (_(o, 20)) return M(o);
      }
      let n = null;
      for (const i of this.provider.plugins) if (i instanceof _f && e <= 2147483648 && i.supportsCoinType(Number(e))) {
        n = i;
        break;
      }
      if (n == null) return null;
      const s = await __privateMethod(this, __t_instances, n_fn3).call(this, "addr(bytes32,uint)", [
        e
      ]);
      if (s == null || s === "0x") return null;
      if (e < 2147483648) {
        const i = await n.decodeAddress(Number(e), s);
        if (i != null) return i;
      }
      w(false, "invalid coin data", "UNSUPPORTED_OPERATION", {
        operation: `getAddress(${e})`,
        info: {
          coinType: e,
          data: s
        }
      });
    }
    async getText(t) {
      const e = await __privateMethod(this, __t_instances, n_fn3).call(this, "text(bytes32,string)", [
        t
      ]);
      return e == null || e === "0x" ? null : e;
    }
    async getContentHash() {
      const t = await __privateMethod(this, __t_instances, n_fn3).call(this, "contenthash(bytes32)");
      if (t == null || t === "0x") return null;
      const e = t.match(/^0x(e3010170|e5010172)(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/);
      if (e) {
        const s = e[1] === "e3010170" ? "ipfs" : "ipns", i = parseInt(e[4], 16);
        if (e[5].length === i * 2) return `${s}://${tc("0x" + e[2])}`;
      }
      const n = t.match(/^0xe40101fa011b20([0-9a-f]*)$/);
      if (n && n[1].length === 64) return `bzz://${n[1]}`;
      w(false, "invalid or unsupported content hash data", "UNSUPPORTED_OPERATION", {
        operation: "getContentHash()",
        info: {
          data: t
        }
      });
    }
    async getName() {
      return await __privateMethod(this, __t_instances, n_fn3).call(this, "name(bytes32)");
    }
    async getAvatar() {
      return (await this._getAvatar()).url;
    }
    async _getAvatar() {
      const t = [
        {
          type: "name",
          value: this.name
        }
      ];
      try {
        const e = await this.getText("avatar");
        if (e == null) return t.push({
          type: "!avatar",
          value: ""
        }), {
          url: null,
          linkage: t
        };
        t.push({
          type: "avatar",
          value: e
        });
        for (let n = 0; n < Oi.length; n++) {
          const s = e.match(Oi[n]);
          if (s == null) continue;
          const i = s[1].toLowerCase();
          switch (i) {
            case "https":
            case "data":
              return t.push({
                type: "url",
                value: e
              }), {
                linkage: t,
                url: e
              };
            case "ipfs": {
              const o = Nr(e);
              return t.push({
                type: "ipfs",
                value: e
              }), t.push({
                type: "url",
                value: o
              }), {
                linkage: t,
                url: o
              };
            }
            case "erc721":
            case "erc1155": {
              const o = i === "erc721" ? "tokenURI(uint256)" : "uri(uint256)";
              t.push({
                type: i,
                value: e
              });
              const a = await this.getAddress();
              if (a == null) return t.push({
                type: "!owner",
                value: ""
              }), {
                url: null,
                linkage: t
              };
              const c = (s[2] || "").split("/");
              if (c.length !== 2) return t.push({
                type: `!${i}caip`,
                value: s[2] || ""
              }), {
                url: null,
                linkage: t
              };
              const l = c[1], u = new on(c[0], [
                "function tokenURI(uint) view returns (string)",
                "function ownerOf(uint) view returns (address)",
                "function uri(uint) view returns (string)",
                "function balanceOf(address, uint256) view returns (uint)"
              ], this.provider);
              if (i === "erc721") {
                const p = await u.ownerOf(l);
                if (a !== p) return t.push({
                  type: "!owner",
                  value: p
                }), {
                  url: null,
                  linkage: t
                };
                t.push({
                  type: "owner",
                  value: p
                });
              } else if (i === "erc1155") {
                const p = await u.balanceOf(a, l);
                if (!p) return t.push({
                  type: "!balance",
                  value: "0"
                }), {
                  url: null,
                  linkage: t
                };
                t.push({
                  type: "balance",
                  value: p.toString()
                });
              }
              let f = await u[o](l);
              if (f == null || f === "0x") return t.push({
                type: "!metadata-url",
                value: ""
              }), {
                url: null,
                linkage: t
              };
              t.push({
                type: "metadata-url-base",
                value: f
              }), i === "erc1155" && (f = f.replace("{id}", ue(l, 32).substring(2)), t.push({
                type: "metadata-url-expanded",
                value: f
              })), f.match(/^ipfs:/i) && (f = Nr(f)), t.push({
                type: "metadata-url",
                value: f
              });
              let h = {};
              const g = await new Lt(f).send();
              g.assertOk();
              try {
                h = g.bodyJson;
              } catch {
                try {
                  t.push({
                    type: "!metadata",
                    value: g.bodyText
                  });
                } catch {
                  const b = g.body;
                  return b && t.push({
                    type: "!metadata",
                    value: x(b)
                  }), {
                    url: null,
                    linkage: t
                  };
                }
                return {
                  url: null,
                  linkage: t
                };
              }
              if (!h) return t.push({
                type: "!metadata",
                value: ""
              }), {
                url: null,
                linkage: t
              };
              t.push({
                type: "metadata",
                value: JSON.stringify(h)
              });
              let m = h.image;
              if (typeof m != "string") return t.push({
                type: "!imageUrl",
                value: ""
              }), {
                url: null,
                linkage: t
              };
              if (!m.match(/^(https:\/\/|data:)/i)) {
                if (m.match(va) == null) return t.push({
                  type: "!imageUrl-ipfs",
                  value: m
                }), {
                  url: null,
                  linkage: t
                };
                t.push({
                  type: "imageUrl-ipfs",
                  value: m
                }), m = Nr(m);
              }
              return t.push({
                type: "url",
                value: m
              }), {
                linkage: t,
                url: m
              };
            }
          }
        }
      } catch {
      }
      return {
        linkage: t,
        url: null
      };
    }
    static async getEnsAddress(t) {
      const e = await t.getNetwork(), n = e.getPlugin("org.ethers.plugins.network.Ens");
      return w(n, "network does not support ENS", "UNSUPPORTED_OPERATION", {
        operation: "getEnsAddress",
        info: {
          network: e
        }
      }), n.address;
    }
    static async getUniversalResolverAddress(t) {
      const n = (await t.getNetwork()).getPlugin("org.ethers.plugins.network.Ens");
      return n && n.universalResolver ? n.universalResolver : null;
    }
    static async lookupAddress(t, e, n) {
      const s = n == null ? rn : B(n);
      Ri(s) && (e = M(e));
      const i = await Si(t);
      if (i) try {
        const a = (await i.reverse(e, s, {
          enableCcipRead: true
        })).primary;
        return li(a) ? a : null;
      } catch (o) {
        if (lt(o, "CALL_EXCEPTION") && o.reason === "ResolverNotFound(bytes)") return null;
        throw o;
      }
      w(s === rn, "lookupAddress coinType requires ENS Universal Resolver", "UNSUPPORTED_OPERATION", {
        operation: "lookupAddress"
      });
      try {
        const o = await __t.fromName(t, `${e.toLowerCase().substring(2)}.addr.reverse`);
        if (!o) return null;
        const a = await o.getName();
        return a == null || !li(a) || await t.resolveName(a) !== e ? null : a;
      } catch (o) {
        if (lt(o, "BAD_DATA") && o.value === "0x" || lt(o, "CALL_EXCEPTION")) return null;
        throw o;
      }
    }
    static async fromName(t, e) {
      var _a6;
      const n = await Si(t);
      if (n) {
        let i;
        try {
          i = fi(sa(e), 255);
        } catch {
          return null;
        }
        const o = await n.requireResolver(i);
        return new __t(t, o.resolver, e, o.extended);
      }
      let s = e;
      for (; ; ) {
        if (s === "" || s === "." || e !== "eth" && s === "eth") return null;
        const i = await __privateMethod(_a6 = __t, __t_static, r_fn2).call(_a6, t, s);
        if (i != null) {
          const o = new __t(t, i, e);
          return s !== e && !await o.supportsWildcard() ? null : o;
        }
        s = s.split(".").slice(1).join(".");
      }
    }
  };
  _t22 = new WeakMap();
  _e12 = new WeakMap();
  __t_instances = new WeakSet();
  n_fn3 = async function(t, e) {
    e = (e || []).slice();
    const n = __privateGet(this, _e12).interface;
    e.unshift(ui(this.name));
    let s = null;
    await this.supportsWildcard() && (s = n.getFunction(t), w(s, "missing fragment", "UNKNOWN_ERROR", {
      info: {
        funcName: t
      }
    }), e = [
      fi(this.name, 255),
      n.encodeFunctionData(s, e)
    ], t = "resolve(bytes,bytes)"), e.push({
      enableCcipRead: true
    });
    try {
      const i = await __privateGet(this, _e12)[t](...e);
      return s ? n.decodeFunctionResult(s, i)[0] : i;
    } catch (i) {
      if (!lt(i, "CALL_EXCEPTION")) throw i;
    }
    return null;
  };
  __t_static = new WeakSet();
  r_fn2 = async function(t, e) {
    const n = await __t.getEnsAddress(t);
    try {
      const i = await new on(n, [
        "function resolver(bytes32) view returns (address)"
      ], t).resolver(ui(e), {
        enableCcipRead: true
      });
      return i === Jn ? null : i;
    } catch (s) {
      throw s;
    }
    return null;
  };
  __privateAdd(__t, __t_static);
  let _t = __t;
  async function Si(r) {
    const t = await _t.getUniversalResolverAddress(r);
    return t ? new on(t, [
      "function requireResolver(bytes) view returns ((bytes name, uint256 offset, bytes32 node, address resolver, bool extended))",
      "function findResolver(bytes) view returns (address resolver, bytes32 node, uint offset)",
      "function resolve(bytes name, bytes data) view returns (bytes result, address resolver)",
      "function reverse(bytes name, uint coinType) view returns (string primary, address resolver, address reverseResolver)",
      "error ResolverNotFound(bytes name)",
      "error ResolverNotContract(bytes name, address resolver)",
      "error ReverseAddressMismatch(string primary, bytes primaryAddress)",
      "error HttpError(uint16 statusCode, string statusMessage)"
    ], r) : null;
  }
  const Li = BigInt(0);
  function D(r, t) {
    return (function(e) {
      return e == null ? t : r(e);
    });
  }
  function pn(r, t) {
    return ((e) => {
      if (t && e == null) return null;
      if (!Array.isArray(e)) throw new Error("not an array");
      return e.map((n) => r(n));
    });
  }
  function An(r, t) {
    return ((e) => {
      const n = {};
      for (const s in r) {
        let i = s;
        if (t && s in t && !(i in e)) {
          for (const o of t[s]) if (o in e) {
            i = o;
            break;
          }
        }
        try {
          const o = r[s](e[i]);
          o !== void 0 && (n[s] = o);
        } catch (o) {
          const a = o instanceof Error ? o.message : "not-an-error";
          w(false, `invalid value for value.${s} (${a})`, "BAD_DATA", {
            value: e
          });
        }
      }
      return n;
    });
  }
  function jf(r) {
    switch (r) {
      case true:
      case "true":
        return true;
      case false:
      case "false":
        return false;
    }
    d(false, `invalid boolean; ${JSON.stringify(r)}`, "value", r);
  }
  function We(r) {
    return d(_(r, true), "invalid data", "value", r), r;
  }
  function ct(r) {
    return d(_(r, 32), "invalid hash", "value", r), r;
  }
  const Wf = An({
    address: M,
    blockHash: ct,
    blockNumber: U,
    data: We,
    index: U,
    removed: D(jf, false),
    topics: pn(ct),
    transactionHash: ct,
    transactionIndex: U
  }, {
    index: [
      "logIndex"
    ]
  });
  function Zf(r) {
    return Wf(r);
  }
  const Yf = An({
    hash: D(ct),
    parentHash: ct,
    parentBeaconBlockRoot: D(ct, null),
    number: U,
    timestamp: U,
    nonce: D(We),
    difficulty: B,
    gasLimit: B,
    gasUsed: B,
    stateRoot: D(ct, null),
    receiptsRoot: D(ct, null),
    transactionsRoot: D(ct, null),
    blobGasUsed: D(B, null),
    excessBlobGas: D(B, null),
    miner: D(M),
    prevRandao: D(ct, null),
    extraData: We,
    baseFeePerGas: D(B)
  }, {
    prevRandao: [
      "mixHash"
    ]
  });
  function qf(r) {
    const t = Yf(r);
    return t.transactions = r.transactions.map((e) => typeof e == "string" ? e : Ca(e)), t;
  }
  const Xf = An({
    transactionIndex: U,
    blockNumber: U,
    transactionHash: ct,
    address: M,
    topics: pn(ct),
    data: We,
    index: U,
    blockHash: ct
  }, {
    index: [
      "logIndex"
    ]
  });
  function $f(r) {
    return Xf(r);
  }
  const t0 = An({
    to: D(M, null),
    from: D(M, null),
    contractAddress: D(M, null),
    index: U,
    root: D(x),
    gasUsed: B,
    blobGasUsed: D(B, null),
    logsBloom: D(We),
    blockHash: ct,
    hash: ct,
    logs: pn($f),
    blockNumber: U,
    cumulativeGasUsed: B,
    effectiveGasPrice: D(B),
    blobGasPrice: D(B, null),
    status: D(U),
    type: D(U, 0)
  }, {
    effectiveGasPrice: [
      "gasPrice"
    ],
    hash: [
      "transactionHash"
    ],
    index: [
      "transactionIndex"
    ]
  });
  function e0(r) {
    return t0(r);
  }
  function Ca(r) {
    r.to && B(r.to) === Li && (r.to = "0x0000000000000000000000000000000000000000");
    const t = An({
      hash: ct,
      index: D(U, void 0),
      type: (e) => e === "0x" || e == null ? 0 : U(e),
      accessList: D(Ce, null),
      blobVersionedHashes: D(pn(ct, true), null),
      authorizationList: D(pn((e) => {
        let n;
        if (e.signature) n = e.signature;
        else {
          let s = e.yParity;
          s === "0x1b" ? s = 0 : s === "0x1c" && (s = 1), n = Object.assign({}, e, {
            yParity: s
          });
        }
        return {
          address: M(e.address),
          chainId: B(e.chainId),
          nonce: B(e.nonce),
          signature: q.from(n)
        };
      }, false), null),
      blockHash: D(ct, null),
      blockNumber: D(U, null),
      transactionIndex: D(U, null),
      from: M,
      gasPrice: D(B),
      maxPriorityFeePerGas: D(B),
      maxFeePerGas: D(B),
      maxFeePerBlobGas: D(B, null),
      gasLimit: B,
      to: D(M, null),
      value: B,
      nonce: U,
      data: We,
      creates: D(M, null),
      chainId: D(B, null)
    }, {
      data: [
        "input"
      ],
      gasLimit: [
        "gas"
      ],
      index: [
        "transactionIndex"
      ]
    })(r);
    if (t.to == null && t.creates == null && (t.creates = Ro(t)), (r.type === 1 || r.type === 2) && r.accessList == null && (t.accessList = []), r.signature ? t.signature = q.from(r.signature) : t.signature = q.from(r), t.chainId == null) {
      const e = t.signature.legacyChainId;
      e != null && (t.chainId = e);
    }
    return t.blockHash && B(t.blockHash) === Li && (t.blockHash = null), t;
  }
  const n0 = "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e", r0 = Symbol.for("nodejs.util.inspect.custom");
  class En {
    constructor(t) {
      __publicField(this, "name");
      k(this, {
        name: t
      });
    }
    [r0]() {
      return this.toString();
    }
    toString() {
      return `${this.name} { }`;
    }
    clone() {
      return new En(this.name);
    }
  }
  class lr extends En {
    constructor(t, e) {
      t == null && (t = 0);
      super(`org.ethers.network.plugins.GasCost#${t || 0}`);
      __publicField(this, "effectiveBlock");
      __publicField(this, "txBase");
      __publicField(this, "txCreate");
      __publicField(this, "txDataZero");
      __publicField(this, "txDataNonzero");
      __publicField(this, "txAccessListStorageKey");
      __publicField(this, "txAccessListAddress");
      const n = {
        effectiveBlock: t
      };
      function s(i, o) {
        let a = (e || {})[i];
        a == null && (a = o), d(typeof a == "number", `invalud value for ${i}`, "costs", e), n[i] = a;
      }
      s("txBase", 21e3), s("txCreate", 32e3), s("txDataZero", 4), s("txDataNonzero", 16), s("txAccessListStorageKey", 1900), s("txAccessListAddress", 2400), k(this, n);
    }
    toString() {
      return `${this.name} { txBase: ${this.txBase}, txCreate: ${this.txCreate}, txDataZero: ${this.txDataZero}, txAccessListStorageKey: ${this.txAccessListStorageKey}, txAccessListAddress: ${this.txAccessListAddress} }`;
    }
    clone() {
      return new lr(this.effectiveBlock, this);
    }
  }
  class ur extends En {
    constructor(t, e, n) {
      super("org.ethers.plugins.network.Ens");
      __publicField(this, "address");
      __publicField(this, "targetNetwork");
      __publicField(this, "universalResolver");
      k(this, {
        address: t || n0,
        targetNetwork: e ?? 1,
        universalResolver: n
      });
    }
    toString() {
      return `${this.name} { address: ${this.address}, targetNetwork: ${this.targetNetwork}, universalResolver: ${this.universalResolver} }`;
    }
    clone() {
      return new ur(this.address, this.targetNetwork, this.universalResolver);
    }
  }
  class s0 extends En {
    constructor(t, e) {
      super("org.ethers.plugins.network.FetchUrlFeeDataPlugin");
      __privateAdd(this, _t23);
      __privateAdd(this, _e13);
      __privateSet(this, _t23, t), __privateSet(this, _e13, e);
    }
    get url() {
      return __privateGet(this, _t23);
    }
    get processFunc() {
      return __privateGet(this, _e13);
    }
    toString() {
      return `${this.name} { url: ${this.url} }`;
    }
    clone() {
      return this;
    }
  }
  _t23 = new WeakMap();
  _e13 = new WeakMap();
  const i0 = Symbol.for("nodejs.util.inspect.custom"), Ir = /* @__PURE__ */ new Map();
  const _Bt = class _Bt {
    constructor(t, e) {
      __privateAdd(this, _t24);
      __privateAdd(this, _e14);
      __privateAdd(this, _n9);
      __privateSet(this, _t24, t), __privateSet(this, _e14, B(e)), __privateSet(this, _n9, /* @__PURE__ */ new Map());
    }
    [i0]() {
      return this.toString();
    }
    toString() {
      const t = [];
      for (const e of __privateGet(this, _n9).values()) t.push(e.toString());
      return `Network { name: ${this.name}, chainId: ${this.chainId}, plugins: [ ${t.join(", ")} ] }`;
    }
    toJSON() {
      return {
        name: this.name,
        chainId: String(this.chainId)
      };
    }
    get name() {
      return __privateGet(this, _t24);
    }
    set name(t) {
      __privateSet(this, _t24, t);
    }
    get chainId() {
      return __privateGet(this, _e14);
    }
    set chainId(t) {
      __privateSet(this, _e14, B(t, "chainId"));
    }
    matches(t) {
      if (t == null) return false;
      if (typeof t == "string") {
        try {
          return this.chainId === B(t);
        } catch {
        }
        return this.name === t;
      }
      if (typeof t == "number" || typeof t == "bigint") {
        try {
          return this.chainId === B(t);
        } catch {
        }
        return false;
      }
      if (typeof t == "object") {
        if (t.chainId != null) {
          try {
            return this.chainId === B(t.chainId);
          } catch {
          }
          return false;
        }
        return t.name != null ? this.name === t.name : false;
      }
      return false;
    }
    get plugins() {
      return Array.from(__privateGet(this, _n9).values());
    }
    attachPlugin(t) {
      if (__privateGet(this, _n9).get(t.name)) throw new Error(`cannot replace existing plugin: ${t.name} `);
      return __privateGet(this, _n9).set(t.name, t.clone()), this;
    }
    getPlugin(t) {
      return __privateGet(this, _n9).get(t) || null;
    }
    getPlugins(t) {
      return this.plugins.filter((e) => e.name.split("#")[0] === t);
    }
    clone() {
      const t = new _Bt(this.name, this.chainId);
      return this.plugins.forEach((e) => {
        t.attachPlugin(e.clone());
      }), t;
    }
    computeIntrinsicGas(t) {
      const e = this.getPlugin("org.ethers.plugins.network.GasCost") || new lr();
      let n = e.txBase;
      if (t.to == null && (n += e.txCreate), t.data) for (let s = 2; s < t.data.length; s += 2) t.data.substring(s, s + 2) === "00" ? n += e.txDataZero : n += e.txDataNonzero;
      if (t.accessList) {
        const s = Ce(t.accessList);
        for (const i in s) n += e.txAccessListAddress + e.txAccessListStorageKey * s[i].storageKeys.length;
      }
      return n;
    }
    static from(t) {
      if (o0(), t == null) return _Bt.from("mainnet");
      if (typeof t == "number" && (t = BigInt(t)), typeof t == "string" || typeof t == "bigint") {
        const e = Ir.get(t);
        if (e) return e();
        if (typeof t == "bigint") return new _Bt("unknown", t);
        d(false, "unknown network", "network", t);
      }
      if (typeof t.clone == "function") return t.clone();
      if (typeof t == "object") {
        d(typeof t.name == "string" && typeof t.chainId == "number", "invalid network object name or chainId", "network", t);
        const e = new _Bt(t.name, t.chainId), n = t;
        return (n.ensAddress || n.ensNetwork != null || n.ensUniversalResolver) && e.attachPlugin(new ur(n.ensAddress, n.ensNetwork, n.ensUniversalResolver)), e;
      }
      d(false, "invalid network", "network", t);
    }
    static register(t, e) {
      typeof t == "number" && (t = BigInt(t));
      const n = Ir.get(t);
      n && d(false, `conflicting network for ${JSON.stringify(n.name)}`, "nameOrChainId", t), Ir.set(t, e);
    }
  };
  _t24 = new WeakMap();
  _e14 = new WeakMap();
  _n9 = new WeakMap();
  let Bt = _Bt;
  function Ui(r, t) {
    const e = String(r);
    if (!e.match(/^[0-9.]+$/)) throw new Error(`invalid gwei value: ${r}`);
    const n = e.split(".");
    if (n.length === 1 && n.push(""), n.length !== 2) throw new Error(`invalid gwei value: ${r}`);
    for (; n[1].length < t; ) n[1] += "0";
    if (n[1].length > 9) {
      let s = BigInt(n[1].substring(0, 9));
      n[1].substring(9).match(/^0+$/) || s++, n[1] = s.toString();
    }
    return BigInt(n[0] + n[1]);
  }
  function Fi(r) {
    return new s0(r, async (t, e, n) => {
      n.setHeader("User-Agent", "ethers");
      let s;
      try {
        const [i, o] = await Promise.all([
          n.send(),
          t()
        ]);
        s = i;
        const a = s.bodyJson.standard;
        return {
          gasPrice: o.gasPrice,
          maxFeePerGas: Ui(a.maxFee, 9),
          maxPriorityFeePerGas: Ui(a.maxPriorityFee, 9)
        };
      } catch (i) {
        w(false, `error encountered with polygon gas station (${JSON.stringify(n.url)})`, "SERVER_ERROR", {
          request: n,
          response: s,
          error: i
        });
      }
    });
  }
  let Di = false;
  function o0() {
    if (Di) return;
    Di = true;
    function r(e, n, s) {
      const i = function() {
        const o = new Bt(e, n);
        return s.ensNetwork != null && o.attachPlugin(new ur(null, s.ensNetwork, s.ensUniversalResolver)), o.attachPlugin(new lr()), (s.plugins || []).forEach((a) => {
          o.attachPlugin(a);
        }), o;
      };
      Bt.register(e, i), Bt.register(n, i), s.altNames && s.altNames.forEach((o) => {
        Bt.register(o, i);
      });
    }
    const t = "0xeEeEEEeE14D718C2B47D9923Deab1335E144EeEe";
    r("mainnet", 1, {
      ensUniversalResolver: t,
      ensNetwork: 1,
      altNames: [
        "homestead"
      ]
    }), r("ropsten", 3, {
      ensNetwork: 3
    }), r("rinkeby", 4, {
      ensNetwork: 4
    }), r("goerli", 5, {
      ensNetwork: 5
    }), r("kovan", 42, {
      ensNetwork: 42
    }), r("sepolia", 11155111, {
      ensUniversalResolver: t,
      ensNetwork: 11155111
    }), r("holesky", 17e3, {
      ensNetwork: 17e3
    }), r("classic", 61, {}), r("classicKotti", 6, {}), r("arbitrum", 42161, {
      ensNetwork: 1
    }), r("arbitrum-goerli", 421613, {}), r("arbitrum-sepolia", 421614, {}), r("base", 8453, {
      ensNetwork: 1
    }), r("base-goerli", 84531, {}), r("base-sepolia", 84532, {}), r("bnb", 56, {
      ensNetwork: 1
    }), r("bnbt", 97, {}), r("filecoin", 314, {}), r("filecoin-calibration", 314159, {}), r("linea", 59144, {
      ensNetwork: 1
    }), r("linea-goerli", 59140, {}), r("linea-sepolia", 59141, {}), r("matic", 137, {
      ensNetwork: 1,
      plugins: [
        Fi("https://gasstation.polygon.technology/v2")
      ]
    }), r("matic-amoy", 80002, {}), r("matic-mumbai", 80001, {
      altNames: [
        "maticMumbai",
        "maticmum"
      ],
      plugins: [
        Fi("https://gasstation-testnet.polygon.technology/v2")
      ]
    }), r("optimism", 10, {
      ensNetwork: 1,
      plugins: []
    }), r("optimism-goerli", 420, {}), r("optimism-sepolia", 11155420, {}), r("xdai", 100, {
      ensNetwork: 1
    });
  }
  function jr(r) {
    return JSON.parse(JSON.stringify(r));
  }
  class a0 {
    constructor(t) {
      __privateAdd(this, _a0_instances);
      __privateAdd(this, _t25);
      __privateAdd(this, _e15);
      __privateAdd(this, _n10);
      __privateAdd(this, _r8);
      __privateSet(this, _t25, t), __privateSet(this, _e15, null), __privateSet(this, _n10, 4e3), __privateSet(this, _r8, -2);
    }
    get pollingInterval() {
      return __privateGet(this, _n10);
    }
    set pollingInterval(t) {
      __privateSet(this, _n10, t);
    }
    start() {
      __privateGet(this, _e15) || (__privateSet(this, _e15, __privateGet(this, _t25)._setTimeout(__privateMethod(this, _a0_instances, s_fn2).bind(this), __privateGet(this, _n10))), __privateMethod(this, _a0_instances, s_fn2).call(this));
    }
    stop() {
      __privateGet(this, _e15) && (__privateGet(this, _t25)._clearTimeout(__privateGet(this, _e15)), __privateSet(this, _e15, null));
    }
    pause(t) {
      this.stop(), t && __privateSet(this, _r8, -2);
    }
    resume() {
      this.start();
    }
  }
  _t25 = new WeakMap();
  _e15 = new WeakMap();
  _n10 = new WeakMap();
  _r8 = new WeakMap();
  _a0_instances = new WeakSet();
  s_fn2 = async function() {
    try {
      const t = await __privateGet(this, _t25).getBlockNumber();
      if (__privateGet(this, _r8) === -2) {
        __privateSet(this, _r8, t);
        return;
      }
      if (t !== __privateGet(this, _r8)) {
        for (let e = __privateGet(this, _r8) + 1; e <= t; e++) {
          if (__privateGet(this, _e15) == null) return;
          await __privateGet(this, _t25).emit("block", e);
        }
        __privateSet(this, _r8, t);
      }
    } catch {
    }
    __privateGet(this, _e15) != null && __privateSet(this, _e15, __privateGet(this, _t25)._setTimeout(__privateMethod(this, _a0_instances, s_fn2).bind(this), __privateGet(this, _n10)));
  };
  class Es {
    constructor(t) {
      __privateAdd(this, _t26);
      __privateAdd(this, _e16);
      __privateAdd(this, _n11);
      __privateSet(this, _t26, t), __privateSet(this, _n11, false), __privateSet(this, _e16, (e) => {
        this._poll(e, __privateGet(this, _t26));
      });
    }
    async _poll(t, e) {
      throw new Error("sub-classes must override this");
    }
    start() {
      __privateGet(this, _n11) || (__privateSet(this, _n11, true), __privateGet(this, _e16).call(this, -2), __privateGet(this, _t26).on("block", __privateGet(this, _e16)));
    }
    stop() {
      __privateGet(this, _n11) && (__privateSet(this, _n11, false), __privateGet(this, _t26).off("block", __privateGet(this, _e16)));
    }
    pause(t) {
      this.stop();
    }
    resume() {
      this.start();
    }
  }
  _t26 = new WeakMap();
  _e16 = new WeakMap();
  _n11 = new WeakMap();
  class c0 extends Es {
    constructor(t, e) {
      super(t);
      __privateAdd(this, _t27);
      __privateAdd(this, _e17);
      __privateSet(this, _t27, e), __privateSet(this, _e17, -2);
    }
    pause(t) {
      t && __privateSet(this, _e17, -2), super.pause(t);
    }
    async _poll(t, e) {
      const n = await e.getBlock(__privateGet(this, _t27));
      n != null && (__privateGet(this, _e17) === -2 ? __privateSet(this, _e17, n.number) : n.number > __privateGet(this, _e17) && (e.emit(__privateGet(this, _t27), n.number), __privateSet(this, _e17, n.number)));
    }
  }
  _t27 = new WeakMap();
  _e17 = new WeakMap();
  class l0 extends Es {
    constructor(t, e) {
      super(t);
      __privateAdd(this, _t28);
      __privateSet(this, _t28, jr(e));
    }
    async _poll(t, e) {
      throw new Error("@TODO");
    }
  }
  _t28 = new WeakMap();
  class u0 extends Es {
    constructor(t, e) {
      super(t);
      __privateAdd(this, _t29);
      __privateSet(this, _t29, e);
    }
    async _poll(t, e) {
      const n = await e.getTransactionReceipt(__privateGet(this, _t29));
      n && e.emit(__privateGet(this, _t29), n);
    }
  }
  _t29 = new WeakMap();
  class xs {
    constructor(t, e) {
      __privateAdd(this, _xs_instances);
      __privateAdd(this, _t30);
      __privateAdd(this, _e18);
      __privateAdd(this, _n12);
      __privateAdd(this, _r9);
      __privateAdd(this, _s6);
      __privateSet(this, _t30, t), __privateSet(this, _e18, jr(e)), __privateSet(this, _n12, __privateMethod(this, _xs_instances, o_fn3).bind(this)), __privateSet(this, _r9, false), __privateSet(this, _s6, -2);
    }
    start() {
      __privateGet(this, _r9) || (__privateSet(this, _r9, true), __privateGet(this, _s6) === -2 && __privateGet(this, _t30).getBlockNumber().then((t) => {
        __privateSet(this, _s6, t);
      }), __privateGet(this, _t30).on("block", __privateGet(this, _n12)));
    }
    stop() {
      __privateGet(this, _r9) && (__privateSet(this, _r9, false), __privateGet(this, _t30).off("block", __privateGet(this, _n12)));
    }
    pause(t) {
      this.stop(), t && __privateSet(this, _s6, -2);
    }
    resume() {
      this.start();
    }
  }
  _t30 = new WeakMap();
  _e18 = new WeakMap();
  _n12 = new WeakMap();
  _r9 = new WeakMap();
  _s6 = new WeakMap();
  _xs_instances = new WeakSet();
  o_fn3 = async function(t) {
    if (__privateGet(this, _s6) === -2) return;
    const e = jr(__privateGet(this, _e18));
    e.fromBlock = __privateGet(this, _s6) + 1, e.toBlock = t;
    const n = await __privateGet(this, _t30).getLogs(e);
    if (n.length === 0) {
      __privateGet(this, _s6) < t - 60 && __privateSet(this, _s6, t - 60);
      return;
    }
    for (const s of n) __privateGet(this, _t30).emit(__privateGet(this, _e18), s), __privateSet(this, _s6, s.blockNumber);
  };
  const f0 = BigInt(2), h0 = 10;
  function Tr(r) {
    return new Promise((t) => {
      setTimeout(t, r);
    });
  }
  function Sn(r) {
    return r && typeof r.then == "function";
  }
  function Mn(r, t) {
    return r + ":" + JSON.stringify(t, (e, n) => {
      if (n == null) return "null";
      if (typeof n == "bigint") return `bigint:${n.toString()}`;
      if (typeof n == "string") return n.toLowerCase();
      if (typeof n == "object" && !Array.isArray(n)) {
        const s = Object.keys(n);
        return s.sort(), s.reduce((i, o) => (i[o] = n[o], i), {});
      }
      return n;
    });
  }
  class ka {
    constructor(t) {
      __publicField(this, "name");
      k(this, {
        name: t
      });
    }
    start() {
    }
    stop() {
    }
    pause(t) {
    }
    resume() {
    }
  }
  function d0(r) {
    return JSON.parse(JSON.stringify(r));
  }
  function Wr(r) {
    return r = Array.from(new Set(r).values()), r.sort(), r;
  }
  async function vr(r, t) {
    if (r == null) throw new Error("invalid event");
    if (Array.isArray(r) && (r = {
      topics: r
    }), typeof r == "string") switch (r) {
      case "block":
      case "debug":
      case "error":
      case "finalized":
      case "network":
      case "pending":
      case "safe":
        return {
          type: r,
          tag: r
        };
    }
    if (_(r, 32)) {
      const e = r.toLowerCase();
      return {
        type: "transaction",
        tag: Mn("tx", {
          hash: e
        }),
        hash: e
      };
    }
    if (r.orphan) {
      const e = r;
      return {
        type: "orphan",
        tag: Mn("orphan", e),
        filter: d0(e)
      };
    }
    if (r.address || r.topics) {
      const e = r, n = {
        topics: (e.topics || []).map((s) => s == null ? null : Array.isArray(s) ? Wr(s.map((i) => i.toLowerCase())) : s.toLowerCase())
      };
      if (e.address) {
        const s = [], i = [], o = (a) => {
          _(a) ? s.push(a) : i.push((async () => {
            s.push(await gt(a, t));
          })());
        };
        Array.isArray(e.address) ? e.address.forEach(o) : o(e.address), i.length && await Promise.all(i), n.address = Wr(s.map((a) => a.toLowerCase()));
      }
      return {
        filter: n,
        tag: Mn("event", n),
        type: "event"
      };
    }
    d(false, "unknown ProviderEvent", "event", r);
  }
  function Ln() {
    return (/* @__PURE__ */ new Date()).getTime();
  }
  const p0 = {
    cacheTimeout: 250,
    pollingInterval: 4e3
  };
  class g0 {
    constructor(t, e) {
      __privateAdd(this, _g0_instances);
      __privateAdd(this, _t31);
      __privateAdd(this, _e19);
      __privateAdd(this, _n13);
      __privateAdd(this, _r10);
      __privateAdd(this, _s7);
      __privateAdd(this, _o5);
      __privateAdd(this, _i4);
      __privateAdd(this, _a5);
      __privateAdd(this, _d4);
      __privateAdd(this, _l4);
      __privateAdd(this, _g3);
      __privateAdd(this, _p3);
      __privateAdd(this, _h3);
      __privateAdd(this, _u4);
      if (__privateSet(this, _u4, Object.assign({}, p0, e || {})), t === "any") __privateSet(this, _o5, true), __privateSet(this, _s7, null);
      else if (t) {
        const n = Bt.from(t);
        __privateSet(this, _o5, false), __privateSet(this, _s7, Promise.resolve(n)), setTimeout(() => {
          this.emit("network", n, null);
        }, 0);
      } else __privateSet(this, _o5, false), __privateSet(this, _s7, null);
      __privateSet(this, _a5, -1), __privateSet(this, _i4, /* @__PURE__ */ new Map()), __privateSet(this, _t31, /* @__PURE__ */ new Map()), __privateSet(this, _e19, /* @__PURE__ */ new Map()), __privateSet(this, _n13, null), __privateSet(this, _r10, false), __privateSet(this, _d4, 1), __privateSet(this, _l4, /* @__PURE__ */ new Map()), __privateSet(this, _g3, false), __privateSet(this, _p3, 0), __privateSet(this, _h3, []);
    }
    get _requestRate() {
      const t = __privateGet(this, _p3);
      return t == 0 ? null : t;
    }
    set _requestRate(t) {
      (t == null || t < 0) && (t = 0), __privateSet(this, _p3, U(t));
    }
    get pollingInterval() {
      return __privateGet(this, _u4).pollingInterval;
    }
    get provider() {
      return this;
    }
    get plugins() {
      return Array.from(__privateGet(this, _e19).values());
    }
    attachPlugin(t) {
      if (__privateGet(this, _e19).get(t.name)) throw new Error(`cannot replace existing plugin: ${t.name} `);
      return __privateGet(this, _e19).set(t.name, t.connect(this)), this;
    }
    getPlugin(t) {
      return __privateGet(this, _e19).get(t) || null;
    }
    get disableCcipRead() {
      return __privateGet(this, _g3);
    }
    set disableCcipRead(t) {
      __privateSet(this, _g3, !!t);
    }
    async ccipReadFetch(t, e, n) {
      if (this.disableCcipRead || n.length === 0 || t.to == null) return null;
      const s = t.to.toLowerCase(), i = e.toLowerCase(), o = [];
      for (let a = 0; a < n.length; a++) {
        const c = n[a], l = c.replace("{sender}", s).replace("{data}", i), u = new Lt(l);
        c.indexOf("{data}") === -1 && (u.body = {
          data: i,
          sender: s
        }), this.emit("debug", {
          action: "sendCcipReadFetchRequest",
          request: u,
          index: a,
          urls: n
        });
        let f = "unknown error", h;
        try {
          h = await u.send();
        } catch (g) {
          o.push(g.message), this.emit("debug", {
            action: "receiveCcipReadFetchError",
            request: u,
            result: {
              error: g
            }
          });
          continue;
        }
        try {
          const g = h.bodyJson;
          if (g.data) return this.emit("debug", {
            action: "receiveCcipReadFetchResult",
            request: u,
            result: g
          }), g.data;
          g.message && (f = g.message), this.emit("debug", {
            action: "receiveCcipReadFetchError",
            request: u,
            result: g
          });
        } catch {
        }
        w(h.statusCode < 400 || h.statusCode >= 500, `response not found during CCIP fetch: ${f}`, "OFFCHAIN_FAULT", {
          reason: "404_MISSING_RESOURCE",
          transaction: t,
          info: {
            url: c,
            errorMessage: f
          }
        }), o.push(f);
      }
      w(false, `error encountered during CCIP fetch: ${o.map((a) => JSON.stringify(a)).join(", ")}`, "OFFCHAIN_FAULT", {
        reason: "500_SERVER_ERROR",
        transaction: t,
        info: {
          urls: n,
          errorMessages: o
        }
      });
    }
    _wrapBlock(t, e) {
      return new Sf(qf(t), this);
    }
    _wrapLog(t, e) {
      return new bn(Zf(t), this);
    }
    _wrapTransactionReceipt(t, e) {
      return new ma(e0(t), this);
    }
    _wrapTransactionResponse(t, e) {
      return new wn(Ca(t), this);
    }
    _detectNetwork() {
      w(false, "sub-classes must implement this", "UNSUPPORTED_OPERATION", {
        operation: "_detectNetwork"
      });
    }
    async _perform(t) {
      w(false, `unsupported method: ${t.method}`, "UNSUPPORTED_OPERATION", {
        operation: t.method,
        info: t
      });
    }
    async getBlockNumber() {
      const t = U(await __privateMethod(this, _g0_instances, c_fn2).call(this, {
        method: "getBlockNumber"
      }), "%response");
      return __privateGet(this, _a5) >= 0 && __privateSet(this, _a5, t), t;
    }
    _getAddress(t) {
      return gt(t, this);
    }
    _getBlockTag(t) {
      if (t == null) return "latest";
      switch (t) {
        case "earliest":
          return "0x0";
        case "finalized":
        case "latest":
        case "pending":
        case "safe":
          return t;
      }
      if (_(t)) return _(t, 32) ? t : Rt(t);
      if (typeof t == "bigint" && (t = U(t, "blockTag")), typeof t == "number") return t >= 0 ? Rt(t) : __privateGet(this, _a5) >= 0 ? Rt(__privateGet(this, _a5) + t) : this.getBlockNumber().then((e) => Rt(e + t));
      d(false, "invalid blockTag", "blockTag", t);
    }
    _getFilter(t) {
      const e = (t.topics || []).map((c) => c == null ? null : Array.isArray(c) ? Wr(c.map((l) => l.toLowerCase())) : c.toLowerCase()), n = "blockHash" in t ? t.blockHash : void 0, s = (c, l, u) => {
        let f;
        switch (c.length) {
          case 0:
            break;
          case 1:
            f = c[0];
            break;
          default:
            c.sort(), f = c;
        }
        if (n && (l != null || u != null)) throw new Error("invalid filter");
        const h = {};
        return f && (h.address = f), e.length && (h.topics = e), l && (h.fromBlock = l), u && (h.toBlock = u), n && (h.blockHash = n), h;
      };
      let i = [];
      if (t.address) if (Array.isArray(t.address)) for (const c of t.address) i.push(this._getAddress(c));
      else i.push(this._getAddress(t.address));
      let o;
      "fromBlock" in t && (o = this._getBlockTag(t.fromBlock));
      let a;
      return "toBlock" in t && (a = this._getBlockTag(t.toBlock)), i.filter((c) => typeof c != "string").length || o != null && typeof o != "string" || a != null && typeof a != "string" ? Promise.all([
        Promise.all(i),
        o,
        a
      ]).then((c) => s(c[0], c[1], c[2])) : s(i, o, a);
    }
    _getTransactionRequest(t) {
      const e = Zn(t), n = [];
      if ([
        "to",
        "from"
      ].forEach((s) => {
        if (e[s] == null) return;
        const i = gt(e[s], this);
        Sn(i) ? n.push((async function() {
          e[s] = await i;
        })()) : e[s] = i;
      }), e.blockTag != null) {
        const s = this._getBlockTag(e.blockTag);
        Sn(s) ? n.push((async function() {
          e.blockTag = await s;
        })()) : e.blockTag = s;
      }
      return n.length ? (async function() {
        return await Promise.all(n), e;
      })() : e;
    }
    async getNetwork() {
      if (__privateGet(this, _s7) == null) {
        const s = (async () => {
          try {
            const i = await this._detectNetwork();
            return this.emit("network", i, null), i;
          } catch (i) {
            throw __privateGet(this, _s7) === s && __privateSet(this, _s7, null), i;
          }
        })();
        return __privateSet(this, _s7, s), (await s).clone();
      }
      const t = __privateGet(this, _s7), [e, n] = await Promise.all([
        t,
        this._detectNetwork()
      ]);
      return e.chainId !== n.chainId && (__privateGet(this, _o5) ? (this.emit("network", n, e), __privateGet(this, _s7) === t && __privateSet(this, _s7, Promise.resolve(n))) : w(false, `network changed: ${e.chainId} => ${n.chainId} `, "NETWORK_ERROR", {
        event: "changed"
      })), e.clone();
    }
    async getFeeData() {
      const t = await this.getNetwork(), e = async () => {
        const { _block: s, gasPrice: i, priorityFee: o } = await ht({
          _block: __privateMethod(this, _g0_instances, E_fn).call(this, "latest", false),
          gasPrice: (async () => {
            try {
              const u = await __privateMethod(this, _g0_instances, c_fn2).call(this, {
                method: "getGasPrice"
              });
              return B(u, "%response");
            } catch {
            }
            return null;
          })(),
          priorityFee: (async () => {
            try {
              const u = await __privateMethod(this, _g0_instances, c_fn2).call(this, {
                method: "getPriorityFee"
              });
              return B(u, "%response");
            } catch {
            }
            return null;
          })()
        });
        let a = null, c = null;
        const l = this._wrapBlock(s, t);
        return l && l.baseFeePerGas && (c = o ?? BigInt("1000000000"), a = l.baseFeePerGas * f0 + c), new vi(i, a, c);
      }, n = t.getPlugin("org.ethers.plugins.network.FetchUrlFeeDataPlugin");
      if (n) {
        const s = new Lt(n.url), i = await n.processFunc(e, this, s);
        return new vi(i.gasPrice, i.maxFeePerGas, i.maxPriorityFeePerGas);
      }
      return await e();
    }
    async estimateGas(t) {
      let e = this._getTransactionRequest(t);
      return Sn(e) && (e = await e), B(await __privateMethod(this, _g0_instances, c_fn2).call(this, {
        method: "estimateGas",
        transaction: e
      }), "%response");
    }
    async call(t) {
      const { tx: e, blockTag: n } = await ht({
        tx: this._getTransactionRequest(t),
        blockTag: this._getBlockTag(t.blockTag)
      });
      return await __privateMethod(this, _g0_instances, b_fn).call(this, __privateMethod(this, _g0_instances, m_fn).call(this, e, n, t.enableCcipRead ? 0 : -1));
    }
    async getBalance(t, e) {
      return B(await __privateMethod(this, _g0_instances, y_fn2).call(this, {
        method: "getBalance"
      }, t, e), "%response");
    }
    async getTransactionCount(t, e) {
      return U(await __privateMethod(this, _g0_instances, y_fn2).call(this, {
        method: "getTransactionCount"
      }, t, e), "%response");
    }
    async getCode(t, e) {
      return x(await __privateMethod(this, _g0_instances, y_fn2).call(this, {
        method: "getCode"
      }, t, e));
    }
    async getStorage(t, e, n) {
      const s = B(e, "position");
      return x(await __privateMethod(this, _g0_instances, y_fn2).call(this, {
        method: "getStorage",
        position: s
      }, t, n));
    }
    async broadcastTransaction(t) {
      const { blockNumber: e, hash: n, network: s } = await ht({
        blockNumber: this.getBlockNumber(),
        hash: this._perform({
          method: "broadcastTransaction",
          signedTransaction: t
        }),
        network: this.getNetwork()
      }), i = Ot.from(t);
      if (i.hash !== n) throw new Error("@TODO: the returned hash did not match");
      return this._wrapTransactionResponse(i, s).replaceableTransaction(e);
    }
    async getBlock(t, e) {
      const { network: n, params: s } = await ht({
        network: this.getNetwork(),
        params: __privateMethod(this, _g0_instances, E_fn).call(this, t, !!e)
      });
      return s == null ? null : this._wrapBlock(s, n);
    }
    async getTransaction(t) {
      const { network: e, params: n } = await ht({
        network: this.getNetwork(),
        params: __privateMethod(this, _g0_instances, c_fn2).call(this, {
          method: "getTransaction",
          hash: t
        })
      });
      return n == null ? null : this._wrapTransactionResponse(n, e);
    }
    async getTransactionReceipt(t) {
      const { network: e, params: n } = await ht({
        network: this.getNetwork(),
        params: __privateMethod(this, _g0_instances, c_fn2).call(this, {
          method: "getTransactionReceipt",
          hash: t
        })
      });
      if (n == null) return null;
      if (n.gasPrice == null && n.effectiveGasPrice == null) {
        const s = await __privateMethod(this, _g0_instances, c_fn2).call(this, {
          method: "getTransaction",
          hash: t
        });
        if (s == null) throw new Error("report this; could not find tx or effectiveGasPrice");
        n.effectiveGasPrice = s.gasPrice;
      }
      return this._wrapTransactionReceipt(n, e);
    }
    async getTransactionResult(t) {
      const { result: e } = await ht({
        network: this.getNetwork(),
        result: __privateMethod(this, _g0_instances, c_fn2).call(this, {
          method: "getTransactionResult",
          hash: t
        })
      });
      return e == null ? null : x(e);
    }
    async getLogs(t) {
      let e = this._getFilter(t);
      Sn(e) && (e = await e);
      const { network: n, params: s } = await ht({
        network: this.getNetwork(),
        params: __privateMethod(this, _g0_instances, c_fn2).call(this, {
          method: "getLogs",
          filter: e
        })
      });
      return s.map((i) => this._wrapLog(i, n));
    }
    _getProvider(t) {
      w(false, "provider cannot connect to target network", "UNSUPPORTED_OPERATION", {
        operation: "_getProvider()"
      });
    }
    async getResolver(t) {
      return await _t.fromName(this, t);
    }
    async getAvatar(t) {
      const e = await this.getResolver(t);
      return e ? await e.getAvatar() : null;
    }
    async resolveName(t, e) {
      const n = await this.getResolver(t);
      return n ? await n.getAddress(e) : null;
    }
    async lookupAddress(t, e) {
      return await _t.lookupAddress(this, t, e);
    }
    async waitForTransaction(t, e, n) {
      const s = e ?? 1;
      return s === 0 ? this.getTransactionReceipt(t) : new Promise(async (i, o) => {
        let a = null;
        const c = (async (l) => {
          try {
            const u = await this.getTransactionReceipt(t);
            if (u != null && l - u.blockNumber + 1 >= s) {
              i(u), a && (clearTimeout(a), a = null);
              return;
            }
          } catch (u) {
            console.log("EEE", u);
          }
          this.once("block", c);
        });
        n != null && (a = setTimeout(() => {
          a != null && (a = null, this.off("block", c), o(Y("timeout", "TIMEOUT", {
            reason: "timeout"
          })));
        }, n)), c(await this.getBlockNumber());
      });
    }
    async waitForBlock(t) {
      w(false, "not implemented yet", "NOT_IMPLEMENTED", {
        operation: "waitForBlock"
      });
    }
    _clearTimeout(t) {
      const e = __privateGet(this, _l4).get(t);
      e && (e.timer && clearTimeout(e.timer), __privateGet(this, _l4).delete(t));
    }
    _setTimeout(t, e) {
      e == null && (e = 0);
      const n = __privateWrapper(this, _d4)._++, s = () => {
        __privateGet(this, _l4).delete(n), t();
      };
      if (this.paused) __privateGet(this, _l4).set(n, {
        timer: null,
        func: s,
        time: e
      });
      else {
        const i = setTimeout(s, e);
        __privateGet(this, _l4).set(n, {
          timer: i,
          func: s,
          time: Ln()
        });
      }
      return n;
    }
    _forEachSubscriber(t) {
      for (const e of __privateGet(this, _t31).values()) t(e.subscriber);
    }
    _getSubscriber(t) {
      switch (t.type) {
        case "debug":
        case "error":
        case "network":
          return new ka(t.type);
        case "block": {
          const e = new a0(this);
          return e.pollingInterval = this.pollingInterval, e;
        }
        case "safe":
        case "finalized":
          return new c0(this, t.type);
        case "event":
          return new xs(this, t.filter);
        case "transaction":
          return new u0(this, t.hash);
        case "orphan":
          return new l0(this, t.filter);
      }
      throw new Error(`unsupported event: ${t.type}`);
    }
    _recoverSubscriber(t, e) {
      for (const n of __privateGet(this, _t31).values()) if (n.subscriber === t) {
        n.started && n.subscriber.stop(), n.subscriber = e, n.started && e.start(), __privateGet(this, _n13) != null && e.pause(__privateGet(this, _n13));
        break;
      }
    }
    async on(t, e) {
      const n = await __privateMethod(this, _g0_instances, A_fn).call(this, t);
      return n.listeners.push({
        listener: e,
        once: false
      }), n.started || (n.subscriber.start(), n.started = true, __privateGet(this, _n13) != null && n.subscriber.pause(__privateGet(this, _n13))), this;
    }
    async once(t, e) {
      const n = await __privateMethod(this, _g0_instances, A_fn).call(this, t);
      return n.listeners.push({
        listener: e,
        once: true
      }), n.started || (n.subscriber.start(), n.started = true, __privateGet(this, _n13) != null && n.subscriber.pause(__privateGet(this, _n13))), this;
    }
    async emit(t, ...e) {
      const n = await __privateMethod(this, _g0_instances, w_fn).call(this, t, e);
      if (!n || n.listeners.length === 0) return false;
      const s = n.listeners.length;
      return n.listeners = n.listeners.filter(({ listener: i, once: o }) => {
        const a = new Zi(this, o ? null : i, t);
        try {
          i.call(this, ...e, a);
        } catch {
        }
        return !o;
      }), n.listeners.length === 0 && (n.started && n.subscriber.stop(), __privateGet(this, _t31).delete(n.tag)), s > 0;
    }
    async listenerCount(t) {
      if (t) {
        const n = await __privateMethod(this, _g0_instances, w_fn).call(this, t);
        return n ? n.listeners.length : 0;
      }
      let e = 0;
      for (const { listeners: n } of __privateGet(this, _t31).values()) e += n.length;
      return e;
    }
    async listeners(t) {
      if (t) {
        const n = await __privateMethod(this, _g0_instances, w_fn).call(this, t);
        return n ? n.listeners.map(({ listener: s }) => s) : [];
      }
      let e = [];
      for (const { listeners: n } of __privateGet(this, _t31).values()) e = e.concat(n.map(({ listener: s }) => s));
      return e;
    }
    async off(t, e) {
      const n = await __privateMethod(this, _g0_instances, w_fn).call(this, t);
      if (!n) return this;
      if (e) {
        const s = n.listeners.map(({ listener: i }) => i).indexOf(e);
        s >= 0 && n.listeners.splice(s, 1);
      }
      return (!e || n.listeners.length === 0) && (n.started && n.subscriber.stop(), __privateGet(this, _t31).delete(n.tag)), this;
    }
    async removeAllListeners(t) {
      if (t) {
        const { tag: e, started: n, subscriber: s } = await __privateMethod(this, _g0_instances, A_fn).call(this, t);
        n && s.stop(), __privateGet(this, _t31).delete(e);
      } else for (const [e, { started: n, subscriber: s }] of __privateGet(this, _t31)) n && s.stop(), __privateGet(this, _t31).delete(e);
      return this;
    }
    async addListener(t, e) {
      return await this.on(t, e);
    }
    async removeListener(t, e) {
      return this.off(t, e);
    }
    get destroyed() {
      return __privateGet(this, _r10);
    }
    destroy() {
      this.removeAllListeners();
      for (const t of __privateGet(this, _l4).keys()) this._clearTimeout(t);
      __privateSet(this, _r10, true);
    }
    get paused() {
      return __privateGet(this, _n13) != null;
    }
    set paused(t) {
      !!t !== this.paused && (this.paused ? this.resume() : this.pause(false));
    }
    pause(t) {
      if (__privateSet(this, _a5, -1), __privateGet(this, _n13) != null) {
        if (__privateGet(this, _n13) == !!t) return;
        w(false, "cannot change pause type; resume first", "UNSUPPORTED_OPERATION", {
          operation: "pause"
        });
      }
      this._forEachSubscriber((e) => e.pause(t)), __privateSet(this, _n13, !!t);
      for (const e of __privateGet(this, _l4).values()) e.timer && clearTimeout(e.timer), e.time = Ln() - e.time;
    }
    resume() {
      if (__privateGet(this, _n13) != null) {
        this._forEachSubscriber((t) => t.resume()), __privateSet(this, _n13, null);
        for (const t of __privateGet(this, _l4).values()) {
          let e = t.time;
          e < 0 && (e = 0), t.time = Ln(), setTimeout(t.func, e);
        }
      }
    }
  }
  _t31 = new WeakMap();
  _e19 = new WeakMap();
  _n13 = new WeakMap();
  _r10 = new WeakMap();
  _s7 = new WeakMap();
  _o5 = new WeakMap();
  _i4 = new WeakMap();
  _a5 = new WeakMap();
  _d4 = new WeakMap();
  _l4 = new WeakMap();
  _g3 = new WeakMap();
  _p3 = new WeakMap();
  _h3 = new WeakMap();
  _u4 = new WeakMap();
  _g0_instances = new WeakSet();
  f_fn = function() {
    let t = __privateGet(this, _p3);
    if (t === 0) return 0;
    const e = __privateGet(this, _h3), n = Ln();
    e.push(n);
    const s = n - 1e3;
    for (; e.length && e[0] < s; ) e.shift();
    return e.length < t ? 0 : e[0] + 1e3 - n;
  };
  c_fn2 = async function(t) {
    const e = __privateGet(this, _u4).cacheTimeout;
    if (e < 0) {
      const i = __privateMethod(this, _g0_instances, f_fn).call(this);
      return i && await Tr(i), await this._perform(t);
    }
    const n = Mn(t.method, t);
    let s = __privateGet(this, _i4).get(n);
    if (!s) {
      const i = __privateMethod(this, _g0_instances, f_fn).call(this);
      i && await Tr(i), s = this._perform(t), __privateGet(this, _i4).set(n, s), setTimeout(() => {
        __privateGet(this, _i4).get(n) === s && __privateGet(this, _i4).delete(n);
      }, e);
    }
    return await s;
  };
  m_fn = async function(t, e, n) {
    w(n < h0, "CCIP read exceeded maximum redirections", "OFFCHAIN_FAULT", {
      reason: "TOO_MANY_REDIRECTS",
      transaction: Object.assign({}, t, {
        blockTag: e,
        enableCcipRead: true
      })
    });
    const s = Zn(t);
    try {
      const i = __privateMethod(this, _g0_instances, f_fn).call(this);
      return i && await Tr(i), x(await this._perform({
        method: "call",
        transaction: s,
        blockTag: e
      }));
    } catch (i) {
      if (!this.disableCcipRead && Xr(i) && i.data && n >= 0 && e === "latest" && s.to != null && $(i.data, 0, 4) === "0x556f1830") {
        const o = i.data, a = await gt(s.to, this);
        let c;
        try {
          c = A0($(i.data, 4));
        } catch (f) {
          w(false, f.message, "OFFCHAIN_FAULT", {
            reason: "BAD_DATA",
            transaction: s,
            info: {
              data: o
            }
          });
        }
        w(c.sender.toLowerCase() === a.toLowerCase(), "CCIP Read sender mismatch", "CALL_EXCEPTION", {
          action: "call",
          data: o,
          reason: "OffchainLookup",
          transaction: s,
          invocation: null,
          revert: {
            signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)",
            name: "OffchainLookup",
            args: c.errorArgs
          }
        });
        const l = await this.ccipReadFetch(s, c.calldata, c.urls);
        w(l != null, "CCIP Read failed to fetch data", "OFFCHAIN_FAULT", {
          reason: "FETCH_FAILED",
          transaction: s,
          info: {
            data: i.data,
            errorArgs: c.errorArgs
          }
        });
        const u = {
          to: a,
          data: Z([
            c.selector,
            w0([
              l,
              c.extraData
            ])
          ])
        };
        this.emit("debug", {
          action: "sendCcipReadCall",
          transaction: u
        });
        try {
          const f = await __privateMethod(this, _g0_instances, m_fn).call(this, u, e, n + 1);
          return this.emit("debug", {
            action: "receiveCcipReadCallResult",
            transaction: Object.assign({}, u),
            result: f
          }), f;
        } catch (f) {
          throw this.emit("debug", {
            action: "receiveCcipReadCallError",
            transaction: Object.assign({}, u),
            error: f
          }), f;
        }
      }
      throw i;
    }
  };
  b_fn = async function(t) {
    const { value: e } = await ht({
      network: this.getNetwork(),
      value: t
    });
    return e;
  };
  y_fn2 = async function(t, e, n) {
    let s = this._getAddress(e), i = this._getBlockTag(n);
    return (typeof s != "string" || typeof i != "string") && ([s, i] = await Promise.all([
      s,
      i
    ])), await __privateMethod(this, _g0_instances, b_fn).call(this, __privateMethod(this, _g0_instances, c_fn2).call(this, Object.assign(t, {
      address: s,
      blockTag: i
    })));
  };
  E_fn = async function(t, e) {
    if (_(t, 32)) return await __privateMethod(this, _g0_instances, c_fn2).call(this, {
      method: "getBlock",
      blockHash: t,
      includeTransactions: e
    });
    let n = this._getBlockTag(t);
    return typeof n != "string" && (n = await n), await __privateMethod(this, _g0_instances, c_fn2).call(this, {
      method: "getBlock",
      blockTag: n,
      includeTransactions: e
    });
  };
  w_fn = async function(t, e) {
    let n = await vr(t, this);
    return n.type === "event" && e && e.length > 0 && e[0].removed === true && (n = await vr({
      orphan: "drop-log",
      log: e[0]
    }, this)), __privateGet(this, _t31).get(n.tag) || null;
  };
  A_fn = async function(t) {
    const e = await vr(t, this), n = e.tag;
    let s = __privateGet(this, _t31).get(n);
    return s || (s = {
      subscriber: this._getSubscriber(e),
      tag: n,
      addressableMap: /* @__PURE__ */ new WeakMap(),
      nameMap: /* @__PURE__ */ new Map(),
      started: false,
      listeners: []
    }, __privateGet(this, _t31).set(n, s)), s;
  };
  function y0(r, t) {
    try {
      const e = Zr(r, t);
      if (e) return Vn(e);
    } catch {
    }
    return null;
  }
  function Zr(r, t) {
    if (r === "0x") return null;
    try {
      const e = U($(r, t, t + 32)), n = U($(r, e, e + 32));
      return $(r, e + 32, e + 32 + n);
    } catch {
    }
    return null;
  }
  function Gi(r) {
    const t = st(r);
    if (t.length > 32) throw new Error("internal; should not happen");
    const e = new Uint8Array(32);
    return e.set(t, 32 - t.length), e;
  }
  function m0(r) {
    if (r.length % 32 === 0) return r;
    const t = new Uint8Array(Math.ceil(r.length / 32) * 32);
    return t.set(r), t;
  }
  const b0 = new Uint8Array([]);
  function w0(r) {
    const t = [];
    let e = 0;
    for (let n = 0; n < r.length; n++) t.push(b0), e += 32;
    for (let n = 0; n < r.length; n++) {
      const s = S(r[n]);
      t[n] = Gi(e), t.push(Gi(s.length)), t.push(m0(s)), e += 32 + Math.ceil(s.length / 32) * 32;
    }
    return Z(t);
  }
  const Mi = "0x0000000000000000000000000000000000000000000000000000000000000000";
  function A0(r) {
    const t = {
      sender: "",
      urls: [],
      calldata: "",
      selector: "",
      extraData: "",
      errorArgs: []
    };
    w(Ge(r) >= 160, "insufficient OffchainLookup data", "OFFCHAIN_FAULT", {
      reason: "insufficient OffchainLookup data"
    });
    const e = $(r, 0, 32);
    w($(e, 0, 12) === $(Mi, 0, 12), "corrupt OffchainLookup sender", "OFFCHAIN_FAULT", {
      reason: "corrupt OffchainLookup sender"
    }), t.sender = $(e, 12);
    try {
      const n = [], s = U($(r, 32, 64)), i = U($(r, s, s + 32)), o = $(r, s + 32);
      for (let a = 0; a < i; a++) {
        const c = y0(o, a * 32);
        if (c == null) throw new Error("abort");
        n.push(c);
      }
      t.urls = n;
    } catch {
      w(false, "corrupt OffchainLookup urls", "OFFCHAIN_FAULT", {
        reason: "corrupt OffchainLookup urls"
      });
    }
    try {
      const n = Zr(r, 64);
      if (n == null) throw new Error("abort");
      t.calldata = n;
    } catch {
      w(false, "corrupt OffchainLookup calldata", "OFFCHAIN_FAULT", {
        reason: "corrupt OffchainLookup calldata"
      });
    }
    w($(r, 100, 128) === $(Mi, 0, 28), "corrupt OffchainLookup callbaackSelector", "OFFCHAIN_FAULT", {
      reason: "corrupt OffchainLookup callbaackSelector"
    }), t.selector = $(r, 96, 100);
    try {
      const n = Zr(r, 128);
      if (n == null) throw new Error("abort");
      t.extraData = n;
    } catch {
      w(false, "corrupt OffchainLookup extraData", "OFFCHAIN_FAULT", {
        reason: "corrupt OffchainLookup extraData"
      });
    }
    return t.errorArgs = "sender,urls,calldata,selector,extraData".split(/,/).map((n) => t[n]), t;
  }
  function pe(r, t) {
    if (r.provider) return r.provider;
    w(false, "missing provider", "UNSUPPORTED_OPERATION", {
      operation: t
    });
  }
  async function Hi(r, t) {
    let e = Zn(t);
    if (e.to != null && (e.to = gt(e.to, r)), e.from != null) {
      const n = e.from;
      e.from = Promise.all([
        r.getAddress(),
        gt(n, r)
      ]).then(([s, i]) => (d(s.toLowerCase() === i.toLowerCase(), "transaction from mismatch", "tx.from", i), s));
    } else e.from = r.getAddress();
    return await ht(e);
  }
  Oa = class {
    constructor(t) {
      __publicField(this, "provider");
      k(this, {
        provider: t || null
      });
    }
    async getNonce(t) {
      return pe(this, "getTransactionCount").getTransactionCount(await this.getAddress(), t);
    }
    async populateCall(t) {
      return await Hi(this, t);
    }
    async populateTransaction(t) {
      const e = pe(this, "populateTransaction"), n = await Hi(this, t);
      n.nonce == null && (n.nonce = await this.getNonce("pending")), n.gasLimit == null && (n.gasLimit = await this.estimateGas(n));
      const s = await this.provider.getNetwork();
      if (n.chainId != null) {
        const o = B(n.chainId);
        d(o === s.chainId, "transaction chainId mismatch", "tx.chainId", t.chainId);
      } else n.chainId = s.chainId;
      const i = n.maxFeePerGas != null || n.maxPriorityFeePerGas != null;
      if (n.gasPrice != null && (n.type === 2 || i) ? d(false, "eip-1559 transaction do not support gasPrice", "tx", t) : (n.type === 0 || n.type === 1) && i && d(false, "pre-eip-1559 transaction do not support maxFeePerGas/maxPriorityFeePerGas", "tx", t), (n.type === 2 || n.type == null) && n.maxFeePerGas != null && n.maxPriorityFeePerGas != null) n.type = 2;
      else if (n.type === 0 || n.type === 1) {
        const o = await e.getFeeData();
        w(o.gasPrice != null, "network does not support gasPrice", "UNSUPPORTED_OPERATION", {
          operation: "getGasPrice"
        }), n.gasPrice == null && (n.gasPrice = o.gasPrice);
      } else {
        const o = await e.getFeeData();
        if (n.type == null) if (o.maxFeePerGas != null && o.maxPriorityFeePerGas != null) if (n.authorizationList && n.authorizationList.length ? n.type = 4 : n.type = 2, n.gasPrice != null) {
          const a = n.gasPrice;
          delete n.gasPrice, n.maxFeePerGas = a, n.maxPriorityFeePerGas = a;
        } else n.maxFeePerGas == null && (n.maxFeePerGas = o.maxFeePerGas), n.maxPriorityFeePerGas == null && (n.maxPriorityFeePerGas = o.maxPriorityFeePerGas);
        else o.gasPrice != null ? (w(!i, "network does not support EIP-1559", "UNSUPPORTED_OPERATION", {
          operation: "populateTransaction"
        }), n.gasPrice == null && (n.gasPrice = o.gasPrice), n.type = 0) : w(false, "failed to get consistent fee data", "UNSUPPORTED_OPERATION", {
          operation: "signer.getFeeData"
        });
        else (n.type === 2 || n.type === 3 || n.type === 4) && (n.maxFeePerGas == null && (n.maxFeePerGas = o.maxFeePerGas), n.maxPriorityFeePerGas == null && (n.maxPriorityFeePerGas = o.maxPriorityFeePerGas));
      }
      return await ht(n);
    }
    async populateAuthorization(t) {
      const e = Object.assign({}, t);
      return e.chainId == null && (e.chainId = (await pe(this, "getNetwork").getNetwork()).chainId), e.nonce == null && (e.nonce = await this.getNonce()), e;
    }
    async estimateGas(t) {
      return pe(this, "estimateGas").estimateGas(await this.populateCall(t));
    }
    async call(t) {
      return pe(this, "call").call(await this.populateCall(t));
    }
    async resolveName(t) {
      return await pe(this, "resolveName").resolveName(t);
    }
    async sendTransaction(t) {
      const e = pe(this, "sendTransaction"), n = await this.populateTransaction(t);
      delete n.from;
      const s = Ot.from(n);
      return await e.broadcastTransaction(await this.signTransaction(s));
    }
    authorize(t) {
      w(false, "authorization not implemented for this signer", "UNSUPPORTED_OPERATION", {
        operation: "authorize"
      });
    }
  };
  Ra = (_e20 = class extends Oa {
    constructor(t, e) {
      super(e);
      __privateAdd(this, _Ra_instances);
      __publicField(this, "address");
      k(this, {
        address: t
      });
    }
    async getAddress() {
      return this.address;
    }
    connect(t) {
      return new Ra(this.address, t);
    }
    async signTransaction(t) {
      __privateMethod(this, _Ra_instances, t_fn3).call(this, "transactions", "signTransaction");
    }
    async signMessage(t) {
      __privateMethod(this, _Ra_instances, t_fn3).call(this, "messages", "signMessage");
    }
    async signTypedData(t, e, n) {
      __privateMethod(this, _Ra_instances, t_fn3).call(this, "typed-data", "signTypedData");
    }
  }, _Ra_instances = new WeakSet(), t_fn3 = function(t, e) {
    w(false, `VoidSigner cannot sign ${t}`, "UNSUPPORTED_OPERATION", {
      operation: e
    });
  }, _e20);
  function E0(r) {
    return JSON.parse(JSON.stringify(r));
  }
  class Sa {
    constructor(t) {
      __privateAdd(this, _Sa_instances);
      __privateAdd(this, _t32);
      __privateAdd(this, _e21);
      __privateAdd(this, _n14);
      __privateAdd(this, _r11);
      __privateAdd(this, _s8);
      __privateAdd(this, _o6);
      __privateSet(this, _t32, t), __privateSet(this, _e21, null), __privateSet(this, _n14, __privateMethod(this, _Sa_instances, i_fn2).bind(this)), __privateSet(this, _r11, false), __privateSet(this, _s8, null), __privateSet(this, _o6, false);
    }
    _subscribe(t) {
      throw new Error("subclasses must override this");
    }
    _emitResults(t, e) {
      throw new Error("subclasses must override this");
    }
    _recover(t) {
      throw new Error("subclasses must override this");
    }
    start() {
      __privateGet(this, _r11) || (__privateSet(this, _r11, true), __privateMethod(this, _Sa_instances, i_fn2).call(this, -2));
    }
    stop() {
      __privateGet(this, _r11) && (__privateSet(this, _r11, false), __privateSet(this, _o6, true), __privateMethod(this, _Sa_instances, a_fn).call(this), __privateGet(this, _t32).off("block", __privateGet(this, _n14)));
    }
    pause(t) {
      t && __privateMethod(this, _Sa_instances, a_fn).call(this), __privateGet(this, _t32).off("block", __privateGet(this, _n14));
    }
    resume() {
      this.start();
    }
  }
  _t32 = new WeakMap();
  _e21 = new WeakMap();
  _n14 = new WeakMap();
  _r11 = new WeakMap();
  _s8 = new WeakMap();
  _o6 = new WeakMap();
  _Sa_instances = new WeakSet();
  i_fn2 = async function(t) {
    try {
      __privateGet(this, _e21) == null && __privateSet(this, _e21, this._subscribe(__privateGet(this, _t32)));
      let e = null;
      try {
        e = await __privateGet(this, _e21);
      } catch (i) {
        if (!lt(i, "UNSUPPORTED_OPERATION") || i.operation !== "eth_newFilter") throw i;
      }
      if (e == null) {
        __privateSet(this, _e21, null), __privateGet(this, _t32)._recoverSubscriber(this, this._recover(__privateGet(this, _t32)));
        return;
      }
      const n = await __privateGet(this, _t32).getNetwork();
      if (__privateGet(this, _s8) || __privateSet(this, _s8, n), __privateGet(this, _s8).chainId !== n.chainId) throw new Error("chaid changed");
      if (__privateGet(this, _o6)) return;
      const s = await __privateGet(this, _t32).send("eth_getFilterChanges", [
        e
      ]);
      await this._emitResults(__privateGet(this, _t32), s);
    } catch (e) {
      console.log("@TODO", e);
    }
    __privateGet(this, _t32).once("block", __privateGet(this, _n14));
  };
  a_fn = function() {
    const t = __privateGet(this, _e21);
    t && (__privateSet(this, _e21, null), t.then((e) => {
      __privateGet(this, _t32).destroyed || __privateGet(this, _t32).send("eth_uninstallFilter", [
        e
      ]);
    }));
  };
  class x0 extends Sa {
    constructor(t, e) {
      super(t);
      __privateAdd(this, _t33);
      __privateSet(this, _t33, E0(e));
    }
    _recover(t) {
      return new xs(t, __privateGet(this, _t33));
    }
    async _subscribe(t) {
      return await t.send("eth_newFilter", [
        __privateGet(this, _t33)
      ]);
    }
    async _emitResults(t, e) {
      for (const n of e) t.emit(__privateGet(this, _t33), t._wrapLog(n, t._network));
    }
  }
  _t33 = new WeakMap();
  class P0 extends Sa {
    async _subscribe(t) {
      return await t.send("eth_newPendingTransactionFilter", []);
    }
    async _emitResults(t, e) {
      for (const n of e) t.emit("pending", n);
    }
  }
  const B0 = "bigint,boolean,function,number,string,symbol".split(/,/g);
  function Hn(r) {
    if (r == null || B0.indexOf(typeof r) >= 0 || typeof r.getAddress == "function") return r;
    if (Array.isArray(r)) return r.map(Hn);
    if (typeof r == "object") return Object.keys(r).reduce((t, e) => (t[e] = r[e], t), {});
    throw new Error(`should not happen: ${r} (${typeof r})`);
  }
  function N0(r) {
    return new Promise((t) => {
      setTimeout(t, r);
    });
  }
  function Le(r) {
    return r && r.toLowerCase();
  }
  function Qi(r) {
    return r && typeof r.pollingInterval == "number";
  }
  const La = {
    polling: false,
    staticNetwork: null,
    batchStallTime: 10,
    batchMaxSize: 1 << 20,
    batchMaxCount: 100,
    cacheTimeout: 250,
    pollingInterval: 4e3
  };
  class Cr extends Oa {
    constructor(t, e) {
      super(t);
      __publicField(this, "address");
      e = M(e), k(this, {
        address: e
      });
    }
    connect(t) {
      w(false, "cannot reconnect JsonRpcSigner", "UNSUPPORTED_OPERATION", {
        operation: "signer.connect"
      });
    }
    async getAddress() {
      return this.address;
    }
    async populateTransaction(t) {
      return await this.populateCall(t);
    }
    async sendUncheckedTransaction(t) {
      const e = Hn(t), n = [];
      if (e.from) {
        const i = e.from;
        n.push((async () => {
          const o = await gt(i, this.provider);
          d(o != null && o.toLowerCase() === this.address.toLowerCase(), "from address mismatch", "transaction", t), e.from = o;
        })());
      } else e.from = this.address;
      if (e.gasLimit == null && n.push((async () => {
        e.gasLimit = await this.provider.estimateGas({
          ...e,
          from: this.address
        });
      })()), e.to != null) {
        const i = e.to;
        n.push((async () => {
          e.to = await gt(i, this.provider);
        })());
      }
      n.length && await Promise.all(n);
      const s = this.provider.getRpcTransaction(e);
      return this.provider.send("eth_sendTransaction", [
        s
      ]);
    }
    async sendTransaction(t) {
      const e = await this.provider.getBlockNumber(), n = await this.sendUncheckedTransaction(t);
      return await new Promise((s, i) => {
        const o = [
          1e3,
          100
        ];
        let a = 0;
        const c = async () => {
          try {
            const l = await this.provider.getTransaction(n);
            if (l != null) {
              s(l.replaceableTransaction(e));
              return;
            }
          } catch (l) {
            if (lt(l, "CANCELLED") || lt(l, "BAD_DATA") || lt(l, "NETWORK_ERROR") || lt(l, "UNSUPPORTED_OPERATION")) {
              l.info == null && (l.info = {}), l.info.sendTransactionHash = n, i(l);
              return;
            }
            if (lt(l, "INVALID_ARGUMENT") && (a++, l.info == null && (l.info = {}), l.info.sendTransactionHash = n, a > 10)) {
              i(l);
              return;
            }
            this.provider.emit("error", Y("failed to fetch transation after sending (will try again)", "UNKNOWN_ERROR", {
              error: l
            }));
          }
          this.provider._setTimeout(() => {
            c();
          }, o.pop() || 4e3);
        };
        c();
      });
    }
    async signTransaction(t) {
      const e = Hn(t);
      if (e.from) {
        const s = await gt(e.from, this.provider);
        d(s != null && s.toLowerCase() === this.address.toLowerCase(), "from address mismatch", "transaction", t), e.from = s;
      } else e.from = this.address;
      const n = this.provider.getRpcTransaction(e);
      return await this.provider.send("eth_signTransaction", [
        n
      ]);
    }
    async signMessage(t) {
      const e = typeof t == "string" ? Zt(t) : t;
      return await this.provider.send("personal_sign", [
        x(e),
        this.address.toLowerCase()
      ]);
    }
    async signTypedData(t, e, n) {
      const s = Hn(n), i = await xt.resolveNames(t, e, s, async (o) => {
        const a = await gt(o);
        return d(a != null, "TypedData does not support null address", "value", o), a;
      });
      return await this.provider.send("eth_signTypedData_v4", [
        this.address.toLowerCase(),
        JSON.stringify(xt.getPayload(i.domain, e, i.value))
      ]);
    }
    async unlock(t) {
      return this.provider.send("personal_unlockAccount", [
        this.address.toLowerCase(),
        t,
        null
      ]);
    }
    async _legacySignMessage(t) {
      const e = typeof t == "string" ? Zt(t) : t;
      return await this.provider.send("eth_sign", [
        this.address.toLowerCase(),
        x(e)
      ]);
    }
  }
  class I0 extends g0 {
    constructor(t, e) {
      super(t, e);
      __privateAdd(this, _I0_instances);
      __privateAdd(this, _t34);
      __privateAdd(this, _e22);
      __privateAdd(this, _n15);
      __privateAdd(this, _r12);
      __privateAdd(this, _s9);
      __privateAdd(this, _o7);
      __privateAdd(this, _i5);
      __privateSet(this, _e22, 1), __privateSet(this, _t34, Object.assign({}, La, e || {})), __privateSet(this, _n15, []), __privateSet(this, _r12, null), __privateSet(this, _o7, null), __privateSet(this, _i5, null);
      {
        let s = null;
        const i = new Promise((o) => {
          s = o;
        });
        __privateSet(this, _s9, {
          promise: i,
          resolve: s
        });
      }
      const n = this._getOption("staticNetwork");
      typeof n == "boolean" ? (d(!n || t !== "any", "staticNetwork cannot be used on special network 'any'", "options", e), n && t != null && __privateSet(this, _o7, Bt.from(t))) : n && (d(t == null || n.matches(t), "staticNetwork MUST match network object", "options", e), __privateSet(this, _o7, n));
    }
    _getOption(t) {
      return __privateGet(this, _t34)[t];
    }
    get _network() {
      return w(__privateGet(this, _o7), "network is not available yet", "NETWORK_ERROR"), __privateGet(this, _o7);
    }
    async _perform(t) {
      if (t.method === "call" || t.method === "estimateGas") {
        let n = t.transaction;
        if (n && n.type != null && B(n.type) && n.maxFeePerGas == null && n.maxPriorityFeePerGas == null) {
          const s = await this.getFeeData();
          s.maxFeePerGas == null && s.maxPriorityFeePerGas == null && (t = Object.assign({}, t, {
            transaction: Object.assign({}, n, {
              type: void 0
            })
          }));
        }
      }
      const e = this.getRpcRequest(t);
      return e != null ? await this.send(e.method, e.args) : super._perform(t);
    }
    async _detectNetwork() {
      const t = this._getOption("staticNetwork");
      if (t) if (t === true) {
        if (__privateGet(this, _o7)) return __privateGet(this, _o7);
      } else return t;
      return __privateGet(this, _i5) ? await __privateGet(this, _i5) : this.ready ? (__privateSet(this, _i5, (async () => {
        try {
          const e = Bt.from(B(await this.send("eth_chainId", [])));
          return __privateSet(this, _i5, null), e;
        } catch (e) {
          throw __privateSet(this, _i5, null), e;
        }
      })()), await __privateGet(this, _i5)) : (__privateSet(this, _i5, (async () => {
        const e = {
          id: __privateWrapper(this, _e22)._++,
          method: "eth_chainId",
          params: [],
          jsonrpc: "2.0"
        };
        this.emit("debug", {
          action: "sendRpcPayload",
          payload: e
        });
        let n;
        try {
          n = (await this._send(e))[0], __privateSet(this, _i5, null);
        } catch (s) {
          throw __privateSet(this, _i5, null), this.emit("debug", {
            action: "receiveRpcError",
            error: s
          }), s;
        }
        if (this.emit("debug", {
          action: "receiveRpcResult",
          result: n
        }), "result" in n) return Bt.from(B(n.result));
        throw this.getRpcError(e, n);
      })()), await __privateGet(this, _i5));
    }
    _start() {
      __privateGet(this, _s9) == null || __privateGet(this, _s9).resolve == null || (__privateGet(this, _s9).resolve(), __privateSet(this, _s9, null), (async () => {
        for (; __privateGet(this, _o7) == null && !this.destroyed; ) try {
          __privateSet(this, _o7, await this._detectNetwork());
        } catch (t) {
          if (this.destroyed) break;
          console.log("JsonRpcProvider failed to detect network and cannot start up; retry in 1s (perhaps the URL is wrong or the node is not started)"), this.emit("error", Y("failed to bootstrap network detection", "NETWORK_ERROR", {
            event: "initial-network-discovery",
            info: {
              error: t
            }
          })), await N0(1e3);
        }
        __privateMethod(this, _I0_instances, a_fn2).call(this);
      })());
    }
    async _waitUntilReady() {
      if (__privateGet(this, _s9) != null) return await __privateGet(this, _s9).promise;
    }
    _getSubscriber(t) {
      return t.type === "pending" ? new P0(this) : t.type === "event" ? this._getOption("polling") ? new xs(this, t.filter) : new x0(this, t.filter) : t.type === "orphan" && t.filter.orphan === "drop-log" ? new ka("orphan") : super._getSubscriber(t);
    }
    get ready() {
      return __privateGet(this, _s9) == null;
    }
    getRpcTransaction(t) {
      const e = {};
      return [
        "chainId",
        "gasLimit",
        "gasPrice",
        "type",
        "maxFeePerGas",
        "maxPriorityFeePerGas",
        "nonce",
        "value"
      ].forEach((n) => {
        if (t[n] == null) return;
        let s = n;
        n === "gasLimit" && (s = "gas"), e[s] = Rt(B(t[n], `tx.${n}`));
      }), [
        "from",
        "to",
        "data"
      ].forEach((n) => {
        t[n] != null && (e[n] = x(t[n]));
      }), t.accessList && (e.accessList = Ce(t.accessList)), t.blobVersionedHashes && (e.blobVersionedHashes = t.blobVersionedHashes.map((n) => n.toLowerCase())), t.authorizationList && (e.authorizationList = t.authorizationList.map((n) => {
        const s = Do(n);
        return {
          address: s.address,
          nonce: Rt(s.nonce),
          chainId: Rt(s.chainId),
          yParity: Rt(s.signature.yParity),
          r: Rt(s.signature.r),
          s: Rt(s.signature.s)
        };
      })), e;
    }
    getRpcRequest(t) {
      switch (t.method) {
        case "chainId":
          return {
            method: "eth_chainId",
            args: []
          };
        case "getBlockNumber":
          return {
            method: "eth_blockNumber",
            args: []
          };
        case "getGasPrice":
          return {
            method: "eth_gasPrice",
            args: []
          };
        case "getPriorityFee":
          return {
            method: "eth_maxPriorityFeePerGas",
            args: []
          };
        case "getBalance":
          return {
            method: "eth_getBalance",
            args: [
              Le(t.address),
              t.blockTag
            ]
          };
        case "getTransactionCount":
          return {
            method: "eth_getTransactionCount",
            args: [
              Le(t.address),
              t.blockTag
            ]
          };
        case "getCode":
          return {
            method: "eth_getCode",
            args: [
              Le(t.address),
              t.blockTag
            ]
          };
        case "getStorage":
          return {
            method: "eth_getStorageAt",
            args: [
              Le(t.address),
              "0x" + t.position.toString(16),
              t.blockTag
            ]
          };
        case "broadcastTransaction":
          return {
            method: "eth_sendRawTransaction",
            args: [
              t.signedTransaction
            ]
          };
        case "getBlock":
          if ("blockTag" in t) return {
            method: "eth_getBlockByNumber",
            args: [
              t.blockTag,
              !!t.includeTransactions
            ]
          };
          if ("blockHash" in t) return {
            method: "eth_getBlockByHash",
            args: [
              t.blockHash,
              !!t.includeTransactions
            ]
          };
          break;
        case "getTransaction":
          return {
            method: "eth_getTransactionByHash",
            args: [
              t.hash
            ]
          };
        case "getTransactionReceipt":
          return {
            method: "eth_getTransactionReceipt",
            args: [
              t.hash
            ]
          };
        case "call":
          return {
            method: "eth_call",
            args: [
              this.getRpcTransaction(t.transaction),
              t.blockTag
            ]
          };
        case "estimateGas":
          return {
            method: "eth_estimateGas",
            args: [
              this.getRpcTransaction(t.transaction)
            ]
          };
        case "getLogs":
          return t.filter && t.filter.address != null && (Array.isArray(t.filter.address) ? t.filter.address = t.filter.address.map(Le) : t.filter.address = Le(t.filter.address)), {
            method: "eth_getLogs",
            args: [
              t.filter
            ]
          };
      }
      return null;
    }
    getRpcError(t, e) {
      const { method: n } = t, { error: s } = e;
      if (n === "eth_estimateGas" && s.message) {
        const a = s.message;
        if (!a.match(/revert/i) && a.match(/insufficient funds/i)) return Y("insufficient funds", "INSUFFICIENT_FUNDS", {
          transaction: t.params[0],
          info: {
            payload: t,
            error: s
          }
        });
        if (a.match(/nonce/i) && a.match(/too low/i)) return Y("nonce has already been used", "NONCE_EXPIRED", {
          transaction: t.params[0],
          info: {
            payload: t,
            error: s
          }
        });
      }
      if (n === "eth_call" || n === "eth_estimateGas") {
        const a = Yr(s), c = je.getBuiltinCallException(n === "eth_call" ? "call" : "estimateGas", t.params[0], a ? a.data : null);
        return c.info = {
          error: s,
          payload: t
        }, c;
      }
      const i = JSON.stringify(C0(s));
      if (typeof s.message == "string" && s.message.match(/user denied|ethers-user-denied/i)) return Y("user rejected action", "ACTION_REJECTED", {
        action: {
          eth_sign: "signMessage",
          personal_sign: "signMessage",
          eth_signTypedData_v4: "signTypedData",
          eth_signTransaction: "signTransaction",
          eth_sendTransaction: "sendTransaction",
          eth_requestAccounts: "requestAccess",
          wallet_requestAccounts: "requestAccess"
        }[n] || "unknown",
        reason: "rejected",
        info: {
          payload: t,
          error: s
        }
      });
      if (n === "eth_sendRawTransaction" || n === "eth_sendTransaction") {
        const a = t.params[0];
        if (i.match(/insufficient funds|base fee exceeds gas limit/i)) return Y("insufficient funds for intrinsic transaction cost", "INSUFFICIENT_FUNDS", {
          transaction: a,
          info: {
            error: s
          }
        });
        if (i.match(/nonce/i) && i.match(/too low/i)) return Y("nonce has already been used", "NONCE_EXPIRED", {
          transaction: a,
          info: {
            error: s
          }
        });
        if (i.match(/replacement transaction/i) && i.match(/underpriced/i)) return Y("replacement fee too low", "REPLACEMENT_UNDERPRICED", {
          transaction: a,
          info: {
            error: s
          }
        });
        if (i.match(/only replay-protected/i)) return Y("legacy pre-eip-155 transactions not supported", "UNSUPPORTED_OPERATION", {
          operation: n,
          info: {
            transaction: a,
            info: {
              error: s
            }
          }
        });
      }
      let o = !!i.match(/the method .* does not exist/i);
      return o || s && s.details && s.details.startsWith("Unauthorized method:") && (o = true), o ? Y("unsupported operation", "UNSUPPORTED_OPERATION", {
        operation: t.method,
        info: {
          error: s,
          payload: t
        }
      }) : Y("could not coalesce error", "UNKNOWN_ERROR", {
        error: s,
        payload: t
      });
    }
    send(t, e) {
      if (this.destroyed) return Promise.reject(Y("provider destroyed; cancelled request", "UNSUPPORTED_OPERATION", {
        operation: t
      }));
      const n = __privateWrapper(this, _e22)._++, s = new Promise((i, o) => {
        __privateGet(this, _n15).push({
          resolve: i,
          reject: o,
          payload: {
            method: t,
            params: e,
            id: n,
            jsonrpc: "2.0"
          }
        });
      });
      return __privateMethod(this, _I0_instances, a_fn2).call(this), s;
    }
    async getSigner(t) {
      t == null && (t = 0);
      const e = this.send("eth_accounts", []);
      if (typeof t == "number") {
        const s = await e;
        if (t >= s.length) throw new Error("no such account");
        return new Cr(this, s[t]);
      }
      const { accounts: n } = await ht({
        network: this.getNetwork(),
        accounts: e
      });
      t = M(t);
      for (const s of n) if (M(s) === t) return new Cr(this, t);
      throw new Error("invalid account");
    }
    async listAccounts() {
      return (await this.send("eth_accounts", [])).map((e) => new Cr(this, e));
    }
    destroy() {
      __privateGet(this, _r12) && (clearTimeout(__privateGet(this, _r12)), __privateSet(this, _r12, null));
      for (const { payload: t, reject: e } of __privateGet(this, _n15)) e(Y("provider destroyed; cancelled request", "UNSUPPORTED_OPERATION", {
        operation: t.method
      }));
      __privateSet(this, _n15, []), super.destroy();
    }
  }
  _t34 = new WeakMap();
  _e22 = new WeakMap();
  _n15 = new WeakMap();
  _r12 = new WeakMap();
  _s9 = new WeakMap();
  _o7 = new WeakMap();
  _i5 = new WeakMap();
  _I0_instances = new WeakSet();
  a_fn2 = function() {
    if (__privateGet(this, _r12)) return;
    const t = this._getOption("batchMaxCount") === 1 ? 0 : this._getOption("batchStallTime");
    __privateSet(this, _r12, setTimeout(() => {
      __privateSet(this, _r12, null);
      const e = __privateGet(this, _n15);
      for (__privateSet(this, _n15, []); e.length; ) {
        const n = [
          e.shift()
        ];
        for (; e.length && n.length !== __privateGet(this, _t34).batchMaxCount; ) if (n.push(e.shift()), JSON.stringify(n.map((i) => i.payload)).length > __privateGet(this, _t34).batchMaxSize) {
          e.unshift(n.pop());
          break;
        }
        (async () => {
          const s = n.length === 1 ? n[0].payload : n.map((i) => i.payload);
          this.emit("debug", {
            action: "sendRpcPayload",
            payload: s
          });
          try {
            const i = await this._send(s);
            this.emit("debug", {
              action: "receiveRpcResult",
              result: i
            });
            for (const { resolve: o, reject: a, payload: c } of n) {
              if (this.destroyed) {
                a(Y("provider destroyed; cancelled request", "UNSUPPORTED_OPERATION", {
                  operation: c.method
                }));
                continue;
              }
              const l = i.filter((u) => u.id === c.id)[0];
              if (l == null) {
                const u = Y("missing response for request", "BAD_DATA", {
                  value: i,
                  info: {
                    payload: c
                  }
                });
                this.emit("error", u), a(u);
                continue;
              }
              if ("error" in l) {
                a(this.getRpcError(c, l));
                continue;
              }
              o(l.result);
            }
          } catch (i) {
            this.emit("debug", {
              action: "receiveRpcError",
              error: i
            });
            for (const { reject: o } of n) o(i);
          }
        })();
      }
    }, t));
  };
  class T0 extends I0 {
    constructor(t, e) {
      super(t, e);
      __privateAdd(this, _t35);
      let n = this._getOption("pollingInterval");
      n == null && (n = La.pollingInterval), __privateSet(this, _t35, n);
    }
    _getSubscriber(t) {
      const e = super._getSubscriber(t);
      return Qi(e) && (e.pollingInterval = __privateGet(this, _t35)), e;
    }
    get pollingInterval() {
      return __privateGet(this, _t35);
    }
    set pollingInterval(t) {
      if (!Number.isInteger(t) || t < 0) throw new Error("invalid interval");
      __privateSet(this, _t35, t), this._forEachSubscriber((e) => {
        Qi(e) && (e.pollingInterval = __privateGet(this, _t35));
      });
    }
  }
  _t35 = new WeakMap();
  class v0 extends T0 {
    constructor(t, e, n) {
      t == null && (t = "http://localhost:8545");
      super(e, n);
      __privateAdd(this, _t36);
      typeof t == "string" ? __privateSet(this, _t36, new Lt(t)) : __privateSet(this, _t36, t.clone());
    }
    _getConnection() {
      return __privateGet(this, _t36).clone();
    }
    async send(t, e) {
      return await this._start(), await super.send(t, e);
    }
    async _send(t) {
      const e = this._getConnection();
      e.body = JSON.stringify(t), e.setHeader("content-type", "application/json");
      const n = await e.send();
      n.assertOk();
      let s = n.bodyJson;
      return Array.isArray(s) || (s = [
        s
      ]), s;
    }
  }
  _t36 = new WeakMap();
  function Yr(r) {
    if (r == null) return null;
    if (typeof r.message == "string" && r.message.match(/revert/i) && _(r.data)) return {
      message: r.message,
      data: r.data
    };
    if (typeof r == "object") {
      for (const t in r) {
        const e = Yr(r[t]);
        if (e) return e;
      }
      return null;
    }
    if (typeof r == "string") try {
      return Yr(JSON.parse(r));
    } catch {
    }
    return null;
  }
  function qr(r, t) {
    if (r != null) {
      if (typeof r.message == "string" && t.push(r.message), typeof r == "object") for (const e in r) qr(r[e], t);
      if (typeof r == "string") try {
        return qr(JSON.parse(r), t);
      } catch {
      }
    }
  }
  function C0(r) {
    const t = [];
    return qr(r, t), t;
  }
  V0 = 0;
  J0 = 0n;
  Ps = "Evm";
  K0 = (r, t) => ({
    ...r,
    from: t
  });
  z0 = (r, t) => ({
    ...r,
    chainId: t
  });
  _0 = (r, t) => ({
    ...r,
    value: t
  });
  Vi = "0x0000000000000000000000000000000000000000";
  Tt = (_f4 = class {
    constructor(t) {
      __publicField(this, "type", "Native");
      __publicField(this, "address");
      if (Tt.instanceof(t)) {
        const e = t;
        this.address = e.address;
        return;
      }
      if (typeof t == "string") {
        if (!Tt.isValidAddress(t)) throw new Error(`Invalid EVM address, expected ${Tt.byteSize}-byte hex string but got ${t}`);
        this.address = M(t);
      } else if (t instanceof Uint8Array) t = this.trimUniversalAddress(t), this.address = M(hr.encode(t));
      else if (Pn.instanceof(t)) {
        const e = this.trimUniversalAddress(t.toUint8Array());
        this.address = M(hr.encode(e));
      } else throw new Error(`Invalid EVM address ${t}`);
    }
    unwrap() {
      return this.address;
    }
    toString() {
      return this.address;
    }
    toNative() {
      return this;
    }
    toUint8Array() {
      return hr.decode(this.address);
    }
    toUniversalAddress() {
      return new Pn(this.address, "hex");
    }
    trimUniversalAddress(t) {
      if (t.length === Tt.byteSize) return t;
      if (t.length < Tt.byteSize) throw new Error(`Invalid evm address, expected ${Tt.byteSize} bytes`);
      if (t.length !== Pn.byteSize) throw new Error(`Invalid universal address, expected ${Pn.byteSize} bytes`);
      if (Ki.decode(t.slice(0, 12)) !== 0n) throw new Error(`Invalid EVM address ${t} expected first 12 bytes to be 0s`);
      return t.slice(12);
    }
    static isValidAddress(t) {
      return Kl(t);
    }
    static instanceof(t) {
      return t.constructor.platform === Tt.platform;
    }
    equals(t) {
      return Tt.instanceof(t) ? t.address === this.address : t.equals(this.toUniversalAddress());
    }
  }, __publicField(_f4, "byteSize", 20), __publicField(_f4, "platform", Ps), _f4);
  Ua(Ps, Tt);
  j0 = class {
    constructor(t, e, n, s, i = false) {
      __publicField(this, "transaction");
      __publicField(this, "network");
      __publicField(this, "chain");
      __publicField(this, "description");
      __publicField(this, "parallelizable");
      this.transaction = t, this.network = e, this.chain = n, this.description = s, this.parallelizable = i;
    }
  };
  const Un = [
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address"
        },
        {
          indexed: true,
          internalType: "address",
          name: "spender",
          type: "address"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256"
        }
      ],
      name: "Approval",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "from",
          type: "address"
        },
        {
          indexed: true,
          internalType: "address",
          name: "to",
          type: "address"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256"
        }
      ],
      name: "Transfer",
      type: "event"
    },
    {
      inputs: [],
      name: "DOMAIN_SEPARATOR",
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
          name: "owner_",
          type: "address"
        },
        {
          internalType: "address",
          name: "spender_",
          type: "address"
        }
      ],
      name: "allowance",
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
          name: "spender_",
          type: "address"
        },
        {
          internalType: "uint256",
          name: "amount_",
          type: "uint256"
        }
      ],
      name: "approve",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool"
        }
      ],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "account_",
          type: "address"
        }
      ],
      name: "balanceOf",
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
          name: "account_",
          type: "address"
        },
        {
          internalType: "uint256",
          name: "amount_",
          type: "uint256"
        }
      ],
      name: "burn",
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
      inputs: [],
      name: "decimals",
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
          internalType: "address",
          name: "spender_",
          type: "address"
        },
        {
          internalType: "uint256",
          name: "subtractedValue_",
          type: "uint256"
        }
      ],
      name: "decreaseAllowance",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool"
        }
      ],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [],
      name: "eip712Domain",
      outputs: [
        {
          internalType: "bytes1",
          name: "domainFields",
          type: "bytes1"
        },
        {
          internalType: "string",
          name: "domainName",
          type: "string"
        },
        {
          internalType: "string",
          name: "domainVersion",
          type: "string"
        },
        {
          internalType: "uint256",
          name: "domainChainId",
          type: "uint256"
        },
        {
          internalType: "address",
          name: "domainVerifyingContract",
          type: "address"
        },
        {
          internalType: "bytes32",
          name: "domainSalt",
          type: "bytes32"
        },
        {
          internalType: "uint256[]",
          name: "domainExtensions",
          type: "uint256[]"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "spender_",
          type: "address"
        },
        {
          internalType: "uint256",
          name: "addedValue_",
          type: "uint256"
        }
      ],
      name: "increaseAllowance",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool"
        }
      ],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "name_",
          type: "string"
        },
        {
          internalType: "string",
          name: "symbol_",
          type: "string"
        },
        {
          internalType: "uint8",
          name: "decimals_",
          type: "uint8"
        },
        {
          internalType: "uint64",
          name: "sequence_",
          type: "uint64"
        },
        {
          internalType: "address",
          name: "owner_",
          type: "address"
        },
        {
          internalType: "uint16",
          name: "chainId_",
          type: "uint16"
        },
        {
          internalType: "bytes32",
          name: "nativeContract_",
          type: "bytes32"
        }
      ],
      name: "initialize",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "account_",
          type: "address"
        },
        {
          internalType: "uint256",
          name: "amount_",
          type: "uint256"
        }
      ],
      name: "mint",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [],
      name: "name",
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
      name: "nativeContract",
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
          name: "owner_",
          type: "address"
        }
      ],
      name: "nonces",
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
      inputs: [
        {
          internalType: "address",
          name: "owner_",
          type: "address"
        },
        {
          internalType: "address",
          name: "spender_",
          type: "address"
        },
        {
          internalType: "uint256",
          name: "value_",
          type: "uint256"
        },
        {
          internalType: "uint256",
          name: "deadline_",
          type: "uint256"
        },
        {
          internalType: "uint8",
          name: "v_",
          type: "uint8"
        },
        {
          internalType: "bytes32",
          name: "r_",
          type: "bytes32"
        },
        {
          internalType: "bytes32",
          name: "s_",
          type: "bytes32"
        }
      ],
      name: "permit",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [],
      name: "symbol",
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
      name: "totalSupply",
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
          name: "recipient_",
          type: "address"
        },
        {
          internalType: "uint256",
          name: "amount_",
          type: "uint256"
        }
      ],
      name: "transfer",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool"
        }
      ],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "sender_",
          type: "address"
        },
        {
          internalType: "address",
          name: "recipient_",
          type: "address"
        },
        {
          internalType: "uint256",
          name: "amount_",
          type: "uint256"
        }
      ],
      name: "transferFrom",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool"
        }
      ],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "name_",
          type: "string"
        },
        {
          internalType: "string",
          name: "symbol_",
          type: "string"
        },
        {
          internalType: "uint64",
          name: "sequence_",
          type: "uint64"
        }
      ],
      name: "updateDetails",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    }
  ], Ji = "0x6080806040523461001657611af2908161001c8239f35b600080fdfe6040608081526004908136101561001557600080fd5b600091823560e01c90816306fdde0314611136578163095ea7b31461110c57816318160ddd146110ed57816323b872dd14611026578163313ce567146110055781633644e51514610fe15781633950935114610f985781633d6c043b14610f7957816340c10f1914610ea157816370a0823114610e695781637ecebe0014610e3157816384b0196e14610d575781638da5cb5b14610d2e57816395d89b4114610c595781639a8a059214610c335781639dc29fac14610af1578163a18cd7c6146107bf578163a457c2d71461070f578163a9059cbb146106de578163c71f461514610335578163d505accf14610160575063dd62ed3e1461011557600080fd5b3461015c578060031936011261015c57806020926101316111af565b6101396111ca565b6001600160a01b0391821683526006865283832091168252845220549051908152f35b5080fd5b8391503461015c5760e036600319011261015c5761017c6111af565b6101846111ca565b906044359260643560843560ff81168103610331576101a16112e1565b8142116102ee5760018060a01b039081851692838952600e602052898920908154916001830190558a519060208201927f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98452868d840152858a1660608401528a608084015260a083015260c082015260c0815261021e81611212565b519020610229611798565b918a5191602083019361190160f01b855260228401526042830152604282526080820182811067ffffffffffffffff8211176102db5791610283939161027b938d5260c4359260a435925190206119c7565b919091611855565b160361029857506102959394506115e0565b80f35b606490602087519162461bcd60e51b8352820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e617475726500006044820152fd5b634e487b7160e01b8b526041875260248bfd5b875162461bcd60e51b8152602081850152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e650000006044820152606490fd5b8680fd5b9050346106da5760e03660031901126106da5767ffffffffffffffff81358181116106d6576103679036908401611250565b916024358281116106d25761037f9036908301611250565b6044359060ff821680920361033157606435938085168095036106ce576084356001600160a01b03811696908790036106ca5760a4359761ffff891689036106c6576007549060ff8260a01c1661068e575060ff60a01b1916600160a01b17600755805182811161067b57806103f58b546112a7565b92601f93848111610622575b506020908483116001146105b3578c926105a8575b50508160011b916000199060031b1c19161789555b825191821161059557819060019361044385546112a7565b828111610538575b5060209183116001146104cd578a926104c2575b5050600019600383901b1c191690821b1790555b60ff1982541617905567ffffffffffffffff1960025416176002556007549161ffff60a81b9060a81b16916bffffffffffffffffff0000ff60a01b16171760075560c4356008556102956112e1565b01519050388061045f565b848b52849350600080516020611a9d8339815191529190601f1984168c5b81811061052057508411610507575b505050811b019055610473565b015160001960f88460031b161c191690553880806104fa565b828401518555879690940193602093840193016104eb565b90919250848b52600080516020611a9d8339815191528380860160051c8201926020871061058c575b91869588929594930160051c01915b82811061057e57505061044b565b8d8155869550879101610570565b92508192610561565b634e487b7160e01b895260418552602489fd5b015190503880610416565b8c8052600080516020611a7d8339815191529250601f1984168d5b81811061060a57509084600195949392106105f1575b505050811b01895561042b565b015160001960f88460031b161c191690553880806105e4565b929360206001819287860151815501950193016105ce565b9091508b8052600080516020611a7d8339815191528480850160051c82019260208610610672575b9085949392910160051c01905b8181106106645750610401565b8d8155849350600101610657565b9250819261064a565b634e487b7160e01b8a526041865260248afd5b5162461bcd60e51b81526020818801526013602482015272105b1c9958591e481a5b9a5d1a585b1a5e9959606a1b6044820152606490fd5b8980fd5b8880fd5b8780fd5b8580fd5b8480fd5b8280fd5b50503461015c578060031936011261015c576020906107086106fe6111af565b6024359033611416565b5160018152f35b905082346107bc57826003193601126107bc5761072a6111af565b918360243592338152600660205281812060018060a01b038616825260205220549082821061076b576020856107088661076487876113e6565b90336115e0565b608490602086519162461bcd60e51b8352820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152fd5b80fd5b83833461015c57606036600319011261015c5767ffffffffffffffff928035848111610aed576107f29036908301611250565b936024358181116106d65761080a9036908401611250565b91604435938285168095036106d25761082e60018060a01b03600754163314611594565b8483600254161015610aaa57508551828111610a97578061084f87546112a7565b97601f98898111610a3e575b506020908983116001146109cf5788926109c4575b50508160011b916000199060031b1c19161785555b82519182116109b1575060019161089c83546112a7565b868111610961575b5060209582116001146108f75794849582939495926108ec575b5050600019600383901b1c191690821b1790555b67ffffffffffffffff1960025416176002556102956112e1565b0151905085806108be565b828552601f19821695600080516020611a9d83398151915291865b88811061094b5750838596979810610932575b505050811b0190556108d2565b015160001960f88460031b161c19169055858080610925565b8183015184559285019260209283019201610912565b838652600080516020611a9d8339815191528780850160051c820192602086106109a8575b0160051c019084905b82811061099d5750506108a4565b87815501849061098f565b92508192610986565b634e487b7160e01b855260419052602484fd5b015190508880610870565b888052600080516020611a7d8339815191529250601f198416895b818110610a265750908460019594939210610a0d575b505050811b018555610885565b015160001960f88460031b161c19169055888080610a00565b929360206001819287860151815501950193016109ea565b909150878052600080516020611a7d8339815191528980850160051c82019260208610610a8e575b9085949392910160051c01905b818110610a80575061085b565b898155849350600101610a73565b92508192610a66565b634e487b7160e01b865260418252602486fd5b906020606492519162461bcd60e51b8352820152601e60248201527f63757272656e74206d6574616461746120697320757020746f206461746500006044820152fd5b8380fd5b8391503461015c578260031936011261015c57610b0c6111af565b600754602435916001600160a01b0391610b299083163314611594565b16918215610be65782845260056020528484205490828210610b985750818495610b767fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef946020946113e6565b8587526005845281872055610b8d826003546113e6565b60035551908152a380f35b608490602087519162461bcd60e51b8352820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152fd5b608490602086519162461bcd60e51b8352820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152fd5b50503461015c578160031936011261015c5760209061ffff60075460a81c169051908152f35b50503461015c578160031936011261015c57805190826001805491610c7d836112a7565b80865292828116908115610d065750600114610cbc575b505050610ca682610cb894038361122e565b5191829160208352602083019061118a565b0390f35b9450808552600080516020611a9d8339815191525b828610610cee57505050610ca6826020610cb89582010194610c94565b80546020878701810191909152909501948101610cd1565b610cb8975086935060209250610ca694915060ff191682840152151560051b82010194610c94565b50503461015c578160031936011261015c5760075490516001600160a01b039091168152602090f35b9050346106da57826003193601126106da57610d7161133d565b918051610d7d816111e0565b600194858252602091603160f81b83820152610d97611810565b938051918483019683881067ffffffffffffffff8911176109b1575093879592610dee838b978a859652878452610de182519a601f60f81b8c5260e0878d015260e08c019061118a565b918a8303908b015261118a565b9346606089015230608089015260a088015286840360c088015251928381520195925b828110610e1e5785870386f35b8351875295810195928101928401610e11565b50503461015c57602036600319011261015c5760209181906001600160a01b03610e596111af565b168152600e845220549051908152f35b50503461015c57602036600319011261015c5760209181906001600160a01b03610e916111af565b1681526005845220549051908152f35b919050346106da57806003193601126106da57610ebc6111af565b60075460243592916001600160a01b0391610eda9083163314611594565b16928315610f3757506020827fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92610f158795600354611409565b60035585855260058352808520610f2d838254611409565b905551908152a380f35b6020606492519162461bcd60e51b8352820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152fd5b50503461015c578160031936011261015c576020906008549051908152f35b50503461015c578060031936011261015c57610708602092610764610fbb6111af565b338352600686528483206001600160a01b03821684528652918490205460243590611409565b50503461015c578160031936011261015c57602090610ffe611798565b9051908152f35b8284346107bc57806003193601126107bc575060ff60209254169051908152f35b905082346107bc5760603660031901126107bc576110426111af565b918361104c6111ca565b9261105b604435809587611416565b6001600160a01b0385168152600660209081528282203383529052205490828210611099576020856107088661109187876113e6565b9033906115e0565b608490602086519162461bcd60e51b8352820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b6064820152fd5b50503461015c578160031936011261015c576020906003549051908152f35b50503461015c578060031936011261015c5760209061070861112c6111af565b60243590336115e0565b50503461015c578160031936011261015c57610cb89061115461133d565b905191829160208352602083019061118a565b60005b83811061117a5750506000910152565b818101518382015260200161116a565b906020916111a381518092818552858086019101611167565b601f01601f1916010190565b600435906001600160a01b03821682036111c557565b600080fd5b602435906001600160a01b03821682036111c557565b6040810190811067ffffffffffffffff8211176111fc57604052565b634e487b7160e01b600052604160045260246000fd5b60e0810190811067ffffffffffffffff8211176111fc57604052565b90601f8019910116810190811067ffffffffffffffff8211176111fc57604052565b81601f820112156111c55780359067ffffffffffffffff82116111fc5760405192611285601f8401601f19166020018561122e565b828452602083830101116111c557816000926020809301838601378301015290565b90600182811c921680156112d7575b60208310146112c157565b634e487b7160e01b600052602260045260246000fd5b91607f16916112b6565b6112e96117de565b6112f1611810565b81600d5414801590611331575b611306575050565b46600a55600b80546001600160a01b0319163017905561132681836116e2565b600955600c55600d55565b5080600c5414156112fe565b60405190600082815491611350836112a7565b808352926001908181169081156113c45750600114611379575b506113779250038361122e565b565b60008080529150600080516020611a7d8339815191525b8483106113a9575061137793505081016020013861136a565b81935090816020925483858a01015201910190918592611390565b90506020925061137794915060ff191682840152151560051b8201013861136a565b919082039182116113f357565b634e487b7160e01b600052601160045260246000fd5b919082018092116113f357565b6001600160a01b0390811691821561154157169182156114f0576000828152600560205260408120549180831061149c576040602092611477837fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef966113e6565b868252600585528282205586815220611491828254611409565b9055604051908152a3565b60405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608490fd5b60405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608490fd5b60405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608490fd5b1561159b57565b60405162461bcd60e51b815260206004820152601760248201527f63616c6c6572206973206e6f7420746865206f776e65720000000000000000006044820152606490fd5b6001600160a01b0390811691821561169157169182156116415760207f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925918360005260068252604060002085600052825280604060002055604051908152a3565b60405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608490fd5b60405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608490fd5b90604051906116f0826111e0565b600191828152602092603160f81b84830152604051918460005b83811061178457505050600060218301528152611726816111e0565b828151910120604051928301937fd87cd6ef79d4e2b95e15ce8abf732db51ec771f1ca2edccf22a46c729ac564728552604084015260608301524660808301523060a083015260c082015260c0815261177e81611212565b51902090565b81818401015182828701015201859061170a565b600b546001600160a01b03163014806117d3575b156117b75760095490565b6117d06117c26117de565b6117ca611810565b906116e2565b90565b50600a5446146117ac565b6117e661133d565b60405161177e602082816118038183019687815193849201611167565b810103808452018261122e565b60075460085460405190602082019261ffff60f01b9060481b1683526022820152602281526060810181811067ffffffffffffffff8211176111fc5760405251902090565b60058110156119b157806118665750565b600181036118b35760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606490fd5b600281036119005760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606490fd5b600381036119585760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b6064820152608490fd5b60041461196157565b60405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b6064820152608490fd5b634e487b7160e01b600052602160045260246000fd5b9291907f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08311611a705760ff16601b81141580611a65575b611a59579160809493916020936040519384528484015260408301526060820152600093849182805260015afa15611a4c5781516001600160a01b03811615611a46579190565b50600190565b50604051903d90823e3d90fd5b50505050600090600490565b50601c8114156119ff565b5050505060009060039056fe290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563b10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6a26469706673582212209c2a6ab851b98b79f450a0f6c6580132088da5913ef53a145eab9f7b320248f664736f6c63430008130033", k0 = (r) => r.length > 1;
  class O0 extends As {
    constructor(...t) {
      k0(t) ? super(...t) : super(Un, Ji, t[0]);
    }
    getDeployTransaction(t) {
      return super.getDeployTransaction(t || {});
    }
    deploy(t) {
      return super.deploy(t || {});
    }
    connect(t) {
      return super.connect(t);
    }
    static createInterface() {
      return new zt(Un);
    }
    static connect(t, e) {
      return new on(t, Un, e);
    }
  }
  __publicField(O0, "bytecode", Ji);
  __publicField(O0, "abi", Un);
  R0 = class extends Da {
  };
  Ct = (_g4 = class extends Ga {
    constructor(t, e) {
      super(t, e ?? Ma(t, Ct._platform));
      __publicField(this, "_providers", {});
    }
    getRpc(t) {
      const e = this._providers[t];
      if (e) return e;
      if (t in this.config && this.config[t].rpc) {
        const n = this.config[t];
        let s = n.rpc;
        if (n.httpHeaders) {
          s = new Lt(n.rpc);
          for (const [o, a] of Object.entries(n.httpHeaders)) s.setHeader(o, a);
        }
        const i = new v0(s, Ha.get(this.network, t), {
          staticNetwork: true
        });
        return this._providers[t] = i, i;
      } else throw new Error("No configuration available for chain: " + t);
    }
    getChain(t, e) {
      if (t in this.config) return new R0(t, this, e);
      throw new Error("No configuration available for chain: " + t);
    }
    static nativeTokenId(t, e) {
      if (!Ct.isSupportedChain(e)) throw new Error(`invalid chain for EVM: ${e}`);
      return Qa.tokenId(e, Vi);
    }
    static isNativeTokenId(t, e, n) {
      return !Ct.isSupportedChain(e) || n.chain !== e ? false : n.address.toString() === Vi;
    }
    static isSupportedChain(t) {
      return Fa(t) === Ct._platform;
    }
    static async getDecimals(t, e, n, s) {
      if (Ts(s)) return Va(Ct._platform);
      const i = Ct.getTokenImplementation(n, new Tt(s).toString());
      return Number(await i.decimals());
    }
    static async getBalance(t, e, n, s, i) {
      return Ts(i) ? n.getBalance(s) : Ct.getTokenImplementation(n, new Tt(i).toString()).balanceOf(s);
    }
    static async getBalances(t, e, n, s, i) {
      const o = await Ka(s, t, e, i);
      return o.native ?? (o.native = await n.getBalance(s)), o;
    }
    static async sendWait(t, e, n) {
      const s = [];
      for (const i of n) {
        const o = await e.broadcastTransaction(i);
        if (s.push(o.hash), Ct.CHAINS_WITH_CUSTOM_TX_TYPES.has(t)) {
          const l = await e.waitForTransaction(o.hash, 1, 12e4);
          if (l === null) throw new Error(`Transaction was not mined within ${12e4 / 1e3}s: ${o.hash}`);
          if (l.status !== 1) throw new Error(`Transaction reverted: ${o.hash}`);
          continue;
        }
        if (await o.wait() === null) throw new Error("Received null TxReceipt");
      }
      return s;
    }
    static async getLatestBlock(t) {
      return await t.getBlockNumber();
    }
    static async getLatestFinalizedBlock(t) {
      const e = await t.getBlock("finalized");
      if (!e) throw new Error("Could not get finalized block");
      return e == null ? void 0 : e.number;
    }
    static chainFromChainId(t) {
      const e = Ja(Ct._platform, BigInt(t));
      if (e === void 0) throw new Error(`Unknown EVM chainId ${t}`);
      const [n, s] = e;
      return [
        n,
        s
      ];
    }
    static async chainFromRpc(t) {
      const { chainId: e } = await t.getNetwork();
      return Ct.chainFromChainId(Ki.encode(e, true));
    }
    static getTokenImplementation(t, e) {
      const n = O0.connect(e, t);
      if (!n) throw new Error(`No token implementation available for: ${e}`);
      return n;
    }
  }, __publicField(_g4, "_platform", Ps), __publicField(_g4, "CHAINS_WITH_CUSTOM_TX_TYPES", /* @__PURE__ */ new Set([
    "Celo",
    "Tempo"
  ])), _g4);
});
export {
  _0 as $,
  Oa as A,
  w as B,
  Ne as C,
  qn as D,
  Wa as E,
  Ze as F,
  dt as G,
  za as H,
  $ as I,
  U as J,
  Kt as K,
  ue as L,
  ts as M,
  $r as N,
  F0 as O,
  tc as P,
  Ct as Q,
  Tt as R,
  co as S,
  Ot as T,
  R0 as U,
  Ra as V,
  j0 as W,
  Vi as X,
  z0 as Y,
  K0 as Z,
  Ps as _,
  __tla,
  D0 as a,
  J0 as a0,
  V0 as a1,
  Pc as b,
  G0 as c,
  Tc as d,
  d as e,
  Z as f,
  S as g,
  x as h,
  Yt as i,
  M as j,
  rt as k,
  Zt as l,
  k as m,
  Ee as n,
  su as o,
  M0 as p,
  Zn as q,
  H0 as r,
  tr as s,
  st as t,
  mc as u,
  ht as v,
  ss as w,
  gt as x,
  B as y,
  xt as z
};
