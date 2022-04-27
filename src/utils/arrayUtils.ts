export const shuffleArrayElements = (array: any[]): any[] => {
  const suffledArray: any[] = array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  return suffledArray;
};
