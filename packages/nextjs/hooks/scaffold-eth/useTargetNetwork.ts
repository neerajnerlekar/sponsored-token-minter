import scaffoldConfig from "~~/scaffold.config";
import { ChainWithAttributes } from "~~/utils/scaffold-eth";
import { NETWORKS_EXTRA_DATA } from "~~/utils/scaffold-eth";

/**
 * Retrieves the connected wallet's network from scaffold.config or defaults to the 0th network in the list if the wallet is not connected.
 */
export function useTargetNetwork(): { targetNetwork: ChainWithAttributes } {
  const targetNetwork = scaffoldConfig.targetNetworks[0];

  return {
    targetNetwork: {
      ...targetNetwork,
      ...NETWORKS_EXTRA_DATA[targetNetwork.id],
    },
  };
}
