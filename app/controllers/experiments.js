import Ember from 'ember';

export default Ember.Controller.extend({
  show: null,

  actions: {
    contentShow: function(section) {
      this.set('show',section);
    }
  }
});
