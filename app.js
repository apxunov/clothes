const fs = require('file-system'); // модуль понадобится для чтения нашего файла searchfor.json
const _ = require('lodash'); // модуль для преобразования ссылок

const request = require('request'); // модуль для добычи контента
const $ = require('cheerio'); // модуль для копания по сайту

const _designersFile = fs.readFileSync('helpers/searchfor.json', 'utf8'); 
const _designersList = (JSON.parse(_designersFile)).designers; 
const _designersURL = (JSON.parse(_designersFile)).stores; 

const designersArray = [];
const URLs = [];

function ShowStores(storesCollection) {
    Object.keys(storesCollection).forEach(function(key) {
        console.log(key, ':', this[key]);
      }, storesCollection);
}
// ShowStores(_designersURL);

function ShowDesigners(designersColletion) {
    designersColletion.forEach(_designer => {
        var d = _designer.replace(/\s/g , "-").toLowerCase();
        designersArray.push(d);
    })
    console.log(`Designers: ${designersArray}`);
}
// ShowDesigners(_designersList);

function ShowURLs(urlCollection, name) {
    const storesArray = [];
    urlCollection.forEach(_url => storesArray.push(_url.name));

    if (storesArray.includes(name)) {
        let storeIndex = storesArray.indexOf(name);
        let storeURL = urlCollection[storeIndex].url;

        console.log(`URL: ${storeURL}`);
        return storeURL;
        
    } else {
        console.log(`${name} not found`)
    }
}
// ShowURLs(_designersURL, 'mrporter')