define("bamboo/syntax", ['require', 'exports', 'module'], function(require, exports, module) {
  function Syntax() {
    this.CCPPMode       = new (require("ace/mode/c_cpp").Mode);
    this.ClojureMode    = new (require("ace/mode/clojure").Mode);
    this.CoffeeMode     = new (require("ace/mode/coffee").Mode);
    this.CSharpMode     = new (require("ace/mode/csharp").Mode);
    this.CssMode        = new (require("ace/mode/css").Mode);
    this.GroovyMode     = new (require("ace/mode/groovy").Mode);
    this.HtmlMode       = new (require("ace/mode/html").Mode);
    this.JavaMode       = new (require("ace/mode/java").Mode);
    this.JavascriptMode = new (require("ace/mode/javascript").Mode);
    this.JsonMode       = new (require("ace/mode/json").Mode);
    this.OcamlMode      = new (require("ace/mode/ocaml").Mode);
    this.PerlMode       = new (require("ace/mode/perl").Mode);
    this.PhpMode        = new (require("ace/mode/php").Mode);
    this.PythonMode     = new (require("ace/mode/python").Mode);
    this.RubyMode       = new (require("ace/mode/ruby").Mode);
    this.ScadMode       = new (require("ace/mode/scad").Mode);
    this.ScalaMode      = new (require("ace/mode/scala").Mode);
    this.ScssMode       = new (require("ace/mode/scss").Mode);
    this.SvgMode        = new (require("ace/mode/svg").Mode);
    this.TextileMode    = new (require("ace/mode/textile").Mode);
    this.XmlMode        = new (require("ace/mode/xml").Mode);
    this.TextMode       = new (require("ace/mode/text").Mode);
  };
  exports.Syntax = new Syntax;
});

define("bamboo/themes", ['require', 'exports', 'module'], function(require, exports, module) {
  function Themes() {
    var themes = {
      twilight: 'ace/theme/twilight'
    };

    return themes;
  }

  exports.Themes = new Themes;
});
