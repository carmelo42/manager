import React, { useState } from 'react';
import PropTypes from 'prop-types';
import style from './navbar.scss';

function HamburgerMenu({ children }) {
  const [opened, setOpened] = useState(false);
  return (
    <div>
      <button
        className="oui-navbar-toggler oui-navbar-toggler_button"
        onClick={() => setOpened(!opened)}
        aria-expanded={opened}
      >
        <span className="oui-navbar-toggler__hamburger">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>
      <div
        className={`oui-navbar-menu_toggle oui-navbar-menu oui-navbar-menu_fixed ${opened &&
          style.hamburgerOpen}`}
        aria-expanded="true"
        role="menu"
      >
        {children}
      </div>
    </div>
  );
}

HamburgerMenu.propTypes = {
  children: PropTypes.node,
};

export default HamburgerMenu;
