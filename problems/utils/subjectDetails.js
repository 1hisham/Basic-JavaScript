"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subjectDetails = void 0;
function subjectDetails(classObj) {
    let toatlMarkInSubject = 0;
    let averageMarkOfSubject = 0;
    let subjectDetail = {};
    let maximuntMark = 50;
    let percentage = 0;
    let markDetails = [];
    let totalNumberOfStudents = 0;
    classObj.students.forEach((student) => {
        student.marks.map((item) => {
            if (!subjectDetail[item.subject]) {
                toatlMarkInSubject = 0;
                totalNumberOfStudents = 0;
            }
            else {
                toatlMarkInSubject = subjectDetail[item.subject].totalMark;
                totalNumberOfStudents = subjectDetail[item.subject].totalStudent;
                averageMarkOfSubject = subjectDetail[item.subject].averageMark;
                markDetails = subjectDetail[item.subject].markDetail;
            }
            markDetails.push(item.mark);
            toatlMarkInSubject += item.mark;
            totalNumberOfStudents++;
            averageMarkOfSubject = toatlMarkInSubject / totalNumberOfStudents;
            percentage =
                (toatlMarkInSubject / (maximuntMark * totalNumberOfStudents)) * 100;
            subjectDetail[item.subject] = {
                totalMark: toatlMarkInSubject,
                totalStudent: totalNumberOfStudents,
                averageMark: averageMarkOfSubject,
                totalpercentage: percentage,
                markDetail: markDetails,
            };
            markDetails = [];
        });
    });
    return subjectDetail;
}
exports.subjectDetails = subjectDetails;
