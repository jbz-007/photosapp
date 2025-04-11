import Route from '@ember/routing/route';

export default Route.extend({

    model(){

        let postId=this.paramsFor('posts.post').post_id;
        this.store.query('comment',{postId:postId});
        console.log(this.store.peekRecord('post',postId));
        return this.store.peekRecord('post',postId)['comments'];
    }
})