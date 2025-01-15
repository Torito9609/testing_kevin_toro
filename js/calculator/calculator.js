const add = function (a, b) {
  return a + b;
};
const subtract = function (a, b) {
  return a - b;
};

function divide(a, b) {
  if (b != 0) {
    // Se evalua que b sea diferente de cero
    return a / b;
  } else {
    // si es cero debería restornar que no se puede dividir
    return "You can't divide by zero";
  }
}

function multiply(a, b) {
  return a * b;
}

// When you want to use the divide or multiple function, remember to add it to the export here
module.exports = {
  add: add,
  subtract: subtract,
  multiply: multiply,
  divide: divide,
};
