const toUpperCase = (pString) => {
	const arrText = pString.split('')
	const mapText = arrText.map((el) => {
		if (el === ' ') {
			return ' '
		}
		const ascii = el.charCodeAt(0)
		if (ascii - 32 < 65) {
			charUpperCase = String.fromCharCode(ascii)
		} else {
			charUpperCase = String.fromCharCode(ascii - 32)
		}
		return charUpperCase
	})
	const textUpperCase = mapText.join('')
	console.log(textUpperCase);
}

toUpperCase("hola")
toUpperCase("anita lava la tina")
toUpperCase("Hola")