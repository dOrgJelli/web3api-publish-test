import { Ethereum } from "@dorgjelli-test/wasm-ts";

export function setInformation(): string {
  return Ethereum.sendTransaction("0x", "myMethod", "");
}
