import { config as defaultConfig } from "@gluestack-ui/config";
import { FontResolver } from "@gluestack-ui/themed";

export const config = {
  ...defaultConfig,
  tokens: {
    ...defaultConfig.tokens,
    fonts: {
      body: "Almarai",
      heading: "Almarai",
      mono: "Almarai",
    },
  },
  plugins: [...defaultConfig.plugins, new FontResolver()],
};

type ConfigType = typeof config;

declare module "@gluestack-ui/config" {
  interface IConfig extends ConfigType {}
}
