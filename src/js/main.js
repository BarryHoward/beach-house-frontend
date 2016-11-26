import angular from "angular";
import {routerConfig} from "./routes";
import 'angular-ui-router';
import 'angular-cookies';

import {HomeController} from "./controllers/home";

import {OwnerInfoController} from './controllers/ownerInfo'
import {OwnerListController} from './controllers/ownerList'
import {OwnerNewController} from './controllers/ownerNew'

import {CommentNewController} from './controllers/commentNew'
import {CommentListController} from './controllers/commentList'

import {LoginController} from './controllers/login'
import {OwnerService} from './services/owner';


angular
  .module('app', ['ngCookies', 'ui.router'])
  .config(routerConfig)
  .controller('LoginController', LoginController)
  .controller('OwnerInfoController', OwnerInfoController)
  .controller('OwnerListController', OwnerListController)
  .controller('OwnerNewController', OwnerNewController)
  .controller('CommentNewController', CommentNewController)
  .controller('CommentListController', CommentListController)
  .controller('HomeController', HomeController)

  .service('OwnerService', OwnerService)