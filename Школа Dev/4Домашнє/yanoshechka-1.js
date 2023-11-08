function VigenèreCipher(key, abc) {
    this.encode = function (str) {
        let encodedMessage = '';
        for (let i = 0, j = 0; i < str.length; i++) {
            const char = str[i];
            if (abc.includes(char)) {
                const keyChar = key[j % key.length];
                const shift = abc.indexOf(keyChar);
                const newIndex = (abc.indexOf(char) + shift) % abc.length;
                encodedMessage += abc[newIndex];
                j++;
            } else {
                encodedMessage += char;
            }
        }
        return encodedMessage;
    };
    this.decode = function (str) {
        let decodedMessage = '';
        for (let i = 0, j = 0; i < str.length; i++) {
            const char = str[i];
            if (abc.includes(char)) {
                const keyChar = key[j % key.length];
                const shift = abc.indexOf(keyChar);
                const newIndex = (abc.indexOf(char) - shift + abc.length) % abc.length;
                decodedMessage += abc[newIndex];
                j++;
            } else {
                decodedMessage += char;
            }
        }
        return decodedMessage;
    };
}