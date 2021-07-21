const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).sendFile('../site/index.html');
});

app.static('main.js', (req, res) => {
    res.status(200).sendFile('../site/main.js');
});

app.static('styles.css', (req, res) => {
    res.status(200).sendFile('../site/styles.css');
});

app.use( (req, res) => {
    res.status(404).send('Page Not Found');
});

app.listen(3000, ()=> console.log('Listening on 3000'));
