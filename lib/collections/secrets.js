Secrets = new Mongo.Collection('secrets');


Secrets.attachSchema(new SimpleSchema({
  text: {
    type: String,
    label: "Text",
    max: 140
  },
  //URL for the post header
  image: {
    type: String,
    label: "Featured Image",
    optional: true
  },
  flip: {
    type: Boolean,
    optional: true
  },

  // Not Mutable. Force value to be current date (on server) upon insert
  // and prevent updates thereafter.
  createdAt: {
    type: Date,
    autoValue: function() {
      if (this.isInsert) {
        return new Date();
      } else if (this.isUpsert) {
        return {$setOnInsert: new Date()};
      } else {
        this.unset();  // Prevent user from supplying their own value
      }
    }
  },
  // Not Mutable. Force value to be current date (on server) upon update
  // and don't allow it to be set upon insert.
  modifiedAt: {
    type: Date,
    autoValue: function() {
      if (this.isUpdate) {
        return new Date();
      }
    },
    denyInsert: true,
    optional: true
  }
}));

Meteor.methods({

  secretsInsert: function(attr) {
    check(attr, {
      text: String
    });

    var secretId = Secrets.insert(attr);
    return { _id: secretId };
  }
});
