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

function readDir(entry, path) {
  var listing = [];
  var current_path;

  // path will only be undefined upon first entering the loop from ap.get('/load_file...')
  if(typeof(path) !== 'undefined') {
    current_path = path+'/'+entry;
  }
  else
    current_path = entry;

  try {
    // Stat current path.
    var stat = fs.lstatSync(current_path);

    // Check for directory.
    if(stats.isDirectory()) {
      // Incr loop
      var dir = {};
      // Read directory
      var current_directory = fs.readdirSync(current_path)
      dir[entry] = [];

      // Loop over directory listing
      for(var i = 0; i <= current_directory.length; i++) {
        var file_name = current_directory[i];

        // Make sure it's not null and it's not a hidden folder or file.
        if(typeof(file_name) !== 'undefined' && file_name[0] !== '.') {
          dir[entry].push(readDir(file_name, current_path));
        }
      }

      return dir;
    } else {
      return entry;
    }
  } catch(e) {}
}

app.get('/load_file', function(req, res) {
  // Stat path for directory listing or file viewing
  var stats = fs.lstatSync(req.query['path']);

  if(stats.isDirectory()) {
    // Return a directory listing
    res.send(readDir(req.query['path']));
  } else {
    // Return a file
    fs.readFile(req.query['path'], 'utf-8', function(err, text) {
      res.send(text);
    });
  };
});

app.listen(3000);
