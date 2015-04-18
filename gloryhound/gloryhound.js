if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    //Add facebook creds
    ServiceConfiguration.configurations.update({
      service:"facebook"
    }, {
      $set: {
        clientId: "1439955059635933",
        loginStyle: "popup",
        secret: "40365ab10e5af7922e10b07f81fc69b0"
    }
  });
  });
}
