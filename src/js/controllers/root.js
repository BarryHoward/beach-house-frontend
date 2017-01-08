function RootController (OwnerService, $rootScope) {
	let vm = this;
	vm.admin = OwnerService.isAdmin();
	vm.loggedIn = OwnerService.isLoggedIn();
	vm.username = OwnerService.username();
	vm.logout = logout;
	vm.openLogin = openLogin;
	vm.closeLogin = closeLogin;
	vm.login = login;
	vm.logOpen = false;
    vm.wrong =false;
    vm.wrongText ="";


	$rootScope.$on('loginChange', (event, data) => {
		vm.loggedIn = OwnerService.isLoggedIn();
		vm.admin = OwnerService.isAdmin();
		vm.username = OwnerService.username();
	});

	function logout(){
	  	OwnerService.logout()
	    $rootScope.$broadcast('loginChange', {});
  	}

  	function openLogin(){
  		vm.logOpen = true;
  	}

  	function closeLogin() {
  		vm.logOpen = false;
  	}

  	function login(owner){
	  	OwnerService.login(owner).then((resp) => {
	  		OwnerService.setOwner(resp.data);
	        $rootScope.$broadcast('loginChange', {});
	        vm.logOpen = false;
	        vm.wrong =false;
	        vm.wrongText ="";
	  	}, (reject) => {
	  		vm.wrong = true;
	      	vm.wrongText = reject.data.text;
	    })
  	}
}

 RootController.$inject = ['OwnerService', '$rootScope'];
 export {RootController};