define("bamboo/base/event", ['require', 'exports', 'module'], function(require, exports, module) {
  function Event(event_type) {
    this.type = event_type;
  }

  exports.Event = Event;
});

var Event = require('bamboo/base/event').Event;

define("bamboo/base/events", ["require", "exports", "module"], function(require, exports, module) {
  function Events() {
    this.listeners = {};
  }

  Events.prototype.add_listener = function(event_type, callback) {
    if(this.listeners[event_type] !== 'undefined') {
      this.listeners[event_type].push(callback);
    } else {
      this.listeners[event_type] = [callback];
    }
  };

  Events.prototype.fire = function(event_type) {
    for(var i in this.listeners[event_type]) {
      // Fire event for each callback
      this.listeners[event_type][i].call(event);
    }
  };

  exports.Events = Events;
});
