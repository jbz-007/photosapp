import Service from '@ember/service';
import { inject as service } from '@ember/service'

export default Service.extend({

    loggedIn:false,
    transitionStore:service(),
    router:service(),
    resolve:null,
    login(transition){

        this.transitionStore.storeTransition(transition);
        new Promise((resolve)=>{    this.transitionStore.resolve=resolve;
                                    this.router.transitionTo('userLogin');
                                })
            .then(()=>{ this.loggedIn=true;
                        this.resolve();
                        let transition=this.transitionStore.obtainTransition();
                        transition.retry();
                       });
    }
})