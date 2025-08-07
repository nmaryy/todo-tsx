export const lengthMeasure = <T extends { state: string }>(
  items: Array<T>,
  state: string
) => {
  const length = items.filter((item) => item.state === state).length;

  return length;
};

export const variables = {
  all: 'ALL',
  active: 'ACTIVE',
  compeleted: 'COMPELETED',
};
