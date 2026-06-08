
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

// 2. Mock Data
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

// 3. DOM elements
const listDOM = document.getElementById('employee-list')
const minSalaryDOM = document.getElementById('min-salary')
const totalSalaryDOM = document.getElementById('total-salary')

// 4. Function
function renderEmployeeList(employees = company.getAllEmployees()) {


    const min = company.getEmployeeMinSalary()
    const total = company.getTotalSalary()

    const sorted = [...employees].sort((a, b) =>
        a.getName().localeCompare(b.getName())
    )

    listDOM.innerHTML = sorted.map(emp => `<p>${emp.toString()}</p>`).join('')
    minSalaryDOM.textContent = min
    totalSalaryDOM.textContent = total
}

renderEmployeeList()

// 5. Even Listeners
document.getElementById('add-btn').addEventListener('click', function () {
    const name = document.getElementById('name').value
    const id = Number(document.getElementById('id').value)
    const position = document.getElementById('position').value
    const salary = Number(document.getElementById('salary').value)


    if (!name) {
        alert('Employee name cannot be empty')
        return
    }

    if (salary <=0) {
        alert("Salary must be a positive number")
        return
    }

    const employee = new Employee(id, name, position, salary)
    const errorMessage = company.hireEmployee(employee)

    if (errorMessage) {
        alert(errorMessage)
    } else {
        renderEmployeeList()
    }

    document.getElementById('name').value = ''
    document.getElementById('id').value = ''
    document.getElementById('position').value = ''
    document.getElementById('salary').value = ''
})


document.getElementById('fire-btn').addEventListener('click', function () {
    const id = Number(document.getElementById('fire-id').value)
    company.fireEmployee(id)
    renderEmployeeList()
    document.getElementById('fire-id').value = ''
})

const clearButtons = document.querySelectorAll('.clear-btn')

clearButtons.forEach(button => {
    button.addEventListener('click', function (event) {
        const parentCard = event.target.closest('.card-body')
        const inputs = parentCard.querySelectorAll('input')

        inputs.forEach(input => input.value = '')
    })
})

document.getElementById('search').addEventListener('input', function () {
    const query = this.value.toLowerCase()
    const employees = company.getAllEmployees()

    const filtered = employees.filter(function(emp) {
        return emp.getName().toLowerCase().includes(query) ||
            emp.getId().toString().includes(query) ||
            emp.title.toLowerCase().includes(query)
    })

    renderEmployeeList(filtered)
})