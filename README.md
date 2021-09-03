# Supply chain & data auditing

This repository containts an Ethereum DApp that demonstrates a Supply Chain flow between a Seller and Buyer. The user story is similar to any commonly used supply chain process. A Seller can add items to the inventory system stored in the blockchain. A Buyer can purchase such items from the inventory system. Additionally a Seller can mark an item as Shipped, and similarly a Buyer can mark an item as Received.

The DApp User Interface when running should look like...

![truffle test](images/ftc_product_overview.png)

![truffle test](images/ftc_farm_details.png)

![truffle test](images/ftc_product_details.png)

![truffle test](images/ftc_transaction_history.png)

## Project UML diagram
### Activity
![image](UML/Activity_Diagram.png)

### Class Diagram
![image](UML/Class_Diagram.png)

### Sequence Diagram
![image](UML/Sequence_Diagram.png)

### State Diagram
![image](UML/State_Diagram.png)

## Project Write up
### Libraries used
### IPFS
no IPFS used in this project

### web3.js
Web3.js allows us to interact with the Ethereum blockchain

### truffle-hd-wallet-provider
Allows us to sign transactions for addresses

### Program Versions numbers
Node version 12.0.0, 
Truffle  v4.1.14, 
Solidity 0.4.24
web3 1.2.1

### Migration to Rinkeby Network
![image](images/migrate_rinkeby.png)

### Contract address on the Rinkeby test network (Etherscan):
https://rinkeby.etherscan.io/address/0x28747dd60b5121d816a1a608f49a17e249fb0896

### Transaction Ids:
harvestItem: 0x19b68d037f78f624a18eee2ce1b0429c9a847c92d315dd7ab14e86da69000c64
processItem: 0x8d2eda493ea462dfd84061e162ebbe62582f1cf596c4895bab05ed3a02bb9fc8
packItem: 0x6fe9bdd29b10068975f825662681dd778a48ba9014c1c2f8e40292265f2ce9d5
sellItem: 0x6c77af5d37ced1de59c89e789cb66bb182a825f6442de8abc90a9a94062b7c5b
buyItem: 0x116e7b14af253562c68477fc361ffb6111611963b998106d7b502acd0d1fc0b7
shipItem: 0x1964d7e7ca7ad13824cd736684ba1733573f5d53904f235e80c7c2977e3ba50d
receiveItem: 0xf40908cdfd45bd05440c8a1f74da87d59312ac7ae9c6deb8e7c3b67fbbadddf7
purchaseItem: 0x215072465543d7d871190a91fadee3cc2ac98666d5b9f3d1227aff94ef142d61
## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Please make sure you've already installed ganache-cli, Truffle and enabled MetaMask extension in your browser.

```
Give examples (to be clarified)
```

### Installing

> The starter code is written for **Solidity v0.4.24**. At the time of writing, the current Truffle v5 comes with Solidity v0.5 that requires function *mutability* and *visibility* to be specified (please refer to Solidity [documentation](https://docs.soliditylang.org/en/v0.5.0/050-breaking-changes.html) for more details). To use this starter code, please run `npm i -g truffle@4.1.14` to install Truffle v4 with Solidity v0.4.24. 

A step by step series of examples that tell you have to get a development env running

Clone this repository:

```
git clone https://github.com/udacity/nd1309/tree/master/course-5/project-6
```

Change directory to ```project-6``` folder and install all requisite npm packages (as listed in ```package.json```):

```
cd project-6
npm install
```

Launch Ganache:

```
ganache-cli -m "spirit supply whale amount human item harsh scare congress discover talent hamster"
```

Your terminal should look something like this:

![truffle test](images/ganache-cli.png)

In a separate terminal window, Compile smart contracts:

```
truffle compile
```

Your terminal should look something like this:

![truffle test](images/truffle_compile.png)

This will create the smart contract artifacts in folder ```build\contracts```.

Migrate smart contracts to the locally running blockchain, ganache-cli:

```
truffle migrate
```

Your terminal should look something like this:

![truffle test](images/truffle_migrate.png)

Test smart contracts:

```
truffle test
```

All 10 tests should pass.

![truffle test](images/truffle_test.png)

In a separate terminal window, launch the DApp:

```
npm run dev
```

## Built With

* [Ethereum](https://www.ethereum.org/) - Ethereum is a decentralized platform that runs smart contracts
* [IPFS](https://ipfs.io/) - IPFS is the Distributed Web | A peer-to-peer hypermedia protocol
to make the web faster, safer, and more open.
* [Truffle Framework](http://truffleframework.com/) - Truffle is the most popular development framework for Ethereum with a mission to make your life a whole lot easier.


## Authors

See also the list of [contributors](https://github.com/your/project/contributors.md) who participated in this project.

## Acknowledgments

* Solidity
* Ganache-cli
* Truffle
* IPFS
