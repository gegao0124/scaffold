var express = require('express');
var path = require('path');
var routes = require('./routes');
var app = express();

app.set('port', process.env.PORT || 3000);


app.use(express.static(__dirname + '/public'));
app.use(routes)
app.set('views', path.join(__dirname, 'views'))
app.set("view engine", "html")


app.listen(app.get('port'), function() {
    console.log('server started on port', app.get('port'))
});