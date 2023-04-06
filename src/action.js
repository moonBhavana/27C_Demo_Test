
export const DEPOSIT = 'DEPOSIT';
export const CREDIT = 'CREDIT';

export const deposit = (amount) => ({
  type: DEPOSIT,
  amount
});

export const credit = (amount) => ({
  type: CREDIT,
  amount
});