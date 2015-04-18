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
            for (trans in transactionsForItem) {
                if (length == 0) {
                    dashItems[length].lastTransaction = trans;
                }
                totalForItem +=trans.amount;
            }
            dashItems[length].amountSaved = totalForItem;
            dashItems[length].charityAmount = totalForItem * item.charityAmount;
        }
        console.log(dashItems);
        return dashItems;

    }
};
