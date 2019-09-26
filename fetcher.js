const request = require('request');
const http = require('http');
const fs = require('fs');

const args = process.argv;
// Remove first two array elements
args.splice(0, 2);

const url = args[0];
const saveLocation = args[1];
const url1 = "https://example.com"

console.log(args[0]);

const download = function(url, saveLocation) {
  request.get(url, (error, response, body) => {
    if (error) {
      return console.log(error);
    }
    fs.writeFile(saveLocation, body, (error) => {
     if (error) {
       return console.log(error);
     }
     console.log(`Downloaded and saved bytes to `); 
    });
  });
};

download(url)

