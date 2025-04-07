const fs = require('fs');
const path = require('path');

// File paths
const inputFile = path.join(__dirname, 'input.txt');
const outputFile = path.join(__dirname, 'output.txt');

// --------------------------------------------------------
// 1. Read File (Async with Callback)
// --------------------------------------------------------
function readFile(callback) {
  fs.readFile(inputFile, 'utf8', (err, data) => {
    if (err) {
      callback(err, null);
      return;
    }
    console.log('File read successfully.');
    callback(null, data);
  });
}

// --------------------------------------------------------
// 2. Process Data (Convert to Uppercase)
// --------------------------------------------------------
function processData(data, callback) {
  if (!data) {
    callback(new Error('No data to process.'), null);
    return;
  }
  const processedData = data.toUpperCase();
  console.log('Data processed.');
  callback(null, processedData);
}

// --------------------------------------------------------
// 3. Write File (Async with Callback)
// --------------------------------------------------------
function writeFile(data, callback) {
  fs.writeFile(outputFile, data, 'utf8', (err) => {
    if (err) {
      callback(err);
      return;
    }
    console.log('File written successfully.');
    callback(null);
  });
}

// --------------------------------------------------------
// Execute the Callback Chain
// --------------------------------------------------------
readFile((err, data) => {
  if (err) {
    console.error('Error reading file:', err.message);
    return;
  }

  processData(data, (err, processedData) => {
    if (err) {
      console.error('Error processing data:', err.message);
      return;
    }

    writeFile(processedData, (err) => {
      if (err) {
        console.error('Error writing file:', err.message);
        return;
      }
      console.log('Pipeline completed successfully!');
    });
  });
});