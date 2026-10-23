var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { P as S, d as E, I as M, a as L, T as U, S as O, b as g, i as f, c as C, C as k, K as T, __tla as __tla_0 } from "./index-DPwYwVjg.js";
import { e as de, f as he, g as pe, h as ge, _ as fe, j as me, u as _e, k as ye, l as be, m as Fe, __tla as __tla_1 } from "./index-DPwYwVjg.js";
import { B as K, a as D } from "./crypto-CoV0x5dM.js";
import { m as z, b as $, c as w, f as W, __tla as __tla_2 } from "./api-V7cxiqtb.js";
import { __tla as __tla_3 } from "./index-Cy2fdchf.js";
import "./vendor-BXTw0jaR.js";
import { __tla as __tla_4 } from "./wormhole-C6xcu0sz.js";
let ne, j, Z, ie, q, X, G, ce, ae, oe, I, x;
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
  function v(r) {
    return "accounts" in r;
  }
  async function N(r) {
    const t = (await S.findProgramAddress([], r))[0];
    return await S.createWithSeed(t, B(), r);
  }
  function B() {
    return "anchor:idl";
  }
  const P = E.struct([
    E.publicKey("authority"),
    E.vecU8("data")
  ]);
  function V(r) {
    return P.decode(r);
  }
  function H(r) {
    const t = K.alloc(1e3), e = P.encode(r, t);
    return t.slice(0, e);
  }
  let _, y, b, F, A, Y;
  ie = Object.freeze(Object.defineProperty({
    __proto__: null,
    IdlError: M,
    accountSize: L,
    decodeIdlAccount: V,
    encodeIdlAccount: H,
    idlAddress: N,
    isIdlAccounts: v,
    seed: B
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  _ = 0.5;
  y = 1;
  b = 1;
  F = 1e8;
  A = 5;
  Y = 25e4;
  ne = {
    percentile: _,
    percentileMultiple: y,
    min: b,
    max: F
  };
  oe = async function(r, t) {
    const [e, s] = await g.chainFromRpc(r);
    return new Z(s, T.fromSecretKey(w.decode(t)), r);
  };
  ae = async function(r, t, e) {
    const [s, i] = await g.chainFromRpc(r), n = typeof t == "string" ? T.fromSecretKey(w.decode(t)) : t;
    if ((e == null ? void 0 : e.priorityFee) && e.priorityFee.percentile && e.priorityFee.percentile > 1) throw new Error("priorityFeePercentile must be a number between 0 and 1");
    return new j(r, i, n, (e == null ? void 0 : e.debug) ?? false, (e == null ? void 0 : e.priorityFee) ?? {}, (e == null ? void 0 : e.retries) ?? A, e == null ? void 0 : e.sendOpts);
  };
  j = class {
    constructor(t, e, s, i = false, n, o = A, a) {
      __publicField(this, "_rpc");
      __publicField(this, "_chain");
      __publicField(this, "_keypair");
      __publicField(this, "_debug");
      __publicField(this, "_priorityFee");
      __publicField(this, "_maxResubmits");
      __publicField(this, "_sendOpts");
      this._rpc = t, this._chain = e, this._keypair = s, this._debug = i, this._priorityFee = n, this._maxResubmits = o, this._sendOpts = a, this._sendOpts = this._sendOpts ?? {
        preflightCommitment: this._rpc.commitment
      };
    }
    chain() {
      return this._chain;
    }
    address() {
      return this._keypair.publicKey.toBase58();
    }
    retryable(t) {
      var _a;
      if (t instanceof U) return true;
      if (!(t instanceof O) || !t.message.includes("Transaction simulation failed")) return false;
      if (t.message.includes("Blockhash not found")) return true;
      const e = (_a = t.logs) == null ? void 0 : _a.find((s) => s.startsWith("Program log: Error: "));
      return e ? !!(e.includes("Not enough bytes") || e.includes("Unexpected length of input")) : false;
    }
    async signAndSend(t) {
      var _a;
      let { blockhash: e, lastValidBlockHeight: s } = await g.latestBlock(this._rpc);
      const i = [];
      for (const a of t) {
        const { description: u, transaction: { transaction: c, signers: h } } = a;
        this._debug && console.log(`Signing: ${u} for ${this.address()}`);
        let l;
        ((_a = this._priorityFee) == null ? void 0 : _a.percentile) && this._priorityFee.percentile > 0 && (l = await q(this._rpc, c, this._priorityFee.percentile, this._priorityFee.percentileMultiple, this._priorityFee.min, this._priorityFee.max)), this._debug && x(c);
        for (let d = 0; d < this._maxResubmits; d++) try {
          if (f(c)) {
            if (l && d === 0) {
              const m = C.decompile(c.message);
              m.instructions.push(...l), c.message = m.compileToV0Message();
            }
            c.message.recentBlockhash = e, c.sign([
              this._keypair,
              ...h ?? []
            ]);
          } else l && d === 0 && c.add(...l), c.recentBlockhash = e, c.lastValidBlockHeight = s, c.partialSign(this._keypair, ...h ?? []);
          this._debug && console.log("Submitting transactions ");
          const { signature: p } = await g.sendTxWithRetry(this._rpc, c.serialize(), this._sendOpts);
          i.push(p);
          break;
        } catch (p) {
          if (d === this._maxResubmits - 1 || !this.retryable(p)) throw p;
          this._debug && console.log(`Failed to send transaction on attempt ${d}, retrying: `, p);
          const { blockhash: m, lastValidBlockHeight: R } = await g.latestBlock(this._rpc);
          s = R, e = m;
        }
      }
      this._debug && console.log("Waiting for confirmation for: ", i);
      const o = (await Promise.all(i.map(async (a) => {
        try {
          return await this._rpc.confirmTransaction({
            signature: a,
            blockhash: e,
            lastValidBlockHeight: s
          }, this._rpc.commitment);
        } catch (u) {
          throw console.error("Failed to confirm transaction: ", u), u;
        }
      }))).filter((a) => a.value.err).map((a) => a.value.err);
      if (o.length > 0) throw new Error(`Failed to confirm transaction: ${o}`);
      return i;
    }
  };
  x = function(r) {
    if (f(r)) {
      console.log(r.signatures);
      const t = r.message, e = t.getAccountKeys();
      t.compiledInstructions.forEach((s) => {
        console.log("Program", e.get(s.programIdIndex).toBase58()), console.log("Data: ", W.encode(s.data)), console.log("Keys: ", s.accountKeyIndexes.map((i) => [
          i,
          e.get(i).toBase58()
        ]));
      });
    } else console.log(r.signatures), console.log(r.feePayer), r.instructions.forEach((t) => {
      console.log("Program", t.programId.toBase58()), console.log("Data: ", t.data.toString("hex")), console.log("Keys: ", t.keys.map((e) => [
        e,
        e.pubkey.toBase58()
      ]));
    });
  };
  q = async function(r, t, e = _, s = y, i = b, n = F) {
    const [o, a] = await Promise.all([
      X(r, t),
      G(r, t, e, s, i, n)
    ]);
    return [
      k.setComputeUnitLimit({
        units: o
      }),
      k.setComputeUnitPrice({
        microLamports: a
      })
    ];
  };
  X = async function(r, t) {
    var _a;
    let e = Y;
    try {
      const s = await (f(t), r.simulateTransaction(t));
      s.value.err && console.error(`Error simulating Solana transaction: ${s.value.err}`), ((_a = s == null ? void 0 : s.value) == null ? void 0 : _a.unitsConsumed) && (e = Math.round(s.value.unitsConsumed * 1.2));
    } catch (s) {
      console.error(`Failed to calculate compute unit limit for Solana transaction: ${s}`);
    }
    return e;
  };
  I = async function(r, t) {
    if (f(t)) {
      const e = (await Promise.all(t.message.addressTableLookups.map((n) => r.getAddressLookupTable(n.accountKey)))).map((n) => n.value).filter((n) => n !== null), s = t.message, i = s.getAccountKeys({
        addressLookupTableAccounts: e ?? void 0
      });
      return s.compiledInstructions.flatMap((n) => n.accountKeyIndexes).map((n) => s.isAccountWritable(n) ? i.get(n) : null).filter(Boolean);
    } else return t.instructions.flatMap((e) => e.keys).map((e) => e.isWritable ? e.pubkey : null).filter(Boolean);
  };
  G = async function(r, t, e = _, s = y, i = b, n = F) {
    let o = i;
    const a = await I(r, t);
    try {
      const u = await r.getRecentPrioritizationFees({
        lockedWritableAccounts: a
      });
      if (u) {
        const c = u.map((l) => l.prioritizationFee).sort((l, d) => l - d), h = Math.ceil(c.length * e);
        if (c.length > h) {
          let l = c[h];
          s > 0 && (l *= s), o = Math.max(o, l);
        }
      }
    } catch (u) {
      console.error("Error fetching Solana recent fees", u);
    }
    return Math.min(Math.max(o, i), n);
  };
  ce = async function(r, t, e = _, s = y, i = b, n = F) {
    const o = e * 1e4;
    if (o < 1 || o > 1e4) throw new Error("percentile must be between 0.0001 and 1");
    const a = r._rpcRequest, c = [
      await I(r, t),
      {
        percentile: o
      }
    ], h = await a("getRecentPrioritizationFees", c);
    if (h.error) throw new Error(h.error);
    const l = h.result.map((p) => p.prioritizationFee);
    if (l.length === 0) return i;
    const d = Math.floor(z(l) * (s > 0 ? s : 1));
    return $(d, i, n);
  };
  Z = class {
    constructor(t, e, s, i = false) {
      __publicField(this, "_chain");
      __publicField(this, "_keypair");
      __publicField(this, "_rpc");
      __publicField(this, "_debug");
      this._chain = t, this._keypair = e, this._rpc = s, this._debug = i;
    }
    chain() {
      return this._chain;
    }
    address() {
      return this._keypair.publicKey.toBase58();
    }
    async sign(t) {
      const { blockhash: e } = await g.latestBlock(this._rpc), s = [];
      for (const i of t) {
        const { description: n, transaction: { transaction: o, signers: a } } = i;
        this._debug && console.log(`Signing: ${n} for ${this.address()}`), this._debug && x(o), f(o) ? (o.message.recentBlockhash = e, o.sign([
          this._keypair,
          ...a ?? []
        ]), s.push(D.from(o.serialize()))) : (o.recentBlockhash = e, o.partialSign(this._keypair, ...a ?? []), s.push(o.serialize()));
      }
      return s;
    }
  };
});
export {
  ne as DefaultPriorityFeeOptions,
  de as SolanaAddress,
  he as SolanaChain,
  g as SolanaPlatform,
  j as SolanaSendSigner,
  Z as SolanaSigner,
  pe as SolanaUnsignedTransaction,
  ge as SolanaZeroAddress,
  __tla,
  fe as _platform,
  ie as anchor,
  me as camelCase,
  q as createPriorityFeeInstructions,
  X as determineComputeBudget,
  G as determinePriorityFee,
  ce as determinePriorityFeeTritonOne,
  ae as getSolanaSignAndSendSigner,
  oe as getSolanaSigner,
  I as getWritableAccounts,
  f as isVersionedTransaction,
  x as logTxDetails,
  _e as unusedArbiterFee,
  ye as unusedNonce,
  be as upperFirst,
  Fe as utils
};
