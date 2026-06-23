"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    id;
    name;
    dateBirth;
    listGrades;
    constructor(id, name, dateBirth, listGrades) {
        this.id = id;
        this.name = name;
        this.dateBirth = dateBirth;
        this.listGrades = listGrades;
    }
}
class Course {
    courseId;
    _courseName;
    _numberOFCredits;
    constructor(courseId, courseName, numberOfCredits) {
        this.courseId = courseId;
        this._courseName = courseName;
        this._numberOFCredits = numberOfCredits;
    }
    get courseName() { return this._courseName; }
    get numberOfCredits() { return this._numberOFCredits; }
    set courseName(value) {
        if (!value) {
            throw new Error('Course name cannot be empty');
        }
        this._courseName = value;
    }
    set numberOfCredits(value) {
        if (value <= 0) {
            throw new Error('Number of credits must be positive');
        }
        this._numberOFCredits = value;
    }
}
const student1 = new Student(100, "Yulia Lopaev", "04/02/1986", [{ courseId: 1, numericGrade: 98 }, { courseId: 2, numericGrade: 85 }]);
const student2 = new Student(101, "Mike Vasovsky", "05/07/1983", [{ courseId: 1, numericGrade: 96 }, { courseId: 3, numericGrade: 100 }]);
const courseMath = new Course(1, "Math", 5);
const coursePhysics = new Course(2, "Physics", 4);
const courseEnglish = new Course(3, "English", 3);
console.log(student1);
