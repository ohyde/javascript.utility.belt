import R from 'ramda';

// maths
export const gcd = (a, b) => !b ? a : gcd(b, a % b)
export const lcm = (a, b) => (a * b) / gcd(a, b)
