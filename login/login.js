if(Meteor.isClient){

  Template.login.events({
    "submit form": function(event){
       event.preventDefault();
       var username = event.target.username.value;
       var password = event.target.password.value;
       Meteor.loginWithPassword(username, password, function(error){
         if(error){
           console.log(error.reason);
         } else {
           Router.go('home');
         }
       });
    }
  });

}
