import Controller from '@ember/controller';

export default Controller.extend({

    actions: {

        createPost(user){

            let post=this.store.createRecord('post',{

                            title:'new post',
                            body:'new post body content',
                            user:user
                        });
            console.log(post);
        },
        updatePost(post){

            post.set('title',"updated");
            console.log(post);
            console.log(post.changedAttributes());
        },
        deletePost(post){

            post.deleteRecord();
        },
        rollbackPost(post){

            post.rollbackAttributes();
            console.log(post);
            console.log(post.changedAttributes());
        }
    }
})