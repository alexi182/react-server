var express = require('express');
var app = express();
var React = require('react');
var ReactDOMServer = require('react-dom/server');
// var Component = require('./src/layout/layout');

app.get('/', function (request, response) {      //index page router, request - получаем с сервера, response -отправляем на клиент
   var html = '<h1>Hello, world</h1>';
   response.send(html);  //response -отправляем на клиент
});

var PORT = 3002;
app.listen(PORT, function () {
   console.log('http://localhost:' + PORT);
});