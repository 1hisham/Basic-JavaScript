"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentAndSubAboveAvgMarkSpacificStduent = void 0;
const studentDetails_1 = require("./studentDetails");
function studentAndSubAboveAvgMarkSpacificStduent(student, classObj) {
    let studentDetail = (0, studentDetails_1.studentDetails)(classObj);
    let studentAndSubjectDetails = {};
    let studentsAboveAvgMark = [];
    let subjectAboveAvgMark = {};
    let studentAverage = studentDetail[student].averageMarkOfStudent;
    Object.entries(studentDetail).forEach(([key, value]) => {
        let isStudent = false;
        value.studentSubjectDetails.forEach((items) => {
            if (!subjectAboveAvgMark[items.subject]) {
                subjectAboveAvgMark[items.subject] = { count: 0 };
            }
            else if (items.mark > studentAverage) {
                subjectAboveAvgMark[items.subject].count += 1;
                isStudent = true;
            }
        });
        if (isStudent) {
            studentsAboveAvgMark.push(key);
        }
    });
    studentAndSubjectDetails = {
        students: studentsAboveAvgMark,
        subjects: subjectAboveAvgMark,
    };
    return studentAndSubjectDetails;
}
exports.studentAndSubAboveAvgMarkSpacificStduent = studentAndSubAboveAvgMarkSpacificStduent;
