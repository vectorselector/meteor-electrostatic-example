if (Meteor.isClient) {

  var Pages = new Meteor.Collection('pages');
  var Products = new Meteor.Collection('products');

  Template.pages.helpers({
    pages: Pages.find()
  });

  Template.products.helpers({
    products: Products.find()
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {

    Electrostatic.generate(function() {
      // do something with the generated collections here
    });

  });
}