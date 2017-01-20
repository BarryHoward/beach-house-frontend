function OwnerListController (OwnerService, $timeout, $state) {
  	let vm = this;
  	vm.intArray = [];
  	vm.loading=false;
  	vm.OwnerService = OwnerService;
  	const intNum = 13;

	function init() {
    if(!OwnerService.isLoggedIn()){
      $state.go('root.home');
    } else {
  		let timeoutId = $timeout(function(){
  					vm.loading=true;
  					}, 1000);
  	  	OwnerService.getAllOwners().then((resp) => {
  	  		$timeout.cancel(timeoutId);
  	  		vm.owners = resp.data.user;
  	  		vm.people = resp.data.people;
  	  		vm.loading=false;

  	  		peopleMatch();
  	  		intervalMatch();

  		  	}, (reject) => {
  		  	$timeout.cancel(timeoutId);
  		  	vm.loading=false;
  		});
      }
  	}

  	init();

  	function peopleMatch(){
  		for (var i=0; i<vm.owners.length; i++){
  			vm.owners[i].people = vm.people.filter(function(element){
  				return element.user_id === vm.owners[i].id;
  			})
  		}
  	}

  	function intervalMatch(){
  		for (var i=1; i<=intNum; i++){
 			let currentOwner = vm.owners.filter(function(element){
 				return element.interval_1 === i ||
 					element.interval_2 === i ||
 					element.interval_3 === i;
 			})
  			vm.intArray[i-1]={interval: i, owner: currentOwner[0], clicked: false}
  		}

  		console.log(vm.intArray)
  	}

};

OwnerListController.$inject = ['OwnerService', '$timeout', '$state'];
export {OwnerListController};