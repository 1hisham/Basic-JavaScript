"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentDetails = void 0;
function StudentDetails(classObj) {
    let studentsObject = {};
    let studentObject = {};
    let allsubject = [];
    classObj.students.forEach((student) => {
        let studentName = student.name;
        let studentId = student.id;
        student.marks.forEach((item) => {
            allsubject.push(item.subject);
        });
        console.log(allsubject);
        allsubject = [];
    });
    console.log(studentObject, allsubject);
    return studentsObject;
}
exports.StudentDetails = StudentDetails;
