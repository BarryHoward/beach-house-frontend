import 'datejs';

function ReportNewController ($state, $stateParams, OwnerService, $scope) {
  let vm = this;

  vm.newReport = newReport;
  vm.totalCheck = totalCheck;
  vm.gotoList = gotoList;


	function init(){
		if(!OwnerService.isLoggedIn()){
			$scope.$parent.$parent.root.logOpen = true;
			$state.go('root.reports');
		} else{
			vm.submit = "is-danger";
			vm.click = false;
			vm.date = Date.parse($stateParams.date)
			vm.report = {};
	  		vm.report.month = vm.date.getShortMonthName();
	  		vm.report.year = vm.date.getFullYear();
	  		vm.report.day = vm.date.getDate();

	  		OwnerService.getReport($stateParams.date).then((resp) => {
	  			vm.report = resp.data;
	  			vm.totalCheck();
	  		}, (reject) =>{
	  			console.log(reject)
	  		})
	  	}

	}

	init ();


	function newReport(report){
		vm.report = report;
		vm.totalCheck();
		if (vm.click){
			if (!report.content){
				report.content = "No comment";
			}
			OwnerService.newReport(report).then((resp) => {
				report.id = resp.data.id;
				report.users_id = resp.data.users_id;
				report.exist = true;
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

	function gotoList(){
		$state.go('root.reports');
	}
	


};

ReportNewController.$inject = ['$state', '$stateParams', 'OwnerService', '$scope'];
export {ReportNewController};