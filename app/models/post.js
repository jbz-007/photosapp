import DS from 'ember-data';

export default DS.Model.extend({

    user:DS.belongsTo('user',{inverse:'posts'}),
    //userId:DS.attr(),
    title:DS.attr(),
    body:DS.attr(),
    comments:DS.hasMany('comment',{inverse:'post'})
})