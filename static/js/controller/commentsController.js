define(function(require) {
  var Ember = require('ember');
  var dctx = require('../model/datacontext');
  var Q = require('Q');

  return Ember.Controller.extend({
  	findComments:function(post_id){
  		return dctx.downloadComments(post_id).then(function(r){
  				return Q.resolve(Ember.getWithDefault(r, 'results', []));
  		});
  	}
  });
});
