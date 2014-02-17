var express = require('express');
var app = express();
 
app.get('/', function(req, res) {
    res.sendfile('./public/index.html');
});
 
app.get('/about', function(req, res) {
    res.sendfile('./public/about.html');
});
 
app.get('/article', function(req, res) {
    res.sendfile('./public/article.html');
});
 
app.listen(3000);