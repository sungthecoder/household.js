'use strict';

describe('Directive: personForm', function () {

  // load the directive's module
  beforeEach(module('householdApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<person-form></person-form>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the personForm directive');
  }));
});
