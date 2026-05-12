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
        if (name && typeof name === 'string') {
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

    // метод для приёма на работу
    hireEmployee(employee) {
        if (!(employee instanceof Employee)) {
            console.log('Error! You can hire just objects from Employee class')
            return
        }

        const isIdExists = this.#employees.some(function (emp) {
            return emp.getId() === employee.getId()
        })

        if (isIdExists) {
            console.log(`Error! The employee with id ${employee.getId()} is already in the company`)
            return;
        }
        this.#employees.push(employee)
    }

    // метод для увольнения только по id
    fireEmployee(id) {
        const index = this.#employees.findIndex(function (employee) {
            return employee.getId() === id
        })

        if (index !== -1) {
            this.#employees.splice(index, 1)
        }

    }

    //   метод для вывода всех работников
    getAllEmployee() {
        this.#employees.forEach(function (employee) {
            console.log(employee.toString())
        })
    }

    //     метод по получению общей зарплаты
    getTotalSalary() {
        return this.#employees.reduce(function (acc, employee) {
            return acc + employee.getSalary()
        }, 0)
    }

    //     минимальная зарплата
    getEmployeeMinSalary() {
        if (this.#employees.length === 0) {
            return "There is no employees in the company"
        }

        const minEmployee = this.#employees.reduce(function (acc, employee) {
            if (employee.getSalary() < acc.getSalary()) {
                return employee
            } else {
                return acc
            }
        })
        return minEmployee.toString()
    }
}


let employee1 = new Employee(304455, "Anatoly Davydov", "Junior QA", 11000)
let employee2 = new Employee(245003, "Maria Lyapkina", "Backend Developer", 23000)
let employee3 = new Employee(652427, "Rotem Manteka", "People Manager", 15000)
let employee4 = new Employee(324587, "Yulia Lopaev", "Fullstack Developer", 28000)

const company = new Company()
company.hireEmployee(employee1)
company.hireEmployee(employee2)
company.hireEmployee(employee3)
company.hireEmployee(employee4)

company.getAllEmployee()
console.log(company.getTotalSalary())
console.log(company.getEmployeeMinSalary())
console.log("---------------------------------------\n")

company.fireEmployee(304455)
company.getAllEmployee()
console.log("---------------------------------------\n")

console.log(company.getTotalSalary())
console.log(company.getEmployeeMinSalary())

console.log(typeof employee4)





