class Animal {
    constructor(name){
        this.name = name
    }
    
    makeSound () {
        console.log(`${this.name} generic animal sound`)
    }
}

const animalOne = new Animal('Felix')
animalOne.makeSound()

class Dog extends Animal {
    constructor(name){
        super(name)
    }

    makeSound () {
        super.makeSound();
        console.log('woof woof')
    }
}

const dog = new Dog('Doug')
dog.makeSound()