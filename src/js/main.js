import angular from "angular";
import {routerConfig} from "./routes";
import 'angular-ui-router';

import {homeController} from "./controllers/home";
import {OwnerInfoController} from './controllers/ownerInfo'
import {OwnerListController} from './controllers/ownerList'
import {OwnerNewController} from './controllers/ownerNew'
import {OwnerService} from './services/owner';


angular
  .module('app', ['ui.router'])
  .config(routerConfig)
  .controller('OwnerInfoController', OwnerInfoController)
  .controller('OwnerListController', OwnerListController)
  .controller('OwnerNewController', OwnerNewController)
  .service('OwnerService', OwnerService)