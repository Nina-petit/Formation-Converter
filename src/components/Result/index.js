import React from 'react';

import PropTypes from 'prop-types';

import './result.scss';

const Result = ({ value, currency }) => (
  <section className="result">
    <p className="result__value">{value}</p>
    <p className="result__currency">{currency}</p>
  </section>
);

Result.propTypes = {
  value: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};

export default Result;
