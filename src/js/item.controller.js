(function() {
  'use strict';

  angular.module('shopular').controller('ItemController', ItemController);

  let tax = 0.0575;

  ItemController.$inject = ['ShopService'];

  function ItemController(ShopService) {
    let vm = this;

    vm.newItem = {};
    vm.sortType = 'price';
    vm.sortReverse = false;

    vm.items = ShopService.getAllItems();

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
     * @param {Object} item Requires an id, name, price, quantity, color, and discount
     * @return {void}
     */
    vm.addItem = function addItem(item) {
      ShopService.createItem(item);
      vm.newItem = {};
    };

    /**
     * Allows you to change the field in which the items are sorted
     * @param  {Object} sortField The field in which the sort occurs
     * @return {void}
     */
    vm.changeSort = function changeSort(sortField) {
      // this does not work
      vm.sortType = sortField;
      vm.sortReverse = !vm.sortReverse;
    };

  }
}());
