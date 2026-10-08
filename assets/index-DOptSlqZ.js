import { E as p, F as C, G as g, H as w, J as I, K as L, M as O, N as P, O as x, P as B, Q as m, S as N, T as U, U as H, V as q, X as z, Y as G, Z as j, $ as V, a0 as _, a1 as $, a2 as W, a3 as J, a4 as K, a5 as Z, a6 as Q, a7 as X, a8 as Y, a9 as aa, aa as ra, ab as ea, ac as sa, ad as oa, ae as ta, af as na, ag as ca, ah as ia, ai as da, aj as ua, ak as la, al as Ea, am as pa, an as ba, ao as ha, ap as ma, aq as ga, ar as ya, as as fa, at as Ta, au as Sa, av as Ra, aw as va, ax as Aa, ay as Fa, az as Ca, aA as wa, aB as Ia, aC as xa, aD as Ba, aE as Na, aF as ka, aG as Da, aH as Ma, aI as La, aJ as Oa, aK as Pa, aL as Ua, aM as Ha, aN as qa, aO as za, aP as Ga, aQ as ja, aR as Va, aS as _a, aT as $a, aU as Wa, aV as Ja, aW as Ka, aX as Za, aY as Qa, aZ as Xa, a_ as Ya, a$ as ar, b0 as rr, b1 as er, b2 as sr, b3 as or, b4 as tr, b5 as nr, b6 as cr, b7 as ir, b8 as dr, b9 as ur, ba as lr, bb as Er, bc as pr, bd as br, be as hr, bf as mr, bg as gr, bh as yr, bi as fr, bj as Tr, bk as Sr, bl as Rr, bm as vr, bn as Ar, bo as Fr, bp as Cr, bq as wr, br as Ir, bs as xr, bt as Br, bu as Nr, bv as kr, bw as Dr, bx as Mr, by as Lr, bz as Or, bA as Pr, bB as Ur, bC as Hr, bD as qr, bE as zr, bF as Gr, bG as jr, bH as Vr, bI as _r, bJ as $r, bK as Wr, bL as Jr, bM as Kr, bN as Zr, bO as Qr, bP as Xr, bQ as Yr, bR as ae, bS as re, bT as ee, bU as se, bV as oe, bW as te, bX as ne, bY as ce, bZ as ie, b_ as de, b$ as ue, c0 as le, c1 as Ee, c2 as pe, c3 as be, c4 as he, c5 as me, c6 as ge, c7 as ye, c8 as fe, c9 as Te, ca as Se, cb as Re, cc as ve, cd as Ae, ce as Fe, cf as Ce, cg as T, ch as S, ci as we, cj as Ie, ck as xe, cl as Be, cm as Ne, cn as ke, co as De, cp as Me, cq as Le, cr as Oe, cs as Pe, ct as Ue, cu as He, cv as qe, cw as ze, cx as R, cy as l, cz as v, cA as Ge, cB as je, cC as Ve, cD as _e, cE as $e, cF as We, cG as Je, cH as Ke, cI as Ze, cJ as Qe, cK as Xe, cL as Ye, cM as as, cN as rs, cO as es, cP as ss, cQ as os, cR as ts, cS as ns, cT as cs, cU as is, cV as ds, cW as us, cX as ls, cY as Es, cZ as ps, c_ as bs, c$ as hs, d0 as ms, d1 as gs, d2 as ys, d3 as fs, d4 as A, d5 as Ts, d6 as Ss, d7 as Rs, d8 as vs, d9 as As, da as Fs, db as Cs, dc as ws, dd as Is, de as xs, df as Bs, dg as Ns, dh as F, di as ks, dj as Ds, dk as Ms, dl as Ls, dm as Os, dn as Ps, dp as Us, dq as Hs, dr as qs, ds as zs, dt as Gs, du as js, __tla as __tla_0 } from "./index-B5b07SCM.js";
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
          `Response: ${g(s)}`
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
  const k = "0x556f1830", y = {
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
  async function D(d, { blockNumber: s, blockTag: a, data: t, to: n }) {
    const { args: c } = w({
      data: t,
      abi: [
        y
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
            details: (o == null ? void 0 : o.error) ? g(o.error) : r.statusText,
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
    offchainLookup: D,
    offchainLookupAbiItem: y,
    offchainLookupSignature: k
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
    ClientChainNotConfiguredError: ga,
    ContractFunctionExecutionError: ya,
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
    FeeCapTooLowError: ka,
    FilterTypeNotSupportedError: Da,
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
    ProviderRpcError: gr,
    RawContractError: yr,
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
    TransactionExecutionError: kr,
    TransactionNotFoundError: Dr,
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
    decodeFunctionData: ge,
    decodeFunctionResult: ye,
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
    formatGwei: ke,
    formatLog: De,
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
    offchainLookup: D,
    offchainLookupAbiItem: y,
    offchainLookupSignature: k,
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
    recoverPublicKey: gs,
    rpcSchema: ys,
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
    stringify: g,
    toBlobSidecars: xs,
    toBlobs: Bs,
    toBytes: Ns,
    toEventHash: F,
    toEventSelector: R,
    toEventSignature: l,
    toFunctionHash: F,
    toFunctionSelector: v,
    toFunctionSignature: l,
    toHex: ks,
    toPrefixedMessage: Ds,
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
