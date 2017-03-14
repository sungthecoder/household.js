'use strict';

/**
 * @ngdoc directive
 * @name householdApp.directive:carForm
 * @description
 * # carForm
 */
angular.module('householdApp')
.component('carForm', {
  templateUrl: 'views/form-car.html',
  controller:  'CarFormCtrl as ctrl',
  bindings: {
    car:      '<',
    index:    '<',
    onDelete: '&'
  }
});
