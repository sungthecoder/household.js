'use strict';

/**
 * @ngdoc service
 * @name householdApp.cars
 * @description
 * # cars
 * Factory in the householdApp.
 */
angular.module('householdApp')
  .factory('cars', function ($http, $sce) {
    var CARQUERYAPI='https://www.carqueryapi.com/api/0.3',
      url = $sce.trustAsResourceUrl(CARQUERYAPI);

    function getYears(){
      var cmd = 'getYears';

      return $http.jsonp(url, {
        params: { jsonpCallbackParam: 'callback', cmd: cmd }
      }).then(function(response){
        var range, i, min = response.data.Years.min_year,
          max = response.data.Years.max_year;

        range = [];
        for(i = max; i >= min; --i){
          range.push(i);
        }
        return range;
      });
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
        return response.data.Models;
      });
    }

    // Public API here
    return {
      getYears:  getYears,
      getMakes:  getMakes,
      getModels: getModels
    };
  });
