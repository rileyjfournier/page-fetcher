const request = require('request');
const fs = require('fs');
const args = process.argv.slice(2);

request(args[0], (error, response, body) => {
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);
  console.log('body:', body);
  const fileSize = Buffer.byteLength(JSON.stringify(body));
  fs.writeFile(args[1], body, function(err) {
    if (err) throw err;
    console.log(`Downloaded and saved ${fileSize} bytes to ${args[1]}`)
  })
});