let convert = document.getElementById('convert');
if (convert !== null) {
    convert.addEventListener('click', () => {
        let input = document.getElementById('inputText').value;
        const asciiValuesArray = getAsciiValues(input);
        console.log("asciiValuesArray: " + asciiValuesArray);
        const CipherEncrypted = encryptCipher(asciiValuesArray);
        console.log("CipherEncrypted: " + CipherEncrypted);
        let encryption = CipherEncrypted.join("");
        localStorage.setItem('encryptedText', encryption);
        location.href = 'page2.html';
    })
}

// Caesar to Cipher
function getAsciiValues(text) {
    let asciiValues = [];
    for (let i = 0; i < text.length; i++) {
        asciiValues.push(text.charCodeAt(i));
    }

    return asciiValues;
}

function encryptCipher(asciiValuesArray) {
    let CipherEncrypted = [];
    for (let i = 0; i < asciiValuesArray.length; i++) {
        if (asciiValuesArray[i] == 88) {
            CipherEncrypted.push(String.fromCharCode(65));
        }
        else if (asciiValuesArray[i] == 89) {
            CipherEncrypted.push(String.fromCharCode(66));
        }
        else if (asciiValuesArray[i] == 90) {
            CipherEncrypted.push(String.fromCharCode(67));
        }
        else if (asciiValuesArray[i] == 120) {
            CipherEncrypted.push(String.fromCharCode(97));
        }
        else if (asciiValuesArray[i] == 121) {
            CipherEncrypted.push(String.fromCharCode(98));
        }
        else if (asciiValuesArray[i] == 122) {
            CipherEncrypted.push(String.fromCharCode(99));
        }
        else if (asciiValuesArray[i] == 32) {
            CipherEncrypted.push(String.fromCharCode(32));
        }
        else {
            CipherEncrypted.push(String.fromCharCode(asciiValuesArray[i] + 3));
        }
    }
    return CipherEncrypted;
}


// Cipher to Caesar
function decryptCipher(text) {
    let CipherDecrypted = [];
    for (let i = 0; i < text.length; i++) {
        if (text[i] == 'a') {
            CipherDecrypted.push('x');
        }
        else if (text[i] == 'b') {
            CipherDecrypted.push('y');
        }
        else if (text[i] == 'c') {
            CipherDecrypted.push('z');
        }
        else if (text[i] == ' ') {
            CipherDecrypted.push(' ');
        }
        else {
            CipherDecrypted.push(String.fromCharCode(text.charCodeAt(i) - 3));
        }
    }
    return CipherDecrypted;
}


document.addEventListener("DOMContentLoaded", function () {
    let item = localStorage.getItem('encryptedText');
    if (item !== null) {
        let encryptedText = document.getElementById("encryptedText");
        if (encryptedText !== null) {
            encryptedText.textContent = item;
        }
        let decryptedText = document.getElementById("decryptedText");
        if (decryptedText !== null) {
            const CipherDecrypted = decryptCipher(item);
            console.log("CipherDecrypted: " + CipherDecrypted);
            let decryption = CipherDecrypted.join("");
            decryptedText.textContent = decryption;
        }
    }

});