Template.home.onRendered(function(){

  $('#donate').click(function(e){
    console.log("DONATE");
    e.preventDefault();
    $(this).modal({
      fadeDuration: 150
    });
  });

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
