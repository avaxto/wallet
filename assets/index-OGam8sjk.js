var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { P as Pe, g as kn, d as q, a as O, b as Tn, c as ue, e as rn, S as sn, f as Pn, h as Bn, __tla as __tla_0 } from "./index-BA07-2-Y.js";
import { P as c, n as v, o as de, a as Cn, p as In, q as bn, r as Y, s as A, t as I, v as U, B as En, w as Be, x as Un, b as G, e as y, N as z, y as ye, K as $, z as D, g as an, A as Ve, D as we, c as De, V as $e, _ as on, __tla as __tla_1 } from "./index-DPwYwVjg.js";
import { a as l } from "./crypto-CoV0x5dM.js";
import { createApproveInstruction as Wn, getMint as oe, getMetadataPointerState as vn, getMinimumBalanceForRentExemptAccount as Se, ACCOUNT_SIZE as ae, createInitializeAccountInstruction as Me, createCloseAccountInstruction as Ae, getAssociatedTokenAddress as Ge, getAccount as Rn, getExtensionTypes as xn, ExtensionType as Nn, createTransferCheckedInstruction as Ce, createAssociatedTokenAccountInstruction as Fn, getAssociatedTokenAddressSync as X, createAssociatedTokenAccountIdempotentInstruction as zn, __tla as __tla_2 } from "./index-Dkg-Yj2z.js";
import { U as cn, t as w, E as ke, j as Kn, k as Qe, w as Ln, s as He, l as Ye, n as _n, r as qn, __tla as __tla_3 } from "./api-V7cxiqtb.js";
import { a as L, e as On, g as Vn, x as Dn, r as un, __tla as __tla_4 } from "./wormhole-C6xcu0sz.js";
import { __tla as __tla_5 } from "./index-Cy2fdchf.js";
import "./vendor-BXTw0jaR.js";
import { __tla as __tla_6 } from "./create-1PzKU6f8.js";
let ce, _, me, be, tn, Ze, ve, j, ne, ee, mn, Ie, We, ut, je, dt, Xe, mt, ft, Ft, W, zt, ct, en, nn, Mt, kt, Kt, Z, le, te, Q, re, Ue, Ee, ge, B, K, J, Je, lt, Ot, gt, Vt, ht, xt, pt, Nt, yt, Rt, Lt, St, gn, _t, At, fn, qt, wt, Te;
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
  var _a, _b, _c;
  B = function(r) {
    return v([
      l.from("config")
    ], r);
  };
  Rt = async function(r, e, n) {
    return r.getAccountInfo(B(e), n).then((t) => Ie.deserialize(de(t)));
  };
  Ie = class {
    constructor(e) {
      __publicField(this, "wormhole");
      this.wormhole = new c(e);
    }
    static deserialize(e) {
      if (e.length != 32) throw new Error("data.length != 32");
      const n = e.subarray(0, 32);
      return new Ie(n);
    }
  };
  le = function(r, e) {
    return v([
      new c(e).toBuffer()
    ], r);
  };
  Q = function(r, e, n) {
    const t = typeof n == "string" ? new cn(n).toUint8Array() : n;
    return v([
      (() => {
        const s = l.alloc(2);
        return s.writeUInt16BE(e), s;
      })(),
      t
    ], r);
  };
  xt = async function(r, e, n) {
    return r.getAccountInfo(new c(e), n).then((t) => be.deserialize(de(t)));
  };
  be = class {
    constructor(e, n) {
      __publicField(this, "chain");
      __publicField(this, "contract");
      this.chain = e, this.contract = n;
    }
    static deserialize(e) {
      if (e.length != 34) throw new Error("data.length != 34");
      const n = e.readUInt16LE(0), t = e.subarray(2, 34);
      return new be(n, t);
    }
  };
  Ee = function(r) {
    return v([
      l.from("sender")
    ], r);
  };
  Ue = function(r) {
    return v([
      l.from("redeemer")
    ], r);
  };
  Z = function(r) {
    return v([
      l.from("authority_signer")
    ], r);
  };
  te = function(r) {
    return v([
      l.from("custody_signer")
    ], r);
  };
  re = function(r) {
    return v([
      l.from("mint_signer")
    ], r);
  };
  J = function(r, e, n) {
    return v([
      l.from("wrapped"),
      (() => {
        const t = l.alloc(2);
        return t.writeUInt16BE(e), t;
      })(),
      n
    ], r);
  };
  K = function(r, e) {
    return v([
      l.from("meta"),
      new c(e).toBuffer()
    ], r);
  };
  Te = async function(r, e, n, t) {
    return r.getAccountInfo(K(e, n), t).then((s) => We.deserialize(de(s)));
  };
  We = class {
    constructor(e, n, t, s) {
      __publicField(this, "chain");
      __publicField(this, "tokenAddress");
      __publicField(this, "originalDecimals");
      __publicField(this, "lastUpdatedSequence");
      this.chain = e, this.tokenAddress = n, this.originalDecimals = t, this.lastUpdatedSequence = s;
    }
    static deserialize(e) {
      if (e.length !== 35 && e.length !== 43) throw new Error(`invalid wrapped meta length: ${e.length}`);
      const n = e.readUInt16LE(0), t = e.subarray(2, 34), s = e.readUInt8(34), i = e.length === 43 ? e.readBigUInt64LE(35) : void 0;
      return new We(n, t, s, i);
    }
  };
  je = function(r, e, n, t, s) {
    return Wn(new c(e), Z(r), new c(n), t, void 0, new c(s));
  };
  class $n {
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
      return Cn(this.idl, e) ?? 0;
    }
  }
  class Gn {
    constructor(e) {
    }
    decode(e) {
      throw new Error("Token Bridge program does not have events");
    }
  }
  class Qn {
    constructor(e) {
    }
    encode(e, n) {
      switch (e) {
        case "initialize":
          return Hn(n);
        case "attestToken":
          return Yn(n);
        case "completeNative":
          return jn(n);
        case "completeWrapped":
          return Zn(n);
        case "transferWrapped":
          return Jn(n);
        case "transferNative":
          return Xn(n);
        case "registerChain":
          return et(n);
        case "createWrapped":
          return nt(n);
        case "upgradeContract":
          return tt(n);
        case "transferWrappedWithPayload":
          return rt(n);
        case "transferNativeWithPayload":
          return st(n);
        default:
          throw new Error(`Invalid instruction: ${e}`);
      }
    }
    encodeState(e, n) {
      throw new Error("Token Bridge program does not have state");
    }
  }
  var b;
  (function(r) {
    r[r.Initialize = 0] = "Initialize", r[r.AttestToken = 1] = "AttestToken", r[r.CompleteNative = 2] = "CompleteNative", r[r.CompleteWrapped = 3] = "CompleteWrapped", r[r.TransferWrapped = 4] = "TransferWrapped", r[r.TransferNative = 5] = "TransferNative", r[r.RegisterChain = 6] = "RegisterChain", r[r.CreateWrapped = 7] = "CreateWrapped", r[r.UpgradeContract = 8] = "UpgradeContract", r[r.CompleteNativeWithPayload = 9] = "CompleteNativeWithPayload", r[r.CompleteWrappedWithPayload = 10] = "CompleteWrappedWithPayload", r[r.TransferWrappedWithPayload = 11] = "TransferWrappedWithPayload", r[r.TransferNativeWithPayload = 12] = "TransferNativeWithPayload";
  })(b || (b = {}));
  function R(r, e) {
    const n = e === void 0 ? 0 : e.length, t = l.alloc(1 + n);
    return t.writeUInt8(r, 0), n > 0 && t.write(e.toString("hex"), 1, "hex"), t;
  }
  function Hn({ wormhole: r }) {
    const e = l.alloc(32);
    return e.write(new c(r).toBuffer().toString("hex"), 0, "hex"), R(b.Initialize, e);
  }
  function Yn({ nonce: r }) {
    const e = l.alloc(4);
    return e.writeUInt32LE(r, 0), R(b.AttestToken, e);
  }
  function jn({}) {
    return R(b.CompleteNative);
  }
  function Zn({}) {
    return R(b.CompleteWrapped);
  }
  function dn({ nonce: r, amount: e, fee: n, targetAddress: t, targetChain: s }) {
    if (typeof e != "bigint" && (e = BigInt(e)), typeof n != "bigint" && (n = BigInt(n)), !l.isBuffer(t)) throw new Error("targetAddress must be Buffer");
    const i = l.alloc(54);
    return i.writeUInt32LE(r, 0), i.writeBigUInt64LE(e, 4), i.writeBigUInt64LE(n, 12), i.write(t.toString("hex"), 20, "hex"), i.writeUInt16LE(s, 52), i;
  }
  function Jn({ nonce: r, amount: e, fee: n, targetAddress: t, targetChain: s }) {
    return R(b.TransferWrapped, dn({
      nonce: r,
      amount: e,
      fee: n,
      targetAddress: t,
      targetChain: s
    }));
  }
  function Xn({ nonce: r, amount: e, fee: n, targetAddress: t, targetChain: s }) {
    return R(b.TransferNative, dn({
      nonce: r,
      amount: e,
      fee: n,
      targetAddress: t,
      targetChain: s
    }));
  }
  function et({}) {
    return R(b.RegisterChain);
  }
  function nt({}) {
    return R(b.CreateWrapped);
  }
  function tt({}) {
    return R(b.UpgradeContract);
  }
  function ln({ nonce: r, amount: e, targetAddress: n, targetChain: t, payload: s }) {
    if (typeof e != "bigint" && (e = BigInt(e)), !l.isBuffer(n)) throw new Error("targetAddress must be Buffer");
    if (!l.isBuffer(s)) throw new Error("payload must be Buffer");
    const i = l.alloc(50);
    return i.writeUInt32LE(r, 0), i.writeBigUInt64LE(e, 4), i.write(n.toString("hex"), 12, "hex"), i.writeUInt16LE(t, 44), i.writeUInt32LE(s.length, 46), l.concat([
      i,
      s,
      l.alloc(1)
    ]);
  }
  function rt({ nonce: r, amount: e, fee: n, targetAddress: t, targetChain: s, payload: i }) {
    return R(b.TransferWrappedWithPayload, ln({
      nonce: r,
      amount: e,
      targetAddress: t,
      targetChain: s,
      payload: i
    }));
  }
  function st({ nonce: r, amount: e, fee: n, targetAddress: t, targetChain: s, payload: i }) {
    return R(b.TransferNativeWithPayload, ln({
      nonce: r,
      amount: e,
      targetAddress: t,
      targetChain: s,
      payload: i
    }));
  }
  class it {
    constructor(e) {
    }
    encode(e, n) {
      throw new Error("Token Bridge program does not have state");
    }
    decode(e) {
      throw new Error("Token Bridge program does not have state");
    }
  }
  class at {
    constructor(e) {
    }
    encode(e, n) {
      throw new Error("Token Bridge program does not have user-defined types");
    }
    decode(e, n) {
      throw new Error("Token Bridge program does not have user-defined types");
    }
  }
  class ot {
    constructor(e) {
      __publicField(this, "instruction");
      __publicField(this, "accounts");
      __publicField(this, "state");
      __publicField(this, "events");
      __publicField(this, "types");
      this.instruction = new Qn(e), this.accounts = new $n(e), this.state = new it(e), this.events = new Gn(e), this.types = new at(e);
    }
  }
  mn = {
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
  ct = function(r, e) {
    return new Pe(mn, new c(r), e === void 0 ? {
      connection: null
    } : e, ut());
  };
  W = function(r, e) {
    return ct(r, In(e));
  };
  ut = function() {
    return new ot(mn);
  };
  _ = (_a = class {
    constructor(e, n, t) {
      __publicField(this, "address");
      __publicField(this, "verified");
      __publicField(this, "share");
      this.address = new c(e), this.verified = n, this.share = t;
    }
    serialize() {
      const e = l.alloc(_.size);
      return e.write(this.address.toBuffer().toString("hex"), 0, "hex"), this.verified && e.writeUInt8(1, 32), e.writeUInt8(this.share, 33), e;
    }
    static deserialize(e) {
      const n = e.subarray(0, 32), t = e.readUInt8(32) > 0, s = e.readUInt8(33);
      return new _(n, t, s);
    }
  }, __publicField(_a, "size", 34), _a);
  me = class {
    constructor(e, n, t, s, i) {
      __publicField(this, "name");
      __publicField(this, "symbol");
      __publicField(this, "uri");
      __publicField(this, "sellerFeeBasisPoints");
      __publicField(this, "creators");
      this.name = e, this.symbol = n, this.uri = t, this.sellerFeeBasisPoints = s, this.creators = i;
    }
    serialize() {
      const e = this.name.length, n = this.symbol.length, t = this.uri.length, s = this.creators, [i, a] = (() => {
        if (s === null) return [
          0,
          0
        ];
        const u = s.length;
        return [
          u,
          4 + u * _.size
        ];
      })(), o = l.alloc(15 + e + n + t + a);
      if (o.writeUInt32LE(e, 0), o.write(this.name, 4), o.writeUInt32LE(n, 4 + e), o.write(this.symbol, 8 + e), o.writeUInt32LE(t, 8 + e + n), o.write(this.uri, 12 + e + n), o.writeUInt16LE(this.sellerFeeBasisPoints, 12 + e + n + t), s === null) o.writeUInt8(0, 14 + e + n + t);
      else {
        o.writeUInt8(1, 14 + e + n + t), o.writeUInt32LE(i, 15 + e + n + t);
        for (let u = 0; u < i; ++u) {
          const d = s.at(u), f = 19 + e + n + t + u * _.size;
          o.write(d.serialize().toString("hex"), f, "hex");
        }
      }
      return o;
    }
    static deserialize(e) {
      const n = e.readUInt32LE(0), t = e.subarray(4, 4 + n).toString(), s = e.readUInt32LE(4 + n), i = e.subarray(8 + n, 8 + n + s).toString(), a = e.readUInt32LE(8 + n + s), o = e.subarray(12 + n + s, 12 + n + s + a).toString(), u = e.readUInt16LE(12 + n + s + a), d = e.readUInt8(14 + n + s + a), f = (() => {
        if (d == 0) return null;
        const m = [], g = e.readUInt32LE(15 + n + s + a);
        for (let h = 0; h < g; ++h) {
          const p = 19 + n + s + a + h * _.size;
          m.push(_.deserialize(e.subarray(p, p + _.size)));
        }
        return m;
      })();
      return new me(t, i, o, u, f);
    }
  };
  ce = class extends me {
    constructor(e, n, t, s, i, a) {
      super(e, n, t, s, i);
      __publicField(this, "isMutable");
      this.isMutable = a;
    }
    static serialize(e, n, t, s, i, a) {
      return new ce(e, n, t, s, i, a).serialize();
    }
    static serializeInstructionData(e, n, t, s, i, a) {
      return l.concat([
        l.alloc(1, 0),
        ce.serialize(e, n, t, s, i, a)
      ]);
    }
    serialize() {
      return l.concat([
        super.serialize(),
        l.alloc(1, this.isMutable ? 1 : 0)
      ]);
    }
  };
  ee = (_b = class {
    constructor() {
    }
    static createMetadataAccounts(e, n, t, s, i, a, o = false, u, d, f, m = false, g = ge(n)) {
      const h = [
        bn(g, false),
        Y(n, false),
        Y(t, true),
        Y(e, true),
        Y(a, o),
        Y(A.programId, false),
        Y(I, false)
      ], p = ce.serializeInstructionData(s, i, u === void 0 ? "" : u, f === void 0 ? 0 : f, d === void 0 ? null : d, m);
      return {
        programId: ee.programId,
        keys: h,
        data: p
      };
    }
  }, __publicField(_b, "programId", new c("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s")), _b);
  ge = function(r) {
    return v([
      l.from("metadata"),
      ee.programId.toBuffer(),
      new c(r).toBuffer()
    ], ee.programId);
  };
  (function(r) {
    r[r.Uninitialized = 0] = "Uninitialized", r[r.EditionV1 = 1] = "EditionV1", r[r.MasterEditionV1 = 2] = "MasterEditionV1", r[r.ReservationListV1 = 3] = "ReservationListV1", r[r.MetadataV1 = 4] = "MetadataV1", r[r.ReservationListV2 = 5] = "ReservationListV2", r[r.MasterEditionV2 = 6] = "MasterEditionV2", r[r.EditionMarker = 7] = "EditionMarker";
  })(Ze || (Ze = {}));
  ve = class {
    constructor(e, n, t, s, i, a) {
      __publicField(this, "key");
      __publicField(this, "updateAuthority");
      __publicField(this, "mint");
      __publicField(this, "data");
      __publicField(this, "primarySaleHappened");
      __publicField(this, "isMutable");
      this.key = e, this.updateAuthority = new c(n), this.mint = new c(t), this.data = s, this.primarySaleHappened = i, this.isMutable = a;
    }
    static deserialize(e) {
      const n = e.readUInt8(0), t = e.subarray(1, 33), s = e.subarray(33, 65), i = me.deserialize(e.subarray(65)), a = i.serialize().length, o = e.readUInt8(65 + a) > 0, u = e.readUInt8(66 + a) > 0;
      return new ve(n, t, s, i, o, u);
    }
  };
  Nt = async function(r, e, n) {
    return r.getAccountInfo(ge(e), n).then((t) => ve.deserialize(de(t)));
  };
  dt = function(r, e, n, t, s, i, a, o) {
    const u = W(e, r).methods.attestToken(a);
    return console.log(Je(e, n, t, s, i, o)), u._ixFn(...u._args, {
      accounts: Je(e, n, t, s, i, o),
      signers: void 0,
      remainingAccounts: void 0,
      preInstructions: void 0,
      postInstructions: void 0
    });
  };
  Je = function(r, e, n, t, s, i) {
    const { bridge: a, emitter: o, sequence: u, feeCollector: d, clock: f, rent: m, systemProgram: g } = kn(e, n, s, r);
    return {
      payer: new c(n),
      config: B(r),
      mint: new c(t),
      wrappedMeta: K(r, t),
      splMetadata: i ? new c(i) : ge(t),
      wormholeBridge: a,
      wormholeMessage: new c(s),
      wormholeEmitter: o,
      wormholeSequence: u,
      wormholeFeeCollector: d,
      clock: f,
      rent: m,
      systemProgram: g,
      wormholeProgram: new c(e)
    };
  };
  Xe = function(r, e, n, t, s, i, a) {
    const o = W(e, r).methods.completeNative();
    return o._ixFn(...o._args, {
      accounts: lt(e, n, t, s, i, a),
      signers: void 0,
      remainingAccounts: void 0,
      preInstructions: void 0,
      postInstructions: void 0
    });
  };
  lt = function(r, e, n, t, s, i) {
    const a = new c(t.payload.token.address.toUint8Array());
    return {
      payer: new c(n),
      config: B(r),
      vaa: O(e, l.from(t.hash)),
      claim: q(r, t.emitterAddress.toUint8Array(), w(t.emitterChain), t.sequence),
      endpoint: Q(r, w(t.emitterChain), t.emitterAddress.toUint8Array()),
      to: new c(t.payload.to.address.toUint8Array()),
      toFees: new c(s === void 0 ? t.payload.to.address.toUint8Array() : s),
      custody: le(r, a),
      mint: a,
      custodySigner: te(r),
      rent: I,
      systemProgram: A.programId,
      tokenProgram: i ? new c(i) : U,
      wormholeProgram: new c(e)
    };
  };
  mt = function(r, e, n, t, s, i) {
    const a = W(e, r).methods.completeWrapped();
    return a._ixFn(...a._args, {
      accounts: gt(e, n, t, s, i),
      signers: void 0,
      remainingAccounts: void 0,
      preInstructions: void 0,
      postInstructions: void 0
    });
  };
  gt = function(r, e, n, t, s) {
    const i = J(r, w(t.payload.token.chain), t.payload.token.address.toUint8Array());
    return {
      payer: new c(n),
      config: B(r),
      vaa: O(e, l.from(t.hash)),
      claim: q(r, t.emitterAddress.toUint8Array(), w(t.emitterChain), t.sequence),
      endpoint: Q(r, w(t.emitterChain), t.emitterAddress.toUint8Array()),
      to: new c(t.payload.to.address.toUint8Array()),
      toFees: new c(s === void 0 ? t.payload.to.address.toUint8Array() : s),
      mint: i,
      wrappedMeta: K(r, i),
      mintAuthority: re(r),
      rent: I,
      systemProgram: A.programId,
      tokenProgram: U,
      wormholeProgram: new c(e)
    };
  };
  ft = function(r, e, n, t, s) {
    const i = W(e, r).methods.createWrapped();
    return i._ixFn(...i._args, {
      accounts: ht(e, n, t, s),
      signers: void 0,
      remainingAccounts: void 0,
      preInstructions: void 0,
      postInstructions: void 0
    });
  };
  ht = function(r, e, n, t) {
    const s = J(r, w(t.payload.token.chain), t.payload.token.address.toUint8Array());
    return {
      payer: new c(n),
      config: B(r),
      endpoint: Q(r, w(t.emitterChain), t.emitterAddress.toUint8Array()),
      vaa: O(e, l.from(t.hash)),
      claim: q(r, t.emitterAddress.toUint8Array(), w(t.emitterChain), t.sequence),
      mint: s,
      wrappedMeta: K(r, s),
      splMetadata: ge(s),
      mintAuthority: re(r),
      rent: I,
      systemProgram: A.programId,
      tokenProgram: U,
      splMetadataProgram: ee.programId,
      wormholeProgram: new c(e)
    };
  };
  Ft = function(r, e, n) {
    const t = W(r).methods.initialize(n);
    return t._ixFn(...t._args, {
      accounts: pt(r, e),
      signers: void 0,
      remainingAccounts: void 0,
      preInstructions: void 0,
      postInstructions: void 0
    });
  };
  pt = function(r, e) {
    return {
      payer: new c(e),
      config: B(r),
      rent: I,
      systemProgram: A.programId
    };
  };
  zt = function(r, e, n, t) {
    const s = W(r).methods.registerChain();
    return s._ixFn(...s._args, {
      accounts: yt(r, e, n, t),
      signers: void 0,
      remainingAccounts: void 0,
      preInstructions: void 0,
      postInstructions: void 0
    });
  };
  yt = function(r, e, n, t) {
    return {
      payer: new c(n),
      config: B(r),
      endpoint: Q(r, w(t.payload.actionArgs.foreignChain), t.payload.actionArgs.foreignAddress.toUint8Array()),
      vaa: O(e, l.from(t.hash)),
      claim: q(r, t.emitterAddress.toUint8Array(), w(t.emitterChain), t.sequence),
      rent: I,
      systemProgram: A.programId,
      wormholeProgram: new c(e)
    };
  };
  Kt = function(r, e, n, t, s) {
    const i = W(r).methods.upgradeContract();
    return i._ixFn(...i._args, {
      accounts: wt(r, e, n, t, s),
      signers: void 0,
      remainingAccounts: void 0,
      preInstructions: void 0,
      postInstructions: void 0
    });
  };
  wt = function(r, e, n, t, s) {
    return {
      payer: new c(n),
      vaa: O(e, l.from(t.hash)),
      claim: q(r, t.emitterAddress.toUint8Array(), w(t.emitterChain), t.sequence),
      upgradeAuthority: Tn(r),
      spill: new c(s === void 0 ? n : s),
      implementation: new c(t.payload.actionArgs.newContract),
      programData: Un(r),
      tokenBridgeProgram: new c(r),
      rent: I,
      clock: Be,
      bpfLoaderUpgradeable: En,
      systemProgram: A.programId
    };
  };
  en = function(r, e, n, t, s, i, a, o, u, d, f, m, g) {
    const h = W(e, r).methods.transferNative(u, d, f, l.from(m), g);
    return h._ixFn(...h._args, {
      accounts: St(e, n, t, s, i, a, o),
      signers: void 0,
      remainingAccounts: void 0,
      preInstructions: void 0,
      postInstructions: void 0
    });
  };
  St = function(r, e, n, t, s, i, a) {
    const { wormholeBridge: o, wormholeMessage: u, wormholeEmitter: d, wormholeSequence: f, wormholeFeeCollector: m, clock: g, rent: h, systemProgram: p } = ue(r, e, n, t);
    return {
      payer: new c(n),
      config: B(r),
      from: new c(s),
      mint: new c(i),
      custody: le(r, i),
      authoritySigner: Z(r),
      custodySigner: te(r),
      wormholeBridge: o,
      wormholeMessage: u,
      wormholeEmitter: d,
      wormholeSequence: f,
      wormholeFeeCollector: m,
      clock: g,
      rent: h,
      systemProgram: p,
      tokenProgram: new c(a),
      wormholeProgram: new c(e)
    };
  };
  nn = function(r, e, n, t, s, i, a, o, u, d, f, m, g) {
    const h = W(e, r).methods.transferNativeWithPayload(u, d, l.from(f), m, l.from(g), null);
    return h._ixFn(...h._args, {
      accounts: gn(e, n, t, s, i, a, void 0, o),
      signers: void 0,
      remainingAccounts: void 0,
      preInstructions: void 0,
      postInstructions: void 0
    });
  };
  gn = function(r, e, n, t, s, i, a, o) {
    const { wormholeBridge: u, wormholeMessage: d, wormholeEmitter: f, wormholeSequence: m, wormholeFeeCollector: g, clock: h, rent: p, systemProgram: S } = ue(r, e, n, t);
    return {
      payer: new c(n),
      config: B(r),
      from: new c(s),
      mint: new c(i),
      custody: le(r, i),
      authoritySigner: Z(r),
      custodySigner: te(r),
      wormholeBridge: u,
      wormholeMessage: d,
      wormholeEmitter: f,
      wormholeSequence: m,
      wormholeFeeCollector: g,
      clock: h,
      sender: new c(a === void 0 ? n : Ee(a)),
      rent: p,
      systemProgram: S,
      tokenProgram: o ? new c(o) : U,
      wormholeProgram: new c(e)
    };
  };
  Mt = function(r, e, n, t, s, i, a, o, u, d, f, m, g, h, p) {
    const S = W(e, r).methods.transferWrapped(f, m, g, l.from(h), p);
    return S._ixFn(...S._args, {
      accounts: At(e, n, t, s, i, a, o, u, d),
      signers: void 0,
      remainingAccounts: void 0,
      preInstructions: void 0,
      postInstructions: void 0
    });
  };
  At = function(r, e, n, t, s, i, a, o, u) {
    const d = J(r, a, o), { wormholeBridge: f, wormholeMessage: m, wormholeEmitter: g, wormholeSequence: h, wormholeFeeCollector: p, clock: S, rent: C, systemProgram: P } = ue(r, e, n, t);
    return {
      payer: new c(n),
      config: B(r),
      from: new c(s),
      fromOwner: new c(i),
      mint: d,
      wrappedMeta: K(r, d),
      authoritySigner: Z(r),
      wormholeBridge: f,
      wormholeMessage: m,
      wormholeEmitter: g,
      wormholeSequence: h,
      wormholeFeeCollector: p,
      clock: S,
      rent: C,
      systemProgram: P,
      wormholeProgram: new c(e),
      tokenProgram: new c(u)
    };
  };
  kt = function(r, e, n, t, s, i, a, o, u, d, f, m, g, h, p) {
    const S = W(e, r).methods.transferWrappedWithPayload(f, m, l.from(g), h, l.from(p), null);
    return S._ixFn(...S._args, {
      accounts: fn(e, n, t, s, i, a, o, u, void 0, d),
      signers: void 0,
      remainingAccounts: void 0,
      preInstructions: void 0,
      postInstructions: void 0
    });
  };
  fn = function(r, e, n, t, s, i, a, o, u, d) {
    const f = J(r, a, o), { wormholeBridge: m, wormholeMessage: g, wormholeEmitter: h, wormholeSequence: p, wormholeFeeCollector: S, clock: C, rent: P, systemProgram: k } = ue(r, e, n, t);
    return {
      payer: new c(n),
      config: B(r),
      from: new c(s),
      fromOwner: new c(i),
      mint: f,
      wrappedMeta: K(r, f),
      authoritySigner: Z(r),
      wormholeBridge: m,
      wormholeMessage: g,
      wormholeEmitter: h,
      wormholeSequence: p,
      wormholeFeeCollector: S,
      clock: C,
      sender: new c(u === void 0 ? n : Ee(u)),
      rent: P,
      systemProgram: k,
      wormholeProgram: new c(e),
      tokenProgram: d ? new c(d) : U
    };
  };
  Lt = function(r, e, n) {
    const { wormholeEmitter: t, wormholeBridge: s, wormholeFeeCollector: i, wormholeSequence: a } = rn(e, n);
    return {
      tokenBridgeConfig: B(e),
      tokenBridgeAuthoritySigner: Z(e),
      tokenBridgeCustodySigner: te(e),
      tokenBridgeMintAuthority: re(e),
      tokenBridgeSender: Ee(r),
      tokenBridgeRedeemer: Ue(r),
      wormholeBridge: s,
      tokenBridgeEmitter: t,
      wormholeFeeCollector: i,
      tokenBridgeSequence: a
    };
  };
  _t = function(r, e, n, t, s, i, a) {
    const o = gn(e, n, t, s, i, a, r);
    return {
      payer: o.payer,
      tokenBridgeConfig: o.config,
      fromTokenAccount: o.from,
      mint: o.mint,
      tokenBridgeCustody: o.custody,
      tokenBridgeAuthoritySigner: o.authoritySigner,
      tokenBridgeCustodySigner: o.custodySigner,
      wormholeBridge: o.wormholeBridge,
      wormholeMessage: o.wormholeMessage,
      tokenBridgeEmitter: o.wormholeEmitter,
      tokenBridgeSequence: o.wormholeSequence,
      wormholeFeeCollector: o.wormholeFeeCollector,
      clock: o.clock,
      tokenBridgeSender: o.sender,
      rent: o.rent,
      systemProgram: o.systemProgram,
      tokenProgram: o.tokenProgram,
      wormholeProgram: o.wormholeProgram
    };
  };
  qt = function(r, e, n, t, s, i, a, o, u) {
    const d = fn(e, n, t, s, i, u === void 0 ? r : u, a, o, r);
    return {
      payer: d.payer,
      tokenBridgeConfig: d.config,
      fromTokenAccount: d.from,
      fromTokenAccountOwner: d.fromOwner,
      tokenBridgeWrappedMint: d.mint,
      tokenBridgeWrappedMeta: d.wrappedMeta,
      tokenBridgeAuthoritySigner: d.authoritySigner,
      wormholeBridge: d.wormholeBridge,
      wormholeMessage: d.wormholeMessage,
      tokenBridgeEmitter: d.wormholeEmitter,
      tokenBridgeSequence: d.wormholeSequence,
      wormholeFeeCollector: d.wormholeFeeCollector,
      clock: d.clock,
      tokenBridgeSender: d.sender,
      rent: d.rent,
      systemProgram: d.systemProgram,
      tokenProgram: d.tokenProgram,
      wormholeProgram: d.wormholeProgram
    };
  };
  Ot = function(r, e, n, t, s) {
    const i = new c(t.payload.token.address.toUint8Array()), a = new c(t.payload.to.address.toUint8Array());
    return {
      payer: new c(n),
      tokenBridgeConfig: B(r),
      vaa: O(e, l.from(t.hash)),
      tokenBridgeClaim: q(r, t.emitterAddress.toUint8Array(), w(t.emitterChain), t.sequence),
      tokenBridgeForeignEndpoint: Q(r, w(t.emitterChain), t.emitterAddress.toUint8Array()),
      toTokenAccount: new c(s),
      tokenBridgeRedeemer: Ue(a),
      toFeesTokenAccount: new c(s),
      tokenBridgeCustody: le(r, i),
      mint: i,
      tokenBridgeCustodySigner: te(r),
      rent: I,
      systemProgram: A.programId,
      tokenProgram: U,
      wormholeProgram: new c(e)
    };
  };
  Vt = function(r, e, n, t, s) {
    const i = J(r, w(t.payload.token.chain), t.payload.token.address.toUint8Array()), a = new c(t.payload.to.address.toUint8Array());
    return {
      payer: new c(n),
      tokenBridgeConfig: B(r),
      vaa: O(e, l.from(t.hash)),
      tokenBridgeClaim: q(r, t.emitterAddress.toUint8Array(), w(t.emitterChain), t.sequence),
      tokenBridgeForeignEndpoint: Q(r, w(t.emitterChain), t.emitterAddress.toUint8Array()),
      toTokenAccount: new c(s),
      tokenBridgeRedeemer: Ue(a),
      toFeesTokenAccount: new c(s),
      tokenBridgeWrappedMint: i,
      tokenBridgeWrappedMeta: K(r, i),
      tokenBridgeMintAuthority: re(r),
      rent: I,
      systemProgram: A.programId,
      tokenProgram: U,
      wormholeProgram: new c(e)
    };
  };
  ne = class {
    constructor(e, n, t, s) {
      __publicField(this, "network");
      __publicField(this, "chain");
      __publicField(this, "connection");
      __publicField(this, "contracts");
      __publicField(this, "chainId");
      __publicField(this, "coreBridge");
      __publicField(this, "tokenBridge");
      this.network = e, this.chain = n, this.connection = t, this.contracts = s, this.chainId = w(n);
      const i = s.tokenBridge;
      if (!i) throw new Error(`TokenBridge contract Address for chain ${n} not found`);
      this.tokenBridge = W(i, t), this.coreBridge = new sn(e, n, t, s);
    }
    static async fromRpc(e, n) {
      const [t, s] = await G.chainFromRpc(e), i = n[s];
      if (i.network !== t) throw new Error(`Network mismatch for chain ${s}: ${i.network} != ${t}`);
      return new ne(t, s, e, i.contracts);
    }
    async isWrappedAsset(e) {
      return Te(this.connection, this.tokenBridge.programId, new y(e).toUint8Array()).catch((n) => null).then((n) => n != null);
    }
    async getOriginalAsset(e) {
      if (!await this.isWrappedAsset(e)) throw ke(e.toString());
      const n = new y(e).toUint8Array(), t = new c(n);
      try {
        const s = await Te(this.connection, this.tokenBridge.programId, n);
        return s === null ? {
          chain: this.chain,
          address: new y(t.toBytes()).toUniversalAddress()
        } : {
          chain: Kn(s.chain),
          address: new cn(new Uint8Array(s.tokenAddress))
        };
      } catch {
        throw ke(e.toString());
      }
    }
    async getTokenUniversalAddress(e) {
      return new y(e).toUniversalAddress();
    }
    async getTokenNativeAddress(e, n) {
      return new y(n).toNative();
    }
    async hasWrappedAsset(e) {
      try {
        return await this.getWrappedAsset(e), true;
      } catch {
      }
      return false;
    }
    async getWrappedAsset(e) {
      if (L(e.address)) throw new Error("Native cannot be a wrapped asset");
      if (e.chain === this.chain) throw new Error(`Token ${e.address} is already native to chain ${this.chain}`);
      const n = J(this.tokenBridge.programId, w(e.chain), e.address.toUniversalAddress().toUint8Array());
      try {
        return await Te(this.connection, this.tokenBridge.programId, n), Qe(this.chain, n.toBase58());
      } catch {
      }
      throw ke(`${n}: ${e.address.toUniversalAddress().toString()}`);
    }
    async isTransferCompleted(e) {
      return Pn(this.connection, this.tokenBridge.programId, e.emitterAddress.toUint8Array(), w(e.emitterChain), e.sequence, this.connection.commitment).catch(() => false);
    }
    async getWrappedNative() {
      return Qe(this.chain, z.toBase58());
    }
    async *createAttestation(e, n) {
      if (!n) throw new Error("Payer required to create attestation");
      const t = new y(n).unwrap(), s = 0, i = await this.coreBridge.getMessageFee(), a = Bn(this.coreBridge.coreBridge.programId, t, i), o = new y(e).unwrap(), u = await G.getTokenProgramId(this.connection, o);
      let d;
      if (u.equals(ye)) {
        const h = await oe(this.connection, o, void 0, u), p = vn(h);
        (p == null ? void 0 : p.metadataAddress) && (d = p == null ? void 0 : p.metadataAddress);
      }
      const f = $.generate(), m = dt(this.connection, this.tokenBridge.programId, this.coreBridge.address, t, new y(e).unwrap(), f.publicKey, s, d), g = new D().add(a, m);
      g.feePayer = t, yield this.createUnsignedTx({
        transaction: g,
        signers: [
          f
        ]
      }, "Solana.AttestToken");
    }
    async *submitAttestation(e, n) {
      if (!n) throw new Error("Payer required to create attestation");
      const t = new y(n).unwrap();
      yield* this.coreBridge.postVaa(t, e);
      const s = new D().add(ft(this.connection, this.tokenBridge.programId, this.coreBridge.address, t, e));
      s.feePayer = t, yield this.createUnsignedTx({
        transaction: s
      }, "Solana.CreateWrapped");
    }
    async transferSol(e, n, t, s) {
      const i = new y(e).unwrap(), a = i, o = n.address.toUniversalAddress().toUint8Array(), u = w(n.chain), d = 0, f = 0n, m = $.generate(), g = $.generate(), h = await Se(this.connection), p = A.createAccount({
        fromPubkey: a,
        newAccountPubkey: g.publicKey,
        lamports: h,
        space: ae,
        programId: U
      }), S = A.transfer({
        fromPubkey: a,
        lamports: t,
        toPubkey: g.publicKey
      }), C = Me(g.publicKey, z, a), P = je(this.tokenBridge.programId, g.publicKey, a, t, U), k = s ? nn(this.connection, this.tokenBridge.programId, this.coreBridge.address, i, m.publicKey, g.publicKey, z, U, d, t, o, u, s) : en(this.connection, this.tokenBridge.programId, this.coreBridge.address, i, m.publicKey, g.publicKey, z, U, d, t, f, o, u), x = Ae(g.publicKey, a, a), M = new D();
      return M.feePayer = a, M.add(p, S, C, P, k, x), this.createUnsignedTx({
        transaction: M,
        signers: [
          m,
          g
        ]
      }, "TokenBridge.TransferNative");
    }
    async *transfer(e, n, t, s, i) {
      if (L(t)) {
        yield await this.transferSol(e, n, s, i);
        return;
      }
      const a = new y(t).unwrap(), o = new y(e).unwrap(), u = await G.getTokenProgramId(this.connection, a);
      if (u.equals(ye)) throw new Error("Transfers of Token-2022 assets are not supported via the Manual Token Bridge route. Please use the Executor Token Bridge route instead.");
      let d = await Ge(a, o, false, u);
      const f = !await this.isWrappedAsset(t);
      let m, g = false;
      if (f && u.equals(ye)) {
        const T = await this.connection.getAccountInfo(d);
        if (T && T.data.length > ae) {
          const F = await Rn(this.connection, d, void 0, u);
          F.tlvData && (g = xn(F.tlvData).includes(Nn.ImmutableOwner));
        }
      }
      const h = n.address.toUniversalAddress().toUint8Array(), p = w(n.chain), S = 0, C = 0n, P = $.generate(), k = [], x = [
        P
      ];
      if (g) {
        m = $.generate(), x.push(m);
        const T = await Se(this.connection);
        k.push(A.createAccount({
          fromPubkey: o,
          newAccountPubkey: m.publicKey,
          lamports: T,
          space: ae,
          programId: u
        })), k.push(Me(m.publicKey, a, o, u));
        const F = await oe(this.connection, a, void 0, u);
        k.push(Ce(d, a, m.publicKey, o, s, F.decimals, [], u)), d = m.publicKey;
      }
      let M;
      if (f) M = i ? nn(this.connection, this.tokenBridge.programId, this.coreBridge.address, o, P.publicKey, d, a, u, S, s, h, p, i) : en(this.connection, this.tokenBridge.programId, this.coreBridge.address, o, P.publicKey, d, a, u, S, s, C, h, p);
      else {
        const T = await this.getOriginalAsset(t);
        if (L(T.address)) throw new Error("Native cannot be an original asset");
        M = i ? kt(this.connection, this.tokenBridge.programId, this.coreBridge.address, o, P.publicKey, d, o, w(T.chain), T.address.toUint8Array(), u, S, s, h, p, i) : Mt(this.connection, this.tokenBridge.programId, this.coreBridge.address, o, P.publicKey, d, o, w(T.chain), T.address.toUint8Array(), u, S, s, C, h, p);
      }
      const E = je(this.tokenBridge.programId, d, o, s, u);
      k.push(E), k.push(M), m && k.push(Ae(m.publicKey, o, o, [], u));
      const N = new D().add(...k);
      N.feePayer = o, yield this.createUnsignedTx({
        transaction: N,
        signers: x
      }, "TokenBridge.TransferTokens");
    }
    async *redeemAndUnwrap(e, n) {
      const t = new y(e).unwrap(), s = new y(n.payload.to.address).unwrap(), i = await oe(this.connection, z), a = n.payload.token.amount * BigInt(Math.pow(10, i.decimals - 8)), o = await Se(this.connection), u = $.generate(), d = Xe(this.connection, this.tokenBridge.programId, this.coreBridge.address, t, n), f = A.createAccount({
        fromPubkey: t,
        newAccountPubkey: u.publicKey,
        lamports: o,
        space: ae,
        programId: U
      }), m = Me(u.publicKey, z, t), g = Ce(s, z, u.publicKey, t, a, i.decimals), h = Ae(u.publicKey, t, t), p = new D();
      p.feePayer = t, p.add(d, f, m, g, h), yield this.createUnsignedTx({
        transaction: p,
        signers: [
          u
        ]
      }, "TokenBridge.RedeemAndUnwrap");
    }
    async *createAta(e, n, t) {
      const s = new y(e).unwrap(), i = new y(n).unwrap(), a = await Ge(i, s, false, t);
      if (await this.connection.getAccountInfo(a) === null) {
        const u = new D().add(Fn(s, a, s, i, t));
        u.feePayer = s, yield this.createUnsignedTx({
          transaction: u
        }, "Redeem.CreateATA");
      }
    }
    async *redeem(e, n, t = true) {
      const s = n.payload.token.chain === this.chain ? n.payload.token.address : (await this.getWrappedAsset(n.payload.token)).toUniversalAddress(), i = await G.getTokenProgramId(this.connection, new y(s).unwrap());
      if (yield* this.createAta(e, s, i), yield* this.coreBridge.postVaa(e, n), t) {
        const d = new y(await this.getWrappedNative());
        if (Ln.equals(s.toUint8Array(), d.toUint8Array())) {
          yield* this.redeemAndUnwrap(e, n);
          return;
        }
      }
      const a = new y(e).unwrap(), o = n.payload.token.chain == this.chain ? Xe : mt, u = new D().add(o(this.connection, this.tokenBridge.programId, this.coreBridge.address, a, n, void 0, i));
      u.feePayer = a, yield this.createUnsignedTx({
        transaction: u
      }, "Solana.RedeemTransfer");
    }
    createUnsignedTx(e, n, t = false) {
      return new an(e, this.network, this.chain, n, t);
    }
  };
  tn = {
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
  j = (_c = class {
    constructor(e, n, t, s) {
      __publicField(this, "network");
      __publicField(this, "chain");
      __publicField(this, "connection");
      __publicField(this, "contracts");
      __publicField(this, "relayerProgramId");
      __publicField(this, "executorProgramId");
      __publicField(this, "wormholeProgramId");
      __publicField(this, "tokenBridgeProgramId");
      __publicField(this, "relayerProgram");
      if (this.network = e, this.chain = n, this.connection = t, this.contracts = s, !s.executorTokenBridge) throw new Error(`Executor Token Bridge contracts not found for network ${e} and chain ${n}`);
      this.relayerProgramId = new c(s.executorTokenBridge.relayer), this.executorProgramId = new c(s.executor), this.wormholeProgramId = new c(s.coreBridge), this.tokenBridgeProgramId = new c(s.tokenBridge), this.relayerProgram = new Pe(tn, this.relayerProgramId, {
        connection: this.connection
      });
    }
    static async fromRpc(e, n) {
      const [t, s] = await G.chainFromRpc(e), i = n[s];
      if (i.network !== t) throw new Error(`Network mismatch: ${i.network} != ${t}`);
      return new j(t, s, e, i.contracts);
    }
    async *transfer(e, n, t, s, i, a) {
      const o = On.get(this.network, n.chain);
      if (!o || !o.relayer) throw new Error(`Token Bridge Executor Relayer contract for domain ${n.chain} not found`);
      const u = o.relayer, d = new y(e).unwrap(), f = w(n.chain), m = n.address.toUniversalAddress(), { estimatedCost: g, signedQuote: h, relayInstructions: p } = i, S = He(_n, h), C = He(qn, p), P = new ne(this.network, this.chain, this.connection, this.contracts), k = L(t), x = !k && await P.isWrappedAsset(t), M = k ? z : new y(t).unwrap(), E = await G.getTokenProgramId(this.connection, M), N = new c(h.quote.payeeAddress), T = $.generate(), F = Vn(this.network, n.chain, u), fe = Ye(n.chain, F.dstTransferRecipient), he = Ye(n.chain, F.dstExecutionAddress), se = c.findProgramAddressSync([
        l.from("config")
      ], this.tokenBridgeProgramId)[0], pe = c.findProgramAddressSync([
        M.toBuffer()
      ], this.tokenBridgeProgramId)[0], Re = c.findProgramAddressSync([
        l.from("authority_signer")
      ], this.tokenBridgeProgramId)[0], hn = c.findProgramAddressSync([
        l.from("custody_signer")
      ], this.tokenBridgeProgramId)[0], { wormholeEmitter: xe, wormholeSequence: Ne, wormholeFeeCollector: Fe, wormholeBridge: ze } = rn(this.tokenBridgeProgramId, this.wormholeProgramId), Ke = c.findProgramAddressSync([
        l.from("sender")
      ], this.relayerProgramId)[0], Le = X(M, d, false, E), _e = c.findProgramAddressSync([
        l.from("tmp"),
        M.toBytes()
      ], this.relayerProgramId)[0], V = [];
      if (a) {
        const ie = new c(a.referrer.address.toString());
        if (L(t)) {
          const H = a.nativeTokenFee + a.transferTokenFee;
          H > 0n && V.push(A.transfer({
            fromPubkey: d,
            toPubkey: ie,
            lamports: H
          }));
        } else {
          if (a.transferTokenFee > 0n) {
            const H = X(M, ie, true, E), Mn = X(M, d, true, E);
            await this.connection.getAccountInfo(H) || V.push(zn(d, H, ie, M, E));
            const An = await oe(this.connection, M, void 0, E);
            V.push(Ce(Mn, M, H, d, a.transferTokenFee, An.decimals, void 0, E));
          }
          a.nativeTokenFee > 0n && V.push(A.transfer({
            fromPubkey: d,
            toPubkey: ie,
            lamports: a.nativeTokenFee
          }));
        }
      }
      const pn = a ? a.remainingAmount : s, qe = {
        amount: new Ve(pn.toString()),
        recipientChain: f,
        recipientAddress: Array.from(m.toUint8Array()),
        nonce: 0,
        dstTransferRecipient: Array.from(fe.toUint8Array()),
        dstExecutionAddress: Array.from(he.toUint8Array()),
        execAmount: new Ve(g.toString()),
        signedQuoteBytes: l.from(S),
        relayInstructions: l.from(C)
      };
      x ? V.push(await this.relayerProgram.methods.transferWrappedTokensWithRelay(qe).accountsStrict({
        payer: d,
        config: Ke,
        tokenBridgeWrappedMint: M,
        fromTokenAccount: Le,
        tmpTokenAccount: _e,
        tokenBridgeWrappedMeta: K(this.tokenBridgeProgramId, M),
        tokenBridgeConfig: se,
        tokenBridgeAuthoritySigner: Re,
        wormholeBridge: ze,
        wormholeMessage: T.publicKey,
        tokenBridgeEmitter: xe,
        tokenBridgeSequence: Ne,
        wormholeFeeCollector: Fe,
        payee: N,
        wormholeProgram: this.wormholeProgramId,
        tokenBridgeProgram: this.tokenBridgeProgramId,
        systemProgram: A.programId,
        tokenProgram: E,
        executorProgram: this.executorProgramId,
        clock: Be,
        rent: I
      }).instruction()) : V.push(await this.relayerProgram.methods.transferNativeTokensWithRelay({
        ...qe,
        wrapNative: L(t)
      }).accountsStrict({
        payer: d,
        config: Ke,
        mint: M,
        fromTokenAccount: Le,
        tmpTokenAccount: _e,
        tokenBridgeConfig: se,
        tokenBridgeCustody: pe,
        tokenBridgeAuthoritySigner: Re,
        tokenBridgeCustodySigner: hn,
        wormholeBridge: ze,
        wormholeMessage: T.publicKey,
        tokenBridgeEmitter: xe,
        tokenBridgeSequence: Ne,
        wormholeFeeCollector: Fe,
        payee: N,
        systemProgram: A.programId,
        tokenProgram: E,
        wormholeProgram: this.wormholeProgramId,
        tokenBridgeProgram: this.tokenBridgeProgramId,
        associatedTokenProgram: we,
        executorProgram: this.executorProgramId,
        clock: Be,
        rent: I
      }).instruction());
      const Oe = await this.getAddressLookupTable(), { blockhash: yn } = await this.connection.getLatestBlockhash(), wn = new De({
        payerKey: d,
        instructions: V,
        recentBlockhash: yn
      }).compileToV0Message(Oe ? [
        Oe
      ] : []), Sn = new $e(wn);
      yield this.createUnsignedTx({
        transaction: Sn,
        signers: [
          T
        ]
      }, "ExecutorTokenBridge.transfer");
    }
    async *redeem(e, n) {
      const t = new y(e).unwrap(), s = new y(n.payload.payload.targetRecipient).unwrap(), i = n.payload.token.chain, a = n.payload.token.address, o = i === this.chain;
      let u;
      if (o) u = new y(a).unwrap();
      else {
        const pe = await new ne(this.network, this.chain, this.connection, this.contracts).getWrappedAsset({
          chain: i,
          address: a
        });
        u = new y(pe).unwrap();
      }
      const d = await G.getTokenProgramId(this.connection, u), f = X(u, s, true, d), m = O(this.wormholeProgramId, l.from(n.hash));
      await this.connection.getAccountInfo(m) || (yield* new sn(this.network, this.chain, this.connection, this.contracts).postVaa(t, n));
      const h = new y(n.payload.to.address).unwrap(), p = new Pe(tn, h, {
        connection: this.connection
      }), S = c.findProgramAddressSync([
        l.from("redeemer")
      ], p.programId)[0], C = c.findProgramAddressSync([
        l.from("config")
      ], this.tokenBridgeProgramId)[0], P = c.findProgramAddressSync([
        l.from("tmp"),
        u.toBytes()
      ], p.programId)[0], k = q(this.tokenBridgeProgramId, n.emitterAddress.toUint8Array(), w(n.emitterChain), n.sequence), x = Q(this.tokenBridgeProgramId, w(n.emitterChain), n.emitterAddress.toUint8Array()), M = c.findProgramAddressSync([
        u.toBuffer()
      ], this.tokenBridgeProgramId)[0], E = c.findProgramAddressSync([
        l.from("custody_signer")
      ], this.tokenBridgeProgramId)[0];
      let N;
      const T = Array.from(n.hash);
      o ? N = await p.methods.completeNativeTransferWithRelay(T).accountsStrict({
        payer: t,
        config: S,
        mint: u,
        recipientTokenAccount: f,
        recipient: s,
        tmpTokenAccount: P,
        tokenBridgeConfig: C,
        vaa: m,
        tokenBridgeClaim: k,
        tokenBridgeForeignEndpoint: x,
        tokenBridgeCustody: M,
        tokenBridgeCustodySigner: E,
        wormholeProgram: this.wormholeProgramId,
        tokenBridgeProgram: this.tokenBridgeProgramId,
        tokenProgram: d,
        associatedTokenProgram: we,
        systemProgram: A.programId,
        rent: I
      }).instruction() : N = await p.methods.completeWrappedTransferWithRelay(T).accountsStrict({
        payer: t,
        config: S,
        tokenBridgeWrappedMint: u,
        recipientTokenAccount: f,
        recipient: s,
        tmpTokenAccount: P,
        tokenBridgeWrappedMeta: K(this.tokenBridgeProgramId, u),
        tokenBridgeConfig: C,
        vaa: m,
        tokenBridgeClaim: k,
        tokenBridgeForeignEndpoint: x,
        tokenBridgeMintAuthority: re(this.tokenBridgeProgramId),
        wormholeProgram: this.wormholeProgramId,
        tokenBridgeProgram: this.tokenBridgeProgramId,
        tokenProgram: d,
        associatedTokenProgram: we,
        systemProgram: A.programId,
        rent: I
      }).instruction();
      const { blockhash: F } = await this.connection.getLatestBlockhash(), fe = new De({
        payerKey: t,
        instructions: [
          N
        ],
        recentBlockhash: F
      }).compileToV0Message(), he = new $e(fe);
      yield this.createUnsignedTx({
        transaction: he,
        signers: []
      }, "ExecutorTokenBridge.redeem");
    }
    async getAddressLookupTable() {
      const e = c.findProgramAddressSync([
        l.from("lut")
      ], this.relayerProgramId)[0];
      try {
        const n = (await this.relayerProgram.account.lut.fetch(e)).address, t = await this.connection.getAddressLookupTable(n);
        if (t.value) return t.value;
      } catch {
      }
      return null;
    }
    async estimateMsgValueAndGasLimit(e, n) {
      let t = 0n;
      if (t += 2n * 5000n + 7n * 5000n + 1400000n, t += 2n * 5000n + 7n * 5000n, t += 5000n + 3200000n, L(e.address) || Dn(e) === z.toString() ? t += 5000n + 5000000n : t += 5000n + 1200000n, n) {
        const s = new c(n.address.toString());
        if (!L(e.address)) {
          const i = new y(e.address).unwrap(), a = await this.connection.getAccountInfo(i);
          if (a === null) throw new Error("Couldn't determine token program. Mint account is null.");
          const o = X(i, s, true, a.owner);
          await this.connection.getAccountInfo(o) === null && (j.associatedTokenAccountMinRent || (j.associatedTokenAccountMinRent = BigInt(await this.connection.getMinimumBalanceForRentExemption(165))), t += j.associatedTokenAccountMinRent);
        }
      }
      return {
        msgValue: t,
        gasLimit: 310000n
      };
    }
    createUnsignedTx(e, n, t = false) {
      return new an(e, this.network, this.chain, n, t);
    }
  }, __publicField(_c, "associatedTokenAccountMinRent"), _c);
  un(on, "TokenBridge", ne);
  un(on, "ExecutorTokenBridge", j);
});
export {
  ce as CreateMetadataAccountArgs,
  _ as Creator,
  me as Data,
  be as EndpointRegistration,
  tn as ExecutorTokenBridgeRelayerIdl,
  Ze as Key,
  ve as Metadata,
  j as SolanaExecutorTokenBridge,
  ne as SolanaTokenBridge,
  ee as SplTokenMetadataProgram,
  mn as TOKEN_BRIDGE_IDL,
  Ie as TokenBridgeConfig,
  We as WrappedMeta,
  __tla,
  ut as coder,
  je as createApproveAuthoritySignerInstruction,
  dt as createAttestTokenInstruction,
  Xe as createCompleteTransferNativeInstruction,
  mt as createCompleteTransferWrappedInstruction,
  ft as createCreateWrappedInstruction,
  Ft as createInitializeInstruction,
  W as createReadOnlyTokenBridgeProgramInterface,
  zt as createRegisterChainInstruction,
  ct as createTokenBridgeProgramInterface,
  en as createTransferNativeInstruction,
  nn as createTransferNativeWithPayloadInstruction,
  Mt as createTransferWrappedInstruction,
  kt as createTransferWrappedWithPayloadInstruction,
  Kt as createUpgradeContractInstruction,
  Z as deriveAuthoritySignerKey,
  le as deriveCustodyKey,
  te as deriveCustodySignerKey,
  Q as deriveEndpointKey,
  re as deriveMintAuthorityKey,
  Ue as deriveRedeemerAccountKey,
  Ee as deriveSenderAccountKey,
  ge as deriveSplTokenMetadataKey,
  B as deriveTokenBridgeConfigKey,
  K as deriveWrappedMetaKey,
  J as deriveWrappedMintKey,
  Je as getAttestTokenAccounts,
  lt as getCompleteTransferNativeAccounts,
  Ot as getCompleteTransferNativeWithPayloadCpiAccounts,
  gt as getCompleteTransferWrappedAccounts,
  Vt as getCompleteTransferWrappedWithPayloadCpiAccounts,
  ht as getCreateWrappedAccounts,
  xt as getEndpointRegistration,
  pt as getInitializeAccounts,
  Nt as getMetadata,
  yt as getRegisterChainAccounts,
  Rt as getTokenBridgeConfig,
  Lt as getTokenBridgeDerivedAccounts,
  St as getTransferNativeAccounts,
  gn as getTransferNativeWithPayloadAccounts,
  _t as getTransferNativeWithPayloadCpiAccounts,
  At as getTransferWrappedAccounts,
  fn as getTransferWrappedWithPayloadAccounts,
  qt as getTransferWrappedWithPayloadCpiAccounts,
  wt as getUpgradeContractAccounts,
  Te as getWrappedMeta
};
