require('rootpath')();
const express = require('express');
const debug=require('debug')('index');
const morgan=require('morgan');
const path=require('path');
const app = express();
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;

const cors = require('cors');
const bodyParser = require('body-parser');
const errorHandler = require('_middleware/error-handler');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,'/static/')));
app.set('views','./src/views');
app.set('view engine','ejs');



app.get('/',(req,res)=>{
  debugger;
  res.render('index',{title:"Welcome to Celsior",heading:"Home Page",states:["Delhi","Haryana","Punjab"]});
});
// api routes
app.use('/users', require('./users/users.controller'));

// global error handler
app.use(errorHandler);

app.get('/a_route_behind_paywall',
  (req, res, next) => {
    if (!req.user.hasPaid) {
      // continue handling this request
      next('route')
    } else {
      next()
    }
  }, (req, res, next) => {
    PaidContent.find((err, doc) => {
      if (err) return next(err)
      res.json(doc)
    })
  })
app.use(logErrors);
app.use(clientErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
function logErrors (err, req, res, next) {
  var fs = require('fs');
  var logFile = fs.createWriteStream('log.csv', { flags: 'a' });
  logFile.write(new Date().toDateString() + '  ' + new Date().toTimeString()+', ' +err.message + '\n');
  next(err)
}
function clientErrorHandler (err, req, res, next) {
  if (req.xhr ) {
    res.status(500).send({ error: 'Something failed!' })
  } else {
    next(err) 
  }
}
