import 'script-loader!jquery'; // eslint-disable-line
import 'script-loader!lodash'; // eslint-disable-line

import angular from 'angular';
import ngOvhApiWrappers from '@ovh-ux/ng-ovh-api-wrappers';
import ovhManagerFreeFax from '@ovh-ux/manager-freefax';
import { Environment, detectUserLocale } from '@ovh-ux/manager-config';

Environment.setUserLocale(detectUserLocale());

angular.module('freefaxApp', [ngOvhApiWrappers, ovhManagerFreeFax]);
