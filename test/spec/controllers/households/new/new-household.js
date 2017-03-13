'use strict';

describe('Controller: HouseholdsNewNewHouseholdCtrl', function () {

  // load the controller's module
  beforeEach(module('householdApp'));

  var HouseholdsNewNewHouseholdCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HouseholdsNewNewHouseholdCtrl = $controller('HouseholdsNewNewHouseholdCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(HouseholdsNewNewHouseholdCtrl.awesomeThings.length).toBe(3);
  });
});
