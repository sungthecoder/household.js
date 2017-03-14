'use strict';

/**
 * @ngdoc service
 * @name householdApp.genders
 * @description
 * # genders
 * Factory in the householdApp.
 */
angular.module('householdApp')
  .factory('genders', function () {
    var genders = [
      'Male',
      'Female',
      'Other'
    ];

    return genders;
  });
