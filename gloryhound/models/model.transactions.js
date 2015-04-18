TransactionsModel = new Mongo.Collection('transactions');

Transactions = {
    item: '',
    amount: '',
    date: '',
    user: '',

    create: function(obj){
        if (typeof obj.item === 'undefined') return 'Collection needs a valid item id';
        if (typeof obj.amount === 'undefined') return 'Collection needs a valid amount property';
        if (typeof obj.date === 'undefined') return 'Collection needs a valid date property';
        if (typeof obj.user === 'undefined') return 'Collection needs a user id';
        return TransactionsModel.insert(obj);
    },
    getTransaction: function(id){
        return TransactionsModel.find(id).fetch();
    },
    getAllTransactions: function(){
        return TransactionsModel.find({}).fetch();
    },
    updateTransaction: function(id, obj){
        return TransactionsModel.update(
            id,
            obj
        );
    }
};