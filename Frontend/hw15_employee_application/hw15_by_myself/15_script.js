// 1. Classes

class Employee {
    #id;
    #name;
    #salary;

    constructor(id, name, position, salary) {
        this.#id = id;
        this.#name = name;
        this.position = position;
        this.#salary = salary;
    }

    setName(name) {
        if (!name.trim()) {
            return 'Error! The name cannot be empty'
        }

        if (name && typeof name === 'string') {
            this.#name = name;
        }
    }

    setSalary(salary) {
        if (typeof salary === 'number' && salary > 0) {
            this.#salary = salary;
        }
    }

    getName() {
        return this.#name;
    }

    getSalary() {
        return this.#salary;
    }

    getId() {
        return this.#id;
    }

    toString() {
        return `${this.#id}, ${this.#name}, ${this.position}, ${this.#salary} NIS`;
    }
}

class Company {
    #employees = []

    // Hire employee method
    hireEmployee(employee) {
        if (!(employee instanceof Employee)) {
            return 'Error! Employee must be an object from the class Employee'
        }

        this.#employees.push(employee);
    }

    // Fire employee by ID method
    fireEmployee(id) {
        if (typeof id !== 'number') {
            return 'Error! ID must be a number!'
        }

        const index = this.#employees.findIndex(function (employee) {
            return employee.getId() === id
        })

        if (index !== -1) {
            this.#employees.splice(index, 1)
        }

    }


    // Update employee method
    // updateEmployee() {
    //
    // }


    // метод для вывода всех работников
    getAllEmployees() {
        return this.#employees
    }

    // метод для получения общей зарплаты
    getTotalSalary() {
        let allSalary = 0;
        this.#employees.forEach(function (emp) {
            allSalary += emp.getSalary()
        })

        return allSalary
    }

    // метод для получения сотрудника с минимальной зарплатой
    getMinSalaryEmployee() {
        let minEmployee = this.#employees[0]
        for (let currentEmployee of this.#employees) {
            if (currentEmployee.getSalary() < minEmployee.getSalary()) {
                minEmployee = currentEmployee
            }
        }
        return minEmployee.toString()
    }
}

// Create Employees and Company
const employee1 = new Employee(100, 'Mike Pupkin', 'Chief', 20000);
const employee2 = new Employee(200, 'Harry Potter', 'wizard', 5000);

const pizzaHut = new Company()

pizzaHut.hireEmployee(employee1);
pizzaHut.hireEmployee(employee2);

// --- Create HTML elements: ---

// Create function
function createElement(addPlace, tag, id, textContent, className, placeholder, type) {
    const element = document.createElement(tag)

    if (id) element.id = id;
    if (textContent) element.textContent = textContent;
    if (className) element.className = className;
    if (placeholder) element.placeholder = placeholder;
    if (type) element.type = type;

    addPlace.appendChild(element);

    return element
}


// The main container
const container = createElement(document.body, 'div', 'container');


// Add Employee Part
const divAddEmployee = createElement(container, 'div', 'divAddEmployee', null, 'box');

const pAdd = createElement(divAddEmployee, 'p', 'pAdd', 'Add a new employee');

const labelAddID = createElement(divAddEmployee, 'label', 'labelAddID', 'ID:');
const inputAddID = createElement(divAddEmployee, 'input', 'inputAddID', null, null,
    'Enter ID', 'number');
inputAddID.min = '1';

const labelAddName = createElement(divAddEmployee, 'label', 'labelAddName', 'Full Name:');
const inputAddName = createElement(divAddEmployee, 'input', 'inputAddName', null, null,
    'Enter Full Name');

const labelAddPosition = createElement(divAddEmployee, 'label', 'labelAddPosition', 'Position:');
const inputAddPosition = createElement(divAddEmployee, 'input', 'inputAddPosition', null,
    0, 'Enter Position');

const labelAddSalary = createElement(divAddEmployee, 'label', 'labelAddSalary', 'Salary:');
const inputAddSalary = createElement(divAddEmployee, 'input', 'inputAddSalary', null,
    null, 'Enter Salary', 'number');
inputAddSalary.min = '1';

const buttonAdd = createElement(divAddEmployee, 'button', 'buttonAdd', 'Add',
    'niceButton')
const buttonAddClear = createElement(divAddEmployee, 'button', 'buttonClear', 'Clear',
    'simpleButton');

const pAddMessage = createElement(divAddEmployee, 'p', 'pAddMessage');


// Table of all employees and Search by name, position or id part
const divTableEmployees = createElement(container, 'div', 'divTableEmployees');
const pListEmployees = createElement(divTableEmployees, 'p', 'pListEmployees',
    'All employees of the company');
const inputSearch = createElement(divTableEmployees, 'input', 'inputSearch', null, null,
    'Search by id, name or position');
const buttonSearch = createElement(divTableEmployees, 'button', 'buttonSearch', 'Search', 'niceButton');
const tableEmployee = createElement(divTableEmployees, 'table', 'tableEmployee');


// Fire employee part
const divFireEmployee = createElement(container, 'div', 'divFireEmployee', null, 'box');
const pFire = createElement(divFireEmployee, 'p', 'pFire', 'Fire employee by ID')
const labelFireID = createElement(divFireEmployee, 'label', 'labelFireID', 'ID:');
const inputFireID = createElement(divFireEmployee, 'input', 'inputFireID', null, null,
    'Enter ID', 'number');

const buttonFire = createElement(divFireEmployee, 'button', 'buttonFire', 'Fire',
    'niceButton');
const buttonFireClear = createElement(divFireEmployee, 'button', 'buttonFireClear', 'Clear',
    'simpleButton')

const pFireMessage = createElement(divFireEmployee, 'p', 'pFireMessage');


// Total salary part
const divTotalSalary = createElement(container, 'div', 'divTotalSalary', null, 'box');
const pTitleTotalSalary = createElement(divTotalSalary, 'p', null, 'Total Salary')
const pTotalSalary = createElement(divTotalSalary, 'p', null, pizzaHut.getTotalSalary());


// Employee with min salary part
const divMinSalary = createElement(container, 'div', 'divMinSalary', null, 'box');
const pTitleMinSalary = createElement(divMinSalary, 'p', null, 'Employee with min salary');
const pMinSalary = createElement(divMinSalary, 'p', null, pizzaHut.getMinSalaryEmployee());

// Update employee part


// ---- Render Employee List ----
// render function
function renderEmployeeList() {

    const listEmployees = pizzaHut.getAllEmployees()

    if (listEmployees.length === 0) {
        tableEmployee.textContent = 'There are no employees in the company'
        return
    }

    const headerRow = createElement(tableEmployee, 'tr', 'headerRow');
    createElement(headerRow, 'th', null, 'ID');
    createElement(headerRow, 'th', null, 'Full Name');
    createElement(headerRow, 'th', null, 'Position');
    createElement(headerRow, 'th', null, 'Salary');

    listEmployees.forEach(function (emp) {
        const bodyRow = createElement(tableEmployee, 'tr', 'bodyRow');
        createElement(bodyRow, 'td', null, emp.getId())
        createElement(bodyRow, 'td', null, emp.getName());
        createElement(bodyRow, 'td', null, emp.position);
        createElement(bodyRow, 'td', null, emp.getSalary());
        const editButton = createElement(bodyRow, 'button', null, 'Edit', 'editButton');
        const saveButton = createElement(bodyRow, 'button', null, 'Save', 'saveButton');
    })

    pTotalSalary.textContent = pizzaHut.getTotalSalary()
    pMinSalary.textContent = pizzaHut.getMinSalaryEmployee()

}

renderEmployeeList();


// ---- Listeners ----
// Add button
buttonAdd.addEventListener('click', function () {
    const id = Number(inputAddID.value);
    const name = inputAddName.value.trim();
    const position = inputAddPosition.value.trim();
    const salary = Number(inputAddSalary.value);

    if (!id || !name || !position || !salary) {
        pAddMessage.textContent = 'Please fill in all fields.'
        pAddMessage.style.color = 'red'
        return;
    }

    const newEmployee = new Employee(id, name, position, salary);
    pizzaHut.hireEmployee(newEmployee);
    pAddMessage.textContent = 'Employee added successfully.'
    pAddMessage.style.color = 'green'

    tableEmployee.textContent = '';

    renderEmployeeList();

    inputAddID.value = '';
    inputAddName.value = '';
    inputAddPosition.value = '';
    inputAddSalary.value = '';

})

// Add Clear Button
buttonAddClear.addEventListener('click', function () {
    inputAddID.value = '';
    inputAddName.value = '';
    inputAddPosition.value = '';
    inputAddSalary.value = '';
})


// Fire Button
buttonFire.addEventListener('click', function () {
    const id = Number(inputFireID.value)

    if (!id) {
        pFireMessage.textContent = `Please enter ID`;
        pFireMessage.style.color = 'red';
        return
    }

    pizzaHut.fireEmployee(id)

    pFireMessage.textContent = 'Employee fired successfully.';
    pFireMessage.style.color = 'green';

    tableEmployee.textContent = '';
    renderEmployeeList()

})


// Fire CLear Button
buttonFireClear.addEventListener('click', function () {
    inputFireID.value = '';
})


// Search Button
buttonSearch.addEventListener('click', function () {
    if (inputSearch.value) {
        pizzaHut.getAllEmployees().filter()
    }
})

