import { GraphNodePlugin } from ".";

import { PluginModule } from "@dorgjelli-test/core-js";

export const query = (graphnode: GraphNodePlugin): PluginModule => ({
  querySubgraph: async (input: { subgraphId: string; query: string }) => {
    return await graphnode.query(input.subgraphId, input.query);
  },
});
