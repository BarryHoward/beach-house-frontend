function routerConfig ($stateProvider , $urlRouterProvider) {

  $stateProvider
     .state('root', {
       abstract: true,
       templateUrl: 'templates/root.tpl.html',
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

     .state('root.comments', {
      url: '/comments',
      templateUrl: 'templates/comments.tpl.html', 
      controller: 'CommentListController as comList'
     })
     .state('root.newComment', {
      url: '/comments/new', 
      templateUrl: 'templates/newComment.tpl.html',
      controller: 'CommentNewController as comNew'
     })


     $urlRouterProvider.otherwise('/');
};

routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
export { routerConfig };