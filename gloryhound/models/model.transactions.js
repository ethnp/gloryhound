TransactionsModel = new Mongo.Collection('transactions');

Transactions = {
    itemId: '',
    amount: '',
    date: '',


    create: function(obj){
        if (typeof obj.itemId === 'undefined') return 'Collection needs a valid item id';
        if (typeof obj.amount === 'undefined') return 'Collection needs a valid amount property';
        if (typeof obj.date === 'undefined') return 'Collection needs a valid date property';
        return TransactionsModel.insert(obj);
    },
    getTransaction: function(id){
        return TransactionsModel.find(id).fetch();
    },
    getAllTransactions: function(){
        return TransactionsModel.find({}).fetch();
    },
    getAllTransactionsForItem: function(id){
        return TransactionsModel.find({itemId: id}, {sort: {date: -1}}).fetch();
    },

    updateTransaction: function(id, obj){
        return TransactionsModel.update(
            id,
            obj
        );
    },
    clean: function() {
        TransactionsModel.remove({});
    }
};