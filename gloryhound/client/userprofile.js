/**
 * Created by gsvitak on 18/04/15.
 */

Template.userProfile.events({
    'submit form': function (e) {
        e.preventDefault();
    },
    'click #btnChangePaymentInfo': function(e){
        Meteor.users.update({_id: Meteor.userId()}, {$unset: {'profile.braintree': 1}});
    }
});

Template.userProfile.helpers({
    user_name: function(){
        return Meteor.user().profile.name;
    },
    userProfileInfo: function(){
        return Meteor.user().profile;
    }
});
