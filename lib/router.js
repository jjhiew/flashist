Router.configure({
  layoutTemplate: 'layout',
  waitOn: function() {
    Meteor.subscribe('secrets');
  }
});

Router.route('/', {
  name: 'home'
});
