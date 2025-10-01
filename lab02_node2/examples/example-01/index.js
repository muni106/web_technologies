const express = require('express');
const app = express();

// example 101
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/asw', (req, res) => {
  res.send('asw');
});

// example 102
const data = require('./colors.json');
app.get('/colors', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(data));
  // res.json(data);
});

// example 3
const path = require('path');
app.get('/contacts', (req, res) => {
  res.sendFile(path.join(__dirname, 'contacts.html'));
});

// example 4
app.use(express.static(path.join(__dirname, 'public')));

// example 5
app.get('/sayhello/:name', (req, res) => {
  res.send("Hello " + req.params.name + "! You are " + (req.query.age || 'ageless') + ".");
});

app.get('*thepath', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.status(404);
  res.send("Page not found " + req.params.thepath);
});

app.listen(3000, (port) => {
  console.log('Server is running on http://localhost:3000');
});
