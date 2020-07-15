import controller from './cloud-connect.controller';
import template from './template.html';

export default {
  bindings: {
    cloudConnect: '<',
    cloudConnectId: '<',
    updateDescription: '<',
    user: '<',
  },
  controller,
  template,
};
