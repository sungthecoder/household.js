'use strict';

/**
 * @ngdoc component
 * @name householdApp.component:personForm
 * @description
 * # personForm
 */
angular.module('householdApp')
.component('personForm', {
  templateUrl: 'views/form-person.html',
  controller:  'PersonFormCtrl as ctrl',
  bindings: {
    person:   '<',
    index:    '<',
    onDelete: '&'
  }
});
