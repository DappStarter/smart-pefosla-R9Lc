require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict help frame tribe strike crawl often unveil hockey another army genuine'; 
let testAccounts = [
"0x92d257f539cd4330f9324fbf8083bc78d866f9270e3a0c919a60392cdb848298",
"0x3702bb7fa2d2c197d8eb59df47b279ab222345fad66b4ceaa9dd49987b062c70",
"0xc777afc3dd157c92bc41e19ce0efc6b071060840575b894168cb7789e9bea79b",
"0xf5641f56d19919b8e0d65c3fbd0250bd5714ff4b7bd8360110dbfe2640d110ab",
"0xc9433fed43abf0f25e740b0fcfbd48ca123fab024dc129872bee1376085195e4",
"0x390cd05cf33addd98797f0dda4778a801d289c8159349bf26f6fd56ee9ea986f",
"0x013974404099625074a81787ebf2ddceb75a13a02353687159dd00aac3a73706",
"0x20db138b6d9f3001f9eb480b5c0d3ae91ff0185750d618383b3e89c5867db3f8",
"0xfd3db0bac7961a689441dfcc97ee9db579e914417e91119cd9a526b1d4bb5343",
"0xd0d7133ae8a23b5d4bfecca34807ca4c2b066cb29fc53527da8c9a8845df2980"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

