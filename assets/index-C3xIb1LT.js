import { u as o, i as y, j as E, k as w, l as p, s as _, b as k, t as R, n as I, o as N, r as C, __tla as __tla_0 } from "./api-JQ13yNkJ.js";
import { k as M, __tla as __tla_1 } from "./index-7X6IHuYr.js";
import "./vendor-C3gEtrcs.js";
import "./crypto-CvxmDsJu.js";
let l, U, L, v, oe, de, fe, $, V, b, Ee, ge, he, W, D, O, T, S, se, ie, g, Te, re, J, ee, te, G, H, ae, X, P, F, ye, B;
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
  })()
]).then(async () => {
  let K;
  T = (e) => [
    {
      name: "id",
      binary: "bytes",
      size: 32
    },
    {
      name: "sender",
      ...o
    },
    y({
      name: "payload",
      lengthSize: 2
    }, e)
  ];
  g = (e) => ({
    name: "prefix",
    binary: "bytes",
    custom: Uint8Array.from(e),
    omit: true
  });
  X = (e, n, t) => [
    g(e),
    {
      name: "sourceNttManager",
      ...o
    },
    {
      name: "recipientNttManager",
      ...o
    },
    y({
      name: "nttManagerPayload",
      lengthSize: 2
    }, n),
    y({
      name: "transceiverPayload",
      lengthSize: 2
    }, t)
  ];
  H = [
    g([
      156,
      35,
      189,
      59
    ]),
    {
      name: "managerAddress",
      ...o
    },
    {
      name: "mode",
      binary: "uint",
      size: 1
    },
    {
      name: "token",
      ...o
    },
    {
      name: "decimals",
      binary: "uint",
      size: 1
    }
  ];
  P = [
    g([
      24,
      252,
      103,
      194
    ]),
    {
      name: "chain",
      ...E()
    },
    {
      name: "transceiver",
      ...o
    }
  ];
  K = [
    {
      name: "decimals",
      binary: "uint",
      size: 1
    },
    {
      name: "amount",
      binary: "uint",
      size: 8
    }
  ];
  F = {
    binary: "bytes",
    layout: K
  };
  function Y(e, n) {
    let t = 0n;
    for (let a = 0; a < n; ++a) t |= BigInt(e[a]) << BigInt(8 * (n - a - 1));
    return Number(t);
  }
  J = function(e, n) {
    const t = 2n ** BigInt(n * 8);
    if (e >= t) throw new Error(`Value ${e} is too large for ${n} bytes`);
    const a = new Uint8Array(n);
    for (let r = 0; r < n; ++r) a[r] = Number(BigInt(e) >> BigInt(8 * (n - r - 1)) & 0xffn);
    return a;
  };
  let Z, q, Q, ne;
  Z = {
    binary: "bytes",
    custom: {
      to: (e) => {
        if (e.byteLength >= 2) {
          const n = Y(e, 2);
          return e.slice(2, 2 + n);
        }
        return new Uint8Array();
      },
      from: (e) => e.byteLength > 0 ? new Uint8Array([
        ...J(e.byteLength, 2),
        ...e
      ]) : new Uint8Array()
    }
  };
  O = [
    g([
      153,
      78,
      84,
      84
    ]),
    {
      name: "trimmedAmount",
      ...F
    },
    {
      name: "sourceToken",
      ...o
    },
    {
      name: "recipientAddress",
      ...o
    },
    {
      name: "recipientChain",
      ...E()
    },
    {
      name: "additionalPayload",
      ...Z
    }
  ];
  q = [
    {
      name: "name",
      ...w(32)
    },
    {
      name: "symbol",
      ...w(32)
    },
    {
      name: "decimals",
      binary: "uint",
      size: 1
    }
  ];
  G = {
    binary: "bytes",
    layout: q
  };
  Q = [
    {
      name: "chainId",
      ...E()
    },
    {
      name: "tokenAddress",
      ...o
    }
  ];
  ee = {
    binary: "bytes",
    layout: Q
  };
  ne = [
    {
      name: "meta",
      ...G
    },
    {
      name: "token",
      ...ee
    }
  ];
  te = {
    binary: "bytes",
    layout: ne
  };
  W = [
    g([
      153,
      77,
      84,
      84
    ]),
    {
      name: "trimmedAmount",
      ...F
    },
    {
      name: "token",
      ...te
    },
    {
      name: "sender",
      ...o
    },
    {
      name: "to",
      ...o
    },
    y({
      name: "additionalPayload",
      lengthSize: 2
    })
  ];
  $ = (e) => [
    g([
      153,
      71,
      77,
      80
    ]),
    {
      name: "toChain",
      ...E()
    },
    {
      name: "callee",
      ...o
    },
    {
      name: "sender",
      ...o
    },
    y({
      name: "data",
      lengthSize: 2
    }, e)
  ];
  B = (e) => X([
    153,
    69,
    255,
    16
  ], e, new Uint8Array(0));
  ae = (e) => [
    {
      name: "index",
      binary: "uint",
      size: 1
    },
    y({
      name: "payload",
      lengthSize: 1
    }, e)
  ];
  S = [
    [
      "WormholeTransfer",
      B(T(O))
    ],
    [
      "TransceiverInfo",
      H
    ],
    [
      "TransceiverRegistration",
      P
    ]
  ];
  D = [
    [
      "WormholeTransfer",
      B(T($(W)))
    ]
  ];
  (function(e) {
    e.DEFAULT_SVM_SHIM_ADDRESSES = {
      Solana: {
        postMessageShim: "EtZMZM22ViKMo4r5y4Anovs3wKQ2owUmDpjygnMMcdEX",
        verifyVaaShim: "EFaNWErqAtVWufdNb7yofSHHfWFos843DFpu4JBw24at"
      },
      Fogo: {
        postMessageShim: "EtZMZM22ViKMo4r5y4Anovs3wKQ2owUmDpjygnMMcdEX",
        verifyVaaShim: "EFaNWErqAtVWufdNb7yofSHHfWFos843DFpu4JBw24at"
      }
    };
    function n(r) {
      if (r.length > 255) throw new Error(`Too many instructions (${r.length})`);
      return p.concat(new Uint8Array([
        r.length
      ]), ...r.map((i) => _(ae(), i)));
    }
    e.encodeTransceiverInstructions = n;
    function t(r, i) {
      return M(p.concat(k.toBytes(R(r), 2), _(T(O), i)));
    }
    e.messageDigest = t;
    function a(r, i) {
      const u = (s) => {
        const x = /^(\d+)\.(\d+)\.(.*)$/, f = s.match(x);
        if (!f) throw new Error(`Invalid version format: ${s}`);
        const [, A, j, z] = f;
        return {
          major: Number(A),
          minor: Number(j),
          patchAndTag: z
        };
      }, { major: h, minor: c } = u(r), { major: m, minor: d } = u(i);
      return h === m && c >= d;
    }
    e.abiVersionMatches = a;
  })(L || (L = {}));
  v || (v = {});
  (function(e) {
    function n(t, a) {
      return M(p.concat(k.toBytes(R(t), 2), _(T($(W)), a)));
    }
    e.messageDigest = n;
  })(U || (U = {}));
  de = function(e) {
    const n = Number(e & 0xffn);
    return {
      amount: e >> 8n,
      decimals: n
    };
  };
  fe = function(e) {
    const { amount: n, decimals: t } = e;
    if (t < 0 || t > 255) throw new Error("decimals out of range");
    if (n < 0n || n >= 1n << 64n) throw new Error("amount out of range");
    return n << 8n | BigInt(t);
  };
  ye = function(e, n) {
    const { amount: t, decimals: a } = e;
    return re(t, a, n);
  };
  re = function(e, n, t) {
    return n == t ? e : n > t ? e / 10n ** BigInt(n - t) : e * 10n ** BigInt(t - n);
  };
  oe = {
    Ethereum: "ethereum",
    Monad: "monad",
    Sepolia: "ethereum-sepolia"
  };
  (function(e) {
    e.SRC_GATEWAY_CALLED = "source_gateway_called", e.DEST_GATEWAY_APPROVED = "destination_gateway_approved", e.DEST_EXECUTED = "destination_executed", e.EXPRESS_EXECUTED = "express_executed", e.DEST_EXECUTE_ERROR = "error", e.DEST_EXECUTING = "executing", e.APPROVING = "approving", e.FORECALLED = "forecalled", e.FORECALLED_WITHOUT_GAS_PAID = "forecalled_without_gas_paid", e.NOT_EXECUTED = "not_executed", e.NOT_EXECUTED_WITHOUT_GAS_PAID = "not_executed_without_gas_paid", e.INSUFFICIENT_FEE = "insufficient_fee", e.UNKNOWN_ERROR = "unknown_error", e.CANNOT_FETCH_STATUS = "cannot_fetch_status", e.SRC_GATEWAY_CONFIRMED = "confirmed";
  })(l || (l = {}));
  V = function(e) {
    return e === "Mainnet" ? "https://api.axelarscan.io" : "https://testnet.api.axelarscan.io";
  };
  b = function(e) {
    const n = oe[e];
    if (!n) throw new Error(`Unsupported axelar chain: ${e}`);
    return n;
  };
  ge = async function(e, n, t, a, r = "auto", i = 1e4) {
    const u = `${V(e)}/gmp/estimateGasFee`, h = b(n), c = b(t), m = new AbortController(), d = setTimeout(() => m.abort(), i);
    try {
      const s = await fetch(u, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          sourceChain: h,
          destinationChain: c,
          gasMultiplier: r,
          gasLimit: a.toString()
        }),
        signal: m.signal
      });
      if (!s.ok) {
        const A = await s.text();
        throw new Error(`Failed to estimate gas fee: ${s.status} ${A}`);
      }
      const x = await s.json(), f = BigInt(x);
      if (f <= 0n) throw new Error(`Invalid gas fee estimate: ${f}. Received zero or negative fee.`);
      return f;
    } finally {
      clearTimeout(d);
    }
  };
  he = async function(e, n, t, a = 1e4) {
    const r = `${V(e)}/gmp/searchGMP`, i = b(n), u = new AbortController(), h = setTimeout(() => u.abort(), a);
    try {
      const c = await fetch(r, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          sourceChain: i,
          txHash: t
        }),
        signal: u.signal
      });
      if (!c.ok) {
        const s = await c.text();
        throw new Error(`Failed to get transaction status: ${c.status} ${s}`);
      }
      const m = await c.json();
      if (!m.data || m.data.length === 0) throw new Error("No transaction details found");
      const d = m.data[0];
      return {
        status: ie(d),
        error: se(d)
      };
    } finally {
      clearTimeout(h);
    }
  };
  ie = function(e) {
    const { error: n, status: t } = e;
    switch (t) {
      case "error":
        return n ? l.DEST_EXECUTE_ERROR : t;
      case "executed":
        return l.DEST_EXECUTED;
      case "approved":
        return l.DEST_GATEWAY_APPROVED;
      case "called":
        return l.SRC_GATEWAY_CALLED;
      case "executing":
        return l.DEST_EXECUTING;
      default:
        return t;
    }
  };
  se = function(e) {
    if (e.error) return {
      message: "Transfer failed",
      txHash: e.error.sourceTransactionHash,
      chain: e.error.chain
    };
    if (e.is_insufficient_fee) return {
      message: "Insufficient gas",
      txHash: e.call.transaction.hash,
      chain: e.call.chain
    };
  };
  Ee = function(e, n) {
    return e === "Mainnet" ? `https://axelarscan.io/gmp/${n}` : `https://testnet.axelarscan.io/gmp/${n}`;
  };
  Te = function() {
    I.has(N("Ntt", S[0][0])) || C("Ntt", S), I.has(N("MultiTokenNtt", D[0][0])) || C("MultiTokenNtt", D);
  };
});
export {
  l as GMPStatus,
  U as MultiTokenNtt,
  L as Ntt,
  v as WormholeNttTransceiver,
  __tla,
  oe as axelarChains,
  de as decodeTrimmedAmount,
  fe as encodeTrimmedAmount,
  $ as genericMessageLayout,
  V as getAxelarApiUrl,
  b as getAxelarChain,
  Ee as getAxelarExplorerUrl,
  ge as getAxelarGasFee,
  he as getAxelarTransactionStatus,
  W as multiTokenNativeTokenTransferLayout,
  D as multiTokenNttNamedPayloads,
  O as nativeTokenTransferLayout,
  T as nttManagerMessageLayout,
  S as nttNamedPayloads,
  se as parseGMPError,
  ie as parseGMPStatus,
  g as prefixItem,
  Te as register,
  re as scale,
  J as serializeNum,
  ee as tokenIdLayoutItem,
  te as tokenInfoLayoutItem,
  G as tokenMetaLayoutItem,
  H as transceiverInfo,
  ae as transceiverInstructionLayout,
  X as transceiverMessageLayout,
  P as transceiverRegistration,
  F as trimmedAmountItem,
  ye as untrim,
  B as wormholeTransceiverMessageLayout
};
