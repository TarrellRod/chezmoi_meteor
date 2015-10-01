

if(Meteor.isClient){
  Template.register.events({
    'submit form': function(event){
      event.preventDefault();
      var firstName = event.target.fName.value;
      var lastName = event.target.lName.value;
      var username = event.target.username.value;
      var email = event.target.email.value;
      var password = event.target.password.value;
      var passwordConf = event.target.passwordConf.value;

      Accounts.createUser({
        firstName: firstName,
        lastName: lastName,
        username: username,
        email: email,
        password: password
      });
    }
  });
}
