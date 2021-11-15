// Escribir una función capitalizar que reciba un string y retorne 
// otro string que capitalice cada palabra de la frase.
const capitalizar = (pText) => {
	const arrText = pText.split(' ')
	const mapText = arrText.map((el) => {
		return el[0].toUpperCase() + el.slice(1)
	})
	const joinText = mapText.join(' ')
	console.log(joinText);
}
capitalizar('hola mundo')
