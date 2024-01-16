import { config } from "@gluestack-ui/config";

import { FontResolver } from "@gluestack-ui/themed";

export const myConfig = {
  ...config,
  tokens: {
    ...config.tokens,
    fonts: {
      heading: "Almarai",
      body: "Almarai",
      mono: "Almarai",
    },
  },
  plugins: [new FontResolver()],
};
