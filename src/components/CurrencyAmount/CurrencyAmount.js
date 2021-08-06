import React, { useState, useEffect } from 'react';

export const CurrencyAmount = ({ calculatedAmount, onChangeAmount }) => {

  return (
    <input
      type="number"
      placeholder="Type amount"
      value={calculatedAmount}
      onChange={onChangeAmount}
    />
  );
};
