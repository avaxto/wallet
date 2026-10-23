const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-Dkg-Yj2z.js","assets/crypto-CoV0x5dM.js","assets/index-Cy2fdchf.js","assets/vendor-BXTw0jaR.js","assets/index-DqgP_Jvc.css","assets/api-V7cxiqtb.js","assets/wormhole-C6xcu0sz.js"])))=>i.map(i=>d[i]);
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { i as je, d as An, j as L, n as v, l as B, m as z, o as x, p as Mr, e as Nt, L as b, q as Vt, R as Cs, C as Ns, t as A, r as ut, v as q, w as Fr, x as rs, y as Qe, z as Vr, A as se, k as En, s as Hr, B as zt, D as zs, W as Os, E as Ks, _ as Ws, __tla as __tla_0 } from "./index-Cy2fdchf.js";
import { U as Rn, f as Mn, b0 as Us, N as Ds, __tla as __tla_1 } from "./api-V7cxiqtb.js";
import { a0 as qs, a as Nr, a3 as Fs, aF as Vs, W as Hs, aN as Gs, aO as js, __tla as __tla_2 } from "./wormhole-C6xcu0sz.js";
import { r as $s, g as Js, B as V, a as dt, b as Ys, c as Zs } from "./crypto-CoV0x5dM.js";
let xn, on, tn, uc, te, Tt, Fi, Qa, xt, lc, _, qt, $r, tr, sn, rc, ft, Yr, gc, nt, Va, hc, Fa, dc, yc, ac, mc, fc, Ls, ja, Xa, Ha, Ga, Ye, Lt, cc, Yn, ot, $a, qr, Y;
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
  var Yt = {
    exports: {}
  }, Xs = Yt.exports, Pn;
  function Qs() {
    return Pn || (Pn = 1, (function(l) {
      (function(e, t) {
        function r(y, i) {
          if (!y) throw new Error(i || "Assertion failed");
        }
        function o(y, i) {
          y.super_ = i;
          var u = function() {
          };
          u.prototype = i.prototype, y.prototype = new u(), y.prototype.constructor = y;
        }
        function s(y, i, u) {
          if (s.isBN(y)) return y;
          this.negative = 0, this.words = null, this.length = 0, this.red = null, y !== null && ((i === "le" || i === "be") && (u = i, i = 10), this._init(y || 0, i || 10, u || "be"));
        }
        typeof e == "object" ? e.exports = s : t.BN = s, s.BN = s, s.wordSize = 26;
        var h;
        try {
          typeof window < "u" && typeof window.Buffer < "u" ? h = window.Buffer : h = $s().Buffer;
        } catch {
        }
        s.isBN = function(i) {
          return i instanceof s ? true : i !== null && typeof i == "object" && i.constructor.wordSize === s.wordSize && Array.isArray(i.words);
        }, s.max = function(i, u) {
          return i.cmp(u) > 0 ? i : u;
        }, s.min = function(i, u) {
          return i.cmp(u) < 0 ? i : u;
        }, s.prototype._init = function(i, u, f) {
          if (typeof i == "number") return this._initNumber(i, u, f);
          if (typeof i == "object") return this._initArray(i, u, f);
          u === "hex" && (u = 16), r(u === (u | 0) && u >= 2 && u <= 36), i = i.toString().replace(/\s+/g, "");
          var m = 0;
          i[0] === "-" && (m++, this.negative = 1), m < i.length && (u === 16 ? this._parseHex(i, m, f) : (this._parseBase(i, u, m), f === "le" && this._initArray(this.toArray(), u, f)));
        }, s.prototype._initNumber = function(i, u, f) {
          i < 0 && (this.negative = 1, i = -i), i < 67108864 ? (this.words = [
            i & 67108863
          ], this.length = 1) : i < 4503599627370496 ? (this.words = [
            i & 67108863,
            i / 67108864 & 67108863
          ], this.length = 2) : (r(i < 9007199254740992), this.words = [
            i & 67108863,
            i / 67108864 & 67108863,
            1
          ], this.length = 3), f === "le" && this._initArray(this.toArray(), u, f);
        }, s.prototype._initArray = function(i, u, f) {
          if (r(typeof i.length == "number"), i.length <= 0) return this.words = [
            0
          ], this.length = 1, this;
          this.length = Math.ceil(i.length / 3), this.words = new Array(this.length);
          for (var m = 0; m < this.length; m++) this.words[m] = 0;
          var k, p, c = 0;
          if (f === "be") for (m = i.length - 1, k = 0; m >= 0; m -= 3) p = i[m] | i[m - 1] << 8 | i[m - 2] << 16, this.words[k] |= p << c & 67108863, this.words[k + 1] = p >>> 26 - c & 67108863, c += 24, c >= 26 && (c -= 26, k++);
          else if (f === "le") for (m = 0, k = 0; m < i.length; m += 3) p = i[m] | i[m + 1] << 8 | i[m + 2] << 16, this.words[k] |= p << c & 67108863, this.words[k + 1] = p >>> 26 - c & 67108863, c += 24, c >= 26 && (c -= 26, k++);
          return this._strip();
        };
        function g(y, i) {
          var u = y.charCodeAt(i);
          if (u >= 48 && u <= 57) return u - 48;
          if (u >= 65 && u <= 70) return u - 55;
          if (u >= 97 && u <= 102) return u - 87;
          r(false, "Invalid character in " + y);
        }
        function w(y, i, u) {
          var f = g(y, u);
          return u - 1 >= i && (f |= g(y, u - 1) << 4), f;
        }
        s.prototype._parseHex = function(i, u, f) {
          this.length = Math.ceil((i.length - u) / 6), this.words = new Array(this.length);
          for (var m = 0; m < this.length; m++) this.words[m] = 0;
          var k = 0, p = 0, c;
          if (f === "be") for (m = i.length - 1; m >= u; m -= 2) c = w(i, u, m) << k, this.words[p] |= c & 67108863, k >= 18 ? (k -= 18, p += 1, this.words[p] |= c >>> 26) : k += 8;
          else {
            var a = i.length - u;
            for (m = a % 2 === 0 ? u + 1 : u; m < i.length; m += 2) c = w(i, u, m) << k, this.words[p] |= c & 67108863, k >= 18 ? (k -= 18, p += 1, this.words[p] |= c >>> 26) : k += 8;
          }
          this._strip();
        };
        function S(y, i, u, f) {
          for (var m = 0, k = 0, p = Math.min(y.length, u), c = i; c < p; c++) {
            var a = y.charCodeAt(c) - 48;
            m *= f, a >= 49 ? k = a - 49 + 10 : a >= 17 ? k = a - 17 + 10 : k = a, r(a >= 0 && k < f, "Invalid character"), m += k;
          }
          return m;
        }
        s.prototype._parseBase = function(i, u, f) {
          this.words = [
            0
          ], this.length = 1;
          for (var m = 0, k = 1; k <= 67108863; k *= u) m++;
          m--, k = k / u | 0;
          for (var p = i.length - f, c = p % m, a = Math.min(p, p - c) + f, n = 0, d = f; d < a; d += m) n = S(i, d, d + m, u), this.imuln(k), this.words[0] + n < 67108864 ? this.words[0] += n : this._iaddn(n);
          if (c !== 0) {
            var I = 1;
            for (n = S(i, d, i.length, u), d = 0; d < c; d++) I *= u;
            this.imuln(I), this.words[0] + n < 67108864 ? this.words[0] += n : this._iaddn(n);
          }
          this._strip();
        }, s.prototype.copy = function(i) {
          i.words = new Array(this.length);
          for (var u = 0; u < this.length; u++) i.words[u] = this.words[u];
          i.length = this.length, i.negative = this.negative, i.red = this.red;
        };
        function R(y, i) {
          y.words = i.words, y.length = i.length, y.negative = i.negative, y.red = i.red;
        }
        if (s.prototype._move = function(i) {
          R(i, this);
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
          s.prototype[Symbol.for("nodejs.util.inspect.custom")] = M;
        } catch {
          s.prototype.inspect = M;
        }
        else s.prototype.inspect = M;
        function M() {
          return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
        }
        var K = [
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
        ], E = [
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
        ], T = [
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
        s.prototype.toString = function(i, u) {
          i = i || 10, u = u | 0 || 1;
          var f;
          if (i === 16 || i === "hex") {
            f = "";
            for (var m = 0, k = 0, p = 0; p < this.length; p++) {
              var c = this.words[p], a = ((c << m | k) & 16777215).toString(16);
              k = c >>> 24 - m & 16777215, m += 2, m >= 26 && (m -= 26, p--), k !== 0 || p !== this.length - 1 ? f = K[6 - a.length] + a + f : f = a + f;
            }
            for (k !== 0 && (f = k.toString(16) + f); f.length % u !== 0; ) f = "0" + f;
            return this.negative !== 0 && (f = "-" + f), f;
          }
          if (i === (i | 0) && i >= 2 && i <= 36) {
            var n = E[i], d = T[i];
            f = "";
            var I = this.clone();
            for (I.negative = 0; !I.isZero(); ) {
              var C = I.modrn(d).toString(i);
              I = I.idivn(d), I.isZero() ? f = C + f : f = K[n - C.length] + C + f;
            }
            for (this.isZero() && (f = "0" + f); f.length % u !== 0; ) f = "0" + f;
            return this.negative !== 0 && (f = "-" + f), f;
          }
          r(false, "Base should be between 2 and 36");
        }, s.prototype.toNumber = function() {
          var i = this.words[0];
          return this.length === 2 ? i += this.words[1] * 67108864 : this.length === 3 && this.words[2] === 1 ? i += 4503599627370496 + this.words[1] * 67108864 : this.length > 2 && r(false, "Number can only safely store up to 53 bits"), this.negative !== 0 ? -i : i;
        }, s.prototype.toJSON = function() {
          return this.toString(16, 2);
        }, h && (s.prototype.toBuffer = function(i, u) {
          return this.toArrayLike(h, i, u);
        }), s.prototype.toArray = function(i, u) {
          return this.toArrayLike(Array, i, u);
        };
        var P = function(i, u) {
          return i.allocUnsafe ? i.allocUnsafe(u) : new i(u);
        };
        s.prototype.toArrayLike = function(i, u, f) {
          this._strip();
          var m = this.byteLength(), k = f || Math.max(1, m);
          r(m <= k, "byte array longer than desired length"), r(k > 0, "Requested array length <= 0");
          var p = P(i, k), c = u === "le" ? "LE" : "BE";
          return this["_toArrayLike" + c](p, m), p;
        }, s.prototype._toArrayLikeLE = function(i, u) {
          for (var f = 0, m = 0, k = 0, p = 0; k < this.length; k++) {
            var c = this.words[k] << p | m;
            i[f++] = c & 255, f < i.length && (i[f++] = c >> 8 & 255), f < i.length && (i[f++] = c >> 16 & 255), p === 6 ? (f < i.length && (i[f++] = c >> 24 & 255), m = 0, p = 0) : (m = c >>> 24, p += 2);
          }
          if (f < i.length) for (i[f++] = m; f < i.length; ) i[f++] = 0;
        }, s.prototype._toArrayLikeBE = function(i, u) {
          for (var f = i.length - 1, m = 0, k = 0, p = 0; k < this.length; k++) {
            var c = this.words[k] << p | m;
            i[f--] = c & 255, f >= 0 && (i[f--] = c >> 8 & 255), f >= 0 && (i[f--] = c >> 16 & 255), p === 6 ? (f >= 0 && (i[f--] = c >> 24 & 255), m = 0, p = 0) : (m = c >>> 24, p += 2);
          }
          if (f >= 0) for (i[f--] = m; f >= 0; ) i[f--] = 0;
        }, Math.clz32 ? s.prototype._countBits = function(i) {
          return 32 - Math.clz32(i);
        } : s.prototype._countBits = function(i) {
          var u = i, f = 0;
          return u >= 4096 && (f += 13, u >>>= 13), u >= 64 && (f += 7, u >>>= 7), u >= 8 && (f += 4, u >>>= 4), u >= 2 && (f += 2, u >>>= 2), f + u;
        }, s.prototype._zeroBits = function(i) {
          if (i === 0) return 26;
          var u = i, f = 0;
          return (u & 8191) === 0 && (f += 13, u >>>= 13), (u & 127) === 0 && (f += 7, u >>>= 7), (u & 15) === 0 && (f += 4, u >>>= 4), (u & 3) === 0 && (f += 2, u >>>= 2), (u & 1) === 0 && f++, f;
        }, s.prototype.bitLength = function() {
          var i = this.words[this.length - 1], u = this._countBits(i);
          return (this.length - 1) * 26 + u;
        };
        function N(y) {
          for (var i = new Array(y.bitLength()), u = 0; u < i.length; u++) {
            var f = u / 26 | 0, m = u % 26;
            i[u] = y.words[f] >>> m & 1;
          }
          return i;
        }
        s.prototype.zeroBits = function() {
          if (this.isZero()) return 0;
          for (var i = 0, u = 0; u < this.length; u++) {
            var f = this._zeroBits(this.words[u]);
            if (i += f, f !== 26) break;
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
          for (var u = 0; u < i.length; u++) this.words[u] = this.words[u] | i.words[u];
          return this._strip();
        }, s.prototype.ior = function(i) {
          return r((this.negative | i.negative) === 0), this.iuor(i);
        }, s.prototype.or = function(i) {
          return this.length > i.length ? this.clone().ior(i) : i.clone().ior(this);
        }, s.prototype.uor = function(i) {
          return this.length > i.length ? this.clone().iuor(i) : i.clone().iuor(this);
        }, s.prototype.iuand = function(i) {
          var u;
          this.length > i.length ? u = i : u = this;
          for (var f = 0; f < u.length; f++) this.words[f] = this.words[f] & i.words[f];
          return this.length = u.length, this._strip();
        }, s.prototype.iand = function(i) {
          return r((this.negative | i.negative) === 0), this.iuand(i);
        }, s.prototype.and = function(i) {
          return this.length > i.length ? this.clone().iand(i) : i.clone().iand(this);
        }, s.prototype.uand = function(i) {
          return this.length > i.length ? this.clone().iuand(i) : i.clone().iuand(this);
        }, s.prototype.iuxor = function(i) {
          var u, f;
          this.length > i.length ? (u = this, f = i) : (u = i, f = this);
          for (var m = 0; m < f.length; m++) this.words[m] = u.words[m] ^ f.words[m];
          if (this !== u) for (; m < u.length; m++) this.words[m] = u.words[m];
          return this.length = u.length, this._strip();
        }, s.prototype.ixor = function(i) {
          return r((this.negative | i.negative) === 0), this.iuxor(i);
        }, s.prototype.xor = function(i) {
          return this.length > i.length ? this.clone().ixor(i) : i.clone().ixor(this);
        }, s.prototype.uxor = function(i) {
          return this.length > i.length ? this.clone().iuxor(i) : i.clone().iuxor(this);
        }, s.prototype.inotn = function(i) {
          r(typeof i == "number" && i >= 0);
          var u = Math.ceil(i / 26) | 0, f = i % 26;
          this._expand(u), f > 0 && u--;
          for (var m = 0; m < u; m++) this.words[m] = ~this.words[m] & 67108863;
          for (f > 0 && (this.words[m] = ~this.words[m] & 67108863 >> 26 - f, m++); m < this.length; m++) this.words[m] = 0;
          return this._strip();
        }, s.prototype.notn = function(i) {
          return this.clone().inotn(i);
        }, s.prototype.setn = function(i, u) {
          r(typeof i == "number" && i >= 0);
          var f = i / 26 | 0, m = i % 26;
          return this._expand(f + 1), u ? this.words[f] = this.words[f] | 1 << m : this.words[f] = this.words[f] & ~(1 << m), this._strip();
        }, s.prototype.iadd = function(i) {
          var u;
          if (this.negative !== 0 && i.negative === 0) return this.negative = 0, u = this.isub(i), this.negative ^= 1, this._normSign();
          if (this.negative === 0 && i.negative !== 0) return i.negative = 0, u = this.isub(i), i.negative = 1, u._normSign();
          var f, m;
          this.length > i.length ? (f = this, m = i) : (f = i, m = this);
          for (var k = 0, p = 0; p < m.length; p++) u = (f.words[p] | 0) + (m.words[p] | 0) + k, this.words[p] = u & 67108863, k = u >>> 26;
          for (; k !== 0 && p < f.length; p++) u = (f.words[p] | 0) + k, this.words[p] = u & 67108863, k = u >>> 26;
          if (this.length = f.length, k !== 0) this.words[this.length] = k, this.length++;
          else if (f !== this) for (; p < f.length; p++) this.words[p] = f.words[p];
          return this;
        }, s.prototype.add = function(i) {
          var u;
          return i.negative !== 0 && this.negative === 0 ? (i.negative = 0, u = this.sub(i), i.negative ^= 1, u) : i.negative === 0 && this.negative !== 0 ? (this.negative = 0, u = i.sub(this), this.negative = 1, u) : this.length > i.length ? this.clone().iadd(i) : i.clone().iadd(this);
        }, s.prototype.isub = function(i) {
          if (i.negative !== 0) {
            i.negative = 0;
            var u = this.iadd(i);
            return i.negative = 1, u._normSign();
          } else if (this.negative !== 0) return this.negative = 0, this.iadd(i), this.negative = 1, this._normSign();
          var f = this.cmp(i);
          if (f === 0) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
          var m, k;
          f > 0 ? (m = this, k = i) : (m = i, k = this);
          for (var p = 0, c = 0; c < k.length; c++) u = (m.words[c] | 0) - (k.words[c] | 0) + p, p = u >> 26, this.words[c] = u & 67108863;
          for (; p !== 0 && c < m.length; c++) u = (m.words[c] | 0) + p, p = u >> 26, this.words[c] = u & 67108863;
          if (p === 0 && c < m.length && m !== this) for (; c < m.length; c++) this.words[c] = m.words[c];
          return this.length = Math.max(this.length, c), m !== this && (this.negative = 1), this._strip();
        }, s.prototype.sub = function(i) {
          return this.clone().isub(i);
        };
        function F(y, i, u) {
          u.negative = i.negative ^ y.negative;
          var f = y.length + i.length | 0;
          u.length = f, f = f - 1 | 0;
          var m = y.words[0] | 0, k = i.words[0] | 0, p = m * k, c = p & 67108863, a = p / 67108864 | 0;
          u.words[0] = c;
          for (var n = 1; n < f; n++) {
            for (var d = a >>> 26, I = a & 67108863, C = Math.min(n, i.length - 1), W = Math.max(0, n - y.length + 1); W <= C; W++) {
              var ae = n - W | 0;
              m = y.words[ae] | 0, k = i.words[W] | 0, p = m * k + I, d += p / 67108864 | 0, I = p & 67108863;
            }
            u.words[n] = I | 0, a = d | 0;
          }
          return a !== 0 ? u.words[n] = a | 0 : u.length--, u._strip();
        }
        var Q = function(i, u, f) {
          var m = i.words, k = u.words, p = f.words, c = 0, a, n, d, I = m[0] | 0, C = I & 8191, W = I >>> 13, ae = m[1] | 0, ee = ae & 8191, ie = ae >>> 13, an = m[2] | 0, ue = an & 8191, le = an >>> 13, cn = m[3] | 0, he = cn & 8191, de = cn >>> 13, un = m[4] | 0, fe = un & 8191, pe = un >>> 13, ln = m[5] | 0, ge = ln & 8191, ye = ln >>> 13, hn = m[6] | 0, me = hn & 8191, be = hn >>> 13, dn = m[7] | 0, we = dn & 8191, ke = dn >>> 13, fn = m[8] | 0, ve = fn & 8191, Se = fn >>> 13, pn = m[9] | 0, Ie = pn & 8191, _e = pn >>> 13, gn = k[0] | 0, Ae = gn & 8191, Ee = gn >>> 13, yn = k[1] | 0, Re = yn & 8191, Me = yn >>> 13, mn = k[2] | 0, Pe = mn & 8191, xe = mn >>> 13, bn = k[3] | 0, Te = bn & 8191, Be = bn >>> 13, wn = k[4] | 0, Le = wn & 8191, Ce = wn >>> 13, kn = k[5] | 0, Ne = kn & 8191, ze = kn >>> 13, vn = k[6] | 0, Oe = vn & 8191, Ke = vn >>> 13, Sn = k[7] | 0, We = Sn & 8191, Ue = Sn >>> 13, In = k[8] | 0, De = In & 8191, qe = In >>> 13, _n = k[9] | 0, Fe = _n & 8191, Ve = _n >>> 13;
          f.negative = i.negative ^ u.negative, f.length = 19, a = Math.imul(C, Ae), n = Math.imul(C, Ee), n = n + Math.imul(W, Ae) | 0, d = Math.imul(W, Ee);
          var ur = (c + a | 0) + ((n & 8191) << 13) | 0;
          c = (d + (n >>> 13) | 0) + (ur >>> 26) | 0, ur &= 67108863, a = Math.imul(ee, Ae), n = Math.imul(ee, Ee), n = n + Math.imul(ie, Ae) | 0, d = Math.imul(ie, Ee), a = a + Math.imul(C, Re) | 0, n = n + Math.imul(C, Me) | 0, n = n + Math.imul(W, Re) | 0, d = d + Math.imul(W, Me) | 0;
          var lr = (c + a | 0) + ((n & 8191) << 13) | 0;
          c = (d + (n >>> 13) | 0) + (lr >>> 26) | 0, lr &= 67108863, a = Math.imul(ue, Ae), n = Math.imul(ue, Ee), n = n + Math.imul(le, Ae) | 0, d = Math.imul(le, Ee), a = a + Math.imul(ee, Re) | 0, n = n + Math.imul(ee, Me) | 0, n = n + Math.imul(ie, Re) | 0, d = d + Math.imul(ie, Me) | 0, a = a + Math.imul(C, Pe) | 0, n = n + Math.imul(C, xe) | 0, n = n + Math.imul(W, Pe) | 0, d = d + Math.imul(W, xe) | 0;
          var hr = (c + a | 0) + ((n & 8191) << 13) | 0;
          c = (d + (n >>> 13) | 0) + (hr >>> 26) | 0, hr &= 67108863, a = Math.imul(he, Ae), n = Math.imul(he, Ee), n = n + Math.imul(de, Ae) | 0, d = Math.imul(de, Ee), a = a + Math.imul(ue, Re) | 0, n = n + Math.imul(ue, Me) | 0, n = n + Math.imul(le, Re) | 0, d = d + Math.imul(le, Me) | 0, a = a + Math.imul(ee, Pe) | 0, n = n + Math.imul(ee, xe) | 0, n = n + Math.imul(ie, Pe) | 0, d = d + Math.imul(ie, xe) | 0, a = a + Math.imul(C, Te) | 0, n = n + Math.imul(C, Be) | 0, n = n + Math.imul(W, Te) | 0, d = d + Math.imul(W, Be) | 0;
          var dr = (c + a | 0) + ((n & 8191) << 13) | 0;
          c = (d + (n >>> 13) | 0) + (dr >>> 26) | 0, dr &= 67108863, a = Math.imul(fe, Ae), n = Math.imul(fe, Ee), n = n + Math.imul(pe, Ae) | 0, d = Math.imul(pe, Ee), a = a + Math.imul(he, Re) | 0, n = n + Math.imul(he, Me) | 0, n = n + Math.imul(de, Re) | 0, d = d + Math.imul(de, Me) | 0, a = a + Math.imul(ue, Pe) | 0, n = n + Math.imul(ue, xe) | 0, n = n + Math.imul(le, Pe) | 0, d = d + Math.imul(le, xe) | 0, a = a + Math.imul(ee, Te) | 0, n = n + Math.imul(ee, Be) | 0, n = n + Math.imul(ie, Te) | 0, d = d + Math.imul(ie, Be) | 0, a = a + Math.imul(C, Le) | 0, n = n + Math.imul(C, Ce) | 0, n = n + Math.imul(W, Le) | 0, d = d + Math.imul(W, Ce) | 0;
          var fr = (c + a | 0) + ((n & 8191) << 13) | 0;
          c = (d + (n >>> 13) | 0) + (fr >>> 26) | 0, fr &= 67108863, a = Math.imul(ge, Ae), n = Math.imul(ge, Ee), n = n + Math.imul(ye, Ae) | 0, d = Math.imul(ye, Ee), a = a + Math.imul(fe, Re) | 0, n = n + Math.imul(fe, Me) | 0, n = n + Math.imul(pe, Re) | 0, d = d + Math.imul(pe, Me) | 0, a = a + Math.imul(he, Pe) | 0, n = n + Math.imul(he, xe) | 0, n = n + Math.imul(de, Pe) | 0, d = d + Math.imul(de, xe) | 0, a = a + Math.imul(ue, Te) | 0, n = n + Math.imul(ue, Be) | 0, n = n + Math.imul(le, Te) | 0, d = d + Math.imul(le, Be) | 0, a = a + Math.imul(ee, Le) | 0, n = n + Math.imul(ee, Ce) | 0, n = n + Math.imul(ie, Le) | 0, d = d + Math.imul(ie, Ce) | 0, a = a + Math.imul(C, Ne) | 0, n = n + Math.imul(C, ze) | 0, n = n + Math.imul(W, Ne) | 0, d = d + Math.imul(W, ze) | 0;
          var pr = (c + a | 0) + ((n & 8191) << 13) | 0;
          c = (d + (n >>> 13) | 0) + (pr >>> 26) | 0, pr &= 67108863, a = Math.imul(me, Ae), n = Math.imul(me, Ee), n = n + Math.imul(be, Ae) | 0, d = Math.imul(be, Ee), a = a + Math.imul(ge, Re) | 0, n = n + Math.imul(ge, Me) | 0, n = n + Math.imul(ye, Re) | 0, d = d + Math.imul(ye, Me) | 0, a = a + Math.imul(fe, Pe) | 0, n = n + Math.imul(fe, xe) | 0, n = n + Math.imul(pe, Pe) | 0, d = d + Math.imul(pe, xe) | 0, a = a + Math.imul(he, Te) | 0, n = n + Math.imul(he, Be) | 0, n = n + Math.imul(de, Te) | 0, d = d + Math.imul(de, Be) | 0, a = a + Math.imul(ue, Le) | 0, n = n + Math.imul(ue, Ce) | 0, n = n + Math.imul(le, Le) | 0, d = d + Math.imul(le, Ce) | 0, a = a + Math.imul(ee, Ne) | 0, n = n + Math.imul(ee, ze) | 0, n = n + Math.imul(ie, Ne) | 0, d = d + Math.imul(ie, ze) | 0, a = a + Math.imul(C, Oe) | 0, n = n + Math.imul(C, Ke) | 0, n = n + Math.imul(W, Oe) | 0, d = d + Math.imul(W, Ke) | 0;
          var gr = (c + a | 0) + ((n & 8191) << 13) | 0;
          c = (d + (n >>> 13) | 0) + (gr >>> 26) | 0, gr &= 67108863, a = Math.imul(we, Ae), n = Math.imul(we, Ee), n = n + Math.imul(ke, Ae) | 0, d = Math.imul(ke, Ee), a = a + Math.imul(me, Re) | 0, n = n + Math.imul(me, Me) | 0, n = n + Math.imul(be, Re) | 0, d = d + Math.imul(be, Me) | 0, a = a + Math.imul(ge, Pe) | 0, n = n + Math.imul(ge, xe) | 0, n = n + Math.imul(ye, Pe) | 0, d = d + Math.imul(ye, xe) | 0, a = a + Math.imul(fe, Te) | 0, n = n + Math.imul(fe, Be) | 0, n = n + Math.imul(pe, Te) | 0, d = d + Math.imul(pe, Be) | 0, a = a + Math.imul(he, Le) | 0, n = n + Math.imul(he, Ce) | 0, n = n + Math.imul(de, Le) | 0, d = d + Math.imul(de, Ce) | 0, a = a + Math.imul(ue, Ne) | 0, n = n + Math.imul(ue, ze) | 0, n = n + Math.imul(le, Ne) | 0, d = d + Math.imul(le, ze) | 0, a = a + Math.imul(ee, Oe) | 0, n = n + Math.imul(ee, Ke) | 0, n = n + Math.imul(ie, Oe) | 0, d = d + Math.imul(ie, Ke) | 0, a = a + Math.imul(C, We) | 0, n = n + Math.imul(C, Ue) | 0, n = n + Math.imul(W, We) | 0, d = d + Math.imul(W, Ue) | 0;
          var yr = (c + a | 0) + ((n & 8191) << 13) | 0;
          c = (d + (n >>> 13) | 0) + (yr >>> 26) | 0, yr &= 67108863, a = Math.imul(ve, Ae), n = Math.imul(ve, Ee), n = n + Math.imul(Se, Ae) | 0, d = Math.imul(Se, Ee), a = a + Math.imul(we, Re) | 0, n = n + Math.imul(we, Me) | 0, n = n + Math.imul(ke, Re) | 0, d = d + Math.imul(ke, Me) | 0, a = a + Math.imul(me, Pe) | 0, n = n + Math.imul(me, xe) | 0, n = n + Math.imul(be, Pe) | 0, d = d + Math.imul(be, xe) | 0, a = a + Math.imul(ge, Te) | 0, n = n + Math.imul(ge, Be) | 0, n = n + Math.imul(ye, Te) | 0, d = d + Math.imul(ye, Be) | 0, a = a + Math.imul(fe, Le) | 0, n = n + Math.imul(fe, Ce) | 0, n = n + Math.imul(pe, Le) | 0, d = d + Math.imul(pe, Ce) | 0, a = a + Math.imul(he, Ne) | 0, n = n + Math.imul(he, ze) | 0, n = n + Math.imul(de, Ne) | 0, d = d + Math.imul(de, ze) | 0, a = a + Math.imul(ue, Oe) | 0, n = n + Math.imul(ue, Ke) | 0, n = n + Math.imul(le, Oe) | 0, d = d + Math.imul(le, Ke) | 0, a = a + Math.imul(ee, We) | 0, n = n + Math.imul(ee, Ue) | 0, n = n + Math.imul(ie, We) | 0, d = d + Math.imul(ie, Ue) | 0, a = a + Math.imul(C, De) | 0, n = n + Math.imul(C, qe) | 0, n = n + Math.imul(W, De) | 0, d = d + Math.imul(W, qe) | 0;
          var mr = (c + a | 0) + ((n & 8191) << 13) | 0;
          c = (d + (n >>> 13) | 0) + (mr >>> 26) | 0, mr &= 67108863, a = Math.imul(Ie, Ae), n = Math.imul(Ie, Ee), n = n + Math.imul(_e, Ae) | 0, d = Math.imul(_e, Ee), a = a + Math.imul(ve, Re) | 0, n = n + Math.imul(ve, Me) | 0, n = n + Math.imul(Se, Re) | 0, d = d + Math.imul(Se, Me) | 0, a = a + Math.imul(we, Pe) | 0, n = n + Math.imul(we, xe) | 0, n = n + Math.imul(ke, Pe) | 0, d = d + Math.imul(ke, xe) | 0, a = a + Math.imul(me, Te) | 0, n = n + Math.imul(me, Be) | 0, n = n + Math.imul(be, Te) | 0, d = d + Math.imul(be, Be) | 0, a = a + Math.imul(ge, Le) | 0, n = n + Math.imul(ge, Ce) | 0, n = n + Math.imul(ye, Le) | 0, d = d + Math.imul(ye, Ce) | 0, a = a + Math.imul(fe, Ne) | 0, n = n + Math.imul(fe, ze) | 0, n = n + Math.imul(pe, Ne) | 0, d = d + Math.imul(pe, ze) | 0, a = a + Math.imul(he, Oe) | 0, n = n + Math.imul(he, Ke) | 0, n = n + Math.imul(de, Oe) | 0, d = d + Math.imul(de, Ke) | 0, a = a + Math.imul(ue, We) | 0, n = n + Math.imul(ue, Ue) | 0, n = n + Math.imul(le, We) | 0, d = d + Math.imul(le, Ue) | 0, a = a + Math.imul(ee, De) | 0, n = n + Math.imul(ee, qe) | 0, n = n + Math.imul(ie, De) | 0, d = d + Math.imul(ie, qe) | 0, a = a + Math.imul(C, Fe) | 0, n = n + Math.imul(C, Ve) | 0, n = n + Math.imul(W, Fe) | 0, d = d + Math.imul(W, Ve) | 0;
          var br = (c + a | 0) + ((n & 8191) << 13) | 0;
          c = (d + (n >>> 13) | 0) + (br >>> 26) | 0, br &= 67108863, a = Math.imul(Ie, Re), n = Math.imul(Ie, Me), n = n + Math.imul(_e, Re) | 0, d = Math.imul(_e, Me), a = a + Math.imul(ve, Pe) | 0, n = n + Math.imul(ve, xe) | 0, n = n + Math.imul(Se, Pe) | 0, d = d + Math.imul(Se, xe) | 0, a = a + Math.imul(we, Te) | 0, n = n + Math.imul(we, Be) | 0, n = n + Math.imul(ke, Te) | 0, d = d + Math.imul(ke, Be) | 0, a = a + Math.imul(me, Le) | 0, n = n + Math.imul(me, Ce) | 0, n = n + Math.imul(be, Le) | 0, d = d + Math.imul(be, Ce) | 0, a = a + Math.imul(ge, Ne) | 0, n = n + Math.imul(ge, ze) | 0, n = n + Math.imul(ye, Ne) | 0, d = d + Math.imul(ye, ze) | 0, a = a + Math.imul(fe, Oe) | 0, n = n + Math.imul(fe, Ke) | 0, n = n + Math.imul(pe, Oe) | 0, d = d + Math.imul(pe, Ke) | 0, a = a + Math.imul(he, We) | 0, n = n + Math.imul(he, Ue) | 0, n = n + Math.imul(de, We) | 0, d = d + Math.imul(de, Ue) | 0, a = a + Math.imul(ue, De) | 0, n = n + Math.imul(ue, qe) | 0, n = n + Math.imul(le, De) | 0, d = d + Math.imul(le, qe) | 0, a = a + Math.imul(ee, Fe) | 0, n = n + Math.imul(ee, Ve) | 0, n = n + Math.imul(ie, Fe) | 0, d = d + Math.imul(ie, Ve) | 0;
          var wr = (c + a | 0) + ((n & 8191) << 13) | 0;
          c = (d + (n >>> 13) | 0) + (wr >>> 26) | 0, wr &= 67108863, a = Math.imul(Ie, Pe), n = Math.imul(Ie, xe), n = n + Math.imul(_e, Pe) | 0, d = Math.imul(_e, xe), a = a + Math.imul(ve, Te) | 0, n = n + Math.imul(ve, Be) | 0, n = n + Math.imul(Se, Te) | 0, d = d + Math.imul(Se, Be) | 0, a = a + Math.imul(we, Le) | 0, n = n + Math.imul(we, Ce) | 0, n = n + Math.imul(ke, Le) | 0, d = d + Math.imul(ke, Ce) | 0, a = a + Math.imul(me, Ne) | 0, n = n + Math.imul(me, ze) | 0, n = n + Math.imul(be, Ne) | 0, d = d + Math.imul(be, ze) | 0, a = a + Math.imul(ge, Oe) | 0, n = n + Math.imul(ge, Ke) | 0, n = n + Math.imul(ye, Oe) | 0, d = d + Math.imul(ye, Ke) | 0, a = a + Math.imul(fe, We) | 0, n = n + Math.imul(fe, Ue) | 0, n = n + Math.imul(pe, We) | 0, d = d + Math.imul(pe, Ue) | 0, a = a + Math.imul(he, De) | 0, n = n + Math.imul(he, qe) | 0, n = n + Math.imul(de, De) | 0, d = d + Math.imul(de, qe) | 0, a = a + Math.imul(ue, Fe) | 0, n = n + Math.imul(ue, Ve) | 0, n = n + Math.imul(le, Fe) | 0, d = d + Math.imul(le, Ve) | 0;
          var kr = (c + a | 0) + ((n & 8191) << 13) | 0;
          c = (d + (n >>> 13) | 0) + (kr >>> 26) | 0, kr &= 67108863, a = Math.imul(Ie, Te), n = Math.imul(Ie, Be), n = n + Math.imul(_e, Te) | 0, d = Math.imul(_e, Be), a = a + Math.imul(ve, Le) | 0, n = n + Math.imul(ve, Ce) | 0, n = n + Math.imul(Se, Le) | 0, d = d + Math.imul(Se, Ce) | 0, a = a + Math.imul(we, Ne) | 0, n = n + Math.imul(we, ze) | 0, n = n + Math.imul(ke, Ne) | 0, d = d + Math.imul(ke, ze) | 0, a = a + Math.imul(me, Oe) | 0, n = n + Math.imul(me, Ke) | 0, n = n + Math.imul(be, Oe) | 0, d = d + Math.imul(be, Ke) | 0, a = a + Math.imul(ge, We) | 0, n = n + Math.imul(ge, Ue) | 0, n = n + Math.imul(ye, We) | 0, d = d + Math.imul(ye, Ue) | 0, a = a + Math.imul(fe, De) | 0, n = n + Math.imul(fe, qe) | 0, n = n + Math.imul(pe, De) | 0, d = d + Math.imul(pe, qe) | 0, a = a + Math.imul(he, Fe) | 0, n = n + Math.imul(he, Ve) | 0, n = n + Math.imul(de, Fe) | 0, d = d + Math.imul(de, Ve) | 0;
          var vr = (c + a | 0) + ((n & 8191) << 13) | 0;
          c = (d + (n >>> 13) | 0) + (vr >>> 26) | 0, vr &= 67108863, a = Math.imul(Ie, Le), n = Math.imul(Ie, Ce), n = n + Math.imul(_e, Le) | 0, d = Math.imul(_e, Ce), a = a + Math.imul(ve, Ne) | 0, n = n + Math.imul(ve, ze) | 0, n = n + Math.imul(Se, Ne) | 0, d = d + Math.imul(Se, ze) | 0, a = a + Math.imul(we, Oe) | 0, n = n + Math.imul(we, Ke) | 0, n = n + Math.imul(ke, Oe) | 0, d = d + Math.imul(ke, Ke) | 0, a = a + Math.imul(me, We) | 0, n = n + Math.imul(me, Ue) | 0, n = n + Math.imul(be, We) | 0, d = d + Math.imul(be, Ue) | 0, a = a + Math.imul(ge, De) | 0, n = n + Math.imul(ge, qe) | 0, n = n + Math.imul(ye, De) | 0, d = d + Math.imul(ye, qe) | 0, a = a + Math.imul(fe, Fe) | 0, n = n + Math.imul(fe, Ve) | 0, n = n + Math.imul(pe, Fe) | 0, d = d + Math.imul(pe, Ve) | 0;
          var Sr = (c + a | 0) + ((n & 8191) << 13) | 0;
          c = (d + (n >>> 13) | 0) + (Sr >>> 26) | 0, Sr &= 67108863, a = Math.imul(Ie, Ne), n = Math.imul(Ie, ze), n = n + Math.imul(_e, Ne) | 0, d = Math.imul(_e, ze), a = a + Math.imul(ve, Oe) | 0, n = n + Math.imul(ve, Ke) | 0, n = n + Math.imul(Se, Oe) | 0, d = d + Math.imul(Se, Ke) | 0, a = a + Math.imul(we, We) | 0, n = n + Math.imul(we, Ue) | 0, n = n + Math.imul(ke, We) | 0, d = d + Math.imul(ke, Ue) | 0, a = a + Math.imul(me, De) | 0, n = n + Math.imul(me, qe) | 0, n = n + Math.imul(be, De) | 0, d = d + Math.imul(be, qe) | 0, a = a + Math.imul(ge, Fe) | 0, n = n + Math.imul(ge, Ve) | 0, n = n + Math.imul(ye, Fe) | 0, d = d + Math.imul(ye, Ve) | 0;
          var Ir = (c + a | 0) + ((n & 8191) << 13) | 0;
          c = (d + (n >>> 13) | 0) + (Ir >>> 26) | 0, Ir &= 67108863, a = Math.imul(Ie, Oe), n = Math.imul(Ie, Ke), n = n + Math.imul(_e, Oe) | 0, d = Math.imul(_e, Ke), a = a + Math.imul(ve, We) | 0, n = n + Math.imul(ve, Ue) | 0, n = n + Math.imul(Se, We) | 0, d = d + Math.imul(Se, Ue) | 0, a = a + Math.imul(we, De) | 0, n = n + Math.imul(we, qe) | 0, n = n + Math.imul(ke, De) | 0, d = d + Math.imul(ke, qe) | 0, a = a + Math.imul(me, Fe) | 0, n = n + Math.imul(me, Ve) | 0, n = n + Math.imul(be, Fe) | 0, d = d + Math.imul(be, Ve) | 0;
          var _r = (c + a | 0) + ((n & 8191) << 13) | 0;
          c = (d + (n >>> 13) | 0) + (_r >>> 26) | 0, _r &= 67108863, a = Math.imul(Ie, We), n = Math.imul(Ie, Ue), n = n + Math.imul(_e, We) | 0, d = Math.imul(_e, Ue), a = a + Math.imul(ve, De) | 0, n = n + Math.imul(ve, qe) | 0, n = n + Math.imul(Se, De) | 0, d = d + Math.imul(Se, qe) | 0, a = a + Math.imul(we, Fe) | 0, n = n + Math.imul(we, Ve) | 0, n = n + Math.imul(ke, Fe) | 0, d = d + Math.imul(ke, Ve) | 0;
          var Ar = (c + a | 0) + ((n & 8191) << 13) | 0;
          c = (d + (n >>> 13) | 0) + (Ar >>> 26) | 0, Ar &= 67108863, a = Math.imul(Ie, De), n = Math.imul(Ie, qe), n = n + Math.imul(_e, De) | 0, d = Math.imul(_e, qe), a = a + Math.imul(ve, Fe) | 0, n = n + Math.imul(ve, Ve) | 0, n = n + Math.imul(Se, Fe) | 0, d = d + Math.imul(Se, Ve) | 0;
          var Er = (c + a | 0) + ((n & 8191) << 13) | 0;
          c = (d + (n >>> 13) | 0) + (Er >>> 26) | 0, Er &= 67108863, a = Math.imul(Ie, Fe), n = Math.imul(Ie, Ve), n = n + Math.imul(_e, Fe) | 0, d = Math.imul(_e, Ve);
          var Rr = (c + a | 0) + ((n & 8191) << 13) | 0;
          return c = (d + (n >>> 13) | 0) + (Rr >>> 26) | 0, Rr &= 67108863, p[0] = ur, p[1] = lr, p[2] = hr, p[3] = dr, p[4] = fr, p[5] = pr, p[6] = gr, p[7] = yr, p[8] = mr, p[9] = br, p[10] = wr, p[11] = kr, p[12] = vr, p[13] = Sr, p[14] = Ir, p[15] = _r, p[16] = Ar, p[17] = Er, p[18] = Rr, c !== 0 && (p[19] = c, f.length++), f;
        };
        Math.imul || (Q = F);
        function Ze(y, i, u) {
          u.negative = i.negative ^ y.negative, u.length = y.length + i.length;
          for (var f = 0, m = 0, k = 0; k < u.length - 1; k++) {
            var p = m;
            m = 0;
            for (var c = f & 67108863, a = Math.min(k, i.length - 1), n = Math.max(0, k - y.length + 1); n <= a; n++) {
              var d = k - n, I = y.words[d] | 0, C = i.words[n] | 0, W = I * C, ae = W & 67108863;
              p = p + (W / 67108864 | 0) | 0, ae = ae + c | 0, c = ae & 67108863, p = p + (ae >>> 26) | 0, m += p >>> 26, p &= 67108863;
            }
            u.words[k] = c, f = p, p = m;
          }
          return f !== 0 ? u.words[k] = f : u.length--, u._strip();
        }
        function Xe(y, i, u) {
          return Ze(y, i, u);
        }
        s.prototype.mulTo = function(i, u) {
          var f, m = this.length + i.length;
          return this.length === 10 && i.length === 10 ? f = Q(this, i, u) : m < 63 ? f = F(this, i, u) : m < 1024 ? f = Ze(this, i, u) : f = Xe(this, i, u), f;
        }, s.prototype.mul = function(i) {
          var u = new s(null);
          return u.words = new Array(this.length + i.length), this.mulTo(i, u);
        }, s.prototype.mulf = function(i) {
          var u = new s(null);
          return u.words = new Array(this.length + i.length), Xe(this, i, u);
        }, s.prototype.imul = function(i) {
          return this.clone().mulTo(i, this);
        }, s.prototype.imuln = function(i) {
          var u = i < 0;
          u && (i = -i), r(typeof i == "number"), r(i < 67108864);
          for (var f = 0, m = 0; m < this.length; m++) {
            var k = (this.words[m] | 0) * i, p = (k & 67108863) + (f & 67108863);
            f >>= 26, f += k / 67108864 | 0, f += p >>> 26, this.words[m] = p & 67108863;
          }
          return f !== 0 && (this.words[m] = f, this.length++), i === 0 && (this.length = 1, this._normSign()), u ? this.ineg() : this;
        }, s.prototype.muln = function(i) {
          return this.clone().imuln(i);
        }, s.prototype.sqr = function() {
          return this.mul(this);
        }, s.prototype.isqr = function() {
          return this.imul(this.clone());
        }, s.prototype.pow = function(i) {
          var u = N(i);
          if (u.length === 0) return new s(1);
          for (var f = this, m = 0; m < u.length && u[m] === 0; m++, f = f.sqr()) ;
          if (++m < u.length) for (var k = f.sqr(); m < u.length; m++, k = k.sqr()) u[m] !== 0 && (f = f.mul(k));
          return f;
        }, s.prototype.iushln = function(i) {
          r(typeof i == "number" && i >= 0);
          var u = i % 26, f = (i - u) / 26, m = 67108863 >>> 26 - u << 26 - u, k;
          if (u !== 0) {
            var p = 0;
            for (k = 0; k < this.length; k++) {
              var c = this.words[k] & m, a = (this.words[k] | 0) - c << u;
              this.words[k] = a | p, p = c >>> 26 - u;
            }
            p && (this.words[k] = p, this.length++);
          }
          if (f !== 0) {
            for (k = this.length - 1; k >= 0; k--) this.words[k + f] = this.words[k];
            for (k = 0; k < f; k++) this.words[k] = 0;
            this.length += f;
          }
          return this._strip();
        }, s.prototype.ishln = function(i) {
          return r(this.negative === 0), this.iushln(i);
        }, s.prototype.iushrn = function(i, u, f) {
          r(typeof i == "number" && i >= 0);
          var m;
          u ? m = (u - u % 26) / 26 : m = 0;
          var k = i % 26, p = Math.min((i - k) / 26, this.length), c = 67108863 ^ 67108863 >>> k << k, a = f;
          if (m -= p, m = Math.max(0, m), a) {
            for (var n = 0; n < p; n++) a.words[n] = this.words[n];
            a.length = p;
          }
          if (p !== 0) if (this.length > p) for (this.length -= p, n = 0; n < this.length; n++) this.words[n] = this.words[n + p];
          else this.words[0] = 0, this.length = 1;
          var d = 0;
          for (n = this.length - 1; n >= 0 && (d !== 0 || n >= m); n--) {
            var I = this.words[n] | 0;
            this.words[n] = d << 26 - k | I >>> k, d = I & c;
          }
          return a && d !== 0 && (a.words[a.length++] = d), this.length === 0 && (this.words[0] = 0, this.length = 1), this._strip();
        }, s.prototype.ishrn = function(i, u, f) {
          return r(this.negative === 0), this.iushrn(i, u, f);
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
          var u = i % 26, f = (i - u) / 26, m = 1 << u;
          if (this.length <= f) return false;
          var k = this.words[f];
          return !!(k & m);
        }, s.prototype.imaskn = function(i) {
          r(typeof i == "number" && i >= 0);
          var u = i % 26, f = (i - u) / 26;
          if (r(this.negative === 0, "imaskn works only with positive numbers"), this.length <= f) return this;
          if (u !== 0 && f++, this.length = Math.min(f, this.length), u !== 0) {
            var m = 67108863 ^ 67108863 >>> u << u;
            this.words[this.length - 1] &= m;
          }
          return this.length === 0 && (this.words[0] = 0, this.length = 1), this._strip();
        }, s.prototype.maskn = function(i) {
          return this.clone().imaskn(i);
        }, s.prototype.iaddn = function(i) {
          return r(typeof i == "number"), r(i < 67108864), i < 0 ? this.isubn(-i) : this.negative !== 0 ? this.length === 1 && (this.words[0] | 0) <= i ? (this.words[0] = i - (this.words[0] | 0), this.negative = 0, this) : (this.negative = 0, this.isubn(i), this.negative = 1, this) : this._iaddn(i);
        }, s.prototype._iaddn = function(i) {
          this.words[0] += i;
          for (var u = 0; u < this.length && this.words[u] >= 67108864; u++) this.words[u] -= 67108864, u === this.length - 1 ? this.words[u + 1] = 1 : this.words[u + 1]++;
          return this.length = Math.max(this.length, u + 1), this;
        }, s.prototype.isubn = function(i) {
          if (r(typeof i == "number"), r(i < 67108864), i < 0) return this.iaddn(-i);
          if (this.negative !== 0) return this.negative = 0, this.iaddn(i), this.negative = 1, this;
          if (this.words[0] -= i, this.length === 1 && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
          else for (var u = 0; u < this.length && this.words[u] < 0; u++) this.words[u] += 67108864, this.words[u + 1] -= 1;
          return this._strip();
        }, s.prototype.addn = function(i) {
          return this.clone().iaddn(i);
        }, s.prototype.subn = function(i) {
          return this.clone().isubn(i);
        }, s.prototype.iabs = function() {
          return this.negative = 0, this;
        }, s.prototype.abs = function() {
          return this.clone().iabs();
        }, s.prototype._ishlnsubmul = function(i, u, f) {
          var m = i.length + f, k;
          this._expand(m);
          var p, c = 0;
          for (k = 0; k < i.length; k++) {
            p = (this.words[k + f] | 0) + c;
            var a = (i.words[k] | 0) * u;
            p -= a & 67108863, c = (p >> 26) - (a / 67108864 | 0), this.words[k + f] = p & 67108863;
          }
          for (; k < this.length - f; k++) p = (this.words[k + f] | 0) + c, c = p >> 26, this.words[k + f] = p & 67108863;
          if (c === 0) return this._strip();
          for (r(c === -1), c = 0, k = 0; k < this.length; k++) p = -(this.words[k] | 0) + c, c = p >> 26, this.words[k] = p & 67108863;
          return this.negative = 1, this._strip();
        }, s.prototype._wordDiv = function(i, u) {
          var f = this.length - i.length, m = this.clone(), k = i, p = k.words[k.length - 1] | 0, c = this._countBits(p);
          f = 26 - c, f !== 0 && (k = k.ushln(f), m.iushln(f), p = k.words[k.length - 1] | 0);
          var a = m.length - k.length, n;
          if (u !== "mod") {
            n = new s(null), n.length = a + 1, n.words = new Array(n.length);
            for (var d = 0; d < n.length; d++) n.words[d] = 0;
          }
          var I = m.clone()._ishlnsubmul(k, 1, a);
          I.negative === 0 && (m = I, n && (n.words[a] = 1));
          for (var C = a - 1; C >= 0; C--) {
            var W = (m.words[k.length + C] | 0) * 67108864 + (m.words[k.length + C - 1] | 0);
            for (W = Math.min(W / p | 0, 67108863), m._ishlnsubmul(k, W, C); m.negative !== 0; ) W--, m.negative = 0, m._ishlnsubmul(k, 1, C), m.isZero() || (m.negative ^= 1);
            n && (n.words[C] = W);
          }
          return n && n._strip(), m._strip(), u !== "div" && f !== 0 && m.iushrn(f), {
            div: n || null,
            mod: m
          };
        }, s.prototype.divmod = function(i, u, f) {
          if (r(!i.isZero()), this.isZero()) return {
            div: new s(0),
            mod: new s(0)
          };
          var m, k, p;
          return this.negative !== 0 && i.negative === 0 ? (p = this.neg().divmod(i, u), u !== "mod" && (m = p.div.neg()), u !== "div" && (k = p.mod.neg(), f && k.negative !== 0 && k.iadd(i)), {
            div: m,
            mod: k
          }) : this.negative === 0 && i.negative !== 0 ? (p = this.divmod(i.neg(), u), u !== "mod" && (m = p.div.neg()), {
            div: m,
            mod: p.mod
          }) : (this.negative & i.negative) !== 0 ? (p = this.neg().divmod(i.neg(), u), u !== "div" && (k = p.mod.neg(), f && k.negative !== 0 && k.isub(i)), {
            div: p.div,
            mod: k
          }) : i.length > this.length || this.cmp(i) < 0 ? {
            div: new s(0),
            mod: this
          } : i.length === 1 ? u === "div" ? {
            div: this.divn(i.words[0]),
            mod: null
          } : u === "mod" ? {
            div: null,
            mod: new s(this.modrn(i.words[0]))
          } : {
            div: this.divn(i.words[0]),
            mod: new s(this.modrn(i.words[0]))
          } : this._wordDiv(i, u);
        }, s.prototype.div = function(i) {
          return this.divmod(i, "div", false).div;
        }, s.prototype.mod = function(i) {
          return this.divmod(i, "mod", false).mod;
        }, s.prototype.umod = function(i) {
          return this.divmod(i, "mod", true).mod;
        }, s.prototype.divRound = function(i) {
          var u = this.divmod(i);
          if (u.mod.isZero()) return u.div;
          var f = u.mod.abs(), m = i.abs().iushrn(1), k = i.words[0] & 1, p = f.cmp(m);
          if (p < 0 || k === 1 && p === 0) return u.div;
          var c = new s(1);
          return c.negative = this.negative ^ i.negative, u.div.iadd(c);
        }, s.prototype.modrn = function(i) {
          var u = i < 0;
          u && (i = -i), r(i <= 67108863);
          for (var f = (1 << 26) % i, m = 0, k = this.length - 1; k >= 0; k--) m = (f * m + (this.words[k] | 0)) % i;
          return u ? -m : m;
        }, s.prototype.modn = function(i) {
          return this.modrn(i);
        }, s.prototype.idivn = function(i) {
          var u = i < 0;
          u && (i = -i), r(i <= 67108863);
          for (var f = 0, m = this.length - 1; m >= 0; m--) {
            var k = (this.words[m] | 0) + f * 67108864;
            this.words[m] = k / i | 0, f = k % i;
          }
          return this._strip(), u ? this.ineg() : this;
        }, s.prototype.divn = function(i) {
          return this.clone().idivn(i);
        }, s.prototype.egcd = function(i) {
          r(i.negative === 0), r(!i.isZero());
          var u = this, f = i.clone();
          u.negative !== 0 ? u = u.umod(i) : u = u.clone();
          for (var m = new s(1), k = new s(0), p = new s(0), c = new s(1), a = 0; u.isEven() && f.isEven(); ) u.iushrn(1), f.iushrn(1), ++a;
          for (var n = f.clone(), d = u.clone(); !u.isZero(); ) {
            for (var I = 0, C = 1; (u.words[0] & C) === 0 && I < 26; ++I, C <<= 1) ;
            if (I > 0) for (u.iushrn(I); I-- > 0; ) (m.isOdd() || k.isOdd()) && (m.iadd(n), k.isub(d)), m.iushrn(1), k.iushrn(1);
            for (var W = 0, ae = 1; (f.words[0] & ae) === 0 && W < 26; ++W, ae <<= 1) ;
            if (W > 0) for (f.iushrn(W); W-- > 0; ) (p.isOdd() || c.isOdd()) && (p.iadd(n), c.isub(d)), p.iushrn(1), c.iushrn(1);
            u.cmp(f) >= 0 ? (u.isub(f), m.isub(p), k.isub(c)) : (f.isub(u), p.isub(m), c.isub(k));
          }
          return {
            a: p,
            b: c,
            gcd: f.iushln(a)
          };
        }, s.prototype._invmp = function(i) {
          r(i.negative === 0), r(!i.isZero());
          var u = this, f = i.clone();
          u.negative !== 0 ? u = u.umod(i) : u = u.clone();
          for (var m = new s(1), k = new s(0), p = f.clone(); u.cmpn(1) > 0 && f.cmpn(1) > 0; ) {
            for (var c = 0, a = 1; (u.words[0] & a) === 0 && c < 26; ++c, a <<= 1) ;
            if (c > 0) for (u.iushrn(c); c-- > 0; ) m.isOdd() && m.iadd(p), m.iushrn(1);
            for (var n = 0, d = 1; (f.words[0] & d) === 0 && n < 26; ++n, d <<= 1) ;
            if (n > 0) for (f.iushrn(n); n-- > 0; ) k.isOdd() && k.iadd(p), k.iushrn(1);
            u.cmp(f) >= 0 ? (u.isub(f), m.isub(k)) : (f.isub(u), k.isub(m));
          }
          var I;
          return u.cmpn(1) === 0 ? I = m : I = k, I.cmpn(0) < 0 && I.iadd(i), I;
        }, s.prototype.gcd = function(i) {
          if (this.isZero()) return i.abs();
          if (i.isZero()) return this.abs();
          var u = this.clone(), f = i.clone();
          u.negative = 0, f.negative = 0;
          for (var m = 0; u.isEven() && f.isEven(); m++) u.iushrn(1), f.iushrn(1);
          do {
            for (; u.isEven(); ) u.iushrn(1);
            for (; f.isEven(); ) f.iushrn(1);
            var k = u.cmp(f);
            if (k < 0) {
              var p = u;
              u = f, f = p;
            } else if (k === 0 || f.cmpn(1) === 0) break;
            u.isub(f);
          } while (true);
          return f.iushln(m);
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
          var u = i % 26, f = (i - u) / 26, m = 1 << u;
          if (this.length <= f) return this._expand(f + 1), this.words[f] |= m, this;
          for (var k = m, p = f; k !== 0 && p < this.length; p++) {
            var c = this.words[p] | 0;
            c += k, k = c >>> 26, c &= 67108863, this.words[p] = c;
          }
          return k !== 0 && (this.words[p] = k, this.length++), this;
        }, s.prototype.isZero = function() {
          return this.length === 1 && this.words[0] === 0;
        }, s.prototype.cmpn = function(i) {
          var u = i < 0;
          if (this.negative !== 0 && !u) return -1;
          if (this.negative === 0 && u) return 1;
          this._strip();
          var f;
          if (this.length > 1) f = 1;
          else {
            u && (i = -i), r(i <= 67108863, "Number is too big");
            var m = this.words[0] | 0;
            f = m === i ? 0 : m < i ? -1 : 1;
          }
          return this.negative !== 0 ? -f | 0 : f;
        }, s.prototype.cmp = function(i) {
          if (this.negative !== 0 && i.negative === 0) return -1;
          if (this.negative === 0 && i.negative !== 0) return 1;
          var u = this.ucmp(i);
          return this.negative !== 0 ? -u | 0 : u;
        }, s.prototype.ucmp = function(i) {
          if (this.length > i.length) return 1;
          if (this.length < i.length) return -1;
          for (var u = 0, f = this.length - 1; f >= 0; f--) {
            var m = this.words[f] | 0, k = i.words[f] | 0;
            if (m !== k) {
              m < k ? u = -1 : m > k && (u = 1);
              break;
            }
          }
          return u;
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
          return new Z(i);
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
        var gt = {
          k256: null,
          p224: null,
          p192: null,
          p25519: null
        };
        function $e(y, i) {
          this.name = y, this.p = new s(i, 16), this.n = this.p.bitLength(), this.k = new s(1).iushln(this.n).isub(this.p), this.tmp = this._tmp();
        }
        $e.prototype._tmp = function() {
          var i = new s(null);
          return i.words = new Array(Math.ceil(this.n / 13)), i;
        }, $e.prototype.ireduce = function(i) {
          var u = i, f;
          do
            this.split(u, this.tmp), u = this.imulK(u), u = u.iadd(this.tmp), f = u.bitLength();
          while (f > this.n);
          var m = f < this.n ? -1 : u.ucmp(this.p);
          return m === 0 ? (u.words[0] = 0, u.length = 1) : m > 0 ? u.isub(this.p) : u.strip !== void 0 ? u.strip() : u._strip(), u;
        }, $e.prototype.split = function(i, u) {
          i.iushrn(this.n, 0, u);
        }, $e.prototype.imulK = function(i) {
          return i.imul(this.k);
        };
        function it() {
          $e.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f");
        }
        o(it, $e), it.prototype.split = function(i, u) {
          for (var f = 4194303, m = Math.min(i.length, 9), k = 0; k < m; k++) u.words[k] = i.words[k];
          if (u.length = m, i.length <= 9) {
            i.words[0] = 0, i.length = 1;
            return;
          }
          var p = i.words[9];
          for (u.words[u.length++] = p & f, k = 10; k < i.length; k++) {
            var c = i.words[k] | 0;
            i.words[k - 10] = (c & f) << 4 | p >>> 22, p = c;
          }
          p >>>= 22, i.words[k - 10] = p, p === 0 && i.length > 10 ? i.length -= 10 : i.length -= 9;
        }, it.prototype.imulK = function(i) {
          i.words[i.length] = 0, i.words[i.length + 1] = 0, i.length += 2;
          for (var u = 0, f = 0; f < i.length; f++) {
            var m = i.words[f] | 0;
            u += m * 977, i.words[f] = u & 67108863, u = m * 64 + (u / 67108864 | 0);
          }
          return i.words[i.length - 1] === 0 && (i.length--, i.words[i.length - 1] === 0 && i.length--), i;
        };
        function lt() {
          $e.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001");
        }
        o(lt, $e);
        function yt() {
          $e.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff");
        }
        o(yt, $e);
        function mt() {
          $e.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed");
        }
        o(mt, $e), mt.prototype.imulK = function(i) {
          for (var u = 0, f = 0; f < i.length; f++) {
            var m = (i.words[f] | 0) * 19 + u, k = m & 67108863;
            m >>>= 26, i.words[f] = k, u = m;
          }
          return u !== 0 && (i.words[i.length++] = u), i;
        }, s._prime = function(i) {
          if (gt[i]) return gt[i];
          var u;
          if (i === "k256") u = new it();
          else if (i === "p224") u = new lt();
          else if (i === "p192") u = new yt();
          else if (i === "p25519") u = new mt();
          else throw new Error("Unknown prime " + i);
          return gt[i] = u, u;
        };
        function Z(y) {
          if (typeof y == "string") {
            var i = s._prime(y);
            this.m = i.p, this.prime = i;
          } else r(y.gtn(1), "modulus must be greater than 1"), this.m = y, this.prime = null;
        }
        Z.prototype._verify1 = function(i) {
          r(i.negative === 0, "red works only with positives"), r(i.red, "red works only with red numbers");
        }, Z.prototype._verify2 = function(i, u) {
          r((i.negative | u.negative) === 0, "red works only with positives"), r(i.red && i.red === u.red, "red works only with red numbers");
        }, Z.prototype.imod = function(i) {
          return this.prime ? this.prime.ireduce(i)._forceRed(this) : (R(i, i.umod(this.m)._forceRed(this)), i);
        }, Z.prototype.neg = function(i) {
          return i.isZero() ? i.clone() : this.m.sub(i)._forceRed(this);
        }, Z.prototype.add = function(i, u) {
          this._verify2(i, u);
          var f = i.add(u);
          return f.cmp(this.m) >= 0 && f.isub(this.m), f._forceRed(this);
        }, Z.prototype.iadd = function(i, u) {
          this._verify2(i, u);
          var f = i.iadd(u);
          return f.cmp(this.m) >= 0 && f.isub(this.m), f;
        }, Z.prototype.sub = function(i, u) {
          this._verify2(i, u);
          var f = i.sub(u);
          return f.cmpn(0) < 0 && f.iadd(this.m), f._forceRed(this);
        }, Z.prototype.isub = function(i, u) {
          this._verify2(i, u);
          var f = i.isub(u);
          return f.cmpn(0) < 0 && f.iadd(this.m), f;
        }, Z.prototype.shl = function(i, u) {
          return this._verify1(i), this.imod(i.ushln(u));
        }, Z.prototype.imul = function(i, u) {
          return this._verify2(i, u), this.imod(i.imul(u));
        }, Z.prototype.mul = function(i, u) {
          return this._verify2(i, u), this.imod(i.mul(u));
        }, Z.prototype.isqr = function(i) {
          return this.imul(i, i.clone());
        }, Z.prototype.sqr = function(i) {
          return this.mul(i, i);
        }, Z.prototype.sqrt = function(i) {
          if (i.isZero()) return i.clone();
          var u = this.m.andln(3);
          if (r(u % 2 === 1), u === 3) {
            var f = this.m.add(new s(1)).iushrn(2);
            return this.pow(i, f);
          }
          for (var m = this.m.subn(1), k = 0; !m.isZero() && m.andln(1) === 0; ) k++, m.iushrn(1);
          r(!m.isZero());
          var p = new s(1).toRed(this), c = p.redNeg(), a = this.m.subn(1).iushrn(1), n = this.m.bitLength();
          for (n = new s(2 * n * n).toRed(this); this.pow(n, a).cmp(c) !== 0; ) n.redIAdd(c);
          for (var d = this.pow(n, m), I = this.pow(i, m.addn(1).iushrn(1)), C = this.pow(i, m), W = k; C.cmp(p) !== 0; ) {
            for (var ae = C, ee = 0; ae.cmp(p) !== 0; ee++) ae = ae.redSqr();
            r(ee < W);
            var ie = this.pow(d, new s(1).iushln(W - ee - 1));
            I = I.redMul(ie), d = ie.redSqr(), C = C.redMul(d), W = ee;
          }
          return I;
        }, Z.prototype.invm = function(i) {
          var u = i._invmp(this.m);
          return u.negative !== 0 ? (u.negative = 0, this.imod(u).redNeg()) : this.imod(u);
        }, Z.prototype.pow = function(i, u) {
          if (u.isZero()) return new s(1).toRed(this);
          if (u.cmpn(1) === 0) return i.clone();
          var f = 4, m = new Array(1 << f);
          m[0] = new s(1).toRed(this), m[1] = i;
          for (var k = 2; k < m.length; k++) m[k] = this.mul(m[k - 1], i);
          var p = m[0], c = 0, a = 0, n = u.bitLength() % 26;
          for (n === 0 && (n = 26), k = u.length - 1; k >= 0; k--) {
            for (var d = u.words[k], I = n - 1; I >= 0; I--) {
              var C = d >> I & 1;
              if (p !== m[0] && (p = this.sqr(p)), C === 0 && c === 0) {
                a = 0;
                continue;
              }
              c <<= 1, c |= C, a++, !(a !== f && (k !== 0 || I !== 0)) && (p = this.mul(p, m[c]), a = 0, c = 0);
            }
            n = 26;
          }
          return p;
        }, Z.prototype.convertTo = function(i) {
          var u = i.umod(this.m);
          return u === i ? u.clone() : u;
        }, Z.prototype.convertFrom = function(i) {
          var u = i.clone();
          return u.red = null, u;
        }, s.mont = function(i) {
          return new U(i);
        };
        function U(y) {
          Z.call(this, y), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new s(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv);
        }
        o(U, Z), U.prototype.convertTo = function(i) {
          return this.imod(i.ushln(this.shift));
        }, U.prototype.convertFrom = function(i) {
          var u = this.imod(i.mul(this.rinv));
          return u.red = null, u;
        }, U.prototype.imul = function(i, u) {
          if (i.isZero() || u.isZero()) return i.words[0] = 0, i.length = 1, i;
          var f = i.imul(u), m = f.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), k = f.isub(m).iushrn(this.shift), p = k;
          return k.cmp(this.m) >= 0 ? p = k.isub(this.m) : k.cmpn(0) < 0 && (p = k.iadd(this.m)), p._forceRed(this);
        }, U.prototype.mul = function(i, u) {
          if (i.isZero() || u.isZero()) return new s(0)._forceRed(this);
          var f = i.mul(u), m = f.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), k = f.isub(m).iushrn(this.shift), p = k;
          return k.cmp(this.m) >= 0 ? p = k.isub(this.m) : k.cmpn(0) < 0 && (p = k.iadd(this.m)), p._forceRed(this);
        }, U.prototype.invm = function(i) {
          var u = this.imod(i._invmp(this.m).mul(this.r2));
          return u._forceRed(this);
        };
      })(l, Xs);
    })(Yt)), Yt.exports;
  }
  var ei = Qs();
  xn = Js(ei);
  var ti = 8078e3, ri = 8078001, ni = 8078004, si = 8078005, ii = 8078006, oi = 8078011;
  function ns(l) {
    return Array.isArray(l) ? "%5B" + l.map(ns).join("%2C%20") + "%5D" : typeof l == "bigint" ? `${l}n` : encodeURIComponent(String(l != null && Object.getPrototypeOf(l) === null ? {
      ...l
    } : l));
  }
  function ai([l, e]) {
    return `${l}=${ns(e)}`;
  }
  function ci(l) {
    const e = Object.entries(l).map(ai).join("&");
    return btoa(e);
  }
  function ui(l, e = {}) {
    {
      let t = `Solana error #${l}; Decode this error by running \`npx @solana/errors decode -- ${l}`;
      return Object.keys(e).length && (t += ` '${ci(e)}'`), `${t}\``;
    }
  }
  var Pt = class extends Error {
    constructor(...[l, e]) {
      let t, r;
      e && Object.entries(Object.getOwnPropertyDescriptors(e)).forEach(([s, h]) => {
        s === "cause" ? r = {
          cause: h.value
        } : (t === void 0 && (t = {
          __code: l
        }), Object.defineProperty(t, s, h));
      });
      const o = ui(l, t);
      super(o, r);
      __publicField(this, "cause", this.cause);
      __publicField(this, "context");
      this.context = Object.freeze(t === void 0 ? {
        __code: l
      } : t), this.name = "SolanaError";
    }
  };
  function li(l, e) {
    return "fixedSize" in e ? e.fixedSize : e.getSizeFromValue(l);
  }
  function hi(l) {
    return Object.freeze({
      ...l,
      encode: (e) => {
        const t = new Uint8Array(li(e, l));
        return l.write(e, t, 0), t;
      }
    });
  }
  function di(l) {
    return Object.freeze({
      ...l,
      decode: (e, t = 0) => l.read(e, t)[0]
    });
  }
  function Rt(l) {
    return "fixedSize" in l && typeof l.fixedSize == "number";
  }
  function fi(l, e) {
    if (Rt(l) !== Rt(e)) throw new Pt(ni);
    if (Rt(l) && Rt(e) && l.fixedSize !== e.fixedSize) throw new Pt(si, {
      decoderFixedSize: e.fixedSize,
      encoderFixedSize: l.fixedSize
    });
    if (!Rt(l) && !Rt(e) && l.maxSize !== e.maxSize) throw new Pt(ii, {
      decoderMaxSize: e.maxSize,
      encoderMaxSize: l.maxSize
    });
    return {
      ...e,
      ...l,
      decode: e.decode,
      encode: l.encode,
      read: e.read,
      write: l.write
    };
  }
  function pi(l, e, t = 0) {
    if (e.length - t <= 0) throw new Pt(ti, {
      codecDescription: l
    });
  }
  function gi(l, e, t, r = 0) {
    const o = t.length - r;
    if (o < e) throw new Pt(ri, {
      bytesLength: o,
      codecDescription: l,
      expected: e
    });
  }
  function yi(l, e, t) {
    const r = l.byteOffset + (e ?? 0), o = t ?? l.byteLength;
    let s;
    return typeof SharedArrayBuffer > "u" ? s = l.buffer : l.buffer instanceof SharedArrayBuffer ? (s = new ArrayBuffer(l.length), new Uint8Array(s).set(new Uint8Array(l))) : s = l.buffer, (r === 0 || r === -l.byteLength) && o === l.byteLength ? s : s.slice(r, r + o);
  }
  function mi(l, e, t, r) {
    if (r < e || r > t) throw new Pt(oi, {
      codecDescription: l,
      max: t,
      min: e,
      value: r
    });
  }
  function ss(l) {
    return (l == null ? void 0 : l.endian) !== 1;
  }
  function bi(l) {
    return hi({
      fixedSize: l.size,
      write(e, t, r) {
        l.range && mi(l.name, l.range[0], l.range[1], e);
        const o = new ArrayBuffer(l.size);
        return l.set(new DataView(o), e, ss(l.config)), t.set(new Uint8Array(o), r), r + l.size;
      }
    });
  }
  function wi(l) {
    return di({
      fixedSize: l.size,
      read(e, t = 0) {
        pi(l.name, e, t), gi(l.name, l.size, e, t);
        const r = new DataView(yi(e, t, l.size));
        return [
          l.get(r, ss(l.config)),
          t + l.size
        ];
      }
    });
  }
  var is = (l = {}) => bi({
    config: l,
    name: "u64",
    range: [
      0n,
      BigInt("0xffffffffffffffff")
    ],
    set: (e, t, r) => e.setBigUint64(0, BigInt(t), r),
    size: 8
  }), ki = (l = {}) => wi({
    config: l,
    get: (e, t) => e.getBigUint64(0, t),
    name: "u64",
    size: 8
  }), vi = (l = {}) => fi(is(l), ki(l));
  const Si = Nt.utils.randomPrivateKey, Tn = () => {
    const l = Nt.utils.randomPrivateKey(), e = Qt(l), t = new Uint8Array(64);
    return t.set(l), t.set(e, 32), {
      publicKey: e,
      secretKey: t
    };
  }, Qt = Nt.getPublicKey;
  function Bn(l) {
    try {
      return Nt.ExtendedPoint.fromHex(l), true;
    } catch {
      return false;
    }
  }
  const Gr = (l, e) => Nt.sign(l, e.slice(0, 32)), Ii = Nt.verify, G = (l) => V.isBuffer(l) ? l : l instanceof Uint8Array ? V.from(l.buffer, l.byteOffset, l.byteLength) : V.from(l);
  class jr {
    constructor(e) {
      Object.assign(this, e);
    }
    encode() {
      return V.from(Mr.serialize(Dt, this));
    }
    static decode(e) {
      return Mr.deserialize(Dt, this, e);
    }
    static decodeUnchecked(e) {
      return Mr.deserializeUnchecked(Dt, this, e);
    }
  }
  class _i extends jr {
    constructor(e) {
      if (super(e), this.enum = "", Object.keys(e).length !== 1) throw new Error("Enum can only take single value");
      Object.keys(e).map((t) => {
        this.enum = t;
      });
    }
  }
  const Dt = /* @__PURE__ */ new Map();
  var os;
  const as = 32, rt = 32;
  function Ai(l) {
    return l._bn !== void 0;
  }
  let Ln = 1;
  _ = class extends jr {
    constructor(e) {
      if (super({}), this._bn = void 0, Ai(e)) this._bn = e._bn;
      else {
        if (typeof e == "string") {
          const t = je.decode(e);
          if (t.length != rt) throw new Error("Invalid public key input");
          this._bn = new xn(t);
        } else this._bn = new xn(e);
        if (this._bn.byteLength() > rt) throw new Error("Invalid public key input");
      }
    }
    static unique() {
      const e = new _(Ln);
      return Ln += 1, new _(e.toBuffer());
    }
    equals(e) {
      return this._bn.eq(e._bn);
    }
    toBase58() {
      return je.encode(this.toBytes());
    }
    toJSON() {
      return this.toBase58();
    }
    toBytes() {
      const e = this.toBuffer();
      return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
    }
    toBuffer() {
      const e = this._bn.toArrayLike(V);
      if (e.length === rt) return e;
      const t = V.alloc(32);
      return e.copy(t, 32 - e.length), t;
    }
    get [Symbol.toStringTag]() {
      return `PublicKey(${this.toString()})`;
    }
    toString() {
      return this.toBase58();
    }
    static async createWithSeed(e, t, r) {
      const o = V.concat([
        e.toBuffer(),
        V.from(t),
        r.toBuffer()
      ]), s = An(o);
      return new _(s);
    }
    static createProgramAddressSync(e, t) {
      let r = V.alloc(0);
      e.forEach(function(s) {
        if (s.length > as) throw new TypeError("Max seed length exceeded");
        r = V.concat([
          r,
          G(s)
        ]);
      }), r = V.concat([
        r,
        t.toBuffer(),
        V.from("ProgramDerivedAddress")
      ]);
      const o = An(r);
      if (Bn(o)) throw new Error("Invalid seeds, address must fall off the curve");
      return new _(o);
    }
    static async createProgramAddress(e, t) {
      return this.createProgramAddressSync(e, t);
    }
    static findProgramAddressSync(e, t) {
      let r = 255, o;
      for (; r != 0; ) {
        try {
          const s = e.concat(V.from([
            r
          ]));
          o = this.createProgramAddressSync(s, t);
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
    static async findProgramAddress(e, t) {
      return this.findProgramAddressSync(e, t);
    }
    static isOnCurve(e) {
      const t = new _(e);
      return Bn(t.toBytes());
    }
  };
  os = _;
  _.default = new os("11111111111111111111111111111111");
  Dt.set(_, {
    kind: "struct",
    fields: [
      [
        "_bn",
        "u256"
      ]
    ]
  });
  class Ei {
    constructor(e) {
      if (this._publicKey = void 0, this._secretKey = void 0, e) {
        const t = G(e);
        if (e.length !== 64) throw new Error("bad secret key size");
        this._publicKey = t.slice(32, 64), this._secretKey = t.slice(0, 32);
      } else this._secretKey = G(Si()), this._publicKey = G(Qt(this._secretKey));
    }
    get publicKey() {
      return new _(this._publicKey);
    }
    get secretKey() {
      return V.concat([
        this._secretKey,
        this._publicKey
      ], 64);
    }
  }
  const Ri = new _("BPFLoader1111111111111111111111111111111111"), wt = 1232, Ht = 127, bt = 64, cs = 129, Mi = 4096;
  $r = class extends Error {
    constructor(e) {
      super(`Signature ${e} has expired: block height exceeded.`), this.signature = void 0, this.signature = e;
    }
  };
  Object.defineProperty($r.prototype, "name", {
    value: "TransactionExpiredBlockheightExceededError"
  });
  class Jr extends Error {
    constructor(e, t) {
      super(`Transaction was not confirmed in ${t.toFixed(2)} seconds. It is unknown if it succeeded or failed. Check signature ${e} using the Solana Explorer or CLI tools.`), this.signature = void 0, this.signature = e;
    }
  }
  Object.defineProperty(Jr.prototype, "name", {
    value: "TransactionExpiredTimeoutError"
  });
  class Mt extends Error {
    constructor(e) {
      super(`Signature ${e} has expired: the nonce is no longer valid.`), this.signature = void 0, this.signature = e;
    }
  }
  Object.defineProperty(Mt.prototype, "name", {
    value: "TransactionExpiredNonceInvalidError"
  });
  class Bt {
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
      this.keySegments().flat().forEach((s, h) => {
        r.set(s.toBase58(), h);
      });
      const o = (s) => {
        const h = r.get(s.toBase58());
        if (h === void 0) throw new Error("Encountered an unknown instruction account key during compilation");
        return h;
      };
      return e.map((s) => ({
        programIdIndex: o(s.programId),
        accountKeyIndexes: s.keys.map((h) => o(h.pubkey)),
        data: s.data
      }));
    }
  }
  const $ = (l = "publicKey") => b.blob(32, l), Pi = (l = "signature") => b.blob(64, l), vt = (l = "string") => {
    const e = b.struct([
      b.u32("length"),
      b.u32("lengthPadding"),
      b.blob(b.offset(b.u32(), -8), "chars")
    ], l), t = e.decode.bind(e), r = e.encode.bind(e), o = e;
    return o.decode = (s, h) => t(s, h).chars.toString(), o.encode = (s, h, g) => {
      const w = {
        chars: V.from(s, "utf8")
      };
      return r(w, h, g);
    }, o.alloc = (s) => b.u32().span + b.u32().span + V.from(s, "utf8").length, o;
  }, xi = (l = "authorized") => b.struct([
    $("staker"),
    $("withdrawer")
  ], l), Ti = (l = "lockup") => b.struct([
    b.ns64("unixTimestamp"),
    b.ns64("epoch"),
    $("custodian")
  ], l), Bi = (l = "voteInit") => b.struct([
    $("nodePubkey"),
    $("authorizedVoter"),
    $("authorizedWithdrawer"),
    b.u8("commission")
  ], l), Li = (l = "voteAuthorizeWithSeedArgs") => b.struct([
    b.u32("voteAuthorizationType"),
    $("currentAuthorityDerivedKeyOwnerPubkey"),
    vt("currentAuthorityDerivedKeySeed"),
    $("newAuthorized")
  ], l);
  function us(l, e) {
    const t = (o) => {
      if (o.span >= 0) return o.span;
      if (typeof o.alloc == "function") return o.alloc(e[o.property]);
      if ("count" in o && "elementLayout" in o) {
        const s = e[o.property];
        if (Array.isArray(s)) return s.length * t(o.elementLayout);
      } else if ("fields" in o) return us({
        layout: o
      }, e[o.property]);
      return 0;
    };
    let r = 0;
    return l.layout.fields.forEach((o) => {
      r += t(o);
    }), r;
  }
  function et(l) {
    let e = 0, t = 0;
    for (; ; ) {
      let r = l.shift();
      if (e |= (r & 127) << t * 7, t += 1, (r & 128) === 0) break;
    }
    return e;
  }
  function tt(l, e) {
    let t = e;
    for (; ; ) {
      let r = t & 127;
      if (t >>= 7, t == 0) {
        l.push(r);
        break;
      } else r |= 128, l.push(r);
    }
  }
  function j(l, e) {
    if (!l) throw new Error(e || "Assertion failed");
  }
  class nr {
    constructor(e, t) {
      this.payer = void 0, this.keyMetaMap = void 0, this.payer = e, this.keyMetaMap = t;
    }
    static compile(e, t) {
      const r = /* @__PURE__ */ new Map(), o = (h) => {
        const g = h.toBase58();
        let w = r.get(g);
        return w === void 0 && (w = {
          isSigner: false,
          isWritable: false,
          isInvoked: false
        }, r.set(g, w)), w;
      }, s = o(t);
      s.isSigner = true, s.isWritable = true;
      for (const h of e) {
        o(h.programId).isInvoked = true;
        for (const g of h.keys) {
          const w = o(g.pubkey);
          w.isSigner || (w.isSigner = g.isSigner), w.isWritable || (w.isWritable = g.isWritable);
        }
      }
      return new nr(t, r);
    }
    getMessageComponents() {
      const e = [
        ...this.keyMetaMap.entries()
      ];
      j(e.length <= 256, "Max static account keys length exceeded");
      const t = e.filter(([, w]) => w.isSigner && w.isWritable), r = e.filter(([, w]) => w.isSigner && !w.isWritable), o = e.filter(([, w]) => !w.isSigner && w.isWritable), s = e.filter(([, w]) => !w.isSigner && !w.isWritable), h = {
        numRequiredSignatures: t.length + r.length,
        numReadonlySignedAccounts: r.length,
        numReadonlyUnsignedAccounts: s.length
      };
      {
        j(t.length > 0, "Expected at least one writable signer key");
        const [w] = t[0];
        j(w === this.payer.toBase58(), "Expected first writable signer key to be the fee payer");
      }
      const g = [
        ...t.map(([w]) => new _(w)),
        ...r.map(([w]) => new _(w)),
        ...o.map(([w]) => new _(w)),
        ...s.map(([w]) => new _(w))
      ];
      return [
        h,
        g
      ];
    }
    extractTableLookup(e) {
      const [t, r] = this.drainKeysFoundInLookupTable(e.state.addresses, (h) => !h.isSigner && !h.isInvoked && h.isWritable), [o, s] = this.drainKeysFoundInLookupTable(e.state.addresses, (h) => !h.isSigner && !h.isInvoked && !h.isWritable);
      if (!(t.length === 0 && o.length === 0)) return [
        {
          accountKey: e.key,
          writableIndexes: t,
          readonlyIndexes: o
        },
        {
          writable: r,
          readonly: s
        }
      ];
    }
    drainKeysFoundInLookupTable(e, t) {
      const r = new Array(), o = new Array();
      for (const [s, h] of this.keyMetaMap.entries()) if (t(h)) {
        const g = new _(s), w = e.findIndex((S) => S.equals(g));
        w >= 0 && (j(w < 256, "Max lookup table index exceeded"), r.push(w), o.push(g), this.keyMetaMap.delete(s));
      }
      return [
        r,
        o
      ];
    }
  }
  const ls = "Reached end of buffer unexpectedly";
  function He(l) {
    if (l.length === 0) throw new Error(ls);
    return l.shift();
  }
  function Ge(l, ...e) {
    const [t] = e;
    if (e.length === 2 ? t + (e[1] ?? 0) > l.length : t >= l.length) throw new Error(ls);
    return l.splice(...e);
  }
  class st {
    constructor(e) {
      this.header = void 0, this.accountKeys = void 0, this.recentBlockhash = void 0, this.instructions = void 0, this.indexToProgramIds = /* @__PURE__ */ new Map(), this.header = e.header, this.accountKeys = e.accountKeys.map((t) => new _(t)), this.recentBlockhash = e.recentBlockhash, this.instructions = e.instructions, this.instructions.forEach((t) => this.indexToProgramIds.set(t.programIdIndex, this.accountKeys[t.programIdIndex]));
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
        data: je.decode(e.data)
      }));
    }
    get addressTableLookups() {
      return [];
    }
    getAccountKeys() {
      return new Bt(this.staticAccountKeys);
    }
    static compile(e) {
      const t = nr.compile(e.instructions, e.payerKey), [r, o] = t.getMessageComponents(), h = new Bt(o).compileInstructions(e.instructions).map((g) => ({
        programIdIndex: g.programIdIndex,
        accounts: g.accountKeyIndexes,
        data: je.encode(g.data)
      }));
      return new st({
        header: r,
        accountKeys: o,
        recentBlockhash: e.recentBlockhash,
        instructions: h
      });
    }
    isAccountSigner(e) {
      return e < this.header.numRequiredSignatures;
    }
    isAccountWritable(e) {
      const t = this.header.numRequiredSignatures;
      if (e >= this.header.numRequiredSignatures) {
        const r = e - t, s = this.accountKeys.length - t - this.header.numReadonlyUnsignedAccounts;
        return r < s;
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
      tt(t, e);
      const r = this.instructions.map((M) => {
        const { accounts: K, programIdIndex: E } = M, T = Array.from(je.decode(M.data));
        let P = [];
        tt(P, K.length);
        let N = [];
        return tt(N, T.length), {
          programIdIndex: E,
          keyIndicesCount: V.from(P),
          keyIndices: K,
          dataLength: V.from(N),
          data: T
        };
      });
      let o = [];
      tt(o, r.length);
      let s = V.alloc(wt);
      V.from(o).copy(s);
      let h = o.length;
      r.forEach((M) => {
        const E = b.struct([
          b.u8("programIdIndex"),
          b.blob(M.keyIndicesCount.length, "keyIndicesCount"),
          b.seq(b.u8("keyIndex"), M.keyIndices.length, "keyIndices"),
          b.blob(M.dataLength.length, "dataLength"),
          b.seq(b.u8("userdatum"), M.data.length, "data")
        ]).encode(M, s, h);
        h += E;
      }), s = s.slice(0, h);
      const g = b.struct([
        b.blob(1, "numRequiredSignatures"),
        b.blob(1, "numReadonlySignedAccounts"),
        b.blob(1, "numReadonlyUnsignedAccounts"),
        b.blob(t.length, "keyCount"),
        b.seq($("key"), e, "keys"),
        $("recentBlockhash")
      ]), w = {
        numRequiredSignatures: V.from([
          this.header.numRequiredSignatures
        ]),
        numReadonlySignedAccounts: V.from([
          this.header.numReadonlySignedAccounts
        ]),
        numReadonlyUnsignedAccounts: V.from([
          this.header.numReadonlyUnsignedAccounts
        ]),
        keyCount: V.from(t),
        keys: this.accountKeys.map((M) => G(M.toBytes())),
        recentBlockhash: je.decode(this.recentBlockhash)
      };
      let S = V.alloc(2048);
      const R = g.encode(w, S);
      return s.copy(S, R), S.slice(0, R + s.length);
    }
    static from(e) {
      let t = [
        ...e
      ];
      const r = He(t);
      if (r !== (r & Ht)) throw new Error("Versioned messages must be deserialized with VersionedMessage.deserialize()");
      const o = He(t), s = He(t), h = et(t);
      let g = [];
      for (let K = 0; K < h; K++) {
        const E = Ge(t, 0, rt);
        g.push(new _(V.from(E)));
      }
      const w = Ge(t, 0, rt), S = et(t);
      let R = [];
      for (let K = 0; K < S; K++) {
        const E = He(t), T = et(t), P = Ge(t, 0, T), N = et(t), F = Ge(t, 0, N), Q = je.encode(V.from(F));
        R.push({
          programIdIndex: E,
          accounts: P,
          data: Q
        });
      }
      const M = {
        header: {
          numRequiredSignatures: r,
          numReadonlySignedAccounts: o,
          numReadonlyUnsignedAccounts: s
        },
        recentBlockhash: je.encode(V.from(w)),
        accountKeys: g,
        instructions: R
      };
      return new st(M);
    }
  }
  class It {
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
      return new Bt(this.staticAccountKeys, t);
    }
    isAccountSigner(e) {
      return e < this.header.numRequiredSignatures;
    }
    isAccountWritable(e) {
      const t = this.header.numRequiredSignatures, r = this.staticAccountKeys.length;
      if (e >= r) {
        const o = e - r, s = this.addressTableLookups.reduce((h, g) => h + g.writableIndexes.length, 0);
        return o < s;
      } else if (e >= this.header.numRequiredSignatures) {
        const o = e - t, h = r - t - this.header.numReadonlyUnsignedAccounts;
        return o < h;
      } else {
        const o = t - this.header.numReadonlySignedAccounts;
        return e < o;
      }
    }
    resolveAddressTableLookups(e) {
      const t = {
        writable: [],
        readonly: []
      };
      for (const r of this.addressTableLookups) {
        const o = e.find((s) => s.key.equals(r.accountKey));
        if (!o) throw new Error(`Failed to find address lookup table account for table key ${r.accountKey.toBase58()}`);
        for (const s of r.writableIndexes) if (s < o.state.addresses.length) t.writable.push(o.state.addresses[s]);
        else throw new Error(`Failed to find address for index ${s} in address lookup table ${r.accountKey.toBase58()}`);
        for (const s of r.readonlyIndexes) if (s < o.state.addresses.length) t.readonly.push(o.state.addresses[s]);
        else throw new Error(`Failed to find address for index ${s} in address lookup table ${r.accountKey.toBase58()}`);
      }
      return t;
    }
    static compile(e) {
      const t = nr.compile(e.instructions, e.payerKey), r = new Array(), o = {
        writable: new Array(),
        readonly: new Array()
      }, s = e.addressLookupTableAccounts || [];
      for (const R of s) {
        const M = t.extractTableLookup(R);
        if (M !== void 0) {
          const [K, { writable: E, readonly: T }] = M;
          r.push(K), o.writable.push(...E), o.readonly.push(...T);
        }
      }
      const [h, g] = t.getMessageComponents(), S = new Bt(g, o).compileInstructions(e.instructions);
      return new It({
        header: h,
        staticAccountKeys: g,
        recentBlockhash: e.recentBlockhash,
        compiledInstructions: S,
        addressTableLookups: r
      });
    }
    serialize() {
      const e = Array();
      tt(e, this.staticAccountKeys.length);
      const t = this.serializeInstructions(), r = Array();
      tt(r, this.compiledInstructions.length);
      const o = this.serializeAddressTableLookups(), s = Array();
      tt(s, this.addressTableLookups.length);
      const h = b.struct([
        b.u8("prefix"),
        b.struct([
          b.u8("numRequiredSignatures"),
          b.u8("numReadonlySignedAccounts"),
          b.u8("numReadonlyUnsignedAccounts")
        ], "header"),
        b.blob(e.length, "staticAccountKeysLength"),
        b.seq($(), this.staticAccountKeys.length, "staticAccountKeys"),
        $("recentBlockhash"),
        b.blob(r.length, "instructionsLength"),
        b.blob(t.length, "serializedInstructions"),
        b.blob(s.length, "addressTableLookupsLength"),
        b.blob(o.length, "serializedAddressTableLookups")
      ]), g = new Uint8Array(wt), S = h.encode({
        prefix: 128,
        header: this.header,
        staticAccountKeysLength: new Uint8Array(e),
        staticAccountKeys: this.staticAccountKeys.map((R) => R.toBytes()),
        recentBlockhash: je.decode(this.recentBlockhash),
        instructionsLength: new Uint8Array(r),
        serializedInstructions: t,
        addressTableLookupsLength: new Uint8Array(s),
        serializedAddressTableLookups: o
      }, g);
      return g.slice(0, S);
    }
    serializeInstructions() {
      let e = 0;
      const t = new Uint8Array(wt);
      for (const r of this.compiledInstructions) {
        const o = Array();
        tt(o, r.accountKeyIndexes.length);
        const s = Array();
        tt(s, r.data.length);
        const h = b.struct([
          b.u8("programIdIndex"),
          b.blob(o.length, "encodedAccountKeyIndexesLength"),
          b.seq(b.u8(), r.accountKeyIndexes.length, "accountKeyIndexes"),
          b.blob(s.length, "encodedDataLength"),
          b.blob(r.data.length, "data")
        ]);
        e += h.encode({
          programIdIndex: r.programIdIndex,
          encodedAccountKeyIndexesLength: new Uint8Array(o),
          accountKeyIndexes: r.accountKeyIndexes,
          encodedDataLength: new Uint8Array(s),
          data: r.data
        }, t, e);
      }
      return t.slice(0, e);
    }
    serializeAddressTableLookups() {
      let e = 0;
      const t = new Uint8Array(wt);
      for (const r of this.addressTableLookups) {
        const o = Array();
        tt(o, r.writableIndexes.length);
        const s = Array();
        tt(s, r.readonlyIndexes.length);
        const h = b.struct([
          $("accountKey"),
          b.blob(o.length, "encodedWritableIndexesLength"),
          b.seq(b.u8(), r.writableIndexes.length, "writableIndexes"),
          b.blob(s.length, "encodedReadonlyIndexesLength"),
          b.seq(b.u8(), r.readonlyIndexes.length, "readonlyIndexes")
        ]);
        e += h.encode({
          accountKey: r.accountKey.toBytes(),
          encodedWritableIndexesLength: new Uint8Array(o),
          writableIndexes: r.writableIndexes,
          encodedReadonlyIndexesLength: new Uint8Array(s),
          readonlyIndexes: r.readonlyIndexes
        }, t, e);
      }
      return t.slice(0, e);
    }
    static deserialize(e) {
      let t = [
        ...e
      ];
      const r = He(t), o = r & Ht;
      j(r !== o, "Expected versioned message but received legacy message");
      const s = o;
      j(s === 0, `Expected versioned message with version 0 but found version ${s}`);
      const h = {
        numRequiredSignatures: He(t),
        numReadonlySignedAccounts: He(t),
        numReadonlyUnsignedAccounts: He(t)
      }, g = [], w = et(t);
      for (let T = 0; T < w; T++) g.push(new _(Ge(t, 0, rt)));
      const S = je.encode(Ge(t, 0, rt)), R = et(t), M = [];
      for (let T = 0; T < R; T++) {
        const P = He(t), N = et(t), F = Ge(t, 0, N), Q = et(t), Ze = new Uint8Array(Ge(t, 0, Q));
        M.push({
          programIdIndex: P,
          accountKeyIndexes: F,
          data: Ze
        });
      }
      const K = et(t), E = [];
      for (let T = 0; T < K; T++) {
        const P = new _(Ge(t, 0, rt)), N = et(t), F = Ge(t, 0, N), Q = et(t), Ze = Ge(t, 0, Q);
        E.push({
          accountKey: P,
          writableIndexes: F,
          readonlyIndexes: Ze
        });
      }
      return new It({
        header: h,
        staticAccountKeys: g,
        recentBlockhash: S,
        compiledInstructions: M,
        addressTableLookups: E
      });
    }
  }
  const Cn = 3, Ci = 4, Ni = 8, zi = 16;
  function $t(l) {
    const e = Ge(l, 0, 4);
    return e[0] + e[1] * 2 ** 8 + e[2] * 2 ** 16 + e[3] * 2 ** 24;
  }
  function Oi(l) {
    const e = Ge(l, 0, 8);
    let t = BigInt(0);
    for (let r = e.length - 1; r >= 0; r--) t = t << BigInt(8) | BigInt(e[r]);
    return j(t <= BigInt(Number.MAX_SAFE_INTEGER), "Expected u64 value to be within the safe integer range"), Number(t);
  }
  class Gt {
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
      return new Bt(this.staticAccountKeys);
    }
    isAccountSigner(e) {
      return e < this.header.numRequiredSignatures;
    }
    isAccountWritable(e) {
      const t = this.header.numRequiredSignatures, r = this.staticAccountKeys.length;
      if (e >= r) return false;
      if (e >= this.header.numRequiredSignatures) {
        const o = e - t, h = r - t - this.header.numReadonlyUnsignedAccounts;
        return o < h;
      } else {
        const o = t - this.header.numReadonlySignedAccounts;
        return e < o;
      }
    }
    serialize() {
      throw new Error("Serialization of version 1 transaction messages is not supported");
    }
    static deserialize(e) {
      let t = [
        ...e
      ];
      const r = He(t), o = r & Ht;
      j(r !== o, "Expected versioned message but received legacy message");
      const s = o;
      j(s === 1, `Expected versioned message with version 1 but found version ${s}`);
      const h = {
        numRequiredSignatures: He(t),
        numReadonlySignedAccounts: He(t),
        numReadonlyUnsignedAccounts: He(t)
      }, g = $t(t);
      j((g & -32) === 0, "Unexpected bits set in the transaction config mask");
      const w = g & Cn;
      j(w === 0 || w === Cn, "Expected both or neither of the priority fee bits to be set in the transaction config mask");
      const S = je.encode(Ge(t, 0, rt)), R = He(t), M = He(t), K = [];
      for (let N = 0; N < M; N++) K.push(new _(Ge(t, 0, rt)));
      const E = {
        computeUnitLimit: null,
        heapSize: null,
        loadedAccountsDataSizeLimit: null,
        priorityFee: null
      };
      w !== 0 && (E.priorityFee = Oi(t)), g & Ci && (E.computeUnitLimit = $t(t)), g & Ni && (E.loadedAccountsDataSizeLimit = $t(t)), g & zi && (E.heapSize = $t(t));
      const T = [];
      for (let N = 0; N < R; N++) {
        const F = He(t), Q = He(t), Ze = He(t) + He(t) * 256;
        T.push({
          accountKeyIndexesLength: Q,
          dataLength: Ze,
          programIdIndex: F
        });
      }
      const P = [];
      for (const N of T) P.push({
        programIdIndex: N.programIdIndex,
        accountKeyIndexes: Ge(t, 0, N.accountKeyIndexesLength),
        data: new Uint8Array(Ge(t, 0, N.dataLength))
      });
      return j(t.length === 0, "Expected no bytes to remain after deserializing a version 1 message"), new Gt({
        header: h,
        staticAccountKeys: K,
        recentBlockhash: S,
        compiledInstructions: P,
        transactionConfig: E
      });
    }
  }
  const er = {
    deserializeMessageVersion(l) {
      const e = l[0], t = e & Ht;
      return t === e ? "legacy" : t;
    },
    deserialize: (l) => {
      const e = er.deserializeMessageVersion(l);
      if (e === "legacy") return st.from(l);
      if (e === 0) return It.deserialize(l);
      if (e === 1) return Gt.deserialize(l);
      throw new Error(`Transaction message version ${e} deserialization is not supported`);
    }
  };
  let ht = (function(l) {
    return l[l.BLOCKHEIGHT_EXCEEDED = 0] = "BLOCKHEIGHT_EXCEEDED", l[l.PROCESSED = 1] = "PROCESSED", l[l.TIMED_OUT = 2] = "TIMED_OUT", l[l.NONCE_INVALID = 3] = "NONCE_INVALID", l;
  })({});
  const Ki = V.alloc(bt).fill(0);
  te = class {
    constructor(e) {
      this.keys = void 0, this.programId = void 0, this.data = V.alloc(0), this.programId = e.programId, this.keys = e.keys, e.data && (this.data = e.data);
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
  };
  Y = class {
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
        "instructions" in t ? this.instructions = this.instructions.concat(t.instructions) : "data" in t && "programId" in t && "keys" in t ? this.instructions.push(t) : this.instructions.push(new te(t));
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
      for (let P = 0; P < t.length; P++) if (t[P].programId === void 0) throw new Error(`Transaction instruction index ${P} has undefined program id`);
      const o = [], s = [];
      t.forEach((P) => {
        P.keys.forEach((F) => {
          s.push({
            ...F
          });
        });
        const N = P.programId.toString();
        o.includes(N) || o.push(N);
      }), o.forEach((P) => {
        s.push({
          pubkey: new _(P),
          isSigner: false,
          isWritable: false
        });
      });
      const h = [];
      s.forEach((P) => {
        const N = P.pubkey.toString(), F = h.findIndex((Q) => Q.pubkey.toString() === N);
        F > -1 ? (h[F].isWritable = h[F].isWritable || P.isWritable, h[F].isSigner = h[F].isSigner || P.isSigner) : h.push(P);
      }), h.sort(function(P, N) {
        if (P.isSigner !== N.isSigner) return P.isSigner ? -1 : 1;
        if (P.isWritable !== N.isWritable) return P.isWritable ? -1 : 1;
        const F = {
          localeMatcher: "best fit",
          usage: "sort",
          sensitivity: "variant",
          ignorePunctuation: false,
          numeric: false,
          caseFirst: "lower"
        };
        return P.pubkey.toBase58().localeCompare(N.pubkey.toBase58(), "en", F);
      });
      const g = h.findIndex((P) => P.pubkey.equals(r));
      if (g > -1) {
        const [P] = h.splice(g, 1);
        P.isSigner = true, P.isWritable = true, h.unshift(P);
      } else h.unshift({
        pubkey: r,
        isSigner: true,
        isWritable: true
      });
      for (const P of this.signatures) {
        const N = h.findIndex((F) => F.pubkey.equals(P.publicKey));
        if (N > -1) h[N].isSigner || (h[N].isSigner = true, console.warn("Transaction references a signature that is unnecessary, only the fee payer and instruction signer accounts should sign a transaction. This behavior is deprecated and will throw an error in the next major version release."));
        else throw new Error(`unknown signer: ${P.publicKey.toString()}`);
      }
      let w = 0, S = 0, R = 0;
      const M = [], K = [];
      h.forEach(({ pubkey: P, isSigner: N, isWritable: F }) => {
        N ? (M.push(P.toString()), w += 1, F || (S += 1)) : (K.push(P.toString()), F || (R += 1));
      });
      const E = M.concat(K), T = t.map((P) => {
        const { data: N, programId: F } = P;
        return {
          programIdIndex: E.indexOf(F.toString()),
          accounts: P.keys.map((Q) => E.indexOf(Q.pubkey.toString())),
          data: je.encode(N)
        };
      });
      return T.forEach((P) => {
        j(P.programIdIndex >= 0), P.accounts.forEach((N) => j(N >= 0));
      }), new st({
        header: {
          numRequiredSignatures: w,
          numReadonlySignedAccounts: S,
          numReadonlyUnsignedAccounts: R
        },
        accountKeys: E,
        recentBlockhash: e,
        instructions: T
      });
    }
    _compile() {
      const e = this.compileMessage(), t = e.accountKeys.slice(0, e.header.numRequiredSignatures);
      return this.signatures.length === t.length && this.signatures.every((o, s) => t[s].equals(o.publicKey)) || (this.signatures = t.map((r) => ({
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
        const o = r.toString();
        return t.has(o) ? false : (t.add(o), true);
      }).map((r) => ({
        signature: null,
        publicKey: r
      }));
    }
    sign(...e) {
      if (e.length === 0) throw new Error("No signers");
      const t = /* @__PURE__ */ new Set(), r = [];
      for (const s of e) {
        const h = s.publicKey.toString();
        t.has(h) || (t.add(h), r.push(s));
      }
      this.signatures = r.map((s) => ({
        signature: null,
        publicKey: s.publicKey
      }));
      const o = this._compile();
      this._partialSign(o, ...r);
    }
    partialSign(...e) {
      if (e.length === 0) throw new Error("No signers");
      const t = /* @__PURE__ */ new Set(), r = [];
      for (const s of e) {
        const h = s.publicKey.toString();
        t.has(h) || (t.add(h), r.push(s));
      }
      const o = this._compile();
      this._partialSign(o, ...r);
    }
    _partialSign(e, ...t) {
      const r = e.serialize();
      t.forEach((o) => {
        const s = Gr(r, o.secretKey);
        this._addSignature(o.publicKey, G(s));
      });
    }
    addSignature(e, t) {
      this._compile(), this._addSignature(e, t);
    }
    _addSignature(e, t) {
      j(t.length === 64);
      const r = this.signatures.findIndex((o) => e.equals(o.publicKey));
      if (r < 0) throw new Error(`unknown signer: ${e.toString()}`);
      this.signatures[r].signature = V.from(t);
    }
    verifySignatures(e = true) {
      return !this._getMessageSignednessErrors(this.serializeMessage(), e);
    }
    _getMessageSignednessErrors(e, t) {
      const r = {};
      for (const { signature: o, publicKey: s } of this.signatures) o === null ? t && (r.missing || (r.missing = [])).push(s) : Ii(o, e, s.toBytes()) || (r.invalid || (r.invalid = [])).push(s);
      return r.invalid || r.missing ? r : void 0;
    }
    serialize(e) {
      const { requireAllSignatures: t, verifySignatures: r } = Object.assign({
        requireAllSignatures: true,
        verifySignatures: true
      }, e), o = this.serializeMessage();
      if (r) {
        const s = this._getMessageSignednessErrors(o, t);
        if (s) {
          let h = "Signature verification failed.";
          throw s.invalid && (h += `
Invalid signature for public key${s.invalid.length === 1 ? "" : "(s)"} [\`${s.invalid.map((g) => g.toBase58()).join("`, `")}\`].`), s.missing && (h += `
Missing signature for public key${s.missing.length === 1 ? "" : "(s)"} [\`${s.missing.map((g) => g.toBase58()).join("`, `")}\`].`), new Error(h);
        }
      }
      return this._serialize(o);
    }
    _serialize(e) {
      const { signatures: t } = this, r = [];
      tt(r, t.length);
      const o = r.length + t.length * 64 + e.length, s = V.alloc(o);
      return j(t.length < 256), V.from(r).copy(s, 0), t.forEach(({ signature: h }, g) => {
        h !== null && (j(h.length === 64, "signature has invalid length"), V.from(h).copy(s, r.length + g * 64));
      }), e.copy(s, r.length + t.length * 64), j(s.length <= wt, `Transaction too large: ${s.length} > ${wt}`), s;
    }
    get keys() {
      return j(this.instructions.length === 1), this.instructions[0].keys.map((e) => e.pubkey);
    }
    get programId() {
      return j(this.instructions.length === 1), this.instructions[0].programId;
    }
    get data() {
      return j(this.instructions.length === 1), this.instructions[0].data;
    }
    static from(e) {
      let t = [
        ...e
      ];
      const r = et(t);
      let o = [];
      for (let s = 0; s < r; s++) {
        const h = Ge(t, 0, bt);
        o.push(je.encode(V.from(h)));
      }
      return Y.populate(st.from(t), o);
    }
    static populate(e, t = []) {
      const r = new Y();
      return r.recentBlockhash = e.recentBlockhash, e.header.numRequiredSignatures > 0 && (r.feePayer = e.accountKeys[0]), t.forEach((o, s) => {
        const h = {
          signature: o == je.encode(Ki) ? null : je.decode(o),
          publicKey: e.accountKeys[s]
        };
        r.signatures.push(h);
      }), e.instructions.forEach((o) => {
        const s = o.accounts.map((h) => {
          const g = e.accountKeys[h];
          return {
            pubkey: g,
            isSigner: r.signatures.some((w) => w.publicKey.toString() === g.toString()) || e.isAccountSigner(h),
            isWritable: e.isAccountWritable(h)
          };
        });
        r.instructions.push(new te({
          keys: s,
          programId: e.accountKeys[o.programIdIndex],
          data: je.decode(o.data)
        }));
      }), r._message = e, r._json = r.toJSON(), r;
    }
  };
  Yr = class {
    constructor(e) {
      this.payerKey = void 0, this.instructions = void 0, this.recentBlockhash = void 0, this.payerKey = e.payerKey, this.instructions = e.instructions, this.recentBlockhash = e.recentBlockhash;
    }
    static decompile(e, t) {
      const { header: r, compiledInstructions: o, recentBlockhash: s } = e, { numRequiredSignatures: h, numReadonlySignedAccounts: g, numReadonlyUnsignedAccounts: w } = r, S = h - g;
      j(S > 0, "Message header is invalid");
      const R = e.staticAccountKeys.length - h - w;
      j(R >= 0, "Message header is invalid");
      const M = e.getAccountKeys(t), K = M.get(0);
      if (K === void 0) throw new Error("Failed to decompile message because no account keys were found");
      const E = [];
      for (const T of o) {
        const P = [];
        for (const F of T.accountKeyIndexes) {
          const Q = M.get(F);
          if (Q === void 0) throw new Error(`Failed to find key for account key index ${F}`);
          const Ze = F < h;
          let Xe;
          Ze ? Xe = F < S : F < M.staticAccountKeys.length ? Xe = F - h < R : Xe = F - M.staticAccountKeys.length < M.accountKeysFromLookups.writable.length, P.push({
            pubkey: Q,
            isSigner: F < r.numRequiredSignatures,
            isWritable: Xe
          });
        }
        const N = M.get(T.programIdIndex);
        if (N === void 0) throw new Error(`Failed to find program id for program id index ${T.programIdIndex}`);
        E.push(new te({
          programId: N,
          data: G(T.data),
          keys: P
        }));
      }
      return new Yr({
        payerKey: K,
        instructions: E,
        recentBlockhash: s
      });
    }
    compileToLegacyMessage() {
      return st.compile({
        payerKey: this.payerKey,
        recentBlockhash: this.recentBlockhash,
        instructions: this.instructions
      });
    }
    compileToV0Message(e) {
      return It.compile({
        payerKey: this.payerKey,
        recentBlockhash: this.recentBlockhash,
        instructions: this.instructions,
        addressLookupTableAccounts: e
      });
    }
  };
  tr = class {
    get version() {
      return this.message.version;
    }
    constructor(e, t) {
      if (this.signatures = void 0, this.message = void 0, t !== void 0) j(t.length === e.header.numRequiredSignatures, "Expected signatures length to be equal to the number of required signatures"), this.signatures = t;
      else {
        const r = [];
        for (let o = 0; o < e.header.numRequiredSignatures; o++) r.push(new Uint8Array(bt));
        this.signatures = r;
      }
      this.message = e;
    }
    serialize() {
      const e = this.message.serialize(), t = Array();
      tt(t, this.signatures.length);
      const r = b.struct([
        b.blob(t.length, "encodedSignaturesLength"),
        b.seq(Pi(), this.signatures.length, "signatures"),
        b.blob(e.length, "serializedMessage")
      ]), o = new Uint8Array(2048), s = r.encode({
        encodedSignaturesLength: new Uint8Array(t),
        signatures: this.signatures,
        serializedMessage: e
      }, o);
      return o.slice(0, s);
    }
    static deserialize(e) {
      if (e[0] === cs) return this.deserializeV1(e);
      let t = [
        ...e
      ];
      const r = [], o = et(t);
      for (let h = 0; h < o; h++) r.push(new Uint8Array(Ge(t, 0, bt)));
      const s = er.deserialize(new Uint8Array(t));
      return new tr(s, r);
    }
    static deserializeV1(e) {
      const t = e[1], r = t * bt, o = e.length - r;
      j(o > 0, "Expected transaction to have enough bytes for its signatures");
      const s = er.deserialize(e.slice(0, o)), h = [];
      for (let g = 0; g < t; g++) {
        const w = o + g * bt;
        h.push(e.slice(w, w + bt));
      }
      return new tr(s, h);
    }
    sign(e) {
      const t = this.message.serialize(), r = this.message.staticAccountKeys.slice(0, this.message.header.numRequiredSignatures);
      for (const o of e) {
        const s = r.findIndex((h) => h.equals(o.publicKey));
        j(s >= 0, `Cannot sign with non signer key ${o.publicKey.toBase58()}`), this.signatures[s] = Gr(t, o.secretKey);
      }
    }
    addSignature(e, t) {
      j(t.byteLength === 64, "Signature must be 64 bytes long");
      const o = this.message.staticAccountKeys.slice(0, this.message.header.numRequiredSignatures).findIndex((s) => s.equals(e));
      j(o >= 0, `Can not add signature; \`${e.toBase58()}\` is not required to sign this transaction`), this.signatures[o] = t;
    }
  };
  let Wi, Ui, Di, hs, qi, Zt, Vi, Hi, Gi, Xt;
  Wi = 160;
  Ui = 64;
  Di = Wi / Ui;
  hs = 1e3 / Di;
  ot = new _("SysvarC1ock11111111111111111111111111111111");
  qi = new _("SysvarEpochSchedu1e111111111111111111111111");
  Fi = new _("Sysvar1nstructions1111111111111111111111111");
  Zt = new _("SysvarRecentB1ockHashes11111111111111111111");
  Lt = new _("SysvarRent111111111111111111111111111111111");
  Vi = new _("SysvarRewards111111111111111111111111111111");
  Hi = new _("SysvarS1otHashes111111111111111111111111111");
  Gi = new _("SysvarS1otHistory11111111111111111111111111");
  Xt = new _("SysvarStakeHistory1111111111111111111111111");
  qt = class extends Error {
    constructor({ action: e, signature: t, transactionMessage: r, logs: o }) {
      const s = o ? `Logs: 
${JSON.stringify(o.slice(-10), null, 2)}. ` : "", h = "\nCatch the `SendTransactionError` and call `getLogs()` on it for full details.";
      let g;
      switch (e) {
        case "send":
          g = `Transaction ${t} resulted in an error. 
${r}. ` + s + h;
          break;
        case "simulate":
          g = `Simulation failed. 
Message: ${r}. 
` + s + h;
          break;
        default:
          g = `Unknown action '${/* @__PURE__ */ ((w) => w)(e)}'`;
      }
      super(g), this.signature = void 0, this.transactionMessage = void 0, this.transactionLogs = void 0, this.signature = t, this.transactionMessage = r, this.transactionLogs = o || void 0;
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
        e.getTransaction(this.signature).then((o) => {
          if (o && o.meta && o.meta.logMessages) {
            const s = o.meta.logMessages;
            this.transactionLogs = s, t(s);
          } else r(new Error("Log messages not found"));
        }).catch(r);
      })), await this.transactionLogs;
    }
  };
  const ji = {
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
  class D extends Error {
    constructor({ code: e, message: t, data: r }, o) {
      super(o != null ? `${o}: ${t}` : t), this.code = void 0, this.data = void 0, this.code = e, this.data = r, this.name = "SolanaJSONRPCError";
    }
  }
  async function zr(l, e, t, r) {
    const o = r && {
      skipPreflight: r.skipPreflight,
      preflightCommitment: r.preflightCommitment || r.commitment,
      maxRetries: r.maxRetries,
      minContextSlot: r.minContextSlot
    }, s = await l.sendTransaction(e, t, o);
    let h;
    if (e.recentBlockhash != null && e.lastValidBlockHeight != null) h = (await l.confirmTransaction({
      abortSignal: r == null ? void 0 : r.abortSignal,
      signature: s,
      blockhash: e.recentBlockhash,
      lastValidBlockHeight: e.lastValidBlockHeight
    }, r && r.commitment)).value;
    else if (e.minNonceContextSlot != null && e.nonceInfo != null) {
      const { nonceInstruction: g } = e.nonceInfo, w = g.keys[0].pubkey;
      h = (await l.confirmTransaction({
        abortSignal: r == null ? void 0 : r.abortSignal,
        minContextSlot: e.minNonceContextSlot,
        nonceAccountPubkey: w,
        nonceValue: e.nonceInfo.nonce,
        signature: s
      }, r && r.commitment)).value;
    } else (r == null ? void 0 : r.abortSignal) != null && console.warn("sendAndConfirmTransaction(): A transaction with a deprecated confirmation strategy was supplied along with an `abortSignal`. Only transactions having `lastValidBlockHeight` or a combination of `nonceInfo` and `minNonceContextSlot` are abortable."), h = (await l.confirmTransaction(s, r && r.commitment)).value;
    if (h.err) throw s != null ? new qt({
      action: "send",
      signature: s,
      transactionMessage: `Status: (${JSON.stringify(h)})`
    }) : new Error(`Transaction ${s} failed (${JSON.stringify(h)})`);
    return s;
  }
  function kt(l) {
    return new Promise((e) => setTimeout(e, l));
  }
  function J(l, e) {
    const t = l.layout.span >= 0 ? l.layout.span : us(l, e), r = V.alloc(t), o = Object.assign({
      instruction: l.index
    }, e);
    return l.layout.encode(o, r), r;
  }
  function X(l, e) {
    let t;
    try {
      t = l.layout.decode(e);
    } catch (r) {
      throw new Error("invalid instruction; " + r);
    }
    if (t.instruction !== l.index) throw new Error(`invalid instruction; instruction index mismatch ${t.instruction} != ${l.index}`);
    return t;
  }
  const ds = b.nu64("lamportsPerSignature"), fs = b.struct([
    b.u32("version"),
    b.u32("state"),
    $("authorizedPubkey"),
    $("nonce"),
    b.struct([
      ds
    ], "feeCalculator")
  ]), Or = fs.span;
  class sr {
    constructor(e) {
      this.authorizedPubkey = void 0, this.nonce = void 0, this.feeCalculator = void 0, this.authorizedPubkey = e.authorizedPubkey, this.nonce = e.nonce, this.feeCalculator = e.feeCalculator;
    }
    static fromAccountData(e) {
      const t = fs.decode(G(e), 0);
      return new sr({
        authorizedPubkey: new _(t.authorizedPubkey),
        nonce: new _(t.nonce).toString(),
        feeCalculator: t.feeCalculator
      });
    }
  }
  function Ct(l) {
    const e = b.blob(8, l), t = e.decode.bind(e), r = e.encode.bind(e), o = e, s = vi();
    return o.decode = (h, g) => {
      const w = t(h, g);
      return s.decode(w);
    }, o.encode = (h, g, w) => {
      const S = s.encode(h);
      return r(S, g, w);
    }, o;
  }
  class $i {
    constructor() {
    }
    static decodeInstructionType(e) {
      this.checkProgramId(e.programId);
      const r = b.u32("instruction").decode(e.data);
      let o;
      for (const [s, h] of Object.entries(ne)) if (h.index == r) {
        o = s;
        break;
      }
      if (!o) throw new Error("Instruction type incorrect; not a SystemInstruction");
      return o;
    }
    static decodeCreateAccount(e) {
      this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2);
      const { lamports: t, space: r, programId: o } = X(ne.Create, e.data);
      return {
        fromPubkey: e.keys[0].pubkey,
        newAccountPubkey: e.keys[1].pubkey,
        lamports: t,
        space: r,
        programId: new _(o)
      };
    }
    static decodeTransfer(e) {
      this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2);
      const { lamports: t } = X(ne.Transfer, e.data);
      return {
        fromPubkey: e.keys[0].pubkey,
        toPubkey: e.keys[1].pubkey,
        lamports: t
      };
    }
    static decodeTransferWithSeed(e) {
      this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
      const { lamports: t, seed: r, programId: o } = X(ne.TransferWithSeed, e.data);
      return {
        fromPubkey: e.keys[0].pubkey,
        basePubkey: e.keys[1].pubkey,
        toPubkey: e.keys[2].pubkey,
        lamports: t,
        seed: r,
        programId: new _(o)
      };
    }
    static decodeAllocate(e) {
      this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 1);
      const { space: t } = X(ne.Allocate, e.data);
      return {
        accountPubkey: e.keys[0].pubkey,
        space: t
      };
    }
    static decodeAllocateWithSeed(e) {
      this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 1);
      const { base: t, seed: r, space: o, programId: s } = X(ne.AllocateWithSeed, e.data);
      return {
        accountPubkey: e.keys[0].pubkey,
        basePubkey: new _(t),
        seed: r,
        space: o,
        programId: new _(s)
      };
    }
    static decodeAssign(e) {
      this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 1);
      const { programId: t } = X(ne.Assign, e.data);
      return {
        accountPubkey: e.keys[0].pubkey,
        programId: new _(t)
      };
    }
    static decodeAssignWithSeed(e) {
      this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 1);
      const { base: t, seed: r, programId: o } = X(ne.AssignWithSeed, e.data);
      return {
        accountPubkey: e.keys[0].pubkey,
        basePubkey: new _(t),
        seed: r,
        programId: new _(o)
      };
    }
    static decodeCreateWithSeed(e) {
      this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2);
      const { base: t, seed: r, lamports: o, space: s, programId: h } = X(ne.CreateWithSeed, e.data);
      return {
        fromPubkey: e.keys[0].pubkey,
        newAccountPubkey: e.keys[1].pubkey,
        basePubkey: new _(t),
        seed: r,
        lamports: o,
        space: s,
        programId: new _(h)
      };
    }
    static decodeNonceInitialize(e) {
      this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
      const { authorized: t } = X(ne.InitializeNonceAccount, e.data);
      return {
        noncePubkey: e.keys[0].pubkey,
        authorizedPubkey: new _(t)
      };
    }
    static decodeNonceAdvance(e) {
      return this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3), X(ne.AdvanceNonceAccount, e.data), {
        noncePubkey: e.keys[0].pubkey,
        authorizedPubkey: e.keys[2].pubkey
      };
    }
    static decodeNonceWithdraw(e) {
      this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 5);
      const { lamports: t } = X(ne.WithdrawNonceAccount, e.data);
      return {
        noncePubkey: e.keys[0].pubkey,
        toPubkey: e.keys[1].pubkey,
        authorizedPubkey: e.keys[4].pubkey,
        lamports: t
      };
    }
    static decodeNonceAuthorize(e) {
      this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2);
      const { authorized: t } = X(ne.AuthorizeNonceAccount, e.data);
      return {
        noncePubkey: e.keys[0].pubkey,
        authorizedPubkey: e.keys[1].pubkey,
        newAuthorizedPubkey: new _(t)
      };
    }
    static checkProgramId(e) {
      if (!e.equals(Ye.programId)) throw new Error("invalid instruction; programId is not SystemProgram");
    }
    static checkKeyLength(e, t) {
      if (e.length < t) throw new Error(`invalid instruction; found ${e.length} keys, expected at least ${t}`);
    }
  }
  const ne = Object.freeze({
    Create: {
      index: 0,
      layout: b.struct([
        b.u32("instruction"),
        b.ns64("lamports"),
        b.ns64("space"),
        $("programId")
      ])
    },
    Assign: {
      index: 1,
      layout: b.struct([
        b.u32("instruction"),
        $("programId")
      ])
    },
    Transfer: {
      index: 2,
      layout: b.struct([
        b.u32("instruction"),
        Ct("lamports")
      ])
    },
    CreateWithSeed: {
      index: 3,
      layout: b.struct([
        b.u32("instruction"),
        $("base"),
        vt("seed"),
        b.ns64("lamports"),
        b.ns64("space"),
        $("programId")
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
        $("authorized")
      ])
    },
    AuthorizeNonceAccount: {
      index: 7,
      layout: b.struct([
        b.u32("instruction"),
        $("authorized")
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
        $("base"),
        vt("seed"),
        b.ns64("space"),
        $("programId")
      ])
    },
    AssignWithSeed: {
      index: 10,
      layout: b.struct([
        b.u32("instruction"),
        $("base"),
        vt("seed"),
        $("programId")
      ])
    },
    TransferWithSeed: {
      index: 11,
      layout: b.struct([
        b.u32("instruction"),
        Ct("lamports"),
        vt("seed"),
        $("programId")
      ])
    },
    UpgradeNonceAccount: {
      index: 12,
      layout: b.struct([
        b.u32("instruction")
      ])
    }
  });
  Ye = class {
    constructor() {
    }
    static createAccount(e) {
      const t = ne.Create, r = J(t, {
        lamports: e.lamports,
        space: e.space,
        programId: G(e.programId.toBuffer())
      });
      return new te({
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
        const o = ne.TransferWithSeed;
        t = J(o, {
          lamports: BigInt(e.lamports),
          seed: e.seed,
          programId: G(e.programId.toBuffer())
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
        const o = ne.Transfer;
        t = J(o, {
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
      return new te({
        keys: r,
        programId: this.programId,
        data: t
      });
    }
    static assign(e) {
      let t, r;
      if ("basePubkey" in e) {
        const o = ne.AssignWithSeed;
        t = J(o, {
          base: G(e.basePubkey.toBuffer()),
          seed: e.seed,
          programId: G(e.programId.toBuffer())
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
        const o = ne.Assign;
        t = J(o, {
          programId: G(e.programId.toBuffer())
        }), r = [
          {
            pubkey: e.accountPubkey,
            isSigner: true,
            isWritable: true
          }
        ];
      }
      return new te({
        keys: r,
        programId: this.programId,
        data: t
      });
    }
    static createAccountWithSeed(e) {
      const t = ne.CreateWithSeed, r = J(t, {
        base: G(e.basePubkey.toBuffer()),
        seed: e.seed,
        lamports: e.lamports,
        space: e.space,
        programId: G(e.programId.toBuffer())
      });
      let o = [
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
      return e.basePubkey.equals(e.fromPubkey) || o.push({
        pubkey: e.basePubkey,
        isSigner: true,
        isWritable: false
      }), new te({
        keys: o,
        programId: this.programId,
        data: r
      });
    }
    static createNonceAccount(e) {
      const t = new Y();
      "basePubkey" in e && "seed" in e ? t.add(Ye.createAccountWithSeed({
        fromPubkey: e.fromPubkey,
        newAccountPubkey: e.noncePubkey,
        basePubkey: e.basePubkey,
        seed: e.seed,
        lamports: e.lamports,
        space: Or,
        programId: this.programId
      })) : t.add(Ye.createAccount({
        fromPubkey: e.fromPubkey,
        newAccountPubkey: e.noncePubkey,
        lamports: e.lamports,
        space: Or,
        programId: this.programId
      }));
      const r = {
        noncePubkey: e.noncePubkey,
        authorizedPubkey: e.authorizedPubkey
      };
      return t.add(this.nonceInitialize(r)), t;
    }
    static nonceInitialize(e) {
      const t = ne.InitializeNonceAccount, r = J(t, {
        authorized: G(e.authorizedPubkey.toBuffer())
      }), o = {
        keys: [
          {
            pubkey: e.noncePubkey,
            isSigner: false,
            isWritable: true
          },
          {
            pubkey: Zt,
            isSigner: false,
            isWritable: false
          },
          {
            pubkey: Lt,
            isSigner: false,
            isWritable: false
          }
        ],
        programId: this.programId,
        data: r
      };
      return new te(o);
    }
    static nonceAdvance(e) {
      const t = ne.AdvanceNonceAccount, r = J(t), o = {
        keys: [
          {
            pubkey: e.noncePubkey,
            isSigner: false,
            isWritable: true
          },
          {
            pubkey: Zt,
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
      return new te(o);
    }
    static nonceWithdraw(e) {
      const t = ne.WithdrawNonceAccount, r = J(t, {
        lamports: e.lamports
      });
      return new te({
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
            pubkey: Zt,
            isSigner: false,
            isWritable: false
          },
          {
            pubkey: Lt,
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
      const t = ne.AuthorizeNonceAccount, r = J(t, {
        authorized: G(e.newAuthorizedPubkey.toBuffer())
      });
      return new te({
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
        const o = ne.AllocateWithSeed;
        t = J(o, {
          base: G(e.basePubkey.toBuffer()),
          seed: e.seed,
          space: e.space,
          programId: G(e.programId.toBuffer())
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
        const o = ne.Allocate;
        t = J(o, {
          space: e.space
        }), r = [
          {
            pubkey: e.accountPubkey,
            isSigner: true,
            isWritable: true
          }
        ];
      }
      return new te({
        keys: r,
        programId: this.programId,
        data: t
      });
    }
  };
  Ye.programId = new _("11111111111111111111111111111111");
  const Ji = wt - 300;
  class _t {
    constructor() {
    }
    static getMinNumSignatures(e) {
      return 2 * (Math.ceil(e / _t.chunkSize) + 1 + 1);
    }
    static async load(e, t, r, o, s) {
      {
        const M = await e.getMinimumBalanceForRentExemption(s.length), K = await e.getAccountInfo(r.publicKey, "confirmed");
        let E = null;
        if (K !== null) {
          if (K.executable) return console.error("Program load failed, account is already executable"), false;
          K.data.length !== s.length && (E = E || new Y(), E.add(Ye.allocate({
            accountPubkey: r.publicKey,
            space: s.length
          }))), K.owner.equals(o) || (E = E || new Y(), E.add(Ye.assign({
            accountPubkey: r.publicKey,
            programId: o
          }))), K.lamports < M && (E = E || new Y(), E.add(Ye.transfer({
            fromPubkey: t.publicKey,
            toPubkey: r.publicKey,
            lamports: M - K.lamports
          })));
        } else E = new Y().add(Ye.createAccount({
          fromPubkey: t.publicKey,
          newAccountPubkey: r.publicKey,
          lamports: M > 0 ? M : 1,
          space: s.length,
          programId: o
        }));
        E !== null && await zr(e, E, [
          t,
          r
        ], {
          commitment: "confirmed"
        });
      }
      const h = b.struct([
        b.u32("instruction"),
        b.u32("offset"),
        b.u32("bytesLength"),
        b.u32("bytesLengthPadding"),
        b.seq(b.u8("byte"), b.offset(b.u32(), -8), "bytes")
      ]), g = _t.chunkSize;
      let w = 0, S = s, R = [];
      for (; S.length > 0; ) {
        const M = S.slice(0, g), K = V.alloc(g + 16);
        h.encode({
          instruction: 0,
          offset: w,
          bytes: M,
          bytesLength: 0,
          bytesLengthPadding: 0
        }, K);
        const E = new Y().add({
          keys: [
            {
              pubkey: r.publicKey,
              isSigner: true,
              isWritable: true
            }
          ],
          programId: o,
          data: K
        });
        R.push(zr(e, E, [
          t,
          r
        ], {
          commitment: "confirmed"
        })), e._rpcEndpoint.includes("solana.com") && await kt(1e3 / 4), w += g, S = S.slice(g);
      }
      await Promise.all(R);
      {
        const M = b.struct([
          b.u32("instruction")
        ]), K = V.alloc(M.span);
        M.encode({
          instruction: 1
        }, K);
        const E = new Y().add({
          keys: [
            {
              pubkey: r.publicKey,
              isSigner: true,
              isWritable: true
            },
            {
              pubkey: Lt,
              isSigner: false,
              isWritable: false
            }
          ],
          programId: o,
          data: K
        }), T = "processed", P = await e.sendTransaction(E, [
          t,
          r
        ], {
          preflightCommitment: T
        }), { context: N, value: F } = await e.confirmTransaction({
          signature: P,
          lastValidBlockHeight: E.lastValidBlockHeight,
          blockhash: E.recentBlockhash
        }, T);
        if (F.err) throw new Error(`Transaction ${P} failed (${JSON.stringify(F)})`);
        for (; ; ) {
          try {
            if (await e.getSlot({
              commitment: T
            }) > N.slot) break;
          } catch {
          }
          await new Promise((Q) => setTimeout(Q, Math.round(hs / 2)));
        }
      }
      return true;
    }
  }
  _t.chunkSize = Ji;
  const Yi = new _("BPFLoader2111111111111111111111111111111111");
  class Zi {
    static getMinNumSignatures(e) {
      return _t.getMinNumSignatures(e);
    }
    static load(e, t, r, o, s) {
      return _t.load(e, t, r, s, o);
    }
  }
  function Xi(l) {
    return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, "default") ? l.default : l;
  }
  var Pr, Nn;
  function Qi() {
    if (Nn) return Pr;
    Nn = 1;
    var l = Object.prototype.toString, e = Object.keys || function(r) {
      var o = [];
      for (var s in r) o.push(s);
      return o;
    };
    function t(r, o) {
      var s, h, g, w, S, R, M;
      if (r === true) return "true";
      if (r === false) return "false";
      switch (typeof r) {
        case "object":
          if (r === null) return null;
          if (r.toJSON && typeof r.toJSON == "function") return t(r.toJSON(), o);
          if (M = l.call(r), M === "[object Array]") {
            for (g = "[", h = r.length - 1, s = 0; s < h; s++) g += t(r[s], true) + ",";
            return h > -1 && (g += t(r[s], true)), g + "]";
          } else if (M === "[object Object]") {
            for (w = e(r).sort(), h = w.length, g = "", s = 0; s < h; ) S = w[s], R = t(r[S], false), R !== void 0 && (g && (g += ","), g += JSON.stringify(S) + ":" + R), s++;
            return "{" + g + "}";
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
      var o = t(r, false);
      if (o !== void 0) return "" + o;
    }, Pr;
  }
  var eo = Qi(), zn = Xi(eo);
  const Wt = 32;
  function xr(l) {
    let e = 0;
    for (; l > 1; ) l /= 2, e++;
    return e;
  }
  function to(l) {
    return l === 0 ? 1 : (l--, l |= l >> 1, l |= l >> 2, l |= l >> 4, l |= l >> 8, l |= l >> 16, l |= l >> 32, l + 1);
  }
  class ps {
    constructor(e, t, r, o, s) {
      this.slotsPerEpoch = void 0, this.leaderScheduleSlotOffset = void 0, this.warmup = void 0, this.firstNormalEpoch = void 0, this.firstNormalSlot = void 0, this.slotsPerEpoch = e, this.leaderScheduleSlotOffset = t, this.warmup = r, this.firstNormalEpoch = o, this.firstNormalSlot = s;
    }
    getEpoch(e) {
      return this.getEpochAndSlotIndex(e)[0];
    }
    getEpochAndSlotIndex(e) {
      if (e < this.firstNormalSlot) {
        const t = xr(to(e + Wt + 1)) - xr(Wt) - 1, r = this.getSlotsInEpoch(t), o = e - (r - Wt);
        return [
          t,
          o
        ];
      } else {
        const t = e - this.firstNormalSlot, r = Math.floor(t / this.slotsPerEpoch), o = this.firstNormalEpoch + r, s = t % this.slotsPerEpoch;
        return [
          o,
          s
        ];
      }
    }
    getFirstSlotInEpoch(e) {
      return e <= this.firstNormalEpoch ? (Math.pow(2, e) - 1) * Wt : (e - this.firstNormalEpoch) * this.slotsPerEpoch + this.firstNormalSlot;
    }
    getLastSlotInEpoch(e) {
      return this.getFirstSlotInEpoch(e) + this.getSlotsInEpoch(e) - 1;
    }
    getSlotsInEpoch(e) {
      return e < this.firstNormalEpoch ? Math.pow(2, e + xr(Wt)) : this.slotsPerEpoch;
    }
  }
  var ro = globalThis.fetch;
  class no extends Ns {
    constructor(e, t, r) {
      const o = (s) => {
        const h = Os(s, {
          autoconnect: true,
          max_reconnects: 5,
          reconnect: true,
          reconnect_interval: 1e3,
          ...t
        });
        return "socket" in h ? this.underlyingSocket = h.socket : this.underlyingSocket = h, h;
      };
      super(o, e, t, r), this.underlyingSocket = void 0;
    }
    call(...e) {
      var _a3;
      const t = (_a3 = this.underlyingSocket) == null ? void 0 : _a3.readyState;
      return t === 1 ? super.call(...e) : Promise.reject(new Error("Tried to call a JSON-RPC method `" + e[0] + "` but the socket was not `CONNECTING` or `OPEN` (`readyState` was " + t + ")"));
    }
    notify(...e) {
      var _a3;
      const t = (_a3 = this.underlyingSocket) == null ? void 0 : _a3.readyState;
      return t === 1 ? super.notify(...e) : Promise.reject(new Error("Tried to send a JSON-RPC notification `" + e[0] + "` but the socket was not `CONNECTING` or `OPEN` (`readyState` was " + t + ")"));
    }
  }
  function so(l, e) {
    let t;
    try {
      t = l.layout.decode(e);
    } catch (r) {
      throw new Error("invalid instruction; " + r);
    }
    if (t.typeIndex !== l.index) throw new Error(`invalid account data; account type mismatch ${t.typeIndex} != ${l.index}`);
    return t;
  }
  const On = 56;
  class Kr {
    constructor(e) {
      this.key = void 0, this.state = void 0, this.key = e.key, this.state = e.state;
    }
    isActive() {
      const e = BigInt("0xffffffffffffffff");
      return this.state.deactivationSlot === e;
    }
    static deserialize(e) {
      const t = so(io, e), r = e.length - On;
      j(r >= 0, "lookup table is invalid"), j(r % 32 === 0, "lookup table is invalid");
      const o = r / 32, { addresses: s } = b.struct([
        b.seq($(), o, "addresses")
      ]).decode(e.slice(On));
      return {
        deactivationSlot: t.deactivationSlot,
        lastExtendedSlot: t.lastExtendedSlot,
        lastExtendedSlotStartIndex: t.lastExtendedStartIndex,
        authority: t.authority.length !== 0 ? new _(t.authority[0]) : void 0,
        addresses: s.map((h) => new _(h))
      };
    }
  }
  const io = {
    index: 1,
    layout: b.struct([
      b.u32("typeIndex"),
      Ct("deactivationSlot"),
      b.nu64("lastExtendedSlot"),
      b.u8("lastExtendedStartIndex"),
      b.u8(),
      b.seq($(), b.offset(b.u8(), -1), "authority")
    ])
  }, oo = /^[^:]+:\/\/([^:[]+|\[[^\]]+\])(:\d+)?(.*)/i;
  function ao(l) {
    const e = l.match(oo);
    if (e == null) throw TypeError(`Failed to validate endpoint URL \`${l}\``);
    const [t, r, o, s] = e, h = l.startsWith("https:") ? "wss:" : "ws:", g = o == null ? null : parseInt(o.slice(1), 10), w = g == null ? "" : `:${g + 1}`;
    return `${h}//${r}${w}${s}`;
  }
  const oe = Vt(Fr(_), x(), (l) => new _(l)), gs = Vr([
    x(),
    se("base64")
  ]), Zr = Vt(Fr(V), gs, (l) => V.from(l[0], "base64")), ys = 30 * 1e3;
  function co(l) {
    if (/^https?:/.test(l) === false) throw new TypeError("Endpoint URL must start with `http:` or `https:`.");
    return l;
  }
  function re(l) {
    let e, t;
    if (typeof l == "string") e = l;
    else if (l) {
      const { commitment: r, ...o } = l;
      e = r, t = o;
    }
    return {
      commitment: e,
      config: t
    };
  }
  function Kn(l) {
    return l.map((e) => "memcmp" in e ? {
      ...e,
      memcmp: {
        ...e.memcmp,
        encoding: e.memcmp.encoding ?? "base58"
      }
    } : e);
  }
  function ms(l) {
    return Qe([
      A({
        jsonrpc: se("2.0"),
        id: x(),
        result: l
      }),
      A({
        jsonrpc: se("2.0"),
        id: x(),
        error: A({
          code: zt(),
          message: x(),
          data: q(zs())
        })
      })
    ]);
  }
  const uo = ms(zt());
  function H(l) {
    return Vt(ms(l), uo, (e) => "error" in e ? e : {
      ...e,
      result: L(e.result, l)
    });
  }
  function ce(l) {
    return H(A({
      context: A({
        slot: v()
      }),
      value: l
    }));
  }
  function ir(l) {
    return A({
      context: A({
        slot: v()
      }),
      value: l
    });
  }
  function Tr(l, e) {
    if (l === 0) return new It({
      header: e.header,
      staticAccountKeys: e.accountKeys.map((t) => new _(t)),
      recentBlockhash: e.recentBlockhash,
      compiledInstructions: e.instructions.map((t) => ({
        programIdIndex: t.programIdIndex,
        accountKeyIndexes: t.accounts,
        data: je.decode(t.data)
      })),
      addressTableLookups: e.addressTableLookups
    });
    if (l === 1) {
      const t = e.transactionConfig;
      if (t == null) throw new Error("Expected a version 1 transaction message response to have a `transactionConfig`");
      return new Gt({
        header: e.header,
        staticAccountKeys: e.accountKeys.map((r) => new _(r)),
        recentBlockhash: e.recentBlockhash,
        compiledInstructions: e.instructions.map((r) => ({
          programIdIndex: r.programIdIndex,
          accountKeyIndexes: r.accounts,
          data: je.decode(r.data)
        })),
        transactionConfig: t
      });
    } else return new st(e);
  }
  const lo = A({
    foundation: v(),
    foundationTerm: v(),
    initial: v(),
    taper: v(),
    terminal: v()
  }), ho = H(z(B(A({
    epoch: v(),
    effectiveSlot: v(),
    amount: v(),
    postBalance: v(),
    commission: q(B(v()))
  })))), fo = z(A({
    slot: v(),
    prioritizationFee: v()
  })), po = A({
    total: v(),
    validator: v(),
    foundation: v(),
    epoch: v()
  }), go = A({
    epoch: v(),
    slotIndex: v(),
    slotsInEpoch: v(),
    absoluteSlot: v(),
    blockHeight: q(v()),
    transactionCount: q(v())
  }), yo = A({
    slotsPerEpoch: v(),
    leaderScheduleSlotOffset: v(),
    warmup: ut(),
    firstNormalEpoch: v(),
    firstNormalSlot: v()
  }), mo = rs(x(), z(v())), At = B(Qe([
    A({}),
    x()
  ])), bo = A({
    err: At
  }), wo = se("receivedSignature"), ko = A({
    "solana-core": x(),
    "feature-set": q(v())
  }), vo = A({
    program: x(),
    programId: oe,
    parsed: zt()
  }), So = A({
    programId: oe,
    accounts: z(oe),
    data: x()
  }), Wn = ce(A({
    err: B(Qe([
      A({}),
      x()
    ])),
    logs: B(z(x())),
    accounts: q(B(z(B(A({
      executable: ut(),
      owner: x(),
      lamports: v(),
      data: z(x()),
      rentEpoch: q(v())
    }))))),
    unitsConsumed: q(v()),
    returnData: q(B(A({
      programId: x(),
      data: Vr([
        x(),
        se("base64")
      ])
    }))),
    innerInstructions: q(B(z(A({
      index: v(),
      instructions: z(Qe([
        vo,
        So
      ]))
    }))))
  })), Io = ce(A({
    byIdentity: rs(x(), z(v())),
    range: A({
      firstSlot: v(),
      lastSlot: v()
    })
  }));
  function _o(l, e, t, r, o, s) {
    const h = t || ro;
    let g;
    s != null && console.warn("You have supplied an `httpAgent` when creating a `Connection` in a browser environment.It has been ignored; `httpAgent` is only used in Node environments.");
    let w;
    return r && (w = async (R, M) => {
      const K = await new Promise((E, T) => {
        try {
          r(R, M, (P, N) => E([
            P,
            N
          ]));
        } catch (P) {
          T(P);
        }
      });
      return await h(...K);
    }), new Cs(async (R, M) => {
      const K = {
        method: "POST",
        body: R,
        agent: g,
        headers: Object.assign({
          "Content-Type": "application/json"
        }, e || {}, _a)
      };
      try {
        let E = 5, T, P = 500;
        for (; w ? T = await w(l, K) : T = await h(l, K), !(T.status !== 429 || o === true || (E -= 1, E === 0)); ) console.error(`Server responded with ${T.status} ${T.statusText}.  Retrying after ${P}ms delay...`), await kt(P), P *= 2;
        const N = await T.text();
        T.ok ? M(null, N) : M(new Error(`${T.status} ${T.statusText}: ${N}`));
      } catch (E) {
        E instanceof Error && M(E);
      }
    }, {});
  }
  function Ao(l) {
    return (e, t) => new Promise((r, o) => {
      l.request(e, t, (s, h) => {
        if (s) {
          o(s);
          return;
        }
        r(h);
      });
    });
  }
  function Eo(l) {
    return (e) => new Promise((t, r) => {
      e.length === 0 && t([]);
      const o = e.map((s) => l.request(s.methodName, s.args));
      l.request(o, (s, h) => {
        if (s) {
          r(s);
          return;
        }
        t(h);
      });
    });
  }
  const Ro = H(lo), Mo = H(po), Po = H(fo), xo = H(go), To = H(yo), Bo = H(mo), Lo = H(v()), Co = ce(A({
    total: v(),
    circulating: v(),
    nonCirculating: v(),
    nonCirculatingAccounts: z(oe)
  })), Wr = A({
    amount: x(),
    uiAmount: B(v()),
    decimals: v(),
    uiAmountString: q(x())
  }), No = ce(z(A({
    address: oe,
    amount: x(),
    uiAmount: B(v()),
    decimals: v(),
    uiAmountString: q(x())
  }))), zo = ce(z(A({
    pubkey: oe,
    account: A({
      executable: ut(),
      owner: oe,
      lamports: v(),
      data: Zr,
      rentEpoch: v()
    })
  }))), Ur = A({
    program: x(),
    parsed: zt(),
    space: v()
  }), Oo = ce(z(A({
    pubkey: oe,
    account: A({
      executable: ut(),
      owner: oe,
      lamports: v(),
      data: Ur,
      rentEpoch: v()
    })
  }))), Ko = ce(z(A({
    lamports: v(),
    address: oe
  }))), Ft = A({
    executable: ut(),
    owner: oe,
    lamports: v(),
    data: Zr,
    rentEpoch: v()
  }), Wo = A({
    pubkey: oe,
    account: Ft
  }), Uo = Vt(Qe([
    Fr(V),
    Ur
  ]), Qe([
    gs,
    Ur
  ]), (l) => Array.isArray(l) ? L(l, Zr) : l), Dr = A({
    executable: ut(),
    owner: oe,
    lamports: v(),
    data: Uo,
    rentEpoch: v()
  }), Do = A({
    pubkey: oe,
    account: Dr
  }), qo = A({
    state: Qe([
      se("active"),
      se("inactive"),
      se("activating"),
      se("deactivating")
    ]),
    active: v(),
    inactive: v()
  }), Fo = H(z(A({
    signature: x(),
    slot: v(),
    err: At,
    memo: B(x()),
    blockTime: q(B(v()))
  }))), Vo = H(z(A({
    signature: x(),
    slot: v(),
    err: At,
    memo: B(x()),
    blockTime: q(B(v()))
  }))), Ho = A({
    subscription: v(),
    result: ir(Ft)
  }), Go = A({
    pubkey: oe,
    account: Ft
  }), jo = A({
    subscription: v(),
    result: ir(Go)
  }), $o = A({
    parent: v(),
    slot: v(),
    root: v()
  }), Jo = A({
    subscription: v(),
    result: $o
  }), Yo = Qe([
    A({
      type: Qe([
        se("firstShredReceived"),
        se("completed"),
        se("optimisticConfirmation"),
        se("root")
      ]),
      slot: v(),
      timestamp: v()
    }),
    A({
      type: se("createdBank"),
      parent: v(),
      slot: v(),
      timestamp: v()
    }),
    A({
      type: se("frozen"),
      slot: v(),
      timestamp: v(),
      stats: A({
        numTransactionEntries: v(),
        numSuccessfulTransactions: v(),
        numFailedTransactions: v(),
        maxTransactionsPerEntry: v()
      })
    }),
    A({
      type: se("dead"),
      slot: v(),
      timestamp: v(),
      err: x()
    })
  ]), Zo = A({
    subscription: v(),
    result: Yo
  }), Xo = A({
    subscription: v(),
    result: ir(Qe([
      bo,
      wo
    ]))
  }), Qo = A({
    subscription: v(),
    result: v()
  }), ea = A({
    pubkey: x(),
    gossip: B(x()),
    tpu: B(x()),
    rpc: B(x()),
    version: B(x())
  }), Un = A({
    votePubkey: x(),
    nodePubkey: x(),
    activatedStake: v(),
    epochVoteAccount: ut(),
    epochCredits: z(Vr([
      v(),
      v(),
      v()
    ])),
    commission: v(),
    lastVote: v(),
    rootSlot: B(v())
  }), ta = H(A({
    current: z(Un),
    delinquent: z(Un)
  })), ra = Qe([
    se("processed"),
    se("confirmed"),
    se("finalized")
  ]), na = A({
    slot: v(),
    confirmations: B(v()),
    err: At,
    confirmationStatus: q(ra)
  }), sa = ce(z(B(na))), ia = H(v()), bs = A({
    accountKey: oe,
    writableIndexes: z(v()),
    readonlyIndexes: z(v())
  }), ws = A({
    computeUnitLimit: B(v()),
    heapSize: B(v()),
    loadedAccountsDataSizeLimit: B(v()),
    priorityFee: B(v())
  }), Xr = A({
    signatures: z(x()),
    message: A({
      accountKeys: z(x()),
      header: A({
        numRequiredSignatures: v(),
        numReadonlySignedAccounts: v(),
        numReadonlyUnsignedAccounts: v()
      }),
      instructions: z(A({
        accounts: z(v()),
        data: x(),
        programIdIndex: v()
      })),
      recentBlockhash: x(),
      addressTableLookups: q(z(bs)),
      transactionConfig: q(B(ws))
    })
  }), ks = A({
    pubkey: oe,
    signer: ut(),
    writable: ut(),
    source: q(Qe([
      se("transaction"),
      se("lookupTable")
    ]))
  }), vs = A({
    accountKeys: z(ks),
    signatures: z(x())
  }), Ss = A({
    parsed: zt(),
    program: x(),
    programId: oe
  }), Is = A({
    accounts: z(oe),
    data: x(),
    programId: oe
  }), oa = Qe([
    Is,
    Ss
  ]), aa = Qe([
    A({
      parsed: zt(),
      program: x(),
      programId: x()
    }),
    A({
      accounts: z(x()),
      data: x(),
      programId: x()
    })
  ]), _s = Vt(oa, aa, (l) => "accounts" in l ? L(l, Is) : L(l, Ss)), As = A({
    signatures: z(x()),
    message: A({
      accountKeys: z(ks),
      instructions: z(_s),
      recentBlockhash: x(),
      addressTableLookups: q(B(z(bs))),
      transactionConfig: q(B(ws))
    })
  }), rr = A({
    accountIndex: v(),
    mint: x(),
    owner: q(x()),
    programId: q(x()),
    uiTokenAmount: Wr
  }), Es = A({
    writable: z(oe),
    readonly: z(oe)
  }), or = A({
    err: At,
    fee: v(),
    innerInstructions: q(B(z(A({
      index: v(),
      instructions: z(A({
        accounts: z(v()),
        data: x(),
        programIdIndex: v()
      }))
    })))),
    preBalances: z(v()),
    postBalances: z(v()),
    logMessages: q(B(z(x()))),
    preTokenBalances: q(B(z(rr))),
    postTokenBalances: q(B(z(rr))),
    loadedAddresses: q(Es),
    computeUnitsConsumed: q(v()),
    costUnits: q(v())
  }), Qr = A({
    err: At,
    fee: v(),
    innerInstructions: q(B(z(A({
      index: v(),
      instructions: z(_s)
    })))),
    preBalances: z(v()),
    postBalances: z(v()),
    logMessages: q(B(z(x()))),
    preTokenBalances: q(B(z(rr))),
    postTokenBalances: q(B(z(rr))),
    loadedAddresses: q(Es),
    computeUnitsConsumed: q(v()),
    costUnits: q(v())
  }), Ot = Qe([
    se(0),
    se(1),
    se("legacy")
  ]), Et = A({
    pubkey: x(),
    lamports: v(),
    postBalance: B(v()),
    rewardType: B(x()),
    commission: q(B(v()))
  }), ca = H(B(A({
    blockhash: x(),
    previousBlockhash: x(),
    parentSlot: v(),
    transactions: z(A({
      transaction: Xr,
      meta: B(or),
      version: q(Ot)
    })),
    rewards: q(z(Et)),
    blockTime: B(v()),
    blockHeight: B(v())
  }))), ua = H(B(A({
    blockhash: x(),
    previousBlockhash: x(),
    parentSlot: v(),
    rewards: q(z(Et)),
    blockTime: B(v()),
    blockHeight: B(v())
  }))), la = H(B(A({
    blockhash: x(),
    previousBlockhash: x(),
    parentSlot: v(),
    transactions: z(A({
      transaction: vs,
      meta: B(or),
      version: q(Ot)
    })),
    rewards: q(z(Et)),
    blockTime: B(v()),
    blockHeight: B(v())
  }))), ha = H(B(A({
    blockhash: x(),
    previousBlockhash: x(),
    parentSlot: v(),
    transactions: z(A({
      transaction: As,
      meta: B(Qr),
      version: q(Ot)
    })),
    rewards: q(z(Et)),
    blockTime: B(v()),
    blockHeight: B(v())
  }))), da = H(B(A({
    blockhash: x(),
    previousBlockhash: x(),
    parentSlot: v(),
    transactions: z(A({
      transaction: vs,
      meta: B(Qr),
      version: q(Ot)
    })),
    rewards: q(z(Et)),
    blockTime: B(v()),
    blockHeight: B(v())
  }))), fa = H(B(A({
    blockhash: x(),
    previousBlockhash: x(),
    parentSlot: v(),
    rewards: q(z(Et)),
    blockTime: B(v()),
    blockHeight: B(v())
  }))), pa = H(B(A({
    blockhash: x(),
    previousBlockhash: x(),
    parentSlot: v(),
    transactions: z(A({
      transaction: Xr,
      meta: B(or)
    })),
    rewards: q(z(Et)),
    blockTime: B(v())
  }))), Dn = H(B(A({
    blockhash: x(),
    previousBlockhash: x(),
    parentSlot: v(),
    signatures: z(x()),
    blockTime: B(v())
  }))), Br = H(B(A({
    slot: v(),
    meta: B(or),
    blockTime: q(B(v())),
    transaction: Xr,
    version: q(Ot)
  }))), Jt = H(B(A({
    slot: v(),
    transaction: As,
    meta: B(Qr),
    blockTime: q(B(v())),
    version: q(Ot)
  }))), ga = ce(A({
    blockhash: x(),
    lastValidBlockHeight: v()
  })), ya = ce(ut()), ma = A({
    slot: v(),
    numTransactions: v(),
    numSlots: v(),
    samplePeriodSecs: v()
  }), ba = H(z(ma)), wa = ce(B(A({
    feeCalculator: A({
      lamportsPerSignature: v()
    })
  }))), ka = H(x()), va = H(x()), Sa = A({
    err: At,
    logs: z(x()),
    signature: x()
  }), Ia = A({
    result: ir(Sa),
    subscription: v()
  }), _a = {
    "solana-client": "js/1.99.0"
  };
  class Rs {
    constructor(e, t) {
      this._commitment = void 0, this._confirmTransactionInitialTimeout = void 0, this._rpcEndpoint = void 0, this._rpcWsEndpoint = void 0, this._rpcClient = void 0, this._rpcRequest = void 0, this._rpcBatchRequest = void 0, this._rpcWebSocket = void 0, this._rpcWebSocketConnected = false, this._rpcWebSocketHeartbeat = null, this._rpcWebSocketIdleTimeout = null, this._rpcWebSocketGeneration = 0, this._disableBlockhashCaching = false, this._pollingBlockhash = false, this._blockhashInfo = {
        latestBlockhash: null,
        lastFetch: 0,
        transactionSignatures: [],
        simulatedSignatures: []
      }, this._nextClientSubscriptionId = 0, this._subscriptionDisposeFunctionsByClientSubscriptionId = {}, this._subscriptionHashByClientSubscriptionId = {}, this._subscriptionStateChangeCallbacksByHash = {}, this._subscriptionCallbacksByServerSubscriptionId = {}, this._subscriptionsByHash = {}, this._subscriptionsAutoDisposedByRpc = /* @__PURE__ */ new Set(), this.getBlockHeight = /* @__PURE__ */ (() => {
        const S = {};
        return async (R) => {
          const { commitment: M, config: K } = re(R), E = this._buildArgs([], M, void 0, K), T = zn(E);
          return S[T] = S[T] ?? (async () => {
            try {
              const P = await this._rpcRequest("getBlockHeight", E), N = L(P, H(v()));
              if ("error" in N) throw new D(N.error, "failed to get block height information");
              return N.result;
            } finally {
              delete S[T];
            }
          })(), await S[T];
        };
      })();
      let r, o, s, h, g, w;
      t && typeof t == "string" ? this._commitment = t : t && (this._commitment = t.commitment, this._confirmTransactionInitialTimeout = t.confirmTransactionInitialTimeout, r = t.wsEndpoint, o = t.httpHeaders, s = t.fetch, h = t.fetchMiddleware, g = t.disableRetryOnRateLimit, w = t.httpAgent), this._rpcEndpoint = co(e), this._rpcWsEndpoint = r || ao(e), this._rpcClient = _o(e, o, s, h, g, w), this._rpcRequest = Ao(this._rpcClient), this._rpcBatchRequest = Eo(this._rpcClient), this._rpcWebSocket = new no(this._rpcWsEndpoint, {
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
      const { commitment: r, config: o } = re(t), s = this._buildArgs([
        e.toBase58()
      ], r, void 0, o), h = await this._rpcRequest("getBalance", s), g = L(h, ce(v()));
      if ("error" in g) throw new D(g.error, `failed to get balance for ${e.toBase58()}`);
      return g.result;
    }
    async getBalance(e, t) {
      return await this.getBalanceAndContext(e, t).then((r) => r.value).catch((r) => {
        throw new Error("failed to get balance of account " + e.toBase58() + ": " + r);
      });
    }
    async getBlockTime(e) {
      const t = await this._rpcRequest("getBlockTime", [
        e
      ]), r = L(t, H(B(v())));
      if ("error" in r) throw new D(r.error, `failed to get block time for slot ${e}`);
      return r.result;
    }
    async getMinimumLedgerSlot() {
      const e = await this._rpcRequest("minimumLedgerSlot", []), t = L(e, H(v()));
      if ("error" in t) throw new D(t.error, "failed to get minimum ledger slot");
      return t.result;
    }
    async getFirstAvailableBlock() {
      const e = await this._rpcRequest("getFirstAvailableBlock", []), t = L(e, Lo);
      if ("error" in t) throw new D(t.error, "failed to get first available block");
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
      ]), o = L(r, Co);
      if ("error" in o) throw new D(o.error, "failed to get supply");
      return o.result;
    }
    async getTokenSupply(e, t) {
      const r = this._buildArgs([
        e.toBase58()
      ], t), o = await this._rpcRequest("getTokenSupply", r), s = L(o, ce(Wr));
      if ("error" in s) throw new D(s.error, "failed to get token supply");
      return s.result;
    }
    async getTokenAccountBalance(e, t) {
      const r = this._buildArgs([
        e.toBase58()
      ], t), o = await this._rpcRequest("getTokenAccountBalance", r), s = L(o, ce(Wr));
      if ("error" in s) throw new D(s.error, "failed to get token account balance");
      return s.result;
    }
    async getTokenAccountsByOwner(e, t, r) {
      const { commitment: o, config: s } = re(r);
      let h = [
        e.toBase58()
      ];
      "mint" in t ? h.push({
        mint: t.mint.toBase58()
      }) : h.push({
        programId: t.programId.toBase58()
      });
      const g = this._buildArgs(h, o, "base64", s), w = await this._rpcRequest("getTokenAccountsByOwner", g), S = L(w, zo);
      if ("error" in S) throw new D(S.error, `failed to get token accounts owned by account ${e.toBase58()}`);
      return S.result;
    }
    async getParsedTokenAccountsByOwner(e, t, r) {
      let o = [
        e.toBase58()
      ];
      "mint" in t ? o.push({
        mint: t.mint.toBase58()
      }) : o.push({
        programId: t.programId.toBase58()
      });
      const s = this._buildArgs(o, r, "jsonParsed"), h = await this._rpcRequest("getTokenAccountsByOwner", s), g = L(h, Oo);
      if ("error" in g) throw new D(g.error, `failed to get token accounts owned by account ${e.toBase58()}`);
      return g.result;
    }
    async getLargestAccounts(e) {
      const t = {
        ...e,
        commitment: e && e.commitment || this.commitment
      }, r = t.filter || t.commitment ? [
        t
      ] : [], o = await this._rpcRequest("getLargestAccounts", r), s = L(o, Ko);
      if ("error" in s) throw new D(s.error, "failed to get largest accounts");
      return s.result;
    }
    async getTokenLargestAccounts(e, t) {
      const r = this._buildArgs([
        e.toBase58()
      ], t), o = await this._rpcRequest("getTokenLargestAccounts", r), s = L(o, No);
      if ("error" in s) throw new D(s.error, "failed to get token largest accounts");
      return s.result;
    }
    async getAccountInfoAndContext(e, t) {
      const { commitment: r, config: o } = re(t), s = this._buildArgs([
        e.toBase58()
      ], r, "base64", o), h = await this._rpcRequest("getAccountInfo", s), g = L(h, ce(B(Ft)));
      if ("error" in g) throw new D(g.error, `failed to get info about account ${e.toBase58()}`);
      return g.result;
    }
    async getParsedAccountInfo(e, t) {
      const { commitment: r, config: o } = re(t), s = this._buildArgs([
        e.toBase58()
      ], r, "jsonParsed", o), h = await this._rpcRequest("getAccountInfo", s), g = L(h, ce(B(Dr)));
      if ("error" in g) throw new D(g.error, `failed to get info about account ${e.toBase58()}`);
      return g.result;
    }
    async getAccountInfo(e, t) {
      try {
        return (await this.getAccountInfoAndContext(e, t)).value;
      } catch (r) {
        throw new Error("failed to get info about account " + e.toBase58() + ": " + r);
      }
    }
    async getMultipleParsedAccounts(e, t) {
      const { commitment: r, config: o } = re(t), s = e.map((S) => S.toBase58()), h = this._buildArgs([
        s
      ], r, "jsonParsed", o), g = await this._rpcRequest("getMultipleAccounts", h), w = L(g, ce(z(B(Dr))));
      if ("error" in w) throw new D(w.error, `failed to get info for accounts ${s}`);
      return w.result;
    }
    async getMultipleAccountsInfoAndContext(e, t) {
      const { commitment: r, config: o } = re(t), s = e.map((S) => S.toBase58()), h = this._buildArgs([
        s
      ], r, "base64", o), g = await this._rpcRequest("getMultipleAccounts", h), w = L(g, ce(z(B(Ft))));
      if ("error" in w) throw new D(w.error, `failed to get info for accounts ${s}`);
      return w.result;
    }
    async getMultipleAccountsInfo(e, t) {
      return (await this.getMultipleAccountsInfoAndContext(e, t)).value;
    }
    async getStakeActivation(e, t, r) {
      const { commitment: o, config: s } = re(t), h = this._buildArgs([
        e.toBase58()
      ], o, void 0, {
        ...s,
        epoch: r ?? (s == null ? void 0 : s.epoch)
      }), g = await this._rpcRequest("getStakeActivation", h), w = L(g, H(qo));
      if ("error" in w) throw new D(w.error, `failed to get Stake Activation ${e.toBase58()}`);
      return w.result;
    }
    async getProgramAccounts(e, t) {
      const { commitment: r, config: o } = re(t), { encoding: s, ...h } = o || {}, g = this._buildArgs([
        e.toBase58()
      ], r, s || "base64", {
        ...h,
        ...h.filters ? {
          filters: Kn(h.filters)
        } : null
      }), w = await this._rpcRequest("getProgramAccounts", g), S = z(Wo), R = h.withContext === true ? L(w, ce(S)) : L(w, H(S));
      if ("error" in R) throw new D(R.error, `failed to get accounts owned by program ${e.toBase58()}`);
      return R.result;
    }
    async getParsedProgramAccounts(e, t) {
      const { commitment: r, config: o } = re(t), s = this._buildArgs([
        e.toBase58()
      ], r, "jsonParsed", o), h = await this._rpcRequest("getProgramAccounts", s), g = L(h, H(z(Do)));
      if ("error" in g) throw new D(g.error, `failed to get accounts owned by program ${e.toBase58()}`);
      return g.result;
    }
    async confirmTransaction(e, t) {
      var _a3;
      let r;
      if (typeof e == "string") r = e;
      else {
        const s = e;
        if ((_a3 = s.abortSignal) == null ? void 0 : _a3.aborted) return Promise.reject(s.abortSignal.reason);
        r = s.signature;
      }
      let o;
      try {
        o = je.decode(r);
      } catch {
        throw new Error("signature must be base58 encoded: " + r);
      }
      return j(o.length === 64, "signature has invalid length"), typeof e == "string" ? await this.confirmTransactionUsingLegacyTimeoutStrategy({
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
      let r, o, s = false;
      const h = new Promise((w, S) => {
        try {
          r = this.onSignature(t, (M, K) => {
            r = void 0;
            const E = {
              context: K,
              value: M
            };
            w({
              __type: ht.PROCESSED,
              response: E
            });
          }, e);
          const R = new Promise((M) => {
            r == null ? M() : o = this._onSubscriptionStateChange(r, (K) => {
              K === "subscribed" && M();
            });
          });
          (async () => {
            if (await R, s) return;
            const M = await this.getSignatureStatus(t);
            if (s || M == null) return;
            const { context: K, value: E } = M;
            if (E != null) if (E == null ? void 0 : E.err) S(E.err);
            else {
              switch (e) {
                case "confirmed":
                case "single":
                case "singleGossip": {
                  if (E.confirmationStatus === "processed") return;
                  break;
                }
                case "finalized":
                case "max":
                case "root": {
                  if (E.confirmationStatus === "processed" || E.confirmationStatus === "confirmed") return;
                  break;
                }
                case "processed":
                case "recent":
              }
              s = true, w({
                __type: ht.PROCESSED,
                response: {
                  context: K,
                  value: E
                }
              });
            }
          })();
        } catch (R) {
          S(R);
        }
      });
      return {
        abortConfirmation: () => {
          o && (o(), o = void 0), r != null && (this.removeSignatureListener(r), r = void 0);
        },
        confirmationPromise: h
      };
    }
    async confirmTransactionUsingBlockHeightExceedanceStrategy({ commitment: e, strategy: { abortSignal: t, lastValidBlockHeight: r, signature: o } }) {
      let s = false;
      const h = new Promise((M) => {
        const K = async () => {
          try {
            return await this.getBlockHeight(e);
          } catch {
            return -1;
          }
        };
        (async () => {
          let E = await K();
          if (!s) {
            for (; E <= r; ) if (await kt(1e3), s || (E = await K(), s)) return;
            M({
              __type: ht.BLOCKHEIGHT_EXCEEDED
            });
          }
        })();
      }), { abortConfirmation: g, confirmationPromise: w } = this.getTransactionConfirmationPromise({
        commitment: e,
        signature: o
      }), S = this.getCancellationPromise(t);
      let R;
      try {
        const M = await Promise.race([
          S,
          w,
          h
        ]);
        if (M.__type === ht.PROCESSED) R = M.response;
        else throw new $r(o);
      } finally {
        s = true, g();
      }
      return R;
    }
    async confirmTransactionUsingDurableNonceStrategy({ commitment: e, strategy: { abortSignal: t, minContextSlot: r, nonceAccountPubkey: o, nonceValue: s, signature: h } }) {
      let g = false;
      const w = new Promise((E) => {
        let T = s, P = null;
        const N = async () => {
          try {
            const { context: F, value: Q } = await this.getNonceAndContext(o, {
              commitment: e,
              minContextSlot: r
            });
            return P = F.slot, Q == null ? void 0 : Q.nonce;
          } catch {
            return T;
          }
        };
        (async () => {
          if (T = await N(), !g) for (; ; ) {
            if (s !== T) {
              E({
                __type: ht.NONCE_INVALID,
                slotInWhichNonceDidAdvance: P
              });
              return;
            }
            if (await kt(2e3), g || (T = await N(), g)) return;
          }
        })();
      }), { abortConfirmation: S, confirmationPromise: R } = this.getTransactionConfirmationPromise({
        commitment: e,
        signature: h
      }), M = this.getCancellationPromise(t);
      let K;
      try {
        const E = await Promise.race([
          M,
          R,
          w
        ]);
        if (E.__type === ht.PROCESSED) K = E.response;
        else {
          let T;
          for (; ; ) {
            const P = await this.getSignatureStatus(h);
            if (P == null) break;
            if (P.context.slot < (E.slotInWhichNonceDidAdvance ?? r)) {
              await kt(400);
              continue;
            }
            T = P;
            break;
          }
          if (T == null ? void 0 : T.value) {
            const P = e || "finalized", { confirmationStatus: N } = T.value;
            switch (P) {
              case "processed":
              case "recent":
                if (N !== "processed" && N !== "confirmed" && N !== "finalized") throw new Mt(h);
                break;
              case "confirmed":
              case "single":
              case "singleGossip":
                if (N !== "confirmed" && N !== "finalized") throw new Mt(h);
                break;
              case "finalized":
              case "max":
              case "root":
                if (N !== "finalized") throw new Mt(h);
                break;
              default:
            }
            K = {
              context: T.context,
              value: {
                err: T.value.err
              }
            };
          } else throw new Mt(h);
        }
      } finally {
        g = true, S();
      }
      return K;
    }
    async confirmTransactionUsingLegacyTimeoutStrategy({ commitment: e, signature: t }) {
      let r;
      const o = new Promise((w) => {
        let S = this._confirmTransactionInitialTimeout || 6e4;
        switch (e) {
          case "processed":
          case "recent":
          case "single":
          case "confirmed":
          case "singleGossip": {
            S = this._confirmTransactionInitialTimeout || 3e4;
            break;
          }
        }
        r = setTimeout(() => w({
          __type: ht.TIMED_OUT,
          timeoutMs: S
        }), S);
      }), { abortConfirmation: s, confirmationPromise: h } = this.getTransactionConfirmationPromise({
        commitment: e,
        signature: t
      });
      let g;
      try {
        const w = await Promise.race([
          h,
          o
        ]);
        if (w.__type === ht.PROCESSED) g = w.response;
        else throw new Jr(t, w.timeoutMs / 1e3);
      } finally {
        clearTimeout(r), s();
      }
      return g;
    }
    async getClusterNodes() {
      const e = await this._rpcRequest("getClusterNodes", []), t = L(e, H(z(ea)));
      if ("error" in t) throw new D(t.error, "failed to get cluster nodes");
      return t.result;
    }
    async getVoteAccounts(e) {
      const t = this._buildArgs([], e), r = await this._rpcRequest("getVoteAccounts", t), o = L(r, ta);
      if ("error" in o) throw new D(o.error, "failed to get vote accounts");
      return o.result;
    }
    async getSlot(e) {
      const { commitment: t, config: r } = re(e), o = this._buildArgs([], t, void 0, r), s = await this._rpcRequest("getSlot", o), h = L(s, H(v()));
      if ("error" in h) throw new D(h.error, "failed to get slot");
      return h.result;
    }
    async getSlotLeader(e) {
      const { commitment: t, config: r } = re(e), o = this._buildArgs([], t, void 0, r), s = await this._rpcRequest("getSlotLeader", o), h = L(s, H(x()));
      if ("error" in h) throw new D(h.error, "failed to get slot leader");
      return h.result;
    }
    async getSlotLeaders(e, t) {
      const r = [
        e,
        t
      ], o = await this._rpcRequest("getSlotLeaders", r), s = L(o, H(z(oe)));
      if ("error" in s) throw new D(s.error, "failed to get slot leaders");
      return s.result;
    }
    async getSignatureStatus(e, t) {
      const { context: r, value: o } = await this.getSignatureStatuses([
        e
      ], t);
      j(o.length === 1);
      const s = o[0];
      return {
        context: r,
        value: s
      };
    }
    async getSignatureStatuses(e, t) {
      const r = [
        e
      ];
      t && r.push(t);
      const o = await this._rpcRequest("getSignatureStatuses", r), s = L(o, sa);
      if ("error" in s) throw new D(s.error, "failed to get signature status");
      return s.result;
    }
    async getTransactionCount(e) {
      const { commitment: t, config: r } = re(e), o = this._buildArgs([], t, void 0, r), s = await this._rpcRequest("getTransactionCount", o), h = L(s, H(v()));
      if ("error" in h) throw new D(h.error, "failed to get transaction count");
      return h.result;
    }
    async getTotalSupply(e) {
      return (await this.getSupply({
        commitment: e,
        excludeNonCirculatingAccountsList: true
      })).value.total;
    }
    async getInflationGovernor(e) {
      const t = this._buildArgs([], e), r = await this._rpcRequest("getInflationGovernor", t), o = L(r, Ro);
      if ("error" in o) throw new D(o.error, "failed to get inflation");
      return o.result;
    }
    async getInflationReward(e, t, r) {
      const { commitment: o, config: s } = re(r), h = this._buildArgs([
        e.map((S) => S.toBase58())
      ], o, void 0, {
        ...s,
        epoch: t ?? (s == null ? void 0 : s.epoch)
      }), g = await this._rpcRequest("getInflationReward", h), w = L(g, ho);
      if ("error" in w) throw new D(w.error, "failed to get inflation reward");
      return w.result;
    }
    async getInflationRate() {
      const e = await this._rpcRequest("getInflationRate", []), t = L(e, Mo);
      if ("error" in t) throw new D(t.error, "failed to get inflation rate");
      return t.result;
    }
    async getEpochInfo(e) {
      const { commitment: t, config: r } = re(e), o = this._buildArgs([], t, void 0, r), s = await this._rpcRequest("getEpochInfo", o), h = L(s, xo);
      if ("error" in h) throw new D(h.error, "failed to get epoch info");
      return h.result;
    }
    async getEpochSchedule() {
      const e = await this._rpcRequest("getEpochSchedule", []), t = L(e, To);
      if ("error" in t) throw new D(t.error, "failed to get epoch schedule");
      const r = t.result;
      return new ps(r.slotsPerEpoch, r.leaderScheduleSlotOffset, r.warmup, r.firstNormalEpoch, r.firstNormalSlot);
    }
    async getLeaderSchedule() {
      const e = await this._rpcRequest("getLeaderSchedule", []), t = L(e, Bo);
      if ("error" in t) throw new D(t.error, "failed to get leader schedule");
      return t.result;
    }
    async getMinimumBalanceForRentExemption(e, t) {
      const r = this._buildArgs([
        e
      ], t), o = await this._rpcRequest("getMinimumBalanceForRentExemption", r), s = L(o, ia);
      return "error" in s ? (console.warn("Unable to fetch minimum balance for rent exemption"), 0) : s.result;
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
      ] : []), r = L(t, ba);
      if ("error" in r) throw new D(r.error, "failed to get recent performance samples");
      return r.result;
    }
    async getFeeCalculatorForBlockhash(e, t) {
      const r = this._buildArgs([
        e
      ], t), o = await this._rpcRequest("getFeeCalculatorForBlockhash", r), s = L(o, wa);
      if ("error" in s) throw new D(s.error, "failed to get fee calculator");
      const { context: h, value: g } = s.result;
      return {
        context: h,
        value: g !== null ? g.feeCalculator : null
      };
    }
    async getFeeForMessage(e, t) {
      const r = G(e.serialize()).toString("base64"), o = this._buildArgs([
        r
      ], t), s = await this._rpcRequest("getFeeForMessage", o), h = L(s, ce(B(v())));
      if ("error" in h) throw new D(h.error, "failed to get fee for message");
      if (h.result === null) throw new Error("invalid blockhash");
      return h.result;
    }
    async getRecentPrioritizationFees(e) {
      var _a3;
      const t = (_a3 = e == null ? void 0 : e.lockedWritableAccounts) == null ? void 0 : _a3.map((h) => h.toBase58()), r = (t == null ? void 0 : t.length) ? [
        t
      ] : [], o = await this._rpcRequest("getRecentPrioritizationFees", r), s = L(o, Po);
      if ("error" in s) throw new D(s.error, "failed to get recent prioritization fees");
      return s.result;
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
      const { commitment: t, config: r } = re(e), o = this._buildArgs([], t, void 0, r), s = await this._rpcRequest("getLatestBlockhash", o), h = L(s, ga);
      if ("error" in h) throw new D(h.error, "failed to get latest blockhash");
      return h.result;
    }
    async isBlockhashValid(e, t) {
      const { commitment: r, config: o } = re(t), s = this._buildArgs([
        e
      ], r, void 0, o), h = await this._rpcRequest("isBlockhashValid", s), g = L(h, ya);
      if ("error" in g) throw new D(g.error, "failed to determine if the blockhash `" + e + "`is valid");
      return g.result;
    }
    async getVersion() {
      const e = await this._rpcRequest("getVersion", []), t = L(e, H(ko));
      if ("error" in t) throw new D(t.error, "failed to get version");
      return t.result;
    }
    async getGenesisHash() {
      const e = await this._rpcRequest("getGenesisHash", []), t = L(e, H(x()));
      if ("error" in t) throw new D(t.error, "failed to get genesis hash");
      return t.result;
    }
    async getBlock(e, t) {
      const { commitment: r, config: o } = re(t), s = this._buildArgsAtLeastConfirmed([
        e
      ], r, void 0, o), h = await this._rpcRequest("getBlock", s);
      try {
        switch (o == null ? void 0 : o.transactionDetails) {
          case "accounts": {
            const g = L(h, la);
            if ("error" in g) throw g.error;
            return g.result;
          }
          case "none": {
            const g = L(h, ua);
            if ("error" in g) throw g.error;
            return g.result;
          }
          default: {
            const g = L(h, ca);
            if ("error" in g) throw g.error;
            const { result: w } = g;
            return w ? {
              ...w,
              transactions: w.transactions.map(({ transaction: S, meta: R, version: M }) => ({
                meta: R,
                transaction: {
                  ...S,
                  message: Tr(M, S.message)
                },
                version: M
              }))
            } : null;
          }
        }
      } catch (g) {
        throw new D(g, "failed to get confirmed block");
      }
    }
    async getParsedBlock(e, t) {
      const { commitment: r, config: o } = re(t), s = this._buildArgsAtLeastConfirmed([
        e
      ], r, "jsonParsed", o), h = await this._rpcRequest("getBlock", s);
      try {
        switch (o == null ? void 0 : o.transactionDetails) {
          case "accounts": {
            const g = L(h, da);
            if ("error" in g) throw g.error;
            return g.result;
          }
          case "none": {
            const g = L(h, fa);
            if ("error" in g) throw g.error;
            return g.result;
          }
          default: {
            const g = L(h, ha);
            if ("error" in g) throw g.error;
            return g.result;
          }
        }
      } catch (g) {
        throw new D(g, "failed to get block");
      }
    }
    async getBlockProduction(e) {
      let t, r;
      if (typeof e == "string") r = e;
      else if (e) {
        const { commitment: g, ...w } = e;
        r = g, t = w;
      }
      const o = this._buildArgs([], r, "base64", t), s = await this._rpcRequest("getBlockProduction", o), h = L(s, Io);
      if ("error" in h) throw new D(h.error, "failed to get block production information");
      return h.result;
    }
    async getTransaction(e, t) {
      const { commitment: r, config: o } = re(t), s = this._buildArgsAtLeastConfirmed([
        e
      ], r, void 0, o), h = await this._rpcRequest("getTransaction", s), g = L(h, Br);
      if ("error" in g) throw new D(g.error, "failed to get transaction");
      const w = g.result;
      return w && {
        ...w,
        transaction: {
          ...w.transaction,
          message: Tr(w.version, w.transaction.message)
        }
      };
    }
    async getParsedTransaction(e, t) {
      const { commitment: r, config: o } = re(t), s = this._buildArgsAtLeastConfirmed([
        e
      ], r, "jsonParsed", o), h = await this._rpcRequest("getTransaction", s), g = L(h, Jt);
      if ("error" in g) throw new D(g.error, "failed to get transaction");
      return g.result;
    }
    async getParsedTransactions(e, t) {
      const { commitment: r, config: o } = re(t), s = e.map((w) => ({
        methodName: "getTransaction",
        args: this._buildArgsAtLeastConfirmed([
          w
        ], r, "jsonParsed", o)
      }));
      return (await this._rpcBatchRequest(s)).map((w) => {
        const S = L(w, Jt);
        if ("error" in S) throw new D(S.error, "failed to get transactions");
        return S.result;
      });
    }
    async getTransactions(e, t) {
      const { commitment: r, config: o } = re(t), s = e.map((w) => ({
        methodName: "getTransaction",
        args: this._buildArgsAtLeastConfirmed([
          w
        ], r, void 0, o)
      }));
      return (await this._rpcBatchRequest(s)).map((w) => {
        const S = L(w, Br);
        if ("error" in S) throw new D(S.error, "failed to get transactions");
        const R = S.result;
        return R && {
          ...R,
          transaction: {
            ...R.transaction,
            message: Tr(R.version, R.transaction.message)
          }
        };
      });
    }
    async getConfirmedBlock(e, t) {
      const r = this._buildArgsAtLeastConfirmed([
        e
      ], t), o = await this._rpcRequest("getBlock", r), s = L(o, pa);
      if ("error" in s) throw new D(s.error, "failed to get confirmed block");
      const h = s.result;
      if (!h) throw new Error("Confirmed block " + e + " not found");
      const g = {
        ...h,
        transactions: h.transactions.map(({ transaction: w, meta: S }) => {
          const R = new st(w.message);
          return {
            meta: S,
            transaction: {
              ...w,
              message: R
            }
          };
        })
      };
      return {
        ...g,
        transactions: g.transactions.map(({ transaction: w, meta: S }) => ({
          meta: S,
          transaction: Y.populate(w.message, w.signatures)
        }))
      };
    }
    async getBlocks(e, t, r) {
      const o = this._buildArgsAtLeastConfirmed(t !== void 0 ? [
        e,
        t
      ] : [
        e
      ], r), s = await this._rpcRequest("getBlocks", o), h = L(s, H(z(v())));
      if ("error" in h) throw new D(h.error, "failed to get blocks");
      return h.result;
    }
    async getBlockSignatures(e, t) {
      const r = this._buildArgsAtLeastConfirmed([
        e
      ], t, void 0, {
        transactionDetails: "signatures",
        rewards: false
      }), o = await this._rpcRequest("getBlock", r), s = L(o, Dn);
      if ("error" in s) throw new D(s.error, "failed to get block");
      const h = s.result;
      if (!h) throw new Error("Block " + e + " not found");
      return h;
    }
    async getConfirmedBlockSignatures(e, t) {
      const r = this._buildArgsAtLeastConfirmed([
        e
      ], t, void 0, {
        transactionDetails: "signatures",
        rewards: false
      }), o = await this._rpcRequest("getBlock", r), s = L(o, Dn);
      if ("error" in s) throw new D(s.error, "failed to get confirmed block");
      const h = s.result;
      if (!h) throw new Error("Confirmed block " + e + " not found");
      return h;
    }
    async getConfirmedTransaction(e, t) {
      const r = this._buildArgsAtLeastConfirmed([
        e
      ], t), o = await this._rpcRequest("getTransaction", r), s = L(o, Br);
      if ("error" in s) throw new D(s.error, "failed to get transaction");
      const h = s.result;
      if (!h) return h;
      const g = new st(h.transaction.message), w = h.transaction.signatures;
      return {
        ...h,
        transaction: Y.populate(g, w)
      };
    }
    async getParsedConfirmedTransaction(e, t) {
      const r = this._buildArgsAtLeastConfirmed([
        e
      ], t, "jsonParsed"), o = await this._rpcRequest("getTransaction", r), s = L(o, Jt);
      if ("error" in s) throw new D(s.error, "failed to get confirmed transaction");
      return s.result;
    }
    async getParsedConfirmedTransactions(e, t) {
      const r = e.map((h) => ({
        methodName: "getTransaction",
        args: this._buildArgsAtLeastConfirmed([
          h
        ], t, "jsonParsed")
      }));
      return (await this._rpcBatchRequest(r)).map((h) => {
        const g = L(h, Jt);
        if ("error" in g) throw new D(g.error, "failed to get confirmed transactions");
        return g.result;
      });
    }
    async getConfirmedSignaturesForAddress(e, t, r) {
      let o = {}, s = await this.getFirstAvailableBlock();
      for (; !("until" in o) && (t--, !(t <= 0 || t < s)); ) try {
        const w = await this.getConfirmedBlockSignatures(t, "finalized");
        w.signatures.length > 0 && (o.until = w.signatures[w.signatures.length - 1].toString());
      } catch (w) {
        if (w instanceof Error && w.message.includes("skipped")) continue;
        throw w;
      }
      let h = await this.getSlot("finalized");
      for (; !("before" in o) && (r++, !(r > h)); ) try {
        const w = await this.getConfirmedBlockSignatures(r);
        w.signatures.length > 0 && (o.before = w.signatures[w.signatures.length - 1].toString());
      } catch (w) {
        if (w instanceof Error && w.message.includes("skipped")) continue;
        throw w;
      }
      return (await this.getConfirmedSignaturesForAddress2(e, o)).map((w) => w.signature);
    }
    async getConfirmedSignaturesForAddress2(e, t, r) {
      const o = this._buildArgsAtLeastConfirmed([
        e.toBase58()
      ], r, void 0, t), s = await this._rpcRequest("getConfirmedSignaturesForAddress2", o), h = L(s, Fo);
      if ("error" in h) throw new D(h.error, "failed to get confirmed signatures for address");
      return h.result;
    }
    async getSignaturesForAddress(e, t, r) {
      const o = this._buildArgsAtLeastConfirmed([
        e.toBase58()
      ], r, void 0, t), s = await this._rpcRequest("getSignaturesForAddress", o), h = L(s, Vo);
      if ("error" in h) throw new D(h.error, "failed to get signatures for address");
      return h.result;
    }
    async getAddressLookupTable(e, t) {
      const { context: r, value: o } = await this.getAccountInfoAndContext(e, t);
      let s = null;
      return o !== null && (s = new Kr({
        key: e,
        state: Kr.deserialize(o.data)
      })), {
        context: r,
        value: s
      };
    }
    async getNonceAndContext(e, t) {
      const { context: r, value: o } = await this.getAccountInfoAndContext(e, t);
      let s = null;
      return o !== null && (s = sr.fromAccountData(o.data)), {
        context: r,
        value: s
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
      ]), o = L(r, ka);
      if ("error" in o) throw new D(o.error, `airdrop to ${e.toBase58()} failed`);
      return o.result;
    }
    async _blockhashWithExpiryBlockHeight(e) {
      if (!e) {
        for (; this._pollingBlockhash; ) await kt(100);
        const r = Date.now() - this._blockhashInfo.lastFetch >= ys;
        if (this._blockhashInfo.latestBlockhash !== null && !r) return this._blockhashInfo.latestBlockhash;
      }
      return await this._pollNewBlockhash();
    }
    async _pollNewBlockhash() {
      this._pollingBlockhash = true;
      try {
        const e = Date.now(), t = this._blockhashInfo.latestBlockhash, r = t ? t.blockhash : null;
        for (let o = 0; o < 50; o++) {
          const s = await this.getLatestBlockhash("finalized");
          if (r !== s.blockhash) return this._blockhashInfo = {
            latestBlockhash: s,
            lastFetch: Date.now(),
            transactionSignatures: [],
            simulatedSignatures: []
          }, s;
          await kt(hs / 2);
        }
        throw new Error(`Unable to obtain a new blockhash after ${Date.now() - e}ms`);
      } finally {
        this._pollingBlockhash = false;
      }
    }
    async getStakeMinimumDelegation(e) {
      const { commitment: t, config: r } = re(e), o = this._buildArgs([], t, "base64", r), s = await this._rpcRequest("getStakeMinimumDelegation", o), h = L(s, ce(v()));
      if ("error" in h) throw new D(h.error, "failed to get stake minimum delegation");
      return h.result;
    }
    async simulateTransaction(e, t, r) {
      if ("message" in e) {
        const P = e.serialize(), N = V.from(P).toString("base64");
        if (Array.isArray(t) || r !== void 0) throw new Error("Invalid arguments");
        const F = t || {};
        F.encoding = "base64", "commitment" in F || (F.commitment = this.commitment), t && typeof t == "object" && "innerInstructions" in t && (F.innerInstructions = t.innerInstructions);
        const Q = [
          N,
          F
        ], Ze = await this._rpcRequest("simulateTransaction", Q), Xe = L(Ze, Wn);
        if ("error" in Xe) throw new Error("failed to simulate transaction: " + Xe.error.message);
        return Xe.result;
      }
      let o;
      if (e instanceof Y) {
        let T = e;
        o = new Y(), o.feePayer = T.feePayer, o.instructions = e.instructions, o.nonceInfo = T.nonceInfo, o.signatures = T.signatures;
      } else o = Y.populate(e), o._message = o._json = void 0;
      if (t !== void 0 && !Array.isArray(t)) throw new Error("Invalid arguments");
      const s = t;
      if (o.nonceInfo && s) o.sign(...s);
      else {
        let T = this._disableBlockhashCaching;
        for (; ; ) {
          const P = await this._blockhashWithExpiryBlockHeight(T);
          if (o.lastValidBlockHeight = P.lastValidBlockHeight, o.recentBlockhash = P.blockhash, !s) break;
          if (o.sign(...s), !o.signature) throw new Error("!signature");
          const N = o.signature.toString("base64");
          if (!this._blockhashInfo.simulatedSignatures.includes(N) && !this._blockhashInfo.transactionSignatures.includes(N)) {
            this._blockhashInfo.simulatedSignatures.push(N);
            break;
          } else T = true;
        }
      }
      const h = o._compile(), g = h.serialize(), S = o._serialize(g).toString("base64"), R = {
        encoding: "base64",
        commitment: this.commitment
      };
      if (r) {
        const T = (Array.isArray(r) ? r : h.nonProgramIds()).map((P) => P.toBase58());
        R.accounts = {
          encoding: "base64",
          addresses: T
        };
      }
      s && (R.sigVerify = true), t && typeof t == "object" && "innerInstructions" in t && (R.innerInstructions = t.innerInstructions);
      const M = [
        S,
        R
      ], K = await this._rpcRequest("simulateTransaction", M), E = L(K, Wn);
      if ("error" in E) {
        let T;
        if ("data" in E.error && (T = E.error.data.logs, T && Array.isArray(T))) {
          const P = `
    `, N = P + T.join(P);
          console.error(E.error.message, N);
        }
        throw new qt({
          action: "simulate",
          signature: "",
          transactionMessage: E.error.message,
          logs: T
        });
      }
      return E.result;
    }
    async sendTransaction(e, t, r) {
      if ("version" in e) {
        if (t && Array.isArray(t)) throw new Error("Invalid arguments");
        const h = e.serialize();
        return await this.sendRawTransaction(h, t);
      }
      if (t === void 0 || !Array.isArray(t)) throw new Error("Invalid arguments");
      const o = t;
      if (e.nonceInfo) e.sign(...o);
      else {
        let h = this._disableBlockhashCaching;
        for (; ; ) {
          const g = await this._blockhashWithExpiryBlockHeight(h);
          if (e.lastValidBlockHeight = g.lastValidBlockHeight, e.recentBlockhash = g.blockhash, e.sign(...o), !e.signature) throw new Error("!signature");
          const w = e.signature.toString("base64");
          if (this._blockhashInfo.transactionSignatures.includes(w)) h = true;
          else {
            this._blockhashInfo.transactionSignatures.push(w);
            break;
          }
        }
      }
      const s = e.serialize();
      return await this.sendRawTransaction(s, r);
    }
    async sendRawTransaction(e, t) {
      const r = G(e).toString("base64");
      return await this.sendEncodedTransaction(r, t);
    }
    async sendEncodedTransaction(e, t) {
      const r = {
        encoding: "base64"
      }, o = t && t.skipPreflight, s = o === true ? "processed" : t && t.preflightCommitment || this.commitment;
      t && t.maxRetries != null && (r.maxRetries = t.maxRetries), t && t.minContextSlot != null && (r.minContextSlot = t.minContextSlot), o && (r.skipPreflight = o), s && (r.preflightCommitment = s);
      const h = [
        e,
        r
      ], g = await this._rpcRequest("sendTransaction", h), w = L(g, va);
      if ("error" in w) {
        let S;
        throw "data" in w.error && (S = w.error.data.logs), new qt({
          action: o ? "send" : "simulate",
          signature: "",
          transactionMessage: w.error.message,
          logs: S
        });
      }
      return w.result;
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
      var _a3;
      const r = (_a3 = this._subscriptionsByHash[e]) == null ? void 0 : _a3.state;
      if (this._subscriptionsByHash[e] = t, r !== t.state) {
        const o = this._subscriptionStateChangeCallbacksByHash[e];
        o && o.forEach((s) => {
          try {
            s(t.state);
          } catch {
          }
        });
      }
    }
    _onSubscriptionStateChange(e, t) {
      var _a3;
      const r = this._subscriptionHashByClientSubscriptionId[e];
      if (r == null) return () => {
      };
      const o = (_a3 = this._subscriptionStateChangeCallbacksByHash)[r] || (_a3[r] = /* @__PURE__ */ new Set());
      return o.add(t), () => {
        o.delete(t), o.size === 0 && delete this._subscriptionStateChangeCallbacksByHash[r];
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
        const o = this._subscriptionsByHash[r];
        if (o !== void 0) switch (o.state) {
          case "pending":
          case "unsubscribed":
            if (o.callbacks.size === 0) {
              delete this._subscriptionsByHash[r], o.state === "unsubscribed" && delete this._subscriptionCallbacksByServerSubscriptionId[o.serverSubscriptionId], await this._updateSubscriptions();
              return;
            }
            await (async () => {
              const { args: s, method: h } = o;
              try {
                this._setSubscription(r, {
                  ...o,
                  state: "subscribing"
                });
                const g = await this._rpcWebSocket.call(h, s);
                this._setSubscription(r, {
                  ...o,
                  serverSubscriptionId: g,
                  state: "subscribed"
                }), this._subscriptionCallbacksByServerSubscriptionId[g] = o.callbacks, await this._updateSubscriptions();
              } catch (g) {
                if (console.error(`Received ${g instanceof Error ? "" : "JSON-RPC "}error calling \`${h}\``, {
                  args: s,
                  error: g
                }), !t()) return;
                this._setSubscription(r, {
                  ...o,
                  state: "pending"
                }), await this._updateSubscriptions();
              }
            })();
            break;
          case "subscribed":
            o.callbacks.size === 0 && await (async () => {
              const { serverSubscriptionId: s, unsubscribeMethod: h } = o;
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
                  await this._rpcWebSocket.call(h, [
                    s
                  ]);
                } catch (g) {
                  if (g instanceof Error && console.error(`${h} error:`, g.message), !t()) return;
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
    _handleServerNotification(e, t) {
      const r = this._subscriptionCallbacksByServerSubscriptionId[e];
      r !== void 0 && r.forEach((o) => {
        try {
          o(...t);
        } catch (s) {
          console.error(s);
        }
      });
    }
    _wsOnAccountNotification(e) {
      const { result: t, subscription: r } = L(e, Ho);
      this._handleServerNotification(r, [
        t.value,
        t.context
      ]);
    }
    _makeSubscription(e, t) {
      const r = this._nextClientSubscriptionId++, o = zn([
        e.method,
        t
      ]), s = this._subscriptionsByHash[o];
      return s === void 0 ? this._subscriptionsByHash[o] = {
        ...e,
        args: t,
        callbacks: /* @__PURE__ */ new Set([
          e.callback
        ]),
        state: "pending"
      } : s.callbacks.add(e.callback), this._subscriptionHashByClientSubscriptionId[r] = o, this._subscriptionDisposeFunctionsByClientSubscriptionId[r] = async () => {
        delete this._subscriptionDisposeFunctionsByClientSubscriptionId[r], delete this._subscriptionHashByClientSubscriptionId[r];
        const h = this._subscriptionsByHash[o];
        j(h !== void 0, `Could not find a \`Subscription\` when tearing down client subscription #${r}`), h.callbacks.delete(e.callback), await this._updateSubscriptions();
      }, this._updateSubscriptions(), r;
    }
    onAccountChange(e, t, r) {
      const { commitment: o, config: s } = re(r), h = this._buildArgs([
        e.toBase58()
      ], o || this._commitment || "finalized", "base64", s);
      return this._makeSubscription({
        callback: t,
        method: "accountSubscribe",
        unsubscribeMethod: "accountUnsubscribe"
      }, h);
    }
    async removeAccountChangeListener(e) {
      await this._unsubscribeClientSubscription(e, "account change");
    }
    _wsOnProgramAccountNotification(e) {
      const { result: t, subscription: r } = L(e, jo);
      this._handleServerNotification(r, [
        {
          accountId: t.value.pubkey,
          accountInfo: t.value.account
        },
        t.context
      ]);
    }
    onProgramAccountChange(e, t, r, o) {
      const { commitment: s, config: h } = re(r), g = this._buildArgs([
        e.toBase58()
      ], s || this._commitment || "finalized", "base64", h || (o ? {
        filters: Kn(o)
      } : void 0));
      return this._makeSubscription({
        callback: t,
        method: "programSubscribe",
        unsubscribeMethod: "programUnsubscribe"
      }, g);
    }
    async removeProgramAccountChangeListener(e) {
      await this._unsubscribeClientSubscription(e, "program account change");
    }
    onLogs(e, t, r) {
      const o = this._buildArgs([
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
      }, o);
    }
    async removeOnLogsListener(e) {
      await this._unsubscribeClientSubscription(e, "logs");
    }
    _wsOnLogsNotification(e) {
      const { result: t, subscription: r } = L(e, Ia);
      this._handleServerNotification(r, [
        t.value,
        t.context
      ]);
    }
    _wsOnSlotNotification(e) {
      const { result: t, subscription: r } = L(e, Jo);
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
      const { result: t, subscription: r } = L(e, Zo);
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
    _buildArgs(e, t, r, o) {
      const s = t || this._commitment;
      if (s || r || o) {
        let h = {};
        r && (h.encoding = r), s && (h.commitment = s), o && (h = Object.assign(h, o)), e.push(h);
      }
      return e;
    }
    _buildArgsAtLeastConfirmed(e, t, r, o) {
      const s = t || this._commitment;
      if (s && ![
        "confirmed",
        "finalized"
      ].includes(s)) throw new Error("Using Connection with default commitment: `" + this._commitment + "`, but method requires at least `confirmed`");
      return this._buildArgs(e, t, r, o);
    }
    _wsOnSignatureNotification(e) {
      const { result: t, subscription: r } = L(e, Xo);
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
      const o = this._buildArgs([
        e
      ], r || this._commitment || "finalized"), s = this._makeSubscription({
        callback: (h, g) => {
          if (h.type === "status") {
            t(h.result, g);
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
    onSignatureWithOptions(e, t, r) {
      const { commitment: o, ...s } = {
        ...r,
        commitment: r && r.commitment || this._commitment || "finalized"
      }, h = this._buildArgs([
        e
      ], o, void 0, s), g = this._makeSubscription({
        callback: (w, S) => {
          t(w, S);
          try {
            this.removeSignatureListener(g);
          } catch {
          }
        },
        method: "signatureSubscribe",
        unsubscribeMethod: "signatureUnsubscribe"
      }, h);
      return g;
    }
    async removeSignatureListener(e) {
      await this._unsubscribeClientSubscription(e, "signature result");
    }
    _wsOnRootNotification(e) {
      const { result: t, subscription: r } = L(e, Qo);
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
  xt = class {
    constructor(e) {
      this._keypair = void 0, this._keypair = e ?? Tn();
    }
    static generate() {
      return new xt(Tn());
    }
    static fromSecretKey(e, t) {
      if (e.byteLength !== 64) throw new Error("bad secret key size");
      const r = e.slice(32, 64);
      if (!t || !t.skipValidation) {
        const o = e.slice(0, 32), s = Qt(o);
        for (let h = 0; h < 32; h++) if (r[h] !== s[h]) throw new Error("provided secretKey is invalid");
      }
      return new xt({
        publicKey: r,
        secretKey: e
      });
    }
    static fromSeed(e) {
      const t = Qt(e), r = new Uint8Array(64);
      return r.set(e), r.set(t, 32), new xt({
        publicKey: t,
        secretKey: r
      });
    }
    get publicKey() {
      return new _(this._keypair.publicKey);
    }
    get secretKey() {
      return new Uint8Array(this._keypair.secretKey);
    }
  };
  const pt = Object.freeze({
    CreateLookupTable: {
      index: 0,
      layout: b.struct([
        b.u32("instruction"),
        Ct("recentSlot"),
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
        Ct(),
        b.seq($(), b.offset(b.u32(), -8), "addresses")
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
  class Aa {
    constructor() {
    }
    static decodeInstructionType(e) {
      this.checkProgramId(e.programId);
      const r = b.u32("instruction").decode(e.data);
      let o;
      for (const [s, h] of Object.entries(pt)) if (h.index == r) {
        o = s;
        break;
      }
      if (!o) throw new Error("Invalid Instruction. Should be a LookupTable Instruction");
      return o;
    }
    static decodeCreateLookupTable(e) {
      this.checkProgramId(e.programId), this.checkKeysLength(e.keys, 4);
      const { recentSlot: t } = X(pt.CreateLookupTable, e.data);
      return {
        authority: e.keys[1].pubkey,
        payer: e.keys[2].pubkey,
        recentSlot: Number(t)
      };
    }
    static decodeExtendLookupTable(e) {
      if (this.checkProgramId(e.programId), e.keys.length < 2) throw new Error(`invalid instruction; found ${e.keys.length} keys, expected at least 2`);
      const { addresses: t } = X(pt.ExtendLookupTable, e.data);
      return {
        lookupTable: e.keys[0].pubkey,
        authority: e.keys[1].pubkey,
        payer: e.keys.length > 2 ? e.keys[2].pubkey : void 0,
        addresses: t.map((r) => new _(r))
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
      if (!e.equals(en.programId)) throw new Error("invalid instruction; programId is not AddressLookupTable Program");
    }
    static checkKeysLength(e, t) {
      if (e.length < t) throw new Error(`invalid instruction; found ${e.length} keys, expected at least ${t}`);
    }
  }
  class en {
    constructor() {
    }
    static createLookupTable(e) {
      const [t, r] = _.findProgramAddressSync([
        e.authority.toBuffer(),
        is().encode(e.recentSlot)
      ], this.programId), o = pt.CreateLookupTable, s = J(o, {
        recentSlot: BigInt(e.recentSlot),
        bumpSeed: r
      }), h = [
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
          pubkey: Ye.programId,
          isSigner: false,
          isWritable: false
        }
      ];
      return [
        new te({
          programId: this.programId,
          keys: h,
          data: s
        }),
        t
      ];
    }
    static freezeLookupTable(e) {
      const t = pt.FreezeLookupTable, r = J(t), o = [
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
      return new te({
        programId: this.programId,
        keys: o,
        data: r
      });
    }
    static extendLookupTable(e) {
      const t = pt.ExtendLookupTable, r = J(t, {
        addresses: e.addresses.map((s) => s.toBytes())
      }), o = [
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
      return e.payer && o.push({
        pubkey: e.payer,
        isSigner: true,
        isWritable: true
      }, {
        pubkey: Ye.programId,
        isSigner: false,
        isWritable: false
      }), new te({
        programId: this.programId,
        keys: o,
        data: r
      });
    }
    static deactivateLookupTable(e) {
      const t = pt.DeactivateLookupTable, r = J(t), o = [
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
      return new te({
        programId: this.programId,
        keys: o,
        data: r
      });
    }
    static closeLookupTable(e) {
      const t = pt.CloseLookupTable, r = J(t), o = [
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
      return new te({
        programId: this.programId,
        keys: o,
        data: r
      });
    }
  }
  en.programId = new _("AddressLookupTab1e1111111111111111111111111");
  class Ea {
    constructor() {
    }
    static decodeInstructionType(e) {
      this.checkProgramId(e.programId);
      const r = b.u8("instruction").decode(e.data);
      let o;
      for (const [s, h] of Object.entries(at)) if (h.index == r) {
        o = s;
        break;
      }
      if (!o) throw new Error("Instruction type incorrect; not a ComputeBudgetInstruction");
      return o;
    }
    static decodeRequestUnits(e) {
      this.checkProgramId(e.programId);
      const { units: t, additionalFee: r } = X(at.RequestUnits, e.data);
      return {
        units: t,
        additionalFee: r
      };
    }
    static decodeRequestHeapFrame(e) {
      this.checkProgramId(e.programId);
      const { bytes: t } = X(at.RequestHeapFrame, e.data);
      return {
        bytes: t
      };
    }
    static decodeSetComputeUnitLimit(e) {
      this.checkProgramId(e.programId);
      const { units: t } = X(at.SetComputeUnitLimit, e.data);
      return {
        units: t
      };
    }
    static decodeSetComputeUnitPrice(e) {
      this.checkProgramId(e.programId);
      const { microLamports: t } = X(at.SetComputeUnitPrice, e.data);
      return {
        microLamports: t
      };
    }
    static checkProgramId(e) {
      if (!e.equals(tn.programId)) throw new Error("invalid instruction; programId is not ComputeBudgetProgram");
    }
  }
  const at = Object.freeze({
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
        Ct("microLamports")
      ])
    }
  });
  tn = class {
    constructor() {
    }
    static requestUnits(e) {
      const t = at.RequestUnits, r = J(t, e);
      return new te({
        keys: [],
        programId: this.programId,
        data: r
      });
    }
    static requestHeapFrame(e) {
      const t = at.RequestHeapFrame, r = J(t, e);
      return new te({
        keys: [],
        programId: this.programId,
        data: r
      });
    }
    static setComputeUnitLimit(e) {
      const t = at.SetComputeUnitLimit, r = J(t, e);
      return new te({
        keys: [],
        programId: this.programId,
        data: r
      });
    }
    static setComputeUnitPrice(e) {
      const t = at.SetComputeUnitPrice, r = J(t, {
        microLamports: BigInt(e.microLamports)
      });
      return new te({
        keys: [],
        programId: this.programId,
        data: r
      });
    }
  };
  tn.programId = new _("ComputeBudget111111111111111111111111111111");
  const qn = 64, Fn = 32, Vn = 64, Hn = b.struct([
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
  class ar {
    constructor() {
    }
    static createInstructionWithPublicKey(e) {
      const { publicKey: t, message: r, signature: o, instructionIndex: s } = e;
      j(t.length === Fn, `Public Key must be ${Fn} bytes but received ${t.length} bytes`), j(o.length === Vn, `Signature must be ${Vn} bytes but received ${o.length} bytes`);
      const h = Hn.span, g = h + t.length, w = g + o.length, S = 1, R = V.alloc(w + r.length), M = s ?? 65535;
      return Hn.encode({
        numSignatures: S,
        padding: 0,
        signatureOffset: g,
        signatureInstructionIndex: M,
        publicKeyOffset: h,
        publicKeyInstructionIndex: M,
        messageDataOffset: w,
        messageDataSize: r.length,
        messageInstructionIndex: M
      }, R), R.fill(t, h), R.fill(o, g), R.fill(r, w), new te({
        keys: [],
        programId: ar.programId,
        data: R
      });
    }
    static createInstructionWithPrivateKey(e) {
      const { privateKey: t, message: r, instructionIndex: o } = e;
      j(t.length === qn, `Private key must be ${qn} bytes but received ${t.length} bytes`);
      try {
        const s = xt.fromSecretKey(t), h = s.publicKey.toBytes(), g = Gr(r, s.secretKey);
        return this.createInstructionWithPublicKey({
          publicKey: h,
          message: r,
          signature: g,
          instructionIndex: o
        });
      } catch (s) {
        throw new Error(`Error creating instruction; ${s}`);
      }
    }
  }
  ar.programId = new _("Ed25519SigVerify111111111111111111111111111");
  const Ra = (l, e) => {
    const t = Hr.sign(l, e);
    return [
      t.toCompactRawBytes(),
      t.recovery
    ];
  };
  Hr.utils.isValidPrivateKey;
  const Ma = Hr.getPublicKey, Gn = 32, Lr = 20, jn = 64, Pa = 11, Cr = b.struct([
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
  Tt = class {
    constructor() {
    }
    static publicKeyToEthAddress(e) {
      j(e.length === jn, `Public key must be ${jn} bytes but received ${e.length} bytes`);
      try {
        return V.from(En(G(e))).slice(-Lr);
      } catch (t) {
        throw new Error(`Error constructing Ethereum address: ${t}`);
      }
    }
    static createInstructionWithPublicKey(e) {
      const { publicKey: t, message: r, signature: o, recoveryId: s, instructionIndex: h } = e;
      return Tt.createInstructionWithEthAddress({
        ethAddress: Tt.publicKeyToEthAddress(t),
        message: r,
        signature: o,
        recoveryId: s,
        instructionIndex: h
      });
    }
    static createInstructionWithEthAddress(e) {
      const { ethAddress: t, message: r, signature: o, recoveryId: s, instructionIndex: h = 0 } = e;
      let g;
      typeof t == "string" ? t.startsWith("0x") ? g = V.from(t.substr(2), "hex") : g = V.from(t, "hex") : g = t, j(g.length === Lr, `Address must be ${Lr} bytes but received ${g.length} bytes`);
      const w = 1 + Pa, S = w, R = w + g.length, M = R + o.length + 1, K = 1, E = V.alloc(Cr.span + r.length);
      return Cr.encode({
        numSignatures: K,
        signatureOffset: R,
        signatureInstructionIndex: h,
        ethAddressOffset: S,
        ethAddressInstructionIndex: h,
        messageDataOffset: M,
        messageDataSize: r.length,
        messageInstructionIndex: h,
        signature: G(o),
        ethAddress: G(g),
        recoveryId: s
      }, E), E.fill(G(r), Cr.span), new te({
        keys: [],
        programId: Tt.programId,
        data: E
      });
    }
    static createInstructionWithPrivateKey(e) {
      const { privateKey: t, message: r, instructionIndex: o } = e;
      j(t.length === Gn, `Private key must be ${Gn} bytes but received ${t.length} bytes`);
      try {
        const s = G(t), h = Ma(s, false).slice(1), g = V.from(En(G(r))), [w, S] = Ra(g, s);
        return this.createInstructionWithPublicKey({
          publicKey: h,
          message: r,
          signature: w,
          recoveryId: S,
          instructionIndex: o
        });
      } catch (s) {
        throw new Error(`Error creating instruction; ${s}`);
      }
    }
  };
  Tt.programId = new _("KeccakSecp256k11111111111111111111111111111");
  var Ms;
  const Ps = new _("StakeConfig11111111111111111111111111111111");
  class xs {
    constructor(e, t) {
      this.staker = void 0, this.withdrawer = void 0, this.staker = e, this.withdrawer = t;
    }
  }
  class jt {
    constructor(e, t, r) {
      this.unixTimestamp = void 0, this.epoch = void 0, this.custodian = void 0, this.unixTimestamp = e, this.epoch = t, this.custodian = r;
    }
  }
  Ms = jt;
  jt.default = new Ms(0, 0, _.default);
  class xa {
    constructor() {
    }
    static decodeInstructionType(e) {
      this.checkProgramId(e.programId);
      const r = b.u32("instruction").decode(e.data);
      let o;
      for (const [s, h] of Object.entries(Je)) if (h.index == r) {
        o = s;
        break;
      }
      if (!o) throw new Error("Instruction type incorrect; not a StakeInstruction");
      return o;
    }
    static decodeInitialize(e) {
      this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2);
      const { authorized: t, lockup: r } = X(Je.Initialize, e.data);
      return {
        stakePubkey: e.keys[0].pubkey,
        authorized: new xs(new _(t.staker), new _(t.withdrawer)),
        lockup: new jt(r.unixTimestamp, r.epoch, new _(r.custodian))
      };
    }
    static decodeDelegate(e) {
      return this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 6), X(Je.Delegate, e.data), {
        stakePubkey: e.keys[0].pubkey,
        votePubkey: e.keys[1].pubkey,
        authorizedPubkey: e.keys[5].pubkey
      };
    }
    static decodeAuthorize(e) {
      this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
      const { newAuthorized: t, stakeAuthorizationType: r } = X(Je.Authorize, e.data), o = {
        stakePubkey: e.keys[0].pubkey,
        authorizedPubkey: e.keys[2].pubkey,
        newAuthorizedPubkey: new _(t),
        stakeAuthorizationType: {
          index: r
        }
      };
      return e.keys.length > 3 && (o.custodianPubkey = e.keys[3].pubkey), o;
    }
    static decodeAuthorizeWithSeed(e) {
      this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2);
      const { newAuthorized: t, stakeAuthorizationType: r, authoritySeed: o, authorityOwner: s } = X(Je.AuthorizeWithSeed, e.data), h = {
        stakePubkey: e.keys[0].pubkey,
        authorityBase: e.keys[1].pubkey,
        authoritySeed: o,
        authorityOwner: new _(s),
        newAuthorizedPubkey: new _(t),
        stakeAuthorizationType: {
          index: r
        }
      };
      return e.keys.length > 3 && (h.custodianPubkey = e.keys[3].pubkey), h;
    }
    static decodeSplit(e) {
      this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
      const { lamports: t } = X(Je.Split, e.data);
      return {
        stakePubkey: e.keys[0].pubkey,
        splitStakePubkey: e.keys[1].pubkey,
        authorizedPubkey: e.keys[2].pubkey,
        lamports: t
      };
    }
    static decodeMerge(e) {
      return this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3), X(Je.Merge, e.data), {
        stakePubkey: e.keys[0].pubkey,
        sourceStakePubKey: e.keys[1].pubkey,
        authorizedPubkey: e.keys[4].pubkey
      };
    }
    static decodeWithdraw(e) {
      this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 5);
      const { lamports: t } = X(Je.Withdraw, e.data), r = {
        stakePubkey: e.keys[0].pubkey,
        toPubkey: e.keys[1].pubkey,
        authorizedPubkey: e.keys[4].pubkey,
        lamports: t
      };
      return e.keys.length > 5 && (r.custodianPubkey = e.keys[5].pubkey), r;
    }
    static decodeDeactivate(e) {
      return this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3), X(Je.Deactivate, e.data), {
        stakePubkey: e.keys[0].pubkey,
        authorizedPubkey: e.keys[2].pubkey
      };
    }
    static checkProgramId(e) {
      if (!e.equals(cr.programId)) throw new Error("invalid instruction; programId is not StakeProgram");
    }
    static checkKeyLength(e, t) {
      if (e.length < t) throw new Error(`invalid instruction; found ${e.length} keys, expected at least ${t}`);
    }
  }
  const Je = Object.freeze({
    Initialize: {
      index: 0,
      layout: b.struct([
        b.u32("instruction"),
        xi(),
        Ti()
      ])
    },
    Authorize: {
      index: 1,
      layout: b.struct([
        b.u32("instruction"),
        $("newAuthorized"),
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
        $("newAuthorized"),
        b.u32("stakeAuthorizationType"),
        vt("authoritySeed"),
        $("authorityOwner")
      ])
    }
  }), Ta = Object.freeze({
    Staker: {
      index: 0
    },
    Withdrawer: {
      index: 1
    }
  });
  class cr {
    constructor() {
    }
    static initialize(e) {
      const { stakePubkey: t, authorized: r, lockup: o } = e, s = o || jt.default, h = Je.Initialize, g = J(h, {
        authorized: {
          staker: G(r.staker.toBuffer()),
          withdrawer: G(r.withdrawer.toBuffer())
        },
        lockup: {
          unixTimestamp: s.unixTimestamp,
          epoch: s.epoch,
          custodian: G(s.custodian.toBuffer())
        }
      }), w = {
        keys: [
          {
            pubkey: t,
            isSigner: false,
            isWritable: true
          },
          {
            pubkey: Lt,
            isSigner: false,
            isWritable: false
          }
        ],
        programId: this.programId,
        data: g
      };
      return new te(w);
    }
    static createAccountWithSeed(e) {
      const t = new Y();
      t.add(Ye.createAccountWithSeed({
        fromPubkey: e.fromPubkey,
        newAccountPubkey: e.stakePubkey,
        basePubkey: e.basePubkey,
        seed: e.seed,
        lamports: e.lamports,
        space: this.space,
        programId: this.programId
      }));
      const { stakePubkey: r, authorized: o, lockup: s } = e;
      return t.add(this.initialize({
        stakePubkey: r,
        authorized: o,
        lockup: s
      }));
    }
    static createAccount(e) {
      const t = new Y();
      t.add(Ye.createAccount({
        fromPubkey: e.fromPubkey,
        newAccountPubkey: e.stakePubkey,
        lamports: e.lamports,
        space: this.space,
        programId: this.programId
      }));
      const { stakePubkey: r, authorized: o, lockup: s } = e;
      return t.add(this.initialize({
        stakePubkey: r,
        authorized: o,
        lockup: s
      }));
    }
    static delegate(e) {
      const { stakePubkey: t, authorizedPubkey: r, votePubkey: o } = e, s = Je.Delegate, h = J(s);
      return new Y().add({
        keys: [
          {
            pubkey: t,
            isSigner: false,
            isWritable: true
          },
          {
            pubkey: o,
            isSigner: false,
            isWritable: false
          },
          {
            pubkey: ot,
            isSigner: false,
            isWritable: false
          },
          {
            pubkey: Xt,
            isSigner: false,
            isWritable: false
          },
          {
            pubkey: Ps,
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
        data: h
      });
    }
    static authorize(e) {
      const { stakePubkey: t, authorizedPubkey: r, newAuthorizedPubkey: o, stakeAuthorizationType: s, custodianPubkey: h } = e, g = Je.Authorize, w = J(g, {
        newAuthorized: G(o.toBuffer()),
        stakeAuthorizationType: s.index
      }), S = [
        {
          pubkey: t,
          isSigner: false,
          isWritable: true
        },
        {
          pubkey: ot,
          isSigner: false,
          isWritable: true
        },
        {
          pubkey: r,
          isSigner: true,
          isWritable: false
        }
      ];
      return h && S.push({
        pubkey: h,
        isSigner: true,
        isWritable: false
      }), new Y().add({
        keys: S,
        programId: this.programId,
        data: w
      });
    }
    static authorizeWithSeed(e) {
      const { stakePubkey: t, authorityBase: r, authoritySeed: o, authorityOwner: s, newAuthorizedPubkey: h, stakeAuthorizationType: g, custodianPubkey: w } = e, S = Je.AuthorizeWithSeed, R = J(S, {
        newAuthorized: G(h.toBuffer()),
        stakeAuthorizationType: g.index,
        authoritySeed: o,
        authorityOwner: G(s.toBuffer())
      }), M = [
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
          pubkey: ot,
          isSigner: false,
          isWritable: false
        }
      ];
      return w && M.push({
        pubkey: w,
        isSigner: true,
        isWritable: false
      }), new Y().add({
        keys: M,
        programId: this.programId,
        data: R
      });
    }
    static splitInstruction(e) {
      const { stakePubkey: t, authorizedPubkey: r, splitStakePubkey: o, lamports: s } = e, h = Je.Split, g = J(h, {
        lamports: s
      });
      return new te({
        keys: [
          {
            pubkey: t,
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
        data: g
      });
    }
    static split(e, t) {
      const r = new Y();
      return r.add(Ye.createAccount({
        fromPubkey: e.authorizedPubkey,
        newAccountPubkey: e.splitStakePubkey,
        lamports: t,
        space: this.space,
        programId: this.programId
      })), r.add(this.splitInstruction(e));
    }
    static splitWithSeed(e, t) {
      const { stakePubkey: r, authorizedPubkey: o, splitStakePubkey: s, basePubkey: h, seed: g, lamports: w } = e, S = new Y();
      return S.add(Ye.allocate({
        accountPubkey: s,
        basePubkey: h,
        seed: g,
        space: this.space,
        programId: this.programId
      })), t && t > 0 && S.add(Ye.transfer({
        fromPubkey: e.authorizedPubkey,
        toPubkey: s,
        lamports: t
      })), S.add(this.splitInstruction({
        stakePubkey: r,
        authorizedPubkey: o,
        splitStakePubkey: s,
        lamports: w
      }));
    }
    static merge(e) {
      const { stakePubkey: t, sourceStakePubKey: r, authorizedPubkey: o } = e, s = Je.Merge, h = J(s);
      return new Y().add({
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
            pubkey: ot,
            isSigner: false,
            isWritable: false
          },
          {
            pubkey: Xt,
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
        data: h
      });
    }
    static withdraw(e) {
      const { stakePubkey: t, authorizedPubkey: r, toPubkey: o, lamports: s, custodianPubkey: h } = e, g = Je.Withdraw, w = J(g, {
        lamports: s
      }), S = [
        {
          pubkey: t,
          isSigner: false,
          isWritable: true
        },
        {
          pubkey: o,
          isSigner: false,
          isWritable: true
        },
        {
          pubkey: ot,
          isSigner: false,
          isWritable: false
        },
        {
          pubkey: Xt,
          isSigner: false,
          isWritable: false
        },
        {
          pubkey: r,
          isSigner: true,
          isWritable: false
        }
      ];
      return h && S.push({
        pubkey: h,
        isSigner: true,
        isWritable: false
      }), new Y().add({
        keys: S,
        programId: this.programId,
        data: w
      });
    }
    static deactivate(e) {
      const { stakePubkey: t, authorizedPubkey: r } = e, o = Je.Deactivate, s = J(o);
      return new Y().add({
        keys: [
          {
            pubkey: t,
            isSigner: false,
            isWritable: true
          },
          {
            pubkey: ot,
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
  cr.programId = new _("Stake11111111111111111111111111111111111111");
  cr.space = 200;
  class Ts {
    constructor(e, t, r, o) {
      this.nodePubkey = void 0, this.authorizedVoter = void 0, this.authorizedWithdrawer = void 0, this.commission = void 0, this.nodePubkey = e, this.authorizedVoter = t, this.authorizedWithdrawer = r, this.commission = o;
    }
  }
  class Ba {
    constructor() {
    }
    static decodeInstructionType(e) {
      this.checkProgramId(e.programId);
      const r = b.u32("instruction").decode(e.data);
      let o;
      for (const [s, h] of Object.entries(ct)) if (h.index == r) {
        o = s;
        break;
      }
      if (!o) throw new Error("Instruction type incorrect; not a VoteInstruction");
      return o;
    }
    static decodeInitializeAccount(e) {
      this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 4);
      const { voteInit: t } = X(ct.InitializeAccount, e.data);
      return {
        votePubkey: e.keys[0].pubkey,
        nodePubkey: e.keys[3].pubkey,
        voteInit: new Ts(new _(t.nodePubkey), new _(t.authorizedVoter), new _(t.authorizedWithdrawer), t.commission)
      };
    }
    static decodeAuthorize(e) {
      this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
      const { newAuthorized: t, voteAuthorizationType: r } = X(ct.Authorize, e.data);
      return {
        votePubkey: e.keys[0].pubkey,
        authorizedPubkey: e.keys[2].pubkey,
        newAuthorizedPubkey: new _(t),
        voteAuthorizationType: {
          index: r
        }
      };
    }
    static decodeAuthorizeWithSeed(e) {
      this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
      const { voteAuthorizeWithSeedArgs: { currentAuthorityDerivedKeyOwnerPubkey: t, currentAuthorityDerivedKeySeed: r, newAuthorized: o, voteAuthorizationType: s } } = X(ct.AuthorizeWithSeed, e.data);
      return {
        currentAuthorityDerivedKeyBasePubkey: e.keys[2].pubkey,
        currentAuthorityDerivedKeyOwnerPubkey: new _(t),
        currentAuthorityDerivedKeySeed: r,
        newAuthorizedPubkey: new _(o),
        voteAuthorizationType: {
          index: s
        },
        votePubkey: e.keys[0].pubkey
      };
    }
    static decodeWithdraw(e) {
      this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
      const { lamports: t } = X(ct.Withdraw, e.data);
      return {
        votePubkey: e.keys[0].pubkey,
        authorizedWithdrawerPubkey: e.keys[2].pubkey,
        lamports: t,
        toPubkey: e.keys[1].pubkey
      };
    }
    static checkProgramId(e) {
      if (!e.equals(Kt.programId)) throw new Error("invalid instruction; programId is not VoteProgram");
    }
    static checkKeyLength(e, t) {
      if (e.length < t) throw new Error(`invalid instruction; found ${e.length} keys, expected at least ${t}`);
    }
  }
  const ct = Object.freeze({
    InitializeAccount: {
      index: 0,
      layout: b.struct([
        b.u32("instruction"),
        Bi()
      ])
    },
    Authorize: {
      index: 1,
      layout: b.struct([
        b.u32("instruction"),
        $("newAuthorized"),
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
        Li()
      ])
    }
  }), La = Object.freeze({
    Voter: {
      index: 0
    },
    Withdrawer: {
      index: 1
    }
  });
  class Kt {
    constructor() {
    }
    static initializeAccount(e) {
      const { votePubkey: t, nodePubkey: r, voteInit: o } = e, s = ct.InitializeAccount, h = J(s, {
        voteInit: {
          nodePubkey: G(o.nodePubkey.toBuffer()),
          authorizedVoter: G(o.authorizedVoter.toBuffer()),
          authorizedWithdrawer: G(o.authorizedWithdrawer.toBuffer()),
          commission: o.commission
        }
      }), g = {
        keys: [
          {
            pubkey: t,
            isSigner: false,
            isWritable: true
          },
          {
            pubkey: Lt,
            isSigner: false,
            isWritable: false
          },
          {
            pubkey: ot,
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
        data: h
      };
      return new te(g);
    }
    static createAccount(e) {
      const t = new Y();
      return t.add(Ye.createAccount({
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
      const { votePubkey: t, authorizedPubkey: r, newAuthorizedPubkey: o, voteAuthorizationType: s } = e, h = ct.Authorize, g = J(h, {
        newAuthorized: G(o.toBuffer()),
        voteAuthorizationType: s.index
      }), w = [
        {
          pubkey: t,
          isSigner: false,
          isWritable: true
        },
        {
          pubkey: ot,
          isSigner: false,
          isWritable: false
        },
        {
          pubkey: r,
          isSigner: true,
          isWritable: false
        }
      ];
      return new Y().add({
        keys: w,
        programId: this.programId,
        data: g
      });
    }
    static authorizeWithSeed(e) {
      const { currentAuthorityDerivedKeyBasePubkey: t, currentAuthorityDerivedKeyOwnerPubkey: r, currentAuthorityDerivedKeySeed: o, newAuthorizedPubkey: s, voteAuthorizationType: h, votePubkey: g } = e, w = ct.AuthorizeWithSeed, S = J(w, {
        voteAuthorizeWithSeedArgs: {
          currentAuthorityDerivedKeyOwnerPubkey: G(r.toBuffer()),
          currentAuthorityDerivedKeySeed: o,
          newAuthorized: G(s.toBuffer()),
          voteAuthorizationType: h.index
        }
      }), R = [
        {
          pubkey: g,
          isSigner: false,
          isWritable: true
        },
        {
          pubkey: ot,
          isSigner: false,
          isWritable: false
        },
        {
          pubkey: t,
          isSigner: true,
          isWritable: false
        }
      ];
      return new Y().add({
        keys: R,
        programId: this.programId,
        data: S
      });
    }
    static withdraw(e) {
      const { votePubkey: t, authorizedWithdrawerPubkey: r, lamports: o, toPubkey: s } = e, h = ct.Withdraw, g = J(h, {
        lamports: o
      }), w = [
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
      ];
      return new Y().add({
        keys: w,
        programId: this.programId,
        data: g
      });
    }
    static safeWithdraw(e, t, r) {
      if (e.lamports > t - r) throw new Error("Withdraw will leave vote account with insufficient funds.");
      return Kt.withdraw(e);
    }
    static updateValidatorIdentity(e) {
      const { votePubkey: t, authorizedWithdrawerPubkey: r, nodePubkey: o } = e, s = ct.UpdateValidatorIdentity, h = J(s), g = [
        {
          pubkey: t,
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
      return new Y().add({
        keys: g,
        programId: this.programId,
        data: h
      });
    }
  }
  Kt.programId = new _("Vote111111111111111111111111111111111111111");
  Kt.space = 3762;
  const Bs = new _("Va1idator1nfo111111111111111111111111111111"), Ca = A({
    name: x(),
    website: q(x()),
    details: q(x()),
    iconUrl: q(x()),
    keybaseUsername: q(x())
  });
  class rn {
    constructor(e, t) {
      this.key = void 0, this.info = void 0, this.key = e, this.info = t;
    }
    static fromConfigData(e) {
      let t = [
        ...e
      ];
      if (et(t) !== 2) return null;
      const o = [];
      for (let s = 0; s < 2; s++) {
        const h = new _(Ge(t, 0, rt)), g = He(t) === 1;
        o.push({
          publicKey: h,
          isSigner: g
        });
      }
      if (o[0].publicKey.equals(Bs) && o[1].isSigner) {
        const s = vt().decode(V.from(t)), h = JSON.parse(s);
        return Ks(h, Ca), new rn(o[1].publicKey, h);
      }
      return null;
    }
  }
  const Na = new _("Vote111111111111111111111111111111111111111"), za = b.struct([
    $("nodePubkey"),
    $("authorizedWithdrawer"),
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
      $("authorizedVoter")
    ]), b.offset(b.u32(), -8), "authorizedVoters"),
    b.struct([
      b.seq(b.struct([
        $("authorizedPubkey"),
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
  class nn {
    constructor(e) {
      this.nodePubkey = void 0, this.authorizedWithdrawer = void 0, this.commission = void 0, this.rootSlot = void 0, this.votes = void 0, this.authorizedVoters = void 0, this.priorVoters = void 0, this.epochCredits = void 0, this.lastTimestamp = void 0, this.nodePubkey = e.nodePubkey, this.authorizedWithdrawer = e.authorizedWithdrawer, this.commission = e.commission, this.rootSlot = e.rootSlot, this.votes = e.votes, this.authorizedVoters = e.authorizedVoters, this.priorVoters = e.priorVoters, this.epochCredits = e.epochCredits, this.lastTimestamp = e.lastTimestamp;
    }
    static fromAccountData(e) {
      const r = za.decode(G(e), 4);
      let o = r.rootSlot;
      return r.rootSlotValid || (o = null), new nn({
        nodePubkey: new _(r.nodePubkey),
        authorizedWithdrawer: new _(r.authorizedWithdrawer),
        commission: r.commission,
        votes: r.votes,
        rootSlot: o,
        authorizedVoters: r.authorizedVoters.map(Oa),
        priorVoters: Ka(r.priorVoters),
        epochCredits: r.epochCredits,
        lastTimestamp: r.lastTimestamp
      });
    }
  }
  function Oa({ authorizedVoter: l, epoch: e }) {
    return {
      epoch: e,
      authorizedVoter: new _(l)
    };
  }
  function $n({ authorizedPubkey: l, epochOfLastAuthorizedSwitch: e, targetEpoch: t }) {
    return {
      authorizedPubkey: new _(l),
      epochOfLastAuthorizedSwitch: e,
      targetEpoch: t
    };
  }
  function Ka({ buf: l, idx: e, isEmpty: t }) {
    return t ? [] : [
      ...l.slice(e + 1).map($n),
      ...l.slice(0, e).map($n)
    ];
  }
  const Jn = {
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
  function Wa(l, e) {
    const t = e === false ? "http" : "https";
    if (!l) return Jn[t].devnet;
    const r = Jn[t][l];
    if (!r) throw new Error(`Unknown ${t} cluster: ${l}`);
    return r;
  }
  async function Ua(l, e, t, r) {
    let o, s;
    t && Object.prototype.hasOwnProperty.call(t, "lastValidBlockHeight") || t && Object.prototype.hasOwnProperty.call(t, "nonceValue") ? (o = t, s = r) : s = t;
    const h = s && {
      skipPreflight: s.skipPreflight,
      preflightCommitment: s.preflightCommitment || s.commitment,
      minContextSlot: s.minContextSlot
    }, g = await l.sendRawTransaction(e, h), w = s && s.commitment, R = (await (o ? l.confirmTransaction(o, w) : l.confirmTransaction(g, w))).value;
    if (R.err) throw g != null ? new qt({
      action: (h == null ? void 0 : h.skipPreflight) ? "send" : "simulate",
      signature: g,
      transactionMessage: `Status: (${JSON.stringify(R)})`
    }) : new Error(`Raw transaction ${g} failed (${JSON.stringify(R)})`);
    return g;
  }
  let Da, qa;
  Da = 1e9;
  qa = Object.freeze(Object.defineProperty({
    __proto__: null,
    Account: Ei,
    AddressLookupTableAccount: Kr,
    AddressLookupTableInstruction: Aa,
    AddressLookupTableProgram: en,
    Authorized: xs,
    BLOCKHASH_CACHE_TIMEOUT_MS: ys,
    BPF_LOADER_DEPRECATED_PROGRAM_ID: Ri,
    BPF_LOADER_PROGRAM_ID: Yi,
    BpfLoader: Zi,
    COMPUTE_BUDGET_INSTRUCTION_LAYOUTS: at,
    ComputeBudgetInstruction: Ea,
    ComputeBudgetProgram: tn,
    Connection: Rs,
    Ed25519Program: ar,
    Enum: _i,
    EpochSchedule: ps,
    FeeCalculatorLayout: ds,
    Keypair: xt,
    LAMPORTS_PER_SOL: Da,
    LOOKUP_TABLE_INSTRUCTION_LAYOUTS: pt,
    Loader: _t,
    Lockup: jt,
    MAX_SEED_LENGTH: as,
    Message: st,
    MessageAccountKeys: Bt,
    MessageV0: It,
    MessageV1: Gt,
    NONCE_ACCOUNT_LENGTH: Or,
    NonceAccount: sr,
    PACKET_DATA_SIZE: wt,
    PUBLIC_KEY_LENGTH: rt,
    PublicKey: _,
    SIGNATURE_LENGTH_IN_BYTES: bt,
    SOLANA_SCHEMA: Dt,
    STAKE_CONFIG_ID: Ps,
    STAKE_INSTRUCTION_LAYOUTS: Je,
    SYSTEM_INSTRUCTION_LAYOUTS: ne,
    SYSVAR_CLOCK_PUBKEY: ot,
    SYSVAR_EPOCH_SCHEDULE_PUBKEY: qi,
    SYSVAR_INSTRUCTIONS_PUBKEY: Fi,
    SYSVAR_RECENT_BLOCKHASHES_PUBKEY: Zt,
    SYSVAR_RENT_PUBKEY: Lt,
    SYSVAR_REWARDS_PUBKEY: Vi,
    SYSVAR_SLOT_HASHES_PUBKEY: Hi,
    SYSVAR_SLOT_HISTORY_PUBKEY: Gi,
    SYSVAR_STAKE_HISTORY_PUBKEY: Xt,
    Secp256k1Program: Tt,
    SendTransactionError: qt,
    SolanaJSONRPCError: D,
    SolanaJSONRPCErrorCode: ji,
    StakeAuthorizationLayout: Ta,
    StakeInstruction: xa,
    StakeProgram: cr,
    Struct: jr,
    SystemInstruction: $i,
    SystemProgram: Ye,
    Transaction: Y,
    TransactionExpiredBlockheightExceededError: $r,
    TransactionExpiredNonceInvalidError: Mt,
    TransactionExpiredTimeoutError: Jr,
    TransactionInstruction: te,
    TransactionMessage: Yr,
    TransactionStatus: ht,
    V1_TRANSACTION_SIZE_LIMIT: Mi,
    VALIDATOR_INFO_KEY: Bs,
    VERSION_1_MESSAGE_PREFIX: cs,
    VERSION_PREFIX_MASK: Ht,
    VOTE_PROGRAM_ID: Na,
    ValidatorInfo: rn,
    VersionedMessage: er,
    VersionedTransaction: tr,
    VoteAccount: nn,
    VoteAuthorizationLayout: La,
    VoteInit: Ts,
    VoteInstruction: Ba,
    VoteProgram: Kt,
    clusterApiUrl: Wa,
    sendAndConfirmRawTransaction: Ua,
    sendAndConfirmTransaction: zr
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  ac = 0;
  cc = 0n;
  sn = "Solana";
  Fa = "11111111111111111111111111111111";
  nt = (_a2 = class {
    constructor(e) {
      __publicField(this, "type", "Native");
      __publicField(this, "address");
      nt.instanceof(e) ? this.address = e.address : Rn.instanceof(e) ? this.address = new _(e.toUint8Array()) : typeof e == "string" && Mn.valid(e) ? this.address = new _(Mn.decode(e)) : this.address = new _(e);
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
      return new Rn(this.toUint8Array());
    }
    static instanceof(e) {
      return e.constructor.platform === nt.platform;
    }
    equals(e) {
      return nt.instanceof(e) ? e.unwrap().equals(this.unwrap()) : this.toUniversalAddress().equals(e);
    }
  }, __publicField(_a2, "byteSize", 32), __publicField(_a2, "platform", sn), _a2);
  Us(sn, nt);
  Yn = new _("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA");
  qr = new _("TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb");
  uc = new _("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL");
  lc = new _("So11111111111111111111111111111111111111112");
  new _("9pan9bMn5HatX4EJdBwg9VgCa7Uz5HL8N1m5D3NdXejP");
  Va = class extends qs {
    async getTokenAccount(e, t) {
      const { getAssociatedTokenAddress: r } = await Ws(async () => {
        const { getAssociatedTokenAddress: S } = await import("./index-Dkg-Yj2z.js").then(async (m) => {
          await m.__tla;
          return m;
        });
        return {
          getAssociatedTokenAddress: S
        };
      }, __vite__mapDeps([0,1,2,3,4,5,6])), o = new nt(t).unwrap(), s = new nt(e).unwrap(), h = await this.getRpc(), g = await ft.getTokenProgramId(h, o), w = await r(o, s, false, g);
      return {
        chain: this.chain,
        address: new nt(w.toString())
      };
    }
    async isToken2022(e) {
      if (Nr(e)) return false;
      const t = new nt(e).unwrap(), r = await this.getRpc();
      return (await ft.getTokenProgramId(r, t)).equals(qr);
    }
  };
  ft = (_b = class extends Fs {
    constructor(e, t) {
      super(e, t ?? Vs(e, ft._platform));
    }
    getRpc(e, t = {
      commitment: "confirmed",
      disableRetryOnRateLimit: true
    }) {
      if (e in this.config) {
        const r = this.config[e];
        return r.httpHeaders && (t = {
          ...t,
          httpHeaders: {
            ...r.httpHeaders,
            ...t.httpHeaders
          }
        }), new Rs(r.rpc, t);
      }
      throw new Error("No configuration available for chain: " + e);
    }
    getChain(e, t) {
      if (e in this.config) return new Va(e, this, t);
      throw new Error("No configuration available for chain: " + e);
    }
    static nativeTokenId(e, t) {
      if (!ft.isSupportedChain(t)) throw new Error(`invalid chain: ${t}`);
      return Hs.chainAddress(t, Fa);
    }
    static isNativeTokenId(e, t, r) {
      return !this.isSupportedChain(t) || r.chain !== t ? false : this.nativeTokenId(e, t) == r;
    }
    static isSupportedChain(e) {
      return Ds(e) === ft._platform;
    }
    static async getDecimals(e, t, r, o) {
      if (Nr(o)) return Gs(ft._platform);
      let s = await r.getParsedAccountInfo(new nt(o).unwrap());
      if (!s || !s.value) throw new Error("could not fetch token details");
      const { decimals: h } = s.value.data.parsed.info;
      return h;
    }
    static async getBalance(e, t, r, o, s) {
      const h = new _(o);
      if (Nr(s)) return BigInt(await r.getBalance(h));
      const g = await r.getTokenAccountsByOwner(h, {
        mint: new nt(s).unwrap()
      }), w = g.value.length > 0 ? g.value[0].pubkey : h, S = await r.getTokenAccountBalance(w);
      return BigInt(S.value.amount);
    }
    static async getBalances(e, t, r, o) {
      const s = BigInt(await r.getBalance(new _(o))), h = (await Promise.all([
        Yn,
        qr
      ].map((w) => new _(w)).map((w) => r.getParsedTokenAccountsByOwner(new _(o), {
        programId: w
      })))).reduce((w, S) => w.concat(S.value), []), g = {
        native: s
      };
      return h.forEach((w) => {
        var _a3, _b2, _c, _d, _e;
        const S = (_b2 = (_a3 = w.account.data.parsed) == null ? void 0 : _a3.info) == null ? void 0 : _b2.mint, R = (_e = (_d = (_c = w.account.data.parsed) == null ? void 0 : _c.info) == null ? void 0 : _d.tokenAmount) == null ? void 0 : _e.amount;
        S && R && (g[S] = BigInt(R));
      }), g;
    }
    static async sendWait(e, t, r, o) {
      const s = await Promise.all(r.map((w) => this.sendTxWithRetry(t, w, o))), h = s.map((w) => w.signature), g = s.filter((w) => w.response.value.err).map((w) => w.response.value.err);
      if (g.length > 0) throw new Error(`Failed to confirm transaction: ${g}`);
      return h;
    }
    static async sendTxWithRetry(e, t, r = {}, o = 5e3) {
      const s = r.preflightCommitment ?? e.commitment, h = await e.sendRawTransaction(t, {
        ...r,
        skipPreflight: false,
        maxRetries: 0,
        preflightCommitment: s
      }), { blockhash: g, lastValidBlockHeight: w } = await e.getLatestBlockhash(), S = e.confirmTransaction({
        signature: h,
        blockhash: g,
        lastValidBlockHeight: w
      }, s);
      let R = null;
      for (; !R && (R = await Promise.race([
        S,
        new Promise((M) => setTimeout(() => {
          M(null);
        }, o))
      ]), !R); ) await e.sendRawTransaction(t, {
        ...r,
        skipPreflight: true,
        maxRetries: 0,
        preflightCommitment: s
      });
      return {
        signature: h,
        response: R
      };
    }
    static async latestBlock(e, t) {
      return e.getLatestBlockhash(t ?? e.commitment);
    }
    static async getLatestBlock(e) {
      return await e.getSlot();
    }
    static async getLatestFinalizedBlock(e) {
      const { lastValidBlockHeight: t } = await this.latestBlock(e, "finalized");
      return t;
    }
    static chainFromChainId(e) {
      const t = js(ft._platform, e);
      if (!t) throw new Error(`No matching genesis hash to determine network and chain: ${e}`);
      const [r, o] = t;
      return [
        r,
        o
      ];
    }
    static async chainFromRpc(e) {
      try {
        const t = await e.getGenesisHash();
        return ft.chainFromChainId(t);
      } catch (t) {
        if (e.rpcEndpoint.includes("http://127") || e.rpcEndpoint.includes("http://localhost") || e.rpcEndpoint === "http://solana-devnet:8899") return [
          "Devnet",
          "Solana"
        ];
        throw t;
      }
    }
    static async getTokenProgramId(e, t) {
      const r = await e.getAccountInfo(t);
      if (!r) throw new Error(`Mint account not found: ${t.toBase58()}`);
      const o = r.owner;
      if (!o) throw new Error(`Mint account has no owner: ${t.toBase58()}`);
      if (o.equals(Yn) || o.equals(qr)) return o;
      throw new Error(`Mint account has unsupported token program: ${t.toBase58()} (${o.toBase58()})`);
    }
  }, __publicField(_b, "_platform", sn), _b);
  hc = class {
    constructor(e, t, r, o, s = false) {
      __publicField(this, "transaction");
      __publicField(this, "network");
      __publicField(this, "chain");
      __publicField(this, "description");
      __publicField(this, "parallelizable");
      this.transaction = e, this.network = t, this.chain = r, this.description = o, this.parallelizable = s;
    }
  };
  dc = function(l) {
    return l.signatures !== void 0 && l.message !== void 0;
  };
  const Zn = (l) => typeof l == "string" ? dt.from(l) : l;
  Ls = function(l, e) {
    return _.findProgramAddressSync(Array.isArray(l) ? l.map(Zn) : [
      Zn(l)
    ], new _(e))[0];
  };
  Ha = function(l, e) {
    return {
      pubkey: new _(l),
      isWritable: true,
      isSigner: e
    };
  };
  Ga = function(l, e) {
    return {
      pubkey: new _(l),
      isWritable: false,
      isSigner: e
    };
  };
  ja = function(l) {
    if (l === null) throw Error("account info is null");
    return l.data;
  };
  on = new _("BPFLoaderUpgradeab1e11111111111111111111111");
  $a = function(l) {
    return Ls([
      new _(l).toBuffer()
    ], on);
  };
  function Ja(l) {
    return _.findProgramAddressSync([
      new _(l).toBytes()
    ], on)[0];
  }
  const Xn = {
    binary: "uint",
    endianness: "little"
  }, Ya = {
    to: (l) => new _(l),
    from: (l) => l.toBytes()
  }, Za = [
    {
      name: "programDataEnumVariant",
      ...Xn,
      size: 4,
      custom: 3,
      omit: true
    },
    {
      name: "slot",
      ...Xn,
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
              custom: Ya
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
  Xa = function(l) {
    if (l !== void 0) return {
      connection: l
    };
  };
  fc = Object.freeze(Object.defineProperty({
    __proto__: null,
    BPF_LOADER_UPGRADEABLE_PROGRAM_ID: on,
    createReadOnlyProvider: Xa,
    deriveAddress: Ls,
    deriveProgramDataAddress: $a,
    getAccountData: ja,
    newAccountMeta: Ha,
    newReadOnlyAccountMeta: Ga,
    programDataAddress: Ja,
    programDataLayout: Za
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  Qa = class extends Error {
    constructor(e) {
      super(e), this.name = "IdlError";
    }
  };
  var Ut = {}, O = {}, Qn;
  function es() {
    if (Qn) return O;
    Qn = 1;
    let l = class {
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
    O.Layout = l;
    function e(p, c) {
      return c.property ? p + "[" + c.property + "]" : p;
    }
    O.nameWithProperty = e;
    function t(p, c) {
      if (typeof p != "function") throw new TypeError("Class must be constructor");
      if (p.hasOwnProperty("layout_")) throw new Error("Class is already bound to a layout");
      if (!(c && c instanceof l)) throw new TypeError("layout must be a Layout");
      if (c.hasOwnProperty("boundConstructor_")) throw new Error("layout is already bound to a constructor");
      p.layout_ = c, c.boundConstructor_ = p, c.makeDestinationObject = (() => new p()), Object.defineProperty(p.prototype, "encode", {
        value: function(a, n) {
          return c.encode(this, a, n);
        },
        writable: true
      }), Object.defineProperty(p, "decode", {
        value: function(a, n) {
          return c.decode(a, n);
        },
        writable: true
      });
    }
    O.bindConstructorLayout = t;
    class r extends l {
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
        if (!(c instanceof l)) throw new TypeError("layout must be a Layout");
        if (a === void 0) a = 0;
        else if (!Number.isInteger(a)) throw new TypeError("offset must be integer or undefined");
        super(c.span, n || c.property), this.layout = c, this.offset = a;
      }
      isCount() {
        return this.layout instanceof h || this.layout instanceof g;
      }
      decode(c, a) {
        return a === void 0 && (a = 0), this.layout.decode(c, a + this.offset);
      }
      encode(c, a, n) {
        return n === void 0 && (n = 0), this.layout.encode(c, a, n + this.offset);
      }
    }
    class h extends l {
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
    class g extends l {
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
    class w extends l {
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
    class S extends l {
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
    const R = Math.pow(2, 32);
    function M(p) {
      const c = Math.floor(p / R), a = p - c * R;
      return {
        hi32: c,
        lo32: a
      };
    }
    function K(p, c) {
      return p * R + c;
    }
    class E extends l {
      constructor(c) {
        super(8, c);
      }
      decode(c, a) {
        a === void 0 && (a = 0);
        const n = c.readUInt32LE(a), d = c.readUInt32LE(a + 4);
        return K(d, n);
      }
      encode(c, a, n) {
        n === void 0 && (n = 0);
        const d = M(c);
        return a.writeUInt32LE(d.lo32, n), a.writeUInt32LE(d.hi32, n + 4), 8;
      }
    }
    class T extends l {
      constructor(c) {
        super(8, c);
      }
      decode(c, a) {
        a === void 0 && (a = 0);
        const n = c.readUInt32BE(a), d = c.readUInt32BE(a + 4);
        return K(n, d);
      }
      encode(c, a, n) {
        n === void 0 && (n = 0);
        const d = M(c);
        return a.writeUInt32BE(d.hi32, n), a.writeUInt32BE(d.lo32, n + 4), 8;
      }
    }
    class P extends l {
      constructor(c) {
        super(8, c);
      }
      decode(c, a) {
        a === void 0 && (a = 0);
        const n = c.readUInt32LE(a), d = c.readInt32LE(a + 4);
        return K(d, n);
      }
      encode(c, a, n) {
        n === void 0 && (n = 0);
        const d = M(c);
        return a.writeUInt32LE(d.lo32, n), a.writeInt32LE(d.hi32, n + 4), 8;
      }
    }
    class N extends l {
      constructor(c) {
        super(8, c);
      }
      decode(c, a) {
        a === void 0 && (a = 0);
        const n = c.readInt32BE(a), d = c.readUInt32BE(a + 4);
        return K(n, d);
      }
      encode(c, a, n) {
        n === void 0 && (n = 0);
        const d = M(c);
        return a.writeInt32BE(d.hi32, n), a.writeUInt32BE(d.lo32, n + 4), 8;
      }
    }
    class F extends l {
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
    class Q extends l {
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
    class Ze extends l {
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
    class Xe extends l {
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
    class gt extends l {
      constructor(c, a, n) {
        if (!(c instanceof l)) throw new TypeError("elementLayout must be a Layout");
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
          let I = 0;
          for (; I < d; ) n += this.elementLayout.getSpan(c, a + n), ++I;
        }
        return n;
      }
      decode(c, a) {
        a === void 0 && (a = 0);
        const n = [];
        let d = 0, I = this.count;
        for (I instanceof r && (I = I.decode(c, a)); d < I; ) n.push(this.elementLayout.decode(c, a)), a += this.elementLayout.getSpan(c, a), d += 1;
        return n;
      }
      encode(c, a, n) {
        n === void 0 && (n = 0);
        const d = this.elementLayout, I = c.reduce((C, W) => C + d.encode(W, a, n + C), 0);
        return this.count instanceof r && this.count.encode(c.length, a, n), I;
      }
    }
    class $e extends l {
      constructor(c, a, n) {
        if (!(Array.isArray(c) && c.reduce((I, C) => I && C instanceof l, true))) throw new TypeError("fields must be array of Layout instances");
        typeof a == "boolean" && n === void 0 && (n = a, a = void 0);
        for (const I of c) if (0 > I.span && I.property === void 0) throw new Error("fields cannot contain unnamed variable-length layout");
        let d = -1;
        try {
          d = c.reduce((I, C) => I + C.getSpan(), 0);
        } catch {
        }
        super(d, a), this.fields = c, this.decodePrefixes = !!n;
      }
      getSpan(c, a) {
        if (0 <= this.span) return this.span;
        a === void 0 && (a = 0);
        let n = 0;
        try {
          n = this.fields.reduce((d, I) => {
            const C = I.getSpan(c, a);
            return a += C, d + C;
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
        let I = 0, C = 0;
        for (const W of this.fields) {
          let ae = W.span;
          if (C = 0 < ae ? ae : 0, W.property !== void 0) {
            const ee = c[W.property];
            ee !== void 0 && (C = W.encode(ee, a, n), 0 > ae && (ae = W.getSpan(a, n)));
          }
          I = n, n += ae;
        }
        return I + C - d;
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
    class it {
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
    class lt extends it {
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
    class yt extends l {
      constructor(c, a, n) {
        const d = c instanceof h || c instanceof g;
        if (d) c = new lt(new s(c));
        else if (c instanceof r && c.isCount()) c = new lt(c);
        else if (!(c instanceof it)) throw new TypeError("discr must be a UnionDiscriminator or an unsigned integer layout");
        if (a === void 0 && (a = null), !(a === null || a instanceof l)) throw new TypeError("defaultLayout must be null or a Layout");
        if (a !== null) {
          if (0 > a.span) throw new Error("defaultLayout must have constant span");
          a.property === void 0 && (a = a.replicate("content"));
        }
        let I = -1;
        a && (I = a.span, 0 <= I && d && (I += c.layout.span)), super(I, n), this.discriminator = c, this.usesPrefixDiscriminator = d, this.defaultLayout = a, this.registry = {};
        let C = this.defaultGetSourceVariant.bind(this);
        this.getSourceVariant = function(W) {
          return C(W);
        }, this.configGetSourceVariant = function(W) {
          C = W.bind(this);
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
        const d = this.discriminator, I = d.decode(c, a);
        let C = this.registry[I];
        if (C === void 0) {
          let W = 0;
          C = this.defaultLayout, this.usesPrefixDiscriminator && (W = d.layout.span), n = this.makeDestinationObject(), n[d.property] = I, n[C.property] = this.defaultLayout.decode(c, a + W);
        } else n = C.decode(c, a);
        return n;
      }
      encode(c, a, n) {
        n === void 0 && (n = 0);
        const d = this.getSourceVariant(c);
        if (d === void 0) {
          const I = this.discriminator, C = this.defaultLayout;
          let W = 0;
          return this.usesPrefixDiscriminator && (W = I.layout.span), I.encode(c[I.property], a, n), W + C.encode(c[C.property], a, n + W);
        }
        return d.encode(c, a, n);
      }
      addVariant(c, a, n) {
        const d = new mt(this, c, a, n);
        return this.registry[c] = d, d;
      }
      getVariant(c, a) {
        let n = c;
        return dt.isBuffer(c) && (a === void 0 && (a = 0), n = this.discriminator.decode(c, a)), this.registry[n];
      }
    }
    class mt extends l {
      constructor(c, a, n, d) {
        if (!(c instanceof yt)) throw new TypeError("union must be a Union");
        if (!Number.isInteger(a) || 0 > a) throw new TypeError("variant must be a (non-negative) integer");
        if (typeof n == "string" && d === void 0 && (d = n, n = null), n) {
          if (!(n instanceof l)) throw new TypeError("layout must be a Layout");
          if (c.defaultLayout !== null && 0 <= n.span && n.span > c.defaultLayout.span) throw new Error("variant span exceeds span of containing union");
          if (typeof d != "string") throw new TypeError("variant must have a String property");
        }
        let I = c.span;
        0 > c.span && (I = n ? n.span : 0, 0 <= I && c.usesPrefixDiscriminator && (I += c.discriminator.layout.span)), super(I, d), this.union = c, this.variant = a, this.layout = n || null;
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
        let I = d;
        if (this.layout && (this.layout.encode(c[this.property], a, n + d), I += this.layout.getSpan(a, n + d), 0 <= this.union.span && I > this.union.span)) throw new Error("encoded variant overruns containing union");
        return I;
      }
      fromArray(c) {
        if (this.layout) return this.layout.fromArray(c);
      }
    }
    function Z(p) {
      return 0 > p && (p += 4294967296), p;
    }
    class U extends l {
      constructor(c, a, n) {
        if (!(c instanceof h || c instanceof g)) throw new TypeError("word must be a UInt or UIntBE layout");
        if (typeof a == "string" && n === void 0 && (n = a, a = void 0), 4 < c.span) throw new RangeError("word cannot exceed 32 bits");
        super(c.span, n), this.word = c, this.msb = !!a, this.fields = [];
        let d = 0;
        this._packedSetValue = function(I) {
          return d = Z(I), this;
        }, this._packedGetValue = function() {
          return d;
        };
      }
      decode(c, a) {
        const n = this.makeDestinationObject();
        a === void 0 && (a = 0);
        const d = this.word.decode(c, a);
        this._packedSetValue(d);
        for (const I of this.fields) I.property !== void 0 && (n[I.property] = I.decode(d));
        return n;
      }
      encode(c, a, n) {
        n === void 0 && (n = 0);
        const d = this.word.decode(a, n);
        this._packedSetValue(d);
        for (const I of this.fields) if (I.property !== void 0) {
          const C = c[I.property];
          C !== void 0 && I.encode(C);
        }
        return this.word.encode(this._packedGetValue(), a, n);
      }
      addField(c, a) {
        const n = new y(this, c, a);
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
    class y {
      constructor(c, a, n) {
        if (!(c instanceof U)) throw new TypeError("container must be a BitStructure");
        if (!Number.isInteger(a) || 0 >= a) throw new TypeError("bits must be positive integer");
        const d = 8 * c.span, I = c.fields.reduce((C, W) => C + W.bits, 0);
        if (a + I > d) throw new Error("bits too long for span remainder (" + (d - I) + " of " + d + " remain)");
        this.container = c, this.bits = a, this.valueMask = (1 << a) - 1, a === 32 && (this.valueMask = 4294967295), this.start = I, this.container.msb && (this.start = d - I - a), this.wordMask = Z(this.valueMask << this.start), this.property = n;
      }
      decode() {
        const c = this.container._packedGetValue();
        return Z(c & this.wordMask) >>> this.start;
      }
      encode(c) {
        if (!Number.isInteger(c) || c !== Z(c & this.valueMask)) throw new TypeError(e("BitField.encode", this) + " value must be integer not exceeding " + this.valueMask);
        const a = this.container._packedGetValue(), n = Z(c << this.start);
        this.container._packedSetValue(Z(a & ~this.wordMask) | n);
      }
    }
    class i extends y {
      constructor(c, a) {
        super(c, 1, a);
      }
      decode(c, a) {
        return !!y.prototype.decode.call(this, c, a);
      }
      encode(c) {
        return typeof c == "boolean" && (c = +c), y.prototype.encode.call(this, c);
      }
    }
    class u extends l {
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
        if (this.length instanceof r && (d = c.length), !(dt.isBuffer(c) && d === c.length)) throw new TypeError(e("Blob.encode", this) + " requires (length " + d + ") Buffer as src");
        if (n + d > a.length) throw new RangeError("encoding overruns Buffer");
        return a.write(c.toString("hex"), n, d, "hex"), this.length instanceof r && this.length.encode(d, a, n), d;
      }
    }
    class f extends l {
      constructor(c) {
        super(-1, c);
      }
      getSpan(c, a) {
        if (!dt.isBuffer(c)) throw new TypeError("b must be a Buffer");
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
        const d = new dt(c, "utf8"), I = d.length;
        if (n + I > a.length) throw new RangeError("encoding overruns Buffer");
        return d.copy(a, n), a[n + I] = 0, I + 1;
      }
    }
    class m extends l {
      constructor(c, a) {
        if (typeof c == "string" && a === void 0 && (a = c, c = void 0), c === void 0) c = -1;
        else if (!Number.isInteger(c)) throw new TypeError("maxSpan must be an integer");
        super(-1, a), this.maxSpan = c;
      }
      getSpan(c, a) {
        if (!dt.isBuffer(c)) throw new TypeError("b must be a Buffer");
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
        const d = new dt(c, "utf8"), I = d.length;
        if (0 <= this.maxSpan && this.maxSpan < I) throw new RangeError("text length exceeds maxSpan");
        if (n + I > a.length) throw new RangeError("encoding overruns Buffer");
        return d.copy(a, n), I;
      }
    }
    class k extends l {
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
    return O.ExternalLayout = r, O.GreedyCount = o, O.OffsetLayout = s, O.UInt = h, O.UIntBE = g, O.Int = w, O.IntBE = S, O.Float = F, O.FloatBE = Q, O.Double = Ze, O.DoubleBE = Xe, O.Sequence = gt, O.Structure = $e, O.UnionDiscriminator = it, O.UnionLayoutDiscriminator = lt, O.Union = yt, O.VariantLayout = mt, O.BitStructure = U, O.BitField = y, O.Boolean = i, O.Blob = u, O.CString = f, O.UTF8 = m, O.Constant = k, O.greedy = ((p, c) => new o(p, c)), O.offset = ((p, c, a) => new s(p, c, a)), O.u8 = ((p) => new h(1, p)), O.u16 = ((p) => new h(2, p)), O.u24 = ((p) => new h(3, p)), O.u32 = ((p) => new h(4, p)), O.u40 = ((p) => new h(5, p)), O.u48 = ((p) => new h(6, p)), O.nu64 = ((p) => new E(p)), O.u16be = ((p) => new g(2, p)), O.u24be = ((p) => new g(3, p)), O.u32be = ((p) => new g(4, p)), O.u40be = ((p) => new g(5, p)), O.u48be = ((p) => new g(6, p)), O.nu64be = ((p) => new T(p)), O.s8 = ((p) => new w(1, p)), O.s16 = ((p) => new w(2, p)), O.s24 = ((p) => new w(3, p)), O.s32 = ((p) => new w(4, p)), O.s40 = ((p) => new w(5, p)), O.s48 = ((p) => new w(6, p)), O.ns64 = ((p) => new P(p)), O.s16be = ((p) => new S(2, p)), O.s24be = ((p) => new S(3, p)), O.s32be = ((p) => new S(4, p)), O.s40be = ((p) => new S(5, p)), O.s48be = ((p) => new S(6, p)), O.ns64be = ((p) => new N(p)), O.f32 = ((p) => new F(p)), O.f32be = ((p) => new Q(p)), O.f64 = ((p) => new Ze(p)), O.f64be = ((p) => new Xe(p)), O.struct = ((p, c, a) => new $e(p, c, a)), O.bits = ((p, c, a) => new U(p, c, a)), O.seq = ((p, c, a) => new gt(p, c, a)), O.union = ((p, c, a) => new yt(p, c, a)), O.unionLayoutDiscriminator = ((p, c) => new lt(p, c)), O.blob = ((p, c) => new u(p, c)), O.cstr = ((p) => new f(p)), O.utf8 = ((p, c) => new m(p, c)), O.const = ((p, c) => new k(p, c)), O;
  }
  const ec = Ys(qa);
  var ts;
  function tc() {
    return ts || (ts = 1, (function(l) {
      var e = Ut && Ut.__importDefault || function(U) {
        return U && U.__esModule ? U : {
          default: U
        };
      };
      Object.defineProperty(l, "__esModule", {
        value: true
      }), l.map = l.array = l.rustEnum = l.str = l.vecU8 = l.tagged = l.vec = l.bool = l.option = l.publicKey = l.i256 = l.u256 = l.i128 = l.u128 = l.i64 = l.u64 = l.struct = l.f64 = l.f32 = l.i32 = l.u32 = l.i16 = l.u16 = l.i8 = l.u8 = void 0;
      const t = es(), r = ec, o = e(Zs());
      var s = es();
      Object.defineProperty(l, "u8", {
        enumerable: true,
        get: function() {
          return s.u8;
        }
      }), Object.defineProperty(l, "i8", {
        enumerable: true,
        get: function() {
          return s.s8;
        }
      }), Object.defineProperty(l, "u16", {
        enumerable: true,
        get: function() {
          return s.u16;
        }
      }), Object.defineProperty(l, "i16", {
        enumerable: true,
        get: function() {
          return s.s16;
        }
      }), Object.defineProperty(l, "u32", {
        enumerable: true,
        get: function() {
          return s.u32;
        }
      }), Object.defineProperty(l, "i32", {
        enumerable: true,
        get: function() {
          return s.s32;
        }
      }), Object.defineProperty(l, "f32", {
        enumerable: true,
        get: function() {
          return s.f32;
        }
      }), Object.defineProperty(l, "f64", {
        enumerable: true,
        get: function() {
          return s.f64;
        }
      }), Object.defineProperty(l, "struct", {
        enumerable: true,
        get: function() {
          return s.struct;
        }
      });
      class h extends t.Layout {
        constructor(y, i, u) {
          super(y, u), this.blob = (0, t.blob)(y), this.signed = i;
        }
        decode(y, i = 0) {
          const u = new o.default(this.blob.decode(y, i), 10, "le");
          return this.signed ? u.fromTwos(this.span * 8).clone() : u;
        }
        encode(y, i, u = 0) {
          return this.signed && (y = y.toTwos(this.span * 8)), this.blob.encode(y.toArrayLike(dt, "le", this.span), i, u);
        }
      }
      function g(U) {
        return new h(8, false, U);
      }
      l.u64 = g;
      function w(U) {
        return new h(8, true, U);
      }
      l.i64 = w;
      function S(U) {
        return new h(16, false, U);
      }
      l.u128 = S;
      function R(U) {
        return new h(16, true, U);
      }
      l.i128 = R;
      function M(U) {
        return new h(32, false, U);
      }
      l.u256 = M;
      function K(U) {
        return new h(32, true, U);
      }
      l.i256 = K;
      class E extends t.Layout {
        constructor(y, i, u, f) {
          super(y.span, f), this.layout = y, this.decoder = i, this.encoder = u;
        }
        decode(y, i) {
          return this.decoder(this.layout.decode(y, i));
        }
        encode(y, i, u) {
          return this.layout.encode(this.encoder(y), i, u);
        }
        getSpan(y, i) {
          return this.layout.getSpan(y, i);
        }
      }
      function T(U) {
        return new E((0, t.blob)(32), (y) => new r.PublicKey(y), (y) => y.toBuffer(), U);
      }
      l.publicKey = T;
      class P extends t.Layout {
        constructor(y, i) {
          super(-1, i), this.layout = y, this.discriminator = (0, t.u8)();
        }
        encode(y, i, u = 0) {
          return y == null ? this.discriminator.encode(0, i, u) : (this.discriminator.encode(1, i, u), this.layout.encode(y, i, u + 1) + 1);
        }
        decode(y, i = 0) {
          const u = this.discriminator.decode(y, i);
          if (u === 0) return null;
          if (u === 1) return this.layout.decode(y, i + 1);
          throw new Error("Invalid option " + this.property);
        }
        getSpan(y, i = 0) {
          const u = this.discriminator.decode(y, i);
          if (u === 0) return 1;
          if (u === 1) return this.layout.getSpan(y, i + 1) + 1;
          throw new Error("Invalid option " + this.property);
        }
      }
      function N(U, y) {
        return new P(U, y);
      }
      l.option = N;
      function F(U) {
        return new E((0, t.u8)(), Q, Ze, U);
      }
      l.bool = F;
      function Q(U) {
        if (U === 0) return false;
        if (U === 1) return true;
        throw new Error("Invalid bool: " + U);
      }
      function Ze(U) {
        return U ? 1 : 0;
      }
      function Xe(U, y) {
        const i = (0, t.u32)("length"), u = (0, t.struct)([
          i,
          (0, t.seq)(U, (0, t.offset)(i, -i.span), "values")
        ]);
        return new E(u, ({ values: f }) => f, (f) => ({
          values: f
        }), y);
      }
      l.vec = Xe;
      function gt(U, y, i) {
        const u = (0, t.struct)([
          g("tag"),
          y.replicate("data")
        ]);
        function f({ tag: m, data: k }) {
          if (!m.eq(U)) throw new Error("Invalid tag, expected: " + U.toString("hex") + ", got: " + m.toString("hex"));
          return k;
        }
        return new E(u, f, (m) => ({
          tag: U,
          data: m
        }), i);
      }
      l.tagged = gt;
      function $e(U) {
        const y = (0, t.u32)("length"), i = (0, t.struct)([
          y,
          (0, t.blob)((0, t.offset)(y, -y.span), "data")
        ]);
        return new E(i, ({ data: u }) => u, (u) => ({
          data: u
        }), U);
      }
      l.vecU8 = $e;
      function it(U) {
        return new E($e(), (y) => y.toString("utf-8"), (y) => dt.from(y, "utf-8"), U);
      }
      l.str = it;
      function lt(U, y, i) {
        const u = (0, t.union)(i ?? (0, t.u8)(), y);
        return U.forEach((f, m) => u.addVariant(m, f, f.property)), u;
      }
      l.rustEnum = lt;
      function yt(U, y, i) {
        const u = (0, t.struct)([
          (0, t.seq)(U, y, "values")
        ]);
        return new E(u, ({ values: f }) => f, (f) => ({
          values: f
        }), i);
      }
      l.array = yt;
      class mt extends t.Layout {
        constructor(y, i, u) {
          super(y.span + i.span, u), this.keyLayout = y, this.valueLayout = i;
        }
        decode(y, i) {
          i = i || 0;
          const u = this.keyLayout.decode(y, i), f = this.valueLayout.decode(y, i + this.keyLayout.getSpan(y, i));
          return [
            u,
            f
          ];
        }
        encode(y, i, u) {
          u = u || 0;
          const f = this.keyLayout.encode(y[0], i, u), m = this.valueLayout.encode(y[1], i, u + f);
          return f + m;
        }
        getSpan(y, i) {
          return this.keyLayout.getSpan(y, i) + this.valueLayout.getSpan(y, i);
        }
      }
      function Z(U, y, i) {
        const u = (0, t.u32)("length"), f = (0, t.struct)([
          u,
          (0, t.seq)(new mt(U, y), (0, t.offset)(u, -u.span), "values")
        ]);
        return new E(f, ({ values: m }) => new Map(m), (m) => ({
          values: Array.from(m.entries())
        }), i);
      }
      l.map = Z;
    })(Ut)), Ut;
  }
  gc = tc();
  rc = function(l, e) {
    switch (e.type.kind) {
      case "struct":
        return e.type.fields.map((t) => St(l, t.type)).reduce((t, r) => t + r, 0);
      case "enum": {
        const t = e.type.variants.map((r) => r.fields ? r.fields.map((o) => typeof o == "object" && "name" in o ? St(l, o.type) : St(l, o)).reduce((o, s) => o + s, 0) : 0);
        return Math.max(...t) + 1;
      }
      case "alias":
        return St(l, e.type.value);
    }
  };
  function St(l, e) {
    var _a3;
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
        if ("option" in e) return 1 + St(l, e.option);
        if ("coption" in e) return 4 + St(l, e.coption);
        if ("defined" in e) {
          const t = ((_a3 = l.types) == null ? void 0 : _a3.filter((o) => o.name === e.defined)) ?? [];
          if (t.length !== 1) throw new Qa(`Type not found: ${JSON.stringify(e)}`);
          let r = t[0];
          return rc(l, r);
        }
        if ("array" in e) {
          let t = e.array[0], r = e.array[1];
          return St(l, t) * r;
        }
        throw new Error(`Invalid type ${JSON.stringify(e)}`);
    }
  }
  yc = function(l) {
    return l.replace(/(?:^\w|[A-Z]|\b\w)/g, function(e, t) {
      return t === 0 ? e.toLowerCase() : e.toUpperCase();
    }).replace(/[\s\-_]+/g, "");
  };
  mc = function(l) {
    return l.charAt(0).toUpperCase() + l.slice(1);
  };
});
export {
  xn as A,
  on as B,
  tn as C,
  uc as D,
  te as E,
  Tt as F,
  Fi as G,
  Qa as I,
  xt as K,
  lc as N,
  _ as P,
  qt as S,
  $r as T,
  tr as V,
  sn as _,
  __tla,
  rc as a,
  ft as b,
  Yr as c,
  gc as d,
  nt as e,
  Va as f,
  hc as g,
  Fa as h,
  dc as i,
  yc as j,
  ac as k,
  mc as l,
  fc as m,
  Ls as n,
  ja as o,
  Xa as p,
  Ha as q,
  Ga as r,
  Ye as s,
  Lt as t,
  cc as u,
  Yn as v,
  ot as w,
  $a as x,
  qr as y,
  Y as z
};
