/**
 * Created by ethan on 4/18/15.
 */
Template.newItem.events({
    'submit form' : function (e) {
        e.preventDefault();
        console.log('form submitted');
        var newitem = Items.create({name: e.target.itemName.value, amount: e.target.saveAmount.value});
    }
});