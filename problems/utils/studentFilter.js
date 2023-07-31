"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studetnFilter = void 0;
const studentDetails_1 = require("./studentDetails");
function studetnFilter(filterMark, classObj, subject = "") {
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
            if (studentDetail[student.name].totalMark === filterMark) {
                filtedItems.push(student.name);
            }
        }
    });
    return filtedItems;
}
exports.studetnFilter = studetnFilter;
