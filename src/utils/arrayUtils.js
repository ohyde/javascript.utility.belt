import R from 'ramda';

export const mapIndexed = R.addIndex(R.map);
export const arrGt = (num = 0, arr) => R.gt(R.length(arr), num);

export const updateObjectInArrayByPropEq = (existingArray, newObject, propMatch = 'id') => {
  const newPropVal = R.propOr(null, propMatch, newObject);
  if(newPropVal === null) return existingArray; 
  
  const currentUserObjectIndex = R.findIndex(R.propEq(propMatch, newPropVal), existingArray);
  if(currentUserObjectIndex === -1) return existingArray;
  
  const currentUserObject = R.nth(currentUserObjectIndex, existingArray);
  const newUserObject = R.merge(currentUserObject, newObject) ;
  
  return R.update(currentUserObjectIndex)(newUserObject)(existingArray);
}
