//1.  Do the below programs in anonymous function & IIFE

//a. Print odd numbers in an array ?

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const oddNumbers = numbers.filter(function (num) {
  return num % 2 !== 0;
});
console.log("Odd Numbers:", oddNumbers);

//b.  Convert all the strings to title caps in a string array ?

const stringArray = ["hello world", "javascript is awesome", "web development"];
const titleCaseArray = stringArray.map(function (str) {
  return str
    .split(" ")
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
});
console.log("Title Case Strings:", titleCaseArray);

//c.  Sum of all numbers in an array ?

function calculateSum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = calculateSum(numbers);
console.log("Sum of Numbers:", result);

//d.  Return all the prime numbers in an array  ?

function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
}
function getPrimeNumbers(arr) {
  return arr.filter(function (num) {
    return isPrime(num);
  });
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const primeNumbers = getPrimeNumbers(numbers);
console.log("Prime Numbers:", primeNumbers);

//e.  Return all the palindromes in an array

function isPalindrome(str) {
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return cleanStr === cleanStr.split("").reverse().join("");
}

function getPalindromes(arr) {
  return arr.filter(function (str) {
    return isPalindrome(str);
  });
}
const words = ["racecar", "level", "hello", "deified", "world", "madam"];
const palindromes = getPalindromes(words);
console.log("Palindromes:", palindromes);

//f. Return median of two sorted arrays of the same size.

function findMedianSortedArrays(arr1, arr2) {
  const mergedArray = mergeSortedArrays(arr1, arr2);
  const length = mergedArray.length;
  const middle = Math.floor(length / 2);

  if (length % 2 === 0) {
    return (mergedArray[middle - 1] + mergedArray[middle]) / 2;
  } else {
    return mergedArray[middle];
  }
}

function mergeSortedArrays(arr1, arr2) {
  const merged = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    merged.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    merged.push(arr2[j]);
    j++;
  }

  return merged;
}
const array1 = [1, 3, 5];
const array2 = [2, 4, 6];
const median = findMedianSortedArrays(array1, array2);
console.log("Median:", median);

//g.  Remove duplicates from an array ?

function removeDuplicates(arr) {
  const uniqueArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (uniqueArray.indexOf(arr[i]) === -1) {
      uniqueArray.push(arr[i]);
    }
  }
  return uniqueArray;
}
const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5, 6, 6];
const arrayWithoutDuplicates = removeDuplicates(arrayWithDuplicates);
console.log("Array without Duplicates:", arrayWithoutDuplicates);

//h.  Rotate an array by k times

function rotateArray(arr, k) {
  const n = arr.length;
  k = k % n;
  const firstPart = arr.slice(0, n - k);
  const secondPart = arr.slice(n - k);
  return secondPart.concat(firstPart);
}
const originalArray = [1, 2, 3, 4, 5];
const rotations = 3;
const rotatedArray = rotateArray(originalArray, rotations);
console.log("Rotated Array:", rotatedArray);

//2.  Do the below programs in arrow functions.

//a.  Print odd numbers in an array

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach((num) => {
  if (num % 2 !== 0) {
    console.log(num);
  }
});

//b. Convert all the strings to title caps in a string array

const stringArray = ["hello world", "javascript is awesome", "web development"];
const titleCaseArray = stringArray.map((str) => {
  return str
    .split(" ")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
});
console.log("Title Case Strings:", titleCaseArray);

//c.  Sum of all numbers in an array

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log("Sum of Numbers:", sum);

//d.  Return all the prime numbers in an array

const isPrime = (num) => {
  if (num <= 1) return false;
  if (num <= 3) return true;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const primeNumbers = numbers.filter((num) => isPrime(num));
console.log("Prime Numbers:", primeNumbers);

//e. Return all the palindromes in an array

const isPalindrome = (str) => {
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return cleanStr === cleanStr.split("").reverse().join("");
};
const words = ["racecar", "level", "hello", "deified", "world", "madam"];
const palindromes = words.filter((str) => isPalindrome(str));
console.log("Palindromes:", palindromes);
