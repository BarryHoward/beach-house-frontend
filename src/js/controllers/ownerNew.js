function OwnerNewController (OwnerService, $state) {
  let vm = this;

  vm.newOwner = newOwner;
  vm.totalCheck = totalCheck;
  vm.validUserName = validUserName;
  vm.validEmail = validEmail;
  vm.validPassword = validPassword;



	function init(){
		if(!OwnerService.isAdmin()){
			$state.go('root.owners');
		}

		vm.error = {};
		vm.class ={};

		vm.validEmail("");
		vm.validUserName("")
		vm.validPassword("")

		vm.click = false;
		vm.class.submit = "is-danger";
	}

	init ();


	function newOwner(owner) {
		console.log(vm.click)
		if (vm.click){
			OwnerService.newOwner(owner).then((resp) => {
				console.log(resp)
				$state.go('root.owners')
			}, (reject) => {
				console.log("Only Admins can create Users", reject)
			})
		}
  	}


	function totalCheck(error){
		if (!vm.error.name && !vm.error.email && !vm.error.password){
			vm.click = true;
			vm.class.submit = "is-success";
			
		} else {
			vm.click =false;
			vm.class.submit = "is-danger";
		}

	}

	function validUserName(name){
		if (name===""){
			vm.error.username = "Must enter a name";
		} else {
			vm.error.username =null;
		}
		vm.totalCheck(vm.error);

	}
	function validEmail(email){
		if (email){
			if (!email.includes("@")){
				vm.error.email = "Must enter a valid email address";
			} else {
				vm.error.email =null;
			}
		} else {
			vm.error.email = "Email address cannot be left empty";
		}
		vm.totalCheck(vm.error);
	}

	function validPassword(password){
		if (!password){
			vm.error.password = "Password must be at least 7 characters long"
		} else if (password.length<7){
			vm.error.password = "Password must be at least 7 characters long"
		} else {
			vm.error.password = null;
		}

		vm.totalCheck(vm.error);
	}

	// function validPhone(number){
	// 	var numArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '-', '(', ')'];
	// 	var valid = true;

	// 	if (number){
	// 		for (var i=0; i<number.length; i++){
	// 			if (!numArray.includes(number[i])){
	// 				valid = false;
	// 			}
	// 		}
	// 		if (number.length<10 || number.length>15){
	// 			valid = false;
	// 		}

	// 		if (valid){
	// 			vm.error.phone = null;
	// 		} else {
	// 			vm.error.phone = "Must enter a valid phone number";
	// 		}
	// 	} else {
	// 		valid = false;
	// 		vm.error.phone = "Must enter a valid phone number";
	// 	}
	// }

	// function validCity(text){
	// 	if (!text){
	// 		vm.error.city = "Must enter a valid city";
	// 	} else {
	// 		vm.error.city=null;
	// 	}
	// 	vm.totalCheck(vm.error);
	// }

	// function validState(text){
	// 	if (!text){
	// 		vm.error.state = "Must enter a valid state";
	// 	} else {
	// 		vm.error.state =null;
	// 	}
	// 	vm.totalCheck(vm.error);
	// }

}

OwnerNewController.$inject = ['OwnerService', '$state'];
export {OwnerNewController};