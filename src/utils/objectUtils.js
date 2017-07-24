import R from 'ramda';
import jub from 'index';

export const dotPath = R.useWith(R.path, [R.split('.')]);
export const propsDotPath = R.useWith(R.ap, [R.map(dotPath), R.of]);
export const arrayPath = (array, object) => R.view(R.lensPath(array), object);

export const pathNotNil = R.pathSatisfies(x => jub.isNotNil(x)); 
