'use strict';

describe('Controller: CarformctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('householdApp'));

  var CarformctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CarformctrlCtrl = $controller('CarformctrlCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CarformctrlCtrl.awesomeThings.length).toBe(3);
  });
});
