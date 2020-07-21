import controller from './lock-port.controller';
import template from './template.html';

export default {
  bindings: {
    cloudConnectId: '<',
    goBack: '<',
    interfaceId: '<',
  },
  controller,
  template,
};