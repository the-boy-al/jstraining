class Cat{
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log (`${this.name} says Meow`);
    }
}

class newCat extends Cat {
    constructor (name,owner){
        super(name);
        this.owner = owner;
    }
    belongsTo(){
        if (this.owner == ""){
            console.log(`${this.name} does not belong to anyone`);
        } else {
            console.log(`${this.name} belongs to ${this.owner}`);
        }
    }

}

class Dog{
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log (`${this.name} says Gav`);
    }
}

class newDog extends Dog {
    constructor (name,owner){
        super(name);
        this.owner = owner;
    }
    belongsTo(){
        if (this.owner == ""){
            console.log(`${this.name} does not belong to anyone`);
        } else {
            console.log(`${this.name} belongs to ${this.owner}`);
        }
    }

}

const cat1 = new newCat("Tom", "Babka");
const cat2 = new newCat("Cheshyrskyi kot", "");
const cat3 = new newCat("Garfield", "John");
const dog1 = new newDog("Scooby-doo", "Shaggy");
const dog2 = new newDog("Beethover", "Emily");
const dog3 = new newDog("Spike", "Babka");

cat1.speak();
cat2.speak();
cat3.speak();

cat1.belongsTo();
cat2.belongsTo();
cat3.belongsTo();

dog1.speak();
dog2.speak();
dog3.speak();

dog1.belongsTo();
dog2.belongsTo();
dog3.belongsTo();