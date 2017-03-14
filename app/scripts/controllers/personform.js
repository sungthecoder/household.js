'use strict';

/**
 * @ngdoc function
 * @name householdApp.controller:PersonFormCtrl
 * @description
 * # PersonFormCtrl
 * Controller of the householdApp
 */
angular.module('householdApp')
  .controller('PersonFormCtrl', function (genders) {
    var ctrl = this;

    function deletePerson(){
      ctrl.onDelete();
    }

    ctrl.deletePerson = deletePerson;
    ctrl.genderOptions = genders;

    return ctrl;
  });
