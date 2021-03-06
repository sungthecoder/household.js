'use strict';

/**
 * @ngdoc service
 * @name householdApp.cars
 * @description
 * # cars
 * Factory in the householdApp.
 */
angular.module('householdApp')
  .factory('cars', function ($http, $sce, $q) {
    var CARQUERYAPI='https://www.carqueryapi.com/api/0.3',
      url = $sce.trustAsResourceUrl(CARQUERYAPI),
      years;

    function getYears(){
      var cmd = 'getYears',
        deferred = $q.defer();

      if (years !== undefined) {
        deferred.resolve(years);
        return deferred.promise;
      } else {
        return $http.jsonp(url, {
          params: { jsonpCallbackParam: 'callback', cmd: cmd }
        }).then(function(response){
          var range, i, min = response.data.Years.min_year,
            max = response.data.Years.max_year;

          range = [];
          for(i = max; i >= min; --i){
            range.push(i);
          }
          years = range;
          return years;
        });
      }
    }

    function getMakes(year){
      var cmd = 'getMakes';

      return $http.jsonp(url, {
        params: {
          jsonpCallbackParam: 'callback',
          cmd: cmd,
          year: year }
      }).then(function(response){
        return response.data.Makes;
      });
    }

    function getModels(year, make){
      var cmd = 'getModels';

      return $http.jsonp(url, {
        params: {
          jsonpCallbackParam: 'callback',
          cmd: cmd,
          year: year,
          make: make
        }
      }).then(function(response){
        return response.data.Models.map(function(model){
           return model.model_name;
        });
      });
    }

    // Public API here
    return {
      getYears:  getYears,
      getMakes:  getMakes,
      getModels: getModels
    };
  });
