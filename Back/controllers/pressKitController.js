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
    let pressKit = req.body;
    if(pressKit) {
        //fs.writeFileSync(path.join(__dirname, "..", "files", "test.pdf"), pressKit, 'binary');

        /**let st = fs.createWriteStream(path.join(__dirname, "..", "files", "test.pdf"))
        fs.writeFileSync()*/

        return res.status(201).json({"message": "ok"});
    }
    else return res.status(500);
}

module.exports = {getPressKit, postPressKit}