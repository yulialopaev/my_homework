// 1. Classes
class Employee {
    #id;
    #name = 'Anonymous';
    #salary;

    constructor(id, name, title, salary) {
        this.#id = id;
        this.setName(name);
        this.title = title;
        this.setSalary(salary);
    }

    setName(name) {
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
        return `${this.#name}, ${this.#id}, ${this.title}, ${this.#salary} NIS`
    }
}


class Company {
    #employees = [];

    // метод для приёма на работу
    hireEmployee(employee) {
        if (!(employee instanceof Employee)) {
            return 'Error! You can hire just objects from Employee class';
        }

        const isIdExists = this.#employees.some(function (emp) {
            return emp.getId() === employee.getId();
        })

        if (isIdExists) {
            return `Error! The employee with id ${employee.getId()} is already in the company`;
        }
        this.#employees.push(employee);
    }

    // метод для увольнения только по id
    fireEmployee(id) {
        const index = this.#employees.findIndex(function (employee) {
            return employee.getId() === id;
        })

        if (index !== -1) {
            this.#employees.splice(index, 1);
        } else {
            return `Error! Employee with id ${id} not found`;
        }

    }

    updateEmployee(id, name, position, salary) {
        const employee = this.#employees.find(emp => emp.getId() === id)
        if (employee) {
            employee.setName(name)
            employee.title = position
            employee.setSalary(salary)
        }
    }

    //   метод для вывода всех работников
    getAllEmployees() {
        return this.#employees;
    }

    //     метод по получению общей зарплаты
    getTotalSalary() {
        return this.#employees.reduce(function (acc, employee) {
            return acc + employee.getSalary();
        }, 0)
    }

    //     минимальная зарплата
    getEmployeeMinSalary() {
        if (this.#employees.length === 0) {
            return "There is no employees in the company";
        }

        const minEmployee = this.#employees.reduce(function (acc, employee) {
            if (employee.getSalary() < acc.getSalary()) {
                return employee;
            } else {
                return acc;
            }
        })
        return minEmployee.toString();
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
const container = document.querySelector('#container');

// Add employee HTML
const div1 = document.createElement('div');
div1.className = 'divRow';
container.appendChild(div1);

const div2 = document.createElement('div');
div2.className = 'divCol';
div1.appendChild(div2);

const div3 = document.createElement('div');
div3.className = 'divCard';
div2.append(div3);

const divAdd = document.createElement('div');
divAdd.className = 'cardBody';
div3.appendChild(divAdd);

const pAdd = document.createElement('p');
pAdd.textContent = 'Add new employee';
pAdd.className = 'cardTitle'
divAdd.appendChild(pAdd);

const labelName = document.createElement('label');
labelName.textContent = 'Employee name:';
divAdd.appendChild(labelName);

const inputName = document.createElement('input');
inputName.id = 'name';
inputName.type = 'text'
divAdd.appendChild(inputName);

const labelID = document.createElement('label');
labelID.textContent = 'ID:';
divAdd.appendChild(labelID);

const inputID = document.createElement('input');
inputID.id = 'id';
inputID.type = 'number';
divAdd.appendChild(inputID);

const labelPosition = document.createElement('label');
labelPosition.textContent = 'Position:';
divAdd.appendChild(labelPosition);

const inputPosition = document.createElement('input');
inputPosition.id = 'position';
inputPosition.type = 'text';
divAdd.appendChild(inputPosition);

const labelSalary = document.createElement('label');
labelSalary.textContent = 'Salary:';
divAdd.appendChild(labelSalary);

const inputSalary = document.createElement('input');
inputSalary.id = 'salary';
inputSalary.type = 'number';
divAdd.appendChild(inputSalary);

const divAddButtons = document.createElement('div');
divAddButtons.className = 'allButtons';
divAdd.appendChild(divAddButtons);

const addBtn = document.createElement('button');
addBtn.textContent = 'Add';
addBtn.id = 'addButton';
divAddButtons.appendChild(addBtn);

const clearBtn = document.createElement('button');
clearBtn.textContent = 'Clear';
clearBtn.className = 'clearButton';
divAddButtons.appendChild(clearBtn);

const addMessageDiv = document.createElement('div');
addMessageDiv.id = 'addMessage';
divAdd.appendChild(addMessageDiv);


// Fire employee HTML
const div4 = document.createElement('div');
div4.className = 'divCol';
div1.appendChild(div4);

const div5 = document.createElement('div');
div5.className = 'divCol2';
div5.id = 'div5'
div4.appendChild(div5);

const divFireCard = document.createElement('div')
divFireCard.className = 'divCard2'
div5.appendChild(divFireCard)

const divFire = document.createElement('div');
divFire.className = 'divFire';
divFireCard.appendChild(divFire);

const pFire = document.createElement('p');
pFire.textContent = 'Fire employee';
pFire.className = 'cardTitle';
divFire.appendChild(pFire);

const div6 = document.createElement('div');
div6.id = 'div6';
divFire.appendChild(div6);

const labelIDFire = document.createElement('label');
labelIDFire.textContent = 'ID:';
div6.appendChild(labelIDFire);

const inputIDFire = document.createElement('input');
inputIDFire.id = 'fireID';
inputIDFire.type = 'number';
div6.appendChild(inputIDFire);

const divFireButtons = document.createElement('div');
divFireButtons.className = 'allButtons';
div6.appendChild(divFireButtons);

const fireBtn = document.createElement('button');
fireBtn.textContent = 'Fire';
fireBtn.id = 'fireButton';
divFireButtons.appendChild(fireBtn);

const clearBtnFire = document.createElement('button');
clearBtnFire.textContent = 'Clear';
clearBtnFire.className = 'clearButton';
clearBtnFire.classList.add('clear-btn');
divFireButtons.appendChild(clearBtnFire);

const fireMessageDiv = document.createElement('div');
fireMessageDiv.id = 'fireMessageDiv';
divFire.appendChild(fireMessageDiv);





// Search and employee list HTML
const div7 = document.createElement('div');
div7.className = 'divRow';
container.appendChild(div7);

const div8 = document.createElement('div');
div8.className = 'divCol';
div7.appendChild(div8);

const div9 = document.createElement('div');
div9.className = 'divCard';
div8.appendChild(div9);

const divList = document.createElement('div');
divList.className = 'cardBody';
divList.id = 'divList';
div9.appendChild(divList);

const searchInput = document.createElement('input');
searchInput.id = 'search';
searchInput.placeholder = 'Search by name or position';
divList.appendChild(searchInput);

const pList = document.createElement('p');
pList.textContent = 'Employee list';
pList.className = 'cardTitle';
divList.appendChild(pList);

const list = document.createElement('div');
list.id = 'employeeList';
divList.appendChild(list);


const div11 = document.createElement('div');
div11.className = 'divCard2';
div5.appendChild(div11);

const divTotal = document.createElement('div');
divTotal.className = 'cardBody';
div11.appendChild(divTotal);

const pTotal = document.createElement('p');
pTotal.textContent = 'Total salary';
pTotal.className = 'cardTitle';
divTotal.appendChild(pTotal);

const labelTotal = document.createElement('label');
labelTotal.id = 'getTotalSalary';
divTotal.appendChild(labelTotal);


// Min salary employee HTML
const div12 = document.createElement('div');
div12.className = 'divCard2';
div5.appendChild(div12);

const divMin = document.createElement('div');
divMin.className = 'cardBody';
div12.appendChild(divMin);

const pMin = document.createElement('p');
pMin.textContent = 'Min salary';
pMin.className = 'cardTitle';
divMin.appendChild(pMin);

const labelMin = document.createElement('label');
labelMin.id = 'minSalary';
divMin.appendChild(labelMin);


// Edit employee HTML
const divEditCol = document.createElement('div')
divEditCol.className = 'divCol'
divEditCol.id = 'editCol'
div7.appendChild(divEditCol)

const divEditCard = document.createElement('div')
divEditCard.className = 'divCard'
divEditCol.appendChild(divEditCard)

const divEditBody = document.createElement('div')
divEditBody.className = 'cardBody'
divEditCard.appendChild(divEditBody)

const pEdit = document.createElement('p')
pEdit.textContent = 'Edit employee'
pEdit.className = 'cardTitle'
divEditBody.appendChild(pEdit)

const labelEditName = document.createElement('label')
labelEditName.textContent = 'Employee name:'
divEditBody.appendChild(labelEditName)

const inputEditName = document.createElement('input')
inputEditName.id = 'editName'
inputEditName.type = 'text'
divEditBody.appendChild(inputEditName)

const labelEditPosition = document.createElement('label')
labelEditPosition.textContent = 'Position:'
divEditBody.appendChild(labelEditPosition)

const inputEditPosition = document.createElement('input')
inputEditPosition.id = 'editPosition'
inputEditPosition.type = 'text'
divEditBody.appendChild(inputEditPosition)

const labelEditSalary = document.createElement('label')
labelEditSalary.textContent = 'Salary:'
divEditBody.appendChild(labelEditSalary)

const inputEditSalary = document.createElement('input')
inputEditSalary.id = 'editSalary'
inputEditSalary.type = 'number'
divEditBody.appendChild(inputEditSalary)

const divEditButtons = document.createElement('div')
divEditButtons.className = 'allButtons'
divEditBody.appendChild(divEditButtons)

const saveButton = document.createElement('button')
saveButton.textContent = 'Save'
saveButton.id = 'saveButton'
divEditButtons.appendChild(saveButton)

const cancelButton = document.createElement('button')
cancelButton.textContent = 'Cancel'
cancelButton.className = 'clearButton'
divEditButtons.appendChild(cancelButton)

const editMessageDiv = document.createElement('div')
editMessageDiv.id = 'editMessage'
divEditBody.appendChild(editMessageDiv)

// Magic JavaScript

function renderEmployeeList(employees = company.getAllEmployees()) {

    const min = company.getEmployeeMinSalary();
    const total = company.getTotalSalary();
    const sorted = [...employees].sort((a, b) =>
        a.getName().localeCompare(b.getName())
    )

    list.innerHTML = '';

    sorted.forEach(emp => {
        const div = document.createElement('div');
        div.className = 'employeeRow';

        const span = document.createElement('span');
        span.textContent = emp.toString();

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.className = 'editButton';
        editButton.addEventListener('click', () => editEmployee(emp.getId()))

        list.appendChild(div);
        div.appendChild(span);
        div.appendChild(editButton);
    })

    labelMin.textContent = min;
    labelTotal.textContent = total;

}

renderEmployeeList();

// Edit employee
let currentEditID

function editEmployee(id) {
    currentEditID = id

    const employee = company.getAllEmployees().find(emp => emp.getId() === id)

    divEditCol.style.display = 'flex'  // показываем форму

    inputEditName.value = employee.getName()
    inputEditPosition.value = employee.title
    inputEditSalary.value = employee.getSalary()
}

cancelButton.addEventListener('click', function() {
    divEditCol.style.display = 'none'
})

saveButton.addEventListener('click', function () {
    const name = document.querySelector('#editName').value.trim()
    const position = document.querySelector('#editPosition').value.trim()
    const salary = Number(document.querySelector('#editSalary').value)

    if (!name) {
        showMessage(addMessageDiv, 'Error! Employee name cannot be empty!', true);
        return;
    }

    if (!position) {
        showMessage(addMessageDiv, 'Error! Position cannot be empty!', true);
        return;
    }

    if (salary < 0) {
        showMessage(addMessageDiv, 'Error! Salary must be positive!', true);
        return;
    }

    company.updateEmployee(currentEditID, name, position, salary)

    divEditCol.style.display = 'none'
    renderEmployeeList()
})



// Add a new employee (add Button):
document.querySelector('#addButton').addEventListener('click', function () {
    const name = document.querySelector('#name').value.trim();
    const id = Number(document.querySelector('#id').value);
    const position = document.querySelector('#position').value.trim();
    const salary = Number(document.querySelector('#salary').value);

    if (!name) {
        showMessage(addMessageDiv, 'Error! Employee name cannot be empty!', true);
        return;
    }

    if (!position) {
        showMessage(addMessageDiv, 'Error! Position cannot be empty!', true);
        return;
    }

    if (salary < 0) {
        showMessage(addMessageDiv, 'Error! Salary must be positive!', true);
        return;
    }

    const employee = new Employee(id, name, position, salary);
    const errorMessage = company.hireEmployee(employee);

    if (errorMessage) {
        showMessage(addMessageDiv, errorMessage, true);
    } else {
        renderEmployeeList();
        showMessage(addMessageDiv, 'Employee added successfully!');
    }
})

// Fire an employee by ID (fire Button)
document.querySelector('#fireButton').addEventListener('click', function () {
    const id = Number(document.querySelector('#fireID').value);
    const errorMessage = company.fireEmployee(id);

    if (errorMessage) {
        showMessage(fireMessageDiv, errorMessage, true);
    } else {
        showMessage(fireMessageDiv, 'Employee fired!');
        renderEmployeeList();
    }

    document.querySelector('#fireID').value = '';
})

// Clear Buttons
clearBtn.addEventListener('click', function () {
    document.querySelector('#name').value = '';
    document.querySelector('#id').value = '';
    document.querySelector('#position').value = '';
})

clearBtnFire.addEventListener('click', function () {
    document.querySelector('#fireID').value = '';
})

// search by name, id, position
document.querySelector('#search').addEventListener('input', function () {
    const query = this.value.toLowerCase();
    const employees = company.getAllEmployees();

    const filtered = employees.filter(function (emp) {
        return emp.getName().toLowerCase().includes(query) ||
            emp.getId().toString().includes(query) ||
            emp.title.toLowerCase().includes(query);
    })

    renderEmployeeList(filtered);
})

// Message for user
function showMessage(element, text, isError = false) {
    element.textContent = text;
    if (isError) {
        element.style.color = 'red';
    } else {
        element.style.color = 'green';
    }

    setTimeout(() => {
        element.textContent = '';
    }, 3000)
}

// Checks if number = e
inputID.addEventListener('keydown', function (e) {
    if (e.key === 'e' || e.key === 'E' || e.key === '-' || e.key === '+') {
        e.preventDefault();
        showMessage(addMessageDiv, 'Error! ID must be a positive number!', true);
    }
})

inputSalary.addEventListener('keydown', function (e) {
    if (e.key === 'e' || e.key === 'E' || e.key === '-' || e.key === '+') {
        e.preventDefault();
        showMessage(addMessageDiv, 'Error! Salary must be a positive number!', true);
    }
})

inputIDFire.addEventListener('keydown', function (e) {
    if (e.key === 'e' || e.key === 'E' || e.key === '-' || e.key === '+') {
        e.preventDefault();
        showMessage(fireMessageDiv, 'Error! ID must be a positive number!', true);
    }
})
