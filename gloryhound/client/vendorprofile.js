/**
 * Created by gsvitak on 18/04/15.
 */

Template.vendorProfile.events({
    'submit form': function (e) {
        e.preventDefault();
        console.log('got  here');
        var vendorProfile = VendorProfile.create({
            vendorname: e.target.company_name.value,
            address1: e.target.address1.value,
            address2: e.target.address2.value,
            city: e.target.city.value,
            state: e.target.state.value,
            zip: e.target.zip_code.value,
            email_address: e.target.email_address.value

        });
        console.log(vendorProfile);


    }
});
