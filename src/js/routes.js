function routerConfig ($stateProvider , $urlRouterProvider) {

  $stateProvider
     .state('root', {
       abstract: true,
       templateUrl: 'templates/root.tpl.html',
       controller: 'RootController as root'
     })

     .state('root.home', {
       url: '/home',
       templateUrl: 'templates/home.tpl.html',
       controller: 'HomeController as home'
     })
     .state('root.owners', {
      url: '/owners',
      templateUrl: 'templates/ownerList.tpl.html',
      controller: 'OwnerListController as ownList'
    })
     .state('root.ownerNew', {
      url: '/owners/new',
      templateUrl: 'templates/ownerNew.tpl.html',
      controller: 'OwnerNewController as ownNew'
     })
     .state('root.ownerInfo', {
      url: '/owners/:id', 
      templateUrl: 'templates/ownerInfo.tpl.html',
      controller: 'OwnerInfoController as ownInfo'
     })
     .state('root.login', {
      url: '/login',
      templateUrl: 'templates/login.tpl.html',
      controller: 'LoginController as login'
     })

     .state('root.reports', {
      url: '/reports',
      templateUrl: 'templates/reportList.tpl.html', 
      controller: 'ReportListController as reportList'
     })
     .state('root.reports.newReport', {
      url: '/reports/:date', 
      templateUrl: 'templates/reportNew.tpl.html',
      controller: 'ReportNewController as reportNew'
     })


     // $urlRouterProvider.otherwise('/home');
};

routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
export { routerConfig };