const path = require ('path');
const solc = require ('solc');
 
const fs = require ('fs-extra'); // Short for FileSystem. Access to filesystem in our local system

 
const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath); // removeSync looks at buildPath folder & deletes it and everything inside of it 

const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');
const source = fs.readFileSync(campaignPath, 'utf8');
const output = solc.compile(source, 1).contracts; // contains output from 2 contracts

fs.ensureDirSync(buildPath);

 
for(let contract in output) {
    fs.outputJsonSync(
        path.resolve(buildPath, contract.replace(':', '') + '.json'),
        output[contract]
    );
}
 
