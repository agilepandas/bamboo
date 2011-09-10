$(function() {
  // Bind call back function for getting the correct context.
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  // Initialize events handler.
  var events = new (require('bamboo/base/events').Events)();

  File = (function() {
    function File(path) {
      this.path = path;
      this.net  = require("bamboo/net");
      this.content = null;

      if(this.path) {
        this.net.get('/load_file?path='+path, __bind(function(content) {
          console.log(content);
          this.content = content;
          events.fire('file_loaded', this);

        }, this));
      }
    }

    // Return the content of the file
    File.prototype.read = function() {
      return this.content;
    };

    // Save the file
    File.prototype.save = function() {
      console.log("Fake save");
      console.log(this.content);
    };

    // Return the file type
    File.prototype.file_type = function() {
      var split = this.path.split(".");
      return split[split.length-1];
    };

    return File;
  })();

  Editor = (function() {
    // Constructor
    function Editor(element_name) {
      // All available modes
      this.modes = require('bamboo/syntax').Syntax;
      // All available themes
      this.themes = require('bamboo/themes').Themes;
      // Canon event handler
      this.canon = require('pilot/canon');

      // Current mode
      this.mode = null;
      // Current theme
      this.theme = "";
      // Current file
      this.file = null;

      this.EditSession  = require("ace/edit_session").EditSession;
      this.UndoManager  = require("ace/undomanager").UndoManager;

      this.editor = ace.edit(element_name);

      // Temp
      this.editor.setTheme(this.themes.twilight);

      this.canon.addCommand({
        name: 'save',
        bindKey: {
          win: "Ctrl-S",
          mac: "Command-S",
          sender: "editor"
        },
        exec: __bind(function(editor) {
          this.save_file();
        }, this)
      });

      this.canon.addCommand({
        name: 'open',
        bindKey: {
          win: "Ctrl-O",
          mac: "Command-O",
          sender: "editor"
        },
        exec: __bind(function(editor) {
          this.open_file(prompt("Open file"), "");
        }, this)
      });
    }

    // Set the current mode of the editor (Html, js, Ruby, etc)
    Editor.prototype.set_mode = function(mode) {
      this.mode = mode;
      this.editor.getSession().setMode(mode);
    };

    // Get the current mode
    Editor.prototype.get_mode = function() {
      return this.mode;
    };

    // Set the current theme
    Editor.prototype.set_theme = function(theme) {
      this.theme = theme;
      this.editor.getSession().setTheme(theme);
    };

    // Get the current theme
    Editor.prototype.get_theme = function() {
      return this.theme;
    };

    // Open the file and return the session
    Editor.prototype.open_file = function(path) {
      var EditSession = require("ace/edit_session").EditSession;
      var file = new File(path);

      var session = new EditSession(file.read());
      switch(file.file_type()) {
        case 'rb':
          session.setMode(this.modes.RubyMode);
          break;
        case 'js':
          session.setMode(this.modes.JavascriptMode);
          break;
        // TODO Add more modes
      }
      this.file = file;

      this.session = session;
      this.editor.setSession(this.session);

      return this.session;
    };

    Editor.prototype.save_file = function() {
      this.file.content = this.editor.getSession().getValue();
      this.file.save();
    };

    return Editor;
  })();

  Bamboo = (function() {
    function Bamboo() {
      this.version = 0.1;
      this.view_ports = {};

      this.add_editor('editor'); // Add editor for testing.
    }

    Bamboo.prototype.add_editor = function(element, width, height) {
      var editor = new Editor(element);
      this.view_ports[element] = editor;
    };

    return Bamboo;
  })();

  var bamboo = new Bamboo();
});
