class Employee {
    #id
    #name = 'Anonymous'
    #salary

    constructor(id, name, title, salary) {
        this.#id = id
        this.setName(name)
        this.title = title
        this.setSalary(salary)
    }
    setName(name) {
        if(name && typeof name === 'string') {
            this.#name = name;
        }
    }

    setSalary(salary) {
        if (typeof salary === 'number' && salary > 10000) {
            this.#salary = salary;
        }
    }

    getName() {
        return this.#name
    }

    getSalary() {
        return this.#salary
    }

    getId() {
        return this.#id
    }

    toString() {
        return `Name: ${this.#name}, salary: ${this.#salary}, title: ${this.title}`
    }
}


class Company {
    #employees = []

    hireEmployee(employee) {
        this.#employees.push(employee)
    }

    // метод для приёма на работу
    fireEmployee(id) {
        let firedEmployee = this.#employees.find(function (employee) {
            return employee.getId() === id
        })
        let index = this.#employees.indexOf(firedEmployee)
        this.#employees.splice(index, 1)
    }
    // метод для увольнения только по id

    getAllEmployee() {
        this.#employees.forEach(function (employee) {
            console.log(employee.toString())
        })
    }
//   метод для вывода всех работников
    getTotalSalary() {
        return this.#employees.reduce(function (acc, employee) {
            return acc + employee.getSalary()
        }, 0)
    }
//     метод по получению общей зарплаты
    getMinSalary() {
        const minSalary = this.#employees.reduce(function (acc, employee) {
            if (employee.getSalary() < acc.getSalary()) {
                return employee
            } else {
                return acc
            }
        }, this.#employees[0])
    return minSalary.getSalary()
    }

//     минимальная зарплата
}


let employee1 = new Employee(304455, "Ivan Pupkin", "Junior QA", 11000)
let employee2 = new Employee(245003, "Maria Lyapkina", "Backend Developer", 23000)
let employee3 = new Employee(652427, "Rotem Manteka", "Manager", 15000)
let employee4 = new Employee(324587, "Yulia Lopaev", "Fullstack Developer", 28000)

const company = new Company()
company.hireEmployee(employee1)
company.hireEmployee(employee2)
company.hireEmployee(employee3)
company.hireEmployee(employee4)

company.getAllEmployee()
console.log(company.getTotalSalary())
console.log(company.getMinSalary())
console.log("---------------------------------------\n")

company.fireEmployee(304455)
company.getAllEmployee()
console.log("---------------------------------------\n")

console.log(company.getTotalSalary())
console.log(company.getMinSalary())


