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

    describe('adding new items', function() {
      it('should get an item with all of the required info', function() {
        expect(ShopService.getAllItems().length).to.equal(0);
        let now = Date.now();
        ShopService.createItem({
          name: 'Carrot' + now,
          price: 4.99,
          quantity: 55,
          color: 'orange',
          discount: 0
        });
        let item = ShopService.getAllItems();
        expect(item.length).to.equal(1);
      });
    });

  });
}());
