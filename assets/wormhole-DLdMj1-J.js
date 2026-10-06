var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { q as w, I as we, bb as Kt, av as Bi, a6 as yi, aB as Gt, ab as xi, t as me, F as Se, H as Ve, G as Ke, aE as Fi, J as Pa, g as Ra, M as _e, bc as Si, aG as Ti, U as Pe, S as ea, L as Dt, T as wi, s as Wi, b0 as Ui, aj as vi, b2 as Oi, l as ki, as as Pi, at as Ri, au as Mi, __tla as __tla_0 } from "./api-JQ13yNkJ.js";
import { p as Ma } from "./crypto-CvxmDsJu.js";
let Rd, Br, jr, Ge, ca, la, et, ci, Aa, gr, Le, Id, md, L, za, it, ia, hd, di, uc, x, Dc, si, Z, Ld, mc, ne, bc, rt, Nd, $t, gd, fc, od, Sa, wd, Wd, Rr, xd, Td, Ka, nd, Pr, kd, Sd, Ec, Yt, Pd, Bd, Hd, Jt, ar, ss, Na, vd, Fd, yd, _r, ji, Bs, Od, Ud, ma, hc, _i, Vr, xs, Fs, zr, zd, zt, _d, Cc, Vt, nt, qr, ys, Md, kr, yt, Fe, V, cd, he, ld, qd, gc, Kr, Ja, pc, Ne, li, pr, R, ta, ae, ye, Ea, jd, Ia, ee, bd, Da, Ac, Cr;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function Ii(e, a) {
    return Number(Number(e).toFixed(a));
  }
  ta = function(e, a) {
    if (Li(e, a), e = e.toString(), e.includes("e")) throw new Error("Scientific notation is not supported yet by Amount");
    const t = e.split(".");
    if (t.length > 2) throw "Too many decimals";
    let [s, i] = t.length === 0 ? [
      "0",
      ""
    ] : t.length === 1 ? [
      t[0],
      ""
    ] : t;
    if (i = i.padEnd(a, "0"), i.length > a) {
      if (BigInt(i.substring(a)) !== 0n) throw new Error("Amount: invalid input. Decimals too low.");
      i = i.substring(0, a);
    }
    return {
      amount: BigInt(s + i).toString(),
      decimals: a
    };
  };
  Ia = function(e, a) {
    if (e.decimals <= a) return e;
    const t = BigInt(e.decimals - a);
    return {
      amount: (ee(e) / 10n ** t * 10n ** t).toString(),
      decimals: e.decimals
    };
  };
  ca = function(e, a) {
    if (e.decimals === a) return e;
    if (e.amount === "0") return {
      amount: e.amount,
      decimals: a
    };
    const t = a - e.decimals;
    if (t > 0) return {
      amount: e.amount + "0".repeat(t),
      decimals: a
    };
    if (BigInt(e.amount.substring(e.amount.length + t)) === 0n) return {
      amount: e.amount.substring(0, e.amount.length + t),
      decimals: a
    };
    throw new Error(`scaleAmount(${JSON.stringify(e)}, ${a}) would result in altered amount. Use truncateAmount first if you intended to truncate it.`);
  };
  he = function(e, a) {
    return {
      amount: e.toString(),
      decimals: a
    };
  };
  ee = function(e) {
    return Xt(e), BigInt(e.amount);
  };
  Ja = function(e, a) {
    Xt(e);
    let t = e.amount.substring(0, e.amount.length - e.decimals).padStart(1, "0"), s = e.amount.substring(e.amount.length - e.decimals).padStart(e.decimals, "0");
    if (a !== void 0) {
      for (; s.length > a && s[s.length - 1] === "0"; ) s = s.substring(0, s.length - 1);
      s = s.padEnd(a, "0");
    } else s = s.replace(/0+$/, "");
    return s.length > 0 ? `${t}.${s}` : t;
  };
  function He(e) {
    return Number(Ja(e));
  }
  function Hi(e, a) {
    return Ja(he(e, a));
  }
  function Li(e, a) {
    if (typeof e == "number") {
      if (!isFinite(e)) throw new Error("Amount: invalid input. Amount must be finite");
      if (e < 0) throw new Error("Amount: invalid input. Amount cannot be negative");
    } else if (!/^[0-9\.]*$/.test(e)) throw new Error("Amount: invalid input. Must only contain digits.");
    if (!isFinite(a)) throw new Error("Amount: invalid input. Decimals must be finite");
  }
  function Xt(e) {
    if (!/^[0-9]*$/.test(e.amount)) throw new Error("Amount: invalid input. Must only contain digits.");
    if (e.decimals < 0) throw new Error("Amount: invalid input. Decimals must be >= 0");
    if (!isFinite(e.decimals)) throw new Error("Amount: invalid input. Decimals must be a finite number.");
  }
  function Ni(e, a) {
    const s = ee(e) * a / 100000n;
    return he(s, e.decimals);
  }
  gd = Object.freeze(Object.defineProperty({
    __proto__: null,
    denoise: Ii,
    display: Ja,
    fmt: Hi,
    fromBaseUnits: he,
    getDeciBps: Ni,
    parse: ta,
    scale: ca,
    truncate: Ia,
    units: ee,
    whole: He
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  la = (e = 0, a = 0, t = 0) => new Date(Date.now() + (e * 60 * 60 + a * 60 + t) * 1e3);
  Bd = Object.freeze(Object.defineProperty({
    __proto__: null,
    expiration: la
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  Ge = {
    byAddress: (e, a) => Object.values(e).find((t) => _i(t.address, a)),
    native: (e) => Ge.byAddress(e, "native"),
    bySymbol: (e, a) => {
      const t = Object.values(e).filter((s) => s.symbol === a);
      return t && t.length > 0 ? t : void 0;
    },
    byKey: (e, a) => {
      const t = Object.entries(e).find(([s]) => a === s);
      return t ? t[1] : void 0;
    }
  };
  _i = (e, a) => e.toLowerCase() === a.toLowerCase();
  $t = [
    [
      "Testnet",
      {
        relayerStateId: "0xae0d664920a60c42c89f1e7d00aee5006f0af4b4464be37c497853728f211d51",
        relayerPackageId: "0xb4b86c12d4ee0a813d976fb452b7afb325a2b381d00ccb2e54c5342f5ef2e684",
        ptbResolverStateId: "0x4e15d83d4f2de26351c85720a97a899e76b914225cb974ff500b53d40d7b6758",
        relayerEmitterCap: "0x3f58fae5151559978a9583104a5805593b94fa0e6b384085771a81ec62dad7fa"
      }
    ],
    [
      "Mainnet",
      {
        relayerStateId: "0x7f777663622c2570ca6168d68caa56403efc6b97cb9cb314939b7f7701136e0d",
        relayerPackageId: "0x9b68b36399a3cd87680878d72253b3e8fdf82edb8ed74f7ec440b8bddd51f85d",
        ptbResolverStateId: "0x7a013e4ff895bf77d172b183004c844b86e34a5d9c5ee257cc846d26e49f139d",
        relayerEmitterCap: "0xf5dffae04382c0c14379d551696f0751310c7fc35f454cc29263a4c862c82c82"
      }
    ]
  ];
  Yt = w($t, [
    0,
    1
  ]);
  ji = function(e, a, t) {
    if (a === "Sui") {
      const s = Yt(e);
      return {
        dstTransferRecipient: s.relayerEmitterCap,
        dstExecutionAddress: s.ptbResolverStateId
      };
    }
    return {
      dstTransferRecipient: t,
      dstExecutionAddress: t
    };
  };
  var je;
  (function(e) {
    e[e.Finalized = 1] = "Finalized", e[e.Immediate = 200] = "Immediate", e[e.Safe = 201] = "Safe";
  })(je || (je = {}));
  const qi = [
    [
      "Ethereum",
      32
    ]
  ], Qt = w(qi), zi = [
    [
      "Solana",
      32
    ],
    [
      "Ethereum",
      72
    ],
    [
      "Bsc",
      15
    ],
    [
      "Optimism",
      512
    ],
    [
      "Base",
      512
    ],
    [
      "Arbitrum",
      4096
    ],
    [
      "Worldchain",
      512
    ],
    [
      "Polygon",
      2
    ],
    [
      "Celo",
      1
    ],
    [
      "Moonbeam",
      1
    ],
    [
      "Avalanche",
      0
    ],
    [
      "Sui",
      0
    ],
    [
      "Algorand",
      0
    ],
    [
      "Aptos",
      0
    ],
    [
      "Klaytn",
      0
    ],
    [
      "Sei",
      0
    ],
    [
      "Near",
      0
    ],
    [
      "Osmosis",
      0
    ],
    [
      "Injective",
      0
    ],
    [
      "Berachain",
      1
    ],
    [
      "Seievm",
      1
    ],
    [
      "Unichain",
      1024
    ],
    [
      "Ink",
      512
    ],
    [
      "HyperEVM",
      1
    ],
    [
      "Monad",
      1
    ],
    [
      "Mezo",
      1
    ],
    [
      "Sonic",
      1
    ],
    [
      "Converge",
      4096
    ],
    [
      "Fogo",
      32
    ],
    [
      "Plume",
      4096
    ],
    [
      "Plasma",
      2
    ],
    [
      "XRPLEVM",
      1
    ],
    [
      "Xrpl",
      0
    ],
    [
      "CreditCoin",
      3
    ],
    [
      "Cosmoshub",
      0
    ],
    [
      "Evmos",
      0
    ],
    [
      "Kujira",
      0
    ],
    [
      "Neutron",
      0
    ],
    [
      "Celestia",
      0
    ],
    [
      "Stargaze",
      0
    ],
    [
      "Dymension",
      0
    ],
    [
      "Provenance",
      0
    ],
    [
      "Noble",
      0
    ],
    [
      "Stacks",
      240
    ],
    [
      "Moca",
      0
    ],
    [
      "MegaETH",
      4096
    ],
    [
      "ZeroGravity",
      1
    ],
    [
      "Tempo",
      1
    ],
    [
      "Nexus",
      1
    ],
    [
      "Arc",
      1
    ],
    [
      "Hydration",
      5
    ],
    [
      "Sepolia",
      72
    ],
    [
      "ArbitrumSepolia",
      4096
    ],
    [
      "BaseSepolia",
      512
    ],
    [
      "OptimismSepolia",
      512
    ],
    [
      "PolygonSepolia",
      2
    ],
    [
      "MonadTestnet",
      1
    ]
  ], Ca = w(zi), Vi = [
    [
      "Algorand",
      3300
    ],
    [
      "Aptos",
      4e3
    ],
    [
      "Arbitrum",
      260
    ],
    [
      "ArbitrumSepolia",
      260
    ],
    [
      "Avalanche",
      2e3
    ],
    [
      "Base",
      2e3
    ],
    [
      "BaseSepolia",
      2e3
    ],
    [
      "Bsc",
      750
    ],
    [
      "Celo",
      5e3
    ],
    [
      "Cosmoshub",
      5e3
    ],
    [
      "Ethereum",
      15e3
    ],
    [
      "Evmos",
      2e3
    ],
    [
      "Holesky",
      15e3
    ],
    [
      "HyperEVM",
      1e3
    ],
    [
      "HyperCore",
      1e3
    ],
    [
      "Injective",
      2500
    ],
    [
      "Klaytn",
      1e3
    ],
    [
      "Kujira",
      3e3
    ],
    [
      "Moonbeam",
      12e3
    ],
    [
      "Monad",
      1e3
    ],
    [
      "MonadTestnet",
      1e3
    ],
    [
      "Near",
      1500
    ],
    [
      "Optimism",
      2e3
    ],
    [
      "OptimismSepolia",
      2e3
    ],
    [
      "Osmosis",
      6e3
    ],
    [
      "Polygon",
      2e3
    ],
    [
      "PolygonSepolia",
      2e3
    ],
    [
      "Sei",
      400
    ],
    [
      "Sepolia",
      15e3
    ],
    [
      "Solana",
      400
    ],
    [
      "Sui",
      3e3
    ],
    [
      "Unichain",
      1e3
    ],
    [
      "Worldchain",
      2e3
    ],
    [
      "Ink",
      1e3
    ],
    [
      "Wormchain",
      5e3
    ],
    [
      "Btc",
      6e5
    ],
    [
      "Pythnet",
      400
    ],
    [
      "Dymension",
      5e3
    ],
    [
      "Celestia",
      5e3
    ],
    [
      "Neutron",
      5e3
    ],
    [
      "Stargaze",
      5e3
    ],
    [
      "Seda",
      7500
    ],
    [
      "Berachain",
      2e3
    ],
    [
      "Mezo",
      4e3
    ],
    [
      "Sonic",
      330
    ],
    [
      "Converge",
      100
    ],
    [
      "Fogo",
      400
    ],
    [
      "Plume",
      250
    ],
    [
      "Plasma",
      1e3
    ],
    [
      "XRPLEVM",
      5e3
    ],
    [
      "Xrpl",
      4e3
    ],
    [
      "Seievm",
      400
    ],
    [
      "CreditCoin",
      15e3
    ],
    [
      "Stacks",
      15e3
    ],
    [
      "Moca",
      1e3
    ],
    [
      "MegaETH",
      1e3
    ],
    [
      "ZeroGravity",
      1e3
    ],
    [
      "Tempo",
      1e3
    ],
    [
      "Nexus",
      1e3
    ],
    [
      "Arc",
      1e3
    ],
    [
      "Hydration",
      3e4
    ]
  ], Za = w(Vi);
  function Ki(e, a, t = 0n) {
    if (a === je.Immediate) return t;
    if (e === "Bsc") return t + BigInt(a);
    if (e === "Solana" && a === 0) return t;
    const s = Ca.get(e);
    if (s === void 0) throw new Error("Cannot find chain finality for " + e);
    if (s === 0) return t;
    if (a !== je.Safe) return t + BigInt(s);
    const i = Qt.get(e);
    if (i === void 0) throw new Error("Cannot find safe threshold for " + e);
    switch (e) {
      case "Ethereum":
        const r = t % BigInt(i), n = r === 0n ? 0n : BigInt(i) - r;
        return t + n;
      default:
        throw new Error("Only Ethereum safe is supported for now");
    }
  }
  et = function(e) {
    const a = Ca.get(e);
    if (a === void 0) throw new Error("Cannot find finality for " + e);
    const t = Za.get(e);
    if (t === void 0) throw new Error("Cannot find block time for " + e);
    return a * t;
  };
  let Gi, Xi, Zt, $i, es, ha;
  yd = Object.freeze(Object.defineProperty({
    __proto__: null,
    get ConsistencyLevels() {
      return je;
    },
    blockTime: Za,
    consistencyLevelToBlock: Ki,
    estimateFinalityTime: et,
    finalityThreshold: Ca,
    safeThreshold: Qt
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  Gi = [
    [
      "Evm",
      18
    ],
    [
      "Solana",
      9
    ],
    [
      "Sui",
      9
    ],
    [
      "Aptos",
      8
    ],
    [
      "Cosmwasm",
      6
    ],
    [
      "Algorand",
      6
    ],
    [
      "Btc",
      8
    ],
    [
      "Near",
      12
    ],
    [
      "Stacks",
      6
    ],
    [
      "Xrpl",
      6
    ]
  ];
  Jt = w(Gi);
  Xi = [
    [
      "Tempo",
      6
    ]
  ];
  Zt = w(Xi);
  xd = Object.freeze(Object.defineProperty({
    __proto__: null,
    nativeDecimalOverrides: Zt,
    nativeDecimals: Jt
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  $i = [
    [
      "Mainnet",
      [
        [
          "Ethereum",
          {
            name: "Etherscan",
            baseUrl: "https://etherscan.io/",
            endpoints: {
              tx: "tx/",
              account: "address/"
            }
          }
        ],
        [
          "Solana",
          {
            name: "Solana Explorer",
            baseUrl: "https://explorer.solana.com/",
            endpoints: {
              tx: "tx/",
              account: "address/"
            }
          }
        ],
        [
          "Polygon",
          {
            name: "PolygonScan",
            baseUrl: "https://polygonscan.com/",
            endpoints: {
              tx: "tx/",
              account: "address/"
            }
          }
        ],
        [
          "Bsc",
          {
            name: "BscScan",
            baseUrl: "https://bscscan.com/",
            endpoints: {
              tx: "tx/",
              account: "address/"
            }
          }
        ],
        [
          "Avalanche",
          {
            name: "Snowtrace",
            baseUrl: "https://snowtrace.io/",
            endpoints: {
              tx: "tx/",
              account: "address/"
            }
          }
        ],
        [
          "Celo",
          {
            name: "Celo Explorer",
            baseUrl: "https://explorer.celo.org/mainnet/",
            endpoints: {
              tx: "tx/",
              account: "address/"
            }
          }
        ],
        [
          "Moonbeam",
          {
            name: "Moonscan",
            baseUrl: "https://moonscan.io/",
            endpoints: {
              tx: "tx/",
              account: "address/"
            }
          }
        ],
        [
          "Sui",
          {
            name: "Sui Explorer",
            baseUrl: "https://explorer.sui.io/",
            endpoints: {
              tx: "txblock/",
              account: "address/"
            }
          }
        ],
        [
          "Aptos",
          {
            name: "Aptos Explorer",
            baseUrl: "https://explorer.aptoslabs.com/",
            endpoints: {
              tx: "txn/",
              account: "account/"
            }
          }
        ],
        [
          "Sei",
          {
            name: "Sei Explorer",
            baseUrl: "https://sei.explorers.guru/",
            endpoints: {
              tx: "transaction/",
              account: "address/"
            }
          }
        ],
        [
          "Ink",
          {
            name: "Ink Explorer",
            baseUrl: "https://explorer.inkonchain.com/",
            endpoints: {
              tx: "tx/",
              account: "address/"
            }
          }
        ],
        [
          "Mezo",
          {
            name: "Mezo Explorer",
            baseUrl: "https://explorer.mezo.org/",
            endpoints: {
              tx: "tx/",
              account: "address/"
            }
          }
        ],
        [
          "HyperEVM",
          {
            name: "HyperEVMScan",
            baseUrl: "https://hyperevmscan.io/",
            endpoints: {
              tx: "tx/",
              account: "address/"
            }
          }
        ],
        [
          "HyperCore",
          {
            name: "HyperLiquid Explorer",
            baseUrl: "https://app.hyperliquid.xyz/explorer/",
            endpoints: {
              tx: "tx/",
              account: "address/"
            }
          }
        ],
        [
          "XRPLEVM",
          {
            name: "XRPL Explorer",
            baseUrl: "https://explorer.xrplevm.org/",
            endpoints: {
              tx: "tx/",
              account: "address/"
            }
          }
        ],
        [
          "Plume",
          {
            name: "Plume Explorer",
            baseUrl: "https://explorer.plume.org/",
            endpoints: {
              tx: "tx/",
              account: "address/"
            }
          }
        ],
        [
          "CreditCoin",
          {
            name: "CreditCoin Explorer",
            baseUrl: "https://creditcoin.blockscout.com/",
            endpoints: {
              tx: "tx/",
              account: "address/"
            }
          }
        ],
        [
          "Plasma",
          {
            name: "Plasma Explorer",
            baseUrl: "https://plasmascan.to/",
            endpoints: {
              tx: "tx/",
              account: "address/"
            }
          }
        ],
        [
          "Stacks",
          {
            name: "Stacks Explorer",
            baseUrl: "https://explorer.hiro.so/",
            endpoints: {
              tx: "txid/",
              account: "address/"
            }
          }
        ],
        [
          "Monad",
          {
            name: "Monad Explorer",
            baseUrl: "https://monadexplorer.com/",
            endpoints: {
              tx: "tx/",
              account: "address/"
            }
          }
        ],
        [
          "Moca",
          {
            name: "Moca Explorer",
            baseUrl: "https://scan.mocachain.org/",
            endpoints: {
              tx: "tx/",
              account: "address/"
            }
          }
        ],
        [
          "MegaETH",
          {
            name: "MegaETH Explorer",
            baseUrl: "https://megaeth.blockscout.com/",
            endpoints: {
              tx: "tx/",
              account: "address/"
            }
          }
        ],
        [
          "ZeroGravity",
          {
            name: "0G Blockchain Explorer",
            baseUrl: "https://chainscan.0g.ai/",
            endpoints: {
              tx: "tx/",
              account: "address/"
            }
          }
        ],
        [
          "Xrpl",
          {
            name: "XRPL Explorer",
            baseUrl: "https://livenet.xrpl.org/",
            endpoints: {
              tx: "transactions/",
              account: "accounts/"
            }
          }
        ],
        [
          "Tempo",
          {
            name: "Tempo Explorer",
            baseUrl: "https://explore.tempo.xyz/",
            endpoints: {
              tx: "tx/",
              account: "address/"
            }
          }
        ],
        [
          "Nexus",
          {
            name: "Nexus Explorer",
            baseUrl: "https://explorer.nexus.xyz/",
            endpoints: {
              tx: "tx/",
              account: "address/"
            }
          }
        ],
        [
          "Arc",
          {
            name: "Arc Explorer",
            baseUrl: "https://arcscan.app/",
            endpoints: {
              tx: "tx/",
              account: "address/"
            }
          }
        ],
        [
          "Hydration",
          {
            name: "Hydration Explorer",
            baseUrl: "https://hydration.subscan.io/",
            endpoints: {
              tx: "tx/",
              account: "account/"
            }
          }
        ]
      ]
    ],
    [
      "Testnet",
      [
        [
          "Ethereum",
          {
            name: "Etherscan",
            baseUrl: "https://goerli.etherscan.io/",
            endpoints: {
              tx: "tx/",
              account: "address/"
            }
          }
        ],
        [
          "Polygon",
          {
            name: "PolygonScan",
            baseUrl: "https://mumbai.polygonscan.com/",
            endpoints: {
              tx: "tx/",
              account: "address/"
            }
          }
        ],
        [
          "Bsc",
          {
            name: "BscScan",
            baseUrl: "https://testnet.bscscan.com/",
            endpoints: {
              tx: "tx/",
              account: "address/"
            }
          }
        ],
        [
          "Avalanche",
          {
            name: "Snowtrace",
            baseUrl: "https://testnet.snowtrace.io/",
            endpoints: {
              tx: "tx/",
              account: "address/"
            }
          }
        ],
        [
          "Celo",
          {
            name: "Celo Explorer",
            baseUrl: "https://explorer.celo.org/alfajores/",
            endpoints: {
              tx: "tx/",
              account: "address/"
            }
          }
        ],
        [
          "Moonbeam",
          {
            name: "Moonscan",
            baseUrl: "https://moonbase.moonscan.io/",
            endpoints: {
              tx: "tx/",
              account: "address/"
            }
          }
        ],
        [
          "Solana",
          {
            name: "Solana Explorer",
            baseUrl: "https://explorer.solana.com/",
            endpoints: {
              tx: "tx/",
              account: "address/"
            },
            networkQuery: {
              default: "Devnet",
              Testnet: "?cluster=testnet",
              Devnet: "?cluster=devnet"
            }
          }
        ],
        [
          "Sui",
          {
            name: "Sui Explorer",
            baseUrl: "https://explorer.sui.io/",
            endpoints: {
              tx: "txblock/",
              account: "address/"
            },
            networkQuery: {
              default: "Testnet",
              Testnet: "?network=testnet",
              Devnet: "?network=devnet"
            }
          }
        ],
        [
          "Aptos",
          {
            name: "Aptos Explorer",
            baseUrl: "https://explorer.aptoslabs.com/",
            endpoints: {
              tx: "txn/",
              account: "account/"
            },
            networkQuery: {
              default: "Testnet",
              Testnet: "?network=testnet",
              Devnet: "?network=devnet"
            }
          }
        ],
        [
          "Sei",
          {
            name: "Sei Explorer",
            baseUrl: "https://sei.explorers.guru/",
            endpoints: {
              tx: "transaction/",
              account: "address/"
            }
          }
        ],
        [
          "Ink",
          {
            name: "Ink Sepolia Explorer",
            baseUrl: "https://explorer-sepolia.inkonchain.com/",
            endpoints: {
              tx: "tx/",
              account: "address/"
            }
          }
        ],
        [
          "Mezo",
          {
            name: "Mezo Explorer",
            baseUrl: "https://explorer.test.mezo.org/",
            endpoints: {
              tx: "tx/",
              account: "address/"
            }
          }
        ],
        [
          "XRPLEVM",
          {
            name: "XRPL Explorer",
            baseUrl: "https://explorer.testnet.xrplevm.org/",
            endpoints: {
              tx: "tx/",
              account: "address/"
            }
          }
        ],
        [
          "Plume",
          {
            name: "Plume Explorer",
            baseUrl: "https://testnet-explorer.plume.org/",
            endpoints: {
              tx: "tx/",
              account: "address/"
            }
          }
        ],
        [
          "Plasma",
          {
            name: "Plasma Testnet Explorer",
            baseUrl: "https://testnet.plasmascan.to/",
            endpoints: {
              tx: "tx/",
              account: "address/"
            }
          }
        ],
        [
          "CreditCoin",
          {
            name: "CreditCoin Explorer",
            baseUrl: "https://creditcoin-testnet.blockscout.com/",
            endpoints: {
              tx: "tx/",
              account: "address/"
            }
          }
        ],
        [
          "Moca",
          {
            name: "Moca Explorer",
            baseUrl: "https://testnet-scan.mocachain.org/",
            endpoints: {
              tx: "tx/",
              account: "address/"
            }
          }
        ],
        [
          "MegaETH",
          {
            name: "MegaETH Explorer",
            baseUrl: "https://megaeth-testnet-v2.blockscout.com/",
            endpoints: {
              tx: "tx/",
              account: "address/"
            }
          }
        ],
        [
          "MonadTestnet",
          {
            name: "Monad Testnet Explorer",
            baseUrl: "https://testnet.monadvision.com/",
            endpoints: {
              tx: "tx/",
              account: "address/"
            }
          }
        ],
        [
          "ZeroGravity",
          {
            name: "0G Blockchain Explorer",
            baseUrl: "https://chainscan-galileo.0g.ai/",
            endpoints: {
              tx: "tx/",
              account: "address/"
            }
          }
        ],
        [
          "Tempo",
          {
            name: "Tempo Explorer",
            baseUrl: "https://explore.moderato.tempo.xyz/",
            endpoints: {
              tx: "tx/",
              account: "address/"
            }
          }
        ],
        [
          "Nexus",
          {
            name: "Blockscout",
            baseUrl: "https://testnet.explorer.nexus.xyz/",
            endpoints: {
              tx: "tx/",
              account: "address/"
            }
          }
        ],
        [
          "Xrpl",
          {
            name: "XRPL Testnet Explorer",
            baseUrl: "https://testnet.xrpl.org/",
            endpoints: {
              tx: "transactions/",
              account: "accounts/"
            }
          }
        ],
        [
          "Arc",
          {
            name: "Arc Testnet Explorer",
            baseUrl: "https://testnet.arcscan.app/",
            endpoints: {
              tx: "tx/",
              account: "address/"
            }
          }
        ]
      ]
    ]
  ];
  es = w($i);
  ha = (e, a) => e === "Devnet" ? void 0 : es.get(e, a);
  function Yi(e, a, t) {
    const s = ha(t, e);
    if (!s) throw new Error("invalid chain, explorer config not found");
    const { baseUrl: i, endpoints: r, networkQuery: n } = s, o = n ? n[t] : "";
    return `${i}${r.tx}${a}${o}`;
  }
  function Qi(e, a, t) {
    const s = ha(t, e);
    if (!s) throw new Error("invalid chain, explorer config not found");
    const { baseUrl: i, endpoints: r, networkQuery: n } = s, o = n ? n[t] : "";
    return `${i}${r.account}${a}${o}`;
  }
  let Ji, Zi, as, ts, er;
  Fd = Object.freeze(Object.defineProperty({
    __proto__: null,
    explorerConfigs: ha,
    explorerConfs: es,
    linkToAccount: Qi,
    linkToTx: Yi
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  Ji = [
    [
      "Mainnet",
      [
        [
          "Ethereum",
          "https://ethereum-rpc.publicnode.com"
        ],
        [
          "Solana",
          "https://api.mainnet-beta.solana.com"
        ],
        [
          "Polygon",
          "https://polygon-bor-rpc.publicnode.com"
        ],
        [
          "Bsc",
          "https://bsc-rpc.publicnode.com"
        ],
        [
          "Avalanche",
          "https://avalanche-c-chain-rpc.publicnode.com"
        ],
        [
          "Celo",
          "https://forno.celo.org"
        ],
        [
          "Moonbeam",
          "https://moonbeam-rpc.publicnode.com"
        ],
        [
          "Sui",
          "https://fullnode.mainnet.sui.io:443"
        ],
        [
          "Aptos",
          "https://fullnode.mainnet.aptoslabs.com/v1"
        ],
        [
          "Arbitrum",
          "https://arb1.arbitrum.io/rpc"
        ],
        [
          "Optimism",
          "https://mainnet.optimism.io"
        ],
        [
          "Base",
          "https://mainnet.base.org"
        ],
        [
          "Osmosis",
          "https://osmosis-rpc.polkachu.com"
        ],
        [
          "Cosmoshub",
          "https://cosmos-rpc.publicnode.com:443"
        ],
        [
          "Evmos",
          "https://evmos-rpc.polkachu.com"
        ],
        [
          "Injective",
          "https://sentry.tm.injective.network"
        ],
        [
          "Wormchain",
          "https://wormchain-rpc.quickapi.com"
        ],
        [
          "Sei",
          "https://sei-rpc.polkachu.com/"
        ],
        [
          "Algorand",
          "https://mainnet-api.algonode.cloud"
        ],
        [
          "Dymension",
          "https://dymension-rpc.polkachu.com/"
        ],
        [
          "Stargaze",
          "https://stargaze-rpc.polkachu.com/"
        ],
        [
          "Celestia",
          "https://celestia-rpc.polkachu.com/"
        ],
        [
          "Neutron",
          "https://neutron-rpc.polkachu.com/"
        ],
        [
          "Provenance",
          "https://rpc.provenance.io/"
        ],
        [
          "Noble",
          "https://noble-rpc.polkachu.com/"
        ],
        [
          "Linea",
          "https://rpc.linea.build"
        ],
        [
          "Klaytn",
          "https://public-en.node.kaia.io"
        ],
        [
          "Berachain",
          "https://rpc.berachain.com"
        ],
        [
          "Seievm",
          "https://evm-rpc.sei-apis.com"
        ],
        [
          "Unichain",
          "https://mainnet.unichain.org"
        ],
        [
          "Worldchain",
          "https://worldchain-mainnet.g.alchemy.com/public"
        ],
        [
          "Ink",
          "https://rpc-qnd.inkonchain.com"
        ],
        [
          "Sonic",
          "https://rpc.soniclabs.com"
        ],
        [
          "HyperEVM",
          "https://rpc.hyperliquid.xyz/evm"
        ],
        [
          "Mezo",
          "https://jsonrpc-mezo.boar.network/"
        ],
        [
          "Plume",
          "https://rpc.plume.org/"
        ],
        [
          "XRPLEVM",
          "https://rpc.xrplevm.org/"
        ],
        [
          "Xrpl",
          "wss://xrplcluster.com/"
        ],
        [
          "Plasma",
          "https://rpc.plasma.to/"
        ],
        [
          "CreditCoin",
          "https://mainnet3.creditcoin.network/"
        ],
        [
          "Stacks",
          "https://api.mainnet.hiro.so"
        ],
        [
          "Monad",
          "https://rpc3.monad.xyz"
        ],
        [
          "Fogo",
          "https://mainnet.fogo.io"
        ],
        [
          "Moca",
          "https://rpc.mocachain.dev/"
        ],
        [
          "MegaETH",
          "https://mainnet.megaeth.com/rpc"
        ],
        [
          "ZeroGravity",
          "https://evmrpc.0g.ai"
        ],
        [
          "Tempo",
          "https://rpc.tempo.xyz"
        ],
        [
          "Nexus",
          "https://mainnet.rpc.nexus.xyz"
        ],
        [
          "Arc",
          "https://rpc.arc.network"
        ],
        [
          "Hydration",
          "https://rpc.coke.hydration.cloud"
        ]
      ]
    ],
    [
      "Testnet",
      [
        [
          "Bsc",
          "https://data-seed-prebsc-1-s3.binance.org:8545"
        ],
        [
          "Avalanche",
          "https://api.avax-test.network/ext/bc/C/rpc"
        ],
        [
          "Celo",
          "https://alfajores-forno.celo-testnet.org"
        ],
        [
          "Solana",
          "https://api.devnet.solana.com"
        ],
        [
          "Moonbeam",
          "https://rpc.api.moonbase.moonbeam.network"
        ],
        [
          "Sui",
          "https://fullnode.testnet.sui.io:443"
        ],
        [
          "Aptos",
          "https://fullnode.testnet.aptoslabs.com/v1"
        ],
        [
          "Sei",
          "https://sei-testnet-rpc.polkachu.com"
        ],
        [
          "Injective",
          "https://testnet.sentry.tm.injective.network"
        ],
        [
          "Osmosis",
          "https://rpc.testnet.osmosis.zone"
        ],
        [
          "Cosmoshub",
          "https://rpc.sentry-02.theta-testnet.polypore.xyz"
        ],
        [
          "Evmos",
          "https://evmos-testnet-rpc.polkachu.com"
        ],
        [
          "Wormchain",
          "https://gateway.testnet.xlabs.xyz/"
        ],
        [
          "Sepolia",
          "https://ethereum-sepolia.publicnode.com"
        ],
        [
          "Algorand",
          "https://testnet-api.algonode.cloud"
        ],
        [
          "ArbitrumSepolia",
          "https://sepolia-rollup.arbitrum.io/rpc"
        ],
        [
          "OptimismSepolia",
          "https://sepolia.optimism.io"
        ],
        [
          "BaseSepolia",
          "https://sepolia.base.org"
        ],
        [
          "PolygonSepolia",
          "https://rpc-amoy.polygon.technology/"
        ],
        [
          "Berachain",
          "https://bepolia.rpc.berachain.com/"
        ],
        [
          "Seievm",
          "https://evm-rpc-testnet.sei-apis.com/"
        ],
        [
          "Linea",
          "https://rpc.sepolia.linea.build"
        ],
        [
          "Klaytn",
          "https://public-en-kairos.node.kaia.io"
        ],
        [
          "Unichain",
          "https://sepolia.unichain.org"
        ],
        [
          "Worldchain",
          "https://worldchain-sepolia.g.alchemy.com/public"
        ],
        [
          "Ink",
          "https://rpc-qnd-sepolia.inkonchain.com"
        ],
        [
          "HyperEVM",
          "https://api.hyperliquid-testnet.xyz/evm"
        ],
        [
          "MonadTestnet",
          "https://testnet-rpc.monad.xyz"
        ],
        [
          "Noble",
          "https://noble-testnet-rpc.polkachu.com/"
        ],
        [
          "Mezo",
          "https://rpc.test.mezo.org"
        ],
        [
          "Sonic",
          "https://rpc.blaze.soniclabs.com"
        ],
        [
          "Converge",
          "https://rpc-converge-testnet-1.t.conduit.xyz"
        ],
        [
          "Fogo",
          "https://testnet.fogo.io"
        ],
        [
          "Plume",
          "https://testnet-rpc.plume.org"
        ],
        [
          "XRPLEVM",
          "https://rpc.testnet.xrplevm.org/"
        ],
        [
          "Xrpl",
          "wss://s.altnet.rippletest.net:51233"
        ],
        [
          "Plasma",
          "https://testnet-rpc.plasma.to"
        ],
        [
          "CreditCoin",
          "https://rpc.cc3-testnet.creditcoin.network"
        ],
        [
          "Stacks",
          "https://api.testnet.hiro.so"
        ],
        [
          "Moca",
          "https://testnet-rpc.mocachain.org/"
        ],
        [
          "MegaETH",
          "https://timothy.megaeth.com/rpc"
        ],
        [
          "ZeroGravity",
          "https://rpc.ankr.com/0g_galileo_testnet_evm"
        ],
        [
          "Tempo",
          "https://rpc.moderato.tempo.xyz"
        ],
        [
          "Nexus",
          "https://testnet.rpc.nexus.xyz"
        ],
        [
          "Arc",
          "https://rpc.testnet.arc.network"
        ]
      ]
    ],
    [
      "Devnet",
      [
        [
          "Ethereum",
          "http://eth-devnet:8545"
        ],
        [
          "Bsc",
          "http://eth-devnet2:8545"
        ],
        [
          "Solana",
          "http://solana-devnet:8899"
        ],
        [
          "Stacks",
          "http://localhost:3999"
        ]
      ]
    ]
  ];
  Zi = w(Ji);
  as = (e, a) => Zi.get(e, a) ?? "";
  Sd = Object.freeze(Object.defineProperty({
    __proto__: null,
    rpcAddress: as
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  ts = [
    [
      "Mainnet",
      [
        [
          "Aptos",
          1n
        ],
        [
          "Algorand",
          "mainnet-v1.0"
        ],
        [
          "Near",
          "mainnet"
        ],
        [
          "Cosmoshub",
          "cosmoshub-4"
        ],
        [
          "Evmos",
          "evmos_9001-2"
        ],
        [
          "Injective",
          "injective-1"
        ],
        [
          "Osmosis",
          "osmosis-1"
        ],
        [
          "Sei",
          "pacific-1"
        ],
        [
          "Wormchain",
          "wormchain"
        ],
        [
          "Kujira",
          "kaiyo-1"
        ],
        [
          "Solana",
          "5eykt4UsFv8P8NJdTREpY1vzqKqZKvdpKuc147dw2N9d"
        ],
        [
          "Sui",
          "35834a8a"
        ],
        [
          "Arbitrum",
          42161n
        ],
        [
          "Avalanche",
          43114n
        ],
        [
          "Base",
          8453n
        ],
        [
          "Bsc",
          56n
        ],
        [
          "Celo",
          42220n
        ],
        [
          "Ethereum",
          1n
        ],
        [
          "Klaytn",
          8217n
        ],
        [
          "Moonbeam",
          1284n
        ],
        [
          "Optimism",
          10n
        ],
        [
          "Polygon",
          137n
        ],
        [
          "Neutron",
          "neutron-1"
        ],
        [
          "Stargaze",
          "stargaze-1"
        ],
        [
          "Celestia",
          "celestia"
        ],
        [
          "Dymension",
          "dymension_1100-1"
        ],
        [
          "Provenance",
          "pio-mainnet-1"
        ],
        [
          "Noble",
          "noble-1"
        ],
        [
          "Linea",
          59144n
        ],
        [
          "Berachain",
          80094n
        ],
        [
          "Seievm",
          1329n
        ],
        [
          "Unichain",
          130n
        ],
        [
          "Worldchain",
          480n
        ],
        [
          "Ink",
          57073n
        ],
        [
          "Sonic",
          146n
        ],
        [
          "HyperEVM",
          999n
        ],
        [
          "HyperCore",
          65000n
        ],
        [
          "Mezo",
          31612n
        ],
        [
          "Plume",
          98866n
        ],
        [
          "Xrpl",
          0n
        ],
        [
          "XRPLEVM",
          1440000n
        ],
        [
          "Stacks",
          1n
        ],
        [
          "CreditCoin",
          102030n
        ],
        [
          "Plasma",
          9745n
        ],
        [
          "Monad",
          143n
        ],
        [
          "Fogo",
          "CDLtwKnaCoK157uaHQDj4fHu72AyD2519Cphmpiq6hvT"
        ],
        [
          "Moca",
          2288n
        ],
        [
          "MegaETH",
          4326n
        ],
        [
          "ZeroGravity",
          16661n
        ],
        [
          "Tempo",
          4217n
        ],
        [
          "Nexus",
          3946n
        ],
        [
          "Arc",
          5042n
        ],
        [
          "Hydration",
          222222n
        ],
        [
          "Btc",
          "bitcoin-mainnet"
        ]
      ]
    ],
    [
      "Testnet",
      [
        [
          "Aptos",
          2n
        ],
        [
          "Algorand",
          "testnet-v1.0"
        ],
        [
          "Near",
          "testnet"
        ],
        [
          "Cosmoshub",
          "theta-testnet-001"
        ],
        [
          "Evmos",
          "evmos_9000-4"
        ],
        [
          "Injective",
          "injective-888"
        ],
        [
          "Osmosis",
          "osmo-test-5"
        ],
        [
          "Sei",
          "atlantic-2"
        ],
        [
          "Wormchain",
          "wormchain-testnet-0"
        ],
        [
          "Kujira",
          "harpoon-4"
        ],
        [
          "Solana",
          "EtWTRABZaYq6iMfeYKouRu166VU2xqa1wcaWoxPkrZBG"
        ],
        [
          "Sui",
          "4c78adac"
        ],
        [
          "Arbitrum",
          421613n
        ],
        [
          "Avalanche",
          43113n
        ],
        [
          "Base",
          84531n
        ],
        [
          "Bsc",
          97n
        ],
        [
          "Celo",
          44787n
        ],
        [
          "Ethereum",
          5n
        ],
        [
          "Klaytn",
          1001n
        ],
        [
          "Moonbeam",
          1287n
        ],
        [
          "Optimism",
          420n
        ],
        [
          "Polygon",
          80001n
        ],
        [
          "Sepolia",
          11155111n
        ],
        [
          "ArbitrumSepolia",
          421614n
        ],
        [
          "BaseSepolia",
          84532n
        ],
        [
          "OptimismSepolia",
          11155420n
        ],
        [
          "PolygonSepolia",
          80002n
        ],
        [
          "Holesky",
          17000n
        ],
        [
          "Neutron",
          "pion-1"
        ],
        [
          "Celestia",
          "mocha-4"
        ],
        [
          "Seda",
          "seda-1-testnet"
        ],
        [
          "Noble",
          "grand-1"
        ],
        [
          "Berachain",
          80069n
        ],
        [
          "Seievm",
          1328n
        ],
        [
          "Unichain",
          1301n
        ],
        [
          "Worldchain",
          4801n
        ],
        [
          "Ink",
          763373n
        ],
        [
          "HyperEVM",
          998n
        ],
        [
          "HyperCore",
          65000n
        ],
        [
          "Linea",
          59141n
        ],
        [
          "Mezo",
          31611n
        ],
        [
          "Sonic",
          57054n
        ],
        [
          "Converge",
          52085145n
        ],
        [
          "Fogo",
          "9GGSFo95raqzZxWqKM5tGYvJp5iv4Dm565S4r8h5PEu9"
        ],
        [
          "Plume",
          98867n
        ],
        [
          "Xrpl",
          1n
        ],
        [
          "XRPLEVM",
          1449000n
        ],
        [
          "Stacks",
          2147483648n
        ],
        [
          "CreditCoin",
          102031n
        ],
        [
          "Plasma",
          9746n
        ],
        [
          "Moca",
          222888n
        ],
        [
          "MegaETH",
          6343n
        ],
        [
          "MonadTestnet",
          10143n
        ],
        [
          "ZeroGravity",
          16602n
        ],
        [
          "Tempo",
          42431n
        ],
        [
          "Nexus",
          3945n
        ],
        [
          "Arc",
          5042002n
        ]
      ]
    ],
    [
      "Devnet",
      [
        [
          "Aptos",
          0n
        ],
        [
          "Algorand",
          "sandnet-v1.0"
        ],
        [
          "Bsc",
          1397n
        ],
        [
          "Ethereum",
          1337n
        ],
        [
          "Injective",
          "injective_devnet_fake"
        ],
        [
          "Solana",
          "8wF6jKV3cKwyaVkWcoV9KpDqmkjvEYno9hKZrKx8TbZn"
        ],
        [
          "Stacks",
          2147483648n
        ]
      ]
    ]
  ];
  ss = w(ts);
  er = w(ts, [
    2,
    [
      0,
      1
    ]
  ]);
  ar = function(e, a) {
    const s = er(a).filter(([i, r]) => we(r) === e);
    if (s.length !== 1) throw new Error(`Platform ${e} has multiple chains with native chain id ${a}`);
    return s[0];
  };
  let tr, Ha, sr, at, tt, fa, ir, rr, be, Te, La;
  Td = Object.freeze(Object.defineProperty({
    __proto__: null,
    networkChainToNativeChainId: ss,
    platformNativeChainIdToNetworkChain: ar
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  tr = [
    [
      "Mainnet",
      "https://iris-api.circle.com/v1/attestations"
    ],
    [
      "Testnet",
      "https://iris-api-sandbox.circle.com/v1/attestations"
    ]
  ];
  Ha = w(tr);
  sr = [
    [
      "Mainnet",
      [
        [
          "Ethereum",
          "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
        ],
        [
          "Avalanche",
          "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E"
        ],
        [
          "Optimism",
          "0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85"
        ],
        [
          "Arbitrum",
          "0xaf88d065e77c8cC2239327C5EDb3A432268e5831"
        ],
        [
          "Solana",
          "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"
        ],
        [
          "Base",
          "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913"
        ],
        [
          "Polygon",
          "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359"
        ],
        [
          "Sui",
          "0xdba34672e30cb065b1f93e3ab55318768fd6fef66c15942c9f7cb846e2f900e7::usdc::USDC"
        ],
        [
          "Aptos",
          "0xbae207659db88bea0cbead6da0ed00aac12edcdda169e591cd41c94180b46f3b"
        ],
        [
          "Unichain",
          "0x078D782b760474a361dDA0AF3839290b0EF57AD6"
        ],
        [
          "Sonic",
          "0x29219dd400f2Bf60E5a23d13Be72B486D4038894"
        ],
        [
          "Linea",
          "0x176211869cA2b568f2A7D4EE941E073a821EE1ff"
        ],
        [
          "Worldchain",
          "0x79A02482A880bCE3F13e09Da970dC34db4CD24d1"
        ],
        [
          "Seievm",
          "0xe15fC38F6D8c56aF07bbCBe3BAf5708A2Bf42392"
        ],
        [
          "HyperEVM",
          "0xb88339CB7199b77E23DB6E890353E22632Ba630f"
        ],
        [
          "Plume",
          "0x222365EF19F7947e5484218551B56bb3965Aa7aF"
        ],
        [
          "Ink",
          "0x2D270e6886d130D724215A266106e6832161EAEd"
        ],
        [
          "HyperCore",
          "0xaf88d065e77c8cC2239327C5EDb3A432268e5831"
        ],
        [
          "Monad",
          "0x754704Bc059F8C67012fEd69BC8A327a5aafb603"
        ],
        [
          "Arc",
          "0x3600000000000000000000000000000000000000"
        ]
      ]
    ],
    [
      "Testnet",
      [
        [
          "Sepolia",
          "0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238"
        ],
        [
          "Avalanche",
          "0x5425890298aed601595a70AB815c96711a31Bc65"
        ],
        [
          "OptimismSepolia",
          "0x5fd84259d66Cd46123540766Be93DFE6D43130D7"
        ],
        [
          "ArbitrumSepolia",
          "0x75faf114eafb1BDbe2F0316DF893fd58CE46AA4d"
        ],
        [
          "Solana",
          "4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU"
        ],
        [
          "BaseSepolia",
          "0x036CbD53842c5426634e7929541eC2318f3dCF7e"
        ],
        [
          "Polygon",
          "0x9999f7Fea5938fD3b1E26A12c3f2fb024e194f97"
        ],
        [
          "Sui",
          "0xa1ec7fc00a6f40db9693ad1415d0c193ad3906494428cf252621037bd7117e29::usdc::USDC"
        ],
        [
          "Aptos",
          "0x69091fbab5f7d635ee7ac5098cf0c1efbe31d68fec0f2cd565e8d168daf52832"
        ],
        [
          "Unichain",
          "0x31d0220469e10c4E71834a79b1f276d740d3768F"
        ],
        [
          "Sonic",
          "0xA4879Fed32Ecbef99399e5cbC247E533421C4eC6"
        ],
        [
          "Linea",
          "0xFEce4462D57bD51A6A552365A011b95f0E16d9B7"
        ],
        [
          "Seievm",
          "0x4fCF1784B31630811181f670Aea7A7bEF803eaED"
        ],
        [
          "HyperEVM",
          "0x2B3370eE501B4a559b57D449569354196457D8Ab"
        ],
        [
          "Arc",
          "0x3600000000000000000000000000000000000000"
        ]
      ]
    ]
  ];
  Le = w(sr);
  at = [
    [
      "Mainnet",
      [
        [
          "Ethereum",
          0
        ],
        [
          "Avalanche",
          1
        ],
        [
          "Optimism",
          2
        ],
        [
          "Arbitrum",
          3
        ],
        [
          "Solana",
          5
        ],
        [
          "Base",
          6
        ],
        [
          "Polygon",
          7
        ],
        [
          "Sui",
          8
        ],
        [
          "Aptos",
          9
        ],
        [
          "Unichain",
          10
        ]
      ]
    ],
    [
      "Testnet",
      [
        [
          "Sepolia",
          0
        ],
        [
          "Avalanche",
          1
        ],
        [
          "OptimismSepolia",
          2
        ],
        [
          "ArbitrumSepolia",
          3
        ],
        [
          "Solana",
          5
        ],
        [
          "BaseSepolia",
          6
        ],
        [
          "Polygon",
          7
        ],
        [
          "Sui",
          8
        ],
        [
          "Aptos",
          9
        ],
        [
          "Unichain",
          10
        ]
      ]
    ]
  ];
  tt = w(at, [
    [
      0,
      1
    ],
    2
  ]);
  fa = w(at, [
    [
      0,
      2
    ],
    1
  ]);
  [ir, rr] = Kt(at);
  be = (e, a) => tt.has(e, a);
  Te = (e, a) => fa.has(e, a);
  La = (e, a) => Le.has(e, a);
  function is(e, a) {
    if (!Te(e, a)) throw Error(`Unknown Circle chain id: ${a}`);
  }
  function nr(e, a) {
    if (!be(e, a)) throw Error(`Unknown Circle chain: ${a}`);
  }
  let or, dr, sa, cr, rs, ns, os, ds, lr, fr, cs, mr, br, ur, ls, Er, fs, ms, bs, us, Es, As, Cs, hs, _a, ja, qa, ps, Ds, Ar, hr, Dr, yr, xr, st, Fr, Sr, Tr, wr, Wr, Ur, Va, vr, Or, gs;
  or = (e, a) => (is(e, a), a);
  dr = (e, a) => {
    switch (typeof a) {
      case "string":
        if (be(e, a)) return tt.get(e, a);
        break;
      case "number":
        if (Te(e, a)) return a;
        break;
      case "bigint":
        const t = Number(a);
        if (Te(e, t)) return t;
        break;
    }
    throw Error(`Cannot convert to ChainId: ${a}`);
  };
  sa = (e, a) => {
    switch (typeof a) {
      case "string":
        if (be(e, a)) return a;
        break;
      case "number":
        if (Te(e, a)) return fa(e, a);
        break;
      case "bigint":
        const t = Number(a);
        if (Te(e, t)) return fa(e, t);
        break;
    }
    throw Error(`Cannot convert to Chain: ${a}`);
  };
  wd = Object.freeze(Object.defineProperty({
    __proto__: null,
    asCircleChainId: or,
    assertCircleChain: nr,
    assertCircleChainId: is,
    circleAPI: Ha,
    circleChainId: tt,
    circleChainIdToChain: fa,
    circleChainMap: rr,
    circleNetworks: ir,
    isCircleChain: be,
    isCircleChainId: Te,
    isCircleSupported: La,
    toCircleChain: sa,
    toCircleChainId: dr,
    usdcContract: Le
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  cr = [
    [
      "Mainnet",
      [
        [
          "Solana",
          "worm2ZoG2kUd4vFXhvjh93UUH596ayRfgQ2MgjNMTth"
        ],
        [
          "Ethereum",
          "0x98f3c9e6E3fAce36bAAd05FE09d375Ef1464288B"
        ],
        [
          "Bsc",
          "0x98f3c9e6E3fAce36bAAd05FE09d375Ef1464288B"
        ],
        [
          "Polygon",
          "0x7A4B5a56256163F07b2C80A7cA55aBE66c4ec4d7"
        ],
        [
          "Avalanche",
          "0x54a8e5f9c4CbA08F9943965859F6c34eAF03E26c"
        ],
        [
          "Algorand",
          "842125965"
        ],
        [
          "Klaytn",
          "0x0C21603c4f3a6387e241c0091A7EA39E43E90bb7"
        ],
        [
          "Celo",
          "0xa321448d90d4e5b0A732867c18eA198e75CAC48E"
        ],
        [
          "Near",
          "contract.wormhole_crypto.near"
        ],
        [
          "Injective",
          "inj17p9rzwnnfxcjp32un9ug7yhhzgtkhvl9l2q74d"
        ],
        [
          "Aptos",
          "0x5bc11445584a763c1fa7ed39081f1b920954da14e04b32440cba863d03e19625"
        ],
        [
          "Sui",
          "0xaeab97f96cf9877fee2883315d459552b2b921edc16d7ceac6eab944dd88919c"
        ],
        [
          "Moonbeam",
          "0xC8e2b0cD52Cf01b0Ce87d389Daa3d414d4cE29f3"
        ],
        [
          "Arbitrum",
          "0xa5f208e072434bC67592E4C49C1B991BA79BCA46"
        ],
        [
          "Optimism",
          "0xEe91C335eab126dF5fDB3797EA9d6aD93aeC9722"
        ],
        [
          "Pythnet",
          "H3fxXJ86ADW2PNuDDmZJg6mzTtPxkYCpNuQUTgmJ7AjU"
        ],
        [
          "Base",
          "0xbebdb6C8ddC678FfA9f8748f85C815C556Dd8ac6"
        ],
        [
          "Sei",
          "sei1gjrrme22cyha4ht2xapn3f08zzw6z3d4uxx6fyy9zd5dyr3yxgzqqncdqn"
        ],
        [
          "Wormchain",
          "wormhole1ufs3tlq4umljk0qfe8k5ya0x6hpavn897u2cnf9k0en9jr7qarqqaqfk2j"
        ],
        [
          "Berachain",
          "0xCa1D5a146B03f6303baF59e5AD5615ae0b9d146D"
        ],
        [
          "Seievm",
          "0xCa1D5a146B03f6303baF59e5AD5615ae0b9d146D"
        ],
        [
          "Unichain",
          "0xCa1D5a146B03f6303baF59e5AD5615ae0b9d146D"
        ],
        [
          "Worldchain",
          "0xcbcEe4e081464A15d8Ad5f58BB493954421eB506"
        ],
        [
          "Ink",
          "0xCa1D5a146B03f6303baF59e5AD5615ae0b9d146D"
        ],
        [
          "HyperEVM",
          "0x7C0faFc4384551f063e05aee704ab943b8B53aB3"
        ],
        [
          "Mezo",
          "0xaBf89de706B583424328B54dD05a8fC986750Da8"
        ],
        [
          "Plume",
          "0xaBf89de706B583424328B54dD05a8fC986750Da8"
        ],
        [
          "Linea",
          "0x0C56aebD76E6D9e4a1Ec5e94F4162B4CBbf77b32"
        ],
        [
          "XRPLEVM",
          "0xaBf89de706B583424328B54dD05a8fC986750Da8"
        ],
        [
          "CreditCoin",
          "0xaBf89de706B583424328B54dD05a8fC986750Da8"
        ],
        [
          "Monad",
          "0x194B123c5E96B9b2E49763619985790Dc241CAC0"
        ],
        [
          "Fogo",
          "worm2mrQkG1B1KTz37erMfWN8anHkSK24nzca7UD8BB"
        ],
        [
          "Moca",
          "0xaBf89de706B583424328B54dD05a8fC986750Da8"
        ],
        [
          "MegaETH",
          "0xaBf89de706B583424328B54dD05a8fC986750Da8"
        ],
        [
          "ZeroGravity",
          "0xC699482c17d43b7D5349F2D3f58d61fEFA972B8c"
        ],
        [
          "Nexus",
          "0xC8aD24fC6063c41cB5C12a8e3851AafC3b3CF027"
        ],
        [
          "Tempo",
          "0xbebdb6C8ddC678FfA9f8748f85C815C556Dd8ac6"
        ],
        [
          "Arc",
          "0xC8aD24fC6063c41cB5C12a8e3851AafC3b3CF027"
        ],
        [
          "Hydration",
          "0x3792a6d63c31941B2805181771795D9176fA82A1"
        ]
      ]
    ],
    [
      "Testnet",
      [
        [
          "Solana",
          "3u8hJUVTA4jH1wYAyUur7FFZVQ8H635K3tSHHF4ssjQ5"
        ],
        [
          "Ethereum",
          "0x706abc4E45D419950511e474C7B9Ed348A4a716c"
        ],
        [
          "Bsc",
          "0x68605AD7b15c732a30b1BbC62BE8F2A509D74b4D"
        ],
        [
          "Polygon",
          "0x0CBE91CF822c73C2315FB05100C2F714765d5c20"
        ],
        [
          "Avalanche",
          "0x7bbcE28e64B3F8b84d876Ab298393c38ad7aac4C"
        ],
        [
          "Algorand",
          "86525623"
        ],
        [
          "Klaytn",
          "0x1830CC6eE66c84D2F177B94D544967c774E624cA"
        ],
        [
          "Celo",
          "0x88505117CA88e7dd2eC6EA1E13f0948db2D50D56"
        ],
        [
          "Near",
          "wormhole.wormhole.testnet"
        ],
        [
          "Injective",
          "inj1xx3aupmgv3ce537c0yce8zzd3sz567syuyedpg"
        ],
        [
          "Osmosis",
          "osmo1hggkxr0hpw83f8vuft7ruvmmamsxmwk2hzz6nytdkzyup9krt0dq27sgyx"
        ],
        [
          "Aptos",
          "0x5bc11445584a763c1fa7ed39081f1b920954da14e04b32440cba863d03e19625"
        ],
        [
          "Sui",
          "0x31358d198147da50db32eda2562951d53973a0c0ad5ed738e9b17d88b213d790"
        ],
        [
          "Moonbeam",
          "0xa5B7D85a8f27dd7907dc8FdC21FA5657D5E2F901"
        ],
        [
          "Arbitrum",
          "0xC7A204bDBFe983FCD8d8E61D02b475D4073fF97e"
        ],
        [
          "Optimism",
          "0x6b9C8671cdDC8dEab9c719bB87cBd3e782bA6a35"
        ],
        [
          "Pythnet",
          "EUrRARh92Cdc54xrDn6qzaqjA77NRrCcfbr8kPwoTL4z"
        ],
        [
          "Base",
          "0x23908A62110e21C04F3A4e011d24F901F911744A"
        ],
        [
          "Sei",
          "sei1nna9mzp274djrgzhzkac2gvm3j27l402s4xzr08chq57pjsupqnqaj0d5s"
        ],
        [
          "Sepolia",
          "0x4a8bc80Ed5a4067f1CCf107057b8270E0cC11A78"
        ],
        [
          "Wormchain",
          "wormhole16jzpxp0e8550c9aht6q9svcux30vtyyyyxv5w2l2djjra46580wsazcjwp"
        ],
        [
          "ArbitrumSepolia",
          "0x6b9C8671cdDC8dEab9c719bB87cBd3e782bA6a35"
        ],
        [
          "BaseSepolia",
          "0x79A1027a6A159502049F10906D333EC57E95F083"
        ],
        [
          "OptimismSepolia",
          "0x31377888146f3253211EFEf5c676D41ECe7D58Fe"
        ],
        [
          "Holesky",
          "0xa10f2eF61dE1f19f586ab8B6F2EbA89bACE63F7a"
        ],
        [
          "PolygonSepolia",
          "0x6b9C8671cdDC8dEab9c719bB87cBd3e782bA6a35"
        ],
        [
          "Berachain",
          "0xBB73cB66C26740F31d1FabDC6b7A46a038A300dd"
        ],
        [
          "Seievm",
          "0xBB73cB66C26740F31d1FabDC6b7A46a038A300dd"
        ],
        [
          "Unichain",
          "0xBB73cB66C26740F31d1FabDC6b7A46a038A300dd"
        ],
        [
          "Worldchain",
          "0xe5E02cD12B6FcA153b0d7fF4bF55730AE7B3C93A"
        ],
        [
          "Ink",
          "0xBB73cB66C26740F31d1FabDC6b7A46a038A300dd"
        ],
        [
          "HyperEVM",
          "0xBB73cB66C26740F31d1FabDC6b7A46a038A300dd"
        ],
        [
          "Linea",
          "0x79A1027a6A159502049F10906D333EC57E95F083"
        ],
        [
          "Mezo",
          "0x268557122Ffd64c85750d630b716471118F323c8"
        ],
        [
          "Converge",
          "0x556B259cFaCd9896B2773310080c7c3bcE90Ff01"
        ],
        [
          "Fogo",
          "BhnQyKoQQgpuRTRo6D8Emz93PvXCYfVgHhnrR4T3qhw4"
        ],
        [
          "Plume",
          "0x81705b969cDcc6FbFde91a0C6777bE0EF3A75855"
        ],
        [
          "XRPLEVM",
          "0xaBf89de706B583424328B54dD05a8fC986750Da8"
        ],
        [
          "Plasma",
          "0xaBf89de706B583424328B54dD05a8fC986750Da8"
        ],
        [
          "CreditCoin",
          "0xaBf89de706B583424328B54dD05a8fC986750Da8"
        ],
        [
          "Moca",
          "0xaBf89de706B583424328B54dD05a8fC986750Da8"
        ],
        [
          "MegaETH",
          "0x81705b969cDcc6FbFde91a0C6777bE0EF3A75855"
        ],
        [
          "MonadTestnet",
          "0xaBf89de706B583424328B54dD05a8fC986750Da8"
        ],
        [
          "ZeroGravity",
          "0x059560c0D626bdB982454b5EBd65DC8E7cF7973c"
        ],
        [
          "Stacks",
          "ST37PDDGEA78QSPSBZM1ZHPCZV9GKAPDFHA32RWY8"
        ],
        [
          "Nexus",
          "0x194B123c5E96B9b2E49763619985790Dc241CAC0"
        ],
        [
          "Tempo",
          "0xa29E8c21924834E6249bCE1FD733f24eC492018c"
        ],
        [
          "Arc",
          "0xBB73cB66C26740F31d1FabDC6b7A46a038A300dd"
        ]
      ]
    ],
    [
      "Devnet",
      [
        [
          "Solana",
          "Bridge1p5gheXUvJ6jGWGeCsgPKgnE3YgdGKRVCMY9o"
        ],
        [
          "Ethereum",
          "0xC89Ce4735882C9F0f0FE26686c53074E09B0D550"
        ],
        [
          "Bsc",
          "0xC89Ce4735882C9F0f0FE26686c53074E09B0D550"
        ],
        [
          "Algorand",
          "1004"
        ],
        [
          "Near",
          "wormhole.test.near"
        ],
        [
          "Aptos",
          "0xde0036a9600559e295d5f6802ef6f3f802f510366e0c23912b0655d972166017"
        ],
        [
          "Sui",
          "0x5a5160ca3c2037f4b4051344096ef7a48ebf4400b3f385e57ea90e1628a8bde0"
        ],
        [
          "Wormchain",
          "wormhole17p9rzwnnfxcjp32un9ug7yhhzgtkhvl9jfksztgw5uh69wac2pgshdnj3k"
        ],
        [
          "Stacks",
          "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM"
        ]
      ]
    ]
  ];
  rs = [
    [
      "Mainnet",
      [
        [
          "Solana",
          "wormDTUJ6AWPNvk59vGQbDvGJmqbDTdgWgAqcLBCgUb"
        ],
        [
          "Ethereum",
          "0x3ee18B2214AFF97000D974cf647E7C347E8fa585"
        ],
        [
          "Bsc",
          "0xB6F6D86a8f9879A9c87f643768d9efc38c1Da6E7"
        ],
        [
          "Polygon",
          "0x5a58505a96D1dbf8dF91cB21B54419FC36e93fdE"
        ],
        [
          "Avalanche",
          "0x0e082F06FF657D94310cB8cE8B0D9a04541d8052"
        ],
        [
          "Algorand",
          "842126029"
        ],
        [
          "Klaytn",
          "0x5b08ac39EAED75c0439FC750d9FE7E1F9dD0193F"
        ],
        [
          "Celo",
          "0x796Dff6D74F3E27060B71255Fe517BFb23C93eed"
        ],
        [
          "Near",
          "contract.portalbridge.near"
        ],
        [
          "Injective",
          "inj1ghd753shjuwexxywmgs4xz7x2q732vcnxxynfn"
        ],
        [
          "Aptos",
          "0x576410486a2da45eee6c949c995670112ddf2fbeedab20350d506328eefc9d4f"
        ],
        [
          "Sui",
          "0xc57508ee0d4595e5a8728974a4a93a787d38f339757230d441e895422c07aba9"
        ],
        [
          "Moonbeam",
          "0xb1731c586ca89a23809861c6103f0b96b3f57d92"
        ],
        [
          "Arbitrum",
          "0x0b2402144Bb366A632D14B83F244D2e0e21bD39c"
        ],
        [
          "Optimism",
          "0x1D68124e65faFC907325e3EDbF8c4d84499DAa8b"
        ],
        [
          "Base",
          "0x8d2de8d2f73F1F4cAB472AC9A881C9b123C79627"
        ],
        [
          "Sei",
          "sei1smzlm9t79kur392nu9egl8p8je9j92q4gzguewj56a05kyxxra0qy0nuf3"
        ],
        [
          "Wormchain",
          "wormhole1466nf3zuxpya8q9emxukd7vftaf6h4psr0a07srl5zw74zh84yjq4lyjmh"
        ],
        [
          "Berachain",
          "0x3Ff72741fd67D6AD0668d93B41a09248F4700560"
        ],
        [
          "Seievm",
          "0x3Ff72741fd67D6AD0668d93B41a09248F4700560"
        ],
        [
          "Unichain",
          "0x3Ff72741fd67D6AD0668d93B41a09248F4700560"
        ],
        [
          "Worldchain",
          "0xc309275443519adca74c9136b02A38eF96E3a1f6"
        ],
        [
          "Ink",
          "0x3Ff72741fd67D6AD0668d93B41a09248F4700560"
        ],
        [
          "XRPLEVM",
          "0x47F5195163270345fb4d7B9319Eda8C64C75E278"
        ],
        [
          "Monad",
          "0x0B2719cdA2F10595369e6673ceA3Ee2EDFa13BA7"
        ],
        [
          "Fogo",
          "wormQuCVWSSmPdjVmEzAWxAXViVyTSWnLyhff5hVYGS"
        ],
        [
          "MegaETH",
          "0xF97B81E513f53c7a6B57Bd0b103a6c295b3096C5"
        ],
        [
          "ZeroGravity",
          "0xee12EBDdF6E34A206e1798D185317C846BC21638"
        ]
      ]
    ],
    [
      "Testnet",
      [
        [
          "Solana",
          "DZnkkTmCiFWfYTfT41X3Rd1kDgozqzxWaHqsw6W4x2oe"
        ],
        [
          "Ethereum",
          "0xF890982f9310df57d00f659cf4fd87e65adEd8d7"
        ],
        [
          "Bsc",
          "0x9dcF9D205C9De35334D646BeE44b2D2859712A09"
        ],
        [
          "Polygon",
          "0x377D55a7928c046E18eEbb61977e714d2a76472a"
        ],
        [
          "Avalanche",
          "0x61E44E506Ca5659E6c0bba9b678586fA2d729756"
        ],
        [
          "Algorand",
          "86525641"
        ],
        [
          "Klaytn",
          "0xC7A13BE098720840dEa132D860fDfa030884b09A"
        ],
        [
          "Celo",
          "0x05ca6037eC51F8b712eD2E6Fa72219FEaE74E153"
        ],
        [
          "Near",
          "token.wormhole.testnet"
        ],
        [
          "Injective",
          "inj1q0e70vhrv063eah90mu97sazhywmeegp7myvnh"
        ],
        [
          "Aptos",
          "0x576410486a2da45eee6c949c995670112ddf2fbeedab20350d506328eefc9d4f"
        ],
        [
          "Sui",
          "0x6fb10cdb7aa299e9a4308752dadecb049ff55a892de92992a1edbd7912b3d6da"
        ],
        [
          "Moonbeam",
          "0xbc976D4b9D57E57c3cA52e1Fd136C45FF7955A96"
        ],
        [
          "Arbitrum",
          "0x23908A62110e21C04F3A4e011d24F901F911744A"
        ],
        [
          "ArbitrumSepolia",
          "0xC7A204bDBFe983FCD8d8E61D02b475D4073fF97e"
        ],
        [
          "Optimism",
          "0xC7A204bDBFe983FCD8d8E61D02b475D4073fF97e"
        ],
        [
          "OptimismSepolia",
          "0x99737Ec4B815d816c49A385943baf0380e75c0Ac"
        ],
        [
          "Base",
          "0xA31aa3FDb7aF7Db93d18DDA4e19F811342EDF780"
        ],
        [
          "BaseSepolia",
          "0x86F55A04690fd7815A3D802bD587e83eA888B239"
        ],
        [
          "Sei",
          "sei1jv5xw094mclanxt5emammy875qelf3v62u4tl4lp5nhte3w3s9ts9w9az2"
        ],
        [
          "Sepolia",
          "0xDB5492265f6038831E89f495670FF909aDe94bd9"
        ],
        [
          "Wormchain",
          "wormhole1aaf9r6s7nxhysuegqrxv0wpm27ypyv4886medd3mrkrw6t4yfcnst3qpex"
        ],
        [
          "Holesky",
          "0x76d093BbaE4529a342080546cAFEec4AcbA59EC6"
        ],
        [
          "PolygonSepolia",
          "0xC7A204bDBFe983FCD8d8E61D02b475D4073fF97e"
        ],
        [
          "Berachain",
          "0xa10f2eF61dE1f19f586ab8B6F2EbA89bACE63F7a"
        ],
        [
          "Seievm",
          "0x23908A62110e21C04F3A4e011d24F901F911744A"
        ],
        [
          "Unichain",
          "0xa10f2eF61dE1f19f586ab8B6F2EbA89bACE63F7a"
        ],
        [
          "Worldchain",
          "0x430855B4D43b8AEB9D2B9869B74d58dda79C0dB2"
        ],
        [
          "Ink",
          "0x376428e7f26D5867e69201b275553C45B09EE090"
        ],
        [
          "HyperEVM",
          "0x4a8bc80Ed5a4067f1CCf107057b8270E0cC11A78"
        ],
        [
          "Linea",
          "0xC7A204bDBFe983FCD8d8E61D02b475D4073fF97e"
        ],
        [
          "MonadTestnet",
          "0xF97B81E513f53c7a6B57Bd0b103a6c295b3096C5"
        ],
        [
          "Mezo",
          "0xA31aa3FDb7aF7Db93d18DDA4e19F811342EDF780"
        ],
        [
          "Fogo",
          "78HdStBqCMioGii9D8mF3zQaWDqDZBQWTUwjjpdmbJKX"
        ],
        [
          "XRPLEVM",
          "0x7d8eBc211C4221eA18E511E4f0fD50c5A539f275"
        ],
        [
          "Moca",
          "0xF97B81E513f53c7a6B57Bd0b103a6c295b3096C5"
        ],
        [
          "MegaETH",
          "0x3D5c2c2BEA15Af5D45F084834c535628C48c42A4"
        ],
        [
          "ZeroGravity",
          "0x7d8eBc211C4221eA18E511E4f0fD50c5A539f275"
        ]
      ]
    ],
    [
      "Devnet",
      [
        [
          "Solana",
          "B6RHG3mfcckmrYN1UhmJzyS1XX3fZKbkeUcpJe9Sy3FE"
        ],
        [
          "Ethereum",
          "0x0290FB167208Af455bB137780163b7B7a9a10C16"
        ],
        [
          "Bsc",
          "0x0290FB167208Af455bB137780163b7B7a9a10C16"
        ],
        [
          "Algorand",
          "1006"
        ],
        [
          "Near",
          "token.test.near"
        ],
        [
          "Aptos",
          "0x84a5f374d29fc77e370014dce4fd6a55b58ad608de8074b0be5571701724da31"
        ],
        [
          "Sui",
          "0xa6a3da85bbe05da5bfd953708d56f1a3a023e7fb58e5a824a3d4de3791e8f690"
        ],
        [
          "Wormchain",
          "wormhole1ghd753shjuwexxywmgs4xz7x2q732vcnkm6h2pyv9s6ah3hylvrqtm7t3h"
        ]
      ]
    ]
  ];
  ns = [
    [
      "Mainnet",
      [
        [
          "Ethereum",
          "0xcafd2f0a35a4459fa40c0517e17e6fa2939441ca"
        ],
        [
          "Bsc",
          "0xcafd2f0a35a4459fa40c0517e17e6fa2939441ca"
        ],
        [
          "Polygon",
          "0xcafd2f0a35a4459fa40c0517e17e6fa2939441ca"
        ],
        [
          "Avalanche",
          "0xcafd2f0a35a4459fa40c0517e17e6fa2939441ca"
        ],
        [
          "Celo",
          "0xcafd2f0a35a4459fa40c0517e17e6fa2939441ca"
        ],
        [
          "Sui",
          "0x57f4e0ba41a7045e29d435bc66cc4175f381eb700e6ec16d4fdfe92e5a4dff9f"
        ],
        [
          "Solana",
          "3vxKRPwUTiEkeUVyoZ9MXFe1V71sRLbLqu1gRYaWmehQ"
        ],
        [
          "Base",
          "0xaE8dc4a7438801Ec4edC0B035EcCCcF3807F4CC1"
        ],
        [
          "Moonbeam",
          "0xcafd2f0a35a4459fa40c0517e17e6fa2939441ca"
        ],
        [
          "Arbitrum",
          "0xaE8dc4a7438801Ec4edC0B035EcCCcF3807F4CC1"
        ],
        [
          "Optimism",
          "0xaE8dc4a7438801Ec4edC0B035EcCCcF3807F4CC1"
        ]
      ]
    ],
    [
      "Testnet",
      [
        [
          "Ethereum",
          "0x9563a59c15842a6f322b10f69d1dd88b41f2e97b"
        ],
        [
          "Bsc",
          "0x9563a59c15842a6f322b10f69d1dd88b41f2e97b"
        ],
        [
          "Polygon",
          "0x9563a59c15842a6f322b10f69d1dd88b41f2e97b"
        ],
        [
          "Avalanche",
          "0x9563a59c15842a6f322b10f69d1dd88b41f2e97b"
        ],
        [
          "Celo",
          "0x9563a59c15842a6f322b10f69d1dd88b41f2e97b"
        ],
        [
          "Sui",
          "0xb30040e5120f8cb853b691cb6d45981ae884b1d68521a9dc7c3ae881c0031923"
        ],
        [
          "Base",
          "0xae8dc4a7438801ec4edc0b035eccccf3807f4cc1"
        ],
        [
          "Moonbeam",
          "0x9563a59c15842a6f322b10f69d1dd88b41f2e97b"
        ],
        [
          "Solana",
          "3bPRWXqtSfUaCw3S4wdgvypQtsSzcmvDeaqSqPDkncrg"
        ],
        [
          "Sepolia",
          ""
        ],
        [
          "ArbitrumSepolia",
          "0xaE8dc4a7438801Ec4edC0B035EcCCcF3807F4CC1"
        ],
        [
          "OptimismSepolia",
          "0xaE8dc4a7438801Ec4edC0B035EcCCcF3807F4CC1"
        ],
        [
          "BaseSepolia",
          ""
        ]
      ]
    ]
  ];
  os = [
    [
      "Mainnet",
      [
        [
          "Arbitrum",
          {
            relayer: "0x04C98824a64d75CD1E9Bc418088b4c9A99048153",
            relayerWithReferrer: "0xee05C2e6075E2C86D1F5db4716Ff2A6c18889B20"
          }
        ],
        [
          "Avalanche",
          {
            relayer: "0x8849F05675E034b54506caB84450c8C82694a786",
            relayerWithReferrer: "0xee05C2e6075E2C86D1F5db4716Ff2A6c18889B20"
          }
        ],
        [
          "Base",
          {
            relayer: "0xD8B736EF27Fc997b1d00F22FE37A58145D3BDA07",
            relayerWithReferrer: "0xee05C2e6075E2C86D1F5db4716Ff2A6c18889B20"
          }
        ],
        [
          "Berachain",
          {
            relayer: "0xFAeFa20CB3759AEd2310E25015F05d62D8567A3F",
            relayerWithReferrer: "0xee05C2e6075E2C86D1F5db4716Ff2A6c18889B20"
          }
        ],
        [
          "Bsc",
          {
            relayer: "0x2513515340fF71DD5AF02fC1BdB9615704d91524",
            relayerWithReferrer: "0xee05C2e6075E2C86D1F5db4716Ff2A6c18889B20"
          }
        ],
        [
          "Celo",
          {
            relayer: "0xe478DEe705BEae591395B08934FA19F54df316BE",
            relayerWithReferrer: "0xee05C2e6075E2C86D1F5db4716Ff2A6c18889B20"
          }
        ],
        [
          "Ethereum",
          {
            relayer: "0xa8969F3f8D97b3Ed89D4e2EC19B6B0CfD504b212",
            relayerWithReferrer: "0xee05C2e6075E2C86D1F5db4716Ff2A6c18889B20"
          }
        ],
        [
          "Ink",
          {
            relayer: "0x4bFB47F4c8A904d2C24e73601D175FE3a38aAb5B",
            relayerWithReferrer: "0xee05C2e6075E2C86D1F5db4716Ff2A6c18889B20"
          }
        ],
        [
          "Moonbeam",
          {
            relayer: "0xF6b9616C63Fa48D07D82c93CE02B5d9111c51a3d",
            relayerWithReferrer: "0xee05C2e6075E2C86D1F5db4716Ff2A6c18889B20"
          }
        ],
        [
          "Optimism",
          {
            relayer: "0x37aC29617AE74c750a1e4d55990296BAF9b8De73",
            relayerWithReferrer: "0xee05C2e6075E2C86D1F5db4716Ff2A6c18889B20"
          }
        ],
        [
          "Polygon",
          {
            relayer: "0x1d98CA4221516B9ac4869F5CeA7E6bb9C41609D6",
            relayerWithReferrer: "0xee05C2e6075E2C86D1F5db4716Ff2A6c18889B20"
          }
        ],
        [
          "Seievm",
          {
            relayer: "0x7C129bc8F6188d12c0d1BBDE247F134148B97618",
            relayerWithReferrer: "0xee05C2e6075E2C86D1F5db4716Ff2A6c18889B20"
          }
        ],
        [
          "Solana",
          {
            relayer: "tbr7Qje6qBzPwfM52csL5KFi8ps5c5vDyiVVBLYVdRf"
          }
        ],
        [
          "Unichain",
          {
            relayer: "0x9Bca817F67f01557aeD615130825A28F4C5f3b87",
            relayerWithReferrer: "0xee05C2e6075E2C86D1F5db4716Ff2A6c18889B20"
          }
        ],
        [
          "Worldchain",
          {
            relayer: "0xc0565Bd29b34603C0383598E16843d95Ae9c4f65",
            relayerWithReferrer: "0xee05C2e6075E2C86D1F5db4716Ff2A6c18889B20"
          }
        ],
        [
          "XRPLEVM",
          {
            relayer: "0x37bCc9d175124F77Bfce68589d2a8090eF846B85",
            relayerWithReferrer: "0xee05C2e6075E2C86D1F5db4716Ff2A6c18889B20"
          }
        ],
        [
          "Monad",
          {
            relayer: "0xf7E051f93948415952a2239582823028DacA948e",
            relayerWithReferrer: "0xee05C2e6075E2C86D1F5db4716Ff2A6c18889B20"
          }
        ],
        [
          "Fogo",
          {
            relayer: "tbr7Qje6qBzPwfM52csL5KFi8ps5c5vDyiVVBLYVdRf"
          }
        ],
        [
          "MegaETH",
          {
            relayer: "0x4eEC1c908aD6e778664Efb03386C429fE5710D77",
            relayerWithReferrer: "0xee05C2e6075E2C86D1F5db4716Ff2A6c18889B20"
          }
        ],
        [
          "Sui",
          {
            relayer: "0x9b68b36399a3cd87680878d72253b3e8fdf82edb8ed74f7ec440b8bddd51f85d"
          }
        ],
        [
          "ZeroGravity",
          {
            relayer: "0x584e4FeCDfcCD40B1F6b091C3D91ad6201ccADFd",
            relayerWithReferrer: "0xee05C2e6075E2C86D1F5db4716Ff2A6c18889B20"
          }
        ]
      ]
    ],
    [
      "Testnet",
      [
        [
          "Avalanche",
          {
            relayer: "0x10Ce9a35883C44640e8B12fea4Cc1e77F77D8c52",
            relayerWithReferrer: "0xA4918ee5910679aed9Aa8fb2e1241dAae8AE0Aa0"
          }
        ],
        [
          "BaseSepolia",
          {
            relayer: "0x523d25D33B975ad72283f73B1103354352dBCBb8",
            relayerWithReferrer: "0xA4918ee5910679aed9Aa8fb2e1241dAae8AE0Aa0"
          }
        ],
        [
          "Bsc",
          {
            relayer: "0x26e7e3869b781f360A108728EE8391Cee6051E17",
            relayerWithReferrer: "0xA4918ee5910679aed9Aa8fb2e1241dAae8AE0Aa0"
          }
        ],
        [
          "Fogo",
          {
            relayer: "tbr7Qje6qBzPwfM52csL5KFi8ps5c5vDyiVVBLYVdRf"
          }
        ],
        [
          "Linea",
          {
            relayer: "0x1C5CC8522b5eE1e528159989A163167bC9264D07",
            relayerWithReferrer: "0xA4918ee5910679aed9Aa8fb2e1241dAae8AE0Aa0"
          }
        ],
        [
          "Moca",
          {
            relayer: "0x36b91D24BAba19Af3aD1b5D5E2493A571044f14F",
            relayerWithReferrer: "0xA4918ee5910679aed9Aa8fb2e1241dAae8AE0Aa0"
          }
        ],
        [
          "MonadTestnet",
          {
            relayer: "0x03D9739c91a26d30f4B35f7e55B9FF995ef13dDb",
            relayerWithReferrer: "0xA4918ee5910679aed9Aa8fb2e1241dAae8AE0Aa0"
          }
        ],
        [
          "OptimismSepolia",
          {
            relayer: "0xD9AA4f8Ac271B3149b8C3d1D0f999Ef7cb9af9EC",
            relayerWithReferrer: "0xA4918ee5910679aed9Aa8fb2e1241dAae8AE0Aa0"
          }
        ],
        [
          "PolygonSepolia",
          {
            relayer: "0xC5c0bF6A8419b3d47150B2a6146b7Ed598C9d736",
            relayerWithReferrer: "0xA4918ee5910679aed9Aa8fb2e1241dAae8AE0Aa0"
          }
        ],
        [
          "Sepolia",
          {
            relayer: "0xb0b2119067cF04fa959f654250BD49fE1BD6F53c",
            relayerWithReferrer: "0xA4918ee5910679aed9Aa8fb2e1241dAae8AE0Aa0"
          }
        ],
        [
          "Seievm",
          {
            relayer: "0x595712bA7e4882af338d60ae37058082a5d0331A",
            relayerWithReferrer: "0xA4918ee5910679aed9Aa8fb2e1241dAae8AE0Aa0"
          }
        ],
        [
          "Solana",
          {
            relayer: "tbr7Qje6qBzPwfM52csL5KFi8ps5c5vDyiVVBLYVdRf"
          }
        ],
        [
          "Unichain",
          {
            relayer: "0x74D37B2bcD2f8CaB6409c5a5f81C8cF5b4156963",
            relayerWithReferrer: "0xA4918ee5910679aed9Aa8fb2e1241dAae8AE0Aa0"
          }
        ],
        [
          "XRPLEVM",
          {
            relayer: "0xb00224c60fe6ab134c8544dc29350286545f8dcc",
            relayerWithReferrer: "0x06Bc50Cf4768929465E07199567B36Da6C74808c"
          }
        ],
        [
          "Mezo",
          {
            relayer: "0x2002a44b1106DF83671Fb419A2079a75e2a34808",
            relayerWithReferrer: "0xA4918ee5910679aed9Aa8fb2e1241dAae8AE0Aa0"
          }
        ],
        [
          "Sui",
          {
            relayer: "0xb4b86c12d4ee0a813d976fb452b7afb325a2b381d00ccb2e54c5342f5ef2e684"
          }
        ],
        [
          "ZeroGravity",
          {
            relayer: "0x57188fC61ce92c8E941504562811660Ab883E895",
            relayerWithReferrer: "0xA4918ee5910679aed9Aa8fb2e1241dAae8AE0Aa0"
          }
        ]
      ]
    ]
  ];
  ds = [
    [
      "Mainnet",
      [
        [
          "Aptos",
          "0x11aa75c059e1a7855be66b931bf340a2e0973274ac16b5f519c02ceafaf08a18"
        ],
        [
          "Arbitrum",
          "0x3980f8318fc03d79033Bbb421A622CDF8d2Eeab4"
        ],
        [
          "Avalanche",
          "0x4661F0E629E4ba8D04Ee90080Aee079740B00381"
        ],
        [
          "Base",
          "0x9E1936E91A4a5AE5A5F75fFc472D6cb8e93597ea"
        ],
        [
          "Berachain",
          "0x0Dd7a5a32311b8D87A615Cc7f079B632D3d5e2D3"
        ],
        [
          "Bsc",
          "0xeC8cCCD058DbF28e5D002869Aa9aFa3992bf4ee0"
        ],
        [
          "Celo",
          "0xe6Ea5087c6860B94Cf098a403506262D8F28cF05"
        ],
        [
          "CreditCoin",
          "0xd2e420188f17607Aa6344ee19c3e76Cf86CA7BDe"
        ],
        [
          "Ethereum",
          "0x84EEe8dBa37C36947397E1E11251cA9A06Fc6F8a"
        ],
        [
          "HyperEVM",
          "0xd7717899cc4381033Bc200431286D0AC14265F78"
        ],
        [
          "Ink",
          "0x3e44a5F45cbD400acBEF534F51e616043B211Ddd"
        ],
        [
          "Linea",
          "0x23aF2B5296122544A9A7861da43405D5B15a9bD3"
        ],
        [
          "Mezo",
          "0x0f9b8E144Cc5C5e7C0073829Afd30F26A50c5606"
        ],
        [
          "Moca",
          "0x7b8097af5459846c5A72fCc960D94F31C05915aD"
        ],
        [
          "Moonbeam",
          "0x85D06449C78064c2E02d787e9DC71716786F8D19"
        ],
        [
          "Optimism",
          "0x85B704501f6AE718205C0636260768C4e72ac3e7"
        ],
        [
          "Polygon",
          "0x0B23efA164aB3eD08e9a39AC7aD930Ff4F5A5e81"
        ],
        [
          "Seievm",
          "0x25f1c923fb7a5aefa5f0a2b419fc70f2368e66e5"
        ],
        [
          "Solana",
          "execXUrAsMnqMmTHj5m7N1YQgsDz3cwGLYCYyuDRciV"
        ],
        [
          "Sonic",
          "0x3Fdc36b4260Da38fBDba1125cCBD33DD0AC74812"
        ],
        [
          "Sui",
          "0xdb0fe8bb1e2b5be628adbea0636063325073e1070ee11e4281457dfd7f158235"
        ],
        [
          "Unichain",
          "0x764dD868eAdD27ce57BCB801E4ca4a193d231Aed"
        ],
        [
          "Worldchain",
          "0x8689b4E6226AdC8fa8FF80aCc3a60AcE31e8804B"
        ],
        [
          "XRPLEVM",
          "0x8345E90Dcd92f5Cf2FAb0C8E2A56A5bc2c30d896"
        ],
        [
          "Monad",
          "0xC04dE634982cAdF2A677310b73630B7Ac56A3f65"
        ],
        [
          "MegaETH",
          "0xD405E0A1f3f9edc25Ea32d0B079d6118328b2EcB"
        ],
        [
          "Fogo",
          "execXUrAsMnqMmTHj5m7N1YQgsDz3cwGLYCYyuDRciV"
        ],
        [
          "ZeroGravity",
          "0x21928226566A0e0a67a91aAB6A5d5211E297965F"
        ],
        [
          "Tempo",
          "0xA3640464E5543182E5F587f346B6Ac1E604d1625"
        ],
        [
          "Nexus",
          "0x3370b6462012a5cAEc48b2707641617A7Ce0Bb27"
        ],
        [
          "Arc",
          "0xCD6b0d9635862e715FD8e2df335f8D0fF20Bb798"
        ],
        [
          "Hydration",
          "0xd633d8d1ceee8c8252196d44857c0f41b8dcb0d9"
        ]
      ]
    ],
    [
      "Testnet",
      [
        [
          "Aptos",
          "0x139717c339f08af674be77143507a905aa28cbc67a0e53e7095c07b630d73815"
        ],
        [
          "ArbitrumSepolia",
          "0xBF161de6B819c8af8f2230Bcd99a9B3592f6F87b"
        ],
        [
          "Avalanche",
          "0x4661F0E629E4ba8D04Ee90080Aee079740B00381"
        ],
        [
          "BaseSepolia",
          "0x51B47D493CBA7aB97e3F8F163D6Ce07592CE4482"
        ],
        [
          "Bsc",
          "0xeC8cCCD058DbF28e5D002869Aa9aFa3992bf4ee0"
        ],
        [
          "Converge",
          "0xAab9935349B9c08e0e970720F6D640d5B91C293E"
        ],
        [
          "Fogo",
          "execXUrAsMnqMmTHj5m7N1YQgsDz3cwGLYCYyuDRciV"
        ],
        [
          "Linea",
          "0x4f6c3a93a80DdC691312974DAAbf9B6e4Bb44111"
        ],
        [
          "Moca",
          "0xc4a03f2c47caA4b961101bAD6338DEf37376F052"
        ],
        [
          "MonadTestnet",
          "0xe37D3E162B4B1F17131E4e0e6122DbA31243382f"
        ],
        [
          "OptimismSepolia",
          "0x5856651eB82aeb6979B4954317194d48e1891b3c"
        ],
        [
          "Plume",
          "0x8fc2FbA8F962fbE89a9B02f03557a011c335A455"
        ],
        [
          "PolygonSepolia",
          "0x7056721C33De437f0997F67BC87521cA86b721d3"
        ],
        [
          "Seievm",
          "0x25f1c923Fb7A5aEFA5F0A2b419fC70f2368e66e5"
        ],
        [
          "Sepolia",
          "0xD0fb39f5a3361F21457653cB70F9D0C9bD86B66B"
        ],
        [
          "Solana",
          "execXUrAsMnqMmTHj5m7N1YQgsDz3cwGLYCYyuDRciV"
        ],
        [
          "Sui",
          "0x4000cfe2955d8355b3d3cf186f854fea9f787a457257056926fde1ec977670eb"
        ],
        [
          "Unichain",
          "0x764dD868eAdD27ce57BCB801E4ca4a193d231Aed"
        ],
        [
          "XRPLEVM",
          "0x4d9525D94D275dEB495b7C8840b154Ae04cfaC2A"
        ],
        [
          "Mezo",
          "0x0f9b8E144Cc5C5e7C0073829Afd30F26A50c5606"
        ],
        [
          "ZeroGravity",
          "0x7C43825EeB76DF7aAf3e1D2e8f684d4876F0CC05"
        ],
        [
          "Tempo",
          "0xA3640464E5543182E5F587f346B6Ac1E604d1625"
        ],
        [
          "Nexus",
          "0xc4b1A023A14d62791ca8C1216575839a0Bd98Ecb"
        ],
        [
          "Arc",
          "0xCD6b0d9635862e715FD8e2df335f8D0fF20Bb798"
        ]
      ]
    ]
  ];
  lr = [
    [
      "Mainnet",
      [
        [
          "Solana",
          "WnFt12ZrnzZrFZkt2xsNsaNWoQribnuQ5B5FrDbwDhD"
        ],
        [
          "Ethereum",
          "0x6FFd7EdE62328b3Af38FCD61461Bbfc52F5651fE"
        ],
        [
          "Bsc",
          "0x5a58505a96D1dbf8dF91cB21B54419FC36e93fdE"
        ],
        [
          "Polygon",
          "0x90BBd86a6Fe93D3bc3ed6335935447E75fAb7fCf"
        ],
        [
          "Avalanche",
          "0xf7B6737Ca9c4e08aE573F75A97B73D7a813f5De5"
        ],
        [
          "Klaytn",
          "0x3c3c561757BAa0b78c5C025CdEAa4ee24C1dFfEf"
        ],
        [
          "Celo",
          "0xA6A377d75ca5c9052c9a77ED1e865Cc25Bd97bf3"
        ],
        [
          "Aptos",
          "0x1bdffae984043833ed7fe223f7af7a3f8902d04129b14f801823e64827da7130"
        ],
        [
          "Moonbeam",
          "0x453cfbe096c0f8d763e8c5f24b441097d577bde2"
        ],
        [
          "Arbitrum",
          "0x3dD14D553cFD986EAC8e3bddF629d82073e188c8"
        ],
        [
          "Base",
          "0xDA3adC6621B2677BEf9aD26598e6939CF0D92f88"
        ],
        [
          "Optimism",
          "0xfE8cD454b4A1CA468B57D79c0cc77Ef5B6f64585"
        ]
      ]
    ],
    [
      "Testnet",
      [
        [
          "Solana",
          "2rHhojZ7hpu1zA91nvZmT8TqWWvMcKmmNBCr2mKTtMq4"
        ],
        [
          "Ethereum",
          "0xD8E4C2DbDd2e2bd8F1336EA691dBFF6952B1a6eB"
        ],
        [
          "Bsc",
          "0xcD16E5613EF35599dc82B24Cb45B5A93D779f1EE"
        ],
        [
          "Polygon",
          "0x51a02d0dcb5e52F5b92bdAA38FA013C91c7309A9"
        ],
        [
          "Avalanche",
          "0xD601BAf2EEE3C028344471684F6b27E789D9075D"
        ],
        [
          "Klaytn",
          "0x94c994fC51c13101062958b567e743f1a04432dE"
        ],
        [
          "Celo",
          "0xaCD8190F647a31E56A656748bC30F69259f245Db"
        ],
        [
          "Moonbeam",
          "0x98A0F4B96972b32Fcb3BD03cAeB66A44a6aB9Edb"
        ],
        [
          "Arbitrum",
          "0xEe3dB83916Ccdc3593b734F7F2d16D630F39F1D0"
        ],
        [
          "Optimism",
          "0x23908A62110e21C04F3A4e011d24F901F911744A"
        ],
        [
          "Base",
          "0xF681d1cc5F25a3694E348e7975d7564Aa581db59"
        ],
        [
          "Sepolia",
          "0x6a0B52ac198e4870e5F3797d5B403838a5bbFD99"
        ],
        [
          "Aptos",
          "0x1bdffae984043833ed7fe223f7af7a3f8902d04129b14f801823e64827da7130"
        ],
        [
          "ArbitrumSepolia",
          "0x23908A62110e21C04F3A4e011d24F901F911744A"
        ],
        [
          "BaseSepolia",
          "0x268557122Ffd64c85750d630b716471118F323c8"
        ],
        [
          "OptimismSepolia",
          "0x27812285fbe85BA1DF242929B906B31EE3dd1b9f"
        ],
        [
          "Holesky",
          "0xc8941d483c45eF8FB72E4d1F9dDE089C95fF8171"
        ],
        [
          "PolygonSepolia",
          "0x23908A62110e21C04F3A4e011d24F901F911744A"
        ]
      ]
    ],
    [
      "Devnet",
      [
        [
          "Solana",
          "NFTWqJR8YnRVqPDvTJrYuLrQDitTG5AScqbeghi4zSA"
        ],
        [
          "Ethereum",
          "0x26b4afb60d6c903165150c6f0aa14f8016be4aec"
        ],
        [
          "Bsc",
          "0x26b4afb60d6c903165150c6f0aa14f8016be4aec"
        ],
        [
          "Aptos",
          "0x46da3d4c569388af61f951bdd1153f4c875f90c2991f6b2d0a38e2161a40852c"
        ]
      ]
    ]
  ];
  fr = [
    [
      "Mainnet",
      [
        [
          "Ethereum",
          "0x27428DD2d3DD32A4D7f7C497eAaa23130d894911"
        ],
        [
          "Bsc",
          "0x27428DD2d3DD32A4D7f7C497eAaa23130d894911"
        ],
        [
          "Polygon",
          "0x27428DD2d3DD32A4D7f7C497eAaa23130d894911"
        ],
        [
          "Avalanche",
          "0x27428DD2d3DD32A4D7f7C497eAaa23130d894911"
        ],
        [
          "Klaytn",
          "0x27428DD2d3DD32A4D7f7C497eAaa23130d894911"
        ],
        [
          "Celo",
          "0x27428DD2d3DD32A4D7f7C497eAaa23130d894911"
        ],
        [
          "Moonbeam",
          "0x27428DD2d3DD32A4D7f7C497eAaa23130d894911"
        ],
        [
          "Base",
          "0x706f82e9bb5b0813501714ab5974216704980e31"
        ],
        [
          "Arbitrum",
          "0x27428DD2d3DD32A4D7f7C497eAaa23130d894911"
        ],
        [
          "Optimism",
          "0x27428DD2d3DD32A4D7f7C497eAaa23130d894911"
        ],
        [
          "Berachain",
          "0x27428DD2d3DD32A4D7f7C497eAaa23130d894911"
        ],
        [
          "Seievm",
          "0x27428DD2d3DD32A4D7f7C497eAaa23130d894911"
        ],
        [
          "Unichain",
          "0x27428DD2d3DD32A4D7f7C497eAaa23130d894911"
        ],
        [
          "Worldchain",
          "0x1520cc9e779c56dab5866bebfb885c86840c33d3"
        ],
        [
          "Ink",
          "0x27428DD2d3DD32A4D7f7C497eAaa23130d894911"
        ],
        [
          "Monad",
          "0x27428DD2d3DD32A4D7f7C497eAaa23130d894911"
        ],
        [
          "Mezo",
          "0x27428DD2d3DD32A4D7f7C497eAaa23130d894911"
        ],
        [
          "Plume",
          "0x27428DD2d3DD32A4D7f7C497eAaa23130d894911"
        ]
      ]
    ],
    [
      "Testnet",
      [
        [
          "Ethereum",
          "0x28D8F1Be96f97C1387e94A53e00eCcFb4E75175a"
        ],
        [
          "Bsc",
          "0x80aC94316391752A193C1c47E27D382b507c93F3"
        ],
        [
          "Polygon",
          "0x0591C25ebd0580E0d4F27A82Fc2e24E7489CB5e0"
        ],
        [
          "Avalanche",
          "0xA3cF45939bD6260bcFe3D66bc73d60f19e49a8BB"
        ],
        [
          "Celo",
          "0x306B68267Deb7c5DfCDa3619E22E9Ca39C374f84"
        ],
        [
          "Seievm",
          "0x362fca37E45fe1096b42021b543f462D49a5C8df"
        ],
        [
          "Moonbeam",
          "0x0591C25ebd0580E0d4F27A82Fc2e24E7489CB5e0"
        ],
        [
          "Arbitrum",
          "0xAd753479354283eEE1b86c9470c84D42f229FF43"
        ],
        [
          "Optimism",
          "0x01A957A525a5b7A72808bA9D10c389674E459891"
        ],
        [
          "Base",
          "0xea8029CD7FCAEFFcD1F53686430Db0Fc8ed384E1"
        ],
        [
          "Sepolia",
          "0x7B1bD7a6b4E61c2a123AC6BC2cbfC614437D0470"
        ],
        [
          "ArbitrumSepolia",
          "0x7B1bD7a6b4E61c2a123AC6BC2cbfC614437D0470"
        ],
        [
          "BaseSepolia",
          "0x93BAD53DDfB6132b0aC8E37f6029163E63372cEE"
        ],
        [
          "OptimismSepolia",
          "0x93BAD53DDfB6132b0aC8E37f6029163E63372cEE"
        ],
        [
          "Berachain",
          "0x362fca37E45fe1096b42021b543f462D49a5C8df"
        ],
        [
          "Unichain",
          "0x362fca37E45fe1096b42021b543f462D49a5C8df"
        ],
        [
          "Ink",
          "0x362fca37E45fe1096b42021b543f462D49a5C8df"
        ],
        [
          "Mezo",
          "0x362fca37E45fe1096b42021b543f462D49a5C8df"
        ],
        [
          "XRPLEVM",
          "0x362fca37E45fe1096b42021b543f462D49a5C8df"
        ],
        [
          "PolygonSepolia",
          "0x362fca37E45fe1096b42021b543f462D49a5C8df"
        ]
      ]
    ],
    [
      "Devnet",
      [
        [
          "Ethereum",
          "0xcC680D088586c09c3E0E099a676FA4b6e42467b4"
        ],
        [
          "Bsc",
          "0xcC680D088586c09c3E0E099a676FA4b6e42467b4"
        ]
      ]
    ]
  ];
  cs = [
    [
      "Mainnet",
      [
        [
          "Ethereum",
          {
            tokenMessenger: "0xbd3fa81b58ba92a82136038b25adec7066af3155",
            messageTransmitter: "0x0a992d191deec32afe36203ad87d7d289a738f81",
            wormholeRelayer: "0x4cb69FaE7e7Af841e44E1A1c30Af640739378bb2",
            wormhole: "0xAaDA05BD399372f0b0463744C09113c137636f6a"
          }
        ],
        [
          "Avalanche",
          {
            tokenMessenger: "0x6b25532e1060ce10cc3b0a99e5683b91bfde6982",
            messageTransmitter: "0x8186359af5f57fbb40c6b14a588d2a59c0c29880",
            wormholeRelayer: "0x4cb69FaE7e7Af841e44E1A1c30Af640739378bb2",
            wormhole: "0x09Fb06A271faFf70A651047395AaEb6265265F13"
          }
        ],
        [
          "Optimism",
          {
            tokenMessenger: "0x2B4069517957735bE00ceE0fadAE88a26365528f",
            messageTransmitter: "0x4d41f22c5a0e5c74090899e5a8fb597a8842b3e8",
            wormholeRelayer: "0x4cb69FaE7e7Af841e44E1A1c30Af640739378bb2",
            wormhole: "0x2703483B1a5a7c577e8680de9Df8Be03c6f30e3c"
          }
        ],
        [
          "Arbitrum",
          {
            tokenMessenger: "0x19330d10D9Cc8751218eaf51E8885D058642E08A",
            messageTransmitter: "0xC30362313FBBA5cf9163F0bb16a0e01f01A896ca",
            wormholeRelayer: "0x4cb69FaE7e7Af841e44E1A1c30Af640739378bb2",
            wormhole: "0x2703483B1a5a7c577e8680de9Df8Be03c6f30e3c"
          }
        ],
        [
          "Base",
          {
            tokenMessenger: "0x1682Ae6375C4E4A97e4B583BC394c861A46D8962",
            messageTransmitter: "0xAD09780d193884d503182aD4588450C416D6F9D4",
            wormholeRelayer: "0x4cb69FaE7e7Af841e44E1A1c30Af640739378bb2",
            wormhole: "0x03faBB06Fa052557143dC28eFCFc63FC12843f1D"
          }
        ],
        [
          "Solana",
          {
            tokenMessenger: "CCTPiPYPc6AsJuwueEnWgSgucamXDZwBd53dQ11YiKX3",
            messageTransmitter: "CCTPmbSD7gX1bxKPAmg77w8oFzNFpaQiQUWD43TKaecd",
            wormholeRelayer: "",
            wormhole: ""
          }
        ],
        [
          "Polygon",
          {
            tokenMessenger: "0x9daF8c91AEFAE50b9c0E69629D3F6Ca40cA3B3FE",
            messageTransmitter: "0xF3be9355363857F3e001be68856A2f96b4C39Ba9",
            wormholeRelayer: "0x4cb69FaE7e7Af841e44E1A1c30Af640739378bb2",
            wormhole: "0x0FF28217dCc90372345954563486528aa865cDd6"
          }
        ],
        [
          "Sui",
          {
            tokenMessenger: "0x2aa6c5d56376c371f88a6cc42e852824994993cb9bab8d3e6450cbe3cb32b94e",
            messageTransmitter: "0x08d87d37ba49e785dde270a83f8e979605b03dc552b5548f26fdf2f49bf7ed1b",
            wormholeRelayer: "",
            wormhole: ""
          }
        ],
        [
          "Aptos",
          {
            tokenMessenger: "0x9e6702a472080ea3caaf6ba9dfaa6effad2290a9ba9adaacd5af5c618e42782d",
            messageTransmitter: "0x177e17751820e4b4371873ca8c30279be63bdea63b88ed0f2239c2eea10f1772",
            wormholeRelayer: "",
            wormhole: ""
          }
        ],
        [
          "Unichain",
          {
            tokenMessenger: "0x4e744b28E787c3aD0e810eD65A24461D4ac5a762",
            messageTransmitter: "0x353bE9E2E38AB1D19104534e4edC21c643Df86f4",
            wormholeRelayer: "",
            wormhole: ""
          }
        ]
      ]
    ],
    [
      "Testnet",
      [
        [
          "Sepolia",
          {
            tokenMessenger: "0x9f3B8679c73C2Fef8b59B4f3444d4e156fb70AA5",
            messageTransmitter: "0x7865fAfC2db2093669d92c0F33AeEF291086BEFD",
            wormholeRelayer: "0x4cb69FaE7e7Af841e44E1A1c30Af640739378bb2",
            wormhole: "0x2703483B1a5a7c577e8680de9Df8Be03c6f30e3c"
          }
        ],
        [
          "Avalanche",
          {
            tokenMessenger: "0xeb08f243e5d3fcff26a9e38ae5520a669f4019d0",
            messageTransmitter: "0xa9fb1b3009dcb79e2fe346c16a604b8fa8ae0a79",
            wormholeRelayer: "0x774a70bbd03327c21460b60f25b677d9e46ab458",
            wormhole: "0x58f4c17449c90665891c42e14d34aae7a26a472e"
          }
        ],
        [
          "OptimismSepolia",
          {
            tokenMessenger: "0x9f3B8679c73C2Fef8b59B4f3444d4e156fb70AA5",
            messageTransmitter: "0x7865fAfC2db2093669d92c0F33AeEF291086BEFD",
            wormholeRelayer: "0x4cb69FaE7e7Af841e44E1A1c30Af640739378bb2",
            wormhole: "0x2703483B1a5a7c577e8680de9Df8Be03c6f30e3c"
          }
        ],
        [
          "ArbitrumSepolia",
          {
            tokenMessenger: "0x9f3B8679c73C2Fef8b59B4f3444d4e156fb70AA5",
            messageTransmitter: "0xaCF1ceeF35caAc005e15888dDb8A3515C41B4872",
            wormholeRelayer: "0x4cb69FaE7e7Af841e44E1A1c30Af640739378bb2",
            wormhole: "0x2703483B1a5a7c577e8680de9Df8Be03c6f30e3c"
          }
        ],
        [
          "Solana",
          {
            tokenMessenger: "CCTPiPYPc6AsJuwueEnWgSgucamXDZwBd53dQ11YiKX3",
            messageTransmitter: "CCTPmbSD7gX1bxKPAmg77w8oFzNFpaQiQUWD43TKaecd",
            wormholeRelayer: "",
            wormhole: ""
          }
        ],
        [
          "BaseSepolia",
          {
            tokenMessenger: "0x9f3B8679c73C2Fef8b59B4f3444d4e156fb70AA5",
            messageTransmitter: "0x7865fAfC2db2093669d92c0F33AeEF291086BEFD",
            wormholeRelayer: "0x4cb69FaE7e7Af841e44E1A1c30Af640739378bb2",
            wormhole: "0x2703483B1a5a7c577e8680de9Df8Be03c6f30e3c"
          }
        ],
        [
          "Polygon",
          {
            tokenMessenger: "0x9f3B8679c73C2Fef8b59B4f3444d4e156fb70AA5",
            messageTransmitter: "0xe09A679F56207EF33F5b9d8fb4499Ec00792eA73",
            wormholeRelayer: "0x4cb69FaE7e7Af841e44E1A1c30Af640739378bb2",
            wormhole: "0x2703483B1a5a7c577e8680de9Df8Be03c6f30e3c"
          }
        ],
        [
          "Sui",
          {
            tokenMessenger: "0x31cc14d80c175ae39777c0238f20594c6d4869cfab199f40b69f3319956b8beb",
            messageTransmitter: "0x4931e06dce648b3931f890035bd196920770e913e43e45990b383f6486fdd0a5",
            wormholeRelayer: "",
            wormhole: ""
          }
        ],
        [
          "Aptos",
          {
            tokenMessenger: "0x5f9b937419dda90aa06c1836b7847f65bbbe3f1217567758dc2488be31a477b9",
            messageTransmitter: "0x081e86cebf457a0c6004f35bd648a2794698f52e0dde09a48619dcd3d4cc23d9",
            wormholeRelayer: "",
            wormhole: ""
          }
        ],
        [
          "Unichain",
          {
            tokenMessenger: "0x8ed94B8dAd2Dc5453862ea5e316A8e71AAed9782",
            messageTransmitter: "0xbc498c326533d675cf571B90A2Ced265ACb7d086",
            wormholeRelayer: "",
            wormhole: ""
          }
        ]
      ]
    ]
  ];
  mr = [
    [
      "Mainnet",
      [
        [
          "Wormchain",
          "wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx"
        ]
      ]
    ],
    [
      "Testnet",
      [
        [
          "Wormchain",
          "wormhole1ctnjk7an90lz5wjfvr3cf6x984a8cjnv8dpmztmlpcq4xteaa2xs9pwmzk"
        ]
      ]
    ]
  ];
  br = [
    [
      "Mainnet",
      [
        [
          "Sei",
          "sei189adguawugk3e55zn63z8r9ll29xrjwca636ra7v7gxuzn98sxyqwzt47l"
        ]
      ]
    ],
    [
      "Testnet",
      [
        [
          "Sei",
          "sei1dkdwdvknx0qav5cp5kw68mkn3r99m3svkyjfvkztwh97dv2lm0ksj6xrak"
        ]
      ]
    ]
  ];
  ur = [
    [
      "Mainnet",
      [
        [
          "Polygon",
          [
            "Ethereum",
            "0x86E4Dc95c7FBdBf52e33D563BbDB00823894C287"
          ]
        ],
        [
          "Optimism",
          [
            "Ethereum",
            "0xdfe97868233d1aa22e815a266982f2cf17685a27"
          ]
        ],
        [
          "Arbitrum",
          [
            "Ethereum",
            "0x1c479675ad559dc151f6ec7ed3fbf8cee79582b6"
          ]
        ]
      ]
    ],
    [
      "Testnet",
      [
        [
          "Polygon",
          [
            "Ethereum",
            "0x2890ba17efe978480615e330ecb65333b880928e"
          ]
        ],
        [
          "Optimism",
          [
            "Ethereum",
            "0xe6dfba0953616bacab0c9a8ecb3a9bba77fc15c0"
          ]
        ],
        [
          "Arbitrum",
          [
            "Ethereum",
            "0x45af9ed1d03703e480ce7d328fb684bb67da5049"
          ]
        ]
      ]
    ]
  ];
  ls = [
    [
      "Mainnet",
      [
        [
          "Ethereum",
          {
            porticoUniswap: "0x48b6101128C0ed1E208b7C910e60542A2ee6f476",
            uniswapQuoterV2: "0x61fFE014bA17989E743c5F6cB21bF9697530B21e",
            porticoPancakeSwap: "0x4db1683d60e0a933A9A477a19FA32F472bB9d06e",
            pancakeSwapQuoterV2: "0xB048Bbc1Ee6b733FFfCFb9e9CeF7375518e25997"
          }
        ],
        [
          "Polygon",
          {
            porticoUniswap: "0x227bABe533fa9a1085f5261210E0B7137E44437B",
            uniswapQuoterV2: "0x61fFE014bA17989E743c5F6cB21bF9697530B21e",
            porticoPancakeSwap: void 0,
            pancakeSwapQuoterV2: void 0
          }
        ],
        [
          "Bsc",
          {
            porticoUniswap: "0x05498574BD0Fa99eeCB01e1241661E7eE58F8a85",
            uniswapQuoterV2: "0x78D78E420Da98ad378D7799bE8f4AF69033EB077",
            porticoPancakeSwap: "0xF352DC165783538A26e38A536e76DceF227d90F2",
            pancakeSwapQuoterV2: "0xB048Bbc1Ee6b733FFfCFb9e9CeF7375518e25997"
          }
        ],
        [
          "Avalanche",
          {
            porticoUniswap: "0xE565E118e75304dD3cF83dff409c90034b7EA18a",
            uniswapQuoterV2: "0xbe0F5544EC67e9B3b2D979aaA43f18Fd87E6257F",
            porticoPancakeSwap: void 0,
            pancakeSwapQuoterV2: void 0
          }
        ],
        [
          "Arbitrum",
          {
            porticoUniswap: "0x48fa7528bFD6164DdF09dF0Ed22451cF59c84130",
            uniswapQuoterV2: "0x61fFE014bA17989E743c5F6cB21bF9697530B21e",
            porticoPancakeSwap: "0xE70946692E2e56ae47BfAe2d93d31bd60952B090",
            pancakeSwapQuoterV2: "0xB048Bbc1Ee6b733FFfCFb9e9CeF7375518e25997"
          }
        ],
        [
          "Optimism",
          {
            porticoUniswap: "0x9ae506cDDd27DEe1275fd1fe6627E5dc65257061",
            uniswapQuoterV2: "0x61fFE014bA17989E743c5F6cB21bF9697530B21e",
            porticoPancakeSwap: void 0,
            pancakeSwapQuoterV2: void 0
          }
        ],
        [
          "Base",
          {
            porticoUniswap: "0x610d4DFAC3EC32e0be98D18DDb280DACD76A1889",
            uniswapQuoterV2: "0x3d4e44Eb1374240CE5F1B871ab261CD16335B76a",
            porticoPancakeSwap: "0x4568aa1eA0ED54db666c58B4526B3FC9BD9be9bf",
            pancakeSwapQuoterV2: "0xB048Bbc1Ee6b733FFfCFb9e9CeF7375518e25997"
          }
        ],
        [
          "Celo",
          {
            porticoUniswap: "0xE565E118e75304dD3cF83dff409c90034b7EA18a",
            uniswapQuoterV2: "0x82825d0554fA07f7FC52Ab63c961F330fdEFa8E8",
            porticoPancakeSwap: void 0,
            pancakeSwapQuoterV2: void 0
          }
        ]
      ]
    ]
  ];
  Er = [
    [
      "Mainnet",
      [
        [
          "Solana",
          "87MEvHZCXE3ML5rrmh5uX1FbShHmRXXS32xJDGbQ7h5t"
        ],
        [
          "Polygon",
          "0x09959798B95d00a3183d20FaC298E4594E599eab"
        ],
        [
          "Arbitrum",
          "0x1293a54e160D1cd7075487898d65266081A15458"
        ],
        [
          "Optimism",
          "0x1293a54e160D1cd7075487898d65266081A15458"
        ],
        [
          "Base",
          "0x09959798B95d00a3183d20FaC298E4594E599eab"
        ]
      ]
    ]
  ];
  fs = [
    [
      "Mainnet",
      [
        [
          "Ethereum",
          "0x6A4B4A882F5F0a447078b4Fd0b4B571A82371ec2"
        ],
        [
          "Linea",
          "0x6A4B4A882F5F0a447078b4Fd0b4B571A82371ec2"
        ]
      ]
    ],
    [
      "Testnet",
      [
        [
          "Ethereum",
          "0x6A4B4A882F5F0a447078b4Fd0b4B571A82371ec2"
        ],
        [
          "Sepolia",
          "0x6A4B4A882F5F0a447078b4Fd0b4B571A82371ec2"
        ],
        [
          "Linea",
          "0x6A4B4A882F5F0a447078b4Fd0b4B571A82371ec2"
        ]
      ]
    ],
    [
      "Devnet",
      [
        [
          "Ethereum",
          "0x6A4B4A882F5F0a447078b4Fd0b4B571A82371ec2"
        ]
      ]
    ]
  ];
  ms = [
    [
      "Mainnet",
      [
        [
          "Monad",
          "0x3d9282A8e9a3cdd9b25AE969eff4705a1Fe75F34"
        ],
        [
          "Polygon",
          "0x2a856931603930B827B1A4352FB4D66fA029F123"
        ]
      ]
    ],
    [
      "Testnet",
      [
        [
          "Sepolia",
          "0xc0C35D7bfBc4175e0991Ae294f561b433eA4158f"
        ],
        [
          "ArbitrumSepolia",
          "0x5E8c14F436c9ed2ff2E8B042B0542136bf108C6f"
        ],
        [
          "OptimismSepolia",
          "0x6a829dF7C91f35f9aD72Cd5d05550b95BbC9fd2F"
        ],
        [
          "BaseSepolia",
          "0x2507d6899C3D4b93BF46b555d0cB401f44065772"
        ],
        [
          "Solana",
          "qtrrrV7W3E1jnX1145wXR6ZpthG19ur5xHC1n6PPhDV"
        ]
      ]
    ]
  ];
  bs = w(cr);
  us = w(rs);
  Es = w(ns);
  Na = w(os);
  As = w(ds);
  Cs = w(lr);
  hs = w(fr);
  _a = w(mr);
  ja = w(br);
  qa = w(ls);
  ia = w(Er);
  ps = w(fs);
  Ds = w(ms);
  za = w(cs);
  Ar = w(ur);
  Cr = w(rs, [
    0,
    1
  ]);
  hr = w(ns, [
    0,
    1
  ]);
  pr = w(os, [
    0,
    1
  ]);
  Dr = w(ds, [
    0,
    1
  ]);
  gr = w(cs, [
    0,
    1
  ]);
  Br = w(ls, [
    0,
    1
  ]);
  yr = w(fs, [
    0,
    1
  ]);
  xr = w(ms, [
    0,
    1
  ]);
  Wd = Object.freeze(Object.defineProperty({
    __proto__: null,
    _suiExecutorTokenBridgeState: $t,
    circleContractChains: gr,
    circleContracts: za,
    coreBridge: bs,
    customConsistencyLevel: ps,
    customConsistencyLevelChains: yr,
    executor: As,
    executorChains: Dr,
    executorQuoter: Ds,
    executorQuoterChains: xr,
    executorTokenBridge: Na,
    executorTokenBridgeChains: pr,
    gateway: _a,
    getExecutorTokenBridgeDestinationAddresses: ji,
    nftBridge: Cs,
    portico: qa,
    porticoContractChains: Br,
    relayer: hs,
    rollupContracts: Ar,
    suiExecutorTokenBridgeState: Yt,
    tbtc: ia,
    tokenBridge: us,
    tokenBridgeChains: Cr,
    tokenBridgeRelayer: Es,
    tokenBridgeRelayerChains: hr,
    translator: ja
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  st = [
    [
      "Mainnet",
      [
        [
          "0x58CC3AE5C097b213cE3c81979e1B9f9570746AA5",
          "JumpCrypto"
        ],
        [
          "0xfF6CB952589BDE862c25Ef4392132fb9D4A42157",
          "Staked"
        ],
        [
          "0x114De8460193bdf3A2fCf81f86a09765F4762fD1",
          "Figment"
        ],
        [
          "0x107A0086b32d7A0977926A205131d8731D39cbEB",
          "ChainodeTech"
        ],
        [
          "0x8C82B2fd82FaeD2711d59AF0F2499D16e726f6b2",
          "Inotel"
        ],
        [
          "0x11b39756C042441BE6D8650b69b54EbE715E2343",
          "HashQuark"
        ],
        [
          "0x54Ce5B4D348fb74B958e8966e2ec3dBd4958a7cd",
          "Chainlayer"
        ],
        [
          "0x15e7cAF07C4e3DC8e7C469f92C8Cd88FB8005a20",
          "xLabs"
        ],
        [
          "0x74a3bf913953D695260D88BC1aA25A4eeE363ef0",
          "Forbole"
        ],
        [
          "0x000aC0076727b35FBea2dAc28fEE5cCB0fEA768e",
          "StakingFund"
        ],
        [
          "0xAF45Ced136b9D9e24903464AE889F5C8a723FC14",
          "MoonletWallet"
        ],
        [
          "0xf93124b7c738843CBB89E864c862c38cddCccF95",
          "P2PValidator"
        ],
        [
          "0xD2CC37A4dc036a8D232b48f62cDD4731412f4890",
          "01Node"
        ],
        [
          "0xDA798F6896A3331F64b48c12D1D57Fd9cbe70811",
          "MCF"
        ],
        [
          "0x71AA1BE1D36CaFE3867910F99C09e347899C19C3",
          "Everstake"
        ],
        [
          "0x8192b6E7387CCd768277c17DAb1b7a5027c0b3Cf",
          "ChorusOne"
        ],
        [
          "0x178e21ad2E77AE06711549CFBB1f9c7a9d8096e8",
          "Syncnode"
        ],
        [
          "0x5E1487F35515d02A92753504a8D75471b9f49EdB",
          "Triton"
        ],
        [
          "0x6FbEBc898F403E4773E95feB15E80C9A99c8348d",
          "StakingFacilities"
        ]
      ]
    ],
    [
      "Testnet",
      [
        [
          "0x13947Bd48b18E53fdAeEe77F3473391aC727C638",
          "Testnet guardian"
        ]
      ]
    ]
  ];
  [Fr, Sr] = Bi(Kt(yi(st)), [
    1,
    2
  ]);
  Tr = w(st, [
    [
      0,
      2
    ],
    1
  ]);
  wr = w(st, [
    1,
    [
      0,
      2
    ]
  ]);
  Wr = "cfb12303a19cde580bb4dd771639b0d26bc68353645571a8cff516ab2ee113a0";
  it = 5;
  Ud = Object.freeze(Object.defineProperty({
    __proto__: null,
    devnetGuardianPrivateKey: Wr,
    guardianAttestationEta: it,
    guardianKeyToName: wr,
    guardianKeys: Fr,
    guardianNameToKey: Tr,
    guardianNames: Sr
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  Ur = [
    [
      "Mainnet",
      "https://executor.labsapis.com/v0"
    ],
    [
      "Testnet",
      "https://executor-testnet.labsapis.com/v0"
    ]
  ];
  Va = w(Ur);
  vd = Object.freeze(Object.defineProperty({
    __proto__: null,
    executorAPI: Va
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  vr = [
    [
      "Mainnet",
      [
        [
          "Sui",
          "https://graphql.mainnet.sui.io/graphql"
        ]
      ]
    ],
    [
      "Testnet",
      [
        [
          "Sui",
          "https://graphql.testnet.sui.io/graphql"
        ]
      ]
    ],
    [
      "Devnet",
      []
    ]
  ];
  Or = w(vr);
  gs = (e, a) => Or.get(e, a) ?? "";
  Od = Object.freeze(Object.defineProperty({
    __proto__: null,
    graphQLAddress: gs
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  kr = function(e) {
    return "getVersion" in e;
  };
  const fe = {};
  kd = function(e, a, t) {
    a in fe || (fe[a] = {});
    const s = fe[a];
    if (e in s) throw new Error(`Protocol ${e} for protocol ${a} has already registered`);
    fe[a][e] = t;
  };
  Pr = function(e, a) {
    const t = Gt(e) ? we.get(e) : e;
    return a in fe ? t in fe[a] : false;
  };
  Bs = function(e, a) {
    if (a in fe) {
      const t = fe[a];
      if (t && e in t) {
        const s = t[e];
        if (s) return s;
      }
    }
    throw new Error(`No protocols registered for ${e}:${a}. This may be because the platform specific protocol implementation is not registered (by installing and importing it) or no implementation exists for this platform`);
  };
  Rr = (e, a, t, s) => Bs(e, a).fromRpc(t, s);
  Pd = function(e) {
    return e.getBalances !== void 0;
  };
  Rd = class {
    constructor(a, t) {
      __publicField(this, "network");
      __publicField(this, "config");
      this.network = a, this.config = t;
    }
    utils() {
      return this.constructor;
    }
    getProtocol(a, t) {
      return Rr(this.utils()._platform, a, t, this.config);
    }
    getProtocolInitializer(a) {
      return Bs(this.utils()._platform, a);
    }
    async parseWormholeMessages(a, t, s) {
      return (await this.getProtocol("WormholeCore", t)).parseTransaction(s);
    }
  };
  const Mr = [
    [
      "Ethereum",
      [
        [
          "ETH",
          {
            symbol: "ETH",
            decimals: 18,
            address: "native",
            wrappedKey: "WETH"
          }
        ],
        [
          "WETH",
          {
            symbol: "WETH",
            decimals: 18,
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"
          }
        ],
        [
          "USDCeth",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
          }
        ],
        [
          "WBTC",
          {
            symbol: "WBTC",
            decimals: 8,
            address: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599"
          }
        ],
        [
          "USDT",
          {
            symbol: "USDT",
            decimals: 6,
            address: "0xdac17f958d2ee523a2206206994597c13d831ec7"
          }
        ],
        [
          "DAI",
          {
            symbol: "DAI",
            decimals: 18,
            address: "0x6b175474e89094c44da98b954eedeac495271d0f"
          }
        ],
        [
          "BUSD",
          {
            symbol: "BUSD",
            decimals: 18,
            address: "0x4fabb145d64652a948d72533023f6e7a623c7c53"
          }
        ],
        [
          "WMATIC",
          {
            symbol: "WMATIC",
            decimals: 18,
            address: "0x7c9f4C87d911613Fe9ca58b579f737911AAD2D43",
            original: "Polygon"
          }
        ],
        [
          "WBNB",
          {
            symbol: "WBNB",
            decimals: 18,
            address: "0x418D75f65a02b3D53B2418FB8E1fe493759c7605",
            original: "Bsc"
          }
        ],
        [
          "USDCbnb",
          {
            symbol: "USDC",
            decimals: 18,
            address: "0x7cd167B101D2808Cfd2C45d17b2E7EA9F46b74B6",
            original: "Bsc"
          }
        ],
        [
          "WAVAX",
          {
            symbol: "WAVAX",
            decimals: 18,
            address: "0x85f138bfEE4ef8e540890CFb48F620571d67Eda3",
            original: "Avalanche"
          }
        ],
        [
          "USDCavax",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0x39EbF69137D98FB7659Ef8D4ea21ec26394389d7",
            original: "Avalanche"
          }
        ],
        [
          "CELO",
          {
            symbol: "CELO",
            decimals: 18,
            address: "0x3294395e62F4eB6aF3f1Fcf89f5602D90Fb3Ef69",
            original: "Celo"
          }
        ],
        [
          "WGLMR",
          {
            symbol: "WGLMR",
            decimals: 18,
            address: "0x93d3696A9F879b331f40CB5059e37015423A3Bd0",
            original: "Moonbeam"
          }
        ],
        [
          "WSOL",
          {
            symbol: "WSOL",
            decimals: 9,
            address: "0xD31a59c85aE9D8edEFeC411D448f90841571b89c",
            original: "Solana"
          }
        ],
        [
          "USDCsol",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0x41f7B8b9b897276b7AAE926a9016935280b44E97",
            original: "Solana"
          }
        ],
        [
          "SUI",
          {
            symbol: "SUI",
            decimals: 9,
            address: "0x84074EA631dEc7a4edcD5303d164D5dEa4c653D6",
            original: "Sui"
          }
        ],
        [
          "APT",
          {
            symbol: "APT",
            decimals: 8,
            address: "0x8CDf7AF57E4c8B930e1B23c477c22f076530585e",
            original: "Aptos"
          }
        ],
        [
          "WETHarbitrum",
          {
            symbol: "WETH",
            decimals: 18,
            address: "0xb945E3F853B5f8033C8513Cf3cE9F8AD9beBB1c9",
            original: "Arbitrum"
          }
        ],
        [
          "USDCarbitrum",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0xCFc006a32a98031C2338BF9d5ff8ED2c0Cae4a9e",
            original: "Arbitrum"
          }
        ],
        [
          "WETHoptimism",
          {
            symbol: "WETH",
            decimals: 18,
            address: "0x8B5653Ae095529155462eDa8CF664eD96773F557",
            original: "Optimism"
          }
        ],
        [
          "WETHbase",
          {
            symbol: "WETH",
            decimals: 18,
            address: "0x1D4241F7370253C0f12EFC536B7e16E462Fb3526",
            original: "Base"
          }
        ],
        [
          "tBTC",
          {
            symbol: "tBTC",
            decimals: 18,
            address: "0x18084fbA666a33d37592fA2633fD49a74DD93a88"
          }
        ],
        [
          "tBTCpolygon",
          {
            symbol: "tBTC",
            decimals: 18,
            address: "0xb4c624dBC50804dA086cf2380cD55dEBC0d22E96",
            original: "Polygon"
          }
        ],
        [
          "tBTCoptimism",
          {
            symbol: "tBTC",
            decimals: 18,
            address: "0xB8d1E0642bFD3744CaBd2ca8830cFabE19b2Ca54",
            original: "Optimism"
          }
        ],
        [
          "tBTCarbitrum",
          {
            symbol: "tBTC",
            decimals: 18,
            address: "0x4F3819A6cfF717BFfE801a75c73A984141c76589",
            original: "Arbitrum"
          }
        ],
        [
          "tBTCbase",
          {
            symbol: "tBTC",
            decimals: 18,
            address: "0x733F28B3e315046Db01dAbC292D6F0F7F26C4551",
            original: "Base"
          }
        ],
        [
          "wstETH",
          {
            symbol: "wstETH",
            decimals: 18,
            address: "0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0"
          }
        ],
        [
          "WKLAY",
          {
            symbol: "WKLAY",
            decimals: 18,
            address: "0x9AEA32B459e96C8eF5010f69130bf95fd129ac05",
            original: "Klaytn"
          }
        ],
        [
          "PYTH",
          {
            symbol: "PYTH",
            decimals: 6,
            address: "0xeFc0CED4B3D536103e76a1c4c74F0385C8F4Bdd3",
            original: "Solana"
          }
        ]
      ]
    ],
    [
      "Bsc",
      [
        [
          "WETH",
          {
            symbol: "WETH",
            decimals: 18,
            address: "0x4DB5a66E937A9F4473fA95b1cAF1d1E1D62E29EA",
            original: "Ethereum"
          }
        ],
        [
          "USDCeth",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0xB04906e95AB5D797aDA81508115611fee694c2b3",
            original: "Ethereum"
          }
        ],
        [
          "WBTC",
          {
            symbol: "WBTC",
            decimals: 8,
            address: "0x43359676E1A3F9FbB5de095333f8e9c1B46dFA44",
            original: "Ethereum"
          }
        ],
        [
          "USDT",
          {
            symbol: "USDT",
            decimals: 6,
            address: "0x524bC91Dc82d6b90EF29F76A3ECAaBAffFD490Bc",
            original: "Ethereum"
          }
        ],
        [
          "DAI",
          {
            symbol: "DAI",
            decimals: 18,
            address: "0x3413a030EF81a3dD5a302F4B4D11d911e12ed337",
            original: "Ethereum"
          }
        ],
        [
          "BUSD",
          {
            symbol: "BUSD",
            decimals: 18,
            address: "0x035de3679E692C471072d1A09bEb9298fBB2BD31",
            original: "Ethereum"
          }
        ],
        [
          "WMATIC",
          {
            symbol: "WMATIC",
            decimals: 18,
            address: "0xc836d8dC361E44DbE64c4862D55BA041F88Ddd39",
            original: "Polygon"
          }
        ],
        [
          "USDCpolygon",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0xe6d82Bbe75041E42E51d755e922cE1BA91af9c4d",
            original: "Polygon"
          }
        ],
        [
          "BNB",
          {
            symbol: "BNB",
            decimals: 18,
            address: "native",
            wrappedKey: "WBNB"
          }
        ],
        [
          "WBNB",
          {
            symbol: "WBNB",
            decimals: 18,
            address: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"
          }
        ],
        [
          "USDCbnb",
          {
            symbol: "USDC",
            decimals: 18,
            address: "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d"
          }
        ],
        [
          "WAVAX",
          {
            symbol: "WAVAX",
            decimals: 18,
            address: "0x96412902aa9aFf61E13f085e70D3152C6ef2a817",
            original: "Avalanche"
          }
        ],
        [
          "USDCavax",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0xc88Dc63bf0c8c8198C97Db0945E3eF25Ca89A8e4",
            original: "Avalanche"
          }
        ],
        [
          "CELO",
          {
            symbol: "CELO",
            decimals: 18,
            address: "0x2A335e327a55b177f5B40132fEC5D7298aa0D7e6",
            original: "Celo"
          }
        ],
        [
          "WGLMR",
          {
            symbol: "WGLMR",
            decimals: 18,
            address: "0x1C063db3c621BF901FC6C1D03328b08b2F9bbfba",
            original: "Moonbeam"
          }
        ],
        [
          "WSOL",
          {
            symbol: "WSOL",
            decimals: 9,
            address: "0xfA54fF1a158B5189Ebba6ae130CEd6bbd3aEA76e",
            original: "Solana"
          }
        ],
        [
          "USDCsol",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0x91Ca579B0D47E5cfD5D0862c21D5659d39C8eCf0",
            original: "Solana"
          }
        ],
        [
          "SUI",
          {
            symbol: "SUI",
            decimals: 9,
            address: "0x8314f6Bf1B4dd8604A0fC33C84F9AF2fc07AABC8",
            original: "Sui"
          }
        ],
        [
          "APT",
          {
            symbol: "APT",
            decimals: 8,
            address: "0x2Ba98cf7Edd2c5C794e21bc3Dc6973D3C2585eE3",
            original: "Aptos"
          }
        ],
        [
          "WETHarbitrum",
          {
            symbol: "WETH",
            decimals: 18,
            address: "0xaA1eEdABC48D078350ccBdD620bD088848e299E5",
            original: "Arbitrum"
          }
        ],
        [
          "USDCarbitrum",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0x5caa170b465122D15a6D20FD9A804a9613CE7882",
            original: "Arbitrum"
          }
        ],
        [
          "WETHoptimism",
          {
            symbol: "WETH",
            decimals: 18,
            address: "0x94AEc09B5e2CE591e39DC6aa58A3A6E85Ed45265",
            original: "Optimism"
          }
        ],
        [
          "USDCoptimism",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0xa41ae127D04F7ee73B5058E2C60Fb7c7A2D21F79",
            original: "Optimism"
          }
        ],
        [
          "WETHbsc",
          {
            symbol: "WETH",
            decimals: 18,
            address: "0x2170Ed0880ac9A755fd29B2688956BD959F933F8"
          }
        ],
        [
          "WETHbase",
          {
            symbol: "WETH",
            decimals: 18,
            address: "0x9dc152F4941cE1A138326e70c3600385bf0C22dD",
            original: "Base"
          }
        ],
        [
          "USDCbase",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0x55CaD531c8E303Cab8B3BE4bB4744Db4f896ac81",
            original: "Base"
          }
        ],
        [
          "tBTC",
          {
            symbol: "tBTC",
            decimals: 18,
            address: "0x94c97dd3Bde5bC1406BCe82E7941A6365968521D",
            original: "Ethereum"
          }
        ],
        [
          "wstETH",
          {
            symbol: "wstETH",
            decimals: 18,
            address: "0xad80E1A9B5824234afA9dE1F3bbDb8a994796169",
            original: "Ethereum"
          }
        ],
        [
          "WKLAY",
          {
            symbol: "WKLAY",
            decimals: 18,
            address: "0xEA970e7b7D131Ea36c3051C9Ca11e785462fE00c",
            original: "Klaytn"
          }
        ],
        [
          "PYTH",
          {
            symbol: "PYTH",
            decimals: 6,
            address: "0xb0188B0bb2cD4a6D2744637fC83C94a284B247Da",
            original: "Solana"
          }
        ],
        [
          "USDTbsc",
          {
            symbol: "USDT",
            decimals: 18,
            address: "0x55d398326f99059fF775485246999027B3197955"
          }
        ]
      ]
    ],
    [
      "Polygon",
      [
        [
          "WETH",
          {
            symbol: "WETH",
            decimals: 18,
            address: "0x11CD37bb86F65419713f30673A480EA33c826872",
            original: "Ethereum"
          }
        ],
        [
          "USDCeth",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0x4318CB63A2b8edf2De971E2F17F77097e499459D",
            original: "Ethereum"
          }
        ],
        [
          "WBTC",
          {
            symbol: "WBTC",
            decimals: 8,
            address: "0x5D49c278340655B56609FdF8976eb0612aF3a0C3",
            original: "Ethereum"
          }
        ],
        [
          "USDT",
          {
            symbol: "USDT",
            decimals: 6,
            address: "0x9417669fBF23357D2774e9D421307bd5eA1006d2",
            original: "Ethereum"
          }
        ],
        [
          "DAI",
          {
            symbol: "DAI",
            decimals: 18,
            address: "0x732EB1747ecCFC431fF19bc359ffc83755B1918c",
            original: "Ethereum"
          }
        ],
        [
          "BUSD",
          {
            symbol: "BUSD",
            decimals: 18,
            address: "0x95ea750420da26bE1Ab0891e209e921bCd84763f",
            original: "Ethereum"
          }
        ],
        [
          "MATIC",
          {
            symbol: "MATIC",
            decimals: 18,
            address: "native",
            wrappedKey: "WMATIC"
          }
        ],
        [
          "WMATIC",
          {
            symbol: "WMATIC",
            decimals: 18,
            address: "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270"
          }
        ],
        [
          "WETHpolygon",
          {
            symbol: "WETH",
            decimals: 18,
            address: "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619"
          }
        ],
        [
          "USDCpolygon",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0x3c499c542cef5e3811e1192ce70d8cc03d5c3359"
          }
        ],
        [
          "WBNB",
          {
            symbol: "WBNB",
            decimals: 18,
            address: "0xeCDCB5B88F8e3C15f95c720C51c71c9E2080525d",
            original: "Bsc"
          }
        ],
        [
          "USDCbnb",
          {
            symbol: "USDC",
            decimals: 18,
            address: "0x4B3a922c773BDCF3BA8f1A4FDAc2029E1D0E9868",
            original: "Bsc"
          }
        ],
        [
          "WAVAX",
          {
            symbol: "WAVAX",
            decimals: 18,
            address: "0x7Bb11E7f8b10E9e571E5d8Eace04735fDFB2358a",
            original: "Avalanche"
          }
        ],
        [
          "USDCavax",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0xAEA5CC14DefbC1b845FDE729E563B717Ee6825ae",
            original: "Avalanche"
          }
        ],
        [
          "CELO",
          {
            symbol: "CELO",
            decimals: 18,
            address: "0x922F49a9911effc034eE756196E59BE7b90D43b3",
            original: "Celo"
          }
        ],
        [
          "WGLMR",
          {
            symbol: "WGLMR",
            decimals: 18,
            address: "0xcC48d6CF842083fEc0E01d913fB964b585975F05",
            original: "Moonbeam"
          }
        ],
        [
          "WSOL",
          {
            symbol: "WSOL",
            decimals: 9,
            address: "0xd93f7E271cB87c23AaA73edC008A79646d1F9912",
            original: "Solana"
          }
        ],
        [
          "USDCsol",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0x576Cf361711cd940CD9C397BB98C4C896cBd38De",
            original: "Solana"
          }
        ],
        [
          "SUI",
          {
            symbol: "SUI",
            decimals: 9,
            address: "0x34bE049fEbfc6C64Ffd82Da08a8931A9a45f2cc8",
            original: "Sui"
          }
        ],
        [
          "APT",
          {
            symbol: "APT",
            decimals: 8,
            address: "0xa4ef199d3ad524E9C3C51Ac46B303B103A307Cef",
            original: "Aptos"
          }
        ],
        [
          "WETHarbitrum",
          {
            symbol: "WETH",
            decimals: 18,
            address: "0x6a5c59AB16268d2c872916054C50440B999e417C",
            original: "Arbitrum"
          }
        ],
        [
          "USDCarbitrum",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0x7800FE8951cdc1cDea748d878fAce63018D97960",
            original: "Arbitrum"
          }
        ],
        [
          "WETHoptimism",
          {
            symbol: "WETH",
            decimals: 18,
            address: "0x8182De59485Bb646542Db8C7E5958148Dc699319",
            original: "Optimism"
          }
        ],
        [
          "USDCoptimism",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0x31F12aCb60C3c32EE884F3894a873347C097D925",
            original: "Optimism"
          }
        ],
        [
          "WETHbase",
          {
            symbol: "WETH",
            decimals: 18,
            address: "0x5BCf8d8c097FbB35C371F921E3FF3e6F6Eb54B41",
            original: "Base"
          }
        ],
        [
          "USDCbase",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0x1eeCaB0F75fE93abbFa0cDFfb4fB13d1dC8706c8",
            original: "Base"
          }
        ],
        [
          "tBTC",
          {
            symbol: "tBTC",
            decimals: 18,
            address: "0x3362b2B92b331925F09F9E5bCA3E8C43921a435C",
            original: "Ethereum"
          }
        ],
        [
          "tBTCpolygon",
          {
            symbol: "tBTC",
            decimals: 18,
            address: "0x236aa50979D5f3De3Bd1Eeb40E81137F22ab794b"
          }
        ],
        [
          "tBTCoptimism",
          {
            symbol: "tBTC",
            decimals: 18,
            address: "0x68A8797da1c8ED592600d70A5151886A92D2183C",
            original: "Optimism"
          }
        ],
        [
          "tBTCarbitrum",
          {
            symbol: "tBTC",
            decimals: 18,
            address: "0x045D8c62D5326aa51a31518ECF3aF80C17421Aba",
            original: "Arbitrum"
          }
        ],
        [
          "wstETH",
          {
            symbol: "wstETH",
            decimals: 18,
            address: "0xe082a7Fc696De18172Ad08D956569Ee80BC37f06",
            original: "Ethereum"
          }
        ],
        [
          "wstETHpolygon",
          {
            symbol: "wstETH",
            decimals: 18,
            address: "0x03b54A6e9a984069379fae1a4fC4dBAE93B3bCCD"
          }
        ],
        [
          "WKLAY",
          {
            symbol: "WKLAY",
            decimals: 18,
            address: "0x415ce980fde17F1FF102e1c6e4ce860Acc615D74",
            original: "Klaytn"
          }
        ],
        [
          "PYTH",
          {
            symbol: "PYTH",
            decimals: 6,
            address: "0xFa4B761A1e07909Ba31331a5dfa12390E3ff5583",
            original: "Solana"
          }
        ],
        [
          "USDTpolygon",
          {
            symbol: "USDT",
            decimals: 6,
            address: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F"
          }
        ]
      ]
    ],
    [
      "Avalanche",
      [
        [
          "WETH",
          {
            symbol: "WETH",
            decimals: 18,
            address: "0x8b82A291F83ca07Af22120ABa21632088fC92931",
            original: "Ethereum"
          }
        ],
        [
          "USDCeth",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0xB24CA28D4e2742907115fECda335b40dbda07a4C",
            original: "Ethereum"
          }
        ],
        [
          "WBTC",
          {
            symbol: "WBTC",
            decimals: 8,
            address: "0x1C0e79C5292c59bbC13C9F9f209D204cf4d65aD6",
            original: "Ethereum"
          }
        ],
        [
          "USDT",
          {
            symbol: "USDT",
            decimals: 6,
            address: "0x9d228444FC4B7E15A2C481b48E10247A03351FD8",
            original: "Ethereum"
          }
        ],
        [
          "DAI",
          {
            symbol: "DAI",
            decimals: 18,
            address: "0xca319f81D147559e19A522A0a0310Dd43A96cA0F",
            original: "Ethereum"
          }
        ],
        [
          "WMATIC",
          {
            symbol: "WMATIC",
            decimals: 18,
            address: "0xf2f13f0B7008ab2FA4A2418F4ccC3684E49D20Eb",
            original: "Polygon"
          }
        ],
        [
          "USDCpolygon",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0xDb2d08f5A9C9ADBBA0DE5a69bbB1E9Ca03411692",
            original: "Polygon"
          }
        ],
        [
          "WBNB",
          {
            symbol: "WBNB",
            decimals: 18,
            address: "0x442F7f22b1EE2c842bEAFf52880d4573E9201158",
            original: "Bsc"
          }
        ],
        [
          "USDCbnb",
          {
            symbol: "USDC",
            decimals: 18,
            address: "0x6145E8a910aE937913426BF32De2b26039728ACF",
            original: "Bsc"
          }
        ],
        [
          "AVAX",
          {
            symbol: "AVAX",
            decimals: 18,
            address: "native",
            wrappedKey: "WAVAX"
          }
        ],
        [
          "WAVAX",
          {
            symbol: "WAVAX",
            decimals: 18,
            address: "0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7"
          }
        ],
        [
          "USDCavax",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E"
          }
        ],
        [
          "WETHavax",
          {
            symbol: "WETH",
            decimals: 18,
            address: "0x49d5c2bdffac6ce2bfdb6640f4f80f226bc10bab"
          }
        ],
        [
          "CELO",
          {
            symbol: "CELO",
            decimals: 18,
            address: "0x494317B8521c5a5287a06DEE467dd6fe285dA4a8",
            original: "Celo"
          }
        ],
        [
          "WGLMR",
          {
            symbol: "WGLMR",
            decimals: 18,
            address: "0x375aA6C67BF499fBf01804A9f92C03c0776F372d",
            original: "Moonbeam"
          }
        ],
        [
          "WSOL",
          {
            symbol: "WSOL",
            decimals: 9,
            address: "0xFE6B19286885a4F7F55AdAD09C3Cd1f906D2478F",
            original: "Solana"
          }
        ],
        [
          "USDCsol",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0x0950Fc1AD509358dAeaD5eB8020a3c7d8b43b9DA",
            original: "Solana"
          }
        ],
        [
          "SUI",
          {
            symbol: "SUI",
            decimals: 9,
            address: "0x1703CB0F762D2a435199B64Ea47E5349B7C17480",
            original: "Sui"
          }
        ],
        [
          "APT",
          {
            symbol: "APT",
            decimals: 8,
            address: "0x43c588459b3243fA541B98CC4B2E995b3de553A2",
            original: "Aptos"
          }
        ],
        [
          "WETHarbitrum",
          {
            symbol: "WETH",
            decimals: 18,
            address: "0xDfDA518A1612030536bD77Fd67eAcbe90dDC52Ab",
            original: "Arbitrum"
          }
        ],
        [
          "USDCarbitrum",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0x4b5fE357Eb11c735078e47526D6e853DBff18541",
            original: "Arbitrum"
          }
        ],
        [
          "WETHoptimism",
          {
            symbol: "WETH",
            decimals: 18,
            address: "0xDf11535274c0FD2Fe41A88bd1bBF802D72296037",
            original: "Optimism"
          }
        ],
        [
          "USDCoptimism",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0xBe04f76A0ba2100c3F2d6Aa1FD8484F415469573",
            original: "Optimism"
          }
        ],
        [
          "WETHbase",
          {
            symbol: "WETH",
            decimals: 18,
            address: "0xFA83178c66fE51ee99109b5cC912f8098Ff812eF",
            original: "Base"
          }
        ],
        [
          "USDCbase",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0xab933e939a9236BD439F7d29b87CE712f42bAC06",
            original: "Base"
          }
        ],
        [
          "tBTC",
          {
            symbol: "tBTC",
            decimals: 18,
            address: "0x3F531c038A0D2d9c7D19FC3554cd0439791526c4",
            original: "Ethereum"
          }
        ],
        [
          "WKLAY",
          {
            symbol: "WKLAY",
            decimals: 18,
            address: "0x126C03982Ad6D7ef7E6aF020bF219e87185a6BC3",
            original: "Klaytn"
          }
        ],
        [
          "PYTH",
          {
            symbol: "PYTH",
            decimals: 6,
            address: "0x8A0691e602B7a5FCc51a27E4a08376dE50889B42",
            original: "Solana"
          }
        ],
        [
          "USDTavax",
          {
            symbol: "USDT",
            decimals: 6,
            address: "0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7"
          }
        ]
      ]
    ],
    [
      "Celo",
      [
        [
          "WETH",
          {
            symbol: "WETH",
            decimals: 18,
            address: "0x66803FB87aBd4aaC3cbB3fAd7C3aa01f6F3FB207",
            original: "Ethereum"
          }
        ],
        [
          "USDCeth",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0x37f750B7cC259A2f741AF45294f6a16572CF5cAd",
            original: "Ethereum"
          }
        ],
        [
          "WBTC",
          {
            symbol: "WBTC",
            decimals: 8,
            address: "0xd71Ffd0940c920786eC4DbB5A12306669b5b81EF",
            original: "Ethereum"
          }
        ],
        [
          "USDT",
          {
            symbol: "USDT",
            decimals: 6,
            address: "0x617f3112bf5397D0467D315cC709EF968D9ba546",
            original: "Ethereum"
          }
        ],
        [
          "DAI",
          {
            symbol: "DAI",
            decimals: 18,
            address: "0x97926a82930bb7B33178E3c2f4ED1BFDc91A9FBF",
            original: "Ethereum"
          }
        ],
        [
          "BUSD",
          {
            symbol: "BUSD",
            decimals: 18,
            address: "0x1dd42c0785ca90B677adc2ABad01dfc5ECcD0b4d",
            original: "Ethereum"
          }
        ],
        [
          "WMATIC",
          {
            symbol: "WMATIC",
            decimals: 18,
            address: "0x9C234706292b1144133ED509ccc5B3CD193BF712",
            original: "Polygon"
          }
        ],
        [
          "USDCpolygon",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0x42c76808f3179A091Ee007A2955aF2522978ADE7",
            original: "Polygon"
          }
        ],
        [
          "WBNB",
          {
            symbol: "WBNB",
            decimals: 18,
            address: "0xBf2554ce8A4D1351AFeB1aC3E5545AaF7591042d",
            original: "Bsc"
          }
        ],
        [
          "USDCbnb",
          {
            symbol: "USDC",
            decimals: 18,
            address: "0x9d9abAE97a9344e3854527b4efbB366a1564bfEb",
            original: "Bsc"
          }
        ],
        [
          "WAVAX",
          {
            symbol: "WAVAX",
            decimals: 18,
            address: "0xFFdb274b4909fC2efE26C8e4Ddc9fe91963cAA4d",
            original: "Avalanche"
          }
        ],
        [
          "USDCavax",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0x62FFf2D2D1692D52eAf043AeeC727F7918d269D3",
            original: "Avalanche"
          }
        ],
        [
          "CELO",
          {
            symbol: "CELO",
            decimals: 18,
            address: "0x471ece3750da237f93b8e339c536989b8978a438"
          }
        ],
        [
          "USDT",
          {
            symbol: "USDT",
            decimals: 6,
            address: "0x48065fbBE25f71C9282ddf5e1cD6D6A887483D5e"
          }
        ],
        [
          "WGLMR",
          {
            symbol: "WGLMR",
            decimals: 18,
            address: "0x383A5513AbE4Fe36e0E00d484F710148E348Aa9D",
            original: "Moonbeam"
          }
        ],
        [
          "WSOL",
          {
            symbol: "WSOL",
            decimals: 9,
            address: "0x4581E64115d46CcdeE65Be2336bEc86c9BA54C01",
            original: "Solana"
          }
        ],
        [
          "USDCsol",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0x8B6eef6C449D3Ac723a9C06a9eaE2dCd7d308BA9",
            original: "Solana"
          }
        ],
        [
          "SUI",
          {
            symbol: "SUI",
            decimals: 9,
            address: "0x1Cb9859B1A16A67ef83A0c7b9A21eeC17d9a97Dc",
            original: "Sui"
          }
        ],
        [
          "APT",
          {
            symbol: "APT",
            decimals: 8,
            address: "0x89F2b718Ca518db39d377F0ABBa6B42582b549F7",
            original: "Aptos"
          }
        ],
        [
          "WETHarbitrum",
          {
            symbol: "WETH",
            decimals: 18,
            address: "0xc6F962fCcb140ece554AfD0E589f971532A57f14",
            original: "Arbitrum"
          }
        ],
        [
          "USDCarbitrum",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0xA41a62567d9eb960D84b72663FdaeBE0BCdE2683",
            original: "Arbitrum"
          }
        ],
        [
          "WETHoptimism",
          {
            symbol: "WETH",
            decimals: 18,
            address: "0x8d53771b1Ec7461f8e45Bca2609c45bC0bbd0677",
            original: "Optimism"
          }
        ],
        [
          "USDCoptimism",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0xEe48963C003e21EaCEdFA8a0A19BB3cbF7E776Fe",
            original: "Optimism"
          }
        ],
        [
          "WETHbase",
          {
            symbol: "WETH",
            decimals: 18,
            address: "0x905CADB645684140E285e2D09D39dF5a2082BC87",
            original: "Base"
          }
        ],
        [
          "USDCbase",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0x2e2acb1782Aad0490f8446b6fD4626C467987bD6",
            original: "Base"
          }
        ],
        [
          "tBTC",
          {
            symbol: "tBTC",
            decimals: 18,
            address: "0xFaED7314060FCEc652ED91D9eac6c980DCA9D3B8",
            original: "Ethereum"
          }
        ],
        [
          "tBTCarbitrum",
          {
            symbol: "tBTC",
            decimals: 18,
            address: "0x72878E7d3A8746e0c91b9F16F0b8ee4fDE9DDc06",
            original: "Arbitrum"
          }
        ],
        [
          "WKLAY",
          {
            symbol: "WKLAY",
            decimals: 18,
            address: "0xe304254de5c2048F9bFb042dDFB54f84d1d77730",
            original: "Klaytn"
          }
        ],
        [
          "PYTH",
          {
            symbol: "PYTH",
            decimals: 6,
            address: "0x985aa4814419ba338379A634785216301e51113D",
            original: "Solana"
          }
        ]
      ]
    ],
    [
      "Moonbeam",
      [
        [
          "WETH",
          {
            symbol: "WETH",
            decimals: 18,
            address: "0xab3f0245B83feB11d15AAffeFD7AD465a59817eD",
            original: "Ethereum"
          }
        ],
        [
          "USDCeth",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0x931715FEE2d06333043d11F658C8CE934aC61D0c",
            original: "Ethereum"
          }
        ],
        [
          "WBTC",
          {
            symbol: "WBTC",
            decimals: 8,
            address: "0xE57eBd2d67B462E9926e04a8e33f01cD0D64346D",
            original: "Ethereum"
          }
        ],
        [
          "USDT",
          {
            symbol: "USDT",
            decimals: 6,
            address: "0xc30E9cA94CF52f3Bf5692aaCF81353a27052c46f",
            original: "Ethereum"
          }
        ],
        [
          "DAI",
          {
            symbol: "DAI",
            decimals: 18,
            address: "0x06e605775296e851FF43b4dAa541Bb0984E9D6fD",
            original: "Ethereum"
          }
        ],
        [
          "BUSD",
          {
            symbol: "BUSD",
            decimals: 18,
            address: "0xa2284e1F98E4d0B7Eb6a6b4f3C57f1b209C755F3",
            original: "Ethereum"
          }
        ],
        [
          "WMATIC",
          {
            symbol: "WMATIC",
            decimals: 18,
            address: "0x82DbDa803bb52434B1f4F41A6F0Acb1242A7dFa3",
            original: "Polygon"
          }
        ],
        [
          "USDCpolygon",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0x4415BfBDee669446550d55c749007EF60B520FC8",
            original: "Polygon"
          }
        ],
        [
          "WBNB",
          {
            symbol: "WBNB",
            decimals: 18,
            address: "0xE3b841C3f96e647E6dc01b468d6D0AD3562a9eeb",
            original: "Bsc"
          }
        ],
        [
          "USDCbnb",
          {
            symbol: "USDC",
            decimals: 18,
            address: "0x7f433E22366E03a3758CE22cCf82887d828078f8",
            original: "Bsc"
          }
        ],
        [
          "WAVAX",
          {
            symbol: "WAVAX",
            decimals: 18,
            address: "0xd4937A95BeC789CC1AE1640714C61c160279B22F",
            original: "Avalanche"
          }
        ],
        [
          "USDCavax",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0xd4918c40cA9f02d42Cb53d06587aF42017Bc345D",
            original: "Avalanche"
          }
        ],
        [
          "CELO",
          {
            symbol: "CELO",
            decimals: 18,
            address: "0xc1a792041985F65c17Eb65E66E254DC879CF380b",
            original: "Celo"
          }
        ],
        [
          "GLMR",
          {
            symbol: "GLMR",
            decimals: 18,
            address: "native",
            wrappedKey: "WGLMR"
          }
        ],
        [
          "WGLMR",
          {
            symbol: "WGLMR",
            decimals: 18,
            address: "0xAcc15dC74880C9944775448304B263D191c6077F"
          }
        ],
        [
          "WSOL",
          {
            symbol: "WSOL",
            decimals: 9,
            address: "0x99Fec54a5Ad36D50A4Bba3a41CAB983a5BB86A7d",
            original: "Solana"
          }
        ],
        [
          "USDCsol",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0x098d6eE48341D6a0a0A72dE5baaF80A10E0F6082",
            original: "Solana"
          }
        ],
        [
          "SUI",
          {
            symbol: "SUI",
            decimals: 9,
            address: "0x484eCCE6775143D3335Ed2C7bCB22151C53B9F49",
            original: "Sui"
          }
        ],
        [
          "APT",
          {
            symbol: "APT",
            decimals: 8,
            address: "0x25331575641d35D9765e1934acC8F0991c58e904",
            original: "Aptos"
          }
        ],
        [
          "WETHarbitrum",
          {
            symbol: "WETH",
            decimals: 18,
            address: "0x18872b45c603eD2EbC508b9C5514a85c2e2791FB",
            original: "Arbitrum"
          }
        ],
        [
          "WETHoptimism",
          {
            symbol: "WETH",
            decimals: 18,
            address: "0xd4870F7F5AD8Ae5139E1a5D8AD4ac55204aE4490",
            original: "Optimism"
          }
        ],
        [
          "USDCoptimism",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0x7143e8EA96e158381057a58AfdDF44601c7e532C",
            original: "Optimism"
          }
        ],
        [
          "WETHbase",
          {
            symbol: "WETH",
            decimals: 18,
            address: "0x6C6f83366A42fcA4D30a2D3f1914284de995Ac3a",
            original: "Base"
          }
        ],
        [
          "USDCbase",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0xE6d02a875CcC153c076fe418f33De3A5C420f505",
            original: "Base"
          }
        ],
        [
          "tBTC",
          {
            symbol: "tBTC",
            decimals: 18,
            address: "0xeCd65E4B89495Ae63b4f11cA872a23680A7c419c",
            original: "Ethereum"
          }
        ],
        [
          "WKLAY",
          {
            symbol: "WKLAY",
            decimals: 18,
            address: "0xf0a9476E4712123A807859f9Fd25fe98213379BD",
            original: "Klaytn"
          }
        ]
      ]
    ],
    [
      "Solana",
      [
        [
          "WETH",
          {
            symbol: "WETH",
            decimals: 8,
            address: "7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs",
            original: "Ethereum"
          }
        ],
        [
          "USDCeth",
          {
            symbol: "USDC",
            decimals: 6,
            address: "A9mUU4qviSctJVPJdBJWkb28deg915LYJKrzQ19ji3FM",
            original: "Ethereum"
          }
        ],
        [
          "WBTC",
          {
            symbol: "WBTC",
            decimals: 8,
            address: "3NZ9JMVBmGAqocybic2c7LQCJScmgsAZ6vQqTDzcqmJh",
            original: "Ethereum"
          }
        ],
        [
          "USDT",
          {
            symbol: "USDT",
            decimals: 6,
            address: "Dn4noZ5jgGfkntzcQSUZ8czkreiZ1ForXYoV2H8Dm7S1",
            original: "Ethereum"
          }
        ],
        [
          "DAI",
          {
            symbol: "DAI",
            decimals: 8,
            address: "EjmyN6qEC1Tf1JxiG1ae7UTJhUxSwk1TCWNWqxWV4J6o",
            original: "Ethereum"
          }
        ],
        [
          "BUSD",
          {
            symbol: "BUSD",
            decimals: 8,
            address: "33fsBLA8djQm82RpHmE3SuVrPGtZBWNYExsEUeKX1HXX",
            original: "Ethereum"
          }
        ],
        [
          "WMATIC",
          {
            symbol: "WMATIC",
            decimals: 8,
            address: "Gz7VkD4MacbEB6yC5XD3HcumEiYx2EtDYYrfikGsvopG",
            original: "Polygon"
          }
        ],
        [
          "WBNB",
          {
            symbol: "WBNB",
            decimals: 8,
            address: "9gP2kCy3wA1ctvYWQk75guqXuHfrEomqydHLtcTCqiLa",
            original: "Bsc"
          }
        ],
        [
          "USDCbnb",
          {
            symbol: "USDC",
            decimals: 8,
            address: "FCqfQSujuPxy6V42UvafBhsysWtEq1vhjfMN1PUbgaxA",
            original: "Bsc"
          }
        ],
        [
          "WAVAX",
          {
            symbol: "WAVAX",
            decimals: 8,
            address: "KgV1GvrHQmRBY8sHQQeUKwTm2r2h8t4C8qt12Cw1HVE",
            original: "Avalanche"
          }
        ],
        [
          "USDCavax",
          {
            symbol: "USDC",
            decimals: 6,
            address: "FHfba3ov5P3RjaiLVgh8FTv4oirxQDoVXuoUUDvHuXax",
            original: "Avalanche"
          }
        ],
        [
          "CELO",
          {
            symbol: "CELO",
            decimals: 8,
            address: "9kvAcwQbqejuJMd59mKuw2bfSsLRaQ7zuvaTVHEeBBec",
            original: "Celo"
          }
        ],
        [
          "WGLMR",
          {
            symbol: "WGLMR",
            decimals: 8,
            address: "7ixSaXGsHAFy34wogPk2YXiUX3BMmQMFdercdaHLnBby",
            original: "Moonbeam"
          }
        ],
        [
          "SOL",
          {
            symbol: "SOL",
            decimals: 9,
            address: "native",
            wrappedKey: "WSOL"
          }
        ],
        [
          "WSOL",
          {
            symbol: "WSOL",
            decimals: 9,
            address: "So11111111111111111111111111111111111111112"
          }
        ],
        [
          "USDCsol",
          {
            symbol: "USDC",
            decimals: 6,
            address: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"
          }
        ],
        [
          "SUI",
          {
            symbol: "SUI",
            decimals: 8,
            address: "G1vJEgzepqhnVu35BN4jrkv3wVwkujYWFFCxhbEZ1CZr",
            original: "Sui"
          }
        ],
        [
          "APT",
          {
            symbol: "APT",
            decimals: 8,
            address: "6LNeTYMqtNm1pBFN8PfhQaoLyegAH8GD32WmHU9erXKN",
            original: "Aptos"
          }
        ],
        [
          "WETHarbitrum",
          {
            symbol: "WETH",
            decimals: 8,
            address: "CSD6JQMvLi46psjHdpfFdr826mF336pEVMJgjwcoS1m4",
            original: "Arbitrum"
          }
        ],
        [
          "USDCarbitrum",
          {
            symbol: "USDC",
            decimals: 6,
            address: "CR4xnGrhsu1fWNPoX4KbTUUtqGMF3mzRLfj4S6YEs1Yo",
            original: "Arbitrum"
          }
        ],
        [
          "WETHoptimism",
          {
            symbol: "WETH",
            decimals: 8,
            address: "8M6d63oL7dvMZ1gNbgGe3h8afMSWJEKEhtPTFM2u8h3c",
            original: "Optimism"
          }
        ],
        [
          "WETHbase",
          {
            symbol: "WETH",
            decimals: 8,
            address: "DWXe1hxpnb8LAH21iyXcjvMbiAGzoYyuCVQtRLvZdLYd",
            original: "Base"
          }
        ],
        [
          "USDCbase",
          {
            symbol: "USDC",
            decimals: 6,
            address: "EfqRM8ZGWhDTKJ7BHmFvNagKVu3AxQRDQs8WMMaoBCu6",
            original: "Base"
          }
        ],
        [
          "tBTC",
          {
            symbol: "tBTC",
            decimals: 8,
            address: "25rXTx9zDZcHyTav5sRqM6YBvTGu9pPH9yv83uAEqbgG",
            original: "Ethereum"
          }
        ],
        [
          "tBTCsol",
          {
            symbol: "tBTC",
            decimals: 8,
            address: "6DNSN2BJsaPFdFFc1zP37kkeNe4Usc1Sqkzr9C9vPWcU"
          }
        ],
        [
          "wstETH",
          {
            symbol: "wstETH",
            decimals: 8,
            address: "ZScHuTtqZukUrtZS43teTKGs2VqkKL8k4QCouR2n6Uo",
            original: "Ethereum"
          }
        ],
        [
          "PYTH",
          {
            symbol: "PYTH",
            decimals: 6,
            address: "HZ1JovNiVvGrGNiiYvEozEVgZ58xaU3RKwX8eACQBCt3"
          }
        ]
      ]
    ],
    [
      "Sui",
      [
        [
          "WETH",
          {
            symbol: "WETH",
            decimals: 8,
            address: "0xaf8cd5edc19c4512f4259f0bee101a40d41ebed738ade5874359610ef8eeced5::coin::COIN",
            original: "Ethereum"
          }
        ],
        [
          "USDCeth",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0x5d4b302506645c37ff133b98c4b50a5ae14841659738d6d733d59d0d217a93bf::coin::COIN",
            original: "Ethereum"
          }
        ],
        [
          "WBTC",
          {
            symbol: "WBTC",
            decimals: 8,
            address: "0x27792d9fed7f9844eb4839566001bb6f6cb4804f66aa2da6fe1ee242d896881::coin::COIN",
            original: "Ethereum"
          }
        ],
        [
          "USDT",
          {
            symbol: "USDT",
            decimals: 6,
            address: "0xc060006111016b8a020ad5b33834984a437aaa7d3c74c18e09a95d48aceab08c::coin::COIN",
            original: "Ethereum"
          }
        ],
        [
          "WMATIC",
          {
            symbol: "WMATIC",
            decimals: 8,
            address: "0xdbe380b13a6d0f5cdedd58de8f04625263f113b3f9db32b3e1983f49e2841676::coin::COIN",
            original: "Polygon"
          }
        ],
        [
          "USDCpolygon",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0x5c8c9082401982e8c2519a5c12883a5475295bf5cec4a0a13c26d35dd9a20d73::coin::COIN",
            original: "Polygon"
          }
        ],
        [
          "WBNB",
          {
            symbol: "WBNB",
            decimals: 8,
            address: "0xb848cce11ef3a8f62eccea6eb5b35a12c4c2b1ee1af7755d02d7bd6218e8226f::coin::COIN",
            original: "Bsc"
          }
        ],
        [
          "USDCbnb",
          {
            symbol: "USDC",
            decimals: 8,
            address: "0x909cba62ce96d54de25bec9502de5ca7b4f28901747bbf96b76c2e63ec5f1cba::coin::COIN",
            original: "Bsc"
          }
        ],
        [
          "WAVAX",
          {
            symbol: "WAVAX",
            decimals: 8,
            address: "0x1e8b532cca6569cab9f9b9ebc73f8c13885012ade714729aa3b450e0339ac766::coin::COIN",
            original: "Avalanche"
          }
        ],
        [
          "USDCavax",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0xe596782fbaebef51ae99ffac8731aed98a80642b9dc193ed659c97fbc2cc0f84::coin::COIN",
            original: "Avalanche"
          }
        ],
        [
          "CELO",
          {
            symbol: "CELO",
            decimals: 8,
            address: "0xa198f3be41cda8c07b3bf3fee02263526e535d682499806979a111e88a5a8d0f::coin::COIN",
            original: "Celo"
          }
        ],
        [
          "WGLMR",
          {
            symbol: "WGLMR",
            decimals: 8,
            address: "0x66f87084e49c38f76502d17f87d17f943f183bb94117561eb573e075fdc5ff75::coin::COIN",
            original: "Moonbeam"
          }
        ],
        [
          "WSOL",
          {
            symbol: "WSOL",
            decimals: 8,
            address: "0xb7844e289a8410e50fb3ca48d69eb9cf29e27d223ef90353fe1bd8e27ff8f3f8::coin::COIN",
            original: "Solana"
          }
        ],
        [
          "USDCsol",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0xb231fcda8bbddb31f2ef02e6161444aec64a514e2c89279584ac9806ce9cf037::coin::COIN",
            original: "Solana"
          }
        ],
        [
          "SUI",
          {
            symbol: "SUI",
            decimals: 9,
            address: "0x2::sui::SUI"
          }
        ],
        [
          "APT",
          {
            symbol: "APT",
            decimals: 8,
            address: "0x3a5143bb1196e3bcdfab6203d1683ae29edd26294fc8bfeafe4aaa9d2704df37::coin::COIN",
            original: "Aptos"
          }
        ],
        [
          "WETHarbitrum",
          {
            symbol: "WETH",
            decimals: 8,
            address: "0x33744e7df340a4d01c23f6b18c13563f767545ea95f976f8045f056358419da3::coin::COIN",
            original: "Arbitrum"
          }
        ],
        [
          "USDCarbitrum",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0xc3f8927de33d3deb52c282a836082a413bc73c6ee0bd4d7ec7e3b6b4c28e9abf::coin::COIN",
            original: "Arbitrum"
          }
        ],
        [
          "WETHoptimism",
          {
            symbol: "WETH",
            decimals: 8,
            address: "0xaab14ec22908de73d1b0619f5e03842398f8e68262981bd35ef44b42d22b23a::coin::COIN",
            original: "Optimism"
          }
        ],
        [
          "USDCoptimism",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0x6037801f060f0f54b3817bca05e3c8b9b9ffaa2da8e93fd5b80fa662aa3c9e55::coin::COIN",
            original: "Optimism"
          }
        ],
        [
          "WETHbase",
          {
            symbol: "WETH",
            decimals: 8,
            address: "0xaecbc804fa7ca7cffc74c9a05eb6ae86fda0c68375b5c1724204a1065bcb239a::coin::COIN",
            original: "Base"
          }
        ],
        [
          "USDCbase",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0x7e3e74afcc1913aa9491c8cee89b02131a6e5519b090f16b54321835c1241cfb::coin::COIN",
            original: "Base"
          }
        ],
        [
          "tBTC",
          {
            symbol: "tBTC",
            decimals: 8,
            address: "0xbc3a676894871284b3ccfb2eec66f428612000e2a6e6d23f592ce8833c27c973::coin::COIN",
            original: "Ethereum"
          }
        ],
        [
          "WKLAY",
          {
            symbol: "WKLAY",
            decimals: 8,
            address: "0xa5ec915864d7f37b25ca9144b2db6ebcf29e73603c2ccf9d0e765adcd9049a98::coin::COIN",
            original: "Klaytn"
          }
        ],
        [
          "PYTH",
          {
            symbol: "PYTH",
            decimals: 6,
            address: "0x9c6d76eb273e6b5ba2ec8d708b7fa336a5531f6be59f326b5be8d4d8b12348a4::coin::COIN",
            original: "Solana"
          }
        ]
      ]
    ],
    [
      "Aptos",
      [
        [
          "WETH",
          {
            symbol: "WETH",
            decimals: 8,
            address: "0xcc8a89c8dce9693d354449f1f73e60e14e347417854f029db5bc8e7454008abb::coin::T",
            original: "Ethereum"
          }
        ],
        [
          "USDCeth",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0x5e156f1207d0ebfa19a9eeff00d62a282278fb8719f4fab3a586a0a2c0fffbea::coin::T",
            original: "Ethereum"
          }
        ],
        [
          "WBTC",
          {
            symbol: "WBTC",
            decimals: 8,
            address: "0xae478ff7d83ed072dbc5e264250e67ef58f57c99d89b447efd8a0a2e8b2be76e::coin::T",
            original: "Ethereum"
          }
        ],
        [
          "USDT",
          {
            symbol: "USDT",
            decimals: 6,
            address: "0xa2eda21a58856fda86451436513b867c97eecb4ba099da5775520e0f7492e852::coin::T",
            original: "Ethereum"
          }
        ],
        [
          "DAI",
          {
            symbol: "DAI",
            decimals: 8,
            address: "0x407a220699982ebb514568d007938d2447d33667e4418372ffec1ddb24491b6c::coin::T",
            original: "Ethereum"
          }
        ],
        [
          "BUSD",
          {
            symbol: "BUSD",
            decimals: 8,
            address: "0x77400d2f56a01bad2d7c8c6fa282f62647ce3c03f43f2a8742e47ea01a91e24a::coin::T",
            original: "Ethereum"
          }
        ],
        [
          "WMATIC",
          {
            symbol: "WMATIC",
            decimals: 8,
            address: "0x6781088e2a1629d38eda521467af4a8ca7bfa7e5516338017940389595c85c0f::coin::T",
            original: "Polygon"
          }
        ],
        [
          "USDCpolygon",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0xc5fd7820e9f053e6dd8e7dd8ca3ce8e9b10d200ba1692bdeb7a035217180ad4a::coin::T",
            original: "Polygon"
          }
        ],
        [
          "WBNB",
          {
            symbol: "WBNB",
            decimals: 8,
            address: "0x6312bc0a484bc4e37013befc9949df2d7c8a78e01c6fe14a34018449d136ba86::coin::T",
            original: "Bsc"
          }
        ],
        [
          "USDCbnb",
          {
            symbol: "USDC",
            decimals: 8,
            address: "0x79a6ed7a0607fdad2d18d67d1a0e552d4b09ebce5951f1e5c851732c02437595::coin::T",
            original: "Bsc"
          }
        ],
        [
          "WAVAX",
          {
            symbol: "WAVAX",
            decimals: 8,
            address: "0x5b1bbc25524d41b17a95dac402cf2f584f56400bf5cc06b53c36b331b1ec6e8f::coin::T",
            original: "Avalanche"
          }
        ],
        [
          "USDCavax",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0x39d84c2af3b0c9895b45d4da098049e382c451ba63bec0ce0396ff7af4bb5dff::coin::T",
            original: "Avalanche"
          }
        ],
        [
          "CELO",
          {
            symbol: "CELO",
            decimals: 8,
            address: "0xac0c3c35d50f6ef00e3b4db6998732fe9ed6331384925fe8ec95fcd7745a9112::coin::T",
            original: "Celo"
          }
        ],
        [
          "WGLMR",
          {
            symbol: "WGLMR",
            decimals: 8,
            address: "0x7ab1283a7b13c4254d4e1f803d7ce6578442c1d7a40d0faee41cd48ba4884c8a::coin::T",
            original: "Moonbeam"
          }
        ],
        [
          "WSOL",
          {
            symbol: "WSOL",
            decimals: 8,
            address: "0xdd89c0e695df0692205912fb69fc290418bed0dbe6e4573d744a6d5e6bab6c13::coin::T",
            original: "Solana"
          }
        ],
        [
          "USDCsol",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0xc91d826e29a3183eb3b6f6aa3a722089fdffb8e9642b94c5fcd4c48d035c0080::coin::T",
            original: "Solana"
          }
        ],
        [
          "SUI",
          {
            symbol: "SUI",
            decimals: 8,
            address: "0xa72a97e872be9ee3d2f14d56fd511eb7e4a53f4055be3a267d8602e7685b41c0::coin::T",
            original: "Sui"
          }
        ],
        [
          "APT",
          {
            symbol: "APT",
            decimals: 8,
            address: "0x1::aptos_coin::AptosCoin"
          }
        ],
        [
          "WETHarbitrum",
          {
            symbol: "WETH",
            decimals: 8,
            address: "0x0e977796d7bfb3263609b90dffd264c7bd078ce35dac42b55302858d9fa3452b::coin::T",
            original: "Arbitrum"
          }
        ],
        [
          "USDCarbitrum",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0xca3a2c28bc8c6c762f752dd2a4ebbfd00356ca99977ce6636e3af5897124a87a::coin::T",
            original: "Arbitrum"
          }
        ],
        [
          "WETHoptimism",
          {
            symbol: "WETH",
            decimals: 8,
            address: "0x6a7a7f36ef5e2d0e65fcf72669c20d514d68298b0f76c7554517208f73260aaf::coin::T",
            original: "Optimism"
          }
        ],
        [
          "USDCoptimism",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0x4f6ecb05a797902d472abc2f5804bde93a53d8b75f14f767824cdb1623a4ee83::coin::T",
            original: "Optimism"
          }
        ],
        [
          "WETHbase",
          {
            symbol: "WETH",
            decimals: 8,
            address: "0x5b5f14781164cf77185a7b6acd8e4f3cbb7e7cfb1cd5760d2b8af81075fc153d::coin::T",
            original: "Base"
          }
        ],
        [
          "USDCbase",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0xfcc4fcd734d5b8578fb629d238d15264a49eca6165c7444c21feec3b4962eb88::coin::T",
            original: "Base"
          }
        ],
        [
          "tBTC",
          {
            symbol: "tBTC",
            decimals: 8,
            address: "0x9d5a0f8215301fa8096df332b1533f6328f18c32fbac2a7089cfbea73b3068a7::coin::T",
            original: "Ethereum"
          }
        ],
        [
          "WKLAY",
          {
            symbol: "WKLAY",
            decimals: 8,
            address: "0x539b652f8230a0e42adaeda4706b5639893d22362eda6ea897493c210cb48219::coin::T",
            original: "Klaytn"
          }
        ],
        [
          "PYTH",
          {
            symbol: "PYTH",
            decimals: 6,
            address: "0x770211b47954e15bec1a4271bf33bacebc2d2adb43b7dc1ca45efa787615dd4c::coin::T",
            original: "Solana"
          }
        ]
      ]
    ],
    [
      "Base",
      [
        [
          "WETH",
          {
            symbol: "WETH",
            decimals: 18,
            address: "0x71b35ECb35104773537f849FBC353F81303A5860",
            original: "Ethereum"
          }
        ],
        [
          "USDCeth",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0xec267C53f53807c2337C257f8AC3Fc3cC07cc0ed",
            original: "Ethereum"
          }
        ],
        [
          "WBTC",
          {
            symbol: "WBTC",
            decimals: 8,
            address: "0xE6396f780b543dF16ee3b784D789c75B68319db0",
            original: "Ethereum"
          }
        ],
        [
          "USDT",
          {
            symbol: "USDT",
            decimals: 6,
            address: "0xFf0C62A4979400841eFaA6faADb07Ac7d5C98b27",
            original: "Ethereum"
          }
        ],
        [
          "DAI",
          {
            symbol: "DAI",
            decimals: 18,
            address: "0x617Edadb51BfB43A44Bb91C7402129C23bA52381",
            original: "Ethereum"
          }
        ],
        [
          "WMATIC",
          {
            symbol: "WMATIC",
            decimals: 18,
            address: "0xc863399E5c5C4011B1DC3fB602902C77BA72B709",
            original: "Polygon"
          }
        ],
        [
          "USDCpolygon",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0xFe1579BAc60363c8572CB30Bf4DD1Fd85811BBF8",
            original: "Polygon"
          }
        ],
        [
          "WBNB",
          {
            symbol: "WBNB",
            decimals: 18,
            address: "0x7fdAa50d7399ac436943028edA6ed9a1BD89509f",
            original: "Bsc"
          }
        ],
        [
          "USDCbnb",
          {
            symbol: "USDC",
            decimals: 18,
            address: "0x68E2b07F92ed506f92935d7359ECA84D5342dbb4",
            original: "Bsc"
          }
        ],
        [
          "WAVAX",
          {
            symbol: "WAVAX",
            decimals: 18,
            address: "0xc449A60A31E1eebFE83c42E9465fd4Dc318aE9a7",
            original: "Avalanche"
          }
        ],
        [
          "USDCavax",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0xD83385fE100E20c269a5975D4Bf92525BcE09F87",
            original: "Avalanche"
          }
        ],
        [
          "CELO",
          {
            symbol: "CELO",
            decimals: 18,
            address: "0x74df3823aA29D278cAD0A3632fCB56C896a38eD4",
            original: "Celo"
          }
        ],
        [
          "WGLMR",
          {
            symbol: "WGLMR",
            decimals: 18,
            address: "0xfdB7311BeC3b2CcCF8407d0585f81B97b3b5eff1",
            original: "Moonbeam"
          }
        ],
        [
          "WSOL",
          {
            symbol: "WSOL",
            decimals: 9,
            address: "0x1C61629598e4a901136a81BC138E5828dc150d67",
            original: "Solana"
          }
        ],
        [
          "USDCsol",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0xe8CE40EBBB844142400D21558a2F1c9683d69139",
            original: "Solana"
          }
        ],
        [
          "SUI",
          {
            symbol: "SUI",
            decimals: 9,
            address: "0x36c6FBF7B49bF65f5F82b674af219C05b2a4aDD1",
            original: "Sui"
          }
        ],
        [
          "APT",
          {
            symbol: "APT",
            decimals: 8,
            address: "0x1d36126289Be1658297A35CC3EB2BB80A7D7A04b",
            original: "Aptos"
          }
        ],
        [
          "WETHarbitrum",
          {
            symbol: "WETH",
            decimals: 18,
            address: "0x9D36e0edb8BBaBeec5edE8a218dc2B9a6Fce494F",
            original: "Arbitrum"
          }
        ],
        [
          "USDCarbitrum",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0xb96B82Cd6D45d98Fb6897D16A5E4EE888329C513",
            original: "Arbitrum"
          }
        ],
        [
          "WETHoptimism",
          {
            symbol: "WETH",
            decimals: 18,
            address: "0xCb725aC8d9985D3bE306Dd9e1517d3702929176c",
            original: "Optimism"
          }
        ],
        [
          "USDCoptimism",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0xc6bfBeb3002aD563D2d1f72614C61C83Bf147Acd",
            original: "Optimism"
          }
        ],
        [
          "ETHbase",
          {
            symbol: "ETH",
            decimals: 18,
            address: "native",
            wrappedKey: "WETHbase"
          }
        ],
        [
          "WETHbase",
          {
            symbol: "WETH",
            decimals: 18,
            address: "0x4200000000000000000000000000000000000006"
          }
        ],
        [
          "USDCbase",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913"
          }
        ],
        [
          "wstETHbase",
          {
            symbol: "wstETH",
            decimals: 18,
            address: "0xc1CBa3fCea344f92D9239c08C0568f6F2F0ee452"
          }
        ],
        [
          "tBTC",
          {
            symbol: "tBTC",
            decimals: 18,
            address: "0x9EE95E6Bd1B3C5740F105d6fb06b8BDeF64Eec70",
            original: "Ethereum"
          }
        ],
        [
          "tBTCarbitrum",
          {
            symbol: "tBTC",
            decimals: 18,
            address: "0x56D0873e0eCA4a56063e1BF945788365666CFBFC",
            original: "Arbitrum"
          }
        ],
        [
          "tBTCbase",
          {
            symbol: "tBTC",
            decimals: 18,
            address: "0x236aa50979D5f3De3Bd1Eeb40E81137F22ab794b"
          }
        ],
        [
          "wstETH",
          {
            symbol: "wstETH",
            decimals: 18,
            address: "0xEd4e2FD35161c3c0e33cA187fce64C70d44Ce32b",
            original: "Ethereum"
          }
        ],
        [
          "WKLAY",
          {
            symbol: "WKLAY",
            decimals: 18,
            address: "0x41c433c146c47Dc53FC48cDc69e406e365e298E1",
            original: "Klaytn"
          }
        ],
        [
          "PYTH",
          {
            symbol: "PYTH",
            decimals: 6,
            address: "0x4c5d8A75F3762c1561D96f177694f67378705E98",
            original: "Solana"
          }
        ],
        [
          "USDTbase",
          {
            symbol: "USDT",
            decimals: 6,
            address: "0xfde4C96c8593536E31F229EA8f37b2ADa2699bb2"
          }
        ]
      ]
    ],
    [
      "Arbitrum",
      [
        [
          "WETH",
          {
            symbol: "WETH",
            decimals: 18,
            address: "0xD8369C2EDA18dD6518eABb1F85BD60606dEb39Ec",
            original: "Ethereum"
          }
        ],
        [
          "USDCeth",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0xC96F2715E2a242d50D1b0bC923dbe1740b8eCf18",
            original: "Ethereum"
          }
        ],
        [
          "WBTC",
          {
            symbol: "WBTC",
            decimals: 8,
            address: "0x397846a8078d4845c7f5c6Ca76aeBbcFDc044fAe",
            original: "Ethereum"
          }
        ],
        [
          "USDT",
          {
            symbol: "USDT",
            decimals: 6,
            address: "0xE4728F3E48E94C6DA2B53610E677cc241DAFB134",
            original: "Ethereum"
          }
        ],
        [
          "DAI",
          {
            symbol: "DAI",
            decimals: 18,
            address: "0x5c4f2FEFB97F7DF09E762d95C83f0Ccf8bCe8234",
            original: "Ethereum"
          }
        ],
        [
          "WMATIC",
          {
            symbol: "WMATIC",
            decimals: 18,
            address: "0x3ab0E28C3F56616aD7061b4db38aE337E3809AEA",
            original: "Polygon"
          }
        ],
        [
          "USDCpolygon",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0x599ADB10E6A012dF34935D47407450f6D7170e3C",
            original: "Polygon"
          }
        ],
        [
          "WBNB",
          {
            symbol: "WBNB",
            decimals: 18,
            address: "0x7AF00405916D823eDb1121546EfA6F4972B51b84",
            original: "Bsc"
          }
        ],
        [
          "USDCbnb",
          {
            symbol: "USDC",
            decimals: 18,
            address: "0x1a0590F951bc9C3818Ce75ba5Bbe92831b2cf57e",
            original: "Bsc"
          }
        ],
        [
          "WAVAX",
          {
            symbol: "WAVAX",
            decimals: 18,
            address: "0x565609fAF65B92F7be02468acF86f8979423e514",
            original: "Avalanche"
          }
        ],
        [
          "USDCavax",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0x93e0FcbEd43CD6fC30DF00CcBD4669718dc74e77",
            original: "Avalanche"
          }
        ],
        [
          "CELO",
          {
            symbol: "CELO",
            decimals: 18,
            address: "0x4E51aC49bC5e2d87e0EF713E9e5AB2D71EF4F336",
            original: "Celo"
          }
        ],
        [
          "WGLMR",
          {
            symbol: "WGLMR",
            decimals: 18,
            address: "0x944C5b67a03e6Cb93Ae1E4B70081f13b04CDB6Bd",
            original: "Moonbeam"
          }
        ],
        [
          "WSOL",
          {
            symbol: "WSOL",
            decimals: 9,
            address: "0x2bcC6D6CdBbDC0a4071e48bb3B969b06B3330c07",
            original: "Solana"
          }
        ],
        [
          "USDCsol",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0x3870546cfd600ba87e4180686d29dC993A45d3B7",
            original: "Solana"
          }
        ],
        [
          "SUI",
          {
            symbol: "SUI",
            decimals: 9,
            address: "0xCF79d86B8a830030aF6D835737d6eac3bE823fD7",
            original: "Sui"
          }
        ],
        [
          "APT",
          {
            symbol: "APT",
            decimals: 8,
            address: "0x4EdeF400eDe5309240814b5FC403F224504604e9",
            original: "Aptos"
          }
        ],
        [
          "ETHarbitrum",
          {
            symbol: "ETH",
            decimals: 18,
            address: "native",
            wrappedKey: "WETHarbitrum"
          }
        ],
        [
          "WETHarbitrum",
          {
            symbol: "WETH",
            decimals: 18,
            address: "0x82af49447d8a07e3bd95bd0d56f35241523fbab1"
          }
        ],
        [
          "USDCarbitrum",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831"
          }
        ],
        [
          "WETHoptimism",
          {
            symbol: "WETH",
            decimals: 18,
            address: "0xB1fC645a86fB5085e12D8BDDb77702F728D2A26F",
            original: "Optimism"
          }
        ],
        [
          "USDCoptimism",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0x3A5C2Da9E30741cb59a5e9446A23A86886fC9DC2",
            original: "Optimism"
          }
        ],
        [
          "WETHbase",
          {
            symbol: "WETH",
            decimals: 18,
            address: "0xBAfbCB010D920e0Dab9DFdcF634De1B777028a85",
            original: "Base"
          }
        ],
        [
          "USDCbase",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0x8619F97D4d08382548F536E5CE1D3e0D9bA40326",
            original: "Base"
          }
        ],
        [
          "tBTC",
          {
            symbol: "tBTC",
            decimals: 18,
            address: "0x57723abc582DBfE11Ea01f1A1f48aEE20bD65D73",
            original: "Ethereum"
          }
        ],
        [
          "tBTCpolygon",
          {
            symbol: "tBTC",
            decimals: 18,
            address: "0x3bab04bDFd2Dc3640c2B9390A2Da05bC1192D482",
            original: "Polygon"
          }
        ],
        [
          "tBTCoptimism",
          {
            symbol: "tBTC",
            decimals: 18,
            address: "0x2519010b6585247BcDC8BcDa5C8730Be754b8c76",
            original: "Optimism"
          }
        ],
        [
          "tBTCarbitrum",
          {
            symbol: "tBTC",
            decimals: 18,
            address: "0x6c84a8f1c29108F47a79964b5Fe888D4f4D0dE40"
          }
        ],
        [
          "wstETH",
          {
            symbol: "wstETH",
            decimals: 18,
            address: "0xf2717122Dfdbe988ae811E7eFB157aAa07Ff9D0F",
            original: "Ethereum"
          }
        ],
        [
          "wstETHarbitrum",
          {
            symbol: "wstETH",
            decimals: 18,
            address: "0x5979D7b546E38E414F7E9822514be443A4800529"
          }
        ],
        [
          "WKLAY",
          {
            symbol: "WKLAY",
            decimals: 18,
            address: "0xFA95f6c796E54F9C4a99392CAE84410a25794BB3",
            original: "Klaytn"
          }
        ],
        [
          "PYTH",
          {
            symbol: "PYTH",
            decimals: 6,
            address: "0xE4D5c6aE46ADFAF04313081e8C0052A30b6Dd724",
            original: "Solana"
          }
        ],
        [
          "USDTarbitrum",
          {
            symbol: "USDT",
            decimals: 6,
            address: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9"
          }
        ]
      ]
    ],
    [
      "Optimism",
      [
        [
          "WETH",
          {
            symbol: "WETH",
            decimals: 18,
            address: "0xb47bC3ed6D70F04fe759b2529c9bc7377889678f",
            original: "Ethereum"
          }
        ],
        [
          "USDCeth",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0x711e53D031ea9B0bb0C24dD506df11b41AEA419e",
            original: "Ethereum"
          }
        ],
        [
          "WBTC",
          {
            symbol: "WBTC",
            decimals: 8,
            address: "0xB214C19d81c99E75e84706a3aa0A757319023e26",
            original: "Ethereum"
          }
        ],
        [
          "USDT",
          {
            symbol: "USDT",
            decimals: 6,
            address: "0xf6B4185FCf8aF291c0E3927fbEab7046b4f6A8CA",
            original: "Ethereum"
          }
        ],
        [
          "DAI",
          {
            symbol: "DAI",
            decimals: 18,
            address: "0x098EA47D630b46df1E08e389e5e4466119c7dd30",
            original: "Ethereum"
          }
        ],
        [
          "WMATIC",
          {
            symbol: "WMATIC",
            decimals: 18,
            address: "0x8f02B6a32cebcAe44D2Fd17d87966f5B5dD14c6d",
            original: "Polygon"
          }
        ],
        [
          "USDCpolygon",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0xbB1EaB9Eb8fDf65F0E291D013DA07B4b65a27a01",
            original: "Polygon"
          }
        ],
        [
          "WBNB",
          {
            symbol: "WBNB",
            decimals: 18,
            address: "0x6A09fE65ACa27C12573F04aAFa290bD75497E1BC",
            original: "Bsc"
          }
        ],
        [
          "USDCbnb",
          {
            symbol: "USDC",
            decimals: 18,
            address: "0x1C15057d1F3794C934a6cBC1f7EceE934050F219",
            original: "Bsc"
          }
        ],
        [
          "WAVAX",
          {
            symbol: "WAVAX",
            decimals: 18,
            address: "0x8418C1d909842f458c9394886b83F19d62bF1A0D",
            original: "Avalanche"
          }
        ],
        [
          "USDCavax",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0x355f0a8a7ecAeD971b8Fbd50994558291ff2413a",
            original: "Avalanche"
          }
        ],
        [
          "CELO",
          {
            symbol: "CELO",
            decimals: 18,
            address: "0x9b88D293b7a791E40d36A39765FFd5A1B9b5c349",
            original: "Celo"
          }
        ],
        [
          "WGLMR",
          {
            symbol: "WGLMR",
            decimals: 18,
            address: "0xbffD46DFDb8d3a02b8D2E0F864a2cD712090a4D3",
            original: "Moonbeam"
          }
        ],
        [
          "WSOL",
          {
            symbol: "WSOL",
            decimals: 9,
            address: "0xba1Cf949c382A32a09A17B2AdF3587fc7fA664f1",
            original: "Solana"
          }
        ],
        [
          "USDCsol",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0x6F974A6dfD5B166731704Be226795901c45Bb815",
            original: "Solana"
          }
        ],
        [
          "SUI",
          {
            symbol: "SUI",
            decimals: 9,
            address: "0x27A533e438892DA192725b4C9AcA51447F457212",
            original: "Sui"
          }
        ],
        [
          "APT",
          {
            symbol: "APT",
            decimals: 8,
            address: "0xC5B3AC2DF8D8D7AC851F763a5b3Ff23B4A696d59",
            original: "Aptos"
          }
        ],
        [
          "WETHarbitrum",
          {
            symbol: "WETH",
            decimals: 18,
            address: "0x825206E1D29456337769e6f1384101E997C6A732",
            original: "Arbitrum"
          }
        ],
        [
          "USDCarbitrum",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0xa6252F56cc6eEA21165d56744C795F91c8a3Cf68",
            original: "Arbitrum"
          }
        ],
        [
          "ETHoptimism",
          {
            symbol: "ETH",
            decimals: 18,
            address: "native",
            wrappedKey: "WETHoptimism"
          }
        ],
        [
          "WETHoptimism",
          {
            symbol: "WETH",
            decimals: 18,
            address: "0x4200000000000000000000000000000000000006"
          }
        ],
        [
          "USDCoptimism",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0x0b2c639c533813f4aa9d7837caf62653d097ff85"
          }
        ],
        [
          "WETHbase",
          {
            symbol: "WETH",
            decimals: 18,
            address: "0x3F369a664fa665e01e8EB9f20bFcE03A0CAb8971",
            original: "Base"
          }
        ],
        [
          "USDCbase",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0xb931c7BbD87A6e249EaA7355B13927F9c99Bce87",
            original: "Base"
          }
        ],
        [
          "tBTC",
          {
            symbol: "tBTC",
            decimals: 18,
            address: "0xeC0a755664271b87002dDa33CA2484B24aF68912",
            original: "Ethereum"
          }
        ],
        [
          "tBTCpolygon",
          {
            symbol: "tBTC",
            decimals: 18,
            address: "0xE4C32B9eA749fa0342B1C42C01E80028B97c3917",
            original: "Polygon"
          }
        ],
        [
          "tBTCoptimism",
          {
            symbol: "tBTC",
            decimals: 18,
            address: "0x6c84a8f1c29108F47a79964b5Fe888D4f4D0dE40"
          }
        ],
        [
          "tBTCarbitrum",
          {
            symbol: "tBTC",
            decimals: 18,
            address: "0x2390a5131fcba6e47f702172cF4876589E4161c6",
            original: "Arbitrum"
          }
        ],
        [
          "wstETH",
          {
            symbol: "wstETH",
            decimals: 18,
            address: "0x855CFcEEe998c8ca34F9c914F584AbF72dC88B87",
            original: "Ethereum"
          }
        ],
        [
          "wstETHoptimism",
          {
            symbol: "wstETH",
            decimals: 18,
            address: "0x1F32b1c2345538c0c6f582fCB022739c4A194Ebb"
          }
        ],
        [
          "WKLAY",
          {
            symbol: "WKLAY",
            decimals: 18,
            address: "0xbbeF8233a0d10EEAb84E913FaDB337ab9b62F683",
            original: "Klaytn"
          }
        ],
        [
          "PYTH",
          {
            symbol: "PYTH",
            decimals: 6,
            address: "0x99C59ACeBFEF3BBFB7129DC90D1a11DB0E91187f",
            original: "Solana"
          }
        ],
        [
          "USDToptimism",
          {
            symbol: "USDT",
            decimals: 6,
            address: "0x94b008aA00579c1307B0EF2c499aD98a8ce58e58"
          }
        ]
      ]
    ],
    [
      "Wormchain",
      [
        [
          "WETH",
          {
            symbol: "WETH",
            decimals: 8,
            address: "wormhole18csycs4vm6varkp00apuqlsm7v4twg8jsljk8wfdd7cghr7g4rtslwqndm",
            original: "Ethereum"
          }
        ],
        [
          "USDCeth",
          {
            symbol: "USDC",
            decimals: 6,
            address: "wormhole1utjx3594tlvfw4375esgu72wa4sdgf0q7x4ye27husf5kvuzp5rsr72gdq",
            original: "Ethereum"
          }
        ],
        [
          "WBTC",
          {
            symbol: "WBTC",
            decimals: 8,
            address: "wormhole1nz0r0au8aj6dc00wmm3ufy4g4k86rjzlr8wkf92cktdlps5lgfcqxnx9yk",
            original: "Ethereum"
          }
        ],
        [
          "USDT",
          {
            symbol: "USDT",
            decimals: 6,
            address: "wormhole1w27ekqvvtzfanfxnkw4jx2f8gdfeqwd3drkee3e64xat6phwjg0savgmhw",
            original: "Ethereum"
          }
        ],
        [
          "DAI",
          {
            symbol: "DAI",
            decimals: 8,
            address: "wormhole1chejx4qqtvwxy6684yrsmf6pylancxqhk3vsmtleg5ta3zrffljqfscg87",
            original: "Ethereum"
          }
        ],
        [
          "BUSD",
          {
            symbol: "BUSD",
            decimals: 8,
            address: "wormhole1msyushf6d76u9wupuvm6jdvc0x4trmv5w5kxr0hyt7n9npp233usg7pkhm",
            original: "Ethereum"
          }
        ],
        [
          "WMATIC",
          {
            symbol: "WMATIC",
            decimals: 8,
            address: "wormhole1xmpenz0ykxfy8rxr3yc3d4dtqq4dpas4zz3xl6sh873us3vajlpszn4ph7",
            original: "Polygon"
          }
        ],
        [
          "WBNB",
          {
            symbol: "WBNB",
            decimals: 8,
            address: "wormhole169nr66h9gcsfljvsnxnqfjakskcjt6ac8f58wqjuagu79m540teqfvaal4",
            original: "Bsc"
          }
        ],
        [
          "USDCbnb",
          {
            symbol: "USDC",
            decimals: 8,
            address: "wormhole1g3acw7aumaj3r348cqn4kazrehlmn822w9p46sqwztnke27h3lysxj4ddr",
            original: "Bsc"
          }
        ],
        [
          "WAVAX",
          {
            symbol: "WAVAX",
            decimals: 8,
            address: "wormhole1ml922hnp59jtq9a87arekvx60ezehwlg2v3j5pduplwkenfa68ksgmzxwr",
            original: "Avalanche"
          }
        ],
        [
          "USDCavax",
          {
            symbol: "USDC",
            decimals: 6,
            address: "wormhole1gwm6mrnse9atzf4mer4dnrz64mp6pa75wpsxywu8gymt9fwsk46sfr372u",
            original: "Avalanche"
          }
        ],
        [
          "CELO",
          {
            symbol: "CELO",
            decimals: 8,
            address: "wormhole1kqey3a6k26kyensq7elcpx229tlj4d3qlshwhjq5xjm8dcdvu60qtef8k9",
            original: "Celo"
          }
        ],
        [
          "WGLMR",
          {
            symbol: "WGLMR",
            decimals: 8,
            address: "wormhole1gzuv84xrwwhxhf0f62av279vfyrfrm7x58fcnadlr5m90gnx223ses2st0",
            original: "Moonbeam"
          }
        ],
        [
          "WSOL",
          {
            symbol: "WSOL",
            decimals: 8,
            address: "wormhole1wn625s4jcmvk0szpl85rj5azkfc6suyvf75q6vrddscjdphtve8sca0pvl",
            original: "Solana"
          }
        ],
        [
          "USDCsol",
          {
            symbol: "USDC",
            decimals: 6,
            address: "wormhole17fr8awnysyv3nt5je4strczdupssl8u9jqam890jfv72sh32yyqqhtg3ry",
            original: "Solana"
          }
        ],
        [
          "SUI",
          {
            symbol: "SUI",
            decimals: 8,
            address: "wormhole19hlynxzedrlqv99v6qscww7d3crhl86qtd0vprpltg5g9xx6jk9q6ya33y",
            original: "Sui"
          }
        ],
        [
          "APT",
          {
            symbol: "APT",
            decimals: 8,
            address: "wormhole1f9sxjn0qu8xylcpzlvnhrefnatndqxnrajfrnr5h97hegnmsdqhsh6juc0",
            original: "Aptos"
          }
        ],
        [
          "WETHarbitrum",
          {
            symbol: "WETH",
            decimals: 8,
            address: "wormhole18nlwscr7290j463vcptqlgqudycry2rdnw2ysltpc2nqefk3353s808rl9",
            original: "Arbitrum"
          }
        ],
        [
          "WETHoptimism",
          {
            symbol: "WETH",
            decimals: 8,
            address: "wormhole1ev8rhdflmlq6de5g7ttj585fhuv3jfhnuhfzyh7qrswhzaq2tkqswxz6y3",
            original: "Optimism"
          }
        ],
        [
          "USDCoptimism",
          {
            symbol: "USDC",
            decimals: 6,
            address: "wormhole1snw0qugpjcxwtxzzkqt5guwavq85eumxzeagql2u2m662xrtnjuqyj3pkj",
            original: "Optimism"
          }
        ],
        [
          "USDCbase",
          {
            symbol: "USDC",
            decimals: 6,
            address: "wormhole1edkult6zudk6ld23fesjfrehux35q86engsq5jlycl0e4upkz8mqkgcprf",
            original: "Base"
          }
        ],
        [
          "tBTC",
          {
            symbol: "tBTC",
            decimals: 8,
            address: "wormhole1nu9wf9dw384attnpu0pwfet5fajn05w2ex4r07mghvk3xcwrt2yq5uutp5",
            original: "Ethereum"
          }
        ],
        [
          "tBTCpolygon",
          {
            symbol: "tBTC",
            decimals: 8,
            address: "wormhole1uj24zecnaxz7ftz0sh6dsayfene4w3yptwg0422kves9duel67vsr7hlyz",
            original: "Polygon"
          }
        ],
        [
          "tBTCarbitrum",
          {
            symbol: "tBTC",
            decimals: 8,
            address: "wormhole1q8ynvqvtw49ln73mn70v4me4q03fvvmhkf2lh4ueam5w4362s2asjmvxtd",
            original: "Arbitrum"
          }
        ],
        [
          "wstETH",
          {
            symbol: "wstETH",
            decimals: 8,
            address: "wormhole1gg6f95cymcfrfzhpek7cf5wl53t5kng52cd2m0krgdlu8k58vd8qezy8pt",
            original: "Ethereum"
          }
        ],
        [
          "WKLAY",
          {
            symbol: "WKLAY",
            decimals: 8,
            address: "wormhole1kyy876kye7k79fuzat532yyqkrzhlr6l7hc7lfa2rk5tygzhy00qrhjgkc",
            original: "Klaytn"
          }
        ]
      ]
    ],
    [
      "Osmosis",
      [
        [
          "WETH",
          {
            symbol: "WETH",
            decimals: 8,
            address: "ibc/62F82550D0B96522361C89B0DA1119DE262FBDFB25E5502BC5101B5C0D0DBAAC",
            original: "Ethereum"
          }
        ],
        [
          "USDCeth",
          {
            symbol: "USDC",
            decimals: 6,
            address: "ibc/6B99DB46AA9FF47162148C1726866919E44A6A5E0274B90912FD17E19A337695",
            original: "Ethereum"
          }
        ],
        [
          "WBTC",
          {
            symbol: "WBTC",
            decimals: 8,
            address: "ibc/E4CD61E1FA3EB04EF1BF924D676AB9FD55E84A0DCF4E78C11CCA0E14E5B42672",
            original: "Ethereum"
          }
        ],
        [
          "USDT",
          {
            symbol: "USDT",
            decimals: 6,
            address: "ibc/2108F2D81CBE328F371AD0CEF56691B18A86E08C3651504E42487D9EE92DDE9C",
            original: "Ethereum"
          }
        ],
        [
          "DAI",
          {
            symbol: "DAI",
            decimals: 8,
            address: "ibc/898ACF6F5DEBF535103BBD52E3E5B70A311AD097B198A152483F69290B4210C0",
            original: "Ethereum"
          }
        ],
        [
          "WMATIC",
          {
            symbol: "WMATIC",
            decimals: 8,
            address: "ibc/03B6D1925A09B3033AA6FA8772202719ABDC51F8CC2A5C26D0A9B19832F2C023",
            original: "Polygon"
          }
        ],
        [
          "WBNB",
          {
            symbol: "WBNB",
            decimals: 8,
            address: "ibc/5394BB30B3C9BD1EE84C9531E5094DDE2490964F518CBE8A4C91F748CE559AF5",
            original: "Bsc"
          }
        ],
        [
          "USDCbnb",
          {
            symbol: "USDC",
            decimals: 8,
            address: "ibc/B28ACEF11D063FA8B1DA73C2F7DA3A1CFCCBC13E96B671698D4860E9367B55BB",
            original: "Bsc"
          }
        ],
        [
          "WAVAX",
          {
            symbol: "WAVAX",
            decimals: 8,
            address: "ibc/22B44C7369EED16089B9840ADE399B80D9483B4E459E67643C96C681D7C463D0",
            original: "Avalanche"
          }
        ],
        [
          "USDCavax",
          {
            symbol: "USDC",
            decimals: 6,
            address: "ibc/0B3C3D06228578334B66B57FBFBA4033216CEB8119B27ACDEE18D92DA5B28D43",
            original: "Avalanche"
          }
        ],
        [
          "CELO",
          {
            symbol: "CELO",
            decimals: 8,
            address: "ibc/83300733052AB5F6E0F0C221E24189B6DF26CC94C73D2F44627627F9DEF4A9C8",
            original: "Celo"
          }
        ],
        [
          "WGLMR",
          {
            symbol: "WGLMR",
            decimals: 8,
            address: "ibc/0F2941B0168D8DB77DA1B6A2D3A95EC04026D3C97FA3BFE8FD1D5D3F983AA518",
            original: "Moonbeam"
          }
        ],
        [
          "WSOL",
          {
            symbol: "WSOL",
            decimals: 8,
            address: "ibc/1E43D59E565D41FB4E54CA639B838FFD5BCFC20003D330A56CB1396231AA1CBA",
            original: "Solana"
          }
        ],
        [
          "USDCsol",
          {
            symbol: "USDC",
            decimals: 6,
            address: "ibc/F08DE332018E8070CC4C68FE06E04E254F527556A614F5F8F9A68AF38D367E45",
            original: "Solana"
          }
        ],
        [
          "SUI",
          {
            symbol: "SUI",
            decimals: 8,
            address: "ibc/B1C287C2701774522570010EEBCD864BCB7AB714711B3AA218699FDD75E832F5",
            original: "Sui"
          }
        ],
        [
          "APT",
          {
            symbol: "APT",
            decimals: 8,
            address: "ibc/A4D176906C1646949574B48C1928D475F2DF56DE0AC04E1C99B08F90BC21ABDE",
            original: "Aptos"
          }
        ],
        [
          "USDCbase",
          {
            symbol: "USDC",
            decimals: 6,
            address: "ibc/8AC0F990290BBEF3AEBFCBF70F902AD954781BB40D07EB76341272800D48D05F",
            original: "Base"
          }
        ],
        [
          "OSMO",
          {
            symbol: "OSMO",
            decimals: 6,
            address: "uosmo"
          }
        ],
        [
          "tBTC",
          {
            symbol: "tBTC",
            decimals: 8,
            address: "ibc/6207D35D2C08F2162575C3C4BFD524226E50639121A273045F1B393AF67DCEB3",
            original: "Ethereum"
          }
        ],
        [
          "wstETH",
          {
            symbol: "wstETH",
            decimals: 8,
            address: "ibc/BF75AE1500CB7EC458E91A11731F1B6AC1F1FE1FA937A88564955ED6A83CA2FB",
            original: "Ethereum"
          }
        ]
      ]
    ],
    [
      "Evmos",
      [
        [
          "WETH",
          {
            symbol: "WETH",
            decimals: 8,
            address: "ibc/4442A8E0D487A49E76EA6606F5DADCF8D0DBDD8499112340C964970DB745EDA2",
            original: "Ethereum"
          }
        ],
        [
          "USDCeth",
          {
            symbol: "USDC",
            decimals: 6,
            address: "ibc/0C19171CDC59451F91D2749CDEA63355532DCD5D8904CCBAC4953290E16AB8FD",
            original: "Ethereum"
          }
        ],
        [
          "WBTC",
          {
            symbol: "WBTC",
            decimals: 8,
            address: "ibc/46C5DA1CB61C5BAA8730ABA467ADD58DE0333B075CACE28BC87E64AE8C9CA051",
            original: "Ethereum"
          }
        ],
        [
          "USDT",
          {
            symbol: "USDT",
            decimals: 6,
            address: "ibc/C9072A294F5649D64E87A6998DD750576881E454CACCDAF7376EFC0FA243808D",
            original: "Ethereum"
          }
        ],
        [
          "USDCbnb",
          {
            symbol: "USDC",
            decimals: 8,
            address: "ibc/8E08C01546EF346F7E9A3600DDBC88943ADF3B20A67F1F2DD7B83D85613BCCAB",
            original: "Bsc"
          }
        ],
        [
          "WAVAX",
          {
            symbol: "WAVAX",
            decimals: 8,
            address: "ibc/2EA2FE172078576E62DA20F14EEED12B26611D93150FE1D68E1AAE00479AC335",
            original: "Avalanche"
          }
        ],
        [
          "USDCavax",
          {
            symbol: "USDC",
            decimals: 6,
            address: "ibc/39913E647C3549D663B1ED7F0745E1779515170C5215B98B2C8410B4C073AD30",
            original: "Avalanche"
          }
        ],
        [
          "WSOL",
          {
            symbol: "WSOL",
            decimals: 8,
            address: "ibc/4443218F584A7AB2DFBCF93872D6E5B6967A11C53515DDF45A2CF387C54BD73A",
            original: "Solana"
          }
        ],
        [
          "WETHarbitrum",
          {
            symbol: "WETH",
            decimals: 8,
            address: "ibc/9E2E7B4A53409267CD686F4EB67969C2602A0F5FF9BDB1082B00E71CC4815DDE",
            original: "Arbitrum"
          }
        ],
        [
          "EVMOS",
          {
            symbol: "EVMOS",
            decimals: 18,
            address: "aevmos"
          }
        ]
      ]
    ],
    [
      "Kujira",
      [
        [
          "WETH",
          {
            symbol: "WETH",
            decimals: 8,
            address: "ibc/7D9D28CABB49A4BB1A50C3B7E4544BFDBC5DDFAEB84A7787755A34CE7196CE15",
            original: "Ethereum"
          }
        ],
        [
          "USDCeth",
          {
            symbol: "USDC",
            decimals: 6,
            address: "ibc/C5EADE2C526B9629D230AC02A97644984ACB7C2F9A6C85126D1025CB0DA42588",
            original: "Ethereum"
          }
        ],
        [
          "WBTC",
          {
            symbol: "WBTC",
            decimals: 8,
            address: "ibc/B2C7F21B604E3974A7DA5DAA9395905F2F3C85392F8A221CFDF62E4A9F4E48E4",
            original: "Ethereum"
          }
        ],
        [
          "DAI",
          {
            symbol: "DAI",
            decimals: 8,
            address: "ibc/3CE8A3DE4AE5AE2B4B8C03B2B227CC284732EDC849E506615FF2AA3D8EB1BAFC",
            original: "Ethereum"
          }
        ],
        [
          "WAVAX",
          {
            symbol: "WAVAX",
            decimals: 8,
            address: "ibc/28E7241F6508EB4692C721E91201377323796EF2758CCD83D220A40EAD32601E",
            original: "Avalanche"
          }
        ],
        [
          "USDCavax",
          {
            symbol: "USDC",
            decimals: 6,
            address: "ibc/F9F41DB8DA49EA6AB9EB4B2C9E0ECDC2502ABDA2FE728B85994BF31240CBC163",
            original: "Avalanche"
          }
        ],
        [
          "CELO",
          {
            symbol: "CELO",
            decimals: 8,
            address: "ibc/4ACD155D71182398277CBD2C630A7C8C5F0F16FFF77965FDE4C845A4CDE2D60C",
            original: "Celo"
          }
        ],
        [
          "WGLMR",
          {
            symbol: "WGLMR",
            decimals: 8,
            address: "ibc/3D337ECC89A8421DD6F33C4B7DDE9D4A18D728A4A688BA30E41F466EC8DD3869",
            original: "Moonbeam"
          }
        ],
        [
          "WSOL",
          {
            symbol: "WSOL",
            decimals: 8,
            address: "ibc/E5CA126979E2FFB4C70C072F8094D07ECF27773B37623AD2BF7582AD0726F0F3",
            original: "Solana"
          }
        ],
        [
          "SUI",
          {
            symbol: "SUI",
            decimals: 8,
            address: "ibc/EBA52E7239CC1BC7F8ECF4F41523B6DD477FF067FD953315704A9A4FD2131B48",
            original: "Sui"
          }
        ],
        [
          "KUJI",
          {
            symbol: "KUJI",
            decimals: 6,
            address: "ukuji"
          }
        ]
      ]
    ],
    [
      "Klaytn",
      [
        [
          "KLAY",
          {
            symbol: "KLAY",
            decimals: 18,
            address: "native",
            wrappedKey: "WKLAY"
          }
        ],
        [
          "WKLAY",
          {
            symbol: "WKLAY",
            decimals: 18,
            address: "0xe4f05A66Ec68B54A58B17c22107b02e0232cC817"
          }
        ]
      ]
    ],
    [
      "XRPLEVM",
      [
        [
          "XRP",
          {
            symbol: "XRP",
            decimals: 18,
            address: "native",
            wrappedKey: "WXRP"
          }
        ],
        [
          "WXRP",
          {
            symbol: "WXRP",
            decimals: 18,
            address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"
          }
        ]
      ]
    ],
    [
      "MegaETH",
      [
        [
          "ETH",
          {
            symbol: "ETH",
            decimals: 18,
            address: "native",
            wrappedKey: "WETH"
          }
        ],
        [
          "WETH",
          {
            symbol: "WETH",
            decimals: 18,
            address: "0x4200000000000000000000000000000000000006"
          }
        ]
      ]
    ],
    [
      "ZeroGravity",
      [
        [
          "0G",
          {
            symbol: "0G",
            decimals: 18,
            address: "native",
            wrappedKey: "W0G"
          }
        ],
        [
          "W0G",
          {
            symbol: "W0G",
            decimals: 18,
            address: "0x1cd0690ff9a693f5ef2dd976660a8dafc81a109c"
          }
        ]
      ]
    ]
  ], gt = w(Mr, [
    0,
    [
      1,
      2
    ]
  ]), Ir = [
    [
      "Ethereum",
      [
        [
          "ETH",
          {
            symbol: "ETH",
            decimals: 18,
            address: "native",
            wrappedKey: "WETH"
          }
        ],
        [
          "WETH",
          {
            symbol: "WETH",
            decimals: 18,
            address: "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6"
          }
        ],
        [
          "USDCeth",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0x07865c6e87b9f70255377e024ace6630c1eaa37f"
          }
        ],
        [
          "WBTC",
          {
            symbol: "WBTC",
            decimals: 8,
            address: "0xC04B0d3107736C32e19F1c62b2aF67BE61d63a05"
          }
        ],
        [
          "USDT",
          {
            symbol: "USDT",
            decimals: 6,
            address: "0xC2C527C0CACF457746Bd31B2a698Fe89de2b6d49"
          }
        ],
        [
          "DAI",
          {
            symbol: "DAI",
            decimals: 18,
            address: "0x11fE4B6AE13d2a6055C8D9cF65c55bac32B5d844"
          }
        ],
        [
          "WMATIC",
          {
            symbol: "WMATIC",
            decimals: 18,
            address: "0x7cd0e8ff09cEB653813bD3d63d0554c1CB4BFdf6",
            original: "Polygon"
          }
        ],
        [
          "WBNB",
          {
            symbol: "WBNB",
            decimals: 18,
            address: "0xB19693FEB013Bab65866dE0a845a9511064230cE",
            original: "Bsc"
          }
        ],
        [
          "WAVAX",
          {
            symbol: "WAVAX",
            decimals: 18,
            address: "0x4C1b727f6df3B075E682C41a25687A69846aaC04",
            original: "Avalanche"
          }
        ],
        [
          "USDCavax",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0xF6699D3f725C4b64Cc6010F2DF77B4B05C76Cd5C",
            original: "Avalanche"
          }
        ],
        [
          "CELO",
          {
            symbol: "CELO",
            decimals: 18,
            address: "0xe092525a787CD56B901279b5864a224c22B95B72",
            original: "Celo"
          }
        ],
        [
          "WGLMR",
          {
            symbol: "WGLMR",
            decimals: 18,
            address: "0x0dc83BB61008A5E1194fe50fA9E474713C1AEcD7",
            original: "Moonbeam"
          }
        ],
        [
          "WSOL",
          {
            symbol: "WSOL",
            decimals: 9,
            address: "0x494701CE895389d917a938f0ea202D4eB9684Eab",
            original: "Solana"
          }
        ],
        [
          "SUI",
          {
            symbol: "SUI",
            decimals: 9,
            address: "0x70F7360C49D227ccBbb98fB7B69B7CDB651195bb",
            original: "Sui"
          }
        ],
        [
          "APT",
          {
            symbol: "APT",
            decimals: 8,
            address: "0xd7A89a8DD20Cb4F252c7FB96B6421b37d82cE506",
            original: "Aptos"
          }
        ],
        [
          "USDCarbitrum",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0xd962F26D93c4eF609Ba00Ed6101326A1490B9489",
            original: "Arbitrum"
          }
        ],
        [
          "WETHbase",
          {
            symbol: "WETH",
            decimals: 18,
            address: "0x76e39239e40857030D6f4D8545EFbd71F904d344",
            original: "Base"
          }
        ],
        [
          "USDCbase",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0x5aA392243437dDC8b4d86bfC90DF296908740A41",
            original: "Base"
          }
        ],
        [
          "tBTC",
          {
            symbol: "tBTC",
            decimals: 18,
            address: "0x679874fBE6D4E7Cc54A59e315FF1eB266686a937"
          }
        ],
        [
          "tBTCarbitrum",
          {
            symbol: "tBTC",
            decimals: 18,
            address: "0x575D93A2278FbF4E8Bd3d51B539a6E237C3F17c5",
            original: "Arbitrum"
          }
        ],
        [
          "tBTCsol",
          {
            symbol: "tBTC",
            decimals: 8,
            address: "0x57A52B6F0b393AF7d36116183cA83E584e636eA4",
            original: "Solana"
          }
        ],
        [
          "wstETH",
          {
            symbol: "wstETH",
            decimals: 18,
            address: "0x6320cD32aA674d2898A68ec82e869385Fc5f7E2f"
          }
        ],
        [
          "SEI",
          {
            symbol: "SEI",
            decimals: 6,
            address: "0xd68df72136207E9471C915cf1B6Cf43D587D4E0A",
            original: "Sei"
          }
        ],
        [
          "WKLAY",
          {
            symbol: "WKLAY",
            decimals: 18,
            address: "0x327e0c7D5cFa65d4f9E358dC9fA4446C49dBcB6C",
            original: "Klaytn"
          }
        ]
      ]
    ],
    [
      "Polygon",
      [
        [
          "WETH",
          {
            symbol: "WETH",
            decimals: 18,
            address: "0xc6735cc74553Cc2caeB9F5e1Ea0A4dAe12ef4632",
            original: "Ethereum"
          }
        ],
        [
          "USDCeth",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0x543237045a106D7fd2eE3e2B44b5728e70BDe9c3",
            original: "Ethereum"
          }
        ],
        [
          "USDT",
          {
            symbol: "USDT",
            decimals: 6,
            address: "0x02E30E84161BE1aBfcBB2b154B11De4C2b5E0a32",
            original: "Ethereum"
          }
        ],
        [
          "DAI",
          {
            symbol: "DAI",
            decimals: 18,
            address: "0x87374d35C5F1bD78c2b1da383F460e154e7D3E5e",
            original: "Ethereum"
          }
        ],
        [
          "MATIC",
          {
            symbol: "MATIC",
            decimals: 18,
            address: "native",
            wrappedKey: "WMATIC"
          }
        ],
        [
          "WMATIC",
          {
            symbol: "WMATIC",
            decimals: 18,
            address: "0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889"
          }
        ],
        [
          "USDCpolygon",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0x9999f7fea5938fd3b1e26a12c3f2fb024e194f97"
          }
        ],
        [
          "WBNB",
          {
            symbol: "WBNB",
            decimals: 18,
            address: "0x0C63D8ADB69204b2946DcB945a6f16d97C255eE2",
            original: "Bsc"
          }
        ],
        [
          "WAVAX",
          {
            symbol: "WAVAX",
            decimals: 18,
            address: "0x51f3D34651523dD8CC4872ee261A1B0B3f73AceF",
            original: "Avalanche"
          }
        ],
        [
          "USDCavax",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0xcc048C353Fdc2f5c378B7BCab9B240Ca2b619f1c",
            original: "Avalanche"
          }
        ],
        [
          "CELO",
          {
            symbol: "CELO",
            decimals: 18,
            address: "0xAd027790A64331A11bd1b651739450cC9Dc0098F",
            original: "Celo"
          }
        ],
        [
          "WGLMR",
          {
            symbol: "WGLMR",
            decimals: 18,
            address: "0x693b9AC2199d989bDA8C9C5b5d7A3680B4f40dAa",
            original: "Moonbeam"
          }
        ],
        [
          "WSOL",
          {
            symbol: "WSOL",
            decimals: 9,
            address: "0x0284B4994456Fae4cb56E4d33228d51B674EAD1b",
            original: "Solana"
          }
        ],
        [
          "SUI",
          {
            symbol: "SUI",
            decimals: 9,
            address: "0x3dadA6f29f80A0427C4989E17a5a2ada17441841",
            original: "Sui"
          }
        ],
        [
          "APT",
          {
            symbol: "APT",
            decimals: 8,
            address: "0x226B436043B537BD158e84fA199E2Aa36bf364f8",
            original: "Aptos"
          }
        ],
        [
          "WETHoptimism",
          {
            symbol: "WETH",
            decimals: 18,
            address: "0xC77d781f38Cf52F8Ea0b4c0F22312bB9A34911b5",
            original: "Optimism"
          }
        ],
        [
          "WETHbase",
          {
            symbol: "WETH",
            decimals: 18,
            address: "0x68C4365d5229A44D9A59058B65500365492b5307",
            original: "Base"
          }
        ],
        [
          "tBTC",
          {
            symbol: "tBTC",
            decimals: 18,
            address: "0xf6CC0Cc8D54a4b1A63a0E9745663e0c844Ee4D48",
            original: "Ethereum"
          }
        ],
        [
          "tBTCpolygon",
          {
            symbol: "tBTC",
            decimals: 18,
            address: "0xBcD7917282E529BAA6f232DdDc75F3901245A492"
          }
        ],
        [
          "SEI",
          {
            symbol: "SEI",
            decimals: 6,
            address: "0xc5C0229B38564E1E8083031405Be8d6E6e3Bc462",
            original: "Sei"
          }
        ],
        [
          "WKLAY",
          {
            symbol: "WKLAY",
            decimals: 18,
            address: "0x7b34f3711705eB2963fB856cda063C979de4749e",
            original: "Klaytn"
          }
        ]
      ]
    ],
    [
      "Bsc",
      [
        [
          "WETH",
          {
            symbol: "WETH",
            decimals: 18,
            address: "0x064a85eac6b4Bd7190BCAd3458dBD9459989c37B",
            original: "Ethereum"
          }
        ],
        [
          "USDCeth",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0x861B5C16A2EcED022241072A7beA9D530b99EB6f",
            original: "Ethereum"
          }
        ],
        [
          "USDT",
          {
            symbol: "USDT",
            decimals: 6,
            address: "0xe94AaBAdB6F833f65B8A9AdDD030985B775188c9",
            original: "Ethereum"
          }
        ],
        [
          "DAI",
          {
            symbol: "DAI",
            decimals: 18,
            address: "0x45082C9Fc6BBCa72288F47Fad21dE0BECC75759E",
            original: "Ethereum"
          }
        ],
        [
          "WMATIC",
          {
            symbol: "WMATIC",
            decimals: 18,
            address: "0x7FCDA925f0994121752ca14C334297BeC3d0eA9E",
            original: "Polygon"
          }
        ],
        [
          "BNB",
          {
            symbol: "BNB",
            decimals: 18,
            address: "native",
            wrappedKey: "WBNB"
          }
        ],
        [
          "WBNB",
          {
            symbol: "WBNB",
            decimals: 18,
            address: "0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd"
          }
        ],
        [
          "WAVAX",
          {
            symbol: "WAVAX",
            decimals: 18,
            address: "0x6cE9E2c8b59bbcf65dA375D3d8AB503c8524caf7",
            original: "Avalanche"
          }
        ],
        [
          "USDCavax",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0x1cfeCf72bcBE1E429A21A5B11E708C7c397AaC54",
            original: "Avalanche"
          }
        ],
        [
          "CELO",
          {
            symbol: "CELO",
            decimals: 18,
            address: "0x1471698cBD9cAB0228F2EEA9303A2b3aA0ABDC2B",
            original: "Celo"
          }
        ],
        [
          "WGLMR",
          {
            symbol: "WGLMR",
            decimals: 18,
            address: "0x5C31B36599ED7f06b09c0ffC7A2F928cE496F046",
            original: "Moonbeam"
          }
        ],
        [
          "WSOL",
          {
            symbol: "WSOL",
            decimals: 9,
            address: "0x30f19eBba919954FDc020B8A20aEF13ab5e02Af0",
            original: "Solana"
          }
        ],
        [
          "USDCsol",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0x51a3cc54eA30Da607974C5D07B8502599801AC08",
            original: "Solana"
          }
        ],
        [
          "SUI",
          {
            symbol: "SUI",
            decimals: 9,
            address: "0x5A73D76e09Af2E428EC64aE10F91B78AC990B298",
            original: "Sui"
          }
        ],
        [
          "APT",
          {
            symbol: "APT",
            decimals: 8,
            address: "0x4A7Bd5E135f421057F97BbA8BCeeE5c18334f454",
            original: "Aptos"
          }
        ],
        [
          "WETHarbitrum",
          {
            symbol: "WETH",
            decimals: 18,
            address: "0x60845E2503Fcd945b3A6f0bC077a31CC913E654D",
            original: "Arbitrum"
          }
        ],
        [
          "USDCarbitrum",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0xe3aA397cb6d93Cce4fAd9Cc9E796CCa5E50FB5ED",
            original: "Arbitrum"
          }
        ],
        [
          "WETHbase",
          {
            symbol: "WETH",
            decimals: 18,
            address: "0x63108fC941F3cCE0B484De19746B5Af949EAF6eE",
            original: "Base"
          }
        ],
        [
          "tBTC",
          {
            symbol: "tBTC",
            decimals: 18,
            address: "0xE7176110261ef2FfC885dd568C1093f58F0aEee9",
            original: "Ethereum"
          }
        ],
        [
          "SEI",
          {
            symbol: "SEI",
            decimals: 6,
            address: "0x79A8FFFCED130314eCC8782C846c4d8d4867A900",
            original: "Sei"
          }
        ],
        [
          "WKLAY",
          {
            symbol: "WKLAY",
            decimals: 18,
            address: "0x79D34FDb686B5D139949E4F92D83EEe376489176",
            original: "Klaytn"
          }
        ]
      ]
    ],
    [
      "Avalanche",
      [
        [
          "WETH",
          {
            symbol: "WETH",
            decimals: 18,
            address: "0xbB5A2dC896Ec4E2fa77F40FA630582ed9c6D0172",
            original: "Ethereum"
          }
        ],
        [
          "USDCeth",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0x63A30f239DC8d1c17Bf6653a68Fc6C2F83641E6d",
            original: "Ethereum"
          }
        ],
        [
          "DAI",
          {
            symbol: "DAI",
            decimals: 18,
            address: "0x3989C9c4bdd30400E6Aa90990683EAd6a1638A16",
            original: "Ethereum"
          }
        ],
        [
          "WMATIC",
          {
            symbol: "WMATIC",
            decimals: 18,
            address: "0x78554394273957d7e55afC841aeA27Cce469AEd4",
            original: "Polygon"
          }
        ],
        [
          "WBNB",
          {
            symbol: "WBNB",
            decimals: 18,
            address: "0x10F1053bF2884b28ee0Bd7a2dDBa237Af3511d29",
            original: "Bsc"
          }
        ],
        [
          "AVAX",
          {
            symbol: "AVAX",
            decimals: 18,
            address: "native",
            wrappedKey: "WAVAX"
          }
        ],
        [
          "WAVAX",
          {
            symbol: "WAVAX",
            decimals: 18,
            address: "0xd00ae08403B9bbb9124bB305C09058E32C39A48c"
          }
        ],
        [
          "USDCavax",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0x5425890298aed601595a70AB815c96711a31Bc65"
          }
        ],
        [
          "CELO",
          {
            symbol: "CELO",
            decimals: 18,
            address: "0xC66d9c2b33c347d4A4441975f4688fcD5DD4c441",
            original: "Celo"
          }
        ],
        [
          "WGLMR",
          {
            symbol: "WGLMR",
            decimals: 18,
            address: "0xf080782DF38eD5228D2FC2882d13D56c8f1D6f21",
            original: "Moonbeam"
          }
        ],
        [
          "WSOL",
          {
            symbol: "WSOL",
            decimals: 9,
            address: "0xb10563644a6AB8948ee6d7f5b0a1fb15AaEa1E03",
            original: "Solana"
          }
        ],
        [
          "SUI",
          {
            symbol: "SUI",
            decimals: 9,
            address: "0xfc5128F8556a6F059466E67740e6cC31EE5C2C47",
            original: "Sui"
          }
        ],
        [
          "APT",
          {
            symbol: "APT",
            decimals: 8,
            address: "0x996a3f12C1FcD7339Ea8801f629201e4d42EAD04",
            original: "Aptos"
          }
        ],
        [
          "WETHarbitrum",
          {
            symbol: "WETH",
            decimals: 18,
            address: "0x36Bd1562F874941eE62Ebb2b3A45B4A88A9df90e",
            original: "Arbitrum"
          }
        ],
        [
          "WETHoptimism",
          {
            symbol: "WETH",
            decimals: 18,
            address: "0x301587BF484756441de43E522027e3751871237B",
            original: "Optimism"
          }
        ],
        [
          "WETHbase",
          {
            symbol: "WETH",
            decimals: 18,
            address: "0xc07c754ef7473d315D973F7D9F7858C2eCe0a0a6",
            original: "Base"
          }
        ],
        [
          "tBTC",
          {
            symbol: "tBTC",
            decimals: 18,
            address: "0x7E1779F65B644E5f98DdC4D2cB0A0106a7E6d9e1",
            original: "Ethereum"
          }
        ],
        [
          "tBTCarbitrum",
          {
            symbol: "tBTC",
            decimals: 18,
            address: "0x4beDc7471374d7479120E44ea9593eBB85f48AD9",
            original: "Arbitrum"
          }
        ],
        [
          "SEI",
          {
            symbol: "SEI",
            decimals: 6,
            address: "0xfe2eCDD1708aaebf1cF802C6124fAFb18B22dfEE",
            original: "Sei"
          }
        ]
      ]
    ],
    [
      "Celo",
      [
        [
          "WETH",
          {
            symbol: "WETH",
            decimals: 18,
            address: "0x898471a82737dFFfB61915F9e8381e279076D72b",
            original: "Ethereum"
          }
        ],
        [
          "USDCeth",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0xB0524bEF6c61c6150B340b2828a890fD8dEa60C0",
            original: "Ethereum"
          }
        ],
        [
          "DAI",
          {
            symbol: "DAI",
            decimals: 18,
            address: "0xeBB3fF6E5d61d3793Fdb60f7942BA78E636019f6",
            original: "Ethereum"
          }
        ],
        [
          "WMATIC",
          {
            symbol: "WMATIC",
            decimals: 18,
            address: "0x7a56409988BBF8758b3ba412b9c7E3FE504C8544",
            original: "Polygon"
          }
        ],
        [
          "WBNB",
          {
            symbol: "WBNB",
            decimals: 18,
            address: "0xa8050be9389466c3c524F10F131f244ACbf21A0D",
            original: "Bsc"
          }
        ],
        [
          "WAVAX",
          {
            symbol: "WAVAX",
            decimals: 18,
            address: "0x502c8C83008D9Dd812a7C5fB886C063060C73Dbf",
            original: "Avalanche"
          }
        ],
        [
          "USDCavax",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0xDDB349c976cA2C873644F21f594767Eb5390C831",
            original: "Avalanche"
          }
        ],
        [
          "CELO",
          {
            symbol: "CELO",
            decimals: 18,
            address: "0xF194afDf50B03e69Bd7D057c1Aa9e10c9954E4C9"
          }
        ],
        [
          "WGLMR",
          {
            symbol: "WGLMR",
            decimals: 18,
            address: "0x132D2172D89cd9CfD480A8887c6bF92360fB460e",
            original: "Moonbeam"
          }
        ],
        [
          "WSOL",
          {
            symbol: "WSOL",
            decimals: 9,
            address: "0x05EEF2AE1A7A938D78598F7d9e8b97A9bED0c9eC",
            original: "Solana"
          }
        ],
        [
          "SUI",
          {
            symbol: "SUI",
            decimals: 9,
            address: "0xa40d9E69ca9867C4bFbeC11Ce79C939991e9bf26",
            original: "Sui"
          }
        ],
        [
          "APT",
          {
            symbol: "APT",
            decimals: 8,
            address: "0xAC0a2fF7DD597de863878a3372142b07B614C125",
            original: "Aptos"
          }
        ],
        [
          "USDCarbitrum",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0x0C4AbF95Ff3d82d1F02f55e65050eA5bA062606E",
            original: "Arbitrum"
          }
        ],
        [
          "WETHoptimism",
          {
            symbol: "WETH",
            decimals: 18,
            address: "0x28E768a51D19dcB753a24B79D1e89c92fee094Ba",
            original: "Optimism"
          }
        ],
        [
          "tBTC",
          {
            symbol: "tBTC",
            decimals: 18,
            address: "0x01a050Fc725F4E99aAD43Eb6f8481f38ee6231aD",
            original: "Ethereum"
          }
        ],
        [
          "SEI",
          {
            symbol: "SEI",
            decimals: 6,
            address: "0x05Efb4aC79ef48a4830f517834c6f5f039F16832",
            original: "Sei"
          }
        ]
      ]
    ],
    [
      "Moonbeam",
      [
        [
          "WETH",
          {
            symbol: "WETH",
            decimals: 18,
            address: "0xd27d8883E31FAA11B2613b14BE83ad8951C8783C",
            original: "Ethereum"
          }
        ],
        [
          "USDCeth",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0xE5dE10C4b744bac6b783fAF8d9B9fDFF14Acc3c9",
            original: "Ethereum"
          }
        ],
        [
          "USDT",
          {
            symbol: "USDT",
            decimals: 6,
            address: "0x7f5Ca1bcFb38fDF4c0E0646FCbf3FA87740ff65D",
            original: "Ethereum"
          }
        ],
        [
          "DAI",
          {
            symbol: "DAI",
            decimals: 18,
            address: "0xc31EC0108D8e886be58808B4C2C53f8365f1885D",
            original: "Ethereum"
          }
        ],
        [
          "WMATIC",
          {
            symbol: "WMATIC",
            decimals: 18,
            address: "0xD2888f015BcB76CE3d27b6024cdEFA16836d0dbb",
            original: "Polygon"
          }
        ],
        [
          "WBNB",
          {
            symbol: "WBNB",
            decimals: 18,
            address: "0x6097E80331B0c6aF4F74D7F2363E70Cb2Fd078A5",
            original: "Bsc"
          }
        ],
        [
          "WAVAX",
          {
            symbol: "WAVAX",
            decimals: 18,
            address: "0x2E8afeCC19842229358f3650cc3F091908dcbaB4",
            original: "Avalanche"
          }
        ],
        [
          "USDCavax",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0x6533CE14804D113b1F494dC56c5D60A43cb5C3b5",
            original: "Avalanche"
          }
        ],
        [
          "CELO",
          {
            symbol: "CELO",
            decimals: 18,
            address: "0x3406a9b09adf0cb36DC04c1523C4b294C6b79513",
            original: "Celo"
          }
        ],
        [
          "GLMR",
          {
            symbol: "GLMR",
            decimals: 18,
            address: "native",
            wrappedKey: "WGLMR"
          }
        ],
        [
          "WGLMR",
          {
            symbol: "WGLMR",
            decimals: 18,
            address: "0xD909178CC99d318e4D46e7E66a972955859670E1"
          }
        ],
        [
          "SUI",
          {
            symbol: "SUI",
            decimals: 9,
            address: "0x2ed4B5B1071A3C676664E9085C0e3826542C1b27",
            original: "Sui"
          }
        ],
        [
          "APT",
          {
            symbol: "APT",
            decimals: 8,
            address: "0xCaa2A1d3BbbA0D1466571e83b4E2CbE04252593D",
            original: "Aptos"
          }
        ],
        [
          "WETHarbitrum",
          {
            symbol: "WETH",
            decimals: 18,
            address: "0x15025b956969DD8F1d0CD69959Ad97128F8f6D69",
            original: "Arbitrum"
          }
        ],
        [
          "USDCoptimism",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0xf98E630a3DD4F21Cab7a37Bb01209cb62959169D",
            original: "Optimism"
          }
        ],
        [
          "USDCbase",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0x7480641F5B00b4Fc39d6AaeC4Cd851EdEA7f31CF",
            original: "Base"
          }
        ],
        [
          "tBTC",
          {
            symbol: "tBTC",
            decimals: 18,
            address: "0xf82E21cE03471983Afb9c2E3789Aa13a2d7242E8",
            original: "Ethereum"
          }
        ],
        [
          "SEI",
          {
            symbol: "SEI",
            decimals: 6,
            address: "0x1EdDe35B7e058194B457B8621285EaFA710f01ea",
            original: "Sei"
          }
        ]
      ]
    ],
    [
      "Solana",
      [
        [
          "WETH",
          {
            symbol: "WETH",
            decimals: 8,
            address: "7VPWjBhCXrpYYBiRKZh1ubh9tLZZNkZGp2ReRphEV4Mc",
            original: "Ethereum"
          }
        ],
        [
          "USDCeth",
          {
            symbol: "USDC",
            decimals: 6,
            address: "2BAqec7Qof3Y7VJatwFsRHUNSQBSkzaEsT1V5bW6dbZY",
            original: "Ethereum"
          }
        ],
        [
          "DAI",
          {
            symbol: "DAI",
            decimals: 8,
            address: "3WK3mEDNPrNuQReBvM28NcsqrExMnPxD9pPJmgrUeKKH",
            original: "Ethereum"
          }
        ],
        [
          "WMATIC",
          {
            symbol: "WMATIC",
            decimals: 8,
            address: "ACbmcQxbbhiXWM1GmapUSMmBYKMvnFLfAAXKqdo8xKwo",
            original: "Polygon"
          }
        ],
        [
          "WBNB",
          {
            symbol: "WBNB",
            decimals: 8,
            address: "BaGfF51MQ3a61papTRDYaNefBgTQ9ywnVne5fCff4bxT",
            original: "Bsc"
          }
        ],
        [
          "WAVAX",
          {
            symbol: "WAVAX",
            decimals: 8,
            address: "3Ftc5hTz9sG4huk79onufGiebJNDMZNL8HYgdMJ9E7JR",
            original: "Avalanche"
          }
        ],
        [
          "USDCavax",
          {
            symbol: "USDC",
            decimals: 6,
            address: "GQtMXZxnuacCFTXVeTvyHi6P9F6chbtzhVc8JgD8hv7c",
            original: "Avalanche"
          }
        ],
        [
          "CELO",
          {
            symbol: "CELO",
            decimals: 8,
            address: "84F2QX9278ToDmA98u4A86xSV9hz1ovazr8zwGaX6qjS",
            original: "Celo"
          }
        ],
        [
          "WGLMR",
          {
            symbol: "WGLMR",
            decimals: 8,
            address: "8987WGkYa5viiZ9DD8sS3PB5XghKmWjkEgmzvwDuoAEc",
            original: "Moonbeam"
          }
        ],
        [
          "SOL",
          {
            symbol: "SOL",
            decimals: 9,
            address: "native",
            wrappedKey: "WSOL"
          }
        ],
        [
          "WSOL",
          {
            symbol: "WSOL",
            decimals: 9,
            address: "So11111111111111111111111111111111111111112"
          }
        ],
        [
          "USDCsol",
          {
            symbol: "USDC",
            decimals: 6,
            address: "4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU"
          }
        ],
        [
          "SUI",
          {
            symbol: "SUI",
            decimals: 8,
            address: "BJZ72CjPQojVoH68mzrd4VQ4nr6KuhbAGnhZEZCujKxY",
            original: "Sui"
          }
        ],
        [
          "APT",
          {
            symbol: "APT",
            decimals: 8,
            address: "7EvFD3JKCJVdtkAYdaSVKJsrPEJCzy2neJha7TREGrCa",
            original: "Aptos"
          }
        ],
        [
          "WETHbase",
          {
            symbol: "WETH",
            decimals: 8,
            address: "EKZqcBZ3Y7YTDinpecA7SxRp9B4s1m99VHJ9jpvyTwzW",
            original: "Base"
          }
        ],
        [
          "tBTC",
          {
            symbol: "tBTC",
            decimals: 8,
            address: "FMYvcyMJJ22whB9m3T5g1oPKwM6jpLnFBXnrY6eXmCrp",
            original: "Ethereum"
          }
        ],
        [
          "tBTCoptimism",
          {
            symbol: "tBTC",
            decimals: 8,
            address: "HsPvRT3J7kuitNvNHogyZeSEagcqAqwwq2FPgrGfgApy",
            original: "Optimism"
          }
        ],
        [
          "tBTCsol",
          {
            symbol: "tBTC",
            decimals: 8,
            address: "6DNSN2BJsaPFdFFc1zP37kkeNe4Usc1Sqkzr9C9vPWcU"
          }
        ],
        [
          "SEI",
          {
            symbol: "SEI",
            decimals: 6,
            address: "8LFdfuhbfdH8oBzSKDgfPAxvLW24dCM9ttjBrBobURuk",
            original: "Sei"
          }
        ]
      ]
    ],
    [
      "Sui",
      [
        [
          "WETH",
          {
            symbol: "WETH",
            decimals: 8,
            address: "0x72831f626b1f0e11be201893d5cb641917730b1ccac778e4a77f8ab2052f0784::coin::COIN",
            original: "Ethereum"
          }
        ],
        [
          "USDCeth",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0x9e4396c19ec1c5f2214c79d3af3f31e59869640305560f8f2499c36fa9c8e0f2::coin::COIN",
            original: "Ethereum"
          }
        ],
        [
          "DAI",
          {
            symbol: "DAI",
            decimals: 8,
            address: "0xe6fc78aa2b52b785bdcb67901cd85793a0b593248f315cb755974d23d0fcb837::coin::COIN",
            original: "Ethereum"
          }
        ],
        [
          "WMATIC",
          {
            symbol: "WMATIC",
            decimals: 8,
            address: "0xa516bcbf83b29a2944bb53ec9f934ea7d78c3626d3ae411d2fb9dcb977522e67::coin::COIN",
            original: "Polygon"
          }
        ],
        [
          "WBNB",
          {
            symbol: "WBNB",
            decimals: 8,
            address: "0xddcf8680a8a4b8a527d8c85ec203274991590c2ea898d1c4635b70164d9c584b::coin::COIN",
            original: "Bsc"
          }
        ],
        [
          "WAVAX",
          {
            symbol: "WAVAX",
            decimals: 8,
            address: "0xa600741c469fb57ed01497ddf101e798fa79a9c529bd176675c5c4d970811f80::coin::COIN",
            original: "Avalanche"
          }
        ],
        [
          "USDCavax",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0x2aa8c885d04e676c4e87b7d0f94d4f3b243b1b5d93239d1cc41d5528ce1714c1::coin::COIN",
            original: "Avalanche"
          }
        ],
        [
          "CELO",
          {
            symbol: "CELO",
            decimals: 8,
            address: "0x81868174a6b11e1acc337b3414f9912455435d486609fb8d50b34312865085f2::coin::COIN",
            original: "Celo"
          }
        ],
        [
          "WGLMR",
          {
            symbol: "WGLMR",
            decimals: 8,
            address: "0xeffae382de96981f7ddd2d294429924827e8f325d612487a12d6a0b249171002::coin::COIN",
            original: "Moonbeam"
          }
        ],
        [
          "WSOL",
          {
            symbol: "WSOL",
            decimals: 8,
            address: "0xbc03aaab4c11eb84df8bf39fdc714fa5d5b65b16eb7d155e22c74a68c8d4e17f::coin::COIN",
            original: "Solana"
          }
        ],
        [
          "SUI",
          {
            symbol: "SUI",
            decimals: 9,
            address: "0x2::sui::SUI"
          }
        ],
        [
          "APT",
          {
            symbol: "APT",
            decimals: 8,
            address: "0x812d6feb8b84e55d47a0bfcae9fb6a4e7e09be5ec86ce0a729e0f67d5f59f477::coin::COIN",
            original: "Aptos"
          }
        ],
        [
          "USDCoptimism",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0xbbc39df58a11072ceeac1f685393ca912d1a1bfd6e772053ec5a544f36124da::coin::COIN",
            original: "Optimism"
          }
        ],
        [
          "WETHbase",
          {
            symbol: "WETH",
            decimals: 8,
            address: "0x7b442b988864149dedfb9b6a75a88c7c33b9ddd3d15a87bf25104e1fcdd680ab::coin::COIN",
            original: "Base"
          }
        ],
        [
          "USDCbase",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0x4125940814a0ca87465a1a59092a7344633ad03b48ad7cda36d799d8558012c1::coin::COIN",
            original: "Base"
          }
        ],
        [
          "tBTC",
          {
            symbol: "tBTC",
            decimals: 8,
            address: "0xacf6784120b221a077ab0b84acc0b76930779eb55f157ea2492be4a60b808f6::coin::COIN",
            original: "Ethereum"
          }
        ],
        [
          "SEI",
          {
            symbol: "SEI",
            decimals: 6,
            address: "0x22c5cdaabaae4b6d3351f9bba9511b0aebb0662a6c209a360f0776e1e77a8438::coin::COIN",
            original: "Sei"
          }
        ]
      ]
    ],
    [
      "Aptos",
      [
        [
          "WETH",
          {
            symbol: "WETH",
            decimals: 8,
            address: "0x381775005cb32cdd3dbf935ae1b978ed40d309c72b009cd4a812aab6d991418a::coin::T",
            original: "Ethereum"
          }
        ],
        [
          "WMATIC",
          {
            symbol: "WMATIC",
            decimals: 8,
            address: "0x5f229253e2b2d03fb909f565feca49452582bd633a5816e5ce30aa593cb49d8a::coin::T",
            original: "Polygon"
          }
        ],
        [
          "WBNB",
          {
            symbol: "WBNB",
            decimals: 8,
            address: "0xa5894f5ddb8647e6143102aa336ff07374f7b32e88c1c703aef5b7c9a370bf80::coin::T",
            original: "Bsc"
          }
        ],
        [
          "WAVAX",
          {
            symbol: "WAVAX",
            decimals: 8,
            address: "0xbe8f4301c0b54e870902b9a23eeb95ce74ac190531782aa3262337ceb145401a::coin::T",
            original: "Avalanche"
          }
        ],
        [
          "USDCavax",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0x02ef7697bdb33361ca39d228671203afc0dea3202e792d79d2072b761d87c834::coin::T",
            original: "Avalanche"
          }
        ],
        [
          "CELO",
          {
            symbol: "CELO",
            decimals: 8,
            address: "0xecbb0f7e7d049499ca83ca1358344f56557886f6f7adc740d6734cce7bfc9a14::coin::T",
            original: "Celo"
          }
        ],
        [
          "WGLMR",
          {
            symbol: "WGLMR",
            decimals: 8,
            address: "0x338373b6694f71dbeac5ca4a30503bf5f083888d71678aed31255de416be37c0::coin::T",
            original: "Moonbeam"
          }
        ],
        [
          "WSOL",
          {
            symbol: "WSOL",
            decimals: 8,
            address: "0xdd89c0e695df0692205912fb69fc290418bed0dbe6e4573d744a6d5e6bab6c13::coin::T",
            original: "Solana"
          }
        ],
        [
          "SUI",
          {
            symbol: "SUI",
            decimals: 8,
            address: "0x7b22d0e02f653d4fd1caddcfa4719a2b329da56eb81d8f27db703f02466c26a5::coin::T",
            original: "Sui"
          }
        ],
        [
          "APT",
          {
            symbol: "APT",
            decimals: 8,
            address: "0x1::aptos_coin::AptosCoin"
          }
        ],
        [
          "USDCarbitrum",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0x3f0fdd44d96dae888d6c576218cf655458316a27c7bdc46537f61e531b10d3df::coin::T",
            original: "Arbitrum"
          }
        ],
        [
          "USDCoptimism",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0xcff1d9820851201436ad225dcc4374a2d15f52a74109283eb9881be799677e92::coin::T",
            original: "Optimism"
          }
        ],
        [
          "WETHbase",
          {
            symbol: "WETH",
            decimals: 8,
            address: "0x5b5f14781164cf77185a7b6acd8e4f3cbb7e7cfb1cd5760d2b8af81075fc153d::coin::T",
            original: "Base"
          }
        ],
        [
          "USDCbase",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0xcfaabb3cb08ad612905dd6b2593d044ce857dfe5360148333b4635fb57d4d13f::coin::T",
            original: "Base"
          }
        ],
        [
          "tBTC",
          {
            symbol: "tBTC",
            decimals: 8,
            address: "0x6e2d5d1a6d6d0e0c5db506ce64ead0530847a48b96516abbb08cdebe43fe3036::coin::T",
            original: "Ethereum"
          }
        ],
        [
          "SEI",
          {
            symbol: "SEI",
            decimals: 6,
            address: "0xcae0ba0b7a435730ab65f1c8357d213e5cf9d4b377b96761745a8edaf9c9df6d::coin::T",
            original: "Sei"
          }
        ]
      ]
    ],
    [
      "Base",
      [
        [
          "WETH",
          {
            symbol: "WETH",
            decimals: 18,
            address: "0x44D627f900da8AdaC7561bD73aA745F132450798",
            original: "Ethereum"
          }
        ],
        [
          "USDCeth",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0x5010B0988a035915C91a2a432085824FcB3D8d3f",
            original: "Ethereum"
          }
        ],
        [
          "DAI",
          {
            symbol: "DAI",
            decimals: 18,
            address: "0x31B2BAEE47Dc5Fc06baEC1BF73C124031b44fB97",
            original: "Ethereum"
          }
        ],
        [
          "WMATIC",
          {
            symbol: "WMATIC",
            decimals: 18,
            address: "0xFFB5d863d5132523d013338845A1Bb01EDd440f4",
            original: "Polygon"
          }
        ],
        [
          "WBNB",
          {
            symbol: "WBNB",
            decimals: 18,
            address: "0x9DeF11E63C23c71dE3716b81dD2Fdad2B24b8b7F",
            original: "Bsc"
          }
        ],
        [
          "WAVAX",
          {
            symbol: "WAVAX",
            decimals: 18,
            address: "0x410B0EE532EFfB18fa4d90cc095B1CD58aC43d5a",
            original: "Avalanche"
          }
        ],
        [
          "USDCavax",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0x4C5208246676486064c501E1DAF2dD21596Bc5f5",
            original: "Avalanche"
          }
        ],
        [
          "CELO",
          {
            symbol: "CELO",
            decimals: 18,
            address: "0x72C56041ea5fe8bDE99b2A123fb5964cDE8C7FE9",
            original: "Celo"
          }
        ],
        [
          "WGLMR",
          {
            symbol: "WGLMR",
            decimals: 18,
            address: "0xCEc03b5710a464F4354AF35ebD0310238F656DFf",
            original: "Moonbeam"
          }
        ],
        [
          "WSOL",
          {
            symbol: "WSOL",
            decimals: 9,
            address: "0x6Fb1dE2372e48fe66c84cf37cc2fb54EaEe62988",
            original: "Solana"
          }
        ],
        [
          "SUI",
          {
            symbol: "SUI",
            decimals: 9,
            address: "0xEe0fC8BECD593B41AACBd93936fDAbc2A444370A",
            original: "Sui"
          }
        ],
        [
          "APT",
          {
            symbol: "APT",
            decimals: 8,
            address: "0xd934A15FfA3945DD0Ba2cb7b4174024261A14874",
            original: "Aptos"
          }
        ],
        [
          "WETHarbitrum",
          {
            symbol: "WETH",
            decimals: 18,
            address: "0x8eD43aBdc4f836aa60933177B31AC358ea09f27E",
            original: "Arbitrum"
          }
        ],
        [
          "WETHoptimism",
          {
            symbol: "WETH",
            decimals: 18,
            address: "0x5c443C05C72F0660502d88642c807020cc9b71A2",
            original: "Optimism"
          }
        ],
        [
          "ETHbase",
          {
            symbol: "ETH",
            decimals: 18,
            address: "native",
            wrappedKey: "WETHbase"
          }
        ],
        [
          "WETHbase",
          {
            symbol: "WETH",
            decimals: 18,
            address: "0x4200000000000000000000000000000000000006"
          }
        ],
        [
          "USDCbase",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0xf175520c52418dfe19c8098071a252da48cd1c19"
          }
        ],
        [
          "tBTC",
          {
            symbol: "tBTC",
            decimals: 18,
            address: "0x0219441240d89fAc3fD708d06d8fD3A072C02FB6",
            original: "Ethereum"
          }
        ],
        [
          "tBTCbase",
          {
            symbol: "tBTC",
            decimals: 18,
            address: "0x783349cd20f26CE12e747b1a17bC38D252c9e119"
          }
        ],
        [
          "tBTCsol",
          {
            symbol: "tBTC",
            decimals: 8,
            address: "0x9dA16Ae62De05bcb4606c4BFbB54046872501Bd0",
            original: "Solana"
          }
        ],
        [
          "SEI",
          {
            symbol: "SEI",
            decimals: 6,
            address: "0x7B5edB2B3d2BeA8057a736B82AC6EF35c70bdadD",
            original: "Sei"
          }
        ]
      ]
    ],
    [
      "Sei",
      [
        [
          "WETH",
          {
            symbol: "WETH",
            decimals: 8,
            address: "sei13pzlt9etk44hj22lckncvampq2qu2gxv6r6774f3hma4vc07wqgsmftjx7",
            original: "Ethereum"
          }
        ],
        [
          "USDCeth",
          {
            symbol: "USDC",
            decimals: 6,
            address: "sei1nj32y0h0vzam33ay42h2majlfk7tdkqcuk84srn0v2a52kmujgfsyfe78f",
            original: "Ethereum"
          }
        ],
        [
          "WMATIC",
          {
            symbol: "WMATIC",
            decimals: 8,
            address: "sei1dc94as3vgxn3qkr5h0lnnrep69mtfku6jg4t94gfkunuyzr5g5eqyqvj9p",
            original: "Polygon"
          }
        ],
        [
          "WBNB",
          {
            symbol: "WBNB",
            decimals: 8,
            address: "sei10a7see3f9t2j9l8fdweur3aqy4zgvz583a268hhhln3yzps6l5mqnl4ua6",
            original: "Bsc"
          }
        ],
        [
          "WAVAX",
          {
            symbol: "WAVAX",
            decimals: 8,
            address: "sei1mgpq67pj7p2acy5x7r5lz7fulxmuxr3uh5f0szyvqgvru3glufzsxk8tnx",
            original: "Avalanche"
          }
        ],
        [
          "USDCavax",
          {
            symbol: "USDC",
            decimals: 6,
            address: "sei1uyce5s6cc8hveg0maq2lg7wm6v6fvwqmznypj559nzf9wr9tmw3qnd3ce7",
            original: "Avalanche"
          }
        ],
        [
          "CELO",
          {
            symbol: "CELO",
            decimals: 8,
            address: "sei1yw4wv2zqg9xkn67zvq3azye0t8h0x9kgyg3d53jym24gxt49vdyswk5upj",
            original: "Celo"
          }
        ],
        [
          "WGLMR",
          {
            symbol: "WGLMR",
            decimals: 8,
            address: "sei140m6xagmw0zesejzhsvk46zprgscr7tu94h36rwsutcsxcs4fmds9sevym",
            original: "Moonbeam"
          }
        ],
        [
          "WSOL",
          {
            symbol: "WSOL",
            decimals: 8,
            address: "sei1at3xuugacwgu3ppx7fxzmtr3q6m3ztjuean9r2mwcnqupw28yezs7unxgz",
            original: "Solana"
          }
        ],
        [
          "SUI",
          {
            symbol: "SUI",
            decimals: 8,
            address: "sei1rhpcprr2pffe6ydf078a0qeslhnlywxh2t3wjax4489z0m29cj9swj5khc",
            original: "Sui"
          }
        ],
        [
          "APT",
          {
            symbol: "APT",
            decimals: 8,
            address: "sei1em74y5sts4h8y5zuhfdn4w5g8zs285qld3kczpk6rh32jpvjyqqsvv0pdt",
            original: "Aptos"
          }
        ],
        [
          "WETHarbitrum",
          {
            symbol: "WETH",
            decimals: 8,
            address: "sei1pf5j3dgngm8yj2xkwmvmvt87g4vyc0szpjz92q8ly9erh23ytn4s983htv",
            original: "Arbitrum"
          }
        ],
        [
          "WETHbase",
          {
            symbol: "WETH",
            decimals: 8,
            address: "sei1kdqylzcv86t7slg8m30mlfgna9xsrusghdgnavvurkv0rku7jvqqta7lka",
            original: "Base"
          }
        ],
        [
          "USDCbase",
          {
            symbol: "USDC",
            decimals: 6,
            address: "sei1lf6ghmrkd7gn5jlj6xw64suycpjy7g4s5q92fc2gef4f8q3znanq95mmgv",
            original: "Base"
          }
        ],
        [
          "tBTCsol",
          {
            symbol: "tBTC",
            decimals: 8,
            address: "sei1aj3uu9ejt8fk6rpjfhzluqnzqmv3enlndjmt8llkr7dn2dtz55xst4s3mn",
            original: "Solana"
          }
        ],
        [
          "SEI",
          {
            symbol: "SEI",
            decimals: 6,
            address: "usei"
          }
        ]
      ]
    ],
    [
      "Arbitrum",
      [
        [
          "WETH",
          {
            symbol: "WETH",
            decimals: 18,
            address: "0x285d75E04D78F53f4Ed29A506a7e8479EEf3035f",
            original: "Ethereum"
          }
        ],
        [
          "USDCeth",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0x42A212A2E7eA8feF4ED28F439F16A6ABDd34DA35",
            original: "Ethereum"
          }
        ],
        [
          "USDT",
          {
            symbol: "USDT",
            decimals: 6,
            address: "0x2B732F5ad6117818Ad3b7aC73C16033F6ECD78E5",
            original: "Ethereum"
          }
        ],
        [
          "WMATIC",
          {
            symbol: "WMATIC",
            decimals: 18,
            address: "0x50FD4064cC536a964E2E0Dc7B3fE2313Ab386bEA",
            original: "Polygon"
          }
        ],
        [
          "WBNB",
          {
            symbol: "WBNB",
            decimals: 18,
            address: "0xB039aC4Fa8Ed99d30C2f7D791294A9d5FAd698eF",
            original: "Bsc"
          }
        ],
        [
          "WAVAX",
          {
            symbol: "WAVAX",
            decimals: 18,
            address: "0x92b0C4D27a05921Ded4BB117755990F567aEe049",
            original: "Avalanche"
          }
        ],
        [
          "USDCavax",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0xb39697B8BA5df91A169690DfEf88B911436619F2",
            original: "Avalanche"
          }
        ],
        [
          "CELO",
          {
            symbol: "CELO",
            decimals: 18,
            address: "0x9592eE6eD1D9E611b7aa6F20CCbD7Ba571Be8bdd",
            original: "Celo"
          }
        ],
        [
          "WSOL",
          {
            symbol: "WSOL",
            decimals: 9,
            address: "0xF8cbdc4E54281b801f182039c250Ad6d13818250",
            original: "Solana"
          }
        ],
        [
          "SUI",
          {
            symbol: "SUI",
            decimals: 9,
            address: "0xe64e2139fdf6Ee7e3795FE51955e21bA3d9eB9F7",
            original: "Sui"
          }
        ],
        [
          "APT",
          {
            symbol: "APT",
            decimals: 8,
            address: "0xa81C3BEf2d6f10213b860458DC119666C0ba13bf",
            original: "Aptos"
          }
        ],
        [
          "ETHarbitrum",
          {
            symbol: "ETH",
            decimals: 18,
            address: "native",
            wrappedKey: "WETHarbitrum"
          }
        ],
        [
          "WETHarbitrum",
          {
            symbol: "WETH",
            decimals: 18,
            address: "0xee01c0cd76354c383b8c7b4e65ea88d00b06f36f"
          }
        ],
        [
          "USDCarbitrum",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0xfd064A18f3BF249cf1f87FC203E90D8f650f2d63"
          }
        ],
        [
          "WETHoptimism",
          {
            symbol: "WETH",
            decimals: 18,
            address: "0xFd903eA23Bf65f26FdAf2eeb589cf007b108882E",
            original: "Optimism"
          }
        ],
        [
          "WETHbase",
          {
            symbol: "WETH",
            decimals: 18,
            address: "0xbC4CB3CD7186fD457C072298C48d0eDf7213CAEa",
            original: "Base"
          }
        ],
        [
          "tBTC",
          {
            symbol: "tBTC",
            decimals: 18,
            address: "0x97B5fE27a82b2B187D9a19C5782d9eB93B82DaC3",
            original: "Ethereum"
          }
        ],
        [
          "tBTCarbitrum",
          {
            symbol: "tBTC",
            decimals: 18,
            address: "0x85727F4725A4B2834e00Db1AA8e1b843a188162F"
          }
        ],
        [
          "tBTCsol",
          {
            symbol: "tBTC",
            decimals: 8,
            address: "0x227115F659f7c2939D23FedE68583F5291c395A6",
            original: "Solana"
          }
        ],
        [
          "SEI",
          {
            symbol: "SEI",
            decimals: 6,
            address: "0x90eC817A1f7C1Eb18dD2985C534A78dD88747F47",
            original: "Sei"
          }
        ]
      ]
    ],
    [
      "Optimism",
      [
        [
          "WETH",
          {
            symbol: "WETH",
            decimals: 18,
            address: "0x33Db338718aC89Cd8DB13B56af05be3a3029BBE5",
            original: "Ethereum"
          }
        ],
        [
          "USDCeth",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0x0382F518AcE1a86224c78B7CDfa67B9774055A1b",
            original: "Ethereum"
          }
        ],
        [
          "WMATIC",
          {
            symbol: "WMATIC",
            decimals: 18,
            address: "0x427B5a0b0384D7FD3AF81805A166a2d9C1116D7d",
            original: "Polygon"
          }
        ],
        [
          "WGLMR",
          {
            symbol: "WGLMR",
            decimals: 18,
            address: "0x99436d62259532E0407A7aE78A3b48D119B13903",
            original: "Moonbeam"
          }
        ],
        [
          "WSOL",
          {
            symbol: "WSOL",
            decimals: 9,
            address: "0x06EcAF6638070Ccf3b3dEA421b3becAA57f3e559",
            original: "Solana"
          }
        ],
        [
          "ETHoptimism",
          {
            symbol: "ETH",
            decimals: 18,
            address: "native",
            wrappedKey: "WETHoptimism"
          }
        ],
        [
          "WETHoptimism",
          {
            symbol: "WETH",
            decimals: 18,
            address: "0x4200000000000000000000000000000000000006"
          }
        ],
        [
          "USDCoptimism",
          {
            symbol: "USDC",
            decimals: 6,
            address: "0xe05606174bac4A6364B31bd0eCA4bf4dD368f8C6"
          }
        ],
        [
          "WETHbase",
          {
            symbol: "WETH",
            decimals: 18,
            address: "0x04b559971c90Dfb12D9795E95883e55f2fcf34Ed",
            original: "Base"
          }
        ],
        [
          "tBTC",
          {
            symbol: "tBTC",
            decimals: 18,
            address: "0x5D89a5BcB86F15a2CCAb05e7E3bEE23fDF246a64",
            original: "Ethereum"
          }
        ],
        [
          "tBTCpolygon",
          {
            symbol: "tBTC",
            decimals: 18,
            address: "0xE04e0F5f2C6ce45A40482C3AB92CA91D6741D717",
            original: "Polygon"
          }
        ],
        [
          "tBTCoptimism",
          {
            symbol: "tBTC",
            decimals: 18,
            address: "0x1a53759DE2eADf73bd0b05c07a4F1F5B7912dA3d"
          }
        ],
        [
          "SEI",
          {
            symbol: "SEI",
            decimals: 6,
            address: "0xE12be3D96fE101246bF2d290184B0eC6D35d02CA",
            original: "Sei"
          }
        ]
      ]
    ],
    [
      "Wormchain",
      [
        [
          "WETH",
          {
            symbol: "WETH",
            decimals: 8,
            address: "wormhole1vguuxez2h5ekltfj9gjd62fs5k4rl2zy5hfrncasykzw08rezpfs63pmq2",
            original: "Ethereum"
          }
        ],
        [
          "USDCeth",
          {
            symbol: "USDC",
            decimals: 6,
            address: "wormhole1rl8su3hadqqq2v86lscpuklsh2mh84cxqvjdew4jt9yd07dzekyqkmcy3p",
            original: "Ethereum"
          }
        ],
        [
          "USDT",
          {
            symbol: "USDT",
            decimals: 6,
            address: "wormhole1v2efcqkp2qtev06t0ksjnx6trxdd0f7fxg2zdrtzr8cr9wdpjkyqkv9ch6",
            original: "Ethereum"
          }
        ],
        [
          "DAI",
          {
            symbol: "DAI",
            decimals: 8,
            address: "wormhole1uuwad4khwek2h05gmkktzmh8l4t0ep54yydlsqg0l4y2uh3tqfyq3an9k6",
            original: "Ethereum"
          }
        ],
        [
          "WMATIC",
          {
            symbol: "WMATIC",
            decimals: 8,
            address: "wormhole1vhjnzk9ly03dugffvzfcwgry4dgc8x0sv0nqqtfxj3ajn7rn5ghq6whn2p",
            original: "Polygon"
          }
        ],
        [
          "WBNB",
          {
            symbol: "WBNB",
            decimals: 8,
            address: "wormhole1335rlmhujm0gj5e9gh7at9jpqvqckz0mpe4v284ar4lw5mlkryzsnetfsj",
            original: "Bsc"
          }
        ],
        [
          "WAVAX",
          {
            symbol: "WAVAX",
            decimals: 8,
            address: "wormhole1tqwwyth34550lg2437m05mjnjp8w7h5ka7m70jtzpxn4uh2ktsmq8dv649",
            original: "Avalanche"
          }
        ],
        [
          "USDCavax",
          {
            symbol: "USDC",
            decimals: 6,
            address: "wormhole1qum2tr7hh4y7ruzew68c64myjec0dq2s2njf6waja5t0w879lutqv2exs9",
            original: "Avalanche"
          }
        ],
        [
          "CELO",
          {
            symbol: "CELO",
            decimals: 8,
            address: "wormhole1e8z2wjelypwxw5sey62jvwjyup88w55q3h6m0x8jtwjf6sx5c7ys4mzydk",
            original: "Celo"
          }
        ],
        [
          "WGLMR",
          {
            symbol: "WGLMR",
            decimals: 8,
            address: "wormhole10sfpr8ykh9xn93u8xec4ed3990nmvh86e0vaegkauqhlkxspysyqwavrxx",
            original: "Moonbeam"
          }
        ],
        [
          "WSOL",
          {
            symbol: "WSOL",
            decimals: 8,
            address: "wormhole1gryz69gzl6mz2m66a4twg922jtlc47nlx73sxv88lvq86du5zvyqz3mt23",
            original: "Solana"
          }
        ],
        [
          "USDCsol",
          {
            symbol: "USDC",
            decimals: 6,
            address: "wormhole1ced9v4plkf25q8c6k9gz0guq6l4xyjujpjlvxfg8lpaqywkmamashswq7p",
            original: "Solana"
          }
        ],
        [
          "SUI",
          {
            symbol: "SUI",
            decimals: 8,
            address: "wormhole1yf4p93xu68j5fseupm4laj4k6f60gy7ynx6r5vvyr9c0hl3uy8vqpqd6h0",
            original: "Sui"
          }
        ],
        [
          "APT",
          {
            symbol: "APT",
            decimals: 8,
            address: "wormhole1u8rft0gee23fa6a0t4t88ualrza5lj8ses4aur0l66c7efpvjezqchv34j",
            original: "Aptos"
          }
        ],
        [
          "WETHarbitrum",
          {
            symbol: "WETH",
            decimals: 8,
            address: "wormhole186k0cp83c3wyvapgh8fxf66ededemzrfujvjfsx0xw3vr0u9g8sq2y30vx",
            original: "Arbitrum"
          }
        ],
        [
          "USDCarbitrum",
          {
            symbol: "USDC",
            decimals: 6,
            address: "wormhole1s3pk90ccfl6ueehnj8s9pdgyjjlspmr3m5rv46arjh5v4g08dd0qrchjrk",
            original: "Arbitrum"
          }
        ],
        [
          "WETHoptimism",
          {
            symbol: "WETH",
            decimals: 8,
            address: "wormhole12eu6c7f67l8gdl2lt0hz0dgdh24dhune6wjgy5t0es3tpfzhc3yspwnpfy",
            original: "Optimism"
          }
        ],
        [
          "USDCoptimism",
          {
            symbol: "USDC",
            decimals: 6,
            address: "wormhole1u5z7097gm57zvun9wqsx6jxej2gpdjhg9l9xfe58rhpm29rtjmfqfnl4yv",
            original: "Optimism"
          }
        ],
        [
          "WETHbase",
          {
            symbol: "WETH",
            decimals: 8,
            address: "wormhole10p89p4zh00dwdg8h52sysrqm0l2j47jj3kmg93pnz2a039ucw7esgl5vl9",
            original: "Base"
          }
        ],
        [
          "USDCbase",
          {
            symbol: "USDC",
            decimals: 6,
            address: "wormhole1ja4txt6m0jjq0gmjtmv442f8wk0r5f5apaya0z55wwlrpg3p5xaq3qxw7h",
            original: "Base"
          }
        ],
        [
          "tBTCarbitrum",
          {
            symbol: "tBTC",
            decimals: 8,
            address: "wormhole1rm8ztmk20lrd6ex8uqq3yu7a6eyfjwvg53pcuuj22ffe2y8r3yzqr8j4v9",
            original: "Arbitrum"
          }
        ],
        [
          "wstETH",
          {
            symbol: "wstETH",
            decimals: 8,
            address: "wormhole1u2zdjcczjrenwmf57fmrpensk4the84azdm05m3unm387rm8asdsxqwfeu",
            original: "Ethereum"
          }
        ]
      ]
    ],
    [
      "Osmosis",
      [
        [
          "WETH",
          {
            symbol: "WETH",
            decimals: 8,
            address: "ibc/A4A8B6AE885DACD75B228031C0D18AD7EE1B914CED30C9F6F4230DDBD4A1CF2B",
            original: "Ethereum"
          }
        ],
        [
          "USDCeth",
          {
            symbol: "USDC",
            decimals: 6,
            address: "ibc/3BB8C4BD1C90599B2FA5B5839DD0813EF7B94B0BD0904C4C5A61498AE81E0EE9",
            original: "Ethereum"
          }
        ],
        [
          "USDT",
          {
            symbol: "USDT",
            decimals: 6,
            address: "ibc/1941ED1147121BA7DF35559597B6EB3251844DBBBE4557337D957CB95E0978C2",
            original: "Ethereum"
          }
        ],
        [
          "DAI",
          {
            symbol: "DAI",
            decimals: 8,
            address: "ibc/2864B3418775DDB90EE1410EFF822FDA94E9F0FF77FC8771644761C79EDFE7A3",
            original: "Ethereum"
          }
        ],
        [
          "WMATIC",
          {
            symbol: "WMATIC",
            decimals: 8,
            address: "ibc/43F15553F8598186394E81E18604B8B4532B2D7E855D9FFE68A2EF6802C18BE4",
            original: "Polygon"
          }
        ],
        [
          "WBNB",
          {
            symbol: "WBNB",
            decimals: 8,
            address: "ibc/65A67BA10DE2378B32AC5A822321E370966D3D4E180DEFB4C3C5245B21088DDF",
            original: "Bsc"
          }
        ],
        [
          "WAVAX",
          {
            symbol: "WAVAX",
            decimals: 8,
            address: "ibc/99EAD53D49EC7CC4E2E2EB26C22CF81C16727DF0C4BF7F7ACBF0D22D910DB5DE",
            original: "Avalanche"
          }
        ],
        [
          "USDCavax",
          {
            symbol: "USDC",
            decimals: 6,
            address: "ibc/EC9FA5074F34F0644A025BB0263FDAE8F364C5E08523F6464465EF1010FF5A3A",
            original: "Avalanche"
          }
        ],
        [
          "CELO",
          {
            symbol: "CELO",
            decimals: 8,
            address: "ibc/3A4EA3F8096856C0802F86B218DD74213B4C10224AA44BBD54AEAAA2ABF078BA",
            original: "Celo"
          }
        ],
        [
          "WGLMR",
          {
            symbol: "WGLMR",
            decimals: 8,
            address: "ibc/7DB06BB67428510AFC3967DC90F5632C679D55D8C487A951A0EEC3160AF492A6",
            original: "Moonbeam"
          }
        ],
        [
          "WSOL",
          {
            symbol: "WSOL",
            decimals: 8,
            address: "ibc/B5D53105A7AA2BEC4DA4B3304228F3856219AE7CF84A9023043C481629E3E319",
            original: "Solana"
          }
        ],
        [
          "USDCsol",
          {
            symbol: "USDC",
            decimals: 6,
            address: "ibc/35A0467DE5744662078DE8B36CBBE0CF0EAA022565A3E6630CB375DDEBB96E05",
            original: "Solana"
          }
        ],
        [
          "SUI",
          {
            symbol: "SUI",
            decimals: 8,
            address: "ibc/30778BA41ADF2D8A70B90DB53C2E0251731A40276EF6737215BB1A6ED9E90078",
            original: "Sui"
          }
        ],
        [
          "APT",
          {
            symbol: "APT",
            decimals: 8,
            address: "ibc/7C495BD95757ED662A897C139F1C9F18275A86EE7203A0B073E2DB12B1E19D63",
            original: "Aptos"
          }
        ],
        [
          "WETHarbitrum",
          {
            symbol: "WETH",
            decimals: 8,
            address: "ibc/221A4AADF7972F3BB8F48A6CA984FF0AE65B5D973FF1A695B9642AD702F51789",
            original: "Arbitrum"
          }
        ],
        [
          "USDCarbitrum",
          {
            symbol: "USDC",
            decimals: 6,
            address: "ibc/06ED2700071B5A9C582F51A556537DA94E69EF547E7E6CCD8BFA3D95C818A525",
            original: "Arbitrum"
          }
        ],
        [
          "WETHoptimism",
          {
            symbol: "WETH",
            decimals: 8,
            address: "ibc/80B3FECB24A4CE94537444E5BF937AC4C08A39BF90D59620D278FA185BD2B148",
            original: "Optimism"
          }
        ],
        [
          "USDCoptimism",
          {
            symbol: "USDC",
            decimals: 6,
            address: "ibc/0A98A3947189D7C368170C76C3EF49486DDBE095F34B72A3C7F92AEBE1013A1D",
            original: "Optimism"
          }
        ],
        [
          "WETHbase",
          {
            symbol: "WETH",
            decimals: 8,
            address: "ibc/A45069EA82C933945973E66E4222EEE4624498D4483508FE9BEBF9D519F2132F",
            original: "Base"
          }
        ],
        [
          "USDCbase",
          {
            symbol: "USDC",
            decimals: 6,
            address: "ibc/2E4F8BC7F7AF33752CF7E290CAD4417EE67CD18FFC0D099E6519A440E588E0CE",
            original: "Base"
          }
        ],
        [
          "OSMO",
          {
            symbol: "OSMO",
            decimals: 6,
            address: "uosmo"
          }
        ],
        [
          "wstETH",
          {
            symbol: "wstETH",
            decimals: 8,
            address: "ibc/C66B7DB3ED665D2F5FE8ED15E88B5913A37D80601E161C5E53A743DE12C0FB85",
            original: "Ethereum"
          }
        ]
      ]
    ],
    [
      "Cosmoshub",
      [
        [
          "WETH",
          {
            symbol: "WETH",
            decimals: 8,
            address: "ibc/77FE9153FA76C3107CB9F6633AC33509A58529E9622327F216BA8107C79C2DE3",
            original: "Ethereum"
          }
        ],
        [
          "USDCeth",
          {
            symbol: "USDC",
            decimals: 6,
            address: "ibc/D0EC31D1176BB69EA1A7CF7172CA0380B7AF488AFC6D55B101B8363C2141CD4F",
            original: "Ethereum"
          }
        ],
        [
          "USDT",
          {
            symbol: "USDT",
            decimals: 6,
            address: "ibc/755FBC53FFB46FB505B5269F9BEDF47041F2A0EF2FF8D0520315403E5925C80A",
            original: "Ethereum"
          }
        ],
        [
          "DAI",
          {
            symbol: "DAI",
            decimals: 8,
            address: "ibc/5F21E975410DA22AF565B1772DC45AD0BD5F6DA004981EBE291763F3D2C72A96",
            original: "Ethereum"
          }
        ],
        [
          "WMATIC",
          {
            symbol: "WMATIC",
            decimals: 8,
            address: "ibc/37FB599287C6963C413E915FDE83EFA69A3CE8147675DD5A7F974B45F39C8A31",
            original: "Polygon"
          }
        ],
        [
          "WBNB",
          {
            symbol: "WBNB",
            decimals: 8,
            address: "ibc/5B0D5974A56332468DD4B2D07C96A7386FCF8FE7303FF41234F90E410EF51937",
            original: "Bsc"
          }
        ],
        [
          "WAVAX",
          {
            symbol: "WAVAX",
            decimals: 8,
            address: "ibc/BAEAC83736444C09656FBE666FB625974FCCDEE566EB700EBFD2642C5F6CF13A",
            original: "Avalanche"
          }
        ],
        [
          "USDCavax",
          {
            symbol: "USDC",
            decimals: 6,
            address: "ibc/F09E98FA8682FF39130F171E9D89A948B0C3A452F2A31F22B6CC54A3AAE1CD4A",
            original: "Avalanche"
          }
        ],
        [
          "CELO",
          {
            symbol: "CELO",
            decimals: 8,
            address: "ibc/009206915358A002C852A2A2CBEDB8446D2D02E519C815087A01F8BDB4DF77BA",
            original: "Celo"
          }
        ],
        [
          "WGLMR",
          {
            symbol: "WGLMR",
            decimals: 8,
            address: "ibc/1EEDF447A6B046B20C00B1497BED5947219AEEBE0D9A85235C85133A554DF7A4",
            original: "Moonbeam"
          }
        ],
        [
          "WSOL",
          {
            symbol: "WSOL",
            decimals: 8,
            address: "ibc/D3EA463A51E31B2B30BED1978575CAC145DBAB354B8A0EA5D4CFB12D737AF790",
            original: "Solana"
          }
        ],
        [
          "USDCsol",
          {
            symbol: "USDC",
            decimals: 6,
            address: "ibc/26D8D6C63C8D37A5127591DDA905E04CC69CBD3A64F9DA3B1DA3FB0B6A7D9FA5",
            original: "Solana"
          }
        ],
        [
          "SUI",
          {
            symbol: "SUI",
            decimals: 8,
            address: "ibc/129EC6B8A41BE07F94DD267F552F4AE1D5EAEBB51634A1468556AF06C10C2692",
            original: "Sui"
          }
        ],
        [
          "APT",
          {
            symbol: "APT",
            decimals: 8,
            address: "ibc/0CCA5EB15BC2FE474E71DBC9698302CDE260B6F6548F91C30002F7CBF228197B",
            original: "Aptos"
          }
        ],
        [
          "WETHarbitrum",
          {
            symbol: "WETH",
            decimals: 8,
            address: "ibc/AB4046AF5B6F146C006DE4DECAD929D24F762A701E09EC8B29000EC63A6E649B",
            original: "Arbitrum"
          }
        ],
        [
          "USDCarbitrum",
          {
            symbol: "USDC",
            decimals: 6,
            address: "ibc/6D1B6A7A9EF692A279A6B5994C98C0D598D003D9203BE8309F14B6E57A58506E",
            original: "Arbitrum"
          }
        ],
        [
          "WETHoptimism",
          {
            symbol: "WETH",
            decimals: 8,
            address: "ibc/A0298483510D803A045AA7F49CCBD0F9D01010FE0B1A346EBDFFF4BA820C3D21",
            original: "Optimism"
          }
        ],
        [
          "USDCoptimism",
          {
            symbol: "USDC",
            decimals: 6,
            address: "ibc/CE3F2FE630DA6A1187F085CDC8D59BA8B20DA48F4866F2D71C5AB7A1D5859933",
            original: "Optimism"
          }
        ],
        [
          "WETHbase",
          {
            symbol: "WETH",
            decimals: 8,
            address: "ibc/97035986A4BD0AF555713355A02EA31A4526616B6543E019E0D750007FABE06C",
            original: "Base"
          }
        ],
        [
          "USDCbase",
          {
            symbol: "USDC",
            decimals: 6,
            address: "ibc/8560BA5F45C95AE716C05978E364F50C98347ACBEC745840C30F91611FA36698",
            original: "Base"
          }
        ],
        [
          "wstETH",
          {
            symbol: "wstETH",
            decimals: 8,
            address: "ibc/5BB02667F9F0C8284FCF7716065C2779039817FBCB91E937F5149FE89FD8F202",
            original: "Ethereum"
          }
        ],
        [
          "ATOM",
          {
            symbol: "ATOM",
            decimals: 6,
            address: "uatom"
          }
        ]
      ]
    ],
    [
      "Evmos",
      [
        [
          "EVMOS",
          {
            symbol: "EVMOS",
            decimals: 18,
            address: "atevmos"
          }
        ]
      ]
    ],
    [
      "Kujira",
      [
        [
          "KUJI",
          {
            symbol: "KUJI",
            decimals: 6,
            address: "ukuji"
          }
        ]
      ]
    ],
    [
      "Klaytn",
      [
        [
          "KLAY",
          {
            symbol: "KLAY",
            decimals: 18,
            address: "native",
            wrappedKey: "WKLAY"
          }
        ],
        [
          "WKLAY",
          {
            symbol: "WKLAY",
            decimals: 18,
            address: "0x0339d5Eb6D195Ba90B13ed1BCeAa97EbD198b106"
          }
        ]
      ]
    ],
    [
      "XRPLEVM",
      [
        [
          "XRP",
          {
            symbol: "XRP",
            decimals: 18,
            address: "native",
            wrappedKey: "WXRP"
          }
        ],
        [
          "WXRP",
          {
            symbol: "WXRP",
            decimals: 18,
            address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"
          }
        ]
      ]
    ],
    [
      "Sepolia",
      [
        [
          "ETHsepolia",
          {
            symbol: "ETH",
            decimals: 18,
            address: "native",
            wrappedKey: "WETHsepolia"
          }
        ],
        [
          "WETHsepolia",
          {
            symbol: "WETH",
            decimals: 18,
            address: "0xeef12A83EE5b7161D3873317c8E0E7B76e0B5D9c"
          }
        ]
      ]
    ],
    [
      "ArbitrumSepolia",
      [
        [
          "ETHarbitrum_sepolia",
          {
            symbol: "ETH",
            decimals: 18,
            address: "native",
            wrappedKey: "WETHarbitrum_sepolia"
          }
        ],
        [
          "WETHarbitrum_sepolia",
          {
            symbol: "WETH",
            decimals: 18,
            address: "0x980B62Da83eFf3D4576C647993b0c1D7faf17c73"
          }
        ]
      ]
    ],
    [
      "BaseSepolia",
      [
        [
          "ETHbase_sepolia",
          {
            symbol: "ETH",
            decimals: 18,
            address: "native",
            wrappedKey: "WETHbase_sepolia"
          }
        ],
        [
          "WETHbase_sepolia",
          {
            symbol: "WETH",
            decimals: 18,
            address: "0x4200000000000000000000000000000000000006"
          }
        ]
      ]
    ],
    [
      "OptimismSepolia",
      [
        [
          "ETHoptimism_sepolia",
          {
            symbol: "ETH",
            decimals: 18,
            address: "native",
            wrappedKey: "WETHoptimism_sepolia"
          }
        ],
        [
          "WETHoptimism_sepolia",
          {
            symbol: "WETH",
            decimals: 18,
            address: "0x4200000000000000000000000000000000000006"
          }
        ]
      ]
    ],
    [
      "MegaETH",
      [
        [
          "ETH",
          {
            symbol: "ETH",
            decimals: 18,
            address: "native",
            wrappedKey: "WETH"
          }
        ],
        [
          "WETH",
          {
            symbol: "WETH",
            decimals: 18,
            address: "0x4200000000000000000000000000000000000006"
          }
        ]
      ]
    ],
    [
      "ZeroGravity",
      [
        [
          "0G",
          {
            symbol: "0G",
            decimals: 18,
            address: "native",
            wrappedKey: "W0G"
          }
        ],
        [
          "W0G",
          {
            symbol: "W0G",
            decimals: 18,
            address: "0x1cd0690ff9a693f5ef2dd976660a8dafc81a109c"
          }
        ]
      ]
    ]
  ], Bt = w(Ir, [
    0,
    [
      1,
      2
    ]
  ]);
  function pa(e, a) {
    if (e !== "Devnet") {
      if (e === "Mainnet") {
        if (!gt.has(a)) return;
        const t = gt.get(a);
        return Object.fromEntries(t.map(([s, i]) => [
          s,
          {
            ...i,
            chain: a,
            key: s
          }
        ]));
      }
      if (e === "Testnet") {
        if (!Bt.has(a)) return;
        const t = Bt.get(a);
        return Object.fromEntries(t.map(([s, i]) => [
          s,
          {
            ...i,
            chain: a,
            key: s
          }
        ]));
      }
      throw new Error("Unsupported network: " + e);
    }
  }
  function Hr(e, a) {
    const t = pa(e, a);
    return t ? Ge.native(t) : void 0;
  }
  function Lr(e, a, t) {
    const s = pa(e, a);
    return s ? Ge.byAddress(s, t) : void 0;
  }
  function Nr(e, a, t) {
    const s = pa(e, a);
    return s ? Ge.byKey(s, t) : void 0;
  }
  _r = function(e, a) {
    const t = {
      coreBridge: bs.get(e, a),
      tokenBridge: us.get(e, a),
      nftBridge: Cs.get(e, a),
      relayer: hs.get(e, a),
      tokenBridgeRelayer: Es.get(e, a),
      tbtc: ia.get(e, a),
      executor: As.get(e, a),
      customConsistencyLevel: ps.get(e, a),
      executorQuoter: Ds.get(e, a)
    };
    return Na.has(e, a) && (t.executorTokenBridge = Na.get(e, a)), za.has(e, a) && (t.cctp = za.get(e, a)), _a.has(e, a) && (t.gateway = _a.get(e, a)), ja.has(e, a) && (t.translator = ja.get(e, a)), qa.has(e, a) && (t.portico = qa.get(e, a)), ia.has(e, a) && (t.tbtc = ia.get(e, a)), t;
  };
  V = function(e) {
    return typeof e == "string" && e === "native";
  };
  Ka = function(e) {
    return {
      chain: e,
      address: "native"
    };
  };
  Da = function(e) {
    return typeof e == "object" && e.address !== void 0 && e.chain !== void 0 && Gt(e.chain);
  };
  Md = function(e) {
    return Da(e) && e.isUnattested === true && e.decimals !== void 0 && e.originalTokenId !== void 0;
  };
  Id = function(e, a) {
    return e.chain !== a.chain ? false : V(e.address) && V(a.address) ? true : ae(e) === ae(a);
  };
  ae = function(e) {
    return Da(e) && V(e.address) ? e.address : e.address.toNative(e.chain).toString();
  };
  Hd = function(e) {
    if (V(e.address)) throw new Error("Invalid address, cannot convert the string literal `native` to a Universal Address");
    return e.address.toUniversalAddress().toString();
  };
  jr = function(e, a, t) {
    let s;
    if (Da(t)) {
      if (!V(t.address)) return [
        false,
        t
      ];
      s = t.address;
    } else s = t;
    if (V(s)) {
      const r = Hr(e, a);
      if (!r) throw new Error("Invalid destination token");
      const n = r.wrappedKey, o = Nr(e, a, n);
      if (!o) throw new Error("Invalid wrapped token key: " + n);
      return [
        true,
        {
          chain: a,
          address: Se(a, o.address)
        }
      ];
    }
    return [
      false,
      {
        chain: a,
        address: s
      }
    ];
  };
  rt = function(e) {
    return e.chain !== void 0 && e.txid !== void 0;
  };
  Sa = function(e) {
    return xi.map((t) => {
      const s = we(t);
      let i = "";
      try {
        i = ss.get(e, t);
      } catch {
      }
      const r = pa(e, t), n = r ? Object.values(r).find((f) => V(f.address) && f.wrappedKey) : void 0, o = n ? r[n.wrappedKey] : void 0;
      return {
        key: t,
        platform: s,
        network: e,
        chainId: me(t),
        finalityThreshold: Ca.get(t) ?? 0,
        blockTime: Za.get(t) ?? 0,
        contracts: _r(e, t),
        nativeTokenDecimals: Zt.get(t) ?? Jt(s),
        nativeChainId: i,
        tokenMap: r,
        wrappedNative: o,
        explorer: ha(e, t),
        rpc: as(e, t),
        graphQL: gs(e, t)
      };
    }).reduce((t, s) => ({
      ...t,
      [s.key]: s
    }), {});
  };
  Ld = class {
    constructor(a, t, s) {
      __publicField(this, "network");
      __publicField(this, "chain");
      __publicField(this, "config");
      __publicField(this, "platform");
      __publicField(this, "rpc");
      __publicField(this, "protocols", /* @__PURE__ */ new Map());
      __publicField(this, "supportsWormholeCore", () => this.supportsProtocol("WormholeCore"));
      __publicField(this, "getWormholeCore", () => this.getProtocol("WormholeCore"));
      __publicField(this, "supportsTokenBridge", () => this.supportsProtocol("TokenBridge"));
      __publicField(this, "getTokenBridge", () => this.getProtocol("TokenBridge"));
      __publicField(this, "supportsAutomaticTokenBridge", () => this.supportsProtocol("AutomaticTokenBridge"));
      __publicField(this, "getAutomaticTokenBridge", () => this.getProtocol("AutomaticTokenBridge"));
      __publicField(this, "supportsExecutorTokenBridge", () => this.supportsProtocol("ExecutorTokenBridge"));
      __publicField(this, "getExecutorTokenBridge", () => this.getProtocol("ExecutorTokenBridge"));
      __publicField(this, "supportsCircleBridge", () => this.supportsProtocol("CircleBridge"));
      __publicField(this, "getCircleBridge", () => this.getProtocol("CircleBridge"));
      __publicField(this, "supportsAutomaticCircleBridge", () => this.supportsProtocol("AutomaticCircleBridge"));
      __publicField(this, "getAutomaticCircleBridge", () => this.getProtocol("AutomaticCircleBridge"));
      __publicField(this, "supportsIbcBridge", () => this.supportsProtocol("IbcBridge"));
      __publicField(this, "getIbcBridge", () => this.getProtocol("IbcBridge"));
      __publicField(this, "supportsPorticoBridge", () => this.supportsProtocol("PorticoBridge"));
      __publicField(this, "getPorticoBridge", () => this.getProtocol("PorticoBridge"));
      __publicField(this, "supportsTBTCBridge", () => this.supportsProtocol("TBTCBridge"));
      __publicField(this, "getTBTCBridge", () => this.getProtocol("TBTCBridge"));
      this.config = t.config[a], this.platform = t, this.chain = this.config.key, this.network = this.config.network, this.rpc = s;
    }
    getRpc() {
      return this.rpc = this.rpc ? this.rpc : this.platform.getRpc(this.chain), this.rpc;
    }
    async getDecimals(a) {
      if (V(a)) return this.config.nativeTokenDecimals;
      if (this.config.tokenMap) {
        const t = ae({
          chain: this.chain,
          address: a
        }), s = Lr(this.network, this.chain, t);
        if (s) return s.decimals;
      }
      return this.platform.utils().getDecimals(this.network, this.chain, await this.getRpc(), a);
    }
    async getBalance(a, t) {
      return this.platform.utils().getBalance(this.network, this.chain, await this.getRpc(), a, t);
    }
    async getLatestBlock() {
      return this.platform.utils().getLatestBlock(await this.getRpc());
    }
    async getLatestFinalizedBlock() {
      return this.platform.utils().getLatestFinalizedBlock(await this.getRpc());
    }
    async parseTransaction(a) {
      return this.platform.parseWormholeMessages(this.chain, await this.getRpc(), a);
    }
    async sendWait(a) {
      return this.platform.utils().sendWait(this.chain, await this.getRpc(), a);
    }
    getToken(a) {
      if (this.config.tokenMap && a in this.config.tokenMap) return this.config.tokenMap[a];
    }
    async getNativeWrappedTokenId() {
      if (this.config.wrappedNative) {
        const { address: t } = this.config.wrappedNative;
        return {
          chain: this.chain,
          address: Se(this.chain, t)
        };
      }
      const a = await this.getTokenBridge();
      return {
        chain: this.chain,
        address: await a.getWrappedNative()
      };
    }
    async getTokenAccount(a, t) {
      return {
        chain: this.chain,
        address: a
      };
    }
    async isToken2022(a) {
      return false;
    }
    supportsProtocol(a) {
      return Pr(this.chain, a);
    }
    async getProtocol(a, t, s) {
      if (!t && this.protocols.has(a)) return this.protocols.get(a);
      const i = t ? {
        ...this.config.contracts,
        ...t
      } : this.config.contracts, r = s ?? await this.getRpc(), n = this.platform.getProtocolInitializer(a);
      let o;
      if (s) {
        if (t) throw new Error("Custom contracts are currently not supported with custom rpc connection. Add the contracts to the base config.");
        o = await this.platform.getProtocol(a, r);
      } else if (kr(n)) {
        const f = await n.getVersion(r, i);
        o = new n(this.network, this.chain, r, i, f);
      } else o = new n(this.network, this.chain, r, i);
      return t || this.protocols.set(a, o), o;
    }
  };
  ys = function(e) {
    return qr(e) || nt(e);
  };
  qr = function(e) {
    return typeof e == "object" && "chain" in e && typeof e.chain == "function" && "address" in e && typeof e.address == "function" && "sign" in e && typeof e.sign == "function";
  };
  nt = function(e) {
    return typeof e == "object" && "chain" in e && typeof e.chain == "function" && "address" in e && typeof e.address == "function" && "signAndSend" in e && typeof e.signAndSend == "function";
  };
  Nd = class {
    constructor(a, t, s) {
      __publicField(this, "_chain");
      __publicField(this, "_address");
      __publicField(this, "_signer");
      this._chain = a, this._address = t, this._signer = s;
    }
    unwrap() {
      return this._signer;
    }
  };
  _d = function(e) {
    return ys(e) && "unwrap" in e && typeof e.unwrap == "function";
  };
  Fe = function(e) {
    return e.sequence !== void 0 && e.emitter !== void 0 && e.chain !== void 0;
  };
  ma = function(e) {
    return e.hash !== void 0;
  };
  zr = function(e) {
    return e.dstChannel !== void 0 && e.srcChannel !== void 0 && e.chain !== void 0 && e.srcPort !== void 0 && e.dstPort !== void 0 && e.sequence !== void 0;
  };
  xs = function(e) {
    return e.gateway_transfer !== void 0;
  };
  Fs = function(e) {
    return e.gateway_transfer_with_payload !== void 0;
  };
  Vr = function(e) {
    return e.gateway_ibc_token_bridge_payload !== void 0;
  };
  Kr = function(e) {
    return e.token !== void 0 && e.amount !== void 0 && e.from !== void 0 && e.to !== void 0;
  };
  jd = function(e) {
    if (typeof e == "string" && (e = JSON.parse(e)), Vr(e) && (e = e.gateway_ibc_token_bridge_payload), xs(e)) return e.gateway_transfer;
    if (Fs(e)) return e.gateway_transfer_with_payload;
    throw new Error(`Unrecognized payload: ${e}`);
  };
  qd = function(e) {
    if (Kr(e)) {
      const a = e.payload ? Ve.encode(e.payload) : void 0;
      return yt(e.to.chain, e.to.address.toNative(e.to.chain), e.fee, e.nonce ?? Math.round(Math.random() * 1e5), a);
    }
    return yt(Ke(e.chain), e.recipient, BigInt(e.fee), e.nonce, e.payload);
  };
  yt = function(e, a, t = 0n, s, i) {
    const r = typeof a == "string" ? a : Ve.encode(a.toString()), n = {
      chain: me(e),
      recipient: r,
      fee: t.toString(),
      nonce: s
    };
    return i ? {
      gateway_transfer_with_payload: {
        ...n,
        payload: i
      }
    } : {
      gateway_transfer: {
        ...n
      }
    };
  };
  zd = function(e) {
    return e.id !== void 0 && e.pending !== void 0 && e.data !== void 0;
  };
  function Ss(e, a) {
    return function() {
      return e.apply(a, arguments);
    };
  }
  const { toString: Gr } = Object.prototype, { getPrototypeOf: ue } = Object, { iterator: Xe, toStringTag: Ts } = Symbol, qe = (({ hasOwnProperty: e }) => (a, t) => e.call(a, t))(Object.prototype), ws = (e) => typeof e == "string" && (e === "__proto__" || e === "constructor" || e === "prototype"), Ws = (e, a, t) => e === Object.prototype || !t && a === null, Xr = (e) => {
    if (!Object.isExtensible(e)) return false;
    const a = Object.getOwnPropertyNames(e);
    return Object.getOwnPropertySymbols && a.push(...Object.getOwnPropertySymbols(e)), a.every((t) => {
      if (ws(t)) return false;
      const s = Object.getOwnPropertyDescriptor(e, t);
      return !!s && s.configurable && s.writable === true;
    });
  }, ze = (e, a) => {
    let t = e;
    const s = [];
    for (; t != null; ) {
      if (s.indexOf(t) !== -1) return false;
      s.push(t);
      const i = ue(t);
      if (Ws(t, i, t === e)) return false;
      if (qe(t, a)) return true;
      t = i;
    }
    return false;
  }, $r = (e, a) => e != null && ze(e, a) ? e[a] : void 0, Yr = (e) => {
    if (e == null || typeof e != "object" && typeof e != "function") return e;
    const a = ue(e);
    if (a === null && Xr(e)) return e;
    const t = /* @__PURE__ */ Object.create(null), s = /* @__PURE__ */ Object.create(null), i = [];
    let r = e;
    for (; r != null && i.indexOf(r) === -1; ) {
      i.push(r);
      const n = r === e ? a : ue(r);
      if (Ws(r, n, r === e)) break;
      const o = Object.getOwnPropertyNames(r);
      Object.getOwnPropertySymbols && o.push(...Object.getOwnPropertySymbols(r));
      for (const f of o) ws(f) || qe(s, f) || (t[f] = e[f], s[f] = true);
      r = n;
    }
    return t;
  }, ot = /* @__PURE__ */ ((e) => (a) => {
    const t = Gr.call(a);
    return e[t] || (e[t] = t.slice(8, -1).toLowerCase());
  })(/* @__PURE__ */ Object.create(null)), X = (e) => (e = e.toLowerCase(), (a) => ot(a) === e), ga = (e) => (a) => typeof a === e, { isArray: De } = Array, ge = ga("undefined");
  function We(e) {
    return e !== null && !ge(e) && e.constructor !== null && !ge(e.constructor) && K(e.constructor.isBuffer) && e.constructor.isBuffer(e);
  }
  const Us = X("ArrayBuffer");
  function Qr(e) {
    let a;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? a = ArrayBuffer.isView(e) : a = e && e.buffer && Us(e.buffer), a;
  }
  const Jr = ga("string"), K = ga("function"), vs = ga("number"), Ue = (e) => e !== null && typeof e == "object", Zr = (e) => e === true || e === false, ra = (e) => {
    if (!Ue(e)) return false;
    const a = ue(e);
    return (a === null || a === Object.prototype || ue(a) === null) && !ze(e, Ts) && !ze(e, Xe);
  }, en = (e) => {
    if (!Ue(e) || We(e)) return false;
    try {
      return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
    } catch {
      return false;
    }
  }, an = X("Date"), tn = X("File"), sn = (e) => !!(e && typeof e.uri < "u"), rn = (e) => e && typeof e.getParts < "u", nn = X("Blob"), on = X("FileList"), dn = X("Set"), cn = (e) => Ue(e) && K(e.pipe);
  function ln() {
    return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : {};
  }
  const xt = ln(), Ft = typeof xt.FormData < "u" ? xt.FormData : void 0, fn = (e) => {
    if (!e) return false;
    if (Ft && e instanceof Ft) return true;
    const a = ue(e);
    if (!a || a === Object.prototype || !K(e.append)) return false;
    const t = ot(e);
    return t === "formdata" || t === "object" && K(e.toString) && e.toString() === "[object FormData]";
  }, mn = X("URLSearchParams"), [bn, un, En, An] = [
    "ReadableStream",
    "Request",
    "Response",
    "Headers"
  ].map(X), Cn = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  function $e(e, a, { allOwnKeys: t = false } = {}) {
    if (e === null || typeof e > "u") return;
    let s, i;
    if (typeof e != "object" && (e = [
      e
    ]), De(e)) for (s = 0, i = e.length; s < i; s++) a.call(null, e[s], s, e);
    else {
      if (We(e)) return;
      const r = t ? Object.getOwnPropertyNames(e) : Object.keys(e), n = r.length;
      let o;
      for (s = 0; s < n; s++) o = r[s], a.call(null, e[o], o, e);
    }
  }
  function Os(e, a) {
    if (We(e)) return null;
    a = a.toLowerCase();
    const t = Object.keys(e);
    let s = t.length, i;
    for (; s-- > 0; ) if (i = t[s], a === i.toLowerCase()) return i;
    return null;
  }
  const Ce = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : globalThis, ks = (e) => !ge(e) && e !== Ce;
  function Ga(...e) {
    const { caseless: a, skipUndefined: t } = ks(this) && this || {}, s = {}, i = (r, n) => {
      if (n === "__proto__" || n === "constructor" || n === "prototype") return;
      const o = a && typeof n == "string" && Os(s, n) || n, f = qe(s, o) ? s[o] : void 0;
      ra(f) && ra(r) ? s[o] = Ga(f, r) : ra(r) ? s[o] = Ga({}, r) : De(r) ? s[o] = r.slice() : (!t || !ge(r)) && (s[o] = r);
    };
    for (let r = 0, n = e.length; r < n; r++) {
      const o = e[r];
      if (!o || We(o) || ($e(o, i), typeof o != "object" || De(o))) continue;
      const f = Object.getOwnPropertySymbols(o);
      for (let u = 0; u < f.length; u++) {
        const c = f[u];
        Wn.call(o, c) && i(o[c], c);
      }
    }
    return s;
  }
  const hn = (e, a, t, { allOwnKeys: s } = {}) => ($e(a, (i, r) => {
    t && K(i) ? Object.defineProperty(e, r, {
      __proto__: null,
      value: Ss(i, t),
      writable: true,
      enumerable: true,
      configurable: true
    }) : Object.defineProperty(e, r, {
      __proto__: null,
      value: i,
      writable: true,
      enumerable: true,
      configurable: true
    });
  }, {
    allOwnKeys: s
  }), e), pn = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Dn = (e, a, t, s) => {
    e.prototype = Object.create(a.prototype, s), Object.defineProperty(e.prototype, "constructor", {
      __proto__: null,
      value: e,
      writable: true,
      enumerable: false,
      configurable: true
    }), Object.defineProperty(e, "super", {
      __proto__: null,
      value: a.prototype
    }), t && Object.assign(e.prototype, t);
  }, gn = (e, a, t, s) => {
    let i, r, n;
    const o = {};
    if (a = a || {}, e == null) return a;
    do {
      for (i = Object.getOwnPropertyNames(e), r = i.length; r-- > 0; ) n = i[r], (!s || s(n, e, a)) && !o[n] && (a[n] = e[n], o[n] = true);
      e = t !== false && ue(e);
    } while (e && (!t || t(e, a)) && e !== Object.prototype);
    return a;
  }, Bn = (e, a, t) => {
    e = String(e), (t === void 0 || t > e.length) && (t = e.length), t -= a.length;
    const s = e.indexOf(a, t);
    return s !== -1 && s === t;
  }, yn = (e) => {
    if (!e) return null;
    if (De(e)) return e;
    let a = e.length;
    if (!vs(a)) return null;
    const t = new Array(a);
    for (; a-- > 0; ) t[a] = e[a];
    return t;
  }, xn = /* @__PURE__ */ ((e) => (a) => e && a instanceof e)(typeof Uint8Array < "u" && ue(Uint8Array)), Fn = (e, a) => {
    const s = (e && e[Xe]).call(e);
    let i;
    for (; (i = s.next()) && !i.done; ) {
      const r = i.value;
      a.call(e, r[0], r[1]);
    }
  }, Sn = (e, a) => {
    let t;
    const s = [];
    for (; (t = e.exec(a)) !== null; ) s.push(t);
    return s;
  }, Tn = X("HTMLFormElement"), wn = (e) => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(t, s, i) {
    return s.toUpperCase() + i;
  }), { propertyIsEnumerable: Wn } = Object.prototype, Un = X("RegExp"), Ps = (e, a) => {
    const t = Object.getOwnPropertyDescriptors(e), s = {};
    $e(t, (i, r) => {
      let n;
      (n = a(i, r, e)) !== false && (s[r] = n || i);
    }), Object.defineProperties(e, s);
  }, vn = (e) => {
    Ps(e, (a, t) => {
      if (K(e) && [
        "arguments",
        "caller",
        "callee"
      ].includes(t)) return false;
      const s = e[t];
      if (K(s)) {
        if (a.enumerable = false, "writable" in a) {
          a.writable = false;
          return;
        }
        a.set || (a.set = () => {
          throw Error("Can not rewrite read-only method '" + t + "'");
        });
      }
    });
  }, On = (e, a) => {
    const t = {}, s = (i) => {
      i.forEach((r) => {
        t[r] = true;
      });
    };
    return De(e) ? s(e) : s(String(e).split(a)), t;
  }, kn = () => {
  }, Pn = (e, a) => e != null && Number.isFinite(e = +e) ? e : a;
  function Rn(e) {
    return !!(e && K(e.append) && e[Ts] === "FormData" && e[Xe]);
  }
  const Mn = (e) => {
    const a = /* @__PURE__ */ new WeakSet(), t = (s) => {
      if (Ue(s)) {
        if (a.has(s)) return;
        if (We(s)) return s;
        if (!("toJSON" in s)) {
          a.add(s);
          let i;
          if (dn(s)) {
            i = [];
            for (const r of s) {
              const n = t(r);
              !ge(n) && i.push(n);
            }
          } else i = De(s) ? [] : {}, $e(s, (r, n) => {
            const o = t(r);
            !ge(o) && (i[n] = o);
          });
          return a.delete(s), i;
        }
      }
      return s;
    };
    return t(e);
  }, In = X("AsyncFunction"), Hn = (e) => e && (Ue(e) || K(e)) && K(e.then) && K(e.catch), Rs = ((e, a) => e ? setImmediate : a ? ((t, s) => (Ce.addEventListener("message", ({ source: i, data: r }) => {
    i === Ce && r === t && s.length && s.shift()();
  }, false), (i) => {
    s.push(i), Ce.postMessage(t, "*");
  }))(`axios@${Math.random()}`, []) : (t) => setTimeout(t))(typeof setImmediate == "function", K(Ce.postMessage)), Ln = typeof queueMicrotask < "u" ? queueMicrotask.bind(Ce) : typeof Ma < "u" && Ma.nextTick || Rs, Ms = (e) => e != null && K(e[Xe]), Nn = (e) => e != null && ze(e, Xe) && Ms(e), d = {
    isArray: De,
    isArrayBuffer: Us,
    isBuffer: We,
    isFormData: fn,
    isArrayBufferView: Qr,
    isString: Jr,
    isNumber: vs,
    isBoolean: Zr,
    isObject: Ue,
    isPlainObject: ra,
    isEmptyObject: en,
    isReadableStream: bn,
    isRequest: un,
    isResponse: En,
    isHeaders: An,
    isUndefined: ge,
    isDate: an,
    isFile: tn,
    isReactNativeBlob: sn,
    isReactNative: rn,
    isBlob: nn,
    isRegExp: Un,
    isFunction: K,
    isStream: cn,
    isURLSearchParams: mn,
    isTypedArray: xn,
    isFileList: on,
    forEach: $e,
    merge: Ga,
    extend: hn,
    trim: Cn,
    stripBOM: pn,
    inherits: Dn,
    toFlatObject: gn,
    kindOf: ot,
    kindOfTest: X,
    endsWith: Bn,
    toArray: yn,
    forEachEntry: Fn,
    matchAll: Sn,
    isHTMLForm: Tn,
    hasOwnProperty: qe,
    hasOwnProp: qe,
    hasOwnInPrototypeChain: ze,
    getSafeProp: $r,
    toSafeFlatObject: Yr,
    reduceDescriptors: Ps,
    freezeMethods: vn,
    toObjectSet: On,
    toCamelCase: wn,
    noop: kn,
    toFiniteNumber: Pn,
    findKey: Os,
    global: Ce,
    isContextDefined: ks,
    isSpecCompliantForm: Rn,
    toJSONObject: Mn,
    isAsyncFn: In,
    isThenable: Hn,
    setImmediate: Rs,
    asap: Ln,
    isIterable: Ms,
    isSafeIterable: Nn
  }, _n = d.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent"
  ]), jn = (e) => {
    const a = {};
    let t, s, i;
    return e && e.split(`
`).forEach(function(n) {
      i = n.indexOf(":"), t = n.substring(0, i).trim().toLowerCase(), s = n.substring(i + 1).trim();
      const o = d.hasOwnProp(a, t);
      !t || o && d.hasOwnProp(_n, t) || (t === "set-cookie" ? o ? a[t].push(s) : a[t] = [
        s
      ] : a[t] = o ? a[t] + ", " + s : s);
    }), a;
  };
  function qn(e) {
    let a = 0, t = e.length;
    for (; a < t; ) {
      const s = e.charCodeAt(a);
      if (s !== 9 && s !== 32) break;
      a += 1;
    }
    for (; t > a; ) {
      const s = e.charCodeAt(t - 1);
      if (s !== 9 && s !== 32) break;
      t -= 1;
    }
    return a === 0 && t === e.length ? e : e.slice(a, t);
  }
  const zn = new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+", "g"), Vn = new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+", "g");
  function dt(e, a) {
    return d.isArray(e) ? e.map((t) => dt(t, a)) : qn(String(e).replace(a, ""));
  }
  const Kn = (e) => dt(e, zn), Gn = (e) => dt(e, Vn);
  function Is(e) {
    const a = /* @__PURE__ */ Object.create(null);
    return d.forEach(e.toJSON(), (t, s) => {
      a[s] = Gn(t);
    }), a;
  }
  const St = Symbol("internals");
  function Re(e) {
    return e && String(e).trim().toLowerCase();
  }
  function na(e) {
    return e === false || e == null ? e : d.isArray(e) ? e.map(na) : Kn(String(e));
  }
  function Xn(e) {
    const a = /* @__PURE__ */ Object.create(null), t = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let s;
    for (; s = t.exec(e); ) a[s[1]] = s[2];
    return a;
  }
  const $n = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;
  function Ta(e) {
    let a = 0, t = e.length;
    for (; a < t; ) {
      const s = e.charCodeAt(a);
      if (s !== 9 && s !== 32) break;
      a += 1;
    }
    for (; t > a; ) {
      const s = e.charCodeAt(t - 1);
      if (s !== 9 && s !== 32) break;
      t -= 1;
    }
    return a === 0 && t === e.length ? e : e.slice(a, t);
  }
  function Yn(e) {
    const a = e.length - 1;
    if (a < 1 || e.charCodeAt(0) !== 34 || e.charCodeAt(a) !== 34) return e;
    let t = "";
    for (let s = 1; s < a; s++) {
      const i = e.charCodeAt(s);
      if (i === 34 || i === 92 && (s += 1, s >= a)) return e;
      t += e[s];
    }
    return t;
  }
  function Qn(e) {
    const a = /* @__PURE__ */ Object.create(null), t = String(e);
    let s = 0, i = false, r = false;
    function n(o) {
      const f = Ta(t.slice(s, o)), u = f.indexOf("=");
      if (u < 1) return;
      const c = Ta(f.slice(0, u));
      if (!$n.test(c)) return;
      const E = c.toLowerCase();
      if (E === "__proto__" || E === "constructor" || E === "prototype") return;
      const A = Ta(f.slice(u + 1));
      a[E] = Yn(A);
    }
    for (let o = 0; o < t.length; o++) {
      const f = t.charCodeAt(o);
      i ? r ? r = false : f === 92 ? r = true : f === 34 && (i = false) : f === 34 ? i = true : (f === 44 || f === 59) && (n(o), s = o + 1);
    }
    return n(t.length), a;
  }
  const Jn = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
  function wa(e, a, t, s, i) {
    if (d.isFunction(s)) return s.call(this, a, t);
    if (i && (a = t), !!d.isString(a)) {
      if (d.isString(s)) return a.indexOf(s) !== -1;
      if (d.isRegExp(s)) return s.test(a);
    }
  }
  function Zn(e) {
    return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (a, t, s) => t.toUpperCase() + s);
  }
  function eo(e, a) {
    const t = d.toCamelCase(" " + a);
    [
      "get",
      "set",
      "has"
    ].forEach((s) => {
      Object.defineProperty(e, s + t, {
        __proto__: null,
        value: function(i, r, n) {
          return this[s].call(this, a, i, r, n);
        },
        configurable: true
      });
    });
  }
  let j = class {
    constructor(a) {
      a && this.set(a);
    }
    set(a, t, s) {
      const i = this;
      function r(o, f, u) {
        const c = Re(f);
        if (!c) return;
        const E = d.findKey(i, c);
        (!E || i[E] === void 0 || u === true || u === void 0 && i[E] !== false) && (i[E || f] = na(o));
      }
      const n = (o, f) => d.forEach(o, (u, c) => r(u, c, f));
      if (d.isPlainObject(a) || a instanceof this.constructor) n(a, t);
      else if (d.isString(a) && (a = a.trim()) && !Jn(a)) n(jn(a), t);
      else if (d.isObject(a) && d.isSafeIterable(a)) {
        let o = /* @__PURE__ */ Object.create(null), f, u;
        for (const c of a) {
          if (!d.isArray(c)) throw new TypeError("Object iterator must return a key-value pair");
          u = c[0], d.hasOwnProp(o, u) ? (f = o[u], o[u] = d.isArray(f) ? [
            ...f,
            c[1]
          ] : [
            f,
            c[1]
          ]) : o[u] = c[1];
        }
        n(o, t);
      } else a != null && r(t, a, s);
      return this;
    }
    get(a, t) {
      if (a = Re(a), a) {
        const s = d.findKey(this, a);
        if (s) {
          const i = this[s];
          if (!t) return i;
          if (t === true) return Xn(i);
          if (d.isFunction(t)) return t.call(this, i, s);
          if (d.isRegExp(t)) return t.exec(i);
          throw new TypeError("parser must be boolean|regexp|function");
        }
      }
    }
    has(a, t) {
      if (a = Re(a), a) {
        const s = d.findKey(this, a);
        return !!(s && this[s] !== void 0 && (!t || wa(this, this[s], s, t)));
      }
      return false;
    }
    delete(a, t) {
      const s = this;
      let i = false;
      function r(n) {
        if (n = Re(n), n) {
          const o = d.findKey(s, n);
          o && (!t || wa(s, s[o], o, t)) && (delete s[o], i = true);
        }
      }
      return d.isArray(a) ? a.forEach(r) : r(a), i;
    }
    clear(a) {
      const t = Object.keys(this);
      let s = t.length, i = false;
      for (; s--; ) {
        const r = t[s];
        (!a || wa(this, this[r], r, a, true)) && (delete this[r], i = true);
      }
      return i;
    }
    normalize(a) {
      const t = this, s = {};
      return d.forEach(this, (i, r) => {
        const n = d.findKey(s, r);
        if (n) {
          t[n] = na(i), delete t[r];
          return;
        }
        const o = a ? Zn(r) : String(r).trim();
        o !== r && delete t[r], t[o] = na(i), s[o] = true;
      }), this;
    }
    concat(...a) {
      return this.constructor.concat(this, ...a);
    }
    toJSON(a) {
      const t = /* @__PURE__ */ Object.create(null);
      return d.forEach(this, (s, i) => {
        s != null && s !== false && (t[i] = a && d.isArray(s) ? s.join(", ") : s);
      }), t;
    }
    [Symbol.iterator]() {
      return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
      return Object.entries(this.toJSON()).map(([a, t]) => a + ": " + t).join(`
`);
    }
    getSetCookie() {
      const a = this.get("set-cookie");
      return d.isArray(a) ? a : a == null || a === false ? [] : [
        a
      ];
    }
    get [Symbol.toStringTag]() {
      return "AxiosHeaders";
    }
    static from(a) {
      return a instanceof this ? a : new this(a);
    }
    static parseParameters(a) {
      return Qn(a);
    }
    static concat(a, ...t) {
      const s = new this(a);
      return t.forEach((i) => s.set(i)), s;
    }
    static accessor(a) {
      const s = (this[St] = this[St] = {
        accessors: {}
      }).accessors, i = this.prototype;
      function r(n) {
        const o = Re(n);
        s[o] || (eo(i, n), s[o] = true);
      }
      return d.isArray(a) ? a.forEach(r) : r(a), this;
    }
  };
  j.accessor([
    "Content-Type",
    "Content-Length",
    "Accept",
    "Accept-Encoding",
    "User-Agent",
    "Authorization"
  ]);
  d.reduceDescriptors(j.prototype, ({ value: e }, a) => {
    let t = a[0].toUpperCase() + a.slice(1);
    return {
      get: () => e,
      set(s) {
        this[t] = s;
      }
    };
  });
  d.freezeMethods(j);
  const ba = "[REDACTED ****]";
  function ao(e) {
    if (d.hasOwnProp(e, "toJSON")) return true;
    let a = Object.getPrototypeOf(e);
    for (; a && a !== Object.prototype; ) {
      if (d.hasOwnProp(a, "toJSON")) return true;
      a = Object.getPrototypeOf(a);
    }
    return false;
  }
  function to(e, a) {
    const t = new Set(a.map((r) => String(r).toLowerCase())), s = [], i = (r) => {
      if (r === null || typeof r != "object" || d.isBuffer(r)) return r;
      if (s.indexOf(r) !== -1) return;
      r instanceof j && (r = r.toJSON()), s.push(r);
      let n;
      if (d.isArray(r)) n = [], r.forEach((o, f) => {
        const u = i(o);
        d.isUndefined(u) || (n[f] = u);
      });
      else {
        if (!d.isPlainObject(r) && ao(r)) return s.pop(), r;
        n = /* @__PURE__ */ Object.create(null);
        for (const [o, f] of Object.entries(r)) {
          const u = t.has(o.toLowerCase()) ? ba : i(f);
          d.isUndefined(u) || (n[o] = u);
        }
      }
      return s.pop(), n;
    };
    return i(e);
  }
  function Tt(e) {
    try {
      return String(e);
    } catch {
      return "";
    }
  }
  function so(e) {
    return e.errors.map((t) => {
      try {
        return t && t.message ? Tt(t.message) : Tt(t);
      } catch {
        return "";
      }
    }).filter(Boolean).join("; ") || e.name || "AggregateError";
  }
  let p = class Hs extends Error {
    static from(a, t, s, i, r, n) {
      let o = a.message;
      !o && d.isArray(a.errors) && a.errors.length && (o = so(a));
      const f = new Hs(o, t || a.code, s, i, r);
      return Object.defineProperty(f, "cause", {
        __proto__: null,
        value: a,
        writable: true,
        enumerable: false,
        configurable: true
      }), f.name = a.name, a.status != null && f.status == null && (f.status = a.status), n && Object.assign(f, n), f;
    }
    constructor(a, t, s, i, r) {
      super(a), Object.defineProperty(this, "message", {
        __proto__: null,
        value: a,
        enumerable: true,
        writable: true,
        configurable: true
      }), this.name = "AxiosError", this.isAxiosError = true, t && (this.code = t), s && (this.config = s), i && (this.request = i), r && (this.response = r, this.status = r.status);
    }
    toJSON() {
      const a = this.config, t = a && d.hasOwnProp(a, "redact") ? a.redact : void 0, s = d.isArray(t) && t.length > 0 ? to(a, t) : d.toJSONObject(a);
      return {
        message: this.message,
        name: this.name,
        description: this.description,
        number: this.number,
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        config: s,
        code: this.code,
        status: this.status
      };
    }
  };
  p.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
  p.ERR_BAD_OPTION = "ERR_BAD_OPTION";
  p.ECONNABORTED = "ECONNABORTED";
  p.ETIMEDOUT = "ETIMEDOUT";
  p.ECONNREFUSED = "ECONNREFUSED";
  p.ERR_NETWORK = "ERR_NETWORK";
  p.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
  p.ERR_DEPRECATED = "ERR_DEPRECATED";
  p.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
  p.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
  p.ERR_CANCELED = "ERR_CANCELED";
  p.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
  p.ERR_INVALID_URL = "ERR_INVALID_URL";
  p.ERR_FORM_DATA_DEPTH_EXCEEDED = "ERR_FORM_DATA_DEPTH_EXCEEDED";
  const io = null, Ls = 100;
  function Xa(e) {
    return d.isPlainObject(e) || d.isArray(e);
  }
  function Ns(e) {
    return d.endsWith(e, "[]") ? e.slice(0, -2) : e;
  }
  function Wa(e, a, t) {
    return e ? e.concat(a).map(function(i, r) {
      return i = Ns(i), !t && r ? "[" + i + "]" : i;
    }).join(t ? "." : "") : a;
  }
  function ro(e) {
    return d.isArray(e) && !e.some(Xa);
  }
  const no = d.toFlatObject(d, {}, null, function(a) {
    return /^is[A-Z]/.test(a);
  });
  function Ba(e, a, t) {
    if (!d.isObject(e)) throw new TypeError("target must be an object");
    a = a || new FormData();
    const s = (b, h) => {
      const D = d.getSafeProp(t, b);
      return d.isUndefined(D) ? h : D;
    }, i = s("metaTokens", true), r = s("visitor") || C, n = s("dots", false), o = s("indexes", false), f = s("Blob") || typeof Blob < "u" && Blob, u = s("maxDepth", Ls), c = f && d.isSpecCompliantForm(a), E = [];
    if (!d.isFunction(r)) throw new TypeError("visitor must be a function");
    function A(b) {
      if (b === null) return "";
      if (d.isDate(b)) return b.toISOString();
      if (d.isBoolean(b)) return b.toString();
      if (!c && d.isBlob(b)) throw new p("Blob is not supported. Use a Buffer instead.");
      if (d.isArrayBuffer(b) || d.isTypedArray(b)) {
        if (c && typeof f == "function") return new f([
          b
        ]);
        throw new p("Blob is not supported. Use a Buffer instead.", p.ERR_NOT_SUPPORT);
      }
      return b;
    }
    function B(b) {
      if (b > u) throw new p("Object is too deeply nested (" + b + " levels). Max depth: " + u, p.ERR_FORM_DATA_DEPTH_EXCEEDED);
    }
    function S(b, h) {
      if (u === 1 / 0) return JSON.stringify(b);
      const D = [];
      return JSON.stringify(b, function(g, y) {
        if (!d.isObject(y)) return y;
        for (; D.length && D[D.length - 1] !== this; ) D.pop();
        return D.push(y), B(h + D.length - 1), y;
      });
    }
    function C(b, h, D) {
      let F = b;
      if (d.isReactNative(a) && d.isReactNativeBlob(b)) return a.append(Wa(D, h, n), A(b)), false;
      if (b && !D && typeof b == "object") {
        if (d.endsWith(h, "{}")) h = i ? h : h.slice(0, -2), b = S(b, 1);
        else if (d.isArray(b) && ro(b) || (d.isFileList(b) || d.endsWith(h, "[]")) && (F = d.toArray(b))) return h = Ns(h), F.forEach(function(y, v) {
          !(d.isUndefined(y) || y === null) && a.append(o === true ? Wa([
            h
          ], v, n) : o === null ? h : h + "[]", A(y));
        }), false;
      }
      return Xa(b) ? true : (a.append(Wa(D, h, n), A(b)), false);
    }
    const l = Object.assign(no, {
      defaultVisitor: C,
      convertValue: A,
      isVisitable: Xa
    });
    function m(b, h, D = 0) {
      if (!d.isUndefined(b)) {
        if (B(D), E.indexOf(b) !== -1) throw new Error("Circular reference detected in " + h.join("."));
        E.push(b), d.forEach(b, function(g, y) {
          (!(d.isUndefined(g) || g === null) && r.call(a, g, d.isString(y) ? y.trim() : y, h, l)) === true && m(g, h ? h.concat(y) : [
            y
          ], D + 1);
        }), E.pop();
      }
    }
    if (!d.isObject(e)) throw new TypeError("data must be an object");
    return m(e), a;
  }
  function wt(e) {
    const a = {
      "!": "%21",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "~": "%7E",
      "%20": "+"
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20/g, function(s) {
      return a[s];
    });
  }
  function ct(e, a) {
    this._pairs = [], e && Ba(e, this, a);
  }
  const _s = ct.prototype;
  _s.append = function(a, t) {
    this._pairs.push([
      a,
      t
    ]);
  };
  _s.toString = function(a) {
    const t = a ? (s) => a.call(this, s, wt) : wt;
    return this._pairs.map(function(i) {
      return t(i[0]) + "=" + t(i[1]);
    }, "").join("&");
  };
  function oo(e) {
    return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
  }
  function js(e, a, t) {
    if (!a) return e;
    e = e || "";
    const s = d.isFunction(t) ? {
      serialize: t
    } : t, i = d.getSafeProp(s, "encode") || oo, r = d.getSafeProp(s, "serialize");
    let n;
    if (r ? n = r(a, s) : n = d.isURLSearchParams(a) ? a.toString() : new ct(a, s).toString(i), n) {
      const o = e.indexOf("#");
      o !== -1 && (e = e.slice(0, o)), e += (e.indexOf("?") === -1 ? "?" : "&") + n;
    }
    return e;
  }
  const Me = Symbol("internals");
  function qs(e) {
    return e ? e.length : 0;
  }
  function Wt(e) {
    if (e) for (; e.length && e[e.length - 1] === null; ) e.pop();
  }
  function Ie(e, a) {
    const t = e.handlers, s = qs(t);
    t !== a.handlersRef ? (a.handlersRef = t, a.handlerEntries.clear()) : s !== a.handlersLength && (s ? a.handlerEntries.forEach(function(r, n) {
      t[r.index] !== r.handler && a.handlerEntries.delete(n);
    }) : a.handlerEntries.clear()), a.handlersLength = s;
  }
  class Ut {
    constructor() {
      this.handlers = [], this[Me] = {
        handlersRef: this.handlers,
        handlersLength: this.handlers.length,
        handlerEntries: /* @__PURE__ */ new Map(),
        iterationDepth: 0,
        nextId: 0
      };
    }
    use(a, t, s) {
      const i = {
        fulfilled: a,
        rejected: t,
        synchronous: s ? s.synchronous : false,
        runWhen: s ? s.runWhen : null
      }, r = this[Me];
      this.handlers == null && (this.handlers = []), Ie(this, r);
      const n = r.nextId++;
      return this.handlers.push(i), r.handlerEntries.set(n, {
        handler: i,
        index: this.handlers.length - 1
      }), r.handlersLength = this.handlers.length, n;
    }
    eject(a) {
      const t = this[Me];
      Ie(this, t);
      const s = t.handlerEntries.get(a);
      if (s) {
        if (t.handlerEntries.delete(a), this.handlers[s.index] !== s.handler) return;
        this.handlers[s.index] = null, t.iterationDepth || (Wt(this.handlers), t.handlersLength = this.handlers.length);
      }
    }
    clear() {
      this.handlers && (this.handlers = [], Ie(this, this[Me]));
    }
    forEach(a) {
      const t = this[Me];
      Ie(this, t), t.iterationDepth++;
      try {
        d.forEach(this.handlers, function(i) {
          i !== null && a(i);
        });
      } finally {
        --t.iterationDepth || (Ie(this, t), Wt(this.handlers), t.handlersLength = qs(this.handlers));
      }
    }
  }
  const lt = {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false,
    legacyInterceptorReqResOrdering: true,
    advertiseZstdAcceptEncoding: false,
    validateStatusUndefinedResolves: true
  }, co = typeof URLSearchParams < "u" ? URLSearchParams : ct, lo = typeof FormData < "u" ? FormData : null, fo = typeof Blob < "u" ? Blob : null, mo = {
    isBrowser: true,
    classes: {
      URLSearchParams: co,
      FormData: lo,
      Blob: fo
    },
    protocols: [
      "http",
      "https",
      "file",
      "blob",
      "url",
      "data"
    ]
  }, ft = typeof window < "u" && typeof document < "u", $a = typeof navigator == "object" && navigator || void 0, bo = ft && (!$a || [
    "ReactNative",
    "NativeScript",
    "NS"
  ].indexOf($a.product) < 0), uo = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Eo = ft && window.location.href || "http://localhost", Ao = Object.freeze(Object.defineProperty({
    __proto__: null,
    hasBrowserEnv: ft,
    hasStandardBrowserEnv: bo,
    hasStandardBrowserWebWorkerEnv: uo,
    navigator: $a,
    origin: Eo
  }, Symbol.toStringTag, {
    value: "Module"
  })), I = {
    ...Ao,
    ...mo
  };
  function Co(e, a) {
    return Ba(e, new I.classes.URLSearchParams(), {
      visitor: function(t, s, i, r) {
        return I.isNode && d.isBuffer(t) ? (this.append(s, t.toString("base64")), false) : r.defaultVisitor.apply(this, arguments);
      },
      ...a
    });
  }
  const vt = Ls;
  function zs(e) {
    if (e > vt) throw new p("FormData field is too deeply nested (" + e + " levels). Max depth: " + vt, p.ERR_FORM_DATA_DEPTH_EXCEEDED);
  }
  function ho(e) {
    const a = [], t = /[^.[\]]+|\[([^.[\]]*)]/g;
    let s;
    for (; (s = t.exec(e)) !== null; ) zs(a.length), a.push(s[0] === "[]" ? "" : s[1] || s[0]);
    return a;
  }
  function po(e) {
    const a = {}, t = Object.keys(e);
    let s;
    const i = t.length;
    let r;
    for (s = 0; s < i; s++) r = t[s], a[r] = e[r];
    return a;
  }
  function Vs(e) {
    function a(t, s, i, r) {
      zs(r);
      let n = t[r++];
      if (n === "__proto__") return true;
      const o = Number.isFinite(+n), f = r >= t.length;
      return n = !n && d.isArray(i) ? i.length : n, f ? (d.hasOwnProp(i, n) ? i[n] = d.isArray(i[n]) ? i[n].concat(s) : [
        i[n],
        s
      ] : i[n] = s, !o) : ((!d.hasOwnProp(i, n) || !d.isObject(i[n])) && (i[n] = []), a(t, s, i[n], r) && d.isArray(i[n]) && (i[n] = po(i[n])), !o);
    }
    if (d.isFormData(e) && d.isFunction(e.entries)) {
      const t = {};
      return d.forEachEntry(e, (s, i) => {
        a(ho(s), i, t, 0);
      }), t;
    }
    return null;
  }
  const Ks = Object.freeze([
    "get",
    "delete",
    "head",
    "options",
    "post",
    "put",
    "patch",
    "purge",
    "link",
    "unlink",
    "query"
  ]), xe = (e, a) => e != null && d.hasOwnProp(e, a) ? e[a] : void 0;
  function Do(e, a, t) {
    if (d.isString(e)) try {
      return (a || JSON.parse)(e), d.trim(e);
    } catch (s) {
      if (s.name !== "SyntaxError") throw s;
    }
    return (t || JSON.stringify)(e);
  }
  const Ye = {
    transitional: lt,
    adapter: [
      "xhr",
      "http",
      "fetch"
    ],
    transformRequest: [
      function(a, t) {
        const s = t.getContentType() || "", i = s.indexOf("application/json") > -1, r = d.isObject(a);
        if (r && d.isHTMLForm(a) && (a = new FormData(a)), d.isFormData(a)) return i ? JSON.stringify(Vs(a)) : a;
        if (d.isArrayBuffer(a) || d.isBuffer(a) || d.isStream(a) || d.isFile(a) || d.isBlob(a) || d.isReadableStream(a)) return a;
        if (d.isArrayBufferView(a)) return a.buffer;
        if (d.isURLSearchParams(a)) return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", false), a.toString();
        let o;
        if (r) {
          const f = xe(this, "formSerializer");
          if (s.indexOf("application/x-www-form-urlencoded") > -1) return Co(a, f).toString();
          if ((o = d.isFileList(a)) || s.indexOf("multipart/form-data") > -1) {
            const u = xe(this, "env"), c = u && u.FormData;
            return Ba(o ? {
              "files[]": a
            } : a, c && new c(), f);
          }
        }
        return r || i ? (t.setContentType("application/json", false), Do(a)) : a;
      }
    ],
    transformResponse: [
      function(a) {
        const t = xe(this, "transitional") || Ye.transitional, s = t && t.forcedJSONParsing, i = xe(this, "responseType"), r = i === "json";
        if (d.isResponse(a) || d.isReadableStream(a)) return a;
        if (a && d.isString(a) && (s && !i || r)) {
          const o = !(t && t.silentJSONParsing) && r;
          try {
            return JSON.parse(a, xe(this, "parseReviver"));
          } catch (f) {
            if (o) throw f.name === "SyntaxError" ? p.from(f, p.ERR_BAD_RESPONSE, this, null, xe(this, "response")) : f;
          }
        }
        return a;
      }
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
      FormData: I.classes.FormData,
      Blob: I.classes.Blob
    },
    validateStatus: function(a) {
      return a >= 200 && a < 300;
    },
    headers: {
      common: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": void 0
      }
    }
  };
  d.forEach(Ks, (e) => {
    Ye.headers[e] = {};
  });
  function Ua(e, a) {
    const t = this || Ye, s = a || t, i = j.from(s.headers);
    let r = s.data;
    return d.forEach(e, function(o) {
      r = o.call(t, r, i.normalize(), a ? a.status : void 0);
    }), i.normalize(), r;
  }
  function Gs(e) {
    return !!(e && e.__CANCEL__);
  }
  let Qe = class extends p {
    constructor(a, t, s) {
      super(a ?? "canceled", p.ERR_CANCELED, t, s), this.name = "CanceledError", this.__CANCEL__ = true;
    }
  };
  function Xs(e, a, t) {
    const s = t.config.validateStatus;
    !t.status || !s || s(t.status) ? e(t) : a(new p("Request failed with status code " + t.status, t.status >= 400 && t.status < 500 ? p.ERR_BAD_REQUEST : p.ERR_BAD_RESPONSE, t.config, t.request, t));
  }
  const go = /[\t\n\r]/g;
  function $s(e) {
    if (typeof e != "string") return e;
    let a = 0;
    for (; a < e.length && e.charCodeAt(a) <= 32; ) a++;
    return e.slice(a).replace(go, "");
  }
  function va(e) {
    const a = /^([-+\w]{1,25}):(?:\/\/)?/.exec(e);
    return a && a[1] || "";
  }
  function Bo(e, a) {
    e = e || 10;
    const t = new Array(e), s = new Array(e);
    let i = 0, r = 0, n;
    return a = a !== void 0 ? a : 1e3, function(f) {
      const u = Date.now(), c = s[r];
      n || (n = u), t[i] = f, s[i] = u;
      let E = r, A = 0;
      for (; E !== i; ) A += t[E++], E = E % e;
      if (i = (i + 1) % e, i === r && (r = (r + 1) % e), u - n < a) return;
      const B = c && u - c;
      return B ? Math.round(A * 1e3 / B) : void 0;
    };
  }
  function yo(e, a) {
    let t = 0, s = 1e3 / a, i, r;
    const n = (c, E = Date.now()) => {
      t = E, i = null, r && (clearTimeout(r), r = null), e(...c);
    };
    return [
      (...c) => {
        const E = Date.now(), A = E - t;
        A >= s ? n(c, E) : (i = c, r || (r = setTimeout(() => {
          r = null, n(i);
        }, s - A)));
      },
      () => i && n(i),
      (...c) => n(c)
    ];
  }
  const ua = (e, a, t = 3) => {
    let s = 0;
    const i = Bo(50, 250);
    return yo((r) => {
      if (!r || !d.isNumber(r.loaded)) return;
      const n = r.loaded, o = r.lengthComputable ? r.total : void 0, f = Math.max(0, o != null ? Math.min(n, o) : n), u = Math.max(0, f - s), c = i(u);
      s = Math.max(s, f);
      const E = {
        loaded: f,
        total: o,
        progress: o ? f / o : void 0,
        bytes: u,
        rate: c || void 0,
        estimated: c && o ? (o - f) / c : void 0,
        event: r,
        lengthComputable: o != null,
        [a ? "download" : "upload"]: true
      };
      e(E);
    }, t);
  }, Ot = (e, a) => {
    const t = e != null;
    return [
      (s) => a[0]({
        lengthComputable: t,
        total: e,
        loaded: s
      }),
      a[1]
    ];
  }, kt = (e, a = d.asap) => (...t) => a(() => e(...t)), xo = I.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, a) => (t) => (t = new URL(t, I.origin), e.protocol === t.protocol && e.host === t.host && (a || e.port === t.port)))(new URL(I.origin), I.navigator && /(msie|trident)/i.test(I.navigator.userAgent)) : () => true, Fo = I.hasStandardBrowserEnv ? {
    write(e, a, t, s, i, r, n) {
      if (typeof document > "u") return;
      const o = [
        `${e}=${encodeURIComponent(a)}`
      ];
      d.isNumber(t) && o.push(`expires=${new Date(t).toUTCString()}`), d.isString(s) && o.push(`path=${s}`), d.isString(i) && o.push(`domain=${i}`), r === true && o.push("secure"), d.isString(n) && o.push(`SameSite=${n}`), document.cookie = o.join("; ");
    },
    read(e) {
      if (typeof document > "u") return null;
      const a = document.cookie.split(";");
      for (let t = 0; t < a.length; t++) {
        const s = a[t].replace(/^\s+/, ""), i = s.indexOf("=");
        if (i !== -1 && s.slice(0, i) === e) try {
          return decodeURIComponent(s.slice(i + 1));
        } catch {
          return s.slice(i + 1);
        }
      }
      return null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5, "/");
    }
  } : {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  };
  function So(e) {
    return typeof e != "string" ? false : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
  }
  function To(e, a) {
    if (!a) return e;
    let t = e.length;
    for (; t > 0 && e.charCodeAt(t - 1) === 47; ) t--;
    return e.slice(0, t) + "/" + a.replace(/^\/+/, "");
  }
  const wo = /^https?:(?!\/\/)/i;
  function Wo(e) {
    return e && e.replace(/(^|&)([^=&]*=)?[^&]+/g, (a, t, s = "") => `${t}${s}${ba}`);
  }
  function Uo(e) {
    const a = e.replace(/^(https?:\/{0,2})[^/?#]*@/i, `$1${ba}@`), t = a.indexOf("#"), i = (t === -1 ? a : a.slice(0, t)).replace(/([?&][^=&#]*=)[^&#]*/g, `$1${ba}`);
    return t === -1 ? i : `${i}#${Wo(a.slice(t + 1))}`;
  }
  function Pt(e, a) {
    if (typeof e == "string") {
      const t = $s(e);
      if (wo.test(t)) throw new p(`Invalid URL ${JSON.stringify(Uo(t))}: missing "//" after protocol`, p.ERR_INVALID_URL, a);
    }
  }
  function Ys(e, a, t, s) {
    Pt(a, s);
    let i = !So(a);
    return e && (i || t === false) ? (Pt(e, s), To(e, a)) : a;
  }
  const Rt = (e) => e instanceof j ? {
    ...e
  } : e, vo = (e) => Object.getOwnPropertySymbols && Object.getOwnPropertyDescriptor ? Object.keys(e).concat(Object.getOwnPropertySymbols(e).filter((a) => Object.getOwnPropertyDescriptor(e, a).enumerable)) : Object.keys(e);
  function Be(e, a) {
    e = e || {}, a = a || {};
    const t = /* @__PURE__ */ Object.create(null);
    Object.defineProperty(t, "hasOwnProperty", {
      __proto__: null,
      value: Object.prototype.hasOwnProperty,
      enumerable: false,
      writable: true,
      configurable: true
    });
    function s(c, E, A, B) {
      return d.isPlainObject(c) && d.isPlainObject(E) ? d.merge.call({
        caseless: B
      }, c, E) : d.isPlainObject(E) ? d.merge({}, E) : d.isArray(E) ? E.slice() : E;
    }
    function i(c, E, A, B) {
      if (d.isUndefined(E)) {
        if (!d.isUndefined(c)) return s(void 0, c, A, B);
      } else return s(c, E, A, B);
    }
    function r(c, E) {
      if (!d.isUndefined(E)) return s(void 0, E);
    }
    function n(c, E) {
      if (d.isUndefined(E)) {
        if (!d.isUndefined(c)) return s(void 0, c);
      } else return s(void 0, E);
    }
    function o(c) {
      const E = d.hasOwnProp(a, "transitional") ? a.transitional : void 0;
      if (!d.isUndefined(E)) if (d.isPlainObject(E)) {
        if (d.hasOwnProp(E, c)) return E[c];
      } else return;
      const A = d.hasOwnProp(e, "transitional") ? e.transitional : void 0;
      if (d.isPlainObject(A) && d.hasOwnProp(A, c)) return A[c];
    }
    function f(c, E, A) {
      if (d.hasOwnProp(a, A)) return s(c, E);
      if (d.hasOwnProp(e, A)) return s(void 0, c);
    }
    const u = {
      url: r,
      method: r,
      data: r,
      baseURL: n,
      transformRequest: n,
      transformResponse: n,
      paramsSerializer: n,
      timeout: n,
      timeoutErrorMessage: n,
      withCredentials: n,
      withXSRFToken: n,
      adapter: n,
      responseType: n,
      xsrfCookieName: n,
      xsrfHeaderName: n,
      onUploadProgress: n,
      onDownloadProgress: n,
      decompress: n,
      maxContentLength: n,
      maxBodyLength: n,
      beforeRedirect: n,
      transport: n,
      httpAgent: n,
      httpsAgent: n,
      cancelToken: n,
      socketPath: n,
      allowedSocketPaths: n,
      responseEncoding: n,
      validateStatus: f,
      headers: (c, E, A) => i(Rt(c), Rt(E), A, true)
    };
    return d.forEach(vo({
      ...e,
      ...a
    }), function(E) {
      if (E === "__proto__" || E === "constructor" || E === "prototype") return;
      const A = d.hasOwnProp(u, E) ? u[E] : i, B = d.hasOwnProp(e, E) ? e[E] : void 0, S = d.hasOwnProp(a, E) ? a[E] : void 0, C = A(B, S, E);
      d.isUndefined(C) && A !== f || (t[E] = C);
    }), d.hasOwnProp(a, "validateStatus") && d.isUndefined(a.validateStatus) && o("validateStatusUndefinedResolves") === false && (d.hasOwnProp(e, "validateStatus") ? t.validateStatus = s(void 0, e.validateStatus) : delete t.validateStatus), t;
  }
  const Oo = [
    "content-type",
    "content-length"
  ];
  function ko(e, a, t) {
    if (t !== "content-only") {
      e.set(a);
      return;
    }
    Object.entries(a || {}).forEach(([s, i]) => {
      Oo.includes(s.toLowerCase()) && e.set(s, i);
    });
  }
  const Po = (e) => encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi, (a, t) => String.fromCharCode(parseInt(t, 16)));
  function Qs(e) {
    const a = Be({}, e), t = (A) => d.hasOwnProp(a, A) ? a[A] : void 0, s = t("data");
    let i = t("withXSRFToken");
    const r = t("xsrfHeaderName"), n = t("xsrfCookieName");
    let o = t("headers");
    const f = t("auth"), u = t("baseURL"), c = t("allowAbsoluteUrls"), E = t("url");
    if (a.headers = o = j.from(o), a.url = js(Ys(u, E, c, a), t("params"), t("paramsSerializer")), f) {
      const A = d.getSafeProp(f, "username") || "", B = d.getSafeProp(f, "password") || "";
      try {
        o.set("Authorization", "Basic " + btoa(A + ":" + (B ? Po(B) : "")));
      } catch (S) {
        throw p.from(S, p.ERR_BAD_OPTION_VALUE, e);
      }
    }
    if (d.isFormData(s)) {
      const A = d.getSafeProp(s, "getHeaders");
      I.hasStandardBrowserEnv || I.hasStandardBrowserWebWorkerEnv || d.isReactNative(s) ? o.setContentType(void 0) : d.isFunction(A) && ko(o, A.call(s), t("formDataHeaderPolicy"));
    }
    if (I.hasStandardBrowserEnv && (d.isFunction(i) && (i = i(a)), i === true || i == null && xo(a.url))) {
      const B = r && n && Fo.read(n);
      B && o.set(r, B);
    }
    return a;
  }
  const Ro = typeof XMLHttpRequest < "u", Mo = Ro && function(e) {
    return new Promise(function(t, s) {
      const i = Qs(e);
      let r = i.data;
      const n = j.from(i.headers).normalize();
      let { responseType: o, onUploadProgress: f, onDownloadProgress: u } = i, c, E, A, B, S, C;
      function l() {
        B && B(), S && S(), i.cancelToken && i.cancelToken.unsubscribe(c), i.signal && i.signal.removeEventListener("abort", c);
      }
      let m = new XMLHttpRequest();
      m.open(i.method.toUpperCase(), i.url, true), m.timeout = i.timeout;
      function b(D) {
        if (!m) return;
        if (m.status === 0 && (va($s(i.url)) || va(I.origin)) !== "file" && !(m.responseURL && m.responseURL.startsWith("file:"))) {
          s(new p("Request aborted", p.ECONNABORTED, e, m)), l(), m = null;
          return;
        }
        try {
          D ? C && C(D) : S && S();
        } catch (v) {
          setTimeout(() => {
            throw v;
          });
        }
        if (!m) return;
        const F = j.from("getAllResponseHeaders" in m && m.getAllResponseHeaders()), y = {
          data: !o || o === "text" || o === "json" ? m.responseText : m.response,
          status: m.status,
          statusText: m.statusText,
          headers: F,
          config: e,
          request: m
        };
        Xs(function(M) {
          t(M), l();
        }, function(M) {
          s(M), l();
        }, y), m = null;
      }
      "onloadend" in m ? m.onloadend = b : m.onreadystatechange = function() {
        !m || m.readyState !== 4 || m.status === 0 && !(m.responseURL && m.responseURL.startsWith("file:")) || setTimeout(b);
      }, m.onabort = function() {
        m && (s(new p("Request aborted", p.ECONNABORTED, e, m)), l(), m = null);
      }, m.onerror = function(F) {
        const g = F && F.message ? F.message : "Network Error", y = new p(g, p.ERR_NETWORK, e, m);
        y.event = F || null, s(y), l(), m = null;
      }, m.ontimeout = function() {
        let F = i.timeout ? "timeout of " + i.timeout + "ms exceeded" : "timeout exceeded";
        const g = i.transitional || lt;
        i.timeoutErrorMessage && (F = i.timeoutErrorMessage), s(new p(F, g.clarifyTimeoutError ? p.ETIMEDOUT : p.ECONNABORTED, e, m)), l(), m = null;
      }, r === void 0 && n.setContentType(null), "setRequestHeader" in m && d.forEach(Is(n), function(F, g) {
        m.setRequestHeader(g, F);
      }), d.isUndefined(i.withCredentials) || (m.withCredentials = !!i.withCredentials), o && o !== "json" && (m.responseType = i.responseType), u && ([A, S, C] = ua(u, true), m.addEventListener("progress", A)), f && m.upload && ([E, B] = ua(f), m.upload.addEventListener("progress", E), m.upload.addEventListener("loadend", B)), (i.cancelToken || i.signal) && (c = (D) => {
        m && (s(!D || D.type ? new Qe(null, e, m) : D), m.abort(), l(), m = null);
      }, i.cancelToken && i.cancelToken.subscribe(c), i.signal && (i.signal.aborted ? c() : i.signal.addEventListener("abort", c)));
      const h = va(i.url);
      if (h && !I.protocols.includes(h)) {
        s(new p("Unsupported protocol " + h + ":", p.ERR_BAD_REQUEST, e)), l();
        return;
      }
      m.send(r || null);
    });
  }, Io = (e, a) => {
    if (e = e ? e.filter(Boolean) : [], !a && !e.length) return;
    const t = new AbortController();
    let s = false;
    const i = function(f) {
      if (!s) {
        s = true, n();
        const u = f instanceof Error ? f : this.reason;
        t.abort(u instanceof p ? u : new Qe(u instanceof Error ? u.message : u));
      }
    };
    let r = a && setTimeout(() => {
      r = null, i(new p(`timeout of ${a}ms exceeded`, p.ETIMEDOUT));
    }, a);
    const n = () => {
      e && (r && clearTimeout(r), r = null, e.forEach((f) => {
        f.unsubscribe ? f.unsubscribe(i) : f.removeEventListener("abort", i);
      }), e = null);
    };
    e.forEach((f) => {
      if (!s) {
        if (f.aborted) {
          i.call(f);
          return;
        }
        f.addEventListener("abort", i, {
          once: true
        });
      }
    });
    const { signal: o } = t;
    return o.unsubscribe = () => d.asap(n), o;
  }, Ho = function* (e, a) {
    let t = e.byteLength;
    if (t < a) {
      yield e;
      return;
    }
    let s = 0, i;
    for (; s < t; ) i = s + a, yield e.slice(s, i), s = i;
  }, Lo = async function* (e, a) {
    for await (const t of No(e)) yield* Ho(t, a);
  }, No = async function* (e) {
    if (e[Symbol.asyncIterator]) {
      yield* e;
      return;
    }
    const a = e.getReader();
    try {
      for (; ; ) {
        const { done: t, value: s } = await a.read();
        if (t) break;
        yield s;
      }
    } finally {
      await a.cancel();
    }
  }, Mt = (e, a, t, s) => {
    const i = Lo(e, a);
    let r = 0, n, o = (f) => {
      n || (n = true, s && s(f));
    };
    return new ReadableStream({
      async pull(f) {
        try {
          const { done: u, value: c } = await i.next();
          if (u) {
            o(), f.close();
            return;
          }
          let E = c.byteLength;
          if (t) {
            let A = r += E;
            t(A);
          }
          f.enqueue(new Uint8Array(c));
        } catch (u) {
          throw o(u), u;
        }
      },
      cancel(f) {
        return o(f), i.return();
      }
    }, {
      highWaterMark: 2
    });
  }, It = (e) => e >= 48 && e <= 57 || e >= 65 && e <= 70 || e >= 97 && e <= 102, Js = (e, a, t) => a + 2 < t && It(e.charCodeAt(a + 1)) && It(e.charCodeAt(a + 2)), Ht = (e) => e <= 57 ? e - 48 : (e & 223) - 55, _o = (e) => e >= 65 && e <= 90 || e >= 97 && e <= 122 || e >= 48 && e <= 57 || e === 43 || e === 47 || e === 45 || e === 95, jo = (e) => e === 9 || e === 10 || e === 12 || e === 13 || e === 32, qo = (e) => {
    const a = Math.floor(e / 4), t = e % 4;
    return a * 3 + (t === 2 ? 1 : t === 3 ? 2 : 0);
  }, zo = (e) => {
    const a = e.length;
    let t = 0;
    return a > 0 && e.charCodeAt(a - 1) === 61 && (t++, a > 1 && e.charCodeAt(a - 2) === 61 && t++), Math.floor((a - t) * 3 / 4);
  }, Vo = (e) => {
    const a = e.length;
    let t = 0, s = 0, i = false;
    for (let r = 0; r < a; r++) {
      let n = e.charCodeAt(r);
      if (n === 37 && Js(e, r, a) && (n = Ht(e.charCodeAt(r + 1)) * 16 + Ht(e.charCodeAt(r + 2)), r += 2), !jo(n)) {
        if (n === 61) {
          s++;
          continue;
        }
        if (!_o(n) || s > 0) {
          i = true;
          continue;
        }
        t++;
      }
    }
    return i || s > 2 || s > 0 && (t + s) % 4 !== 0 || t % 4 === 1 ? zo(e) : qo(t);
  }, Ko = (e, a) => {
    if (!e || typeof e != "string" || !e.startsWith("data:")) return 0;
    const t = e.indexOf(",");
    if (t < 0) return 0;
    const s = e.slice(5, t), i = e.slice(t + 1);
    if (/;base64/i.test(s)) return a(i);
    let n = 0;
    for (let o = 0, f = i.length; o < f; o++) {
      const u = i.charCodeAt(o);
      if (u === 37 && Js(i, o, f)) n += 1, o += 2;
      else if (u < 128) n += 1;
      else if (u < 2048) n += 2;
      else if (u >= 55296 && u <= 56319 && o + 1 < f) {
        const c = i.charCodeAt(o + 1);
        c >= 56320 && c <= 57343 ? (n += 4, o++) : n += 3;
      } else n += 3;
    }
    return n;
  };
  function Go(e) {
    const a = typeof e == "string" ? e.indexOf("#") : -1;
    return Ko(a === -1 ? e : e.slice(0, a), Vo);
  }
  const mt = "1.20.0", Lt = 64 * 1024, Xo = {
    cache: "default",
    redirect: "follow",
    referrer: "about:client",
    referrerPolicy: "",
    mode: "cors",
    integrity: "",
    keepalive: false,
    priority: "auto",
    window: null
  }, { isFunction: aa } = d, $o = (e) => encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi, (a, t) => String.fromCharCode(parseInt(t, 16))), Nt = (e) => {
    if (!d.isString(e)) return e;
    try {
      return decodeURIComponent(e);
    } catch {
      return e;
    }
  }, _t = (e, ...a) => {
    try {
      return !!e(...a);
    } catch {
      return false;
    }
  }, Yo = (e) => {
    const a = e.indexOf("://");
    let t = e;
    return a !== -1 && (t = t.slice(a + 3)), t.includes("@") || t.includes(":");
  }, Qo = (e) => {
    const a = d.global !== void 0 && d.global !== null ? d.global : globalThis, { ReadableStream: t, TextEncoder: s } = a;
    e = d.merge.call({
      skipUndefined: true
    }, {
      Request: a.Request,
      Response: a.Response
    }, e);
    const { fetch: i, Request: r, Response: n } = e, o = i ? aa(i) : typeof fetch == "function", f = aa(r), u = aa(n);
    if (!o) return false;
    const c = o && aa(t), E = o && (typeof s == "function" ? /* @__PURE__ */ ((m) => (b) => m.encode(b))(new s()) : async (m) => new Uint8Array(await new r(m).arrayBuffer())), A = f && c && _t(() => {
      let m = false;
      const b = new r(I.origin, {
        body: new t(),
        method: "POST",
        get duplex() {
          return m = true, "half";
        }
      }), h = b.headers.has("Content-Type");
      return b.body != null && b.body.cancel(), m && !h;
    }), B = u && c && _t(() => d.isReadableStream(new n("").body)), S = {
      stream: B && ((m) => m.body)
    };
    o && [
      "text",
      "arrayBuffer",
      "blob",
      "formData",
      "stream"
    ].forEach((m) => {
      !S[m] && (S[m] = (b, h) => {
        let D = b && b[m];
        if (D) return D.call(b);
        throw new p(`Response type '${m}' is not supported`, p.ERR_NOT_SUPPORT, h);
      });
    });
    const C = async (m) => {
      if (m == null) return 0;
      if (d.isBlob(m)) return m.size;
      if (d.isSpecCompliantForm(m)) return (await new r(I.origin, {
        method: "POST",
        body: m
      }).arrayBuffer()).byteLength;
      if (d.isArrayBufferView(m) || d.isArrayBuffer(m)) return m.byteLength;
      if (d.isURLSearchParams(m) && (m = m + ""), d.isString(m)) return (await E(m)).byteLength;
    }, l = async (m, b) => {
      const h = d.toFiniteNumber(m.getContentLength());
      return h ?? C(b);
    };
    return async (m) => {
      let { url: b, method: h, data: D, signal: F, cancelToken: g, timeout: y, onDownloadProgress: v, onUploadProgress: M, responseType: H, headers: q, withCredentials: $ = "same-origin", fetchOptions: Y, maxContentLength: z, maxBodyLength: oe, maxRedirects: xa } = Qs(m);
      const de = d.isNumber(z) && z > -1, k = d.isNumber(oe) && oe > -1, Q = (U) => d.hasOwnProp(m, U) ? m[U] : void 0;
      let ve = i || fetch;
      H = H ? (H + "").toLowerCase() : "text";
      let P = Io([
        F,
        g && g.toAbortSignal()
      ], y), O = null;
      const te = P && P.unsubscribe && (() => {
        P.unsubscribe();
      });
      let ce, Ee = null;
      const Oe = () => new p("Request body larger than maxBodyLength limit", p.ERR_BAD_REQUEST, m, O);
      try {
        let U;
        const G = Q("auth");
        if (G) {
          const T = d.getSafeProp(G, "username") || "", N = d.getSafeProp(G, "password") || "";
          U = {
            username: T,
            password: N
          };
        }
        if (Yo(b)) {
          const T = new URL(b, I.origin);
          if (!U && (T.username || T.password)) {
            const N = Nt(T.username), le = Nt(T.password);
            U = {
              username: N,
              password: le
            };
          }
          (T.username || T.password) && (T.username = "", T.password = "", b = T.href);
        }
        if (U && (q.delete("authorization"), q.set("Authorization", "Basic " + btoa($o((U.username || "") + ":" + (U.password || ""))))), de && typeof b == "string" && b.startsWith("data:") && Go(b) > z) throw new p("maxContentLength size of " + z + " exceeded", p.ERR_BAD_RESPONSE, m, O);
        if (k && h !== "get" && h !== "head") {
          const T = await C(D);
          if (typeof T == "number" && isFinite(T) && (ce = T, T > oe)) throw Oe();
        }
        const Ze = k && (d.isReadableStream(D) || d.isStream(D)), Ct = (T, N, le) => Mt(T, Lt, (Ae) => {
          if (k && Ae > oe) throw Ee = Oe();
          N && N(Ae);
        }, le);
        if (A && h !== "get" && h !== "head" && (M || Ze)) {
          if (ce = ce ?? await l(q, D), ce !== 0 || Ze) {
            let T = new r(b, {
              method: "POST",
              body: D,
              duplex: "half"
            }), N;
            if (d.isFormData(D) && (N = T.headers.get("content-type")) && q.setContentType(N), T.body) {
              const [le, Ae] = M && Ot(ce, ua(kt(M))) || [];
              D = Ct(T.body, le, Ae);
            }
          }
        } else if (Ze && !f && c && h !== "get" && h !== "head") D = Ct(D);
        else if (Ze && f && !A && h !== "get" && h !== "head") throw new p("Stream request bodies are not supported by the current fetch implementation", p.ERR_NOT_SUPPORT, m, O);
        d.isString($) || ($ = $ ? "include" : "omit");
        const Di = f && "credentials" in r.prototype;
        if (d.isFormData(D)) {
          const T = q.getContentType();
          T && /^multipart\/form-data/i.test(T) && !/boundary=/i.test(T) && q.delete("content-type");
        }
        q.set("User-Agent", "axios/" + mt, false);
        const J = Y == null ? Y : Object.assign(/* @__PURE__ */ Object.create(null), Y);
        J && (delete J.body, delete J.headers, delete J.method, delete J.signal, delete J.duplex, delete J.credentials);
        const se = Object.assign(/* @__PURE__ */ Object.create(null), J, {
          signal: P,
          method: h.toUpperCase(),
          headers: Is(q.normalize()),
          body: D,
          duplex: "half",
          credentials: Di ? $ : void 0
        });
        f && (d.forEach(Xo, (T, N) => {
          se[N] === void 0 && (se[N] = T);
        }), se.signal === void 0 && (se.signal = null), se.body === void 0 && (se.body = null)), xa === 0 && (se.redirect = "manual", J && (J.redirect = "manual")), O = f && new r(b, se);
        let ie = await (f ? ve(O, J) : ve(b, se));
        const ht = j.from(ie.headers);
        if (de) {
          const T = d.toFiniteNumber(ht.getContentLength());
          if (T != null && T > z) throw new p("maxContentLength size of " + z + " exceeded", p.ERR_BAD_RESPONSE, m, O);
        }
        const Fa = B && (H === "stream" || H === "response");
        if (B && ie.body && (v || de || Fa && te)) {
          const T = {};
          [
            "status",
            "statusText",
            "headers"
          ].forEach((ke) => {
            T[ke] = ie[ke];
          });
          const N = d.toFiniteNumber(ht.getContentLength()), [le, Ae] = v && Ot(N, ua(kt(v), true)) || [];
          let pt = 0;
          const gi = (ke) => {
            if (de && (pt = ke, pt > z)) throw new p("maxContentLength size of " + z + " exceeded", p.ERR_BAD_RESPONSE, m, O);
            le && le(ke);
          };
          ie = new n(Mt(ie.body, Lt, gi, () => {
            Ae && Ae(), te && te();
          }), T);
        }
        H = H || "text";
        let re = await S[d.findKey(S, H) || "text"](ie, m);
        if (de && !B && !Fa) {
          let T;
          if (re != null && (typeof re.byteLength == "number" ? T = re.byteLength : typeof re.size == "number" ? T = re.size : typeof re == "string" && (T = typeof s == "function" ? new s().encode(re).byteLength : re.length)), typeof T == "number" && T > z) throw new p("maxContentLength size of " + z + " exceeded", p.ERR_BAD_RESPONSE, m, O);
        }
        return !Fa && te && te(), await new Promise((T, N) => {
          Xs(T, N, {
            data: re,
            headers: j.from(ie.headers),
            status: ie.status,
            statusText: ie.statusText,
            config: m,
            request: O
          });
        });
      } catch (U) {
        if (te && te(), P && P.aborted && P.reason instanceof p) {
          const G = P.reason;
          throw G.config = m, O && (G.request = O), U !== G && Object.defineProperty(G, "cause", {
            __proto__: null,
            value: U,
            writable: true,
            enumerable: false,
            configurable: true
          }), G;
        }
        if (Ee) throw O && !Ee.request && (Ee.request = O), Ee;
        if (U instanceof p) throw O && !U.request && (U.request = O), U;
        if (U && U.name === "TypeError" && /Load failed|fetch/i.test(U.message)) {
          const G = new p("Network Error", p.ERR_NETWORK, m, O, U && U.response);
          throw Object.defineProperty(G, "cause", {
            __proto__: null,
            value: U.cause || U,
            writable: true,
            enumerable: false,
            configurable: true
          }), G;
        }
        throw p.from(U, U && U.code, m, O, U && U.response);
      }
    };
  }, Jo = /* @__PURE__ */ new Map(), Zs = (e) => {
    let a = e && e.env || {};
    const { fetch: t, Request: s, Response: i } = a, r = [
      s,
      i,
      t
    ];
    let n = r.length, o = n, f, u, c = Jo;
    for (; o--; ) f = r[o], u = c.get(f), u === void 0 && c.set(f, u = o ? /* @__PURE__ */ new Map() : Qo(a)), c = u;
    return u;
  };
  Zs();
  const bt = {
    http: io,
    xhr: Mo,
    fetch: {
      get: Zs
    }
  };
  d.forEach(bt, (e, a) => {
    if (e) {
      try {
        Object.defineProperty(e, "name", {
          __proto__: null,
          value: a
        });
      } catch {
      }
      Object.defineProperty(e, "adapterName", {
        __proto__: null,
        value: a
      });
    }
  });
  const jt = (e) => `- ${e}`, Zo = (e) => d.isFunction(e) || e === null || e === false;
  function ed(e, a) {
    e = d.isArray(e) ? e : [
      e
    ];
    const { length: t } = e;
    let s, i;
    const r = {};
    for (let n = 0; n < t; n++) {
      s = e[n];
      let o;
      if (i = s, !Zo(s) && (i = bt[(o = String(s)).toLowerCase()], i === void 0)) throw new p(`Unknown adapter '${o}'`);
      if (i && (d.isFunction(i) || (i = i.get(a)))) break;
      r[o || "#" + n] = i;
    }
    if (!i) {
      const n = Object.entries(r).map(([f, u]) => `adapter ${f} ` + (u === false ? "is not supported by the environment" : "is not available in the build"));
      let o = t ? n.length > 1 ? `since :
` + n.map(jt).join(`
`) : " " + jt(n[0]) : "as no adapter specified";
      throw new p("There is no suitable adapter to dispatch the request " + o, p.ERR_NOT_SUPPORT);
    }
    return i;
  }
  const ei = {
    getAdapter: ed,
    adapters: bt
  };
  function Oa(e) {
    if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new Qe(null, e);
  }
  function ka(e) {
    const a = d.toSafeFlatObject(e);
    return Oa(a), a.headers = j.from(d.getSafeProp(a, "headers")), a.data = Ua.call(a, a.transformRequest), [
      "post",
      "put",
      "patch"
    ].indexOf(a.method) !== -1 && a.headers.setContentType("application/x-www-form-urlencoded", false), ei.getAdapter(a.adapter || Ye.adapter, a)(a).then(function(i) {
      Oa(a), a.response = i;
      try {
        i.data = Ua.call(a, a.transformResponse, i);
      } finally {
        delete a.response;
      }
      return i.headers = j.from(i.headers), i;
    }, function(i) {
      if (!Gs(i) && (Oa(a), i && i.response)) {
        a.response = i.response;
        try {
          i.response.data = Ua.call(a, a.transformResponse, i.response);
        } finally {
          delete a.response;
        }
        i.response.headers = j.from(i.response.headers);
      }
      return Promise.reject(i);
    });
  }
  const ya = {};
  [
    "object",
    "boolean",
    "number",
    "function",
    "string",
    "symbol"
  ].forEach((e, a) => {
    ya[e] = function(s) {
      return typeof s === e || "a" + (a < 1 ? "n " : " ") + e;
    };
  });
  const qt = {};
  ya.transitional = function(a, t, s) {
    function i(r, n) {
      return "[Axios v" + mt + "] Transitional option '" + r + "'" + n + (s ? ". " + s : "");
    }
    return (r, n, o) => {
      if (a === false) throw new p(i(n, " has been removed" + (t ? " in " + t : "")), p.ERR_DEPRECATED);
      return t && !qt[n] && (qt[n] = true, console.warn(i(n, " has been deprecated since v" + t + " and will be removed in the near future"))), a ? a(r, n, o) : true;
    };
  };
  ya.spelling = function(a) {
    return (t, s) => (console.warn(`${s} is likely a misspelling of ${a}`), true);
  };
  function ad(e, a, t) {
    if (typeof e != "object" || e === null) throw new p("options must be an object", p.ERR_BAD_OPTION_VALUE);
    const s = Object.keys(e);
    let i = s.length;
    for (; i-- > 0; ) {
      const r = s[i], n = Object.prototype.hasOwnProperty.call(a, r) ? a[r] : void 0;
      if (n) {
        const o = e[r], f = o === void 0 || n(o, r, e);
        if (f !== true) throw new p("option " + r + " must be " + f, p.ERR_BAD_OPTION_VALUE);
        continue;
      }
      if (t !== true) throw new p("Unknown option " + r, p.ERR_BAD_OPTION);
    }
  }
  const oa = {
    assertOptions: ad,
    validators: ya
  }, _ = oa.validators;
  let pe = class {
    constructor(a) {
      this.defaults = a || {}, this.interceptors = {
        request: new Ut(),
        response: new Ut()
      };
    }
    async request(a, t) {
      try {
        return await this._request(a, t);
      } catch (s) {
        if (s instanceof Error) try {
          let i = {};
          Error.captureStackTrace ? Error.captureStackTrace(i) : i = new Error();
          const r = i.stack;
          let n = "";
          if (typeof r == "string") {
            const o = r.indexOf(`
`);
            n = o === -1 ? "" : r.slice(o + 1);
          }
          if (!s.stack) s.stack = n;
          else if (n) {
            const o = n.indexOf(`
`), f = o === -1 ? -1 : n.indexOf(`
`, o + 1), u = f === -1 ? "" : n.slice(f + 1);
            String(s.stack).endsWith(u) || (s.stack += `
` + n);
          }
        } catch {
        }
        throw s;
      }
    }
    _request(a, t) {
      typeof a == "string" ? (t = t || {}, t.url = a) : t = a || {}, t = Be(this.defaults, t);
      const { transitional: s, paramsSerializer: i, headers: r } = t;
      s !== void 0 && oa.assertOptions(s, {
        silentJSONParsing: _.transitional(_.boolean),
        forcedJSONParsing: _.transitional(_.boolean),
        clarifyTimeoutError: _.transitional(_.boolean),
        legacyInterceptorReqResOrdering: _.transitional(_.boolean),
        advertiseZstdAcceptEncoding: _.transitional(_.boolean),
        validateStatusUndefinedResolves: _.transitional(_.boolean)
      }, false), i != null && (d.isFunction(i) ? t.paramsSerializer = {
        serialize: i
      } : oa.assertOptions(i, {
        encode: _.function,
        serialize: _.function
      }, true)), t.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? t.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : t.allowAbsoluteUrls = true), oa.assertOptions(t, {
        baseUrl: _.spelling("baseURL"),
        withXsrfToken: _.spelling("withXSRFToken")
      }, true), t.method = (d.getSafeProp(t, "method") || d.getSafeProp(this.defaults, "method") || "get").toLowerCase();
      let n = r && d.merge(r.common, r[t.method]);
      r && d.forEach(Ks.concat("common"), (S) => {
        delete r[S];
      }), t.headers = j.concat(n, r);
      const o = [];
      let f = true;
      this.interceptors.request.forEach(function(C) {
        if (typeof C.runWhen == "function" && C.runWhen(t) === false) return;
        f = f && C.synchronous;
        const l = t.transitional || lt;
        l && l.legacyInterceptorReqResOrdering ? o.unshift(C.fulfilled, C.rejected) : o.push(C.fulfilled, C.rejected);
      });
      const u = [];
      this.interceptors.response.forEach(function(C) {
        u.push(C.fulfilled, C.rejected);
      });
      let c, E = 0, A;
      if (!f) {
        const S = [
          ka.bind(this),
          void 0
        ];
        for (S.unshift(...o), S.push(...u), A = S.length, c = Promise.resolve(t); E < A; ) c = c.then(S[E++], S[E++]);
        return c;
      }
      A = o.length;
      let B = t;
      for (; E < A; ) {
        const S = o[E++], C = o[E++];
        try {
          B = S ? S(B) : B;
        } catch (l) {
          if (!C) {
            c = Promise.reject(l);
            break;
          }
          try {
            const m = C.call(this, l);
            d.isThenable(m) && (c = Promise.resolve(m).then(() => ka.call(this, B)));
          } catch (m) {
            c = Promise.reject(m);
          }
          break;
        }
      }
      if (!c) try {
        c = ka.call(this, B);
      } catch (S) {
        c = Promise.reject(S);
      }
      for (E = 0, A = u.length; E < A; ) c = c.then(u[E++], u[E++]);
      return c;
    }
    getUri(a) {
      a = Be(this.defaults, a);
      const t = Ys(a.baseURL, a.url, a.allowAbsoluteUrls, a);
      return js(t, a.params, a.paramsSerializer);
    }
  };
  d.forEach([
    "delete",
    "get",
    "head",
    "options"
  ], function(a) {
    pe.prototype[a] = function(t, s) {
      return this.request(Be(s || {}, {
        method: a,
        url: t,
        data: s && d.hasOwnProp(s, "data") ? s.data : void 0
      }));
    };
  });
  d.forEach([
    "post",
    "put",
    "patch",
    "query"
  ], function(a) {
    function t(s) {
      return function(r, n, o) {
        return this.request(Be(o || {}, {
          method: a,
          headers: s ? {
            "Content-Type": "multipart/form-data"
          } : {},
          url: r,
          data: n
        }));
      };
    }
    pe.prototype[a] = t(), a !== "query" && (pe.prototype[a + "Form"] = t(true));
  });
  let td = class ai {
    constructor(a) {
      if (typeof a != "function") throw new TypeError("executor must be a function.");
      let t;
      this.promise = new Promise(function(r) {
        t = r;
      });
      const s = this;
      this.promise.then((i) => {
        if (!s._listeners) return;
        let r = s._listeners.length;
        for (; r-- > 0; ) s._listeners[r](i);
        s._listeners = null;
      }), this.promise.then = (i) => {
        let r;
        const n = new Promise((o) => {
          s.subscribe(o), r = o;
        }).then(i);
        return n.cancel = function() {
          s.unsubscribe(r);
        }, n;
      }, a(function(r, n, o) {
        s.reason || (s.reason = new Qe(r, n, o), t(s.reason));
      });
    }
    throwIfRequested() {
      if (this.reason) throw this.reason;
    }
    subscribe(a) {
      if (this.reason) {
        a(this.reason);
        return;
      }
      this._listeners ? this._listeners.push(a) : this._listeners = [
        a
      ];
    }
    unsubscribe(a) {
      if (!this._listeners) return;
      const t = this._listeners.indexOf(a);
      t !== -1 && this._listeners.splice(t, 1);
    }
    toAbortSignal() {
      const a = new AbortController(), t = (s) => {
        a.abort(s);
      };
      return this.subscribe(t), a.signal.unsubscribe = () => this.unsubscribe(t), a.signal;
    }
    static source() {
      let a;
      return {
        token: new ai(function(i) {
          a = i;
        }),
        cancel: a
      };
    }
  };
  function sd(e) {
    return function(t) {
      return e.apply(null, t);
    };
  }
  function id(e) {
    return d.isObject(e) && e.isAxiosError === true;
  }
  const da = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    ContentTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    UnprocessableContent: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511,
    WebServerReturnsAnUnknownError: 520,
    WebServerIsDown: 521,
    ConnectionTimedOut: 522,
    OriginIsUnreachable: 523,
    TimeoutOccurred: 524,
    SslHandshakeFailed: 525,
    InvalidSslCertificate: 526
  };
  Object.entries(da).forEach(([e, a]) => {
    da[a] === void 0 && (da[a] = e);
  });
  function ti(e) {
    const a = new pe(e), t = Ss(pe.prototype.request, a);
    return d.extend(t, pe.prototype, a, {
      allOwnKeys: true
    }), d.extend(t, a, null, {
      allOwnKeys: true
    }), t.create = function(i) {
      return ti(Be(e, i));
    }, t;
  }
  const W = ti(Ye);
  W.Axios = pe;
  W.CanceledError = Qe;
  W.CancelToken = td;
  W.isCancel = Gs;
  W.VERSION = mt;
  W.toFormData = Ba;
  W.AxiosError = p;
  W.Cancel = W.CanceledError;
  W.all = function(a) {
    return Promise.all(a);
  };
  W.spread = sd;
  W.isAxiosError = id;
  W.mergeConfig = Be;
  W.AxiosHeaders = j;
  W.formToJSON = (e) => Vs(d.isHTMLForm(e) ? new FormData(e) : e);
  W.getAdapter = ei.getAdapter;
  W.HttpStatusCode = da;
  W.default = W;
  const { Axios: Xd, AxiosError: $d, CanceledError: Yd, isCancel: Qd, CancelToken: Jd, VERSION: Zd, all: ec, Cancel: ac, isAxiosError: tc, spread: sc, toFormData: ic, AxiosHeaders: rc, HttpStatusCode: nc, formToJSON: oc, getAdapter: dc, mergeConfig: cc, create: lc } = W;
  var rd = {};
  ne = 60 * 1e3;
  si = {
    Mainnet: {
      api: "https://api.wormholescan.io",
      circleAPI: Ha("Mainnet"),
      executorAPI: Va("Mainnet"),
      chains: Sa("Mainnet")
    },
    Testnet: {
      api: "https://api.testnet.wormholescan.io",
      circleAPI: Ha("Testnet"),
      executorAPI: Va("Testnet"),
      chains: Sa("Testnet")
    },
    Devnet: {
      api: "http://guardian:7071",
      circleAPI: "",
      executorAPI: "",
      chains: Sa("Devnet")
    }
  };
  nd = function(e, a) {
    return Object.fromEntries(Object.entries(si[e].chains).filter(([t, s]) => s.platform == a));
  };
  od = function(e, a) {
    let t = si[e];
    return a ? ut(t, a) : t;
  };
  fc = function(e, a, t) {
    const s = nd(e, a);
    return t ? ut(s, t) : s;
  };
  function ut(e, a) {
    e || (e = {});
    for (const [t, s] of Object.entries(a)) typeof s == "object" && !Array.isArray(s) ? e[t] = ut(e[t], s) : e[t] = s;
    return e;
  }
  let dd;
  dd = typeof Ma < "u";
  mc = dd && rd.NETWORK || "Testnet";
  ye = async function(e, a, t = ne, s) {
    const i = Math.floor(t / a);
    let r = 0;
    return new Promise((n, o) => {
      e().then((f) => {
        if (f !== null) {
          n(f);
          return;
        }
        let u = setInterval(async () => {
          if (r >= i) {
            clearInterval(u), n(null);
            return;
          }
          try {
            const c = await e();
            c !== null ? (clearInterval(u), n(c)) : s && console.log(`Retrying ${s}, attempt ${r}/${i} `);
          } catch (c) {
            clearInterval(u), o(c);
            return;
          }
          r++;
        }, a);
      }).catch(o);
    });
  };
  cd = async function(e, a) {
    try {
      const t = await e.isTransferCompleted(a);
      return t || null;
    } catch (t) {
      return console.error(`Caught an error checking if VAA is redeemed: ${t}
`), null;
    }
  };
  ld = async function(e, a) {
    try {
      if (zr(a)) return await e.lookupTransferFromIbcMsgId(a);
      if (rt(a)) return await e.lookupTransferFromTx(a.txid);
      if (xs(a) || Fs(a)) return await e.lookupTransferFromMsg(a);
      throw new Error("Invalid message type:" + JSON.stringify(a));
    } catch (t) {
      console.error("Caught an error looking for ibc transfer: ", t);
    }
    return null;
  };
  let ii;
  bc = Object.freeze(Object.defineProperty({
    __proto__: null,
    fetchIbcXfer: ld,
    isTokenBridgeVaaRedeemed: cd,
    retry: ye
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  ii = 2e3;
  var Ya;
  (function(e) {
    e.complete = "complete", e.pending_confirmations = "pending_confirmations";
  })(Ya || (Ya = {}));
  const fd = (e) => ({
    message: e.attestation,
    status: e.status
  });
  async function ri(e, a) {
    var _a2;
    const t = `${e}/${a}`;
    try {
      const s = await W.get(t), i = fd(s == null ? void 0 : s.data);
      return i.message === "PENDING" ? null : i.message;
    } catch (s) {
      if (!s || typeof s == "object" && (W.isAxiosError(s) && ((_a2 = s.response) == null ? void 0 : _a2.status) === 404 || "status" in s && s.status === 404)) return null;
      throw s;
    }
  }
  async function ni(e, a, t) {
    return ye(() => ri(e, a), ii, t, "Circle:GetAttestation");
  }
  md = async function() {
    var _a2, _b;
    try {
      return await W.get("https://iris-api.circle.com/ping", {
        timeout: 5e3
      }), null;
    } catch (e) {
      return W.isAxiosError(e) && (((_a2 = e.response) == null ? void 0 : _a2.status) === 403 || ((_b = e.response) == null ? void 0 : _b.status) === 451) ? {
        success: false,
        error: new Error("You are attempting a transfer from a location that is restricted by Circle.")
      } : null;
    }
  };
  uc = Object.freeze(Object.defineProperty({
    __proto__: null,
    CIRCLE_RETRY_INTERVAL: ii,
    get CircleAttestationStatus() {
      return Ya;
    },
    checkCircleGeoblock: md,
    getCircleAttestation: ri,
    getCircleAttestationWithRetry: ni
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  Ea = async function(e, a, t) {
    if (!ys(t)) throw new Error("Invalid signer, not SignAndSendSigner or SignOnlySigner");
    return (await oi(a, async (r) => nt(t) ? t.signAndSend(r) : e.sendWait(await t.sign(r)))).map((r) => ({
      chain: e.chain,
      txid: r
    }));
  };
  Ec = async function(e, a) {
    if (!nt(a)) throw new Error("Invalid signer, only SignAndSendSigner may call this method");
    return (await oi(e, (i) => a.signAndSend(i))).map((i) => ({
      chain: a.chain(),
      txid: i
    }));
  };
  async function oi(e, a) {
    const t = [];
    let s = [];
    for await (const i of e) i.parallelizable ? s.push(i) : (s.length > 0 && (t.push(...await a(s)), s = []), t.push(...await a([
      i
    ])));
    return s.length > 0 && t.push(...await a(s)), t;
  }
  Ac = async function(e) {
    const a = [];
    for await (const t of e) a.push(t);
    return a;
  };
  di = class extends Error {
    constructor(a, t) {
      super(a);
      __publicField(this, "relayExplorer");
      this.relayExplorer = t;
    }
  };
  (function(e) {
    e[e.Failed = -1] = "Failed", e[e.Created = 0] = "Created", e[e.SourceInitiated = 1] = "SourceInitiated", e[e.SourceFinalized = 2] = "SourceFinalized", e[e.InReview = 3] = "InReview", e[e.Attested = 4] = "Attested", e[e.Refunded = 5] = "Refunded", e[e.DestinationInitiated = 6] = "DestinationInitiated", e[e.DestinationQueued = 7] = "DestinationQueued", e[e.DestinationFinalized = 8] = "DestinationFinalized";
  })(x || (x = {}));
  ci = function(e) {
    return e.state === x.SourceInitiated;
  };
  Aa = function(e) {
    return e.state === x.SourceFinalized;
  };
  zt = function(e) {
    return e.state === x.InReview;
  };
  Ne = function(e) {
    return e.state === x.Attested;
  };
  Cc = function(e) {
    return e.state === x.Refunded;
  };
  li = function(e) {
    return e.state === x.DestinationInitiated;
  };
  hc = function(e) {
    return e.state === x.DestinationQueued;
  };
  pc = function(e) {
    return e.state === x.DestinationFinalized;
  };
  bd = function(e) {
    return e.state < 0;
  };
  Vt = function(e) {
    return bd(e) && e.error instanceof di;
  };
  L = class {
    constructor(a, t, s, i) {
      __publicField(this, "wh");
      __publicField(this, "fromChain");
      __publicField(this, "toChain");
      __publicField(this, "_state");
      __publicField(this, "transfer");
      __publicField(this, "txids", []);
      __publicField(this, "attestations");
      this._state = x.Created, this.wh = a, this.transfer = t, this.fromChain = s ?? a.getChain(t.from.chain), this.toChain = i ?? a.getChain(t.to.chain);
    }
    getTransferState() {
      return this._state;
    }
    static async from(a, t, s = ne, i, r) {
      if (Fi(t)) return t = {
        ...t,
        ...await L.destinationOverrides(a.getChain(t.from.chain), a.getChain(t.to.chain), t)
      }, new L(a, t, i, r);
      let n;
      if (Fe(t)) n = await L.fromWormholeMessageId(a, t, s);
      else if (rt(t)) n = await L.fromTransaction(a, t, s, i);
      else if (ma(t)) n = await L.fromCircleMessage(a, t);
      else throw new Error("Invalid `from` parameter for CircleTransfer");
      return n.fromChain = i ?? a.getChain(n.transfer.from.chain), n.toChain = r ?? a.getChain(n.transfer.to.chain), await n.fetchAttestation(s), n;
    }
    static async fromWormholeMessageId(a, t, s) {
      const { chain: i, emitter: r } = t, n = await L.getTransferVaa(a, t), o = n.payload.mintRecipient, f = sa(a.network, n.payload.targetDomain), { wormholeRelayer: u } = a.config.chains[f].contracts.cctp;
      let c = false;
      if (u) {
        const B = Z.chainAddress(i, u).address.toUniversalAddress();
        c = n.payloadName === "TransferWithRelay" && o.equals(B);
      }
      const E = {
        from: {
          chain: t.chain,
          address: n.payload.caller
        },
        to: {
          chain: f,
          address: o
        },
        amount: n.payload.token.amount,
        automatic: c
      }, A = new L(a, E);
      return A.attestations = [
        {
          id: {
            emitter: r,
            sequence: n.sequence,
            chain: i
          },
          attestation: n
        }
      ], A._state = x.Attested, A;
    }
    static async fromCircleMessage(a, t) {
      const [s, i] = Pa.deserialize(Ra.decode(t)), { payload: r } = s, n = r.messageSender, o = r.mintRecipient, f = sa(a.network, s.sourceDomain), u = sa(a.network, s.destinationDomain), c = {
        from: {
          chain: f,
          address: n
        },
        to: {
          chain: u,
          address: o
        },
        amount: r.amount,
        automatic: false
      }, E = new L(a, c);
      return E.attestations = [
        {
          id: {
            hash: i
          },
          attestation: {
            message: s
          }
        }
      ], E._state = x.SourceInitiated, E;
    }
    static async fromTransaction(a, t, s, i) {
      const { chain: r, txid: n } = t;
      i = i ?? a.getChain(r);
      let o = [];
      try {
        o = await i.parseTransaction(n);
      } catch (u) {
        if (!(u.message.includes("no bridge messages found") || u.message.includes("not found"))) throw u;
      }
      let f;
      if (o.length > 0) f = await L.fromWormholeMessageId(a, o[0], s);
      else {
        const c = await (await i.getCircleBridge()).parseTransactionDetails(n), E = {
          ...c,
          automatic: false
        };
        f = new L(a, E), f.attestations = [
          {
            id: c.id,
            attestation: {
              message: c.message
            }
          }
        ];
      }
      return f._state = x.SourceInitiated, f.txids = [
        t
      ], f;
    }
    async initiateTransfer(a) {
      if (this._state !== x.Created) throw new Error("Invalid state transition in `start`");
      return this.txids = await L.transfer(this.fromChain, this.transfer, a), this._state = x.SourceInitiated, this.txids.map(({ txid: t }) => t);
    }
    async _fetchWormholeAttestation(a) {
      let t = this.attestations ?? [];
      if (!t || t.length == 0) throw new Error("No VAA details available");
      for (const s in t) t[s].attestation || (t[s].attestation = await L.getTransferVaa(this.wh, t[s].id, a));
      return this.attestations = t, t.map((s) => s.id);
    }
    async _fetchCircleAttestation(a) {
      var _a2, _b;
      let t = this.attestations ?? [];
      if (!t || t.length == 0) {
        if (this.txids.length === 0) throw new Error("No circle attestations or transactions to fetch");
        const s = this.txids[((_a2 = this.txids) == null ? void 0 : _a2.length) - 1], n = await (await this.wh.getChain(this.transfer.from.chain).getCircleBridge()).parseTransactionDetails(s.txid);
        t = [
          {
            id: n.id,
            attestation: {
              message: n.message
            }
          }
        ];
      }
      for (const s in t) {
        const i = t[s];
        if ((_b = i.attestation) == null ? void 0 : _b.attestation) continue;
        const r = await this.wh.getCircleAttestation(i.id.hash, a);
        if (r === null) throw new Error("No attestation available after timeout exhausted");
        t[s].attestation.attestation = r;
      }
      return this.attestations = t, t.map((s) => s.id);
    }
    async fetchAttestation(a) {
      if (this._state < x.SourceInitiated) throw new Error("Invalid state transition in `fetchAttestation`");
      const t = this.transfer.automatic ? (await Promise.all([
        this._fetchWormholeAttestation(a),
        this._fetchCircleAttestation(a)
      ])).flat() : await this._fetchCircleAttestation(a);
      if (this._state = x.Attested, this.attestations && this.attestations.length > 0) for (const s of this.attestations) {
        const { attestation: i } = s;
        if (!Pa.isCircleAttestation(i)) continue;
        await L.isTransferComplete(this.toChain, i) && (this._state = x.DestinationFinalized);
      }
      return t;
    }
    async completeTransfer(a) {
      var _a2;
      if (this._state < x.Attested) throw new Error("Invalid state transition in `finish`");
      if (this.transfer.automatic) throw this.attestations ? this.attestations.find((A) => Fe(A.id)) ? new Error("No method to redeem auto circle bridge tx (yet)") : new Error("No VAA found") : new Error("No VAA details available");
      if (!this.attestations) throw new Error("No Circle Attestations found");
      const t = this.attestations.filter((E) => ma(E.id));
      if (t.length > 1) throw new Error(`Expected a single circle attestation, found ${t.length}`);
      const { id: s, attestation: i } = t[0];
      if (!i) throw new Error(`No Circle Attestation for ${s.hash}`);
      const { message: r, attestation: n } = i;
      if (!n) throw new Error(`No Circle Attestation for ${s.hash}`);
      const o = await this.toChain.getCircleBridge(), f = Z.parseAddress(a.chain(), a.address()), u = o.redeem(f, r, n), c = await Ea(this.toChain, u, a);
      return (_a2 = this.txids) == null ? void 0 : _a2.push(...c), c.map(({ txid: E }) => E);
    }
  };
  (function(e) {
    async function a(u, c, E) {
      let A;
      return c.automatic ? A = (await u.getAutomaticCircleBridge()).transfer(c.from.address, {
        chain: c.to.chain,
        address: c.to.address
      }, c.amount, c.nativeGas) : A = (await u.getCircleBridge()).transfer(c.from.address, {
        chain: c.to.chain,
        address: c.to.address
      }, c.amount), await Ea(u, A, E);
    }
    e.transfer = a;
    async function* t(u, c, E = ne, A, B) {
      var _a2, _b;
      const S = Date.now(), C = (l, m) => Math.max(m - (Date.now() - l), 0);
      if (A = A ?? u.getChain(c.from), B = B ?? u.getChain(c.to), ci(c)) {
        if (c.originTxs.length === 0) throw "Invalid state transition: no originating transactions";
        const l = c.originTxs[c.originTxs.length - 1], m = await e.getTransferMessage(A, l.txid);
        c = {
          ...c,
          attestation: {
            id: m.id,
            attestation: {
              message: m.message
            }
          },
          state: x.SourceFinalized
        }, yield c;
      }
      if (Aa(c)) {
        if (!c.attestation) throw "Invalid state transition: no attestation id";
        if (Fe(c.attestation.id)) {
          let l = c.attestation.attestation ? c.attestation.attestation : void 0;
          l || (l = await e.getTransferVaa(u, c.attestation.id, C(S, E)), c = {
            ...c,
            attestation: {
              id: c.attestation.id,
              attestation: l
            },
            state: x.Attested
          }, yield c);
        } else if (ma(c.attestation.id)) {
          const l = await u.getCircleAttestation(c.attestation.id.hash, E), m = c.originTxs[c.originTxs.length - 1], h = await (await A.getCircleBridge()).parseTransactionDetails(m.txid);
          l && (c = {
            ...c,
            attestation: {
              id: c.attestation.id,
              attestation: {
                attestation: l,
                message: h.message
              }
            },
            state: x.Attested
          }, yield c);
        }
      }
      if (Ne(c) || Aa(c)) {
        if (!c.attestation) throw "Invalid state transition";
        if (Fe(c.attestation.id)) {
          const l = await u.getTransactionStatus(c.attestation.id, C(S, E));
          if (l && ((_b = (_a2 = l.globalTx) == null ? void 0 : _a2.destinationTx) == null ? void 0 : _b.txHash)) {
            const { chainId: m, txHash: b } = l.globalTx.destinationTx;
            c = {
              ...c,
              destinationTxs: [
                {
                  chain: Ke(m),
                  txid: b
                }
              ],
              state: x.DestinationInitiated
            }, yield c;
          }
        }
      }
      (Ne(c) || li(c)) && (await e.isTransferComplete(B, c.attestation.attestation) && (c = {
        ...c,
        state: x.DestinationFinalized,
        destinationTxs: []
      }), yield c);
    }
    e.track = t;
    async function s(u, c, E) {
      const A = {
        ...E
      };
      if (we(c.chain) === "Solana" && !A.automatic) {
        const B = Z.parseAddress(c.chain, Le.get(c.network, c.chain));
        A.to = await c.getTokenAccount(A.to.address, B);
      }
      return A;
    }
    e.destinationOverrides = s;
    async function i(u, c, E) {
      if (!be(c.network, c.chain)) throw new Error(`Invalid destination chain ${c.chain} for Circle transfer`);
      const A = Le.get(c.network, c.chain);
      if (!A) throw "Invalid transfer, no USDC contract on destination";
      if (!be(u.network, u.chain)) throw new Error(`Invalid source chain ${u.chain} for Circle transfer`);
      const B = Le.get(u.network, u.chain);
      if (!B) throw "Invalid transfer, no USDC contract on source";
      const S = Z.chainAddress(c.chain, A), C = Z.chainAddress(u.chain, B), l = (u.chain === "Polygon" ? 2e3 * 200 : et(u.chain)) + it, m = E.automatic ? la(0, 5, 0) : la(24, 0, 0);
      if (!E.automatic) return {
        sourceToken: {
          token: C,
          amount: E.amount
        },
        destinationToken: {
          token: S,
          amount: E.amount
        },
        eta: l,
        expires: m
      };
      let b = E.amount;
      const h = E.nativeGas ? E.nativeGas : 0n;
      b -= h;
      const F = await (await u.getAutomaticCircleBridge()).getRelayerFee(c.chain);
      b -= F;
      let g = 0n;
      return E.nativeGas && (g = await (await c.getAutomaticCircleBridge()).nativeTokenAmount(h)), {
        sourceToken: {
          token: C,
          amount: E.amount
        },
        destinationToken: {
          token: S,
          amount: b
        },
        relayFee: {
          token: C,
          amount: F
        },
        destinationNativeGas: g,
        eta: l,
        expires: m
      };
    }
    e.quoteTransfer = i;
    async function r(u, c) {
      if (!Pa.isCircleAttestation(c)) throw new Error("Must check for completion with circle message");
      return await (await u.getCircleBridge()).isTransferCompleted(c.message);
    }
    e.isTransferComplete = r;
    async function n(u, c, E) {
      const A = await u.getVaa(c, "AutomaticCircleBridge:TransferWithRelay", E);
      if (!A) throw new Error("No VAA available after timeout exhausted");
      return A;
    }
    e.getTransferVaa = n;
    async function o(u, c) {
      return await (await u.getCircleBridge()).parseTransactionDetails(c);
    }
    e.getTransferMessage = o;
    function f(u) {
      var _a2, _b;
      const { from: c, to: E } = u.transfer;
      let A = {
        from: c.chain,
        to: E.chain,
        state: x.Created
      };
      const B = u.txids.filter((b) => b.chain === u.transfer.from.chain);
      B.length > 0 && (A = {
        ...A,
        state: x.SourceInitiated,
        originTxs: B
      });
      const S = ((_a2 = u.attestations) == null ? void 0 : _a2.filter((b) => Fe(b.id))) ?? [], C = ((_b = u.attestations) == null ? void 0 : _b.filter((b) => ma(b.id))) ?? [], l = C.length > 0 ? C[0] : S.length > 0 ? S[0] : void 0;
      l && l.id && (A = {
        ...A,
        state: x.SourceFinalized,
        attestation: l
      }, l.attestation && (A = {
        ...A,
        state: x.Attested,
        attestation: {
          id: l.id,
          attestation: l.attestation
        }
      }));
      const m = u.txids.filter((b) => b.chain === u.transfer.to.chain);
      return m.length > 0 && (A = {
        ...A,
        state: x.DestinationInitiated,
        destinationTxs: m
      }), A;
    }
    e.getReceipt = f;
  })(L || (L = {}));
  const Je = 2e3;
  async function Et(e, a) {
    var _a2;
    const { chain: t, emitter: s, sequence: i } = a, r = me(t), n = Si("0x", s.toString()), o = `${e}/v1/signed_vaa/${r}/${n}/${i}`;
    try {
      const { data: { vaaBytes: f } } = await W.get(o);
      return Ve.decode(f);
    } catch (f) {
      if (!f || typeof f == "object" && (W.isAxiosError(f) && ((_a2 = f.response) == null ? void 0 : _a2.status) === 404 || "status" in f && f.status === 404)) return null;
      throw f;
    }
  }
  async function At(e, a, t) {
    return await ye(() => Et(e, a), Je, t, "Wormholescan:GetVaaBytes");
  }
  async function ud(e, a, t) {
    const s = await Et(e, a);
    return s ? _e(t, s) : null;
  }
  async function fi(e, a, t, s) {
    const i = await At(e, a, s);
    return i ? _e(t, i) : null;
  }
  async function mi(e, a) {
    var _a2;
    const { chain: t, emitter: s, sequence: i } = a, r = me(t), n = s.toUniversalAddress().toString(), o = `${e}/api/v1/transactions/${r}/${n}/${i}`;
    try {
      return (await W.get(o)).data;
    } catch (f) {
      if (!f || typeof f == "object" && (W.isAxiosError(f) && ((_a2 = f.response) == null ? void 0 : _a2.status) === 404 || "status" in f && f.status === 404)) return null;
      throw f;
    }
  }
  async function bi(e, a, t) {
    return await ye(() => mi(e, a), Je, t, "Wormholescan:GetTransactionStatus");
  }
  async function ui(e, a) {
    var _a2;
    const t = `${e}/v1/relays?txHash=${a}`;
    try {
      const s = await W.get(t);
      if (s.data.data.to.txHash) return s.data.data;
    } catch (s) {
      if (!s || typeof s == "object" && (W.isAxiosError(s) && ((_a2 = s.response) == null ? void 0 : _a2.status) === 404 || "status" in s && s.status === 404)) return null;
      throw s;
    }
    return null;
  }
  async function Ed(e, a, t) {
    return ye(() => ui(e, a), Je, t, "Wormholescan:GetRelayStatus");
  }
  async function Ei(e, a) {
    var _a2;
    const t = `${e}/api/v1/vaas?txHash=${a}`;
    try {
      const s = await W.get(t);
      if (s.data.data.length > 0) return s.data.data[0];
    } catch (s) {
      if (!s || typeof s == "object" && (W.isAxiosError(s) && ((_a2 = s.response) == null ? void 0 : _a2.status) === 404 || "status" in s && s.status === 404)) return null;
      throw s;
    }
    return null;
  }
  async function Qa(e, a, t, s) {
    const r = await ye(() => Ei(e, a), Je, s, "Wormholescan:GetVaaByTxHash");
    return r ? _e(t, Ve.decode(r.vaa)) : null;
  }
  async function Ai(e, a, t = 50, s = 0) {
    var _a2;
    const i = `${e}/api/v1/transactions?address=${a}&pageSize=${t}&page=${s}`;
    try {
      const r = await W.get(i);
      if (r.data.transactions.length > 0) return r.data.transactions;
    } catch (r) {
      if (!r || typeof r == "object" && (W.isAxiosError(r) && ((_a2 = r.response) == null ? void 0 : _a2.status) === 404 || "status" in r && r.status === 404)) return null;
      throw r;
    }
    return null;
  }
  async function Ad(e) {
    const a = `${e}/v1/heartbeats`;
    try {
      const t = await W.get(a);
      if (t.data && t.data.entries.length > 0) return t.data.entries;
    } catch {
    }
    return null;
  }
  async function Ci(e) {
    const a = `${e}/v1/governor/token_list`;
    try {
      const t = await W.get(a);
      if (t.data && t.data.entries.length > 0) return t.data.entries.reduce((s, i) => {
        const r = Ke(i.originChainId);
        return s[r] = s[r] || {}, s[r][i.originAddress] = i.price, s;
      }, {});
    } catch {
    }
    return null;
  }
  async function hi(e) {
    const a = `${e}/v1/governor/available_notional_by_chain`;
    try {
      const t = await W.get(a);
      if (t.data && t.data.entries.length > 0) return t.data.entries.reduce((s, i) => {
        const r = i.bigTransactionSize === "0" ? void 0 : He(ta(i.bigTransactionSize, 2));
        return s[Ke(i.chainId)] = {
          available: He(ta(i.remainingAvailableNotional, 2)),
          limit: He(ta(i.notionalLimit, 2)),
          maxSize: r
        }, s;
      }, {});
    } catch {
    }
    return null;
  }
  async function pi(e, a) {
    const { chain: t, emitter: s, sequence: i } = a, r = me(t), n = s.toUniversalAddress().toString(), o = `${e}/v1/governor/is_vaa_enqueued/${r}/${n}/${i}`;
    return (await W.get(o)).data.isEnqueued;
  }
  Dc = Object.freeze(Object.defineProperty({
    __proto__: null,
    WHSCAN_RETRY_INTERVAL: Je,
    getGovernedTokens: Ci,
    getGovernorLimits: hi,
    getGuardianHeartbeats: Ad,
    getIsVaaEnqueued: pi,
    getRelayStatus: ui,
    getRelayStatusWithRetry: Ed,
    getTransactionStatus: mi,
    getTransactionStatusWithRetry: bi,
    getTxsByAddress: Ai,
    getVaa: ud,
    getVaaByTxHash: Ei,
    getVaaByTxHashWithRetry: Qa,
    getVaaBytes: Et,
    getVaaBytesWithRetry: At,
    getVaaWithRetry: fi
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  R = class {
    constructor(a, t, s, i) {
      __publicField(this, "wh");
      __publicField(this, "fromChain");
      __publicField(this, "toChain");
      __publicField(this, "_state");
      __publicField(this, "transfer");
      __publicField(this, "txids", []);
      __publicField(this, "attestations");
      this._state = x.Created, this.wh = a, this.transfer = t, this.fromChain = s ?? a.getChain(t.from.chain), this.toChain = i ?? a.getChain(t.to.chain);
    }
    getTransferState() {
      return this._state;
    }
    static async from(a, t, s = 6e3, i, r) {
      if (Ti(t)) return i = i ?? a.getChain(t.from.chain), r = r ?? a.getChain(t.to.chain), R.validateTransferDetails(a, t, i, r), t = await R.destinationOverrides(i, r, t), new R(a, t, i, r);
      let n;
      if (Fe(t)) n = await R.fromIdentifier(a, t, s);
      else if (rt(t)) n = await R.fromTransaction(a, t, s, i);
      else throw new Error("Invalid `from` parameter for TokenTransfer");
      return n.fromChain = i ?? a.getChain(n.transfer.from.chain), n.toChain = r ?? a.getChain(n.transfer.to.chain), await n.fetchAttestation(s), n;
    }
    static async fromIdentifier(a, t, s) {
      const i = await R.getTransferVaa(a, t, s);
      if (!i) throw new Error("VAA not found");
      const r = i.protocolName;
      let n = {
        chain: i.emitterChain,
        address: i.emitterAddress
      }, { token: o, to: f } = i.payload, u;
      if (o.chain === n.chain) u = await a.getTokenNativeAddress(n.chain, o.chain, o.address);
      else {
        const l = await (await (await a.getChain(n.chain)).getTokenBridge()).getWrappedAsset(o);
        u = Se(n.chain, l.toString());
      }
      const c = await a.getDecimals(n.chain, u), E = ca(he(o.amount, Math.min(c, R.MAX_DECIMALS)), c);
      r === "ExecutorTokenBridge" && (n = {
        chain: i.emitterChain,
        address: i.payload.from
      }, f = {
        chain: i.payload.to.chain,
        address: i.payload.payload.targetRecipient
      });
      const A = {
        token: o,
        amount: ee(E),
        from: n,
        to: f,
        protocol: r,
        nativeGas: 0n
      }, B = new R(a, A);
      return B.attestations = [
        {
          id: t,
          attestation: i
        }
      ], B._state = x.Attested, B;
    }
    static async fromTransaction(a, t, s, i) {
      i = i ?? a.getChain(t.chain);
      const r = await R.getTransferMessage(i, t.txid, s), n = await R.fromIdentifier(a, r, s);
      return n.txids = [
        t
      ], n;
    }
    async initiateTransfer(a) {
      if (this._state !== x.Created) throw new Error("Invalid state transition in `initiateTransfer`");
      return this.txids = await R.transfer(this.fromChain, this.transfer, a), this._state = x.SourceInitiated, this.txids.map(({ txid: t }) => t);
    }
    async fetchAttestation(a) {
      if (this._state < x.SourceInitiated || this._state > x.Attested) throw new Error("Invalid state transition in `fetchAttestation`, expected at least `SourceInitiated`");
      if (!this.attestations || this.attestations.length === 0) {
        if (this.txids.length === 0) throw new Error("No VAAs set and txids available to look them up");
        const t = this.txids[this.txids.length - 1], s = await R.getTransferMessage(this.fromChain, t.txid, a);
        this.attestations = [
          {
            id: s
          }
        ];
      }
      for (const t in this.attestations) {
        if (this.attestations[t].attestation) continue;
        const s = await R.getTransferVaa(this.wh, this.attestations[t].id, a);
        if (!s) throw new Error("VAA not found");
        this.attestations[t].attestation = s;
      }
      if (this._state = x.Attested, this.attestations.length > 0) {
        const { attestation: t } = this.attestations[0];
        await R.isTransferComplete(this.toChain, t) && (this._state = x.DestinationFinalized);
      }
      return this.attestations.map((t) => t.id);
    }
    async completeTransfer(a) {
      if (this._state < x.Attested) throw new Error("Invalid state transition, must be attested prior to calling `completeTransfer`.");
      if (!this.attestations) throw new Error("No VAA details available");
      const { attestation: t } = this.attestations[0];
      if (!t) throw new Error(`No VAA found for ${this.attestations[0].id.sequence}`);
      const s = await R.redeem(this.toChain, t, a);
      return this.txids.push(...s), this._state = x.DestinationInitiated, s.map(({ txid: i }) => i);
    }
  };
  (function(e) {
    e.MAX_DECIMALS = 8;
    async function a(C, l, m) {
      const b = Se(m.chain(), m.address()), h = Da(l.token) ? l.token.address : l.token;
      let D;
      if (l.protocol === "TokenBridge") D = (await C.getTokenBridge()).transfer(b, l.to, h, l.amount, l.payload);
      else if (l.protocol === "ExecutorTokenBridge") {
        if (!l.executorQuote) throw new Error("ExecutorTokenBridge transfer requires an executorQuote");
        const F = l.executorQuote.relayInstructions.requests.find((y) => y.request.type === "GasDropOffInstruction");
        F && F.request.type === "GasDropOffInstruction" && F.request.recipient.equals(Pe.ZERO) && (F.request.recipient = l.to.address.toUniversalAddress()), D = (await C.getExecutorTokenBridge()).transfer(b, l.to, h, l.amount, l.executorQuote, l.referrerFee);
      } else throw new Error("Unknown token transfer protocol");
      return Ea(C, D, m);
    }
    e.transfer = a;
    async function t(C, l, m) {
      const b = Se(m.chain(), m.address()), h = l.protocolName === "ExecutorTokenBridge" ? (await C.getExecutorTokenBridge()).redeem(b, l) : (await C.getTokenBridge()).redeem(b, l);
      return Ea(C, h, m);
    }
    e.redeem = t;
    async function* s(C, l, m = ne, b, h) {
      var _a2, _b, _c, _d2;
      const D = Date.now(), F = (g, y) => Math.max(y - (Date.now() - g), 0);
      if (b = b ?? C.getChain(l.from), ci(l)) {
        if (l.originTxs.length === 0) throw "Origin transactions required to fetch message id";
        const { txid: g } = l.originTxs[l.originTxs.length - 1], y = await e.getTransferMessage(b, g, F(D, m));
        l = {
          ...l,
          state: x.SourceFinalized,
          attestation: {
            id: y
          }
        }, yield l;
      }
      if (Aa(l) || zt(l)) {
        if (!l.attestation.id) throw "Attestation id required to fetch attestation";
        const { id: g } = l.attestation, y = await e.getTransferVaa(C, g, F(D, m));
        throw y ? (l = {
          ...l,
          attestation: {
            id: g,
            attestation: y
          },
          state: x.Attested
        }, yield l) : await e.isTransferEnqueued(C, g) && (l = {
          ...l,
          state: x.InReview
        }, yield l), new Error("Attestation not found");
      }
      if (Ne(l) || Aa(l) || zt(l) || Vt(l)) {
        if (!((_a2 = l.attestation) == null ? void 0 : _a2.id)) throw "Attestation id required to fetch redeem tx";
        const { id: g } = l.attestation, y = await C.getTransactionStatus(g, F(D, m));
        if (y && ((_c = (_b = y.globalTx) == null ? void 0 : _b.destinationTx) == null ? void 0 : _c.txHash)) {
          const { chainId: v, txHash: M } = y.globalTx.destinationTx;
          l = {
            ...l,
            destinationTxs: [
              {
                chain: Ke(v),
                txid: M
              }
            ],
            state: x.DestinationInitiated,
            attestation: l.attestation
          };
        }
        yield l;
      }
      if (Ne(l) || li(l) || Vt(l)) {
        if (!((_d2 = l.attestation) == null ? void 0 : _d2.attestation)) throw "Signed Attestation required to check for redeem";
        if (l.attestation.attestation.payloadName === "AttestMeta") throw new Error("Unable to track an AttestMeta receipt");
        await e.isTransferComplete(h ?? C.getChain(l.attestation.attestation.payload.to.chain), l.attestation.attestation) && (l = {
          ...l,
          state: x.DestinationFinalized,
          attestation: l.attestation
        }), yield l;
      }
      if (Ne(l) && l.attestation.attestation.protocolName === "ExecutorTokenBridge") {
        const [g] = await C.getExecutorTxStatus(l.originTxs.at(-1).txid, l.from);
        if (!g) throw new Error("No transaction status found");
        const y = g.status;
        (y === ea.Failed || y === ea.Underpaid || y === ea.Unsupported || y === ea.Aborted) && (l = {
          ...l,
          state: x.Failed,
          error: new di(`Relay failed with status: ${y}`)
        }, yield l);
      }
      yield l;
    }
    e.track = s;
    function i(C) {
      const { transfer: l } = C, m = l.from.chain, b = l.to.chain;
      let h = {
        from: m,
        to: b,
        state: x.Created
      };
      const D = C.txids.filter((v) => v.chain === l.from.chain);
      D.length > 0 && (h = {
        ...h,
        state: x.SourceInitiated,
        originTxs: D
      });
      const F = C.attestations && C.attestations.length > 0 ? C.attestations[0] : void 0, g = F && F.id ? {
        id: F.id,
        attestation: F.attestation
      } : void 0;
      g && g.id && (h = {
        ...h,
        state: x.SourceFinalized,
        attestation: {
          id: g.id
        }
      }, g.attestation && (h = {
        ...h,
        state: x.Attested,
        attestation: {
          id: g.id,
          attestation: g.attestation
        }
      }));
      const y = C.txids.filter((v) => v.chain === l.to.chain);
      return y.length > 0 && (h = {
        ...h,
        state: x.DestinationFinalized,
        destinationTxs: y
      }), h;
    }
    e.getReceipt = i;
    async function r(C, l, m) {
      let b;
      const h = await C.getTokenBridge();
      if (V(m.address)) {
        const g = await h.getWrappedNative();
        b = {
          chain: m.chain,
          address: await h.getTokenUniversalAddress(g)
        };
      } else try {
        let g;
        Pe.instanceof(m.address) ? g = await h.getWrappedAsset(m) : g = m.address, b = await h.getOriginalAsset(g);
      } catch (g) {
        if (!g.message.includes("not a wrapped asset")) throw g;
        let y;
        Pe.instanceof(m.address) ? y = await h.getTokenNativeAddress(C.chain, m.address) : y = m.address, b = {
          chain: m.chain,
          address: await h.getTokenUniversalAddress(y)
        };
      }
      const D = await l.getTokenBridge();
      if (b.chain === l.chain) {
        const g = await D.getTokenNativeAddress(b.chain, b.address), y = await D.getWrappedNative();
        return ae({
          chain: l.chain,
          address: y
        }) === ae({
          chain: l.chain,
          address: g
        }) ? {
          chain: l.chain,
          address: "native"
        } : {
          chain: l.chain,
          address: g
        };
      }
      const F = await D.getWrappedAsset(b);
      return {
        chain: l.chain,
        address: F
      };
    }
    e.lookupDestinationToken = r;
    async function n(C, l) {
      return l.protocolName === "ExecutorTokenBridge" && (l = _e("TokenBridge:TransferWithPayload", Dt(l))), (await C.getTokenBridge()).isTransferCompleted(l);
    }
    e.isTransferComplete = n;
    async function o(C, l, m) {
      const b = await Z.parseMessageFromTx(C, l, m);
      if (b.length !== 1) throw new Error("Expected a single Wormhole Message, got: " + b.length);
      return b[0];
    }
    e.getTransferMessage = o;
    async function f(C, l, m) {
      const b = await C.getVaa(l, wi.getTransferDiscriminator(), m);
      if (!b) return null;
      if (b.payloadName === "TransferWithPayload") try {
        return _e("ExecutorTokenBridge:TransferWithExecutorRelay", Dt(b));
      } catch {
      }
      return b;
    }
    e.getTransferVaa = f;
    async function u(C, l) {
      return await C.getIsVaaEnqueued(l);
    }
    e.isTransferEnqueued = u;
    function c(C, l, m, b) {
      if (l.amount === 0n) throw new Error("Amount cannot be 0");
      if (l.from.chain === l.to.chain) throw new Error("Cannot transfer to the same chain");
      if (m = m ?? C.getChain(l.from.chain), b = b ?? C.getChain(l.to.chain), l.protocol === "TokenBridge") {
        if (!m.supportsTokenBridge()) throw new Error(`Token Bridge not supported on ${l.from.chain}`);
        if (!b.supportsTokenBridge()) throw new Error(`Token Bridge not supported on ${l.to.chain}`);
      } else if (l.protocol === "ExecutorTokenBridge") {
        if (!m.supportsExecutorTokenBridge()) throw new Error(`Token Bridge Executor not supported on ${l.from.chain}`);
        if (!b.supportsExecutorTokenBridge()) throw new Error(`Token Bridge Executor not supported on ${l.to.chain}`);
      } else throw new Error("Unknown token transfer protocol");
    }
    e.validateTransferDetails = c;
    async function E(C, l, m, b, h) {
      const D = await l.getTokenBridge();
      let F;
      if (V(b.token.address)) F = await D.getWrappedNative();
      else if (Pe.instanceof(b.token.address)) try {
        F = await D.getWrappedAsset(b.token);
      } catch (k) {
        if (!k.message.includes("not a wrapped asset")) throw k;
        F = await D.getTokenNativeAddress(l.chain, b.token.address);
      }
      else F = b.token.address;
      const g = Z.tokenId(l.chain, F.toString()), y = await l.getDecimals(F), v = he(b.amount, y), M = Ia(v, e.MAX_DECIMALS), [H, q] = await Promise.all([
        Ci(C.config.api),
        hi(C.config.api)
      ]), $ = [];
      if (q !== null && l.chain in q && H !== null) {
        let k;
        if (V(b.token.address)) k = {
          chain: l.chain,
          address: await D.getTokenUniversalAddress(F)
        };
        else try {
          k = await D.getOriginalAsset(b.token.address);
        } catch (Q) {
          if (!Q.message.includes("not a wrapped asset")) throw Q;
          k = {
            chain: l.chain,
            address: await D.getTokenUniversalAddress(F)
          };
        }
        if (k.chain in H && k.address.toString() in H[k.chain]) {
          const Q = q[l.chain], P = H[k.chain][k.address.toString()] * He(M);
          Q.maxSize && P > Q.maxSize && $.push({
            type: "GovernorLimitWarning",
            reason: "ExceedsLargeTransferLimit"
          }), P > Q.available && $.push({
            type: "GovernorLimitWarning",
            reason: "ExceedsRemainingNotional"
          });
        }
      }
      const Y = await e.lookupDestinationToken(l, m, b.token), z = await m.getDecimals(Y.address), oe = ca(M, z), xa = et(l.chain) + it, de = {
        sourceToken: {
          token: b.token,
          amount: ee(M)
        },
        destinationToken: {
          token: Y,
          amount: ee(oe)
        },
        warnings: $.length > 0 ? $ : void 0,
        eta: xa
      };
      if (b.protocol === "TokenBridge") return {
        ...de,
        expires: la(24, 0, 0)
      };
      if (b.protocol === "ExecutorTokenBridge") {
        const k = await B(C, l, m, b.gasLimit, b.msgValue, b.nativeGas, h), Q = k.relayInstructions.requests.find((O) => O.request.type === "GasDropOffInstruction"), ve = (Q == null ? void 0 : Q.request.type) === "GasDropOffInstruction" ? Q.request.dropOff : void 0;
        let P;
        if (b.referrerFee && (b.referrerFee.transferTokenFee > 0n || b.referrerFee.nativeTokenFee > 0n)) {
          const { transferTokenFee: O, nativeTokenFee: te, referrer: ce } = b.referrerFee, Ee = Ia(he(O, y), e.MAX_DECIMALS), Oe = ee(Ee), U = ee(M) - Oe;
          if (U <= 0n) throw new Error("Remaining amount after referrer fee is <= 0");
          P = {
            transferTokenFee: Oe,
            nativeTokenFee: te,
            remainingAmount: U,
            referrer: ce
          };
        }
        return {
          ...de,
          destinationToken: {
            token: Y,
            amount: (P == null ? void 0 : P.remainingAmount) ? ee(ca(he(P.remainingAmount, y), z)) : ee(oe)
          },
          expires: k.signedQuote.quote.expiryTime,
          relayFee: {
            token: Ka(l.chain),
            amount: k.estimatedCost
          },
          destinationNativeGas: ve,
          referrerFee: P ? {
            transferTokenFee: {
              token: g,
              amount: P.transferTokenFee
            },
            nativeTokenFee: {
              token: Ka(l.chain),
              amount: P.nativeTokenFee
            },
            referrer: P.referrer
          } : void 0,
          details: {
            executorQuote: k,
            referrerFee: P
          }
        };
      }
      throw new Error("Unknown token transfer protocol");
    }
    e.quoteTransfer = E;
    async function A(C, l, m) {
      const h = (m ? await m(C.network) : await C.getExecutorCapabilities())[me(l.chain)];
      if (!h) throw new Error(`No executor capabilities found for destination chain ${l.chain}`);
      return BigInt(h.gasDropOffLimit);
    }
    e.getExecutorGasDropOffLimit = A;
    async function B(C, l, m, b, h, D, F) {
      const g = F ? await F(C.network) : await C.getExecutorCapabilities();
      if (!g[me(l.chain)]) throw new Error(`No executor capabilities found for source chain ${l.chain}`);
      const v = g[me(m.chain)];
      if (!v || !v.requestPrefixes.includes("ERV1")) throw new Error(`No executor capabilities found for destination chain ${m.chain}`);
      const M = D ?? 0n;
      if (M > BigInt(v.gasDropOffLimit)) throw new Error(`Native gas amount ${M} exceeds limit ${BigInt(v.gasDropOffLimit)} for destination chain ${m.chain}`);
      const H = [];
      H.push({
        request: {
          type: "GasInstruction",
          gasLimit: b,
          msgValue: h
        }
      }), M > 0n && H.push({
        request: {
          type: "GasDropOffInstruction",
          dropOff: M,
          recipient: Pe.ZERO
        }
      });
      const q = {
        requests: H
      }, $ = Wi(Ui, q), Y = await C.getExecutorQuote(l.chain, m.chain, Ra.encode($, true));
      if (!Y.estimatedCost) throw new Error("No estimated cost");
      const z = BigInt(Y.estimatedCost);
      return {
        signedQuote: vi(Oi, Ra.decode(Y.signedQuote)),
        estimatedCost: z,
        relayInstructions: q
      };
    }
    e.getExecutorQuote = B;
    async function S(C, l, m) {
      const b = {
        ...m
      };
      if (we(m.to.chain) === "Solana" && b.protocol === "TokenBridge") {
        const h = await e.lookupDestinationToken(C, l, b.token);
        if (V(h.address)) {
          const D = await l.getNativeWrappedTokenId();
          b.to = await l.getTokenAccount(b.to.address, D.address);
        } else b.to = await l.getTokenAccount(b.to.address, h.address);
      }
      if (b.to.chain === "Sei" && b.protocol === "TokenBridge") {
        if (b.to.chain === "Sei" && b.payload) throw new Error("Arbitrary payloads unsupported for Sei");
        b.payload = ki.encode(JSON.stringify({
          basic_recipient: {
            recipient: Ve.encode(b.to.address.toString())
          }
        }));
        const h = l.config.contracts.translator;
        if (h === void 0 || h === "") throw new Error("Unexpected empty translator address");
        b.to = Z.chainAddress(b.to.chain, h);
      }
      return b;
    }
    e.destinationOverrides = S;
  })(R || (R = {}));
  function Cd(e) {
    if (e.length === 0) return [];
    const { chain: a } = e[0];
    if (!e.every((t) => t.chain === a)) throw new Error("Not every chain is equal");
    return Array.from(new Set(e.map((t) => ae(t)))).map((t) => Z.tokenId(a, t));
  }
  gc = async function(e, a, t) {
    const s = ae(a), i = e.config.tokenMap ? Ge.byAddress(e.config.tokenMap, s) : void 0, r = i ? i.symbol : void 0;
    let n;
    if (V(a.address)) try {
      n = await e.getNativeWrappedTokenId();
    } catch {
    }
    return t = t ?? await e.getDecimals(a.address), {
      id: a,
      decimals: t,
      wrapped: n,
      symbol: r
    };
  };
  hd = class {
    constructor(a, t) {
      __publicField(this, "wh");
      __publicField(this, "routeConstructors");
      __publicField(this, "inputTokenList");
      this.wh = a, this.routeConstructors = t;
    }
    async supportedDestinationTokens(a, t, s) {
      const [, i] = jr(t.network, t.chain, a), r = await Promise.all(this.routeConstructors.map(async (n) => {
        if (!n.supportedNetworks().includes(t.network)) return [];
        const f = n.supportedChains(t.network);
        if (!f.includes(t.chain) || !f.includes(s.chain)) return [];
        try {
          return await n.supportedDestinationTokens(i, t, s);
        } catch {
          return [];
        }
      }));
      return Cd(r.flat());
    }
    async findRoutes(a) {
      return (await Promise.all(this.routeConstructors.map(async (s) => {
        try {
          const i = s.supportedNetworks().includes(this.wh.network) && s.supportedChains(this.wh.network).includes(a.toChain.chain) && s.supportedChains(this.wh.network).includes(a.fromChain.chain), r = ae(V(a.destination.id.address) ? a.destination.wrapped : a.destination.id), n = (await s.supportedDestinationTokens(a.source.id, a.fromChain, a.toChain)).filter((o) => ae(o) === r).length > 0;
          return i && n;
        } catch {
          return false;
        }
      })).then((s) => this.routeConstructors.filter((i, r) => s[r]))).map((s) => new s(this.wh));
    }
  };
  Z = class {
    constructor(a, t, s) {
      __publicField(this, "_network");
      __publicField(this, "_platforms");
      __publicField(this, "_chains");
      __publicField(this, "config");
      this._network = a, this.config = od(a, s), this._chains = /* @__PURE__ */ new Map(), this._platforms = /* @__PURE__ */ new Map();
      for (const i of t) this._platforms.set(i._platform, new i(a, this.config.chains));
    }
    get network() {
      return this._network;
    }
    async circleTransfer(a, t, s, i, r, n) {
      if (i && r) throw new Error("Payload with automatic delivery is not supported");
      if (!be(this.network, t.chain) || !be(this.network, s.chain) || !La(this.network, t.chain) || !La(this.network, s.chain)) throw new Error(`Network and chain not supported: ${this.network} ${t.chain} `);
      if (i) {
        const u = await (await this.getChain(t.chain).getAutomaticCircleBridge()).getRelayerFee(s.chain) + (n || 0n);
        if (a < u) throw new Error(`Amount must be > ${u} (relayerFee + nativeGas)`);
      }
      return await L.from(this, {
        amount: a,
        from: t,
        to: s,
        automatic: i,
        payload: r,
        nativeGas: n
      });
    }
    async tokenTransfer(a, t, s, i, r, n) {
      switch (r) {
        case "TokenBridge":
          return await R.from(this, {
            token: a,
            amount: t,
            from: s,
            to: i,
            protocol: r,
            payload: n
          });
        case "ExecutorTokenBridge":
          return await R.from(this, {
            token: a,
            amount: t,
            from: s,
            to: i,
            protocol: r
          });
        default:
          throw new Error(`Protocol ${r} is not supported`);
      }
    }
    resolver(a) {
      return new hd(this, a);
    }
    getContracts(a) {
      var _a2;
      return (_a2 = this.config.chains[a]) == null ? void 0 : _a2.contracts;
    }
    getPlatform(a) {
      const t = this._platforms.get(a);
      if (!t) throw new Error(`Not able to retrieve platform ${a}. Did it get registered in the constructor?`);
      return t;
    }
    getChain(a) {
      const t = we(a);
      return this._chains.has(a) || this._chains.set(a, this.getPlatform(t).getChain(a)), this._chains.get(a);
    }
    async getWrappedAsset(a, t) {
      const i = await this.getChain(a).getTokenBridge();
      return {
        chain: a,
        address: await i.getWrappedAsset(t)
      };
    }
    async getOriginalAsset(a) {
      return await (await this.getChain(a.chain).getTokenBridge()).getOriginalAsset(a.address);
    }
    async getTokenUniversalAddress(a, t) {
      return await (await this.getChain(a).getTokenBridge()).getTokenUniversalAddress(t);
    }
    async getTokenNativeAddress(a, t, s) {
      return await (await this.getChain(a).getTokenBridge()).getTokenNativeAddress(t, s);
    }
    async getDecimals(a, t) {
      return await this.getChain(a).getDecimals(t);
    }
    async getBalance(a, t, s) {
      return this.getChain(a).getBalance(s, t);
    }
    async getTokenAccount(a, t) {
      return this.getChain(a.chain).getTokenAccount(a.address, t.address);
    }
    async getVaaBytes(a, t = ne) {
      return await At(this.config.api, a, t);
    }
    async getVaa(a, t, s = ne) {
      return typeof a == "string" ? await Qa(this.config.api, a, t, s) : await fi(this.config.api, a, t, s);
    }
    async getIsVaaEnqueued(a) {
      return await pi(this.config.api, a);
    }
    async getCircleAttestation(a, t = ne) {
      return ni(this.config.circleAPI, a, t);
    }
    async getTransactionStatus(a, t = ne) {
      let s;
      if (typeof a == "string") {
        const i = await Qa(this.config.api, a, "Uint8Array", t);
        if (!i) return null;
        s = {
          emitter: i.emitterAddress,
          chain: i.emitterChain,
          sequence: i.sequence
        };
      } else s = a;
      return await bi(this.config.api, s, t);
    }
    async getExecutorCapabilities() {
      return await Pi(this.config.executorAPI);
    }
    async getExecutorQuote(a, t, s) {
      return await Ri(this.config.executorAPI, a, t, s);
    }
    async getExecutorTxStatus(a, t) {
      return await Mi(this.config.executorAPI, a, t);
    }
    async getTransactionsForAddress(a, t = 50, s = 0) {
      return Ai(this.config.api, a, t, s);
    }
    static parseAddress(a, t) {
      return Se(a, t);
    }
    static canonicalAddress(a) {
      return ae(a);
    }
    static chainAddress(a, t) {
      return {
        chain: a,
        address: Z.parseAddress(a, t)
      };
    }
    static tokenId(a, t) {
      return V(t) ? Ka(a) : this.chainAddress(a, t);
    }
    static async parseMessageFromTx(a, t, s = ne) {
      const r = await ye(async () => {
        try {
          const n = await a.parseTransaction(t);
          return n.length === 0 ? null : n;
        } catch (n) {
          return console.error(n), null;
        }
      }, a.config.blockTime, s, "WormholeCore:ParseMessageFromTransaction");
      if (!r) throw new Error(`No WormholeMessageId found for ${t}`);
      return r;
    }
  };
});
export {
  Rd as $,
  Br as A,
  jr as B,
  Ge as C,
  ca as D,
  la as E,
  et as F,
  ci as G,
  Aa as H,
  gr as I,
  Le as J,
  Id as K,
  md as L,
  L as M,
  za as N,
  it as O,
  ia as P,
  hd as Q,
  di as R,
  uc as S,
  x as T,
  Dc as U,
  si as V,
  Z as W,
  Ld as X,
  mc as Y,
  ne as Z,
  bc as _,
  __tla,
  rt as a,
  Nd as a0,
  $t as a1,
  gd as a2,
  fc as a3,
  od as a4,
  Sa as a5,
  wd as a6,
  Wd as a7,
  Rr as a8,
  xd as a9,
  Td as aA,
  Ka as aB,
  nd as aC,
  Pr as aD,
  kd as aE,
  Sd as aF,
  Ec as aG,
  Yt as aH,
  Pd as aI,
  Bd as aJ,
  Hd as aK,
  Jt as aL,
  ar as aM,
  ss as aN,
  Na as aO,
  vd as aa,
  Fd as ab,
  yd as ac,
  _r as ad,
  ji as ae,
  Bs as af,
  Od as ag,
  Ud as ah,
  ma as ai,
  hc as aj,
  _i as ak,
  Vr as al,
  xs as am,
  Fs as an,
  zr as ao,
  zd as ap,
  zt as aq,
  _d as ar,
  Cc as as,
  Vt as at,
  nt as au,
  qr as av,
  ys as aw,
  Md as ax,
  kr as ay,
  yt as az,
  Fe as b,
  V as c,
  cd as d,
  he as e,
  ld as f,
  qd as g,
  gc as h,
  Kr as i,
  Ja as j,
  pc as k,
  Ne as l,
  li as m,
  pr as n,
  R as o,
  ta as p,
  ae as q,
  ye as r,
  Ea as s,
  jd as t,
  Ia as u,
  ee as v,
  bd as w,
  Da as x,
  Ac as y,
  Cr as z
};
