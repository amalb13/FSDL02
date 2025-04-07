const fs = require('fs');
const path = require('path');

// 1. Get current time
const now = new Date().toLocaleString();

// 2. Write to file (creates or overwrites "time.txt")
fs.writeFileSync(path.join(__dirname, 'time.txt'), `Current time: ${now}`);

console.log('Time logged! Check time.txt.');