const recipe = {
	name: '',
	ingredients: [
		{ name: 'Pan', quantity: 2 },
		{ name: 'Jamón', quantity: 1 },
		{ name: 'Queso', quantity: 1 },
	]
}
// print the first quantity of ingredient
// Imprimir la cantidad del primer ingrediente 
const firstIngredient = recipe.ingredients[0].quantity
console.log('Primer ingrediente: ', firstIngredient);
// Imprimir los ingredientes con el siguiente formato
// print the ingredients with the next format
// 2 de Pan
// 1 de Jámon
// 1 de Queso 
const res = recipe.ingredients.map((el) => {
	console.log(`${el.quantity} de ${el.name}`);
})