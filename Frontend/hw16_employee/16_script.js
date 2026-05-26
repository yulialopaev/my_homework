// 1. Classes
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
        return `${this.#name}, ${this.#id}, ${this.title}, ${this.#salary} NIS`
    }
}


class Company {
    #employees = []

    // метод для приёма на работу
    hireEmployee(employee) {
        if (!(employee instanceof Employee)) {
            return 'Error! You can hire just objects from Employee class'
        }

        const isIdExists = this.#employees.some(function (emp) {
            return emp.getId() === employee.getId()
        })

        if (isIdExists) {
            return `Error! The employee with id ${employee.getId()} is already in the company`
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
    getAllEmployees() {
        return this.#employees
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
let employee5 = new Employee(356562, "Kirill Lopaev", "People manager", 19600)
let employee6 = new Employee(350445, "Genri Rotshild", "Team Lead", 52000)


const company = new Company()
company.hireEmployee(employee1)
company.hireEmployee(employee2)
company.hireEmployee(employee3)
company.hireEmployee(employee4)
company.hireEmployee(employee5)
company.hireEmployee(employee6)


// Add elements to HTML
const container = document.querySelector('#container')
const addEmp = document.createElement('div')
container.appendChild(addEmp)

const pAdd = document.createElement('h2')
pAdd.textContent = 'Add new employee'
addEmp.appendChild(pAdd)

const pName = document.createElement('p')
pName.textContent = 'Employee name:'
addEmp.appendChild(pName)

const inputName = document.createElement('input')
addEmp.appendChild(inputName)

const pID = document.createElement('p')
pID.textContent = 'ID:'
addEmp.appendChild(pID)