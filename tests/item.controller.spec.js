(function() {
  'use strict';

  let expect = chai.expect;

  describe('inventory controller', function() {

    let ItemController;
    let mockShopService = {};

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
    });

    //TODO describes to test each individual fn

  });

}());
