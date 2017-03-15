'use strict';

/**
 * @ngdoc service
 * @name householdApp.household
 * @description
 * # household
 * Factory in the householdApp.
 */
angular.module('householdApp')
  .factory('Person', function (railsResourceFactory) {
    return railsResourceFactory({
      name:       'person'
    })
  });
