import 'datejs';

function ReportNewController ($state, $stateParams, OwnerService) {
  let vm = this;

  vm.newReport = newReport;
  vm.totalCheck = totalCheck;


	function init(){
		if(!OwnerService.isLoggedIn()){
			$state.go('root.reports');
		}
		vm.submit = "is-danger";
		vm.click = false;
		vm.date = Date.parse($stateParams.date)
		vm.report = {};
  		vm.report.month = vm.date.getShortMonthName();
  		vm.report.year = vm.date.getFullYear();
  		vm.report.day = vm.date.getDate();

	}

	init ();

	function newReport(report){
		vm.totalCheck();
		console.log(vm.report)
		if (vm.click){
			if (!report.content){
				report.content = "No comment";
			}
			OwnerService.newReport(report).then((resp) => {
				console.log(resp.data)
				$state.go('root.reports')
			}, (reject) => {
				console.log(reject)
			})
		}
	}


	function totalCheck(){
		let keys = ['clean', 'repair', 'beds', 'towels', 'windows', 'supplies'];
		let filled = true;

		for (var i=0; i<keys.length; i++){
			if (vm.report[keys[i]] === undefined){
				filled = false;
			}
		}

		if (filled){
			vm.click = true;
			vm.submit = "is-success";
		} else {
			vm.click =false;
			vm.submit = "is-danger";
		}

	}


};

ReportNewController.$inject = ['$state', '$stateParams', 'OwnerService'];
export {ReportNewController};