var express = require('express');
var router = express.Router();

//for reading files
const fs = require('fs')
const path = require('path');

//post endpoint
/* POST Three Zero Five text. */
router.post('/threezerofive', (req, res) => {

    //Output the book to console for debugging
    console.log("Sending Three Zero Five text...");

    //read txt
    const textPath = path.join(__dirname, '..', 'texts', 'threezerofive.txt');
    const data = fs.readFileSync(textPath, 'utf8')

    res.send(data);
})

module.exports = router;