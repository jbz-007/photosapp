import DS from 'ember-data'

export default DS.JSONAPISerializer.extend({

    normalizeResponse(store,primaryModelClass,payload,id,requestType){

        if(['findRecord','peekRecord'].includes(requestType)){

            delete payload['id'];

            payload={   
                        'id':id,
                        'type':primaryModelClass.modelName,
                        'attributes':{

                            ...payload
                        }  
            };

            console.log(payload);
        }
        else{

            payload=payload.map((item)=>{

                const id=item.id;
                delete item['id'];

                if(primaryModelClass.modelName=='post'){

                    var userId=item.userId;
                    delete item['userId'];
                }
                else if(primaryModelClass.modelName=='comment'){

                    var postId=item.postId;
                    delete item['postId'];
                }

                item={   
                    'id':id,
                    'type':primaryModelClass.modelName,
                    'attributes':{

                        ...item
                    }  
                };

                if(primaryModelClass.modelName=='post'){

                    item["relationships"]={ user:{data:{type:'user',id:userId}}};
                }
                else if(primaryModelClass.modelName=='comment'){

                    item["relationships"]={post:{data:{type:'post',id:postId}}};
                    console.log(item);
                }

                console.log("application");

                return item;
            });
        }

        payload={'data':payload};

        /*
        if(primaryModelClass.modelName=='user'){

            payload["relationships"]={ paymentMethods: {

                                            data: [{
                                                id: 1,
                                                type: "payment-method-paypal"
                                            }, {
                                                id: 2,
                                                type: "payment-method-cc"
                                            }]
                                        }
                                      };
            console.log(payload);
        }*/
        
        this.store.push(payload);
        this._super(store,primaryModelClass,payload,id,requestType);

        return payload;
    },
    keyForAttribute(key){

        return key;
    },
    keyForRelationship(key){

        return key;
    }
})