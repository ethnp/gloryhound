Setup = {

    setupData : function(userId) {
        var item1 = Items.create({
            userId: userId,
            name : 'PS4',
            category : 'electronics games',
            charityAmount: .05,
            charity:  'Boys & Girls & Dogs & Cats',
            price: 400.0,
            installmentAmount:10.0,
            frequency: 'Weekly'
        });


        Transactions.create({
            itemId: item1,
            amount: 10,
            date: new Date(),
            status: 'Success',
            success: true
        });

        Transactions.create({
            itemId: item1,
            amount: 15,
            date: new Date(),
            status: 'Success',
            success: true
        });

        Transactions.create({
            itemId: item1,
            amount: 16,
            date: new Date(),
            status: 'Success',
            success: true
        });

        var item2 = Items.create({
            userId: userId,
            name : 'XBOX',
            category : 'electronics games',
            charityAmount: .05,
            charity:  'Animals & Insects',
            price: 400.0,
            installmentAmount:10.0,
            frequency: 'Monthly'
        });

        Transactions.create({
            itemId: item2,
            amount: 101,
            date: new Date(),
            status: 'Success',
            success: true
        });
        Transactions.create({
            itemId: item2,
            amount: 102,
            date: new Date(),
            status: 'Success',
            success: true
        });
        Transactions.create({
            itemId: item2,
            amount: 103,
            date: new Date(),
            status: 'Success',
            success: true
        });

        var item3 = Items.create({
            userId: userId,
            name : 'Fishing Pole',
            category : 'electronics games',
            charityAmount: .05,
            charity:  'Fishes & Fishers',
            price: 900.0,
            installmentAmount:10.0,
            frequency: 'Daily'
        });

        Transactions.create({
            itemId: item3,
            amount: 201,
            date: new Date(),
            status: 'Do Not Honor',
            success: false
        });

        Transactions.create({
            itemId: item3,
            amount: 202,
            date: new Date(),
            status: 'Success',
            success: true
        });

        Transactions.create({
            itemId: item3,
            amount: 203,
            date: new Date(),
            status: 'Success',
            success: true
        });
    }
};