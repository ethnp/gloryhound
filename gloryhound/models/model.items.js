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
    sold: false,
    installmentAmount: '',
    frequency: '',

    create: function(obj){
        if (typeof obj.name === 'undefined') return 'Collection needs a valid name';
        if (typeof obj.category === 'undefined') return 'Collection needs a valid category';
        if (typeof obj.charity === 'undefined') return 'Collection needs a valid charity';
        if (typeof obj.price === 'undefined') return 'Collection needs a valid price';
        if (typeof obj.userId === 'undefined') return 'Collection needs a valid userId';
        if (typeof obj.installmentAmount === 'undefined') return 'Collection needs a valid installment amount';
        if (typeof obj.frequency === 'undefined') return 'Collection needs a valid freqeuncy';
        if (typeof obj.sold === 'undefined') return 'Collection needs a valid selling property';
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
    getItemsByCategory: function(category){
        var items = ItemsModel.find({"category": {$regex: category}}).fetch();

        return items;
    },
    getItemsByUser: function(userId){
        var items = ItemsModel.find({"userId": userId}).fetch();
        return items;
    },
    clean: function() {
        ItemsModel.remove({});
    },
    markItemSold: function(id){
        ItemsModel.update({_id: id}, {$set: {'sold': true}});
    }
};




