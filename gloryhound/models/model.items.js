/**
 * Created by ethan on 4/18/15.
 */
ItemsModel = new Mongo.Collection('items');

Items = {
    name: '',

    create: function(obj){
        if (typeof obj.name === 'undefined') return 'Collection needs a valid name property';
        return ItemsModel.insert(obj);
    },
    getItem: function(id){
        return ItemsModel.find(id).fetch();
    },
    getAllItems: function(){
        return ItemsModel.find({}).fetch();
    },
    updateItem: function(id, obj){
        return ItemsModel.update(
            id,
            obj
        );
    }
};




