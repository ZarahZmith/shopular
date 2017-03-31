(function() {
  'use strict';

  let expect = expect.chai;

  describe('inventory controller', function() {

    let InventoryController;
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

      InventoryController = $controller('InventoryController');
    }));

  });

}());
