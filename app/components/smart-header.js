import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['fullScreen:show'],
  fullScreen: false,
  tagName: "header",
  didInsertElement: function() {
    let self = this;
    $(window).on('hashchange', function() {
      self.set('fullScreen',false);
    });
  },
  actions: {
    showContents() {
      this.toggleProperty('fullScreen');
    }
  }
});
