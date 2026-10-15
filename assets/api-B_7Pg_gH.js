var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { F as Ye, G as en, H as nn, J as Tn, k as Ve, d as tt, h as rt, s as oe, __tla as __tla_0 } from "./index-DyMqztrh.js";
let At, H, p, ne, Xe, ia, $t, Qr, Kn, W, Ce, Oe, Lt, vt, Ae, mn, Cn, na, hn, vn, wn, k, zn, bn, In, En, Mt, yn, Vr, de, St, Dn, Dt, Qt, Gt, bt, ra, Ur, Nn, Me, Nr, Br, Tr, te, ze, ee, Pt, oa, It, ca, He, _e, Ht, Zr, Gr, _r, Yt, Je, Lr, Kr, Vn, Se, Ct, pe, De, sa, $r, Hr, me, zt, re, Un, Vt, Ut, Ue, Bn, Jt, Xt, dn, F, be, aa, Wr, jr, xr, ht, er, ta, fa, ya, da, Fr, Dr, Or, Xr, kt, kr, ea, Pr, qr, Ir, st, _t, Qn, ae, Q, Gn, On, Ft, Xn, N, ye, Ze, Yr, Wn, jn, Jr, Rr, ua, ve, Ot, P, la, U, he, f, qn, B, O, Ge, A;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  var _a;
  de = (e) => [
    ...Array(e).keys()
  ];
  xr = function(e) {
    return [
      ...e.entries()
    ];
  };
  Nr = (e) => e.flat();
  Bn = (e, n) => e.map((t) => t[n]);
  Q = (e) => de(e[0].length).map((n) => de(e.length).map((t) => e[t][n]));
  Lr = (e, n) => n.map((t) => e[t]);
  Fr = (e, n, t) => {
    const a = new Set(Array.isArray(n) ? n : [
      n
    ]);
    return e.filter((r, o) => a.has(o) !== t);
  };
  Rr = function(e, n = false) {
    if (e.length === 0) throw new Error("Can't calculate median of empty array");
    const t = n ? e : [
      ...e
    ].sort((s, i) => s > i ? 1 : s < i ? -1 : 0), a = Math.floor(t.length / 2);
    if (t.length % 2 === 1) return t[a];
    const r = t[a - 1], o = t[a];
    if (typeof r == "bigint" && typeof o == "bigint") return (r + o) / 2n;
    if (typeof r == "number" && typeof o == "number") return (r + o) / 2;
    throw new Error("Can't calculate median of array with mixed number and bigint");
  };
  function at(e) {
    return [
      "string",
      "number",
      "symbol",
      "bigint",
      "boolean"
    ].includes(typeof e);
  }
  let tn, ot;
  tn = (e) => e.length === 2 && !Array.isArray(e[0]) && Array.isArray(e[1]);
  Me = (e) => e.length === 0 ? [] : Array.isArray(e[0]) ? e.map(([n, t]) => Array.isArray(t) ? (tn(t) ? Me(t) : t).map((a) => [
    n,
    a
  ].flat()) : [
    [
      n,
      t
    ]
  ]).flat() : tn(e) ? Me(e[1]).map((n) => [
    e[0],
    n
  ]) : e;
  ot = (e, n) => {
    const t = Me(e);
    if (t.length === 0) throw new Error("Invalid mapping: empty");
    const a = n === void 0 ? [
      de(t[0].length - 1),
      [
        t[0].length - 1
      ]
    ] : n.map((d) => typeof d == "number" ? [
      d
    ] : d);
    let r = [], o = true;
    const s = (d, b) => {
      const $ = Array.from(new Set(d[0]).values()), M = new Map($.map((T) => [
        T,
        []
      ]));
      for (const [T, L] of d[0].entries()) M.get(L).push(T);
      if (d.length === 1) {
        const T = Object.fromEntries($.map((L) => [
          L,
          M.get(L).map((c) => b[c].length === 1 ? b[c][0] : b[c])
        ]));
        if (o) {
          for (const L of M.values()) if (L.length > 1) return o = false, T;
          r.push(T);
        }
        return T;
      }
      const R = Q(d.slice(1));
      return Object.fromEntries($.map((T) => {
        const L = M.get(T), c = Q(L.map((m) => R[m])), u = L.map((m) => b[m]);
        return [
          T,
          s(c, u)
        ];
      }));
    }, i = Q(t), y = (d) => {
      const b = i[d];
      if (b === void 0) throw new Error(`Invalid shape: column ${d} does not exist`);
      return b;
    }, [l, g] = a.map((d) => d.map((b) => y(b)));
    if (l.length === 0) throw new Error("Invalid shape: empty key set");
    if (g.length === 0) throw new Error("Invalid shape: empty value set");
    for (const d of l) for (const b of d) if (!at(b)) throw new Error(`Invalid key: ${b} in ${d}`);
    const I = s(l, Q(g));
    if (o) for (const d of r) for (const b of Object.keys(d)) d[b] = d[b][0];
    return I;
  };
  H = function(e, n) {
    const t = (a) => {
      const r = ((...o) => o.reduce((s, i) => s ? s[i.toString()] ?? void 0 : void 0, a));
      return Object.assign(r, {
        has: (...o) => r(...o) !== void 0,
        get: (...o) => r(...o),
        subMap: (o) => t(a[o.toString()])
      });
    };
    return t(ot(e, n));
  };
  _e = function(e) {
    let n = null;
    return () => (n || (n = e()), n);
  };
  Gr = function(e, ...n) {
    let t = false;
    return () => {
      t || (t = true, e(...n));
    };
  };
  st = function(e) {
    try {
      return e(), false;
    } catch {
      return true;
    }
  };
  Or = function(e, n, t) {
    return e < n ? n : e > t ? t : e;
  };
  var it = [
    "int",
    "uint",
    "bytes",
    "array",
    "switch"
  ], Pn = "big", we = 6, _ = (e) => typeof e == "number" || typeof e == "bigint", q = (e) => e instanceof Uint8Array, kn = (e) => _(e) || q(e), K = (e) => it.includes(e == null ? void 0 : e.binary), ct = (e) => K(e) || Array.isArray(e) && e.every(K), lt = (e) => typeof (e == null ? void 0 : e.from) == "number", ut = (e) => typeof (e == null ? void 0 : e.from) == "bigint", ft = (e) => lt(e) || ut(e), X = (e) => q(e == null ? void 0 : e.from), $n = (e) => ft(e) || X(e), Mn = (e, n) => {
    if (e !== n) throw new Error(`size mismatch: layout size: ${e}, data size: ${n}`);
    return n;
  }, j = (e) => "layout" in e && e.layout !== void 0, xe = (e, n) => "size" in e && e.size !== void 0 ? Mn(e.size, n) : n, Ne = (e, n) => {
    if (e != n) throw new Error(`value mismatch: (constant) layout value: ${e}, data value: ${n}`);
  }, Le = (e, n, t) => {
    const a = (l, g) => g === void 0 ? [
      0,
      l.length
    ] : Array.isArray(g) ? g : [
      g,
      l.length
    ], [r, o] = a(e, t == null ? void 0 : t.customSlice), [s, i] = a(n, t == null ? void 0 : t.dataSlice), y = o - r;
    Mn(y, i - s);
    for (let l = 0; l < e.length; ++l) if (e[l + r] !== n[l + s]) throw new Error(`binary data mismatch: layout value: ${e}, offset: ${r}, data value: ${n}, offset: ${s}`);
  };
  function xn(e, n) {
    const t = n[e.idTag ?? "id"];
    return e.layouts.find(([a]) => (Array.isArray(a) ? a[1] : a) == t);
  }
  Ur = function(e, n) {
    const t = D(e, n);
    if (t === null) throw new Error(`coding error: couldn't calculate layout size for layout ${e} with data ${n}`);
    return t;
  };
  Nn = function(e) {
    return D(e, x);
  };
  var x = Symbol("staticCalc");
  function yt(e, n) {
    const t = [], a = D(e, n, t);
    if (a === null) throw new Error(`coding error: couldn't calculate layout size for layout ${e} with data ${n}`);
    return [
      a,
      t
    ];
  }
  function rn(e, n, t) {
    const a = (r) => (t !== void 0 && t.push(r), r);
    switch (e.binary) {
      case "int":
      case "uint":
        return e.size;
      case "bytes": {
        if ("size" in e && n === x) return e.size;
        const r = "lengthSize" in e ? e.lengthSize | 0 : 0;
        if (j(e)) {
          const { custom: s } = e, i = D(e.layout, s === void 0 ? n : typeof s.from == "function" ? n !== x ? a(s.from(n)) : x : s.from, t);
          return i === null ? "size" in e ? e.size ?? null : null : r + xe(e, i);
        }
        const { custom: o } = e;
        return q(o) ? r + o.length : X(o) ? r + o.from.length : n === x ? null : r + xe(e, o !== void 0 ? a(o.from(n)).length : n.length);
      }
      case "array": {
        const r = "length" in e ? e.length : void 0;
        if (n === x) {
          if (r !== void 0) {
            const s = D(e.layout, x, t);
            return s !== null ? r * s : null;
          }
          return null;
        }
        let o = 0;
        if (r !== void 0 && r !== n.length) throw new Error(`array length mismatch: layout length: ${r}, data length: ${n.length}`);
        "lengthSize" in e && e.lengthSize !== void 0 && (o += e.lengthSize);
        for (let s = 0; s < n.length; ++s) {
          const i = D(e.layout, n[s], t);
          if (i === null) return null;
          o += i;
        }
        return o;
      }
      case "switch": {
        if (n !== x) {
          const [o, s] = xn(e, n), i = D(s, n, t);
          return i !== null ? e.idSize + i : null;
        }
        let r = null;
        for (const [o, s] of e.layouts) {
          const i = D(s, x, t);
          if (r === null) r = i;
          else if (i !== r) return null;
        }
        return e.idSize + r;
      }
    }
  }
  function D(e, n, t) {
    if (K(e)) return rn(e, n, t);
    let a = 0;
    for (const r of e) {
      let o;
      if (n === x) o = x;
      else if (!("omit" in r) || !r.omit) {
        if (!(r.name in n)) throw new Error(`missing data for layout item: ${r.name}`);
        o = n[r.name];
      }
      const s = rn(r, o, t);
      if (s === null) {
        if (n !== x) throw new Error(`coding error: couldn't calculate size for layout item: ${r.name}`);
        return null;
      }
      a += s;
    }
    return a;
  }
  var ke = (e, n) => {
    e.bytes.set(n, e.offset), e.offset += n.length;
  }, an = (e) => e.bytesConversions[e.position++];
  U = function(e, n, t) {
    const [a, r] = yt(e, n), o = {
      bytes: t ?? new Uint8Array(a),
      offset: 0
    };
    if (ce(e, n, o, {
      bytesConversions: r,
      position: 0
    }), !t && o.offset !== o.bytes.length) throw new Error(`encoded data is shorter than expected: ${o.bytes.length} > ${o.offset}`);
    return t ? o.offset : o.bytes;
  };
  var on = 2 ** (we * 8);
  function V(e, n, t, a = Pn, r = false) {
    if (!r && e < 0) throw new Error(`Value ${e} is negative but unsigned`);
    if (typeof e == "number") {
      if (!Number.isInteger(e)) throw new Error(`Value ${e} is not an integer`);
      if (n > we) {
        if (e >= on) throw new Error(`Value ${e} is too large to be safely converted into an integer`);
        if (r && e < -on) throw new Error(`Value ${e} is too small to be safely converted into an integer`);
      }
    }
    const o = 2n ** BigInt(n * 8 - (r ? 1 : 0));
    if (e >= o) throw new Error(`Value ${e} is too large for ${n} bytes`);
    if (r && e < -o) throw new Error(`Value ${e} is too small for ${n} bytes`);
    for (let s = 0; s < n; ++s) t.bytes[t.offset + s] = Number(BigInt(e) >> BigInt(8 * (a === "big" ? n - s - 1 : s)) & 0xffn);
    t.offset += n;
  }
  function ce(e, n, t, a) {
    if (K(e)) sn(e, n, t, a);
    else for (const r of e) try {
      sn(r, n[r.name], t, a);
    } catch (o) {
      throw o.message = `when serializing item '${r.name}': ${o.message}`, o;
    }
  }
  function sn(e, n, t, a) {
    var _a2;
    switch (e.binary) {
      case "int":
      case "uint": {
        const r = _(e.custom) ? ("omit" in e && e.omit || Ne(e.custom, n), e.custom) : _((_a2 = e == null ? void 0 : e.custom) == null ? void 0 : _a2.from) ? e.custom.from : e.custom !== void 0 ? e.custom.from(n) : n;
        V(r, e.size, t, e.endianness, e.binary === "int");
        break;
      }
      case "bytes": {
        const r = t.offset;
        if ("lengthSize" in e && e.lengthSize !== void 0 && (t.offset += e.lengthSize), j(e)) {
          const { custom: o } = e;
          let s;
          o === void 0 ? s = n : typeof o.from != "function" ? s = o.from : s = an(a), ce(e.layout, s, t, a);
        } else {
          const { custom: o } = e;
          q(o) ? ("omit" in e && e.omit || Le(o, n), ke(t, o)) : X(o) ? ke(t, o.from) : ke(t, o !== void 0 ? an(a) : n);
        }
        if ("lengthSize" in e && e.lengthSize !== void 0) {
          const o = t.offset - r - e.lengthSize, s = t.offset;
          t.offset = r, V(o, e.lengthSize, t, e.lengthEndianness), t.offset = s;
        } else xe(e, t.offset - r);
        break;
      }
      case "array": {
        if ("length" in e && e.length !== n.length) throw new Error(`array length mismatch: layout length: ${e.length}, data length: ${n.length}`);
        "lengthSize" in e && e.lengthSize !== void 0 && V(n.length, e.lengthSize, t, e.lengthEndianness);
        for (let r = 0; r < n.length; ++r) ce(e.layout, n[r], t, a);
        break;
      }
      case "switch": {
        const [r, o] = xn(e, n), s = Array.isArray(r) ? r[0] : r;
        V(s, e.idSize, t, e.idEndianness), ce(o, n, t, a);
        break;
      }
    }
  }
  function Ln(e) {
    const n = e.custom;
    if (!("cachedSerializedFrom" in n) && (n.cachedSerializedFrom = U(e.layout, n.from), "size" in e && e.size !== void 0 && e.size !== n.cachedSerializedFrom.length)) throw new Error("Layout specification error: custom.from does not serialize to specified size");
    return n.cachedSerializedFrom;
  }
  F = function(e, n, t) {
    const a = t ?? true, r = {
      bytes: n,
      offset: 0,
      end: n.length
    }, o = Y(e, r);
    if (a && r.offset !== r.end) throw new Error(`encoded data is longer than expected: ${r.end} > ${r.offset}`);
    return a ? o : [
      o,
      r.offset
    ];
  };
  function le(e, n) {
    const t = e.offset + n;
    if (t > e.end) throw new Error(`chunk is shorter than expected: ${e.end} < ${t}`);
    e.offset = t;
  }
  function Y(e, n) {
    if (!Array.isArray(e)) return cn(e, n);
    let t = {};
    for (const a of e) try {
      (a.omit ? {} : t)[a.name] = cn(a, n);
    } catch (r) {
      throw r.message = `when deserializing item '${a.name}': ${r.message}`, r;
    }
    return t;
  }
  function se(e, n, t = Pn, a = false) {
    let r = 0n;
    for (let o = 0; o < n; ++o) r |= BigInt(e.bytes[e.offset + o]) << BigInt(8 * (t === "big" ? n - o - 1 : o));
    return a && e.bytes[e.offset + (t === "big" ? 0 : n - 1)] & 128 && (r -= 1n << BigInt(8 * n)), le(e, n), n > we ? r : Number(r);
  }
  function cn(e, n) {
    switch (e.binary) {
      case "int":
      case "uint": {
        const t = se(n, e.size, e.endianness, e.binary === "int"), { custom: a } = e;
        return _(a) ? (Ne(a, t), a) : _(a == null ? void 0 : a.from) ? (Ne(a.from, t), a.to) : a !== void 0 ? a.to(t) : t;
      }
      case "bytes": {
        const t = "lengthSize" in e && e.lengthSize !== void 0 ? se(n, e.lengthSize, e.lengthEndianness) : e == null ? void 0 : e.size;
        if (j(e)) {
          const { custom: i } = e, y = n.offset;
          let l;
          if (t === void 0) l = Y(e.layout, n);
          else {
            const g = {
              ...n,
              end: n.offset + t
            };
            if (le(n, t), l = Y(e.layout, g), g.offset !== g.end) throw new Error(`read less data than expected: ${g.offset - n.offset} < ${t}`);
          }
          return i !== void 0 ? typeof i.from != "function" ? (Le(Ln(e), n.bytes, {
            dataSlice: [
              y,
              n.offset
            ]
          }), i.to) : i.to(l) : l;
        }
        const { custom: a } = e;
        {
          let i, y;
          if (q(a) ? i = a : X(a) && (i = a.from, y = a.to), i !== void 0) {
            const l = t ?? i.length, g = n.bytes.subarray(n.offset, n.offset + l);
            return Le(i, g), le(n, l), y ?? i;
          }
        }
        const r = n.offset, o = t !== void 0 ? n.offset + t : n.end;
        le(n, o - r);
        const s = n.bytes.subarray(r, o);
        return a !== void 0 ? a.to(s) : s;
      }
      case "array": {
        let t = [];
        const { layout: a } = e, r = () => {
          const s = Y(a, n);
          t.push(s);
        };
        let o = null;
        if ("length" in e && e.length !== void 0 ? o = e.length : "lengthSize" in e && e.lengthSize !== void 0 && (o = se(n, e.lengthSize, e.lengthEndianness)), o !== null) for (let s = 0; s < o; ++s) r();
        else for (; n.offset < n.end; ) r();
        return t;
      }
      case "switch": {
        const t = se(n, e.idSize, e.idEndianness), { layouts: a } = e;
        if (a.length === 0) throw new Error("switch item has no layouts");
        const r = typeof a[0][0] == "number", o = a.find(([l]) => r ? l === t : l[0] === t);
        if (o === void 0) throw new Error(`unknown id value: ${t}`);
        const [s, i] = o, y = Y(i, n);
        return {
          [e.idTag ?? "id"]: r ? t : s[1],
          ...y
        };
      }
    }
  }
  Dr = (e) => Rn(e, true);
  Wr = (e) => Rn(e, false);
  Vr = function(e, n) {
    return ue(e, n);
  };
  function je(e, n) {
    switch (e.binary) {
      case "bytes":
        if (j(e)) {
          const { custom: t } = e;
          if (t === void 0) {
            const { layout: r } = e;
            if (K(r)) return je(r, n);
            const o = Fe(r, n);
            return o.length > 0 ? {
              ...e,
              layout: o
            } : null;
          }
          const a = typeof t.from != "function";
          return n && a || !n && !a ? e : null;
        }
      case "int":
      case "uint": {
        const { custom: t } = e, a = kn(t) || $n(t);
        return n && a || !n && !a ? e : null;
      }
      case "array": {
        const t = Fn(e.layout, n);
        return t !== null ? {
          ...e,
          layout: t
        } : null;
      }
      case "switch": {
        const t = e.layouts.reduce((a, [r, o]) => {
          const s = Fe(o, n);
          return s.length > 0 ? [
            ...a,
            [
              r,
              s
            ]
          ] : a;
        }, []);
        return {
          ...e,
          layouts: t
        };
      }
    }
  }
  function Fe(e, n) {
    return e.reduce((t, a) => {
      const r = je(a, n);
      return r !== null ? [
        ...t,
        r
      ] : t;
    }, []);
  }
  function Fn(e, n) {
    return Array.isArray(e) ? Fe(e, n) : je(e, n);
  }
  function Rn(e, n) {
    return Fn(e, n);
  }
  function ln(e, n) {
    switch (e.binary) {
      case "bytes":
        if (j(e)) {
          const { custom: t } = e;
          return t === void 0 || typeof t.from != "function" ? ue(e.layout, t ? t.from : n) : n;
        }
      case "int":
      case "uint": {
        const { custom: t } = e;
        return (e == null ? void 0 : e.omit) ? void 0 : kn(t) ? t : $n(t) ? t.to : n;
      }
      case "array":
        return Array.isArray(n) ? n.map((t) => ue(e.layout, t)) : void 0;
      case "switch": {
        const t = n[e.idTag ?? "id"], [a, r] = e.layouts.find(([o]) => (Array.isArray(o) ? o[1] : o) == t);
        return {
          [e.idTag ?? "id"]: t,
          ...ue(r, n)
        };
      }
    }
  }
  function ue(e, n) {
    if (n = n ?? {}, K(e)) return ln(e, n);
    const t = {};
    for (const a of e) {
      const r = ln(a, n[a.name] ?? {});
      r !== void 0 && (t[a.name] = r);
    }
    return t;
  }
  He = function(e, n) {
    const [t, a] = mt(e);
    if (!t && !n) throw new Error("Cannot uniquely distinguished the given layouts");
    return n ? a : (r) => {
      const o = a(r);
      return o.length === 0 ? null : o[0];
    };
  };
  function Re(e) {
    return e.reduce((n, t) => n | BigInt(1) << BigInt(t), BigInt(0));
  }
  function ie(e) {
    const n = [];
    for (let t = 0n; e > 0n; e >>= 1n, ++t) e & 1n && n.push(Number(t));
    return n;
  }
  function S(e) {
    let n = 0;
    for (; e > 0n; e >>= 1n) n += Number(e & 1n);
    return n;
  }
  var un = (e) => e > 0 ? 2 ** (8 * e) - 1 : 1 / 0;
  function fn(e, n, t) {
    var _a2;
    switch (e.binary) {
      case "int":
      case "uint": {
        const a = _(e.custom) ? e.custom : _((_a2 = e == null ? void 0 : e.custom) == null ? void 0 : _a2.from) ? e.custom.from : null;
        if (a !== null && n !== null) {
          const r = {
            bytes: new Uint8Array(e.size),
            offset: 0
          };
          V(a, e.size, r, e.endianness, e.binary === "int"), t.push([
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
        const a = "lengthSize" in e ? e.lengthSize | 0 : 0;
        let r, o;
        if (j(e)) {
          const { custom: i } = e;
          if (i !== void 0 && typeof i.from != "function") r = Ln(e), o = r.length;
          else {
            const y = Nn(e.layout);
            y !== null && (o = y);
          }
        } else {
          const { custom: i } = e;
          q(i) ? (r = i, o = i.length) : X(i) && (r = i.from, o = i.from.length);
        }
        if (a > 0 && n !== null) {
          if (o !== void 0) {
            const i = {
              bytes: new Uint8Array(a),
              offset: 0
            }, y = e.lengthEndianness;
            V(o, a, i, y, false), t.push([
              n,
              i.bytes
            ]);
          }
          n += a;
        }
        if (r !== void 0) return n !== null && t.push([
          n,
          r
        ]), [
          a + r.length,
          a + r.length
        ];
        const s = "size" in e && e.size !== void 0 ? [
          e.size,
          e.size
        ] : void 0;
        if (j(e)) {
          const i = fe(e.layout, n, t);
          return s ?? [
            a + i[0],
            a + i[1]
          ];
        }
        return s ?? [
          a,
          un(a)
        ];
      }
      case "array": {
        if ("length" in e) {
          let r = [];
          const o = fe(e.layout, 0, r);
          if (n !== null) if (o[0] !== o[1]) {
            if (e.length > 0) for (const [s, i] of r) t.push([
              n + s,
              i
            ]);
          } else for (let s = 0; s < e.length; ++s) for (const [i, y] of r) t.push([
            n + i + s * o[0],
            y
          ]);
          return [
            e.length * o[0],
            e.length * o[1]
          ];
        }
        const a = e.lengthSize | 0;
        return [
          a,
          un(a)
        ];
      }
      case "switch": {
        const a = e.layouts.map((i) => []), { idSize: r, idEndianness: o } = e, s = e.layouts.map(([i, y], l) => {
          const g = Array.isArray(i) ? i[0] : i;
          if (n !== null) {
            const d = {
              bytes: new Uint8Array(r),
              offset: 0
            };
            V(g, r, d, o), a[l].push([
              0,
              d.bytes
            ]);
          }
          const I = fe(y, n !== null ? r : null, a[l]);
          return [
            I[0] + r,
            I[1] + r
          ];
        });
        return n !== null && a.every((i) => i.length > 0) && (() => {
          const i = Math.min(...a.map((l) => l.at(-1)[0] + l.at(-1)[1].length)), y = a.map((l) => 0);
          for (let l = 0; l < i; ) {
            let g = null, I = 0;
            for (; I < a.length; ) {
              let d = y[I];
              const b = a[I], [$, M] = b[d];
              if ($ + M.length <= l) {
                if (++d, d === b.length) return;
                y[I] = d, l = b[d][0];
                break;
              }
              const R = M[l - $];
              if (g === null && (g = R), R !== g) {
                ++l;
                break;
              }
              ++I;
            }
            I === a.length && (t.push([
              n + l,
              new Uint8Array([
                g
              ])
            ]), ++l);
          }
        })(), [
          Math.min(...s.map(([i]) => i)),
          Math.max(...s.map(([i, y]) => y))
        ];
      }
    }
  }
  function fe(e, n, t) {
    if (!Array.isArray(e)) return fn(e, n, t);
    let a = [
      0,
      0
    ];
    for (const r of e) {
      const o = fn(r, n, t);
      a[0] += o[0], a[1] += o[1], n !== null && (n = o[0] === o[1] ? n + o[0] : null);
    }
    return a;
  }
  function dt(e) {
    const n = /* @__PURE__ */ new Map();
    let t = [];
    const a = (r) => {
      for (; t.length > 0 && t[0][0] < r; ) {
        const o = t[0][0] + 1, s = t.findIndex(([i]) => o <= i);
        s === -1 ? t = [] : t.splice(0, s), n.set(o, Re(t.map(([, i]) => i)));
      }
    };
    for (const [[r, o], s] of e) {
      a(r);
      const i = t.findIndex(([y]) => y > o);
      i === -1 ? t.push([
        o,
        s
      ]) : t.splice(i, 0, [
        o,
        s
      ]), n.set(r, Re(t.map(([, y]) => y)));
    }
    return a(1 / 0), n;
  }
  function mt(e) {
    if (e.length === 0) throw new Error("Cannot discriminate empty set of layouts");
    const n = 0n, t = (1n << BigInt(e.length)) - 1n, a = e.map(() => []), r = e.map((c, u) => fe(c, 0, a[u])), o = r.map((c, u) => [
      c,
      u
    ]).sort(([[c]], [[u]]) => c - u), s = (() => {
      let c = t;
      const u = /* @__PURE__ */ new Map();
      for (const [[m], v] of o) c ^= 1n << BigInt(v), u.set(m, c);
      return u;
    })(), i = dt(o), y = e.length - Math.max(...[
      ...i.values()
    ].map((c) => S(c))), l = (c) => {
      let u = t;
      for (const [m, v] of s) {
        if (c < m) break;
        u = v;
      }
      return u;
    }, g = (c) => {
      let u = n;
      for (const [m, v] of i) {
        if (c < m) break;
        u = v;
      }
      return u;
    }, I = Array.from({
      length: Math.max(...a.map((c) => c.length > 0 ? c.at(-1)[0] + c.at(-1)[1].length : 0))
    }).map(() => []);
    for (let c = 0; c < a.length; ++c) for (const [u, m] of a[c]) for (let v = 0; v < m.length; ++v) I[u + v].push([
      m[v],
      c
    ]);
    let d = [];
    for (const [c, u] of I.entries()) {
      const m = l(c), v = m ^ Re(u.map(([, w]) => w)), E = t ^ m, z = /* @__PURE__ */ new Map();
      for (const [w, G] of u) z.has(w) || z.set(w, n), z.set(w, z.get(w) | 1n << BigInt(G));
      let C = e.length - Math.max(S(v), S(E));
      for (const w of z.values()) {
        const G = u.length - S(w) + S(E);
        C = Math.min(C, G);
      }
      if (C !== 0) {
        if (C === e.length - 1) return [
          true,
          (w) => ie(w.length <= c ? E : z.get(w[c]) ?? n)
        ];
        d.push([
          C,
          c,
          E,
          z,
          v
        ]);
      }
    }
    if (y === e.length - 1) return [
      true,
      (c) => ie(g(c.length))
    ];
    d.sort(([c], [u]) => u - c);
    let b = true;
    const $ = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map(), R = (c, u) => {
      $.set(c, u), M.has(S(c)) || M.set(S(c), []), M.get(S(c)).push(c);
    }, T = (c, u) => {
      if (S(c) <= 1 || $.has(c)) return;
      let m = 0;
      const v = /* @__PURE__ */ new Map();
      for (const z of ie(c)) {
        const C = r[z][0], w = i.get(C) & c;
        v.set(C, w), m = Math.max(m, S(w));
      }
      m = S(c) - m;
      const E = [];
      for (const [z, C, w, G, Ie] of u) {
        const Z = /* @__PURE__ */ new Map();
        let Qe = 0;
        for (const [Te, Be] of G) {
          const Pe = Be & c;
          S(Pe) > 0 && (Z.set(Te, Pe), Qe += S(Pe));
        }
        const Ee = w & c;
        let J = Z.size > 0 ? z : 0;
        for (const Te of Z.values()) {
          const Be = Qe - S(Te) + S(Ee);
          J = Math.min(J, Be);
        }
        if (J !== 0) {
          if (J === S(c) - 1) {
            R(c, [
              C,
              Ee,
              Z
            ]);
            return;
          }
          E.push([
            J,
            C,
            Ee,
            Z,
            Ie & c
          ]);
        }
      }
      if (m === S(c) - 1) {
        R(c, "size");
        return;
      }
      if (E.sort(([z], [C]) => C - z), E.length > 0 && E[0][0] >= m) {
        const [, z, C, w, G] = E[0];
        R(c, [
          z,
          C,
          w
        ]), T(C, E);
        for (const Ie of w.values()) T(Ie | G, E.slice(1));
        return;
      }
      if (m > 0) {
        R(c, "size");
        for (const z of v.values()) T(z, E);
        return;
      }
      R(c, "indistinguishable"), b = false;
    };
    T(t, d);
    const L = (c) => {
      for (let u = S(c) + 1; u < e.length - 2; ++u) for (const m of M.get(u) ?? []) if ((c & m) == c) return $.get(m);
      throw new Error("Implementation error in layout discrimination algorithm");
    };
    return [
      b,
      (c) => {
        let u = t, m = $.get(u);
        for (; m !== "indistinguishable"; ) {
          if (m === "size") u &= g(c.length);
          else {
            const [v, E, z] = m;
            if (c.length <= v) u &= E;
            else {
              const C = c[v];
              for (const [w, G] of z) w !== C && (u ^= u & G);
              u ^= u & E;
            }
          }
          if (S(u) <= 1) break;
          m = $.get(u) ?? L(u);
        }
        return ie(u);
      }
    ];
  }
  ve = (e, n) => ({
    ...e,
    binary: "bytes",
    ...n === void 0 ? {} : ct(n) ? {
      layout: n
    } : n instanceof Uint8Array || X(n) || !Array.isArray(n) ? {
      custom: n
    } : {
      layout: n[0],
      custom: n[1]
    }
  });
  ht = function(e, n) {
    const t = Object.fromEntries(e.map(([r, o]) => [
      o,
      r
    ])), a = Object.fromEntries(e);
    return {
      binary: "uint",
      size: (n == null ? void 0 : n.size) ?? 1,
      endianness: (n == null ? void 0 : n.endianness) ?? "big",
      custom: {
        to: (r) => {
          const o = t[r];
          if (o === void 0) throw new Error(`Invalid enum value: ${r}`);
          return o;
        },
        from: (r) => a[r]
      }
    };
  };
  var gt = (e) => ({
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
          ve({
            name: "value"
          }, e)
        ]
      ]
    ]
  });
  _r = function(e) {
    return {
      binary: "bytes",
      layout: gt(e),
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
  bt = function(e, n) {
    return {
      binary: "uint",
      size: n ?? Math.ceil(e.length / 8),
      custom: {
        to: (t) => {
          const a = {};
          for (let r = 0; r < e.length; ++r) e[r] && (a[e[r]] = (BigInt(t) & 1n << BigInt(r)) !== 0n);
          return a;
        },
        from: (t) => {
          let a = 0n;
          for (let r = 0; r < e.length; ++r) e[r] && t[e[r]] && (a |= 1n << BigInt(r));
          return e.length > we ? a : Number(a);
        }
      }
    };
  };
  let pt, wt, Ke;
  Gn = (e, n) => n.startsWith(e) ? n.slice(e.length) : n;
  pt = /^(?:0x)?[0-9a-fA-F]+$/;
  N = {
    valid: (e) => pt.test(e),
    decode: (e) => nn.decode(Gn("0x", e).toUpperCase()),
    encode: (e, n = false) => (e = typeof e == "string" ? B.encode(e) : e, (n ? "0x" : "") + nn.encode(e).toLowerCase())
  };
  wt = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/;
  vt = {
    valid: (e) => wt.test(e),
    decode: en.decode,
    encode: (e) => en.encode(typeof e == "string" ? B.encode(e) : e)
  };
  On = {
    decode: Ye.decode,
    encode: (e) => Ye.encode(typeof e == "string" ? B.encode(e) : e)
  };
  ye = {
    decode: (e) => (typeof e != "string" && (e = N.encode(e, true)), e === "" || e === "0x" ? 0n : BigInt(e)),
    encode: (e, n = false) => ye.toString(e, n),
    toString: (e, n = false) => {
      let t = e.toString(16);
      return t = t.length % 2 === 1 ? t = "0" + t : t, n ? "0x" + t : t;
    },
    toBytes: (e, n) => {
      typeof e == "number" && (e = ye.toBigInt(e));
      const t = N.decode(ye.toString(e));
      if (!n) return t;
      if (n < t.length) throw new Error(`Can't fit ${e} into ${n} bytes.`);
      return B.zpad(t, n);
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
  B = {
    encode: (e) => new TextEncoder().encode(e),
    decode: (e) => new TextDecoder().decode(e),
    equals: (e, n) => e.length === n.length && e.every((t, a) => t === n[a]),
    zpad: (e, n, t = true) => t ? B.concat(new Uint8Array(n - e.length), e) : B.concat(e, new Uint8Array(n - e.length)),
    concat: (...e) => {
      const n = e.reduce((r, o) => r + o.length, 0), t = new Uint8Array(n);
      let a = 0;
      return e.forEach((r) => {
        t.set(r, a), a += r.length;
      }), t;
    }
  };
  jr = Object.freeze(Object.defineProperty({
    __proto__: null,
    b58: On,
    b64: vt,
    bech32: Tn,
    bignum: ye,
    bytes: B,
    hex: N,
    stripPrefix: Gn
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  Ke = [
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
  [zt, Un] = Q(Ke);
  re = H(Ke, [
    1,
    0
  ]);
  me = H(Ke);
  ze = (e) => re.has(e);
  ee = (e) => me.has(e);
  Dn = function(e) {
    if (!ee(e)) throw Error(`Unknown Wormhole chain id: ${e}`);
  };
  St = function(e) {
    if (!ze(e)) throw Error(`Unknown Wormhole chain: ${e}`);
  };
  let qe, Et, Tt, _n, Bt;
  At = (e) => (Dn(e), e);
  he = (e) => {
    switch (typeof e) {
      case "string":
        if (ze(e)) return re(e);
        break;
      case "number":
        if (ee(e)) return e;
        break;
    }
    throw Error(`Cannot convert to ChainId: ${e}`);
  };
  Wn = (e) => {
    switch (typeof e) {
      case "string":
        if (ze(e)) return e;
        break;
      case "number":
        if (ee(e)) return me(e);
        break;
      case "bigint":
        if (ee(Number(e))) return me.get(Number(e));
        break;
    }
    throw Error(`Cannot convert to Chain: ${e}`);
  };
  Hr = Object.freeze(Object.defineProperty({
    __proto__: null,
    asChainId: At,
    assertChain: St,
    assertChainId: Dn,
    chainIdToChain: me,
    chainIds: zt,
    chainToChainId: re,
    chains: Un,
    isChain: ze,
    isChainId: ee,
    toChain: Wn,
    toChainId: he
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  qe = [
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
  Ct = Bn(qe, 0);
  Se = H(qe);
  Ae = H(qe, [
    1,
    0
  ]);
  It = (e) => Se.has(e);
  Et = [
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
  Vn = H(Et);
  Kr = Object.freeze(Object.defineProperty({
    __proto__: null,
    chainToPlatform: Ae,
    isPlatform: It,
    platformToAddressFormat: Vn,
    platformToChains: Se,
    platforms: Ct
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  Tt = [
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
  _n = H(Tt);
  qr = Object.freeze(Object.defineProperty({
    __proto__: null,
    tbtcTokens: _n
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  Bt = [
    {
      name: "appIdPrefix",
      binary: "bytes",
      custom: B.encode("appID"),
      omit: true
    },
    {
      name: "appId",
      binary: "uint",
      size: 8
    }
  ];
  k = (_a = class {
    constructor(n, t = "hex") {
      __publicField(this, "address");
      this.address = typeof n == "string" ? k.stringToUint8Array(n, t) : n;
    }
    toNative(n) {
      return jn(n, this);
    }
    unwrap() {
      return this.address;
    }
    toString() {
      return N.encode(this.address, true);
    }
    toUint8Array() {
      return this.address;
    }
    toUniversalAddress() {
      return this;
    }
    equals(n) {
      return B.equals(this.address, n.address);
    }
    static isValidAddress(n, t = "hex") {
      return !st(() => k.stringToUint8Array(n, t));
    }
    static instanceof(n) {
      return typeof n == "object" && "constructor" in n && n.constructor.type === k.type;
    }
    static stringToUint8Array(n, t) {
      const a = (() => {
        switch (t) {
          case "hex":
            if (![
              40,
              2 * this.byteSize
            ].includes(n.length - (n.startsWith("0x") ? 2 : 0))) throw new Error(`string ${n} has invalid length for format ${t}`);
            return N.decode(n);
          case "base58":
            return On.decode(n);
          case "bech32":
            return Tn.decodeToBytes(n).bytes;
          case "algorandAppId":
            return rt(U(Bt, {
              appId: BigInt(n)
            }));
          case "sha256":
            return tt(n);
          case "keccak256":
            return Ve(n);
        }
      })();
      if (!a) throw new Error(`string ${n} could not be decoded for format ${t}`);
      if (a.length > k.byteSize) throw new Error(`string ${n} has invalid length for format ${t}`);
      return a.length < k.byteSize ? B.zpad(a, k.byteSize) : a;
    }
  }, __publicField(_a, "byteSize", 32), __publicField(_a, "type", "Universal"), __publicField(_a, "ZERO", new k(new Uint8Array(k.byteSize))), _a);
  Pt = function(e) {
    return typeof e == "object" && "setChain" in e;
  };
  const ge = /* @__PURE__ */ new Map();
  Xr = function(e, n) {
    ge.has(e) || ge.set(e, n);
  };
  Zr = function(e) {
    const n = Ae.get(e);
    return ge.has(n);
  };
  jn = function(e, n) {
    const t = Ae.get(e), a = ge.get(t);
    if (!a) throw new Error(`No native address type registered for platform ${t}, import the platform directly or, if using sdk package, import the addresses conditional export`);
    try {
      const r = new a(n);
      return Pt(r) && r.setChain(e), r;
    } catch (r) {
      const o = `Error parsing address as a native ${e} address: ${r.message}`;
      if (k.instanceof(n)) throw o;
      return new k(n).toNative(e);
    }
  };
  Jr = function(e, n) {
    const t = Ae.get(e);
    return new k(n, Vn.get(t));
  };
  Ge = (e, n) => e ? `${e}:${n}` : n;
  O = /* @__PURE__ */ new Map();
  kt = function(e, n, t) {
    const a = Ge(e, n);
    if (O.has(a)) throw new Error(`Payload type ${a} already registered`);
    O.set(a, t);
  };
  A = function(e, n) {
    for (const [t, a] of n) kt(e, t, a);
  };
  let Hn;
  p = {
    binary: "uint",
    size: 32
  };
  Hn = {
    binary: "uint",
    size: 2
  };
  P = (e) => ({
    ...Hn,
    custom: {
      to: (n) => {
        if (n === 0) {
          if (!(e == null ? void 0 : e.allowNull)) throw new Error("ChainId 0 is not valid for this protocol and action");
          return null;
        }
        const t = Wn(n), a = (e == null ? void 0 : e.allowedChains) ?? Un;
        if (!a.includes(t)) throw new Error(`Chain ${t} not in allowed chains ${a}`);
        return t;
      },
      from: (n) => n == null ? 0 : re(n)
    }
  });
  Qr = (e) => ({
    ...Hn,
    custom: {
      to: e,
      from: re(e)
    }
  });
  ne = {
    binary: "uint",
    size: 4
  };
  Xe = {
    binary: "uint",
    size: 8
  };
  $t = {
    to: (e) => new Date(Number(e * 1000n)),
    from: (e) => BigInt(e.getTime()) / 1000n
  };
  Kn = {
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
  Ce = {
    binary: "uint",
    size: 8
  };
  Mt = class {
    constructor(n, t, a) {
      __publicField(this, "r");
      __publicField(this, "s");
      __publicField(this, "v");
      this.r = n, this.s = t, this.v = a;
    }
    encode() {
      return U(Oe, this);
    }
    static decode(n) {
      return F(Oe, n);
    }
  };
  (function(e) {
    function n(o) {
      return oe.getPublicKey(o);
    }
    e.toPubkey = n;
    function t(o, s) {
      if (s.length != 32) throw new Error("hash.length != 32");
      return oe.sign(s, o);
    }
    e.sign = t;
    function a(o, s, i) {
      const { r: y, s: l } = o;
      return oe.verify({
        r: y,
        s: l
      }, i, s);
    }
    e.validate = a;
    function r(o, s) {
      const { r: i, s: y, v: l } = o, g = new oe.Signature(i, y);
      return g.recovery = l, g.recoverPublicKey(s).toRawBytes();
    }
    e.recover = r;
  })(yn || (yn = {}));
  let xt, Nt;
  xt = [
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
  Oe = {
    binary: "bytes",
    layout: xt,
    custom: {
      to: (e) => new Mt(e.r, e.s, e.v),
      from: (e) => ({
        r: e.r,
        s: e.s,
        v: e.v
      })
    }
  };
  f = {
    binary: "bytes",
    size: 32,
    custom: {
      to: (e) => new k(e),
      from: (e) => e.toUint8Array()
    }
  };
  Nt = (e) => {
    const n = e.findIndex((t) => t !== 0);
    return -1 < n ? e.slice(n) : new Uint8Array([]);
  };
  Lt = {
    to: B.decode,
    from: B.encode
  };
  qn = (e) => ({
    binary: "bytes",
    size: e,
    custom: {
      to: (n) => B.decode(Nt(n)),
      from: (n) => B.zpad(B.encode(n), e)
    }
  });
  Ft = function(e) {
    const n = e.indexOf(":");
    return n !== -1 ? [
      e.slice(0, n),
      e.slice(n + 1)
    ] : [
      null,
      e
    ];
  };
  let Rt;
  Rt = [
    {
      name: "guardianIndex",
      binary: "uint",
      size: 1
    },
    {
      name: "signature",
      ...Oe
    }
  ];
  Ze = [
    {
      name: "version",
      binary: "uint",
      size: 1,
      custom: 1,
      omit: true
    },
    {
      name: "guardianSet",
      ...Kn
    },
    {
      name: "signatures",
      binary: "array",
      lengthSize: 1,
      layout: Rt
    }
  ];
  Xn = [
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
      ...P()
    },
    {
      name: "emitterAddress",
      ...f
    },
    {
      name: "sequence",
      ...Ce
    },
    {
      name: "consistencyLevel",
      binary: "uint",
      size: 1
    }
  ];
  Gt = [
    ...Ze,
    ...Xn
  ];
  te = function(e) {
    const n = O.get(e);
    if (!n) throw new Error(`No layout registered for payload type ${e}`);
    return n;
  };
  Ot = function(e) {
    return {
      name: "payload",
      binary: "bytes",
      ...e === "Uint8Array" ? {} : {
        layout: te(e)
      }
    };
  };
  Yr = function(e) {
    const n = [
      ...Gt,
      Ot(e.payloadLiteral)
    ];
    return U(n, e);
  };
  ea = function(e, n) {
    if (e === "Uint8Array") return n;
    const t = te(e);
    return U(t, n);
  };
  Je = function(e, n) {
    const t = (() => {
      if (Array.isArray(e[0])) return e.flatMap(([s, i]) => i.map((y) => Ge(s, y)));
      if (typeof e[1] == "string") return e;
      const [r, o] = e;
      return o.map((s) => Ge(r, s));
    })(), a = He(t.map((r) => te(r)), !!n);
    return ((r) => {
      typeof r == "string" && (r = N.decode(r));
      const o = a(r);
      return Array.isArray(o) ? o.map((s) => t[s]) : o !== null ? t[o] : null;
    });
  };
  na = function(e, n) {
    typeof n == "string" && (n = N.decode(n));
    const [t, a] = F(Ze, n, false);
    for (let b = 1; b < t.signatures.length; ++b) if (t.signatures[b].guardianIndex <= t.signatures[b - 1].guardianIndex) throw new Error("Guardian signatures must be in ascending order of guardian set index");
    const r = a, [o, s] = F(Xn, n.subarray(r), false), i = r + s, [y, l] = typeof e == "string" ? [
      e,
      be(e, n.subarray(i))
    ] : be(e, n.subarray(i)), [g, I] = Ft(y), d = Ve(n.slice(r));
    return {
      protocolName: g,
      payloadName: I,
      payloadLiteral: y,
      ...t,
      ...o,
      payload: l,
      hash: d
    };
  };
  be = function(e, n, t = 0) {
    return (() => {
      if (typeof n == "string" && (n = N.decode(n)), e === "Uint8Array") return n.slice(t);
      if (typeof e == "string") return F(te(e), n.subarray(t));
      const a = e(n.slice(t));
      if (a === null) throw new Error(`Encoded data does not match any of the given payload types - ${n}`);
      return [
        a,
        F(te(a), n.subarray(t))
      ];
    })();
  };
  ta = /* @__PURE__ */ (() => {
    const e = () => {
      const t = Array.from(O.keys()), a = t.map((r) => O.get(r));
      return [
        t,
        He(a, true)
      ];
    };
    let n = [];
    return (t) => (O.size !== n.length && ([n] = e()), n.reduce((r, o) => {
      try {
        r.push([
          o,
          be(o, t)
        ]);
      } catch {
      }
      return r;
    }, []));
  })();
  ra = /* @__PURE__ */ (() => {
    const e = () => {
      const a = Array.from(O.keys()), r = a.map((o) => O.get(o));
      return [
        a,
        He(r, true)
      ];
    };
    let n = [], t = (a) => [];
    return (a) => (O.size !== n.length && ([n, t] = e()), typeof a == "string" && (a = N.decode(a)), t(a).map((o) => n[o]).reduce((o, s) => {
      try {
        o.push([
          s,
          be(s, a)
        ]);
      } catch {
      }
      return o;
    }, []));
  })();
  aa = (e) => {
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
        ...f
      },
      {
        name: "sequence",
        ...Ce
      },
      {
        name: "consistencyLevel",
        binary: "uint",
        size: 1
      }
    ], [t, a] = F(Ze, e, false), [r, o] = F(n, e.subarray(a), false);
    return {
      ...t,
      ...r,
      payload: e.slice(o)
    };
  };
  dn = (e) => [
    W(1),
    {
      name: "token",
      binary: "bytes",
      layout: [
        {
          name: "address",
          ...f
        },
        {
          name: "amount",
          ...p
        }
      ]
    },
    {
      name: "sourceDomain",
      ...ne
    },
    {
      name: "targetDomain",
      ...ne
    },
    {
      name: "nonce",
      ...Xe
    },
    {
      name: "caller",
      ...f
    },
    {
      name: "mintRecipient",
      ...f
    },
    ve({
      name: "payload",
      lengthSize: 2
    }, e)
  ];
  Ut = [
    W(1),
    {
      name: "targetRelayerFee",
      ...p
    },
    {
      name: "toNativeTokenAmount",
      ...p
    },
    {
      name: "targetRecipient",
      ...f
    }
  ];
  Dt = [
    [
      "DepositWithPayload",
      dn()
    ],
    [
      "TransferWithRelay",
      dn(Ut)
    ]
  ];
  A("AutomaticCircleBridge", Dt);
  let Zn, Wt;
  Zn = {
    binary: "uint",
    size: 4,
    custom: 0,
    omit: true
  };
  Wt = [
    {
      name: "messageBodyVersion",
      ...Zn
    },
    {
      name: "burnToken",
      ...f
    },
    {
      name: "mintRecipient",
      ...f
    },
    {
      name: "amount",
      ...p
    },
    {
      name: "messageSender",
      ...f
    }
  ];
  Ue = [
    {
      name: "version",
      ...Zn
    },
    {
      name: "sourceDomain",
      ...ne
    },
    {
      name: "destinationDomain",
      ...ne
    },
    {
      name: "nonce",
      ...Xe
    },
    {
      name: "sender",
      ...f
    },
    {
      name: "recipient",
      ...f
    },
    {
      name: "destinationCaller",
      ...f
    },
    {
      name: "payload",
      binary: "bytes",
      layout: Wt
    }
  ];
  Vt = [
    [
      "Message",
      Ue
    ]
  ];
  A("CircleBridge", Vt);
  (function(e) {
    e.isCircleAttestation = (n) => n.message !== void 0, e.deserialize = (n) => {
      const t = F(Ue, n), a = N.encode(Ve(n), true);
      return [
        t,
        a
      ];
    }, e.serialize = (n) => U(Ue, n);
  })(mn || (mn = {}));
  (function(e) {
    const n = "AutomaticCircleBridge", t = [
      "DepositWithPayload",
      "TransferWithRelay"
    ];
    e.getTransferDiscriminator = _e(() => Je([
      n,
      t
    ]));
  })(hn || (hn = {}));
  oa = function(e) {
    return e.amount !== void 0 && e.from !== void 0 && e.to !== void 0;
  };
  let gn, Jn;
  gn = {
    binary: "bytes",
    size: 32,
    custom: {
      to: (e) => de(e.byteLength).map((n) => String.fromCharCode(e[n])).join(""),
      from: (e) => new Uint8Array(e.split("").map((n) => n.charCodeAt(0)))
    }
  };
  Jn = [
    {
      name: "token",
      binary: "bytes",
      layout: [
        {
          name: "amount",
          ...p
        },
        {
          name: "address",
          ...f
        },
        {
          name: "chain",
          ...P()
        }
      ]
    },
    {
      name: "to",
      binary: "bytes",
      layout: [
        {
          name: "address",
          ...f
        },
        {
          name: "chain",
          ...P()
        }
      ]
    }
  ];
  Qn = [
    W(1),
    ...Jn,
    {
      name: "fee",
      ...p
    }
  ];
  ae = (e) => [
    W(3),
    ...Jn,
    {
      name: "from",
      ...f
    },
    ve({
      name: "payload"
    }, e)
  ];
  _t = [
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
              ...f
            },
            {
              name: "chain",
              ...P()
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
          ...gn
        },
        {
          name: "name",
          ...gn
        }
      ]
    ],
    [
      "Transfer",
      Qn
    ],
    [
      "TransferWithPayload",
      ae()
    ]
  ];
  A("TokenBridge", _t);
  let jt;
  jt = bt([
    "shouldWrapNative",
    "shouldUnwrapNative"
  ]);
  pe = [
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
      ...jt
    }
  ];
  sa = [
    {
      name: "flagSet",
      binary: "bytes",
      layout: pe
    },
    {
      name: "startTokenAddress",
      ...f
    },
    {
      name: "cannonAssetAmount",
      ...p
    },
    {
      name: "finalTokenAddress",
      ...f
    },
    {
      name: "recipientAddress",
      ...f
    },
    {
      name: "destinationPorticoAddress",
      ...f
    },
    {
      name: "amountSpecified",
      ...p
    },
    {
      name: "minAmountStart",
      ...p
    },
    {
      name: "minAmountFinish",
      ...p
    },
    {
      name: "relayerFee",
      ...p
    }
  ];
  De = [
    {
      name: "flagSet",
      binary: "bytes",
      layout: pe
    },
    {
      name: "finalTokenAddress",
      ...f
    },
    {
      name: "recipientAddress",
      ...f
    },
    {
      name: "cannonAssetAmount",
      ...p
    },
    {
      name: "minAmountFinish",
      ...p
    },
    {
      name: "relayerFee",
      ...p
    }
  ];
  Ht = [
    [
      "Transfer",
      ae(De)
    ]
  ];
  A("PorticoBridge", Ht);
  (function(e) {
    e.deserializePayload = (n) => F(De, n), e.serializePayload = (n) => U(De, n), e.deserializeFlagSet = (n) => F(pe, n), e.serializeFlagSet = (n) => U(pe, n);
  })(bn || (bn = {}));
  let Yn, pn, Kt, qt, et, Zt;
  Yn = {
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
        ...p
      },
      {
        name: "targetChainRefundPerGasUnused",
        ...p
      }
    ]
  };
  pn = {
    binary: "bytes",
    layout: [
      {
        name: "chain",
        ...P()
      },
      {
        name: "address",
        ...f
      }
    ]
  };
  Kt = [
    {
      name: "chain",
      ...P()
    },
    {
      name: "emitterAddress",
      ...f
    },
    {
      name: "sequence",
      ...Ce
    }
  ];
  qt = [
    {
      name: "size",
      binary: "uint",
      size: 4,
      custom: 12,
      omit: true
    },
    {
      name: "domain",
      ...ne
    },
    {
      name: "nonce",
      ...Xe
    }
  ];
  et = {
    binary: "switch",
    idSize: 1,
    idTag: "keyType",
    layouts: [
      [
        [
          1,
          "VAA"
        ],
        Kt
      ],
      [
        [
          2,
          "CCTP"
        ],
        qt
      ]
    ]
  };
  Xt = (e) => [
    W(1),
    {
      name: "target",
      ...pn
    },
    ve({
      name: "payload",
      lengthSize: 4
    }, e),
    {
      name: "requestedReceiverValue",
      ...p
    },
    {
      name: "extraReceiverValue",
      ...p
    },
    {
      name: "executionInfo",
      ...Yn
    },
    {
      name: "refund",
      ...pn
    },
    {
      name: "refundDeliveryProvider",
      ...f
    },
    {
      name: "sourceDeliveryProvider",
      ...f
    },
    {
      name: "senderAddress",
      ...f
    },
    {
      name: "messageKeys",
      binary: "array",
      lengthSize: 1,
      layout: et
    }
  ];
  Zt = [
    [
      "DeliveryInstruction",
      Xt()
    ],
    [
      "RedeliveryInstruction",
      [
        W(2),
        {
          name: "deliveryVaaKey",
          binary: "bytes",
          layout: et
        },
        {
          name: "targetChain",
          ...P()
        },
        {
          name: "newRequestedReceiverValue",
          ...p
        },
        {
          name: "newEncodedExecutionInfo",
          ...Yn
        },
        {
          name: "newSourceDeliveryProvider",
          ...f
        },
        {
          name: "newSenderAddress",
          ...f
        }
      ]
    ]
  ];
  A("Relayer", Zt);
  Jt = [
    W(1),
    {
      name: "targetRelayerFee",
      ...p
    },
    {
      name: "toNativeTokenAmount",
      ...p
    },
    {
      name: "targetRecipient",
      ...f
    }
  ];
  Qt = [
    [
      "TransferWithRelay",
      ae(Jt)
    ]
  ];
  A("AutomaticTokenBridge", Qt);
  ia = (e) => new Error(`Token ${e} is not a wrapped asset`);
  (function(e) {
    const n = "TokenBridge", t = [
      "Transfer",
      "TransferWithPayload"
    ], a = [
      "AttestMeta"
    ];
    [
      ...t,
      ...a
    ], e.getTransferDiscriminator = _e(() => Je([
      n,
      t
    ]));
  })(wn || (wn = {}));
  vn || (vn = {});
  zn || (zn = {});
  ca = function(e) {
    return e.token !== void 0 && e.amount !== void 0 && e.from !== void 0 && e.to !== void 0;
  };
  Yt = [
    {
      name: "targetRecipient",
      ...f
    }
  ];
  er = [
    [
      "TransferWithExecutorRelay",
      ae(Yt)
    ]
  ];
  A("ExecutorTokenBridge", er);
  const nr = [
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
  ], We = {
    binary: "bytes",
    size: 20,
    custom: {
      to: (e) => N.encode(e, true),
      from: (e) => N.decode(e)
    }
  }, tr = [
    [
      "UpgradeContract",
      [
        false,
        [
          {
            name: "newContract",
            ...f
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
            ...P()
          },
          {
            name: "foreignAddress",
            ...f
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
            ...P({
              allowedChains: Se("Evm")
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
            ...Kn
          },
          {
            name: "guardians",
            binary: "array",
            lengthSize: 1,
            layout: We
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
            ...f
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
            ...f
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
            ...P()
          },
          {
            name: "emitterAddress",
            ...f
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
  ], $e = {
    binary: "bytes",
    size: 32
  }, Sn = [
    {
      name: "contractAddr",
      ...f
    },
    {
      name: "codeId",
      binary: "uint",
      size: 8
    }
  ], rr = [
    [
      "StoreCode",
      [
        false,
        [
          {
            name: "wasmHash",
            ...$e
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
            ...$e
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
            ...$e
          }
        ]
      ]
    ],
    [
      "AddWasmInstantiateAllowlist",
      [
        false,
        Sn
      ]
    ],
    [
      "DeleteWasmInstantiateAllowlist",
      [
        false,
        Sn
      ]
    ]
  ], ar = (() => {
    const e = (r) => ({
      binary: "bytes",
      size: r,
      custom: Lt
    }), n = [
      {
        name: "height",
        binary: "uint",
        size: 8
      }
    ], t = Nn(n), a = (r) => [
      {
        name: "name",
        ...e(r)
      },
      ...n
    ];
    return {
      binary: "bytes",
      custom: {
        to: (r) => F(a(r.length - t), r),
        from: (r) => U(a(r.name.length), r)
      }
    };
  })(), or = [
    [
      "ScheduleUpgrade",
      [
        false,
        ar
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
            ...f
          }
        ]
      ]
    ]
  ], sr = [
    [
      "ModifyBalance",
      [
        false,
        [
          {
            name: "sequence",
            ...Ce
          },
          {
            name: "modifiedChain",
            ...P()
          },
          {
            name: "tokenChain",
            ...P()
          },
          {
            name: "tokenAddress",
            ...f
          },
          {
            name: "kind",
            ...ht(nr)
          },
          {
            name: "amount",
            ...p
          },
          {
            name: "reason",
            ...qn(32)
          }
        ]
      ]
    ]
  ], ir = [
    [
      "ActionUpdateChannelChain",
      [
        false,
        [
          {
            name: "channelId",
            ...qn(64)
          },
          {
            name: "channelChain",
            ...P({
              allowedChains: Se("Cosmwasm")
            })
          }
        ]
      ]
    ]
  ], cr = [
    [
      "GeneralPurposeEvm",
      [
        false,
        [
          {
            name: "governanceContract",
            ...We
          },
          {
            name: "targetContract",
            ...We
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
            ...f
          },
          {
            name: "payload",
            binary: "bytes"
          }
        ]
      ]
    ]
  ], nt = [
    ...tr,
    ...rr,
    ...or,
    ...sr,
    ...ir,
    ...cr
  ];
  Bn(nt, 0);
  const An = Object.fromEntries(nt), lr = [
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
  ], ur = H(lr), fr = (e) => ({
    to: e,
    from: (() => {
      const t = new Uint8Array(32), a = ur(e);
      for (let r = 1; r <= a.length; ++r) t[32 - r] = a.charCodeAt(a.length - r);
      return t;
    })()
  }), yr = (e, n) => ({
    to: e,
    from: n
  }), dr = (e, n, t) => [
    {
      name: "protocol",
      binary: "bytes",
      custom: fr(e)
    },
    {
      name: "action",
      binary: "uint",
      size: 1,
      custom: yr(n, t)
    },
    {
      name: "chain",
      ...P({
        allowNull: An[n][0]
      })
    },
    {
      name: "actionArgs",
      binary: "bytes",
      layout: An[n][1]
    }
  ], h = (e, n, t) => [
    n,
    dr(e, n, t)
  ], mr = [
    h("WormholeCore", "UpgradeContract", 1),
    h("WormholeCore", "GuardianSetUpgrade", 2),
    h("WormholeCore", "SetMessageFee", 3),
    h("WormholeCore", "TransferFees", 4),
    h("WormholeCore", "RecoverChainId", 5)
  ], hr = [
    h("TokenBridge", "RegisterChain", 1),
    h("TokenBridge", "UpgradeContract", 2),
    h("TokenBridge", "RecoverChainId", 3)
  ], gr = [
    h("NftBridge", "RegisterChain", 1),
    h("NftBridge", "UpgradeContract", 2),
    h("NftBridge", "RecoverChainId", 3)
  ], br = [
    h("Relayer", "RegisterChain", 1),
    h("Relayer", "UpgradeContract", 2),
    h("Relayer", "UpdateDefaultProvider", 3)
  ], pr = [
    h("CircleBridge", "UpdateFinality", 1),
    h("CircleBridge", "RegisterEmitterAndDomain", 2),
    h("CircleBridge", "UpgradeContract", 3)
  ], wr = [
    h("IbcBridge", "ActionUpdateChannelChain", 1)
  ], vr = [
    h("IbcReceiver", "ActionUpdateChannelChain", 1)
  ], zr = [
    h("GlobalAccountant", "ModifyBalance", 1)
  ], Sr = [
    h("GeneralPurposeGovernance", "GeneralPurposeEvm", 1),
    h("GeneralPurposeGovernance", "GeneralPurposeSolana", 2)
  ], Ar = [
    h("WormchainGovernance", "StoreCode", 1),
    h("WormchainGovernance", "InstantiateContract", 2),
    h("WormchainGovernance", "MigrateContract", 3),
    h("WormchainGovernance", "AddWasmInstantiateAllowlist", 4),
    h("WormchainGovernance", "DeleteWasmInstantiateAllowlist", 5)
  ], Cr = [
    h("GatewayGovernance", "ScheduleUpgrade", 1),
    h("GatewayGovernance", "CancelUpgrade", 2),
    h("GatewayGovernance", "SetIbcComposabilityMwContract", 3)
  ];
  A("WormholeCore", mr);
  A("TokenBridge", hr);
  A("NftBridge", gr);
  A("Relayer", br);
  A("CircleBridge", pr);
  A("IbcBridge", wr);
  A("IbcReceiver", vr);
  A("GlobalAccountant", zr);
  A("GeneralPurposeGovernance", Sr);
  A("WormchainGovernance", Ar);
  A("GatewayGovernance", Cr);
  (function(e) {
    const n = "TBTCBridge", t = [
      "GatewayTransfer",
      "Transfer"
    ];
    [
      ...t
    ], e.getTransferDiscriminator = _e(() => Je([
      n,
      t
    ])), e.getNativeTbtcToken = (a) => {
      const r = _n.get("Mainnet", a);
      if (r) return {
        chain: a,
        address: jn(a, r)
      };
    };
  })(Cn || (Cn = {}));
  let Er;
  Ir = [
    {
      name: "recipient",
      ...f
    }
  ];
  Er = [
    [
      "GatewayTransfer",
      ae(Ir)
    ],
    [
      "Transfer",
      Qn
    ]
  ];
  A("TBTCBridge", Er);
  Tr = [
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
  Br = [
    {
      name: "dropOff",
      binary: "uint",
      size: 16
    },
    {
      name: "recipient",
      ...f
    }
  ];
  Pr = [
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
  kr = [
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
          Tr
        ],
        [
          [
            2,
            "GasDropOffInstruction"
          ],
          Br
        ],
        [
          [
            3,
            "StacksNttReceiveInstruction"
          ],
          Pr
        ]
      ]
    }
  ];
  la = [
    {
      name: "requests",
      binary: "array",
      layout: kr
    }
  ];
  $r = [
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
              custom: $t
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
  ua = [
    ...$r,
    {
      name: "signature",
      binary: "bytes",
      size: 65
    }
  ];
  (function(e) {
    e.Pending = "pending", e.Failed = "failed", e.Unsupported = "unsupported", e.Submitted = "submitted", e.Underpaid = "underpaid", e.Aborted = "aborted";
  })(In || (In = {}));
  (function(e) {
    e.ERM1 = "ERM1", e.ERV1 = "ERV1", e.ERN1 = "ERN1", e.ERC1 = "ERC1", e.ERC2 = "ERC2";
  })(En || (En = {}));
  fa = async function(e) {
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
  ya = async function(e, n, t, a) {
    const r = `${e}/quote`;
    try {
      const o = await fetch(r, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          srcChain: he(n),
          dstChain: he(t),
          relayInstructions: a
        })
      });
      if (!o.ok) throw new Error(`HTTP error! status: ${o.status}`);
      return await o.json();
    } catch {
      throw new Error("Failed to fetch signed quote.");
    }
  };
  da = async function(e, n, t) {
    const a = `${e}/status/tx`;
    try {
      const r = await fetch(a, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          txHash: n,
          chainId: he(t)
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
  At as $,
  H as A,
  p as B,
  ne as C,
  Xe as D,
  ia as E,
  $t as F,
  Qr as G,
  Kn as H,
  W as I,
  Ce as J,
  Oe as K,
  Lt as L,
  vt as M,
  Ae as N,
  mn as O,
  Cn as P,
  na as Q,
  hn as R,
  vn as S,
  wn as T,
  k as U,
  zn as V,
  bn as W,
  In as X,
  En as Y,
  Mt as Z,
  yn as _,
  __tla,
  Vr as a,
  de as a$,
  St as a0,
  Dn as a1,
  Dt as a2,
  Qt as a3,
  Gt as a4,
  bt as a5,
  ra as a6,
  Ur as a7,
  Nn as a8,
  Me as a9,
  Nr as aA,
  Br as aB,
  Tr as aC,
  te as aD,
  ze as aE,
  ee as aF,
  Pt as aG,
  oa as aH,
  It as aI,
  ca as aJ,
  He as aK,
  _e as aL,
  Ht as aM,
  Zr as aN,
  Gr as aO,
  _r as aP,
  Yt as aQ,
  Je as aR,
  Lr as aS,
  Kr as aT,
  Vn as aU,
  Se as aV,
  Ct as aW,
  pe as aX,
  De as aY,
  sa as aZ,
  $r as a_,
  Hr as aa,
  me as ab,
  zt as ac,
  re as ad,
  Un as ae,
  Vt as af,
  Ut as ag,
  Ue as ah,
  Bn as ai,
  Jt as aj,
  Xt as ak,
  dn as al,
  F as am,
  be as an,
  aa as ao,
  Wr as ap,
  jr as aq,
  xr as ar,
  ht as as,
  er as at,
  ta as au,
  fa as av,
  ya as aw,
  da as ax,
  Fr as ay,
  Dr as az,
  Or as b,
  Xr as b0,
  kt as b1,
  kr as b2,
  ea as b3,
  Pr as b4,
  qr as b5,
  Ir as b6,
  st as b7,
  _t as b8,
  Qn as b9,
  ae as ba,
  Q as bb,
  Gn as bc,
  On as c,
  Ft as d,
  Xn as e,
  N as f,
  ye as g,
  Ze as h,
  Yr as i,
  Wn as j,
  jn as k,
  Jr as l,
  Rr as m,
  ua as n,
  ve as o,
  Ot as p,
  P as q,
  la as r,
  U as s,
  he as t,
  f as u,
  qn as v,
  B as w,
  O as x,
  Ge as y,
  A as z
};
