// validatepalindrome.js

// Pre-populated array of strings
const inputStrings = ["racecar", "hello", "Level", "I", "world", "mad am", "12321", "not a palindrome"];

// Function to clean the string (lowercase, remove spaces)
function cleanString(str) {
    return str.toLowerCase().replace(/\s+/g, '');
}

// Function to check if a string is a palindrome
function isPalindrome(str) {
    const cleaned = cleanString(str);
    const reversed = cleaned.split('').reverse().join('');
    return cleaned === reversed;
}

// Function to filter and return palindromes from the array
function findPalindromes(arr) {
    return arr.filter(isPalindrome);
}

// Find and log palindromes
const palindromes = findPalindromes(inputStrings);
console.log("Palindromes found:", palindromes);
