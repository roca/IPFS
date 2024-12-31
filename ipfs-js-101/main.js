const ipfs = require('ipfs');
console.log('Imported IPFS');
const node = new ipfs();
console.log('Starting server');

node.on('ready', async () => {
    console.log('Server started');
    const version = await node.version
    console.log('IPFS Version: ' + version);
});