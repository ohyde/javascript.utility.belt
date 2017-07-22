import R from 'ramda';



// // const byTheNumberLessThan3 = { expr: R.gt(R.__, 0), prop: 'theNum' }
// // filterByAttributeAllTrue([byTheNumberLessThan3], anArray) 
// export cons = R.curry((conditions, arr) => {
//   return R.filter((item) => {
//     const results = R.map(eachCondition => eachCondition.expr(R.prop(eachCondition.prop, item)), conditions);
//     return R.all(R.equals(true))(results);
//   }, arr)
// })





export default { mapIndexed, defaultToUndefined, isObj, arrGt, dotPath, propsDotPath, arrayPath, taplog }
