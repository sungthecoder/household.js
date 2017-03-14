'use strict';

describe('Service: genders', function () {

  // load the service's module
  beforeEach(module('householdApp'));

  // instantiate service
  var genders;
  beforeEach(inject(function (_genders_) {
    genders = _genders_;
  }));

  it('should do something', function () {
    expect(!!genders).toBe(true);
  });

});
