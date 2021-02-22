export const formatAmount = (amount) => amount.toFixed(4);

export const formatCurrency = (amount) => `$${amount.toFixed(2)}`;

export const formatDate = (timestamp) => new Date(timestamp).toDateString();
