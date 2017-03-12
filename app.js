(function() {
	'use strict';

angular.module('checkListApp', [])
	.controller('ToBuyController', ToBuyController)
	.controller('AlreadyBoughtController', AlreadyBoughtController)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
	var checkList = this;

	checkList.items = ShoppingListCheckOffService.getItems();
	
	checkList.buy = function(itemIndex) {
		
      		ShoppingListCheckOffService.buy(itemIndex);
    	
    	
  	};


}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
	var checkListBought = this;

  	// List of shopping items
  	checkListBought.items = ShoppingListCheckOffService.getBoughtItems();

}

function ShoppingListCheckOffService() {
	var service = this;

	//list of items array
	var items = [
		{
			item_name: 'cookies',
			item_quantity: 5
		},
		{
			item_name: 'brownies',
			item_quantity: 7
		},
		{
			item_name: 'cakes',
			item_quantity: 4
		}
	];

	var shoppingCart = [];

	var maxItems = 3;

	service.buy = function(itemIndex){
	
        	var newItem = items[itemIndex];
			shoppingCart.push(newItem);
			items.splice(newItem, 1);
			console.log(items.length);
        	
       
			
	}

	service.getItems = function(){
		return items;
	}

	service.getBoughtItems = function(){
		return shoppingCart;
	}
        

}

})();