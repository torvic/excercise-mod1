// Given a string s consisting of some words separated by some number of spaces, 
// return the length of the last word in the string.
const lengthOfLastWord = (s) => {
	const arrText = s.split(' ')  
	const filterSpace = arrText.filter((el) => el !== '')
	const countLastWord = filterSpace[filterSpace.length - 1].length
	return countLastWord
};

console.log(lengthOfLastWord("   fly me   to   the moon  "))
console.log(lengthOfLastWord("Hello World"))
console.log(lengthOfLastWord("luffy is still joyboy"))