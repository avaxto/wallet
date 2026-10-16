var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { a as L, g as er, B as G, d as ct } from "./crypto-CoV0x5dM.js";
import { n as oe, o as Be, P, E as tr, F as os, s as Z, S as Ot, d as A, z as Qe, w as ze, t as he, a as as, j as Ce, l as cs, p as us, B as ls, x as ds, e as et, G as fs, b as hs, K as nn, g as ps, _ as gs, __tla as __tla_0 } from "./index-VPMC5CHr.js";
import { u as rn, am as ms, c as ys, t as Ee, b3 as ws, j as vs, __tla as __tla_1 } from "./api-MAX7rlSa.js";
import { i as Me, d as nr, __tla as __tla_2 } from "./index-LiAlS9gV.js";
import { c as bs, __tla as __tla_3 } from "./create-DfZEX3BU.js";
import { r as _s, __tla as __tla_4 } from "./wormhole-wO6_ynZj.js";
let Ae, Ne, pe, ar, ka, Se, Ia, As, tn, cr, Oa;
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
  })()
]).then(async () => {
  const rr = [
    {
      name: "discriminator",
      binary: "bytes",
      size: 4
    },
    {
      name: "consistencyLevel",
      binary: "uint",
      size: 1,
      endianness: "little"
    },
    {
      name: "emitterAuthority",
      ...rn
    },
    {
      name: "messageStatus",
      binary: "uint",
      size: 1,
      endianness: "little"
    },
    {
      name: "gap",
      binary: "uint",
      size: 3
    },
    {
      name: "timestamp",
      binary: "uint",
      size: 4,
      endianness: "little"
    },
    {
      name: "nonce",
      binary: "uint",
      size: 4,
      endianness: "little"
    },
    {
      name: "sequence",
      binary: "uint",
      size: 8,
      endianness: "little"
    },
    {
      name: "emitterChain",
      binary: "uint",
      size: 2,
      endianness: "little"
    },
    {
      name: "emitterAddress",
      ...rn
    },
    {
      name: "payloadLength",
      binary: "uint",
      size: 4,
      endianness: "little"
    },
    {
      name: "payload",
      binary: "bytes"
    }
  ];
  function sr(r) {
    return ms(rr, r);
  }
  Se = function(r, t, e, n) {
    const s = typeof t == "string" ? L.from(t, "hex") : L.from(t);
    if (s.length != 32) throw Error("address.length != 32");
    const i = L.alloc(8);
    return i.writeBigUInt64BE(typeof n == "number" ? BigInt(n) : n), oe([
      s,
      (() => {
        const o = L.alloc(2);
        return o.writeUInt16BE(e), o;
      })(),
      i
    ], r);
  };
  As = async function(r, t, e, n, s, i) {
    return r.getAccountInfo(Se(t, e, n, s), i).then((o) => !!Be(o)[0]);
  };
  function X(r) {
    return oe([
      L.from("Bridge")
    ], r);
  }
  async function ir(r, t, e) {
    return r.getAccountInfo(X(t), e).then((n) => lt.deserialize(Be(n)));
  }
  class ut {
    constructor(t, e) {
      __publicField(this, "guardianSetExpirationTime");
      __publicField(this, "fee");
      this.guardianSetExpirationTime = t, this.fee = e;
    }
    static deserialize(t) {
      if (t.length != 12) throw new Error("data.length != 12");
      const e = t.readUInt32LE(0), n = t.readBigUInt64LE(4);
      return new ut(e, n);
    }
  }
  class lt {
    constructor(t, e, n) {
      __publicField(this, "guardianSetIndex");
      __publicField(this, "lastLamports");
      __publicField(this, "config");
      this.guardianSetIndex = t, this.lastLamports = e, this.config = n;
    }
    static deserialize(t) {
      if (t.length != 24) throw new Error("data.length != 24");
      const e = t.readUInt32LE(0), n = t.readBigUInt64LE(4), s = ut.deserialize(t.subarray(12));
      return new lt(e, n, s);
    }
  }
  function dt(r, t) {
    return oe([
      L.from("Sequence"),
      new P(r).toBytes()
    ], t);
  }
  async function or(r, t, e, n) {
    return r.getAccountInfo(dt(t, e), n).then((s) => ft.deserialize(Be(s)));
  }
  class ft {
    constructor(t, e, n) {
      __publicField(this, "sequence");
      __publicField(this, "bump");
      __publicField(this, "emitterType");
      this.sequence = t, this.bump = e, this.emitterType = n;
    }
    static deserialize(t) {
      if (t.length !== 8 && t.length !== 10) throw new Error("data.length != 8 or data.length != 10");
      let e, n;
      const s = t.readBigUInt64LE(0);
      return t.length === 10 && (e = t[8], n = t[9]), new ft(s, e, n);
    }
    value() {
      return this.sequence;
    }
  }
  function jt(r) {
    return oe([
      L.from("emitter")
    ], r);
  }
  function Gt(r, t) {
    const e = jt(r);
    return {
      emitter: e,
      sequence: dt(e, t)
    };
  }
  async function Es(r, t, e, n) {
    return or(r, jt(t), e, n);
  }
  function Ie(r) {
    return oe([
      L.from("fee_collector")
    ], r);
  }
  const sn = 65, Re = 20;
  function Ss(r, t, e) {
    return new tr({
      keys: [],
      programId: os.programId,
      data: Is.serialize(r, t, e)
    });
  }
  class Is {
    static serialize(t, e, n) {
      if (t.length == 0) throw Error("signatures.length == 0");
      if (t.length != e.length) throw Error("signatures.length != keys.length");
      if (n.length != 32) throw Error("message.length != 32");
      const s = t.length, i = 11, o = 1 + s * i, a = sn + Re, l = o + s * a, c = 32, u = L.alloc(l + c);
      u.writeUInt8(s, 0), u.write(n.toString("hex"), l, "hex");
      for (let g = 0; g < s; ++g) {
        const f = t.at(g);
        if ((f == null ? void 0 : f.length) != sn) throw Error(`signatures[${g}].length != 65`);
        const d = e.at(g);
        if ((d == null ? void 0 : d.length) != Re) throw Error(`keys[${g}].length != 20`);
        const h = o + a * g, _ = h + 65;
        u.writeUInt16LE(h, 1 + g * i), u.writeUInt8(0, 3 + g * i), u.writeUInt16LE(_, 4 + g * i), u.writeUInt8(0, 6 + g * i), u.writeUInt16LE(l, 7 + g * i), u.writeUInt16LE(c, 9 + g * i), u.writeUInt8(0, 10 + g * i), u.write(f.toString("hex"), h, "hex"), u.write(d.toString("hex"), _, "hex");
      }
      return u;
    }
  }
  function de(r, t) {
    return oe([
      L.from("GuardianSet"),
      (() => {
        const e = L.alloc(4);
        return e.writeUInt32BE(t), e;
      })()
    ], r);
  }
  async function Zt(r, t, e, n) {
    return r.getAccountInfo(de(t, e), n).then((s) => ht.deserialize(Be(s)));
  }
  class ht {
    constructor(t, e, n, s) {
      __publicField(this, "index");
      __publicField(this, "keys");
      __publicField(this, "creationTime");
      __publicField(this, "expirationTime");
      this.index = t, this.keys = e, this.creationTime = n, this.expirationTime = s;
    }
    static deserialize(t) {
      const e = t.readUInt32LE(0), n = t.readUInt32LE(4), s = 8 + n * Re, i = t.readUInt32LE(s), o = t.readUInt32LE(4 + s), a = [];
      for (let l = 0; l < n; ++l) {
        const c = 8 + l * Re;
        a.push(t.subarray(c, c + Re));
      }
      return new ht(e, a, i, o);
    }
  }
  pe = function(r, t) {
    return oe([
      L.from("PostedVAA"),
      t
    ], r);
  };
  async function ks(r, t, e) {
    return r.getAccountInfo(new P(t), e).then((n) => pt.deserialize(Be(n)));
  }
  class pt {
    constructor(t, e, n) {
      __publicField(this, "signatures");
      __publicField(this, "hash");
      __publicField(this, "guardianSetIndex");
      this.signatures = t, this.hash = e, this.guardianSetIndex = n;
    }
    static deserialize(t) {
      const e = t.readUInt32LE(0), n = [
        ...t.subarray(4, 4 + e)
      ].map((a) => a != 0), s = 4 + e, i = t.subarray(s, s + 32), o = t.readUInt32LE(s + 32);
      return new pt(n, i, o);
    }
  }
  ar = function(r) {
    return oe([
      L.from("upgrade")
    ], r);
  };
  cr = function(r, t, e) {
    return Z.transfer({
      fromPubkey: new P(t),
      toPubkey: Ie(r),
      lamports: e
    });
  };
  var Ge = {
    exports: {}
  }, on;
  function xs() {
    if (on) return Ge.exports;
    on = 1;
    const r = /[\p{Lu}]/u, t = /[\p{Ll}]/u, e = /^[\p{Lu}](?![\p{Lu}])/gu, n = /([\p{Alpha}\p{N}_]|$)/u, s = /[_.\- ]+/, i = new RegExp("^" + s.source), o = new RegExp(s.source + n.source, "gu"), a = new RegExp("\\d+" + n.source, "gu"), l = (f, d, h) => {
      let _ = false, m = false, y = false;
      for (let E = 0; E < f.length; E++) {
        const v = f[E];
        _ && r.test(v) ? (f = f.slice(0, E) + "-" + f.slice(E), _ = false, y = m, m = true, E++) : m && y && t.test(v) ? (f = f.slice(0, E - 1) + "-" + f.slice(E - 1), y = m, m = false, _ = true) : (_ = d(v) === v && h(v) !== v, y = m, m = h(v) === v && d(v) !== v);
      }
      return f;
    }, c = (f, d) => (e.lastIndex = 0, f.replace(e, (h) => d(h))), u = (f, d) => (o.lastIndex = 0, a.lastIndex = 0, f.replace(o, (h, _) => d(_)).replace(a, (h) => d(h))), g = (f, d) => {
      if (!(typeof f == "string" || Array.isArray(f))) throw new TypeError("Expected the input to be `string | string[]`");
      if (d = {
        pascalCase: false,
        preserveConsecutiveUppercase: false,
        ...d
      }, Array.isArray(f) ? f = f.map((y) => y.trim()).filter((y) => y.length).join("-") : f = f.trim(), f.length === 0) return "";
      const h = d.locale === false ? (y) => y.toLowerCase() : (y) => y.toLocaleLowerCase(d.locale), _ = d.locale === false ? (y) => y.toUpperCase() : (y) => y.toLocaleUpperCase(d.locale);
      return f.length === 1 ? d.pascalCase ? _(f) : h(f) : (f !== h(f) && (f = l(f, h, _)), f = f.replace(i, ""), d.preserveConsecutiveUppercase ? f = c(f, h) : f = h(f), d.pascalCase && (f = _(f.charAt(0)) + f.slice(1)), u(f, _));
    };
    return Ge.exports = g, Ge.exports.default = g, Ge.exports;
  }
  var Ts = xs();
  const U = er(Ts);
  function ke(r) {
    let t = r.length;
    for (; --t >= 0; ) r[t] = 0;
  }
  const Ls = 3, Cs = 258, ur = 29, Ms = 256, Rs = Ms + 1 + ur, lr = 30, Ps = 512, Os = new Array((Rs + 2) * 2);
  ke(Os);
  const Ds = new Array(lr * 2);
  ke(Ds);
  const Us = new Array(Ps);
  ke(Us);
  const Ns = new Array(Cs - Ls + 1);
  ke(Ns);
  const Bs = new Array(ur);
  ke(Bs);
  const zs = new Array(lr);
  ke(zs);
  const $s = (r, t, e, n) => {
    let s = r & 65535 | 0, i = r >>> 16 & 65535 | 0, o = 0;
    for (; e !== 0; ) {
      o = e > 2e3 ? 2e3 : e, e -= o;
      do
        s = s + t[n++] | 0, i = i + s | 0;
      while (--o);
      s %= 65521, i %= 65521;
    }
    return s | i << 16 | 0;
  };
  var Dt = $s;
  const Vs = () => {
    let r, t = [];
    for (var e = 0; e < 256; e++) {
      r = e;
      for (var n = 0; n < 8; n++) r = r & 1 ? 3988292384 ^ r >>> 1 : r >>> 1;
      t[e] = r;
    }
    return t;
  }, Fs = new Uint32Array(Vs()), qs = (r, t, e, n) => {
    const s = Fs, i = n + e;
    r ^= -1;
    for (let o = n; o < i; o++) r = r >>> 8 ^ s[(r ^ t[o]) & 255];
    return r ^ -1;
  };
  var H = qs, Ut = {
    2: "need dictionary",
    1: "stream end",
    0: "",
    "-1": "file error",
    "-2": "stream error",
    "-3": "data error",
    "-4": "insufficient memory",
    "-5": "buffer error",
    "-6": "incompatible version"
  }, dr = {
    Z_NO_FLUSH: 0,
    Z_FINISH: 4,
    Z_BLOCK: 5,
    Z_TREES: 6,
    Z_OK: 0,
    Z_STREAM_END: 1,
    Z_NEED_DICT: 2,
    Z_STREAM_ERROR: -2,
    Z_DATA_ERROR: -3,
    Z_MEM_ERROR: -4,
    Z_BUF_ERROR: -5,
    Z_DEFLATED: 8
  };
  const Ks = (r, t) => Object.prototype.hasOwnProperty.call(r, t);
  var js = function(r) {
    const t = Array.prototype.slice.call(arguments, 1);
    for (; t.length; ) {
      const e = t.shift();
      if (e) {
        if (typeof e != "object") throw new TypeError(e + "must be non-object");
        for (const n in e) Ks(e, n) && (r[n] = e[n]);
      }
    }
    return r;
  }, Gs = (r) => {
    let t = 0;
    for (let n = 0, s = r.length; n < s; n++) t += r[n].length;
    const e = new Uint8Array(t);
    for (let n = 0, s = 0, i = r.length; n < i; n++) {
      let o = r[n];
      e.set(o, s), s += o.length;
    }
    return e;
  }, fr = {
    assign: js,
    flattenChunks: Gs
  };
  let hr = true;
  try {
    String.fromCharCode.apply(null, new Uint8Array(1));
  } catch {
    hr = false;
  }
  const De = new Uint8Array(256);
  for (let r = 0; r < 256; r++) De[r] = r >= 252 ? 6 : r >= 248 ? 5 : r >= 240 ? 4 : r >= 224 ? 3 : r >= 192 ? 2 : 1;
  De[254] = De[255] = 1;
  var Zs = (r) => {
    if (typeof TextEncoder == "function" && TextEncoder.prototype.encode) return new TextEncoder().encode(r);
    let t, e, n, s, i, o = r.length, a = 0;
    for (s = 0; s < o; s++) e = r.charCodeAt(s), (e & 64512) === 55296 && s + 1 < o && (n = r.charCodeAt(s + 1), (n & 64512) === 56320 && (e = 65536 + (e - 55296 << 10) + (n - 56320), s++)), a += e < 128 ? 1 : e < 2048 ? 2 : e < 65536 ? 3 : 4;
    for (t = new Uint8Array(a), i = 0, s = 0; i < a; s++) e = r.charCodeAt(s), (e & 64512) === 55296 && s + 1 < o && (n = r.charCodeAt(s + 1), (n & 64512) === 56320 && (e = 65536 + (e - 55296 << 10) + (n - 56320), s++)), e < 128 ? t[i++] = e : e < 2048 ? (t[i++] = 192 | e >>> 6, t[i++] = 128 | e & 63) : e < 65536 ? (t[i++] = 224 | e >>> 12, t[i++] = 128 | e >>> 6 & 63, t[i++] = 128 | e & 63) : (t[i++] = 240 | e >>> 18, t[i++] = 128 | e >>> 12 & 63, t[i++] = 128 | e >>> 6 & 63, t[i++] = 128 | e & 63);
    return t;
  };
  const Hs = (r, t) => {
    if (t < 65534 && r.subarray && hr) return String.fromCharCode.apply(null, r.length === t ? r : r.subarray(0, t));
    let e = "";
    for (let n = 0; n < t; n++) e += String.fromCharCode(r[n]);
    return e;
  };
  var Ws = (r, t) => {
    const e = t || r.length;
    if (typeof TextDecoder == "function" && TextDecoder.prototype.decode) return new TextDecoder().decode(r.subarray(0, t));
    let n, s;
    const i = new Array(e * 2);
    for (s = 0, n = 0; n < e; ) {
      let o = r[n++];
      if (o < 128) {
        i[s++] = o;
        continue;
      }
      let a = De[o];
      if (a > 4) {
        i[s++] = 65533, n += a - 1;
        continue;
      }
      for (o &= a === 2 ? 31 : a === 3 ? 15 : 7; a > 1 && n < e; ) o = o << 6 | r[n++] & 63, a--;
      if (a > 1) {
        i[s++] = 65533;
        continue;
      }
      o < 65536 ? i[s++] = o : (o -= 65536, i[s++] = 55296 | o >> 10 & 1023, i[s++] = 56320 | o & 1023);
    }
    return Hs(i, s);
  }, Ys = (r, t) => {
    t = t || r.length, t > r.length && (t = r.length);
    let e = t - 1;
    for (; e >= 0 && (r[e] & 192) === 128; ) e--;
    return e < 0 || e === 0 ? t : e + De[r[e]] > t ? e : t;
  }, Nt = {
    string2buf: Zs,
    buf2string: Ws,
    utf8border: Ys
  };
  function Xs() {
    this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
  }
  var Js = Xs;
  const Ze = 16209, Qs = 16191;
  var ei = function(t, e) {
    let n, s, i, o, a, l, c, u, g, f, d, h, _, m, y, E, v, b, k, N, S, R, M, T;
    const x = t.state;
    n = t.next_in, M = t.input, s = n + (t.avail_in - 5), i = t.next_out, T = t.output, o = i - (e - t.avail_out), a = i + (t.avail_out - 257), l = x.dmax, c = x.wsize, u = x.whave, g = x.wnext, f = x.window, d = x.hold, h = x.bits, _ = x.lencode, m = x.distcode, y = (1 << x.lenbits) - 1, E = (1 << x.distbits) - 1;
    e: do {
      h < 15 && (d += M[n++] << h, h += 8, d += M[n++] << h, h += 8), v = _[d & y];
      t: for (; ; ) {
        if (b = v >>> 24, d >>>= b, h -= b, b = v >>> 16 & 255, b === 0) T[i++] = v & 65535;
        else if (b & 16) {
          k = v & 65535, b &= 15, b && (h < b && (d += M[n++] << h, h += 8), k += d & (1 << b) - 1, d >>>= b, h -= b), h < 15 && (d += M[n++] << h, h += 8, d += M[n++] << h, h += 8), v = m[d & E];
          n: for (; ; ) {
            if (b = v >>> 24, d >>>= b, h -= b, b = v >>> 16 & 255, b & 16) {
              if (N = v & 65535, b &= 15, h < b && (d += M[n++] << h, h += 8, h < b && (d += M[n++] << h, h += 8)), N += d & (1 << b) - 1, N > l) {
                t.msg = "invalid distance too far back", x.mode = Ze;
                break e;
              }
              if (d >>>= b, h -= b, b = i - o, N > b) {
                if (b = N - b, b > u && x.sane) {
                  t.msg = "invalid distance too far back", x.mode = Ze;
                  break e;
                }
                if (S = 0, R = f, g === 0) {
                  if (S += c - b, b < k) {
                    k -= b;
                    do
                      T[i++] = f[S++];
                    while (--b);
                    S = i - N, R = T;
                  }
                } else if (g < b) {
                  if (S += c + g - b, b -= g, b < k) {
                    k -= b;
                    do
                      T[i++] = f[S++];
                    while (--b);
                    if (S = 0, g < k) {
                      b = g, k -= b;
                      do
                        T[i++] = f[S++];
                      while (--b);
                      S = i - N, R = T;
                    }
                  }
                } else if (S += g - b, b < k) {
                  k -= b;
                  do
                    T[i++] = f[S++];
                  while (--b);
                  S = i - N, R = T;
                }
                for (; k > 2; ) T[i++] = R[S++], T[i++] = R[S++], T[i++] = R[S++], k -= 3;
                k && (T[i++] = R[S++], k > 1 && (T[i++] = R[S++]));
              } else {
                S = i - N;
                do
                  T[i++] = T[S++], T[i++] = T[S++], T[i++] = T[S++], k -= 3;
                while (k > 2);
                k && (T[i++] = T[S++], k > 1 && (T[i++] = T[S++]));
              }
            } else if ((b & 64) === 0) {
              v = m[(v & 65535) + (d & (1 << b) - 1)];
              continue n;
            } else {
              t.msg = "invalid distance code", x.mode = Ze;
              break e;
            }
            break;
          }
        } else if ((b & 64) === 0) {
          v = _[(v & 65535) + (d & (1 << b) - 1)];
          continue t;
        } else if (b & 32) {
          x.mode = Qs;
          break e;
        } else {
          t.msg = "invalid literal/length code", x.mode = Ze;
          break e;
        }
        break;
      }
    } while (n < s && i < a);
    k = h >> 3, n -= k, h -= k << 3, d &= (1 << h) - 1, t.next_in = n, t.next_out = i, t.avail_in = n < s ? 5 + (s - n) : 5 - (n - s), t.avail_out = i < a ? 257 + (a - i) : 257 - (i - a), x.hold = d, x.bits = h;
  };
  const ye = 15, an = 852, cn = 592, un = 0, At = 1, ln = 2, ti = new Uint16Array([
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    13,
    15,
    17,
    19,
    23,
    27,
    31,
    35,
    43,
    51,
    59,
    67,
    83,
    99,
    115,
    131,
    163,
    195,
    227,
    258,
    0,
    0
  ]), ni = new Uint8Array([
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    17,
    17,
    17,
    17,
    18,
    18,
    18,
    18,
    19,
    19,
    19,
    19,
    20,
    20,
    20,
    20,
    21,
    21,
    21,
    21,
    16,
    199,
    75
  ]), ri = new Uint16Array([
    1,
    2,
    3,
    4,
    5,
    7,
    9,
    13,
    17,
    25,
    33,
    49,
    65,
    97,
    129,
    193,
    257,
    385,
    513,
    769,
    1025,
    1537,
    2049,
    3073,
    4097,
    6145,
    8193,
    12289,
    16385,
    24577,
    0,
    0
  ]), si = new Uint8Array([
    16,
    16,
    16,
    16,
    17,
    17,
    18,
    18,
    19,
    19,
    20,
    20,
    21,
    21,
    22,
    22,
    23,
    23,
    24,
    24,
    25,
    25,
    26,
    26,
    27,
    27,
    28,
    28,
    29,
    29,
    64,
    64
  ]), ii = (r, t, e, n, s, i, o, a) => {
    const l = a.bits;
    let c = 0, u = 0, g = 0, f = 0, d = 0, h = 0, _ = 0, m = 0, y = 0, E = 0, v, b, k, N, S, R = null, M;
    const T = new Uint16Array(ye + 1), x = new Uint16Array(ye + 1);
    let Q = null, me, p, w;
    for (c = 0; c <= ye; c++) T[c] = 0;
    for (u = 0; u < n; u++) T[t[e + u]]++;
    for (d = l, f = ye; f >= 1 && T[f] === 0; f--) ;
    if (d > f && (d = f), f === 0) return s[i++] = 1 << 24 | 64 << 16 | 0, s[i++] = 1 << 24 | 64 << 16 | 0, a.bits = 1, 0;
    for (g = 1; g < f && T[g] === 0; g++) ;
    for (d < g && (d = g), m = 1, c = 1; c <= ye; c++) if (m <<= 1, m -= T[c], m < 0) return -1;
    if (m > 0 && (r === un || f !== 1)) return -1;
    for (x[1] = 0, c = 1; c < ye; c++) x[c + 1] = x[c] + T[c];
    for (u = 0; u < n; u++) t[e + u] !== 0 && (o[x[t[e + u]]++] = u);
    if (r === un ? (R = Q = o, M = 20) : r === At ? (R = ti, Q = ni, M = 257) : (R = ri, Q = si, M = 0), E = 0, u = 0, c = g, S = i, h = d, _ = 0, k = -1, y = 1 << d, N = y - 1, r === At && y > an || r === ln && y > cn) return 1;
    for (; ; ) {
      me = c - _, o[u] + 1 < M ? (p = 0, w = o[u]) : o[u] >= M ? (p = Q[o[u] - M], w = R[o[u] - M]) : (p = 96, w = 0), v = 1 << c - _, b = 1 << h, g = b;
      do
        b -= v, s[S + (E >> _) + b] = me << 24 | p << 16 | w | 0;
      while (b !== 0);
      for (v = 1 << c - 1; E & v; ) v >>= 1;
      if (v !== 0 ? (E &= v - 1, E += v) : E = 0, u++, --T[c] === 0) {
        if (c === f) break;
        c = t[e + o[u]];
      }
      if (c > d && (E & N) !== k) {
        for (_ === 0 && (_ = d), S += g, h = c - _, m = 1 << h; h + _ < f && (m -= T[h + _], !(m <= 0)); ) h++, m <<= 1;
        if (y += 1 << h, r === At && y > an || r === ln && y > cn) return 1;
        k = E & N, s[k] = d << 24 | h << 16 | S - i | 0;
      }
    }
    return E !== 0 && (s[S + E] = c - _ << 24 | 64 << 16 | 0), a.bits = d, 0;
  };
  var Pe = ii;
  const oi = 0, pr = 1, gr = 2, { Z_FINISH: dn, Z_BLOCK: ai, Z_TREES: He, Z_OK: fe, Z_STREAM_END: ci, Z_NEED_DICT: ui, Z_STREAM_ERROR: K, Z_DATA_ERROR: mr, Z_MEM_ERROR: yr, Z_BUF_ERROR: li, Z_DEFLATED: fn } = dr, gt = 16180, hn = 16181, pn = 16182, gn = 16183, mn = 16184, yn = 16185, wn = 16186, vn = 16187, bn = 16188, _n = 16189, rt = 16190, ee = 16191, Et = 16192, An = 16193, St = 16194, En = 16195, Sn = 16196, In = 16197, kn = 16198, We = 16199, Ye = 16200, xn = 16201, Tn = 16202, Ln = 16203, Cn = 16204, Mn = 16205, It = 16206, Rn = 16207, Pn = 16208, D = 16209, wr = 16210, vr = 16211, di = 852, fi = 592, hi = 15, pi = hi, On = (r) => (r >>> 24 & 255) + (r >>> 8 & 65280) + ((r & 65280) << 8) + ((r & 255) << 24);
  function gi() {
    this.strm = null, this.mode = 0, this.last = false, this.wrap = 0, this.havedict = false, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new Uint16Array(320), this.work = new Uint16Array(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
  }
  const ge = (r) => {
    if (!r) return 1;
    const t = r.state;
    return !t || t.strm !== r || t.mode < gt || t.mode > vr ? 1 : 0;
  }, br = (r) => {
    if (ge(r)) return K;
    const t = r.state;
    return r.total_in = r.total_out = t.total = 0, r.msg = "", t.wrap && (r.adler = t.wrap & 1), t.mode = gt, t.last = 0, t.havedict = 0, t.flags = -1, t.dmax = 32768, t.head = null, t.hold = 0, t.bits = 0, t.lencode = t.lendyn = new Int32Array(di), t.distcode = t.distdyn = new Int32Array(fi), t.sane = 1, t.back = -1, fe;
  }, _r = (r) => {
    if (ge(r)) return K;
    const t = r.state;
    return t.wsize = 0, t.whave = 0, t.wnext = 0, br(r);
  }, Ar = (r, t) => {
    let e;
    if (ge(r)) return K;
    const n = r.state;
    return t < 0 ? (e = 0, t = -t) : (e = (t >> 4) + 5, t < 48 && (t &= 15)), t && (t < 8 || t > 15) ? K : (n.window !== null && n.wbits !== t && (n.window = null), n.wrap = e, n.wbits = t, _r(r));
  }, Er = (r, t) => {
    if (!r) return K;
    const e = new gi();
    r.state = e, e.strm = r, e.window = null, e.mode = gt;
    const n = Ar(r, t);
    return n !== fe && (r.state = null), n;
  }, mi = (r) => Er(r, pi);
  let Dn = true, kt, xt;
  const yi = (r) => {
    if (Dn) {
      kt = new Int32Array(512), xt = new Int32Array(32);
      let t = 0;
      for (; t < 144; ) r.lens[t++] = 8;
      for (; t < 256; ) r.lens[t++] = 9;
      for (; t < 280; ) r.lens[t++] = 7;
      for (; t < 288; ) r.lens[t++] = 8;
      for (Pe(pr, r.lens, 0, 288, kt, 0, r.work, {
        bits: 9
      }), t = 0; t < 32; ) r.lens[t++] = 5;
      Pe(gr, r.lens, 0, 32, xt, 0, r.work, {
        bits: 5
      }), Dn = false;
    }
    r.lencode = kt, r.lenbits = 9, r.distcode = xt, r.distbits = 5;
  }, Sr = (r, t, e, n) => {
    let s;
    const i = r.state;
    return i.window === null && (i.window = new Uint8Array(1 << i.wbits)), i.wsize === 0 && (i.wsize = 1 << i.wbits, i.wnext = 0, i.whave = 0), n >= i.wsize ? (i.window.set(t.subarray(e - i.wsize, e), 0), i.wnext = 0, i.whave = i.wsize) : (s = i.wsize - i.wnext, s > n && (s = n), i.window.set(t.subarray(e - n, e - n + s), i.wnext), n -= s, n ? (i.window.set(t.subarray(e - n, e), 0), i.wnext = n, i.whave = i.wsize) : (i.wnext += s, i.wnext === i.wsize && (i.wnext = 0), i.whave < i.wsize && (i.whave += s))), 0;
  }, wi = (r, t) => {
    let e, n, s, i, o, a, l, c, u, g, f, d, h, _, m = 0, y, E, v, b, k, N, S, R;
    const M = new Uint8Array(4);
    let T, x;
    const Q = new Uint8Array([
      16,
      17,
      18,
      0,
      8,
      7,
      9,
      6,
      10,
      5,
      11,
      4,
      12,
      3,
      13,
      2,
      14,
      1,
      15
    ]);
    if (ge(r) || !r.output || !r.input && r.avail_in !== 0) return K;
    e = r.state, e.mode === ee && (e.mode = Et), o = r.next_out, s = r.output, l = r.avail_out, i = r.next_in, n = r.input, a = r.avail_in, c = e.hold, u = e.bits, g = a, f = l, R = fe;
    e: for (; ; ) switch (e.mode) {
      case gt:
        if (e.wrap === 0) {
          e.mode = Et;
          break;
        }
        for (; u < 16; ) {
          if (a === 0) break e;
          a--, c += n[i++] << u, u += 8;
        }
        if (e.wrap & 2 && c === 35615) {
          e.wbits === 0 && (e.wbits = 15), e.check = 0, M[0] = c & 255, M[1] = c >>> 8 & 255, e.check = H(e.check, M, 2, 0), c = 0, u = 0, e.mode = hn;
          break;
        }
        if (e.head && (e.head.done = false), !(e.wrap & 1) || (((c & 255) << 8) + (c >> 8)) % 31) {
          r.msg = "incorrect header check", e.mode = D;
          break;
        }
        if ((c & 15) !== fn) {
          r.msg = "unknown compression method", e.mode = D;
          break;
        }
        if (c >>>= 4, u -= 4, S = (c & 15) + 8, e.wbits === 0 && (e.wbits = S), S > 15 || S > e.wbits) {
          r.msg = "invalid window size", e.mode = D;
          break;
        }
        e.dmax = 1 << e.wbits, e.flags = 0, r.adler = e.check = 1, e.mode = c & 512 ? _n : ee, c = 0, u = 0;
        break;
      case hn:
        for (; u < 16; ) {
          if (a === 0) break e;
          a--, c += n[i++] << u, u += 8;
        }
        if (e.flags = c, (e.flags & 255) !== fn) {
          r.msg = "unknown compression method", e.mode = D;
          break;
        }
        if (e.flags & 57344) {
          r.msg = "unknown header flags set", e.mode = D;
          break;
        }
        e.head && (e.head.text = c >> 8 & 1), e.flags & 512 && e.wrap & 4 && (M[0] = c & 255, M[1] = c >>> 8 & 255, e.check = H(e.check, M, 2, 0)), c = 0, u = 0, e.mode = pn;
      case pn:
        for (; u < 32; ) {
          if (a === 0) break e;
          a--, c += n[i++] << u, u += 8;
        }
        e.head && (e.head.time = c), e.flags & 512 && e.wrap & 4 && (M[0] = c & 255, M[1] = c >>> 8 & 255, M[2] = c >>> 16 & 255, M[3] = c >>> 24 & 255, e.check = H(e.check, M, 4, 0)), c = 0, u = 0, e.mode = gn;
      case gn:
        for (; u < 16; ) {
          if (a === 0) break e;
          a--, c += n[i++] << u, u += 8;
        }
        e.head && (e.head.xflags = c & 255, e.head.os = c >> 8), e.flags & 512 && e.wrap & 4 && (M[0] = c & 255, M[1] = c >>> 8 & 255, e.check = H(e.check, M, 2, 0)), c = 0, u = 0, e.mode = mn;
      case mn:
        if (e.flags & 1024) {
          for (; u < 16; ) {
            if (a === 0) break e;
            a--, c += n[i++] << u, u += 8;
          }
          e.length = c, e.head && (e.head.extra_len = c), e.flags & 512 && e.wrap & 4 && (M[0] = c & 255, M[1] = c >>> 8 & 255, e.check = H(e.check, M, 2, 0)), c = 0, u = 0;
        } else e.head && (e.head.extra = null);
        e.mode = yn;
      case yn:
        if (e.flags & 1024 && (d = e.length, d > a && (d = a), d && (e.head && (S = e.head.extra_len - e.length, e.head.extra || (e.head.extra = new Uint8Array(e.head.extra_len)), e.head.extra.set(n.subarray(i, i + d), S)), e.flags & 512 && e.wrap & 4 && (e.check = H(e.check, n, d, i)), a -= d, i += d, e.length -= d), e.length)) break e;
        e.length = 0, e.mode = wn;
      case wn:
        if (e.flags & 2048) {
          if (a === 0) break e;
          d = 0;
          do
            S = n[i + d++], e.head && S && e.length < 65536 && (e.head.name += String.fromCharCode(S));
          while (S && d < a);
          if (e.flags & 512 && e.wrap & 4 && (e.check = H(e.check, n, d, i)), a -= d, i += d, S) break e;
        } else e.head && (e.head.name = null);
        e.length = 0, e.mode = vn;
      case vn:
        if (e.flags & 4096) {
          if (a === 0) break e;
          d = 0;
          do
            S = n[i + d++], e.head && S && e.length < 65536 && (e.head.comment += String.fromCharCode(S));
          while (S && d < a);
          if (e.flags & 512 && e.wrap & 4 && (e.check = H(e.check, n, d, i)), a -= d, i += d, S) break e;
        } else e.head && (e.head.comment = null);
        e.mode = bn;
      case bn:
        if (e.flags & 512) {
          for (; u < 16; ) {
            if (a === 0) break e;
            a--, c += n[i++] << u, u += 8;
          }
          if (e.wrap & 4 && c !== (e.check & 65535)) {
            r.msg = "header crc mismatch", e.mode = D;
            break;
          }
          c = 0, u = 0;
        }
        e.head && (e.head.hcrc = e.flags >> 9 & 1, e.head.done = true), r.adler = e.check = 0, e.mode = ee;
        break;
      case _n:
        for (; u < 32; ) {
          if (a === 0) break e;
          a--, c += n[i++] << u, u += 8;
        }
        r.adler = e.check = On(c), c = 0, u = 0, e.mode = rt;
      case rt:
        if (e.havedict === 0) return r.next_out = o, r.avail_out = l, r.next_in = i, r.avail_in = a, e.hold = c, e.bits = u, ui;
        r.adler = e.check = 1, e.mode = ee;
      case ee:
        if (t === ai || t === He) break e;
      case Et:
        if (e.last) {
          c >>>= u & 7, u -= u & 7, e.mode = It;
          break;
        }
        for (; u < 3; ) {
          if (a === 0) break e;
          a--, c += n[i++] << u, u += 8;
        }
        switch (e.last = c & 1, c >>>= 1, u -= 1, c & 3) {
          case 0:
            e.mode = An;
            break;
          case 1:
            if (yi(e), e.mode = We, t === He) {
              c >>>= 2, u -= 2;
              break e;
            }
            break;
          case 2:
            e.mode = Sn;
            break;
          case 3:
            r.msg = "invalid block type", e.mode = D;
        }
        c >>>= 2, u -= 2;
        break;
      case An:
        for (c >>>= u & 7, u -= u & 7; u < 32; ) {
          if (a === 0) break e;
          a--, c += n[i++] << u, u += 8;
        }
        if ((c & 65535) !== (c >>> 16 ^ 65535)) {
          r.msg = "invalid stored block lengths", e.mode = D;
          break;
        }
        if (e.length = c & 65535, c = 0, u = 0, e.mode = St, t === He) break e;
      case St:
        e.mode = En;
      case En:
        if (d = e.length, d) {
          if (d > a && (d = a), d > l && (d = l), d === 0) break e;
          s.set(n.subarray(i, i + d), o), a -= d, i += d, l -= d, o += d, e.length -= d;
          break;
        }
        e.mode = ee;
        break;
      case Sn:
        for (; u < 14; ) {
          if (a === 0) break e;
          a--, c += n[i++] << u, u += 8;
        }
        if (e.nlen = (c & 31) + 257, c >>>= 5, u -= 5, e.ndist = (c & 31) + 1, c >>>= 5, u -= 5, e.ncode = (c & 15) + 4, c >>>= 4, u -= 4, e.nlen > 286 || e.ndist > 30) {
          r.msg = "too many length or distance symbols", e.mode = D;
          break;
        }
        e.have = 0, e.mode = In;
      case In:
        for (; e.have < e.ncode; ) {
          for (; u < 3; ) {
            if (a === 0) break e;
            a--, c += n[i++] << u, u += 8;
          }
          e.lens[Q[e.have++]] = c & 7, c >>>= 3, u -= 3;
        }
        for (; e.have < 19; ) e.lens[Q[e.have++]] = 0;
        if (e.lencode = e.lendyn, e.lenbits = 7, T = {
          bits: e.lenbits
        }, R = Pe(oi, e.lens, 0, 19, e.lencode, 0, e.work, T), e.lenbits = T.bits, R) {
          r.msg = "invalid code lengths set", e.mode = D;
          break;
        }
        e.have = 0, e.mode = kn;
      case kn:
        for (; e.have < e.nlen + e.ndist; ) {
          for (; m = e.lencode[c & (1 << e.lenbits) - 1], y = m >>> 24, E = m >>> 16 & 255, v = m & 65535, !(y <= u); ) {
            if (a === 0) break e;
            a--, c += n[i++] << u, u += 8;
          }
          if (v < 16) c >>>= y, u -= y, e.lens[e.have++] = v;
          else {
            if (v === 16) {
              for (x = y + 2; u < x; ) {
                if (a === 0) break e;
                a--, c += n[i++] << u, u += 8;
              }
              if (c >>>= y, u -= y, e.have === 0) {
                r.msg = "invalid bit length repeat", e.mode = D;
                break;
              }
              S = e.lens[e.have - 1], d = 3 + (c & 3), c >>>= 2, u -= 2;
            } else if (v === 17) {
              for (x = y + 3; u < x; ) {
                if (a === 0) break e;
                a--, c += n[i++] << u, u += 8;
              }
              c >>>= y, u -= y, S = 0, d = 3 + (c & 7), c >>>= 3, u -= 3;
            } else {
              for (x = y + 7; u < x; ) {
                if (a === 0) break e;
                a--, c += n[i++] << u, u += 8;
              }
              c >>>= y, u -= y, S = 0, d = 11 + (c & 127), c >>>= 7, u -= 7;
            }
            if (e.have + d > e.nlen + e.ndist) {
              r.msg = "invalid bit length repeat", e.mode = D;
              break;
            }
            for (; d--; ) e.lens[e.have++] = S;
          }
        }
        if (e.mode === D) break;
        if (e.lens[256] === 0) {
          r.msg = "invalid code -- missing end-of-block", e.mode = D;
          break;
        }
        if (e.lenbits = 9, T = {
          bits: e.lenbits
        }, R = Pe(pr, e.lens, 0, e.nlen, e.lencode, 0, e.work, T), e.lenbits = T.bits, R) {
          r.msg = "invalid literal/lengths set", e.mode = D;
          break;
        }
        if (e.distbits = 6, e.distcode = e.distdyn, T = {
          bits: e.distbits
        }, R = Pe(gr, e.lens, e.nlen, e.ndist, e.distcode, 0, e.work, T), e.distbits = T.bits, R) {
          r.msg = "invalid distances set", e.mode = D;
          break;
        }
        if (e.mode = We, t === He) break e;
      case We:
        e.mode = Ye;
      case Ye:
        if (a >= 6 && l >= 258) {
          r.next_out = o, r.avail_out = l, r.next_in = i, r.avail_in = a, e.hold = c, e.bits = u, ei(r, f), o = r.next_out, s = r.output, l = r.avail_out, i = r.next_in, n = r.input, a = r.avail_in, c = e.hold, u = e.bits, e.mode === ee && (e.back = -1);
          break;
        }
        for (e.back = 0; m = e.lencode[c & (1 << e.lenbits) - 1], y = m >>> 24, E = m >>> 16 & 255, v = m & 65535, !(y <= u); ) {
          if (a === 0) break e;
          a--, c += n[i++] << u, u += 8;
        }
        if (E && (E & 240) === 0) {
          for (b = y, k = E, N = v; m = e.lencode[N + ((c & (1 << b + k) - 1) >> b)], y = m >>> 24, E = m >>> 16 & 255, v = m & 65535, !(b + y <= u); ) {
            if (a === 0) break e;
            a--, c += n[i++] << u, u += 8;
          }
          c >>>= b, u -= b, e.back += b;
        }
        if (c >>>= y, u -= y, e.back += y, e.length = v, E === 0) {
          e.mode = Mn;
          break;
        }
        if (E & 32) {
          e.back = -1, e.mode = ee;
          break;
        }
        if (E & 64) {
          r.msg = "invalid literal/length code", e.mode = D;
          break;
        }
        e.extra = E & 15, e.mode = xn;
      case xn:
        if (e.extra) {
          for (x = e.extra; u < x; ) {
            if (a === 0) break e;
            a--, c += n[i++] << u, u += 8;
          }
          e.length += c & (1 << e.extra) - 1, c >>>= e.extra, u -= e.extra, e.back += e.extra;
        }
        e.was = e.length, e.mode = Tn;
      case Tn:
        for (; m = e.distcode[c & (1 << e.distbits) - 1], y = m >>> 24, E = m >>> 16 & 255, v = m & 65535, !(y <= u); ) {
          if (a === 0) break e;
          a--, c += n[i++] << u, u += 8;
        }
        if ((E & 240) === 0) {
          for (b = y, k = E, N = v; m = e.distcode[N + ((c & (1 << b + k) - 1) >> b)], y = m >>> 24, E = m >>> 16 & 255, v = m & 65535, !(b + y <= u); ) {
            if (a === 0) break e;
            a--, c += n[i++] << u, u += 8;
          }
          c >>>= b, u -= b, e.back += b;
        }
        if (c >>>= y, u -= y, e.back += y, E & 64) {
          r.msg = "invalid distance code", e.mode = D;
          break;
        }
        e.offset = v, e.extra = E & 15, e.mode = Ln;
      case Ln:
        if (e.extra) {
          for (x = e.extra; u < x; ) {
            if (a === 0) break e;
            a--, c += n[i++] << u, u += 8;
          }
          e.offset += c & (1 << e.extra) - 1, c >>>= e.extra, u -= e.extra, e.back += e.extra;
        }
        if (e.offset > e.dmax) {
          r.msg = "invalid distance too far back", e.mode = D;
          break;
        }
        e.mode = Cn;
      case Cn:
        if (l === 0) break e;
        if (d = f - l, e.offset > d) {
          if (d = e.offset - d, d > e.whave && e.sane) {
            r.msg = "invalid distance too far back", e.mode = D;
            break;
          }
          d > e.wnext ? (d -= e.wnext, h = e.wsize - d) : h = e.wnext - d, d > e.length && (d = e.length), _ = e.window;
        } else _ = s, h = o - e.offset, d = e.length;
        d > l && (d = l), l -= d, e.length -= d;
        do
          s[o++] = _[h++];
        while (--d);
        e.length === 0 && (e.mode = Ye);
        break;
      case Mn:
        if (l === 0) break e;
        s[o++] = e.length, l--, e.mode = Ye;
        break;
      case It:
        if (e.wrap) {
          for (; u < 32; ) {
            if (a === 0) break e;
            a--, c |= n[i++] << u, u += 8;
          }
          if (f -= l, r.total_out += f, e.total += f, e.wrap & 4 && f && (r.adler = e.check = e.flags ? H(e.check, s, f, o - f) : Dt(e.check, s, f, o - f)), f = l, e.wrap & 4 && (e.flags ? c : On(c)) !== e.check) {
            r.msg = "incorrect data check", e.mode = D;
            break;
          }
          c = 0, u = 0;
        }
        e.mode = Rn;
      case Rn:
        if (e.wrap && e.flags) {
          for (; u < 32; ) {
            if (a === 0) break e;
            a--, c += n[i++] << u, u += 8;
          }
          if (e.wrap & 4 && c !== (e.total & 4294967295)) {
            r.msg = "incorrect length check", e.mode = D;
            break;
          }
          c = 0, u = 0;
        }
        e.mode = Pn;
      case Pn:
        R = ci;
        break e;
      case D:
        R = mr;
        break e;
      case wr:
        return yr;
      case vr:
      default:
        return K;
    }
    return r.next_out = o, r.avail_out = l, r.next_in = i, r.avail_in = a, e.hold = c, e.bits = u, (e.wsize || f !== r.avail_out && e.mode < D && (e.mode < It || t !== dn)) && Sr(r, r.output, r.next_out, f - r.avail_out), g -= r.avail_in, f -= r.avail_out, r.total_in += g, r.total_out += f, e.total += f, e.wrap & 4 && f && (r.adler = e.check = e.flags ? H(e.check, s, f, r.next_out - f) : Dt(e.check, s, f, r.next_out - f)), r.data_type = e.bits + (e.last ? 64 : 0) + (e.mode === ee ? 128 : 0) + (e.mode === We || e.mode === St ? 256 : 0), (g === 0 && f === 0 || t === dn) && R === fe && (R = li), R;
  }, vi = (r) => {
    if (ge(r)) return K;
    let t = r.state;
    return t.window && (t.window = null), r.state = null, fe;
  }, bi = (r, t) => {
    if (ge(r)) return K;
    const e = r.state;
    return (e.wrap & 2) === 0 ? K : (e.head = t, t.done = false, fe);
  }, _i = (r, t) => {
    const e = t.length;
    let n, s, i;
    return ge(r) || (n = r.state, n.wrap !== 0 && n.mode !== rt) ? K : n.mode === rt && (s = 1, s = Dt(s, t, e, 0), s !== n.check) ? mr : (i = Sr(r, t, e, e), i ? (n.mode = wr, yr) : (n.havedict = 1, fe));
  };
  var Ai = _r, Ei = Ar, Si = br, Ii = mi, ki = Er, xi = wi, Ti = vi, Li = bi, Ci = _i, Mi = "pako inflate (from Nodeca project)", Y = {
    inflateReset: Ai,
    inflateReset2: Ei,
    inflateResetKeep: Si,
    inflateInit: Ii,
    inflateInit2: ki,
    inflate: xi,
    inflateEnd: Ti,
    inflateGetHeader: Li,
    inflateSetDictionary: Ci,
    inflateInfo: Mi
  };
  function Ri() {
    this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = false;
  }
  var Pi = Ri;
  const Ir = Object.prototype.toString, { Z_NO_FLUSH: Oi, Z_FINISH: Un, Z_OK: ve, Z_STREAM_END: Tt, Z_NEED_DICT: Lt, Z_STREAM_ERROR: Di, Z_DATA_ERROR: Nn, Z_MEM_ERROR: Ui, Z_BUF_ERROR: Bn } = dr, Ni = {
    chunkSize: 1024 * 64,
    windowBits: 15,
    to: ""
  };
  function mt(r) {
    this.options = fr.assign({}, Ni, r || {});
    const t = this.options;
    t.raw && t.windowBits >= 0 && t.windowBits < 16 && (t.windowBits = -t.windowBits, t.windowBits === 0 && (t.windowBits = -15)), t.windowBits >= 0 && t.windowBits < 16 && !(r && r.windowBits) && (t.windowBits += 32), t.windowBits > 15 && t.windowBits < 48 && (t.windowBits & 15) === 0 && (t.windowBits |= 15), this.err = 0, this.msg = "", this.ended = false, this.chunks = [], this.strm = new Js(), this.strm.avail_out = 0;
    let e = Y.inflateInit2(this.strm, t.windowBits);
    if (e !== ve) throw new Error(Ut[e]);
    if (this.header = new Pi(), Y.inflateGetHeader(this.strm, this.header), t.dictionary && (typeof t.dictionary == "string" ? t.dictionary = Nt.string2buf(t.dictionary) : Ir.call(t.dictionary) === "[object ArrayBuffer]" && (t.dictionary = new Uint8Array(t.dictionary)), t.raw && (e = Y.inflateSetDictionary(this.strm, t.dictionary), e !== ve))) throw new Error(Ut[e]);
  }
  mt.prototype.push = function(r, t) {
    const e = this.strm, n = this.options.chunkSize, s = this.options.dictionary;
    let i, o, a;
    if (this.ended) return false;
    for (t === ~~t ? o = t : o = t === true ? Un : Oi, Ir.call(r) === "[object ArrayBuffer]" ? e.input = new Uint8Array(r) : e.input = r, e.next_in = 0, e.avail_in = e.input.length; ; ) {
      for (e.avail_out === 0 && (e.output = new Uint8Array(n), e.next_out = 0, e.avail_out = n), i = Y.inflate(e, o), i === Lt && s && (i = Y.inflateSetDictionary(e, s), i === ve ? i = Y.inflate(e, o) : i === Nn && (i = Lt)); e.avail_in > 0 && i === Tt && e.state.wrap & 2 && e.state.flags !== 0 && e.input[e.next_in] !== 0; ) Y.inflateReset(e), i = Y.inflate(e, o);
      switch (i) {
        case Di:
        case Nn:
        case Lt:
        case Ui:
          return this.onEnd(i), this.ended = true, false;
      }
      if (a = e.avail_out, e.next_out && (e.avail_out === 0 || i === Tt || o > 0)) if (this.options.to === "string") {
        let l = Nt.utf8border(e.output, e.next_out), c = e.next_out - l, u = Nt.buf2string(e.output, l);
        e.next_out = c, e.avail_out = n - c, c && e.output.set(e.output.subarray(l, l + c), 0), this.onData(u);
      } else this.onData(e.output.length === e.next_out ? e.output : e.output.subarray(0, e.next_out)), e.avail_out = 0, e.next_out = 0;
      if (!((i === ve || i === Bn) && a === 0)) {
        if (i === Tt) return i = Y.inflateEnd(this.strm), this.onEnd(i), this.ended = true, true;
        if (e.avail_in === 0) {
          if (o === Un) return i = Y.inflateEnd(this.strm), this.onEnd(i === ve ? Bn : i), this.ended = true, false;
          break;
        }
      }
    }
    return true;
  };
  mt.prototype.onData = function(r) {
    this.chunks.push(r);
  };
  mt.prototype.onEnd = function(r) {
    r === ve && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = fr.flattenChunks(this.chunks)), this.chunks = [], this.err = r, this.msg = this.strm.msg;
  };
  function Bi(r, t) {
    const e = new mt(t);
    if (e.push(r, true), e.err) throw e.msg || Ut[e.err];
    return e.result;
  }
  var zi = Bi, $i = {
    inflate: zi
  };
  const { inflate: Vi } = $i;
  var Fi = Vi, Ct = {
    exports: {}
  }, zn;
  function qi() {
    return zn || (zn = 1, (function(r) {
      var t = Object.prototype.hasOwnProperty, e = "~";
      function n() {
      }
      Object.create && (n.prototype = /* @__PURE__ */ Object.create(null), new n().__proto__ || (e = false));
      function s(l, c, u) {
        this.fn = l, this.context = c, this.once = u || false;
      }
      function i(l, c, u, g, f) {
        if (typeof u != "function") throw new TypeError("The listener must be a function");
        var d = new s(u, g || l, f), h = e ? e + c : c;
        return l._events[h] ? l._events[h].fn ? l._events[h] = [
          l._events[h],
          d
        ] : l._events[h].push(d) : (l._events[h] = d, l._eventsCount++), l;
      }
      function o(l, c) {
        --l._eventsCount === 0 ? l._events = new n() : delete l._events[c];
      }
      function a() {
        this._events = new n(), this._eventsCount = 0;
      }
      a.prototype.eventNames = function() {
        var c = [], u, g;
        if (this._eventsCount === 0) return c;
        for (g in u = this._events) t.call(u, g) && c.push(e ? g.slice(1) : g);
        return Object.getOwnPropertySymbols ? c.concat(Object.getOwnPropertySymbols(u)) : c;
      }, a.prototype.listeners = function(c) {
        var u = e ? e + c : c, g = this._events[u];
        if (!g) return [];
        if (g.fn) return [
          g.fn
        ];
        for (var f = 0, d = g.length, h = new Array(d); f < d; f++) h[f] = g[f].fn;
        return h;
      }, a.prototype.listenerCount = function(c) {
        var u = e ? e + c : c, g = this._events[u];
        return g ? g.fn ? 1 : g.length : 0;
      }, a.prototype.emit = function(c, u, g, f, d, h) {
        var _ = e ? e + c : c;
        if (!this._events[_]) return false;
        var m = this._events[_], y = arguments.length, E, v;
        if (m.fn) {
          switch (m.once && this.removeListener(c, m.fn, void 0, true), y) {
            case 1:
              return m.fn.call(m.context), true;
            case 2:
              return m.fn.call(m.context, u), true;
            case 3:
              return m.fn.call(m.context, u, g), true;
            case 4:
              return m.fn.call(m.context, u, g, f), true;
            case 5:
              return m.fn.call(m.context, u, g, f, d), true;
            case 6:
              return m.fn.call(m.context, u, g, f, d, h), true;
          }
          for (v = 1, E = new Array(y - 1); v < y; v++) E[v - 1] = arguments[v];
          m.fn.apply(m.context, E);
        } else {
          var b = m.length, k;
          for (v = 0; v < b; v++) switch (m[v].once && this.removeListener(c, m[v].fn, void 0, true), y) {
            case 1:
              m[v].fn.call(m[v].context);
              break;
            case 2:
              m[v].fn.call(m[v].context, u);
              break;
            case 3:
              m[v].fn.call(m[v].context, u, g);
              break;
            case 4:
              m[v].fn.call(m[v].context, u, g, f);
              break;
            default:
              if (!E) for (k = 1, E = new Array(y - 1); k < y; k++) E[k - 1] = arguments[k];
              m[v].fn.apply(m[v].context, E);
          }
        }
        return true;
      }, a.prototype.on = function(c, u, g) {
        return i(this, c, u, g, false);
      }, a.prototype.once = function(c, u, g) {
        return i(this, c, u, g, true);
      }, a.prototype.removeListener = function(c, u, g, f) {
        var d = e ? e + c : c;
        if (!this._events[d]) return this;
        if (!u) return o(this, d), this;
        var h = this._events[d];
        if (h.fn) h.fn === u && (!f || h.once) && (!g || h.context === g) && o(this, d);
        else {
          for (var _ = 0, m = [], y = h.length; _ < y; _++) (h[_].fn !== u || f && !h[_].once || g && h[_].context !== g) && m.push(h[_]);
          m.length ? this._events[d] = m.length === 1 ? m[0] : m : o(this, d);
        }
        return this;
      }, a.prototype.removeAllListeners = function(c) {
        var u;
        return c ? (u = e ? e + c : c, this._events[u] && o(this, u)) : (this._events = new n(), this._eventsCount = 0), this;
      }, a.prototype.off = a.prototype.removeListener, a.prototype.addListener = a.prototype.on, a.prefixed = e, a.EventEmitter = a, r.exports = a;
    })(Ct)), Ct.exports;
  }
  var Ki = qi();
  const ji = er(Ki);
  function Gi(r, t) {
    return Array.apply(0, new Array(Math.ceil(r.length / t))).map((e, n) => r.slice(n * t, (n + 1) * t));
  }
  const Te = (r) => "version" in r;
  function Zi(r) {
    return new TextDecoder("utf-8").decode(r);
  }
  function Hi(r) {
    return new TextEncoder().encode(r);
  }
  function $n(r) {
    return Me.encode(r);
  }
  function Vn(r) {
    return r.toString("base64");
  }
  function kr(r) {
    return G.from(r, "base64");
  }
  function Wi(r) {
    const t = /* @__PURE__ */ new Map();
    return r.errors && r.errors.forEach((e) => {
      var n;
      let s = (n = e.msg) !== null && n !== void 0 ? n : e.name;
      t.set(e.code, s);
    }), t;
  }
  function Yi(r, ...t) {
    if (r.args.length != t.length) throw new Error("Invalid argument length");
    const e = {};
    let n = 0;
    return r.args.forEach((s) => {
      e[s.name] = t[n], n += 1;
    }), e;
  }
  function xr(r, t = {}) {
    r.forEach((e) => {
      if ("accounts" in e) xr(e.accounts, t[e.name]);
      else if (t[e.name] === void 0) throw new Error(`Invalid arguments: ${e.name} not provided.`);
    });
  }
  function q(r) {
    return r instanceof P ? r : new P(r);
  }
  class Xi extends TypeError {
    constructor(t, e) {
      let n;
      const { message: s, ...i } = t, { path: o } = t, a = o.length === 0 ? s : "At path: " + o.join(".") + " -- " + s;
      super(a), this.value = void 0, this.key = void 0, this.type = void 0, this.refinement = void 0, this.path = void 0, this.branch = void 0, this.failures = void 0, Object.assign(this, i), this.name = this.constructor.name, this.failures = () => {
        var l;
        return (l = n) != null ? l : n = [
          t,
          ...e()
        ];
      };
    }
  }
  function Ji(r) {
    return be(r) && typeof r[Symbol.iterator] == "function";
  }
  function be(r) {
    return typeof r == "object" && r != null;
  }
  function ie(r) {
    return typeof r == "string" ? JSON.stringify(r) : "" + r;
  }
  function Qi(r) {
    const { done: t, value: e } = r.next();
    return t ? void 0 : e;
  }
  function eo(r, t, e, n) {
    if (r === true) return;
    r === false ? r = {} : typeof r == "string" && (r = {
      message: r
    });
    const { path: s, branch: i } = t, { type: o } = e, { refinement: a, message: l = "Expected a value of type `" + o + "`" + (a ? " with refinement `" + a + "`" : "") + ", but received: `" + ie(n) + "`" } = r;
    return {
      value: n,
      type: o,
      refinement: a,
      key: s[s.length - 1],
      path: s,
      branch: i,
      ...r,
      message: l
    };
  }
  function* Fn(r, t, e, n) {
    Ji(r) || (r = [
      r
    ]);
    for (const s of r) {
      const i = eo(s, t, e, n);
      i && (yield i);
    }
  }
  function* Ht(r, t, e) {
    e === void 0 && (e = {});
    const { path: n = [], branch: s = [
      r
    ], coerce: i = false, mask: o = false } = e, a = {
      path: n,
      branch: s
    };
    if (i && (r = t.coercer(r, a), o && t.type !== "type" && be(t.schema) && be(r) && !Array.isArray(r))) for (const c in r) t.schema[c] === void 0 && delete r[c];
    let l = true;
    for (const c of t.validator(r, a)) l = false, yield [
      c,
      void 0
    ];
    for (let [c, u, g] of t.entries(r, a)) {
      const f = Ht(u, g, {
        path: c === void 0 ? n : [
          ...n,
          c
        ],
        branch: c === void 0 ? s : [
          ...s,
          u
        ],
        coerce: i,
        mask: o
      });
      for (const d of f) d[0] ? (l = false, yield [
        d[0],
        void 0
      ]) : i && (u = d[1], c === void 0 ? r = u : r instanceof Map ? r.set(c, u) : r instanceof Set ? r.add(u) : be(r) && (r[c] = u));
    }
    if (l) for (const c of t.refiner(r, a)) l = false, yield [
      c,
      void 0
    ];
    l && (yield [
      void 0,
      r
    ]);
  }
  class ae {
    constructor(t) {
      this.TYPE = void 0, this.type = void 0, this.schema = void 0, this.coercer = void 0, this.validator = void 0, this.refiner = void 0, this.entries = void 0;
      const { type: e, schema: n, validator: s, refiner: i, coercer: o = (l) => l, entries: a = function* () {
      } } = t;
      this.type = e, this.schema = n, this.entries = a, this.coercer = o, s ? this.validator = (l, c) => {
        const u = s(l, c);
        return Fn(u, c, this, l);
      } : this.validator = () => [], i ? this.refiner = (l, c) => {
        const u = i(l, c);
        return Fn(u, c, this, l);
      } : this.refiner = () => [];
    }
    assert(t) {
      return to(t, this);
    }
    create(t) {
      return Wt(t, this);
    }
    is(t) {
      return Tr(t, this);
    }
    mask(t) {
      return no(t, this);
    }
    validate(t, e) {
      return e === void 0 && (e = {}), $e(t, this, e);
    }
  }
  function to(r, t) {
    const e = $e(r, t);
    if (e[0]) throw e[0];
  }
  function Wt(r, t) {
    const e = $e(r, t, {
      coerce: true
    });
    if (e[0]) throw e[0];
    return e[1];
  }
  function no(r, t) {
    const e = $e(r, t, {
      coerce: true,
      mask: true
    });
    if (e[0]) throw e[0];
    return e[1];
  }
  function Tr(r, t) {
    return !$e(r, t)[0];
  }
  function $e(r, t, e) {
    e === void 0 && (e = {});
    const n = Ht(r, t, e), s = Qi(n);
    return s[0] ? [
      new Xi(s[0], function* () {
        for (const o of n) o[0] && (yield o[0]);
      }),
      void 0
    ] : [
      void 0,
      s[1]
    ];
  }
  function Ve(r, t) {
    return new ae({
      type: r,
      schema: null,
      validator: t
    });
  }
  function ro() {
    return Ve("any", () => true);
  }
  function Mt(r) {
    return new ae({
      type: "array",
      schema: r,
      *entries(t) {
        if (r && Array.isArray(t)) for (const [e, n] of t.entries()) yield [
          e,
          n,
          r
        ];
      },
      coercer(t) {
        return Array.isArray(t) ? t.slice() : t;
      },
      validator(t) {
        return Array.isArray(t) || "Expected an array value, but received: " + ie(t);
      }
    });
  }
  function so() {
    return Ve("boolean", (r) => typeof r == "boolean");
  }
  function qn(r) {
    const t = ie(r);
    return new ae({
      type: "literal",
      schema: r,
      validator(e) {
        return e === r || "Expected the literal `" + t + "`, but received: " + ie(e);
      }
    });
  }
  function Xe(r) {
    return new ae({
      ...r,
      validator: (t, e) => t === null || r.validator(t, e),
      refiner: (t, e) => t === null || r.refiner(t, e)
    });
  }
  function tt() {
    return Ve("number", (r) => typeof r == "number" && !isNaN(r) || "Expected a number, but received: " + ie(r));
  }
  function nt(r) {
    return new ae({
      ...r,
      validator: (t, e) => t === void 0 || r.validator(t, e),
      refiner: (t, e) => t === void 0 || r.refiner(t, e)
    });
  }
  function ce() {
    return Ve("string", (r) => typeof r == "string" || "Expected a string, but received: " + ie(r));
  }
  function se(r) {
    const t = Object.keys(r);
    return new ae({
      type: "type",
      schema: r,
      *entries(e) {
        if (be(e)) for (const n of t) yield [
          n,
          e[n],
          r[n]
        ];
      },
      validator(e) {
        return be(e) || "Expected an object, but received: " + ie(e);
      }
    });
  }
  function Lr(r) {
    const t = r.map((e) => e.type).join(" | ");
    return new ae({
      type: "union",
      schema: null,
      coercer(e, n) {
        return (r.find((i) => {
          const [o] = i.validate(e, {
            coerce: true
          });
          return !o;
        }) || Yt()).coercer(e, n);
      },
      validator(e, n) {
        const s = [];
        for (const i of r) {
          const [...o] = Ht(e, i, n), [a] = o;
          if (a[0]) for (const [l] of o) l && s.push(l);
          else return [];
        }
        return [
          "Expected the value to satisfy a union of `" + t + "`, but received: " + ie(e),
          ...s
        ];
      }
    });
  }
  function Yt() {
    return Ve("unknown", () => true);
  }
  function io(r, t, e) {
    return new ae({
      ...r,
      coercer: (n, s) => Tr(n, t) ? r.coercer(e(n, s), s) : r.coercer(n, s)
    });
  }
  const Kn = 99;
  async function oo(r, t, e) {
    if (t.length <= Kn) return await jn(r, t, e);
    {
      const n = Gi(t, Kn);
      return (await Promise.all(n.map((i) => jn(r, i, e)))).flat();
    }
  }
  async function jn(r, t, e) {
    const n = e ?? r.commitment, { value: s, context: i } = await r.getMultipleAccountsInfoAndContext(t, n);
    return s.map((a, l) => a === null ? null : {
      publicKey: t[l],
      account: a,
      context: i
    });
  }
  async function ao(r, t, e, n, s) {
    var i;
    e && e.length > 0 && t.sign(...e);
    const o = t._compile(), a = o.serialize(), c = t._serialize(a).toString("base64"), u = {
      encoding: "base64",
      commitment: n ?? r.commitment
    };
    if (s) {
      const h = (Array.isArray(s) ? s : o.nonProgramIds()).map((_) => _.toBase58());
      u.accounts = {
        encoding: "base64",
        addresses: h
      };
    }
    e && (u.sigVerify = true);
    const g = [
      c,
      u
    ], f = await r._rpcRequest("simulateTransaction", g), d = Wt(f, fo);
    if ("error" in d) {
      let h;
      if ("data" in d.error && (h = (i = d.error.data) === null || i === void 0 ? void 0 : i.logs, h && Array.isArray(h))) {
        const _ = `
    `, m = _ + h.join(_);
        console.error(d.error.message, m);
      }
      throw new Ot("failed to simulate transaction: " + d.error.message, h);
    }
    return d.result;
  }
  function co(r) {
    return io(Cr(r), uo, (t) => "error" in t ? t : {
      ...t,
      result: Wt(t.result, r)
    });
  }
  const uo = Cr(Yt());
  function Cr(r) {
    return Lr([
      se({
        jsonrpc: qn("2.0"),
        id: ce(),
        result: r
      }),
      se({
        jsonrpc: qn("2.0"),
        id: ce(),
        error: se({
          code: Yt(),
          message: ce(),
          data: nt(ro())
        })
      })
    ]);
  }
  function lo(r) {
    return co(se({
      context: se({
        slot: tt()
      }),
      value: r
    }));
  }
  const fo = lo(se({
    err: Xe(Lr([
      se({}),
      ce()
    ])),
    logs: Xe(Mt(ce())),
    accounts: nt(Xe(Mt(Xe(se({
      executable: so(),
      owner: ce(),
      lamports: tt(),
      data: Mt(ce()),
      rentEpoch: nt(tt())
    }))))),
    unitsConsumed: nt(tt())
  }));
  class ho {
    constructor(t, e, n) {
      this.connection = t, this.wallet = e, this.opts = n, this.publicKey = e == null ? void 0 : e.publicKey;
    }
    static defaultOptions() {
      return {
        preflightCommitment: "processed",
        commitment: "processed"
      };
    }
    static local(t, e) {
      throw new Error("Provider local is not available on browser.");
    }
    static env() {
      throw new Error("Provider env is not available on browser.");
    }
    async sendAndConfirm(t, e, n) {
      var s, i, o, a;
      if (n === void 0 && (n = this.opts), Te(t)) e && t.sign(e);
      else if (t.feePayer = (s = t.feePayer) !== null && s !== void 0 ? s : this.wallet.publicKey, t.recentBlockhash = (await this.connection.getLatestBlockhash(n.preflightCommitment)).blockhash, e) for (const c of e) t.partialSign(c);
      t = await this.wallet.signTransaction(t);
      const l = t.serialize();
      try {
        return await Gn(this.connection, l, n);
      } catch (c) {
        if (c instanceof Bt) {
          const u = $n(Te(t) ? ((i = t.signatures) === null || i === void 0 ? void 0 : i[0]) || new Uint8Array() : (o = t.signature) !== null && o !== void 0 ? o : new Uint8Array()), g = await this.connection.getTransaction(u, {
            commitment: "confirmed"
          });
          if (g) {
            const f = (a = g.meta) === null || a === void 0 ? void 0 : a.logMessages;
            throw f ? new Ot(c.message, f) : c;
          } else throw c;
        } else throw c;
      }
    }
    async sendAll(t, e) {
      var n, s, i;
      e === void 0 && (e = this.opts);
      const o = (await this.connection.getLatestBlockhash(e.preflightCommitment)).blockhash;
      let a = t.map((u) => {
        var g, f;
        if (Te(u.tx)) {
          let d = u.tx;
          return u.signers && d.sign(u.signers), d;
        } else {
          let d = u.tx, h = (g = u.signers) !== null && g !== void 0 ? g : [];
          return d.feePayer = (f = d.feePayer) !== null && f !== void 0 ? f : this.wallet.publicKey, d.recentBlockhash = o, h.forEach((_) => {
            d.partialSign(_);
          }), d;
        }
      });
      const l = await this.wallet.signAllTransactions(a), c = [];
      for (let u = 0; u < a.length; u += 1) {
        const g = l[u], f = g.serialize();
        try {
          c.push(await Gn(this.connection, f, e));
        } catch (d) {
          if (d instanceof Bt) {
            const h = $n(Te(g) ? ((n = g.signatures) === null || n === void 0 ? void 0 : n[0]) || new Uint8Array() : (s = g.signature) !== null && s !== void 0 ? s : new Uint8Array()), _ = await this.connection.getTransaction(h, {
              commitment: "confirmed"
            });
            if (_) {
              const m = (i = _.meta) === null || i === void 0 ? void 0 : i.logMessages;
              throw m ? new Ot(d.message, m) : d;
            } else throw d;
          } else throw d;
        }
      }
      return c;
    }
    async simulate(t, e, n, s) {
      let i = (await this.connection.getLatestBlockhash(n ?? this.connection.commitment)).blockhash, o;
      if (Te(t) ? (e && (t.sign(e), t = await this.wallet.signTransaction(t)), o = await this.connection.simulateTransaction(t, {
        commitment: n
      })) : (t.feePayer = t.feePayer || this.wallet.publicKey, t.recentBlockhash = i, e && (t = await this.wallet.signTransaction(t)), o = await ao(this.connection, t, e, n, s)), o.value.err) throw new po(o.value);
      return o.value;
    }
  }
  class po extends Error {
    constructor(t, e) {
      super(e), this.simulationResponse = t;
    }
  }
  async function Gn(r, t, e) {
    const n = e && {
      skipPreflight: e.skipPreflight,
      preflightCommitment: e.preflightCommitment || e.commitment
    }, s = await r.sendRawTransaction(t, n), i = (await r.confirmTransaction(s, e && e.commitment)).value;
    if (i.err) throw new Bt(`Raw transaction ${s} failed (${JSON.stringify(i)})`);
    return s;
  }
  class Bt extends Error {
    constructor(t) {
      super(t);
    }
  }
  function zt() {
    return ho.local();
  }
  const go = /* @__PURE__ */ new Map();
  function Mr(r) {
    return go.get(r) !== void 0;
  }
  class st extends Error {
    constructor(t) {
      super(t), this.name = "IdlError";
    }
  }
  class Fe {
    constructor(t) {
      this.stack = t;
    }
    static parse(t) {
      var e;
      const n = /^Program (\w*) invoke/, s = /^Program \w* success/, i = [];
      for (let o = 0; o < t.length; o++) {
        if (s.exec(t[o])) {
          i.pop();
          continue;
        }
        const a = (e = n.exec(t[o])) === null || e === void 0 ? void 0 : e[1];
        a && i.push(new P(a));
      }
      return new Fe(i);
    }
  }
  class Oe extends Error {
    constructor(t, e, n, s, i, o) {
      super(n.join(`
`).replace("Program log: ", "")), this.errorLogs = n, this.logs = s, this.error = {
        errorCode: t,
        errorMessage: e,
        comparedValues: o,
        origin: i
      }, this._programErrorStack = Fe.parse(s);
    }
    static parse(t) {
      if (!t) return null;
      const e = t.findIndex((f) => f.startsWith("Program log: AnchorError"));
      if (e === -1) return null;
      const n = t[e], s = [
        n
      ];
      let i;
      if (e + 1 < t.length) {
        if (t[e + 1] === "Program log: Left:") {
          const f = /^Program log: (.*)$/, d = f.exec(t[e + 2])[1], h = f.exec(t[e + 4])[1];
          i = [
            new P(d),
            new P(h)
          ], s.push(...t.slice(e + 1, e + 5));
        } else if (t[e + 1].startsWith("Program log: Left:")) {
          const f = /^Program log: (Left|Right): (.*)$/, d = f.exec(t[e + 1])[2], h = f.exec(t[e + 2])[2];
          s.push(...t.slice(e + 1, e + 3)), i = [
            d,
            h
          ];
        }
      }
      const a = /^Program log: AnchorError occurred\. Error Code: (.*)\. Error Number: (\d*)\. Error Message: (.*)\./.exec(n), c = /^Program log: AnchorError thrown in (.*):(\d*)\. Error Code: (.*)\. Error Number: (\d*)\. Error Message: (.*)\./.exec(n), g = /^Program log: AnchorError caused by account: (.*)\. Error Code: (.*)\. Error Number: (\d*)\. Error Message: (.*)\./.exec(n);
      if (a) {
        const [f, d, h] = a.slice(1, 4), _ = {
          code: f,
          number: parseInt(d)
        };
        return new Oe(_, h, s, t, void 0, i);
      } else if (c) {
        const [f, d, h, _, m] = c.slice(1, 6), y = {
          code: h,
          number: parseInt(_)
        }, E = {
          file: f,
          line: parseInt(d)
        };
        return new Oe(y, m, s, t, E, i);
      } else if (g) {
        const [f, d, h, _] = g.slice(1, 5), m = f, y = {
          code: d,
          number: parseInt(h)
        };
        return new Oe(y, _, s, t, m, i);
      } else return null;
    }
    get program() {
      return this._programErrorStack.stack[this._programErrorStack.stack.length - 1];
    }
    get programErrorStack() {
      return this._programErrorStack.stack;
    }
    toString() {
      return this.message;
    }
  }
  class it extends Error {
    constructor(t, e, n) {
      super(), this.code = t, this.msg = e, this.logs = n, n && (this._programErrorStack = Fe.parse(n));
    }
    static parse(t, e) {
      const n = t.toString();
      let s;
      if (n.includes("custom program error:")) {
        let a = n.split("custom program error: ");
        if (a.length !== 2) return null;
        s = a[1];
      } else {
        const a = n.match(/"Custom":([0-9]+)}/g);
        if (!a || a.length > 1) return null;
        s = a[0].match(/([0-9]+)/g)[0];
      }
      let i;
      try {
        i = parseInt(s);
      } catch {
        return null;
      }
      let o = e.get(i);
      return o !== void 0 ? new it(i, o, t.logs) : (o = mo.get(i), o !== void 0 ? new it(i, o, t.logs) : null);
    }
    get program() {
      var t;
      return (t = this._programErrorStack) === null || t === void 0 ? void 0 : t.stack[this._programErrorStack.stack.length - 1];
    }
    get programErrorStack() {
      var t;
      return (t = this._programErrorStack) === null || t === void 0 ? void 0 : t.stack;
    }
    toString() {
      return this.msg;
    }
  }
  function Rr(r, t) {
    Mr("debug-logs") && console.log("Translating error:", r);
    const e = Oe.parse(r.logs);
    if (e) return e;
    const n = it.parse(r, t);
    if (n) return n;
    if (r.logs) {
      const s = {
        get: function(i, o) {
          return o === "programErrorStack" ? i.programErrorStack.stack : o === "program" ? i.programErrorStack.stack[r.programErrorStack.stack.length - 1] : Reflect.get(...arguments);
        }
      };
      return r.programErrorStack = Fe.parse(r.logs), new Proxy(r, s);
    }
    return r;
  }
  const I = {
    InstructionMissing: 100,
    InstructionFallbackNotFound: 101,
    InstructionDidNotDeserialize: 102,
    InstructionDidNotSerialize: 103,
    IdlInstructionStub: 1e3,
    IdlInstructionInvalidProgram: 1001,
    ConstraintMut: 2e3,
    ConstraintHasOne: 2001,
    ConstraintSigner: 2002,
    ConstraintRaw: 2003,
    ConstraintOwner: 2004,
    ConstraintRentExempt: 2005,
    ConstraintSeeds: 2006,
    ConstraintExecutable: 2007,
    ConstraintState: 2008,
    ConstraintAssociated: 2009,
    ConstraintAssociatedInit: 2010,
    ConstraintClose: 2011,
    ConstraintAddress: 2012,
    ConstraintZero: 2013,
    ConstraintTokenMint: 2014,
    ConstraintTokenOwner: 2015,
    ConstraintMintMintAuthority: 2016,
    ConstraintMintFreezeAuthority: 2017,
    ConstraintMintDecimals: 2018,
    ConstraintSpace: 2019,
    ConstraintAccountIsNone: 2020,
    RequireViolated: 2500,
    RequireEqViolated: 2501,
    RequireKeysEqViolated: 2502,
    RequireNeqViolated: 2503,
    RequireKeysNeqViolated: 2504,
    RequireGtViolated: 2505,
    RequireGteViolated: 2506,
    AccountDiscriminatorAlreadySet: 3e3,
    AccountDiscriminatorNotFound: 3001,
    AccountDiscriminatorMismatch: 3002,
    AccountDidNotDeserialize: 3003,
    AccountDidNotSerialize: 3004,
    AccountNotEnoughKeys: 3005,
    AccountNotMutable: 3006,
    AccountOwnedByWrongProgram: 3007,
    InvalidProgramId: 3008,
    InvalidProgramExecutable: 3009,
    AccountNotSigner: 3010,
    AccountNotSystemOwned: 3011,
    AccountNotInitialized: 3012,
    AccountNotProgramData: 3013,
    AccountNotAssociatedTokenAccount: 3014,
    AccountSysvarMismatch: 3015,
    AccountReallocExceedsLimit: 3016,
    AccountDuplicateReallocs: 3017,
    DeclaredProgramIdMismatch: 4100,
    Deprecated: 5e3
  }, mo = /* @__PURE__ */ new Map([
    [
      I.InstructionMissing,
      "8 byte instruction identifier not provided"
    ],
    [
      I.InstructionFallbackNotFound,
      "Fallback functions are not supported"
    ],
    [
      I.InstructionDidNotDeserialize,
      "The program could not deserialize the given instruction"
    ],
    [
      I.InstructionDidNotSerialize,
      "The program could not serialize the given instruction"
    ],
    [
      I.IdlInstructionStub,
      "The program was compiled without idl instructions"
    ],
    [
      I.IdlInstructionInvalidProgram,
      "The transaction was given an invalid program for the IDL instruction"
    ],
    [
      I.ConstraintMut,
      "A mut constraint was violated"
    ],
    [
      I.ConstraintHasOne,
      "A has one constraint was violated"
    ],
    [
      I.ConstraintSigner,
      "A signer constraint was violated"
    ],
    [
      I.ConstraintRaw,
      "A raw constraint was violated"
    ],
    [
      I.ConstraintOwner,
      "An owner constraint was violated"
    ],
    [
      I.ConstraintRentExempt,
      "A rent exemption constraint was violated"
    ],
    [
      I.ConstraintSeeds,
      "A seeds constraint was violated"
    ],
    [
      I.ConstraintExecutable,
      "An executable constraint was violated"
    ],
    [
      I.ConstraintState,
      "Deprecated Error, feel free to replace with something else"
    ],
    [
      I.ConstraintAssociated,
      "An associated constraint was violated"
    ],
    [
      I.ConstraintAssociatedInit,
      "An associated init constraint was violated"
    ],
    [
      I.ConstraintClose,
      "A close constraint was violated"
    ],
    [
      I.ConstraintAddress,
      "An address constraint was violated"
    ],
    [
      I.ConstraintZero,
      "Expected zero account discriminant"
    ],
    [
      I.ConstraintTokenMint,
      "A token mint constraint was violated"
    ],
    [
      I.ConstraintTokenOwner,
      "A token owner constraint was violated"
    ],
    [
      I.ConstraintMintMintAuthority,
      "A mint mint authority constraint was violated"
    ],
    [
      I.ConstraintMintFreezeAuthority,
      "A mint freeze authority constraint was violated"
    ],
    [
      I.ConstraintMintDecimals,
      "A mint decimals constraint was violated"
    ],
    [
      I.ConstraintSpace,
      "A space constraint was violated"
    ],
    [
      I.ConstraintAccountIsNone,
      "A required account for the constraint is None"
    ],
    [
      I.RequireViolated,
      "A require expression was violated"
    ],
    [
      I.RequireEqViolated,
      "A require_eq expression was violated"
    ],
    [
      I.RequireKeysEqViolated,
      "A require_keys_eq expression was violated"
    ],
    [
      I.RequireNeqViolated,
      "A require_neq expression was violated"
    ],
    [
      I.RequireKeysNeqViolated,
      "A require_keys_neq expression was violated"
    ],
    [
      I.RequireGtViolated,
      "A require_gt expression was violated"
    ],
    [
      I.RequireGteViolated,
      "A require_gte expression was violated"
    ],
    [
      I.AccountDiscriminatorAlreadySet,
      "The account discriminator was already set on this account"
    ],
    [
      I.AccountDiscriminatorNotFound,
      "No 8 byte discriminator was found on the account"
    ],
    [
      I.AccountDiscriminatorMismatch,
      "8 byte discriminator did not match what was expected"
    ],
    [
      I.AccountDidNotDeserialize,
      "Failed to deserialize the account"
    ],
    [
      I.AccountDidNotSerialize,
      "Failed to serialize the account"
    ],
    [
      I.AccountNotEnoughKeys,
      "Not enough account keys given to the instruction"
    ],
    [
      I.AccountNotMutable,
      "The given account is not mutable"
    ],
    [
      I.AccountOwnedByWrongProgram,
      "The given account is owned by a different program than expected"
    ],
    [
      I.InvalidProgramId,
      "Program ID was not as expected"
    ],
    [
      I.InvalidProgramExecutable,
      "Program account is not executable"
    ],
    [
      I.AccountNotSigner,
      "The given account did not sign"
    ],
    [
      I.AccountNotSystemOwned,
      "The given account is not owned by the system program"
    ],
    [
      I.AccountNotInitialized,
      "The program expected this account to be already initialized"
    ],
    [
      I.AccountNotProgramData,
      "The given account is not a program data account"
    ],
    [
      I.AccountNotAssociatedTokenAccount,
      "The given account is not the associated token account"
    ],
    [
      I.AccountSysvarMismatch,
      "The given public key does not match the required sysvar"
    ],
    [
      I.AccountReallocExceedsLimit,
      "The account reallocation exceeds the MAX_PERMITTED_DATA_INCREASE limit"
    ],
    [
      I.AccountDuplicateReallocs,
      "The account was duplicated for more than one reallocation"
    ],
    [
      I.DeclaredProgramIdMismatch,
      "The declared program id does not match the actual program id"
    ],
    [
      I.Deprecated,
      "The API being used is deprecated and should no longer be used"
    ]
  ]);
  var $t = function() {
    return $t = Object.assign || function(t) {
      for (var e, n = 1, s = arguments.length; n < s; n++) {
        e = arguments[n];
        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
      }
      return t;
    }, $t.apply(this, arguments);
  }, Vt = function() {
    return Vt = Object.assign || function(t) {
      for (var e, n = 1, s = arguments.length; n < s; n++) {
        e = arguments[n];
        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
      }
      return t;
    }, Vt.apply(this, arguments);
  };
  function yo(r) {
    return r.toLowerCase();
  }
  var wo = [
    /([a-z0-9])([A-Z])/g,
    /([A-Z])([A-Z][a-z])/g
  ], vo = /[^A-Z0-9]+/gi;
  function bo(r, t) {
    t === void 0 && (t = {});
    for (var e = t.splitRegexp, n = e === void 0 ? wo : e, s = t.stripRegexp, i = s === void 0 ? vo : s, o = t.transform, a = o === void 0 ? yo : o, l = t.delimiter, c = l === void 0 ? " " : l, u = Zn(Zn(r, n, "$1\0$2"), i, "\0"), g = 0, f = u.length; u.charAt(g) === "\0"; ) g++;
    for (; u.charAt(f - 1) === "\0"; ) f--;
    return u.slice(g, f).split("\0").map(a).join(c);
  }
  function Zn(r, t, e) {
    return t instanceof RegExp ? r.replace(t, e) : t.reduce(function(n, s) {
      return n.replace(s, e);
    }, r);
  }
  function _o(r, t) {
    return t === void 0 && (t = {}), bo(r, Vt({
      delimiter: "."
    }, t));
  }
  function Ao(r, t) {
    return t === void 0 && (t = {}), _o(r, $t({
      delimiter: "_"
    }, t));
  }
  let qe = class te {
    static fieldLayout(t, e) {
      const n = t.name !== void 0 ? U(t.name) : void 0;
      switch (t.type) {
        case "bool":
          return A.bool(n);
        case "u8":
          return A.u8(n);
        case "i8":
          return A.i8(n);
        case "u16":
          return A.u16(n);
        case "i16":
          return A.i16(n);
        case "u32":
          return A.u32(n);
        case "i32":
          return A.i32(n);
        case "f32":
          return A.f32(n);
        case "u64":
          return A.u64(n);
        case "i64":
          return A.i64(n);
        case "f64":
          return A.f64(n);
        case "u128":
          return A.u128(n);
        case "i128":
          return A.i128(n);
        case "u256":
          return A.u256(n);
        case "i256":
          return A.i256(n);
        case "bytes":
          return A.vecU8(n);
        case "string":
          return A.str(n);
        case "publicKey":
          return A.publicKey(n);
        default: {
          if ("vec" in t.type) return A.vec(te.fieldLayout({
            name: void 0,
            type: t.type.vec
          }, e), n);
          if ("option" in t.type) return A.option(te.fieldLayout({
            name: void 0,
            type: t.type.option
          }, e), n);
          if ("defined" in t.type) {
            if (!e) throw new st("User defined types not provided");
            const s = t.type.defined, i = e.filter((o) => o.name === s);
            if (i.length !== 1) throw new st(`Type not found: ${JSON.stringify(t)}`);
            return te.typeDefLayout(i[0], e, n);
          } else if ("array" in t.type) {
            let s = t.type.array[0], i = t.type.array[1], o = te.fieldLayout({
              name: void 0,
              type: s
            }, e);
            return A.array(o, i, n);
          } else throw new Error(`Not yet implemented: ${t}`);
        }
      }
    }
    static typeDefLayout(t, e = [], n) {
      switch (t.type.kind) {
        case "struct": {
          const s = t.type.fields.map((i) => te.fieldLayout(i, e));
          return A.struct(s, n);
        }
        case "enum": {
          let s = t.type.variants.map((i) => {
            const o = U(i.name);
            if (!i.fields) return A.struct([], o);
            const a = i.fields.map((l, c) => (l == null ? void 0 : l.name) ? te.fieldLayout(l, e) : te.fieldLayout({
              type: l,
              name: c.toString()
            }, e));
            return A.struct(a, o);
          });
          return n !== void 0 ? A.rustEnum(s).replicate(n) : A.rustEnum(s, n);
        }
        case "alias":
          return te.fieldLayout({
            type: t.type.value,
            name: t.name
          }, e);
      }
    }
  };
  const Hn = "global";
  class Xt {
    constructor(t) {
      this.idl = t, this.ixLayout = Xt.parseIxLayout(t);
      const e = /* @__PURE__ */ new Map();
      t.instructions.forEach((n) => {
        const s = Wn(Hn, n.name);
        e.set(Me.encode(s), {
          layout: this.ixLayout.get(n.name),
          name: n.name
        });
      }), this.sighashLayouts = e;
    }
    encode(t, e) {
      return this._encode(Hn, t, e);
    }
    _encode(t, e, n) {
      const s = G.alloc(1e3), i = U(e), o = this.ixLayout.get(i);
      if (!o) throw new Error(`Unknown method: ${i}`);
      const a = o.encode(n, s), l = s.slice(0, a);
      return G.concat([
        Wn(t, e),
        l
      ]);
    }
    static parseIxLayout(t) {
      const e = t.instructions.map((n) => {
        let s = n.args.map((o) => {
          var a, l;
          return qe.fieldLayout(o, Array.from([
            ...(a = t.accounts) !== null && a !== void 0 ? a : [],
            ...(l = t.types) !== null && l !== void 0 ? l : []
          ]));
        });
        const i = U(n.name);
        return [
          i,
          A.struct(s, i)
        ];
      });
      return new Map(e);
    }
    decode(t, e = "hex") {
      typeof t == "string" && (t = e === "hex" ? G.from(t, "hex") : Me.decode(t));
      let n = Me.encode(t.slice(0, 8)), s = t.slice(8);
      const i = this.sighashLayouts.get(n);
      return i ? {
        data: i.layout.decode(s),
        name: i.name
      } : null;
    }
    format(t, e) {
      return W.format(t, e, this.idl);
    }
  }
  class W {
    static format(t, e, n) {
      const s = n.instructions.filter((l) => t.name === l.name)[0];
      if (s === void 0) return console.error("Invalid instruction given"), null;
      const i = s.args.map((l) => ({
        name: l.name,
        type: W.formatIdlType(l.type),
        data: W.formatIdlData(l, t.data[l.name], n.types)
      })), o = W.flattenIdlAccounts(s.accounts), a = e.map((l, c) => c < o.length ? {
        name: o[c].name,
        ...l
      } : {
        name: void 0,
        ...l
      });
      return {
        args: i,
        accounts: a
      };
    }
    static formatIdlType(t) {
      if (typeof t == "string") return t;
      if ("vec" in t) return `Vec<${this.formatIdlType(t.vec)}>`;
      if ("option" in t) return `Option<${this.formatIdlType(t.option)}>`;
      if ("defined" in t) return t.defined;
      if ("array" in t) return `Array<${t.array[0]}; ${t.array[1]}>`;
      throw new Error(`Unknown IDL type: ${t}`);
    }
    static formatIdlData(t, e, n) {
      if (typeof t.type == "string") return e.toString();
      if (t.type.hasOwnProperty("vec")) return "[" + e.map((s) => this.formatIdlData({
        name: "",
        type: t.type.vec
      }, s)).join(", ") + "]";
      if (t.type.hasOwnProperty("option")) return e === null ? "null" : this.formatIdlData({
        name: "",
        type: t.type.option
      }, e, n);
      if (t.type.hasOwnProperty("defined")) {
        if (n === void 0) throw new Error("User defined types not provided");
        const s = n.filter((i) => i.name === t.type.defined);
        if (s.length !== 1) throw new Error(`Type not found: ${t.type.defined}`);
        return W.formatIdlDataDefined(s[0], e, n);
      }
      return "unknown";
    }
    static formatIdlDataDefined(t, e, n) {
      switch (t.type.kind) {
        case "struct": {
          const s = t.type;
          return "{ " + Object.keys(e).map((o) => {
            const a = s.fields.find((l) => l.name === o);
            if (!a) throw new Error("Unable to find type");
            return o + ": " + W.formatIdlData(a, e[o], n);
          }).join(", ") + " }";
        }
        case "enum": {
          if (t.type.variants.length === 0) return "{}";
          if (t.type.variants[0].name) {
            const s = t.type.variants, i = Object.keys(e)[0], o = e[i], a = Object.keys(o).map((c) => {
              var u;
              const g = o[c], f = (u = s[i]) === null || u === void 0 ? void 0 : u.find((d) => d.name === c);
              if (!f) throw new Error("Unable to find variant");
              return c + ": " + W.formatIdlData(f, g, n);
            }).join(", "), l = U(i, {
              pascalCase: true
            });
            return a.length === 0 ? l : `${l} { ${a} }`;
          } else return "Tuple formatting not yet implemented";
        }
        case "alias":
          return W.formatIdlType(t.type.value);
      }
    }
    static flattenIdlAccounts(t, e) {
      return t.map((n) => {
        const s = Eo(n.name);
        if (n.hasOwnProperty("accounts")) {
          const i = e ? `${e} > ${s}` : s;
          return W.flattenIdlAccounts(n.accounts, i);
        } else return {
          ...n,
          name: e ? `${e} > ${s}` : s
        };
      }).flat();
    }
  }
  function Eo(r) {
    const t = r.replace(/([A-Z])/g, " $1");
    return t.charAt(0).toUpperCase() + t.slice(1);
  }
  function Wn(r, t) {
    let e = Ao(t), n = `${r}:${e}`;
    return G.from(nr(n).slice(0, 8));
  }
  function Pr(r, t) {
    switch (t.type.kind) {
      case "struct":
        return t.type.fields.map((e) => ue(r, e.type)).reduce((e, n) => e + n, 0);
      case "enum": {
        const e = t.type.variants.map((n) => n.fields ? n.fields.map((s) => typeof s == "object" && "name" in s ? ue(r, s.type) : ue(r, s)).reduce((s, i) => s + i, 0) : 0);
        return Math.max(...e) + 1;
      }
      case "alias":
        return ue(r, t.type.value);
    }
  }
  function ue(r, t) {
    var e, n;
    switch (t) {
      case "bool":
        return 1;
      case "u8":
        return 1;
      case "i8":
        return 1;
      case "i16":
        return 2;
      case "u16":
        return 2;
      case "u32":
        return 4;
      case "i32":
        return 4;
      case "f32":
        return 4;
      case "u64":
        return 8;
      case "i64":
        return 8;
      case "f64":
        return 8;
      case "u128":
        return 16;
      case "i128":
        return 16;
      case "u256":
        return 32;
      case "i256":
        return 32;
      case "bytes":
        return 1;
      case "string":
        return 1;
      case "publicKey":
        return 32;
      default:
        if ("vec" in t) return 1;
        if ("option" in t) return 1 + ue(r, t.option);
        if ("coption" in t) return 4 + ue(r, t.coption);
        if ("defined" in t) {
          const s = (n = (e = r.types) === null || e === void 0 ? void 0 : e.filter((o) => o.name === t.defined)) !== null && n !== void 0 ? n : [];
          if (s.length !== 1) throw new st(`Type not found: ${JSON.stringify(t)}`);
          let i = s[0];
          return Pr(r, i);
        }
        if ("array" in t) {
          let s = t.array[0], i = t.array[1];
          return ue(r, s) * i;
        }
        throw new Error(`Invalid type ${JSON.stringify(t)}`);
    }
  }
  const Ft = 8;
  function Or(r) {
    return L.from(nr(r).slice(0, Ft));
  }
  class we {
    constructor(t) {
      if (t.accounts === void 0) {
        this.accountLayouts = /* @__PURE__ */ new Map();
        return;
      }
      const e = t.accounts.map((n) => [
        n.name,
        qe.typeDefLayout(n, t.types)
      ]);
      this.accountLayouts = new Map(e), this.idl = t;
    }
    async encode(t, e) {
      const n = G.alloc(1e3), s = this.accountLayouts.get(t);
      if (!s) throw new Error(`Unknown account: ${t}`);
      const i = s.encode(e, n);
      let o = n.slice(0, i), a = we.accountDiscriminator(t);
      return G.concat([
        a,
        o
      ]);
    }
    decode(t, e) {
      if (we.accountDiscriminator(t).compare(e.slice(0, 8))) throw new Error("Invalid account discriminator");
      return this.decodeUnchecked(t, e);
    }
    decodeAny(t) {
      const e = t.slice(0, 8), n = Array.from(this.accountLayouts.keys()).find((s) => we.accountDiscriminator(s).equals(e));
      if (!n) throw new Error("Account descriminator not found");
      return this.decodeUnchecked(n, t);
    }
    decodeUnchecked(t, e) {
      const n = e.subarray(Ft), s = this.accountLayouts.get(t);
      if (!s) throw new Error(`Unknown account: ${t}`);
      return s.decode(n);
    }
    memcmp(t, e) {
      const n = we.accountDiscriminator(t);
      return {
        offset: 0,
        bytes: Me.encode(e ? G.concat([
          n,
          e
        ]) : n)
      };
    }
    size(t) {
      var e;
      return Ft + ((e = Pr(this.idl, t)) !== null && e !== void 0 ? e : 0);
    }
    static accountDiscriminator(t) {
      const e = `account:${U(t, {
        pascalCase: true,
        preserveConsecutiveUppercase: true
      })}`;
      return Or(e);
    }
  }
  class So {
    constructor(t) {
      if (t.events === void 0) {
        this.layouts = /* @__PURE__ */ new Map();
        return;
      }
      const e = t.events.map((n) => {
        let s = {
          name: n.name,
          type: {
            kind: "struct",
            fields: n.fields.map((i) => ({
              name: i.name,
              type: i.type
            }))
          }
        };
        return [
          n.name,
          qe.typeDefLayout(s, t.types)
        ];
      });
      this.layouts = new Map(e), this.discriminators = new Map(t.events === void 0 ? [] : t.events.map((n) => [
        Vn(Io(n.name)),
        n.name
      ]));
    }
    decode(t) {
      let e;
      try {
        e = kr(t);
      } catch {
        return null;
      }
      const n = Vn(e.slice(0, 8)), s = this.discriminators.get(n);
      if (s === void 0) return null;
      const i = this.layouts.get(s);
      if (!i) throw new Error(`Unknown event: ${s}`);
      return {
        data: i.decode(e.slice(8)),
        name: s
      };
    }
  }
  function Io(r) {
    return Or(`event:${r}`);
  }
  class ko {
    constructor(t) {
      if (t.types === void 0) {
        this.typeLayouts = /* @__PURE__ */ new Map();
        return;
      }
      const e = t.types.map((n) => [
        n.name,
        qe.typeDefLayout(n, t.types)
      ]);
      this.typeLayouts = new Map(e), this.idl = t;
    }
    encode(t, e) {
      const n = G.alloc(1e3), s = this.typeLayouts.get(t);
      if (!s) throw new Error(`Unknown type: ${t}`);
      const i = s.encode(e, n);
      return n.slice(0, i);
    }
    decode(t, e) {
      const n = this.typeLayouts.get(t);
      if (!n) throw new Error(`Unknown type: ${t}`);
      return n.decode(e);
    }
  }
  class Dr {
    constructor(t) {
      this.instruction = new Xt(t), this.accounts = new we(t), this.events = new So(t), this.types = new ko(t);
    }
  }
  var xo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
  class V {
    constructor(t, e) {
      if (!Number.isInteger(t)) throw new TypeError("span must be an integer");
      this.span = t, this.property = e;
    }
    makeDestinationObject() {
      return {};
    }
    decode(t, e) {
      throw new Error("Layout is abstract");
    }
    encode(t, e, n) {
      throw new Error("Layout is abstract");
    }
    getSpan(t, e) {
      if (0 > this.span) throw new RangeError("indeterminate span");
      return this.span;
    }
    replicate(t) {
      const e = Object.create(this.constructor.prototype);
      return Object.assign(e, this), e.property = t, e;
    }
    fromArray(t) {
    }
  }
  var yt = V;
  function To(r, t) {
    return t.property ? r + "[" + t.property + "]" : r;
  }
  class le extends V {
    isCount() {
      throw new Error("ExternalLayout is abstract");
    }
  }
  class Ur extends le {
    constructor(t, e, n) {
      if (!(t instanceof V)) throw new TypeError("layout must be a Layout");
      if (e === void 0) e = 0;
      else if (!Number.isInteger(e)) throw new TypeError("offset must be integer or undefined");
      super(t.span, n || t.property), this.layout = t, this.offset = e;
    }
    isCount() {
      return this.layout instanceof wt || this.layout instanceof Nr;
    }
    decode(t, e) {
      return e === void 0 && (e = 0), this.layout.decode(t, e + this.offset);
    }
    encode(t, e, n) {
      return n === void 0 && (n = 0), this.layout.encode(t, e, n + this.offset);
    }
  }
  class wt extends V {
    constructor(t, e) {
      if (super(t, e), 6 < this.span) throw new RangeError("span must not exceed 6 bytes");
    }
    decode(t, e) {
      return e === void 0 && (e = 0), t.readUIntLE(e, this.span);
    }
    encode(t, e, n) {
      return n === void 0 && (n = 0), e.writeUIntLE(t, n, this.span), this.span;
    }
  }
  class Nr extends V {
    constructor(t, e) {
      if (super(t, e), 6 < this.span) throw new RangeError("span must not exceed 6 bytes");
    }
    decode(t, e) {
      return e === void 0 && (e = 0), t.readUIntBE(e, this.span);
    }
    encode(t, e, n) {
      return n === void 0 && (n = 0), e.writeUIntBE(t, n, this.span), this.span;
    }
  }
  const qt = Math.pow(2, 32);
  function Br(r) {
    const t = Math.floor(r / qt), e = r - t * qt;
    return {
      hi32: t,
      lo32: e
    };
  }
  function zr(r, t) {
    return r * qt + t;
  }
  class Lo extends V {
    constructor(t) {
      super(8, t);
    }
    decode(t, e) {
      e === void 0 && (e = 0);
      const n = t.readUInt32LE(e), s = t.readUInt32LE(e + 4);
      return zr(s, n);
    }
    encode(t, e, n) {
      n === void 0 && (n = 0);
      const s = Br(t);
      return e.writeUInt32LE(s.lo32, n), e.writeUInt32LE(s.hi32, n + 4), 8;
    }
  }
  class Co extends V {
    constructor(t) {
      super(8, t);
    }
    decode(t, e) {
      e === void 0 && (e = 0);
      const n = t.readUInt32LE(e), s = t.readInt32LE(e + 4);
      return zr(s, n);
    }
    encode(t, e, n) {
      n === void 0 && (n = 0);
      const s = Br(t);
      return e.writeUInt32LE(s.lo32, n), e.writeInt32LE(s.hi32, n + 4), 8;
    }
  }
  class Mo extends V {
    constructor(t, e, n) {
      if (!(Array.isArray(t) && t.reduce((i, o) => i && o instanceof V, true))) throw new TypeError("fields must be array of Layout instances");
      typeof e == "boolean" && n === void 0 && (n = e, e = void 0);
      for (const i of t) if (0 > i.span && i.property === void 0) throw new Error("fields cannot contain unnamed variable-length layout");
      let s = -1;
      try {
        s = t.reduce((i, o) => i + o.getSpan(), 0);
      } catch {
      }
      super(s, e), this.fields = t, this.decodePrefixes = !!n;
    }
    getSpan(t, e) {
      if (0 <= this.span) return this.span;
      e === void 0 && (e = 0);
      let n = 0;
      try {
        n = this.fields.reduce((s, i) => {
          const o = i.getSpan(t, e);
          return e += o, s + o;
        }, 0);
      } catch {
        throw new RangeError("indeterminate span");
      }
      return n;
    }
    decode(t, e) {
      e === void 0 && (e = 0);
      const n = this.makeDestinationObject();
      for (const s of this.fields) if (s.property !== void 0 && (n[s.property] = s.decode(t, e)), e += s.getSpan(t, e), this.decodePrefixes && t.length === e) break;
      return n;
    }
    encode(t, e, n) {
      n === void 0 && (n = 0);
      const s = n;
      let i = 0, o = 0;
      for (const a of this.fields) {
        let l = a.span;
        if (o = 0 < l ? l : 0, a.property !== void 0) {
          const c = t[a.property];
          c !== void 0 && (o = a.encode(c, e, n), 0 > l && (l = a.getSpan(e, n)));
        }
        i = n, n += l;
      }
      return i + o - s;
    }
    fromArray(t) {
      const e = this.makeDestinationObject();
      for (const n of this.fields) n.property !== void 0 && 0 < t.length && (e[n.property] = t.shift());
      return e;
    }
    layoutFor(t) {
      if (typeof t != "string") throw new TypeError("property must be string");
      for (const e of this.fields) if (e.property === t) return e;
    }
    offsetOf(t) {
      if (typeof t != "string") throw new TypeError("property must be string");
      let e = 0;
      for (const n of this.fields) {
        if (n.property === t) return e;
        0 > n.span ? e = -1 : 0 <= e && (e += n.span);
      }
    }
  }
  class $r {
    constructor(t) {
      this.property = t;
    }
    decode() {
      throw new Error("UnionDiscriminator is abstract");
    }
    encode() {
      throw new Error("UnionDiscriminator is abstract");
    }
  }
  class Yn extends $r {
    constructor(t, e) {
      if (!(t instanceof le && t.isCount())) throw new TypeError("layout must be an unsigned integer ExternalLayout");
      super(e || t.property || "variant"), this.layout = t;
    }
    decode(t, e) {
      return this.layout.decode(t, e);
    }
    encode(t, e, n) {
      return this.layout.encode(t, e, n);
    }
  }
  class Vr extends V {
    constructor(t, e, n) {
      const s = t instanceof wt || t instanceof Nr;
      if (s) t = new Yn(new Ur(t));
      else if (t instanceof le && t.isCount()) t = new Yn(t);
      else if (!(t instanceof $r)) throw new TypeError("discr must be a UnionDiscriminator or an unsigned integer layout");
      if (e === void 0 && (e = null), !(e === null || e instanceof V)) throw new TypeError("defaultLayout must be null or a Layout");
      if (e !== null) {
        if (0 > e.span) throw new Error("defaultLayout must have constant span");
        e.property === void 0 && (e = e.replicate("content"));
      }
      let i = -1;
      e && (i = e.span, 0 <= i && s && (i += t.layout.span)), super(i, n), this.discriminator = t, this.usesPrefixDiscriminator = s, this.defaultLayout = e, this.registry = {};
      let o = this.defaultGetSourceVariant.bind(this);
      this.getSourceVariant = function(a) {
        return o(a);
      }, this.configGetSourceVariant = function(a) {
        o = a.bind(this);
      };
    }
    getSpan(t, e) {
      if (0 <= this.span) return this.span;
      e === void 0 && (e = 0);
      const n = this.getVariant(t, e);
      if (!n) throw new Error("unable to determine span for unrecognized variant");
      return n.getSpan(t, e);
    }
    defaultGetSourceVariant(t) {
      if (t.hasOwnProperty(this.discriminator.property)) {
        if (this.defaultLayout && t.hasOwnProperty(this.defaultLayout.property)) return;
        const e = this.registry[t[this.discriminator.property]];
        if (e && (!e.layout || t.hasOwnProperty(e.property))) return e;
      } else for (const e in this.registry) {
        const n = this.registry[e];
        if (t.hasOwnProperty(n.property)) return n;
      }
      throw new Error("unable to infer src variant");
    }
    decode(t, e) {
      e === void 0 && (e = 0);
      let n;
      const s = this.discriminator, i = s.decode(t, e);
      let o = this.registry[i];
      if (o === void 0) {
        let a = 0;
        o = this.defaultLayout, this.usesPrefixDiscriminator && (a = s.layout.span), n = this.makeDestinationObject(), n[s.property] = i, n[o.property] = this.defaultLayout.decode(t, e + a);
      } else n = o.decode(t, e);
      return n;
    }
    encode(t, e, n) {
      n === void 0 && (n = 0);
      const s = this.getSourceVariant(t);
      if (s === void 0) {
        const i = this.discriminator, o = this.defaultLayout;
        let a = 0;
        return this.usesPrefixDiscriminator && (a = i.layout.span), i.encode(t[i.property], e, n), a + o.encode(t[o.property], e, n + a);
      }
      return s.encode(t, e, n);
    }
    addVariant(t, e, n) {
      const s = new Ro(this, t, e, n);
      return this.registry[t] = s, s;
    }
    getVariant(t, e) {
      let n = t;
      return L.isBuffer(t) && (e === void 0 && (e = 0), n = this.discriminator.decode(t, e)), this.registry[n];
    }
  }
  class Ro extends V {
    constructor(t, e, n, s) {
      if (!(t instanceof Vr)) throw new TypeError("union must be a Union");
      if (!Number.isInteger(e) || 0 > e) throw new TypeError("variant must be a (non-negative) integer");
      if (typeof n == "string" && s === void 0 && (s = n, n = null), n) {
        if (!(n instanceof V)) throw new TypeError("layout must be a Layout");
        if (t.defaultLayout !== null && 0 <= n.span && n.span > t.defaultLayout.span) throw new Error("variant span exceeds span of containing union");
        if (typeof s != "string") throw new TypeError("variant must have a String property");
      }
      let i = t.span;
      0 > t.span && (i = n ? n.span : 0, 0 <= i && t.usesPrefixDiscriminator && (i += t.discriminator.layout.span)), super(i, s), this.union = t, this.variant = e, this.layout = n || null;
    }
    getSpan(t, e) {
      if (0 <= this.span) return this.span;
      e === void 0 && (e = 0);
      let n = 0;
      return this.union.usesPrefixDiscriminator && (n = this.union.discriminator.layout.span), n + this.layout.getSpan(t, e + n);
    }
    decode(t, e) {
      const n = this.makeDestinationObject();
      if (e === void 0 && (e = 0), this !== this.union.getVariant(t, e)) throw new Error("variant mismatch");
      let s = 0;
      return this.union.usesPrefixDiscriminator && (s = this.union.discriminator.layout.span), this.layout ? n[this.property] = this.layout.decode(t, e + s) : this.property ? n[this.property] = true : this.union.usesPrefixDiscriminator && (n[this.union.discriminator.property] = this.variant), n;
    }
    encode(t, e, n) {
      n === void 0 && (n = 0);
      let s = 0;
      if (this.union.usesPrefixDiscriminator && (s = this.union.discriminator.layout.span), this.layout && !t.hasOwnProperty(this.property)) throw new TypeError("variant lacks property " + this.property);
      this.union.discriminator.encode(this.variant, e, n);
      let i = s;
      if (this.layout && (this.layout.encode(t[this.property], e, n + s), i += this.layout.getSpan(e, n + s), 0 <= this.union.span && i > this.union.span)) throw new Error("encoded variant overruns containing union");
      return i;
    }
    fromArray(t) {
      if (this.layout) return this.layout.fromArray(t);
    }
  }
  class Po extends V {
    constructor(t, e) {
      if (!(t instanceof le && t.isCount() || Number.isInteger(t) && 0 <= t)) throw new TypeError("length must be positive integer or an unsigned integer ExternalLayout");
      let n = -1;
      t instanceof le || (n = t), super(n, e), this.length = t;
    }
    getSpan(t, e) {
      let n = this.span;
      return 0 > n && (n = this.length.decode(t, e)), n;
    }
    decode(t, e) {
      e === void 0 && (e = 0);
      let n = this.span;
      return 0 > n && (n = this.length.decode(t, e)), t.slice(e, e + n);
    }
    encode(t, e, n) {
      let s = this.length;
      if (this.length instanceof le && (s = t.length), !(L.isBuffer(t) && s === t.length)) throw new TypeError(To("Blob.encode", this) + " requires (length " + s + ") Buffer as src");
      if (n + s > e.length) throw new RangeError("encoding overruns Buffer");
      return e.write(t.toString("hex"), n, s, "hex"), this.length instanceof le && this.length.encode(s, e, n), s;
    }
  }
  var Oo = ((r, t, e) => new Ur(r, t, e)), Do = ((r) => new wt(1, r)), ne = ((r) => new wt(4, r)), Uo = ((r) => new Lo(r)), re = ((r) => new Co(r)), B = ((r, t, e) => new Mo(r, t, e)), Fr = ((r, t, e) => new Vr(r, t, e)), Ke = ((r, t) => new Po(r, t));
  class No extends yt {
    constructor(t) {
      super(-1, t), this.property = t, this.layout = B([
        ne("length"),
        ne("lengthPadding"),
        Ke(Oo(ne(), -8), "chars")
      ], this.property);
    }
    encode(t, e, n = 0) {
      if (t == null) return this.layout.span;
      const s = {
        chars: L.from(t, "utf8")
      };
      return this.layout.encode(s, e, n);
    }
    decode(t, e = 0) {
      return this.layout.decode(t, e).chars.toString();
    }
    getSpan(t, e = 0) {
      return ne().span + ne().span + new ct(new Uint8Array(t).slice(e, e + 4), 10, "le").toNumber();
    }
  }
  function vt(r) {
    return new No(r);
  }
  function j(r) {
    return Ke(32, r);
  }
  const F = Fr(ne("instruction"));
  F.addVariant(0, B([
    re("lamports"),
    re("space"),
    j("owner")
  ]), "createAccount");
  F.addVariant(1, B([
    j("owner")
  ]), "assign");
  F.addVariant(2, B([
    re("lamports")
  ]), "transfer");
  F.addVariant(3, B([
    j("base"),
    vt("seed"),
    re("lamports"),
    re("space"),
    j("owner")
  ]), "createAccountWithSeed");
  F.addVariant(4, B([
    j("authorized")
  ]), "advanceNonceAccount");
  F.addVariant(5, B([
    re("lamports")
  ]), "withdrawNonceAccount");
  F.addVariant(6, B([
    j("authorized")
  ]), "initializeNonceAccount");
  F.addVariant(7, B([
    j("authorized")
  ]), "authorizeNonceAccount");
  F.addVariant(8, B([
    re("space")
  ]), "allocate");
  F.addVariant(9, B([
    j("base"),
    vt("seed"),
    re("space"),
    j("owner")
  ]), "allocateWithSeed");
  F.addVariant(10, B([
    j("base"),
    vt("seed"),
    j("owner")
  ]), "assignWithSeed");
  F.addVariant(11, B([
    re("lamports"),
    vt("seed"),
    j("owner")
  ]), "transferWithSeed");
  Math.max(...Object.values(F.registry).map((r) => r.span));
  class Bo extends yt {
    constructor(t, e, n, s) {
      super(t.span, s), this.layout = t, this.decoder = e, this.encoder = n;
    }
    decode(t, e) {
      return this.decoder(this.layout.decode(t, e));
    }
    encode(t, e, n) {
      return this.layout.encode(this.encoder(t), e, n);
    }
    getSpan(t, e) {
      return this.layout.getSpan(t, e);
    }
  }
  function Xn(r) {
    return new Bo(Ke(32), (t) => new P(t), (t) => t.toBuffer(), r);
  }
  B([
    ne("version"),
    ne("state"),
    Xn("authorizedPubkey"),
    Xn("nonce"),
    B([
      Uo("lamportsPerSignature")
    ], "feeCalculator")
  ]);
  function zo(r, ...t) {
    let e = [
      G.from([
        97,
        110,
        99,
        104,
        111,
        114
      ])
    ];
    t.forEach((s) => {
      e.push(s instanceof G ? s : q(s).toBuffer());
    });
    const [n] = P.findProgramAddressSync(e, q(r));
    return n;
  }
  const $o = new P("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"), Vo = new P("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL");
  var Jn = {
    exports: {}
  };
  (function(r, t) {
    var e = typeof self < "u" ? self : xo, n = (function() {
      function i() {
        this.fetch = false, this.DOMException = e.DOMException;
      }
      return i.prototype = e, new i();
    })();
    (function(i) {
      (function(o) {
        var a = {
          searchParams: "URLSearchParams" in i,
          iterable: "Symbol" in i && "iterator" in Symbol,
          blob: "FileReader" in i && "Blob" in i && (function() {
            try {
              return new Blob(), true;
            } catch {
              return false;
            }
          })(),
          formData: "FormData" in i,
          arrayBuffer: "ArrayBuffer" in i
        };
        function l(p) {
          return p && DataView.prototype.isPrototypeOf(p);
        }
        if (a.arrayBuffer) var c = [
          "[object Int8Array]",
          "[object Uint8Array]",
          "[object Uint8ClampedArray]",
          "[object Int16Array]",
          "[object Uint16Array]",
          "[object Int32Array]",
          "[object Uint32Array]",
          "[object Float32Array]",
          "[object Float64Array]"
        ], u = ArrayBuffer.isView || function(p) {
          return p && c.indexOf(Object.prototype.toString.call(p)) > -1;
        };
        function g(p) {
          if (typeof p != "string" && (p = String(p)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(p)) throw new TypeError("Invalid character in header field name");
          return p.toLowerCase();
        }
        function f(p) {
          return typeof p != "string" && (p = String(p)), p;
        }
        function d(p) {
          var w = {
            next: function() {
              var C = p.shift();
              return {
                done: C === void 0,
                value: C
              };
            }
          };
          return a.iterable && (w[Symbol.iterator] = function() {
            return w;
          }), w;
        }
        function h(p) {
          this.map = {}, p instanceof h ? p.forEach(function(w, C) {
            this.append(C, w);
          }, this) : Array.isArray(p) ? p.forEach(function(w) {
            this.append(w[0], w[1]);
          }, this) : p && Object.getOwnPropertyNames(p).forEach(function(w) {
            this.append(w, p[w]);
          }, this);
        }
        h.prototype.append = function(p, w) {
          p = g(p), w = f(w);
          var C = this.map[p];
          this.map[p] = C ? C + ", " + w : w;
        }, h.prototype.delete = function(p) {
          delete this.map[g(p)];
        }, h.prototype.get = function(p) {
          return p = g(p), this.has(p) ? this.map[p] : null;
        }, h.prototype.has = function(p) {
          return this.map.hasOwnProperty(g(p));
        }, h.prototype.set = function(p, w) {
          this.map[g(p)] = f(w);
        }, h.prototype.forEach = function(p, w) {
          for (var C in this.map) this.map.hasOwnProperty(C) && p.call(w, this.map[C], C, this);
        }, h.prototype.keys = function() {
          var p = [];
          return this.forEach(function(w, C) {
            p.push(C);
          }), d(p);
        }, h.prototype.values = function() {
          var p = [];
          return this.forEach(function(w) {
            p.push(w);
          }), d(p);
        }, h.prototype.entries = function() {
          var p = [];
          return this.forEach(function(w, C) {
            p.push([
              C,
              w
            ]);
          }), d(p);
        }, a.iterable && (h.prototype[Symbol.iterator] = h.prototype.entries);
        function _(p) {
          if (p.bodyUsed) return Promise.reject(new TypeError("Already read"));
          p.bodyUsed = true;
        }
        function m(p) {
          return new Promise(function(w, C) {
            p.onload = function() {
              w(p.result);
            }, p.onerror = function() {
              C(p.error);
            };
          });
        }
        function y(p) {
          var w = new FileReader(), C = m(w);
          return w.readAsArrayBuffer(p), C;
        }
        function E(p) {
          var w = new FileReader(), C = m(w);
          return w.readAsText(p), C;
        }
        function v(p) {
          for (var w = new Uint8Array(p), C = new Array(w.length), $ = 0; $ < w.length; $++) C[$] = String.fromCharCode(w[$]);
          return C.join("");
        }
        function b(p) {
          if (p.slice) return p.slice(0);
          var w = new Uint8Array(p.byteLength);
          return w.set(new Uint8Array(p)), w.buffer;
        }
        function k() {
          return this.bodyUsed = false, this._initBody = function(p) {
            this._bodyInit = p, p ? typeof p == "string" ? this._bodyText = p : a.blob && Blob.prototype.isPrototypeOf(p) ? this._bodyBlob = p : a.formData && FormData.prototype.isPrototypeOf(p) ? this._bodyFormData = p : a.searchParams && URLSearchParams.prototype.isPrototypeOf(p) ? this._bodyText = p.toString() : a.arrayBuffer && a.blob && l(p) ? (this._bodyArrayBuffer = b(p.buffer), this._bodyInit = new Blob([
              this._bodyArrayBuffer
            ])) : a.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(p) || u(p)) ? this._bodyArrayBuffer = b(p) : this._bodyText = p = Object.prototype.toString.call(p) : this._bodyText = "", this.headers.get("content-type") || (typeof p == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : a.searchParams && URLSearchParams.prototype.isPrototypeOf(p) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
          }, a.blob && (this.blob = function() {
            var p = _(this);
            if (p) return p;
            if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
            if (this._bodyArrayBuffer) return Promise.resolve(new Blob([
              this._bodyArrayBuffer
            ]));
            if (this._bodyFormData) throw new Error("could not read FormData body as blob");
            return Promise.resolve(new Blob([
              this._bodyText
            ]));
          }, this.arrayBuffer = function() {
            return this._bodyArrayBuffer ? _(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(y);
          }), this.text = function() {
            var p = _(this);
            if (p) return p;
            if (this._bodyBlob) return E(this._bodyBlob);
            if (this._bodyArrayBuffer) return Promise.resolve(v(this._bodyArrayBuffer));
            if (this._bodyFormData) throw new Error("could not read FormData body as text");
            return Promise.resolve(this._bodyText);
          }, a.formData && (this.formData = function() {
            return this.text().then(M);
          }), this.json = function() {
            return this.text().then(JSON.parse);
          }, this;
        }
        var N = [
          "DELETE",
          "GET",
          "HEAD",
          "OPTIONS",
          "POST",
          "PUT"
        ];
        function S(p) {
          var w = p.toUpperCase();
          return N.indexOf(w) > -1 ? w : p;
        }
        function R(p, w) {
          w = w || {};
          var C = w.body;
          if (p instanceof R) {
            if (p.bodyUsed) throw new TypeError("Already read");
            this.url = p.url, this.credentials = p.credentials, w.headers || (this.headers = new h(p.headers)), this.method = p.method, this.mode = p.mode, this.signal = p.signal, !C && p._bodyInit != null && (C = p._bodyInit, p.bodyUsed = true);
          } else this.url = String(p);
          if (this.credentials = w.credentials || this.credentials || "same-origin", (w.headers || !this.headers) && (this.headers = new h(w.headers)), this.method = S(w.method || this.method || "GET"), this.mode = w.mode || this.mode || null, this.signal = w.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && C) throw new TypeError("Body not allowed for GET or HEAD requests");
          this._initBody(C);
        }
        R.prototype.clone = function() {
          return new R(this, {
            body: this._bodyInit
          });
        };
        function M(p) {
          var w = new FormData();
          return p.trim().split("&").forEach(function(C) {
            if (C) {
              var $ = C.split("="), z = $.shift().replace(/\+/g, " "), O = $.join("=").replace(/\+/g, " ");
              w.append(decodeURIComponent(z), decodeURIComponent(O));
            }
          }), w;
        }
        function T(p) {
          var w = new h(), C = p.replace(/\r?\n[\t ]+/g, " ");
          return C.split(/\r?\n/).forEach(function($) {
            var z = $.split(":"), O = z.shift().trim();
            if (O) {
              var je = z.join(":").trim();
              w.append(O, je);
            }
          }), w;
        }
        k.call(R.prototype);
        function x(p, w) {
          w || (w = {}), this.type = "default", this.status = w.status === void 0 ? 200 : w.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in w ? w.statusText : "OK", this.headers = new h(w.headers), this.url = w.url || "", this._initBody(p);
        }
        k.call(x.prototype), x.prototype.clone = function() {
          return new x(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new h(this.headers),
            url: this.url
          });
        }, x.error = function() {
          var p = new x(null, {
            status: 0,
            statusText: ""
          });
          return p.type = "error", p;
        };
        var Q = [
          301,
          302,
          303,
          307,
          308
        ];
        x.redirect = function(p, w) {
          if (Q.indexOf(w) === -1) throw new RangeError("Invalid status code");
          return new x(null, {
            status: w,
            headers: {
              location: p
            }
          });
        }, o.DOMException = i.DOMException;
        try {
          new o.DOMException();
        } catch {
          o.DOMException = function(w, C) {
            this.message = w, this.name = C;
            var $ = Error(w);
            this.stack = $.stack;
          }, o.DOMException.prototype = Object.create(Error.prototype), o.DOMException.prototype.constructor = o.DOMException;
        }
        function me(p, w) {
          return new Promise(function(C, $) {
            var z = new R(p, w);
            if (z.signal && z.signal.aborted) return $(new o.DOMException("Aborted", "AbortError"));
            var O = new XMLHttpRequest();
            function je() {
              O.abort();
            }
            O.onload = function() {
              var xe = {
                status: O.status,
                statusText: O.statusText,
                headers: T(O.getAllResponseHeaders() || "")
              };
              xe.url = "responseURL" in O ? O.responseURL : xe.headers.get("X-Request-URL");
              var _t = "response" in O ? O.response : O.responseText;
              C(new x(_t, xe));
            }, O.onerror = function() {
              $(new TypeError("Network request failed"));
            }, O.ontimeout = function() {
              $(new TypeError("Network request failed"));
            }, O.onabort = function() {
              $(new o.DOMException("Aborted", "AbortError"));
            }, O.open(z.method, z.url, true), z.credentials === "include" ? O.withCredentials = true : z.credentials === "omit" && (O.withCredentials = false), "responseType" in O && a.blob && (O.responseType = "blob"), z.headers.forEach(function(xe, _t) {
              O.setRequestHeader(_t, xe);
            }), z.signal && (z.signal.addEventListener("abort", je), O.onreadystatechange = function() {
              O.readyState === 4 && z.signal.removeEventListener("abort", je);
            }), O.send(typeof z._bodyInit > "u" ? null : z._bodyInit);
          });
        }
        return me.polyfill = true, i.fetch || (i.fetch = me, i.Headers = h, i.Request = R, i.Response = x), o.Headers = h, o.Request = R, o.Response = x, o.fetch = me, Object.defineProperty(o, "__esModule", {
          value: true
        }), o;
      })({});
    })(n), n.fetch.ponyfill = true, delete n.fetch.polyfill;
    var s = n;
    t = s.fetch, t.default = s.fetch, t.fetch = s.fetch, t.Headers = s.Headers, t.Request = s.Request, t.Response = s.Response, r.exports = t;
  })(Jn, Jn.exports);
  A.rustEnum([
    A.struct([], "uninitialized"),
    A.struct([
      A.option(A.publicKey(), "authorityAddress")
    ], "buffer"),
    A.struct([
      A.publicKey("programdataAddress")
    ], "program"),
    A.struct([
      A.u64("slot"),
      A.option(A.publicKey(), "upgradeAuthorityAddress")
    ], "programData")
  ], void 0, A.u32());
  function Fo(r) {
    return "accounts" in r;
  }
  async function qo(r) {
    const t = (await P.findProgramAddress([], r))[0];
    return await P.createWithSeed(t, Ko(), r);
  }
  function Ko() {
    return "anchor:idl";
  }
  const jo = A.struct([
    A.publicKey("authority"),
    A.vecU8("data")
  ]);
  function Go(r) {
    return jo.decode(r);
  }
  function bt(r, t) {
    var e, n;
    let s = {};
    const i = r.args ? r.args.length : 0;
    if (t.length > i) {
      if (t.length !== i + 1) throw new Error(`provided too many arguments ${t} to instruction ${r == null ? void 0 : r.name} expecting: ${(n = (e = r.args) === null || e === void 0 ? void 0 : e.map((o) => o.name)) !== null && n !== void 0 ? n : []}`);
      s = t.pop();
    }
    return [
      t,
      s
    ];
  }
  class ot {
    static build(t, e, n) {
      if (t.name === "_inner") throw new st("the _inner name is reserved");
      const s = (...i) => {
        const [o, a] = bt(t, [
          ...i
        ]);
        xr(t.accounts, a.accounts), Zo(t, ...i);
        const l = s.accounts(a.accounts);
        return a.remainingAccounts !== void 0 && l.push(...a.remainingAccounts), Mr("debug-logs") && console.log("Outgoing account metas:", l), new tr({
          keys: l,
          programId: n,
          data: e(t.name, Yi(t, ...o))
        });
      };
      return s.accounts = (i) => ot.accountsArray(i, t.accounts, n, t.name), s;
    }
    static accountsArray(t, e, n, s) {
      return t ? e.map((i) => {
        if (("accounts" in i ? i.accounts : void 0) !== void 0) {
          const a = t[i.name];
          return ot.accountsArray(a, i.accounts, n, s).flat();
        } else {
          const a = i;
          let l;
          try {
            l = q(t[i.name]);
          } catch {
            throw new Error(`Wrong input type for account "${i.name}" in the instruction accounts object${s !== void 0 ? ' for instruction "' + s + '"' : ""}. Expected PublicKey or string.`);
          }
          const c = a.isOptional && l.equals(n), u = a.isMut && !c, g = a.isSigner && !c;
          return {
            pubkey: l,
            isWritable: u,
            isSigner: g
          };
        }
      }).flat() : [];
    }
  }
  function Zo(r, ...t) {
  }
  class Ho {
    static build(t, e) {
      return (...s) => {
        var i, o, a;
        const [, l] = bt(t, [
          ...s
        ]), c = new Qe();
        if (l.preInstructions && l.instructions) throw new Error("instructions is deprecated, use preInstructions");
        return (i = l.preInstructions) === null || i === void 0 || i.forEach((u) => c.add(u)), (o = l.instructions) === null || o === void 0 || o.forEach((u) => c.add(u)), c.add(e(...s)), (a = l.postInstructions) === null || a === void 0 || a.forEach((u) => c.add(u)), c;
      };
    }
  }
  class Wo {
    static build(t, e, n, s) {
      return async (...o) => {
        var a;
        const l = e(...o), [, c] = bt(t, [
          ...o
        ]);
        if (s.sendAndConfirm === void 0) throw new Error("This function requires 'Provider.sendAndConfirm' to be implemented.");
        try {
          return await s.sendAndConfirm(l, (a = c.signers) !== null && a !== void 0 ? a : [], c.options);
        } catch (u) {
          throw Rr(u, n);
        }
      };
    }
  }
  class Yo {
    static build(t, e, n, s) {
      var i;
      const o = {};
      return (i = t.accounts) === null || i === void 0 || i.forEach((a) => {
        const l = U(a.name);
        o[l] = new Xo(t, a, n, s, e);
      }), o;
    }
  }
  class Xo {
    get size() {
      return this._size;
    }
    get programId() {
      return this._programId;
    }
    get provider() {
      return this._provider;
    }
    get coder() {
      return this._coder;
    }
    get idlAccount() {
      return this._idlAccount;
    }
    constructor(t, e, n, s, i) {
      this._idlAccount = e, this._programId = n, this._provider = s ?? zt(), this._coder = i ?? new Dr(t), this._size = this._coder.accounts.size(e);
    }
    async fetchNullable(t, e) {
      const { data: n } = await this.fetchNullableAndContext(t, e);
      return n;
    }
    async fetchNullableAndContext(t, e) {
      const n = await this.getAccountInfoAndContext(t, e), { value: s, context: i } = n;
      return {
        data: s && s.data.length !== 0 ? this._coder.accounts.decode(this._idlAccount.name, s.data) : null,
        context: i
      };
    }
    async fetch(t, e) {
      const { data: n } = await this.fetchNullableAndContext(t, e);
      if (n === null) throw new Error(`Account does not exist or has no data ${t.toString()}`);
      return n;
    }
    async fetchAndContext(t, e) {
      const { data: n, context: s } = await this.fetchNullableAndContext(t, e);
      if (n === null) throw new Error(`Account does not exist ${t.toString()}`);
      return {
        data: n,
        context: s
      };
    }
    async fetchMultiple(t, e) {
      return (await this.fetchMultipleAndContext(t, e)).map((s) => s ? s.data : null);
    }
    async fetchMultipleAndContext(t, e) {
      return (await oo(this._provider.connection, t.map((s) => q(s)), e)).map((s) => {
        if (s == null) return null;
        const { account: i, context: o } = s;
        return {
          data: this._coder.accounts.decode(this._idlAccount.name, i.data),
          context: o
        };
      });
    }
    async all(t) {
      const e = this.coder.accounts.memcmp(this._idlAccount.name, t instanceof L ? t : void 0), n = [];
      return (e == null ? void 0 : e.offset) != null && (e == null ? void 0 : e.bytes) != null && n.push({
        memcmp: {
          offset: e.offset,
          bytes: e.bytes
        }
      }), (e == null ? void 0 : e.dataSize) != null && n.push({
        dataSize: e.dataSize
      }), (await this._provider.connection.getProgramAccounts(this._programId, {
        commitment: this._provider.connection.commitment,
        filters: [
          ...n,
          ...Array.isArray(t) ? t : []
        ]
      })).map(({ pubkey: i, account: o }) => ({
        publicKey: i,
        account: this._coder.accounts.decode(this._idlAccount.name, o.data)
      }));
    }
    subscribe(t, e) {
      const n = Le.get(t.toString());
      if (n) return n.ee;
      const s = new ji();
      t = q(t);
      const i = this._provider.connection.onAccountChange(t, (o) => {
        const a = this._coder.accounts.decode(this._idlAccount.name, o.data);
        s.emit("change", a);
      }, e);
      return Le.set(t.toString(), {
        ee: s,
        listener: i
      }), s;
    }
    async unsubscribe(t) {
      let e = Le.get(t.toString());
      if (!e) {
        console.warn("Address is not subscribed");
        return;
      }
      Le && await this._provider.connection.removeAccountChangeListener(e.listener).then(() => {
        Le.delete(t.toString());
      }).catch(console.error);
    }
    async createInstruction(t, e) {
      const n = this.size;
      if (this._provider.publicKey === void 0) throw new Error("This function requires the Provider interface implementor to have a 'publicKey' field.");
      return Z.createAccount({
        fromPubkey: this._provider.publicKey,
        newAccountPubkey: t.publicKey,
        space: e ?? n,
        lamports: await this._provider.connection.getMinimumBalanceForRentExemption(e ?? n),
        programId: this._programId
      });
    }
    async associated(...t) {
      const e = await this.associatedAddress(...t);
      return await this.fetch(e);
    }
    async associatedAddress(...t) {
      return await zo(this._programId, ...t);
    }
    async getAccountInfo(t, e) {
      return await this._provider.connection.getAccountInfo(q(t), e);
    }
    async getAccountInfoAndContext(t, e) {
      return await this._provider.connection.getAccountInfoAndContext(q(t), e);
    }
  }
  const Le = /* @__PURE__ */ new Map(), Kt = "Program log: ", qr = "Program data: ", Jo = Kt.length, Qo = qr.length;
  class ea {
    constructor(t, e, n) {
      this._programId = t, this._provider = e, this._eventParser = new Kr(t, n), this._eventCallbacks = /* @__PURE__ */ new Map(), this._eventListeners = /* @__PURE__ */ new Map(), this._listenerIdCount = 0;
    }
    addEventListener(t, e) {
      var n;
      let s = this._listenerIdCount;
      return this._listenerIdCount += 1, this._eventListeners.has(t) || this._eventListeners.set(t, []), this._eventListeners.set(t, ((n = this._eventListeners.get(t)) !== null && n !== void 0 ? n : []).concat(s)), this._eventCallbacks.set(s, [
        t,
        e
      ]), this._onLogsSubscriptionId !== void 0 || (this._onLogsSubscriptionId = this._provider.connection.onLogs(this._programId, (i, o) => {
        if (!i.err) for (const a of this._eventParser.parseLogs(i.logs)) {
          const l = this._eventListeners.get(a.name);
          l && l.forEach((c) => {
            const u = this._eventCallbacks.get(c);
            if (u) {
              const [, g] = u;
              g(a.data, o.slot, i.signature);
            }
          });
        }
      })), s;
    }
    async removeEventListener(t) {
      const e = this._eventCallbacks.get(t);
      if (!e) throw new Error(`Event listener ${t} doesn't exist!`);
      const [n] = e;
      let s = this._eventListeners.get(n);
      if (!s) throw new Error(`Event listeners don't exist for ${n}!`);
      if (this._eventCallbacks.delete(t), s = s.filter((i) => i !== t), this._eventListeners.set(n, s), s.length === 0 && this._eventListeners.delete(n), this._eventCallbacks.size === 0) {
        if (this._eventListeners.size !== 0) throw new Error(`Expected event listeners size to be 0 but got ${this._eventListeners.size}`);
        this._onLogsSubscriptionId !== void 0 && (await this._provider.connection.removeOnLogsListener(this._onLogsSubscriptionId), this._onLogsSubscriptionId = void 0);
      }
    }
  }
  class Kr {
    constructor(t, e) {
      this.coder = e, this.programId = t;
    }
    *parseLogs(t, e = false) {
      const n = new na(t), s = new ta();
      let i = n.next();
      for (; i !== null; ) {
        let [o, a, l] = this.handleLog(s, i, e);
        o && (yield o), a && s.push(a), l && s.pop(), i = n.next();
      }
    }
    handleLog(t, e, n) {
      return t.stack.length > 0 && t.program() === this.programId.toString() ? this.handleProgramLog(e, n) : [
        null,
        ...this.handleSystemLog(e)
      ];
    }
    handleProgramLog(t, e) {
      if (t.startsWith(Kt) || t.startsWith(qr)) {
        const n = t.startsWith(Kt) ? t.slice(Jo) : t.slice(Qo), s = this.coder.events.decode(n);
        if (e && s === null) throw new Error(`Unable to decode event ${n}`);
        return [
          s,
          null,
          false
        ];
      } else return [
        null,
        ...this.handleSystemLog(t)
      ];
    }
    handleSystemLog(t) {
      const e = t.split(":")[0];
      return e.match(/^Program (.*) success/g) !== null ? [
        null,
        true
      ] : e.startsWith(`Program ${this.programId.toString()} invoke`) ? [
        this.programId.toString(),
        false
      ] : e.includes("invoke") ? [
        "cpi",
        false
      ] : [
        null,
        false
      ];
    }
  }
  class ta {
    constructor() {
      this.stack = [];
    }
    program() {
      if (!this.stack.length) throw new Error("Expected the stack to have elements");
      return this.stack[this.stack.length - 1];
    }
    push(t) {
      this.stack.push(t);
    }
    pop() {
      if (!this.stack.length) throw new Error("Expected the stack to have elements");
      this.stack.pop();
    }
  }
  class na {
    constructor(t) {
      this.logs = t;
    }
    next() {
      if (this.logs.length === 0) return null;
      let t = this.logs[0];
      return this.logs = this.logs.slice(1), t;
    }
  }
  class ra {
    static build(t, e, n, s, i, o, a) {
      return async (...c) => {
        var u;
        const g = e(...c), [, f] = bt(t, [
          ...c
        ]);
        let d;
        if (s.simulate === void 0) throw new Error("This function requires 'Provider.simulate' to be implemented.");
        try {
          d = await s.simulate(g, f.signers, (u = f.options) === null || u === void 0 ? void 0 : u.commitment);
        } catch (m) {
          throw Rr(m, n);
        }
        if (d === void 0) throw new Error("Unable to simulate transaction");
        const h = d.logs;
        if (!h) throw new Error("Simulated logs not found");
        const _ = [];
        if (a.events) {
          let m = new Kr(o, i);
          for (const y of m.parseLogs(h)) _.push(y);
        }
        return {
          events: _,
          raw: h
        };
      };
    }
  }
  function Rt(r) {
    return new jr(Ke(8), (t) => Jt.fromBuffer(t), (t) => t.toBuffer(), r);
  }
  function Je(r) {
    return new jr(Ke(32), (t) => new P(t), (t) => t.toBuffer(), r);
  }
  function Pt(r, t) {
    return new sa(r, t);
  }
  class jr extends yt {
    constructor(t, e, n, s) {
      super(t.span, s), this.layout = t, this.decoder = e, this.encoder = n;
    }
    decode(t, e) {
      return this.decoder(this.layout.decode(t, e));
    }
    encode(t, e, n) {
      return this.layout.encode(this.encoder(t), e, n);
    }
    getSpan(t, e) {
      return this.layout.getSpan(t, e);
    }
  }
  class sa extends yt {
    constructor(t, e) {
      super(-1, e), this.layout = t, this.discriminator = ne();
    }
    encode(t, e, n = 0) {
      return t == null ? this.layout.span + this.discriminator.encode(0, e, n) : (this.discriminator.encode(1, e, n), this.layout.encode(t, e, n + 4) + 4);
    }
    decode(t, e = 0) {
      const n = this.discriminator.decode(t, e);
      if (n === 0) return null;
      if (n === 1) return this.layout.decode(t, e + 4);
      throw new Error("Invalid coption " + this.layout.property);
    }
    getSpan(t, e = 0) {
      return this.layout.getSpan(t, e + 4) + 4;
    }
  }
  class Jt extends ct {
    toBuffer() {
      const t = super.toArray().reverse(), e = L.from(t);
      if (e.length === 8) return e;
      if (e.length >= 8) throw new Error("u64 too large");
      const n = L.alloc(8);
      return e.copy(n), n;
    }
    static fromBuffer(t) {
      if (t.length !== 8) throw new Error(`Invalid buffer length: ${t.length}`);
      return new Jt([
        ...t
      ].reverse().map((e) => `00${e.toString(16)}`.slice(-2)).join(""), 16);
    }
  }
  const ia = B([
    Je("mint"),
    Je("owner"),
    Rt("amount"),
    Pt(Je(), "delegate"),
    ((r) => {
      const t = Fr(Do("discriminator"), null, r);
      return t.addVariant(0, B([]), "uninitialized"), t.addVariant(1, B([]), "initialized"), t.addVariant(2, B([]), "frozen"), t;
    })("state"),
    Pt(Rt(), "isNative"),
    Rt("delegatedAmount"),
    Pt(Je(), "closeAuthority")
  ]);
  function oa(r) {
    return ia.decode(r);
  }
  class Ue {
    constructor(t, e, n, s, i, o, a, l) {
      this._accounts = e, this._provider = n, this._programId = s, this._idlIx = i, this._idlTypes = a, this._customResolver = l, this._args = t, this._accountStore = new aa(n, o, this._programId);
    }
    args(t) {
      this._args = t;
    }
    async resolve() {
      for (await this.resolveConst(this._idlIx.accounts), this._resolveEventCpi(this._idlIx.accounts); await this.resolvePdas(this._idlIx.accounts) + await this.resolveRelations(this._idlIx.accounts) + await this.resolveCustom() > 0; ) ;
    }
    async resolveCustom() {
      if (this._customResolver) {
        const { accounts: t, resolved: e } = await this._customResolver({
          args: this._args,
          accounts: this._accounts,
          provider: this._provider,
          programId: this._programId,
          idlIx: this._idlIx
        });
        return this._accounts = t, e;
      }
      return 0;
    }
    resolveOptionalsHelper(t, e) {
      const n = {};
      for (const s of e) {
        const i = s.name, o = t[i];
        o !== void 0 && (Gr(o) ? Fo(s) ? n[i] = this.resolveOptionalsHelper(o, s.accounts) : n[i] = Zr(o) : o !== null ? n[i] = q(o) : s.isOptional && (n[i] = this._programId));
      }
      return n;
    }
    resolveOptionals(t) {
      Object.assign(this._accounts, this.resolveOptionalsHelper(t, this._idlIx.accounts));
    }
    get(t) {
      const e = t.reduce((n, s) => n && n[s], this._accounts);
      if (e && e.toBase58) return e;
    }
    set(t, e) {
      let n = this._accounts;
      t.forEach((s, i) => {
        i == t.length - 1 && (n[s] = e), n[s] = n[s] || {}, n = n[s];
      });
    }
    async resolveConst(t, e = []) {
      for (let n = 0; n < t.length; n += 1) {
        const s = t[n], i = s.accounts;
        i && await this.resolveConst(i, [
          ...e,
          U(s.name)
        ]);
        const o = s, a = U(s.name);
        if (o.isSigner && !this.get([
          ...e,
          a
        ])) {
          if (this._provider.wallet === void 0) throw new Error("This function requires the Provider interface implementor to have a 'wallet' field.");
          this.set([
            ...e,
            a
          ], this._provider.wallet.publicKey);
        }
        Reflect.has(Ue.CONST_ACCOUNTS, a) && !this.get([
          ...e,
          a
        ]) && this.set([
          ...e,
          a
        ], Ue.CONST_ACCOUNTS[a]);
      }
    }
    _resolveEventCpi(t, e = []) {
      for (const n in t) {
        const s = t[n], i = s.accounts;
        i && this._resolveEventCpi(i, [
          ...e,
          U(s.name)
        ]);
        const o = +n + 1;
        if (o === t.length) return;
        const a = U(t[n].name), l = U(t[o].name);
        if (a === "eventAuthority" && l === "program") {
          const c = [
            ...e,
            a
          ], u = [
            ...e,
            l
          ];
          this.get(c) || this.set(c, P.findProgramAddressSync([
            L.from("__event_authority")
          ], this._programId)[0]), this.get(u) || this.set(u, this._programId);
          return;
        }
      }
    }
    async resolvePdas(t, e = []) {
      let n = 0;
      for (let s = 0; s < t.length; s += 1) {
        const i = t[s], o = i.accounts;
        o && (n += await this.resolvePdas(o, [
          ...e,
          U(i.name)
        ]));
        const a = i, l = U(i.name);
        a.pda && a.pda.seeds.length > 0 && !this.get([
          ...e,
          l
        ]) && await this.autoPopulatePda(a, e) && (n += 1);
      }
      return n;
    }
    async resolveRelations(t, e = []) {
      let n = 0;
      for (let s = 0; s < t.length; s += 1) {
        const i = t[s], o = i.accounts;
        o && (n += await this.resolveRelations(o, [
          ...e,
          U(i.name)
        ]));
        const a = i.relations || [], l = U(i.name), c = [
          ...e,
          l
        ], u = this.get(c);
        if (u) {
          const g = a.filter((f) => !this.get([
            ...e,
            U(f)
          ]));
          if (n += g.length, g.length > 0) {
            const f = await this._accountStore.fetchAccount({
              publicKey: u
            });
            await Promise.all(g.map(async (d) => {
              const h = U(d);
              return this.set([
                ...e,
                h
              ], f[h]), f[h];
            }));
          }
        }
      }
      return n;
    }
    async autoPopulatePda(t, e = []) {
      if (!t.pda || !t.pda.seeds) throw new Error("Must have seeds");
      const n = await Promise.all(t.pda.seeds.map((o) => this.toBuffer(o, e)));
      if (n.some((o) => typeof o > "u")) return;
      const s = await this.parseProgramId(t, e);
      if (!s) return;
      const [i] = await P.findProgramAddress(n, s);
      this.set([
        ...e,
        U(t.name)
      ], i);
    }
    async parseProgramId(t, e = []) {
      var n;
      if (!(!((n = t.pda) === null || n === void 0) && n.programId)) return this._programId;
      switch (t.pda.programId.kind) {
        case "const":
          return new P(this.toBufferConst(t.pda.programId.value));
        case "arg":
          return this.argValue(t.pda.programId);
        case "account":
          return await this.accountValue(t.pda.programId, e);
        default:
          throw new Error(`Unexpected program seed kind: ${t.pda.programId.kind}`);
      }
    }
    async toBuffer(t, e = []) {
      switch (t.kind) {
        case "const":
          return this.toBufferConst(t);
        case "arg":
          return await this.toBufferArg(t);
        case "account":
          return await this.toBufferAccount(t, e);
        default:
          throw new Error(`Unexpected seed kind: ${t.kind}`);
      }
    }
    getType(t, e = []) {
      if (e.length > 0 && t.defined) {
        const n = this._idlTypes.find((o) => o.name === t.defined);
        if (!n) throw new Error(`Cannot find type ${t.defined}`);
        const i = n.type.fields.find((o) => o.name === e[0]);
        return this.getType(i.type, e.slice(1));
      }
      return t;
    }
    toBufferConst(t) {
      return this.toBufferValue(this.getType(t.type, (t.path || "").split(".").slice(1)), t.value);
    }
    async toBufferArg(t) {
      const e = this.argValue(t);
      if (!(typeof e > "u")) return this.toBufferValue(this.getType(t.type, (t.path || "").split(".").slice(1)), e);
    }
    argValue(t) {
      const e = t.path.split("."), n = U(e[0]), s = this._idlIx.args.findIndex((i) => i.name === n);
      if (s === -1) throw new Error(`Unable to find argument for seed: ${n}`);
      return e.slice(1).reduce((i, o) => (i || {})[o], this._args[s]);
    }
    async toBufferAccount(t, e = []) {
      const n = await this.accountValue(t, e);
      if (n) return this.toBufferValue(t.type, n);
    }
    async accountValue(t, e = []) {
      const n = t.path.split("."), s = n[0], i = this.get([
        ...e,
        U(s)
      ]);
      if (i === null) throw new Error("fieldPubkey is null");
      if (n.length === 1) return i;
      const o = await this._accountStore.fetchAccount({
        publicKey: i,
        name: t.account
      });
      return this.parseAccountValue(o, n.slice(1));
    }
    parseAccountValue(t, e) {
      let n;
      for (; e.length > 0; ) n = t[U(e[0])], e = e.slice(1);
      return n;
    }
    toBufferValue(t, e) {
      switch (t) {
        case "u8":
          return L.from([
            e
          ]);
        case "u16":
          let n = L.alloc(2);
          return n.writeUInt16LE(e), n;
        case "u32":
          let s = L.alloc(4);
          return s.writeUInt32LE(e), s;
        case "u64":
          let i = L.alloc(8);
          return i.writeBigUInt64LE(BigInt(e)), i;
        case "string":
          return L.from(Hi(e));
        case "publicKey":
          return e.toBuffer();
        default:
          if (t.array) return L.from(e);
          throw new Error(`Unexpected seed type: ${t}`);
      }
    }
  }
  Ue.CONST_ACCOUNTS = {
    associatedTokenProgram: Vo,
    rent: he,
    systemProgram: Z.programId,
    tokenProgram: $o,
    clock: ze
  };
  class aa {
    constructor(t, e, n) {
      this._provider = t, this._programId = n, this._cache = /* @__PURE__ */ new Map(), this._idls = {}, this._idls[n.toBase58()] = e;
    }
    async ensureIdl(t) {
      if (!this._idls[t.toBase58()]) {
        const e = await Ae.fetchIdl(t, this._provider);
        if (e) {
          const n = new Ae(e, t, this._provider);
          this._idls[t.toBase58()] = n.account;
        }
      }
      return this._idls[t.toBase58()];
    }
    async fetchAccount({ publicKey: t, name: e, programId: n = this._programId }) {
      const s = t.toString();
      if (!this._cache.has(s)) if (e === "TokenAccount") {
        const i = await this._provider.connection.getAccountInfo(t);
        if (i === null) throw new Error(`invalid account info for ${s}`);
        const o = oa(i.data);
        this._cache.set(s, o);
      } else if (e) {
        const i = await this.ensureIdl(n);
        if (i) {
          const o = i[U(e)];
          if (o) {
            const a = await o.fetch(t);
            this._cache.set(s, a);
          }
        }
      } else {
        const i = await this._provider.connection.getAccountInfo(t);
        if (i === null) throw new Error(`invalid account info for ${s}`);
        const o = i.data, a = await this.ensureIdl(i.owner);
        if (a) {
          const l = Object.values(a)[0];
          if (!l) throw new Error("No accounts for this program");
          const c = l.coder.accounts.decodeAny(o);
          this._cache.set(s, c);
        }
      }
      return this._cache.get(s);
    }
  }
  class ca {
    static build(t, e, n, s, i, o, a, l, c, u, g) {
      return (...f) => new ua(f, s, i, o, a, l, t, e, n, c, u, g);
    }
  }
  function Gr(r) {
    return typeof r == "object" && r !== null && !("_bn" in r);
  }
  function Zr(r, t) {
    const e = {};
    for (const n in r) {
      const s = r[n];
      if (s === null) throw new Error("Failed to resolve optionals due to IDL type mismatch with input accounts!");
      e[n] = Gr(s) ? Zr(s) : q(s);
    }
    return e;
  }
  class ua {
    constructor(t, e, n, s, i, o, a, l, c, u, g, f) {
      this._ixFn = e, this._txFn = n, this._rpcFn = s, this._simulateFn = i, this._viewFn = o, this._programId = l, this._accounts = {}, this._remainingAccounts = [], this._signers = [], this._preInstructions = [], this._postInstructions = [], this._autoResolveAccounts = true, this._args = t, this._accountsResolver = new Ue(t, this._accounts, a, l, c, u, g, f);
    }
    args(t) {
      this._args = t, this._accountsResolver.args(t);
    }
    async pubkeys() {
      return this._autoResolveAccounts && await this._accountsResolver.resolve(), this._accounts;
    }
    accounts(t) {
      return this._autoResolveAccounts = true, this._accountsResolver.resolveOptionals(t), this;
    }
    accountsStrict(t) {
      return this._autoResolveAccounts = false, this._accountsResolver.resolveOptionals(t), this;
    }
    signers(t) {
      return this._signers = this._signers.concat(t), this;
    }
    remainingAccounts(t) {
      return this._remainingAccounts = this._remainingAccounts.concat(t), this;
    }
    preInstructions(t) {
      return this._preInstructions = this._preInstructions.concat(t), this;
    }
    postInstructions(t) {
      return this._postInstructions = this._postInstructions.concat(t), this;
    }
    async rpc(t) {
      return this._autoResolveAccounts && await this._accountsResolver.resolve(), this._rpcFn(...this._args, {
        accounts: this._accounts,
        signers: this._signers,
        remainingAccounts: this._remainingAccounts,
        preInstructions: this._preInstructions,
        postInstructions: this._postInstructions,
        options: t
      });
    }
    async rpcAndKeys(t) {
      return {
        pubkeys: await this.pubkeys(),
        signature: await this.rpc(t)
      };
    }
    async view(t) {
      if (this._autoResolveAccounts && await this._accountsResolver.resolve(), !this._viewFn) throw new Error("Method does not support views");
      return this._viewFn(...this._args, {
        accounts: this._accounts,
        signers: this._signers,
        remainingAccounts: this._remainingAccounts,
        preInstructions: this._preInstructions,
        postInstructions: this._postInstructions,
        options: t
      });
    }
    async simulate(t) {
      return this._autoResolveAccounts && await this._accountsResolver.resolve(), this._simulateFn(...this._args, {
        accounts: this._accounts,
        signers: this._signers,
        remainingAccounts: this._remainingAccounts,
        preInstructions: this._preInstructions,
        postInstructions: this._postInstructions,
        options: t
      });
    }
    async instruction() {
      return this._autoResolveAccounts && await this._accountsResolver.resolve(), this._ixFn(...this._args, {
        accounts: this._accounts,
        signers: this._signers,
        remainingAccounts: this._remainingAccounts,
        preInstructions: this._preInstructions,
        postInstructions: this._postInstructions
      });
    }
    async prepare() {
      return {
        instruction: await this.instruction(),
        pubkeys: await this.pubkeys(),
        signers: await this._signers
      };
    }
    async transaction() {
      return this._autoResolveAccounts && await this._accountsResolver.resolve(), this._txFn(...this._args, {
        accounts: this._accounts,
        signers: this._signers,
        remainingAccounts: this._remainingAccounts,
        preInstructions: this._preInstructions,
        postInstructions: this._postInstructions
      });
    }
  }
  class la {
    static build(t, e, n, s) {
      const i = e.accounts.find((l) => l.isMut), o = !!e.returns;
      return i || !o ? void 0 : async (...l) => {
        var c, u;
        let g = await n(...l);
        const f = `Program return: ${t} `;
        let d = g.raw.find((y) => y.startsWith(f));
        if (!d) throw new Error("View expected return log");
        let h = kr(d.slice(f.length)), _ = e.returns;
        if (!_) throw new Error("View expected return type");
        return qe.fieldLayout({
          type: _
        }, Array.from([
          ...(c = s.accounts) !== null && c !== void 0 ? c : [],
          ...(u = s.types) !== null && u !== void 0 ? u : []
        ])).decode(h);
      };
    }
  }
  class da {
    static build(t, e, n, s, i) {
      const o = {}, a = {}, l = {}, c = {}, u = {}, g = {}, f = Wi(t), d = t.accounts ? Yo.build(t, e, n, s) : {};
      return t.instructions.forEach((h) => {
        const _ = ot.build(h, (N, S) => e.instruction.encode(N, S), n), m = Ho.build(h, _), y = Wo.build(h, m, f, s), E = ra.build(h, m, f, s, e, n, t), v = la.build(n, h, E, t), b = ca.build(s, n, h, _, m, y, E, v, d, t.types || [], i && i(h)), k = U(h.name);
        a[k] = _, l[k] = m, o[k] = y, c[k] = E, u[k] = b, v && (g[k] = v);
      }), [
        o,
        a,
        l,
        d,
        c,
        u,
        g
      ];
    }
  }
  Ae = class {
    get programId() {
      return this._programId;
    }
    get idl() {
      return this._idl;
    }
    get coder() {
      return this._coder;
    }
    get provider() {
      return this._provider;
    }
    constructor(t, e, n, s, i) {
      e = q(e), n || (n = zt()), this._idl = t, this._provider = n, this._programId = e, this._coder = s ?? new Dr(t), this._events = new ea(this._programId, n, this._coder);
      const [o, a, l, c, u, g, f] = da.build(t, this._coder, e, n, i ?? (() => {
      }));
      this.rpc = o, this.instruction = a, this.transaction = l, this.account = c, this.simulate = u, this.methods = g, this.views = f;
    }
    static async at(t, e) {
      const n = q(t), s = await Ae.fetchIdl(n, e);
      if (!s) throw new Error(`IDL not found for program: ${t.toString()}`);
      return new Ae(s, n, e);
    }
    static async fetchIdl(t, e) {
      e = e ?? zt();
      const n = q(t), s = await qo(n), i = await e.connection.getAccountInfo(s);
      if (!i) return null;
      let o = Go(i.data.slice(8));
      const a = Fi(o.data);
      return JSON.parse(Zi(a));
    }
    addEventListener(t, e) {
      return this._events.addEventListener(t, e);
    }
    async removeEventListener(t) {
      return await this._events.removeEventListener(t);
    }
  };
  new P("11111111111111111111111111111111");
  class fa {
    constructor(t) {
      __publicField(this, "idl");
      this.idl = t;
    }
    async encode(t, e) {
      throw new Error(`Invalid account name: ${t}`);
    }
    decode(t, e) {
      return this.decodeUnchecked(t, e);
    }
    decodeUnchecked(t, e) {
      throw new Error(`Invalid account name: ${t}`);
    }
    memcmp(t, e) {
      switch (t) {
        case "postVaa":
          return {
            dataSize: 56
          };
        default:
          throw new Error(`Invalid account name: ${t}`);
      }
    }
    size(t) {
      return as(this.idl, t) ?? 0;
    }
  }
  class ha {
    constructor(t) {
    }
    decode(t) {
      throw new Error("Wormhole program does not have events");
    }
  }
  class _e {
    static fieldLayout(t, e) {
      const n = t.name !== void 0 ? Ce(t.name) : void 0;
      switch (t.type) {
        case "bool":
          return A.bool(n);
        case "u8":
          return A.u8(n);
        case "i8":
          return A.i8(n);
        case "u16":
          return A.u16(n);
        case "i16":
          return A.i16(n);
        case "u32":
          return A.u32(n);
        case "i32":
          return A.i32(n);
        case "f32":
          return A.f32(n);
        case "u64":
          return A.u64(n);
        case "i64":
          return A.i64(n);
        case "f64":
          return A.f64(n);
        case "u128":
          return A.u128(n);
        case "i128":
          return A.i128(n);
        case "u256":
          return A.u256(n);
        case "i256":
          return A.i256(n);
        case "bytes":
          return A.vecU8(n);
        case "string":
          return A.str(n);
        case "publicKey":
          return A.publicKey(n);
        default: {
          if ("vec" in t.type) return A.vec(_e.fieldLayout({
            name: void 0,
            type: t.type.vec
          }, e), n);
          if ("option" in t.type) return A.option(_e.fieldLayout({
            name: void 0,
            type: t.type.option
          }, e), n);
          if ("array" in t.type) {
            let s = t.type.array[0], i = t.type.array[1], o = _e.fieldLayout({
              name: void 0,
              type: s
            }, e);
            return A.array(o, i, n);
          } else throw new Error(`Not yet implemented: ${t}`);
        }
      }
    }
  }
  class Qt {
    constructor(t) {
      __publicField(this, "ixLayout");
      this.ixLayout = Qt.parseIxLayout(t);
    }
    static parseIxLayout(t) {
      const n = (t.instructions ? t.instructions : []).map((s) => {
        let i = s.args.map((a) => _e.fieldLayout(a, Array.from([
          ...t.accounts ?? [],
          ...t.types ?? []
        ])));
        const o = Ce(s.name);
        return [
          o,
          A.struct(i, o)
        ];
      }).concat(t.instructions.map((s) => {
        let i = s.args.map((a) => _e.fieldLayout(a, Array.from([
          ...t.accounts ?? [],
          ...t.types ?? []
        ])));
        const o = Ce(s.name);
        return [
          o,
          A.struct(i, o)
        ];
      }));
      return new Map(n);
    }
    encode(t, e) {
      const n = L.alloc(1e3), s = Ce(t), i = this.ixLayout.get(s);
      if (!i) throw new Error(`Unknown method: ${s}`);
      const o = i.encode(e, n), a = n.slice(0, o);
      return pa(at[cs(s)], a);
    }
    encodeState(t, e) {
      throw new Error("Wormhole program does not have state");
    }
    decode(t, e = "hex") {
      var _a2;
      typeof t == "string" && (t = e === "hex" ? L.from(t, "hex") : ys.decode(t));
      let n = L.from(t.slice(0, 1)).readInt8(), s = L.from(t.slice(1)), i = Ce(at[n] ?? "");
      return this.ixLayout.get(i) ? {
        data: (_a2 = this.ixLayout.get(i)) == null ? void 0 : _a2.decode(s),
        name: i
      } : null;
    }
  }
  var at;
  (function(r) {
    r[r.Initialize = 0] = "Initialize", r[r.PostMessage = 1] = "PostMessage", r[r.PostVaa = 2] = "PostVaa", r[r.SetFees = 3] = "SetFees", r[r.TransferFees = 4] = "TransferFees", r[r.UpgradeContract = 5] = "UpgradeContract", r[r.UpgradeGuardianSet = 6] = "UpgradeGuardianSet", r[r.VerifySignatures = 7] = "VerifySignatures", r[r.PostMessageUnreliable = 8] = "PostMessageUnreliable";
  })(at || (at = {}));
  function pa(r, t) {
    const e = L.alloc(1 + (t === void 0 ? 0 : t.length));
    return e.writeUInt8(r, 0), t !== void 0 && e.write(t.toString("hex"), 1, "hex"), e;
  }
  class ga {
    constructor(t) {
    }
    encode(t, e) {
      throw new Error("Wormhole program does not have state");
    }
    decode(t) {
      throw new Error("Wormhole program does not have state");
    }
  }
  class ma {
    constructor(t) {
    }
    encode(t, e) {
      throw new Error("Wormhole program does not have user-defined types");
    }
    decode(t, e) {
      throw new Error("Wormhole program does not have user-defined types");
    }
  }
  class ya {
    constructor(t) {
      __publicField(this, "instruction");
      __publicField(this, "accounts");
      __publicField(this, "state");
      __publicField(this, "events");
      __publicField(this, "types");
      this.instruction = new Qt(t), this.accounts = new fa(t), this.state = new ga(t), this.events = new ha(t), this.types = new ma(t);
    }
  }
  const en = {
    version: "0.1.0",
    name: "wormhole",
    instructions: [
      {
        name: "initialize",
        accounts: [
          {
            name: "bridge",
            isMut: true,
            isSigner: false
          },
          {
            name: "guardianSet",
            isMut: true,
            isSigner: false
          },
          {
            name: "feeCollector",
            isMut: true,
            isSigner: false
          },
          {
            name: "payer",
            isMut: true,
            isSigner: true
          },
          {
            name: "clock",
            isMut: false,
            isSigner: false
          },
          {
            name: "rent",
            isMut: false,
            isSigner: false
          },
          {
            name: "systemProgram",
            isMut: false,
            isSigner: false
          }
        ],
        args: [
          {
            name: "guardianSetExpirationTime",
            type: "u32"
          },
          {
            name: "fee",
            type: "u64"
          },
          {
            name: "initialGuardians",
            type: {
              vec: {
                array: [
                  "u8",
                  20
                ]
              }
            }
          }
        ]
      },
      {
        name: "postMessage",
        accounts: [
          {
            name: "bridge",
            isMut: true,
            isSigner: false
          },
          {
            name: "message",
            isMut: true,
            isSigner: true
          },
          {
            name: "emitter",
            isMut: false,
            isSigner: true
          },
          {
            name: "sequence",
            isMut: true,
            isSigner: false
          },
          {
            name: "payer",
            isMut: true,
            isSigner: true
          },
          {
            name: "feeCollector",
            isMut: true,
            isSigner: false
          },
          {
            name: "clock",
            isMut: false,
            isSigner: false
          },
          {
            name: "rent",
            isMut: false,
            isSigner: false
          },
          {
            name: "systemProgram",
            isMut: false,
            isSigner: false
          }
        ],
        args: [
          {
            name: "nonce",
            type: "u32"
          },
          {
            name: "payload",
            type: "bytes"
          },
          {
            name: "consistencyLevel",
            type: "u8"
          }
        ]
      },
      {
        name: "postVaa",
        accounts: [
          {
            name: "guardianSet",
            isMut: false,
            isSigner: false
          },
          {
            name: "bridge",
            isMut: false,
            isSigner: false
          },
          {
            name: "signatureSet",
            isMut: false,
            isSigner: false
          },
          {
            name: "vaa",
            isMut: true,
            isSigner: false
          },
          {
            name: "payer",
            isMut: true,
            isSigner: true
          },
          {
            name: "clock",
            isMut: false,
            isSigner: false
          },
          {
            name: "rent",
            isMut: false,
            isSigner: false
          },
          {
            name: "systemProgram",
            isMut: false,
            isSigner: false
          }
        ],
        args: [
          {
            name: "version",
            type: "u8"
          },
          {
            name: "guardianSetIndex",
            type: "u32"
          },
          {
            name: "timestamp",
            type: "u32"
          },
          {
            name: "nonce",
            type: "u32"
          },
          {
            name: "emitterChain",
            type: "u16"
          },
          {
            name: "emitterAddress",
            type: {
              array: [
                "u8",
                32
              ]
            }
          },
          {
            name: "sequence",
            type: "u64"
          },
          {
            name: "consistencyLevel",
            type: "u8"
          },
          {
            name: "payload",
            type: "bytes"
          }
        ]
      },
      {
        name: "setFees",
        accounts: [
          {
            name: "payer",
            isMut: true,
            isSigner: true
          },
          {
            name: "bridge",
            isMut: true,
            isSigner: false
          },
          {
            name: "vaa",
            isMut: false,
            isSigner: false
          },
          {
            name: "claim",
            isMut: true,
            isSigner: false
          },
          {
            name: "systemProgram",
            isMut: false,
            isSigner: false
          }
        ],
        args: []
      },
      {
        name: "transferFees",
        accounts: [
          {
            name: "payer",
            isMut: true,
            isSigner: true
          },
          {
            name: "bridge",
            isMut: true,
            isSigner: false
          },
          {
            name: "vaa",
            isMut: false,
            isSigner: false
          },
          {
            name: "claim",
            isMut: true,
            isSigner: false
          },
          {
            name: "feeCollector",
            isMut: true,
            isSigner: false
          },
          {
            name: "recipient",
            isMut: true,
            isSigner: false
          },
          {
            name: "rent",
            isMut: false,
            isSigner: false
          },
          {
            name: "systemProgram",
            isMut: false,
            isSigner: false
          }
        ],
        args: []
      },
      {
        name: "upgradeContract",
        accounts: [
          {
            name: "payer",
            isMut: true,
            isSigner: true
          },
          {
            name: "bridge",
            isMut: true,
            isSigner: false
          },
          {
            name: "vaa",
            isMut: false,
            isSigner: false
          },
          {
            name: "claim",
            isMut: true,
            isSigner: false
          },
          {
            name: "upgradeAuthority",
            isMut: false,
            isSigner: false
          },
          {
            name: "spill",
            isMut: true,
            isSigner: false
          },
          {
            name: "implementation",
            isMut: true,
            isSigner: false
          },
          {
            name: "programData",
            isMut: true,
            isSigner: false
          },
          {
            name: "wormholeProgram",
            isMut: true,
            isSigner: false
          },
          {
            name: "rent",
            isMut: false,
            isSigner: false
          },
          {
            name: "clock",
            isMut: false,
            isSigner: false
          },
          {
            name: "bpfLoaderUpgradeable",
            isMut: false,
            isSigner: false
          },
          {
            name: "systemProgram",
            isMut: false,
            isSigner: false
          }
        ],
        args: []
      },
      {
        name: "upgradeGuardianSet",
        accounts: [
          {
            name: "payer",
            isMut: true,
            isSigner: true
          },
          {
            name: "bridge",
            isMut: true,
            isSigner: false
          },
          {
            name: "vaa",
            isMut: false,
            isSigner: false
          },
          {
            name: "claim",
            isMut: true,
            isSigner: false
          },
          {
            name: "guardianSetOld",
            isMut: true,
            isSigner: false
          },
          {
            name: "guardianSetNew",
            isMut: true,
            isSigner: false
          },
          {
            name: "systemProgram",
            isMut: false,
            isSigner: false
          }
        ],
        args: []
      },
      {
        name: "verifySignatures",
        accounts: [
          {
            name: "payer",
            isMut: true,
            isSigner: true
          },
          {
            name: "guardianSet",
            isMut: false,
            isSigner: false
          },
          {
            name: "signatureSet",
            isMut: true,
            isSigner: true
          },
          {
            name: "instructions",
            isMut: false,
            isSigner: false
          },
          {
            name: "rent",
            isMut: false,
            isSigner: false
          },
          {
            name: "systemProgram",
            isMut: false,
            isSigner: false
          }
        ],
        args: [
          {
            name: "signatureStatus",
            type: {
              array: [
                "i8",
                19
              ]
            }
          }
        ]
      },
      {
        name: "postMessageUnreliable",
        accounts: [
          {
            name: "bridge",
            isMut: true,
            isSigner: false
          },
          {
            name: "message",
            isMut: true,
            isSigner: true
          },
          {
            name: "emitter",
            isMut: false,
            isSigner: true
          },
          {
            name: "sequence",
            isMut: true,
            isSigner: false
          },
          {
            name: "payer",
            isMut: true,
            isSigner: true
          },
          {
            name: "feeCollector",
            isMut: true,
            isSigner: false
          },
          {
            name: "clock",
            isMut: false,
            isSigner: false
          },
          {
            name: "rent",
            isMut: false,
            isSigner: false
          },
          {
            name: "systemProgram",
            isMut: false,
            isSigner: false
          }
        ],
        args: [
          {
            name: "nonce",
            type: "u32"
          },
          {
            name: "payload",
            type: "bytes"
          },
          {
            name: "consistencyLevel",
            type: "u8"
          }
        ]
      }
    ],
    accounts: [
      {
        name: "PostedMessage",
        type: {
          kind: "struct",
          fields: [
            {
              name: "vaaVersion",
              type: "u8"
            },
            {
              name: "consistencyLevel",
              type: "u8"
            },
            {
              name: "vaaTime",
              type: "u32"
            },
            {
              name: "vaaSignatureAccount",
              type: "publicKey"
            },
            {
              name: "submissionTime",
              type: "u32"
            },
            {
              name: "nonce",
              type: "u32"
            },
            {
              name: "sequence",
              type: "u64"
            },
            {
              name: "emitterChain",
              type: "u16"
            },
            {
              name: "emitterAddress",
              type: {
                array: [
                  "u8",
                  32
                ]
              }
            },
            {
              name: "payload",
              type: "bytes"
            }
          ]
        }
      },
      {
        name: "PostedVAA",
        type: {
          kind: "struct",
          fields: [
            {
              name: "vaaVersion",
              type: "u8"
            },
            {
              name: "consistencyLevel",
              type: "u8"
            },
            {
              name: "vaaTime",
              type: "u32"
            },
            {
              name: "vaaSignatureAccount",
              type: "publicKey"
            },
            {
              name: "submissionTime",
              type: "u32"
            },
            {
              name: "nonce",
              type: "u32"
            },
            {
              name: "sequence",
              type: "u64"
            },
            {
              name: "emitterChain",
              type: "u16"
            },
            {
              name: "emitterAddress",
              type: {
                array: [
                  "u8",
                  32
                ]
              }
            },
            {
              name: "payload",
              type: "bytes"
            }
          ]
        }
      }
    ]
  };
  function Hr(r, t) {
    return new Ae(en, new P(r), t === void 0 ? {
      connection: null
    } : t, Wr());
  }
  function J(r, t) {
    return Hr(r, us(t));
  }
  function Wr() {
    return new ya(en);
  }
  function wa(r, t, e, n) {
    const s = J(t, r).methods.setFees();
    return s._ixFn(...s._args, {
      accounts: Yr(t, e, n),
      signers: void 0,
      remainingAccounts: void 0,
      preInstructions: void 0,
      postInstructions: void 0
    });
  }
  function Yr(r, t, e) {
    return {
      payer: new P(t),
      bridge: X(r),
      vaa: pe(r, L.from(e.hash)),
      claim: Se(r, e.emitterAddress.toString(), Ee(e.emitterChain), e.sequence),
      systemProgram: Z.programId
    };
  }
  function va(r, t, e, n, s) {
    const i = J(t, r).methods.transferFees();
    return i._ixFn(...i._args, {
      accounts: Xr(t, e, n, s),
      signers: void 0,
      remainingAccounts: void 0,
      preInstructions: void 0,
      postInstructions: void 0
    });
  }
  function Xr(r, t, e, n) {
    return {
      payer: new P(t),
      bridge: X(r),
      vaa: pe(r, L.from(n.hash)),
      claim: Se(r, n.emitterAddress.toString(), Ee(n.emitterChain), n.sequence),
      feeCollector: Ie(r),
      recipient: new P(e),
      rent: he,
      systemProgram: Z.programId
    };
  }
  function ba(r, t, e, n) {
    const s = J(t, r).methods.upgradeGuardianSet();
    return s._ixFn(...s._args, {
      accounts: Jr(t, e, n),
      signers: void 0,
      remainingAccounts: void 0,
      preInstructions: void 0,
      postInstructions: void 0
    });
  }
  function Jr(r, t, e) {
    return {
      payer: new P(t),
      bridge: X(r),
      vaa: pe(r, L.from(e.hash)),
      claim: Se(r, e.emitterAddress.toString(), Ee(e.emitterChain), e.sequence),
      guardianSetOld: de(r, e.guardianSet),
      guardianSetNew: de(r, e.guardianSet + 1),
      systemProgram: Z.programId
    };
  }
  function _a(r, t, e, n) {
    const s = J(t, r).methods.upgradeContract();
    return s._ixFn(...s._args, {
      accounts: Qr(t, e, n),
      signers: void 0,
      remainingAccounts: void 0,
      preInstructions: void 0,
      postInstructions: void 0
    });
  }
  function Qr(r, t, e, n) {
    const { newContract: s } = e.payload.actionArgs;
    return {
      payer: new P(t),
      bridge: X(r),
      vaa: pe(r, L.from(e.hash)),
      claim: Se(r, e.emitterAddress.toString(), Ee(e.emitterChain), e.sequence),
      upgradeAuthority: ar(r),
      spill: new P(n === void 0 ? t : n),
      implementation: new et(s).unwrap(),
      programData: ds(r),
      wormholeProgram: new P(r),
      rent: he,
      clock: ze,
      bpfLoaderUpgradeable: ls,
      systemProgram: Z.programId
    };
  }
  function Aa(r, t, e, n, s, i) {
    const o = J(t, r).methods.initialize(n, new ct(s.toString()), [
      ...i.map((a) => [
        ...new Uint8Array(a)
      ])
    ]);
    return o._ixFn(...o._args, {
      accounts: es(t, e),
      signers: void 0,
      remainingAccounts: void 0,
      preInstructions: void 0,
      postInstructions: void 0
    });
  }
  function es(r, t) {
    return {
      bridge: X(r),
      guardianSet: de(r, 0),
      feeCollector: Ie(r),
      payer: new P(t),
      clock: ze,
      rent: he,
      systemProgram: Z.programId
    };
  }
  function ts(r, t, e, n, s, i, o) {
    const a = J(t, r).methods.postMessage(i, L.from(s), o);
    return a._ixFn(...a._args, {
      accounts: tn(t, e, n),
      signers: void 0,
      remainingAccounts: void 0,
      preInstructions: void 0,
      postInstructions: void 0
    });
  }
  tn = function(r, t, e, n) {
    let s;
    return n ? { emitter: n, sequence: s } = Gt(n, r) : (n = t, s = dt(n, r)), {
      bridge: X(r),
      message: new P(e),
      emitter: new P(n),
      sequence: s,
      payer: new P(t),
      feeCollector: Ie(r),
      clock: ze,
      rent: he,
      systemProgram: Z.programId
    };
  };
  function ns(r, t, e, n, s) {
    const i = J(t, r).methods.postVaa(1, n.guardianSet, n.timestamp, n.nonce, Ee(n.emitterChain), [
      ...n.emitterAddress.toUint8Array()
    ], new ct(n.sequence.toString()), n.consistencyLevel, L.from(ws(n.payloadLiteral, n.payload)));
    return i._ixFn(...i._args, {
      accounts: rs(t, e, s, n),
      signers: void 0,
      remainingAccounts: void 0,
      preInstructions: void 0,
      postInstructions: void 0
    });
  }
  function rs(r, t, e, n) {
    return {
      guardianSet: de(r, n.guardianSet),
      bridge: X(r),
      signatureSet: new P(e),
      vaa: pe(r, L.from(n.hash)),
      payer: new P(t),
      clock: ze,
      rent: he,
      systemProgram: Z.programId
    };
  }
  const Ea = 19;
  async function ss(r, t, e, n, s, i) {
    const o = n.guardianSet, a = await Zt(r, t, o, i), l = n.signatures, c = a.keys, u = 7, g = [];
    for (let f = 0; f < Math.ceil(l.length / u); ++f) {
      const d = f * u, h = Math.min(l.length, (f + 1) * u), _ = new Array(Ea).fill(-1), m = [], y = [];
      for (let E = 0; E < h - d; ++E) {
        const v = l.at(E + d);
        m.push(L.from(v.signature.encode())), y.push(c.at(v.guardianIndex)), _[v.guardianIndex] = E;
      }
      g.push(Ss(m, y, L.from(n.hash))), g.push(Sa(r, t, e, n, s, _));
    }
    return g;
  }
  function Sa(r, t, e, n, s, i) {
    const o = J(t, r).methods.verifySignatures(i);
    return o._ixFn(...o._args, {
      accounts: is(t, e, s, n),
      signers: void 0,
      remainingAccounts: void 0,
      preInstructions: void 0,
      postInstructions: void 0
    });
  }
  function is(r, t, e, n) {
    return {
      payer: new P(t),
      guardianSet: de(r, n.guardianSet),
      signatureSet: new P(e),
      instructions: fs,
      rent: he,
      systemProgram: Z.programId
    };
  }
  Ia = function(r, t) {
    const { emitter: e, sequence: n } = Gt(r, t);
    return {
      wormholeBridge: X(t),
      wormholeEmitter: e,
      wormholeSequence: n,
      wormholeFeeCollector: Ie(t)
    };
  };
  ka = function(r, t, e, n) {
    const s = tn(t, e, n, r);
    return {
      payer: s.payer,
      wormholeBridge: s.bridge,
      wormholeMessage: s.message,
      wormholeEmitter: s.emitter,
      wormholeSequence: s.sequence,
      wormholeFeeCollector: s.feeCollector,
      clock: s.clock,
      rent: s.rent,
      systemProgram: s.systemProgram
    };
  };
  const xa = Object.freeze(Object.defineProperty({
    __proto__: null,
    BridgeConfig: ut,
    BridgeData: lt,
    GuardianSetData: ht,
    SequenceTracker: ft,
    SignatureSetData: pt,
    coder: Wr,
    createBridgeFeeTransferInstruction: cr,
    createInitializeInstruction: Aa,
    createPostMessageInstruction: ts,
    createPostVaaInstruction: ns,
    createReadOnlyWormholeProgramInterface: J,
    createSetFeesInstruction: wa,
    createTransferFeesInstruction: va,
    createUpgradeContractInstruction: _a,
    createUpgradeGuardianSetInstruction: ba,
    createVerifySignaturesInstructions: ss,
    createWormholeProgramInterface: Hr,
    deriveClaimKey: Se,
    deriveEmitterSequenceKey: dt,
    deriveFeeCollectorKey: Ie,
    deriveGuardianSetKey: de,
    derivePostedVaaKey: pe,
    deriveUpgradeAuthorityKey: ar,
    deriveWormholeBridgeDataKey: X,
    deriveWormholeEmitterKey: jt,
    getClaim: As,
    getEmitterKeys: Gt,
    getGuardianSet: Zt,
    getInitializeAccounts: es,
    getPostMessageAccounts: tn,
    getPostMessageCpiAccounts: ka,
    getPostVaaAccounts: rs,
    getProgramSequenceTracker: Es,
    getSequenceTracker: or,
    getSetFeesAccounts: Yr,
    getSignatureSetData: ks,
    getTransferFeesAccounts: Xr,
    getUpgradeContractAccounts: Qr,
    getUpgradeGuardianSetAccounts: Jr,
    getVerifySignatureAccounts: is,
    getWormholeBridgeData: ir,
    getWormholeDerivedAccounts: Ia
  }, Symbol.toStringTag, {
    value: "Module"
  })), Qn = "Program log: Sequence: ";
  Ne = class {
    constructor(t, e, n, s) {
      __publicField(this, "network");
      __publicField(this, "chain");
      __publicField(this, "connection");
      __publicField(this, "contracts");
      __publicField(this, "chainId");
      __publicField(this, "coreBridge");
      __publicField(this, "address");
      __publicField(this, "bridgeData");
      this.network = t, this.chain = e, this.connection = n, this.contracts = s, this.chainId = Ee(e);
      const i = s.coreBridge;
      if (!i) throw new Error(`CoreBridge contract Address for chain ${e} not found`);
      this.address = i, this.coreBridge = J(i, n);
    }
    async getGuardianSet(t) {
      const e = await Zt(this.connection, this.coreBridge.programId, t);
      return {
        index: e.index,
        keys: e.keys.map((n) => n.toString("hex")),
        expiry: BigInt(e.expirationTime)
      };
    }
    static async fromRpc(t, e) {
      const [n, s] = await hs.chainFromRpc(t), i = e[s];
      if (i.network !== n) throw new Error(`Network mismatch for chain ${s}: ${i.network} != ${n}`);
      return new Ne(n, s, t, e[s].contracts);
    }
    async ensureBridgeConfig() {
      this.bridgeData || (this.bridgeData = await ir(this.connection, this.coreBridge.programId));
    }
    async getMessageFee() {
      return await this.ensureBridgeConfig(), this.bridgeData.config.fee;
    }
    async getGuardianSetIndex() {
      return await this.ensureBridgeConfig(), this.bridgeData.guardianSetIndex;
    }
    async *publishMessage(t, e, n, s) {
      const i = nn.generate(), o = new et(t).unwrap(), a = ts(this.connection, this.coreBridge.programId, o, i.publicKey, e, n, s), l = await this.getMessageFee(), c = cr(this.coreBridge.programId, o, l), u = new Qe();
      u.feePayer = o, u.add(c, a), yield this.createUnsignedTx({
        transaction: u,
        signers: [
          i
        ]
      }, "Core.PublishMessage");
    }
    async *verifyMessage(t, e) {
      yield* this.postVaa(t, e);
    }
    async *postVaa(t, e) {
      const n = pe(this.coreBridge.programId, L.from(e.hash));
      if (await this.connection.getAccountInfo(n)) return;
      const i = new et(t).unwrap(), o = nn.generate(), a = await ss(this.connection, this.coreBridge.programId, i, e, o.publicKey);
      for (let c = 0; c < a.length; c += 2) {
        const u = new Qe().add(...a.slice(c, c + 2));
        u.feePayer = i, yield this.createUnsignedTx({
          transaction: u,
          signers: [
            o
          ]
        }, "Core.VerifySignature", true);
      }
      const l = new Qe().add(ns(this.connection, this.coreBridge.programId, i, e, o.publicKey));
      l.feePayer = i, yield this.createUnsignedTx({
        transaction: l
      }, "Core.PostVAA");
    }
    static parseSequenceFromLog(t, e) {
      var _a2, _b, _c, _d;
      const { meta: n, transaction: { message: s } } = e;
      if (!((_a2 = n == null ? void 0 : n.innerInstructions) == null ? void 0 : _a2.length)) return [];
      const i = s.staticAccountKeys;
      if (i.filter((l) => l.toString() === t).length === 0) return [];
      const o = (_d = (_c = (_b = n == null ? void 0 : n.logMessages) == null ? void 0 : _b.filter((l) => l.startsWith(Qn))) == null ? void 0 : _c[0]) == null ? void 0 : _d.replace(Qn, "");
      if (!o) return [];
      const a = [];
      for (const l of n == null ? void 0 : n.innerInstructions) {
        const c = l.instructions;
        a.push(...c.filter((u) => u.programIdIndex in i && i[u.programIdIndex].toString() === t));
      }
      return a.length < 1 ? [] : i.length < 3 ? [] : a.map((l) => [
        new et(i[l.accounts[2]]).toUniversalAddress(),
        BigInt(o)
      ]).filter((l) => l !== null);
    }
    async getMessageAccountKeys(t) {
      let e;
      if (typeof t.transaction.message.version != "string") if (t.meta.loadedAddresses) e = t.transaction.message.getAccountKeys({
        accountKeysFromLookups: t.meta.loadedAddresses
      });
      else {
        const n = await Promise.all(t.transaction.message.addressTableLookups.map(async (s) => {
          const i = await this.connection.getAddressLookupTable(s.accountKey);
          if (!i || !i.value) throw new Error("Could not resolve lookup table: " + s.accountKey.toBase58());
          return i.value;
        }));
        e = t.transaction.message.getAccountKeys({
          addressLookupTableAccounts: n
        });
      }
      else e = t.transaction.message.getAccountKeys();
      return e;
    }
    async findInstructions(t, e) {
      var _a2;
      const { meta: n, transaction: { message: s } } = e, i = this.coreBridge.programId, o = (_a2 = n.innerInstructions) == null ? void 0 : _a2.flatMap((l) => l.instructions.filter((c) => i.toString() === t.get(c.programIdIndex).toString())).map((l) => ({
        programIdIndex: l.programIdIndex,
        accountKeyIndexes: l.accounts
      })), a = s.compiledInstructions.filter((l) => i.toString() === t.get(l.programIdIndex).toString());
      return [
        ...o,
        ...a
      ];
    }
    async parsePostMessageAccount(t) {
      const e = await this.connection.getAccountInfo(t);
      if (!(e == null ? void 0 : e.data)) throw new Error("No data found in message account");
      const { timestamp: n, emitterAddress: s, emitterChain: i, consistencyLevel: o, sequence: a, nonce: l, payload: c } = sr(new Uint8Array(e == null ? void 0 : e.data));
      return bs("Uint8Array", {
        guardianSet: await this.getGuardianSetIndex(),
        emitterChain: vs(i),
        timestamp: n,
        emitterAddress: s,
        consistencyLevel: o,
        sequence: a,
        nonce: l,
        payload: c,
        signatures: []
      });
    }
    async parseTransaction(t) {
      const e = await this.connection.getTransaction(t, {
        maxSupportedTransactionVersion: 0
      });
      if (!e || !e.meta || !e.meta.innerInstructions) throw new Error("transaction not found");
      try {
        const o = Ne.parseSequenceFromLog(this.coreBridge.programId.toBase58(), e);
        if (o.length > 0) {
          const [a, l] = o[0];
          return [
            {
              chain: this.chain,
              emitter: a,
              sequence: l
            }
          ];
        }
      } catch {
      }
      const n = await this.getMessageAccountKeys(e), s = await this.findInstructions(n, e);
      if (!s || s.length === 0) throw new Error("no bridge messages found");
      const i = s.map(async (o) => {
        const a = n.get(o.accountKeyIndexes[1]), l = await this.parsePostMessageAccount(a);
        return {
          chain: l.emitterChain,
          emitter: l.emitterAddress,
          sequence: l.sequence
        };
      });
      return await Promise.all(i);
    }
    async parseMessages(t) {
      const e = await this.connection.getTransaction(t, {
        maxSupportedTransactionVersion: 0
      });
      if (!e || !e.meta || !e.meta.innerInstructions) throw new Error("transaction not found");
      const n = await this.getMessageAccountKeys(e), s = await this.findInstructions(n, e);
      if (!s || s.length === 0) throw new Error("no bridge messages found");
      const i = s.map(async (o) => {
        const a = n.get(o.accountKeyIndexes[1]);
        return await this.parsePostMessageAccount(a);
      });
      return await Promise.all(i);
    }
    createUnsignedTx(t, e, n = false) {
      return new ps(t, this.network, this.chain, e, n);
    }
  };
  _s(gs, "WormholeCore", Ne);
  Oa = Object.freeze(Object.defineProperty({
    __proto__: null,
    IDL: en,
    SolanaWormholeCore: Ne,
    deserializePostMessage: sr,
    postMessageLayout: rr,
    utils: xa
  }, Symbol.toStringTag, {
    value: "Module"
  }));
});
export {
  Ae as P,
  Ne as S,
  __tla,
  pe as a,
  ar as b,
  ka as c,
  Se as d,
  Ia as e,
  As as f,
  tn as g,
  cr as h,
  Oa as i
};
