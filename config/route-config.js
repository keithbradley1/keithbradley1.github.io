"use strict"

angular.module('myApp')
  .config(($routeProvider) => {
    $routeProvider
      .when('/post-page', {
        controller: 'PostCtrl',
        controllerAs: 'post',
        templateUrl: 'partials/post-page.html'
      })
      .when('/search', {
        controller: 'SearchCtrl',
        controllerAs: 'search',
        templateUrl: '/partials/search.html'
      })
      .when("/tags", {
        controller: "TagCtrl",
        controllerAs: "tags",
        templateUrl: "partials/post-page.html"
      });
      // .otherwise('/')
    })





