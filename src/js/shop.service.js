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
    function getData(item) {
      if (typeof(item) !== 'object' || typeof(item.name) !== 'string' || item.name.length < 1) {
        return;
      }
      item.price = Number(item.price);
      if (Number.isNaN(item.price)) {
        return;
      }
      //TODO if there is no quantity or discount set them to 0

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
      getData: getData,
      getAllItems: getAllItems
    };
  }

}());
