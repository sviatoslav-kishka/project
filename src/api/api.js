const BASE_URL = 'https://involve.software/test_front/api';

export const getPaymentMethods = async() => {
  const currencies = await fetch(`${BASE_URL}/payMethods`)
    .then(response => response.json())
    .then(result => result.invoice);
  console.log(currencies);
  return currencies;
}
