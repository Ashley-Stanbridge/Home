var exphbs = require('express-handlebars')

exports = module.exports =  (app) => {

  app.get('/', function (req, res) {
  res.render('home')
})

  app.get('/portfolio', (req, res) => {
    res.render('portfolio');
  })

  app.get('/projects', (req, res) => {
    res.render('projects');
  })

  app.get('/gallery', (req, res) => {
   res.render('gallery');
  })
}