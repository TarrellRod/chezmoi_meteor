Router.configure({
    layoutTemplate: 'main'
});

Router.route('/', {
    name: 'home',
    template: 'home'
});

Router.route('/register', {
    name: 'register',
    template: 'register'
});


Router.route('/login', {
    name: 'login',
    template: 'login'

});

Router.route('/cravings', {
  name: 'cravings',
  template: 'cravings'
});
Router.route('/restaurants', {
  name: 'restaurants',
  template: 'restaurants'
});
Router.route('/restaurant/:_id', {
  data: function(){
      var currentRestaurant = this.params._id;
      return Restaurants.findOne({_id: currentRestaurant});
  },
  name: 'resturantView',
  template: 'restaurantView'

});
