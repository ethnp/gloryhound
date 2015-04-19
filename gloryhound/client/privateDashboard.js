
Template.privateDashboard.rendered = function(){
    //Setup.setupData(Meteor.userId());
};

Template.privateDashboard.helpers({
    ownItems :function () {
        return  DashboardItem.getPublicItems();}
});

