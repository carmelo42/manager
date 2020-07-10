import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from 'react-bootstrap/Dropdown';
import style from './navbar.scss';

// @TODO import languages from config
const LANGUAGES = [
  {
    name: 'Deutsch',
    key: 'de_DE',
  },
  {
    name: 'English',
    key: 'en_GB',
  },
  {
    name: 'Español',
    key: 'es_ES',
  },
  {
    name: 'Français',
    key: 'fr_FR',
  },
  {
    name: 'Français (Canadien)',
    key: 'fr_CA',
  },
  {
    name: 'Italiano',
    key: 'it_IT',
  },
  {
    name: 'Lietuviškai',
    key: 'lt_LT',
  },
  {
    name: 'Polski',
    key: 'pl_PL',
  },
  {
    name: 'Português',
    key: 'pt_PT',
  },
  {
    name: 'Suomi',
    key: 'fi_FI',
  },
];

function LanguageMenu({ i18next, language, changeLocale }) {
  const availableLanguage = LANGUAGES.find(({ key }) => key === language);
  return (
    <Dropdown alignRight>
      <Dropdown.Toggle
        className="oui-navbar-link oui-navbar-link_tertiary"
        aria-label={i18next.t('navbar_language_change')}
      >
        {availableLanguage.name}
      </Dropdown.Toggle>
      <Dropdown.Menu className={style.dropdownMenu}>
        <div>
          {LANGUAGES.map(({ name, key }) => (
            <Dropdown.Item
              key={key}
              className="oui-navbar-link oui-navbar-link_tertiary"
              onClick={() => changeLocale(key)}
            >
              {name}
            </Dropdown.Item>
          ))}
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
}

LanguageMenu.propTypes = {
  i18next: PropTypes.object.isRequired,
  language: PropTypes.string.isRequired,
  changeLocale: PropTypes.func.isRequired,
};

export default LanguageMenu;
