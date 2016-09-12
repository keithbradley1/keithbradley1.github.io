angular.module("myApp")
  .config(($routeProvider) => {
    $routeProvider
      .when("/", {
        templateUrl: "partials/landing.html"
      })
      .otherwise("/");
  });