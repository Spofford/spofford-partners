import Ember from 'ember';

export default Ember.Component.extend({
  classNames:['welcome-overlay'],
  turnOff: false,
  gone: false,
  classNameBindings: ['turnOff:off','gone:gone'],
  actions: {
    fadeOut: function() {
      let self = this;
      this.set('turnOff',true)
      setTimeout(function() {
        self.set('gone', true);
      },1000)
    }
  }
});
