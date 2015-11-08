Template.home.onRendered(function(){

});

Template.home.events({

  "submit .insert-form": function(e) {
    e.preventDefault();

    var text = e.target.text.value;
    console.log("text", text);
    e.target.text.value = "";
  }

})
