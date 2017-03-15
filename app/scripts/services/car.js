'use strict';

/**
 * @ngdoc service
 * @name householdApp.household
 * @description
 * # household
 * Factory in the householdApp.
 */
angular.module('householdApp')
  .factory('Car', function(railsResourceFactory, API_URL, railsSerializer) {
    return railsResourceFactory({
      name:       'car',
      serializer: railsSerializer(function() {
        this.resource('driver', 'Person');

        this.add('make_id', function(car) {
          if (car.make !== undefined){
            return car.make.make_id;
          }
        });

        this.add('make_display', function(car) {
          if (car.make !== undefined){
            return car.make.make_display;
          }
        });

        this.add('driverId', function(car) {
          if (car.driver !== undefined){
             return car.driver.driverId;
          }
        });

        this.exclude('make', 'driver');
      })
    });
  });
