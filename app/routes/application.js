import Route from '@ember/routing/route';
import {inject as service} from '@ember/service'

export default Route.extend({

    login:service(),
    user_id:null,
    user:null,
    beforeModel(){

        //this.store.findAll('user');
        /*
        if(!this.login.loggedIn){
            
            this.store.findAll('user').then((users)=>{

                users.forEach((user)=>{

                    this.store.query('post',{

                        userId:user.id
                        
                    })
                    .then((posts)=>{

                        posts.map((post)=>{

                            post.set('user',user);
                            user.get('posts').pushObject(post);
                        })
                    })
                });
            });            
        }
        */    /*
       if(!this.login.loggedIn){

            this.store.push({
                data:[{
                        id: 1,
                        type: "payment-method-paypal",
                        attributes: {
                            linkedEmail: "ryan@gosling.io"
                        }
                    }, {
                        id: 2,
                        type: "payment-method-cc",
                        attributes: {
                            last4: 1335
                        }
                    }]});*/

            /*
            this.store.push({
                data: [
                    {
                    id: 1,
                    type: 'payment-method-paypal',
                    attributes: {
                        linkedEmail: 'ryan@gosling.io'
                    },
                    relationships: {
                        user: {
                        data: { id: 1, type: 'user' }
                        }
                    }
                    },
                    {
                    id: 2,
                    type: 'payment-method-cc',
                    attributes: {
                        last4: 1335
                    },
                    relationships: {
                        user: {
                        data: { id: 1, type: 'user' }
                        }
                    }
                    }
                ]
                });
                      
       }

       console.log(this.store.peekAll('payment-method-paypal'));*/
    },
    model(){

        if(this.login.loggedIn){

            this.user=this.store.peekRecord('user',this.user_id);
            return this.user;
        }
    },
    afterModel(){
    
        if(this.user){

            /*
            console.log(this.user);
            console.log(this.user.get('paymentMethods'));
            console.log(this.store.peekAll('payment-method'));
            console.log("finsih");
            */
            console.log(this.user.address);
        }
       console.log(this.store.peekAll('address'))
    },
    transitionStore:service(),
    actions: {

        submitID(id){

            this.store.findRecord('user',id).then((user)=>{
                
                new Promise((resolve)=>{
                    
                    this.login.resolve=resolve;
                    this.transitionStore.resolve();})
                .then(()=>{

                    this.user_id=id;
                    this.refresh();
                });
            });
        }
    }
});
