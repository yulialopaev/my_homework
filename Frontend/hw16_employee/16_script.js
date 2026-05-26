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


// Add all elements to HTML
const container = document.querySelector('#container')

const divAdd = document.createElement('div')
divAdd.className = 'div-add'
container.appendChild(divAdd)

const hAdd = document.createElement('h2')
hAdd.textContent = 'Add new employee'
divAdd.appendChild(hAdd)

const pName = document.createElement('p')
pName.textContent = 'Employee name:'
divAdd.appendChild(pName)

const inputName = document.createElement('input')
divAdd.appendChild(inputName)

const pID = document.createElement('p')
pID.textContent = 'ID:'
divAdd.appendChild(pID)

const inputID = document.createElement('input')
divAdd.appendChild(inputID)

const pPosition = document.createElement('p')
pPosition.textContent = 'Position:'
divAdd.appendChild(pPosition)

const inputPosition = document.createElement('input')
divAdd.appendChild(inputPosition)

const pSalary = document.createElement('p')
pSalary.textContent = 'Salary:'
divAdd.appendChild(pSalary)

const inputSalary = document.createElement('input')
divAdd.appendChild(inputSalary)

const addBtn = document.createElement('button')
addBtn.textContent = 'Add'
addBtn.className = 'button'
divAdd.appendChild(addBtn)

const clearBtn = document.createElement('button')
clearBtn.textContent = 'Clear'
clearBtn.className = 'button'
divAdd.appendChild(clearBtn)

const divHire = document.createElement('div')
divHire.className = 'div-hire'
container.appendChild(divHire)

const hHire = document.createElement('h2')
hHire.textContent = 'Hire employee'
divHire.appendChild(hHire)

const pIDHire = document.createElement('p')
pIDHire.textContent = 'ID:'
divHire.appendChild(pIDHire)

const inputIDHire = document.createElement('input')
divHire.appendChild(inputIDHire)

const hireBtn = document.createElement('button')
hireBtn.textContent = 'Hire'
divHire.appendChild(hireBtn)

const clearBtnHire = document.createElement('button')
clearBtnHire.textContent = 'Clear'
clearBtnHire.classList.add('clear-btn')
divHire.appendChild(clearBtnHire)

let divList = document.createElement('div')
divList.className = 'div-list'
container.appendChild(divList)

let searchInput = document.createElement('input')
searchInput.placeholder = 'Search by name or position'
divList.appendChild(searchInput)

let hList = document.createElement('h2')
hList.textContent = 'Employee list'
divList.appendChild(hList)

let list = document.createElement('ul')
divList.appendChild(list)

let divTotal = document.createElement('div')
divTotal.className = 'div-total'
container.appendChild(divTotal)

let hTotal = document.createElement('h2')
hTotal.textContent = 'Total salary'
divTotal.appendChild(hTotal)

let pTotal = document.createElement('p')
divTotal.appendChild(pTotal)

let divMin = document.createElement('div')
divMin.className = 'div-min'
container.appendChild(divMin)

let hMin = document.createElement('h2')
hMin.textContent = 'Min salary'
divMin.appendChild(hMin)

let pMin = document.createElement('p')
divMin.appendChild(pMin)
