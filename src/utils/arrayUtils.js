import R from 'ramda';

export const mapIndexed = R.addIndex(R.map);
export const arrGt = (num = 0, arr) => R.gt(R.length(arr), num);

export const updateObjectInArrayByPropEq = (existingArray, newObject, propMatch = 'id') => {
  const newPropVal = R.propOr(null, propMatch, newObject);
  if(newPropVal === null) return existingArray; 
  
  const currentObjectIndex = R.findIndex(R.propEq(propMatch, newPropVal), existingArray);
  if(currentObjectIndex === -1) return existingArray;
  
  const currentObject = R.nth(currentObjectIndex, existingArray);
  const mergedObject = R.merge(currentObject, newObject) ;
  
  return R.update(currentObjectIndex)(mergedObject)(existingArray);
}
