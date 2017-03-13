'use strict';

/**
 * @ngdoc overview
 * @name householdApp
 * @description
 * # householdApp
 *
 * Main module of the application.
 */
angular
  .module('householdApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngMaterial'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('new', {
        url: '/new',
        templateUrl: 'views/new-household.html',
        controller: 'NewHouseholdCtrl as ctrl'
      })
      .state('new.house', {
        url: '/house',
        templateUrl: 'views/form-house.html'
      })
      .state('new.people', {
        url: '/people',
        templateUrl: 'views/form-people.html'
      })
      .state('new.cars', {
        url: '/cars',
        templateUrl: 'views/form-cars.html'
      })
      .state('new.submit', {
        url: '/submit',
        templateUrl: 'views/form-submit.html'
      });
    $urlRouterProvider.otherwise('/new/house');
  });
