Template.home.onRendered(function(){

});

Template.home.events({

  "submit .footer-form": function(e) {
    e.preventDefault();

    var text = e.target.text.value;
    var secret = {
      text: text
    };

    Meteor.call('secretsInsert', secret);
    e.target.text.value = "";
  }

});

Template.home.helpers({
  secrets: function(){
    return Secrets.find({}, {sort: {createdAt: -1}});
  }
})
