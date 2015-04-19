Template.sellView.helpers({
    id: function(){
        return this.id;
    },
    fullItem: function(){
        var myItems = DashboardItem.getItemTransactionsByItemId(this.id);
        console.log(myItems);
        return myItems;
    }
});