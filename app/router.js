import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('executive-summary');
  this.route('experiments');
  this.route('pitch-deck');
  this.route('plan');
  this.route('index', { path: '' });
});

export default Router;
