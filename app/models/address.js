import DS from 'ember-data';

export default DS.Model.extend({

    street: DS.attr(),
    suite: DS.attr(),
    city: DS.attr(),
    zipcode: DS.attr(),
    user:DS.belongsTo('user',{inverse:'address'}),
})