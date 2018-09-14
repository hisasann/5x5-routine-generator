/// <reference path="../../types/require/index.d.ts" />

/**
 * プロジェクト名
 * @type {string}
 */
const pjName: string = require('../../package.json').productName;

/**
 * 定数
 */
const Constants = {
  pjName,
  calcData: [
    [55, 60, 65, 70, 75],
    [60, 65, 70, 75, 80],
    [55, 60, 65, 70, 75],
    [60, 65, 70, 75, 80],
    [65, 70, 75, 80, 85],
    [60, 65, 70, 75, 80],
    [65, 70, 75, 80, 85],
    [70, 75, 80, 85, 90],
    [65, 70, 75, 80, 85],
    [70, 75, 80, 85, 90],
    [75, 80, 85, 90, 95],
    [70, 75, 80, 85, 90],
    [75, 80, 85, 90, 95],
    [80, 85, 90, 95, 100],
    [75, 80, 85, 90, 95],
    [80, 85, 90, 95, 100],
  ],
};

console.log('Constants: ', Constants);

export default Constants;
