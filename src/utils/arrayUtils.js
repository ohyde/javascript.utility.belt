import R from 'ramda';

export const mapIndexed = R.addIndex(R.map);
export const arrGt = (num = 0, arr) => R.gt(R.length(arr), num);

export const updateObjectInArrayById = (existingArray, newObject) => {
  const id = R.prop('id', newObject);
  if(id === null) return existingArray; 
  
  const currentUserObjectIndex = R.findIndex(R.propEq('id', id), existingArray);
  if(currentUserObjectIndex === -1) return existingArray;
  
  const currentUserObject = R.nth(currentUserObjectIndex, existingArray);
  const newUserObject = R.merge(currentUserObject, newObject) ;
  
  return R.update(currentUserObjectIndex)(newUserObject)(existingArray);
}
