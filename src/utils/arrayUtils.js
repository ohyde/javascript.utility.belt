import R from 'ramda';

export const mapIndexed = R.addIndex(R.map);
export const arrGt = (num = 0, arr) => R.gt(R.length(arr), num);
