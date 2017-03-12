(function() {
	'use strict';

angular.module('checkListApp', [])
	.controller('checkListToBuyController', checkListToBuyController)
	.controller('checkListBoughtController', checkListBoughtController)
	.service('checkListerService', checkListerService);

checkListToBuyController.$inject = ['checkListerService'];
function checkListToBuyController(checkListerService){
	var checkList = this;

	checkList.items = checkListerService.getItems();
	
	checkList.buy = function(itemIndex) {
		
      		checkListerService.buy(itemIndex);
    	
    	
  	};


}

checkListBoughtController.$inject = ['checkListerService'];
function checkListBoughtController(checkListerService){
	var checkListBought = this;

  	// List of shopping items
  	checkListBought.items = checkListerService.getBoughtItems();

}

function checkListerService() {
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