var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { B as Dt, b as zr, c as hr, d as Tr, a as yt } from "./crypto-CvxmDsJu.js";
import { L as l, s as Xe, l as pe, e as Zt, d as qt, f as M, i as ye, t as we, h as T, j as Ct, m as g, n as c, o as x, p as y, q as b, r as At, v as ur, w as bt, x as Ft, y as fr, z as Lr, __tla as __tla_0 } from "./index-Df8xo8q0.js";
let Wi, $i, Vi;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const xe = (m) => {
    const p = m.decode.bind(m), w = m.encode.bind(m);
    return {
      decode: p,
      encode: w
    };
  };
  var Bt = {}, Qe;
  function Or() {
    if (Qe) return Bt;
    Qe = 1, Object.defineProperty(Bt, "__esModule", {
      value: true
    });
    function m(S) {
      {
        const h = Dt.from(S);
        h.reverse();
        const B = h.toString("hex");
        return B.length === 0 ? BigInt(0) : BigInt(`0x${B}`);
      }
    }
    Bt.toBigIntLE = m;
    function p(S) {
      {
        const h = S.toString("hex");
        return h.length === 0 ? BigInt(0) : BigInt(`0x${h}`);
      }
    }
    Bt.toBigIntBE = p;
    function w(S, h) {
      {
        const B = S.toString(16), L = Dt.from(B.padStart(h * 2, "0").slice(0, h * 2), "hex");
        return L.reverse(), L;
      }
    }
    Bt.toBufferLE = w;
    function v(S, h) {
      {
        const B = S.toString(16);
        return Dt.from(B.padStart(h * 2, "0").slice(0, h * 2), "hex");
      }
    }
    return Bt.toBufferBE = v, Bt;
  }
  var tr = Or();
  let Cr;
  Cr = (m) => (p) => {
    const w = l.blob(m, p), { encode: v, decode: S } = xe(w), h = w;
    return h.decode = (B, L) => {
      const wt = S(B, L);
      return tr.toBigIntLE(Dt.from(wt));
    }, h.encode = (B, L, wt) => {
      const It = tr.toBufferLE(B, m);
      return v(It, L, wt);
    }, h;
  };
  Vi = Cr(8);
  Wi = (m) => {
    const p = l.u8(m), { encode: w, decode: v } = xe(p), S = p;
    return S.decode = (h, B) => !!v(h, B), S.encode = (h, B, L) => {
      const wt = Number(h);
      return w(wt, B, L);
    }, S;
  };
  var Ut = {
    exports: {}
  }, Nr = Ut.exports, er;
  function qr() {
    return er || (er = 1, (function(m) {
      (function(p, w) {
        function v(u, t) {
          if (!u) throw new Error(t || "Assertion failed");
        }
        function S(u, t) {
          u.super_ = t;
          var r = function() {
          };
          r.prototype = t.prototype, u.prototype = new r(), u.prototype.constructor = u;
        }
        function h(u, t, r) {
          if (h.isBN(u)) return u;
          this.negative = 0, this.words = null, this.length = 0, this.red = null, u !== null && ((t === "le" || t === "be") && (r = t, t = 10), this._init(u || 0, t || 10, r || "be"));
        }
        typeof p == "object" ? p.exports = h : w.BN = h, h.BN = h, h.wordSize = 26;
        var B;
        try {
          typeof window < "u" && typeof window.Buffer < "u" ? B = window.Buffer : B = zr().Buffer;
        } catch {
        }
        h.isBN = function(t) {
          return t instanceof h ? true : t !== null && typeof t == "object" && t.constructor.wordSize === h.wordSize && Array.isArray(t.words);
        }, h.max = function(t, r) {
          return t.cmp(r) > 0 ? t : r;
        }, h.min = function(t, r) {
          return t.cmp(r) < 0 ? t : r;
        }, h.prototype._init = function(t, r, i) {
          if (typeof t == "number") return this._initNumber(t, r, i);
          if (typeof t == "object") return this._initArray(t, r, i);
          r === "hex" && (r = 16), v(r === (r | 0) && r >= 2 && r <= 36), t = t.toString().replace(/\s+/g, "");
          var s = 0;
          t[0] === "-" && (s++, this.negative = 1), s < t.length && (r === 16 ? this._parseHex(t, s, i) : (this._parseBase(t, r, s), i === "le" && this._initArray(this.toArray(), r, i)));
        }, h.prototype._initNumber = function(t, r, i) {
          t < 0 && (this.negative = 1, t = -t), t < 67108864 ? (this.words = [
            t & 67108863
          ], this.length = 1) : t < 4503599627370496 ? (this.words = [
            t & 67108863,
            t / 67108864 & 67108863
          ], this.length = 2) : (v(t < 9007199254740992), this.words = [
            t & 67108863,
            t / 67108864 & 67108863,
            1
          ], this.length = 3), i === "le" && this._initArray(this.toArray(), r, i);
        }, h.prototype._initArray = function(t, r, i) {
          if (v(typeof t.length == "number"), t.length <= 0) return this.words = [
            0
          ], this.length = 1, this;
          this.length = Math.ceil(t.length / 3), this.words = new Array(this.length);
          for (var s = 0; s < this.length; s++) this.words[s] = 0;
          var a, f, d = 0;
          if (i === "be") for (s = t.length - 1, a = 0; s >= 0; s -= 3) f = t[s] | t[s - 1] << 8 | t[s - 2] << 16, this.words[a] |= f << d & 67108863, this.words[a + 1] = f >>> 26 - d & 67108863, d += 24, d >= 26 && (d -= 26, a++);
          else if (i === "le") for (s = 0, a = 0; s < t.length; s += 3) f = t[s] | t[s + 1] << 8 | t[s + 2] << 16, this.words[a] |= f << d & 67108863, this.words[a + 1] = f >>> 26 - d & 67108863, d += 24, d >= 26 && (d -= 26, a++);
          return this._strip();
        };
        function L(u, t) {
          var r = u.charCodeAt(t);
          if (r >= 48 && r <= 57) return r - 48;
          if (r >= 65 && r <= 70) return r - 55;
          if (r >= 97 && r <= 102) return r - 87;
          v(false, "Invalid character in " + u);
        }
        function wt(u, t, r) {
          var i = L(u, r);
          return r - 1 >= t && (i |= L(u, r - 1) << 4), i;
        }
        h.prototype._parseHex = function(t, r, i) {
          this.length = Math.ceil((t.length - r) / 6), this.words = new Array(this.length);
          for (var s = 0; s < this.length; s++) this.words[s] = 0;
          var a = 0, f = 0, d;
          if (i === "be") for (s = t.length - 1; s >= r; s -= 2) d = wt(t, r, s) << a, this.words[f] |= d & 67108863, a >= 18 ? (a -= 18, f += 1, this.words[f] |= d >>> 26) : a += 8;
          else {
            var n = t.length - r;
            for (s = n % 2 === 0 ? r + 1 : r; s < t.length; s += 2) d = wt(t, r, s) << a, this.words[f] |= d & 67108863, a >= 18 ? (a -= 18, f += 1, this.words[f] |= d >>> 26) : a += 8;
          }
          this._strip();
        };
        function It(u, t, r, i) {
          for (var s = 0, a = 0, f = Math.min(u.length, r), d = t; d < f; d++) {
            var n = u.charCodeAt(d) - 48;
            s *= i, n >= 49 ? a = n - 49 + 10 : n >= 17 ? a = n - 17 + 10 : a = n, v(n >= 0 && a < i, "Invalid character"), s += a;
          }
          return s;
        }
        h.prototype._parseBase = function(t, r, i) {
          this.words = [
            0
          ], this.length = 1;
          for (var s = 0, a = 1; a <= 67108863; a *= r) s++;
          s--, a = a / r | 0;
          for (var f = t.length - i, d = f % s, n = Math.min(f, f - d) + i, e = 0, o = i; o < n; o += s) e = It(t, o, o + s, r), this.imuln(a), this.words[0] + e < 67108864 ? this.words[0] += e : this._iaddn(e);
          if (d !== 0) {
            var A = 1;
            for (e = It(t, o, t.length, r), o = 0; o < d; o++) A *= r;
            this.imuln(A), this.words[0] + e < 67108864 ? this.words[0] += e : this._iaddn(e);
          }
          this._strip();
        }, h.prototype.copy = function(t) {
          t.words = new Array(this.length);
          for (var r = 0; r < this.length; r++) t.words[r] = this.words[r];
          t.length = this.length, t.negative = this.negative, t.red = this.red;
        };
        function ke(u, t) {
          u.words = t.words, u.length = t.length, u.negative = t.negative, u.red = t.red;
        }
        if (h.prototype._move = function(t) {
          ke(t, this);
        }, h.prototype.clone = function() {
          var t = new h(null);
          return this.copy(t), t;
        }, h.prototype._expand = function(t) {
          for (; this.length < t; ) this.words[this.length++] = 0;
          return this;
        }, h.prototype._strip = function() {
          for (; this.length > 1 && this.words[this.length - 1] === 0; ) this.length--;
          return this._normSign();
        }, h.prototype._normSign = function() {
          return this.length === 1 && this.words[0] === 0 && (this.negative = 0), this;
        }, typeof Symbol < "u" && typeof Symbol.for == "function") try {
          h.prototype[Symbol.for("nodejs.util.inspect.custom")] = $t;
        } catch {
          h.prototype.inspect = $t;
        }
        else h.prototype.inspect = $t;
        function $t() {
          return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
        }
        var Be = [
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
        ], Br = [
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
        ], Rr = [
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
        h.prototype.toString = function(t, r) {
          t = t || 10, r = r | 0 || 1;
          var i;
          if (t === 16 || t === "hex") {
            i = "";
            for (var s = 0, a = 0, f = 0; f < this.length; f++) {
              var d = this.words[f], n = ((d << s | a) & 16777215).toString(16);
              a = d >>> 24 - s & 16777215, s += 2, s >= 26 && (s -= 26, f--), a !== 0 || f !== this.length - 1 ? i = Be[6 - n.length] + n + i : i = n + i;
            }
            for (a !== 0 && (i = a.toString(16) + i); i.length % r !== 0; ) i = "0" + i;
            return this.negative !== 0 && (i = "-" + i), i;
          }
          if (t === (t | 0) && t >= 2 && t <= 36) {
            var e = Br[t], o = Rr[t];
            i = "";
            var A = this.clone();
            for (A.negative = 0; !A.isZero(); ) {
              var _ = A.modrn(o).toString(t);
              A = A.idivn(o), A.isZero() ? i = _ + i : i = Be[e - _.length] + _ + i;
            }
            for (this.isZero() && (i = "0" + i); i.length % r !== 0; ) i = "0" + i;
            return this.negative !== 0 && (i = "-" + i), i;
          }
          v(false, "Base should be between 2 and 36");
        }, h.prototype.toNumber = function() {
          var t = this.words[0];
          return this.length === 2 ? t += this.words[1] * 67108864 : this.length === 3 && this.words[2] === 1 ? t += 4503599627370496 + this.words[1] * 67108864 : this.length > 2 && v(false, "Number can only safely store up to 53 bits"), this.negative !== 0 ? -t : t;
        }, h.prototype.toJSON = function() {
          return this.toString(16, 2);
        }, B && (h.prototype.toBuffer = function(t, r) {
          return this.toArrayLike(B, t, r);
        }), h.prototype.toArray = function(t, r) {
          return this.toArrayLike(Array, t, r);
        };
        var Er = function(t, r) {
          return t.allocUnsafe ? t.allocUnsafe(r) : new t(r);
        };
        h.prototype.toArrayLike = function(t, r, i) {
          this._strip();
          var s = this.byteLength(), a = i || Math.max(1, s);
          v(s <= a, "byte array longer than desired length"), v(a > 0, "Requested array length <= 0");
          var f = Er(t, a), d = r === "le" ? "LE" : "BE";
          return this["_toArrayLike" + d](f, s), f;
        }, h.prototype._toArrayLikeLE = function(t, r) {
          for (var i = 0, s = 0, a = 0, f = 0; a < this.length; a++) {
            var d = this.words[a] << f | s;
            t[i++] = d & 255, i < t.length && (t[i++] = d >> 8 & 255), i < t.length && (t[i++] = d >> 16 & 255), f === 6 ? (i < t.length && (t[i++] = d >> 24 & 255), s = 0, f = 0) : (s = d >>> 24, f += 2);
          }
          if (i < t.length) for (t[i++] = s; i < t.length; ) t[i++] = 0;
        }, h.prototype._toArrayLikeBE = function(t, r) {
          for (var i = t.length - 1, s = 0, a = 0, f = 0; a < this.length; a++) {
            var d = this.words[a] << f | s;
            t[i--] = d & 255, i >= 0 && (t[i--] = d >> 8 & 255), i >= 0 && (t[i--] = d >> 16 & 255), f === 6 ? (i >= 0 && (t[i--] = d >> 24 & 255), s = 0, f = 0) : (s = d >>> 24, f += 2);
          }
          if (i >= 0) for (t[i--] = s; i >= 0; ) t[i--] = 0;
        }, Math.clz32 ? h.prototype._countBits = function(t) {
          return 32 - Math.clz32(t);
        } : h.prototype._countBits = function(t) {
          var r = t, i = 0;
          return r >= 4096 && (i += 13, r >>>= 13), r >= 64 && (i += 7, r >>>= 7), r >= 8 && (i += 4, r >>>= 4), r >= 2 && (i += 2, r >>>= 2), i + r;
        }, h.prototype._zeroBits = function(t) {
          if (t === 0) return 26;
          var r = t, i = 0;
          return (r & 8191) === 0 && (i += 13, r >>>= 13), (r & 127) === 0 && (i += 7, r >>>= 7), (r & 15) === 0 && (i += 4, r >>>= 4), (r & 3) === 0 && (i += 2, r >>>= 2), (r & 1) === 0 && i++, i;
        }, h.prototype.bitLength = function() {
          var t = this.words[this.length - 1], r = this._countBits(t);
          return (this.length - 1) * 26 + r;
        };
        function Ir(u) {
          for (var t = new Array(u.bitLength()), r = 0; r < t.length; r++) {
            var i = r / 26 | 0, s = r % 26;
            t[r] = u.words[i] >>> s & 1;
          }
          return t;
        }
        h.prototype.zeroBits = function() {
          if (this.isZero()) return 0;
          for (var t = 0, r = 0; r < this.length; r++) {
            var i = this._zeroBits(this.words[r]);
            if (t += i, i !== 26) break;
          }
          return t;
        }, h.prototype.byteLength = function() {
          return Math.ceil(this.bitLength() / 8);
        }, h.prototype.toTwos = function(t) {
          return this.negative !== 0 ? this.abs().inotn(t).iaddn(1) : this.clone();
        }, h.prototype.fromTwos = function(t) {
          return this.testn(t - 1) ? this.notn(t).iaddn(1).ineg() : this.clone();
        }, h.prototype.isNeg = function() {
          return this.negative !== 0;
        }, h.prototype.neg = function() {
          return this.clone().ineg();
        }, h.prototype.ineg = function() {
          return this.isZero() || (this.negative ^= 1), this;
        }, h.prototype.iuor = function(t) {
          for (; this.length < t.length; ) this.words[this.length++] = 0;
          for (var r = 0; r < t.length; r++) this.words[r] = this.words[r] | t.words[r];
          return this._strip();
        }, h.prototype.ior = function(t) {
          return v((this.negative | t.negative) === 0), this.iuor(t);
        }, h.prototype.or = function(t) {
          return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this);
        }, h.prototype.uor = function(t) {
          return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this);
        }, h.prototype.iuand = function(t) {
          var r;
          this.length > t.length ? r = t : r = this;
          for (var i = 0; i < r.length; i++) this.words[i] = this.words[i] & t.words[i];
          return this.length = r.length, this._strip();
        }, h.prototype.iand = function(t) {
          return v((this.negative | t.negative) === 0), this.iuand(t);
        }, h.prototype.and = function(t) {
          return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this);
        }, h.prototype.uand = function(t) {
          return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this);
        }, h.prototype.iuxor = function(t) {
          var r, i;
          this.length > t.length ? (r = this, i = t) : (r = t, i = this);
          for (var s = 0; s < i.length; s++) this.words[s] = r.words[s] ^ i.words[s];
          if (this !== r) for (; s < r.length; s++) this.words[s] = r.words[s];
          return this.length = r.length, this._strip();
        }, h.prototype.ixor = function(t) {
          return v((this.negative | t.negative) === 0), this.iuxor(t);
        }, h.prototype.xor = function(t) {
          return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this);
        }, h.prototype.uxor = function(t) {
          return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this);
        }, h.prototype.inotn = function(t) {
          v(typeof t == "number" && t >= 0);
          var r = Math.ceil(t / 26) | 0, i = t % 26;
          this._expand(r), i > 0 && r--;
          for (var s = 0; s < r; s++) this.words[s] = ~this.words[s] & 67108863;
          for (i > 0 && (this.words[s] = ~this.words[s] & 67108863 >> 26 - i, s++); s < this.length; s++) this.words[s] = 0;
          return this._strip();
        }, h.prototype.notn = function(t) {
          return this.clone().inotn(t);
        }, h.prototype.setn = function(t, r) {
          v(typeof t == "number" && t >= 0);
          var i = t / 26 | 0, s = t % 26;
          return this._expand(i + 1), r ? this.words[i] = this.words[i] | 1 << s : this.words[i] = this.words[i] & ~(1 << s), this._strip();
        }, h.prototype.iadd = function(t) {
          var r;
          if (this.negative !== 0 && t.negative === 0) return this.negative = 0, r = this.isub(t), this.negative ^= 1, this._normSign();
          if (this.negative === 0 && t.negative !== 0) return t.negative = 0, r = this.isub(t), t.negative = 1, r._normSign();
          var i, s;
          this.length > t.length ? (i = this, s = t) : (i = t, s = this);
          for (var a = 0, f = 0; f < s.length; f++) r = (i.words[f] | 0) + (s.words[f] | 0) + a, this.words[f] = r & 67108863, a = r >>> 26;
          for (; a !== 0 && f < i.length; f++) r = (i.words[f] | 0) + a, this.words[f] = r & 67108863, a = r >>> 26;
          if (this.length = i.length, a !== 0) this.words[this.length] = a, this.length++;
          else if (i !== this) for (; f < i.length; f++) this.words[f] = i.words[f];
          return this;
        }, h.prototype.add = function(t) {
          var r;
          return t.negative !== 0 && this.negative === 0 ? (t.negative = 0, r = this.sub(t), t.negative ^= 1, r) : t.negative === 0 && this.negative !== 0 ? (this.negative = 0, r = t.sub(this), this.negative = 1, r) : this.length > t.length ? this.clone().iadd(t) : t.clone().iadd(this);
        }, h.prototype.isub = function(t) {
          if (t.negative !== 0) {
            t.negative = 0;
            var r = this.iadd(t);
            return t.negative = 1, r._normSign();
          } else if (this.negative !== 0) return this.negative = 0, this.iadd(t), this.negative = 1, this._normSign();
          var i = this.cmp(t);
          if (i === 0) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
          var s, a;
          i > 0 ? (s = this, a = t) : (s = t, a = this);
          for (var f = 0, d = 0; d < a.length; d++) r = (s.words[d] | 0) - (a.words[d] | 0) + f, f = r >> 26, this.words[d] = r & 67108863;
          for (; f !== 0 && d < s.length; d++) r = (s.words[d] | 0) + f, f = r >> 26, this.words[d] = r & 67108863;
          if (f === 0 && d < s.length && s !== this) for (; d < s.length; d++) this.words[d] = s.words[d];
          return this.length = Math.max(this.length, d), s !== this && (this.negative = 1), this._strip();
        }, h.prototype.sub = function(t) {
          return this.clone().isub(t);
        };
        function Re(u, t, r) {
          r.negative = t.negative ^ u.negative;
          var i = u.length + t.length | 0;
          r.length = i, i = i - 1 | 0;
          var s = u.words[0] | 0, a = t.words[0] | 0, f = s * a, d = f & 67108863, n = f / 67108864 | 0;
          r.words[0] = d;
          for (var e = 1; e < i; e++) {
            for (var o = n >>> 26, A = n & 67108863, _ = Math.min(e, t.length - 1), k = Math.max(0, e - u.length + 1); k <= _; k++) {
              var xt = e - k | 0;
              s = u.words[xt] | 0, a = t.words[k] | 0, f = s * a + A, o += f / 67108864 | 0, A = f & 67108863;
            }
            r.words[e] = A | 0, n = o | 0;
          }
          return n !== 0 ? r.words[e] = n | 0 : r.length--, r._strip();
        }
        var Ee = function(t, r, i) {
          var s = t.words, a = r.words, f = i.words, d = 0, n, e, o, A = s[0] | 0, _ = A & 8191, k = A >>> 13, xt = s[1] | 0, z = xt & 8191, O = xt >>> 13, Oe = s[2] | 0, q = Oe & 8191, P = Oe >>> 13, Ce = s[3] | 0, D = Ce & 8191, U = Ce >>> 13, Ne = s[4] | 0, K = Ne & 8191, F = Ne >>> 13, qe = s[5] | 0, H = qe & 8191, Z = qe >>> 13, Pe = s[6] | 0, V = Pe & 8191, W = Pe >>> 13, De = s[7] | 0, $ = De & 8191, G = De >>> 13, Ue = s[8] | 0, Y = Ue & 8191, j = Ue >>> 13, Ke = s[9] | 0, J = Ke & 8191, X = Ke >>> 13, Fe = a[0] | 0, Q = Fe & 8191, tt = Fe >>> 13, He = a[1] | 0, et = He & 8191, rt = He >>> 13, Ze = a[2] | 0, it = Ze & 8191, nt = Ze >>> 13, Ve = a[3] | 0, st = Ve & 8191, ot = Ve >>> 13, We = a[4] | 0, at = We & 8191, ht = We >>> 13, $e = a[5] | 0, ut = $e & 8191, ft = $e >>> 13, Ge = a[6] | 0, lt = Ge & 8191, ct = Ge >>> 13, Ye = a[7] | 0, dt = Ye & 8191, mt = Ye >>> 13, je = a[8] | 0, pt = je & 8191, vt = je >>> 13, Je = a[9] | 0, gt = Je & 8191, Mt = Je >>> 13;
          i.negative = t.negative ^ r.negative, i.length = 19, n = Math.imul(_, Q), e = Math.imul(_, tt), e = e + Math.imul(k, Q) | 0, o = Math.imul(k, tt);
          var jt = (d + n | 0) + ((e & 8191) << 13) | 0;
          d = (o + (e >>> 13) | 0) + (jt >>> 26) | 0, jt &= 67108863, n = Math.imul(z, Q), e = Math.imul(z, tt), e = e + Math.imul(O, Q) | 0, o = Math.imul(O, tt), n = n + Math.imul(_, et) | 0, e = e + Math.imul(_, rt) | 0, e = e + Math.imul(k, et) | 0, o = o + Math.imul(k, rt) | 0;
          var Jt = (d + n | 0) + ((e & 8191) << 13) | 0;
          d = (o + (e >>> 13) | 0) + (Jt >>> 26) | 0, Jt &= 67108863, n = Math.imul(q, Q), e = Math.imul(q, tt), e = e + Math.imul(P, Q) | 0, o = Math.imul(P, tt), n = n + Math.imul(z, et) | 0, e = e + Math.imul(z, rt) | 0, e = e + Math.imul(O, et) | 0, o = o + Math.imul(O, rt) | 0, n = n + Math.imul(_, it) | 0, e = e + Math.imul(_, nt) | 0, e = e + Math.imul(k, it) | 0, o = o + Math.imul(k, nt) | 0;
          var Xt = (d + n | 0) + ((e & 8191) << 13) | 0;
          d = (o + (e >>> 13) | 0) + (Xt >>> 26) | 0, Xt &= 67108863, n = Math.imul(D, Q), e = Math.imul(D, tt), e = e + Math.imul(U, Q) | 0, o = Math.imul(U, tt), n = n + Math.imul(q, et) | 0, e = e + Math.imul(q, rt) | 0, e = e + Math.imul(P, et) | 0, o = o + Math.imul(P, rt) | 0, n = n + Math.imul(z, it) | 0, e = e + Math.imul(z, nt) | 0, e = e + Math.imul(O, it) | 0, o = o + Math.imul(O, nt) | 0, n = n + Math.imul(_, st) | 0, e = e + Math.imul(_, ot) | 0, e = e + Math.imul(k, st) | 0, o = o + Math.imul(k, ot) | 0;
          var Qt = (d + n | 0) + ((e & 8191) << 13) | 0;
          d = (o + (e >>> 13) | 0) + (Qt >>> 26) | 0, Qt &= 67108863, n = Math.imul(K, Q), e = Math.imul(K, tt), e = e + Math.imul(F, Q) | 0, o = Math.imul(F, tt), n = n + Math.imul(D, et) | 0, e = e + Math.imul(D, rt) | 0, e = e + Math.imul(U, et) | 0, o = o + Math.imul(U, rt) | 0, n = n + Math.imul(q, it) | 0, e = e + Math.imul(q, nt) | 0, e = e + Math.imul(P, it) | 0, o = o + Math.imul(P, nt) | 0, n = n + Math.imul(z, st) | 0, e = e + Math.imul(z, ot) | 0, e = e + Math.imul(O, st) | 0, o = o + Math.imul(O, ot) | 0, n = n + Math.imul(_, at) | 0, e = e + Math.imul(_, ht) | 0, e = e + Math.imul(k, at) | 0, o = o + Math.imul(k, ht) | 0;
          var te = (d + n | 0) + ((e & 8191) << 13) | 0;
          d = (o + (e >>> 13) | 0) + (te >>> 26) | 0, te &= 67108863, n = Math.imul(H, Q), e = Math.imul(H, tt), e = e + Math.imul(Z, Q) | 0, o = Math.imul(Z, tt), n = n + Math.imul(K, et) | 0, e = e + Math.imul(K, rt) | 0, e = e + Math.imul(F, et) | 0, o = o + Math.imul(F, rt) | 0, n = n + Math.imul(D, it) | 0, e = e + Math.imul(D, nt) | 0, e = e + Math.imul(U, it) | 0, o = o + Math.imul(U, nt) | 0, n = n + Math.imul(q, st) | 0, e = e + Math.imul(q, ot) | 0, e = e + Math.imul(P, st) | 0, o = o + Math.imul(P, ot) | 0, n = n + Math.imul(z, at) | 0, e = e + Math.imul(z, ht) | 0, e = e + Math.imul(O, at) | 0, o = o + Math.imul(O, ht) | 0, n = n + Math.imul(_, ut) | 0, e = e + Math.imul(_, ft) | 0, e = e + Math.imul(k, ut) | 0, o = o + Math.imul(k, ft) | 0;
          var ee = (d + n | 0) + ((e & 8191) << 13) | 0;
          d = (o + (e >>> 13) | 0) + (ee >>> 26) | 0, ee &= 67108863, n = Math.imul(V, Q), e = Math.imul(V, tt), e = e + Math.imul(W, Q) | 0, o = Math.imul(W, tt), n = n + Math.imul(H, et) | 0, e = e + Math.imul(H, rt) | 0, e = e + Math.imul(Z, et) | 0, o = o + Math.imul(Z, rt) | 0, n = n + Math.imul(K, it) | 0, e = e + Math.imul(K, nt) | 0, e = e + Math.imul(F, it) | 0, o = o + Math.imul(F, nt) | 0, n = n + Math.imul(D, st) | 0, e = e + Math.imul(D, ot) | 0, e = e + Math.imul(U, st) | 0, o = o + Math.imul(U, ot) | 0, n = n + Math.imul(q, at) | 0, e = e + Math.imul(q, ht) | 0, e = e + Math.imul(P, at) | 0, o = o + Math.imul(P, ht) | 0, n = n + Math.imul(z, ut) | 0, e = e + Math.imul(z, ft) | 0, e = e + Math.imul(O, ut) | 0, o = o + Math.imul(O, ft) | 0, n = n + Math.imul(_, lt) | 0, e = e + Math.imul(_, ct) | 0, e = e + Math.imul(k, lt) | 0, o = o + Math.imul(k, ct) | 0;
          var re = (d + n | 0) + ((e & 8191) << 13) | 0;
          d = (o + (e >>> 13) | 0) + (re >>> 26) | 0, re &= 67108863, n = Math.imul($, Q), e = Math.imul($, tt), e = e + Math.imul(G, Q) | 0, o = Math.imul(G, tt), n = n + Math.imul(V, et) | 0, e = e + Math.imul(V, rt) | 0, e = e + Math.imul(W, et) | 0, o = o + Math.imul(W, rt) | 0, n = n + Math.imul(H, it) | 0, e = e + Math.imul(H, nt) | 0, e = e + Math.imul(Z, it) | 0, o = o + Math.imul(Z, nt) | 0, n = n + Math.imul(K, st) | 0, e = e + Math.imul(K, ot) | 0, e = e + Math.imul(F, st) | 0, o = o + Math.imul(F, ot) | 0, n = n + Math.imul(D, at) | 0, e = e + Math.imul(D, ht) | 0, e = e + Math.imul(U, at) | 0, o = o + Math.imul(U, ht) | 0, n = n + Math.imul(q, ut) | 0, e = e + Math.imul(q, ft) | 0, e = e + Math.imul(P, ut) | 0, o = o + Math.imul(P, ft) | 0, n = n + Math.imul(z, lt) | 0, e = e + Math.imul(z, ct) | 0, e = e + Math.imul(O, lt) | 0, o = o + Math.imul(O, ct) | 0, n = n + Math.imul(_, dt) | 0, e = e + Math.imul(_, mt) | 0, e = e + Math.imul(k, dt) | 0, o = o + Math.imul(k, mt) | 0;
          var ie = (d + n | 0) + ((e & 8191) << 13) | 0;
          d = (o + (e >>> 13) | 0) + (ie >>> 26) | 0, ie &= 67108863, n = Math.imul(Y, Q), e = Math.imul(Y, tt), e = e + Math.imul(j, Q) | 0, o = Math.imul(j, tt), n = n + Math.imul($, et) | 0, e = e + Math.imul($, rt) | 0, e = e + Math.imul(G, et) | 0, o = o + Math.imul(G, rt) | 0, n = n + Math.imul(V, it) | 0, e = e + Math.imul(V, nt) | 0, e = e + Math.imul(W, it) | 0, o = o + Math.imul(W, nt) | 0, n = n + Math.imul(H, st) | 0, e = e + Math.imul(H, ot) | 0, e = e + Math.imul(Z, st) | 0, o = o + Math.imul(Z, ot) | 0, n = n + Math.imul(K, at) | 0, e = e + Math.imul(K, ht) | 0, e = e + Math.imul(F, at) | 0, o = o + Math.imul(F, ht) | 0, n = n + Math.imul(D, ut) | 0, e = e + Math.imul(D, ft) | 0, e = e + Math.imul(U, ut) | 0, o = o + Math.imul(U, ft) | 0, n = n + Math.imul(q, lt) | 0, e = e + Math.imul(q, ct) | 0, e = e + Math.imul(P, lt) | 0, o = o + Math.imul(P, ct) | 0, n = n + Math.imul(z, dt) | 0, e = e + Math.imul(z, mt) | 0, e = e + Math.imul(O, dt) | 0, o = o + Math.imul(O, mt) | 0, n = n + Math.imul(_, pt) | 0, e = e + Math.imul(_, vt) | 0, e = e + Math.imul(k, pt) | 0, o = o + Math.imul(k, vt) | 0;
          var ne = (d + n | 0) + ((e & 8191) << 13) | 0;
          d = (o + (e >>> 13) | 0) + (ne >>> 26) | 0, ne &= 67108863, n = Math.imul(J, Q), e = Math.imul(J, tt), e = e + Math.imul(X, Q) | 0, o = Math.imul(X, tt), n = n + Math.imul(Y, et) | 0, e = e + Math.imul(Y, rt) | 0, e = e + Math.imul(j, et) | 0, o = o + Math.imul(j, rt) | 0, n = n + Math.imul($, it) | 0, e = e + Math.imul($, nt) | 0, e = e + Math.imul(G, it) | 0, o = o + Math.imul(G, nt) | 0, n = n + Math.imul(V, st) | 0, e = e + Math.imul(V, ot) | 0, e = e + Math.imul(W, st) | 0, o = o + Math.imul(W, ot) | 0, n = n + Math.imul(H, at) | 0, e = e + Math.imul(H, ht) | 0, e = e + Math.imul(Z, at) | 0, o = o + Math.imul(Z, ht) | 0, n = n + Math.imul(K, ut) | 0, e = e + Math.imul(K, ft) | 0, e = e + Math.imul(F, ut) | 0, o = o + Math.imul(F, ft) | 0, n = n + Math.imul(D, lt) | 0, e = e + Math.imul(D, ct) | 0, e = e + Math.imul(U, lt) | 0, o = o + Math.imul(U, ct) | 0, n = n + Math.imul(q, dt) | 0, e = e + Math.imul(q, mt) | 0, e = e + Math.imul(P, dt) | 0, o = o + Math.imul(P, mt) | 0, n = n + Math.imul(z, pt) | 0, e = e + Math.imul(z, vt) | 0, e = e + Math.imul(O, pt) | 0, o = o + Math.imul(O, vt) | 0, n = n + Math.imul(_, gt) | 0, e = e + Math.imul(_, Mt) | 0, e = e + Math.imul(k, gt) | 0, o = o + Math.imul(k, Mt) | 0;
          var se = (d + n | 0) + ((e & 8191) << 13) | 0;
          d = (o + (e >>> 13) | 0) + (se >>> 26) | 0, se &= 67108863, n = Math.imul(J, et), e = Math.imul(J, rt), e = e + Math.imul(X, et) | 0, o = Math.imul(X, rt), n = n + Math.imul(Y, it) | 0, e = e + Math.imul(Y, nt) | 0, e = e + Math.imul(j, it) | 0, o = o + Math.imul(j, nt) | 0, n = n + Math.imul($, st) | 0, e = e + Math.imul($, ot) | 0, e = e + Math.imul(G, st) | 0, o = o + Math.imul(G, ot) | 0, n = n + Math.imul(V, at) | 0, e = e + Math.imul(V, ht) | 0, e = e + Math.imul(W, at) | 0, o = o + Math.imul(W, ht) | 0, n = n + Math.imul(H, ut) | 0, e = e + Math.imul(H, ft) | 0, e = e + Math.imul(Z, ut) | 0, o = o + Math.imul(Z, ft) | 0, n = n + Math.imul(K, lt) | 0, e = e + Math.imul(K, ct) | 0, e = e + Math.imul(F, lt) | 0, o = o + Math.imul(F, ct) | 0, n = n + Math.imul(D, dt) | 0, e = e + Math.imul(D, mt) | 0, e = e + Math.imul(U, dt) | 0, o = o + Math.imul(U, mt) | 0, n = n + Math.imul(q, pt) | 0, e = e + Math.imul(q, vt) | 0, e = e + Math.imul(P, pt) | 0, o = o + Math.imul(P, vt) | 0, n = n + Math.imul(z, gt) | 0, e = e + Math.imul(z, Mt) | 0, e = e + Math.imul(O, gt) | 0, o = o + Math.imul(O, Mt) | 0;
          var oe = (d + n | 0) + ((e & 8191) << 13) | 0;
          d = (o + (e >>> 13) | 0) + (oe >>> 26) | 0, oe &= 67108863, n = Math.imul(J, it), e = Math.imul(J, nt), e = e + Math.imul(X, it) | 0, o = Math.imul(X, nt), n = n + Math.imul(Y, st) | 0, e = e + Math.imul(Y, ot) | 0, e = e + Math.imul(j, st) | 0, o = o + Math.imul(j, ot) | 0, n = n + Math.imul($, at) | 0, e = e + Math.imul($, ht) | 0, e = e + Math.imul(G, at) | 0, o = o + Math.imul(G, ht) | 0, n = n + Math.imul(V, ut) | 0, e = e + Math.imul(V, ft) | 0, e = e + Math.imul(W, ut) | 0, o = o + Math.imul(W, ft) | 0, n = n + Math.imul(H, lt) | 0, e = e + Math.imul(H, ct) | 0, e = e + Math.imul(Z, lt) | 0, o = o + Math.imul(Z, ct) | 0, n = n + Math.imul(K, dt) | 0, e = e + Math.imul(K, mt) | 0, e = e + Math.imul(F, dt) | 0, o = o + Math.imul(F, mt) | 0, n = n + Math.imul(D, pt) | 0, e = e + Math.imul(D, vt) | 0, e = e + Math.imul(U, pt) | 0, o = o + Math.imul(U, vt) | 0, n = n + Math.imul(q, gt) | 0, e = e + Math.imul(q, Mt) | 0, e = e + Math.imul(P, gt) | 0, o = o + Math.imul(P, Mt) | 0;
          var ae = (d + n | 0) + ((e & 8191) << 13) | 0;
          d = (o + (e >>> 13) | 0) + (ae >>> 26) | 0, ae &= 67108863, n = Math.imul(J, st), e = Math.imul(J, ot), e = e + Math.imul(X, st) | 0, o = Math.imul(X, ot), n = n + Math.imul(Y, at) | 0, e = e + Math.imul(Y, ht) | 0, e = e + Math.imul(j, at) | 0, o = o + Math.imul(j, ht) | 0, n = n + Math.imul($, ut) | 0, e = e + Math.imul($, ft) | 0, e = e + Math.imul(G, ut) | 0, o = o + Math.imul(G, ft) | 0, n = n + Math.imul(V, lt) | 0, e = e + Math.imul(V, ct) | 0, e = e + Math.imul(W, lt) | 0, o = o + Math.imul(W, ct) | 0, n = n + Math.imul(H, dt) | 0, e = e + Math.imul(H, mt) | 0, e = e + Math.imul(Z, dt) | 0, o = o + Math.imul(Z, mt) | 0, n = n + Math.imul(K, pt) | 0, e = e + Math.imul(K, vt) | 0, e = e + Math.imul(F, pt) | 0, o = o + Math.imul(F, vt) | 0, n = n + Math.imul(D, gt) | 0, e = e + Math.imul(D, Mt) | 0, e = e + Math.imul(U, gt) | 0, o = o + Math.imul(U, Mt) | 0;
          var he = (d + n | 0) + ((e & 8191) << 13) | 0;
          d = (o + (e >>> 13) | 0) + (he >>> 26) | 0, he &= 67108863, n = Math.imul(J, at), e = Math.imul(J, ht), e = e + Math.imul(X, at) | 0, o = Math.imul(X, ht), n = n + Math.imul(Y, ut) | 0, e = e + Math.imul(Y, ft) | 0, e = e + Math.imul(j, ut) | 0, o = o + Math.imul(j, ft) | 0, n = n + Math.imul($, lt) | 0, e = e + Math.imul($, ct) | 0, e = e + Math.imul(G, lt) | 0, o = o + Math.imul(G, ct) | 0, n = n + Math.imul(V, dt) | 0, e = e + Math.imul(V, mt) | 0, e = e + Math.imul(W, dt) | 0, o = o + Math.imul(W, mt) | 0, n = n + Math.imul(H, pt) | 0, e = e + Math.imul(H, vt) | 0, e = e + Math.imul(Z, pt) | 0, o = o + Math.imul(Z, vt) | 0, n = n + Math.imul(K, gt) | 0, e = e + Math.imul(K, Mt) | 0, e = e + Math.imul(F, gt) | 0, o = o + Math.imul(F, Mt) | 0;
          var ue = (d + n | 0) + ((e & 8191) << 13) | 0;
          d = (o + (e >>> 13) | 0) + (ue >>> 26) | 0, ue &= 67108863, n = Math.imul(J, ut), e = Math.imul(J, ft), e = e + Math.imul(X, ut) | 0, o = Math.imul(X, ft), n = n + Math.imul(Y, lt) | 0, e = e + Math.imul(Y, ct) | 0, e = e + Math.imul(j, lt) | 0, o = o + Math.imul(j, ct) | 0, n = n + Math.imul($, dt) | 0, e = e + Math.imul($, mt) | 0, e = e + Math.imul(G, dt) | 0, o = o + Math.imul(G, mt) | 0, n = n + Math.imul(V, pt) | 0, e = e + Math.imul(V, vt) | 0, e = e + Math.imul(W, pt) | 0, o = o + Math.imul(W, vt) | 0, n = n + Math.imul(H, gt) | 0, e = e + Math.imul(H, Mt) | 0, e = e + Math.imul(Z, gt) | 0, o = o + Math.imul(Z, Mt) | 0;
          var fe = (d + n | 0) + ((e & 8191) << 13) | 0;
          d = (o + (e >>> 13) | 0) + (fe >>> 26) | 0, fe &= 67108863, n = Math.imul(J, lt), e = Math.imul(J, ct), e = e + Math.imul(X, lt) | 0, o = Math.imul(X, ct), n = n + Math.imul(Y, dt) | 0, e = e + Math.imul(Y, mt) | 0, e = e + Math.imul(j, dt) | 0, o = o + Math.imul(j, mt) | 0, n = n + Math.imul($, pt) | 0, e = e + Math.imul($, vt) | 0, e = e + Math.imul(G, pt) | 0, o = o + Math.imul(G, vt) | 0, n = n + Math.imul(V, gt) | 0, e = e + Math.imul(V, Mt) | 0, e = e + Math.imul(W, gt) | 0, o = o + Math.imul(W, Mt) | 0;
          var le = (d + n | 0) + ((e & 8191) << 13) | 0;
          d = (o + (e >>> 13) | 0) + (le >>> 26) | 0, le &= 67108863, n = Math.imul(J, dt), e = Math.imul(J, mt), e = e + Math.imul(X, dt) | 0, o = Math.imul(X, mt), n = n + Math.imul(Y, pt) | 0, e = e + Math.imul(Y, vt) | 0, e = e + Math.imul(j, pt) | 0, o = o + Math.imul(j, vt) | 0, n = n + Math.imul($, gt) | 0, e = e + Math.imul($, Mt) | 0, e = e + Math.imul(G, gt) | 0, o = o + Math.imul(G, Mt) | 0;
          var ce = (d + n | 0) + ((e & 8191) << 13) | 0;
          d = (o + (e >>> 13) | 0) + (ce >>> 26) | 0, ce &= 67108863, n = Math.imul(J, pt), e = Math.imul(J, vt), e = e + Math.imul(X, pt) | 0, o = Math.imul(X, vt), n = n + Math.imul(Y, gt) | 0, e = e + Math.imul(Y, Mt) | 0, e = e + Math.imul(j, gt) | 0, o = o + Math.imul(j, Mt) | 0;
          var de = (d + n | 0) + ((e & 8191) << 13) | 0;
          d = (o + (e >>> 13) | 0) + (de >>> 26) | 0, de &= 67108863, n = Math.imul(J, gt), e = Math.imul(J, Mt), e = e + Math.imul(X, gt) | 0, o = Math.imul(X, Mt);
          var me = (d + n | 0) + ((e & 8191) << 13) | 0;
          return d = (o + (e >>> 13) | 0) + (me >>> 26) | 0, me &= 67108863, f[0] = jt, f[1] = Jt, f[2] = Xt, f[3] = Qt, f[4] = te, f[5] = ee, f[6] = re, f[7] = ie, f[8] = ne, f[9] = se, f[10] = oe, f[11] = ae, f[12] = he, f[13] = ue, f[14] = fe, f[15] = le, f[16] = ce, f[17] = de, f[18] = me, d !== 0 && (f[19] = d, i.length++), i;
        };
        Math.imul || (Ee = Re);
        function Ie(u, t, r) {
          r.negative = t.negative ^ u.negative, r.length = u.length + t.length;
          for (var i = 0, s = 0, a = 0; a < r.length - 1; a++) {
            var f = s;
            s = 0;
            for (var d = i & 67108863, n = Math.min(a, t.length - 1), e = Math.max(0, a - u.length + 1); e <= n; e++) {
              var o = a - e, A = u.words[o] | 0, _ = t.words[e] | 0, k = A * _, xt = k & 67108863;
              f = f + (k / 67108864 | 0) | 0, xt = xt + d | 0, d = xt & 67108863, f = f + (xt >>> 26) | 0, s += f >>> 26, f &= 67108863;
            }
            r.words[a] = d, i = f, f = s;
          }
          return i !== 0 ? r.words[a] = i : r.length--, r._strip();
        }
        function ze(u, t, r) {
          return Ie(u, t, r);
        }
        h.prototype.mulTo = function(t, r) {
          var i, s = this.length + t.length;
          return this.length === 10 && t.length === 10 ? i = Ee(this, t, r) : s < 63 ? i = Re(this, t, r) : s < 1024 ? i = Ie(this, t, r) : i = ze(this, t, r), i;
        }, h.prototype.mul = function(t) {
          var r = new h(null);
          return r.words = new Array(this.length + t.length), this.mulTo(t, r);
        }, h.prototype.mulf = function(t) {
          var r = new h(null);
          return r.words = new Array(this.length + t.length), ze(this, t, r);
        }, h.prototype.imul = function(t) {
          return this.clone().mulTo(t, this);
        }, h.prototype.imuln = function(t) {
          var r = t < 0;
          r && (t = -t), v(typeof t == "number"), v(t < 67108864);
          for (var i = 0, s = 0; s < this.length; s++) {
            var a = (this.words[s] | 0) * t, f = (a & 67108863) + (i & 67108863);
            i >>= 26, i += a / 67108864 | 0, i += f >>> 26, this.words[s] = f & 67108863;
          }
          return i !== 0 && (this.words[s] = i, this.length++), t === 0 && (this.length = 1, this._normSign()), r ? this.ineg() : this;
        }, h.prototype.muln = function(t) {
          return this.clone().imuln(t);
        }, h.prototype.sqr = function() {
          return this.mul(this);
        }, h.prototype.isqr = function() {
          return this.imul(this.clone());
        }, h.prototype.pow = function(t) {
          var r = Ir(t);
          if (r.length === 0) return new h(1);
          for (var i = this, s = 0; s < r.length && r[s] === 0; s++, i = i.sqr()) ;
          if (++s < r.length) for (var a = i.sqr(); s < r.length; s++, a = a.sqr()) r[s] !== 0 && (i = i.mul(a));
          return i;
        }, h.prototype.iushln = function(t) {
          v(typeof t == "number" && t >= 0);
          var r = t % 26, i = (t - r) / 26, s = 67108863 >>> 26 - r << 26 - r, a;
          if (r !== 0) {
            var f = 0;
            for (a = 0; a < this.length; a++) {
              var d = this.words[a] & s, n = (this.words[a] | 0) - d << r;
              this.words[a] = n | f, f = d >>> 26 - r;
            }
            f && (this.words[a] = f, this.length++);
          }
          if (i !== 0) {
            for (a = this.length - 1; a >= 0; a--) this.words[a + i] = this.words[a];
            for (a = 0; a < i; a++) this.words[a] = 0;
            this.length += i;
          }
          return this._strip();
        }, h.prototype.ishln = function(t) {
          return v(this.negative === 0), this.iushln(t);
        }, h.prototype.iushrn = function(t, r, i) {
          v(typeof t == "number" && t >= 0);
          var s;
          r ? s = (r - r % 26) / 26 : s = 0;
          var a = t % 26, f = Math.min((t - a) / 26, this.length), d = 67108863 ^ 67108863 >>> a << a, n = i;
          if (s -= f, s = Math.max(0, s), n) {
            for (var e = 0; e < f; e++) n.words[e] = this.words[e];
            n.length = f;
          }
          if (f !== 0) if (this.length > f) for (this.length -= f, e = 0; e < this.length; e++) this.words[e] = this.words[e + f];
          else this.words[0] = 0, this.length = 1;
          var o = 0;
          for (e = this.length - 1; e >= 0 && (o !== 0 || e >= s); e--) {
            var A = this.words[e] | 0;
            this.words[e] = o << 26 - a | A >>> a, o = A & d;
          }
          return n && o !== 0 && (n.words[n.length++] = o), this.length === 0 && (this.words[0] = 0, this.length = 1), this._strip();
        }, h.prototype.ishrn = function(t, r, i) {
          return v(this.negative === 0), this.iushrn(t, r, i);
        }, h.prototype.shln = function(t) {
          return this.clone().ishln(t);
        }, h.prototype.ushln = function(t) {
          return this.clone().iushln(t);
        }, h.prototype.shrn = function(t) {
          return this.clone().ishrn(t);
        }, h.prototype.ushrn = function(t) {
          return this.clone().iushrn(t);
        }, h.prototype.testn = function(t) {
          v(typeof t == "number" && t >= 0);
          var r = t % 26, i = (t - r) / 26, s = 1 << r;
          if (this.length <= i) return false;
          var a = this.words[i];
          return !!(a & s);
        }, h.prototype.imaskn = function(t) {
          v(typeof t == "number" && t >= 0);
          var r = t % 26, i = (t - r) / 26;
          if (v(this.negative === 0, "imaskn works only with positive numbers"), this.length <= i) return this;
          if (r !== 0 && i++, this.length = Math.min(i, this.length), r !== 0) {
            var s = 67108863 ^ 67108863 >>> r << r;
            this.words[this.length - 1] &= s;
          }
          return this.length === 0 && (this.words[0] = 0, this.length = 1), this._strip();
        }, h.prototype.maskn = function(t) {
          return this.clone().imaskn(t);
        }, h.prototype.iaddn = function(t) {
          return v(typeof t == "number"), v(t < 67108864), t < 0 ? this.isubn(-t) : this.negative !== 0 ? this.length === 1 && (this.words[0] | 0) <= t ? (this.words[0] = t - (this.words[0] | 0), this.negative = 0, this) : (this.negative = 0, this.isubn(t), this.negative = 1, this) : this._iaddn(t);
        }, h.prototype._iaddn = function(t) {
          this.words[0] += t;
          for (var r = 0; r < this.length && this.words[r] >= 67108864; r++) this.words[r] -= 67108864, r === this.length - 1 ? this.words[r + 1] = 1 : this.words[r + 1]++;
          return this.length = Math.max(this.length, r + 1), this;
        }, h.prototype.isubn = function(t) {
          if (v(typeof t == "number"), v(t < 67108864), t < 0) return this.iaddn(-t);
          if (this.negative !== 0) return this.negative = 0, this.iaddn(t), this.negative = 1, this;
          if (this.words[0] -= t, this.length === 1 && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
          else for (var r = 0; r < this.length && this.words[r] < 0; r++) this.words[r] += 67108864, this.words[r + 1] -= 1;
          return this._strip();
        }, h.prototype.addn = function(t) {
          return this.clone().iaddn(t);
        }, h.prototype.subn = function(t) {
          return this.clone().isubn(t);
        }, h.prototype.iabs = function() {
          return this.negative = 0, this;
        }, h.prototype.abs = function() {
          return this.clone().iabs();
        }, h.prototype._ishlnsubmul = function(t, r, i) {
          var s = t.length + i, a;
          this._expand(s);
          var f, d = 0;
          for (a = 0; a < t.length; a++) {
            f = (this.words[a + i] | 0) + d;
            var n = (t.words[a] | 0) * r;
            f -= n & 67108863, d = (f >> 26) - (n / 67108864 | 0), this.words[a + i] = f & 67108863;
          }
          for (; a < this.length - i; a++) f = (this.words[a + i] | 0) + d, d = f >> 26, this.words[a + i] = f & 67108863;
          if (d === 0) return this._strip();
          for (v(d === -1), d = 0, a = 0; a < this.length; a++) f = -(this.words[a] | 0) + d, d = f >> 26, this.words[a] = f & 67108863;
          return this.negative = 1, this._strip();
        }, h.prototype._wordDiv = function(t, r) {
          var i = this.length - t.length, s = this.clone(), a = t, f = a.words[a.length - 1] | 0, d = this._countBits(f);
          i = 26 - d, i !== 0 && (a = a.ushln(i), s.iushln(i), f = a.words[a.length - 1] | 0);
          var n = s.length - a.length, e;
          if (r !== "mod") {
            e = new h(null), e.length = n + 1, e.words = new Array(e.length);
            for (var o = 0; o < e.length; o++) e.words[o] = 0;
          }
          var A = s.clone()._ishlnsubmul(a, 1, n);
          A.negative === 0 && (s = A, e && (e.words[n] = 1));
          for (var _ = n - 1; _ >= 0; _--) {
            var k = (s.words[a.length + _] | 0) * 67108864 + (s.words[a.length + _ - 1] | 0);
            for (k = Math.min(k / f | 0, 67108863), s._ishlnsubmul(a, k, _); s.negative !== 0; ) k--, s.negative = 0, s._ishlnsubmul(a, 1, _), s.isZero() || (s.negative ^= 1);
            e && (e.words[_] = k);
          }
          return e && e._strip(), s._strip(), r !== "div" && i !== 0 && s.iushrn(i), {
            div: e || null,
            mod: s
          };
        }, h.prototype.divmod = function(t, r, i) {
          if (v(!t.isZero()), this.isZero()) return {
            div: new h(0),
            mod: new h(0)
          };
          var s, a, f;
          return this.negative !== 0 && t.negative === 0 ? (f = this.neg().divmod(t, r), r !== "mod" && (s = f.div.neg()), r !== "div" && (a = f.mod.neg(), i && a.negative !== 0 && a.iadd(t)), {
            div: s,
            mod: a
          }) : this.negative === 0 && t.negative !== 0 ? (f = this.divmod(t.neg(), r), r !== "mod" && (s = f.div.neg()), {
            div: s,
            mod: f.mod
          }) : (this.negative & t.negative) !== 0 ? (f = this.neg().divmod(t.neg(), r), r !== "div" && (a = f.mod.neg(), i && a.negative !== 0 && a.isub(t)), {
            div: f.div,
            mod: a
          }) : t.length > this.length || this.cmp(t) < 0 ? {
            div: new h(0),
            mod: this
          } : t.length === 1 ? r === "div" ? {
            div: this.divn(t.words[0]),
            mod: null
          } : r === "mod" ? {
            div: null,
            mod: new h(this.modrn(t.words[0]))
          } : {
            div: this.divn(t.words[0]),
            mod: new h(this.modrn(t.words[0]))
          } : this._wordDiv(t, r);
        }, h.prototype.div = function(t) {
          return this.divmod(t, "div", false).div;
        }, h.prototype.mod = function(t) {
          return this.divmod(t, "mod", false).mod;
        }, h.prototype.umod = function(t) {
          return this.divmod(t, "mod", true).mod;
        }, h.prototype.divRound = function(t) {
          var r = this.divmod(t);
          if (r.mod.isZero()) return r.div;
          var i = r.mod.abs(), s = t.abs().iushrn(1), a = t.words[0] & 1, f = i.cmp(s);
          if (f < 0 || a === 1 && f === 0) return r.div;
          var d = new h(1);
          return d.negative = this.negative ^ t.negative, r.div.iadd(d);
        }, h.prototype.modrn = function(t) {
          var r = t < 0;
          r && (t = -t), v(t <= 67108863);
          for (var i = (1 << 26) % t, s = 0, a = this.length - 1; a >= 0; a--) s = (i * s + (this.words[a] | 0)) % t;
          return r ? -s : s;
        }, h.prototype.modn = function(t) {
          return this.modrn(t);
        }, h.prototype.idivn = function(t) {
          var r = t < 0;
          r && (t = -t), v(t <= 67108863);
          for (var i = 0, s = this.length - 1; s >= 0; s--) {
            var a = (this.words[s] | 0) + i * 67108864;
            this.words[s] = a / t | 0, i = a % t;
          }
          return this._strip(), r ? this.ineg() : this;
        }, h.prototype.divn = function(t) {
          return this.clone().idivn(t);
        }, h.prototype.egcd = function(t) {
          v(t.negative === 0), v(!t.isZero());
          var r = this, i = t.clone();
          r.negative !== 0 ? r = r.umod(t) : r = r.clone();
          for (var s = new h(1), a = new h(0), f = new h(0), d = new h(1), n = 0; r.isEven() && i.isEven(); ) r.iushrn(1), i.iushrn(1), ++n;
          for (var e = i.clone(), o = r.clone(); !r.isZero(); ) {
            for (var A = 0, _ = 1; (r.words[0] & _) === 0 && A < 26; ++A, _ <<= 1) ;
            if (A > 0) for (r.iushrn(A); A-- > 0; ) (s.isOdd() || a.isOdd()) && (s.iadd(e), a.isub(o)), s.iushrn(1), a.iushrn(1);
            for (var k = 0, xt = 1; (i.words[0] & xt) === 0 && k < 26; ++k, xt <<= 1) ;
            if (k > 0) for (i.iushrn(k); k-- > 0; ) (f.isOdd() || d.isOdd()) && (f.iadd(e), d.isub(o)), f.iushrn(1), d.iushrn(1);
            r.cmp(i) >= 0 ? (r.isub(i), s.isub(f), a.isub(d)) : (i.isub(r), f.isub(s), d.isub(a));
          }
          return {
            a: f,
            b: d,
            gcd: i.iushln(n)
          };
        }, h.prototype._invmp = function(t) {
          v(t.negative === 0), v(!t.isZero());
          var r = this, i = t.clone();
          r.negative !== 0 ? r = r.umod(t) : r = r.clone();
          for (var s = new h(1), a = new h(0), f = i.clone(); r.cmpn(1) > 0 && i.cmpn(1) > 0; ) {
            for (var d = 0, n = 1; (r.words[0] & n) === 0 && d < 26; ++d, n <<= 1) ;
            if (d > 0) for (r.iushrn(d); d-- > 0; ) s.isOdd() && s.iadd(f), s.iushrn(1);
            for (var e = 0, o = 1; (i.words[0] & o) === 0 && e < 26; ++e, o <<= 1) ;
            if (e > 0) for (i.iushrn(e); e-- > 0; ) a.isOdd() && a.iadd(f), a.iushrn(1);
            r.cmp(i) >= 0 ? (r.isub(i), s.isub(a)) : (i.isub(r), a.isub(s));
          }
          var A;
          return r.cmpn(1) === 0 ? A = s : A = a, A.cmpn(0) < 0 && A.iadd(t), A;
        }, h.prototype.gcd = function(t) {
          if (this.isZero()) return t.abs();
          if (t.isZero()) return this.abs();
          var r = this.clone(), i = t.clone();
          r.negative = 0, i.negative = 0;
          for (var s = 0; r.isEven() && i.isEven(); s++) r.iushrn(1), i.iushrn(1);
          do {
            for (; r.isEven(); ) r.iushrn(1);
            for (; i.isEven(); ) i.iushrn(1);
            var a = r.cmp(i);
            if (a < 0) {
              var f = r;
              r = i, i = f;
            } else if (a === 0 || i.cmpn(1) === 0) break;
            r.isub(i);
          } while (true);
          return i.iushln(s);
        }, h.prototype.invm = function(t) {
          return this.egcd(t).a.umod(t);
        }, h.prototype.isEven = function() {
          return (this.words[0] & 1) === 0;
        }, h.prototype.isOdd = function() {
          return (this.words[0] & 1) === 1;
        }, h.prototype.andln = function(t) {
          return this.words[0] & t;
        }, h.prototype.bincn = function(t) {
          v(typeof t == "number");
          var r = t % 26, i = (t - r) / 26, s = 1 << r;
          if (this.length <= i) return this._expand(i + 1), this.words[i] |= s, this;
          for (var a = s, f = i; a !== 0 && f < this.length; f++) {
            var d = this.words[f] | 0;
            d += a, a = d >>> 26, d &= 67108863, this.words[f] = d;
          }
          return a !== 0 && (this.words[f] = a, this.length++), this;
        }, h.prototype.isZero = function() {
          return this.length === 1 && this.words[0] === 0;
        }, h.prototype.cmpn = function(t) {
          var r = t < 0;
          if (this.negative !== 0 && !r) return -1;
          if (this.negative === 0 && r) return 1;
          this._strip();
          var i;
          if (this.length > 1) i = 1;
          else {
            r && (t = -t), v(t <= 67108863, "Number is too big");
            var s = this.words[0] | 0;
            i = s === t ? 0 : s < t ? -1 : 1;
          }
          return this.negative !== 0 ? -i | 0 : i;
        }, h.prototype.cmp = function(t) {
          if (this.negative !== 0 && t.negative === 0) return -1;
          if (this.negative === 0 && t.negative !== 0) return 1;
          var r = this.ucmp(t);
          return this.negative !== 0 ? -r | 0 : r;
        }, h.prototype.ucmp = function(t) {
          if (this.length > t.length) return 1;
          if (this.length < t.length) return -1;
          for (var r = 0, i = this.length - 1; i >= 0; i--) {
            var s = this.words[i] | 0, a = t.words[i] | 0;
            if (s !== a) {
              s < a ? r = -1 : s > a && (r = 1);
              break;
            }
          }
          return r;
        }, h.prototype.gtn = function(t) {
          return this.cmpn(t) === 1;
        }, h.prototype.gt = function(t) {
          return this.cmp(t) === 1;
        }, h.prototype.gten = function(t) {
          return this.cmpn(t) >= 0;
        }, h.prototype.gte = function(t) {
          return this.cmp(t) >= 0;
        }, h.prototype.ltn = function(t) {
          return this.cmpn(t) === -1;
        }, h.prototype.lt = function(t) {
          return this.cmp(t) === -1;
        }, h.prototype.lten = function(t) {
          return this.cmpn(t) <= 0;
        }, h.prototype.lte = function(t) {
          return this.cmp(t) <= 0;
        }, h.prototype.eqn = function(t) {
          return this.cmpn(t) === 0;
        }, h.prototype.eq = function(t) {
          return this.cmp(t) === 0;
        }, h.red = function(t) {
          return new N(t);
        }, h.prototype.toRed = function(t) {
          return v(!this.red, "Already a number in reduction context"), v(this.negative === 0, "red works only with positives"), t.convertTo(this)._forceRed(t);
        }, h.prototype.fromRed = function() {
          return v(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this);
        }, h.prototype._forceRed = function(t) {
          return this.red = t, this;
        }, h.prototype.forceRed = function(t) {
          return v(!this.red, "Already a number in reduction context"), this._forceRed(t);
        }, h.prototype.redAdd = function(t) {
          return v(this.red, "redAdd works only with red numbers"), this.red.add(this, t);
        }, h.prototype.redIAdd = function(t) {
          return v(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, t);
        }, h.prototype.redSub = function(t) {
          return v(this.red, "redSub works only with red numbers"), this.red.sub(this, t);
        }, h.prototype.redISub = function(t) {
          return v(this.red, "redISub works only with red numbers"), this.red.isub(this, t);
        }, h.prototype.redShl = function(t) {
          return v(this.red, "redShl works only with red numbers"), this.red.shl(this, t);
        }, h.prototype.redMul = function(t) {
          return v(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.mul(this, t);
        }, h.prototype.redIMul = function(t) {
          return v(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.imul(this, t);
        }, h.prototype.redSqr = function() {
          return v(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this);
        }, h.prototype.redISqr = function() {
          return v(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this);
        }, h.prototype.redSqrt = function() {
          return v(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this);
        }, h.prototype.redInvm = function() {
          return v(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this);
        }, h.prototype.redNeg = function() {
          return v(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this);
        }, h.prototype.redPow = function(t) {
          return v(this.red && !t.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, t);
        };
        var Gt = {
          k256: null,
          p224: null,
          p192: null,
          p25519: null
        };
        function St(u, t) {
          this.name = u, this.p = new h(t, 16), this.n = this.p.bitLength(), this.k = new h(1).iushln(this.n).isub(this.p), this.tmp = this._tmp();
        }
        St.prototype._tmp = function() {
          var t = new h(null);
          return t.words = new Array(Math.ceil(this.n / 13)), t;
        }, St.prototype.ireduce = function(t) {
          var r = t, i;
          do
            this.split(r, this.tmp), r = this.imulK(r), r = r.iadd(this.tmp), i = r.bitLength();
          while (i > this.n);
          var s = i < this.n ? -1 : r.ucmp(this.p);
          return s === 0 ? (r.words[0] = 0, r.length = 1) : s > 0 ? r.isub(this.p) : r.strip !== void 0 ? r.strip() : r._strip(), r;
        }, St.prototype.split = function(t, r) {
          t.iushrn(this.n, 0, r);
        }, St.prototype.imulK = function(t) {
          return t.imul(this.k);
        };
        function Pt() {
          St.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f");
        }
        S(Pt, St), Pt.prototype.split = function(t, r) {
          for (var i = 4194303, s = Math.min(t.length, 9), a = 0; a < s; a++) r.words[a] = t.words[a];
          if (r.length = s, t.length <= 9) {
            t.words[0] = 0, t.length = 1;
            return;
          }
          var f = t.words[9];
          for (r.words[r.length++] = f & i, a = 10; a < t.length; a++) {
            var d = t.words[a] | 0;
            t.words[a - 10] = (d & i) << 4 | f >>> 22, f = d;
          }
          f >>>= 22, t.words[a - 10] = f, f === 0 && t.length > 10 ? t.length -= 10 : t.length -= 9;
        }, Pt.prototype.imulK = function(t) {
          t.words[t.length] = 0, t.words[t.length + 1] = 0, t.length += 2;
          for (var r = 0, i = 0; i < t.length; i++) {
            var s = t.words[i] | 0;
            r += s * 977, t.words[i] = r & 67108863, r = s * 64 + (r / 67108864 | 0);
          }
          return t.words[t.length - 1] === 0 && (t.length--, t.words[t.length - 1] === 0 && t.length--), t;
        };
        function Te() {
          St.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001");
        }
        S(Te, St);
        function Le() {
          St.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff");
        }
        S(Le, St);
        function Yt() {
          St.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed");
        }
        S(Yt, St), Yt.prototype.imulK = function(t) {
          for (var r = 0, i = 0; i < t.length; i++) {
            var s = (t.words[i] | 0) * 19 + r, a = s & 67108863;
            s >>>= 26, t.words[i] = a, r = s;
          }
          return r !== 0 && (t.words[t.length++] = r), t;
        }, h._prime = function(t) {
          if (Gt[t]) return Gt[t];
          var r;
          if (t === "k256") r = new Pt();
          else if (t === "p224") r = new Te();
          else if (t === "p192") r = new Le();
          else if (t === "p25519") r = new Yt();
          else throw new Error("Unknown prime " + t);
          return Gt[t] = r, r;
        };
        function N(u) {
          if (typeof u == "string") {
            var t = h._prime(u);
            this.m = t.p, this.prime = t;
          } else v(u.gtn(1), "modulus must be greater than 1"), this.m = u, this.prime = null;
        }
        N.prototype._verify1 = function(t) {
          v(t.negative === 0, "red works only with positives"), v(t.red, "red works only with red numbers");
        }, N.prototype._verify2 = function(t, r) {
          v((t.negative | r.negative) === 0, "red works only with positives"), v(t.red && t.red === r.red, "red works only with red numbers");
        }, N.prototype.imod = function(t) {
          return this.prime ? this.prime.ireduce(t)._forceRed(this) : (ke(t, t.umod(this.m)._forceRed(this)), t);
        }, N.prototype.neg = function(t) {
          return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this);
        }, N.prototype.add = function(t, r) {
          this._verify2(t, r);
          var i = t.add(r);
          return i.cmp(this.m) >= 0 && i.isub(this.m), i._forceRed(this);
        }, N.prototype.iadd = function(t, r) {
          this._verify2(t, r);
          var i = t.iadd(r);
          return i.cmp(this.m) >= 0 && i.isub(this.m), i;
        }, N.prototype.sub = function(t, r) {
          this._verify2(t, r);
          var i = t.sub(r);
          return i.cmpn(0) < 0 && i.iadd(this.m), i._forceRed(this);
        }, N.prototype.isub = function(t, r) {
          this._verify2(t, r);
          var i = t.isub(r);
          return i.cmpn(0) < 0 && i.iadd(this.m), i;
        }, N.prototype.shl = function(t, r) {
          return this._verify1(t), this.imod(t.ushln(r));
        }, N.prototype.imul = function(t, r) {
          return this._verify2(t, r), this.imod(t.imul(r));
        }, N.prototype.mul = function(t, r) {
          return this._verify2(t, r), this.imod(t.mul(r));
        }, N.prototype.isqr = function(t) {
          return this.imul(t, t.clone());
        }, N.prototype.sqr = function(t) {
          return this.mul(t, t);
        }, N.prototype.sqrt = function(t) {
          if (t.isZero()) return t.clone();
          var r = this.m.andln(3);
          if (v(r % 2 === 1), r === 3) {
            var i = this.m.add(new h(1)).iushrn(2);
            return this.pow(t, i);
          }
          for (var s = this.m.subn(1), a = 0; !s.isZero() && s.andln(1) === 0; ) a++, s.iushrn(1);
          v(!s.isZero());
          var f = new h(1).toRed(this), d = f.redNeg(), n = this.m.subn(1).iushrn(1), e = this.m.bitLength();
          for (e = new h(2 * e * e).toRed(this); this.pow(e, n).cmp(d) !== 0; ) e.redIAdd(d);
          for (var o = this.pow(e, s), A = this.pow(t, s.addn(1).iushrn(1)), _ = this.pow(t, s), k = a; _.cmp(f) !== 0; ) {
            for (var xt = _, z = 0; xt.cmp(f) !== 0; z++) xt = xt.redSqr();
            v(z < k);
            var O = this.pow(o, new h(1).iushln(k - z - 1));
            A = A.redMul(O), o = O.redSqr(), _ = _.redMul(o), k = z;
          }
          return A;
        }, N.prototype.invm = function(t) {
          var r = t._invmp(this.m);
          return r.negative !== 0 ? (r.negative = 0, this.imod(r).redNeg()) : this.imod(r);
        }, N.prototype.pow = function(t, r) {
          if (r.isZero()) return new h(1).toRed(this);
          if (r.cmpn(1) === 0) return t.clone();
          var i = 4, s = new Array(1 << i);
          s[0] = new h(1).toRed(this), s[1] = t;
          for (var a = 2; a < s.length; a++) s[a] = this.mul(s[a - 1], t);
          var f = s[0], d = 0, n = 0, e = r.bitLength() % 26;
          for (e === 0 && (e = 26), a = r.length - 1; a >= 0; a--) {
            for (var o = r.words[a], A = e - 1; A >= 0; A--) {
              var _ = o >> A & 1;
              if (f !== s[0] && (f = this.sqr(f)), _ === 0 && d === 0) {
                n = 0;
                continue;
              }
              d <<= 1, d |= _, n++, !(n !== i && (a !== 0 || A !== 0)) && (f = this.mul(f, s[d]), n = 0, d = 0);
            }
            e = 26;
          }
          return f;
        }, N.prototype.convertTo = function(t) {
          var r = t.umod(this.m);
          return r === t ? r.clone() : r;
        }, N.prototype.convertFrom = function(t) {
          var r = t.clone();
          return r.red = null, r;
        }, h.mont = function(t) {
          return new kt(t);
        };
        function kt(u) {
          N.call(this, u), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new h(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv);
        }
        S(kt, N), kt.prototype.convertTo = function(t) {
          return this.imod(t.ushln(this.shift));
        }, kt.prototype.convertFrom = function(t) {
          var r = this.imod(t.mul(this.rinv));
          return r.red = null, r;
        }, kt.prototype.imul = function(t, r) {
          if (t.isZero() || r.isZero()) return t.words[0] = 0, t.length = 1, t;
          var i = t.imul(r), s = i.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), a = i.isub(s).iushrn(this.shift), f = a;
          return a.cmp(this.m) >= 0 ? f = a.isub(this.m) : a.cmpn(0) < 0 && (f = a.iadd(this.m)), f._forceRed(this);
        }, kt.prototype.mul = function(t, r) {
          if (t.isZero() || r.isZero()) return new h(0)._forceRed(this);
          var i = t.mul(r), s = i.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), a = i.isub(s).iushrn(this.shift), f = a;
          return a.cmp(this.m) >= 0 ? f = a.isub(this.m) : a.cmpn(0) < 0 && (f = a.iadd(this.m)), f._forceRed(this);
        }, kt.prototype.invm = function(t) {
          var r = this.imod(t._invmp(this.m).mul(this.r2));
          return r._forceRed(this);
        };
      })(m, Nr);
    })(Ut)), Ut.exports;
  }
  var Pr = qr();
  const rr = hr(Pr);
  var ve, ir;
  function Dr() {
    if (ir) return ve;
    ir = 1;
    var m = Tr(), p = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
    return ve = m(p), ve;
  }
  var Ur = Dr();
  const nr = hr(Ur);
  var Kr = 8078e3, Fr = 8078001, Hr = 8078004, Zr = 8078005, Vr = 8078006, Wr = 8078011;
  function lr(m) {
    return Array.isArray(m) ? "%5B" + m.map(lr).join("%2C%20") + "%5D" : typeof m == "bigint" ? `${m}n` : encodeURIComponent(String(m != null && Object.getPrototypeOf(m) === null ? {
      ...m
    } : m));
  }
  function $r([m, p]) {
    return `${m}=${lr(p)}`;
  }
  function Gr(m) {
    const p = Object.entries(m).map($r).join("&");
    return btoa(p);
  }
  function Yr(m, p = {}) {
    {
      let w = `Solana error #${m}; Decode this error by running \`npx @solana/errors decode -- ${m}`;
      return Object.keys(p).length && (w += ` '${Gr(p)}'`), `${w}\``;
    }
  }
  var Lt = class extends Error {
    constructor(...[m, p]) {
      let w, v;
      p && Object.entries(Object.getOwnPropertyDescriptors(p)).forEach(([h, B]) => {
        h === "cause" ? v = {
          cause: B.value
        } : (w === void 0 && (w = {
          __code: m
        }), Object.defineProperty(w, h, B));
      });
      const S = Yr(m, w);
      super(S, v);
      __publicField(this, "cause", this.cause);
      __publicField(this, "context");
      this.context = Object.freeze(w === void 0 ? {
        __code: m
      } : w), this.name = "SolanaError";
    }
  };
  function jr(m, p) {
    return "fixedSize" in p ? p.fixedSize : p.getSizeFromValue(m);
  }
  function Jr(m) {
    return Object.freeze({
      ...m,
      encode: (p) => {
        const w = new Uint8Array(jr(p, m));
        return m.write(p, w, 0), w;
      }
    });
  }
  function Xr(m) {
    return Object.freeze({
      ...m,
      decode: (p, w = 0) => m.read(p, w)[0]
    });
  }
  function zt(m) {
    return "fixedSize" in m && typeof m.fixedSize == "number";
  }
  function Qr(m, p) {
    if (zt(m) !== zt(p)) throw new Lt(Hr);
    if (zt(m) && zt(p) && m.fixedSize !== p.fixedSize) throw new Lt(Zr, {
      decoderFixedSize: p.fixedSize,
      encoderFixedSize: m.fixedSize
    });
    if (!zt(m) && !zt(p) && m.maxSize !== p.maxSize) throw new Lt(Vr, {
      decoderMaxSize: p.maxSize,
      encoderMaxSize: m.maxSize
    });
    return {
      ...p,
      ...m,
      decode: p.decode,
      encode: m.encode,
      read: p.read,
      write: m.write
    };
  }
  function ti(m, p, w = 0) {
    if (p.length - w <= 0) throw new Lt(Kr, {
      codecDescription: m
    });
  }
  function ei(m, p, w, v = 0) {
    const S = w.length - v;
    if (S < p) throw new Lt(Fr, {
      bytesLength: S,
      codecDescription: m,
      expected: p
    });
  }
  function ri(m, p, w) {
    const v = m.byteOffset + (p ?? 0), S = w ?? m.byteLength;
    let h;
    return typeof SharedArrayBuffer > "u" ? h = m.buffer : m.buffer instanceof SharedArrayBuffer ? (h = new ArrayBuffer(m.length), new Uint8Array(h).set(new Uint8Array(m))) : h = m.buffer, (v === 0 || v === -m.byteLength) && S === m.byteLength ? h : h.slice(v, v + S);
  }
  function ii(m, p, w, v) {
    if (v < p || v > w) throw new Lt(Wr, {
      codecDescription: m,
      max: w,
      min: p,
      value: v
    });
  }
  function cr(m) {
    return (m == null ? void 0 : m.endian) !== 1;
  }
  function ni(m) {
    return Jr({
      fixedSize: m.size,
      write(p, w, v) {
        m.range && ii(m.name, m.range[0], m.range[1], p);
        const S = new ArrayBuffer(m.size);
        return m.set(new DataView(S), p, cr(m.config)), w.set(new Uint8Array(S), v), v + m.size;
      }
    });
  }
  function si(m) {
    return Xr({
      fixedSize: m.size,
      read(p, w = 0) {
        ti(m.name, p, w), ei(m.name, m.size, p, w);
        const v = new DataView(ri(p, w, m.size));
        return [
          m.get(v, cr(m.config)),
          w + m.size
        ];
      }
    });
  }
  var oi = (m = {}) => ni({
    config: m,
    name: "u64",
    range: [
      0n,
      BigInt("0xffffffffffffffff")
    ],
    set: (p, w, v) => p.setBigUint64(0, BigInt(w), v),
    size: 8
  }), ai = (m = {}) => si({
    config: m,
    get: (p, w) => p.getBigUint64(0, w),
    name: "u64",
    size: 8
  }), hi = (m = {}) => Qr(oi(m), ai(m));
  Zt.utils.randomPrivateKey;
  Zt.getPublicKey;
  function sr(m) {
    try {
      return Zt.ExtendedPoint.fromHex(m), true;
    } catch {
      return false;
    }
  }
  Zt.verify;
  const ui = (m) => yt.isBuffer(m) ? m : m instanceof Uint8Array ? yt.from(m.buffer, m.byteOffset, m.byteLength) : yt.from(m);
  class fi {
    constructor(p) {
      Object.assign(this, p);
    }
    encode() {
      return yt.from(pe.serialize(Kt, this));
    }
    static decode(p) {
      return pe.deserialize(Kt, this, p);
    }
    static decodeUnchecked(p) {
      return pe.deserializeUnchecked(Kt, this, p);
    }
  }
  const Kt = /* @__PURE__ */ new Map();
  var dr;
  const li = 32, ge = 32;
  function ci(m) {
    return m._bn !== void 0;
  }
  let or = 1;
  class R extends fi {
    constructor(p) {
      if (super({}), this._bn = void 0, ci(p)) this._bn = p._bn;
      else {
        if (typeof p == "string") {
          const w = nr.decode(p);
          if (w.length != ge) throw new Error("Invalid public key input");
          this._bn = new rr(w);
        } else this._bn = new rr(p);
        if (this._bn.byteLength() > ge) throw new Error("Invalid public key input");
      }
    }
    static unique() {
      const p = new R(or);
      return or += 1, new R(p.toBuffer());
    }
    equals(p) {
      return this._bn.eq(p._bn);
    }
    toBase58() {
      return nr.encode(this.toBytes());
    }
    toJSON() {
      return this.toBase58();
    }
    toBytes() {
      const p = this.toBuffer();
      return new Uint8Array(p.buffer, p.byteOffset, p.byteLength);
    }
    toBuffer() {
      const p = this._bn.toArrayLike(yt);
      if (p.length === ge) return p;
      const w = yt.alloc(32);
      return p.copy(w, 32 - p.length), w;
    }
    get [Symbol.toStringTag]() {
      return `PublicKey(${this.toString()})`;
    }
    toString() {
      return this.toBase58();
    }
    static async createWithSeed(p, w, v) {
      const S = yt.concat([
        p.toBuffer(),
        yt.from(w),
        v.toBuffer()
      ]), h = Xe(S);
      return new R(h);
    }
    static createProgramAddressSync(p, w) {
      let v = yt.alloc(0);
      p.forEach(function(h) {
        if (h.length > li) throw new TypeError("Max seed length exceeded");
        v = yt.concat([
          v,
          ui(h)
        ]);
      }), v = yt.concat([
        v,
        w.toBuffer(),
        yt.from("ProgramDerivedAddress")
      ]);
      const S = Xe(v);
      if (sr(S)) throw new Error("Invalid seeds, address must fall off the curve");
      return new R(S);
    }
    static async createProgramAddress(p, w) {
      return this.createProgramAddressSync(p, w);
    }
    static findProgramAddressSync(p, w) {
      let v = 255, S;
      for (; v != 0; ) {
        try {
          const h = p.concat(yt.from([
            v
          ]));
          S = this.createProgramAddressSync(h, w);
        } catch (h) {
          if (h instanceof TypeError) throw h;
          v--;
          continue;
        }
        return [
          S,
          v
        ];
      }
      throw new Error("Unable to find a viable program address nonce");
    }
    static async findProgramAddress(p, w) {
      return this.findProgramAddressSync(p, w);
    }
    static isOnCurve(p) {
      const w = new R(p);
      return sr(w.toBytes());
    }
  }
  dr = R;
  R.default = new dr("11111111111111111111111111111111");
  Kt.set(R, {
    kind: "struct",
    fields: [
      [
        "_bn",
        "u256"
      ]
    ]
  });
  new R("BPFLoader1111111111111111111111111111111111");
  const di = 64, E = (m = "publicKey") => l.blob(32, m), Tt = (m = "string") => {
    const p = l.struct([
      l.u32("length"),
      l.u32("lengthPadding"),
      l.blob(l.offset(l.u32(), -8), "chars")
    ], m), w = p.decode.bind(p), v = p.encode.bind(p), S = p;
    return S.decode = (h, B) => w(h, B).chars.toString(), S.encode = (h, B, L) => {
      const wt = {
        chars: yt.from(h, "utf8")
      };
      return v(wt, B, L);
    }, S.alloc = (h) => l.u32().span + l.u32().span + yt.from(h, "utf8").length, S;
  }, mi = (m = "authorized") => l.struct([
    E("staker"),
    E("withdrawer")
  ], m), pi = (m = "lockup") => l.struct([
    l.ns64("unixTimestamp"),
    l.ns64("epoch"),
    E("custodian")
  ], m), vi = (m = "voteInit") => l.struct([
    E("nodePubkey"),
    E("authorizedVoter"),
    E("authorizedWithdrawer"),
    l.u8("commission")
  ], m), gi = (m = "voteAuthorizeWithSeedArgs") => l.struct([
    l.u32("voteAuthorizationType"),
    E("currentAuthorityDerivedKeyOwnerPubkey"),
    Tt("currentAuthorityDerivedKeySeed"),
    E("newAuthorized")
  ], m);
  yt.alloc(di).fill(0);
  new R("SysvarC1ock11111111111111111111111111111111");
  new R("SysvarEpochSchedu1e111111111111111111111111");
  new R("Sysvar1nstructions1111111111111111111111111");
  new R("SysvarRecentB1ockHashes11111111111111111111");
  new R("SysvarRent111111111111111111111111111111111");
  new R("SysvarRewards111111111111111111111111111111");
  new R("SysvarS1otHashes111111111111111111111111111");
  new R("SysvarS1otHistory11111111111111111111111111");
  new R("SysvarStakeHistory1111111111111111111111111");
  const Mi = l.nu64("lamportsPerSignature"), yi = l.struct([
    l.u32("version"),
    l.u32("state"),
    E("authorizedPubkey"),
    E("nonce"),
    l.struct([
      Mi
    ], "feeCalculator")
  ]);
  yi.span;
  function Ot(m) {
    const p = l.blob(8, m), w = p.decode.bind(p), v = p.encode.bind(p), S = p, h = hi();
    return S.decode = (B, L) => {
      const wt = w(B, L);
      return h.decode(wt);
    }, S.encode = (B, L, wt) => {
      const It = h.encode(B);
      return v(It, L, wt);
    }, S;
  }
  Object.freeze({
    Create: {
      index: 0,
      layout: l.struct([
        l.u32("instruction"),
        l.ns64("lamports"),
        l.ns64("space"),
        E("programId")
      ])
    },
    Assign: {
      index: 1,
      layout: l.struct([
        l.u32("instruction"),
        E("programId")
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
        E("base"),
        Tt("seed"),
        l.ns64("lamports"),
        l.ns64("space"),
        E("programId")
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
        E("authorized")
      ])
    },
    AuthorizeNonceAccount: {
      index: 7,
      layout: l.struct([
        l.u32("instruction"),
        E("authorized")
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
        E("base"),
        Tt("seed"),
        l.ns64("space"),
        E("programId")
      ])
    },
    AssignWithSeed: {
      index: 10,
      layout: l.struct([
        l.u32("instruction"),
        E("base"),
        Tt("seed"),
        E("programId")
      ])
    },
    TransferWithSeed: {
      index: 11,
      layout: l.struct([
        l.u32("instruction"),
        Ot("lamports"),
        Tt("seed"),
        E("programId")
      ])
    },
    UpgradeNonceAccount: {
      index: 12,
      layout: l.struct([
        l.u32("instruction")
      ])
    }
  });
  new R("11111111111111111111111111111111");
  new R("BPFLoader2111111111111111111111111111111111");
  l.struct([
    l.u32("typeIndex"),
    Ot("deactivationSlot"),
    l.nu64("lastExtendedSlot"),
    l.u8("lastExtendedStartIndex"),
    l.u8(),
    l.seq(E(), l.offset(l.u8(), -1), "authority")
  ]);
  const C = qt(ye(R), M(), (m) => new R(m)), mr = we([
    M(),
    T("base64")
  ]), be = qt(ye(yt), mr, (m) => yt.from(m[0], "base64"));
  function pr(m) {
    return bt([
      g({
        jsonrpc: T("2.0"),
        id: M(),
        result: m
      }),
      g({
        jsonrpc: T("2.0"),
        id: M(),
        error: g({
          code: Ct(),
          message: M(),
          data: b(Lr())
        })
      })
    ]);
  }
  const wi = pr(Ct());
  function I(m) {
    return qt(pr(m), wi, (p) => "error" in p ? p : {
      ...p,
      result: Ft(p.result, m)
    });
  }
  function _t(m) {
    return I(g({
      context: g({
        slot: c()
      }),
      value: m
    }));
  }
  function Vt(m) {
    return g({
      context: g({
        slot: c()
      }),
      value: m
    });
  }
  const xi = g({
    foundation: c(),
    foundationTerm: c(),
    initial: c(),
    taper: c(),
    terminal: c()
  });
  I(x(y(g({
    epoch: c(),
    effectiveSlot: c(),
    amount: c(),
    postBalance: c(),
    commission: b(y(c()))
  }))));
  const bi = x(g({
    slot: c(),
    prioritizationFee: c()
  })), Si = g({
    total: c(),
    validator: c(),
    foundation: c(),
    epoch: c()
  }), _i = g({
    epoch: c(),
    slotIndex: c(),
    slotsInEpoch: c(),
    absoluteSlot: c(),
    blockHeight: b(c()),
    transactionCount: b(c())
  }), Ai = g({
    slotsPerEpoch: c(),
    leaderScheduleSlotOffset: c(),
    warmup: At(),
    firstNormalEpoch: c(),
    firstNormalSlot: c()
  }), ki = ur(M(), x(c())), Rt = y(bt([
    g({}),
    M()
  ])), Bi = g({
    err: Rt
  }), Ri = T("receivedSignature");
  g({
    "solana-core": M(),
    "feature-set": b(c())
  });
  const Ei = g({
    program: M(),
    programId: C,
    parsed: Ct()
  }), Ii = g({
    programId: C,
    accounts: x(C),
    data: M()
  });
  _t(g({
    err: y(bt([
      g({}),
      M()
    ])),
    logs: y(x(M())),
    accounts: b(y(x(y(g({
      executable: At(),
      owner: M(),
      lamports: c(),
      data: x(M()),
      rentEpoch: b(c())
    }))))),
    unitsConsumed: b(c()),
    returnData: b(y(g({
      programId: M(),
      data: we([
        M(),
        T("base64")
      ])
    }))),
    innerInstructions: b(y(x(g({
      index: c(),
      instructions: x(bt([
        Ei,
        Ii
      ]))
    }))))
  }));
  _t(g({
    byIdentity: ur(M(), x(c())),
    range: g({
      firstSlot: c(),
      lastSlot: c()
    })
  }));
  I(xi);
  I(Si);
  I(bi);
  I(_i);
  I(Ai);
  I(ki);
  I(c());
  _t(g({
    total: c(),
    circulating: c(),
    nonCirculating: c(),
    nonCirculatingAccounts: x(C)
  }));
  const zi = g({
    amount: M(),
    uiAmount: y(c()),
    decimals: c(),
    uiAmountString: b(M())
  });
  _t(x(g({
    address: C,
    amount: M(),
    uiAmount: y(c()),
    decimals: c(),
    uiAmountString: b(M())
  })));
  _t(x(g({
    pubkey: C,
    account: g({
      executable: At(),
      owner: C,
      lamports: c(),
      data: be,
      rentEpoch: c()
    })
  })));
  const Me = g({
    program: M(),
    parsed: Ct(),
    space: c()
  });
  _t(x(g({
    pubkey: C,
    account: g({
      executable: At(),
      owner: C,
      lamports: c(),
      data: Me,
      rentEpoch: c()
    })
  })));
  _t(x(g({
    lamports: c(),
    address: C
  })));
  const Se = g({
    executable: At(),
    owner: C,
    lamports: c(),
    data: be,
    rentEpoch: c()
  });
  g({
    pubkey: C,
    account: Se
  });
  const Ti = qt(bt([
    ye(yt),
    Me
  ]), bt([
    mr,
    Me
  ]), (m) => Array.isArray(m) ? Ft(m, be) : m), Li = g({
    executable: At(),
    owner: C,
    lamports: c(),
    data: Ti,
    rentEpoch: c()
  });
  g({
    pubkey: C,
    account: Li
  });
  g({
    state: bt([
      T("active"),
      T("inactive"),
      T("activating"),
      T("deactivating")
    ]),
    active: c(),
    inactive: c()
  });
  I(x(g({
    signature: M(),
    slot: c(),
    err: Rt,
    memo: y(M()),
    blockTime: b(y(c()))
  })));
  I(x(g({
    signature: M(),
    slot: c(),
    err: Rt,
    memo: y(M()),
    blockTime: b(y(c()))
  })));
  g({
    subscription: c(),
    result: Vt(Se)
  });
  const Oi = g({
    pubkey: C,
    account: Se
  });
  g({
    subscription: c(),
    result: Vt(Oi)
  });
  const Ci = g({
    parent: c(),
    slot: c(),
    root: c()
  });
  g({
    subscription: c(),
    result: Ci
  });
  const Ni = bt([
    g({
      type: bt([
        T("firstShredReceived"),
        T("completed"),
        T("optimisticConfirmation"),
        T("root")
      ]),
      slot: c(),
      timestamp: c()
    }),
    g({
      type: T("createdBank"),
      parent: c(),
      slot: c(),
      timestamp: c()
    }),
    g({
      type: T("frozen"),
      slot: c(),
      timestamp: c(),
      stats: g({
        numTransactionEntries: c(),
        numSuccessfulTransactions: c(),
        numFailedTransactions: c(),
        maxTransactionsPerEntry: c()
      })
    }),
    g({
      type: T("dead"),
      slot: c(),
      timestamp: c(),
      err: M()
    })
  ]);
  g({
    subscription: c(),
    result: Ni
  });
  g({
    subscription: c(),
    result: Vt(bt([
      Bi,
      Ri
    ]))
  });
  g({
    subscription: c(),
    result: c()
  });
  g({
    pubkey: M(),
    gossip: y(M()),
    tpu: y(M()),
    rpc: y(M()),
    version: y(M())
  });
  const ar = g({
    votePubkey: M(),
    nodePubkey: M(),
    activatedStake: c(),
    epochVoteAccount: At(),
    epochCredits: x(we([
      c(),
      c(),
      c()
    ])),
    commission: c(),
    lastVote: c(),
    rootSlot: y(c())
  });
  I(g({
    current: x(ar),
    delinquent: x(ar)
  }));
  const qi = bt([
    T("processed"),
    T("confirmed"),
    T("finalized")
  ]), Pi = g({
    slot: c(),
    confirmations: y(c()),
    err: Rt,
    confirmationStatus: b(qi)
  });
  _t(x(y(Pi)));
  I(c());
  const vr = g({
    accountKey: C,
    writableIndexes: x(c()),
    readonlyIndexes: x(c())
  }), gr = g({
    computeUnitLimit: y(c()),
    heapSize: y(c()),
    loadedAccountsDataSizeLimit: y(c()),
    priorityFee: y(c())
  }), _e = g({
    signatures: x(M()),
    message: g({
      accountKeys: x(M()),
      header: g({
        numRequiredSignatures: c(),
        numReadonlySignedAccounts: c(),
        numReadonlyUnsignedAccounts: c()
      }),
      instructions: x(g({
        accounts: x(c()),
        data: M(),
        programIdIndex: c()
      })),
      recentBlockhash: M(),
      addressTableLookups: b(x(vr)),
      transactionConfig: b(y(gr))
    })
  }), Mr = g({
    pubkey: C,
    signer: At(),
    writable: At(),
    source: b(bt([
      T("transaction"),
      T("lookupTable")
    ]))
  }), yr = g({
    accountKeys: x(Mr),
    signatures: x(M())
  }), wr = g({
    parsed: Ct(),
    program: M(),
    programId: C
  }), xr = g({
    accounts: x(C),
    data: M(),
    programId: C
  }), Di = bt([
    xr,
    wr
  ]), Ui = bt([
    g({
      parsed: Ct(),
      program: M(),
      programId: M()
    }),
    g({
      accounts: x(M()),
      data: M(),
      programId: M()
    })
  ]), br = qt(Di, Ui, (m) => "accounts" in m ? Ft(m, xr) : Ft(m, wr)), Sr = g({
    signatures: x(M()),
    message: g({
      accountKeys: x(Mr),
      instructions: x(br),
      recentBlockhash: M(),
      addressTableLookups: b(y(x(vr))),
      transactionConfig: b(y(gr))
    })
  }), Ht = g({
    accountIndex: c(),
    mint: M(),
    owner: b(M()),
    programId: b(M()),
    uiTokenAmount: zi
  }), _r = g({
    writable: x(C),
    readonly: x(C)
  }), Wt = g({
    err: Rt,
    fee: c(),
    innerInstructions: b(y(x(g({
      index: c(),
      instructions: x(g({
        accounts: x(c()),
        data: M(),
        programIdIndex: c()
      }))
    })))),
    preBalances: x(c()),
    postBalances: x(c()),
    logMessages: b(y(x(M()))),
    preTokenBalances: b(y(x(Ht))),
    postTokenBalances: b(y(x(Ht))),
    loadedAddresses: b(_r),
    computeUnitsConsumed: b(c()),
    costUnits: b(c())
  }), Ae = g({
    err: Rt,
    fee: c(),
    innerInstructions: b(y(x(g({
      index: c(),
      instructions: x(br)
    })))),
    preBalances: x(c()),
    postBalances: x(c()),
    logMessages: b(y(x(M()))),
    preTokenBalances: b(y(x(Ht))),
    postTokenBalances: b(y(x(Ht))),
    loadedAddresses: b(_r),
    computeUnitsConsumed: b(c()),
    costUnits: b(c())
  }), Nt = bt([
    T(0),
    T(1),
    T("legacy")
  ]), Et = g({
    pubkey: M(),
    lamports: c(),
    postBalance: y(c()),
    rewardType: y(M()),
    commission: b(y(c()))
  });
  I(y(g({
    blockhash: M(),
    previousBlockhash: M(),
    parentSlot: c(),
    transactions: x(g({
      transaction: _e,
      meta: y(Wt),
      version: b(Nt)
    })),
    rewards: b(x(Et)),
    blockTime: y(c()),
    blockHeight: y(c())
  })));
  I(y(g({
    blockhash: M(),
    previousBlockhash: M(),
    parentSlot: c(),
    rewards: b(x(Et)),
    blockTime: y(c()),
    blockHeight: y(c())
  })));
  I(y(g({
    blockhash: M(),
    previousBlockhash: M(),
    parentSlot: c(),
    transactions: x(g({
      transaction: yr,
      meta: y(Wt),
      version: b(Nt)
    })),
    rewards: b(x(Et)),
    blockTime: y(c()),
    blockHeight: y(c())
  })));
  I(y(g({
    blockhash: M(),
    previousBlockhash: M(),
    parentSlot: c(),
    transactions: x(g({
      transaction: Sr,
      meta: y(Ae),
      version: b(Nt)
    })),
    rewards: b(x(Et)),
    blockTime: y(c()),
    blockHeight: y(c())
  })));
  I(y(g({
    blockhash: M(),
    previousBlockhash: M(),
    parentSlot: c(),
    transactions: x(g({
      transaction: yr,
      meta: y(Ae),
      version: b(Nt)
    })),
    rewards: b(x(Et)),
    blockTime: y(c()),
    blockHeight: y(c())
  })));
  I(y(g({
    blockhash: M(),
    previousBlockhash: M(),
    parentSlot: c(),
    rewards: b(x(Et)),
    blockTime: y(c()),
    blockHeight: y(c())
  })));
  I(y(g({
    blockhash: M(),
    previousBlockhash: M(),
    parentSlot: c(),
    transactions: x(g({
      transaction: _e,
      meta: y(Wt)
    })),
    rewards: b(x(Et)),
    blockTime: y(c())
  })));
  I(y(g({
    blockhash: M(),
    previousBlockhash: M(),
    parentSlot: c(),
    signatures: x(M()),
    blockTime: y(c())
  })));
  I(y(g({
    slot: c(),
    meta: y(Wt),
    blockTime: b(y(c())),
    transaction: _e,
    version: b(Nt)
  })));
  I(y(g({
    slot: c(),
    transaction: Sr,
    meta: y(Ae),
    blockTime: b(y(c())),
    version: b(Nt)
  })));
  _t(g({
    blockhash: M(),
    lastValidBlockHeight: c()
  }));
  _t(At());
  const Ki = g({
    slot: c(),
    numTransactions: c(),
    numSlots: c(),
    samplePeriodSecs: c()
  });
  I(x(Ki));
  _t(y(g({
    feeCalculator: g({
      lamportsPerSignature: c()
    })
  })));
  I(M());
  I(M());
  const Fi = g({
    err: Rt,
    logs: x(M()),
    signature: M()
  });
  g({
    result: Vt(Fi),
    subscription: c()
  });
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
        l.seq(E(), l.offset(l.u32(), -8), "addresses")
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
  new R("AddressLookupTab1e1111111111111111111111111");
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
  new R("ComputeBudget111111111111111111111111111111");
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
  new R("Ed25519SigVerify111111111111111111111111111");
  fr.utils.isValidPrivateKey;
  fr.getPublicKey;
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
  new R("KeccakSecp256k11111111111111111111111111111");
  var Ar;
  new R("StakeConfig11111111111111111111111111111111");
  class kr {
    constructor(p, w, v) {
      this.unixTimestamp = void 0, this.epoch = void 0, this.custodian = void 0, this.unixTimestamp = p, this.epoch = w, this.custodian = v;
    }
  }
  Ar = kr;
  kr.default = new Ar(0, 0, R.default);
  Object.freeze({
    Initialize: {
      index: 0,
      layout: l.struct([
        l.u32("instruction"),
        mi(),
        pi()
      ])
    },
    Authorize: {
      index: 1,
      layout: l.struct([
        l.u32("instruction"),
        E("newAuthorized"),
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
        E("newAuthorized"),
        l.u32("stakeAuthorizationType"),
        Tt("authoritySeed"),
        E("authorityOwner")
      ])
    }
  });
  new R("Stake11111111111111111111111111111111111111");
  Object.freeze({
    InitializeAccount: {
      index: 0,
      layout: l.struct([
        l.u32("instruction"),
        vi()
      ])
    },
    Authorize: {
      index: 1,
      layout: l.struct([
        l.u32("instruction"),
        E("newAuthorized"),
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
        gi()
      ])
    }
  });
  new R("Vote111111111111111111111111111111111111111");
  new R("Va1idator1nfo111111111111111111111111111111");
  g({
    name: M(),
    website: b(M()),
    details: b(M()),
    iconUrl: b(M()),
    keybaseUsername: b(M())
  });
  new R("Vote111111111111111111111111111111111111111");
  l.struct([
    E("nodePubkey"),
    E("authorizedWithdrawer"),
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
      E("authorizedVoter")
    ]), l.offset(l.u32(), -8), "authorizedVoters"),
    l.struct([
      l.seq(l.struct([
        E("authorizedPubkey"),
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
  $i = (m) => {
    const p = l.blob(32, m), { encode: w, decode: v } = xe(p), S = p;
    return S.decode = (h, B) => {
      const L = v(h, B);
      return new R(L);
    }, S.encode = (h, B, L) => {
      const wt = h.toBuffer();
      return w(wt, B, L);
    }, S;
  };
});
export {
  __tla,
  Wi as b,
  $i as p,
  Vi as u
};
