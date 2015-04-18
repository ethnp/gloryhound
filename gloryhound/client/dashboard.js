Template.dashboard.onCreated(function () {
   console.log(Transactions.create({item: 'asda', amount: '10.0', user:'1', date:new Date()}));
});

Template.dashboard.helpers({
    items :function () {return  Transactions.getAllTransactions();}
});
