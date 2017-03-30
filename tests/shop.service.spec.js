(function() {
  'use strict';

  let expect = chai.expect;

  describe('Shop Service', function() {

    let ShopService;

    beforeEach(module('shopular'));

    beforeEach(inject(function(_ShopService_) {
      ShopService = _ShopService_;
    }));

    it('should add 1 + 1', function() {
      expect(1 + 1).to.equal(2);
    });

  });
}());
