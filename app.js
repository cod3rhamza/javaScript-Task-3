// // Q1 How does the `map` method work in JavaScript, and can you provide an example of when you might use it to manipulate an array of objects?

// const originalArray = [1, 2, 3, 4, 5];
// console.log(originalArray);
// const doubledArray = originalArray.map((num) => num * 2);

// console.log(doubledArray); // Output: [2, 4, 6, 8, 10]

// const users = [
//   { name: "Hamza", age: 30 },
//   { name: "Yaseen", age: 25 },
//   { name: "Awais", age: 35 },
// ];

// const userNames = users.map((user) => user.name);

// console.log(userNames); // Output: ['Hamza', 'Yaseen', 'Awais']

// Q2: Explain the purpose of the `filter` method. Provide an example where you use `filter` to extract elements from an array based on a specific condition.

// const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evenNumbers = originalArray.filter((num) => num % 2 === 0);

// console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]

// Q3: Discuss the default behavior of the `sort` method for strings and numbers. How would you use a custom comparison function to sort an array of objects by a specific property?

// const fruits = ['banana', 'apple', 'orange', 'grape'];
// fruits.sort();
// console.log(fruits); // Output: ['apple', 'banana', 'grape', 'orange']

// const numbers = [5, 20, 10, 2];
// numbers.sort();
// console.log(numbers); // Output: [10, 2, 20, 5]

// const people = [
//     { name: 'Dua', age: 30 },
//     { name: 'Alisha', age: 25 },
//     { name: 'Saqib', age: 35 },
//   ];

//   // Sorting by age in ascending order
//   people.sort((a, b) => a.age - b.age);

//   console.log(people);
//   // Output: [
//   //   { name: 'Dua', age: 25 },
//   //   { name: 'Alisha', age: 30 },
//   //   { name: 'Saqib', age: 35 }
//   // ]

// // Q4: Describe the purpose of the `reduce` method and provide an example where you use it to compute a single value from an array of numbers.

// const numbers = [1, 2, 3, 4, 10];

// const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// console.log(sum); // Output: 20

// // Q5: How does the `find` method differ from `filter`? Give an example of a scenario where using `find` is more appropriate than `filter`

// const numbers = [1, 2, 3, 4, 5];
// const evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log(evenNumbers); // Output: [2, 4]

// const integer = [1, 2, 3, 4, 5];
// const firstEvenNumber = integer.find(num => num % 2 === 0);
// console.log(firstEvenNumber); // Output: 2

// const users = [
//     { id: 1, name: 'sami' },
//     { id: 2, name: 'jk' },
//     { id: 3, name: 'meer' },
//   ];

//   const targetUserId = 2;
//   const user = users.find(u => u.id === targetUserId);

//   console.log(user);
//   // Output: { id: 2, name: 'jk' }

// // Q6: Create a chain of array methods (`map`, `filter`, `reduce`, etc.) to transform an array of strings into a single concatenated string with a specific condition.

// const stringsArray = ['apple', 'banana', 'kiwi', 'orange', 'grape'];

// const result = stringsArray
//   .filter(str => str.length > 3)  // Keep strings with length greater than 3
//   .map(str => str.toUpperCase()) // Convert each string to uppercase
//   .reduce((concatenatedString, currentString) => concatenatedString + currentString, ''); // Concatenate strings

// console.log(result);
// // Output: 'APPLEBANANAKIWIORANGEGRAPE'

// // Q7: Explain the concept of callback functions in the context of array methods. Provide an example of using a callback function with the `map` method.

// const numbers = [1, 2, 3, 4, 5];

// // Using a callback function with map to square each number
// const squaredNumbers = numbers.map(function(num) {
//   return num * num;
// });

// console.log(squaredNumbers);
// // Output: [1, 4, 9, 16, 25]

// const interger = [1, 2, 3, 4, 5];

// // Using an arrow function with map to square each number
// const squaredNumberss = numbers.map(num => num * num);

// console.log(squaredNumberss);
// // Output: [1, 4, 9, 16, 25]

// Q8: How would you handle potential errors when using array methods like `find` or `reduce`? Provide an example of error handling in such a scenario.

// const numbers = [5, 8, 3, 15, 7];

// // Using the find method to find the first element greater than 10
// const result = numbers.find(num => num > 10);

// // Checking if a result is found
// if (result !== undefined) {
//   console.log('Found the first element greater than 10:', result);
// } else {
//   console.log('No element found greater than 10.');
// }

// const numberss = [1,2,3,4,5];

// // Using the reduce method to sum the elements of the array
// const sum = numberss.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// // Checking if the array is not empty before using reduce
// if (numberss.length > 0) {
//   console.log('Sum of array elements:', sum);
// } else {
//   console.log('Array is empty. Cannot calculate sum.');
// }

// // Q9: Discuss the importance of immutability when working with array methods. Demonstrate how you would perform immutable operations using methods like `map` or `filter`.

// const originalArray = [1, 2, 3, 4, 5];

// // Immutable map operation to double each element
// const doubledArray = originalArray.map(num => num * 2);

// console.log(originalArray); // Original array remains unchanged
// console.log(doubledArray);  // New array with doubled values

// const originalArray1 = [1, 2, 3, 4, 5];

// // Immutable filter operation to keep only even numbers
// const evenNumbers = originalArray1.filter(num => num % 2 === 0);

// console.log(originalArray1); // Original array remains unchanged
// console.log(evenNumbers);    // New array with even numbers

// Q 10 : Compare the performance implications of using `map` versus `forEach`. In what scenarios would you prefer one over the other, and why?

// Using map
// const originalArray = [1, 2, 3, 4, 5];

// const doubledArrayMap = originalArray.map((number) => {
//   return number * 2;
// });

// console.log("Using map:", doubledArrayMap);

// // Using forEach
// const doubledArrayForEach = [];
// originalArray.forEach((number) => {
//   doubledArrayForEach.push(number * 2);
// });

// console.log("Using forEach:", doubledArrayForEach);

// // Q11: Given an array of integers, use the `map` method to square each element and return a new array with the squared values.

// const originalArray = [1, 2, 3, 4, 5];

// const squaredArray = originalArray.map((number) => {
//   return number * number;
// });

// console.log("Original Array:", originalArray);
// console.log("Squared Array:", squaredArray);

// // Original Array: [1, 2, 3, 4, 5]
// // Squared Array: [1, 4, 9, 16, 25]

// // Q12: Take an array of strings, filter out the ones with a length less than 5, and then capitalize the remaining strings using the `map` method.

// const arrayOfStrings = ["apple", "banana", "kiwi", "orange", "grape"];

// const filteredAndCapitalized = arrayOfStrings
//   .filter((str) => str.length >= 5) // Filter strings with length >= 5
//   .map((str) => str.toUpperCase()); // Capitalize the remaining strings

// console.log("Original Array:", arrayOfStrings);
// console.log("Filtered and Capitalized Array:", filteredAndCapitalized);

// // Original Array: ["apple", "banana", "kiwi", "orange", "grape"]
// // Filtered and Capitalized Array: ["APPLE", "BANANA", "ORANGE"]

// // Q13: Given an array of objects with a 'price' property, use the `sort` method to arrange them in descending order based on their prices.

// const arrayOfObjects = [
//     { name: 'Product A', price: 30 },
//     { name: 'Product B', price: 20 },
//     { name: 'Product C', price: 40 },
//     { name: 'Product D', price: 25 },
//   ];

//   // Sorting in descending order based on the 'price' property
//   const sortedArray = arrayOfObjects.sort((a, b) => b.price - a.price);

//   console.log("Original Array of Objects:", arrayOfObjects);
//   console.log("Sorted Array of Objects (Descending):", sortedArray);

// // Q14: Use the `reduce` method to find the total sum of all even numbers in an array of integers.

// const arrayOfIntegers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const sumOfEvenNumbers = arrayOfIntegers.reduce((accumulator, currentNumber) => {
//   // Check if the current number is even
//   if (currentNumber % 2 === 0) {
//     // Add the even number to the accumulator
//     return accumulator + currentNumber;
//   } else {
//     // If the current number is odd, just return the accumulator without modification
//     return accumulator;
//   }
// }, 0); // Initial value of the accumulator is set to 0

// console.log("Original Array of Integers:", arrayOfIntegers);
// console.log("Sum of Even Numbers:", sumOfEvenNumbers);

// Q15: Given an array of objects with 'id' properties, use the `find` method to locate an object with a specific 'id' and update its 'status' property to 'completed'.

// const arrayOfObjects = [
//     { id: 1, status: 'pending' },
//     { id: 2, status: 'in progress' },
//     { id: 3, status: 'pending' },
//     { id: 4, status: 'completed' },
//   ];

//   const targetId = 2; // The 'id' you want to locate

//   const updatedArray = arrayOfObjects.map(obj => {
//     // Use the find method to locate the object with the specific 'id'
//     if (obj.id === targetId) {
//       // Create a new object with the updated 'status'
//       return { ...obj, status: 'completed' };
//     }
//     // If the 'id' doesn't match, return the original object
//     return obj;
//   });

//   console.log("Original Array of Objects:", arrayOfObjects);
//   console.log("Updated Array of Objects:", updatedArray);

// Q16: Create a chain of array methods to find the average of all positive numbers in an array of mixed integers and return the result rounded to two decimal places.

// const mixedArray = [-5, 10, -3, 8, 0, 12, -7, 6];

// const averageOfPositiveNumbers = mixedArray
//   .filter(number => number > 0) // Filter out positive numbers
//   .reduce((sum, number, index, array) => {
//     // Use reduce to calculate the sum of positive numbers
//     sum += number;
//     // If it's the last iteration, calculate the average and round to two decimal places
//     if (index === array.length - 1) {
//       return Math.round((sum / array.length) * 100) / 100;
//     }
//     return sum;
//   }, 0); // Initial value of the sum is set to 0

// console.log("Mixed Array:", mixedArray);
// console.log("Average of Positive Numbers:", averageOfPositiveNumbers);

// // Q17: Implement a function that takes an array of objects with 'age' properties and returns an array of those who are adults (age 18 and above) using the `filter` method.

// function filterAdults(people) {
//     // Use the filter method to filter out objects with age 18 and above
//     return people.filter(person => person.age >= 18);
//   }

//   // Example usage:
//   const peopleArray = [
//     { name: 'John', age: 25 },
//     { name: 'Alice', age: 17 },
//     { name: 'Bob', age: 30 },
//     { name: 'Eve', age: 16 }
//   ];

//   const adultsArray = filterAdults(peopleArray);

//   console.log("People Array:", peopleArray);
//   console.log("Adults Array:", adultsArray);

// // Q18: Sort an array of strings based on their lengths in ascending order. If two strings have the same length, maintain their relative order in the sorted array.

// const arrayOfStrings = ["apple", "banana", "kiwi", "orange", "grape"];

// const sortedArray = arrayOfStrings.sort((a, b) => {
//   // Compare lengths
//   const lengthComparison = a.length - b.length;

//   // If lengths are equal, maintain relative order
//   return lengthComparison !== 0 ? lengthComparison : arrayOfStrings.indexOf(a) - arrayOfStrings.indexOf(b);
// });

// console.log("Original Array:", arrayOfStrings);
// console.log("Sorted Array based on Lengths:", sortedArray);

// // Q19: Given an array of arrays containing numbers, use a combination of array methods to flatten the structure and then calculate the sum of all the numbers.

// const arrayOfArrays = [
//     [1, 2, 3],
//     [4, 5],
//     [6, 7, 8],
//   ];

//   // Use flat to flatten the array of arrays
//   const flattenedArray = arrayOfArrays.flat();

//   // Use reduce to calculate the sum of all numbers
//   const sumOfNumbers = flattenedArray.reduce((sum, number) => sum + number, 0);

//   console.log("Original Array of Arrays:", arrayOfArrays);
//   console.log("Flattened Array:", flattenedArray);
//   console.log("Sum of Numbers:", sumOfNumbers);

// Q20: Modify the `find` method to handle the scenario where the desired element is not found, returning a custom default object instead.

function customFind(array, predicate, defaultValue) {
  const foundElement = array.find(predicate);

  // Check if the element is found
  if (foundElement !== undefined) {
    return foundElement;
  } else {
    // If not found, return the default value
    return defaultValue;
  }
}

// Example usage:
const arrayOfObjects = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

const desiredElement = customFind(arrayOfObjects, (obj) => obj.id === 4, {
  id: -1,
  name: "Not Found",
});

console.log("Array of Objects:", arrayOfObjects);
console.log("Desired Element (or Default):", desiredElement);
