import 'datejs';

function CommentNewController ($state, $stateParams, OwnerService) {
  let vm = this;

  vm.newComment = newComment;
  vm.totalCheck = totalCheck;


	function init(){
		if(!OwnerService.isLoggedIn()){
			$state.go('root.comments');
		}

		vm.submit = "is-danger";
		vm.click = false;
		vm.date = Date.parse($stateParams.date)
		console.log(vm.date)
	}

	init ();

	function newComment(comment){
		comment.week_of = vm.date;
		vm.totalCheck();
		console.log(vm.click)
		if (vm.click){
			OwnerService.newComment(comment).then((resp) => {
				console.log(resp.data)
				$state.go('root.comments')
			}, (reject) => {
				console.log(reject)
			})
		}
	}

	function totalCheck(){
		let keys = ['clean', 'repair', 'beds', 'towels', 'windows', 'supplies'];
		let filled = true;

		for (var i=0; i<keys.length; i++){
			if (vm.comment[keys[i]] === undefined){
				filled = false;
			}
		}

		if (vm.comment.week_of && filled){
			vm.click = true;
			vm.submit = "is-success";
		} else {
			vm.click =false;
			vm.submit = "is-danger";
		}

	}


};

CommentNewController.$inject = ['$state', '$stateParams', 'OwnerService'];
export {CommentNewController};