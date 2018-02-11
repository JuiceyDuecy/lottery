//require('./contracts/Inbox.sol'); //bad!! NodeJS can't read solidity, dummy!
//code for nodeJS
const path = require('path');//makes sure we always generate a valid file
const fs = require('fs');//nodeJS file system...?
const solc = require('solc');//npm package


const lotteryPath = path.resolve(__dirname, 'contracts', 'Lottery.sol');
const source = fs.readFileSync(lotteryPath, 'utf8');

module.exports = solc.compile(source, 1).contracts[':Lottery'];
