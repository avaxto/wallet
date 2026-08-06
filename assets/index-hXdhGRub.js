import { B as p, g as C, s as y, d as w, i as I, l as L, a as O, c as P, b as x, e as B, H as m, f as N, p as U, h as H, j as q, A as z, k as G, m as j, n as V, o as _, q as $, r as W, t as J, u as K, v as Z, w as Q, x as X, y as Y, z as aa, C as ra, D as ea, E as sa, F as oa, G as ta, I as na, J as ca, K as ia, L as da, M as ua, N as la, O as Ea, P as pa, Q as ba, R as ha, S as ma, T as ya, U as ga, V as fa, W as Ta, X as Sa, Y as Ra, Z as va, _ as Aa, $ as Fa, a0 as Ca, a1 as wa, a2 as Ia, a3 as xa, a4 as Ba, a5 as Na, a6 as Da, a7 as ka, a8 as Ma, a9 as La, aa as Oa, ab as Pa, ac as Ua, ad as Ha, ae as qa, af as za, ag as Ga, ah as ja, ai as Va, aj as _a, ak as $a, al as Wa, am as Ja, an as Ka, ao as Za, ap as Qa, aq as Xa, ar as Ya, as as ar, at as rr, au as er, av as sr, aw as or, ax as tr, ay as nr, az as cr, aA as ir, aB as dr, aC as ur, aD as lr, aE as Er, aF as pr, aG as br, aH as hr, aI as mr, aJ as yr, aK as gr, aL as fr, aM as Tr, aN as Sr, aO as Rr, aP as vr, aQ as Ar, aR as Fr, aS as Cr, aT as wr, aU as Ir, aV as xr, aW as Br, aX as Nr, aY as Dr, aZ as kr, a_ as Mr, a$ as Lr, b0 as Or, b1 as Pr, b2 as Ur, b3 as Hr, b4 as qr, b5 as zr, b6 as Gr, b7 as jr, b8 as Vr, b9 as _r, ba as $r, bb as Wr, bc as Jr, bd as Kr, be as Zr, bf as Qr, bg as Xr, bh as Yr, bi as ae, bj as re, bk as ee, bl as se, bm as oe, bn as te, bo as ne, bp as ce, bq as ie, br as de, bs as ue, bt as le, bu as Ee, bv as pe, bw as be, bx as he, by as me, bz as ye, bA as ge, bB as fe, bC as Te, bD as Se, bE as Re, bF as ve, bG as Ae, bH as Fe, bI as Ce, bJ as T, bK as S, bL as we, bM as Ie, bN as xe, bO as Be, bP as Ne, bQ as De, bR as ke, bS as Me, bT as Le, bU as Oe, bV as Pe, bW as Ue, bX as He, bY as qe, bZ as ze, b_ as R, b$ as l, c0 as v, c1 as Ge, c2 as je, c3 as Ve, c4 as _e, c5 as $e, c6 as We, c7 as Je, c8 as Ke, c9 as Ze, ca as Qe, cb as Xe, cc as Ye, cd as as, ce as rs, cf as es, cg as ss, ch as os, ci as ts, cj as ns, ck as cs, cl as is, cm as ds, cn as us, co as ls, cp as Es, cq as ps, cr as bs, cs as hs, ct as ms, cu as ys, cv as gs, cw as fs, cx as A, cy as Ts, cz as Ss, cA as Rs, cB as vs, cC as As, cD as Fs, cE as Cs, cF as ws, cG as Is, cH as xs, cI as Bs, cJ as Ns, cK as F, cL as Ds, cM as ks, cN as Ms, cO as Ls, cP as Os, cQ as Ps, cR as Us, cS as Hs, cT as qs, cU as zs, cV as Gs, cW as js, __tla as __tla_0 } from "./index-C7pHRsnz.js";
let Js, Ks;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  class Vs extends p {
    constructor({ callbackSelector: s, cause: a, data: t, extraData: n, sender: c, urls: e }) {
      var _a2;
      super(a.shortMessage || "An error occurred while fetching for an offchain result.", {
        cause: a,
        metaMessages: [
          ...a.metaMessages || [],
          ((_a2 = a.metaMessages) == null ? void 0 : _a2.length) ? "" : [],
          "Offchain Gateway Call:",
          e && [
            "  Gateway URL(s):",
            ...e.map((i) => `    ${C(i)}`)
          ],
          `  Sender: ${c}`,
          `  Data: ${t}`,
          `  Callback selector: ${s}`,
          `  Extra data: ${n}`
        ].flat(),
        name: "OffchainLookupError"
      });
    }
  }
  class _s extends p {
    constructor({ result: s, url: a }) {
      super("Offchain gateway response is malformed. Response data must be a hex value.", {
        metaMessages: [
          `Gateway URL: ${C(a)}`,
          `Response: ${y(s)}`
        ],
        name: "OffchainLookupResponseMalformedError"
      });
    }
  }
  class $s extends p {
    constructor({ sender: s, to: a }) {
      super("Reverted sender address does not match target contract address (`to`).", {
        metaMessages: [
          `Contract address: ${a}`,
          `OffchainLookup sender address: ${s}`
        ],
        name: "OffchainLookupSenderMismatchError"
      });
    }
  }
  const D = "0x556f1830", g = {
    name: "OffchainLookup",
    type: "error",
    inputs: [
      {
        name: "sender",
        type: "address"
      },
      {
        name: "urls",
        type: "string[]"
      },
      {
        name: "callData",
        type: "bytes"
      },
      {
        name: "callbackFunction",
        type: "bytes4"
      },
      {
        name: "extraData",
        type: "bytes"
      }
    ]
  };
  async function k(d, { blockNumber: s, blockTag: a, data: t, to: n }) {
    const { args: c } = w({
      data: t,
      abi: [
        g
      ]
    }), [e, i, u, r, o] = c, { ccipRead: b } = d, f = b && typeof (b == null ? void 0 : b.request) == "function" ? b.request : E;
    try {
      if (!I(n, e)) throw new $s({
        sender: e,
        to: n
      });
      const h = i.includes(L) ? await O({
        data: u,
        ccipRequest: f
      }) : await f({
        data: u,
        sender: e,
        urls: i
      }), { data: M } = await P(d, {
        blockNumber: s,
        blockTag: a,
        data: x([
          r,
          B([
            {
              type: "bytes"
            },
            {
              type: "bytes"
            }
          ], [
            h,
            o
          ])
        ]),
        to: n
      });
      return M;
    } catch (h) {
      throw new Vs({
        callbackSelector: r,
        cause: h,
        data: t,
        extraData: o,
        sender: e,
        urls: i
      });
    }
  }
  async function E({ data: d, sender: s, urls: a }) {
    var _a2;
    let t = new Error("An unknown error occurred.");
    for (let n = 0; n < a.length; n++) {
      const c = a[n], e = c.includes("{data}") ? "GET" : "POST", i = e === "POST" ? {
        data: d,
        sender: s
      } : void 0, u = e === "POST" ? {
        "Content-Type": "application/json"
      } : {};
      try {
        const r = await fetch(c.replace("{sender}", s.toLowerCase()).replace("{data}", d), {
          body: JSON.stringify(i),
          headers: u,
          method: e
        });
        let o;
        if (((_a2 = r.headers.get("Content-Type")) == null ? void 0 : _a2.startsWith("application/json")) ? o = (await r.json()).data : o = await r.text(), !r.ok) {
          t = new m({
            body: i,
            details: (o == null ? void 0 : o.error) ? y(o.error) : r.statusText,
            headers: r.headers,
            status: r.status,
            url: c
          });
          continue;
        }
        if (!N(o)) {
          t = new _s({
            result: o,
            url: c
          });
          continue;
        }
        return o;
      } catch (r) {
        t = new m({
          body: i,
          details: r.message,
          url: c
        });
      }
    }
    throw t;
  }
  Js = Object.freeze(Object.defineProperty({
    __proto__: null,
    ccipRequest: E,
    offchainLookup: k,
    offchainLookupAbiItem: g,
    offchainLookupSignature: D
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  Ks = Object.freeze(Object.defineProperty({
    __proto__: null,
    AbiConstructorNotFoundError: z,
    AbiConstructorParamsNotFoundError: G,
    AbiDecodingDataSizeTooSmallError: j,
    AbiDecodingZeroDataError: V,
    AbiEncodingArrayLengthMismatchError: _,
    AbiEncodingBytesSizeMismatchError: $,
    AbiEncodingLengthMismatchError: W,
    AbiErrorInputsNotFoundError: J,
    AbiErrorNotFoundError: K,
    AbiErrorSignatureNotFoundError: Z,
    AbiEventNotFoundError: Q,
    AbiEventSignatureEmptyTopicsError: X,
    AbiEventSignatureNotFoundError: Y,
    AbiFunctionNotFoundError: aa,
    AbiFunctionOutputsNotFoundError: ra,
    AbiFunctionSignatureNotFoundError: ea,
    AccountStateConflictError: sa,
    AtomicReadyWalletRejectedUpgradeError: oa,
    AtomicityNotSupportedError: ta,
    BaseError: p,
    BaseFeeScalarError: na,
    BlockNotFoundError: ca,
    BundleFailedError: ia,
    BundleTooLargeError: da,
    BytesSizeMismatchError: ua,
    CallExecutionError: la,
    ChainDisconnectedError: Ea,
    ChainDoesNotSupportContract: pa,
    ChainMismatchError: ba,
    ChainNotFoundError: ha,
    CircularReferenceError: ma,
    ClientChainNotConfiguredError: ya,
    ContractFunctionExecutionError: ga,
    ContractFunctionRevertedError: fa,
    ContractFunctionZeroDataError: Ta,
    CounterfactualDeploymentFailedError: Sa,
    DecodeLogDataMismatch: Ra,
    DecodeLogTopicsMismatch: va,
    DuplicateIdError: Aa,
    Eip1559FeesNotSupportedError: Fa,
    EnsAvatarInvalidNftUriError: Ca,
    EnsAvatarUnsupportedNamespaceError: wa,
    EnsAvatarUriResolutionError: Ia,
    EstimateGasExecutionError: xa,
    ExecutionRevertedError: Ba,
    FeeCapTooHighError: Na,
    FeeCapTooLowError: Da,
    FilterTypeNotSupportedError: ka,
    HttpRequestError: m,
    InsufficientFundsError: Ma,
    IntegerOutOfRangeError: La,
    InternalRpcError: Oa,
    IntrinsicGasTooHighError: Pa,
    IntrinsicGasTooLowError: Ua,
    InvalidAbiDecodingTypeError: Ha,
    InvalidAbiEncodingTypeError: qa,
    InvalidAbiItemError: za,
    InvalidAbiTypeParameterError: Ga,
    InvalidAddressError: ja,
    InvalidArrayError: Va,
    InvalidBytesBooleanError: _a,
    InvalidDefinitionTypeError: $a,
    InvalidDomainError: Wa,
    InvalidFunctionModifierError: Ja,
    InvalidHexBooleanError: Ka,
    InvalidInputRpcError: Za,
    InvalidModifierError: Qa,
    InvalidParameterError: Xa,
    InvalidParamsRpcError: Ya,
    InvalidParenthesisError: ar,
    InvalidPrimaryTypeError: rr,
    InvalidRequestRpcError: er,
    InvalidSerializableTransactionError: sr,
    InvalidSignatureError: or,
    InvalidStructSignatureError: tr,
    InvalidStructTypeError: nr,
    JsonRpcVersionUnsupportedError: cr,
    LimitExceededRpcError: ir,
    MaxFeePerGasTooLowError: dr,
    MethodNotFoundRpcError: ur,
    MethodNotSupportedRpcError: lr,
    NonceMaxValueError: Er,
    NonceTooHighError: pr,
    NonceTooLowError: br,
    ParseRpcError: hr,
    ProviderDisconnectedError: mr,
    ProviderRpcError: yr,
    RawContractError: gr,
    ResourceNotFoundRpcError: fr,
    ResourceUnavailableRpcError: Tr,
    RpcError: Sr,
    RpcRequestError: Rr,
    SizeExceedsPaddingSizeError: vr,
    SizeOverflowError: Ar,
    SliceOffsetOutOfBoundsError: Fr,
    SocketClosedError: Cr,
    SolidityProtectedKeywordError: wr,
    StateAssignmentConflictError: Ir,
    SwitchChainError: xr,
    TimeoutError: Br,
    TipAboveFeeCapError: Nr,
    TransactionExecutionError: Dr,
    TransactionNotFoundError: kr,
    TransactionReceiptNotFoundError: Mr,
    TransactionRejectedRpcError: Lr,
    TransactionTypeNotSupportedError: Or,
    UnauthorizedProviderError: Pr,
    UnknownBundleIdError: Ur,
    UnknownNodeError: Hr,
    UnknownRpcError: qr,
    UnknownSignatureError: zr,
    UnknownTypeError: Gr,
    UnsupportedChainIdError: jr,
    UnsupportedNonOptionalCapabilityError: Vr,
    UnsupportedProviderMethodError: _r,
    UrlRequiredError: $r,
    UserRejectedRequestError: Wr,
    WaitForCallsStatusTimeoutError: Jr,
    WaitForTransactionReceiptTimeoutError: Kr,
    WebSocketRequestError: Zr,
    assertCurrentChain: Qr,
    assertRequest: Xr,
    blobsToCommitments: Yr,
    blobsToProofs: ae,
    boolToBytes: re,
    boolToHex: ee,
    bytesToBigInt: se,
    bytesToBool: oe,
    bytesToHex: te,
    bytesToNumber: ne,
    bytesToString: ce,
    ccipFetch: E,
    ccipRequest: E,
    checksumAddress: ie,
    commitmentToVersionedHash: de,
    commitmentsToVersionedHashes: ue,
    concat: x,
    concatBytes: le,
    concatHex: Ee,
    createClient: pe,
    createTransport: be,
    createWalletClient: H,
    custom: q,
    decodeAbiParameters: he,
    decodeErrorResult: w,
    decodeEventLog: me,
    decodeFunctionData: ye,
    decodeFunctionResult: ge,
    defineChain: fe,
    deploylessCallViaBytecodeBytecode: Te,
    deploylessCallViaFactoryBytecode: Se,
    encodeAbiParameters: B,
    encodeDeployData: Re,
    encodeErrorResult: ve,
    encodeEventTopics: Ae,
    encodeFunctionData: Fe,
    encodeFunctionResult: Ce,
    erc6492SignatureValidatorAbi: T,
    erc6492SignatureValidatorByteCode: S,
    ethAddress: we,
    etherUnits: Ie,
    fallback: xe,
    formatBlock: Be,
    formatEther: Ne,
    formatGwei: De,
    formatLog: ke,
    formatTransaction: Me,
    formatTransactionReceipt: Le,
    formatTransactionRequest: Oe,
    formatUnits: Pe,
    getAbiItem: Ue,
    getAddress: He,
    getChainContractAddress: qe,
    getContractError: ze,
    getEventSelector: R,
    getEventSignature: l,
    getFunctionSelector: v,
    getFunctionSignature: l,
    getTransactionType: Ge,
    getTypesForEIP712Domain: je,
    gweiUnits: Ve,
    hashDomain: _e,
    hashMessage: $e,
    hashStruct: We,
    hashTypedData: Je,
    hexToBigInt: Ke,
    hexToBool: Ze,
    hexToBytes: Qe,
    hexToNumber: Xe,
    http: Ye,
    isAddress: as,
    isAddressEqual: I,
    isHex: N,
    keccak256: rs,
    labelhash: es,
    maxUint256: ss,
    multicall3Abi: os,
    namehash: ts,
    numberToBytes: ns,
    numberToHex: cs,
    offchainLookup: k,
    offchainLookupAbiItem: g,
    offchainLookupSignature: D,
    pad: is,
    padBytes: ds,
    padHex: us,
    parseAbi: ls,
    parseAbiItem: Es,
    parseEventLogs: ps,
    prepareEncodeFunctionData: bs,
    presignMessagePrefix: hs,
    publicActions: U,
    recoverAddress: ms,
    recoverPublicKey: ys,
    rpcSchema: gs,
    rpcTransactionType: fs,
    serializeSignature: A,
    serializeTypedData: Ts,
    sha256: Ss,
    shouldThrow: Rs,
    signatureToHex: A,
    size: vs,
    slice: As,
    sliceBytes: Fs,
    sliceHex: Cs,
    stringToBytes: ws,
    stringToHex: Is,
    stringify: y,
    toBlobSidecars: xs,
    toBlobs: Bs,
    toBytes: Ns,
    toEventHash: F,
    toEventSelector: R,
    toEventSignature: l,
    toFunctionHash: F,
    toFunctionSelector: v,
    toFunctionSignature: l,
    toHex: Ds,
    toPrefixedMessage: ks,
    toRlp: Ms,
    transactionType: Ls,
    trim: Os,
    universalSignatureValidatorAbi: T,
    universalSignatureValidatorByteCode: S,
    validateTypedData: Ps,
    walletActions: Us,
    webSocket: Hs,
    withCache: qs,
    withRetry: zs,
    withTimeout: Gs,
    zeroAddress: js
  }, Symbol.toStringTag, {
    value: "Module"
  }));
});
export {
  __tla,
  Js as c,
  Ks as i
};
