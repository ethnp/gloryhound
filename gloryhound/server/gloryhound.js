Meteor.startup(function () {
    // code to run on server at startup
    //Add facebook creds
    ServiceConfiguration.configurations.remove({
        service: 'facebook'
    });

    ServiceConfiguration.configurations.insert({
        service: 'facebook',
        appId: '1439955059635933',
        secret: '40365ab10e5af7922e10b07f81fc69b0'
    });
});
