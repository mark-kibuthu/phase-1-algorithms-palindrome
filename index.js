function isPalindrome(word) {
  // Convert the word to lowercase to handle case insensitivity
  word = word.toLowerCase();

  // Initialize two pointers
  let left = 0;
  let right = word.length - 1;

  // Iterate through the word from both ends towards the center
  while (left < right) {
    // If characters at the pointers don't match, it's not a palindrome
    if (word[left] !== word[right]) {
      return false;
    }
    // Move the pointers towards the center
    left++;
    right--;
  }

  // If the loop completes without finding any mismatches, it's a palindrome
  return true;
}
  /*Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
