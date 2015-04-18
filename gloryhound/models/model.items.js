/**
 * Created by ethan on 4/18/15.
 */
if (Meteor.isServer) {

}
ItemsModel = new Mongo.Collection('items');

Items = {
    create: function(obj){
        return ItemsModel.insert(obj);
    }
};
