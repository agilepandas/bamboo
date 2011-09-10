function include(file) {
  var head = document.getElementsByTagName('head')[0];

  var script = document.createElement('script');
  script.setAttribute('type', 'text/javascript');
  script.setAttribute('src', file);

  head.appendChild(script);
}

var modes = [
  'c_cpp',
  'clojure',
  'coffee',
  'csharp',
  'css',
  'groovy',
  'html',
  'java',
  'javascript',
  'json',
  'ocaml',
  'perl',
  'php',
  'python',
  'ruby',
  'scad',
  'scala',
  'scss',
  'svg',
  'textile',
  'xml'
];


for(var i=0; i <= modes.length; i++) {
  include("javascript/base/ace/mode-"+modes[i]+".js");
}
