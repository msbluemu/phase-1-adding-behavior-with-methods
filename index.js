// Your code here
class Cat {
    constructor(name, sex){
        this.name = name;
        this.sex = sex;
    }

    speak(){
     console.log(`${this.name} says meow!`)
    }
}

const kitty = new Cat('kitty', 'female');
kitty.speak();

class Dog {
    constructor(name, sex){
        this.name = name;
        this.sex = sex;
    }

    speak(){
     console.log(`${this.name} says woof!`)
    }
}

const eric = new Dog('eric', 'male');
eric.speak();

class Bird {
    constructor(name, sex){
        this.name = name;
        this.sex = sex;
    }

    speak(){
        if(this.sex === 'male'){
            console.log(`It's me! ${this.name}, the parrot!`)
        } else {
            console.log(`${this.name} says squawk`)
        }
    }
}

const maleBird = new Bird('malebird', 'male');
maleBird.speak();

const femaleBird = new Bird('femalebird', 'female');
femaleBird.speak();