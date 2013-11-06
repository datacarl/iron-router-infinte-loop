if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to action-loop.";
  };

  Template.hello.events({
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });
}

TestController = RouteController.extend({
  setSomeData: function() {
    this.setData('mydata', 123);
    this.render();
    console.log('looping');
  }
});

Router.map(function() {
  this.route('hello', {
    path: '/',

    controller: TestController,

    action: 'setSomeData'
  });
});

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
