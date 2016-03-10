var _ = require('underscore');
var Backbone = require('backbone');


var Image = Backbone.Model.extend({
  defaults: function() {
    return {
      url: '',
      caption: '',
      created_at: new Date()
    };
  },

  idAttribute: '_id',

  toJSON: function(){
    return _.extend({}, _.omit(this.attributes, '_id'), {id: this.id});
  }
});


var ImageCollection = Backbone.Collection.extend({
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/images',
  model: Image,

  comparator: function(a, b) {
    return (new Date(b.get('created_at'))) - (new Date(a.get('created_at')));
  }
});


module.exports = {
  'Image': Image,
  'ImageCollection': ImageCollection
};
