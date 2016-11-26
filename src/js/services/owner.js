const SERVER = "https://beach-house-backend.herokuapp.com/";



function OwnerService ($http, $cookies, SERVER) {

  this.login = login;
  this.create = create;
  this.isLoggedIn = isLoggedIn;
  this.isAdmin = isAdmin;
  this.setOwner = setOwner;
  this.logout = logout;
  this.getHeaders = getHeaders;

  function create (owner) {
    return $http.post(`${SERVER}/owners`, owner);
  };

  function login (owner) {
    return $http.post(`${SERVER}/login`, owner);
  }

  function isLoggedIn () {
    return $cookies.get('username') ? true : false;
  }

  function isAdmin () {
    return $cookies.get('admin') === 'true';
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

  function getOwner (id) {
    return $http.get(`${SERVER}/owners/${id}`)
  }

  function getAllOwners (){
    return $http.get(`{SERVER}/owners`)
  }

  function getHeaders () {
    let token = $cookies.get('access_token');
    return {
      Authorization: `Bearer ${token}`
    };
  }

  function newOwner (info){
    return $http.post(`{SERVER}/owners`, info)
  }

};

OwnerService.$inject = ['$http', '$cookies', 'SERVER'];
export { OwnerService };