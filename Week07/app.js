const express = require('express');
const app = express();
const port = 3000;

// Set up EJS as the view engine
app.set('view engine', 'ejs');

// Initialize counter (store it in memory)
let count = 0;

// Route to render the main page and show the counter
app.get('/', (req, res) => {
  res.render('index', { count });
});

// Route to increment the counter
app.get('/increment', (req, res) => {
  count++;
  res.redirect('/');
});

// Route to decrement the counter
app.get('/decrement', (req, res) => {
  count--;
  res.redirect('/');
});

// Route to reset the counter
app.get('/reset', (req, res) => {
  count = 0;
  res.redirect('/');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
