if (Meteor.isClient) {

  // subscribe to the generated data
  Meteor.subscribe('pages');
  Meteor.subscribe('products');

  // get a reference to the generated collections
  var Pages = new Meteor.Collection('pages');
  var Products = new Meteor.Collection('products');

  // use the collections like normally
  Template.pages.helpers({
    pages: Pages.find()
  });

  Template.products.helpers({
    products: Products.find()
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {

    // Tell electrostatic to generate the collections and items
    Electrostatic.generate(function() {

      // publish the generated collections for the client
      Meteor.publish('pages', function() {
        return Electrostatic.pages.find();
      });

      Meteor.publish('products', function() {
        return Electrostatic.products.find();
      });
    });

  });
}