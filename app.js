var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req,res) {
    res.render('default', {
        title: 'Home',
        users: ['Ray', 'Chad', 'Chris']
    });
});

app.get('/me', function(req,res) {
    res.send('@vickartsdesign');
});

app.get('/who/:name?', function(req,res) {
    var name = req.params.name;
    res.send(name + ' was here');
});

app.get('/who/:name?/:title', function(req,res) {
    var name = req.params.name;
    var title = req.params.title;
    res.send('<b>Name:</b> ' + name + '<br>' + '<b>Title:</b> ' + title);
});

app.get('*', function(req,res) {
    res.send('Bad Route');
});

var server = app.listen(3000, function() {
    console.log('listening on port 3000');
});