import R from 'ramda';

export const moduloTwo = R.flip(R.modulo)(2);
export const isEven = R.compose(R.equals(0), moduloTwo);
export const isOdd = R.compose(R.gt(R.__, 0), moduloTwo);

