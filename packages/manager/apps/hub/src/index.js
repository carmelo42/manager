import 'script-loader!jquery'; // eslint-disable-line
import 'whatwg-fetch';
import registerApplication from '@ovh-ux/ufrontend/application';

registerApplication().then(({ region, ufrontend }) => {
  import(`./config-${region}`)
    .catch(() => {})
    .then(() => import('./app.module'))
    .then(({ default: application }) => {
      const injector = angular.bootstrap(document.body, [application], {
        strictDi: true,
      });
      ufrontend.listen(({ id, locale }) => {
        if (id === 'locale.change') {
          const rootScope = injector.get('$rootScope');
          rootScope.$emit('lang.onChange', { lang: locale });
        }
      });
    });
});
