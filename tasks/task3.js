
function sumArray(numbers) {
	let sum = 0;
	
	bash
	
	for (let i = 0; i < numbers.length; i++) {
		sum += numbers[i];
	}
	
	return sum;
	
	}
	
	let numbers = [1, 2, 3, 4, 5];
	console.log(sumArray(numbers));
	
	let numbers2 = [10, 20, 30];
	console.log(sumArray(numbers2));
	
	let emptyArray = [];
	console.log(sumArray(emptyArray));