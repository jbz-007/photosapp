import DS from 'ember-data';

export default DS.Model.extend({

    //post_id:DS.attr(),
    post:DS.belongsTo('post',{inverse:'comments'}),
    name:DS.attr(),
    email:DS.attr(),
    body:DS.attr()
})