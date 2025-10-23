function multiplication(a, b) {
  if (arguments.length !== 2) return undefined;

  if (typeof a !== 'number' || typeof b !== 'number') return undefined;
  if (isNaN(a) || isNaN(b)) return undefined;

  const result = a * b;

  if (Object.is(result, -0)) return 0;

  return result;
}

module.exports = { multiplication };
