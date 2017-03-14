'use strict';

describe('Service: cars', function () {

  // load the service's module
  beforeEach(module('householdApp'));

  // instantiate service
  var cars;
  beforeEach(inject(function (_cars_) {
    cars = _cars_;
  }));

  it('should do something', function () {
    expect(!!cars).toBe(true);
  });

});
