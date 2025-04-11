import Route from '@ember/routing/route';

export default Route.extend({

    model(params){

        let posts=this.modelFor('posts');
        return posts.findBy('id',params.post_id);
    },
    actions:{

        loadComments(){

            this.transitionTo('posts.post.comments');
        }
    }
});
