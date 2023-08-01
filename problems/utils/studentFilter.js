"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentFilter = void 0;
const studentDetails_1 = require("./studentDetails");
function studentFilter(filterMark, classObj, subject = "", filterItem) {
    let filtedItems = [];
    let studentDetail = (0, studentDetails_1.studentDetails)(classObj);
    classObj.students.forEach((student) => {
        student.marks.forEach((item) => {
            if (subject !== "") {
                if (item.subject === subject) {
                    if (item.mark === filterMark) {
                        filtedItems.push(student.name);
                    }
                }
            }
        });
        if (subject == "") {
            if (filterItem == "totalMark") {
                if (studentDetail[student.name].totalMark === filterMark) {
                    filtedItems.push(student.name);
                }
            }
            if (filterItem == "averageMark") {
                if (studentDetail[student.name].averageMarkOfStudent == filterMark) {
                    filtedItems.push(student.name);
                }
            }
            if (filterItem == "percentage") {
                if (studentDetail[student.name].percentageOfStudent == filterMark) {
                    filtedItems.push(student.name);
                }
            }
        }
    });
    return filtedItems;
}
exports.studentFilter = studentFilter;
