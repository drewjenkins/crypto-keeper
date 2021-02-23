export const formatAmount = (amount) => amount.toFixed(4);

export const formatCurrency = (amount) => `$${parseFloat(amount).toFixed(2)}`;

export const formatDate = (timestamp) => new Date(timestamp).toDateString();

export const normalize = (str) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^a-z]/, "");
