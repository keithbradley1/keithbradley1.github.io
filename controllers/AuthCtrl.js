angular.module('myApp')
  .controller('LoginCtrl', function ($location, AuthFactory, FirebaseFactory, PostFactory, $timeout)
     {
    const auth = this // auth is controllerAS
    auth.heading = 'sign in here';
    auth.user = {};

    auth.confirm = () => {
      console.log("fire login function from AuthCtrl.js", auth.email, auth.password);
      AuthFactory.login(auth.user.email, auth.user.password)
        .then(user => {
          PostFactory.setUserId(user.uid);
          $location.path("/login");
          $timeout();
        }).catch(alert);
      }
  })
