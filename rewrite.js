const fs = require('fs');
const crypto = require('crypto');

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function modifyFile(filePath, percentage) {
  fs.readFile(filePath, (err, data) => {
    if (err) throw err;
    let byteArray = Array.from(data);
    const bytesToChange = Math.floor((percentage / 100) * byteArray.length);
    for (let i = 0; i < bytesToChange; i++) {
      const index = getRandomInt(byteArray.length);
      const randomByte = getRandomInt(256);
      byteArray[index] = randomByte;
    }
    const modifiedBuffer = Buffer.from(byteArray);
    fs.writeFile(filePath, modifiedBuffer, (err) => {
      if (err) throw err;
      console.log('The file has been modified.');
    });
  });
}

modifyFile('./image.jpg', 10);
