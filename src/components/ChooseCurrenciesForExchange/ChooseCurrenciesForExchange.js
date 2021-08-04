import React from 'react'
import { ChooseCurrency } from '../ChooseCurrency';
import { getPaymentMethods } from '../../api';
import './style.css';

export function ChooseCurrenciesForExchange() {
  return (
    <form className="exchange-form">
      <div className="currencies-container">
        <div className="currency-container currency-container--sell">
          <h3>Sell</h3>
          <ChooseCurrency />
          <input></input>
        </div>
        <div className="currency-container currency-container--buy">
          <h3>Buy</h3>
          <ChooseCurrency />
          <input></input>
        </div>
      </div>
      <button
        type="submit"
      >
        Exchange
      </button>
    </form>
  );
}