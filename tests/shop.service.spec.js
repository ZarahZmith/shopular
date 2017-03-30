(function() {
  'use strict';

  let expect = chai.expect;

  describe('Shop Service', function() {

    let ShopService;

    beforeEach.module('shopular');

    beforeEach(inject(function(_ShopService_) {
      ShopService = _ShopService_;
    }));

  });
}());
