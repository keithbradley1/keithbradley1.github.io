angular.module("myApp")
  .controller("RegisterCtrl", function(AuthFactory, FirebaseFactory, PostFactory, $location, $timeout) {
    const auth = this;
    auth.heading = "Register";

    auth.confirm = () =>
      AuthFactory.register(auth.user.email, auth.user.password)
        .then(user => {
          PostFactory.setUserId(user.uid);
          $location.path("/search");
          $timeout();
        }).catch(alert);
  });
