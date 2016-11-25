function listController (serverService) {
  let vm = this;

	function init() {
  	serverService.allContacts().then((resp) => {
  		vm.contacts = resp.data
  	});
  }

  init();

};

listController.$inject = ['serverService'];
export {listController};