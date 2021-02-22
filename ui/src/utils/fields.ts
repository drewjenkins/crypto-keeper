export const timeField = (overrides = {}) => ({
  width: 150,
  sortComparator: (a, b) =>
    new Date(a).valueOf() < new Date(b).valueOf() ? -1 : 1,
  ...overrides,
});

export const numberField = (overrides = {}) => ({
  sortComparator: (a, b) =>
    Number.parseFloat(a) < Number.parseFloat(b) ? -1 : 1,
  ...overrides,
});

export const currencyField = (overrides = {}) => ({
  sortComparator: (a, b) =>
    Number.parseFloat(a.replace("$", "")) <
    Number.parseFloat(b.replace("$", ""))
      ? -1
      : 1,
  ...overrides,
});
