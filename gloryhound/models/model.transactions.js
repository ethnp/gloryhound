TransactionsModel = new Mongo.Collection('transactions');

Transactions = {
    item: Items,
    amount: '',
    date: '',
    user: '',

    create: function(obj){
        if (typeof obj.item === 'undefined') return 'Collection needs a valid item property';
        if (typeof obj.amount === 'undefined') return 'Collection needs a valid amount property';
        if (typeof obj.date === 'undefined') return 'Collection needs a valid date property';
        if (typeof obj.user === 'undefined') return 'Collection needs a user date property';
        return Transactions.insert(obj);
    },
    getItem: function(id){
        return Transactions.find(id).fetch();
    },
    getAllItems: function(){
        return Transactions.find({}).fetch();
    },
    updateItem: function(id, obj){
        return Transactions.update(
            id,
            obj
        );
    }
};