import 'datejs';

function ReportListController (OwnerService, $state) {
  	let vm = this;
  	vm.gotoSingle = gotoSingle;
  	vm.toggleComment = toggleComment;

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
	  	OwnerService.getAllReports().then((resp) => {
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
	  	});
  	}

  	init();



// #/reports/{{report.year}}-{{report.month}}-{{report.day}}"

	function gotoSingle(report){
		$state.go('root.newReport', {'date': report.year+'-'+report.month+'-'+report.day})
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



};

ReportListController.$inject = ['OwnerService', '$state'];
export {ReportListController};