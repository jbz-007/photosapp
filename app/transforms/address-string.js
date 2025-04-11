import DS from 'ember-data';

export default DS.Transform.extend({

    deserialize(value){

        console.log(value);
        return Object.keys(value).map((key)=>{ return `${key} : ${value[key]}`}).join(', ');
    }
})