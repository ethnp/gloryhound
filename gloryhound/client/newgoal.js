/**
 * Created by ethan on 4/18/15.
 */
Template.newItem.events({
    'submit form' : function (event) {
        e.preventDefault();
        console.log('form submitted');
        Items.create({name: event.target.itemName.value});
    }
});