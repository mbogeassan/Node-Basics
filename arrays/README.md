# Arrays
Quite often we find that we need an ordered collection, that is we have a 1st, a 2nd, a 3rd element and so on. For example, we need that to store a list of something: users, goods, HTML elements etc.

Objects can store several values but the elements of an object have no order. There exists a special data structure named Array, to store ordered collections.

## Exercises

There are many ways to implement these exercises. You can often either iterate the arrays with loops or use an existing `Array` method to accomplish the result. Feel free to use any way, and it is also a good idea to try several ways!

1. Implement function `logArray` that outputs the elements of the array given. For example, for array `['cat', 'dog', 'ferret']` it should output:
   ```console
   cat
   dog
   ferret
   ```
2. Implement function `cloneArray` that returns a clone of the array given. Cloning means that the elements of the clone are equal to those of the original but the arrays are not be same.
3. Implement function `firstElement` that returns the first element of the array given.
4. Implement function `lastElement` that returns the last element of the array given.
5. Implement function `nFirstElements` that returns the n first elements of the array. If n is negative, zero or undefined, it returns an empty array.
6. Implement function `nLastElements` that returns the n first elements of the array given. If n is beyond array limits, zero or undefined, it returns an empty array.
7. Implement function `toStringWithSeparator` that returns the elements of the array given in a string separated with the separator given as argument. You can assume the elements are of simple type.
8. Implement function `sumSquaresOfVector` that returns the sum of squares of the elements of a numeric vector. 
9.  Implement function `averageOfVector`that returns the average of the elements of a numeric vector. 
10. Implement function `toUl` that returns the elements of the array given as an HTML unordered list (string). You can assume the elements are of simple type.
11. Implement function `toUlDeep`that returns the elements of the array given as an HTML unordered list (string). You can assume the array contains values of a simple type or arrays.
12. Implement function `sortStringArray` that returns the array of strings given sorted.
13. Implement function `sortNumericVector` that returns the numeric vector given sorted.
14. Implement function `sortObjectArray` that returns the array of objects given sorted by a key given as argument. For example, this array could be sorted by any key: author, title or libraryID:
```javascript
[ 
   { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
   { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
   { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
];
```
## Instructions

Implement all your functions in file `arrays.js`.

You are implementing a Node.js module. In order to enable other modules (files) to use the module, the module must **export** the objects it gives for others to use.

### Exports
You can export objects (functions, variables, classes etc) by defining the export name and the object to be exported like this:
```javascript
module.exports = {
   myFunction: myFunction, // export name 'myFunction', function 'myFunction' defined somewhere in module
   myVar: myVar
}
```

And as in ES6, assigning a property value that matches a property name, you can omit the property value:
```javascript
module.exports = {
   myFunction, // export name and function name the same
   myVar
}
```

### Testing
If you clone the exercise project, you can test your functions with the automated tests included in the project. Just make sure that all dependencies have been installed:
```console
$ npm install
$ npm test
```
