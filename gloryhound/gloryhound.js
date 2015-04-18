Router.map(function() {
  this.route('newItem', {
        path: '/newItem'
      }
  );
  this.route('/');
  this.route('dashboard', {
    path: '/dashboard',
    template: 'dashboard', // <-- to be explicit
    data: function() {
      results = {};
      results.items = [
        { text: "This is task 1" },
        { text: "This is task 2" },
        { text: "This is task 3" }
      ];
      return results;
    }
  });
});