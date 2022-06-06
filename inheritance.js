class Person {
    constructor(name, age){
        this.name = name
        this.age = age
    }

    describe() {
        console.log(`I am ${this.name} and I am ${this.age}`)
    }
}


// inheritance - Programmer extends Person
class Programmer extends Person {
    constructor(language, name, age){
        super(name, age)
        this.language = language
    }
    describe() {
        console.log(`${this.name} is a programmer that knows ${this.language}`)
    }

    code() {
        console.log(`${this.name} is coding`)
    }
}


const chad = new Person('Chad', 17)
const peter = new Programmer('Javascript', 'Peter', 22)
const kyler = new Programmer('Golang', 'Kyler', 12)

chad.describe()
peter.describe()



function developSoftware (programmers) {
    for(let programmer of programmers) {
        programmer.code()
    }
}

const programmers = [peter, kyler]

developSoftware(programmers)