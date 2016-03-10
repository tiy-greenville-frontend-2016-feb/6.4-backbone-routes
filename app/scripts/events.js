var vent = _.extend({}, Backbone.Events);
Backbone.View.prototype.vent = vent;
Backbone.Router.prototype.vent = vent;

module.exports = vent;
