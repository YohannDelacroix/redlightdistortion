const fs = require("fs");
const { builtinModules } = require("module");
const path = require("path");
const pressKitPath = path.join('..', 'files', 'pressKit.pdf');
const PDFGenerator = require('pdfkit');


const getPressKit = (req,res) => {
    let pressKit = fs.readFileSync("./files/pressKit.pdf");
    if(pressKit) {
        console.log("Y, ", __dirname)
        return res.status(200).sendFile(path.join(__dirname, "..", "files", "pressKit.pdf"));
    }
    else return res.status(404);
}

const postPressKit = (req,res) => {
    let pressKit = req.file;

    if(pressKit) {
        console.log(pressKit);

        //fs.writeFileSync(path.join(__dirname, "..", "files", "test.pdf"), pressKit.path);

        return res.status(201).json({"message": "Press Kit saved"});
    }
    else return res.status(500);
}

module.exports = {getPressKit, postPressKit}