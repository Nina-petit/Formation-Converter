/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
// == Import npm
import React from 'react';

import Header from 'src/components/Header';
import Currencies from 'src/components/Currencies';
import Result from 'src/components/Result';
import Toggler from 'src/components/Toggler';

import currenciesList from 'src/data/currencies';

// == Import
import './app.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      baseAmount: 1,
      selectedCurrency: 'Australian Dollar',
    };
    this.handleToggleClick = this.handleToggleClick.bind(this);
    this.handleCurrencyClick = this.handleCurrencyClick.bind(this);
  }

  handleToggleClick() {
    this.setState({
      open: !this.state.open,
    });
  }

  handleCurrencyClick(currency) {
    this.setState({
      selectedCurrency: currency,
    });
  }

  makeConversion() {
    // eslint-disable-next-line max-len
    const foundCurrency = currenciesList.find((currency) => currency.name === this.state.selectedCurrency);
    const foundRate = foundCurrency.rate;
    const result = this.state.baseAmount * foundRate;
    return Math.round(result * 100) / 100;
  }

  render() {
    const convertedAmount = this.makeConversion();

    return (
      <div className="app">
        <Header title="Converter" baseAmount={this.state.baseAmount} currency="euro" />
        <Toggler
          isOpen={this.state.open}
          onToggle={this.handleToggleClick}
        />
        {this.state.open
        && (
          <Currencies
            onCurrencyClick={this.handleCurrencyClick}
            title="Currencies"
            currencies={currenciesList}
          />
        )}
        <Result value={convertedAmount} currency={this.state.selectedCurrency} />
      </div>
    );
  }
}

// == Export
export default App;
