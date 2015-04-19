DashboardItem = {
    Item: {},
    amountSaved: '',
    charityAmount: '',
    lastTransaction: {},

    getPublicItems: function() {
        var dashItems = [];
        var allItems = Items.getAllItems();

        for (i = 0; i < allItems.length ; i++){
            item = allItems[i];
            var length = dashItems.length;
            dashItems[length] = {};
            dashItems[length].Item = item;
            var transactionsForItem = Transactions.getAllTransactionsForItem(item._id);
            var totalForItem = 0;
            for (j = 0; j <  transactionsForItem.length; j++) {
                var transaction = transactionsForItem[j];
                if (j == 0) {
                    dashItems[length].lastTransaction = transaction.date.getMonth() + '-' + transaction.date.getDate() + '-'  +
                    transaction.date.getFullYear() + " - " + transaction.date.getHours() + ':' + transaction.date.getMinutes();
                }
                totalForItem +=transaction.amount;
            }
            dashItems[length].percentage = ('' + (totalForItem/item.price)*100).substring(0,2);
            dashItems[length].missing = item.price - totalForItem;
            dashItems[length].amountSaved = totalForItem;
            dashItems[length].charityAmount = totalForItem * item.charityAmount;
        }
        return dashItems;

    },

    getItemTransactionsByItemId: function(itemId) {
        var item = Items.getItem(itemId);
        if (item.length != 1){
            return
        }
        item = item[0];
        console.log(item);
        var transactionsForItem = Transactions.getAllTransactionsForItem(item._id);
        item.transactions = transactionsForItem;
        console.log(item.transactions);
        var totalForItem = 0;
        for (j = 0; j <  transactionsForItem.length; j++) {
            var transaction = transactionsForItem[j];
            if (j == 0) {
                item.lastTransaction = transaction.date.getMonth() + '-' + transaction.date.getDate() + '-'  +
                    transaction.date.getFullYear() + " - " + transaction.date.getHours() + ':' + transaction.date.getMinutes();
            }
            totalForItem +=transaction.amount;
        }
        item.percentage = ('' + (totalForItem/item.price)*100).substring(0,2);
        item.missing = item.price - totalForItem;
        item.amountSaved = totalForItem;
        item.charityAmount = totalForItem * item.charityAmount;
        return item;
    }


};
