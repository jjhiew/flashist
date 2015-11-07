Router.configure({
  layoutTemplate: 'layout',
  // loadingTemplate: 'loading',
  // notFoundTemplate: 'notFound',
  waitOn: function() {
    // return Meteor.subscribe('posts');
  }
});

Router.route('/', {name: 'home'});

Router.route('/categories/', {
  name: 'categories',
  data: function() {
    //return Posts.findOne(this.params._id); 
  }
});
//
// Router.route('/posts/:_id/edit', {
//   name: 'postEdit',
//   data: function() { return Posts.findOne(this.params._id); }
// });


// Router.onBeforeAction('dataNotFound', {only: 'postPage'});
// Router.onBeforeAction(requireLogin, {only: 'postSubmit'});
