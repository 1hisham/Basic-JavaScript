"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentDetails = void 0;
function studentDetails(classObj) {
    let studentObject = {};
    let allsubject = [];
    let totalNumberOfSubject = 0;
    let totalMark = 0;
    let averageMark = 0;
    let HighestMarkInSubject = 50;
    let HighestMarkOfAllsubject = 0;
    let percentageOfStudent = 0;
    classObj.students.forEach((student) => {
        let studentName = student.name;
        let studentId = student.id;
        student.marks.forEach((item, index) => {
            allsubject.push(item.subject);
            totalMark = totalMark + item.mark;
            totalNumberOfSubject = index + 1;
        });
        HighestMarkOfAllsubject = HighestMarkInSubject * totalNumberOfSubject;
        averageMark = totalMark / totalNumberOfSubject;
        percentageOfStudent = (totalMark / HighestMarkOfAllsubject) * 100;
        studentObject[studentName] = {
            studentId: studentId,
            studentSubjects: allsubject,
            totalMark: totalMark,
            averageMarkOfStudent: averageMark,
            percentageOfStudent: percentageOfStudent,
            studentSubjectDetails: student.marks,
        };
        allsubject = [];
        totalMark = 0;
    });
    return studentObject;
}
exports.studentDetails = studentDetails;
