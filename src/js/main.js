import angular from "angular";
import {routerConfig} from "./routes";
import 'angular-ui-router';
import 'angular-cookies';

import {HomeController} from "./controllers/home";
import {OwnerInfoController} from './controllers/ownerInfo'
import {OwnerListController} from './controllers/ownerList'
import {OwnerNewController} from './controllers/ownerNew'
import {OwnerService} from './services/owner';


angular
  .module('app', ['ngCookies', 'ui.router'])
  .config(routerConfig)
  .controller('OwnerInfoController', OwnerInfoController)
  .controller('OwnerListController', OwnerListController)
  .controller('OwnerNewController', OwnerNewController)
  .controller('HomeController', HomeController)
  .service('OwnerService', OwnerService)