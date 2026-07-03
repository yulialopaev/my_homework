type Address = {
    country: string,
    city: string,
    street: string,
    building: number,
    apartment?: number
}

type Employee = {
    readonly id: number,
    name: string,
    address: Address,
    salary: number,
    department: string
    position: string
}

type Company = {
    companyName: string,
    address: Address,
    employees: Employee[]
}

type EmployeeData = {
    id: number,
    name: string,
    address: Address,
    salary: number,
    department: string
    position: string
}


function createAddress(
    country: string,
    city: string,
    street: string,
    building: number,
    apartment?: number
): Address {
    const normalizedCountry = normalizeRequiredString(country, "Country")
    const normalizedCity = normalizeRequiredString(city, "City")
    const normalizedStreet = normalizeRequiredString(street, "Street")
    validatePositiveInteger(building, "Building")

    const address: Address = {
        country: normalizedCountry,
        city: normalizedCity,
        street: normalizedStreet,
        building
    }

    if (apartment !== undefined) {
        validatePositiveInteger(apartment, "Apartment")
        address.apartment = apartment
    }

    return address
}

function createEmployee(
    id: number,
    name: string,
    address: Address,
    salary: number,
    department: string,
    position: string
): Employee {
    validateId(id)
    validateAddress(address)
    validateSalary(salary)

    return {
        id,
        name: normalizeRequiredString(name, "Name"),
        address,
        salary,
        department: normalizeRequiredString(department, "Department"),
        position: normalizeRequiredString(position, "Position")

    }
}

function createCompany(companyName: string, address: Address): Company {
    validateAddress(address)

    return {
        companyName: normalizeRequiredString(companyName, "Company name"),
        address,
        employees: []
    }
}

function hireEmployee(company: Company, employee: Employee): void {
    const isDuplicate = company.employees.some(
        currentEmployee => currentEmployee.id === employee.id
    )

    if (isDuplicate) {
        throw new Error(`Employee with ID ${employee.id} already exists`)
    }

    company.employees.push(employee)
}

function fireEmployee(company: Company, id: number): Employee {
    validateId(id)

    const index = company.employees.findIndex(employee => employee.id === id)

    if (index === -1) {
        throw new Error(`Employee with ID ${id} was not found`)
    }

    const removedEmployee = company.employees[index]

    if (!removedEmployee) {
        throw new Error(`Employee with ID ${id} was not found`)
    }

    company.employees.splice(index, 1)

    return removedEmployee
}

function getEmployeeById(company: Company, id: number): Employee | null {
    validateId(id)

    return company.employees.find(employee => employee.id === id) ?? null
}

function getAllEmployees(company: Company): Employee[] {
    return [...company.employees]
}

function getTotalSalary(company: Company): number {
    return company.employees.reduce(
        (total, employee) => total + employee.salary, 0
    )
}

function getEmployeeMinSalary(company: Company): Employee | null {
    if (company.employees.length === 0) {
        return null
    }

    return company.employees.reduce((minEmployee, employee) =>
        employee.salary < minEmployee.salary ? employee : minEmployee
    )
}

function findEmployeesByName(company: Company, namePart: string): Employee[] {
    const query = normalizedSearchQuery(namePart, "Name")

    return company.employees.filter(employee =>
    employee.name.toLowerCase().includes(query))
}

function findEmployeesByDepartment(company: Company, departmentPart: string): Employee[] {
    const query = normalizedSearchQuery(departmentPart, "Department")

    return company.employees.filter(employee =>
    employee.department.toLowerCase().includes(query))
}

function findEmployeesByPosition(company: Company, positionPart: string): Employee[] {
    const query = normalizedSearchQuery(positionPart, "Position")

    return company.employees.filter(employee =>
    employee.position.toLowerCase().includes(query))
}

function findEmployeesByCity(company:Company, cityPart: string): Employee[] {
    const query = normalizedSearchQuery(cityPart, "City")

    return company.employees.filter(employee =>
    employee.address.city.toLowerCase().includes(query))
}

function employeeToData(employee: Employee) : EmployeeData {
    return {
        id: employee.id,
        name: employee.name,
        address: employee.address,
        salary: employee.salary,
        department: employee.department,
        position: employee.position
    }
}

function companyToData(company: Company): EmployeeData [] {
    return company.employees.map(employeeToData)
}


function addressToString(address: Address): string {
    const apartmentPart =
        address.apartment === undefined ? "": `, apartment ${address.apartment}`

    return `${address.country}, ${address.city}, ${address.street} ${address.building} ${apartmentPart}`
}

function employeeToString(employee: Employee): string {
    return (
        `${employee.id}: ${employee.name}, ` +
        `${employee.position}, ${employee.department}, ` +
        `salary: ${employee.salary}, ` +
        `address: ${addressToString(employee.address)}`
    )
}

function companyToString(company: Company):string {
    return (
        `${company.companyName}\n` +
            `Address: ${addressToString(company.address)}\n` +
            `Employees:\n` +
            company.employees.map(employeeToString).join("\n")
    )
}

function normalizeRequiredString(value: string, fieldName: string): string {
    if (typeof value !== "string") {
        throw new Error(`${fieldName} must be a string`)
    }

    const normalized = value.trim()

    if (!normalized) {
        throw new RangeError(`${fieldName} cannot be empty`)
    }

    return normalized
}

function normalizedSearchQuery(value: string, fieldName: string): string {
    if (typeof value != "string") {
        throw new TypeError(`${fieldName} search query must be a string`)
    }

    const query = value.trim().toLowerCase()

    if (!query) {
        throw new RangeError(`${fieldName} search query cannot be empty`)
    }

    return query
}


function validatePositiveInteger(value: number, fieldName: string): void {
    if (!Number.isInteger(value)) {
        throw new TypeError(`${fieldName} must be an integer`)
    }

    if (value <= 0) {
        throw new RangeError(`${fieldName} must be positive`)
    }
}

function validateId(id: number): void {
    validatePositiveInteger(id, "Employee ID")
}

function validateAddress(address: Address) {
    if (typeof address !== "object" || address === null) {
        throw new TypeError("Address must be an object")
    }
}

function validateSalary(salary: number) {
    if (!Number.isFinite(salary)) {
        throw new TypeError("Salary must be a finite number")
    }

    if (salary <= 0) {
        throw new RangeError(`Salary must be positive`)
    }
}

const companyAddress = createAddress(
    "Canada",
    "Calgary",
    "Main Street",
    1
)

const company = createCompany("Google", companyAddress)

const employee1 = createEmployee(
    100,
    "Arya Stark",
    createAddress("Israel", "Netania", "Herzel", 12, 5),
    15000,
    "IT",
    "Intern"
)

const employee2 = createEmployee(
    101,
    "John Snow",
    createAddress("Israel", "Haifa", "Ben Gurion", 4, 13),
    18000,
        "Financial",
        "Accountant"
)

hireEmployee(company, employee1)
hireEmployee(company, employee2)

console.log("All employees:")
console.log(getAllEmployees(company).map(employeeToString))

console.log("Total salary:")
console.log(getTotalSalary(company))

console.log("Employee with min salary:")
console.log(getEmployeeMinSalary(company))

console.log("Search by name:")
console.log(findEmployeesByName(company, "Jo").map(employeeToString))

console.log("Search by city:")
console.log(findEmployeesByCity(company, "ha").map(employeeToString))

console.log("Search by department:")
console.log(findEmployeesByDepartment(company, "t").map(employeeToString))

console.log("Search by position:")
console.log(findEmployeesByPosition(company, "count").map(employeeToString))

console.log("Fire employee:")
console.log(employeeToString(fireEmployee(company, 100)))

console.log("Company data:")
console.log(companyToData(company))

console.log("Company:")
console.log(companyToString(company))