function CommentListController (OwnerService) {
  	let vm = this;

	function init() {
	  	OwnerService.getAllOwners().then((resp) => {
	  		vm.comment = resp.data
	  	});
  	}

  	init();

};

CommentListController.$inject = ['OwnerService'];
export {CommentListController};