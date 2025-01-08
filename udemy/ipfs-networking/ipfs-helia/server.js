const express = require('express');
const multer = require('multer');
const app = express();
const upload = multer({dest:'./upload/'}); // first endpoint
app.use(express.json()); // second endpoint

let haskMap = new Map();

async function createNode() {
    const {createHelia} = await import('helia');
    const {unixfs} = await import('@helia/unixfs');
    const helia = await createHelia();
    const fs = unixfs(helia);
    return fs
}

app.post('/upload', upload.single('recfile'), async (req,res) => {
    const fs = await createNode();
    const data = req.file.buffer;
    const cid = await fs.addBytes(data);
    haskMap.set(req.file.originalname, cid)

    res.status(201).send('Your file has been uploaded')
})

app.get('fetch', async (req, res) => {
    const fs = await createNode();
    const filename = req.body.filename;
    const cid = haskMap(filename);

    if (!cid) {
        res.status(404).send('we could not find the file')
    }

    let text;
    const decoder = new TextDecoder()

    for await(const chunks of fs.cat(cid)) {
        text = decoder.decode(chunks, {stream: true})
    }

    res.status(200).send(text)
})

app.listen(3000, ()=>{
    console.log('I am listening ...');
})