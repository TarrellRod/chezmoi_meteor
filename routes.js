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
