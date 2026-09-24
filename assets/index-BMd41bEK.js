import { B as p, d as C, s as y, e as w, i as x, l as L, f as O, h as P, j as I, k as B, H as m, m as N, p as U, n as H, o as q, A as z, q as G, r as j, t as V, v as _, w as $, x as W, y as J, z as K, C as Z, D as Q, E as X, F as Y, G as aa, J as ra, K as ea, L as sa, M as oa, N as ta, O as na, P as ca, Q as ia, R as da, S as ua, T as la, U as Ea, V as pa, W as ba, X as ha, Y as ma, Z as ya, _ as ga, $ as fa, a0 as Ta, a1 as Sa, a2 as Ra, a3 as va, a4 as Aa, a5 as Fa, a6 as Ca, a7 as wa, a8 as xa, a9 as Ia, aa as Ba, ab as Na, ac as Da, ad as ka, ae as Ma, af as La, ag as Oa, ah as Pa, ai as Ua, aj as Ha, ak as qa, al as za, am as Ga, an as ja, ao as Va, ap as _a, aq as $a, ar as Wa, as as Ja, at as Ka, au as Za, av as Qa, aw as Xa, ax as Ya, ay as ar, az as rr, aA as er, aB as sr, aC as or, aD as tr, aE as nr, aF as cr, aG as ir, aH as dr, aI as ur, aJ as lr, aK as Er, aL as pr, aM as br, aN as hr, aO as mr, aP as yr, aQ as gr, aR as fr, aS as Tr, aT as Sr, aU as Rr, aV as vr, aW as Ar, aX as Fr, aY as Cr, aZ as wr, a_ as xr, a$ as Ir, b0 as Br, b1 as Nr, b2 as Dr, b3 as kr, b4 as Mr, b5 as Lr, b6 as Or, b7 as Pr, b8 as Ur, b9 as Hr, ba as qr, bb as zr, bc as Gr, bd as jr, be as Vr, bf as _r, bg as $r, bh as Wr, bi as Jr, bj as Kr, bk as Zr, bl as Qr, bm as Xr, bn as Yr, bo as ae, bp as re, bq as ee, br as se, bs as oe, bt as te, bu as ne, bv as ce, bw as ie, bx as de, by as ue, bz as le, bA as Ee, bB as pe, bC as be, bD as he, bE as me, bF as ye, bG as ge, bH as fe, bI as Te, bJ as Se, bK as Re, bL as ve, bM as Ae, bN as Fe, bO as Ce, bP as T, bQ as S, bR as we, bS as xe, bT as Ie, bU as Be, bV as Ne, bW as De, bX as ke, bY as Me, bZ as Le, b_ as Oe, b$ as Pe, c0 as Ue, c1 as He, c2 as qe, c3 as ze, c4 as R, c5 as l, c6 as v, c7 as Ge, c8 as je, c9 as Ve, ca as _e, cb as $e, cc as We, cd as Je, ce as Ke, cf as Ze, cg as Qe, ch as Xe, ci as Ye, cj as as, ck as rs, cl as es, cm as ss, cn as os, co as ts, cp as ns, cq as cs, cr as is, cs as ds, ct as us, cu as ls, cv as Es, cw as ps, cx as bs, cy as hs, cz as ms, cA as ys, cB as gs, cC as fs, cD as A, cE as Ts, cF as Ss, cG as Rs, cH as vs, cI as As, cJ as Fs, cK as Cs, cL as ws, cM as xs, cN as Is, cO as Bs, cP as Ns, cQ as F, cR as Ds, cS as ks, cT as Ms, cU as Ls, cV as Os, cW as Ps, cX as Us, cY as Hs, cZ as qs, c_ as zs, c$ as Gs, d0 as js, __tla as __tla_0 } from "./index-wcPFc_pz.js";
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
      if (!x(n, e)) throw new $s({
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
        data: I([
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
    EnsAvatarUriResolutionError: xa,
    EstimateGasExecutionError: Ia,
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
    StateAssignmentConflictError: xr,
    SwitchChainError: Ir,
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
    concat: I,
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
    etherUnits: xe,
    fallback: Ie,
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
    isAddressEqual: x,
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
    stringToHex: xs,
    stringify: y,
    toBlobSidecars: Is,
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
