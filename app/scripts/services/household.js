'use strict';

/**
 * @ngdoc service
 * @name householdApp.household
 * @description
 * # household
 * Factory in the householdApp.
 */
angular.module('householdApp')
  .factory('Household', function (railsResourceFactory, API_URL) {
    return railsResourceFactory({
      url:  API_URL + '/households',
      name: 'household'
    });
  });
