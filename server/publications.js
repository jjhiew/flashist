Meteor.publish('secrets', function() {
  return Secrets.find();
});
