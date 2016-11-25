function singleController (serverService, $stateParams, $state) {
	let vm = this;
	vm.deleteContact = deleteContact;
	vm.gotoHome = gotoHome;

	function init(){
	    serverService.getContact($stateParams.id).then((resp) => {
	  		vm.contact = resp.data
	  			  	console.log(vm.contact);
	  	});
	}
	init();


	function gotoHome(){
		$state.go('home.list');
	}

  function deleteContact(contact) {
  	serverService.deleteContact(contact._id).then((resp) => {
  		$state.go('home.list')
  	});
  }
};

singleController.$inject = ['serverService', '$stateParams', '$state'];
export {singleController};