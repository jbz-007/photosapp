import { computed } from '@ember/object';
import DS from 'ember-data';
import PaymentMethod from './payment-method';

export default PaymentMethod.extend({
  last4: DS.attr(),

  obfuscatedIdentifier: computed('last4', function () {
    return `**** **** **** ${this.last4}`;
  })
});