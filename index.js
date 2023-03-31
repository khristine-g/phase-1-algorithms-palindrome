function isPalindrome(str) {

  str = str.toLowerCase()

   const reversed_str = str.split("").reverse().join("")

  return str === reversed_str
  
}

console.log(isPalindrome("abba")) //true
console.log(isPalindrome("racecar"))//true
console.log(isPalindrome("a"))//true

console.log (isPalindrome("robot")) //false
console.log (isPalindrome("ab"))//false



/* 
  convert the string to lowercase
  reverse the string
  Compare the original string with the reversed string
  If the strings are the same, return true
  If the strings are different, return false
*/


/*
console.log(isPalindrome("abba"))...this returns true because when you 
reverse it it remains the same
console.log (isPalindrome("ab")) ...this returns false because when you 
reverse it it does not remain the same
  
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));


  

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
