export const encodeBase62 = (num: number): string => {
  const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";

  if (num === 0) {
    return "0";
  };

  while (num) {
    const remainder = num % 62;
    result = chars[remainder] + result;
    num = Math.floor(num / 62);
  }

  return result;
};
