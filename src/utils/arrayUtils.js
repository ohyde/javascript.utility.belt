import R from 'ramda';

export const mapIndexed = R.addIndex(R.map);

export const arrGt = (arr, num = 0) => R.gt(R.length(arr), num);

// export const isNotEmptyArray = R.allPass([arrGt, R.isArrayLike]);
// export const isObjValidWithKeys = (obj, keys) => {
//   return isObj(obj) && R.reduce((acc, x) => {
//     if (R.not(acc)) return false;
//     return R.has(x, obj);
//   }, true, keys);
// }

