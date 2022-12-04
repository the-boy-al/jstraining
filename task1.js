const student = {
    id: 25,
    name : "David Rayy",
    class : 12,
 };

 function getProperties(obj){
    return Object.getOwnPropertyNames(obj);

 }
 
console.log (getProperties(student)); // ["id", "name", "class"]