import angular from "angular";
import {routerConfig} from "./routes";
import 'angular-ui-router';


import {addController} from "./controllers/add";
import {homeController} from "./controllers/home";
import {singleController} from './controllers/single';
import {listController} from './controllers/list';
import {serverService} from './services/server';


angular
  .module('app', ['ui.router'])
  .config(routerConfig)
  .controller('addController', addController)
  .controller('homeController', homeController)
  .controller('singleController', singleController)
  .controller('listController', listController)
  .service('serverService', serverService)