const BASE_URL = 'https://involve.software/test_front/api';

export const getPaymentMethods = () => fetch(`${BASE_URL}/payMethods`)
  .then(response => response.json())
  .then(result => result.invoice);

export const getCalculatedPayMethod = (
  basePayMethod,
  amount,
  invoicePayMethodId,
  withdrawPayMethodId,
) => {
  return fetch(`${BASE_URL}/payMethods/calculate?base=${basePayMethod}&amount=${amount}&invoicePayMethod=${invoicePayMethodId}&withdrawPayMethod=${withdrawPayMethodId}`)
    .then(response => response.json())
    .then(result => result.amount);
};
