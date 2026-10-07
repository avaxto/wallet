var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { P as nr, g as Qi, d as At, a as bt, b as es, c as wn, e as hi, S as fi, f as ts, h as ns, __tla as __tla_0 } from "./index-BaRfeefZ.js";
import { b as rs, c as gi, d as is, a as F, B as L } from "./crypto-CvxmDsJu.js";
import { s as Or, L as l, l as Gn, e as qt, d as tn, f as I, i as ur, t as cr, h as ee, j as Dt, m as k, n as v, o as T, p as E, q as K, r as mt, v as mi, w as je, x as ln, y as pi, z as ss, __tla as __tla_1 } from "./index-B9aAL_1d.js";
import { p as dt, q as Mn, b as os, s as as, t as us, v as Lt, B as cs, w as ls, d as xt, g as $, j as yi, _ as wi, __tla as __tla_2 } from "./index-BUeyy6NO.js";
import { u as lt, b as Et, p as J, __tla as __tla_3 } from "./web3-DZPlpqku.js";
import { U as Mi, t as j, P as Zn, G as ds, F as Fr, l as hs, s as qr, b7 as Dr, b2 as fs, b0 as gs, __tla as __tla_4 } from "./api-BSeuNwV4.js";
import { c as Mt, aO as ms, ae as ps, q as ys, aE as vi, __tla as __tla_5 } from "./wormhole-CvW2q_D1.js";
import { __tla as __tla_6 } from "./create-BawFMS03.js";
import "./vendor-C3gEtrcs.js";
let yn, vt, In, Mr, di, oi, br, Ut, en, Qt, Ji, wr, Ar, Wa, si, Oa, ui, qa, Va, du, ot, hu, Na, ci, li, Ja, Xa, fu, Gt, kn, nn, _t, rn, Sr, vr, xn, Qe, wt, Zt, ai, Fa, yu, Da, wu, Ha, cu, Ga, lu, Za, uu, gu, Ya, ji, mu, ja, Xi, pu, $a, tr;
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
  var _a2, _b, _c;
  var an = {
    exports: {}
  }, ws = an.exports, Vr;
  function Ms() {
    return Vr || (Vr = 1, (function(i) {
      (function(e, n) {
        function r(p, t) {
          if (!p) throw new Error(t || "Assertion failed");
        }
        function u(p, t) {
          p.super_ = t;
          var a = function() {
          };
          a.prototype = t.prototype, p.prototype = new a(), p.prototype.constructor = p;
        }
        function o(p, t, a) {
          if (o.isBN(p)) return p;
          this.negative = 0, this.words = null, this.length = 0, this.red = null, p !== null && ((t === "le" || t === "be") && (a = t, t = 10), this._init(p || 0, t || 10, a || "be"));
        }
        typeof e == "object" ? e.exports = o : n.BN = o, o.BN = o, o.wordSize = 26;
        var g;
        try {
          typeof window < "u" && typeof window.Buffer < "u" ? g = window.Buffer : g = rs().Buffer;
        } catch {
        }
        o.isBN = function(t) {
          return t instanceof o ? true : t !== null && typeof t == "object" && t.constructor.wordSize === o.wordSize && Array.isArray(t.words);
        }, o.max = function(t, a) {
          return t.cmp(a) > 0 ? t : a;
        }, o.min = function(t, a) {
          return t.cmp(a) < 0 ? t : a;
        }, o.prototype._init = function(t, a, c) {
          if (typeof t == "number") return this._initNumber(t, a, c);
          if (typeof t == "object") return this._initArray(t, a, c);
          a === "hex" && (a = 16), r(a === (a | 0) && a >= 2 && a <= 36), t = t.toString().replace(/\s+/g, "");
          var h = 0;
          t[0] === "-" && (h++, this.negative = 1), h < t.length && (a === 16 ? this._parseHex(t, h, c) : (this._parseBase(t, a, h), c === "le" && this._initArray(this.toArray(), a, c)));
        }, o.prototype._initNumber = function(t, a, c) {
          t < 0 && (this.negative = 1, t = -t), t < 67108864 ? (this.words = [
            t & 67108863
          ], this.length = 1) : t < 4503599627370496 ? (this.words = [
            t & 67108863,
            t / 67108864 & 67108863
          ], this.length = 2) : (r(t < 9007199254740992), this.words = [
            t & 67108863,
            t / 67108864 & 67108863,
            1
          ], this.length = 3), c === "le" && this._initArray(this.toArray(), a, c);
        }, o.prototype._initArray = function(t, a, c) {
          if (r(typeof t.length == "number"), t.length <= 0) return this.words = [
            0
          ], this.length = 1, this;
          this.length = Math.ceil(t.length / 3), this.words = new Array(this.length);
          for (var h = 0; h < this.length; h++) this.words[h] = 0;
          var m, y, M = 0;
          if (c === "be") for (h = t.length - 1, m = 0; h >= 0; h -= 3) y = t[h] | t[h - 1] << 8 | t[h - 2] << 16, this.words[m] |= y << M & 67108863, this.words[m + 1] = y >>> 26 - M & 67108863, M += 24, M >= 26 && (M -= 26, m++);
          else if (c === "le") for (h = 0, m = 0; h < t.length; h += 3) y = t[h] | t[h + 1] << 8 | t[h + 2] << 16, this.words[m] |= y << M & 67108863, this.words[m + 1] = y >>> 26 - M & 67108863, M += 24, M >= 26 && (M -= 26, m++);
          return this._strip();
        };
        function w(p, t) {
          var a = p.charCodeAt(t);
          if (a >= 48 && a <= 57) return a - 48;
          if (a >= 65 && a <= 70) return a - 55;
          if (a >= 97 && a <= 102) return a - 87;
          r(false, "Invalid character in " + p);
        }
        function S(p, t, a) {
          var c = w(p, a);
          return a - 1 >= t && (c |= w(p, a - 1) << 4), c;
        }
        o.prototype._parseHex = function(t, a, c) {
          this.length = Math.ceil((t.length - a) / 6), this.words = new Array(this.length);
          for (var h = 0; h < this.length; h++) this.words[h] = 0;
          var m = 0, y = 0, M;
          if (c === "be") for (h = t.length - 1; h >= a; h -= 2) M = S(t, a, h) << m, this.words[y] |= M & 67108863, m >= 18 ? (m -= 18, y += 1, this.words[y] |= M >>> 26) : m += 8;
          else {
            var d = t.length - a;
            for (h = d % 2 === 0 ? a + 1 : a; h < t.length; h += 2) M = S(t, a, h) << m, this.words[y] |= M & 67108863, m >= 18 ? (m -= 18, y += 1, this.words[y] |= M >>> 26) : m += 8;
          }
          this._strip();
        };
        function b(p, t, a, c) {
          for (var h = 0, m = 0, y = Math.min(p.length, a), M = t; M < y; M++) {
            var d = p.charCodeAt(M) - 48;
            h *= c, d >= 49 ? m = d - 49 + 10 : d >= 17 ? m = d - 17 + 10 : m = d, r(d >= 0 && m < c, "Invalid character"), h += m;
          }
          return h;
        }
        o.prototype._parseBase = function(t, a, c) {
          this.words = [
            0
          ], this.length = 1;
          for (var h = 0, m = 1; m <= 67108863; m *= a) h++;
          h--, m = m / a | 0;
          for (var y = t.length - c, M = y % h, d = Math.min(y, y - M) + c, s = 0, f = c; f < d; f += h) s = b(t, f, f + h, a), this.imuln(m), this.words[0] + s < 67108864 ? this.words[0] += s : this._iaddn(s);
          if (M !== 0) {
            var W = 1;
            for (s = b(t, f, t.length, a), f = 0; f < M; f++) W *= a;
            this.imuln(W), this.words[0] + s < 67108864 ? this.words[0] += s : this._iaddn(s);
          }
          this._strip();
        }, o.prototype.copy = function(t) {
          t.words = new Array(this.length);
          for (var a = 0; a < this.length; a++) t.words[a] = this.words[a];
          t.length = this.length, t.negative = this.negative, t.red = this.red;
        };
        function R(p, t) {
          p.words = t.words, p.length = t.length, p.negative = t.negative, p.red = t.red;
        }
        if (o.prototype._move = function(t) {
          R(t, this);
        }, o.prototype.clone = function() {
          var t = new o(null);
          return this.copy(t), t;
        }, o.prototype._expand = function(t) {
          for (; this.length < t; ) this.words[this.length++] = 0;
          return this;
        }, o.prototype._strip = function() {
          for (; this.length > 1 && this.words[this.length - 1] === 0; ) this.length--;
          return this._normSign();
        }, o.prototype._normSign = function() {
          return this.length === 1 && this.words[0] === 0 && (this.negative = 0), this;
        }, typeof Symbol < "u" && typeof Symbol.for == "function") try {
          o.prototype[Symbol.for("nodejs.util.inspect.custom")] = x;
        } catch {
          o.prototype.inspect = x;
        }
        else o.prototype.inspect = x;
        function x() {
          return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
        }
        var P = [
          "",
          "0",
          "00",
          "000",
          "0000",
          "00000",
          "000000",
          "0000000",
          "00000000",
          "000000000",
          "0000000000",
          "00000000000",
          "000000000000",
          "0000000000000",
          "00000000000000",
          "000000000000000",
          "0000000000000000",
          "00000000000000000",
          "000000000000000000",
          "0000000000000000000",
          "00000000000000000000",
          "000000000000000000000",
          "0000000000000000000000",
          "00000000000000000000000",
          "000000000000000000000000",
          "0000000000000000000000000"
        ], C = [
          0,
          0,
          25,
          16,
          12,
          11,
          10,
          9,
          8,
          8,
          7,
          7,
          7,
          7,
          6,
          6,
          6,
          6,
          6,
          6,
          6,
          5,
          5,
          5,
          5,
          5,
          5,
          5,
          5,
          5,
          5,
          5,
          5,
          5,
          5,
          5,
          5
        ], _ = [
          0,
          0,
          33554432,
          43046721,
          16777216,
          48828125,
          60466176,
          40353607,
          16777216,
          43046721,
          1e7,
          19487171,
          35831808,
          62748517,
          7529536,
          11390625,
          16777216,
          24137569,
          34012224,
          47045881,
          64e6,
          4084101,
          5153632,
          6436343,
          7962624,
          9765625,
          11881376,
          14348907,
          17210368,
          20511149,
          243e5,
          28629151,
          33554432,
          39135393,
          45435424,
          52521875,
          60466176
        ];
        o.prototype.toString = function(t, a) {
          t = t || 10, a = a | 0 || 1;
          var c;
          if (t === 16 || t === "hex") {
            c = "";
            for (var h = 0, m = 0, y = 0; y < this.length; y++) {
              var M = this.words[y], d = ((M << h | m) & 16777215).toString(16);
              m = M >>> 24 - h & 16777215, h += 2, h >= 26 && (h -= 26, y--), m !== 0 || y !== this.length - 1 ? c = P[6 - d.length] + d + c : c = d + c;
            }
            for (m !== 0 && (c = m.toString(16) + c); c.length % a !== 0; ) c = "0" + c;
            return this.negative !== 0 && (c = "-" + c), c;
          }
          if (t === (t | 0) && t >= 2 && t <= 36) {
            var s = C[t], f = _[t];
            c = "";
            var W = this.clone();
            for (W.negative = 0; !W.isZero(); ) {
              var N = W.modrn(f).toString(t);
              W = W.idivn(f), W.isZero() ? c = N + c : c = P[s - N.length] + N + c;
            }
            for (this.isZero() && (c = "0" + c); c.length % a !== 0; ) c = "0" + c;
            return this.negative !== 0 && (c = "-" + c), c;
          }
          r(false, "Base should be between 2 and 36");
        }, o.prototype.toNumber = function() {
          var t = this.words[0];
          return this.length === 2 ? t += this.words[1] * 67108864 : this.length === 3 && this.words[2] === 1 ? t += 4503599627370496 + this.words[1] * 67108864 : this.length > 2 && r(false, "Number can only safely store up to 53 bits"), this.negative !== 0 ? -t : t;
        }, o.prototype.toJSON = function() {
          return this.toString(16, 2);
        }, g && (o.prototype.toBuffer = function(t, a) {
          return this.toArrayLike(g, t, a);
        }), o.prototype.toArray = function(t, a) {
          return this.toArrayLike(Array, t, a);
        };
        var B = function(t, a) {
          return t.allocUnsafe ? t.allocUnsafe(a) : new t(a);
        };
        o.prototype.toArrayLike = function(t, a, c) {
          this._strip();
          var h = this.byteLength(), m = c || Math.max(1, h);
          r(h <= m, "byte array longer than desired length"), r(m > 0, "Requested array length <= 0");
          var y = B(t, m), M = a === "le" ? "LE" : "BE";
          return this["_toArrayLike" + M](y, h), y;
        }, o.prototype._toArrayLikeLE = function(t, a) {
          for (var c = 0, h = 0, m = 0, y = 0; m < this.length; m++) {
            var M = this.words[m] << y | h;
            t[c++] = M & 255, c < t.length && (t[c++] = M >> 8 & 255), c < t.length && (t[c++] = M >> 16 & 255), y === 6 ? (c < t.length && (t[c++] = M >> 24 & 255), h = 0, y = 0) : (h = M >>> 24, y += 2);
          }
          if (c < t.length) for (t[c++] = h; c < t.length; ) t[c++] = 0;
        }, o.prototype._toArrayLikeBE = function(t, a) {
          for (var c = t.length - 1, h = 0, m = 0, y = 0; m < this.length; m++) {
            var M = this.words[m] << y | h;
            t[c--] = M & 255, c >= 0 && (t[c--] = M >> 8 & 255), c >= 0 && (t[c--] = M >> 16 & 255), y === 6 ? (c >= 0 && (t[c--] = M >> 24 & 255), h = 0, y = 0) : (h = M >>> 24, y += 2);
          }
          if (c >= 0) for (t[c--] = h; c >= 0; ) t[c--] = 0;
        }, Math.clz32 ? o.prototype._countBits = function(t) {
          return 32 - Math.clz32(t);
        } : o.prototype._countBits = function(t) {
          var a = t, c = 0;
          return a >= 4096 && (c += 13, a >>>= 13), a >= 64 && (c += 7, a >>>= 7), a >= 8 && (c += 4, a >>>= 4), a >= 2 && (c += 2, a >>>= 2), c + a;
        }, o.prototype._zeroBits = function(t) {
          if (t === 0) return 26;
          var a = t, c = 0;
          return (a & 8191) === 0 && (c += 13, a >>>= 13), (a & 127) === 0 && (c += 7, a >>>= 7), (a & 15) === 0 && (c += 4, a >>>= 4), (a & 3) === 0 && (c += 2, a >>>= 2), (a & 1) === 0 && c++, c;
        }, o.prototype.bitLength = function() {
          var t = this.words[this.length - 1], a = this._countBits(t);
          return (this.length - 1) * 26 + a;
        };
        function z(p) {
          for (var t = new Array(p.bitLength()), a = 0; a < t.length; a++) {
            var c = a / 26 | 0, h = a % 26;
            t[a] = p.words[c] >>> h & 1;
          }
          return t;
        }
        o.prototype.zeroBits = function() {
          if (this.isZero()) return 0;
          for (var t = 0, a = 0; a < this.length; a++) {
            var c = this._zeroBits(this.words[a]);
            if (t += c, c !== 26) break;
          }
          return t;
        }, o.prototype.byteLength = function() {
          return Math.ceil(this.bitLength() / 8);
        }, o.prototype.toTwos = function(t) {
          return this.negative !== 0 ? this.abs().inotn(t).iaddn(1) : this.clone();
        }, o.prototype.fromTwos = function(t) {
          return this.testn(t - 1) ? this.notn(t).iaddn(1).ineg() : this.clone();
        }, o.prototype.isNeg = function() {
          return this.negative !== 0;
        }, o.prototype.neg = function() {
          return this.clone().ineg();
        }, o.prototype.ineg = function() {
          return this.isZero() || (this.negative ^= 1), this;
        }, o.prototype.iuor = function(t) {
          for (; this.length < t.length; ) this.words[this.length++] = 0;
          for (var a = 0; a < t.length; a++) this.words[a] = this.words[a] | t.words[a];
          return this._strip();
        }, o.prototype.ior = function(t) {
          return r((this.negative | t.negative) === 0), this.iuor(t);
        }, o.prototype.or = function(t) {
          return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this);
        }, o.prototype.uor = function(t) {
          return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this);
        }, o.prototype.iuand = function(t) {
          var a;
          this.length > t.length ? a = t : a = this;
          for (var c = 0; c < a.length; c++) this.words[c] = this.words[c] & t.words[c];
          return this.length = a.length, this._strip();
        }, o.prototype.iand = function(t) {
          return r((this.negative | t.negative) === 0), this.iuand(t);
        }, o.prototype.and = function(t) {
          return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this);
        }, o.prototype.uand = function(t) {
          return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this);
        }, o.prototype.iuxor = function(t) {
          var a, c;
          this.length > t.length ? (a = this, c = t) : (a = t, c = this);
          for (var h = 0; h < c.length; h++) this.words[h] = a.words[h] ^ c.words[h];
          if (this !== a) for (; h < a.length; h++) this.words[h] = a.words[h];
          return this.length = a.length, this._strip();
        }, o.prototype.ixor = function(t) {
          return r((this.negative | t.negative) === 0), this.iuxor(t);
        }, o.prototype.xor = function(t) {
          return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this);
        }, o.prototype.uxor = function(t) {
          return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this);
        }, o.prototype.inotn = function(t) {
          r(typeof t == "number" && t >= 0);
          var a = Math.ceil(t / 26) | 0, c = t % 26;
          this._expand(a), c > 0 && a--;
          for (var h = 0; h < a; h++) this.words[h] = ~this.words[h] & 67108863;
          for (c > 0 && (this.words[h] = ~this.words[h] & 67108863 >> 26 - c, h++); h < this.length; h++) this.words[h] = 0;
          return this._strip();
        }, o.prototype.notn = function(t) {
          return this.clone().inotn(t);
        }, o.prototype.setn = function(t, a) {
          r(typeof t == "number" && t >= 0);
          var c = t / 26 | 0, h = t % 26;
          return this._expand(c + 1), a ? this.words[c] = this.words[c] | 1 << h : this.words[c] = this.words[c] & ~(1 << h), this._strip();
        }, o.prototype.iadd = function(t) {
          var a;
          if (this.negative !== 0 && t.negative === 0) return this.negative = 0, a = this.isub(t), this.negative ^= 1, this._normSign();
          if (this.negative === 0 && t.negative !== 0) return t.negative = 0, a = this.isub(t), t.negative = 1, a._normSign();
          var c, h;
          this.length > t.length ? (c = this, h = t) : (c = t, h = this);
          for (var m = 0, y = 0; y < h.length; y++) a = (c.words[y] | 0) + (h.words[y] | 0) + m, this.words[y] = a & 67108863, m = a >>> 26;
          for (; m !== 0 && y < c.length; y++) a = (c.words[y] | 0) + m, this.words[y] = a & 67108863, m = a >>> 26;
          if (this.length = c.length, m !== 0) this.words[this.length] = m, this.length++;
          else if (c !== this) for (; y < c.length; y++) this.words[y] = c.words[y];
          return this;
        }, o.prototype.add = function(t) {
          var a;
          return t.negative !== 0 && this.negative === 0 ? (t.negative = 0, a = this.sub(t), t.negative ^= 1, a) : t.negative === 0 && this.negative !== 0 ? (this.negative = 0, a = t.sub(this), this.negative = 1, a) : this.length > t.length ? this.clone().iadd(t) : t.clone().iadd(this);
        }, o.prototype.isub = function(t) {
          if (t.negative !== 0) {
            t.negative = 0;
            var a = this.iadd(t);
            return t.negative = 1, a._normSign();
          } else if (this.negative !== 0) return this.negative = 0, this.iadd(t), this.negative = 1, this._normSign();
          var c = this.cmp(t);
          if (c === 0) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
          var h, m;
          c > 0 ? (h = this, m = t) : (h = t, m = this);
          for (var y = 0, M = 0; M < m.length; M++) a = (h.words[M] | 0) - (m.words[M] | 0) + y, y = a >> 26, this.words[M] = a & 67108863;
          for (; y !== 0 && M < h.length; M++) a = (h.words[M] | 0) + y, y = a >> 26, this.words[M] = a & 67108863;
          if (y === 0 && M < h.length && h !== this) for (; M < h.length; M++) this.words[M] = h.words[M];
          return this.length = Math.max(this.length, M), h !== this && (this.negative = 1), this._strip();
        }, o.prototype.sub = function(t) {
          return this.clone().isub(t);
        };
        function U(p, t, a) {
          a.negative = t.negative ^ p.negative;
          var c = p.length + t.length | 0;
          a.length = c, c = c - 1 | 0;
          var h = p.words[0] | 0, m = t.words[0] | 0, y = h * m, M = y & 67108863, d = y / 67108864 | 0;
          a.words[0] = M;
          for (var s = 1; s < c; s++) {
            for (var f = d >>> 26, W = d & 67108863, N = Math.min(s, t.length - 1), O = Math.max(0, s - p.length + 1); O <= N; O++) {
              var He = s - O | 0;
              h = p.words[He] | 0, m = t.words[O] | 0, y = h * m + W, f += y / 67108864 | 0, W = y & 67108863;
            }
            a.words[s] = W | 0, d = f | 0;
          }
          return d !== 0 ? a.words[s] = d | 0 : a.length--, a._strip();
        }
        var D = function(t, a, c) {
          var h = t.words, m = a.words, y = c.words, M = 0, d, s, f, W = h[0] | 0, N = W & 8191, O = W >>> 13, He = h[1] | 0, Z = He & 8191, H = He >>> 13, pt = h[2] | 0, ie = pt & 8191, oe = pt >>> 13, sn = h[3] | 0, ce = sn & 8191, le = sn >>> 13, kr = h[4] | 0, de = kr & 8191, he = kr >>> 13, Ir = h[5] | 0, fe = Ir & 8191, ge = Ir >>> 13, xr = h[6] | 0, me = xr & 8191, pe = xr >>> 13, Br = h[7] | 0, ye = Br & 8191, we = Br >>> 13, Er = h[8] | 0, Me = Er & 8191, ve = Er >>> 13, Tr = h[9] | 0, Se = Tr & 8191, Ae = Tr >>> 13, Pr = m[0] | 0, be = Pr & 8191, ke = Pr >>> 13, Cr = m[1] | 0, Ie = Cr & 8191, xe = Cr >>> 13, _r = m[2] | 0, Be = _r & 8191, Ee = _r >>> 13, Rr = m[3] | 0, Te = Rr & 8191, Pe = Rr >>> 13, Lr = m[4] | 0, Ce = Lr & 8191, _e = Lr >>> 13, zr = m[5] | 0, Re = zr & 8191, Le = zr >>> 13, Kr = m[6] | 0, ze = Kr & 8191, Ke = Kr >>> 13, Ur = m[7] | 0, Ue = Ur & 8191, Ne = Ur >>> 13, Nr = m[8] | 0, We = Nr & 8191, Oe = Nr >>> 13, Wr = m[9] | 0, Fe = Wr & 8191, qe = Wr >>> 13;
          c.negative = t.negative ^ a.negative, c.length = 19, d = Math.imul(N, be), s = Math.imul(N, ke), s = s + Math.imul(O, be) | 0, f = Math.imul(O, ke);
          var Bn = (M + d | 0) + ((s & 8191) << 13) | 0;
          M = (f + (s >>> 13) | 0) + (Bn >>> 26) | 0, Bn &= 67108863, d = Math.imul(Z, be), s = Math.imul(Z, ke), s = s + Math.imul(H, be) | 0, f = Math.imul(H, ke), d = d + Math.imul(N, Ie) | 0, s = s + Math.imul(N, xe) | 0, s = s + Math.imul(O, Ie) | 0, f = f + Math.imul(O, xe) | 0;
          var En = (M + d | 0) + ((s & 8191) << 13) | 0;
          M = (f + (s >>> 13) | 0) + (En >>> 26) | 0, En &= 67108863, d = Math.imul(ie, be), s = Math.imul(ie, ke), s = s + Math.imul(oe, be) | 0, f = Math.imul(oe, ke), d = d + Math.imul(Z, Ie) | 0, s = s + Math.imul(Z, xe) | 0, s = s + Math.imul(H, Ie) | 0, f = f + Math.imul(H, xe) | 0, d = d + Math.imul(N, Be) | 0, s = s + Math.imul(N, Ee) | 0, s = s + Math.imul(O, Be) | 0, f = f + Math.imul(O, Ee) | 0;
          var Tn = (M + d | 0) + ((s & 8191) << 13) | 0;
          M = (f + (s >>> 13) | 0) + (Tn >>> 26) | 0, Tn &= 67108863, d = Math.imul(ce, be), s = Math.imul(ce, ke), s = s + Math.imul(le, be) | 0, f = Math.imul(le, ke), d = d + Math.imul(ie, Ie) | 0, s = s + Math.imul(ie, xe) | 0, s = s + Math.imul(oe, Ie) | 0, f = f + Math.imul(oe, xe) | 0, d = d + Math.imul(Z, Be) | 0, s = s + Math.imul(Z, Ee) | 0, s = s + Math.imul(H, Be) | 0, f = f + Math.imul(H, Ee) | 0, d = d + Math.imul(N, Te) | 0, s = s + Math.imul(N, Pe) | 0, s = s + Math.imul(O, Te) | 0, f = f + Math.imul(O, Pe) | 0;
          var Pn = (M + d | 0) + ((s & 8191) << 13) | 0;
          M = (f + (s >>> 13) | 0) + (Pn >>> 26) | 0, Pn &= 67108863, d = Math.imul(de, be), s = Math.imul(de, ke), s = s + Math.imul(he, be) | 0, f = Math.imul(he, ke), d = d + Math.imul(ce, Ie) | 0, s = s + Math.imul(ce, xe) | 0, s = s + Math.imul(le, Ie) | 0, f = f + Math.imul(le, xe) | 0, d = d + Math.imul(ie, Be) | 0, s = s + Math.imul(ie, Ee) | 0, s = s + Math.imul(oe, Be) | 0, f = f + Math.imul(oe, Ee) | 0, d = d + Math.imul(Z, Te) | 0, s = s + Math.imul(Z, Pe) | 0, s = s + Math.imul(H, Te) | 0, f = f + Math.imul(H, Pe) | 0, d = d + Math.imul(N, Ce) | 0, s = s + Math.imul(N, _e) | 0, s = s + Math.imul(O, Ce) | 0, f = f + Math.imul(O, _e) | 0;
          var Cn = (M + d | 0) + ((s & 8191) << 13) | 0;
          M = (f + (s >>> 13) | 0) + (Cn >>> 26) | 0, Cn &= 67108863, d = Math.imul(fe, be), s = Math.imul(fe, ke), s = s + Math.imul(ge, be) | 0, f = Math.imul(ge, ke), d = d + Math.imul(de, Ie) | 0, s = s + Math.imul(de, xe) | 0, s = s + Math.imul(he, Ie) | 0, f = f + Math.imul(he, xe) | 0, d = d + Math.imul(ce, Be) | 0, s = s + Math.imul(ce, Ee) | 0, s = s + Math.imul(le, Be) | 0, f = f + Math.imul(le, Ee) | 0, d = d + Math.imul(ie, Te) | 0, s = s + Math.imul(ie, Pe) | 0, s = s + Math.imul(oe, Te) | 0, f = f + Math.imul(oe, Pe) | 0, d = d + Math.imul(Z, Ce) | 0, s = s + Math.imul(Z, _e) | 0, s = s + Math.imul(H, Ce) | 0, f = f + Math.imul(H, _e) | 0, d = d + Math.imul(N, Re) | 0, s = s + Math.imul(N, Le) | 0, s = s + Math.imul(O, Re) | 0, f = f + Math.imul(O, Le) | 0;
          var _n = (M + d | 0) + ((s & 8191) << 13) | 0;
          M = (f + (s >>> 13) | 0) + (_n >>> 26) | 0, _n &= 67108863, d = Math.imul(me, be), s = Math.imul(me, ke), s = s + Math.imul(pe, be) | 0, f = Math.imul(pe, ke), d = d + Math.imul(fe, Ie) | 0, s = s + Math.imul(fe, xe) | 0, s = s + Math.imul(ge, Ie) | 0, f = f + Math.imul(ge, xe) | 0, d = d + Math.imul(de, Be) | 0, s = s + Math.imul(de, Ee) | 0, s = s + Math.imul(he, Be) | 0, f = f + Math.imul(he, Ee) | 0, d = d + Math.imul(ce, Te) | 0, s = s + Math.imul(ce, Pe) | 0, s = s + Math.imul(le, Te) | 0, f = f + Math.imul(le, Pe) | 0, d = d + Math.imul(ie, Ce) | 0, s = s + Math.imul(ie, _e) | 0, s = s + Math.imul(oe, Ce) | 0, f = f + Math.imul(oe, _e) | 0, d = d + Math.imul(Z, Re) | 0, s = s + Math.imul(Z, Le) | 0, s = s + Math.imul(H, Re) | 0, f = f + Math.imul(H, Le) | 0, d = d + Math.imul(N, ze) | 0, s = s + Math.imul(N, Ke) | 0, s = s + Math.imul(O, ze) | 0, f = f + Math.imul(O, Ke) | 0;
          var Rn = (M + d | 0) + ((s & 8191) << 13) | 0;
          M = (f + (s >>> 13) | 0) + (Rn >>> 26) | 0, Rn &= 67108863, d = Math.imul(ye, be), s = Math.imul(ye, ke), s = s + Math.imul(we, be) | 0, f = Math.imul(we, ke), d = d + Math.imul(me, Ie) | 0, s = s + Math.imul(me, xe) | 0, s = s + Math.imul(pe, Ie) | 0, f = f + Math.imul(pe, xe) | 0, d = d + Math.imul(fe, Be) | 0, s = s + Math.imul(fe, Ee) | 0, s = s + Math.imul(ge, Be) | 0, f = f + Math.imul(ge, Ee) | 0, d = d + Math.imul(de, Te) | 0, s = s + Math.imul(de, Pe) | 0, s = s + Math.imul(he, Te) | 0, f = f + Math.imul(he, Pe) | 0, d = d + Math.imul(ce, Ce) | 0, s = s + Math.imul(ce, _e) | 0, s = s + Math.imul(le, Ce) | 0, f = f + Math.imul(le, _e) | 0, d = d + Math.imul(ie, Re) | 0, s = s + Math.imul(ie, Le) | 0, s = s + Math.imul(oe, Re) | 0, f = f + Math.imul(oe, Le) | 0, d = d + Math.imul(Z, ze) | 0, s = s + Math.imul(Z, Ke) | 0, s = s + Math.imul(H, ze) | 0, f = f + Math.imul(H, Ke) | 0, d = d + Math.imul(N, Ue) | 0, s = s + Math.imul(N, Ne) | 0, s = s + Math.imul(O, Ue) | 0, f = f + Math.imul(O, Ne) | 0;
          var Ln = (M + d | 0) + ((s & 8191) << 13) | 0;
          M = (f + (s >>> 13) | 0) + (Ln >>> 26) | 0, Ln &= 67108863, d = Math.imul(Me, be), s = Math.imul(Me, ke), s = s + Math.imul(ve, be) | 0, f = Math.imul(ve, ke), d = d + Math.imul(ye, Ie) | 0, s = s + Math.imul(ye, xe) | 0, s = s + Math.imul(we, Ie) | 0, f = f + Math.imul(we, xe) | 0, d = d + Math.imul(me, Be) | 0, s = s + Math.imul(me, Ee) | 0, s = s + Math.imul(pe, Be) | 0, f = f + Math.imul(pe, Ee) | 0, d = d + Math.imul(fe, Te) | 0, s = s + Math.imul(fe, Pe) | 0, s = s + Math.imul(ge, Te) | 0, f = f + Math.imul(ge, Pe) | 0, d = d + Math.imul(de, Ce) | 0, s = s + Math.imul(de, _e) | 0, s = s + Math.imul(he, Ce) | 0, f = f + Math.imul(he, _e) | 0, d = d + Math.imul(ce, Re) | 0, s = s + Math.imul(ce, Le) | 0, s = s + Math.imul(le, Re) | 0, f = f + Math.imul(le, Le) | 0, d = d + Math.imul(ie, ze) | 0, s = s + Math.imul(ie, Ke) | 0, s = s + Math.imul(oe, ze) | 0, f = f + Math.imul(oe, Ke) | 0, d = d + Math.imul(Z, Ue) | 0, s = s + Math.imul(Z, Ne) | 0, s = s + Math.imul(H, Ue) | 0, f = f + Math.imul(H, Ne) | 0, d = d + Math.imul(N, We) | 0, s = s + Math.imul(N, Oe) | 0, s = s + Math.imul(O, We) | 0, f = f + Math.imul(O, Oe) | 0;
          var zn = (M + d | 0) + ((s & 8191) << 13) | 0;
          M = (f + (s >>> 13) | 0) + (zn >>> 26) | 0, zn &= 67108863, d = Math.imul(Se, be), s = Math.imul(Se, ke), s = s + Math.imul(Ae, be) | 0, f = Math.imul(Ae, ke), d = d + Math.imul(Me, Ie) | 0, s = s + Math.imul(Me, xe) | 0, s = s + Math.imul(ve, Ie) | 0, f = f + Math.imul(ve, xe) | 0, d = d + Math.imul(ye, Be) | 0, s = s + Math.imul(ye, Ee) | 0, s = s + Math.imul(we, Be) | 0, f = f + Math.imul(we, Ee) | 0, d = d + Math.imul(me, Te) | 0, s = s + Math.imul(me, Pe) | 0, s = s + Math.imul(pe, Te) | 0, f = f + Math.imul(pe, Pe) | 0, d = d + Math.imul(fe, Ce) | 0, s = s + Math.imul(fe, _e) | 0, s = s + Math.imul(ge, Ce) | 0, f = f + Math.imul(ge, _e) | 0, d = d + Math.imul(de, Re) | 0, s = s + Math.imul(de, Le) | 0, s = s + Math.imul(he, Re) | 0, f = f + Math.imul(he, Le) | 0, d = d + Math.imul(ce, ze) | 0, s = s + Math.imul(ce, Ke) | 0, s = s + Math.imul(le, ze) | 0, f = f + Math.imul(le, Ke) | 0, d = d + Math.imul(ie, Ue) | 0, s = s + Math.imul(ie, Ne) | 0, s = s + Math.imul(oe, Ue) | 0, f = f + Math.imul(oe, Ne) | 0, d = d + Math.imul(Z, We) | 0, s = s + Math.imul(Z, Oe) | 0, s = s + Math.imul(H, We) | 0, f = f + Math.imul(H, Oe) | 0, d = d + Math.imul(N, Fe) | 0, s = s + Math.imul(N, qe) | 0, s = s + Math.imul(O, Fe) | 0, f = f + Math.imul(O, qe) | 0;
          var Kn = (M + d | 0) + ((s & 8191) << 13) | 0;
          M = (f + (s >>> 13) | 0) + (Kn >>> 26) | 0, Kn &= 67108863, d = Math.imul(Se, Ie), s = Math.imul(Se, xe), s = s + Math.imul(Ae, Ie) | 0, f = Math.imul(Ae, xe), d = d + Math.imul(Me, Be) | 0, s = s + Math.imul(Me, Ee) | 0, s = s + Math.imul(ve, Be) | 0, f = f + Math.imul(ve, Ee) | 0, d = d + Math.imul(ye, Te) | 0, s = s + Math.imul(ye, Pe) | 0, s = s + Math.imul(we, Te) | 0, f = f + Math.imul(we, Pe) | 0, d = d + Math.imul(me, Ce) | 0, s = s + Math.imul(me, _e) | 0, s = s + Math.imul(pe, Ce) | 0, f = f + Math.imul(pe, _e) | 0, d = d + Math.imul(fe, Re) | 0, s = s + Math.imul(fe, Le) | 0, s = s + Math.imul(ge, Re) | 0, f = f + Math.imul(ge, Le) | 0, d = d + Math.imul(de, ze) | 0, s = s + Math.imul(de, Ke) | 0, s = s + Math.imul(he, ze) | 0, f = f + Math.imul(he, Ke) | 0, d = d + Math.imul(ce, Ue) | 0, s = s + Math.imul(ce, Ne) | 0, s = s + Math.imul(le, Ue) | 0, f = f + Math.imul(le, Ne) | 0, d = d + Math.imul(ie, We) | 0, s = s + Math.imul(ie, Oe) | 0, s = s + Math.imul(oe, We) | 0, f = f + Math.imul(oe, Oe) | 0, d = d + Math.imul(Z, Fe) | 0, s = s + Math.imul(Z, qe) | 0, s = s + Math.imul(H, Fe) | 0, f = f + Math.imul(H, qe) | 0;
          var Un = (M + d | 0) + ((s & 8191) << 13) | 0;
          M = (f + (s >>> 13) | 0) + (Un >>> 26) | 0, Un &= 67108863, d = Math.imul(Se, Be), s = Math.imul(Se, Ee), s = s + Math.imul(Ae, Be) | 0, f = Math.imul(Ae, Ee), d = d + Math.imul(Me, Te) | 0, s = s + Math.imul(Me, Pe) | 0, s = s + Math.imul(ve, Te) | 0, f = f + Math.imul(ve, Pe) | 0, d = d + Math.imul(ye, Ce) | 0, s = s + Math.imul(ye, _e) | 0, s = s + Math.imul(we, Ce) | 0, f = f + Math.imul(we, _e) | 0, d = d + Math.imul(me, Re) | 0, s = s + Math.imul(me, Le) | 0, s = s + Math.imul(pe, Re) | 0, f = f + Math.imul(pe, Le) | 0, d = d + Math.imul(fe, ze) | 0, s = s + Math.imul(fe, Ke) | 0, s = s + Math.imul(ge, ze) | 0, f = f + Math.imul(ge, Ke) | 0, d = d + Math.imul(de, Ue) | 0, s = s + Math.imul(de, Ne) | 0, s = s + Math.imul(he, Ue) | 0, f = f + Math.imul(he, Ne) | 0, d = d + Math.imul(ce, We) | 0, s = s + Math.imul(ce, Oe) | 0, s = s + Math.imul(le, We) | 0, f = f + Math.imul(le, Oe) | 0, d = d + Math.imul(ie, Fe) | 0, s = s + Math.imul(ie, qe) | 0, s = s + Math.imul(oe, Fe) | 0, f = f + Math.imul(oe, qe) | 0;
          var Nn = (M + d | 0) + ((s & 8191) << 13) | 0;
          M = (f + (s >>> 13) | 0) + (Nn >>> 26) | 0, Nn &= 67108863, d = Math.imul(Se, Te), s = Math.imul(Se, Pe), s = s + Math.imul(Ae, Te) | 0, f = Math.imul(Ae, Pe), d = d + Math.imul(Me, Ce) | 0, s = s + Math.imul(Me, _e) | 0, s = s + Math.imul(ve, Ce) | 0, f = f + Math.imul(ve, _e) | 0, d = d + Math.imul(ye, Re) | 0, s = s + Math.imul(ye, Le) | 0, s = s + Math.imul(we, Re) | 0, f = f + Math.imul(we, Le) | 0, d = d + Math.imul(me, ze) | 0, s = s + Math.imul(me, Ke) | 0, s = s + Math.imul(pe, ze) | 0, f = f + Math.imul(pe, Ke) | 0, d = d + Math.imul(fe, Ue) | 0, s = s + Math.imul(fe, Ne) | 0, s = s + Math.imul(ge, Ue) | 0, f = f + Math.imul(ge, Ne) | 0, d = d + Math.imul(de, We) | 0, s = s + Math.imul(de, Oe) | 0, s = s + Math.imul(he, We) | 0, f = f + Math.imul(he, Oe) | 0, d = d + Math.imul(ce, Fe) | 0, s = s + Math.imul(ce, qe) | 0, s = s + Math.imul(le, Fe) | 0, f = f + Math.imul(le, qe) | 0;
          var Wn = (M + d | 0) + ((s & 8191) << 13) | 0;
          M = (f + (s >>> 13) | 0) + (Wn >>> 26) | 0, Wn &= 67108863, d = Math.imul(Se, Ce), s = Math.imul(Se, _e), s = s + Math.imul(Ae, Ce) | 0, f = Math.imul(Ae, _e), d = d + Math.imul(Me, Re) | 0, s = s + Math.imul(Me, Le) | 0, s = s + Math.imul(ve, Re) | 0, f = f + Math.imul(ve, Le) | 0, d = d + Math.imul(ye, ze) | 0, s = s + Math.imul(ye, Ke) | 0, s = s + Math.imul(we, ze) | 0, f = f + Math.imul(we, Ke) | 0, d = d + Math.imul(me, Ue) | 0, s = s + Math.imul(me, Ne) | 0, s = s + Math.imul(pe, Ue) | 0, f = f + Math.imul(pe, Ne) | 0, d = d + Math.imul(fe, We) | 0, s = s + Math.imul(fe, Oe) | 0, s = s + Math.imul(ge, We) | 0, f = f + Math.imul(ge, Oe) | 0, d = d + Math.imul(de, Fe) | 0, s = s + Math.imul(de, qe) | 0, s = s + Math.imul(he, Fe) | 0, f = f + Math.imul(he, qe) | 0;
          var On = (M + d | 0) + ((s & 8191) << 13) | 0;
          M = (f + (s >>> 13) | 0) + (On >>> 26) | 0, On &= 67108863, d = Math.imul(Se, Re), s = Math.imul(Se, Le), s = s + Math.imul(Ae, Re) | 0, f = Math.imul(Ae, Le), d = d + Math.imul(Me, ze) | 0, s = s + Math.imul(Me, Ke) | 0, s = s + Math.imul(ve, ze) | 0, f = f + Math.imul(ve, Ke) | 0, d = d + Math.imul(ye, Ue) | 0, s = s + Math.imul(ye, Ne) | 0, s = s + Math.imul(we, Ue) | 0, f = f + Math.imul(we, Ne) | 0, d = d + Math.imul(me, We) | 0, s = s + Math.imul(me, Oe) | 0, s = s + Math.imul(pe, We) | 0, f = f + Math.imul(pe, Oe) | 0, d = d + Math.imul(fe, Fe) | 0, s = s + Math.imul(fe, qe) | 0, s = s + Math.imul(ge, Fe) | 0, f = f + Math.imul(ge, qe) | 0;
          var Fn = (M + d | 0) + ((s & 8191) << 13) | 0;
          M = (f + (s >>> 13) | 0) + (Fn >>> 26) | 0, Fn &= 67108863, d = Math.imul(Se, ze), s = Math.imul(Se, Ke), s = s + Math.imul(Ae, ze) | 0, f = Math.imul(Ae, Ke), d = d + Math.imul(Me, Ue) | 0, s = s + Math.imul(Me, Ne) | 0, s = s + Math.imul(ve, Ue) | 0, f = f + Math.imul(ve, Ne) | 0, d = d + Math.imul(ye, We) | 0, s = s + Math.imul(ye, Oe) | 0, s = s + Math.imul(we, We) | 0, f = f + Math.imul(we, Oe) | 0, d = d + Math.imul(me, Fe) | 0, s = s + Math.imul(me, qe) | 0, s = s + Math.imul(pe, Fe) | 0, f = f + Math.imul(pe, qe) | 0;
          var qn = (M + d | 0) + ((s & 8191) << 13) | 0;
          M = (f + (s >>> 13) | 0) + (qn >>> 26) | 0, qn &= 67108863, d = Math.imul(Se, Ue), s = Math.imul(Se, Ne), s = s + Math.imul(Ae, Ue) | 0, f = Math.imul(Ae, Ne), d = d + Math.imul(Me, We) | 0, s = s + Math.imul(Me, Oe) | 0, s = s + Math.imul(ve, We) | 0, f = f + Math.imul(ve, Oe) | 0, d = d + Math.imul(ye, Fe) | 0, s = s + Math.imul(ye, qe) | 0, s = s + Math.imul(we, Fe) | 0, f = f + Math.imul(we, qe) | 0;
          var Dn = (M + d | 0) + ((s & 8191) << 13) | 0;
          M = (f + (s >>> 13) | 0) + (Dn >>> 26) | 0, Dn &= 67108863, d = Math.imul(Se, We), s = Math.imul(Se, Oe), s = s + Math.imul(Ae, We) | 0, f = Math.imul(Ae, Oe), d = d + Math.imul(Me, Fe) | 0, s = s + Math.imul(Me, qe) | 0, s = s + Math.imul(ve, Fe) | 0, f = f + Math.imul(ve, qe) | 0;
          var Vn = (M + d | 0) + ((s & 8191) << 13) | 0;
          M = (f + (s >>> 13) | 0) + (Vn >>> 26) | 0, Vn &= 67108863, d = Math.imul(Se, Fe), s = Math.imul(Se, qe), s = s + Math.imul(Ae, Fe) | 0, f = Math.imul(Ae, qe);
          var Hn = (M + d | 0) + ((s & 8191) << 13) | 0;
          return M = (f + (s >>> 13) | 0) + (Hn >>> 26) | 0, Hn &= 67108863, y[0] = Bn, y[1] = En, y[2] = Tn, y[3] = Pn, y[4] = Cn, y[5] = _n, y[6] = Rn, y[7] = Ln, y[8] = zn, y[9] = Kn, y[10] = Un, y[11] = Nn, y[12] = Wn, y[13] = On, y[14] = Fn, y[15] = qn, y[16] = Dn, y[17] = Vn, y[18] = Hn, M !== 0 && (y[19] = M, c.length++), c;
        };
        Math.imul || (D = U);
        function ue(p, t, a) {
          a.negative = t.negative ^ p.negative, a.length = p.length + t.length;
          for (var c = 0, h = 0, m = 0; m < a.length - 1; m++) {
            var y = h;
            h = 0;
            for (var M = c & 67108863, d = Math.min(m, t.length - 1), s = Math.max(0, m - p.length + 1); s <= d; s++) {
              var f = m - s, W = p.words[f] | 0, N = t.words[s] | 0, O = W * N, He = O & 67108863;
              y = y + (O / 67108864 | 0) | 0, He = He + M | 0, M = He & 67108863, y = y + (He >>> 26) | 0, h += y >>> 26, y &= 67108863;
            }
            a.words[m] = M, c = y, y = h;
          }
          return c !== 0 ? a.words[m] = c : a.length--, a._strip();
        }
        function V(p, t, a) {
          return ue(p, t, a);
        }
        o.prototype.mulTo = function(t, a) {
          var c, h = this.length + t.length;
          return this.length === 10 && t.length === 10 ? c = D(this, t, a) : h < 63 ? c = U(this, t, a) : h < 1024 ? c = ue(this, t, a) : c = V(this, t, a), c;
        }, o.prototype.mul = function(t) {
          var a = new o(null);
          return a.words = new Array(this.length + t.length), this.mulTo(t, a);
        }, o.prototype.mulf = function(t) {
          var a = new o(null);
          return a.words = new Array(this.length + t.length), V(this, t, a);
        }, o.prototype.imul = function(t) {
          return this.clone().mulTo(t, this);
        }, o.prototype.imuln = function(t) {
          var a = t < 0;
          a && (t = -t), r(typeof t == "number"), r(t < 67108864);
          for (var c = 0, h = 0; h < this.length; h++) {
            var m = (this.words[h] | 0) * t, y = (m & 67108863) + (c & 67108863);
            c >>= 26, c += m / 67108864 | 0, c += y >>> 26, this.words[h] = y & 67108863;
          }
          return c !== 0 && (this.words[h] = c, this.length++), t === 0 && (this.length = 1, this._normSign()), a ? this.ineg() : this;
        }, o.prototype.muln = function(t) {
          return this.clone().imuln(t);
        }, o.prototype.sqr = function() {
          return this.mul(this);
        }, o.prototype.isqr = function() {
          return this.imul(this.clone());
        }, o.prototype.pow = function(t) {
          var a = z(t);
          if (a.length === 0) return new o(1);
          for (var c = this, h = 0; h < a.length && a[h] === 0; h++, c = c.sqr()) ;
          if (++h < a.length) for (var m = c.sqr(); h < a.length; h++, m = m.sqr()) a[h] !== 0 && (c = c.mul(m));
          return c;
        }, o.prototype.iushln = function(t) {
          r(typeof t == "number" && t >= 0);
          var a = t % 26, c = (t - a) / 26, h = 67108863 >>> 26 - a << 26 - a, m;
          if (a !== 0) {
            var y = 0;
            for (m = 0; m < this.length; m++) {
              var M = this.words[m] & h, d = (this.words[m] | 0) - M << a;
              this.words[m] = d | y, y = M >>> 26 - a;
            }
            y && (this.words[m] = y, this.length++);
          }
          if (c !== 0) {
            for (m = this.length - 1; m >= 0; m--) this.words[m + c] = this.words[m];
            for (m = 0; m < c; m++) this.words[m] = 0;
            this.length += c;
          }
          return this._strip();
        }, o.prototype.ishln = function(t) {
          return r(this.negative === 0), this.iushln(t);
        }, o.prototype.iushrn = function(t, a, c) {
          r(typeof t == "number" && t >= 0);
          var h;
          a ? h = (a - a % 26) / 26 : h = 0;
          var m = t % 26, y = Math.min((t - m) / 26, this.length), M = 67108863 ^ 67108863 >>> m << m, d = c;
          if (h -= y, h = Math.max(0, h), d) {
            for (var s = 0; s < y; s++) d.words[s] = this.words[s];
            d.length = y;
          }
          if (y !== 0) if (this.length > y) for (this.length -= y, s = 0; s < this.length; s++) this.words[s] = this.words[s + y];
          else this.words[0] = 0, this.length = 1;
          var f = 0;
          for (s = this.length - 1; s >= 0 && (f !== 0 || s >= h); s--) {
            var W = this.words[s] | 0;
            this.words[s] = f << 26 - m | W >>> m, f = W & M;
          }
          return d && f !== 0 && (d.words[d.length++] = f), this.length === 0 && (this.words[0] = 0, this.length = 1), this._strip();
        }, o.prototype.ishrn = function(t, a, c) {
          return r(this.negative === 0), this.iushrn(t, a, c);
        }, o.prototype.shln = function(t) {
          return this.clone().ishln(t);
        }, o.prototype.ushln = function(t) {
          return this.clone().iushln(t);
        }, o.prototype.shrn = function(t) {
          return this.clone().ishrn(t);
        }, o.prototype.ushrn = function(t) {
          return this.clone().iushrn(t);
        }, o.prototype.testn = function(t) {
          r(typeof t == "number" && t >= 0);
          var a = t % 26, c = (t - a) / 26, h = 1 << a;
          if (this.length <= c) return false;
          var m = this.words[c];
          return !!(m & h);
        }, o.prototype.imaskn = function(t) {
          r(typeof t == "number" && t >= 0);
          var a = t % 26, c = (t - a) / 26;
          if (r(this.negative === 0, "imaskn works only with positive numbers"), this.length <= c) return this;
          if (a !== 0 && c++, this.length = Math.min(c, this.length), a !== 0) {
            var h = 67108863 ^ 67108863 >>> a << a;
            this.words[this.length - 1] &= h;
          }
          return this.length === 0 && (this.words[0] = 0, this.length = 1), this._strip();
        }, o.prototype.maskn = function(t) {
          return this.clone().imaskn(t);
        }, o.prototype.iaddn = function(t) {
          return r(typeof t == "number"), r(t < 67108864), t < 0 ? this.isubn(-t) : this.negative !== 0 ? this.length === 1 && (this.words[0] | 0) <= t ? (this.words[0] = t - (this.words[0] | 0), this.negative = 0, this) : (this.negative = 0, this.isubn(t), this.negative = 1, this) : this._iaddn(t);
        }, o.prototype._iaddn = function(t) {
          this.words[0] += t;
          for (var a = 0; a < this.length && this.words[a] >= 67108864; a++) this.words[a] -= 67108864, a === this.length - 1 ? this.words[a + 1] = 1 : this.words[a + 1]++;
          return this.length = Math.max(this.length, a + 1), this;
        }, o.prototype.isubn = function(t) {
          if (r(typeof t == "number"), r(t < 67108864), t < 0) return this.iaddn(-t);
          if (this.negative !== 0) return this.negative = 0, this.iaddn(t), this.negative = 1, this;
          if (this.words[0] -= t, this.length === 1 && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
          else for (var a = 0; a < this.length && this.words[a] < 0; a++) this.words[a] += 67108864, this.words[a + 1] -= 1;
          return this._strip();
        }, o.prototype.addn = function(t) {
          return this.clone().iaddn(t);
        }, o.prototype.subn = function(t) {
          return this.clone().isubn(t);
        }, o.prototype.iabs = function() {
          return this.negative = 0, this;
        }, o.prototype.abs = function() {
          return this.clone().iabs();
        }, o.prototype._ishlnsubmul = function(t, a, c) {
          var h = t.length + c, m;
          this._expand(h);
          var y, M = 0;
          for (m = 0; m < t.length; m++) {
            y = (this.words[m + c] | 0) + M;
            var d = (t.words[m] | 0) * a;
            y -= d & 67108863, M = (y >> 26) - (d / 67108864 | 0), this.words[m + c] = y & 67108863;
          }
          for (; m < this.length - c; m++) y = (this.words[m + c] | 0) + M, M = y >> 26, this.words[m + c] = y & 67108863;
          if (M === 0) return this._strip();
          for (r(M === -1), M = 0, m = 0; m < this.length; m++) y = -(this.words[m] | 0) + M, M = y >> 26, this.words[m] = y & 67108863;
          return this.negative = 1, this._strip();
        }, o.prototype._wordDiv = function(t, a) {
          var c = this.length - t.length, h = this.clone(), m = t, y = m.words[m.length - 1] | 0, M = this._countBits(y);
          c = 26 - M, c !== 0 && (m = m.ushln(c), h.iushln(c), y = m.words[m.length - 1] | 0);
          var d = h.length - m.length, s;
          if (a !== "mod") {
            s = new o(null), s.length = d + 1, s.words = new Array(s.length);
            for (var f = 0; f < s.length; f++) s.words[f] = 0;
          }
          var W = h.clone()._ishlnsubmul(m, 1, d);
          W.negative === 0 && (h = W, s && (s.words[d] = 1));
          for (var N = d - 1; N >= 0; N--) {
            var O = (h.words[m.length + N] | 0) * 67108864 + (h.words[m.length + N - 1] | 0);
            for (O = Math.min(O / y | 0, 67108863), h._ishlnsubmul(m, O, N); h.negative !== 0; ) O--, h.negative = 0, h._ishlnsubmul(m, 1, N), h.isZero() || (h.negative ^= 1);
            s && (s.words[N] = O);
          }
          return s && s._strip(), h._strip(), a !== "div" && c !== 0 && h.iushrn(c), {
            div: s || null,
            mod: h
          };
        }, o.prototype.divmod = function(t, a, c) {
          if (r(!t.isZero()), this.isZero()) return {
            div: new o(0),
            mod: new o(0)
          };
          var h, m, y;
          return this.negative !== 0 && t.negative === 0 ? (y = this.neg().divmod(t, a), a !== "mod" && (h = y.div.neg()), a !== "div" && (m = y.mod.neg(), c && m.negative !== 0 && m.iadd(t)), {
            div: h,
            mod: m
          }) : this.negative === 0 && t.negative !== 0 ? (y = this.divmod(t.neg(), a), a !== "mod" && (h = y.div.neg()), {
            div: h,
            mod: y.mod
          }) : (this.negative & t.negative) !== 0 ? (y = this.neg().divmod(t.neg(), a), a !== "div" && (m = y.mod.neg(), c && m.negative !== 0 && m.isub(t)), {
            div: y.div,
            mod: m
          }) : t.length > this.length || this.cmp(t) < 0 ? {
            div: new o(0),
            mod: this
          } : t.length === 1 ? a === "div" ? {
            div: this.divn(t.words[0]),
            mod: null
          } : a === "mod" ? {
            div: null,
            mod: new o(this.modrn(t.words[0]))
          } : {
            div: this.divn(t.words[0]),
            mod: new o(this.modrn(t.words[0]))
          } : this._wordDiv(t, a);
        }, o.prototype.div = function(t) {
          return this.divmod(t, "div", false).div;
        }, o.prototype.mod = function(t) {
          return this.divmod(t, "mod", false).mod;
        }, o.prototype.umod = function(t) {
          return this.divmod(t, "mod", true).mod;
        }, o.prototype.divRound = function(t) {
          var a = this.divmod(t);
          if (a.mod.isZero()) return a.div;
          var c = a.mod.abs(), h = t.abs().iushrn(1), m = t.words[0] & 1, y = c.cmp(h);
          if (y < 0 || m === 1 && y === 0) return a.div;
          var M = new o(1);
          return M.negative = this.negative ^ t.negative, a.div.iadd(M);
        }, o.prototype.modrn = function(t) {
          var a = t < 0;
          a && (t = -t), r(t <= 67108863);
          for (var c = (1 << 26) % t, h = 0, m = this.length - 1; m >= 0; m--) h = (c * h + (this.words[m] | 0)) % t;
          return a ? -h : h;
        }, o.prototype.modn = function(t) {
          return this.modrn(t);
        }, o.prototype.idivn = function(t) {
          var a = t < 0;
          a && (t = -t), r(t <= 67108863);
          for (var c = 0, h = this.length - 1; h >= 0; h--) {
            var m = (this.words[h] | 0) + c * 67108864;
            this.words[h] = m / t | 0, c = m % t;
          }
          return this._strip(), a ? this.ineg() : this;
        }, o.prototype.divn = function(t) {
          return this.clone().idivn(t);
        }, o.prototype.egcd = function(t) {
          r(t.negative === 0), r(!t.isZero());
          var a = this, c = t.clone();
          a.negative !== 0 ? a = a.umod(t) : a = a.clone();
          for (var h = new o(1), m = new o(0), y = new o(0), M = new o(1), d = 0; a.isEven() && c.isEven(); ) a.iushrn(1), c.iushrn(1), ++d;
          for (var s = c.clone(), f = a.clone(); !a.isZero(); ) {
            for (var W = 0, N = 1; (a.words[0] & N) === 0 && W < 26; ++W, N <<= 1) ;
            if (W > 0) for (a.iushrn(W); W-- > 0; ) (h.isOdd() || m.isOdd()) && (h.iadd(s), m.isub(f)), h.iushrn(1), m.iushrn(1);
            for (var O = 0, He = 1; (c.words[0] & He) === 0 && O < 26; ++O, He <<= 1) ;
            if (O > 0) for (c.iushrn(O); O-- > 0; ) (y.isOdd() || M.isOdd()) && (y.iadd(s), M.isub(f)), y.iushrn(1), M.iushrn(1);
            a.cmp(c) >= 0 ? (a.isub(c), h.isub(y), m.isub(M)) : (c.isub(a), y.isub(h), M.isub(m));
          }
          return {
            a: y,
            b: M,
            gcd: c.iushln(d)
          };
        }, o.prototype._invmp = function(t) {
          r(t.negative === 0), r(!t.isZero());
          var a = this, c = t.clone();
          a.negative !== 0 ? a = a.umod(t) : a = a.clone();
          for (var h = new o(1), m = new o(0), y = c.clone(); a.cmpn(1) > 0 && c.cmpn(1) > 0; ) {
            for (var M = 0, d = 1; (a.words[0] & d) === 0 && M < 26; ++M, d <<= 1) ;
            if (M > 0) for (a.iushrn(M); M-- > 0; ) h.isOdd() && h.iadd(y), h.iushrn(1);
            for (var s = 0, f = 1; (c.words[0] & f) === 0 && s < 26; ++s, f <<= 1) ;
            if (s > 0) for (c.iushrn(s); s-- > 0; ) m.isOdd() && m.iadd(y), m.iushrn(1);
            a.cmp(c) >= 0 ? (a.isub(c), h.isub(m)) : (c.isub(a), m.isub(h));
          }
          var W;
          return a.cmpn(1) === 0 ? W = h : W = m, W.cmpn(0) < 0 && W.iadd(t), W;
        }, o.prototype.gcd = function(t) {
          if (this.isZero()) return t.abs();
          if (t.isZero()) return this.abs();
          var a = this.clone(), c = t.clone();
          a.negative = 0, c.negative = 0;
          for (var h = 0; a.isEven() && c.isEven(); h++) a.iushrn(1), c.iushrn(1);
          do {
            for (; a.isEven(); ) a.iushrn(1);
            for (; c.isEven(); ) c.iushrn(1);
            var m = a.cmp(c);
            if (m < 0) {
              var y = a;
              a = c, c = y;
            } else if (m === 0 || c.cmpn(1) === 0) break;
            a.isub(c);
          } while (true);
          return c.iushln(h);
        }, o.prototype.invm = function(t) {
          return this.egcd(t).a.umod(t);
        }, o.prototype.isEven = function() {
          return (this.words[0] & 1) === 0;
        }, o.prototype.isOdd = function() {
          return (this.words[0] & 1) === 1;
        }, o.prototype.andln = function(t) {
          return this.words[0] & t;
        }, o.prototype.bincn = function(t) {
          r(typeof t == "number");
          var a = t % 26, c = (t - a) / 26, h = 1 << a;
          if (this.length <= c) return this._expand(c + 1), this.words[c] |= h, this;
          for (var m = h, y = c; m !== 0 && y < this.length; y++) {
            var M = this.words[y] | 0;
            M += m, m = M >>> 26, M &= 67108863, this.words[y] = M;
          }
          return m !== 0 && (this.words[y] = m, this.length++), this;
        }, o.prototype.isZero = function() {
          return this.length === 1 && this.words[0] === 0;
        }, o.prototype.cmpn = function(t) {
          var a = t < 0;
          if (this.negative !== 0 && !a) return -1;
          if (this.negative === 0 && a) return 1;
          this._strip();
          var c;
          if (this.length > 1) c = 1;
          else {
            a && (t = -t), r(t <= 67108863, "Number is too big");
            var h = this.words[0] | 0;
            c = h === t ? 0 : h < t ? -1 : 1;
          }
          return this.negative !== 0 ? -c | 0 : c;
        }, o.prototype.cmp = function(t) {
          if (this.negative !== 0 && t.negative === 0) return -1;
          if (this.negative === 0 && t.negative !== 0) return 1;
          var a = this.ucmp(t);
          return this.negative !== 0 ? -a | 0 : a;
        }, o.prototype.ucmp = function(t) {
          if (this.length > t.length) return 1;
          if (this.length < t.length) return -1;
          for (var a = 0, c = this.length - 1; c >= 0; c--) {
            var h = this.words[c] | 0, m = t.words[c] | 0;
            if (h !== m) {
              h < m ? a = -1 : h > m && (a = 1);
              break;
            }
          }
          return a;
        }, o.prototype.gtn = function(t) {
          return this.cmpn(t) === 1;
        }, o.prototype.gt = function(t) {
          return this.cmp(t) === 1;
        }, o.prototype.gten = function(t) {
          return this.cmpn(t) >= 0;
        }, o.prototype.gte = function(t) {
          return this.cmp(t) >= 0;
        }, o.prototype.ltn = function(t) {
          return this.cmpn(t) === -1;
        }, o.prototype.lt = function(t) {
          return this.cmp(t) === -1;
        }, o.prototype.lten = function(t) {
          return this.cmpn(t) <= 0;
        }, o.prototype.lte = function(t) {
          return this.cmp(t) <= 0;
        }, o.prototype.eqn = function(t) {
          return this.cmpn(t) === 0;
        }, o.prototype.eq = function(t) {
          return this.cmp(t) === 0;
        }, o.red = function(t) {
          return new Y(t);
        }, o.prototype.toRed = function(t) {
          return r(!this.red, "Already a number in reduction context"), r(this.negative === 0, "red works only with positives"), t.convertTo(this)._forceRed(t);
        }, o.prototype.fromRed = function() {
          return r(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this);
        }, o.prototype._forceRed = function(t) {
          return this.red = t, this;
        }, o.prototype.forceRed = function(t) {
          return r(!this.red, "Already a number in reduction context"), this._forceRed(t);
        }, o.prototype.redAdd = function(t) {
          return r(this.red, "redAdd works only with red numbers"), this.red.add(this, t);
        }, o.prototype.redIAdd = function(t) {
          return r(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, t);
        }, o.prototype.redSub = function(t) {
          return r(this.red, "redSub works only with red numbers"), this.red.sub(this, t);
        }, o.prototype.redISub = function(t) {
          return r(this.red, "redISub works only with red numbers"), this.red.isub(this, t);
        }, o.prototype.redShl = function(t) {
          return r(this.red, "redShl works only with red numbers"), this.red.shl(this, t);
        }, o.prototype.redMul = function(t) {
          return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.mul(this, t);
        }, o.prototype.redIMul = function(t) {
          return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.imul(this, t);
        }, o.prototype.redSqr = function() {
          return r(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this);
        }, o.prototype.redISqr = function() {
          return r(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this);
        }, o.prototype.redSqrt = function() {
          return r(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this);
        }, o.prototype.redInvm = function() {
          return r(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this);
        }, o.prototype.redNeg = function() {
          return r(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this);
        }, o.prototype.redPow = function(t) {
          return r(this.red && !t.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, t);
        };
        var Ze = {
          k256: null,
          p224: null,
          p192: null,
          p25519: null
        };
        function ne(p, t) {
          this.name = p, this.p = new o(t, 16), this.n = this.p.bitLength(), this.k = new o(1).iushln(this.n).isub(this.p), this.tmp = this._tmp();
        }
        ne.prototype._tmp = function() {
          var t = new o(null);
          return t.words = new Array(Math.ceil(this.n / 13)), t;
        }, ne.prototype.ireduce = function(t) {
          var a = t, c;
          do
            this.split(a, this.tmp), a = this.imulK(a), a = a.iadd(this.tmp), c = a.bitLength();
          while (c > this.n);
          var h = c < this.n ? -1 : a.ucmp(this.p);
          return h === 0 ? (a.words[0] = 0, a.length = 1) : h > 0 ? a.isub(this.p) : a.strip !== void 0 ? a.strip() : a._strip(), a;
        }, ne.prototype.split = function(t, a) {
          t.iushrn(this.n, 0, a);
        }, ne.prototype.imulK = function(t) {
          return t.imul(this.k);
        };
        function re() {
          ne.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f");
        }
        u(re, ne), re.prototype.split = function(t, a) {
          for (var c = 4194303, h = Math.min(t.length, 9), m = 0; m < h; m++) a.words[m] = t.words[m];
          if (a.length = h, t.length <= 9) {
            t.words[0] = 0, t.length = 1;
            return;
          }
          var y = t.words[9];
          for (a.words[a.length++] = y & c, m = 10; m < t.length; m++) {
            var M = t.words[m] | 0;
            t.words[m - 10] = (M & c) << 4 | y >>> 22, y = M;
          }
          y >>>= 22, t.words[m - 10] = y, y === 0 && t.length > 10 ? t.length -= 10 : t.length -= 9;
        }, re.prototype.imulK = function(t) {
          t.words[t.length] = 0, t.words[t.length + 1] = 0, t.length += 2;
          for (var a = 0, c = 0; c < t.length; c++) {
            var h = t.words[c] | 0;
            a += h * 977, t.words[c] = a & 67108863, a = h * 64 + (a / 67108864 | 0);
          }
          return t.words[t.length - 1] === 0 && (t.length--, t.words[t.length - 1] === 0 && t.length--), t;
        };
        function rt() {
          ne.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001");
        }
        u(rt, ne);
        function Rt() {
          ne.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff");
        }
        u(Rt, ne);
        function kt() {
          ne.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed");
        }
        u(kt, ne), kt.prototype.imulK = function(t) {
          for (var a = 0, c = 0; c < t.length; c++) {
            var h = (t.words[c] | 0) * 19 + a, m = h & 67108863;
            h >>>= 26, t.words[c] = m, a = h;
          }
          return a !== 0 && (t.words[t.length++] = a), t;
        }, o._prime = function(t) {
          if (Ze[t]) return Ze[t];
          var a;
          if (t === "k256") a = new re();
          else if (t === "p224") a = new rt();
          else if (t === "p192") a = new Rt();
          else if (t === "p25519") a = new kt();
          else throw new Error("Unknown prime " + t);
          return Ze[t] = a, a;
        };
        function Y(p) {
          if (typeof p == "string") {
            var t = o._prime(p);
            this.m = t.p, this.prime = t;
          } else r(p.gtn(1), "modulus must be greater than 1"), this.m = p, this.prime = null;
        }
        Y.prototype._verify1 = function(t) {
          r(t.negative === 0, "red works only with positives"), r(t.red, "red works only with red numbers");
        }, Y.prototype._verify2 = function(t, a) {
          r((t.negative | a.negative) === 0, "red works only with positives"), r(t.red && t.red === a.red, "red works only with red numbers");
        }, Y.prototype.imod = function(t) {
          return this.prime ? this.prime.ireduce(t)._forceRed(this) : (R(t, t.umod(this.m)._forceRed(this)), t);
        }, Y.prototype.neg = function(t) {
          return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this);
        }, Y.prototype.add = function(t, a) {
          this._verify2(t, a);
          var c = t.add(a);
          return c.cmp(this.m) >= 0 && c.isub(this.m), c._forceRed(this);
        }, Y.prototype.iadd = function(t, a) {
          this._verify2(t, a);
          var c = t.iadd(a);
          return c.cmp(this.m) >= 0 && c.isub(this.m), c;
        }, Y.prototype.sub = function(t, a) {
          this._verify2(t, a);
          var c = t.sub(a);
          return c.cmpn(0) < 0 && c.iadd(this.m), c._forceRed(this);
        }, Y.prototype.isub = function(t, a) {
          this._verify2(t, a);
          var c = t.isub(a);
          return c.cmpn(0) < 0 && c.iadd(this.m), c;
        }, Y.prototype.shl = function(t, a) {
          return this._verify1(t), this.imod(t.ushln(a));
        }, Y.prototype.imul = function(t, a) {
          return this._verify2(t, a), this.imod(t.imul(a));
        }, Y.prototype.mul = function(t, a) {
          return this._verify2(t, a), this.imod(t.mul(a));
        }, Y.prototype.isqr = function(t) {
          return this.imul(t, t.clone());
        }, Y.prototype.sqr = function(t) {
          return this.mul(t, t);
        }, Y.prototype.sqrt = function(t) {
          if (t.isZero()) return t.clone();
          var a = this.m.andln(3);
          if (r(a % 2 === 1), a === 3) {
            var c = this.m.add(new o(1)).iushrn(2);
            return this.pow(t, c);
          }
          for (var h = this.m.subn(1), m = 0; !h.isZero() && h.andln(1) === 0; ) m++, h.iushrn(1);
          r(!h.isZero());
          var y = new o(1).toRed(this), M = y.redNeg(), d = this.m.subn(1).iushrn(1), s = this.m.bitLength();
          for (s = new o(2 * s * s).toRed(this); this.pow(s, d).cmp(M) !== 0; ) s.redIAdd(M);
          for (var f = this.pow(s, h), W = this.pow(t, h.addn(1).iushrn(1)), N = this.pow(t, h), O = m; N.cmp(y) !== 0; ) {
            for (var He = N, Z = 0; He.cmp(y) !== 0; Z++) He = He.redSqr();
            r(Z < O);
            var H = this.pow(f, new o(1).iushln(O - Z - 1));
            W = W.redMul(H), f = H.redSqr(), N = N.redMul(f), O = Z;
          }
          return W;
        }, Y.prototype.invm = function(t) {
          var a = t._invmp(this.m);
          return a.negative !== 0 ? (a.negative = 0, this.imod(a).redNeg()) : this.imod(a);
        }, Y.prototype.pow = function(t, a) {
          if (a.isZero()) return new o(1).toRed(this);
          if (a.cmpn(1) === 0) return t.clone();
          var c = 4, h = new Array(1 << c);
          h[0] = new o(1).toRed(this), h[1] = t;
          for (var m = 2; m < h.length; m++) h[m] = this.mul(h[m - 1], t);
          var y = h[0], M = 0, d = 0, s = a.bitLength() % 26;
          for (s === 0 && (s = 26), m = a.length - 1; m >= 0; m--) {
            for (var f = a.words[m], W = s - 1; W >= 0; W--) {
              var N = f >> W & 1;
              if (y !== h[0] && (y = this.sqr(y)), N === 0 && M === 0) {
                d = 0;
                continue;
              }
              M <<= 1, M |= N, d++, !(d !== c && (m !== 0 || W !== 0)) && (y = this.mul(y, h[M]), d = 0, M = 0);
            }
            s = 26;
          }
          return y;
        }, Y.prototype.convertTo = function(t) {
          var a = t.umod(this.m);
          return a === t ? a.clone() : a;
        }, Y.prototype.convertFrom = function(t) {
          var a = t.clone();
          return a.red = null, a;
        }, o.mont = function(t) {
          return new at(t);
        };
        function at(p) {
          Y.call(this, p), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new o(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv);
        }
        u(at, Y), at.prototype.convertTo = function(t) {
          return this.imod(t.ushln(this.shift));
        }, at.prototype.convertFrom = function(t) {
          var a = this.imod(t.mul(this.rinv));
          return a.red = null, a;
        }, at.prototype.imul = function(t, a) {
          if (t.isZero() || a.isZero()) return t.words[0] = 0, t.length = 1, t;
          var c = t.imul(a), h = c.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), m = c.isub(h).iushrn(this.shift), y = m;
          return m.cmp(this.m) >= 0 ? y = m.isub(this.m) : m.cmpn(0) < 0 && (y = m.iadd(this.m)), y._forceRed(this);
        }, at.prototype.mul = function(t, a) {
          if (t.isZero() || a.isZero()) return new o(0)._forceRed(this);
          var c = t.mul(a), h = c.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), m = c.isub(h).iushrn(this.shift), y = m;
          return m.cmp(this.m) >= 0 ? y = m.isub(this.m) : m.cmpn(0) < 0 && (y = m.iadd(this.m)), y._forceRed(this);
        }, at.prototype.invm = function(t) {
          var a = this.imod(t._invmp(this.m).mul(this.r2));
          return a._forceRed(this);
        };
      })(i, ws);
    })(an)), an.exports;
  }
  var vs = Ms();
  const dn = gi(vs);
  var $n, Hr;
  function Ss() {
    if (Hr) return $n;
    Hr = 1;
    var i = is(), e = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
    return $n = i(e), $n;
  }
  var As = Ss();
  const $e = gi(As);
  var bs = 8078e3, ks = 8078001, Is = 8078004, xs = 8078005, Bs = 8078006, Es = 8078011;
  function Si(i) {
    return Array.isArray(i) ? "%5B" + i.map(Si).join("%2C%20") + "%5D" : typeof i == "bigint" ? `${i}n` : encodeURIComponent(String(i != null && Object.getPrototypeOf(i) === null ? {
      ...i
    } : i));
  }
  function Ts([i, e]) {
    return `${i}=${Si(e)}`;
  }
  function Ps(i) {
    const e = Object.entries(i).map(Ts).join("&");
    return btoa(e);
  }
  function Cs(i, e = {}) {
    {
      let n = `Solana error #${i}; Decode this error by running \`npx @solana/errors decode -- ${i}`;
      return Object.keys(e).length && (n += ` '${Ps(e)}'`), `${n}\``;
    }
  }
  var Nt = class extends Error {
    constructor(...[i, e]) {
      let n, r;
      e && Object.entries(Object.getOwnPropertyDescriptors(e)).forEach(([o, g]) => {
        o === "cause" ? r = {
          cause: g.value
        } : (n === void 0 && (n = {
          __code: i
        }), Object.defineProperty(n, o, g));
      });
      const u = Cs(i, n);
      super(u, r);
      __publicField(this, "cause", this.cause);
      __publicField(this, "context");
      this.context = Object.freeze(n === void 0 ? {
        __code: i
      } : n), this.name = "SolanaError";
    }
  };
  function _s(i, e) {
    return "fixedSize" in e ? e.fixedSize : e.getSizeFromValue(i);
  }
  function Rs(i) {
    return Object.freeze({
      ...i,
      encode: (e) => {
        const n = new Uint8Array(_s(e, i));
        return i.write(e, n, 0), n;
      }
    });
  }
  function Ls(i) {
    return Object.freeze({
      ...i,
      decode: (e, n = 0) => i.read(e, n)[0]
    });
  }
  function zt(i) {
    return "fixedSize" in i && typeof i.fixedSize == "number";
  }
  function zs(i, e) {
    if (zt(i) !== zt(e)) throw new Nt(Is);
    if (zt(i) && zt(e) && i.fixedSize !== e.fixedSize) throw new Nt(xs, {
      decoderFixedSize: e.fixedSize,
      encoderFixedSize: i.fixedSize
    });
    if (!zt(i) && !zt(e) && i.maxSize !== e.maxSize) throw new Nt(Bs, {
      decoderMaxSize: e.maxSize,
      encoderMaxSize: i.maxSize
    });
    return {
      ...e,
      ...i,
      decode: e.decode,
      encode: i.encode,
      read: e.read,
      write: i.write
    };
  }
  function Ks(i, e, n = 0) {
    if (e.length - n <= 0) throw new Nt(bs, {
      codecDescription: i
    });
  }
  function Us(i, e, n, r = 0) {
    const u = n.length - r;
    if (u < e) throw new Nt(ks, {
      bytesLength: u,
      codecDescription: i,
      expected: e
    });
  }
  function Ns(i, e, n) {
    const r = i.byteOffset + (e ?? 0), u = n ?? i.byteLength;
    let o;
    return typeof SharedArrayBuffer > "u" ? o = i.buffer : i.buffer instanceof SharedArrayBuffer ? (o = new ArrayBuffer(i.length), new Uint8Array(o).set(new Uint8Array(i))) : o = i.buffer, (r === 0 || r === -i.byteLength) && u === i.byteLength ? o : o.slice(r, r + u);
  }
  function Ws(i, e, n, r) {
    if (r < e || r > n) throw new Nt(Es, {
      codecDescription: i,
      max: n,
      min: e,
      value: r
    });
  }
  function Ai(i) {
    return (i == null ? void 0 : i.endian) !== 1;
  }
  function Os(i) {
    return Rs({
      fixedSize: i.size,
      write(e, n, r) {
        i.range && Ws(i.name, i.range[0], i.range[1], e);
        const u = new ArrayBuffer(i.size);
        return i.set(new DataView(u), e, Ai(i.config)), n.set(new Uint8Array(u), r), r + i.size;
      }
    });
  }
  function Fs(i) {
    return Ls({
      fixedSize: i.size,
      read(e, n = 0) {
        Ks(i.name, e, n), Us(i.name, i.size, e, n);
        const r = new DataView(Ns(e, n, i.size));
        return [
          i.get(r, Ai(i.config)),
          n + i.size
        ];
      }
    });
  }
  var qs = (i = {}) => Os({
    config: i,
    name: "u64",
    range: [
      0n,
      BigInt("0xffffffffffffffff")
    ],
    set: (e, n, r) => e.setBigUint64(0, BigInt(n), r),
    size: 8
  }), Ds = (i = {}) => Fs({
    config: i,
    get: (e, n) => e.getBigUint64(0, n),
    name: "u64",
    size: 8
  }), Vs = (i = {}) => zs(qs(i), Ds(i));
  qt.utils.randomPrivateKey;
  const Gr = () => {
    const i = qt.utils.randomPrivateKey(), e = rr(i), n = new Uint8Array(64);
    return n.set(i), n.set(e, 32), {
      publicKey: e,
      secretKey: n
    };
  }, rr = qt.getPublicKey;
  function Zr(i) {
    try {
      return qt.ExtendedPoint.fromHex(i), true;
    } catch {
      return false;
    }
  }
  const bi = (i, e) => qt.sign(i, e.slice(0, 32)), Hs = qt.verify, Je = (i) => F.isBuffer(i) ? i : i instanceof Uint8Array ? F.from(i.buffer, i.byteOffset, i.byteLength) : F.from(i);
  class Gs {
    constructor(e) {
      Object.assign(this, e);
    }
    encode() {
      return F.from(Gn.serialize(un, this));
    }
    static decode(e) {
      return Gn.deserialize(un, this, e);
    }
    static decodeUnchecked(e) {
      return Gn.deserializeUnchecked(un, this, e);
    }
  }
  const un = /* @__PURE__ */ new Map();
  var ki;
  const Zs = 32, gt = 32;
  function $s(i) {
    return i._bn !== void 0;
  }
  let $r = 1;
  class A extends Gs {
    constructor(e) {
      if (super({}), this._bn = void 0, $s(e)) this._bn = e._bn;
      else {
        if (typeof e == "string") {
          const n = $e.decode(e);
          if (n.length != gt) throw new Error("Invalid public key input");
          this._bn = new dn(n);
        } else this._bn = new dn(e);
        if (this._bn.byteLength() > gt) throw new Error("Invalid public key input");
      }
    }
    static unique() {
      const e = new A($r);
      return $r += 1, new A(e.toBuffer());
    }
    equals(e) {
      return this._bn.eq(e._bn);
    }
    toBase58() {
      return $e.encode(this.toBytes());
    }
    toJSON() {
      return this.toBase58();
    }
    toBytes() {
      const e = this.toBuffer();
      return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
    }
    toBuffer() {
      const e = this._bn.toArrayLike(F);
      if (e.length === gt) return e;
      const n = F.alloc(32);
      return e.copy(n, 32 - e.length), n;
    }
    get [Symbol.toStringTag]() {
      return `PublicKey(${this.toString()})`;
    }
    toString() {
      return this.toBase58();
    }
    static async createWithSeed(e, n, r) {
      const u = F.concat([
        e.toBuffer(),
        F.from(n),
        r.toBuffer()
      ]), o = Or(u);
      return new A(o);
    }
    static createProgramAddressSync(e, n) {
      let r = F.alloc(0);
      e.forEach(function(o) {
        if (o.length > Zs) throw new TypeError("Max seed length exceeded");
        r = F.concat([
          r,
          Je(o)
        ]);
      }), r = F.concat([
        r,
        n.toBuffer(),
        F.from("ProgramDerivedAddress")
      ]);
      const u = Or(r);
      if (Zr(u)) throw new Error("Invalid seeds, address must fall off the curve");
      return new A(u);
    }
    static async createProgramAddress(e, n) {
      return this.createProgramAddressSync(e, n);
    }
    static findProgramAddressSync(e, n) {
      let r = 255, u;
      for (; r != 0; ) {
        try {
          const o = e.concat(F.from([
            r
          ]));
          u = this.createProgramAddressSync(o, n);
        } catch (o) {
          if (o instanceof TypeError) throw o;
          r--;
          continue;
        }
        return [
          u,
          r
        ];
      }
      throw new Error("Unable to find a viable program address nonce");
    }
    static async findProgramAddress(e, n) {
      return this.findProgramAddressSync(e, n);
    }
    static isOnCurve(e) {
      const n = new A(e);
      return Zr(n.toBytes());
    }
  }
  ki = A;
  A.default = new ki("11111111111111111111111111111111");
  un.set(A, {
    kind: "struct",
    fields: [
      [
        "_bn",
        "u256"
      ]
    ]
  });
  new A("BPFLoader1111111111111111111111111111111111");
  const Wt = 1232, vn = 127, It = 64, Ys = 129;
  class Jt {
    constructor(e, n) {
      this.staticAccountKeys = void 0, this.accountKeysFromLookups = void 0, this.staticAccountKeys = e, this.accountKeysFromLookups = n;
    }
    keySegments() {
      const e = [
        this.staticAccountKeys
      ];
      return this.accountKeysFromLookups && (e.push(this.accountKeysFromLookups.writable), e.push(this.accountKeysFromLookups.readonly)), e;
    }
    get(e) {
      for (const n of this.keySegments()) {
        if (e < n.length) return n[e];
        e -= n.length;
      }
    }
    get length() {
      return this.keySegments().flat().length;
    }
    compileInstructions(e) {
      if (this.length > 256) throw new Error("Account index overflow encountered during compilation");
      const r = /* @__PURE__ */ new Map();
      this.keySegments().flat().forEach((o, g) => {
        r.set(o.toBase58(), g);
      });
      const u = (o) => {
        const g = r.get(o.toBase58());
        if (g === void 0) throw new Error("Encountered an unknown instruction account key during compilation");
        return g;
      };
      return e.map((o) => ({
        programIdIndex: u(o.programId),
        accountKeyIndexes: o.keys.map((g) => u(g.pubkey)),
        data: o.data
      }));
    }
  }
  const q = (i = "publicKey") => l.blob(32, i), Js = (i = "signature") => l.blob(64, i), Kt = (i = "string") => {
    const e = l.struct([
      l.u32("length"),
      l.u32("lengthPadding"),
      l.blob(l.offset(l.u32(), -8), "chars")
    ], i), n = e.decode.bind(e), r = e.encode.bind(e), u = e;
    return u.decode = (o, g) => n(o, g).chars.toString(), u.encode = (o, g, w) => {
      const S = {
        chars: F.from(o, "utf8")
      };
      return r(S, g, w);
    }, u.alloc = (o) => l.u32().span + l.u32().span + F.from(o, "utf8").length, u;
  }, js = (i = "authorized") => l.struct([
    q("staker"),
    q("withdrawer")
  ], i), Xs = (i = "lockup") => l.struct([
    l.ns64("unixTimestamp"),
    l.ns64("epoch"),
    q("custodian")
  ], i), Qs = (i = "voteInit") => l.struct([
    q("nodePubkey"),
    q("authorizedVoter"),
    q("authorizedWithdrawer"),
    l.u8("commission")
  ], i), eo = (i = "voteAuthorizeWithSeedArgs") => l.struct([
    l.u32("voteAuthorizationType"),
    q("currentAuthorityDerivedKeyOwnerPubkey"),
    Kt("currentAuthorityDerivedKeySeed"),
    q("newAuthorized")
  ], i);
  function Ii(i, e) {
    const n = (u) => {
      if (u.span >= 0) return u.span;
      if (typeof u.alloc == "function") return u.alloc(e[u.property]);
      if ("count" in u && "elementLayout" in u) {
        const o = e[u.property];
        if (Array.isArray(o)) return o.length * n(u.elementLayout);
      } else if ("fields" in u) return Ii({
        layout: u
      }, e[u.property]);
      return 0;
    };
    let r = 0;
    return i.layout.fields.forEach((u) => {
      r += n(u);
    }), r;
  }
  function et(i) {
    let e = 0, n = 0;
    for (; ; ) {
      let r = i.shift();
      if (e |= (r & 127) << n * 7, n += 1, (r & 128) === 0) break;
    }
    return e;
  }
  function tt(i, e) {
    let n = e;
    for (; ; ) {
      let r = n & 127;
      if (n >>= 7, n == 0) {
        i.push(r);
        break;
      } else r |= 128, i.push(r);
    }
  }
  function G(i, e) {
    if (!i) throw new Error(e || "Assertion failed");
  }
  class Sn {
    constructor(e, n) {
      this.payer = void 0, this.keyMetaMap = void 0, this.payer = e, this.keyMetaMap = n;
    }
    static compile(e, n) {
      const r = /* @__PURE__ */ new Map(), u = (g) => {
        const w = g.toBase58();
        let S = r.get(w);
        return S === void 0 && (S = {
          isSigner: false,
          isWritable: false,
          isInvoked: false
        }, r.set(w, S)), S;
      }, o = u(n);
      o.isSigner = true, o.isWritable = true;
      for (const g of e) {
        u(g.programId).isInvoked = true;
        for (const w of g.keys) {
          const S = u(w.pubkey);
          S.isSigner || (S.isSigner = w.isSigner), S.isWritable || (S.isWritable = w.isWritable);
        }
      }
      return new Sn(n, r);
    }
    getMessageComponents() {
      const e = [
        ...this.keyMetaMap.entries()
      ];
      G(e.length <= 256, "Max static account keys length exceeded");
      const n = e.filter(([, S]) => S.isSigner && S.isWritable), r = e.filter(([, S]) => S.isSigner && !S.isWritable), u = e.filter(([, S]) => !S.isSigner && S.isWritable), o = e.filter(([, S]) => !S.isSigner && !S.isWritable), g = {
        numRequiredSignatures: n.length + r.length,
        numReadonlySignedAccounts: r.length,
        numReadonlyUnsignedAccounts: o.length
      };
      {
        G(n.length > 0, "Expected at least one writable signer key");
        const [S] = n[0];
        G(S === this.payer.toBase58(), "Expected first writable signer key to be the fee payer");
      }
      const w = [
        ...n.map(([S]) => new A(S)),
        ...r.map(([S]) => new A(S)),
        ...u.map(([S]) => new A(S)),
        ...o.map(([S]) => new A(S))
      ];
      return [
        g,
        w
      ];
    }
    extractTableLookup(e) {
      const [n, r] = this.drainKeysFoundInLookupTable(e.state.addresses, (g) => !g.isSigner && !g.isInvoked && g.isWritable), [u, o] = this.drainKeysFoundInLookupTable(e.state.addresses, (g) => !g.isSigner && !g.isInvoked && !g.isWritable);
      if (!(n.length === 0 && u.length === 0)) return [
        {
          accountKey: e.key,
          writableIndexes: n,
          readonlyIndexes: u
        },
        {
          writable: r,
          readonly: o
        }
      ];
    }
    drainKeysFoundInLookupTable(e, n) {
      const r = new Array(), u = new Array();
      for (const [o, g] of this.keyMetaMap.entries()) if (n(g)) {
        const w = new A(o), S = e.findIndex((b) => b.equals(w));
        S >= 0 && (G(S < 256, "Max lookup table index exceeded"), r.push(S), u.push(w), this.keyMetaMap.delete(o));
      }
      return [
        r,
        u
      ];
    }
  }
  const xi = "Reached end of buffer unexpectedly";
  function De(i) {
    if (i.length === 0) throw new Error(xi);
    return i.shift();
  }
  function Ve(i, ...e) {
    const [n] = e;
    if (e.length === 2 ? n + (e[1] ?? 0) > i.length : n >= i.length) throw new Error(xi);
    return i.splice(...e);
  }
  class Tt {
    constructor(e) {
      this.header = void 0, this.accountKeys = void 0, this.recentBlockhash = void 0, this.instructions = void 0, this.indexToProgramIds = /* @__PURE__ */ new Map(), this.header = e.header, this.accountKeys = e.accountKeys.map((n) => new A(n)), this.recentBlockhash = e.recentBlockhash, this.instructions = e.instructions, this.instructions.forEach((n) => this.indexToProgramIds.set(n.programIdIndex, this.accountKeys[n.programIdIndex]));
    }
    get version() {
      return "legacy";
    }
    get staticAccountKeys() {
      return this.accountKeys;
    }
    get compiledInstructions() {
      return this.instructions.map((e) => ({
        programIdIndex: e.programIdIndex,
        accountKeyIndexes: e.accounts,
        data: $e.decode(e.data)
      }));
    }
    get addressTableLookups() {
      return [];
    }
    getAccountKeys() {
      return new Jt(this.staticAccountKeys);
    }
    static compile(e) {
      const n = Sn.compile(e.instructions, e.payerKey), [r, u] = n.getMessageComponents(), g = new Jt(u).compileInstructions(e.instructions).map((w) => ({
        programIdIndex: w.programIdIndex,
        accounts: w.accountKeyIndexes,
        data: $e.encode(w.data)
      }));
      return new Tt({
        header: r,
        accountKeys: u,
        recentBlockhash: e.recentBlockhash,
        instructions: g
      });
    }
    isAccountSigner(e) {
      return e < this.header.numRequiredSignatures;
    }
    isAccountWritable(e) {
      const n = this.header.numRequiredSignatures;
      if (e >= this.header.numRequiredSignatures) {
        const r = e - n, o = this.accountKeys.length - n - this.header.numReadonlyUnsignedAccounts;
        return r < o;
      } else {
        const r = n - this.header.numReadonlySignedAccounts;
        return e < r;
      }
    }
    isProgramId(e) {
      return this.indexToProgramIds.has(e);
    }
    programIds() {
      return [
        ...this.indexToProgramIds.values()
      ];
    }
    nonProgramIds() {
      return this.accountKeys.filter((e, n) => !this.isProgramId(n));
    }
    serialize() {
      const e = this.accountKeys.length;
      let n = [];
      tt(n, e);
      const r = this.instructions.map((x) => {
        const { accounts: P, programIdIndex: C } = x, _ = Array.from($e.decode(x.data));
        let B = [];
        tt(B, P.length);
        let z = [];
        return tt(z, _.length), {
          programIdIndex: C,
          keyIndicesCount: F.from(B),
          keyIndices: P,
          dataLength: F.from(z),
          data: _
        };
      });
      let u = [];
      tt(u, r.length);
      let o = F.alloc(Wt);
      F.from(u).copy(o);
      let g = u.length;
      r.forEach((x) => {
        const C = l.struct([
          l.u8("programIdIndex"),
          l.blob(x.keyIndicesCount.length, "keyIndicesCount"),
          l.seq(l.u8("keyIndex"), x.keyIndices.length, "keyIndices"),
          l.blob(x.dataLength.length, "dataLength"),
          l.seq(l.u8("userdatum"), x.data.length, "data")
        ]).encode(x, o, g);
        g += C;
      }), o = o.slice(0, g);
      const w = l.struct([
        l.blob(1, "numRequiredSignatures"),
        l.blob(1, "numReadonlySignedAccounts"),
        l.blob(1, "numReadonlyUnsignedAccounts"),
        l.blob(n.length, "keyCount"),
        l.seq(q("key"), e, "keys"),
        q("recentBlockhash")
      ]), S = {
        numRequiredSignatures: F.from([
          this.header.numRequiredSignatures
        ]),
        numReadonlySignedAccounts: F.from([
          this.header.numReadonlySignedAccounts
        ]),
        numReadonlyUnsignedAccounts: F.from([
          this.header.numReadonlyUnsignedAccounts
        ]),
        keyCount: F.from(n),
        keys: this.accountKeys.map((x) => Je(x.toBytes())),
        recentBlockhash: $e.decode(this.recentBlockhash)
      };
      let b = F.alloc(2048);
      const R = w.encode(S, b);
      return o.copy(b, R), b.slice(0, R + o.length);
    }
    static from(e) {
      let n = [
        ...e
      ];
      const r = De(n);
      if (r !== (r & vn)) throw new Error("Versioned messages must be deserialized with VersionedMessage.deserialize()");
      const u = De(n), o = De(n), g = et(n);
      let w = [];
      for (let P = 0; P < g; P++) {
        const C = Ve(n, 0, gt);
        w.push(new A(F.from(C)));
      }
      const S = Ve(n, 0, gt), b = et(n);
      let R = [];
      for (let P = 0; P < b; P++) {
        const C = De(n), _ = et(n), B = Ve(n, 0, _), z = et(n), U = Ve(n, 0, z), D = $e.encode(F.from(U));
        R.push({
          programIdIndex: C,
          accounts: B,
          data: D
        });
      }
      const x = {
        header: {
          numRequiredSignatures: r,
          numReadonlySignedAccounts: u,
          numReadonlyUnsignedAccounts: o
        },
        recentBlockhash: $e.encode(F.from(S)),
        accountKeys: w,
        instructions: R
      };
      return new Tt(x);
    }
  }
  class jt {
    constructor(e) {
      this.header = void 0, this.staticAccountKeys = void 0, this.recentBlockhash = void 0, this.compiledInstructions = void 0, this.addressTableLookups = void 0, this.header = e.header, this.staticAccountKeys = e.staticAccountKeys, this.recentBlockhash = e.recentBlockhash, this.compiledInstructions = e.compiledInstructions, this.addressTableLookups = e.addressTableLookups;
    }
    get version() {
      return 0;
    }
    get numAccountKeysFromLookups() {
      let e = 0;
      for (const n of this.addressTableLookups) e += n.readonlyIndexes.length + n.writableIndexes.length;
      return e;
    }
    getAccountKeys(e) {
      let n;
      if (e && "accountKeysFromLookups" in e && e.accountKeysFromLookups) {
        if (this.numAccountKeysFromLookups != e.accountKeysFromLookups.writable.length + e.accountKeysFromLookups.readonly.length) throw new Error("Failed to get account keys because of a mismatch in the number of account keys from lookups");
        n = e.accountKeysFromLookups;
      } else if (e && "addressLookupTableAccounts" in e && e.addressLookupTableAccounts) n = this.resolveAddressTableLookups(e.addressLookupTableAccounts);
      else if (this.addressTableLookups.length > 0) throw new Error("Failed to get account keys because address table lookups were not resolved");
      return new Jt(this.staticAccountKeys, n);
    }
    isAccountSigner(e) {
      return e < this.header.numRequiredSignatures;
    }
    isAccountWritable(e) {
      const n = this.header.numRequiredSignatures, r = this.staticAccountKeys.length;
      if (e >= r) {
        const u = e - r, o = this.addressTableLookups.reduce((g, w) => g + w.writableIndexes.length, 0);
        return u < o;
      } else if (e >= this.header.numRequiredSignatures) {
        const u = e - n, g = r - n - this.header.numReadonlyUnsignedAccounts;
        return u < g;
      } else {
        const u = n - this.header.numReadonlySignedAccounts;
        return e < u;
      }
    }
    resolveAddressTableLookups(e) {
      const n = {
        writable: [],
        readonly: []
      };
      for (const r of this.addressTableLookups) {
        const u = e.find((o) => o.key.equals(r.accountKey));
        if (!u) throw new Error(`Failed to find address lookup table account for table key ${r.accountKey.toBase58()}`);
        for (const o of r.writableIndexes) if (o < u.state.addresses.length) n.writable.push(u.state.addresses[o]);
        else throw new Error(`Failed to find address for index ${o} in address lookup table ${r.accountKey.toBase58()}`);
        for (const o of r.readonlyIndexes) if (o < u.state.addresses.length) n.readonly.push(u.state.addresses[o]);
        else throw new Error(`Failed to find address for index ${o} in address lookup table ${r.accountKey.toBase58()}`);
      }
      return n;
    }
    static compile(e) {
      const n = Sn.compile(e.instructions, e.payerKey), r = new Array(), u = {
        writable: new Array(),
        readonly: new Array()
      }, o = e.addressLookupTableAccounts || [];
      for (const R of o) {
        const x = n.extractTableLookup(R);
        if (x !== void 0) {
          const [P, { writable: C, readonly: _ }] = x;
          r.push(P), u.writable.push(...C), u.readonly.push(..._);
        }
      }
      const [g, w] = n.getMessageComponents(), b = new Jt(w, u).compileInstructions(e.instructions);
      return new jt({
        header: g,
        staticAccountKeys: w,
        recentBlockhash: e.recentBlockhash,
        compiledInstructions: b,
        addressTableLookups: r
      });
    }
    serialize() {
      const e = Array();
      tt(e, this.staticAccountKeys.length);
      const n = this.serializeInstructions(), r = Array();
      tt(r, this.compiledInstructions.length);
      const u = this.serializeAddressTableLookups(), o = Array();
      tt(o, this.addressTableLookups.length);
      const g = l.struct([
        l.u8("prefix"),
        l.struct([
          l.u8("numRequiredSignatures"),
          l.u8("numReadonlySignedAccounts"),
          l.u8("numReadonlyUnsignedAccounts")
        ], "header"),
        l.blob(e.length, "staticAccountKeysLength"),
        l.seq(q(), this.staticAccountKeys.length, "staticAccountKeys"),
        q("recentBlockhash"),
        l.blob(r.length, "instructionsLength"),
        l.blob(n.length, "serializedInstructions"),
        l.blob(o.length, "addressTableLookupsLength"),
        l.blob(u.length, "serializedAddressTableLookups")
      ]), w = new Uint8Array(Wt), b = g.encode({
        prefix: 128,
        header: this.header,
        staticAccountKeysLength: new Uint8Array(e),
        staticAccountKeys: this.staticAccountKeys.map((R) => R.toBytes()),
        recentBlockhash: $e.decode(this.recentBlockhash),
        instructionsLength: new Uint8Array(r),
        serializedInstructions: n,
        addressTableLookupsLength: new Uint8Array(o),
        serializedAddressTableLookups: u
      }, w);
      return w.slice(0, b);
    }
    serializeInstructions() {
      let e = 0;
      const n = new Uint8Array(Wt);
      for (const r of this.compiledInstructions) {
        const u = Array();
        tt(u, r.accountKeyIndexes.length);
        const o = Array();
        tt(o, r.data.length);
        const g = l.struct([
          l.u8("programIdIndex"),
          l.blob(u.length, "encodedAccountKeyIndexesLength"),
          l.seq(l.u8(), r.accountKeyIndexes.length, "accountKeyIndexes"),
          l.blob(o.length, "encodedDataLength"),
          l.blob(r.data.length, "data")
        ]);
        e += g.encode({
          programIdIndex: r.programIdIndex,
          encodedAccountKeyIndexesLength: new Uint8Array(u),
          accountKeyIndexes: r.accountKeyIndexes,
          encodedDataLength: new Uint8Array(o),
          data: r.data
        }, n, e);
      }
      return n.slice(0, e);
    }
    serializeAddressTableLookups() {
      let e = 0;
      const n = new Uint8Array(Wt);
      for (const r of this.addressTableLookups) {
        const u = Array();
        tt(u, r.writableIndexes.length);
        const o = Array();
        tt(o, r.readonlyIndexes.length);
        const g = l.struct([
          q("accountKey"),
          l.blob(u.length, "encodedWritableIndexesLength"),
          l.seq(l.u8(), r.writableIndexes.length, "writableIndexes"),
          l.blob(o.length, "encodedReadonlyIndexesLength"),
          l.seq(l.u8(), r.readonlyIndexes.length, "readonlyIndexes")
        ]);
        e += g.encode({
          accountKey: r.accountKey.toBytes(),
          encodedWritableIndexesLength: new Uint8Array(u),
          writableIndexes: r.writableIndexes,
          encodedReadonlyIndexesLength: new Uint8Array(o),
          readonlyIndexes: r.readonlyIndexes
        }, n, e);
      }
      return n.slice(0, e);
    }
    static deserialize(e) {
      let n = [
        ...e
      ];
      const r = De(n), u = r & vn;
      G(r !== u, "Expected versioned message but received legacy message");
      const o = u;
      G(o === 0, `Expected versioned message with version 0 but found version ${o}`);
      const g = {
        numRequiredSignatures: De(n),
        numReadonlySignedAccounts: De(n),
        numReadonlyUnsignedAccounts: De(n)
      }, w = [], S = et(n);
      for (let _ = 0; _ < S; _++) w.push(new A(Ve(n, 0, gt)));
      const b = $e.encode(Ve(n, 0, gt)), R = et(n), x = [];
      for (let _ = 0; _ < R; _++) {
        const B = De(n), z = et(n), U = Ve(n, 0, z), D = et(n), ue = new Uint8Array(Ve(n, 0, D));
        x.push({
          programIdIndex: B,
          accountKeyIndexes: U,
          data: ue
        });
      }
      const P = et(n), C = [];
      for (let _ = 0; _ < P; _++) {
        const B = new A(Ve(n, 0, gt)), z = et(n), U = Ve(n, 0, z), D = et(n), ue = Ve(n, 0, D);
        C.push({
          accountKey: B,
          writableIndexes: U,
          readonlyIndexes: ue
        });
      }
      return new jt({
        header: g,
        staticAccountKeys: w,
        recentBlockhash: b,
        compiledInstructions: x,
        addressTableLookups: C
      });
    }
  }
  const Yr = 3, to = 4, no = 8, ro = 16;
  function on(i) {
    const e = Ve(i, 0, 4);
    return e[0] + e[1] * 2 ** 8 + e[2] * 2 ** 16 + e[3] * 2 ** 24;
  }
  function io(i) {
    const e = Ve(i, 0, 8);
    let n = BigInt(0);
    for (let r = e.length - 1; r >= 0; r--) n = n << BigInt(8) | BigInt(e[r]);
    return G(n <= BigInt(Number.MAX_SAFE_INTEGER), "Expected u64 value to be within the safe integer range"), Number(n);
  }
  class lr {
    constructor(e) {
      this.header = void 0, this.staticAccountKeys = void 0, this.recentBlockhash = void 0, this.compiledInstructions = void 0, this.transactionConfig = void 0, this.header = e.header, this.staticAccountKeys = e.staticAccountKeys, this.recentBlockhash = e.recentBlockhash, this.compiledInstructions = e.compiledInstructions, this.transactionConfig = e.transactionConfig ?? {
        computeUnitLimit: null,
        heapSize: null,
        loadedAccountsDataSizeLimit: null,
        priorityFee: null
      };
    }
    get version() {
      return 1;
    }
    get addressTableLookups() {
      return [];
    }
    getAccountKeys() {
      return new Jt(this.staticAccountKeys);
    }
    isAccountSigner(e) {
      return e < this.header.numRequiredSignatures;
    }
    isAccountWritable(e) {
      const n = this.header.numRequiredSignatures, r = this.staticAccountKeys.length;
      if (e >= r) return false;
      if (e >= this.header.numRequiredSignatures) {
        const u = e - n, g = r - n - this.header.numReadonlyUnsignedAccounts;
        return u < g;
      } else {
        const u = n - this.header.numReadonlySignedAccounts;
        return e < u;
      }
    }
    serialize() {
      throw new Error("Serialization of version 1 transaction messages is not supported");
    }
    static deserialize(e) {
      let n = [
        ...e
      ];
      const r = De(n), u = r & vn;
      G(r !== u, "Expected versioned message but received legacy message");
      const o = u;
      G(o === 1, `Expected versioned message with version 1 but found version ${o}`);
      const g = {
        numRequiredSignatures: De(n),
        numReadonlySignedAccounts: De(n),
        numReadonlyUnsignedAccounts: De(n)
      }, w = on(n);
      G((w & -32) === 0, "Unexpected bits set in the transaction config mask");
      const S = w & Yr;
      G(S === 0 || S === Yr, "Expected both or neither of the priority fee bits to be set in the transaction config mask");
      const b = $e.encode(Ve(n, 0, gt)), R = De(n), x = De(n), P = [];
      for (let z = 0; z < x; z++) P.push(new A(Ve(n, 0, gt)));
      const C = {
        computeUnitLimit: null,
        heapSize: null,
        loadedAccountsDataSizeLimit: null,
        priorityFee: null
      };
      S !== 0 && (C.priorityFee = io(n)), w & to && (C.computeUnitLimit = on(n)), w & no && (C.loadedAccountsDataSizeLimit = on(n)), w & ro && (C.heapSize = on(n));
      const _ = [];
      for (let z = 0; z < R; z++) {
        const U = De(n), D = De(n), ue = De(n) + De(n) * 256;
        _.push({
          accountKeyIndexesLength: D,
          dataLength: ue,
          programIdIndex: U
        });
      }
      const B = [];
      for (const z of _) B.push({
        programIdIndex: z.programIdIndex,
        accountKeyIndexes: Ve(n, 0, z.accountKeyIndexesLength),
        data: new Uint8Array(Ve(n, 0, z.dataLength))
      });
      return G(n.length === 0, "Expected no bytes to remain after deserializing a version 1 message"), new lr({
        header: g,
        staticAccountKeys: P,
        recentBlockhash: b,
        compiledInstructions: B,
        transactionConfig: C
      });
    }
  }
  const ir = {
    deserializeMessageVersion(i) {
      const e = i[0], n = e & vn;
      return n === e ? "legacy" : n;
    },
    deserialize: (i) => {
      const e = ir.deserializeMessageVersion(i);
      if (e === "legacy") return Tt.from(i);
      if (e === 0) return jt.deserialize(i);
      if (e === 1) return lr.deserialize(i);
      throw new Error(`Transaction message version ${e} deserialization is not supported`);
    }
  }, so = F.alloc(It).fill(0);
  class Ge {
    constructor(e) {
      this.keys = void 0, this.programId = void 0, this.data = F.alloc(0), this.programId = e.programId, this.keys = e.keys, e.data && (this.data = e.data);
    }
    toJSON() {
      return {
        keys: this.keys.map(({ pubkey: e, isSigner: n, isWritable: r }) => ({
          pubkey: e.toJSON(),
          isSigner: n,
          isWritable: r
        })),
        programId: this.programId.toJSON(),
        data: [
          ...this.data
        ]
      };
    }
  }
  class ut {
    get signature() {
      return this.signatures.length > 0 ? this.signatures[0].signature : null;
    }
    constructor(e) {
      if (this.signatures = [], this.feePayer = void 0, this.instructions = [], this.recentBlockhash = void 0, this.lastValidBlockHeight = void 0, this.nonceInfo = void 0, this.minNonceContextSlot = void 0, this._message = void 0, this._json = void 0, !!e) if (e.feePayer && (this.feePayer = e.feePayer), e.signatures && (this.signatures = e.signatures), Object.prototype.hasOwnProperty.call(e, "nonceInfo")) {
        const { minContextSlot: n, nonceInfo: r } = e;
        this.minNonceContextSlot = n, this.nonceInfo = r;
      } else if (Object.prototype.hasOwnProperty.call(e, "lastValidBlockHeight")) {
        const { blockhash: n, lastValidBlockHeight: r } = e;
        this.recentBlockhash = n, this.lastValidBlockHeight = r;
      } else {
        const { recentBlockhash: n, nonceInfo: r } = e;
        r && (this.nonceInfo = r), this.recentBlockhash = n;
      }
    }
    toJSON() {
      return {
        recentBlockhash: this.recentBlockhash || null,
        feePayer: this.feePayer ? this.feePayer.toJSON() : null,
        nonceInfo: this.nonceInfo ? {
          nonce: this.nonceInfo.nonce,
          nonceInstruction: this.nonceInfo.nonceInstruction.toJSON()
        } : null,
        instructions: this.instructions.map((e) => e.toJSON()),
        signers: this.signatures.map(({ publicKey: e }) => e.toJSON())
      };
    }
    add(...e) {
      if (e.length === 0) throw new Error("No instructions");
      return e.forEach((n) => {
        "instructions" in n ? this.instructions = this.instructions.concat(n.instructions) : "data" in n && "programId" in n && "keys" in n ? this.instructions.push(n) : this.instructions.push(new Ge(n));
      }), this;
    }
    compileMessage() {
      if (this._message && JSON.stringify(this.toJSON()) === JSON.stringify(this._json)) return this._message;
      let e, n;
      if (this.nonceInfo ? (e = this.nonceInfo.nonce, this.instructions[0] != this.nonceInfo.nonceInstruction ? n = [
        this.nonceInfo.nonceInstruction,
        ...this.instructions
      ] : n = this.instructions) : (e = this.recentBlockhash, n = this.instructions), !e) throw new Error("Transaction recentBlockhash required");
      n.length < 1 && console.warn("No instructions provided");
      let r;
      if (this.feePayer) r = this.feePayer;
      else if (this.signatures.length > 0 && this.signatures[0].publicKey) r = this.signatures[0].publicKey;
      else throw new Error("Transaction fee payer required");
      for (let B = 0; B < n.length; B++) if (n[B].programId === void 0) throw new Error(`Transaction instruction index ${B} has undefined program id`);
      const u = [], o = [];
      n.forEach((B) => {
        B.keys.forEach((U) => {
          o.push({
            ...U
          });
        });
        const z = B.programId.toString();
        u.includes(z) || u.push(z);
      }), u.forEach((B) => {
        o.push({
          pubkey: new A(B),
          isSigner: false,
          isWritable: false
        });
      });
      const g = [];
      o.forEach((B) => {
        const z = B.pubkey.toString(), U = g.findIndex((D) => D.pubkey.toString() === z);
        U > -1 ? (g[U].isWritable = g[U].isWritable || B.isWritable, g[U].isSigner = g[U].isSigner || B.isSigner) : g.push(B);
      }), g.sort(function(B, z) {
        if (B.isSigner !== z.isSigner) return B.isSigner ? -1 : 1;
        if (B.isWritable !== z.isWritable) return B.isWritable ? -1 : 1;
        const U = {
          localeMatcher: "best fit",
          usage: "sort",
          sensitivity: "variant",
          ignorePunctuation: false,
          numeric: false,
          caseFirst: "lower"
        };
        return B.pubkey.toBase58().localeCompare(z.pubkey.toBase58(), "en", U);
      });
      const w = g.findIndex((B) => B.pubkey.equals(r));
      if (w > -1) {
        const [B] = g.splice(w, 1);
        B.isSigner = true, B.isWritable = true, g.unshift(B);
      } else g.unshift({
        pubkey: r,
        isSigner: true,
        isWritable: true
      });
      for (const B of this.signatures) {
        const z = g.findIndex((U) => U.pubkey.equals(B.publicKey));
        if (z > -1) g[z].isSigner || (g[z].isSigner = true, console.warn("Transaction references a signature that is unnecessary, only the fee payer and instruction signer accounts should sign a transaction. This behavior is deprecated and will throw an error in the next major version release."));
        else throw new Error(`unknown signer: ${B.publicKey.toString()}`);
      }
      let S = 0, b = 0, R = 0;
      const x = [], P = [];
      g.forEach(({ pubkey: B, isSigner: z, isWritable: U }) => {
        z ? (x.push(B.toString()), S += 1, U || (b += 1)) : (P.push(B.toString()), U || (R += 1));
      });
      const C = x.concat(P), _ = n.map((B) => {
        const { data: z, programId: U } = B;
        return {
          programIdIndex: C.indexOf(U.toString()),
          accounts: B.keys.map((D) => C.indexOf(D.pubkey.toString())),
          data: $e.encode(z)
        };
      });
      return _.forEach((B) => {
        G(B.programIdIndex >= 0), B.accounts.forEach((z) => G(z >= 0));
      }), new Tt({
        header: {
          numRequiredSignatures: S,
          numReadonlySignedAccounts: b,
          numReadonlyUnsignedAccounts: R
        },
        accountKeys: C,
        recentBlockhash: e,
        instructions: _
      });
    }
    _compile() {
      const e = this.compileMessage(), n = e.accountKeys.slice(0, e.header.numRequiredSignatures);
      return this.signatures.length === n.length && this.signatures.every((u, o) => n[o].equals(u.publicKey)) || (this.signatures = n.map((r) => ({
        signature: null,
        publicKey: r
      }))), e;
    }
    serializeMessage() {
      return this._compile().serialize();
    }
    async getEstimatedFee(e) {
      return (await e.getFeeForMessage(this.compileMessage())).value;
    }
    setSigners(...e) {
      if (e.length === 0) throw new Error("No signers");
      const n = /* @__PURE__ */ new Set();
      this.signatures = e.filter((r) => {
        const u = r.toString();
        return n.has(u) ? false : (n.add(u), true);
      }).map((r) => ({
        signature: null,
        publicKey: r
      }));
    }
    sign(...e) {
      if (e.length === 0) throw new Error("No signers");
      const n = /* @__PURE__ */ new Set(), r = [];
      for (const o of e) {
        const g = o.publicKey.toString();
        n.has(g) || (n.add(g), r.push(o));
      }
      this.signatures = r.map((o) => ({
        signature: null,
        publicKey: o.publicKey
      }));
      const u = this._compile();
      this._partialSign(u, ...r);
    }
    partialSign(...e) {
      if (e.length === 0) throw new Error("No signers");
      const n = /* @__PURE__ */ new Set(), r = [];
      for (const o of e) {
        const g = o.publicKey.toString();
        n.has(g) || (n.add(g), r.push(o));
      }
      const u = this._compile();
      this._partialSign(u, ...r);
    }
    _partialSign(e, ...n) {
      const r = e.serialize();
      n.forEach((u) => {
        const o = bi(r, u.secretKey);
        this._addSignature(u.publicKey, Je(o));
      });
    }
    addSignature(e, n) {
      this._compile(), this._addSignature(e, n);
    }
    _addSignature(e, n) {
      G(n.length === 64);
      const r = this.signatures.findIndex((u) => e.equals(u.publicKey));
      if (r < 0) throw new Error(`unknown signer: ${e.toString()}`);
      this.signatures[r].signature = F.from(n);
    }
    verifySignatures(e = true) {
      return !this._getMessageSignednessErrors(this.serializeMessage(), e);
    }
    _getMessageSignednessErrors(e, n) {
      const r = {};
      for (const { signature: u, publicKey: o } of this.signatures) u === null ? n && (r.missing || (r.missing = [])).push(o) : Hs(u, e, o.toBytes()) || (r.invalid || (r.invalid = [])).push(o);
      return r.invalid || r.missing ? r : void 0;
    }
    serialize(e) {
      const { requireAllSignatures: n, verifySignatures: r } = Object.assign({
        requireAllSignatures: true,
        verifySignatures: true
      }, e), u = this.serializeMessage();
      if (r) {
        const o = this._getMessageSignednessErrors(u, n);
        if (o) {
          let g = "Signature verification failed.";
          throw o.invalid && (g += `
Invalid signature for public key${o.invalid.length === 1 ? "" : "(s)"} [\`${o.invalid.map((w) => w.toBase58()).join("`, `")}\`].`), o.missing && (g += `
Missing signature for public key${o.missing.length === 1 ? "" : "(s)"} [\`${o.missing.map((w) => w.toBase58()).join("`, `")}\`].`), new Error(g);
        }
      }
      return this._serialize(u);
    }
    _serialize(e) {
      const { signatures: n } = this, r = [];
      tt(r, n.length);
      const u = r.length + n.length * 64 + e.length, o = F.alloc(u);
      return G(n.length < 256), F.from(r).copy(o, 0), n.forEach(({ signature: g }, w) => {
        g !== null && (G(g.length === 64, "signature has invalid length"), F.from(g).copy(o, r.length + w * 64));
      }), e.copy(o, r.length + n.length * 64), G(o.length <= Wt, `Transaction too large: ${o.length} > ${Wt}`), o;
    }
    get keys() {
      return G(this.instructions.length === 1), this.instructions[0].keys.map((e) => e.pubkey);
    }
    get programId() {
      return G(this.instructions.length === 1), this.instructions[0].programId;
    }
    get data() {
      return G(this.instructions.length === 1), this.instructions[0].data;
    }
    static from(e) {
      let n = [
        ...e
      ];
      const r = et(n);
      let u = [];
      for (let o = 0; o < r; o++) {
        const g = Ve(n, 0, It);
        u.push($e.encode(F.from(g)));
      }
      return ut.populate(Tt.from(n), u);
    }
    static populate(e, n = []) {
      const r = new ut();
      return r.recentBlockhash = e.recentBlockhash, e.header.numRequiredSignatures > 0 && (r.feePayer = e.accountKeys[0]), n.forEach((u, o) => {
        const g = {
          signature: u == $e.encode(so) ? null : $e.decode(u),
          publicKey: e.accountKeys[o]
        };
        r.signatures.push(g);
      }), e.instructions.forEach((u) => {
        const o = u.accounts.map((g) => {
          const w = e.accountKeys[g];
          return {
            pubkey: w,
            isSigner: r.signatures.some((S) => S.publicKey.toString() === w.toString()) || e.isAccountSigner(g),
            isWritable: e.isAccountWritable(g)
          };
        });
        r.instructions.push(new Ge({
          keys: o,
          programId: e.accountKeys[u.programIdIndex],
          data: $e.decode(u.data)
        }));
      }), r._message = e, r._json = r.toJSON(), r;
    }
  }
  class hn {
    constructor(e) {
      this.payerKey = void 0, this.instructions = void 0, this.recentBlockhash = void 0, this.payerKey = e.payerKey, this.instructions = e.instructions, this.recentBlockhash = e.recentBlockhash;
    }
    static decompile(e, n) {
      const { header: r, compiledInstructions: u, recentBlockhash: o } = e, { numRequiredSignatures: g, numReadonlySignedAccounts: w, numReadonlyUnsignedAccounts: S } = r, b = g - w;
      G(b > 0, "Message header is invalid");
      const R = e.staticAccountKeys.length - g - S;
      G(R >= 0, "Message header is invalid");
      const x = e.getAccountKeys(n), P = x.get(0);
      if (P === void 0) throw new Error("Failed to decompile message because no account keys were found");
      const C = [];
      for (const _ of u) {
        const B = [];
        for (const U of _.accountKeyIndexes) {
          const D = x.get(U);
          if (D === void 0) throw new Error(`Failed to find key for account key index ${U}`);
          const ue = U < g;
          let V;
          ue ? V = U < b : U < x.staticAccountKeys.length ? V = U - g < R : V = U - x.staticAccountKeys.length < x.accountKeysFromLookups.writable.length, B.push({
            pubkey: D,
            isSigner: U < r.numRequiredSignatures,
            isWritable: V
          });
        }
        const z = x.get(_.programIdIndex);
        if (z === void 0) throw new Error(`Failed to find program id for program id index ${_.programIdIndex}`);
        C.push(new Ge({
          programId: z,
          data: Je(_.data),
          keys: B
        }));
      }
      return new hn({
        payerKey: P,
        instructions: C,
        recentBlockhash: o
      });
    }
    compileToLegacyMessage() {
      return Tt.compile({
        payerKey: this.payerKey,
        recentBlockhash: this.recentBlockhash,
        instructions: this.instructions
      });
    }
    compileToV0Message(e) {
      return jt.compile({
        payerKey: this.payerKey,
        recentBlockhash: this.recentBlockhash,
        instructions: this.instructions,
        addressLookupTableAccounts: e
      });
    }
  }
  class Xt {
    get version() {
      return this.message.version;
    }
    constructor(e, n) {
      if (this.signatures = void 0, this.message = void 0, n !== void 0) G(n.length === e.header.numRequiredSignatures, "Expected signatures length to be equal to the number of required signatures"), this.signatures = n;
      else {
        const r = [];
        for (let u = 0; u < e.header.numRequiredSignatures; u++) r.push(new Uint8Array(It));
        this.signatures = r;
      }
      this.message = e;
    }
    serialize() {
      const e = this.message.serialize(), n = Array();
      tt(n, this.signatures.length);
      const r = l.struct([
        l.blob(n.length, "encodedSignaturesLength"),
        l.seq(Js(), this.signatures.length, "signatures"),
        l.blob(e.length, "serializedMessage")
      ]), u = new Uint8Array(2048), o = r.encode({
        encodedSignaturesLength: new Uint8Array(n),
        signatures: this.signatures,
        serializedMessage: e
      }, u);
      return u.slice(0, o);
    }
    static deserialize(e) {
      if (e[0] === Ys) return this.deserializeV1(e);
      let n = [
        ...e
      ];
      const r = [], u = et(n);
      for (let g = 0; g < u; g++) r.push(new Uint8Array(Ve(n, 0, It)));
      const o = ir.deserialize(new Uint8Array(n));
      return new Xt(o, r);
    }
    static deserializeV1(e) {
      const n = e[1], r = n * It, u = e.length - r;
      G(u > 0, "Expected transaction to have enough bytes for its signatures");
      const o = ir.deserialize(e.slice(0, u)), g = [];
      for (let w = 0; w < n; w++) {
        const S = u + w * It;
        g.push(e.slice(S, S + It));
      }
      return new Xt(o, g);
    }
    sign(e) {
      const n = this.message.serialize(), r = this.message.staticAccountKeys.slice(0, this.message.header.numRequiredSignatures);
      for (const u of e) {
        const o = r.findIndex((g) => g.equals(u.publicKey));
        G(o >= 0, `Cannot sign with non signer key ${u.publicKey.toBase58()}`), this.signatures[o] = bi(n, u.secretKey);
      }
    }
    addSignature(e, n) {
      G(n.byteLength === 64, "Signature must be 64 bytes long");
      const u = this.message.staticAccountKeys.slice(0, this.message.header.numRequiredSignatures).findIndex((o) => o.equals(e));
      G(u >= 0, `Can not add signature; \`${e.toBase58()}\` is not required to sign this transaction`), this.signatures[u] = n;
    }
  }
  const sr = new A("SysvarC1ock11111111111111111111111111111111");
  new A("SysvarEpochSchedu1e111111111111111111111111");
  new A("Sysvar1nstructions1111111111111111111111111");
  const Yn = new A("SysvarRecentB1ockHashes11111111111111111111"), Ye = new A("SysvarRent111111111111111111111111111111111");
  new A("SysvarRewards111111111111111111111111111111");
  new A("SysvarS1otHashes111111111111111111111111111");
  new A("SysvarS1otHistory11111111111111111111111111");
  new A("SysvarStakeHistory1111111111111111111111111");
  function it(i, e) {
    const n = i.layout.span >= 0 ? i.layout.span : Ii(i, e), r = F.alloc(n), u = Object.assign({
      instruction: i.index
    }, e);
    return i.layout.encode(u, r), r;
  }
  const oo = l.nu64("lamportsPerSignature"), ao = l.struct([
    l.u32("version"),
    l.u32("state"),
    q("authorizedPubkey"),
    q("nonce"),
    l.struct([
      oo
    ], "feeCalculator")
  ]), Jr = ao.span;
  function Ot(i) {
    const e = l.blob(8, i), n = e.decode.bind(e), r = e.encode.bind(e), u = e, o = Vs();
    return u.decode = (g, w) => {
      const S = n(g, w);
      return o.decode(S);
    }, u.encode = (g, w, S) => {
      const b = o.encode(g);
      return r(b, w, S);
    }, u;
  }
  const st = Object.freeze({
    Create: {
      index: 0,
      layout: l.struct([
        l.u32("instruction"),
        l.ns64("lamports"),
        l.ns64("space"),
        q("programId")
      ])
    },
    Assign: {
      index: 1,
      layout: l.struct([
        l.u32("instruction"),
        q("programId")
      ])
    },
    Transfer: {
      index: 2,
      layout: l.struct([
        l.u32("instruction"),
        Ot("lamports")
      ])
    },
    CreateWithSeed: {
      index: 3,
      layout: l.struct([
        l.u32("instruction"),
        q("base"),
        Kt("seed"),
        l.ns64("lamports"),
        l.ns64("space"),
        q("programId")
      ])
    },
    AdvanceNonceAccount: {
      index: 4,
      layout: l.struct([
        l.u32("instruction")
      ])
    },
    WithdrawNonceAccount: {
      index: 5,
      layout: l.struct([
        l.u32("instruction"),
        l.ns64("lamports")
      ])
    },
    InitializeNonceAccount: {
      index: 6,
      layout: l.struct([
        l.u32("instruction"),
        q("authorized")
      ])
    },
    AuthorizeNonceAccount: {
      index: 7,
      layout: l.struct([
        l.u32("instruction"),
        q("authorized")
      ])
    },
    Allocate: {
      index: 8,
      layout: l.struct([
        l.u32("instruction"),
        l.ns64("space")
      ])
    },
    AllocateWithSeed: {
      index: 9,
      layout: l.struct([
        l.u32("instruction"),
        q("base"),
        Kt("seed"),
        l.ns64("space"),
        q("programId")
      ])
    },
    AssignWithSeed: {
      index: 10,
      layout: l.struct([
        l.u32("instruction"),
        q("base"),
        Kt("seed"),
        q("programId")
      ])
    },
    TransferWithSeed: {
      index: 11,
      layout: l.struct([
        l.u32("instruction"),
        Ot("lamports"),
        Kt("seed"),
        q("programId")
      ])
    },
    UpgradeNonceAccount: {
      index: 12,
      layout: l.struct([
        l.u32("instruction")
      ])
    }
  });
  class te {
    constructor() {
    }
    static createAccount(e) {
      const n = st.Create, r = it(n, {
        lamports: e.lamports,
        space: e.space,
        programId: Je(e.programId.toBuffer())
      });
      return new Ge({
        keys: [
          {
            pubkey: e.fromPubkey,
            isSigner: true,
            isWritable: true
          },
          {
            pubkey: e.newAccountPubkey,
            isSigner: true,
            isWritable: true
          }
        ],
        programId: this.programId,
        data: r
      });
    }
    static transfer(e) {
      let n, r;
      if ("basePubkey" in e) {
        const u = st.TransferWithSeed;
        n = it(u, {
          lamports: BigInt(e.lamports),
          seed: e.seed,
          programId: Je(e.programId.toBuffer())
        }), r = [
          {
            pubkey: e.fromPubkey,
            isSigner: false,
            isWritable: true
          },
          {
            pubkey: e.basePubkey,
            isSigner: true,
            isWritable: false
          },
          {
            pubkey: e.toPubkey,
            isSigner: false,
            isWritable: true
          }
        ];
      } else {
        const u = st.Transfer;
        n = it(u, {
          lamports: BigInt(e.lamports)
        }), r = [
          {
            pubkey: e.fromPubkey,
            isSigner: true,
            isWritable: true
          },
          {
            pubkey: e.toPubkey,
            isSigner: false,
            isWritable: true
          }
        ];
      }
      return new Ge({
        keys: r,
        programId: this.programId,
        data: n
      });
    }
    static assign(e) {
      let n, r;
      if ("basePubkey" in e) {
        const u = st.AssignWithSeed;
        n = it(u, {
          base: Je(e.basePubkey.toBuffer()),
          seed: e.seed,
          programId: Je(e.programId.toBuffer())
        }), r = [
          {
            pubkey: e.accountPubkey,
            isSigner: false,
            isWritable: true
          },
          {
            pubkey: e.basePubkey,
            isSigner: true,
            isWritable: false
          }
        ];
      } else {
        const u = st.Assign;
        n = it(u, {
          programId: Je(e.programId.toBuffer())
        }), r = [
          {
            pubkey: e.accountPubkey,
            isSigner: true,
            isWritable: true
          }
        ];
      }
      return new Ge({
        keys: r,
        programId: this.programId,
        data: n
      });
    }
    static createAccountWithSeed(e) {
      const n = st.CreateWithSeed, r = it(n, {
        base: Je(e.basePubkey.toBuffer()),
        seed: e.seed,
        lamports: e.lamports,
        space: e.space,
        programId: Je(e.programId.toBuffer())
      });
      let u = [
        {
          pubkey: e.fromPubkey,
          isSigner: true,
          isWritable: true
        },
        {
          pubkey: e.newAccountPubkey,
          isSigner: false,
          isWritable: true
        }
      ];
      return e.basePubkey.equals(e.fromPubkey) || u.push({
        pubkey: e.basePubkey,
        isSigner: true,
        isWritable: false
      }), new Ge({
        keys: u,
        programId: this.programId,
        data: r
      });
    }
    static createNonceAccount(e) {
      const n = new ut();
      "basePubkey" in e && "seed" in e ? n.add(te.createAccountWithSeed({
        fromPubkey: e.fromPubkey,
        newAccountPubkey: e.noncePubkey,
        basePubkey: e.basePubkey,
        seed: e.seed,
        lamports: e.lamports,
        space: Jr,
        programId: this.programId
      })) : n.add(te.createAccount({
        fromPubkey: e.fromPubkey,
        newAccountPubkey: e.noncePubkey,
        lamports: e.lamports,
        space: Jr,
        programId: this.programId
      }));
      const r = {
        noncePubkey: e.noncePubkey,
        authorizedPubkey: e.authorizedPubkey
      };
      return n.add(this.nonceInitialize(r)), n;
    }
    static nonceInitialize(e) {
      const n = st.InitializeNonceAccount, r = it(n, {
        authorized: Je(e.authorizedPubkey.toBuffer())
      }), u = {
        keys: [
          {
            pubkey: e.noncePubkey,
            isSigner: false,
            isWritable: true
          },
          {
            pubkey: Yn,
            isSigner: false,
            isWritable: false
          },
          {
            pubkey: Ye,
            isSigner: false,
            isWritable: false
          }
        ],
        programId: this.programId,
        data: r
      };
      return new Ge(u);
    }
    static nonceAdvance(e) {
      const n = st.AdvanceNonceAccount, r = it(n), u = {
        keys: [
          {
            pubkey: e.noncePubkey,
            isSigner: false,
            isWritable: true
          },
          {
            pubkey: Yn,
            isSigner: false,
            isWritable: false
          },
          {
            pubkey: e.authorizedPubkey,
            isSigner: true,
            isWritable: false
          }
        ],
        programId: this.programId,
        data: r
      };
      return new Ge(u);
    }
    static nonceWithdraw(e) {
      const n = st.WithdrawNonceAccount, r = it(n, {
        lamports: e.lamports
      });
      return new Ge({
        keys: [
          {
            pubkey: e.noncePubkey,
            isSigner: false,
            isWritable: true
          },
          {
            pubkey: e.toPubkey,
            isSigner: false,
            isWritable: true
          },
          {
            pubkey: Yn,
            isSigner: false,
            isWritable: false
          },
          {
            pubkey: Ye,
            isSigner: false,
            isWritable: false
          },
          {
            pubkey: e.authorizedPubkey,
            isSigner: true,
            isWritable: false
          }
        ],
        programId: this.programId,
        data: r
      });
    }
    static nonceAuthorize(e) {
      const n = st.AuthorizeNonceAccount, r = it(n, {
        authorized: Je(e.newAuthorizedPubkey.toBuffer())
      });
      return new Ge({
        keys: [
          {
            pubkey: e.noncePubkey,
            isSigner: false,
            isWritable: true
          },
          {
            pubkey: e.authorizedPubkey,
            isSigner: true,
            isWritable: false
          }
        ],
        programId: this.programId,
        data: r
      });
    }
    static allocate(e) {
      let n, r;
      if ("basePubkey" in e) {
        const u = st.AllocateWithSeed;
        n = it(u, {
          base: Je(e.basePubkey.toBuffer()),
          seed: e.seed,
          space: e.space,
          programId: Je(e.programId.toBuffer())
        }), r = [
          {
            pubkey: e.accountPubkey,
            isSigner: false,
            isWritable: true
          },
          {
            pubkey: e.basePubkey,
            isSigner: true,
            isWritable: false
          }
        ];
      } else {
        const u = st.Allocate;
        n = it(u, {
          space: e.space
        }), r = [
          {
            pubkey: e.accountPubkey,
            isSigner: true,
            isWritable: true
          }
        ];
      }
      return new Ge({
        keys: r,
        programId: this.programId,
        data: n
      });
    }
  }
  te.programId = new A("11111111111111111111111111111111");
  new A("BPFLoader2111111111111111111111111111111111");
  l.struct([
    l.u32("typeIndex"),
    Ot("deactivationSlot"),
    l.nu64("lastExtendedSlot"),
    l.u8("lastExtendedStartIndex"),
    l.u8(),
    l.seq(q(), l.offset(l.u8(), -1), "authority")
  ]);
  const se = tn(ur(A), I(), (i) => new A(i)), Bi = cr([
    I(),
    ee("base64")
  ]), dr = tn(ur(F), Bi, (i) => F.from(i[0], "base64"));
  function Ei(i) {
    return je([
      k({
        jsonrpc: ee("2.0"),
        id: I(),
        result: i
      }),
      k({
        jsonrpc: ee("2.0"),
        id: I(),
        error: k({
          code: Dt(),
          message: I(),
          data: K(ss())
        })
      })
    ]);
  }
  const uo = Ei(Dt());
  function X(i) {
    return tn(Ei(i), uo, (e) => "error" in e ? e : {
      ...e,
      result: ln(e.result, i)
    });
  }
  function ht(i) {
    return X(k({
      context: k({
        slot: v()
      }),
      value: i
    }));
  }
  function An(i) {
    return k({
      context: k({
        slot: v()
      }),
      value: i
    });
  }
  const co = k({
    foundation: v(),
    foundationTerm: v(),
    initial: v(),
    taper: v(),
    terminal: v()
  });
  X(T(E(k({
    epoch: v(),
    effectiveSlot: v(),
    amount: v(),
    postBalance: v(),
    commission: K(E(v()))
  }))));
  const lo = T(k({
    slot: v(),
    prioritizationFee: v()
  })), ho = k({
    total: v(),
    validator: v(),
    foundation: v(),
    epoch: v()
  }), fo = k({
    epoch: v(),
    slotIndex: v(),
    slotsInEpoch: v(),
    absoluteSlot: v(),
    blockHeight: K(v()),
    transactionCount: K(v())
  }), go = k({
    slotsPerEpoch: v(),
    leaderScheduleSlotOffset: v(),
    warmup: mt(),
    firstNormalEpoch: v(),
    firstNormalSlot: v()
  }), mo = mi(I(), T(v())), Pt = E(je([
    k({}),
    I()
  ])), po = k({
    err: Pt
  }), yo = ee("receivedSignature");
  k({
    "solana-core": I(),
    "feature-set": K(v())
  });
  const wo = k({
    program: I(),
    programId: se,
    parsed: Dt()
  }), Mo = k({
    programId: se,
    accounts: T(se),
    data: I()
  });
  ht(k({
    err: E(je([
      k({}),
      I()
    ])),
    logs: E(T(I())),
    accounts: K(E(T(E(k({
      executable: mt(),
      owner: I(),
      lamports: v(),
      data: T(I()),
      rentEpoch: K(v())
    }))))),
    unitsConsumed: K(v()),
    returnData: K(E(k({
      programId: I(),
      data: cr([
        I(),
        ee("base64")
      ])
    }))),
    innerInstructions: K(E(T(k({
      index: v(),
      instructions: T(je([
        wo,
        Mo
      ]))
    }))))
  }));
  ht(k({
    byIdentity: mi(I(), T(v())),
    range: k({
      firstSlot: v(),
      lastSlot: v()
    })
  }));
  X(co);
  X(ho);
  X(lo);
  X(fo);
  X(go);
  X(mo);
  X(v());
  ht(k({
    total: v(),
    circulating: v(),
    nonCirculating: v(),
    nonCirculatingAccounts: T(se)
  }));
  const vo = k({
    amount: I(),
    uiAmount: E(v()),
    decimals: v(),
    uiAmountString: K(I())
  });
  ht(T(k({
    address: se,
    amount: I(),
    uiAmount: E(v()),
    decimals: v(),
    uiAmountString: K(I())
  })));
  ht(T(k({
    pubkey: se,
    account: k({
      executable: mt(),
      owner: se,
      lamports: v(),
      data: dr,
      rentEpoch: v()
    })
  })));
  const or = k({
    program: I(),
    parsed: Dt(),
    space: v()
  });
  ht(T(k({
    pubkey: se,
    account: k({
      executable: mt(),
      owner: se,
      lamports: v(),
      data: or,
      rentEpoch: v()
    })
  })));
  ht(T(k({
    lamports: v(),
    address: se
  })));
  const hr = k({
    executable: mt(),
    owner: se,
    lamports: v(),
    data: dr,
    rentEpoch: v()
  });
  k({
    pubkey: se,
    account: hr
  });
  const So = tn(je([
    ur(F),
    or
  ]), je([
    Bi,
    or
  ]), (i) => Array.isArray(i) ? ln(i, dr) : i), Ao = k({
    executable: mt(),
    owner: se,
    lamports: v(),
    data: So,
    rentEpoch: v()
  });
  k({
    pubkey: se,
    account: Ao
  });
  k({
    state: je([
      ee("active"),
      ee("inactive"),
      ee("activating"),
      ee("deactivating")
    ]),
    active: v(),
    inactive: v()
  });
  X(T(k({
    signature: I(),
    slot: v(),
    err: Pt,
    memo: E(I()),
    blockTime: K(E(v()))
  })));
  X(T(k({
    signature: I(),
    slot: v(),
    err: Pt,
    memo: E(I()),
    blockTime: K(E(v()))
  })));
  k({
    subscription: v(),
    result: An(hr)
  });
  const bo = k({
    pubkey: se,
    account: hr
  });
  k({
    subscription: v(),
    result: An(bo)
  });
  const ko = k({
    parent: v(),
    slot: v(),
    root: v()
  });
  k({
    subscription: v(),
    result: ko
  });
  const Io = je([
    k({
      type: je([
        ee("firstShredReceived"),
        ee("completed"),
        ee("optimisticConfirmation"),
        ee("root")
      ]),
      slot: v(),
      timestamp: v()
    }),
    k({
      type: ee("createdBank"),
      parent: v(),
      slot: v(),
      timestamp: v()
    }),
    k({
      type: ee("frozen"),
      slot: v(),
      timestamp: v(),
      stats: k({
        numTransactionEntries: v(),
        numSuccessfulTransactions: v(),
        numFailedTransactions: v(),
        maxTransactionsPerEntry: v()
      })
    }),
    k({
      type: ee("dead"),
      slot: v(),
      timestamp: v(),
      err: I()
    })
  ]);
  k({
    subscription: v(),
    result: Io
  });
  k({
    subscription: v(),
    result: An(je([
      po,
      yo
    ]))
  });
  k({
    subscription: v(),
    result: v()
  });
  k({
    pubkey: I(),
    gossip: E(I()),
    tpu: E(I()),
    rpc: E(I()),
    version: E(I())
  });
  const jr = k({
    votePubkey: I(),
    nodePubkey: I(),
    activatedStake: v(),
    epochVoteAccount: mt(),
    epochCredits: T(cr([
      v(),
      v(),
      v()
    ])),
    commission: v(),
    lastVote: v(),
    rootSlot: E(v())
  });
  X(k({
    current: T(jr),
    delinquent: T(jr)
  }));
  const xo = je([
    ee("processed"),
    ee("confirmed"),
    ee("finalized")
  ]), Bo = k({
    slot: v(),
    confirmations: E(v()),
    err: Pt,
    confirmationStatus: K(xo)
  });
  ht(T(E(Bo)));
  X(v());
  const Ti = k({
    accountKey: se,
    writableIndexes: T(v()),
    readonlyIndexes: T(v())
  }), Pi = k({
    computeUnitLimit: E(v()),
    heapSize: E(v()),
    loadedAccountsDataSizeLimit: E(v()),
    priorityFee: E(v())
  }), fr = k({
    signatures: T(I()),
    message: k({
      accountKeys: T(I()),
      header: k({
        numRequiredSignatures: v(),
        numReadonlySignedAccounts: v(),
        numReadonlyUnsignedAccounts: v()
      }),
      instructions: T(k({
        accounts: T(v()),
        data: I(),
        programIdIndex: v()
      })),
      recentBlockhash: I(),
      addressTableLookups: K(T(Ti)),
      transactionConfig: K(E(Pi))
    })
  }), Ci = k({
    pubkey: se,
    signer: mt(),
    writable: mt(),
    source: K(je([
      ee("transaction"),
      ee("lookupTable")
    ]))
  }), _i = k({
    accountKeys: T(Ci),
    signatures: T(I())
  }), Ri = k({
    parsed: Dt(),
    program: I(),
    programId: se
  }), Li = k({
    accounts: T(se),
    data: I(),
    programId: se
  }), Eo = je([
    Li,
    Ri
  ]), To = je([
    k({
      parsed: Dt(),
      program: I(),
      programId: I()
    }),
    k({
      accounts: T(I()),
      data: I(),
      programId: I()
    })
  ]), zi = tn(Eo, To, (i) => "accounts" in i ? ln(i, Li) : ln(i, Ri)), Ki = k({
    signatures: T(I()),
    message: k({
      accountKeys: T(Ci),
      instructions: T(zi),
      recentBlockhash: I(),
      addressTableLookups: K(E(T(Ti))),
      transactionConfig: K(E(Pi))
    })
  }), fn = k({
    accountIndex: v(),
    mint: I(),
    owner: K(I()),
    programId: K(I()),
    uiTokenAmount: vo
  }), Ui = k({
    writable: T(se),
    readonly: T(se)
  }), bn = k({
    err: Pt,
    fee: v(),
    innerInstructions: K(E(T(k({
      index: v(),
      instructions: T(k({
        accounts: T(v()),
        data: I(),
        programIdIndex: v()
      }))
    })))),
    preBalances: T(v()),
    postBalances: T(v()),
    logMessages: K(E(T(I()))),
    preTokenBalances: K(E(T(fn))),
    postTokenBalances: K(E(T(fn))),
    loadedAddresses: K(Ui),
    computeUnitsConsumed: K(v()),
    costUnits: K(v())
  }), gr = k({
    err: Pt,
    fee: v(),
    innerInstructions: K(E(T(k({
      index: v(),
      instructions: T(zi)
    })))),
    preBalances: T(v()),
    postBalances: T(v()),
    logMessages: K(E(T(I()))),
    preTokenBalances: K(E(T(fn))),
    postTokenBalances: K(E(T(fn))),
    loadedAddresses: K(Ui),
    computeUnitsConsumed: K(v()),
    costUnits: K(v())
  }), Vt = je([
    ee(0),
    ee(1),
    ee("legacy")
  ]), Ct = k({
    pubkey: I(),
    lamports: v(),
    postBalance: E(v()),
    rewardType: E(I()),
    commission: K(E(v()))
  });
  X(E(k({
    blockhash: I(),
    previousBlockhash: I(),
    parentSlot: v(),
    transactions: T(k({
      transaction: fr,
      meta: E(bn),
      version: K(Vt)
    })),
    rewards: K(T(Ct)),
    blockTime: E(v()),
    blockHeight: E(v())
  })));
  X(E(k({
    blockhash: I(),
    previousBlockhash: I(),
    parentSlot: v(),
    rewards: K(T(Ct)),
    blockTime: E(v()),
    blockHeight: E(v())
  })));
  X(E(k({
    blockhash: I(),
    previousBlockhash: I(),
    parentSlot: v(),
    transactions: T(k({
      transaction: _i,
      meta: E(bn),
      version: K(Vt)
    })),
    rewards: K(T(Ct)),
    blockTime: E(v()),
    blockHeight: E(v())
  })));
  X(E(k({
    blockhash: I(),
    previousBlockhash: I(),
    parentSlot: v(),
    transactions: T(k({
      transaction: Ki,
      meta: E(gr),
      version: K(Vt)
    })),
    rewards: K(T(Ct)),
    blockTime: E(v()),
    blockHeight: E(v())
  })));
  X(E(k({
    blockhash: I(),
    previousBlockhash: I(),
    parentSlot: v(),
    transactions: T(k({
      transaction: _i,
      meta: E(gr),
      version: K(Vt)
    })),
    rewards: K(T(Ct)),
    blockTime: E(v()),
    blockHeight: E(v())
  })));
  X(E(k({
    blockhash: I(),
    previousBlockhash: I(),
    parentSlot: v(),
    rewards: K(T(Ct)),
    blockTime: E(v()),
    blockHeight: E(v())
  })));
  X(E(k({
    blockhash: I(),
    previousBlockhash: I(),
    parentSlot: v(),
    transactions: T(k({
      transaction: fr,
      meta: E(bn)
    })),
    rewards: K(T(Ct)),
    blockTime: E(v())
  })));
  X(E(k({
    blockhash: I(),
    previousBlockhash: I(),
    parentSlot: v(),
    signatures: T(I()),
    blockTime: E(v())
  })));
  X(E(k({
    slot: v(),
    meta: E(bn),
    blockTime: K(E(v())),
    transaction: fr,
    version: K(Vt)
  })));
  X(E(k({
    slot: v(),
    transaction: Ki,
    meta: E(gr),
    blockTime: K(E(v())),
    version: K(Vt)
  })));
  ht(k({
    blockhash: I(),
    lastValidBlockHeight: v()
  }));
  ht(mt());
  const Po = k({
    slot: v(),
    numTransactions: v(),
    numSlots: v(),
    samplePeriodSecs: v()
  });
  X(T(Po));
  ht(E(k({
    feeCalculator: k({
      lamportsPerSignature: v()
    })
  })));
  X(I());
  X(I());
  const Co = k({
    err: Pt,
    logs: T(I()),
    signature: I()
  });
  k({
    result: An(Co),
    subscription: v()
  });
  class ct {
    constructor(e) {
      this._keypair = void 0, this._keypair = e ?? Gr();
    }
    static generate() {
      return new ct(Gr());
    }
    static fromSecretKey(e, n) {
      if (e.byteLength !== 64) throw new Error("bad secret key size");
      const r = e.slice(32, 64);
      if (!n || !n.skipValidation) {
        const u = e.slice(0, 32), o = rr(u);
        for (let g = 0; g < 32; g++) if (r[g] !== o[g]) throw new Error("provided secretKey is invalid");
      }
      return new ct({
        publicKey: r,
        secretKey: e
      });
    }
    static fromSeed(e) {
      const n = rr(e), r = new Uint8Array(64);
      return r.set(e), r.set(n, 32), new ct({
        publicKey: n,
        secretKey: r
      });
    }
    get publicKey() {
      return new A(this._keypair.publicKey);
    }
    get secretKey() {
      return new Uint8Array(this._keypair.secretKey);
    }
  }
  Object.freeze({
    CreateLookupTable: {
      index: 0,
      layout: l.struct([
        l.u32("instruction"),
        Ot("recentSlot"),
        l.u8("bumpSeed")
      ])
    },
    FreezeLookupTable: {
      index: 1,
      layout: l.struct([
        l.u32("instruction")
      ])
    },
    ExtendLookupTable: {
      index: 2,
      layout: l.struct([
        l.u32("instruction"),
        Ot(),
        l.seq(q(), l.offset(l.u32(), -8), "addresses")
      ])
    },
    DeactivateLookupTable: {
      index: 3,
      layout: l.struct([
        l.u32("instruction")
      ])
    },
    CloseLookupTable: {
      index: 4,
      layout: l.struct([
        l.u32("instruction")
      ])
    }
  });
  new A("AddressLookupTab1e1111111111111111111111111");
  Object.freeze({
    RequestUnits: {
      index: 0,
      layout: l.struct([
        l.u8("instruction"),
        l.u32("units"),
        l.u32("additionalFee")
      ])
    },
    RequestHeapFrame: {
      index: 1,
      layout: l.struct([
        l.u8("instruction"),
        l.u32("bytes")
      ])
    },
    SetComputeUnitLimit: {
      index: 2,
      layout: l.struct([
        l.u8("instruction"),
        l.u32("units")
      ])
    },
    SetComputeUnitPrice: {
      index: 3,
      layout: l.struct([
        l.u8("instruction"),
        Ot("microLamports")
      ])
    }
  });
  new A("ComputeBudget111111111111111111111111111111");
  l.struct([
    l.u8("numSignatures"),
    l.u8("padding"),
    l.u16("signatureOffset"),
    l.u16("signatureInstructionIndex"),
    l.u16("publicKeyOffset"),
    l.u16("publicKeyInstructionIndex"),
    l.u16("messageDataOffset"),
    l.u16("messageDataSize"),
    l.u16("messageInstructionIndex")
  ]);
  new A("Ed25519SigVerify111111111111111111111111111");
  pi.utils.isValidPrivateKey;
  pi.getPublicKey;
  l.struct([
    l.u8("numSignatures"),
    l.u16("signatureOffset"),
    l.u8("signatureInstructionIndex"),
    l.u16("ethAddressOffset"),
    l.u8("ethAddressInstructionIndex"),
    l.u16("messageDataOffset"),
    l.u16("messageDataSize"),
    l.u8("messageInstructionIndex"),
    l.blob(20, "ethAddress"),
    l.blob(64, "signature"),
    l.u8("recoveryId")
  ]);
  new A("KeccakSecp256k11111111111111111111111111111");
  var Ni;
  new A("StakeConfig11111111111111111111111111111111");
  class Wi {
    constructor(e, n, r) {
      this.unixTimestamp = void 0, this.epoch = void 0, this.custodian = void 0, this.unixTimestamp = e, this.epoch = n, this.custodian = r;
    }
  }
  Ni = Wi;
  Wi.default = new Ni(0, 0, A.default);
  Object.freeze({
    Initialize: {
      index: 0,
      layout: l.struct([
        l.u32("instruction"),
        js(),
        Xs()
      ])
    },
    Authorize: {
      index: 1,
      layout: l.struct([
        l.u32("instruction"),
        q("newAuthorized"),
        l.u32("stakeAuthorizationType")
      ])
    },
    Delegate: {
      index: 2,
      layout: l.struct([
        l.u32("instruction")
      ])
    },
    Split: {
      index: 3,
      layout: l.struct([
        l.u32("instruction"),
        l.ns64("lamports")
      ])
    },
    Withdraw: {
      index: 4,
      layout: l.struct([
        l.u32("instruction"),
        l.ns64("lamports")
      ])
    },
    Deactivate: {
      index: 5,
      layout: l.struct([
        l.u32("instruction")
      ])
    },
    Merge: {
      index: 7,
      layout: l.struct([
        l.u32("instruction")
      ])
    },
    AuthorizeWithSeed: {
      index: 8,
      layout: l.struct([
        l.u32("instruction"),
        q("newAuthorized"),
        l.u32("stakeAuthorizationType"),
        Kt("authoritySeed"),
        q("authorityOwner")
      ])
    }
  });
  new A("Stake11111111111111111111111111111111111111");
  Object.freeze({
    InitializeAccount: {
      index: 0,
      layout: l.struct([
        l.u32("instruction"),
        Qs()
      ])
    },
    Authorize: {
      index: 1,
      layout: l.struct([
        l.u32("instruction"),
        q("newAuthorized"),
        l.u32("voteAuthorizationType")
      ])
    },
    Withdraw: {
      index: 3,
      layout: l.struct([
        l.u32("instruction"),
        l.ns64("lamports")
      ])
    },
    UpdateValidatorIdentity: {
      index: 4,
      layout: l.struct([
        l.u32("instruction")
      ])
    },
    AuthorizeWithSeed: {
      index: 10,
      layout: l.struct([
        l.u32("instruction"),
        eo()
      ])
    }
  });
  new A("Vote111111111111111111111111111111111111111");
  new A("Va1idator1nfo111111111111111111111111111111");
  k({
    name: I(),
    website: K(I()),
    details: K(I()),
    iconUrl: K(I()),
    keybaseUsername: K(I())
  });
  new A("Vote111111111111111111111111111111111111111");
  l.struct([
    q("nodePubkey"),
    q("authorizedWithdrawer"),
    l.u8("commission"),
    l.nu64(),
    l.seq(l.struct([
      l.nu64("slot"),
      l.u32("confirmationCount")
    ]), l.offset(l.u32(), -8), "votes"),
    l.u8("rootSlotValid"),
    l.nu64("rootSlot"),
    l.nu64(),
    l.seq(l.struct([
      l.nu64("epoch"),
      q("authorizedVoter")
    ]), l.offset(l.u32(), -8), "authorizedVoters"),
    l.struct([
      l.seq(l.struct([
        q("authorizedPubkey"),
        l.nu64("epochOfLastAuthorizedSwitch"),
        l.nu64("targetEpoch")
      ]), 32, "buf"),
      l.nu64("idx"),
      l.u8("isEmpty")
    ], "priorVoters"),
    l.nu64(),
    l.seq(l.struct([
      l.nu64("epoch"),
      l.nu64("credits"),
      l.nu64("prevCredits")
    ]), l.offset(l.u32(), -8), "epochCredits"),
    l.struct([
      l.nu64("slot"),
      l.nu64("timestamp")
    ], "lastTimestamp")
  ]);
  const Q = new A("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"), Jn = new A("TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb"), St = new A("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"), yt = new A("So11111111111111111111111111111111111111112");
  new A("9pan9bMn5HatX4EJdBwg9VgCa7Uz5HL8N1m5D3NdXejP");
  class Ht extends Error {
    constructor(e) {
      super(e);
    }
  }
  class Oi extends Ht {
    constructor() {
      super(...arguments), this.name = "TokenAccountNotFoundError";
    }
  }
  class _o extends Ht {
    constructor() {
      super(...arguments), this.name = "TokenInvalidAccountError";
    }
  }
  class Fi extends Ht {
    constructor() {
      super(...arguments), this.name = "TokenInvalidAccountOwnerError";
    }
  }
  class Yt extends Ht {
    constructor() {
      super(...arguments), this.name = "TokenInvalidAccountSizeError";
    }
  }
  class Ro extends Ht {
    constructor() {
      super(...arguments), this.name = "TokenInvalidMintError";
    }
  }
  class qi extends Ht {
    constructor() {
      super(...arguments), this.name = "TokenOwnerOffCurveError";
    }
  }
  var Ft;
  (function(i) {
    i[i.InitializeMint = 0] = "InitializeMint", i[i.InitializeAccount = 1] = "InitializeAccount", i[i.InitializeMultisig = 2] = "InitializeMultisig", i[i.Transfer = 3] = "Transfer", i[i.Approve = 4] = "Approve", i[i.Revoke = 5] = "Revoke", i[i.SetAuthority = 6] = "SetAuthority", i[i.MintTo = 7] = "MintTo", i[i.Burn = 8] = "Burn", i[i.CloseAccount = 9] = "CloseAccount", i[i.FreezeAccount = 10] = "FreezeAccount", i[i.ThawAccount = 11] = "ThawAccount", i[i.TransferChecked = 12] = "TransferChecked", i[i.ApproveChecked = 13] = "ApproveChecked", i[i.MintToChecked = 14] = "MintToChecked", i[i.BurnChecked = 15] = "BurnChecked", i[i.InitializeAccount2 = 16] = "InitializeAccount2", i[i.SyncNative = 17] = "SyncNative", i[i.InitializeAccount3 = 18] = "InitializeAccount3", i[i.InitializeMultisig2 = 19] = "InitializeMultisig2", i[i.InitializeMint2 = 20] = "InitializeMint2", i[i.GetAccountDataSize = 21] = "GetAccountDataSize", i[i.InitializeImmutableOwner = 22] = "InitializeImmutableOwner", i[i.AmountToUiAmount = 23] = "AmountToUiAmount", i[i.UiAmountToAmount = 24] = "UiAmountToAmount", i[i.InitializeMintCloseAuthority = 25] = "InitializeMintCloseAuthority", i[i.TransferFeeExtension = 26] = "TransferFeeExtension", i[i.ConfidentialTransferExtension = 27] = "ConfidentialTransferExtension", i[i.DefaultAccountStateExtension = 28] = "DefaultAccountStateExtension", i[i.Reallocate = 29] = "Reallocate", i[i.MemoTransferExtension = 30] = "MemoTransferExtension", i[i.CreateNativeMint = 31] = "CreateNativeMint", i[i.InitializeNonTransferableMint = 32] = "InitializeNonTransferableMint", i[i.InterestBearingMintExtension = 33] = "InterestBearingMintExtension", i[i.CpiGuardExtension = 34] = "CpiGuardExtension", i[i.InitializePermanentDelegate = 35] = "InitializePermanentDelegate", i[i.TransferHookExtension = 36] = "TransferHookExtension", i[i.MetadataPointerExtension = 39] = "MetadataPointerExtension";
  })(Ft || (Ft = {}));
  function mr(i, e, n) {
    if (n.length) {
      i.push({
        pubkey: e,
        isSigner: false,
        isWritable: false
      });
      for (const r of n) i.push({
        pubkey: r instanceof A ? r : r.publicKey,
        isSigner: true,
        isWritable: false
      });
    } else i.push({
      pubkey: e,
      isSigner: true,
      isWritable: false
    });
    return i;
  }
  const Xr = l.struct([
    l.u8("instruction"),
    lt("amount")
  ]);
  function Lo(i, e, n, r, u = [], o = Q) {
    const g = mr([
      {
        pubkey: i,
        isSigner: false,
        isWritable: true
      },
      {
        pubkey: e,
        isSigner: false,
        isWritable: false
      }
    ], n, u), w = L.alloc(Xr.span);
    return Xr.encode({
      instruction: Ft.Approve,
      amount: BigInt(r)
    }, w), new Ge({
      keys: g,
      programId: o,
      data: w
    });
  }
  const Qr = l.struct([
    l.u8("instruction")
  ]);
  function jn(i, e, n, r = [], u = Q) {
    const o = mr([
      {
        pubkey: i,
        isSigner: false,
        isWritable: true
      },
      {
        pubkey: e,
        isSigner: false,
        isWritable: true
      }
    ], n, r), g = L.alloc(Qr.span);
    return Qr.encode({
      instruction: Ft.CloseAccount
    }, g), new Ge({
      keys: o,
      programId: u,
      data: g
    });
  }
  var gn;
  (function(i) {
    i[i.Uninitialized = 0] = "Uninitialized", i[i.Mint = 1] = "Mint", i[i.Account = 2] = "Account";
  })(gn || (gn = {}));
  const pr = 1, zo = l.struct([
    l.u8("m"),
    l.u8("n"),
    Et("isInitialized"),
    J("signer1"),
    J("signer2"),
    J("signer3"),
    J("signer4"),
    J("signer5"),
    J("signer6"),
    J("signer7"),
    J("signer8"),
    J("signer9"),
    J("signer10"),
    J("signer11")
  ]), yr = zo.span;
  var mn;
  (function(i) {
    i[i.Uninitialized = 0] = "Uninitialized", i[i.Initialized = 1] = "Initialized", i[i.Frozen = 2] = "Frozen";
  })(mn || (mn = {}));
  const Di = l.struct([
    J("mint"),
    J("owner"),
    lt("amount"),
    l.u32("delegateOption"),
    J("delegate"),
    l.u8("state"),
    l.u32("isNativeOption"),
    lt("isNative"),
    lt("delegatedAmount"),
    l.u32("closeAuthorityOption"),
    J("closeAuthority")
  ]), Xe = Di.span;
  async function Ko(i, e, n, r = Q) {
    const u = await i.getAccountInfo(e, n);
    return No(e, u, r);
  }
  async function Xn(i, e) {
    return await Uo(i, [], e);
  }
  async function Uo(i, e, n) {
    const r = pa(e);
    return await i.getMinimumBalanceForRentExemption(r, n);
  }
  function No(i, e, n = Q) {
    if (!e) throw new Oi();
    if (!e.owner.equals(n)) throw new Fi();
    if (e.data.length < Xe) throw new Yt();
    const r = Di.decode(e.data.slice(0, Xe));
    let u = L.alloc(0);
    if (e.data.length > Xe) {
      if (e.data.length === yr) throw new Yt();
      if (e.data[Xe] != gn.Account) throw new _o();
      u = e.data.slice(Xe + pr);
    }
    return {
      address: i,
      mint: r.mint,
      owner: r.owner,
      amount: r.amount,
      delegate: r.delegateOption ? r.delegate : null,
      delegatedAmount: r.delegatedAmount,
      isInitialized: r.state !== mn.Uninitialized,
      isFrozen: r.state === mn.Frozen,
      isNative: !!r.isNativeOption,
      rentExemptReserve: r.isNativeOption ? r.isNative : null,
      closeAuthority: r.closeAuthorityOption ? r.closeAuthority : null,
      tlvData: u
    };
  }
  const Vi = l.struct([
    l.u32("mintAuthorityOption"),
    J("mintAuthority"),
    lt("supply"),
    l.u8("decimals"),
    Et("isInitialized"),
    l.u32("freezeAuthorityOption"),
    J("freezeAuthority")
  ]), Qn = Vi.span;
  async function cn(i, e, n, r = Q) {
    const u = await i.getAccountInfo(e, n);
    return Wo(e, u, r);
  }
  function Wo(i, e, n = Q) {
    if (!e) throw new Oi();
    if (!e.owner.equals(n)) throw new Fi();
    if (e.data.length < Qn) throw new Yt();
    const r = Vi.decode(e.data.slice(0, Qn));
    let u = L.alloc(0);
    if (e.data.length > Qn) {
      if (e.data.length <= Xe) throw new Yt();
      if (e.data.length === yr) throw new Yt();
      if (e.data[Xe] != gn.Mint) throw new Ro();
      u = e.data.slice(Xe + pr);
    }
    return {
      address: i,
      mintAuthority: r.mintAuthorityOption ? r.mintAuthority : null,
      supply: r.supply,
      decimals: r.decimals,
      isInitialized: r.isInitialized,
      freezeAuthority: r.freezeAuthorityOption ? r.freezeAuthority : null,
      tlvData: u
    };
  }
  async function ei(i, e, n = false, r = Q, u = St) {
    if (!n && !A.isOnCurve(e.toBuffer())) throw new qi();
    const [o] = await A.findProgramAddress([
      e.toBuffer(),
      r.toBuffer(),
      i.toBuffer()
    ], u);
    return o;
  }
  function $t(i, e, n = false, r = Q, u = St) {
    if (!n && !A.isOnCurve(e.toBuffer())) throw new qi();
    const [o] = A.findProgramAddressSync([
      e.toBuffer(),
      r.toBuffer(),
      i.toBuffer()
    ], u);
    return o;
  }
  const Oo = l.struct([
    Et("lockCpi")
  ]), Fo = Oo.span, qo = l.struct([
    l.u8("state")
  ]), Do = qo.span, Vo = l.struct([]), Ho = Vo.span, Go = l.struct([
    J("rateAuthority"),
    l.ns64("initializationTimestamp"),
    l.s16("preUpdateAverageRate"),
    l.ns64("lastUpdateTimestamp"),
    l.s16("currentRate")
  ]), Zo = Go.span, $o = l.struct([
    Et("requireIncomingTransferMemos")
  ]), Yo = $o.span, Hi = l.struct([
    J("authority"),
    J("metadataAddress")
  ]), Jo = Hi.span;
  function jo(i) {
    const e = ya(ae.MetadataPointer, i.tlvData);
    if (e !== null) {
      const { authority: n, metadataAddress: r } = Hi.decode(e);
      return {
        authority: n.equals(A.default) ? null : n,
        metadataAddress: r.equals(A.default) ? null : r
      };
    } else return null;
  }
  const Xo = l.struct([
    J("closeAuthority")
  ]), Qo = Xo.span, Gi = l.struct([]), ea = Gi.span, ta = Gi.span, na = l.struct([
    J("delegate")
  ]), ra = na.span, ia = 1e4;
  BigInt(ia);
  function ti(i) {
    return l.struct([
      lt("epoch"),
      lt("maximumFee"),
      l.u16("transferFeeBasisPoints")
    ], i);
  }
  const sa = l.struct([
    J("transferFeeConfigAuthority"),
    J("withdrawWithheldAuthority"),
    lt("withheldAmount"),
    ti("olderTransferFee"),
    ti("newerTransferFee")
  ]), oa = sa.span, aa = l.struct([
    lt("withheldAmount")
  ]), ua = aa.span, ni = l.struct([
    l.u8("instruction"),
    lt("amount"),
    l.u8("decimals")
  ]);
  function ar(i, e, n, r, u, o, g = [], w = Q) {
    const S = mr([
      {
        pubkey: i,
        isSigner: false,
        isWritable: true
      },
      {
        pubkey: e,
        isSigner: false,
        isWritable: false
      },
      {
        pubkey: n,
        isSigner: false,
        isWritable: true
      }
    ], r, g), b = L.alloc(ni.span);
    return ni.encode({
      instruction: Ft.TransferChecked,
      amount: BigInt(u),
      decimals: o
    }, b), new Ge({
      keys: S,
      programId: w,
      data: b
    });
  }
  const ca = l.struct([
    J("authority"),
    J("programId")
  ]), la = ca.span, da = l.struct([
    Et("transferring")
  ]), ha = da.span, ri = l.struct([
    l.u8("discriminator"),
    l.blob(32, "addressConfig"),
    Et("isSigner"),
    Et("isWritable")
  ]), fa = l.struct([
    l.u32("count"),
    l.seq(ri, l.greedy(ri.span), "extraAccounts")
  ]);
  l.struct([
    lt("instructionDiscriminator"),
    l.u32("length"),
    fa.replicate("extraAccountsList")
  ]);
  var ae;
  (function(i) {
    i[i.Uninitialized = 0] = "Uninitialized", i[i.TransferFeeConfig = 1] = "TransferFeeConfig", i[i.TransferFeeAmount = 2] = "TransferFeeAmount", i[i.MintCloseAuthority = 3] = "MintCloseAuthority", i[i.ConfidentialTransferMint = 4] = "ConfidentialTransferMint", i[i.ConfidentialTransferAccount = 5] = "ConfidentialTransferAccount", i[i.DefaultAccountState = 6] = "DefaultAccountState", i[i.ImmutableOwner = 7] = "ImmutableOwner", i[i.MemoTransfer = 8] = "MemoTransfer", i[i.NonTransferable = 9] = "NonTransferable", i[i.InterestBearingConfig = 10] = "InterestBearingConfig", i[i.CpiGuard = 11] = "CpiGuard", i[i.PermanentDelegate = 12] = "PermanentDelegate", i[i.NonTransferableAccount = 13] = "NonTransferableAccount", i[i.TransferHook = 14] = "TransferHook", i[i.TransferHookAccount = 15] = "TransferHookAccount", i[i.MetadataPointer = 18] = "MetadataPointer";
  })(ae || (ae = {}));
  const Bt = 2, pn = 2;
  function ga(i) {
    switch (i) {
      case ae.Uninitialized:
        return 0;
      case ae.TransferFeeConfig:
        return oa;
      case ae.TransferFeeAmount:
        return ua;
      case ae.MintCloseAuthority:
        return Qo;
      case ae.ConfidentialTransferMint:
        return 97;
      case ae.ConfidentialTransferAccount:
        return 286;
      case ae.CpiGuard:
        return Fo;
      case ae.DefaultAccountState:
        return Do;
      case ae.ImmutableOwner:
        return Ho;
      case ae.MemoTransfer:
        return Yo;
      case ae.MetadataPointer:
        return Jo;
      case ae.NonTransferable:
        return ea;
      case ae.InterestBearingConfig:
        return Zo;
      case ae.PermanentDelegate:
        return ra;
      case ae.NonTransferableAccount:
        return ta;
      case ae.TransferHook:
        return la;
      case ae.TransferHookAccount:
        return ha;
      default:
        throw Error(`Unknown extension type: ${i}`);
    }
  }
  function ma(i, e) {
    if (i.length === 0) return e;
    {
      const n = Xe + pr + i.filter((r, u) => u === i.indexOf(r)).map((r) => ga(r) + Bt + pn).reduce((r, u) => r + u);
      return n === yr ? n + Bt : n;
    }
  }
  function pa(i) {
    return ma(i, Xe);
  }
  function ya(i, e) {
    let n = 0;
    for (; n + Bt + pn <= e.length; ) {
      const r = e.readUInt16LE(n), u = e.readUInt16LE(n + Bt), o = n + Bt + pn;
      if (r == i) return e.slice(o, o + u);
      n = o + u;
    }
    return null;
  }
  function wa(i) {
    const e = [];
    let n = 0;
    for (; n < i.length; ) {
      const r = i.readUInt16LE(n);
      e.push(r);
      const u = i.readUInt16LE(n + Bt);
      n += Bt + pn + u;
    }
    return e;
  }
  const ii = l.struct([
    l.u8("instruction")
  ]);
  function er(i, e, n, r = Q) {
    const u = [
      {
        pubkey: i,
        isSigner: false,
        isWritable: true
      },
      {
        pubkey: e,
        isSigner: false,
        isWritable: false
      },
      {
        pubkey: n,
        isSigner: false,
        isWritable: false
      },
      {
        pubkey: Ye,
        isSigner: false,
        isWritable: false
      }
    ], o = L.alloc(ii.span);
    return ii.encode({
      instruction: Ft.InitializeAccount
    }, o), new Ge({
      keys: u,
      programId: r,
      data: o
    });
  }
  function Ma(i, e, n, r, u = Q, o = St) {
    return Zi(i, e, n, r, L.alloc(0), u, o);
  }
  function va(i, e, n, r, u = Q, o = St) {
    return Zi(i, e, n, r, L.from([
      1
    ]), u, o);
  }
  function Zi(i, e, n, r, u, o = Q, g = St) {
    const w = [
      {
        pubkey: i,
        isSigner: true,
        isWritable: true
      },
      {
        pubkey: e,
        isSigner: false,
        isWritable: true
      },
      {
        pubkey: n,
        isSigner: false,
        isWritable: false
      },
      {
        pubkey: r,
        isSigner: false,
        isWritable: false
      },
      {
        pubkey: te.programId,
        isSigner: false,
        isWritable: false
      },
      {
        pubkey: o,
        isSigner: false,
        isWritable: false
      }
    ];
    return new Ge({
      keys: w,
      programId: g,
      data: u
    });
  }
  Qe = function(i) {
    return dt([
      L.from("config")
    ], i);
  };
  uu = async function(i, e, n) {
    return i.getAccountInfo(Qe(e), n).then((r) => wr.deserialize(Mn(r)));
  };
  wr = class {
    constructor(e) {
      __publicField(this, "wormhole");
      this.wormhole = new A(e);
    }
    static deserialize(e) {
      if (e.length != 32) throw new Error("data.length != 32");
      const n = e.subarray(0, 32);
      return new wr(n);
    }
  };
  kn = function(i, e) {
    return dt([
      new A(e).toBuffer()
    ], i);
  };
  _t = function(i, e, n) {
    const r = typeof n == "string" ? new Mi(n).toUint8Array() : n;
    return dt([
      (() => {
        const u = L.alloc(2);
        return u.writeUInt16BE(e), u;
      })(),
      r
    ], i);
  };
  cu = async function(i, e, n) {
    return i.getAccountInfo(new A(e), n).then((r) => Mr.deserialize(Mn(r)));
  };
  Mr = class {
    constructor(e, n) {
      __publicField(this, "chain");
      __publicField(this, "contract");
      this.chain = e, this.contract = n;
    }
    static deserialize(e) {
      if (e.length != 34) throw new Error("data.length != 34");
      const n = e.readUInt16LE(0), r = e.subarray(2, 34);
      return new Mr(n, r);
    }
  };
  vr = function(i) {
    return dt([
      L.from("sender")
    ], i);
  };
  Sr = function(i) {
    return dt([
      L.from("redeemer")
    ], i);
  };
  Gt = function(i) {
    return dt([
      L.from("authority_signer")
    ], i);
  };
  nn = function(i) {
    return dt([
      L.from("custody_signer")
    ], i);
  };
  rn = function(i) {
    return dt([
      L.from("mint_signer")
    ], i);
  };
  Zt = function(i, e, n) {
    return dt([
      L.from("wrapped"),
      (() => {
        const r = L.alloc(2);
        return r.writeUInt16BE(e), r;
      })(),
      n
    ], i);
  };
  wt = function(i, e) {
    return dt([
      L.from("meta"),
      new A(e).toBuffer()
    ], i);
  };
  tr = async function(i, e, n, r) {
    return i.getAccountInfo(wt(e, n), r).then((u) => Ar.deserialize(Mn(u)));
  };
  Ar = class {
    constructor(e, n, r, u) {
      __publicField(this, "chain");
      __publicField(this, "tokenAddress");
      __publicField(this, "originalDecimals");
      __publicField(this, "lastUpdatedSequence");
      this.chain = e, this.tokenAddress = n, this.originalDecimals = r, this.lastUpdatedSequence = u;
    }
    static deserialize(e) {
      if (e.length !== 35 && e.length !== 43) throw new Error(`invalid wrapped meta length: ${e.length}`);
      const n = e.readUInt16LE(0), r = e.subarray(2, 34), u = e.readUInt8(34), o = e.length === 43 ? e.readBigUInt64LE(35) : void 0;
      return new Ar(n, r, u, o);
    }
  };
  si = function(i, e, n, r, u) {
    return Lo(new A(e), Gt(i), new A(n), r, void 0, new A(u));
  };
  class Sa {
    constructor(e) {
      __publicField(this, "idl");
      this.idl = e;
    }
    async encode(e, n) {
      throw new Error(`Invalid account name: ${e}`);
    }
    decode(e, n) {
      return this.decodeUnchecked(e, n);
    }
    decodeUnchecked(e, n) {
      throw new Error(`Invalid account name: ${e}`);
    }
    memcmp(e, n) {
      throw new Error(`Invalid account name: ${e}`);
    }
    size(e) {
      return os(this.idl, e) ?? 0;
    }
  }
  class Aa {
    constructor(e) {
    }
    decode(e) {
      throw new Error("Token Bridge program does not have events");
    }
  }
  class ba {
    constructor(e) {
    }
    encode(e, n) {
      switch (e) {
        case "initialize":
          return ka(n);
        case "attestToken":
          return Ia(n);
        case "completeNative":
          return xa(n);
        case "completeWrapped":
          return Ba(n);
        case "transferWrapped":
          return Ea(n);
        case "transferNative":
          return Ta(n);
        case "registerChain":
          return Pa(n);
        case "createWrapped":
          return Ca(n);
        case "upgradeContract":
          return _a(n);
        case "transferWrappedWithPayload":
          return Ra(n);
        case "transferNativeWithPayload":
          return La(n);
        default:
          throw new Error(`Invalid instruction: ${e}`);
      }
    }
    encodeState(e, n) {
      throw new Error("Token Bridge program does not have state");
    }
  }
  var nt;
  (function(i) {
    i[i.Initialize = 0] = "Initialize", i[i.AttestToken = 1] = "AttestToken", i[i.CompleteNative = 2] = "CompleteNative", i[i.CompleteWrapped = 3] = "CompleteWrapped", i[i.TransferWrapped = 4] = "TransferWrapped", i[i.TransferNative = 5] = "TransferNative", i[i.RegisterChain = 6] = "RegisterChain", i[i.CreateWrapped = 7] = "CreateWrapped", i[i.UpgradeContract = 8] = "UpgradeContract", i[i.CompleteNativeWithPayload = 9] = "CompleteNativeWithPayload", i[i.CompleteWrappedWithPayload = 10] = "CompleteWrappedWithPayload", i[i.TransferWrappedWithPayload = 11] = "TransferWrappedWithPayload", i[i.TransferNativeWithPayload = 12] = "TransferNativeWithPayload";
  })(nt || (nt = {}));
  function ft(i, e) {
    const n = e === void 0 ? 0 : e.length, r = L.alloc(1 + n);
    return r.writeUInt8(i, 0), n > 0 && r.write(e.toString("hex"), 1, "hex"), r;
  }
  function ka({ wormhole: i }) {
    const e = L.alloc(32);
    return e.write(new A(i).toBuffer().toString("hex"), 0, "hex"), ft(nt.Initialize, e);
  }
  function Ia({ nonce: i }) {
    const e = L.alloc(4);
    return e.writeUInt32LE(i, 0), ft(nt.AttestToken, e);
  }
  function xa({}) {
    return ft(nt.CompleteNative);
  }
  function Ba({}) {
    return ft(nt.CompleteWrapped);
  }
  function $i({ nonce: i, amount: e, fee: n, targetAddress: r, targetChain: u }) {
    if (typeof e != "bigint" && (e = BigInt(e)), typeof n != "bigint" && (n = BigInt(n)), !L.isBuffer(r)) throw new Error("targetAddress must be Buffer");
    const o = L.alloc(54);
    return o.writeUInt32LE(i, 0), o.writeBigUInt64LE(e, 4), o.writeBigUInt64LE(n, 12), o.write(r.toString("hex"), 20, "hex"), o.writeUInt16LE(u, 52), o;
  }
  function Ea({ nonce: i, amount: e, fee: n, targetAddress: r, targetChain: u }) {
    return ft(nt.TransferWrapped, $i({
      nonce: i,
      amount: e,
      fee: n,
      targetAddress: r,
      targetChain: u
    }));
  }
  function Ta({ nonce: i, amount: e, fee: n, targetAddress: r, targetChain: u }) {
    return ft(nt.TransferNative, $i({
      nonce: i,
      amount: e,
      fee: n,
      targetAddress: r,
      targetChain: u
    }));
  }
  function Pa({}) {
    return ft(nt.RegisterChain);
  }
  function Ca({}) {
    return ft(nt.CreateWrapped);
  }
  function _a({}) {
    return ft(nt.UpgradeContract);
  }
  function Yi({ nonce: i, amount: e, targetAddress: n, targetChain: r, payload: u }) {
    if (typeof e != "bigint" && (e = BigInt(e)), !L.isBuffer(n)) throw new Error("targetAddress must be Buffer");
    if (!L.isBuffer(u)) throw new Error("payload must be Buffer");
    const o = L.alloc(50);
    return o.writeUInt32LE(i, 0), o.writeBigUInt64LE(e, 4), o.write(n.toString("hex"), 12, "hex"), o.writeUInt16LE(r, 44), o.writeUInt32LE(u.length, 46), L.concat([
      o,
      u,
      L.alloc(1)
    ]);
  }
  function Ra({ nonce: i, amount: e, fee: n, targetAddress: r, targetChain: u, payload: o }) {
    return ft(nt.TransferWrappedWithPayload, Yi({
      nonce: i,
      amount: e,
      targetAddress: r,
      targetChain: u,
      payload: o
    }));
  }
  function La({ nonce: i, amount: e, fee: n, targetAddress: r, targetChain: u, payload: o }) {
    return ft(nt.TransferNativeWithPayload, Yi({
      nonce: i,
      amount: e,
      targetAddress: r,
      targetChain: u,
      payload: o
    }));
  }
  class za {
    constructor(e) {
    }
    encode(e, n) {
      throw new Error("Token Bridge program does not have state");
    }
    decode(e) {
      throw new Error("Token Bridge program does not have state");
    }
  }
  class Ka {
    constructor(e) {
    }
    encode(e, n) {
      throw new Error("Token Bridge program does not have user-defined types");
    }
    decode(e, n) {
      throw new Error("Token Bridge program does not have user-defined types");
    }
  }
  class Ua {
    constructor(e) {
      __publicField(this, "instruction");
      __publicField(this, "accounts");
      __publicField(this, "state");
      __publicField(this, "events");
      __publicField(this, "types");
      this.instruction = new ba(e), this.accounts = new Sa(e), this.state = new za(e), this.events = new Aa(e), this.types = new Ka(e);
    }
  }
  Ji = {
    version: "0.1.0",
    name: "wormhole",
    instructions: [
      {
        name: "initialize",
        accounts: [
          {
            name: "payer",
            isMut: true,
            isSigner: true
          },
          {
            name: "config",
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
        args: [
          {
            name: "wormhole",
            type: "publicKey"
          }
        ]
      },
      {
        name: "attestToken",
        accounts: [
          {
            name: "payer",
            isMut: true,
            isSigner: true
          },
          {
            name: "config",
            isMut: true,
            isSigner: false
          },
          {
            name: "mint",
            isMut: false,
            isSigner: false
          },
          {
            name: "wrappedMeta",
            isMut: false,
            isSigner: false
          },
          {
            name: "splMetadata",
            isMut: false,
            isSigner: false
          },
          {
            name: "wormholeBridge",
            isMut: true,
            isSigner: false
          },
          {
            name: "wormholeMessage",
            isMut: true,
            isSigner: true
          },
          {
            name: "wormholeEmitter",
            isMut: false,
            isSigner: false
          },
          {
            name: "wormholeSequence",
            isMut: true,
            isSigner: false
          },
          {
            name: "wormholeFeeCollector",
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
          },
          {
            name: "wormholeProgram",
            isMut: false,
            isSigner: false
          }
        ],
        args: [
          {
            name: "nonce",
            type: "u32"
          }
        ]
      },
      {
        name: "completeNative",
        accounts: [
          {
            name: "payer",
            isMut: true,
            isSigner: true
          },
          {
            name: "config",
            isMut: false,
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
            name: "endpoint",
            isMut: false,
            isSigner: false
          },
          {
            name: "to",
            isMut: true,
            isSigner: false
          },
          {
            name: "toFees",
            isMut: true,
            isSigner: false
          },
          {
            name: "custody",
            isMut: true,
            isSigner: false
          },
          {
            name: "mint",
            isMut: false,
            isSigner: false
          },
          {
            name: "custodySigner",
            isMut: false,
            isSigner: false
          },
          {
            name: "rent",
            isMut: true,
            isSigner: false
          },
          {
            name: "systemProgram",
            isMut: false,
            isSigner: false
          },
          {
            name: "tokenProgram",
            isMut: false,
            isSigner: false
          },
          {
            name: "wormholeProgram",
            isMut: false,
            isSigner: false
          }
        ],
        args: []
      },
      {
        name: "completeWrapped",
        accounts: [
          {
            name: "payer",
            isMut: true,
            isSigner: true
          },
          {
            name: "config",
            isMut: false,
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
            name: "endpoint",
            isMut: false,
            isSigner: false
          },
          {
            name: "to",
            isMut: true,
            isSigner: false
          },
          {
            name: "toFees",
            isMut: true,
            isSigner: false
          },
          {
            name: "mint",
            isMut: true,
            isSigner: false
          },
          {
            name: "wrappedMeta",
            isMut: false,
            isSigner: false
          },
          {
            name: "mintAuthority",
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
          },
          {
            name: "tokenProgram",
            isMut: false,
            isSigner: false
          },
          {
            name: "wormholeProgram",
            isMut: false,
            isSigner: false
          }
        ],
        args: []
      },
      {
        name: "transferWrapped",
        accounts: [
          {
            name: "payer",
            isMut: true,
            isSigner: true
          },
          {
            name: "config",
            isMut: false,
            isSigner: false
          },
          {
            name: "from",
            isMut: true,
            isSigner: false
          },
          {
            name: "fromOwner",
            isMut: true,
            isSigner: true
          },
          {
            name: "mint",
            isMut: true,
            isSigner: false
          },
          {
            name: "wrappedMeta",
            isMut: false,
            isSigner: false
          },
          {
            name: "authoritySigner",
            isMut: false,
            isSigner: false
          },
          {
            name: "wormholeBridge",
            isMut: true,
            isSigner: false
          },
          {
            name: "wormholeMessage",
            isMut: true,
            isSigner: true
          },
          {
            name: "wormholeEmitter",
            isMut: false,
            isSigner: false
          },
          {
            name: "wormholeSequence",
            isMut: true,
            isSigner: false
          },
          {
            name: "wormholeFeeCollector",
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
          },
          {
            name: "tokenProgram",
            isMut: false,
            isSigner: false
          },
          {
            name: "wormholeProgram",
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
            name: "amount",
            type: "u64"
          },
          {
            name: "fee",
            type: "u64"
          },
          {
            name: "targetAddress",
            type: {
              array: [
                "u8",
                32
              ]
            }
          },
          {
            name: "targetChain",
            type: "u16"
          }
        ]
      },
      {
        name: "transferNative",
        accounts: [
          {
            name: "payer",
            isMut: true,
            isSigner: true
          },
          {
            name: "config",
            isMut: false,
            isSigner: false
          },
          {
            name: "from",
            isMut: true,
            isSigner: false
          },
          {
            name: "mint",
            isMut: true,
            isSigner: false
          },
          {
            name: "custody",
            isMut: true,
            isSigner: false
          },
          {
            name: "authoritySigner",
            isMut: false,
            isSigner: false
          },
          {
            name: "custodySigner",
            isMut: false,
            isSigner: false
          },
          {
            name: "wormholeBridge",
            isMut: true,
            isSigner: false
          },
          {
            name: "wormholeMessage",
            isMut: true,
            isSigner: true
          },
          {
            name: "wormholeEmitter",
            isMut: false,
            isSigner: false
          },
          {
            name: "wormholeSequence",
            isMut: true,
            isSigner: false
          },
          {
            name: "wormholeFeeCollector",
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
          },
          {
            name: "tokenProgram",
            isMut: false,
            isSigner: false
          },
          {
            name: "wormholeProgram",
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
            name: "amount",
            type: "u64"
          },
          {
            name: "fee",
            type: "u64"
          },
          {
            name: "targetAddress",
            type: {
              array: [
                "u8",
                32
              ]
            }
          },
          {
            name: "targetChain",
            type: "u16"
          }
        ]
      },
      {
        name: "registerChain",
        accounts: [
          {
            name: "payer",
            isMut: true,
            isSigner: true
          },
          {
            name: "config",
            isMut: false,
            isSigner: false
          },
          {
            name: "endpoint",
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
            name: "rent",
            isMut: false,
            isSigner: false
          },
          {
            name: "systemProgram",
            isMut: false,
            isSigner: false
          },
          {
            name: "wormholeProgram",
            isMut: false,
            isSigner: false
          }
        ],
        args: []
      },
      {
        name: "createWrapped",
        accounts: [
          {
            name: "payer",
            isMut: true,
            isSigner: true
          },
          {
            name: "config",
            isMut: false,
            isSigner: false
          },
          {
            name: "endpoint",
            isMut: false,
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
            name: "mint",
            isMut: true,
            isSigner: false
          },
          {
            name: "wrappedMeta",
            isMut: true,
            isSigner: false
          },
          {
            name: "splMetadata",
            isMut: true,
            isSigner: false
          },
          {
            name: "mintAuthority",
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
          },
          {
            name: "tokenProgram",
            isMut: false,
            isSigner: false
          },
          {
            name: "splMetadataProgram",
            isMut: false,
            isSigner: false
          },
          {
            name: "wormholeProgram",
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
            name: "tokenBridgeProgram",
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
        name: "transferWrappedWithPayload",
        accounts: [
          {
            name: "payer",
            isMut: true,
            isSigner: true
          },
          {
            name: "config",
            isMut: false,
            isSigner: false
          },
          {
            name: "from",
            isMut: true,
            isSigner: false
          },
          {
            name: "fromOwner",
            isMut: true,
            isSigner: true
          },
          {
            name: "mint",
            isMut: true,
            isSigner: false
          },
          {
            name: "wrappedMeta",
            isMut: false,
            isSigner: false
          },
          {
            name: "authoritySigner",
            isMut: false,
            isSigner: false
          },
          {
            name: "wormholeBridge",
            isMut: true,
            isSigner: false
          },
          {
            name: "wormholeMessage",
            isMut: true,
            isSigner: true
          },
          {
            name: "wormholeEmitter",
            isMut: false,
            isSigner: false
          },
          {
            name: "wormholeSequence",
            isMut: true,
            isSigner: false
          },
          {
            name: "wormholeFeeCollector",
            isMut: true,
            isSigner: false
          },
          {
            name: "clock",
            isMut: false,
            isSigner: false
          },
          {
            name: "sender",
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
          },
          {
            name: "tokenProgram",
            isMut: false,
            isSigner: false
          },
          {
            name: "wormholeProgram",
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
            name: "amount",
            type: "u64"
          },
          {
            name: "targetAddress",
            type: {
              array: [
                "u8",
                32
              ]
            }
          },
          {
            name: "targetChain",
            type: "u16"
          },
          {
            name: "payload",
            type: "bytes"
          },
          {
            name: "cpiProgramId",
            type: {
              option: "publicKey"
            }
          }
        ]
      },
      {
        name: "transferNativeWithPayload",
        accounts: [
          {
            name: "payer",
            isMut: true,
            isSigner: true
          },
          {
            name: "config",
            isMut: false,
            isSigner: false
          },
          {
            name: "from",
            isMut: true,
            isSigner: false
          },
          {
            name: "mint",
            isMut: true,
            isSigner: false
          },
          {
            name: "custody",
            isMut: true,
            isSigner: false
          },
          {
            name: "authoritySigner",
            isMut: false,
            isSigner: false
          },
          {
            name: "custodySigner",
            isMut: false,
            isSigner: false
          },
          {
            name: "wormholeBridge",
            isMut: true,
            isSigner: false
          },
          {
            name: "wormholeMessage",
            isMut: true,
            isSigner: true
          },
          {
            name: "wormholeEmitter",
            isMut: false,
            isSigner: false
          },
          {
            name: "wormholeSequence",
            isMut: true,
            isSigner: false
          },
          {
            name: "wormholeFeeCollector",
            isMut: true,
            isSigner: false
          },
          {
            name: "clock",
            isMut: false,
            isSigner: false
          },
          {
            name: "sender",
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
          },
          {
            name: "tokenProgram",
            isMut: false,
            isSigner: false
          },
          {
            name: "wormholeProgram",
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
            name: "amount",
            type: "u64"
          },
          {
            name: "targetAddress",
            type: {
              array: [
                "u8",
                32
              ]
            }
          },
          {
            name: "targetChain",
            type: "u16"
          },
          {
            name: "payload",
            type: "bytes"
          },
          {
            name: "cpiProgramId",
            type: {
              option: "publicKey"
            }
          }
        ]
      }
    ],
    accounts: []
  };
  Na = function(i, e) {
    return new nr(Ji, new A(i), e === void 0 ? {
      connection: null
    } : e, Wa());
  };
  ot = function(i, e) {
    return Na(i, as(e));
  };
  Wa = function() {
    return new Ua(Ji);
  };
  vt = (_a2 = class {
    constructor(e, n, r) {
      __publicField(this, "address");
      __publicField(this, "verified");
      __publicField(this, "share");
      this.address = new A(e), this.verified = n, this.share = r;
    }
    serialize() {
      const e = L.alloc(vt.size);
      return e.write(this.address.toBuffer().toString("hex"), 0, "hex"), this.verified && e.writeUInt8(1, 32), e.writeUInt8(this.share, 33), e;
    }
    static deserialize(e) {
      const n = e.subarray(0, 32), r = e.readUInt8(32) > 0, u = e.readUInt8(33);
      return new vt(n, r, u);
    }
  }, __publicField(_a2, "size", 34), _a2);
  In = class {
    constructor(e, n, r, u, o) {
      __publicField(this, "name");
      __publicField(this, "symbol");
      __publicField(this, "uri");
      __publicField(this, "sellerFeeBasisPoints");
      __publicField(this, "creators");
      this.name = e, this.symbol = n, this.uri = r, this.sellerFeeBasisPoints = u, this.creators = o;
    }
    serialize() {
      const e = this.name.length, n = this.symbol.length, r = this.uri.length, u = this.creators, [o, g] = (() => {
        if (u === null) return [
          0,
          0
        ];
        const S = u.length;
        return [
          S,
          4 + S * vt.size
        ];
      })(), w = L.alloc(15 + e + n + r + g);
      if (w.writeUInt32LE(e, 0), w.write(this.name, 4), w.writeUInt32LE(n, 4 + e), w.write(this.symbol, 8 + e), w.writeUInt32LE(r, 8 + e + n), w.write(this.uri, 12 + e + n), w.writeUInt16LE(this.sellerFeeBasisPoints, 12 + e + n + r), u === null) w.writeUInt8(0, 14 + e + n + r);
      else {
        w.writeUInt8(1, 14 + e + n + r), w.writeUInt32LE(o, 15 + e + n + r);
        for (let S = 0; S < o; ++S) {
          const b = u.at(S), R = 19 + e + n + r + S * vt.size;
          w.write(b.serialize().toString("hex"), R, "hex");
        }
      }
      return w;
    }
    static deserialize(e) {
      const n = e.readUInt32LE(0), r = e.subarray(4, 4 + n).toString(), u = e.readUInt32LE(4 + n), o = e.subarray(8 + n, 8 + n + u).toString(), g = e.readUInt32LE(8 + n + u), w = e.subarray(12 + n + u, 12 + n + u + g).toString(), S = e.readUInt16LE(12 + n + u + g), b = e.readUInt8(14 + n + u + g), R = (() => {
        if (b == 0) return null;
        const x = [], P = e.readUInt32LE(15 + n + u + g);
        for (let C = 0; C < P; ++C) {
          const _ = 19 + n + u + g + C * vt.size;
          x.push(vt.deserialize(e.subarray(_, _ + vt.size)));
        }
        return x;
      })();
      return new In(r, o, w, S, R);
    }
  };
  yn = class extends In {
    constructor(e, n, r, u, o, g) {
      super(e, n, r, u, o);
      __publicField(this, "isMutable");
      this.isMutable = g;
    }
    static serialize(e, n, r, u, o, g) {
      return new yn(e, n, r, u, o, g).serialize();
    }
    static serializeInstructionData(e, n, r, u, o, g) {
      return L.concat([
        L.alloc(1, 0),
        yn.serialize(e, n, r, u, o, g)
      ]);
    }
    serialize() {
      return L.concat([
        super.serialize(),
        L.alloc(1, this.isMutable ? 1 : 0)
      ]);
    }
  };
  Qt = (_b = class {
    constructor() {
    }
    static createMetadataAccounts(e, n, r, u, o, g, w = false, S, b, R, x = false, P = xn(n)) {
      const C = [
        us(P, false),
        Lt(n, false),
        Lt(r, true),
        Lt(e, true),
        Lt(g, w),
        Lt(te.programId, false),
        Lt(Ye, false)
      ], _ = yn.serializeInstructionData(u, o, S === void 0 ? "" : S, R === void 0 ? 0 : R, b === void 0 ? null : b, x);
      return {
        programId: Qt.programId,
        keys: C,
        data: _
      };
    }
  }, __publicField(_b, "programId", new A("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s")), _b);
  xn = function(i) {
    return dt([
      L.from("metadata"),
      Qt.programId.toBuffer(),
      new A(i).toBuffer()
    ], Qt.programId);
  };
  (function(i) {
    i[i.Uninitialized = 0] = "Uninitialized", i[i.EditionV1 = 1] = "EditionV1", i[i.MasterEditionV1 = 2] = "MasterEditionV1", i[i.ReservationListV1 = 3] = "ReservationListV1", i[i.MetadataV1 = 4] = "MetadataV1", i[i.ReservationListV2 = 5] = "ReservationListV2", i[i.MasterEditionV2 = 6] = "MasterEditionV2", i[i.EditionMarker = 7] = "EditionMarker";
  })(oi || (oi = {}));
  br = class {
    constructor(e, n, r, u, o, g) {
      __publicField(this, "key");
      __publicField(this, "updateAuthority");
      __publicField(this, "mint");
      __publicField(this, "data");
      __publicField(this, "primarySaleHappened");
      __publicField(this, "isMutable");
      this.key = e, this.updateAuthority = new A(n), this.mint = new A(r), this.data = u, this.primarySaleHappened = o, this.isMutable = g;
    }
    static deserialize(e) {
      const n = e.readUInt8(0), r = e.subarray(1, 33), u = e.subarray(33, 65), o = In.deserialize(e.subarray(65)), g = o.serialize().length, w = e.readUInt8(65 + g) > 0, S = e.readUInt8(66 + g) > 0;
      return new br(n, r, u, o, w, S);
    }
  };
  lu = async function(i, e, n) {
    return i.getAccountInfo(xn(e), n).then((r) => br.deserialize(Mn(r)));
  };
  Oa = function(i, e, n, r, u, o, g, w) {
    const S = ot(e, i).methods.attestToken(g);
    return console.log(ai(e, n, r, u, o, w)), S._ixFn(...S._args, {
      accounts: ai(e, n, r, u, o, w),
      signers: void 0,
      remainingAccounts: void 0,
      preInstructions: void 0,
      postInstructions: void 0
    });
  };
  ai = function(i, e, n, r, u, o) {
    const { bridge: g, emitter: w, sequence: S, feeCollector: b, clock: R, rent: x, systemProgram: P } = Qi(e, n, u, i);
    return {
      payer: new A(n),
      config: Qe(i),
      mint: new A(r),
      wrappedMeta: wt(i, r),
      splMetadata: o ? new A(o) : xn(r),
      wormholeBridge: g,
      wormholeMessage: new A(u),
      wormholeEmitter: w,
      wormholeSequence: S,
      wormholeFeeCollector: b,
      clock: R,
      rent: x,
      systemProgram: P,
      wormholeProgram: new A(e)
    };
  };
  ui = function(i, e, n, r, u, o, g) {
    const w = ot(e, i).methods.completeNative();
    return w._ixFn(...w._args, {
      accounts: Fa(e, n, r, u, o, g),
      signers: void 0,
      remainingAccounts: void 0,
      preInstructions: void 0,
      postInstructions: void 0
    });
  };
  Fa = function(i, e, n, r, u, o) {
    const g = new A(r.payload.token.address.toUint8Array());
    return {
      payer: new A(n),
      config: Qe(i),
      vaa: bt(e, L.from(r.hash)),
      claim: At(i, r.emitterAddress.toUint8Array(), j(r.emitterChain), r.sequence),
      endpoint: _t(i, j(r.emitterChain), r.emitterAddress.toUint8Array()),
      to: new A(r.payload.to.address.toUint8Array()),
      toFees: new A(u === void 0 ? r.payload.to.address.toUint8Array() : u),
      custody: kn(i, g),
      mint: g,
      custodySigner: nn(i),
      rent: Ye,
      systemProgram: te.programId,
      tokenProgram: o ? new A(o) : Q,
      wormholeProgram: new A(e)
    };
  };
  qa = function(i, e, n, r, u, o) {
    const g = ot(e, i).methods.completeWrapped();
    return g._ixFn(...g._args, {
      accounts: Da(e, n, r, u, o),
      signers: void 0,
      remainingAccounts: void 0,
      preInstructions: void 0,
      postInstructions: void 0
    });
  };
  Da = function(i, e, n, r, u) {
    const o = Zt(i, j(r.payload.token.chain), r.payload.token.address.toUint8Array());
    return {
      payer: new A(n),
      config: Qe(i),
      vaa: bt(e, L.from(r.hash)),
      claim: At(i, r.emitterAddress.toUint8Array(), j(r.emitterChain), r.sequence),
      endpoint: _t(i, j(r.emitterChain), r.emitterAddress.toUint8Array()),
      to: new A(r.payload.to.address.toUint8Array()),
      toFees: new A(u === void 0 ? r.payload.to.address.toUint8Array() : u),
      mint: o,
      wrappedMeta: wt(i, o),
      mintAuthority: rn(i),
      rent: Ye,
      systemProgram: te.programId,
      tokenProgram: Q,
      wormholeProgram: new A(e)
    };
  };
  Va = function(i, e, n, r, u) {
    const o = ot(e, i).methods.createWrapped();
    return o._ixFn(...o._args, {
      accounts: Ha(e, n, r, u),
      signers: void 0,
      remainingAccounts: void 0,
      preInstructions: void 0,
      postInstructions: void 0
    });
  };
  Ha = function(i, e, n, r) {
    const u = Zt(i, j(r.payload.token.chain), r.payload.token.address.toUint8Array());
    return {
      payer: new A(n),
      config: Qe(i),
      endpoint: _t(i, j(r.emitterChain), r.emitterAddress.toUint8Array()),
      vaa: bt(e, L.from(r.hash)),
      claim: At(i, r.emitterAddress.toUint8Array(), j(r.emitterChain), r.sequence),
      mint: u,
      wrappedMeta: wt(i, u),
      splMetadata: xn(u),
      mintAuthority: rn(i),
      rent: Ye,
      systemProgram: te.programId,
      tokenProgram: Q,
      splMetadataProgram: Qt.programId,
      wormholeProgram: new A(e)
    };
  };
  du = function(i, e, n) {
    const r = ot(i).methods.initialize(n);
    return r._ixFn(...r._args, {
      accounts: Ga(i, e),
      signers: void 0,
      remainingAccounts: void 0,
      preInstructions: void 0,
      postInstructions: void 0
    });
  };
  Ga = function(i, e) {
    return {
      payer: new A(e),
      config: Qe(i),
      rent: Ye,
      systemProgram: te.programId
    };
  };
  hu = function(i, e, n, r) {
    const u = ot(i).methods.registerChain();
    return u._ixFn(...u._args, {
      accounts: Za(i, e, n, r),
      signers: void 0,
      remainingAccounts: void 0,
      preInstructions: void 0,
      postInstructions: void 0
    });
  };
  Za = function(i, e, n, r) {
    return {
      payer: new A(n),
      config: Qe(i),
      endpoint: _t(i, j(r.payload.actionArgs.foreignChain), r.payload.actionArgs.foreignAddress.toUint8Array()),
      vaa: bt(e, L.from(r.hash)),
      claim: At(i, r.emitterAddress.toUint8Array(), j(r.emitterChain), r.sequence),
      rent: Ye,
      systemProgram: te.programId,
      wormholeProgram: new A(e)
    };
  };
  fu = function(i, e, n, r, u) {
    const o = ot(i).methods.upgradeContract();
    return o._ixFn(...o._args, {
      accounts: $a(i, e, n, r, u),
      signers: void 0,
      remainingAccounts: void 0,
      preInstructions: void 0,
      postInstructions: void 0
    });
  };
  $a = function(i, e, n, r, u) {
    return {
      payer: new A(n),
      vaa: bt(e, L.from(r.hash)),
      claim: At(i, r.emitterAddress.toUint8Array(), j(r.emitterChain), r.sequence),
      upgradeAuthority: es(i),
      spill: new A(u === void 0 ? n : u),
      implementation: new A(r.payload.actionArgs.newContract),
      programData: ls(i),
      tokenBridgeProgram: new A(i),
      rent: Ye,
      clock: sr,
      bpfLoaderUpgradeable: cs,
      systemProgram: te.programId
    };
  };
  ci = function(i, e, n, r, u, o, g, w, S, b, R, x, P) {
    const C = ot(e, i).methods.transferNative(S, b, R, L.from(x), P);
    return C._ixFn(...C._args, {
      accounts: Ya(e, n, r, u, o, g, w),
      signers: void 0,
      remainingAccounts: void 0,
      preInstructions: void 0,
      postInstructions: void 0
    });
  };
  Ya = function(i, e, n, r, u, o, g) {
    const { wormholeBridge: w, wormholeMessage: S, wormholeEmitter: b, wormholeSequence: R, wormholeFeeCollector: x, clock: P, rent: C, systemProgram: _ } = wn(i, e, n, r);
    return {
      payer: new A(n),
      config: Qe(i),
      from: new A(u),
      mint: new A(o),
      custody: kn(i, o),
      authoritySigner: Gt(i),
      custodySigner: nn(i),
      wormholeBridge: w,
      wormholeMessage: S,
      wormholeEmitter: b,
      wormholeSequence: R,
      wormholeFeeCollector: x,
      clock: P,
      rent: C,
      systemProgram: _,
      tokenProgram: new A(g),
      wormholeProgram: new A(e)
    };
  };
  li = function(i, e, n, r, u, o, g, w, S, b, R, x, P) {
    const C = ot(e, i).methods.transferNativeWithPayload(S, b, L.from(R), x, L.from(P), null);
    return C._ixFn(...C._args, {
      accounts: ji(e, n, r, u, o, g, void 0, w),
      signers: void 0,
      remainingAccounts: void 0,
      preInstructions: void 0,
      postInstructions: void 0
    });
  };
  ji = function(i, e, n, r, u, o, g, w) {
    const { wormholeBridge: S, wormholeMessage: b, wormholeEmitter: R, wormholeSequence: x, wormholeFeeCollector: P, clock: C, rent: _, systemProgram: B } = wn(i, e, n, r);
    return {
      payer: new A(n),
      config: Qe(i),
      from: new A(u),
      mint: new A(o),
      custody: kn(i, o),
      authoritySigner: Gt(i),
      custodySigner: nn(i),
      wormholeBridge: S,
      wormholeMessage: b,
      wormholeEmitter: R,
      wormholeSequence: x,
      wormholeFeeCollector: P,
      clock: C,
      sender: new A(g === void 0 ? n : vr(g)),
      rent: _,
      systemProgram: B,
      tokenProgram: w ? new A(w) : Q,
      wormholeProgram: new A(e)
    };
  };
  Ja = function(i, e, n, r, u, o, g, w, S, b, R, x, P, C, _) {
    const B = ot(e, i).methods.transferWrapped(R, x, P, L.from(C), _);
    return B._ixFn(...B._args, {
      accounts: ja(e, n, r, u, o, g, w, S, b),
      signers: void 0,
      remainingAccounts: void 0,
      preInstructions: void 0,
      postInstructions: void 0
    });
  };
  ja = function(i, e, n, r, u, o, g, w, S) {
    const b = Zt(i, g, w), { wormholeBridge: R, wormholeMessage: x, wormholeEmitter: P, wormholeSequence: C, wormholeFeeCollector: _, clock: B, rent: z, systemProgram: U } = wn(i, e, n, r);
    return {
      payer: new A(n),
      config: Qe(i),
      from: new A(u),
      fromOwner: new A(o),
      mint: b,
      wrappedMeta: wt(i, b),
      authoritySigner: Gt(i),
      wormholeBridge: R,
      wormholeMessage: x,
      wormholeEmitter: P,
      wormholeSequence: C,
      wormholeFeeCollector: _,
      clock: B,
      rent: z,
      systemProgram: U,
      wormholeProgram: new A(e),
      tokenProgram: new A(S)
    };
  };
  Xa = function(i, e, n, r, u, o, g, w, S, b, R, x, P, C, _) {
    const B = ot(e, i).methods.transferWrappedWithPayload(R, x, L.from(P), C, L.from(_), null);
    return B._ixFn(...B._args, {
      accounts: Xi(e, n, r, u, o, g, w, S, void 0, b),
      signers: void 0,
      remainingAccounts: void 0,
      preInstructions: void 0,
      postInstructions: void 0
    });
  };
  Xi = function(i, e, n, r, u, o, g, w, S, b) {
    const R = Zt(i, g, w), { wormholeBridge: x, wormholeMessage: P, wormholeEmitter: C, wormholeSequence: _, wormholeFeeCollector: B, clock: z, rent: U, systemProgram: D } = wn(i, e, n, r);
    return {
      payer: new A(n),
      config: Qe(i),
      from: new A(u),
      fromOwner: new A(o),
      mint: R,
      wrappedMeta: wt(i, R),
      authoritySigner: Gt(i),
      wormholeBridge: x,
      wormholeMessage: P,
      wormholeEmitter: C,
      wormholeSequence: _,
      wormholeFeeCollector: B,
      clock: z,
      sender: new A(S === void 0 ? n : vr(S)),
      rent: U,
      systemProgram: D,
      wormholeProgram: new A(e),
      tokenProgram: b ? new A(b) : Q
    };
  };
  gu = function(i, e, n) {
    const { wormholeEmitter: r, wormholeBridge: u, wormholeFeeCollector: o, wormholeSequence: g } = hi(e, n);
    return {
      tokenBridgeConfig: Qe(e),
      tokenBridgeAuthoritySigner: Gt(e),
      tokenBridgeCustodySigner: nn(e),
      tokenBridgeMintAuthority: rn(e),
      tokenBridgeSender: vr(i),
      tokenBridgeRedeemer: Sr(i),
      wormholeBridge: u,
      tokenBridgeEmitter: r,
      wormholeFeeCollector: o,
      tokenBridgeSequence: g
    };
  };
  mu = function(i, e, n, r, u, o, g) {
    const w = ji(e, n, r, u, o, g, i);
    return {
      payer: w.payer,
      tokenBridgeConfig: w.config,
      fromTokenAccount: w.from,
      mint: w.mint,
      tokenBridgeCustody: w.custody,
      tokenBridgeAuthoritySigner: w.authoritySigner,
      tokenBridgeCustodySigner: w.custodySigner,
      wormholeBridge: w.wormholeBridge,
      wormholeMessage: w.wormholeMessage,
      tokenBridgeEmitter: w.wormholeEmitter,
      tokenBridgeSequence: w.wormholeSequence,
      wormholeFeeCollector: w.wormholeFeeCollector,
      clock: w.clock,
      tokenBridgeSender: w.sender,
      rent: w.rent,
      systemProgram: w.systemProgram,
      tokenProgram: w.tokenProgram,
      wormholeProgram: w.wormholeProgram
    };
  };
  pu = function(i, e, n, r, u, o, g, w, S) {
    const b = Xi(e, n, r, u, o, S === void 0 ? i : S, g, w, i);
    return {
      payer: b.payer,
      tokenBridgeConfig: b.config,
      fromTokenAccount: b.from,
      fromTokenAccountOwner: b.fromOwner,
      tokenBridgeWrappedMint: b.mint,
      tokenBridgeWrappedMeta: b.wrappedMeta,
      tokenBridgeAuthoritySigner: b.authoritySigner,
      wormholeBridge: b.wormholeBridge,
      wormholeMessage: b.wormholeMessage,
      tokenBridgeEmitter: b.wormholeEmitter,
      tokenBridgeSequence: b.wormholeSequence,
      wormholeFeeCollector: b.wormholeFeeCollector,
      clock: b.clock,
      tokenBridgeSender: b.sender,
      rent: b.rent,
      systemProgram: b.systemProgram,
      tokenProgram: b.tokenProgram,
      wormholeProgram: b.wormholeProgram
    };
  };
  yu = function(i, e, n, r, u) {
    const o = new A(r.payload.token.address.toUint8Array()), g = new A(r.payload.to.address.toUint8Array());
    return {
      payer: new A(n),
      tokenBridgeConfig: Qe(i),
      vaa: bt(e, L.from(r.hash)),
      tokenBridgeClaim: At(i, r.emitterAddress.toUint8Array(), j(r.emitterChain), r.sequence),
      tokenBridgeForeignEndpoint: _t(i, j(r.emitterChain), r.emitterAddress.toUint8Array()),
      toTokenAccount: new A(u),
      tokenBridgeRedeemer: Sr(g),
      toFeesTokenAccount: new A(u),
      tokenBridgeCustody: kn(i, o),
      mint: o,
      tokenBridgeCustodySigner: nn(i),
      rent: Ye,
      systemProgram: te.programId,
      tokenProgram: Q,
      wormholeProgram: new A(e)
    };
  };
  wu = function(i, e, n, r, u) {
    const o = Zt(i, j(r.payload.token.chain), r.payload.token.address.toUint8Array()), g = new A(r.payload.to.address.toUint8Array());
    return {
      payer: new A(n),
      tokenBridgeConfig: Qe(i),
      vaa: bt(e, L.from(r.hash)),
      tokenBridgeClaim: At(i, r.emitterAddress.toUint8Array(), j(r.emitterChain), r.sequence),
      tokenBridgeForeignEndpoint: _t(i, j(r.emitterChain), r.emitterAddress.toUint8Array()),
      toTokenAccount: new A(u),
      tokenBridgeRedeemer: Sr(g),
      toFeesTokenAccount: new A(u),
      tokenBridgeWrappedMint: o,
      tokenBridgeWrappedMeta: wt(i, o),
      tokenBridgeMintAuthority: rn(i),
      rent: Ye,
      systemProgram: te.programId,
      tokenProgram: Q,
      wormholeProgram: new A(e)
    };
  };
  en = class {
    constructor(e, n, r, u) {
      __publicField(this, "network");
      __publicField(this, "chain");
      __publicField(this, "connection");
      __publicField(this, "contracts");
      __publicField(this, "chainId");
      __publicField(this, "coreBridge");
      __publicField(this, "tokenBridge");
      this.network = e, this.chain = n, this.connection = r, this.contracts = u, this.chainId = j(n);
      const o = u.tokenBridge;
      if (!o) throw new Error(`TokenBridge contract Address for chain ${n} not found`);
      this.tokenBridge = ot(o, r), this.coreBridge = new fi(e, n, r, u);
    }
    static async fromRpc(e, n) {
      const [r, u] = await xt.chainFromRpc(e), o = n[u];
      if (o.network !== r) throw new Error(`Network mismatch for chain ${u}: ${o.network} != ${r}`);
      return new en(r, u, e, o.contracts);
    }
    async isWrappedAsset(e) {
      return tr(this.connection, this.tokenBridge.programId, new $(e).toUint8Array()).catch((n) => null).then((n) => n != null);
    }
    async getOriginalAsset(e) {
      if (!await this.isWrappedAsset(e)) throw Zn(e.toString());
      const n = new $(e).toUint8Array(), r = new A(n);
      try {
        const u = await tr(this.connection, this.tokenBridge.programId, n);
        return u === null ? {
          chain: this.chain,
          address: new $(r.toBytes()).toUniversalAddress()
        } : {
          chain: ds(u.chain),
          address: new Mi(new Uint8Array(u.tokenAddress))
        };
      } catch {
        throw Zn(e.toString());
      }
    }
    async getTokenUniversalAddress(e) {
      return new $(e).toUniversalAddress();
    }
    async getTokenNativeAddress(e, n) {
      return new $(n).toNative();
    }
    async hasWrappedAsset(e) {
      try {
        return await this.getWrappedAsset(e), true;
      } catch {
      }
      return false;
    }
    async getWrappedAsset(e) {
      if (Mt(e.address)) throw new Error("Native cannot be a wrapped asset");
      if (e.chain === this.chain) throw new Error(`Token ${e.address} is already native to chain ${this.chain}`);
      const n = Zt(this.tokenBridge.programId, j(e.chain), e.address.toUniversalAddress().toUint8Array());
      try {
        return await tr(this.connection, this.tokenBridge.programId, n), Fr(this.chain, n.toBase58());
      } catch {
      }
      throw Zn(`${n}: ${e.address.toUniversalAddress().toString()}`);
    }
    async isTransferCompleted(e) {
      return ts(this.connection, this.tokenBridge.programId, e.emitterAddress.toUint8Array(), j(e.emitterChain), e.sequence, this.connection.commitment).catch(() => false);
    }
    async getWrappedNative() {
      return Fr(this.chain, yt.toBase58());
    }
    async *createAttestation(e, n) {
      if (!n) throw new Error("Payer required to create attestation");
      const r = new $(n).unwrap(), u = 0, o = await this.coreBridge.getMessageFee(), g = ns(this.coreBridge.coreBridge.programId, r, o), w = new $(e).unwrap(), S = await xt.getTokenProgramId(this.connection, w);
      let b;
      if (S.equals(Jn)) {
        const C = await cn(this.connection, w, void 0, S), _ = jo(C);
        (_ == null ? void 0 : _.metadataAddress) && (b = _ == null ? void 0 : _.metadataAddress);
      }
      const R = ct.generate(), x = Oa(this.connection, this.tokenBridge.programId, this.coreBridge.address, r, new $(e).unwrap(), R.publicKey, u, b), P = new ut().add(g, x);
      P.feePayer = r, yield this.createUnsignedTx({
        transaction: P,
        signers: [
          R
        ]
      }, "Solana.AttestToken");
    }
    async *submitAttestation(e, n) {
      if (!n) throw new Error("Payer required to create attestation");
      const r = new $(n).unwrap();
      yield* this.coreBridge.postVaa(r, e);
      const u = new ut().add(Va(this.connection, this.tokenBridge.programId, this.coreBridge.address, r, e));
      u.feePayer = r, yield this.createUnsignedTx({
        transaction: u
      }, "Solana.CreateWrapped");
    }
    async transferSol(e, n, r, u) {
      const o = new $(e).unwrap(), g = o, w = n.address.toUniversalAddress().toUint8Array(), S = j(n.chain), b = 0, R = 0n, x = ct.generate(), P = ct.generate(), C = await Xn(this.connection), _ = te.createAccount({
        fromPubkey: g,
        newAccountPubkey: P.publicKey,
        lamports: C,
        space: Xe,
        programId: Q
      }), B = te.transfer({
        fromPubkey: g,
        lamports: r,
        toPubkey: P.publicKey
      }), z = er(P.publicKey, yt, g), U = si(this.tokenBridge.programId, P.publicKey, g, r, Q), D = u ? li(this.connection, this.tokenBridge.programId, this.coreBridge.address, o, x.publicKey, P.publicKey, yt, Q, b, r, w, S, u) : ci(this.connection, this.tokenBridge.programId, this.coreBridge.address, o, x.publicKey, P.publicKey, yt, Q, b, r, R, w, S), ue = jn(P.publicKey, g, g), V = new ut();
      return V.feePayer = g, V.add(_, B, z, U, D, ue), this.createUnsignedTx({
        transaction: V,
        signers: [
          x,
          P
        ]
      }, "TokenBridge.TransferNative");
    }
    async *transfer(e, n, r, u, o) {
      if (Mt(r)) {
        yield await this.transferSol(e, n, u, o);
        return;
      }
      const g = new $(r).unwrap(), w = new $(e).unwrap(), S = await xt.getTokenProgramId(this.connection, g);
      if (S.equals(Jn)) throw new Error("Transfers of Token-2022 assets are not supported via the Manual Token Bridge route. Please use the Executor Token Bridge route instead.");
      let b = await ei(g, w, false, S);
      const R = !await this.isWrappedAsset(r);
      let x, P = false;
      if (R && S.equals(Jn)) {
        const re = await this.connection.getAccountInfo(b);
        if (re && re.data.length > Xe) {
          const rt = await Ko(this.connection, b, void 0, S);
          rt.tlvData && (P = wa(rt.tlvData).includes(ae.ImmutableOwner));
        }
      }
      const C = n.address.toUniversalAddress().toUint8Array(), _ = j(n.chain), B = 0, z = 0n, U = ct.generate(), D = [], ue = [
        U
      ];
      if (P) {
        x = ct.generate(), ue.push(x);
        const re = await Xn(this.connection);
        D.push(te.createAccount({
          fromPubkey: w,
          newAccountPubkey: x.publicKey,
          lamports: re,
          space: Xe,
          programId: S
        })), D.push(er(x.publicKey, g, w, S));
        const rt = await cn(this.connection, g, void 0, S);
        D.push(ar(b, g, x.publicKey, w, u, rt.decimals, [], S)), b = x.publicKey;
      }
      let V;
      if (R) V = o ? li(this.connection, this.tokenBridge.programId, this.coreBridge.address, w, U.publicKey, b, g, S, B, u, C, _, o) : ci(this.connection, this.tokenBridge.programId, this.coreBridge.address, w, U.publicKey, b, g, S, B, u, z, C, _);
      else {
        const re = await this.getOriginalAsset(r);
        if (Mt(re.address)) throw new Error("Native cannot be an original asset");
        V = o ? Xa(this.connection, this.tokenBridge.programId, this.coreBridge.address, w, U.publicKey, b, w, j(re.chain), re.address.toUint8Array(), S, B, u, C, _, o) : Ja(this.connection, this.tokenBridge.programId, this.coreBridge.address, w, U.publicKey, b, w, j(re.chain), re.address.toUint8Array(), S, B, u, z, C, _);
      }
      const Ze = si(this.tokenBridge.programId, b, w, u, S);
      D.push(Ze), D.push(V), x && D.push(jn(x.publicKey, w, w, [], S));
      const ne = new ut().add(...D);
      ne.feePayer = w, yield this.createUnsignedTx({
        transaction: ne,
        signers: ue
      }, "TokenBridge.TransferTokens");
    }
    async *redeemAndUnwrap(e, n) {
      const r = new $(e).unwrap(), u = new $(n.payload.to.address).unwrap(), o = await cn(this.connection, yt), g = n.payload.token.amount * BigInt(Math.pow(10, o.decimals - 8)), w = await Xn(this.connection), S = ct.generate(), b = ui(this.connection, this.tokenBridge.programId, this.coreBridge.address, r, n), R = te.createAccount({
        fromPubkey: r,
        newAccountPubkey: S.publicKey,
        lamports: w,
        space: Xe,
        programId: Q
      }), x = er(S.publicKey, yt, r), P = ar(u, yt, S.publicKey, r, g, o.decimals), C = jn(S.publicKey, r, r), _ = new ut();
      _.feePayer = r, _.add(b, R, x, P, C), yield this.createUnsignedTx({
        transaction: _,
        signers: [
          S
        ]
      }, "TokenBridge.RedeemAndUnwrap");
    }
    async *createAta(e, n, r) {
      const u = new $(e).unwrap(), o = new $(n).unwrap(), g = await ei(o, u, false, r);
      if (await this.connection.getAccountInfo(g) === null) {
        const S = new ut().add(Ma(u, g, u, o, r));
        S.feePayer = u, yield this.createUnsignedTx({
          transaction: S
        }, "Redeem.CreateATA");
      }
    }
    async *redeem(e, n, r = true) {
      const u = n.payload.token.chain === this.chain ? n.payload.token.address : (await this.getWrappedAsset(n.payload.token)).toUniversalAddress(), o = await xt.getTokenProgramId(this.connection, new $(u).unwrap());
      if (yield* this.createAta(e, u, o), yield* this.coreBridge.postVaa(e, n), r) {
        const b = new $(await this.getWrappedNative());
        if (hs.equals(u.toUint8Array(), b.toUint8Array())) {
          yield* this.redeemAndUnwrap(e, n);
          return;
        }
      }
      const g = new $(e).unwrap(), w = n.payload.token.chain == this.chain ? ui : qa, S = new ut().add(w(this.connection, this.tokenBridge.programId, this.coreBridge.address, g, n, void 0, o));
      S.feePayer = g, yield this.createUnsignedTx({
        transaction: S
      }, "Solana.RedeemTransfer");
    }
    createUnsignedTx(e, n, r = false) {
      return new yi(e, this.network, this.chain, n, r);
    }
  };
  di = {
    version: "0.4.0",
    name: "tokenBridgeRelayer",
    instructions: [
      {
        name: "completeNativeTransferWithRelay",
        accounts: [
          {
            name: "payer",
            isMut: true,
            isSigner: true
          },
          {
            name: "config",
            isMut: false,
            isSigner: false
          },
          {
            name: "mint",
            isMut: false,
            isSigner: false
          },
          {
            name: "recipientTokenAccount",
            isMut: true,
            isSigner: false
          },
          {
            name: "recipient",
            isMut: true,
            isSigner: false
          },
          {
            name: "tmpTokenAccount",
            isMut: true,
            isSigner: false
          },
          {
            name: "tokenBridgeConfig",
            isMut: false,
            isSigner: false
          },
          {
            name: "vaa",
            isMut: false,
            isSigner: false
          },
          {
            name: "tokenBridgeClaim",
            isMut: true,
            isSigner: false
          },
          {
            name: "tokenBridgeForeignEndpoint",
            isMut: false,
            isSigner: false
          },
          {
            name: "tokenBridgeCustody",
            isMut: true,
            isSigner: false
          },
          {
            name: "tokenBridgeCustodySigner",
            isMut: false,
            isSigner: false
          },
          {
            name: "wormholeProgram",
            isMut: false,
            isSigner: false
          },
          {
            name: "tokenBridgeProgram",
            isMut: false,
            isSigner: false
          },
          {
            name: "tokenProgram",
            isMut: false,
            isSigner: false
          },
          {
            name: "associatedTokenProgram",
            isMut: false,
            isSigner: false
          },
          {
            name: "systemProgram",
            isMut: false,
            isSigner: false
          },
          {
            name: "rent",
            isMut: false,
            isSigner: false
          }
        ],
        args: [
          {
            name: "vaaHash",
            type: {
              array: [
                "u8",
                32
              ]
            }
          }
        ]
      },
      {
        name: "completeWrappedTransferWithRelay",
        accounts: [
          {
            name: "payer",
            isMut: true,
            isSigner: true
          },
          {
            name: "config",
            isMut: false,
            isSigner: false
          },
          {
            name: "tokenBridgeWrappedMint",
            isMut: true,
            isSigner: false
          },
          {
            name: "recipientTokenAccount",
            isMut: true,
            isSigner: false
          },
          {
            name: "recipient",
            isMut: true,
            isSigner: false
          },
          {
            name: "tmpTokenAccount",
            isMut: true,
            isSigner: false
          },
          {
            name: "tokenBridgeWrappedMeta",
            isMut: false,
            isSigner: false
          },
          {
            name: "tokenBridgeConfig",
            isMut: false,
            isSigner: false
          },
          {
            name: "vaa",
            isMut: false,
            isSigner: false
          },
          {
            name: "tokenBridgeClaim",
            isMut: true,
            isSigner: false
          },
          {
            name: "tokenBridgeForeignEndpoint",
            isMut: false,
            isSigner: false
          },
          {
            name: "tokenBridgeMintAuthority",
            isMut: false,
            isSigner: false
          },
          {
            name: "wormholeProgram",
            isMut: false,
            isSigner: false
          },
          {
            name: "tokenBridgeProgram",
            isMut: false,
            isSigner: false
          },
          {
            name: "tokenProgram",
            isMut: false,
            isSigner: false
          },
          {
            name: "associatedTokenProgram",
            isMut: false,
            isSigner: false
          },
          {
            name: "systemProgram",
            isMut: false,
            isSigner: false
          },
          {
            name: "rent",
            isMut: false,
            isSigner: false
          }
        ],
        args: [
          {
            name: "vaaHash",
            type: {
              array: [
                "u8",
                32
              ]
            }
          }
        ]
      },
      {
        name: "initialize",
        accounts: [
          {
            name: "payer",
            isMut: true,
            isSigner: true
          },
          {
            name: "senderConfig",
            isMut: true,
            isSigner: false
          },
          {
            name: "redeemerConfig",
            isMut: true,
            isSigner: false
          },
          {
            name: "authority",
            isMut: false,
            isSigner: false
          },
          {
            name: "lutAddress",
            isMut: true,
            isSigner: false
          },
          {
            name: "lut",
            isMut: true,
            isSigner: false
          },
          {
            name: "lutProgram",
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
            name: "recentSlot",
            type: "u64"
          }
        ]
      },
      {
        name: "resolveExecuteVaaV1",
        accounts: [],
        args: [
          {
            name: "vaaBody",
            type: "bytes"
          }
        ],
        returns: {
          defined: "ResolverInstructionGroups"
        }
      },
      {
        name: "transferNativeTokensWithRelay",
        accounts: [
          {
            name: "payer",
            isMut: true,
            isSigner: true
          },
          {
            name: "config",
            isMut: false,
            isSigner: false
          },
          {
            name: "mint",
            isMut: true,
            isSigner: false
          },
          {
            name: "fromTokenAccount",
            isMut: true,
            isSigner: false
          },
          {
            name: "tmpTokenAccount",
            isMut: true,
            isSigner: false
          },
          {
            name: "tokenBridgeConfig",
            isMut: false,
            isSigner: false
          },
          {
            name: "tokenBridgeCustody",
            isMut: true,
            isSigner: false
          },
          {
            name: "tokenBridgeAuthoritySigner",
            isMut: false,
            isSigner: false
          },
          {
            name: "tokenBridgeCustodySigner",
            isMut: false,
            isSigner: false
          },
          {
            name: "wormholeBridge",
            isMut: true,
            isSigner: false
          },
          {
            name: "wormholeMessage",
            isMut: true,
            isSigner: true
          },
          {
            name: "tokenBridgeEmitter",
            isMut: false,
            isSigner: false
          },
          {
            name: "tokenBridgeSequence",
            isMut: true,
            isSigner: false
          },
          {
            name: "wormholeFeeCollector",
            isMut: true,
            isSigner: false
          },
          {
            name: "payee",
            isMut: true,
            isSigner: false
          },
          {
            name: "systemProgram",
            isMut: false,
            isSigner: false
          },
          {
            name: "tokenProgram",
            isMut: false,
            isSigner: false
          },
          {
            name: "wormholeProgram",
            isMut: false,
            isSigner: false
          },
          {
            name: "tokenBridgeProgram",
            isMut: false,
            isSigner: false
          },
          {
            name: "associatedTokenProgram",
            isMut: false,
            isSigner: false
          },
          {
            name: "executorProgram",
            isMut: false,
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
          }
        ],
        args: [
          {
            name: "args",
            type: {
              defined: "TransferNativeTokensWithRelayArgs"
            }
          }
        ]
      },
      {
        name: "transferWrappedTokensWithRelay",
        accounts: [
          {
            name: "payer",
            isMut: true,
            isSigner: true
          },
          {
            name: "config",
            isMut: false,
            isSigner: false
          },
          {
            name: "tokenBridgeWrappedMint",
            isMut: true,
            isSigner: false
          },
          {
            name: "fromTokenAccount",
            isMut: true,
            isSigner: false
          },
          {
            name: "tmpTokenAccount",
            isMut: true,
            isSigner: false
          },
          {
            name: "tokenBridgeWrappedMeta",
            isMut: false,
            isSigner: false
          },
          {
            name: "tokenBridgeConfig",
            isMut: false,
            isSigner: false
          },
          {
            name: "tokenBridgeAuthoritySigner",
            isMut: false,
            isSigner: false
          },
          {
            name: "wormholeBridge",
            isMut: true,
            isSigner: false
          },
          {
            name: "wormholeMessage",
            isMut: true,
            isSigner: true
          },
          {
            name: "tokenBridgeEmitter",
            isMut: false,
            isSigner: false
          },
          {
            name: "tokenBridgeSequence",
            isMut: true,
            isSigner: false
          },
          {
            name: "wormholeFeeCollector",
            isMut: true,
            isSigner: false
          },
          {
            name: "payee",
            isMut: true,
            isSigner: false
          },
          {
            name: "wormholeProgram",
            isMut: false,
            isSigner: false
          },
          {
            name: "tokenBridgeProgram",
            isMut: false,
            isSigner: false
          },
          {
            name: "systemProgram",
            isMut: false,
            isSigner: false
          },
          {
            name: "tokenProgram",
            isMut: false,
            isSigner: false
          },
          {
            name: "executorProgram",
            isMut: false,
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
          }
        ],
        args: [
          {
            name: "args",
            type: {
              defined: "TransferWrappedTokensWithRelayArgs"
            }
          }
        ]
      }
    ],
    accounts: [
      {
        name: "LUT",
        type: {
          kind: "struct",
          fields: [
            {
              name: "bump",
              type: "u8"
            },
            {
              name: "address",
              type: "publicKey"
            }
          ]
        }
      },
      {
        name: "RedeemerConfig",
        type: {
          kind: "struct",
          fields: [
            {
              name: "bump",
              type: "u8"
            }
          ]
        }
      },
      {
        name: "SenderConfig",
        type: {
          kind: "struct",
          fields: [
            {
              name: "bump",
              type: "u8"
            }
          ]
        }
      }
    ],
    types: [
      {
        name: "InstructionGroup",
        type: {
          kind: "struct",
          fields: [
            {
              name: "instructions",
              type: {
                vec: {
                  defined: "SerializableInstruction"
                }
              }
            },
            {
              name: "addressLookupTables",
              type: {
                vec: "publicKey"
              }
            }
          ]
        }
      },
      {
        name: "InstructionGroups",
        type: {
          kind: "struct",
          fields: [
            {
              name: "groups",
              type: {
                vec: {
                  defined: "InstructionGroup"
                }
              }
            }
          ]
        }
      },
      {
        name: "MissingAccounts",
        type: {
          kind: "struct",
          fields: [
            {
              name: "accounts",
              type: {
                vec: "publicKey"
              }
            },
            {
              name: "addressLookupTables",
              type: {
                vec: "publicKey"
              }
            }
          ]
        }
      },
      {
        name: "ResolverInstructionGroups",
        type: {
          kind: "enum",
          variants: [
            {
              name: "Resolved",
              fields: [
                {
                  name: "groups",
                  type: {
                    defined: "InstructionGroups"
                  }
                }
              ]
            },
            {
              name: "Missing",
              fields: [
                {
                  name: "accounts",
                  type: {
                    defined: "MissingAccounts"
                  }
                }
              ]
            },
            {
              name: "Account"
            }
          ]
        }
      },
      {
        name: "SerializableAccountMeta",
        type: {
          kind: "struct",
          fields: [
            {
              name: "pubkey",
              type: "publicKey"
            },
            {
              name: "isSigner",
              type: "bool"
            },
            {
              name: "isWritable",
              type: "bool"
            }
          ]
        }
      },
      {
        name: "SerializableInstruction",
        type: {
          kind: "struct",
          fields: [
            {
              name: "programId",
              type: "publicKey"
            },
            {
              name: "accounts",
              type: {
                vec: {
                  defined: "SerializableAccountMeta"
                }
              }
            },
            {
              name: "data",
              type: "bytes"
            }
          ]
        }
      },
      {
        name: "TransferNativeTokensWithRelayArgs",
        type: {
          kind: "struct",
          fields: [
            {
              name: "amount",
              type: "u64"
            },
            {
              name: "recipientChain",
              type: "u16"
            },
            {
              name: "recipientAddress",
              type: {
                array: [
                  "u8",
                  32
                ]
              }
            },
            {
              name: "nonce",
              type: "u32"
            },
            {
              name: "wrapNative",
              type: "bool"
            },
            {
              name: "dstTransferRecipient",
              type: {
                array: [
                  "u8",
                  32
                ]
              }
            },
            {
              name: "dstExecutionAddress",
              type: {
                array: [
                  "u8",
                  32
                ]
              }
            },
            {
              name: "execAmount",
              type: "u64"
            },
            {
              name: "signedQuoteBytes",
              type: "bytes"
            },
            {
              name: "relayInstructions",
              type: "bytes"
            }
          ]
        }
      },
      {
        name: "TransferWrappedTokensWithRelayArgs",
        type: {
          kind: "struct",
          fields: [
            {
              name: "amount",
              type: "u64"
            },
            {
              name: "recipientChain",
              type: "u16"
            },
            {
              name: "recipientAddress",
              type: {
                array: [
                  "u8",
                  32
                ]
              }
            },
            {
              name: "nonce",
              type: "u32"
            },
            {
              name: "dstTransferRecipient",
              type: {
                array: [
                  "u8",
                  32
                ]
              }
            },
            {
              name: "dstExecutionAddress",
              type: {
                array: [
                  "u8",
                  32
                ]
              }
            },
            {
              name: "execAmount",
              type: "u64"
            },
            {
              name: "signedQuoteBytes",
              type: "bytes"
            },
            {
              name: "relayInstructions",
              type: "bytes"
            }
          ]
        }
      }
    ],
    errors: [
      {
        code: 6e3,
        name: "InvalidWormholeBridge",
        msg: "invalidWormholeBridge"
      },
      {
        code: 6001,
        name: "InvalidWormholeFeeCollector",
        msg: "invalidWormholeFeeCollector"
      },
      {
        code: 6002,
        name: "OwnerOnly",
        msg: "ownerOnly"
      },
      {
        code: 6003,
        name: "OutboundTransfersPaused",
        msg: "outboundTransfersPaused"
      },
      {
        code: 6004,
        name: "OwnerOrAssistantOnly",
        msg: "ownerOrAssistantOnly"
      },
      {
        code: 6005,
        name: "NotPendingOwner",
        msg: "notPendingOwner"
      },
      {
        code: 6006,
        name: "AlreadyTheOwner",
        msg: "alreadyTheOwner"
      },
      {
        code: 6007,
        name: "AlreadyTheAssistant",
        msg: "alreadyTheAssistant"
      },
      {
        code: 6008,
        name: "AlreadyTheFeeRecipient",
        msg: "alreadyTheFeeRecipient"
      },
      {
        code: 6009,
        name: "BumpNotFound",
        msg: "bumpNotFound"
      },
      {
        code: 6010,
        name: "FailedToMakeImmutable",
        msg: "failedToMakeImmutable"
      },
      {
        code: 6011,
        name: "InvalidForeignContract",
        msg: "invalidForeignContract"
      },
      {
        code: 6012,
        name: "ZeroBridgeAmount",
        msg: "zeroBridgeAmount"
      },
      {
        code: 6013,
        name: "InvalidToNativeAmount",
        msg: "invalidToNativeAmount"
      },
      {
        code: 6014,
        name: "NativeMintRequired",
        msg: "nativeMintRequired"
      },
      {
        code: 6015,
        name: "SwapsNotAllowedForNativeMint",
        msg: "swapsNotAllowedForNativeMint"
      },
      {
        code: 6016,
        name: "InvalidTokenBridgeConfig",
        msg: "invalidTokenBridgeConfig"
      },
      {
        code: 6017,
        name: "InvalidTokenBridgeAuthoritySigner",
        msg: "invalidTokenBridgeAuthoritySigner"
      },
      {
        code: 6018,
        name: "InvalidTokenBridgeCustodySigner",
        msg: "invalidTokenBridgeCustodySigner"
      },
      {
        code: 6019,
        name: "InvalidTokenBridgeEmitter",
        msg: "invalidTokenBridgeEmitter"
      },
      {
        code: 6020,
        name: "InvalidTokenBridgeSequence",
        msg: "invalidTokenBridgeSequence"
      },
      {
        code: 6021,
        name: "InvalidRecipient",
        msg: "invalidRecipient"
      },
      {
        code: 6022,
        name: "InvalidTransferToChain",
        msg: "invalidTransferToChain"
      },
      {
        code: 6023,
        name: "InvalidTransferTokenChain",
        msg: "invalidTransferTokenChain"
      },
      {
        code: 6024,
        name: "InvalidPrecision",
        msg: "invalidPrecision"
      },
      {
        code: 6025,
        name: "InvalidTransferToAddress",
        msg: "invalidTransferToAddress"
      },
      {
        code: 6026,
        name: "AlreadyRedeemed",
        msg: "alreadyRedeemed"
      },
      {
        code: 6027,
        name: "InvalidTokenBridgeForeignEndpoint",
        msg: "invalidTokenBridgeForeignEndpoint"
      },
      {
        code: 6028,
        name: "InvalidTokenBridgeMintAuthority",
        msg: "invalidTokenBridgeMintAuthority"
      },
      {
        code: 6029,
        name: "InvalidPublicKey",
        msg: "invalidPublicKey"
      },
      {
        code: 6030,
        name: "ZeroSwapRate",
        msg: "zeroSwapRate"
      },
      {
        code: 6031,
        name: "TokenNotRegistered",
        msg: "tokenNotRegistered"
      },
      {
        code: 6032,
        name: "ChainNotRegistered",
        msg: "chainNotRegistered"
      },
      {
        code: 6033,
        name: "TokenAlreadyRegistered",
        msg: "tokenAlreadyRegistered"
      },
      {
        code: 6034,
        name: "FeeCalculationError",
        msg: "tokenFeeCalculationError"
      },
      {
        code: 6035,
        name: "InvalidSwapCalculation",
        msg: "invalidSwapCalculation"
      },
      {
        code: 6036,
        name: "InsufficientFunds",
        msg: "insufficientFunds"
      },
      {
        code: 6037,
        name: "FailedToParseVaaBody",
        msg: "failedToParseVaaBody"
      }
    ]
  };
  Ut = (_c = class {
    constructor(e, n, r, u) {
      __publicField(this, "network");
      __publicField(this, "chain");
      __publicField(this, "connection");
      __publicField(this, "contracts");
      __publicField(this, "relayerProgramId");
      __publicField(this, "executorProgramId");
      __publicField(this, "wormholeProgramId");
      __publicField(this, "tokenBridgeProgramId");
      __publicField(this, "relayerProgram");
      if (this.network = e, this.chain = n, this.connection = r, this.contracts = u, !u.executorTokenBridge) throw new Error(`Executor Token Bridge contracts not found for network ${e} and chain ${n}`);
      this.relayerProgramId = new A(u.executorTokenBridge.relayer), this.executorProgramId = new A(u.executor), this.wormholeProgramId = new A(u.coreBridge), this.tokenBridgeProgramId = new A(u.tokenBridge), this.relayerProgram = new nr(di, this.relayerProgramId, {
        connection: this.connection
      });
    }
    static async fromRpc(e, n) {
      const [r, u] = await xt.chainFromRpc(e), o = n[u];
      if (o.network !== r) throw new Error(`Network mismatch: ${o.network} != ${r}`);
      return new Ut(r, u, e, o.contracts);
    }
    async *transfer(e, n, r, u, o, g) {
      const w = ms.get(this.network, n.chain);
      if (!w || !w.relayer) throw new Error(`Token Bridge Executor Relayer contract for domain ${n.chain} not found`);
      const S = w.relayer, b = new $(e).unwrap(), R = j(n.chain), x = n.address.toUniversalAddress(), { estimatedCost: P, signedQuote: C, relayInstructions: _ } = o, B = qr(fs, C), z = qr(gs, _), U = new en(this.network, this.chain, this.connection, this.contracts), D = Mt(r), ue = !D && await U.isWrappedAsset(r), V = D ? yt : new $(r).unwrap(), Ze = await xt.getTokenProgramId(this.connection, V), ne = new A(C.quote.payeeAddress), re = ct.generate(), rt = ps(this.network, n.chain, S), Rt = Dr(n.chain, rt.dstTransferRecipient), kt = Dr(n.chain, rt.dstExecutionAddress), Y = A.findProgramAddressSync([
        L.from("config")
      ], this.tokenBridgeProgramId)[0], at = A.findProgramAddressSync([
        V.toBuffer()
      ], this.tokenBridgeProgramId)[0], p = A.findProgramAddressSync([
        L.from("authority_signer")
      ], this.tokenBridgeProgramId)[0], t = A.findProgramAddressSync([
        L.from("custody_signer")
      ], this.tokenBridgeProgramId)[0], { wormholeEmitter: a, wormholeSequence: c, wormholeFeeCollector: h, wormholeBridge: m } = hi(this.tokenBridgeProgramId, this.wormholeProgramId), y = A.findProgramAddressSync([
        L.from("sender")
      ], this.relayerProgramId)[0], M = $t(V, b, false, Ze), d = A.findProgramAddressSync([
        L.from("tmp"),
        V.toBytes()
      ], this.relayerProgramId)[0], s = [];
      if (g) {
        const H = new A(g.referrer.address.toString());
        if (Mt(r)) {
          const pt = g.nativeTokenFee + g.transferTokenFee;
          pt > 0n && s.push(te.transfer({
            fromPubkey: b,
            toPubkey: H,
            lamports: pt
          }));
        } else {
          if (g.transferTokenFee > 0n) {
            const pt = $t(V, H, true, Ze), ie = $t(V, b, true, Ze);
            await this.connection.getAccountInfo(pt) || s.push(va(b, pt, H, V, Ze));
            const sn = await cn(this.connection, V, void 0, Ze);
            s.push(ar(ie, V, pt, b, g.transferTokenFee, sn.decimals, void 0, Ze));
          }
          g.nativeTokenFee > 0n && s.push(te.transfer({
            fromPubkey: b,
            toPubkey: H,
            lamports: g.nativeTokenFee
          }));
        }
      }
      const f = g ? g.remainingAmount : u, W = {
        amount: new dn(f.toString()),
        recipientChain: R,
        recipientAddress: Array.from(x.toUint8Array()),
        nonce: 0,
        dstTransferRecipient: Array.from(Rt.toUint8Array()),
        dstExecutionAddress: Array.from(kt.toUint8Array()),
        execAmount: new dn(P.toString()),
        signedQuoteBytes: L.from(B),
        relayInstructions: L.from(z)
      };
      ue ? s.push(await this.relayerProgram.methods.transferWrappedTokensWithRelay(W).accountsStrict({
        payer: b,
        config: y,
        tokenBridgeWrappedMint: V,
        fromTokenAccount: M,
        tmpTokenAccount: d,
        tokenBridgeWrappedMeta: wt(this.tokenBridgeProgramId, V),
        tokenBridgeConfig: Y,
        tokenBridgeAuthoritySigner: p,
        wormholeBridge: m,
        wormholeMessage: re.publicKey,
        tokenBridgeEmitter: a,
        tokenBridgeSequence: c,
        wormholeFeeCollector: h,
        payee: ne,
        wormholeProgram: this.wormholeProgramId,
        tokenBridgeProgram: this.tokenBridgeProgramId,
        systemProgram: te.programId,
        tokenProgram: Ze,
        executorProgram: this.executorProgramId,
        clock: sr,
        rent: Ye
      }).instruction()) : s.push(await this.relayerProgram.methods.transferNativeTokensWithRelay({
        ...W,
        wrapNative: Mt(r)
      }).accountsStrict({
        payer: b,
        config: y,
        mint: V,
        fromTokenAccount: M,
        tmpTokenAccount: d,
        tokenBridgeConfig: Y,
        tokenBridgeCustody: at,
        tokenBridgeAuthoritySigner: p,
        tokenBridgeCustodySigner: t,
        wormholeBridge: m,
        wormholeMessage: re.publicKey,
        tokenBridgeEmitter: a,
        tokenBridgeSequence: c,
        wormholeFeeCollector: h,
        payee: ne,
        systemProgram: te.programId,
        tokenProgram: Ze,
        wormholeProgram: this.wormholeProgramId,
        tokenBridgeProgram: this.tokenBridgeProgramId,
        associatedTokenProgram: St,
        executorProgram: this.executorProgramId,
        clock: sr,
        rent: Ye
      }).instruction());
      const N = await this.getAddressLookupTable(), { blockhash: O } = await this.connection.getLatestBlockhash(), He = new hn({
        payerKey: b,
        instructions: s,
        recentBlockhash: O
      }).compileToV0Message(N ? [
        N
      ] : []), Z = new Xt(He);
      yield this.createUnsignedTx({
        transaction: Z,
        signers: [
          re
        ]
      }, "ExecutorTokenBridge.transfer");
    }
    async *redeem(e, n) {
      const r = new $(e).unwrap(), u = new $(n.payload.payload.targetRecipient).unwrap(), o = n.payload.token.chain, g = n.payload.token.address, w = o === this.chain;
      let S;
      if (w) S = new $(g).unwrap();
      else {
        const at = await new en(this.network, this.chain, this.connection, this.contracts).getWrappedAsset({
          chain: o,
          address: g
        });
        S = new $(at).unwrap();
      }
      const b = await xt.getTokenProgramId(this.connection, S), R = $t(S, u, true, b), x = bt(this.wormholeProgramId, L.from(n.hash));
      await this.connection.getAccountInfo(x) || (yield* new fi(this.network, this.chain, this.connection, this.contracts).postVaa(r, n));
      const C = new $(n.payload.to.address).unwrap(), _ = new nr(di, C, {
        connection: this.connection
      }), B = A.findProgramAddressSync([
        L.from("redeemer")
      ], _.programId)[0], z = A.findProgramAddressSync([
        L.from("config")
      ], this.tokenBridgeProgramId)[0], U = A.findProgramAddressSync([
        L.from("tmp"),
        S.toBytes()
      ], _.programId)[0], D = At(this.tokenBridgeProgramId, n.emitterAddress.toUint8Array(), j(n.emitterChain), n.sequence), ue = _t(this.tokenBridgeProgramId, j(n.emitterChain), n.emitterAddress.toUint8Array()), V = A.findProgramAddressSync([
        S.toBuffer()
      ], this.tokenBridgeProgramId)[0], Ze = A.findProgramAddressSync([
        L.from("custody_signer")
      ], this.tokenBridgeProgramId)[0];
      let ne;
      const re = Array.from(n.hash);
      w ? ne = await _.methods.completeNativeTransferWithRelay(re).accountsStrict({
        payer: r,
        config: B,
        mint: S,
        recipientTokenAccount: R,
        recipient: u,
        tmpTokenAccount: U,
        tokenBridgeConfig: z,
        vaa: x,
        tokenBridgeClaim: D,
        tokenBridgeForeignEndpoint: ue,
        tokenBridgeCustody: V,
        tokenBridgeCustodySigner: Ze,
        wormholeProgram: this.wormholeProgramId,
        tokenBridgeProgram: this.tokenBridgeProgramId,
        tokenProgram: b,
        associatedTokenProgram: St,
        systemProgram: te.programId,
        rent: Ye
      }).instruction() : ne = await _.methods.completeWrappedTransferWithRelay(re).accountsStrict({
        payer: r,
        config: B,
        tokenBridgeWrappedMint: S,
        recipientTokenAccount: R,
        recipient: u,
        tmpTokenAccount: U,
        tokenBridgeWrappedMeta: wt(this.tokenBridgeProgramId, S),
        tokenBridgeConfig: z,
        vaa: x,
        tokenBridgeClaim: D,
        tokenBridgeForeignEndpoint: ue,
        tokenBridgeMintAuthority: rn(this.tokenBridgeProgramId),
        wormholeProgram: this.wormholeProgramId,
        tokenBridgeProgram: this.tokenBridgeProgramId,
        tokenProgram: b,
        associatedTokenProgram: St,
        systemProgram: te.programId,
        rent: Ye
      }).instruction();
      const { blockhash: rt } = await this.connection.getLatestBlockhash(), Rt = new hn({
        payerKey: r,
        instructions: [
          ne
        ],
        recentBlockhash: rt
      }).compileToV0Message(), kt = new Xt(Rt);
      yield this.createUnsignedTx({
        transaction: kt,
        signers: []
      }, "ExecutorTokenBridge.redeem");
    }
    async getAddressLookupTable() {
      const e = A.findProgramAddressSync([
        L.from("lut")
      ], this.relayerProgramId)[0];
      try {
        const n = (await this.relayerProgram.account.lut.fetch(e)).address, r = await this.connection.getAddressLookupTable(n);
        if (r.value) return r.value;
      } catch {
      }
      return null;
    }
    async estimateMsgValueAndGasLimit(e, n) {
      let r = 0n;
      if (r += 2n * 5000n + 7n * 5000n + 1400000n, r += 2n * 5000n + 7n * 5000n, r += 5000n + 3200000n, Mt(e.address) || ys(e) === yt.toString() ? r += 5000n + 5000000n : r += 5000n + 1200000n, n) {
        const u = new A(n.address.toString());
        if (!Mt(e.address)) {
          const o = new $(e.address).unwrap(), g = await this.connection.getAccountInfo(o);
          if (g === null) throw new Error("Couldn't determine token program. Mint account is null.");
          const w = $t(o, u, true, g.owner);
          await this.connection.getAccountInfo(w) === null && (Ut.associatedTokenAccountMinRent || (Ut.associatedTokenAccountMinRent = BigInt(await this.connection.getMinimumBalanceForRentExemption(165))), r += Ut.associatedTokenAccountMinRent);
        }
      }
      return {
        msgValue: r,
        gasLimit: 310000n
      };
    }
    createUnsignedTx(e, n, r = false) {
      return new yi(e, this.network, this.chain, n, r);
    }
  }, __publicField(_c, "associatedTokenAccountMinRent"), _c);
  vi(wi, "TokenBridge", en);
  vi(wi, "ExecutorTokenBridge", Ut);
});
export {
  yn as CreateMetadataAccountArgs,
  vt as Creator,
  In as Data,
  Mr as EndpointRegistration,
  di as ExecutorTokenBridgeRelayerIdl,
  oi as Key,
  br as Metadata,
  Ut as SolanaExecutorTokenBridge,
  en as SolanaTokenBridge,
  Qt as SplTokenMetadataProgram,
  Ji as TOKEN_BRIDGE_IDL,
  wr as TokenBridgeConfig,
  Ar as WrappedMeta,
  __tla,
  Wa as coder,
  si as createApproveAuthoritySignerInstruction,
  Oa as createAttestTokenInstruction,
  ui as createCompleteTransferNativeInstruction,
  qa as createCompleteTransferWrappedInstruction,
  Va as createCreateWrappedInstruction,
  du as createInitializeInstruction,
  ot as createReadOnlyTokenBridgeProgramInterface,
  hu as createRegisterChainInstruction,
  Na as createTokenBridgeProgramInterface,
  ci as createTransferNativeInstruction,
  li as createTransferNativeWithPayloadInstruction,
  Ja as createTransferWrappedInstruction,
  Xa as createTransferWrappedWithPayloadInstruction,
  fu as createUpgradeContractInstruction,
  Gt as deriveAuthoritySignerKey,
  kn as deriveCustodyKey,
  nn as deriveCustodySignerKey,
  _t as deriveEndpointKey,
  rn as deriveMintAuthorityKey,
  Sr as deriveRedeemerAccountKey,
  vr as deriveSenderAccountKey,
  xn as deriveSplTokenMetadataKey,
  Qe as deriveTokenBridgeConfigKey,
  wt as deriveWrappedMetaKey,
  Zt as deriveWrappedMintKey,
  ai as getAttestTokenAccounts,
  Fa as getCompleteTransferNativeAccounts,
  yu as getCompleteTransferNativeWithPayloadCpiAccounts,
  Da as getCompleteTransferWrappedAccounts,
  wu as getCompleteTransferWrappedWithPayloadCpiAccounts,
  Ha as getCreateWrappedAccounts,
  cu as getEndpointRegistration,
  Ga as getInitializeAccounts,
  lu as getMetadata,
  Za as getRegisterChainAccounts,
  uu as getTokenBridgeConfig,
  gu as getTokenBridgeDerivedAccounts,
  Ya as getTransferNativeAccounts,
  ji as getTransferNativeWithPayloadAccounts,
  mu as getTransferNativeWithPayloadCpiAccounts,
  ja as getTransferWrappedAccounts,
  Xi as getTransferWrappedWithPayloadAccounts,
  pu as getTransferWrappedWithPayloadCpiAccounts,
  $a as getUpgradeContractAccounts,
  tr as getWrappedMeta
};
