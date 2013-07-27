var makeEventedThing = function() {
  var obj = {};
  obj.callbacks = {};
  obj.on = function (event, callback) {
    obj.callbacks[event]? obj.callbacks[event].push(callback): (obj.callbacks[event] = [callback]);
  };

  obj.trigger = function () {
    args = Array.prototype.slice.call(arguments);
    _.each(obj.callbacks[arguments[0]], function(callback) {
      callback.apply(obj, args.slice(1));
    });
  };

  return obj;
};