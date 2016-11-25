const SERVER = "https://class-server.herokuapp.com/collections/barry-detail-app/";


function serverService ($http){

	this.allContacts = function(){
		return $http.get(SERVER);
	}

	this.getContact = function(id){
		return $http.get(SERVER + id);
	}

	this.addContact = function(contact){
		return $http.post(SERVER, contact);
	}

	this.deleteContact = function(id){
		return $http.delete(SERVER + id);
	}

}

serverService.$inject = ['$http'];

export {serverService};