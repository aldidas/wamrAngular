'use strict';

angular.module('ongkirappApp', ['ngResource', 'ngSanitize'])
  .config(['$routeProvider' ,function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/blog/:postSlug', {
        templateUrl: 'views/single.html',
        controller: 'SingleCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/create', {
        templateUrl: 'views/create.html',
        controller: 'CreateCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
