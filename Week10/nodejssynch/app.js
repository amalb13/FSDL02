const fs = require('fs');
const path = require('path');

const inputFile = path.join(__dirname, 'input.txt');
const outputFile = path.join(__dirname, 'output.txt');

try {
  // 1. Read file synchronously
  const data = fs.readFileSync(inputFile, 'utf8');
  
  // 2. Process data (uppercase)
  const processedData = data.toUpperCase();
  
  // 3. Write to new file synchronously
  fs.writeFileSync(outputFile, processedData);
  console.log('File processed successfully!');
} catch (err) {
  console.error('Error:', err.message);
}