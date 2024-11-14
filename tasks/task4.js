// Задача: Напишіть функцію findMax, яка приймає масив чисел і повертає найбільше число в масиві.

 function findMax(arr) {
    if (arr.length === 0) return null;
    
    let max = arr[0];
    
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    
    return max;
}

const numbers = [3, 7, 2, 9, 1, 5];
console.log(findMax(numbers)); 

const emptyArray = [];
console.log(findMax(emptyArray)); 

const negativeNumbers = [-5, -2, -8, -1];
console.log(findMax(negativeNumbers));