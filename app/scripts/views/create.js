var $ = require('jquery');
var Backbone = require('backbone');

var template = require('../../templates/create.hbs');


var CreateView = Backbone.View.extend({
  template: template,

  events: {
    'click button': 'toggleForm',
    'submit .create': 'createImage'
  },

  initialize: function(){
    this.render();
    this.listenTo(this.model, 'change:isHidden', this.render);
  },

  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
  },

  toggleForm: function(e){
    e && e.preventDefault();
    this.model.set('isHidden', !this.model.get('isHidden'));
  },

  createImage: function(e) {
    e.preventDefault();
    this.collection.create({
      url: this.$('.create-url').val(),
      caption: this.$('.create-caption').val()
    });
    this.toggleForm();
  }
});

module.exports = CreateView;
