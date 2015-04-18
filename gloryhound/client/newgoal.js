/**
 * Created by ethan on 4/18/15.
 */
Template.newGoal.events({
    'submit form' : function (event) {
        event.preventDefault();
        console.log('form submitted');
        console.log(Items.create(
            {
                name: event.target.itemName.value,
                category: event.target.category.value,
                charity: event.target.charity.value
            }
        ));

    }
});