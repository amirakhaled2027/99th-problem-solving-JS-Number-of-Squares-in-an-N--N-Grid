// Create a function that calculates the number of different squares in an n * n square grid.
// n the number of squares is n squared + the number of squares from the previous value of n.

//APPROACH
// current number of square grid is: n 
// calculate i * i, which is the area of a square with side length i
// add this area to the number already in the totalSquares box



function numberSquares(n) {
  let totalSquares = 0;

  for ( let i = 0; i < n; i++) {
    totalSquares = totalSquares + (i * i);
  }
  
  return totalSquares;
}



console.log(numberSquares(1));
console.log(numberSquares(2));
console.log(numberSquares(3));
console.log(numberSquares(4));
console.log(numberSquares(5));
console.log(numberSquares(6));
console.log(numberSquares(7));
console.log(numberSquares(8));
console.log(numberSquares(9));
console.log(numberSquares(10));
