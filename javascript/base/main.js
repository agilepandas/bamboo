$(function() {
  Editor = (function() {
    // Constructor
    function Editor(element_name) {
      // All available modes
      this.modes = require('sprock/syntax').Syntax;
      // Current mode
      this.mode = null;

      // All available themes
      this.themes = require('sprock/themes').Themes;
      // Current theme
      this.theme = "";


      this.EditSession = require("ace/edit_session").EditSession;
      this.UndoManager = require("ace/undomanager").UndoManager;

      this.editor = ace.edit(element_name);

      // Temp
      this.editor.setTheme(this.themes.twilight);
      this.set_mode(this.modes.RubyMode);
    }

    // Set the current mode of the editor (Html, js, Ruby, etc)
    Editor.prototype.set_mode = function(mode) {
      this.mode = mode;
      this.editor.getSession().setMode(mode);
    };

    // Get the current mode
    Editor.prototype.get_mode = function() {
      this.mode;
    };

    // Set the current theme
    Editor.prototype.set_theme = function(theme) {
      this.theme = theme;
      this.editor.getSession().setTheme(theme);
    }

    // Get the current theme
    Editor.prototype.get_theme = function() {
      this.theme;
    }

    return Editor;
  })();

  Sprock = (function() {
    function Sprock() {
      this.version = 0.1;
      this.view_ports = {};

      this.add_editor('editor'); // Add editor for testing.
    }

    Sprock.prototype.add_editor = function(element, width, height) {
      var editor = new Editor(element);
      this.view_ports[element] = editor;
    };

    return Sprock;
  })();

  new Sprock;

});
