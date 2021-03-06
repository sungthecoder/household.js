'use strict';

/**
 * @ngdoc function
 * @name householdApp.controller:CarformctrlCtrl
 * @description
 * # CarformctrlCtrl
 * Controller of the householdApp
 */
angular.module('householdApp')
  .controller('CarFormCtrl', function (cars) {
    var ctrl = this;

    ctrl.$onInit = function () {
      if (ctrl.car.year !== undefined){
        ctrl.yearOptions  = [ctrl.car.year];
      }
      if (ctrl.car.make !== undefined) {
        ctrl.makeOptions  = [ctrl.car.make];
      }
      if (ctrl.car.model !== undefined) {
        ctrl.modelOptions = [ctrl.car.model];
      }
    };

    function loadYearOptions(){
      return cars.getYears()
        .then(function(response){
          ctrl.yearOptions = response;
        });
    }

    function loadMakeOptions(){
      var year = ctrl.car.year;

      if (year !== undefined){
        return cars.getMakes(year)
        .then(function(response){
           ctrl.makeOptions = response;
        });
      } else {
        ctrl.makeOptions = [];
      }
    }

    function loadModelOptions(){
      var year = ctrl.car.year,
        make = ctrl.car.make;

      if (year !== undefined && make !== undefined){
        return cars.getModels(year, make.make_id)
        .then(function(response){
           ctrl.modelOptions = response;
        });
      } else {
        ctrl.modelOptions = [];
      }
    }

    function disableMake(){
       return (ctrl.car.year === undefined);
    }

    function disableModel(){
      return ctrl.car.make === undefined ||
        ctrl.car.year === undefined;
    }

    function deleteCar(){
      ctrl.onDelete();
    }

    ctrl.loadYearOptions  = loadYearOptions;
    ctrl.loadMakeOptions  = loadMakeOptions;
    ctrl.loadModelOptions = loadModelOptions;
    ctrl.disableMake      = disableMake;
    ctrl.disableModel     = disableModel;
    ctrl.deleteCar        = deleteCar;
    return ctrl;
  });
