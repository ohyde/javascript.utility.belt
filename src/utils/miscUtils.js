import R from 'ramda';

export const taplog = R.tap(console.log);
export const defaultToUndefined = R.defaultTo(undefined);



// searchAndReplace(R.startsWith('reference_'), documentOne)
export const searchAndReplace = (needleFunc, obj, replaceFunc) => {
	const isObj = R.compose(R.equals('Object'), R.type);
	const isArray = R.compose(R.equals('Array'), R.type);	

  if (isObj(obj)) {
    const result = R.reduce((acc, key) => {
      if (needleFunc(key)) {
      	if (isArray(obj[key]))
        	const replaced = R.map(replaceFunc, obj[key]);
        	return R.merge(acc, { [key]: replaced })
        }
      }
      
      if (isObj(obj[key])) return R.merge(acc, { [key]: searchAndReplace(needleFunc, obj[key]) })
      if (isArray(obj[key])) return R.merge(acc, { [key]: searchAndReplace(needleFunc, obj[key]) })
      
      return R.merge(acc, { [key]: obj[key] });
    }, {}, R.keys(obj));
    
    return result;
  }
   
  if (R.type(obj) === 'Array') {
    return R.map((item) => {
      if (R.or(isObj(item), isArray(item))) return searchAndReplace(needleFunc, item);
      return item;
    }, obj);
  }
  
  return obj;
}

