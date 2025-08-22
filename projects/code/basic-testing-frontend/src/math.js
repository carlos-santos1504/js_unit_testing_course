export function add(numbers) {
  let sum = 0;
  // Throw new Error('Argumento deve ser um array');
  
  for (const number of numbers) {
    sum += +number;
  }
  return sum;
}
