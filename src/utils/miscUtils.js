import R from 'ramda';

export const taplog = R.tap(console.log);
export const defaultToUndefined = R.defaultTo(undefined);



// searchAndReplace(R.startsWith('reference_'), documentOne)
export const searchAndReplace = (needleFunc, replaceFunc, obj) => {
  const isObj = R.compose(R.equals('Object'), R.type);
  const isArray = R.compose(R.equals('Array'), R.type); 
  const curriedSearchAndReplace = R.curry(searchAndReplace)(needleFunc, replaceFunc);

  if (isObj(obj)) {
    const result = R.reduce((acc, key) => {
      if (needleFunc(key)) {
        if (isArray(obj[key])) {
          const replaced = R.map(replaceFunc, obj[key]);
          return R.merge(acc, { [key]: replaced })
        }
      }
      
      if (isObj(obj[key])) return R.merge(acc, { [key]: curriedSearchAndReplace(obj[key]) })
      if (isArray(obj[key])) return R.merge(acc, { [key]: curriedSearchAndReplace(obj[key]) })
      
      return R.merge(acc, { [key]: obj[key] });
    }, {}, R.keys(obj));
    
    return result;
  }
   
  if (R.type(obj) === 'Array') {
    return R.map((item) => {
      if (R.or(isObj(item), isArray(item))) return curriedSearchAndReplace(item);
      return item;
    }, obj);
  }
  
  return obj;
}
