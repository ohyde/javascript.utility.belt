import R from 'ramda';

// maths
export const gcd = (a, b) => !b ? a : gcd(b, a % b)
export const lcm = (a, b) => (a * b) / gcd(a, b)
export const equalsZero = R.equals(R.__, 0);

export const isPrime = (num) => {
    if(num <= 1) return false;
    if(num == 2) return true;
    if(num % 2 === 0) return false;

    let i = 3;
    while ((i * i) <= num) {
        if(num%i===0)
            return false;
        else {
          i +=2
        }
    }
    return true;
}
