

/**
 * Created by ethan on 4/18/15.
 */
Meteor.methods({
    cleanDB: function() {
        Transactions.clean();
        Items.clean();

    }
});