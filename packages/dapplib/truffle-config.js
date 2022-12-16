require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good entire sugar tooth film ring remind hospital give clog tackle spirit'; 
let testAccounts = [
"0x7e51a9802a7d174f0c318a957c7234cc483594981e8dbabc802e0768ec70ed04",
"0xa6e04b4170f09d79c1ae6dec174393470cadb3d679619303d362b4db62d52500",
"0xbe3c66d0a1c967fda5a5ab80457722ce878cfce2a5d7d44f28d655e69a8dec8a",
"0xf93eb3bebd4d496e04eb7699e42a3885f07bbcb4aeebacbb2af979ab4c86632c",
"0x720331543aace4e7543e1648719fc6e5cfee5e2011bfd6df5941c94948985a96",
"0xacb48117b211e06fb85effa8cca99f714467a215b4fc3dd30304d39b8b3da713",
"0x90a3ca6bd6ee30cedced28ef3a8e0875f902a7a04cc5d0178ab4510f769af53b",
"0xad6bb85048e000a32b8ccbf408d9a1a805a5a0b6faeec7aa49ac8acdd134c7cc",
"0x68546de9440ac7547151e3cf257d3cea2148dd7d1383aafa6acd70db5a68894e",
"0xb803b2f99e8433cb838f89249133de8c9149c5b5db586a970d82435ec4718ed8"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

