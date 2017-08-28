import Ember from 'ember';

export default Ember.Component.extend({
  classNames:['welcome-overlay'],
  // turnOff: false,
  turnOff: true,
  //gone: false,
  gone:true,
  classNameBindings: ['turnOff:off','gone:gone'],
  actions: {
    fadeOut: function() {
      let self = this;
      this.set('turnOff',true);
      setTimeout(function() {
        self.set('gone', true);
      },1000);
    }
  }
});
