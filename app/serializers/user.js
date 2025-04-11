import DS from 'ember-data';

export default DS.JSONSerializer.extend(DS.EmbeddedRecordsMixin,{

    attrs:{

        address:{embedded:'always'}
    },
    normalizeResponse(store,primaryModelClass,payload,id,requestType){

        console.log(payload);

        payload.address['id']=2;

        /*
        delete payload['id'];

        payload={

            id:id,
            type:primaryModelClass.modelName,
            attributes:{

                ...payload
            }
        }

        payload={data:payload};

        this.store.push(payload)*/

        return this._super(store,primaryModelClass,payload,id,requestType);

        return payload;
    }
});