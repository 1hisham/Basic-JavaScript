"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const subjectDetails_js_1 = require("./utils/subjectDetails.js");
// import  { subjectDetails } from "./utils/totalSubjectDetails.js";
let classObj = {
    name: "class A",
    teacherName: "Mary",
    students: [
        {
            name: "Ravi",
            id: "101",
            marks: [
                { subject: "English", mark: 25 },
                { subject: "Maths", mark: 48 },
                { subject: "Physics", mark: 40 },
                { subject: "Chemistry", mark: 30 },
                { subject: "Computer", mark: 20 },
            ],
        },
        {
            name: "Aju",
            id: "102",
            marks: [
                { subject: "English", mark: 35 },
                { subject: "Maths", mark: 38 },
                { subject: "Physics", mark: 33 },
                { subject: "Chemistry", mark: 34 },
                { subject: "Computer", mark: 30 },
            ],
        },
        {
            name: "Mini SS",
            id: "103",
            marks: [
                { subject: "English", mark: 12 },
                { subject: "Maths", mark: 49 },
                { subject: "Physics", mark: 18 },
                { subject: "Chemistry", mark: 30 },
                { subject: "Computer", mark: 40 },
            ],
        },
        {
            name: "Binu",
            id: "104",
            marks: [
                { subject: "English", mark: 49 },
                { subject: "Maths", mark: 49 },
                { subject: "Physics", mark: 47 },
                { subject: "Chemistry", mark: 46 },
                { subject: "Computer", mark: 50 },
            ],
        },
    ],
};
// ----------------------------------
// 1. Write a function to print the name of the class: "class A".
// function nameOfClass(classObj:ClassObj){
//  return classObj.name
// }
// console.log(nameOfClass(classObj))
// -------------------------------------
//2. Write a function to print the teacher's name: "Mary".
// function classTeacherName(classObj: ClassObj){
//   return classObj.teacherName
// }
// console.log(classTeacherName(classObj))
// -------------------------------------
//3. Write a function to print the names of all the students in the class.
// function studentsInClass(classObj:ClassObj){
//   let studentsNames = classObj.students.map((student) => {
//     return student.name
//   })
//   return studentsNames
// }
// console.log(studentsInClass(classObj))
// -------------------------------------
//4. Write a function to print the IDs of all the students in the class.
// function studentsIds(classObj: ClassObj){
//   const studentIDs = classObj.students.map((student) => {
//     return student.id
//   })
//   return studentIDs
// }
// console.log(studentsIds(classObj))
// -------------------------------------
// 5.Write a function to print the subject names for a specific student.
// function studentSubjects(sutdentName:string,classObj:ClassObj){
//   let studentDetail = studentDetails(classObj)
//   return studentDetail[sutdentName].studentSubjects
// }
// console.log(studentSubjects("Ravi", classObj))
// -------------------------------------
// 6. Write a function to print the marks of a specific student in all subjects.
// function studnetTotalMarks(stduentName: string, classObj:ClassObj){
//   let studentDetail = studentDetails(classObj)
//   let allMarks = studentDetail[stduentName].studentSubjectDetails.map((item) => {
//     return item.mark
//   })
//   return allMarks
// }
// console.log(studnetTotalMarks("Binu",classObj))first
// -------------------------------------
// 7.Write a function to calculate and print the average marks for a specific student.
// function studentAverageMark(studentName:string, classObj:ClassObj){
//   let studentDetail = studentDetails(classObj)
//   return studentDetail[studentName].averageMarkOfStudent
// }
// console.log(studentAverageMark("Binu", classObj))
// -------------------------------------
//8. Write a function to calculate and print the total marks for a specific student..
// function studnetTotalMark(stduentName: string, classObj:ClassObj){
//   let studentDetail = studentDetails(classObj)
//   return studentDetail[stduentName].totalMark 
// }
// console.log(studnetTotalMark("Binu",classObj))
// -------------------------------------
// 9.Write a function to calculate and print the average marks for all students in a specific subject.
// function averageMarkOfsubject(subject:string, classObj:ClassObj){
//   let subjectDetail = subjectDetails(classObj)
//   return subjectDetail[subject].averageMark
// }
//  console.log(averageMarkOfsubject("English", classObj))
// -------------------------------------
// 10.Write a function to calculate and print the total marks for all students in a specific subject.
// function totalMarkOfSubject(subject:string, classObj:ClassObj){
//   const subjectDetail = subjectDetails(classObj)
//   return subjectDetail[subject].totalMark
// }
// console.log(totalMarkOfSubject("Computer", classObj))
// -------------------------------------
// 11.Write a function to find and print the student with the highest marks in a specific subject.
// function studentWithHigestMarkInSubject(subject:string, classObj: ClassObj){
//     let subjectDetail = subjectDetails(classObj)
//     let markDetails = subjectDetail[subject].markDetail
//     let highestValue = calculateHigestAndLowest("highest", markDetails)
//     let filtedItems = studetnFilter(highestValue, classObj, subject)
//     return filtedItems
//   }
// console.log(studentWithHigestMarkInSubject("English", classObj))
// -------------------------------------
// 12 .Write a function to find and print the student with the lowest marks in a specific subject.
// function studentWithLowestMarkInSubject(subject:string, classObj: ClassObj){
//   let subjectDetail = subjectDetails(classObj)
//     let markDetails = subjectDetail[subject].markDetail
//     let highestValue = calculateHigestAndLowest("lowest", markDetails)
//     let filtedStudents = studetnFilter(highestValue, classObj, subject)
//     return filtedStudents
// }
// console.log(studentWithLowestMarkInSubject("Maths", classObj))
// -------------------------------------
// 13 Write a function to find and print the student with the highest total marks.
// function studentWithHighestTotalMark(classObj:ClassObj){
//   let totalMarks = classDetails(classObj).totalMarkOfStudents
//   let highestMark = calculateHigestAndLowest("highest", totalMarks)
//   let filterStudents = studetnFilter(highestMark, classObj)
//   return filterStudents
// }
// console.log(studentWithHighestTotalMark(classObj))
// -------------------------------------
// 14.Write a function to find and print the student with the lowest total marks.
// function studentWithLowestMarkInSubject(classObj:ClassObj){
//   let totalMarks = classDetails(classObj).totalMarkOfStudents;
//   let lowestMark = calculateHigestAndLowest("lowest", totalMarks)
//   let filtedStudents = studetnFilter(lowestMark, classObj)
//   return filtedStudents
// }
// console.log(studentWithLowestMarkInSubject(classObj))
// 15.Write a function to find and print the subject with the highest average marks.
let subjectDetail = (0, subjectDetails_js_1.subjectDetails)(classObj);
console.log(subjectDetail);
