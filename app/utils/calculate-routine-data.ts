/**
 * yyyy-mm-dd な now を取得する
 * @returns {string}
 */
const calculateRoutineData = (srm, data) => {
  let weight = Math.ceil((parseInt(srm, 10) / 100) * data);
  weight = weight - (weight % 2.5);
  return weight + ' x 5';
};

export { calculateRoutineData };
