import React from 'react';
import { getPaymentMethods } from '../../api';

export function ChooseCurrency() {
  const currencies = getPaymentMethods();
  console.log(currencies);

  return (
    <select value="">
      {currencies.map(currency => (
        <option value={currency}>
          {currency}
        </option>
      ))}
    </select>
  );
}