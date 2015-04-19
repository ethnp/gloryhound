Router.map(function() {
  this.route('home', {path: '/'} );
  this.route('newGoal');
  this.route('userProfile');
  this.route('dashboard');
  this.route('sellView', {
    path: 'sellView/:_id',
    data: function(){
      data = {};
      data.id=this.params._id;
      return data;
    }
  });
});