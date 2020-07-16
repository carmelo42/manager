import get from 'lodash/get';

export default class RemoveVrackCtrl {
  /* @ngInject */
  constructor($translate, cloudConnectService) {
    this.$translate = $translate;
    this.cloudConnectService = cloudConnectService;
  }

  $onInit() {
    this.isLoading = false;
  }

  removeVrack() {
    this.isLoading = true;
    this.cloudConnectService.removeVrack(this.vRackId, this.cloudConnectId)
    .then(() => {
      this.cloudConnectService.getCloudConnect(this.cloudConnectId)
        .then(cloudConnect => {
          cloudConnect.vrack = null;
        });
      return this.goBack(
        this.$translate.instant('cloud_connect_remove_success'),
        'success'
      );
    })
    .catch((error) => this.goBack(
      this.$translate.instant('cloud_connect_remove_error', {
        message: get(error, 'data.message', error.message),
      }),
      'error'
    ))
    .finally(() => {
      this.isLoading = false;
    })
  }
}
