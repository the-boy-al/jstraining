function reverse(num) {
    let newArr = Array.from(String(num), Number);
    let revArr = [];
    for (let i = 0; i < newArr.length; i++){
        let a = newArr[i];
        revArr.unshift(a);
    }
    let num2 = +revArr.join("");
    return num2;
}



console.log(reverse(32234)); // 43223