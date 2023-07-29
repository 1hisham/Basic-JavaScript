"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.totalNumberOfStudent = void 0;
function totalNumberOfStudent(classObj) {
    let numberOfStudent = 0;
    classObj.students.forEach((student, index) => {
        numberOfStudent = index + 1;
    });
    return numberOfStudent;
}
exports.totalNumberOfStudent = totalNumberOfStudent;
