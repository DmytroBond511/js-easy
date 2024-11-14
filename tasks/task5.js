// Задача: Напишіть функцію countOccurrences, яка приймає рядок і символ,
//  і повертає кількість входжень цього символу в рядку.


function countOccurrences(str, char) {
    let count = 0;
    for (let letter of str) {
        if (letter === char) {
            count++;
        }
    }
    return count;
}
