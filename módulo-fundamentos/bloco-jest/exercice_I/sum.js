function sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('os parâmetros devem ser números');
    }
  
    return a + b;
  }

  module.exports = sum;