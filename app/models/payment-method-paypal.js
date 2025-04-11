import { computed } from '@ember/object';
import DS from 'ember-data';
import PaymentMethod from './payment-method'

export default PaymentMethod.extend({
  linkedEmail: DS.attr(),

  obfuscatedIdentifier: computed('linkedEmail', function () {
    let last5 = this.linkedEmail.split('').reverse().slice(0, 5).reverse().join('');

    return `••••${last5}`;
  })
});