UserProfileModel = new Mongo.Collection('vendorprofiles');

UserProfile = {
    username: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    email_address: '',

    create: function(obj){
        return UserProfileModel.insert(obj);
    },
    getItem: function(id){
        return UserProfileModel.find(id).fetch();
    },
    getAllItems: function(){
        return UserProfileModel.find({}).fetch();
    },
    updateItem: function(id, obj){
        return UserProfileModel.update(
            id,
            obj
        );
    }

}