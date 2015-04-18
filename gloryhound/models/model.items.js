/**
 * Created by ethan on 4/18/15.
 */
Items = new Mongo.Collection('items');
Items.helpers({
    create: function(obj) {
        this.insert( { item: "card", qty: 15 } )
    },
    getAll: function(){
        return this.item + ' ' + this.qty
    }
});

Meteor.publish('Items', function(){
    return new Items();
});