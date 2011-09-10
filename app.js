var express = require('express')
var app = express.createServer();
var fs = require('fs');

app.configure('development', function() {
  app.use('/javascript', express.static(__dirname + '/javascript'));
  app.use('/css', express.static(__dirname + '/css'));

  app.set('views', __dirname + '/views');
  app.register('.html', {
    compile: function(str, options){
      return function(locals){
        return str;
      };
    }
  });

  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.get('/', function(req, res){
  res.render('index.html');
});

app.get('/load_file', function(req, res) {
  console.log("Opening file: "+req.query['path']);

  fs.readFile(req.query['path'], 'utf-8', function(err, text) {
    console.log(text);
    res.send(text);
  });
});

app.listen(3000);
