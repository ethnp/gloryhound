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
                installmentAmount: event.target.installmentAmount.value,
                frequency: event.target.frequency.value
            }
        );
        Meteor.call('processPayment', event.target.totalAmount.value, function(error, response){
            Transactions.create(
                {
                    itemId: newItem,
                    amount: event.target.installmentAmount.value,
                    date: new Date(),
                    success: response.success

                }
            );
            console.log(response);
            alert('Congratulations! You have started your path to saving for your desired ' + event.target.itemName.value + '!\n\rThank you also for donating to the charity ' + event.target.charity.value + '! You are a good person!');
            window.location.href='/';
        });
    }
});