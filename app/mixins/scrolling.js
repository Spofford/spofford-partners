import Ember from 'ember';

export default Ember.Mixin.create({
  bindScrolling: function(opts) {
    var onScroll, _this = this;
    opts = opts || {debounce: 100};


    if (opts.debounce) {
      onScroll = Ember.run.debounce(function() { return _this.scrolled; }, 500);
    } else {
      onScroll = function(){
          return _this.scrolled(elem);
      };
    }

    Ember.$(document).on('touchmove', function() {
      return _this.scrolled();
    });
    Ember.$(window).on('scroll', function() {
      return _this.scrolled();
    });
  },

  unbindScrolling: function() {
    Ember.$(window).off('scroll', this.scrolled);
    Ember.$(document).off('touchmove', this.scrolled);
  }
});
