import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

function NavbarNotifications({ onToggle }) {
  const { t } = useTranslation();
  return (
    <button
      className="oui-navbar-link oui-navbar-link_icon oui-navbar-link_tertiary"
      aria-label={t('navbar_notifications')}
      onClick={onToggle}
    >
      <span className="oui-icon oui-icon-bell" aria-hidden="true">
        <span className="oui-icon__badge">0</span>
      </span>
    </button>
  );
}

NavbarNotifications.propTypes = {
  onToggle: PropTypes.func.isRequired,
};

export default NavbarNotifications;
