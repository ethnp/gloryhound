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

VendorProfileModel = new Mongo.Collection('vendorprofile');

VendorProfile = {
    create: function(obj){
        return VendorProfileModel.insert(obj);
    }

}


