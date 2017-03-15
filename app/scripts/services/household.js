'use strict';

/**
 * @ngdoc service
 * @name householdApp.household
 * @description
 * # household
 * Factory in the householdApp.
 */
angular.module('householdApp')
  .factory('Household', function (railsResourceFactory, API_URL, railsSerializer) {
    return railsResourceFactory({
      url:        API_URL + '/households',
      name:       'household',
      serializer: railsSerializer(function(){
        this.resource('cars', 'Car');
        this.resource('people', 'Person');
        this.nestedAttribute('cars', 'people');

        //@add('requestTypeId', (workorder)-> workorder.requestType.id if workorder.requestType )
        //@exclude('requestType', 'submitConfirmed')
      })
    })
  });
