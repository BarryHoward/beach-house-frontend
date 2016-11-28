function CommentListController (OwnerService) {
  	let vm = this;

	function init() {
	  	OwnerService.getAllComments().then((resp) => {
	  		vm.comments = resp.data
	  	});
  	}

  	init();

};

CommentListController.$inject = ['OwnerService'];
export {CommentListController};