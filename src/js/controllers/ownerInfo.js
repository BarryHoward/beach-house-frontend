function OwnerInfoController (OwnerService, $stateParams, $state) {
	let vm = this;

	function init(){
	    OwnerService.getOwner($stateParams.id).then((resp) => {
	  		vm.owner = resp.data
	  	});
	}
	init();

  	// function deleteOwner($stateParams.id) {
  	// 	OwnerService.deleteContact(id).then((resp) => {
  	// 	$state.go('home.list')
  	// });

  	// function updateOwner(){
  	// 	vm.owner = {}; // set params
  	// 	OwnerService.updateOwner($stateParams.id, vm.owner)
  	// }

};

OwnerInfoController.$inject = ['OwnerService', '$stateParams', '$state'];
export {OwnerInfoController};