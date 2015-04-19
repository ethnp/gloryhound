/**
 * Created by ethan on 4/18/15.
 */
Template.newGoal.events({
    'submit form' : function (event) {
        event.preventDefault();
        var newItem = Items.create(
            {
                userId: Meteor.userId(),
                name: event.target.itemName.value,
                category: event.target.category.value,
                charity: event.target.charity.value,
                charityAmount: event.target.charityAmount.value,
                price: event.target.totalAmount.value,
                installmentAmount: event.target.installmentAmount.value
            }
        );
        Transactions.create(
            {
                item: newItem,
                amount: event.target.installmentAmount.value,
                date: new Date()

            }
        );
        Meteor.call('processPayment', event.target.totalAmount.value, function(error, response){
            console.log(response);
        });
    }
});