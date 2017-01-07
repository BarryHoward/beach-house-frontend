import angular from "angular";
import {routerConfig} from "./routes";
import 'angular-ui-router';
import 'angular-cookies';

import {RootController} from "./controllers/root"
import {HomeController} from "./controllers/home";

import {OwnerInfoController} from './controllers/ownerInfo'
import {OwnerListController} from './controllers/ownerList'
import {OwnerNewController} from './controllers/ownerNew'

import {ReportNewController} from './controllers/reportNew'
import {ReportListController} from './controllers/reportList'

import {OwnerService} from './services/owner';


angular
  .module('app', ['ngCookies', 'ui.router'])
  .config(routerConfig)
  .controller('RootController', RootController)
  .controller('OwnerInfoController', OwnerInfoController)
  .controller('OwnerListController', OwnerListController)
  .controller('OwnerNewController', OwnerNewController)
  .controller('ReportNewController', ReportNewController)
  .controller('ReportListController', ReportListController)
  .controller('HomeController', HomeController)

  .service('OwnerService', OwnerService)