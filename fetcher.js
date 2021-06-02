let args = process.argv;
let parameters = args.slice(2);
const request = require('request');
const fs = require('fs');
request(parameters[0], (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  const content = body;
  fs.writeFile(parameters[1], content, err => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(`Downloaded and saved ${content.length} bytes to ${parameters[1]}`);
  })
});