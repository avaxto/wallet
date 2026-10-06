var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { i as te, r as O, P as M, I as ne, b as re, c as ie, S as oe, d as S, e as k, f as se, C as R, K, __tla as __tla_0 } from "./index-D6WQj-OC.js";
import { g as je, h as Ce, j as qe, k as ze, _ as We, l as Ne, u as Ve, m as He, n as Ye, o as Xe, __tla as __tla_1 } from "./index-D6WQj-OC.js";
import { g as ae, r as ce, B as A, a as ue } from "./crypto-CvxmDsJu.js";
import { m as le, c as de, f as D, g as he, __tla as __tla_2 } from "./api-D7QdIeGh.js";
import { __tla as __tla_3 } from "./index-zVcqnCPu.js";
import "./vendor-C3gEtrcs.js";
import { __tla as __tla_4 } from "./wormhole-19mkgM22.js";
let Oe, we, Fe, Ie, Se, Ee, ke, Ue, Re, Me, W, z;
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
  var E = {};
  const fe = ae(te);
  var U;
  function ge() {
    return U || (U = 1, (function(e) {
      var i = E && E.__importDefault || function(o) {
        return o && o.__esModule ? o : {
          default: o
        };
      };
      Object.defineProperty(e, "__esModule", {
        value: true
      }), e.map = e.array = e.rustEnum = e.str = e.vecU8 = e.tagged = e.vec = e.bool = e.option = e.publicKey = e.i256 = e.u256 = e.i128 = e.u128 = e.i64 = e.u64 = e.struct = e.f64 = e.f32 = e.i32 = e.u32 = e.i16 = e.u16 = e.i8 = e.u8 = void 0;
      const t = O(), a = fe, l = i(ce());
      var c = O();
      Object.defineProperty(e, "u8", {
        enumerable: true,
        get: function() {
          return c.u8;
        }
      }), Object.defineProperty(e, "i8", {
        enumerable: true,
        get: function() {
          return c.s8;
        }
      }), Object.defineProperty(e, "u16", {
        enumerable: true,
        get: function() {
          return c.u16;
        }
      }), Object.defineProperty(e, "i16", {
        enumerable: true,
        get: function() {
          return c.s16;
        }
      }), Object.defineProperty(e, "u32", {
        enumerable: true,
        get: function() {
          return c.u32;
        }
      }), Object.defineProperty(e, "i32", {
        enumerable: true,
        get: function() {
          return c.s32;
        }
      }), Object.defineProperty(e, "f32", {
        enumerable: true,
        get: function() {
          return c.f32;
        }
      }), Object.defineProperty(e, "f64", {
        enumerable: true,
        get: function() {
          return c.f64;
        }
      }), Object.defineProperty(e, "struct", {
        enumerable: true,
        get: function() {
          return c.struct;
        }
      });
      class u extends t.Layout {
        constructor(n, r, s) {
          super(n, s), this.blob = (0, t.blob)(n), this.signed = r;
        }
        decode(n, r = 0) {
          const s = new l.default(this.blob.decode(n, r), 10, "le");
          return this.signed ? s.fromTwos(this.span * 8).clone() : s;
        }
        encode(n, r, s = 0) {
          return this.signed && (n = n.toTwos(this.span * 8)), this.blob.encode(n.toArrayLike(A, "le", this.span), r, s);
        }
      }
      function d(o) {
        return new u(8, false, o);
      }
      e.u64 = d;
      function y(o) {
        return new u(8, true, o);
      }
      e.i64 = y;
      function f(o) {
        return new u(16, false, o);
      }
      e.u128 = f;
      function b(o) {
        return new u(16, true, o);
      }
      e.i128 = b;
      function g(o) {
        return new u(32, false, o);
      }
      e.u256 = g;
      function p(o) {
        return new u(32, true, o);
      }
      e.i256 = p;
      class m extends t.Layout {
        constructor(n, r, s, h) {
          super(n.span, h), this.layout = n, this.decoder = r, this.encoder = s;
        }
        decode(n, r) {
          return this.decoder(this.layout.decode(n, r));
        }
        encode(n, r, s) {
          return this.layout.encode(this.encoder(n), r, s);
        }
        getSpan(n, r) {
          return this.layout.getSpan(n, r);
        }
      }
      function w(o) {
        return new m((0, t.blob)(32), (n) => new a.PublicKey(n), (n) => n.toBuffer(), o);
      }
      e.publicKey = w;
      class L extends t.Layout {
        constructor(n, r) {
          super(-1, r), this.layout = n, this.discriminator = (0, t.u8)();
        }
        encode(n, r, s = 0) {
          return n == null ? this.discriminator.encode(0, r, s) : (this.discriminator.encode(1, r, s), this.layout.encode(n, r, s + 1) + 1);
        }
        decode(n, r = 0) {
          const s = this.discriminator.decode(n, r);
          if (s === 0) return null;
          if (s === 1) return this.layout.decode(n, r + 1);
          throw new Error("Invalid option " + this.property);
        }
        getSpan(n, r = 0) {
          const s = this.discriminator.decode(n, r);
          if (s === 0) return 1;
          if (s === 1) return this.layout.getSpan(n, r + 1) + 1;
          throw new Error("Invalid option " + this.property);
        }
      }
      function N(o, n) {
        return new L(o, n);
      }
      e.option = N;
      function V(o) {
        return new m((0, t.u8)(), H, Y, o);
      }
      e.bool = V;
      function H(o) {
        if (o === 0) return false;
        if (o === 1) return true;
        throw new Error("Invalid bool: " + o);
      }
      function Y(o) {
        return o ? 1 : 0;
      }
      function X(o, n) {
        const r = (0, t.u32)("length"), s = (0, t.struct)([
          r,
          (0, t.seq)(o, (0, t.offset)(r, -r.span), "values")
        ]);
        return new m(s, ({ values: h }) => h, (h) => ({
          values: h
        }), n);
      }
      e.vec = X;
      function G(o, n, r) {
        const s = (0, t.struct)([
          d("tag"),
          n.replicate("data")
        ]);
        function h({ tag: _, data: ee }) {
          if (!_.eq(o)) throw new Error("Invalid tag, expected: " + o.toString("hex") + ", got: " + _.toString("hex"));
          return ee;
        }
        return new m(s, h, (_) => ({
          tag: o,
          data: _
        }), r);
      }
      e.tagged = G;
      function I(o) {
        const n = (0, t.u32)("length"), r = (0, t.struct)([
          n,
          (0, t.blob)((0, t.offset)(n, -n.span), "data")
        ]);
        return new m(r, ({ data: s }) => s, (s) => ({
          data: s
        }), o);
      }
      e.vecU8 = I;
      function Z(o) {
        return new m(I(), (n) => n.toString("utf-8"), (n) => A.from(n, "utf-8"), o);
      }
      e.str = Z;
      function J(o, n, r) {
        const s = (0, t.union)(r ?? (0, t.u8)(), n);
        return o.forEach((h, _) => s.addVariant(_, h, h.property)), s;
      }
      e.rustEnum = J;
      function Q(o, n, r) {
        const s = (0, t.struct)([
          (0, t.seq)(o, n, "values")
        ]);
        return new m(s, ({ values: h }) => h, (h) => ({
          values: h
        }), r);
      }
      e.array = Q;
      class x extends t.Layout {
        constructor(n, r, s) {
          super(n.span + r.span, s), this.keyLayout = n, this.valueLayout = r;
        }
        decode(n, r) {
          r = r || 0;
          const s = this.keyLayout.decode(n, r), h = this.valueLayout.decode(n, r + this.keyLayout.getSpan(n, r));
          return [
            s,
            h
          ];
        }
        encode(n, r, s) {
          s = s || 0;
          const h = this.keyLayout.encode(n[0], r, s), _ = this.valueLayout.encode(n[1], r, s + h);
          return h + _;
        }
        getSpan(n, r) {
          return this.keyLayout.getSpan(n, r) + this.valueLayout.getSpan(n, r);
        }
      }
      function $(o, n, r) {
        const s = (0, t.u32)("length"), h = (0, t.struct)([
          s,
          (0, t.seq)(new x(o, n), (0, t.offset)(s, -s.span), "values")
        ]);
        return new m(h, ({ values: _ }) => new Map(_), (_) => ({
          values: Array.from(_.entries())
        }), r);
      }
      e.map = $;
    })(E)), E;
  }
  var v = ge();
  function me(e) {
    return "accounts" in e;
  }
  async function ye(e) {
    const i = (await M.findProgramAddress([], e))[0];
    return await M.createWithSeed(i, j(), e);
  }
  function j() {
    return "anchor:idl";
  }
  const C = v.struct([
    v.publicKey("authority"),
    v.vecU8("data")
  ]);
  function pe(e) {
    return C.decode(e);
  }
  function _e(e) {
    const i = ue.alloc(1e3), t = C.encode(e, i);
    return i.slice(0, t);
  }
  let F, P, B, T, q, be;
  Ie = Object.freeze(Object.defineProperty({
    __proto__: null,
    IdlError: ne,
    accountSize: re,
    decodeIdlAccount: pe,
    encodeIdlAccount: _e,
    idlAddress: ye,
    isIdlAccounts: me,
    seed: j
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  F = 0.5;
  P = 1;
  B = 1;
  T = 1e8;
  q = 5;
  be = 25e4;
  Oe = {
    percentile: F,
    percentileMultiple: P,
    min: B,
    max: T
  };
  Me = async function(e, i) {
    const [t, a] = await S.chainFromRpc(e);
    return new Fe(a, K.fromSecretKey(D.decode(i)), e);
  };
  Re = async function(e, i, t) {
    const [a, l] = await S.chainFromRpc(e), c = typeof i == "string" ? K.fromSecretKey(D.decode(i)) : i;
    if ((t == null ? void 0 : t.priorityFee) && t.priorityFee.percentile && t.priorityFee.percentile > 1) throw new Error("priorityFeePercentile must be a number between 0 and 1");
    return new we(e, l, c, (t == null ? void 0 : t.debug) ?? false, (t == null ? void 0 : t.priorityFee) ?? {}, (t == null ? void 0 : t.retries) ?? q, t == null ? void 0 : t.sendOpts);
  };
  we = class {
    constructor(i, t, a, l = false, c, u = q, d) {
      __publicField(this, "_rpc");
      __publicField(this, "_chain");
      __publicField(this, "_keypair");
      __publicField(this, "_debug");
      __publicField(this, "_priorityFee");
      __publicField(this, "_maxResubmits");
      __publicField(this, "_sendOpts");
      this._rpc = i, this._chain = t, this._keypair = a, this._debug = l, this._priorityFee = c, this._maxResubmits = u, this._sendOpts = d, this._sendOpts = this._sendOpts ?? {
        preflightCommitment: this._rpc.commitment
      };
    }
    chain() {
      return this._chain;
    }
    address() {
      return this._keypair.publicKey.toBase58();
    }
    retryable(i) {
      var _a;
      if (i instanceof ie) return true;
      if (!(i instanceof oe) || !i.message.includes("Transaction simulation failed")) return false;
      if (i.message.includes("Blockhash not found")) return true;
      const t = (_a = i.logs) == null ? void 0 : _a.find((a) => a.startsWith("Program log: Error: "));
      return t ? !!(t.includes("Not enough bytes") || t.includes("Unexpected length of input")) : false;
    }
    async signAndSend(i) {
      var _a;
      let { blockhash: t, lastValidBlockHeight: a } = await S.latestBlock(this._rpc);
      const l = [];
      for (const d of i) {
        const { description: y, transaction: { transaction: f, signers: b } } = d;
        this._debug && console.log(`Signing: ${y} for ${this.address()}`);
        let g;
        ((_a = this._priorityFee) == null ? void 0 : _a.percentile) && this._priorityFee.percentile > 0 && (g = await Se(this._rpc, f, this._priorityFee.percentile, this._priorityFee.percentileMultiple, this._priorityFee.min, this._priorityFee.max)), this._debug && z(f);
        for (let p = 0; p < this._maxResubmits; p++) try {
          if (k(f)) {
            if (g && p === 0) {
              const w = se.decompile(f.message);
              w.instructions.push(...g), f.message = w.compileToV0Message();
            }
            f.message.recentBlockhash = t, f.sign([
              this._keypair,
              ...b ?? []
            ]);
          } else g && p === 0 && f.add(...g), f.recentBlockhash = t, f.lastValidBlockHeight = a, f.partialSign(this._keypair, ...b ?? []);
          this._debug && console.log("Submitting transactions ");
          const { signature: m } = await S.sendTxWithRetry(this._rpc, f.serialize(), this._sendOpts);
          l.push(m);
          break;
        } catch (m) {
          if (p === this._maxResubmits - 1 || !this.retryable(m)) throw m;
          this._debug && console.log(`Failed to send transaction on attempt ${p}, retrying: `, m);
          const { blockhash: w, lastValidBlockHeight: L } = await S.latestBlock(this._rpc);
          a = L, t = w;
        }
      }
      this._debug && console.log("Waiting for confirmation for: ", l);
      const u = (await Promise.all(l.map(async (d) => {
        try {
          return await this._rpc.confirmTransaction({
            signature: d,
            blockhash: t,
            lastValidBlockHeight: a
          }, this._rpc.commitment);
        } catch (y) {
          throw console.error("Failed to confirm transaction: ", y), y;
        }
      }))).filter((d) => d.value.err).map((d) => d.value.err);
      if (u.length > 0) throw new Error(`Failed to confirm transaction: ${u}`);
      return l;
    }
  };
  z = function(e) {
    if (k(e)) {
      console.log(e.signatures);
      const i = e.message, t = i.getAccountKeys();
      i.compiledInstructions.forEach((a) => {
        console.log("Program", t.get(a.programIdIndex).toBase58()), console.log("Data: ", he.encode(a.data)), console.log("Keys: ", a.accountKeyIndexes.map((l) => [
          l,
          t.get(l).toBase58()
        ]));
      });
    } else console.log(e.signatures), console.log(e.feePayer), e.instructions.forEach((i) => {
      console.log("Program", i.programId.toBase58()), console.log("Data: ", i.data.toString("hex")), console.log("Keys: ", i.keys.map((t) => [
        t,
        t.pubkey.toBase58()
      ]));
    });
  };
  Se = async function(e, i, t = F, a = P, l = B, c = T) {
    const [u, d] = await Promise.all([
      Ee(e, i),
      ke(e, i, t, a, l, c)
    ]);
    return [
      R.setComputeUnitLimit({
        units: u
      }),
      R.setComputeUnitPrice({
        microLamports: d
      })
    ];
  };
  Ee = async function(e, i) {
    var _a;
    let t = be;
    try {
      const a = await (k(i), e.simulateTransaction(i));
      a.value.err && console.error(`Error simulating Solana transaction: ${a.value.err}`), ((_a = a == null ? void 0 : a.value) == null ? void 0 : _a.unitsConsumed) && (t = Math.round(a.value.unitsConsumed * 1.2));
    } catch (a) {
      console.error(`Failed to calculate compute unit limit for Solana transaction: ${a}`);
    }
    return t;
  };
  W = async function(e, i) {
    if (k(i)) {
      const t = (await Promise.all(i.message.addressTableLookups.map((c) => e.getAddressLookupTable(c.accountKey)))).map((c) => c.value).filter((c) => c !== null), a = i.message, l = a.getAccountKeys({
        addressLookupTableAccounts: t ?? void 0
      });
      return a.compiledInstructions.flatMap((c) => c.accountKeyIndexes).map((c) => a.isAccountWritable(c) ? l.get(c) : null).filter(Boolean);
    } else return i.instructions.flatMap((t) => t.keys).map((t) => t.isWritable ? t.pubkey : null).filter(Boolean);
  };
  ke = async function(e, i, t = F, a = P, l = B, c = T) {
    let u = l;
    const d = await W(e, i);
    try {
      const y = await e.getRecentPrioritizationFees({
        lockedWritableAccounts: d
      });
      if (y) {
        const f = y.map((g) => g.prioritizationFee).sort((g, p) => g - p), b = Math.ceil(f.length * t);
        if (f.length > b) {
          let g = f[b];
          a > 0 && (g *= a), u = Math.max(u, g);
        }
      }
    } catch (y) {
      console.error("Error fetching Solana recent fees", y);
    }
    return Math.min(Math.max(u, l), c);
  };
  Ue = async function(e, i, t = F, a = P, l = B, c = T) {
    const u = t * 1e4;
    if (u < 1 || u > 1e4) throw new Error("percentile must be between 0.0001 and 1");
    const d = e._rpcRequest, f = [
      await W(e, i),
      {
        percentile: u
      }
    ], b = await d("getRecentPrioritizationFees", f);
    if (b.error) throw new Error(b.error);
    const g = b.result.map((m) => m.prioritizationFee);
    if (g.length === 0) return l;
    const p = Math.floor(le(g) * (a > 0 ? a : 1));
    return de(p, l, c);
  };
  Fe = class {
    constructor(i, t, a, l = false) {
      __publicField(this, "_chain");
      __publicField(this, "_keypair");
      __publicField(this, "_rpc");
      __publicField(this, "_debug");
      this._chain = i, this._keypair = t, this._rpc = a, this._debug = l;
    }
    chain() {
      return this._chain;
    }
    address() {
      return this._keypair.publicKey.toBase58();
    }
    async sign(i) {
      const { blockhash: t } = await S.latestBlock(this._rpc), a = [];
      for (const l of i) {
        const { description: c, transaction: { transaction: u, signers: d } } = l;
        this._debug && console.log(`Signing: ${c} for ${this.address()}`), this._debug && z(u), k(u) ? (u.message.recentBlockhash = t, u.sign([
          this._keypair,
          ...d ?? []
        ]), a.push(A.from(u.serialize()))) : (u.recentBlockhash = t, u.partialSign(this._keypair, ...d ?? []), a.push(u.serialize()));
      }
      return a;
    }
  };
});
export {
  Oe as DefaultPriorityFeeOptions,
  je as SolanaAddress,
  Ce as SolanaChain,
  S as SolanaPlatform,
  we as SolanaSendSigner,
  Fe as SolanaSigner,
  qe as SolanaUnsignedTransaction,
  ze as SolanaZeroAddress,
  __tla,
  We as _platform,
  Ie as anchor,
  Ne as camelCase,
  Se as createPriorityFeeInstructions,
  Ee as determineComputeBudget,
  ke as determinePriorityFee,
  Ue as determinePriorityFeeTritonOne,
  Re as getSolanaSignAndSendSigner,
  Me as getSolanaSigner,
  W as getWritableAccounts,
  k as isVersionedTransaction,
  z as logTxDetails,
  Ve as unusedArbiterFee,
  He as unusedNonce,
  Ye as upperFirst,
  Xe as utils
};
