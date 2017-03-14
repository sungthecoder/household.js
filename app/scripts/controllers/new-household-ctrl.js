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

    function addPerson() {
      ctrl.household.people.push({});
    }

    function deletePerson(index, person) {
      ctrl.household.people.splice(index, 1);
    }

    function addCar() {
      ctrl.household.cars.push({});
    }

    function deleteCar(index, car) {
       ctrl.household.cars.splice(index, 1);
    }

    // Public attributes
    ctrl.household        = {};
    ctrl.household.people = [{}];
    ctrl.household.cars   = [{}];

    // Public methods
    ctrl.onNext           = onNext;
    ctrl.addPerson        = addPerson;
    ctrl.deletePerson     = deletePerson;
    ctrl.addCar           = addCar;
    ctrl.deleteCar        = deleteCar;

    return ctrl;
  });
