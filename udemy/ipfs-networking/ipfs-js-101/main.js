// const ipfs = require('ipfs');
// console.log('Imported IPFS');
// const node = new ipfs();
// console.log('Starting server');

// node.on('ready', async () => {
//     console.log('Server started');
//     const version = await node.version
//     console.log('IPFS Version: ' + version);
// });

import { createHeliaHTTP } from '@helia/http'
console.log("Imported IPFS/Helia");

// create a Helia node
const helia = await createHeliaHTTP()
 
async function main() {
    const helia = await ipfs.create();
    console.log ("Starting server");
    console.log("Server started");
    const version = await helia.version();
    console.log(version.version);
}
 
main();