import angular from 'angular';

import addPopConfiguration from './add-pop-configuration';
import associateVrack from './associate-vrack';
import component from './cloud-connect.component';
import editDescription from './edit-description';
import lockPort from './lock-port';
import regenerateServiceKey from './regenerate-service-key';
import removePopConfiguration from './remove-pop-configuration';
import removeVrack from './remove-vrack';
import routing from './cloud-connect.routing';
import sendServiceKey from './send-service-key';
import service from './cloud-connect.service';
import unlockPort from './unlock-port';
import viewServiceKey from './view-service-key';

import datacenterAdd from './datacenter/add';
import datacenterAddRouting from './datacenter/add-routing';
import removeDatacenterConfiguration from './datacenter/remove-datacenter';

const moduleName = 'ovhCloudConnect';

angular
  .module(moduleName, [
    addPopConfiguration,
    associateVrack,
    datacenterAdd,
    datacenterAddRouting,
    editDescription,
    lockPort,
    regenerateServiceKey,
    removeDatacenterConfiguration,
    removePopConfiguration,
    removeVrack,
    unlockPort,
    viewServiceKey,
    sendServiceKey,
  ])
  .config(routing)
  .component('cloudConnect', component)
  .service('cloudConnectService', service)
  .run(/* @ngTranslationsInject:json ./translations */);

export default moduleName;
