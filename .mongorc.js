exports = {} // eyes.js fix
process = {} // eyes.js fix

load('/Users/zacmcc/Dropbox/stuff/dotfiles/patch.js')
load('/Users/zacmcc/Dropbox/stuff/dotfiles/underscore/underscore.js')
load('/Users/zacmcc/Dropbox/stuff/dotfiles/eyes.js/lib/eyes.js')

this._ = exports._
this.inspect = _.bind(eyes.inspect, eyes);

Object.prototype.each = function(func) { return _.each(this, func); };
Object.prototype.filter = function(func) { return _.filter(this, func); };
Object.prototype.inspect = function() { 
  if (this._ns && this._query && this._db) {
    return eyes.inspect(this.toArray()); 
  } else {
    return eyes.inspect(this); 
  }
}

Array.prototype.each    = function(func) { return _.each(this, func); };
Array.prototype.filter  = function(func) { return _.filter(this, func); };
Array.prototype.pluck   = function(prop) { return _.pluck(this, prop); };
Array.prototype.first   = function() { return _.first(this); };
Array.prototype.last    = function() { return _.last(this); };
Array.prototype.flatten = function() { return _.flatten(this); };
Array.prototype.inspect = function() { return eyes.inspect(this); };
