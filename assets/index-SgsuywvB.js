var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { T as l, g as Ct, i as pt, a as yt, b as kt, t as H, W as f, s as y, c as $, r as B, f as S, d as bt, p as j, e as I, h as K, j as At, k as vt, l as v, m as It, n as xt, o as T, q as A, u as Bt, v as g, w as J, x as Et, y as Y, z as nt, A as Z, B as V, C as Pt, D as q, E as st, F as it, G as ot, H as rt, I as z, J as P, K as x, L as ct, M as p, N as Dt, O as St, P as Ft, R as zt, Q as Ot, _ as Mt, S as _t, U as Nt, __tla as __tla_0 } from "./wormhole-CvW2q_D1.js";
import { V as Ga, X as Ua, Y as Va, Z as Wa, $ as $a, a0 as ja, a1 as Qa, a2 as Xa, a3 as Ha, a4 as Ka, a5 as Ja, a6 as Ya, a7 as Za, a8 as qa, a9 as te, aa as ae, ab as ee, ac as ne, ad as se, ae as ie, af as oe, ag as re, ah as ce, ai as de, aj as he, ak as ue, al as le, am as fe, an as me, ao as ge, ap as we, aq as Te, ar as Ce, as as pe, at as ye, au as ke, av as be, aw as Ae, ax as ve, ay as Ie, az as xe, aA as Be, aB as Ee, aC as Pe, aD as De, aE as Se, aF as Fe, aG as ze, aH as Oe, aI as Me, aJ as _e, aK as Ne, __tla as __tla_1 } from "./wormhole-CvW2q_D1.js";
import { q as _, v as Rt, j as Lt, w as Gt, x as Ut, y as Vt, z as Wt, k as $t, A as jt, B as Qt, C as Xt, D as Ht, E as Kt, u as Jt, F as D, l as E, G as tt, H as at, I as O, U as dt, T as Yt, J as Zt, K as b, L as qt, M as ta, __tla as __tla_2 } from "./api-BSeuNwV4.js";
import { N as Le, O as Ge, P as Ue, Q as Ve, R as We, S as $e, V as je, W as Qe, X as Xe, a as He, Y as Ke, Z as Je, _ as Ye, $ as Ze, a0 as qe, a1 as tn, a2 as an, a3 as en, c as nn, a4 as sn, a5 as on, a6 as rn, a7 as cn, a8 as dn, a9 as hn, aa as un, ab as ln, ac as fn, ad as mn, ae as gn, af as wn, o as Tn, ag as Cn, i as pn, d as yn, ah as kn, ai as bn, aj as An, ak as vn, al as In, am as xn, an as Bn, ao as En, ap as Pn, e as Dn, aq as Sn, ar as Fn, as as zn, at as On, au as Mn, av as _n, aw as Nn, ax as Rn, ay as Ln, az as Gn, aA as Un, h as Vn, aB as Wn, aC as $n, aD as jn, aE as Qn, aF as Xn, aG as Hn, aH as Kn, aI as Jn, m as Yn, aJ as Zn, aK as qn, aL as ts, aM as as, aN as es, aO as ns, n as ss, p as is, aP as os, aQ as rs, aR as cs, aS as ds, aT as hs, aU as us, aV as ls, aW as fs, aX as ms, aY as gs, aZ as ws, a_ as Ts, r as Cs, a$ as ps, b0 as ys, s as ks, b1 as bs, b2 as As, b3 as vs, b4 as Is, b5 as xs, b6 as Bs, t as Es, b7 as Ps, b8 as Ds, b9 as Ss, ba as Fs, bb as zs, __tla as __tla_3 } from "./api-BSeuNwV4.js";
import { c as Ms, __tla as __tla_4 } from "./create-BawFMS03.js";
import { e as Ns, k as Rs, y as Ls, s as Gs, A as Us, B as Vs, __tla as __tla_5 } from "./index-B9aAL_1d.js";
import { g as $s, __tla as __tla_6 } from "./balances-CaIsCjk5.js";
import "./crypto-CvxmDsJu.js";
import "./vendor-C3gEtrcs.js";
let w, Na, Pa, _a, Da, aa, za, Ea, ht, Oa, Ma, Fa, Sa;
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
  var _a2;
  let ea, na, sa, ia, oa, ra, ca, da, ha;
  ht = [
    "Mainnet",
    "Testnet",
    "Devnet"
  ];
  aa = (h) => ht.includes(h);
  Ea = Object.freeze(Object.defineProperty({
    __proto__: null,
    isNetwork: aa,
    networks: ht
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  ea = [
    [
      "Mainnet",
      [
        [
          "Arbitrum",
          "0x00000000eFE302BEAA2b3e6e1b18d08D69a9012a"
        ],
        [
          "Avalanche",
          "0x00000000eFE302BEAA2b3e6e1b18d08D69a9012a"
        ],
        [
          "Base",
          "0x00000000eFE302BEAA2b3e6e1b18d08D69a9012a"
        ],
        [
          "Bsc",
          "0x00000000eFE302BEAA2b3e6e1b18d08D69a9012a"
        ],
        [
          "Ethereum",
          "0x00000000eFE302BEAA2b3e6e1b18d08D69a9012a"
        ],
        [
          "Monad",
          "0x00000000eFE302BEAA2b3e6e1b18d08D69a9012a"
        ],
        [
          "Plume",
          "0x00000000eFE302BEAA2b3e6e1b18d08D69a9012a"
        ],
        [
          "Polygon",
          "0x00000000eFE302BEAA2b3e6e1b18d08D69a9012a"
        ],
        [
          "Solana",
          "AUSD1jCcCyPLybk1YnvPWsHQSrZ46dxwoMniN4N2UEB9"
        ],
        [
          "Sui",
          "0x2053d08c1e2bd02791056171aab0fd12bd7cd7efad2ab8f6b9c8902f14df2ff2::ausd::AUSD"
        ]
      ]
    ],
    [
      "Testnet",
      [
        [
          "ArbitrumSepolia",
          "0xa9012a055bd4e0eDfF8Ce09f960291C09D5322dC"
        ],
        [
          "BaseSepolia",
          "0xa9012a055bd4e0eDfF8Ce09f960291C09D5322dC"
        ],
        [
          "OptimismSepolia",
          "0xa9012a055bd4e0eDfF8Ce09f960291C09D5322dC"
        ],
        [
          "Sepolia",
          "0xa9012a055bd4e0eDfF8Ce09f960291C09D5322dC"
        ]
      ]
    ]
  ];
  na = _(ea);
  Pa = Object.freeze(Object.defineProperty({
    __proto__: null,
    ausdContract: na
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  sa = [
    [
      "Mainnet",
      [
        [
          "Ethereum",
          "0x6B175474E89094C44Da98b954EedeAC495271d0F"
        ]
      ]
    ]
  ];
  ia = _(sa);
  Da = Object.freeze(Object.defineProperty({
    __proto__: null,
    daiContract: ia
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  oa = [
    [
      "Mainnet",
      [
        [
          "Arbitrum",
          "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9"
        ],
        [
          "Avalanche",
          "0x9702230A8Ea53601f5cD2dc00fDbC13d4dF4A8c7"
        ],
        [
          "Base",
          "0xfde4C96c8593536E31F229EA8f37b2ADa2699bb2"
        ],
        [
          "Bsc",
          "0x55d398326f99059fF775485246999027B3197955"
        ],
        [
          "Celo",
          "0x48065fbBE25f71C9282ddf5e1cD6D6A887483D5e"
        ],
        [
          "Ethereum",
          "0xdAC17F958D2ee523a2206206994597C13D831ec7"
        ],
        [
          "Optimism",
          "0x94b008aA00579c1307B0EF2c499aD98a8ce58e58"
        ],
        [
          "Polygon",
          "0xc2132D05D31c914a87C6611C10748AEb04B58e8F"
        ],
        [
          "Solana",
          "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB"
        ],
        [
          "Monad",
          "0xe7cd86e13AC4309349F30B3435a9d337750fC82D"
        ],
        [
          "Unichain",
          "0x9151434b16b9763660705744891fA906F660EcC5"
        ]
      ]
    ]
  ];
  ra = _(oa);
  Sa = Object.freeze(Object.defineProperty({
    __proto__: null,
    usdtContract: ra
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  ca = [
    [
      "Mainnet",
      [
        [
          "Ethereum",
          "0xdC035D45d973E3EC169d2276DDab16f1e407384F"
        ],
        [
          "Solana",
          "USDSwr9ApdHk5bvJKMjzff41FfuX8bSxdKcR81vTwcA"
        ],
        [
          "Base",
          "0x820C137fa70C8691f0e44Dc420a5e53c168921Dc"
        ]
      ]
    ]
  ];
  da = _(ca);
  Fa = Object.freeze(Object.defineProperty({
    __proto__: null,
    usdsContract: da
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  ha = {
    binary: "uint",
    size: 1,
    custom: {
      to: (h) => h > 0,
      from: (h) => h ? 1 : 0
    }
  };
  za = Object.freeze(Object.defineProperty({
    __proto__: null,
    amountItem: Rt,
    boolItem: ha,
    chainItem: Lt,
    circleDomainItem: Gt,
    circleNonceItem: Ut,
    dateConversion: Vt,
    fixedChainItem: Wt,
    fixedLengthStringItem: $t,
    guardianSetItem: jt,
    payloadIdItem: Qt,
    sequenceItem: Xt,
    signatureItem: Ht,
    stringConversion: Kt,
    universalAddressItem: Jt
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  w = (_a2 = class {
    constructor(t, a, e, n) {
      __publicField(this, "wh");
      __publicField(this, "gateway");
      __publicField(this, "gatewayIbcBridge");
      __publicField(this, "gatewayAddress");
      __publicField(this, "_state");
      __publicField(this, "msg");
      __publicField(this, "transfer");
      __publicField(this, "transactions", []);
      __publicField(this, "vaas");
      __publicField(this, "ibcTransfers", []);
      this._state = l.Created, this.wh = t, this.transfer = a, this.gatewayAddress = {
        chain: w.chain,
        address: D(w.chain, this.wh.config.chains[w.chain].contracts.gateway)
      }, this.gateway = e, this.gatewayIbcBridge = n, this.msg = Ct(this.transfer);
    }
    getTransferState() {
      return this._state;
    }
    static async from(t, a, e) {
      const n = t.getChain(w.chain), s = await n.getIbcBridge();
      if (pt(a)) {
        const c = t.getChain(a.from.chain), u = t.getChain(a.to.chain), d = await w.destinationOverrides(c, u, n, a);
        return a = {
          ...a,
          ...d
        }, new w(t, a, n, s);
      }
      let i, o = [];
      if (yt(a)) o.push(a), i = await w._fromTransaction(t, a);
      else if (kt(a)) i = await w._fromMsgId(t, a);
      else throw new Error("Invalid `from` parameter for GatewayTransfer");
      const r = new w(t, i, n, s);
      return r.transactions = o, r._state = l.SourceInitiated, await r.fetchAttestation(e), r;
    }
    static async _fromMsgId(t, a, e) {
      const n = await w.getTransferVaa(t, a, e);
      let s = n.payloadName === "TransferWithPayload" ? n.payload.payload : void 0, i, o = {
        ...n.payload.to
      };
      if (s) try {
        const m = H(E.decode(s));
        i = m.nonce, s = m.payload ? E.encode(m.payload) : void 0;
        const C = tt(m.chain), k = E.decode(at.decode(m.recipient));
        o = f.chainAddress(C, k);
      } catch {
      }
      const { chain: r, address: c, amount: u } = n.payload.token;
      return {
        token: {
          chain: r,
          address: c
        },
        amount: u,
        from: {
          chain: a.chain,
          address: a.emitter
        },
        to: o,
        nonce: i,
        payload: s
      };
    }
    static async _fromTransaction(t, a, e) {
      const { chain: n, txid: s } = a, i = t.getChain(n);
      if (i.supportsIbcBridge()) {
        const r = await i.getIbcBridge(), [c] = await r.lookupTransferFromTx(a.txid);
        return w.ibcTransfertoGatewayTransfer(c);
      }
      const o = await f.parseMessageFromTx(i, s);
      if (!o) throw new Error("No messages found in transaction");
      return await w._fromMsgId(t, o[0], e);
    }
    static ibcTransfertoGatewayTransfer(t) {
      const a = f.tokenId(t.id.chain, t.data.denom), e = H(t.data.memo), n = tt(e.chain), s = at.decode(e.recipient), i = O(n) === "Cosmwasm" ? f.chainAddress(n, E.decode(s)) : {
        chain: n,
        address: new dt(s).toNative(n)
      }, o = e.payload ? E.encode(e.payload) : void 0;
      return {
        token: a,
        amount: BigInt(t.data.amount),
        from: {
          chain: t.id.chain,
          address: D(t.id.chain, t.data.sender)
        },
        to: i,
        fee: BigInt(e.fee),
        payload: o
      };
    }
    async initiateTransfer(t) {
      if (this._state !== l.Created) throw new Error("Invalid state transition in `start`");
      return this.transactions = await (this.fromGateway() ? this._transferIbc(t) : this._transfer(t)), this._state = l.SourceInitiated, this.transactions.map((a) => a.txid);
    }
    async _transfer(t) {
      const a = this.transfer.token.address, e = this.wh.getChain(this.transfer.from.chain), s = (await e.getTokenBridge()).transfer(this.transfer.from.address, this.gatewayAddress, a, this.transfer.amount, E.encode(JSON.stringify(this.msg)));
      return y(e, s, t);
    }
    async _transferIbc(t) {
      if ($(this.transfer.token.address)) throw new Error("Native not supported for IBC transfers");
      const a = this.wh.getChain(this.transfer.from.chain), n = (await a.getIbcBridge()).transfer(this.transfer.from.address, this.transfer.to, this.transfer.token.address, this.transfer.amount);
      return y(a, n, t);
    }
    async fetchAttestation(t) {
      if (this._state < l.SourceInitiated || this._state > l.Attested) throw new Error("Invalid state transition in `fetchAttestation`");
      const a = [], e = this.wh.getChain(this.transfer.from.chain);
      if (this.fromGateway()) {
        const n = await e.getIbcBridge();
        if (this.ibcTransfers = (await Promise.all(this.transactions.map((i) => n.lookupTransferFromTx(i.txid)))).flat(), this.ibcTransfers.length != 1) throw new Error("why?");
        const [s] = this.ibcTransfers;
        if (this.toGateway()) {
          const o = await B(() => S(this.gatewayIbcBridge, s.id), 5e3, t, "Gateway:IbcBridge:LookupWormchainIbcTransfer");
          if (o === null) throw new Error("Gateway IBC transfer not found after retries exhausted");
          const r = o[1], u = await this.wh.getChain(this.transfer.to.chain).getIbcBridge(), m = await B(() => S(u, r.id), 5e3, t, "Gateway:IbcBridge:LookupDestinationIbcTransfer");
          if (!m) throw new Error("Destination IBC transfer not found after retries exhausted");
          this.ibcTransfers.push(m[0]);
        } else {
          const r = await B(() => this.gatewayIbcBridge.lookupMessageFromIbcMsgId(s.id), 5e3, t, "Gateway:IbcBridge:LookupWormholeMessageFromIncomingIbcMessage");
          if (!r) throw new Error("Matching wormhole message not found after retries exhausted");
          const c = await w.getTransferVaa(this.wh, r);
          this.vaas = [
            {
              id: r,
              vaa: c
            }
          ], a.push(r);
        }
      } else {
        const n = this.transactions[this.transactions.length - 1], [s] = await f.parseMessageFromTx(e, n.txid), i = await w.getTransferVaa(this.wh, s);
        this.vaas = [
          {
            id: s,
            vaa: i
          }
        ], a.push(s);
        const o = 2e3, r = 5e3, c = await this.gateway.getTokenBridge();
        if (!await B(() => bt(c, i), o, t, "Gateway:TokenBridge:IsVaaRedeemed")) throw new Error("VAA not redeemed after retries exhausted");
        const C = await B(() => S(this.gatewayIbcBridge, this.msg), o, t, "Gateway:IbcBridge:WormchainTransferInitiated");
        if (!C) throw new Error("Wormchain transfer not found after retries exhausted");
        const [k] = C;
        k.pending, this.ibcTransfers.push(k);
        const Tt = await this.wh.getChain(this.transfer.to.chain).getIbcBridge(), X = await B(() => S(Tt, k.id), r, t, "Destination:IbcBridge:WormchainTransferCompleted");
        if (!X) throw new Error("IBC Transfer into destination not found after retries exhausted" + JSON.stringify(k));
        this.ibcTransfers.push(X[0]);
      }
      return a.push(...this.ibcTransfers.map((n) => n.id)), this._state = l.Attested, a;
    }
    async completeTransfer(t) {
      if (this._state < l.Attested) throw new Error("Invalid state transition in `finish`. Be sure to call `fetchAttestation`.");
      if (this.toGateway()) return [
        this.transactions[this.transactions.length - 1].txid
      ];
      if (!this.vaas) throw new Error("No VAA details available to redeem");
      if (this.vaas.length > 1) throw new Error("Expected 1 vaa");
      const a = this.wh.getChain(t.chain()), e = D(t.chain(), t.address()), n = await a.getTokenBridge(), { vaa: s } = this.vaas[0];
      if (!s) throw new Error(`No VAA found for ${this.vaas[0].id.sequence}`);
      const i = n.redeem(e, s), o = await y(a, i, t);
      return this.transactions.push(...o), this._state = l.DestinationInitiated, o.map(({ txid: r }) => r);
    }
    fromGateway() {
      return this.gatewayIbcBridge.getTransferChannel(this.transfer.from.chain) !== null;
    }
    toGateway() {
      return this.gatewayIbcBridge.getTransferChannel(this.transfer.to.chain) !== null;
    }
  }, __publicField(_a2, "chain", "Wormchain"), _a2);
  (function(h) {
    async function t(n, s, i) {
      const o = await n.getVaa(s, Yt.getTransferDiscriminator(), i);
      if (!o) throw new Error(`No VAA Available: ${s.chain}/${s.emitter}/${s.sequence}`);
      return o;
    }
    h.getTransferVaa = t;
    async function a(n, s, i, o) {
      const r = {
        ...o
      };
      if (O(o.to.chain) === "Solana") {
        const c = await h.lookupDestinationToken(n, s, i, r.token);
        r.to = await s.getTokenAccount(r.to.address, c.address);
      }
      return r;
    }
    h.destinationOverrides = a;
    async function e(n, s, i, o) {
      let r;
      if ($(o.address)) r = await n.getNativeWrappedTokenId();
      else try {
        r = await (await n.getTokenBridge()).getOriginalAsset(o.address);
      } catch {
        try {
          r = await (await i.getTokenBridge()).getOriginalAsset(o.address);
        } catch {
          r = o;
        }
      }
      if (r.chain === s.chain) return r;
      const u = await (await s.getTokenBridge()).getWrappedAsset(r);
      return {
        chain: s.chain,
        address: u
      };
    }
    h.lookupDestinationToken = e;
  })(w || (w = {}));
  class N {
    constructor(t) {
      __publicField(this, "wh");
      this.wh = t;
    }
    transferUrl(t) {
      return `https://wormholescan.io/#/tx/${t}?network=${this.wh.network}`;
    }
  }
  class R extends N {
  }
  __publicField(R, "IS_AUTOMATIC", true);
  function ua(h) {
    return !!h.constructor.IS_AUTOMATIC;
  }
  class L extends N {
  }
  __publicField(L, "NATIVE_GAS_DROPOFF_SUPPORTED", false);
  __publicField(L, "IS_AUTOMATIC", false);
  function ut(h) {
    return h.complete !== void 0;
  }
  class la extends N {
  }
  function lt(h) {
    return h.finalize !== void 0;
  }
  function fa(h) {
    return typeof h.buildInitiateTransactions == "function";
  }
  function ma(h) {
    return typeof h.buildCompleteTransactions == "function";
  }
  function ga(h) {
    return typeof h.buildFinalizeTransactions == "function";
  }
  class Q {
    constructor(t, a, e, n, s, i) {
      __publicField(this, "source");
      __publicField(this, "destination");
      __publicField(this, "fromChain");
      __publicField(this, "toChain");
      __publicField(this, "sender");
      __publicField(this, "recipient");
      this.fromChain = t, this.toChain = a, this.source = e, this.destination = n, this.sender = s, this.recipient = i;
    }
    parseAmount(t) {
      return j(t, this.source.decimals);
    }
    amountFromBaseUnits(t) {
      return I(t, this.source.decimals);
    }
    async displayQuote(t, a, e) {
      let n = {
        success: true,
        sourceToken: {
          token: t.sourceToken.token,
          amount: I(t.sourceToken.amount, this.source.decimals)
        },
        destinationToken: {
          token: t.destinationToken.token,
          amount: I(t.destinationToken.amount, this.destination.decimals)
        },
        params: a
      };
      if (t.relayFee) {
        const i = await (t.relayFee.token.chain === this.fromChain.chain ? this.fromChain : this.toChain).getDecimals(t.relayFee.token.address);
        n.relayFee = {
          token: t.relayFee.token,
          amount: I(t.relayFee.amount, i)
        };
      }
      if (t.destinationNativeGas) {
        const s = await this.toChain.getDecimals("native");
        n.destinationNativeGas = I(t.destinationNativeGas, s);
      }
      return t.warnings && t.warnings.length > 0 && (n.warnings = [
        ...t.warnings
      ]), n.eta = t.eta, n.expires = t.expires, e && (n.details = e), n;
    }
    static async create(t, a, e, n) {
      e = e ?? t.getChain(a.source.chain), n = n ?? t.getChain(a.destination.chain);
      const s = await K(e, a.source, a.sourceDecimals), i = await K(n, a.destination, a.destinationDecimals);
      return new Q(e, n, s, i, a.sender, a.recipient);
    }
  }
  class ft extends Error {
    constructor(t) {
      super(`Minimum transfer amount is ${At(t)}`);
      __publicField(this, "min");
      this.min = t;
    }
    minAmount() {
      return this.min;
    }
  }
  class wa extends Error {
    constructor(t) {
      super("Unable to fetch a quote");
      __publicField(this, "internalError");
      this.internalError = t;
    }
  }
  async function mt(h, t, a, e = 120 * 1e3, n = console.log) {
    const s = Date.now();
    n("Checking transfer state...");
    for await (t of h.track(t, 120 * 1e3)) n("Current Transfer State: ", l[t.state]);
    if (vt(t)) return t;
    if (ut(h) && v(t) && a) {
      n("Completing transfer...");
      const o = await h.complete(a, t);
      n("Completed transfer with txids: ", o);
    }
    if (lt(h) && It(t) && a) {
      n("Finalizing transfer...");
      const o = await h.finalize(a, t);
      n("Finalized transfer with txids: ", o);
    }
    const i = e - (Date.now() - s);
    return i > 0 ? (n("Transfer not complete, trying again in a 2000ms..."), await new Promise((r) => setTimeout(r, 2e3)), mt(h, t, a, i)) : t;
  }
  function Ta(h = {}) {
    class t extends G {
    }
    __publicField(t, "config", h);
    return t;
  }
  const _G = class _G extends R {
    constructor() {
      super(...arguments);
      __publicField(this, "staticConfig", this.constructor.config);
    }
    static supportedNetworks() {
      return [
        "Mainnet",
        "Testnet"
      ];
    }
    static supportedChains(t) {
      return t === "Devnet" ? [] : xt(t);
    }
    static async supportedDestinationTokens(t, a, e) {
      try {
        return [
          await T.lookupDestinationToken(a, e, t)
        ];
      } catch {
        return [];
      }
    }
    getDefaultOptions() {
      return {
        nativeGas: 0
      };
    }
    async validate(t, a) {
      if (t.fromChain.chain === t.toChain.chain) return {
        valid: false,
        params: a,
        error: new Error("Source and destination chains cannot be the same")
      };
      const e = j(a.amount, t.source.decimals), n = a.options ?? this.getDefaultOptions();
      if (n.nativeGas && (n.nativeGas > 1 || n.nativeGas < 0)) throw new Error("Native gas must be between 0.0 and 1.0 (0% and 100%)");
      return {
        valid: true,
        params: {
          amount: a.amount,
          normalizedParams: {
            amount: e
          },
          options: n
        }
      };
    }
    async quote(t, a) {
      var _a3, _b, _c, _d;
      const e = _G.supportedChains(t.fromChain.network);
      if (!e.includes(t.fromChain.chain) || !e.includes(t.toChain.chain)) return {
        success: false,
        error: new Error(`Executor Token Bridge does not support transfers from ${t.fromChain.chain} to ${t.toChain.chain}`)
      };
      try {
        const n = await t.toChain.getExecutorTokenBridge();
        let { gasLimit: s, msgValue: i } = await n.estimateMsgValueAndGasLimit(t.destination.id, t.recipient);
        if (this.staticConfig.tokenOverrides) {
          const u = A(t.destination.id), d = (_b = (_a3 = this.staticConfig.tokenOverrides[this.wh.network]) == null ? void 0 : _a3[t.destination.id.chain]) == null ? void 0 : _b[u];
          (d == null ? void 0 : d.gasLimit) !== void 0 && (s = d.gasLimit);
        }
        let o;
        if (this.staticConfig.getFee) {
          const u = Bt(a.normalizedParams.amount, T.MAX_DECIMALS), d = await this.staticConfig.getFee({
            amount: g(u),
            sourceChain: t.fromChain.chain,
            sourceToken: A(t.source.id),
            destinationChain: t.toChain.chain,
            destinationToken: A(t.destination.id)
          });
          if (d.transferTokenFee > 0n || d.nativeTokenFee > 0n) {
            if (!d.referrerAddress) throw new Error(`getFee returned a referrer fee (transferTokenFee=${d.transferTokenFee}, nativeTokenFee=${d.nativeTokenFee}) but no referrerAddress for ${t.fromChain.chain}`);
            o = {
              transferTokenFee: d.transferTokenFee,
              nativeTokenFee: d.nativeTokenFee,
              referrer: f.chainAddress(t.fromChain.chain, d.referrerAddress)
            };
          }
        }
        let r;
        if (a.options.nativeGas !== void 0) {
          const u = await T.getExecutorGasDropOffLimit(this.wh, t.toChain, (_c = this.staticConfig.executor) == null ? void 0 : _c.getCapabilities);
          r = u > 0n ? BigInt(Math.round(a.options.nativeGas * 100)) * u / 100n : 0n;
        }
        const c = await T.quoteTransfer(this.wh, t.fromChain, t.toChain, {
          token: t.source.id,
          amount: g(a.normalizedParams.amount),
          protocol: "ExecutorTokenBridge",
          nativeGas: r,
          msgValue: i,
          gasLimit: s,
          referrerFee: o
        }, (_d = this.staticConfig.executor) == null ? void 0 : _d.getCapabilities);
        return t.displayQuote(c, a, c.details);
      } catch (n) {
        return {
          success: false,
          error: n
        };
      }
    }
    async initiate(t, a, e, n) {
      const { fromChain: s } = t, i = f.chainAddress(a.chain(), a.address()), o = await this._buildInitiateXfer(t, i, n, e), r = await y(s, o, a);
      let c = 0;
      return (async () => {
        for (; c < 20; ) {
          try {
            const [d] = await this.wh.getExecutorTxStatus(r.at(-1).txid, s.chain);
            if (d) break;
          } catch {
          }
          c++, await new Promise((d) => setTimeout(d, 2e3));
        }
      })(), {
        from: s.chain,
        to: n.chain,
        state: l.SourceInitiated,
        originTxs: r
      };
    }
    async complete(t, a) {
      if (!v(a) && !J(a)) throw new Error("The source must be finalized in order to complete the transfer");
      if (!a.attestation) throw new Error("The receipt must have an attestation to complete the transfer");
      const e = f.chainAddress(t.chain(), t.address()), n = await this._buildCompleteXfer(e, a), s = this.wh.getChain(a.to), i = await y(s, n, t);
      return {
        ...a,
        state: l.DestinationInitiated,
        attestation: a.attestation,
        destinationTxs: i
      };
    }
    async resume(t) {
      const a = await T.from(this.wh, t, 1e4);
      if (a.transfer.protocol !== "ExecutorTokenBridge") throw new Error("Can only resume ExecutorTokenBridge transfers");
      return T.getReceipt(a);
    }
    async *track(t, a) {
      for await (const e of T.track(this.wh, t, a)) yield e;
    }
    async _buildInitiateXfer(t, a, e, n) {
      if (!n.details) throw new Error("Missing quote details");
      const { executorQuote: s, referrerFee: i } = n.details;
      if (!s) throw new Error("ExecutorTokenBridge transfer requires an executorQuote");
      const o = s.relayInstructions.requests.find((d) => d.request.type === "GasDropOffInstruction");
      o && o.request.type === "GasDropOffInstruction" && o.request.recipient.equals(dt.ZERO) && (o.request.recipient = e.address.toUniversalAddress());
      const r = Et(t.source.id) ? t.source.id.address : t.source.id, c = D(a.chain, a.address.toString());
      return (await t.fromChain.getExecutorTokenBridge()).transfer(c, e, r, g(n.params.normalizedParams.amount), s, i);
    }
    async _buildCompleteXfer(t, a) {
      const n = await this.wh.getChain(a.to).getExecutorTokenBridge(), s = D(t.chain, t.address.toString()), i = a.attestation.attestation;
      return n.redeem(s, i);
    }
    async buildInitiateTransactions(t, a, e, n) {
      return Y(await this._buildInitiateXfer(t, a, e, n));
    }
    async buildCompleteTransactions(t, a) {
      if (!v(a) && !J(a)) throw new Error("The source must be finalized in order to complete the transfer");
      if (!a.attestation) throw new Error("The receipt must have an attestation to complete the transfer");
      return Y(await this._buildCompleteXfer(t, a));
    }
  };
  __publicField(_G, "IS_EXECUTOR_ROUTE", true);
  __publicField(_G, "NATIVE_GAS_DROPOFF_SUPPORTED", true);
  __publicField(_G, "config", {});
  __publicField(_G, "meta", {
    name: "TokenBridgeExecutorRoute"
  });
  let G = _G;
  class Ca extends L {
    static supportedNetworks() {
      return [
        "Mainnet",
        "Testnet"
      ];
    }
    static supportedChains(t) {
      return nt(t);
    }
    static async supportedDestinationTokens(t, a, e) {
      try {
        return [
          await T.lookupDestinationToken(a, e, t)
        ];
      } catch {
        return [];
      }
    }
    getDefaultOptions() {
      return {
        payload: void 0
      };
    }
    async validate(t, a) {
      if (t.fromChain.chain === t.toChain.chain) return {
        valid: false,
        params: a,
        error: new Error("Source and destination chains cannot be the same")
      };
      if (O(t.fromChain.chain) === "Solana" && await t.fromChain.isToken2022(t.source.id.address)) return {
        valid: false,
        params: a,
        error: new Error("Transfers of Token-2022 assets from SVM chains are not supported via the Manual Token Bridge route. Please use the Executor Token Bridge route instead.")
      };
      if (O(t.toChain.chain) === "Solana" && await t.toChain.isToken2022(t.destination.id.address)) return {
        valid: false,
        params: a,
        error: new Error("Transfers of Token-2022 assets to SVM chains are not supported via the Manual Token Bridge route. Please use the Executor Token Bridge route instead.")
      };
      const e = j(a.amount, t.source.decimals);
      return {
        valid: true,
        params: {
          amount: a.amount,
          normalizedParams: {
            amount: e
          },
          options: {}
        }
      };
    }
    async quote(t, a) {
      try {
        return t.displayQuote(await T.quoteTransfer(this.wh, t.fromChain, t.toChain, {
          token: t.source.id,
          amount: g(a.normalizedParams.amount),
          protocol: "TokenBridge",
          ...a.options
        }), a);
      } catch (e) {
        return {
          success: false,
          error: e
        };
      }
    }
    async initiate(t, a, e, n) {
      const { params: s } = e, i = await T.destinationOverrides(t.fromChain, t.toChain, this.toTransferDetails(t, s, f.chainAddress(a.chain(), a.address()), n)), o = await T.transfer(t.fromChain, i, a);
      return {
        from: i.from.chain,
        to: i.to.chain,
        state: l.SourceInitiated,
        originTxs: o
      };
    }
    async complete(t, a) {
      if (!v(a)) throw new Error("The source must be finalized in order to complete the transfer");
      const e = this.wh.getChain(a.to), n = await T.redeem(e, a.attestation.attestation, t);
      return {
        ...a,
        state: l.DestinationInitiated,
        destinationTxs: n
      };
    }
    async resume(t) {
      const a = await T.from(this.wh, t, 1e4);
      if (a.transfer.protocol !== "TokenBridge") throw new Error("Transfer is not a TokenBridge transfer");
      return T.getReceipt(a);
    }
    async *track(t, a) {
      yield* T.track(this.wh, t, a);
    }
    toTransferDetails(t, a, e, n) {
      return {
        from: e,
        to: n,
        protocol: "TokenBridge",
        token: t.source.id,
        amount: g(a.normalizedParams.amount),
        ...a.options
      };
    }
  }
  __publicField(Ca, "meta", {
    name: "ManualTokenBridge"
  });
  const W = 15n, gt = 100n, F = 10000n;
  const _M = class _M extends R {
    static supportedNetworks() {
      return [
        "Mainnet"
      ];
    }
    static supportedChains(t) {
      return Z.has(t) ? Z.get(t) : [];
    }
    static async supportedDestinationTokens(t, a, e) {
      const [, n] = V(a.network, a.chain, t), s = A(n), i = await a.getPorticoBridge();
      if (!i.supportedTokens().some((d) => A(d.token) === s)) return [];
      try {
        const d = await i.getTransferrableToken(s);
        await T.lookupDestinationToken(a, e, d);
      } catch {
        return [];
      }
      const r = (await e.getPorticoBridge()).supportedTokens(), { tokenMap: c } = e.config, u = i.getTokenGroup(s);
      return r.filter((d) => (d.group === u || d.group === "ETH" && u === "WETH" || d.group === "WETH" && u === "ETH") && (!c || Pt.byAddress(c, A(d.token)))).map((d) => d.token);
    }
    getDefaultOptions() {
      return {};
    }
    async validate(t, a) {
      try {
        if (t.fromChain.chain === t.toChain.chain) return {
          valid: false,
          params: a,
          error: new Error("Source and destination chains cannot be the same")
        };
        if (!_M.supportedChains(t.fromChain.network).includes(t.fromChain.chain) || !_M.supportedChains(t.toChain.network).includes(t.toChain.chain)) throw new Error("Protocol not supported");
        const { fromChain: e, toChain: n, source: s, destination: i } = t, { network: o } = e, [, r] = V(o, e.chain, s.id), [, c] = V(o, n.chain, i.id), u = await e.getPorticoBridge(), d = await n.getPorticoBridge(), m = await u.getTransferrableToken(A(r)), C = await d.getTransferrableToken(A(c));
        return {
          valid: true,
          params: {
            amount: a.amount,
            options: a.options ?? this.getDefaultOptions(),
            normalizedParams: {
              amount: t.parseAmount(a.amount),
              canonicalSourceToken: m,
              canonicalDestinationToken: C,
              sourceToken: r,
              destinationToken: c
            }
          }
        };
      } catch (e) {
        return {
          valid: false,
          error: e,
          params: a
        };
      }
    }
    async quote(t, a) {
      try {
        const e = await this.fetchSwapQuote(t, a), n = Math.max(t.source.decimals, t.destination.decimals), s = g(q(a.normalizedParams.amount, n));
        if (g(q(I(e.minAmountFinish, t.destination.decimals), n)) < s - s * gt / F) throw new Error("Slippage too high");
        const r = await (await t.toChain.getPorticoBridge()).quoteRelay(a.normalizedParams.canonicalDestinationToken.address, a.normalizedParams.destinationToken.address), c = {
          swapAmounts: e,
          relayerFee: r
        }, u = c.swapAmounts.minAmountFinish - r;
        return u < 0n ? {
          success: false,
          error: new Error(`Amount too low for slippage and fee, would result in negative destination amount (${u})`)
        } : await t.displayQuote({
          sourceToken: {
            token: a.normalizedParams.sourceToken,
            amount: g(a.normalizedParams.amount)
          },
          destinationToken: {
            token: a.normalizedParams.destinationToken,
            amount: c.swapAmounts.minAmountFinish - r
          },
          relayFee: {
            token: a.normalizedParams.destinationToken,
            amount: r
          },
          eta: it(t.fromChain.chain),
          expires: st(0, 5, 0)
        }, a, c);
      } catch (e) {
        return {
          success: false,
          error: e
        };
      }
    }
    async initiate(t, a, e, n) {
      const { params: s, details: i } = e, o = t.source.id.address, r = t.destination.id, c = await t.fromChain.getPorticoBridge(), u = c.getTokenGroup(o.toString()), m = (await t.toChain.getPorticoBridge()).getPorticoAddress(u), C = c.transfer(f.parseAddress(a.chain(), a.address()), n, o, g(s.normalizedParams.amount), r, m, i);
      return {
        originTxs: await y(t.fromChain, C, a),
        state: l.SourceInitiated,
        from: t.fromChain.chain,
        to: t.toChain.chain
      };
    }
    async *track(t, a) {
      if (ot(t) || rt(t)) {
        const { txid: e } = t.originTxs[t.originTxs.length - 1], n = await this.wh.getVaa(e, "PorticoBridge:Transfer", a);
        if (!n) throw new Error("No VAA found for transaction: " + e);
        const s = {
          chain: n.emitterChain,
          emitter: n.emitterAddress,
          sequence: n.sequence
        };
        t = {
          ...t,
          state: l.Attested,
          attestation: {
            id: s,
            attestation: n
          }
        }, yield t;
      }
      v(t) && await (await this.wh.getChain(t.to).getPorticoBridge()).isTransferCompleted(t.attestation.attestation) && (t = {
        ...t,
        state: l.DestinationFinalized
      }, yield t), yield t;
    }
    async complete(t, a) {
      if (!v(a)) throw new Error("Source must be attested");
      const e = await this.wh.getChain(a.to), n = await e.getPorticoBridge(), s = f.chainAddress(t.chain(), t.address()), i = n.redeem(s.address, a.attestation.attestation);
      return await y(e, i, t);
    }
    async fetchSwapQuote(t, a) {
      const e = await t.fromChain.getPorticoBridge(), n = g(a.normalizedParams.amount), s = e.getTokenGroup(A(a.normalizedParams.sourceToken)), i = await e.quoteSwap(a.normalizedParams.sourceToken.address, a.normalizedParams.canonicalSourceToken.address, s, n), o = i * W / F;
      if (o >= i) throw new Error("Start slippage too high");
      const r = await t.toChain.getPorticoBridge(), c = i - o, u = await r.quoteSwap(a.normalizedParams.canonicalDestinationToken.address, a.normalizedParams.destinationToken.address, s, c), d = u * W / F;
      if (d >= u) throw new Error("Finish slippage too high");
      const m = u - d;
      return {
        minAmountStart: c,
        minAmountFinish: m
      };
    }
  };
  __publicField(_M, "NATIVE_GAS_DROPOFF_SUPPORTED", false);
  __publicField(_M, "meta", {
    name: "AutomaticPortico"
  });
  let M = _M;
  class pa extends L {
    static supportedNetworks() {
      return [
        "Mainnet",
        "Testnet"
      ];
    }
    static supportedChains(t) {
      return z.has(t) ? z.get(t) : [];
    }
    static async supportedDestinationTokens(t, a, e) {
      const n = P.get(a.network, a.chain);
      if (!n) return [];
      if (!x(t, f.tokenId(a.chain, n))) return [];
      const { network: s, chain: i } = e;
      return P.has(s, i) ? [
        f.chainAddress(i, P.get(s, i))
      ] : [];
    }
    getDefaultOptions() {
      return {
        payload: void 0
      };
    }
    async validate(t, a) {
      return t.fromChain.chain === t.toChain.chain ? {
        valid: false,
        params: a,
        error: new Error("Source and destination chains cannot be the same")
      } : {
        valid: true,
        params: {
          normalizedParams: {
            amount: t.parseAmount(a.amount)
          },
          options: a.options ?? this.getDefaultOptions(),
          ...a
        }
      };
    }
    async quote(t, a) {
      try {
        const e = await ct();
        return e || t.displayQuote(await p.quoteTransfer(t.fromChain, t.toChain, {
          automatic: false,
          amount: g(a.normalizedParams.amount),
          ...a.options
        }), a);
      } catch (e) {
        return {
          success: false,
          error: e
        };
      }
    }
    async initiate(t, a, e, n) {
      const { params: s } = e, i = await p.destinationOverrides(t.fromChain, t.toChain, this.toTransferDetails(s, f.chainAddress(a.chain(), a.address()), n)), o = await p.transfer(t.fromChain, i, a), r = await p.getTransferMessage(t.fromChain, o[o.length - 1].txid);
      return {
        from: i.from.chain,
        to: i.to.chain,
        state: l.SourceFinalized,
        originTxs: o,
        attestation: {
          id: r.id,
          attestation: {
            message: r.message
          }
        }
      };
    }
    async complete(t, a) {
      if (!v(a)) throw new Error("The source must be finalized in order to complete the transfer");
      const { id: e, attestation: n } = a.attestation;
      if (Zt.isCircleAttestation(n)) {
        const { message: s, attestation: i } = n;
        if (!i) throw new Error(`No Circle attestation for ${e}`);
        const o = this.wh.getChain(a.to), r = await o.getCircleBridge(), c = f.parseAddress(t.chain(), t.address()), u = r.redeem(c, s, i), d = await y(o, u, t);
        return {
          ...a,
          state: l.DestinationInitiated,
          destinationTxs: d
        };
      } else return a;
    }
    async resume(t) {
      const a = await p.from(this.wh, t, 1e4);
      return p.getReceipt(a);
    }
    async *track(t, a) {
      yield* p.track(this.wh, t, a);
    }
    toTransferDetails(t, a, e) {
      return {
        from: a,
        to: e,
        amount: g(t.normalizedParams.amount),
        automatic: false,
        ...t.options
      };
    }
  }
  __publicField(pa, "meta", {
    name: "ManualCCTP",
    provider: "Circle"
  });
  class ya extends R {
    static supportedNetworks() {
      return [
        "Mainnet",
        "Testnet"
      ];
    }
    static supportedChains(t) {
      return z.has(t) ? z.get(t).filter((e) => {
        var _a3;
        return (_a3 = Dt.get(t, e)) == null ? void 0 : _a3.wormholeRelayer;
      }) : [];
    }
    static async supportedDestinationTokens(t, a, e) {
      const n = P.get(a.network, a.chain);
      if (!n) return [];
      if (!x(t, f.tokenId(a.chain, n))) return [];
      const { network: s, chain: i } = e;
      return P.has(s, i) ? [
        f.chainAddress(i, P.get(s, i))
      ] : [];
    }
    getDefaultOptions() {
      return {
        nativeGas: 0
      };
    }
    async validate(t, a) {
      try {
        if (t.fromChain.chain === t.toChain.chain) return {
          valid: false,
          params: a,
          error: new Error("Source and destination chains cannot be the same")
        };
        const e = a.options ?? this.getDefaultOptions();
        return {
          valid: true,
          params: {
            normalizedParams: await this.normalizeTransferParams(t, a),
            options: e,
            ...a
          }
        };
      } catch (e) {
        return {
          valid: false,
          params: a,
          error: e
        };
      }
    }
    async quote(t, a) {
      try {
        const e = await ct();
        return e || t.displayQuote(await p.quoteTransfer(t.fromChain, t.toChain, {
          automatic: true,
          amount: g(a.normalizedParams.amount),
          nativeGas: g(a.normalizedParams.nativeGasAmount)
        }), a);
      } catch (e) {
        return {
          success: false,
          error: e
        };
      }
    }
    async normalizeTransferParams(t, a) {
      const e = t.parseAmount(a.amount), s = await (await t.fromChain.getAutomaticCircleBridge()).getRelayerFee(t.toChain.chain), i = s * 105n / 100n;
      if (g(e) < i) throw new ft(I(i, e.decimals));
      const o = g(e) - s, c = (a.options ?? this.getDefaultOptions()).nativeGas ?? 0;
      if (c > 1 || c < 0) throw new Error("Native gas must be between 0.0 and 1.0 (0% and 100%)");
      let u = 0n;
      if (c > 0) {
        let m = await (await t.toChain.getAutomaticCircleBridge()).maxSwapAmount();
        o < m && (m = o);
        const C = 1e4, k = BigInt(Math.floor(c * C));
        u = m * k / BigInt(C), u === o && u > 0n && (u -= 1n);
      }
      return {
        fee: t.amountFromBaseUnits(s),
        amount: e,
        nativeGasAmount: t.amountFromBaseUnits(u)
      };
    }
    toTransferDetails(t, a, e) {
      return {
        from: a,
        to: e,
        amount: g(t.normalizedParams.amount),
        automatic: true,
        nativeGas: g(t.normalizedParams.nativeGasAmount)
      };
    }
    async initiate(t, a, e, n) {
      const { params: s } = e;
      let i = this.toTransferDetails(s, f.chainAddress(a.chain(), a.address()), n), o = await p.transfer(t.fromChain, i, a);
      const r = await p.getTransferMessage(t.fromChain, o[o.length - 1].txid);
      return {
        from: i.from.chain,
        to: i.to.chain,
        state: l.SourceFinalized,
        originTxs: o,
        attestation: {
          id: r.id,
          attestation: {
            message: r.message
          }
        }
      };
    }
    async *track(t, a) {
      yield* p.track(this.wh, t, a);
    }
  }
  __publicField(ya, "NATIVE_GAS_DROPOFF_SUPPORTED", true);
  __publicField(ya, "meta", {
    name: "AutomaticCCTP",
    provider: "Circle"
  });
  class ka extends L {
    static supportedNetworks() {
      return [
        "Mainnet"
      ];
    }
    static supportedChains(t) {
      return nt(t);
    }
    static async supportedDestinationTokens(t, a, e) {
      if (!await this.isSourceTokenSupported(t, a)) return [];
      const n = b.getNativeTbtcToken(e.chain);
      if (n) return [
        n
      ];
      const s = await e.getTokenBridge(), i = b.getNativeTbtcToken("Ethereum");
      try {
        const o = await s.getWrappedAsset(i);
        return [
          f.tokenId(e.chain, o.toString())
        ];
      } catch (o) {
        if (o.message.includes("not a wrapped asset")) return [];
        throw o;
      }
    }
    getDefaultOptions() {
      return {};
    }
    async validate(t, a) {
      return t.fromChain.chain === t.toChain.chain ? {
        valid: false,
        params: a,
        error: new Error("Source and destination chains cannot be the same")
      } : {
        valid: true,
        params: {
          normalizedParams: {
            amount: t.parseAmount(a.amount)
          },
          options: a.options ?? this.getDefaultOptions(),
          ...a
        }
      };
    }
    async quote(t, a) {
      const e = it(t.fromChain.chain) + St;
      return {
        success: true,
        params: a,
        sourceToken: {
          token: t.source.id,
          amount: a.normalizedParams.amount
        },
        destinationToken: {
          token: t.destination.id,
          amount: a.normalizedParams.amount
        },
        eta: e,
        expires: st(24, 0, 0)
      };
    }
    async initiate(t, a, e, n) {
      const s = g(e.params.normalizedParams.amount), i = t.fromChain.chain === "Ethereum", o = b.getNativeTbtcToken(t.fromChain.chain), r = o && x(e.sourceToken.token, o);
      if (r && !i) return await this.transferNative(t, a, n, s);
      if (!r && i) throw new Error("Only tbtc can be transferred on Ethereum");
      if (!r) {
        const u = await (await t.fromChain.getTokenBridge()).getOriginalAsset(e.sourceToken.token.address), d = b.getNativeTbtcToken("Ethereum");
        if (!x(u, d)) throw new Error("Can only transfer wrapped tbtc");
      }
      return await this.transferWrapped(t, a, n, s);
    }
    async transferNative(t, a, e, n) {
      const s = f.parseAddress(a.chain(), a.address()), o = (await t.fromChain.getTBTCBridge()).transfer(s, e, n);
      return {
        originTxs: await y(t.fromChain, o, a),
        state: l.SourceInitiated,
        from: t.fromChain.chain,
        to: t.toChain.chain
      };
    }
    async transferWrapped(t, a, e, n) {
      const s = f.parseAddress(a.chain(), a.address()), i = Ft.get(t.fromChain.network, e.chain), o = await t.fromChain.getTokenBridge();
      let r;
      return i ? r = o.transfer(s, f.chainAddress(t.toChain.chain, i), t.source.id.address, n, e.address.toUniversalAddress().toUint8Array()) : r = o.transfer(s, e, t.source.id.address, n), {
        originTxs: await y(t.fromChain, r, a),
        state: l.SourceInitiated,
        from: t.fromChain.chain,
        to: t.toChain.chain
      };
    }
    async complete(t, a) {
      if (!v(a)) throw new Error("The source must be finalized in order to complete the transfer");
      const e = f.parseAddress(t.chain(), t.address()), n = a.attestation.attestation, s = this.wh.getChain(a.to);
      let i;
      if (n.payloadLiteral === "TBTCBridge:GatewayTransfer") i = (await s.getTBTCBridge()).redeem(e, n);
      else {
        const r = await s.getTokenBridge(), c = qt(n), u = ta("TokenBridge:Transfer", c);
        i = r.redeem(e, u);
      }
      const o = await y(s, i, t);
      return {
        ...a,
        state: l.DestinationInitiated,
        destinationTxs: o
      };
    }
    async resume(t) {
      const a = await this.wh.getVaa(t.txid, b.getTransferDiscriminator());
      if (!a) throw new Error("No VAA found for transaction: " + t);
      const e = b.getNativeTbtcToken("Ethereum"), { chain: n, address: s } = a.payload.token;
      if (!x(e, {
        chain: n,
        address: s
      })) throw new Error("Can only resume tbtc transfers");
      return {
        originTxs: [
          t
        ],
        state: l.Attested,
        from: a.emitterChain,
        to: a.payload.to.chain,
        attestation: {
          id: {
            chain: a.emitterChain,
            emitter: a.emitterAddress,
            sequence: a.sequence
          },
          attestation: a
        }
      };
    }
    async *track(t, a) {
      if (ot(t) || rt(t)) {
        const { txid: e } = t.originTxs[t.originTxs.length - 1], n = await this.wh.getVaa(e, b.getTransferDiscriminator(), a);
        if (!n) throw new Error("No VAA found for transaction: " + e);
        const s = {
          chain: n.emitterChain,
          emitter: n.emitterAddress,
          sequence: n.sequence
        };
        t = {
          ...t,
          state: l.Attested,
          attestation: {
            id: s,
            attestation: n
          }
        }, yield t;
      }
      v(t) && await (await this.wh.getChain(t.to).getTokenBridge()).isTransferCompleted(t.attestation.attestation) && (t = {
        ...t,
        state: l.DestinationFinalized
      }, yield t), yield t;
    }
    static async isSourceTokenSupported(t, a) {
      if ($(t.address)) return false;
      const e = b.getNativeTbtcToken(a.chain);
      if (e && x(t, e)) return true;
      const n = await a.getTokenBridge();
      try {
        const s = await n.getOriginalAsset(t.address);
        return x(s, b.getNativeTbtcToken("Ethereum"));
      } catch (s) {
        if (s.message.includes("not a wrapped asset")) return false;
        throw s;
      }
    }
  }
  __publicField(ka, "meta", {
    name: "ManualTBTC"
  });
  const ba = Object.freeze(Object.defineProperty({
    __proto__: null,
    AutomaticCCTPRoute: ya,
    AutomaticPorticoRoute: M,
    AutomaticRoute: R,
    BPS_PER_HUNDRED_PERCENT: F,
    CCTPRoute: pa,
    ExecutorTokenBridgeRoute: G,
    FinalizableRoute: la,
    MAX_SLIPPAGE_BPS: gt,
    ManualRoute: L,
    MinAmountError: ft,
    RelayFailedError: zt,
    Route: N,
    RouteResolver: Ot,
    RouteTransferRequest: Q,
    SLIPPAGE_BPS: W,
    TBTCRoute: ka,
    TokenBridgeRoute: Ca,
    UnavailableError: wa,
    checkAndCompleteTransfer: mt,
    executorTokenBridgeRoute: Ta,
    hasBuildCompleteTransactions: ma,
    hasBuildFinalizeTransactions: ga,
    hasBuildInitiateTransactions: fa,
    isAutomatic: ua,
    isFinalizable: lt,
    isManual: ut
  }, Symbol.toStringTag, {
    value: "Module"
  })), et = /* @__PURE__ */ new Set();
  function U(h, t, a) {
    return new Proxy(a, {
      get(e, n, s) {
        return et.has(h) || (et.add(h), console.warn(`[@wormhole-foundation/sdk-connect] Accessing "${h}" from the barrel export is deprecated and will be removed in a future version. Use: import * as ${h} from "@wormhole-foundation/sdk-connect/${t}"`)), Reflect.get(e, n, s);
      }
    });
  }
  Oa = U("routes", "routes", ba);
  Ma = U("tasks", "tasks", Mt);
  _a = U("circleApi", "circle-api", _t);
  Na = U("api", "whscan-api", Nt);
});
export {
  Le as AutomaticCircleBridge,
  Ge as AutomaticTokenBridge,
  Ga as CONFIG,
  Ua as ChainContext,
  Zt as CircleBridge,
  p as CircleTransfer,
  Va as DEFAULT_NETWORK,
  Wa as DEFAULT_TASK_TIMEOUT,
  Ue as ErrNotWrapped,
  Ve as ExecutorTokenBridge,
  w as GatewayTransfer,
  $a as PlatformContext,
  ja as PlatformNativeSigner,
  We as PorticoBridge,
  zt as RelayFailedError,
  $e as RelayStatus,
  je as RequestPrefix,
  Qe as Signature,
  Xe as SignatureUtils,
  b as TBTCBridge,
  Yt as TokenBridge,
  T as TokenTransfer,
  l as TransferState,
  dt as UniversalAddress,
  f as Wormhole,
  __tla,
  Qa as _suiExecutorTokenBridgeState,
  He as addFixedValues,
  Xa as amount,
  Na as api,
  Ha as applyChainsConfigConfigOverrides,
  Ka as applyWormholeConfigOverrides,
  Ke as asChainId,
  Je as assertChain,
  Ye as assertChainId,
  Pa as ausd,
  Ze as automaticCircleBridgeNamedPayloads,
  qe as automaticTokenBridgeNamedPayloads,
  tn as baseLayout,
  an as bitsetItem,
  en as blindDeserializePayload,
  nn as bound,
  Ja as buildConfig,
  sn as calcLayoutSize,
  on as calcStaticLayoutSize,
  A as canonicalAddress,
  rn as cartesianRightRecursive,
  cn as chain,
  dn as chainIdToChain,
  hn as chainIds,
  un as chainToChainId,
  O as chainToPlatform,
  ln as chains,
  Ya as circle,
  _a as circleApi,
  fn as circleBridgeNamedPayloads,
  mn as circleConnectPayload,
  gn as circleMessageLayout,
  Y as collectTransactions,
  wn as column,
  Tn as composeLiteral,
  Cn as connectPayload,
  _ as constMap,
  Za as contracts,
  qa as create,
  Ms as createVAA,
  pn as customizableBytes,
  Da as dai,
  te as decimals,
  yn as decomposeLiteral,
  kn as deliveryInstructionLayout,
  bn as depositWithPayloadLayout,
  ta as deserialize,
  An as deserializeLayout,
  vn as deserializePayload,
  In as deserializeUnknownVaa,
  xn as dynamicItemsOfLayout,
  Ns as ed25519,
  Bn as encoding,
  En as entries,
  Pn as enumItem,
  Dn as envelopeLayout,
  ae as executor,
  Sn as executorTokenBridgeNamedPayloads,
  Fn as exhaustiveDeserialize,
  ee as explorer,
  zn as fetchCapabilities,
  On as fetchQuote,
  Mn as fetchStatus,
  _n as filterIndexes,
  Pt as filters,
  ne as finality,
  Nn as fixedItemsOfLayout,
  Rn as flatten,
  Ln as gasDropOffInstructionLayout,
  Gn as gasInstructionLayout,
  Ct as gatewayTransferMsg,
  se as getContracts,
  ie as getExecutorTokenBridgeDestinationAddresses,
  Un as getPayloadLayout,
  oe as getProtocolInitializer,
  $s as getWalletBalances,
  re as graphQL,
  ce as guardians,
  Vn as headerLayout,
  v as isAttested,
  Wn as isChain,
  $n as isChainId,
  jn as isChainSpecificAddress,
  de as isCircleMessageId,
  Qn as isCircleTransferDetails,
  vt as isCompleted,
  he as isDestinationQueued,
  ue as isEqualCaseInsensitive,
  J as isFailed,
  le as isGatewayIbcTransferMsg,
  pt as isGatewayTransferDetails,
  fe as isGatewayTransferMsg,
  me as isGatewayTransferWithPayloadMsg,
  ge as isIbcMessageId,
  we as isIbcTransferInfo,
  Te as isInReview,
  $ as isNative,
  Ce as isNativeSigner,
  aa as isNetwork,
  Xn as isPlatform,
  It as isRedeemed,
  pe as isRefunded,
  ye as isRelayFailed,
  x as isSameToken,
  ke as isSignAndSendSigner,
  be as isSignOnlySigner,
  Ae as isSigner,
  rt as isSourceFinalized,
  ot as isSourceInitiated,
  Et as isTokenId,
  Hn as isTokenTransferDetails,
  yt as isTransactionIdentifier,
  ve as isUnattestedTokenId,
  Ie as isVersionedProtocolInitializer,
  kt as isWormholeMessageId,
  Rs as keccak256,
  Kn as layoutDiscriminator,
  za as layoutItems,
  Jn as lazyInstantiate,
  xe as makeGatewayTransferMsg,
  Yn as median,
  Zn as namedPayloads,
  Be as nativeChainIds,
  qn as nativeIsRegistered,
  Ee as nativeTokenId,
  Ea as network,
  Pe as networkPlatformConfigs,
  ht as networks,
  ts as onlyOnce,
  as as optionItem,
  es as payload,
  ns as payloadDiscriminator,
  ss as payloadFactory,
  is as payloadLiteralToPayloadItemLayout,
  os as pickWithOrder,
  rs as platform,
  cs as platformToAddressFormat,
  ds as platformToChains,
  hs as platforms,
  us as porticoFlagSetLayout,
  ls as porticoPayloadLayout,
  fs as porticoTransferLayout,
  De as protocolIsRegistered,
  ms as quoteLayout,
  gs as range,
  ws as registerNative,
  Ts as registerPayloadType,
  Cs as registerPayloadTypes,
  Se as registerProtocol,
  ps as relayInstructionLayout,
  ys as relayInstructionsLayout,
  V as resolveWrappedToken,
  Oa as routes,
  Fe as rpc,
  Ls as secp256k1,
  qt as serialize,
  ks as serializeLayout,
  bs as serializePayload,
  Gs as sha256,
  Us as sha3_256,
  Vs as sha512_256,
  ze as signAndSendWait,
  y as signSendWait,
  As as signedQuoteLayout,
  vs as stacksNttReceiveInstructionLayout,
  Oe as suiExecutorTokenBridgeState,
  Me as supportsIndexerUtils,
  Ma as tasks,
  Is as tbtc,
  xs as tbtcPayloadLayout,
  Bs as throws,
  _e as time,
  tt as toChain,
  Es as toChainId,
  H as toGatewayMsg,
  D as toNative,
  Ps as toUniversal,
  Ds as tokenBridgeNamedPayloads,
  Ss as transferLayout,
  Fs as transferWithPayloadLayout,
  Ne as universalAddress,
  Fa as usds,
  Sa as usdt,
  zs as zip
};
