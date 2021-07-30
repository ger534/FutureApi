var express = require('express');
var router = express.Router();

//for reading files
const fs = require('fs')
const path = require('path');

//to write pdf
const pdf = require('html-pdf');

/* returns chapter requested in body  */
router.post('/chapter', (req, res) => {

    const chapter = req.body.chapter
    //Output the book to console for debugging
    console.log("Sending chapter " + chapter + "...");

    //read txt
    const textPath = path.join(__dirname, '..', 'texts', chapter + '.html');
    const data = fs.readFileSync(textPath, 'utf8')

    res.send(data);

})

router.post('/download', async function (req, res) {

    const chapter = req.body.chapter

    if (chapter === "tecnotopia") {

        //Output the book to console for debugging
        console.log("Downloading tecnotopia...");

        //creates empty pdf to write later
        let pdfPath = path.join(__dirname, '..', 'pdfs', 'tecno_topia.pdf');
        fs.closeSync(fs.openSync(pdfPath, 'w'))

        //read txt
        //TODO: improve this
        const textPath1 = path.join(__dirname, '..', 'texts', '0-terms_and_conditions.html');
        const data1 = fs.readFileSync(textPath1, 'utf8')

        const textPath2 = path.join(__dirname, '..', 'texts', '1-hello_world.html');
        const data2 = fs.readFileSync(textPath2, 'utf8')
        
        //write pdf 
        pdf.create(data1+'\n'+data2).toFile(pdfPath, function (err, response) {
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
    } else {

        //Output the book to console for debugging
        console.log("Downloading chapter " + chapter + "...");

        //creates empty pdf to write later
        let pdfPath = path.join(__dirname, '..', 'pdfs', chapter + '.pdf');
        fs.closeSync(fs.openSync(pdfPath, 'w'))

        //read txt
        const textPath = path.join(__dirname, '..', 'texts', chapter + '.html');
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
    }

});

module.exports = router;