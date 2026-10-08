var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { b as Pu, c as Kn, d as Tu, a as B, B as he, g as Lu, r as Cu, e as Ti } from "./crypto-CvxmDsJu.js";
import { s as Ln, e as Xt, L as m, l as An, k as gi, y as $n, x as Z, n as P, p as G, o as J, f as F, C as od, d as Ts, R as Bu, D as Ou, m as z, r as ur, q as se, i as ra, v as Nu, w as zt, t as na, h as wt, j as Un, z as ad, W as zu, __tla as __tla_0 } from "./index-B5b07SCM.js";
import { u as Wa, aj as cd, f as ud, t as Wn, b1 as ld, G as hd, __tla as __tla_1 } from "./api-CvHQAL7j.js";
import { p as Pr, q as Ls, r as pi, b as dd, l as ws, n as fd, s as gd, B as pd, w as yd, g as ni, d as md, j as bd, _ as wd, __tla as __tla_2 } from "./index-DqT3oO8a.js";
import { c as kd, __tla as __tla_3 } from "./create-5T0G0oMd.js";
import { aE as vd, __tla as __tla_4 } from "./wormhole-DW6GpI7E.js";
let zn, Ps, dn, xl, E1, qn, I1, wp, Ua, Pl, lk;
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
  var si = {
    exports: {}
  }, Sd = si.exports, Da;
  function _d() {
    return Da || (Da = 1, (function(o) {
      (function(e, t) {
        function r(f, i) {
          if (!f) throw new Error(i || "Assertion failed");
        }
        function s(f, i) {
          f.super_ = i;
          var c = function() {
          };
          c.prototype = i.prototype, f.prototype = new c(), f.prototype.constructor = f;
        }
        function n(f, i, c) {
          if (n.isBN(f)) return f;
          this.negative = 0, this.words = null, this.length = 0, this.red = null, f !== null && ((i === "le" || i === "be") && (c = i, i = 10), this._init(f || 0, i || 10, c || "be"));
        }
        typeof e == "object" ? e.exports = n : t.BN = n, n.BN = n, n.wordSize = 26;
        var a;
        try {
          typeof window < "u" && typeof window.Buffer < "u" ? a = window.Buffer : a = Pu().Buffer;
        } catch {
        }
        n.isBN = function(i) {
          return i instanceof n ? true : i !== null && typeof i == "object" && i.constructor.wordSize === n.wordSize && Array.isArray(i.words);
        }, n.max = function(i, c) {
          return i.cmp(c) > 0 ? i : c;
        }, n.min = function(i, c) {
          return i.cmp(c) < 0 ? i : c;
        }, n.prototype._init = function(i, c, h) {
          if (typeof i == "number") return this._initNumber(i, c, h);
          if (typeof i == "object") return this._initArray(i, c, h);
          c === "hex" && (c = 16), r(c === (c | 0) && c >= 2 && c <= 36), i = i.toString().replace(/\s+/g, "");
          var g = 0;
          i[0] === "-" && (g++, this.negative = 1), g < i.length && (c === 16 ? this._parseHex(i, g, h) : (this._parseBase(i, c, g), h === "le" && this._initArray(this.toArray(), c, h)));
        }, n.prototype._initNumber = function(i, c, h) {
          i < 0 && (this.negative = 1, i = -i), i < 67108864 ? (this.words = [
            i & 67108863
          ], this.length = 1) : i < 4503599627370496 ? (this.words = [
            i & 67108863,
            i / 67108864 & 67108863
          ], this.length = 2) : (r(i < 9007199254740992), this.words = [
            i & 67108863,
            i / 67108864 & 67108863,
            1
          ], this.length = 3), h === "le" && this._initArray(this.toArray(), c, h);
        }, n.prototype._initArray = function(i, c, h) {
          if (r(typeof i.length == "number"), i.length <= 0) return this.words = [
            0
          ], this.length = 1, this;
          this.length = Math.ceil(i.length / 3), this.words = new Array(this.length);
          for (var g = 0; g < this.length; g++) this.words[g] = 0;
          var w, v, _ = 0;
          if (h === "be") for (g = i.length - 1, w = 0; g >= 0; g -= 3) v = i[g] | i[g - 1] << 8 | i[g - 2] << 16, this.words[w] |= v << _ & 67108863, this.words[w + 1] = v >>> 26 - _ & 67108863, _ += 24, _ >= 26 && (_ -= 26, w++);
          else if (h === "le") for (g = 0, w = 0; g < i.length; g += 3) v = i[g] | i[g + 1] << 8 | i[g + 2] << 16, this.words[w] |= v << _ & 67108863, this.words[w + 1] = v >>> 26 - _ & 67108863, _ += 24, _ >= 26 && (_ -= 26, w++);
          return this._strip();
        };
        function l(f, i) {
          var c = f.charCodeAt(i);
          if (c >= 48 && c <= 57) return c - 48;
          if (c >= 65 && c <= 70) return c - 55;
          if (c >= 97 && c <= 102) return c - 87;
          r(false, "Invalid character in " + f);
        }
        function d(f, i, c) {
          var h = l(f, c);
          return c - 1 >= i && (h |= l(f, c - 1) << 4), h;
        }
        n.prototype._parseHex = function(i, c, h) {
          this.length = Math.ceil((i.length - c) / 6), this.words = new Array(this.length);
          for (var g = 0; g < this.length; g++) this.words[g] = 0;
          var w = 0, v = 0, _;
          if (h === "be") for (g = i.length - 1; g >= c; g -= 2) _ = d(i, c, g) << w, this.words[v] |= _ & 67108863, w >= 18 ? (w -= 18, v += 1, this.words[v] |= _ >>> 26) : w += 8;
          else {
            var y = i.length - c;
            for (g = y % 2 === 0 ? c + 1 : c; g < i.length; g += 2) _ = d(i, c, g) << w, this.words[v] |= _ & 67108863, w >= 18 ? (w -= 18, v += 1, this.words[v] |= _ >>> 26) : w += 8;
          }
          this._strip();
        };
        function p(f, i, c, h) {
          for (var g = 0, w = 0, v = Math.min(f.length, c), _ = i; _ < v; _++) {
            var y = f.charCodeAt(_) - 48;
            g *= h, y >= 49 ? w = y - 49 + 10 : y >= 17 ? w = y - 17 + 10 : w = y, r(y >= 0 && w < h, "Invalid character"), g += w;
          }
          return g;
        }
        n.prototype._parseBase = function(i, c, h) {
          this.words = [
            0
          ], this.length = 1;
          for (var g = 0, w = 1; w <= 67108863; w *= c) g++;
          g--, w = w / c | 0;
          for (var v = i.length - h, _ = v % g, y = Math.min(v, v - _) + h, u = 0, b = h; b < y; b += g) u = p(i, b, b + g, c), this.imuln(w), this.words[0] + u < 67108864 ? this.words[0] += u : this._iaddn(u);
          if (_ !== 0) {
            var q = 1;
            for (u = p(i, b, i.length, c), b = 0; b < _; b++) q *= c;
            this.imuln(q), this.words[0] + u < 67108864 ? this.words[0] += u : this._iaddn(u);
          }
          this._strip();
        }, n.prototype.copy = function(i) {
          i.words = new Array(this.length);
          for (var c = 0; c < this.length; c++) i.words[c] = this.words[c];
          i.length = this.length, i.negative = this.negative, i.red = this.red;
        };
        function k(f, i) {
          f.words = i.words, f.length = i.length, f.negative = i.negative, f.red = i.red;
        }
        if (n.prototype._move = function(i) {
          k(i, this);
        }, n.prototype.clone = function() {
          var i = new n(null);
          return this.copy(i), i;
        }, n.prototype._expand = function(i) {
          for (; this.length < i; ) this.words[this.length++] = 0;
          return this;
        }, n.prototype._strip = function() {
          for (; this.length > 1 && this.words[this.length - 1] === 0; ) this.length--;
          return this._normSign();
        }, n.prototype._normSign = function() {
          return this.length === 1 && this.words[0] === 0 && (this.negative = 0), this;
        }, typeof Symbol < "u" && typeof Symbol.for == "function") try {
          n.prototype[Symbol.for("nodejs.util.inspect.custom")] = A;
        } catch {
          n.prototype.inspect = A;
        }
        else n.prototype.inspect = A;
        function A() {
          return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
        }
        var E = [
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
        ], S = [
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
        ], I = [
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
        n.prototype.toString = function(i, c) {
          i = i || 10, c = c | 0 || 1;
          var h;
          if (i === 16 || i === "hex") {
            h = "";
            for (var g = 0, w = 0, v = 0; v < this.length; v++) {
              var _ = this.words[v], y = ((_ << g | w) & 16777215).toString(16);
              w = _ >>> 24 - g & 16777215, g += 2, g >= 26 && (g -= 26, v--), w !== 0 || v !== this.length - 1 ? h = E[6 - y.length] + y + h : h = y + h;
            }
            for (w !== 0 && (h = w.toString(16) + h); h.length % c !== 0; ) h = "0" + h;
            return this.negative !== 0 && (h = "-" + h), h;
          }
          if (i === (i | 0) && i >= 2 && i <= 36) {
            var u = S[i], b = I[i];
            h = "";
            var q = this.clone();
            for (q.negative = 0; !q.isZero(); ) {
              var W = q.modrn(b).toString(i);
              q = q.idivn(b), q.isZero() ? h = W + h : h = E[u - W.length] + W + h;
            }
            for (this.isZero() && (h = "0" + h); h.length % c !== 0; ) h = "0" + h;
            return this.negative !== 0 && (h = "-" + h), h;
          }
          r(false, "Base should be between 2 and 36");
        }, n.prototype.toNumber = function() {
          var i = this.words[0];
          return this.length === 2 ? i += this.words[1] * 67108864 : this.length === 3 && this.words[2] === 1 ? i += 4503599627370496 + this.words[1] * 67108864 : this.length > 2 && r(false, "Number can only safely store up to 53 bits"), this.negative !== 0 ? -i : i;
        }, n.prototype.toJSON = function() {
          return this.toString(16, 2);
        }, a && (n.prototype.toBuffer = function(i, c) {
          return this.toArrayLike(a, i, c);
        }), n.prototype.toArray = function(i, c) {
          return this.toArrayLike(Array, i, c);
        };
        var R = function(i, c) {
          return i.allocUnsafe ? i.allocUnsafe(c) : new i(c);
        };
        n.prototype.toArrayLike = function(i, c, h) {
          this._strip();
          var g = this.byteLength(), w = h || Math.max(1, g);
          r(g <= w, "byte array longer than desired length"), r(w > 0, "Requested array length <= 0");
          var v = R(i, w), _ = c === "le" ? "LE" : "BE";
          return this["_toArrayLike" + _](v, g), v;
        }, n.prototype._toArrayLikeLE = function(i, c) {
          for (var h = 0, g = 0, w = 0, v = 0; w < this.length; w++) {
            var _ = this.words[w] << v | g;
            i[h++] = _ & 255, h < i.length && (i[h++] = _ >> 8 & 255), h < i.length && (i[h++] = _ >> 16 & 255), v === 6 ? (h < i.length && (i[h++] = _ >> 24 & 255), g = 0, v = 0) : (g = _ >>> 24, v += 2);
          }
          if (h < i.length) for (i[h++] = g; h < i.length; ) i[h++] = 0;
        }, n.prototype._toArrayLikeBE = function(i, c) {
          for (var h = i.length - 1, g = 0, w = 0, v = 0; w < this.length; w++) {
            var _ = this.words[w] << v | g;
            i[h--] = _ & 255, h >= 0 && (i[h--] = _ >> 8 & 255), h >= 0 && (i[h--] = _ >> 16 & 255), v === 6 ? (h >= 0 && (i[h--] = _ >> 24 & 255), g = 0, v = 0) : (g = _ >>> 24, v += 2);
          }
          if (h >= 0) for (i[h--] = g; h >= 0; ) i[h--] = 0;
        }, Math.clz32 ? n.prototype._countBits = function(i) {
          return 32 - Math.clz32(i);
        } : n.prototype._countBits = function(i) {
          var c = i, h = 0;
          return c >= 4096 && (h += 13, c >>>= 13), c >= 64 && (h += 7, c >>>= 7), c >= 8 && (h += 4, c >>>= 4), c >= 2 && (h += 2, c >>>= 2), h + c;
        }, n.prototype._zeroBits = function(i) {
          if (i === 0) return 26;
          var c = i, h = 0;
          return (c & 8191) === 0 && (h += 13, c >>>= 13), (c & 127) === 0 && (h += 7, c >>>= 7), (c & 15) === 0 && (h += 4, c >>>= 4), (c & 3) === 0 && (h += 2, c >>>= 2), (c & 1) === 0 && h++, h;
        }, n.prototype.bitLength = function() {
          var i = this.words[this.length - 1], c = this._countBits(i);
          return (this.length - 1) * 26 + c;
        };
        function M(f) {
          for (var i = new Array(f.bitLength()), c = 0; c < i.length; c++) {
            var h = c / 26 | 0, g = c % 26;
            i[c] = f.words[h] >>> g & 1;
          }
          return i;
        }
        n.prototype.zeroBits = function() {
          if (this.isZero()) return 0;
          for (var i = 0, c = 0; c < this.length; c++) {
            var h = this._zeroBits(this.words[c]);
            if (i += h, h !== 26) break;
          }
          return i;
        }, n.prototype.byteLength = function() {
          return Math.ceil(this.bitLength() / 8);
        }, n.prototype.toTwos = function(i) {
          return this.negative !== 0 ? this.abs().inotn(i).iaddn(1) : this.clone();
        }, n.prototype.fromTwos = function(i) {
          return this.testn(i - 1) ? this.notn(i).iaddn(1).ineg() : this.clone();
        }, n.prototype.isNeg = function() {
          return this.negative !== 0;
        }, n.prototype.neg = function() {
          return this.clone().ineg();
        }, n.prototype.ineg = function() {
          return this.isZero() || (this.negative ^= 1), this;
        }, n.prototype.iuor = function(i) {
          for (; this.length < i.length; ) this.words[this.length++] = 0;
          for (var c = 0; c < i.length; c++) this.words[c] = this.words[c] | i.words[c];
          return this._strip();
        }, n.prototype.ior = function(i) {
          return r((this.negative | i.negative) === 0), this.iuor(i);
        }, n.prototype.or = function(i) {
          return this.length > i.length ? this.clone().ior(i) : i.clone().ior(this);
        }, n.prototype.uor = function(i) {
          return this.length > i.length ? this.clone().iuor(i) : i.clone().iuor(this);
        }, n.prototype.iuand = function(i) {
          var c;
          this.length > i.length ? c = i : c = this;
          for (var h = 0; h < c.length; h++) this.words[h] = this.words[h] & i.words[h];
          return this.length = c.length, this._strip();
        }, n.prototype.iand = function(i) {
          return r((this.negative | i.negative) === 0), this.iuand(i);
        }, n.prototype.and = function(i) {
          return this.length > i.length ? this.clone().iand(i) : i.clone().iand(this);
        }, n.prototype.uand = function(i) {
          return this.length > i.length ? this.clone().iuand(i) : i.clone().iuand(this);
        }, n.prototype.iuxor = function(i) {
          var c, h;
          this.length > i.length ? (c = this, h = i) : (c = i, h = this);
          for (var g = 0; g < h.length; g++) this.words[g] = c.words[g] ^ h.words[g];
          if (this !== c) for (; g < c.length; g++) this.words[g] = c.words[g];
          return this.length = c.length, this._strip();
        }, n.prototype.ixor = function(i) {
          return r((this.negative | i.negative) === 0), this.iuxor(i);
        }, n.prototype.xor = function(i) {
          return this.length > i.length ? this.clone().ixor(i) : i.clone().ixor(this);
        }, n.prototype.uxor = function(i) {
          return this.length > i.length ? this.clone().iuxor(i) : i.clone().iuxor(this);
        }, n.prototype.inotn = function(i) {
          r(typeof i == "number" && i >= 0);
          var c = Math.ceil(i / 26) | 0, h = i % 26;
          this._expand(c), h > 0 && c--;
          for (var g = 0; g < c; g++) this.words[g] = ~this.words[g] & 67108863;
          for (h > 0 && (this.words[g] = ~this.words[g] & 67108863 >> 26 - h, g++); g < this.length; g++) this.words[g] = 0;
          return this._strip();
        }, n.prototype.notn = function(i) {
          return this.clone().inotn(i);
        }, n.prototype.setn = function(i, c) {
          r(typeof i == "number" && i >= 0);
          var h = i / 26 | 0, g = i % 26;
          return this._expand(h + 1), c ? this.words[h] = this.words[h] | 1 << g : this.words[h] = this.words[h] & ~(1 << g), this._strip();
        }, n.prototype.iadd = function(i) {
          var c;
          if (this.negative !== 0 && i.negative === 0) return this.negative = 0, c = this.isub(i), this.negative ^= 1, this._normSign();
          if (this.negative === 0 && i.negative !== 0) return i.negative = 0, c = this.isub(i), i.negative = 1, c._normSign();
          var h, g;
          this.length > i.length ? (h = this, g = i) : (h = i, g = this);
          for (var w = 0, v = 0; v < g.length; v++) c = (h.words[v] | 0) + (g.words[v] | 0) + w, this.words[v] = c & 67108863, w = c >>> 26;
          for (; w !== 0 && v < h.length; v++) c = (h.words[v] | 0) + w, this.words[v] = c & 67108863, w = c >>> 26;
          if (this.length = h.length, w !== 0) this.words[this.length] = w, this.length++;
          else if (h !== this) for (; v < h.length; v++) this.words[v] = h.words[v];
          return this;
        }, n.prototype.add = function(i) {
          var c;
          return i.negative !== 0 && this.negative === 0 ? (i.negative = 0, c = this.sub(i), i.negative ^= 1, c) : i.negative === 0 && this.negative !== 0 ? (this.negative = 0, c = i.sub(this), this.negative = 1, c) : this.length > i.length ? this.clone().iadd(i) : i.clone().iadd(this);
        }, n.prototype.isub = function(i) {
          if (i.negative !== 0) {
            i.negative = 0;
            var c = this.iadd(i);
            return i.negative = 1, c._normSign();
          } else if (this.negative !== 0) return this.negative = 0, this.iadd(i), this.negative = 1, this._normSign();
          var h = this.cmp(i);
          if (h === 0) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
          var g, w;
          h > 0 ? (g = this, w = i) : (g = i, w = this);
          for (var v = 0, _ = 0; _ < w.length; _++) c = (g.words[_] | 0) - (w.words[_] | 0) + v, v = c >> 26, this.words[_] = c & 67108863;
          for (; v !== 0 && _ < g.length; _++) c = (g.words[_] | 0) + v, v = c >> 26, this.words[_] = c & 67108863;
          if (v === 0 && _ < g.length && g !== this) for (; _ < g.length; _++) this.words[_] = g.words[_];
          return this.length = Math.max(this.length, _), g !== this && (this.negative = 1), this._strip();
        }, n.prototype.sub = function(i) {
          return this.clone().isub(i);
        };
        function x(f, i, c) {
          c.negative = i.negative ^ f.negative;
          var h = f.length + i.length | 0;
          c.length = h, h = h - 1 | 0;
          var g = f.words[0] | 0, w = i.words[0] | 0, v = g * w, _ = v & 67108863, y = v / 67108864 | 0;
          c.words[0] = _;
          for (var u = 1; u < h; u++) {
            for (var b = y >>> 26, q = y & 67108863, W = Math.min(u, i.length - 1), V = Math.max(0, u - f.length + 1); V <= W; V++) {
              var ot = u - V | 0;
              g = f.words[ot] | 0, w = i.words[V] | 0, v = g * w + q, b += v / 67108864 | 0, q = v & 67108863;
            }
            c.words[u] = q | 0, y = b | 0;
          }
          return y !== 0 ? c.words[u] = y | 0 : c.length--, c._strip();
        }
        var C = function(i, c, h) {
          var g = i.words, w = c.words, v = h.words, _ = 0, y, u, b, q = g[0] | 0, W = q & 8191, V = q >>> 13, ot = g[1] | 0, ce = ot & 8191, ue = ot >>> 13, Yn = g[2] | 0, ge = Yn & 8191, pe = Yn >>> 13, Zn = g[3] | 0, ye = Zn & 8191, me = Zn >>> 13, Jn = g[4] | 0, be = Jn & 8191, we = Jn >>> 13, Xn = g[5] | 0, ke = Xn & 8191, ve = Xn >>> 13, Qn = g[6] | 0, Se = Qn & 8191, _e = Qn >>> 13, es = g[7] | 0, Ae = es & 8191, Ie = es >>> 13, ts = g[8] | 0, Ee = ts & 8191, Re = ts >>> 13, rs = g[9] | 0, Me = rs & 8191, xe = rs >>> 13, ns = w[0] | 0, Pe = ns & 8191, Te = ns >>> 13, ss = w[1] | 0, Le = ss & 8191, Ce = ss >>> 13, is = w[2] | 0, Be = is & 8191, Oe = is >>> 13, os = w[3] | 0, Ne = os & 8191, ze = os >>> 13, as = w[4] | 0, Ke = as & 8191, $e = as >>> 13, cs = w[5] | 0, Ue = cs & 8191, We = cs >>> 13, us = w[6] | 0, De = us & 8191, qe = us >>> 13, ls = w[7] | 0, Ve = ls & 8191, Fe = ls >>> 13, hs = w[8] | 0, He = hs & 8191, Ge = hs >>> 13, ds = w[9] | 0, je = ds & 8191, Ye = ds >>> 13;
          h.negative = i.negative ^ c.negative, h.length = 19, y = Math.imul(W, Pe), u = Math.imul(W, Te), u = u + Math.imul(V, Pe) | 0, b = Math.imul(V, Te);
          var Lr = (_ + y | 0) + ((u & 8191) << 13) | 0;
          _ = (b + (u >>> 13) | 0) + (Lr >>> 26) | 0, Lr &= 67108863, y = Math.imul(ce, Pe), u = Math.imul(ce, Te), u = u + Math.imul(ue, Pe) | 0, b = Math.imul(ue, Te), y = y + Math.imul(W, Le) | 0, u = u + Math.imul(W, Ce) | 0, u = u + Math.imul(V, Le) | 0, b = b + Math.imul(V, Ce) | 0;
          var Cr = (_ + y | 0) + ((u & 8191) << 13) | 0;
          _ = (b + (u >>> 13) | 0) + (Cr >>> 26) | 0, Cr &= 67108863, y = Math.imul(ge, Pe), u = Math.imul(ge, Te), u = u + Math.imul(pe, Pe) | 0, b = Math.imul(pe, Te), y = y + Math.imul(ce, Le) | 0, u = u + Math.imul(ce, Ce) | 0, u = u + Math.imul(ue, Le) | 0, b = b + Math.imul(ue, Ce) | 0, y = y + Math.imul(W, Be) | 0, u = u + Math.imul(W, Oe) | 0, u = u + Math.imul(V, Be) | 0, b = b + Math.imul(V, Oe) | 0;
          var Br = (_ + y | 0) + ((u & 8191) << 13) | 0;
          _ = (b + (u >>> 13) | 0) + (Br >>> 26) | 0, Br &= 67108863, y = Math.imul(ye, Pe), u = Math.imul(ye, Te), u = u + Math.imul(me, Pe) | 0, b = Math.imul(me, Te), y = y + Math.imul(ge, Le) | 0, u = u + Math.imul(ge, Ce) | 0, u = u + Math.imul(pe, Le) | 0, b = b + Math.imul(pe, Ce) | 0, y = y + Math.imul(ce, Be) | 0, u = u + Math.imul(ce, Oe) | 0, u = u + Math.imul(ue, Be) | 0, b = b + Math.imul(ue, Oe) | 0, y = y + Math.imul(W, Ne) | 0, u = u + Math.imul(W, ze) | 0, u = u + Math.imul(V, Ne) | 0, b = b + Math.imul(V, ze) | 0;
          var Or = (_ + y | 0) + ((u & 8191) << 13) | 0;
          _ = (b + (u >>> 13) | 0) + (Or >>> 26) | 0, Or &= 67108863, y = Math.imul(be, Pe), u = Math.imul(be, Te), u = u + Math.imul(we, Pe) | 0, b = Math.imul(we, Te), y = y + Math.imul(ye, Le) | 0, u = u + Math.imul(ye, Ce) | 0, u = u + Math.imul(me, Le) | 0, b = b + Math.imul(me, Ce) | 0, y = y + Math.imul(ge, Be) | 0, u = u + Math.imul(ge, Oe) | 0, u = u + Math.imul(pe, Be) | 0, b = b + Math.imul(pe, Oe) | 0, y = y + Math.imul(ce, Ne) | 0, u = u + Math.imul(ce, ze) | 0, u = u + Math.imul(ue, Ne) | 0, b = b + Math.imul(ue, ze) | 0, y = y + Math.imul(W, Ke) | 0, u = u + Math.imul(W, $e) | 0, u = u + Math.imul(V, Ke) | 0, b = b + Math.imul(V, $e) | 0;
          var Nr = (_ + y | 0) + ((u & 8191) << 13) | 0;
          _ = (b + (u >>> 13) | 0) + (Nr >>> 26) | 0, Nr &= 67108863, y = Math.imul(ke, Pe), u = Math.imul(ke, Te), u = u + Math.imul(ve, Pe) | 0, b = Math.imul(ve, Te), y = y + Math.imul(be, Le) | 0, u = u + Math.imul(be, Ce) | 0, u = u + Math.imul(we, Le) | 0, b = b + Math.imul(we, Ce) | 0, y = y + Math.imul(ye, Be) | 0, u = u + Math.imul(ye, Oe) | 0, u = u + Math.imul(me, Be) | 0, b = b + Math.imul(me, Oe) | 0, y = y + Math.imul(ge, Ne) | 0, u = u + Math.imul(ge, ze) | 0, u = u + Math.imul(pe, Ne) | 0, b = b + Math.imul(pe, ze) | 0, y = y + Math.imul(ce, Ke) | 0, u = u + Math.imul(ce, $e) | 0, u = u + Math.imul(ue, Ke) | 0, b = b + Math.imul(ue, $e) | 0, y = y + Math.imul(W, Ue) | 0, u = u + Math.imul(W, We) | 0, u = u + Math.imul(V, Ue) | 0, b = b + Math.imul(V, We) | 0;
          var zr = (_ + y | 0) + ((u & 8191) << 13) | 0;
          _ = (b + (u >>> 13) | 0) + (zr >>> 26) | 0, zr &= 67108863, y = Math.imul(Se, Pe), u = Math.imul(Se, Te), u = u + Math.imul(_e, Pe) | 0, b = Math.imul(_e, Te), y = y + Math.imul(ke, Le) | 0, u = u + Math.imul(ke, Ce) | 0, u = u + Math.imul(ve, Le) | 0, b = b + Math.imul(ve, Ce) | 0, y = y + Math.imul(be, Be) | 0, u = u + Math.imul(be, Oe) | 0, u = u + Math.imul(we, Be) | 0, b = b + Math.imul(we, Oe) | 0, y = y + Math.imul(ye, Ne) | 0, u = u + Math.imul(ye, ze) | 0, u = u + Math.imul(me, Ne) | 0, b = b + Math.imul(me, ze) | 0, y = y + Math.imul(ge, Ke) | 0, u = u + Math.imul(ge, $e) | 0, u = u + Math.imul(pe, Ke) | 0, b = b + Math.imul(pe, $e) | 0, y = y + Math.imul(ce, Ue) | 0, u = u + Math.imul(ce, We) | 0, u = u + Math.imul(ue, Ue) | 0, b = b + Math.imul(ue, We) | 0, y = y + Math.imul(W, De) | 0, u = u + Math.imul(W, qe) | 0, u = u + Math.imul(V, De) | 0, b = b + Math.imul(V, qe) | 0;
          var Kr = (_ + y | 0) + ((u & 8191) << 13) | 0;
          _ = (b + (u >>> 13) | 0) + (Kr >>> 26) | 0, Kr &= 67108863, y = Math.imul(Ae, Pe), u = Math.imul(Ae, Te), u = u + Math.imul(Ie, Pe) | 0, b = Math.imul(Ie, Te), y = y + Math.imul(Se, Le) | 0, u = u + Math.imul(Se, Ce) | 0, u = u + Math.imul(_e, Le) | 0, b = b + Math.imul(_e, Ce) | 0, y = y + Math.imul(ke, Be) | 0, u = u + Math.imul(ke, Oe) | 0, u = u + Math.imul(ve, Be) | 0, b = b + Math.imul(ve, Oe) | 0, y = y + Math.imul(be, Ne) | 0, u = u + Math.imul(be, ze) | 0, u = u + Math.imul(we, Ne) | 0, b = b + Math.imul(we, ze) | 0, y = y + Math.imul(ye, Ke) | 0, u = u + Math.imul(ye, $e) | 0, u = u + Math.imul(me, Ke) | 0, b = b + Math.imul(me, $e) | 0, y = y + Math.imul(ge, Ue) | 0, u = u + Math.imul(ge, We) | 0, u = u + Math.imul(pe, Ue) | 0, b = b + Math.imul(pe, We) | 0, y = y + Math.imul(ce, De) | 0, u = u + Math.imul(ce, qe) | 0, u = u + Math.imul(ue, De) | 0, b = b + Math.imul(ue, qe) | 0, y = y + Math.imul(W, Ve) | 0, u = u + Math.imul(W, Fe) | 0, u = u + Math.imul(V, Ve) | 0, b = b + Math.imul(V, Fe) | 0;
          var $r = (_ + y | 0) + ((u & 8191) << 13) | 0;
          _ = (b + (u >>> 13) | 0) + ($r >>> 26) | 0, $r &= 67108863, y = Math.imul(Ee, Pe), u = Math.imul(Ee, Te), u = u + Math.imul(Re, Pe) | 0, b = Math.imul(Re, Te), y = y + Math.imul(Ae, Le) | 0, u = u + Math.imul(Ae, Ce) | 0, u = u + Math.imul(Ie, Le) | 0, b = b + Math.imul(Ie, Ce) | 0, y = y + Math.imul(Se, Be) | 0, u = u + Math.imul(Se, Oe) | 0, u = u + Math.imul(_e, Be) | 0, b = b + Math.imul(_e, Oe) | 0, y = y + Math.imul(ke, Ne) | 0, u = u + Math.imul(ke, ze) | 0, u = u + Math.imul(ve, Ne) | 0, b = b + Math.imul(ve, ze) | 0, y = y + Math.imul(be, Ke) | 0, u = u + Math.imul(be, $e) | 0, u = u + Math.imul(we, Ke) | 0, b = b + Math.imul(we, $e) | 0, y = y + Math.imul(ye, Ue) | 0, u = u + Math.imul(ye, We) | 0, u = u + Math.imul(me, Ue) | 0, b = b + Math.imul(me, We) | 0, y = y + Math.imul(ge, De) | 0, u = u + Math.imul(ge, qe) | 0, u = u + Math.imul(pe, De) | 0, b = b + Math.imul(pe, qe) | 0, y = y + Math.imul(ce, Ve) | 0, u = u + Math.imul(ce, Fe) | 0, u = u + Math.imul(ue, Ve) | 0, b = b + Math.imul(ue, Fe) | 0, y = y + Math.imul(W, He) | 0, u = u + Math.imul(W, Ge) | 0, u = u + Math.imul(V, He) | 0, b = b + Math.imul(V, Ge) | 0;
          var Ur = (_ + y | 0) + ((u & 8191) << 13) | 0;
          _ = (b + (u >>> 13) | 0) + (Ur >>> 26) | 0, Ur &= 67108863, y = Math.imul(Me, Pe), u = Math.imul(Me, Te), u = u + Math.imul(xe, Pe) | 0, b = Math.imul(xe, Te), y = y + Math.imul(Ee, Le) | 0, u = u + Math.imul(Ee, Ce) | 0, u = u + Math.imul(Re, Le) | 0, b = b + Math.imul(Re, Ce) | 0, y = y + Math.imul(Ae, Be) | 0, u = u + Math.imul(Ae, Oe) | 0, u = u + Math.imul(Ie, Be) | 0, b = b + Math.imul(Ie, Oe) | 0, y = y + Math.imul(Se, Ne) | 0, u = u + Math.imul(Se, ze) | 0, u = u + Math.imul(_e, Ne) | 0, b = b + Math.imul(_e, ze) | 0, y = y + Math.imul(ke, Ke) | 0, u = u + Math.imul(ke, $e) | 0, u = u + Math.imul(ve, Ke) | 0, b = b + Math.imul(ve, $e) | 0, y = y + Math.imul(be, Ue) | 0, u = u + Math.imul(be, We) | 0, u = u + Math.imul(we, Ue) | 0, b = b + Math.imul(we, We) | 0, y = y + Math.imul(ye, De) | 0, u = u + Math.imul(ye, qe) | 0, u = u + Math.imul(me, De) | 0, b = b + Math.imul(me, qe) | 0, y = y + Math.imul(ge, Ve) | 0, u = u + Math.imul(ge, Fe) | 0, u = u + Math.imul(pe, Ve) | 0, b = b + Math.imul(pe, Fe) | 0, y = y + Math.imul(ce, He) | 0, u = u + Math.imul(ce, Ge) | 0, u = u + Math.imul(ue, He) | 0, b = b + Math.imul(ue, Ge) | 0, y = y + Math.imul(W, je) | 0, u = u + Math.imul(W, Ye) | 0, u = u + Math.imul(V, je) | 0, b = b + Math.imul(V, Ye) | 0;
          var Wr = (_ + y | 0) + ((u & 8191) << 13) | 0;
          _ = (b + (u >>> 13) | 0) + (Wr >>> 26) | 0, Wr &= 67108863, y = Math.imul(Me, Le), u = Math.imul(Me, Ce), u = u + Math.imul(xe, Le) | 0, b = Math.imul(xe, Ce), y = y + Math.imul(Ee, Be) | 0, u = u + Math.imul(Ee, Oe) | 0, u = u + Math.imul(Re, Be) | 0, b = b + Math.imul(Re, Oe) | 0, y = y + Math.imul(Ae, Ne) | 0, u = u + Math.imul(Ae, ze) | 0, u = u + Math.imul(Ie, Ne) | 0, b = b + Math.imul(Ie, ze) | 0, y = y + Math.imul(Se, Ke) | 0, u = u + Math.imul(Se, $e) | 0, u = u + Math.imul(_e, Ke) | 0, b = b + Math.imul(_e, $e) | 0, y = y + Math.imul(ke, Ue) | 0, u = u + Math.imul(ke, We) | 0, u = u + Math.imul(ve, Ue) | 0, b = b + Math.imul(ve, We) | 0, y = y + Math.imul(be, De) | 0, u = u + Math.imul(be, qe) | 0, u = u + Math.imul(we, De) | 0, b = b + Math.imul(we, qe) | 0, y = y + Math.imul(ye, Ve) | 0, u = u + Math.imul(ye, Fe) | 0, u = u + Math.imul(me, Ve) | 0, b = b + Math.imul(me, Fe) | 0, y = y + Math.imul(ge, He) | 0, u = u + Math.imul(ge, Ge) | 0, u = u + Math.imul(pe, He) | 0, b = b + Math.imul(pe, Ge) | 0, y = y + Math.imul(ce, je) | 0, u = u + Math.imul(ce, Ye) | 0, u = u + Math.imul(ue, je) | 0, b = b + Math.imul(ue, Ye) | 0;
          var Dr = (_ + y | 0) + ((u & 8191) << 13) | 0;
          _ = (b + (u >>> 13) | 0) + (Dr >>> 26) | 0, Dr &= 67108863, y = Math.imul(Me, Be), u = Math.imul(Me, Oe), u = u + Math.imul(xe, Be) | 0, b = Math.imul(xe, Oe), y = y + Math.imul(Ee, Ne) | 0, u = u + Math.imul(Ee, ze) | 0, u = u + Math.imul(Re, Ne) | 0, b = b + Math.imul(Re, ze) | 0, y = y + Math.imul(Ae, Ke) | 0, u = u + Math.imul(Ae, $e) | 0, u = u + Math.imul(Ie, Ke) | 0, b = b + Math.imul(Ie, $e) | 0, y = y + Math.imul(Se, Ue) | 0, u = u + Math.imul(Se, We) | 0, u = u + Math.imul(_e, Ue) | 0, b = b + Math.imul(_e, We) | 0, y = y + Math.imul(ke, De) | 0, u = u + Math.imul(ke, qe) | 0, u = u + Math.imul(ve, De) | 0, b = b + Math.imul(ve, qe) | 0, y = y + Math.imul(be, Ve) | 0, u = u + Math.imul(be, Fe) | 0, u = u + Math.imul(we, Ve) | 0, b = b + Math.imul(we, Fe) | 0, y = y + Math.imul(ye, He) | 0, u = u + Math.imul(ye, Ge) | 0, u = u + Math.imul(me, He) | 0, b = b + Math.imul(me, Ge) | 0, y = y + Math.imul(ge, je) | 0, u = u + Math.imul(ge, Ye) | 0, u = u + Math.imul(pe, je) | 0, b = b + Math.imul(pe, Ye) | 0;
          var qr = (_ + y | 0) + ((u & 8191) << 13) | 0;
          _ = (b + (u >>> 13) | 0) + (qr >>> 26) | 0, qr &= 67108863, y = Math.imul(Me, Ne), u = Math.imul(Me, ze), u = u + Math.imul(xe, Ne) | 0, b = Math.imul(xe, ze), y = y + Math.imul(Ee, Ke) | 0, u = u + Math.imul(Ee, $e) | 0, u = u + Math.imul(Re, Ke) | 0, b = b + Math.imul(Re, $e) | 0, y = y + Math.imul(Ae, Ue) | 0, u = u + Math.imul(Ae, We) | 0, u = u + Math.imul(Ie, Ue) | 0, b = b + Math.imul(Ie, We) | 0, y = y + Math.imul(Se, De) | 0, u = u + Math.imul(Se, qe) | 0, u = u + Math.imul(_e, De) | 0, b = b + Math.imul(_e, qe) | 0, y = y + Math.imul(ke, Ve) | 0, u = u + Math.imul(ke, Fe) | 0, u = u + Math.imul(ve, Ve) | 0, b = b + Math.imul(ve, Fe) | 0, y = y + Math.imul(be, He) | 0, u = u + Math.imul(be, Ge) | 0, u = u + Math.imul(we, He) | 0, b = b + Math.imul(we, Ge) | 0, y = y + Math.imul(ye, je) | 0, u = u + Math.imul(ye, Ye) | 0, u = u + Math.imul(me, je) | 0, b = b + Math.imul(me, Ye) | 0;
          var Vr = (_ + y | 0) + ((u & 8191) << 13) | 0;
          _ = (b + (u >>> 13) | 0) + (Vr >>> 26) | 0, Vr &= 67108863, y = Math.imul(Me, Ke), u = Math.imul(Me, $e), u = u + Math.imul(xe, Ke) | 0, b = Math.imul(xe, $e), y = y + Math.imul(Ee, Ue) | 0, u = u + Math.imul(Ee, We) | 0, u = u + Math.imul(Re, Ue) | 0, b = b + Math.imul(Re, We) | 0, y = y + Math.imul(Ae, De) | 0, u = u + Math.imul(Ae, qe) | 0, u = u + Math.imul(Ie, De) | 0, b = b + Math.imul(Ie, qe) | 0, y = y + Math.imul(Se, Ve) | 0, u = u + Math.imul(Se, Fe) | 0, u = u + Math.imul(_e, Ve) | 0, b = b + Math.imul(_e, Fe) | 0, y = y + Math.imul(ke, He) | 0, u = u + Math.imul(ke, Ge) | 0, u = u + Math.imul(ve, He) | 0, b = b + Math.imul(ve, Ge) | 0, y = y + Math.imul(be, je) | 0, u = u + Math.imul(be, Ye) | 0, u = u + Math.imul(we, je) | 0, b = b + Math.imul(we, Ye) | 0;
          var Fr = (_ + y | 0) + ((u & 8191) << 13) | 0;
          _ = (b + (u >>> 13) | 0) + (Fr >>> 26) | 0, Fr &= 67108863, y = Math.imul(Me, Ue), u = Math.imul(Me, We), u = u + Math.imul(xe, Ue) | 0, b = Math.imul(xe, We), y = y + Math.imul(Ee, De) | 0, u = u + Math.imul(Ee, qe) | 0, u = u + Math.imul(Re, De) | 0, b = b + Math.imul(Re, qe) | 0, y = y + Math.imul(Ae, Ve) | 0, u = u + Math.imul(Ae, Fe) | 0, u = u + Math.imul(Ie, Ve) | 0, b = b + Math.imul(Ie, Fe) | 0, y = y + Math.imul(Se, He) | 0, u = u + Math.imul(Se, Ge) | 0, u = u + Math.imul(_e, He) | 0, b = b + Math.imul(_e, Ge) | 0, y = y + Math.imul(ke, je) | 0, u = u + Math.imul(ke, Ye) | 0, u = u + Math.imul(ve, je) | 0, b = b + Math.imul(ve, Ye) | 0;
          var Hr = (_ + y | 0) + ((u & 8191) << 13) | 0;
          _ = (b + (u >>> 13) | 0) + (Hr >>> 26) | 0, Hr &= 67108863, y = Math.imul(Me, De), u = Math.imul(Me, qe), u = u + Math.imul(xe, De) | 0, b = Math.imul(xe, qe), y = y + Math.imul(Ee, Ve) | 0, u = u + Math.imul(Ee, Fe) | 0, u = u + Math.imul(Re, Ve) | 0, b = b + Math.imul(Re, Fe) | 0, y = y + Math.imul(Ae, He) | 0, u = u + Math.imul(Ae, Ge) | 0, u = u + Math.imul(Ie, He) | 0, b = b + Math.imul(Ie, Ge) | 0, y = y + Math.imul(Se, je) | 0, u = u + Math.imul(Se, Ye) | 0, u = u + Math.imul(_e, je) | 0, b = b + Math.imul(_e, Ye) | 0;
          var Gr = (_ + y | 0) + ((u & 8191) << 13) | 0;
          _ = (b + (u >>> 13) | 0) + (Gr >>> 26) | 0, Gr &= 67108863, y = Math.imul(Me, Ve), u = Math.imul(Me, Fe), u = u + Math.imul(xe, Ve) | 0, b = Math.imul(xe, Fe), y = y + Math.imul(Ee, He) | 0, u = u + Math.imul(Ee, Ge) | 0, u = u + Math.imul(Re, He) | 0, b = b + Math.imul(Re, Ge) | 0, y = y + Math.imul(Ae, je) | 0, u = u + Math.imul(Ae, Ye) | 0, u = u + Math.imul(Ie, je) | 0, b = b + Math.imul(Ie, Ye) | 0;
          var jr = (_ + y | 0) + ((u & 8191) << 13) | 0;
          _ = (b + (u >>> 13) | 0) + (jr >>> 26) | 0, jr &= 67108863, y = Math.imul(Me, He), u = Math.imul(Me, Ge), u = u + Math.imul(xe, He) | 0, b = Math.imul(xe, Ge), y = y + Math.imul(Ee, je) | 0, u = u + Math.imul(Ee, Ye) | 0, u = u + Math.imul(Re, je) | 0, b = b + Math.imul(Re, Ye) | 0;
          var Yr = (_ + y | 0) + ((u & 8191) << 13) | 0;
          _ = (b + (u >>> 13) | 0) + (Yr >>> 26) | 0, Yr &= 67108863, y = Math.imul(Me, je), u = Math.imul(Me, Ye), u = u + Math.imul(xe, je) | 0, b = Math.imul(xe, Ye);
          var Zr = (_ + y | 0) + ((u & 8191) << 13) | 0;
          return _ = (b + (u >>> 13) | 0) + (Zr >>> 26) | 0, Zr &= 67108863, v[0] = Lr, v[1] = Cr, v[2] = Br, v[3] = Or, v[4] = Nr, v[5] = zr, v[6] = Kr, v[7] = $r, v[8] = Ur, v[9] = Wr, v[10] = Dr, v[11] = qr, v[12] = Vr, v[13] = Fr, v[14] = Hr, v[15] = Gr, v[16] = jr, v[17] = Yr, v[18] = Zr, _ !== 0 && (v[19] = _, h.length++), h;
        };
        Math.imul || (C = x);
        function O(f, i, c) {
          c.negative = i.negative ^ f.negative, c.length = f.length + i.length;
          for (var h = 0, g = 0, w = 0; w < c.length - 1; w++) {
            var v = g;
            g = 0;
            for (var _ = h & 67108863, y = Math.min(w, i.length - 1), u = Math.max(0, w - f.length + 1); u <= y; u++) {
              var b = w - u, q = f.words[b] | 0, W = i.words[u] | 0, V = q * W, ot = V & 67108863;
              v = v + (V / 67108864 | 0) | 0, ot = ot + _ | 0, _ = ot & 67108863, v = v + (ot >>> 26) | 0, g += v >>> 26, v &= 67108863;
            }
            c.words[w] = _, h = v, v = g;
          }
          return h !== 0 ? c.words[w] = h : c.length--, c._strip();
        }
        function N(f, i, c) {
          return O(f, i, c);
        }
        n.prototype.mulTo = function(i, c) {
          var h, g = this.length + i.length;
          return this.length === 10 && i.length === 10 ? h = C(this, i, c) : g < 63 ? h = x(this, i, c) : g < 1024 ? h = O(this, i, c) : h = N(this, i, c), h;
        }, n.prototype.mul = function(i) {
          var c = new n(null);
          return c.words = new Array(this.length + i.length), this.mulTo(i, c);
        }, n.prototype.mulf = function(i) {
          var c = new n(null);
          return c.words = new Array(this.length + i.length), N(this, i, c);
        }, n.prototype.imul = function(i) {
          return this.clone().mulTo(i, this);
        }, n.prototype.imuln = function(i) {
          var c = i < 0;
          c && (i = -i), r(typeof i == "number"), r(i < 67108864);
          for (var h = 0, g = 0; g < this.length; g++) {
            var w = (this.words[g] | 0) * i, v = (w & 67108863) + (h & 67108863);
            h >>= 26, h += w / 67108864 | 0, h += v >>> 26, this.words[g] = v & 67108863;
          }
          return h !== 0 && (this.words[g] = h, this.length++), i === 0 && (this.length = 1, this._normSign()), c ? this.ineg() : this;
        }, n.prototype.muln = function(i) {
          return this.clone().imuln(i);
        }, n.prototype.sqr = function() {
          return this.mul(this);
        }, n.prototype.isqr = function() {
          return this.imul(this.clone());
        }, n.prototype.pow = function(i) {
          var c = M(i);
          if (c.length === 0) return new n(1);
          for (var h = this, g = 0; g < c.length && c[g] === 0; g++, h = h.sqr()) ;
          if (++g < c.length) for (var w = h.sqr(); g < c.length; g++, w = w.sqr()) c[g] !== 0 && (h = h.mul(w));
          return h;
        }, n.prototype.iushln = function(i) {
          r(typeof i == "number" && i >= 0);
          var c = i % 26, h = (i - c) / 26, g = 67108863 >>> 26 - c << 26 - c, w;
          if (c !== 0) {
            var v = 0;
            for (w = 0; w < this.length; w++) {
              var _ = this.words[w] & g, y = (this.words[w] | 0) - _ << c;
              this.words[w] = y | v, v = _ >>> 26 - c;
            }
            v && (this.words[w] = v, this.length++);
          }
          if (h !== 0) {
            for (w = this.length - 1; w >= 0; w--) this.words[w + h] = this.words[w];
            for (w = 0; w < h; w++) this.words[w] = 0;
            this.length += h;
          }
          return this._strip();
        }, n.prototype.ishln = function(i) {
          return r(this.negative === 0), this.iushln(i);
        }, n.prototype.iushrn = function(i, c, h) {
          r(typeof i == "number" && i >= 0);
          var g;
          c ? g = (c - c % 26) / 26 : g = 0;
          var w = i % 26, v = Math.min((i - w) / 26, this.length), _ = 67108863 ^ 67108863 >>> w << w, y = h;
          if (g -= v, g = Math.max(0, g), y) {
            for (var u = 0; u < v; u++) y.words[u] = this.words[u];
            y.length = v;
          }
          if (v !== 0) if (this.length > v) for (this.length -= v, u = 0; u < this.length; u++) this.words[u] = this.words[u + v];
          else this.words[0] = 0, this.length = 1;
          var b = 0;
          for (u = this.length - 1; u >= 0 && (b !== 0 || u >= g); u--) {
            var q = this.words[u] | 0;
            this.words[u] = b << 26 - w | q >>> w, b = q & _;
          }
          return y && b !== 0 && (y.words[y.length++] = b), this.length === 0 && (this.words[0] = 0, this.length = 1), this._strip();
        }, n.prototype.ishrn = function(i, c, h) {
          return r(this.negative === 0), this.iushrn(i, c, h);
        }, n.prototype.shln = function(i) {
          return this.clone().ishln(i);
        }, n.prototype.ushln = function(i) {
          return this.clone().iushln(i);
        }, n.prototype.shrn = function(i) {
          return this.clone().ishrn(i);
        }, n.prototype.ushrn = function(i) {
          return this.clone().iushrn(i);
        }, n.prototype.testn = function(i) {
          r(typeof i == "number" && i >= 0);
          var c = i % 26, h = (i - c) / 26, g = 1 << c;
          if (this.length <= h) return false;
          var w = this.words[h];
          return !!(w & g);
        }, n.prototype.imaskn = function(i) {
          r(typeof i == "number" && i >= 0);
          var c = i % 26, h = (i - c) / 26;
          if (r(this.negative === 0, "imaskn works only with positive numbers"), this.length <= h) return this;
          if (c !== 0 && h++, this.length = Math.min(h, this.length), c !== 0) {
            var g = 67108863 ^ 67108863 >>> c << c;
            this.words[this.length - 1] &= g;
          }
          return this.length === 0 && (this.words[0] = 0, this.length = 1), this._strip();
        }, n.prototype.maskn = function(i) {
          return this.clone().imaskn(i);
        }, n.prototype.iaddn = function(i) {
          return r(typeof i == "number"), r(i < 67108864), i < 0 ? this.isubn(-i) : this.negative !== 0 ? this.length === 1 && (this.words[0] | 0) <= i ? (this.words[0] = i - (this.words[0] | 0), this.negative = 0, this) : (this.negative = 0, this.isubn(i), this.negative = 1, this) : this._iaddn(i);
        }, n.prototype._iaddn = function(i) {
          this.words[0] += i;
          for (var c = 0; c < this.length && this.words[c] >= 67108864; c++) this.words[c] -= 67108864, c === this.length - 1 ? this.words[c + 1] = 1 : this.words[c + 1]++;
          return this.length = Math.max(this.length, c + 1), this;
        }, n.prototype.isubn = function(i) {
          if (r(typeof i == "number"), r(i < 67108864), i < 0) return this.iaddn(-i);
          if (this.negative !== 0) return this.negative = 0, this.iaddn(i), this.negative = 1, this;
          if (this.words[0] -= i, this.length === 1 && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
          else for (var c = 0; c < this.length && this.words[c] < 0; c++) this.words[c] += 67108864, this.words[c + 1] -= 1;
          return this._strip();
        }, n.prototype.addn = function(i) {
          return this.clone().iaddn(i);
        }, n.prototype.subn = function(i) {
          return this.clone().isubn(i);
        }, n.prototype.iabs = function() {
          return this.negative = 0, this;
        }, n.prototype.abs = function() {
          return this.clone().iabs();
        }, n.prototype._ishlnsubmul = function(i, c, h) {
          var g = i.length + h, w;
          this._expand(g);
          var v, _ = 0;
          for (w = 0; w < i.length; w++) {
            v = (this.words[w + h] | 0) + _;
            var y = (i.words[w] | 0) * c;
            v -= y & 67108863, _ = (v >> 26) - (y / 67108864 | 0), this.words[w + h] = v & 67108863;
          }
          for (; w < this.length - h; w++) v = (this.words[w + h] | 0) + _, _ = v >> 26, this.words[w + h] = v & 67108863;
          if (_ === 0) return this._strip();
          for (r(_ === -1), _ = 0, w = 0; w < this.length; w++) v = -(this.words[w] | 0) + _, _ = v >> 26, this.words[w] = v & 67108863;
          return this.negative = 1, this._strip();
        }, n.prototype._wordDiv = function(i, c) {
          var h = this.length - i.length, g = this.clone(), w = i, v = w.words[w.length - 1] | 0, _ = this._countBits(v);
          h = 26 - _, h !== 0 && (w = w.ushln(h), g.iushln(h), v = w.words[w.length - 1] | 0);
          var y = g.length - w.length, u;
          if (c !== "mod") {
            u = new n(null), u.length = y + 1, u.words = new Array(u.length);
            for (var b = 0; b < u.length; b++) u.words[b] = 0;
          }
          var q = g.clone()._ishlnsubmul(w, 1, y);
          q.negative === 0 && (g = q, u && (u.words[y] = 1));
          for (var W = y - 1; W >= 0; W--) {
            var V = (g.words[w.length + W] | 0) * 67108864 + (g.words[w.length + W - 1] | 0);
            for (V = Math.min(V / v | 0, 67108863), g._ishlnsubmul(w, V, W); g.negative !== 0; ) V--, g.negative = 0, g._ishlnsubmul(w, 1, W), g.isZero() || (g.negative ^= 1);
            u && (u.words[W] = V);
          }
          return u && u._strip(), g._strip(), c !== "div" && h !== 0 && g.iushrn(h), {
            div: u || null,
            mod: g
          };
        }, n.prototype.divmod = function(i, c, h) {
          if (r(!i.isZero()), this.isZero()) return {
            div: new n(0),
            mod: new n(0)
          };
          var g, w, v;
          return this.negative !== 0 && i.negative === 0 ? (v = this.neg().divmod(i, c), c !== "mod" && (g = v.div.neg()), c !== "div" && (w = v.mod.neg(), h && w.negative !== 0 && w.iadd(i)), {
            div: g,
            mod: w
          }) : this.negative === 0 && i.negative !== 0 ? (v = this.divmod(i.neg(), c), c !== "mod" && (g = v.div.neg()), {
            div: g,
            mod: v.mod
          }) : (this.negative & i.negative) !== 0 ? (v = this.neg().divmod(i.neg(), c), c !== "div" && (w = v.mod.neg(), h && w.negative !== 0 && w.isub(i)), {
            div: v.div,
            mod: w
          }) : i.length > this.length || this.cmp(i) < 0 ? {
            div: new n(0),
            mod: this
          } : i.length === 1 ? c === "div" ? {
            div: this.divn(i.words[0]),
            mod: null
          } : c === "mod" ? {
            div: null,
            mod: new n(this.modrn(i.words[0]))
          } : {
            div: this.divn(i.words[0]),
            mod: new n(this.modrn(i.words[0]))
          } : this._wordDiv(i, c);
        }, n.prototype.div = function(i) {
          return this.divmod(i, "div", false).div;
        }, n.prototype.mod = function(i) {
          return this.divmod(i, "mod", false).mod;
        }, n.prototype.umod = function(i) {
          return this.divmod(i, "mod", true).mod;
        }, n.prototype.divRound = function(i) {
          var c = this.divmod(i);
          if (c.mod.isZero()) return c.div;
          var h = c.mod.abs(), g = i.abs().iushrn(1), w = i.words[0] & 1, v = h.cmp(g);
          if (v < 0 || w === 1 && v === 0) return c.div;
          var _ = new n(1);
          return _.negative = this.negative ^ i.negative, c.div.iadd(_);
        }, n.prototype.modrn = function(i) {
          var c = i < 0;
          c && (i = -i), r(i <= 67108863);
          for (var h = (1 << 26) % i, g = 0, w = this.length - 1; w >= 0; w--) g = (h * g + (this.words[w] | 0)) % i;
          return c ? -g : g;
        }, n.prototype.modn = function(i) {
          return this.modrn(i);
        }, n.prototype.idivn = function(i) {
          var c = i < 0;
          c && (i = -i), r(i <= 67108863);
          for (var h = 0, g = this.length - 1; g >= 0; g--) {
            var w = (this.words[g] | 0) + h * 67108864;
            this.words[g] = w / i | 0, h = w % i;
          }
          return this._strip(), c ? this.ineg() : this;
        }, n.prototype.divn = function(i) {
          return this.clone().idivn(i);
        }, n.prototype.egcd = function(i) {
          r(i.negative === 0), r(!i.isZero());
          var c = this, h = i.clone();
          c.negative !== 0 ? c = c.umod(i) : c = c.clone();
          for (var g = new n(1), w = new n(0), v = new n(0), _ = new n(1), y = 0; c.isEven() && h.isEven(); ) c.iushrn(1), h.iushrn(1), ++y;
          for (var u = h.clone(), b = c.clone(); !c.isZero(); ) {
            for (var q = 0, W = 1; (c.words[0] & W) === 0 && q < 26; ++q, W <<= 1) ;
            if (q > 0) for (c.iushrn(q); q-- > 0; ) (g.isOdd() || w.isOdd()) && (g.iadd(u), w.isub(b)), g.iushrn(1), w.iushrn(1);
            for (var V = 0, ot = 1; (h.words[0] & ot) === 0 && V < 26; ++V, ot <<= 1) ;
            if (V > 0) for (h.iushrn(V); V-- > 0; ) (v.isOdd() || _.isOdd()) && (v.iadd(u), _.isub(b)), v.iushrn(1), _.iushrn(1);
            c.cmp(h) >= 0 ? (c.isub(h), g.isub(v), w.isub(_)) : (h.isub(c), v.isub(g), _.isub(w));
          }
          return {
            a: v,
            b: _,
            gcd: h.iushln(y)
          };
        }, n.prototype._invmp = function(i) {
          r(i.negative === 0), r(!i.isZero());
          var c = this, h = i.clone();
          c.negative !== 0 ? c = c.umod(i) : c = c.clone();
          for (var g = new n(1), w = new n(0), v = h.clone(); c.cmpn(1) > 0 && h.cmpn(1) > 0; ) {
            for (var _ = 0, y = 1; (c.words[0] & y) === 0 && _ < 26; ++_, y <<= 1) ;
            if (_ > 0) for (c.iushrn(_); _-- > 0; ) g.isOdd() && g.iadd(v), g.iushrn(1);
            for (var u = 0, b = 1; (h.words[0] & b) === 0 && u < 26; ++u, b <<= 1) ;
            if (u > 0) for (h.iushrn(u); u-- > 0; ) w.isOdd() && w.iadd(v), w.iushrn(1);
            c.cmp(h) >= 0 ? (c.isub(h), g.isub(w)) : (h.isub(c), w.isub(g));
          }
          var q;
          return c.cmpn(1) === 0 ? q = g : q = w, q.cmpn(0) < 0 && q.iadd(i), q;
        }, n.prototype.gcd = function(i) {
          if (this.isZero()) return i.abs();
          if (i.isZero()) return this.abs();
          var c = this.clone(), h = i.clone();
          c.negative = 0, h.negative = 0;
          for (var g = 0; c.isEven() && h.isEven(); g++) c.iushrn(1), h.iushrn(1);
          do {
            for (; c.isEven(); ) c.iushrn(1);
            for (; h.isEven(); ) h.iushrn(1);
            var w = c.cmp(h);
            if (w < 0) {
              var v = c;
              c = h, h = v;
            } else if (w === 0 || h.cmpn(1) === 0) break;
            c.isub(h);
          } while (true);
          return h.iushln(g);
        }, n.prototype.invm = function(i) {
          return this.egcd(i).a.umod(i);
        }, n.prototype.isEven = function() {
          return (this.words[0] & 1) === 0;
        }, n.prototype.isOdd = function() {
          return (this.words[0] & 1) === 1;
        }, n.prototype.andln = function(i) {
          return this.words[0] & i;
        }, n.prototype.bincn = function(i) {
          r(typeof i == "number");
          var c = i % 26, h = (i - c) / 26, g = 1 << c;
          if (this.length <= h) return this._expand(h + 1), this.words[h] |= g, this;
          for (var w = g, v = h; w !== 0 && v < this.length; v++) {
            var _ = this.words[v] | 0;
            _ += w, w = _ >>> 26, _ &= 67108863, this.words[v] = _;
          }
          return w !== 0 && (this.words[v] = w, this.length++), this;
        }, n.prototype.isZero = function() {
          return this.length === 1 && this.words[0] === 0;
        }, n.prototype.cmpn = function(i) {
          var c = i < 0;
          if (this.negative !== 0 && !c) return -1;
          if (this.negative === 0 && c) return 1;
          this._strip();
          var h;
          if (this.length > 1) h = 1;
          else {
            c && (i = -i), r(i <= 67108863, "Number is too big");
            var g = this.words[0] | 0;
            h = g === i ? 0 : g < i ? -1 : 1;
          }
          return this.negative !== 0 ? -h | 0 : h;
        }, n.prototype.cmp = function(i) {
          if (this.negative !== 0 && i.negative === 0) return -1;
          if (this.negative === 0 && i.negative !== 0) return 1;
          var c = this.ucmp(i);
          return this.negative !== 0 ? -c | 0 : c;
        }, n.prototype.ucmp = function(i) {
          if (this.length > i.length) return 1;
          if (this.length < i.length) return -1;
          for (var c = 0, h = this.length - 1; h >= 0; h--) {
            var g = this.words[h] | 0, w = i.words[h] | 0;
            if (g !== w) {
              g < w ? c = -1 : g > w && (c = 1);
              break;
            }
          }
          return c;
        }, n.prototype.gtn = function(i) {
          return this.cmpn(i) === 1;
        }, n.prototype.gt = function(i) {
          return this.cmp(i) === 1;
        }, n.prototype.gten = function(i) {
          return this.cmpn(i) >= 0;
        }, n.prototype.gte = function(i) {
          return this.cmp(i) >= 0;
        }, n.prototype.ltn = function(i) {
          return this.cmpn(i) === -1;
        }, n.prototype.lt = function(i) {
          return this.cmp(i) === -1;
        }, n.prototype.lten = function(i) {
          return this.cmpn(i) <= 0;
        }, n.prototype.lte = function(i) {
          return this.cmp(i) <= 0;
        }, n.prototype.eqn = function(i) {
          return this.cmpn(i) === 0;
        }, n.prototype.eq = function(i) {
          return this.cmp(i) === 0;
        }, n.red = function(i) {
          return new D(i);
        }, n.prototype.toRed = function(i) {
          return r(!this.red, "Already a number in reduction context"), r(this.negative === 0, "red works only with positives"), i.convertTo(this)._forceRed(i);
        }, n.prototype.fromRed = function() {
          return r(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this);
        }, n.prototype._forceRed = function(i) {
          return this.red = i, this;
        }, n.prototype.forceRed = function(i) {
          return r(!this.red, "Already a number in reduction context"), this._forceRed(i);
        }, n.prototype.redAdd = function(i) {
          return r(this.red, "redAdd works only with red numbers"), this.red.add(this, i);
        }, n.prototype.redIAdd = function(i) {
          return r(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, i);
        }, n.prototype.redSub = function(i) {
          return r(this.red, "redSub works only with red numbers"), this.red.sub(this, i);
        }, n.prototype.redISub = function(i) {
          return r(this.red, "redISub works only with red numbers"), this.red.isub(this, i);
        }, n.prototype.redShl = function(i) {
          return r(this.red, "redShl works only with red numbers"), this.red.shl(this, i);
        }, n.prototype.redMul = function(i) {
          return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, i), this.red.mul(this, i);
        }, n.prototype.redIMul = function(i) {
          return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, i), this.red.imul(this, i);
        }, n.prototype.redSqr = function() {
          return r(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this);
        }, n.prototype.redISqr = function() {
          return r(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this);
        }, n.prototype.redSqrt = function() {
          return r(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this);
        }, n.prototype.redInvm = function() {
          return r(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this);
        }, n.prototype.redNeg = function() {
          return r(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this);
        }, n.prototype.redPow = function(i) {
          return r(this.red && !i.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, i);
        };
        var ee = {
          k256: null,
          p224: null,
          p192: null,
          p25519: null
        };
        function oe(f, i) {
          this.name = f, this.p = new n(i, 16), this.n = this.p.bitLength(), this.k = new n(1).iushln(this.n).isub(this.p), this.tmp = this._tmp();
        }
        oe.prototype._tmp = function() {
          var i = new n(null);
          return i.words = new Array(Math.ceil(this.n / 13)), i;
        }, oe.prototype.ireduce = function(i) {
          var c = i, h;
          do
            this.split(c, this.tmp), c = this.imulK(c), c = c.iadd(this.tmp), h = c.bitLength();
          while (h > this.n);
          var g = h < this.n ? -1 : c.ucmp(this.p);
          return g === 0 ? (c.words[0] = 0, c.length = 1) : g > 0 ? c.isub(this.p) : c.strip !== void 0 ? c.strip() : c._strip(), c;
        }, oe.prototype.split = function(i, c) {
          i.iushrn(this.n, 0, c);
        }, oe.prototype.imulK = function(i) {
          return i.imul(this.k);
        };
        function Q() {
          oe.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f");
        }
        s(Q, oe), Q.prototype.split = function(i, c) {
          for (var h = 4194303, g = Math.min(i.length, 9), w = 0; w < g; w++) c.words[w] = i.words[w];
          if (c.length = g, i.length <= 9) {
            i.words[0] = 0, i.length = 1;
            return;
          }
          var v = i.words[9];
          for (c.words[c.length++] = v & h, w = 10; w < i.length; w++) {
            var _ = i.words[w] | 0;
            i.words[w - 10] = (_ & h) << 4 | v >>> 22, v = _;
          }
          v >>>= 22, i.words[w - 10] = v, v === 0 && i.length > 10 ? i.length -= 10 : i.length -= 9;
        }, Q.prototype.imulK = function(i) {
          i.words[i.length] = 0, i.words[i.length + 1] = 0, i.length += 2;
          for (var c = 0, h = 0; h < i.length; h++) {
            var g = i.words[h] | 0;
            c += g * 977, i.words[h] = c & 67108863, c = g * 64 + (c / 67108864 | 0);
          }
          return i.words[i.length - 1] === 0 && (i.length--, i.words[i.length - 1] === 0 && i.length--), i;
        };
        function de() {
          oe.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001");
        }
        s(de, oe);
        function le() {
          oe.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff");
        }
        s(le, oe);
        function ne() {
          oe.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed");
        }
        s(ne, oe), ne.prototype.imulK = function(i) {
          for (var c = 0, h = 0; h < i.length; h++) {
            var g = (i.words[h] | 0) * 19 + c, w = g & 67108863;
            g >>>= 26, i.words[h] = w, c = g;
          }
          return c !== 0 && (i.words[i.length++] = c), i;
        }, n._prime = function(i) {
          if (ee[i]) return ee[i];
          var c;
          if (i === "k256") c = new Q();
          else if (i === "p224") c = new de();
          else if (i === "p192") c = new le();
          else if (i === "p25519") c = new ne();
          else throw new Error("Unknown prime " + i);
          return ee[i] = c, c;
        };
        function D(f) {
          if (typeof f == "string") {
            var i = n._prime(f);
            this.m = i.p, this.prime = i;
          } else r(f.gtn(1), "modulus must be greater than 1"), this.m = f, this.prime = null;
        }
        D.prototype._verify1 = function(i) {
          r(i.negative === 0, "red works only with positives"), r(i.red, "red works only with red numbers");
        }, D.prototype._verify2 = function(i, c) {
          r((i.negative | c.negative) === 0, "red works only with positives"), r(i.red && i.red === c.red, "red works only with red numbers");
        }, D.prototype.imod = function(i) {
          return this.prime ? this.prime.ireduce(i)._forceRed(this) : (k(i, i.umod(this.m)._forceRed(this)), i);
        }, D.prototype.neg = function(i) {
          return i.isZero() ? i.clone() : this.m.sub(i)._forceRed(this);
        }, D.prototype.add = function(i, c) {
          this._verify2(i, c);
          var h = i.add(c);
          return h.cmp(this.m) >= 0 && h.isub(this.m), h._forceRed(this);
        }, D.prototype.iadd = function(i, c) {
          this._verify2(i, c);
          var h = i.iadd(c);
          return h.cmp(this.m) >= 0 && h.isub(this.m), h;
        }, D.prototype.sub = function(i, c) {
          this._verify2(i, c);
          var h = i.sub(c);
          return h.cmpn(0) < 0 && h.iadd(this.m), h._forceRed(this);
        }, D.prototype.isub = function(i, c) {
          this._verify2(i, c);
          var h = i.isub(c);
          return h.cmpn(0) < 0 && h.iadd(this.m), h;
        }, D.prototype.shl = function(i, c) {
          return this._verify1(i), this.imod(i.ushln(c));
        }, D.prototype.imul = function(i, c) {
          return this._verify2(i, c), this.imod(i.imul(c));
        }, D.prototype.mul = function(i, c) {
          return this._verify2(i, c), this.imod(i.mul(c));
        }, D.prototype.isqr = function(i) {
          return this.imul(i, i.clone());
        }, D.prototype.sqr = function(i) {
          return this.mul(i, i);
        }, D.prototype.sqrt = function(i) {
          if (i.isZero()) return i.clone();
          var c = this.m.andln(3);
          if (r(c % 2 === 1), c === 3) {
            var h = this.m.add(new n(1)).iushrn(2);
            return this.pow(i, h);
          }
          for (var g = this.m.subn(1), w = 0; !g.isZero() && g.andln(1) === 0; ) w++, g.iushrn(1);
          r(!g.isZero());
          var v = new n(1).toRed(this), _ = v.redNeg(), y = this.m.subn(1).iushrn(1), u = this.m.bitLength();
          for (u = new n(2 * u * u).toRed(this); this.pow(u, y).cmp(_) !== 0; ) u.redIAdd(_);
          for (var b = this.pow(u, g), q = this.pow(i, g.addn(1).iushrn(1)), W = this.pow(i, g), V = w; W.cmp(v) !== 0; ) {
            for (var ot = W, ce = 0; ot.cmp(v) !== 0; ce++) ot = ot.redSqr();
            r(ce < V);
            var ue = this.pow(b, new n(1).iushln(V - ce - 1));
            q = q.redMul(ue), b = ue.redSqr(), W = W.redMul(b), V = ce;
          }
          return q;
        }, D.prototype.invm = function(i) {
          var c = i._invmp(this.m);
          return c.negative !== 0 ? (c.negative = 0, this.imod(c).redNeg()) : this.imod(c);
        }, D.prototype.pow = function(i, c) {
          if (c.isZero()) return new n(1).toRed(this);
          if (c.cmpn(1) === 0) return i.clone();
          var h = 4, g = new Array(1 << h);
          g[0] = new n(1).toRed(this), g[1] = i;
          for (var w = 2; w < g.length; w++) g[w] = this.mul(g[w - 1], i);
          var v = g[0], _ = 0, y = 0, u = c.bitLength() % 26;
          for (u === 0 && (u = 26), w = c.length - 1; w >= 0; w--) {
            for (var b = c.words[w], q = u - 1; q >= 0; q--) {
              var W = b >> q & 1;
              if (v !== g[0] && (v = this.sqr(v)), W === 0 && _ === 0) {
                y = 0;
                continue;
              }
              _ <<= 1, _ |= W, y++, !(y !== h && (w !== 0 || q !== 0)) && (v = this.mul(v, g[_]), y = 0, _ = 0);
            }
            u = 26;
          }
          return v;
        }, D.prototype.convertTo = function(i) {
          var c = i.umod(this.m);
          return c === i ? c.clone() : c;
        }, D.prototype.convertFrom = function(i) {
          var c = i.clone();
          return c.red = null, c;
        }, n.mont = function(i) {
          return new L(i);
        };
        function L(f) {
          D.call(this, f), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new n(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv);
        }
        s(L, D), L.prototype.convertTo = function(i) {
          return this.imod(i.ushln(this.shift));
        }, L.prototype.convertFrom = function(i) {
          var c = this.imod(i.mul(this.rinv));
          return c.red = null, c;
        }, L.prototype.imul = function(i, c) {
          if (i.isZero() || c.isZero()) return i.words[0] = 0, i.length = 1, i;
          var h = i.imul(c), g = h.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), w = h.isub(g).iushrn(this.shift), v = w;
          return w.cmp(this.m) >= 0 ? v = w.isub(this.m) : w.cmpn(0) < 0 && (v = w.iadd(this.m)), v._forceRed(this);
        }, L.prototype.mul = function(i, c) {
          if (i.isZero() || c.isZero()) return new n(0)._forceRed(this);
          var h = i.mul(c), g = h.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), w = h.isub(g).iushrn(this.shift), v = w;
          return w.cmp(this.m) >= 0 ? v = w.isub(this.m) : w.cmpn(0) < 0 && (v = w.iadd(this.m)), v._forceRed(this);
        }, L.prototype.invm = function(i) {
          var c = this.imod(i._invmp(this.m).mul(this.r2));
          return c._forceRed(this);
        };
      })(o, Sd);
    })(si)), si.exports;
  }
  var Ad = _d();
  const qa = Kn(Ad);
  var to, Va;
  function Id() {
    if (Va) return to;
    Va = 1;
    var o = Tu(), e = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
    return to = o(e), to;
  }
  var Ed = Id();
  const Ct = Kn(Ed);
  var Rd = 8078e3, Md = 8078001, xd = 8078004, Pd = 8078005, Td = 8078006, Ld = 8078011;
  function Ku(o) {
    return Array.isArray(o) ? "%5B" + o.map(Ku).join("%2C%20") + "%5D" : typeof o == "bigint" ? `${o}n` : encodeURIComponent(String(o != null && Object.getPrototypeOf(o) === null ? {
      ...o
    } : o));
  }
  function Cd([o, e]) {
    return `${o}=${Ku(e)}`;
  }
  function Bd(o) {
    const e = Object.entries(o).map(Cd).join("&");
    return btoa(e);
  }
  function Od(o, e = {}) {
    {
      let t = `Solana error #${o}; Decode this error by running \`npx @solana/errors decode -- ${o}`;
      return Object.keys(e).length && (t += ` '${Bd(e)}'`), `${t}\``;
    }
  }
  var In = class extends Error {
    constructor(...[e, t]) {
      let r, s;
      t && Object.entries(Object.getOwnPropertyDescriptors(t)).forEach(([a, l]) => {
        a === "cause" ? s = {
          cause: l.value
        } : (r === void 0 && (r = {
          __code: e
        }), Object.defineProperty(r, a, l));
      });
      const n = Od(e, r);
      super(n, s);
      __publicField(this, "cause", this.cause);
      __publicField(this, "context");
      this.context = Object.freeze(r === void 0 ? {
        __code: e
      } : r), this.name = "SolanaError";
    }
  };
  function Nd(o, e) {
    return "fixedSize" in e ? e.fixedSize : e.getSizeFromValue(o);
  }
  function zd(o) {
    return Object.freeze({
      ...o,
      encode: (e) => {
        const t = new Uint8Array(Nd(e, o));
        return o.write(e, t, 0), t;
      }
    });
  }
  function Kd(o) {
    return Object.freeze({
      ...o,
      decode: (e, t = 0) => o.read(e, t)[0]
    });
  }
  function mn(o) {
    return "fixedSize" in o && typeof o.fixedSize == "number";
  }
  function $d(o, e) {
    if (mn(o) !== mn(e)) throw new In(xd);
    if (mn(o) && mn(e) && o.fixedSize !== e.fixedSize) throw new In(Pd, {
      decoderFixedSize: e.fixedSize,
      encoderFixedSize: o.fixedSize
    });
    if (!mn(o) && !mn(e) && o.maxSize !== e.maxSize) throw new In(Td, {
      decoderMaxSize: e.maxSize,
      encoderMaxSize: o.maxSize
    });
    return {
      ...e,
      ...o,
      decode: e.decode,
      encode: o.encode,
      read: e.read,
      write: o.write
    };
  }
  function Ud(o, e, t = 0) {
    if (e.length - t <= 0) throw new In(Rd, {
      codecDescription: o
    });
  }
  function Wd(o, e, t, r = 0) {
    const s = t.length - r;
    if (s < e) throw new In(Md, {
      bytesLength: s,
      codecDescription: o,
      expected: e
    });
  }
  function Dd(o, e, t) {
    const r = o.byteOffset + (e ?? 0), s = t ?? o.byteLength;
    let n;
    return typeof SharedArrayBuffer > "u" ? n = o.buffer : o.buffer instanceof SharedArrayBuffer ? (n = new ArrayBuffer(o.length), new Uint8Array(n).set(new Uint8Array(o))) : n = o.buffer, (r === 0 || r === -o.byteLength) && s === o.byteLength ? n : n.slice(r, r + s);
  }
  function qd(o, e, t, r) {
    if (r < e || r > t) throw new In(Ld, {
      codecDescription: o,
      max: t,
      min: e,
      value: r
    });
  }
  function $u(o) {
    return (o == null ? void 0 : o.endian) !== 1;
  }
  function Vd(o) {
    return zd({
      fixedSize: o.size,
      write(e, t, r) {
        o.range && qd(o.name, o.range[0], o.range[1], e);
        const s = new ArrayBuffer(o.size);
        return o.set(new DataView(s), e, $u(o.config)), t.set(new Uint8Array(s), r), r + o.size;
      }
    });
  }
  function Fd(o) {
    return Kd({
      fixedSize: o.size,
      read(e, t = 0) {
        Ud(o.name, e, t), Wd(o.name, o.size, e, t);
        const r = new DataView(Dd(e, t, o.size));
        return [
          o.get(r, $u(o.config)),
          t + o.size
        ];
      }
    });
  }
  var Uu = (o = {}) => Vd({
    config: o,
    name: "u64",
    range: [
      0n,
      BigInt("0xffffffffffffffff")
    ],
    set: (e, t, r) => e.setBigUint64(0, BigInt(t), r),
    size: 8
  }), Hd = (o = {}) => Fd({
    config: o,
    get: (e, t) => e.getBigUint64(0, t),
    name: "u64",
    size: 8
  }), Gd = (o = {}) => $d(Uu(o), Hd(o));
  const jd = Xt.utils.randomPrivateKey, Fa = () => {
    const o = Xt.utils.randomPrivateKey(), e = yi(o), t = new Uint8Array(64);
    return t.set(o), t.set(e, 32), {
      publicKey: e,
      secretKey: t
    };
  }, yi = Xt.getPublicKey;
  function Ha(o) {
    try {
      return Xt.ExtendedPoint.fromHex(o), true;
    } catch {
      return false;
    }
  }
  const sa = (o, e) => Xt.sign(o, e.slice(0, 32)), Yd = Xt.verify, Xe = (o) => B.isBuffer(o) ? o : o instanceof Uint8Array ? B.from(o.buffer, o.byteOffset, o.byteLength) : B.from(o);
  let ia = class {
    constructor(e) {
      Object.assign(this, e);
    }
    encode() {
      return B.from(An.serialize(ks, this));
    }
    static decode(e) {
      return An.deserialize(ks, this, e);
    }
    static decodeUnchecked(e) {
      return An.deserializeUnchecked(ks, this, e);
    }
  }, Zd = class extends ia {
    constructor(e) {
      if (super(e), this.enum = "", Object.keys(e).length !== 1) throw new Error("Enum can only take single value");
      Object.keys(e).map((t) => {
        this.enum = t;
      });
    }
  };
  const ks = /* @__PURE__ */ new Map();
  var Wu;
  const Du = 32, Gt = 32;
  function Jd(o) {
    return o._bn !== void 0;
  }
  let Ga = 1, U = class kn extends ia {
    constructor(e) {
      if (super({}), this._bn = void 0, Jd(e)) this._bn = e._bn;
      else {
        if (typeof e == "string") {
          const t = Ct.decode(e);
          if (t.length != Gt) throw new Error("Invalid public key input");
          this._bn = new qa(t);
        } else this._bn = new qa(e);
        if (this._bn.byteLength() > Gt) throw new Error("Invalid public key input");
      }
    }
    static unique() {
      const e = new kn(Ga);
      return Ga += 1, new kn(e.toBuffer());
    }
    equals(e) {
      return this._bn.eq(e._bn);
    }
    toBase58() {
      return Ct.encode(this.toBytes());
    }
    toJSON() {
      return this.toBase58();
    }
    toBytes() {
      const e = this.toBuffer();
      return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
    }
    toBuffer() {
      const e = this._bn.toArrayLike(B);
      if (e.length === Gt) return e;
      const t = B.alloc(32);
      return e.copy(t, 32 - e.length), t;
    }
    get [Symbol.toStringTag]() {
      return `PublicKey(${this.toString()})`;
    }
    toString() {
      return this.toBase58();
    }
    static async createWithSeed(e, t, r) {
      const s = B.concat([
        e.toBuffer(),
        B.from(t),
        r.toBuffer()
      ]), n = Ln(s);
      return new kn(n);
    }
    static createProgramAddressSync(e, t) {
      let r = B.alloc(0);
      e.forEach(function(n) {
        if (n.length > Du) throw new TypeError("Max seed length exceeded");
        r = B.concat([
          r,
          Xe(n)
        ]);
      }), r = B.concat([
        r,
        t.toBuffer(),
        B.from("ProgramDerivedAddress")
      ]);
      const s = Ln(r);
      if (Ha(s)) throw new Error("Invalid seeds, address must fall off the curve");
      return new kn(s);
    }
    static async createProgramAddress(e, t) {
      return this.createProgramAddressSync(e, t);
    }
    static findProgramAddressSync(e, t) {
      let r = 255, s;
      for (; r != 0; ) {
        try {
          const n = e.concat(B.from([
            r
          ]));
          s = this.createProgramAddressSync(n, t);
        } catch (n) {
          if (n instanceof TypeError) throw n;
          r--;
          continue;
        }
        return [
          s,
          r
        ];
      }
      throw new Error("Unable to find a viable program address nonce");
    }
    static async findProgramAddress(e, t) {
      return this.findProgramAddressSync(e, t);
    }
    static isOnCurve(e) {
      const t = new kn(e);
      return Ha(t.toBytes());
    }
  };
  Wu = U;
  U.default = new Wu("11111111111111111111111111111111");
  ks.set(U, {
    kind: "struct",
    fields: [
      [
        "_bn",
        "u256"
      ]
    ]
  });
  let Xd = class {
    constructor(e) {
      if (this._publicKey = void 0, this._secretKey = void 0, e) {
        const t = Xe(e);
        if (e.length !== 64) throw new Error("bad secret key size");
        this._publicKey = t.slice(32, 64), this._secretKey = t.slice(0, 32);
      } else this._secretKey = Xe(jd()), this._publicKey = Xe(yi(this._secretKey));
    }
    get publicKey() {
      return new U(this._publicKey);
    }
    get secretKey() {
      return B.concat([
        this._secretKey,
        this._publicKey
      ], 64);
    }
  };
  const Qd = new U("BPFLoader1111111111111111111111111111111111"), Ar = 1232, Cs = 127, Sr = 64, qu = 129, ef = 4096;
  let oa = class extends Error {
    constructor(e) {
      super(`Signature ${e} has expired: block height exceeded.`), this.signature = void 0, this.signature = e;
    }
  };
  Object.defineProperty(oa.prototype, "name", {
    value: "TransactionExpiredBlockheightExceededError"
  });
  let aa = class extends Error {
    constructor(e, t) {
      super(`Transaction was not confirmed in ${t.toFixed(2)} seconds. It is unknown if it succeeded or failed. Check signature ${e} using the Solana Explorer or CLI tools.`), this.signature = void 0, this.signature = e;
    }
  };
  Object.defineProperty(aa.prototype, "name", {
    value: "TransactionExpiredTimeoutError"
  });
  let vn = class extends Error {
    constructor(e) {
      super(`Signature ${e} has expired: the nonce is no longer valid.`), this.signature = void 0, this.signature = e;
    }
  };
  Object.defineProperty(vn.prototype, "name", {
    value: "TransactionExpiredNonceInvalidError"
  });
  let Cn = class {
    constructor(e, t) {
      this.staticAccountKeys = void 0, this.accountKeysFromLookups = void 0, this.staticAccountKeys = e, this.accountKeysFromLookups = t;
    }
    keySegments() {
      const e = [
        this.staticAccountKeys
      ];
      return this.accountKeysFromLookups && (e.push(this.accountKeysFromLookups.writable), e.push(this.accountKeysFromLookups.readonly)), e;
    }
    get(e) {
      for (const t of this.keySegments()) {
        if (e < t.length) return t[e];
        e -= t.length;
      }
    }
    get length() {
      return this.keySegments().flat().length;
    }
    compileInstructions(e) {
      if (this.length > 256) throw new Error("Account index overflow encountered during compilation");
      const r = /* @__PURE__ */ new Map();
      this.keySegments().flat().forEach((n, a) => {
        r.set(n.toBase58(), a);
      });
      const s = (n) => {
        const a = r.get(n.toBase58());
        if (a === void 0) throw new Error("Encountered an unknown instruction account key during compilation");
        return a;
      };
      return e.map((n) => ({
        programIdIndex: s(n.programId),
        accountKeyIndexes: n.keys.map((a) => s(a.pubkey)),
        data: n.data
      }));
    }
  };
  const rt = (o = "publicKey") => m.blob(32, o), tf = (o = "signature") => m.blob(64, o), Qr = (o = "string") => {
    const e = m.struct([
      m.u32("length"),
      m.u32("lengthPadding"),
      m.blob(m.offset(m.u32(), -8), "chars")
    ], o), t = e.decode.bind(e), r = e.encode.bind(e), s = e;
    return s.decode = (n, a) => t(n, a).chars.toString(), s.encode = (n, a, l) => {
      const d = {
        chars: B.from(n, "utf8")
      };
      return r(d, a, l);
    }, s.alloc = (n) => m.u32().span + m.u32().span + B.from(n, "utf8").length, s;
  }, rf = (o = "authorized") => m.struct([
    rt("staker"),
    rt("withdrawer")
  ], o), nf = (o = "lockup") => m.struct([
    m.ns64("unixTimestamp"),
    m.ns64("epoch"),
    rt("custodian")
  ], o), sf = (o = "voteInit") => m.struct([
    rt("nodePubkey"),
    rt("authorizedVoter"),
    rt("authorizedWithdrawer"),
    m.u8("commission")
  ], o), of = (o = "voteAuthorizeWithSeedArgs") => m.struct([
    m.u32("voteAuthorizationType"),
    rt("currentAuthorityDerivedKeyOwnerPubkey"),
    Qr("currentAuthorityDerivedKeySeed"),
    rt("newAuthorized")
  ], o);
  function Vu(o, e) {
    const t = (s) => {
      if (s.span >= 0) return s.span;
      if (typeof s.alloc == "function") return s.alloc(e[s.property]);
      if ("count" in s && "elementLayout" in s) {
        const n = e[s.property];
        if (Array.isArray(n)) return n.length * t(s.elementLayout);
      } else if ("fields" in s) return Vu({
        layout: s
      }, e[s.property]);
      return 0;
    };
    let r = 0;
    return o.layout.fields.forEach((s) => {
      r += t(s);
    }), r;
  }
  function $t(o) {
    let e = 0, t = 0;
    for (; ; ) {
      let r = o.shift();
      if (e |= (r & 127) << t * 7, t += 1, (r & 128) === 0) break;
    }
    return e;
  }
  function qt(o, e) {
    let t = e;
    for (; ; ) {
      let r = t & 127;
      if (t >>= 7, t == 0) {
        o.push(r);
        break;
      } else r |= 128, o.push(r);
    }
  }
  function et(o, e) {
    if (!o) throw new Error(e || "Assertion failed");
  }
  let Fu = class Hu {
    constructor(e, t) {
      this.payer = void 0, this.keyMetaMap = void 0, this.payer = e, this.keyMetaMap = t;
    }
    static compile(e, t) {
      const r = /* @__PURE__ */ new Map(), s = (a) => {
        const l = a.toBase58();
        let d = r.get(l);
        return d === void 0 && (d = {
          isSigner: false,
          isWritable: false,
          isInvoked: false
        }, r.set(l, d)), d;
      }, n = s(t);
      n.isSigner = true, n.isWritable = true;
      for (const a of e) {
        s(a.programId).isInvoked = true;
        for (const l of a.keys) {
          const d = s(l.pubkey);
          d.isSigner || (d.isSigner = l.isSigner), d.isWritable || (d.isWritable = l.isWritable);
        }
      }
      return new Hu(t, r);
    }
    getMessageComponents() {
      const e = [
        ...this.keyMetaMap.entries()
      ];
      et(e.length <= 256, "Max static account keys length exceeded");
      const t = e.filter(([, d]) => d.isSigner && d.isWritable), r = e.filter(([, d]) => d.isSigner && !d.isWritable), s = e.filter(([, d]) => !d.isSigner && d.isWritable), n = e.filter(([, d]) => !d.isSigner && !d.isWritable), a = {
        numRequiredSignatures: t.length + r.length,
        numReadonlySignedAccounts: r.length,
        numReadonlyUnsignedAccounts: n.length
      };
      {
        et(t.length > 0, "Expected at least one writable signer key");
        const [d] = t[0];
        et(d === this.payer.toBase58(), "Expected first writable signer key to be the fee payer");
      }
      const l = [
        ...t.map(([d]) => new U(d)),
        ...r.map(([d]) => new U(d)),
        ...s.map(([d]) => new U(d)),
        ...n.map(([d]) => new U(d))
      ];
      return [
        a,
        l
      ];
    }
    extractTableLookup(e) {
      const [t, r] = this.drainKeysFoundInLookupTable(e.state.addresses, (a) => !a.isSigner && !a.isInvoked && a.isWritable), [s, n] = this.drainKeysFoundInLookupTable(e.state.addresses, (a) => !a.isSigner && !a.isInvoked && !a.isWritable);
      if (!(t.length === 0 && s.length === 0)) return [
        {
          accountKey: e.key,
          writableIndexes: t,
          readonlyIndexes: s
        },
        {
          writable: r,
          readonly: n
        }
      ];
    }
    drainKeysFoundInLookupTable(e, t) {
      const r = new Array(), s = new Array();
      for (const [n, a] of this.keyMetaMap.entries()) if (t(a)) {
        const l = new U(n), d = e.findIndex((p) => p.equals(l));
        d >= 0 && (et(d < 256, "Max lookup table index exceeded"), r.push(d), s.push(l), this.keyMetaMap.delete(n));
      }
      return [
        r,
        s
      ];
    }
  };
  const Gu = "Reached end of buffer unexpectedly";
  function Mt(o) {
    if (o.length === 0) throw new Error(Gu);
    return o.shift();
  }
  function Pt(o, ...e) {
    const [t] = e;
    if (e.length === 2 ? t + (e[1] ?? 0) > o.length : t >= o.length) throw new Error(Gu);
    return o.splice(...e);
  }
  let Rr = class Mo {
    constructor(e) {
      this.header = void 0, this.accountKeys = void 0, this.recentBlockhash = void 0, this.instructions = void 0, this.indexToProgramIds = /* @__PURE__ */ new Map(), this.header = e.header, this.accountKeys = e.accountKeys.map((t) => new U(t)), this.recentBlockhash = e.recentBlockhash, this.instructions = e.instructions, this.instructions.forEach((t) => this.indexToProgramIds.set(t.programIdIndex, this.accountKeys[t.programIdIndex]));
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
        data: Ct.decode(e.data)
      }));
    }
    get addressTableLookups() {
      return [];
    }
    getAccountKeys() {
      return new Cn(this.staticAccountKeys);
    }
    static compile(e) {
      const t = Fu.compile(e.instructions, e.payerKey), [r, s] = t.getMessageComponents(), a = new Cn(s).compileInstructions(e.instructions).map((l) => ({
        programIdIndex: l.programIdIndex,
        accounts: l.accountKeyIndexes,
        data: Ct.encode(l.data)
      }));
      return new Mo({
        header: r,
        accountKeys: s,
        recentBlockhash: e.recentBlockhash,
        instructions: a
      });
    }
    isAccountSigner(e) {
      return e < this.header.numRequiredSignatures;
    }
    isAccountWritable(e) {
      const t = this.header.numRequiredSignatures;
      if (e >= this.header.numRequiredSignatures) {
        const r = e - t, n = this.accountKeys.length - t - this.header.numReadonlyUnsignedAccounts;
        return r < n;
      } else {
        const r = t - this.header.numReadonlySignedAccounts;
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
      return this.accountKeys.filter((e, t) => !this.isProgramId(t));
    }
    serialize() {
      const e = this.accountKeys.length;
      let t = [];
      qt(t, e);
      const r = this.instructions.map((A) => {
        const { accounts: E, programIdIndex: S } = A, I = Array.from(Ct.decode(A.data));
        let R = [];
        qt(R, E.length);
        let M = [];
        return qt(M, I.length), {
          programIdIndex: S,
          keyIndicesCount: B.from(R),
          keyIndices: E,
          dataLength: B.from(M),
          data: I
        };
      });
      let s = [];
      qt(s, r.length);
      let n = B.alloc(Ar);
      B.from(s).copy(n);
      let a = s.length;
      r.forEach((A) => {
        const S = m.struct([
          m.u8("programIdIndex"),
          m.blob(A.keyIndicesCount.length, "keyIndicesCount"),
          m.seq(m.u8("keyIndex"), A.keyIndices.length, "keyIndices"),
          m.blob(A.dataLength.length, "dataLength"),
          m.seq(m.u8("userdatum"), A.data.length, "data")
        ]).encode(A, n, a);
        a += S;
      }), n = n.slice(0, a);
      const l = m.struct([
        m.blob(1, "numRequiredSignatures"),
        m.blob(1, "numReadonlySignedAccounts"),
        m.blob(1, "numReadonlyUnsignedAccounts"),
        m.blob(t.length, "keyCount"),
        m.seq(rt("key"), e, "keys"),
        rt("recentBlockhash")
      ]), d = {
        numRequiredSignatures: B.from([
          this.header.numRequiredSignatures
        ]),
        numReadonlySignedAccounts: B.from([
          this.header.numReadonlySignedAccounts
        ]),
        numReadonlyUnsignedAccounts: B.from([
          this.header.numReadonlyUnsignedAccounts
        ]),
        keyCount: B.from(t),
        keys: this.accountKeys.map((A) => Xe(A.toBytes())),
        recentBlockhash: Ct.decode(this.recentBlockhash)
      };
      let p = B.alloc(2048);
      const k = l.encode(d, p);
      return n.copy(p, k), p.slice(0, k + n.length);
    }
    static from(e) {
      let t = [
        ...e
      ];
      const r = Mt(t);
      if (r !== (r & Cs)) throw new Error("Versioned messages must be deserialized with VersionedMessage.deserialize()");
      const s = Mt(t), n = Mt(t), a = $t(t);
      let l = [];
      for (let E = 0; E < a; E++) {
        const S = Pt(t, 0, Gt);
        l.push(new U(B.from(S)));
      }
      const d = Pt(t, 0, Gt), p = $t(t);
      let k = [];
      for (let E = 0; E < p; E++) {
        const S = Mt(t), I = $t(t), R = Pt(t, 0, I), M = $t(t), x = Pt(t, 0, M), C = Ct.encode(B.from(x));
        k.push({
          programIdIndex: S,
          accounts: R,
          data: C
        });
      }
      const A = {
        header: {
          numRequiredSignatures: r,
          numReadonlySignedAccounts: s,
          numReadonlyUnsignedAccounts: n
        },
        recentBlockhash: Ct.encode(B.from(d)),
        accountKeys: l,
        instructions: k
      };
      return new Mo(A);
    }
  }, Li = class xo {
    constructor(e) {
      this.header = void 0, this.staticAccountKeys = void 0, this.recentBlockhash = void 0, this.compiledInstructions = void 0, this.addressTableLookups = void 0, this.header = e.header, this.staticAccountKeys = e.staticAccountKeys, this.recentBlockhash = e.recentBlockhash, this.compiledInstructions = e.compiledInstructions, this.addressTableLookups = e.addressTableLookups;
    }
    get version() {
      return 0;
    }
    get numAccountKeysFromLookups() {
      let e = 0;
      for (const t of this.addressTableLookups) e += t.readonlyIndexes.length + t.writableIndexes.length;
      return e;
    }
    getAccountKeys(e) {
      let t;
      if (e && "accountKeysFromLookups" in e && e.accountKeysFromLookups) {
        if (this.numAccountKeysFromLookups != e.accountKeysFromLookups.writable.length + e.accountKeysFromLookups.readonly.length) throw new Error("Failed to get account keys because of a mismatch in the number of account keys from lookups");
        t = e.accountKeysFromLookups;
      } else if (e && "addressLookupTableAccounts" in e && e.addressLookupTableAccounts) t = this.resolveAddressTableLookups(e.addressLookupTableAccounts);
      else if (this.addressTableLookups.length > 0) throw new Error("Failed to get account keys because address table lookups were not resolved");
      return new Cn(this.staticAccountKeys, t);
    }
    isAccountSigner(e) {
      return e < this.header.numRequiredSignatures;
    }
    isAccountWritable(e) {
      const t = this.header.numRequiredSignatures, r = this.staticAccountKeys.length;
      if (e >= r) {
        const s = e - r, n = this.addressTableLookups.reduce((a, l) => a + l.writableIndexes.length, 0);
        return s < n;
      } else if (e >= this.header.numRequiredSignatures) {
        const s = e - t, a = r - t - this.header.numReadonlyUnsignedAccounts;
        return s < a;
      } else {
        const s = t - this.header.numReadonlySignedAccounts;
        return e < s;
      }
    }
    resolveAddressTableLookups(e) {
      const t = {
        writable: [],
        readonly: []
      };
      for (const r of this.addressTableLookups) {
        const s = e.find((n) => n.key.equals(r.accountKey));
        if (!s) throw new Error(`Failed to find address lookup table account for table key ${r.accountKey.toBase58()}`);
        for (const n of r.writableIndexes) if (n < s.state.addresses.length) t.writable.push(s.state.addresses[n]);
        else throw new Error(`Failed to find address for index ${n} in address lookup table ${r.accountKey.toBase58()}`);
        for (const n of r.readonlyIndexes) if (n < s.state.addresses.length) t.readonly.push(s.state.addresses[n]);
        else throw new Error(`Failed to find address for index ${n} in address lookup table ${r.accountKey.toBase58()}`);
      }
      return t;
    }
    static compile(e) {
      const t = Fu.compile(e.instructions, e.payerKey), r = new Array(), s = {
        writable: new Array(),
        readonly: new Array()
      }, n = e.addressLookupTableAccounts || [];
      for (const k of n) {
        const A = t.extractTableLookup(k);
        if (A !== void 0) {
          const [E, { writable: S, readonly: I }] = A;
          r.push(E), s.writable.push(...S), s.readonly.push(...I);
        }
      }
      const [a, l] = t.getMessageComponents(), p = new Cn(l, s).compileInstructions(e.instructions);
      return new xo({
        header: a,
        staticAccountKeys: l,
        recentBlockhash: e.recentBlockhash,
        compiledInstructions: p,
        addressTableLookups: r
      });
    }
    serialize() {
      const e = Array();
      qt(e, this.staticAccountKeys.length);
      const t = this.serializeInstructions(), r = Array();
      qt(r, this.compiledInstructions.length);
      const s = this.serializeAddressTableLookups(), n = Array();
      qt(n, this.addressTableLookups.length);
      const a = m.struct([
        m.u8("prefix"),
        m.struct([
          m.u8("numRequiredSignatures"),
          m.u8("numReadonlySignedAccounts"),
          m.u8("numReadonlyUnsignedAccounts")
        ], "header"),
        m.blob(e.length, "staticAccountKeysLength"),
        m.seq(rt(), this.staticAccountKeys.length, "staticAccountKeys"),
        rt("recentBlockhash"),
        m.blob(r.length, "instructionsLength"),
        m.blob(t.length, "serializedInstructions"),
        m.blob(n.length, "addressTableLookupsLength"),
        m.blob(s.length, "serializedAddressTableLookups")
      ]), l = new Uint8Array(Ar), p = a.encode({
        prefix: 128,
        header: this.header,
        staticAccountKeysLength: new Uint8Array(e),
        staticAccountKeys: this.staticAccountKeys.map((k) => k.toBytes()),
        recentBlockhash: Ct.decode(this.recentBlockhash),
        instructionsLength: new Uint8Array(r),
        serializedInstructions: t,
        addressTableLookupsLength: new Uint8Array(n),
        serializedAddressTableLookups: s
      }, l);
      return l.slice(0, p);
    }
    serializeInstructions() {
      let e = 0;
      const t = new Uint8Array(Ar);
      for (const r of this.compiledInstructions) {
        const s = Array();
        qt(s, r.accountKeyIndexes.length);
        const n = Array();
        qt(n, r.data.length);
        const a = m.struct([
          m.u8("programIdIndex"),
          m.blob(s.length, "encodedAccountKeyIndexesLength"),
          m.seq(m.u8(), r.accountKeyIndexes.length, "accountKeyIndexes"),
          m.blob(n.length, "encodedDataLength"),
          m.blob(r.data.length, "data")
        ]);
        e += a.encode({
          programIdIndex: r.programIdIndex,
          encodedAccountKeyIndexesLength: new Uint8Array(s),
          accountKeyIndexes: r.accountKeyIndexes,
          encodedDataLength: new Uint8Array(n),
          data: r.data
        }, t, e);
      }
      return t.slice(0, e);
    }
    serializeAddressTableLookups() {
      let e = 0;
      const t = new Uint8Array(Ar);
      for (const r of this.addressTableLookups) {
        const s = Array();
        qt(s, r.writableIndexes.length);
        const n = Array();
        qt(n, r.readonlyIndexes.length);
        const a = m.struct([
          rt("accountKey"),
          m.blob(s.length, "encodedWritableIndexesLength"),
          m.seq(m.u8(), r.writableIndexes.length, "writableIndexes"),
          m.blob(n.length, "encodedReadonlyIndexesLength"),
          m.seq(m.u8(), r.readonlyIndexes.length, "readonlyIndexes")
        ]);
        e += a.encode({
          accountKey: r.accountKey.toBytes(),
          encodedWritableIndexesLength: new Uint8Array(s),
          writableIndexes: r.writableIndexes,
          encodedReadonlyIndexesLength: new Uint8Array(n),
          readonlyIndexes: r.readonlyIndexes
        }, t, e);
      }
      return t.slice(0, e);
    }
    static deserialize(e) {
      let t = [
        ...e
      ];
      const r = Mt(t), s = r & Cs;
      et(r !== s, "Expected versioned message but received legacy message");
      const n = s;
      et(n === 0, `Expected versioned message with version 0 but found version ${n}`);
      const a = {
        numRequiredSignatures: Mt(t),
        numReadonlySignedAccounts: Mt(t),
        numReadonlyUnsignedAccounts: Mt(t)
      }, l = [], d = $t(t);
      for (let I = 0; I < d; I++) l.push(new U(Pt(t, 0, Gt)));
      const p = Ct.encode(Pt(t, 0, Gt)), k = $t(t), A = [];
      for (let I = 0; I < k; I++) {
        const R = Mt(t), M = $t(t), x = Pt(t, 0, M), C = $t(t), O = new Uint8Array(Pt(t, 0, C));
        A.push({
          programIdIndex: R,
          accountKeyIndexes: x,
          data: O
        });
      }
      const E = $t(t), S = [];
      for (let I = 0; I < E; I++) {
        const R = new U(Pt(t, 0, Gt)), M = $t(t), x = Pt(t, 0, M), C = $t(t), O = Pt(t, 0, C);
        S.push({
          accountKey: R,
          writableIndexes: x,
          readonlyIndexes: O
        });
      }
      return new xo({
        header: a,
        staticAccountKeys: l,
        recentBlockhash: p,
        compiledInstructions: A,
        addressTableLookups: S
      });
    }
  };
  const ja = 3, af = 4, cf = 8, uf = 16;
  function Hs(o) {
    const e = Pt(o, 0, 4);
    return e[0] + e[1] * 2 ** 8 + e[2] * 2 ** 16 + e[3] * 2 ** 24;
  }
  function lf(o) {
    const e = Pt(o, 0, 8);
    let t = BigInt(0);
    for (let r = e.length - 1; r >= 0; r--) t = t << BigInt(8) | BigInt(e[r]);
    return et(t <= BigInt(Number.MAX_SAFE_INTEGER), "Expected u64 value to be within the safe integer range"), Number(t);
  }
  let ca = class ju {
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
      return new Cn(this.staticAccountKeys);
    }
    isAccountSigner(e) {
      return e < this.header.numRequiredSignatures;
    }
    isAccountWritable(e) {
      const t = this.header.numRequiredSignatures, r = this.staticAccountKeys.length;
      if (e >= r) return false;
      if (e >= this.header.numRequiredSignatures) {
        const s = e - t, a = r - t - this.header.numReadonlyUnsignedAccounts;
        return s < a;
      } else {
        const s = t - this.header.numReadonlySignedAccounts;
        return e < s;
      }
    }
    serialize() {
      throw new Error("Serialization of version 1 transaction messages is not supported");
    }
    static deserialize(e) {
      let t = [
        ...e
      ];
      const r = Mt(t), s = r & Cs;
      et(r !== s, "Expected versioned message but received legacy message");
      const n = s;
      et(n === 1, `Expected versioned message with version 1 but found version ${n}`);
      const a = {
        numRequiredSignatures: Mt(t),
        numReadonlySignedAccounts: Mt(t),
        numReadonlyUnsignedAccounts: Mt(t)
      }, l = Hs(t);
      et((l & -32) === 0, "Unexpected bits set in the transaction config mask");
      const d = l & ja;
      et(d === 0 || d === ja, "Expected both or neither of the priority fee bits to be set in the transaction config mask");
      const p = Ct.encode(Pt(t, 0, Gt)), k = Mt(t), A = Mt(t), E = [];
      for (let M = 0; M < A; M++) E.push(new U(Pt(t, 0, Gt)));
      const S = {
        computeUnitLimit: null,
        heapSize: null,
        loadedAccountsDataSizeLimit: null,
        priorityFee: null
      };
      d !== 0 && (S.priorityFee = lf(t)), l & af && (S.computeUnitLimit = Hs(t)), l & cf && (S.loadedAccountsDataSizeLimit = Hs(t)), l & uf && (S.heapSize = Hs(t));
      const I = [];
      for (let M = 0; M < k; M++) {
        const x = Mt(t), C = Mt(t), O = Mt(t) + Mt(t) * 256;
        I.push({
          accountKeyIndexesLength: C,
          dataLength: O,
          programIdIndex: x
        });
      }
      const R = [];
      for (const M of I) R.push({
        programIdIndex: M.programIdIndex,
        accountKeyIndexes: Pt(t, 0, M.accountKeyIndexesLength),
        data: new Uint8Array(Pt(t, 0, M.dataLength))
      });
      return et(t.length === 0, "Expected no bytes to remain after deserializing a version 1 message"), new ju({
        header: a,
        staticAccountKeys: E,
        recentBlockhash: p,
        compiledInstructions: R,
        transactionConfig: S
      });
    }
  };
  const mi = {
    deserializeMessageVersion(o) {
      const e = o[0], t = e & Cs;
      return t === e ? "legacy" : t;
    },
    deserialize: (o) => {
      const e = mi.deserializeMessageVersion(o);
      if (e === "legacy") return Rr.from(o);
      if (e === 0) return Li.deserialize(o);
      if (e === 1) return ca.deserialize(o);
      throw new Error(`Transaction message version ${e} deserialization is not supported`);
    }
  };
  let pr = (function(o) {
    return o[o.BLOCKHEIGHT_EXCEEDED = 0] = "BLOCKHEIGHT_EXCEEDED", o[o.PROCESSED = 1] = "PROCESSED", o[o.TIMED_OUT = 2] = "TIMED_OUT", o[o.NONCE_INVALID = 3] = "NONCE_INVALID", o;
  })({});
  const hf = B.alloc(Sr).fill(0);
  let ht = class {
    constructor(e) {
      this.keys = void 0, this.programId = void 0, this.data = B.alloc(0), this.programId = e.programId, this.keys = e.keys, e.data && (this.data = e.data);
    }
    toJSON() {
      return {
        keys: this.keys.map(({ pubkey: e, isSigner: t, isWritable: r }) => ({
          pubkey: e.toJSON(),
          isSigner: t,
          isWritable: r
        })),
        programId: this.programId.toJSON(),
        data: [
          ...this.data
        ]
      };
    }
  }, ct = class Po {
    get signature() {
      return this.signatures.length > 0 ? this.signatures[0].signature : null;
    }
    constructor(e) {
      if (this.signatures = [], this.feePayer = void 0, this.instructions = [], this.recentBlockhash = void 0, this.lastValidBlockHeight = void 0, this.nonceInfo = void 0, this.minNonceContextSlot = void 0, this._message = void 0, this._json = void 0, !!e) if (e.feePayer && (this.feePayer = e.feePayer), e.signatures && (this.signatures = e.signatures), Object.prototype.hasOwnProperty.call(e, "nonceInfo")) {
        const { minContextSlot: t, nonceInfo: r } = e;
        this.minNonceContextSlot = t, this.nonceInfo = r;
      } else if (Object.prototype.hasOwnProperty.call(e, "lastValidBlockHeight")) {
        const { blockhash: t, lastValidBlockHeight: r } = e;
        this.recentBlockhash = t, this.lastValidBlockHeight = r;
      } else {
        const { recentBlockhash: t, nonceInfo: r } = e;
        r && (this.nonceInfo = r), this.recentBlockhash = t;
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
      return e.forEach((t) => {
        "instructions" in t ? this.instructions = this.instructions.concat(t.instructions) : "data" in t && "programId" in t && "keys" in t ? this.instructions.push(t) : this.instructions.push(new ht(t));
      }), this;
    }
    compileMessage() {
      if (this._message && JSON.stringify(this.toJSON()) === JSON.stringify(this._json)) return this._message;
      let e, t;
      if (this.nonceInfo ? (e = this.nonceInfo.nonce, this.instructions[0] != this.nonceInfo.nonceInstruction ? t = [
        this.nonceInfo.nonceInstruction,
        ...this.instructions
      ] : t = this.instructions) : (e = this.recentBlockhash, t = this.instructions), !e) throw new Error("Transaction recentBlockhash required");
      t.length < 1 && console.warn("No instructions provided");
      let r;
      if (this.feePayer) r = this.feePayer;
      else if (this.signatures.length > 0 && this.signatures[0].publicKey) r = this.signatures[0].publicKey;
      else throw new Error("Transaction fee payer required");
      for (let R = 0; R < t.length; R++) if (t[R].programId === void 0) throw new Error(`Transaction instruction index ${R} has undefined program id`);
      const s = [], n = [];
      t.forEach((R) => {
        R.keys.forEach((x) => {
          n.push({
            ...x
          });
        });
        const M = R.programId.toString();
        s.includes(M) || s.push(M);
      }), s.forEach((R) => {
        n.push({
          pubkey: new U(R),
          isSigner: false,
          isWritable: false
        });
      });
      const a = [];
      n.forEach((R) => {
        const M = R.pubkey.toString(), x = a.findIndex((C) => C.pubkey.toString() === M);
        x > -1 ? (a[x].isWritable = a[x].isWritable || R.isWritable, a[x].isSigner = a[x].isSigner || R.isSigner) : a.push(R);
      }), a.sort(function(R, M) {
        if (R.isSigner !== M.isSigner) return R.isSigner ? -1 : 1;
        if (R.isWritable !== M.isWritable) return R.isWritable ? -1 : 1;
        const x = {
          localeMatcher: "best fit",
          usage: "sort",
          sensitivity: "variant",
          ignorePunctuation: false,
          numeric: false,
          caseFirst: "lower"
        };
        return R.pubkey.toBase58().localeCompare(M.pubkey.toBase58(), "en", x);
      });
      const l = a.findIndex((R) => R.pubkey.equals(r));
      if (l > -1) {
        const [R] = a.splice(l, 1);
        R.isSigner = true, R.isWritable = true, a.unshift(R);
      } else a.unshift({
        pubkey: r,
        isSigner: true,
        isWritable: true
      });
      for (const R of this.signatures) {
        const M = a.findIndex((x) => x.pubkey.equals(R.publicKey));
        if (M > -1) a[M].isSigner || (a[M].isSigner = true, console.warn("Transaction references a signature that is unnecessary, only the fee payer and instruction signer accounts should sign a transaction. This behavior is deprecated and will throw an error in the next major version release."));
        else throw new Error(`unknown signer: ${R.publicKey.toString()}`);
      }
      let d = 0, p = 0, k = 0;
      const A = [], E = [];
      a.forEach(({ pubkey: R, isSigner: M, isWritable: x }) => {
        M ? (A.push(R.toString()), d += 1, x || (p += 1)) : (E.push(R.toString()), x || (k += 1));
      });
      const S = A.concat(E), I = t.map((R) => {
        const { data: M, programId: x } = R;
        return {
          programIdIndex: S.indexOf(x.toString()),
          accounts: R.keys.map((C) => S.indexOf(C.pubkey.toString())),
          data: Ct.encode(M)
        };
      });
      return I.forEach((R) => {
        et(R.programIdIndex >= 0), R.accounts.forEach((M) => et(M >= 0));
      }), new Rr({
        header: {
          numRequiredSignatures: d,
          numReadonlySignedAccounts: p,
          numReadonlyUnsignedAccounts: k
        },
        accountKeys: S,
        recentBlockhash: e,
        instructions: I
      });
    }
    _compile() {
      const e = this.compileMessage(), t = e.accountKeys.slice(0, e.header.numRequiredSignatures);
      return this.signatures.length === t.length && this.signatures.every((s, n) => t[n].equals(s.publicKey)) || (this.signatures = t.map((r) => ({
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
      const t = /* @__PURE__ */ new Set();
      this.signatures = e.filter((r) => {
        const s = r.toString();
        return t.has(s) ? false : (t.add(s), true);
      }).map((r) => ({
        signature: null,
        publicKey: r
      }));
    }
    sign(...e) {
      if (e.length === 0) throw new Error("No signers");
      const t = /* @__PURE__ */ new Set(), r = [];
      for (const n of e) {
        const a = n.publicKey.toString();
        t.has(a) || (t.add(a), r.push(n));
      }
      this.signatures = r.map((n) => ({
        signature: null,
        publicKey: n.publicKey
      }));
      const s = this._compile();
      this._partialSign(s, ...r);
    }
    partialSign(...e) {
      if (e.length === 0) throw new Error("No signers");
      const t = /* @__PURE__ */ new Set(), r = [];
      for (const n of e) {
        const a = n.publicKey.toString();
        t.has(a) || (t.add(a), r.push(n));
      }
      const s = this._compile();
      this._partialSign(s, ...r);
    }
    _partialSign(e, ...t) {
      const r = e.serialize();
      t.forEach((s) => {
        const n = sa(r, s.secretKey);
        this._addSignature(s.publicKey, Xe(n));
      });
    }
    addSignature(e, t) {
      this._compile(), this._addSignature(e, t);
    }
    _addSignature(e, t) {
      et(t.length === 64);
      const r = this.signatures.findIndex((s) => e.equals(s.publicKey));
      if (r < 0) throw new Error(`unknown signer: ${e.toString()}`);
      this.signatures[r].signature = B.from(t);
    }
    verifySignatures(e = true) {
      return !this._getMessageSignednessErrors(this.serializeMessage(), e);
    }
    _getMessageSignednessErrors(e, t) {
      const r = {};
      for (const { signature: s, publicKey: n } of this.signatures) s === null ? t && (r.missing || (r.missing = [])).push(n) : Yd(s, e, n.toBytes()) || (r.invalid || (r.invalid = [])).push(n);
      return r.invalid || r.missing ? r : void 0;
    }
    serialize(e) {
      const { requireAllSignatures: t, verifySignatures: r } = Object.assign({
        requireAllSignatures: true,
        verifySignatures: true
      }, e), s = this.serializeMessage();
      if (r) {
        const n = this._getMessageSignednessErrors(s, t);
        if (n) {
          let a = "Signature verification failed.";
          throw n.invalid && (a += `
Invalid signature for public key${n.invalid.length === 1 ? "" : "(s)"} [\`${n.invalid.map((l) => l.toBase58()).join("`, `")}\`].`), n.missing && (a += `
Missing signature for public key${n.missing.length === 1 ? "" : "(s)"} [\`${n.missing.map((l) => l.toBase58()).join("`, `")}\`].`), new Error(a);
        }
      }
      return this._serialize(s);
    }
    _serialize(e) {
      const { signatures: t } = this, r = [];
      qt(r, t.length);
      const s = r.length + t.length * 64 + e.length, n = B.alloc(s);
      return et(t.length < 256), B.from(r).copy(n, 0), t.forEach(({ signature: a }, l) => {
        a !== null && (et(a.length === 64, "signature has invalid length"), B.from(a).copy(n, r.length + l * 64));
      }), e.copy(n, r.length + t.length * 64), et(n.length <= Ar, `Transaction too large: ${n.length} > ${Ar}`), n;
    }
    get keys() {
      return et(this.instructions.length === 1), this.instructions[0].keys.map((e) => e.pubkey);
    }
    get programId() {
      return et(this.instructions.length === 1), this.instructions[0].programId;
    }
    get data() {
      return et(this.instructions.length === 1), this.instructions[0].data;
    }
    static from(e) {
      let t = [
        ...e
      ];
      const r = $t(t);
      let s = [];
      for (let n = 0; n < r; n++) {
        const a = Pt(t, 0, Sr);
        s.push(Ct.encode(B.from(a)));
      }
      return Po.populate(Rr.from(t), s);
    }
    static populate(e, t = []) {
      const r = new Po();
      return r.recentBlockhash = e.recentBlockhash, e.header.numRequiredSignatures > 0 && (r.feePayer = e.accountKeys[0]), t.forEach((s, n) => {
        const a = {
          signature: s == Ct.encode(hf) ? null : Ct.decode(s),
          publicKey: e.accountKeys[n]
        };
        r.signatures.push(a);
      }), e.instructions.forEach((s) => {
        const n = s.accounts.map((a) => {
          const l = e.accountKeys[a];
          return {
            pubkey: l,
            isSigner: r.signatures.some((d) => d.publicKey.toString() === l.toString()) || e.isAccountSigner(a),
            isWritable: e.isAccountWritable(a)
          };
        });
        r.instructions.push(new ht({
          keys: n,
          programId: e.accountKeys[s.programIdIndex],
          data: Ct.decode(s.data)
        }));
      }), r._message = e, r._json = r.toJSON(), r;
    }
  }, df = class Yu {
    constructor(e) {
      this.payerKey = void 0, this.instructions = void 0, this.recentBlockhash = void 0, this.payerKey = e.payerKey, this.instructions = e.instructions, this.recentBlockhash = e.recentBlockhash;
    }
    static decompile(e, t) {
      const { header: r, compiledInstructions: s, recentBlockhash: n } = e, { numRequiredSignatures: a, numReadonlySignedAccounts: l, numReadonlyUnsignedAccounts: d } = r, p = a - l;
      et(p > 0, "Message header is invalid");
      const k = e.staticAccountKeys.length - a - d;
      et(k >= 0, "Message header is invalid");
      const A = e.getAccountKeys(t), E = A.get(0);
      if (E === void 0) throw new Error("Failed to decompile message because no account keys were found");
      const S = [];
      for (const I of s) {
        const R = [];
        for (const x of I.accountKeyIndexes) {
          const C = A.get(x);
          if (C === void 0) throw new Error(`Failed to find key for account key index ${x}`);
          const O = x < a;
          let N;
          O ? N = x < p : x < A.staticAccountKeys.length ? N = x - a < k : N = x - A.staticAccountKeys.length < A.accountKeysFromLookups.writable.length, R.push({
            pubkey: C,
            isSigner: x < r.numRequiredSignatures,
            isWritable: N
          });
        }
        const M = A.get(I.programIdIndex);
        if (M === void 0) throw new Error(`Failed to find program id for program id index ${I.programIdIndex}`);
        S.push(new ht({
          programId: M,
          data: Xe(I.data),
          keys: R
        }));
      }
      return new Yu({
        payerKey: E,
        instructions: S,
        recentBlockhash: n
      });
    }
    compileToLegacyMessage() {
      return Rr.compile({
        payerKey: this.payerKey,
        recentBlockhash: this.recentBlockhash,
        instructions: this.instructions
      });
    }
    compileToV0Message(e) {
      return Li.compile({
        payerKey: this.payerKey,
        recentBlockhash: this.recentBlockhash,
        instructions: this.instructions,
        addressLookupTableAccounts: e
      });
    }
  }, ff = class To {
    get version() {
      return this.message.version;
    }
    constructor(e, t) {
      if (this.signatures = void 0, this.message = void 0, t !== void 0) et(t.length === e.header.numRequiredSignatures, "Expected signatures length to be equal to the number of required signatures"), this.signatures = t;
      else {
        const r = [];
        for (let s = 0; s < e.header.numRequiredSignatures; s++) r.push(new Uint8Array(Sr));
        this.signatures = r;
      }
      this.message = e;
    }
    serialize() {
      const e = this.message.serialize(), t = Array();
      qt(t, this.signatures.length);
      const r = m.struct([
        m.blob(t.length, "encodedSignaturesLength"),
        m.seq(tf(), this.signatures.length, "signatures"),
        m.blob(e.length, "serializedMessage")
      ]), s = new Uint8Array(2048), n = r.encode({
        encodedSignaturesLength: new Uint8Array(t),
        signatures: this.signatures,
        serializedMessage: e
      }, s);
      return s.slice(0, n);
    }
    static deserialize(e) {
      if (e[0] === qu) return this.deserializeV1(e);
      let t = [
        ...e
      ];
      const r = [], s = $t(t);
      for (let a = 0; a < s; a++) r.push(new Uint8Array(Pt(t, 0, Sr)));
      const n = mi.deserialize(new Uint8Array(t));
      return new To(n, r);
    }
    static deserializeV1(e) {
      const t = e[1], r = t * Sr, s = e.length - r;
      et(s > 0, "Expected transaction to have enough bytes for its signatures");
      const n = mi.deserialize(e.slice(0, s)), a = [];
      for (let l = 0; l < t; l++) {
        const d = s + l * Sr;
        a.push(e.slice(d, d + Sr));
      }
      return new To(n, a);
    }
    sign(e) {
      const t = this.message.serialize(), r = this.message.staticAccountKeys.slice(0, this.message.header.numRequiredSignatures);
      for (const s of e) {
        const n = r.findIndex((a) => a.equals(s.publicKey));
        et(n >= 0, `Cannot sign with non signer key ${s.publicKey.toBase58()}`), this.signatures[n] = sa(t, s.secretKey);
      }
    }
    addSignature(e, t) {
      et(t.byteLength === 64, "Signature must be 64 bytes long");
      const s = this.message.staticAccountKeys.slice(0, this.message.header.numRequiredSignatures).findIndex((n) => n.equals(e));
      et(s >= 0, `Can not add signature; \`${e.toBase58()}\` is not required to sign this transaction`), this.signatures[s] = t;
    }
  };
  const gf = 160, pf = 64, yf = gf / pf, Zu = 1e3 / yf, Wt = new U("SysvarC1ock11111111111111111111111111111111"), mf = new U("SysvarEpochSchedu1e111111111111111111111111"), Ju = new U("Sysvar1nstructions1111111111111111111111111"), ii = new U("SysvarRecentB1ockHashes11111111111111111111"), Yt = new U("SysvarRent111111111111111111111111111111111"), bf = new U("SysvarRewards111111111111111111111111111111"), wf = new U("SysvarS1otHashes111111111111111111111111111"), kf = new U("SysvarS1otHistory11111111111111111111111111"), oi = new U("SysvarStakeHistory1111111111111111111111111");
  let Is = class extends Error {
    constructor({ action: e, signature: t, transactionMessage: r, logs: s }) {
      const n = s ? `Logs: 
${JSON.stringify(s.slice(-10), null, 2)}. ` : "", a = "\nCatch the `SendTransactionError` and call `getLogs()` on it for full details.";
      let l;
      switch (e) {
        case "send":
          l = `Transaction ${t} resulted in an error. 
${r}. ` + n + a;
          break;
        case "simulate":
          l = `Simulation failed. 
Message: ${r}. 
` + n + a;
          break;
        default:
          l = `Unknown action '${/* @__PURE__ */ ((d) => d)(e)}'`;
      }
      super(l), this.signature = void 0, this.transactionMessage = void 0, this.transactionLogs = void 0, this.signature = t, this.transactionMessage = r, this.transactionLogs = s || void 0;
    }
    get transactionError() {
      return {
        message: this.transactionMessage,
        logs: Array.isArray(this.transactionLogs) ? this.transactionLogs : void 0
      };
    }
    get logs() {
      const e = this.transactionLogs;
      if (!(e != null && typeof e == "object" && "then" in e)) return e;
    }
    async getLogs(e) {
      return Array.isArray(this.transactionLogs) || (this.transactionLogs = new Promise((t, r) => {
        e.getTransaction(this.signature).then((s) => {
          if (s && s.meta && s.meta.logMessages) {
            const n = s.meta.logMessages;
            this.transactionLogs = n, t(n);
          } else r(new Error("Log messages not found"));
        }).catch(r);
      })), await this.transactionLogs;
    }
  };
  const vf = {
    JSON_RPC_SERVER_ERROR_BLOCK_CLEANED_UP: -32001,
    JSON_RPC_SERVER_ERROR_SEND_TRANSACTION_PREFLIGHT_FAILURE: -32002,
    JSON_RPC_SERVER_ERROR_TRANSACTION_SIGNATURE_VERIFICATION_FAILURE: -32003,
    JSON_RPC_SERVER_ERROR_BLOCK_NOT_AVAILABLE: -32004,
    JSON_RPC_SERVER_ERROR_NODE_UNHEALTHY: -32005,
    JSON_RPC_SERVER_ERROR_TRANSACTION_PRECOMPILE_VERIFICATION_FAILURE: -32006,
    JSON_RPC_SERVER_ERROR_SLOT_SKIPPED: -32007,
    JSON_RPC_SERVER_ERROR_NO_SNAPSHOT: -32008,
    JSON_RPC_SERVER_ERROR_LONG_TERM_STORAGE_SLOT_SKIPPED: -32009,
    JSON_RPC_SERVER_ERROR_KEY_EXCLUDED_FROM_SECONDARY_INDEX: -32010,
    JSON_RPC_SERVER_ERROR_TRANSACTION_HISTORY_NOT_AVAILABLE: -32011,
    JSON_RPC_SCAN_ERROR: -32012,
    JSON_RPC_SERVER_ERROR_TRANSACTION_SIGNATURE_LEN_MISMATCH: -32013,
    JSON_RPC_SERVER_ERROR_BLOCK_STATUS_NOT_AVAILABLE_YET: -32014,
    JSON_RPC_SERVER_ERROR_UNSUPPORTED_TRANSACTION_VERSION: -32015,
    JSON_RPC_SERVER_ERROR_MIN_CONTEXT_SLOT_NOT_REACHED: -32016
  };
  let te = class extends Error {
    constructor({ code: e, message: t, data: r }, s) {
      super(s != null ? `${s}: ${t}` : t), this.code = void 0, this.data = void 0, this.code = e, this.data = r, this.name = "SolanaJSONRPCError";
    }
  };
  async function Lo(o, e, t, r) {
    const s = r && {
      skipPreflight: r.skipPreflight,
      preflightCommitment: r.preflightCommitment || r.commitment,
      maxRetries: r.maxRetries,
      minContextSlot: r.minContextSlot
    }, n = await o.sendTransaction(e, t, s);
    let a;
    if (e.recentBlockhash != null && e.lastValidBlockHeight != null) a = (await o.confirmTransaction({
      abortSignal: r == null ? void 0 : r.abortSignal,
      signature: n,
      blockhash: e.recentBlockhash,
      lastValidBlockHeight: e.lastValidBlockHeight
    }, r && r.commitment)).value;
    else if (e.minNonceContextSlot != null && e.nonceInfo != null) {
      const { nonceInstruction: l } = e.nonceInfo, d = l.keys[0].pubkey;
      a = (await o.confirmTransaction({
        abortSignal: r == null ? void 0 : r.abortSignal,
        minContextSlot: e.minNonceContextSlot,
        nonceAccountPubkey: d,
        nonceValue: e.nonceInfo.nonce,
        signature: n
      }, r && r.commitment)).value;
    } else (r == null ? void 0 : r.abortSignal) != null && console.warn("sendAndConfirmTransaction(): A transaction with a deprecated confirmation strategy was supplied along with an `abortSignal`. Only transactions having `lastValidBlockHeight` or a combination of `nonceInfo` and `minNonceContextSlot` are abortable."), a = (await o.confirmTransaction(n, r && r.commitment)).value;
    if (a.err) throw n != null ? new Is({
      action: "send",
      signature: n,
      transactionMessage: `Status: (${JSON.stringify(a)})`
    }) : new Error(`Transaction ${n} failed (${JSON.stringify(a)})`);
    return n;
  }
  function Jr(o) {
    return new Promise((e) => setTimeout(e, o));
  }
  function st(o, e) {
    const t = o.layout.span >= 0 ? o.layout.span : Vu(o, e), r = B.alloc(t), s = Object.assign({
      instruction: o.index
    }, e);
    return o.layout.encode(s, r), r;
  }
  function ut(o, e) {
    let t;
    try {
      t = o.layout.decode(e);
    } catch (r) {
      throw new Error("invalid instruction; " + r);
    }
    if (t.instruction !== o.index) throw new Error(`invalid instruction; instruction index mismatch ${t.instruction} != ${o.index}`);
    return t;
  }
  const Xu = m.nu64("lamportsPerSignature"), Qu = m.struct([
    m.u32("version"),
    m.u32("state"),
    rt("authorizedPubkey"),
    rt("nonce"),
    m.struct([
      Xu
    ], "feeCalculator")
  ]), Co = Qu.span;
  let el = class tl {
    constructor(e) {
      this.authorizedPubkey = void 0, this.nonce = void 0, this.feeCalculator = void 0, this.authorizedPubkey = e.authorizedPubkey, this.nonce = e.nonce, this.feeCalculator = e.feeCalculator;
    }
    static fromAccountData(e) {
      const t = Qu.decode(Xe(e), 0);
      return new tl({
        authorizedPubkey: new U(t.authorizedPubkey),
        nonce: new U(t.nonce).toString(),
        feeCalculator: t.feeCalculator
      });
    }
  };
  function Bn(o) {
    const e = m.blob(8, o), t = e.decode.bind(e), r = e.encode.bind(e), s = e, n = Gd();
    return s.decode = (a, l) => {
      const d = t(a, l);
      return n.decode(d);
    }, s.encode = (a, l, d) => {
      const p = n.encode(a);
      return r(p, l, d);
    }, s;
  }
  let Sf = class {
    constructor() {
    }
    static decodeInstructionType(e) {
      this.checkProgramId(e.programId);
      const r = m.u32("instruction").decode(e.data);
      let s;
      for (const [n, a] of Object.entries(pt)) if (a.index == r) {
        s = n;
        break;
      }
      if (!s) throw new Error("Instruction type incorrect; not a SystemInstruction");
      return s;
    }
    static decodeCreateAccount(e) {
      this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2);
      const { lamports: t, space: r, programId: s } = ut(pt.Create, e.data);
      return {
        fromPubkey: e.keys[0].pubkey,
        newAccountPubkey: e.keys[1].pubkey,
        lamports: t,
        space: r,
        programId: new U(s)
      };
    }
    static decodeTransfer(e) {
      this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2);
      const { lamports: t } = ut(pt.Transfer, e.data);
      return {
        fromPubkey: e.keys[0].pubkey,
        toPubkey: e.keys[1].pubkey,
        lamports: t
      };
    }
    static decodeTransferWithSeed(e) {
      this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
      const { lamports: t, seed: r, programId: s } = ut(pt.TransferWithSeed, e.data);
      return {
        fromPubkey: e.keys[0].pubkey,
        basePubkey: e.keys[1].pubkey,
        toPubkey: e.keys[2].pubkey,
        lamports: t,
        seed: r,
        programId: new U(s)
      };
    }
    static decodeAllocate(e) {
      this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 1);
      const { space: t } = ut(pt.Allocate, e.data);
      return {
        accountPubkey: e.keys[0].pubkey,
        space: t
      };
    }
    static decodeAllocateWithSeed(e) {
      this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 1);
      const { base: t, seed: r, space: s, programId: n } = ut(pt.AllocateWithSeed, e.data);
      return {
        accountPubkey: e.keys[0].pubkey,
        basePubkey: new U(t),
        seed: r,
        space: s,
        programId: new U(n)
      };
    }
    static decodeAssign(e) {
      this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 1);
      const { programId: t } = ut(pt.Assign, e.data);
      return {
        accountPubkey: e.keys[0].pubkey,
        programId: new U(t)
      };
    }
    static decodeAssignWithSeed(e) {
      this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 1);
      const { base: t, seed: r, programId: s } = ut(pt.AssignWithSeed, e.data);
      return {
        accountPubkey: e.keys[0].pubkey,
        basePubkey: new U(t),
        seed: r,
        programId: new U(s)
      };
    }
    static decodeCreateWithSeed(e) {
      this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2);
      const { base: t, seed: r, lamports: s, space: n, programId: a } = ut(pt.CreateWithSeed, e.data);
      return {
        fromPubkey: e.keys[0].pubkey,
        newAccountPubkey: e.keys[1].pubkey,
        basePubkey: new U(t),
        seed: r,
        lamports: s,
        space: n,
        programId: new U(a)
      };
    }
    static decodeNonceInitialize(e) {
      this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
      const { authorized: t } = ut(pt.InitializeNonceAccount, e.data);
      return {
        noncePubkey: e.keys[0].pubkey,
        authorizedPubkey: new U(t)
      };
    }
    static decodeNonceAdvance(e) {
      return this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3), ut(pt.AdvanceNonceAccount, e.data), {
        noncePubkey: e.keys[0].pubkey,
        authorizedPubkey: e.keys[2].pubkey
      };
    }
    static decodeNonceWithdraw(e) {
      this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 5);
      const { lamports: t } = ut(pt.WithdrawNonceAccount, e.data);
      return {
        noncePubkey: e.keys[0].pubkey,
        toPubkey: e.keys[1].pubkey,
        authorizedPubkey: e.keys[4].pubkey,
        lamports: t
      };
    }
    static decodeNonceAuthorize(e) {
      this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2);
      const { authorized: t } = ut(pt.AuthorizeNonceAccount, e.data);
      return {
        noncePubkey: e.keys[0].pubkey,
        authorizedPubkey: e.keys[1].pubkey,
        newAuthorizedPubkey: new U(t)
      };
    }
    static checkProgramId(e) {
      if (!e.equals(St.programId)) throw new Error("invalid instruction; programId is not SystemProgram");
    }
    static checkKeyLength(e, t) {
      if (e.length < t) throw new Error(`invalid instruction; found ${e.length} keys, expected at least ${t}`);
    }
  };
  const pt = Object.freeze({
    Create: {
      index: 0,
      layout: m.struct([
        m.u32("instruction"),
        m.ns64("lamports"),
        m.ns64("space"),
        rt("programId")
      ])
    },
    Assign: {
      index: 1,
      layout: m.struct([
        m.u32("instruction"),
        rt("programId")
      ])
    },
    Transfer: {
      index: 2,
      layout: m.struct([
        m.u32("instruction"),
        Bn("lamports")
      ])
    },
    CreateWithSeed: {
      index: 3,
      layout: m.struct([
        m.u32("instruction"),
        rt("base"),
        Qr("seed"),
        m.ns64("lamports"),
        m.ns64("space"),
        rt("programId")
      ])
    },
    AdvanceNonceAccount: {
      index: 4,
      layout: m.struct([
        m.u32("instruction")
      ])
    },
    WithdrawNonceAccount: {
      index: 5,
      layout: m.struct([
        m.u32("instruction"),
        m.ns64("lamports")
      ])
    },
    InitializeNonceAccount: {
      index: 6,
      layout: m.struct([
        m.u32("instruction"),
        rt("authorized")
      ])
    },
    AuthorizeNonceAccount: {
      index: 7,
      layout: m.struct([
        m.u32("instruction"),
        rt("authorized")
      ])
    },
    Allocate: {
      index: 8,
      layout: m.struct([
        m.u32("instruction"),
        m.ns64("space")
      ])
    },
    AllocateWithSeed: {
      index: 9,
      layout: m.struct([
        m.u32("instruction"),
        rt("base"),
        Qr("seed"),
        m.ns64("space"),
        rt("programId")
      ])
    },
    AssignWithSeed: {
      index: 10,
      layout: m.struct([
        m.u32("instruction"),
        rt("base"),
        Qr("seed"),
        rt("programId")
      ])
    },
    TransferWithSeed: {
      index: 11,
      layout: m.struct([
        m.u32("instruction"),
        Bn("lamports"),
        Qr("seed"),
        rt("programId")
      ])
    },
    UpgradeNonceAccount: {
      index: 12,
      layout: m.struct([
        m.u32("instruction")
      ])
    }
  });
  let St = class Bo {
    constructor() {
    }
    static createAccount(e) {
      const t = pt.Create, r = st(t, {
        lamports: e.lamports,
        space: e.space,
        programId: Xe(e.programId.toBuffer())
      });
      return new ht({
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
      let t, r;
      if ("basePubkey" in e) {
        const s = pt.TransferWithSeed;
        t = st(s, {
          lamports: BigInt(e.lamports),
          seed: e.seed,
          programId: Xe(e.programId.toBuffer())
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
        const s = pt.Transfer;
        t = st(s, {
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
      return new ht({
        keys: r,
        programId: this.programId,
        data: t
      });
    }
    static assign(e) {
      let t, r;
      if ("basePubkey" in e) {
        const s = pt.AssignWithSeed;
        t = st(s, {
          base: Xe(e.basePubkey.toBuffer()),
          seed: e.seed,
          programId: Xe(e.programId.toBuffer())
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
        const s = pt.Assign;
        t = st(s, {
          programId: Xe(e.programId.toBuffer())
        }), r = [
          {
            pubkey: e.accountPubkey,
            isSigner: true,
            isWritable: true
          }
        ];
      }
      return new ht({
        keys: r,
        programId: this.programId,
        data: t
      });
    }
    static createAccountWithSeed(e) {
      const t = pt.CreateWithSeed, r = st(t, {
        base: Xe(e.basePubkey.toBuffer()),
        seed: e.seed,
        lamports: e.lamports,
        space: e.space,
        programId: Xe(e.programId.toBuffer())
      });
      let s = [
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
      return e.basePubkey.equals(e.fromPubkey) || s.push({
        pubkey: e.basePubkey,
        isSigner: true,
        isWritable: false
      }), new ht({
        keys: s,
        programId: this.programId,
        data: r
      });
    }
    static createNonceAccount(e) {
      const t = new ct();
      "basePubkey" in e && "seed" in e ? t.add(Bo.createAccountWithSeed({
        fromPubkey: e.fromPubkey,
        newAccountPubkey: e.noncePubkey,
        basePubkey: e.basePubkey,
        seed: e.seed,
        lamports: e.lamports,
        space: Co,
        programId: this.programId
      })) : t.add(Bo.createAccount({
        fromPubkey: e.fromPubkey,
        newAccountPubkey: e.noncePubkey,
        lamports: e.lamports,
        space: Co,
        programId: this.programId
      }));
      const r = {
        noncePubkey: e.noncePubkey,
        authorizedPubkey: e.authorizedPubkey
      };
      return t.add(this.nonceInitialize(r)), t;
    }
    static nonceInitialize(e) {
      const t = pt.InitializeNonceAccount, r = st(t, {
        authorized: Xe(e.authorizedPubkey.toBuffer())
      }), s = {
        keys: [
          {
            pubkey: e.noncePubkey,
            isSigner: false,
            isWritable: true
          },
          {
            pubkey: ii,
            isSigner: false,
            isWritable: false
          },
          {
            pubkey: Yt,
            isSigner: false,
            isWritable: false
          }
        ],
        programId: this.programId,
        data: r
      };
      return new ht(s);
    }
    static nonceAdvance(e) {
      const t = pt.AdvanceNonceAccount, r = st(t), s = {
        keys: [
          {
            pubkey: e.noncePubkey,
            isSigner: false,
            isWritable: true
          },
          {
            pubkey: ii,
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
      return new ht(s);
    }
    static nonceWithdraw(e) {
      const t = pt.WithdrawNonceAccount, r = st(t, {
        lamports: e.lamports
      });
      return new ht({
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
            pubkey: ii,
            isSigner: false,
            isWritable: false
          },
          {
            pubkey: Yt,
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
      const t = pt.AuthorizeNonceAccount, r = st(t, {
        authorized: Xe(e.newAuthorizedPubkey.toBuffer())
      });
      return new ht({
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
      let t, r;
      if ("basePubkey" in e) {
        const s = pt.AllocateWithSeed;
        t = st(s, {
          base: Xe(e.basePubkey.toBuffer()),
          seed: e.seed,
          space: e.space,
          programId: Xe(e.programId.toBuffer())
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
        const s = pt.Allocate;
        t = st(s, {
          space: e.space
        }), r = [
          {
            pubkey: e.accountPubkey,
            isSigner: true,
            isWritable: true
          }
        ];
      }
      return new ht({
        keys: r,
        programId: this.programId,
        data: t
      });
    }
  };
  St.programId = new U("11111111111111111111111111111111");
  const _f = Ar - 300;
  let bi = class Oo {
    constructor() {
    }
    static getMinNumSignatures(e) {
      return 2 * (Math.ceil(e / Oo.chunkSize) + 1 + 1);
    }
    static async load(e, t, r, s, n) {
      {
        const A = await e.getMinimumBalanceForRentExemption(n.length), E = await e.getAccountInfo(r.publicKey, "confirmed");
        let S = null;
        if (E !== null) {
          if (E.executable) return console.error("Program load failed, account is already executable"), false;
          E.data.length !== n.length && (S = S || new ct(), S.add(St.allocate({
            accountPubkey: r.publicKey,
            space: n.length
          }))), E.owner.equals(s) || (S = S || new ct(), S.add(St.assign({
            accountPubkey: r.publicKey,
            programId: s
          }))), E.lamports < A && (S = S || new ct(), S.add(St.transfer({
            fromPubkey: t.publicKey,
            toPubkey: r.publicKey,
            lamports: A - E.lamports
          })));
        } else S = new ct().add(St.createAccount({
          fromPubkey: t.publicKey,
          newAccountPubkey: r.publicKey,
          lamports: A > 0 ? A : 1,
          space: n.length,
          programId: s
        }));
        S !== null && await Lo(e, S, [
          t,
          r
        ], {
          commitment: "confirmed"
        });
      }
      const a = m.struct([
        m.u32("instruction"),
        m.u32("offset"),
        m.u32("bytesLength"),
        m.u32("bytesLengthPadding"),
        m.seq(m.u8("byte"), m.offset(m.u32(), -8), "bytes")
      ]), l = Oo.chunkSize;
      let d = 0, p = n, k = [];
      for (; p.length > 0; ) {
        const A = p.slice(0, l), E = B.alloc(l + 16);
        a.encode({
          instruction: 0,
          offset: d,
          bytes: A,
          bytesLength: 0,
          bytesLengthPadding: 0
        }, E);
        const S = new ct().add({
          keys: [
            {
              pubkey: r.publicKey,
              isSigner: true,
              isWritable: true
            }
          ],
          programId: s,
          data: E
        });
        k.push(Lo(e, S, [
          t,
          r
        ], {
          commitment: "confirmed"
        })), e._rpcEndpoint.includes("solana.com") && await Jr(1e3 / 4), d += l, p = p.slice(l);
      }
      await Promise.all(k);
      {
        const A = m.struct([
          m.u32("instruction")
        ]), E = B.alloc(A.span);
        A.encode({
          instruction: 1
        }, E);
        const S = new ct().add({
          keys: [
            {
              pubkey: r.publicKey,
              isSigner: true,
              isWritable: true
            },
            {
              pubkey: Yt,
              isSigner: false,
              isWritable: false
            }
          ],
          programId: s,
          data: E
        }), I = "processed", R = await e.sendTransaction(S, [
          t,
          r
        ], {
          preflightCommitment: I
        }), { context: M, value: x } = await e.confirmTransaction({
          signature: R,
          lastValidBlockHeight: S.lastValidBlockHeight,
          blockhash: S.recentBlockhash
        }, I);
        if (x.err) throw new Error(`Transaction ${R} failed (${JSON.stringify(x)})`);
        for (; ; ) {
          try {
            if (await e.getSlot({
              commitment: I
            }) > M.slot) break;
          } catch {
          }
          await new Promise((C) => setTimeout(C, Math.round(Zu / 2)));
        }
      }
      return true;
    }
  };
  bi.chunkSize = _f;
  const Af = new U("BPFLoader2111111111111111111111111111111111");
  let If = class {
    static getMinNumSignatures(e) {
      return bi.getMinNumSignatures(e);
    }
    static load(e, t, r, s, n) {
      return bi.load(e, t, r, n, s);
    }
  };
  function Ef(o) {
    return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
  }
  var ro, Ya;
  function Rf() {
    if (Ya) return ro;
    Ya = 1;
    var o = Object.prototype.toString, e = Object.keys || function(r) {
      var s = [];
      for (var n in r) s.push(n);
      return s;
    };
    function t(r, s) {
      var n, a, l, d, p, k, A;
      if (r === true) return "true";
      if (r === false) return "false";
      switch (typeof r) {
        case "object":
          if (r === null) return null;
          if (r.toJSON && typeof r.toJSON == "function") return t(r.toJSON(), s);
          if (A = o.call(r), A === "[object Array]") {
            for (l = "[", a = r.length - 1, n = 0; n < a; n++) l += t(r[n], true) + ",";
            return a > -1 && (l += t(r[n], true)), l + "]";
          } else if (A === "[object Object]") {
            for (d = e(r).sort(), a = d.length, l = "", n = 0; n < a; ) p = d[n], k = t(r[p], false), k !== void 0 && (l && (l += ","), l += JSON.stringify(p) + ":" + k), n++;
            return "{" + l + "}";
          } else return JSON.stringify(r);
        case "function":
        case "undefined":
          return s ? null : void 0;
        case "string":
          return JSON.stringify(r);
        default:
          return isFinite(r) ? r : null;
      }
    }
    return ro = function(r) {
      var s = t(r, false);
      if (s !== void 0) return "" + s;
    }, ro;
  }
  var Mf = Rf(), Za = Ef(Mf);
  const fs = 32;
  function no(o) {
    let e = 0;
    for (; o > 1; ) o /= 2, e++;
    return e;
  }
  function xf(o) {
    return o === 0 ? 1 : (o--, o |= o >> 1, o |= o >> 2, o |= o >> 4, o |= o >> 8, o |= o >> 16, o |= o >> 32, o + 1);
  }
  let rl = class {
    constructor(e, t, r, s, n) {
      this.slotsPerEpoch = void 0, this.leaderScheduleSlotOffset = void 0, this.warmup = void 0, this.firstNormalEpoch = void 0, this.firstNormalSlot = void 0, this.slotsPerEpoch = e, this.leaderScheduleSlotOffset = t, this.warmup = r, this.firstNormalEpoch = s, this.firstNormalSlot = n;
    }
    getEpoch(e) {
      return this.getEpochAndSlotIndex(e)[0];
    }
    getEpochAndSlotIndex(e) {
      if (e < this.firstNormalSlot) {
        const t = no(xf(e + fs + 1)) - no(fs) - 1, r = this.getSlotsInEpoch(t), s = e - (r - fs);
        return [
          t,
          s
        ];
      } else {
        const t = e - this.firstNormalSlot, r = Math.floor(t / this.slotsPerEpoch), s = this.firstNormalEpoch + r, n = t % this.slotsPerEpoch;
        return [
          s,
          n
        ];
      }
    }
    getFirstSlotInEpoch(e) {
      return e <= this.firstNormalEpoch ? (Math.pow(2, e) - 1) * fs : (e - this.firstNormalEpoch) * this.slotsPerEpoch + this.firstNormalSlot;
    }
    getLastSlotInEpoch(e) {
      return this.getFirstSlotInEpoch(e) + this.getSlotsInEpoch(e) - 1;
    }
    getSlotsInEpoch(e) {
      return e < this.firstNormalEpoch ? Math.pow(2, e + no(fs)) : this.slotsPerEpoch;
    }
  };
  var Pf = globalThis.fetch;
  let Tf = class extends Ou {
    constructor(e, t, r) {
      const s = (n) => {
        const a = zu(n, {
          autoconnect: true,
          max_reconnects: 5,
          reconnect: true,
          reconnect_interval: 1e3,
          ...t
        });
        return "socket" in a ? this.underlyingSocket = a.socket : this.underlyingSocket = a, a;
      };
      super(s, e, t, r), this.underlyingSocket = void 0;
    }
    call(...e) {
      var _a2;
      const t = (_a2 = this.underlyingSocket) == null ? void 0 : _a2.readyState;
      return t === 1 ? super.call(...e) : Promise.reject(new Error("Tried to call a JSON-RPC method `" + e[0] + "` but the socket was not `CONNECTING` or `OPEN` (`readyState` was " + t + ")"));
    }
    notify(...e) {
      var _a2;
      const t = (_a2 = this.underlyingSocket) == null ? void 0 : _a2.readyState;
      return t === 1 ? super.notify(...e) : Promise.reject(new Error("Tried to send a JSON-RPC notification `" + e[0] + "` but the socket was not `CONNECTING` or `OPEN` (`readyState` was " + t + ")"));
    }
  };
  function Lf(o, e) {
    let t;
    try {
      t = o.layout.decode(e);
    } catch (r) {
      throw new Error("invalid instruction; " + r);
    }
    if (t.typeIndex !== o.index) throw new Error(`invalid account data; account type mismatch ${t.typeIndex} != ${o.index}`);
    return t;
  }
  const Ja = 56;
  let No = class {
    constructor(e) {
      this.key = void 0, this.state = void 0, this.key = e.key, this.state = e.state;
    }
    isActive() {
      const e = BigInt("0xffffffffffffffff");
      return this.state.deactivationSlot === e;
    }
    static deserialize(e) {
      const t = Lf(Cf, e), r = e.length - Ja;
      et(r >= 0, "lookup table is invalid"), et(r % 32 === 0, "lookup table is invalid");
      const s = r / 32, { addresses: n } = m.struct([
        m.seq(rt(), s, "addresses")
      ]).decode(e.slice(Ja));
      return {
        deactivationSlot: t.deactivationSlot,
        lastExtendedSlot: t.lastExtendedSlot,
        lastExtendedSlotStartIndex: t.lastExtendedStartIndex,
        authority: t.authority.length !== 0 ? new U(t.authority[0]) : void 0,
        addresses: n.map((a) => new U(a))
      };
    }
  };
  const Cf = {
    index: 1,
    layout: m.struct([
      m.u32("typeIndex"),
      Bn("deactivationSlot"),
      m.nu64("lastExtendedSlot"),
      m.u8("lastExtendedStartIndex"),
      m.u8(),
      m.seq(rt(), m.offset(m.u8(), -1), "authority")
    ])
  }, Bf = /^[^:]+:\/\/([^:[]+|\[[^\]]+\])(:\d+)?(.*)/i;
  function Of(o) {
    const e = o.match(Bf);
    if (e == null) throw TypeError(`Failed to validate endpoint URL \`${o}\``);
    const [t, r, s, n] = e, a = o.startsWith("https:") ? "wss:" : "ws:", l = s == null ? null : parseInt(s.slice(1), 10), d = l == null ? "" : `:${l + 1}`;
    return `${a}//${r}${d}${n}`;
  }
  const At = Ts(ra(U), F(), (o) => new U(o)), nl = na([
    F(),
    wt("base64")
  ]), ua = Ts(ra(B), nl, (o) => B.from(o[0], "base64")), sl = 30 * 1e3;
  function Nf(o) {
    if (/^https?:/.test(o) === false) throw new TypeError("Endpoint URL must start with `http:` or `https:`.");
    return o;
  }
  function ft(o) {
    let e, t;
    if (typeof o == "string") e = o;
    else if (o) {
      const { commitment: r, ...s } = o;
      e = r, t = s;
    }
    return {
      commitment: e,
      config: t
    };
  }
  function Xa(o) {
    return o.map((e) => "memcmp" in e ? {
      ...e,
      memcmp: {
        ...e.memcmp,
        encoding: e.memcmp.encoding ?? "base58"
      }
    } : e);
  }
  function il(o) {
    return zt([
      z({
        jsonrpc: wt("2.0"),
        id: F(),
        result: o
      }),
      z({
        jsonrpc: wt("2.0"),
        id: F(),
        error: z({
          code: Un(),
          message: F(),
          data: se(ad())
        })
      })
    ]);
  }
  const zf = il(Un());
  function Ze(o) {
    return Ts(il(o), zf, (e) => "error" in e ? e : {
      ...e,
      result: Z(e.result, o)
    });
  }
  function Et(o) {
    return Ze(z({
      context: z({
        slot: P()
      }),
      value: o
    }));
  }
  function Ci(o) {
    return z({
      context: z({
        slot: P()
      }),
      value: o
    });
  }
  function so(o, e) {
    if (o === 0) return new Li({
      header: e.header,
      staticAccountKeys: e.accountKeys.map((t) => new U(t)),
      recentBlockhash: e.recentBlockhash,
      compiledInstructions: e.instructions.map((t) => ({
        programIdIndex: t.programIdIndex,
        accountKeyIndexes: t.accounts,
        data: Ct.decode(t.data)
      })),
      addressTableLookups: e.addressTableLookups
    });
    if (o === 1) {
      const t = e.transactionConfig;
      if (t == null) throw new Error("Expected a version 1 transaction message response to have a `transactionConfig`");
      return new ca({
        header: e.header,
        staticAccountKeys: e.accountKeys.map((r) => new U(r)),
        recentBlockhash: e.recentBlockhash,
        compiledInstructions: e.instructions.map((r) => ({
          programIdIndex: r.programIdIndex,
          accountKeyIndexes: r.accounts,
          data: Ct.decode(r.data)
        })),
        transactionConfig: t
      });
    } else return new Rr(e);
  }
  const Kf = z({
    foundation: P(),
    foundationTerm: P(),
    initial: P(),
    taper: P(),
    terminal: P()
  }), $f = Ze(J(G(z({
    epoch: P(),
    effectiveSlot: P(),
    amount: P(),
    postBalance: P(),
    commission: se(G(P()))
  })))), Uf = J(z({
    slot: P(),
    prioritizationFee: P()
  })), Wf = z({
    total: P(),
    validator: P(),
    foundation: P(),
    epoch: P()
  }), Df = z({
    epoch: P(),
    slotIndex: P(),
    slotsInEpoch: P(),
    absoluteSlot: P(),
    blockHeight: se(P()),
    transactionCount: se(P())
  }), qf = z({
    slotsPerEpoch: P(),
    leaderScheduleSlotOffset: P(),
    warmup: ur(),
    firstNormalEpoch: P(),
    firstNormalSlot: P()
  }), Vf = Nu(F(), J(P())), ln = G(zt([
    z({}),
    F()
  ])), Ff = z({
    err: ln
  }), Hf = wt("receivedSignature"), Gf = z({
    "solana-core": F(),
    "feature-set": se(P())
  }), jf = z({
    program: F(),
    programId: At,
    parsed: Un()
  }), Yf = z({
    programId: At,
    accounts: J(At),
    data: F()
  }), Qa = Et(z({
    err: G(zt([
      z({}),
      F()
    ])),
    logs: G(J(F())),
    accounts: se(G(J(G(z({
      executable: ur(),
      owner: F(),
      lamports: P(),
      data: J(F()),
      rentEpoch: se(P())
    }))))),
    unitsConsumed: se(P()),
    returnData: se(G(z({
      programId: F(),
      data: na([
        F(),
        wt("base64")
      ])
    }))),
    innerInstructions: se(G(J(z({
      index: P(),
      instructions: J(zt([
        jf,
        Yf
      ]))
    }))))
  })), Zf = Et(z({
    byIdentity: Nu(F(), J(P())),
    range: z({
      firstSlot: P(),
      lastSlot: P()
    })
  }));
  function Jf(o, e, t, r, s, n) {
    const a = t || Pf;
    let l;
    n != null && console.warn("You have supplied an `httpAgent` when creating a `Connection` in a browser environment.It has been ignored; `httpAgent` is only used in Node environments.");
    let d;
    return r && (d = async (k, A) => {
      const E = await new Promise((S, I) => {
        try {
          r(k, A, (R, M) => S([
            R,
            M
          ]));
        } catch (R) {
          I(R);
        }
      });
      return await a(...E);
    }), new Bu(async (k, A) => {
      const E = {
        method: "POST",
        body: k,
        agent: l,
        headers: Object.assign({
          "Content-Type": "application/json"
        }, e || {}, Jg)
      };
      try {
        let S = 5, I, R = 500;
        for (; d ? I = await d(o, E) : I = await a(o, E), !(I.status !== 429 || s === true || (S -= 1, S === 0)); ) console.error(`Server responded with ${I.status} ${I.statusText}.  Retrying after ${R}ms delay...`), await Jr(R), R *= 2;
        const M = await I.text();
        I.ok ? A(null, M) : A(new Error(`${I.status} ${I.statusText}: ${M}`));
      } catch (S) {
        S instanceof Error && A(S);
      }
    }, {});
  }
  function Xf(o) {
    return (e, t) => new Promise((r, s) => {
      o.request(e, t, (n, a) => {
        if (n) {
          s(n);
          return;
        }
        r(a);
      });
    });
  }
  function Qf(o) {
    return (e) => new Promise((t, r) => {
      e.length === 0 && t([]);
      const s = e.map((n) => o.request(n.methodName, n.args));
      o.request(s, (n, a) => {
        if (n) {
          r(n);
          return;
        }
        t(a);
      });
    });
  }
  const eg = Ze(Kf), tg = Ze(Wf), rg = Ze(Uf), ng = Ze(Df), sg = Ze(qf), ig = Ze(Vf), og = Ze(P()), ag = Et(z({
    total: P(),
    circulating: P(),
    nonCirculating: P(),
    nonCirculatingAccounts: J(At)
  })), zo = z({
    amount: F(),
    uiAmount: G(P()),
    decimals: P(),
    uiAmountString: se(F())
  }), cg = Et(J(z({
    address: At,
    amount: F(),
    uiAmount: G(P()),
    decimals: P(),
    uiAmountString: se(F())
  }))), ug = Et(J(z({
    pubkey: At,
    account: z({
      executable: ur(),
      owner: At,
      lamports: P(),
      data: ua,
      rentEpoch: P()
    })
  }))), Ko = z({
    program: F(),
    parsed: Un(),
    space: P()
  }), lg = Et(J(z({
    pubkey: At,
    account: z({
      executable: ur(),
      owner: At,
      lamports: P(),
      data: Ko,
      rentEpoch: P()
    })
  }))), hg = Et(J(z({
    lamports: P(),
    address: At
  }))), Es = z({
    executable: ur(),
    owner: At,
    lamports: P(),
    data: ua,
    rentEpoch: P()
  }), dg = z({
    pubkey: At,
    account: Es
  }), fg = Ts(zt([
    ra(B),
    Ko
  ]), zt([
    nl,
    Ko
  ]), (o) => Array.isArray(o) ? Z(o, ua) : o), $o = z({
    executable: ur(),
    owner: At,
    lamports: P(),
    data: fg,
    rentEpoch: P()
  }), gg = z({
    pubkey: At,
    account: $o
  }), pg = z({
    state: zt([
      wt("active"),
      wt("inactive"),
      wt("activating"),
      wt("deactivating")
    ]),
    active: P(),
    inactive: P()
  }), yg = Ze(J(z({
    signature: F(),
    slot: P(),
    err: ln,
    memo: G(F()),
    blockTime: se(G(P()))
  }))), mg = Ze(J(z({
    signature: F(),
    slot: P(),
    err: ln,
    memo: G(F()),
    blockTime: se(G(P()))
  }))), bg = z({
    subscription: P(),
    result: Ci(Es)
  }), wg = z({
    pubkey: At,
    account: Es
  }), kg = z({
    subscription: P(),
    result: Ci(wg)
  }), vg = z({
    parent: P(),
    slot: P(),
    root: P()
  }), Sg = z({
    subscription: P(),
    result: vg
  }), _g = zt([
    z({
      type: zt([
        wt("firstShredReceived"),
        wt("completed"),
        wt("optimisticConfirmation"),
        wt("root")
      ]),
      slot: P(),
      timestamp: P()
    }),
    z({
      type: wt("createdBank"),
      parent: P(),
      slot: P(),
      timestamp: P()
    }),
    z({
      type: wt("frozen"),
      slot: P(),
      timestamp: P(),
      stats: z({
        numTransactionEntries: P(),
        numSuccessfulTransactions: P(),
        numFailedTransactions: P(),
        maxTransactionsPerEntry: P()
      })
    }),
    z({
      type: wt("dead"),
      slot: P(),
      timestamp: P(),
      err: F()
    })
  ]), Ag = z({
    subscription: P(),
    result: _g
  }), Ig = z({
    subscription: P(),
    result: Ci(zt([
      Ff,
      Hf
    ]))
  }), Eg = z({
    subscription: P(),
    result: P()
  }), Rg = z({
    pubkey: F(),
    gossip: G(F()),
    tpu: G(F()),
    rpc: G(F()),
    version: G(F())
  }), ec = z({
    votePubkey: F(),
    nodePubkey: F(),
    activatedStake: P(),
    epochVoteAccount: ur(),
    epochCredits: J(na([
      P(),
      P(),
      P()
    ])),
    commission: P(),
    lastVote: P(),
    rootSlot: G(P())
  }), Mg = Ze(z({
    current: J(ec),
    delinquent: J(ec)
  })), xg = zt([
    wt("processed"),
    wt("confirmed"),
    wt("finalized")
  ]), Pg = z({
    slot: P(),
    confirmations: G(P()),
    err: ln,
    confirmationStatus: se(xg)
  }), Tg = Et(J(G(Pg))), Lg = Ze(P()), ol = z({
    accountKey: At,
    writableIndexes: J(P()),
    readonlyIndexes: J(P())
  }), al = z({
    computeUnitLimit: G(P()),
    heapSize: G(P()),
    loadedAccountsDataSizeLimit: G(P()),
    priorityFee: G(P())
  }), la = z({
    signatures: J(F()),
    message: z({
      accountKeys: J(F()),
      header: z({
        numRequiredSignatures: P(),
        numReadonlySignedAccounts: P(),
        numReadonlyUnsignedAccounts: P()
      }),
      instructions: J(z({
        accounts: J(P()),
        data: F(),
        programIdIndex: P()
      })),
      recentBlockhash: F(),
      addressTableLookups: se(J(ol)),
      transactionConfig: se(G(al))
    })
  }), cl = z({
    pubkey: At,
    signer: ur(),
    writable: ur(),
    source: se(zt([
      wt("transaction"),
      wt("lookupTable")
    ]))
  }), ul = z({
    accountKeys: J(cl),
    signatures: J(F())
  }), ll = z({
    parsed: Un(),
    program: F(),
    programId: At
  }), hl = z({
    accounts: J(At),
    data: F(),
    programId: At
  }), Cg = zt([
    hl,
    ll
  ]), Bg = zt([
    z({
      parsed: Un(),
      program: F(),
      programId: F()
    }),
    z({
      accounts: J(F()),
      data: F(),
      programId: F()
    })
  ]), dl = Ts(Cg, Bg, (o) => "accounts" in o ? Z(o, hl) : Z(o, ll)), fl = z({
    signatures: J(F()),
    message: z({
      accountKeys: J(cl),
      instructions: J(dl),
      recentBlockhash: F(),
      addressTableLookups: se(G(J(ol))),
      transactionConfig: se(G(al))
    })
  }), wi = z({
    accountIndex: P(),
    mint: F(),
    owner: se(F()),
    programId: se(F()),
    uiTokenAmount: zo
  }), gl = z({
    writable: J(At),
    readonly: J(At)
  }), Bi = z({
    err: ln,
    fee: P(),
    innerInstructions: se(G(J(z({
      index: P(),
      instructions: J(z({
        accounts: J(P()),
        data: F(),
        programIdIndex: P()
      }))
    })))),
    preBalances: J(P()),
    postBalances: J(P()),
    logMessages: se(G(J(F()))),
    preTokenBalances: se(G(J(wi))),
    postTokenBalances: se(G(J(wi))),
    loadedAddresses: se(gl),
    computeUnitsConsumed: se(P()),
    costUnits: se(P())
  }), ha = z({
    err: ln,
    fee: P(),
    innerInstructions: se(G(J(z({
      index: P(),
      instructions: J(dl)
    })))),
    preBalances: J(P()),
    postBalances: J(P()),
    logMessages: se(G(J(F()))),
    preTokenBalances: se(G(J(wi))),
    postTokenBalances: se(G(J(wi))),
    loadedAddresses: se(gl),
    computeUnitsConsumed: se(P()),
    costUnits: se(P())
  }), Dn = zt([
    wt(0),
    wt(1),
    wt("legacy")
  ]), hn = z({
    pubkey: F(),
    lamports: P(),
    postBalance: G(P()),
    rewardType: G(F()),
    commission: se(G(P()))
  }), Og = Ze(G(z({
    blockhash: F(),
    previousBlockhash: F(),
    parentSlot: P(),
    transactions: J(z({
      transaction: la,
      meta: G(Bi),
      version: se(Dn)
    })),
    rewards: se(J(hn)),
    blockTime: G(P()),
    blockHeight: G(P())
  }))), Ng = Ze(G(z({
    blockhash: F(),
    previousBlockhash: F(),
    parentSlot: P(),
    rewards: se(J(hn)),
    blockTime: G(P()),
    blockHeight: G(P())
  }))), zg = Ze(G(z({
    blockhash: F(),
    previousBlockhash: F(),
    parentSlot: P(),
    transactions: J(z({
      transaction: ul,
      meta: G(Bi),
      version: se(Dn)
    })),
    rewards: se(J(hn)),
    blockTime: G(P()),
    blockHeight: G(P())
  }))), Kg = Ze(G(z({
    blockhash: F(),
    previousBlockhash: F(),
    parentSlot: P(),
    transactions: J(z({
      transaction: fl,
      meta: G(ha),
      version: se(Dn)
    })),
    rewards: se(J(hn)),
    blockTime: G(P()),
    blockHeight: G(P())
  }))), $g = Ze(G(z({
    blockhash: F(),
    previousBlockhash: F(),
    parentSlot: P(),
    transactions: J(z({
      transaction: ul,
      meta: G(ha),
      version: se(Dn)
    })),
    rewards: se(J(hn)),
    blockTime: G(P()),
    blockHeight: G(P())
  }))), Ug = Ze(G(z({
    blockhash: F(),
    previousBlockhash: F(),
    parentSlot: P(),
    rewards: se(J(hn)),
    blockTime: G(P()),
    blockHeight: G(P())
  }))), Wg = Ze(G(z({
    blockhash: F(),
    previousBlockhash: F(),
    parentSlot: P(),
    transactions: J(z({
      transaction: la,
      meta: G(Bi)
    })),
    rewards: se(J(hn)),
    blockTime: G(P())
  }))), tc = Ze(G(z({
    blockhash: F(),
    previousBlockhash: F(),
    parentSlot: P(),
    signatures: J(F()),
    blockTime: G(P())
  }))), io = Ze(G(z({
    slot: P(),
    meta: G(Bi),
    blockTime: se(G(P())),
    transaction: la,
    version: se(Dn)
  }))), Gs = Ze(G(z({
    slot: P(),
    transaction: fl,
    meta: G(ha),
    blockTime: se(G(P())),
    version: se(Dn)
  }))), Dg = Et(z({
    blockhash: F(),
    lastValidBlockHeight: P()
  })), qg = Et(ur()), Vg = z({
    slot: P(),
    numTransactions: P(),
    numSlots: P(),
    samplePeriodSecs: P()
  }), Fg = Ze(J(Vg)), Hg = Et(G(z({
    feeCalculator: z({
      lamportsPerSignature: P()
    })
  }))), Gg = Ze(F()), jg = Ze(F()), Yg = z({
    err: ln,
    logs: J(F()),
    signature: F()
  }), Zg = z({
    result: Ci(Yg),
    subscription: P()
  }), Jg = {
    "solana-client": "js/1.99.0"
  };
  let Xg = class {
    constructor(e, t) {
      this._commitment = void 0, this._confirmTransactionInitialTimeout = void 0, this._rpcEndpoint = void 0, this._rpcWsEndpoint = void 0, this._rpcClient = void 0, this._rpcRequest = void 0, this._rpcBatchRequest = void 0, this._rpcWebSocket = void 0, this._rpcWebSocketConnected = false, this._rpcWebSocketHeartbeat = null, this._rpcWebSocketIdleTimeout = null, this._rpcWebSocketGeneration = 0, this._disableBlockhashCaching = false, this._pollingBlockhash = false, this._blockhashInfo = {
        latestBlockhash: null,
        lastFetch: 0,
        transactionSignatures: [],
        simulatedSignatures: []
      }, this._nextClientSubscriptionId = 0, this._subscriptionDisposeFunctionsByClientSubscriptionId = {}, this._subscriptionHashByClientSubscriptionId = {}, this._subscriptionStateChangeCallbacksByHash = {}, this._subscriptionCallbacksByServerSubscriptionId = {}, this._subscriptionsByHash = {}, this._subscriptionsAutoDisposedByRpc = /* @__PURE__ */ new Set(), this.getBlockHeight = /* @__PURE__ */ (() => {
        const p = {};
        return async (k) => {
          const { commitment: A, config: E } = ft(k), S = this._buildArgs([], A, void 0, E), I = Za(S);
          return p[I] = p[I] ?? (async () => {
            try {
              const R = await this._rpcRequest("getBlockHeight", S), M = Z(R, Ze(P()));
              if ("error" in M) throw new te(M.error, "failed to get block height information");
              return M.result;
            } finally {
              delete p[I];
            }
          })(), await p[I];
        };
      })();
      let r, s, n, a, l, d;
      t && typeof t == "string" ? this._commitment = t : t && (this._commitment = t.commitment, this._confirmTransactionInitialTimeout = t.confirmTransactionInitialTimeout, r = t.wsEndpoint, s = t.httpHeaders, n = t.fetch, a = t.fetchMiddleware, l = t.disableRetryOnRateLimit, d = t.httpAgent), this._rpcEndpoint = Nf(e), this._rpcWsEndpoint = r || Of(e), this._rpcClient = Jf(e, s, n, a, l, d), this._rpcRequest = Xf(this._rpcClient), this._rpcBatchRequest = Qf(this._rpcClient), this._rpcWebSocket = new Tf(this._rpcWsEndpoint, {
        autoconnect: false,
        max_reconnects: 1 / 0
      }), this._rpcWebSocket.on("open", this._wsOnOpen.bind(this)), this._rpcWebSocket.on("error", this._wsOnError.bind(this)), this._rpcWebSocket.on("close", this._wsOnClose.bind(this)), this._rpcWebSocket.on("accountNotification", this._wsOnAccountNotification.bind(this)), this._rpcWebSocket.on("programNotification", this._wsOnProgramAccountNotification.bind(this)), this._rpcWebSocket.on("slotNotification", this._wsOnSlotNotification.bind(this)), this._rpcWebSocket.on("slotsUpdatesNotification", this._wsOnSlotUpdatesNotification.bind(this)), this._rpcWebSocket.on("signatureNotification", this._wsOnSignatureNotification.bind(this)), this._rpcWebSocket.on("rootNotification", this._wsOnRootNotification.bind(this)), this._rpcWebSocket.on("logsNotification", this._wsOnLogsNotification.bind(this));
    }
    get commitment() {
      return this._commitment;
    }
    get rpcEndpoint() {
      return this._rpcEndpoint;
    }
    async getBalanceAndContext(e, t) {
      const { commitment: r, config: s } = ft(t), n = this._buildArgs([
        e.toBase58()
      ], r, void 0, s), a = await this._rpcRequest("getBalance", n), l = Z(a, Et(P()));
      if ("error" in l) throw new te(l.error, `failed to get balance for ${e.toBase58()}`);
      return l.result;
    }
    async getBalance(e, t) {
      return await this.getBalanceAndContext(e, t).then((r) => r.value).catch((r) => {
        throw new Error("failed to get balance of account " + e.toBase58() + ": " + r);
      });
    }
    async getBlockTime(e) {
      const t = await this._rpcRequest("getBlockTime", [
        e
      ]), r = Z(t, Ze(G(P())));
      if ("error" in r) throw new te(r.error, `failed to get block time for slot ${e}`);
      return r.result;
    }
    async getMinimumLedgerSlot() {
      const e = await this._rpcRequest("minimumLedgerSlot", []), t = Z(e, Ze(P()));
      if ("error" in t) throw new te(t.error, "failed to get minimum ledger slot");
      return t.result;
    }
    async getFirstAvailableBlock() {
      const e = await this._rpcRequest("getFirstAvailableBlock", []), t = Z(e, og);
      if ("error" in t) throw new te(t.error, "failed to get first available block");
      return t.result;
    }
    async getSupply(e) {
      let t = {};
      typeof e == "string" ? t = {
        commitment: e
      } : e ? t = {
        ...e,
        commitment: e && e.commitment || this.commitment
      } : t = {
        commitment: this.commitment
      };
      const r = await this._rpcRequest("getSupply", [
        t
      ]), s = Z(r, ag);
      if ("error" in s) throw new te(s.error, "failed to get supply");
      return s.result;
    }
    async getTokenSupply(e, t) {
      const r = this._buildArgs([
        e.toBase58()
      ], t), s = await this._rpcRequest("getTokenSupply", r), n = Z(s, Et(zo));
      if ("error" in n) throw new te(n.error, "failed to get token supply");
      return n.result;
    }
    async getTokenAccountBalance(e, t) {
      const r = this._buildArgs([
        e.toBase58()
      ], t), s = await this._rpcRequest("getTokenAccountBalance", r), n = Z(s, Et(zo));
      if ("error" in n) throw new te(n.error, "failed to get token account balance");
      return n.result;
    }
    async getTokenAccountsByOwner(e, t, r) {
      const { commitment: s, config: n } = ft(r);
      let a = [
        e.toBase58()
      ];
      "mint" in t ? a.push({
        mint: t.mint.toBase58()
      }) : a.push({
        programId: t.programId.toBase58()
      });
      const l = this._buildArgs(a, s, "base64", n), d = await this._rpcRequest("getTokenAccountsByOwner", l), p = Z(d, ug);
      if ("error" in p) throw new te(p.error, `failed to get token accounts owned by account ${e.toBase58()}`);
      return p.result;
    }
    async getParsedTokenAccountsByOwner(e, t, r) {
      let s = [
        e.toBase58()
      ];
      "mint" in t ? s.push({
        mint: t.mint.toBase58()
      }) : s.push({
        programId: t.programId.toBase58()
      });
      const n = this._buildArgs(s, r, "jsonParsed"), a = await this._rpcRequest("getTokenAccountsByOwner", n), l = Z(a, lg);
      if ("error" in l) throw new te(l.error, `failed to get token accounts owned by account ${e.toBase58()}`);
      return l.result;
    }
    async getLargestAccounts(e) {
      const t = {
        ...e,
        commitment: e && e.commitment || this.commitment
      }, r = t.filter || t.commitment ? [
        t
      ] : [], s = await this._rpcRequest("getLargestAccounts", r), n = Z(s, hg);
      if ("error" in n) throw new te(n.error, "failed to get largest accounts");
      return n.result;
    }
    async getTokenLargestAccounts(e, t) {
      const r = this._buildArgs([
        e.toBase58()
      ], t), s = await this._rpcRequest("getTokenLargestAccounts", r), n = Z(s, cg);
      if ("error" in n) throw new te(n.error, "failed to get token largest accounts");
      return n.result;
    }
    async getAccountInfoAndContext(e, t) {
      const { commitment: r, config: s } = ft(t), n = this._buildArgs([
        e.toBase58()
      ], r, "base64", s), a = await this._rpcRequest("getAccountInfo", n), l = Z(a, Et(G(Es)));
      if ("error" in l) throw new te(l.error, `failed to get info about account ${e.toBase58()}`);
      return l.result;
    }
    async getParsedAccountInfo(e, t) {
      const { commitment: r, config: s } = ft(t), n = this._buildArgs([
        e.toBase58()
      ], r, "jsonParsed", s), a = await this._rpcRequest("getAccountInfo", n), l = Z(a, Et(G($o)));
      if ("error" in l) throw new te(l.error, `failed to get info about account ${e.toBase58()}`);
      return l.result;
    }
    async getAccountInfo(e, t) {
      try {
        return (await this.getAccountInfoAndContext(e, t)).value;
      } catch (r) {
        throw new Error("failed to get info about account " + e.toBase58() + ": " + r);
      }
    }
    async getMultipleParsedAccounts(e, t) {
      const { commitment: r, config: s } = ft(t), n = e.map((p) => p.toBase58()), a = this._buildArgs([
        n
      ], r, "jsonParsed", s), l = await this._rpcRequest("getMultipleAccounts", a), d = Z(l, Et(J(G($o))));
      if ("error" in d) throw new te(d.error, `failed to get info for accounts ${n}`);
      return d.result;
    }
    async getMultipleAccountsInfoAndContext(e, t) {
      const { commitment: r, config: s } = ft(t), n = e.map((p) => p.toBase58()), a = this._buildArgs([
        n
      ], r, "base64", s), l = await this._rpcRequest("getMultipleAccounts", a), d = Z(l, Et(J(G(Es))));
      if ("error" in d) throw new te(d.error, `failed to get info for accounts ${n}`);
      return d.result;
    }
    async getMultipleAccountsInfo(e, t) {
      return (await this.getMultipleAccountsInfoAndContext(e, t)).value;
    }
    async getStakeActivation(e, t, r) {
      const { commitment: s, config: n } = ft(t), a = this._buildArgs([
        e.toBase58()
      ], s, void 0, {
        ...n,
        epoch: r ?? (n == null ? void 0 : n.epoch)
      }), l = await this._rpcRequest("getStakeActivation", a), d = Z(l, Ze(pg));
      if ("error" in d) throw new te(d.error, `failed to get Stake Activation ${e.toBase58()}`);
      return d.result;
    }
    async getProgramAccounts(e, t) {
      const { commitment: r, config: s } = ft(t), { encoding: n, ...a } = s || {}, l = this._buildArgs([
        e.toBase58()
      ], r, n || "base64", {
        ...a,
        ...a.filters ? {
          filters: Xa(a.filters)
        } : null
      }), d = await this._rpcRequest("getProgramAccounts", l), p = J(dg), k = a.withContext === true ? Z(d, Et(p)) : Z(d, Ze(p));
      if ("error" in k) throw new te(k.error, `failed to get accounts owned by program ${e.toBase58()}`);
      return k.result;
    }
    async getParsedProgramAccounts(e, t) {
      const { commitment: r, config: s } = ft(t), n = this._buildArgs([
        e.toBase58()
      ], r, "jsonParsed", s), a = await this._rpcRequest("getProgramAccounts", n), l = Z(a, Ze(J(gg)));
      if ("error" in l) throw new te(l.error, `failed to get accounts owned by program ${e.toBase58()}`);
      return l.result;
    }
    async confirmTransaction(e, t) {
      var _a2;
      let r;
      if (typeof e == "string") r = e;
      else {
        const n = e;
        if ((_a2 = n.abortSignal) == null ? void 0 : _a2.aborted) return Promise.reject(n.abortSignal.reason);
        r = n.signature;
      }
      let s;
      try {
        s = Ct.decode(r);
      } catch {
        throw new Error("signature must be base58 encoded: " + r);
      }
      return et(s.length === 64, "signature has invalid length"), typeof e == "string" ? await this.confirmTransactionUsingLegacyTimeoutStrategy({
        commitment: t || this.commitment,
        signature: r
      }) : "lastValidBlockHeight" in e ? await this.confirmTransactionUsingBlockHeightExceedanceStrategy({
        commitment: t || this.commitment,
        strategy: e
      }) : await this.confirmTransactionUsingDurableNonceStrategy({
        commitment: t || this.commitment,
        strategy: e
      });
    }
    getCancellationPromise(e) {
      return new Promise((t, r) => {
        e != null && (e.aborted ? r(e.reason) : e.addEventListener("abort", () => {
          r(e.reason);
        }));
      });
    }
    getTransactionConfirmationPromise({ commitment: e, signature: t }) {
      let r, s, n = false;
      const a = new Promise((d, p) => {
        try {
          r = this.onSignature(t, (A, E) => {
            r = void 0;
            const S = {
              context: E,
              value: A
            };
            d({
              __type: pr.PROCESSED,
              response: S
            });
          }, e);
          const k = new Promise((A) => {
            r == null ? A() : s = this._onSubscriptionStateChange(r, (E) => {
              E === "subscribed" && A();
            });
          });
          (async () => {
            if (await k, n) return;
            const A = await this.getSignatureStatus(t);
            if (n || A == null) return;
            const { context: E, value: S } = A;
            if (S != null) if (S == null ? void 0 : S.err) p(S.err);
            else {
              switch (e) {
                case "confirmed":
                case "single":
                case "singleGossip": {
                  if (S.confirmationStatus === "processed") return;
                  break;
                }
                case "finalized":
                case "max":
                case "root": {
                  if (S.confirmationStatus === "processed" || S.confirmationStatus === "confirmed") return;
                  break;
                }
                case "processed":
                case "recent":
              }
              n = true, d({
                __type: pr.PROCESSED,
                response: {
                  context: E,
                  value: S
                }
              });
            }
          })();
        } catch (k) {
          p(k);
        }
      });
      return {
        abortConfirmation: () => {
          s && (s(), s = void 0), r != null && (this.removeSignatureListener(r), r = void 0);
        },
        confirmationPromise: a
      };
    }
    async confirmTransactionUsingBlockHeightExceedanceStrategy({ commitment: e, strategy: { abortSignal: t, lastValidBlockHeight: r, signature: s } }) {
      let n = false;
      const a = new Promise((A) => {
        const E = async () => {
          try {
            return await this.getBlockHeight(e);
          } catch {
            return -1;
          }
        };
        (async () => {
          let S = await E();
          if (!n) {
            for (; S <= r; ) if (await Jr(1e3), n || (S = await E(), n)) return;
            A({
              __type: pr.BLOCKHEIGHT_EXCEEDED
            });
          }
        })();
      }), { abortConfirmation: l, confirmationPromise: d } = this.getTransactionConfirmationPromise({
        commitment: e,
        signature: s
      }), p = this.getCancellationPromise(t);
      let k;
      try {
        const A = await Promise.race([
          p,
          d,
          a
        ]);
        if (A.__type === pr.PROCESSED) k = A.response;
        else throw new oa(s);
      } finally {
        n = true, l();
      }
      return k;
    }
    async confirmTransactionUsingDurableNonceStrategy({ commitment: e, strategy: { abortSignal: t, minContextSlot: r, nonceAccountPubkey: s, nonceValue: n, signature: a } }) {
      let l = false;
      const d = new Promise((S) => {
        let I = n, R = null;
        const M = async () => {
          try {
            const { context: x, value: C } = await this.getNonceAndContext(s, {
              commitment: e,
              minContextSlot: r
            });
            return R = x.slot, C == null ? void 0 : C.nonce;
          } catch {
            return I;
          }
        };
        (async () => {
          if (I = await M(), !l) for (; ; ) {
            if (n !== I) {
              S({
                __type: pr.NONCE_INVALID,
                slotInWhichNonceDidAdvance: R
              });
              return;
            }
            if (await Jr(2e3), l || (I = await M(), l)) return;
          }
        })();
      }), { abortConfirmation: p, confirmationPromise: k } = this.getTransactionConfirmationPromise({
        commitment: e,
        signature: a
      }), A = this.getCancellationPromise(t);
      let E;
      try {
        const S = await Promise.race([
          A,
          k,
          d
        ]);
        if (S.__type === pr.PROCESSED) E = S.response;
        else {
          let I;
          for (; ; ) {
            const R = await this.getSignatureStatus(a);
            if (R == null) break;
            if (R.context.slot < (S.slotInWhichNonceDidAdvance ?? r)) {
              await Jr(400);
              continue;
            }
            I = R;
            break;
          }
          if (I == null ? void 0 : I.value) {
            const R = e || "finalized", { confirmationStatus: M } = I.value;
            switch (R) {
              case "processed":
              case "recent":
                if (M !== "processed" && M !== "confirmed" && M !== "finalized") throw new vn(a);
                break;
              case "confirmed":
              case "single":
              case "singleGossip":
                if (M !== "confirmed" && M !== "finalized") throw new vn(a);
                break;
              case "finalized":
              case "max":
              case "root":
                if (M !== "finalized") throw new vn(a);
                break;
              default:
            }
            E = {
              context: I.context,
              value: {
                err: I.value.err
              }
            };
          } else throw new vn(a);
        }
      } finally {
        l = true, p();
      }
      return E;
    }
    async confirmTransactionUsingLegacyTimeoutStrategy({ commitment: e, signature: t }) {
      let r;
      const s = new Promise((d) => {
        let p = this._confirmTransactionInitialTimeout || 6e4;
        switch (e) {
          case "processed":
          case "recent":
          case "single":
          case "confirmed":
          case "singleGossip": {
            p = this._confirmTransactionInitialTimeout || 3e4;
            break;
          }
        }
        r = setTimeout(() => d({
          __type: pr.TIMED_OUT,
          timeoutMs: p
        }), p);
      }), { abortConfirmation: n, confirmationPromise: a } = this.getTransactionConfirmationPromise({
        commitment: e,
        signature: t
      });
      let l;
      try {
        const d = await Promise.race([
          a,
          s
        ]);
        if (d.__type === pr.PROCESSED) l = d.response;
        else throw new aa(t, d.timeoutMs / 1e3);
      } finally {
        clearTimeout(r), n();
      }
      return l;
    }
    async getClusterNodes() {
      const e = await this._rpcRequest("getClusterNodes", []), t = Z(e, Ze(J(Rg)));
      if ("error" in t) throw new te(t.error, "failed to get cluster nodes");
      return t.result;
    }
    async getVoteAccounts(e) {
      const t = this._buildArgs([], e), r = await this._rpcRequest("getVoteAccounts", t), s = Z(r, Mg);
      if ("error" in s) throw new te(s.error, "failed to get vote accounts");
      return s.result;
    }
    async getSlot(e) {
      const { commitment: t, config: r } = ft(e), s = this._buildArgs([], t, void 0, r), n = await this._rpcRequest("getSlot", s), a = Z(n, Ze(P()));
      if ("error" in a) throw new te(a.error, "failed to get slot");
      return a.result;
    }
    async getSlotLeader(e) {
      const { commitment: t, config: r } = ft(e), s = this._buildArgs([], t, void 0, r), n = await this._rpcRequest("getSlotLeader", s), a = Z(n, Ze(F()));
      if ("error" in a) throw new te(a.error, "failed to get slot leader");
      return a.result;
    }
    async getSlotLeaders(e, t) {
      const r = [
        e,
        t
      ], s = await this._rpcRequest("getSlotLeaders", r), n = Z(s, Ze(J(At)));
      if ("error" in n) throw new te(n.error, "failed to get slot leaders");
      return n.result;
    }
    async getSignatureStatus(e, t) {
      const { context: r, value: s } = await this.getSignatureStatuses([
        e
      ], t);
      et(s.length === 1);
      const n = s[0];
      return {
        context: r,
        value: n
      };
    }
    async getSignatureStatuses(e, t) {
      const r = [
        e
      ];
      t && r.push(t);
      const s = await this._rpcRequest("getSignatureStatuses", r), n = Z(s, Tg);
      if ("error" in n) throw new te(n.error, "failed to get signature status");
      return n.result;
    }
    async getTransactionCount(e) {
      const { commitment: t, config: r } = ft(e), s = this._buildArgs([], t, void 0, r), n = await this._rpcRequest("getTransactionCount", s), a = Z(n, Ze(P()));
      if ("error" in a) throw new te(a.error, "failed to get transaction count");
      return a.result;
    }
    async getTotalSupply(e) {
      return (await this.getSupply({
        commitment: e,
        excludeNonCirculatingAccountsList: true
      })).value.total;
    }
    async getInflationGovernor(e) {
      const t = this._buildArgs([], e), r = await this._rpcRequest("getInflationGovernor", t), s = Z(r, eg);
      if ("error" in s) throw new te(s.error, "failed to get inflation");
      return s.result;
    }
    async getInflationReward(e, t, r) {
      const { commitment: s, config: n } = ft(r), a = this._buildArgs([
        e.map((p) => p.toBase58())
      ], s, void 0, {
        ...n,
        epoch: t ?? (n == null ? void 0 : n.epoch)
      }), l = await this._rpcRequest("getInflationReward", a), d = Z(l, $f);
      if ("error" in d) throw new te(d.error, "failed to get inflation reward");
      return d.result;
    }
    async getInflationRate() {
      const e = await this._rpcRequest("getInflationRate", []), t = Z(e, tg);
      if ("error" in t) throw new te(t.error, "failed to get inflation rate");
      return t.result;
    }
    async getEpochInfo(e) {
      const { commitment: t, config: r } = ft(e), s = this._buildArgs([], t, void 0, r), n = await this._rpcRequest("getEpochInfo", s), a = Z(n, ng);
      if ("error" in a) throw new te(a.error, "failed to get epoch info");
      return a.result;
    }
    async getEpochSchedule() {
      const e = await this._rpcRequest("getEpochSchedule", []), t = Z(e, sg);
      if ("error" in t) throw new te(t.error, "failed to get epoch schedule");
      const r = t.result;
      return new rl(r.slotsPerEpoch, r.leaderScheduleSlotOffset, r.warmup, r.firstNormalEpoch, r.firstNormalSlot);
    }
    async getLeaderSchedule() {
      const e = await this._rpcRequest("getLeaderSchedule", []), t = Z(e, ig);
      if ("error" in t) throw new te(t.error, "failed to get leader schedule");
      return t.result;
    }
    async getMinimumBalanceForRentExemption(e, t) {
      const r = this._buildArgs([
        e
      ], t), s = await this._rpcRequest("getMinimumBalanceForRentExemption", r), n = Z(s, Lg);
      return "error" in n ? (console.warn("Unable to fetch minimum balance for rent exemption"), 0) : n.result;
    }
    async getRecentBlockhashAndContext(e) {
      const { context: t, value: { blockhash: r } } = await this.getLatestBlockhashAndContext(e);
      return {
        context: t,
        value: {
          blockhash: r,
          feeCalculator: {
            get lamportsPerSignature() {
              throw new Error("The capability to fetch `lamportsPerSignature` using the `getRecentBlockhash` API is no longer offered by the network. Use the `getFeeForMessage` API to obtain the fee for a given message.");
            },
            toJSON() {
              return {};
            }
          }
        }
      };
    }
    async getRecentPerformanceSamples(e) {
      const t = await this._rpcRequest("getRecentPerformanceSamples", e ? [
        e
      ] : []), r = Z(t, Fg);
      if ("error" in r) throw new te(r.error, "failed to get recent performance samples");
      return r.result;
    }
    async getFeeCalculatorForBlockhash(e, t) {
      const r = this._buildArgs([
        e
      ], t), s = await this._rpcRequest("getFeeCalculatorForBlockhash", r), n = Z(s, Hg);
      if ("error" in n) throw new te(n.error, "failed to get fee calculator");
      const { context: a, value: l } = n.result;
      return {
        context: a,
        value: l !== null ? l.feeCalculator : null
      };
    }
    async getFeeForMessage(e, t) {
      const r = Xe(e.serialize()).toString("base64"), s = this._buildArgs([
        r
      ], t), n = await this._rpcRequest("getFeeForMessage", s), a = Z(n, Et(G(P())));
      if ("error" in a) throw new te(a.error, "failed to get fee for message");
      if (a.result === null) throw new Error("invalid blockhash");
      return a.result;
    }
    async getRecentPrioritizationFees(e) {
      var _a2;
      const t = (_a2 = e == null ? void 0 : e.lockedWritableAccounts) == null ? void 0 : _a2.map((a) => a.toBase58()), r = (t == null ? void 0 : t.length) ? [
        t
      ] : [], s = await this._rpcRequest("getRecentPrioritizationFees", r), n = Z(s, rg);
      if ("error" in n) throw new te(n.error, "failed to get recent prioritization fees");
      return n.result;
    }
    async getRecentBlockhash(e) {
      try {
        return (await this.getRecentBlockhashAndContext(e)).value;
      } catch (t) {
        throw new Error("failed to get recent blockhash: " + t);
      }
    }
    async getLatestBlockhash(e) {
      try {
        return (await this.getLatestBlockhashAndContext(e)).value;
      } catch (t) {
        throw new Error("failed to get recent blockhash: " + t);
      }
    }
    async getLatestBlockhashAndContext(e) {
      const { commitment: t, config: r } = ft(e), s = this._buildArgs([], t, void 0, r), n = await this._rpcRequest("getLatestBlockhash", s), a = Z(n, Dg);
      if ("error" in a) throw new te(a.error, "failed to get latest blockhash");
      return a.result;
    }
    async isBlockhashValid(e, t) {
      const { commitment: r, config: s } = ft(t), n = this._buildArgs([
        e
      ], r, void 0, s), a = await this._rpcRequest("isBlockhashValid", n), l = Z(a, qg);
      if ("error" in l) throw new te(l.error, "failed to determine if the blockhash `" + e + "`is valid");
      return l.result;
    }
    async getVersion() {
      const e = await this._rpcRequest("getVersion", []), t = Z(e, Ze(Gf));
      if ("error" in t) throw new te(t.error, "failed to get version");
      return t.result;
    }
    async getGenesisHash() {
      const e = await this._rpcRequest("getGenesisHash", []), t = Z(e, Ze(F()));
      if ("error" in t) throw new te(t.error, "failed to get genesis hash");
      return t.result;
    }
    async getBlock(e, t) {
      const { commitment: r, config: s } = ft(t), n = this._buildArgsAtLeastConfirmed([
        e
      ], r, void 0, s), a = await this._rpcRequest("getBlock", n);
      try {
        switch (s == null ? void 0 : s.transactionDetails) {
          case "accounts": {
            const l = Z(a, zg);
            if ("error" in l) throw l.error;
            return l.result;
          }
          case "none": {
            const l = Z(a, Ng);
            if ("error" in l) throw l.error;
            return l.result;
          }
          default: {
            const l = Z(a, Og);
            if ("error" in l) throw l.error;
            const { result: d } = l;
            return d ? {
              ...d,
              transactions: d.transactions.map(({ transaction: p, meta: k, version: A }) => ({
                meta: k,
                transaction: {
                  ...p,
                  message: so(A, p.message)
                },
                version: A
              }))
            } : null;
          }
        }
      } catch (l) {
        throw new te(l, "failed to get confirmed block");
      }
    }
    async getParsedBlock(e, t) {
      const { commitment: r, config: s } = ft(t), n = this._buildArgsAtLeastConfirmed([
        e
      ], r, "jsonParsed", s), a = await this._rpcRequest("getBlock", n);
      try {
        switch (s == null ? void 0 : s.transactionDetails) {
          case "accounts": {
            const l = Z(a, $g);
            if ("error" in l) throw l.error;
            return l.result;
          }
          case "none": {
            const l = Z(a, Ug);
            if ("error" in l) throw l.error;
            return l.result;
          }
          default: {
            const l = Z(a, Kg);
            if ("error" in l) throw l.error;
            return l.result;
          }
        }
      } catch (l) {
        throw new te(l, "failed to get block");
      }
    }
    async getBlockProduction(e) {
      let t, r;
      if (typeof e == "string") r = e;
      else if (e) {
        const { commitment: l, ...d } = e;
        r = l, t = d;
      }
      const s = this._buildArgs([], r, "base64", t), n = await this._rpcRequest("getBlockProduction", s), a = Z(n, Zf);
      if ("error" in a) throw new te(a.error, "failed to get block production information");
      return a.result;
    }
    async getTransaction(e, t) {
      const { commitment: r, config: s } = ft(t), n = this._buildArgsAtLeastConfirmed([
        e
      ], r, void 0, s), a = await this._rpcRequest("getTransaction", n), l = Z(a, io);
      if ("error" in l) throw new te(l.error, "failed to get transaction");
      const d = l.result;
      return d && {
        ...d,
        transaction: {
          ...d.transaction,
          message: so(d.version, d.transaction.message)
        }
      };
    }
    async getParsedTransaction(e, t) {
      const { commitment: r, config: s } = ft(t), n = this._buildArgsAtLeastConfirmed([
        e
      ], r, "jsonParsed", s), a = await this._rpcRequest("getTransaction", n), l = Z(a, Gs);
      if ("error" in l) throw new te(l.error, "failed to get transaction");
      return l.result;
    }
    async getParsedTransactions(e, t) {
      const { commitment: r, config: s } = ft(t), n = e.map((d) => ({
        methodName: "getTransaction",
        args: this._buildArgsAtLeastConfirmed([
          d
        ], r, "jsonParsed", s)
      }));
      return (await this._rpcBatchRequest(n)).map((d) => {
        const p = Z(d, Gs);
        if ("error" in p) throw new te(p.error, "failed to get transactions");
        return p.result;
      });
    }
    async getTransactions(e, t) {
      const { commitment: r, config: s } = ft(t), n = e.map((d) => ({
        methodName: "getTransaction",
        args: this._buildArgsAtLeastConfirmed([
          d
        ], r, void 0, s)
      }));
      return (await this._rpcBatchRequest(n)).map((d) => {
        const p = Z(d, io);
        if ("error" in p) throw new te(p.error, "failed to get transactions");
        const k = p.result;
        return k && {
          ...k,
          transaction: {
            ...k.transaction,
            message: so(k.version, k.transaction.message)
          }
        };
      });
    }
    async getConfirmedBlock(e, t) {
      const r = this._buildArgsAtLeastConfirmed([
        e
      ], t), s = await this._rpcRequest("getBlock", r), n = Z(s, Wg);
      if ("error" in n) throw new te(n.error, "failed to get confirmed block");
      const a = n.result;
      if (!a) throw new Error("Confirmed block " + e + " not found");
      const l = {
        ...a,
        transactions: a.transactions.map(({ transaction: d, meta: p }) => {
          const k = new Rr(d.message);
          return {
            meta: p,
            transaction: {
              ...d,
              message: k
            }
          };
        })
      };
      return {
        ...l,
        transactions: l.transactions.map(({ transaction: d, meta: p }) => ({
          meta: p,
          transaction: ct.populate(d.message, d.signatures)
        }))
      };
    }
    async getBlocks(e, t, r) {
      const s = this._buildArgsAtLeastConfirmed(t !== void 0 ? [
        e,
        t
      ] : [
        e
      ], r), n = await this._rpcRequest("getBlocks", s), a = Z(n, Ze(J(P())));
      if ("error" in a) throw new te(a.error, "failed to get blocks");
      return a.result;
    }
    async getBlockSignatures(e, t) {
      const r = this._buildArgsAtLeastConfirmed([
        e
      ], t, void 0, {
        transactionDetails: "signatures",
        rewards: false
      }), s = await this._rpcRequest("getBlock", r), n = Z(s, tc);
      if ("error" in n) throw new te(n.error, "failed to get block");
      const a = n.result;
      if (!a) throw new Error("Block " + e + " not found");
      return a;
    }
    async getConfirmedBlockSignatures(e, t) {
      const r = this._buildArgsAtLeastConfirmed([
        e
      ], t, void 0, {
        transactionDetails: "signatures",
        rewards: false
      }), s = await this._rpcRequest("getBlock", r), n = Z(s, tc);
      if ("error" in n) throw new te(n.error, "failed to get confirmed block");
      const a = n.result;
      if (!a) throw new Error("Confirmed block " + e + " not found");
      return a;
    }
    async getConfirmedTransaction(e, t) {
      const r = this._buildArgsAtLeastConfirmed([
        e
      ], t), s = await this._rpcRequest("getTransaction", r), n = Z(s, io);
      if ("error" in n) throw new te(n.error, "failed to get transaction");
      const a = n.result;
      if (!a) return a;
      const l = new Rr(a.transaction.message), d = a.transaction.signatures;
      return {
        ...a,
        transaction: ct.populate(l, d)
      };
    }
    async getParsedConfirmedTransaction(e, t) {
      const r = this._buildArgsAtLeastConfirmed([
        e
      ], t, "jsonParsed"), s = await this._rpcRequest("getTransaction", r), n = Z(s, Gs);
      if ("error" in n) throw new te(n.error, "failed to get confirmed transaction");
      return n.result;
    }
    async getParsedConfirmedTransactions(e, t) {
      const r = e.map((a) => ({
        methodName: "getTransaction",
        args: this._buildArgsAtLeastConfirmed([
          a
        ], t, "jsonParsed")
      }));
      return (await this._rpcBatchRequest(r)).map((a) => {
        const l = Z(a, Gs);
        if ("error" in l) throw new te(l.error, "failed to get confirmed transactions");
        return l.result;
      });
    }
    async getConfirmedSignaturesForAddress(e, t, r) {
      let s = {}, n = await this.getFirstAvailableBlock();
      for (; !("until" in s) && (t--, !(t <= 0 || t < n)); ) try {
        const d = await this.getConfirmedBlockSignatures(t, "finalized");
        d.signatures.length > 0 && (s.until = d.signatures[d.signatures.length - 1].toString());
      } catch (d) {
        if (d instanceof Error && d.message.includes("skipped")) continue;
        throw d;
      }
      let a = await this.getSlot("finalized");
      for (; !("before" in s) && (r++, !(r > a)); ) try {
        const d = await this.getConfirmedBlockSignatures(r);
        d.signatures.length > 0 && (s.before = d.signatures[d.signatures.length - 1].toString());
      } catch (d) {
        if (d instanceof Error && d.message.includes("skipped")) continue;
        throw d;
      }
      return (await this.getConfirmedSignaturesForAddress2(e, s)).map((d) => d.signature);
    }
    async getConfirmedSignaturesForAddress2(e, t, r) {
      const s = this._buildArgsAtLeastConfirmed([
        e.toBase58()
      ], r, void 0, t), n = await this._rpcRequest("getConfirmedSignaturesForAddress2", s), a = Z(n, yg);
      if ("error" in a) throw new te(a.error, "failed to get confirmed signatures for address");
      return a.result;
    }
    async getSignaturesForAddress(e, t, r) {
      const s = this._buildArgsAtLeastConfirmed([
        e.toBase58()
      ], r, void 0, t), n = await this._rpcRequest("getSignaturesForAddress", s), a = Z(n, mg);
      if ("error" in a) throw new te(a.error, "failed to get signatures for address");
      return a.result;
    }
    async getAddressLookupTable(e, t) {
      const { context: r, value: s } = await this.getAccountInfoAndContext(e, t);
      let n = null;
      return s !== null && (n = new No({
        key: e,
        state: No.deserialize(s.data)
      })), {
        context: r,
        value: n
      };
    }
    async getNonceAndContext(e, t) {
      const { context: r, value: s } = await this.getAccountInfoAndContext(e, t);
      let n = null;
      return s !== null && (n = el.fromAccountData(s.data)), {
        context: r,
        value: n
      };
    }
    async getNonce(e, t) {
      return await this.getNonceAndContext(e, t).then((r) => r.value).catch((r) => {
        throw new Error("failed to get nonce for account " + e.toBase58() + ": " + r);
      });
    }
    async requestAirdrop(e, t) {
      const r = await this._rpcRequest("requestAirdrop", [
        e.toBase58(),
        t
      ]), s = Z(r, Gg);
      if ("error" in s) throw new te(s.error, `airdrop to ${e.toBase58()} failed`);
      return s.result;
    }
    async _blockhashWithExpiryBlockHeight(e) {
      if (!e) {
        for (; this._pollingBlockhash; ) await Jr(100);
        const r = Date.now() - this._blockhashInfo.lastFetch >= sl;
        if (this._blockhashInfo.latestBlockhash !== null && !r) return this._blockhashInfo.latestBlockhash;
      }
      return await this._pollNewBlockhash();
    }
    async _pollNewBlockhash() {
      this._pollingBlockhash = true;
      try {
        const e = Date.now(), t = this._blockhashInfo.latestBlockhash, r = t ? t.blockhash : null;
        for (let s = 0; s < 50; s++) {
          const n = await this.getLatestBlockhash("finalized");
          if (r !== n.blockhash) return this._blockhashInfo = {
            latestBlockhash: n,
            lastFetch: Date.now(),
            transactionSignatures: [],
            simulatedSignatures: []
          }, n;
          await Jr(Zu / 2);
        }
        throw new Error(`Unable to obtain a new blockhash after ${Date.now() - e}ms`);
      } finally {
        this._pollingBlockhash = false;
      }
    }
    async getStakeMinimumDelegation(e) {
      const { commitment: t, config: r } = ft(e), s = this._buildArgs([], t, "base64", r), n = await this._rpcRequest("getStakeMinimumDelegation", s), a = Z(n, Et(P()));
      if ("error" in a) throw new te(a.error, "failed to get stake minimum delegation");
      return a.result;
    }
    async simulateTransaction(e, t, r) {
      if ("message" in e) {
        const R = e.serialize(), M = B.from(R).toString("base64");
        if (Array.isArray(t) || r !== void 0) throw new Error("Invalid arguments");
        const x = t || {};
        x.encoding = "base64", "commitment" in x || (x.commitment = this.commitment), t && typeof t == "object" && "innerInstructions" in t && (x.innerInstructions = t.innerInstructions);
        const C = [
          M,
          x
        ], O = await this._rpcRequest("simulateTransaction", C), N = Z(O, Qa);
        if ("error" in N) throw new Error("failed to simulate transaction: " + N.error.message);
        return N.result;
      }
      let s;
      if (e instanceof ct) {
        let I = e;
        s = new ct(), s.feePayer = I.feePayer, s.instructions = e.instructions, s.nonceInfo = I.nonceInfo, s.signatures = I.signatures;
      } else s = ct.populate(e), s._message = s._json = void 0;
      if (t !== void 0 && !Array.isArray(t)) throw new Error("Invalid arguments");
      const n = t;
      if (s.nonceInfo && n) s.sign(...n);
      else {
        let I = this._disableBlockhashCaching;
        for (; ; ) {
          const R = await this._blockhashWithExpiryBlockHeight(I);
          if (s.lastValidBlockHeight = R.lastValidBlockHeight, s.recentBlockhash = R.blockhash, !n) break;
          if (s.sign(...n), !s.signature) throw new Error("!signature");
          const M = s.signature.toString("base64");
          if (!this._blockhashInfo.simulatedSignatures.includes(M) && !this._blockhashInfo.transactionSignatures.includes(M)) {
            this._blockhashInfo.simulatedSignatures.push(M);
            break;
          } else I = true;
        }
      }
      const a = s._compile(), l = a.serialize(), p = s._serialize(l).toString("base64"), k = {
        encoding: "base64",
        commitment: this.commitment
      };
      if (r) {
        const I = (Array.isArray(r) ? r : a.nonProgramIds()).map((R) => R.toBase58());
        k.accounts = {
          encoding: "base64",
          addresses: I
        };
      }
      n && (k.sigVerify = true), t && typeof t == "object" && "innerInstructions" in t && (k.innerInstructions = t.innerInstructions);
      const A = [
        p,
        k
      ], E = await this._rpcRequest("simulateTransaction", A), S = Z(E, Qa);
      if ("error" in S) {
        let I;
        if ("data" in S.error && (I = S.error.data.logs, I && Array.isArray(I))) {
          const R = `
    `, M = R + I.join(R);
          console.error(S.error.message, M);
        }
        throw new Is({
          action: "simulate",
          signature: "",
          transactionMessage: S.error.message,
          logs: I
        });
      }
      return S.result;
    }
    async sendTransaction(e, t, r) {
      if ("version" in e) {
        if (t && Array.isArray(t)) throw new Error("Invalid arguments");
        const a = e.serialize();
        return await this.sendRawTransaction(a, t);
      }
      if (t === void 0 || !Array.isArray(t)) throw new Error("Invalid arguments");
      const s = t;
      if (e.nonceInfo) e.sign(...s);
      else {
        let a = this._disableBlockhashCaching;
        for (; ; ) {
          const l = await this._blockhashWithExpiryBlockHeight(a);
          if (e.lastValidBlockHeight = l.lastValidBlockHeight, e.recentBlockhash = l.blockhash, e.sign(...s), !e.signature) throw new Error("!signature");
          const d = e.signature.toString("base64");
          if (this._blockhashInfo.transactionSignatures.includes(d)) a = true;
          else {
            this._blockhashInfo.transactionSignatures.push(d);
            break;
          }
        }
      }
      const n = e.serialize();
      return await this.sendRawTransaction(n, r);
    }
    async sendRawTransaction(e, t) {
      const r = Xe(e).toString("base64");
      return await this.sendEncodedTransaction(r, t);
    }
    async sendEncodedTransaction(e, t) {
      const r = {
        encoding: "base64"
      }, s = t && t.skipPreflight, n = s === true ? "processed" : t && t.preflightCommitment || this.commitment;
      t && t.maxRetries != null && (r.maxRetries = t.maxRetries), t && t.minContextSlot != null && (r.minContextSlot = t.minContextSlot), s && (r.skipPreflight = s), n && (r.preflightCommitment = n);
      const a = [
        e,
        r
      ], l = await this._rpcRequest("sendTransaction", a), d = Z(l, jg);
      if ("error" in d) {
        let p;
        throw "data" in d.error && (p = d.error.data.logs), new Is({
          action: s ? "send" : "simulate",
          signature: "",
          transactionMessage: d.error.message,
          logs: p
        });
      }
      return d.result;
    }
    _wsOnOpen() {
      this._rpcWebSocketConnected = true, this._rpcWebSocketHeartbeat = setInterval(() => {
        (async () => {
          try {
            await this._rpcWebSocket.notify("ping");
          } catch {
          }
        })();
      }, 5e3), this._updateSubscriptions();
    }
    _wsOnError(e) {
      this._rpcWebSocketConnected = false, console.error("ws error:", e.message);
    }
    _wsOnClose(e) {
      if (this._rpcWebSocketConnected = false, this._rpcWebSocketGeneration = (this._rpcWebSocketGeneration + 1) % Number.MAX_SAFE_INTEGER, this._rpcWebSocketIdleTimeout && (clearTimeout(this._rpcWebSocketIdleTimeout), this._rpcWebSocketIdleTimeout = null), this._rpcWebSocketHeartbeat && (clearInterval(this._rpcWebSocketHeartbeat), this._rpcWebSocketHeartbeat = null), e === 1e3) {
        this._updateSubscriptions();
        return;
      }
      this._subscriptionCallbacksByServerSubscriptionId = {}, Object.entries(this._subscriptionsByHash).forEach(([t, r]) => {
        this._setSubscription(t, {
          ...r,
          state: "pending"
        });
      });
    }
    _setSubscription(e, t) {
      var _a2;
      const r = (_a2 = this._subscriptionsByHash[e]) == null ? void 0 : _a2.state;
      if (this._subscriptionsByHash[e] = t, r !== t.state) {
        const s = this._subscriptionStateChangeCallbacksByHash[e];
        s && s.forEach((n) => {
          try {
            n(t.state);
          } catch {
          }
        });
      }
    }
    _onSubscriptionStateChange(e, t) {
      var _a2;
      const r = this._subscriptionHashByClientSubscriptionId[e];
      if (r == null) return () => {
      };
      const s = (_a2 = this._subscriptionStateChangeCallbacksByHash)[r] || (_a2[r] = /* @__PURE__ */ new Set());
      return s.add(t), () => {
        s.delete(t), s.size === 0 && delete this._subscriptionStateChangeCallbacksByHash[r];
      };
    }
    async _updateSubscriptions() {
      if (Object.keys(this._subscriptionsByHash).length === 0) {
        this._rpcWebSocketConnected && (this._rpcWebSocketConnected = false, this._rpcWebSocketIdleTimeout = setTimeout(() => {
          this._rpcWebSocketIdleTimeout = null;
          try {
            this._rpcWebSocket.close();
          } catch (r) {
            r instanceof Error && console.log(`Error when closing socket connection: ${r.message}`);
          }
        }, 500));
        return;
      }
      if (this._rpcWebSocketIdleTimeout !== null && (clearTimeout(this._rpcWebSocketIdleTimeout), this._rpcWebSocketIdleTimeout = null, this._rpcWebSocketConnected = true), !this._rpcWebSocketConnected) {
        this._rpcWebSocket.connect();
        return;
      }
      const e = this._rpcWebSocketGeneration, t = () => e === this._rpcWebSocketGeneration;
      await Promise.all(Object.keys(this._subscriptionsByHash).map(async (r) => {
        const s = this._subscriptionsByHash[r];
        if (s !== void 0) switch (s.state) {
          case "pending":
          case "unsubscribed":
            if (s.callbacks.size === 0) {
              delete this._subscriptionsByHash[r], s.state === "unsubscribed" && delete this._subscriptionCallbacksByServerSubscriptionId[s.serverSubscriptionId], await this._updateSubscriptions();
              return;
            }
            await (async () => {
              const { args: n, method: a } = s;
              try {
                this._setSubscription(r, {
                  ...s,
                  state: "subscribing"
                });
                const l = await this._rpcWebSocket.call(a, n);
                this._setSubscription(r, {
                  ...s,
                  serverSubscriptionId: l,
                  state: "subscribed"
                }), this._subscriptionCallbacksByServerSubscriptionId[l] = s.callbacks, await this._updateSubscriptions();
              } catch (l) {
                if (console.error(`Received ${l instanceof Error ? "" : "JSON-RPC "}error calling \`${a}\``, {
                  args: n,
                  error: l
                }), !t()) return;
                this._setSubscription(r, {
                  ...s,
                  state: "pending"
                }), await this._updateSubscriptions();
              }
            })();
            break;
          case "subscribed":
            s.callbacks.size === 0 && await (async () => {
              const { serverSubscriptionId: n, unsubscribeMethod: a } = s;
              if (this._subscriptionsAutoDisposedByRpc.has(n)) this._subscriptionsAutoDisposedByRpc.delete(n);
              else {
                this._setSubscription(r, {
                  ...s,
                  state: "unsubscribing"
                }), this._setSubscription(r, {
                  ...s,
                  state: "unsubscribing"
                });
                try {
                  await this._rpcWebSocket.call(a, [
                    n
                  ]);
                } catch (l) {
                  if (l instanceof Error && console.error(`${a} error:`, l.message), !t()) return;
                  this._setSubscription(r, {
                    ...s,
                    state: "subscribed"
                  }), await this._updateSubscriptions();
                  return;
                }
              }
              this._setSubscription(r, {
                ...s,
                state: "unsubscribed"
              }), await this._updateSubscriptions();
            })();
            break;
        }
      }));
    }
    _handleServerNotification(e, t) {
      const r = this._subscriptionCallbacksByServerSubscriptionId[e];
      r !== void 0 && r.forEach((s) => {
        try {
          s(...t);
        } catch (n) {
          console.error(n);
        }
      });
    }
    _wsOnAccountNotification(e) {
      const { result: t, subscription: r } = Z(e, bg);
      this._handleServerNotification(r, [
        t.value,
        t.context
      ]);
    }
    _makeSubscription(e, t) {
      const r = this._nextClientSubscriptionId++, s = Za([
        e.method,
        t
      ]), n = this._subscriptionsByHash[s];
      return n === void 0 ? this._subscriptionsByHash[s] = {
        ...e,
        args: t,
        callbacks: /* @__PURE__ */ new Set([
          e.callback
        ]),
        state: "pending"
      } : n.callbacks.add(e.callback), this._subscriptionHashByClientSubscriptionId[r] = s, this._subscriptionDisposeFunctionsByClientSubscriptionId[r] = async () => {
        delete this._subscriptionDisposeFunctionsByClientSubscriptionId[r], delete this._subscriptionHashByClientSubscriptionId[r];
        const a = this._subscriptionsByHash[s];
        et(a !== void 0, `Could not find a \`Subscription\` when tearing down client subscription #${r}`), a.callbacks.delete(e.callback), await this._updateSubscriptions();
      }, this._updateSubscriptions(), r;
    }
    onAccountChange(e, t, r) {
      const { commitment: s, config: n } = ft(r), a = this._buildArgs([
        e.toBase58()
      ], s || this._commitment || "finalized", "base64", n);
      return this._makeSubscription({
        callback: t,
        method: "accountSubscribe",
        unsubscribeMethod: "accountUnsubscribe"
      }, a);
    }
    async removeAccountChangeListener(e) {
      await this._unsubscribeClientSubscription(e, "account change");
    }
    _wsOnProgramAccountNotification(e) {
      const { result: t, subscription: r } = Z(e, kg);
      this._handleServerNotification(r, [
        {
          accountId: t.value.pubkey,
          accountInfo: t.value.account
        },
        t.context
      ]);
    }
    onProgramAccountChange(e, t, r, s) {
      const { commitment: n, config: a } = ft(r), l = this._buildArgs([
        e.toBase58()
      ], n || this._commitment || "finalized", "base64", a || (s ? {
        filters: Xa(s)
      } : void 0));
      return this._makeSubscription({
        callback: t,
        method: "programSubscribe",
        unsubscribeMethod: "programUnsubscribe"
      }, l);
    }
    async removeProgramAccountChangeListener(e) {
      await this._unsubscribeClientSubscription(e, "program account change");
    }
    onLogs(e, t, r) {
      const s = this._buildArgs([
        typeof e == "object" ? {
          mentions: [
            e.toString()
          ]
        } : e
      ], r || this._commitment || "finalized");
      return this._makeSubscription({
        callback: t,
        method: "logsSubscribe",
        unsubscribeMethod: "logsUnsubscribe"
      }, s);
    }
    async removeOnLogsListener(e) {
      await this._unsubscribeClientSubscription(e, "logs");
    }
    _wsOnLogsNotification(e) {
      const { result: t, subscription: r } = Z(e, Zg);
      this._handleServerNotification(r, [
        t.value,
        t.context
      ]);
    }
    _wsOnSlotNotification(e) {
      const { result: t, subscription: r } = Z(e, Sg);
      this._handleServerNotification(r, [
        t
      ]);
    }
    onSlotChange(e) {
      return this._makeSubscription({
        callback: e,
        method: "slotSubscribe",
        unsubscribeMethod: "slotUnsubscribe"
      }, []);
    }
    async removeSlotChangeListener(e) {
      await this._unsubscribeClientSubscription(e, "slot change");
    }
    _wsOnSlotUpdatesNotification(e) {
      const { result: t, subscription: r } = Z(e, Ag);
      this._handleServerNotification(r, [
        t
      ]);
    }
    onSlotUpdate(e) {
      return this._makeSubscription({
        callback: e,
        method: "slotsUpdatesSubscribe",
        unsubscribeMethod: "slotsUpdatesUnsubscribe"
      }, []);
    }
    async removeSlotUpdateListener(e) {
      await this._unsubscribeClientSubscription(e, "slot update");
    }
    async _unsubscribeClientSubscription(e, t) {
      const r = this._subscriptionDisposeFunctionsByClientSubscriptionId[e];
      r ? await r() : console.warn(`Ignored unsubscribe request because an active subscription with id \`${e}\` for '${t}' events could not be found.`);
    }
    _buildArgs(e, t, r, s) {
      const n = t || this._commitment;
      if (n || r || s) {
        let a = {};
        r && (a.encoding = r), n && (a.commitment = n), s && (a = Object.assign(a, s)), e.push(a);
      }
      return e;
    }
    _buildArgsAtLeastConfirmed(e, t, r, s) {
      const n = t || this._commitment;
      if (n && ![
        "confirmed",
        "finalized"
      ].includes(n)) throw new Error("Using Connection with default commitment: `" + this._commitment + "`, but method requires at least `confirmed`");
      return this._buildArgs(e, t, r, s);
    }
    _wsOnSignatureNotification(e) {
      const { result: t, subscription: r } = Z(e, Ig);
      t.value !== "receivedSignature" && this._subscriptionsAutoDisposedByRpc.add(r), this._handleServerNotification(r, t.value === "receivedSignature" ? [
        {
          type: "received"
        },
        t.context
      ] : [
        {
          type: "status",
          result: t.value
        },
        t.context
      ]);
    }
    onSignature(e, t, r) {
      const s = this._buildArgs([
        e
      ], r || this._commitment || "finalized"), n = this._makeSubscription({
        callback: (a, l) => {
          if (a.type === "status") {
            t(a.result, l);
            try {
              this.removeSignatureListener(n);
            } catch {
            }
          }
        },
        method: "signatureSubscribe",
        unsubscribeMethod: "signatureUnsubscribe"
      }, s);
      return n;
    }
    onSignatureWithOptions(e, t, r) {
      const { commitment: s, ...n } = {
        ...r,
        commitment: r && r.commitment || this._commitment || "finalized"
      }, a = this._buildArgs([
        e
      ], s, void 0, n), l = this._makeSubscription({
        callback: (d, p) => {
          t(d, p);
          try {
            this.removeSignatureListener(l);
          } catch {
          }
        },
        method: "signatureSubscribe",
        unsubscribeMethod: "signatureUnsubscribe"
      }, a);
      return l;
    }
    async removeSignatureListener(e) {
      await this._unsubscribeClientSubscription(e, "signature result");
    }
    _wsOnRootNotification(e) {
      const { result: t, subscription: r } = Z(e, Eg);
      this._handleServerNotification(r, [
        t
      ]);
    }
    onRootChange(e) {
      return this._makeSubscription({
        callback: e,
        method: "rootSubscribe",
        unsubscribeMethod: "rootUnsubscribe"
      }, []);
    }
    async removeRootChangeListener(e) {
      await this._unsubscribeClientSubscription(e, "root change");
    }
  }, ki = class ai {
    constructor(e) {
      this._keypair = void 0, this._keypair = e ?? Fa();
    }
    static generate() {
      return new ai(Fa());
    }
    static fromSecretKey(e, t) {
      if (e.byteLength !== 64) throw new Error("bad secret key size");
      const r = e.slice(32, 64);
      if (!t || !t.skipValidation) {
        const s = e.slice(0, 32), n = yi(s);
        for (let a = 0; a < 32; a++) if (r[a] !== n[a]) throw new Error("provided secretKey is invalid");
      }
      return new ai({
        publicKey: r,
        secretKey: e
      });
    }
    static fromSeed(e) {
      const t = yi(e), r = new Uint8Array(64);
      return r.set(e), r.set(t, 32), new ai({
        publicKey: t,
        secretKey: r
      });
    }
    get publicKey() {
      return new U(this._keypair.publicKey);
    }
    get secretKey() {
      return new Uint8Array(this._keypair.secretKey);
    }
  };
  const br = Object.freeze({
    CreateLookupTable: {
      index: 0,
      layout: m.struct([
        m.u32("instruction"),
        Bn("recentSlot"),
        m.u8("bumpSeed")
      ])
    },
    FreezeLookupTable: {
      index: 1,
      layout: m.struct([
        m.u32("instruction")
      ])
    },
    ExtendLookupTable: {
      index: 2,
      layout: m.struct([
        m.u32("instruction"),
        Bn(),
        m.seq(rt(), m.offset(m.u32(), -8), "addresses")
      ])
    },
    DeactivateLookupTable: {
      index: 3,
      layout: m.struct([
        m.u32("instruction")
      ])
    },
    CloseLookupTable: {
      index: 4,
      layout: m.struct([
        m.u32("instruction")
      ])
    }
  });
  let Qg = class {
    constructor() {
    }
    static decodeInstructionType(e) {
      this.checkProgramId(e.programId);
      const r = m.u32("instruction").decode(e.data);
      let s;
      for (const [n, a] of Object.entries(br)) if (a.index == r) {
        s = n;
        break;
      }
      if (!s) throw new Error("Invalid Instruction. Should be a LookupTable Instruction");
      return s;
    }
    static decodeCreateLookupTable(e) {
      this.checkProgramId(e.programId), this.checkKeysLength(e.keys, 4);
      const { recentSlot: t } = ut(br.CreateLookupTable, e.data);
      return {
        authority: e.keys[1].pubkey,
        payer: e.keys[2].pubkey,
        recentSlot: Number(t)
      };
    }
    static decodeExtendLookupTable(e) {
      if (this.checkProgramId(e.programId), e.keys.length < 2) throw new Error(`invalid instruction; found ${e.keys.length} keys, expected at least 2`);
      const { addresses: t } = ut(br.ExtendLookupTable, e.data);
      return {
        lookupTable: e.keys[0].pubkey,
        authority: e.keys[1].pubkey,
        payer: e.keys.length > 2 ? e.keys[2].pubkey : void 0,
        addresses: t.map((r) => new U(r))
      };
    }
    static decodeCloseLookupTable(e) {
      return this.checkProgramId(e.programId), this.checkKeysLength(e.keys, 3), {
        lookupTable: e.keys[0].pubkey,
        authority: e.keys[1].pubkey,
        recipient: e.keys[2].pubkey
      };
    }
    static decodeFreezeLookupTable(e) {
      return this.checkProgramId(e.programId), this.checkKeysLength(e.keys, 2), {
        lookupTable: e.keys[0].pubkey,
        authority: e.keys[1].pubkey
      };
    }
    static decodeDeactivateLookupTable(e) {
      return this.checkProgramId(e.programId), this.checkKeysLength(e.keys, 2), {
        lookupTable: e.keys[0].pubkey,
        authority: e.keys[1].pubkey
      };
    }
    static checkProgramId(e) {
      if (!e.equals(da.programId)) throw new Error("invalid instruction; programId is not AddressLookupTable Program");
    }
    static checkKeysLength(e, t) {
      if (e.length < t) throw new Error(`invalid instruction; found ${e.length} keys, expected at least ${t}`);
    }
  }, da = class {
    constructor() {
    }
    static createLookupTable(e) {
      const [t, r] = U.findProgramAddressSync([
        e.authority.toBuffer(),
        Uu().encode(e.recentSlot)
      ], this.programId), s = br.CreateLookupTable, n = st(s, {
        recentSlot: BigInt(e.recentSlot),
        bumpSeed: r
      }), a = [
        {
          pubkey: t,
          isSigner: false,
          isWritable: true
        },
        {
          pubkey: e.authority,
          isSigner: true,
          isWritable: false
        },
        {
          pubkey: e.payer,
          isSigner: true,
          isWritable: true
        },
        {
          pubkey: St.programId,
          isSigner: false,
          isWritable: false
        }
      ];
      return [
        new ht({
          programId: this.programId,
          keys: a,
          data: n
        }),
        t
      ];
    }
    static freezeLookupTable(e) {
      const t = br.FreezeLookupTable, r = st(t), s = [
        {
          pubkey: e.lookupTable,
          isSigner: false,
          isWritable: true
        },
        {
          pubkey: e.authority,
          isSigner: true,
          isWritable: false
        }
      ];
      return new ht({
        programId: this.programId,
        keys: s,
        data: r
      });
    }
    static extendLookupTable(e) {
      const t = br.ExtendLookupTable, r = st(t, {
        addresses: e.addresses.map((n) => n.toBytes())
      }), s = [
        {
          pubkey: e.lookupTable,
          isSigner: false,
          isWritable: true
        },
        {
          pubkey: e.authority,
          isSigner: true,
          isWritable: false
        }
      ];
      return e.payer && s.push({
        pubkey: e.payer,
        isSigner: true,
        isWritable: true
      }, {
        pubkey: St.programId,
        isSigner: false,
        isWritable: false
      }), new ht({
        programId: this.programId,
        keys: s,
        data: r
      });
    }
    static deactivateLookupTable(e) {
      const t = br.DeactivateLookupTable, r = st(t), s = [
        {
          pubkey: e.lookupTable,
          isSigner: false,
          isWritable: true
        },
        {
          pubkey: e.authority,
          isSigner: true,
          isWritable: false
        }
      ];
      return new ht({
        programId: this.programId,
        keys: s,
        data: r
      });
    }
    static closeLookupTable(e) {
      const t = br.CloseLookupTable, r = st(t), s = [
        {
          pubkey: e.lookupTable,
          isSigner: false,
          isWritable: true
        },
        {
          pubkey: e.authority,
          isSigner: true,
          isWritable: false
        },
        {
          pubkey: e.recipient,
          isSigner: false,
          isWritable: true
        }
      ];
      return new ht({
        programId: this.programId,
        keys: s,
        data: r
      });
    }
  };
  da.programId = new U("AddressLookupTab1e1111111111111111111111111");
  let ep = class {
    constructor() {
    }
    static decodeInstructionType(e) {
      this.checkProgramId(e.programId);
      const r = m.u8("instruction").decode(e.data);
      let s;
      for (const [n, a] of Object.entries(ir)) if (a.index == r) {
        s = n;
        break;
      }
      if (!s) throw new Error("Instruction type incorrect; not a ComputeBudgetInstruction");
      return s;
    }
    static decodeRequestUnits(e) {
      this.checkProgramId(e.programId);
      const { units: t, additionalFee: r } = ut(ir.RequestUnits, e.data);
      return {
        units: t,
        additionalFee: r
      };
    }
    static decodeRequestHeapFrame(e) {
      this.checkProgramId(e.programId);
      const { bytes: t } = ut(ir.RequestHeapFrame, e.data);
      return {
        bytes: t
      };
    }
    static decodeSetComputeUnitLimit(e) {
      this.checkProgramId(e.programId);
      const { units: t } = ut(ir.SetComputeUnitLimit, e.data);
      return {
        units: t
      };
    }
    static decodeSetComputeUnitPrice(e) {
      this.checkProgramId(e.programId);
      const { microLamports: t } = ut(ir.SetComputeUnitPrice, e.data);
      return {
        microLamports: t
      };
    }
    static checkProgramId(e) {
      if (!e.equals(fa.programId)) throw new Error("invalid instruction; programId is not ComputeBudgetProgram");
    }
  };
  const ir = Object.freeze({
    RequestUnits: {
      index: 0,
      layout: m.struct([
        m.u8("instruction"),
        m.u32("units"),
        m.u32("additionalFee")
      ])
    },
    RequestHeapFrame: {
      index: 1,
      layout: m.struct([
        m.u8("instruction"),
        m.u32("bytes")
      ])
    },
    SetComputeUnitLimit: {
      index: 2,
      layout: m.struct([
        m.u8("instruction"),
        m.u32("units")
      ])
    },
    SetComputeUnitPrice: {
      index: 3,
      layout: m.struct([
        m.u8("instruction"),
        Bn("microLamports")
      ])
    }
  });
  let fa = class {
    constructor() {
    }
    static requestUnits(e) {
      const t = ir.RequestUnits, r = st(t, e);
      return new ht({
        keys: [],
        programId: this.programId,
        data: r
      });
    }
    static requestHeapFrame(e) {
      const t = ir.RequestHeapFrame, r = st(t, e);
      return new ht({
        keys: [],
        programId: this.programId,
        data: r
      });
    }
    static setComputeUnitLimit(e) {
      const t = ir.SetComputeUnitLimit, r = st(t, e);
      return new ht({
        keys: [],
        programId: this.programId,
        data: r
      });
    }
    static setComputeUnitPrice(e) {
      const t = ir.SetComputeUnitPrice, r = st(t, {
        microLamports: BigInt(e.microLamports)
      });
      return new ht({
        keys: [],
        programId: this.programId,
        data: r
      });
    }
  };
  fa.programId = new U("ComputeBudget111111111111111111111111111111");
  const rc = 64, nc = 32, sc = 64, ic = m.struct([
    m.u8("numSignatures"),
    m.u8("padding"),
    m.u16("signatureOffset"),
    m.u16("signatureInstructionIndex"),
    m.u16("publicKeyOffset"),
    m.u16("publicKeyInstructionIndex"),
    m.u16("messageDataOffset"),
    m.u16("messageDataSize"),
    m.u16("messageInstructionIndex")
  ]);
  let pl = class yl {
    constructor() {
    }
    static createInstructionWithPublicKey(e) {
      const { publicKey: t, message: r, signature: s, instructionIndex: n } = e;
      et(t.length === nc, `Public Key must be ${nc} bytes but received ${t.length} bytes`), et(s.length === sc, `Signature must be ${sc} bytes but received ${s.length} bytes`);
      const a = ic.span, l = a + t.length, d = l + s.length, p = 1, k = B.alloc(d + r.length), A = n ?? 65535;
      return ic.encode({
        numSignatures: p,
        padding: 0,
        signatureOffset: l,
        signatureInstructionIndex: A,
        publicKeyOffset: a,
        publicKeyInstructionIndex: A,
        messageDataOffset: d,
        messageDataSize: r.length,
        messageInstructionIndex: A
      }, k), k.fill(t, a), k.fill(s, l), k.fill(r, d), new ht({
        keys: [],
        programId: yl.programId,
        data: k
      });
    }
    static createInstructionWithPrivateKey(e) {
      const { privateKey: t, message: r, instructionIndex: s } = e;
      et(t.length === rc, `Private key must be ${rc} bytes but received ${t.length} bytes`);
      try {
        const n = ki.fromSecretKey(t), a = n.publicKey.toBytes(), l = sa(r, n.secretKey);
        return this.createInstructionWithPublicKey({
          publicKey: a,
          message: r,
          signature: l,
          instructionIndex: s
        });
      } catch (n) {
        throw new Error(`Error creating instruction; ${n}`);
      }
    }
  };
  pl.programId = new U("Ed25519SigVerify111111111111111111111111111");
  const tp = (o, e) => {
    const t = $n.sign(o, e);
    return [
      t.toCompactRawBytes(),
      t.recovery
    ];
  };
  $n.utils.isValidPrivateKey;
  const rp = $n.getPublicKey, oc = 32, oo = 20, ac = 64, np = 11, ao = m.struct([
    m.u8("numSignatures"),
    m.u16("signatureOffset"),
    m.u8("signatureInstructionIndex"),
    m.u16("ethAddressOffset"),
    m.u8("ethAddressInstructionIndex"),
    m.u16("messageDataOffset"),
    m.u16("messageDataSize"),
    m.u8("messageInstructionIndex"),
    m.blob(20, "ethAddress"),
    m.blob(64, "signature"),
    m.u8("recoveryId")
  ]);
  let ga = class ci {
    constructor() {
    }
    static publicKeyToEthAddress(e) {
      et(e.length === ac, `Public key must be ${ac} bytes but received ${e.length} bytes`);
      try {
        return B.from(gi(Xe(e))).slice(-oo);
      } catch (t) {
        throw new Error(`Error constructing Ethereum address: ${t}`);
      }
    }
    static createInstructionWithPublicKey(e) {
      const { publicKey: t, message: r, signature: s, recoveryId: n, instructionIndex: a } = e;
      return ci.createInstructionWithEthAddress({
        ethAddress: ci.publicKeyToEthAddress(t),
        message: r,
        signature: s,
        recoveryId: n,
        instructionIndex: a
      });
    }
    static createInstructionWithEthAddress(e) {
      const { ethAddress: t, message: r, signature: s, recoveryId: n, instructionIndex: a = 0 } = e;
      let l;
      typeof t == "string" ? t.startsWith("0x") ? l = B.from(t.substr(2), "hex") : l = B.from(t, "hex") : l = t, et(l.length === oo, `Address must be ${oo} bytes but received ${l.length} bytes`);
      const d = 1 + np, p = d, k = d + l.length, A = k + s.length + 1, E = 1, S = B.alloc(ao.span + r.length);
      return ao.encode({
        numSignatures: E,
        signatureOffset: k,
        signatureInstructionIndex: a,
        ethAddressOffset: p,
        ethAddressInstructionIndex: a,
        messageDataOffset: A,
        messageDataSize: r.length,
        messageInstructionIndex: a,
        signature: Xe(s),
        ethAddress: Xe(l),
        recoveryId: n
      }, S), S.fill(Xe(r), ao.span), new ht({
        keys: [],
        programId: ci.programId,
        data: S
      });
    }
    static createInstructionWithPrivateKey(e) {
      const { privateKey: t, message: r, instructionIndex: s } = e;
      et(t.length === oc, `Private key must be ${oc} bytes but received ${t.length} bytes`);
      try {
        const n = Xe(t), a = rp(n, false).slice(1), l = B.from(gi(Xe(r))), [d, p] = tp(l, n);
        return this.createInstructionWithPublicKey({
          publicKey: a,
          message: r,
          signature: d,
          recoveryId: p,
          instructionIndex: s
        });
      } catch (n) {
        throw new Error(`Error creating instruction; ${n}`);
      }
    }
  };
  ga.programId = new U("KeccakSecp256k11111111111111111111111111111");
  var ml;
  const bl = new U("StakeConfig11111111111111111111111111111111");
  let wl = class {
    constructor(e, t) {
      this.staker = void 0, this.withdrawer = void 0, this.staker = e, this.withdrawer = t;
    }
  }, Bs = class {
    constructor(e, t, r) {
      this.unixTimestamp = void 0, this.epoch = void 0, this.custodian = void 0, this.unixTimestamp = e, this.epoch = t, this.custodian = r;
    }
  };
  ml = Bs;
  Bs.default = new ml(0, 0, U.default);
  let sp = class {
    constructor() {
    }
    static decodeInstructionType(e) {
      this.checkProgramId(e.programId);
      const r = m.u32("instruction").decode(e.data);
      let s;
      for (const [n, a] of Object.entries(Ot)) if (a.index == r) {
        s = n;
        break;
      }
      if (!s) throw new Error("Instruction type incorrect; not a StakeInstruction");
      return s;
    }
    static decodeInitialize(e) {
      this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2);
      const { authorized: t, lockup: r } = ut(Ot.Initialize, e.data);
      return {
        stakePubkey: e.keys[0].pubkey,
        authorized: new wl(new U(t.staker), new U(t.withdrawer)),
        lockup: new Bs(r.unixTimestamp, r.epoch, new U(r.custodian))
      };
    }
    static decodeDelegate(e) {
      return this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 6), ut(Ot.Delegate, e.data), {
        stakePubkey: e.keys[0].pubkey,
        votePubkey: e.keys[1].pubkey,
        authorizedPubkey: e.keys[5].pubkey
      };
    }
    static decodeAuthorize(e) {
      this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
      const { newAuthorized: t, stakeAuthorizationType: r } = ut(Ot.Authorize, e.data), s = {
        stakePubkey: e.keys[0].pubkey,
        authorizedPubkey: e.keys[2].pubkey,
        newAuthorizedPubkey: new U(t),
        stakeAuthorizationType: {
          index: r
        }
      };
      return e.keys.length > 3 && (s.custodianPubkey = e.keys[3].pubkey), s;
    }
    static decodeAuthorizeWithSeed(e) {
      this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2);
      const { newAuthorized: t, stakeAuthorizationType: r, authoritySeed: s, authorityOwner: n } = ut(Ot.AuthorizeWithSeed, e.data), a = {
        stakePubkey: e.keys[0].pubkey,
        authorityBase: e.keys[1].pubkey,
        authoritySeed: s,
        authorityOwner: new U(n),
        newAuthorizedPubkey: new U(t),
        stakeAuthorizationType: {
          index: r
        }
      };
      return e.keys.length > 3 && (a.custodianPubkey = e.keys[3].pubkey), a;
    }
    static decodeSplit(e) {
      this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
      const { lamports: t } = ut(Ot.Split, e.data);
      return {
        stakePubkey: e.keys[0].pubkey,
        splitStakePubkey: e.keys[1].pubkey,
        authorizedPubkey: e.keys[2].pubkey,
        lamports: t
      };
    }
    static decodeMerge(e) {
      return this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3), ut(Ot.Merge, e.data), {
        stakePubkey: e.keys[0].pubkey,
        sourceStakePubKey: e.keys[1].pubkey,
        authorizedPubkey: e.keys[4].pubkey
      };
    }
    static decodeWithdraw(e) {
      this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 5);
      const { lamports: t } = ut(Ot.Withdraw, e.data), r = {
        stakePubkey: e.keys[0].pubkey,
        toPubkey: e.keys[1].pubkey,
        authorizedPubkey: e.keys[4].pubkey,
        lamports: t
      };
      return e.keys.length > 5 && (r.custodianPubkey = e.keys[5].pubkey), r;
    }
    static decodeDeactivate(e) {
      return this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3), ut(Ot.Deactivate, e.data), {
        stakePubkey: e.keys[0].pubkey,
        authorizedPubkey: e.keys[2].pubkey
      };
    }
    static checkProgramId(e) {
      if (!e.equals(Oi.programId)) throw new Error("invalid instruction; programId is not StakeProgram");
    }
    static checkKeyLength(e, t) {
      if (e.length < t) throw new Error(`invalid instruction; found ${e.length} keys, expected at least ${t}`);
    }
  };
  const Ot = Object.freeze({
    Initialize: {
      index: 0,
      layout: m.struct([
        m.u32("instruction"),
        rf(),
        nf()
      ])
    },
    Authorize: {
      index: 1,
      layout: m.struct([
        m.u32("instruction"),
        rt("newAuthorized"),
        m.u32("stakeAuthorizationType")
      ])
    },
    Delegate: {
      index: 2,
      layout: m.struct([
        m.u32("instruction")
      ])
    },
    Split: {
      index: 3,
      layout: m.struct([
        m.u32("instruction"),
        m.ns64("lamports")
      ])
    },
    Withdraw: {
      index: 4,
      layout: m.struct([
        m.u32("instruction"),
        m.ns64("lamports")
      ])
    },
    Deactivate: {
      index: 5,
      layout: m.struct([
        m.u32("instruction")
      ])
    },
    Merge: {
      index: 7,
      layout: m.struct([
        m.u32("instruction")
      ])
    },
    AuthorizeWithSeed: {
      index: 8,
      layout: m.struct([
        m.u32("instruction"),
        rt("newAuthorized"),
        m.u32("stakeAuthorizationType"),
        Qr("authoritySeed"),
        rt("authorityOwner")
      ])
    }
  }), ip = Object.freeze({
    Staker: {
      index: 0
    },
    Withdrawer: {
      index: 1
    }
  });
  let Oi = class {
    constructor() {
    }
    static initialize(e) {
      const { stakePubkey: t, authorized: r, lockup: s } = e, n = s || Bs.default, a = Ot.Initialize, l = st(a, {
        authorized: {
          staker: Xe(r.staker.toBuffer()),
          withdrawer: Xe(r.withdrawer.toBuffer())
        },
        lockup: {
          unixTimestamp: n.unixTimestamp,
          epoch: n.epoch,
          custodian: Xe(n.custodian.toBuffer())
        }
      }), d = {
        keys: [
          {
            pubkey: t,
            isSigner: false,
            isWritable: true
          },
          {
            pubkey: Yt,
            isSigner: false,
            isWritable: false
          }
        ],
        programId: this.programId,
        data: l
      };
      return new ht(d);
    }
    static createAccountWithSeed(e) {
      const t = new ct();
      t.add(St.createAccountWithSeed({
        fromPubkey: e.fromPubkey,
        newAccountPubkey: e.stakePubkey,
        basePubkey: e.basePubkey,
        seed: e.seed,
        lamports: e.lamports,
        space: this.space,
        programId: this.programId
      }));
      const { stakePubkey: r, authorized: s, lockup: n } = e;
      return t.add(this.initialize({
        stakePubkey: r,
        authorized: s,
        lockup: n
      }));
    }
    static createAccount(e) {
      const t = new ct();
      t.add(St.createAccount({
        fromPubkey: e.fromPubkey,
        newAccountPubkey: e.stakePubkey,
        lamports: e.lamports,
        space: this.space,
        programId: this.programId
      }));
      const { stakePubkey: r, authorized: s, lockup: n } = e;
      return t.add(this.initialize({
        stakePubkey: r,
        authorized: s,
        lockup: n
      }));
    }
    static delegate(e) {
      const { stakePubkey: t, authorizedPubkey: r, votePubkey: s } = e, n = Ot.Delegate, a = st(n);
      return new ct().add({
        keys: [
          {
            pubkey: t,
            isSigner: false,
            isWritable: true
          },
          {
            pubkey: s,
            isSigner: false,
            isWritable: false
          },
          {
            pubkey: Wt,
            isSigner: false,
            isWritable: false
          },
          {
            pubkey: oi,
            isSigner: false,
            isWritable: false
          },
          {
            pubkey: bl,
            isSigner: false,
            isWritable: false
          },
          {
            pubkey: r,
            isSigner: true,
            isWritable: false
          }
        ],
        programId: this.programId,
        data: a
      });
    }
    static authorize(e) {
      const { stakePubkey: t, authorizedPubkey: r, newAuthorizedPubkey: s, stakeAuthorizationType: n, custodianPubkey: a } = e, l = Ot.Authorize, d = st(l, {
        newAuthorized: Xe(s.toBuffer()),
        stakeAuthorizationType: n.index
      }), p = [
        {
          pubkey: t,
          isSigner: false,
          isWritable: true
        },
        {
          pubkey: Wt,
          isSigner: false,
          isWritable: true
        },
        {
          pubkey: r,
          isSigner: true,
          isWritable: false
        }
      ];
      return a && p.push({
        pubkey: a,
        isSigner: true,
        isWritable: false
      }), new ct().add({
        keys: p,
        programId: this.programId,
        data: d
      });
    }
    static authorizeWithSeed(e) {
      const { stakePubkey: t, authorityBase: r, authoritySeed: s, authorityOwner: n, newAuthorizedPubkey: a, stakeAuthorizationType: l, custodianPubkey: d } = e, p = Ot.AuthorizeWithSeed, k = st(p, {
        newAuthorized: Xe(a.toBuffer()),
        stakeAuthorizationType: l.index,
        authoritySeed: s,
        authorityOwner: Xe(n.toBuffer())
      }), A = [
        {
          pubkey: t,
          isSigner: false,
          isWritable: true
        },
        {
          pubkey: r,
          isSigner: true,
          isWritable: false
        },
        {
          pubkey: Wt,
          isSigner: false,
          isWritable: false
        }
      ];
      return d && A.push({
        pubkey: d,
        isSigner: true,
        isWritable: false
      }), new ct().add({
        keys: A,
        programId: this.programId,
        data: k
      });
    }
    static splitInstruction(e) {
      const { stakePubkey: t, authorizedPubkey: r, splitStakePubkey: s, lamports: n } = e, a = Ot.Split, l = st(a, {
        lamports: n
      });
      return new ht({
        keys: [
          {
            pubkey: t,
            isSigner: false,
            isWritable: true
          },
          {
            pubkey: s,
            isSigner: false,
            isWritable: true
          },
          {
            pubkey: r,
            isSigner: true,
            isWritable: false
          }
        ],
        programId: this.programId,
        data: l
      });
    }
    static split(e, t) {
      const r = new ct();
      return r.add(St.createAccount({
        fromPubkey: e.authorizedPubkey,
        newAccountPubkey: e.splitStakePubkey,
        lamports: t,
        space: this.space,
        programId: this.programId
      })), r.add(this.splitInstruction(e));
    }
    static splitWithSeed(e, t) {
      const { stakePubkey: r, authorizedPubkey: s, splitStakePubkey: n, basePubkey: a, seed: l, lamports: d } = e, p = new ct();
      return p.add(St.allocate({
        accountPubkey: n,
        basePubkey: a,
        seed: l,
        space: this.space,
        programId: this.programId
      })), t && t > 0 && p.add(St.transfer({
        fromPubkey: e.authorizedPubkey,
        toPubkey: n,
        lamports: t
      })), p.add(this.splitInstruction({
        stakePubkey: r,
        authorizedPubkey: s,
        splitStakePubkey: n,
        lamports: d
      }));
    }
    static merge(e) {
      const { stakePubkey: t, sourceStakePubKey: r, authorizedPubkey: s } = e, n = Ot.Merge, a = st(n);
      return new ct().add({
        keys: [
          {
            pubkey: t,
            isSigner: false,
            isWritable: true
          },
          {
            pubkey: r,
            isSigner: false,
            isWritable: true
          },
          {
            pubkey: Wt,
            isSigner: false,
            isWritable: false
          },
          {
            pubkey: oi,
            isSigner: false,
            isWritable: false
          },
          {
            pubkey: s,
            isSigner: true,
            isWritable: false
          }
        ],
        programId: this.programId,
        data: a
      });
    }
    static withdraw(e) {
      const { stakePubkey: t, authorizedPubkey: r, toPubkey: s, lamports: n, custodianPubkey: a } = e, l = Ot.Withdraw, d = st(l, {
        lamports: n
      }), p = [
        {
          pubkey: t,
          isSigner: false,
          isWritable: true
        },
        {
          pubkey: s,
          isSigner: false,
          isWritable: true
        },
        {
          pubkey: Wt,
          isSigner: false,
          isWritable: false
        },
        {
          pubkey: oi,
          isSigner: false,
          isWritable: false
        },
        {
          pubkey: r,
          isSigner: true,
          isWritable: false
        }
      ];
      return a && p.push({
        pubkey: a,
        isSigner: true,
        isWritable: false
      }), new ct().add({
        keys: p,
        programId: this.programId,
        data: d
      });
    }
    static deactivate(e) {
      const { stakePubkey: t, authorizedPubkey: r } = e, s = Ot.Deactivate, n = st(s);
      return new ct().add({
        keys: [
          {
            pubkey: t,
            isSigner: false,
            isWritable: true
          },
          {
            pubkey: Wt,
            isSigner: false,
            isWritable: false
          },
          {
            pubkey: r,
            isSigner: true,
            isWritable: false
          }
        ],
        programId: this.programId,
        data: n
      });
    }
  };
  Oi.programId = new U("Stake11111111111111111111111111111111111111");
  Oi.space = 200;
  let kl = class {
    constructor(e, t, r, s) {
      this.nodePubkey = void 0, this.authorizedVoter = void 0, this.authorizedWithdrawer = void 0, this.commission = void 0, this.nodePubkey = e, this.authorizedVoter = t, this.authorizedWithdrawer = r, this.commission = s;
    }
  }, op = class {
    constructor() {
    }
    static decodeInstructionType(e) {
      this.checkProgramId(e.programId);
      const r = m.u32("instruction").decode(e.data);
      let s;
      for (const [n, a] of Object.entries(or)) if (a.index == r) {
        s = n;
        break;
      }
      if (!s) throw new Error("Instruction type incorrect; not a VoteInstruction");
      return s;
    }
    static decodeInitializeAccount(e) {
      this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 4);
      const { voteInit: t } = ut(or.InitializeAccount, e.data);
      return {
        votePubkey: e.keys[0].pubkey,
        nodePubkey: e.keys[3].pubkey,
        voteInit: new kl(new U(t.nodePubkey), new U(t.authorizedVoter), new U(t.authorizedWithdrawer), t.commission)
      };
    }
    static decodeAuthorize(e) {
      this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
      const { newAuthorized: t, voteAuthorizationType: r } = ut(or.Authorize, e.data);
      return {
        votePubkey: e.keys[0].pubkey,
        authorizedPubkey: e.keys[2].pubkey,
        newAuthorizedPubkey: new U(t),
        voteAuthorizationType: {
          index: r
        }
      };
    }
    static decodeAuthorizeWithSeed(e) {
      this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
      const { voteAuthorizeWithSeedArgs: { currentAuthorityDerivedKeyOwnerPubkey: t, currentAuthorityDerivedKeySeed: r, newAuthorized: s, voteAuthorizationType: n } } = ut(or.AuthorizeWithSeed, e.data);
      return {
        currentAuthorityDerivedKeyBasePubkey: e.keys[2].pubkey,
        currentAuthorityDerivedKeyOwnerPubkey: new U(t),
        currentAuthorityDerivedKeySeed: r,
        newAuthorizedPubkey: new U(s),
        voteAuthorizationType: {
          index: n
        },
        votePubkey: e.keys[0].pubkey
      };
    }
    static decodeWithdraw(e) {
      this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
      const { lamports: t } = ut(or.Withdraw, e.data);
      return {
        votePubkey: e.keys[0].pubkey,
        authorizedWithdrawerPubkey: e.keys[2].pubkey,
        lamports: t,
        toPubkey: e.keys[1].pubkey
      };
    }
    static checkProgramId(e) {
      if (!e.equals(Ni.programId)) throw new Error("invalid instruction; programId is not VoteProgram");
    }
    static checkKeyLength(e, t) {
      if (e.length < t) throw new Error(`invalid instruction; found ${e.length} keys, expected at least ${t}`);
    }
  };
  const or = Object.freeze({
    InitializeAccount: {
      index: 0,
      layout: m.struct([
        m.u32("instruction"),
        sf()
      ])
    },
    Authorize: {
      index: 1,
      layout: m.struct([
        m.u32("instruction"),
        rt("newAuthorized"),
        m.u32("voteAuthorizationType")
      ])
    },
    Withdraw: {
      index: 3,
      layout: m.struct([
        m.u32("instruction"),
        m.ns64("lamports")
      ])
    },
    UpdateValidatorIdentity: {
      index: 4,
      layout: m.struct([
        m.u32("instruction")
      ])
    },
    AuthorizeWithSeed: {
      index: 10,
      layout: m.struct([
        m.u32("instruction"),
        of()
      ])
    }
  }), ap = Object.freeze({
    Voter: {
      index: 0
    },
    Withdrawer: {
      index: 1
    }
  });
  let Ni = class vl {
    constructor() {
    }
    static initializeAccount(e) {
      const { votePubkey: t, nodePubkey: r, voteInit: s } = e, n = or.InitializeAccount, a = st(n, {
        voteInit: {
          nodePubkey: Xe(s.nodePubkey.toBuffer()),
          authorizedVoter: Xe(s.authorizedVoter.toBuffer()),
          authorizedWithdrawer: Xe(s.authorizedWithdrawer.toBuffer()),
          commission: s.commission
        }
      }), l = {
        keys: [
          {
            pubkey: t,
            isSigner: false,
            isWritable: true
          },
          {
            pubkey: Yt,
            isSigner: false,
            isWritable: false
          },
          {
            pubkey: Wt,
            isSigner: false,
            isWritable: false
          },
          {
            pubkey: r,
            isSigner: true,
            isWritable: false
          }
        ],
        programId: this.programId,
        data: a
      };
      return new ht(l);
    }
    static createAccount(e) {
      const t = new ct();
      return t.add(St.createAccount({
        fromPubkey: e.fromPubkey,
        newAccountPubkey: e.votePubkey,
        lamports: e.lamports,
        space: this.space,
        programId: this.programId
      })), t.add(this.initializeAccount({
        votePubkey: e.votePubkey,
        nodePubkey: e.voteInit.nodePubkey,
        voteInit: e.voteInit
      }));
    }
    static authorize(e) {
      const { votePubkey: t, authorizedPubkey: r, newAuthorizedPubkey: s, voteAuthorizationType: n } = e, a = or.Authorize, l = st(a, {
        newAuthorized: Xe(s.toBuffer()),
        voteAuthorizationType: n.index
      }), d = [
        {
          pubkey: t,
          isSigner: false,
          isWritable: true
        },
        {
          pubkey: Wt,
          isSigner: false,
          isWritable: false
        },
        {
          pubkey: r,
          isSigner: true,
          isWritable: false
        }
      ];
      return new ct().add({
        keys: d,
        programId: this.programId,
        data: l
      });
    }
    static authorizeWithSeed(e) {
      const { currentAuthorityDerivedKeyBasePubkey: t, currentAuthorityDerivedKeyOwnerPubkey: r, currentAuthorityDerivedKeySeed: s, newAuthorizedPubkey: n, voteAuthorizationType: a, votePubkey: l } = e, d = or.AuthorizeWithSeed, p = st(d, {
        voteAuthorizeWithSeedArgs: {
          currentAuthorityDerivedKeyOwnerPubkey: Xe(r.toBuffer()),
          currentAuthorityDerivedKeySeed: s,
          newAuthorized: Xe(n.toBuffer()),
          voteAuthorizationType: a.index
        }
      }), k = [
        {
          pubkey: l,
          isSigner: false,
          isWritable: true
        },
        {
          pubkey: Wt,
          isSigner: false,
          isWritable: false
        },
        {
          pubkey: t,
          isSigner: true,
          isWritable: false
        }
      ];
      return new ct().add({
        keys: k,
        programId: this.programId,
        data: p
      });
    }
    static withdraw(e) {
      const { votePubkey: t, authorizedWithdrawerPubkey: r, lamports: s, toPubkey: n } = e, a = or.Withdraw, l = st(a, {
        lamports: s
      }), d = [
        {
          pubkey: t,
          isSigner: false,
          isWritable: true
        },
        {
          pubkey: n,
          isSigner: false,
          isWritable: true
        },
        {
          pubkey: r,
          isSigner: true,
          isWritable: false
        }
      ];
      return new ct().add({
        keys: d,
        programId: this.programId,
        data: l
      });
    }
    static safeWithdraw(e, t, r) {
      if (e.lamports > t - r) throw new Error("Withdraw will leave vote account with insufficient funds.");
      return vl.withdraw(e);
    }
    static updateValidatorIdentity(e) {
      const { votePubkey: t, authorizedWithdrawerPubkey: r, nodePubkey: s } = e, n = or.UpdateValidatorIdentity, a = st(n), l = [
        {
          pubkey: t,
          isSigner: false,
          isWritable: true
        },
        {
          pubkey: s,
          isSigner: true,
          isWritable: false
        },
        {
          pubkey: r,
          isSigner: true,
          isWritable: false
        }
      ];
      return new ct().add({
        keys: l,
        programId: this.programId,
        data: a
      });
    }
  };
  Ni.programId = new U("Vote111111111111111111111111111111111111111");
  Ni.space = 3762;
  const Sl = new U("Va1idator1nfo111111111111111111111111111111"), cp = z({
    name: F(),
    website: se(F()),
    details: se(F()),
    iconUrl: se(F()),
    keybaseUsername: se(F())
  });
  let up = class _l {
    constructor(e, t) {
      this.key = void 0, this.info = void 0, this.key = e, this.info = t;
    }
    static fromConfigData(e) {
      let t = [
        ...e
      ];
      if ($t(t) !== 2) return null;
      const s = [];
      for (let n = 0; n < 2; n++) {
        const a = new U(Pt(t, 0, Gt)), l = Mt(t) === 1;
        s.push({
          publicKey: a,
          isSigner: l
        });
      }
      if (s[0].publicKey.equals(Sl) && s[1].isSigner) {
        const n = Qr().decode(B.from(t)), a = JSON.parse(n);
        return od(a, cp), new _l(s[1].publicKey, a);
      }
      return null;
    }
  };
  const lp = new U("Vote111111111111111111111111111111111111111"), hp = m.struct([
    rt("nodePubkey"),
    rt("authorizedWithdrawer"),
    m.u8("commission"),
    m.nu64(),
    m.seq(m.struct([
      m.nu64("slot"),
      m.u32("confirmationCount")
    ]), m.offset(m.u32(), -8), "votes"),
    m.u8("rootSlotValid"),
    m.nu64("rootSlot"),
    m.nu64(),
    m.seq(m.struct([
      m.nu64("epoch"),
      rt("authorizedVoter")
    ]), m.offset(m.u32(), -8), "authorizedVoters"),
    m.struct([
      m.seq(m.struct([
        rt("authorizedPubkey"),
        m.nu64("epochOfLastAuthorizedSwitch"),
        m.nu64("targetEpoch")
      ]), 32, "buf"),
      m.nu64("idx"),
      m.u8("isEmpty")
    ], "priorVoters"),
    m.nu64(),
    m.seq(m.struct([
      m.nu64("epoch"),
      m.nu64("credits"),
      m.nu64("prevCredits")
    ]), m.offset(m.u32(), -8), "epochCredits"),
    m.struct([
      m.nu64("slot"),
      m.nu64("timestamp")
    ], "lastTimestamp")
  ]);
  let dp = class Al {
    constructor(e) {
      this.nodePubkey = void 0, this.authorizedWithdrawer = void 0, this.commission = void 0, this.rootSlot = void 0, this.votes = void 0, this.authorizedVoters = void 0, this.priorVoters = void 0, this.epochCredits = void 0, this.lastTimestamp = void 0, this.nodePubkey = e.nodePubkey, this.authorizedWithdrawer = e.authorizedWithdrawer, this.commission = e.commission, this.rootSlot = e.rootSlot, this.votes = e.votes, this.authorizedVoters = e.authorizedVoters, this.priorVoters = e.priorVoters, this.epochCredits = e.epochCredits, this.lastTimestamp = e.lastTimestamp;
    }
    static fromAccountData(e) {
      const r = hp.decode(Xe(e), 4);
      let s = r.rootSlot;
      return r.rootSlotValid || (s = null), new Al({
        nodePubkey: new U(r.nodePubkey),
        authorizedWithdrawer: new U(r.authorizedWithdrawer),
        commission: r.commission,
        votes: r.votes,
        rootSlot: s,
        authorizedVoters: r.authorizedVoters.map(fp),
        priorVoters: gp(r.priorVoters),
        epochCredits: r.epochCredits,
        lastTimestamp: r.lastTimestamp
      });
    }
  };
  function fp({ authorizedVoter: o, epoch: e }) {
    return {
      epoch: e,
      authorizedVoter: new U(o)
    };
  }
  function cc({ authorizedPubkey: o, epochOfLastAuthorizedSwitch: e, targetEpoch: t }) {
    return {
      authorizedPubkey: new U(o),
      epochOfLastAuthorizedSwitch: e,
      targetEpoch: t
    };
  }
  function gp({ buf: o, idx: e, isEmpty: t }) {
    return t ? [] : [
      ...o.slice(e + 1).map(cc),
      ...o.slice(0, e).map(cc)
    ];
  }
  const uc = {
    http: {
      devnet: "http://api.devnet.solana.com",
      testnet: "http://api.testnet.solana.com",
      "mainnet-beta": "http://api.mainnet-beta.solana.com/"
    },
    https: {
      devnet: "https://api.devnet.solana.com",
      testnet: "https://api.testnet.solana.com",
      "mainnet-beta": "https://api.mainnet-beta.solana.com/"
    }
  };
  function pp(o, e) {
    const t = e === false ? "http" : "https";
    if (!o) return uc[t].devnet;
    const r = uc[t][o];
    if (!r) throw new Error(`Unknown ${t} cluster: ${o}`);
    return r;
  }
  async function yp(o, e, t, r) {
    let s, n;
    t && Object.prototype.hasOwnProperty.call(t, "lastValidBlockHeight") || t && Object.prototype.hasOwnProperty.call(t, "nonceValue") ? (s = t, n = r) : n = t;
    const a = n && {
      skipPreflight: n.skipPreflight,
      preflightCommitment: n.preflightCommitment || n.commitment,
      minContextSlot: n.minContextSlot
    }, l = await o.sendRawTransaction(e, a), d = n && n.commitment, k = (await (s ? o.confirmTransaction(s, d) : o.confirmTransaction(l, d))).value;
    if (k.err) throw l != null ? new Is({
      action: (a == null ? void 0 : a.skipPreflight) ? "send" : "simulate",
      signature: l,
      transactionMessage: `Status: (${JSON.stringify(k)})`
    }) : new Error(`Raw transaction ${l} failed (${JSON.stringify(k)})`);
    return l;
  }
  const mp = 1e9, bp = Object.freeze(Object.defineProperty({
    __proto__: null,
    Account: Xd,
    AddressLookupTableAccount: No,
    AddressLookupTableInstruction: Qg,
    AddressLookupTableProgram: da,
    Authorized: wl,
    BLOCKHASH_CACHE_TIMEOUT_MS: sl,
    BPF_LOADER_DEPRECATED_PROGRAM_ID: Qd,
    BPF_LOADER_PROGRAM_ID: Af,
    BpfLoader: If,
    COMPUTE_BUDGET_INSTRUCTION_LAYOUTS: ir,
    ComputeBudgetInstruction: ep,
    ComputeBudgetProgram: fa,
    Connection: Xg,
    Ed25519Program: pl,
    Enum: Zd,
    EpochSchedule: rl,
    FeeCalculatorLayout: Xu,
    Keypair: ki,
    LAMPORTS_PER_SOL: mp,
    LOOKUP_TABLE_INSTRUCTION_LAYOUTS: br,
    Loader: bi,
    Lockup: Bs,
    MAX_SEED_LENGTH: Du,
    Message: Rr,
    MessageAccountKeys: Cn,
    MessageV0: Li,
    MessageV1: ca,
    NONCE_ACCOUNT_LENGTH: Co,
    NonceAccount: el,
    PACKET_DATA_SIZE: Ar,
    PUBLIC_KEY_LENGTH: Gt,
    PublicKey: U,
    SIGNATURE_LENGTH_IN_BYTES: Sr,
    SOLANA_SCHEMA: ks,
    STAKE_CONFIG_ID: bl,
    STAKE_INSTRUCTION_LAYOUTS: Ot,
    SYSTEM_INSTRUCTION_LAYOUTS: pt,
    SYSVAR_CLOCK_PUBKEY: Wt,
    SYSVAR_EPOCH_SCHEDULE_PUBKEY: mf,
    SYSVAR_INSTRUCTIONS_PUBKEY: Ju,
    SYSVAR_RECENT_BLOCKHASHES_PUBKEY: ii,
    SYSVAR_RENT_PUBKEY: Yt,
    SYSVAR_REWARDS_PUBKEY: bf,
    SYSVAR_SLOT_HASHES_PUBKEY: wf,
    SYSVAR_SLOT_HISTORY_PUBKEY: kf,
    SYSVAR_STAKE_HISTORY_PUBKEY: oi,
    Secp256k1Program: ga,
    SendTransactionError: Is,
    SolanaJSONRPCError: te,
    SolanaJSONRPCErrorCode: vf,
    StakeAuthorizationLayout: ip,
    StakeInstruction: sp,
    StakeProgram: Oi,
    Struct: ia,
    SystemInstruction: Sf,
    SystemProgram: St,
    Transaction: ct,
    TransactionExpiredBlockheightExceededError: oa,
    TransactionExpiredNonceInvalidError: vn,
    TransactionExpiredTimeoutError: aa,
    TransactionInstruction: ht,
    TransactionMessage: df,
    TransactionStatus: pr,
    V1_TRANSACTION_SIZE_LIMIT: ef,
    VALIDATOR_INFO_KEY: Sl,
    VERSION_1_MESSAGE_PREFIX: qu,
    VERSION_PREFIX_MASK: Cs,
    VOTE_PROGRAM_ID: lp,
    ValidatorInfo: up,
    VersionedMessage: mi,
    VersionedTransaction: ff,
    VoteAccount: dp,
    VoteAuthorizationLayout: ap,
    VoteInit: kl,
    VoteInstruction: op,
    VoteProgram: Ni,
    clusterApiUrl: pp,
    sendAndConfirmRawTransaction: yp,
    sendAndConfirmTransaction: Lo
  }, Symbol.toStringTag, {
    value: "Module"
  })), Il = [
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
      ...Wa
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
      ...Wa
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
  function El(o) {
    return cd(Il, o);
  }
  qn = function(o, e, t, r) {
    const s = typeof e == "string" ? he.from(e, "hex") : he.from(e);
    if (s.length != 32) throw Error("address.length != 32");
    const n = he.alloc(8);
    return n.writeBigUInt64BE(typeof r == "number" ? BigInt(r) : r), Pr([
      s,
      (() => {
        const a = he.alloc(2);
        return a.writeUInt16BE(t), a;
      })(),
      n
    ], o);
  };
  wp = async function(o, e, t, r, s, n) {
    return o.getAccountInfo(qn(e, t, r, s), n).then((a) => !!Ls(a)[0]);
  };
  function hr(o) {
    return Pr([
      he.from("Bridge")
    ], o);
  }
  async function Rl(o, e, t) {
    return o.getAccountInfo(hr(e), t).then((r) => Ki.deserialize(Ls(r)));
  }
  class zi {
    constructor(e, t) {
      __publicField(this, "guardianSetExpirationTime");
      __publicField(this, "fee");
      this.guardianSetExpirationTime = e, this.fee = t;
    }
    static deserialize(e) {
      if (e.length != 12) throw new Error("data.length != 12");
      const t = e.readUInt32LE(0), r = e.readBigUInt64LE(4);
      return new zi(t, r);
    }
  }
  class Ki {
    constructor(e, t, r) {
      __publicField(this, "guardianSetIndex");
      __publicField(this, "lastLamports");
      __publicField(this, "config");
      this.guardianSetIndex = e, this.lastLamports = t, this.config = r;
    }
    static deserialize(e) {
      if (e.length != 24) throw new Error("data.length != 24");
      const t = e.readUInt32LE(0), r = e.readBigUInt64LE(4), s = zi.deserialize(e.subarray(12));
      return new Ki(t, r, s);
    }
  }
  function $i(o, e) {
    return Pr([
      he.from("Sequence"),
      new U(o).toBytes()
    ], e);
  }
  async function Ml(o, e, t, r) {
    return o.getAccountInfo($i(e, t), r).then((s) => Ui.deserialize(Ls(s)));
  }
  class Ui {
    constructor(e, t, r) {
      __publicField(this, "sequence");
      __publicField(this, "bump");
      __publicField(this, "emitterType");
      this.sequence = e, this.bump = t, this.emitterType = r;
    }
    static deserialize(e) {
      if (e.length !== 8 && e.length !== 10) throw new Error("data.length != 8 or data.length != 10");
      let t, r;
      const s = e.readBigUInt64LE(0);
      return e.length === 10 && (t = e[8], r = e[9]), new Ui(s, t, r);
    }
    value() {
      return this.sequence;
    }
  }
  function pa(o) {
    return Pr([
      he.from("emitter")
    ], o);
  }
  function ya(o, e) {
    const t = pa(o);
    return {
      emitter: t,
      sequence: $i(t, e)
    };
  }
  async function kp(o, e, t, r) {
    return Ml(o, pa(e), t, r);
  }
  function Vn(o) {
    return Pr([
      he.from("fee_collector")
    ], o);
  }
  const lc = 65, vs = 20;
  function vp(o, e, t) {
    return new ht({
      keys: [],
      programId: ga.programId,
      data: Sp.serialize(o, e, t)
    });
  }
  class Sp {
    static serialize(e, t, r) {
      if (e.length == 0) throw Error("signatures.length == 0");
      if (e.length != t.length) throw Error("signatures.length != keys.length");
      if (r.length != 32) throw Error("message.length != 32");
      const s = e.length, n = 11, a = 1 + s * n, l = lc + vs, d = a + s * l, p = 32, k = he.alloc(d + p);
      k.writeUInt8(s, 0), k.write(r.toString("hex"), d, "hex");
      for (let A = 0; A < s; ++A) {
        const E = e.at(A);
        if ((E == null ? void 0 : E.length) != lc) throw Error(`signatures[${A}].length != 65`);
        const S = t.at(A);
        if ((S == null ? void 0 : S.length) != vs) throw Error(`keys[${A}].length != 20`);
        const I = a + l * A, R = I + 65;
        k.writeUInt16LE(I, 1 + A * n), k.writeUInt8(0, 3 + A * n), k.writeUInt16LE(R, 4 + A * n), k.writeUInt8(0, 6 + A * n), k.writeUInt16LE(d, 7 + A * n), k.writeUInt16LE(p, 9 + A * n), k.writeUInt8(0, 10 + A * n), k.write(E.toString("hex"), I, "hex"), k.write(S.toString("hex"), R, "hex");
      }
      return k;
    }
  }
  function sn(o, e) {
    return Pr([
      he.from("GuardianSet"),
      (() => {
        const t = he.alloc(4);
        return t.writeUInt32BE(e), t;
      })()
    ], o);
  }
  async function ma(o, e, t, r) {
    return o.getAccountInfo(sn(e, t), r).then((s) => Wi.deserialize(Ls(s)));
  }
  class Wi {
    constructor(e, t, r, s) {
      __publicField(this, "index");
      __publicField(this, "keys");
      __publicField(this, "creationTime");
      __publicField(this, "expirationTime");
      this.index = e, this.keys = t, this.creationTime = r, this.expirationTime = s;
    }
    static deserialize(e) {
      const t = e.readUInt32LE(0), r = e.readUInt32LE(4), s = 8 + r * vs, n = e.readUInt32LE(s), a = e.readUInt32LE(4 + s), l = [];
      for (let d = 0; d < r; ++d) {
        const p = 8 + d * vs;
        l.push(e.subarray(p, p + vs));
      }
      return new Wi(t, l, n, a);
    }
  }
  dn = function(o, e) {
    return Pr([
      he.from("PostedVAA"),
      e
    ], o);
  };
  async function _p(o, e, t) {
    return o.getAccountInfo(new U(e), t).then((r) => Di.deserialize(Ls(r)));
  }
  class Di {
    constructor(e, t, r) {
      __publicField(this, "signatures");
      __publicField(this, "hash");
      __publicField(this, "guardianSetIndex");
      this.signatures = e, this.hash = t, this.guardianSetIndex = r;
    }
    static deserialize(e) {
      const t = e.readUInt32LE(0), r = [
        ...e.subarray(4, 4 + t)
      ].map((l) => l != 0), s = 4 + t, n = e.subarray(s, s + 32), a = e.readUInt32LE(s + 32);
      return new Di(r, n, a);
    }
  }
  xl = function(o) {
    return Pr([
      he.from("upgrade")
    ], o);
  };
  Pl = function(o, e, t) {
    return St.transfer({
      fromPubkey: new U(e),
      toPubkey: Vn(o),
      lamports: t
    });
  };
  var ui = {
    exports: {}
  }, Ap = ui.exports, hc;
  function Ip() {
    return hc || (hc = 1, (function(o) {
      (function(e, t) {
        function r(f, i) {
          if (!f) throw new Error(i || "Assertion failed");
        }
        function s(f, i) {
          f.super_ = i;
          var c = function() {
          };
          c.prototype = i.prototype, f.prototype = new c(), f.prototype.constructor = f;
        }
        function n(f, i, c) {
          if (n.isBN(f)) return f;
          this.negative = 0, this.words = null, this.length = 0, this.red = null, f !== null && ((i === "le" || i === "be") && (c = i, i = 10), this._init(f || 0, i || 10, c || "be"));
        }
        typeof e == "object" ? e.exports = n : t.BN = n, n.BN = n, n.wordSize = 26;
        var a;
        try {
          typeof window < "u" && typeof window.Buffer < "u" ? a = window.Buffer : a = Pu().Buffer;
        } catch {
        }
        n.isBN = function(i) {
          return i instanceof n ? true : i !== null && typeof i == "object" && i.constructor.wordSize === n.wordSize && Array.isArray(i.words);
        }, n.max = function(i, c) {
          return i.cmp(c) > 0 ? i : c;
        }, n.min = function(i, c) {
          return i.cmp(c) < 0 ? i : c;
        }, n.prototype._init = function(i, c, h) {
          if (typeof i == "number") return this._initNumber(i, c, h);
          if (typeof i == "object") return this._initArray(i, c, h);
          c === "hex" && (c = 16), r(c === (c | 0) && c >= 2 && c <= 36), i = i.toString().replace(/\s+/g, "");
          var g = 0;
          i[0] === "-" && (g++, this.negative = 1), g < i.length && (c === 16 ? this._parseHex(i, g, h) : (this._parseBase(i, c, g), h === "le" && this._initArray(this.toArray(), c, h)));
        }, n.prototype._initNumber = function(i, c, h) {
          i < 0 && (this.negative = 1, i = -i), i < 67108864 ? (this.words = [
            i & 67108863
          ], this.length = 1) : i < 4503599627370496 ? (this.words = [
            i & 67108863,
            i / 67108864 & 67108863
          ], this.length = 2) : (r(i < 9007199254740992), this.words = [
            i & 67108863,
            i / 67108864 & 67108863,
            1
          ], this.length = 3), h === "le" && this._initArray(this.toArray(), c, h);
        }, n.prototype._initArray = function(i, c, h) {
          if (r(typeof i.length == "number"), i.length <= 0) return this.words = [
            0
          ], this.length = 1, this;
          this.length = Math.ceil(i.length / 3), this.words = new Array(this.length);
          for (var g = 0; g < this.length; g++) this.words[g] = 0;
          var w, v, _ = 0;
          if (h === "be") for (g = i.length - 1, w = 0; g >= 0; g -= 3) v = i[g] | i[g - 1] << 8 | i[g - 2] << 16, this.words[w] |= v << _ & 67108863, this.words[w + 1] = v >>> 26 - _ & 67108863, _ += 24, _ >= 26 && (_ -= 26, w++);
          else if (h === "le") for (g = 0, w = 0; g < i.length; g += 3) v = i[g] | i[g + 1] << 8 | i[g + 2] << 16, this.words[w] |= v << _ & 67108863, this.words[w + 1] = v >>> 26 - _ & 67108863, _ += 24, _ >= 26 && (_ -= 26, w++);
          return this._strip();
        };
        function l(f, i) {
          var c = f.charCodeAt(i);
          if (c >= 48 && c <= 57) return c - 48;
          if (c >= 65 && c <= 70) return c - 55;
          if (c >= 97 && c <= 102) return c - 87;
          r(false, "Invalid character in " + f);
        }
        function d(f, i, c) {
          var h = l(f, c);
          return c - 1 >= i && (h |= l(f, c - 1) << 4), h;
        }
        n.prototype._parseHex = function(i, c, h) {
          this.length = Math.ceil((i.length - c) / 6), this.words = new Array(this.length);
          for (var g = 0; g < this.length; g++) this.words[g] = 0;
          var w = 0, v = 0, _;
          if (h === "be") for (g = i.length - 1; g >= c; g -= 2) _ = d(i, c, g) << w, this.words[v] |= _ & 67108863, w >= 18 ? (w -= 18, v += 1, this.words[v] |= _ >>> 26) : w += 8;
          else {
            var y = i.length - c;
            for (g = y % 2 === 0 ? c + 1 : c; g < i.length; g += 2) _ = d(i, c, g) << w, this.words[v] |= _ & 67108863, w >= 18 ? (w -= 18, v += 1, this.words[v] |= _ >>> 26) : w += 8;
          }
          this._strip();
        };
        function p(f, i, c, h) {
          for (var g = 0, w = 0, v = Math.min(f.length, c), _ = i; _ < v; _++) {
            var y = f.charCodeAt(_) - 48;
            g *= h, y >= 49 ? w = y - 49 + 10 : y >= 17 ? w = y - 17 + 10 : w = y, r(y >= 0 && w < h, "Invalid character"), g += w;
          }
          return g;
        }
        n.prototype._parseBase = function(i, c, h) {
          this.words = [
            0
          ], this.length = 1;
          for (var g = 0, w = 1; w <= 67108863; w *= c) g++;
          g--, w = w / c | 0;
          for (var v = i.length - h, _ = v % g, y = Math.min(v, v - _) + h, u = 0, b = h; b < y; b += g) u = p(i, b, b + g, c), this.imuln(w), this.words[0] + u < 67108864 ? this.words[0] += u : this._iaddn(u);
          if (_ !== 0) {
            var q = 1;
            for (u = p(i, b, i.length, c), b = 0; b < _; b++) q *= c;
            this.imuln(q), this.words[0] + u < 67108864 ? this.words[0] += u : this._iaddn(u);
          }
          this._strip();
        }, n.prototype.copy = function(i) {
          i.words = new Array(this.length);
          for (var c = 0; c < this.length; c++) i.words[c] = this.words[c];
          i.length = this.length, i.negative = this.negative, i.red = this.red;
        };
        function k(f, i) {
          f.words = i.words, f.length = i.length, f.negative = i.negative, f.red = i.red;
        }
        if (n.prototype._move = function(i) {
          k(i, this);
        }, n.prototype.clone = function() {
          var i = new n(null);
          return this.copy(i), i;
        }, n.prototype._expand = function(i) {
          for (; this.length < i; ) this.words[this.length++] = 0;
          return this;
        }, n.prototype._strip = function() {
          for (; this.length > 1 && this.words[this.length - 1] === 0; ) this.length--;
          return this._normSign();
        }, n.prototype._normSign = function() {
          return this.length === 1 && this.words[0] === 0 && (this.negative = 0), this;
        }, typeof Symbol < "u" && typeof Symbol.for == "function") try {
          n.prototype[Symbol.for("nodejs.util.inspect.custom")] = A;
        } catch {
          n.prototype.inspect = A;
        }
        else n.prototype.inspect = A;
        function A() {
          return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
        }
        var E = [
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
        ], S = [
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
        ], I = [
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
        n.prototype.toString = function(i, c) {
          i = i || 10, c = c | 0 || 1;
          var h;
          if (i === 16 || i === "hex") {
            h = "";
            for (var g = 0, w = 0, v = 0; v < this.length; v++) {
              var _ = this.words[v], y = ((_ << g | w) & 16777215).toString(16);
              w = _ >>> 24 - g & 16777215, g += 2, g >= 26 && (g -= 26, v--), w !== 0 || v !== this.length - 1 ? h = E[6 - y.length] + y + h : h = y + h;
            }
            for (w !== 0 && (h = w.toString(16) + h); h.length % c !== 0; ) h = "0" + h;
            return this.negative !== 0 && (h = "-" + h), h;
          }
          if (i === (i | 0) && i >= 2 && i <= 36) {
            var u = S[i], b = I[i];
            h = "";
            var q = this.clone();
            for (q.negative = 0; !q.isZero(); ) {
              var W = q.modrn(b).toString(i);
              q = q.idivn(b), q.isZero() ? h = W + h : h = E[u - W.length] + W + h;
            }
            for (this.isZero() && (h = "0" + h); h.length % c !== 0; ) h = "0" + h;
            return this.negative !== 0 && (h = "-" + h), h;
          }
          r(false, "Base should be between 2 and 36");
        }, n.prototype.toNumber = function() {
          var i = this.words[0];
          return this.length === 2 ? i += this.words[1] * 67108864 : this.length === 3 && this.words[2] === 1 ? i += 4503599627370496 + this.words[1] * 67108864 : this.length > 2 && r(false, "Number can only safely store up to 53 bits"), this.negative !== 0 ? -i : i;
        }, n.prototype.toJSON = function() {
          return this.toString(16, 2);
        }, a && (n.prototype.toBuffer = function(i, c) {
          return this.toArrayLike(a, i, c);
        }), n.prototype.toArray = function(i, c) {
          return this.toArrayLike(Array, i, c);
        };
        var R = function(i, c) {
          return i.allocUnsafe ? i.allocUnsafe(c) : new i(c);
        };
        n.prototype.toArrayLike = function(i, c, h) {
          this._strip();
          var g = this.byteLength(), w = h || Math.max(1, g);
          r(g <= w, "byte array longer than desired length"), r(w > 0, "Requested array length <= 0");
          var v = R(i, w), _ = c === "le" ? "LE" : "BE";
          return this["_toArrayLike" + _](v, g), v;
        }, n.prototype._toArrayLikeLE = function(i, c) {
          for (var h = 0, g = 0, w = 0, v = 0; w < this.length; w++) {
            var _ = this.words[w] << v | g;
            i[h++] = _ & 255, h < i.length && (i[h++] = _ >> 8 & 255), h < i.length && (i[h++] = _ >> 16 & 255), v === 6 ? (h < i.length && (i[h++] = _ >> 24 & 255), g = 0, v = 0) : (g = _ >>> 24, v += 2);
          }
          if (h < i.length) for (i[h++] = g; h < i.length; ) i[h++] = 0;
        }, n.prototype._toArrayLikeBE = function(i, c) {
          for (var h = i.length - 1, g = 0, w = 0, v = 0; w < this.length; w++) {
            var _ = this.words[w] << v | g;
            i[h--] = _ & 255, h >= 0 && (i[h--] = _ >> 8 & 255), h >= 0 && (i[h--] = _ >> 16 & 255), v === 6 ? (h >= 0 && (i[h--] = _ >> 24 & 255), g = 0, v = 0) : (g = _ >>> 24, v += 2);
          }
          if (h >= 0) for (i[h--] = g; h >= 0; ) i[h--] = 0;
        }, Math.clz32 ? n.prototype._countBits = function(i) {
          return 32 - Math.clz32(i);
        } : n.prototype._countBits = function(i) {
          var c = i, h = 0;
          return c >= 4096 && (h += 13, c >>>= 13), c >= 64 && (h += 7, c >>>= 7), c >= 8 && (h += 4, c >>>= 4), c >= 2 && (h += 2, c >>>= 2), h + c;
        }, n.prototype._zeroBits = function(i) {
          if (i === 0) return 26;
          var c = i, h = 0;
          return (c & 8191) === 0 && (h += 13, c >>>= 13), (c & 127) === 0 && (h += 7, c >>>= 7), (c & 15) === 0 && (h += 4, c >>>= 4), (c & 3) === 0 && (h += 2, c >>>= 2), (c & 1) === 0 && h++, h;
        }, n.prototype.bitLength = function() {
          var i = this.words[this.length - 1], c = this._countBits(i);
          return (this.length - 1) * 26 + c;
        };
        function M(f) {
          for (var i = new Array(f.bitLength()), c = 0; c < i.length; c++) {
            var h = c / 26 | 0, g = c % 26;
            i[c] = f.words[h] >>> g & 1;
          }
          return i;
        }
        n.prototype.zeroBits = function() {
          if (this.isZero()) return 0;
          for (var i = 0, c = 0; c < this.length; c++) {
            var h = this._zeroBits(this.words[c]);
            if (i += h, h !== 26) break;
          }
          return i;
        }, n.prototype.byteLength = function() {
          return Math.ceil(this.bitLength() / 8);
        }, n.prototype.toTwos = function(i) {
          return this.negative !== 0 ? this.abs().inotn(i).iaddn(1) : this.clone();
        }, n.prototype.fromTwos = function(i) {
          return this.testn(i - 1) ? this.notn(i).iaddn(1).ineg() : this.clone();
        }, n.prototype.isNeg = function() {
          return this.negative !== 0;
        }, n.prototype.neg = function() {
          return this.clone().ineg();
        }, n.prototype.ineg = function() {
          return this.isZero() || (this.negative ^= 1), this;
        }, n.prototype.iuor = function(i) {
          for (; this.length < i.length; ) this.words[this.length++] = 0;
          for (var c = 0; c < i.length; c++) this.words[c] = this.words[c] | i.words[c];
          return this._strip();
        }, n.prototype.ior = function(i) {
          return r((this.negative | i.negative) === 0), this.iuor(i);
        }, n.prototype.or = function(i) {
          return this.length > i.length ? this.clone().ior(i) : i.clone().ior(this);
        }, n.prototype.uor = function(i) {
          return this.length > i.length ? this.clone().iuor(i) : i.clone().iuor(this);
        }, n.prototype.iuand = function(i) {
          var c;
          this.length > i.length ? c = i : c = this;
          for (var h = 0; h < c.length; h++) this.words[h] = this.words[h] & i.words[h];
          return this.length = c.length, this._strip();
        }, n.prototype.iand = function(i) {
          return r((this.negative | i.negative) === 0), this.iuand(i);
        }, n.prototype.and = function(i) {
          return this.length > i.length ? this.clone().iand(i) : i.clone().iand(this);
        }, n.prototype.uand = function(i) {
          return this.length > i.length ? this.clone().iuand(i) : i.clone().iuand(this);
        }, n.prototype.iuxor = function(i) {
          var c, h;
          this.length > i.length ? (c = this, h = i) : (c = i, h = this);
          for (var g = 0; g < h.length; g++) this.words[g] = c.words[g] ^ h.words[g];
          if (this !== c) for (; g < c.length; g++) this.words[g] = c.words[g];
          return this.length = c.length, this._strip();
        }, n.prototype.ixor = function(i) {
          return r((this.negative | i.negative) === 0), this.iuxor(i);
        }, n.prototype.xor = function(i) {
          return this.length > i.length ? this.clone().ixor(i) : i.clone().ixor(this);
        }, n.prototype.uxor = function(i) {
          return this.length > i.length ? this.clone().iuxor(i) : i.clone().iuxor(this);
        }, n.prototype.inotn = function(i) {
          r(typeof i == "number" && i >= 0);
          var c = Math.ceil(i / 26) | 0, h = i % 26;
          this._expand(c), h > 0 && c--;
          for (var g = 0; g < c; g++) this.words[g] = ~this.words[g] & 67108863;
          for (h > 0 && (this.words[g] = ~this.words[g] & 67108863 >> 26 - h, g++); g < this.length; g++) this.words[g] = 0;
          return this._strip();
        }, n.prototype.notn = function(i) {
          return this.clone().inotn(i);
        }, n.prototype.setn = function(i, c) {
          r(typeof i == "number" && i >= 0);
          var h = i / 26 | 0, g = i % 26;
          return this._expand(h + 1), c ? this.words[h] = this.words[h] | 1 << g : this.words[h] = this.words[h] & ~(1 << g), this._strip();
        }, n.prototype.iadd = function(i) {
          var c;
          if (this.negative !== 0 && i.negative === 0) return this.negative = 0, c = this.isub(i), this.negative ^= 1, this._normSign();
          if (this.negative === 0 && i.negative !== 0) return i.negative = 0, c = this.isub(i), i.negative = 1, c._normSign();
          var h, g;
          this.length > i.length ? (h = this, g = i) : (h = i, g = this);
          for (var w = 0, v = 0; v < g.length; v++) c = (h.words[v] | 0) + (g.words[v] | 0) + w, this.words[v] = c & 67108863, w = c >>> 26;
          for (; w !== 0 && v < h.length; v++) c = (h.words[v] | 0) + w, this.words[v] = c & 67108863, w = c >>> 26;
          if (this.length = h.length, w !== 0) this.words[this.length] = w, this.length++;
          else if (h !== this) for (; v < h.length; v++) this.words[v] = h.words[v];
          return this;
        }, n.prototype.add = function(i) {
          var c;
          return i.negative !== 0 && this.negative === 0 ? (i.negative = 0, c = this.sub(i), i.negative ^= 1, c) : i.negative === 0 && this.negative !== 0 ? (this.negative = 0, c = i.sub(this), this.negative = 1, c) : this.length > i.length ? this.clone().iadd(i) : i.clone().iadd(this);
        }, n.prototype.isub = function(i) {
          if (i.negative !== 0) {
            i.negative = 0;
            var c = this.iadd(i);
            return i.negative = 1, c._normSign();
          } else if (this.negative !== 0) return this.negative = 0, this.iadd(i), this.negative = 1, this._normSign();
          var h = this.cmp(i);
          if (h === 0) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
          var g, w;
          h > 0 ? (g = this, w = i) : (g = i, w = this);
          for (var v = 0, _ = 0; _ < w.length; _++) c = (g.words[_] | 0) - (w.words[_] | 0) + v, v = c >> 26, this.words[_] = c & 67108863;
          for (; v !== 0 && _ < g.length; _++) c = (g.words[_] | 0) + v, v = c >> 26, this.words[_] = c & 67108863;
          if (v === 0 && _ < g.length && g !== this) for (; _ < g.length; _++) this.words[_] = g.words[_];
          return this.length = Math.max(this.length, _), g !== this && (this.negative = 1), this._strip();
        }, n.prototype.sub = function(i) {
          return this.clone().isub(i);
        };
        function x(f, i, c) {
          c.negative = i.negative ^ f.negative;
          var h = f.length + i.length | 0;
          c.length = h, h = h - 1 | 0;
          var g = f.words[0] | 0, w = i.words[0] | 0, v = g * w, _ = v & 67108863, y = v / 67108864 | 0;
          c.words[0] = _;
          for (var u = 1; u < h; u++) {
            for (var b = y >>> 26, q = y & 67108863, W = Math.min(u, i.length - 1), V = Math.max(0, u - f.length + 1); V <= W; V++) {
              var ot = u - V | 0;
              g = f.words[ot] | 0, w = i.words[V] | 0, v = g * w + q, b += v / 67108864 | 0, q = v & 67108863;
            }
            c.words[u] = q | 0, y = b | 0;
          }
          return y !== 0 ? c.words[u] = y | 0 : c.length--, c._strip();
        }
        var C = function(i, c, h) {
          var g = i.words, w = c.words, v = h.words, _ = 0, y, u, b, q = g[0] | 0, W = q & 8191, V = q >>> 13, ot = g[1] | 0, ce = ot & 8191, ue = ot >>> 13, Yn = g[2] | 0, ge = Yn & 8191, pe = Yn >>> 13, Zn = g[3] | 0, ye = Zn & 8191, me = Zn >>> 13, Jn = g[4] | 0, be = Jn & 8191, we = Jn >>> 13, Xn = g[5] | 0, ke = Xn & 8191, ve = Xn >>> 13, Qn = g[6] | 0, Se = Qn & 8191, _e = Qn >>> 13, es = g[7] | 0, Ae = es & 8191, Ie = es >>> 13, ts = g[8] | 0, Ee = ts & 8191, Re = ts >>> 13, rs = g[9] | 0, Me = rs & 8191, xe = rs >>> 13, ns = w[0] | 0, Pe = ns & 8191, Te = ns >>> 13, ss = w[1] | 0, Le = ss & 8191, Ce = ss >>> 13, is = w[2] | 0, Be = is & 8191, Oe = is >>> 13, os = w[3] | 0, Ne = os & 8191, ze = os >>> 13, as = w[4] | 0, Ke = as & 8191, $e = as >>> 13, cs = w[5] | 0, Ue = cs & 8191, We = cs >>> 13, us = w[6] | 0, De = us & 8191, qe = us >>> 13, ls = w[7] | 0, Ve = ls & 8191, Fe = ls >>> 13, hs = w[8] | 0, He = hs & 8191, Ge = hs >>> 13, ds = w[9] | 0, je = ds & 8191, Ye = ds >>> 13;
          h.negative = i.negative ^ c.negative, h.length = 19, y = Math.imul(W, Pe), u = Math.imul(W, Te), u = u + Math.imul(V, Pe) | 0, b = Math.imul(V, Te);
          var Lr = (_ + y | 0) + ((u & 8191) << 13) | 0;
          _ = (b + (u >>> 13) | 0) + (Lr >>> 26) | 0, Lr &= 67108863, y = Math.imul(ce, Pe), u = Math.imul(ce, Te), u = u + Math.imul(ue, Pe) | 0, b = Math.imul(ue, Te), y = y + Math.imul(W, Le) | 0, u = u + Math.imul(W, Ce) | 0, u = u + Math.imul(V, Le) | 0, b = b + Math.imul(V, Ce) | 0;
          var Cr = (_ + y | 0) + ((u & 8191) << 13) | 0;
          _ = (b + (u >>> 13) | 0) + (Cr >>> 26) | 0, Cr &= 67108863, y = Math.imul(ge, Pe), u = Math.imul(ge, Te), u = u + Math.imul(pe, Pe) | 0, b = Math.imul(pe, Te), y = y + Math.imul(ce, Le) | 0, u = u + Math.imul(ce, Ce) | 0, u = u + Math.imul(ue, Le) | 0, b = b + Math.imul(ue, Ce) | 0, y = y + Math.imul(W, Be) | 0, u = u + Math.imul(W, Oe) | 0, u = u + Math.imul(V, Be) | 0, b = b + Math.imul(V, Oe) | 0;
          var Br = (_ + y | 0) + ((u & 8191) << 13) | 0;
          _ = (b + (u >>> 13) | 0) + (Br >>> 26) | 0, Br &= 67108863, y = Math.imul(ye, Pe), u = Math.imul(ye, Te), u = u + Math.imul(me, Pe) | 0, b = Math.imul(me, Te), y = y + Math.imul(ge, Le) | 0, u = u + Math.imul(ge, Ce) | 0, u = u + Math.imul(pe, Le) | 0, b = b + Math.imul(pe, Ce) | 0, y = y + Math.imul(ce, Be) | 0, u = u + Math.imul(ce, Oe) | 0, u = u + Math.imul(ue, Be) | 0, b = b + Math.imul(ue, Oe) | 0, y = y + Math.imul(W, Ne) | 0, u = u + Math.imul(W, ze) | 0, u = u + Math.imul(V, Ne) | 0, b = b + Math.imul(V, ze) | 0;
          var Or = (_ + y | 0) + ((u & 8191) << 13) | 0;
          _ = (b + (u >>> 13) | 0) + (Or >>> 26) | 0, Or &= 67108863, y = Math.imul(be, Pe), u = Math.imul(be, Te), u = u + Math.imul(we, Pe) | 0, b = Math.imul(we, Te), y = y + Math.imul(ye, Le) | 0, u = u + Math.imul(ye, Ce) | 0, u = u + Math.imul(me, Le) | 0, b = b + Math.imul(me, Ce) | 0, y = y + Math.imul(ge, Be) | 0, u = u + Math.imul(ge, Oe) | 0, u = u + Math.imul(pe, Be) | 0, b = b + Math.imul(pe, Oe) | 0, y = y + Math.imul(ce, Ne) | 0, u = u + Math.imul(ce, ze) | 0, u = u + Math.imul(ue, Ne) | 0, b = b + Math.imul(ue, ze) | 0, y = y + Math.imul(W, Ke) | 0, u = u + Math.imul(W, $e) | 0, u = u + Math.imul(V, Ke) | 0, b = b + Math.imul(V, $e) | 0;
          var Nr = (_ + y | 0) + ((u & 8191) << 13) | 0;
          _ = (b + (u >>> 13) | 0) + (Nr >>> 26) | 0, Nr &= 67108863, y = Math.imul(ke, Pe), u = Math.imul(ke, Te), u = u + Math.imul(ve, Pe) | 0, b = Math.imul(ve, Te), y = y + Math.imul(be, Le) | 0, u = u + Math.imul(be, Ce) | 0, u = u + Math.imul(we, Le) | 0, b = b + Math.imul(we, Ce) | 0, y = y + Math.imul(ye, Be) | 0, u = u + Math.imul(ye, Oe) | 0, u = u + Math.imul(me, Be) | 0, b = b + Math.imul(me, Oe) | 0, y = y + Math.imul(ge, Ne) | 0, u = u + Math.imul(ge, ze) | 0, u = u + Math.imul(pe, Ne) | 0, b = b + Math.imul(pe, ze) | 0, y = y + Math.imul(ce, Ke) | 0, u = u + Math.imul(ce, $e) | 0, u = u + Math.imul(ue, Ke) | 0, b = b + Math.imul(ue, $e) | 0, y = y + Math.imul(W, Ue) | 0, u = u + Math.imul(W, We) | 0, u = u + Math.imul(V, Ue) | 0, b = b + Math.imul(V, We) | 0;
          var zr = (_ + y | 0) + ((u & 8191) << 13) | 0;
          _ = (b + (u >>> 13) | 0) + (zr >>> 26) | 0, zr &= 67108863, y = Math.imul(Se, Pe), u = Math.imul(Se, Te), u = u + Math.imul(_e, Pe) | 0, b = Math.imul(_e, Te), y = y + Math.imul(ke, Le) | 0, u = u + Math.imul(ke, Ce) | 0, u = u + Math.imul(ve, Le) | 0, b = b + Math.imul(ve, Ce) | 0, y = y + Math.imul(be, Be) | 0, u = u + Math.imul(be, Oe) | 0, u = u + Math.imul(we, Be) | 0, b = b + Math.imul(we, Oe) | 0, y = y + Math.imul(ye, Ne) | 0, u = u + Math.imul(ye, ze) | 0, u = u + Math.imul(me, Ne) | 0, b = b + Math.imul(me, ze) | 0, y = y + Math.imul(ge, Ke) | 0, u = u + Math.imul(ge, $e) | 0, u = u + Math.imul(pe, Ke) | 0, b = b + Math.imul(pe, $e) | 0, y = y + Math.imul(ce, Ue) | 0, u = u + Math.imul(ce, We) | 0, u = u + Math.imul(ue, Ue) | 0, b = b + Math.imul(ue, We) | 0, y = y + Math.imul(W, De) | 0, u = u + Math.imul(W, qe) | 0, u = u + Math.imul(V, De) | 0, b = b + Math.imul(V, qe) | 0;
          var Kr = (_ + y | 0) + ((u & 8191) << 13) | 0;
          _ = (b + (u >>> 13) | 0) + (Kr >>> 26) | 0, Kr &= 67108863, y = Math.imul(Ae, Pe), u = Math.imul(Ae, Te), u = u + Math.imul(Ie, Pe) | 0, b = Math.imul(Ie, Te), y = y + Math.imul(Se, Le) | 0, u = u + Math.imul(Se, Ce) | 0, u = u + Math.imul(_e, Le) | 0, b = b + Math.imul(_e, Ce) | 0, y = y + Math.imul(ke, Be) | 0, u = u + Math.imul(ke, Oe) | 0, u = u + Math.imul(ve, Be) | 0, b = b + Math.imul(ve, Oe) | 0, y = y + Math.imul(be, Ne) | 0, u = u + Math.imul(be, ze) | 0, u = u + Math.imul(we, Ne) | 0, b = b + Math.imul(we, ze) | 0, y = y + Math.imul(ye, Ke) | 0, u = u + Math.imul(ye, $e) | 0, u = u + Math.imul(me, Ke) | 0, b = b + Math.imul(me, $e) | 0, y = y + Math.imul(ge, Ue) | 0, u = u + Math.imul(ge, We) | 0, u = u + Math.imul(pe, Ue) | 0, b = b + Math.imul(pe, We) | 0, y = y + Math.imul(ce, De) | 0, u = u + Math.imul(ce, qe) | 0, u = u + Math.imul(ue, De) | 0, b = b + Math.imul(ue, qe) | 0, y = y + Math.imul(W, Ve) | 0, u = u + Math.imul(W, Fe) | 0, u = u + Math.imul(V, Ve) | 0, b = b + Math.imul(V, Fe) | 0;
          var $r = (_ + y | 0) + ((u & 8191) << 13) | 0;
          _ = (b + (u >>> 13) | 0) + ($r >>> 26) | 0, $r &= 67108863, y = Math.imul(Ee, Pe), u = Math.imul(Ee, Te), u = u + Math.imul(Re, Pe) | 0, b = Math.imul(Re, Te), y = y + Math.imul(Ae, Le) | 0, u = u + Math.imul(Ae, Ce) | 0, u = u + Math.imul(Ie, Le) | 0, b = b + Math.imul(Ie, Ce) | 0, y = y + Math.imul(Se, Be) | 0, u = u + Math.imul(Se, Oe) | 0, u = u + Math.imul(_e, Be) | 0, b = b + Math.imul(_e, Oe) | 0, y = y + Math.imul(ke, Ne) | 0, u = u + Math.imul(ke, ze) | 0, u = u + Math.imul(ve, Ne) | 0, b = b + Math.imul(ve, ze) | 0, y = y + Math.imul(be, Ke) | 0, u = u + Math.imul(be, $e) | 0, u = u + Math.imul(we, Ke) | 0, b = b + Math.imul(we, $e) | 0, y = y + Math.imul(ye, Ue) | 0, u = u + Math.imul(ye, We) | 0, u = u + Math.imul(me, Ue) | 0, b = b + Math.imul(me, We) | 0, y = y + Math.imul(ge, De) | 0, u = u + Math.imul(ge, qe) | 0, u = u + Math.imul(pe, De) | 0, b = b + Math.imul(pe, qe) | 0, y = y + Math.imul(ce, Ve) | 0, u = u + Math.imul(ce, Fe) | 0, u = u + Math.imul(ue, Ve) | 0, b = b + Math.imul(ue, Fe) | 0, y = y + Math.imul(W, He) | 0, u = u + Math.imul(W, Ge) | 0, u = u + Math.imul(V, He) | 0, b = b + Math.imul(V, Ge) | 0;
          var Ur = (_ + y | 0) + ((u & 8191) << 13) | 0;
          _ = (b + (u >>> 13) | 0) + (Ur >>> 26) | 0, Ur &= 67108863, y = Math.imul(Me, Pe), u = Math.imul(Me, Te), u = u + Math.imul(xe, Pe) | 0, b = Math.imul(xe, Te), y = y + Math.imul(Ee, Le) | 0, u = u + Math.imul(Ee, Ce) | 0, u = u + Math.imul(Re, Le) | 0, b = b + Math.imul(Re, Ce) | 0, y = y + Math.imul(Ae, Be) | 0, u = u + Math.imul(Ae, Oe) | 0, u = u + Math.imul(Ie, Be) | 0, b = b + Math.imul(Ie, Oe) | 0, y = y + Math.imul(Se, Ne) | 0, u = u + Math.imul(Se, ze) | 0, u = u + Math.imul(_e, Ne) | 0, b = b + Math.imul(_e, ze) | 0, y = y + Math.imul(ke, Ke) | 0, u = u + Math.imul(ke, $e) | 0, u = u + Math.imul(ve, Ke) | 0, b = b + Math.imul(ve, $e) | 0, y = y + Math.imul(be, Ue) | 0, u = u + Math.imul(be, We) | 0, u = u + Math.imul(we, Ue) | 0, b = b + Math.imul(we, We) | 0, y = y + Math.imul(ye, De) | 0, u = u + Math.imul(ye, qe) | 0, u = u + Math.imul(me, De) | 0, b = b + Math.imul(me, qe) | 0, y = y + Math.imul(ge, Ve) | 0, u = u + Math.imul(ge, Fe) | 0, u = u + Math.imul(pe, Ve) | 0, b = b + Math.imul(pe, Fe) | 0, y = y + Math.imul(ce, He) | 0, u = u + Math.imul(ce, Ge) | 0, u = u + Math.imul(ue, He) | 0, b = b + Math.imul(ue, Ge) | 0, y = y + Math.imul(W, je) | 0, u = u + Math.imul(W, Ye) | 0, u = u + Math.imul(V, je) | 0, b = b + Math.imul(V, Ye) | 0;
          var Wr = (_ + y | 0) + ((u & 8191) << 13) | 0;
          _ = (b + (u >>> 13) | 0) + (Wr >>> 26) | 0, Wr &= 67108863, y = Math.imul(Me, Le), u = Math.imul(Me, Ce), u = u + Math.imul(xe, Le) | 0, b = Math.imul(xe, Ce), y = y + Math.imul(Ee, Be) | 0, u = u + Math.imul(Ee, Oe) | 0, u = u + Math.imul(Re, Be) | 0, b = b + Math.imul(Re, Oe) | 0, y = y + Math.imul(Ae, Ne) | 0, u = u + Math.imul(Ae, ze) | 0, u = u + Math.imul(Ie, Ne) | 0, b = b + Math.imul(Ie, ze) | 0, y = y + Math.imul(Se, Ke) | 0, u = u + Math.imul(Se, $e) | 0, u = u + Math.imul(_e, Ke) | 0, b = b + Math.imul(_e, $e) | 0, y = y + Math.imul(ke, Ue) | 0, u = u + Math.imul(ke, We) | 0, u = u + Math.imul(ve, Ue) | 0, b = b + Math.imul(ve, We) | 0, y = y + Math.imul(be, De) | 0, u = u + Math.imul(be, qe) | 0, u = u + Math.imul(we, De) | 0, b = b + Math.imul(we, qe) | 0, y = y + Math.imul(ye, Ve) | 0, u = u + Math.imul(ye, Fe) | 0, u = u + Math.imul(me, Ve) | 0, b = b + Math.imul(me, Fe) | 0, y = y + Math.imul(ge, He) | 0, u = u + Math.imul(ge, Ge) | 0, u = u + Math.imul(pe, He) | 0, b = b + Math.imul(pe, Ge) | 0, y = y + Math.imul(ce, je) | 0, u = u + Math.imul(ce, Ye) | 0, u = u + Math.imul(ue, je) | 0, b = b + Math.imul(ue, Ye) | 0;
          var Dr = (_ + y | 0) + ((u & 8191) << 13) | 0;
          _ = (b + (u >>> 13) | 0) + (Dr >>> 26) | 0, Dr &= 67108863, y = Math.imul(Me, Be), u = Math.imul(Me, Oe), u = u + Math.imul(xe, Be) | 0, b = Math.imul(xe, Oe), y = y + Math.imul(Ee, Ne) | 0, u = u + Math.imul(Ee, ze) | 0, u = u + Math.imul(Re, Ne) | 0, b = b + Math.imul(Re, ze) | 0, y = y + Math.imul(Ae, Ke) | 0, u = u + Math.imul(Ae, $e) | 0, u = u + Math.imul(Ie, Ke) | 0, b = b + Math.imul(Ie, $e) | 0, y = y + Math.imul(Se, Ue) | 0, u = u + Math.imul(Se, We) | 0, u = u + Math.imul(_e, Ue) | 0, b = b + Math.imul(_e, We) | 0, y = y + Math.imul(ke, De) | 0, u = u + Math.imul(ke, qe) | 0, u = u + Math.imul(ve, De) | 0, b = b + Math.imul(ve, qe) | 0, y = y + Math.imul(be, Ve) | 0, u = u + Math.imul(be, Fe) | 0, u = u + Math.imul(we, Ve) | 0, b = b + Math.imul(we, Fe) | 0, y = y + Math.imul(ye, He) | 0, u = u + Math.imul(ye, Ge) | 0, u = u + Math.imul(me, He) | 0, b = b + Math.imul(me, Ge) | 0, y = y + Math.imul(ge, je) | 0, u = u + Math.imul(ge, Ye) | 0, u = u + Math.imul(pe, je) | 0, b = b + Math.imul(pe, Ye) | 0;
          var qr = (_ + y | 0) + ((u & 8191) << 13) | 0;
          _ = (b + (u >>> 13) | 0) + (qr >>> 26) | 0, qr &= 67108863, y = Math.imul(Me, Ne), u = Math.imul(Me, ze), u = u + Math.imul(xe, Ne) | 0, b = Math.imul(xe, ze), y = y + Math.imul(Ee, Ke) | 0, u = u + Math.imul(Ee, $e) | 0, u = u + Math.imul(Re, Ke) | 0, b = b + Math.imul(Re, $e) | 0, y = y + Math.imul(Ae, Ue) | 0, u = u + Math.imul(Ae, We) | 0, u = u + Math.imul(Ie, Ue) | 0, b = b + Math.imul(Ie, We) | 0, y = y + Math.imul(Se, De) | 0, u = u + Math.imul(Se, qe) | 0, u = u + Math.imul(_e, De) | 0, b = b + Math.imul(_e, qe) | 0, y = y + Math.imul(ke, Ve) | 0, u = u + Math.imul(ke, Fe) | 0, u = u + Math.imul(ve, Ve) | 0, b = b + Math.imul(ve, Fe) | 0, y = y + Math.imul(be, He) | 0, u = u + Math.imul(be, Ge) | 0, u = u + Math.imul(we, He) | 0, b = b + Math.imul(we, Ge) | 0, y = y + Math.imul(ye, je) | 0, u = u + Math.imul(ye, Ye) | 0, u = u + Math.imul(me, je) | 0, b = b + Math.imul(me, Ye) | 0;
          var Vr = (_ + y | 0) + ((u & 8191) << 13) | 0;
          _ = (b + (u >>> 13) | 0) + (Vr >>> 26) | 0, Vr &= 67108863, y = Math.imul(Me, Ke), u = Math.imul(Me, $e), u = u + Math.imul(xe, Ke) | 0, b = Math.imul(xe, $e), y = y + Math.imul(Ee, Ue) | 0, u = u + Math.imul(Ee, We) | 0, u = u + Math.imul(Re, Ue) | 0, b = b + Math.imul(Re, We) | 0, y = y + Math.imul(Ae, De) | 0, u = u + Math.imul(Ae, qe) | 0, u = u + Math.imul(Ie, De) | 0, b = b + Math.imul(Ie, qe) | 0, y = y + Math.imul(Se, Ve) | 0, u = u + Math.imul(Se, Fe) | 0, u = u + Math.imul(_e, Ve) | 0, b = b + Math.imul(_e, Fe) | 0, y = y + Math.imul(ke, He) | 0, u = u + Math.imul(ke, Ge) | 0, u = u + Math.imul(ve, He) | 0, b = b + Math.imul(ve, Ge) | 0, y = y + Math.imul(be, je) | 0, u = u + Math.imul(be, Ye) | 0, u = u + Math.imul(we, je) | 0, b = b + Math.imul(we, Ye) | 0;
          var Fr = (_ + y | 0) + ((u & 8191) << 13) | 0;
          _ = (b + (u >>> 13) | 0) + (Fr >>> 26) | 0, Fr &= 67108863, y = Math.imul(Me, Ue), u = Math.imul(Me, We), u = u + Math.imul(xe, Ue) | 0, b = Math.imul(xe, We), y = y + Math.imul(Ee, De) | 0, u = u + Math.imul(Ee, qe) | 0, u = u + Math.imul(Re, De) | 0, b = b + Math.imul(Re, qe) | 0, y = y + Math.imul(Ae, Ve) | 0, u = u + Math.imul(Ae, Fe) | 0, u = u + Math.imul(Ie, Ve) | 0, b = b + Math.imul(Ie, Fe) | 0, y = y + Math.imul(Se, He) | 0, u = u + Math.imul(Se, Ge) | 0, u = u + Math.imul(_e, He) | 0, b = b + Math.imul(_e, Ge) | 0, y = y + Math.imul(ke, je) | 0, u = u + Math.imul(ke, Ye) | 0, u = u + Math.imul(ve, je) | 0, b = b + Math.imul(ve, Ye) | 0;
          var Hr = (_ + y | 0) + ((u & 8191) << 13) | 0;
          _ = (b + (u >>> 13) | 0) + (Hr >>> 26) | 0, Hr &= 67108863, y = Math.imul(Me, De), u = Math.imul(Me, qe), u = u + Math.imul(xe, De) | 0, b = Math.imul(xe, qe), y = y + Math.imul(Ee, Ve) | 0, u = u + Math.imul(Ee, Fe) | 0, u = u + Math.imul(Re, Ve) | 0, b = b + Math.imul(Re, Fe) | 0, y = y + Math.imul(Ae, He) | 0, u = u + Math.imul(Ae, Ge) | 0, u = u + Math.imul(Ie, He) | 0, b = b + Math.imul(Ie, Ge) | 0, y = y + Math.imul(Se, je) | 0, u = u + Math.imul(Se, Ye) | 0, u = u + Math.imul(_e, je) | 0, b = b + Math.imul(_e, Ye) | 0;
          var Gr = (_ + y | 0) + ((u & 8191) << 13) | 0;
          _ = (b + (u >>> 13) | 0) + (Gr >>> 26) | 0, Gr &= 67108863, y = Math.imul(Me, Ve), u = Math.imul(Me, Fe), u = u + Math.imul(xe, Ve) | 0, b = Math.imul(xe, Fe), y = y + Math.imul(Ee, He) | 0, u = u + Math.imul(Ee, Ge) | 0, u = u + Math.imul(Re, He) | 0, b = b + Math.imul(Re, Ge) | 0, y = y + Math.imul(Ae, je) | 0, u = u + Math.imul(Ae, Ye) | 0, u = u + Math.imul(Ie, je) | 0, b = b + Math.imul(Ie, Ye) | 0;
          var jr = (_ + y | 0) + ((u & 8191) << 13) | 0;
          _ = (b + (u >>> 13) | 0) + (jr >>> 26) | 0, jr &= 67108863, y = Math.imul(Me, He), u = Math.imul(Me, Ge), u = u + Math.imul(xe, He) | 0, b = Math.imul(xe, Ge), y = y + Math.imul(Ee, je) | 0, u = u + Math.imul(Ee, Ye) | 0, u = u + Math.imul(Re, je) | 0, b = b + Math.imul(Re, Ye) | 0;
          var Yr = (_ + y | 0) + ((u & 8191) << 13) | 0;
          _ = (b + (u >>> 13) | 0) + (Yr >>> 26) | 0, Yr &= 67108863, y = Math.imul(Me, je), u = Math.imul(Me, Ye), u = u + Math.imul(xe, je) | 0, b = Math.imul(xe, Ye);
          var Zr = (_ + y | 0) + ((u & 8191) << 13) | 0;
          return _ = (b + (u >>> 13) | 0) + (Zr >>> 26) | 0, Zr &= 67108863, v[0] = Lr, v[1] = Cr, v[2] = Br, v[3] = Or, v[4] = Nr, v[5] = zr, v[6] = Kr, v[7] = $r, v[8] = Ur, v[9] = Wr, v[10] = Dr, v[11] = qr, v[12] = Vr, v[13] = Fr, v[14] = Hr, v[15] = Gr, v[16] = jr, v[17] = Yr, v[18] = Zr, _ !== 0 && (v[19] = _, h.length++), h;
        };
        Math.imul || (C = x);
        function O(f, i, c) {
          c.negative = i.negative ^ f.negative, c.length = f.length + i.length;
          for (var h = 0, g = 0, w = 0; w < c.length - 1; w++) {
            var v = g;
            g = 0;
            for (var _ = h & 67108863, y = Math.min(w, i.length - 1), u = Math.max(0, w - f.length + 1); u <= y; u++) {
              var b = w - u, q = f.words[b] | 0, W = i.words[u] | 0, V = q * W, ot = V & 67108863;
              v = v + (V / 67108864 | 0) | 0, ot = ot + _ | 0, _ = ot & 67108863, v = v + (ot >>> 26) | 0, g += v >>> 26, v &= 67108863;
            }
            c.words[w] = _, h = v, v = g;
          }
          return h !== 0 ? c.words[w] = h : c.length--, c._strip();
        }
        function N(f, i, c) {
          return O(f, i, c);
        }
        n.prototype.mulTo = function(i, c) {
          var h, g = this.length + i.length;
          return this.length === 10 && i.length === 10 ? h = C(this, i, c) : g < 63 ? h = x(this, i, c) : g < 1024 ? h = O(this, i, c) : h = N(this, i, c), h;
        }, n.prototype.mul = function(i) {
          var c = new n(null);
          return c.words = new Array(this.length + i.length), this.mulTo(i, c);
        }, n.prototype.mulf = function(i) {
          var c = new n(null);
          return c.words = new Array(this.length + i.length), N(this, i, c);
        }, n.prototype.imul = function(i) {
          return this.clone().mulTo(i, this);
        }, n.prototype.imuln = function(i) {
          var c = i < 0;
          c && (i = -i), r(typeof i == "number"), r(i < 67108864);
          for (var h = 0, g = 0; g < this.length; g++) {
            var w = (this.words[g] | 0) * i, v = (w & 67108863) + (h & 67108863);
            h >>= 26, h += w / 67108864 | 0, h += v >>> 26, this.words[g] = v & 67108863;
          }
          return h !== 0 && (this.words[g] = h, this.length++), i === 0 && (this.length = 1, this._normSign()), c ? this.ineg() : this;
        }, n.prototype.muln = function(i) {
          return this.clone().imuln(i);
        }, n.prototype.sqr = function() {
          return this.mul(this);
        }, n.prototype.isqr = function() {
          return this.imul(this.clone());
        }, n.prototype.pow = function(i) {
          var c = M(i);
          if (c.length === 0) return new n(1);
          for (var h = this, g = 0; g < c.length && c[g] === 0; g++, h = h.sqr()) ;
          if (++g < c.length) for (var w = h.sqr(); g < c.length; g++, w = w.sqr()) c[g] !== 0 && (h = h.mul(w));
          return h;
        }, n.prototype.iushln = function(i) {
          r(typeof i == "number" && i >= 0);
          var c = i % 26, h = (i - c) / 26, g = 67108863 >>> 26 - c << 26 - c, w;
          if (c !== 0) {
            var v = 0;
            for (w = 0; w < this.length; w++) {
              var _ = this.words[w] & g, y = (this.words[w] | 0) - _ << c;
              this.words[w] = y | v, v = _ >>> 26 - c;
            }
            v && (this.words[w] = v, this.length++);
          }
          if (h !== 0) {
            for (w = this.length - 1; w >= 0; w--) this.words[w + h] = this.words[w];
            for (w = 0; w < h; w++) this.words[w] = 0;
            this.length += h;
          }
          return this._strip();
        }, n.prototype.ishln = function(i) {
          return r(this.negative === 0), this.iushln(i);
        }, n.prototype.iushrn = function(i, c, h) {
          r(typeof i == "number" && i >= 0);
          var g;
          c ? g = (c - c % 26) / 26 : g = 0;
          var w = i % 26, v = Math.min((i - w) / 26, this.length), _ = 67108863 ^ 67108863 >>> w << w, y = h;
          if (g -= v, g = Math.max(0, g), y) {
            for (var u = 0; u < v; u++) y.words[u] = this.words[u];
            y.length = v;
          }
          if (v !== 0) if (this.length > v) for (this.length -= v, u = 0; u < this.length; u++) this.words[u] = this.words[u + v];
          else this.words[0] = 0, this.length = 1;
          var b = 0;
          for (u = this.length - 1; u >= 0 && (b !== 0 || u >= g); u--) {
            var q = this.words[u] | 0;
            this.words[u] = b << 26 - w | q >>> w, b = q & _;
          }
          return y && b !== 0 && (y.words[y.length++] = b), this.length === 0 && (this.words[0] = 0, this.length = 1), this._strip();
        }, n.prototype.ishrn = function(i, c, h) {
          return r(this.negative === 0), this.iushrn(i, c, h);
        }, n.prototype.shln = function(i) {
          return this.clone().ishln(i);
        }, n.prototype.ushln = function(i) {
          return this.clone().iushln(i);
        }, n.prototype.shrn = function(i) {
          return this.clone().ishrn(i);
        }, n.prototype.ushrn = function(i) {
          return this.clone().iushrn(i);
        }, n.prototype.testn = function(i) {
          r(typeof i == "number" && i >= 0);
          var c = i % 26, h = (i - c) / 26, g = 1 << c;
          if (this.length <= h) return false;
          var w = this.words[h];
          return !!(w & g);
        }, n.prototype.imaskn = function(i) {
          r(typeof i == "number" && i >= 0);
          var c = i % 26, h = (i - c) / 26;
          if (r(this.negative === 0, "imaskn works only with positive numbers"), this.length <= h) return this;
          if (c !== 0 && h++, this.length = Math.min(h, this.length), c !== 0) {
            var g = 67108863 ^ 67108863 >>> c << c;
            this.words[this.length - 1] &= g;
          }
          return this.length === 0 && (this.words[0] = 0, this.length = 1), this._strip();
        }, n.prototype.maskn = function(i) {
          return this.clone().imaskn(i);
        }, n.prototype.iaddn = function(i) {
          return r(typeof i == "number"), r(i < 67108864), i < 0 ? this.isubn(-i) : this.negative !== 0 ? this.length === 1 && (this.words[0] | 0) <= i ? (this.words[0] = i - (this.words[0] | 0), this.negative = 0, this) : (this.negative = 0, this.isubn(i), this.negative = 1, this) : this._iaddn(i);
        }, n.prototype._iaddn = function(i) {
          this.words[0] += i;
          for (var c = 0; c < this.length && this.words[c] >= 67108864; c++) this.words[c] -= 67108864, c === this.length - 1 ? this.words[c + 1] = 1 : this.words[c + 1]++;
          return this.length = Math.max(this.length, c + 1), this;
        }, n.prototype.isubn = function(i) {
          if (r(typeof i == "number"), r(i < 67108864), i < 0) return this.iaddn(-i);
          if (this.negative !== 0) return this.negative = 0, this.iaddn(i), this.negative = 1, this;
          if (this.words[0] -= i, this.length === 1 && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
          else for (var c = 0; c < this.length && this.words[c] < 0; c++) this.words[c] += 67108864, this.words[c + 1] -= 1;
          return this._strip();
        }, n.prototype.addn = function(i) {
          return this.clone().iaddn(i);
        }, n.prototype.subn = function(i) {
          return this.clone().isubn(i);
        }, n.prototype.iabs = function() {
          return this.negative = 0, this;
        }, n.prototype.abs = function() {
          return this.clone().iabs();
        }, n.prototype._ishlnsubmul = function(i, c, h) {
          var g = i.length + h, w;
          this._expand(g);
          var v, _ = 0;
          for (w = 0; w < i.length; w++) {
            v = (this.words[w + h] | 0) + _;
            var y = (i.words[w] | 0) * c;
            v -= y & 67108863, _ = (v >> 26) - (y / 67108864 | 0), this.words[w + h] = v & 67108863;
          }
          for (; w < this.length - h; w++) v = (this.words[w + h] | 0) + _, _ = v >> 26, this.words[w + h] = v & 67108863;
          if (_ === 0) return this._strip();
          for (r(_ === -1), _ = 0, w = 0; w < this.length; w++) v = -(this.words[w] | 0) + _, _ = v >> 26, this.words[w] = v & 67108863;
          return this.negative = 1, this._strip();
        }, n.prototype._wordDiv = function(i, c) {
          var h = this.length - i.length, g = this.clone(), w = i, v = w.words[w.length - 1] | 0, _ = this._countBits(v);
          h = 26 - _, h !== 0 && (w = w.ushln(h), g.iushln(h), v = w.words[w.length - 1] | 0);
          var y = g.length - w.length, u;
          if (c !== "mod") {
            u = new n(null), u.length = y + 1, u.words = new Array(u.length);
            for (var b = 0; b < u.length; b++) u.words[b] = 0;
          }
          var q = g.clone()._ishlnsubmul(w, 1, y);
          q.negative === 0 && (g = q, u && (u.words[y] = 1));
          for (var W = y - 1; W >= 0; W--) {
            var V = (g.words[w.length + W] | 0) * 67108864 + (g.words[w.length + W - 1] | 0);
            for (V = Math.min(V / v | 0, 67108863), g._ishlnsubmul(w, V, W); g.negative !== 0; ) V--, g.negative = 0, g._ishlnsubmul(w, 1, W), g.isZero() || (g.negative ^= 1);
            u && (u.words[W] = V);
          }
          return u && u._strip(), g._strip(), c !== "div" && h !== 0 && g.iushrn(h), {
            div: u || null,
            mod: g
          };
        }, n.prototype.divmod = function(i, c, h) {
          if (r(!i.isZero()), this.isZero()) return {
            div: new n(0),
            mod: new n(0)
          };
          var g, w, v;
          return this.negative !== 0 && i.negative === 0 ? (v = this.neg().divmod(i, c), c !== "mod" && (g = v.div.neg()), c !== "div" && (w = v.mod.neg(), h && w.negative !== 0 && w.iadd(i)), {
            div: g,
            mod: w
          }) : this.negative === 0 && i.negative !== 0 ? (v = this.divmod(i.neg(), c), c !== "mod" && (g = v.div.neg()), {
            div: g,
            mod: v.mod
          }) : (this.negative & i.negative) !== 0 ? (v = this.neg().divmod(i.neg(), c), c !== "div" && (w = v.mod.neg(), h && w.negative !== 0 && w.isub(i)), {
            div: v.div,
            mod: w
          }) : i.length > this.length || this.cmp(i) < 0 ? {
            div: new n(0),
            mod: this
          } : i.length === 1 ? c === "div" ? {
            div: this.divn(i.words[0]),
            mod: null
          } : c === "mod" ? {
            div: null,
            mod: new n(this.modrn(i.words[0]))
          } : {
            div: this.divn(i.words[0]),
            mod: new n(this.modrn(i.words[0]))
          } : this._wordDiv(i, c);
        }, n.prototype.div = function(i) {
          return this.divmod(i, "div", false).div;
        }, n.prototype.mod = function(i) {
          return this.divmod(i, "mod", false).mod;
        }, n.prototype.umod = function(i) {
          return this.divmod(i, "mod", true).mod;
        }, n.prototype.divRound = function(i) {
          var c = this.divmod(i);
          if (c.mod.isZero()) return c.div;
          var h = c.mod.abs(), g = i.abs().iushrn(1), w = i.words[0] & 1, v = h.cmp(g);
          if (v < 0 || w === 1 && v === 0) return c.div;
          var _ = new n(1);
          return _.negative = this.negative ^ i.negative, c.div.iadd(_);
        }, n.prototype.modrn = function(i) {
          var c = i < 0;
          c && (i = -i), r(i <= 67108863);
          for (var h = (1 << 26) % i, g = 0, w = this.length - 1; w >= 0; w--) g = (h * g + (this.words[w] | 0)) % i;
          return c ? -g : g;
        }, n.prototype.modn = function(i) {
          return this.modrn(i);
        }, n.prototype.idivn = function(i) {
          var c = i < 0;
          c && (i = -i), r(i <= 67108863);
          for (var h = 0, g = this.length - 1; g >= 0; g--) {
            var w = (this.words[g] | 0) + h * 67108864;
            this.words[g] = w / i | 0, h = w % i;
          }
          return this._strip(), c ? this.ineg() : this;
        }, n.prototype.divn = function(i) {
          return this.clone().idivn(i);
        }, n.prototype.egcd = function(i) {
          r(i.negative === 0), r(!i.isZero());
          var c = this, h = i.clone();
          c.negative !== 0 ? c = c.umod(i) : c = c.clone();
          for (var g = new n(1), w = new n(0), v = new n(0), _ = new n(1), y = 0; c.isEven() && h.isEven(); ) c.iushrn(1), h.iushrn(1), ++y;
          for (var u = h.clone(), b = c.clone(); !c.isZero(); ) {
            for (var q = 0, W = 1; (c.words[0] & W) === 0 && q < 26; ++q, W <<= 1) ;
            if (q > 0) for (c.iushrn(q); q-- > 0; ) (g.isOdd() || w.isOdd()) && (g.iadd(u), w.isub(b)), g.iushrn(1), w.iushrn(1);
            for (var V = 0, ot = 1; (h.words[0] & ot) === 0 && V < 26; ++V, ot <<= 1) ;
            if (V > 0) for (h.iushrn(V); V-- > 0; ) (v.isOdd() || _.isOdd()) && (v.iadd(u), _.isub(b)), v.iushrn(1), _.iushrn(1);
            c.cmp(h) >= 0 ? (c.isub(h), g.isub(v), w.isub(_)) : (h.isub(c), v.isub(g), _.isub(w));
          }
          return {
            a: v,
            b: _,
            gcd: h.iushln(y)
          };
        }, n.prototype._invmp = function(i) {
          r(i.negative === 0), r(!i.isZero());
          var c = this, h = i.clone();
          c.negative !== 0 ? c = c.umod(i) : c = c.clone();
          for (var g = new n(1), w = new n(0), v = h.clone(); c.cmpn(1) > 0 && h.cmpn(1) > 0; ) {
            for (var _ = 0, y = 1; (c.words[0] & y) === 0 && _ < 26; ++_, y <<= 1) ;
            if (_ > 0) for (c.iushrn(_); _-- > 0; ) g.isOdd() && g.iadd(v), g.iushrn(1);
            for (var u = 0, b = 1; (h.words[0] & b) === 0 && u < 26; ++u, b <<= 1) ;
            if (u > 0) for (h.iushrn(u); u-- > 0; ) w.isOdd() && w.iadd(v), w.iushrn(1);
            c.cmp(h) >= 0 ? (c.isub(h), g.isub(w)) : (h.isub(c), w.isub(g));
          }
          var q;
          return c.cmpn(1) === 0 ? q = g : q = w, q.cmpn(0) < 0 && q.iadd(i), q;
        }, n.prototype.gcd = function(i) {
          if (this.isZero()) return i.abs();
          if (i.isZero()) return this.abs();
          var c = this.clone(), h = i.clone();
          c.negative = 0, h.negative = 0;
          for (var g = 0; c.isEven() && h.isEven(); g++) c.iushrn(1), h.iushrn(1);
          do {
            for (; c.isEven(); ) c.iushrn(1);
            for (; h.isEven(); ) h.iushrn(1);
            var w = c.cmp(h);
            if (w < 0) {
              var v = c;
              c = h, h = v;
            } else if (w === 0 || h.cmpn(1) === 0) break;
            c.isub(h);
          } while (true);
          return h.iushln(g);
        }, n.prototype.invm = function(i) {
          return this.egcd(i).a.umod(i);
        }, n.prototype.isEven = function() {
          return (this.words[0] & 1) === 0;
        }, n.prototype.isOdd = function() {
          return (this.words[0] & 1) === 1;
        }, n.prototype.andln = function(i) {
          return this.words[0] & i;
        }, n.prototype.bincn = function(i) {
          r(typeof i == "number");
          var c = i % 26, h = (i - c) / 26, g = 1 << c;
          if (this.length <= h) return this._expand(h + 1), this.words[h] |= g, this;
          for (var w = g, v = h; w !== 0 && v < this.length; v++) {
            var _ = this.words[v] | 0;
            _ += w, w = _ >>> 26, _ &= 67108863, this.words[v] = _;
          }
          return w !== 0 && (this.words[v] = w, this.length++), this;
        }, n.prototype.isZero = function() {
          return this.length === 1 && this.words[0] === 0;
        }, n.prototype.cmpn = function(i) {
          var c = i < 0;
          if (this.negative !== 0 && !c) return -1;
          if (this.negative === 0 && c) return 1;
          this._strip();
          var h;
          if (this.length > 1) h = 1;
          else {
            c && (i = -i), r(i <= 67108863, "Number is too big");
            var g = this.words[0] | 0;
            h = g === i ? 0 : g < i ? -1 : 1;
          }
          return this.negative !== 0 ? -h | 0 : h;
        }, n.prototype.cmp = function(i) {
          if (this.negative !== 0 && i.negative === 0) return -1;
          if (this.negative === 0 && i.negative !== 0) return 1;
          var c = this.ucmp(i);
          return this.negative !== 0 ? -c | 0 : c;
        }, n.prototype.ucmp = function(i) {
          if (this.length > i.length) return 1;
          if (this.length < i.length) return -1;
          for (var c = 0, h = this.length - 1; h >= 0; h--) {
            var g = this.words[h] | 0, w = i.words[h] | 0;
            if (g !== w) {
              g < w ? c = -1 : g > w && (c = 1);
              break;
            }
          }
          return c;
        }, n.prototype.gtn = function(i) {
          return this.cmpn(i) === 1;
        }, n.prototype.gt = function(i) {
          return this.cmp(i) === 1;
        }, n.prototype.gten = function(i) {
          return this.cmpn(i) >= 0;
        }, n.prototype.gte = function(i) {
          return this.cmp(i) >= 0;
        }, n.prototype.ltn = function(i) {
          return this.cmpn(i) === -1;
        }, n.prototype.lt = function(i) {
          return this.cmp(i) === -1;
        }, n.prototype.lten = function(i) {
          return this.cmpn(i) <= 0;
        }, n.prototype.lte = function(i) {
          return this.cmp(i) <= 0;
        }, n.prototype.eqn = function(i) {
          return this.cmpn(i) === 0;
        }, n.prototype.eq = function(i) {
          return this.cmp(i) === 0;
        }, n.red = function(i) {
          return new D(i);
        }, n.prototype.toRed = function(i) {
          return r(!this.red, "Already a number in reduction context"), r(this.negative === 0, "red works only with positives"), i.convertTo(this)._forceRed(i);
        }, n.prototype.fromRed = function() {
          return r(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this);
        }, n.prototype._forceRed = function(i) {
          return this.red = i, this;
        }, n.prototype.forceRed = function(i) {
          return r(!this.red, "Already a number in reduction context"), this._forceRed(i);
        }, n.prototype.redAdd = function(i) {
          return r(this.red, "redAdd works only with red numbers"), this.red.add(this, i);
        }, n.prototype.redIAdd = function(i) {
          return r(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, i);
        }, n.prototype.redSub = function(i) {
          return r(this.red, "redSub works only with red numbers"), this.red.sub(this, i);
        }, n.prototype.redISub = function(i) {
          return r(this.red, "redISub works only with red numbers"), this.red.isub(this, i);
        }, n.prototype.redShl = function(i) {
          return r(this.red, "redShl works only with red numbers"), this.red.shl(this, i);
        }, n.prototype.redMul = function(i) {
          return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, i), this.red.mul(this, i);
        }, n.prototype.redIMul = function(i) {
          return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, i), this.red.imul(this, i);
        }, n.prototype.redSqr = function() {
          return r(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this);
        }, n.prototype.redISqr = function() {
          return r(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this);
        }, n.prototype.redSqrt = function() {
          return r(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this);
        }, n.prototype.redInvm = function() {
          return r(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this);
        }, n.prototype.redNeg = function() {
          return r(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this);
        }, n.prototype.redPow = function(i) {
          return r(this.red && !i.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, i);
        };
        var ee = {
          k256: null,
          p224: null,
          p192: null,
          p25519: null
        };
        function oe(f, i) {
          this.name = f, this.p = new n(i, 16), this.n = this.p.bitLength(), this.k = new n(1).iushln(this.n).isub(this.p), this.tmp = this._tmp();
        }
        oe.prototype._tmp = function() {
          var i = new n(null);
          return i.words = new Array(Math.ceil(this.n / 13)), i;
        }, oe.prototype.ireduce = function(i) {
          var c = i, h;
          do
            this.split(c, this.tmp), c = this.imulK(c), c = c.iadd(this.tmp), h = c.bitLength();
          while (h > this.n);
          var g = h < this.n ? -1 : c.ucmp(this.p);
          return g === 0 ? (c.words[0] = 0, c.length = 1) : g > 0 ? c.isub(this.p) : c.strip !== void 0 ? c.strip() : c._strip(), c;
        }, oe.prototype.split = function(i, c) {
          i.iushrn(this.n, 0, c);
        }, oe.prototype.imulK = function(i) {
          return i.imul(this.k);
        };
        function Q() {
          oe.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f");
        }
        s(Q, oe), Q.prototype.split = function(i, c) {
          for (var h = 4194303, g = Math.min(i.length, 9), w = 0; w < g; w++) c.words[w] = i.words[w];
          if (c.length = g, i.length <= 9) {
            i.words[0] = 0, i.length = 1;
            return;
          }
          var v = i.words[9];
          for (c.words[c.length++] = v & h, w = 10; w < i.length; w++) {
            var _ = i.words[w] | 0;
            i.words[w - 10] = (_ & h) << 4 | v >>> 22, v = _;
          }
          v >>>= 22, i.words[w - 10] = v, v === 0 && i.length > 10 ? i.length -= 10 : i.length -= 9;
        }, Q.prototype.imulK = function(i) {
          i.words[i.length] = 0, i.words[i.length + 1] = 0, i.length += 2;
          for (var c = 0, h = 0; h < i.length; h++) {
            var g = i.words[h] | 0;
            c += g * 977, i.words[h] = c & 67108863, c = g * 64 + (c / 67108864 | 0);
          }
          return i.words[i.length - 1] === 0 && (i.length--, i.words[i.length - 1] === 0 && i.length--), i;
        };
        function de() {
          oe.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001");
        }
        s(de, oe);
        function le() {
          oe.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff");
        }
        s(le, oe);
        function ne() {
          oe.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed");
        }
        s(ne, oe), ne.prototype.imulK = function(i) {
          for (var c = 0, h = 0; h < i.length; h++) {
            var g = (i.words[h] | 0) * 19 + c, w = g & 67108863;
            g >>>= 26, i.words[h] = w, c = g;
          }
          return c !== 0 && (i.words[i.length++] = c), i;
        }, n._prime = function(i) {
          if (ee[i]) return ee[i];
          var c;
          if (i === "k256") c = new Q();
          else if (i === "p224") c = new de();
          else if (i === "p192") c = new le();
          else if (i === "p25519") c = new ne();
          else throw new Error("Unknown prime " + i);
          return ee[i] = c, c;
        };
        function D(f) {
          if (typeof f == "string") {
            var i = n._prime(f);
            this.m = i.p, this.prime = i;
          } else r(f.gtn(1), "modulus must be greater than 1"), this.m = f, this.prime = null;
        }
        D.prototype._verify1 = function(i) {
          r(i.negative === 0, "red works only with positives"), r(i.red, "red works only with red numbers");
        }, D.prototype._verify2 = function(i, c) {
          r((i.negative | c.negative) === 0, "red works only with positives"), r(i.red && i.red === c.red, "red works only with red numbers");
        }, D.prototype.imod = function(i) {
          return this.prime ? this.prime.ireduce(i)._forceRed(this) : (k(i, i.umod(this.m)._forceRed(this)), i);
        }, D.prototype.neg = function(i) {
          return i.isZero() ? i.clone() : this.m.sub(i)._forceRed(this);
        }, D.prototype.add = function(i, c) {
          this._verify2(i, c);
          var h = i.add(c);
          return h.cmp(this.m) >= 0 && h.isub(this.m), h._forceRed(this);
        }, D.prototype.iadd = function(i, c) {
          this._verify2(i, c);
          var h = i.iadd(c);
          return h.cmp(this.m) >= 0 && h.isub(this.m), h;
        }, D.prototype.sub = function(i, c) {
          this._verify2(i, c);
          var h = i.sub(c);
          return h.cmpn(0) < 0 && h.iadd(this.m), h._forceRed(this);
        }, D.prototype.isub = function(i, c) {
          this._verify2(i, c);
          var h = i.isub(c);
          return h.cmpn(0) < 0 && h.iadd(this.m), h;
        }, D.prototype.shl = function(i, c) {
          return this._verify1(i), this.imod(i.ushln(c));
        }, D.prototype.imul = function(i, c) {
          return this._verify2(i, c), this.imod(i.imul(c));
        }, D.prototype.mul = function(i, c) {
          return this._verify2(i, c), this.imod(i.mul(c));
        }, D.prototype.isqr = function(i) {
          return this.imul(i, i.clone());
        }, D.prototype.sqr = function(i) {
          return this.mul(i, i);
        }, D.prototype.sqrt = function(i) {
          if (i.isZero()) return i.clone();
          var c = this.m.andln(3);
          if (r(c % 2 === 1), c === 3) {
            var h = this.m.add(new n(1)).iushrn(2);
            return this.pow(i, h);
          }
          for (var g = this.m.subn(1), w = 0; !g.isZero() && g.andln(1) === 0; ) w++, g.iushrn(1);
          r(!g.isZero());
          var v = new n(1).toRed(this), _ = v.redNeg(), y = this.m.subn(1).iushrn(1), u = this.m.bitLength();
          for (u = new n(2 * u * u).toRed(this); this.pow(u, y).cmp(_) !== 0; ) u.redIAdd(_);
          for (var b = this.pow(u, g), q = this.pow(i, g.addn(1).iushrn(1)), W = this.pow(i, g), V = w; W.cmp(v) !== 0; ) {
            for (var ot = W, ce = 0; ot.cmp(v) !== 0; ce++) ot = ot.redSqr();
            r(ce < V);
            var ue = this.pow(b, new n(1).iushln(V - ce - 1));
            q = q.redMul(ue), b = ue.redSqr(), W = W.redMul(b), V = ce;
          }
          return q;
        }, D.prototype.invm = function(i) {
          var c = i._invmp(this.m);
          return c.negative !== 0 ? (c.negative = 0, this.imod(c).redNeg()) : this.imod(c);
        }, D.prototype.pow = function(i, c) {
          if (c.isZero()) return new n(1).toRed(this);
          if (c.cmpn(1) === 0) return i.clone();
          var h = 4, g = new Array(1 << h);
          g[0] = new n(1).toRed(this), g[1] = i;
          for (var w = 2; w < g.length; w++) g[w] = this.mul(g[w - 1], i);
          var v = g[0], _ = 0, y = 0, u = c.bitLength() % 26;
          for (u === 0 && (u = 26), w = c.length - 1; w >= 0; w--) {
            for (var b = c.words[w], q = u - 1; q >= 0; q--) {
              var W = b >> q & 1;
              if (v !== g[0] && (v = this.sqr(v)), W === 0 && _ === 0) {
                y = 0;
                continue;
              }
              _ <<= 1, _ |= W, y++, !(y !== h && (w !== 0 || q !== 0)) && (v = this.mul(v, g[_]), y = 0, _ = 0);
            }
            u = 26;
          }
          return v;
        }, D.prototype.convertTo = function(i) {
          var c = i.umod(this.m);
          return c === i ? c.clone() : c;
        }, D.prototype.convertFrom = function(i) {
          var c = i.clone();
          return c.red = null, c;
        }, n.mont = function(i) {
          return new L(i);
        };
        function L(f) {
          D.call(this, f), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new n(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv);
        }
        s(L, D), L.prototype.convertTo = function(i) {
          return this.imod(i.ushln(this.shift));
        }, L.prototype.convertFrom = function(i) {
          var c = this.imod(i.mul(this.rinv));
          return c.red = null, c;
        }, L.prototype.imul = function(i, c) {
          if (i.isZero() || c.isZero()) return i.words[0] = 0, i.length = 1, i;
          var h = i.imul(c), g = h.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), w = h.isub(g).iushrn(this.shift), v = w;
          return w.cmp(this.m) >= 0 ? v = w.isub(this.m) : w.cmpn(0) < 0 && (v = w.iadd(this.m)), v._forceRed(this);
        }, L.prototype.mul = function(i, c) {
          if (i.isZero() || c.isZero()) return new n(0)._forceRed(this);
          var h = i.mul(c), g = h.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), w = h.isub(g).iushrn(this.shift), v = w;
          return w.cmp(this.m) >= 0 ? v = w.isub(this.m) : w.cmpn(0) < 0 && (v = w.iadd(this.m)), v._forceRed(this);
        }, L.prototype.invm = function(i) {
          var c = this.imod(i._invmp(this.m).mul(this.r2));
          return c._forceRed(this);
        };
      })(o, Ap);
    })(ui)), ui.exports;
  }
  var Ep = Ip();
  const dc = Kn(Ep);
  var co, fc;
  function Rp() {
    if (fc) return co;
    fc = 1;
    var o = Tu(), e = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
    return co = o(e), co;
  }
  var Mp = Rp();
  const vt = Kn(Mp);
  var xp = 8078e3, Pp = 8078001, Tp = 8078004, Lp = 8078005, Cp = 8078006, Bp = 8078011;
  function Tl(o) {
    return Array.isArray(o) ? "%5B" + o.map(Tl).join("%2C%20") + "%5D" : typeof o == "bigint" ? `${o}n` : encodeURIComponent(String(o != null && Object.getPrototypeOf(o) === null ? {
      ...o
    } : o));
  }
  function Op([o, e]) {
    return `${o}=${Tl(e)}`;
  }
  function Np(o) {
    const e = Object.entries(o).map(Op).join("&");
    return btoa(e);
  }
  function zp(o, e = {}) {
    {
      let t = `Solana error #${o}; Decode this error by running \`npx @solana/errors decode -- ${o}`;
      return Object.keys(e).length && (t += ` '${Np(e)}'`), `${t}\``;
    }
  }
  var En = class extends Error {
    constructor(...[o, e]) {
      let t, r;
      e && Object.entries(Object.getOwnPropertyDescriptors(e)).forEach(([n, a]) => {
        n === "cause" ? r = {
          cause: a.value
        } : (t === void 0 && (t = {
          __code: o
        }), Object.defineProperty(t, n, a));
      });
      const s = zp(o, t);
      super(s, r);
      __publicField(this, "cause", this.cause);
      __publicField(this, "context");
      this.context = Object.freeze(t === void 0 ? {
        __code: o
      } : t), this.name = "SolanaError";
    }
  };
  function Kp(o, e) {
    return "fixedSize" in e ? e.fixedSize : e.getSizeFromValue(o);
  }
  function $p(o) {
    return Object.freeze({
      ...o,
      encode: (e) => {
        const t = new Uint8Array(Kp(e, o));
        return o.write(e, t, 0), t;
      }
    });
  }
  function Up(o) {
    return Object.freeze({
      ...o,
      decode: (e, t = 0) => o.read(e, t)[0]
    });
  }
  function bn(o) {
    return "fixedSize" in o && typeof o.fixedSize == "number";
  }
  function Wp(o, e) {
    if (bn(o) !== bn(e)) throw new En(Tp);
    if (bn(o) && bn(e) && o.fixedSize !== e.fixedSize) throw new En(Lp, {
      decoderFixedSize: e.fixedSize,
      encoderFixedSize: o.fixedSize
    });
    if (!bn(o) && !bn(e) && o.maxSize !== e.maxSize) throw new En(Cp, {
      decoderMaxSize: e.maxSize,
      encoderMaxSize: o.maxSize
    });
    return {
      ...e,
      ...o,
      decode: e.decode,
      encode: o.encode,
      read: e.read,
      write: o.write
    };
  }
  function Dp(o, e, t = 0) {
    if (e.length - t <= 0) throw new En(xp, {
      codecDescription: o
    });
  }
  function qp(o, e, t, r = 0) {
    const s = t.length - r;
    if (s < e) throw new En(Pp, {
      bytesLength: s,
      codecDescription: o,
      expected: e
    });
  }
  function Vp(o, e, t) {
    const r = o.byteOffset + (e ?? 0), s = t ?? o.byteLength;
    let n;
    return typeof SharedArrayBuffer > "u" ? n = o.buffer : o.buffer instanceof SharedArrayBuffer ? (n = new ArrayBuffer(o.length), new Uint8Array(n).set(new Uint8Array(o))) : n = o.buffer, (r === 0 || r === -o.byteLength) && s === o.byteLength ? n : n.slice(r, r + s);
  }
  function Fp(o, e, t, r) {
    if (r < e || r > t) throw new En(Bp, {
      codecDescription: o,
      max: t,
      min: e,
      value: r
    });
  }
  function Ll(o) {
    return (o == null ? void 0 : o.endian) !== 1;
  }
  function Hp(o) {
    return $p({
      fixedSize: o.size,
      write(e, t, r) {
        o.range && Fp(o.name, o.range[0], o.range[1], e);
        const s = new ArrayBuffer(o.size);
        return o.set(new DataView(s), e, Ll(o.config)), t.set(new Uint8Array(s), r), r + o.size;
      }
    });
  }
  function Gp(o) {
    return Up({
      fixedSize: o.size,
      read(e, t = 0) {
        Dp(o.name, e, t), qp(o.name, o.size, e, t);
        const r = new DataView(Vp(e, t, o.size));
        return [
          o.get(r, Ll(o.config)),
          t + o.size
        ];
      }
    });
  }
  var Cl = (o = {}) => Hp({
    config: o,
    name: "u64",
    range: [
      0n,
      BigInt("0xffffffffffffffff")
    ],
    set: (e, t, r) => e.setBigUint64(0, BigInt(t), r),
    size: 8
  }), jp = (o = {}) => Gp({
    config: o,
    get: (e, t) => e.getBigUint64(0, t),
    name: "u64",
    size: 8
  }), Yp = (o = {}) => Wp(Cl(o), jp(o));
  let Zp = class extends TypeError {
    constructor(e, t) {
      let r;
      const { message: s, explanation: n, ...a } = e, { path: l } = e, d = l.length === 0 ? s : `At path: ${l.join(".")} -- ${s}`;
      super(n ?? d), n != null && (this.cause = d), Object.assign(this, a), this.name = this.constructor.name, this.failures = () => r ?? (r = [
        e,
        ...t()
      ]);
    }
  };
  function Jp(o) {
    return Os(o) && typeof o[Symbol.iterator] == "function";
  }
  function Os(o) {
    return typeof o == "object" && o != null;
  }
  function vi(o) {
    return Os(o) && !Array.isArray(o);
  }
  function er(o) {
    return typeof o == "symbol" ? o.toString() : typeof o == "string" ? JSON.stringify(o) : `${o}`;
  }
  function Xp(o) {
    const { done: e, value: t } = o.next();
    return e ? void 0 : t;
  }
  function Qp(o, e, t, r) {
    if (o === true) return;
    o === false ? o = {} : typeof o == "string" && (o = {
      message: o
    });
    const { path: s, branch: n } = e, { type: a } = t, { refinement: l, message: d = `Expected a value of type \`${a}\`${l ? ` with refinement \`${l}\`` : ""}, but received: \`${er(r)}\`` } = o;
    return {
      value: r,
      type: a,
      refinement: l,
      key: s[s.length - 1],
      path: s,
      branch: n,
      ...o,
      message: d
    };
  }
  function* gc(o, e, t, r) {
    Jp(o) || (o = [
      o
    ]);
    for (const s of o) {
      const n = Qp(s, e, t, r);
      n && (yield n);
    }
  }
  function* ba(o, e, t = {}) {
    const { path: r = [], branch: s = [
      o
    ], coerce: n = false, mask: a = false } = t, l = {
      path: r,
      branch: s,
      mask: a
    };
    n && (o = e.coercer(o, l));
    let d = "valid";
    for (const p of e.validator(o, l)) p.explanation = t.message, d = "not_valid", yield [
      p,
      void 0
    ];
    for (let [p, k, A] of e.entries(o, l)) {
      const E = ba(k, A, {
        path: p === void 0 ? r : [
          ...r,
          p
        ],
        branch: p === void 0 ? s : [
          ...s,
          k
        ],
        coerce: n,
        mask: a,
        message: t.message
      });
      for (const S of E) S[0] ? (d = S[0].refinement != null ? "not_refined" : "not_valid", yield [
        S[0],
        void 0
      ]) : n && (k = S[1], p === void 0 ? o = k : o instanceof Map ? o.set(p, k) : o instanceof Set ? o.add(k) : Os(o) && (k !== void 0 || p in o) && (o[p] = k));
    }
    if (d !== "not_valid") for (const p of e.refiner(o, l)) p.explanation = t.message, d = "not_refined", yield [
      p,
      void 0
    ];
    d === "valid" && (yield [
      void 0,
      o
    ]);
  }
  let dr = class {
    constructor(e) {
      const { type: t, schema: r, validator: s, refiner: n, coercer: a = (d) => d, entries: l = function* () {
      } } = e;
      this.type = t, this.schema = r, this.entries = l, this.coercer = a, s ? this.validator = (d, p) => {
        const k = s(d, p);
        return gc(k, p, this, d);
      } : this.validator = () => [], n ? this.refiner = (d, p) => {
        const k = n(d, p);
        return gc(k, p, this, d);
      } : this.refiner = () => [];
    }
    assert(e, t) {
      return Bl(e, this, t);
    }
    create(e, t) {
      return Y(e, this, t);
    }
    is(e) {
      return Ol(e, this);
    }
    mask(e, t) {
      return ey(e, this, t);
    }
    validate(e, t = {}) {
      return Ns(e, this, t);
    }
  };
  function Bl(o, e, t) {
    const r = Ns(o, e, {
      message: t
    });
    if (r[0]) throw r[0];
  }
  function Y(o, e, t) {
    const r = Ns(o, e, {
      coerce: true,
      message: t
    });
    if (r[0]) throw r[0];
    return r[1];
  }
  function ey(o, e, t) {
    const r = Ns(o, e, {
      coerce: true,
      mask: true,
      message: t
    });
    if (r[0]) throw r[0];
    return r[1];
  }
  function Ol(o, e) {
    return !Ns(o, e)[0];
  }
  function Ns(o, e, t = {}) {
    const r = ba(o, e, t), s = Xp(r);
    return s[0] ? [
      new Zp(s[0], function* () {
        for (const a of r) a[0] && (yield a[0]);
      }),
      void 0
    ] : [
      void 0,
      s[1]
    ];
  }
  function fn(o, e) {
    return new dr({
      type: o,
      schema: null,
      validator: e
    });
  }
  function ty() {
    return fn("any", () => true);
  }
  function X(o) {
    return new dr({
      type: "array",
      schema: o,
      *entries(e) {
        if (o && Array.isArray(e)) for (const [t, r] of e.entries()) yield [
          t,
          r,
          o
        ];
      },
      coercer(e) {
        return Array.isArray(e) ? e.slice() : e;
      },
      validator(e) {
        return Array.isArray(e) || `Expected an array value, but received: ${er(e)}`;
      }
    });
  }
  function lr() {
    return fn("boolean", (o) => typeof o == "boolean");
  }
  function wa(o) {
    return fn("instance", (e) => e instanceof o || `Expected a \`${o.name}\` instance, but received: ${er(e)}`);
  }
  function kt(o) {
    const e = er(o), t = typeof o;
    return new dr({
      type: "literal",
      schema: t === "string" || t === "number" || t === "boolean" ? o : null,
      validator(r) {
        return r === o || `Expected the literal \`${e}\`, but received: ${er(r)}`;
      }
    });
  }
  function ry() {
    return fn("never", () => false);
  }
  function j(o) {
    return new dr({
      ...o,
      validator: (e, t) => e === null || o.validator(e, t),
      refiner: (e, t) => e === null || o.refiner(e, t)
    });
  }
  function T() {
    return fn("number", (o) => typeof o == "number" && !isNaN(o) || `Expected a number, but received: ${er(o)}`);
  }
  function ie(o) {
    return new dr({
      ...o,
      validator: (e, t) => e === void 0 || o.validator(e, t),
      refiner: (e, t) => e === void 0 || o.refiner(e, t)
    });
  }
  function Nl(o, e) {
    return new dr({
      type: "record",
      schema: null,
      *entries(t) {
        if (Os(t)) for (const r in t) {
          const s = t[r];
          yield [
            r,
            r,
            o
          ], yield [
            r,
            s,
            e
          ];
        }
      },
      validator(t) {
        return vi(t) || `Expected an object, but received: ${er(t)}`;
      },
      coercer(t) {
        return vi(t) ? {
          ...t
        } : t;
      }
    });
  }
  function H() {
    return fn("string", (o) => typeof o == "string" || `Expected a string, but received: ${er(o)}`);
  }
  function ka(o) {
    const e = ry();
    return new dr({
      type: "tuple",
      schema: null,
      *entries(t) {
        if (Array.isArray(t)) {
          const r = Math.max(o.length, t.length);
          for (let s = 0; s < r; s++) yield [
            s,
            t[s],
            o[s] || e
          ];
        }
      },
      validator(t) {
        return Array.isArray(t) || `Expected an array, but received: ${er(t)}`;
      },
      coercer(t) {
        return Array.isArray(t) ? t.slice() : t;
      }
    });
  }
  function K(o) {
    const e = Object.keys(o);
    return new dr({
      type: "type",
      schema: o,
      *entries(t) {
        if (Os(t)) for (const r of e) yield [
          r,
          t[r],
          o[r]
        ];
      },
      validator(t) {
        return vi(t) || `Expected an object, but received: ${er(t)}`;
      },
      coercer(t) {
        return vi(t) ? {
          ...t
        } : t;
      }
    });
  }
  function Kt(o) {
    const e = o.map((t) => t.type).join(" | ");
    return new dr({
      type: "union",
      schema: null,
      coercer(t, r) {
        for (const s of o) {
          const [n, a] = s.validate(t, {
            coerce: true,
            mask: r.mask
          });
          if (!n) return a;
        }
        return t;
      },
      validator(t, r) {
        const s = [];
        for (const n of o) {
          const [...a] = ba(t, n, r), [l] = a;
          if (l[0]) for (const [d] of a) d && s.push(d);
          else return [];
        }
        return [
          `Expected the value to satisfy a union of \`${e}\`, but received: ${er(t)}`,
          ...s
        ];
      }
    });
  }
  function Fn() {
    return fn("unknown", () => true);
  }
  function zs(o, e, t) {
    return new dr({
      ...o,
      coercer: (r, s) => Ol(r, e) ? o.coercer(t(r, s), s) : o.coercer(r, s)
    });
  }
  const ny = Xt.utils.randomPrivateKey, pc = () => {
    const o = Xt.utils.randomPrivateKey(), e = Si(o), t = new Uint8Array(64);
    return t.set(o), t.set(e, 32), {
      publicKey: e,
      secretKey: t
    };
  }, Si = Xt.getPublicKey;
  function yc(o) {
    try {
      return Xt.ExtendedPoint.fromHex(o), true;
    } catch {
      return false;
    }
  }
  const va = (o, e) => Xt.sign(o, e.slice(0, 32)), sy = Xt.verify, Qe = (o) => B.isBuffer(o) ? o : o instanceof Uint8Array ? B.from(o.buffer, o.byteOffset, o.byteLength) : B.from(o);
  let Sa = class {
    constructor(e) {
      Object.assign(this, e);
    }
    encode() {
      return B.from(An.serialize(Ss, this));
    }
    static decode(e) {
      return An.deserialize(Ss, this, e);
    }
    static decodeUnchecked(e) {
      return An.deserializeUnchecked(Ss, this, e);
    }
  };
  class iy extends Sa {
    constructor(e) {
      if (super(e), this.enum = "", Object.keys(e).length !== 1) throw new Error("Enum can only take single value");
      Object.keys(e).map((t) => {
        this.enum = t;
      });
    }
  }
  const Ss = /* @__PURE__ */ new Map();
  var zl;
  const Kl = 32, jt = 32;
  function oy(o) {
    return o._bn !== void 0;
  }
  let mc = 1;
  class $ extends Sa {
    constructor(e) {
      if (super({}), this._bn = void 0, oy(e)) this._bn = e._bn;
      else {
        if (typeof e == "string") {
          const t = vt.decode(e);
          if (t.length != jt) throw new Error("Invalid public key input");
          this._bn = new dc(t);
        } else this._bn = new dc(e);
        if (this._bn.byteLength() > jt) throw new Error("Invalid public key input");
      }
    }
    static unique() {
      const e = new $(mc);
      return mc += 1, new $(e.toBuffer());
    }
    equals(e) {
      return this._bn.eq(e._bn);
    }
    toBase58() {
      return vt.encode(this.toBytes());
    }
    toJSON() {
      return this.toBase58();
    }
    toBytes() {
      const e = this.toBuffer();
      return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
    }
    toBuffer() {
      const e = this._bn.toArrayLike(B);
      if (e.length === jt) return e;
      const t = B.alloc(32);
      return e.copy(t, 32 - e.length), t;
    }
    get [Symbol.toStringTag]() {
      return `PublicKey(${this.toString()})`;
    }
    toString() {
      return this.toBase58();
    }
    static async createWithSeed(e, t, r) {
      const s = B.concat([
        e.toBuffer(),
        B.from(t),
        r.toBuffer()
      ]), n = Ln(s);
      return new $(n);
    }
    static createProgramAddressSync(e, t) {
      let r = B.alloc(0);
      e.forEach(function(n) {
        if (n.length > Kl) throw new TypeError("Max seed length exceeded");
        r = B.concat([
          r,
          Qe(n)
        ]);
      }), r = B.concat([
        r,
        t.toBuffer(),
        B.from("ProgramDerivedAddress")
      ]);
      const s = Ln(r);
      if (yc(s)) throw new Error("Invalid seeds, address must fall off the curve");
      return new $(s);
    }
    static async createProgramAddress(e, t) {
      return this.createProgramAddressSync(e, t);
    }
    static findProgramAddressSync(e, t) {
      let r = 255, s;
      for (; r != 0; ) {
        try {
          const n = e.concat(B.from([
            r
          ]));
          s = this.createProgramAddressSync(n, t);
        } catch (n) {
          if (n instanceof TypeError) throw n;
          r--;
          continue;
        }
        return [
          s,
          r
        ];
      }
      throw new Error("Unable to find a viable program address nonce");
    }
    static async findProgramAddress(e, t) {
      return this.findProgramAddressSync(e, t);
    }
    static isOnCurve(e) {
      const t = new $(e);
      return yc(t.toBytes());
    }
  }
  zl = $;
  $.default = new zl("11111111111111111111111111111111");
  Ss.set($, {
    kind: "struct",
    fields: [
      [
        "_bn",
        "u256"
      ]
    ]
  });
  class ay {
    constructor(e) {
      if (this._publicKey = void 0, this._secretKey = void 0, e) {
        const t = Qe(e);
        if (e.length !== 64) throw new Error("bad secret key size");
        this._publicKey = t.slice(32, 64), this._secretKey = t.slice(0, 32);
      } else this._secretKey = Qe(ny()), this._publicKey = Qe(Si(this._secretKey));
    }
    get publicKey() {
      return new $(this._publicKey);
    }
    get secretKey() {
      return B.concat([
        this._secretKey,
        this._publicKey
      ], 64);
    }
  }
  const cy = new $("BPFLoader1111111111111111111111111111111111"), Ir = 1232, Ks = 127, _r = 64, $l = 129, uy = 4096;
  class _a extends Error {
    constructor(e) {
      super(`Signature ${e} has expired: block height exceeded.`), this.signature = void 0, this.signature = e;
    }
  }
  Object.defineProperty(_a.prototype, "name", {
    value: "TransactionExpiredBlockheightExceededError"
  });
  class Aa extends Error {
    constructor(e, t) {
      super(`Transaction was not confirmed in ${t.toFixed(2)} seconds. It is unknown if it succeeded or failed. Check signature ${e} using the Solana Explorer or CLI tools.`), this.signature = void 0, this.signature = e;
    }
  }
  Object.defineProperty(Aa.prototype, "name", {
    value: "TransactionExpiredTimeoutError"
  });
  class Sn extends Error {
    constructor(e) {
      super(`Signature ${e} has expired: the nonce is no longer valid.`), this.signature = void 0, this.signature = e;
    }
  }
  Object.defineProperty(Sn.prototype, "name", {
    value: "TransactionExpiredNonceInvalidError"
  });
  class On {
    constructor(e, t) {
      this.staticAccountKeys = void 0, this.accountKeysFromLookups = void 0, this.staticAccountKeys = e, this.accountKeysFromLookups = t;
    }
    keySegments() {
      const e = [
        this.staticAccountKeys
      ];
      return this.accountKeysFromLookups && (e.push(this.accountKeysFromLookups.writable), e.push(this.accountKeysFromLookups.readonly)), e;
    }
    get(e) {
      for (const t of this.keySegments()) {
        if (e < t.length) return t[e];
        e -= t.length;
      }
    }
    get length() {
      return this.keySegments().flat().length;
    }
    compileInstructions(e) {
      if (this.length > 256) throw new Error("Account index overflow encountered during compilation");
      const r = /* @__PURE__ */ new Map();
      this.keySegments().flat().forEach((n, a) => {
        r.set(n.toBase58(), a);
      });
      const s = (n) => {
        const a = r.get(n.toBase58());
        if (a === void 0) throw new Error("Encountered an unknown instruction account key during compilation");
        return a;
      };
      return e.map((n) => ({
        programIdIndex: s(n.programId),
        accountKeyIndexes: n.keys.map((a) => s(a.pubkey)),
        data: n.data
      }));
    }
  }
  const nt = (o = "publicKey") => m.blob(32, o), ly = (o = "signature") => m.blob(64, o), en = (o = "string") => {
    const e = m.struct([
      m.u32("length"),
      m.u32("lengthPadding"),
      m.blob(m.offset(m.u32(), -8), "chars")
    ], o), t = e.decode.bind(e), r = e.encode.bind(e), s = e;
    return s.decode = (n, a) => t(n, a).chars.toString(), s.encode = (n, a, l) => {
      const d = {
        chars: B.from(n, "utf8")
      };
      return r(d, a, l);
    }, s.alloc = (n) => m.u32().span + m.u32().span + B.from(n, "utf8").length, s;
  }, hy = (o = "authorized") => m.struct([
    nt("staker"),
    nt("withdrawer")
  ], o), dy = (o = "lockup") => m.struct([
    m.ns64("unixTimestamp"),
    m.ns64("epoch"),
    nt("custodian")
  ], o), fy = (o = "voteInit") => m.struct([
    nt("nodePubkey"),
    nt("authorizedVoter"),
    nt("authorizedWithdrawer"),
    m.u8("commission")
  ], o), gy = (o = "voteAuthorizeWithSeedArgs") => m.struct([
    m.u32("voteAuthorizationType"),
    nt("currentAuthorityDerivedKeyOwnerPubkey"),
    en("currentAuthorityDerivedKeySeed"),
    nt("newAuthorized")
  ], o);
  function Ul(o, e) {
    const t = (s) => {
      if (s.span >= 0) return s.span;
      if (typeof s.alloc == "function") return s.alloc(e[s.property]);
      if ("count" in s && "elementLayout" in s) {
        const n = e[s.property];
        if (Array.isArray(n)) return n.length * t(s.elementLayout);
      } else if ("fields" in s) return Ul({
        layout: s
      }, e[s.property]);
      return 0;
    };
    let r = 0;
    return o.layout.fields.forEach((s) => {
      r += t(s);
    }), r;
  }
  function Ut(o) {
    let e = 0, t = 0;
    for (; ; ) {
      let r = o.shift();
      if (e |= (r & 127) << t * 7, t += 1, (r & 128) === 0) break;
    }
    return e;
  }
  function Vt(o, e) {
    let t = e;
    for (; ; ) {
      let r = t & 127;
      if (t >>= 7, t == 0) {
        o.push(r);
        break;
      } else r |= 128, o.push(r);
    }
  }
  function tt(o, e) {
    if (!o) throw new Error(e || "Assertion failed");
  }
  class qi {
    constructor(e, t) {
      this.payer = void 0, this.keyMetaMap = void 0, this.payer = e, this.keyMetaMap = t;
    }
    static compile(e, t) {
      const r = /* @__PURE__ */ new Map(), s = (a) => {
        const l = a.toBase58();
        let d = r.get(l);
        return d === void 0 && (d = {
          isSigner: false,
          isWritable: false,
          isInvoked: false
        }, r.set(l, d)), d;
      }, n = s(t);
      n.isSigner = true, n.isWritable = true;
      for (const a of e) {
        s(a.programId).isInvoked = true;
        for (const l of a.keys) {
          const d = s(l.pubkey);
          d.isSigner || (d.isSigner = l.isSigner), d.isWritable || (d.isWritable = l.isWritable);
        }
      }
      return new qi(t, r);
    }
    getMessageComponents() {
      const e = [
        ...this.keyMetaMap.entries()
      ];
      tt(e.length <= 256, "Max static account keys length exceeded");
      const t = e.filter(([, d]) => d.isSigner && d.isWritable), r = e.filter(([, d]) => d.isSigner && !d.isWritable), s = e.filter(([, d]) => !d.isSigner && d.isWritable), n = e.filter(([, d]) => !d.isSigner && !d.isWritable), a = {
        numRequiredSignatures: t.length + r.length,
        numReadonlySignedAccounts: r.length,
        numReadonlyUnsignedAccounts: n.length
      };
      {
        tt(t.length > 0, "Expected at least one writable signer key");
        const [d] = t[0];
        tt(d === this.payer.toBase58(), "Expected first writable signer key to be the fee payer");
      }
      const l = [
        ...t.map(([d]) => new $(d)),
        ...r.map(([d]) => new $(d)),
        ...s.map(([d]) => new $(d)),
        ...n.map(([d]) => new $(d))
      ];
      return [
        a,
        l
      ];
    }
    extractTableLookup(e) {
      const [t, r] = this.drainKeysFoundInLookupTable(e.state.addresses, (a) => !a.isSigner && !a.isInvoked && a.isWritable), [s, n] = this.drainKeysFoundInLookupTable(e.state.addresses, (a) => !a.isSigner && !a.isInvoked && !a.isWritable);
      if (!(t.length === 0 && s.length === 0)) return [
        {
          accountKey: e.key,
          writableIndexes: t,
          readonlyIndexes: s
        },
        {
          writable: r,
          readonly: n
        }
      ];
    }
    drainKeysFoundInLookupTable(e, t) {
      const r = new Array(), s = new Array();
      for (const [n, a] of this.keyMetaMap.entries()) if (t(a)) {
        const l = new $(n), d = e.findIndex((p) => p.equals(l));
        d >= 0 && (tt(d < 256, "Max lookup table index exceeded"), r.push(d), s.push(l), this.keyMetaMap.delete(n));
      }
      return [
        r,
        s
      ];
    }
  }
  const Wl = "Reached end of buffer unexpectedly";
  function xt(o) {
    if (o.length === 0) throw new Error(Wl);
    return o.shift();
  }
  function Tt(o, ...e) {
    const [t] = e;
    if (e.length === 2 ? t + (e[1] ?? 0) > o.length : t >= o.length) throw new Error(Wl);
    return o.splice(...e);
  }
  class tr {
    constructor(e) {
      this.header = void 0, this.accountKeys = void 0, this.recentBlockhash = void 0, this.instructions = void 0, this.indexToProgramIds = /* @__PURE__ */ new Map(), this.header = e.header, this.accountKeys = e.accountKeys.map((t) => new $(t)), this.recentBlockhash = e.recentBlockhash, this.instructions = e.instructions, this.instructions.forEach((t) => this.indexToProgramIds.set(t.programIdIndex, this.accountKeys[t.programIdIndex]));
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
        data: vt.decode(e.data)
      }));
    }
    get addressTableLookups() {
      return [];
    }
    getAccountKeys() {
      return new On(this.staticAccountKeys);
    }
    static compile(e) {
      const t = qi.compile(e.instructions, e.payerKey), [r, s] = t.getMessageComponents(), a = new On(s).compileInstructions(e.instructions).map((l) => ({
        programIdIndex: l.programIdIndex,
        accounts: l.accountKeyIndexes,
        data: vt.encode(l.data)
      }));
      return new tr({
        header: r,
        accountKeys: s,
        recentBlockhash: e.recentBlockhash,
        instructions: a
      });
    }
    isAccountSigner(e) {
      return e < this.header.numRequiredSignatures;
    }
    isAccountWritable(e) {
      const t = this.header.numRequiredSignatures;
      if (e >= this.header.numRequiredSignatures) {
        const r = e - t, n = this.accountKeys.length - t - this.header.numReadonlyUnsignedAccounts;
        return r < n;
      } else {
        const r = t - this.header.numReadonlySignedAccounts;
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
      return this.accountKeys.filter((e, t) => !this.isProgramId(t));
    }
    serialize() {
      const e = this.accountKeys.length;
      let t = [];
      Vt(t, e);
      const r = this.instructions.map((A) => {
        const { accounts: E, programIdIndex: S } = A, I = Array.from(vt.decode(A.data));
        let R = [];
        Vt(R, E.length);
        let M = [];
        return Vt(M, I.length), {
          programIdIndex: S,
          keyIndicesCount: B.from(R),
          keyIndices: E,
          dataLength: B.from(M),
          data: I
        };
      });
      let s = [];
      Vt(s, r.length);
      let n = B.alloc(Ir);
      B.from(s).copy(n);
      let a = s.length;
      r.forEach((A) => {
        const S = m.struct([
          m.u8("programIdIndex"),
          m.blob(A.keyIndicesCount.length, "keyIndicesCount"),
          m.seq(m.u8("keyIndex"), A.keyIndices.length, "keyIndices"),
          m.blob(A.dataLength.length, "dataLength"),
          m.seq(m.u8("userdatum"), A.data.length, "data")
        ]).encode(A, n, a);
        a += S;
      }), n = n.slice(0, a);
      const l = m.struct([
        m.blob(1, "numRequiredSignatures"),
        m.blob(1, "numReadonlySignedAccounts"),
        m.blob(1, "numReadonlyUnsignedAccounts"),
        m.blob(t.length, "keyCount"),
        m.seq(nt("key"), e, "keys"),
        nt("recentBlockhash")
      ]), d = {
        numRequiredSignatures: B.from([
          this.header.numRequiredSignatures
        ]),
        numReadonlySignedAccounts: B.from([
          this.header.numReadonlySignedAccounts
        ]),
        numReadonlyUnsignedAccounts: B.from([
          this.header.numReadonlyUnsignedAccounts
        ]),
        keyCount: B.from(t),
        keys: this.accountKeys.map((A) => Qe(A.toBytes())),
        recentBlockhash: vt.decode(this.recentBlockhash)
      };
      let p = B.alloc(2048);
      const k = l.encode(d, p);
      return n.copy(p, k), p.slice(0, k + n.length);
    }
    static from(e) {
      let t = [
        ...e
      ];
      const r = xt(t);
      if (r !== (r & Ks)) throw new Error("Versioned messages must be deserialized with VersionedMessage.deserialize()");
      const s = xt(t), n = xt(t), a = Ut(t);
      let l = [];
      for (let E = 0; E < a; E++) {
        const S = Tt(t, 0, jt);
        l.push(new $(B.from(S)));
      }
      const d = Tt(t, 0, jt), p = Ut(t);
      let k = [];
      for (let E = 0; E < p; E++) {
        const S = xt(t), I = Ut(t), R = Tt(t, 0, I), M = Ut(t), x = Tt(t, 0, M), C = vt.encode(B.from(x));
        k.push({
          programIdIndex: S,
          accounts: R,
          data: C
        });
      }
      const A = {
        header: {
          numRequiredSignatures: r,
          numReadonlySignedAccounts: s,
          numReadonlyUnsignedAccounts: n
        },
        recentBlockhash: vt.encode(B.from(d)),
        accountKeys: l,
        instructions: k
      };
      return new tr(A);
    }
  }
  class on {
    constructor(e) {
      this.header = void 0, this.staticAccountKeys = void 0, this.recentBlockhash = void 0, this.compiledInstructions = void 0, this.addressTableLookups = void 0, this.header = e.header, this.staticAccountKeys = e.staticAccountKeys, this.recentBlockhash = e.recentBlockhash, this.compiledInstructions = e.compiledInstructions, this.addressTableLookups = e.addressTableLookups;
    }
    get version() {
      return 0;
    }
    get numAccountKeysFromLookups() {
      let e = 0;
      for (const t of this.addressTableLookups) e += t.readonlyIndexes.length + t.writableIndexes.length;
      return e;
    }
    getAccountKeys(e) {
      let t;
      if (e && "accountKeysFromLookups" in e && e.accountKeysFromLookups) {
        if (this.numAccountKeysFromLookups != e.accountKeysFromLookups.writable.length + e.accountKeysFromLookups.readonly.length) throw new Error("Failed to get account keys because of a mismatch in the number of account keys from lookups");
        t = e.accountKeysFromLookups;
      } else if (e && "addressLookupTableAccounts" in e && e.addressLookupTableAccounts) t = this.resolveAddressTableLookups(e.addressLookupTableAccounts);
      else if (this.addressTableLookups.length > 0) throw new Error("Failed to get account keys because address table lookups were not resolved");
      return new On(this.staticAccountKeys, t);
    }
    isAccountSigner(e) {
      return e < this.header.numRequiredSignatures;
    }
    isAccountWritable(e) {
      const t = this.header.numRequiredSignatures, r = this.staticAccountKeys.length;
      if (e >= r) {
        const s = e - r, n = this.addressTableLookups.reduce((a, l) => a + l.writableIndexes.length, 0);
        return s < n;
      } else if (e >= this.header.numRequiredSignatures) {
        const s = e - t, a = r - t - this.header.numReadonlyUnsignedAccounts;
        return s < a;
      } else {
        const s = t - this.header.numReadonlySignedAccounts;
        return e < s;
      }
    }
    resolveAddressTableLookups(e) {
      const t = {
        writable: [],
        readonly: []
      };
      for (const r of this.addressTableLookups) {
        const s = e.find((n) => n.key.equals(r.accountKey));
        if (!s) throw new Error(`Failed to find address lookup table account for table key ${r.accountKey.toBase58()}`);
        for (const n of r.writableIndexes) if (n < s.state.addresses.length) t.writable.push(s.state.addresses[n]);
        else throw new Error(`Failed to find address for index ${n} in address lookup table ${r.accountKey.toBase58()}`);
        for (const n of r.readonlyIndexes) if (n < s.state.addresses.length) t.readonly.push(s.state.addresses[n]);
        else throw new Error(`Failed to find address for index ${n} in address lookup table ${r.accountKey.toBase58()}`);
      }
      return t;
    }
    static compile(e) {
      const t = qi.compile(e.instructions, e.payerKey), r = new Array(), s = {
        writable: new Array(),
        readonly: new Array()
      }, n = e.addressLookupTableAccounts || [];
      for (const k of n) {
        const A = t.extractTableLookup(k);
        if (A !== void 0) {
          const [E, { writable: S, readonly: I }] = A;
          r.push(E), s.writable.push(...S), s.readonly.push(...I);
        }
      }
      const [a, l] = t.getMessageComponents(), p = new On(l, s).compileInstructions(e.instructions);
      return new on({
        header: a,
        staticAccountKeys: l,
        recentBlockhash: e.recentBlockhash,
        compiledInstructions: p,
        addressTableLookups: r
      });
    }
    serialize() {
      const e = Array();
      Vt(e, this.staticAccountKeys.length);
      const t = this.serializeInstructions(), r = Array();
      Vt(r, this.compiledInstructions.length);
      const s = this.serializeAddressTableLookups(), n = Array();
      Vt(n, this.addressTableLookups.length);
      const a = m.struct([
        m.u8("prefix"),
        m.struct([
          m.u8("numRequiredSignatures"),
          m.u8("numReadonlySignedAccounts"),
          m.u8("numReadonlyUnsignedAccounts")
        ], "header"),
        m.blob(e.length, "staticAccountKeysLength"),
        m.seq(nt(), this.staticAccountKeys.length, "staticAccountKeys"),
        nt("recentBlockhash"),
        m.blob(r.length, "instructionsLength"),
        m.blob(t.length, "serializedInstructions"),
        m.blob(n.length, "addressTableLookupsLength"),
        m.blob(s.length, "serializedAddressTableLookups")
      ]), l = new Uint8Array(Ir), p = a.encode({
        prefix: 128,
        header: this.header,
        staticAccountKeysLength: new Uint8Array(e),
        staticAccountKeys: this.staticAccountKeys.map((k) => k.toBytes()),
        recentBlockhash: vt.decode(this.recentBlockhash),
        instructionsLength: new Uint8Array(r),
        serializedInstructions: t,
        addressTableLookupsLength: new Uint8Array(n),
        serializedAddressTableLookups: s
      }, l);
      return l.slice(0, p);
    }
    serializeInstructions() {
      let e = 0;
      const t = new Uint8Array(Ir);
      for (const r of this.compiledInstructions) {
        const s = Array();
        Vt(s, r.accountKeyIndexes.length);
        const n = Array();
        Vt(n, r.data.length);
        const a = m.struct([
          m.u8("programIdIndex"),
          m.blob(s.length, "encodedAccountKeyIndexesLength"),
          m.seq(m.u8(), r.accountKeyIndexes.length, "accountKeyIndexes"),
          m.blob(n.length, "encodedDataLength"),
          m.blob(r.data.length, "data")
        ]);
        e += a.encode({
          programIdIndex: r.programIdIndex,
          encodedAccountKeyIndexesLength: new Uint8Array(s),
          accountKeyIndexes: r.accountKeyIndexes,
          encodedDataLength: new Uint8Array(n),
          data: r.data
        }, t, e);
      }
      return t.slice(0, e);
    }
    serializeAddressTableLookups() {
      let e = 0;
      const t = new Uint8Array(Ir);
      for (const r of this.addressTableLookups) {
        const s = Array();
        Vt(s, r.writableIndexes.length);
        const n = Array();
        Vt(n, r.readonlyIndexes.length);
        const a = m.struct([
          nt("accountKey"),
          m.blob(s.length, "encodedWritableIndexesLength"),
          m.seq(m.u8(), r.writableIndexes.length, "writableIndexes"),
          m.blob(n.length, "encodedReadonlyIndexesLength"),
          m.seq(m.u8(), r.readonlyIndexes.length, "readonlyIndexes")
        ]);
        e += a.encode({
          accountKey: r.accountKey.toBytes(),
          encodedWritableIndexesLength: new Uint8Array(s),
          writableIndexes: r.writableIndexes,
          encodedReadonlyIndexesLength: new Uint8Array(n),
          readonlyIndexes: r.readonlyIndexes
        }, t, e);
      }
      return t.slice(0, e);
    }
    static deserialize(e) {
      let t = [
        ...e
      ];
      const r = xt(t), s = r & Ks;
      tt(r !== s, "Expected versioned message but received legacy message");
      const n = s;
      tt(n === 0, `Expected versioned message with version 0 but found version ${n}`);
      const a = {
        numRequiredSignatures: xt(t),
        numReadonlySignedAccounts: xt(t),
        numReadonlyUnsignedAccounts: xt(t)
      }, l = [], d = Ut(t);
      for (let I = 0; I < d; I++) l.push(new $(Tt(t, 0, jt)));
      const p = vt.encode(Tt(t, 0, jt)), k = Ut(t), A = [];
      for (let I = 0; I < k; I++) {
        const R = xt(t), M = Ut(t), x = Tt(t, 0, M), C = Ut(t), O = new Uint8Array(Tt(t, 0, C));
        A.push({
          programIdIndex: R,
          accountKeyIndexes: x,
          data: O
        });
      }
      const E = Ut(t), S = [];
      for (let I = 0; I < E; I++) {
        const R = new $(Tt(t, 0, jt)), M = Ut(t), x = Tt(t, 0, M), C = Ut(t), O = Tt(t, 0, C);
        S.push({
          accountKey: R,
          writableIndexes: x,
          readonlyIndexes: O
        });
      }
      return new on({
        header: a,
        staticAccountKeys: l,
        recentBlockhash: p,
        compiledInstructions: A,
        addressTableLookups: S
      });
    }
  }
  const bc = 3, py = 4, yy = 8, my = 16;
  function js(o) {
    const e = Tt(o, 0, 4);
    return e[0] + e[1] * 2 ** 8 + e[2] * 2 ** 16 + e[3] * 2 ** 24;
  }
  function by(o) {
    const e = Tt(o, 0, 8);
    let t = BigInt(0);
    for (let r = e.length - 1; r >= 0; r--) t = t << BigInt(8) | BigInt(e[r]);
    return tt(t <= BigInt(Number.MAX_SAFE_INTEGER), "Expected u64 value to be within the safe integer range"), Number(t);
  }
  class $s {
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
      return new On(this.staticAccountKeys);
    }
    isAccountSigner(e) {
      return e < this.header.numRequiredSignatures;
    }
    isAccountWritable(e) {
      const t = this.header.numRequiredSignatures, r = this.staticAccountKeys.length;
      if (e >= r) return false;
      if (e >= this.header.numRequiredSignatures) {
        const s = e - t, a = r - t - this.header.numReadonlyUnsignedAccounts;
        return s < a;
      } else {
        const s = t - this.header.numReadonlySignedAccounts;
        return e < s;
      }
    }
    serialize() {
      throw new Error("Serialization of version 1 transaction messages is not supported");
    }
    static deserialize(e) {
      let t = [
        ...e
      ];
      const r = xt(t), s = r & Ks;
      tt(r !== s, "Expected versioned message but received legacy message");
      const n = s;
      tt(n === 1, `Expected versioned message with version 1 but found version ${n}`);
      const a = {
        numRequiredSignatures: xt(t),
        numReadonlySignedAccounts: xt(t),
        numReadonlyUnsignedAccounts: xt(t)
      }, l = js(t);
      tt((l & -32) === 0, "Unexpected bits set in the transaction config mask");
      const d = l & bc;
      tt(d === 0 || d === bc, "Expected both or neither of the priority fee bits to be set in the transaction config mask");
      const p = vt.encode(Tt(t, 0, jt)), k = xt(t), A = xt(t), E = [];
      for (let M = 0; M < A; M++) E.push(new $(Tt(t, 0, jt)));
      const S = {
        computeUnitLimit: null,
        heapSize: null,
        loadedAccountsDataSizeLimit: null,
        priorityFee: null
      };
      d !== 0 && (S.priorityFee = by(t)), l & py && (S.computeUnitLimit = js(t)), l & yy && (S.loadedAccountsDataSizeLimit = js(t)), l & my && (S.heapSize = js(t));
      const I = [];
      for (let M = 0; M < k; M++) {
        const x = xt(t), C = xt(t), O = xt(t) + xt(t) * 256;
        I.push({
          accountKeyIndexesLength: C,
          dataLength: O,
          programIdIndex: x
        });
      }
      const R = [];
      for (const M of I) R.push({
        programIdIndex: M.programIdIndex,
        accountKeyIndexes: Tt(t, 0, M.accountKeyIndexesLength),
        data: new Uint8Array(Tt(t, 0, M.dataLength))
      });
      return tt(t.length === 0, "Expected no bytes to remain after deserializing a version 1 message"), new $s({
        header: a,
        staticAccountKeys: E,
        recentBlockhash: p,
        compiledInstructions: R,
        transactionConfig: S
      });
    }
  }
  const _i = {
    deserializeMessageVersion(o) {
      const e = o[0], t = e & Ks;
      return t === e ? "legacy" : t;
    },
    deserialize: (o) => {
      const e = _i.deserializeMessageVersion(o);
      if (e === "legacy") return tr.from(o);
      if (e === 0) return on.deserialize(o);
      if (e === 1) return $s.deserialize(o);
      throw new Error(`Transaction message version ${e} deserialization is not supported`);
    }
  };
  let yr = (function(o) {
    return o[o.BLOCKHEIGHT_EXCEEDED = 0] = "BLOCKHEIGHT_EXCEEDED", o[o.PROCESSED = 1] = "PROCESSED", o[o.TIMED_OUT = 2] = "TIMED_OUT", o[o.NONCE_INVALID = 3] = "NONCE_INVALID", o;
  })({});
  const wy = B.alloc(_r).fill(0);
  class dt {
    constructor(e) {
      this.keys = void 0, this.programId = void 0, this.data = B.alloc(0), this.programId = e.programId, this.keys = e.keys, e.data && (this.data = e.data);
    }
    toJSON() {
      return {
        keys: this.keys.map(({ pubkey: e, isSigner: t, isWritable: r }) => ({
          pubkey: e.toJSON(),
          isSigner: t,
          isWritable: r
        })),
        programId: this.programId.toJSON(),
        data: [
          ...this.data
        ]
      };
    }
  }
  class at {
    get signature() {
      return this.signatures.length > 0 ? this.signatures[0].signature : null;
    }
    constructor(e) {
      if (this.signatures = [], this.feePayer = void 0, this.instructions = [], this.recentBlockhash = void 0, this.lastValidBlockHeight = void 0, this.nonceInfo = void 0, this.minNonceContextSlot = void 0, this._message = void 0, this._json = void 0, !!e) if (e.feePayer && (this.feePayer = e.feePayer), e.signatures && (this.signatures = e.signatures), Object.prototype.hasOwnProperty.call(e, "nonceInfo")) {
        const { minContextSlot: t, nonceInfo: r } = e;
        this.minNonceContextSlot = t, this.nonceInfo = r;
      } else if (Object.prototype.hasOwnProperty.call(e, "lastValidBlockHeight")) {
        const { blockhash: t, lastValidBlockHeight: r } = e;
        this.recentBlockhash = t, this.lastValidBlockHeight = r;
      } else {
        const { recentBlockhash: t, nonceInfo: r } = e;
        r && (this.nonceInfo = r), this.recentBlockhash = t;
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
      return e.forEach((t) => {
        "instructions" in t ? this.instructions = this.instructions.concat(t.instructions) : "data" in t && "programId" in t && "keys" in t ? this.instructions.push(t) : this.instructions.push(new dt(t));
      }), this;
    }
    compileMessage() {
      if (this._message && JSON.stringify(this.toJSON()) === JSON.stringify(this._json)) return this._message;
      let e, t;
      if (this.nonceInfo ? (e = this.nonceInfo.nonce, this.instructions[0] != this.nonceInfo.nonceInstruction ? t = [
        this.nonceInfo.nonceInstruction,
        ...this.instructions
      ] : t = this.instructions) : (e = this.recentBlockhash, t = this.instructions), !e) throw new Error("Transaction recentBlockhash required");
      t.length < 1 && console.warn("No instructions provided");
      let r;
      if (this.feePayer) r = this.feePayer;
      else if (this.signatures.length > 0 && this.signatures[0].publicKey) r = this.signatures[0].publicKey;
      else throw new Error("Transaction fee payer required");
      for (let R = 0; R < t.length; R++) if (t[R].programId === void 0) throw new Error(`Transaction instruction index ${R} has undefined program id`);
      const s = [], n = [];
      t.forEach((R) => {
        R.keys.forEach((x) => {
          n.push({
            ...x
          });
        });
        const M = R.programId.toString();
        s.includes(M) || s.push(M);
      }), s.forEach((R) => {
        n.push({
          pubkey: new $(R),
          isSigner: false,
          isWritable: false
        });
      });
      const a = [];
      n.forEach((R) => {
        const M = R.pubkey.toString(), x = a.findIndex((C) => C.pubkey.toString() === M);
        x > -1 ? (a[x].isWritable = a[x].isWritable || R.isWritable, a[x].isSigner = a[x].isSigner || R.isSigner) : a.push(R);
      }), a.sort(function(R, M) {
        if (R.isSigner !== M.isSigner) return R.isSigner ? -1 : 1;
        if (R.isWritable !== M.isWritable) return R.isWritable ? -1 : 1;
        const x = {
          localeMatcher: "best fit",
          usage: "sort",
          sensitivity: "variant",
          ignorePunctuation: false,
          numeric: false,
          caseFirst: "lower"
        };
        return R.pubkey.toBase58().localeCompare(M.pubkey.toBase58(), "en", x);
      });
      const l = a.findIndex((R) => R.pubkey.equals(r));
      if (l > -1) {
        const [R] = a.splice(l, 1);
        R.isSigner = true, R.isWritable = true, a.unshift(R);
      } else a.unshift({
        pubkey: r,
        isSigner: true,
        isWritable: true
      });
      for (const R of this.signatures) {
        const M = a.findIndex((x) => x.pubkey.equals(R.publicKey));
        if (M > -1) a[M].isSigner || (a[M].isSigner = true, console.warn("Transaction references a signature that is unnecessary, only the fee payer and instruction signer accounts should sign a transaction. This behavior is deprecated and will throw an error in the next major version release."));
        else throw new Error(`unknown signer: ${R.publicKey.toString()}`);
      }
      let d = 0, p = 0, k = 0;
      const A = [], E = [];
      a.forEach(({ pubkey: R, isSigner: M, isWritable: x }) => {
        M ? (A.push(R.toString()), d += 1, x || (p += 1)) : (E.push(R.toString()), x || (k += 1));
      });
      const S = A.concat(E), I = t.map((R) => {
        const { data: M, programId: x } = R;
        return {
          programIdIndex: S.indexOf(x.toString()),
          accounts: R.keys.map((C) => S.indexOf(C.pubkey.toString())),
          data: vt.encode(M)
        };
      });
      return I.forEach((R) => {
        tt(R.programIdIndex >= 0), R.accounts.forEach((M) => tt(M >= 0));
      }), new tr({
        header: {
          numRequiredSignatures: d,
          numReadonlySignedAccounts: p,
          numReadonlyUnsignedAccounts: k
        },
        accountKeys: S,
        recentBlockhash: e,
        instructions: I
      });
    }
    _compile() {
      const e = this.compileMessage(), t = e.accountKeys.slice(0, e.header.numRequiredSignatures);
      return this.signatures.length === t.length && this.signatures.every((s, n) => t[n].equals(s.publicKey)) || (this.signatures = t.map((r) => ({
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
      const t = /* @__PURE__ */ new Set();
      this.signatures = e.filter((r) => {
        const s = r.toString();
        return t.has(s) ? false : (t.add(s), true);
      }).map((r) => ({
        signature: null,
        publicKey: r
      }));
    }
    sign(...e) {
      if (e.length === 0) throw new Error("No signers");
      const t = /* @__PURE__ */ new Set(), r = [];
      for (const n of e) {
        const a = n.publicKey.toString();
        t.has(a) || (t.add(a), r.push(n));
      }
      this.signatures = r.map((n) => ({
        signature: null,
        publicKey: n.publicKey
      }));
      const s = this._compile();
      this._partialSign(s, ...r);
    }
    partialSign(...e) {
      if (e.length === 0) throw new Error("No signers");
      const t = /* @__PURE__ */ new Set(), r = [];
      for (const n of e) {
        const a = n.publicKey.toString();
        t.has(a) || (t.add(a), r.push(n));
      }
      const s = this._compile();
      this._partialSign(s, ...r);
    }
    _partialSign(e, ...t) {
      const r = e.serialize();
      t.forEach((s) => {
        const n = va(r, s.secretKey);
        this._addSignature(s.publicKey, Qe(n));
      });
    }
    addSignature(e, t) {
      this._compile(), this._addSignature(e, t);
    }
    _addSignature(e, t) {
      tt(t.length === 64);
      const r = this.signatures.findIndex((s) => e.equals(s.publicKey));
      if (r < 0) throw new Error(`unknown signer: ${e.toString()}`);
      this.signatures[r].signature = B.from(t);
    }
    verifySignatures(e = true) {
      return !this._getMessageSignednessErrors(this.serializeMessage(), e);
    }
    _getMessageSignednessErrors(e, t) {
      const r = {};
      for (const { signature: s, publicKey: n } of this.signatures) s === null ? t && (r.missing || (r.missing = [])).push(n) : sy(s, e, n.toBytes()) || (r.invalid || (r.invalid = [])).push(n);
      return r.invalid || r.missing ? r : void 0;
    }
    serialize(e) {
      const { requireAllSignatures: t, verifySignatures: r } = Object.assign({
        requireAllSignatures: true,
        verifySignatures: true
      }, e), s = this.serializeMessage();
      if (r) {
        const n = this._getMessageSignednessErrors(s, t);
        if (n) {
          let a = "Signature verification failed.";
          throw n.invalid && (a += `
Invalid signature for public key${n.invalid.length === 1 ? "" : "(s)"} [\`${n.invalid.map((l) => l.toBase58()).join("`, `")}\`].`), n.missing && (a += `
Missing signature for public key${n.missing.length === 1 ? "" : "(s)"} [\`${n.missing.map((l) => l.toBase58()).join("`, `")}\`].`), new Error(a);
        }
      }
      return this._serialize(s);
    }
    _serialize(e) {
      const { signatures: t } = this, r = [];
      Vt(r, t.length);
      const s = r.length + t.length * 64 + e.length, n = B.alloc(s);
      return tt(t.length < 256), B.from(r).copy(n, 0), t.forEach(({ signature: a }, l) => {
        a !== null && (tt(a.length === 64, "signature has invalid length"), B.from(a).copy(n, r.length + l * 64));
      }), e.copy(n, r.length + t.length * 64), tt(n.length <= Ir, `Transaction too large: ${n.length} > ${Ir}`), n;
    }
    get keys() {
      return tt(this.instructions.length === 1), this.instructions[0].keys.map((e) => e.pubkey);
    }
    get programId() {
      return tt(this.instructions.length === 1), this.instructions[0].programId;
    }
    get data() {
      return tt(this.instructions.length === 1), this.instructions[0].data;
    }
    static from(e) {
      let t = [
        ...e
      ];
      const r = Ut(t);
      let s = [];
      for (let n = 0; n < r; n++) {
        const a = Tt(t, 0, _r);
        s.push(vt.encode(B.from(a)));
      }
      return at.populate(tr.from(t), s);
    }
    static populate(e, t = []) {
      const r = new at();
      return r.recentBlockhash = e.recentBlockhash, e.header.numRequiredSignatures > 0 && (r.feePayer = e.accountKeys[0]), t.forEach((s, n) => {
        const a = {
          signature: s == vt.encode(wy) ? null : vt.decode(s),
          publicKey: e.accountKeys[n]
        };
        r.signatures.push(a);
      }), e.instructions.forEach((s) => {
        const n = s.accounts.map((a) => {
          const l = e.accountKeys[a];
          return {
            pubkey: l,
            isSigner: r.signatures.some((d) => d.publicKey.toString() === l.toString()) || e.isAccountSigner(a),
            isWritable: e.isAccountWritable(a)
          };
        });
        r.instructions.push(new dt({
          keys: n,
          programId: e.accountKeys[s.programIdIndex],
          data: vt.decode(s.data)
        }));
      }), r._message = e, r._json = r.toJSON(), r;
    }
  }
  class Ia {
    constructor(e) {
      this.payerKey = void 0, this.instructions = void 0, this.recentBlockhash = void 0, this.payerKey = e.payerKey, this.instructions = e.instructions, this.recentBlockhash = e.recentBlockhash;
    }
    static decompile(e, t) {
      const { header: r, compiledInstructions: s, recentBlockhash: n } = e, { numRequiredSignatures: a, numReadonlySignedAccounts: l, numReadonlyUnsignedAccounts: d } = r, p = a - l;
      tt(p > 0, "Message header is invalid");
      const k = e.staticAccountKeys.length - a - d;
      tt(k >= 0, "Message header is invalid");
      const A = e.getAccountKeys(t), E = A.get(0);
      if (E === void 0) throw new Error("Failed to decompile message because no account keys were found");
      const S = [];
      for (const I of s) {
        const R = [];
        for (const x of I.accountKeyIndexes) {
          const C = A.get(x);
          if (C === void 0) throw new Error(`Failed to find key for account key index ${x}`);
          const O = x < a;
          let N;
          O ? N = x < p : x < A.staticAccountKeys.length ? N = x - a < k : N = x - A.staticAccountKeys.length < A.accountKeysFromLookups.writable.length, R.push({
            pubkey: C,
            isSigner: x < r.numRequiredSignatures,
            isWritable: N
          });
        }
        const M = A.get(I.programIdIndex);
        if (M === void 0) throw new Error(`Failed to find program id for program id index ${I.programIdIndex}`);
        S.push(new dt({
          programId: M,
          data: Qe(I.data),
          keys: R
        }));
      }
      return new Ia({
        payerKey: E,
        instructions: S,
        recentBlockhash: n
      });
    }
    compileToLegacyMessage() {
      return tr.compile({
        payerKey: this.payerKey,
        recentBlockhash: this.recentBlockhash,
        instructions: this.instructions
      });
    }
    compileToV0Message(e) {
      return on.compile({
        payerKey: this.payerKey,
        recentBlockhash: this.recentBlockhash,
        instructions: this.instructions,
        addressLookupTableAccounts: e
      });
    }
  }
  class Ai {
    get version() {
      return this.message.version;
    }
    constructor(e, t) {
      if (this.signatures = void 0, this.message = void 0, t !== void 0) tt(t.length === e.header.numRequiredSignatures, "Expected signatures length to be equal to the number of required signatures"), this.signatures = t;
      else {
        const r = [];
        for (let s = 0; s < e.header.numRequiredSignatures; s++) r.push(new Uint8Array(_r));
        this.signatures = r;
      }
      this.message = e;
    }
    serialize() {
      const e = this.message.serialize(), t = Array();
      Vt(t, this.signatures.length);
      const r = m.struct([
        m.blob(t.length, "encodedSignaturesLength"),
        m.seq(ly(), this.signatures.length, "signatures"),
        m.blob(e.length, "serializedMessage")
      ]), s = new Uint8Array(2048), n = r.encode({
        encodedSignaturesLength: new Uint8Array(t),
        signatures: this.signatures,
        serializedMessage: e
      }, s);
      return s.slice(0, n);
    }
    static deserialize(e) {
      if (e[0] === $l) return this.deserializeV1(e);
      let t = [
        ...e
      ];
      const r = [], s = Ut(t);
      for (let a = 0; a < s; a++) r.push(new Uint8Array(Tt(t, 0, _r)));
      const n = _i.deserialize(new Uint8Array(t));
      return new Ai(n, r);
    }
    static deserializeV1(e) {
      const t = e[1], r = t * _r, s = e.length - r;
      tt(s > 0, "Expected transaction to have enough bytes for its signatures");
      const n = _i.deserialize(e.slice(0, s)), a = [];
      for (let l = 0; l < t; l++) {
        const d = s + l * _r;
        a.push(e.slice(d, d + _r));
      }
      return new Ai(n, a);
    }
    sign(e) {
      const t = this.message.serialize(), r = this.message.staticAccountKeys.slice(0, this.message.header.numRequiredSignatures);
      for (const s of e) {
        const n = r.findIndex((a) => a.equals(s.publicKey));
        tt(n >= 0, `Cannot sign with non signer key ${s.publicKey.toBase58()}`), this.signatures[n] = va(t, s.secretKey);
      }
    }
    addSignature(e, t) {
      tt(t.byteLength === 64, "Signature must be 64 bytes long");
      const s = this.message.staticAccountKeys.slice(0, this.message.header.numRequiredSignatures).findIndex((n) => n.equals(e));
      tt(s >= 0, `Can not add signature; \`${e.toBase58()}\` is not required to sign this transaction`), this.signatures[s] = t;
    }
  }
  const ky = 160, vy = 64, Sy = ky / vy, Dl = 1e3 / Sy, Qt = new $("SysvarC1ock11111111111111111111111111111111"), _y = new $("SysvarEpochSchedu1e111111111111111111111111"), Ay = new $("Sysvar1nstructions1111111111111111111111111"), li = new $("SysvarRecentB1ockHashes11111111111111111111"), an = new $("SysvarRent111111111111111111111111111111111"), Iy = new $("SysvarRewards111111111111111111111111111111"), Ey = new $("SysvarS1otHashes111111111111111111111111111"), Ry = new $("SysvarS1otHistory11111111111111111111111111"), hi = new $("SysvarStakeHistory1111111111111111111111111");
  class Mr extends Error {
    constructor({ action: e, signature: t, transactionMessage: r, logs: s }) {
      const n = s ? `Logs: 
${JSON.stringify(s.slice(-10), null, 2)}. ` : "", a = "\nCatch the `SendTransactionError` and call `getLogs()` on it for full details.";
      let l;
      switch (e) {
        case "send":
          l = `Transaction ${t} resulted in an error. 
${r}. ` + n + a;
          break;
        case "simulate":
          l = `Simulation failed. 
Message: ${r}. 
` + n + a;
          break;
        default:
          l = `Unknown action '${/* @__PURE__ */ ((d) => d)(e)}'`;
      }
      super(l), this.signature = void 0, this.transactionMessage = void 0, this.transactionLogs = void 0, this.signature = t, this.transactionMessage = r, this.transactionLogs = s || void 0;
    }
    get transactionError() {
      return {
        message: this.transactionMessage,
        logs: Array.isArray(this.transactionLogs) ? this.transactionLogs : void 0
      };
    }
    get logs() {
      const e = this.transactionLogs;
      if (!(e != null && typeof e == "object" && "then" in e)) return e;
    }
    async getLogs(e) {
      return Array.isArray(this.transactionLogs) || (this.transactionLogs = new Promise((t, r) => {
        e.getTransaction(this.signature).then((s) => {
          if (s && s.meta && s.meta.logMessages) {
            const n = s.meta.logMessages;
            this.transactionLogs = n, t(n);
          } else r(new Error("Log messages not found"));
        }).catch(r);
      })), await this.transactionLogs;
    }
  }
  const My = {
    JSON_RPC_SERVER_ERROR_BLOCK_CLEANED_UP: -32001,
    JSON_RPC_SERVER_ERROR_SEND_TRANSACTION_PREFLIGHT_FAILURE: -32002,
    JSON_RPC_SERVER_ERROR_TRANSACTION_SIGNATURE_VERIFICATION_FAILURE: -32003,
    JSON_RPC_SERVER_ERROR_BLOCK_NOT_AVAILABLE: -32004,
    JSON_RPC_SERVER_ERROR_NODE_UNHEALTHY: -32005,
    JSON_RPC_SERVER_ERROR_TRANSACTION_PRECOMPILE_VERIFICATION_FAILURE: -32006,
    JSON_RPC_SERVER_ERROR_SLOT_SKIPPED: -32007,
    JSON_RPC_SERVER_ERROR_NO_SNAPSHOT: -32008,
    JSON_RPC_SERVER_ERROR_LONG_TERM_STORAGE_SLOT_SKIPPED: -32009,
    JSON_RPC_SERVER_ERROR_KEY_EXCLUDED_FROM_SECONDARY_INDEX: -32010,
    JSON_RPC_SERVER_ERROR_TRANSACTION_HISTORY_NOT_AVAILABLE: -32011,
    JSON_RPC_SCAN_ERROR: -32012,
    JSON_RPC_SERVER_ERROR_TRANSACTION_SIGNATURE_LEN_MISMATCH: -32013,
    JSON_RPC_SERVER_ERROR_BLOCK_STATUS_NOT_AVAILABLE_YET: -32014,
    JSON_RPC_SERVER_ERROR_UNSUPPORTED_TRANSACTION_VERSION: -32015,
    JSON_RPC_SERVER_ERROR_MIN_CONTEXT_SLOT_NOT_REACHED: -32016
  };
  class re extends Error {
    constructor({ code: e, message: t, data: r }, s) {
      super(s != null ? `${s}: ${t}` : t), this.code = void 0, this.data = void 0, this.code = e, this.data = r, this.name = "SolanaJSONRPCError";
    }
  }
  async function Uo(o, e, t, r) {
    const s = r && {
      skipPreflight: r.skipPreflight,
      preflightCommitment: r.preflightCommitment || r.commitment,
      maxRetries: r.maxRetries,
      minContextSlot: r.minContextSlot
    }, n = await o.sendTransaction(e, t, s);
    let a;
    if (e.recentBlockhash != null && e.lastValidBlockHeight != null) a = (await o.confirmTransaction({
      abortSignal: r == null ? void 0 : r.abortSignal,
      signature: n,
      blockhash: e.recentBlockhash,
      lastValidBlockHeight: e.lastValidBlockHeight
    }, r && r.commitment)).value;
    else if (e.minNonceContextSlot != null && e.nonceInfo != null) {
      const { nonceInstruction: l } = e.nonceInfo, d = l.keys[0].pubkey;
      a = (await o.confirmTransaction({
        abortSignal: r == null ? void 0 : r.abortSignal,
        minContextSlot: e.minNonceContextSlot,
        nonceAccountPubkey: d,
        nonceValue: e.nonceInfo.nonce,
        signature: n
      }, r && r.commitment)).value;
    } else (r == null ? void 0 : r.abortSignal) != null && console.warn("sendAndConfirmTransaction(): A transaction with a deprecated confirmation strategy was supplied along with an `abortSignal`. Only transactions having `lastValidBlockHeight` or a combination of `nonceInfo` and `minNonceContextSlot` are abortable."), a = (await o.confirmTransaction(n, r && r.commitment)).value;
    if (a.err) throw n != null ? new Mr({
      action: "send",
      signature: n,
      transactionMessage: `Status: (${JSON.stringify(a)})`
    }) : new Error(`Transaction ${n} failed (${JSON.stringify(a)})`);
    return n;
  }
  function Xr(o) {
    return new Promise((e) => setTimeout(e, o));
  }
  function it(o, e) {
    const t = o.layout.span >= 0 ? o.layout.span : Ul(o, e), r = B.alloc(t), s = Object.assign({
      instruction: o.index
    }, e);
    return o.layout.encode(s, r), r;
  }
  function lt(o, e) {
    let t;
    try {
      t = o.layout.decode(e);
    } catch (r) {
      throw new Error("invalid instruction; " + r);
    }
    if (t.instruction !== o.index) throw new Error(`invalid instruction; instruction index mismatch ${t.instruction} != ${o.index}`);
    return t;
  }
  const ql = m.nu64("lamportsPerSignature"), Vl = m.struct([
    m.u32("version"),
    m.u32("state"),
    nt("authorizedPubkey"),
    nt("nonce"),
    m.struct([
      ql
    ], "feeCalculator")
  ]), Wo = Vl.span;
  class Vi {
    constructor(e) {
      this.authorizedPubkey = void 0, this.nonce = void 0, this.feeCalculator = void 0, this.authorizedPubkey = e.authorizedPubkey, this.nonce = e.nonce, this.feeCalculator = e.feeCalculator;
    }
    static fromAccountData(e) {
      const t = Vl.decode(Qe(e), 0);
      return new Vi({
        authorizedPubkey: new $(t.authorizedPubkey),
        nonce: new $(t.nonce).toString(),
        feeCalculator: t.feeCalculator
      });
    }
  }
  function Nn(o) {
    const e = m.blob(8, o), t = e.decode.bind(e), r = e.encode.bind(e), s = e, n = Yp();
    return s.decode = (a, l) => {
      const d = t(a, l);
      return n.decode(d);
    }, s.encode = (a, l, d) => {
      const p = n.encode(a);
      return r(p, l, d);
    }, s;
  }
  class xy {
    constructor() {
    }
    static decodeInstructionType(e) {
      this.checkProgramId(e.programId);
      const r = m.u32("instruction").decode(e.data);
      let s;
      for (const [n, a] of Object.entries(yt)) if (a.index == r) {
        s = n;
        break;
      }
      if (!s) throw new Error("Instruction type incorrect; not a SystemInstruction");
      return s;
    }
    static decodeCreateAccount(e) {
      this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2);
      const { lamports: t, space: r, programId: s } = lt(yt.Create, e.data);
      return {
        fromPubkey: e.keys[0].pubkey,
        newAccountPubkey: e.keys[1].pubkey,
        lamports: t,
        space: r,
        programId: new $(s)
      };
    }
    static decodeTransfer(e) {
      this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2);
      const { lamports: t } = lt(yt.Transfer, e.data);
      return {
        fromPubkey: e.keys[0].pubkey,
        toPubkey: e.keys[1].pubkey,
        lamports: t
      };
    }
    static decodeTransferWithSeed(e) {
      this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
      const { lamports: t, seed: r, programId: s } = lt(yt.TransferWithSeed, e.data);
      return {
        fromPubkey: e.keys[0].pubkey,
        basePubkey: e.keys[1].pubkey,
        toPubkey: e.keys[2].pubkey,
        lamports: t,
        seed: r,
        programId: new $(s)
      };
    }
    static decodeAllocate(e) {
      this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 1);
      const { space: t } = lt(yt.Allocate, e.data);
      return {
        accountPubkey: e.keys[0].pubkey,
        space: t
      };
    }
    static decodeAllocateWithSeed(e) {
      this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 1);
      const { base: t, seed: r, space: s, programId: n } = lt(yt.AllocateWithSeed, e.data);
      return {
        accountPubkey: e.keys[0].pubkey,
        basePubkey: new $(t),
        seed: r,
        space: s,
        programId: new $(n)
      };
    }
    static decodeAssign(e) {
      this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 1);
      const { programId: t } = lt(yt.Assign, e.data);
      return {
        accountPubkey: e.keys[0].pubkey,
        programId: new $(t)
      };
    }
    static decodeAssignWithSeed(e) {
      this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 1);
      const { base: t, seed: r, programId: s } = lt(yt.AssignWithSeed, e.data);
      return {
        accountPubkey: e.keys[0].pubkey,
        basePubkey: new $(t),
        seed: r,
        programId: new $(s)
      };
    }
    static decodeCreateWithSeed(e) {
      this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2);
      const { base: t, seed: r, lamports: s, space: n, programId: a } = lt(yt.CreateWithSeed, e.data);
      return {
        fromPubkey: e.keys[0].pubkey,
        newAccountPubkey: e.keys[1].pubkey,
        basePubkey: new $(t),
        seed: r,
        lamports: s,
        space: n,
        programId: new $(a)
      };
    }
    static decodeNonceInitialize(e) {
      this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
      const { authorized: t } = lt(yt.InitializeNonceAccount, e.data);
      return {
        noncePubkey: e.keys[0].pubkey,
        authorizedPubkey: new $(t)
      };
    }
    static decodeNonceAdvance(e) {
      return this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3), lt(yt.AdvanceNonceAccount, e.data), {
        noncePubkey: e.keys[0].pubkey,
        authorizedPubkey: e.keys[2].pubkey
      };
    }
    static decodeNonceWithdraw(e) {
      this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 5);
      const { lamports: t } = lt(yt.WithdrawNonceAccount, e.data);
      return {
        noncePubkey: e.keys[0].pubkey,
        toPubkey: e.keys[1].pubkey,
        authorizedPubkey: e.keys[4].pubkey,
        lamports: t
      };
    }
    static decodeNonceAuthorize(e) {
      this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2);
      const { authorized: t } = lt(yt.AuthorizeNonceAccount, e.data);
      return {
        noncePubkey: e.keys[0].pubkey,
        authorizedPubkey: e.keys[1].pubkey,
        newAuthorizedPubkey: new $(t)
      };
    }
    static checkProgramId(e) {
      if (!e.equals(Lt.programId)) throw new Error("invalid instruction; programId is not SystemProgram");
    }
    static checkKeyLength(e, t) {
      if (e.length < t) throw new Error(`invalid instruction; found ${e.length} keys, expected at least ${t}`);
    }
  }
  const yt = Object.freeze({
    Create: {
      index: 0,
      layout: m.struct([
        m.u32("instruction"),
        m.ns64("lamports"),
        m.ns64("space"),
        nt("programId")
      ])
    },
    Assign: {
      index: 1,
      layout: m.struct([
        m.u32("instruction"),
        nt("programId")
      ])
    },
    Transfer: {
      index: 2,
      layout: m.struct([
        m.u32("instruction"),
        Nn("lamports")
      ])
    },
    CreateWithSeed: {
      index: 3,
      layout: m.struct([
        m.u32("instruction"),
        nt("base"),
        en("seed"),
        m.ns64("lamports"),
        m.ns64("space"),
        nt("programId")
      ])
    },
    AdvanceNonceAccount: {
      index: 4,
      layout: m.struct([
        m.u32("instruction")
      ])
    },
    WithdrawNonceAccount: {
      index: 5,
      layout: m.struct([
        m.u32("instruction"),
        m.ns64("lamports")
      ])
    },
    InitializeNonceAccount: {
      index: 6,
      layout: m.struct([
        m.u32("instruction"),
        nt("authorized")
      ])
    },
    AuthorizeNonceAccount: {
      index: 7,
      layout: m.struct([
        m.u32("instruction"),
        nt("authorized")
      ])
    },
    Allocate: {
      index: 8,
      layout: m.struct([
        m.u32("instruction"),
        m.ns64("space")
      ])
    },
    AllocateWithSeed: {
      index: 9,
      layout: m.struct([
        m.u32("instruction"),
        nt("base"),
        en("seed"),
        m.ns64("space"),
        nt("programId")
      ])
    },
    AssignWithSeed: {
      index: 10,
      layout: m.struct([
        m.u32("instruction"),
        nt("base"),
        en("seed"),
        nt("programId")
      ])
    },
    TransferWithSeed: {
      index: 11,
      layout: m.struct([
        m.u32("instruction"),
        Nn("lamports"),
        en("seed"),
        nt("programId")
      ])
    },
    UpgradeNonceAccount: {
      index: 12,
      layout: m.struct([
        m.u32("instruction")
      ])
    }
  });
  class Lt {
    constructor() {
    }
    static createAccount(e) {
      const t = yt.Create, r = it(t, {
        lamports: e.lamports,
        space: e.space,
        programId: Qe(e.programId.toBuffer())
      });
      return new dt({
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
      let t, r;
      if ("basePubkey" in e) {
        const s = yt.TransferWithSeed;
        t = it(s, {
          lamports: BigInt(e.lamports),
          seed: e.seed,
          programId: Qe(e.programId.toBuffer())
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
        const s = yt.Transfer;
        t = it(s, {
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
      return new dt({
        keys: r,
        programId: this.programId,
        data: t
      });
    }
    static assign(e) {
      let t, r;
      if ("basePubkey" in e) {
        const s = yt.AssignWithSeed;
        t = it(s, {
          base: Qe(e.basePubkey.toBuffer()),
          seed: e.seed,
          programId: Qe(e.programId.toBuffer())
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
        const s = yt.Assign;
        t = it(s, {
          programId: Qe(e.programId.toBuffer())
        }), r = [
          {
            pubkey: e.accountPubkey,
            isSigner: true,
            isWritable: true
          }
        ];
      }
      return new dt({
        keys: r,
        programId: this.programId,
        data: t
      });
    }
    static createAccountWithSeed(e) {
      const t = yt.CreateWithSeed, r = it(t, {
        base: Qe(e.basePubkey.toBuffer()),
        seed: e.seed,
        lamports: e.lamports,
        space: e.space,
        programId: Qe(e.programId.toBuffer())
      });
      let s = [
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
      return e.basePubkey.equals(e.fromPubkey) || s.push({
        pubkey: e.basePubkey,
        isSigner: true,
        isWritable: false
      }), new dt({
        keys: s,
        programId: this.programId,
        data: r
      });
    }
    static createNonceAccount(e) {
      const t = new at();
      "basePubkey" in e && "seed" in e ? t.add(Lt.createAccountWithSeed({
        fromPubkey: e.fromPubkey,
        newAccountPubkey: e.noncePubkey,
        basePubkey: e.basePubkey,
        seed: e.seed,
        lamports: e.lamports,
        space: Wo,
        programId: this.programId
      })) : t.add(Lt.createAccount({
        fromPubkey: e.fromPubkey,
        newAccountPubkey: e.noncePubkey,
        lamports: e.lamports,
        space: Wo,
        programId: this.programId
      }));
      const r = {
        noncePubkey: e.noncePubkey,
        authorizedPubkey: e.authorizedPubkey
      };
      return t.add(this.nonceInitialize(r)), t;
    }
    static nonceInitialize(e) {
      const t = yt.InitializeNonceAccount, r = it(t, {
        authorized: Qe(e.authorizedPubkey.toBuffer())
      }), s = {
        keys: [
          {
            pubkey: e.noncePubkey,
            isSigner: false,
            isWritable: true
          },
          {
            pubkey: li,
            isSigner: false,
            isWritable: false
          },
          {
            pubkey: an,
            isSigner: false,
            isWritable: false
          }
        ],
        programId: this.programId,
        data: r
      };
      return new dt(s);
    }
    static nonceAdvance(e) {
      const t = yt.AdvanceNonceAccount, r = it(t), s = {
        keys: [
          {
            pubkey: e.noncePubkey,
            isSigner: false,
            isWritable: true
          },
          {
            pubkey: li,
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
      return new dt(s);
    }
    static nonceWithdraw(e) {
      const t = yt.WithdrawNonceAccount, r = it(t, {
        lamports: e.lamports
      });
      return new dt({
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
            pubkey: li,
            isSigner: false,
            isWritable: false
          },
          {
            pubkey: an,
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
      const t = yt.AuthorizeNonceAccount, r = it(t, {
        authorized: Qe(e.newAuthorizedPubkey.toBuffer())
      });
      return new dt({
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
      let t, r;
      if ("basePubkey" in e) {
        const s = yt.AllocateWithSeed;
        t = it(s, {
          base: Qe(e.basePubkey.toBuffer()),
          seed: e.seed,
          space: e.space,
          programId: Qe(e.programId.toBuffer())
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
        const s = yt.Allocate;
        t = it(s, {
          space: e.space
        }), r = [
          {
            pubkey: e.accountPubkey,
            isSigner: true,
            isWritable: true
          }
        ];
      }
      return new dt({
        keys: r,
        programId: this.programId,
        data: t
      });
    }
  }
  Lt.programId = new $("11111111111111111111111111111111");
  const Py = Ir - 300;
  class cn {
    constructor() {
    }
    static getMinNumSignatures(e) {
      return 2 * (Math.ceil(e / cn.chunkSize) + 1 + 1);
    }
    static async load(e, t, r, s, n) {
      {
        const A = await e.getMinimumBalanceForRentExemption(n.length), E = await e.getAccountInfo(r.publicKey, "confirmed");
        let S = null;
        if (E !== null) {
          if (E.executable) return console.error("Program load failed, account is already executable"), false;
          E.data.length !== n.length && (S = S || new at(), S.add(Lt.allocate({
            accountPubkey: r.publicKey,
            space: n.length
          }))), E.owner.equals(s) || (S = S || new at(), S.add(Lt.assign({
            accountPubkey: r.publicKey,
            programId: s
          }))), E.lamports < A && (S = S || new at(), S.add(Lt.transfer({
            fromPubkey: t.publicKey,
            toPubkey: r.publicKey,
            lamports: A - E.lamports
          })));
        } else S = new at().add(Lt.createAccount({
          fromPubkey: t.publicKey,
          newAccountPubkey: r.publicKey,
          lamports: A > 0 ? A : 1,
          space: n.length,
          programId: s
        }));
        S !== null && await Uo(e, S, [
          t,
          r
        ], {
          commitment: "confirmed"
        });
      }
      const a = m.struct([
        m.u32("instruction"),
        m.u32("offset"),
        m.u32("bytesLength"),
        m.u32("bytesLengthPadding"),
        m.seq(m.u8("byte"), m.offset(m.u32(), -8), "bytes")
      ]), l = cn.chunkSize;
      let d = 0, p = n, k = [];
      for (; p.length > 0; ) {
        const A = p.slice(0, l), E = B.alloc(l + 16);
        a.encode({
          instruction: 0,
          offset: d,
          bytes: A,
          bytesLength: 0,
          bytesLengthPadding: 0
        }, E);
        const S = new at().add({
          keys: [
            {
              pubkey: r.publicKey,
              isSigner: true,
              isWritable: true
            }
          ],
          programId: s,
          data: E
        });
        k.push(Uo(e, S, [
          t,
          r
        ], {
          commitment: "confirmed"
        })), e._rpcEndpoint.includes("solana.com") && await Xr(1e3 / 4), d += l, p = p.slice(l);
      }
      await Promise.all(k);
      {
        const A = m.struct([
          m.u32("instruction")
        ]), E = B.alloc(A.span);
        A.encode({
          instruction: 1
        }, E);
        const S = new at().add({
          keys: [
            {
              pubkey: r.publicKey,
              isSigner: true,
              isWritable: true
            },
            {
              pubkey: an,
              isSigner: false,
              isWritable: false
            }
          ],
          programId: s,
          data: E
        }), I = "processed", R = await e.sendTransaction(S, [
          t,
          r
        ], {
          preflightCommitment: I
        }), { context: M, value: x } = await e.confirmTransaction({
          signature: R,
          lastValidBlockHeight: S.lastValidBlockHeight,
          blockhash: S.recentBlockhash
        }, I);
        if (x.err) throw new Error(`Transaction ${R} failed (${JSON.stringify(x)})`);
        for (; ; ) {
          try {
            if (await e.getSlot({
              commitment: I
            }) > M.slot) break;
          } catch {
          }
          await new Promise((C) => setTimeout(C, Math.round(Dl / 2)));
        }
      }
      return true;
    }
  }
  cn.chunkSize = Py;
  const Ty = new $("BPFLoader2111111111111111111111111111111111");
  class Ly {
    static getMinNumSignatures(e) {
      return cn.getMinNumSignatures(e);
    }
    static load(e, t, r, s, n) {
      return cn.load(e, t, r, n, s);
    }
  }
  function Cy(o) {
    return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
  }
  var uo, wc;
  function By() {
    if (wc) return uo;
    wc = 1;
    var o = Object.prototype.toString, e = Object.keys || function(r) {
      var s = [];
      for (var n in r) s.push(n);
      return s;
    };
    function t(r, s) {
      var n, a, l, d, p, k, A;
      if (r === true) return "true";
      if (r === false) return "false";
      switch (typeof r) {
        case "object":
          if (r === null) return null;
          if (r.toJSON && typeof r.toJSON == "function") return t(r.toJSON(), s);
          if (A = o.call(r), A === "[object Array]") {
            for (l = "[", a = r.length - 1, n = 0; n < a; n++) l += t(r[n], true) + ",";
            return a > -1 && (l += t(r[n], true)), l + "]";
          } else if (A === "[object Object]") {
            for (d = e(r).sort(), a = d.length, l = "", n = 0; n < a; ) p = d[n], k = t(r[p], false), k !== void 0 && (l && (l += ","), l += JSON.stringify(p) + ":" + k), n++;
            return "{" + l + "}";
          } else return JSON.stringify(r);
        case "function":
        case "undefined":
          return s ? null : void 0;
        case "string":
          return JSON.stringify(r);
        default:
          return isFinite(r) ? r : null;
      }
    }
    return uo = function(r) {
      var s = t(r, false);
      if (s !== void 0) return "" + s;
    }, uo;
  }
  var Oy = By(), kc = Cy(Oy);
  const gs = 32;
  function lo(o) {
    let e = 0;
    for (; o > 1; ) o /= 2, e++;
    return e;
  }
  function Ny(o) {
    return o === 0 ? 1 : (o--, o |= o >> 1, o |= o >> 2, o |= o >> 4, o |= o >> 8, o |= o >> 16, o |= o >> 32, o + 1);
  }
  class Fl {
    constructor(e, t, r, s, n) {
      this.slotsPerEpoch = void 0, this.leaderScheduleSlotOffset = void 0, this.warmup = void 0, this.firstNormalEpoch = void 0, this.firstNormalSlot = void 0, this.slotsPerEpoch = e, this.leaderScheduleSlotOffset = t, this.warmup = r, this.firstNormalEpoch = s, this.firstNormalSlot = n;
    }
    getEpoch(e) {
      return this.getEpochAndSlotIndex(e)[0];
    }
    getEpochAndSlotIndex(e) {
      if (e < this.firstNormalSlot) {
        const t = lo(Ny(e + gs + 1)) - lo(gs) - 1, r = this.getSlotsInEpoch(t), s = e - (r - gs);
        return [
          t,
          s
        ];
      } else {
        const t = e - this.firstNormalSlot, r = Math.floor(t / this.slotsPerEpoch), s = this.firstNormalEpoch + r, n = t % this.slotsPerEpoch;
        return [
          s,
          n
        ];
      }
    }
    getFirstSlotInEpoch(e) {
      return e <= this.firstNormalEpoch ? (Math.pow(2, e) - 1) * gs : (e - this.firstNormalEpoch) * this.slotsPerEpoch + this.firstNormalSlot;
    }
    getLastSlotInEpoch(e) {
      return this.getFirstSlotInEpoch(e) + this.getSlotsInEpoch(e) - 1;
    }
    getSlotsInEpoch(e) {
      return e < this.firstNormalEpoch ? Math.pow(2, e + lo(gs)) : this.slotsPerEpoch;
    }
  }
  var zy = globalThis.fetch;
  class Ky extends Ou {
    constructor(e, t, r) {
      const s = (n) => {
        const a = zu(n, {
          autoconnect: true,
          max_reconnects: 5,
          reconnect: true,
          reconnect_interval: 1e3,
          ...t
        });
        return "socket" in a ? this.underlyingSocket = a.socket : this.underlyingSocket = a, a;
      };
      super(s, e, t, r), this.underlyingSocket = void 0;
    }
    call(...e) {
      var _a2;
      const t = (_a2 = this.underlyingSocket) == null ? void 0 : _a2.readyState;
      return t === 1 ? super.call(...e) : Promise.reject(new Error("Tried to call a JSON-RPC method `" + e[0] + "` but the socket was not `CONNECTING` or `OPEN` (`readyState` was " + t + ")"));
    }
    notify(...e) {
      var _a2;
      const t = (_a2 = this.underlyingSocket) == null ? void 0 : _a2.readyState;
      return t === 1 ? super.notify(...e) : Promise.reject(new Error("Tried to send a JSON-RPC notification `" + e[0] + "` but the socket was not `CONNECTING` or `OPEN` (`readyState` was " + t + ")"));
    }
  }
  function $y(o, e) {
    let t;
    try {
      t = o.layout.decode(e);
    } catch (r) {
      throw new Error("invalid instruction; " + r);
    }
    if (t.typeIndex !== o.index) throw new Error(`invalid account data; account type mismatch ${t.typeIndex} != ${o.index}`);
    return t;
  }
  const vc = 56;
  class Do {
    constructor(e) {
      this.key = void 0, this.state = void 0, this.key = e.key, this.state = e.state;
    }
    isActive() {
      const e = BigInt("0xffffffffffffffff");
      return this.state.deactivationSlot === e;
    }
    static deserialize(e) {
      const t = $y(Uy, e), r = e.length - vc;
      tt(r >= 0, "lookup table is invalid"), tt(r % 32 === 0, "lookup table is invalid");
      const s = r / 32, { addresses: n } = m.struct([
        m.seq(nt(), s, "addresses")
      ]).decode(e.slice(vc));
      return {
        deactivationSlot: t.deactivationSlot,
        lastExtendedSlot: t.lastExtendedSlot,
        lastExtendedSlotStartIndex: t.lastExtendedStartIndex,
        authority: t.authority.length !== 0 ? new $(t.authority[0]) : void 0,
        addresses: n.map((a) => new $(a))
      };
    }
  }
  const Uy = {
    index: 1,
    layout: m.struct([
      m.u32("typeIndex"),
      Nn("deactivationSlot"),
      m.nu64("lastExtendedSlot"),
      m.u8("lastExtendedStartIndex"),
      m.u8(),
      m.seq(nt(), m.offset(m.u8(), -1), "authority")
    ])
  }, Wy = /^[^:]+:\/\/([^:[]+|\[[^\]]+\])(:\d+)?(.*)/i;
  function Dy(o) {
    const e = o.match(Wy);
    if (e == null) throw TypeError(`Failed to validate endpoint URL \`${o}\``);
    const [t, r, s, n] = e, a = o.startsWith("https:") ? "wss:" : "ws:", l = s == null ? null : parseInt(s.slice(1), 10), d = l == null ? "" : `:${l + 1}`;
    return `${a}//${r}${d}${n}`;
  }
  const It = zs(wa($), H(), (o) => new $(o)), Hl = ka([
    H(),
    kt("base64")
  ]), Ea = zs(wa(B), Hl, (o) => B.from(o[0], "base64")), Gl = 30 * 1e3;
  function qy(o) {
    if (/^https?:/.test(o) === false) throw new TypeError("Endpoint URL must start with `http:` or `https:`.");
    return o;
  }
  function gt(o) {
    let e, t;
    if (typeof o == "string") e = o;
    else if (o) {
      const { commitment: r, ...s } = o;
      e = r, t = s;
    }
    return {
      commitment: e,
      config: t
    };
  }
  function Sc(o) {
    return o.map((e) => "memcmp" in e ? {
      ...e,
      memcmp: {
        ...e.memcmp,
        encoding: e.memcmp.encoding ?? "base58"
      }
    } : e);
  }
  function jl(o) {
    return Kt([
      K({
        jsonrpc: kt("2.0"),
        id: H(),
        result: o
      }),
      K({
        jsonrpc: kt("2.0"),
        id: H(),
        error: K({
          code: Fn(),
          message: H(),
          data: ie(ty())
        })
      })
    ]);
  }
  const Vy = jl(Fn());
  function Je(o) {
    return zs(jl(o), Vy, (e) => "error" in e ? e : {
      ...e,
      result: Y(e.result, o)
    });
  }
  function Rt(o) {
    return Je(K({
      context: K({
        slot: T()
      }),
      value: o
    }));
  }
  function Fi(o) {
    return K({
      context: K({
        slot: T()
      }),
      value: o
    });
  }
  function ho(o, e) {
    if (o === 0) return new on({
      header: e.header,
      staticAccountKeys: e.accountKeys.map((t) => new $(t)),
      recentBlockhash: e.recentBlockhash,
      compiledInstructions: e.instructions.map((t) => ({
        programIdIndex: t.programIdIndex,
        accountKeyIndexes: t.accounts,
        data: vt.decode(t.data)
      })),
      addressTableLookups: e.addressTableLookups
    });
    if (o === 1) {
      const t = e.transactionConfig;
      if (t == null) throw new Error("Expected a version 1 transaction message response to have a `transactionConfig`");
      return new $s({
        header: e.header,
        staticAccountKeys: e.accountKeys.map((r) => new $(r)),
        recentBlockhash: e.recentBlockhash,
        compiledInstructions: e.instructions.map((r) => ({
          programIdIndex: r.programIdIndex,
          accountKeyIndexes: r.accounts,
          data: vt.decode(r.data)
        })),
        transactionConfig: t
      });
    } else return new tr(e);
  }
  const Fy = K({
    foundation: T(),
    foundationTerm: T(),
    initial: T(),
    taper: T(),
    terminal: T()
  }), Hy = Je(X(j(K({
    epoch: T(),
    effectiveSlot: T(),
    amount: T(),
    postBalance: T(),
    commission: ie(j(T()))
  })))), Gy = X(K({
    slot: T(),
    prioritizationFee: T()
  })), jy = K({
    total: T(),
    validator: T(),
    foundation: T(),
    epoch: T()
  }), Yy = K({
    epoch: T(),
    slotIndex: T(),
    slotsInEpoch: T(),
    absoluteSlot: T(),
    blockHeight: ie(T()),
    transactionCount: ie(T())
  }), Zy = K({
    slotsPerEpoch: T(),
    leaderScheduleSlotOffset: T(),
    warmup: lr(),
    firstNormalEpoch: T(),
    firstNormalSlot: T()
  }), Jy = Nl(H(), X(T())), gn = j(Kt([
    K({}),
    H()
  ])), Xy = K({
    err: gn
  }), Qy = kt("receivedSignature"), em = K({
    "solana-core": H(),
    "feature-set": ie(T())
  }), tm = K({
    program: H(),
    programId: It,
    parsed: Fn()
  }), rm = K({
    programId: It,
    accounts: X(It),
    data: H()
  }), _c = Rt(K({
    err: j(Kt([
      K({}),
      H()
    ])),
    logs: j(X(H())),
    accounts: ie(j(X(j(K({
      executable: lr(),
      owner: H(),
      lamports: T(),
      data: X(H()),
      rentEpoch: ie(T())
    }))))),
    unitsConsumed: ie(T()),
    returnData: ie(j(K({
      programId: H(),
      data: ka([
        H(),
        kt("base64")
      ])
    }))),
    innerInstructions: ie(j(X(K({
      index: T(),
      instructions: X(Kt([
        tm,
        rm
      ]))
    }))))
  })), nm = Rt(K({
    byIdentity: Nl(H(), X(T())),
    range: K({
      firstSlot: T(),
      lastSlot: T()
    })
  }));
  function sm(o, e, t, r, s, n) {
    const a = t || zy;
    let l;
    n != null && console.warn("You have supplied an `httpAgent` when creating a `Connection` in a browser environment.It has been ignored; `httpAgent` is only used in Node environments.");
    let d;
    return r && (d = async (k, A) => {
      const E = await new Promise((S, I) => {
        try {
          r(k, A, (R, M) => S([
            R,
            M
          ]));
        } catch (R) {
          I(R);
        }
      });
      return await a(...E);
    }), new Bu(async (k, A) => {
      const E = {
        method: "POST",
        body: k,
        agent: l,
        headers: Object.assign({
          "Content-Type": "application/json"
        }, e || {}, s0)
      };
      try {
        let S = 5, I, R = 500;
        for (; d ? I = await d(o, E) : I = await a(o, E), !(I.status !== 429 || s === true || (S -= 1, S === 0)); ) console.error(`Server responded with ${I.status} ${I.statusText}.  Retrying after ${R}ms delay...`), await Xr(R), R *= 2;
        const M = await I.text();
        I.ok ? A(null, M) : A(new Error(`${I.status} ${I.statusText}: ${M}`));
      } catch (S) {
        S instanceof Error && A(S);
      }
    }, {});
  }
  function im(o) {
    return (e, t) => new Promise((r, s) => {
      o.request(e, t, (n, a) => {
        if (n) {
          s(n);
          return;
        }
        r(a);
      });
    });
  }
  function om(o) {
    return (e) => new Promise((t, r) => {
      e.length === 0 && t([]);
      const s = e.map((n) => o.request(n.methodName, n.args));
      o.request(s, (n, a) => {
        if (n) {
          r(n);
          return;
        }
        t(a);
      });
    });
  }
  const am = Je(Fy), cm = Je(jy), um = Je(Gy), lm = Je(Yy), hm = Je(Zy), dm = Je(Jy), fm = Je(T()), gm = Rt(K({
    total: T(),
    circulating: T(),
    nonCirculating: T(),
    nonCirculatingAccounts: X(It)
  })), qo = K({
    amount: H(),
    uiAmount: j(T()),
    decimals: T(),
    uiAmountString: ie(H())
  }), pm = Rt(X(K({
    address: It,
    amount: H(),
    uiAmount: j(T()),
    decimals: T(),
    uiAmountString: ie(H())
  }))), ym = Rt(X(K({
    pubkey: It,
    account: K({
      executable: lr(),
      owner: It,
      lamports: T(),
      data: Ea,
      rentEpoch: T()
    })
  }))), Vo = K({
    program: H(),
    parsed: Fn(),
    space: T()
  }), mm = Rt(X(K({
    pubkey: It,
    account: K({
      executable: lr(),
      owner: It,
      lamports: T(),
      data: Vo,
      rentEpoch: T()
    })
  }))), bm = Rt(X(K({
    lamports: T(),
    address: It
  }))), Rs = K({
    executable: lr(),
    owner: It,
    lamports: T(),
    data: Ea,
    rentEpoch: T()
  }), wm = K({
    pubkey: It,
    account: Rs
  }), km = zs(Kt([
    wa(B),
    Vo
  ]), Kt([
    Hl,
    Vo
  ]), (o) => Array.isArray(o) ? Y(o, Ea) : o), Fo = K({
    executable: lr(),
    owner: It,
    lamports: T(),
    data: km,
    rentEpoch: T()
  }), vm = K({
    pubkey: It,
    account: Fo
  }), Sm = K({
    state: Kt([
      kt("active"),
      kt("inactive"),
      kt("activating"),
      kt("deactivating")
    ]),
    active: T(),
    inactive: T()
  }), _m = Je(X(K({
    signature: H(),
    slot: T(),
    err: gn,
    memo: j(H()),
    blockTime: ie(j(T()))
  }))), Am = Je(X(K({
    signature: H(),
    slot: T(),
    err: gn,
    memo: j(H()),
    blockTime: ie(j(T()))
  }))), Im = K({
    subscription: T(),
    result: Fi(Rs)
  }), Em = K({
    pubkey: It,
    account: Rs
  }), Rm = K({
    subscription: T(),
    result: Fi(Em)
  }), Mm = K({
    parent: T(),
    slot: T(),
    root: T()
  }), xm = K({
    subscription: T(),
    result: Mm
  }), Pm = Kt([
    K({
      type: Kt([
        kt("firstShredReceived"),
        kt("completed"),
        kt("optimisticConfirmation"),
        kt("root")
      ]),
      slot: T(),
      timestamp: T()
    }),
    K({
      type: kt("createdBank"),
      parent: T(),
      slot: T(),
      timestamp: T()
    }),
    K({
      type: kt("frozen"),
      slot: T(),
      timestamp: T(),
      stats: K({
        numTransactionEntries: T(),
        numSuccessfulTransactions: T(),
        numFailedTransactions: T(),
        maxTransactionsPerEntry: T()
      })
    }),
    K({
      type: kt("dead"),
      slot: T(),
      timestamp: T(),
      err: H()
    })
  ]), Tm = K({
    subscription: T(),
    result: Pm
  }), Lm = K({
    subscription: T(),
    result: Fi(Kt([
      Xy,
      Qy
    ]))
  }), Cm = K({
    subscription: T(),
    result: T()
  }), Bm = K({
    pubkey: H(),
    gossip: j(H()),
    tpu: j(H()),
    rpc: j(H()),
    version: j(H())
  }), Ac = K({
    votePubkey: H(),
    nodePubkey: H(),
    activatedStake: T(),
    epochVoteAccount: lr(),
    epochCredits: X(ka([
      T(),
      T(),
      T()
    ])),
    commission: T(),
    lastVote: T(),
    rootSlot: j(T())
  }), Om = Je(K({
    current: X(Ac),
    delinquent: X(Ac)
  })), Nm = Kt([
    kt("processed"),
    kt("confirmed"),
    kt("finalized")
  ]), zm = K({
    slot: T(),
    confirmations: j(T()),
    err: gn,
    confirmationStatus: ie(Nm)
  }), Km = Rt(X(j(zm))), $m = Je(T()), Yl = K({
    accountKey: It,
    writableIndexes: X(T()),
    readonlyIndexes: X(T())
  }), Zl = K({
    computeUnitLimit: j(T()),
    heapSize: j(T()),
    loadedAccountsDataSizeLimit: j(T()),
    priorityFee: j(T())
  }), Ra = K({
    signatures: X(H()),
    message: K({
      accountKeys: X(H()),
      header: K({
        numRequiredSignatures: T(),
        numReadonlySignedAccounts: T(),
        numReadonlyUnsignedAccounts: T()
      }),
      instructions: X(K({
        accounts: X(T()),
        data: H(),
        programIdIndex: T()
      })),
      recentBlockhash: H(),
      addressTableLookups: ie(X(Yl)),
      transactionConfig: ie(j(Zl))
    })
  }), Jl = K({
    pubkey: It,
    signer: lr(),
    writable: lr(),
    source: ie(Kt([
      kt("transaction"),
      kt("lookupTable")
    ]))
  }), Xl = K({
    accountKeys: X(Jl),
    signatures: X(H())
  }), Ql = K({
    parsed: Fn(),
    program: H(),
    programId: It
  }), eh = K({
    accounts: X(It),
    data: H(),
    programId: It
  }), Um = Kt([
    eh,
    Ql
  ]), Wm = Kt([
    K({
      parsed: Fn(),
      program: H(),
      programId: H()
    }),
    K({
      accounts: X(H()),
      data: H(),
      programId: H()
    })
  ]), th = zs(Um, Wm, (o) => "accounts" in o ? Y(o, eh) : Y(o, Ql)), rh = K({
    signatures: X(H()),
    message: K({
      accountKeys: X(Jl),
      instructions: X(th),
      recentBlockhash: H(),
      addressTableLookups: ie(j(X(Yl))),
      transactionConfig: ie(j(Zl))
    })
  }), Ii = K({
    accountIndex: T(),
    mint: H(),
    owner: ie(H()),
    programId: ie(H()),
    uiTokenAmount: qo
  }), nh = K({
    writable: X(It),
    readonly: X(It)
  }), Hi = K({
    err: gn,
    fee: T(),
    innerInstructions: ie(j(X(K({
      index: T(),
      instructions: X(K({
        accounts: X(T()),
        data: H(),
        programIdIndex: T()
      }))
    })))),
    preBalances: X(T()),
    postBalances: X(T()),
    logMessages: ie(j(X(H()))),
    preTokenBalances: ie(j(X(Ii))),
    postTokenBalances: ie(j(X(Ii))),
    loadedAddresses: ie(nh),
    computeUnitsConsumed: ie(T()),
    costUnits: ie(T())
  }), Ma = K({
    err: gn,
    fee: T(),
    innerInstructions: ie(j(X(K({
      index: T(),
      instructions: X(th)
    })))),
    preBalances: X(T()),
    postBalances: X(T()),
    logMessages: ie(j(X(H()))),
    preTokenBalances: ie(j(X(Ii))),
    postTokenBalances: ie(j(X(Ii))),
    loadedAddresses: ie(nh),
    computeUnitsConsumed: ie(T()),
    costUnits: ie(T())
  }), Hn = Kt([
    kt(0),
    kt(1),
    kt("legacy")
  ]), pn = K({
    pubkey: H(),
    lamports: T(),
    postBalance: j(T()),
    rewardType: j(H()),
    commission: ie(j(T()))
  }), Dm = Je(j(K({
    blockhash: H(),
    previousBlockhash: H(),
    parentSlot: T(),
    transactions: X(K({
      transaction: Ra,
      meta: j(Hi),
      version: ie(Hn)
    })),
    rewards: ie(X(pn)),
    blockTime: j(T()),
    blockHeight: j(T())
  }))), qm = Je(j(K({
    blockhash: H(),
    previousBlockhash: H(),
    parentSlot: T(),
    rewards: ie(X(pn)),
    blockTime: j(T()),
    blockHeight: j(T())
  }))), Vm = Je(j(K({
    blockhash: H(),
    previousBlockhash: H(),
    parentSlot: T(),
    transactions: X(K({
      transaction: Xl,
      meta: j(Hi),
      version: ie(Hn)
    })),
    rewards: ie(X(pn)),
    blockTime: j(T()),
    blockHeight: j(T())
  }))), Fm = Je(j(K({
    blockhash: H(),
    previousBlockhash: H(),
    parentSlot: T(),
    transactions: X(K({
      transaction: rh,
      meta: j(Ma),
      version: ie(Hn)
    })),
    rewards: ie(X(pn)),
    blockTime: j(T()),
    blockHeight: j(T())
  }))), Hm = Je(j(K({
    blockhash: H(),
    previousBlockhash: H(),
    parentSlot: T(),
    transactions: X(K({
      transaction: Xl,
      meta: j(Ma),
      version: ie(Hn)
    })),
    rewards: ie(X(pn)),
    blockTime: j(T()),
    blockHeight: j(T())
  }))), Gm = Je(j(K({
    blockhash: H(),
    previousBlockhash: H(),
    parentSlot: T(),
    rewards: ie(X(pn)),
    blockTime: j(T()),
    blockHeight: j(T())
  }))), jm = Je(j(K({
    blockhash: H(),
    previousBlockhash: H(),
    parentSlot: T(),
    transactions: X(K({
      transaction: Ra,
      meta: j(Hi)
    })),
    rewards: ie(X(pn)),
    blockTime: j(T())
  }))), Ic = Je(j(K({
    blockhash: H(),
    previousBlockhash: H(),
    parentSlot: T(),
    signatures: X(H()),
    blockTime: j(T())
  }))), fo = Je(j(K({
    slot: T(),
    meta: j(Hi),
    blockTime: ie(j(T())),
    transaction: Ra,
    version: ie(Hn)
  }))), Ys = Je(j(K({
    slot: T(),
    transaction: rh,
    meta: j(Ma),
    blockTime: ie(j(T())),
    version: ie(Hn)
  }))), Ym = Rt(K({
    blockhash: H(),
    lastValidBlockHeight: T()
  })), Zm = Rt(lr()), Jm = K({
    slot: T(),
    numTransactions: T(),
    numSlots: T(),
    samplePeriodSecs: T()
  }), Xm = Je(X(Jm)), Qm = Rt(j(K({
    feeCalculator: K({
      lamportsPerSignature: T()
    })
  }))), e0 = Je(H()), t0 = Je(H()), r0 = K({
    err: gn,
    logs: X(H()),
    signature: H()
  }), n0 = K({
    result: Fi(r0),
    subscription: T()
  }), s0 = {
    "solana-client": "js/1.99.0"
  };
  class i0 {
    constructor(e, t) {
      this._commitment = void 0, this._confirmTransactionInitialTimeout = void 0, this._rpcEndpoint = void 0, this._rpcWsEndpoint = void 0, this._rpcClient = void 0, this._rpcRequest = void 0, this._rpcBatchRequest = void 0, this._rpcWebSocket = void 0, this._rpcWebSocketConnected = false, this._rpcWebSocketHeartbeat = null, this._rpcWebSocketIdleTimeout = null, this._rpcWebSocketGeneration = 0, this._disableBlockhashCaching = false, this._pollingBlockhash = false, this._blockhashInfo = {
        latestBlockhash: null,
        lastFetch: 0,
        transactionSignatures: [],
        simulatedSignatures: []
      }, this._nextClientSubscriptionId = 0, this._subscriptionDisposeFunctionsByClientSubscriptionId = {}, this._subscriptionHashByClientSubscriptionId = {}, this._subscriptionStateChangeCallbacksByHash = {}, this._subscriptionCallbacksByServerSubscriptionId = {}, this._subscriptionsByHash = {}, this._subscriptionsAutoDisposedByRpc = /* @__PURE__ */ new Set(), this.getBlockHeight = /* @__PURE__ */ (() => {
        const p = {};
        return async (k) => {
          const { commitment: A, config: E } = gt(k), S = this._buildArgs([], A, void 0, E), I = kc(S);
          return p[I] = p[I] ?? (async () => {
            try {
              const R = await this._rpcRequest("getBlockHeight", S), M = Y(R, Je(T()));
              if ("error" in M) throw new re(M.error, "failed to get block height information");
              return M.result;
            } finally {
              delete p[I];
            }
          })(), await p[I];
        };
      })();
      let r, s, n, a, l, d;
      t && typeof t == "string" ? this._commitment = t : t && (this._commitment = t.commitment, this._confirmTransactionInitialTimeout = t.confirmTransactionInitialTimeout, r = t.wsEndpoint, s = t.httpHeaders, n = t.fetch, a = t.fetchMiddleware, l = t.disableRetryOnRateLimit, d = t.httpAgent), this._rpcEndpoint = qy(e), this._rpcWsEndpoint = r || Dy(e), this._rpcClient = sm(e, s, n, a, l, d), this._rpcRequest = im(this._rpcClient), this._rpcBatchRequest = om(this._rpcClient), this._rpcWebSocket = new Ky(this._rpcWsEndpoint, {
        autoconnect: false,
        max_reconnects: 1 / 0
      }), this._rpcWebSocket.on("open", this._wsOnOpen.bind(this)), this._rpcWebSocket.on("error", this._wsOnError.bind(this)), this._rpcWebSocket.on("close", this._wsOnClose.bind(this)), this._rpcWebSocket.on("accountNotification", this._wsOnAccountNotification.bind(this)), this._rpcWebSocket.on("programNotification", this._wsOnProgramAccountNotification.bind(this)), this._rpcWebSocket.on("slotNotification", this._wsOnSlotNotification.bind(this)), this._rpcWebSocket.on("slotsUpdatesNotification", this._wsOnSlotUpdatesNotification.bind(this)), this._rpcWebSocket.on("signatureNotification", this._wsOnSignatureNotification.bind(this)), this._rpcWebSocket.on("rootNotification", this._wsOnRootNotification.bind(this)), this._rpcWebSocket.on("logsNotification", this._wsOnLogsNotification.bind(this));
    }
    get commitment() {
      return this._commitment;
    }
    get rpcEndpoint() {
      return this._rpcEndpoint;
    }
    async getBalanceAndContext(e, t) {
      const { commitment: r, config: s } = gt(t), n = this._buildArgs([
        e.toBase58()
      ], r, void 0, s), a = await this._rpcRequest("getBalance", n), l = Y(a, Rt(T()));
      if ("error" in l) throw new re(l.error, `failed to get balance for ${e.toBase58()}`);
      return l.result;
    }
    async getBalance(e, t) {
      return await this.getBalanceAndContext(e, t).then((r) => r.value).catch((r) => {
        throw new Error("failed to get balance of account " + e.toBase58() + ": " + r);
      });
    }
    async getBlockTime(e) {
      const t = await this._rpcRequest("getBlockTime", [
        e
      ]), r = Y(t, Je(j(T())));
      if ("error" in r) throw new re(r.error, `failed to get block time for slot ${e}`);
      return r.result;
    }
    async getMinimumLedgerSlot() {
      const e = await this._rpcRequest("minimumLedgerSlot", []), t = Y(e, Je(T()));
      if ("error" in t) throw new re(t.error, "failed to get minimum ledger slot");
      return t.result;
    }
    async getFirstAvailableBlock() {
      const e = await this._rpcRequest("getFirstAvailableBlock", []), t = Y(e, fm);
      if ("error" in t) throw new re(t.error, "failed to get first available block");
      return t.result;
    }
    async getSupply(e) {
      let t = {};
      typeof e == "string" ? t = {
        commitment: e
      } : e ? t = {
        ...e,
        commitment: e && e.commitment || this.commitment
      } : t = {
        commitment: this.commitment
      };
      const r = await this._rpcRequest("getSupply", [
        t
      ]), s = Y(r, gm);
      if ("error" in s) throw new re(s.error, "failed to get supply");
      return s.result;
    }
    async getTokenSupply(e, t) {
      const r = this._buildArgs([
        e.toBase58()
      ], t), s = await this._rpcRequest("getTokenSupply", r), n = Y(s, Rt(qo));
      if ("error" in n) throw new re(n.error, "failed to get token supply");
      return n.result;
    }
    async getTokenAccountBalance(e, t) {
      const r = this._buildArgs([
        e.toBase58()
      ], t), s = await this._rpcRequest("getTokenAccountBalance", r), n = Y(s, Rt(qo));
      if ("error" in n) throw new re(n.error, "failed to get token account balance");
      return n.result;
    }
    async getTokenAccountsByOwner(e, t, r) {
      const { commitment: s, config: n } = gt(r);
      let a = [
        e.toBase58()
      ];
      "mint" in t ? a.push({
        mint: t.mint.toBase58()
      }) : a.push({
        programId: t.programId.toBase58()
      });
      const l = this._buildArgs(a, s, "base64", n), d = await this._rpcRequest("getTokenAccountsByOwner", l), p = Y(d, ym);
      if ("error" in p) throw new re(p.error, `failed to get token accounts owned by account ${e.toBase58()}`);
      return p.result;
    }
    async getParsedTokenAccountsByOwner(e, t, r) {
      let s = [
        e.toBase58()
      ];
      "mint" in t ? s.push({
        mint: t.mint.toBase58()
      }) : s.push({
        programId: t.programId.toBase58()
      });
      const n = this._buildArgs(s, r, "jsonParsed"), a = await this._rpcRequest("getTokenAccountsByOwner", n), l = Y(a, mm);
      if ("error" in l) throw new re(l.error, `failed to get token accounts owned by account ${e.toBase58()}`);
      return l.result;
    }
    async getLargestAccounts(e) {
      const t = {
        ...e,
        commitment: e && e.commitment || this.commitment
      }, r = t.filter || t.commitment ? [
        t
      ] : [], s = await this._rpcRequest("getLargestAccounts", r), n = Y(s, bm);
      if ("error" in n) throw new re(n.error, "failed to get largest accounts");
      return n.result;
    }
    async getTokenLargestAccounts(e, t) {
      const r = this._buildArgs([
        e.toBase58()
      ], t), s = await this._rpcRequest("getTokenLargestAccounts", r), n = Y(s, pm);
      if ("error" in n) throw new re(n.error, "failed to get token largest accounts");
      return n.result;
    }
    async getAccountInfoAndContext(e, t) {
      const { commitment: r, config: s } = gt(t), n = this._buildArgs([
        e.toBase58()
      ], r, "base64", s), a = await this._rpcRequest("getAccountInfo", n), l = Y(a, Rt(j(Rs)));
      if ("error" in l) throw new re(l.error, `failed to get info about account ${e.toBase58()}`);
      return l.result;
    }
    async getParsedAccountInfo(e, t) {
      const { commitment: r, config: s } = gt(t), n = this._buildArgs([
        e.toBase58()
      ], r, "jsonParsed", s), a = await this._rpcRequest("getAccountInfo", n), l = Y(a, Rt(j(Fo)));
      if ("error" in l) throw new re(l.error, `failed to get info about account ${e.toBase58()}`);
      return l.result;
    }
    async getAccountInfo(e, t) {
      try {
        return (await this.getAccountInfoAndContext(e, t)).value;
      } catch (r) {
        throw new Error("failed to get info about account " + e.toBase58() + ": " + r);
      }
    }
    async getMultipleParsedAccounts(e, t) {
      const { commitment: r, config: s } = gt(t), n = e.map((p) => p.toBase58()), a = this._buildArgs([
        n
      ], r, "jsonParsed", s), l = await this._rpcRequest("getMultipleAccounts", a), d = Y(l, Rt(X(j(Fo))));
      if ("error" in d) throw new re(d.error, `failed to get info for accounts ${n}`);
      return d.result;
    }
    async getMultipleAccountsInfoAndContext(e, t) {
      const { commitment: r, config: s } = gt(t), n = e.map((p) => p.toBase58()), a = this._buildArgs([
        n
      ], r, "base64", s), l = await this._rpcRequest("getMultipleAccounts", a), d = Y(l, Rt(X(j(Rs))));
      if ("error" in d) throw new re(d.error, `failed to get info for accounts ${n}`);
      return d.result;
    }
    async getMultipleAccountsInfo(e, t) {
      return (await this.getMultipleAccountsInfoAndContext(e, t)).value;
    }
    async getStakeActivation(e, t, r) {
      const { commitment: s, config: n } = gt(t), a = this._buildArgs([
        e.toBase58()
      ], s, void 0, {
        ...n,
        epoch: r ?? (n == null ? void 0 : n.epoch)
      }), l = await this._rpcRequest("getStakeActivation", a), d = Y(l, Je(Sm));
      if ("error" in d) throw new re(d.error, `failed to get Stake Activation ${e.toBase58()}`);
      return d.result;
    }
    async getProgramAccounts(e, t) {
      const { commitment: r, config: s } = gt(t), { encoding: n, ...a } = s || {}, l = this._buildArgs([
        e.toBase58()
      ], r, n || "base64", {
        ...a,
        ...a.filters ? {
          filters: Sc(a.filters)
        } : null
      }), d = await this._rpcRequest("getProgramAccounts", l), p = X(wm), k = a.withContext === true ? Y(d, Rt(p)) : Y(d, Je(p));
      if ("error" in k) throw new re(k.error, `failed to get accounts owned by program ${e.toBase58()}`);
      return k.result;
    }
    async getParsedProgramAccounts(e, t) {
      const { commitment: r, config: s } = gt(t), n = this._buildArgs([
        e.toBase58()
      ], r, "jsonParsed", s), a = await this._rpcRequest("getProgramAccounts", n), l = Y(a, Je(X(vm)));
      if ("error" in l) throw new re(l.error, `failed to get accounts owned by program ${e.toBase58()}`);
      return l.result;
    }
    async confirmTransaction(e, t) {
      var _a2;
      let r;
      if (typeof e == "string") r = e;
      else {
        const n = e;
        if ((_a2 = n.abortSignal) == null ? void 0 : _a2.aborted) return Promise.reject(n.abortSignal.reason);
        r = n.signature;
      }
      let s;
      try {
        s = vt.decode(r);
      } catch {
        throw new Error("signature must be base58 encoded: " + r);
      }
      return tt(s.length === 64, "signature has invalid length"), typeof e == "string" ? await this.confirmTransactionUsingLegacyTimeoutStrategy({
        commitment: t || this.commitment,
        signature: r
      }) : "lastValidBlockHeight" in e ? await this.confirmTransactionUsingBlockHeightExceedanceStrategy({
        commitment: t || this.commitment,
        strategy: e
      }) : await this.confirmTransactionUsingDurableNonceStrategy({
        commitment: t || this.commitment,
        strategy: e
      });
    }
    getCancellationPromise(e) {
      return new Promise((t, r) => {
        e != null && (e.aborted ? r(e.reason) : e.addEventListener("abort", () => {
          r(e.reason);
        }));
      });
    }
    getTransactionConfirmationPromise({ commitment: e, signature: t }) {
      let r, s, n = false;
      const a = new Promise((d, p) => {
        try {
          r = this.onSignature(t, (A, E) => {
            r = void 0;
            const S = {
              context: E,
              value: A
            };
            d({
              __type: yr.PROCESSED,
              response: S
            });
          }, e);
          const k = new Promise((A) => {
            r == null ? A() : s = this._onSubscriptionStateChange(r, (E) => {
              E === "subscribed" && A();
            });
          });
          (async () => {
            if (await k, n) return;
            const A = await this.getSignatureStatus(t);
            if (n || A == null) return;
            const { context: E, value: S } = A;
            if (S != null) if (S == null ? void 0 : S.err) p(S.err);
            else {
              switch (e) {
                case "confirmed":
                case "single":
                case "singleGossip": {
                  if (S.confirmationStatus === "processed") return;
                  break;
                }
                case "finalized":
                case "max":
                case "root": {
                  if (S.confirmationStatus === "processed" || S.confirmationStatus === "confirmed") return;
                  break;
                }
                case "processed":
                case "recent":
              }
              n = true, d({
                __type: yr.PROCESSED,
                response: {
                  context: E,
                  value: S
                }
              });
            }
          })();
        } catch (k) {
          p(k);
        }
      });
      return {
        abortConfirmation: () => {
          s && (s(), s = void 0), r != null && (this.removeSignatureListener(r), r = void 0);
        },
        confirmationPromise: a
      };
    }
    async confirmTransactionUsingBlockHeightExceedanceStrategy({ commitment: e, strategy: { abortSignal: t, lastValidBlockHeight: r, signature: s } }) {
      let n = false;
      const a = new Promise((A) => {
        const E = async () => {
          try {
            return await this.getBlockHeight(e);
          } catch {
            return -1;
          }
        };
        (async () => {
          let S = await E();
          if (!n) {
            for (; S <= r; ) if (await Xr(1e3), n || (S = await E(), n)) return;
            A({
              __type: yr.BLOCKHEIGHT_EXCEEDED
            });
          }
        })();
      }), { abortConfirmation: l, confirmationPromise: d } = this.getTransactionConfirmationPromise({
        commitment: e,
        signature: s
      }), p = this.getCancellationPromise(t);
      let k;
      try {
        const A = await Promise.race([
          p,
          d,
          a
        ]);
        if (A.__type === yr.PROCESSED) k = A.response;
        else throw new _a(s);
      } finally {
        n = true, l();
      }
      return k;
    }
    async confirmTransactionUsingDurableNonceStrategy({ commitment: e, strategy: { abortSignal: t, minContextSlot: r, nonceAccountPubkey: s, nonceValue: n, signature: a } }) {
      let l = false;
      const d = new Promise((S) => {
        let I = n, R = null;
        const M = async () => {
          try {
            const { context: x, value: C } = await this.getNonceAndContext(s, {
              commitment: e,
              minContextSlot: r
            });
            return R = x.slot, C == null ? void 0 : C.nonce;
          } catch {
            return I;
          }
        };
        (async () => {
          if (I = await M(), !l) for (; ; ) {
            if (n !== I) {
              S({
                __type: yr.NONCE_INVALID,
                slotInWhichNonceDidAdvance: R
              });
              return;
            }
            if (await Xr(2e3), l || (I = await M(), l)) return;
          }
        })();
      }), { abortConfirmation: p, confirmationPromise: k } = this.getTransactionConfirmationPromise({
        commitment: e,
        signature: a
      }), A = this.getCancellationPromise(t);
      let E;
      try {
        const S = await Promise.race([
          A,
          k,
          d
        ]);
        if (S.__type === yr.PROCESSED) E = S.response;
        else {
          let I;
          for (; ; ) {
            const R = await this.getSignatureStatus(a);
            if (R == null) break;
            if (R.context.slot < (S.slotInWhichNonceDidAdvance ?? r)) {
              await Xr(400);
              continue;
            }
            I = R;
            break;
          }
          if (I == null ? void 0 : I.value) {
            const R = e || "finalized", { confirmationStatus: M } = I.value;
            switch (R) {
              case "processed":
              case "recent":
                if (M !== "processed" && M !== "confirmed" && M !== "finalized") throw new Sn(a);
                break;
              case "confirmed":
              case "single":
              case "singleGossip":
                if (M !== "confirmed" && M !== "finalized") throw new Sn(a);
                break;
              case "finalized":
              case "max":
              case "root":
                if (M !== "finalized") throw new Sn(a);
                break;
              default:
            }
            E = {
              context: I.context,
              value: {
                err: I.value.err
              }
            };
          } else throw new Sn(a);
        }
      } finally {
        l = true, p();
      }
      return E;
    }
    async confirmTransactionUsingLegacyTimeoutStrategy({ commitment: e, signature: t }) {
      let r;
      const s = new Promise((d) => {
        let p = this._confirmTransactionInitialTimeout || 6e4;
        switch (e) {
          case "processed":
          case "recent":
          case "single":
          case "confirmed":
          case "singleGossip": {
            p = this._confirmTransactionInitialTimeout || 3e4;
            break;
          }
        }
        r = setTimeout(() => d({
          __type: yr.TIMED_OUT,
          timeoutMs: p
        }), p);
      }), { abortConfirmation: n, confirmationPromise: a } = this.getTransactionConfirmationPromise({
        commitment: e,
        signature: t
      });
      let l;
      try {
        const d = await Promise.race([
          a,
          s
        ]);
        if (d.__type === yr.PROCESSED) l = d.response;
        else throw new Aa(t, d.timeoutMs / 1e3);
      } finally {
        clearTimeout(r), n();
      }
      return l;
    }
    async getClusterNodes() {
      const e = await this._rpcRequest("getClusterNodes", []), t = Y(e, Je(X(Bm)));
      if ("error" in t) throw new re(t.error, "failed to get cluster nodes");
      return t.result;
    }
    async getVoteAccounts(e) {
      const t = this._buildArgs([], e), r = await this._rpcRequest("getVoteAccounts", t), s = Y(r, Om);
      if ("error" in s) throw new re(s.error, "failed to get vote accounts");
      return s.result;
    }
    async getSlot(e) {
      const { commitment: t, config: r } = gt(e), s = this._buildArgs([], t, void 0, r), n = await this._rpcRequest("getSlot", s), a = Y(n, Je(T()));
      if ("error" in a) throw new re(a.error, "failed to get slot");
      return a.result;
    }
    async getSlotLeader(e) {
      const { commitment: t, config: r } = gt(e), s = this._buildArgs([], t, void 0, r), n = await this._rpcRequest("getSlotLeader", s), a = Y(n, Je(H()));
      if ("error" in a) throw new re(a.error, "failed to get slot leader");
      return a.result;
    }
    async getSlotLeaders(e, t) {
      const r = [
        e,
        t
      ], s = await this._rpcRequest("getSlotLeaders", r), n = Y(s, Je(X(It)));
      if ("error" in n) throw new re(n.error, "failed to get slot leaders");
      return n.result;
    }
    async getSignatureStatus(e, t) {
      const { context: r, value: s } = await this.getSignatureStatuses([
        e
      ], t);
      tt(s.length === 1);
      const n = s[0];
      return {
        context: r,
        value: n
      };
    }
    async getSignatureStatuses(e, t) {
      const r = [
        e
      ];
      t && r.push(t);
      const s = await this._rpcRequest("getSignatureStatuses", r), n = Y(s, Km);
      if ("error" in n) throw new re(n.error, "failed to get signature status");
      return n.result;
    }
    async getTransactionCount(e) {
      const { commitment: t, config: r } = gt(e), s = this._buildArgs([], t, void 0, r), n = await this._rpcRequest("getTransactionCount", s), a = Y(n, Je(T()));
      if ("error" in a) throw new re(a.error, "failed to get transaction count");
      return a.result;
    }
    async getTotalSupply(e) {
      return (await this.getSupply({
        commitment: e,
        excludeNonCirculatingAccountsList: true
      })).value.total;
    }
    async getInflationGovernor(e) {
      const t = this._buildArgs([], e), r = await this._rpcRequest("getInflationGovernor", t), s = Y(r, am);
      if ("error" in s) throw new re(s.error, "failed to get inflation");
      return s.result;
    }
    async getInflationReward(e, t, r) {
      const { commitment: s, config: n } = gt(r), a = this._buildArgs([
        e.map((p) => p.toBase58())
      ], s, void 0, {
        ...n,
        epoch: t ?? (n == null ? void 0 : n.epoch)
      }), l = await this._rpcRequest("getInflationReward", a), d = Y(l, Hy);
      if ("error" in d) throw new re(d.error, "failed to get inflation reward");
      return d.result;
    }
    async getInflationRate() {
      const e = await this._rpcRequest("getInflationRate", []), t = Y(e, cm);
      if ("error" in t) throw new re(t.error, "failed to get inflation rate");
      return t.result;
    }
    async getEpochInfo(e) {
      const { commitment: t, config: r } = gt(e), s = this._buildArgs([], t, void 0, r), n = await this._rpcRequest("getEpochInfo", s), a = Y(n, lm);
      if ("error" in a) throw new re(a.error, "failed to get epoch info");
      return a.result;
    }
    async getEpochSchedule() {
      const e = await this._rpcRequest("getEpochSchedule", []), t = Y(e, hm);
      if ("error" in t) throw new re(t.error, "failed to get epoch schedule");
      const r = t.result;
      return new Fl(r.slotsPerEpoch, r.leaderScheduleSlotOffset, r.warmup, r.firstNormalEpoch, r.firstNormalSlot);
    }
    async getLeaderSchedule() {
      const e = await this._rpcRequest("getLeaderSchedule", []), t = Y(e, dm);
      if ("error" in t) throw new re(t.error, "failed to get leader schedule");
      return t.result;
    }
    async getMinimumBalanceForRentExemption(e, t) {
      const r = this._buildArgs([
        e
      ], t), s = await this._rpcRequest("getMinimumBalanceForRentExemption", r), n = Y(s, $m);
      return "error" in n ? (console.warn("Unable to fetch minimum balance for rent exemption"), 0) : n.result;
    }
    async getRecentBlockhashAndContext(e) {
      const { context: t, value: { blockhash: r } } = await this.getLatestBlockhashAndContext(e);
      return {
        context: t,
        value: {
          blockhash: r,
          feeCalculator: {
            get lamportsPerSignature() {
              throw new Error("The capability to fetch `lamportsPerSignature` using the `getRecentBlockhash` API is no longer offered by the network. Use the `getFeeForMessage` API to obtain the fee for a given message.");
            },
            toJSON() {
              return {};
            }
          }
        }
      };
    }
    async getRecentPerformanceSamples(e) {
      const t = await this._rpcRequest("getRecentPerformanceSamples", e ? [
        e
      ] : []), r = Y(t, Xm);
      if ("error" in r) throw new re(r.error, "failed to get recent performance samples");
      return r.result;
    }
    async getFeeCalculatorForBlockhash(e, t) {
      const r = this._buildArgs([
        e
      ], t), s = await this._rpcRequest("getFeeCalculatorForBlockhash", r), n = Y(s, Qm);
      if ("error" in n) throw new re(n.error, "failed to get fee calculator");
      const { context: a, value: l } = n.result;
      return {
        context: a,
        value: l !== null ? l.feeCalculator : null
      };
    }
    async getFeeForMessage(e, t) {
      const r = Qe(e.serialize()).toString("base64"), s = this._buildArgs([
        r
      ], t), n = await this._rpcRequest("getFeeForMessage", s), a = Y(n, Rt(j(T())));
      if ("error" in a) throw new re(a.error, "failed to get fee for message");
      if (a.result === null) throw new Error("invalid blockhash");
      return a.result;
    }
    async getRecentPrioritizationFees(e) {
      var _a2;
      const t = (_a2 = e == null ? void 0 : e.lockedWritableAccounts) == null ? void 0 : _a2.map((a) => a.toBase58()), r = (t == null ? void 0 : t.length) ? [
        t
      ] : [], s = await this._rpcRequest("getRecentPrioritizationFees", r), n = Y(s, um);
      if ("error" in n) throw new re(n.error, "failed to get recent prioritization fees");
      return n.result;
    }
    async getRecentBlockhash(e) {
      try {
        return (await this.getRecentBlockhashAndContext(e)).value;
      } catch (t) {
        throw new Error("failed to get recent blockhash: " + t);
      }
    }
    async getLatestBlockhash(e) {
      try {
        return (await this.getLatestBlockhashAndContext(e)).value;
      } catch (t) {
        throw new Error("failed to get recent blockhash: " + t);
      }
    }
    async getLatestBlockhashAndContext(e) {
      const { commitment: t, config: r } = gt(e), s = this._buildArgs([], t, void 0, r), n = await this._rpcRequest("getLatestBlockhash", s), a = Y(n, Ym);
      if ("error" in a) throw new re(a.error, "failed to get latest blockhash");
      return a.result;
    }
    async isBlockhashValid(e, t) {
      const { commitment: r, config: s } = gt(t), n = this._buildArgs([
        e
      ], r, void 0, s), a = await this._rpcRequest("isBlockhashValid", n), l = Y(a, Zm);
      if ("error" in l) throw new re(l.error, "failed to determine if the blockhash `" + e + "`is valid");
      return l.result;
    }
    async getVersion() {
      const e = await this._rpcRequest("getVersion", []), t = Y(e, Je(em));
      if ("error" in t) throw new re(t.error, "failed to get version");
      return t.result;
    }
    async getGenesisHash() {
      const e = await this._rpcRequest("getGenesisHash", []), t = Y(e, Je(H()));
      if ("error" in t) throw new re(t.error, "failed to get genesis hash");
      return t.result;
    }
    async getBlock(e, t) {
      const { commitment: r, config: s } = gt(t), n = this._buildArgsAtLeastConfirmed([
        e
      ], r, void 0, s), a = await this._rpcRequest("getBlock", n);
      try {
        switch (s == null ? void 0 : s.transactionDetails) {
          case "accounts": {
            const l = Y(a, Vm);
            if ("error" in l) throw l.error;
            return l.result;
          }
          case "none": {
            const l = Y(a, qm);
            if ("error" in l) throw l.error;
            return l.result;
          }
          default: {
            const l = Y(a, Dm);
            if ("error" in l) throw l.error;
            const { result: d } = l;
            return d ? {
              ...d,
              transactions: d.transactions.map(({ transaction: p, meta: k, version: A }) => ({
                meta: k,
                transaction: {
                  ...p,
                  message: ho(A, p.message)
                },
                version: A
              }))
            } : null;
          }
        }
      } catch (l) {
        throw new re(l, "failed to get confirmed block");
      }
    }
    async getParsedBlock(e, t) {
      const { commitment: r, config: s } = gt(t), n = this._buildArgsAtLeastConfirmed([
        e
      ], r, "jsonParsed", s), a = await this._rpcRequest("getBlock", n);
      try {
        switch (s == null ? void 0 : s.transactionDetails) {
          case "accounts": {
            const l = Y(a, Hm);
            if ("error" in l) throw l.error;
            return l.result;
          }
          case "none": {
            const l = Y(a, Gm);
            if ("error" in l) throw l.error;
            return l.result;
          }
          default: {
            const l = Y(a, Fm);
            if ("error" in l) throw l.error;
            return l.result;
          }
        }
      } catch (l) {
        throw new re(l, "failed to get block");
      }
    }
    async getBlockProduction(e) {
      let t, r;
      if (typeof e == "string") r = e;
      else if (e) {
        const { commitment: l, ...d } = e;
        r = l, t = d;
      }
      const s = this._buildArgs([], r, "base64", t), n = await this._rpcRequest("getBlockProduction", s), a = Y(n, nm);
      if ("error" in a) throw new re(a.error, "failed to get block production information");
      return a.result;
    }
    async getTransaction(e, t) {
      const { commitment: r, config: s } = gt(t), n = this._buildArgsAtLeastConfirmed([
        e
      ], r, void 0, s), a = await this._rpcRequest("getTransaction", n), l = Y(a, fo);
      if ("error" in l) throw new re(l.error, "failed to get transaction");
      const d = l.result;
      return d && {
        ...d,
        transaction: {
          ...d.transaction,
          message: ho(d.version, d.transaction.message)
        }
      };
    }
    async getParsedTransaction(e, t) {
      const { commitment: r, config: s } = gt(t), n = this._buildArgsAtLeastConfirmed([
        e
      ], r, "jsonParsed", s), a = await this._rpcRequest("getTransaction", n), l = Y(a, Ys);
      if ("error" in l) throw new re(l.error, "failed to get transaction");
      return l.result;
    }
    async getParsedTransactions(e, t) {
      const { commitment: r, config: s } = gt(t), n = e.map((d) => ({
        methodName: "getTransaction",
        args: this._buildArgsAtLeastConfirmed([
          d
        ], r, "jsonParsed", s)
      }));
      return (await this._rpcBatchRequest(n)).map((d) => {
        const p = Y(d, Ys);
        if ("error" in p) throw new re(p.error, "failed to get transactions");
        return p.result;
      });
    }
    async getTransactions(e, t) {
      const { commitment: r, config: s } = gt(t), n = e.map((d) => ({
        methodName: "getTransaction",
        args: this._buildArgsAtLeastConfirmed([
          d
        ], r, void 0, s)
      }));
      return (await this._rpcBatchRequest(n)).map((d) => {
        const p = Y(d, fo);
        if ("error" in p) throw new re(p.error, "failed to get transactions");
        const k = p.result;
        return k && {
          ...k,
          transaction: {
            ...k.transaction,
            message: ho(k.version, k.transaction.message)
          }
        };
      });
    }
    async getConfirmedBlock(e, t) {
      const r = this._buildArgsAtLeastConfirmed([
        e
      ], t), s = await this._rpcRequest("getBlock", r), n = Y(s, jm);
      if ("error" in n) throw new re(n.error, "failed to get confirmed block");
      const a = n.result;
      if (!a) throw new Error("Confirmed block " + e + " not found");
      const l = {
        ...a,
        transactions: a.transactions.map(({ transaction: d, meta: p }) => {
          const k = new tr(d.message);
          return {
            meta: p,
            transaction: {
              ...d,
              message: k
            }
          };
        })
      };
      return {
        ...l,
        transactions: l.transactions.map(({ transaction: d, meta: p }) => ({
          meta: p,
          transaction: at.populate(d.message, d.signatures)
        }))
      };
    }
    async getBlocks(e, t, r) {
      const s = this._buildArgsAtLeastConfirmed(t !== void 0 ? [
        e,
        t
      ] : [
        e
      ], r), n = await this._rpcRequest("getBlocks", s), a = Y(n, Je(X(T())));
      if ("error" in a) throw new re(a.error, "failed to get blocks");
      return a.result;
    }
    async getBlockSignatures(e, t) {
      const r = this._buildArgsAtLeastConfirmed([
        e
      ], t, void 0, {
        transactionDetails: "signatures",
        rewards: false
      }), s = await this._rpcRequest("getBlock", r), n = Y(s, Ic);
      if ("error" in n) throw new re(n.error, "failed to get block");
      const a = n.result;
      if (!a) throw new Error("Block " + e + " not found");
      return a;
    }
    async getConfirmedBlockSignatures(e, t) {
      const r = this._buildArgsAtLeastConfirmed([
        e
      ], t, void 0, {
        transactionDetails: "signatures",
        rewards: false
      }), s = await this._rpcRequest("getBlock", r), n = Y(s, Ic);
      if ("error" in n) throw new re(n.error, "failed to get confirmed block");
      const a = n.result;
      if (!a) throw new Error("Confirmed block " + e + " not found");
      return a;
    }
    async getConfirmedTransaction(e, t) {
      const r = this._buildArgsAtLeastConfirmed([
        e
      ], t), s = await this._rpcRequest("getTransaction", r), n = Y(s, fo);
      if ("error" in n) throw new re(n.error, "failed to get transaction");
      const a = n.result;
      if (!a) return a;
      const l = new tr(a.transaction.message), d = a.transaction.signatures;
      return {
        ...a,
        transaction: at.populate(l, d)
      };
    }
    async getParsedConfirmedTransaction(e, t) {
      const r = this._buildArgsAtLeastConfirmed([
        e
      ], t, "jsonParsed"), s = await this._rpcRequest("getTransaction", r), n = Y(s, Ys);
      if ("error" in n) throw new re(n.error, "failed to get confirmed transaction");
      return n.result;
    }
    async getParsedConfirmedTransactions(e, t) {
      const r = e.map((a) => ({
        methodName: "getTransaction",
        args: this._buildArgsAtLeastConfirmed([
          a
        ], t, "jsonParsed")
      }));
      return (await this._rpcBatchRequest(r)).map((a) => {
        const l = Y(a, Ys);
        if ("error" in l) throw new re(l.error, "failed to get confirmed transactions");
        return l.result;
      });
    }
    async getConfirmedSignaturesForAddress(e, t, r) {
      let s = {}, n = await this.getFirstAvailableBlock();
      for (; !("until" in s) && (t--, !(t <= 0 || t < n)); ) try {
        const d = await this.getConfirmedBlockSignatures(t, "finalized");
        d.signatures.length > 0 && (s.until = d.signatures[d.signatures.length - 1].toString());
      } catch (d) {
        if (d instanceof Error && d.message.includes("skipped")) continue;
        throw d;
      }
      let a = await this.getSlot("finalized");
      for (; !("before" in s) && (r++, !(r > a)); ) try {
        const d = await this.getConfirmedBlockSignatures(r);
        d.signatures.length > 0 && (s.before = d.signatures[d.signatures.length - 1].toString());
      } catch (d) {
        if (d instanceof Error && d.message.includes("skipped")) continue;
        throw d;
      }
      return (await this.getConfirmedSignaturesForAddress2(e, s)).map((d) => d.signature);
    }
    async getConfirmedSignaturesForAddress2(e, t, r) {
      const s = this._buildArgsAtLeastConfirmed([
        e.toBase58()
      ], r, void 0, t), n = await this._rpcRequest("getConfirmedSignaturesForAddress2", s), a = Y(n, _m);
      if ("error" in a) throw new re(a.error, "failed to get confirmed signatures for address");
      return a.result;
    }
    async getSignaturesForAddress(e, t, r) {
      const s = this._buildArgsAtLeastConfirmed([
        e.toBase58()
      ], r, void 0, t), n = await this._rpcRequest("getSignaturesForAddress", s), a = Y(n, Am);
      if ("error" in a) throw new re(a.error, "failed to get signatures for address");
      return a.result;
    }
    async getAddressLookupTable(e, t) {
      const { context: r, value: s } = await this.getAccountInfoAndContext(e, t);
      let n = null;
      return s !== null && (n = new Do({
        key: e,
        state: Do.deserialize(s.data)
      })), {
        context: r,
        value: n
      };
    }
    async getNonceAndContext(e, t) {
      const { context: r, value: s } = await this.getAccountInfoAndContext(e, t);
      let n = null;
      return s !== null && (n = Vi.fromAccountData(s.data)), {
        context: r,
        value: n
      };
    }
    async getNonce(e, t) {
      return await this.getNonceAndContext(e, t).then((r) => r.value).catch((r) => {
        throw new Error("failed to get nonce for account " + e.toBase58() + ": " + r);
      });
    }
    async requestAirdrop(e, t) {
      const r = await this._rpcRequest("requestAirdrop", [
        e.toBase58(),
        t
      ]), s = Y(r, e0);
      if ("error" in s) throw new re(s.error, `airdrop to ${e.toBase58()} failed`);
      return s.result;
    }
    async _blockhashWithExpiryBlockHeight(e) {
      if (!e) {
        for (; this._pollingBlockhash; ) await Xr(100);
        const r = Date.now() - this._blockhashInfo.lastFetch >= Gl;
        if (this._blockhashInfo.latestBlockhash !== null && !r) return this._blockhashInfo.latestBlockhash;
      }
      return await this._pollNewBlockhash();
    }
    async _pollNewBlockhash() {
      this._pollingBlockhash = true;
      try {
        const e = Date.now(), t = this._blockhashInfo.latestBlockhash, r = t ? t.blockhash : null;
        for (let s = 0; s < 50; s++) {
          const n = await this.getLatestBlockhash("finalized");
          if (r !== n.blockhash) return this._blockhashInfo = {
            latestBlockhash: n,
            lastFetch: Date.now(),
            transactionSignatures: [],
            simulatedSignatures: []
          }, n;
          await Xr(Dl / 2);
        }
        throw new Error(`Unable to obtain a new blockhash after ${Date.now() - e}ms`);
      } finally {
        this._pollingBlockhash = false;
      }
    }
    async getStakeMinimumDelegation(e) {
      const { commitment: t, config: r } = gt(e), s = this._buildArgs([], t, "base64", r), n = await this._rpcRequest("getStakeMinimumDelegation", s), a = Y(n, Rt(T()));
      if ("error" in a) throw new re(a.error, "failed to get stake minimum delegation");
      return a.result;
    }
    async simulateTransaction(e, t, r) {
      if ("message" in e) {
        const R = e.serialize(), M = B.from(R).toString("base64");
        if (Array.isArray(t) || r !== void 0) throw new Error("Invalid arguments");
        const x = t || {};
        x.encoding = "base64", "commitment" in x || (x.commitment = this.commitment), t && typeof t == "object" && "innerInstructions" in t && (x.innerInstructions = t.innerInstructions);
        const C = [
          M,
          x
        ], O = await this._rpcRequest("simulateTransaction", C), N = Y(O, _c);
        if ("error" in N) throw new Error("failed to simulate transaction: " + N.error.message);
        return N.result;
      }
      let s;
      if (e instanceof at) {
        let I = e;
        s = new at(), s.feePayer = I.feePayer, s.instructions = e.instructions, s.nonceInfo = I.nonceInfo, s.signatures = I.signatures;
      } else s = at.populate(e), s._message = s._json = void 0;
      if (t !== void 0 && !Array.isArray(t)) throw new Error("Invalid arguments");
      const n = t;
      if (s.nonceInfo && n) s.sign(...n);
      else {
        let I = this._disableBlockhashCaching;
        for (; ; ) {
          const R = await this._blockhashWithExpiryBlockHeight(I);
          if (s.lastValidBlockHeight = R.lastValidBlockHeight, s.recentBlockhash = R.blockhash, !n) break;
          if (s.sign(...n), !s.signature) throw new Error("!signature");
          const M = s.signature.toString("base64");
          if (!this._blockhashInfo.simulatedSignatures.includes(M) && !this._blockhashInfo.transactionSignatures.includes(M)) {
            this._blockhashInfo.simulatedSignatures.push(M);
            break;
          } else I = true;
        }
      }
      const a = s._compile(), l = a.serialize(), p = s._serialize(l).toString("base64"), k = {
        encoding: "base64",
        commitment: this.commitment
      };
      if (r) {
        const I = (Array.isArray(r) ? r : a.nonProgramIds()).map((R) => R.toBase58());
        k.accounts = {
          encoding: "base64",
          addresses: I
        };
      }
      n && (k.sigVerify = true), t && typeof t == "object" && "innerInstructions" in t && (k.innerInstructions = t.innerInstructions);
      const A = [
        p,
        k
      ], E = await this._rpcRequest("simulateTransaction", A), S = Y(E, _c);
      if ("error" in S) {
        let I;
        if ("data" in S.error && (I = S.error.data.logs, I && Array.isArray(I))) {
          const R = `
    `, M = R + I.join(R);
          console.error(S.error.message, M);
        }
        throw new Mr({
          action: "simulate",
          signature: "",
          transactionMessage: S.error.message,
          logs: I
        });
      }
      return S.result;
    }
    async sendTransaction(e, t, r) {
      if ("version" in e) {
        if (t && Array.isArray(t)) throw new Error("Invalid arguments");
        const a = e.serialize();
        return await this.sendRawTransaction(a, t);
      }
      if (t === void 0 || !Array.isArray(t)) throw new Error("Invalid arguments");
      const s = t;
      if (e.nonceInfo) e.sign(...s);
      else {
        let a = this._disableBlockhashCaching;
        for (; ; ) {
          const l = await this._blockhashWithExpiryBlockHeight(a);
          if (e.lastValidBlockHeight = l.lastValidBlockHeight, e.recentBlockhash = l.blockhash, e.sign(...s), !e.signature) throw new Error("!signature");
          const d = e.signature.toString("base64");
          if (this._blockhashInfo.transactionSignatures.includes(d)) a = true;
          else {
            this._blockhashInfo.transactionSignatures.push(d);
            break;
          }
        }
      }
      const n = e.serialize();
      return await this.sendRawTransaction(n, r);
    }
    async sendRawTransaction(e, t) {
      const r = Qe(e).toString("base64");
      return await this.sendEncodedTransaction(r, t);
    }
    async sendEncodedTransaction(e, t) {
      const r = {
        encoding: "base64"
      }, s = t && t.skipPreflight, n = s === true ? "processed" : t && t.preflightCommitment || this.commitment;
      t && t.maxRetries != null && (r.maxRetries = t.maxRetries), t && t.minContextSlot != null && (r.minContextSlot = t.minContextSlot), s && (r.skipPreflight = s), n && (r.preflightCommitment = n);
      const a = [
        e,
        r
      ], l = await this._rpcRequest("sendTransaction", a), d = Y(l, t0);
      if ("error" in d) {
        let p;
        throw "data" in d.error && (p = d.error.data.logs), new Mr({
          action: s ? "send" : "simulate",
          signature: "",
          transactionMessage: d.error.message,
          logs: p
        });
      }
      return d.result;
    }
    _wsOnOpen() {
      this._rpcWebSocketConnected = true, this._rpcWebSocketHeartbeat = setInterval(() => {
        (async () => {
          try {
            await this._rpcWebSocket.notify("ping");
          } catch {
          }
        })();
      }, 5e3), this._updateSubscriptions();
    }
    _wsOnError(e) {
      this._rpcWebSocketConnected = false, console.error("ws error:", e.message);
    }
    _wsOnClose(e) {
      if (this._rpcWebSocketConnected = false, this._rpcWebSocketGeneration = (this._rpcWebSocketGeneration + 1) % Number.MAX_SAFE_INTEGER, this._rpcWebSocketIdleTimeout && (clearTimeout(this._rpcWebSocketIdleTimeout), this._rpcWebSocketIdleTimeout = null), this._rpcWebSocketHeartbeat && (clearInterval(this._rpcWebSocketHeartbeat), this._rpcWebSocketHeartbeat = null), e === 1e3) {
        this._updateSubscriptions();
        return;
      }
      this._subscriptionCallbacksByServerSubscriptionId = {}, Object.entries(this._subscriptionsByHash).forEach(([t, r]) => {
        this._setSubscription(t, {
          ...r,
          state: "pending"
        });
      });
    }
    _setSubscription(e, t) {
      var _a2;
      const r = (_a2 = this._subscriptionsByHash[e]) == null ? void 0 : _a2.state;
      if (this._subscriptionsByHash[e] = t, r !== t.state) {
        const s = this._subscriptionStateChangeCallbacksByHash[e];
        s && s.forEach((n) => {
          try {
            n(t.state);
          } catch {
          }
        });
      }
    }
    _onSubscriptionStateChange(e, t) {
      var _a2;
      const r = this._subscriptionHashByClientSubscriptionId[e];
      if (r == null) return () => {
      };
      const s = (_a2 = this._subscriptionStateChangeCallbacksByHash)[r] || (_a2[r] = /* @__PURE__ */ new Set());
      return s.add(t), () => {
        s.delete(t), s.size === 0 && delete this._subscriptionStateChangeCallbacksByHash[r];
      };
    }
    async _updateSubscriptions() {
      if (Object.keys(this._subscriptionsByHash).length === 0) {
        this._rpcWebSocketConnected && (this._rpcWebSocketConnected = false, this._rpcWebSocketIdleTimeout = setTimeout(() => {
          this._rpcWebSocketIdleTimeout = null;
          try {
            this._rpcWebSocket.close();
          } catch (r) {
            r instanceof Error && console.log(`Error when closing socket connection: ${r.message}`);
          }
        }, 500));
        return;
      }
      if (this._rpcWebSocketIdleTimeout !== null && (clearTimeout(this._rpcWebSocketIdleTimeout), this._rpcWebSocketIdleTimeout = null, this._rpcWebSocketConnected = true), !this._rpcWebSocketConnected) {
        this._rpcWebSocket.connect();
        return;
      }
      const e = this._rpcWebSocketGeneration, t = () => e === this._rpcWebSocketGeneration;
      await Promise.all(Object.keys(this._subscriptionsByHash).map(async (r) => {
        const s = this._subscriptionsByHash[r];
        if (s !== void 0) switch (s.state) {
          case "pending":
          case "unsubscribed":
            if (s.callbacks.size === 0) {
              delete this._subscriptionsByHash[r], s.state === "unsubscribed" && delete this._subscriptionCallbacksByServerSubscriptionId[s.serverSubscriptionId], await this._updateSubscriptions();
              return;
            }
            await (async () => {
              const { args: n, method: a } = s;
              try {
                this._setSubscription(r, {
                  ...s,
                  state: "subscribing"
                });
                const l = await this._rpcWebSocket.call(a, n);
                this._setSubscription(r, {
                  ...s,
                  serverSubscriptionId: l,
                  state: "subscribed"
                }), this._subscriptionCallbacksByServerSubscriptionId[l] = s.callbacks, await this._updateSubscriptions();
              } catch (l) {
                if (console.error(`Received ${l instanceof Error ? "" : "JSON-RPC "}error calling \`${a}\``, {
                  args: n,
                  error: l
                }), !t()) return;
                this._setSubscription(r, {
                  ...s,
                  state: "pending"
                }), await this._updateSubscriptions();
              }
            })();
            break;
          case "subscribed":
            s.callbacks.size === 0 && await (async () => {
              const { serverSubscriptionId: n, unsubscribeMethod: a } = s;
              if (this._subscriptionsAutoDisposedByRpc.has(n)) this._subscriptionsAutoDisposedByRpc.delete(n);
              else {
                this._setSubscription(r, {
                  ...s,
                  state: "unsubscribing"
                }), this._setSubscription(r, {
                  ...s,
                  state: "unsubscribing"
                });
                try {
                  await this._rpcWebSocket.call(a, [
                    n
                  ]);
                } catch (l) {
                  if (l instanceof Error && console.error(`${a} error:`, l.message), !t()) return;
                  this._setSubscription(r, {
                    ...s,
                    state: "subscribed"
                  }), await this._updateSubscriptions();
                  return;
                }
              }
              this._setSubscription(r, {
                ...s,
                state: "unsubscribed"
              }), await this._updateSubscriptions();
            })();
            break;
        }
      }));
    }
    _handleServerNotification(e, t) {
      const r = this._subscriptionCallbacksByServerSubscriptionId[e];
      r !== void 0 && r.forEach((s) => {
        try {
          s(...t);
        } catch (n) {
          console.error(n);
        }
      });
    }
    _wsOnAccountNotification(e) {
      const { result: t, subscription: r } = Y(e, Im);
      this._handleServerNotification(r, [
        t.value,
        t.context
      ]);
    }
    _makeSubscription(e, t) {
      const r = this._nextClientSubscriptionId++, s = kc([
        e.method,
        t
      ]), n = this._subscriptionsByHash[s];
      return n === void 0 ? this._subscriptionsByHash[s] = {
        ...e,
        args: t,
        callbacks: /* @__PURE__ */ new Set([
          e.callback
        ]),
        state: "pending"
      } : n.callbacks.add(e.callback), this._subscriptionHashByClientSubscriptionId[r] = s, this._subscriptionDisposeFunctionsByClientSubscriptionId[r] = async () => {
        delete this._subscriptionDisposeFunctionsByClientSubscriptionId[r], delete this._subscriptionHashByClientSubscriptionId[r];
        const a = this._subscriptionsByHash[s];
        tt(a !== void 0, `Could not find a \`Subscription\` when tearing down client subscription #${r}`), a.callbacks.delete(e.callback), await this._updateSubscriptions();
      }, this._updateSubscriptions(), r;
    }
    onAccountChange(e, t, r) {
      const { commitment: s, config: n } = gt(r), a = this._buildArgs([
        e.toBase58()
      ], s || this._commitment || "finalized", "base64", n);
      return this._makeSubscription({
        callback: t,
        method: "accountSubscribe",
        unsubscribeMethod: "accountUnsubscribe"
      }, a);
    }
    async removeAccountChangeListener(e) {
      await this._unsubscribeClientSubscription(e, "account change");
    }
    _wsOnProgramAccountNotification(e) {
      const { result: t, subscription: r } = Y(e, Rm);
      this._handleServerNotification(r, [
        {
          accountId: t.value.pubkey,
          accountInfo: t.value.account
        },
        t.context
      ]);
    }
    onProgramAccountChange(e, t, r, s) {
      const { commitment: n, config: a } = gt(r), l = this._buildArgs([
        e.toBase58()
      ], n || this._commitment || "finalized", "base64", a || (s ? {
        filters: Sc(s)
      } : void 0));
      return this._makeSubscription({
        callback: t,
        method: "programSubscribe",
        unsubscribeMethod: "programUnsubscribe"
      }, l);
    }
    async removeProgramAccountChangeListener(e) {
      await this._unsubscribeClientSubscription(e, "program account change");
    }
    onLogs(e, t, r) {
      const s = this._buildArgs([
        typeof e == "object" ? {
          mentions: [
            e.toString()
          ]
        } : e
      ], r || this._commitment || "finalized");
      return this._makeSubscription({
        callback: t,
        method: "logsSubscribe",
        unsubscribeMethod: "logsUnsubscribe"
      }, s);
    }
    async removeOnLogsListener(e) {
      await this._unsubscribeClientSubscription(e, "logs");
    }
    _wsOnLogsNotification(e) {
      const { result: t, subscription: r } = Y(e, n0);
      this._handleServerNotification(r, [
        t.value,
        t.context
      ]);
    }
    _wsOnSlotNotification(e) {
      const { result: t, subscription: r } = Y(e, xm);
      this._handleServerNotification(r, [
        t
      ]);
    }
    onSlotChange(e) {
      return this._makeSubscription({
        callback: e,
        method: "slotSubscribe",
        unsubscribeMethod: "slotUnsubscribe"
      }, []);
    }
    async removeSlotChangeListener(e) {
      await this._unsubscribeClientSubscription(e, "slot change");
    }
    _wsOnSlotUpdatesNotification(e) {
      const { result: t, subscription: r } = Y(e, Tm);
      this._handleServerNotification(r, [
        t
      ]);
    }
    onSlotUpdate(e) {
      return this._makeSubscription({
        callback: e,
        method: "slotsUpdatesSubscribe",
        unsubscribeMethod: "slotsUpdatesUnsubscribe"
      }, []);
    }
    async removeSlotUpdateListener(e) {
      await this._unsubscribeClientSubscription(e, "slot update");
    }
    async _unsubscribeClientSubscription(e, t) {
      const r = this._subscriptionDisposeFunctionsByClientSubscriptionId[e];
      r ? await r() : console.warn(`Ignored unsubscribe request because an active subscription with id \`${e}\` for '${t}' events could not be found.`);
    }
    _buildArgs(e, t, r, s) {
      const n = t || this._commitment;
      if (n || r || s) {
        let a = {};
        r && (a.encoding = r), n && (a.commitment = n), s && (a = Object.assign(a, s)), e.push(a);
      }
      return e;
    }
    _buildArgsAtLeastConfirmed(e, t, r, s) {
      const n = t || this._commitment;
      if (n && ![
        "confirmed",
        "finalized"
      ].includes(n)) throw new Error("Using Connection with default commitment: `" + this._commitment + "`, but method requires at least `confirmed`");
      return this._buildArgs(e, t, r, s);
    }
    _wsOnSignatureNotification(e) {
      const { result: t, subscription: r } = Y(e, Lm);
      t.value !== "receivedSignature" && this._subscriptionsAutoDisposedByRpc.add(r), this._handleServerNotification(r, t.value === "receivedSignature" ? [
        {
          type: "received"
        },
        t.context
      ] : [
        {
          type: "status",
          result: t.value
        },
        t.context
      ]);
    }
    onSignature(e, t, r) {
      const s = this._buildArgs([
        e
      ], r || this._commitment || "finalized"), n = this._makeSubscription({
        callback: (a, l) => {
          if (a.type === "status") {
            t(a.result, l);
            try {
              this.removeSignatureListener(n);
            } catch {
            }
          }
        },
        method: "signatureSubscribe",
        unsubscribeMethod: "signatureUnsubscribe"
      }, s);
      return n;
    }
    onSignatureWithOptions(e, t, r) {
      const { commitment: s, ...n } = {
        ...r,
        commitment: r && r.commitment || this._commitment || "finalized"
      }, a = this._buildArgs([
        e
      ], s, void 0, n), l = this._makeSubscription({
        callback: (d, p) => {
          t(d, p);
          try {
            this.removeSignatureListener(l);
          } catch {
          }
        },
        method: "signatureSubscribe",
        unsubscribeMethod: "signatureUnsubscribe"
      }, a);
      return l;
    }
    async removeSignatureListener(e) {
      await this._unsubscribeClientSubscription(e, "signature result");
    }
    _wsOnRootNotification(e) {
      const { result: t, subscription: r } = Y(e, Cm);
      this._handleServerNotification(r, [
        t
      ]);
    }
    onRootChange(e) {
      return this._makeSubscription({
        callback: e,
        method: "rootSubscribe",
        unsubscribeMethod: "rootUnsubscribe"
      }, []);
    }
    async removeRootChangeListener(e) {
      await this._unsubscribeClientSubscription(e, "root change");
    }
  }
  class Rn {
    constructor(e) {
      this._keypair = void 0, this._keypair = e ?? pc();
    }
    static generate() {
      return new Rn(pc());
    }
    static fromSecretKey(e, t) {
      if (e.byteLength !== 64) throw new Error("bad secret key size");
      const r = e.slice(32, 64);
      if (!t || !t.skipValidation) {
        const s = e.slice(0, 32), n = Si(s);
        for (let a = 0; a < 32; a++) if (r[a] !== n[a]) throw new Error("provided secretKey is invalid");
      }
      return new Rn({
        publicKey: r,
        secretKey: e
      });
    }
    static fromSeed(e) {
      const t = Si(e), r = new Uint8Array(64);
      return r.set(e), r.set(t, 32), new Rn({
        publicKey: t,
        secretKey: r
      });
    }
    get publicKey() {
      return new $(this._keypair.publicKey);
    }
    get secretKey() {
      return new Uint8Array(this._keypair.secretKey);
    }
  }
  const wr = Object.freeze({
    CreateLookupTable: {
      index: 0,
      layout: m.struct([
        m.u32("instruction"),
        Nn("recentSlot"),
        m.u8("bumpSeed")
      ])
    },
    FreezeLookupTable: {
      index: 1,
      layout: m.struct([
        m.u32("instruction")
      ])
    },
    ExtendLookupTable: {
      index: 2,
      layout: m.struct([
        m.u32("instruction"),
        Nn(),
        m.seq(nt(), m.offset(m.u32(), -8), "addresses")
      ])
    },
    DeactivateLookupTable: {
      index: 3,
      layout: m.struct([
        m.u32("instruction")
      ])
    },
    CloseLookupTable: {
      index: 4,
      layout: m.struct([
        m.u32("instruction")
      ])
    }
  });
  class o0 {
    constructor() {
    }
    static decodeInstructionType(e) {
      this.checkProgramId(e.programId);
      const r = m.u32("instruction").decode(e.data);
      let s;
      for (const [n, a] of Object.entries(wr)) if (a.index == r) {
        s = n;
        break;
      }
      if (!s) throw new Error("Invalid Instruction. Should be a LookupTable Instruction");
      return s;
    }
    static decodeCreateLookupTable(e) {
      this.checkProgramId(e.programId), this.checkKeysLength(e.keys, 4);
      const { recentSlot: t } = lt(wr.CreateLookupTable, e.data);
      return {
        authority: e.keys[1].pubkey,
        payer: e.keys[2].pubkey,
        recentSlot: Number(t)
      };
    }
    static decodeExtendLookupTable(e) {
      if (this.checkProgramId(e.programId), e.keys.length < 2) throw new Error(`invalid instruction; found ${e.keys.length} keys, expected at least 2`);
      const { addresses: t } = lt(wr.ExtendLookupTable, e.data);
      return {
        lookupTable: e.keys[0].pubkey,
        authority: e.keys[1].pubkey,
        payer: e.keys.length > 2 ? e.keys[2].pubkey : void 0,
        addresses: t.map((r) => new $(r))
      };
    }
    static decodeCloseLookupTable(e) {
      return this.checkProgramId(e.programId), this.checkKeysLength(e.keys, 3), {
        lookupTable: e.keys[0].pubkey,
        authority: e.keys[1].pubkey,
        recipient: e.keys[2].pubkey
      };
    }
    static decodeFreezeLookupTable(e) {
      return this.checkProgramId(e.programId), this.checkKeysLength(e.keys, 2), {
        lookupTable: e.keys[0].pubkey,
        authority: e.keys[1].pubkey
      };
    }
    static decodeDeactivateLookupTable(e) {
      return this.checkProgramId(e.programId), this.checkKeysLength(e.keys, 2), {
        lookupTable: e.keys[0].pubkey,
        authority: e.keys[1].pubkey
      };
    }
    static checkProgramId(e) {
      if (!e.equals(xa.programId)) throw new Error("invalid instruction; programId is not AddressLookupTable Program");
    }
    static checkKeysLength(e, t) {
      if (e.length < t) throw new Error(`invalid instruction; found ${e.length} keys, expected at least ${t}`);
    }
  }
  class xa {
    constructor() {
    }
    static createLookupTable(e) {
      const [t, r] = $.findProgramAddressSync([
        e.authority.toBuffer(),
        Cl().encode(e.recentSlot)
      ], this.programId), s = wr.CreateLookupTable, n = it(s, {
        recentSlot: BigInt(e.recentSlot),
        bumpSeed: r
      }), a = [
        {
          pubkey: t,
          isSigner: false,
          isWritable: true
        },
        {
          pubkey: e.authority,
          isSigner: true,
          isWritable: false
        },
        {
          pubkey: e.payer,
          isSigner: true,
          isWritable: true
        },
        {
          pubkey: Lt.programId,
          isSigner: false,
          isWritable: false
        }
      ];
      return [
        new dt({
          programId: this.programId,
          keys: a,
          data: n
        }),
        t
      ];
    }
    static freezeLookupTable(e) {
      const t = wr.FreezeLookupTable, r = it(t), s = [
        {
          pubkey: e.lookupTable,
          isSigner: false,
          isWritable: true
        },
        {
          pubkey: e.authority,
          isSigner: true,
          isWritable: false
        }
      ];
      return new dt({
        programId: this.programId,
        keys: s,
        data: r
      });
    }
    static extendLookupTable(e) {
      const t = wr.ExtendLookupTable, r = it(t, {
        addresses: e.addresses.map((n) => n.toBytes())
      }), s = [
        {
          pubkey: e.lookupTable,
          isSigner: false,
          isWritable: true
        },
        {
          pubkey: e.authority,
          isSigner: true,
          isWritable: false
        }
      ];
      return e.payer && s.push({
        pubkey: e.payer,
        isSigner: true,
        isWritable: true
      }, {
        pubkey: Lt.programId,
        isSigner: false,
        isWritable: false
      }), new dt({
        programId: this.programId,
        keys: s,
        data: r
      });
    }
    static deactivateLookupTable(e) {
      const t = wr.DeactivateLookupTable, r = it(t), s = [
        {
          pubkey: e.lookupTable,
          isSigner: false,
          isWritable: true
        },
        {
          pubkey: e.authority,
          isSigner: true,
          isWritable: false
        }
      ];
      return new dt({
        programId: this.programId,
        keys: s,
        data: r
      });
    }
    static closeLookupTable(e) {
      const t = wr.CloseLookupTable, r = it(t), s = [
        {
          pubkey: e.lookupTable,
          isSigner: false,
          isWritable: true
        },
        {
          pubkey: e.authority,
          isSigner: true,
          isWritable: false
        },
        {
          pubkey: e.recipient,
          isSigner: false,
          isWritable: true
        }
      ];
      return new dt({
        programId: this.programId,
        keys: s,
        data: r
      });
    }
  }
  xa.programId = new $("AddressLookupTab1e1111111111111111111111111");
  class a0 {
    constructor() {
    }
    static decodeInstructionType(e) {
      this.checkProgramId(e.programId);
      const r = m.u8("instruction").decode(e.data);
      let s;
      for (const [n, a] of Object.entries(ar)) if (a.index == r) {
        s = n;
        break;
      }
      if (!s) throw new Error("Instruction type incorrect; not a ComputeBudgetInstruction");
      return s;
    }
    static decodeRequestUnits(e) {
      this.checkProgramId(e.programId);
      const { units: t, additionalFee: r } = lt(ar.RequestUnits, e.data);
      return {
        units: t,
        additionalFee: r
      };
    }
    static decodeRequestHeapFrame(e) {
      this.checkProgramId(e.programId);
      const { bytes: t } = lt(ar.RequestHeapFrame, e.data);
      return {
        bytes: t
      };
    }
    static decodeSetComputeUnitLimit(e) {
      this.checkProgramId(e.programId);
      const { units: t } = lt(ar.SetComputeUnitLimit, e.data);
      return {
        units: t
      };
    }
    static decodeSetComputeUnitPrice(e) {
      this.checkProgramId(e.programId);
      const { microLamports: t } = lt(ar.SetComputeUnitPrice, e.data);
      return {
        microLamports: t
      };
    }
    static checkProgramId(e) {
      if (!e.equals(Pa.programId)) throw new Error("invalid instruction; programId is not ComputeBudgetProgram");
    }
  }
  const ar = Object.freeze({
    RequestUnits: {
      index: 0,
      layout: m.struct([
        m.u8("instruction"),
        m.u32("units"),
        m.u32("additionalFee")
      ])
    },
    RequestHeapFrame: {
      index: 1,
      layout: m.struct([
        m.u8("instruction"),
        m.u32("bytes")
      ])
    },
    SetComputeUnitLimit: {
      index: 2,
      layout: m.struct([
        m.u8("instruction"),
        m.u32("units")
      ])
    },
    SetComputeUnitPrice: {
      index: 3,
      layout: m.struct([
        m.u8("instruction"),
        Nn("microLamports")
      ])
    }
  });
  class Pa {
    constructor() {
    }
    static requestUnits(e) {
      const t = ar.RequestUnits, r = it(t, e);
      return new dt({
        keys: [],
        programId: this.programId,
        data: r
      });
    }
    static requestHeapFrame(e) {
      const t = ar.RequestHeapFrame, r = it(t, e);
      return new dt({
        keys: [],
        programId: this.programId,
        data: r
      });
    }
    static setComputeUnitLimit(e) {
      const t = ar.SetComputeUnitLimit, r = it(t, e);
      return new dt({
        keys: [],
        programId: this.programId,
        data: r
      });
    }
    static setComputeUnitPrice(e) {
      const t = ar.SetComputeUnitPrice, r = it(t, {
        microLamports: BigInt(e.microLamports)
      });
      return new dt({
        keys: [],
        programId: this.programId,
        data: r
      });
    }
  }
  Pa.programId = new $("ComputeBudget111111111111111111111111111111");
  const Ec = 64, Rc = 32, Mc = 64, xc = m.struct([
    m.u8("numSignatures"),
    m.u8("padding"),
    m.u16("signatureOffset"),
    m.u16("signatureInstructionIndex"),
    m.u16("publicKeyOffset"),
    m.u16("publicKeyInstructionIndex"),
    m.u16("messageDataOffset"),
    m.u16("messageDataSize"),
    m.u16("messageInstructionIndex")
  ]);
  class Gi {
    constructor() {
    }
    static createInstructionWithPublicKey(e) {
      const { publicKey: t, message: r, signature: s, instructionIndex: n } = e;
      tt(t.length === Rc, `Public Key must be ${Rc} bytes but received ${t.length} bytes`), tt(s.length === Mc, `Signature must be ${Mc} bytes but received ${s.length} bytes`);
      const a = xc.span, l = a + t.length, d = l + s.length, p = 1, k = B.alloc(d + r.length), A = n ?? 65535;
      return xc.encode({
        numSignatures: p,
        padding: 0,
        signatureOffset: l,
        signatureInstructionIndex: A,
        publicKeyOffset: a,
        publicKeyInstructionIndex: A,
        messageDataOffset: d,
        messageDataSize: r.length,
        messageInstructionIndex: A
      }, k), k.fill(t, a), k.fill(s, l), k.fill(r, d), new dt({
        keys: [],
        programId: Gi.programId,
        data: k
      });
    }
    static createInstructionWithPrivateKey(e) {
      const { privateKey: t, message: r, instructionIndex: s } = e;
      tt(t.length === Ec, `Private key must be ${Ec} bytes but received ${t.length} bytes`);
      try {
        const n = Rn.fromSecretKey(t), a = n.publicKey.toBytes(), l = va(r, n.secretKey);
        return this.createInstructionWithPublicKey({
          publicKey: a,
          message: r,
          signature: l,
          instructionIndex: s
        });
      } catch (n) {
        throw new Error(`Error creating instruction; ${n}`);
      }
    }
  }
  Gi.programId = new $("Ed25519SigVerify111111111111111111111111111");
  const c0 = (o, e) => {
    const t = $n.sign(o, e);
    return [
      t.toCompactRawBytes(),
      t.recovery
    ];
  };
  $n.utils.isValidPrivateKey;
  const u0 = $n.getPublicKey, Pc = 32, go = 20, Tc = 64, l0 = 11, po = m.struct([
    m.u8("numSignatures"),
    m.u16("signatureOffset"),
    m.u8("signatureInstructionIndex"),
    m.u16("ethAddressOffset"),
    m.u8("ethAddressInstructionIndex"),
    m.u16("messageDataOffset"),
    m.u16("messageDataSize"),
    m.u8("messageInstructionIndex"),
    m.blob(20, "ethAddress"),
    m.blob(64, "signature"),
    m.u8("recoveryId")
  ]);
  class Mn {
    constructor() {
    }
    static publicKeyToEthAddress(e) {
      tt(e.length === Tc, `Public key must be ${Tc} bytes but received ${e.length} bytes`);
      try {
        return B.from(gi(Qe(e))).slice(-go);
      } catch (t) {
        throw new Error(`Error constructing Ethereum address: ${t}`);
      }
    }
    static createInstructionWithPublicKey(e) {
      const { publicKey: t, message: r, signature: s, recoveryId: n, instructionIndex: a } = e;
      return Mn.createInstructionWithEthAddress({
        ethAddress: Mn.publicKeyToEthAddress(t),
        message: r,
        signature: s,
        recoveryId: n,
        instructionIndex: a
      });
    }
    static createInstructionWithEthAddress(e) {
      const { ethAddress: t, message: r, signature: s, recoveryId: n, instructionIndex: a = 0 } = e;
      let l;
      typeof t == "string" ? t.startsWith("0x") ? l = B.from(t.substr(2), "hex") : l = B.from(t, "hex") : l = t, tt(l.length === go, `Address must be ${go} bytes but received ${l.length} bytes`);
      const d = 1 + l0, p = d, k = d + l.length, A = k + s.length + 1, E = 1, S = B.alloc(po.span + r.length);
      return po.encode({
        numSignatures: E,
        signatureOffset: k,
        signatureInstructionIndex: a,
        ethAddressOffset: p,
        ethAddressInstructionIndex: a,
        messageDataOffset: A,
        messageDataSize: r.length,
        messageInstructionIndex: a,
        signature: Qe(s),
        ethAddress: Qe(l),
        recoveryId: n
      }, S), S.fill(Qe(r), po.span), new dt({
        keys: [],
        programId: Mn.programId,
        data: S
      });
    }
    static createInstructionWithPrivateKey(e) {
      const { privateKey: t, message: r, instructionIndex: s } = e;
      tt(t.length === Pc, `Private key must be ${Pc} bytes but received ${t.length} bytes`);
      try {
        const n = Qe(t), a = u0(n, false).slice(1), l = B.from(gi(Qe(r))), [d, p] = c0(l, n);
        return this.createInstructionWithPublicKey({
          publicKey: a,
          message: r,
          signature: d,
          recoveryId: p,
          instructionIndex: s
        });
      } catch (n) {
        throw new Error(`Error creating instruction; ${n}`);
      }
    }
  }
  Mn.programId = new $("KeccakSecp256k11111111111111111111111111111");
  var sh;
  const ih = new $("StakeConfig11111111111111111111111111111111");
  class oh {
    constructor(e, t) {
      this.staker = void 0, this.withdrawer = void 0, this.staker = e, this.withdrawer = t;
    }
  }
  class Us {
    constructor(e, t, r) {
      this.unixTimestamp = void 0, this.epoch = void 0, this.custodian = void 0, this.unixTimestamp = e, this.epoch = t, this.custodian = r;
    }
  }
  sh = Us;
  Us.default = new sh(0, 0, $.default);
  class h0 {
    constructor() {
    }
    static decodeInstructionType(e) {
      this.checkProgramId(e.programId);
      const r = m.u32("instruction").decode(e.data);
      let s;
      for (const [n, a] of Object.entries(Nt)) if (a.index == r) {
        s = n;
        break;
      }
      if (!s) throw new Error("Instruction type incorrect; not a StakeInstruction");
      return s;
    }
    static decodeInitialize(e) {
      this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2);
      const { authorized: t, lockup: r } = lt(Nt.Initialize, e.data);
      return {
        stakePubkey: e.keys[0].pubkey,
        authorized: new oh(new $(t.staker), new $(t.withdrawer)),
        lockup: new Us(r.unixTimestamp, r.epoch, new $(r.custodian))
      };
    }
    static decodeDelegate(e) {
      return this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 6), lt(Nt.Delegate, e.data), {
        stakePubkey: e.keys[0].pubkey,
        votePubkey: e.keys[1].pubkey,
        authorizedPubkey: e.keys[5].pubkey
      };
    }
    static decodeAuthorize(e) {
      this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
      const { newAuthorized: t, stakeAuthorizationType: r } = lt(Nt.Authorize, e.data), s = {
        stakePubkey: e.keys[0].pubkey,
        authorizedPubkey: e.keys[2].pubkey,
        newAuthorizedPubkey: new $(t),
        stakeAuthorizationType: {
          index: r
        }
      };
      return e.keys.length > 3 && (s.custodianPubkey = e.keys[3].pubkey), s;
    }
    static decodeAuthorizeWithSeed(e) {
      this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2);
      const { newAuthorized: t, stakeAuthorizationType: r, authoritySeed: s, authorityOwner: n } = lt(Nt.AuthorizeWithSeed, e.data), a = {
        stakePubkey: e.keys[0].pubkey,
        authorityBase: e.keys[1].pubkey,
        authoritySeed: s,
        authorityOwner: new $(n),
        newAuthorizedPubkey: new $(t),
        stakeAuthorizationType: {
          index: r
        }
      };
      return e.keys.length > 3 && (a.custodianPubkey = e.keys[3].pubkey), a;
    }
    static decodeSplit(e) {
      this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
      const { lamports: t } = lt(Nt.Split, e.data);
      return {
        stakePubkey: e.keys[0].pubkey,
        splitStakePubkey: e.keys[1].pubkey,
        authorizedPubkey: e.keys[2].pubkey,
        lamports: t
      };
    }
    static decodeMerge(e) {
      return this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3), lt(Nt.Merge, e.data), {
        stakePubkey: e.keys[0].pubkey,
        sourceStakePubKey: e.keys[1].pubkey,
        authorizedPubkey: e.keys[4].pubkey
      };
    }
    static decodeWithdraw(e) {
      this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 5);
      const { lamports: t } = lt(Nt.Withdraw, e.data), r = {
        stakePubkey: e.keys[0].pubkey,
        toPubkey: e.keys[1].pubkey,
        authorizedPubkey: e.keys[4].pubkey,
        lamports: t
      };
      return e.keys.length > 5 && (r.custodianPubkey = e.keys[5].pubkey), r;
    }
    static decodeDeactivate(e) {
      return this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3), lt(Nt.Deactivate, e.data), {
        stakePubkey: e.keys[0].pubkey,
        authorizedPubkey: e.keys[2].pubkey
      };
    }
    static checkProgramId(e) {
      if (!e.equals(ji.programId)) throw new Error("invalid instruction; programId is not StakeProgram");
    }
    static checkKeyLength(e, t) {
      if (e.length < t) throw new Error(`invalid instruction; found ${e.length} keys, expected at least ${t}`);
    }
  }
  const Nt = Object.freeze({
    Initialize: {
      index: 0,
      layout: m.struct([
        m.u32("instruction"),
        hy(),
        dy()
      ])
    },
    Authorize: {
      index: 1,
      layout: m.struct([
        m.u32("instruction"),
        nt("newAuthorized"),
        m.u32("stakeAuthorizationType")
      ])
    },
    Delegate: {
      index: 2,
      layout: m.struct([
        m.u32("instruction")
      ])
    },
    Split: {
      index: 3,
      layout: m.struct([
        m.u32("instruction"),
        m.ns64("lamports")
      ])
    },
    Withdraw: {
      index: 4,
      layout: m.struct([
        m.u32("instruction"),
        m.ns64("lamports")
      ])
    },
    Deactivate: {
      index: 5,
      layout: m.struct([
        m.u32("instruction")
      ])
    },
    Merge: {
      index: 7,
      layout: m.struct([
        m.u32("instruction")
      ])
    },
    AuthorizeWithSeed: {
      index: 8,
      layout: m.struct([
        m.u32("instruction"),
        nt("newAuthorized"),
        m.u32("stakeAuthorizationType"),
        en("authoritySeed"),
        nt("authorityOwner")
      ])
    }
  }), d0 = Object.freeze({
    Staker: {
      index: 0
    },
    Withdrawer: {
      index: 1
    }
  });
  class ji {
    constructor() {
    }
    static initialize(e) {
      const { stakePubkey: t, authorized: r, lockup: s } = e, n = s || Us.default, a = Nt.Initialize, l = it(a, {
        authorized: {
          staker: Qe(r.staker.toBuffer()),
          withdrawer: Qe(r.withdrawer.toBuffer())
        },
        lockup: {
          unixTimestamp: n.unixTimestamp,
          epoch: n.epoch,
          custodian: Qe(n.custodian.toBuffer())
        }
      }), d = {
        keys: [
          {
            pubkey: t,
            isSigner: false,
            isWritable: true
          },
          {
            pubkey: an,
            isSigner: false,
            isWritable: false
          }
        ],
        programId: this.programId,
        data: l
      };
      return new dt(d);
    }
    static createAccountWithSeed(e) {
      const t = new at();
      t.add(Lt.createAccountWithSeed({
        fromPubkey: e.fromPubkey,
        newAccountPubkey: e.stakePubkey,
        basePubkey: e.basePubkey,
        seed: e.seed,
        lamports: e.lamports,
        space: this.space,
        programId: this.programId
      }));
      const { stakePubkey: r, authorized: s, lockup: n } = e;
      return t.add(this.initialize({
        stakePubkey: r,
        authorized: s,
        lockup: n
      }));
    }
    static createAccount(e) {
      const t = new at();
      t.add(Lt.createAccount({
        fromPubkey: e.fromPubkey,
        newAccountPubkey: e.stakePubkey,
        lamports: e.lamports,
        space: this.space,
        programId: this.programId
      }));
      const { stakePubkey: r, authorized: s, lockup: n } = e;
      return t.add(this.initialize({
        stakePubkey: r,
        authorized: s,
        lockup: n
      }));
    }
    static delegate(e) {
      const { stakePubkey: t, authorizedPubkey: r, votePubkey: s } = e, n = Nt.Delegate, a = it(n);
      return new at().add({
        keys: [
          {
            pubkey: t,
            isSigner: false,
            isWritable: true
          },
          {
            pubkey: s,
            isSigner: false,
            isWritable: false
          },
          {
            pubkey: Qt,
            isSigner: false,
            isWritable: false
          },
          {
            pubkey: hi,
            isSigner: false,
            isWritable: false
          },
          {
            pubkey: ih,
            isSigner: false,
            isWritable: false
          },
          {
            pubkey: r,
            isSigner: true,
            isWritable: false
          }
        ],
        programId: this.programId,
        data: a
      });
    }
    static authorize(e) {
      const { stakePubkey: t, authorizedPubkey: r, newAuthorizedPubkey: s, stakeAuthorizationType: n, custodianPubkey: a } = e, l = Nt.Authorize, d = it(l, {
        newAuthorized: Qe(s.toBuffer()),
        stakeAuthorizationType: n.index
      }), p = [
        {
          pubkey: t,
          isSigner: false,
          isWritable: true
        },
        {
          pubkey: Qt,
          isSigner: false,
          isWritable: true
        },
        {
          pubkey: r,
          isSigner: true,
          isWritable: false
        }
      ];
      return a && p.push({
        pubkey: a,
        isSigner: true,
        isWritable: false
      }), new at().add({
        keys: p,
        programId: this.programId,
        data: d
      });
    }
    static authorizeWithSeed(e) {
      const { stakePubkey: t, authorityBase: r, authoritySeed: s, authorityOwner: n, newAuthorizedPubkey: a, stakeAuthorizationType: l, custodianPubkey: d } = e, p = Nt.AuthorizeWithSeed, k = it(p, {
        newAuthorized: Qe(a.toBuffer()),
        stakeAuthorizationType: l.index,
        authoritySeed: s,
        authorityOwner: Qe(n.toBuffer())
      }), A = [
        {
          pubkey: t,
          isSigner: false,
          isWritable: true
        },
        {
          pubkey: r,
          isSigner: true,
          isWritable: false
        },
        {
          pubkey: Qt,
          isSigner: false,
          isWritable: false
        }
      ];
      return d && A.push({
        pubkey: d,
        isSigner: true,
        isWritable: false
      }), new at().add({
        keys: A,
        programId: this.programId,
        data: k
      });
    }
    static splitInstruction(e) {
      const { stakePubkey: t, authorizedPubkey: r, splitStakePubkey: s, lamports: n } = e, a = Nt.Split, l = it(a, {
        lamports: n
      });
      return new dt({
        keys: [
          {
            pubkey: t,
            isSigner: false,
            isWritable: true
          },
          {
            pubkey: s,
            isSigner: false,
            isWritable: true
          },
          {
            pubkey: r,
            isSigner: true,
            isWritable: false
          }
        ],
        programId: this.programId,
        data: l
      });
    }
    static split(e, t) {
      const r = new at();
      return r.add(Lt.createAccount({
        fromPubkey: e.authorizedPubkey,
        newAccountPubkey: e.splitStakePubkey,
        lamports: t,
        space: this.space,
        programId: this.programId
      })), r.add(this.splitInstruction(e));
    }
    static splitWithSeed(e, t) {
      const { stakePubkey: r, authorizedPubkey: s, splitStakePubkey: n, basePubkey: a, seed: l, lamports: d } = e, p = new at();
      return p.add(Lt.allocate({
        accountPubkey: n,
        basePubkey: a,
        seed: l,
        space: this.space,
        programId: this.programId
      })), t && t > 0 && p.add(Lt.transfer({
        fromPubkey: e.authorizedPubkey,
        toPubkey: n,
        lamports: t
      })), p.add(this.splitInstruction({
        stakePubkey: r,
        authorizedPubkey: s,
        splitStakePubkey: n,
        lamports: d
      }));
    }
    static merge(e) {
      const { stakePubkey: t, sourceStakePubKey: r, authorizedPubkey: s } = e, n = Nt.Merge, a = it(n);
      return new at().add({
        keys: [
          {
            pubkey: t,
            isSigner: false,
            isWritable: true
          },
          {
            pubkey: r,
            isSigner: false,
            isWritable: true
          },
          {
            pubkey: Qt,
            isSigner: false,
            isWritable: false
          },
          {
            pubkey: hi,
            isSigner: false,
            isWritable: false
          },
          {
            pubkey: s,
            isSigner: true,
            isWritable: false
          }
        ],
        programId: this.programId,
        data: a
      });
    }
    static withdraw(e) {
      const { stakePubkey: t, authorizedPubkey: r, toPubkey: s, lamports: n, custodianPubkey: a } = e, l = Nt.Withdraw, d = it(l, {
        lamports: n
      }), p = [
        {
          pubkey: t,
          isSigner: false,
          isWritable: true
        },
        {
          pubkey: s,
          isSigner: false,
          isWritable: true
        },
        {
          pubkey: Qt,
          isSigner: false,
          isWritable: false
        },
        {
          pubkey: hi,
          isSigner: false,
          isWritable: false
        },
        {
          pubkey: r,
          isSigner: true,
          isWritable: false
        }
      ];
      return a && p.push({
        pubkey: a,
        isSigner: true,
        isWritable: false
      }), new at().add({
        keys: p,
        programId: this.programId,
        data: d
      });
    }
    static deactivate(e) {
      const { stakePubkey: t, authorizedPubkey: r } = e, s = Nt.Deactivate, n = it(s);
      return new at().add({
        keys: [
          {
            pubkey: t,
            isSigner: false,
            isWritable: true
          },
          {
            pubkey: Qt,
            isSigner: false,
            isWritable: false
          },
          {
            pubkey: r,
            isSigner: true,
            isWritable: false
          }
        ],
        programId: this.programId,
        data: n
      });
    }
  }
  ji.programId = new $("Stake11111111111111111111111111111111111111");
  ji.space = 200;
  class ah {
    constructor(e, t, r, s) {
      this.nodePubkey = void 0, this.authorizedVoter = void 0, this.authorizedWithdrawer = void 0, this.commission = void 0, this.nodePubkey = e, this.authorizedVoter = t, this.authorizedWithdrawer = r, this.commission = s;
    }
  }
  class f0 {
    constructor() {
    }
    static decodeInstructionType(e) {
      this.checkProgramId(e.programId);
      const r = m.u32("instruction").decode(e.data);
      let s;
      for (const [n, a] of Object.entries(cr)) if (a.index == r) {
        s = n;
        break;
      }
      if (!s) throw new Error("Instruction type incorrect; not a VoteInstruction");
      return s;
    }
    static decodeInitializeAccount(e) {
      this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 4);
      const { voteInit: t } = lt(cr.InitializeAccount, e.data);
      return {
        votePubkey: e.keys[0].pubkey,
        nodePubkey: e.keys[3].pubkey,
        voteInit: new ah(new $(t.nodePubkey), new $(t.authorizedVoter), new $(t.authorizedWithdrawer), t.commission)
      };
    }
    static decodeAuthorize(e) {
      this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
      const { newAuthorized: t, voteAuthorizationType: r } = lt(cr.Authorize, e.data);
      return {
        votePubkey: e.keys[0].pubkey,
        authorizedPubkey: e.keys[2].pubkey,
        newAuthorizedPubkey: new $(t),
        voteAuthorizationType: {
          index: r
        }
      };
    }
    static decodeAuthorizeWithSeed(e) {
      this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
      const { voteAuthorizeWithSeedArgs: { currentAuthorityDerivedKeyOwnerPubkey: t, currentAuthorityDerivedKeySeed: r, newAuthorized: s, voteAuthorizationType: n } } = lt(cr.AuthorizeWithSeed, e.data);
      return {
        currentAuthorityDerivedKeyBasePubkey: e.keys[2].pubkey,
        currentAuthorityDerivedKeyOwnerPubkey: new $(t),
        currentAuthorityDerivedKeySeed: r,
        newAuthorizedPubkey: new $(s),
        voteAuthorizationType: {
          index: n
        },
        votePubkey: e.keys[0].pubkey
      };
    }
    static decodeWithdraw(e) {
      this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
      const { lamports: t } = lt(cr.Withdraw, e.data);
      return {
        votePubkey: e.keys[0].pubkey,
        authorizedWithdrawerPubkey: e.keys[2].pubkey,
        lamports: t,
        toPubkey: e.keys[1].pubkey
      };
    }
    static checkProgramId(e) {
      if (!e.equals(Gn.programId)) throw new Error("invalid instruction; programId is not VoteProgram");
    }
    static checkKeyLength(e, t) {
      if (e.length < t) throw new Error(`invalid instruction; found ${e.length} keys, expected at least ${t}`);
    }
  }
  const cr = Object.freeze({
    InitializeAccount: {
      index: 0,
      layout: m.struct([
        m.u32("instruction"),
        fy()
      ])
    },
    Authorize: {
      index: 1,
      layout: m.struct([
        m.u32("instruction"),
        nt("newAuthorized"),
        m.u32("voteAuthorizationType")
      ])
    },
    Withdraw: {
      index: 3,
      layout: m.struct([
        m.u32("instruction"),
        m.ns64("lamports")
      ])
    },
    UpdateValidatorIdentity: {
      index: 4,
      layout: m.struct([
        m.u32("instruction")
      ])
    },
    AuthorizeWithSeed: {
      index: 10,
      layout: m.struct([
        m.u32("instruction"),
        gy()
      ])
    }
  }), g0 = Object.freeze({
    Voter: {
      index: 0
    },
    Withdrawer: {
      index: 1
    }
  });
  class Gn {
    constructor() {
    }
    static initializeAccount(e) {
      const { votePubkey: t, nodePubkey: r, voteInit: s } = e, n = cr.InitializeAccount, a = it(n, {
        voteInit: {
          nodePubkey: Qe(s.nodePubkey.toBuffer()),
          authorizedVoter: Qe(s.authorizedVoter.toBuffer()),
          authorizedWithdrawer: Qe(s.authorizedWithdrawer.toBuffer()),
          commission: s.commission
        }
      }), l = {
        keys: [
          {
            pubkey: t,
            isSigner: false,
            isWritable: true
          },
          {
            pubkey: an,
            isSigner: false,
            isWritable: false
          },
          {
            pubkey: Qt,
            isSigner: false,
            isWritable: false
          },
          {
            pubkey: r,
            isSigner: true,
            isWritable: false
          }
        ],
        programId: this.programId,
        data: a
      };
      return new dt(l);
    }
    static createAccount(e) {
      const t = new at();
      return t.add(Lt.createAccount({
        fromPubkey: e.fromPubkey,
        newAccountPubkey: e.votePubkey,
        lamports: e.lamports,
        space: this.space,
        programId: this.programId
      })), t.add(this.initializeAccount({
        votePubkey: e.votePubkey,
        nodePubkey: e.voteInit.nodePubkey,
        voteInit: e.voteInit
      }));
    }
    static authorize(e) {
      const { votePubkey: t, authorizedPubkey: r, newAuthorizedPubkey: s, voteAuthorizationType: n } = e, a = cr.Authorize, l = it(a, {
        newAuthorized: Qe(s.toBuffer()),
        voteAuthorizationType: n.index
      }), d = [
        {
          pubkey: t,
          isSigner: false,
          isWritable: true
        },
        {
          pubkey: Qt,
          isSigner: false,
          isWritable: false
        },
        {
          pubkey: r,
          isSigner: true,
          isWritable: false
        }
      ];
      return new at().add({
        keys: d,
        programId: this.programId,
        data: l
      });
    }
    static authorizeWithSeed(e) {
      const { currentAuthorityDerivedKeyBasePubkey: t, currentAuthorityDerivedKeyOwnerPubkey: r, currentAuthorityDerivedKeySeed: s, newAuthorizedPubkey: n, voteAuthorizationType: a, votePubkey: l } = e, d = cr.AuthorizeWithSeed, p = it(d, {
        voteAuthorizeWithSeedArgs: {
          currentAuthorityDerivedKeyOwnerPubkey: Qe(r.toBuffer()),
          currentAuthorityDerivedKeySeed: s,
          newAuthorized: Qe(n.toBuffer()),
          voteAuthorizationType: a.index
        }
      }), k = [
        {
          pubkey: l,
          isSigner: false,
          isWritable: true
        },
        {
          pubkey: Qt,
          isSigner: false,
          isWritable: false
        },
        {
          pubkey: t,
          isSigner: true,
          isWritable: false
        }
      ];
      return new at().add({
        keys: k,
        programId: this.programId,
        data: p
      });
    }
    static withdraw(e) {
      const { votePubkey: t, authorizedWithdrawerPubkey: r, lamports: s, toPubkey: n } = e, a = cr.Withdraw, l = it(a, {
        lamports: s
      }), d = [
        {
          pubkey: t,
          isSigner: false,
          isWritable: true
        },
        {
          pubkey: n,
          isSigner: false,
          isWritable: true
        },
        {
          pubkey: r,
          isSigner: true,
          isWritable: false
        }
      ];
      return new at().add({
        keys: d,
        programId: this.programId,
        data: l
      });
    }
    static safeWithdraw(e, t, r) {
      if (e.lamports > t - r) throw new Error("Withdraw will leave vote account with insufficient funds.");
      return Gn.withdraw(e);
    }
    static updateValidatorIdentity(e) {
      const { votePubkey: t, authorizedWithdrawerPubkey: r, nodePubkey: s } = e, n = cr.UpdateValidatorIdentity, a = it(n), l = [
        {
          pubkey: t,
          isSigner: false,
          isWritable: true
        },
        {
          pubkey: s,
          isSigner: true,
          isWritable: false
        },
        {
          pubkey: r,
          isSigner: true,
          isWritable: false
        }
      ];
      return new at().add({
        keys: l,
        programId: this.programId,
        data: a
      });
    }
  }
  Gn.programId = new $("Vote111111111111111111111111111111111111111");
  Gn.space = 3762;
  const ch = new $("Va1idator1nfo111111111111111111111111111111"), p0 = K({
    name: H(),
    website: ie(H()),
    details: ie(H()),
    iconUrl: ie(H()),
    keybaseUsername: ie(H())
  });
  class Ta {
    constructor(e, t) {
      this.key = void 0, this.info = void 0, this.key = e, this.info = t;
    }
    static fromConfigData(e) {
      let t = [
        ...e
      ];
      if (Ut(t) !== 2) return null;
      const s = [];
      for (let n = 0; n < 2; n++) {
        const a = new $(Tt(t, 0, jt)), l = xt(t) === 1;
        s.push({
          publicKey: a,
          isSigner: l
        });
      }
      if (s[0].publicKey.equals(ch) && s[1].isSigner) {
        const n = en().decode(B.from(t)), a = JSON.parse(n);
        return Bl(a, p0), new Ta(s[1].publicKey, a);
      }
      return null;
    }
  }
  const y0 = new $("Vote111111111111111111111111111111111111111"), m0 = m.struct([
    nt("nodePubkey"),
    nt("authorizedWithdrawer"),
    m.u8("commission"),
    m.nu64(),
    m.seq(m.struct([
      m.nu64("slot"),
      m.u32("confirmationCount")
    ]), m.offset(m.u32(), -8), "votes"),
    m.u8("rootSlotValid"),
    m.nu64("rootSlot"),
    m.nu64(),
    m.seq(m.struct([
      m.nu64("epoch"),
      nt("authorizedVoter")
    ]), m.offset(m.u32(), -8), "authorizedVoters"),
    m.struct([
      m.seq(m.struct([
        nt("authorizedPubkey"),
        m.nu64("epochOfLastAuthorizedSwitch"),
        m.nu64("targetEpoch")
      ]), 32, "buf"),
      m.nu64("idx"),
      m.u8("isEmpty")
    ], "priorVoters"),
    m.nu64(),
    m.seq(m.struct([
      m.nu64("epoch"),
      m.nu64("credits"),
      m.nu64("prevCredits")
    ]), m.offset(m.u32(), -8), "epochCredits"),
    m.struct([
      m.nu64("slot"),
      m.nu64("timestamp")
    ], "lastTimestamp")
  ]);
  class La {
    constructor(e) {
      this.nodePubkey = void 0, this.authorizedWithdrawer = void 0, this.commission = void 0, this.rootSlot = void 0, this.votes = void 0, this.authorizedVoters = void 0, this.priorVoters = void 0, this.epochCredits = void 0, this.lastTimestamp = void 0, this.nodePubkey = e.nodePubkey, this.authorizedWithdrawer = e.authorizedWithdrawer, this.commission = e.commission, this.rootSlot = e.rootSlot, this.votes = e.votes, this.authorizedVoters = e.authorizedVoters, this.priorVoters = e.priorVoters, this.epochCredits = e.epochCredits, this.lastTimestamp = e.lastTimestamp;
    }
    static fromAccountData(e) {
      const r = m0.decode(Qe(e), 4);
      let s = r.rootSlot;
      return r.rootSlotValid || (s = null), new La({
        nodePubkey: new $(r.nodePubkey),
        authorizedWithdrawer: new $(r.authorizedWithdrawer),
        commission: r.commission,
        votes: r.votes,
        rootSlot: s,
        authorizedVoters: r.authorizedVoters.map(b0),
        priorVoters: w0(r.priorVoters),
        epochCredits: r.epochCredits,
        lastTimestamp: r.lastTimestamp
      });
    }
  }
  function b0({ authorizedVoter: o, epoch: e }) {
    return {
      epoch: e,
      authorizedVoter: new $(o)
    };
  }
  function Lc({ authorizedPubkey: o, epochOfLastAuthorizedSwitch: e, targetEpoch: t }) {
    return {
      authorizedPubkey: new $(o),
      epochOfLastAuthorizedSwitch: e,
      targetEpoch: t
    };
  }
  function w0({ buf: o, idx: e, isEmpty: t }) {
    return t ? [] : [
      ...o.slice(e + 1).map(Lc),
      ...o.slice(0, e).map(Lc)
    ];
  }
  const Cc = {
    http: {
      devnet: "http://api.devnet.solana.com",
      testnet: "http://api.testnet.solana.com",
      "mainnet-beta": "http://api.mainnet-beta.solana.com/"
    },
    https: {
      devnet: "https://api.devnet.solana.com",
      testnet: "https://api.testnet.solana.com",
      "mainnet-beta": "https://api.mainnet-beta.solana.com/"
    }
  };
  function k0(o, e) {
    const t = e === false ? "http" : "https";
    if (!o) return Cc[t].devnet;
    const r = Cc[t][o];
    if (!r) throw new Error(`Unknown ${t} cluster: ${o}`);
    return r;
  }
  async function v0(o, e, t, r) {
    let s, n;
    t && Object.prototype.hasOwnProperty.call(t, "lastValidBlockHeight") || t && Object.prototype.hasOwnProperty.call(t, "nonceValue") ? (s = t, n = r) : n = t;
    const a = n && {
      skipPreflight: n.skipPreflight,
      preflightCommitment: n.preflightCommitment || n.commitment,
      minContextSlot: n.minContextSlot
    }, l = await o.sendRawTransaction(e, a), d = n && n.commitment, k = (await (s ? o.confirmTransaction(s, d) : o.confirmTransaction(l, d))).value;
    if (k.err) throw l != null ? new Mr({
      action: (a == null ? void 0 : a.skipPreflight) ? "send" : "simulate",
      signature: l,
      transactionMessage: `Status: (${JSON.stringify(k)})`
    }) : new Error(`Raw transaction ${l} failed (${JSON.stringify(k)})`);
    return l;
  }
  const S0 = 1e9, _0 = Object.freeze(Object.defineProperty({
    __proto__: null,
    Account: ay,
    AddressLookupTableAccount: Do,
    AddressLookupTableInstruction: o0,
    AddressLookupTableProgram: xa,
    Authorized: oh,
    BLOCKHASH_CACHE_TIMEOUT_MS: Gl,
    BPF_LOADER_DEPRECATED_PROGRAM_ID: cy,
    BPF_LOADER_PROGRAM_ID: Ty,
    BpfLoader: Ly,
    COMPUTE_BUDGET_INSTRUCTION_LAYOUTS: ar,
    ComputeBudgetInstruction: a0,
    ComputeBudgetProgram: Pa,
    Connection: i0,
    Ed25519Program: Gi,
    Enum: iy,
    EpochSchedule: Fl,
    FeeCalculatorLayout: ql,
    Keypair: Rn,
    LAMPORTS_PER_SOL: S0,
    LOOKUP_TABLE_INSTRUCTION_LAYOUTS: wr,
    Loader: cn,
    Lockup: Us,
    MAX_SEED_LENGTH: Kl,
    Message: tr,
    MessageAccountKeys: On,
    MessageV0: on,
    MessageV1: $s,
    NONCE_ACCOUNT_LENGTH: Wo,
    NonceAccount: Vi,
    PACKET_DATA_SIZE: Ir,
    PUBLIC_KEY_LENGTH: jt,
    PublicKey: $,
    SIGNATURE_LENGTH_IN_BYTES: _r,
    SOLANA_SCHEMA: Ss,
    STAKE_CONFIG_ID: ih,
    STAKE_INSTRUCTION_LAYOUTS: Nt,
    SYSTEM_INSTRUCTION_LAYOUTS: yt,
    SYSVAR_CLOCK_PUBKEY: Qt,
    SYSVAR_EPOCH_SCHEDULE_PUBKEY: _y,
    SYSVAR_INSTRUCTIONS_PUBKEY: Ay,
    SYSVAR_RECENT_BLOCKHASHES_PUBKEY: li,
    SYSVAR_RENT_PUBKEY: an,
    SYSVAR_REWARDS_PUBKEY: Iy,
    SYSVAR_SLOT_HASHES_PUBKEY: Ey,
    SYSVAR_SLOT_HISTORY_PUBKEY: Ry,
    SYSVAR_STAKE_HISTORY_PUBKEY: hi,
    Secp256k1Program: Mn,
    SendTransactionError: Mr,
    SolanaJSONRPCError: re,
    SolanaJSONRPCErrorCode: My,
    StakeAuthorizationLayout: d0,
    StakeInstruction: h0,
    StakeProgram: ji,
    Struct: Sa,
    SystemInstruction: xy,
    SystemProgram: Lt,
    Transaction: at,
    TransactionExpiredBlockheightExceededError: _a,
    TransactionExpiredNonceInvalidError: Sn,
    TransactionExpiredTimeoutError: Aa,
    TransactionInstruction: dt,
    TransactionMessage: Ia,
    TransactionStatus: yr,
    V1_TRANSACTION_SIZE_LIMIT: uy,
    VALIDATOR_INFO_KEY: ch,
    VERSION_1_MESSAGE_PREFIX: $l,
    VERSION_PREFIX_MASK: Ks,
    VOTE_PROGRAM_ID: y0,
    ValidatorInfo: Ta,
    VersionedMessage: _i,
    VersionedTransaction: Ai,
    VoteAccount: La,
    VoteAuthorizationLayout: g0,
    VoteInit: ah,
    VoteInstruction: f0,
    VoteProgram: Gn,
    clusterApiUrl: k0,
    sendAndConfirmRawTransaction: v0,
    sendAndConfirmTransaction: Uo
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  var Zs = {
    exports: {}
  }, Bc;
  function A0() {
    if (Bc) return Zs.exports;
    Bc = 1;
    const o = /[\p{Lu}]/u, e = /[\p{Ll}]/u, t = /^[\p{Lu}](?![\p{Lu}])/gu, r = /([\p{Alpha}\p{N}_]|$)/u, s = /[_.\- ]+/, n = new RegExp("^" + s.source), a = new RegExp(s.source + r.source, "gu"), l = new RegExp("\\d+" + r.source, "gu"), d = (E, S, I) => {
      let R = false, M = false, x = false;
      for (let C = 0; C < E.length; C++) {
        const O = E[C];
        R && o.test(O) ? (E = E.slice(0, C) + "-" + E.slice(C), R = false, x = M, M = true, C++) : M && x && e.test(O) ? (E = E.slice(0, C - 1) + "-" + E.slice(C - 1), x = M, M = false, R = true) : (R = S(O) === O && I(O) !== O, x = M, M = I(O) === O && S(O) !== O);
      }
      return E;
    }, p = (E, S) => (t.lastIndex = 0, E.replace(t, (I) => S(I))), k = (E, S) => (a.lastIndex = 0, l.lastIndex = 0, E.replace(a, (I, R) => S(R)).replace(l, (I) => S(I))), A = (E, S) => {
      if (!(typeof E == "string" || Array.isArray(E))) throw new TypeError("Expected the input to be `string | string[]`");
      if (S = {
        pascalCase: false,
        preserveConsecutiveUppercase: false,
        ...S
      }, Array.isArray(E) ? E = E.map((x) => x.trim()).filter((x) => x.length).join("-") : E = E.trim(), E.length === 0) return "";
      const I = S.locale === false ? (x) => x.toLowerCase() : (x) => x.toLocaleLowerCase(S.locale), R = S.locale === false ? (x) => x.toUpperCase() : (x) => x.toLocaleUpperCase(S.locale);
      return E.length === 1 ? S.pascalCase ? R(E) : I(E) : (E !== I(E) && (E = d(E, I, R)), E = E.replace(n, ""), S.preserveConsecutiveUppercase ? E = p(E, I) : E = I(E), S.pascalCase && (E = R(E.charAt(0)) + E.slice(1)), k(E, R));
    };
    return Zs.exports = A, Zs.exports.default = A, Zs.exports;
  }
  var I0 = A0();
  const bt = Kn(I0);
  var ps = {};
  const E0 = Lu(_0);
  var Oc;
  function R0() {
    return Oc || (Oc = 1, (function(o) {
      var e = ps && ps.__importDefault || function(L) {
        return L && L.__esModule ? L : {
          default: L
        };
      };
      Object.defineProperty(o, "__esModule", {
        value: true
      }), o.map = o.array = o.rustEnum = o.str = o.vecU8 = o.tagged = o.vec = o.bool = o.option = o.publicKey = o.i256 = o.u256 = o.i128 = o.u128 = o.i64 = o.u64 = o.struct = o.f64 = o.f32 = o.i32 = o.u32 = o.i16 = o.u16 = o.i8 = o.u8 = void 0;
      const t = pi(), r = E0, s = e(Cu());
      var n = pi();
      Object.defineProperty(o, "u8", {
        enumerable: true,
        get: function() {
          return n.u8;
        }
      }), Object.defineProperty(o, "i8", {
        enumerable: true,
        get: function() {
          return n.s8;
        }
      }), Object.defineProperty(o, "u16", {
        enumerable: true,
        get: function() {
          return n.u16;
        }
      }), Object.defineProperty(o, "i16", {
        enumerable: true,
        get: function() {
          return n.s16;
        }
      }), Object.defineProperty(o, "u32", {
        enumerable: true,
        get: function() {
          return n.u32;
        }
      }), Object.defineProperty(o, "i32", {
        enumerable: true,
        get: function() {
          return n.s32;
        }
      }), Object.defineProperty(o, "f32", {
        enumerable: true,
        get: function() {
          return n.f32;
        }
      }), Object.defineProperty(o, "f64", {
        enumerable: true,
        get: function() {
          return n.f64;
        }
      }), Object.defineProperty(o, "struct", {
        enumerable: true,
        get: function() {
          return n.struct;
        }
      });
      class a extends t.Layout {
        constructor(f, i, c) {
          super(f, c), this.blob = (0, t.blob)(f), this.signed = i;
        }
        decode(f, i = 0) {
          const c = new s.default(this.blob.decode(f, i), 10, "le");
          return this.signed ? c.fromTwos(this.span * 8).clone() : c;
        }
        encode(f, i, c = 0) {
          return this.signed && (f = f.toTwos(this.span * 8)), this.blob.encode(f.toArrayLike(he, "le", this.span), i, c);
        }
      }
      function l(L) {
        return new a(8, false, L);
      }
      o.u64 = l;
      function d(L) {
        return new a(8, true, L);
      }
      o.i64 = d;
      function p(L) {
        return new a(16, false, L);
      }
      o.u128 = p;
      function k(L) {
        return new a(16, true, L);
      }
      o.i128 = k;
      function A(L) {
        return new a(32, false, L);
      }
      o.u256 = A;
      function E(L) {
        return new a(32, true, L);
      }
      o.i256 = E;
      class S extends t.Layout {
        constructor(f, i, c, h) {
          super(f.span, h), this.layout = f, this.decoder = i, this.encoder = c;
        }
        decode(f, i) {
          return this.decoder(this.layout.decode(f, i));
        }
        encode(f, i, c) {
          return this.layout.encode(this.encoder(f), i, c);
        }
        getSpan(f, i) {
          return this.layout.getSpan(f, i);
        }
      }
      function I(L) {
        return new S((0, t.blob)(32), (f) => new r.PublicKey(f), (f) => f.toBuffer(), L);
      }
      o.publicKey = I;
      class R extends t.Layout {
        constructor(f, i) {
          super(-1, i), this.layout = f, this.discriminator = (0, t.u8)();
        }
        encode(f, i, c = 0) {
          return f == null ? this.discriminator.encode(0, i, c) : (this.discriminator.encode(1, i, c), this.layout.encode(f, i, c + 1) + 1);
        }
        decode(f, i = 0) {
          const c = this.discriminator.decode(f, i);
          if (c === 0) return null;
          if (c === 1) return this.layout.decode(f, i + 1);
          throw new Error("Invalid option " + this.property);
        }
        getSpan(f, i = 0) {
          const c = this.discriminator.decode(f, i);
          if (c === 0) return 1;
          if (c === 1) return this.layout.getSpan(f, i + 1) + 1;
          throw new Error("Invalid option " + this.property);
        }
      }
      function M(L, f) {
        return new R(L, f);
      }
      o.option = M;
      function x(L) {
        return new S((0, t.u8)(), C, O, L);
      }
      o.bool = x;
      function C(L) {
        if (L === 0) return false;
        if (L === 1) return true;
        throw new Error("Invalid bool: " + L);
      }
      function O(L) {
        return L ? 1 : 0;
      }
      function N(L, f) {
        const i = (0, t.u32)("length"), c = (0, t.struct)([
          i,
          (0, t.seq)(L, (0, t.offset)(i, -i.span), "values")
        ]);
        return new S(c, ({ values: h }) => h, (h) => ({
          values: h
        }), f);
      }
      o.vec = N;
      function ee(L, f, i) {
        const c = (0, t.struct)([
          l("tag"),
          f.replicate("data")
        ]);
        function h({ tag: g, data: w }) {
          if (!g.eq(L)) throw new Error("Invalid tag, expected: " + L.toString("hex") + ", got: " + g.toString("hex"));
          return w;
        }
        return new S(c, h, (g) => ({
          tag: L,
          data: g
        }), i);
      }
      o.tagged = ee;
      function oe(L) {
        const f = (0, t.u32)("length"), i = (0, t.struct)([
          f,
          (0, t.blob)((0, t.offset)(f, -f.span), "data")
        ]);
        return new S(i, ({ data: c }) => c, (c) => ({
          data: c
        }), L);
      }
      o.vecU8 = oe;
      function Q(L) {
        return new S(oe(), (f) => f.toString("utf-8"), (f) => he.from(f, "utf-8"), L);
      }
      o.str = Q;
      function de(L, f, i) {
        const c = (0, t.union)(i ?? (0, t.u8)(), f);
        return L.forEach((h, g) => c.addVariant(g, h, h.property)), c;
      }
      o.rustEnum = de;
      function le(L, f, i) {
        const c = (0, t.struct)([
          (0, t.seq)(L, f, "values")
        ]);
        return new S(c, ({ values: h }) => h, (h) => ({
          values: h
        }), i);
      }
      o.array = le;
      class ne extends t.Layout {
        constructor(f, i, c) {
          super(f.span + i.span, c), this.keyLayout = f, this.valueLayout = i;
        }
        decode(f, i) {
          i = i || 0;
          const c = this.keyLayout.decode(f, i), h = this.valueLayout.decode(f, i + this.keyLayout.getSpan(f, i));
          return [
            c,
            h
          ];
        }
        encode(f, i, c) {
          c = c || 0;
          const h = this.keyLayout.encode(f[0], i, c), g = this.valueLayout.encode(f[1], i, c + h);
          return h + g;
        }
        getSpan(f, i) {
          return this.keyLayout.getSpan(f, i) + this.valueLayout.getSpan(f, i);
        }
      }
      function D(L, f, i) {
        const c = (0, t.u32)("length"), h = (0, t.struct)([
          c,
          (0, t.seq)(new ne(L, f), (0, t.offset)(c, -c.span), "values")
        ]);
        return new S(h, ({ values: g }) => new Map(g), (g) => ({
          values: Array.from(g.entries())
        }), i);
      }
      o.map = D;
    })(ps)), ps;
  }
  var fe = R0();
  function jn(o) {
    let e = o.length;
    for (; --e >= 0; ) o[e] = 0;
  }
  const M0 = 3, x0 = 258, uh = 29, P0 = 256, T0 = P0 + 1 + uh, lh = 30, L0 = 512, C0 = new Array((T0 + 2) * 2);
  jn(C0);
  const B0 = new Array(lh * 2);
  jn(B0);
  const O0 = new Array(L0);
  jn(O0);
  const N0 = new Array(x0 - M0 + 1);
  jn(N0);
  const z0 = new Array(uh);
  jn(z0);
  const K0 = new Array(lh);
  jn(K0);
  const $0 = (o, e, t, r) => {
    let s = o & 65535 | 0, n = o >>> 16 & 65535 | 0, a = 0;
    for (; t !== 0; ) {
      a = t > 2e3 ? 2e3 : t, t -= a;
      do
        s = s + e[r++] | 0, n = n + s | 0;
      while (--a);
      s %= 65521, n %= 65521;
    }
    return s | n << 16 | 0;
  };
  var Ho = $0;
  const U0 = () => {
    let o, e = [];
    for (var t = 0; t < 256; t++) {
      o = t;
      for (var r = 0; r < 8; r++) o = o & 1 ? 3988292384 ^ o >>> 1 : o >>> 1;
      e[t] = o;
    }
    return e;
  }, W0 = new Uint32Array(U0()), D0 = (o, e, t, r) => {
    const s = W0, n = r + t;
    o ^= -1;
    for (let a = r; a < n; a++) o = o >>> 8 ^ s[(o ^ e[a]) & 255];
    return o ^ -1;
  };
  var rr = D0, Go = {
    2: "need dictionary",
    1: "stream end",
    0: "",
    "-1": "file error",
    "-2": "stream error",
    "-3": "data error",
    "-4": "insufficient memory",
    "-5": "buffer error",
    "-6": "incompatible version"
  }, hh = {
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
  const q0 = (o, e) => Object.prototype.hasOwnProperty.call(o, e);
  var V0 = function(o) {
    const e = Array.prototype.slice.call(arguments, 1);
    for (; e.length; ) {
      const t = e.shift();
      if (t) {
        if (typeof t != "object") throw new TypeError(t + "must be non-object");
        for (const r in t) q0(t, r) && (o[r] = t[r]);
      }
    }
    return o;
  }, F0 = (o) => {
    let e = 0;
    for (let r = 0, s = o.length; r < s; r++) e += o[r].length;
    const t = new Uint8Array(e);
    for (let r = 0, s = 0, n = o.length; r < n; r++) {
      let a = o[r];
      t.set(a, s), s += a.length;
    }
    return t;
  }, dh = {
    assign: V0,
    flattenChunks: F0
  };
  let fh = true;
  try {
    String.fromCharCode.apply(null, new Uint8Array(1));
  } catch {
    fh = false;
  }
  const Ms = new Uint8Array(256);
  for (let o = 0; o < 256; o++) Ms[o] = o >= 252 ? 6 : o >= 248 ? 5 : o >= 240 ? 4 : o >= 224 ? 3 : o >= 192 ? 2 : 1;
  Ms[254] = Ms[255] = 1;
  var H0 = (o) => {
    if (typeof TextEncoder == "function" && TextEncoder.prototype.encode) return new TextEncoder().encode(o);
    let e, t, r, s, n, a = o.length, l = 0;
    for (s = 0; s < a; s++) t = o.charCodeAt(s), (t & 64512) === 55296 && s + 1 < a && (r = o.charCodeAt(s + 1), (r & 64512) === 56320 && (t = 65536 + (t - 55296 << 10) + (r - 56320), s++)), l += t < 128 ? 1 : t < 2048 ? 2 : t < 65536 ? 3 : 4;
    for (e = new Uint8Array(l), n = 0, s = 0; n < l; s++) t = o.charCodeAt(s), (t & 64512) === 55296 && s + 1 < a && (r = o.charCodeAt(s + 1), (r & 64512) === 56320 && (t = 65536 + (t - 55296 << 10) + (r - 56320), s++)), t < 128 ? e[n++] = t : t < 2048 ? (e[n++] = 192 | t >>> 6, e[n++] = 128 | t & 63) : t < 65536 ? (e[n++] = 224 | t >>> 12, e[n++] = 128 | t >>> 6 & 63, e[n++] = 128 | t & 63) : (e[n++] = 240 | t >>> 18, e[n++] = 128 | t >>> 12 & 63, e[n++] = 128 | t >>> 6 & 63, e[n++] = 128 | t & 63);
    return e;
  };
  const G0 = (o, e) => {
    if (e < 65534 && o.subarray && fh) return String.fromCharCode.apply(null, o.length === e ? o : o.subarray(0, e));
    let t = "";
    for (let r = 0; r < e; r++) t += String.fromCharCode(o[r]);
    return t;
  };
  var j0 = (o, e) => {
    const t = e || o.length;
    if (typeof TextDecoder == "function" && TextDecoder.prototype.decode) return new TextDecoder().decode(o.subarray(0, e));
    let r, s;
    const n = new Array(t * 2);
    for (s = 0, r = 0; r < t; ) {
      let a = o[r++];
      if (a < 128) {
        n[s++] = a;
        continue;
      }
      let l = Ms[a];
      if (l > 4) {
        n[s++] = 65533, r += l - 1;
        continue;
      }
      for (a &= l === 2 ? 31 : l === 3 ? 15 : 7; l > 1 && r < t; ) a = a << 6 | o[r++] & 63, l--;
      if (l > 1) {
        n[s++] = 65533;
        continue;
      }
      a < 65536 ? n[s++] = a : (a -= 65536, n[s++] = 55296 | a >> 10 & 1023, n[s++] = 56320 | a & 1023);
    }
    return G0(n, s);
  }, Y0 = (o, e) => {
    e = e || o.length, e > o.length && (e = o.length);
    let t = e - 1;
    for (; t >= 0 && (o[t] & 192) === 128; ) t--;
    return t < 0 || t === 0 ? e : t + Ms[o[t]] > e ? t : e;
  }, jo = {
    string2buf: H0,
    buf2string: j0,
    utf8border: Y0
  };
  function Z0() {
    this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
  }
  var J0 = Z0;
  const Js = 16209, X0 = 16191;
  var Q0 = function(e, t) {
    let r, s, n, a, l, d, p, k, A, E, S, I, R, M, x, C, O, N, ee, oe, Q, de, le, ne;
    const D = e.state;
    r = e.next_in, le = e.input, s = r + (e.avail_in - 5), n = e.next_out, ne = e.output, a = n - (t - e.avail_out), l = n + (e.avail_out - 257), d = D.dmax, p = D.wsize, k = D.whave, A = D.wnext, E = D.window, S = D.hold, I = D.bits, R = D.lencode, M = D.distcode, x = (1 << D.lenbits) - 1, C = (1 << D.distbits) - 1;
    e: do {
      I < 15 && (S += le[r++] << I, I += 8, S += le[r++] << I, I += 8), O = R[S & x];
      t: for (; ; ) {
        if (N = O >>> 24, S >>>= N, I -= N, N = O >>> 16 & 255, N === 0) ne[n++] = O & 65535;
        else if (N & 16) {
          ee = O & 65535, N &= 15, N && (I < N && (S += le[r++] << I, I += 8), ee += S & (1 << N) - 1, S >>>= N, I -= N), I < 15 && (S += le[r++] << I, I += 8, S += le[r++] << I, I += 8), O = M[S & C];
          r: for (; ; ) {
            if (N = O >>> 24, S >>>= N, I -= N, N = O >>> 16 & 255, N & 16) {
              if (oe = O & 65535, N &= 15, I < N && (S += le[r++] << I, I += 8, I < N && (S += le[r++] << I, I += 8)), oe += S & (1 << N) - 1, oe > d) {
                e.msg = "invalid distance too far back", D.mode = Js;
                break e;
              }
              if (S >>>= N, I -= N, N = n - a, oe > N) {
                if (N = oe - N, N > k && D.sane) {
                  e.msg = "invalid distance too far back", D.mode = Js;
                  break e;
                }
                if (Q = 0, de = E, A === 0) {
                  if (Q += p - N, N < ee) {
                    ee -= N;
                    do
                      ne[n++] = E[Q++];
                    while (--N);
                    Q = n - oe, de = ne;
                  }
                } else if (A < N) {
                  if (Q += p + A - N, N -= A, N < ee) {
                    ee -= N;
                    do
                      ne[n++] = E[Q++];
                    while (--N);
                    if (Q = 0, A < ee) {
                      N = A, ee -= N;
                      do
                        ne[n++] = E[Q++];
                      while (--N);
                      Q = n - oe, de = ne;
                    }
                  }
                } else if (Q += A - N, N < ee) {
                  ee -= N;
                  do
                    ne[n++] = E[Q++];
                  while (--N);
                  Q = n - oe, de = ne;
                }
                for (; ee > 2; ) ne[n++] = de[Q++], ne[n++] = de[Q++], ne[n++] = de[Q++], ee -= 3;
                ee && (ne[n++] = de[Q++], ee > 1 && (ne[n++] = de[Q++]));
              } else {
                Q = n - oe;
                do
                  ne[n++] = ne[Q++], ne[n++] = ne[Q++], ne[n++] = ne[Q++], ee -= 3;
                while (ee > 2);
                ee && (ne[n++] = ne[Q++], ee > 1 && (ne[n++] = ne[Q++]));
              }
            } else if ((N & 64) === 0) {
              O = M[(O & 65535) + (S & (1 << N) - 1)];
              continue r;
            } else {
              e.msg = "invalid distance code", D.mode = Js;
              break e;
            }
            break;
          }
        } else if ((N & 64) === 0) {
          O = R[(O & 65535) + (S & (1 << N) - 1)];
          continue t;
        } else if (N & 32) {
          D.mode = X0;
          break e;
        } else {
          e.msg = "invalid literal/length code", D.mode = Js;
          break e;
        }
        break;
      }
    } while (r < s && n < l);
    ee = I >> 3, r -= ee, I -= ee << 3, S &= (1 << I) - 1, e.next_in = r, e.next_out = n, e.avail_in = r < s ? 5 + (s - r) : 5 - (r - s), e.avail_out = n < l ? 257 + (l - n) : 257 - (n - l), D.hold = S, D.bits = I;
  };
  const wn = 15, Nc = 852, zc = 592, Kc = 0, yo = 1, $c = 2, eb = new Uint16Array([
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
  ]), tb = new Uint8Array([
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
  ]), rb = new Uint16Array([
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
  ]), nb = new Uint8Array([
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
  ]), sb = (o, e, t, r, s, n, a, l) => {
    const d = l.bits;
    let p = 0, k = 0, A = 0, E = 0, S = 0, I = 0, R = 0, M = 0, x = 0, C = 0, O, N, ee, oe, Q, de = null, le;
    const ne = new Uint16Array(wn + 1), D = new Uint16Array(wn + 1);
    let L = null, f, i, c;
    for (p = 0; p <= wn; p++) ne[p] = 0;
    for (k = 0; k < r; k++) ne[e[t + k]]++;
    for (S = d, E = wn; E >= 1 && ne[E] === 0; E--) ;
    if (S > E && (S = E), E === 0) return s[n++] = 1 << 24 | 64 << 16 | 0, s[n++] = 1 << 24 | 64 << 16 | 0, l.bits = 1, 0;
    for (A = 1; A < E && ne[A] === 0; A++) ;
    for (S < A && (S = A), M = 1, p = 1; p <= wn; p++) if (M <<= 1, M -= ne[p], M < 0) return -1;
    if (M > 0 && (o === Kc || E !== 1)) return -1;
    for (D[1] = 0, p = 1; p < wn; p++) D[p + 1] = D[p] + ne[p];
    for (k = 0; k < r; k++) e[t + k] !== 0 && (a[D[e[t + k]]++] = k);
    if (o === Kc ? (de = L = a, le = 20) : o === yo ? (de = eb, L = tb, le = 257) : (de = rb, L = nb, le = 0), C = 0, k = 0, p = A, Q = n, I = S, R = 0, ee = -1, x = 1 << S, oe = x - 1, o === yo && x > Nc || o === $c && x > zc) return 1;
    for (; ; ) {
      f = p - R, a[k] + 1 < le ? (i = 0, c = a[k]) : a[k] >= le ? (i = L[a[k] - le], c = de[a[k] - le]) : (i = 96, c = 0), O = 1 << p - R, N = 1 << I, A = N;
      do
        N -= O, s[Q + (C >> R) + N] = f << 24 | i << 16 | c | 0;
      while (N !== 0);
      for (O = 1 << p - 1; C & O; ) O >>= 1;
      if (O !== 0 ? (C &= O - 1, C += O) : C = 0, k++, --ne[p] === 0) {
        if (p === E) break;
        p = e[t + a[k]];
      }
      if (p > S && (C & oe) !== ee) {
        for (R === 0 && (R = S), Q += A, I = p - R, M = 1 << I; I + R < E && (M -= ne[I + R], !(M <= 0)); ) I++, M <<= 1;
        if (x += 1 << I, o === yo && x > Nc || o === $c && x > zc) return 1;
        ee = C & oe, s[ee] = S << 24 | I << 16 | Q - n | 0;
      }
    }
    return C !== 0 && (s[Q + C] = p - R << 24 | 64 << 16 | 0), l.bits = S, 0;
  };
  var _s = sb;
  const ib = 0, gh = 1, ph = 2, { Z_FINISH: Uc, Z_BLOCK: ob, Z_TREES: Xs, Z_OK: un, Z_STREAM_END: ab, Z_NEED_DICT: cb, Z_STREAM_ERROR: Zt, Z_DATA_ERROR: yh, Z_MEM_ERROR: mh, Z_BUF_ERROR: ub, Z_DEFLATED: Wc } = hh, Yi = 16180, Dc = 16181, qc = 16182, Vc = 16183, Fc = 16184, Hc = 16185, Gc = 16186, jc = 16187, Yc = 16188, Zc = 16189, Ei = 16190, gr = 16191, mo = 16192, Jc = 16193, bo = 16194, Xc = 16195, Qc = 16196, eu = 16197, tu = 16198, Qs = 16199, ei = 16200, ru = 16201, nu = 16202, su = 16203, iu = 16204, ou = 16205, wo = 16206, au = 16207, cu = 16208, mt = 16209, bh = 16210, wh = 16211, lb = 852, hb = 592, db = 15, fb = db, uu = (o) => (o >>> 24 & 255) + (o >>> 8 & 65280) + ((o & 65280) << 8) + ((o & 255) << 24);
  function gb() {
    this.strm = null, this.mode = 0, this.last = false, this.wrap = 0, this.havedict = false, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new Uint16Array(320), this.work = new Uint16Array(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
  }
  const yn = (o) => {
    if (!o) return 1;
    const e = o.state;
    return !e || e.strm !== o || e.mode < Yi || e.mode > wh ? 1 : 0;
  }, kh = (o) => {
    if (yn(o)) return Zt;
    const e = o.state;
    return o.total_in = o.total_out = e.total = 0, o.msg = "", e.wrap && (o.adler = e.wrap & 1), e.mode = Yi, e.last = 0, e.havedict = 0, e.flags = -1, e.dmax = 32768, e.head = null, e.hold = 0, e.bits = 0, e.lencode = e.lendyn = new Int32Array(lb), e.distcode = e.distdyn = new Int32Array(hb), e.sane = 1, e.back = -1, un;
  }, vh = (o) => {
    if (yn(o)) return Zt;
    const e = o.state;
    return e.wsize = 0, e.whave = 0, e.wnext = 0, kh(o);
  }, Sh = (o, e) => {
    let t;
    if (yn(o)) return Zt;
    const r = o.state;
    return e < 0 ? (t = 0, e = -e) : (t = (e >> 4) + 5, e < 48 && (e &= 15)), e && (e < 8 || e > 15) ? Zt : (r.window !== null && r.wbits !== e && (r.window = null), r.wrap = t, r.wbits = e, vh(o));
  }, _h = (o, e) => {
    if (!o) return Zt;
    const t = new gb();
    o.state = t, t.strm = o, t.window = null, t.mode = Yi;
    const r = Sh(o, e);
    return r !== un && (o.state = null), r;
  }, pb = (o) => _h(o, fb);
  let lu = true, ko, vo;
  const yb = (o) => {
    if (lu) {
      ko = new Int32Array(512), vo = new Int32Array(32);
      let e = 0;
      for (; e < 144; ) o.lens[e++] = 8;
      for (; e < 256; ) o.lens[e++] = 9;
      for (; e < 280; ) o.lens[e++] = 7;
      for (; e < 288; ) o.lens[e++] = 8;
      for (_s(gh, o.lens, 0, 288, ko, 0, o.work, {
        bits: 9
      }), e = 0; e < 32; ) o.lens[e++] = 5;
      _s(ph, o.lens, 0, 32, vo, 0, o.work, {
        bits: 5
      }), lu = false;
    }
    o.lencode = ko, o.lenbits = 9, o.distcode = vo, o.distbits = 5;
  }, Ah = (o, e, t, r) => {
    let s;
    const n = o.state;
    return n.window === null && (n.window = new Uint8Array(1 << n.wbits)), n.wsize === 0 && (n.wsize = 1 << n.wbits, n.wnext = 0, n.whave = 0), r >= n.wsize ? (n.window.set(e.subarray(t - n.wsize, t), 0), n.wnext = 0, n.whave = n.wsize) : (s = n.wsize - n.wnext, s > r && (s = r), n.window.set(e.subarray(t - r, t - r + s), n.wnext), r -= s, r ? (n.window.set(e.subarray(t - r, t), 0), n.wnext = r, n.whave = n.wsize) : (n.wnext += s, n.wnext === n.wsize && (n.wnext = 0), n.whave < n.wsize && (n.whave += s))), 0;
  }, mb = (o, e) => {
    let t, r, s, n, a, l, d, p, k, A, E, S, I, R, M = 0, x, C, O, N, ee, oe, Q, de;
    const le = new Uint8Array(4);
    let ne, D;
    const L = new Uint8Array([
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
    if (yn(o) || !o.output || !o.input && o.avail_in !== 0) return Zt;
    t = o.state, t.mode === gr && (t.mode = mo), a = o.next_out, s = o.output, d = o.avail_out, n = o.next_in, r = o.input, l = o.avail_in, p = t.hold, k = t.bits, A = l, E = d, de = un;
    e: for (; ; ) switch (t.mode) {
      case Yi:
        if (t.wrap === 0) {
          t.mode = mo;
          break;
        }
        for (; k < 16; ) {
          if (l === 0) break e;
          l--, p += r[n++] << k, k += 8;
        }
        if (t.wrap & 2 && p === 35615) {
          t.wbits === 0 && (t.wbits = 15), t.check = 0, le[0] = p & 255, le[1] = p >>> 8 & 255, t.check = rr(t.check, le, 2, 0), p = 0, k = 0, t.mode = Dc;
          break;
        }
        if (t.head && (t.head.done = false), !(t.wrap & 1) || (((p & 255) << 8) + (p >> 8)) % 31) {
          o.msg = "incorrect header check", t.mode = mt;
          break;
        }
        if ((p & 15) !== Wc) {
          o.msg = "unknown compression method", t.mode = mt;
          break;
        }
        if (p >>>= 4, k -= 4, Q = (p & 15) + 8, t.wbits === 0 && (t.wbits = Q), Q > 15 || Q > t.wbits) {
          o.msg = "invalid window size", t.mode = mt;
          break;
        }
        t.dmax = 1 << t.wbits, t.flags = 0, o.adler = t.check = 1, t.mode = p & 512 ? Zc : gr, p = 0, k = 0;
        break;
      case Dc:
        for (; k < 16; ) {
          if (l === 0) break e;
          l--, p += r[n++] << k, k += 8;
        }
        if (t.flags = p, (t.flags & 255) !== Wc) {
          o.msg = "unknown compression method", t.mode = mt;
          break;
        }
        if (t.flags & 57344) {
          o.msg = "unknown header flags set", t.mode = mt;
          break;
        }
        t.head && (t.head.text = p >> 8 & 1), t.flags & 512 && t.wrap & 4 && (le[0] = p & 255, le[1] = p >>> 8 & 255, t.check = rr(t.check, le, 2, 0)), p = 0, k = 0, t.mode = qc;
      case qc:
        for (; k < 32; ) {
          if (l === 0) break e;
          l--, p += r[n++] << k, k += 8;
        }
        t.head && (t.head.time = p), t.flags & 512 && t.wrap & 4 && (le[0] = p & 255, le[1] = p >>> 8 & 255, le[2] = p >>> 16 & 255, le[3] = p >>> 24 & 255, t.check = rr(t.check, le, 4, 0)), p = 0, k = 0, t.mode = Vc;
      case Vc:
        for (; k < 16; ) {
          if (l === 0) break e;
          l--, p += r[n++] << k, k += 8;
        }
        t.head && (t.head.xflags = p & 255, t.head.os = p >> 8), t.flags & 512 && t.wrap & 4 && (le[0] = p & 255, le[1] = p >>> 8 & 255, t.check = rr(t.check, le, 2, 0)), p = 0, k = 0, t.mode = Fc;
      case Fc:
        if (t.flags & 1024) {
          for (; k < 16; ) {
            if (l === 0) break e;
            l--, p += r[n++] << k, k += 8;
          }
          t.length = p, t.head && (t.head.extra_len = p), t.flags & 512 && t.wrap & 4 && (le[0] = p & 255, le[1] = p >>> 8 & 255, t.check = rr(t.check, le, 2, 0)), p = 0, k = 0;
        } else t.head && (t.head.extra = null);
        t.mode = Hc;
      case Hc:
        if (t.flags & 1024 && (S = t.length, S > l && (S = l), S && (t.head && (Q = t.head.extra_len - t.length, t.head.extra || (t.head.extra = new Uint8Array(t.head.extra_len)), t.head.extra.set(r.subarray(n, n + S), Q)), t.flags & 512 && t.wrap & 4 && (t.check = rr(t.check, r, S, n)), l -= S, n += S, t.length -= S), t.length)) break e;
        t.length = 0, t.mode = Gc;
      case Gc:
        if (t.flags & 2048) {
          if (l === 0) break e;
          S = 0;
          do
            Q = r[n + S++], t.head && Q && t.length < 65536 && (t.head.name += String.fromCharCode(Q));
          while (Q && S < l);
          if (t.flags & 512 && t.wrap & 4 && (t.check = rr(t.check, r, S, n)), l -= S, n += S, Q) break e;
        } else t.head && (t.head.name = null);
        t.length = 0, t.mode = jc;
      case jc:
        if (t.flags & 4096) {
          if (l === 0) break e;
          S = 0;
          do
            Q = r[n + S++], t.head && Q && t.length < 65536 && (t.head.comment += String.fromCharCode(Q));
          while (Q && S < l);
          if (t.flags & 512 && t.wrap & 4 && (t.check = rr(t.check, r, S, n)), l -= S, n += S, Q) break e;
        } else t.head && (t.head.comment = null);
        t.mode = Yc;
      case Yc:
        if (t.flags & 512) {
          for (; k < 16; ) {
            if (l === 0) break e;
            l--, p += r[n++] << k, k += 8;
          }
          if (t.wrap & 4 && p !== (t.check & 65535)) {
            o.msg = "header crc mismatch", t.mode = mt;
            break;
          }
          p = 0, k = 0;
        }
        t.head && (t.head.hcrc = t.flags >> 9 & 1, t.head.done = true), o.adler = t.check = 0, t.mode = gr;
        break;
      case Zc:
        for (; k < 32; ) {
          if (l === 0) break e;
          l--, p += r[n++] << k, k += 8;
        }
        o.adler = t.check = uu(p), p = 0, k = 0, t.mode = Ei;
      case Ei:
        if (t.havedict === 0) return o.next_out = a, o.avail_out = d, o.next_in = n, o.avail_in = l, t.hold = p, t.bits = k, cb;
        o.adler = t.check = 1, t.mode = gr;
      case gr:
        if (e === ob || e === Xs) break e;
      case mo:
        if (t.last) {
          p >>>= k & 7, k -= k & 7, t.mode = wo;
          break;
        }
        for (; k < 3; ) {
          if (l === 0) break e;
          l--, p += r[n++] << k, k += 8;
        }
        switch (t.last = p & 1, p >>>= 1, k -= 1, p & 3) {
          case 0:
            t.mode = Jc;
            break;
          case 1:
            if (yb(t), t.mode = Qs, e === Xs) {
              p >>>= 2, k -= 2;
              break e;
            }
            break;
          case 2:
            t.mode = Qc;
            break;
          case 3:
            o.msg = "invalid block type", t.mode = mt;
        }
        p >>>= 2, k -= 2;
        break;
      case Jc:
        for (p >>>= k & 7, k -= k & 7; k < 32; ) {
          if (l === 0) break e;
          l--, p += r[n++] << k, k += 8;
        }
        if ((p & 65535) !== (p >>> 16 ^ 65535)) {
          o.msg = "invalid stored block lengths", t.mode = mt;
          break;
        }
        if (t.length = p & 65535, p = 0, k = 0, t.mode = bo, e === Xs) break e;
      case bo:
        t.mode = Xc;
      case Xc:
        if (S = t.length, S) {
          if (S > l && (S = l), S > d && (S = d), S === 0) break e;
          s.set(r.subarray(n, n + S), a), l -= S, n += S, d -= S, a += S, t.length -= S;
          break;
        }
        t.mode = gr;
        break;
      case Qc:
        for (; k < 14; ) {
          if (l === 0) break e;
          l--, p += r[n++] << k, k += 8;
        }
        if (t.nlen = (p & 31) + 257, p >>>= 5, k -= 5, t.ndist = (p & 31) + 1, p >>>= 5, k -= 5, t.ncode = (p & 15) + 4, p >>>= 4, k -= 4, t.nlen > 286 || t.ndist > 30) {
          o.msg = "too many length or distance symbols", t.mode = mt;
          break;
        }
        t.have = 0, t.mode = eu;
      case eu:
        for (; t.have < t.ncode; ) {
          for (; k < 3; ) {
            if (l === 0) break e;
            l--, p += r[n++] << k, k += 8;
          }
          t.lens[L[t.have++]] = p & 7, p >>>= 3, k -= 3;
        }
        for (; t.have < 19; ) t.lens[L[t.have++]] = 0;
        if (t.lencode = t.lendyn, t.lenbits = 7, ne = {
          bits: t.lenbits
        }, de = _s(ib, t.lens, 0, 19, t.lencode, 0, t.work, ne), t.lenbits = ne.bits, de) {
          o.msg = "invalid code lengths set", t.mode = mt;
          break;
        }
        t.have = 0, t.mode = tu;
      case tu:
        for (; t.have < t.nlen + t.ndist; ) {
          for (; M = t.lencode[p & (1 << t.lenbits) - 1], x = M >>> 24, C = M >>> 16 & 255, O = M & 65535, !(x <= k); ) {
            if (l === 0) break e;
            l--, p += r[n++] << k, k += 8;
          }
          if (O < 16) p >>>= x, k -= x, t.lens[t.have++] = O;
          else {
            if (O === 16) {
              for (D = x + 2; k < D; ) {
                if (l === 0) break e;
                l--, p += r[n++] << k, k += 8;
              }
              if (p >>>= x, k -= x, t.have === 0) {
                o.msg = "invalid bit length repeat", t.mode = mt;
                break;
              }
              Q = t.lens[t.have - 1], S = 3 + (p & 3), p >>>= 2, k -= 2;
            } else if (O === 17) {
              for (D = x + 3; k < D; ) {
                if (l === 0) break e;
                l--, p += r[n++] << k, k += 8;
              }
              p >>>= x, k -= x, Q = 0, S = 3 + (p & 7), p >>>= 3, k -= 3;
            } else {
              for (D = x + 7; k < D; ) {
                if (l === 0) break e;
                l--, p += r[n++] << k, k += 8;
              }
              p >>>= x, k -= x, Q = 0, S = 11 + (p & 127), p >>>= 7, k -= 7;
            }
            if (t.have + S > t.nlen + t.ndist) {
              o.msg = "invalid bit length repeat", t.mode = mt;
              break;
            }
            for (; S--; ) t.lens[t.have++] = Q;
          }
        }
        if (t.mode === mt) break;
        if (t.lens[256] === 0) {
          o.msg = "invalid code -- missing end-of-block", t.mode = mt;
          break;
        }
        if (t.lenbits = 9, ne = {
          bits: t.lenbits
        }, de = _s(gh, t.lens, 0, t.nlen, t.lencode, 0, t.work, ne), t.lenbits = ne.bits, de) {
          o.msg = "invalid literal/lengths set", t.mode = mt;
          break;
        }
        if (t.distbits = 6, t.distcode = t.distdyn, ne = {
          bits: t.distbits
        }, de = _s(ph, t.lens, t.nlen, t.ndist, t.distcode, 0, t.work, ne), t.distbits = ne.bits, de) {
          o.msg = "invalid distances set", t.mode = mt;
          break;
        }
        if (t.mode = Qs, e === Xs) break e;
      case Qs:
        t.mode = ei;
      case ei:
        if (l >= 6 && d >= 258) {
          o.next_out = a, o.avail_out = d, o.next_in = n, o.avail_in = l, t.hold = p, t.bits = k, Q0(o, E), a = o.next_out, s = o.output, d = o.avail_out, n = o.next_in, r = o.input, l = o.avail_in, p = t.hold, k = t.bits, t.mode === gr && (t.back = -1);
          break;
        }
        for (t.back = 0; M = t.lencode[p & (1 << t.lenbits) - 1], x = M >>> 24, C = M >>> 16 & 255, O = M & 65535, !(x <= k); ) {
          if (l === 0) break e;
          l--, p += r[n++] << k, k += 8;
        }
        if (C && (C & 240) === 0) {
          for (N = x, ee = C, oe = O; M = t.lencode[oe + ((p & (1 << N + ee) - 1) >> N)], x = M >>> 24, C = M >>> 16 & 255, O = M & 65535, !(N + x <= k); ) {
            if (l === 0) break e;
            l--, p += r[n++] << k, k += 8;
          }
          p >>>= N, k -= N, t.back += N;
        }
        if (p >>>= x, k -= x, t.back += x, t.length = O, C === 0) {
          t.mode = ou;
          break;
        }
        if (C & 32) {
          t.back = -1, t.mode = gr;
          break;
        }
        if (C & 64) {
          o.msg = "invalid literal/length code", t.mode = mt;
          break;
        }
        t.extra = C & 15, t.mode = ru;
      case ru:
        if (t.extra) {
          for (D = t.extra; k < D; ) {
            if (l === 0) break e;
            l--, p += r[n++] << k, k += 8;
          }
          t.length += p & (1 << t.extra) - 1, p >>>= t.extra, k -= t.extra, t.back += t.extra;
        }
        t.was = t.length, t.mode = nu;
      case nu:
        for (; M = t.distcode[p & (1 << t.distbits) - 1], x = M >>> 24, C = M >>> 16 & 255, O = M & 65535, !(x <= k); ) {
          if (l === 0) break e;
          l--, p += r[n++] << k, k += 8;
        }
        if ((C & 240) === 0) {
          for (N = x, ee = C, oe = O; M = t.distcode[oe + ((p & (1 << N + ee) - 1) >> N)], x = M >>> 24, C = M >>> 16 & 255, O = M & 65535, !(N + x <= k); ) {
            if (l === 0) break e;
            l--, p += r[n++] << k, k += 8;
          }
          p >>>= N, k -= N, t.back += N;
        }
        if (p >>>= x, k -= x, t.back += x, C & 64) {
          o.msg = "invalid distance code", t.mode = mt;
          break;
        }
        t.offset = O, t.extra = C & 15, t.mode = su;
      case su:
        if (t.extra) {
          for (D = t.extra; k < D; ) {
            if (l === 0) break e;
            l--, p += r[n++] << k, k += 8;
          }
          t.offset += p & (1 << t.extra) - 1, p >>>= t.extra, k -= t.extra, t.back += t.extra;
        }
        if (t.offset > t.dmax) {
          o.msg = "invalid distance too far back", t.mode = mt;
          break;
        }
        t.mode = iu;
      case iu:
        if (d === 0) break e;
        if (S = E - d, t.offset > S) {
          if (S = t.offset - S, S > t.whave && t.sane) {
            o.msg = "invalid distance too far back", t.mode = mt;
            break;
          }
          S > t.wnext ? (S -= t.wnext, I = t.wsize - S) : I = t.wnext - S, S > t.length && (S = t.length), R = t.window;
        } else R = s, I = a - t.offset, S = t.length;
        S > d && (S = d), d -= S, t.length -= S;
        do
          s[a++] = R[I++];
        while (--S);
        t.length === 0 && (t.mode = ei);
        break;
      case ou:
        if (d === 0) break e;
        s[a++] = t.length, d--, t.mode = ei;
        break;
      case wo:
        if (t.wrap) {
          for (; k < 32; ) {
            if (l === 0) break e;
            l--, p |= r[n++] << k, k += 8;
          }
          if (E -= d, o.total_out += E, t.total += E, t.wrap & 4 && E && (o.adler = t.check = t.flags ? rr(t.check, s, E, a - E) : Ho(t.check, s, E, a - E)), E = d, t.wrap & 4 && (t.flags ? p : uu(p)) !== t.check) {
            o.msg = "incorrect data check", t.mode = mt;
            break;
          }
          p = 0, k = 0;
        }
        t.mode = au;
      case au:
        if (t.wrap && t.flags) {
          for (; k < 32; ) {
            if (l === 0) break e;
            l--, p += r[n++] << k, k += 8;
          }
          if (t.wrap & 4 && p !== (t.total & 4294967295)) {
            o.msg = "incorrect length check", t.mode = mt;
            break;
          }
          p = 0, k = 0;
        }
        t.mode = cu;
      case cu:
        de = ab;
        break e;
      case mt:
        de = yh;
        break e;
      case bh:
        return mh;
      case wh:
      default:
        return Zt;
    }
    return o.next_out = a, o.avail_out = d, o.next_in = n, o.avail_in = l, t.hold = p, t.bits = k, (t.wsize || E !== o.avail_out && t.mode < mt && (t.mode < wo || e !== Uc)) && Ah(o, o.output, o.next_out, E - o.avail_out), A -= o.avail_in, E -= o.avail_out, o.total_in += A, o.total_out += E, t.total += E, t.wrap & 4 && E && (o.adler = t.check = t.flags ? rr(t.check, s, E, o.next_out - E) : Ho(t.check, s, E, o.next_out - E)), o.data_type = t.bits + (t.last ? 64 : 0) + (t.mode === gr ? 128 : 0) + (t.mode === Qs || t.mode === bo ? 256 : 0), (A === 0 && E === 0 || e === Uc) && de === un && (de = ub), de;
  }, bb = (o) => {
    if (yn(o)) return Zt;
    let e = o.state;
    return e.window && (e.window = null), o.state = null, un;
  }, wb = (o, e) => {
    if (yn(o)) return Zt;
    const t = o.state;
    return (t.wrap & 2) === 0 ? Zt : (t.head = e, e.done = false, un);
  }, kb = (o, e) => {
    const t = e.length;
    let r, s, n;
    return yn(o) || (r = o.state, r.wrap !== 0 && r.mode !== Ei) ? Zt : r.mode === Ei && (s = 1, s = Ho(s, e, t, 0), s !== r.check) ? yh : (n = Ah(o, e, t, t), n ? (r.mode = bh, mh) : (r.havedict = 1, un));
  };
  var vb = vh, Sb = Sh, _b = kh, Ab = pb, Ib = _h, Eb = mb, Rb = bb, Mb = wb, xb = kb, Pb = "pako inflate (from Nodeca project)", sr = {
    inflateReset: vb,
    inflateReset2: Sb,
    inflateResetKeep: _b,
    inflateInit: Ab,
    inflateInit2: Ib,
    inflate: Eb,
    inflateEnd: Rb,
    inflateGetHeader: Mb,
    inflateSetDictionary: xb,
    inflateInfo: Pb
  };
  function Tb() {
    this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = false;
  }
  var Lb = Tb;
  const Ih = Object.prototype.toString, { Z_NO_FLUSH: Cb, Z_FINISH: hu, Z_OK: xn, Z_STREAM_END: So, Z_NEED_DICT: _o, Z_STREAM_ERROR: Bb, Z_DATA_ERROR: du, Z_MEM_ERROR: Ob, Z_BUF_ERROR: fu } = hh, Nb = {
    chunkSize: 1024 * 64,
    windowBits: 15,
    to: ""
  };
  function Zi(o) {
    this.options = dh.assign({}, Nb, o || {});
    const e = this.options;
    e.raw && e.windowBits >= 0 && e.windowBits < 16 && (e.windowBits = -e.windowBits, e.windowBits === 0 && (e.windowBits = -15)), e.windowBits >= 0 && e.windowBits < 16 && !(o && o.windowBits) && (e.windowBits += 32), e.windowBits > 15 && e.windowBits < 48 && (e.windowBits & 15) === 0 && (e.windowBits |= 15), this.err = 0, this.msg = "", this.ended = false, this.chunks = [], this.strm = new J0(), this.strm.avail_out = 0;
    let t = sr.inflateInit2(this.strm, e.windowBits);
    if (t !== xn) throw new Error(Go[t]);
    if (this.header = new Lb(), sr.inflateGetHeader(this.strm, this.header), e.dictionary && (typeof e.dictionary == "string" ? e.dictionary = jo.string2buf(e.dictionary) : Ih.call(e.dictionary) === "[object ArrayBuffer]" && (e.dictionary = new Uint8Array(e.dictionary)), e.raw && (t = sr.inflateSetDictionary(this.strm, e.dictionary), t !== xn))) throw new Error(Go[t]);
  }
  Zi.prototype.push = function(o, e) {
    const t = this.strm, r = this.options.chunkSize, s = this.options.dictionary;
    let n, a, l;
    if (this.ended) return false;
    for (e === ~~e ? a = e : a = e === true ? hu : Cb, Ih.call(o) === "[object ArrayBuffer]" ? t.input = new Uint8Array(o) : t.input = o, t.next_in = 0, t.avail_in = t.input.length; ; ) {
      for (t.avail_out === 0 && (t.output = new Uint8Array(r), t.next_out = 0, t.avail_out = r), n = sr.inflate(t, a), n === _o && s && (n = sr.inflateSetDictionary(t, s), n === xn ? n = sr.inflate(t, a) : n === du && (n = _o)); t.avail_in > 0 && n === So && t.state.wrap & 2 && t.state.flags !== 0 && t.input[t.next_in] !== 0; ) sr.inflateReset(t), n = sr.inflate(t, a);
      switch (n) {
        case Bb:
        case du:
        case _o:
        case Ob:
          return this.onEnd(n), this.ended = true, false;
      }
      if (l = t.avail_out, t.next_out && (t.avail_out === 0 || n === So || a > 0)) if (this.options.to === "string") {
        let d = jo.utf8border(t.output, t.next_out), p = t.next_out - d, k = jo.buf2string(t.output, d);
        t.next_out = p, t.avail_out = r - p, p && t.output.set(t.output.subarray(d, d + p), 0), this.onData(k);
      } else this.onData(t.output.length === t.next_out ? t.output : t.output.subarray(0, t.next_out)), t.avail_out = 0, t.next_out = 0;
      if (!((n === xn || n === fu) && l === 0)) {
        if (n === So) return n = sr.inflateEnd(this.strm), this.onEnd(n), this.ended = true, true;
        if (t.avail_in === 0) {
          if (a === hu) return n = sr.inflateEnd(this.strm), this.onEnd(n === xn ? fu : n), this.ended = true, false;
          break;
        }
      }
    }
    return true;
  };
  Zi.prototype.onData = function(o) {
    this.chunks.push(o);
  };
  Zi.prototype.onEnd = function(o) {
    o === xn && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = dh.flattenChunks(this.chunks)), this.chunks = [], this.err = o, this.msg = this.strm.msg;
  };
  function zb(o, e) {
    const t = new Zi(e);
    if (t.push(o, true), t.err) throw t.msg || Go[t.err];
    return t.result;
  }
  var Kb = zb, $b = {
    inflate: Kb
  };
  const { inflate: Ub } = $b;
  var Wb = Ub, Ao = {
    exports: {}
  }, gu;
  function Db() {
    return gu || (gu = 1, (function(o) {
      var e = Object.prototype.hasOwnProperty, t = "~";
      function r() {
      }
      Object.create && (r.prototype = /* @__PURE__ */ Object.create(null), new r().__proto__ || (t = false));
      function s(d, p, k) {
        this.fn = d, this.context = p, this.once = k || false;
      }
      function n(d, p, k, A, E) {
        if (typeof k != "function") throw new TypeError("The listener must be a function");
        var S = new s(k, A || d, E), I = t ? t + p : p;
        return d._events[I] ? d._events[I].fn ? d._events[I] = [
          d._events[I],
          S
        ] : d._events[I].push(S) : (d._events[I] = S, d._eventsCount++), d;
      }
      function a(d, p) {
        --d._eventsCount === 0 ? d._events = new r() : delete d._events[p];
      }
      function l() {
        this._events = new r(), this._eventsCount = 0;
      }
      l.prototype.eventNames = function() {
        var p = [], k, A;
        if (this._eventsCount === 0) return p;
        for (A in k = this._events) e.call(k, A) && p.push(t ? A.slice(1) : A);
        return Object.getOwnPropertySymbols ? p.concat(Object.getOwnPropertySymbols(k)) : p;
      }, l.prototype.listeners = function(p) {
        var k = t ? t + p : p, A = this._events[k];
        if (!A) return [];
        if (A.fn) return [
          A.fn
        ];
        for (var E = 0, S = A.length, I = new Array(S); E < S; E++) I[E] = A[E].fn;
        return I;
      }, l.prototype.listenerCount = function(p) {
        var k = t ? t + p : p, A = this._events[k];
        return A ? A.fn ? 1 : A.length : 0;
      }, l.prototype.emit = function(p, k, A, E, S, I) {
        var R = t ? t + p : p;
        if (!this._events[R]) return false;
        var M = this._events[R], x = arguments.length, C, O;
        if (M.fn) {
          switch (M.once && this.removeListener(p, M.fn, void 0, true), x) {
            case 1:
              return M.fn.call(M.context), true;
            case 2:
              return M.fn.call(M.context, k), true;
            case 3:
              return M.fn.call(M.context, k, A), true;
            case 4:
              return M.fn.call(M.context, k, A, E), true;
            case 5:
              return M.fn.call(M.context, k, A, E, S), true;
            case 6:
              return M.fn.call(M.context, k, A, E, S, I), true;
          }
          for (O = 1, C = new Array(x - 1); O < x; O++) C[O - 1] = arguments[O];
          M.fn.apply(M.context, C);
        } else {
          var N = M.length, ee;
          for (O = 0; O < N; O++) switch (M[O].once && this.removeListener(p, M[O].fn, void 0, true), x) {
            case 1:
              M[O].fn.call(M[O].context);
              break;
            case 2:
              M[O].fn.call(M[O].context, k);
              break;
            case 3:
              M[O].fn.call(M[O].context, k, A);
              break;
            case 4:
              M[O].fn.call(M[O].context, k, A, E);
              break;
            default:
              if (!C) for (ee = 1, C = new Array(x - 1); ee < x; ee++) C[ee - 1] = arguments[ee];
              M[O].fn.apply(M[O].context, C);
          }
        }
        return true;
      }, l.prototype.on = function(p, k, A) {
        return n(this, p, k, A, false);
      }, l.prototype.once = function(p, k, A) {
        return n(this, p, k, A, true);
      }, l.prototype.removeListener = function(p, k, A, E) {
        var S = t ? t + p : p;
        if (!this._events[S]) return this;
        if (!k) return a(this, S), this;
        var I = this._events[S];
        if (I.fn) I.fn === k && (!E || I.once) && (!A || I.context === A) && a(this, S);
        else {
          for (var R = 0, M = [], x = I.length; R < x; R++) (I[R].fn !== k || E && !I[R].once || A && I[R].context !== A) && M.push(I[R]);
          M.length ? this._events[S] = M.length === 1 ? M[0] : M : a(this, S);
        }
        return this;
      }, l.prototype.removeAllListeners = function(p) {
        var k;
        return p ? (k = t ? t + p : p, this._events[k] && a(this, k)) : (this._events = new r(), this._eventsCount = 0), this;
      }, l.prototype.off = l.prototype.removeListener, l.prototype.addListener = l.prototype.on, l.prefixed = t, l.EventEmitter = l, o.exports = l;
    })(Ao)), Ao.exports;
  }
  var qb = Db();
  const Vb = Kn(qb);
  function Fb(o, e) {
    return Array.apply(0, new Array(Math.ceil(o.length / e))).map((t, r) => o.slice(r * e, (r + 1) * e));
  }
  const ys = (o) => "version" in o;
  function Hb(o) {
    return new TextDecoder("utf-8").decode(o);
  }
  function Gb(o) {
    return new TextEncoder().encode(o);
  }
  function pu(o) {
    return vt.encode(o);
  }
  function yu(o) {
    return o.toString("base64");
  }
  function Eh(o) {
    return B.from(o, "base64");
  }
  function jb(o) {
    const e = /* @__PURE__ */ new Map();
    return o.errors && o.errors.forEach((t) => {
      var r;
      let s = (r = t.msg) !== null && r !== void 0 ? r : t.name;
      e.set(t.code, s);
    }), e;
  }
  function Yb(o, ...e) {
    if (o.args.length != e.length) throw new Error("Invalid argument length");
    const t = {};
    let r = 0;
    return o.args.forEach((s) => {
      t[s.name] = e[r], r += 1;
    }), t;
  }
  function Rh(o, e = {}) {
    o.forEach((t) => {
      if ("accounts" in t) Rh(t.accounts, e[t.name]);
      else if (e[t.name] === void 0) throw new Error(`Invalid arguments: ${t.name} not provided.`);
    });
  }
  function Ht(o) {
    return o instanceof $ ? o : new $(o);
  }
  class Zb extends TypeError {
    constructor(e, t) {
      let r;
      const { message: s, ...n } = e, { path: a } = e, l = a.length === 0 ? s : "At path: " + a.join(".") + " -- " + s;
      super(l), this.value = void 0, this.key = void 0, this.type = void 0, this.refinement = void 0, this.path = void 0, this.branch = void 0, this.failures = void 0, Object.assign(this, n), this.name = this.constructor.name, this.failures = () => {
        var d;
        return (d = r) != null ? d : r = [
          e,
          ...t()
        ];
      };
    }
  }
  function Jb(o) {
    return Pn(o) && typeof o[Symbol.iterator] == "function";
  }
  function Pn(o) {
    return typeof o == "object" && o != null;
  }
  function xr(o) {
    return typeof o == "string" ? JSON.stringify(o) : "" + o;
  }
  function Xb(o) {
    const { done: e, value: t } = o.next();
    return e ? void 0 : t;
  }
  function Qb(o, e, t, r) {
    if (o === true) return;
    o === false ? o = {} : typeof o == "string" && (o = {
      message: o
    });
    const { path: s, branch: n } = e, { type: a } = t, { refinement: l, message: d = "Expected a value of type `" + a + "`" + (l ? " with refinement `" + l + "`" : "") + ", but received: `" + xr(r) + "`" } = o;
    return {
      value: r,
      type: a,
      refinement: l,
      key: s[s.length - 1],
      path: s,
      branch: n,
      ...o,
      message: d
    };
  }
  function* mu(o, e, t, r) {
    Jb(o) || (o = [
      o
    ]);
    for (const s of o) {
      const n = Qb(s, e, t, r);
      n && (yield n);
    }
  }
  function* Ca(o, e, t) {
    t === void 0 && (t = {});
    const { path: r = [], branch: s = [
      o
    ], coerce: n = false, mask: a = false } = t, l = {
      path: r,
      branch: s
    };
    if (n && (o = e.coercer(o, l), a && e.type !== "type" && Pn(e.schema) && Pn(o) && !Array.isArray(o))) for (const p in o) e.schema[p] === void 0 && delete o[p];
    let d = true;
    for (const p of e.validator(o, l)) d = false, yield [
      p,
      void 0
    ];
    for (let [p, k, A] of e.entries(o, l)) {
      const E = Ca(k, A, {
        path: p === void 0 ? r : [
          ...r,
          p
        ],
        branch: p === void 0 ? s : [
          ...s,
          k
        ],
        coerce: n,
        mask: a
      });
      for (const S of E) S[0] ? (d = false, yield [
        S[0],
        void 0
      ]) : n && (k = S[1], p === void 0 ? o = k : o instanceof Map ? o.set(p, k) : o instanceof Set ? o.add(k) : Pn(o) && (o[p] = k));
    }
    if (d) for (const p of e.refiner(o, l)) d = false, yield [
      p,
      void 0
    ];
    d && (yield [
      void 0,
      o
    ]);
  }
  class Tr {
    constructor(e) {
      this.TYPE = void 0, this.type = void 0, this.schema = void 0, this.coercer = void 0, this.validator = void 0, this.refiner = void 0, this.entries = void 0;
      const { type: t, schema: r, validator: s, refiner: n, coercer: a = (d) => d, entries: l = function* () {
      } } = e;
      this.type = t, this.schema = r, this.entries = l, this.coercer = a, s ? this.validator = (d, p) => {
        const k = s(d, p);
        return mu(k, p, this, d);
      } : this.validator = () => [], n ? this.refiner = (d, p) => {
        const k = n(d, p);
        return mu(k, p, this, d);
      } : this.refiner = () => [];
    }
    assert(e) {
      return ew(e, this);
    }
    create(e) {
      return Ba(e, this);
    }
    is(e) {
      return Mh(e, this);
    }
    mask(e) {
      return tw(e, this);
    }
    validate(e, t) {
      return t === void 0 && (t = {}), Ws(e, this, t);
    }
  }
  function ew(o, e) {
    const t = Ws(o, e);
    if (t[0]) throw t[0];
  }
  function Ba(o, e) {
    const t = Ws(o, e, {
      coerce: true
    });
    if (t[0]) throw t[0];
    return t[1];
  }
  function tw(o, e) {
    const t = Ws(o, e, {
      coerce: true,
      mask: true
    });
    if (t[0]) throw t[0];
    return t[1];
  }
  function Mh(o, e) {
    return !Ws(o, e)[0];
  }
  function Ws(o, e, t) {
    t === void 0 && (t = {});
    const r = Ca(o, e, t), s = Xb(r);
    return s[0] ? [
      new Zb(s[0], function* () {
        for (const a of r) a[0] && (yield a[0]);
      }),
      void 0
    ] : [
      void 0,
      s[1]
    ];
  }
  function Ds(o, e) {
    return new Tr({
      type: o,
      schema: null,
      validator: e
    });
  }
  function rw() {
    return Ds("any", () => true);
  }
  function Io(o) {
    return new Tr({
      type: "array",
      schema: o,
      *entries(e) {
        if (o && Array.isArray(e)) for (const [t, r] of e.entries()) yield [
          t,
          r,
          o
        ];
      },
      coercer(e) {
        return Array.isArray(e) ? e.slice() : e;
      },
      validator(e) {
        return Array.isArray(e) || "Expected an array value, but received: " + xr(e);
      }
    });
  }
  function nw() {
    return Ds("boolean", (o) => typeof o == "boolean");
  }
  function bu(o) {
    const e = xr(o);
    return new Tr({
      type: "literal",
      schema: o,
      validator(t) {
        return t === o || "Expected the literal `" + e + "`, but received: " + xr(t);
      }
    });
  }
  function ti(o) {
    return new Tr({
      ...o,
      validator: (e, t) => e === null || o.validator(e, t),
      refiner: (e, t) => e === null || o.refiner(e, t)
    });
  }
  function di() {
    return Ds("number", (o) => typeof o == "number" && !isNaN(o) || "Expected a number, but received: " + xr(o));
  }
  function fi(o) {
    return new Tr({
      ...o,
      validator: (e, t) => e === void 0 || o.validator(e, t),
      refiner: (e, t) => e === void 0 || o.refiner(e, t)
    });
  }
  function tn() {
    return Ds("string", (o) => typeof o == "string" || "Expected a string, but received: " + xr(o));
  }
  function Er(o) {
    const e = Object.keys(o);
    return new Tr({
      type: "type",
      schema: o,
      *entries(t) {
        if (Pn(t)) for (const r of e) yield [
          r,
          t[r],
          o[r]
        ];
      },
      validator(t) {
        return Pn(t) || "Expected an object, but received: " + xr(t);
      }
    });
  }
  function xh(o) {
    const e = o.map((t) => t.type).join(" | ");
    return new Tr({
      type: "union",
      schema: null,
      coercer(t, r) {
        return (o.find((n) => {
          const [a] = n.validate(t, {
            coerce: true
          });
          return !a;
        }) || Oa()).coercer(t, r);
      },
      validator(t, r) {
        const s = [];
        for (const n of o) {
          const [...a] = Ca(t, n, r), [l] = a;
          if (l[0]) for (const [d] of a) d && s.push(d);
          else return [];
        }
        return [
          "Expected the value to satisfy a union of `" + e + "`, but received: " + xr(t),
          ...s
        ];
      }
    });
  }
  function Oa() {
    return Ds("unknown", () => true);
  }
  function sw(o, e, t) {
    return new Tr({
      ...o,
      coercer: (r, s) => Mh(r, e) ? o.coercer(t(r, s), s) : o.coercer(r, s)
    });
  }
  const wu = 99;
  async function iw(o, e, t) {
    if (e.length <= wu) return await ku(o, e, t);
    {
      const r = Fb(e, wu);
      return (await Promise.all(r.map((n) => ku(o, n, t)))).flat();
    }
  }
  async function ku(o, e, t) {
    const r = t ?? o.commitment, { value: s, context: n } = await o.getMultipleAccountsInfoAndContext(e, r);
    return s.map((l, d) => l === null ? null : {
      publicKey: e[d],
      account: l,
      context: n
    });
  }
  async function ow(o, e, t, r, s) {
    var n;
    t && t.length > 0 && e.sign(...t);
    const a = e._compile(), l = a.serialize(), p = e._serialize(l).toString("base64"), k = {
      encoding: "base64",
      commitment: r ?? o.commitment
    };
    if (s) {
      const I = (Array.isArray(s) ? s : a.nonProgramIds()).map((R) => R.toBase58());
      k.accounts = {
        encoding: "base64",
        addresses: I
      };
    }
    t && (k.sigVerify = true);
    const A = [
      p,
      k
    ], E = await o._rpcRequest("simulateTransaction", A), S = Ba(E, lw);
    if ("error" in S) {
      let I;
      if ("data" in S.error && (I = (n = S.error.data) === null || n === void 0 ? void 0 : n.logs, I && Array.isArray(I))) {
        const R = `
    `, M = R + I.join(R);
        console.error(S.error.message, M);
      }
      throw new Mr("failed to simulate transaction: " + S.error.message, I);
    }
    return S.result;
  }
  function aw(o) {
    return sw(Ph(o), cw, (e) => "error" in e ? e : {
      ...e,
      result: Ba(e.result, o)
    });
  }
  const cw = Ph(Oa());
  function Ph(o) {
    return xh([
      Er({
        jsonrpc: bu("2.0"),
        id: tn(),
        result: o
      }),
      Er({
        jsonrpc: bu("2.0"),
        id: tn(),
        error: Er({
          code: Oa(),
          message: tn(),
          data: fi(rw())
        })
      })
    ]);
  }
  function uw(o) {
    return aw(Er({
      context: Er({
        slot: di()
      }),
      value: o
    }));
  }
  const lw = uw(Er({
    err: ti(xh([
      Er({}),
      tn()
    ])),
    logs: ti(Io(tn())),
    accounts: fi(ti(Io(ti(Er({
      executable: nw(),
      owner: tn(),
      lamports: di(),
      data: Io(tn()),
      rentEpoch: fi(di())
    }))))),
    unitsConsumed: fi(di())
  }));
  class hw {
    constructor(e, t, r) {
      this.connection = e, this.wallet = t, this.opts = r, this.publicKey = t == null ? void 0 : t.publicKey;
    }
    static defaultOptions() {
      return {
        preflightCommitment: "processed",
        commitment: "processed"
      };
    }
    static local(e, t) {
      throw new Error("Provider local is not available on browser.");
    }
    static env() {
      throw new Error("Provider env is not available on browser.");
    }
    async sendAndConfirm(e, t, r) {
      var s, n, a, l;
      if (r === void 0 && (r = this.opts), ys(e)) t && e.sign(t);
      else if (e.feePayer = (s = e.feePayer) !== null && s !== void 0 ? s : this.wallet.publicKey, e.recentBlockhash = (await this.connection.getLatestBlockhash(r.preflightCommitment)).blockhash, t) for (const p of t) e.partialSign(p);
      e = await this.wallet.signTransaction(e);
      const d = e.serialize();
      try {
        return await vu(this.connection, d, r);
      } catch (p) {
        if (p instanceof Yo) {
          const k = pu(ys(e) ? ((n = e.signatures) === null || n === void 0 ? void 0 : n[0]) || new Uint8Array() : (a = e.signature) !== null && a !== void 0 ? a : new Uint8Array()), A = await this.connection.getTransaction(k, {
            commitment: "confirmed"
          });
          if (A) {
            const E = (l = A.meta) === null || l === void 0 ? void 0 : l.logMessages;
            throw E ? new Mr(p.message, E) : p;
          } else throw p;
        } else throw p;
      }
    }
    async sendAll(e, t) {
      var r, s, n;
      t === void 0 && (t = this.opts);
      const a = (await this.connection.getLatestBlockhash(t.preflightCommitment)).blockhash;
      let l = e.map((k) => {
        var A, E;
        if (ys(k.tx)) {
          let S = k.tx;
          return k.signers && S.sign(k.signers), S;
        } else {
          let S = k.tx, I = (A = k.signers) !== null && A !== void 0 ? A : [];
          return S.feePayer = (E = S.feePayer) !== null && E !== void 0 ? E : this.wallet.publicKey, S.recentBlockhash = a, I.forEach((R) => {
            S.partialSign(R);
          }), S;
        }
      });
      const d = await this.wallet.signAllTransactions(l), p = [];
      for (let k = 0; k < l.length; k += 1) {
        const A = d[k], E = A.serialize();
        try {
          p.push(await vu(this.connection, E, t));
        } catch (S) {
          if (S instanceof Yo) {
            const I = pu(ys(A) ? ((r = A.signatures) === null || r === void 0 ? void 0 : r[0]) || new Uint8Array() : (s = A.signature) !== null && s !== void 0 ? s : new Uint8Array()), R = await this.connection.getTransaction(I, {
              commitment: "confirmed"
            });
            if (R) {
              const M = (n = R.meta) === null || n === void 0 ? void 0 : n.logMessages;
              throw M ? new Mr(S.message, M) : S;
            } else throw S;
          } else throw S;
        }
      }
      return p;
    }
    async simulate(e, t, r, s) {
      let n = (await this.connection.getLatestBlockhash(r ?? this.connection.commitment)).blockhash, a;
      if (ys(e) ? (t && (e.sign(t), e = await this.wallet.signTransaction(e)), a = await this.connection.simulateTransaction(e, {
        commitment: r
      })) : (e.feePayer = e.feePayer || this.wallet.publicKey, e.recentBlockhash = n, t && (e = await this.wallet.signTransaction(e)), a = await ow(this.connection, e, t, r, s)), a.value.err) throw new dw(a.value);
      return a.value;
    }
  }
  class dw extends Error {
    constructor(e, t) {
      super(t), this.simulationResponse = e;
    }
  }
  async function vu(o, e, t) {
    const r = t && {
      skipPreflight: t.skipPreflight,
      preflightCommitment: t.preflightCommitment || t.commitment
    }, s = await o.sendRawTransaction(e, r), n = (await o.confirmTransaction(s, t && t.commitment)).value;
    if (n.err) throw new Yo(`Raw transaction ${s} failed (${JSON.stringify(n)})`);
    return s;
  }
  class Yo extends Error {
    constructor(e) {
      super(e);
    }
  }
  function Zo() {
    return hw.local();
  }
  const fw = /* @__PURE__ */ new Map();
  function Th(o) {
    return fw.get(o) !== void 0;
  }
  class Ri extends Error {
    constructor(e) {
      super(e), this.name = "IdlError";
    }
  }
  class qs {
    constructor(e) {
      this.stack = e;
    }
    static parse(e) {
      var t;
      const r = /^Program (\w*) invoke/, s = /^Program \w* success/, n = [];
      for (let a = 0; a < e.length; a++) {
        if (s.exec(e[a])) {
          n.pop();
          continue;
        }
        const l = (t = r.exec(e[a])) === null || t === void 0 ? void 0 : t[1];
        l && n.push(new $(l));
      }
      return new qs(n);
    }
  }
  class As extends Error {
    constructor(e, t, r, s, n, a) {
      super(r.join(`
`).replace("Program log: ", "")), this.errorLogs = r, this.logs = s, this.error = {
        errorCode: e,
        errorMessage: t,
        comparedValues: a,
        origin: n
      }, this._programErrorStack = qs.parse(s);
    }
    static parse(e) {
      if (!e) return null;
      const t = e.findIndex((E) => E.startsWith("Program log: AnchorError"));
      if (t === -1) return null;
      const r = e[t], s = [
        r
      ];
      let n;
      if (t + 1 < e.length) {
        if (e[t + 1] === "Program log: Left:") {
          const E = /^Program log: (.*)$/, S = E.exec(e[t + 2])[1], I = E.exec(e[t + 4])[1];
          n = [
            new $(S),
            new $(I)
          ], s.push(...e.slice(t + 1, t + 5));
        } else if (e[t + 1].startsWith("Program log: Left:")) {
          const E = /^Program log: (Left|Right): (.*)$/, S = E.exec(e[t + 1])[2], I = E.exec(e[t + 2])[2];
          s.push(...e.slice(t + 1, t + 3)), n = [
            S,
            I
          ];
        }
      }
      const l = /^Program log: AnchorError occurred\. Error Code: (.*)\. Error Number: (\d*)\. Error Message: (.*)\./.exec(r), p = /^Program log: AnchorError thrown in (.*):(\d*)\. Error Code: (.*)\. Error Number: (\d*)\. Error Message: (.*)\./.exec(r), A = /^Program log: AnchorError caused by account: (.*)\. Error Code: (.*)\. Error Number: (\d*)\. Error Message: (.*)\./.exec(r);
      if (l) {
        const [E, S, I] = l.slice(1, 4), R = {
          code: E,
          number: parseInt(S)
        };
        return new As(R, I, s, e, void 0, n);
      } else if (p) {
        const [E, S, I, R, M] = p.slice(1, 6), x = {
          code: I,
          number: parseInt(R)
        }, C = {
          file: E,
          line: parseInt(S)
        };
        return new As(x, M, s, e, C, n);
      } else if (A) {
        const [E, S, I, R] = A.slice(1, 5), M = E, x = {
          code: S,
          number: parseInt(I)
        };
        return new As(x, R, s, e, M, n);
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
  class Mi extends Error {
    constructor(e, t, r) {
      super(), this.code = e, this.msg = t, this.logs = r, r && (this._programErrorStack = qs.parse(r));
    }
    static parse(e, t) {
      const r = e.toString();
      let s;
      if (r.includes("custom program error:")) {
        let l = r.split("custom program error: ");
        if (l.length !== 2) return null;
        s = l[1];
      } else {
        const l = r.match(/"Custom":([0-9]+)}/g);
        if (!l || l.length > 1) return null;
        s = l[0].match(/([0-9]+)/g)[0];
      }
      let n;
      try {
        n = parseInt(s);
      } catch {
        return null;
      }
      let a = t.get(n);
      return a !== void 0 ? new Mi(n, a, e.logs) : (a = gw.get(n), a !== void 0 ? new Mi(n, a, e.logs) : null);
    }
    get program() {
      var e;
      return (e = this._programErrorStack) === null || e === void 0 ? void 0 : e.stack[this._programErrorStack.stack.length - 1];
    }
    get programErrorStack() {
      var e;
      return (e = this._programErrorStack) === null || e === void 0 ? void 0 : e.stack;
    }
    toString() {
      return this.msg;
    }
  }
  function Lh(o, e) {
    Th("debug-logs") && console.log("Translating error:", o);
    const t = As.parse(o.logs);
    if (t) return t;
    const r = Mi.parse(o, e);
    if (r) return r;
    if (o.logs) {
      const s = {
        get: function(n, a) {
          return a === "programErrorStack" ? n.programErrorStack.stack : a === "program" ? n.programErrorStack.stack[o.programErrorStack.stack.length - 1] : Reflect.get(...arguments);
        }
      };
      return o.programErrorStack = qs.parse(o.logs), new Proxy(o, s);
    }
    return o;
  }
  const ae = {
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
  }, gw = /* @__PURE__ */ new Map([
    [
      ae.InstructionMissing,
      "8 byte instruction identifier not provided"
    ],
    [
      ae.InstructionFallbackNotFound,
      "Fallback functions are not supported"
    ],
    [
      ae.InstructionDidNotDeserialize,
      "The program could not deserialize the given instruction"
    ],
    [
      ae.InstructionDidNotSerialize,
      "The program could not serialize the given instruction"
    ],
    [
      ae.IdlInstructionStub,
      "The program was compiled without idl instructions"
    ],
    [
      ae.IdlInstructionInvalidProgram,
      "The transaction was given an invalid program for the IDL instruction"
    ],
    [
      ae.ConstraintMut,
      "A mut constraint was violated"
    ],
    [
      ae.ConstraintHasOne,
      "A has one constraint was violated"
    ],
    [
      ae.ConstraintSigner,
      "A signer constraint was violated"
    ],
    [
      ae.ConstraintRaw,
      "A raw constraint was violated"
    ],
    [
      ae.ConstraintOwner,
      "An owner constraint was violated"
    ],
    [
      ae.ConstraintRentExempt,
      "A rent exemption constraint was violated"
    ],
    [
      ae.ConstraintSeeds,
      "A seeds constraint was violated"
    ],
    [
      ae.ConstraintExecutable,
      "An executable constraint was violated"
    ],
    [
      ae.ConstraintState,
      "Deprecated Error, feel free to replace with something else"
    ],
    [
      ae.ConstraintAssociated,
      "An associated constraint was violated"
    ],
    [
      ae.ConstraintAssociatedInit,
      "An associated init constraint was violated"
    ],
    [
      ae.ConstraintClose,
      "A close constraint was violated"
    ],
    [
      ae.ConstraintAddress,
      "An address constraint was violated"
    ],
    [
      ae.ConstraintZero,
      "Expected zero account discriminant"
    ],
    [
      ae.ConstraintTokenMint,
      "A token mint constraint was violated"
    ],
    [
      ae.ConstraintTokenOwner,
      "A token owner constraint was violated"
    ],
    [
      ae.ConstraintMintMintAuthority,
      "A mint mint authority constraint was violated"
    ],
    [
      ae.ConstraintMintFreezeAuthority,
      "A mint freeze authority constraint was violated"
    ],
    [
      ae.ConstraintMintDecimals,
      "A mint decimals constraint was violated"
    ],
    [
      ae.ConstraintSpace,
      "A space constraint was violated"
    ],
    [
      ae.ConstraintAccountIsNone,
      "A required account for the constraint is None"
    ],
    [
      ae.RequireViolated,
      "A require expression was violated"
    ],
    [
      ae.RequireEqViolated,
      "A require_eq expression was violated"
    ],
    [
      ae.RequireKeysEqViolated,
      "A require_keys_eq expression was violated"
    ],
    [
      ae.RequireNeqViolated,
      "A require_neq expression was violated"
    ],
    [
      ae.RequireKeysNeqViolated,
      "A require_keys_neq expression was violated"
    ],
    [
      ae.RequireGtViolated,
      "A require_gt expression was violated"
    ],
    [
      ae.RequireGteViolated,
      "A require_gte expression was violated"
    ],
    [
      ae.AccountDiscriminatorAlreadySet,
      "The account discriminator was already set on this account"
    ],
    [
      ae.AccountDiscriminatorNotFound,
      "No 8 byte discriminator was found on the account"
    ],
    [
      ae.AccountDiscriminatorMismatch,
      "8 byte discriminator did not match what was expected"
    ],
    [
      ae.AccountDidNotDeserialize,
      "Failed to deserialize the account"
    ],
    [
      ae.AccountDidNotSerialize,
      "Failed to serialize the account"
    ],
    [
      ae.AccountNotEnoughKeys,
      "Not enough account keys given to the instruction"
    ],
    [
      ae.AccountNotMutable,
      "The given account is not mutable"
    ],
    [
      ae.AccountOwnedByWrongProgram,
      "The given account is owned by a different program than expected"
    ],
    [
      ae.InvalidProgramId,
      "Program ID was not as expected"
    ],
    [
      ae.InvalidProgramExecutable,
      "Program account is not executable"
    ],
    [
      ae.AccountNotSigner,
      "The given account did not sign"
    ],
    [
      ae.AccountNotSystemOwned,
      "The given account is not owned by the system program"
    ],
    [
      ae.AccountNotInitialized,
      "The program expected this account to be already initialized"
    ],
    [
      ae.AccountNotProgramData,
      "The given account is not a program data account"
    ],
    [
      ae.AccountNotAssociatedTokenAccount,
      "The given account is not the associated token account"
    ],
    [
      ae.AccountSysvarMismatch,
      "The given public key does not match the required sysvar"
    ],
    [
      ae.AccountReallocExceedsLimit,
      "The account reallocation exceeds the MAX_PERMITTED_DATA_INCREASE limit"
    ],
    [
      ae.AccountDuplicateReallocs,
      "The account was duplicated for more than one reallocation"
    ],
    [
      ae.DeclaredProgramIdMismatch,
      "The declared program id does not match the actual program id"
    ],
    [
      ae.Deprecated,
      "The API being used is deprecated and should no longer be used"
    ]
  ]);
  var Jo = function() {
    return Jo = Object.assign || function(e) {
      for (var t, r = 1, s = arguments.length; r < s; r++) {
        t = arguments[r];
        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
      }
      return e;
    }, Jo.apply(this, arguments);
  }, Xo = function() {
    return Xo = Object.assign || function(e) {
      for (var t, r = 1, s = arguments.length; r < s; r++) {
        t = arguments[r];
        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
      }
      return e;
    }, Xo.apply(this, arguments);
  };
  function pw(o) {
    return o.toLowerCase();
  }
  var yw = [
    /([a-z0-9])([A-Z])/g,
    /([A-Z])([A-Z][a-z])/g
  ], mw = /[^A-Z0-9]+/gi;
  function bw(o, e) {
    e === void 0 && (e = {});
    for (var t = e.splitRegexp, r = t === void 0 ? yw : t, s = e.stripRegexp, n = s === void 0 ? mw : s, a = e.transform, l = a === void 0 ? pw : a, d = e.delimiter, p = d === void 0 ? " " : d, k = Su(Su(o, r, "$1\0$2"), n, "\0"), A = 0, E = k.length; k.charAt(A) === "\0"; ) A++;
    for (; k.charAt(E - 1) === "\0"; ) E--;
    return k.slice(A, E).split("\0").map(l).join(p);
  }
  function Su(o, e, t) {
    return e instanceof RegExp ? o.replace(e, t) : e.reduce(function(r, s) {
      return r.replace(s, t);
    }, o);
  }
  function ww(o, e) {
    return e === void 0 && (e = {}), bw(o, Xo({
      delimiter: "."
    }, e));
  }
  function kw(o, e) {
    return e === void 0 && (e = {}), ww(o, Jo({
      delimiter: "_"
    }, e));
  }
  let Vs = class mr {
    static fieldLayout(e, t) {
      const r = e.name !== void 0 ? bt(e.name) : void 0;
      switch (e.type) {
        case "bool":
          return fe.bool(r);
        case "u8":
          return fe.u8(r);
        case "i8":
          return fe.i8(r);
        case "u16":
          return fe.u16(r);
        case "i16":
          return fe.i16(r);
        case "u32":
          return fe.u32(r);
        case "i32":
          return fe.i32(r);
        case "f32":
          return fe.f32(r);
        case "u64":
          return fe.u64(r);
        case "i64":
          return fe.i64(r);
        case "f64":
          return fe.f64(r);
        case "u128":
          return fe.u128(r);
        case "i128":
          return fe.i128(r);
        case "u256":
          return fe.u256(r);
        case "i256":
          return fe.i256(r);
        case "bytes":
          return fe.vecU8(r);
        case "string":
          return fe.str(r);
        case "publicKey":
          return fe.publicKey(r);
        default: {
          if ("vec" in e.type) return fe.vec(mr.fieldLayout({
            name: void 0,
            type: e.type.vec
          }, t), r);
          if ("option" in e.type) return fe.option(mr.fieldLayout({
            name: void 0,
            type: e.type.option
          }, t), r);
          if ("defined" in e.type) {
            if (!t) throw new Ri("User defined types not provided");
            const s = e.type.defined, n = t.filter((a) => a.name === s);
            if (n.length !== 1) throw new Ri(`Type not found: ${JSON.stringify(e)}`);
            return mr.typeDefLayout(n[0], t, r);
          } else if ("array" in e.type) {
            let s = e.type.array[0], n = e.type.array[1], a = mr.fieldLayout({
              name: void 0,
              type: s
            }, t);
            return fe.array(a, n, r);
          } else throw new Error(`Not yet implemented: ${e}`);
        }
      }
    }
    static typeDefLayout(e, t = [], r) {
      switch (e.type.kind) {
        case "struct": {
          const s = e.type.fields.map((n) => mr.fieldLayout(n, t));
          return fe.struct(s, r);
        }
        case "enum": {
          let s = e.type.variants.map((n) => {
            const a = bt(n.name);
            if (!n.fields) return fe.struct([], a);
            const l = n.fields.map((d, p) => (d == null ? void 0 : d.name) ? mr.fieldLayout(d, t) : mr.fieldLayout({
              type: d,
              name: p.toString()
            }, t));
            return fe.struct(l, a);
          });
          return r !== void 0 ? fe.rustEnum(s).replicate(r) : fe.rustEnum(s, r);
        }
        case "alias":
          return mr.fieldLayout({
            type: e.type.value,
            name: e.name
          }, t);
      }
    }
  };
  const _u = "global";
  class Na {
    constructor(e) {
      this.idl = e, this.ixLayout = Na.parseIxLayout(e);
      const t = /* @__PURE__ */ new Map();
      e.instructions.forEach((r) => {
        const s = Au(_u, r.name);
        t.set(vt.encode(s), {
          layout: this.ixLayout.get(r.name),
          name: r.name
        });
      }), this.sighashLayouts = t;
    }
    encode(e, t) {
      return this._encode(_u, e, t);
    }
    _encode(e, t, r) {
      const s = B.alloc(1e3), n = bt(t), a = this.ixLayout.get(n);
      if (!a) throw new Error(`Unknown method: ${n}`);
      const l = a.encode(r, s), d = s.slice(0, l);
      return B.concat([
        Au(e, t),
        d
      ]);
    }
    static parseIxLayout(e) {
      const t = e.instructions.map((r) => {
        let s = r.args.map((a) => {
          var l, d;
          return Vs.fieldLayout(a, Array.from([
            ...(l = e.accounts) !== null && l !== void 0 ? l : [],
            ...(d = e.types) !== null && d !== void 0 ? d : []
          ]));
        });
        const n = bt(r.name);
        return [
          n,
          fe.struct(s, n)
        ];
      });
      return new Map(t);
    }
    decode(e, t = "hex") {
      typeof e == "string" && (e = t === "hex" ? B.from(e, "hex") : vt.decode(e));
      let r = vt.encode(e.slice(0, 8)), s = e.slice(8);
      const n = this.sighashLayouts.get(r);
      return n ? {
        data: n.layout.decode(s),
        name: n.name
      } : null;
    }
    format(e, t) {
      return nr.format(e, t, this.idl);
    }
  }
  class nr {
    static format(e, t, r) {
      const s = r.instructions.filter((d) => e.name === d.name)[0];
      if (s === void 0) return console.error("Invalid instruction given"), null;
      const n = s.args.map((d) => ({
        name: d.name,
        type: nr.formatIdlType(d.type),
        data: nr.formatIdlData(d, e.data[d.name], r.types)
      })), a = nr.flattenIdlAccounts(s.accounts), l = t.map((d, p) => p < a.length ? {
        name: a[p].name,
        ...d
      } : {
        name: void 0,
        ...d
      });
      return {
        args: n,
        accounts: l
      };
    }
    static formatIdlType(e) {
      if (typeof e == "string") return e;
      if ("vec" in e) return `Vec<${this.formatIdlType(e.vec)}>`;
      if ("option" in e) return `Option<${this.formatIdlType(e.option)}>`;
      if ("defined" in e) return e.defined;
      if ("array" in e) return `Array<${e.array[0]}; ${e.array[1]}>`;
      throw new Error(`Unknown IDL type: ${e}`);
    }
    static formatIdlData(e, t, r) {
      if (typeof e.type == "string") return t.toString();
      if (e.type.hasOwnProperty("vec")) return "[" + t.map((s) => this.formatIdlData({
        name: "",
        type: e.type.vec
      }, s)).join(", ") + "]";
      if (e.type.hasOwnProperty("option")) return t === null ? "null" : this.formatIdlData({
        name: "",
        type: e.type.option
      }, t, r);
      if (e.type.hasOwnProperty("defined")) {
        if (r === void 0) throw new Error("User defined types not provided");
        const s = r.filter((n) => n.name === e.type.defined);
        if (s.length !== 1) throw new Error(`Type not found: ${e.type.defined}`);
        return nr.formatIdlDataDefined(s[0], t, r);
      }
      return "unknown";
    }
    static formatIdlDataDefined(e, t, r) {
      switch (e.type.kind) {
        case "struct": {
          const s = e.type;
          return "{ " + Object.keys(t).map((a) => {
            const l = s.fields.find((d) => d.name === a);
            if (!l) throw new Error("Unable to find type");
            return a + ": " + nr.formatIdlData(l, t[a], r);
          }).join(", ") + " }";
        }
        case "enum": {
          if (e.type.variants.length === 0) return "{}";
          if (e.type.variants[0].name) {
            const s = e.type.variants, n = Object.keys(t)[0], a = t[n], l = Object.keys(a).map((p) => {
              var k;
              const A = a[p], E = (k = s[n]) === null || k === void 0 ? void 0 : k.find((S) => S.name === p);
              if (!E) throw new Error("Unable to find variant");
              return p + ": " + nr.formatIdlData(E, A, r);
            }).join(", "), d = bt(n, {
              pascalCase: true
            });
            return l.length === 0 ? d : `${d} { ${l} }`;
          } else return "Tuple formatting not yet implemented";
        }
        case "alias":
          return nr.formatIdlType(e.type.value);
      }
    }
    static flattenIdlAccounts(e, t) {
      return e.map((r) => {
        const s = vw(r.name);
        if (r.hasOwnProperty("accounts")) {
          const n = t ? `${t} > ${s}` : s;
          return nr.flattenIdlAccounts(r.accounts, n);
        } else return {
          ...r,
          name: t ? `${t} > ${s}` : s
        };
      }).flat();
    }
  }
  function vw(o) {
    const e = o.replace(/([A-Z])/g, " $1");
    return e.charAt(0).toUpperCase() + e.slice(1);
  }
  function Au(o, e) {
    let t = kw(e), r = `${o}:${t}`;
    return B.from(Ln(r).slice(0, 8));
  }
  function Ch(o, e) {
    switch (e.type.kind) {
      case "struct":
        return e.type.fields.map((t) => rn(o, t.type)).reduce((t, r) => t + r, 0);
      case "enum": {
        const t = e.type.variants.map((r) => r.fields ? r.fields.map((s) => typeof s == "object" && "name" in s ? rn(o, s.type) : rn(o, s)).reduce((s, n) => s + n, 0) : 0);
        return Math.max(...t) + 1;
      }
      case "alias":
        return rn(o, e.type.value);
    }
  }
  function rn(o, e) {
    var t, r;
    switch (e) {
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
        if ("vec" in e) return 1;
        if ("option" in e) return 1 + rn(o, e.option);
        if ("coption" in e) return 4 + rn(o, e.coption);
        if ("defined" in e) {
          const s = (r = (t = o.types) === null || t === void 0 ? void 0 : t.filter((a) => a.name === e.defined)) !== null && r !== void 0 ? r : [];
          if (s.length !== 1) throw new Ri(`Type not found: ${JSON.stringify(e)}`);
          let n = s[0];
          return Ch(o, n);
        }
        if ("array" in e) {
          let s = e.array[0], n = e.array[1];
          return rn(o, s) * n;
        }
        throw new Error(`Invalid type ${JSON.stringify(e)}`);
    }
  }
  const Qo = 8;
  function Bh(o) {
    return he.from(Ln(o).slice(0, Qo));
  }
  class _n {
    constructor(e) {
      if (e.accounts === void 0) {
        this.accountLayouts = /* @__PURE__ */ new Map();
        return;
      }
      const t = e.accounts.map((r) => [
        r.name,
        Vs.typeDefLayout(r, e.types)
      ]);
      this.accountLayouts = new Map(t), this.idl = e;
    }
    async encode(e, t) {
      const r = B.alloc(1e3), s = this.accountLayouts.get(e);
      if (!s) throw new Error(`Unknown account: ${e}`);
      const n = s.encode(t, r);
      let a = r.slice(0, n), l = _n.accountDiscriminator(e);
      return B.concat([
        l,
        a
      ]);
    }
    decode(e, t) {
      if (_n.accountDiscriminator(e).compare(t.slice(0, 8))) throw new Error("Invalid account discriminator");
      return this.decodeUnchecked(e, t);
    }
    decodeAny(e) {
      const t = e.slice(0, 8), r = Array.from(this.accountLayouts.keys()).find((s) => _n.accountDiscriminator(s).equals(t));
      if (!r) throw new Error("Account descriminator not found");
      return this.decodeUnchecked(r, e);
    }
    decodeUnchecked(e, t) {
      const r = t.subarray(Qo), s = this.accountLayouts.get(e);
      if (!s) throw new Error(`Unknown account: ${e}`);
      return s.decode(r);
    }
    memcmp(e, t) {
      const r = _n.accountDiscriminator(e);
      return {
        offset: 0,
        bytes: vt.encode(t ? B.concat([
          r,
          t
        ]) : r)
      };
    }
    size(e) {
      var t;
      return Qo + ((t = Ch(this.idl, e)) !== null && t !== void 0 ? t : 0);
    }
    static accountDiscriminator(e) {
      const t = `account:${bt(e, {
        pascalCase: true,
        preserveConsecutiveUppercase: true
      })}`;
      return Bh(t);
    }
  }
  class Sw {
    constructor(e) {
      if (e.events === void 0) {
        this.layouts = /* @__PURE__ */ new Map();
        return;
      }
      const t = e.events.map((r) => {
        let s = {
          name: r.name,
          type: {
            kind: "struct",
            fields: r.fields.map((n) => ({
              name: n.name,
              type: n.type
            }))
          }
        };
        return [
          r.name,
          Vs.typeDefLayout(s, e.types)
        ];
      });
      this.layouts = new Map(t), this.discriminators = new Map(e.events === void 0 ? [] : e.events.map((r) => [
        yu(_w(r.name)),
        r.name
      ]));
    }
    decode(e) {
      let t;
      try {
        t = Eh(e);
      } catch {
        return null;
      }
      const r = yu(t.slice(0, 8)), s = this.discriminators.get(r);
      if (s === void 0) return null;
      const n = this.layouts.get(s);
      if (!n) throw new Error(`Unknown event: ${s}`);
      return {
        data: n.decode(t.slice(8)),
        name: s
      };
    }
  }
  function _w(o) {
    return Bh(`event:${o}`);
  }
  class Aw {
    constructor(e) {
      if (e.types === void 0) {
        this.typeLayouts = /* @__PURE__ */ new Map();
        return;
      }
      const t = e.types.map((r) => [
        r.name,
        Vs.typeDefLayout(r, e.types)
      ]);
      this.typeLayouts = new Map(t), this.idl = e;
    }
    encode(e, t) {
      const r = B.alloc(1e3), s = this.typeLayouts.get(e);
      if (!s) throw new Error(`Unknown type: ${e}`);
      const n = s.encode(t, r);
      return r.slice(0, n);
    }
    decode(e, t) {
      const r = this.typeLayouts.get(e);
      if (!r) throw new Error(`Unknown type: ${e}`);
      return r.decode(t);
    }
  }
  class Oh {
    constructor(e) {
      this.instruction = new Na(e), this.accounts = new _n(e), this.events = new Sw(e), this.types = new Aw(e);
    }
  }
  var Iw = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
  class Dt {
    constructor(e, t) {
      if (!Number.isInteger(e)) throw new TypeError("span must be an integer");
      this.span = e, this.property = t;
    }
    makeDestinationObject() {
      return {};
    }
    decode(e, t) {
      throw new Error("Layout is abstract");
    }
    encode(e, t, r) {
      throw new Error("Layout is abstract");
    }
    getSpan(e, t) {
      if (0 > this.span) throw new RangeError("indeterminate span");
      return this.span;
    }
    replicate(e) {
      const t = Object.create(this.constructor.prototype);
      return Object.assign(t, this), t.property = e, t;
    }
    fromArray(e) {
    }
  }
  var Ji = Dt;
  function Ew(o, e) {
    return e.property ? o + "[" + e.property + "]" : o;
  }
  class nn extends Dt {
    isCount() {
      throw new Error("ExternalLayout is abstract");
    }
  }
  class Nh extends nn {
    constructor(e, t, r) {
      if (!(e instanceof Dt)) throw new TypeError("layout must be a Layout");
      if (t === void 0) t = 0;
      else if (!Number.isInteger(t)) throw new TypeError("offset must be integer or undefined");
      super(e.span, r || e.property), this.layout = e, this.offset = t;
    }
    isCount() {
      return this.layout instanceof Xi || this.layout instanceof zh;
    }
    decode(e, t) {
      return t === void 0 && (t = 0), this.layout.decode(e, t + this.offset);
    }
    encode(e, t, r) {
      return r === void 0 && (r = 0), this.layout.encode(e, t, r + this.offset);
    }
  }
  class Xi extends Dt {
    constructor(e, t) {
      if (super(e, t), 6 < this.span) throw new RangeError("span must not exceed 6 bytes");
    }
    decode(e, t) {
      return t === void 0 && (t = 0), e.readUIntLE(t, this.span);
    }
    encode(e, t, r) {
      return r === void 0 && (r = 0), t.writeUIntLE(e, r, this.span), this.span;
    }
  }
  class zh extends Dt {
    constructor(e, t) {
      if (super(e, t), 6 < this.span) throw new RangeError("span must not exceed 6 bytes");
    }
    decode(e, t) {
      return t === void 0 && (t = 0), e.readUIntBE(t, this.span);
    }
    encode(e, t, r) {
      return r === void 0 && (r = 0), t.writeUIntBE(e, r, this.span), this.span;
    }
  }
  const ea = Math.pow(2, 32);
  function Kh(o) {
    const e = Math.floor(o / ea), t = o - e * ea;
    return {
      hi32: e,
      lo32: t
    };
  }
  function $h(o, e) {
    return o * ea + e;
  }
  class Rw extends Dt {
    constructor(e) {
      super(8, e);
    }
    decode(e, t) {
      t === void 0 && (t = 0);
      const r = e.readUInt32LE(t), s = e.readUInt32LE(t + 4);
      return $h(s, r);
    }
    encode(e, t, r) {
      r === void 0 && (r = 0);
      const s = Kh(e);
      return t.writeUInt32LE(s.lo32, r), t.writeUInt32LE(s.hi32, r + 4), 8;
    }
  }
  class Mw extends Dt {
    constructor(e) {
      super(8, e);
    }
    decode(e, t) {
      t === void 0 && (t = 0);
      const r = e.readUInt32LE(t), s = e.readInt32LE(t + 4);
      return $h(s, r);
    }
    encode(e, t, r) {
      r === void 0 && (r = 0);
      const s = Kh(e);
      return t.writeUInt32LE(s.lo32, r), t.writeInt32LE(s.hi32, r + 4), 8;
    }
  }
  class xw extends Dt {
    constructor(e, t, r) {
      if (!(Array.isArray(e) && e.reduce((n, a) => n && a instanceof Dt, true))) throw new TypeError("fields must be array of Layout instances");
      typeof t == "boolean" && r === void 0 && (r = t, t = void 0);
      for (const n of e) if (0 > n.span && n.property === void 0) throw new Error("fields cannot contain unnamed variable-length layout");
      let s = -1;
      try {
        s = e.reduce((n, a) => n + a.getSpan(), 0);
      } catch {
      }
      super(s, t), this.fields = e, this.decodePrefixes = !!r;
    }
    getSpan(e, t) {
      if (0 <= this.span) return this.span;
      t === void 0 && (t = 0);
      let r = 0;
      try {
        r = this.fields.reduce((s, n) => {
          const a = n.getSpan(e, t);
          return t += a, s + a;
        }, 0);
      } catch {
        throw new RangeError("indeterminate span");
      }
      return r;
    }
    decode(e, t) {
      t === void 0 && (t = 0);
      const r = this.makeDestinationObject();
      for (const s of this.fields) if (s.property !== void 0 && (r[s.property] = s.decode(e, t)), t += s.getSpan(e, t), this.decodePrefixes && e.length === t) break;
      return r;
    }
    encode(e, t, r) {
      r === void 0 && (r = 0);
      const s = r;
      let n = 0, a = 0;
      for (const l of this.fields) {
        let d = l.span;
        if (a = 0 < d ? d : 0, l.property !== void 0) {
          const p = e[l.property];
          p !== void 0 && (a = l.encode(p, t, r), 0 > d && (d = l.getSpan(t, r)));
        }
        n = r, r += d;
      }
      return n + a - s;
    }
    fromArray(e) {
      const t = this.makeDestinationObject();
      for (const r of this.fields) r.property !== void 0 && 0 < e.length && (t[r.property] = e.shift());
      return t;
    }
    layoutFor(e) {
      if (typeof e != "string") throw new TypeError("property must be string");
      for (const t of this.fields) if (t.property === e) return t;
    }
    offsetOf(e) {
      if (typeof e != "string") throw new TypeError("property must be string");
      let t = 0;
      for (const r of this.fields) {
        if (r.property === e) return t;
        0 > r.span ? t = -1 : 0 <= t && (t += r.span);
      }
    }
  }
  class Uh {
    constructor(e) {
      this.property = e;
    }
    decode() {
      throw new Error("UnionDiscriminator is abstract");
    }
    encode() {
      throw new Error("UnionDiscriminator is abstract");
    }
  }
  class Iu extends Uh {
    constructor(e, t) {
      if (!(e instanceof nn && e.isCount())) throw new TypeError("layout must be an unsigned integer ExternalLayout");
      super(t || e.property || "variant"), this.layout = e;
    }
    decode(e, t) {
      return this.layout.decode(e, t);
    }
    encode(e, t, r) {
      return this.layout.encode(e, t, r);
    }
  }
  class Wh extends Dt {
    constructor(e, t, r) {
      const s = e instanceof Xi || e instanceof zh;
      if (s) e = new Iu(new Nh(e));
      else if (e instanceof nn && e.isCount()) e = new Iu(e);
      else if (!(e instanceof Uh)) throw new TypeError("discr must be a UnionDiscriminator or an unsigned integer layout");
      if (t === void 0 && (t = null), !(t === null || t instanceof Dt)) throw new TypeError("defaultLayout must be null or a Layout");
      if (t !== null) {
        if (0 > t.span) throw new Error("defaultLayout must have constant span");
        t.property === void 0 && (t = t.replicate("content"));
      }
      let n = -1;
      t && (n = t.span, 0 <= n && s && (n += e.layout.span)), super(n, r), this.discriminator = e, this.usesPrefixDiscriminator = s, this.defaultLayout = t, this.registry = {};
      let a = this.defaultGetSourceVariant.bind(this);
      this.getSourceVariant = function(l) {
        return a(l);
      }, this.configGetSourceVariant = function(l) {
        a = l.bind(this);
      };
    }
    getSpan(e, t) {
      if (0 <= this.span) return this.span;
      t === void 0 && (t = 0);
      const r = this.getVariant(e, t);
      if (!r) throw new Error("unable to determine span for unrecognized variant");
      return r.getSpan(e, t);
    }
    defaultGetSourceVariant(e) {
      if (e.hasOwnProperty(this.discriminator.property)) {
        if (this.defaultLayout && e.hasOwnProperty(this.defaultLayout.property)) return;
        const t = this.registry[e[this.discriminator.property]];
        if (t && (!t.layout || e.hasOwnProperty(t.property))) return t;
      } else for (const t in this.registry) {
        const r = this.registry[t];
        if (e.hasOwnProperty(r.property)) return r;
      }
      throw new Error("unable to infer src variant");
    }
    decode(e, t) {
      t === void 0 && (t = 0);
      let r;
      const s = this.discriminator, n = s.decode(e, t);
      let a = this.registry[n];
      if (a === void 0) {
        let l = 0;
        a = this.defaultLayout, this.usesPrefixDiscriminator && (l = s.layout.span), r = this.makeDestinationObject(), r[s.property] = n, r[a.property] = this.defaultLayout.decode(e, t + l);
      } else r = a.decode(e, t);
      return r;
    }
    encode(e, t, r) {
      r === void 0 && (r = 0);
      const s = this.getSourceVariant(e);
      if (s === void 0) {
        const n = this.discriminator, a = this.defaultLayout;
        let l = 0;
        return this.usesPrefixDiscriminator && (l = n.layout.span), n.encode(e[n.property], t, r), l + a.encode(e[a.property], t, r + l);
      }
      return s.encode(e, t, r);
    }
    addVariant(e, t, r) {
      const s = new Pw(this, e, t, r);
      return this.registry[e] = s, s;
    }
    getVariant(e, t) {
      let r = e;
      return he.isBuffer(e) && (t === void 0 && (t = 0), r = this.discriminator.decode(e, t)), this.registry[r];
    }
  }
  class Pw extends Dt {
    constructor(e, t, r, s) {
      if (!(e instanceof Wh)) throw new TypeError("union must be a Union");
      if (!Number.isInteger(t) || 0 > t) throw new TypeError("variant must be a (non-negative) integer");
      if (typeof r == "string" && s === void 0 && (s = r, r = null), r) {
        if (!(r instanceof Dt)) throw new TypeError("layout must be a Layout");
        if (e.defaultLayout !== null && 0 <= r.span && r.span > e.defaultLayout.span) throw new Error("variant span exceeds span of containing union");
        if (typeof s != "string") throw new TypeError("variant must have a String property");
      }
      let n = e.span;
      0 > e.span && (n = r ? r.span : 0, 0 <= n && e.usesPrefixDiscriminator && (n += e.discriminator.layout.span)), super(n, s), this.union = e, this.variant = t, this.layout = r || null;
    }
    getSpan(e, t) {
      if (0 <= this.span) return this.span;
      t === void 0 && (t = 0);
      let r = 0;
      return this.union.usesPrefixDiscriminator && (r = this.union.discriminator.layout.span), r + this.layout.getSpan(e, t + r);
    }
    decode(e, t) {
      const r = this.makeDestinationObject();
      if (t === void 0 && (t = 0), this !== this.union.getVariant(e, t)) throw new Error("variant mismatch");
      let s = 0;
      return this.union.usesPrefixDiscriminator && (s = this.union.discriminator.layout.span), this.layout ? r[this.property] = this.layout.decode(e, t + s) : this.property ? r[this.property] = true : this.union.usesPrefixDiscriminator && (r[this.union.discriminator.property] = this.variant), r;
    }
    encode(e, t, r) {
      r === void 0 && (r = 0);
      let s = 0;
      if (this.union.usesPrefixDiscriminator && (s = this.union.discriminator.layout.span), this.layout && !e.hasOwnProperty(this.property)) throw new TypeError("variant lacks property " + this.property);
      this.union.discriminator.encode(this.variant, t, r);
      let n = s;
      if (this.layout && (this.layout.encode(e[this.property], t, r + s), n += this.layout.getSpan(t, r + s), 0 <= this.union.span && n > this.union.span)) throw new Error("encoded variant overruns containing union");
      return n;
    }
    fromArray(e) {
      if (this.layout) return this.layout.fromArray(e);
    }
  }
  class Tw extends Dt {
    constructor(e, t) {
      if (!(e instanceof nn && e.isCount() || Number.isInteger(e) && 0 <= e)) throw new TypeError("length must be positive integer or an unsigned integer ExternalLayout");
      let r = -1;
      e instanceof nn || (r = e), super(r, t), this.length = e;
    }
    getSpan(e, t) {
      let r = this.span;
      return 0 > r && (r = this.length.decode(e, t)), r;
    }
    decode(e, t) {
      t === void 0 && (t = 0);
      let r = this.span;
      return 0 > r && (r = this.length.decode(e, t)), e.slice(t, t + r);
    }
    encode(e, t, r) {
      let s = this.length;
      if (this.length instanceof nn && (s = e.length), !(he.isBuffer(e) && s === e.length)) throw new TypeError(Ew("Blob.encode", this) + " requires (length " + s + ") Buffer as src");
      if (r + s > t.length) throw new RangeError("encoding overruns Buffer");
      return t.write(e.toString("hex"), r, s, "hex"), this.length instanceof nn && this.length.encode(s, t, r), s;
    }
  }
  var Lw = ((o, e, t) => new Nh(o, e, t)), Cw = ((o) => new Xi(1, o)), kr = ((o) => new Xi(4, o)), Bw = ((o) => new Rw(o)), vr = ((o) => new Mw(o)), Bt = ((o, e, t) => new xw(o, e, t)), Dh = ((o, e, t) => new Wh(o, e, t)), Fs = ((o, e) => new Tw(o, e));
  class Ow extends Ji {
    constructor(e) {
      super(-1, e), this.property = e, this.layout = Bt([
        kr("length"),
        kr("lengthPadding"),
        Fs(Lw(kr(), -8), "chars")
      ], this.property);
    }
    encode(e, t, r = 0) {
      if (e == null) return this.layout.span;
      const s = {
        chars: he.from(e, "utf8")
      };
      return this.layout.encode(s, t, r);
    }
    decode(e, t = 0) {
      return this.layout.decode(e, t).chars.toString();
    }
    getSpan(e, t = 0) {
      return kr().span + kr().span + new Ti(new Uint8Array(e).slice(t, t + 4), 10, "le").toNumber();
    }
  }
  function Qi(o) {
    return new Ow(o);
  }
  function Jt(o) {
    return Fs(32, o);
  }
  const Ft = Dh(kr("instruction"));
  Ft.addVariant(0, Bt([
    vr("lamports"),
    vr("space"),
    Jt("owner")
  ]), "createAccount");
  Ft.addVariant(1, Bt([
    Jt("owner")
  ]), "assign");
  Ft.addVariant(2, Bt([
    vr("lamports")
  ]), "transfer");
  Ft.addVariant(3, Bt([
    Jt("base"),
    Qi("seed"),
    vr("lamports"),
    vr("space"),
    Jt("owner")
  ]), "createAccountWithSeed");
  Ft.addVariant(4, Bt([
    Jt("authorized")
  ]), "advanceNonceAccount");
  Ft.addVariant(5, Bt([
    vr("lamports")
  ]), "withdrawNonceAccount");
  Ft.addVariant(6, Bt([
    Jt("authorized")
  ]), "initializeNonceAccount");
  Ft.addVariant(7, Bt([
    Jt("authorized")
  ]), "authorizeNonceAccount");
  Ft.addVariant(8, Bt([
    vr("space")
  ]), "allocate");
  Ft.addVariant(9, Bt([
    Jt("base"),
    Qi("seed"),
    vr("space"),
    Jt("owner")
  ]), "allocateWithSeed");
  Ft.addVariant(10, Bt([
    Jt("base"),
    Qi("seed"),
    Jt("owner")
  ]), "assignWithSeed");
  Ft.addVariant(11, Bt([
    vr("lamports"),
    Qi("seed"),
    Jt("owner")
  ]), "transferWithSeed");
  Math.max(...Object.values(Ft.registry).map((o) => o.span));
  class Nw extends Ji {
    constructor(e, t, r, s) {
      super(e.span, s), this.layout = e, this.decoder = t, this.encoder = r;
    }
    decode(e, t) {
      return this.decoder(this.layout.decode(e, t));
    }
    encode(e, t, r) {
      return this.layout.encode(this.encoder(e), t, r);
    }
    getSpan(e, t) {
      return this.layout.getSpan(e, t);
    }
  }
  function Eu(o) {
    return new Nw(Fs(32), (e) => new $(e), (e) => e.toBuffer(), o);
  }
  Bt([
    kr("version"),
    kr("state"),
    Eu("authorizedPubkey"),
    Eu("nonce"),
    Bt([
      Bw("lamportsPerSignature")
    ], "feeCalculator")
  ]);
  function zw(o, ...e) {
    let t = [
      B.from([
        97,
        110,
        99,
        104,
        111,
        114
      ])
    ];
    e.forEach((s) => {
      t.push(s instanceof B ? s : Ht(s).toBuffer());
    });
    const [r] = $.findProgramAddressSync(t, Ht(o));
    return r;
  }
  const Kw = new $("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"), $w = new $("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL");
  var Ru = {
    exports: {}
  };
  (function(o, e) {
    var t = typeof self < "u" ? self : Iw, r = (function() {
      function n() {
        this.fetch = false, this.DOMException = t.DOMException;
      }
      return n.prototype = t, new n();
    })();
    (function(n) {
      (function(a) {
        var l = {
          searchParams: "URLSearchParams" in n,
          iterable: "Symbol" in n && "iterator" in Symbol,
          blob: "FileReader" in n && "Blob" in n && (function() {
            try {
              return new Blob(), true;
            } catch {
              return false;
            }
          })(),
          formData: "FormData" in n,
          arrayBuffer: "ArrayBuffer" in n
        };
        function d(i) {
          return i && DataView.prototype.isPrototypeOf(i);
        }
        if (l.arrayBuffer) var p = [
          "[object Int8Array]",
          "[object Uint8Array]",
          "[object Uint8ClampedArray]",
          "[object Int16Array]",
          "[object Uint16Array]",
          "[object Int32Array]",
          "[object Uint32Array]",
          "[object Float32Array]",
          "[object Float64Array]"
        ], k = ArrayBuffer.isView || function(i) {
          return i && p.indexOf(Object.prototype.toString.call(i)) > -1;
        };
        function A(i) {
          if (typeof i != "string" && (i = String(i)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(i)) throw new TypeError("Invalid character in header field name");
          return i.toLowerCase();
        }
        function E(i) {
          return typeof i != "string" && (i = String(i)), i;
        }
        function S(i) {
          var c = {
            next: function() {
              var h = i.shift();
              return {
                done: h === void 0,
                value: h
              };
            }
          };
          return l.iterable && (c[Symbol.iterator] = function() {
            return c;
          }), c;
        }
        function I(i) {
          this.map = {}, i instanceof I ? i.forEach(function(c, h) {
            this.append(h, c);
          }, this) : Array.isArray(i) ? i.forEach(function(c) {
            this.append(c[0], c[1]);
          }, this) : i && Object.getOwnPropertyNames(i).forEach(function(c) {
            this.append(c, i[c]);
          }, this);
        }
        I.prototype.append = function(i, c) {
          i = A(i), c = E(c);
          var h = this.map[i];
          this.map[i] = h ? h + ", " + c : c;
        }, I.prototype.delete = function(i) {
          delete this.map[A(i)];
        }, I.prototype.get = function(i) {
          return i = A(i), this.has(i) ? this.map[i] : null;
        }, I.prototype.has = function(i) {
          return this.map.hasOwnProperty(A(i));
        }, I.prototype.set = function(i, c) {
          this.map[A(i)] = E(c);
        }, I.prototype.forEach = function(i, c) {
          for (var h in this.map) this.map.hasOwnProperty(h) && i.call(c, this.map[h], h, this);
        }, I.prototype.keys = function() {
          var i = [];
          return this.forEach(function(c, h) {
            i.push(h);
          }), S(i);
        }, I.prototype.values = function() {
          var i = [];
          return this.forEach(function(c) {
            i.push(c);
          }), S(i);
        }, I.prototype.entries = function() {
          var i = [];
          return this.forEach(function(c, h) {
            i.push([
              h,
              c
            ]);
          }), S(i);
        }, l.iterable && (I.prototype[Symbol.iterator] = I.prototype.entries);
        function R(i) {
          if (i.bodyUsed) return Promise.reject(new TypeError("Already read"));
          i.bodyUsed = true;
        }
        function M(i) {
          return new Promise(function(c, h) {
            i.onload = function() {
              c(i.result);
            }, i.onerror = function() {
              h(i.error);
            };
          });
        }
        function x(i) {
          var c = new FileReader(), h = M(c);
          return c.readAsArrayBuffer(i), h;
        }
        function C(i) {
          var c = new FileReader(), h = M(c);
          return c.readAsText(i), h;
        }
        function O(i) {
          for (var c = new Uint8Array(i), h = new Array(c.length), g = 0; g < c.length; g++) h[g] = String.fromCharCode(c[g]);
          return h.join("");
        }
        function N(i) {
          if (i.slice) return i.slice(0);
          var c = new Uint8Array(i.byteLength);
          return c.set(new Uint8Array(i)), c.buffer;
        }
        function ee() {
          return this.bodyUsed = false, this._initBody = function(i) {
            this._bodyInit = i, i ? typeof i == "string" ? this._bodyText = i : l.blob && Blob.prototype.isPrototypeOf(i) ? this._bodyBlob = i : l.formData && FormData.prototype.isPrototypeOf(i) ? this._bodyFormData = i : l.searchParams && URLSearchParams.prototype.isPrototypeOf(i) ? this._bodyText = i.toString() : l.arrayBuffer && l.blob && d(i) ? (this._bodyArrayBuffer = N(i.buffer), this._bodyInit = new Blob([
              this._bodyArrayBuffer
            ])) : l.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(i) || k(i)) ? this._bodyArrayBuffer = N(i) : this._bodyText = i = Object.prototype.toString.call(i) : this._bodyText = "", this.headers.get("content-type") || (typeof i == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : l.searchParams && URLSearchParams.prototype.isPrototypeOf(i) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
          }, l.blob && (this.blob = function() {
            var i = R(this);
            if (i) return i;
            if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
            if (this._bodyArrayBuffer) return Promise.resolve(new Blob([
              this._bodyArrayBuffer
            ]));
            if (this._bodyFormData) throw new Error("could not read FormData body as blob");
            return Promise.resolve(new Blob([
              this._bodyText
            ]));
          }, this.arrayBuffer = function() {
            return this._bodyArrayBuffer ? R(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(x);
          }), this.text = function() {
            var i = R(this);
            if (i) return i;
            if (this._bodyBlob) return C(this._bodyBlob);
            if (this._bodyArrayBuffer) return Promise.resolve(O(this._bodyArrayBuffer));
            if (this._bodyFormData) throw new Error("could not read FormData body as text");
            return Promise.resolve(this._bodyText);
          }, l.formData && (this.formData = function() {
            return this.text().then(le);
          }), this.json = function() {
            return this.text().then(JSON.parse);
          }, this;
        }
        var oe = [
          "DELETE",
          "GET",
          "HEAD",
          "OPTIONS",
          "POST",
          "PUT"
        ];
        function Q(i) {
          var c = i.toUpperCase();
          return oe.indexOf(c) > -1 ? c : i;
        }
        function de(i, c) {
          c = c || {};
          var h = c.body;
          if (i instanceof de) {
            if (i.bodyUsed) throw new TypeError("Already read");
            this.url = i.url, this.credentials = i.credentials, c.headers || (this.headers = new I(i.headers)), this.method = i.method, this.mode = i.mode, this.signal = i.signal, !h && i._bodyInit != null && (h = i._bodyInit, i.bodyUsed = true);
          } else this.url = String(i);
          if (this.credentials = c.credentials || this.credentials || "same-origin", (c.headers || !this.headers) && (this.headers = new I(c.headers)), this.method = Q(c.method || this.method || "GET"), this.mode = c.mode || this.mode || null, this.signal = c.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && h) throw new TypeError("Body not allowed for GET or HEAD requests");
          this._initBody(h);
        }
        de.prototype.clone = function() {
          return new de(this, {
            body: this._bodyInit
          });
        };
        function le(i) {
          var c = new FormData();
          return i.trim().split("&").forEach(function(h) {
            if (h) {
              var g = h.split("="), w = g.shift().replace(/\+/g, " "), v = g.join("=").replace(/\+/g, " ");
              c.append(decodeURIComponent(w), decodeURIComponent(v));
            }
          }), c;
        }
        function ne(i) {
          var c = new I(), h = i.replace(/\r?\n[\t ]+/g, " ");
          return h.split(/\r?\n/).forEach(function(g) {
            var w = g.split(":"), v = w.shift().trim();
            if (v) {
              var _ = w.join(":").trim();
              c.append(v, _);
            }
          }), c;
        }
        ee.call(de.prototype);
        function D(i, c) {
          c || (c = {}), this.type = "default", this.status = c.status === void 0 ? 200 : c.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in c ? c.statusText : "OK", this.headers = new I(c.headers), this.url = c.url || "", this._initBody(i);
        }
        ee.call(D.prototype), D.prototype.clone = function() {
          return new D(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new I(this.headers),
            url: this.url
          });
        }, D.error = function() {
          var i = new D(null, {
            status: 0,
            statusText: ""
          });
          return i.type = "error", i;
        };
        var L = [
          301,
          302,
          303,
          307,
          308
        ];
        D.redirect = function(i, c) {
          if (L.indexOf(c) === -1) throw new RangeError("Invalid status code");
          return new D(null, {
            status: c,
            headers: {
              location: i
            }
          });
        }, a.DOMException = n.DOMException;
        try {
          new a.DOMException();
        } catch {
          a.DOMException = function(c, h) {
            this.message = c, this.name = h;
            var g = Error(c);
            this.stack = g.stack;
          }, a.DOMException.prototype = Object.create(Error.prototype), a.DOMException.prototype.constructor = a.DOMException;
        }
        function f(i, c) {
          return new Promise(function(h, g) {
            var w = new de(i, c);
            if (w.signal && w.signal.aborted) return g(new a.DOMException("Aborted", "AbortError"));
            var v = new XMLHttpRequest();
            function _() {
              v.abort();
            }
            v.onload = function() {
              var y = {
                status: v.status,
                statusText: v.statusText,
                headers: ne(v.getAllResponseHeaders() || "")
              };
              y.url = "responseURL" in v ? v.responseURL : y.headers.get("X-Request-URL");
              var u = "response" in v ? v.response : v.responseText;
              h(new D(u, y));
            }, v.onerror = function() {
              g(new TypeError("Network request failed"));
            }, v.ontimeout = function() {
              g(new TypeError("Network request failed"));
            }, v.onabort = function() {
              g(new a.DOMException("Aborted", "AbortError"));
            }, v.open(w.method, w.url, true), w.credentials === "include" ? v.withCredentials = true : w.credentials === "omit" && (v.withCredentials = false), "responseType" in v && l.blob && (v.responseType = "blob"), w.headers.forEach(function(y, u) {
              v.setRequestHeader(u, y);
            }), w.signal && (w.signal.addEventListener("abort", _), v.onreadystatechange = function() {
              v.readyState === 4 && w.signal.removeEventListener("abort", _);
            }), v.send(typeof w._bodyInit > "u" ? null : w._bodyInit);
          });
        }
        return f.polyfill = true, n.fetch || (n.fetch = f, n.Headers = I, n.Request = de, n.Response = D), a.Headers = I, a.Request = de, a.Response = D, a.fetch = f, Object.defineProperty(a, "__esModule", {
          value: true
        }), a;
      })({});
    })(r), r.fetch.ponyfill = true, delete r.fetch.polyfill;
    var s = r;
    e = s.fetch, e.default = s.fetch, e.fetch = s.fetch, e.Headers = s.Headers, e.Request = s.Request, e.Response = s.Response, o.exports = e;
  })(Ru, Ru.exports);
  fe.rustEnum([
    fe.struct([], "uninitialized"),
    fe.struct([
      fe.option(fe.publicKey(), "authorityAddress")
    ], "buffer"),
    fe.struct([
      fe.publicKey("programdataAddress")
    ], "program"),
    fe.struct([
      fe.u64("slot"),
      fe.option(fe.publicKey(), "upgradeAuthorityAddress")
    ], "programData")
  ], void 0, fe.u32());
  function Uw(o) {
    return "accounts" in o;
  }
  async function Ww(o) {
    const e = (await $.findProgramAddress([], o))[0];
    return await $.createWithSeed(e, Dw(), o);
  }
  function Dw() {
    return "anchor:idl";
  }
  const qw = fe.struct([
    fe.publicKey("authority"),
    fe.vecU8("data")
  ]);
  function Vw(o) {
    return qw.decode(o);
  }
  function eo(o, e) {
    var t, r;
    let s = {};
    const n = o.args ? o.args.length : 0;
    if (e.length > n) {
      if (e.length !== n + 1) throw new Error(`provided too many arguments ${e} to instruction ${o == null ? void 0 : o.name} expecting: ${(r = (t = o.args) === null || t === void 0 ? void 0 : t.map((a) => a.name)) !== null && r !== void 0 ? r : []}`);
      s = e.pop();
    }
    return [
      e,
      s
    ];
  }
  class xi {
    static build(e, t, r) {
      if (e.name === "_inner") throw new Ri("the _inner name is reserved");
      const s = (...n) => {
        const [a, l] = eo(e, [
          ...n
        ]);
        Rh(e.accounts, l.accounts), Fw(e, ...n);
        const d = s.accounts(l.accounts);
        return l.remainingAccounts !== void 0 && d.push(...l.remainingAccounts), Th("debug-logs") && console.log("Outgoing account metas:", d), new dt({
          keys: d,
          programId: r,
          data: t(e.name, Yb(e, ...a))
        });
      };
      return s.accounts = (n) => xi.accountsArray(n, e.accounts, r, e.name), s;
    }
    static accountsArray(e, t, r, s) {
      return e ? t.map((n) => {
        if (("accounts" in n ? n.accounts : void 0) !== void 0) {
          const l = e[n.name];
          return xi.accountsArray(l, n.accounts, r, s).flat();
        } else {
          const l = n;
          let d;
          try {
            d = Ht(e[n.name]);
          } catch {
            throw new Error(`Wrong input type for account "${n.name}" in the instruction accounts object${s !== void 0 ? ' for instruction "' + s + '"' : ""}. Expected PublicKey or string.`);
          }
          const p = l.isOptional && d.equals(r), k = l.isMut && !p, A = l.isSigner && !p;
          return {
            pubkey: d,
            isWritable: k,
            isSigner: A
          };
        }
      }).flat() : [];
    }
  }
  function Fw(o, ...e) {
  }
  class Hw {
    static build(e, t) {
      return (...s) => {
        var n, a, l;
        const [, d] = eo(e, [
          ...s
        ]), p = new at();
        if (d.preInstructions && d.instructions) throw new Error("instructions is deprecated, use preInstructions");
        return (n = d.preInstructions) === null || n === void 0 || n.forEach((k) => p.add(k)), (a = d.instructions) === null || a === void 0 || a.forEach((k) => p.add(k)), p.add(t(...s)), (l = d.postInstructions) === null || l === void 0 || l.forEach((k) => p.add(k)), p;
      };
    }
  }
  class Gw {
    static build(e, t, r, s) {
      return async (...a) => {
        var l;
        const d = t(...a), [, p] = eo(e, [
          ...a
        ]);
        if (s.sendAndConfirm === void 0) throw new Error("This function requires 'Provider.sendAndConfirm' to be implemented.");
        try {
          return await s.sendAndConfirm(d, (l = p.signers) !== null && l !== void 0 ? l : [], p.options);
        } catch (k) {
          throw Lh(k, r);
        }
      };
    }
  }
  class jw {
    static build(e, t, r, s) {
      var n;
      const a = {};
      return (n = e.accounts) === null || n === void 0 || n.forEach((l) => {
        const d = bt(l.name);
        a[d] = new Yw(e, l, r, s, t);
      }), a;
    }
  }
  class Yw {
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
    constructor(e, t, r, s, n) {
      this._idlAccount = t, this._programId = r, this._provider = s ?? Zo(), this._coder = n ?? new Oh(e), this._size = this._coder.accounts.size(t);
    }
    async fetchNullable(e, t) {
      const { data: r } = await this.fetchNullableAndContext(e, t);
      return r;
    }
    async fetchNullableAndContext(e, t) {
      const r = await this.getAccountInfoAndContext(e, t), { value: s, context: n } = r;
      return {
        data: s && s.data.length !== 0 ? this._coder.accounts.decode(this._idlAccount.name, s.data) : null,
        context: n
      };
    }
    async fetch(e, t) {
      const { data: r } = await this.fetchNullableAndContext(e, t);
      if (r === null) throw new Error(`Account does not exist or has no data ${e.toString()}`);
      return r;
    }
    async fetchAndContext(e, t) {
      const { data: r, context: s } = await this.fetchNullableAndContext(e, t);
      if (r === null) throw new Error(`Account does not exist ${e.toString()}`);
      return {
        data: r,
        context: s
      };
    }
    async fetchMultiple(e, t) {
      return (await this.fetchMultipleAndContext(e, t)).map((s) => s ? s.data : null);
    }
    async fetchMultipleAndContext(e, t) {
      return (await iw(this._provider.connection, e.map((s) => Ht(s)), t)).map((s) => {
        if (s == null) return null;
        const { account: n, context: a } = s;
        return {
          data: this._coder.accounts.decode(this._idlAccount.name, n.data),
          context: a
        };
      });
    }
    async all(e) {
      const t = this.coder.accounts.memcmp(this._idlAccount.name, e instanceof he ? e : void 0), r = [];
      return (t == null ? void 0 : t.offset) != null && (t == null ? void 0 : t.bytes) != null && r.push({
        memcmp: {
          offset: t.offset,
          bytes: t.bytes
        }
      }), (t == null ? void 0 : t.dataSize) != null && r.push({
        dataSize: t.dataSize
      }), (await this._provider.connection.getProgramAccounts(this._programId, {
        commitment: this._provider.connection.commitment,
        filters: [
          ...r,
          ...Array.isArray(e) ? e : []
        ]
      })).map(({ pubkey: n, account: a }) => ({
        publicKey: n,
        account: this._coder.accounts.decode(this._idlAccount.name, a.data)
      }));
    }
    subscribe(e, t) {
      const r = ms.get(e.toString());
      if (r) return r.ee;
      const s = new Vb();
      e = Ht(e);
      const n = this._provider.connection.onAccountChange(e, (a) => {
        const l = this._coder.accounts.decode(this._idlAccount.name, a.data);
        s.emit("change", l);
      }, t);
      return ms.set(e.toString(), {
        ee: s,
        listener: n
      }), s;
    }
    async unsubscribe(e) {
      let t = ms.get(e.toString());
      if (!t) {
        console.warn("Address is not subscribed");
        return;
      }
      ms && await this._provider.connection.removeAccountChangeListener(t.listener).then(() => {
        ms.delete(e.toString());
      }).catch(console.error);
    }
    async createInstruction(e, t) {
      const r = this.size;
      if (this._provider.publicKey === void 0) throw new Error("This function requires the Provider interface implementor to have a 'publicKey' field.");
      return Lt.createAccount({
        fromPubkey: this._provider.publicKey,
        newAccountPubkey: e.publicKey,
        space: t ?? r,
        lamports: await this._provider.connection.getMinimumBalanceForRentExemption(t ?? r),
        programId: this._programId
      });
    }
    async associated(...e) {
      const t = await this.associatedAddress(...e);
      return await this.fetch(t);
    }
    async associatedAddress(...e) {
      return await zw(this._programId, ...e);
    }
    async getAccountInfo(e, t) {
      return await this._provider.connection.getAccountInfo(Ht(e), t);
    }
    async getAccountInfoAndContext(e, t) {
      return await this._provider.connection.getAccountInfoAndContext(Ht(e), t);
    }
  }
  const ms = /* @__PURE__ */ new Map(), ta = "Program log: ", qh = "Program data: ", Zw = ta.length, Jw = qh.length;
  class Xw {
    constructor(e, t, r) {
      this._programId = e, this._provider = t, this._eventParser = new Vh(e, r), this._eventCallbacks = /* @__PURE__ */ new Map(), this._eventListeners = /* @__PURE__ */ new Map(), this._listenerIdCount = 0;
    }
    addEventListener(e, t) {
      var r;
      let s = this._listenerIdCount;
      return this._listenerIdCount += 1, this._eventListeners.has(e) || this._eventListeners.set(e, []), this._eventListeners.set(e, ((r = this._eventListeners.get(e)) !== null && r !== void 0 ? r : []).concat(s)), this._eventCallbacks.set(s, [
        e,
        t
      ]), this._onLogsSubscriptionId !== void 0 || (this._onLogsSubscriptionId = this._provider.connection.onLogs(this._programId, (n, a) => {
        if (!n.err) for (const l of this._eventParser.parseLogs(n.logs)) {
          const d = this._eventListeners.get(l.name);
          d && d.forEach((p) => {
            const k = this._eventCallbacks.get(p);
            if (k) {
              const [, A] = k;
              A(l.data, a.slot, n.signature);
            }
          });
        }
      })), s;
    }
    async removeEventListener(e) {
      const t = this._eventCallbacks.get(e);
      if (!t) throw new Error(`Event listener ${e} doesn't exist!`);
      const [r] = t;
      let s = this._eventListeners.get(r);
      if (!s) throw new Error(`Event listeners don't exist for ${r}!`);
      if (this._eventCallbacks.delete(e), s = s.filter((n) => n !== e), this._eventListeners.set(r, s), s.length === 0 && this._eventListeners.delete(r), this._eventCallbacks.size === 0) {
        if (this._eventListeners.size !== 0) throw new Error(`Expected event listeners size to be 0 but got ${this._eventListeners.size}`);
        this._onLogsSubscriptionId !== void 0 && (await this._provider.connection.removeOnLogsListener(this._onLogsSubscriptionId), this._onLogsSubscriptionId = void 0);
      }
    }
  }
  class Vh {
    constructor(e, t) {
      this.coder = t, this.programId = e;
    }
    *parseLogs(e, t = false) {
      const r = new e1(e), s = new Qw();
      let n = r.next();
      for (; n !== null; ) {
        let [a, l, d] = this.handleLog(s, n, t);
        a && (yield a), l && s.push(l), d && s.pop(), n = r.next();
      }
    }
    handleLog(e, t, r) {
      return e.stack.length > 0 && e.program() === this.programId.toString() ? this.handleProgramLog(t, r) : [
        null,
        ...this.handleSystemLog(t)
      ];
    }
    handleProgramLog(e, t) {
      if (e.startsWith(ta) || e.startsWith(qh)) {
        const r = e.startsWith(ta) ? e.slice(Zw) : e.slice(Jw), s = this.coder.events.decode(r);
        if (t && s === null) throw new Error(`Unable to decode event ${r}`);
        return [
          s,
          null,
          false
        ];
      } else return [
        null,
        ...this.handleSystemLog(e)
      ];
    }
    handleSystemLog(e) {
      const t = e.split(":")[0];
      return t.match(/^Program (.*) success/g) !== null ? [
        null,
        true
      ] : t.startsWith(`Program ${this.programId.toString()} invoke`) ? [
        this.programId.toString(),
        false
      ] : t.includes("invoke") ? [
        "cpi",
        false
      ] : [
        null,
        false
      ];
    }
  }
  class Qw {
    constructor() {
      this.stack = [];
    }
    program() {
      if (!this.stack.length) throw new Error("Expected the stack to have elements");
      return this.stack[this.stack.length - 1];
    }
    push(e) {
      this.stack.push(e);
    }
    pop() {
      if (!this.stack.length) throw new Error("Expected the stack to have elements");
      this.stack.pop();
    }
  }
  class e1 {
    constructor(e) {
      this.logs = e;
    }
    next() {
      if (this.logs.length === 0) return null;
      let e = this.logs[0];
      return this.logs = this.logs.slice(1), e;
    }
  }
  class t1 {
    static build(e, t, r, s, n, a, l) {
      return async (...p) => {
        var k;
        const A = t(...p), [, E] = eo(e, [
          ...p
        ]);
        let S;
        if (s.simulate === void 0) throw new Error("This function requires 'Provider.simulate' to be implemented.");
        try {
          S = await s.simulate(A, E.signers, (k = E.options) === null || k === void 0 ? void 0 : k.commitment);
        } catch (M) {
          throw Lh(M, r);
        }
        if (S === void 0) throw new Error("Unable to simulate transaction");
        const I = S.logs;
        if (!I) throw new Error("Simulated logs not found");
        const R = [];
        if (l.events) {
          let M = new Vh(a, n);
          for (const x of M.parseLogs(I)) R.push(x);
        }
        return {
          events: R,
          raw: I
        };
      };
    }
  }
  function Eo(o) {
    return new Fh(Fs(8), (e) => za.fromBuffer(e), (e) => e.toBuffer(), o);
  }
  function ri(o) {
    return new Fh(Fs(32), (e) => new $(e), (e) => e.toBuffer(), o);
  }
  function Ro(o, e) {
    return new r1(o, e);
  }
  class Fh extends Ji {
    constructor(e, t, r, s) {
      super(e.span, s), this.layout = e, this.decoder = t, this.encoder = r;
    }
    decode(e, t) {
      return this.decoder(this.layout.decode(e, t));
    }
    encode(e, t, r) {
      return this.layout.encode(this.encoder(e), t, r);
    }
    getSpan(e, t) {
      return this.layout.getSpan(e, t);
    }
  }
  class r1 extends Ji {
    constructor(e, t) {
      super(-1, t), this.layout = e, this.discriminator = kr();
    }
    encode(e, t, r = 0) {
      return e == null ? this.layout.span + this.discriminator.encode(0, t, r) : (this.discriminator.encode(1, t, r), this.layout.encode(e, t, r + 4) + 4);
    }
    decode(e, t = 0) {
      const r = this.discriminator.decode(e, t);
      if (r === 0) return null;
      if (r === 1) return this.layout.decode(e, t + 4);
      throw new Error("Invalid coption " + this.layout.property);
    }
    getSpan(e, t = 0) {
      return this.layout.getSpan(e, t + 4) + 4;
    }
  }
  class za extends Ti {
    toBuffer() {
      const e = super.toArray().reverse(), t = he.from(e);
      if (t.length === 8) return t;
      if (t.length >= 8) throw new Error("u64 too large");
      const r = he.alloc(8);
      return t.copy(r), r;
    }
    static fromBuffer(e) {
      if (e.length !== 8) throw new Error(`Invalid buffer length: ${e.length}`);
      return new za([
        ...e
      ].reverse().map((t) => `00${t.toString(16)}`.slice(-2)).join(""), 16);
    }
  }
  const n1 = Bt([
    ri("mint"),
    ri("owner"),
    Eo("amount"),
    Ro(ri(), "delegate"),
    ((o) => {
      const e = Dh(Cw("discriminator"), null, o);
      return e.addVariant(0, Bt([]), "uninitialized"), e.addVariant(1, Bt([]), "initialized"), e.addVariant(2, Bt([]), "frozen"), e;
    })("state"),
    Ro(Eo(), "isNative"),
    Eo("delegatedAmount"),
    Ro(ri(), "closeAuthority")
  ]);
  function s1(o) {
    return n1.decode(o);
  }
  class xs {
    constructor(e, t, r, s, n, a, l, d) {
      this._accounts = t, this._provider = r, this._programId = s, this._idlIx = n, this._idlTypes = l, this._customResolver = d, this._args = e, this._accountStore = new i1(r, a, this._programId);
    }
    args(e) {
      this._args = e;
    }
    async resolve() {
      for (await this.resolveConst(this._idlIx.accounts), this._resolveEventCpi(this._idlIx.accounts); await this.resolvePdas(this._idlIx.accounts) + await this.resolveRelations(this._idlIx.accounts) + await this.resolveCustom() > 0; ) ;
    }
    async resolveCustom() {
      if (this._customResolver) {
        const { accounts: e, resolved: t } = await this._customResolver({
          args: this._args,
          accounts: this._accounts,
          provider: this._provider,
          programId: this._programId,
          idlIx: this._idlIx
        });
        return this._accounts = e, t;
      }
      return 0;
    }
    resolveOptionalsHelper(e, t) {
      const r = {};
      for (const s of t) {
        const n = s.name, a = e[n];
        a !== void 0 && (Hh(a) ? Uw(s) ? r[n] = this.resolveOptionalsHelper(a, s.accounts) : r[n] = Gh(a) : a !== null ? r[n] = Ht(a) : s.isOptional && (r[n] = this._programId));
      }
      return r;
    }
    resolveOptionals(e) {
      Object.assign(this._accounts, this.resolveOptionalsHelper(e, this._idlIx.accounts));
    }
    get(e) {
      const t = e.reduce((r, s) => r && r[s], this._accounts);
      if (t && t.toBase58) return t;
    }
    set(e, t) {
      let r = this._accounts;
      e.forEach((s, n) => {
        n == e.length - 1 && (r[s] = t), r[s] = r[s] || {}, r = r[s];
      });
    }
    async resolveConst(e, t = []) {
      for (let r = 0; r < e.length; r += 1) {
        const s = e[r], n = s.accounts;
        n && await this.resolveConst(n, [
          ...t,
          bt(s.name)
        ]);
        const a = s, l = bt(s.name);
        if (a.isSigner && !this.get([
          ...t,
          l
        ])) {
          if (this._provider.wallet === void 0) throw new Error("This function requires the Provider interface implementor to have a 'wallet' field.");
          this.set([
            ...t,
            l
          ], this._provider.wallet.publicKey);
        }
        Reflect.has(xs.CONST_ACCOUNTS, l) && !this.get([
          ...t,
          l
        ]) && this.set([
          ...t,
          l
        ], xs.CONST_ACCOUNTS[l]);
      }
    }
    _resolveEventCpi(e, t = []) {
      for (const r in e) {
        const s = e[r], n = s.accounts;
        n && this._resolveEventCpi(n, [
          ...t,
          bt(s.name)
        ]);
        const a = +r + 1;
        if (a === e.length) return;
        const l = bt(e[r].name), d = bt(e[a].name);
        if (l === "eventAuthority" && d === "program") {
          const p = [
            ...t,
            l
          ], k = [
            ...t,
            d
          ];
          this.get(p) || this.set(p, $.findProgramAddressSync([
            he.from("__event_authority")
          ], this._programId)[0]), this.get(k) || this.set(k, this._programId);
          return;
        }
      }
    }
    async resolvePdas(e, t = []) {
      let r = 0;
      for (let s = 0; s < e.length; s += 1) {
        const n = e[s], a = n.accounts;
        a && (r += await this.resolvePdas(a, [
          ...t,
          bt(n.name)
        ]));
        const l = n, d = bt(n.name);
        l.pda && l.pda.seeds.length > 0 && !this.get([
          ...t,
          d
        ]) && await this.autoPopulatePda(l, t) && (r += 1);
      }
      return r;
    }
    async resolveRelations(e, t = []) {
      let r = 0;
      for (let s = 0; s < e.length; s += 1) {
        const n = e[s], a = n.accounts;
        a && (r += await this.resolveRelations(a, [
          ...t,
          bt(n.name)
        ]));
        const l = n.relations || [], d = bt(n.name), p = [
          ...t,
          d
        ], k = this.get(p);
        if (k) {
          const A = l.filter((E) => !this.get([
            ...t,
            bt(E)
          ]));
          if (r += A.length, A.length > 0) {
            const E = await this._accountStore.fetchAccount({
              publicKey: k
            });
            await Promise.all(A.map(async (S) => {
              const I = bt(S);
              return this.set([
                ...t,
                I
              ], E[I]), E[I];
            }));
          }
        }
      }
      return r;
    }
    async autoPopulatePda(e, t = []) {
      if (!e.pda || !e.pda.seeds) throw new Error("Must have seeds");
      const r = await Promise.all(e.pda.seeds.map((a) => this.toBuffer(a, t)));
      if (r.some((a) => typeof a > "u")) return;
      const s = await this.parseProgramId(e, t);
      if (!s) return;
      const [n] = await $.findProgramAddress(r, s);
      this.set([
        ...t,
        bt(e.name)
      ], n);
    }
    async parseProgramId(e, t = []) {
      var r;
      if (!(!((r = e.pda) === null || r === void 0) && r.programId)) return this._programId;
      switch (e.pda.programId.kind) {
        case "const":
          return new $(this.toBufferConst(e.pda.programId.value));
        case "arg":
          return this.argValue(e.pda.programId);
        case "account":
          return await this.accountValue(e.pda.programId, t);
        default:
          throw new Error(`Unexpected program seed kind: ${e.pda.programId.kind}`);
      }
    }
    async toBuffer(e, t = []) {
      switch (e.kind) {
        case "const":
          return this.toBufferConst(e);
        case "arg":
          return await this.toBufferArg(e);
        case "account":
          return await this.toBufferAccount(e, t);
        default:
          throw new Error(`Unexpected seed kind: ${e.kind}`);
      }
    }
    getType(e, t = []) {
      if (t.length > 0 && e.defined) {
        const r = this._idlTypes.find((a) => a.name === e.defined);
        if (!r) throw new Error(`Cannot find type ${e.defined}`);
        const n = r.type.fields.find((a) => a.name === t[0]);
        return this.getType(n.type, t.slice(1));
      }
      return e;
    }
    toBufferConst(e) {
      return this.toBufferValue(this.getType(e.type, (e.path || "").split(".").slice(1)), e.value);
    }
    async toBufferArg(e) {
      const t = this.argValue(e);
      if (!(typeof t > "u")) return this.toBufferValue(this.getType(e.type, (e.path || "").split(".").slice(1)), t);
    }
    argValue(e) {
      const t = e.path.split("."), r = bt(t[0]), s = this._idlIx.args.findIndex((n) => n.name === r);
      if (s === -1) throw new Error(`Unable to find argument for seed: ${r}`);
      return t.slice(1).reduce((n, a) => (n || {})[a], this._args[s]);
    }
    async toBufferAccount(e, t = []) {
      const r = await this.accountValue(e, t);
      if (r) return this.toBufferValue(e.type, r);
    }
    async accountValue(e, t = []) {
      const r = e.path.split("."), s = r[0], n = this.get([
        ...t,
        bt(s)
      ]);
      if (n === null) throw new Error("fieldPubkey is null");
      if (r.length === 1) return n;
      const a = await this._accountStore.fetchAccount({
        publicKey: n,
        name: e.account
      });
      return this.parseAccountValue(a, r.slice(1));
    }
    parseAccountValue(e, t) {
      let r;
      for (; t.length > 0; ) r = e[bt(t[0])], t = t.slice(1);
      return r;
    }
    toBufferValue(e, t) {
      switch (e) {
        case "u8":
          return he.from([
            t
          ]);
        case "u16":
          let r = he.alloc(2);
          return r.writeUInt16LE(t), r;
        case "u32":
          let s = he.alloc(4);
          return s.writeUInt32LE(t), s;
        case "u64":
          let n = he.alloc(8);
          return n.writeBigUInt64LE(BigInt(t)), n;
        case "string":
          return he.from(Gb(t));
        case "publicKey":
          return t.toBuffer();
        default:
          if (e.array) return he.from(t);
          throw new Error(`Unexpected seed type: ${e}`);
      }
    }
  }
  xs.CONST_ACCOUNTS = {
    associatedTokenProgram: $w,
    rent: an,
    systemProgram: Lt.programId,
    tokenProgram: Kw,
    clock: Qt
  };
  class i1 {
    constructor(e, t, r) {
      this._provider = e, this._programId = r, this._cache = /* @__PURE__ */ new Map(), this._idls = {}, this._idls[r.toBase58()] = t;
    }
    async ensureIdl(e) {
      if (!this._idls[e.toBase58()]) {
        const t = await zn.fetchIdl(e, this._provider);
        if (t) {
          const r = new zn(t, e, this._provider);
          this._idls[e.toBase58()] = r.account;
        }
      }
      return this._idls[e.toBase58()];
    }
    async fetchAccount({ publicKey: e, name: t, programId: r = this._programId }) {
      const s = e.toString();
      if (!this._cache.has(s)) if (t === "TokenAccount") {
        const n = await this._provider.connection.getAccountInfo(e);
        if (n === null) throw new Error(`invalid account info for ${s}`);
        const a = s1(n.data);
        this._cache.set(s, a);
      } else if (t) {
        const n = await this.ensureIdl(r);
        if (n) {
          const a = n[bt(t)];
          if (a) {
            const l = await a.fetch(e);
            this._cache.set(s, l);
          }
        }
      } else {
        const n = await this._provider.connection.getAccountInfo(e);
        if (n === null) throw new Error(`invalid account info for ${s}`);
        const a = n.data, l = await this.ensureIdl(n.owner);
        if (l) {
          const d = Object.values(l)[0];
          if (!d) throw new Error("No accounts for this program");
          const p = d.coder.accounts.decodeAny(a);
          this._cache.set(s, p);
        }
      }
      return this._cache.get(s);
    }
  }
  class o1 {
    static build(e, t, r, s, n, a, l, d, p, k, A) {
      return (...E) => new a1(E, s, n, a, l, d, e, t, r, p, k, A);
    }
  }
  function Hh(o) {
    return typeof o == "object" && o !== null && !("_bn" in o);
  }
  function Gh(o, e) {
    const t = {};
    for (const r in o) {
      const s = o[r];
      if (s === null) throw new Error("Failed to resolve optionals due to IDL type mismatch with input accounts!");
      t[r] = Hh(s) ? Gh(s) : Ht(s);
    }
    return t;
  }
  class a1 {
    constructor(e, t, r, s, n, a, l, d, p, k, A, E) {
      this._ixFn = t, this._txFn = r, this._rpcFn = s, this._simulateFn = n, this._viewFn = a, this._programId = d, this._accounts = {}, this._remainingAccounts = [], this._signers = [], this._preInstructions = [], this._postInstructions = [], this._autoResolveAccounts = true, this._args = e, this._accountsResolver = new xs(e, this._accounts, l, d, p, k, A, E);
    }
    args(e) {
      this._args = e, this._accountsResolver.args(e);
    }
    async pubkeys() {
      return this._autoResolveAccounts && await this._accountsResolver.resolve(), this._accounts;
    }
    accounts(e) {
      return this._autoResolveAccounts = true, this._accountsResolver.resolveOptionals(e), this;
    }
    accountsStrict(e) {
      return this._autoResolveAccounts = false, this._accountsResolver.resolveOptionals(e), this;
    }
    signers(e) {
      return this._signers = this._signers.concat(e), this;
    }
    remainingAccounts(e) {
      return this._remainingAccounts = this._remainingAccounts.concat(e), this;
    }
    preInstructions(e) {
      return this._preInstructions = this._preInstructions.concat(e), this;
    }
    postInstructions(e) {
      return this._postInstructions = this._postInstructions.concat(e), this;
    }
    async rpc(e) {
      return this._autoResolveAccounts && await this._accountsResolver.resolve(), this._rpcFn(...this._args, {
        accounts: this._accounts,
        signers: this._signers,
        remainingAccounts: this._remainingAccounts,
        preInstructions: this._preInstructions,
        postInstructions: this._postInstructions,
        options: e
      });
    }
    async rpcAndKeys(e) {
      return {
        pubkeys: await this.pubkeys(),
        signature: await this.rpc(e)
      };
    }
    async view(e) {
      if (this._autoResolveAccounts && await this._accountsResolver.resolve(), !this._viewFn) throw new Error("Method does not support views");
      return this._viewFn(...this._args, {
        accounts: this._accounts,
        signers: this._signers,
        remainingAccounts: this._remainingAccounts,
        preInstructions: this._preInstructions,
        postInstructions: this._postInstructions,
        options: e
      });
    }
    async simulate(e) {
      return this._autoResolveAccounts && await this._accountsResolver.resolve(), this._simulateFn(...this._args, {
        accounts: this._accounts,
        signers: this._signers,
        remainingAccounts: this._remainingAccounts,
        preInstructions: this._preInstructions,
        postInstructions: this._postInstructions,
        options: e
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
  class c1 {
    static build(e, t, r, s) {
      const n = t.accounts.find((d) => d.isMut), a = !!t.returns;
      return n || !a ? void 0 : async (...d) => {
        var p, k;
        let A = await r(...d);
        const E = `Program return: ${e} `;
        let S = A.raw.find((x) => x.startsWith(E));
        if (!S) throw new Error("View expected return log");
        let I = Eh(S.slice(E.length)), R = t.returns;
        if (!R) throw new Error("View expected return type");
        return Vs.fieldLayout({
          type: R
        }, Array.from([
          ...(p = s.accounts) !== null && p !== void 0 ? p : [],
          ...(k = s.types) !== null && k !== void 0 ? k : []
        ])).decode(I);
      };
    }
  }
  class u1 {
    static build(e, t, r, s, n) {
      const a = {}, l = {}, d = {}, p = {}, k = {}, A = {}, E = jb(e), S = e.accounts ? jw.build(e, t, r, s) : {};
      return e.instructions.forEach((I) => {
        const R = xi.build(I, (oe, Q) => t.instruction.encode(oe, Q), r), M = Hw.build(I, R), x = Gw.build(I, M, E, s), C = t1.build(I, M, E, s, t, r, e), O = c1.build(r, I, C, e), N = o1.build(s, r, I, R, M, x, C, O, S, e.types || [], n && n(I)), ee = bt(I.name);
        l[ee] = R, d[ee] = M, a[ee] = x, p[ee] = C, k[ee] = N, O && (A[ee] = O);
      }), [
        a,
        l,
        d,
        S,
        p,
        k,
        A
      ];
    }
  }
  zn = class {
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
    constructor(e, t, r, s, n) {
      t = Ht(t), r || (r = Zo()), this._idl = e, this._provider = r, this._programId = t, this._coder = s ?? new Oh(e), this._events = new Xw(this._programId, r, this._coder);
      const [a, l, d, p, k, A, E] = u1.build(e, this._coder, t, r, n ?? (() => {
      }));
      this.rpc = a, this.instruction = l, this.transaction = d, this.account = p, this.simulate = k, this.methods = A, this.views = E;
    }
    static async at(e, t) {
      const r = Ht(e), s = await zn.fetchIdl(r, t);
      if (!s) throw new Error(`IDL not found for program: ${e.toString()}`);
      return new zn(s, r, t);
    }
    static async fetchIdl(e, t) {
      t = t ?? Zo();
      const r = Ht(e), s = await Ww(r), n = await t.connection.getAccountInfo(s);
      if (!n) return null;
      let a = Vw(n.data.slice(8));
      const l = Wb(a.data);
      return JSON.parse(Hb(l));
    }
    addEventListener(e, t) {
      return this._events.addEventListener(e, t);
    }
    async removeEventListener(e) {
      return await this._events.removeEventListener(e);
    }
  };
  new $("11111111111111111111111111111111");
  class l1 {
    constructor(e) {
      __publicField(this, "idl");
      this.idl = e;
    }
    async encode(e, t) {
      throw new Error(`Invalid account name: ${e}`);
    }
    decode(e, t) {
      return this.decodeUnchecked(e, t);
    }
    decodeUnchecked(e, t) {
      throw new Error(`Invalid account name: ${e}`);
    }
    memcmp(e, t) {
      switch (e) {
        case "postVaa":
          return {
            dataSize: 56
          };
        default:
          throw new Error(`Invalid account name: ${e}`);
      }
    }
    size(e) {
      return dd(this.idl, e) ?? 0;
    }
  }
  class h1 {
    constructor(e) {
    }
    decode(e) {
      throw new Error("Wormhole program does not have events");
    }
  }
  var bs = {};
  const d1 = Lu(bp);
  var Mu;
  function f1() {
    return Mu || (Mu = 1, (function(o) {
      var e = bs && bs.__importDefault || function(L) {
        return L && L.__esModule ? L : {
          default: L
        };
      };
      Object.defineProperty(o, "__esModule", {
        value: true
      }), o.map = o.array = o.rustEnum = o.str = o.vecU8 = o.tagged = o.vec = o.bool = o.option = o.publicKey = o.i256 = o.u256 = o.i128 = o.u128 = o.i64 = o.u64 = o.struct = o.f64 = o.f32 = o.i32 = o.u32 = o.i16 = o.u16 = o.i8 = o.u8 = void 0;
      const t = pi(), r = d1, s = e(Cu());
      var n = pi();
      Object.defineProperty(o, "u8", {
        enumerable: true,
        get: function() {
          return n.u8;
        }
      }), Object.defineProperty(o, "i8", {
        enumerable: true,
        get: function() {
          return n.s8;
        }
      }), Object.defineProperty(o, "u16", {
        enumerable: true,
        get: function() {
          return n.u16;
        }
      }), Object.defineProperty(o, "i16", {
        enumerable: true,
        get: function() {
          return n.s16;
        }
      }), Object.defineProperty(o, "u32", {
        enumerable: true,
        get: function() {
          return n.u32;
        }
      }), Object.defineProperty(o, "i32", {
        enumerable: true,
        get: function() {
          return n.s32;
        }
      }), Object.defineProperty(o, "f32", {
        enumerable: true,
        get: function() {
          return n.f32;
        }
      }), Object.defineProperty(o, "f64", {
        enumerable: true,
        get: function() {
          return n.f64;
        }
      }), Object.defineProperty(o, "struct", {
        enumerable: true,
        get: function() {
          return n.struct;
        }
      });
      class a extends t.Layout {
        constructor(f, i, c) {
          super(f, c), this.blob = (0, t.blob)(f), this.signed = i;
        }
        decode(f, i = 0) {
          const c = new s.default(this.blob.decode(f, i), 10, "le");
          return this.signed ? c.fromTwos(this.span * 8).clone() : c;
        }
        encode(f, i, c = 0) {
          return this.signed && (f = f.toTwos(this.span * 8)), this.blob.encode(f.toArrayLike(he, "le", this.span), i, c);
        }
      }
      function l(L) {
        return new a(8, false, L);
      }
      o.u64 = l;
      function d(L) {
        return new a(8, true, L);
      }
      o.i64 = d;
      function p(L) {
        return new a(16, false, L);
      }
      o.u128 = p;
      function k(L) {
        return new a(16, true, L);
      }
      o.i128 = k;
      function A(L) {
        return new a(32, false, L);
      }
      o.u256 = A;
      function E(L) {
        return new a(32, true, L);
      }
      o.i256 = E;
      class S extends t.Layout {
        constructor(f, i, c, h) {
          super(f.span, h), this.layout = f, this.decoder = i, this.encoder = c;
        }
        decode(f, i) {
          return this.decoder(this.layout.decode(f, i));
        }
        encode(f, i, c) {
          return this.layout.encode(this.encoder(f), i, c);
        }
        getSpan(f, i) {
          return this.layout.getSpan(f, i);
        }
      }
      function I(L) {
        return new S((0, t.blob)(32), (f) => new r.PublicKey(f), (f) => f.toBuffer(), L);
      }
      o.publicKey = I;
      class R extends t.Layout {
        constructor(f, i) {
          super(-1, i), this.layout = f, this.discriminator = (0, t.u8)();
        }
        encode(f, i, c = 0) {
          return f == null ? this.discriminator.encode(0, i, c) : (this.discriminator.encode(1, i, c), this.layout.encode(f, i, c + 1) + 1);
        }
        decode(f, i = 0) {
          const c = this.discriminator.decode(f, i);
          if (c === 0) return null;
          if (c === 1) return this.layout.decode(f, i + 1);
          throw new Error("Invalid option " + this.property);
        }
        getSpan(f, i = 0) {
          const c = this.discriminator.decode(f, i);
          if (c === 0) return 1;
          if (c === 1) return this.layout.getSpan(f, i + 1) + 1;
          throw new Error("Invalid option " + this.property);
        }
      }
      function M(L, f) {
        return new R(L, f);
      }
      o.option = M;
      function x(L) {
        return new S((0, t.u8)(), C, O, L);
      }
      o.bool = x;
      function C(L) {
        if (L === 0) return false;
        if (L === 1) return true;
        throw new Error("Invalid bool: " + L);
      }
      function O(L) {
        return L ? 1 : 0;
      }
      function N(L, f) {
        const i = (0, t.u32)("length"), c = (0, t.struct)([
          i,
          (0, t.seq)(L, (0, t.offset)(i, -i.span), "values")
        ]);
        return new S(c, ({ values: h }) => h, (h) => ({
          values: h
        }), f);
      }
      o.vec = N;
      function ee(L, f, i) {
        const c = (0, t.struct)([
          l("tag"),
          f.replicate("data")
        ]);
        function h({ tag: g, data: w }) {
          if (!g.eq(L)) throw new Error("Invalid tag, expected: " + L.toString("hex") + ", got: " + g.toString("hex"));
          return w;
        }
        return new S(c, h, (g) => ({
          tag: L,
          data: g
        }), i);
      }
      o.tagged = ee;
      function oe(L) {
        const f = (0, t.u32)("length"), i = (0, t.struct)([
          f,
          (0, t.blob)((0, t.offset)(f, -f.span), "data")
        ]);
        return new S(i, ({ data: c }) => c, (c) => ({
          data: c
        }), L);
      }
      o.vecU8 = oe;
      function Q(L) {
        return new S(oe(), (f) => f.toString("utf-8"), (f) => he.from(f, "utf-8"), L);
      }
      o.str = Q;
      function de(L, f, i) {
        const c = (0, t.union)(i ?? (0, t.u8)(), f);
        return L.forEach((h, g) => c.addVariant(g, h, h.property)), c;
      }
      o.rustEnum = de;
      function le(L, f, i) {
        const c = (0, t.struct)([
          (0, t.seq)(L, f, "values")
        ]);
        return new S(c, ({ values: h }) => h, (h) => ({
          values: h
        }), i);
      }
      o.array = le;
      class ne extends t.Layout {
        constructor(f, i, c) {
          super(f.span + i.span, c), this.keyLayout = f, this.valueLayout = i;
        }
        decode(f, i) {
          i = i || 0;
          const c = this.keyLayout.decode(f, i), h = this.valueLayout.decode(f, i + this.keyLayout.getSpan(f, i));
          return [
            c,
            h
          ];
        }
        encode(f, i, c) {
          c = c || 0;
          const h = this.keyLayout.encode(f[0], i, c), g = this.valueLayout.encode(f[1], i, c + h);
          return h + g;
        }
        getSpan(f, i) {
          return this.keyLayout.getSpan(f, i) + this.valueLayout.getSpan(f, i);
        }
      }
      function D(L, f, i) {
        const c = (0, t.u32)("length"), h = (0, t.struct)([
          c,
          (0, t.seq)(new ne(L, f), (0, t.offset)(c, -c.span), "values")
        ]);
        return new S(h, ({ values: g }) => new Map(g), (g) => ({
          values: Array.from(g.entries())
        }), i);
      }
      o.map = D;
    })(bs)), bs;
  }
  var _t = f1();
  class Tn {
    static fieldLayout(e, t) {
      const r = e.name !== void 0 ? ws(e.name) : void 0;
      switch (e.type) {
        case "bool":
          return _t.bool(r);
        case "u8":
          return _t.u8(r);
        case "i8":
          return _t.i8(r);
        case "u16":
          return _t.u16(r);
        case "i16":
          return _t.i16(r);
        case "u32":
          return _t.u32(r);
        case "i32":
          return _t.i32(r);
        case "f32":
          return _t.f32(r);
        case "u64":
          return _t.u64(r);
        case "i64":
          return _t.i64(r);
        case "f64":
          return _t.f64(r);
        case "u128":
          return _t.u128(r);
        case "i128":
          return _t.i128(r);
        case "u256":
          return _t.u256(r);
        case "i256":
          return _t.i256(r);
        case "bytes":
          return _t.vecU8(r);
        case "string":
          return _t.str(r);
        case "publicKey":
          return _t.publicKey(r);
        default: {
          if ("vec" in e.type) return _t.vec(Tn.fieldLayout({
            name: void 0,
            type: e.type.vec
          }, t), r);
          if ("option" in e.type) return _t.option(Tn.fieldLayout({
            name: void 0,
            type: e.type.option
          }, t), r);
          if ("array" in e.type) {
            let s = e.type.array[0], n = e.type.array[1], a = Tn.fieldLayout({
              name: void 0,
              type: s
            }, t);
            return _t.array(a, n, r);
          } else throw new Error(`Not yet implemented: ${e}`);
        }
      }
    }
  }
  class Ka {
    constructor(e) {
      __publicField(this, "ixLayout");
      this.ixLayout = Ka.parseIxLayout(e);
    }
    static parseIxLayout(e) {
      const r = (e.instructions ? e.instructions : []).map((s) => {
        let n = s.args.map((l) => Tn.fieldLayout(l, Array.from([
          ...e.accounts ?? [],
          ...e.types ?? []
        ])));
        const a = ws(s.name);
        return [
          a,
          _t.struct(n, a)
        ];
      }).concat(e.instructions.map((s) => {
        let n = s.args.map((l) => Tn.fieldLayout(l, Array.from([
          ...e.accounts ?? [],
          ...e.types ?? []
        ])));
        const a = ws(s.name);
        return [
          a,
          _t.struct(n, a)
        ];
      }));
      return new Map(r);
    }
    encode(e, t) {
      const r = he.alloc(1e3), s = ws(e), n = this.ixLayout.get(s);
      if (!n) throw new Error(`Unknown method: ${s}`);
      const a = n.encode(t, r), l = r.slice(0, a);
      return g1(Pi[fd(s)], l);
    }
    encodeState(e, t) {
      throw new Error("Wormhole program does not have state");
    }
    decode(e, t = "hex") {
      var _a2;
      typeof e == "string" && (e = t === "hex" ? he.from(e, "hex") : ud.decode(e));
      let r = he.from(e.slice(0, 1)).readInt8(), s = he.from(e.slice(1)), n = ws(Pi[r] ?? "");
      return this.ixLayout.get(n) ? {
        data: (_a2 = this.ixLayout.get(n)) == null ? void 0 : _a2.decode(s),
        name: n
      } : null;
    }
  }
  var Pi;
  (function(o) {
    o[o.Initialize = 0] = "Initialize", o[o.PostMessage = 1] = "PostMessage", o[o.PostVaa = 2] = "PostVaa", o[o.SetFees = 3] = "SetFees", o[o.TransferFees = 4] = "TransferFees", o[o.UpgradeContract = 5] = "UpgradeContract", o[o.UpgradeGuardianSet = 6] = "UpgradeGuardianSet", o[o.VerifySignatures = 7] = "VerifySignatures", o[o.PostMessageUnreliable = 8] = "PostMessageUnreliable";
  })(Pi || (Pi = {}));
  function g1(o, e) {
    const t = he.alloc(1 + (e === void 0 ? 0 : e.length));
    return t.writeUInt8(o, 0), e !== void 0 && t.write(e.toString("hex"), 1, "hex"), t;
  }
  class p1 {
    constructor(e) {
    }
    encode(e, t) {
      throw new Error("Wormhole program does not have state");
    }
    decode(e) {
      throw new Error("Wormhole program does not have state");
    }
  }
  class y1 {
    constructor(e) {
    }
    encode(e, t) {
      throw new Error("Wormhole program does not have user-defined types");
    }
    decode(e, t) {
      throw new Error("Wormhole program does not have user-defined types");
    }
  }
  class m1 {
    constructor(e) {
      __publicField(this, "instruction");
      __publicField(this, "accounts");
      __publicField(this, "state");
      __publicField(this, "events");
      __publicField(this, "types");
      this.instruction = new Ka(e), this.accounts = new l1(e), this.state = new p1(e), this.events = new h1(e), this.types = new y1(e);
    }
  }
  const $a = {
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
  function jh(o, e) {
    return new zn($a, new U(o), e === void 0 ? {
      connection: null
    } : e, Yh());
  }
  function fr(o, e) {
    return jh(o, gd(e));
  }
  function Yh() {
    return new m1($a);
  }
  function b1(o, e, t, r) {
    const s = fr(e, o).methods.setFees();
    return s._ixFn(...s._args, {
      accounts: Zh(e, t, r),
      signers: void 0,
      remainingAccounts: void 0,
      preInstructions: void 0,
      postInstructions: void 0
    });
  }
  function Zh(o, e, t) {
    return {
      payer: new U(e),
      bridge: hr(o),
      vaa: dn(o, he.from(t.hash)),
      claim: qn(o, t.emitterAddress.toString(), Wn(t.emitterChain), t.sequence),
      systemProgram: St.programId
    };
  }
  function w1(o, e, t, r, s) {
    const n = fr(e, o).methods.transferFees();
    return n._ixFn(...n._args, {
      accounts: Jh(e, t, r, s),
      signers: void 0,
      remainingAccounts: void 0,
      preInstructions: void 0,
      postInstructions: void 0
    });
  }
  function Jh(o, e, t, r) {
    return {
      payer: new U(e),
      bridge: hr(o),
      vaa: dn(o, he.from(r.hash)),
      claim: qn(o, r.emitterAddress.toString(), Wn(r.emitterChain), r.sequence),
      feeCollector: Vn(o),
      recipient: new U(t),
      rent: Yt,
      systemProgram: St.programId
    };
  }
  function k1(o, e, t, r) {
    const s = fr(e, o).methods.upgradeGuardianSet();
    return s._ixFn(...s._args, {
      accounts: Xh(e, t, r),
      signers: void 0,
      remainingAccounts: void 0,
      preInstructions: void 0,
      postInstructions: void 0
    });
  }
  function Xh(o, e, t) {
    return {
      payer: new U(e),
      bridge: hr(o),
      vaa: dn(o, he.from(t.hash)),
      claim: qn(o, t.emitterAddress.toString(), Wn(t.emitterChain), t.sequence),
      guardianSetOld: sn(o, t.guardianSet),
      guardianSetNew: sn(o, t.guardianSet + 1),
      systemProgram: St.programId
    };
  }
  function v1(o, e, t, r) {
    const s = fr(e, o).methods.upgradeContract();
    return s._ixFn(...s._args, {
      accounts: Qh(e, t, r),
      signers: void 0,
      remainingAccounts: void 0,
      preInstructions: void 0,
      postInstructions: void 0
    });
  }
  function Qh(o, e, t, r) {
    const { newContract: s } = t.payload.actionArgs;
    return {
      payer: new U(e),
      bridge: hr(o),
      vaa: dn(o, he.from(t.hash)),
      claim: qn(o, t.emitterAddress.toString(), Wn(t.emitterChain), t.sequence),
      upgradeAuthority: xl(o),
      spill: new U(r === void 0 ? e : r),
      implementation: new ni(s).unwrap(),
      programData: yd(o),
      wormholeProgram: new U(o),
      rent: Yt,
      clock: Wt,
      bpfLoaderUpgradeable: pd,
      systemProgram: St.programId
    };
  }
  function S1(o, e, t, r, s, n) {
    const a = fr(e, o).methods.initialize(r, new Ti(s.toString()), [
      ...n.map((l) => [
        ...new Uint8Array(l)
      ])
    ]);
    return a._ixFn(...a._args, {
      accounts: ed(e, t),
      signers: void 0,
      remainingAccounts: void 0,
      preInstructions: void 0,
      postInstructions: void 0
    });
  }
  function ed(o, e) {
    return {
      bridge: hr(o),
      guardianSet: sn(o, 0),
      feeCollector: Vn(o),
      payer: new U(e),
      clock: Wt,
      rent: Yt,
      systemProgram: St.programId
    };
  }
  function td(o, e, t, r, s, n, a) {
    const l = fr(e, o).methods.postMessage(n, he.from(s), a);
    return l._ixFn(...l._args, {
      accounts: Ua(e, t, r),
      signers: void 0,
      remainingAccounts: void 0,
      preInstructions: void 0,
      postInstructions: void 0
    });
  }
  Ua = function(o, e, t, r) {
    let s;
    return r ? { emitter: r, sequence: s } = ya(r, o) : (r = e, s = $i(r, o)), {
      bridge: hr(o),
      message: new U(t),
      emitter: new U(r),
      sequence: s,
      payer: new U(e),
      feeCollector: Vn(o),
      clock: Wt,
      rent: Yt,
      systemProgram: St.programId
    };
  };
  function rd(o, e, t, r, s) {
    const n = fr(e, o).methods.postVaa(1, r.guardianSet, r.timestamp, r.nonce, Wn(r.emitterChain), [
      ...r.emitterAddress.toUint8Array()
    ], new Ti(r.sequence.toString()), r.consistencyLevel, he.from(ld(r.payloadLiteral, r.payload)));
    return n._ixFn(...n._args, {
      accounts: nd(e, t, s, r),
      signers: void 0,
      remainingAccounts: void 0,
      preInstructions: void 0,
      postInstructions: void 0
    });
  }
  function nd(o, e, t, r) {
    return {
      guardianSet: sn(o, r.guardianSet),
      bridge: hr(o),
      signatureSet: new U(t),
      vaa: dn(o, he.from(r.hash)),
      payer: new U(e),
      clock: Wt,
      rent: Yt,
      systemProgram: St.programId
    };
  }
  const _1 = 19;
  async function sd(o, e, t, r, s, n) {
    const a = r.guardianSet, l = await ma(o, e, a, n), d = r.signatures, p = l.keys, k = 7, A = [];
    for (let E = 0; E < Math.ceil(d.length / k); ++E) {
      const S = E * k, I = Math.min(d.length, (E + 1) * k), R = new Array(_1).fill(-1), M = [], x = [];
      for (let C = 0; C < I - S; ++C) {
        const O = d.at(C + S);
        M.push(he.from(O.signature.encode())), x.push(p.at(O.guardianIndex)), R[O.guardianIndex] = C;
      }
      A.push(vp(M, x, he.from(r.hash))), A.push(A1(o, e, t, r, s, R));
    }
    return A;
  }
  function A1(o, e, t, r, s, n) {
    const a = fr(e, o).methods.verifySignatures(n);
    return a._ixFn(...a._args, {
      accounts: id(e, t, s, r),
      signers: void 0,
      remainingAccounts: void 0,
      preInstructions: void 0,
      postInstructions: void 0
    });
  }
  function id(o, e, t, r) {
    return {
      payer: new U(e),
      guardianSet: sn(o, r.guardianSet),
      signatureSet: new U(t),
      instructions: Ju,
      rent: Yt,
      systemProgram: St.programId
    };
  }
  I1 = function(o, e) {
    const { emitter: t, sequence: r } = ya(o, e);
    return {
      wormholeBridge: hr(e),
      wormholeEmitter: t,
      wormholeSequence: r,
      wormholeFeeCollector: Vn(e)
    };
  };
  E1 = function(o, e, t, r) {
    const s = Ua(e, t, r, o);
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
  const R1 = Object.freeze(Object.defineProperty({
    __proto__: null,
    BridgeConfig: zi,
    BridgeData: Ki,
    GuardianSetData: Wi,
    SequenceTracker: Ui,
    SignatureSetData: Di,
    coder: Yh,
    createBridgeFeeTransferInstruction: Pl,
    createInitializeInstruction: S1,
    createPostMessageInstruction: td,
    createPostVaaInstruction: rd,
    createReadOnlyWormholeProgramInterface: fr,
    createSetFeesInstruction: b1,
    createTransferFeesInstruction: w1,
    createUpgradeContractInstruction: v1,
    createUpgradeGuardianSetInstruction: k1,
    createVerifySignaturesInstructions: sd,
    createWormholeProgramInterface: jh,
    deriveClaimKey: qn,
    deriveEmitterSequenceKey: $i,
    deriveFeeCollectorKey: Vn,
    deriveGuardianSetKey: sn,
    derivePostedVaaKey: dn,
    deriveUpgradeAuthorityKey: xl,
    deriveWormholeBridgeDataKey: hr,
    deriveWormholeEmitterKey: pa,
    getClaim: wp,
    getEmitterKeys: ya,
    getGuardianSet: ma,
    getInitializeAccounts: ed,
    getPostMessageAccounts: Ua,
    getPostMessageCpiAccounts: E1,
    getPostVaaAccounts: nd,
    getProgramSequenceTracker: kp,
    getSequenceTracker: Ml,
    getSetFeesAccounts: Zh,
    getSignatureSetData: _p,
    getTransferFeesAccounts: Jh,
    getUpgradeContractAccounts: Qh,
    getUpgradeGuardianSetAccounts: Xh,
    getVerifySignatureAccounts: id,
    getWormholeBridgeData: Rl,
    getWormholeDerivedAccounts: I1
  }, Symbol.toStringTag, {
    value: "Module"
  })), xu = "Program log: Sequence: ";
  Ps = class {
    constructor(e, t, r, s) {
      __publicField(this, "network");
      __publicField(this, "chain");
      __publicField(this, "connection");
      __publicField(this, "contracts");
      __publicField(this, "chainId");
      __publicField(this, "coreBridge");
      __publicField(this, "address");
      __publicField(this, "bridgeData");
      this.network = e, this.chain = t, this.connection = r, this.contracts = s, this.chainId = Wn(t);
      const n = s.coreBridge;
      if (!n) throw new Error(`CoreBridge contract Address for chain ${t} not found`);
      this.address = n, this.coreBridge = fr(n, r);
    }
    async getGuardianSet(e) {
      const t = await ma(this.connection, this.coreBridge.programId, e);
      return {
        index: t.index,
        keys: t.keys.map((r) => r.toString("hex")),
        expiry: BigInt(t.expirationTime)
      };
    }
    static async fromRpc(e, t) {
      const [r, s] = await md.chainFromRpc(e), n = t[s];
      if (n.network !== r) throw new Error(`Network mismatch for chain ${s}: ${n.network} != ${r}`);
      return new Ps(r, s, e, t[s].contracts);
    }
    async ensureBridgeConfig() {
      this.bridgeData || (this.bridgeData = await Rl(this.connection, this.coreBridge.programId));
    }
    async getMessageFee() {
      return await this.ensureBridgeConfig(), this.bridgeData.config.fee;
    }
    async getGuardianSetIndex() {
      return await this.ensureBridgeConfig(), this.bridgeData.guardianSetIndex;
    }
    async *publishMessage(e, t, r, s) {
      const n = ki.generate(), a = new ni(e).unwrap(), l = td(this.connection, this.coreBridge.programId, a, n.publicKey, t, r, s), d = await this.getMessageFee(), p = Pl(this.coreBridge.programId, a, d), k = new ct();
      k.feePayer = a, k.add(p, l), yield this.createUnsignedTx({
        transaction: k,
        signers: [
          n
        ]
      }, "Core.PublishMessage");
    }
    async *verifyMessage(e, t) {
      yield* this.postVaa(e, t);
    }
    async *postVaa(e, t) {
      const r = dn(this.coreBridge.programId, he.from(t.hash));
      if (await this.connection.getAccountInfo(r)) return;
      const n = new ni(e).unwrap(), a = ki.generate(), l = await sd(this.connection, this.coreBridge.programId, n, t, a.publicKey);
      for (let p = 0; p < l.length; p += 2) {
        const k = new ct().add(...l.slice(p, p + 2));
        k.feePayer = n, yield this.createUnsignedTx({
          transaction: k,
          signers: [
            a
          ]
        }, "Core.VerifySignature", true);
      }
      const d = new ct().add(rd(this.connection, this.coreBridge.programId, n, t, a.publicKey));
      d.feePayer = n, yield this.createUnsignedTx({
        transaction: d
      }, "Core.PostVAA");
    }
    static parseSequenceFromLog(e, t) {
      var _a2, _b2, _c2, _d2;
      const { meta: r, transaction: { message: s } } = t;
      if (!((_a2 = r == null ? void 0 : r.innerInstructions) == null ? void 0 : _a2.length)) return [];
      const n = s.staticAccountKeys;
      if (n.filter((d) => d.toString() === e).length === 0) return [];
      const a = (_d2 = (_c2 = (_b2 = r == null ? void 0 : r.logMessages) == null ? void 0 : _b2.filter((d) => d.startsWith(xu))) == null ? void 0 : _c2[0]) == null ? void 0 : _d2.replace(xu, "");
      if (!a) return [];
      const l = [];
      for (const d of r == null ? void 0 : r.innerInstructions) {
        const p = d.instructions;
        l.push(...p.filter((k) => k.programIdIndex in n && n[k.programIdIndex].toString() === e));
      }
      return l.length < 1 ? [] : n.length < 3 ? [] : l.map((d) => [
        new ni(n[d.accounts[2]]).toUniversalAddress(),
        BigInt(a)
      ]).filter((d) => d !== null);
    }
    async getMessageAccountKeys(e) {
      let t;
      if (typeof e.transaction.message.version != "string") if (e.meta.loadedAddresses) t = e.transaction.message.getAccountKeys({
        accountKeysFromLookups: e.meta.loadedAddresses
      });
      else {
        const r = await Promise.all(e.transaction.message.addressTableLookups.map(async (s) => {
          const n = await this.connection.getAddressLookupTable(s.accountKey);
          if (!n || !n.value) throw new Error("Could not resolve lookup table: " + s.accountKey.toBase58());
          return n.value;
        }));
        t = e.transaction.message.getAccountKeys({
          addressLookupTableAccounts: r
        });
      }
      else t = e.transaction.message.getAccountKeys();
      return t;
    }
    async findInstructions(e, t) {
      var _a2;
      const { meta: r, transaction: { message: s } } = t, n = this.coreBridge.programId, a = (_a2 = r.innerInstructions) == null ? void 0 : _a2.flatMap((d) => d.instructions.filter((p) => n.toString() === e.get(p.programIdIndex).toString())).map((d) => ({
        programIdIndex: d.programIdIndex,
        accountKeyIndexes: d.accounts
      })), l = s.compiledInstructions.filter((d) => n.toString() === e.get(d.programIdIndex).toString());
      return [
        ...a,
        ...l
      ];
    }
    async parsePostMessageAccount(e) {
      const t = await this.connection.getAccountInfo(e);
      if (!(t == null ? void 0 : t.data)) throw new Error("No data found in message account");
      const { timestamp: r, emitterAddress: s, emitterChain: n, consistencyLevel: a, sequence: l, nonce: d, payload: p } = El(new Uint8Array(t == null ? void 0 : t.data));
      return kd("Uint8Array", {
        guardianSet: await this.getGuardianSetIndex(),
        emitterChain: hd(n),
        timestamp: r,
        emitterAddress: s,
        consistencyLevel: a,
        sequence: l,
        nonce: d,
        payload: p,
        signatures: []
      });
    }
    async parseTransaction(e) {
      const t = await this.connection.getTransaction(e, {
        maxSupportedTransactionVersion: 0
      });
      if (!t || !t.meta || !t.meta.innerInstructions) throw new Error("transaction not found");
      try {
        const a = Ps.parseSequenceFromLog(this.coreBridge.programId.toBase58(), t);
        if (a.length > 0) {
          const [l, d] = a[0];
          return [
            {
              chain: this.chain,
              emitter: l,
              sequence: d
            }
          ];
        }
      } catch {
      }
      const r = await this.getMessageAccountKeys(t), s = await this.findInstructions(r, t);
      if (!s || s.length === 0) throw new Error("no bridge messages found");
      const n = s.map(async (a) => {
        const l = r.get(a.accountKeyIndexes[1]), d = await this.parsePostMessageAccount(l);
        return {
          chain: d.emitterChain,
          emitter: d.emitterAddress,
          sequence: d.sequence
        };
      });
      return await Promise.all(n);
    }
    async parseMessages(e) {
      const t = await this.connection.getTransaction(e, {
        maxSupportedTransactionVersion: 0
      });
      if (!t || !t.meta || !t.meta.innerInstructions) throw new Error("transaction not found");
      const r = await this.getMessageAccountKeys(t), s = await this.findInstructions(r, t);
      if (!s || s.length === 0) throw new Error("no bridge messages found");
      const n = s.map(async (a) => {
        const l = r.get(a.accountKeyIndexes[1]);
        return await this.parsePostMessageAccount(l);
      });
      return await Promise.all(n);
    }
    createUnsignedTx(e, t, r = false) {
      return new bd(e, this.network, this.chain, t, r);
    }
  };
  vd(wd, "WormholeCore", Ps);
  lk = Object.freeze(Object.defineProperty({
    __proto__: null,
    IDL: $a,
    SolanaWormholeCore: Ps,
    deserializePostMessage: El,
    postMessageLayout: Il,
    utils: R1
  }, Symbol.toStringTag, {
    value: "Module"
  }));
});
export {
  zn as P,
  Ps as S,
  __tla,
  dn as a,
  xl as b,
  E1 as c,
  qn as d,
  I1 as e,
  wp as f,
  Ua as g,
  Pl as h,
  lk as i
};
