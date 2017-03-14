'use strict';

/**
 * @ngdoc service
 * @name householdApp.states
 * @description
 * # states
 * Factory in the householdApp.
 */
angular.module('householdApp')
  .factory('states', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
