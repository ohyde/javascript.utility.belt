import R from 'ramda';
import jub from '../index';

export const dotPath = R.useWith(R.path, [R.split('.')]);
export const propsDotPath = R.useWith(R.ap, [R.map(dotPath), R.of]);
export const arrayPath = (array, object) => R.view(R.lensPath(array), object);


/* @function pathNotNil
 * const objectO = { test: { value: 'here' } }
 * pathNotNil(['test', 'value'], objectO)
 */
export const pathNotNil = R.pathSatisfies(jub.isNotNil); 

/* @function updateById
 const arr = [ { id: 1, name: 'js' }, { id: 2, name: 'f#', dog: 'cat' } ];
 updateById(arr, { id: 2, name: 'f#s' })
 result -> [{"id": 1, "name": "js"}, {"dog": "cat", "id": 2, "name": "f#"}]
*/
export const updateById = R.curry((objs, obj) => {
  const lensIdx = R.o(R.lensIndex, R.findIndex(R.propEq('id', obj.id)))(objs);
  return R.over(lensIdx, R.merge(obj), objs);
});
