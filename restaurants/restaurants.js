Restaurants = new Mongo.Collection('restaurants');
if(Meteor.isClient){
  Template.restaurants.helpers({
    'restaurant': function(){
      return Restaurants.find();
    }
  });
}
