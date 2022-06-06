class Employee {

    constructor({fullName, id}){
        this.fullName = fullName
        this.id = id
        this.tasks = []
    }

    get name() {
        return `${this.fullName}`
    }

    set name(name) {
        this.fullName = name
    }

    addTasks (task) {
        this.tasks.push(task)
    }
}

const peter = new Employee({fullName: 'Peter Kwan', id: 22})

console.log(peter)

peter.addTasks('learn python')

console.log(peter)

console.log(peter.fullName)
