import Ember from 'ember';


export default Ember.Component.extend({

  active: false,
  classNames: ["main"],
  classNameBindings: ["active"],
  attributeBindings: ['style'],
  style: function() {
    return new Ember.String.htmlSafe(`opacity: ${this.get('opacity')}`);
  }.property('opacity'),

  

  didInsertElement: function() {

  },

  scrollActions: Ember.observer('ac', function() {
    let self = this;
    let scrollTop = $(window).scrollTop();
    let elementOffset = this.$().offset().top;
    let offset = elementOffset - scrollTop;
    let percentage = (elementOffset-scrollTop+530)/530;
    let otherPercentage = 1-((offset-200)/200);
      if (offset<0&&offset>-400) {
        self.set('opacity', percentage)
      }
      if ((offset<400)&&(offset>=200)) {
        self.set('opacity', otherPercentage)
      }
  })

});
