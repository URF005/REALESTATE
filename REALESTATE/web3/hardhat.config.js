const PRIVATE_KEY = "hdhbhdcb767fbfnjdf893nkdmnd3iddn";
const RPC_URL = "https://rpc.ankr.com/polygon_amoy";
module.exports = {
  defaultNetwork: "polygon",
  networks: {
    hardhat: {
      chainId: 80002,
    },
    polygon: {
      url: RPC_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
