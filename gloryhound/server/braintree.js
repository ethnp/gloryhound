/**
 * Created by ethan on 4/18/15.
 */
Meteor.methods({
    getBrainTreeToken: function() {
        var gateway = braintree.connect({
            environment: braintree.Environment.Sandbox,
            merchantId: '7ndrgty5gfj7nf7x',
            publicKey: 'h22qgbf7h3st9h2s',
            privateKey: 'd7b18e16a3edcbecbaf947ac1ac11152'
        });

        var createToken = Meteor.wrapAsync(gateway.clientToken.generate, gateway.clientToken);

        var response = createToken({});

        return response.clientToken;

    },
    addCard: function(nonce){
        var gateway = braintree.connect({
            environment: braintree.Environment.Sandbox,
            merchantId: '7ndrgty5gfj7nf7x',
            publicKey: 'h22qgbf7h3st9h2s',
            privateKey: 'd7b18e16a3edcbecbaf947ac1ac11152'
        });

        var createCustomer = Meteor.wrapAsync(gateway.customer.create, gateway.customer);

        var response = createCustomer({firstName: Meteor.user().services.facebook.first_name,
            lastName: Meteor.user().services.facebook.last_name,
            paymentMethodNonce: nonce});
        Meteor.users.update({_id: Meteor.userId()}, {$set: {'profile.braintree': response.customer}});
        return response;
    },
    processPayment: function(amount){

        var gateway = braintree.connect({
            environment: braintree.Environment.Sandbox,
            merchantId: '7ndrgty5gfj7nf7x',
            publicKey: 'h22qgbf7h3st9h2s',
            privateKey: 'd7b18e16a3edcbecbaf947ac1ac11152'
        });

        var processPayment = Meteor.wrapAsync(gateway.transaction.sale, gateway.transaction);

        var response = processPayment({customerId: Meteor.user().profile.braintree.paymentMethods[0].customerId,
            amount: amount});
        return response;

    }

});