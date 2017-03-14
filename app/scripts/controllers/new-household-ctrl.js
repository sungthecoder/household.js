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

    function addPerson(){
      ctrl.household.people.push({});
    }

    // Public attributes
    ctrl.household        = {};
    ctrl.household.people = [{}];
    ctrl.household.cars   = [{}];

    // Public methods
    ctrl.onNext           = onNext;
    ctrl.addPerson        = addPerson;

    return ctrl;
  });
