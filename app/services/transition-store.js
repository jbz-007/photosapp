import Service from '@ember/service';

export default Service.extend({


    storedTransition:null,
    resolve:null,
    storeTransition(transition){

        this.storedTransition=transition;
    },
    obtainTransition(){

        let transition=this.storedTransition;
        this.storedTransition=null;
        return transition;
    }
})