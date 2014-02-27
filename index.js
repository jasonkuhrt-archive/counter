'use strict';
var augment = require('./lib/augment');




function Counter(from){
  var count = {};

  count.conf = {
    from: from
  };

  count.state = {
    resets: [],
    value: from
  };

  for (var key in api) {
    if (!api.hasOwnProperty(key)) continue;
    count[key] = api[key].bind(null, count);
  }

  return count;
}



var api = {};

api.reset = function reset(counter){
  counter.state.resets.push(counter.value);
  counter.state.value = counter.conf.from;
  return counter;
};

api.clear = function clear(counter){
  api.reset(counter);
  counter.state.resets.length = 0;
  return counter;
};

api.value = function value(counter){
  return counter.state.value;
};

api.incBy = function incBy(counter, by){
  counter.state.value += by;
  return counter;
};

api.inc = function inc(counter){
  return api.incBy(counter, 1);
};

api.decBy = function decBy(counter, by){
  return api.incBy(counter, by * -1);
};

api.dec = function dec(counter){
  return api.decBy(counter, 1);
};



module.exports = Counter;
module.exports.Counter = Counter;
augment(module.exports, api);