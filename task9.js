function Gandalf() {
    console.log("You shall not pass!")
 }
 
 function call(num, Gandalf){
    this.num = num;
    for (let i = 0; i < this.num; i++){
        Gandalf();
    }
 }

 call(3, Gandalf)
 // You shall not pass!
 // You shall not pass!
 // You shall not pass!
 
 call(1, function run() {
    console.log("Fly, you fools!")
 })
 // Fly, you fools!