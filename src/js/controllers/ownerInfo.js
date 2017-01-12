function OwnerInfoController (OwnerService, $stateParams, $state, $timeout) {
	let vm = this;

  vm.loading=false;
  vm.updateOwner = updateOwner;
  vm.deletePerson = deletePerson;

	function init(){
    let timeoutId = $timeout(function(){
          vm.loading=true;
          }, 1000);
    OwnerService.getOwner($stateParams.id).then((resp) => {
        $timeout.cancel(timeoutId);
        console.log(resp.data)
        vm.owner = resp.data.user;
        vm.people = resp.data.people;
        vm.loading=false;
      }, (reject) => {
        $timeout.cancel(timeoutId);
        vm.loading=false;
	  	});
	}
	init();

  function updateOwner(owner){
    owner.interval_1=Number(owner.interval_1);
    owner.interval_2=Number(owner.interval_2);
    owner.interval_3=Number(owner.interval_3);
    owner.people = vm.people;
    console.log(owner)
    OwnerService.updateOwner(owner).then((resp)=>{
      console.log(resp)
      init();
    }, (reject)=>{
      console.log(reject)
    })
  }

  function deletePerson(person){
    OwnerService.deletePerson(person.id).then((resp)=>{
      var index = vm.people.indexOf(person);
      vm.people.splice(index, 1);
      console.log(resp)
    }, (reject)=>{
      var index = vm.people.indexOf(person);
      vm.people.splice(index, 1);
      console.log(reject)
    })
  }


  	// function deleteOwner($stateParams.id) {
  	// 	OwnerService.deletePerson(id).then((resp) => {
  	// 	$state.go('home.list')
  	// });

  	// function updateOwner(){
  	// 	vm.owner = {}; // set params
  	// 	OwnerService.updateOwner($stateParams.id, vm.owner)
  	// }

};

OwnerInfoController.$inject = ['OwnerService', '$stateParams', '$state', '$timeout'];
export {OwnerInfoController};