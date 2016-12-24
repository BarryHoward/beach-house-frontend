import 'datejs';

function CommentListController (OwnerService) {
  	let vm = this;

  	Date.prototype.monthNames = [
	    "January", "February", "March",
	    "April", "May", "June",
	    "July", "August", "September",
	    "October", "November", "December"
	];

	Date.prototype.getMonthName = function() {
	    return this.monthNames[this.getMonth()];
	};
	Date.prototype.getShortMonthName = function () {
	    return this.getMonthName().substr(0, 3);
	};

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
	  	OwnerService.getAllComments().then((resp) => {
	  		vm.storedReports = resp.data
	  		vm.reportsArray.forEach(function(arrayElement){
	  			vm.storedReports.forEach(function(storedElement){
	  				if (storedElement.week_of){
	  					let date = Date.parse(storedElement.week_of.slice(0, -1));
	  					arrayElement.exist = Date.equals(arrayElement.date, date) || arrayElement.exist
	  					arrayElement = Object.assign(arrayElement, storedElement);
	  				}
	  			})
	  		})
	  	});


  	}

  	init();






	function previousSundays(first, last){
		var sunArray = [];
		for (var i=first; i<=last; i++){
			let date = Date.sunday().add(-7*i).days();
			sunArray.push(date)
		}
		return sunArray;
	}



};

CommentListController.$inject = ['OwnerService'];
export {CommentListController};