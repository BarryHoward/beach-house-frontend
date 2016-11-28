import 'datejs';

function CommentNewController ($state, OwnerService) {
  let vm = this;

  vm.newComment = newComment;
  vm.totalCheck = totalCheck;


	function init(){
		if(!OwnerService.isLoggedIn()){
			$state.go('root.comments');
		}

		vm.submit = "is-danger";
		vm.click = false;

		// Date stuff
		vm.date = {};
		vm.date.current = Date.today();
		vm.date.min = Date.today();
		vm.date.max = Date.today();
		let currentDay = vm.date.current.getDay()
		vm.date.min.setDate(vm.date.current.getDate() - currentDay - 14); 
		vm.date.max.setDate(vm.date.min.getDate() + 21);

		vm.date.min = vm.date.min.toJSON().slice(0,10);
		vm.date.max = vm.date.max.toJSON().slice(0,10);
		vm.date.current = vm.date.current.toJSON().slice(0,10);
	}

	init ();

	function newComment(comment){
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

CommentNewController.$inject = ['$state','OwnerService'];
export {CommentNewController};