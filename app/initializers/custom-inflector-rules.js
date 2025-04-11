import Inflector from 'ember-inflector';

export function initialize(){

    const inflector=Inflector.inflector;

    inflector.uncountable('payment-method-paypal');

    inflector.uncountable('payment-method-cc');

}

export default({

    name:'custom-inflector-rules',
    initialize
})