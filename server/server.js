const path = require('path');

const compression = require('compression');
const express = require('express');
const app = express();

app.use(compression());
app.use(express.urlencoded({extended:false}));

const PORT = 8080;

app.get('/', (req, res) => {
    res.status(200)
    .sendFile(path.join(__dirname, '../site/index.html'), {}, (err) => {if (err) return next(err)})
});

app.get('/login', (req, res) => {
  res.status(200)
  .sendFile(path.join(__dirname, '../site/login.html'), {}, (err) => {if (err) return next(err)})
});

app.post('/login', (req, res) => {
  res.status(200)
  .json(req.body)
});

app.get('/signup', (req, res) => {
  res.status(200)
  .sendFile(path.join(__dirname, '../site/signup.html'), {}, (err) => {if (err) return next(err)})
});

app.post('/signup', (req, res) => {
  res.status(200)
  .json(req.body)
});

app.get('/main.js', (req, res) => {
  res.status(200)
  .sendFile(path.join(__dirname, '../site/main.js'), {}, (err)=> {if (err) return next(err)})
});

app.get('/styles.css', (req, res) => {
  res.status(200)
  .sendFile(path.join(__dirname, '../site/styles.css'), {}, (err)=> {if (err) return next(err)})
});


app.listen(PORT, ()=>console.log(`Listening on port: ${PORT}`));
