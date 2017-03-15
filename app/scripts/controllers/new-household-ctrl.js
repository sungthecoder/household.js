'use strict';

/**
 * @ngdoc function
 * @name householdApp.controller:HouseholdsNewNewHouseholdCtrl
 * @description
 * # HouseholdsNewNewHouseholdCtrl
 * Controller of the householdApp
 */
angular.module('householdApp')
  .controller('NewHouseholdCtrl', function ($state, states, md5) {
    var ctrl = this;

    function onNext(form, nextState){
      if(form.$valid){
        $state.go('^.' + nextState);
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

    function getHash(email){
      return md5.createHash(email || '');
    }

    // Public attributes
    ctrl.household        = {};
    ctrl.household.people = [{}];
    ctrl.household.cars   = [{}];
    ctrl.readyToSubmit    = 'No';

    // Public methods
    ctrl.onNext           = onNext;
    ctrl.addPerson        = addPerson;
    ctrl.deletePerson     = deletePerson;
    ctrl.addCar           = addCar;
    ctrl.deleteCar        = deleteCar;
    ctrl.stateOptions     = states;
    ctrl.getHash = getHash;

    return ctrl;
  });
