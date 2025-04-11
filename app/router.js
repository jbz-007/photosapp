import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('index',{path:'/'});
  this.route('posts', function() {
    this.route('post', {path:'/:post_id'},function(){
      this.route('comments')
    });
  });
  this.route('albums', function() {
    this.route('album', {path:'/:album_id'});
  });
  this.route('todos');
  this.route('userLogin');
  this.route('user-profile');
});
