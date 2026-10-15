import { O as p, P as C, Q as y, S as w, T as x, U as L, V as O, X as P, Y as I, Z as B, $ as m, a0 as N, a1 as U, a2 as H, a3 as q, a4 as z, a5 as j, a6 as G, a7 as V, a8 as _, a9 as $, aa as W, ab as Z, ac as J, ad as K, ae as Q, af as X, ag as Y, ah as aa, ai as ra, aj as ea, ak as sa, al as oa, am as ta, an as na, ao as ca, ap as ia, aq as da, ar as ua, as as la, at as Ea, au as pa, av as ba, aw as ha, ax as ma, ay as ya, az as ga, aA as fa, aB as Ta, aC as Sa, aD as Ra, aE as va, aF as Aa, aG as Fa, aH as Ca, aI as wa, aJ as xa, aK as Ia, aL as Ba, aM as Na, aN as ka, aO as Da, aP as Ma, aQ as La, aR as Oa, aS as Pa, aT as Ua, aU as Ha, aV as qa, aW as za, aX as ja, aY as Ga, aZ as Va, a_ as _a, a$ as $a, b0 as Wa, b1 as Za, b2 as Ja, b3 as Ka, b4 as Qa, b5 as Xa, b6 as Ya, b7 as ar, b8 as rr, b9 as er, ba as sr, bb as or, bc as tr, bd as nr, be as cr, bf as ir, bg as dr, bh as ur, bi as lr, bj as Er, bk as pr, bl as br, bm as hr, bn as mr, bo as yr, bp as gr, bq as fr, br as Tr, bs as Sr, bt as Rr, bu as vr, bv as Ar, bw as Fr, bx as Cr, by as wr, bz as xr, bA as Ir, bB as Br, bC as Nr, bD as kr, bE as Dr, bF as Mr, bG as Lr, bH as Or, bI as Pr, bJ as Ur, bK as Hr, bL as qr, bM as zr, bN as jr, bO as Gr, bP as Vr, bQ as _r, bR as $r, bS as Wr, bT as Zr, bU as Jr, bV as Kr, bW as Qr, bX as Xr, bY as Yr, bZ as ae, b_ as re, b$ as ee, c0 as se, c1 as oe, c2 as te, c3 as ne, c4 as ce, c5 as ie, c6 as de, c7 as ue, c8 as le, c9 as Ee, ca as pe, cb as be, cc as he, cd as me, ce as ye, cf as ge, cg as fe, ch as Te, ci as Se, cj as Re, ck as ve, cl as Ae, cm as Fe, cn as Ce, co as T, cp as S, cq as we, cr as xe, cs as Ie, ct as Be, cu as Ne, cv as ke, cw as De, cx as Me, cy as Le, cz as Oe, cA as Pe, cB as Ue, cC as He, cD as qe, cE as ze, cF as R, cG as l, cH as v, cI as je, cJ as Ge, cK as Ve, cL as _e, cM as $e, cN as We, cO as Ze, cP as Je, cQ as Ke, cR as Qe, cS as Xe, cT as Ye, cU as as, cV as rs, cW as es, cX as ss, cY as os, cZ as ts, c_ as ns, c$ as cs, d0 as is, d1 as ds, d2 as us, d3 as ls, d4 as Es, d5 as ps, d6 as bs, d7 as hs, d8 as ms, d9 as ys, da as gs, db as fs, dc as A, dd as Ts, de as Ss, df as Rs, dg as vs, dh as As, di as Fs, dj as Cs, dk as ws, dl as xs, dm as Is, dn as Bs, dp as Ns, dq as F, dr as ks, ds as Ds, dt as Ms, du as Ls, dv as Os, dw as Ps, dx as Us, dy as Hs, dz as qs, dA as zs, dB as js, dC as Gs, __tla as __tla_0 } from "./index-DyMqztrh.js";
let Zs, Js;
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
  const k = "0x556f1830", g = {
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
  Zs = Object.freeze(Object.defineProperty({
    __proto__: null,
    ccipRequest: E,
    offchainLookup: D,
    offchainLookupAbiItem: g,
    offchainLookupSignature: k
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  Js = Object.freeze(Object.defineProperty({
    __proto__: null,
    AbiConstructorNotFoundError: z,
    AbiConstructorParamsNotFoundError: j,
    AbiDecodingDataSizeTooSmallError: G,
    AbiDecodingZeroDataError: V,
    AbiEncodingArrayLengthMismatchError: _,
    AbiEncodingBytesSizeMismatchError: $,
    AbiEncodingLengthMismatchError: W,
    AbiErrorInputsNotFoundError: Z,
    AbiErrorNotFoundError: J,
    AbiErrorSignatureNotFoundError: K,
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
    InvalidAbiTypeParameterError: ja,
    InvalidAddressError: Ga,
    InvalidArrayError: Va,
    InvalidBytesBooleanError: _a,
    InvalidDefinitionTypeError: $a,
    InvalidDomainError: Wa,
    InvalidFunctionModifierError: Za,
    InvalidHexBooleanError: Ja,
    InvalidInputRpcError: Ka,
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
    UnknownTypeError: jr,
    UnsupportedChainIdError: Gr,
    UnsupportedNonOptionalCapabilityError: Vr,
    UnsupportedProviderMethodError: _r,
    UrlRequiredError: $r,
    UserRejectedRequestError: Wr,
    WaitForCallsStatusTimeoutError: Zr,
    WaitForTransactionReceiptTimeoutError: Jr,
    WebSocketRequestError: Kr,
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
    getTransactionType: je,
    getTypesForEIP712Domain: Ge,
    gweiUnits: Ve,
    hashDomain: _e,
    hashMessage: $e,
    hashStruct: We,
    hashTypedData: Ze,
    hexToBigInt: Je,
    hexToBool: Ke,
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
    offchainLookup: D,
    offchainLookupAbiItem: g,
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
    withTimeout: js,
    zeroAddress: Gs
  }, Symbol.toStringTag, {
    value: "Module"
  }));
});
export {
  __tla,
  Zs as c,
  Js as i
};
