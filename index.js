function isPalindrome(word) {
  // Write your algorithm here
  if(word.length <= 1){
    return true;

  }else if(word[0] == word[word.length - 1]){
    return isPalindrome(word.substring(1, word.length - 1));
  }

  return false;
}



/* 
  Add your pseudocode here
    check the size of the string
  if first and last characters match...remove elements
*/

/*
  Add written explanation of your solution here
  When the string is the same length or less than or equal to 1
  return true
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
