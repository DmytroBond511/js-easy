 function replaceVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let result = '';
    
    for(let char of str) {
        if(vowels.includes(char.toLowerCase())) {
            result += '*';
        } else {
            result += char;
        }
    }
    return result;
}