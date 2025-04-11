import DS from 'ember-data';

export default DS.Serializer.extend({

    normalizeResponse(store,primaryModelClass,payload,id,requestType){

        payload=payload.map((item)=>{

            const id=item.id;
            delete item['id'];

            const userId=item.userId;
            delete item['userId'];

            item={   
                'id':id,
                'type':primaryModelClass.modelName,
                'attributes':{

                    ...item
                }  
            };

            item["relationships"]={user:{data:{type:'user',id:userId}}};

            console.log("todo");

            return item;
        });
        
        payload={'data':payload};
        this.store.push(payload);
        this._super(store,primaryModelClass,payload,id,requestType);

        return payload;
    },
    Serialize(){

    }
}) 