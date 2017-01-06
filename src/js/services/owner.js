function OwnerService ($http, $cookies) {

  const SERVER = "https://beach-house-backend.herokuapp.com/";


  let vm = this;

  vm.login = login;
  vm.isLoggedIn = isLoggedIn;
  vm.isAdmin = isAdmin;
  vm.username = username;
  vm.setOwner = setOwner;
  vm.logout = logout;
  vm.getHeaders = getHeaders;
  vm.getAllOwners = getAllOwners;
  vm.newOwner = newOwner;
  vm.newReport = newReport;
  vm.getAllReports = getAllReports;
  vm.getReport = getReport;
  vm.deleteReport = deleteReport;



// Date Stuff --------------------------------------

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

// Cookies ------------------------------------------

  function isLoggedIn () {
    return $cookies.get('username') ? true : false;
  }

  function isAdmin () {
    return $cookies.get('admin') === 'true';
  }

  function username(){
    return $cookies.get('username');
  }

  function logout () {
    $cookies.remove('username');
    $cookies.remove('access_token');
    $cookies.remove('admin');
  }

  function setOwner (data) {
    $cookies.put('username', data.username);
    $cookies.put('access_token', data.access_token);
    $cookies.put('admin', data.admin);
  }

  // HTTP  ------------------------------

  function login (owner) {
    return $http.post(`${SERVER}login`, owner);
  }

  function getOwner (id) {
    return $http.get(`${SERVER}/owners/${id}`)
  }

  function getAllOwners (){
    return $http.get(`${SERVER}owners`)
  }

  function getAllReports (){
    return $http.get(`${SERVER}comments`)
  }

  function getReport(date){
    return $http.get(`${SERVER}comments/${date}`)
  }

  function getHeaders () {
    let token = $cookies.get('access_token');
    return {
      Authorization: `Bearer ${token}`
    };
  }

  function newOwner (info){
    let req = {
      url: `${SERVER}owners`,
      data: info,
      method: 'POST',
      headers: vm.getHeaders()
    };
    return $http(req)
  }

  function newReport (info){
    let req = {
      url: `${SERVER}comments`,
      data: info,
      method: 'POST',
      headers: vm.getHeaders()
    };
    return $http(req)
  }

  function deleteReport (id){
    let req = {
      url: `${SERVER}comments/${id}`,
      method: 'DELETE',
      headers: vm.getHeaders()
    };
    return $http(req);
  }

// ----------------------------------

};

OwnerService.$inject = ['$http', '$cookies'];
export { OwnerService };