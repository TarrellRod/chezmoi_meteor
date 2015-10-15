Restaurants = new Mongo.Collection('restaurants');
if (Meteor.isServer){
  Meteor.publish("restaurants", function(){
    return Restaurants.find();
  });
}


if(Meteor.isClient){
  
  
  Meteor.subscribe("restaurants");
  Template.restaurants.helpers({
    'restaurant': function(){
      return Restaurants.find();
    }

    
  });
  
  Template.addRestaurant.events({
    'submit form': function(event){
      event.preventDefault();
      var name = event.target.restaurantName.value;
      var format = event.target.format.value;
      var type = event.target.type.value;
      
      Restaurants.insert({
        name:name,
        format:format,
        type:type
      });
    }
    
  });
  
}
