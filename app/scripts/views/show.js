var $ = require('jquery');
var Backbone = require('backbone');

var template = require('../../templates/show.hbs');


var ShowView = Backbone.View.extend({
  template: template,

  initialize: function(){
    this.render();
  },

  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
  }
});

module.exports = ShowView;
