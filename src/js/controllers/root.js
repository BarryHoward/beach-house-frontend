function RootController (OwnerService, $rootScope, $state) {
	let vm = this;
	vm.admin = OwnerService.isAdmin();
	vm.loggedIn = OwnerService.isLoggedIn();
	vm.username = OwnerService.username();
	vm.userId = OwnerService.userId();
	vm.logout = logout;
	vm.openLogin = openLogin;
	vm.closeLogin = closeLogin;
	vm.login = login;
	vm.logOpen = false;
    vm.wrong =false;
    vm.wrongText ="";
    vm.imageLoad=false;

	$rootScope.$on('loginChange', (event, data) => {
		vm.loggedIn = OwnerService.isLoggedIn();
		vm.admin = OwnerService.isAdmin();
		vm.username = OwnerService.username();
		vm.userId = OwnerService.userId();
	});

	$rootScope.$on('$stateChangeStart', (event, toState, toParams, fromState) =>{
		vm.state = toState.name;
  	})

	function init(){
		setTimeout(function(){
			safeApply(function() {
  				vm.imageLoad = true;
  			});
		}, 10)

		vm.state = $state.current.name;
	}

	init();

	function safeApply(fn) {
	    var phase = $rootScope.$$phase;
	    if(phase == '$apply' || phase == '$digest') {
	      if(fn && (typeof(fn) === 'function')) {
	        fn();
	      }
	    } else {
	      $rootScope.$apply(fn);
	    }
	  };

	//fade in effect
	// var image=document.getElementById('banner-img');
	// console.log(image)
	// image.onload = function (){
	// 	console.log(vm.imageLoad)
	// 	vm.imageLoad = true;
	// 	console.log(vm.imageLoad)
	// }
	// console.log(image)

	// -----------------
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

 RootController.$inject = ['OwnerService', '$rootScope', '$state'];
 export {RootController};