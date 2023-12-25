/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length != str2.length) {
    return false;
	}
  str1 = str1.toLowerCase().split('').sort().join();
  str2 = str2.toLowerCase().split('').sort().join();
  return str1 == str2;
	// let n = str1.length;
	// let letters1 = new Map();
	// let letters2 = new Map();
	// for (let i = 0; i < n; i++) {
	// 	if (letters1.get(str1[i]) == undefined) {
	// 		letters1.set(str1[i], 1);
	// 	} else {
	// 		let k = letters1.get(str1[i]);
	// 		letters1.set(str1[i], k + 1);
	// 	}
	// 	if (letters2.get(str2[i]) == undefined) {
	// 		letters2.set(str2[i], 1);
	// 	} else {
	// 		let k = letters2.get(str2[i]);
	// 		letters2.set(str2[i], k + 1);
	// 	}
	// }
	// let sortedLetters1 = [...letters1.entries()].sort();
	// let sortedLetters2 = [...letters2.entries()].sort();

	// return JSON.stringify(sortedLetters1) === JSON.stringify(sortedLetters2);
}

console.log(isAnagram("Debit Card", "Bad Credit"));

module.exports = isAnagram;