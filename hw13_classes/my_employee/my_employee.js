class Employee {
    #id
    #name
    #salary

    constructor(id, name, title, salary) {
        this.#id = id;
        this.setName(name);
        this.title = title;
        this.setSalary(salary)
    }

    setName(name) {
        if (name && typeof name === "string") {
            this.#name = name;
        }
    }

    setSalary(salary) {
        if (typeof salary === "number" && salary > 10000) {
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
        return `Name: ${this.#name}, salary: ${this.#salary}, title: ${this.title}`;
    }
}




// console.log(employee1)
// console.log(employee1.getSalary())
// console.log(employee1.getName())
// console.log(employee1.toString())


class Company {
    #employees = []

    hireEmployee(employee) {
        if (!employee instanceof Employee) {
            console.log("Employee must be an Employee object")
            return false
        }

        const alreadyExists = this.#employees.some(emp => emp.getId() === employee.getId())
        if (alreadyExists) {
            console.log(`Employee with ID ${employee.getId()} already exists`)
            return false
        }
        this.#employees.push(employee)
        return true
    }

    fireEmployee(id) {
        const index = this.#employees.findIndex(emp => emp.getId() === id)

        if (index === -1) {
            console.log(`Employee with ${id} didn't find`)
            return false
        }
        this.#employees.splice(index, 1)
        return true


    }

    getAllEmployees() {
        return [...this.#employees]
    }

    getTotalSalary() {
        return this.#employees.reduce((acc, value) => acc + value.getSalary(), 0)
    }

    getEmployeeWithMinSalary() {
        if (this.#employees.length === 0) return null;
        return this.#employees.reduce((minEmp, currEmp)=> {
            if (minEmp.getSalary() > currEmp.getSalary()) {
                return currEmp;
            }
            else {
                return minEmp;
            }
        })

    }
}

let employee1 = new Employee(1000, "Maria Ivanov", "Accountant", 12000);
let employee2 = new Employee(1001, "John Penkin", "Waiter", 11000)
let employee3 = new Employee(1002, "Yulia Lopaev", "Backend Developer", 16000)


let myCompany = new Company()
myCompany.hireEmployee(employee1)
myCompany.hireEmployee(employee2)
myCompany.hireEmployee(employee3)
myCompany.hireEmployee(employee3)
console.log(myCompany)


console.log(myCompany.getAllEmployees())
console.log(myCompany.getTotalSalary())
console.log(myCompany.getEmployeeWithMinSalary())