// Write rFib(num). Recursively compute and return numth Fibonacci value. 
// As earlier, treat first two (num = 0, num = 1) Fibonacci vals as 0 and 1. Examples: 

// rFib(2) = 1 (0+1); 

// rFib(3) = 2 (1+1); 

// rFib(4) = 3 (1+2); 

// rFib(5) = 5 (2+3).rFib(3.65) = rFib(3) = 2, rFib(-2) = rFib(0) = 0.
function rFib(num){
    if(num<0) return 0;
    if (num <= 1) return num;
    return rFib(Math.trunc(num-1)) + rFib(Math.trunc(num-2))
}
console.log(rFib(-2))

// Write function rTrib(num) to mimic Fibonacci, adding previous three values instead of two. 
// First three Tribonacci numbers are 0, 0, 1, so rTrib(3) = 1 (0+0+1); rTrib(4) = 2 (0+1+1); 
// rTrib(5) = 4 (1+1+2); rTrib(6) = 7 (1+2+4). Handle negatives and non-integers appropriately and inexpensively.
function rTrib(num){
    if (num <= 1) return 0;
    if(num == 2) return 1;
    return rTrib(Math.trunc(num-1))+rTrib(Math.trunc(num-2))+rTrib(Math.trunc(num-3))
}
console.log(rTrib(6.9))
// The Ackermann function is among the earliest examples of a computable but not primitive-recursive function. 
// It grows rapidly and hence can overflow the JavaScript stack frame even at very low values. 
// This function accepts two non-negative integer values, num1 and num2, and follows these rules:

// ackermann(0,num2) == num2+1;
// ackermann(num1,0) == ackermann(num1-1,1) if num1 > 0 (de lo contrario, ver #1);
// ackermann(num1,num2) == ackermann(num1-1,ackermann(num1,num2-1)).
// Don’t be dismayed if a num1 value as low as 4 “blows your stack”. That’s the nature of this function! 
function ackermann(num1, num2){
    if(num1 == 0) num2+1;
    if(num1 > 0 && num2 ==0) ackermann(num1-1,1)
    if(num1>0 && num2 >0) ackermann(num1-1,ackermann(num1, num2-1))
}
// This function borrows ideas from the Fibonacci series, but the calculated results appear to zig and zag, 
// hence the name. A so-called ‘Zibonacci’ series would be defined by the following rules:

// Zib(0) == 1;
// Zib(1) == 1;
// Zib(2) == 2;
// Zib(2n+1) == Zib(n)+Zib(n-1)+1, if n > 0 (i.e. odd values 3 and higher);
// Zib(2n) == Zib(n)+Zib(n+1)+1, if n > 1 (i.e. even values 4 and higher).
// Create the Zibonacci(num) function. What is Zibonacci(10)? Zibonacci(100)?
function Zibonacci(num) {
    if (num === 0) {
      return 1;
    } else if (num === 1) {
      return 1;
    } else if (num === 2) {
      return 2;
    } else if (num % 2 === 1) { // odd values
      let n = Math.floor(num / 2);
      return Zibonacci(n) + Zibonacci(n - 1) + 1;
    } else { // even values
      let n = Math.floor(num / 2);
      return Zibonacci(n) + Zibonacci(n + 1) + 1;
    }
  }
console.log(Zibonacci(10))