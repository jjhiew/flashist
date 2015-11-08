Template.home.onRendered(function(){

  // $('.fixed-action-btn').closeFAB();
  $('.modal-trigger').leanModal();
  $('textarea#text').characterCounter();

});

Template.home.events({

  "submit .insert-form": function(e) {
    e.preventDefault();

    var text = e.target.text.value;
    console.log("text", text);
    e.target.text.value = "";

    $('#modal1').closeModal();
  }

})
