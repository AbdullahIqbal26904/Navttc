function greet() {
    console.log("Hello, World!");
}
function addNumbers(a, b) {
    return a + b;
}
function checkEvenOdd(number) {
    return number % 2 === 0 ? "Even" : "Odd";
}
function findLargestNumber(a, b, c) {
    return Math.max(a, b, c);
}
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}
function isPrime(number) {
    if (number <= 1) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
    }
    return true;
}
function reverseString(str) {
    return str.split('').reverse().join('');
}
function countVowels(str) {
    let vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
function findLongestWord(sentence) {
    let words = sentence.split(' ');
    let longestWord = '';

    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}
function filterOddNumbers(arr) {
    return arr.filter(num => num % 2 !== 0);
}
function sortArray(arr) {
    return arr.sort((a, b) => a - b);
}
function isPalindrome(str) {
    let reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}
function toTitleCase(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
}
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
function flattenArray(nestedArray) {
    return nestedArray.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
}
function calculateAverage(arr) {
    const sum = arr.reduce((total, num) => total + num, 0);
    return sum / arr.length;
}
function findSecondLargest(arr) {
    let uniqueSortedArray = [...new Set(arr)].sort((a, b) => b - a);
    return uniqueSortedArray[1];
}
// Task 1: Display a Greeting Message
console.log("Task 1:", greet()); // Output: "Hello, World!"

// Task 2: Add Two Numbers
console.log("Task 2:", addNumbers(5, 3)); // Output: 8

// Task 3: Check Even or Odd
console.log("Task 3:", checkEvenOdd(4)); // Output: "Even"
console.log("Task 3:", checkEvenOdd(7)); // Output: "Odd"

// Task 4: Find the Largest Number
console.log("Task 4:", findLargestNumber(1, 5, 3)); // Output: 5

// Task 5: Convert Celsius to Fahrenheit
console.log("Task 5:", celsiusToFahrenheit(0)); // Output: 32
console.log("Task 5:", celsiusToFahrenheit(100)); // Output: 212

// Task 6: Calculate Factorial
console.log("Task 6:", factorial(5)); // Output: 120
console.log("Task 6:", factorial(0)); // Output: 1

// Task 7: Generate a Random Number
console.log("Task 7:", generateRandomNumber()); // Output: A random number between 1 and 100

// Task 8: Check for Prime Number
console.log("Task 8:", isPrime(7)); // Output: true
console.log("Task 8:", isPrime(10)); // Output: false

// Task 9: Reverse a String
console.log("Task 9:", reverseString("hello")); // Output: "olleh"

// Task 10: Count Vowels in a String
console.log("Task 10:", countVowels("hello")); // Output: 2

// Task 11: Find the Longest Word
console.log("Task 11:", findLongestWord("The quick brown fox")); // Output: "quick" or "brown"

// Task 12: Calculate the Sum of an Array
console.log("Task 12:", sumArray([1, 2, 3, 4])); // Output: 10

// Task 13: Filter Out Even Numbers
console.log("Task 13:", filterOddNumbers([1, 2, 3, 4, 5])); // Output: [1, 3, 5]

// Task 14: Sort an Array
console.log("Task 14:", sortArray([5, 3, 8, 1])); // Output: [1, 3, 5, 8]

// Task 15: Check for Palindrome
console.log("Task 15:", isPalindrome("madam")); // Output: true
console.log("Task 15:", isPalindrome("hello")); // Output: false

// Task 16: Convert String to Title Case
console.log("Task 16:", toTitleCase("hello world")); // Output: "Hello World"

// Task 17: Remove Duplicates from Array
console.log("Task 17:", removeDuplicates([1, 2, 2, 3, 4, 4])); // Output: [1, 2, 3, 4]

// Task 18: Flatten a Nested Array
console.log("Task 18:", flattenArray([1, [2, [3, 4], 5], 6])); // Output: [1, 2, 3, 4, 5, 6]

// Task 19: Calculate the Average
console.log("Task 19:", calculateAverage([1, 2, 3, 4, 5])); // Output: 3

// Task 20: Find the Second Largest Number
console.log("Task 20:", findSecondLargest([10, 5, 20, 15]));

