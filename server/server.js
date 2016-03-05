
var exphbs = require('express-handlebars')
var express = require('express')
var routes = require('./routes.js')
var path = require('path')

var app = express()

app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')


app.set('port', 3000)
app.use(express.static(path.join(__dirname, 'client')))

var server = app.listen(app.get('port'), function () {
  var port = server.address().port
    console.log('Active At : ' + port)

    routes(app)
})
