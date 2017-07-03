const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const port = process.env.PORT || 5000
const app = express()

// const nodemailer = require('nodemailer')
// const validator = require('express-validator')

app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')
app.use('/views', express.static(path.join(__dirname, 'views')))
app.use('/assets', express.static(path.join(__dirname, 'assets')))
app.use('/Material_Design_files', express.static(path.join(__dirname, 'Material_Design_files')))
app.use('/fonts', express.static(path.join(__dirname, 'fonts')))
app.use('/font', express.static(path.join(__dirname, 'font')))
app.use('/font/roboto', express.static(path.join(__dirname, 'font/roboto')))
app.use('/mdb-addons', express.static(path.join(__dirname, 'mdb-addons')))
app.use('/js/modules', express.static(path.join(__dirname, 'js/modules')))
app.use('/js', express.static(path.join(__dirname, 'js')))
app.use(bodyParser.urlencoded({
  extended: false
}))

// email -------------------------------------------------------------
/*
app.use(validator())
app.post('/send', function(req, res) {
  req.checkBody("user_email", "Enter a valid email address.").isEmail();
  req.checkBody("user_email", "Enter a valid email address.");
  req.checkBody('textarea1').notEmpty()
  req.checkBody('name').notEmpty()
  let errors = req.validationErrors();
  if (errors) {
    res.send(errors);
    return;
  } else {
    // normal processing here
    res.redirect('/thank-you');
  }
});
*/

// application -------------------------------------------------------------

app.get('/', function (req, res) {
  res.render('index.html')
})

const server = app.listen(port, function()  {
  console.log('Server running at http://0.0.0.0:' + server.address().port)
})
