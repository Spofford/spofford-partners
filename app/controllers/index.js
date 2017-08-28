import Ember from 'ember';
import Scrolling from 'hcd-gov/mixins/scrolling';

export default Ember.Controller.extend(Scrolling, {
  applicationController: Ember.inject.controller('application'),
  sections: Ember.computed(function() {
    return Ember.$(document).find("section");
  }),
  graphs: Ember.computed(function() {
    return Ember.$(document).find("article");
  }),

  init: function() {
    this._super(...arguments);
    this.bindScrolling();
  },

  scrolled: function() {
    let scrollTop = $(window).scrollTop();
    let sections = this.get("sections");
    let graphs = this.get("graphs");
    let curSection = sections.map(function() {
      if ($(this).offset().top<(scrollTop+150)&&($(this).offset().top+$(this).height())>scrollTop+150) {
        return this;
      }
    });
    let curArticle = graphs.map(function() {
      if ($(this).offset().top<(scrollTop+150)&&($(this).offset().top+$(this).height())>scrollTop+150) {
        return this;
      }
    });

    //console.log(curArticle[0].title);
    if(curSection){
      this.set('applicationController.sectionName',curSection[0].title);
    }
    if(curSection){
      this.set('applicationController.graphName',curArticle[0].title);
    }
  },
});
