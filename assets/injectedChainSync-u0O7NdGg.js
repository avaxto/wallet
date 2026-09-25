import { g as d, u as f, a as h, b as m, I as u, c as w, __tla as __tla_0 } from "./index-BFFSktej.js";
import "./vendor-SbyuBW_8.js";
import "./crypto-BGdJyCGl.js";
let y, k;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const I = {
    43114: 1,
    43113: 5
  };
  k = function(e, t) {
    const o = {}, i = I[e];
    i !== void 0 && t.avalancheInjected && (o.avalancheNetworkId = i);
    const a = d(e);
    if (a && t.evmInjected) {
      o.evmNetwork = a;
      const n = t.activePlatformId === "avalanche" && t.avalancheInjected;
      i === void 0 && n && (o.activate = "evm");
    }
    return o;
  };
  function N(e) {
    if (typeof e == "number") return e;
    if (typeof e == "string") {
      const t = e.startsWith("0x") ? parseInt(e, 16) : parseInt(e, 10);
      return Number.isFinite(t) ? t : null;
    }
    return null;
  }
  async function C(e) {
    var _a, _b;
    const t = N(e);
    if (t === null) return;
    const o = f(), i = h(), a = m(), n = k(t, {
      avalancheInjected: ((_a = o.avalancheWallet) == null ? void 0 : _a.type) === "injected",
      evmInjected: i.wallet instanceof u,
      activePlatformId: a.activePlatformId
    });
    try {
      if (n.avalancheNetworkId !== void 0) {
        const c = w();
        if (((_b = c.selectedNetwork) == null ? void 0 : _b.networkId) !== n.avalancheNetworkId) {
          const r = c.networks.find((v) => v.networkId === n.avalancheNetworkId);
          r && await c.setNetwork(r);
        }
      }
      n.evmNetwork && i.followExtensionChain(n.evmNetwork), n.activate && n.activate !== a.activePlatformId && !a.isDestructiveSwitch(n.activate) && await a.setActivePlatform(n.activate);
    } catch (c) {
      console.warn("[injectedChainSync] Could not follow the extension chain:", c);
    }
  }
  let s = Promise.resolve();
  function p(e) {
    s = s.then(() => C(e));
  }
  const l = /* @__PURE__ */ new WeakSet();
  y = function() {
    const e = window;
    for (const t of [
      e.ethereum,
      e.avalanche
    ]) !(t == null ? void 0 : t.on) || l.has(t) || (t.on("chainChanged", p), l.add(t));
  };
});
export {
  __tla,
  y as attachInjectedChainSync,
  k as routeChainChange
};
