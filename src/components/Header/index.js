import React from 'react';

import PropTypes from 'prop-types';

import './header.scss';

const Header = ({ title, baseAmount, currency }) => (
  <header className="header">
    <h1 className="header__title">{title}</h1>
    <p className="header__amount">{baseAmount} {currency}</p>
  </header>
);

Header.defaultProps = {
  baseAmount: 10,
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  baseAmount: PropTypes.number,
  currency: PropTypes.string.isRequired,
};

export default Header;
