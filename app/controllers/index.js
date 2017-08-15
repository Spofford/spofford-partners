import Ember from 'ember';
import Scrolling from 'hcd-gov/mixins/scrolling';

export default Ember.Controller.extend(Scrolling, {
  lastScrollTop: 0,
  scrollDirection: null,
  count: 0,
  ac:null,

  init: function() {
    this._super(...arguments);
    this.bindScrolling();
    let self = this;

    $(window).on('hashchange', function() {
      self.scrolled();
    });
  },

  willDestroy: function() {
    this.unbindScrolling();
  },



  scrolled: function() {
    let lst = this.get('lastScrollTop');
    let st = $(document).scrollTop();
    let self = this;
    if (self.get('ac')) {
      self.set('ac',false);
    } else {
      self.set('ac',true);
    }
    //console.log(self.get('ac'));

    if (st > lst) {
      //if(!self.get('scrollDirection') || self.get('scrollDirection')==='up') {
        self.set('scrollDirection', 'down');
        //console.log(self.get('scrollDirection'));
      //}
    } else {
      //if(!self.get('scrollDirection') || self.get('scrollDirection')==='down') {
        self.set('scrollDirection', 'up');
        //console.log(self.get('scrollDirection'));
      //}
    }
    this.set('lastScrollTop', st);
  }
});
