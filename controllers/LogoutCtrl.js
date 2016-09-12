angular.module("myApp")
  .controller("LogoutCtrl", function(AuthFactory, $location) {
    AuthFactory.logout().then(() => $location.path("/"));
  });
