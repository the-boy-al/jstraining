function isPalindrome(str) {
    let result = true;
    let str2 = str.toLowerCase();
    for (let i = 0; i < (str2.length/2); i++){
        if (str2[i] != str2[str2.length-1-i]){
            result = false;
        }
    }
    return result;
}


console.log(isPalindrome("loki")); // false
console.log(isPalindrome("aba")); // true
console.log(isPalindrome("abab")); // false
console.log(isPalindrome("Qazaq")); // true