const markdownpdf = require("markdown-pdf");
const path = require("path");
const fs = require("fs");

const split = require("split");
const through = require("through");
const duplexer = require("duplexer");


const INDEX = "index.md";
const TOC = "tableofcontents.md";
const OVERVIEW = "overview.md";
const ABOUT = "aboutUs.md";
const CHAPTERS = "chapters";
const APPENDICES = "appendices";

//ON macOS, this file is created. Must be ignored.
const DSSTORE = ".DS_Store";
//global dictionary to hold the sequence of the files.
var printingOrderDictionary = {};
//determine the OS type. Important for the path of each file.
function getOSSlashType() {
  if (process.platform === 'darwin') {
    return "/";
  } else if (process.platform === 'win32') {
    return "\\";
  }
}
//Required function to convert chapter names with roman numerals to numbers.
function romanToNumber(str) {
  var result = 0;
  var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var roman = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];
  for (var i = 0; i < decimal.length; i++) {
    while (str.indexOf(roman[i]) === 0) {
      result += decimal[i];
      str = str.replace(roman[i],'');
    }
  }
  return result;
}
//Order the files. This is crucial to handle how the pages are converted to PDF
function numberFiles(fileName) {
  switch (fileName) {
    case INDEX:
      printingOrderDictionary[1] = INDEX;
      break;
    case TOC:
        printingOrderDictionary[2] = TOC;
        break;
    case OVERVIEW:
      printingOrderDictionary[3] = OVERVIEW;
      break;
    case CHAPTERS:
      printingOrderDictionary[4] = CHAPTERS;
      break;
    case APPENDICES:
      printingOrderDictionary[5] = APPENDICES;
      break;
    case ABOUT:
      printingOrderDictionary[6] = ABOUT;
      break;
    default: break;
  }
}
//populate the printingOrderDictionary to get ordered sequence of files
function setupDocsDirectory() {
  var docs = fs.readdirSync(__dirname);
  docs.forEach(function(eachFile){
    numberFiles(eachFile);
  });
}
//Create a dictionary of number as keys and chapter as values. Correctly ordered.
function getChaptersMap(filePath) {
    var chapters = fs.readdirSync(filePath);
    var chapterMaps = {};
    chapters.forEach(function(chapter){
      chapterMaps[romanToNumber(chapter.replace("chapter",""))] = chapter;
    });
    return chapterMaps;
}
//populate a dictionary where the key is the chapter path and the value is an array of sections for that chapter.
function readAllChapterSections(filePath) {
  var chaptersMap = getChaptersMap(filePath);
  let allChapterSections = {};
  for (var key in chaptersMap) {
    let eachChapterSections = fs.readdirSync(filePath + getOSSlashType() + chaptersMap[key]);
    //the key is the path of the chapter, and the value is an array of sections for that chapter
    allChapterSections[filePath + getOSSlashType() + chaptersMap[key]] = eachChapterSections;
  }
  return allChapterSections;
}
//populate each section path
function getAllSectionPaths(filePath) {
  let allChapterSections = readAllChapterSections(filePath);
  let allPaths = [];
  for (var chapterPath in allChapterSections) {
    //loop through each array of chapter sections
    for (var i = 0; i < allChapterSections[chapterPath].length; i++) {
      if (allChapterSections[chapterPath][i] !== DSSTORE) {
        let path = chapterPath + getOSSlashType() + allChapterSections[chapterPath][i];
        allPaths.push(path);
      }
    }
  }
  return allPaths;
}
//populate each appendix path and return all paths.
function getAllAppendicesPaths(filePath) {
  let paths = [];
  let appendices = fs.readdirSync(filePath);
  for (var i = 0; i < appendices.length; i++) {
    if (appendices[i] !== DSSTORE) {
      let path = filePath + getOSSlashType() + appendices[i];
      paths.push(path);
    }
  }
  return paths;
}

function getAllPaths() {
  var all = [];
  //loop through the ordered dictionary to get each file/folder in order.
  for (var key in printingOrderDictionary) {
    var filePath = path.join(__dirname, printingOrderDictionary[key]);
    var stats = fs.statSync(filePath);
    //array to store all paths in a sequence
    var allPaths = [];
    if (stats.isFile()) {
      allPaths.push(filePath);
    } else if (stats.isDirectory()) {
      //Handle Chapters and Appendices directory.
      if (printingOrderDictionary[key] === CHAPTERS) {
        //get each section path
        let allSectionPaths = getAllSectionPaths(filePath);
        allPaths = allPaths.concat(allSectionPaths);
      } else if (printingOrderDictionary[key] === APPENDICES) {
        //get each appendix path
        let appendicesPath = getAllAppendicesPaths(filePath);
        allPaths = allPaths.concat(appendicesPath);
      }
    }
    all = all.concat(allPaths);
  }
  return all;
}

//setup the ordered directory files.
setupDocsDirectory();
//get all paths of every single file in the docs folder.
let mdDocs = getAllPaths();
let pdfDoc = "upg.pdf";

//console.log(mdDocs);


function preProcessMd() {
  // Split the input stream by lines
  var splitter = split()

  var replacer = through(function (data) {
    let pattern = /(\/img\/)|(..\/..\/..\/img)/;
    this.queue(data.replace(pattern, "img/") + "\n");
  });

  splitter.pipe(replacer)
  return duplexer(splitter, replacer)
}

var options = {
  cssPath: "css/pdf.css",
//  paperFormat: 'A4',
  remarkable: {
        html: true,
        breaks: true,
        plugins: [ require('remarkable-classy') ],
        syntax: [ 'footnote', 'sup', 'sub' ]
    },
  preProcessMd: preProcessMd,
  runningsPath: "pageFooter.js"
}

markdownpdf(options).concat.from(mdDocs).to(pdfDoc, function () {
  console.log("Created", pdfDoc)
});
