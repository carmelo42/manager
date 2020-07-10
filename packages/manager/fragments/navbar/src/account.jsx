import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { capitalize, truncate } from 'lodash-es';

function NavbarAccount({ user, onToggle }) {
  const { t } = useTranslation();
  const firstName = capitalize(user.firstname);
  const lastName = truncate(capitalize(user.name), {
    length: 10,
  });
  return (
    <button
      className="oui-navbar-link oui-navbar-link_icon oui-navbar-link_tertiary"
      aria-label={t('navbar_account')}
      onClick={onToggle}
    >
      <i className="oui-icon oui-icon-user_extra-thin" aria-hidden="true"></i>
      {`${firstName} ${lastName}`}
    </button>
  );
}

NavbarAccount.propTypes = {
  user: PropTypes.object.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default NavbarAccount;
