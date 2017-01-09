import 'datejs';

function ReportListController (OwnerService, $state, $timeout, $rootScope) {
  	let vm = this;
  	vm.gotoSingle = gotoSingle;
  	vm.toggleComment = toggleComment;
  	vm.deleteReport = deleteReport;
  	vm.loading=false;
  	vm.deleteCheck = false;

	function init() {
		// get previous sundays
	  	let sundays = previousSundays(0, 9);

	  	// set array of objects
	  	vm.reportsArray = [];
	  	sundays.forEach(function(element, index){
	  		vm.reportsArray[index]={};
	  		vm.reportsArray[index].date = element;
	  		vm.reportsArray[index].month = element.getShortMonthName();
	  		vm.reportsArray[index].year = element.getFullYear();
	  		vm.reportsArray[index].day = element.getDate();
	  	})
		// get data
		let timeoutId = $timeout(function(){
							vm.loading=true;
							}, 1000);
	  	OwnerService.getAllReports().then((resp) => {
	  		$timeout.cancel(timeoutId);
	  		vm.loading=false;
	  		vm.storedReports = resp.data
	  		vm.reportsArray.forEach(function(arrayElement){
	  			arrayElement.exist = false;
	  			vm.storedReports.forEach(function(storedElement){
	  				if (arrayElement.day === storedElement.day && arrayElement.month === storedElement.month && arrayElement.year === storedElement.year){
	  					arrayElement.exist = true;
	  					arrayElement = Object.assign(arrayElement, storedElement);
	  				}
	  			})
	  		})
	  	}, (reject) =>{
	  		vm.loading=false;
	  		console.log(reject)
	  	});
  	}

  	init();


	$rootScope.$on('$stateChangeStart', (event, toState, toParams, fromState) =>{
	    if (fromState.name == "root.reports.newReport"){
	    	init();
	   	}
	  })


// #/reports/{{report.year}}-{{report.month}}-{{report.day}}"

	function gotoSingle(report){
		$state.go('root.reports.newReport', {'date': report.year+'-'+report.month+'-'+report.day})
	}

	function toggleComment(report){
		report.clicked = !report.clicked;	
	}


	function previousSundays(first, last){
		var sunArray = [];
		for (var i=first; i<=last; i++){
			let date = Date.sunday().add(-7*i).days();
			sunArray.push(date)
		}
		return sunArray;
	}

	function deleteReport(){

		let report = vm.report;
		OwnerService.deleteReport(report.id).then((resp) => {
				report.exist = false;
				vm.deleteCheck=false;
			}, (reject) => {
				console.log(reject)
			})

	}


};

ReportListController.$inject = ['OwnerService', '$state', '$timeout', '$rootScope'];
export {ReportListController};