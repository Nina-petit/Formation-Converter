import React from 'react';
import PropTypes from 'prop-types';

import './toggler.scss';

// Toggle = inverser
const Toggler = ({ isOpen, onToggle }) => (
  <button
    onClick={onToggle}
    className={isOpen ? 'toggler toggler--open' : 'toggler'}
    type="button"
  >
    =
  </button>
);

export default Toggler;
