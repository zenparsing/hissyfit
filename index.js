'use strict';

module.exports = function(opts) {
  if (opts === undefined) {
    opts = {};
  }  
  if (Object(opts) !== opts) {
    throw new TypeError('Invalid options argument');
  }
  var err = new Error(opts.message);
  Object.keys(opts).forEach(function(key) { err[key] = opts[key] });
  return err;
};
