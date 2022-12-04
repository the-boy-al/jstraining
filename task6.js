function minAndMax2 (arr){
    let arrWithoutLeastAndMost = [];
    let least = arr[0];
    let most = arr[0];
    for (let i = 0;i < arr.length; i++){
        if (arr[i] < least){
            least = arr[i];
        }
        if (arr[i] > most){
            most = arr[i];
        }
    }
    for (let i = 0;i < arr.length; i++){
        if (arr[i] != least && arr[i] != most){
            arrWithoutLeastAndMost.push(arr[i])
        }
    }
    least = arrWithoutLeastAndMost[0];
    most = arrWithoutLeastAndMost[0];
    for (let i = 0;i < arr.length; i++){
        if (arrWithoutLeastAndMost[i] < least){
            least = arrWithoutLeastAndMost[i];
        }
        if (arrWithoutLeastAndMost[i] > most){
            most = arrWithoutLeastAndMost[i];
        }
    }
    let result = [least,most];
    return result;
}


console.log(minAndMax2([17, 5, 10, 2, 20, 12, 11, 16, 14, 9])); // [5, 17]
console.log(minAndMax2([6, 7, 16, 11, 12, 10, 9, 4, 1, 15])); // [4, 15]