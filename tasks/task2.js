function reverseStringSkipNumbers(str) {
    let letters = str.split('')
        .filter(char => isNaN(char) || char === ' ')
        .reverse();
    
    let index = 0;
    return str.split('')
        .map(char => isNaN(char) || char === ' ' ? letters[index++] : char)
        .join('');
}