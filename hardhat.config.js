/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 require("@nomiclabs/hardhat-waffle");
 require("dotenv").config();
 require("@nomiclabs/hardhat-etherscan");
 console.log(process.env.ETHEREUM_API_KEY);
 module.exports = {  
   networks:{
     
     ropsten:{
       url:`https://ropsten.infura.io/v3/8bd6fe8d019142a2a7966e03923b419e`,
       accounts:[`a4d92ceea374aef09fc229061c7410333af3e31dcebb78bfb0e063ddad06f64d`],       
     },
   },
   etherscan: {
     apiKey: {
      ropsten: "H9JP2ZQB7P2C7GZR99B5Q3NPMUV25V2GWM"
     }
   },
   
   paths: {
     sources: "./contracts",
     tests: "./test",
     cache: "./cache",
     artifacts: "./artifacts"
   },
   
   solidity: {
         compilers: [
           {
             version: "0.6.6",
             settings: {
               optimizer: {
                 enabled: true,
                 runs: 200,
               },
             },
           },
           {
             version: "0.5.16",
             settings: {
               optimizer: {
                 enabled: true,
                 runs: 200,
               },
             },
           },
         ],   
 }};