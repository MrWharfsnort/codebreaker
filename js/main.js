/* jshint esversion: 6 */

let generateCode = function(length) {
    // charList is 36 characters, 0-9, a-z
    const charList = [
        '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
        'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
        'u', 'v', 'w', 'x', 'y', 'z'
    ];

    let code = '';

    for (let i = 0; i < length; i++) {
        let char = Math.floor(Math.random() * 36);
        code += charList[char];
    }

    return code;
};


console.log(generateCode(2));
console.log(generateCode(5));
