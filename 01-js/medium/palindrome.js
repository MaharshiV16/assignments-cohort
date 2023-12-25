/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isLetter(letter) {
	let s = "abcdefghijklmnopqrstuvwxyz";
	s = s.split("");
	return s.includes(letter.toLowerCase());
}

function isPalindrome(str) {
	str = str.toLowerCase().split("");
	str = str.filter((e) => {
		return isLetter(e);
  });
  str = str.join("");
	strRev = str.toLowerCase().split("").reverse().join("");
	return str == strRev;
}

module.exports = isPalindrome;
