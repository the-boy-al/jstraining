function minAndMax(arr){
    let result = [arr[0],arr[1]];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < result[0]){
            result [0] = arr[i];
        }
        if (arr[i] > result[1]){
            result [1] = arr[i];
        }
    }
    return result;
}


console.log(minAndMax([17, 5, 10, 2, 20, 12, 11, 16, 14, 9])); // [2, 20]
console.log(minAndMax([6, 7, 16, 11, 12, 10, 9, 4, 1, 15])); // [1, 16]