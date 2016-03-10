// 3rd Party
var $ = require('jquery');
var Backbone = require('backbone');

// Local
var IndexView = require('./views/index');
var CreateView = require('./views/create');
var ImageShowView = require('./views/show');
var CreateFormVM = require('./view-models/create-form');
var ImageCollection = require('./models/image').ImageCollection;


var Router = Backbone.Router.extend({

  routes: {
    '': 'index',
    'images/:id': 'show'
  },

  initialize: function(){
    this.createFormVM = new CreateFormVM();

    this.images = new ImageCollection();

    this.createView = new CreateView({
      model: this.createFormVM,
      collection: this.images
    });
    $('body').prepend(this.createView.el);

    // You can use an event aggregator to relay events around
    // this.listenTo(this.vent, 'navigate:show', function(id){
    //   this.navigate('show/' + id, {trigger: true});
    // }.bind(this));
  },

  /*
   * Route handlers
   */

  index: function(){
    this.showView(new IndexView({collection: this.images}));
    this.images.fetch();
  },

  show: function(id) {
    this.images.fetch().then(function(){
      var image = this.images.get(id);
      this.showView(new ImageShowView({model: image}));
    }.bind(this));
  },

  /*
   * Helper functions
   */

  showView: function(view) {
    if(this.currentView){
      this.currentView.remove();
    }

    this.currentView = view;
    $('#app').html(view.el);
    return view;
  },
});

module.exports = new Router();
