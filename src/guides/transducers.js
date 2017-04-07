// https://medium.com/@roman01la/understanding-transducers-in-javascript-3500d3bd9624
import R from 'ramda';

const mapping = (f) => (reducing) => (result, input) => reducing(result, f(input));
const filtering = (predicate) => (reducing) => (result, input) => predicate(input) ? reducing(result, input) : result;

const xform = R.compose(
  mapping((x) => x + 1),
  filtering((x) => x % 2 === 0));
  
transduce(xform, (xs, x) => {
  xs.push(x);
  return xs;
}, [], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
// [2, 4, 6, 8, 10]

transduce(xform, (sum, x) => sum + x, 0, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
