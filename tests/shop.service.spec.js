(function() {
  'use strict';

  let expect = chai.expect;

  describe('Shop Service', function() {

    let ShopService;

    beforeEach(module('shopular'));

    beforeEach(inject(function(_ShopService_) {
      ShopService = _ShopService_;
    }));

    describe('get data function', function() {
      it('should be able to get an array of all items', function() {
        let result = ShopService.getAllItems();
        expect(result).to.be.an('array');
      });
    });

  });
}());
