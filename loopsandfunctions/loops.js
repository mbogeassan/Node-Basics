function printEven() {
  for (let i = 2; i <=100; i = i + 2) {
      console.log(i);
}
}

function printNumbers(howMany) {
  for (let i = 1; i<= howMany; i++){
    console.log(i);
  }
}
printNumbers(9);

function allNumbers(par, par1) {
  for (let i = par; i < par1; i++){
    console.log(i);
  }
}
allNumbers(11, 20);


function printStars(number) {
  let line = '';
  for (let i = 0; i < number; i++) {
    line = line + '*';
  }
  console.log(line);
  }
printStars(9);

function printSquare(sideLength) {
  for (let i = 0; i < sideLength; i++){
      printStars(sideLength);
  }
}
printSquare(5);

function printRectangle(width, height) {
  for (let i = 0; i < height; i++){
        printStars(width);
  }
}
printRectangle(17,3);

function printTriangle(size) {
  for (let i = 1; i<= size; i++){
    printStars(i);
  }
}
printTriangle(5);

function seriesSum(n) {
  let sum = 0;
  for (let i = 0; i<=n; i++){
  sum+=i;
}
return (sum);
}
console.log(seriesSum(100));

function factorial(n) {
  let multiply = 1;
  for (let i = 1; i<=n; i++){
  multiply=* i;
}
return multiply;
}
console.log(factorial(10));

/* bonustehtävä 11
function factorial(n) {
if (n==0) {
  return 1;
} else {
  return n * factorial(n-1);
}
}
console.log(factorial(10));
*/

function heading(text) {
  console.log(text);
  console.log('-----------------');
}

function run() {
  heading('Exercise 1');
  printEven();
  heading('Exercise 2');
  printNumbers(9);
  heading('Exercise 3');
  allNumbers(11, 20);
  heading('Exercise 4');
  printStars(9);
  heading('Exercise 5');
  printSquare(3);
  heading('Exercise 6');
  printRectangle(17,3);
  heading('Exercise 7');
  printTriangle(5);
  heading('Exercise 8');
  console.log(seriesSum(100));
  heading('Exercise 9');
  console.log(factorial(10));
  heading('Exercise 10');
}
run();
