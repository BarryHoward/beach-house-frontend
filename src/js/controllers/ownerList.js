function OwnerListController (OwnerService) {
  	let vm = this;

	function init() {
	  	OwnerService.getAllOwners().then((resp) => {
	  		vm.owners = resp.data
	  	});
  	}

  	init();

};

OwnerListController.$inject = ['OwnerService'];
export {OwnerListController};