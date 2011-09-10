define(function (require, exports, module) {
  var net = require("sprock/net");

  exports.load = function (name, req, onLoad, config) {
    net.get(req.toUrl(name), onLoad);
  }
});

