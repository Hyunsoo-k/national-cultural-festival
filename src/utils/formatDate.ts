export const formatDate = (date: number) => {
  const stringDate = date.toString();
  const year = stringDate.slice(0, 4);
  const month = stringDate.slice(4, 6);
  const day = stringDate.slice(6, 8);

  return `${year}-${month}-${day}`;
};