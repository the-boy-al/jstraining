function uppercaseEachWord(str){
    let newStr ="";
    for (let i = 0; i < str.length; i++){
        if (i == 0 || str[i-1] == " "){
            newStr = newStr + str.charAt(i).toUpperCase();
        } else {
            newStr = newStr + str[i];
        }
    }
    return newStr;
}

console.log(uppercaseEachWord("the quick brown fox")); // The Quick Brown Fox