import R from 'ramda';

export const isObj = R.is(Object);
export const isNotNil = R.complement(R.isNil);
