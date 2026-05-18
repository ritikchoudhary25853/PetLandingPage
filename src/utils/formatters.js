export const formatCurrency = (value) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);

export const getAgeLabel = (age) => `${age} ${age === 1 ? "year" : "years"}`;

export const classNames = (...classes) => classes.filter(Boolean).join(" ");
