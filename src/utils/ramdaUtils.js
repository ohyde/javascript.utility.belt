import R from 'ramda';

export const mapIndexed = R.addIndex(R.map);
export const defaultToUndefined = R.defaultTo(undefined);
export const isObj = R.is(Object);
export const arrGt = (arr, num = 0) => R.gt(R.length(arr), num);
// export const isNotEmptyArray = R.allPass([arrGt, R.isArrayLike]);
// export const isObjValidWithKeys = (obj, keys) => {
//   return isObj(obj) && R.reduce((acc, x) => {
//     if (R.not(acc)) return false;
//     return R.has(x, obj);
//   }, true, keys);
// }

// // const byTheNumberLessThan3 = { expr: R.gt(R.__, 0), prop: 'theNum' }
// // filterByAttributeAllTrue([byTheNumberLessThan3], anArray) 
// export cons = R.curry((conditions, arr) => {
//   return R.filter((item) => {
//     const results = R.map(eachCondition => eachCondition.expr(R.prop(eachCondition.prop, item)), conditions);
//     return R.all(R.equals(true))(results);
//   }, arr)
// })


export const dotPath = R.useWith(R.path, [R.split('.')]);
export const propsDotPath = R.useWith(R.ap, [R.map(dotPath), R.of]);

export const arrayPath = (array, object) => R.view(R.lensPath(array), object);

export const taplog = R.tap(console.log);

export default { mapIndexed, defaultToUndefined, isObj, arrGt, dotPath, propsDotPath, arrayPath, taplog }
