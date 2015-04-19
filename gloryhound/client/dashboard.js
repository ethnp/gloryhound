
Template.dashboard.rendered = function(){
    Setup.setupData(Meteor.userId());
}

Template.dashboard.helpers({
    items :function () {
        return  DashboardItem.getPublicItems();}
});

Template.dashboard.events({
    'click .publicItems': function(){

    }
});
