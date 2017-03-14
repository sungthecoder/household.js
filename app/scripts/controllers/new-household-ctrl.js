'use strict';

/**
 * @ngdoc function
 * @name householdApp.controller:HouseholdsNewNewHouseholdCtrl
 * @description
 * # HouseholdsNewNewHouseholdCtrl
 * Controller of the householdApp
 */
angular.module('householdApp')
  .controller('NewHouseholdCtrl', function ($state) {
    var ctrl = this;

    function onNext(form){
      if(form.$valid){
        $state.go('^.people');
      }

    }

    ctrl.onNext = onNext;

    return ctrl;
  });
