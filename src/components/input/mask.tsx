export const MaskOnlyNumber = (text: string) => {
  const regex = /^\d*$/;
  if (!regex.test(text)) {
    return text.slice(0, -1);
  }
  return text;
};
