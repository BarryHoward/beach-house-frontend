function OwnerInfoController (OwnerService, $stateParams, $state, $timeout) {
	let vm = this;

  vm.loading=false;

	function init(){
    let timeoutId = $timeout(function(){
          vm.loading=true;
          }, 1000);
    OwnerService.getOwner($stateParams.id).then((resp) => {
        $timeout.cancel(timeoutId);
        vm.owner = resp.data
        console.log(vm.owner)
        vm.loading=false;
      }, (reject) => {
        $timeout.cancel(timeoutId);
        vm.loading=false;
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

OwnerInfoController.$inject = ['OwnerService', '$stateParams', '$state', '$timeout'];
export {OwnerInfoController};