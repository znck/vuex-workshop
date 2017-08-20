export const currency = (amount) => {
  if (typeof (amount) === 'number') {
    return `₹${amount.toFixed(2)}`
  }

  return '₹0.00'
}