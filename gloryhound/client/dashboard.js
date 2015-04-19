
Template.dashboard.rendered = function(){
    /*Meteor.call('cleanDB', '', function(){
        Setup.setupData(Meteor.userId());
    });*/
    Session.set('dashboardItems', DashboardItem.getPublicItems());
};

Template.dashboard.helpers({
    items :function () {

        return  Session.get('dashboardItems');
    }
});

Template.dashboard.events({
    'click #search': function(e){
        e.currentTarget.className = 'col-sm-4 pull-right';
        e.currentTarget.placeholder = 'Search By Category..';
    },
    'blur #search': function(e){
        e.currentTarget.className = 'col-sm-2 pull-right';
        e.currentTarget.placeholder = 'Search..';
    },
    'keypress #search': function(e){
        if (e.keyCode == 13) {
            //console.log($('#search').val());
            //console.log(DashboardItem.getPublicItemsByCategory($('#search').val()));
            Session.set('dashboardItems', DashboardItem.getPublicItemsByCategory($('#search').val()));
        }
    }
});
