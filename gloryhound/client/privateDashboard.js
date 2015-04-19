
Template.privateDashboard.rendered = function(){
    //Setup.setupData(Meteor.userId());
};

Template.privateDashboard.helpers({
    ownItems :function () {
        return  DashboardItem.getItemsByUser(Meteor.userId());}
});

