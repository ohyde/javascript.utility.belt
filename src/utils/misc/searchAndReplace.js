const isObj = R.compose(R.equals('Object'), R.type);
const isArray = R.compose(R.equals('Array'), R.type); 
const isString = R.compose(R.equals('String'), R.type);

const objSearch = (needleFunc, replaceFunc, obj) => {
  const result = R.reduce((acc, key) => {
    if (needleFunc(key)) {
      if (isArray(obj[key])) return R.merge(acc, { [key]: R.map(replaceFunc, obj[key]) });
      if(isString(obj[key])) return R.merge(acc, { [key]: replaceFunc(obj[key]) });
    }
    
    if (isObj(obj[key])) return R.merge(acc, { [key]: searchAndReplace(needleFunc, replaceFunc, obj[key]) })
    if (isArray(obj[key])) return R.merge(acc, { [key]: searchAndReplace(needleFunc, replaceFunc, obj[key]) })
    
    return R.merge(acc, { [key]: obj[key] });
  }, {}, R.keys(obj));
  
  return result;
}

const arraySearch = (needleFunc, replaceFunc, arr) => {
  return R.map((item) => {
    if (R.or(isObj(item), isArray(item))) return searchAndReplace(needleFunc, replaceFunc, item);
    return item;
  }, arr);
}


// searchAndReplace(R.startsWith('reference_'), documentOne)
const searchAndReplace = (needleFunc, replaceFunc, obj) => {
  if (isObj(obj)) { return objSearch(needleFunc, replaceFunc, obj) }
  if (isArray(obj)) { return arraySearch(needleFunc, replaceFunc, obj) }
  
  return obj;
}