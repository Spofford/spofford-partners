import Ember from 'ember';


export default Ember.Component.extend({

  active: false,
  classNames: ["main"],
  classNameBindings: ["active","quote:quote","start:start","end:end","content:content","template1:template1","template2:template2","template3:template3","template4:template4"],
  attributeBindings: ['style'],
  style: function() {
    return new Ember.String.htmlSafe(`opacity: ${this.get('opacity')}`);
  }.property('opacity'),


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
      if (offset<-400||offset>400) {
        self.set('opacity',.1);
      }
  })

});
