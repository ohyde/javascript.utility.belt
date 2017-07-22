export const dotPath = R.useWith(R.path, [R.split('.')]);
export const propsDotPath = R.useWith(R.ap, [R.map(dotPath), R.of]);
export const arrayPath = (array, object) => R.view(R.lensPath(array), object);
