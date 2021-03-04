function isOdd(num) {
  if (num % 3 === 0) {
    return true;
  } else if (num === 1) {
    return true;
  } else {
    return false;
  }
  
}

console.log("1 is odd: " + isOdd(1));
console.log("8 is odd: " + isOdd(8));