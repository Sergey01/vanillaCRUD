const path = require('path');

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../site/index.html'));
});

app.get('/main.js', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../site/main.js'));
});

app.get('/styles.css', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../site/styles.css'));
});

app.use( (req, res, err) => {
    res.status(404).send('Page Not Found');
});

app.listen(3000, ()=> console.log('Listening on 3000'));
