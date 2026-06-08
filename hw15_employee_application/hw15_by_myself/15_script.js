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

        const isIdExists = this.#employees.some(function (emp) {
            return emp.getId() === employee.getId()

        })

        if (isIdExists) {
            return 'Error! Employee with this ID is already exists.'
        }

        this.#employees.push(employee);
    }

    // Fire employee by ID method
    fireEmployee(id) {
        if (typeof id !== 'number') {
            return 'Error! ID must be a number!'
        }

        const isIdExists = this.#employees.some(function (emp) {
            return emp.getId() === id;
        })

        if (!isIdExists) {
            return 'Error! Employee with this ID does NOT exist.'
        }

        const index = this.#employees.findIndex(function (employee) {
            return employee.getId() === id
        })

        if (index !== -1) {
            this.#employees.splice(index, 1)
        }

    }


    // Update employee method
    updateEmployee(id, name, position, salary) {
        const employee = this.#employees.find(function (emp) {
            return emp.getId() === id;
        })

        if (!employee) {
            return 'Employee did not find'
        }

        employee.setName(name)
        employee.position = position
        employee.setSalary(salary)
    }


    // Get table of all employees method
    getAllEmployees() {
        return this.#employees
    }


    // Get total salary method
    getTotalSalary() {
        let allSalary = 0;
        this.#employees.forEach(function (emp) {
            allSalary += emp.getSalary()
        })

        return allSalary
    }

    // Get employee with min Salary method
    getMinSalaryEmployee() {
        let minEmployee = this.#employees[0]
        for (let currentEmployee of this.#employees) {
            if (currentEmployee.getSalary() < minEmployee.getSalary()) {
                minEmployee = currentEmployee
            }
        }
        return minEmployee.toString()
    }

    getNumberEmployees() {
        return this.#employees.length
    }
}

// Create Employees and Company
const employee1 = new Employee(100, 'Mike Pupkin', 'Chief', 20000);
const employee2 = new Employee(101, 'Henry Maaravy', 'Tour Agent', 15000);
const employee3 = new Employee(102, 'Sarah Cohen', 'Developer', 18000);
const employee4 = new Employee(103, 'David Levi', 'Designer', 14000);
const employee5 = new Employee(104, 'Anna Shapiro', 'Marketing Manager', 16000);
const employee6 = new Employee(105, 'Tom Goldberg', 'QA Engineer', 13000);
const employee7 = new Employee(106, 'Maya Stern', 'Project Manager', 22000);
const employee8 = new Employee(107, 'Eli Mizrahi', 'DevOps', 19000);
const employee9 = new Employee(108, 'Rachel Green', 'HR Manager', 12000);
const employee10 = new Employee(109, 'Avi Katz', 'Team Lead', 25000);


const myCompany = new Company()

myCompany.hireEmployee(employee1);
myCompany.hireEmployee(employee2);
myCompany.hireEmployee(employee3);
myCompany.hireEmployee(employee4);
myCompany.hireEmployee(employee5);
myCompany.hireEmployee(employee6);
myCompany.hireEmployee(employee7);
myCompany.hireEmployee(employee8);
myCompany.hireEmployee(employee9);
myCompany.hireEmployee(employee10);


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

const hAdd = createElement(divAddEmployee, 'h2', 'pAdd', 'Add a new employee');

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
const divTableEmployees = createElement(container, 'div', 'divTableEmployees', null, 'box');
const hListEmployees = createElement(divTableEmployees, 'h2', 'pListEmployees',
    'All employees of the company');
const inputSearch = createElement(divTableEmployees, 'input', 'inputSearch', null, null,
    'Search by id, name or position');
// const searchButton = createElement(divTableEmployees, 'button', 'searchButton', 'Search', 'niceButton');
const tableEmployee = createElement(divTableEmployees, 'table', 'tableEmployee');


// Fire employee part
const divFireEmployee = createElement(container, 'div', 'divFireEmployee', null, 'box');
const hFire = createElement(divFireEmployee, 'h2', 'pFire', 'Fire employee by ID')
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
const hTitleTotalSalary = createElement(divTotalSalary, 'h2', null, 'Total Salary');
const pTotalSalary = createElement(divTotalSalary, 'p', null, myCompany.getTotalSalary());


// Employee with min salary part
const divMinSalary = createElement(container, 'div', 'divMinSalary', null, 'box');
const hTitleMinSalary = createElement(divMinSalary, 'h2', null, 'Employee with min salary');
const pMinSalary = createElement(divMinSalary, 'p', null, myCompany.getMinSalaryEmployee());

// Total number of employees
const divTotalNumber = createElement(container, 'div', 'divTotalNumber', null, 'box');
const hTitleTotalNumber = createElement(divTotalNumber, 'h2', null, 'Number of employees');
const pTotalNumber = createElement(divTotalNumber, 'p', null, myCompany.getNumberEmployees())

// ---- Render Employee List ----
// render function
function renderEmployeeList() {
    tableEmployee.textContent = '';

    const listEmployees = myCompany.getAllEmployees()

    if (listEmployees.length === 0) {
        tableEmployee.textContent = 'There are no employees in the company'
        return
    }

    // Create a table with all employees
    const headerRow = createElement(tableEmployee, 'tr', 'headerRow');
    createElement(headerRow, 'th', null, 'ID');
    createElement(headerRow, 'th', null, 'Full Name');
    createElement(headerRow, 'th', null, 'Position');
    createElement(headerRow, 'th', null, 'Salary');

    listEmployees.forEach(function (emp) {
        const bodyRow = createElement(tableEmployee, 'tr');

        const tdTableId = createElement(bodyRow, 'td')
        const spanId = createElement(tdTableId, 'span', null, emp.getId())

        const tdTableName = createElement(bodyRow, 'td');
        const spanName = createElement(tdTableName, 'span', null, emp.getName())
        const inputEditName = createElement(tdTableName, 'input', null, null,
            'inputEdit');
        inputEditName.style.display = 'none';
        inputEditName.value = emp.getName();

        const tdTablePosition = createElement(bodyRow, 'td');
        const spanPosition = createElement(tdTablePosition, 'span', null, emp.position)
        const inputEditPosition = createElement(tdTablePosition, 'input', null, null,
            'inputEdit');
        inputEditPosition.style.display = 'none';
        inputEditPosition.value = emp.position;

        const tdTableSalary = createElement(bodyRow, 'td');
        const spanSalary = createElement(tdTableSalary, 'span', null, emp.getSalary())
        const inputEditSalary = createElement(tdTableSalary, 'input', null, null,
            'inputEdit');
        inputEditSalary.style.display = 'none';
        inputEditSalary.value = emp.getSalary();

        const buttonEdit = createElement(bodyRow, 'button', null, 'Edit',
            'niceButton');

        const buttonSave = createElement(bodyRow, 'button', null, 'Save',
            'simpleButton');
        buttonSave.style.display = 'none';


        // Edit Button Listener
        buttonEdit.addEventListener('click', function () {

            // Hide text
            spanName.style.display = 'none';
            spanPosition.style.display = 'none';
            spanSalary.style.display = 'none';

            // Show inputs
            inputEditName.style.display = 'inline-block';
            inputEditPosition.style.display = 'inline-block';
            inputEditSalary.style.display = 'inline-block';

            // Change buttons
            buttonEdit.style.display = 'none';
            buttonSave.style.display = 'block';


        })

        // Save button Listener
        buttonSave.addEventListener('click', function () {

            // Show text
            spanName.style.display = 'inline-block';
            spanPosition.style.display = 'inline-block';
            spanSalary.style.display = 'inline-block';

            // Hide inputs
            inputEditName.style.display = 'none';
            inputEditPosition.style.display = 'none';
            inputEditSalary.style.display = 'none';

            // Change buttons
            buttonEdit.style.display = 'block';
            buttonSave.style.display = 'none';

            // Change values
            const id = Number(spanId.textContent);
            const name = inputEditName.value;
            const position = inputEditPosition.value;
            const salary = Number(inputEditSalary.value);

            myCompany.updateEmployee(id, name, position, salary)

            spanName.textContent = name;
            spanPosition.textContent = position;
            spanSalary.textContent = salary;

        })
    })

    pTotalSalary.textContent = myCompany.getTotalSalary()
    pMinSalary.textContent = myCompany.getMinSalaryEmployee()
    pTotalNumber.textContent = myCompany.getNumberEmployees()

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

    const errorMessage = myCompany.hireEmployee(newEmployee)

    if (errorMessage) {
        pAddMessage.textContent = errorMessage
        pAddMessage.style.color = 'red'
        return;
    } else {
        pAddMessage.textContent = 'Employee added successfully.'
        pAddMessage.style.color = 'green'


    }

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
    const errorMessage = myCompany.fireEmployee(id)
    if (errorMessage) {
        pFireMessage.textContent = `Employee with ID ${id} didn't find`;
        pFireMessage.style.color = 'red';
        return;
    } else {
        pFireMessage.textContent = 'Employee fired successfully.';
        pFireMessage.style.color = 'green';
    }

    renderEmployeeList()

})


// Fire CLear Button
buttonFireClear.addEventListener('click', function () {
    inputFireID.value = '';
    pFireMessage.textContent = '';
})


// // Search by id, name, position
// inputSearch.addEventListener('input', function () {
//     const query = inputSearch.value.toLowerCase();
//
//     const filtered = myCompany.getAllEmployees().filter(function(emp) {
//         if (query.includes(emp.getid
//         ))
//     })
//     if (employee.getId().includes(inputSearch.value)) {
//
//     }
// })


