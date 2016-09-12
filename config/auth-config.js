angular.module('myApp')
  .config($routeProvider => {
    $routeProvider
      .when('/login', {
        controller: 'LoginCtrl',
        controllerAs: 'auth',
        templateUrl: '/partials/login.html'
      })
      .when('/create-user', {
        controller: 'RegisterCtrl',
        controllerAs: 'auth',
        templateUrl: '/partials/login.html'
      })
      .when("/logout", {
        controller: "LogoutCtrl"
        // templateUrl: "/partials/landing.html"
      })
      .otherwise('/')
    })


