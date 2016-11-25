function routerConfig ($stateProvider , $urlRouterProvider) {

  $stateProvider
     .state('home', {
       abstract: true,
       templateUrl: 'templates/home.tpl.html',
       controller: 'homeController as home'
     })

     .state('home.add', {
       url: '/add',
       templateUrl: 'templates/add.tpl.html',
       controller: 'addController as add'
     })
    .state('home.list', {
      url: '/list',
      templateUrl: 'templates/list.tpl.html',
      controller: 'listController as list'
    })
     .state('home.single', {
      url: '/single/:id', 
      templateUrl: 'templates/single.tpl.html',
      controller: 'singleController as single'
     })


     $urlRouterProvider.otherwise('/list');
};

routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
export { routerConfig };