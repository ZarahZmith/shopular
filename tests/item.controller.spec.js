(function() {
  'use strict';

  let expect = chai.expect;

  describe('inventory controller', function() {

    let ItemController;
    let mockShopService = {};
    let item;

    beforeEach(module('shopular'));

    beforeEach(module(function($provide) {
      $provide.value('ShopService', mockShopService);
    }));

    beforeEach(inject(function($controller) {
      mockShopService.getAllItems = function getAllItems() {
        let now = Date.now();
        return [{
          id: now,
          name: 'wallet',
          price: 350.99,
          quantity: 45,
          color: 'black',
          discount: 55
        }];
      };
      mockShopService.createItem = function createItem(argOne) {
        mockShopService.createItem.numTimesCalled++;
        return;
      };
      mockShopService.createItem.numTimesCalled = 0;

      ItemController = $controller('ItemController');
    }));

    it('should have all the things we expect it to', function() {
      expect(ItemController).to.be.an('object');
      expect(ItemController.newItem).to.be.an('object');
      expect(ItemController.sortType).to.be.a('string');
      expect(ItemController.sortReverse).to.equal(false);
      expect(ItemController.items).to.be.an('array');
    });

    //TODO describes to test each individual fn
    describe('finalize price function', function() {
      it('should do all of the things we expect the finalize price function to do', function() {
        expect(ItemController.finalizePrice).to.be.a('function');
        let item = ItemController.items[0];
        expect(item.price).to.equal(350.99);
        expect(item.discount).to.equal(55);
        ItemController.finalizePrice.discountPrice = item.price - item.discount;
        expect(ItemController.finalizePrice.discountPrice).to.equal(295.99);
        let taxMultiplier = 1 + 0.0575;
        ItemController.finalizePrice.taxPlusPrice = ItemController.finalizePrice.discountPrice * taxMultiplier;
        expect(ItemController.finalizePrice.taxPlusPrice).to.equal(313.009425);
      });
    });

    describe('add item function', function() {
      it('should do all of the things we expect the add item function to do', function() {
        expect(ItemController.addItem).to.be.a('function');
      });
    });

    // describe('change sort function', function() {
    //   it('should do all of the things we expect the change sort function to do', function() {
    //     expect(ItemController.changeSort()).to.be.a('function');
    //   });
    // });

  });

}());
