# Loops and functions

Iteration or loop structures are one of the basic control structures in
programming languages: something is iterated (repeated) if a condition evaluates
true (loop condition). Iteration stops when the loop condition evaluates false.

Functions are one the most fundamental programming concepts and they are
extensively used in all programs. Functions have parameter variables that are
given values (arguments) when the function is called. Functions also often
return a value (return value). A function call is substituted with its return
value in an expression.

## Exercises

1.  Implement a function that outputs all even integers between 2 and 100.

2.  Implement a function that outputs all integers from 1 to a number given as
    argument.

3.  Implement a function that outputs all integers from a number given as
    argument to another number given as argument.

4.  Implement function printStars()that outputs a given number of stars and a
    linebreak. For example, printStars(9) outputs:  
    \*\*\*\*\*\*\*\*\*

5.  Implement function printSquare(sideLength)j that prints a square using the
    printStars function. For example, call printSquare(4) outputs:  
    \*\*\*\*  
    \*\*\*\*  
    \*\*\*\*  
    \*\*\*\*

6.  Implement function printRectangle(width, height)j that prints a rectangle
    using the printStars function. For example, call printRectangle(17,3)
    outputs:  
    \*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*  
    \*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*  
    \*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

7.  Implement function printTriangle(size) that prints a rectangle using the
    printStars function. For example, call printTriangle(5) outputs:  
    \*  
    \*\*  
    \*\*\*  
    \*\*\*\*  
    \*\*\*\*\*

8.  Implement function seriesSum(n) that **returns** the sum 1+2+3+...+n where n
    is an integer given as argument. Output the sum of integers from 1 to 100.

9.  Implement function factorial(n)j that return the factorial of integer n. The
    formula for factorial is n! = 1\*2\*3\*...\*n. Additionally, it is defined
    that the factorial of 0 is 1, that is 0! = 1. Output the factorial of
    integer 10.

10. Implement a function that outputs heading texts. Then implement a function
    that calls all the functions above and adds heading texts for each exercise
    output.

Implement all functions in the same node.js program.

## Bonus

1.  Implement a recursive function that returns the sum of a series of integers.

2.  Implement a recursive function that returns factorial of an integer.

## Submission

Submit the source code and the output of the program in a file.

## Instructions

-   For this exercise you’ll need to have Node.js installed
    (<https://nodejs.org/en/> ).

-   Write the code using a code editor, e.g. Visual Studio Code
    (<https://code.visualstudio.com/> ).

- You can run your program on the command line:
```console
$ node app.js
```

-   You can output to the console in JavaScript with function console.log().

-   Variables in JavaScript do not have type declaration but they must be
    declared before use. The recommended way to declare variables is let
    variableName. Constants are declared const constantName.

    -   <https://www.sitepoint.com/how-to-declare-variables-javascript/>

-   It can be helpful to know that in strings can be concatenated (joined) with
    addition operator, e.g. if let a = “foo” and let b = ”bar”, console.log(a +
    b) outputs ”foobar”.

-   You can redirect the console output of a program to a file like this:  
    node program.js \> output.txt
