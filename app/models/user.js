import DS from 'ember-data';

export default DS.Model.extend({

    name:DS.attr(),
    username:DS.attr(),
    email:DS.attr(),
    address:DS.belongsTo('address',{inverse:'user'}),
    phone:DS.attr(),
    website:DS.attr(),
    company:DS.attr(),
    posts:DS.hasMany('post',{inverse:'user'}),
    todos:DS.hasMany('todo',{inverse:'user'}),
    //paymentMethods:DS.hasMany('payment-method',{inverse:'user',polymorphic:true})
})