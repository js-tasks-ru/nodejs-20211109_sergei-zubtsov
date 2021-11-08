function sum(a, b) {
  if (Number(a) !== a || Number(b) !== b) throw new TypeError();
  return a + b;
}

module.exports = sum;
