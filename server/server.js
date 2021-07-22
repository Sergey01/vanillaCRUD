const path = require('path');

const express = require('express');
const app = express();

const PORT = 8080;

app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../site/index.html'))
});

app.get('main.js', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../site/main.js'))
});

app.get('styles.css', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../site/styles.css'))
});

