Template.viewItemTransactions.helpers({
    item: function() {
        return DashboardItem.getItemTransactionsByItemId(this.id);
    }
});