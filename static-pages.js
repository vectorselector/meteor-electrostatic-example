
// get a reference to the generated collections
pages = new Meteor.Collection('pages');
products = new Meteor.Collection('products');

if (Meteor.isClient) {

  // subscribe to the generated data
  Meteor.subscribe('pages');
  Meteor.subscribe('products');

  // use the collections like normally
  Template.pages.helpers({
    pages: pages.find({}, { sort: { published_at: 1 }})
  });

  Template.products.helpers({
    products: products.find()
  });
}

if (Meteor.isServer) {

  // publish the generated collections for the client
  Meteor.publish('pages', function() {
    return pages.find({}, { sort: { published_at: 1 }});
  });

  Meteor.publish('products', function() {
    return products.find();
  });

  FastRender.route('/', function() {
    this.subscribe('pages');
    this.subscribe('products');
  })

  Meteor.startup(function () {

    // Tell electrostatic to generate the collections and documents
    Electrostatic.generate(this);

  });
}