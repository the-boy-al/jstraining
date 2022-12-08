
function multiply2Max (num)  {
    function multiply2MaxInt (num2) {
        function multiply2MaxInt2 (num3){
            let arr = [num, num2, num3];
            arr.sort((a,b) => {
                if(a > b) return 1;
                if(a < b) return -1;
                return 0;
            });
            return arr[0] * arr[1];
        }
        return multiply2MaxInt2;
    }
    return multiply2MaxInt;
}



console.log(multiply2Max(1)(2)(3)); // 2
console.log(multiply2Max(4)(4)(1)); // 4
console.log(multiply2Max(3)(0)(5)); // 0
