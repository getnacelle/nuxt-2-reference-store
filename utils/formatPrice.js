export const formatPrice = ({ price, locale, currencyCode }) => {
  return Intl.NumberFormat(locale || 'en-US', {
    style: 'currency',
    currency: currencyCode || 'USD'
  }).format(price);
};
