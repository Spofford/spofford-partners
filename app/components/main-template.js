import Ember from 'ember';
import Scrolling from 'hcd-gov/mixins/scrolling';

export default Ember.Component.extend(Scrolling, {

  active: false,
  classNames: ["main"],
  classNameBindings: ["active:active"],
  active: false,

  didInsertElement: function() {
    this._super(...arguments);
    this.bindScrolling();
  },

  willRemoveElement: function() {
    this.unbindScrolling();
  },

  scrolled: function() {
    if (this.get('active')) {
      let self = this.$();
      let scrollTop = $(window).scrollTop();
      let elementOffset = self.offset().top;
      console.log(elementOffset - scrollTop);
    }
  }

});
