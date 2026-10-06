var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { k as tn, s as St, B as Et, y as ce, __tla as __tla_0 } from "./index-7X6IHuYr.js";
let gr, ht, W, Re, Qe, ur, dt, lt, Xt, Me, Nn, Vn, xo, $o, Mn, Gn, Fo, On, Ln, jn, Un, M, _n, ir, $n, Qt, Jt, ct, wo, ao, Br, yr, Ut, No, go, Qn, Ve, Ao, ze, Zt, oe, ke, te, or, Ro, er, Uo, an, rn, zr, Io, ho, vo, Tr, yn, uo, So, ut, Ne, Yt, Ce, en, Lo, so, be, Co, ar, se, it, pr, mr, Ye, Hn, Ir, Er, kn, F, Ee, Mo, po, zo, co, Lt, xr, ko, Do, Wo, Vo, fo, bo, lo, ro, to, ge, Go, Po, Oo, oo, Eo, eo, Bt, Bo, wr, wt, ie, ee, at, mo, fr, gt, st, L, dn, Be, N, mt, $, yo, G, Je, hr, K, B, O, Ae, y, v, re, fn, sr, To;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  var _a;
  be = (e) => [
    ...Array(e).keys()
  ];
  co = function(e) {
    return [
      ...e.entries()
    ];
  };
  lo = (e) => e.flat();
  Hn = (e, n) => e.map((t) => t[n]);
  ee = (e) => be(e[0].length).map((n) => be(e.length).map((t) => e[t][n]));
  uo = (e, n) => n.map((t) => e[t]);
  fo = (e, n, t) => {
    const o = new Set(Array.isArray(n) ? n : [
      n
    ]);
    return e.filter((r, a) => o.has(a) !== t);
  };
  yo = function(e, n = false) {
    if (e.length === 0) throw new Error("Can't calculate median of empty array");
    const t = n ? e : [
      ...e
    ].sort((s, i) => s > i ? 1 : s < i ? -1 : 0), o = Math.floor(t.length / 2);
    if (t.length % 2 === 1) return t[o];
    const r = t[o - 1], a = t[o];
    if (typeof r == "bigint" && typeof a == "bigint") return (r + a) / 2n;
    if (typeof r == "number" && typeof a == "number") return (r + a) / 2;
    throw new Error("Can't calculate median of array with mixed number and bigint");
  };
  function Ct(e) {
    return [
      "string",
      "number",
      "symbol",
      "bigint",
      "boolean"
    ].includes(typeof e);
  }
  let mn, It;
  mn = (e) => e.length === 2 && !Array.isArray(e[0]) && Array.isArray(e[1]);
  Ve = (e) => e.length === 0 ? [] : Array.isArray(e[0]) ? e.map(([n, t]) => Array.isArray(t) ? (mn(t) ? Ve(t) : t).map((o) => [
    n,
    o
  ].flat()) : [
    [
      n,
      t
    ]
  ]).flat() : mn(e) ? Ve(e[1]).map((n) => [
    e[0],
    n
  ]) : e;
  It = (e, n) => {
    const t = Ve(e);
    if (t.length === 0) throw new Error("Invalid mapping: empty");
    const o = n === void 0 ? [
      be(t[0].length - 1),
      [
        t[0].length - 1
      ]
    ] : n.map((u) => typeof u == "number" ? [
      u
    ] : u);
    let r = [], a = true;
    const s = (u, h) => {
      const w = Array.from(new Set(u[0]).values()), S = new Map(w.map((z) => [
        z,
        []
      ]));
      for (const [z, k] of u[0].entries()) S.get(k).push(z);
      if (u.length === 1) {
        const z = Object.fromEntries(w.map((k) => [
          k,
          S.get(k).map((c) => h[c].length === 1 ? h[c][0] : h[c])
        ]));
        if (a) {
          for (const k of S.values()) if (k.length > 1) return a = false, z;
          r.push(z);
        }
        return z;
      }
      const x = ee(u.slice(1));
      return Object.fromEntries(w.map((z) => {
        const k = S.get(z), c = ee(k.map((b) => x[b])), d = k.map((b) => h[b]);
        return [
          z,
          s(c, d)
        ];
      }));
    }, i = ee(t), f = (u) => {
      const h = i[u];
      if (h === void 0) throw new Error(`Invalid shape: column ${u} does not exist`);
      return h;
    }, [l, g] = o.map((u) => u.map((h) => f(h)));
    if (l.length === 0) throw new Error("Invalid shape: empty key set");
    if (g.length === 0) throw new Error("Invalid shape: empty value set");
    for (const u of l) for (const h of u) if (!Ct(h)) throw new Error(`Invalid key: ${h} in ${u}`);
    const m = s(l, ee(g));
    if (a) for (const u of r) for (const h of Object.keys(u)) u[h] = u[h][0];
    return m;
  };
  K = function(e, n) {
    const t = (o) => {
      const r = ((...a) => a.reduce((s, i) => s ? s[i.toString()] ?? void 0 : void 0, o));
      return Object.assign(r, {
        has: (...a) => r(...a) !== void 0,
        get: (...a) => r(...a),
        subMap: (a) => t(o[a.toString()])
      });
    };
    return t(It(e, n));
  };
  rn = function(e) {
    let n = null;
    return () => (n || (n = e()), n);
  };
  ho = function(e, ...n) {
    let t = false;
    return () => {
      t || (t = true, e(...n));
    };
  };
  Bt = function(e) {
    try {
      return e(), false;
    } catch {
      return true;
    }
  };
  mo = function(e, n, t) {
    return e < n ? n : e > t ? t : e;
  };
  var Tt = [
    "int",
    "uint",
    "bytes",
    "array",
    "switch"
  ], Kn = "big", Ie = 6, j = (e) => typeof e == "number" || typeof e == "bigint", X = (e) => e instanceof Uint8Array, qn = (e) => j(e) || X(e), q = (e) => Tt.includes(e == null ? void 0 : e.binary), xt = (e) => q(e) || Array.isArray(e) && e.every(q), Pt = (e) => typeof (e == null ? void 0 : e.from) == "number", $t = (e) => typeof (e == null ? void 0 : e.from) == "bigint", kt = (e) => Pt(e) || $t(e), Z = (e) => X(e == null ? void 0 : e.from), Xn = (e) => kt(e) || Z(e), Zn = (e, n) => {
    if (e !== n) throw new Error(`size mismatch: layout size: ${e}, data size: ${n}`);
    return n;
  }, _ = (e) => "layout" in e && e.layout !== void 0, je = (e, n) => "size" in e && e.size !== void 0 ? Zn(e.size, n) : n, _e = (e, n) => {
    if (e != n) throw new Error(`value mismatch: (constant) layout value: ${e}, data value: ${n}`);
  }, He = (e, n, t) => {
    const o = (l, g) => g === void 0 ? [
      0,
      l.length
    ] : Array.isArray(g) ? g : [
      g,
      l.length
    ], [r, a] = o(e, t == null ? void 0 : t.customSlice), [s, i] = o(n, t == null ? void 0 : t.dataSlice), f = a - r;
    Zn(f, i - s);
    for (let l = 0; l < e.length; ++l) if (e[l + r] !== n[l + s]) throw new Error(`binary data mismatch: layout value: ${e}, offset: ${r}, data value: ${n}, offset: ${s}`);
  };
  function Jn(e, n) {
    const t = n[e.idTag ?? "id"];
    return e.layouts.find(([o]) => (Array.isArray(o) ? o[1] : o) == t);
  }
  go = function(e, n) {
    const t = D(e, n);
    if (t === null) throw new Error(`coding error: couldn't calculate layout size for layout ${e} with data ${n}`);
    return t;
  };
  Qn = function(e) {
    return D(e, R);
  };
  var R = Symbol("staticCalc");
  function Nt(e, n) {
    const t = [], o = D(e, n, t);
    if (o === null) throw new Error(`coding error: couldn't calculate layout size for layout ${e} with data ${n}`);
    return [
      o,
      t
    ];
  }
  function gn(e, n, t) {
    const o = (r) => (t !== void 0 && t.push(r), r);
    switch (e.binary) {
      case "int":
      case "uint":
        return e.size;
      case "bytes": {
        if ("size" in e && n === R) return e.size;
        const r = "lengthSize" in e ? e.lengthSize | 0 : 0;
        if (_(e)) {
          const { custom: s } = e, i = D(e.layout, s === void 0 ? n : typeof s.from == "function" ? n !== R ? o(s.from(n)) : R : s.from, t);
          return i === null ? "size" in e ? e.size ?? null : null : r + je(e, i);
        }
        const { custom: a } = e;
        return X(a) ? r + a.length : Z(a) ? r + a.from.length : n === R ? null : r + je(e, a !== void 0 ? o(a.from(n)).length : n.length);
      }
      case "array": {
        const r = "length" in e ? e.length : void 0;
        if (n === R) {
          if (r !== void 0) {
            const s = D(e.layout, R, t);
            return s !== null ? r * s : null;
          }
          return null;
        }
        let a = 0;
        if (r !== void 0 && r !== n.length) throw new Error(`array length mismatch: layout length: ${r}, data length: ${n.length}`);
        "lengthSize" in e && e.lengthSize !== void 0 && (a += e.lengthSize);
        for (let s = 0; s < n.length; ++s) {
          const i = D(e.layout, n[s], t);
          if (i === null) return null;
          a += i;
        }
        return a;
      }
      case "switch": {
        if (n !== R) {
          const [a, s] = Jn(e, n), i = D(s, n, t);
          return i !== null ? e.idSize + i : null;
        }
        let r = null;
        for (const [a, s] of e.layouts) {
          const i = D(s, R, t);
          if (r === null) r = i;
          else if (i !== r) return null;
        }
        return e.idSize + r;
      }
    }
  }
  function D(e, n, t) {
    if (q(e)) return gn(e, n, t);
    let o = 0;
    for (const r of e) {
      let a;
      if (n === R) a = R;
      else if (!("omit" in r) || !r.omit) {
        if (!(r.name in n)) throw new Error(`missing data for layout item: ${r.name}`);
        a = n[r.name];
      }
      const s = gn(r, a, t);
      if (s === null) {
        if (n !== R) throw new Error(`coding error: couldn't calculate size for layout item: ${r.name}`);
        return null;
      }
      o += s;
    }
    return o;
  }
  var De = (e, n) => {
    e.bytes.set(n, e.offset), e.offset += n.length;
  }, bn = (e) => e.bytesConversions[e.position++];
  O = function(e, n, t) {
    const [o, r] = Nt(e, n), a = {
      bytes: t ?? new Uint8Array(o),
      offset: 0
    };
    if (fe(e, n, a, {
      bytesConversions: r,
      position: 0
    }), !t && a.offset !== a.bytes.length) throw new Error(`encoded data is shorter than expected: ${a.bytes.length} > ${a.offset}`);
    return t ? a.offset : a.bytes;
  };
  var pn = 2 ** (Ie * 8);
  function V(e, n, t, o = Kn, r = false) {
    if (!r && e < 0) throw new Error(`Value ${e} is negative but unsigned`);
    if (typeof e == "number") {
      if (!Number.isInteger(e)) throw new Error(`Value ${e} is not an integer`);
      if (n > Ie) {
        if (e >= pn) throw new Error(`Value ${e} is too large to be safely converted into an integer`);
        if (r && e < -pn) throw new Error(`Value ${e} is too small to be safely converted into an integer`);
      }
    }
    const a = 2n ** BigInt(n * 8 - (r ? 1 : 0));
    if (e >= a) throw new Error(`Value ${e} is too large for ${n} bytes`);
    if (r && e < -a) throw new Error(`Value ${e} is too small for ${n} bytes`);
    for (let s = 0; s < n; ++s) t.bytes[t.offset + s] = Number(BigInt(e) >> BigInt(8 * (o === "big" ? n - s - 1 : s)) & 0xffn);
    t.offset += n;
  }
  function fe(e, n, t, o) {
    if (q(e)) wn(e, n, t, o);
    else for (const r of e) try {
      wn(r, n[r.name], t, o);
    } catch (a) {
      throw a.message = `when serializing item '${r.name}': ${a.message}`, a;
    }
  }
  function wn(e, n, t, o) {
    var _a2;
    switch (e.binary) {
      case "int":
      case "uint": {
        const r = j(e.custom) ? ("omit" in e && e.omit || _e(e.custom, n), e.custom) : j((_a2 = e == null ? void 0 : e.custom) == null ? void 0 : _a2.from) ? e.custom.from : e.custom !== void 0 ? e.custom.from(n) : n;
        V(r, e.size, t, e.endianness, e.binary === "int");
        break;
      }
      case "bytes": {
        const r = t.offset;
        if ("lengthSize" in e && e.lengthSize !== void 0 && (t.offset += e.lengthSize), _(e)) {
          const { custom: a } = e;
          let s;
          a === void 0 ? s = n : typeof a.from != "function" ? s = a.from : s = bn(o), fe(e.layout, s, t, o);
        } else {
          const { custom: a } = e;
          X(a) ? ("omit" in e && e.omit || He(a, n), De(t, a)) : Z(a) ? De(t, a.from) : De(t, a !== void 0 ? bn(o) : n);
        }
        if ("lengthSize" in e && e.lengthSize !== void 0) {
          const a = t.offset - r - e.lengthSize, s = t.offset;
          t.offset = r, V(a, e.lengthSize, t, e.lengthEndianness), t.offset = s;
        } else je(e, t.offset - r);
        break;
      }
      case "array": {
        if ("length" in e && e.length !== n.length) throw new Error(`array length mismatch: layout length: ${e.length}, data length: ${n.length}`);
        "lengthSize" in e && e.lengthSize !== void 0 && V(n.length, e.lengthSize, t, e.lengthEndianness);
        for (let r = 0; r < n.length; ++r) fe(e.layout, n[r], t, o);
        break;
      }
      case "switch": {
        const [r, a] = Jn(e, n), s = Array.isArray(r) ? r[0] : r;
        V(s, e.idSize, t, e.idEndianness), fe(a, n, t, o);
        break;
      }
    }
  }
  function Yn(e) {
    const n = e.custom;
    if (!("cachedSerializedFrom" in n) && (n.cachedSerializedFrom = O(e.layout, n.from), "size" in e && e.size !== void 0 && e.size !== n.cachedSerializedFrom.length)) throw new Error("Layout specification error: custom.from does not serialize to specified size");
    return n.cachedSerializedFrom;
  }
  F = function(e, n, t) {
    const o = t ?? true, r = {
      bytes: n,
      offset: 0,
      end: n.length
    }, a = ne(e, r);
    if (o && r.offset !== r.end) throw new Error(`encoded data is longer than expected: ${r.end} > ${r.offset}`);
    return o ? a : [
      a,
      r.offset
    ];
  };
  function de(e, n) {
    const t = e.offset + n;
    if (t > e.end) throw new Error(`chunk is shorter than expected: ${e.end} < ${t}`);
    e.offset = t;
  }
  function ne(e, n) {
    if (!Array.isArray(e)) return vn(e, n);
    let t = {};
    for (const o of e) try {
      (o.omit ? {} : t)[o.name] = vn(o, n);
    } catch (r) {
      throw r.message = `when deserializing item '${o.name}': ${r.message}`, r;
    }
    return t;
  }
  function le(e, n, t = Kn, o = false) {
    let r = 0n;
    for (let a = 0; a < n; ++a) r |= BigInt(e.bytes[e.offset + a]) << BigInt(8 * (t === "big" ? n - a - 1 : a));
    return o && e.bytes[e.offset + (t === "big" ? 0 : n - 1)] & 128 && (r -= 1n << BigInt(8 * n)), de(e, n), n > Ie ? r : Number(r);
  }
  function vn(e, n) {
    switch (e.binary) {
      case "int":
      case "uint": {
        const t = le(n, e.size, e.endianness, e.binary === "int"), { custom: o } = e;
        return j(o) ? (_e(o, t), o) : j(o == null ? void 0 : o.from) ? (_e(o.from, t), o.to) : o !== void 0 ? o.to(t) : t;
      }
      case "bytes": {
        const t = "lengthSize" in e && e.lengthSize !== void 0 ? le(n, e.lengthSize, e.lengthEndianness) : e == null ? void 0 : e.size;
        if (_(e)) {
          const { custom: i } = e, f = n.offset;
          let l;
          if (t === void 0) l = ne(e.layout, n);
          else {
            const g = {
              ...n,
              end: n.offset + t
            };
            if (de(n, t), l = ne(e.layout, g), g.offset !== g.end) throw new Error(`read less data than expected: ${g.offset - n.offset} < ${t}`);
          }
          return i !== void 0 ? typeof i.from != "function" ? (He(Yn(e), n.bytes, {
            dataSlice: [
              f,
              n.offset
            ]
          }), i.to) : i.to(l) : l;
        }
        const { custom: o } = e;
        {
          let i, f;
          if (X(o) ? i = o : Z(o) && (i = o.from, f = o.to), i !== void 0) {
            const l = t ?? i.length, g = n.bytes.subarray(n.offset, n.offset + l);
            return He(i, g), de(n, l), f ?? i;
          }
        }
        const r = n.offset, a = t !== void 0 ? n.offset + t : n.end;
        de(n, a - r);
        const s = n.bytes.subarray(r, a);
        return o !== void 0 ? o.to(s) : s;
      }
      case "array": {
        let t = [];
        const { layout: o } = e, r = () => {
          const s = ne(o, n);
          t.push(s);
        };
        let a = null;
        if ("length" in e && e.length !== void 0 ? a = e.length : "lengthSize" in e && e.lengthSize !== void 0 && (a = le(n, e.lengthSize, e.lengthEndianness)), a !== null) for (let s = 0; s < a; ++s) r();
        else for (; n.offset < n.end; ) r();
        return t;
      }
      case "switch": {
        const t = le(n, e.idSize, e.idEndianness), { layouts: o } = e;
        if (o.length === 0) throw new Error("switch item has no layouts");
        const r = typeof o[0][0] == "number", a = o.find(([l]) => r ? l === t : l[0] === t);
        if (a === void 0) throw new Error(`unknown id value: ${t}`);
        const [s, i] = a, f = ne(i, n);
        return {
          [e.idTag ?? "id"]: r ? t : s[1],
          ...f
        };
      }
    }
  }
  bo = (e) => nt(e, true);
  po = (e) => nt(e, false);
  wo = function(e, n) {
    return ye(e, n);
  };
  function on(e, n) {
    switch (e.binary) {
      case "bytes":
        if (_(e)) {
          const { custom: t } = e;
          if (t === void 0) {
            const { layout: r } = e;
            if (q(r)) return on(r, n);
            const a = Ke(r, n);
            return a.length > 0 ? {
              ...e,
              layout: a
            } : null;
          }
          const o = typeof t.from != "function";
          return n && o || !n && !o ? e : null;
        }
      case "int":
      case "uint": {
        const { custom: t } = e, o = qn(t) || Xn(t);
        return n && o || !n && !o ? e : null;
      }
      case "array": {
        const t = et(e.layout, n);
        return t !== null ? {
          ...e,
          layout: t
        } : null;
      }
      case "switch": {
        const t = e.layouts.reduce((o, [r, a]) => {
          const s = Ke(a, n);
          return s.length > 0 ? [
            ...o,
            [
              r,
              s
            ]
          ] : o;
        }, []);
        return {
          ...e,
          layouts: t
        };
      }
    }
  }
  function Ke(e, n) {
    return e.reduce((t, o) => {
      const r = on(o, n);
      return r !== null ? [
        ...t,
        r
      ] : t;
    }, []);
  }
  function et(e, n) {
    return Array.isArray(e) ? Ke(e, n) : on(e, n);
  }
  function nt(e, n) {
    return et(e, n);
  }
  function zn(e, n) {
    switch (e.binary) {
      case "bytes":
        if (_(e)) {
          const { custom: t } = e;
          return t === void 0 || typeof t.from != "function" ? ye(e.layout, t ? t.from : n) : n;
        }
      case "int":
      case "uint": {
        const { custom: t } = e;
        return (e == null ? void 0 : e.omit) ? void 0 : qn(t) ? t : Xn(t) ? t.to : n;
      }
      case "array":
        return Array.isArray(n) ? n.map((t) => ye(e.layout, t)) : void 0;
      case "switch": {
        const t = n[e.idTag ?? "id"], [o, r] = e.layouts.find(([a]) => (Array.isArray(a) ? a[1] : a) == t);
        return {
          [e.idTag ?? "id"]: t,
          ...ye(r, n)
        };
      }
    }
  }
  function ye(e, n) {
    if (n = n ?? {}, q(e)) return zn(e, n);
    const t = {};
    for (const o of e) {
      const r = zn(o, n[o.name] ?? {});
      r !== void 0 && (t[o.name] = r);
    }
    return t;
  }
  an = function(e, n) {
    const [t, o] = Rt(e);
    if (!t && !n) throw new Error("Cannot uniquely distinguished the given layouts");
    return n ? o : (r) => {
      const a = o(r);
      return a.length === 0 ? null : a[0];
    };
  };
  function qe(e) {
    return e.reduce((n, t) => n | BigInt(1) << BigInt(t), BigInt(0));
  }
  function ue(e) {
    const n = [];
    for (let t = 0n; e > 0n; e >>= 1n, ++t) e & 1n && n.push(Number(t));
    return n;
  }
  function I(e) {
    let n = 0;
    for (; e > 0n; e >>= 1n) n += Number(e & 1n);
    return n;
  }
  var An = (e) => e > 0 ? 2 ** (8 * e) - 1 : 1 / 0;
  function Sn(e, n, t) {
    var _a2;
    switch (e.binary) {
      case "int":
      case "uint": {
        const o = j(e.custom) ? e.custom : j((_a2 = e == null ? void 0 : e.custom) == null ? void 0 : _a2.from) ? e.custom.from : null;
        if (o !== null && n !== null) {
          const r = {
            bytes: new Uint8Array(e.size),
            offset: 0
          };
          V(o, e.size, r, e.endianness, e.binary === "int"), t.push([
            n,
            r.bytes
          ]);
        }
        return [
          e.size,
          e.size
        ];
      }
      case "bytes": {
        const o = "lengthSize" in e ? e.lengthSize | 0 : 0;
        let r, a;
        if (_(e)) {
          const { custom: i } = e;
          if (i !== void 0 && typeof i.from != "function") r = Yn(e), a = r.length;
          else {
            const f = Qn(e.layout);
            f !== null && (a = f);
          }
        } else {
          const { custom: i } = e;
          X(i) ? (r = i, a = i.length) : Z(i) && (r = i.from, a = i.from.length);
        }
        if (o > 0 && n !== null) {
          if (a !== void 0) {
            const i = {
              bytes: new Uint8Array(o),
              offset: 0
            }, f = e.lengthEndianness;
            V(a, o, i, f, false), t.push([
              n,
              i.bytes
            ]);
          }
          n += o;
        }
        if (r !== void 0) return n !== null && t.push([
          n,
          r
        ]), [
          o + r.length,
          o + r.length
        ];
        const s = "size" in e && e.size !== void 0 ? [
          e.size,
          e.size
        ] : void 0;
        if (_(e)) {
          const i = he(e.layout, n, t);
          return s ?? [
            o + i[0],
            o + i[1]
          ];
        }
        return s ?? [
          o,
          An(o)
        ];
      }
      case "array": {
        if ("length" in e) {
          let r = [];
          const a = he(e.layout, 0, r);
          if (n !== null) if (a[0] !== a[1]) {
            if (e.length > 0) for (const [s, i] of r) t.push([
              n + s,
              i
            ]);
          } else for (let s = 0; s < e.length; ++s) for (const [i, f] of r) t.push([
            n + i + s * a[0],
            f
          ]);
          return [
            e.length * a[0],
            e.length * a[1]
          ];
        }
        const o = e.lengthSize | 0;
        return [
          o,
          An(o)
        ];
      }
      case "switch": {
        const o = e.layouts.map((i) => []), { idSize: r, idEndianness: a } = e, s = e.layouts.map(([i, f], l) => {
          const g = Array.isArray(i) ? i[0] : i;
          if (n !== null) {
            const u = {
              bytes: new Uint8Array(r),
              offset: 0
            };
            V(g, r, u, a), o[l].push([
              0,
              u.bytes
            ]);
          }
          const m = he(f, n !== null ? r : null, o[l]);
          return [
            m[0] + r,
            m[1] + r
          ];
        });
        return n !== null && o.every((i) => i.length > 0) && (() => {
          const i = Math.min(...o.map((l) => l.at(-1)[0] + l.at(-1)[1].length)), f = o.map((l) => 0);
          for (let l = 0; l < i; ) {
            let g = null, m = 0;
            for (; m < o.length; ) {
              let u = f[m];
              const h = o[m], [w, S] = h[u];
              if (w + S.length <= l) {
                if (++u, u === h.length) return;
                f[m] = u, l = h[u][0];
                break;
              }
              const x = S[l - w];
              if (g === null && (g = x), x !== g) {
                ++l;
                break;
              }
              ++m;
            }
            m === o.length && (t.push([
              n + l,
              new Uint8Array([
                g
              ])
            ]), ++l);
          }
        })(), [
          Math.min(...s.map(([i]) => i)),
          Math.max(...s.map(([i, f]) => f))
        ];
      }
    }
  }
  function he(e, n, t) {
    if (!Array.isArray(e)) return Sn(e, n, t);
    let o = [
      0,
      0
    ];
    for (const r of e) {
      const a = Sn(r, n, t);
      o[0] += a[0], o[1] += a[1], n !== null && (n = a[0] === a[1] ? n + a[0] : null);
    }
    return o;
  }
  function Mt(e) {
    const n = /* @__PURE__ */ new Map();
    let t = [];
    const o = (r) => {
      for (; t.length > 0 && t[0][0] < r; ) {
        const a = t[0][0] + 1, s = t.findIndex(([i]) => a <= i);
        s === -1 ? t = [] : t.splice(0, s), n.set(a, qe(t.map(([, i]) => i)));
      }
    };
    for (const [[r, a], s] of e) {
      o(r);
      const i = t.findIndex(([f]) => f > a);
      i === -1 ? t.push([
        a,
        s
      ]) : t.splice(i, 0, [
        a,
        s
      ]), n.set(r, qe(t.map(([, f]) => f)));
    }
    return o(1 / 0), n;
  }
  function Rt(e) {
    if (e.length === 0) throw new Error("Cannot discriminate empty set of layouts");
    const n = 0n, t = (1n << BigInt(e.length)) - 1n, o = e.map(() => []), r = e.map((c, d) => he(c, 0, o[d])), a = r.map((c, d) => [
      c,
      d
    ]).sort(([[c]], [[d]]) => c - d), s = (() => {
      let c = t;
      const d = /* @__PURE__ */ new Map();
      for (const [[b], E] of a) c ^= 1n << BigInt(E), d.set(b, c);
      return d;
    })(), i = Mt(a), f = e.length - Math.max(...[
      ...i.values()
    ].map((c) => I(c))), l = (c) => {
      let d = t;
      for (const [b, E] of s) {
        if (c < b) break;
        d = E;
      }
      return d;
    }, g = (c) => {
      let d = n;
      for (const [b, E] of i) {
        if (c < b) break;
        d = E;
      }
      return d;
    }, m = Array.from({
      length: Math.max(...o.map((c) => c.length > 0 ? c.at(-1)[0] + c.at(-1)[1].length : 0))
    }).map(() => []);
    for (let c = 0; c < o.length; ++c) for (const [d, b] of o[c]) for (let E = 0; E < b.length; ++E) m[d + E].push([
      b[E],
      c
    ]);
    let u = [];
    for (const [c, d] of m.entries()) {
      const b = l(c), E = b ^ qe(d.map(([, A]) => A)), P = t ^ b, C = /* @__PURE__ */ new Map();
      for (const [A, U] of d) C.has(A) || C.set(A, n), C.set(A, C.get(A) | 1n << BigInt(U));
      let T = e.length - Math.max(I(E), I(P));
      for (const A of C.values()) {
        const U = d.length - I(A) + I(P);
        T = Math.min(T, U);
      }
      if (T !== 0) {
        if (T === e.length - 1) return [
          true,
          (A) => ue(A.length <= c ? P : C.get(A[c]) ?? n)
        ];
        u.push([
          T,
          c,
          P,
          C,
          E
        ]);
      }
    }
    if (f === e.length - 1) return [
      true,
      (c) => ue(g(c.length))
    ];
    u.sort(([c], [d]) => d - c);
    let h = true;
    const w = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map(), x = (c, d) => {
      w.set(c, d), S.has(I(c)) || S.set(I(c), []), S.get(I(c)).push(c);
    }, z = (c, d) => {
      if (I(c) <= 1 || w.has(c)) return;
      let b = 0;
      const E = /* @__PURE__ */ new Map();
      for (const C of ue(c)) {
        const T = r[C][0], A = i.get(T) & c;
        E.set(T, A), b = Math.max(b, I(A));
      }
      b = I(c) - b;
      const P = [];
      for (const [C, T, A, U, Le] of d) {
        const J = /* @__PURE__ */ new Map();
        let hn = 0;
        for (const [Ue, Ge] of U) {
          const Oe = Ge & c;
          I(Oe) > 0 && (J.set(Ue, Oe), hn += I(Oe));
        }
        const Fe = A & c;
        let Q = J.size > 0 ? C : 0;
        for (const Ue of J.values()) {
          const Ge = hn - I(Ue) + I(Fe);
          Q = Math.min(Q, Ge);
        }
        if (Q !== 0) {
          if (Q === I(c) - 1) {
            x(c, [
              T,
              Fe,
              J
            ]);
            return;
          }
          P.push([
            Q,
            T,
            Fe,
            J,
            Le & c
          ]);
        }
      }
      if (b === I(c) - 1) {
        x(c, "size");
        return;
      }
      if (P.sort(([C], [T]) => T - C), P.length > 0 && P[0][0] >= b) {
        const [, C, T, A, U] = P[0];
        x(c, [
          C,
          T,
          A
        ]), z(T, P);
        for (const Le of A.values()) z(Le | U, P.slice(1));
        return;
      }
      if (b > 0) {
        x(c, "size");
        for (const C of E.values()) z(C, P);
        return;
      }
      x(c, "indistinguishable"), h = false;
    };
    z(t, u);
    const k = (c) => {
      for (let d = I(c) + 1; d < e.length - 2; ++d) for (const b of S.get(d) ?? []) if ((c & b) == c) return w.get(b);
      throw new Error("Implementation error in layout discrimination algorithm");
    };
    return [
      h,
      (c) => {
        let d = t, b = w.get(d);
        for (; b !== "indistinguishable"; ) {
          if (b === "size") d &= g(c.length);
          else {
            const [E, P, C] = b;
            if (c.length <= E) d &= P;
            else {
              const T = c[E];
              for (const [A, U] of C) A !== T && (d ^= d & U);
              d ^= d & P;
            }
          }
          if (I(d) <= 1) break;
          b = w.get(d) ?? k(d);
        }
        return ue(d);
      }
    ];
  }
  Be = (e, n) => ({
    ...e,
    binary: "bytes",
    ...n === void 0 ? {} : xt(n) ? {
      layout: n
    } : n instanceof Uint8Array || Z(n) || !Array.isArray(n) ? {
      custom: n
    } : {
      layout: n[0],
      custom: n[1]
    }
  });
  Lt = function(e, n) {
    const t = Object.fromEntries(e.map(([r, a]) => [
      a,
      r
    ])), o = Object.fromEntries(e);
    return {
      binary: "uint",
      size: (n == null ? void 0 : n.size) ?? 1,
      endianness: (n == null ? void 0 : n.endianness) ?? "big",
      custom: {
        to: (r) => {
          const a = t[r];
          if (a === void 0) throw new Error(`Invalid enum value: ${r}`);
          return a;
        },
        from: (r) => o[r]
      }
    };
  };
  var Ft = (e) => ({
    binary: "switch",
    idSize: 1,
    idTag: "isSome",
    layouts: [
      [
        [
          0,
          false
        ],
        []
      ],
      [
        [
          1,
          true
        ],
        [
          Be({
            name: "value"
          }, e)
        ]
      ]
    ]
  });
  vo = function(e) {
    return {
      binary: "bytes",
      layout: Ft(e),
      custom: {
        to: (n) => n.isSome === true ? n.value : void 0,
        from: (n) => n === void 0 ? {
          isSome: false
        } : {
          isSome: true,
          value: n
        }
      }
    };
  };
  Ut = function(e, n) {
    return {
      binary: "uint",
      size: n ?? Math.ceil(e.length / 8),
      custom: {
        to: (t) => {
          const o = {};
          for (let r = 0; r < e.length; ++r) e[r] && (o[e[r]] = (BigInt(t) & 1n << BigInt(r)) !== 0n);
          return o;
        },
        from: (t) => {
          let o = 0n;
          for (let r = 0; r < e.length; ++r) e[r] && t[e[r]] && (o |= 1n << BigInt(r));
          return e.length > Ie ? o : Number(o);
        }
      }
    };
  };
  function Te(e) {
    return e instanceof Uint8Array || ArrayBuffer.isView(e) && e.constructor.name === "Uint8Array";
  }
  function Gt(e, ...n) {
    if (!Te(e)) throw new Error("Uint8Array expected");
    if (n.length > 0 && !n.includes(e.length)) throw new Error("Uint8Array expected of length " + n + ", got length=" + e.length);
  }
  function tt(e, n) {
    return Array.isArray(n) ? n.length === 0 ? true : e ? n.every((t) => typeof t == "string") : n.every((t) => Number.isSafeInteger(t)) : false;
  }
  function Ot(e) {
    if (typeof e != "function") throw new Error("function expected");
    return true;
  }
  function H(e, n) {
    if (typeof n != "string") throw new Error(`${e}: string expected`);
    return true;
  }
  function ae(e) {
    if (!Number.isSafeInteger(e)) throw new Error(`invalid integer: ${e}`);
  }
  function pe(e) {
    if (!Array.isArray(e)) throw new Error("array expected");
  }
  function we(e, n) {
    if (!tt(true, n)) throw new Error(`${e}: array of strings expected`);
  }
  function sn(e, n) {
    if (!tt(false, n)) throw new Error(`${e}: array of numbers expected`);
  }
  function xe(...e) {
    const n = (a) => a, t = (a, s) => (i) => a(s(i)), o = e.map((a) => a.encode).reduceRight(t, n), r = e.map((a) => a.decode).reduce(t, n);
    return {
      encode: o,
      decode: r
    };
  }
  function Pe(e) {
    const n = typeof e == "string" ? e.split("") : e, t = n.length;
    we("alphabet", n);
    const o = new Map(n.map((r, a) => [
      r,
      a
    ]));
    return {
      encode: (r) => (pe(r), r.map((a) => {
        if (!Number.isSafeInteger(a) || a < 0 || a >= t) throw new Error(`alphabet.encode: digit index outside alphabet "${a}". Allowed: ${e}`);
        return n[a];
      })),
      decode: (r) => (pe(r), r.map((a) => {
        H("alphabet.decode", a);
        const s = o.get(a);
        if (s === void 0) throw new Error(`Unknown letter: "${a}". Allowed: ${e}`);
        return s;
      }))
    };
  }
  function $e(e = "") {
    return H("join", e), {
      encode: (n) => (we("join.decode", n), n.join(e)),
      decode: (n) => (H("join.decode", n), n.split(e))
    };
  }
  function Dt(e, n = "=") {
    return ae(e), H("padding", n), {
      encode(t) {
        for (we("padding.encode", t); t.length * e % 8; ) t.push(n);
        return t;
      },
      decode(t) {
        we("padding.decode", t);
        let o = t.length;
        if (o * e % 8) throw new Error("padding: invalid, string should have whole number of bytes");
        for (; o > 0 && t[o - 1] === n; o--) if ((o - 1) * e % 8 === 0) throw new Error("padding: invalid, string has too much padding");
        return t.slice(0, o);
      }
    };
  }
  function En(e, n, t) {
    if (n < 2) throw new Error(`convertRadix: invalid from=${n}, base cannot be less than 2`);
    if (t < 2) throw new Error(`convertRadix: invalid to=${t}, base cannot be less than 2`);
    if (pe(e), !e.length) return [];
    let o = 0;
    const r = [], a = Array.from(e, (i) => {
      if (ae(i), i < 0 || i >= n) throw new Error(`invalid integer: ${i}`);
      return i;
    }), s = a.length;
    for (; ; ) {
      let i = 0, f = true;
      for (let l = o; l < s; l++) {
        const g = a[l], m = n * i, u = m + g;
        if (!Number.isSafeInteger(u) || m / n !== i || u - g !== m) throw new Error("convertRadix: carry overflow");
        const h = u / t;
        i = u % t;
        const w = Math.floor(h);
        if (a[l] = w, !Number.isSafeInteger(w) || w * t + i !== u) throw new Error("convertRadix: carry overflow");
        if (f) w ? f = false : o = l;
        else continue;
      }
      if (r.push(i), f) break;
    }
    for (let i = 0; i < e.length - 1 && e[i] === 0; i++) r.push(0);
    return r.reverse();
  }
  const rt = (e, n) => n === 0 ? e : rt(n, e % n), ve = (e, n) => e + (n - rt(e, n)), me = (() => {
    let e = [];
    for (let n = 0; n < 40; n++) e.push(2 ** n);
    return e;
  })();
  function Xe(e, n, t, o) {
    if (pe(e), n <= 0 || n > 32) throw new Error(`convertRadix2: wrong from=${n}`);
    if (t <= 0 || t > 32) throw new Error(`convertRadix2: wrong to=${t}`);
    if (ve(n, t) > 32) throw new Error(`convertRadix2: carry overflow from=${n} to=${t} carryBits=${ve(n, t)}`);
    let r = 0, a = 0;
    const s = me[n], i = me[t] - 1, f = [];
    for (const l of e) {
      if (ae(l), l >= s) throw new Error(`convertRadix2: invalid data word=${l} from=${n}`);
      if (r = r << n | l, a + n > 32) throw new Error(`convertRadix2: carry overflow pos=${a} from=${n}`);
      for (a += n; a >= t; a -= t) f.push((r >> a - t & i) >>> 0);
      const g = me[a];
      if (g === void 0) throw new Error("invalid carry");
      r &= g - 1;
    }
    if (r = r << t - a & i, !o && a >= n) throw new Error("Excess padding");
    if (!o && r > 0) throw new Error(`Non-zero padding: ${r}`);
    return o && a > 0 && f.push(r >>> 0), f;
  }
  function Wt(e) {
    ae(e);
    const n = 2 ** 8;
    return {
      encode: (t) => {
        if (!Te(t)) throw new Error("radix.encode input should be Uint8Array");
        return En(Array.from(t), n, e);
      },
      decode: (t) => (sn("radix.decode", t), Uint8Array.from(En(t, e, n)))
    };
  }
  function cn(e, n = false) {
    if (ae(e), e <= 0 || e > 32) throw new Error("radix2: bits should be in (0..32]");
    if (ve(8, e) > 32 || ve(e, 8) > 32) throw new Error("radix2: carry overflow");
    return {
      encode: (t) => {
        if (!Te(t)) throw new Error("radix2.encode input should be Uint8Array");
        return Xe(Array.from(t), 8, e, !n);
      },
      decode: (t) => (sn("radix2.decode", t), Uint8Array.from(Xe(t, e, 8, n)))
    };
  }
  function Cn(e) {
    return Ot(e), function(...n) {
      try {
        return e.apply(null, n);
      } catch {
      }
    };
  }
  const In = xe(cn(4), Pe("0123456789ABCDEF"), $e("")), Vt = typeof Uint8Array.from([]).toBase64 == "function" && typeof Uint8Array.fromBase64 == "function", jt = (e, n) => {
    H("base64", e);
    const t = /^[A-Za-z0-9=+/]+$/, o = "base64";
    if (e.length > 0 && !t.test(e)) throw new Error("invalid base64");
    return Uint8Array.fromBase64(e, {
      alphabet: o,
      lastChunkHandling: "strict"
    });
  }, Bn = Vt ? {
    encode(e) {
      return Gt(e), e.toBase64();
    },
    decode(e) {
      return jt(e);
    }
  } : xe(cn(6), Pe("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"), Dt(6), $e("")), _t = (e) => xe(Wt(58), Pe(e), $e("")), Tn = _t("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"), Ze = xe(Pe("qpzry9x8gf2tvdw0s3jn54khce6mua7l"), $e("")), xn = [
    996825010,
    642813549,
    513874426,
    1027748829,
    705979059
  ];
  function Y(e) {
    const n = e >> 25;
    let t = (e & 33554431) << 5;
    for (let o = 0; o < xn.length; o++) (n >> o & 1) === 1 && (t ^= xn[o]);
    return t;
  }
  function Pn(e, n, t = 1) {
    const o = e.length;
    let r = 1;
    for (let a = 0; a < o; a++) {
      const s = e.charCodeAt(a);
      if (s < 33 || s > 126) throw new Error(`Invalid prefix (${e})`);
      r = Y(r) ^ s >> 5;
    }
    r = Y(r);
    for (let a = 0; a < o; a++) r = Y(r) ^ e.charCodeAt(a) & 31;
    for (let a of n) r = Y(r) ^ a;
    for (let a = 0; a < 6; a++) r = Y(r);
    return r ^= t, Ze.encode(Xe([
      r % me[30]
    ], 30, 5, false));
  }
  function Ht(e) {
    const n = e === "bech32" ? 1 : 734539939, t = cn(5), o = t.decode, r = t.encode, a = Cn(o);
    function s(m, u, h = 90) {
      H("bech32.encode prefix", m), Te(u) && (u = Array.from(u)), sn("bech32.encode", u);
      const w = m.length;
      if (w === 0) throw new TypeError(`Invalid prefix length ${w}`);
      const S = w + 7 + u.length;
      if (h !== false && S > h) throw new TypeError(`Length ${S} exceeds limit ${h}`);
      const x = m.toLowerCase(), z = Pn(x, u, n);
      return `${x}1${Ze.encode(u)}${z}`;
    }
    function i(m, u = 90) {
      H("bech32.decode input", m);
      const h = m.length;
      if (h < 8 || u !== false && h > u) throw new TypeError(`invalid string length: ${h} (${m}). Expected (8..${u})`);
      const w = m.toLowerCase();
      if (m !== w && m !== m.toUpperCase()) throw new Error("String must be lowercase or uppercase");
      const S = w.lastIndexOf("1");
      if (S === 0 || S === -1) throw new Error('Letter "1" must be present between prefix and data only');
      const x = w.slice(0, S), z = w.slice(S + 1);
      if (z.length < 6) throw new Error("Data must be at least 6 characters long");
      const k = Ze.decode(z).slice(0, -6), c = Pn(x, k, n);
      if (!z.endsWith(c)) throw new Error(`Invalid checksum in ${m}: expected "${c}"`);
      return {
        prefix: x,
        words: k
      };
    }
    const f = Cn(i);
    function l(m) {
      const { prefix: u, words: h } = i(m, false);
      return {
        prefix: u,
        words: h,
        bytes: o(h)
      };
    }
    function g(m, u) {
      return s(m, r(u));
    }
    return {
      encode: s,
      decode: i,
      encodeFromBytes: g,
      decodeToBytes: l,
      decodeUnsafe: f,
      fromWords: o,
      fromWordsUnsafe: a,
      toWords: r
    };
  }
  let ot, Kt, qt, ln;
  ot = Ht("bech32");
  at = (e, n) => n.startsWith(e) ? n.slice(e.length) : n;
  Kt = /^(?:0x)?[0-9a-fA-F]+$/;
  L = {
    valid: (e) => Kt.test(e),
    decode: (e) => In.decode(at("0x", e).toUpperCase()),
    encode: (e, n = false) => (e = typeof e == "string" ? $.encode(e) : e, (n ? "0x" : "") + In.encode(e).toLowerCase())
  };
  qt = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/;
  Xt = {
    valid: (e) => qt.test(e),
    decode: Bn.decode,
    encode: (e) => Bn.encode(typeof e == "string" ? $.encode(e) : e)
  };
  st = {
    decode: Tn.decode,
    encode: (e) => Tn.encode(typeof e == "string" ? $.encode(e) : e)
  };
  ge = {
    decode: (e) => (typeof e != "string" && (e = L.encode(e, true)), e === "" || e === "0x" ? 0n : BigInt(e)),
    encode: (e, n = false) => ge.toString(e, n),
    toString: (e, n = false) => {
      let t = e.toString(16);
      return t = t.length % 2 === 1 ? t = "0" + t : t, n ? "0x" + t : t;
    },
    toBytes: (e, n) => {
      typeof e == "number" && (e = ge.toBigInt(e));
      const t = L.decode(ge.toString(e));
      if (!n) return t;
      if (n < t.length) throw new Error(`Can't fit ${e} into ${n} bytes.`);
      return $.zpad(t, n);
    },
    toNumber: (e) => {
      if (e > BigInt(Number.MAX_SAFE_INTEGER)) throw new Error(`Invalid cast: ${e} exceeds MAX_SAFE_INTEGER`);
      return Number(e);
    },
    toBigInt: (e) => {
      if (e > Number.MAX_SAFE_INTEGER) throw new Error(`Invalid cast: ${e} exceeds MAX_SAFE_INTEGER`);
      return BigInt(e);
    }
  };
  $ = {
    encode: (e) => new TextEncoder().encode(e),
    decode: (e) => new TextDecoder().decode(e),
    equals: (e, n) => e.length === n.length && e.every((t, o) => t === n[o]),
    zpad: (e, n, t = true) => t ? $.concat(new Uint8Array(n - e.length), e) : $.concat(e, new Uint8Array(n - e.length)),
    concat: (...e) => {
      const n = e.reduce((r, a) => r + a.length, 0), t = new Uint8Array(n);
      let o = 0;
      return e.forEach((r) => {
        t.set(r, o), o += r.length;
      }), t;
    }
  };
  zo = Object.freeze(Object.defineProperty({
    __proto__: null,
    b58: st,
    b64: Xt,
    bech32: ot,
    bignum: ge,
    bytes: $,
    hex: L,
    stripPrefix: at
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  ln = [
    [
      1,
      "Solana"
    ],
    [
      2,
      "Ethereum"
    ],
    [
      4,
      "Bsc"
    ],
    [
      5,
      "Polygon"
    ],
    [
      6,
      "Avalanche"
    ],
    [
      8,
      "Algorand"
    ],
    [
      13,
      "Klaytn"
    ],
    [
      14,
      "Celo"
    ],
    [
      15,
      "Near"
    ],
    [
      16,
      "Moonbeam"
    ],
    [
      19,
      "Injective"
    ],
    [
      20,
      "Osmosis"
    ],
    [
      21,
      "Sui"
    ],
    [
      22,
      "Aptos"
    ],
    [
      23,
      "Arbitrum"
    ],
    [
      24,
      "Optimism"
    ],
    [
      26,
      "Pythnet"
    ],
    [
      29,
      "Btc"
    ],
    [
      30,
      "Base"
    ],
    [
      32,
      "Sei"
    ],
    [
      38,
      "Linea"
    ],
    [
      39,
      "Berachain"
    ],
    [
      40,
      "Seievm"
    ],
    [
      44,
      "Unichain"
    ],
    [
      45,
      "Worldchain"
    ],
    [
      46,
      "Ink"
    ],
    [
      47,
      "HyperEVM"
    ],
    [
      48,
      "Monad"
    ],
    [
      50,
      "Mezo"
    ],
    [
      51,
      "Fogo"
    ],
    [
      52,
      "Sonic"
    ],
    [
      53,
      "Converge"
    ],
    [
      55,
      "Plume"
    ],
    [
      57,
      "XRPLEVM"
    ],
    [
      58,
      "Plasma"
    ],
    [
      59,
      "CreditCoin"
    ],
    [
      60,
      "Stacks"
    ],
    [
      63,
      "Moca"
    ],
    [
      64,
      "MegaETH"
    ],
    [
      66,
      "Xrpl"
    ],
    [
      67,
      "ZeroGravity"
    ],
    [
      68,
      "Tempo"
    ],
    [
      69,
      "Nexus"
    ],
    [
      71,
      "Arc"
    ],
    [
      73,
      "Hydration"
    ],
    [
      3104,
      "Wormchain"
    ],
    [
      4e3,
      "Cosmoshub"
    ],
    [
      4001,
      "Evmos"
    ],
    [
      4002,
      "Kujira"
    ],
    [
      4003,
      "Neutron"
    ],
    [
      4004,
      "Celestia"
    ],
    [
      4005,
      "Stargaze"
    ],
    [
      4006,
      "Seda"
    ],
    [
      4007,
      "Dymension"
    ],
    [
      4008,
      "Provenance"
    ],
    [
      4009,
      "Noble"
    ],
    [
      10002,
      "Sepolia"
    ],
    [
      10003,
      "ArbitrumSepolia"
    ],
    [
      10004,
      "BaseSepolia"
    ],
    [
      10005,
      "OptimismSepolia"
    ],
    [
      10006,
      "Holesky"
    ],
    [
      10007,
      "PolygonSepolia"
    ],
    [
      10009,
      "MonadTestnet"
    ],
    [
      65e3,
      "HyperCore"
    ]
  ];
  [Zt, it] = ee(ln);
  se = K(ln, [
    1,
    0
  ]);
  ze = K(ln);
  ke = (e) => se.has(e);
  te = (e) => ze.has(e);
  ct = function(e) {
    if (!te(e)) throw Error(`Unknown Wormhole chain id: ${e}`);
  };
  Jt = function(e) {
    if (!ke(e)) throw Error(`Unknown Wormhole chain: ${e}`);
  };
  let un, nr, tr, ft, rr;
  Qt = (e) => (ct(e), e);
  Ae = (e) => {
    switch (typeof e) {
      case "string":
        if (ke(e)) return se(e);
        break;
      case "number":
        if (te(e)) return e;
        break;
    }
    throw Error(`Cannot convert to ChainId: ${e}`);
  };
  lt = (e) => {
    switch (typeof e) {
      case "string":
        if (ke(e)) return e;
        break;
      case "number":
        if (te(e)) return ze(e);
        break;
      case "bigint":
        if (te(Number(e))) return ze.get(Number(e));
        break;
    }
    throw Error(`Cannot convert to Chain: ${e}`);
  };
  Ao = Object.freeze(Object.defineProperty({
    __proto__: null,
    asChainId: Qt,
    assertChain: Jt,
    assertChainId: ct,
    chainIdToChain: ze,
    chainIds: Zt,
    chainToChainId: se,
    chains: it,
    isChain: ke,
    isChainId: te,
    toChain: lt,
    toChainId: Ae
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  un = [
    [
      "Evm",
      [
        "Arbitrum",
        "Avalanche",
        "Base",
        "Bsc",
        "Celo",
        "Ethereum",
        "Klaytn",
        "Moonbeam",
        "Optimism",
        "Polygon",
        "Sepolia",
        "ArbitrumSepolia",
        "BaseSepolia",
        "OptimismSepolia",
        "Holesky",
        "PolygonSepolia",
        "Linea",
        "Berachain",
        "Seievm",
        "Unichain",
        "Worldchain",
        "Ink",
        "HyperEVM",
        "Monad",
        "Mezo",
        "Sonic",
        "Converge",
        "Plume",
        "XRPLEVM",
        "Plasma",
        "CreditCoin",
        "HyperCore",
        "Moca",
        "MegaETH",
        "MonadTestnet",
        "ZeroGravity",
        "Tempo",
        "Nexus",
        "Arc",
        "Hydration"
      ]
    ],
    [
      "Solana",
      [
        "Solana",
        "Pythnet",
        "Fogo"
      ]
    ],
    [
      "Cosmwasm",
      [
        "Cosmoshub",
        "Evmos",
        "Injective",
        "Kujira",
        "Osmosis",
        "Sei",
        "Wormchain",
        "Dymension",
        "Neutron",
        "Stargaze",
        "Celestia",
        "Seda",
        "Provenance",
        "Noble"
      ]
    ],
    [
      "Btc",
      [
        "Btc"
      ]
    ],
    [
      "Algorand",
      [
        "Algorand"
      ]
    ],
    [
      "Sui",
      [
        "Sui"
      ]
    ],
    [
      "Aptos",
      [
        "Aptos"
      ]
    ],
    [
      "Near",
      [
        "Near"
      ]
    ],
    [
      "Stacks",
      [
        "Stacks"
      ]
    ],
    [
      "Xrpl",
      [
        "Xrpl"
      ]
    ]
  ];
  Yt = Hn(un, 0);
  Ne = K(un);
  Me = K(un, [
    1,
    0
  ]);
  er = (e) => Ne.has(e);
  nr = [
    [
      "Evm",
      "hex"
    ],
    [
      "Solana",
      "base58"
    ],
    [
      "Cosmwasm",
      "bech32"
    ],
    [
      "Btc",
      "bech32"
    ],
    [
      "Algorand",
      "algorandAppId"
    ],
    [
      "Sui",
      "hex"
    ],
    [
      "Aptos",
      "hex"
    ],
    [
      "Near",
      "sha256"
    ],
    [
      "Stacks",
      "keccak256"
    ],
    [
      "Xrpl",
      "base58"
    ]
  ];
  ut = K(nr);
  So = Object.freeze(Object.defineProperty({
    __proto__: null,
    chainToPlatform: Me,
    isPlatform: er,
    platformToAddressFormat: ut,
    platformToChains: Ne,
    platforms: Yt
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  tr = [
    [
      "Mainnet",
      [
        [
          "Ethereum",
          "0x18084fbA666a33d37592fA2633fD49a74DD93a88"
        ],
        [
          "Solana",
          "6DNSN2BJsaPFdFFc1zP37kkeNe4Usc1Sqkzr9C9vPWcU"
        ],
        [
          "Polygon",
          "0x236aa50979D5f3De3Bd1Eeb40E81137F22ab794b"
        ],
        [
          "Arbitrum",
          "0x6c84a8f1c29108F47a79964b5Fe888D4f4D0dE40"
        ],
        [
          "Optimism",
          "0x6c84a8f1c29108F47a79964b5Fe888D4f4D0dE40"
        ],
        [
          "Base",
          "0x236aa50979D5f3De3Bd1Eeb40E81137F22ab794b"
        ]
      ]
    ]
  ];
  ft = K(tr);
  Eo = Object.freeze(Object.defineProperty({
    __proto__: null,
    tbtcTokens: ft
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  rr = [
    {
      name: "appIdPrefix",
      binary: "bytes",
      custom: $.encode("appID"),
      omit: true
    },
    {
      name: "appId",
      binary: "uint",
      size: 8
    }
  ];
  M = (_a = class {
    constructor(n, t = "hex") {
      __publicField(this, "address");
      this.address = typeof n == "string" ? M.stringToUint8Array(n, t) : n;
    }
    toNative(n) {
      return dt(n, this);
    }
    unwrap() {
      return this.address;
    }
    toString() {
      return L.encode(this.address, true);
    }
    toUint8Array() {
      return this.address;
    }
    toUniversalAddress() {
      return this;
    }
    equals(n) {
      return $.equals(this.address, n.address);
    }
    static isValidAddress(n, t = "hex") {
      return !Bt(() => M.stringToUint8Array(n, t));
    }
    static instanceof(n) {
      return typeof n == "object" && "constructor" in n && n.constructor.type === M.type;
    }
    static stringToUint8Array(n, t) {
      const o = (() => {
        switch (t) {
          case "hex":
            if (![
              40,
              2 * this.byteSize
            ].includes(n.length - (n.startsWith("0x") ? 2 : 0))) throw new Error(`string ${n} has invalid length for format ${t}`);
            return L.decode(n);
          case "base58":
            return st.decode(n);
          case "bech32":
            return ot.decodeToBytes(n).bytes;
          case "algorandAppId":
            return Et(O(rr, {
              appId: BigInt(n)
            }));
          case "sha256":
            return St(n);
          case "keccak256":
            return tn(n);
        }
      })();
      if (!o) throw new Error(`string ${n} could not be decoded for format ${t}`);
      if (o.length > M.byteSize) throw new Error(`string ${n} has invalid length for format ${t}`);
      return o.length < M.byteSize ? $.zpad(o, M.byteSize) : o;
    }
  }, __publicField(_a, "byteSize", 32), __publicField(_a, "type", "Universal"), __publicField(_a, "ZERO", new M(new Uint8Array(M.byteSize))), _a);
  or = function(e) {
    return typeof e == "object" && "setChain" in e;
  };
  const Se = /* @__PURE__ */ new Map();
  Co = function(e, n) {
    Se.has(e) || Se.set(e, n);
  };
  Io = function(e) {
    const n = Me.get(e);
    return Se.has(n);
  };
  dt = function(e, n) {
    const t = Me.get(e), o = Se.get(t);
    if (!o) throw new Error(`No native address type registered for platform ${t}, import the platform directly or, if using sdk package, import the addresses conditional export`);
    try {
      const r = new o(n);
      return or(r) && r.setChain(e), r;
    } catch (r) {
      const a = `Error parsing address as a native ${e} address: ${r.message}`;
      if (M.instanceof(n)) throw a;
      return new M(n).toNative(e);
    }
  };
  Bo = function(e, n) {
    const t = Me.get(e);
    return new M(n, ut.get(t));
  };
  Je = (e, n) => e ? `${e}:${n}` : n;
  G = /* @__PURE__ */ new Map();
  ar = function(e, n, t) {
    const o = Je(e, n);
    if (G.has(o)) throw new Error(`Payload type ${o} already registered`);
    G.set(o, t);
  };
  B = function(e, n) {
    for (const [t, o] of n) ar(e, t, o);
  };
  let yt;
  v = {
    binary: "uint",
    size: 32
  };
  yt = {
    binary: "uint",
    size: 2
  };
  N = (e) => ({
    ...yt,
    custom: {
      to: (n) => {
        if (n === 0) {
          if (!(e == null ? void 0 : e.allowNull)) throw new Error("ChainId 0 is not valid for this protocol and action");
          return null;
        }
        const t = lt(n), o = (e == null ? void 0 : e.allowedChains) ?? it;
        if (!o.includes(t)) throw new Error(`Chain ${t} not in allowed chains ${o}`);
        return t;
      },
      from: (n) => n == null ? 0 : se(n)
    }
  });
  To = (e) => ({
    ...yt,
    custom: {
      to: e,
      from: se(e)
    }
  });
  re = {
    binary: "uint",
    size: 4
  };
  fn = {
    binary: "uint",
    size: 8
  };
  sr = {
    to: (e) => new Date(Number(e * 1000n)),
    from: (e) => BigInt(e.getTime()) / 1000n
  };
  ht = {
    binary: "uint",
    size: 4
  };
  W = (e) => ({
    name: "payloadId",
    binary: "uint",
    size: 1,
    custom: e,
    omit: true
  });
  Re = {
    binary: "uint",
    size: 8
  };
  ir = class {
    constructor(n, t, o) {
      __publicField(this, "r");
      __publicField(this, "s");
      __publicField(this, "v");
      this.r = n, this.s = t, this.v = o;
    }
    encode() {
      return O(Qe, this);
    }
    static decode(n) {
      return F(Qe, n);
    }
  };
  (function(e) {
    function n(a) {
      return ce.getPublicKey(a);
    }
    e.toPubkey = n;
    function t(a, s) {
      if (s.length != 32) throw new Error("hash.length != 32");
      return ce.sign(s, a);
    }
    e.sign = t;
    function o(a, s, i) {
      const { r: f, s: l } = a;
      return ce.verify({
        r: f,
        s: l
      }, i, s);
    }
    e.validate = o;
    function r(a, s) {
      const { r: i, s: f, v: l } = a, g = new ce.Signature(i, f);
      return g.recovery = l, g.recoverPublicKey(s).toRawBytes();
    }
    e.recover = r;
  })($n || ($n = {}));
  let cr, lr;
  cr = [
    {
      name: "r",
      binary: "uint",
      size: 32
    },
    {
      name: "s",
      binary: "uint",
      size: 32
    },
    {
      name: "v",
      binary: "uint",
      size: 1
    }
  ];
  Qe = {
    binary: "bytes",
    layout: cr,
    custom: {
      to: (e) => new ir(e.r, e.s, e.v),
      from: (e) => ({
        r: e.r,
        s: e.s,
        v: e.v
      })
    }
  };
  y = {
    binary: "bytes",
    size: 32,
    custom: {
      to: (e) => new M(e),
      from: (e) => e.toUint8Array()
    }
  };
  lr = (e) => {
    const n = e.findIndex((t) => t !== 0);
    return -1 < n ? e.slice(n) : new Uint8Array([]);
  };
  ur = {
    to: $.decode,
    from: $.encode
  };
  mt = (e) => ({
    binary: "bytes",
    size: e,
    custom: {
      to: (n) => $.decode(lr(n)),
      from: (n) => $.zpad($.encode(n), e)
    }
  });
  fr = function(e) {
    const n = e.indexOf(":");
    return n !== -1 ? [
      e.slice(0, n),
      e.slice(n + 1)
    ] : [
      null,
      e
    ];
  };
  let dr;
  dr = [
    {
      name: "guardianIndex",
      binary: "uint",
      size: 1
    },
    {
      name: "signature",
      ...Qe
    }
  ];
  dn = [
    {
      name: "version",
      binary: "uint",
      size: 1,
      custom: 1,
      omit: true
    },
    {
      name: "guardianSet",
      ...ht
    },
    {
      name: "signatures",
      binary: "array",
      lengthSize: 1,
      layout: dr
    }
  ];
  gt = [
    {
      name: "timestamp",
      binary: "uint",
      size: 4
    },
    {
      name: "nonce",
      binary: "uint",
      size: 4
    },
    {
      name: "emitterChain",
      ...N()
    },
    {
      name: "emitterAddress",
      ...y
    },
    {
      name: "sequence",
      ...Re
    },
    {
      name: "consistencyLevel",
      binary: "uint",
      size: 1
    }
  ];
  yr = [
    ...dn,
    ...gt
  ];
  oe = function(e) {
    const n = G.get(e);
    if (!n) throw new Error(`No layout registered for payload type ${e}`);
    return n;
  };
  hr = function(e) {
    return {
      name: "payload",
      binary: "bytes",
      ...e === "Uint8Array" ? {} : {
        layout: oe(e)
      }
    };
  };
  xo = function(e) {
    const n = [
      ...yr,
      hr(e.payloadLiteral)
    ];
    return O(n, e);
  };
  Po = function(e, n) {
    if (e === "Uint8Array") return n;
    const t = oe(e);
    return O(t, n);
  };
  yn = function(e, n) {
    const t = (() => {
      if (Array.isArray(e[0])) return e.flatMap(([s, i]) => i.map((f) => Je(s, f)));
      if (typeof e[1] == "string") return e;
      const [r, a] = e;
      return a.map((s) => Je(r, s));
    })(), o = an(t.map((r) => oe(r)), !!n);
    return ((r) => {
      typeof r == "string" && (r = L.decode(r));
      const a = o(r);
      return Array.isArray(a) ? a.map((s) => t[s]) : a !== null ? t[a] : null;
    });
  };
  $o = function(e, n) {
    typeof n == "string" && (n = L.decode(n));
    const [t, o] = F(dn, n, false);
    for (let h = 1; h < t.signatures.length; ++h) if (t.signatures[h].guardianIndex <= t.signatures[h - 1].guardianIndex) throw new Error("Guardian signatures must be in ascending order of guardian set index");
    const r = o, [a, s] = F(gt, n.subarray(r), false), i = r + s, [f, l] = typeof e == "string" ? [
      e,
      Ee(e, n.subarray(i))
    ] : Ee(e, n.subarray(i)), [g, m] = fr(f), u = tn(n.slice(r));
    return {
      protocolName: g,
      payloadName: m,
      payloadLiteral: f,
      ...t,
      ...a,
      payload: l,
      hash: u
    };
  };
  Ee = function(e, n, t = 0) {
    return (() => {
      if (typeof n == "string" && (n = L.decode(n)), e === "Uint8Array") return n.slice(t);
      if (typeof e == "string") return F(oe(e), n.subarray(t));
      const o = e(n.slice(t));
      if (o === null) throw new Error(`Encoded data does not match any of the given payload types - ${n}`);
      return [
        o,
        F(oe(o), n.subarray(t))
      ];
    })();
  };
  ko = /* @__PURE__ */ (() => {
    const e = () => {
      const t = Array.from(G.keys()), o = t.map((r) => G.get(r));
      return [
        t,
        an(o, true)
      ];
    };
    let n = [];
    return (t) => (G.size !== n.length && ([n] = e()), n.reduce((r, a) => {
      try {
        r.push([
          a,
          Ee(a, t)
        ]);
      } catch {
      }
      return r;
    }, []));
  })();
  No = /* @__PURE__ */ (() => {
    const e = () => {
      const o = Array.from(G.keys()), r = o.map((a) => G.get(a));
      return [
        o,
        an(r, true)
      ];
    };
    let n = [], t = (o) => [];
    return (o) => (G.size !== n.length && ([n, t] = e()), typeof o == "string" && (o = L.decode(o)), t(o).map((a) => n[a]).reduce((a, s) => {
      try {
        a.push([
          s,
          Ee(s, o)
        ]);
      } catch {
      }
      return a;
    }, []));
  })();
  Mo = (e) => {
    const n = [
      {
        name: "timestamp",
        binary: "uint",
        size: 4
      },
      {
        name: "nonce",
        binary: "uint",
        size: 4
      },
      {
        name: "emitterChain",
        binary: "uint",
        size: 2
      },
      {
        name: "emitterAddress",
        ...y
      },
      {
        name: "sequence",
        ...Re
      },
      {
        name: "consistencyLevel",
        binary: "uint",
        size: 1
      }
    ], [t, o] = F(dn, e, false), [r, a] = F(n, e.subarray(o), false);
    return {
      ...t,
      ...r,
      payload: e.slice(a)
    };
  };
  kn = (e) => [
    W(1),
    {
      name: "token",
      binary: "bytes",
      layout: [
        {
          name: "address",
          ...y
        },
        {
          name: "amount",
          ...v
        }
      ]
    },
    {
      name: "sourceDomain",
      ...re
    },
    {
      name: "targetDomain",
      ...re
    },
    {
      name: "nonce",
      ...fn
    },
    {
      name: "caller",
      ...y
    },
    {
      name: "mintRecipient",
      ...y
    },
    Be({
      name: "payload",
      lengthSize: 2
    }, e)
  ];
  mr = [
    W(1),
    {
      name: "targetRelayerFee",
      ...v
    },
    {
      name: "toNativeTokenAmount",
      ...v
    },
    {
      name: "targetRecipient",
      ...y
    }
  ];
  gr = [
    [
      "DepositWithPayload",
      kn()
    ],
    [
      "TransferWithRelay",
      kn(mr)
    ]
  ];
  B("AutomaticCircleBridge", gr);
  let bt, br;
  bt = {
    binary: "uint",
    size: 4,
    custom: 0,
    omit: true
  };
  br = [
    {
      name: "messageBodyVersion",
      ...bt
    },
    {
      name: "burnToken",
      ...y
    },
    {
      name: "mintRecipient",
      ...y
    },
    {
      name: "amount",
      ...v
    },
    {
      name: "messageSender",
      ...y
    }
  ];
  Ye = [
    {
      name: "version",
      ...bt
    },
    {
      name: "sourceDomain",
      ...re
    },
    {
      name: "destinationDomain",
      ...re
    },
    {
      name: "nonce",
      ...fn
    },
    {
      name: "sender",
      ...y
    },
    {
      name: "recipient",
      ...y
    },
    {
      name: "destinationCaller",
      ...y
    },
    {
      name: "payload",
      binary: "bytes",
      layout: br
    }
  ];
  pr = [
    [
      "Message",
      Ye
    ]
  ];
  B("CircleBridge", pr);
  (function(e) {
    e.isCircleAttestation = (n) => n.message !== void 0, e.deserialize = (n) => {
      const t = F(Ye, n), o = L.encode(tn(n), true);
      return [
        t,
        o
      ];
    }, e.serialize = (n) => O(Ye, n);
  })(Nn || (Nn = {}));
  (function(e) {
    const n = "AutomaticCircleBridge", t = [
      "DepositWithPayload",
      "TransferWithRelay"
    ];
    e.getTransferDiscriminator = rn(() => yn([
      n,
      t
    ]));
  })(Mn || (Mn = {}));
  Ro = function(e) {
    return e.amount !== void 0 && e.from !== void 0 && e.to !== void 0;
  };
  let Rn, pt;
  Rn = {
    binary: "bytes",
    size: 32,
    custom: {
      to: (e) => be(e.byteLength).map((n) => String.fromCharCode(e[n])).join(""),
      from: (e) => new Uint8Array(e.split("").map((n) => n.charCodeAt(0)))
    }
  };
  pt = [
    {
      name: "token",
      binary: "bytes",
      layout: [
        {
          name: "amount",
          ...v
        },
        {
          name: "address",
          ...y
        },
        {
          name: "chain",
          ...N()
        }
      ]
    },
    {
      name: "to",
      binary: "bytes",
      layout: [
        {
          name: "address",
          ...y
        },
        {
          name: "chain",
          ...N()
        }
      ]
    }
  ];
  wt = [
    W(1),
    ...pt,
    {
      name: "fee",
      ...v
    }
  ];
  ie = (e) => [
    W(3),
    ...pt,
    {
      name: "from",
      ...y
    },
    Be({
      name: "payload"
    }, e)
  ];
  wr = [
    [
      "AttestMeta",
      [
        W(2),
        {
          name: "token",
          binary: "bytes",
          layout: [
            {
              name: "address",
              ...y
            },
            {
              name: "chain",
              ...N()
            }
          ]
        },
        {
          name: "decimals",
          binary: "uint",
          size: 1
        },
        {
          name: "symbol",
          ...Rn
        },
        {
          name: "name",
          ...Rn
        }
      ]
    ],
    [
      "Transfer",
      wt
    ],
    [
      "TransferWithPayload",
      ie()
    ]
  ];
  B("TokenBridge", wr);
  let vr;
  vr = Ut([
    "shouldWrapNative",
    "shouldUnwrapNative"
  ]);
  Ce = [
    {
      name: "recipientChain",
      binary: "uint",
      endianness: "little",
      size: 2
    },
    {
      name: "bridgeNonce",
      binary: "uint",
      endianness: "little",
      size: 4
    },
    {
      name: "feeTierStart",
      binary: "uint",
      endianness: "little",
      size: 3
    },
    {
      name: "feeTierFinish",
      binary: "uint",
      endianness: "little",
      size: 3
    },
    {
      name: "padding",
      binary: "bytes",
      size: 19
    },
    {
      name: "flags",
      ...vr
    }
  ];
  Lo = [
    {
      name: "flagSet",
      binary: "bytes",
      layout: Ce
    },
    {
      name: "startTokenAddress",
      ...y
    },
    {
      name: "cannonAssetAmount",
      ...v
    },
    {
      name: "finalTokenAddress",
      ...y
    },
    {
      name: "recipientAddress",
      ...y
    },
    {
      name: "destinationPorticoAddress",
      ...y
    },
    {
      name: "amountSpecified",
      ...v
    },
    {
      name: "minAmountStart",
      ...v
    },
    {
      name: "minAmountFinish",
      ...v
    },
    {
      name: "relayerFee",
      ...v
    }
  ];
  en = [
    {
      name: "flagSet",
      binary: "bytes",
      layout: Ce
    },
    {
      name: "finalTokenAddress",
      ...y
    },
    {
      name: "recipientAddress",
      ...y
    },
    {
      name: "cannonAssetAmount",
      ...v
    },
    {
      name: "minAmountFinish",
      ...v
    },
    {
      name: "relayerFee",
      ...v
    }
  ];
  zr = [
    [
      "Transfer",
      ie(en)
    ]
  ];
  B("PorticoBridge", zr);
  (function(e) {
    e.deserializePayload = (n) => F(en, n), e.serializePayload = (n) => O(en, n), e.deserializeFlagSet = (n) => F(Ce, n), e.serializeFlagSet = (n) => O(Ce, n);
  })(Ln || (Ln = {}));
  let vt, Fn, Ar, Sr, zt, Cr;
  vt = {
    binary: "bytes",
    layout: [
      {
        name: "size",
        binary: "uint",
        size: 4,
        custom: 96,
        omit: true
      },
      {
        name: "waste",
        binary: "uint",
        size: 31,
        custom: 0n,
        omit: true
      },
      {
        name: "version",
        binary: "uint",
        size: 1,
        custom: 0,
        omit: true
      },
      {
        name: "gasLimit",
        ...v
      },
      {
        name: "targetChainRefundPerGasUnused",
        ...v
      }
    ]
  };
  Fn = {
    binary: "bytes",
    layout: [
      {
        name: "chain",
        ...N()
      },
      {
        name: "address",
        ...y
      }
    ]
  };
  Ar = [
    {
      name: "chain",
      ...N()
    },
    {
      name: "emitterAddress",
      ...y
    },
    {
      name: "sequence",
      ...Re
    }
  ];
  Sr = [
    {
      name: "size",
      binary: "uint",
      size: 4,
      custom: 12,
      omit: true
    },
    {
      name: "domain",
      ...re
    },
    {
      name: "nonce",
      ...fn
    }
  ];
  zt = {
    binary: "switch",
    idSize: 1,
    idTag: "keyType",
    layouts: [
      [
        [
          1,
          "VAA"
        ],
        Ar
      ],
      [
        [
          2,
          "CCTP"
        ],
        Sr
      ]
    ]
  };
  Er = (e) => [
    W(1),
    {
      name: "target",
      ...Fn
    },
    Be({
      name: "payload",
      lengthSize: 4
    }, e),
    {
      name: "requestedReceiverValue",
      ...v
    },
    {
      name: "extraReceiverValue",
      ...v
    },
    {
      name: "executionInfo",
      ...vt
    },
    {
      name: "refund",
      ...Fn
    },
    {
      name: "refundDeliveryProvider",
      ...y
    },
    {
      name: "sourceDeliveryProvider",
      ...y
    },
    {
      name: "senderAddress",
      ...y
    },
    {
      name: "messageKeys",
      binary: "array",
      lengthSize: 1,
      layout: zt
    }
  ];
  Cr = [
    [
      "DeliveryInstruction",
      Er()
    ],
    [
      "RedeliveryInstruction",
      [
        W(2),
        {
          name: "deliveryVaaKey",
          binary: "bytes",
          layout: zt
        },
        {
          name: "targetChain",
          ...N()
        },
        {
          name: "newRequestedReceiverValue",
          ...v
        },
        {
          name: "newEncodedExecutionInfo",
          ...vt
        },
        {
          name: "newSourceDeliveryProvider",
          ...y
        },
        {
          name: "newSenderAddress",
          ...y
        }
      ]
    ]
  ];
  B("Relayer", Cr);
  Ir = [
    W(1),
    {
      name: "targetRelayerFee",
      ...v
    },
    {
      name: "toNativeTokenAmount",
      ...v
    },
    {
      name: "targetRecipient",
      ...y
    }
  ];
  Br = [
    [
      "TransferWithRelay",
      ie(Ir)
    ]
  ];
  B("AutomaticTokenBridge", Br);
  Fo = (e) => new Error(`Token ${e} is not a wrapped asset`);
  (function(e) {
    const n = "TokenBridge", t = [
      "Transfer",
      "TransferWithPayload"
    ], o = [
      "AttestMeta"
    ];
    [
      ...t,
      ...o
    ], e.getTransferDiscriminator = rn(() => yn([
      n,
      t
    ]));
  })(Un || (Un = {}));
  Gn || (Gn = {});
  On || (On = {});
  Uo = function(e) {
    return e.token !== void 0 && e.amount !== void 0 && e.from !== void 0 && e.to !== void 0;
  };
  Tr = [
    {
      name: "targetRecipient",
      ...y
    }
  ];
  xr = [
    [
      "TransferWithExecutorRelay",
      ie(Tr)
    ]
  ];
  B("ExecutorTokenBridge", xr);
  const Pr = [
    [
      "Add",
      1
    ],
    [
      "Subtract",
      2
    ],
    [
      "Unknown",
      3
    ]
  ], nn = {
    binary: "bytes",
    size: 20,
    custom: {
      to: (e) => L.encode(e, true),
      from: (e) => L.decode(e)
    }
  }, $r = [
    [
      "UpgradeContract",
      [
        false,
        [
          {
            name: "newContract",
            ...y
          }
        ]
      ]
    ],
    [
      "RegisterChain",
      [
        true,
        [
          {
            name: "foreignChain",
            ...N()
          },
          {
            name: "foreignAddress",
            ...y
          }
        ]
      ]
    ],
    [
      "RecoverChainId",
      [
        false,
        [
          {
            name: "evmChainId",
            binary: "uint",
            size: 32
          },
          {
            name: "newChainId",
            ...N({
              allowedChains: Ne("Evm")
            })
          }
        ]
      ]
    ],
    [
      "GuardianSetUpgrade",
      [
        true,
        [
          {
            name: "guardianSet",
            ...ht
          },
          {
            name: "guardians",
            binary: "array",
            lengthSize: 1,
            layout: nn
          }
        ]
      ]
    ],
    [
      "SetMessageFee",
      [
        false,
        [
          {
            name: "messageFee",
            binary: "uint",
            size: 32
          }
        ]
      ]
    ],
    [
      "TransferFees",
      [
        true,
        [
          {
            name: "amount",
            binary: "uint",
            size: 32
          },
          {
            name: "recipient",
            ...y
          }
        ]
      ]
    ],
    [
      "UpdateDefaultProvider",
      [
        false,
        [
          {
            name: "defaultProvider",
            ...y
          }
        ]
      ]
    ],
    [
      "RegisterEmitterAndDomain",
      [
        true,
        [
          {
            name: "emitterChain",
            ...N()
          },
          {
            name: "emitterAddress",
            ...y
          },
          {
            name: "domain",
            binary: "uint",
            size: 4
          }
        ]
      ]
    ],
    [
      "UpdateFinality",
      [
        false,
        [
          {
            name: "finality",
            binary: "uint",
            size: 1
          }
        ]
      ]
    ]
  ], We = {
    binary: "bytes",
    size: 32
  }, Dn = [
    {
      name: "contractAddr",
      ...y
    },
    {
      name: "codeId",
      binary: "uint",
      size: 8
    }
  ], kr = [
    [
      "StoreCode",
      [
        false,
        [
          {
            name: "wasmHash",
            ...We
          }
        ]
      ]
    ],
    [
      "InstantiateContract",
      [
        false,
        [
          {
            name: "instantiationParamsHash",
            ...We
          }
        ]
      ]
    ],
    [
      "MigrateContract",
      [
        false,
        [
          {
            name: "migrationParamsHash",
            ...We
          }
        ]
      ]
    ],
    [
      "AddWasmInstantiateAllowlist",
      [
        false,
        Dn
      ]
    ],
    [
      "DeleteWasmInstantiateAllowlist",
      [
        false,
        Dn
      ]
    ]
  ], Nr = (() => {
    const e = (r) => ({
      binary: "bytes",
      size: r,
      custom: ur
    }), n = [
      {
        name: "height",
        binary: "uint",
        size: 8
      }
    ], t = Qn(n), o = (r) => [
      {
        name: "name",
        ...e(r)
      },
      ...n
    ];
    return {
      binary: "bytes",
      custom: {
        to: (r) => F(o(r.length - t), r),
        from: (r) => O(o(r.name.length), r)
      }
    };
  })(), Mr = [
    [
      "ScheduleUpgrade",
      [
        false,
        Nr
      ]
    ],
    [
      "CancelUpgrade",
      [
        true,
        []
      ]
    ],
    [
      "SetIbcComposabilityMwContract",
      [
        false,
        [
          {
            name: "contractAddress",
            ...y
          }
        ]
      ]
    ]
  ], Rr = [
    [
      "ModifyBalance",
      [
        false,
        [
          {
            name: "sequence",
            ...Re
          },
          {
            name: "modifiedChain",
            ...N()
          },
          {
            name: "tokenChain",
            ...N()
          },
          {
            name: "tokenAddress",
            ...y
          },
          {
            name: "kind",
            ...Lt(Pr)
          },
          {
            name: "amount",
            ...v
          },
          {
            name: "reason",
            ...mt(32)
          }
        ]
      ]
    ]
  ], Lr = [
    [
      "ActionUpdateChannelChain",
      [
        false,
        [
          {
            name: "channelId",
            ...mt(64)
          },
          {
            name: "channelChain",
            ...N({
              allowedChains: Ne("Cosmwasm")
            })
          }
        ]
      ]
    ]
  ], Fr = [
    [
      "GeneralPurposeEvm",
      [
        false,
        [
          {
            name: "governanceContract",
            ...nn
          },
          {
            name: "targetContract",
            ...nn
          },
          {
            name: "payload",
            binary: "bytes",
            lengthSize: 2
          }
        ]
      ]
    ],
    [
      "GeneralPurposeSolana",
      [
        false,
        [
          {
            name: "governanceContract",
            ...y
          },
          {
            name: "payload",
            binary: "bytes"
          }
        ]
      ]
    ]
  ], At = [
    ...$r,
    ...kr,
    ...Mr,
    ...Rr,
    ...Lr,
    ...Fr
  ];
  Hn(At, 0);
  const Wn = Object.fromEntries(At), Ur = [
    [
      "WormholeCore",
      "Core"
    ],
    [
      "TokenBridge",
      "TokenBridge"
    ],
    [
      "NftBridge",
      "NftBridge"
    ],
    [
      "Relayer",
      "WormholeRelayer"
    ],
    [
      "CircleBridge",
      "CircleIntegration"
    ],
    [
      "IbcBridge",
      "IbcTranslator"
    ],
    [
      "IbcReceiver",
      "IbcReceiver"
    ],
    [
      "GlobalAccountant",
      "GlobalAccountant"
    ],
    [
      "GeneralPurposeGovernance",
      "GeneralPurposeGovernance"
    ],
    [
      "WormchainGovernance",
      "WasmdModule"
    ],
    [
      "GatewayGovernance",
      "GatewayModule"
    ]
  ], Gr = K(Ur), Or = (e) => ({
    to: e,
    from: (() => {
      const t = new Uint8Array(32), o = Gr(e);
      for (let r = 1; r <= o.length; ++r) t[32 - r] = o.charCodeAt(o.length - r);
      return t;
    })()
  }), Dr = (e, n) => ({
    to: e,
    from: n
  }), Wr = (e, n, t) => [
    {
      name: "protocol",
      binary: "bytes",
      custom: Or(e)
    },
    {
      name: "action",
      binary: "uint",
      size: 1,
      custom: Dr(n, t)
    },
    {
      name: "chain",
      ...N({
        allowNull: Wn[n][0]
      })
    },
    {
      name: "actionArgs",
      binary: "bytes",
      layout: Wn[n][1]
    }
  ], p = (e, n, t) => [
    n,
    Wr(e, n, t)
  ], Vr = [
    p("WormholeCore", "UpgradeContract", 1),
    p("WormholeCore", "GuardianSetUpgrade", 2),
    p("WormholeCore", "SetMessageFee", 3),
    p("WormholeCore", "TransferFees", 4),
    p("WormholeCore", "RecoverChainId", 5)
  ], jr = [
    p("TokenBridge", "RegisterChain", 1),
    p("TokenBridge", "UpgradeContract", 2),
    p("TokenBridge", "RecoverChainId", 3)
  ], _r = [
    p("NftBridge", "RegisterChain", 1),
    p("NftBridge", "UpgradeContract", 2),
    p("NftBridge", "RecoverChainId", 3)
  ], Hr = [
    p("Relayer", "RegisterChain", 1),
    p("Relayer", "UpgradeContract", 2),
    p("Relayer", "UpdateDefaultProvider", 3)
  ], Kr = [
    p("CircleBridge", "UpdateFinality", 1),
    p("CircleBridge", "RegisterEmitterAndDomain", 2),
    p("CircleBridge", "UpgradeContract", 3)
  ], qr = [
    p("IbcBridge", "ActionUpdateChannelChain", 1)
  ], Xr = [
    p("IbcReceiver", "ActionUpdateChannelChain", 1)
  ], Zr = [
    p("GlobalAccountant", "ModifyBalance", 1)
  ], Jr = [
    p("GeneralPurposeGovernance", "GeneralPurposeEvm", 1),
    p("GeneralPurposeGovernance", "GeneralPurposeSolana", 2)
  ], Qr = [
    p("WormchainGovernance", "StoreCode", 1),
    p("WormchainGovernance", "InstantiateContract", 2),
    p("WormchainGovernance", "MigrateContract", 3),
    p("WormchainGovernance", "AddWasmInstantiateAllowlist", 4),
    p("WormchainGovernance", "DeleteWasmInstantiateAllowlist", 5)
  ], Yr = [
    p("GatewayGovernance", "ScheduleUpgrade", 1),
    p("GatewayGovernance", "CancelUpgrade", 2),
    p("GatewayGovernance", "SetIbcComposabilityMwContract", 3)
  ];
  B("WormholeCore", Vr);
  B("TokenBridge", jr);
  B("NftBridge", _r);
  B("Relayer", Hr);
  B("CircleBridge", Kr);
  B("IbcBridge", qr);
  B("IbcReceiver", Xr);
  B("GlobalAccountant", Zr);
  B("GeneralPurposeGovernance", Jr);
  B("WormchainGovernance", Qr);
  B("GatewayGovernance", Yr);
  (function(e) {
    const n = "TBTCBridge", t = [
      "GatewayTransfer",
      "Transfer"
    ];
    [
      ...t
    ], e.getTransferDiscriminator = rn(() => yn([
      n,
      t
    ])), e.getNativeTbtcToken = (o) => {
      const r = ft.get("Mainnet", o);
      if (r) return {
        chain: o,
        address: dt(o, r)
      };
    };
  })(Vn || (Vn = {}));
  let no;
  eo = [
    {
      name: "recipient",
      ...y
    }
  ];
  no = [
    [
      "GatewayTransfer",
      ie(eo)
    ],
    [
      "Transfer",
      wt
    ]
  ];
  B("TBTCBridge", no);
  to = [
    {
      name: "gasLimit",
      binary: "uint",
      size: 16
    },
    {
      name: "msgValue",
      binary: "uint",
      size: 16
    }
  ];
  ro = [
    {
      name: "dropOff",
      binary: "uint",
      size: 16
    },
    {
      name: "recipient",
      ...y
    }
  ];
  oo = [
    {
      name: "nttManager",
      binary: "bytes",
      lengthSize: 1
    },
    {
      name: "recipient",
      binary: "bytes",
      lengthSize: 1
    },
    {
      name: "gasDropOff",
      binary: "uint",
      size: 16
    }
  ];
  ao = [
    {
      name: "request",
      binary: "switch",
      idSize: 1,
      idTag: "type",
      layouts: [
        [
          [
            1,
            "GasInstruction"
          ],
          to
        ],
        [
          [
            2,
            "GasDropOffInstruction"
          ],
          ro
        ],
        [
          [
            3,
            "StacksNttReceiveInstruction"
          ],
          oo
        ]
      ]
    }
  ];
  Go = [
    {
      name: "requests",
      binary: "array",
      layout: ao
    }
  ];
  so = [
    {
      name: "quote",
      binary: "switch",
      idSize: 4,
      idTag: "prefix",
      layouts: [
        [
          [
            1162948657,
            "EQ01"
          ],
          [
            {
              name: "quoterAddress",
              binary: "bytes",
              size: 20
            },
            {
              name: "payeeAddress",
              binary: "bytes",
              size: 32
            },
            {
              name: "srcChain",
              binary: "uint",
              size: 2
            },
            {
              name: "dstChain",
              binary: "uint",
              size: 2
            },
            {
              name: "expiryTime",
              binary: "uint",
              size: 8,
              custom: sr
            },
            {
              name: "baseFee",
              binary: "uint",
              size: 8
            },
            {
              name: "dstGasPrice",
              binary: "uint",
              size: 8
            },
            {
              name: "srcPrice",
              binary: "uint",
              size: 8
            },
            {
              name: "dstPrice",
              binary: "uint",
              size: 8
            }
          ]
        ]
      ]
    }
  ];
  Oo = [
    ...so,
    {
      name: "signature",
      binary: "bytes",
      size: 65
    }
  ];
  (function(e) {
    e.Pending = "pending", e.Failed = "failed", e.Unsupported = "unsupported", e.Submitted = "submitted", e.Underpaid = "underpaid", e.Aborted = "aborted";
  })(jn || (jn = {}));
  (function(e) {
    e.ERM1 = "ERM1", e.ERV1 = "ERV1", e.ERN1 = "ERN1", e.ERC1 = "ERC1", e.ERC2 = "ERC2";
  })(_n || (_n = {}));
  Do = async function(e) {
    const n = `${e}/capabilities`;
    try {
      const t = await fetch(n, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (!t.ok) throw new Error(`HTTP error! status: ${t.status}`);
      return await t.json();
    } catch {
      throw new Error("Failed to fetch capabilities.");
    }
  };
  Wo = async function(e, n, t, o) {
    const r = `${e}/quote`;
    try {
      const a = await fetch(r, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          srcChain: Ae(n),
          dstChain: Ae(t),
          relayInstructions: o
        })
      });
      if (!a.ok) throw new Error(`HTTP error! status: ${a.status}`);
      return await a.json();
    } catch {
      throw new Error("Failed to fetch signed quote.");
    }
  };
  Vo = async function(e, n, t) {
    const o = `${e}/status/tx`;
    try {
      const r = await fetch(o, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          txHash: n,
          chainId: Ae(t)
        })
      });
      if (!r.ok) throw new Error(`HTTP error! status: ${r.status}`);
      return await r.json();
    } catch {
      throw new Error(`Failed to fetch status for txHash: ${n}.`);
    }
  };
});
export {
  gr as $,
  ht as A,
  W as B,
  Re as C,
  Qe as D,
  ur as E,
  dt as F,
  lt as G,
  Xt as H,
  Me as I,
  Nn as J,
  Vn as K,
  xo as L,
  $o as M,
  Mn as N,
  Gn as O,
  Fo as P,
  On as Q,
  Ln as R,
  jn as S,
  Un as T,
  M as U,
  _n as V,
  ir as W,
  $n as X,
  Qt as Y,
  Jt as Z,
  ct as _,
  __tla,
  wo as a,
  ao as a$,
  Br as a0,
  yr as a1,
  Ut as a2,
  No as a3,
  go as a4,
  Qn as a5,
  Ve as a6,
  Ao as a7,
  ze as a8,
  Zt as a9,
  oe as aA,
  ke as aB,
  te as aC,
  or as aD,
  Ro as aE,
  er as aF,
  Uo as aG,
  an as aH,
  rn as aI,
  zr as aJ,
  Io as aK,
  ho as aL,
  vo as aM,
  Tr as aN,
  yn as aO,
  uo as aP,
  So as aQ,
  ut as aR,
  Ne as aS,
  Yt as aT,
  Ce as aU,
  en as aV,
  Lo as aW,
  so as aX,
  be as aY,
  Co as aZ,
  ar as a_,
  se as aa,
  it as ab,
  pr as ac,
  mr as ad,
  Ye as ae,
  Hn as af,
  Ir as ag,
  Er as ah,
  kn as ai,
  F as aj,
  Ee as ak,
  Mo as al,
  po as am,
  zo as an,
  co as ao,
  Lt as ap,
  xr as aq,
  ko as ar,
  Do as as,
  Wo as at,
  Vo as au,
  fo as av,
  bo as aw,
  lo as ax,
  ro as ay,
  to as az,
  ge as b,
  Go as b0,
  Po as b1,
  Oo as b2,
  oo as b3,
  Eo as b4,
  eo as b5,
  Bt as b6,
  Bo as b7,
  wr as b8,
  wt as b9,
  ie as ba,
  ee as bb,
  at as bc,
  mo as c,
  fr as d,
  gt as e,
  st as f,
  L as g,
  dn as h,
  Be as i,
  N as j,
  mt as k,
  $ as l,
  yo as m,
  G as n,
  Je as o,
  hr as p,
  K as q,
  B as r,
  O as s,
  Ae as t,
  y as u,
  v,
  re as w,
  fn as x,
  sr as y,
  To as z
};
