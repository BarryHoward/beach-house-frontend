

function OwnerListController (OwnerService, $timeout) {
  	let vm = this;
  	vm.loading=false;

	function init() {
		let timeoutId = $timeout(function(){
					vm.loading=true;
					}, 1000);
	  	OwnerService.getAllOwners().then((resp) => {
	  		$timeout.cancel(timeoutId);
	  		vm.owners = resp.data
	  		vm.loading=false;
	  	});
  	}

  	init();

};

OwnerListController.$inject = ['OwnerService', '$timeout'];
export {OwnerListController};