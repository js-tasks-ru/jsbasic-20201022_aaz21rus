/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  let sumFact = 1;
  for (let i = n; i > 0; i--) {
    if (i === 0) {
      i = 1;
    }
    sumFact *= i;
  }
  return sumFact;
}


