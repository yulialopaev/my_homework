interface Grade {
    courseId: number
    score: number
}

class Student {
    id: number
    name: string
    dateBirth: string
    listGrades: Grade[]

    constructor(id: number, name: string, dateBirth: string, listGrades: Grade[]) {
        this.id = id
        this.name = name
        this.dateBirth = dateBirth
        this.listGrades = listGrades
    }
}

class Course {
    readonly courseId: number
    private _courseName: string
    private _numberOFCredits: number

    constructor(courseId:number, courseName: string, numberOfCredits: number) {
        this.courseId = courseId
        this._courseName = courseName
        this._numberOFCredits = numberOfCredits
    }

    get courseName(): string {return this._courseName}

    get numberOfCredits(): number {return this._numberOFCredits}

    set courseName(value:string) {
        if(!value) {
            throw new Error('Course name cannot be empty')
        }
        this._courseName = value
        }

        set numberOfCredits(value:number){
        if(value <= 0) {
            throw new Error('Number of credits must be positive')
        }
        this._numberOFCredits = value
        }
}

const student1 = new Student(100, "Yulia Lopaev", "04/02/1986",
    [{courseId: 1, score: 98}, {courseId: 2, score:85}])
const student2 = new Student(101, "Mike Vasovsky", "05/07/1983",
    [{courseId: 1, score: 96}, {courseId: 3, score: 100}])

const courseMath = new Course(1, "Math", 5)
const coursePhysics = new Course(2, "Physics", 4)
const courseEnglish = new Course(3, "English", 3)

console.log(student1)
console.log(student2)

