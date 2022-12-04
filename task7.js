function uniqueChar(str){
    let result = str[0];
    let currentChar ='';
    for (let i =0;i < str.length; i++){
        currentChar = str[i];
        for (let j =0; j < result.length; j++){
            if (currentChar == result[j]){
                break;
            }
            if (j == (result.length - 1)){
                result = result + currentChar
            }
        }
    }
    return result;
}


console.log(uniqueChar("thequickbrownfoxjumpsoverthelazydog")); // thequickbrownfxjmpsvlazydg