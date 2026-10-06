var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { b as w, __tla as __tla_0 } from "./api-CHskt6zk.js";
let $;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function u(l) {
    try {
      if (!l) return null;
      const e = l.trim();
      return e === "0x" ? 0n : w.decode(e);
    } catch {
      return null;
    }
  }
  const d = {
    Mainnet: {
      Ethereum: "eth-mainnet",
      Base: "base-mainnet",
      Arbitrum: "arb-mainnet",
      Optimism: "opt-mainnet",
      Polygon: "polygon-mainnet",
      Worldchain: "worldchain-mainnet",
      Ink: "ink-mainnet",
      Unichain: "unichain-mainnet",
      Berachain: "berachain-mainnet",
      Celo: "celo-mainnet",
      Linea: "linea-mainnet"
    },
    Testnet: {
      Ethereum: "eth-sepolia",
      Base: "base-sepolia",
      Arbitrum: "arb-sepolia",
      Optimism: "opt-sepolia",
      Polygon: "polygon-amoy",
      Worldchain: "worldchain-sepolia",
      Ink: "ink-sepolia",
      Unichain: "unichain-sepolia",
      Berachain: "berachain-bartio",
      Monad: "monad-testnet"
    },
    Devnet: {}
  }, y = 1, f = 2;
  class A {
    constructor(e) {
      __publicField(this, "key");
      __publicField(this, "customUrl");
      if (!e.key && !e.url) throw new Error("AlchemyClient requires either an API key or a custom URL");
      this.key = e.key, this.customUrl = e.url;
    }
    supportsChain(e, t) {
      return d[e][t] !== void 0;
    }
    async batchFetchFromAlchemy(e, t, n) {
      const i = this.customUrl ? `${this.customUrl}/${e}` : `https://${e}.g.alchemy.com/v2/${this.key}`, a = await fetch(i, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(t.map((s) => ({
          jsonrpc: "2.0",
          id: s.id,
          method: s.method,
          params: s.params
        }))),
        signal: n
      });
      if (!a.ok) throw new Error(`Alchemy API request failed with status ${a.status}`);
      return await a.json();
    }
    parseEthTokenResponse(e, t) {
      for (let n of e) {
        const i = u(n.tokenBalance || n.balance);
        i !== null && (t[n.contractAddress] = i);
      }
    }
    parseEthNativeResponse(e, t) {
      const n = u(e);
      n !== null && (t.native = n);
    }
    async getBalances(e, t, n, i) {
      var _a;
      const a = d[e][t];
      if (!a) throw new Error("Chain not supported by Alchemy indexer");
      const r = await this.batchFetchFromAlchemy(a, [
        {
          method: "alchemy_getTokenBalances",
          params: [
            n,
            "erc20"
          ],
          id: y
        },
        {
          method: "eth_getBalance",
          params: [
            n,
            "latest"
          ],
          id: f
        }
      ], i), s = {};
      for (const o of r) o && (o.id === y && ((_a = o.result) == null ? void 0 : _a.tokenBalances) ? this.parseEthTokenResponse(o.result.tokenBalances, s) : o.id === f && o.result && this.parseEthNativeResponse(o.result, s));
      return s;
    }
  }
  const b = {
    Mainnet: {
      Ethereum: "eth-mainnet",
      Polygon: "matic-mainnet",
      Bsc: "bsc-mainnet",
      Optimism: "optimism-mainnet",
      Base: "base-mainnet",
      Worldchain: "world-mainnet",
      Sei: "sei-mainnet",
      Ink: "ink-mainnet",
      Solana: "solana-mainnet",
      Arbitrum: "arbitrum-mainnet",
      Berachain: "berachain-mainnet",
      Linea: "linea-mainnet",
      Seievm: "sei-mainnet",
      Unichain: "unichain-mainnet",
      HyperEVM: "hyperevm-mainnet",
      Moonbeam: "moonbeam-mainnet",
      Celo: "celo-mainnet"
    },
    Testnet: {
      Ethereum: "eth-sepolia",
      Polygon: "polygon-amoy-testnet",
      Bsc: "bsc-testnet",
      Optimism: "optimism-sepolia",
      Base: "base-sepolia-testnet",
      Worldchain: "world-sepolia-testnet",
      Unichain: "unichain-sepolia-testnet",
      Berachain: "berachain-testnet",
      Ink: "ink-sepolia-testnet",
      Arbitrum: "arbitrum-sepolia",
      Linea: "linea-sepolia-testnet",
      MonadTestnet: "monad-testnet"
    },
    Devnet: {}
  };
  class C {
    constructor(e) {
      __publicField(this, "key");
      __publicField(this, "customUrl");
      if (!e.key && !e.url) throw new Error("GoldRushClient requires either an API key or a custom URL");
      this.key = e.key, this.customUrl = e.url;
    }
    supportsChain(e, t) {
      return b[e][t] !== void 0;
    }
    async getBalances(e, t, n, i) {
      const a = b[e][t];
      if (!a) throw new Error("Chain not supported by GoldRush indexer");
      const r = this.customUrl ? `${this.customUrl}/v1/${a}/address/${n}/balances_v2/` : `https://api.covalenthq.com/v1/${a}/address/${n}/balances_v2/?key=${this.key}`, s = await fetch(r, {
        signal: i
      });
      if (!s.ok) throw new Error(`GoldRush API request failed with status ${s.status}`);
      const { data: o } = await s.json(), c = {};
      for (let h of o.items) {
        const m = h.contract_address.toLowerCase(), k = m === "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee" || m === "11111111111111111111111111111111" ? "native" : m, p = u(h.balance);
        p !== null && (c[k] = p);
      }
      return c;
    }
  }
  const E = 5e3;
  async function g({ client: l, network: e, chain: t, walletAddr: n, name: i, timeoutMs: a = E }) {
    if (!l) return null;
    try {
      if (!l.supportsChain(e, t)) return console.info(`Network=${e} Chain=${t} not supported by ${i} indexer API`), null;
      const r = new AbortController(), s = setTimeout(() => {
        r.abort(new Error(`${i} request timed out after ${a}ms`));
      }, a);
      let o;
      try {
        o = await l.getBalances(e, t, n, r.signal);
      } finally {
        clearTimeout(s);
      }
      return o;
    } catch (r) {
      return console.info(`Error querying ${i} indexer API: ${r}`), null;
    }
  }
  $ = async function(l, e, t, n) {
    if (!n) throw new Error("Can't get balances without an indexer.");
    const { goldRush: i, alchemy: a } = n, r = {
      network: e,
      chain: t,
      walletAddr: l
    }, s = [
      {
        ...r,
        client: (i == null ? void 0 : i.apiKey) || (i == null ? void 0 : i.url) ? new C({
          key: i.apiKey,
          url: i.url
        }) : void 0,
        name: "Gold Rush",
        timeoutMs: i == null ? void 0 : i.timeoutMs
      },
      {
        ...r,
        client: (a == null ? void 0 : a.apiKey) || (a == null ? void 0 : a.url) ? new A({
          key: a.apiKey,
          url: a.url
        }) : void 0,
        name: "Alchemy",
        timeoutMs: a == null ? void 0 : a.timeoutMs
      }
    ];
    for (const o of s) {
      const c = await g(o);
      if (c) return c;
    }
    throw new Error("Failed to get a successful response from indexers");
  };
});
export {
  __tla,
  $ as g
};
