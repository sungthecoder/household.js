'use strict';

/**
 * @ngdoc service
 * @name householdApp.idFactory
 * @description
 * # idFactory
 * Factory in the householdApp.
 */
angular.module('householdApp')
  .factory('IdFactory', function () {
    // Service logic
    // ...

    var id = 0;

    function nextId() {
      id += 1;
      return id;
    }

    // Public API here
    return {
      nextId: nextId
    };
  });
