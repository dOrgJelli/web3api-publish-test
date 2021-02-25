import { UriRedirect, Uri } from "@dorgjelli-test/core-js";
import { IpfsPlugin } from "@dorgjelli-test/ipfs-plugin-js";
import { EthereumPlugin } from "@dorgjelli-test/ethereum-plugin-js";
import { EnsPlugin } from "@dorgjelli-test/ens-plugin-js";

export function getDefaultRedirects(): UriRedirect[] {
  // NOTE: These are high-level primitives for core plugins,
  //       over time, we will further de-abstract these core plugins
  return [
    // IPFS is required for downloading Web3API packages
    {
      from: new Uri("w3://ens/ipfs.web3api.eth"),
      to: {
        factory: () =>
          new IpfsPlugin({
            provider: "https://ipfs.infura.io",
          }),
        manifest: IpfsPlugin.manifest(),
      },
    },
    // ENS is required for resolving domain to IPFS hashes
    {
      from: new Uri("w3://ens/ens.web3api.eth"),
      to: {
        factory: () => new EnsPlugin({}),
        manifest: EnsPlugin.manifest(),
      },
    },
    {
      from: new Uri("w3://ens/ethereum.web3api.eth"),
      to: {
        factory: () =>
          new EthereumPlugin({
            // TODO: move away from centralized gateway
            provider:
              "https://eth-mainnet.gateway.pokt.network/v1/5fc677007c6654002ed13350",
          }),
        manifest: EthereumPlugin.manifest(),
      },
    },
  ];
}
