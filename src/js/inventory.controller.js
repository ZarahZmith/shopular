(function() {
  'use strict';

  angular.module('shopular').controller('ItemController', ItemController);

  let tax = 0.0575;

  function ItemController() {
    let vm = this;

    vm.newItem = {};
    vm.sortType = 'price';
    vm.sortReverse = false;

    vm.items = [
      { "id": 2957, "name": "widget", "price": 32, "quantity": 203, "color": "red", "discount": 31 },
      { "id": 89274, "name": "golf club", "price": 98, "quantity": 10, "color": "black", "discount": 0 },
      { "id": 64, "name": "iPhone", "price": 499, "quantity": 2, "color": "white", "discount": 0 },
      { "id": 87363, "name": "bonzai tree", "price": 76, "quantity": 2, "color": "green", "discount": 0 },
      { "id": 1736, "name": "towel", "price": 55, "quantity": 30, "color": "brown", "discount": 10 },
      { "id": 4836, "name": "dog bed", "price": 99, "quantity": 10, "color": "beige", "discount": 50 },
      { "id": 829, "name": "waste basket", "price": 15, "quantity": 40, "color": "silver", "discount": 0 },
      { "id": 46, "name": "guitar", "price": 899, "quantity": 0, "color": "blue", "discount": 150 },
      { "id": 17456, "name": "matcha tea", "price": 42, "quantity": 4, "color": "green", "discount": 11 },
      { "id": 3292, "name": "enlightenment", "price": 99999, "quantity": 1, "color": "red", "discount": 0 },
      { "id": 533, "name": "eggs", "price": 5, "quantity": 12, "color": "brown", "discount": 1 },
      { "id": 683, "name": "pillow", "price": 27, "quantity": 10, "color": "black", "discount": 12 }
    ];

    /**
     * Calculates the final price for an individual item
     * @param  {Array} item Should have price and discount for this function to work
     * @return {Object}     The new calculated price including the price, discount, and taxt rate.
     */
    vm.finalizePrice = function finalizePrice(item) {
      let discountPrice = item.price - item.discount;
      vm.tax = tax;
      let taxPlusPrice = discountPrice * (tax + 1);
      return taxPlusPrice;
    };

    /**
     * Adds a new item to the array of items
     * @param {Object} item Requires a name, price, quantity, color, and discount
     * @return {void}
     */
    vm.addItem = function addItem(item) {
      if (typeof(item) !== 'object' || typeof(item.name) !== 'string' || item.name.length < 1) {
        return;
      }
      item.price = Number(item.price);
      if (Number.isNaN(item.price)) {
        return;
      }
      //TODO if there is no quantity or discount set them to 0

      let itemID = Date.now();

      vm.items.push({
        id: itemID,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        color: item.color,
        discount: item.discount
      });
      vm.newItem = {};
    };

    vm.changeSort = function changeSort(sortField) {
      // this does not work
      vm.sortType = sortField;
      vm.sortReverse = !vm.sortReverse;
    };

  }
}());
