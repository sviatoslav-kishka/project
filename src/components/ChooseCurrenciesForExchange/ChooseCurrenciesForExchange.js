import React, { useState, useEffect } from 'react';
import { getCalculatedPayMethod } from '../../api';
import { ChoosePaymentMethod } from '../ChoosePaymentMethod';
import { CurrencyAmount } from '../CurrencyAmount';
import './style.css';

export function ChooseCurrenciesForExchange() {
  const [invoiceCurrencyId, setInvoiceCurrencyId] = useState(0);
  const [withdrawCurrencyId, setWithdrawCurrencyId] = useState(0);
  const [invoiceAmount, setInvoiceAmount] = useState('');
  const [withdrawAmount, setwithdrawAmount] = useState('');

  useEffect(() => {
    async function calculateAmount() {
      const calculatedPayMethod = await (getCalculatedPayMethod('withdraw', withdrawAmount, invoiceCurrencyId, withdrawCurrencyId));

      setwithdrawAmount(calculatedPayMethod);
    }

    calculateAmount();
  }, [invoiceCurrencyId, withdrawCurrencyId]);

  async function setOppositeAmount(event, payMethod) {
    const calculatedAmount = await (getCalculatedPayMethod(payMethod, event.target.value, invoiceCurrencyId, withdrawCurrencyId));

    if (payMethod === 'invoice') {
      if (calculatedAmount) {
        setwithdrawAmount(calculatedAmount);
      } else {
        setwithdrawAmount(0);
      }
    } else {
      if (calculatedAmount) {
        setInvoiceAmount(calculatedAmount);
      } else {
        setInvoiceAmount(0);
      }
    }
  }

  const changeInvoicePayMethod = (event) => {
    setInvoiceCurrencyId(event.target.value);
  };

  const changeWithdrawPayMethod = (event) => {
    setWithdrawCurrencyId(event.target.value);
  };

  const changeInvoiceAmount = (event) => {
    setInvoiceAmount(event.target.value);
    setOppositeAmount(event, 'invoice');
  };

  const changeWithDrawAmount = (event) => {
    setwithdrawAmount(event.target.value);
    setOppositeAmount(event, 'withdraw');
  };

  return (
    <form className="exchange-form">
      <div className="currencies-container">
        <div className="currency-container currency-container--sell">
          <h3>Sell</h3>
          <ChoosePaymentMethod
            payMethodId={invoiceCurrencyId}
            onChangePayMethod={changeInvoicePayMethod}
          />
          <CurrencyAmount
            calculatedAmount={invoiceAmount}
            onChangeAmount={changeInvoiceAmount}
          />
        </div>
        <div className="currency-container currency-container--buy">
          <h3>Buy</h3>
          <ChoosePaymentMethod
            payMethodId={withdrawCurrencyId}
            onChangePayMethod={changeWithdrawPayMethod}
          />
          <CurrencyAmount
            calculatedAmount={withdrawAmount}
            onChangeAmount={changeWithDrawAmount}
          />
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
