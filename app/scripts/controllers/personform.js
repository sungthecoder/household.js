'use strict';

/**
 * @ngdoc function
 * @name householdApp.controller:PersonFormCtrl
 * @description
 * # PersonFormCtrl
 * Controller of the householdApp
 */
angular.module('householdApp')
  .controller('PersonFormCtrl', function () {
    var ctrl = this;

    function deletePerson(){
      ctrl.onDelete();
    }

    ctrl.deletePerson = deletePerson;

    return ctrl;
  });
