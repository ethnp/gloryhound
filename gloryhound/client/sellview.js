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
Template.sellView.events({
    'submit form': function(e){
        e.preventDefault();
        alert('The item has been sold. The amount will be credited to your account.');
        window.location.href='/dashboard';
    }
});