import { Ethereum } from "@dorgjelli-test/wasm-ts";

export function getInformation(): string {
  const res = Ethereum.callView("0x", "function get() view returns (uint256)", "");

  return res;
}
