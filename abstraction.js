class Person {
    constructor({firstName, lastName, job}) {
        this.firstName = firstName
        this.lastName = lastName
        this.job = job
        this.skills = []
        Person._amount = Person._amount || 0;
        Person._amount++
    }

    static get amount() {
         return Person._amount
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }

    set fullName(name){
        [this.firstName, this.lastName] = name.split(' ')
    }

    learn(skill) {
        this.skills.push(skill)
    }
}

class Job {
    constructor(company, position, salary){
        this.company = company
        this.position = position
        this.salary = salary
    }   
}

const john = new Person({
    firstName: 'John',
    lastName: 'Doe',
    job: new Job('Serai', 'FE Dev', '40000')
})

