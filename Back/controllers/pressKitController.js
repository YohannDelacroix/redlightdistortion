const fs = require("fs");
const { builtinModules } = require("module");
const path = require("path");
const pressKitPath = path.join('..', 'files', 'pressKit.pdf');
const PDFGenerator = require('pdfkit');

//Send the current pressKit to the client
const getPressKit = (req,res) => {
    let pressKit = fs.readFileSync("./files/pressKit.pdf");
    if(pressKit) {
        return res.status(200).sendFile(path.join(__dirname, "..", "files", "pressKit.pdf"));
    }
    else return res.status(404);
}


//Client request for a press Kit update
//The file is saved with Multer (see routes/api/pressKit.js)
const postPressKit = (req,res) => {
    let pressKit = req.file;

    if(pressKit) {
        console.log(pressKit);
        return res.status(201).json({"message": "Press Kit saved"});
    }
    else return res.status(500);
}

module.exports = {getPressKit, postPressKit}