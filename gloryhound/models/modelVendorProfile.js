VendorProfileModel = new Mongo.Collection('vendorprofile');

VendorProfile = {
    create: function(obj){
        if (typeof obj.vendorname === 'undefined') return 'Collection needs a valid vendorname property';
        if (typeof obj.address1 === 'undefined') return 'Collection needs a valid address1 property';
        if (typeof obj.address2 === 'undefined') return 'Collection needs a valid address2 property';
        if (typeof obj.city === 'undefined') return 'Collection needs a valid city property';
        if (typeof obj.state === 'undefined') return 'Collection needs a valid state property';
        if (typeof obj.zip === 'undefined') return 'Collection needs a valid zip property';
        if (typeof obj.email_address === 'undefined') return 'Collection needs a email address property';
        return VendorProfileModell.insert(obj);
    },
    getItem: function(id){
        return VendorProfileModel.find(id).fetch();
    },
    getAllItems: function(){
        return VendorProfileModel.find({}).fetch();
    },
    updateItem: function(id, obj){
        return VendorProfileModel.update(
            id,
            obj
        );
    }

}