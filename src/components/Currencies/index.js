import React from 'react';

import PropTypes from 'prop-types';

import './currencies.scss';

const Currencies = ({ title, currencies, onCurrencyClick }) => (
  <section className="currencies">
    <h2 className="currencies__title">{title}</h2>
    <ul className="currencies__list">
      {currencies.map((currency) => (
        <React.Fragment key={currency.name}>
          <li
            name={currency.name}
            onClick={() => onCurrencyClick(currency.name)}
            className="currencies__item"
          >{currency.name}
          </li>
        </React.Fragment>
      ))}
    </ul>
  </section>
);

Currencies.propTypes = {
  title: PropTypes.string.isRequired,
  currencies: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Currencies;
