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
}
