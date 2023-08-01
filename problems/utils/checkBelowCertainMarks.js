"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkBelowCertainMark = void 0;
const studentDetails_1 = require("./studentDetails");
function checkBelowCertainMark(certainMark, subject, classObj) {
    let studentsData = [];
    let indexCount = 0;
    let studentDetail = (0, studentDetails_1.studentDetails)(classObj);
    Object.entries(studentDetail).map(([key, value]) => {
        let count = 0;
        value.studentSubjectDetails.map((item, index) => {
            if (subject !== "all") {
                if (item.subject == subject) {
                    if (item.mark < certainMark) {
                        studentsData.push(key);
                    }
                }
            }
            if (subject == "all") {
                if (item.mark < certainMark) {
                    count++;
                }
            }
            indexCount = index + 1;
        });
        if (count == indexCount) {
            studentsData.push(key);
        }
    });
    return studentsData;
}
exports.checkBelowCertainMark = checkBelowCertainMark;
