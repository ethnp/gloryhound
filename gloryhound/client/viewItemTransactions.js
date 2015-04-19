Template.viewItemTransactions.helpers({
    item: function(){
        console.log(this);
        return DashboardItem.getItemTransactionsByItemId(this.id);
    }
});