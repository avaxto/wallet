import { P as h, v as f, E as C, D as w, t as X, s as J, __tla as __tla_0 } from "./index-VPMC5CHr.js";
import { N as at, y as it, __tla as __tla_1 } from "./index-VPMC5CHr.js";
import { a as d } from "./crypto-CoV0x5dM.js";
import { L as i, __tla as __tla_2 } from "./index-LiAlS9gV.js";
import { __tla as __tla_3 } from "./api-MAX7rlSa.js";
import { __tla as __tla_4 } from "./wormhole-wO6_ynZj.js";
import "./vendor-1lVrJJTd.js";
let g, v, q, I, N, oe, se, ue, ce, l, T, ve, fe, Ae, le, de, z, Ce, me, he, Ee, B, F, ge, $, pe, Y, re, be, Se, V, ye, Me, Ie, _e, Le, Be, E, G, M, b, ee, H, y, te, K, Ne, we, Oe, ze, U, D, He, tt, et, Ke, ke, Je, qe, Pe, Ve, je, Ue, Qe, Xe, Ye, ne, $e, Fe, Z, W, x, ae, ie;
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
  const O = (e) => {
    const t = e.decode.bind(e), n = e.encode.bind(e);
    return {
      decode: t,
      encode: n
    };
  };
  var p = {}, R;
  function Q() {
    if (R) return p;
    R = 1, Object.defineProperty(p, "__esModule", {
      value: true
    });
    function e(a) {
      {
        const s = d.from(a);
        s.reverse();
        const o = s.toString("hex");
        return o.length === 0 ? BigInt(0) : BigInt(`0x${o}`);
      }
    }
    p.toBigIntLE = e;
    function t(a) {
      {
        const s = a.toString("hex");
        return s.length === 0 ? BigInt(0) : BigInt(`0x${s}`);
      }
    }
    p.toBigIntBE = t;
    function n(a, s) {
      {
        const o = a.toString(16), u = d.from(o.padStart(s * 2, "0").slice(0, s * 2), "hex");
        return u.reverse(), u;
      }
    }
    p.toBufferLE = n;
    function r(a, s) {
      {
        const o = a.toString(16);
        return d.from(o.padStart(s * 2, "0").slice(0, s * 2), "hex");
      }
    }
    return p.toBufferBE = r, p;
  }
  var P = Q();
  const k = (e) => (t) => {
    const n = i.blob(e, t), { encode: r, decode: a } = O(n), s = n;
    return s.decode = (o, u) => {
      const m = a(o, u);
      return P.toBigIntLE(d.from(m));
    }, s.encode = (o, u, m) => {
      const _ = P.toBufferLE(o, e);
      return r(_, u, m);
    }, s;
  }, A = k(8), S = (e) => {
    const t = i.u8(e), { encode: n, decode: r } = O(t), a = t;
    return a.decode = (s, o) => !!r(s, o), a.encode = (s, o, u) => {
      const m = Number(s);
      return n(m, o, u);
    }, a;
  }, c = (e) => {
    const t = i.blob(32, e), { encode: n, decode: r } = O(t), a = t;
    return a.decode = (s, o) => {
      const u = r(s, o);
      return new h(u);
    }, a.encode = (s, o, u) => {
      const m = s.toBuffer();
      return n(m, o, u);
    }, a;
  };
  M = class extends Error {
    constructor(t) {
      super(t);
    }
  };
  G = class extends M {
    constructor() {
      super(...arguments), this.name = "TokenAccountNotFoundError";
    }
  };
  ee = class extends M {
    constructor() {
      super(...arguments), this.name = "TokenInvalidAccountError";
    }
  };
  H = class extends M {
    constructor() {
      super(...arguments), this.name = "TokenInvalidAccountOwnerError";
    }
  };
  y = class extends M {
    constructor() {
      super(...arguments), this.name = "TokenInvalidAccountSizeError";
    }
  };
  te = class extends M {
    constructor() {
      super(...arguments), this.name = "TokenInvalidMintError";
    }
  };
  K = class extends M {
    constructor() {
      super(...arguments), this.name = "TokenOwnerOffCurveError";
    }
  };
  (function(e) {
    e[e.InitializeMint = 0] = "InitializeMint", e[e.InitializeAccount = 1] = "InitializeAccount", e[e.InitializeMultisig = 2] = "InitializeMultisig", e[e.Transfer = 3] = "Transfer", e[e.Approve = 4] = "Approve", e[e.Revoke = 5] = "Revoke", e[e.SetAuthority = 6] = "SetAuthority", e[e.MintTo = 7] = "MintTo", e[e.Burn = 8] = "Burn", e[e.CloseAccount = 9] = "CloseAccount", e[e.FreezeAccount = 10] = "FreezeAccount", e[e.ThawAccount = 11] = "ThawAccount", e[e.TransferChecked = 12] = "TransferChecked", e[e.ApproveChecked = 13] = "ApproveChecked", e[e.MintToChecked = 14] = "MintToChecked", e[e.BurnChecked = 15] = "BurnChecked", e[e.InitializeAccount2 = 16] = "InitializeAccount2", e[e.SyncNative = 17] = "SyncNative", e[e.InitializeAccount3 = 18] = "InitializeAccount3", e[e.InitializeMultisig2 = 19] = "InitializeMultisig2", e[e.InitializeMint2 = 20] = "InitializeMint2", e[e.GetAccountDataSize = 21] = "GetAccountDataSize", e[e.InitializeImmutableOwner = 22] = "InitializeImmutableOwner", e[e.AmountToUiAmount = 23] = "AmountToUiAmount", e[e.UiAmountToAmount = 24] = "UiAmountToAmount", e[e.InitializeMintCloseAuthority = 25] = "InitializeMintCloseAuthority", e[e.TransferFeeExtension = 26] = "TransferFeeExtension", e[e.ConfidentialTransferExtension = 27] = "ConfidentialTransferExtension", e[e.DefaultAccountStateExtension = 28] = "DefaultAccountStateExtension", e[e.Reallocate = 29] = "Reallocate", e[e.MemoTransferExtension = 30] = "MemoTransferExtension", e[e.CreateNativeMint = 31] = "CreateNativeMint", e[e.InitializeNonTransferableMint = 32] = "InitializeNonTransferableMint", e[e.InterestBearingMintExtension = 33] = "InterestBearingMintExtension", e[e.CpiGuardExtension = 34] = "CpiGuardExtension", e[e.InitializePermanentDelegate = 35] = "InitializePermanentDelegate", e[e.TransferHookExtension = 36] = "TransferHookExtension", e[e.MetadataPointerExtension = 39] = "MetadataPointerExtension";
  })(b || (b = {}));
  function L(e, t, n) {
    if (n.length) {
      e.push({
        pubkey: t,
        isSigner: false,
        isWritable: false
      });
      for (const r of n) e.push({
        pubkey: r instanceof h ? r : r.publicKey,
        isSigner: true,
        isWritable: false
      });
    } else e.push({
      pubkey: t,
      isSigner: true,
      isWritable: false
    });
    return e;
  }
  U = i.struct([
    i.u8("instruction"),
    A("amount")
  ]);
  He = function(e, t, n, r, a = [], s = f) {
    const o = L([
      {
        pubkey: e,
        isSigner: false,
        isWritable: true
      },
      {
        pubkey: t,
        isSigner: false,
        isWritable: false
      }
    ], n, a), u = d.alloc(U.span);
    return U.encode({
      instruction: b.Approve,
      amount: BigInt(r)
    }, u), new C({
      keys: o,
      programId: s,
      data: u
    });
  };
  D = i.struct([
    i.u8("instruction")
  ]);
  Ke = function(e, t, n, r = [], a = f) {
    const s = L([
      {
        pubkey: e,
        isSigner: false,
        isWritable: true
      },
      {
        pubkey: t,
        isSigner: false,
        isWritable: true
      }
    ], n, r), o = d.alloc(D.span);
    return D.encode({
      instruction: b.CloseAccount
    }, o), new C({
      keys: s,
      programId: a,
      data: o
    });
  };
  (function(e) {
    e[e.Uninitialized = 0] = "Uninitialized", e[e.Mint = 1] = "Mint", e[e.Account = 2] = "Account";
  })(N || (N = {}));
  v = 1;
  re = i.struct([
    i.u8("m"),
    i.u8("n"),
    S("isInitialized"),
    c("signer1"),
    c("signer2"),
    c("signer3"),
    c("signer4"),
    c("signer5"),
    c("signer6"),
    c("signer7"),
    c("signer8"),
    c("signer9"),
    c("signer10"),
    c("signer11")
  ]);
  F = re.span;
  (function(e) {
    e[e.Uninitialized = 0] = "Uninitialized", e[e.Initialized = 1] = "Initialized", e[e.Frozen = 2] = "Frozen";
  })(I || (I = {}));
  q = i.struct([
    c("mint"),
    c("owner"),
    A("amount"),
    i.u32("delegateOption"),
    c("delegate"),
    i.u8("state"),
    i.u32("isNativeOption"),
    A("isNative"),
    A("delegatedAmount"),
    i.u32("closeAuthorityOption"),
    c("closeAuthority")
  ]);
  g = q.span;
  qe = async function(e, t, n, r = f) {
    const a = await e.getAccountInfo(t, n);
    return ae(t, a, r);
  };
  Ye = async function(e, t) {
    return await ne(e, [], t);
  };
  ne = async function(e, t, n) {
    const r = Pe(t);
    return await e.getMinimumBalanceForRentExemption(r, n);
  };
  ae = function(e, t, n = f) {
    if (!t) throw new G();
    if (!t.owner.equals(n)) throw new H();
    if (t.data.length < g) throw new y();
    const r = q.decode(t.data.slice(0, g));
    let a = d.alloc(0);
    if (t.data.length > g) {
      if (t.data.length === F) throw new y();
      if (t.data[g] != N.Account) throw new ee();
      a = t.data.slice(g + v);
    }
    return {
      address: e,
      mint: r.mint,
      owner: r.owner,
      amount: r.amount,
      delegate: r.delegateOption ? r.delegate : null,
      delegatedAmount: r.delegatedAmount,
      isInitialized: r.state !== I.Uninitialized,
      isFrozen: r.state === I.Frozen,
      isNative: !!r.isNativeOption,
      rentExemptReserve: r.isNativeOption ? r.isNative : null,
      closeAuthority: r.closeAuthorityOption ? r.closeAuthority : null,
      tlvData: a
    };
  };
  Y = i.struct([
    i.u32("mintAuthorityOption"),
    c("mintAuthority"),
    A("supply"),
    i.u8("decimals"),
    S("isInitialized"),
    i.u32("freezeAuthorityOption"),
    c("freezeAuthority")
  ]);
  B = Y.span;
  $e = async function(e, t, n, r = f) {
    const a = await e.getAccountInfo(t, n);
    return ie(t, a, r);
  };
  ie = function(e, t, n = f) {
    if (!t) throw new G();
    if (!t.owner.equals(n)) throw new H();
    if (t.data.length < B) throw new y();
    const r = Y.decode(t.data.slice(0, B));
    let a = d.alloc(0);
    if (t.data.length > B) {
      if (t.data.length <= g) throw new y();
      if (t.data.length === F) throw new y();
      if (t.data[g] != N.Mint) throw new te();
      a = t.data.slice(g + v);
    }
    return {
      address: e,
      mintAuthority: r.mintAuthorityOption ? r.mintAuthority : null,
      supply: r.supply,
      decimals: r.decimals,
      isInitialized: r.isInitialized,
      freezeAuthority: r.freezeAuthorityOption ? r.freezeAuthority : null,
      tlvData: a
    };
  };
  Ve = async function(e, t, n = false, r = f, a = w) {
    if (!n && !h.isOnCurve(t.toBuffer())) throw new K();
    const [s] = await h.findProgramAddress([
      t.toBuffer(),
      r.toBuffer(),
      e.toBuffer()
    ], a);
    return s;
  };
  je = function(e, t, n = false, r = f, a = w) {
    if (!n && !h.isOnCurve(t.toBuffer())) throw new K();
    const [s] = h.findProgramAddressSync([
      t.toBuffer(),
      r.toBuffer(),
      e.toBuffer()
    ], a);
    return s;
  };
  se = i.struct([
    S("lockCpi")
  ]);
  oe = se.span;
  ce = i.struct([
    i.u8("state")
  ]);
  ue = ce.span;
  le = i.struct([]);
  fe = le.span;
  de = i.struct([
    c("rateAuthority"),
    i.ns64("initializationTimestamp"),
    i.s16("preUpdateAverageRate"),
    i.ns64("lastUpdateTimestamp"),
    i.s16("currentRate")
  ]);
  Ae = de.span;
  ge = i.struct([
    S("requireIncomingTransferMemos")
  ]);
  me = ge.span;
  $ = i.struct([
    c("authority"),
    c("metadataAddress")
  ]);
  he = $.span;
  Xe = function(e) {
    const t = Ue(l.MetadataPointer, e.tlvData);
    if (t !== null) {
      const { authority: n, metadataAddress: r } = $.decode(t);
      return {
        authority: n.equals(h.default) ? null : n,
        metadataAddress: r.equals(h.default) ? null : r
      };
    } else return null;
  };
  pe = i.struct([
    c("closeAuthority")
  ]);
  Ee = pe.span;
  V = i.struct([]);
  Se = V.span;
  be = V.span;
  Me = i.struct([
    c("delegate")
  ]);
  ye = Me.span;
  Ce = 1e4;
  BigInt(Ce);
  x = function(e) {
    return i.struct([
      A("epoch"),
      A("maximumFee"),
      i.u16("transferFeeBasisPoints")
    ], e);
  };
  we = i.struct([
    c("transferFeeConfigAuthority"),
    c("withdrawWithheldAuthority"),
    A("withheldAmount"),
    x("olderTransferFee"),
    x("newerTransferFee")
  ]);
  _e = we.span;
  Ne = i.struct([
    A("withheldAmount")
  ]);
  Ie = Ne.span;
  W = i.struct([
    i.u8("instruction"),
    A("amount"),
    i.u8("decimals")
  ]);
  Je = function(e, t, n, r, a, s, o = [], u = f) {
    const m = L([
      {
        pubkey: e,
        isSigner: false,
        isWritable: true
      },
      {
        pubkey: t,
        isSigner: false,
        isWritable: false
      },
      {
        pubkey: n,
        isSigner: false,
        isWritable: true
      }
    ], r, o), _ = d.alloc(W.span);
    return W.encode({
      instruction: b.TransferChecked,
      amount: BigInt(a),
      decimals: s
    }, _), new C({
      keys: m,
      programId: u,
      data: _
    });
  };
  ze = i.struct([
    c("authority"),
    c("programId")
  ]);
  Be = ze.span;
  Oe = i.struct([
    S("transferring")
  ]);
  Le = Oe.span;
  T = i.struct([
    i.u8("discriminator"),
    i.blob(32, "addressConfig"),
    S("isSigner"),
    S("isWritable")
  ]);
  ve = i.struct([
    i.u32("count"),
    i.seq(T, i.greedy(T.span), "extraAccounts")
  ]);
  i.struct([
    A("instructionDiscriminator"),
    i.u32("length"),
    ve.replicate("extraAccountsList")
  ]);
  (function(e) {
    e[e.Uninitialized = 0] = "Uninitialized", e[e.TransferFeeConfig = 1] = "TransferFeeConfig", e[e.TransferFeeAmount = 2] = "TransferFeeAmount", e[e.MintCloseAuthority = 3] = "MintCloseAuthority", e[e.ConfidentialTransferMint = 4] = "ConfidentialTransferMint", e[e.ConfidentialTransferAccount = 5] = "ConfidentialTransferAccount", e[e.DefaultAccountState = 6] = "DefaultAccountState", e[e.ImmutableOwner = 7] = "ImmutableOwner", e[e.MemoTransfer = 8] = "MemoTransfer", e[e.NonTransferable = 9] = "NonTransferable", e[e.InterestBearingConfig = 10] = "InterestBearingConfig", e[e.CpiGuard = 11] = "CpiGuard", e[e.PermanentDelegate = 12] = "PermanentDelegate", e[e.NonTransferableAccount = 13] = "NonTransferableAccount", e[e.TransferHook = 14] = "TransferHook", e[e.TransferHookAccount = 15] = "TransferHookAccount", e[e.MetadataPointer = 18] = "MetadataPointer";
  })(l || (l = {}));
  E = 2;
  z = 2;
  Fe = function(e) {
    switch (e) {
      case l.Uninitialized:
        return 0;
      case l.TransferFeeConfig:
        return _e;
      case l.TransferFeeAmount:
        return Ie;
      case l.MintCloseAuthority:
        return Ee;
      case l.ConfidentialTransferMint:
        return 97;
      case l.ConfidentialTransferAccount:
        return 286;
      case l.CpiGuard:
        return oe;
      case l.DefaultAccountState:
        return ue;
      case l.ImmutableOwner:
        return fe;
      case l.MemoTransfer:
        return me;
      case l.MetadataPointer:
        return he;
      case l.NonTransferable:
        return Se;
      case l.InterestBearingConfig:
        return Ae;
      case l.PermanentDelegate:
        return ye;
      case l.NonTransferableAccount:
        return be;
      case l.TransferHook:
        return Be;
      case l.TransferHookAccount:
        return Le;
      default:
        throw Error(`Unknown extension type: ${e}`);
    }
  };
  function Re(e, t) {
    if (e.length === 0) return t;
    {
      const n = g + v + e.filter((r, a) => a === e.indexOf(r)).map((r) => Fe(r) + E + z).reduce((r, a) => r + a);
      return n === F ? n + E : n;
    }
  }
  Pe = function(e) {
    return Re(e, g);
  };
  Ue = function(e, t) {
    let n = 0;
    for (; n + E + z <= t.length; ) {
      const r = t.readUInt16LE(n), a = t.readUInt16LE(n + E), s = n + E + z;
      if (r == e) return t.slice(s, s + a);
      n = s + a;
    }
    return null;
  };
  Qe = function(e) {
    const t = [];
    let n = 0;
    for (; n < e.length; ) {
      const r = e.readUInt16LE(n);
      t.push(r);
      const a = e.readUInt16LE(n + E);
      n += E + z + a;
    }
    return t;
  };
  Z = i.struct([
    i.u8("instruction")
  ]);
  ke = function(e, t, n, r = f) {
    const a = [
      {
        pubkey: e,
        isSigner: false,
        isWritable: true
      },
      {
        pubkey: t,
        isSigner: false,
        isWritable: false
      },
      {
        pubkey: n,
        isSigner: false,
        isWritable: false
      },
      {
        pubkey: X,
        isSigner: false,
        isWritable: false
      }
    ], s = d.alloc(Z.span);
    return Z.encode({
      instruction: b.InitializeAccount
    }, s), new C({
      keys: a,
      programId: r,
      data: s
    });
  };
  et = function(e, t, n, r, a = f, s = w) {
    return j(e, t, n, r, d.alloc(0), a, s);
  };
  tt = function(e, t, n, r, a = f, s = w) {
    return j(e, t, n, r, d.from([
      1
    ]), a, s);
  };
  function j(e, t, n, r, a, s = f, o = w) {
    const u = [
      {
        pubkey: e,
        isSigner: true,
        isWritable: true
      },
      {
        pubkey: t,
        isSigner: false,
        isWritable: true
      },
      {
        pubkey: n,
        isSigner: false,
        isWritable: false
      },
      {
        pubkey: r,
        isSigner: false,
        isWritable: false
      },
      {
        pubkey: J.programId,
        isSigner: false,
        isWritable: false
      },
      {
        pubkey: s,
        isSigner: false,
        isWritable: false
      }
    ];
    return new C({
      keys: u,
      programId: o,
      data: a
    });
  }
});
export {
  g as ACCOUNT_SIZE,
  v as ACCOUNT_TYPE_SIZE,
  w as ASSOCIATED_TOKEN_PROGRAM_ID,
  q as AccountLayout,
  I as AccountState,
  N as AccountType,
  oe as CPI_GUARD_SIZE,
  se as CpiGuardLayout,
  ue as DEFAULT_ACCOUNT_STATE_SIZE,
  ce as DefaultAccountStateLayout,
  l as ExtensionType,
  T as ExtraAccountMetaLayout,
  ve as ExtraAccountMetaListLayout,
  fe as IMMUTABLE_OWNER_SIZE,
  Ae as INTEREST_BEARING_MINT_CONFIG_STATE_SIZE,
  le as ImmutableOwnerLayout,
  de as InterestBearingMintConfigStateLayout,
  z as LENGTH_SIZE,
  Ce as MAX_FEE_BASIS_POINTS,
  me as MEMO_TRANSFER_SIZE,
  he as METADATA_POINTER_SIZE,
  Ee as MINT_CLOSE_AUTHORITY_SIZE,
  B as MINT_SIZE,
  F as MULTISIG_SIZE,
  ge as MemoTransferLayout,
  $ as MetadataPointerLayout,
  pe as MintCloseAuthorityLayout,
  Y as MintLayout,
  re as MultisigLayout,
  at as NATIVE_MINT,
  be as NON_TRANSFERABLE_ACCOUNT_SIZE,
  Se as NON_TRANSFERABLE_SIZE,
  V as NonTransferableLayout,
  ye as PERMANENT_DELEGATE_SIZE,
  Me as PermanentDelegateLayout,
  it as TOKEN_2022_PROGRAM_ID,
  f as TOKEN_PROGRAM_ID,
  Ie as TRANSFER_FEE_AMOUNT_SIZE,
  _e as TRANSFER_FEE_CONFIG_SIZE,
  Le as TRANSFER_HOOK_ACCOUNT_SIZE,
  Be as TRANSFER_HOOK_SIZE,
  E as TYPE_SIZE,
  G as TokenAccountNotFoundError,
  M as TokenError,
  b as TokenInstruction,
  ee as TokenInvalidAccountError,
  H as TokenInvalidAccountOwnerError,
  y as TokenInvalidAccountSizeError,
  te as TokenInvalidMintError,
  K as TokenOwnerOffCurveError,
  Ne as TransferFeeAmountLayout,
  we as TransferFeeConfigLayout,
  Oe as TransferHookAccountLayout,
  ze as TransferHookLayout,
  __tla,
  U as approveInstructionData,
  D as closeAccountInstructionData,
  He as createApproveInstruction,
  tt as createAssociatedTokenAccountIdempotentInstruction,
  et as createAssociatedTokenAccountInstruction,
  Ke as createCloseAccountInstruction,
  ke as createInitializeAccountInstruction,
  Je as createTransferCheckedInstruction,
  qe as getAccount,
  Pe as getAccountLen,
  Ve as getAssociatedTokenAddress,
  je as getAssociatedTokenAddressSync,
  Ue as getExtensionData,
  Qe as getExtensionTypes,
  Xe as getMetadataPointerState,
  Ye as getMinimumBalanceForRentExemptAccount,
  ne as getMinimumBalanceForRentExemptAccountWithExtensions,
  $e as getMint,
  Fe as getTypeLen,
  Z as initializeAccountInstructionData,
  W as transferCheckedInstructionData,
  x as transferFeeLayout,
  ae as unpackAccount,
  ie as unpackMint
};
