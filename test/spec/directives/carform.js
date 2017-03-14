'use strict';

describe('Directive: carForm', function () {

  // load the directive's module
  beforeEach(module('householdApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<car-form></car-form>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the carForm directive');
  }));
});
