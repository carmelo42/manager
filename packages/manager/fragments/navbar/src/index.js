import React from 'react';
import ReactDOM from 'react-dom';
import i18next from 'i18next';
import registerFragment from '@ovh-ux/ufrontend/fragment';
import { initReactI18next } from 'react-i18next';
import Navbar from './navbar.jsx';
import fallbackTranslations from './translations/navbar_fr_FR.json';

registerFragment('navbar').then(({ parent, config, ufrontend }) => {
  const language = localStorage['univers-selected-language'] || 'fr_FR'; // @TODO get locale from config
  import(`./translations/navbar_${language}.json`)
    .catch(() => ({ default: fallbackTranslations }))
    .then(({ default: trads }) => {
      const resources = {
        [language]: {
          translation: trads,
        },
        fallback: {
          translation: fallbackTranslations,
        },
      };
      i18next.use(initReactI18next).init({
        lng: language,
        fallbackLng: 'fallback',
        resources,
      });

      const toggleNotifications = () =>
        ufrontend.emit({
          id: 'notifications.toggle',
        });

      const toggleAccountSidebar = () =>
        ufrontend.emit({
          id: 'account-sidebar.toggle',
        });

      const changeLocale = (locale) =>
        ufrontend.emit({
          id: 'locale.change',
          locale,
        });

      ReactDOM.render(
        <React.StrictMode>
          <Navbar
            i18next={i18next}
            user={config.user}
            language={language}
            toggleNotifications={toggleNotifications}
            toggleAccountSidebar={toggleAccountSidebar}
            changeLocale={changeLocale}
          />
        </React.StrictMode>,
        parent,
      );
    });
});
