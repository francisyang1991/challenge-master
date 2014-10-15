define(function(require) {
  var Ember = require('ember');

  var T = Ember.Handlebars.compile('\
    <h4>Comments</h4> \
  ');

  return Ember.View.extend({
    template: T
  });
});
