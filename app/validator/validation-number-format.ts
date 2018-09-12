/**
 * 数値のフォーマットバリデーター
 * @param {string} value
 * @returns {boolean}
 */
const validationNumberFormat = (value: string): boolean => {
  const num = Number.parseInt(value, 10);

  if (Number.isInteger(num)) {
    return true;
  }

  return false;
};

export { validationNumberFormat };
