function OwnerNewController (OwnerService, $state) {
  let vm = this;

  // vm.addContact = addContact;
  // vm.totalCheck = totalCheck;
  // vm.validName = validName;
  // vm.validPhone = validPhone;
  // vm.validEmail = validEmail;
  // vm.validState = validState;
  // vm.validCity = validCity;
  // vm.gotoHome = gotoHome;

  function newOwner(owner) {
  	// if (vm.click){
	  	OwnerService.newOwner(contact).then((resp) => {
	  		$state.go('home.owners')
	  	});
	// }
  }

  function init(){
			vm.error = {};
			vm.class ={};

			// vm.validName("");
			vm.validEmail("");
			vm.validPassword("")
			vm.validUserName("")
			// vm.validPhone("");
			// vm.validState("");
			// vm.validCity("");

			vm.click = false;
			vm.class.submit = "is-danger";
	}

	init ();


	// function totalCheck(error){
	// 	if (!vm.error.name && !vm.error.email){
	// 		vm.click = true;
	// 		vm.class.submit = "is-success";
			
	// 	} else {
	// 		vm.click =false;
	// 		vm.class.submit = "is-danger";
	// 	}

	// }

	// function validName(name){
	// 	if (name === ""){
	// 		vm.error.name = "Must enter a name";

	// 	} else {
	// 		vm.error.name =null;

	// 	}
	// 	vm.totalCheck(vm.error);

	// }
	// function validEmail(email){
	// 	if (email){
	// 		if (!email.includes("@")){
	// 			vm.error.email = "Must enter a valid email address";
	// 		} else {
	// 			vm.error.email =null;
	// 		}
	// 	} else {
	// 		vm.error.email = "Email address cannot be left empty";
	// 	}
	// 	vm.totalCheck(vm.error);
	// }

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