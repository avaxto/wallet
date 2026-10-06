const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DMhEzukP.js","assets/crypto-CvxmDsJu.js","assets/index-7X6IHuYr.js","assets/vendor-C3gEtrcs.js","assets/index-CMfFUM2s.css","assets/web3-Dwh31gFC.js","assets/api-JQ13yNkJ.js","assets/wormhole-DLdMj1-J.js"])))=>i.map(i=>d[i]);
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { s as xn, x as N, n as v, p as C, o as O, f as B, l as xr, e as Ne, d as Fe, R as Os, m as M, r as ue, q as D, i as Vr, v as ss, L as b, w as Xt, t as Hr, h as st, j as ze, z as Ks, k as Rn, y as $r, C as Ws, _ as Us, __tla as __tla_0 } from "./index-7X6IHuYr.js";
import { U as Mn, g as Pn, aZ as qs, I as Ds, __tla as __tla_1 } from "./api-JQ13yNkJ.js";
import { X as Fs, c as zr, $ as Vs, aC as Hs, W as $s, aL as Gs, aM as js, __tla as __tla_2 } from "./wormhole-DLdMj1-J.js";
import { b as Js, c as Gr, d as Ys, a as F, B as me } from "./crypto-CvxmDsJu.js";
let pc, cn, nn, ic, Pe, R, qe, ts, an, Fr, oc, Yr, he, yc, Xr, se, Ya, hc, gc, Ja, kc, dc, vc, mc, zs, Qa, wc, sc, Za, fc, Xa, tc;
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
  var _a2, _b;
  var Je = {
    exports: {}
  }, Zs = Je.exports, Tn;
  function Xs() {
    return Tn || (Tn = 1, (function(u) {
      (function(t, e) {
        function r(k, i) {
          if (!k) throw new Error(i || "Assertion failed");
        }
        function o(k, i) {
          k.super_ = i;
          var h = function() {
          };
          h.prototype = i.prototype, k.prototype = new h(), k.prototype.constructor = k;
        }
        function s(k, i, h) {
          if (s.isBN(k)) return k;
          this.negative = 0, this.words = null, this.length = 0, this.red = null, k !== null && ((i === "le" || i === "be") && (h = i, i = 10), this._init(k || 0, i || 10, h || "be"));
        }
        typeof t == "object" ? t.exports = s : e.BN = s, s.BN = s, s.wordSize = 26;
        var l;
        try {
          typeof window < "u" && typeof window.Buffer < "u" ? l = window.Buffer : l = Js().Buffer;
        } catch {
        }
        s.isBN = function(i) {
          return i instanceof s ? true : i !== null && typeof i == "object" && i.constructor.wordSize === s.wordSize && Array.isArray(i.words);
        }, s.max = function(i, h) {
          return i.cmp(h) > 0 ? i : h;
        }, s.min = function(i, h) {
          return i.cmp(h) < 0 ? i : h;
        }, s.prototype._init = function(i, h, g) {
          if (typeof i == "number") return this._initNumber(i, h, g);
          if (typeof i == "object") return this._initArray(i, h, g);
          h === "hex" && (h = 16), r(h === (h | 0) && h >= 2 && h <= 36), i = i.toString().replace(/\s+/g, "");
          var m = 0;
          i[0] === "-" && (m++, this.negative = 1), m < i.length && (h === 16 ? this._parseHex(i, m, g) : (this._parseBase(i, h, m), g === "le" && this._initArray(this.toArray(), h, g)));
        }, s.prototype._initNumber = function(i, h, g) {
          i < 0 && (this.negative = 1, i = -i), i < 67108864 ? (this.words = [
            i & 67108863
          ], this.length = 1) : i < 4503599627370496 ? (this.words = [
            i & 67108863,
            i / 67108864 & 67108863
          ], this.length = 2) : (r(i < 9007199254740992), this.words = [
            i & 67108863,
            i / 67108864 & 67108863,
            1
          ], this.length = 3), g === "le" && this._initArray(this.toArray(), h, g);
        }, s.prototype._initArray = function(i, h, g) {
          if (r(typeof i.length == "number"), i.length <= 0) return this.words = [
            0
          ], this.length = 1, this;
          this.length = Math.ceil(i.length / 3), this.words = new Array(this.length);
          for (var m = 0; m < this.length; m++) this.words[m] = 0;
          var w, f, c = 0;
          if (g === "be") for (m = i.length - 1, w = 0; m >= 0; m -= 3) f = i[m] | i[m - 1] << 8 | i[m - 2] << 16, this.words[w] |= f << c & 67108863, this.words[w + 1] = f >>> 26 - c & 67108863, c += 24, c >= 26 && (c -= 26, w++);
          else if (g === "le") for (m = 0, w = 0; m < i.length; m += 3) f = i[m] | i[m + 1] << 8 | i[m + 2] << 16, this.words[w] |= f << c & 67108863, this.words[w + 1] = f >>> 26 - c & 67108863, c += 24, c >= 26 && (c -= 26, w++);
          return this._strip();
        };
        function p(k, i) {
          var h = k.charCodeAt(i);
          if (h >= 48 && h <= 57) return h - 48;
          if (h >= 65 && h <= 70) return h - 55;
          if (h >= 97 && h <= 102) return h - 87;
          r(false, "Invalid character in " + k);
        }
        function y(k, i, h) {
          var g = p(k, h);
          return h - 1 >= i && (g |= p(k, h - 1) << 4), g;
        }
        s.prototype._parseHex = function(i, h, g) {
          this.length = Math.ceil((i.length - h) / 6), this.words = new Array(this.length);
          for (var m = 0; m < this.length; m++) this.words[m] = 0;
          var w = 0, f = 0, c;
          if (g === "be") for (m = i.length - 1; m >= h; m -= 2) c = y(i, h, m) << w, this.words[f] |= c & 67108863, w >= 18 ? (w -= 18, f += 1, this.words[f] |= c >>> 26) : w += 8;
          else {
            var a = i.length - h;
            for (m = a % 2 === 0 ? h + 1 : h; m < i.length; m += 2) c = y(i, h, m) << w, this.words[f] |= c & 67108863, w >= 18 ? (w -= 18, f += 1, this.words[f] |= c >>> 26) : w += 8;
          }
          this._strip();
        };
        function S(k, i, h, g) {
          for (var m = 0, w = 0, f = Math.min(k.length, h), c = i; c < f; c++) {
            var a = k.charCodeAt(c) - 48;
            m *= g, a >= 49 ? w = a - 49 + 10 : a >= 17 ? w = a - 17 + 10 : w = a, r(a >= 0 && w < g, "Invalid character"), m += w;
          }
          return m;
        }
        s.prototype._parseBase = function(i, h, g) {
          this.words = [
            0
          ], this.length = 1;
          for (var m = 0, w = 1; w <= 67108863; w *= h) m++;
          m--, w = w / h | 0;
          for (var f = i.length - g, c = f % m, a = Math.min(f, f - c) + g, n = 0, d = g; d < a; d += m) n = S(i, d, d + m, h), this.imuln(w), this.words[0] + n < 67108864 ? this.words[0] += n : this._iaddn(n);
          if (c !== 0) {
            var A = 1;
            for (n = S(i, d, i.length, h), d = 0; d < c; d++) A *= h;
            this.imuln(A), this.words[0] + n < 67108864 ? this.words[0] += n : this._iaddn(n);
          }
          this._strip();
        }, s.prototype.copy = function(i) {
          i.words = new Array(this.length);
          for (var h = 0; h < this.length; h++) i.words[h] = this.words[h];
          i.length = this.length, i.negative = this.negative, i.red = this.red;
        };
        function _(k, i) {
          k.words = i.words, k.length = i.length, k.negative = i.negative, k.red = i.red;
        }
        if (s.prototype._move = function(i) {
          _(i, this);
        }, s.prototype.clone = function() {
          var i = new s(null);
          return this.copy(i), i;
        }, s.prototype._expand = function(i) {
          for (; this.length < i; ) this.words[this.length++] = 0;
          return this;
        }, s.prototype._strip = function() {
          for (; this.length > 1 && this.words[this.length - 1] === 0; ) this.length--;
          return this._normSign();
        }, s.prototype._normSign = function() {
          return this.length === 1 && this.words[0] === 0 && (this.negative = 0), this;
        }, typeof Symbol < "u" && typeof Symbol.for == "function") try {
          s.prototype[Symbol.for("nodejs.util.inspect.custom")] = I;
        } catch {
          s.prototype.inspect = I;
        }
        else s.prototype.inspect = I;
        function I() {
          return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
        }
        var L = [
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
        ], x = [
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
        ], P = [
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
        s.prototype.toString = function(i, h) {
          i = i || 10, h = h | 0 || 1;
          var g;
          if (i === 16 || i === "hex") {
            g = "";
            for (var m = 0, w = 0, f = 0; f < this.length; f++) {
              var c = this.words[f], a = ((c << m | w) & 16777215).toString(16);
              w = c >>> 24 - m & 16777215, m += 2, m >= 26 && (m -= 26, f--), w !== 0 || f !== this.length - 1 ? g = L[6 - a.length] + a + g : g = a + g;
            }
            for (w !== 0 && (g = w.toString(16) + g); g.length % h !== 0; ) g = "0" + g;
            return this.negative !== 0 && (g = "-" + g), g;
          }
          if (i === (i | 0) && i >= 2 && i <= 36) {
            var n = x[i], d = P[i];
            g = "";
            var A = this.clone();
            for (A.negative = 0; !A.isZero(); ) {
              var z = A.modrn(d).toString(i);
              A = A.idivn(d), A.isZero() ? g = z + g : g = L[n - z.length] + z + g;
            }
            for (this.isZero() && (g = "0" + g); g.length % h !== 0; ) g = "0" + g;
            return this.negative !== 0 && (g = "-" + g), g;
          }
          r(false, "Base should be between 2 and 36");
        }, s.prototype.toNumber = function() {
          var i = this.words[0];
          return this.length === 2 ? i += this.words[1] * 67108864 : this.length === 3 && this.words[2] === 1 ? i += 4503599627370496 + this.words[1] * 67108864 : this.length > 2 && r(false, "Number can only safely store up to 53 bits"), this.negative !== 0 ? -i : i;
        }, s.prototype.toJSON = function() {
          return this.toString(16, 2);
        }, l && (s.prototype.toBuffer = function(i, h) {
          return this.toArrayLike(l, i, h);
        }), s.prototype.toArray = function(i, h) {
          return this.toArrayLike(Array, i, h);
        };
        var T = function(i, h) {
          return i.allocUnsafe ? i.allocUnsafe(h) : new i(h);
        };
        s.prototype.toArrayLike = function(i, h, g) {
          this._strip();
          var m = this.byteLength(), w = g || Math.max(1, m);
          r(m <= w, "byte array longer than desired length"), r(w > 0, "Requested array length <= 0");
          var f = T(i, w), c = h === "le" ? "LE" : "BE";
          return this["_toArrayLike" + c](f, m), f;
        }, s.prototype._toArrayLikeLE = function(i, h) {
          for (var g = 0, m = 0, w = 0, f = 0; w < this.length; w++) {
            var c = this.words[w] << f | m;
            i[g++] = c & 255, g < i.length && (i[g++] = c >> 8 & 255), g < i.length && (i[g++] = c >> 16 & 255), f === 6 ? (g < i.length && (i[g++] = c >> 24 & 255), m = 0, f = 0) : (m = c >>> 24, f += 2);
          }
          if (g < i.length) for (i[g++] = m; g < i.length; ) i[g++] = 0;
        }, s.prototype._toArrayLikeBE = function(i, h) {
          for (var g = i.length - 1, m = 0, w = 0, f = 0; w < this.length; w++) {
            var c = this.words[w] << f | m;
            i[g--] = c & 255, g >= 0 && (i[g--] = c >> 8 & 255), g >= 0 && (i[g--] = c >> 16 & 255), f === 6 ? (g >= 0 && (i[g--] = c >> 24 & 255), m = 0, f = 0) : (m = c >>> 24, f += 2);
          }
          if (g >= 0) for (i[g--] = m; g >= 0; ) i[g--] = 0;
        }, Math.clz32 ? s.prototype._countBits = function(i) {
          return 32 - Math.clz32(i);
        } : s.prototype._countBits = function(i) {
          var h = i, g = 0;
          return h >= 4096 && (g += 13, h >>>= 13), h >= 64 && (g += 7, h >>>= 7), h >= 8 && (g += 4, h >>>= 4), h >= 2 && (g += 2, h >>>= 2), g + h;
        }, s.prototype._zeroBits = function(i) {
          if (i === 0) return 26;
          var h = i, g = 0;
          return (h & 8191) === 0 && (g += 13, h >>>= 13), (h & 127) === 0 && (g += 7, h >>>= 7), (h & 15) === 0 && (g += 4, h >>>= 4), (h & 3) === 0 && (g += 2, h >>>= 2), (h & 1) === 0 && g++, g;
        }, s.prototype.bitLength = function() {
          var i = this.words[this.length - 1], h = this._countBits(i);
          return (this.length - 1) * 26 + h;
        };
        function E(k) {
          for (var i = new Array(k.bitLength()), h = 0; h < i.length; h++) {
            var g = h / 26 | 0, m = h % 26;
            i[h] = k.words[g] >>> m & 1;
          }
          return i;
        }
        s.prototype.zeroBits = function() {
          if (this.isZero()) return 0;
          for (var i = 0, h = 0; h < this.length; h++) {
            var g = this._zeroBits(this.words[h]);
            if (i += g, g !== 26) break;
          }
          return i;
        }, s.prototype.byteLength = function() {
          return Math.ceil(this.bitLength() / 8);
        }, s.prototype.toTwos = function(i) {
          return this.negative !== 0 ? this.abs().inotn(i).iaddn(1) : this.clone();
        }, s.prototype.fromTwos = function(i) {
          return this.testn(i - 1) ? this.notn(i).iaddn(1).ineg() : this.clone();
        }, s.prototype.isNeg = function() {
          return this.negative !== 0;
        }, s.prototype.neg = function() {
          return this.clone().ineg();
        }, s.prototype.ineg = function() {
          return this.isZero() || (this.negative ^= 1), this;
        }, s.prototype.iuor = function(i) {
          for (; this.length < i.length; ) this.words[this.length++] = 0;
          for (var h = 0; h < i.length; h++) this.words[h] = this.words[h] | i.words[h];
          return this._strip();
        }, s.prototype.ior = function(i) {
          return r((this.negative | i.negative) === 0), this.iuor(i);
        }, s.prototype.or = function(i) {
          return this.length > i.length ? this.clone().ior(i) : i.clone().ior(this);
        }, s.prototype.uor = function(i) {
          return this.length > i.length ? this.clone().iuor(i) : i.clone().iuor(this);
        }, s.prototype.iuand = function(i) {
          var h;
          this.length > i.length ? h = i : h = this;
          for (var g = 0; g < h.length; g++) this.words[g] = this.words[g] & i.words[g];
          return this.length = h.length, this._strip();
        }, s.prototype.iand = function(i) {
          return r((this.negative | i.negative) === 0), this.iuand(i);
        }, s.prototype.and = function(i) {
          return this.length > i.length ? this.clone().iand(i) : i.clone().iand(this);
        }, s.prototype.uand = function(i) {
          return this.length > i.length ? this.clone().iuand(i) : i.clone().iuand(this);
        }, s.prototype.iuxor = function(i) {
          var h, g;
          this.length > i.length ? (h = this, g = i) : (h = i, g = this);
          for (var m = 0; m < g.length; m++) this.words[m] = h.words[m] ^ g.words[m];
          if (this !== h) for (; m < h.length; m++) this.words[m] = h.words[m];
          return this.length = h.length, this._strip();
        }, s.prototype.ixor = function(i) {
          return r((this.negative | i.negative) === 0), this.iuxor(i);
        }, s.prototype.xor = function(i) {
          return this.length > i.length ? this.clone().ixor(i) : i.clone().ixor(this);
        }, s.prototype.uxor = function(i) {
          return this.length > i.length ? this.clone().iuxor(i) : i.clone().iuxor(this);
        }, s.prototype.inotn = function(i) {
          r(typeof i == "number" && i >= 0);
          var h = Math.ceil(i / 26) | 0, g = i % 26;
          this._expand(h), g > 0 && h--;
          for (var m = 0; m < h; m++) this.words[m] = ~this.words[m] & 67108863;
          for (g > 0 && (this.words[m] = ~this.words[m] & 67108863 >> 26 - g, m++); m < this.length; m++) this.words[m] = 0;
          return this._strip();
        }, s.prototype.notn = function(i) {
          return this.clone().inotn(i);
        }, s.prototype.setn = function(i, h) {
          r(typeof i == "number" && i >= 0);
          var g = i / 26 | 0, m = i % 26;
          return this._expand(g + 1), h ? this.words[g] = this.words[g] | 1 << m : this.words[g] = this.words[g] & ~(1 << m), this._strip();
        }, s.prototype.iadd = function(i) {
          var h;
          if (this.negative !== 0 && i.negative === 0) return this.negative = 0, h = this.isub(i), this.negative ^= 1, this._normSign();
          if (this.negative === 0 && i.negative !== 0) return i.negative = 0, h = this.isub(i), i.negative = 1, h._normSign();
          var g, m;
          this.length > i.length ? (g = this, m = i) : (g = i, m = this);
          for (var w = 0, f = 0; f < m.length; f++) h = (g.words[f] | 0) + (m.words[f] | 0) + w, this.words[f] = h & 67108863, w = h >>> 26;
          for (; w !== 0 && f < g.length; f++) h = (g.words[f] | 0) + w, this.words[f] = h & 67108863, w = h >>> 26;
          if (this.length = g.length, w !== 0) this.words[this.length] = w, this.length++;
          else if (g !== this) for (; f < g.length; f++) this.words[f] = g.words[f];
          return this;
        }, s.prototype.add = function(i) {
          var h;
          return i.negative !== 0 && this.negative === 0 ? (i.negative = 0, h = this.sub(i), i.negative ^= 1, h) : i.negative === 0 && this.negative !== 0 ? (this.negative = 0, h = i.sub(this), this.negative = 1, h) : this.length > i.length ? this.clone().iadd(i) : i.clone().iadd(this);
        }, s.prototype.isub = function(i) {
          if (i.negative !== 0) {
            i.negative = 0;
            var h = this.iadd(i);
            return i.negative = 1, h._normSign();
          } else if (this.negative !== 0) return this.negative = 0, this.iadd(i), this.negative = 1, this._normSign();
          var g = this.cmp(i);
          if (g === 0) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
          var m, w;
          g > 0 ? (m = this, w = i) : (m = i, w = this);
          for (var f = 0, c = 0; c < w.length; c++) h = (m.words[c] | 0) - (w.words[c] | 0) + f, f = h >> 26, this.words[c] = h & 67108863;
          for (; f !== 0 && c < m.length; c++) h = (m.words[c] | 0) + f, f = h >> 26, this.words[c] = h & 67108863;
          if (f === 0 && c < m.length && m !== this) for (; c < m.length; c++) this.words[c] = m.words[c];
          return this.length = Math.max(this.length, c), m !== this && (this.negative = 1), this._strip();
        }, s.prototype.sub = function(i) {
          return this.clone().isub(i);
        };
        function U(k, i, h) {
          h.negative = i.negative ^ k.negative;
          var g = k.length + i.length | 0;
          h.length = g, g = g - 1 | 0;
          var m = k.words[0] | 0, w = i.words[0] | 0, f = m * w, c = f & 67108863, a = f / 67108864 | 0;
          h.words[0] = c;
          for (var n = 1; n < g; n++) {
            for (var d = a >>> 26, A = a & 67108863, z = Math.min(n, i.length - 1), W = Math.max(0, n - k.length + 1); W <= z; W++) {
              var at = n - W | 0;
              m = k.words[at] | 0, w = i.words[W] | 0, f = m * w + A, d += f / 67108864 | 0, A = f & 67108863;
            }
            h.words[n] = A | 0, a = d | 0;
          }
          return a !== 0 ? h.words[n] = a | 0 : h.length--, h._strip();
        }
        var J = function(i, h, g) {
          var m = i.words, w = h.words, f = g.words, c = 0, a, n, d, A = m[0] | 0, z = A & 8191, W = A >>> 13, at = m[1] | 0, tt = at & 8191, it = at >>> 13, un = m[2] | 0, ut = un & 8191, lt = un >>> 13, ln = m[3] | 0, ht = ln & 8191, dt = ln >>> 13, hn = m[4] | 0, ft = hn & 8191, pt = hn >>> 13, dn = m[5] | 0, gt = dn & 8191, yt = dn >>> 13, fn = m[6] | 0, mt = fn & 8191, bt = fn >>> 13, pn = m[7] | 0, wt = pn & 8191, kt = pn >>> 13, gn = m[8] | 0, vt = gn & 8191, St = gn >>> 13, yn = m[9] | 0, _t = yn & 8191, It = yn >>> 13, mn = w[0] | 0, At = mn & 8191, Et = mn >>> 13, bn = w[1] | 0, xt = bn & 8191, Rt = bn >>> 13, wn = w[2] | 0, Mt = wn & 8191, Pt = wn >>> 13, kn = w[3] | 0, Tt = kn & 8191, Bt = kn >>> 13, vn = w[4] | 0, Lt = vn & 8191, Ct = vn >>> 13, Sn = w[5] | 0, Nt = Sn & 8191, zt = Sn >>> 13, _n = w[6] | 0, Ot = _n & 8191, Kt = _n >>> 13, In = w[7] | 0, Wt = In & 8191, Ut = In >>> 13, An = w[8] | 0, qt = An & 8191, Dt = An >>> 13, En = w[9] | 0, Ft = En & 8191, Vt = En >>> 13;
          g.negative = i.negative ^ h.negative, g.length = 19, a = Math.imul(z, At), n = Math.imul(z, Et), n = n + Math.imul(W, At) | 0, d = Math.imul(W, Et);
          var cr = (c + a | 0) + ((n & 8191) << 13) | 0;
          c = (d + (n >>> 13) | 0) + (cr >>> 26) | 0, cr &= 67108863, a = Math.imul(tt, At), n = Math.imul(tt, Et), n = n + Math.imul(it, At) | 0, d = Math.imul(it, Et), a = a + Math.imul(z, xt) | 0, n = n + Math.imul(z, Rt) | 0, n = n + Math.imul(W, xt) | 0, d = d + Math.imul(W, Rt) | 0;
          var ur = (c + a | 0) + ((n & 8191) << 13) | 0;
          c = (d + (n >>> 13) | 0) + (ur >>> 26) | 0, ur &= 67108863, a = Math.imul(ut, At), n = Math.imul(ut, Et), n = n + Math.imul(lt, At) | 0, d = Math.imul(lt, Et), a = a + Math.imul(tt, xt) | 0, n = n + Math.imul(tt, Rt) | 0, n = n + Math.imul(it, xt) | 0, d = d + Math.imul(it, Rt) | 0, a = a + Math.imul(z, Mt) | 0, n = n + Math.imul(z, Pt) | 0, n = n + Math.imul(W, Mt) | 0, d = d + Math.imul(W, Pt) | 0;
          var lr = (c + a | 0) + ((n & 8191) << 13) | 0;
          c = (d + (n >>> 13) | 0) + (lr >>> 26) | 0, lr &= 67108863, a = Math.imul(ht, At), n = Math.imul(ht, Et), n = n + Math.imul(dt, At) | 0, d = Math.imul(dt, Et), a = a + Math.imul(ut, xt) | 0, n = n + Math.imul(ut, Rt) | 0, n = n + Math.imul(lt, xt) | 0, d = d + Math.imul(lt, Rt) | 0, a = a + Math.imul(tt, Mt) | 0, n = n + Math.imul(tt, Pt) | 0, n = n + Math.imul(it, Mt) | 0, d = d + Math.imul(it, Pt) | 0, a = a + Math.imul(z, Tt) | 0, n = n + Math.imul(z, Bt) | 0, n = n + Math.imul(W, Tt) | 0, d = d + Math.imul(W, Bt) | 0;
          var hr = (c + a | 0) + ((n & 8191) << 13) | 0;
          c = (d + (n >>> 13) | 0) + (hr >>> 26) | 0, hr &= 67108863, a = Math.imul(ft, At), n = Math.imul(ft, Et), n = n + Math.imul(pt, At) | 0, d = Math.imul(pt, Et), a = a + Math.imul(ht, xt) | 0, n = n + Math.imul(ht, Rt) | 0, n = n + Math.imul(dt, xt) | 0, d = d + Math.imul(dt, Rt) | 0, a = a + Math.imul(ut, Mt) | 0, n = n + Math.imul(ut, Pt) | 0, n = n + Math.imul(lt, Mt) | 0, d = d + Math.imul(lt, Pt) | 0, a = a + Math.imul(tt, Tt) | 0, n = n + Math.imul(tt, Bt) | 0, n = n + Math.imul(it, Tt) | 0, d = d + Math.imul(it, Bt) | 0, a = a + Math.imul(z, Lt) | 0, n = n + Math.imul(z, Ct) | 0, n = n + Math.imul(W, Lt) | 0, d = d + Math.imul(W, Ct) | 0;
          var dr = (c + a | 0) + ((n & 8191) << 13) | 0;
          c = (d + (n >>> 13) | 0) + (dr >>> 26) | 0, dr &= 67108863, a = Math.imul(gt, At), n = Math.imul(gt, Et), n = n + Math.imul(yt, At) | 0, d = Math.imul(yt, Et), a = a + Math.imul(ft, xt) | 0, n = n + Math.imul(ft, Rt) | 0, n = n + Math.imul(pt, xt) | 0, d = d + Math.imul(pt, Rt) | 0, a = a + Math.imul(ht, Mt) | 0, n = n + Math.imul(ht, Pt) | 0, n = n + Math.imul(dt, Mt) | 0, d = d + Math.imul(dt, Pt) | 0, a = a + Math.imul(ut, Tt) | 0, n = n + Math.imul(ut, Bt) | 0, n = n + Math.imul(lt, Tt) | 0, d = d + Math.imul(lt, Bt) | 0, a = a + Math.imul(tt, Lt) | 0, n = n + Math.imul(tt, Ct) | 0, n = n + Math.imul(it, Lt) | 0, d = d + Math.imul(it, Ct) | 0, a = a + Math.imul(z, Nt) | 0, n = n + Math.imul(z, zt) | 0, n = n + Math.imul(W, Nt) | 0, d = d + Math.imul(W, zt) | 0;
          var fr = (c + a | 0) + ((n & 8191) << 13) | 0;
          c = (d + (n >>> 13) | 0) + (fr >>> 26) | 0, fr &= 67108863, a = Math.imul(mt, At), n = Math.imul(mt, Et), n = n + Math.imul(bt, At) | 0, d = Math.imul(bt, Et), a = a + Math.imul(gt, xt) | 0, n = n + Math.imul(gt, Rt) | 0, n = n + Math.imul(yt, xt) | 0, d = d + Math.imul(yt, Rt) | 0, a = a + Math.imul(ft, Mt) | 0, n = n + Math.imul(ft, Pt) | 0, n = n + Math.imul(pt, Mt) | 0, d = d + Math.imul(pt, Pt) | 0, a = a + Math.imul(ht, Tt) | 0, n = n + Math.imul(ht, Bt) | 0, n = n + Math.imul(dt, Tt) | 0, d = d + Math.imul(dt, Bt) | 0, a = a + Math.imul(ut, Lt) | 0, n = n + Math.imul(ut, Ct) | 0, n = n + Math.imul(lt, Lt) | 0, d = d + Math.imul(lt, Ct) | 0, a = a + Math.imul(tt, Nt) | 0, n = n + Math.imul(tt, zt) | 0, n = n + Math.imul(it, Nt) | 0, d = d + Math.imul(it, zt) | 0, a = a + Math.imul(z, Ot) | 0, n = n + Math.imul(z, Kt) | 0, n = n + Math.imul(W, Ot) | 0, d = d + Math.imul(W, Kt) | 0;
          var pr = (c + a | 0) + ((n & 8191) << 13) | 0;
          c = (d + (n >>> 13) | 0) + (pr >>> 26) | 0, pr &= 67108863, a = Math.imul(wt, At), n = Math.imul(wt, Et), n = n + Math.imul(kt, At) | 0, d = Math.imul(kt, Et), a = a + Math.imul(mt, xt) | 0, n = n + Math.imul(mt, Rt) | 0, n = n + Math.imul(bt, xt) | 0, d = d + Math.imul(bt, Rt) | 0, a = a + Math.imul(gt, Mt) | 0, n = n + Math.imul(gt, Pt) | 0, n = n + Math.imul(yt, Mt) | 0, d = d + Math.imul(yt, Pt) | 0, a = a + Math.imul(ft, Tt) | 0, n = n + Math.imul(ft, Bt) | 0, n = n + Math.imul(pt, Tt) | 0, d = d + Math.imul(pt, Bt) | 0, a = a + Math.imul(ht, Lt) | 0, n = n + Math.imul(ht, Ct) | 0, n = n + Math.imul(dt, Lt) | 0, d = d + Math.imul(dt, Ct) | 0, a = a + Math.imul(ut, Nt) | 0, n = n + Math.imul(ut, zt) | 0, n = n + Math.imul(lt, Nt) | 0, d = d + Math.imul(lt, zt) | 0, a = a + Math.imul(tt, Ot) | 0, n = n + Math.imul(tt, Kt) | 0, n = n + Math.imul(it, Ot) | 0, d = d + Math.imul(it, Kt) | 0, a = a + Math.imul(z, Wt) | 0, n = n + Math.imul(z, Ut) | 0, n = n + Math.imul(W, Wt) | 0, d = d + Math.imul(W, Ut) | 0;
          var gr = (c + a | 0) + ((n & 8191) << 13) | 0;
          c = (d + (n >>> 13) | 0) + (gr >>> 26) | 0, gr &= 67108863, a = Math.imul(vt, At), n = Math.imul(vt, Et), n = n + Math.imul(St, At) | 0, d = Math.imul(St, Et), a = a + Math.imul(wt, xt) | 0, n = n + Math.imul(wt, Rt) | 0, n = n + Math.imul(kt, xt) | 0, d = d + Math.imul(kt, Rt) | 0, a = a + Math.imul(mt, Mt) | 0, n = n + Math.imul(mt, Pt) | 0, n = n + Math.imul(bt, Mt) | 0, d = d + Math.imul(bt, Pt) | 0, a = a + Math.imul(gt, Tt) | 0, n = n + Math.imul(gt, Bt) | 0, n = n + Math.imul(yt, Tt) | 0, d = d + Math.imul(yt, Bt) | 0, a = a + Math.imul(ft, Lt) | 0, n = n + Math.imul(ft, Ct) | 0, n = n + Math.imul(pt, Lt) | 0, d = d + Math.imul(pt, Ct) | 0, a = a + Math.imul(ht, Nt) | 0, n = n + Math.imul(ht, zt) | 0, n = n + Math.imul(dt, Nt) | 0, d = d + Math.imul(dt, zt) | 0, a = a + Math.imul(ut, Ot) | 0, n = n + Math.imul(ut, Kt) | 0, n = n + Math.imul(lt, Ot) | 0, d = d + Math.imul(lt, Kt) | 0, a = a + Math.imul(tt, Wt) | 0, n = n + Math.imul(tt, Ut) | 0, n = n + Math.imul(it, Wt) | 0, d = d + Math.imul(it, Ut) | 0, a = a + Math.imul(z, qt) | 0, n = n + Math.imul(z, Dt) | 0, n = n + Math.imul(W, qt) | 0, d = d + Math.imul(W, Dt) | 0;
          var yr = (c + a | 0) + ((n & 8191) << 13) | 0;
          c = (d + (n >>> 13) | 0) + (yr >>> 26) | 0, yr &= 67108863, a = Math.imul(_t, At), n = Math.imul(_t, Et), n = n + Math.imul(It, At) | 0, d = Math.imul(It, Et), a = a + Math.imul(vt, xt) | 0, n = n + Math.imul(vt, Rt) | 0, n = n + Math.imul(St, xt) | 0, d = d + Math.imul(St, Rt) | 0, a = a + Math.imul(wt, Mt) | 0, n = n + Math.imul(wt, Pt) | 0, n = n + Math.imul(kt, Mt) | 0, d = d + Math.imul(kt, Pt) | 0, a = a + Math.imul(mt, Tt) | 0, n = n + Math.imul(mt, Bt) | 0, n = n + Math.imul(bt, Tt) | 0, d = d + Math.imul(bt, Bt) | 0, a = a + Math.imul(gt, Lt) | 0, n = n + Math.imul(gt, Ct) | 0, n = n + Math.imul(yt, Lt) | 0, d = d + Math.imul(yt, Ct) | 0, a = a + Math.imul(ft, Nt) | 0, n = n + Math.imul(ft, zt) | 0, n = n + Math.imul(pt, Nt) | 0, d = d + Math.imul(pt, zt) | 0, a = a + Math.imul(ht, Ot) | 0, n = n + Math.imul(ht, Kt) | 0, n = n + Math.imul(dt, Ot) | 0, d = d + Math.imul(dt, Kt) | 0, a = a + Math.imul(ut, Wt) | 0, n = n + Math.imul(ut, Ut) | 0, n = n + Math.imul(lt, Wt) | 0, d = d + Math.imul(lt, Ut) | 0, a = a + Math.imul(tt, qt) | 0, n = n + Math.imul(tt, Dt) | 0, n = n + Math.imul(it, qt) | 0, d = d + Math.imul(it, Dt) | 0, a = a + Math.imul(z, Ft) | 0, n = n + Math.imul(z, Vt) | 0, n = n + Math.imul(W, Ft) | 0, d = d + Math.imul(W, Vt) | 0;
          var mr = (c + a | 0) + ((n & 8191) << 13) | 0;
          c = (d + (n >>> 13) | 0) + (mr >>> 26) | 0, mr &= 67108863, a = Math.imul(_t, xt), n = Math.imul(_t, Rt), n = n + Math.imul(It, xt) | 0, d = Math.imul(It, Rt), a = a + Math.imul(vt, Mt) | 0, n = n + Math.imul(vt, Pt) | 0, n = n + Math.imul(St, Mt) | 0, d = d + Math.imul(St, Pt) | 0, a = a + Math.imul(wt, Tt) | 0, n = n + Math.imul(wt, Bt) | 0, n = n + Math.imul(kt, Tt) | 0, d = d + Math.imul(kt, Bt) | 0, a = a + Math.imul(mt, Lt) | 0, n = n + Math.imul(mt, Ct) | 0, n = n + Math.imul(bt, Lt) | 0, d = d + Math.imul(bt, Ct) | 0, a = a + Math.imul(gt, Nt) | 0, n = n + Math.imul(gt, zt) | 0, n = n + Math.imul(yt, Nt) | 0, d = d + Math.imul(yt, zt) | 0, a = a + Math.imul(ft, Ot) | 0, n = n + Math.imul(ft, Kt) | 0, n = n + Math.imul(pt, Ot) | 0, d = d + Math.imul(pt, Kt) | 0, a = a + Math.imul(ht, Wt) | 0, n = n + Math.imul(ht, Ut) | 0, n = n + Math.imul(dt, Wt) | 0, d = d + Math.imul(dt, Ut) | 0, a = a + Math.imul(ut, qt) | 0, n = n + Math.imul(ut, Dt) | 0, n = n + Math.imul(lt, qt) | 0, d = d + Math.imul(lt, Dt) | 0, a = a + Math.imul(tt, Ft) | 0, n = n + Math.imul(tt, Vt) | 0, n = n + Math.imul(it, Ft) | 0, d = d + Math.imul(it, Vt) | 0;
          var br = (c + a | 0) + ((n & 8191) << 13) | 0;
          c = (d + (n >>> 13) | 0) + (br >>> 26) | 0, br &= 67108863, a = Math.imul(_t, Mt), n = Math.imul(_t, Pt), n = n + Math.imul(It, Mt) | 0, d = Math.imul(It, Pt), a = a + Math.imul(vt, Tt) | 0, n = n + Math.imul(vt, Bt) | 0, n = n + Math.imul(St, Tt) | 0, d = d + Math.imul(St, Bt) | 0, a = a + Math.imul(wt, Lt) | 0, n = n + Math.imul(wt, Ct) | 0, n = n + Math.imul(kt, Lt) | 0, d = d + Math.imul(kt, Ct) | 0, a = a + Math.imul(mt, Nt) | 0, n = n + Math.imul(mt, zt) | 0, n = n + Math.imul(bt, Nt) | 0, d = d + Math.imul(bt, zt) | 0, a = a + Math.imul(gt, Ot) | 0, n = n + Math.imul(gt, Kt) | 0, n = n + Math.imul(yt, Ot) | 0, d = d + Math.imul(yt, Kt) | 0, a = a + Math.imul(ft, Wt) | 0, n = n + Math.imul(ft, Ut) | 0, n = n + Math.imul(pt, Wt) | 0, d = d + Math.imul(pt, Ut) | 0, a = a + Math.imul(ht, qt) | 0, n = n + Math.imul(ht, Dt) | 0, n = n + Math.imul(dt, qt) | 0, d = d + Math.imul(dt, Dt) | 0, a = a + Math.imul(ut, Ft) | 0, n = n + Math.imul(ut, Vt) | 0, n = n + Math.imul(lt, Ft) | 0, d = d + Math.imul(lt, Vt) | 0;
          var wr = (c + a | 0) + ((n & 8191) << 13) | 0;
          c = (d + (n >>> 13) | 0) + (wr >>> 26) | 0, wr &= 67108863, a = Math.imul(_t, Tt), n = Math.imul(_t, Bt), n = n + Math.imul(It, Tt) | 0, d = Math.imul(It, Bt), a = a + Math.imul(vt, Lt) | 0, n = n + Math.imul(vt, Ct) | 0, n = n + Math.imul(St, Lt) | 0, d = d + Math.imul(St, Ct) | 0, a = a + Math.imul(wt, Nt) | 0, n = n + Math.imul(wt, zt) | 0, n = n + Math.imul(kt, Nt) | 0, d = d + Math.imul(kt, zt) | 0, a = a + Math.imul(mt, Ot) | 0, n = n + Math.imul(mt, Kt) | 0, n = n + Math.imul(bt, Ot) | 0, d = d + Math.imul(bt, Kt) | 0, a = a + Math.imul(gt, Wt) | 0, n = n + Math.imul(gt, Ut) | 0, n = n + Math.imul(yt, Wt) | 0, d = d + Math.imul(yt, Ut) | 0, a = a + Math.imul(ft, qt) | 0, n = n + Math.imul(ft, Dt) | 0, n = n + Math.imul(pt, qt) | 0, d = d + Math.imul(pt, Dt) | 0, a = a + Math.imul(ht, Ft) | 0, n = n + Math.imul(ht, Vt) | 0, n = n + Math.imul(dt, Ft) | 0, d = d + Math.imul(dt, Vt) | 0;
          var kr = (c + a | 0) + ((n & 8191) << 13) | 0;
          c = (d + (n >>> 13) | 0) + (kr >>> 26) | 0, kr &= 67108863, a = Math.imul(_t, Lt), n = Math.imul(_t, Ct), n = n + Math.imul(It, Lt) | 0, d = Math.imul(It, Ct), a = a + Math.imul(vt, Nt) | 0, n = n + Math.imul(vt, zt) | 0, n = n + Math.imul(St, Nt) | 0, d = d + Math.imul(St, zt) | 0, a = a + Math.imul(wt, Ot) | 0, n = n + Math.imul(wt, Kt) | 0, n = n + Math.imul(kt, Ot) | 0, d = d + Math.imul(kt, Kt) | 0, a = a + Math.imul(mt, Wt) | 0, n = n + Math.imul(mt, Ut) | 0, n = n + Math.imul(bt, Wt) | 0, d = d + Math.imul(bt, Ut) | 0, a = a + Math.imul(gt, qt) | 0, n = n + Math.imul(gt, Dt) | 0, n = n + Math.imul(yt, qt) | 0, d = d + Math.imul(yt, Dt) | 0, a = a + Math.imul(ft, Ft) | 0, n = n + Math.imul(ft, Vt) | 0, n = n + Math.imul(pt, Ft) | 0, d = d + Math.imul(pt, Vt) | 0;
          var vr = (c + a | 0) + ((n & 8191) << 13) | 0;
          c = (d + (n >>> 13) | 0) + (vr >>> 26) | 0, vr &= 67108863, a = Math.imul(_t, Nt), n = Math.imul(_t, zt), n = n + Math.imul(It, Nt) | 0, d = Math.imul(It, zt), a = a + Math.imul(vt, Ot) | 0, n = n + Math.imul(vt, Kt) | 0, n = n + Math.imul(St, Ot) | 0, d = d + Math.imul(St, Kt) | 0, a = a + Math.imul(wt, Wt) | 0, n = n + Math.imul(wt, Ut) | 0, n = n + Math.imul(kt, Wt) | 0, d = d + Math.imul(kt, Ut) | 0, a = a + Math.imul(mt, qt) | 0, n = n + Math.imul(mt, Dt) | 0, n = n + Math.imul(bt, qt) | 0, d = d + Math.imul(bt, Dt) | 0, a = a + Math.imul(gt, Ft) | 0, n = n + Math.imul(gt, Vt) | 0, n = n + Math.imul(yt, Ft) | 0, d = d + Math.imul(yt, Vt) | 0;
          var Sr = (c + a | 0) + ((n & 8191) << 13) | 0;
          c = (d + (n >>> 13) | 0) + (Sr >>> 26) | 0, Sr &= 67108863, a = Math.imul(_t, Ot), n = Math.imul(_t, Kt), n = n + Math.imul(It, Ot) | 0, d = Math.imul(It, Kt), a = a + Math.imul(vt, Wt) | 0, n = n + Math.imul(vt, Ut) | 0, n = n + Math.imul(St, Wt) | 0, d = d + Math.imul(St, Ut) | 0, a = a + Math.imul(wt, qt) | 0, n = n + Math.imul(wt, Dt) | 0, n = n + Math.imul(kt, qt) | 0, d = d + Math.imul(kt, Dt) | 0, a = a + Math.imul(mt, Ft) | 0, n = n + Math.imul(mt, Vt) | 0, n = n + Math.imul(bt, Ft) | 0, d = d + Math.imul(bt, Vt) | 0;
          var _r = (c + a | 0) + ((n & 8191) << 13) | 0;
          c = (d + (n >>> 13) | 0) + (_r >>> 26) | 0, _r &= 67108863, a = Math.imul(_t, Wt), n = Math.imul(_t, Ut), n = n + Math.imul(It, Wt) | 0, d = Math.imul(It, Ut), a = a + Math.imul(vt, qt) | 0, n = n + Math.imul(vt, Dt) | 0, n = n + Math.imul(St, qt) | 0, d = d + Math.imul(St, Dt) | 0, a = a + Math.imul(wt, Ft) | 0, n = n + Math.imul(wt, Vt) | 0, n = n + Math.imul(kt, Ft) | 0, d = d + Math.imul(kt, Vt) | 0;
          var Ir = (c + a | 0) + ((n & 8191) << 13) | 0;
          c = (d + (n >>> 13) | 0) + (Ir >>> 26) | 0, Ir &= 67108863, a = Math.imul(_t, qt), n = Math.imul(_t, Dt), n = n + Math.imul(It, qt) | 0, d = Math.imul(It, Dt), a = a + Math.imul(vt, Ft) | 0, n = n + Math.imul(vt, Vt) | 0, n = n + Math.imul(St, Ft) | 0, d = d + Math.imul(St, Vt) | 0;
          var Ar = (c + a | 0) + ((n & 8191) << 13) | 0;
          c = (d + (n >>> 13) | 0) + (Ar >>> 26) | 0, Ar &= 67108863, a = Math.imul(_t, Ft), n = Math.imul(_t, Vt), n = n + Math.imul(It, Ft) | 0, d = Math.imul(It, Vt);
          var Er = (c + a | 0) + ((n & 8191) << 13) | 0;
          return c = (d + (n >>> 13) | 0) + (Er >>> 26) | 0, Er &= 67108863, f[0] = cr, f[1] = ur, f[2] = lr, f[3] = hr, f[4] = dr, f[5] = fr, f[6] = pr, f[7] = gr, f[8] = yr, f[9] = mr, f[10] = br, f[11] = wr, f[12] = kr, f[13] = vr, f[14] = Sr, f[15] = _r, f[16] = Ir, f[17] = Ar, f[18] = Er, c !== 0 && (f[19] = c, g.length++), g;
        };
        Math.imul || (J = U);
        function j(k, i, h) {
          h.negative = i.negative ^ k.negative, h.length = k.length + i.length;
          for (var g = 0, m = 0, w = 0; w < h.length - 1; w++) {
            var f = m;
            m = 0;
            for (var c = g & 67108863, a = Math.min(w, i.length - 1), n = Math.max(0, w - k.length + 1); n <= a; n++) {
              var d = w - n, A = k.words[d] | 0, z = i.words[n] | 0, W = A * z, at = W & 67108863;
              f = f + (W / 67108864 | 0) | 0, at = at + c | 0, c = at & 67108863, f = f + (at >>> 26) | 0, m += f >>> 26, f &= 67108863;
            }
            h.words[w] = c, g = f, f = m;
          }
          return g !== 0 ? h.words[w] = g : h.length--, h._strip();
        }
        function Yt(k, i, h) {
          return j(k, i, h);
        }
        s.prototype.mulTo = function(i, h) {
          var g, m = this.length + i.length;
          return this.length === 10 && i.length === 10 ? g = J(this, i, h) : m < 63 ? g = U(this, i, h) : m < 1024 ? g = j(this, i, h) : g = Yt(this, i, h), g;
        }, s.prototype.mul = function(i) {
          var h = new s(null);
          return h.words = new Array(this.length + i.length), this.mulTo(i, h);
        }, s.prototype.mulf = function(i) {
          var h = new s(null);
          return h.words = new Array(this.length + i.length), Yt(this, i, h);
        }, s.prototype.imul = function(i) {
          return this.clone().mulTo(i, this);
        }, s.prototype.imuln = function(i) {
          var h = i < 0;
          h && (i = -i), r(typeof i == "number"), r(i < 67108864);
          for (var g = 0, m = 0; m < this.length; m++) {
            var w = (this.words[m] | 0) * i, f = (w & 67108863) + (g & 67108863);
            g >>= 26, g += w / 67108864 | 0, g += f >>> 26, this.words[m] = f & 67108863;
          }
          return g !== 0 && (this.words[m] = g, this.length++), i === 0 && (this.length = 1, this._normSign()), h ? this.ineg() : this;
        }, s.prototype.muln = function(i) {
          return this.clone().imuln(i);
        }, s.prototype.sqr = function() {
          return this.mul(this);
        }, s.prototype.isqr = function() {
          return this.imul(this.clone());
        }, s.prototype.pow = function(i) {
          var h = E(i);
          if (h.length === 0) return new s(1);
          for (var g = this, m = 0; m < h.length && h[m] === 0; m++, g = g.sqr()) ;
          if (++m < h.length) for (var w = g.sqr(); m < h.length; m++, w = w.sqr()) h[m] !== 0 && (g = g.mul(w));
          return g;
        }, s.prototype.iushln = function(i) {
          r(typeof i == "number" && i >= 0);
          var h = i % 26, g = (i - h) / 26, m = 67108863 >>> 26 - h << 26 - h, w;
          if (h !== 0) {
            var f = 0;
            for (w = 0; w < this.length; w++) {
              var c = this.words[w] & m, a = (this.words[w] | 0) - c << h;
              this.words[w] = a | f, f = c >>> 26 - h;
            }
            f && (this.words[w] = f, this.length++);
          }
          if (g !== 0) {
            for (w = this.length - 1; w >= 0; w--) this.words[w + g] = this.words[w];
            for (w = 0; w < g; w++) this.words[w] = 0;
            this.length += g;
          }
          return this._strip();
        }, s.prototype.ishln = function(i) {
          return r(this.negative === 0), this.iushln(i);
        }, s.prototype.iushrn = function(i, h, g) {
          r(typeof i == "number" && i >= 0);
          var m;
          h ? m = (h - h % 26) / 26 : m = 0;
          var w = i % 26, f = Math.min((i - w) / 26, this.length), c = 67108863 ^ 67108863 >>> w << w, a = g;
          if (m -= f, m = Math.max(0, m), a) {
            for (var n = 0; n < f; n++) a.words[n] = this.words[n];
            a.length = f;
          }
          if (f !== 0) if (this.length > f) for (this.length -= f, n = 0; n < this.length; n++) this.words[n] = this.words[n + f];
          else this.words[0] = 0, this.length = 1;
          var d = 0;
          for (n = this.length - 1; n >= 0 && (d !== 0 || n >= m); n--) {
            var A = this.words[n] | 0;
            this.words[n] = d << 26 - w | A >>> w, d = A & c;
          }
          return a && d !== 0 && (a.words[a.length++] = d), this.length === 0 && (this.words[0] = 0, this.length = 1), this._strip();
        }, s.prototype.ishrn = function(i, h, g) {
          return r(this.negative === 0), this.iushrn(i, h, g);
        }, s.prototype.shln = function(i) {
          return this.clone().ishln(i);
        }, s.prototype.ushln = function(i) {
          return this.clone().iushln(i);
        }, s.prototype.shrn = function(i) {
          return this.clone().ishrn(i);
        }, s.prototype.ushrn = function(i) {
          return this.clone().iushrn(i);
        }, s.prototype.testn = function(i) {
          r(typeof i == "number" && i >= 0);
          var h = i % 26, g = (i - h) / 26, m = 1 << h;
          if (this.length <= g) return false;
          var w = this.words[g];
          return !!(w & m);
        }, s.prototype.imaskn = function(i) {
          r(typeof i == "number" && i >= 0);
          var h = i % 26, g = (i - h) / 26;
          if (r(this.negative === 0, "imaskn works only with positive numbers"), this.length <= g) return this;
          if (h !== 0 && g++, this.length = Math.min(g, this.length), h !== 0) {
            var m = 67108863 ^ 67108863 >>> h << h;
            this.words[this.length - 1] &= m;
          }
          return this.length === 0 && (this.words[0] = 0, this.length = 1), this._strip();
        }, s.prototype.maskn = function(i) {
          return this.clone().imaskn(i);
        }, s.prototype.iaddn = function(i) {
          return r(typeof i == "number"), r(i < 67108864), i < 0 ? this.isubn(-i) : this.negative !== 0 ? this.length === 1 && (this.words[0] | 0) <= i ? (this.words[0] = i - (this.words[0] | 0), this.negative = 0, this) : (this.negative = 0, this.isubn(i), this.negative = 1, this) : this._iaddn(i);
        }, s.prototype._iaddn = function(i) {
          this.words[0] += i;
          for (var h = 0; h < this.length && this.words[h] >= 67108864; h++) this.words[h] -= 67108864, h === this.length - 1 ? this.words[h + 1] = 1 : this.words[h + 1]++;
          return this.length = Math.max(this.length, h + 1), this;
        }, s.prototype.isubn = function(i) {
          if (r(typeof i == "number"), r(i < 67108864), i < 0) return this.iaddn(-i);
          if (this.negative !== 0) return this.negative = 0, this.iaddn(i), this.negative = 1, this;
          if (this.words[0] -= i, this.length === 1 && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
          else for (var h = 0; h < this.length && this.words[h] < 0; h++) this.words[h] += 67108864, this.words[h + 1] -= 1;
          return this._strip();
        }, s.prototype.addn = function(i) {
          return this.clone().iaddn(i);
        }, s.prototype.subn = function(i) {
          return this.clone().isubn(i);
        }, s.prototype.iabs = function() {
          return this.negative = 0, this;
        }, s.prototype.abs = function() {
          return this.clone().iabs();
        }, s.prototype._ishlnsubmul = function(i, h, g) {
          var m = i.length + g, w;
          this._expand(m);
          var f, c = 0;
          for (w = 0; w < i.length; w++) {
            f = (this.words[w + g] | 0) + c;
            var a = (i.words[w] | 0) * h;
            f -= a & 67108863, c = (f >> 26) - (a / 67108864 | 0), this.words[w + g] = f & 67108863;
          }
          for (; w < this.length - g; w++) f = (this.words[w + g] | 0) + c, c = f >> 26, this.words[w + g] = f & 67108863;
          if (c === 0) return this._strip();
          for (r(c === -1), c = 0, w = 0; w < this.length; w++) f = -(this.words[w] | 0) + c, c = f >> 26, this.words[w] = f & 67108863;
          return this.negative = 1, this._strip();
        }, s.prototype._wordDiv = function(i, h) {
          var g = this.length - i.length, m = this.clone(), w = i, f = w.words[w.length - 1] | 0, c = this._countBits(f);
          g = 26 - c, g !== 0 && (w = w.ushln(g), m.iushln(g), f = w.words[w.length - 1] | 0);
          var a = m.length - w.length, n;
          if (h !== "mod") {
            n = new s(null), n.length = a + 1, n.words = new Array(n.length);
            for (var d = 0; d < n.length; d++) n.words[d] = 0;
          }
          var A = m.clone()._ishlnsubmul(w, 1, a);
          A.negative === 0 && (m = A, n && (n.words[a] = 1));
          for (var z = a - 1; z >= 0; z--) {
            var W = (m.words[w.length + z] | 0) * 67108864 + (m.words[w.length + z - 1] | 0);
            for (W = Math.min(W / f | 0, 67108863), m._ishlnsubmul(w, W, z); m.negative !== 0; ) W--, m.negative = 0, m._ishlnsubmul(w, 1, z), m.isZero() || (m.negative ^= 1);
            n && (n.words[z] = W);
          }
          return n && n._strip(), m._strip(), h !== "div" && g !== 0 && m.iushrn(g), {
            div: n || null,
            mod: m
          };
        }, s.prototype.divmod = function(i, h, g) {
          if (r(!i.isZero()), this.isZero()) return {
            div: new s(0),
            mod: new s(0)
          };
          var m, w, f;
          return this.negative !== 0 && i.negative === 0 ? (f = this.neg().divmod(i, h), h !== "mod" && (m = f.div.neg()), h !== "div" && (w = f.mod.neg(), g && w.negative !== 0 && w.iadd(i)), {
            div: m,
            mod: w
          }) : this.negative === 0 && i.negative !== 0 ? (f = this.divmod(i.neg(), h), h !== "mod" && (m = f.div.neg()), {
            div: m,
            mod: f.mod
          }) : (this.negative & i.negative) !== 0 ? (f = this.neg().divmod(i.neg(), h), h !== "div" && (w = f.mod.neg(), g && w.negative !== 0 && w.isub(i)), {
            div: f.div,
            mod: w
          }) : i.length > this.length || this.cmp(i) < 0 ? {
            div: new s(0),
            mod: this
          } : i.length === 1 ? h === "div" ? {
            div: this.divn(i.words[0]),
            mod: null
          } : h === "mod" ? {
            div: null,
            mod: new s(this.modrn(i.words[0]))
          } : {
            div: this.divn(i.words[0]),
            mod: new s(this.modrn(i.words[0]))
          } : this._wordDiv(i, h);
        }, s.prototype.div = function(i) {
          return this.divmod(i, "div", false).div;
        }, s.prototype.mod = function(i) {
          return this.divmod(i, "mod", false).mod;
        }, s.prototype.umod = function(i) {
          return this.divmod(i, "mod", true).mod;
        }, s.prototype.divRound = function(i) {
          var h = this.divmod(i);
          if (h.mod.isZero()) return h.div;
          var g = h.mod.abs(), m = i.abs().iushrn(1), w = i.words[0] & 1, f = g.cmp(m);
          if (f < 0 || w === 1 && f === 0) return h.div;
          var c = new s(1);
          return c.negative = this.negative ^ i.negative, h.div.iadd(c);
        }, s.prototype.modrn = function(i) {
          var h = i < 0;
          h && (i = -i), r(i <= 67108863);
          for (var g = (1 << 26) % i, m = 0, w = this.length - 1; w >= 0; w--) m = (g * m + (this.words[w] | 0)) % i;
          return h ? -m : m;
        }, s.prototype.modn = function(i) {
          return this.modrn(i);
        }, s.prototype.idivn = function(i) {
          var h = i < 0;
          h && (i = -i), r(i <= 67108863);
          for (var g = 0, m = this.length - 1; m >= 0; m--) {
            var w = (this.words[m] | 0) + g * 67108864;
            this.words[m] = w / i | 0, g = w % i;
          }
          return this._strip(), h ? this.ineg() : this;
        }, s.prototype.divn = function(i) {
          return this.clone().idivn(i);
        }, s.prototype.egcd = function(i) {
          r(i.negative === 0), r(!i.isZero());
          var h = this, g = i.clone();
          h.negative !== 0 ? h = h.umod(i) : h = h.clone();
          for (var m = new s(1), w = new s(0), f = new s(0), c = new s(1), a = 0; h.isEven() && g.isEven(); ) h.iushrn(1), g.iushrn(1), ++a;
          for (var n = g.clone(), d = h.clone(); !h.isZero(); ) {
            for (var A = 0, z = 1; (h.words[0] & z) === 0 && A < 26; ++A, z <<= 1) ;
            if (A > 0) for (h.iushrn(A); A-- > 0; ) (m.isOdd() || w.isOdd()) && (m.iadd(n), w.isub(d)), m.iushrn(1), w.iushrn(1);
            for (var W = 0, at = 1; (g.words[0] & at) === 0 && W < 26; ++W, at <<= 1) ;
            if (W > 0) for (g.iushrn(W); W-- > 0; ) (f.isOdd() || c.isOdd()) && (f.iadd(n), c.isub(d)), f.iushrn(1), c.iushrn(1);
            h.cmp(g) >= 0 ? (h.isub(g), m.isub(f), w.isub(c)) : (g.isub(h), f.isub(m), c.isub(w));
          }
          return {
            a: f,
            b: c,
            gcd: g.iushln(a)
          };
        }, s.prototype._invmp = function(i) {
          r(i.negative === 0), r(!i.isZero());
          var h = this, g = i.clone();
          h.negative !== 0 ? h = h.umod(i) : h = h.clone();
          for (var m = new s(1), w = new s(0), f = g.clone(); h.cmpn(1) > 0 && g.cmpn(1) > 0; ) {
            for (var c = 0, a = 1; (h.words[0] & a) === 0 && c < 26; ++c, a <<= 1) ;
            if (c > 0) for (h.iushrn(c); c-- > 0; ) m.isOdd() && m.iadd(f), m.iushrn(1);
            for (var n = 0, d = 1; (g.words[0] & d) === 0 && n < 26; ++n, d <<= 1) ;
            if (n > 0) for (g.iushrn(n); n-- > 0; ) w.isOdd() && w.iadd(f), w.iushrn(1);
            h.cmp(g) >= 0 ? (h.isub(g), m.isub(w)) : (g.isub(h), w.isub(m));
          }
          var A;
          return h.cmpn(1) === 0 ? A = m : A = w, A.cmpn(0) < 0 && A.iadd(i), A;
        }, s.prototype.gcd = function(i) {
          if (this.isZero()) return i.abs();
          if (i.isZero()) return this.abs();
          var h = this.clone(), g = i.clone();
          h.negative = 0, g.negative = 0;
          for (var m = 0; h.isEven() && g.isEven(); m++) h.iushrn(1), g.iushrn(1);
          do {
            for (; h.isEven(); ) h.iushrn(1);
            for (; g.isEven(); ) g.iushrn(1);
            var w = h.cmp(g);
            if (w < 0) {
              var f = h;
              h = g, g = f;
            } else if (w === 0 || g.cmpn(1) === 0) break;
            h.isub(g);
          } while (true);
          return g.iushln(m);
        }, s.prototype.invm = function(i) {
          return this.egcd(i).a.umod(i);
        }, s.prototype.isEven = function() {
          return (this.words[0] & 1) === 0;
        }, s.prototype.isOdd = function() {
          return (this.words[0] & 1) === 1;
        }, s.prototype.andln = function(i) {
          return this.words[0] & i;
        }, s.prototype.bincn = function(i) {
          r(typeof i == "number");
          var h = i % 26, g = (i - h) / 26, m = 1 << h;
          if (this.length <= g) return this._expand(g + 1), this.words[g] |= m, this;
          for (var w = m, f = g; w !== 0 && f < this.length; f++) {
            var c = this.words[f] | 0;
            c += w, w = c >>> 26, c &= 67108863, this.words[f] = c;
          }
          return w !== 0 && (this.words[f] = w, this.length++), this;
        }, s.prototype.isZero = function() {
          return this.length === 1 && this.words[0] === 0;
        }, s.prototype.cmpn = function(i) {
          var h = i < 0;
          if (this.negative !== 0 && !h) return -1;
          if (this.negative === 0 && h) return 1;
          this._strip();
          var g;
          if (this.length > 1) g = 1;
          else {
            h && (i = -i), r(i <= 67108863, "Number is too big");
            var m = this.words[0] | 0;
            g = m === i ? 0 : m < i ? -1 : 1;
          }
          return this.negative !== 0 ? -g | 0 : g;
        }, s.prototype.cmp = function(i) {
          if (this.negative !== 0 && i.negative === 0) return -1;
          if (this.negative === 0 && i.negative !== 0) return 1;
          var h = this.ucmp(i);
          return this.negative !== 0 ? -h | 0 : h;
        }, s.prototype.ucmp = function(i) {
          if (this.length > i.length) return 1;
          if (this.length < i.length) return -1;
          for (var h = 0, g = this.length - 1; g >= 0; g--) {
            var m = this.words[g] | 0, w = i.words[g] | 0;
            if (m !== w) {
              m < w ? h = -1 : m > w && (h = 1);
              break;
            }
          }
          return h;
        }, s.prototype.gtn = function(i) {
          return this.cmpn(i) === 1;
        }, s.prototype.gt = function(i) {
          return this.cmp(i) === 1;
        }, s.prototype.gten = function(i) {
          return this.cmpn(i) >= 0;
        }, s.prototype.gte = function(i) {
          return this.cmp(i) >= 0;
        }, s.prototype.ltn = function(i) {
          return this.cmpn(i) === -1;
        }, s.prototype.lt = function(i) {
          return this.cmp(i) === -1;
        }, s.prototype.lten = function(i) {
          return this.cmpn(i) <= 0;
        }, s.prototype.lte = function(i) {
          return this.cmp(i) <= 0;
        }, s.prototype.eqn = function(i) {
          return this.cmpn(i) === 0;
        }, s.prototype.eq = function(i) {
          return this.cmp(i) === 0;
        }, s.red = function(i) {
          return new Q(i);
        }, s.prototype.toRed = function(i) {
          return r(!this.red, "Already a number in reduction context"), r(this.negative === 0, "red works only with positives"), i.convertTo(this)._forceRed(i);
        }, s.prototype.fromRed = function() {
          return r(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this);
        }, s.prototype._forceRed = function(i) {
          return this.red = i, this;
        }, s.prototype.forceRed = function(i) {
          return r(!this.red, "Already a number in reduction context"), this._forceRed(i);
        }, s.prototype.redAdd = function(i) {
          return r(this.red, "redAdd works only with red numbers"), this.red.add(this, i);
        }, s.prototype.redIAdd = function(i) {
          return r(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, i);
        }, s.prototype.redSub = function(i) {
          return r(this.red, "redSub works only with red numbers"), this.red.sub(this, i);
        }, s.prototype.redISub = function(i) {
          return r(this.red, "redISub works only with red numbers"), this.red.isub(this, i);
        }, s.prototype.redShl = function(i) {
          return r(this.red, "redShl works only with red numbers"), this.red.shl(this, i);
        }, s.prototype.redMul = function(i) {
          return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, i), this.red.mul(this, i);
        }, s.prototype.redIMul = function(i) {
          return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, i), this.red.imul(this, i);
        }, s.prototype.redSqr = function() {
          return r(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this);
        }, s.prototype.redISqr = function() {
          return r(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this);
        }, s.prototype.redSqrt = function() {
          return r(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this);
        }, s.prototype.redInvm = function() {
          return r(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this);
        }, s.prototype.redNeg = function() {
          return r(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this);
        }, s.prototype.redPow = function(i) {
          return r(this.red && !i.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, i);
        };
        var ee = {
          k256: null,
          p224: null,
          p192: null,
          p25519: null
        };
        function Zt(k, i) {
          this.name = k, this.p = new s(i, 16), this.n = this.p.bitLength(), this.k = new s(1).iushln(this.n).isub(this.p), this.tmp = this._tmp();
        }
        Zt.prototype._tmp = function() {
          var i = new s(null);
          return i.words = new Array(Math.ceil(this.n / 13)), i;
        }, Zt.prototype.ireduce = function(i) {
          var h = i, g;
          do
            this.split(h, this.tmp), h = this.imulK(h), h = h.iadd(this.tmp), g = h.bitLength();
          while (g > this.n);
          var m = g < this.n ? -1 : h.ucmp(this.p);
          return m === 0 ? (h.words[0] = 0, h.length = 1) : m > 0 ? h.isub(this.p) : h.strip !== void 0 ? h.strip() : h._strip(), h;
        }, Zt.prototype.split = function(i, h) {
          i.iushrn(this.n, 0, h);
        }, Zt.prototype.imulK = function(i) {
          return i.imul(this.k);
        };
        function fe() {
          Zt.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f");
        }
        o(fe, Zt), fe.prototype.split = function(i, h) {
          for (var g = 4194303, m = Math.min(i.length, 9), w = 0; w < m; w++) h.words[w] = i.words[w];
          if (h.length = m, i.length <= 9) {
            i.words[0] = 0, i.length = 1;
            return;
          }
          var f = i.words[9];
          for (h.words[h.length++] = f & g, w = 10; w < i.length; w++) {
            var c = i.words[w] | 0;
            i.words[w - 10] = (c & g) << 4 | f >>> 22, f = c;
          }
          f >>>= 22, i.words[w - 10] = f, f === 0 && i.length > 10 ? i.length -= 10 : i.length -= 9;
        }, fe.prototype.imulK = function(i) {
          i.words[i.length] = 0, i.words[i.length + 1] = 0, i.length += 2;
          for (var h = 0, g = 0; g < i.length; g++) {
            var m = i.words[g] | 0;
            h += m * 977, i.words[g] = h & 67108863, h = m * 64 + (h / 67108864 | 0);
          }
          return i.words[i.length - 1] === 0 && (i.length--, i.words[i.length - 1] === 0 && i.length--), i;
        };
        function ye() {
          Zt.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001");
        }
        o(ye, Zt);
        function Ae() {
          Zt.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff");
        }
        o(Ae, Zt);
        function Ee() {
          Zt.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed");
        }
        o(Ee, Zt), Ee.prototype.imulK = function(i) {
          for (var h = 0, g = 0; g < i.length; g++) {
            var m = (i.words[g] | 0) * 19 + h, w = m & 67108863;
            m >>>= 26, i.words[g] = w, h = m;
          }
          return h !== 0 && (i.words[i.length++] = h), i;
        }, s._prime = function(i) {
          if (ee[i]) return ee[i];
          var h;
          if (i === "k256") h = new fe();
          else if (i === "p224") h = new ye();
          else if (i === "p192") h = new Ae();
          else if (i === "p25519") h = new Ee();
          else throw new Error("Unknown prime " + i);
          return ee[i] = h, h;
        };
        function Q(k) {
          if (typeof k == "string") {
            var i = s._prime(k);
            this.m = i.p, this.prime = i;
          } else r(k.gtn(1), "modulus must be greater than 1"), this.m = k, this.prime = null;
        }
        Q.prototype._verify1 = function(i) {
          r(i.negative === 0, "red works only with positives"), r(i.red, "red works only with red numbers");
        }, Q.prototype._verify2 = function(i, h) {
          r((i.negative | h.negative) === 0, "red works only with positives"), r(i.red && i.red === h.red, "red works only with red numbers");
        }, Q.prototype.imod = function(i) {
          return this.prime ? this.prime.ireduce(i)._forceRed(this) : (_(i, i.umod(this.m)._forceRed(this)), i);
        }, Q.prototype.neg = function(i) {
          return i.isZero() ? i.clone() : this.m.sub(i)._forceRed(this);
        }, Q.prototype.add = function(i, h) {
          this._verify2(i, h);
          var g = i.add(h);
          return g.cmp(this.m) >= 0 && g.isub(this.m), g._forceRed(this);
        }, Q.prototype.iadd = function(i, h) {
          this._verify2(i, h);
          var g = i.iadd(h);
          return g.cmp(this.m) >= 0 && g.isub(this.m), g;
        }, Q.prototype.sub = function(i, h) {
          this._verify2(i, h);
          var g = i.sub(h);
          return g.cmpn(0) < 0 && g.iadd(this.m), g._forceRed(this);
        }, Q.prototype.isub = function(i, h) {
          this._verify2(i, h);
          var g = i.isub(h);
          return g.cmpn(0) < 0 && g.iadd(this.m), g;
        }, Q.prototype.shl = function(i, h) {
          return this._verify1(i), this.imod(i.ushln(h));
        }, Q.prototype.imul = function(i, h) {
          return this._verify2(i, h), this.imod(i.imul(h));
        }, Q.prototype.mul = function(i, h) {
          return this._verify2(i, h), this.imod(i.mul(h));
        }, Q.prototype.isqr = function(i) {
          return this.imul(i, i.clone());
        }, Q.prototype.sqr = function(i) {
          return this.mul(i, i);
        }, Q.prototype.sqrt = function(i) {
          if (i.isZero()) return i.clone();
          var h = this.m.andln(3);
          if (r(h % 2 === 1), h === 3) {
            var g = this.m.add(new s(1)).iushrn(2);
            return this.pow(i, g);
          }
          for (var m = this.m.subn(1), w = 0; !m.isZero() && m.andln(1) === 0; ) w++, m.iushrn(1);
          r(!m.isZero());
          var f = new s(1).toRed(this), c = f.redNeg(), a = this.m.subn(1).iushrn(1), n = this.m.bitLength();
          for (n = new s(2 * n * n).toRed(this); this.pow(n, a).cmp(c) !== 0; ) n.redIAdd(c);
          for (var d = this.pow(n, m), A = this.pow(i, m.addn(1).iushrn(1)), z = this.pow(i, m), W = w; z.cmp(f) !== 0; ) {
            for (var at = z, tt = 0; at.cmp(f) !== 0; tt++) at = at.redSqr();
            r(tt < W);
            var it = this.pow(d, new s(1).iushln(W - tt - 1));
            A = A.redMul(it), d = it.redSqr(), z = z.redMul(d), W = tt;
          }
          return A;
        }, Q.prototype.invm = function(i) {
          var h = i._invmp(this.m);
          return h.negative !== 0 ? (h.negative = 0, this.imod(h).redNeg()) : this.imod(h);
        }, Q.prototype.pow = function(i, h) {
          if (h.isZero()) return new s(1).toRed(this);
          if (h.cmpn(1) === 0) return i.clone();
          var g = 4, m = new Array(1 << g);
          m[0] = new s(1).toRed(this), m[1] = i;
          for (var w = 2; w < m.length; w++) m[w] = this.mul(m[w - 1], i);
          var f = m[0], c = 0, a = 0, n = h.bitLength() % 26;
          for (n === 0 && (n = 26), w = h.length - 1; w >= 0; w--) {
            for (var d = h.words[w], A = n - 1; A >= 0; A--) {
              var z = d >> A & 1;
              if (f !== m[0] && (f = this.sqr(f)), z === 0 && c === 0) {
                a = 0;
                continue;
              }
              c <<= 1, c |= z, a++, !(a !== g && (w !== 0 || A !== 0)) && (f = this.mul(f, m[c]), a = 0, c = 0);
            }
            n = 26;
          }
          return f;
        }, Q.prototype.convertTo = function(i) {
          var h = i.umod(this.m);
          return h === i ? h.clone() : h;
        }, Q.prototype.convertFrom = function(i) {
          var h = i.clone();
          return h.red = null, h;
        }, s.mont = function(i) {
          return new ne(i);
        };
        function ne(k) {
          Q.call(this, k), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new s(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv);
        }
        o(ne, Q), ne.prototype.convertTo = function(i) {
          return this.imod(i.ushln(this.shift));
        }, ne.prototype.convertFrom = function(i) {
          var h = this.imod(i.mul(this.rinv));
          return h.red = null, h;
        }, ne.prototype.imul = function(i, h) {
          if (i.isZero() || h.isZero()) return i.words[0] = 0, i.length = 1, i;
          var g = i.imul(h), m = g.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), w = g.isub(m).iushrn(this.shift), f = w;
          return w.cmp(this.m) >= 0 ? f = w.isub(this.m) : w.cmpn(0) < 0 && (f = w.iadd(this.m)), f._forceRed(this);
        }, ne.prototype.mul = function(i, h) {
          if (i.isZero() || h.isZero()) return new s(0)._forceRed(this);
          var g = i.mul(h), m = g.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), w = g.isub(m).iushrn(this.shift), f = w;
          return w.cmp(this.m) >= 0 ? f = w.isub(this.m) : w.cmpn(0) < 0 && (f = w.iadd(this.m)), f._forceRed(this);
        }, ne.prototype.invm = function(i) {
          var h = this.imod(i._invmp(this.m).mul(this.r2));
          return h._forceRed(this);
        };
      })(u, Zs);
    })(Je)), Je.exports;
  }
  var Qs = Xs();
  const Bn = Gr(Qs);
  var Rr, Ln;
  function ti() {
    if (Ln) return Rr;
    Ln = 1;
    var u = Ys(), t = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
    return Rr = u(t), Rr;
  }
  var ei = ti();
  const Gt = Gr(ei);
  var ri = 8078e3, ni = 8078001, si = 8078004, ii = 8078005, oi = 8078006, ai = 8078011;
  function is(u) {
    return Array.isArray(u) ? "%5B" + u.map(is).join("%2C%20") + "%5D" : typeof u == "bigint" ? `${u}n` : encodeURIComponent(String(u != null && Object.getPrototypeOf(u) === null ? {
      ...u
    } : u));
  }
  function ci([u, t]) {
    return `${u}=${is(t)}`;
  }
  function ui(u) {
    const t = Object.entries(u).map(ci).join("&");
    return btoa(t);
  }
  function li(u, t = {}) {
    {
      let e = `Solana error #${u}; Decode this error by running \`npx @solana/errors decode -- ${u}`;
      return Object.keys(t).length && (e += ` '${ui(t)}'`), `${e}\``;
    }
  }
  var Me = class extends Error {
    constructor(...[u, t]) {
      let e, r;
      t && Object.entries(Object.getOwnPropertyDescriptors(t)).forEach(([s, l]) => {
        s === "cause" ? r = {
          cause: l.value
        } : (e === void 0 && (e = {
          __code: u
        }), Object.defineProperty(e, s, l));
      });
      const o = li(u, e);
      super(o, r);
      __publicField(this, "cause", this.cause);
      __publicField(this, "context");
      this.context = Object.freeze(e === void 0 ? {
        __code: u
      } : e), this.name = "SolanaError";
    }
  };
  function hi(u, t) {
    return "fixedSize" in t ? t.fixedSize : t.getSizeFromValue(u);
  }
  function di(u) {
    return Object.freeze({
      ...u,
      encode: (t) => {
        const e = new Uint8Array(hi(t, u));
        return u.write(t, e, 0), e;
      }
    });
  }
  function fi(u) {
    return Object.freeze({
      ...u,
      decode: (t, e = 0) => u.read(t, e)[0]
    });
  }
  function xe(u) {
    return "fixedSize" in u && typeof u.fixedSize == "number";
  }
  function pi(u, t) {
    if (xe(u) !== xe(t)) throw new Me(si);
    if (xe(u) && xe(t) && u.fixedSize !== t.fixedSize) throw new Me(ii, {
      decoderFixedSize: t.fixedSize,
      encoderFixedSize: u.fixedSize
    });
    if (!xe(u) && !xe(t) && u.maxSize !== t.maxSize) throw new Me(oi, {
      decoderMaxSize: t.maxSize,
      encoderMaxSize: u.maxSize
    });
    return {
      ...t,
      ...u,
      decode: t.decode,
      encode: u.encode,
      read: t.read,
      write: u.write
    };
  }
  function gi(u, t, e = 0) {
    if (t.length - e <= 0) throw new Me(ri, {
      codecDescription: u
    });
  }
  function yi(u, t, e, r = 0) {
    const o = e.length - r;
    if (o < t) throw new Me(ni, {
      bytesLength: o,
      codecDescription: u,
      expected: t
    });
  }
  function mi(u, t, e) {
    const r = u.byteOffset + (t ?? 0), o = e ?? u.byteLength;
    let s;
    return typeof SharedArrayBuffer > "u" ? s = u.buffer : u.buffer instanceof SharedArrayBuffer ? (s = new ArrayBuffer(u.length), new Uint8Array(s).set(new Uint8Array(u))) : s = u.buffer, (r === 0 || r === -u.byteLength) && o === u.byteLength ? s : s.slice(r, r + o);
  }
  function bi(u, t, e, r) {
    if (r < t || r > e) throw new Me(ai, {
      codecDescription: u,
      max: e,
      min: t,
      value: r
    });
  }
  function os(u) {
    return (u == null ? void 0 : u.endian) !== 1;
  }
  function wi(u) {
    return di({
      fixedSize: u.size,
      write(t, e, r) {
        u.range && bi(u.name, u.range[0], u.range[1], t);
        const o = new ArrayBuffer(u.size);
        return u.set(new DataView(o), t, os(u.config)), e.set(new Uint8Array(o), r), r + u.size;
      }
    });
  }
  function ki(u) {
    return fi({
      fixedSize: u.size,
      read(t, e = 0) {
        gi(u.name, t, e), yi(u.name, u.size, t, e);
        const r = new DataView(mi(t, e, u.size));
        return [
          u.get(r, os(u.config)),
          e + u.size
        ];
      }
    });
  }
  var as = (u = {}) => wi({
    config: u,
    name: "u64",
    range: [
      0n,
      BigInt("0xffffffffffffffff")
    ],
    set: (t, e, r) => t.setBigUint64(0, BigInt(e), r),
    size: 8
  }), vi = (u = {}) => ki({
    config: u,
    get: (t, e) => t.getBigUint64(0, e),
    name: "u64",
    size: 8
  }), Si = (u = {}) => pi(as(u), vi(u)), Mr = {
    exports: {}
  }, Cn;
  function _i() {
    return Cn || (Cn = 1, (function(u) {
      var t = Object.prototype.hasOwnProperty, e = "~";
      function r() {
      }
      Object.create && (r.prototype = /* @__PURE__ */ Object.create(null), new r().__proto__ || (e = false));
      function o(y, S, _) {
        this.fn = y, this.context = S, this.once = _ || false;
      }
      function s(y, S, _, I, L) {
        if (typeof _ != "function") throw new TypeError("The listener must be a function");
        var x = new o(_, I || y, L), P = e ? e + S : S;
        return y._events[P] ? y._events[P].fn ? y._events[P] = [
          y._events[P],
          x
        ] : y._events[P].push(x) : (y._events[P] = x, y._eventsCount++), y;
      }
      function l(y, S) {
        --y._eventsCount === 0 ? y._events = new r() : delete y._events[S];
      }
      function p() {
        this._events = new r(), this._eventsCount = 0;
      }
      p.prototype.eventNames = function() {
        var S = [], _, I;
        if (this._eventsCount === 0) return S;
        for (I in _ = this._events) t.call(_, I) && S.push(e ? I.slice(1) : I);
        return Object.getOwnPropertySymbols ? S.concat(Object.getOwnPropertySymbols(_)) : S;
      }, p.prototype.listeners = function(S) {
        var _ = e ? e + S : S, I = this._events[_];
        if (!I) return [];
        if (I.fn) return [
          I.fn
        ];
        for (var L = 0, x = I.length, P = new Array(x); L < x; L++) P[L] = I[L].fn;
        return P;
      }, p.prototype.listenerCount = function(S) {
        var _ = e ? e + S : S, I = this._events[_];
        return I ? I.fn ? 1 : I.length : 0;
      }, p.prototype.emit = function(S, _, I, L, x, P) {
        var T = e ? e + S : S;
        if (!this._events[T]) return false;
        var E = this._events[T], U = arguments.length, J, j;
        if (E.fn) {
          switch (E.once && this.removeListener(S, E.fn, void 0, true), U) {
            case 1:
              return E.fn.call(E.context), true;
            case 2:
              return E.fn.call(E.context, _), true;
            case 3:
              return E.fn.call(E.context, _, I), true;
            case 4:
              return E.fn.call(E.context, _, I, L), true;
            case 5:
              return E.fn.call(E.context, _, I, L, x), true;
            case 6:
              return E.fn.call(E.context, _, I, L, x, P), true;
          }
          for (j = 1, J = new Array(U - 1); j < U; j++) J[j - 1] = arguments[j];
          E.fn.apply(E.context, J);
        } else {
          var Yt = E.length, ee;
          for (j = 0; j < Yt; j++) switch (E[j].once && this.removeListener(S, E[j].fn, void 0, true), U) {
            case 1:
              E[j].fn.call(E[j].context);
              break;
            case 2:
              E[j].fn.call(E[j].context, _);
              break;
            case 3:
              E[j].fn.call(E[j].context, _, I);
              break;
            case 4:
              E[j].fn.call(E[j].context, _, I, L);
              break;
            default:
              if (!J) for (ee = 1, J = new Array(U - 1); ee < U; ee++) J[ee - 1] = arguments[ee];
              E[j].fn.apply(E[j].context, J);
          }
        }
        return true;
      }, p.prototype.on = function(S, _, I) {
        return s(this, S, _, I, false);
      }, p.prototype.once = function(S, _, I) {
        return s(this, S, _, I, true);
      }, p.prototype.removeListener = function(S, _, I, L) {
        var x = e ? e + S : S;
        if (!this._events[x]) return this;
        if (!_) return l(this, x), this;
        var P = this._events[x];
        if (P.fn) P.fn === _ && (!L || P.once) && (!I || P.context === I) && l(this, x);
        else {
          for (var T = 0, E = [], U = P.length; T < U; T++) (P[T].fn !== _ || L && !P[T].once || I && P[T].context !== I) && E.push(P[T]);
          E.length ? this._events[x] = E.length === 1 ? E[0] : E : l(this, x);
        }
        return this;
      }, p.prototype.removeAllListeners = function(S) {
        var _;
        return S ? (_ = e ? e + S : S, this._events[_] && l(this, _)) : (this._events = new r(), this._eventsCount = 0), this;
      }, p.prototype.off = p.prototype.removeListener, p.prototype.addListener = p.prototype.on, p.prefixed = e, p.EventEmitter = p, u.exports = p;
    })(Mr)), Mr.exports;
  }
  var Ii = _i();
  const cs = Gr(Ii);
  var Ai = class extends cs {
    constructor(u, t) {
      super();
      __publicField(this, "socket");
      this.socket = new window.WebSocket(u, t.protocols), this.socket.onopen = () => this.emit("open"), this.socket.onmessage = (e) => this.emit("message", e.data), this.socket.onerror = (e) => this.emit("error", e), this.socket.onclose = (e) => {
        this.emit("close", e.code, e.reason);
      };
    }
    send(u, t, e) {
      const r = e || t;
      try {
        this.socket.send(u), r();
      } catch (o) {
        r(o);
      }
    }
    close(u, t) {
      this.socket.close(u, t);
    }
    addEventListener(u, t, e) {
      this.socket.addEventListener(u, t, e);
    }
  };
  function Ei(u, t) {
    return new Ai(u, t);
  }
  var xi = class {
    encode(u) {
      return JSON.stringify(u);
    }
    decode(u) {
      return JSON.parse(u);
    }
  }, Ri = class extends cs {
    constructor(u, t = "ws://localhost:8080", { autoconnect: e = true, reconnect: r = true, reconnect_interval: o = 1e3, max_reconnects: s = 5, ...l } = {}, p, y) {
      super();
      __publicField(this, "address");
      __publicField(this, "rpc_id");
      __publicField(this, "queue");
      __publicField(this, "options");
      __publicField(this, "autoconnect");
      __publicField(this, "ready");
      __publicField(this, "reconnect");
      __publicField(this, "reconnect_timer_id");
      __publicField(this, "reconnect_interval");
      __publicField(this, "max_reconnects");
      __publicField(this, "rest_options");
      __publicField(this, "current_reconnects");
      __publicField(this, "generate_request_id");
      __publicField(this, "socket");
      __publicField(this, "webSocketFactory");
      __publicField(this, "dataPack");
      this.webSocketFactory = u, this.queue = {}, this.rpc_id = 0, this.address = t, this.autoconnect = e, this.ready = false, this.reconnect = r, this.reconnect_timer_id = void 0, this.reconnect_interval = o, this.max_reconnects = s, this.rest_options = l, this.current_reconnects = 0, this.generate_request_id = p || (() => typeof this.rpc_id == "number" ? ++this.rpc_id : Number(this.rpc_id) + 1), y ? this.dataPack = y : this.dataPack = new xi(), this.autoconnect && this._connect(this.address, {
        autoconnect: this.autoconnect,
        reconnect: this.reconnect,
        reconnect_interval: this.reconnect_interval,
        max_reconnects: this.max_reconnects,
        ...this.rest_options
      });
    }
    connect() {
      this.socket || this._connect(this.address, {
        autoconnect: this.autoconnect,
        reconnect: this.reconnect,
        reconnect_interval: this.reconnect_interval,
        max_reconnects: this.max_reconnects,
        ...this.rest_options
      });
    }
    call(u, t, e, r) {
      return !r && typeof e == "object" && (r = e, e = null), new Promise((o, s) => {
        if (!this.ready) return s(new Error("socket not ready"));
        const l = this.generate_request_id(u, t), p = {
          jsonrpc: "2.0",
          method: u,
          params: t || void 0,
          id: l
        };
        this.socket.send(this.dataPack.encode(p), r, (y) => {
          if (y) return s(y);
          this.queue[l] = {
            promise: [
              o,
              s
            ]
          }, e && (this.queue[l].timeout = setTimeout(() => {
            delete this.queue[l], s(new Error("reply timeout"));
          }, e));
        });
      });
    }
    async login(u) {
      const t = await this.call("rpc.login", u);
      if (!t) throw new Error("authentication failed");
      return t;
    }
    async listMethods() {
      return await this.call("__listMethods");
    }
    notify(u, t) {
      return new Promise((e, r) => {
        if (!this.ready) return r(new Error("socket not ready"));
        const o = {
          jsonrpc: "2.0",
          method: u,
          params: t
        };
        this.socket.send(this.dataPack.encode(o), (s) => {
          if (s) return r(s);
          e();
        });
      });
    }
    async subscribe(u) {
      typeof u == "string" && (u = [
        u
      ]);
      const t = await this.call("rpc.on", u);
      if (typeof u == "string" && t[u] !== "ok") throw new Error("Failed subscribing to an event '" + u + "' with: " + t[u]);
      return t;
    }
    async unsubscribe(u) {
      typeof u == "string" && (u = [
        u
      ]);
      const t = await this.call("rpc.off", u);
      if (typeof u == "string" && t[u] !== "ok") throw new Error("Failed unsubscribing from an event with: " + t);
      return t;
    }
    close(u, t) {
      this.socket && this.socket.close(u || 1e3, t);
    }
    setAutoReconnect(u) {
      this.reconnect = u;
    }
    setReconnectInterval(u) {
      this.reconnect_interval = u;
    }
    setMaxReconnects(u) {
      this.max_reconnects = u;
    }
    getCurrentReconnects() {
      return this.current_reconnects;
    }
    getMaxReconnects() {
      return this.max_reconnects;
    }
    isReconnecting() {
      return this.reconnect_timer_id !== void 0;
    }
    willReconnect() {
      return this.reconnect && (this.max_reconnects === 0 || this.current_reconnects < this.max_reconnects);
    }
    _connect(u, t) {
      clearTimeout(this.reconnect_timer_id), this.socket = this.webSocketFactory(u, t), this.socket.addEventListener("open", () => {
        this.ready = true, this.emit("open"), this.current_reconnects = 0;
      }), this.socket.addEventListener("message", ({ data: e }) => {
        e instanceof ArrayBuffer && (e = F.from(e).toString());
        try {
          e = this.dataPack.decode(e);
        } catch {
          return;
        }
        if (e.notification && this.listeners(e.notification).length) {
          if (!Object.keys(e.params).length) return this.emit(e.notification);
          const r = [
            e.notification
          ];
          if (e.params.constructor === Object) r.push(e.params);
          else for (let o = 0; o < e.params.length; o++) r.push(e.params[o]);
          return Promise.resolve().then(() => {
            this.emit.apply(this, r);
          });
        }
        if (!this.queue[e.id]) return e.method ? Promise.resolve().then(() => {
          this.emit(e.method, e == null ? void 0 : e.params);
        }) : void 0;
        "error" in e == "result" in e && this.queue[e.id].promise[1](new Error('Server response malformed. Response must include either "result" or "error", but not both.')), this.queue[e.id].timeout && clearTimeout(this.queue[e.id].timeout), e.error ? this.queue[e.id].promise[1](e.error) : this.queue[e.id].promise[0](e.result), delete this.queue[e.id];
      }), this.socket.addEventListener("error", (e) => this.emit("error", e)), this.socket.addEventListener("close", ({ code: e, reason: r }) => {
        this.ready && setTimeout(() => this.emit("close", e, r), 0), this.ready = false, this.socket = void 0, e !== 1e3 && (this.current_reconnects++, this.reconnect && (this.max_reconnects > this.current_reconnects || this.max_reconnects === 0) ? this.reconnect_timer_id = setTimeout(() => this._connect(u, t), this.reconnect_interval) : this.reconnect && this.max_reconnects > 0 && this.current_reconnects >= this.max_reconnects && setTimeout(() => this.emit("max_reconnects_reached", e, r), 1));
      });
    }
  };
  const Mi = Ne.utils.randomPrivateKey, Nn = () => {
    const u = Ne.utils.randomPrivateKey(), t = Xe(u), e = new Uint8Array(64);
    return e.set(u), e.set(t, 32), {
      publicKey: t,
      secretKey: e
    };
  }, Xe = Ne.getPublicKey;
  function zn(u) {
    try {
      return Ne.ExtendedPoint.fromHex(u), true;
    } catch {
      return false;
    }
  }
  const jr = (u, t) => Ne.sign(u, t.slice(0, 32)), Pi = Ne.verify, H = (u) => F.isBuffer(u) ? u : u instanceof Uint8Array ? F.from(u.buffer, u.byteOffset, u.byteLength) : F.from(u);
  class Jr {
    constructor(t) {
      Object.assign(this, t);
    }
    encode() {
      return F.from(xr.serialize(Ue, this));
    }
    static decode(t) {
      return xr.deserialize(Ue, this, t);
    }
    static decodeUnchecked(t) {
      return xr.deserializeUnchecked(Ue, this, t);
    }
  }
  class Ti extends Jr {
    constructor(t) {
      if (super(t), this.enum = "", Object.keys(t).length !== 1) throw new Error("Enum can only take single value");
      Object.keys(t).map((e) => {
        this.enum = e;
      });
    }
  }
  const Ue = /* @__PURE__ */ new Map();
  var us;
  const ls = 32, re = 32;
  function Bi(u) {
    return u._bn !== void 0;
  }
  let On = 1;
  R = class extends Jr {
    constructor(t) {
      if (super({}), this._bn = void 0, Bi(t)) this._bn = t._bn;
      else {
        if (typeof t == "string") {
          const e = Gt.decode(t);
          if (e.length != re) throw new Error("Invalid public key input");
          this._bn = new Bn(e);
        } else this._bn = new Bn(t);
        if (this._bn.byteLength() > re) throw new Error("Invalid public key input");
      }
    }
    static unique() {
      const t = new R(On);
      return On += 1, new R(t.toBuffer());
    }
    equals(t) {
      return this._bn.eq(t._bn);
    }
    toBase58() {
      return Gt.encode(this.toBytes());
    }
    toJSON() {
      return this.toBase58();
    }
    toBytes() {
      const t = this.toBuffer();
      return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
    }
    toBuffer() {
      const t = this._bn.toArrayLike(F);
      if (t.length === re) return t;
      const e = F.alloc(32);
      return t.copy(e, 32 - t.length), e;
    }
    get [Symbol.toStringTag]() {
      return `PublicKey(${this.toString()})`;
    }
    toString() {
      return this.toBase58();
    }
    static async createWithSeed(t, e, r) {
      const o = F.concat([
        t.toBuffer(),
        F.from(e),
        r.toBuffer()
      ]), s = xn(o);
      return new R(s);
    }
    static createProgramAddressSync(t, e) {
      let r = F.alloc(0);
      t.forEach(function(s) {
        if (s.length > ls) throw new TypeError("Max seed length exceeded");
        r = F.concat([
          r,
          H(s)
        ]);
      }), r = F.concat([
        r,
        e.toBuffer(),
        F.from("ProgramDerivedAddress")
      ]);
      const o = xn(r);
      if (zn(o)) throw new Error("Invalid seeds, address must fall off the curve");
      return new R(o);
    }
    static async createProgramAddress(t, e) {
      return this.createProgramAddressSync(t, e);
    }
    static findProgramAddressSync(t, e) {
      let r = 255, o;
      for (; r != 0; ) {
        try {
          const s = t.concat(F.from([
            r
          ]));
          o = this.createProgramAddressSync(s, e);
        } catch (s) {
          if (s instanceof TypeError) throw s;
          r--;
          continue;
        }
        return [
          o,
          r
        ];
      }
      throw new Error("Unable to find a viable program address nonce");
    }
    static async findProgramAddress(t, e) {
      return this.findProgramAddressSync(t, e);
    }
    static isOnCurve(t) {
      const e = new R(t);
      return zn(e.toBytes());
    }
  };
  us = R;
  R.default = new us("11111111111111111111111111111111");
  Ue.set(R, {
    kind: "struct",
    fields: [
      [
        "_bn",
        "u256"
      ]
    ]
  });
  class Li {
    constructor(t) {
      if (this._publicKey = void 0, this._secretKey = void 0, t) {
        const e = H(t);
        if (t.length !== 64) throw new Error("bad secret key size");
        this._publicKey = e.slice(32, 64), this._secretKey = e.slice(0, 32);
      } else this._secretKey = H(Mi()), this._publicKey = H(Xe(this._secretKey));
    }
    get publicKey() {
      return new R(this._publicKey);
    }
    get secretKey() {
      return F.concat([
        this._secretKey,
        this._publicKey
      ], 64);
    }
  }
  const Ci = new R("BPFLoader1111111111111111111111111111111111"), ge = 1232, Ve = 127, pe = 64, hs = 129, Ni = 4096;
  Yr = class extends Error {
    constructor(t) {
      super(`Signature ${t} has expired: block height exceeded.`), this.signature = void 0, this.signature = t;
    }
  };
  Object.defineProperty(Yr.prototype, "name", {
    value: "TransactionExpiredBlockheightExceededError"
  });
  class Zr extends Error {
    constructor(t, e) {
      super(`Transaction was not confirmed in ${e.toFixed(2)} seconds. It is unknown if it succeeded or failed. Check signature ${t} using the Solana Explorer or CLI tools.`), this.signature = void 0, this.signature = t;
    }
  }
  Object.defineProperty(Zr.prototype, "name", {
    value: "TransactionExpiredTimeoutError"
  });
  class Re extends Error {
    constructor(t) {
      super(`Signature ${t} has expired: the nonce is no longer valid.`), this.signature = void 0, this.signature = t;
    }
  }
  Object.defineProperty(Re.prototype, "name", {
    value: "TransactionExpiredNonceInvalidError"
  });
  class Be {
    constructor(t, e) {
      this.staticAccountKeys = void 0, this.accountKeysFromLookups = void 0, this.staticAccountKeys = t, this.accountKeysFromLookups = e;
    }
    keySegments() {
      const t = [
        this.staticAccountKeys
      ];
      return this.accountKeysFromLookups && (t.push(this.accountKeysFromLookups.writable), t.push(this.accountKeysFromLookups.readonly)), t;
    }
    get(t) {
      for (const e of this.keySegments()) {
        if (t < e.length) return e[t];
        t -= e.length;
      }
    }
    get length() {
      return this.keySegments().flat().length;
    }
    compileInstructions(t) {
      if (this.length > 256) throw new Error("Account index overflow encountered during compilation");
      const r = /* @__PURE__ */ new Map();
      this.keySegments().flat().forEach((s, l) => {
        r.set(s.toBase58(), l);
      });
      const o = (s) => {
        const l = r.get(s.toBase58());
        if (l === void 0) throw new Error("Encountered an unknown instruction account key during compilation");
        return l;
      };
      return t.map((s) => ({
        programIdIndex: o(s.programId),
        accountKeyIndexes: s.keys.map((l) => o(l.pubkey)),
        data: s.data
      }));
    }
  }
  const G = (u = "publicKey") => b.blob(32, u), zi = (u = "signature") => b.blob(64, u), we = (u = "string") => {
    const t = b.struct([
      b.u32("length"),
      b.u32("lengthPadding"),
      b.blob(b.offset(b.u32(), -8), "chars")
    ], u), e = t.decode.bind(t), r = t.encode.bind(t), o = t;
    return o.decode = (s, l) => e(s, l).chars.toString(), o.encode = (s, l, p) => {
      const y = {
        chars: F.from(s, "utf8")
      };
      return r(y, l, p);
    }, o.alloc = (s) => b.u32().span + b.u32().span + F.from(s, "utf8").length, o;
  }, Oi = (u = "authorized") => b.struct([
    G("staker"),
    G("withdrawer")
  ], u), Ki = (u = "lockup") => b.struct([
    b.ns64("unixTimestamp"),
    b.ns64("epoch"),
    G("custodian")
  ], u), Wi = (u = "voteInit") => b.struct([
    G("nodePubkey"),
    G("authorizedVoter"),
    G("authorizedWithdrawer"),
    b.u8("commission")
  ], u), Ui = (u = "voteAuthorizeWithSeedArgs") => b.struct([
    b.u32("voteAuthorizationType"),
    G("currentAuthorityDerivedKeyOwnerPubkey"),
    we("currentAuthorityDerivedKeySeed"),
    G("newAuthorized")
  ], u);
  function ds(u, t) {
    const e = (o) => {
      if (o.span >= 0) return o.span;
      if (typeof o.alloc == "function") return o.alloc(t[o.property]);
      if ("count" in o && "elementLayout" in o) {
        const s = t[o.property];
        if (Array.isArray(s)) return s.length * e(o.elementLayout);
      } else if ("fields" in o) return ds({
        layout: o
      }, t[o.property]);
      return 0;
    };
    let r = 0;
    return u.layout.fields.forEach((o) => {
      r += e(o);
    }), r;
  }
  function Qt(u) {
    let t = 0, e = 0;
    for (; ; ) {
      let r = u.shift();
      if (t |= (r & 127) << e * 7, e += 1, (r & 128) === 0) break;
    }
    return t;
  }
  function te(u, t) {
    let e = t;
    for (; ; ) {
      let r = e & 127;
      if (e >>= 7, e == 0) {
        u.push(r);
        break;
      } else r |= 128, u.push(r);
    }
  }
  function $(u, t) {
    if (!u) throw new Error(t || "Assertion failed");
  }
  class rr {
    constructor(t, e) {
      this.payer = void 0, this.keyMetaMap = void 0, this.payer = t, this.keyMetaMap = e;
    }
    static compile(t, e) {
      const r = /* @__PURE__ */ new Map(), o = (l) => {
        const p = l.toBase58();
        let y = r.get(p);
        return y === void 0 && (y = {
          isSigner: false,
          isWritable: false,
          isInvoked: false
        }, r.set(p, y)), y;
      }, s = o(e);
      s.isSigner = true, s.isWritable = true;
      for (const l of t) {
        o(l.programId).isInvoked = true;
        for (const p of l.keys) {
          const y = o(p.pubkey);
          y.isSigner || (y.isSigner = p.isSigner), y.isWritable || (y.isWritable = p.isWritable);
        }
      }
      return new rr(e, r);
    }
    getMessageComponents() {
      const t = [
        ...this.keyMetaMap.entries()
      ];
      $(t.length <= 256, "Max static account keys length exceeded");
      const e = t.filter(([, y]) => y.isSigner && y.isWritable), r = t.filter(([, y]) => y.isSigner && !y.isWritable), o = t.filter(([, y]) => !y.isSigner && y.isWritable), s = t.filter(([, y]) => !y.isSigner && !y.isWritable), l = {
        numRequiredSignatures: e.length + r.length,
        numReadonlySignedAccounts: r.length,
        numReadonlyUnsignedAccounts: s.length
      };
      {
        $(e.length > 0, "Expected at least one writable signer key");
        const [y] = e[0];
        $(y === this.payer.toBase58(), "Expected first writable signer key to be the fee payer");
      }
      const p = [
        ...e.map(([y]) => new R(y)),
        ...r.map(([y]) => new R(y)),
        ...o.map(([y]) => new R(y)),
        ...s.map(([y]) => new R(y))
      ];
      return [
        l,
        p
      ];
    }
    extractTableLookup(t) {
      const [e, r] = this.drainKeysFoundInLookupTable(t.state.addresses, (l) => !l.isSigner && !l.isInvoked && l.isWritable), [o, s] = this.drainKeysFoundInLookupTable(t.state.addresses, (l) => !l.isSigner && !l.isInvoked && !l.isWritable);
      if (!(e.length === 0 && o.length === 0)) return [
        {
          accountKey: t.key,
          writableIndexes: e,
          readonlyIndexes: o
        },
        {
          writable: r,
          readonly: s
        }
      ];
    }
    drainKeysFoundInLookupTable(t, e) {
      const r = new Array(), o = new Array();
      for (const [s, l] of this.keyMetaMap.entries()) if (e(l)) {
        const p = new R(s), y = t.findIndex((S) => S.equals(p));
        y >= 0 && ($(y < 256, "Max lookup table index exceeded"), r.push(y), o.push(p), this.keyMetaMap.delete(s));
      }
      return [
        r,
        o
      ];
    }
  }
  const fs = "Reached end of buffer unexpectedly";
  function Ht(u) {
    if (u.length === 0) throw new Error(fs);
    return u.shift();
  }
  function $t(u, ...t) {
    const [e] = t;
    if (t.length === 2 ? e + (t[1] ?? 0) > u.length : e >= u.length) throw new Error(fs);
    return u.splice(...t);
  }
  class ie {
    constructor(t) {
      this.header = void 0, this.accountKeys = void 0, this.recentBlockhash = void 0, this.instructions = void 0, this.indexToProgramIds = /* @__PURE__ */ new Map(), this.header = t.header, this.accountKeys = t.accountKeys.map((e) => new R(e)), this.recentBlockhash = t.recentBlockhash, this.instructions = t.instructions, this.instructions.forEach((e) => this.indexToProgramIds.set(e.programIdIndex, this.accountKeys[e.programIdIndex]));
    }
    get version() {
      return "legacy";
    }
    get staticAccountKeys() {
      return this.accountKeys;
    }
    get compiledInstructions() {
      return this.instructions.map((t) => ({
        programIdIndex: t.programIdIndex,
        accountKeyIndexes: t.accounts,
        data: Gt.decode(t.data)
      }));
    }
    get addressTableLookups() {
      return [];
    }
    getAccountKeys() {
      return new Be(this.staticAccountKeys);
    }
    static compile(t) {
      const e = rr.compile(t.instructions, t.payerKey), [r, o] = e.getMessageComponents(), l = new Be(o).compileInstructions(t.instructions).map((p) => ({
        programIdIndex: p.programIdIndex,
        accounts: p.accountKeyIndexes,
        data: Gt.encode(p.data)
      }));
      return new ie({
        header: r,
        accountKeys: o,
        recentBlockhash: t.recentBlockhash,
        instructions: l
      });
    }
    isAccountSigner(t) {
      return t < this.header.numRequiredSignatures;
    }
    isAccountWritable(t) {
      const e = this.header.numRequiredSignatures;
      if (t >= this.header.numRequiredSignatures) {
        const r = t - e, s = this.accountKeys.length - e - this.header.numReadonlyUnsignedAccounts;
        return r < s;
      } else {
        const r = e - this.header.numReadonlySignedAccounts;
        return t < r;
      }
    }
    isProgramId(t) {
      return this.indexToProgramIds.has(t);
    }
    programIds() {
      return [
        ...this.indexToProgramIds.values()
      ];
    }
    nonProgramIds() {
      return this.accountKeys.filter((t, e) => !this.isProgramId(e));
    }
    serialize() {
      const t = this.accountKeys.length;
      let e = [];
      te(e, t);
      const r = this.instructions.map((I) => {
        const { accounts: L, programIdIndex: x } = I, P = Array.from(Gt.decode(I.data));
        let T = [];
        te(T, L.length);
        let E = [];
        return te(E, P.length), {
          programIdIndex: x,
          keyIndicesCount: F.from(T),
          keyIndices: L,
          dataLength: F.from(E),
          data: P
        };
      });
      let o = [];
      te(o, r.length);
      let s = F.alloc(ge);
      F.from(o).copy(s);
      let l = o.length;
      r.forEach((I) => {
        const x = b.struct([
          b.u8("programIdIndex"),
          b.blob(I.keyIndicesCount.length, "keyIndicesCount"),
          b.seq(b.u8("keyIndex"), I.keyIndices.length, "keyIndices"),
          b.blob(I.dataLength.length, "dataLength"),
          b.seq(b.u8("userdatum"), I.data.length, "data")
        ]).encode(I, s, l);
        l += x;
      }), s = s.slice(0, l);
      const p = b.struct([
        b.blob(1, "numRequiredSignatures"),
        b.blob(1, "numReadonlySignedAccounts"),
        b.blob(1, "numReadonlyUnsignedAccounts"),
        b.blob(e.length, "keyCount"),
        b.seq(G("key"), t, "keys"),
        G("recentBlockhash")
      ]), y = {
        numRequiredSignatures: F.from([
          this.header.numRequiredSignatures
        ]),
        numReadonlySignedAccounts: F.from([
          this.header.numReadonlySignedAccounts
        ]),
        numReadonlyUnsignedAccounts: F.from([
          this.header.numReadonlyUnsignedAccounts
        ]),
        keyCount: F.from(e),
        keys: this.accountKeys.map((I) => H(I.toBytes())),
        recentBlockhash: Gt.decode(this.recentBlockhash)
      };
      let S = F.alloc(2048);
      const _ = p.encode(y, S);
      return s.copy(S, _), S.slice(0, _ + s.length);
    }
    static from(t) {
      let e = [
        ...t
      ];
      const r = Ht(e);
      if (r !== (r & Ve)) throw new Error("Versioned messages must be deserialized with VersionedMessage.deserialize()");
      const o = Ht(e), s = Ht(e), l = Qt(e);
      let p = [];
      for (let L = 0; L < l; L++) {
        const x = $t(e, 0, re);
        p.push(new R(F.from(x)));
      }
      const y = $t(e, 0, re), S = Qt(e);
      let _ = [];
      for (let L = 0; L < S; L++) {
        const x = Ht(e), P = Qt(e), T = $t(e, 0, P), E = Qt(e), U = $t(e, 0, E), J = Gt.encode(F.from(U));
        _.push({
          programIdIndex: x,
          accounts: T,
          data: J
        });
      }
      const I = {
        header: {
          numRequiredSignatures: r,
          numReadonlySignedAccounts: o,
          numReadonlyUnsignedAccounts: s
        },
        recentBlockhash: Gt.encode(F.from(y)),
        accountKeys: p,
        instructions: _
      };
      return new ie(I);
    }
  }
  class ve {
    constructor(t) {
      this.header = void 0, this.staticAccountKeys = void 0, this.recentBlockhash = void 0, this.compiledInstructions = void 0, this.addressTableLookups = void 0, this.header = t.header, this.staticAccountKeys = t.staticAccountKeys, this.recentBlockhash = t.recentBlockhash, this.compiledInstructions = t.compiledInstructions, this.addressTableLookups = t.addressTableLookups;
    }
    get version() {
      return 0;
    }
    get numAccountKeysFromLookups() {
      let t = 0;
      for (const e of this.addressTableLookups) t += e.readonlyIndexes.length + e.writableIndexes.length;
      return t;
    }
    getAccountKeys(t) {
      let e;
      if (t && "accountKeysFromLookups" in t && t.accountKeysFromLookups) {
        if (this.numAccountKeysFromLookups != t.accountKeysFromLookups.writable.length + t.accountKeysFromLookups.readonly.length) throw new Error("Failed to get account keys because of a mismatch in the number of account keys from lookups");
        e = t.accountKeysFromLookups;
      } else if (t && "addressLookupTableAccounts" in t && t.addressLookupTableAccounts) e = this.resolveAddressTableLookups(t.addressLookupTableAccounts);
      else if (this.addressTableLookups.length > 0) throw new Error("Failed to get account keys because address table lookups were not resolved");
      return new Be(this.staticAccountKeys, e);
    }
    isAccountSigner(t) {
      return t < this.header.numRequiredSignatures;
    }
    isAccountWritable(t) {
      const e = this.header.numRequiredSignatures, r = this.staticAccountKeys.length;
      if (t >= r) {
        const o = t - r, s = this.addressTableLookups.reduce((l, p) => l + p.writableIndexes.length, 0);
        return o < s;
      } else if (t >= this.header.numRequiredSignatures) {
        const o = t - e, l = r - e - this.header.numReadonlyUnsignedAccounts;
        return o < l;
      } else {
        const o = e - this.header.numReadonlySignedAccounts;
        return t < o;
      }
    }
    resolveAddressTableLookups(t) {
      const e = {
        writable: [],
        readonly: []
      };
      for (const r of this.addressTableLookups) {
        const o = t.find((s) => s.key.equals(r.accountKey));
        if (!o) throw new Error(`Failed to find address lookup table account for table key ${r.accountKey.toBase58()}`);
        for (const s of r.writableIndexes) if (s < o.state.addresses.length) e.writable.push(o.state.addresses[s]);
        else throw new Error(`Failed to find address for index ${s} in address lookup table ${r.accountKey.toBase58()}`);
        for (const s of r.readonlyIndexes) if (s < o.state.addresses.length) e.readonly.push(o.state.addresses[s]);
        else throw new Error(`Failed to find address for index ${s} in address lookup table ${r.accountKey.toBase58()}`);
      }
      return e;
    }
    static compile(t) {
      const e = rr.compile(t.instructions, t.payerKey), r = new Array(), o = {
        writable: new Array(),
        readonly: new Array()
      }, s = t.addressLookupTableAccounts || [];
      for (const _ of s) {
        const I = e.extractTableLookup(_);
        if (I !== void 0) {
          const [L, { writable: x, readonly: P }] = I;
          r.push(L), o.writable.push(...x), o.readonly.push(...P);
        }
      }
      const [l, p] = e.getMessageComponents(), S = new Be(p, o).compileInstructions(t.instructions);
      return new ve({
        header: l,
        staticAccountKeys: p,
        recentBlockhash: t.recentBlockhash,
        compiledInstructions: S,
        addressTableLookups: r
      });
    }
    serialize() {
      const t = Array();
      te(t, this.staticAccountKeys.length);
      const e = this.serializeInstructions(), r = Array();
      te(r, this.compiledInstructions.length);
      const o = this.serializeAddressTableLookups(), s = Array();
      te(s, this.addressTableLookups.length);
      const l = b.struct([
        b.u8("prefix"),
        b.struct([
          b.u8("numRequiredSignatures"),
          b.u8("numReadonlySignedAccounts"),
          b.u8("numReadonlyUnsignedAccounts")
        ], "header"),
        b.blob(t.length, "staticAccountKeysLength"),
        b.seq(G(), this.staticAccountKeys.length, "staticAccountKeys"),
        G("recentBlockhash"),
        b.blob(r.length, "instructionsLength"),
        b.blob(e.length, "serializedInstructions"),
        b.blob(s.length, "addressTableLookupsLength"),
        b.blob(o.length, "serializedAddressTableLookups")
      ]), p = new Uint8Array(ge), S = l.encode({
        prefix: 128,
        header: this.header,
        staticAccountKeysLength: new Uint8Array(t),
        staticAccountKeys: this.staticAccountKeys.map((_) => _.toBytes()),
        recentBlockhash: Gt.decode(this.recentBlockhash),
        instructionsLength: new Uint8Array(r),
        serializedInstructions: e,
        addressTableLookupsLength: new Uint8Array(s),
        serializedAddressTableLookups: o
      }, p);
      return p.slice(0, S);
    }
    serializeInstructions() {
      let t = 0;
      const e = new Uint8Array(ge);
      for (const r of this.compiledInstructions) {
        const o = Array();
        te(o, r.accountKeyIndexes.length);
        const s = Array();
        te(s, r.data.length);
        const l = b.struct([
          b.u8("programIdIndex"),
          b.blob(o.length, "encodedAccountKeyIndexesLength"),
          b.seq(b.u8(), r.accountKeyIndexes.length, "accountKeyIndexes"),
          b.blob(s.length, "encodedDataLength"),
          b.blob(r.data.length, "data")
        ]);
        t += l.encode({
          programIdIndex: r.programIdIndex,
          encodedAccountKeyIndexesLength: new Uint8Array(o),
          accountKeyIndexes: r.accountKeyIndexes,
          encodedDataLength: new Uint8Array(s),
          data: r.data
        }, e, t);
      }
      return e.slice(0, t);
    }
    serializeAddressTableLookups() {
      let t = 0;
      const e = new Uint8Array(ge);
      for (const r of this.addressTableLookups) {
        const o = Array();
        te(o, r.writableIndexes.length);
        const s = Array();
        te(s, r.readonlyIndexes.length);
        const l = b.struct([
          G("accountKey"),
          b.blob(o.length, "encodedWritableIndexesLength"),
          b.seq(b.u8(), r.writableIndexes.length, "writableIndexes"),
          b.blob(s.length, "encodedReadonlyIndexesLength"),
          b.seq(b.u8(), r.readonlyIndexes.length, "readonlyIndexes")
        ]);
        t += l.encode({
          accountKey: r.accountKey.toBytes(),
          encodedWritableIndexesLength: new Uint8Array(o),
          writableIndexes: r.writableIndexes,
          encodedReadonlyIndexesLength: new Uint8Array(s),
          readonlyIndexes: r.readonlyIndexes
        }, e, t);
      }
      return e.slice(0, t);
    }
    static deserialize(t) {
      let e = [
        ...t
      ];
      const r = Ht(e), o = r & Ve;
      $(r !== o, "Expected versioned message but received legacy message");
      const s = o;
      $(s === 0, `Expected versioned message with version 0 but found version ${s}`);
      const l = {
        numRequiredSignatures: Ht(e),
        numReadonlySignedAccounts: Ht(e),
        numReadonlyUnsignedAccounts: Ht(e)
      }, p = [], y = Qt(e);
      for (let P = 0; P < y; P++) p.push(new R($t(e, 0, re)));
      const S = Gt.encode($t(e, 0, re)), _ = Qt(e), I = [];
      for (let P = 0; P < _; P++) {
        const T = Ht(e), E = Qt(e), U = $t(e, 0, E), J = Qt(e), j = new Uint8Array($t(e, 0, J));
        I.push({
          programIdIndex: T,
          accountKeyIndexes: U,
          data: j
        });
      }
      const L = Qt(e), x = [];
      for (let P = 0; P < L; P++) {
        const T = new R($t(e, 0, re)), E = Qt(e), U = $t(e, 0, E), J = Qt(e), j = $t(e, 0, J);
        x.push({
          accountKey: T,
          writableIndexes: U,
          readonlyIndexes: j
        });
      }
      return new ve({
        header: l,
        staticAccountKeys: p,
        recentBlockhash: S,
        compiledInstructions: I,
        addressTableLookups: x
      });
    }
  }
  const Kn = 3, qi = 4, Di = 8, Fi = 16;
  function Ge(u) {
    const t = $t(u, 0, 4);
    return t[0] + t[1] * 2 ** 8 + t[2] * 2 ** 16 + t[3] * 2 ** 24;
  }
  function Vi(u) {
    const t = $t(u, 0, 8);
    let e = BigInt(0);
    for (let r = t.length - 1; r >= 0; r--) e = e << BigInt(8) | BigInt(t[r]);
    return $(e <= BigInt(Number.MAX_SAFE_INTEGER), "Expected u64 value to be within the safe integer range"), Number(e);
  }
  class He {
    constructor(t) {
      this.header = void 0, this.staticAccountKeys = void 0, this.recentBlockhash = void 0, this.compiledInstructions = void 0, this.transactionConfig = void 0, this.header = t.header, this.staticAccountKeys = t.staticAccountKeys, this.recentBlockhash = t.recentBlockhash, this.compiledInstructions = t.compiledInstructions, this.transactionConfig = t.transactionConfig ?? {
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
      return new Be(this.staticAccountKeys);
    }
    isAccountSigner(t) {
      return t < this.header.numRequiredSignatures;
    }
    isAccountWritable(t) {
      const e = this.header.numRequiredSignatures, r = this.staticAccountKeys.length;
      if (t >= r) return false;
      if (t >= this.header.numRequiredSignatures) {
        const o = t - e, l = r - e - this.header.numReadonlyUnsignedAccounts;
        return o < l;
      } else {
        const o = e - this.header.numReadonlySignedAccounts;
        return t < o;
      }
    }
    serialize() {
      throw new Error("Serialization of version 1 transaction messages is not supported");
    }
    static deserialize(t) {
      let e = [
        ...t
      ];
      const r = Ht(e), o = r & Ve;
      $(r !== o, "Expected versioned message but received legacy message");
      const s = o;
      $(s === 1, `Expected versioned message with version 1 but found version ${s}`);
      const l = {
        numRequiredSignatures: Ht(e),
        numReadonlySignedAccounts: Ht(e),
        numReadonlyUnsignedAccounts: Ht(e)
      }, p = Ge(e);
      $((p & -32) === 0, "Unexpected bits set in the transaction config mask");
      const y = p & Kn;
      $(y === 0 || y === Kn, "Expected both or neither of the priority fee bits to be set in the transaction config mask");
      const S = Gt.encode($t(e, 0, re)), _ = Ht(e), I = Ht(e), L = [];
      for (let E = 0; E < I; E++) L.push(new R($t(e, 0, re)));
      const x = {
        computeUnitLimit: null,
        heapSize: null,
        loadedAccountsDataSizeLimit: null,
        priorityFee: null
      };
      y !== 0 && (x.priorityFee = Vi(e)), p & qi && (x.computeUnitLimit = Ge(e)), p & Di && (x.loadedAccountsDataSizeLimit = Ge(e)), p & Fi && (x.heapSize = Ge(e));
      const P = [];
      for (let E = 0; E < _; E++) {
        const U = Ht(e), J = Ht(e), j = Ht(e) + Ht(e) * 256;
        P.push({
          accountKeyIndexesLength: J,
          dataLength: j,
          programIdIndex: U
        });
      }
      const T = [];
      for (const E of P) T.push({
        programIdIndex: E.programIdIndex,
        accountKeyIndexes: $t(e, 0, E.accountKeyIndexesLength),
        data: new Uint8Array($t(e, 0, E.dataLength))
      });
      return $(e.length === 0, "Expected no bytes to remain after deserializing a version 1 message"), new He({
        header: l,
        staticAccountKeys: L,
        recentBlockhash: S,
        compiledInstructions: T,
        transactionConfig: x
      });
    }
  }
  const Qe = {
    deserializeMessageVersion(u) {
      const t = u[0], e = t & Ve;
      return e === t ? "legacy" : e;
    },
    deserialize: (u) => {
      const t = Qe.deserializeMessageVersion(u);
      if (t === "legacy") return ie.from(u);
      if (t === 0) return ve.deserialize(u);
      if (t === 1) return He.deserialize(u);
      throw new Error(`Transaction message version ${t} deserialization is not supported`);
    }
  };
  let le = (function(u) {
    return u[u.BLOCKHEIGHT_EXCEEDED = 0] = "BLOCKHEIGHT_EXCEEDED", u[u.PROCESSED = 1] = "PROCESSED", u[u.TIMED_OUT = 2] = "TIMED_OUT", u[u.NONCE_INVALID = 3] = "NONCE_INVALID", u;
  })({});
  const Hi = F.alloc(pe).fill(0);
  class et {
    constructor(t) {
      this.keys = void 0, this.programId = void 0, this.data = F.alloc(0), this.programId = t.programId, this.keys = t.keys, t.data && (this.data = t.data);
    }
    toJSON() {
      return {
        keys: this.keys.map(({ pubkey: t, isSigner: e, isWritable: r }) => ({
          pubkey: t.toJSON(),
          isSigner: e,
          isWritable: r
        })),
        programId: this.programId.toJSON(),
        data: [
          ...this.data
        ]
      };
    }
  }
  class Z {
    get signature() {
      return this.signatures.length > 0 ? this.signatures[0].signature : null;
    }
    constructor(t) {
      if (this.signatures = [], this.feePayer = void 0, this.instructions = [], this.recentBlockhash = void 0, this.lastValidBlockHeight = void 0, this.nonceInfo = void 0, this.minNonceContextSlot = void 0, this._message = void 0, this._json = void 0, !!t) if (t.feePayer && (this.feePayer = t.feePayer), t.signatures && (this.signatures = t.signatures), Object.prototype.hasOwnProperty.call(t, "nonceInfo")) {
        const { minContextSlot: e, nonceInfo: r } = t;
        this.minNonceContextSlot = e, this.nonceInfo = r;
      } else if (Object.prototype.hasOwnProperty.call(t, "lastValidBlockHeight")) {
        const { blockhash: e, lastValidBlockHeight: r } = t;
        this.recentBlockhash = e, this.lastValidBlockHeight = r;
      } else {
        const { recentBlockhash: e, nonceInfo: r } = t;
        r && (this.nonceInfo = r), this.recentBlockhash = e;
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
        instructions: this.instructions.map((t) => t.toJSON()),
        signers: this.signatures.map(({ publicKey: t }) => t.toJSON())
      };
    }
    add(...t) {
      if (t.length === 0) throw new Error("No instructions");
      return t.forEach((e) => {
        "instructions" in e ? this.instructions = this.instructions.concat(e.instructions) : "data" in e && "programId" in e && "keys" in e ? this.instructions.push(e) : this.instructions.push(new et(e));
      }), this;
    }
    compileMessage() {
      if (this._message && JSON.stringify(this.toJSON()) === JSON.stringify(this._json)) return this._message;
      let t, e;
      if (this.nonceInfo ? (t = this.nonceInfo.nonce, this.instructions[0] != this.nonceInfo.nonceInstruction ? e = [
        this.nonceInfo.nonceInstruction,
        ...this.instructions
      ] : e = this.instructions) : (t = this.recentBlockhash, e = this.instructions), !t) throw new Error("Transaction recentBlockhash required");
      e.length < 1 && console.warn("No instructions provided");
      let r;
      if (this.feePayer) r = this.feePayer;
      else if (this.signatures.length > 0 && this.signatures[0].publicKey) r = this.signatures[0].publicKey;
      else throw new Error("Transaction fee payer required");
      for (let T = 0; T < e.length; T++) if (e[T].programId === void 0) throw new Error(`Transaction instruction index ${T} has undefined program id`);
      const o = [], s = [];
      e.forEach((T) => {
        T.keys.forEach((U) => {
          s.push({
            ...U
          });
        });
        const E = T.programId.toString();
        o.includes(E) || o.push(E);
      }), o.forEach((T) => {
        s.push({
          pubkey: new R(T),
          isSigner: false,
          isWritable: false
        });
      });
      const l = [];
      s.forEach((T) => {
        const E = T.pubkey.toString(), U = l.findIndex((J) => J.pubkey.toString() === E);
        U > -1 ? (l[U].isWritable = l[U].isWritable || T.isWritable, l[U].isSigner = l[U].isSigner || T.isSigner) : l.push(T);
      }), l.sort(function(T, E) {
        if (T.isSigner !== E.isSigner) return T.isSigner ? -1 : 1;
        if (T.isWritable !== E.isWritable) return T.isWritable ? -1 : 1;
        const U = {
          localeMatcher: "best fit",
          usage: "sort",
          sensitivity: "variant",
          ignorePunctuation: false,
          numeric: false,
          caseFirst: "lower"
        };
        return T.pubkey.toBase58().localeCompare(E.pubkey.toBase58(), "en", U);
      });
      const p = l.findIndex((T) => T.pubkey.equals(r));
      if (p > -1) {
        const [T] = l.splice(p, 1);
        T.isSigner = true, T.isWritable = true, l.unshift(T);
      } else l.unshift({
        pubkey: r,
        isSigner: true,
        isWritable: true
      });
      for (const T of this.signatures) {
        const E = l.findIndex((U) => U.pubkey.equals(T.publicKey));
        if (E > -1) l[E].isSigner || (l[E].isSigner = true, console.warn("Transaction references a signature that is unnecessary, only the fee payer and instruction signer accounts should sign a transaction. This behavior is deprecated and will throw an error in the next major version release."));
        else throw new Error(`unknown signer: ${T.publicKey.toString()}`);
      }
      let y = 0, S = 0, _ = 0;
      const I = [], L = [];
      l.forEach(({ pubkey: T, isSigner: E, isWritable: U }) => {
        E ? (I.push(T.toString()), y += 1, U || (S += 1)) : (L.push(T.toString()), U || (_ += 1));
      });
      const x = I.concat(L), P = e.map((T) => {
        const { data: E, programId: U } = T;
        return {
          programIdIndex: x.indexOf(U.toString()),
          accounts: T.keys.map((J) => x.indexOf(J.pubkey.toString())),
          data: Gt.encode(E)
        };
      });
      return P.forEach((T) => {
        $(T.programIdIndex >= 0), T.accounts.forEach((E) => $(E >= 0));
      }), new ie({
        header: {
          numRequiredSignatures: y,
          numReadonlySignedAccounts: S,
          numReadonlyUnsignedAccounts: _
        },
        accountKeys: x,
        recentBlockhash: t,
        instructions: P
      });
    }
    _compile() {
      const t = this.compileMessage(), e = t.accountKeys.slice(0, t.header.numRequiredSignatures);
      return this.signatures.length === e.length && this.signatures.every((o, s) => e[s].equals(o.publicKey)) || (this.signatures = e.map((r) => ({
        signature: null,
        publicKey: r
      }))), t;
    }
    serializeMessage() {
      return this._compile().serialize();
    }
    async getEstimatedFee(t) {
      return (await t.getFeeForMessage(this.compileMessage())).value;
    }
    setSigners(...t) {
      if (t.length === 0) throw new Error("No signers");
      const e = /* @__PURE__ */ new Set();
      this.signatures = t.filter((r) => {
        const o = r.toString();
        return e.has(o) ? false : (e.add(o), true);
      }).map((r) => ({
        signature: null,
        publicKey: r
      }));
    }
    sign(...t) {
      if (t.length === 0) throw new Error("No signers");
      const e = /* @__PURE__ */ new Set(), r = [];
      for (const s of t) {
        const l = s.publicKey.toString();
        e.has(l) || (e.add(l), r.push(s));
      }
      this.signatures = r.map((s) => ({
        signature: null,
        publicKey: s.publicKey
      }));
      const o = this._compile();
      this._partialSign(o, ...r);
    }
    partialSign(...t) {
      if (t.length === 0) throw new Error("No signers");
      const e = /* @__PURE__ */ new Set(), r = [];
      for (const s of t) {
        const l = s.publicKey.toString();
        e.has(l) || (e.add(l), r.push(s));
      }
      const o = this._compile();
      this._partialSign(o, ...r);
    }
    _partialSign(t, ...e) {
      const r = t.serialize();
      e.forEach((o) => {
        const s = jr(r, o.secretKey);
        this._addSignature(o.publicKey, H(s));
      });
    }
    addSignature(t, e) {
      this._compile(), this._addSignature(t, e);
    }
    _addSignature(t, e) {
      $(e.length === 64);
      const r = this.signatures.findIndex((o) => t.equals(o.publicKey));
      if (r < 0) throw new Error(`unknown signer: ${t.toString()}`);
      this.signatures[r].signature = F.from(e);
    }
    verifySignatures(t = true) {
      return !this._getMessageSignednessErrors(this.serializeMessage(), t);
    }
    _getMessageSignednessErrors(t, e) {
      const r = {};
      for (const { signature: o, publicKey: s } of this.signatures) o === null ? e && (r.missing || (r.missing = [])).push(s) : Pi(o, t, s.toBytes()) || (r.invalid || (r.invalid = [])).push(s);
      return r.invalid || r.missing ? r : void 0;
    }
    serialize(t) {
      const { requireAllSignatures: e, verifySignatures: r } = Object.assign({
        requireAllSignatures: true,
        verifySignatures: true
      }, t), o = this.serializeMessage();
      if (r) {
        const s = this._getMessageSignednessErrors(o, e);
        if (s) {
          let l = "Signature verification failed.";
          throw s.invalid && (l += `
Invalid signature for public key${s.invalid.length === 1 ? "" : "(s)"} [\`${s.invalid.map((p) => p.toBase58()).join("`, `")}\`].`), s.missing && (l += `
Missing signature for public key${s.missing.length === 1 ? "" : "(s)"} [\`${s.missing.map((p) => p.toBase58()).join("`, `")}\`].`), new Error(l);
        }
      }
      return this._serialize(o);
    }
    _serialize(t) {
      const { signatures: e } = this, r = [];
      te(r, e.length);
      const o = r.length + e.length * 64 + t.length, s = F.alloc(o);
      return $(e.length < 256), F.from(r).copy(s, 0), e.forEach(({ signature: l }, p) => {
        l !== null && ($(l.length === 64, "signature has invalid length"), F.from(l).copy(s, r.length + p * 64));
      }), t.copy(s, r.length + e.length * 64), $(s.length <= ge, `Transaction too large: ${s.length} > ${ge}`), s;
    }
    get keys() {
      return $(this.instructions.length === 1), this.instructions[0].keys.map((t) => t.pubkey);
    }
    get programId() {
      return $(this.instructions.length === 1), this.instructions[0].programId;
    }
    get data() {
      return $(this.instructions.length === 1), this.instructions[0].data;
    }
    static from(t) {
      let e = [
        ...t
      ];
      const r = Qt(e);
      let o = [];
      for (let s = 0; s < r; s++) {
        const l = $t(e, 0, pe);
        o.push(Gt.encode(F.from(l)));
      }
      return Z.populate(ie.from(e), o);
    }
    static populate(t, e = []) {
      const r = new Z();
      return r.recentBlockhash = t.recentBlockhash, t.header.numRequiredSignatures > 0 && (r.feePayer = t.accountKeys[0]), e.forEach((o, s) => {
        const l = {
          signature: o == Gt.encode(Hi) ? null : Gt.decode(o),
          publicKey: t.accountKeys[s]
        };
        r.signatures.push(l);
      }), t.instructions.forEach((o) => {
        const s = o.accounts.map((l) => {
          const p = t.accountKeys[l];
          return {
            pubkey: p,
            isSigner: r.signatures.some((y) => y.publicKey.toString() === p.toString()) || t.isAccountSigner(l),
            isWritable: t.isAccountWritable(l)
          };
        });
        r.instructions.push(new et({
          keys: s,
          programId: t.accountKeys[o.programIdIndex],
          data: Gt.decode(o.data)
        }));
      }), r._message = t, r._json = r.toJSON(), r;
    }
  }
  Xr = class {
    constructor(t) {
      this.payerKey = void 0, this.instructions = void 0, this.recentBlockhash = void 0, this.payerKey = t.payerKey, this.instructions = t.instructions, this.recentBlockhash = t.recentBlockhash;
    }
    static decompile(t, e) {
      const { header: r, compiledInstructions: o, recentBlockhash: s } = t, { numRequiredSignatures: l, numReadonlySignedAccounts: p, numReadonlyUnsignedAccounts: y } = r, S = l - p;
      $(S > 0, "Message header is invalid");
      const _ = t.staticAccountKeys.length - l - y;
      $(_ >= 0, "Message header is invalid");
      const I = t.getAccountKeys(e), L = I.get(0);
      if (L === void 0) throw new Error("Failed to decompile message because no account keys were found");
      const x = [];
      for (const P of o) {
        const T = [];
        for (const U of P.accountKeyIndexes) {
          const J = I.get(U);
          if (J === void 0) throw new Error(`Failed to find key for account key index ${U}`);
          const j = U < l;
          let Yt;
          j ? Yt = U < S : U < I.staticAccountKeys.length ? Yt = U - l < _ : Yt = U - I.staticAccountKeys.length < I.accountKeysFromLookups.writable.length, T.push({
            pubkey: J,
            isSigner: U < r.numRequiredSignatures,
            isWritable: Yt
          });
        }
        const E = I.get(P.programIdIndex);
        if (E === void 0) throw new Error(`Failed to find program id for program id index ${P.programIdIndex}`);
        x.push(new et({
          programId: E,
          data: H(P.data),
          keys: T
        }));
      }
      return new Xr({
        payerKey: L,
        instructions: x,
        recentBlockhash: s
      });
    }
    compileToLegacyMessage() {
      return ie.compile({
        payerKey: this.payerKey,
        recentBlockhash: this.recentBlockhash,
        instructions: this.instructions
      });
    }
    compileToV0Message(t) {
      return ve.compile({
        payerKey: this.payerKey,
        recentBlockhash: this.recentBlockhash,
        instructions: this.instructions,
        addressLookupTableAccounts: t
      });
    }
  };
  class tr {
    get version() {
      return this.message.version;
    }
    constructor(t, e) {
      if (this.signatures = void 0, this.message = void 0, e !== void 0) $(e.length === t.header.numRequiredSignatures, "Expected signatures length to be equal to the number of required signatures"), this.signatures = e;
      else {
        const r = [];
        for (let o = 0; o < t.header.numRequiredSignatures; o++) r.push(new Uint8Array(pe));
        this.signatures = r;
      }
      this.message = t;
    }
    serialize() {
      const t = this.message.serialize(), e = Array();
      te(e, this.signatures.length);
      const r = b.struct([
        b.blob(e.length, "encodedSignaturesLength"),
        b.seq(zi(), this.signatures.length, "signatures"),
        b.blob(t.length, "serializedMessage")
      ]), o = new Uint8Array(2048), s = r.encode({
        encodedSignaturesLength: new Uint8Array(e),
        signatures: this.signatures,
        serializedMessage: t
      }, o);
      return o.slice(0, s);
    }
    static deserialize(t) {
      if (t[0] === hs) return this.deserializeV1(t);
      let e = [
        ...t
      ];
      const r = [], o = Qt(e);
      for (let l = 0; l < o; l++) r.push(new Uint8Array($t(e, 0, pe)));
      const s = Qe.deserialize(new Uint8Array(e));
      return new tr(s, r);
    }
    static deserializeV1(t) {
      const e = t[1], r = e * pe, o = t.length - r;
      $(o > 0, "Expected transaction to have enough bytes for its signatures");
      const s = Qe.deserialize(t.slice(0, o)), l = [];
      for (let p = 0; p < e; p++) {
        const y = o + p * pe;
        l.push(t.slice(y, y + pe));
      }
      return new tr(s, l);
    }
    sign(t) {
      const e = this.message.serialize(), r = this.message.staticAccountKeys.slice(0, this.message.header.numRequiredSignatures);
      for (const o of t) {
        const s = r.findIndex((l) => l.equals(o.publicKey));
        $(s >= 0, `Cannot sign with non signer key ${o.publicKey.toBase58()}`), this.signatures[s] = jr(e, o.secretKey);
      }
    }
    addSignature(t, e) {
      $(e.byteLength === 64, "Signature must be 64 bytes long");
      const o = this.message.staticAccountKeys.slice(0, this.message.header.numRequiredSignatures).findIndex((s) => s.equals(t));
      $(o >= 0, `Can not add signature; \`${t.toBase58()}\` is not required to sign this transaction`), this.signatures[o] = e;
    }
  }
  const $i = 160, Gi = 64, ji = $i / Gi, ps = 1e3 / ji, oe = new R("SysvarC1ock11111111111111111111111111111111"), Ji = new R("SysvarEpochSchedu1e111111111111111111111111"), Yi = new R("Sysvar1nstructions1111111111111111111111111"), Ye = new R("SysvarRecentB1ockHashes11111111111111111111"), Le = new R("SysvarRent111111111111111111111111111111111"), Zi = new R("SysvarRewards111111111111111111111111111111"), Xi = new R("SysvarS1otHashes111111111111111111111111111"), Qi = new R("SysvarS1otHistory11111111111111111111111111"), Ze = new R("SysvarStakeHistory1111111111111111111111111");
  qe = class extends Error {
    constructor({ action: t, signature: e, transactionMessage: r, logs: o }) {
      const s = o ? `Logs: 
${JSON.stringify(o.slice(-10), null, 2)}. ` : "", l = "\nCatch the `SendTransactionError` and call `getLogs()` on it for full details.";
      let p;
      switch (t) {
        case "send":
          p = `Transaction ${e} resulted in an error. 
${r}. ` + s + l;
          break;
        case "simulate":
          p = `Simulation failed. 
Message: ${r}. 
` + s + l;
          break;
        default:
          p = `Unknown action '${/* @__PURE__ */ ((y) => y)(t)}'`;
      }
      super(p), this.signature = void 0, this.transactionMessage = void 0, this.transactionLogs = void 0, this.signature = e, this.transactionMessage = r, this.transactionLogs = o || void 0;
    }
    get transactionError() {
      return {
        message: this.transactionMessage,
        logs: Array.isArray(this.transactionLogs) ? this.transactionLogs : void 0
      };
    }
    get logs() {
      const t = this.transactionLogs;
      if (!(t != null && typeof t == "object" && "then" in t)) return t;
    }
    async getLogs(t) {
      return Array.isArray(this.transactionLogs) || (this.transactionLogs = new Promise((e, r) => {
        t.getTransaction(this.signature).then((o) => {
          if (o && o.meta && o.meta.logMessages) {
            const s = o.meta.logMessages;
            this.transactionLogs = s, e(s);
          } else r(new Error("Log messages not found"));
        }).catch(r);
      })), await this.transactionLogs;
    }
  };
  const to = {
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
  class q extends Error {
    constructor({ code: t, message: e, data: r }, o) {
      super(o != null ? `${o}: ${e}` : e), this.code = void 0, this.data = void 0, this.code = t, this.data = r, this.name = "SolanaJSONRPCError";
    }
  }
  async function Or(u, t, e, r) {
    const o = r && {
      skipPreflight: r.skipPreflight,
      preflightCommitment: r.preflightCommitment || r.commitment,
      maxRetries: r.maxRetries,
      minContextSlot: r.minContextSlot
    }, s = await u.sendTransaction(t, e, o);
    let l;
    if (t.recentBlockhash != null && t.lastValidBlockHeight != null) l = (await u.confirmTransaction({
      abortSignal: r == null ? void 0 : r.abortSignal,
      signature: s,
      blockhash: t.recentBlockhash,
      lastValidBlockHeight: t.lastValidBlockHeight
    }, r && r.commitment)).value;
    else if (t.minNonceContextSlot != null && t.nonceInfo != null) {
      const { nonceInstruction: p } = t.nonceInfo, y = p.keys[0].pubkey;
      l = (await u.confirmTransaction({
        abortSignal: r == null ? void 0 : r.abortSignal,
        minContextSlot: t.minNonceContextSlot,
        nonceAccountPubkey: y,
        nonceValue: t.nonceInfo.nonce,
        signature: s
      }, r && r.commitment)).value;
    } else (r == null ? void 0 : r.abortSignal) != null && console.warn("sendAndConfirmTransaction(): A transaction with a deprecated confirmation strategy was supplied along with an `abortSignal`. Only transactions having `lastValidBlockHeight` or a combination of `nonceInfo` and `minNonceContextSlot` are abortable."), l = (await u.confirmTransaction(s, r && r.commitment)).value;
    if (l.err) throw s != null ? new qe({
      action: "send",
      signature: s,
      transactionMessage: `Status: (${JSON.stringify(l)})`
    }) : new Error(`Transaction ${s} failed (${JSON.stringify(l)})`);
    return s;
  }
  function be(u) {
    return new Promise((t) => setTimeout(t, u));
  }
  function Y(u, t) {
    const e = u.layout.span >= 0 ? u.layout.span : ds(u, t), r = F.alloc(e), o = Object.assign({
      instruction: u.index
    }, t);
    return u.layout.encode(o, r), r;
  }
  function X(u, t) {
    let e;
    try {
      e = u.layout.decode(t);
    } catch (r) {
      throw new Error("invalid instruction; " + r);
    }
    if (e.instruction !== u.index) throw new Error(`invalid instruction; instruction index mismatch ${e.instruction} != ${u.index}`);
    return e;
  }
  const gs = b.nu64("lamportsPerSignature"), ys = b.struct([
    b.u32("version"),
    b.u32("state"),
    G("authorizedPubkey"),
    G("nonce"),
    b.struct([
      gs
    ], "feeCalculator")
  ]), Kr = ys.span;
  class nr {
    constructor(t) {
      this.authorizedPubkey = void 0, this.nonce = void 0, this.feeCalculator = void 0, this.authorizedPubkey = t.authorizedPubkey, this.nonce = t.nonce, this.feeCalculator = t.feeCalculator;
    }
    static fromAccountData(t) {
      const e = ys.decode(H(t), 0);
      return new nr({
        authorizedPubkey: new R(e.authorizedPubkey),
        nonce: new R(e.nonce).toString(),
        feeCalculator: e.feeCalculator
      });
    }
  }
  function Ce(u) {
    const t = b.blob(8, u), e = t.decode.bind(t), r = t.encode.bind(t), o = t, s = Si();
    return o.decode = (l, p) => {
      const y = e(l, p);
      return s.decode(y);
    }, o.encode = (l, p, y) => {
      const S = s.encode(l);
      return r(S, p, y);
    }, o;
  }
  class eo {
    constructor() {
    }
    static decodeInstructionType(t) {
      this.checkProgramId(t.programId);
      const r = b.u32("instruction").decode(t.data);
      let o;
      for (const [s, l] of Object.entries(nt)) if (l.index == r) {
        o = s;
        break;
      }
      if (!o) throw new Error("Instruction type incorrect; not a SystemInstruction");
      return o;
    }
    static decodeCreateAccount(t) {
      this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 2);
      const { lamports: e, space: r, programId: o } = X(nt.Create, t.data);
      return {
        fromPubkey: t.keys[0].pubkey,
        newAccountPubkey: t.keys[1].pubkey,
        lamports: e,
        space: r,
        programId: new R(o)
      };
    }
    static decodeTransfer(t) {
      this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 2);
      const { lamports: e } = X(nt.Transfer, t.data);
      return {
        fromPubkey: t.keys[0].pubkey,
        toPubkey: t.keys[1].pubkey,
        lamports: e
      };
    }
    static decodeTransferWithSeed(t) {
      this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 3);
      const { lamports: e, seed: r, programId: o } = X(nt.TransferWithSeed, t.data);
      return {
        fromPubkey: t.keys[0].pubkey,
        basePubkey: t.keys[1].pubkey,
        toPubkey: t.keys[2].pubkey,
        lamports: e,
        seed: r,
        programId: new R(o)
      };
    }
    static decodeAllocate(t) {
      this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 1);
      const { space: e } = X(nt.Allocate, t.data);
      return {
        accountPubkey: t.keys[0].pubkey,
        space: e
      };
    }
    static decodeAllocateWithSeed(t) {
      this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 1);
      const { base: e, seed: r, space: o, programId: s } = X(nt.AllocateWithSeed, t.data);
      return {
        accountPubkey: t.keys[0].pubkey,
        basePubkey: new R(e),
        seed: r,
        space: o,
        programId: new R(s)
      };
    }
    static decodeAssign(t) {
      this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 1);
      const { programId: e } = X(nt.Assign, t.data);
      return {
        accountPubkey: t.keys[0].pubkey,
        programId: new R(e)
      };
    }
    static decodeAssignWithSeed(t) {
      this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 1);
      const { base: e, seed: r, programId: o } = X(nt.AssignWithSeed, t.data);
      return {
        accountPubkey: t.keys[0].pubkey,
        basePubkey: new R(e),
        seed: r,
        programId: new R(o)
      };
    }
    static decodeCreateWithSeed(t) {
      this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 2);
      const { base: e, seed: r, lamports: o, space: s, programId: l } = X(nt.CreateWithSeed, t.data);
      return {
        fromPubkey: t.keys[0].pubkey,
        newAccountPubkey: t.keys[1].pubkey,
        basePubkey: new R(e),
        seed: r,
        lamports: o,
        space: s,
        programId: new R(l)
      };
    }
    static decodeNonceInitialize(t) {
      this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 3);
      const { authorized: e } = X(nt.InitializeNonceAccount, t.data);
      return {
        noncePubkey: t.keys[0].pubkey,
        authorizedPubkey: new R(e)
      };
    }
    static decodeNonceAdvance(t) {
      return this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 3), X(nt.AdvanceNonceAccount, t.data), {
        noncePubkey: t.keys[0].pubkey,
        authorizedPubkey: t.keys[2].pubkey
      };
    }
    static decodeNonceWithdraw(t) {
      this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 5);
      const { lamports: e } = X(nt.WithdrawNonceAccount, t.data);
      return {
        noncePubkey: t.keys[0].pubkey,
        toPubkey: t.keys[1].pubkey,
        authorizedPubkey: t.keys[4].pubkey,
        lamports: e
      };
    }
    static decodeNonceAuthorize(t) {
      this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 2);
      const { authorized: e } = X(nt.AuthorizeNonceAccount, t.data);
      return {
        noncePubkey: t.keys[0].pubkey,
        authorizedPubkey: t.keys[1].pubkey,
        newAuthorizedPubkey: new R(e)
      };
    }
    static checkProgramId(t) {
      if (!t.equals(Jt.programId)) throw new Error("invalid instruction; programId is not SystemProgram");
    }
    static checkKeyLength(t, e) {
      if (t.length < e) throw new Error(`invalid instruction; found ${t.length} keys, expected at least ${e}`);
    }
  }
  const nt = Object.freeze({
    Create: {
      index: 0,
      layout: b.struct([
        b.u32("instruction"),
        b.ns64("lamports"),
        b.ns64("space"),
        G("programId")
      ])
    },
    Assign: {
      index: 1,
      layout: b.struct([
        b.u32("instruction"),
        G("programId")
      ])
    },
    Transfer: {
      index: 2,
      layout: b.struct([
        b.u32("instruction"),
        Ce("lamports")
      ])
    },
    CreateWithSeed: {
      index: 3,
      layout: b.struct([
        b.u32("instruction"),
        G("base"),
        we("seed"),
        b.ns64("lamports"),
        b.ns64("space"),
        G("programId")
      ])
    },
    AdvanceNonceAccount: {
      index: 4,
      layout: b.struct([
        b.u32("instruction")
      ])
    },
    WithdrawNonceAccount: {
      index: 5,
      layout: b.struct([
        b.u32("instruction"),
        b.ns64("lamports")
      ])
    },
    InitializeNonceAccount: {
      index: 6,
      layout: b.struct([
        b.u32("instruction"),
        G("authorized")
      ])
    },
    AuthorizeNonceAccount: {
      index: 7,
      layout: b.struct([
        b.u32("instruction"),
        G("authorized")
      ])
    },
    Allocate: {
      index: 8,
      layout: b.struct([
        b.u32("instruction"),
        b.ns64("space")
      ])
    },
    AllocateWithSeed: {
      index: 9,
      layout: b.struct([
        b.u32("instruction"),
        G("base"),
        we("seed"),
        b.ns64("space"),
        G("programId")
      ])
    },
    AssignWithSeed: {
      index: 10,
      layout: b.struct([
        b.u32("instruction"),
        G("base"),
        we("seed"),
        G("programId")
      ])
    },
    TransferWithSeed: {
      index: 11,
      layout: b.struct([
        b.u32("instruction"),
        Ce("lamports"),
        we("seed"),
        G("programId")
      ])
    },
    UpgradeNonceAccount: {
      index: 12,
      layout: b.struct([
        b.u32("instruction")
      ])
    }
  });
  class Jt {
    constructor() {
    }
    static createAccount(t) {
      const e = nt.Create, r = Y(e, {
        lamports: t.lamports,
        space: t.space,
        programId: H(t.programId.toBuffer())
      });
      return new et({
        keys: [
          {
            pubkey: t.fromPubkey,
            isSigner: true,
            isWritable: true
          },
          {
            pubkey: t.newAccountPubkey,
            isSigner: true,
            isWritable: true
          }
        ],
        programId: this.programId,
        data: r
      });
    }
    static transfer(t) {
      let e, r;
      if ("basePubkey" in t) {
        const o = nt.TransferWithSeed;
        e = Y(o, {
          lamports: BigInt(t.lamports),
          seed: t.seed,
          programId: H(t.programId.toBuffer())
        }), r = [
          {
            pubkey: t.fromPubkey,
            isSigner: false,
            isWritable: true
          },
          {
            pubkey: t.basePubkey,
            isSigner: true,
            isWritable: false
          },
          {
            pubkey: t.toPubkey,
            isSigner: false,
            isWritable: true
          }
        ];
      } else {
        const o = nt.Transfer;
        e = Y(o, {
          lamports: BigInt(t.lamports)
        }), r = [
          {
            pubkey: t.fromPubkey,
            isSigner: true,
            isWritable: true
          },
          {
            pubkey: t.toPubkey,
            isSigner: false,
            isWritable: true
          }
        ];
      }
      return new et({
        keys: r,
        programId: this.programId,
        data: e
      });
    }
    static assign(t) {
      let e, r;
      if ("basePubkey" in t) {
        const o = nt.AssignWithSeed;
        e = Y(o, {
          base: H(t.basePubkey.toBuffer()),
          seed: t.seed,
          programId: H(t.programId.toBuffer())
        }), r = [
          {
            pubkey: t.accountPubkey,
            isSigner: false,
            isWritable: true
          },
          {
            pubkey: t.basePubkey,
            isSigner: true,
            isWritable: false
          }
        ];
      } else {
        const o = nt.Assign;
        e = Y(o, {
          programId: H(t.programId.toBuffer())
        }), r = [
          {
            pubkey: t.accountPubkey,
            isSigner: true,
            isWritable: true
          }
        ];
      }
      return new et({
        keys: r,
        programId: this.programId,
        data: e
      });
    }
    static createAccountWithSeed(t) {
      const e = nt.CreateWithSeed, r = Y(e, {
        base: H(t.basePubkey.toBuffer()),
        seed: t.seed,
        lamports: t.lamports,
        space: t.space,
        programId: H(t.programId.toBuffer())
      });
      let o = [
        {
          pubkey: t.fromPubkey,
          isSigner: true,
          isWritable: true
        },
        {
          pubkey: t.newAccountPubkey,
          isSigner: false,
          isWritable: true
        }
      ];
      return t.basePubkey.equals(t.fromPubkey) || o.push({
        pubkey: t.basePubkey,
        isSigner: true,
        isWritable: false
      }), new et({
        keys: o,
        programId: this.programId,
        data: r
      });
    }
    static createNonceAccount(t) {
      const e = new Z();
      "basePubkey" in t && "seed" in t ? e.add(Jt.createAccountWithSeed({
        fromPubkey: t.fromPubkey,
        newAccountPubkey: t.noncePubkey,
        basePubkey: t.basePubkey,
        seed: t.seed,
        lamports: t.lamports,
        space: Kr,
        programId: this.programId
      })) : e.add(Jt.createAccount({
        fromPubkey: t.fromPubkey,
        newAccountPubkey: t.noncePubkey,
        lamports: t.lamports,
        space: Kr,
        programId: this.programId
      }));
      const r = {
        noncePubkey: t.noncePubkey,
        authorizedPubkey: t.authorizedPubkey
      };
      return e.add(this.nonceInitialize(r)), e;
    }
    static nonceInitialize(t) {
      const e = nt.InitializeNonceAccount, r = Y(e, {
        authorized: H(t.authorizedPubkey.toBuffer())
      }), o = {
        keys: [
          {
            pubkey: t.noncePubkey,
            isSigner: false,
            isWritable: true
          },
          {
            pubkey: Ye,
            isSigner: false,
            isWritable: false
          },
          {
            pubkey: Le,
            isSigner: false,
            isWritable: false
          }
        ],
        programId: this.programId,
        data: r
      };
      return new et(o);
    }
    static nonceAdvance(t) {
      const e = nt.AdvanceNonceAccount, r = Y(e), o = {
        keys: [
          {
            pubkey: t.noncePubkey,
            isSigner: false,
            isWritable: true
          },
          {
            pubkey: Ye,
            isSigner: false,
            isWritable: false
          },
          {
            pubkey: t.authorizedPubkey,
            isSigner: true,
            isWritable: false
          }
        ],
        programId: this.programId,
        data: r
      };
      return new et(o);
    }
    static nonceWithdraw(t) {
      const e = nt.WithdrawNonceAccount, r = Y(e, {
        lamports: t.lamports
      });
      return new et({
        keys: [
          {
            pubkey: t.noncePubkey,
            isSigner: false,
            isWritable: true
          },
          {
            pubkey: t.toPubkey,
            isSigner: false,
            isWritable: true
          },
          {
            pubkey: Ye,
            isSigner: false,
            isWritable: false
          },
          {
            pubkey: Le,
            isSigner: false,
            isWritable: false
          },
          {
            pubkey: t.authorizedPubkey,
            isSigner: true,
            isWritable: false
          }
        ],
        programId: this.programId,
        data: r
      });
    }
    static nonceAuthorize(t) {
      const e = nt.AuthorizeNonceAccount, r = Y(e, {
        authorized: H(t.newAuthorizedPubkey.toBuffer())
      });
      return new et({
        keys: [
          {
            pubkey: t.noncePubkey,
            isSigner: false,
            isWritable: true
          },
          {
            pubkey: t.authorizedPubkey,
            isSigner: true,
            isWritable: false
          }
        ],
        programId: this.programId,
        data: r
      });
    }
    static allocate(t) {
      let e, r;
      if ("basePubkey" in t) {
        const o = nt.AllocateWithSeed;
        e = Y(o, {
          base: H(t.basePubkey.toBuffer()),
          seed: t.seed,
          space: t.space,
          programId: H(t.programId.toBuffer())
        }), r = [
          {
            pubkey: t.accountPubkey,
            isSigner: false,
            isWritable: true
          },
          {
            pubkey: t.basePubkey,
            isSigner: true,
            isWritable: false
          }
        ];
      } else {
        const o = nt.Allocate;
        e = Y(o, {
          space: t.space
        }), r = [
          {
            pubkey: t.accountPubkey,
            isSigner: true,
            isWritable: true
          }
        ];
      }
      return new et({
        keys: r,
        programId: this.programId,
        data: e
      });
    }
  }
  Jt.programId = new R("11111111111111111111111111111111");
  const ro = ge - 300;
  class Se {
    constructor() {
    }
    static getMinNumSignatures(t) {
      return 2 * (Math.ceil(t / Se.chunkSize) + 1 + 1);
    }
    static async load(t, e, r, o, s) {
      {
        const I = await t.getMinimumBalanceForRentExemption(s.length), L = await t.getAccountInfo(r.publicKey, "confirmed");
        let x = null;
        if (L !== null) {
          if (L.executable) return console.error("Program load failed, account is already executable"), false;
          L.data.length !== s.length && (x = x || new Z(), x.add(Jt.allocate({
            accountPubkey: r.publicKey,
            space: s.length
          }))), L.owner.equals(o) || (x = x || new Z(), x.add(Jt.assign({
            accountPubkey: r.publicKey,
            programId: o
          }))), L.lamports < I && (x = x || new Z(), x.add(Jt.transfer({
            fromPubkey: e.publicKey,
            toPubkey: r.publicKey,
            lamports: I - L.lamports
          })));
        } else x = new Z().add(Jt.createAccount({
          fromPubkey: e.publicKey,
          newAccountPubkey: r.publicKey,
          lamports: I > 0 ? I : 1,
          space: s.length,
          programId: o
        }));
        x !== null && await Or(t, x, [
          e,
          r
        ], {
          commitment: "confirmed"
        });
      }
      const l = b.struct([
        b.u32("instruction"),
        b.u32("offset"),
        b.u32("bytesLength"),
        b.u32("bytesLengthPadding"),
        b.seq(b.u8("byte"), b.offset(b.u32(), -8), "bytes")
      ]), p = Se.chunkSize;
      let y = 0, S = s, _ = [];
      for (; S.length > 0; ) {
        const I = S.slice(0, p), L = F.alloc(p + 16);
        l.encode({
          instruction: 0,
          offset: y,
          bytes: I,
          bytesLength: 0,
          bytesLengthPadding: 0
        }, L);
        const x = new Z().add({
          keys: [
            {
              pubkey: r.publicKey,
              isSigner: true,
              isWritable: true
            }
          ],
          programId: o,
          data: L
        });
        _.push(Or(t, x, [
          e,
          r
        ], {
          commitment: "confirmed"
        })), t._rpcEndpoint.includes("solana.com") && await be(1e3 / 4), y += p, S = S.slice(p);
      }
      await Promise.all(_);
      {
        const I = b.struct([
          b.u32("instruction")
        ]), L = F.alloc(I.span);
        I.encode({
          instruction: 1
        }, L);
        const x = new Z().add({
          keys: [
            {
              pubkey: r.publicKey,
              isSigner: true,
              isWritable: true
            },
            {
              pubkey: Le,
              isSigner: false,
              isWritable: false
            }
          ],
          programId: o,
          data: L
        }), P = "processed", T = await t.sendTransaction(x, [
          e,
          r
        ], {
          preflightCommitment: P
        }), { context: E, value: U } = await t.confirmTransaction({
          signature: T,
          lastValidBlockHeight: x.lastValidBlockHeight,
          blockhash: x.recentBlockhash
        }, P);
        if (U.err) throw new Error(`Transaction ${T} failed (${JSON.stringify(U)})`);
        for (; ; ) {
          try {
            if (await t.getSlot({
              commitment: P
            }) > E.slot) break;
          } catch {
          }
          await new Promise((J) => setTimeout(J, Math.round(ps / 2)));
        }
      }
      return true;
    }
  }
  Se.chunkSize = ro;
  const no = new R("BPFLoader2111111111111111111111111111111111");
  class so {
    static getMinNumSignatures(t) {
      return Se.getMinNumSignatures(t);
    }
    static load(t, e, r, o, s) {
      return Se.load(t, e, r, s, o);
    }
  }
  function io(u) {
    return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
  }
  var Pr, Wn;
  function oo() {
    if (Wn) return Pr;
    Wn = 1;
    var u = Object.prototype.toString, t = Object.keys || function(r) {
      var o = [];
      for (var s in r) o.push(s);
      return o;
    };
    function e(r, o) {
      var s, l, p, y, S, _, I;
      if (r === true) return "true";
      if (r === false) return "false";
      switch (typeof r) {
        case "object":
          if (r === null) return null;
          if (r.toJSON && typeof r.toJSON == "function") return e(r.toJSON(), o);
          if (I = u.call(r), I === "[object Array]") {
            for (p = "[", l = r.length - 1, s = 0; s < l; s++) p += e(r[s], true) + ",";
            return l > -1 && (p += e(r[s], true)), p + "]";
          } else if (I === "[object Object]") {
            for (y = t(r).sort(), l = y.length, p = "", s = 0; s < l; ) S = y[s], _ = e(r[S], false), _ !== void 0 && (p && (p += ","), p += JSON.stringify(S) + ":" + _), s++;
            return "{" + p + "}";
          } else return JSON.stringify(r);
        case "function":
        case "undefined":
          return o ? null : void 0;
        case "string":
          return JSON.stringify(r);
        default:
          return isFinite(r) ? r : null;
      }
    }
    return Pr = function(r) {
      var o = e(r, false);
      if (o !== void 0) return "" + o;
    }, Pr;
  }
  var ao = oo(), Un = io(ao);
  const We = 32;
  function Tr(u) {
    let t = 0;
    for (; u > 1; ) u /= 2, t++;
    return t;
  }
  function co(u) {
    return u === 0 ? 1 : (u--, u |= u >> 1, u |= u >> 2, u |= u >> 4, u |= u >> 8, u |= u >> 16, u |= u >> 32, u + 1);
  }
  class ms {
    constructor(t, e, r, o, s) {
      this.slotsPerEpoch = void 0, this.leaderScheduleSlotOffset = void 0, this.warmup = void 0, this.firstNormalEpoch = void 0, this.firstNormalSlot = void 0, this.slotsPerEpoch = t, this.leaderScheduleSlotOffset = e, this.warmup = r, this.firstNormalEpoch = o, this.firstNormalSlot = s;
    }
    getEpoch(t) {
      return this.getEpochAndSlotIndex(t)[0];
    }
    getEpochAndSlotIndex(t) {
      if (t < this.firstNormalSlot) {
        const e = Tr(co(t + We + 1)) - Tr(We) - 1, r = this.getSlotsInEpoch(e), o = t - (r - We);
        return [
          e,
          o
        ];
      } else {
        const e = t - this.firstNormalSlot, r = Math.floor(e / this.slotsPerEpoch), o = this.firstNormalEpoch + r, s = e % this.slotsPerEpoch;
        return [
          o,
          s
        ];
      }
    }
    getFirstSlotInEpoch(t) {
      return t <= this.firstNormalEpoch ? (Math.pow(2, t) - 1) * We : (t - this.firstNormalEpoch) * this.slotsPerEpoch + this.firstNormalSlot;
    }
    getLastSlotInEpoch(t) {
      return this.getFirstSlotInEpoch(t) + this.getSlotsInEpoch(t) - 1;
    }
    getSlotsInEpoch(t) {
      return t < this.firstNormalEpoch ? Math.pow(2, t + Tr(We)) : this.slotsPerEpoch;
    }
  }
  var uo = globalThis.fetch;
  class lo extends Ri {
    constructor(t, e, r) {
      const o = (s) => {
        const l = Ei(s, {
          autoconnect: true,
          max_reconnects: 5,
          reconnect: true,
          reconnect_interval: 1e3,
          ...e
        });
        return "socket" in l ? this.underlyingSocket = l.socket : this.underlyingSocket = l, l;
      };
      super(o, t, e, r), this.underlyingSocket = void 0;
    }
    call(...t) {
      var _a3;
      const e = (_a3 = this.underlyingSocket) == null ? void 0 : _a3.readyState;
      return e === 1 ? super.call(...t) : Promise.reject(new Error("Tried to call a JSON-RPC method `" + t[0] + "` but the socket was not `CONNECTING` or `OPEN` (`readyState` was " + e + ")"));
    }
    notify(...t) {
      var _a3;
      const e = (_a3 = this.underlyingSocket) == null ? void 0 : _a3.readyState;
      return e === 1 ? super.notify(...t) : Promise.reject(new Error("Tried to send a JSON-RPC notification `" + t[0] + "` but the socket was not `CONNECTING` or `OPEN` (`readyState` was " + e + ")"));
    }
  }
  function ho(u, t) {
    let e;
    try {
      e = u.layout.decode(t);
    } catch (r) {
      throw new Error("invalid instruction; " + r);
    }
    if (e.typeIndex !== u.index) throw new Error(`invalid account data; account type mismatch ${e.typeIndex} != ${u.index}`);
    return e;
  }
  const qn = 56;
  class Wr {
    constructor(t) {
      this.key = void 0, this.state = void 0, this.key = t.key, this.state = t.state;
    }
    isActive() {
      const t = BigInt("0xffffffffffffffff");
      return this.state.deactivationSlot === t;
    }
    static deserialize(t) {
      const e = ho(fo, t), r = t.length - qn;
      $(r >= 0, "lookup table is invalid"), $(r % 32 === 0, "lookup table is invalid");
      const o = r / 32, { addresses: s } = b.struct([
        b.seq(G(), o, "addresses")
      ]).decode(t.slice(qn));
      return {
        deactivationSlot: e.deactivationSlot,
        lastExtendedSlot: e.lastExtendedSlot,
        lastExtendedSlotStartIndex: e.lastExtendedStartIndex,
        authority: e.authority.length !== 0 ? new R(e.authority[0]) : void 0,
        addresses: s.map((l) => new R(l))
      };
    }
  }
  const fo = {
    index: 1,
    layout: b.struct([
      b.u32("typeIndex"),
      Ce("deactivationSlot"),
      b.nu64("lastExtendedSlot"),
      b.u8("lastExtendedStartIndex"),
      b.u8(),
      b.seq(G(), b.offset(b.u8(), -1), "authority")
    ])
  }, po = /^[^:]+:\/\/([^:[]+|\[[^\]]+\])(:\d+)?(.*)/i;
  function go(u) {
    const t = u.match(po);
    if (t == null) throw TypeError(`Failed to validate endpoint URL \`${u}\``);
    const [e, r, o, s] = t, l = u.startsWith("https:") ? "wss:" : "ws:", p = o == null ? null : parseInt(o.slice(1), 10), y = p == null ? "" : `:${p + 1}`;
    return `${l}//${r}${y}${s}`;
  }
  const ot = Fe(Vr(R), B(), (u) => new R(u)), bs = Hr([
    B(),
    st("base64")
  ]), Qr = Fe(Vr(F), bs, (u) => F.from(u[0], "base64")), ws = 30 * 1e3;
  function yo(u) {
    if (/^https?:/.test(u) === false) throw new TypeError("Endpoint URL must start with `http:` or `https:`.");
    return u;
  }
  function rt(u) {
    let t, e;
    if (typeof u == "string") t = u;
    else if (u) {
      const { commitment: r, ...o } = u;
      t = r, e = o;
    }
    return {
      commitment: t,
      config: e
    };
  }
  function Dn(u) {
    return u.map((t) => "memcmp" in t ? {
      ...t,
      memcmp: {
        ...t.memcmp,
        encoding: t.memcmp.encoding ?? "base58"
      }
    } : t);
  }
  function ks(u) {
    return Xt([
      M({
        jsonrpc: st("2.0"),
        id: B(),
        result: u
      }),
      M({
        jsonrpc: st("2.0"),
        id: B(),
        error: M({
          code: ze(),
          message: B(),
          data: D(Ks())
        })
      })
    ]);
  }
  const mo = ks(ze());
  function V(u) {
    return Fe(ks(u), mo, (t) => "error" in t ? t : {
      ...t,
      result: N(t.result, u)
    });
  }
  function ct(u) {
    return V(M({
      context: M({
        slot: v()
      }),
      value: u
    }));
  }
  function sr(u) {
    return M({
      context: M({
        slot: v()
      }),
      value: u
    });
  }
  function Br(u, t) {
    if (u === 0) return new ve({
      header: t.header,
      staticAccountKeys: t.accountKeys.map((e) => new R(e)),
      recentBlockhash: t.recentBlockhash,
      compiledInstructions: t.instructions.map((e) => ({
        programIdIndex: e.programIdIndex,
        accountKeyIndexes: e.accounts,
        data: Gt.decode(e.data)
      })),
      addressTableLookups: t.addressTableLookups
    });
    if (u === 1) {
      const e = t.transactionConfig;
      if (e == null) throw new Error("Expected a version 1 transaction message response to have a `transactionConfig`");
      return new He({
        header: t.header,
        staticAccountKeys: t.accountKeys.map((r) => new R(r)),
        recentBlockhash: t.recentBlockhash,
        compiledInstructions: t.instructions.map((r) => ({
          programIdIndex: r.programIdIndex,
          accountKeyIndexes: r.accounts,
          data: Gt.decode(r.data)
        })),
        transactionConfig: e
      });
    } else return new ie(t);
  }
  const bo = M({
    foundation: v(),
    foundationTerm: v(),
    initial: v(),
    taper: v(),
    terminal: v()
  }), wo = V(O(C(M({
    epoch: v(),
    effectiveSlot: v(),
    amount: v(),
    postBalance: v(),
    commission: D(C(v()))
  })))), ko = O(M({
    slot: v(),
    prioritizationFee: v()
  })), vo = M({
    total: v(),
    validator: v(),
    foundation: v(),
    epoch: v()
  }), So = M({
    epoch: v(),
    slotIndex: v(),
    slotsInEpoch: v(),
    absoluteSlot: v(),
    blockHeight: D(v()),
    transactionCount: D(v())
  }), _o = M({
    slotsPerEpoch: v(),
    leaderScheduleSlotOffset: v(),
    warmup: ue(),
    firstNormalEpoch: v(),
    firstNormalSlot: v()
  }), Io = ss(B(), O(v())), _e = C(Xt([
    M({}),
    B()
  ])), Ao = M({
    err: _e
  }), Eo = st("receivedSignature"), xo = M({
    "solana-core": B(),
    "feature-set": D(v())
  }), Ro = M({
    program: B(),
    programId: ot,
    parsed: ze()
  }), Mo = M({
    programId: ot,
    accounts: O(ot),
    data: B()
  }), Fn = ct(M({
    err: C(Xt([
      M({}),
      B()
    ])),
    logs: C(O(B())),
    accounts: D(C(O(C(M({
      executable: ue(),
      owner: B(),
      lamports: v(),
      data: O(B()),
      rentEpoch: D(v())
    }))))),
    unitsConsumed: D(v()),
    returnData: D(C(M({
      programId: B(),
      data: Hr([
        B(),
        st("base64")
      ])
    }))),
    innerInstructions: D(C(O(M({
      index: v(),
      instructions: O(Xt([
        Ro,
        Mo
      ]))
    }))))
  })), Po = ct(M({
    byIdentity: ss(B(), O(v())),
    range: M({
      firstSlot: v(),
      lastSlot: v()
    })
  }));
  function To(u, t, e, r, o, s) {
    const l = e || uo;
    let p;
    s != null && console.warn("You have supplied an `httpAgent` when creating a `Connection` in a browser environment.It has been ignored; `httpAgent` is only used in Node environments.");
    let y;
    return r && (y = async (_, I) => {
      const L = await new Promise((x, P) => {
        try {
          r(_, I, (T, E) => x([
            T,
            E
          ]));
        } catch (T) {
          P(T);
        }
      });
      return await l(...L);
    }), new Os(async (_, I) => {
      const L = {
        method: "POST",
        body: _,
        agent: p,
        headers: Object.assign({
          "Content-Type": "application/json"
        }, t || {}, Ta)
      };
      try {
        let x = 5, P, T = 500;
        for (; y ? P = await y(u, L) : P = await l(u, L), !(P.status !== 429 || o === true || (x -= 1, x === 0)); ) console.error(`Server responded with ${P.status} ${P.statusText}.  Retrying after ${T}ms delay...`), await be(T), T *= 2;
        const E = await P.text();
        P.ok ? I(null, E) : I(new Error(`${P.status} ${P.statusText}: ${E}`));
      } catch (x) {
        x instanceof Error && I(x);
      }
    }, {});
  }
  function Bo(u) {
    return (t, e) => new Promise((r, o) => {
      u.request(t, e, (s, l) => {
        if (s) {
          o(s);
          return;
        }
        r(l);
      });
    });
  }
  function Lo(u) {
    return (t) => new Promise((e, r) => {
      t.length === 0 && e([]);
      const o = t.map((s) => u.request(s.methodName, s.args));
      u.request(o, (s, l) => {
        if (s) {
          r(s);
          return;
        }
        e(l);
      });
    });
  }
  const Co = V(bo), No = V(vo), zo = V(ko), Oo = V(So), Ko = V(_o), Wo = V(Io), Uo = V(v()), qo = ct(M({
    total: v(),
    circulating: v(),
    nonCirculating: v(),
    nonCirculatingAccounts: O(ot)
  })), Ur = M({
    amount: B(),
    uiAmount: C(v()),
    decimals: v(),
    uiAmountString: D(B())
  }), Do = ct(O(M({
    address: ot,
    amount: B(),
    uiAmount: C(v()),
    decimals: v(),
    uiAmountString: D(B())
  }))), Fo = ct(O(M({
    pubkey: ot,
    account: M({
      executable: ue(),
      owner: ot,
      lamports: v(),
      data: Qr,
      rentEpoch: v()
    })
  }))), qr = M({
    program: B(),
    parsed: ze(),
    space: v()
  }), Vo = ct(O(M({
    pubkey: ot,
    account: M({
      executable: ue(),
      owner: ot,
      lamports: v(),
      data: qr,
      rentEpoch: v()
    })
  }))), Ho = ct(O(M({
    lamports: v(),
    address: ot
  }))), De = M({
    executable: ue(),
    owner: ot,
    lamports: v(),
    data: Qr,
    rentEpoch: v()
  }), $o = M({
    pubkey: ot,
    account: De
  }), Go = Fe(Xt([
    Vr(F),
    qr
  ]), Xt([
    bs,
    qr
  ]), (u) => Array.isArray(u) ? N(u, Qr) : u), Dr = M({
    executable: ue(),
    owner: ot,
    lamports: v(),
    data: Go,
    rentEpoch: v()
  }), jo = M({
    pubkey: ot,
    account: Dr
  }), Jo = M({
    state: Xt([
      st("active"),
      st("inactive"),
      st("activating"),
      st("deactivating")
    ]),
    active: v(),
    inactive: v()
  }), Yo = V(O(M({
    signature: B(),
    slot: v(),
    err: _e,
    memo: C(B()),
    blockTime: D(C(v()))
  }))), Zo = V(O(M({
    signature: B(),
    slot: v(),
    err: _e,
    memo: C(B()),
    blockTime: D(C(v()))
  }))), Xo = M({
    subscription: v(),
    result: sr(De)
  }), Qo = M({
    pubkey: ot,
    account: De
  }), ta = M({
    subscription: v(),
    result: sr(Qo)
  }), ea = M({
    parent: v(),
    slot: v(),
    root: v()
  }), ra = M({
    subscription: v(),
    result: ea
  }), na = Xt([
    M({
      type: Xt([
        st("firstShredReceived"),
        st("completed"),
        st("optimisticConfirmation"),
        st("root")
      ]),
      slot: v(),
      timestamp: v()
    }),
    M({
      type: st("createdBank"),
      parent: v(),
      slot: v(),
      timestamp: v()
    }),
    M({
      type: st("frozen"),
      slot: v(),
      timestamp: v(),
      stats: M({
        numTransactionEntries: v(),
        numSuccessfulTransactions: v(),
        numFailedTransactions: v(),
        maxTransactionsPerEntry: v()
      })
    }),
    M({
      type: st("dead"),
      slot: v(),
      timestamp: v(),
      err: B()
    })
  ]), sa = M({
    subscription: v(),
    result: na
  }), ia = M({
    subscription: v(),
    result: sr(Xt([
      Ao,
      Eo
    ]))
  }), oa = M({
    subscription: v(),
    result: v()
  }), aa = M({
    pubkey: B(),
    gossip: C(B()),
    tpu: C(B()),
    rpc: C(B()),
    version: C(B())
  }), Vn = M({
    votePubkey: B(),
    nodePubkey: B(),
    activatedStake: v(),
    epochVoteAccount: ue(),
    epochCredits: O(Hr([
      v(),
      v(),
      v()
    ])),
    commission: v(),
    lastVote: v(),
    rootSlot: C(v())
  }), ca = V(M({
    current: O(Vn),
    delinquent: O(Vn)
  })), ua = Xt([
    st("processed"),
    st("confirmed"),
    st("finalized")
  ]), la = M({
    slot: v(),
    confirmations: C(v()),
    err: _e,
    confirmationStatus: D(ua)
  }), ha = ct(O(C(la))), da = V(v()), vs = M({
    accountKey: ot,
    writableIndexes: O(v()),
    readonlyIndexes: O(v())
  }), Ss = M({
    computeUnitLimit: C(v()),
    heapSize: C(v()),
    loadedAccountsDataSizeLimit: C(v()),
    priorityFee: C(v())
  }), tn = M({
    signatures: O(B()),
    message: M({
      accountKeys: O(B()),
      header: M({
        numRequiredSignatures: v(),
        numReadonlySignedAccounts: v(),
        numReadonlyUnsignedAccounts: v()
      }),
      instructions: O(M({
        accounts: O(v()),
        data: B(),
        programIdIndex: v()
      })),
      recentBlockhash: B(),
      addressTableLookups: D(O(vs)),
      transactionConfig: D(C(Ss))
    })
  }), _s = M({
    pubkey: ot,
    signer: ue(),
    writable: ue(),
    source: D(Xt([
      st("transaction"),
      st("lookupTable")
    ]))
  }), Is = M({
    accountKeys: O(_s),
    signatures: O(B())
  }), As = M({
    parsed: ze(),
    program: B(),
    programId: ot
  }), Es = M({
    accounts: O(ot),
    data: B(),
    programId: ot
  }), fa = Xt([
    Es,
    As
  ]), pa = Xt([
    M({
      parsed: ze(),
      program: B(),
      programId: B()
    }),
    M({
      accounts: O(B()),
      data: B(),
      programId: B()
    })
  ]), xs = Fe(fa, pa, (u) => "accounts" in u ? N(u, Es) : N(u, As)), Rs = M({
    signatures: O(B()),
    message: M({
      accountKeys: O(_s),
      instructions: O(xs),
      recentBlockhash: B(),
      addressTableLookups: D(C(O(vs))),
      transactionConfig: D(C(Ss))
    })
  }), er = M({
    accountIndex: v(),
    mint: B(),
    owner: D(B()),
    programId: D(B()),
    uiTokenAmount: Ur
  }), Ms = M({
    writable: O(ot),
    readonly: O(ot)
  }), ir = M({
    err: _e,
    fee: v(),
    innerInstructions: D(C(O(M({
      index: v(),
      instructions: O(M({
        accounts: O(v()),
        data: B(),
        programIdIndex: v()
      }))
    })))),
    preBalances: O(v()),
    postBalances: O(v()),
    logMessages: D(C(O(B()))),
    preTokenBalances: D(C(O(er))),
    postTokenBalances: D(C(O(er))),
    loadedAddresses: D(Ms),
    computeUnitsConsumed: D(v()),
    costUnits: D(v())
  }), en = M({
    err: _e,
    fee: v(),
    innerInstructions: D(C(O(M({
      index: v(),
      instructions: O(xs)
    })))),
    preBalances: O(v()),
    postBalances: O(v()),
    logMessages: D(C(O(B()))),
    preTokenBalances: D(C(O(er))),
    postTokenBalances: D(C(O(er))),
    loadedAddresses: D(Ms),
    computeUnitsConsumed: D(v()),
    costUnits: D(v())
  }), Oe = Xt([
    st(0),
    st(1),
    st("legacy")
  ]), Ie = M({
    pubkey: B(),
    lamports: v(),
    postBalance: C(v()),
    rewardType: C(B()),
    commission: D(C(v()))
  }), ga = V(C(M({
    blockhash: B(),
    previousBlockhash: B(),
    parentSlot: v(),
    transactions: O(M({
      transaction: tn,
      meta: C(ir),
      version: D(Oe)
    })),
    rewards: D(O(Ie)),
    blockTime: C(v()),
    blockHeight: C(v())
  }))), ya = V(C(M({
    blockhash: B(),
    previousBlockhash: B(),
    parentSlot: v(),
    rewards: D(O(Ie)),
    blockTime: C(v()),
    blockHeight: C(v())
  }))), ma = V(C(M({
    blockhash: B(),
    previousBlockhash: B(),
    parentSlot: v(),
    transactions: O(M({
      transaction: Is,
      meta: C(ir),
      version: D(Oe)
    })),
    rewards: D(O(Ie)),
    blockTime: C(v()),
    blockHeight: C(v())
  }))), ba = V(C(M({
    blockhash: B(),
    previousBlockhash: B(),
    parentSlot: v(),
    transactions: O(M({
      transaction: Rs,
      meta: C(en),
      version: D(Oe)
    })),
    rewards: D(O(Ie)),
    blockTime: C(v()),
    blockHeight: C(v())
  }))), wa = V(C(M({
    blockhash: B(),
    previousBlockhash: B(),
    parentSlot: v(),
    transactions: O(M({
      transaction: Is,
      meta: C(en),
      version: D(Oe)
    })),
    rewards: D(O(Ie)),
    blockTime: C(v()),
    blockHeight: C(v())
  }))), ka = V(C(M({
    blockhash: B(),
    previousBlockhash: B(),
    parentSlot: v(),
    rewards: D(O(Ie)),
    blockTime: C(v()),
    blockHeight: C(v())
  }))), va = V(C(M({
    blockhash: B(),
    previousBlockhash: B(),
    parentSlot: v(),
    transactions: O(M({
      transaction: tn,
      meta: C(ir)
    })),
    rewards: D(O(Ie)),
    blockTime: C(v())
  }))), Hn = V(C(M({
    blockhash: B(),
    previousBlockhash: B(),
    parentSlot: v(),
    signatures: O(B()),
    blockTime: C(v())
  }))), Lr = V(C(M({
    slot: v(),
    meta: C(ir),
    blockTime: D(C(v())),
    transaction: tn,
    version: D(Oe)
  }))), je = V(C(M({
    slot: v(),
    transaction: Rs,
    meta: C(en),
    blockTime: D(C(v())),
    version: D(Oe)
  }))), Sa = ct(M({
    blockhash: B(),
    lastValidBlockHeight: v()
  })), _a = ct(ue()), Ia = M({
    slot: v(),
    numTransactions: v(),
    numSlots: v(),
    samplePeriodSecs: v()
  }), Aa = V(O(Ia)), Ea = ct(C(M({
    feeCalculator: M({
      lamportsPerSignature: v()
    })
  }))), xa = V(B()), Ra = V(B()), Ma = M({
    err: _e,
    logs: O(B()),
    signature: B()
  }), Pa = M({
    result: sr(Ma),
    subscription: v()
  }), Ta = {
    "solana-client": "js/1.99.0"
  };
  class Ps {
    constructor(t, e) {
      this._commitment = void 0, this._confirmTransactionInitialTimeout = void 0, this._rpcEndpoint = void 0, this._rpcWsEndpoint = void 0, this._rpcClient = void 0, this._rpcRequest = void 0, this._rpcBatchRequest = void 0, this._rpcWebSocket = void 0, this._rpcWebSocketConnected = false, this._rpcWebSocketHeartbeat = null, this._rpcWebSocketIdleTimeout = null, this._rpcWebSocketGeneration = 0, this._disableBlockhashCaching = false, this._pollingBlockhash = false, this._blockhashInfo = {
        latestBlockhash: null,
        lastFetch: 0,
        transactionSignatures: [],
        simulatedSignatures: []
      }, this._nextClientSubscriptionId = 0, this._subscriptionDisposeFunctionsByClientSubscriptionId = {}, this._subscriptionHashByClientSubscriptionId = {}, this._subscriptionStateChangeCallbacksByHash = {}, this._subscriptionCallbacksByServerSubscriptionId = {}, this._subscriptionsByHash = {}, this._subscriptionsAutoDisposedByRpc = /* @__PURE__ */ new Set(), this.getBlockHeight = /* @__PURE__ */ (() => {
        const S = {};
        return async (_) => {
          const { commitment: I, config: L } = rt(_), x = this._buildArgs([], I, void 0, L), P = Un(x);
          return S[P] = S[P] ?? (async () => {
            try {
              const T = await this._rpcRequest("getBlockHeight", x), E = N(T, V(v()));
              if ("error" in E) throw new q(E.error, "failed to get block height information");
              return E.result;
            } finally {
              delete S[P];
            }
          })(), await S[P];
        };
      })();
      let r, o, s, l, p, y;
      e && typeof e == "string" ? this._commitment = e : e && (this._commitment = e.commitment, this._confirmTransactionInitialTimeout = e.confirmTransactionInitialTimeout, r = e.wsEndpoint, o = e.httpHeaders, s = e.fetch, l = e.fetchMiddleware, p = e.disableRetryOnRateLimit, y = e.httpAgent), this._rpcEndpoint = yo(t), this._rpcWsEndpoint = r || go(t), this._rpcClient = To(t, o, s, l, p, y), this._rpcRequest = Bo(this._rpcClient), this._rpcBatchRequest = Lo(this._rpcClient), this._rpcWebSocket = new lo(this._rpcWsEndpoint, {
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
    async getBalanceAndContext(t, e) {
      const { commitment: r, config: o } = rt(e), s = this._buildArgs([
        t.toBase58()
      ], r, void 0, o), l = await this._rpcRequest("getBalance", s), p = N(l, ct(v()));
      if ("error" in p) throw new q(p.error, `failed to get balance for ${t.toBase58()}`);
      return p.result;
    }
    async getBalance(t, e) {
      return await this.getBalanceAndContext(t, e).then((r) => r.value).catch((r) => {
        throw new Error("failed to get balance of account " + t.toBase58() + ": " + r);
      });
    }
    async getBlockTime(t) {
      const e = await this._rpcRequest("getBlockTime", [
        t
      ]), r = N(e, V(C(v())));
      if ("error" in r) throw new q(r.error, `failed to get block time for slot ${t}`);
      return r.result;
    }
    async getMinimumLedgerSlot() {
      const t = await this._rpcRequest("minimumLedgerSlot", []), e = N(t, V(v()));
      if ("error" in e) throw new q(e.error, "failed to get minimum ledger slot");
      return e.result;
    }
    async getFirstAvailableBlock() {
      const t = await this._rpcRequest("getFirstAvailableBlock", []), e = N(t, Uo);
      if ("error" in e) throw new q(e.error, "failed to get first available block");
      return e.result;
    }
    async getSupply(t) {
      let e = {};
      typeof t == "string" ? e = {
        commitment: t
      } : t ? e = {
        ...t,
        commitment: t && t.commitment || this.commitment
      } : e = {
        commitment: this.commitment
      };
      const r = await this._rpcRequest("getSupply", [
        e
      ]), o = N(r, qo);
      if ("error" in o) throw new q(o.error, "failed to get supply");
      return o.result;
    }
    async getTokenSupply(t, e) {
      const r = this._buildArgs([
        t.toBase58()
      ], e), o = await this._rpcRequest("getTokenSupply", r), s = N(o, ct(Ur));
      if ("error" in s) throw new q(s.error, "failed to get token supply");
      return s.result;
    }
    async getTokenAccountBalance(t, e) {
      const r = this._buildArgs([
        t.toBase58()
      ], e), o = await this._rpcRequest("getTokenAccountBalance", r), s = N(o, ct(Ur));
      if ("error" in s) throw new q(s.error, "failed to get token account balance");
      return s.result;
    }
    async getTokenAccountsByOwner(t, e, r) {
      const { commitment: o, config: s } = rt(r);
      let l = [
        t.toBase58()
      ];
      "mint" in e ? l.push({
        mint: e.mint.toBase58()
      }) : l.push({
        programId: e.programId.toBase58()
      });
      const p = this._buildArgs(l, o, "base64", s), y = await this._rpcRequest("getTokenAccountsByOwner", p), S = N(y, Fo);
      if ("error" in S) throw new q(S.error, `failed to get token accounts owned by account ${t.toBase58()}`);
      return S.result;
    }
    async getParsedTokenAccountsByOwner(t, e, r) {
      let o = [
        t.toBase58()
      ];
      "mint" in e ? o.push({
        mint: e.mint.toBase58()
      }) : o.push({
        programId: e.programId.toBase58()
      });
      const s = this._buildArgs(o, r, "jsonParsed"), l = await this._rpcRequest("getTokenAccountsByOwner", s), p = N(l, Vo);
      if ("error" in p) throw new q(p.error, `failed to get token accounts owned by account ${t.toBase58()}`);
      return p.result;
    }
    async getLargestAccounts(t) {
      const e = {
        ...t,
        commitment: t && t.commitment || this.commitment
      }, r = e.filter || e.commitment ? [
        e
      ] : [], o = await this._rpcRequest("getLargestAccounts", r), s = N(o, Ho);
      if ("error" in s) throw new q(s.error, "failed to get largest accounts");
      return s.result;
    }
    async getTokenLargestAccounts(t, e) {
      const r = this._buildArgs([
        t.toBase58()
      ], e), o = await this._rpcRequest("getTokenLargestAccounts", r), s = N(o, Do);
      if ("error" in s) throw new q(s.error, "failed to get token largest accounts");
      return s.result;
    }
    async getAccountInfoAndContext(t, e) {
      const { commitment: r, config: o } = rt(e), s = this._buildArgs([
        t.toBase58()
      ], r, "base64", o), l = await this._rpcRequest("getAccountInfo", s), p = N(l, ct(C(De)));
      if ("error" in p) throw new q(p.error, `failed to get info about account ${t.toBase58()}`);
      return p.result;
    }
    async getParsedAccountInfo(t, e) {
      const { commitment: r, config: o } = rt(e), s = this._buildArgs([
        t.toBase58()
      ], r, "jsonParsed", o), l = await this._rpcRequest("getAccountInfo", s), p = N(l, ct(C(Dr)));
      if ("error" in p) throw new q(p.error, `failed to get info about account ${t.toBase58()}`);
      return p.result;
    }
    async getAccountInfo(t, e) {
      try {
        return (await this.getAccountInfoAndContext(t, e)).value;
      } catch (r) {
        throw new Error("failed to get info about account " + t.toBase58() + ": " + r);
      }
    }
    async getMultipleParsedAccounts(t, e) {
      const { commitment: r, config: o } = rt(e), s = t.map((S) => S.toBase58()), l = this._buildArgs([
        s
      ], r, "jsonParsed", o), p = await this._rpcRequest("getMultipleAccounts", l), y = N(p, ct(O(C(Dr))));
      if ("error" in y) throw new q(y.error, `failed to get info for accounts ${s}`);
      return y.result;
    }
    async getMultipleAccountsInfoAndContext(t, e) {
      const { commitment: r, config: o } = rt(e), s = t.map((S) => S.toBase58()), l = this._buildArgs([
        s
      ], r, "base64", o), p = await this._rpcRequest("getMultipleAccounts", l), y = N(p, ct(O(C(De))));
      if ("error" in y) throw new q(y.error, `failed to get info for accounts ${s}`);
      return y.result;
    }
    async getMultipleAccountsInfo(t, e) {
      return (await this.getMultipleAccountsInfoAndContext(t, e)).value;
    }
    async getStakeActivation(t, e, r) {
      const { commitment: o, config: s } = rt(e), l = this._buildArgs([
        t.toBase58()
      ], o, void 0, {
        ...s,
        epoch: r ?? (s == null ? void 0 : s.epoch)
      }), p = await this._rpcRequest("getStakeActivation", l), y = N(p, V(Jo));
      if ("error" in y) throw new q(y.error, `failed to get Stake Activation ${t.toBase58()}`);
      return y.result;
    }
    async getProgramAccounts(t, e) {
      const { commitment: r, config: o } = rt(e), { encoding: s, ...l } = o || {}, p = this._buildArgs([
        t.toBase58()
      ], r, s || "base64", {
        ...l,
        ...l.filters ? {
          filters: Dn(l.filters)
        } : null
      }), y = await this._rpcRequest("getProgramAccounts", p), S = O($o), _ = l.withContext === true ? N(y, ct(S)) : N(y, V(S));
      if ("error" in _) throw new q(_.error, `failed to get accounts owned by program ${t.toBase58()}`);
      return _.result;
    }
    async getParsedProgramAccounts(t, e) {
      const { commitment: r, config: o } = rt(e), s = this._buildArgs([
        t.toBase58()
      ], r, "jsonParsed", o), l = await this._rpcRequest("getProgramAccounts", s), p = N(l, V(O(jo)));
      if ("error" in p) throw new q(p.error, `failed to get accounts owned by program ${t.toBase58()}`);
      return p.result;
    }
    async confirmTransaction(t, e) {
      var _a3;
      let r;
      if (typeof t == "string") r = t;
      else {
        const s = t;
        if ((_a3 = s.abortSignal) == null ? void 0 : _a3.aborted) return Promise.reject(s.abortSignal.reason);
        r = s.signature;
      }
      let o;
      try {
        o = Gt.decode(r);
      } catch {
        throw new Error("signature must be base58 encoded: " + r);
      }
      return $(o.length === 64, "signature has invalid length"), typeof t == "string" ? await this.confirmTransactionUsingLegacyTimeoutStrategy({
        commitment: e || this.commitment,
        signature: r
      }) : "lastValidBlockHeight" in t ? await this.confirmTransactionUsingBlockHeightExceedanceStrategy({
        commitment: e || this.commitment,
        strategy: t
      }) : await this.confirmTransactionUsingDurableNonceStrategy({
        commitment: e || this.commitment,
        strategy: t
      });
    }
    getCancellationPromise(t) {
      return new Promise((e, r) => {
        t != null && (t.aborted ? r(t.reason) : t.addEventListener("abort", () => {
          r(t.reason);
        }));
      });
    }
    getTransactionConfirmationPromise({ commitment: t, signature: e }) {
      let r, o, s = false;
      const l = new Promise((y, S) => {
        try {
          r = this.onSignature(e, (I, L) => {
            r = void 0;
            const x = {
              context: L,
              value: I
            };
            y({
              __type: le.PROCESSED,
              response: x
            });
          }, t);
          const _ = new Promise((I) => {
            r == null ? I() : o = this._onSubscriptionStateChange(r, (L) => {
              L === "subscribed" && I();
            });
          });
          (async () => {
            if (await _, s) return;
            const I = await this.getSignatureStatus(e);
            if (s || I == null) return;
            const { context: L, value: x } = I;
            if (x != null) if (x == null ? void 0 : x.err) S(x.err);
            else {
              switch (t) {
                case "confirmed":
                case "single":
                case "singleGossip": {
                  if (x.confirmationStatus === "processed") return;
                  break;
                }
                case "finalized":
                case "max":
                case "root": {
                  if (x.confirmationStatus === "processed" || x.confirmationStatus === "confirmed") return;
                  break;
                }
                case "processed":
                case "recent":
              }
              s = true, y({
                __type: le.PROCESSED,
                response: {
                  context: L,
                  value: x
                }
              });
            }
          })();
        } catch (_) {
          S(_);
        }
      });
      return {
        abortConfirmation: () => {
          o && (o(), o = void 0), r != null && (this.removeSignatureListener(r), r = void 0);
        },
        confirmationPromise: l
      };
    }
    async confirmTransactionUsingBlockHeightExceedanceStrategy({ commitment: t, strategy: { abortSignal: e, lastValidBlockHeight: r, signature: o } }) {
      let s = false;
      const l = new Promise((I) => {
        const L = async () => {
          try {
            return await this.getBlockHeight(t);
          } catch {
            return -1;
          }
        };
        (async () => {
          let x = await L();
          if (!s) {
            for (; x <= r; ) if (await be(1e3), s || (x = await L(), s)) return;
            I({
              __type: le.BLOCKHEIGHT_EXCEEDED
            });
          }
        })();
      }), { abortConfirmation: p, confirmationPromise: y } = this.getTransactionConfirmationPromise({
        commitment: t,
        signature: o
      }), S = this.getCancellationPromise(e);
      let _;
      try {
        const I = await Promise.race([
          S,
          y,
          l
        ]);
        if (I.__type === le.PROCESSED) _ = I.response;
        else throw new Yr(o);
      } finally {
        s = true, p();
      }
      return _;
    }
    async confirmTransactionUsingDurableNonceStrategy({ commitment: t, strategy: { abortSignal: e, minContextSlot: r, nonceAccountPubkey: o, nonceValue: s, signature: l } }) {
      let p = false;
      const y = new Promise((x) => {
        let P = s, T = null;
        const E = async () => {
          try {
            const { context: U, value: J } = await this.getNonceAndContext(o, {
              commitment: t,
              minContextSlot: r
            });
            return T = U.slot, J == null ? void 0 : J.nonce;
          } catch {
            return P;
          }
        };
        (async () => {
          if (P = await E(), !p) for (; ; ) {
            if (s !== P) {
              x({
                __type: le.NONCE_INVALID,
                slotInWhichNonceDidAdvance: T
              });
              return;
            }
            if (await be(2e3), p || (P = await E(), p)) return;
          }
        })();
      }), { abortConfirmation: S, confirmationPromise: _ } = this.getTransactionConfirmationPromise({
        commitment: t,
        signature: l
      }), I = this.getCancellationPromise(e);
      let L;
      try {
        const x = await Promise.race([
          I,
          _,
          y
        ]);
        if (x.__type === le.PROCESSED) L = x.response;
        else {
          let P;
          for (; ; ) {
            const T = await this.getSignatureStatus(l);
            if (T == null) break;
            if (T.context.slot < (x.slotInWhichNonceDidAdvance ?? r)) {
              await be(400);
              continue;
            }
            P = T;
            break;
          }
          if (P == null ? void 0 : P.value) {
            const T = t || "finalized", { confirmationStatus: E } = P.value;
            switch (T) {
              case "processed":
              case "recent":
                if (E !== "processed" && E !== "confirmed" && E !== "finalized") throw new Re(l);
                break;
              case "confirmed":
              case "single":
              case "singleGossip":
                if (E !== "confirmed" && E !== "finalized") throw new Re(l);
                break;
              case "finalized":
              case "max":
              case "root":
                if (E !== "finalized") throw new Re(l);
                break;
              default:
            }
            L = {
              context: P.context,
              value: {
                err: P.value.err
              }
            };
          } else throw new Re(l);
        }
      } finally {
        p = true, S();
      }
      return L;
    }
    async confirmTransactionUsingLegacyTimeoutStrategy({ commitment: t, signature: e }) {
      let r;
      const o = new Promise((y) => {
        let S = this._confirmTransactionInitialTimeout || 6e4;
        switch (t) {
          case "processed":
          case "recent":
          case "single":
          case "confirmed":
          case "singleGossip": {
            S = this._confirmTransactionInitialTimeout || 3e4;
            break;
          }
        }
        r = setTimeout(() => y({
          __type: le.TIMED_OUT,
          timeoutMs: S
        }), S);
      }), { abortConfirmation: s, confirmationPromise: l } = this.getTransactionConfirmationPromise({
        commitment: t,
        signature: e
      });
      let p;
      try {
        const y = await Promise.race([
          l,
          o
        ]);
        if (y.__type === le.PROCESSED) p = y.response;
        else throw new Zr(e, y.timeoutMs / 1e3);
      } finally {
        clearTimeout(r), s();
      }
      return p;
    }
    async getClusterNodes() {
      const t = await this._rpcRequest("getClusterNodes", []), e = N(t, V(O(aa)));
      if ("error" in e) throw new q(e.error, "failed to get cluster nodes");
      return e.result;
    }
    async getVoteAccounts(t) {
      const e = this._buildArgs([], t), r = await this._rpcRequest("getVoteAccounts", e), o = N(r, ca);
      if ("error" in o) throw new q(o.error, "failed to get vote accounts");
      return o.result;
    }
    async getSlot(t) {
      const { commitment: e, config: r } = rt(t), o = this._buildArgs([], e, void 0, r), s = await this._rpcRequest("getSlot", o), l = N(s, V(v()));
      if ("error" in l) throw new q(l.error, "failed to get slot");
      return l.result;
    }
    async getSlotLeader(t) {
      const { commitment: e, config: r } = rt(t), o = this._buildArgs([], e, void 0, r), s = await this._rpcRequest("getSlotLeader", o), l = N(s, V(B()));
      if ("error" in l) throw new q(l.error, "failed to get slot leader");
      return l.result;
    }
    async getSlotLeaders(t, e) {
      const r = [
        t,
        e
      ], o = await this._rpcRequest("getSlotLeaders", r), s = N(o, V(O(ot)));
      if ("error" in s) throw new q(s.error, "failed to get slot leaders");
      return s.result;
    }
    async getSignatureStatus(t, e) {
      const { context: r, value: o } = await this.getSignatureStatuses([
        t
      ], e);
      $(o.length === 1);
      const s = o[0];
      return {
        context: r,
        value: s
      };
    }
    async getSignatureStatuses(t, e) {
      const r = [
        t
      ];
      e && r.push(e);
      const o = await this._rpcRequest("getSignatureStatuses", r), s = N(o, ha);
      if ("error" in s) throw new q(s.error, "failed to get signature status");
      return s.result;
    }
    async getTransactionCount(t) {
      const { commitment: e, config: r } = rt(t), o = this._buildArgs([], e, void 0, r), s = await this._rpcRequest("getTransactionCount", o), l = N(s, V(v()));
      if ("error" in l) throw new q(l.error, "failed to get transaction count");
      return l.result;
    }
    async getTotalSupply(t) {
      return (await this.getSupply({
        commitment: t,
        excludeNonCirculatingAccountsList: true
      })).value.total;
    }
    async getInflationGovernor(t) {
      const e = this._buildArgs([], t), r = await this._rpcRequest("getInflationGovernor", e), o = N(r, Co);
      if ("error" in o) throw new q(o.error, "failed to get inflation");
      return o.result;
    }
    async getInflationReward(t, e, r) {
      const { commitment: o, config: s } = rt(r), l = this._buildArgs([
        t.map((S) => S.toBase58())
      ], o, void 0, {
        ...s,
        epoch: e ?? (s == null ? void 0 : s.epoch)
      }), p = await this._rpcRequest("getInflationReward", l), y = N(p, wo);
      if ("error" in y) throw new q(y.error, "failed to get inflation reward");
      return y.result;
    }
    async getInflationRate() {
      const t = await this._rpcRequest("getInflationRate", []), e = N(t, No);
      if ("error" in e) throw new q(e.error, "failed to get inflation rate");
      return e.result;
    }
    async getEpochInfo(t) {
      const { commitment: e, config: r } = rt(t), o = this._buildArgs([], e, void 0, r), s = await this._rpcRequest("getEpochInfo", o), l = N(s, Oo);
      if ("error" in l) throw new q(l.error, "failed to get epoch info");
      return l.result;
    }
    async getEpochSchedule() {
      const t = await this._rpcRequest("getEpochSchedule", []), e = N(t, Ko);
      if ("error" in e) throw new q(e.error, "failed to get epoch schedule");
      const r = e.result;
      return new ms(r.slotsPerEpoch, r.leaderScheduleSlotOffset, r.warmup, r.firstNormalEpoch, r.firstNormalSlot);
    }
    async getLeaderSchedule() {
      const t = await this._rpcRequest("getLeaderSchedule", []), e = N(t, Wo);
      if ("error" in e) throw new q(e.error, "failed to get leader schedule");
      return e.result;
    }
    async getMinimumBalanceForRentExemption(t, e) {
      const r = this._buildArgs([
        t
      ], e), o = await this._rpcRequest("getMinimumBalanceForRentExemption", r), s = N(o, da);
      return "error" in s ? (console.warn("Unable to fetch minimum balance for rent exemption"), 0) : s.result;
    }
    async getRecentBlockhashAndContext(t) {
      const { context: e, value: { blockhash: r } } = await this.getLatestBlockhashAndContext(t);
      return {
        context: e,
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
    async getRecentPerformanceSamples(t) {
      const e = await this._rpcRequest("getRecentPerformanceSamples", t ? [
        t
      ] : []), r = N(e, Aa);
      if ("error" in r) throw new q(r.error, "failed to get recent performance samples");
      return r.result;
    }
    async getFeeCalculatorForBlockhash(t, e) {
      const r = this._buildArgs([
        t
      ], e), o = await this._rpcRequest("getFeeCalculatorForBlockhash", r), s = N(o, Ea);
      if ("error" in s) throw new q(s.error, "failed to get fee calculator");
      const { context: l, value: p } = s.result;
      return {
        context: l,
        value: p !== null ? p.feeCalculator : null
      };
    }
    async getFeeForMessage(t, e) {
      const r = H(t.serialize()).toString("base64"), o = this._buildArgs([
        r
      ], e), s = await this._rpcRequest("getFeeForMessage", o), l = N(s, ct(C(v())));
      if ("error" in l) throw new q(l.error, "failed to get fee for message");
      if (l.result === null) throw new Error("invalid blockhash");
      return l.result;
    }
    async getRecentPrioritizationFees(t) {
      var _a3;
      const e = (_a3 = t == null ? void 0 : t.lockedWritableAccounts) == null ? void 0 : _a3.map((l) => l.toBase58()), r = (e == null ? void 0 : e.length) ? [
        e
      ] : [], o = await this._rpcRequest("getRecentPrioritizationFees", r), s = N(o, zo);
      if ("error" in s) throw new q(s.error, "failed to get recent prioritization fees");
      return s.result;
    }
    async getRecentBlockhash(t) {
      try {
        return (await this.getRecentBlockhashAndContext(t)).value;
      } catch (e) {
        throw new Error("failed to get recent blockhash: " + e);
      }
    }
    async getLatestBlockhash(t) {
      try {
        return (await this.getLatestBlockhashAndContext(t)).value;
      } catch (e) {
        throw new Error("failed to get recent blockhash: " + e);
      }
    }
    async getLatestBlockhashAndContext(t) {
      const { commitment: e, config: r } = rt(t), o = this._buildArgs([], e, void 0, r), s = await this._rpcRequest("getLatestBlockhash", o), l = N(s, Sa);
      if ("error" in l) throw new q(l.error, "failed to get latest blockhash");
      return l.result;
    }
    async isBlockhashValid(t, e) {
      const { commitment: r, config: o } = rt(e), s = this._buildArgs([
        t
      ], r, void 0, o), l = await this._rpcRequest("isBlockhashValid", s), p = N(l, _a);
      if ("error" in p) throw new q(p.error, "failed to determine if the blockhash `" + t + "`is valid");
      return p.result;
    }
    async getVersion() {
      const t = await this._rpcRequest("getVersion", []), e = N(t, V(xo));
      if ("error" in e) throw new q(e.error, "failed to get version");
      return e.result;
    }
    async getGenesisHash() {
      const t = await this._rpcRequest("getGenesisHash", []), e = N(t, V(B()));
      if ("error" in e) throw new q(e.error, "failed to get genesis hash");
      return e.result;
    }
    async getBlock(t, e) {
      const { commitment: r, config: o } = rt(e), s = this._buildArgsAtLeastConfirmed([
        t
      ], r, void 0, o), l = await this._rpcRequest("getBlock", s);
      try {
        switch (o == null ? void 0 : o.transactionDetails) {
          case "accounts": {
            const p = N(l, ma);
            if ("error" in p) throw p.error;
            return p.result;
          }
          case "none": {
            const p = N(l, ya);
            if ("error" in p) throw p.error;
            return p.result;
          }
          default: {
            const p = N(l, ga);
            if ("error" in p) throw p.error;
            const { result: y } = p;
            return y ? {
              ...y,
              transactions: y.transactions.map(({ transaction: S, meta: _, version: I }) => ({
                meta: _,
                transaction: {
                  ...S,
                  message: Br(I, S.message)
                },
                version: I
              }))
            } : null;
          }
        }
      } catch (p) {
        throw new q(p, "failed to get confirmed block");
      }
    }
    async getParsedBlock(t, e) {
      const { commitment: r, config: o } = rt(e), s = this._buildArgsAtLeastConfirmed([
        t
      ], r, "jsonParsed", o), l = await this._rpcRequest("getBlock", s);
      try {
        switch (o == null ? void 0 : o.transactionDetails) {
          case "accounts": {
            const p = N(l, wa);
            if ("error" in p) throw p.error;
            return p.result;
          }
          case "none": {
            const p = N(l, ka);
            if ("error" in p) throw p.error;
            return p.result;
          }
          default: {
            const p = N(l, ba);
            if ("error" in p) throw p.error;
            return p.result;
          }
        }
      } catch (p) {
        throw new q(p, "failed to get block");
      }
    }
    async getBlockProduction(t) {
      let e, r;
      if (typeof t == "string") r = t;
      else if (t) {
        const { commitment: p, ...y } = t;
        r = p, e = y;
      }
      const o = this._buildArgs([], r, "base64", e), s = await this._rpcRequest("getBlockProduction", o), l = N(s, Po);
      if ("error" in l) throw new q(l.error, "failed to get block production information");
      return l.result;
    }
    async getTransaction(t, e) {
      const { commitment: r, config: o } = rt(e), s = this._buildArgsAtLeastConfirmed([
        t
      ], r, void 0, o), l = await this._rpcRequest("getTransaction", s), p = N(l, Lr);
      if ("error" in p) throw new q(p.error, "failed to get transaction");
      const y = p.result;
      return y && {
        ...y,
        transaction: {
          ...y.transaction,
          message: Br(y.version, y.transaction.message)
        }
      };
    }
    async getParsedTransaction(t, e) {
      const { commitment: r, config: o } = rt(e), s = this._buildArgsAtLeastConfirmed([
        t
      ], r, "jsonParsed", o), l = await this._rpcRequest("getTransaction", s), p = N(l, je);
      if ("error" in p) throw new q(p.error, "failed to get transaction");
      return p.result;
    }
    async getParsedTransactions(t, e) {
      const { commitment: r, config: o } = rt(e), s = t.map((y) => ({
        methodName: "getTransaction",
        args: this._buildArgsAtLeastConfirmed([
          y
        ], r, "jsonParsed", o)
      }));
      return (await this._rpcBatchRequest(s)).map((y) => {
        const S = N(y, je);
        if ("error" in S) throw new q(S.error, "failed to get transactions");
        return S.result;
      });
    }
    async getTransactions(t, e) {
      const { commitment: r, config: o } = rt(e), s = t.map((y) => ({
        methodName: "getTransaction",
        args: this._buildArgsAtLeastConfirmed([
          y
        ], r, void 0, o)
      }));
      return (await this._rpcBatchRequest(s)).map((y) => {
        const S = N(y, Lr);
        if ("error" in S) throw new q(S.error, "failed to get transactions");
        const _ = S.result;
        return _ && {
          ..._,
          transaction: {
            ..._.transaction,
            message: Br(_.version, _.transaction.message)
          }
        };
      });
    }
    async getConfirmedBlock(t, e) {
      const r = this._buildArgsAtLeastConfirmed([
        t
      ], e), o = await this._rpcRequest("getBlock", r), s = N(o, va);
      if ("error" in s) throw new q(s.error, "failed to get confirmed block");
      const l = s.result;
      if (!l) throw new Error("Confirmed block " + t + " not found");
      const p = {
        ...l,
        transactions: l.transactions.map(({ transaction: y, meta: S }) => {
          const _ = new ie(y.message);
          return {
            meta: S,
            transaction: {
              ...y,
              message: _
            }
          };
        })
      };
      return {
        ...p,
        transactions: p.transactions.map(({ transaction: y, meta: S }) => ({
          meta: S,
          transaction: Z.populate(y.message, y.signatures)
        }))
      };
    }
    async getBlocks(t, e, r) {
      const o = this._buildArgsAtLeastConfirmed(e !== void 0 ? [
        t,
        e
      ] : [
        t
      ], r), s = await this._rpcRequest("getBlocks", o), l = N(s, V(O(v())));
      if ("error" in l) throw new q(l.error, "failed to get blocks");
      return l.result;
    }
    async getBlockSignatures(t, e) {
      const r = this._buildArgsAtLeastConfirmed([
        t
      ], e, void 0, {
        transactionDetails: "signatures",
        rewards: false
      }), o = await this._rpcRequest("getBlock", r), s = N(o, Hn);
      if ("error" in s) throw new q(s.error, "failed to get block");
      const l = s.result;
      if (!l) throw new Error("Block " + t + " not found");
      return l;
    }
    async getConfirmedBlockSignatures(t, e) {
      const r = this._buildArgsAtLeastConfirmed([
        t
      ], e, void 0, {
        transactionDetails: "signatures",
        rewards: false
      }), o = await this._rpcRequest("getBlock", r), s = N(o, Hn);
      if ("error" in s) throw new q(s.error, "failed to get confirmed block");
      const l = s.result;
      if (!l) throw new Error("Confirmed block " + t + " not found");
      return l;
    }
    async getConfirmedTransaction(t, e) {
      const r = this._buildArgsAtLeastConfirmed([
        t
      ], e), o = await this._rpcRequest("getTransaction", r), s = N(o, Lr);
      if ("error" in s) throw new q(s.error, "failed to get transaction");
      const l = s.result;
      if (!l) return l;
      const p = new ie(l.transaction.message), y = l.transaction.signatures;
      return {
        ...l,
        transaction: Z.populate(p, y)
      };
    }
    async getParsedConfirmedTransaction(t, e) {
      const r = this._buildArgsAtLeastConfirmed([
        t
      ], e, "jsonParsed"), o = await this._rpcRequest("getTransaction", r), s = N(o, je);
      if ("error" in s) throw new q(s.error, "failed to get confirmed transaction");
      return s.result;
    }
    async getParsedConfirmedTransactions(t, e) {
      const r = t.map((l) => ({
        methodName: "getTransaction",
        args: this._buildArgsAtLeastConfirmed([
          l
        ], e, "jsonParsed")
      }));
      return (await this._rpcBatchRequest(r)).map((l) => {
        const p = N(l, je);
        if ("error" in p) throw new q(p.error, "failed to get confirmed transactions");
        return p.result;
      });
    }
    async getConfirmedSignaturesForAddress(t, e, r) {
      let o = {}, s = await this.getFirstAvailableBlock();
      for (; !("until" in o) && (e--, !(e <= 0 || e < s)); ) try {
        const y = await this.getConfirmedBlockSignatures(e, "finalized");
        y.signatures.length > 0 && (o.until = y.signatures[y.signatures.length - 1].toString());
      } catch (y) {
        if (y instanceof Error && y.message.includes("skipped")) continue;
        throw y;
      }
      let l = await this.getSlot("finalized");
      for (; !("before" in o) && (r++, !(r > l)); ) try {
        const y = await this.getConfirmedBlockSignatures(r);
        y.signatures.length > 0 && (o.before = y.signatures[y.signatures.length - 1].toString());
      } catch (y) {
        if (y instanceof Error && y.message.includes("skipped")) continue;
        throw y;
      }
      return (await this.getConfirmedSignaturesForAddress2(t, o)).map((y) => y.signature);
    }
    async getConfirmedSignaturesForAddress2(t, e, r) {
      const o = this._buildArgsAtLeastConfirmed([
        t.toBase58()
      ], r, void 0, e), s = await this._rpcRequest("getConfirmedSignaturesForAddress2", o), l = N(s, Yo);
      if ("error" in l) throw new q(l.error, "failed to get confirmed signatures for address");
      return l.result;
    }
    async getSignaturesForAddress(t, e, r) {
      const o = this._buildArgsAtLeastConfirmed([
        t.toBase58()
      ], r, void 0, e), s = await this._rpcRequest("getSignaturesForAddress", o), l = N(s, Zo);
      if ("error" in l) throw new q(l.error, "failed to get signatures for address");
      return l.result;
    }
    async getAddressLookupTable(t, e) {
      const { context: r, value: o } = await this.getAccountInfoAndContext(t, e);
      let s = null;
      return o !== null && (s = new Wr({
        key: t,
        state: Wr.deserialize(o.data)
      })), {
        context: r,
        value: s
      };
    }
    async getNonceAndContext(t, e) {
      const { context: r, value: o } = await this.getAccountInfoAndContext(t, e);
      let s = null;
      return o !== null && (s = nr.fromAccountData(o.data)), {
        context: r,
        value: s
      };
    }
    async getNonce(t, e) {
      return await this.getNonceAndContext(t, e).then((r) => r.value).catch((r) => {
        throw new Error("failed to get nonce for account " + t.toBase58() + ": " + r);
      });
    }
    async requestAirdrop(t, e) {
      const r = await this._rpcRequest("requestAirdrop", [
        t.toBase58(),
        e
      ]), o = N(r, xa);
      if ("error" in o) throw new q(o.error, `airdrop to ${t.toBase58()} failed`);
      return o.result;
    }
    async _blockhashWithExpiryBlockHeight(t) {
      if (!t) {
        for (; this._pollingBlockhash; ) await be(100);
        const r = Date.now() - this._blockhashInfo.lastFetch >= ws;
        if (this._blockhashInfo.latestBlockhash !== null && !r) return this._blockhashInfo.latestBlockhash;
      }
      return await this._pollNewBlockhash();
    }
    async _pollNewBlockhash() {
      this._pollingBlockhash = true;
      try {
        const t = Date.now(), e = this._blockhashInfo.latestBlockhash, r = e ? e.blockhash : null;
        for (let o = 0; o < 50; o++) {
          const s = await this.getLatestBlockhash("finalized");
          if (r !== s.blockhash) return this._blockhashInfo = {
            latestBlockhash: s,
            lastFetch: Date.now(),
            transactionSignatures: [],
            simulatedSignatures: []
          }, s;
          await be(ps / 2);
        }
        throw new Error(`Unable to obtain a new blockhash after ${Date.now() - t}ms`);
      } finally {
        this._pollingBlockhash = false;
      }
    }
    async getStakeMinimumDelegation(t) {
      const { commitment: e, config: r } = rt(t), o = this._buildArgs([], e, "base64", r), s = await this._rpcRequest("getStakeMinimumDelegation", o), l = N(s, ct(v()));
      if ("error" in l) throw new q(l.error, "failed to get stake minimum delegation");
      return l.result;
    }
    async simulateTransaction(t, e, r) {
      if ("message" in t) {
        const T = t.serialize(), E = F.from(T).toString("base64");
        if (Array.isArray(e) || r !== void 0) throw new Error("Invalid arguments");
        const U = e || {};
        U.encoding = "base64", "commitment" in U || (U.commitment = this.commitment), e && typeof e == "object" && "innerInstructions" in e && (U.innerInstructions = e.innerInstructions);
        const J = [
          E,
          U
        ], j = await this._rpcRequest("simulateTransaction", J), Yt = N(j, Fn);
        if ("error" in Yt) throw new Error("failed to simulate transaction: " + Yt.error.message);
        return Yt.result;
      }
      let o;
      if (t instanceof Z) {
        let P = t;
        o = new Z(), o.feePayer = P.feePayer, o.instructions = t.instructions, o.nonceInfo = P.nonceInfo, o.signatures = P.signatures;
      } else o = Z.populate(t), o._message = o._json = void 0;
      if (e !== void 0 && !Array.isArray(e)) throw new Error("Invalid arguments");
      const s = e;
      if (o.nonceInfo && s) o.sign(...s);
      else {
        let P = this._disableBlockhashCaching;
        for (; ; ) {
          const T = await this._blockhashWithExpiryBlockHeight(P);
          if (o.lastValidBlockHeight = T.lastValidBlockHeight, o.recentBlockhash = T.blockhash, !s) break;
          if (o.sign(...s), !o.signature) throw new Error("!signature");
          const E = o.signature.toString("base64");
          if (!this._blockhashInfo.simulatedSignatures.includes(E) && !this._blockhashInfo.transactionSignatures.includes(E)) {
            this._blockhashInfo.simulatedSignatures.push(E);
            break;
          } else P = true;
        }
      }
      const l = o._compile(), p = l.serialize(), S = o._serialize(p).toString("base64"), _ = {
        encoding: "base64",
        commitment: this.commitment
      };
      if (r) {
        const P = (Array.isArray(r) ? r : l.nonProgramIds()).map((T) => T.toBase58());
        _.accounts = {
          encoding: "base64",
          addresses: P
        };
      }
      s && (_.sigVerify = true), e && typeof e == "object" && "innerInstructions" in e && (_.innerInstructions = e.innerInstructions);
      const I = [
        S,
        _
      ], L = await this._rpcRequest("simulateTransaction", I), x = N(L, Fn);
      if ("error" in x) {
        let P;
        if ("data" in x.error && (P = x.error.data.logs, P && Array.isArray(P))) {
          const T = `
    `, E = T + P.join(T);
          console.error(x.error.message, E);
        }
        throw new qe({
          action: "simulate",
          signature: "",
          transactionMessage: x.error.message,
          logs: P
        });
      }
      return x.result;
    }
    async sendTransaction(t, e, r) {
      if ("version" in t) {
        if (e && Array.isArray(e)) throw new Error("Invalid arguments");
        const l = t.serialize();
        return await this.sendRawTransaction(l, e);
      }
      if (e === void 0 || !Array.isArray(e)) throw new Error("Invalid arguments");
      const o = e;
      if (t.nonceInfo) t.sign(...o);
      else {
        let l = this._disableBlockhashCaching;
        for (; ; ) {
          const p = await this._blockhashWithExpiryBlockHeight(l);
          if (t.lastValidBlockHeight = p.lastValidBlockHeight, t.recentBlockhash = p.blockhash, t.sign(...o), !t.signature) throw new Error("!signature");
          const y = t.signature.toString("base64");
          if (this._blockhashInfo.transactionSignatures.includes(y)) l = true;
          else {
            this._blockhashInfo.transactionSignatures.push(y);
            break;
          }
        }
      }
      const s = t.serialize();
      return await this.sendRawTransaction(s, r);
    }
    async sendRawTransaction(t, e) {
      const r = H(t).toString("base64");
      return await this.sendEncodedTransaction(r, e);
    }
    async sendEncodedTransaction(t, e) {
      const r = {
        encoding: "base64"
      }, o = e && e.skipPreflight, s = o === true ? "processed" : e && e.preflightCommitment || this.commitment;
      e && e.maxRetries != null && (r.maxRetries = e.maxRetries), e && e.minContextSlot != null && (r.minContextSlot = e.minContextSlot), o && (r.skipPreflight = o), s && (r.preflightCommitment = s);
      const l = [
        t,
        r
      ], p = await this._rpcRequest("sendTransaction", l), y = N(p, Ra);
      if ("error" in y) {
        let S;
        throw "data" in y.error && (S = y.error.data.logs), new qe({
          action: o ? "send" : "simulate",
          signature: "",
          transactionMessage: y.error.message,
          logs: S
        });
      }
      return y.result;
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
    _wsOnError(t) {
      this._rpcWebSocketConnected = false, console.error("ws error:", t.message);
    }
    _wsOnClose(t) {
      if (this._rpcWebSocketConnected = false, this._rpcWebSocketGeneration = (this._rpcWebSocketGeneration + 1) % Number.MAX_SAFE_INTEGER, this._rpcWebSocketIdleTimeout && (clearTimeout(this._rpcWebSocketIdleTimeout), this._rpcWebSocketIdleTimeout = null), this._rpcWebSocketHeartbeat && (clearInterval(this._rpcWebSocketHeartbeat), this._rpcWebSocketHeartbeat = null), t === 1e3) {
        this._updateSubscriptions();
        return;
      }
      this._subscriptionCallbacksByServerSubscriptionId = {}, Object.entries(this._subscriptionsByHash).forEach(([e, r]) => {
        this._setSubscription(e, {
          ...r,
          state: "pending"
        });
      });
    }
    _setSubscription(t, e) {
      var _a3;
      const r = (_a3 = this._subscriptionsByHash[t]) == null ? void 0 : _a3.state;
      if (this._subscriptionsByHash[t] = e, r !== e.state) {
        const o = this._subscriptionStateChangeCallbacksByHash[t];
        o && o.forEach((s) => {
          try {
            s(e.state);
          } catch {
          }
        });
      }
    }
    _onSubscriptionStateChange(t, e) {
      var _a3;
      const r = this._subscriptionHashByClientSubscriptionId[t];
      if (r == null) return () => {
      };
      const o = (_a3 = this._subscriptionStateChangeCallbacksByHash)[r] || (_a3[r] = /* @__PURE__ */ new Set());
      return o.add(e), () => {
        o.delete(e), o.size === 0 && delete this._subscriptionStateChangeCallbacksByHash[r];
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
      const t = this._rpcWebSocketGeneration, e = () => t === this._rpcWebSocketGeneration;
      await Promise.all(Object.keys(this._subscriptionsByHash).map(async (r) => {
        const o = this._subscriptionsByHash[r];
        if (o !== void 0) switch (o.state) {
          case "pending":
          case "unsubscribed":
            if (o.callbacks.size === 0) {
              delete this._subscriptionsByHash[r], o.state === "unsubscribed" && delete this._subscriptionCallbacksByServerSubscriptionId[o.serverSubscriptionId], await this._updateSubscriptions();
              return;
            }
            await (async () => {
              const { args: s, method: l } = o;
              try {
                this._setSubscription(r, {
                  ...o,
                  state: "subscribing"
                });
                const p = await this._rpcWebSocket.call(l, s);
                this._setSubscription(r, {
                  ...o,
                  serverSubscriptionId: p,
                  state: "subscribed"
                }), this._subscriptionCallbacksByServerSubscriptionId[p] = o.callbacks, await this._updateSubscriptions();
              } catch (p) {
                if (console.error(`Received ${p instanceof Error ? "" : "JSON-RPC "}error calling \`${l}\``, {
                  args: s,
                  error: p
                }), !e()) return;
                this._setSubscription(r, {
                  ...o,
                  state: "pending"
                }), await this._updateSubscriptions();
              }
            })();
            break;
          case "subscribed":
            o.callbacks.size === 0 && await (async () => {
              const { serverSubscriptionId: s, unsubscribeMethod: l } = o;
              if (this._subscriptionsAutoDisposedByRpc.has(s)) this._subscriptionsAutoDisposedByRpc.delete(s);
              else {
                this._setSubscription(r, {
                  ...o,
                  state: "unsubscribing"
                }), this._setSubscription(r, {
                  ...o,
                  state: "unsubscribing"
                });
                try {
                  await this._rpcWebSocket.call(l, [
                    s
                  ]);
                } catch (p) {
                  if (p instanceof Error && console.error(`${l} error:`, p.message), !e()) return;
                  this._setSubscription(r, {
                    ...o,
                    state: "subscribed"
                  }), await this._updateSubscriptions();
                  return;
                }
              }
              this._setSubscription(r, {
                ...o,
                state: "unsubscribed"
              }), await this._updateSubscriptions();
            })();
            break;
        }
      }));
    }
    _handleServerNotification(t, e) {
      const r = this._subscriptionCallbacksByServerSubscriptionId[t];
      r !== void 0 && r.forEach((o) => {
        try {
          o(...e);
        } catch (s) {
          console.error(s);
        }
      });
    }
    _wsOnAccountNotification(t) {
      const { result: e, subscription: r } = N(t, Xo);
      this._handleServerNotification(r, [
        e.value,
        e.context
      ]);
    }
    _makeSubscription(t, e) {
      const r = this._nextClientSubscriptionId++, o = Un([
        t.method,
        e
      ]), s = this._subscriptionsByHash[o];
      return s === void 0 ? this._subscriptionsByHash[o] = {
        ...t,
        args: e,
        callbacks: /* @__PURE__ */ new Set([
          t.callback
        ]),
        state: "pending"
      } : s.callbacks.add(t.callback), this._subscriptionHashByClientSubscriptionId[r] = o, this._subscriptionDisposeFunctionsByClientSubscriptionId[r] = async () => {
        delete this._subscriptionDisposeFunctionsByClientSubscriptionId[r], delete this._subscriptionHashByClientSubscriptionId[r];
        const l = this._subscriptionsByHash[o];
        $(l !== void 0, `Could not find a \`Subscription\` when tearing down client subscription #${r}`), l.callbacks.delete(t.callback), await this._updateSubscriptions();
      }, this._updateSubscriptions(), r;
    }
    onAccountChange(t, e, r) {
      const { commitment: o, config: s } = rt(r), l = this._buildArgs([
        t.toBase58()
      ], o || this._commitment || "finalized", "base64", s);
      return this._makeSubscription({
        callback: e,
        method: "accountSubscribe",
        unsubscribeMethod: "accountUnsubscribe"
      }, l);
    }
    async removeAccountChangeListener(t) {
      await this._unsubscribeClientSubscription(t, "account change");
    }
    _wsOnProgramAccountNotification(t) {
      const { result: e, subscription: r } = N(t, ta);
      this._handleServerNotification(r, [
        {
          accountId: e.value.pubkey,
          accountInfo: e.value.account
        },
        e.context
      ]);
    }
    onProgramAccountChange(t, e, r, o) {
      const { commitment: s, config: l } = rt(r), p = this._buildArgs([
        t.toBase58()
      ], s || this._commitment || "finalized", "base64", l || (o ? {
        filters: Dn(o)
      } : void 0));
      return this._makeSubscription({
        callback: e,
        method: "programSubscribe",
        unsubscribeMethod: "programUnsubscribe"
      }, p);
    }
    async removeProgramAccountChangeListener(t) {
      await this._unsubscribeClientSubscription(t, "program account change");
    }
    onLogs(t, e, r) {
      const o = this._buildArgs([
        typeof t == "object" ? {
          mentions: [
            t.toString()
          ]
        } : t
      ], r || this._commitment || "finalized");
      return this._makeSubscription({
        callback: e,
        method: "logsSubscribe",
        unsubscribeMethod: "logsUnsubscribe"
      }, o);
    }
    async removeOnLogsListener(t) {
      await this._unsubscribeClientSubscription(t, "logs");
    }
    _wsOnLogsNotification(t) {
      const { result: e, subscription: r } = N(t, Pa);
      this._handleServerNotification(r, [
        e.value,
        e.context
      ]);
    }
    _wsOnSlotNotification(t) {
      const { result: e, subscription: r } = N(t, ra);
      this._handleServerNotification(r, [
        e
      ]);
    }
    onSlotChange(t) {
      return this._makeSubscription({
        callback: t,
        method: "slotSubscribe",
        unsubscribeMethod: "slotUnsubscribe"
      }, []);
    }
    async removeSlotChangeListener(t) {
      await this._unsubscribeClientSubscription(t, "slot change");
    }
    _wsOnSlotUpdatesNotification(t) {
      const { result: e, subscription: r } = N(t, sa);
      this._handleServerNotification(r, [
        e
      ]);
    }
    onSlotUpdate(t) {
      return this._makeSubscription({
        callback: t,
        method: "slotsUpdatesSubscribe",
        unsubscribeMethod: "slotsUpdatesUnsubscribe"
      }, []);
    }
    async removeSlotUpdateListener(t) {
      await this._unsubscribeClientSubscription(t, "slot update");
    }
    async _unsubscribeClientSubscription(t, e) {
      const r = this._subscriptionDisposeFunctionsByClientSubscriptionId[t];
      r ? await r() : console.warn(`Ignored unsubscribe request because an active subscription with id \`${t}\` for '${e}' events could not be found.`);
    }
    _buildArgs(t, e, r, o) {
      const s = e || this._commitment;
      if (s || r || o) {
        let l = {};
        r && (l.encoding = r), s && (l.commitment = s), o && (l = Object.assign(l, o)), t.push(l);
      }
      return t;
    }
    _buildArgsAtLeastConfirmed(t, e, r, o) {
      const s = e || this._commitment;
      if (s && ![
        "confirmed",
        "finalized"
      ].includes(s)) throw new Error("Using Connection with default commitment: `" + this._commitment + "`, but method requires at least `confirmed`");
      return this._buildArgs(t, e, r, o);
    }
    _wsOnSignatureNotification(t) {
      const { result: e, subscription: r } = N(t, ia);
      e.value !== "receivedSignature" && this._subscriptionsAutoDisposedByRpc.add(r), this._handleServerNotification(r, e.value === "receivedSignature" ? [
        {
          type: "received"
        },
        e.context
      ] : [
        {
          type: "status",
          result: e.value
        },
        e.context
      ]);
    }
    onSignature(t, e, r) {
      const o = this._buildArgs([
        t
      ], r || this._commitment || "finalized"), s = this._makeSubscription({
        callback: (l, p) => {
          if (l.type === "status") {
            e(l.result, p);
            try {
              this.removeSignatureListener(s);
            } catch {
            }
          }
        },
        method: "signatureSubscribe",
        unsubscribeMethod: "signatureUnsubscribe"
      }, o);
      return s;
    }
    onSignatureWithOptions(t, e, r) {
      const { commitment: o, ...s } = {
        ...r,
        commitment: r && r.commitment || this._commitment || "finalized"
      }, l = this._buildArgs([
        t
      ], o, void 0, s), p = this._makeSubscription({
        callback: (y, S) => {
          e(y, S);
          try {
            this.removeSignatureListener(p);
          } catch {
          }
        },
        method: "signatureSubscribe",
        unsubscribeMethod: "signatureUnsubscribe"
      }, l);
      return p;
    }
    async removeSignatureListener(t) {
      await this._unsubscribeClientSubscription(t, "signature result");
    }
    _wsOnRootNotification(t) {
      const { result: e, subscription: r } = N(t, oa);
      this._handleServerNotification(r, [
        e
      ]);
    }
    onRootChange(t) {
      return this._makeSubscription({
        callback: t,
        method: "rootSubscribe",
        unsubscribeMethod: "rootUnsubscribe"
      }, []);
    }
    async removeRootChangeListener(t) {
      await this._unsubscribeClientSubscription(t, "root change");
    }
  }
  Pe = class {
    constructor(t) {
      this._keypair = void 0, this._keypair = t ?? Nn();
    }
    static generate() {
      return new Pe(Nn());
    }
    static fromSecretKey(t, e) {
      if (t.byteLength !== 64) throw new Error("bad secret key size");
      const r = t.slice(32, 64);
      if (!e || !e.skipValidation) {
        const o = t.slice(0, 32), s = Xe(o);
        for (let l = 0; l < 32; l++) if (r[l] !== s[l]) throw new Error("provided secretKey is invalid");
      }
      return new Pe({
        publicKey: r,
        secretKey: t
      });
    }
    static fromSeed(t) {
      const e = Xe(t), r = new Uint8Array(64);
      return r.set(t), r.set(e, 32), new Pe({
        publicKey: e,
        secretKey: r
      });
    }
    get publicKey() {
      return new R(this._keypair.publicKey);
    }
    get secretKey() {
      return new Uint8Array(this._keypair.secretKey);
    }
  };
  const de = Object.freeze({
    CreateLookupTable: {
      index: 0,
      layout: b.struct([
        b.u32("instruction"),
        Ce("recentSlot"),
        b.u8("bumpSeed")
      ])
    },
    FreezeLookupTable: {
      index: 1,
      layout: b.struct([
        b.u32("instruction")
      ])
    },
    ExtendLookupTable: {
      index: 2,
      layout: b.struct([
        b.u32("instruction"),
        Ce(),
        b.seq(G(), b.offset(b.u32(), -8), "addresses")
      ])
    },
    DeactivateLookupTable: {
      index: 3,
      layout: b.struct([
        b.u32("instruction")
      ])
    },
    CloseLookupTable: {
      index: 4,
      layout: b.struct([
        b.u32("instruction")
      ])
    }
  });
  class Ba {
    constructor() {
    }
    static decodeInstructionType(t) {
      this.checkProgramId(t.programId);
      const r = b.u32("instruction").decode(t.data);
      let o;
      for (const [s, l] of Object.entries(de)) if (l.index == r) {
        o = s;
        break;
      }
      if (!o) throw new Error("Invalid Instruction. Should be a LookupTable Instruction");
      return o;
    }
    static decodeCreateLookupTable(t) {
      this.checkProgramId(t.programId), this.checkKeysLength(t.keys, 4);
      const { recentSlot: e } = X(de.CreateLookupTable, t.data);
      return {
        authority: t.keys[1].pubkey,
        payer: t.keys[2].pubkey,
        recentSlot: Number(e)
      };
    }
    static decodeExtendLookupTable(t) {
      if (this.checkProgramId(t.programId), t.keys.length < 2) throw new Error(`invalid instruction; found ${t.keys.length} keys, expected at least 2`);
      const { addresses: e } = X(de.ExtendLookupTable, t.data);
      return {
        lookupTable: t.keys[0].pubkey,
        authority: t.keys[1].pubkey,
        payer: t.keys.length > 2 ? t.keys[2].pubkey : void 0,
        addresses: e.map((r) => new R(r))
      };
    }
    static decodeCloseLookupTable(t) {
      return this.checkProgramId(t.programId), this.checkKeysLength(t.keys, 3), {
        lookupTable: t.keys[0].pubkey,
        authority: t.keys[1].pubkey,
        recipient: t.keys[2].pubkey
      };
    }
    static decodeFreezeLookupTable(t) {
      return this.checkProgramId(t.programId), this.checkKeysLength(t.keys, 2), {
        lookupTable: t.keys[0].pubkey,
        authority: t.keys[1].pubkey
      };
    }
    static decodeDeactivateLookupTable(t) {
      return this.checkProgramId(t.programId), this.checkKeysLength(t.keys, 2), {
        lookupTable: t.keys[0].pubkey,
        authority: t.keys[1].pubkey
      };
    }
    static checkProgramId(t) {
      if (!t.equals(rn.programId)) throw new Error("invalid instruction; programId is not AddressLookupTable Program");
    }
    static checkKeysLength(t, e) {
      if (t.length < e) throw new Error(`invalid instruction; found ${t.length} keys, expected at least ${e}`);
    }
  }
  class rn {
    constructor() {
    }
    static createLookupTable(t) {
      const [e, r] = R.findProgramAddressSync([
        t.authority.toBuffer(),
        as().encode(t.recentSlot)
      ], this.programId), o = de.CreateLookupTable, s = Y(o, {
        recentSlot: BigInt(t.recentSlot),
        bumpSeed: r
      }), l = [
        {
          pubkey: e,
          isSigner: false,
          isWritable: true
        },
        {
          pubkey: t.authority,
          isSigner: true,
          isWritable: false
        },
        {
          pubkey: t.payer,
          isSigner: true,
          isWritable: true
        },
        {
          pubkey: Jt.programId,
          isSigner: false,
          isWritable: false
        }
      ];
      return [
        new et({
          programId: this.programId,
          keys: l,
          data: s
        }),
        e
      ];
    }
    static freezeLookupTable(t) {
      const e = de.FreezeLookupTable, r = Y(e), o = [
        {
          pubkey: t.lookupTable,
          isSigner: false,
          isWritable: true
        },
        {
          pubkey: t.authority,
          isSigner: true,
          isWritable: false
        }
      ];
      return new et({
        programId: this.programId,
        keys: o,
        data: r
      });
    }
    static extendLookupTable(t) {
      const e = de.ExtendLookupTable, r = Y(e, {
        addresses: t.addresses.map((s) => s.toBytes())
      }), o = [
        {
          pubkey: t.lookupTable,
          isSigner: false,
          isWritable: true
        },
        {
          pubkey: t.authority,
          isSigner: true,
          isWritable: false
        }
      ];
      return t.payer && o.push({
        pubkey: t.payer,
        isSigner: true,
        isWritable: true
      }, {
        pubkey: Jt.programId,
        isSigner: false,
        isWritable: false
      }), new et({
        programId: this.programId,
        keys: o,
        data: r
      });
    }
    static deactivateLookupTable(t) {
      const e = de.DeactivateLookupTable, r = Y(e), o = [
        {
          pubkey: t.lookupTable,
          isSigner: false,
          isWritable: true
        },
        {
          pubkey: t.authority,
          isSigner: true,
          isWritable: false
        }
      ];
      return new et({
        programId: this.programId,
        keys: o,
        data: r
      });
    }
    static closeLookupTable(t) {
      const e = de.CloseLookupTable, r = Y(e), o = [
        {
          pubkey: t.lookupTable,
          isSigner: false,
          isWritable: true
        },
        {
          pubkey: t.authority,
          isSigner: true,
          isWritable: false
        },
        {
          pubkey: t.recipient,
          isSigner: false,
          isWritable: true
        }
      ];
      return new et({
        programId: this.programId,
        keys: o,
        data: r
      });
    }
  }
  rn.programId = new R("AddressLookupTab1e1111111111111111111111111");
  class La {
    constructor() {
    }
    static decodeInstructionType(t) {
      this.checkProgramId(t.programId);
      const r = b.u8("instruction").decode(t.data);
      let o;
      for (const [s, l] of Object.entries(ae)) if (l.index == r) {
        o = s;
        break;
      }
      if (!o) throw new Error("Instruction type incorrect; not a ComputeBudgetInstruction");
      return o;
    }
    static decodeRequestUnits(t) {
      this.checkProgramId(t.programId);
      const { units: e, additionalFee: r } = X(ae.RequestUnits, t.data);
      return {
        units: e,
        additionalFee: r
      };
    }
    static decodeRequestHeapFrame(t) {
      this.checkProgramId(t.programId);
      const { bytes: e } = X(ae.RequestHeapFrame, t.data);
      return {
        bytes: e
      };
    }
    static decodeSetComputeUnitLimit(t) {
      this.checkProgramId(t.programId);
      const { units: e } = X(ae.SetComputeUnitLimit, t.data);
      return {
        units: e
      };
    }
    static decodeSetComputeUnitPrice(t) {
      this.checkProgramId(t.programId);
      const { microLamports: e } = X(ae.SetComputeUnitPrice, t.data);
      return {
        microLamports: e
      };
    }
    static checkProgramId(t) {
      if (!t.equals(nn.programId)) throw new Error("invalid instruction; programId is not ComputeBudgetProgram");
    }
  }
  const ae = Object.freeze({
    RequestUnits: {
      index: 0,
      layout: b.struct([
        b.u8("instruction"),
        b.u32("units"),
        b.u32("additionalFee")
      ])
    },
    RequestHeapFrame: {
      index: 1,
      layout: b.struct([
        b.u8("instruction"),
        b.u32("bytes")
      ])
    },
    SetComputeUnitLimit: {
      index: 2,
      layout: b.struct([
        b.u8("instruction"),
        b.u32("units")
      ])
    },
    SetComputeUnitPrice: {
      index: 3,
      layout: b.struct([
        b.u8("instruction"),
        Ce("microLamports")
      ])
    }
  });
  nn = class {
    constructor() {
    }
    static requestUnits(t) {
      const e = ae.RequestUnits, r = Y(e, t);
      return new et({
        keys: [],
        programId: this.programId,
        data: r
      });
    }
    static requestHeapFrame(t) {
      const e = ae.RequestHeapFrame, r = Y(e, t);
      return new et({
        keys: [],
        programId: this.programId,
        data: r
      });
    }
    static setComputeUnitLimit(t) {
      const e = ae.SetComputeUnitLimit, r = Y(e, t);
      return new et({
        keys: [],
        programId: this.programId,
        data: r
      });
    }
    static setComputeUnitPrice(t) {
      const e = ae.SetComputeUnitPrice, r = Y(e, {
        microLamports: BigInt(t.microLamports)
      });
      return new et({
        keys: [],
        programId: this.programId,
        data: r
      });
    }
  };
  nn.programId = new R("ComputeBudget111111111111111111111111111111");
  const $n = 64, Gn = 32, jn = 64, Jn = b.struct([
    b.u8("numSignatures"),
    b.u8("padding"),
    b.u16("signatureOffset"),
    b.u16("signatureInstructionIndex"),
    b.u16("publicKeyOffset"),
    b.u16("publicKeyInstructionIndex"),
    b.u16("messageDataOffset"),
    b.u16("messageDataSize"),
    b.u16("messageInstructionIndex")
  ]);
  class or {
    constructor() {
    }
    static createInstructionWithPublicKey(t) {
      const { publicKey: e, message: r, signature: o, instructionIndex: s } = t;
      $(e.length === Gn, `Public Key must be ${Gn} bytes but received ${e.length} bytes`), $(o.length === jn, `Signature must be ${jn} bytes but received ${o.length} bytes`);
      const l = Jn.span, p = l + e.length, y = p + o.length, S = 1, _ = F.alloc(y + r.length), I = s ?? 65535;
      return Jn.encode({
        numSignatures: S,
        padding: 0,
        signatureOffset: p,
        signatureInstructionIndex: I,
        publicKeyOffset: l,
        publicKeyInstructionIndex: I,
        messageDataOffset: y,
        messageDataSize: r.length,
        messageInstructionIndex: I
      }, _), _.fill(e, l), _.fill(o, p), _.fill(r, y), new et({
        keys: [],
        programId: or.programId,
        data: _
      });
    }
    static createInstructionWithPrivateKey(t) {
      const { privateKey: e, message: r, instructionIndex: o } = t;
      $(e.length === $n, `Private key must be ${$n} bytes but received ${e.length} bytes`);
      try {
        const s = Pe.fromSecretKey(e), l = s.publicKey.toBytes(), p = jr(r, s.secretKey);
        return this.createInstructionWithPublicKey({
          publicKey: l,
          message: r,
          signature: p,
          instructionIndex: o
        });
      } catch (s) {
        throw new Error(`Error creating instruction; ${s}`);
      }
    }
  }
  or.programId = new R("Ed25519SigVerify111111111111111111111111111");
  const Ca = (u, t) => {
    const e = $r.sign(u, t);
    return [
      e.toCompactRawBytes(),
      e.recovery
    ];
  };
  $r.utils.isValidPrivateKey;
  const Na = $r.getPublicKey, Yn = 32, Cr = 20, Zn = 64, za = 11, Nr = b.struct([
    b.u8("numSignatures"),
    b.u16("signatureOffset"),
    b.u8("signatureInstructionIndex"),
    b.u16("ethAddressOffset"),
    b.u8("ethAddressInstructionIndex"),
    b.u16("messageDataOffset"),
    b.u16("messageDataSize"),
    b.u8("messageInstructionIndex"),
    b.blob(20, "ethAddress"),
    b.blob(64, "signature"),
    b.u8("recoveryId")
  ]);
  class Te {
    constructor() {
    }
    static publicKeyToEthAddress(t) {
      $(t.length === Zn, `Public key must be ${Zn} bytes but received ${t.length} bytes`);
      try {
        return F.from(Rn(H(t))).slice(-Cr);
      } catch (e) {
        throw new Error(`Error constructing Ethereum address: ${e}`);
      }
    }
    static createInstructionWithPublicKey(t) {
      const { publicKey: e, message: r, signature: o, recoveryId: s, instructionIndex: l } = t;
      return Te.createInstructionWithEthAddress({
        ethAddress: Te.publicKeyToEthAddress(e),
        message: r,
        signature: o,
        recoveryId: s,
        instructionIndex: l
      });
    }
    static createInstructionWithEthAddress(t) {
      const { ethAddress: e, message: r, signature: o, recoveryId: s, instructionIndex: l = 0 } = t;
      let p;
      typeof e == "string" ? e.startsWith("0x") ? p = F.from(e.substr(2), "hex") : p = F.from(e, "hex") : p = e, $(p.length === Cr, `Address must be ${Cr} bytes but received ${p.length} bytes`);
      const y = 1 + za, S = y, _ = y + p.length, I = _ + o.length + 1, L = 1, x = F.alloc(Nr.span + r.length);
      return Nr.encode({
        numSignatures: L,
        signatureOffset: _,
        signatureInstructionIndex: l,
        ethAddressOffset: S,
        ethAddressInstructionIndex: l,
        messageDataOffset: I,
        messageDataSize: r.length,
        messageInstructionIndex: l,
        signature: H(o),
        ethAddress: H(p),
        recoveryId: s
      }, x), x.fill(H(r), Nr.span), new et({
        keys: [],
        programId: Te.programId,
        data: x
      });
    }
    static createInstructionWithPrivateKey(t) {
      const { privateKey: e, message: r, instructionIndex: o } = t;
      $(e.length === Yn, `Private key must be ${Yn} bytes but received ${e.length} bytes`);
      try {
        const s = H(e), l = Na(s, false).slice(1), p = F.from(Rn(H(r))), [y, S] = Ca(p, s);
        return this.createInstructionWithPublicKey({
          publicKey: l,
          message: r,
          signature: y,
          recoveryId: S,
          instructionIndex: o
        });
      } catch (s) {
        throw new Error(`Error creating instruction; ${s}`);
      }
    }
  }
  Te.programId = new R("KeccakSecp256k11111111111111111111111111111");
  var Ts;
  const Bs = new R("StakeConfig11111111111111111111111111111111");
  class Ls {
    constructor(t, e) {
      this.staker = void 0, this.withdrawer = void 0, this.staker = t, this.withdrawer = e;
    }
  }
  class $e {
    constructor(t, e, r) {
      this.unixTimestamp = void 0, this.epoch = void 0, this.custodian = void 0, this.unixTimestamp = t, this.epoch = e, this.custodian = r;
    }
  }
  Ts = $e;
  $e.default = new Ts(0, 0, R.default);
  class Oa {
    constructor() {
    }
    static decodeInstructionType(t) {
      this.checkProgramId(t.programId);
      const r = b.u32("instruction").decode(t.data);
      let o;
      for (const [s, l] of Object.entries(jt)) if (l.index == r) {
        o = s;
        break;
      }
      if (!o) throw new Error("Instruction type incorrect; not a StakeInstruction");
      return o;
    }
    static decodeInitialize(t) {
      this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 2);
      const { authorized: e, lockup: r } = X(jt.Initialize, t.data);
      return {
        stakePubkey: t.keys[0].pubkey,
        authorized: new Ls(new R(e.staker), new R(e.withdrawer)),
        lockup: new $e(r.unixTimestamp, r.epoch, new R(r.custodian))
      };
    }
    static decodeDelegate(t) {
      return this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 6), X(jt.Delegate, t.data), {
        stakePubkey: t.keys[0].pubkey,
        votePubkey: t.keys[1].pubkey,
        authorizedPubkey: t.keys[5].pubkey
      };
    }
    static decodeAuthorize(t) {
      this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 3);
      const { newAuthorized: e, stakeAuthorizationType: r } = X(jt.Authorize, t.data), o = {
        stakePubkey: t.keys[0].pubkey,
        authorizedPubkey: t.keys[2].pubkey,
        newAuthorizedPubkey: new R(e),
        stakeAuthorizationType: {
          index: r
        }
      };
      return t.keys.length > 3 && (o.custodianPubkey = t.keys[3].pubkey), o;
    }
    static decodeAuthorizeWithSeed(t) {
      this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 2);
      const { newAuthorized: e, stakeAuthorizationType: r, authoritySeed: o, authorityOwner: s } = X(jt.AuthorizeWithSeed, t.data), l = {
        stakePubkey: t.keys[0].pubkey,
        authorityBase: t.keys[1].pubkey,
        authoritySeed: o,
        authorityOwner: new R(s),
        newAuthorizedPubkey: new R(e),
        stakeAuthorizationType: {
          index: r
        }
      };
      return t.keys.length > 3 && (l.custodianPubkey = t.keys[3].pubkey), l;
    }
    static decodeSplit(t) {
      this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 3);
      const { lamports: e } = X(jt.Split, t.data);
      return {
        stakePubkey: t.keys[0].pubkey,
        splitStakePubkey: t.keys[1].pubkey,
        authorizedPubkey: t.keys[2].pubkey,
        lamports: e
      };
    }
    static decodeMerge(t) {
      return this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 3), X(jt.Merge, t.data), {
        stakePubkey: t.keys[0].pubkey,
        sourceStakePubKey: t.keys[1].pubkey,
        authorizedPubkey: t.keys[4].pubkey
      };
    }
    static decodeWithdraw(t) {
      this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 5);
      const { lamports: e } = X(jt.Withdraw, t.data), r = {
        stakePubkey: t.keys[0].pubkey,
        toPubkey: t.keys[1].pubkey,
        authorizedPubkey: t.keys[4].pubkey,
        lamports: e
      };
      return t.keys.length > 5 && (r.custodianPubkey = t.keys[5].pubkey), r;
    }
    static decodeDeactivate(t) {
      return this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 3), X(jt.Deactivate, t.data), {
        stakePubkey: t.keys[0].pubkey,
        authorizedPubkey: t.keys[2].pubkey
      };
    }
    static checkProgramId(t) {
      if (!t.equals(ar.programId)) throw new Error("invalid instruction; programId is not StakeProgram");
    }
    static checkKeyLength(t, e) {
      if (t.length < e) throw new Error(`invalid instruction; found ${t.length} keys, expected at least ${e}`);
    }
  }
  const jt = Object.freeze({
    Initialize: {
      index: 0,
      layout: b.struct([
        b.u32("instruction"),
        Oi(),
        Ki()
      ])
    },
    Authorize: {
      index: 1,
      layout: b.struct([
        b.u32("instruction"),
        G("newAuthorized"),
        b.u32("stakeAuthorizationType")
      ])
    },
    Delegate: {
      index: 2,
      layout: b.struct([
        b.u32("instruction")
      ])
    },
    Split: {
      index: 3,
      layout: b.struct([
        b.u32("instruction"),
        b.ns64("lamports")
      ])
    },
    Withdraw: {
      index: 4,
      layout: b.struct([
        b.u32("instruction"),
        b.ns64("lamports")
      ])
    },
    Deactivate: {
      index: 5,
      layout: b.struct([
        b.u32("instruction")
      ])
    },
    Merge: {
      index: 7,
      layout: b.struct([
        b.u32("instruction")
      ])
    },
    AuthorizeWithSeed: {
      index: 8,
      layout: b.struct([
        b.u32("instruction"),
        G("newAuthorized"),
        b.u32("stakeAuthorizationType"),
        we("authoritySeed"),
        G("authorityOwner")
      ])
    }
  }), Ka = Object.freeze({
    Staker: {
      index: 0
    },
    Withdrawer: {
      index: 1
    }
  });
  class ar {
    constructor() {
    }
    static initialize(t) {
      const { stakePubkey: e, authorized: r, lockup: o } = t, s = o || $e.default, l = jt.Initialize, p = Y(l, {
        authorized: {
          staker: H(r.staker.toBuffer()),
          withdrawer: H(r.withdrawer.toBuffer())
        },
        lockup: {
          unixTimestamp: s.unixTimestamp,
          epoch: s.epoch,
          custodian: H(s.custodian.toBuffer())
        }
      }), y = {
        keys: [
          {
            pubkey: e,
            isSigner: false,
            isWritable: true
          },
          {
            pubkey: Le,
            isSigner: false,
            isWritable: false
          }
        ],
        programId: this.programId,
        data: p
      };
      return new et(y);
    }
    static createAccountWithSeed(t) {
      const e = new Z();
      e.add(Jt.createAccountWithSeed({
        fromPubkey: t.fromPubkey,
        newAccountPubkey: t.stakePubkey,
        basePubkey: t.basePubkey,
        seed: t.seed,
        lamports: t.lamports,
        space: this.space,
        programId: this.programId
      }));
      const { stakePubkey: r, authorized: o, lockup: s } = t;
      return e.add(this.initialize({
        stakePubkey: r,
        authorized: o,
        lockup: s
      }));
    }
    static createAccount(t) {
      const e = new Z();
      e.add(Jt.createAccount({
        fromPubkey: t.fromPubkey,
        newAccountPubkey: t.stakePubkey,
        lamports: t.lamports,
        space: this.space,
        programId: this.programId
      }));
      const { stakePubkey: r, authorized: o, lockup: s } = t;
      return e.add(this.initialize({
        stakePubkey: r,
        authorized: o,
        lockup: s
      }));
    }
    static delegate(t) {
      const { stakePubkey: e, authorizedPubkey: r, votePubkey: o } = t, s = jt.Delegate, l = Y(s);
      return new Z().add({
        keys: [
          {
            pubkey: e,
            isSigner: false,
            isWritable: true
          },
          {
            pubkey: o,
            isSigner: false,
            isWritable: false
          },
          {
            pubkey: oe,
            isSigner: false,
            isWritable: false
          },
          {
            pubkey: Ze,
            isSigner: false,
            isWritable: false
          },
          {
            pubkey: Bs,
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
        data: l
      });
    }
    static authorize(t) {
      const { stakePubkey: e, authorizedPubkey: r, newAuthorizedPubkey: o, stakeAuthorizationType: s, custodianPubkey: l } = t, p = jt.Authorize, y = Y(p, {
        newAuthorized: H(o.toBuffer()),
        stakeAuthorizationType: s.index
      }), S = [
        {
          pubkey: e,
          isSigner: false,
          isWritable: true
        },
        {
          pubkey: oe,
          isSigner: false,
          isWritable: true
        },
        {
          pubkey: r,
          isSigner: true,
          isWritable: false
        }
      ];
      return l && S.push({
        pubkey: l,
        isSigner: true,
        isWritable: false
      }), new Z().add({
        keys: S,
        programId: this.programId,
        data: y
      });
    }
    static authorizeWithSeed(t) {
      const { stakePubkey: e, authorityBase: r, authoritySeed: o, authorityOwner: s, newAuthorizedPubkey: l, stakeAuthorizationType: p, custodianPubkey: y } = t, S = jt.AuthorizeWithSeed, _ = Y(S, {
        newAuthorized: H(l.toBuffer()),
        stakeAuthorizationType: p.index,
        authoritySeed: o,
        authorityOwner: H(s.toBuffer())
      }), I = [
        {
          pubkey: e,
          isSigner: false,
          isWritable: true
        },
        {
          pubkey: r,
          isSigner: true,
          isWritable: false
        },
        {
          pubkey: oe,
          isSigner: false,
          isWritable: false
        }
      ];
      return y && I.push({
        pubkey: y,
        isSigner: true,
        isWritable: false
      }), new Z().add({
        keys: I,
        programId: this.programId,
        data: _
      });
    }
    static splitInstruction(t) {
      const { stakePubkey: e, authorizedPubkey: r, splitStakePubkey: o, lamports: s } = t, l = jt.Split, p = Y(l, {
        lamports: s
      });
      return new et({
        keys: [
          {
            pubkey: e,
            isSigner: false,
            isWritable: true
          },
          {
            pubkey: o,
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
        data: p
      });
    }
    static split(t, e) {
      const r = new Z();
      return r.add(Jt.createAccount({
        fromPubkey: t.authorizedPubkey,
        newAccountPubkey: t.splitStakePubkey,
        lamports: e,
        space: this.space,
        programId: this.programId
      })), r.add(this.splitInstruction(t));
    }
    static splitWithSeed(t, e) {
      const { stakePubkey: r, authorizedPubkey: o, splitStakePubkey: s, basePubkey: l, seed: p, lamports: y } = t, S = new Z();
      return S.add(Jt.allocate({
        accountPubkey: s,
        basePubkey: l,
        seed: p,
        space: this.space,
        programId: this.programId
      })), e && e > 0 && S.add(Jt.transfer({
        fromPubkey: t.authorizedPubkey,
        toPubkey: s,
        lamports: e
      })), S.add(this.splitInstruction({
        stakePubkey: r,
        authorizedPubkey: o,
        splitStakePubkey: s,
        lamports: y
      }));
    }
    static merge(t) {
      const { stakePubkey: e, sourceStakePubKey: r, authorizedPubkey: o } = t, s = jt.Merge, l = Y(s);
      return new Z().add({
        keys: [
          {
            pubkey: e,
            isSigner: false,
            isWritable: true
          },
          {
            pubkey: r,
            isSigner: false,
            isWritable: true
          },
          {
            pubkey: oe,
            isSigner: false,
            isWritable: false
          },
          {
            pubkey: Ze,
            isSigner: false,
            isWritable: false
          },
          {
            pubkey: o,
            isSigner: true,
            isWritable: false
          }
        ],
        programId: this.programId,
        data: l
      });
    }
    static withdraw(t) {
      const { stakePubkey: e, authorizedPubkey: r, toPubkey: o, lamports: s, custodianPubkey: l } = t, p = jt.Withdraw, y = Y(p, {
        lamports: s
      }), S = [
        {
          pubkey: e,
          isSigner: false,
          isWritable: true
        },
        {
          pubkey: o,
          isSigner: false,
          isWritable: true
        },
        {
          pubkey: oe,
          isSigner: false,
          isWritable: false
        },
        {
          pubkey: Ze,
          isSigner: false,
          isWritable: false
        },
        {
          pubkey: r,
          isSigner: true,
          isWritable: false
        }
      ];
      return l && S.push({
        pubkey: l,
        isSigner: true,
        isWritable: false
      }), new Z().add({
        keys: S,
        programId: this.programId,
        data: y
      });
    }
    static deactivate(t) {
      const { stakePubkey: e, authorizedPubkey: r } = t, o = jt.Deactivate, s = Y(o);
      return new Z().add({
        keys: [
          {
            pubkey: e,
            isSigner: false,
            isWritable: true
          },
          {
            pubkey: oe,
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
        data: s
      });
    }
  }
  ar.programId = new R("Stake11111111111111111111111111111111111111");
  ar.space = 200;
  class Cs {
    constructor(t, e, r, o) {
      this.nodePubkey = void 0, this.authorizedVoter = void 0, this.authorizedWithdrawer = void 0, this.commission = void 0, this.nodePubkey = t, this.authorizedVoter = e, this.authorizedWithdrawer = r, this.commission = o;
    }
  }
  class Wa {
    constructor() {
    }
    static decodeInstructionType(t) {
      this.checkProgramId(t.programId);
      const r = b.u32("instruction").decode(t.data);
      let o;
      for (const [s, l] of Object.entries(ce)) if (l.index == r) {
        o = s;
        break;
      }
      if (!o) throw new Error("Instruction type incorrect; not a VoteInstruction");
      return o;
    }
    static decodeInitializeAccount(t) {
      this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 4);
      const { voteInit: e } = X(ce.InitializeAccount, t.data);
      return {
        votePubkey: t.keys[0].pubkey,
        nodePubkey: t.keys[3].pubkey,
        voteInit: new Cs(new R(e.nodePubkey), new R(e.authorizedVoter), new R(e.authorizedWithdrawer), e.commission)
      };
    }
    static decodeAuthorize(t) {
      this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 3);
      const { newAuthorized: e, voteAuthorizationType: r } = X(ce.Authorize, t.data);
      return {
        votePubkey: t.keys[0].pubkey,
        authorizedPubkey: t.keys[2].pubkey,
        newAuthorizedPubkey: new R(e),
        voteAuthorizationType: {
          index: r
        }
      };
    }
    static decodeAuthorizeWithSeed(t) {
      this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 3);
      const { voteAuthorizeWithSeedArgs: { currentAuthorityDerivedKeyOwnerPubkey: e, currentAuthorityDerivedKeySeed: r, newAuthorized: o, voteAuthorizationType: s } } = X(ce.AuthorizeWithSeed, t.data);
      return {
        currentAuthorityDerivedKeyBasePubkey: t.keys[2].pubkey,
        currentAuthorityDerivedKeyOwnerPubkey: new R(e),
        currentAuthorityDerivedKeySeed: r,
        newAuthorizedPubkey: new R(o),
        voteAuthorizationType: {
          index: s
        },
        votePubkey: t.keys[0].pubkey
      };
    }
    static decodeWithdraw(t) {
      this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 3);
      const { lamports: e } = X(ce.Withdraw, t.data);
      return {
        votePubkey: t.keys[0].pubkey,
        authorizedWithdrawerPubkey: t.keys[2].pubkey,
        lamports: e,
        toPubkey: t.keys[1].pubkey
      };
    }
    static checkProgramId(t) {
      if (!t.equals(Ke.programId)) throw new Error("invalid instruction; programId is not VoteProgram");
    }
    static checkKeyLength(t, e) {
      if (t.length < e) throw new Error(`invalid instruction; found ${t.length} keys, expected at least ${e}`);
    }
  }
  const ce = Object.freeze({
    InitializeAccount: {
      index: 0,
      layout: b.struct([
        b.u32("instruction"),
        Wi()
      ])
    },
    Authorize: {
      index: 1,
      layout: b.struct([
        b.u32("instruction"),
        G("newAuthorized"),
        b.u32("voteAuthorizationType")
      ])
    },
    Withdraw: {
      index: 3,
      layout: b.struct([
        b.u32("instruction"),
        b.ns64("lamports")
      ])
    },
    UpdateValidatorIdentity: {
      index: 4,
      layout: b.struct([
        b.u32("instruction")
      ])
    },
    AuthorizeWithSeed: {
      index: 10,
      layout: b.struct([
        b.u32("instruction"),
        Ui()
      ])
    }
  }), Ua = Object.freeze({
    Voter: {
      index: 0
    },
    Withdrawer: {
      index: 1
    }
  });
  class Ke {
    constructor() {
    }
    static initializeAccount(t) {
      const { votePubkey: e, nodePubkey: r, voteInit: o } = t, s = ce.InitializeAccount, l = Y(s, {
        voteInit: {
          nodePubkey: H(o.nodePubkey.toBuffer()),
          authorizedVoter: H(o.authorizedVoter.toBuffer()),
          authorizedWithdrawer: H(o.authorizedWithdrawer.toBuffer()),
          commission: o.commission
        }
      }), p = {
        keys: [
          {
            pubkey: e,
            isSigner: false,
            isWritable: true
          },
          {
            pubkey: Le,
            isSigner: false,
            isWritable: false
          },
          {
            pubkey: oe,
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
        data: l
      };
      return new et(p);
    }
    static createAccount(t) {
      const e = new Z();
      return e.add(Jt.createAccount({
        fromPubkey: t.fromPubkey,
        newAccountPubkey: t.votePubkey,
        lamports: t.lamports,
        space: this.space,
        programId: this.programId
      })), e.add(this.initializeAccount({
        votePubkey: t.votePubkey,
        nodePubkey: t.voteInit.nodePubkey,
        voteInit: t.voteInit
      }));
    }
    static authorize(t) {
      const { votePubkey: e, authorizedPubkey: r, newAuthorizedPubkey: o, voteAuthorizationType: s } = t, l = ce.Authorize, p = Y(l, {
        newAuthorized: H(o.toBuffer()),
        voteAuthorizationType: s.index
      }), y = [
        {
          pubkey: e,
          isSigner: false,
          isWritable: true
        },
        {
          pubkey: oe,
          isSigner: false,
          isWritable: false
        },
        {
          pubkey: r,
          isSigner: true,
          isWritable: false
        }
      ];
      return new Z().add({
        keys: y,
        programId: this.programId,
        data: p
      });
    }
    static authorizeWithSeed(t) {
      const { currentAuthorityDerivedKeyBasePubkey: e, currentAuthorityDerivedKeyOwnerPubkey: r, currentAuthorityDerivedKeySeed: o, newAuthorizedPubkey: s, voteAuthorizationType: l, votePubkey: p } = t, y = ce.AuthorizeWithSeed, S = Y(y, {
        voteAuthorizeWithSeedArgs: {
          currentAuthorityDerivedKeyOwnerPubkey: H(r.toBuffer()),
          currentAuthorityDerivedKeySeed: o,
          newAuthorized: H(s.toBuffer()),
          voteAuthorizationType: l.index
        }
      }), _ = [
        {
          pubkey: p,
          isSigner: false,
          isWritable: true
        },
        {
          pubkey: oe,
          isSigner: false,
          isWritable: false
        },
        {
          pubkey: e,
          isSigner: true,
          isWritable: false
        }
      ];
      return new Z().add({
        keys: _,
        programId: this.programId,
        data: S
      });
    }
    static withdraw(t) {
      const { votePubkey: e, authorizedWithdrawerPubkey: r, lamports: o, toPubkey: s } = t, l = ce.Withdraw, p = Y(l, {
        lamports: o
      }), y = [
        {
          pubkey: e,
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
      ];
      return new Z().add({
        keys: y,
        programId: this.programId,
        data: p
      });
    }
    static safeWithdraw(t, e, r) {
      if (t.lamports > e - r) throw new Error("Withdraw will leave vote account with insufficient funds.");
      return Ke.withdraw(t);
    }
    static updateValidatorIdentity(t) {
      const { votePubkey: e, authorizedWithdrawerPubkey: r, nodePubkey: o } = t, s = ce.UpdateValidatorIdentity, l = Y(s), p = [
        {
          pubkey: e,
          isSigner: false,
          isWritable: true
        },
        {
          pubkey: o,
          isSigner: true,
          isWritable: false
        },
        {
          pubkey: r,
          isSigner: true,
          isWritable: false
        }
      ];
      return new Z().add({
        keys: p,
        programId: this.programId,
        data: l
      });
    }
  }
  Ke.programId = new R("Vote111111111111111111111111111111111111111");
  Ke.space = 3762;
  const Ns = new R("Va1idator1nfo111111111111111111111111111111"), qa = M({
    name: B(),
    website: D(B()),
    details: D(B()),
    iconUrl: D(B()),
    keybaseUsername: D(B())
  });
  class sn {
    constructor(t, e) {
      this.key = void 0, this.info = void 0, this.key = t, this.info = e;
    }
    static fromConfigData(t) {
      let e = [
        ...t
      ];
      if (Qt(e) !== 2) return null;
      const o = [];
      for (let s = 0; s < 2; s++) {
        const l = new R($t(e, 0, re)), p = Ht(e) === 1;
        o.push({
          publicKey: l,
          isSigner: p
        });
      }
      if (o[0].publicKey.equals(Ns) && o[1].isSigner) {
        const s = we().decode(F.from(e)), l = JSON.parse(s);
        return Ws(l, qa), new sn(o[1].publicKey, l);
      }
      return null;
    }
  }
  const Da = new R("Vote111111111111111111111111111111111111111"), Fa = b.struct([
    G("nodePubkey"),
    G("authorizedWithdrawer"),
    b.u8("commission"),
    b.nu64(),
    b.seq(b.struct([
      b.nu64("slot"),
      b.u32("confirmationCount")
    ]), b.offset(b.u32(), -8), "votes"),
    b.u8("rootSlotValid"),
    b.nu64("rootSlot"),
    b.nu64(),
    b.seq(b.struct([
      b.nu64("epoch"),
      G("authorizedVoter")
    ]), b.offset(b.u32(), -8), "authorizedVoters"),
    b.struct([
      b.seq(b.struct([
        G("authorizedPubkey"),
        b.nu64("epochOfLastAuthorizedSwitch"),
        b.nu64("targetEpoch")
      ]), 32, "buf"),
      b.nu64("idx"),
      b.u8("isEmpty")
    ], "priorVoters"),
    b.nu64(),
    b.seq(b.struct([
      b.nu64("epoch"),
      b.nu64("credits"),
      b.nu64("prevCredits")
    ]), b.offset(b.u32(), -8), "epochCredits"),
    b.struct([
      b.nu64("slot"),
      b.nu64("timestamp")
    ], "lastTimestamp")
  ]);
  class on {
    constructor(t) {
      this.nodePubkey = void 0, this.authorizedWithdrawer = void 0, this.commission = void 0, this.rootSlot = void 0, this.votes = void 0, this.authorizedVoters = void 0, this.priorVoters = void 0, this.epochCredits = void 0, this.lastTimestamp = void 0, this.nodePubkey = t.nodePubkey, this.authorizedWithdrawer = t.authorizedWithdrawer, this.commission = t.commission, this.rootSlot = t.rootSlot, this.votes = t.votes, this.authorizedVoters = t.authorizedVoters, this.priorVoters = t.priorVoters, this.epochCredits = t.epochCredits, this.lastTimestamp = t.lastTimestamp;
    }
    static fromAccountData(t) {
      const r = Fa.decode(H(t), 4);
      let o = r.rootSlot;
      return r.rootSlotValid || (o = null), new on({
        nodePubkey: new R(r.nodePubkey),
        authorizedWithdrawer: new R(r.authorizedWithdrawer),
        commission: r.commission,
        votes: r.votes,
        rootSlot: o,
        authorizedVoters: r.authorizedVoters.map(Va),
        priorVoters: Ha(r.priorVoters),
        epochCredits: r.epochCredits,
        lastTimestamp: r.lastTimestamp
      });
    }
  }
  function Va({ authorizedVoter: u, epoch: t }) {
    return {
      epoch: t,
      authorizedVoter: new R(u)
    };
  }
  function Xn({ authorizedPubkey: u, epochOfLastAuthorizedSwitch: t, targetEpoch: e }) {
    return {
      authorizedPubkey: new R(u),
      epochOfLastAuthorizedSwitch: t,
      targetEpoch: e
    };
  }
  function Ha({ buf: u, idx: t, isEmpty: e }) {
    return e ? [] : [
      ...u.slice(t + 1).map(Xn),
      ...u.slice(0, t).map(Xn)
    ];
  }
  const Qn = {
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
  function $a(u, t) {
    const e = t === false ? "http" : "https";
    if (!u) return Qn[e].devnet;
    const r = Qn[e][u];
    if (!r) throw new Error(`Unknown ${e} cluster: ${u}`);
    return r;
  }
  async function Ga(u, t, e, r) {
    let o, s;
    e && Object.prototype.hasOwnProperty.call(e, "lastValidBlockHeight") || e && Object.prototype.hasOwnProperty.call(e, "nonceValue") ? (o = e, s = r) : s = e;
    const l = s && {
      skipPreflight: s.skipPreflight,
      preflightCommitment: s.preflightCommitment || s.commitment,
      minContextSlot: s.minContextSlot
    }, p = await u.sendRawTransaction(t, l), y = s && s.commitment, _ = (await (o ? u.confirmTransaction(o, y) : u.confirmTransaction(p, y))).value;
    if (_.err) throw p != null ? new qe({
      action: (l == null ? void 0 : l.skipPreflight) ? "send" : "simulate",
      signature: p,
      transactionMessage: `Status: (${JSON.stringify(_)})`
    }) : new Error(`Raw transaction ${p} failed (${JSON.stringify(_)})`);
    return p;
  }
  let ja;
  ja = 1e9;
  hc = Object.freeze(Object.defineProperty({
    __proto__: null,
    Account: Li,
    AddressLookupTableAccount: Wr,
    AddressLookupTableInstruction: Ba,
    AddressLookupTableProgram: rn,
    Authorized: Ls,
    BLOCKHASH_CACHE_TIMEOUT_MS: ws,
    BPF_LOADER_DEPRECATED_PROGRAM_ID: Ci,
    BPF_LOADER_PROGRAM_ID: no,
    BpfLoader: so,
    COMPUTE_BUDGET_INSTRUCTION_LAYOUTS: ae,
    ComputeBudgetInstruction: La,
    ComputeBudgetProgram: nn,
    Connection: Ps,
    Ed25519Program: or,
    Enum: Ti,
    EpochSchedule: ms,
    FeeCalculatorLayout: gs,
    Keypair: Pe,
    LAMPORTS_PER_SOL: ja,
    LOOKUP_TABLE_INSTRUCTION_LAYOUTS: de,
    Loader: Se,
    Lockup: $e,
    MAX_SEED_LENGTH: ls,
    Message: ie,
    MessageAccountKeys: Be,
    MessageV0: ve,
    MessageV1: He,
    NONCE_ACCOUNT_LENGTH: Kr,
    NonceAccount: nr,
    PACKET_DATA_SIZE: ge,
    PUBLIC_KEY_LENGTH: re,
    PublicKey: R,
    SIGNATURE_LENGTH_IN_BYTES: pe,
    SOLANA_SCHEMA: Ue,
    STAKE_CONFIG_ID: Bs,
    STAKE_INSTRUCTION_LAYOUTS: jt,
    SYSTEM_INSTRUCTION_LAYOUTS: nt,
    SYSVAR_CLOCK_PUBKEY: oe,
    SYSVAR_EPOCH_SCHEDULE_PUBKEY: Ji,
    SYSVAR_INSTRUCTIONS_PUBKEY: Yi,
    SYSVAR_RECENT_BLOCKHASHES_PUBKEY: Ye,
    SYSVAR_RENT_PUBKEY: Le,
    SYSVAR_REWARDS_PUBKEY: Zi,
    SYSVAR_SLOT_HASHES_PUBKEY: Xi,
    SYSVAR_SLOT_HISTORY_PUBKEY: Qi,
    SYSVAR_STAKE_HISTORY_PUBKEY: Ze,
    Secp256k1Program: Te,
    SendTransactionError: qe,
    SolanaJSONRPCError: q,
    SolanaJSONRPCErrorCode: to,
    StakeAuthorizationLayout: Ka,
    StakeInstruction: Oa,
    StakeProgram: ar,
    Struct: Jr,
    SystemInstruction: eo,
    SystemProgram: Jt,
    Transaction: Z,
    TransactionExpiredBlockheightExceededError: Yr,
    TransactionExpiredNonceInvalidError: Re,
    TransactionExpiredTimeoutError: Zr,
    TransactionInstruction: et,
    TransactionMessage: Xr,
    TransactionStatus: le,
    V1_TRANSACTION_SIZE_LIMIT: Ni,
    VALIDATOR_INFO_KEY: Ns,
    VERSION_1_MESSAGE_PREFIX: hs,
    VERSION_PREFIX_MASK: Ve,
    VOTE_PROGRAM_ID: Da,
    ValidatorInfo: sn,
    VersionedMessage: Qe,
    VersionedTransaction: tr,
    VoteAccount: on,
    VoteAuthorizationLayout: Ua,
    VoteInit: Cs,
    VoteInstruction: Wa,
    VoteProgram: Ke,
    clusterApiUrl: $a,
    sendAndConfirmRawTransaction: Ga,
    sendAndConfirmTransaction: Or
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  dc = 0;
  fc = 0n;
  an = "Solana";
  Ja = "11111111111111111111111111111111";
  se = (_a2 = class {
    constructor(t) {
      __publicField(this, "type", "Native");
      __publicField(this, "address");
      se.instanceof(t) ? this.address = t.address : Mn.instanceof(t) ? this.address = new R(t.toUint8Array()) : typeof t == "string" && Pn.valid(t) ? this.address = new R(Pn.decode(t)) : this.address = new R(t);
    }
    unwrap() {
      return this.address;
    }
    toString() {
      return this.address.toBase58();
    }
    toUint8Array() {
      return new Uint8Array(this.address.toBytes());
    }
    toNative() {
      return this;
    }
    toUniversalAddress() {
      return new Mn(this.toUint8Array());
    }
    static instanceof(t) {
      return t.constructor.platform === se.platform;
    }
    equals(t) {
      return se.instanceof(t) ? t.unwrap().equals(this.unwrap()) : this.toUniversalAddress().equals(t);
    }
  }, __publicField(_a2, "byteSize", 32), __publicField(_a2, "platform", an), _a2);
  qs(an, se);
  ts = new R("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA");
  Fr = new R("TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb");
  pc = new R("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL");
  new R("So11111111111111111111111111111111111111112");
  new R("9pan9bMn5HatX4EJdBwg9VgCa7Uz5HL8N1m5D3NdXejP");
  Ya = class extends Fs {
    async getTokenAccount(t, e) {
      const { getAssociatedTokenAddress: r } = await Us(async () => {
        const { getAssociatedTokenAddress: S } = await import("./index-DMhEzukP.js").then(async (m) => {
          await m.__tla;
          return m;
        });
        return {
          getAssociatedTokenAddress: S
        };
      }, __vite__mapDeps([0,1,2,3,4,5,6,7])), o = new se(e).unwrap(), s = new se(t).unwrap(), l = await this.getRpc(), p = await he.getTokenProgramId(l, o), y = await r(o, s, false, p);
      return {
        chain: this.chain,
        address: new se(y.toString())
      };
    }
    async isToken2022(t) {
      if (zr(t)) return false;
      const e = new se(t).unwrap(), r = await this.getRpc();
      return (await he.getTokenProgramId(r, e)).equals(Fr);
    }
  };
  he = (_b = class extends Vs {
    constructor(t, e) {
      super(t, e ?? Hs(t, he._platform));
    }
    getRpc(t, e = {
      commitment: "confirmed",
      disableRetryOnRateLimit: true
    }) {
      if (t in this.config) {
        const r = this.config[t];
        return r.httpHeaders && (e = {
          ...e,
          httpHeaders: {
            ...r.httpHeaders,
            ...e.httpHeaders
          }
        }), new Ps(r.rpc, e);
      }
      throw new Error("No configuration available for chain: " + t);
    }
    getChain(t, e) {
      if (t in this.config) return new Ya(t, this, e);
      throw new Error("No configuration available for chain: " + t);
    }
    static nativeTokenId(t, e) {
      if (!he.isSupportedChain(e)) throw new Error(`invalid chain: ${e}`);
      return $s.chainAddress(e, Ja);
    }
    static isNativeTokenId(t, e, r) {
      return !this.isSupportedChain(e) || r.chain !== e ? false : this.nativeTokenId(t, e) == r;
    }
    static isSupportedChain(t) {
      return Ds(t) === he._platform;
    }
    static async getDecimals(t, e, r, o) {
      if (zr(o)) return Gs(he._platform);
      let s = await r.getParsedAccountInfo(new se(o).unwrap());
      if (!s || !s.value) throw new Error("could not fetch token details");
      const { decimals: l } = s.value.data.parsed.info;
      return l;
    }
    static async getBalance(t, e, r, o, s) {
      const l = new R(o);
      if (zr(s)) return BigInt(await r.getBalance(l));
      const p = await r.getTokenAccountsByOwner(l, {
        mint: new se(s).unwrap()
      }), y = p.value.length > 0 ? p.value[0].pubkey : l, S = await r.getTokenAccountBalance(y);
      return BigInt(S.value.amount);
    }
    static async getBalances(t, e, r, o) {
      const s = BigInt(await r.getBalance(new R(o))), l = (await Promise.all([
        ts,
        Fr
      ].map((y) => new R(y)).map((y) => r.getParsedTokenAccountsByOwner(new R(o), {
        programId: y
      })))).reduce((y, S) => y.concat(S.value), []), p = {
        native: s
      };
      return l.forEach((y) => {
        var _a3, _b2, _c, _d, _e2;
        const S = (_b2 = (_a3 = y.account.data.parsed) == null ? void 0 : _a3.info) == null ? void 0 : _b2.mint, _ = (_e2 = (_d = (_c = y.account.data.parsed) == null ? void 0 : _c.info) == null ? void 0 : _d.tokenAmount) == null ? void 0 : _e2.amount;
        S && _ && (p[S] = BigInt(_));
      }), p;
    }
    static async sendWait(t, e, r, o) {
      const s = await Promise.all(r.map((y) => this.sendTxWithRetry(e, y, o))), l = s.map((y) => y.signature), p = s.filter((y) => y.response.value.err).map((y) => y.response.value.err);
      if (p.length > 0) throw new Error(`Failed to confirm transaction: ${p}`);
      return l;
    }
    static async sendTxWithRetry(t, e, r = {}, o = 5e3) {
      const s = r.preflightCommitment ?? t.commitment, l = await t.sendRawTransaction(e, {
        ...r,
        skipPreflight: false,
        maxRetries: 0,
        preflightCommitment: s
      }), { blockhash: p, lastValidBlockHeight: y } = await t.getLatestBlockhash(), S = t.confirmTransaction({
        signature: l,
        blockhash: p,
        lastValidBlockHeight: y
      }, s);
      let _ = null;
      for (; !_ && (_ = await Promise.race([
        S,
        new Promise((I) => setTimeout(() => {
          I(null);
        }, o))
      ]), !_); ) await t.sendRawTransaction(e, {
        ...r,
        skipPreflight: true,
        maxRetries: 0,
        preflightCommitment: s
      });
      return {
        signature: l,
        response: _
      };
    }
    static async latestBlock(t, e) {
      return t.getLatestBlockhash(e ?? t.commitment);
    }
    static async getLatestBlock(t) {
      return await t.getSlot();
    }
    static async getLatestFinalizedBlock(t) {
      const { lastValidBlockHeight: e } = await this.latestBlock(t, "finalized");
      return e;
    }
    static chainFromChainId(t) {
      const e = js(he._platform, t);
      if (!e) throw new Error(`No matching genesis hash to determine network and chain: ${t}`);
      const [r, o] = e;
      return [
        r,
        o
      ];
    }
    static async chainFromRpc(t) {
      try {
        const e = await t.getGenesisHash();
        return he.chainFromChainId(e);
      } catch (e) {
        if (t.rpcEndpoint.includes("http://127") || t.rpcEndpoint.includes("http://localhost") || t.rpcEndpoint === "http://solana-devnet:8899") return [
          "Devnet",
          "Solana"
        ];
        throw e;
      }
    }
    static async getTokenProgramId(t, e) {
      const r = await t.getAccountInfo(e);
      if (!r) throw new Error(`Mint account not found: ${e.toBase58()}`);
      const o = r.owner;
      if (!o) throw new Error(`Mint account has no owner: ${e.toBase58()}`);
      if (o.equals(ts) || o.equals(Fr)) return o;
      throw new Error(`Mint account has unsupported token program: ${e.toBase58()} (${o.toBase58()})`);
    }
  }, __publicField(_b, "_platform", an), _b);
  gc = class {
    constructor(t, e, r, o, s = false) {
      __publicField(this, "transaction");
      __publicField(this, "network");
      __publicField(this, "chain");
      __publicField(this, "description");
      __publicField(this, "parallelizable");
      this.transaction = t, this.network = e, this.chain = r, this.description = o, this.parallelizable = s;
    }
  };
  yc = function(u) {
    return u.signatures !== void 0 && u.message !== void 0;
  };
  const es = (u) => typeof u == "string" ? me.from(u) : u;
  zs = function(u, t) {
    return R.findProgramAddressSync(Array.isArray(u) ? u.map(es) : [
      es(u)
    ], new R(t))[0];
  };
  Za = function(u, t) {
    return {
      pubkey: new R(u),
      isWritable: true,
      isSigner: t
    };
  };
  Xa = function(u, t) {
    return {
      pubkey: new R(u),
      isWritable: false,
      isSigner: t
    };
  };
  Qa = function(u) {
    if (u === null) throw Error("account info is null");
    return u.data;
  };
  cn = new R("BPFLoaderUpgradeab1e11111111111111111111111");
  tc = function(u) {
    return zs([
      new R(u).toBuffer()
    ], cn);
  };
  function ec(u) {
    return R.findProgramAddressSync([
      new R(u).toBytes()
    ], cn)[0];
  }
  const rs = {
    binary: "uint",
    endianness: "little"
  }, rc = {
    to: (u) => new R(u),
    from: (u) => u.toBytes()
  }, nc = [
    {
      name: "programDataEnumVariant",
      ...rs,
      size: 4,
      custom: 3,
      omit: true
    },
    {
      name: "slot",
      ...rs,
      size: 8
    },
    {
      name: "upgradeAuthority",
      binary: "switch",
      idSize: 1,
      idTag: "isSome",
      layouts: [
        [
          [
            0,
            false
          ],
          [
            {
              name: "_lastValueBeforeImmutability",
              binary: "bytes",
              size: 32
            }
          ]
        ],
        [
          [
            1,
            true
          ],
          [
            {
              name: "value",
              binary: "bytes",
              size: 32,
              custom: rc
            }
          ]
        ]
      ]
    },
    {
      name: "bytecode",
      binary: "bytes"
    }
  ];
  sc = function(u) {
    if (u !== void 0) return {
      connection: u
    };
  };
  mc = Object.freeze(Object.defineProperty({
    __proto__: null,
    BPF_LOADER_UPGRADEABLE_PROGRAM_ID: cn,
    createReadOnlyProvider: sc,
    deriveAddress: zs,
    deriveProgramDataAddress: tc,
    getAccountData: Qa,
    newAccountMeta: Za,
    newReadOnlyAccountMeta: Xa,
    programDataAddress: ec,
    programDataLayout: nc
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  ic = class extends Error {
    constructor(t) {
      super(t), this.name = "IdlError";
    }
  };
  var K = {}, ns;
  wc = function() {
    if (ns) return K;
    ns = 1;
    let u = class {
      constructor(c, a) {
        if (!Number.isInteger(c)) throw new TypeError("span must be an integer");
        this.span = c, this.property = a;
      }
      makeDestinationObject() {
        return {};
      }
      decode(c, a) {
        throw new Error("Layout is abstract");
      }
      encode(c, a, n) {
        throw new Error("Layout is abstract");
      }
      getSpan(c, a) {
        if (0 > this.span) throw new RangeError("indeterminate span");
        return this.span;
      }
      replicate(c) {
        const a = Object.create(this.constructor.prototype);
        return Object.assign(a, this), a.property = c, a;
      }
      fromArray(c) {
      }
    };
    K.Layout = u;
    function t(f, c) {
      return c.property ? f + "[" + c.property + "]" : f;
    }
    K.nameWithProperty = t;
    function e(f, c) {
      if (typeof f != "function") throw new TypeError("Class must be constructor");
      if (f.hasOwnProperty("layout_")) throw new Error("Class is already bound to a layout");
      if (!(c && c instanceof u)) throw new TypeError("layout must be a Layout");
      if (c.hasOwnProperty("boundConstructor_")) throw new Error("layout is already bound to a constructor");
      f.layout_ = c, c.boundConstructor_ = f, c.makeDestinationObject = (() => new f()), Object.defineProperty(f.prototype, "encode", {
        value: function(a, n) {
          return c.encode(this, a, n);
        },
        writable: true
      }), Object.defineProperty(f, "decode", {
        value: function(a, n) {
          return c.decode(a, n);
        },
        writable: true
      });
    }
    K.bindConstructorLayout = e;
    class r extends u {
      isCount() {
        throw new Error("ExternalLayout is abstract");
      }
    }
    class o extends r {
      constructor(c, a) {
        if (c === void 0 && (c = 1), !Number.isInteger(c) || 0 >= c) throw new TypeError("elementSpan must be a (positive) integer");
        super(-1, a), this.elementSpan = c;
      }
      isCount() {
        return true;
      }
      decode(c, a) {
        a === void 0 && (a = 0);
        const n = c.length - a;
        return Math.floor(n / this.elementSpan);
      }
      encode(c, a, n) {
        return 0;
      }
    }
    class s extends r {
      constructor(c, a, n) {
        if (!(c instanceof u)) throw new TypeError("layout must be a Layout");
        if (a === void 0) a = 0;
        else if (!Number.isInteger(a)) throw new TypeError("offset must be integer or undefined");
        super(c.span, n || c.property), this.layout = c, this.offset = a;
      }
      isCount() {
        return this.layout instanceof l || this.layout instanceof p;
      }
      decode(c, a) {
        return a === void 0 && (a = 0), this.layout.decode(c, a + this.offset);
      }
      encode(c, a, n) {
        return n === void 0 && (n = 0), this.layout.encode(c, a, n + this.offset);
      }
    }
    class l extends u {
      constructor(c, a) {
        if (super(c, a), 6 < this.span) throw new RangeError("span must not exceed 6 bytes");
      }
      decode(c, a) {
        return a === void 0 && (a = 0), c.readUIntLE(a, this.span);
      }
      encode(c, a, n) {
        return n === void 0 && (n = 0), a.writeUIntLE(c, n, this.span), this.span;
      }
    }
    class p extends u {
      constructor(c, a) {
        if (super(c, a), 6 < this.span) throw new RangeError("span must not exceed 6 bytes");
      }
      decode(c, a) {
        return a === void 0 && (a = 0), c.readUIntBE(a, this.span);
      }
      encode(c, a, n) {
        return n === void 0 && (n = 0), a.writeUIntBE(c, n, this.span), this.span;
      }
    }
    class y extends u {
      constructor(c, a) {
        if (super(c, a), 6 < this.span) throw new RangeError("span must not exceed 6 bytes");
      }
      decode(c, a) {
        return a === void 0 && (a = 0), c.readIntLE(a, this.span);
      }
      encode(c, a, n) {
        return n === void 0 && (n = 0), a.writeIntLE(c, n, this.span), this.span;
      }
    }
    class S extends u {
      constructor(c, a) {
        if (super(c, a), 6 < this.span) throw new RangeError("span must not exceed 6 bytes");
      }
      decode(c, a) {
        return a === void 0 && (a = 0), c.readIntBE(a, this.span);
      }
      encode(c, a, n) {
        return n === void 0 && (n = 0), a.writeIntBE(c, n, this.span), this.span;
      }
    }
    const _ = Math.pow(2, 32);
    function I(f) {
      const c = Math.floor(f / _), a = f - c * _;
      return {
        hi32: c,
        lo32: a
      };
    }
    function L(f, c) {
      return f * _ + c;
    }
    class x extends u {
      constructor(c) {
        super(8, c);
      }
      decode(c, a) {
        a === void 0 && (a = 0);
        const n = c.readUInt32LE(a), d = c.readUInt32LE(a + 4);
        return L(d, n);
      }
      encode(c, a, n) {
        n === void 0 && (n = 0);
        const d = I(c);
        return a.writeUInt32LE(d.lo32, n), a.writeUInt32LE(d.hi32, n + 4), 8;
      }
    }
    class P extends u {
      constructor(c) {
        super(8, c);
      }
      decode(c, a) {
        a === void 0 && (a = 0);
        const n = c.readUInt32BE(a), d = c.readUInt32BE(a + 4);
        return L(n, d);
      }
      encode(c, a, n) {
        n === void 0 && (n = 0);
        const d = I(c);
        return a.writeUInt32BE(d.hi32, n), a.writeUInt32BE(d.lo32, n + 4), 8;
      }
    }
    class T extends u {
      constructor(c) {
        super(8, c);
      }
      decode(c, a) {
        a === void 0 && (a = 0);
        const n = c.readUInt32LE(a), d = c.readInt32LE(a + 4);
        return L(d, n);
      }
      encode(c, a, n) {
        n === void 0 && (n = 0);
        const d = I(c);
        return a.writeUInt32LE(d.lo32, n), a.writeInt32LE(d.hi32, n + 4), 8;
      }
    }
    class E extends u {
      constructor(c) {
        super(8, c);
      }
      decode(c, a) {
        a === void 0 && (a = 0);
        const n = c.readInt32BE(a), d = c.readUInt32BE(a + 4);
        return L(n, d);
      }
      encode(c, a, n) {
        n === void 0 && (n = 0);
        const d = I(c);
        return a.writeInt32BE(d.hi32, n), a.writeUInt32BE(d.lo32, n + 4), 8;
      }
    }
    class U extends u {
      constructor(c) {
        super(4, c);
      }
      decode(c, a) {
        return a === void 0 && (a = 0), c.readFloatLE(a);
      }
      encode(c, a, n) {
        return n === void 0 && (n = 0), a.writeFloatLE(c, n), 4;
      }
    }
    class J extends u {
      constructor(c) {
        super(4, c);
      }
      decode(c, a) {
        return a === void 0 && (a = 0), c.readFloatBE(a);
      }
      encode(c, a, n) {
        return n === void 0 && (n = 0), a.writeFloatBE(c, n), 4;
      }
    }
    class j extends u {
      constructor(c) {
        super(8, c);
      }
      decode(c, a) {
        return a === void 0 && (a = 0), c.readDoubleLE(a);
      }
      encode(c, a, n) {
        return n === void 0 && (n = 0), a.writeDoubleLE(c, n), 8;
      }
    }
    class Yt extends u {
      constructor(c) {
        super(8, c);
      }
      decode(c, a) {
        return a === void 0 && (a = 0), c.readDoubleBE(a);
      }
      encode(c, a, n) {
        return n === void 0 && (n = 0), a.writeDoubleBE(c, n), 8;
      }
    }
    class ee extends u {
      constructor(c, a, n) {
        if (!(c instanceof u)) throw new TypeError("elementLayout must be a Layout");
        if (!(a instanceof r && a.isCount() || Number.isInteger(a) && 0 <= a)) throw new TypeError("count must be non-negative integer or an unsigned integer ExternalLayout");
        let d = -1;
        !(a instanceof r) && 0 < c.span && (d = a * c.span), super(d, n), this.elementLayout = c, this.count = a;
      }
      getSpan(c, a) {
        if (0 <= this.span) return this.span;
        a === void 0 && (a = 0);
        let n = 0, d = this.count;
        if (d instanceof r && (d = d.decode(c, a)), 0 < this.elementLayout.span) n = d * this.elementLayout.span;
        else {
          let A = 0;
          for (; A < d; ) n += this.elementLayout.getSpan(c, a + n), ++A;
        }
        return n;
      }
      decode(c, a) {
        a === void 0 && (a = 0);
        const n = [];
        let d = 0, A = this.count;
        for (A instanceof r && (A = A.decode(c, a)); d < A; ) n.push(this.elementLayout.decode(c, a)), a += this.elementLayout.getSpan(c, a), d += 1;
        return n;
      }
      encode(c, a, n) {
        n === void 0 && (n = 0);
        const d = this.elementLayout, A = c.reduce((z, W) => z + d.encode(W, a, n + z), 0);
        return this.count instanceof r && this.count.encode(c.length, a, n), A;
      }
    }
    class Zt extends u {
      constructor(c, a, n) {
        if (!(Array.isArray(c) && c.reduce((A, z) => A && z instanceof u, true))) throw new TypeError("fields must be array of Layout instances");
        typeof a == "boolean" && n === void 0 && (n = a, a = void 0);
        for (const A of c) if (0 > A.span && A.property === void 0) throw new Error("fields cannot contain unnamed variable-length layout");
        let d = -1;
        try {
          d = c.reduce((A, z) => A + z.getSpan(), 0);
        } catch {
        }
        super(d, a), this.fields = c, this.decodePrefixes = !!n;
      }
      getSpan(c, a) {
        if (0 <= this.span) return this.span;
        a === void 0 && (a = 0);
        let n = 0;
        try {
          n = this.fields.reduce((d, A) => {
            const z = A.getSpan(c, a);
            return a += z, d + z;
          }, 0);
        } catch {
          throw new RangeError("indeterminate span");
        }
        return n;
      }
      decode(c, a) {
        a === void 0 && (a = 0);
        const n = this.makeDestinationObject();
        for (const d of this.fields) if (d.property !== void 0 && (n[d.property] = d.decode(c, a)), a += d.getSpan(c, a), this.decodePrefixes && c.length === a) break;
        return n;
      }
      encode(c, a, n) {
        n === void 0 && (n = 0);
        const d = n;
        let A = 0, z = 0;
        for (const W of this.fields) {
          let at = W.span;
          if (z = 0 < at ? at : 0, W.property !== void 0) {
            const tt = c[W.property];
            tt !== void 0 && (z = W.encode(tt, a, n), 0 > at && (at = W.getSpan(a, n)));
          }
          A = n, n += at;
        }
        return A + z - d;
      }
      fromArray(c) {
        const a = this.makeDestinationObject();
        for (const n of this.fields) n.property !== void 0 && 0 < c.length && (a[n.property] = c.shift());
        return a;
      }
      layoutFor(c) {
        if (typeof c != "string") throw new TypeError("property must be string");
        for (const a of this.fields) if (a.property === c) return a;
      }
      offsetOf(c) {
        if (typeof c != "string") throw new TypeError("property must be string");
        let a = 0;
        for (const n of this.fields) {
          if (n.property === c) return a;
          0 > n.span ? a = -1 : 0 <= a && (a += n.span);
        }
      }
    }
    class fe {
      constructor(c) {
        this.property = c;
      }
      decode() {
        throw new Error("UnionDiscriminator is abstract");
      }
      encode() {
        throw new Error("UnionDiscriminator is abstract");
      }
    }
    class ye extends fe {
      constructor(c, a) {
        if (!(c instanceof r && c.isCount())) throw new TypeError("layout must be an unsigned integer ExternalLayout");
        super(a || c.property || "variant"), this.layout = c;
      }
      decode(c, a) {
        return this.layout.decode(c, a);
      }
      encode(c, a, n) {
        return this.layout.encode(c, a, n);
      }
    }
    class Ae extends u {
      constructor(c, a, n) {
        const d = c instanceof l || c instanceof p;
        if (d) c = new ye(new s(c));
        else if (c instanceof r && c.isCount()) c = new ye(c);
        else if (!(c instanceof fe)) throw new TypeError("discr must be a UnionDiscriminator or an unsigned integer layout");
        if (a === void 0 && (a = null), !(a === null || a instanceof u)) throw new TypeError("defaultLayout must be null or a Layout");
        if (a !== null) {
          if (0 > a.span) throw new Error("defaultLayout must have constant span");
          a.property === void 0 && (a = a.replicate("content"));
        }
        let A = -1;
        a && (A = a.span, 0 <= A && d && (A += c.layout.span)), super(A, n), this.discriminator = c, this.usesPrefixDiscriminator = d, this.defaultLayout = a, this.registry = {};
        let z = this.defaultGetSourceVariant.bind(this);
        this.getSourceVariant = function(W) {
          return z(W);
        }, this.configGetSourceVariant = function(W) {
          z = W.bind(this);
        };
      }
      getSpan(c, a) {
        if (0 <= this.span) return this.span;
        a === void 0 && (a = 0);
        const n = this.getVariant(c, a);
        if (!n) throw new Error("unable to determine span for unrecognized variant");
        return n.getSpan(c, a);
      }
      defaultGetSourceVariant(c) {
        if (c.hasOwnProperty(this.discriminator.property)) {
          if (this.defaultLayout && c.hasOwnProperty(this.defaultLayout.property)) return;
          const a = this.registry[c[this.discriminator.property]];
          if (a && (!a.layout || c.hasOwnProperty(a.property))) return a;
        } else for (const a in this.registry) {
          const n = this.registry[a];
          if (c.hasOwnProperty(n.property)) return n;
        }
        throw new Error("unable to infer src variant");
      }
      decode(c, a) {
        a === void 0 && (a = 0);
        let n;
        const d = this.discriminator, A = d.decode(c, a);
        let z = this.registry[A];
        if (z === void 0) {
          let W = 0;
          z = this.defaultLayout, this.usesPrefixDiscriminator && (W = d.layout.span), n = this.makeDestinationObject(), n[d.property] = A, n[z.property] = this.defaultLayout.decode(c, a + W);
        } else n = z.decode(c, a);
        return n;
      }
      encode(c, a, n) {
        n === void 0 && (n = 0);
        const d = this.getSourceVariant(c);
        if (d === void 0) {
          const A = this.discriminator, z = this.defaultLayout;
          let W = 0;
          return this.usesPrefixDiscriminator && (W = A.layout.span), A.encode(c[A.property], a, n), W + z.encode(c[z.property], a, n + W);
        }
        return d.encode(c, a, n);
      }
      addVariant(c, a, n) {
        const d = new Ee(this, c, a, n);
        return this.registry[c] = d, d;
      }
      getVariant(c, a) {
        let n = c;
        return me.isBuffer(c) && (a === void 0 && (a = 0), n = this.discriminator.decode(c, a)), this.registry[n];
      }
    }
    class Ee extends u {
      constructor(c, a, n, d) {
        if (!(c instanceof Ae)) throw new TypeError("union must be a Union");
        if (!Number.isInteger(a) || 0 > a) throw new TypeError("variant must be a (non-negative) integer");
        if (typeof n == "string" && d === void 0 && (d = n, n = null), n) {
          if (!(n instanceof u)) throw new TypeError("layout must be a Layout");
          if (c.defaultLayout !== null && 0 <= n.span && n.span > c.defaultLayout.span) throw new Error("variant span exceeds span of containing union");
          if (typeof d != "string") throw new TypeError("variant must have a String property");
        }
        let A = c.span;
        0 > c.span && (A = n ? n.span : 0, 0 <= A && c.usesPrefixDiscriminator && (A += c.discriminator.layout.span)), super(A, d), this.union = c, this.variant = a, this.layout = n || null;
      }
      getSpan(c, a) {
        if (0 <= this.span) return this.span;
        a === void 0 && (a = 0);
        let n = 0;
        return this.union.usesPrefixDiscriminator && (n = this.union.discriminator.layout.span), n + this.layout.getSpan(c, a + n);
      }
      decode(c, a) {
        const n = this.makeDestinationObject();
        if (a === void 0 && (a = 0), this !== this.union.getVariant(c, a)) throw new Error("variant mismatch");
        let d = 0;
        return this.union.usesPrefixDiscriminator && (d = this.union.discriminator.layout.span), this.layout ? n[this.property] = this.layout.decode(c, a + d) : this.property ? n[this.property] = true : this.union.usesPrefixDiscriminator && (n[this.union.discriminator.property] = this.variant), n;
      }
      encode(c, a, n) {
        n === void 0 && (n = 0);
        let d = 0;
        if (this.union.usesPrefixDiscriminator && (d = this.union.discriminator.layout.span), this.layout && !c.hasOwnProperty(this.property)) throw new TypeError("variant lacks property " + this.property);
        this.union.discriminator.encode(this.variant, a, n);
        let A = d;
        if (this.layout && (this.layout.encode(c[this.property], a, n + d), A += this.layout.getSpan(a, n + d), 0 <= this.union.span && A > this.union.span)) throw new Error("encoded variant overruns containing union");
        return A;
      }
      fromArray(c) {
        if (this.layout) return this.layout.fromArray(c);
      }
    }
    function Q(f) {
      return 0 > f && (f += 4294967296), f;
    }
    class ne extends u {
      constructor(c, a, n) {
        if (!(c instanceof l || c instanceof p)) throw new TypeError("word must be a UInt or UIntBE layout");
        if (typeof a == "string" && n === void 0 && (n = a, a = void 0), 4 < c.span) throw new RangeError("word cannot exceed 32 bits");
        super(c.span, n), this.word = c, this.msb = !!a, this.fields = [];
        let d = 0;
        this._packedSetValue = function(A) {
          return d = Q(A), this;
        }, this._packedGetValue = function() {
          return d;
        };
      }
      decode(c, a) {
        const n = this.makeDestinationObject();
        a === void 0 && (a = 0);
        const d = this.word.decode(c, a);
        this._packedSetValue(d);
        for (const A of this.fields) A.property !== void 0 && (n[A.property] = A.decode(d));
        return n;
      }
      encode(c, a, n) {
        n === void 0 && (n = 0);
        const d = this.word.decode(a, n);
        this._packedSetValue(d);
        for (const A of this.fields) if (A.property !== void 0) {
          const z = c[A.property];
          z !== void 0 && A.encode(z);
        }
        return this.word.encode(this._packedGetValue(), a, n);
      }
      addField(c, a) {
        const n = new k(this, c, a);
        return this.fields.push(n), n;
      }
      addBoolean(c) {
        const a = new i(this, c);
        return this.fields.push(a), a;
      }
      fieldFor(c) {
        if (typeof c != "string") throw new TypeError("property must be string");
        for (const a of this.fields) if (a.property === c) return a;
      }
    }
    class k {
      constructor(c, a, n) {
        if (!(c instanceof ne)) throw new TypeError("container must be a BitStructure");
        if (!Number.isInteger(a) || 0 >= a) throw new TypeError("bits must be positive integer");
        const d = 8 * c.span, A = c.fields.reduce((z, W) => z + W.bits, 0);
        if (a + A > d) throw new Error("bits too long for span remainder (" + (d - A) + " of " + d + " remain)");
        this.container = c, this.bits = a, this.valueMask = (1 << a) - 1, a === 32 && (this.valueMask = 4294967295), this.start = A, this.container.msb && (this.start = d - A - a), this.wordMask = Q(this.valueMask << this.start), this.property = n;
      }
      decode() {
        const c = this.container._packedGetValue();
        return Q(c & this.wordMask) >>> this.start;
      }
      encode(c) {
        if (!Number.isInteger(c) || c !== Q(c & this.valueMask)) throw new TypeError(t("BitField.encode", this) + " value must be integer not exceeding " + this.valueMask);
        const a = this.container._packedGetValue(), n = Q(c << this.start);
        this.container._packedSetValue(Q(a & ~this.wordMask) | n);
      }
    }
    class i extends k {
      constructor(c, a) {
        super(c, 1, a);
      }
      decode(c, a) {
        return !!k.prototype.decode.call(this, c, a);
      }
      encode(c) {
        return typeof c == "boolean" && (c = +c), k.prototype.encode.call(this, c);
      }
    }
    class h extends u {
      constructor(c, a) {
        if (!(c instanceof r && c.isCount() || Number.isInteger(c) && 0 <= c)) throw new TypeError("length must be positive integer or an unsigned integer ExternalLayout");
        let n = -1;
        c instanceof r || (n = c), super(n, a), this.length = c;
      }
      getSpan(c, a) {
        let n = this.span;
        return 0 > n && (n = this.length.decode(c, a)), n;
      }
      decode(c, a) {
        a === void 0 && (a = 0);
        let n = this.span;
        return 0 > n && (n = this.length.decode(c, a)), c.slice(a, a + n);
      }
      encode(c, a, n) {
        let d = this.length;
        if (this.length instanceof r && (d = c.length), !(me.isBuffer(c) && d === c.length)) throw new TypeError(t("Blob.encode", this) + " requires (length " + d + ") Buffer as src");
        if (n + d > a.length) throw new RangeError("encoding overruns Buffer");
        return a.write(c.toString("hex"), n, d, "hex"), this.length instanceof r && this.length.encode(d, a, n), d;
      }
    }
    class g extends u {
      constructor(c) {
        super(-1, c);
      }
      getSpan(c, a) {
        if (!me.isBuffer(c)) throw new TypeError("b must be a Buffer");
        a === void 0 && (a = 0);
        let n = a;
        for (; n < c.length && c[n] !== 0; ) n += 1;
        return 1 + n - a;
      }
      decode(c, a, n) {
        a === void 0 && (a = 0);
        let d = this.getSpan(c, a);
        return c.slice(a, a + d - 1).toString("utf-8");
      }
      encode(c, a, n) {
        n === void 0 && (n = 0), typeof c != "string" && (c = c.toString());
        const d = new me(c, "utf8"), A = d.length;
        if (n + A > a.length) throw new RangeError("encoding overruns Buffer");
        return d.copy(a, n), a[n + A] = 0, A + 1;
      }
    }
    class m extends u {
      constructor(c, a) {
        if (typeof c == "string" && a === void 0 && (a = c, c = void 0), c === void 0) c = -1;
        else if (!Number.isInteger(c)) throw new TypeError("maxSpan must be an integer");
        super(-1, a), this.maxSpan = c;
      }
      getSpan(c, a) {
        if (!me.isBuffer(c)) throw new TypeError("b must be a Buffer");
        return a === void 0 && (a = 0), c.length - a;
      }
      decode(c, a, n) {
        a === void 0 && (a = 0);
        let d = this.getSpan(c, a);
        if (0 <= this.maxSpan && this.maxSpan < d) throw new RangeError("text length exceeds maxSpan");
        return c.slice(a, a + d).toString("utf-8");
      }
      encode(c, a, n) {
        n === void 0 && (n = 0), typeof c != "string" && (c = c.toString());
        const d = new me(c, "utf8"), A = d.length;
        if (0 <= this.maxSpan && this.maxSpan < A) throw new RangeError("text length exceeds maxSpan");
        if (n + A > a.length) throw new RangeError("encoding overruns Buffer");
        return d.copy(a, n), A;
      }
    }
    class w extends u {
      constructor(c, a) {
        super(0, a), this.value = c;
      }
      decode(c, a, n) {
        return this.value;
      }
      encode(c, a, n) {
        return 0;
      }
    }
    return K.ExternalLayout = r, K.GreedyCount = o, K.OffsetLayout = s, K.UInt = l, K.UIntBE = p, K.Int = y, K.IntBE = S, K.Float = U, K.FloatBE = J, K.Double = j, K.DoubleBE = Yt, K.Sequence = ee, K.Structure = Zt, K.UnionDiscriminator = fe, K.UnionLayoutDiscriminator = ye, K.Union = Ae, K.VariantLayout = Ee, K.BitStructure = ne, K.BitField = k, K.Boolean = i, K.Blob = h, K.CString = g, K.UTF8 = m, K.Constant = w, K.greedy = ((f, c) => new o(f, c)), K.offset = ((f, c, a) => new s(f, c, a)), K.u8 = ((f) => new l(1, f)), K.u16 = ((f) => new l(2, f)), K.u24 = ((f) => new l(3, f)), K.u32 = ((f) => new l(4, f)), K.u40 = ((f) => new l(5, f)), K.u48 = ((f) => new l(6, f)), K.nu64 = ((f) => new x(f)), K.u16be = ((f) => new p(2, f)), K.u24be = ((f) => new p(3, f)), K.u32be = ((f) => new p(4, f)), K.u40be = ((f) => new p(5, f)), K.u48be = ((f) => new p(6, f)), K.nu64be = ((f) => new P(f)), K.s8 = ((f) => new y(1, f)), K.s16 = ((f) => new y(2, f)), K.s24 = ((f) => new y(3, f)), K.s32 = ((f) => new y(4, f)), K.s40 = ((f) => new y(5, f)), K.s48 = ((f) => new y(6, f)), K.ns64 = ((f) => new T(f)), K.s16be = ((f) => new S(2, f)), K.s24be = ((f) => new S(3, f)), K.s32be = ((f) => new S(4, f)), K.s40be = ((f) => new S(5, f)), K.s48be = ((f) => new S(6, f)), K.ns64be = ((f) => new E(f)), K.f32 = ((f) => new U(f)), K.f32be = ((f) => new J(f)), K.f64 = ((f) => new j(f)), K.f64be = ((f) => new Yt(f)), K.struct = ((f, c, a) => new Zt(f, c, a)), K.bits = ((f, c, a) => new ne(f, c, a)), K.seq = ((f, c, a) => new ee(f, c, a)), K.union = ((f, c, a) => new Ae(f, c, a)), K.unionLayoutDiscriminator = ((f, c) => new ye(f, c)), K.blob = ((f, c) => new h(f, c)), K.cstr = ((f) => new g(f)), K.utf8 = ((f, c) => new m(f, c)), K.const = ((f, c) => new w(f, c)), K;
  };
  oc = function(u, t) {
    switch (t.type.kind) {
      case "struct":
        return t.type.fields.map((e) => ke(u, e.type)).reduce((e, r) => e + r, 0);
      case "enum": {
        const e = t.type.variants.map((r) => r.fields ? r.fields.map((o) => typeof o == "object" && "name" in o ? ke(u, o.type) : ke(u, o)).reduce((o, s) => o + s, 0) : 0);
        return Math.max(...e) + 1;
      }
      case "alias":
        return ke(u, t.type.value);
    }
  };
  function ke(u, t) {
    var _a3;
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
        if ("option" in t) return 1 + ke(u, t.option);
        if ("coption" in t) return 4 + ke(u, t.coption);
        if ("defined" in t) {
          const e = ((_a3 = u.types) == null ? void 0 : _a3.filter((o) => o.name === t.defined)) ?? [];
          if (e.length !== 1) throw new ic(`Type not found: ${JSON.stringify(t)}`);
          let r = e[0];
          return oc(u, r);
        }
        if ("array" in t) {
          let e = t.array[0], r = t.array[1];
          return ke(u, e) * r;
        }
        throw new Error(`Invalid type ${JSON.stringify(t)}`);
    }
  }
  kc = function(u) {
    return u.replace(/(?:^\w|[A-Z]|\b\w)/g, function(t, e) {
      return e === 0 ? t.toLowerCase() : t.toUpperCase();
    }).replace(/[\s\-_]+/g, "");
  };
  vc = function(u) {
    return u.charAt(0).toUpperCase() + u.slice(1);
  };
});
export {
  pc as A,
  cn as B,
  nn as C,
  ic as I,
  Pe as K,
  R as P,
  qe as S,
  ts as T,
  an as _,
  __tla,
  Fr as a,
  oc as b,
  Yr as c,
  he as d,
  yc as e,
  Xr as f,
  se as g,
  Ya as h,
  hc as i,
  gc as j,
  Ja as k,
  kc as l,
  dc as m,
  vc as n,
  mc as o,
  zs as p,
  Qa as q,
  wc as r,
  sc as s,
  Za as t,
  fc as u,
  Xa as v,
  tc as w
};
