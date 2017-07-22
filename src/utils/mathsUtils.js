import R from 'ramda';
import { moduloTwo } from './numberUtils';

// maths
export const gcd = (a, b) => !b ? a : gcd(b, a % b)
export const lcm = (a, b) => (a * b) / gcd(a, b)
export const equalsZero = R.equals(R.__, 0);

export const fibonacci = (n) => {
  if (n < 2) { return 1; }
  else { return fibonacci(n - 2) + fibonacci(n - 1); }
}

export const isPrime = (num) => {
  if(R.or(R.lte(num, 1), equalsZero(moduloTwo(num)))) return false;
  if(R.equals(num, 2)) return true;

  let i = 3;
  while ((i * i) <= num) {
      if(num % i === 0)
          return false;
      else {
        i += 2
      }
  }
  return true;
}

export const intReverse = (intToReverse) => {
  return parseInt(R.toString(intToReverse).split('').reverse().join(''))
}
