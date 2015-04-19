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
            amount: 100,
            date: new Date(),
            status: 'Success',
            success: true
        });
        Transactions.create({
            itemId: item2,
            amount: 50,
            date: new Date(),
            status: 'Success',
            success: true
        });
        Transactions.create({
            itemId: item2,
            amount: 55,
            date: new Date(),
            status: 'Success',
            success: true
        });

        var item3 = Items.create({
            userId: userId,
            name : 'Fishing Pole',
            category : 'fishing',
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

        var item4 = Items.create({
            userId: userId,
            name : 'Macbook Pro',
            category : 'electronics',
            charityAmount: .05,
            charity:  'Boys & Girls & Dogs & Cats',
            price: 2000.0,
            installmentAmount:100.0,
            frequency: 'Monthly'
        });


        Transactions.create({
            itemId: item4,
            amount: 100,
            date: new Date(),
            status: 'Success',
            success: true
        });

        Transactions.create({
            itemId: item4,
            amount: 100,
            date: new Date(),
            status: 'Success',
            success: true
        });

        Transactions.create({
            itemId: item4,
            amount: 1800,
            date: new Date(),
            status: 'Success',
            success: true
        });

        var item5 = Items.create({
            userId: userId,
            name : 'Ferarri',
            category : 'automotive',
            charityAmount: .05,
            charity:  'Veteran Automobiles',
            price: 450000.0,
            installmentAmount:10000.0,
            frequency: 'Weekly'
        });


        Transactions.create({
            itemId: item5,
            amount: 1000,
            date: new Date(),
            status: 'Success',
            success: true
        });

        Transactions.create({
            itemId: item5,
            amount: 1500,
            date: new Date(),
            status: 'Success',
            success: true
        });

        Transactions.create({
            itemId: item5,
            amount: 1600,
            date: new Date(),
            status: 'Success',
            success: true
        });
    }
};