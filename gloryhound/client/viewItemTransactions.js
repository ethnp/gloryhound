Template.viewItemTransactions.helpers({
    viewItem : function(){
        return DashboardItem.getItemTransactionsByItemId(this.id);
    }
});