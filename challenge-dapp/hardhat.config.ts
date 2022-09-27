import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
      chainId: 1337
    },
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/f6f161fd1b7843fda3a4c916a7215121",
      accounts: ["cccf89ad07a6f7d574374f18c1a292e6e97b5cb71b84dfcc4a424b8d566eaf13"]
    }
  },
  paths: {
    artifacts: "./src/artifacts"
  }

};

export default config;
