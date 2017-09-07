const Pdf = require ('./documents/Pdf');
const Ascii = require ('./documents/Ascii');

const pdf1 = new Pdf('design_patterns');
console.log(pdf1.getFilename());

const pdf2 = pdf1.clone();
console.log(pdf2.getFilename());

const pdf3 = pdf1.clone();
console.log(pdf3.getFilename());

const pdf4 = pdf1.clone();
console.log(pdf4.getFilename());
