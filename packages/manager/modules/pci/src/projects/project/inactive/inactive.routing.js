export default /* @ngInject */ ($stateProvider) => {
  $stateProvider.state('pci.projects.project.inactive', {
    url: '/inactive',
    views: {
      modal: {
        component: 'pciProjectInactive',
      },
    },
    layout: 'modal',
    params: {
      billingStatus: null,
      projectStatus: null,
    },
    resolve: {
      billingStatus: /* @ngInject */ ($transition$) =>
        $transition$.params().billingStatus,
      goBack: /* @ngInject */ ($window) => () => $window.history.back(),
      goToBilling: /* @ngInject */ ($window, billingUrl) => () =>
        $window.location.assign(billingUrl),
      projectStatus: /* @ngInject */ ($transition$) =>
        $transition$.params().projectStatus,
    },
  });
};
