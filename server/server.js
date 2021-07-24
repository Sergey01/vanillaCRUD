require('dotenv').config();

const path = require('path');
const taskRouter = require('./tasksAPI/taskRouter.js')

const compression = require('compression');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const express = require('express');
const app = express();

app.use(compression());
app.use(cookieParser());
app.use(session({session$ecret}))
app.use(express.urlencoded({extended:false}));

const PORT = 8080;

app.get('/', (req, res) => {
    res.status(200)
    .sendFile(path.join(__dirname, '../site/index.html'), {}, (err) => {if (err) return next(err)})
});

app.use('/tasks', taskRouter);

// The route below is for testing. Please remove.
// app.get('/test/:testVar', (req, res, next) => {
//   console.log(`req.params.testVar is ${req.params.testVar}`);
//   const testString = '-APPENDED';
//   console.log(`Appending ${testString} to ${req.params.testVar} and storing the result in req.test123, then calling next().`);
//   console.log(`The next middleware will console.log the req.test123`);
//   req.test123 = req.params.testVar + testString;
//   next();
// }, (req, res) => res.status(200).send(req.test123));

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

app.use(function (req, res, next) {
  res.status(404).sendFile(path.join(__dirname, '../site/404.html'));
})

app.listen(PORT, ()=>console.log(`Listening on port: ${PORT}`));
