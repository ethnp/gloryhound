/**
 * Created by ethan on 4/18/15.
 */
Template.newGoal.events({
    'submit form' : function (event) {
        event.preventDefault();
        console.log('form submitted');
        var newItem = Items.create(
            {
                name: event.target.itemName.value,
                category: event.target.category.value,
                charity: event.target.charity.value
            }
        );
        Transactions.create(
            {
                item: newItem,
                amount: event.target.saveAmount.value,
                date: new Date(),
                user: Meteor.userId()

            }
        );

    }
});