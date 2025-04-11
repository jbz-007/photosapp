import Route from '@ember/routing/route';

export default Route.extend({

    model(){

        let user=this.modelFor('application');
        return this.store.query('todo',{userId:user.id,_limit:10,offset:0});
    }
});
