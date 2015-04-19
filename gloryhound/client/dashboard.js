
Template.dashboard.onCreated(function () {

  // console.log(Transactions.create({item: 'bFfzuGhrebaRKwzpE', amount: 10.0, user:1, date:new Date()}));
});
Template.dashboard.rendered = function(){
    Setup.setupData(Meteor.userId());
}
Template.dashboard.helpers({
    items :function () {return  DashboardItem.getPublicItems();}
});
