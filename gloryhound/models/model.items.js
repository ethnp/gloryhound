/**
 * Created by ethan on 4/18/15.
 */
ItemsModel = new Mongo.Collection('items');

Items = {
    name: '',
    category: '',
    charity: '',
    price: '',
    userId: '',

    create: function(obj){
        if (typeof obj.name === 'undefined') return 'Collection needs a valid name';
        if (typeof obj.category === 'undefined') return 'Collection needs a valid category';
        if (typeof obj.charity === 'undefined') return 'Collection needs a valid charity';
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
    },
    clean: function() {
        ItemsModel.remove({});
    }
};




