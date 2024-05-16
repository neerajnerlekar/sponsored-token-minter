import * as chains from "viem/chains";

export type ScaffoldConfig = {
  targetNetworks: readonly chains.Chain[];
  pollingInterval: number;
};

const scaffoldConfig = {
  // The networks on which your DApp is live
  targetNetworks: [chains.arbitrumSepolia],

  // The interval at which your front-end polls the RPC servers for new data
  // it has no effect if you only target the local network (default is 4000)
  pollingInterval: 30000,
} as const satisfies ScaffoldConfig;

export default scaffoldConfig;
