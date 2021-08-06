import React, { useState, useEffect } from 'react';
import { getPaymentMethods, getCalculatedPayMethod } from '../../api';

export function ChoosePaymentMethod({ payMethodId, onChangePayMethod }) {
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    async function getAllCurrencies() {
      const currenciesList = await (getPaymentMethods());

      setCurrencies(currenciesList);
    }

    getAllCurrencies();
  }, []);

  return (
    <select
      value={payMethodId}
      onChange={onChangePayMethod}
    >
      <option
        value={0}
        disabled
      >
        Choose Pay Method
      </option>
      {currencies.map(currency => (
        <option
          value={currency.id}
        >
          {currency.name}
        </option>
      ))}
    </select>
  );
}
