import Route from '@ember/routing/route';
import {inject as service} from '@ember/service'

export default Route.extend({

    login:service(),
    beforeModel(transition){

        if(!this.login.loggedIn){

            this.login.login(transition);
        }
    },
    model(){

        return this.store.findAll('post');
    },
    actions:{

        loadPost(id){

            this.transitionTo("posts.post",id);
        }
    }
});