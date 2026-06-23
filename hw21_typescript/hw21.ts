type Address = {
    country: string,
    city: string,
    street: string,
    building: string | number,
    apartment?: number
}

type Employee = {
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

const employee1 : Employee = {
    name: "Arya Stark",
    address: {country: "Israel", city: "Haifa", street: "ha-Tamar", building: 27, apartment: 5},
    salary: 15000,
    department: "Development",
    position: "Backend"
}

const employee2: Employee = {
    name: "John Snow",
    address: {country: "Israel", city: "Tel Aviv", street: "Herzel", building: "5A", apartment: 20},
    salary: 20000,
    department: "Financial", position: "Accountant"
}

console.log(employee1)
console.log(employee2)

const myCompany: Company = {
    companyName: "Zima Blizko",
    address: {country: "Israel", city: "Herzeliya", street: "Ben Gurion", building: 1, apartment: 13},
    employees: [employee1, employee2]
}

console.log(myCompany)