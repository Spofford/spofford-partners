import Ember from 'ember';

export default Ember.Controller.extend({
  appController: Ember.inject.controller('application'),
  currentRouteName: Ember.computed.reads('appController.currentRouteName')
});
