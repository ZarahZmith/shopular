(function() {
  'use strict';

  angular.module('shopular').factory('ShopService', ShopService);

  function ShopService() {

    let items = JSON.parse(localStorage.getItem('items')) || [];

    /**
     * Create new inventory data for an individual item
     * @param {Object} item the item to add containing id, name, price, quantity, color, and discount
     * @return {void}
     */
    function createItem(item) {
      if (typeof(item) !== 'object' || typeof(item.name) !== 'string' || item.name.length < 1) {
        return;
      }
      item.price = Number(item.price);
      if (Number.isNaN(item.price) || item.price < 0.01) {
        return;
      }
      item.quantity = Number(item.quantity);
      if (Number.isNaN(item.quantity) || item.quantity < 0) {
        return;
      }
      item.discount = Number(item.discount);
      if (Number.isNaN(item.discount) || item.discount < 0) {
        return;
      }
      if (typeof(item.color) !== 'string') {
        return;
      }
      //TODO if there is no quantity or discount set them to >= 0, number has to be a string/no color is null

      let itemID = Date.now();

      items.push({
        id: itemID,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        color: item.color,
        discount: item.discount
      });
      localStorage.setItem('items', angular.toJson(items));
    }

    /**
     * Get all items in the array
     * @return {Array} All of the items in the inventory
     */
    function getAllItems() {
      return items;
    }

    return {
      createItem: createItem,
      getAllItems: getAllItems
    };
  }

}());
