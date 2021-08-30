const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraKey = "a44a343c088c440f8da1a7cbe66e15a4";
//
//const fs = require('fs');
//const mnemonic = fs.readFileSync(".secret").toString().trim();
mnemonic = "foam spread remember online slow cactus quarter wealth oxygen kitchen coconut uniform"

module.exports = {
  networks: {
    // development: {
    //   host: "127.0.0.1",
    //   port: 7545,
    //   network_id: "*" // Match any network id
    // },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
      network_id: 4,       // rinkeby's id
      gas: 4500000,        // rinkeby has a lower block limit than mainnet
      gasPrice: 10000000000
  }
  },

  compilers: {
    solc: {
      version: "0.4.24"  // ex:  "0.4.20". (Default: Truffle's installed solc)
    }
  }

};