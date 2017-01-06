function LoginController ($state, OwnerService, $rootScope) {
  let vm = this;

  vm.login = login;
  // vm.logout = logout;


  function login(owner){
  	OwnerService.login(owner).then((resp) => {
  		OwnerService.setOwner(resp.data);
        $rootScope.$broadcast('loginChange', {});
  		$state.go('root.home')
  	}, (reject) => {
      console.log("Wrong Username or password")
    })
  }

  // $rootScope.$on('$stateChangeStart', (event, toState, toParams, fromState) =>{
  //   vm.prevState=fromState.name;
  // })


};

LoginController.$inject = ['$state', 'OwnerService', '$rootScope'];
export {LoginController};