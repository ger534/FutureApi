var express = require('express');
var router = express.Router();

//for reading files
const fs = require('fs')
const path = require('path');

//to write pdf
const pdf = require('html-pdf');

//post endpoint
/* POST Three Zero Five text. */
router.post('/chapter', (req, res) => {
    const chapter = req.body.chapter
    //Output the book to console for debugging
    console.log("Sending chapter "+ chapter + "...");

    //read txt
    const textPath = path.join(__dirname, '..', 'texts', chapter + '.html');
    const data = fs.readFileSync(textPath, 'utf8')

    res.send(data);

})

router.post('/hello_world/download', (req, res, next) => {

    //creates empty pdf to write later
    let pdfPath = path.join(__dirname, '..', 'pdfs', 'hello_world.pdf');
    fs.closeSync(fs.openSync(pdfPath, 'w'))

    //read txt
    const textPath = path.join(__dirname, '..', 'texts', 'hello_world.html');
    const data = fs.readFileSync(textPath, 'utf8')

    //write pdf 
    pdf.create(data).toFile(pdfPath, function (err, response) {
        if (err) {
            console.log(err);
        } else {
            console.log("Creating pdf...");

            const src = fs.createReadStream(pdfPath);

            res.writeHead(200, {
                'Content-Type': 'application/pdf',
                'Content-Disposition': 'attachment; filename=sample.pdf',
                'Content-Transfer-Encoding': 'Binary'
            });

            src.pipe(res);
            console.log("file sent")
        }
    });


});

module.exports = router;