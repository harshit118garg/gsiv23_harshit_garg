export const reduceTextLength = (title: string) => {
  return title.length > 25 ? `${title.substring(0, 100)}...` : title;
};
