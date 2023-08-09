"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const classDetails_js_1 = require("./utils/classDetails.js");
const studentDetails_js_1 = require("./utils/studentDetails.js");
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
//     let filtedItems = studentFilter(highestValue, classObj, subject,"")
//     return filtedItems
//   }
// console.log(studentWithHigestMarkInSubject("Maths", classObj))
// -------------------------------------
// 12 .Write a function to find and print the student with the lowest marks in a specific subject.
// function studentWithLowestMarkInSubject(subject:string, classObj: ClassObj){
//   let subjectDetail = subjectDetails(classObj)
//     let markDetails = subjectDetail[subject].markDetail
//     let highestValue = calculateHigestAndLowest("lowest", markDetails)
//     let filtedStudents = studentFilter(highestValue, classObj, subject)
//     return filtedStudents
// }
// console.log(studentWithLowestMarkInSubject("Maths", classObj))
// -------------------------------------
// 13 Write a function to find and print the student with the highest total marks.
// function studentWithHighestTotalMark(classObj:ClassObj){
//   let totalMarks = classDetails(classObj).totalMarkOfStudents
//   let highestMark = calculateHigestAndLowest("highest", totalMarks)
//   let filterStudents = studentFilter(highestMark, classObj,"","totalMark")
//   return filterStudents
// }
// console.log(studentWithHighestTotalMark(classObj))
// -------------------------------------
// 14.Write a function to find and print the student with the lowest total marks.
// function studentWithLowestMarkInSubject(classObj:ClassObj){
//   let totalMarks = classDetails(classObj).totalMarkOfStudents;
//   let lowestMark = calculateHigestAndLowest("lowest", totalMarks)
//   let filtedStudents = studentFilter(lowestMark, classfirstObj,"","totalMark")
//   return filtedStudents
// }
// console.log(studentWithLowestMarkInSubject(classObj))
// -------------------------------------
// 15.Write a function to find and print the subject with the highest average marks.
// function highestAverageOfSubject(classObj: ClassObj){
//   let subjectDetail = subjectDetails(classObj)
//   let totalAverageMarksOfSubjcts:Array<number> = []
//   Object.entries(subjectDetail).forEach(([key, value]) => {
//     totalAverageMarksOfSubjcts.push(value.averageMark)
//   });
//   console.log(totalAverageMarksOfSubjcts)
//   let higestAverage = calculateHigestAndLowest("highest", totalAverageMarksOfSubjcts)
//   let filterItems = subjectFilter(subjectDetail,higestAverage,"averageMark")
//   return filterItems
// }
// console.log(highestAverageOfSubject(classObj))
// -------------------------------------
// 16 Write a function to find and print the subject with the lowest average marks.
// function lowestAverageOfSubject(classObj: ClassObj) {
//   let subjectDetail = subjectDetails(classObj);
//   let totalAverageMarksOfSubjcts: Array<number> = [];
//   Object.entries(subjectDetail).forEach(([key, value]) => {
//     totalAverageMarksOfSubjcts.push(value.averageMark);
//   });
//   let lowestAverage = calculateHigestAndLowest(
//     "lowest",
//     totalAverageMarksOfSubjcts
//   );
//   let filterItems = subjectFilter(subjectDetail, lowestAverage, "averageMark");
//   return filterItems;
// }
// console.log(lowestAverageOfSubject(classObj));
// -------------------------------------
//17 Write a function to calculate and print the overall average marks for the class.
// function classAverageMark(classObj: ClassObj){
//   const averageMark = classDetails(classObj).totalAverage
//   return averageMark
// }
// console.log(classAverageMark(classObj))
// -------------------------------------
// 18 .Write a function to calculate and print the overall total marks for the class.
// function classTotalMark(classObj: ClassObj){
//   const totalMark = classDetails(classObj).totalMark
//   return totalMark
// }
// console.log(classTotalMark(classObj))
// -------------------------------------
// 19 .Write a function to calculate and print the average marks for each subject.
// function averageMarkOfEverySubject(classObj: ClassObj){
//   let subjectDetail = subjectDetails(classObj)
//       let averageMarksOfSubjcts:Array<number> = []
//       Object.entries(subjectDetail).forEach(([key, value]) => {
//         averageMarksOfSubjcts.push(value.averageMark)
//       });
//       return averageMarksOfSubjcts
// }
// console.log(averageMarkOfEverySubject(classObj))
// -------------------------------------
// 20 .Write a function to calculate and print the total marks for each subject.
// function totalMarkOfEverySubject(classObj: ClassObj){
//   const subjectDetail = subjectDetails(classObj)
//   let totalMarks = Object.entries(subjectDetail).map(([key, value]) => {
//     return value.totalMark
//   })
//   return totalMarks
// }
// console.log(totalMarkOfEverySubject(classObj))first
// -------------------------------------
//21. Write a function to find and print the subject with the highest total marks.
// function getSubjectWithHighestTotal(classObj: ClassObj) {
//   const subjectDetail = subjectDetails(classObj);
//   let totalMarks = Object.entries(subjectDetail).map(([key, value]) => {
//     return value.totalMark;
//   });
//   const highestTotalMark = calculateHigestAndLowest("highest", totalMarks);
//   let subjectWithHighestTotalMark = subjectFilter(
//     subjectDetail,
//     highestTotalMark,
//     "totalMark"
//   );
//   return subjectWithHighestTotalMark;
// }
// console.log(getSubjectWithHighestTotal(classObj));
// -------------------------------------
// 22.Write a function to find and print the subject with the lowest total marks.
// function getSubjectWithLowestTotal(classObj: ClassObj) {
//   const subjectDetail = subjectDetails(classObj);
//   let totalMarks = Object.entries(subjectDetail).map(([key, value]) => {
//     return value.totalMark;
//   });
//   const lowestTotalMark = calculateHigestAndLowest("lowest", totalMarks);
//   let subjectWithlowestTotalMark = subjectFilter(
//     subjectDetail,
//     lowestTotalMark,
//     "totalMark"
//   );
//   return subjectWithlowestTotalMark;
// }
// console.log(getSubjectWithLowestTotal(classObj));
// -------------------------------------
// 23. Write a function to find and print the student(s) with the highest average marks.
// function getStudentWithHighestAverageMark(classObj: ClassObj) {
//   let studentDetail = studentDetails(classObj);
//   let studentAverageMarks = Object.entries(studentDetail).map(
//     ([key, value]) => {
//       return value.averageMarkOfStudent;
//     }
//   );
//   let higestAverage = calculateHigestAndLowest("highest", studentAverageMarks);
//   let studentWithHighestAverageMark = studentFilter(
//     higestAverage,
//     classObj,
//     "",
//     "averageMark"
//   );
//   return studentWithHighestAverageMark;
// }
// console.log(getStudentWithHighestAverageMark(classObj));
// -------------------------------------
// 24.Write a function to find and print the student(s) with the lowest average marks.
// function getStudentWithlowestAverageMark(classObj: ClassObj) {
//   let studentDetail = studentDetails(classObj);
//   let studentAverageMarks = Object.entries(studentDetail).map(
//     ([key, value]) => {
//       return value.averageMarkOfStudent;
//     }
//   );
//   let lowestAverage = calculateHigestAndLowest("lowest", studentAverageMarks);
//   let studentWithlowestAverageMark = studentFilter(
//     lowestAverage,
//     classObj,
//     "",
//     "averageMark"
//   );
//   return studentWithlowestAverageMark;
// }
// console.log(getStudentWithlowestAverageMark(classObj));
// -------------------------------------
//25.Write a function to find and print the student(s) with the highest total marks.
// function studentsWithHighestTotalMark(classObj:ClassObj){
//   let totalMarks = classDetails(classObj).totalMarkOfStudents
//   let highestMark = calculateHigestAndLowest("highest", totalMarks)
//   let filterStudents = studentFilter(highestMark, classObj,"","totalMark")
//   return filterStudents
// }
// console.log(studentsWithHighestTotalMark(classObj))
// -------------------------------------
// 26.Write a function to find and print the student(s) with the lowest total marks.
// function studentsWithLowestMarkInSubject(classObj:ClassObj){
//   let totalMarks = classDetails(classObj).totalMarkOfStudents;
//   let lowestMark = calculateHigestAndLowest("lowest", totalMarks)
//   let filtedStudents = studentFilter(lowestMark, classObj,"","totalMark")
//   return filtedStudents
// }
// console.log(studentsWithLowestMarkInSubject(classObj))
// -------------------------------------
// 27.Write a function to calculate and print the number of students who scored above a certain mark in a specific subject.
// function studentsScoredAboveCeratinMarkInSubject(mark:number, subject:string, classObj:ClassObj){
//   let studentScored = checkAboveCertainMark( mark , subject , classObj)
//   return studentScored.length
// }
// console.log(studentsScoredAboveCeratinMarkInSubject(19,"English", classObj))
// -------------------------------------
// 28 .Write a function to calculate and print the number of students who scored below a certain mark in a specific subject.
// function studentsScoredBelowCeratinMarkInSubject(mark:number, subject:string, classObj:ClassObj){
//   let studentScored = checkBelowCertainMark( mark , subject , classObj)
//   return studentScored.length
// }
// console.log(studentsScoredBelowCeratinMarkInSubject(39,"English", classObj))
// -------------------------------------
// 29. Write a function to calculate and print the number of students who scored above a certain mark in all subjects.
// function studentsScoredAboveCeratinMarkInAllSubject(mark:number, subject:string, classObj:ClassObj){
//   let studentScored = checkAboveCertainMark( mark , subject , classObj)
//   return studentScored.length
// }
// console.log(studentsScoredAboveCeratinMarkInAllSubject(19,"all", classObj))
// -------------------------------------
// 30.Write a function to calculate and print the number of students who scored below a certain mark in all subjects.
// function studentsScoredBelowCeratinMarkInAllSubject(mark:number, subject:string, classObj:ClassObj){
//   let studentScored = checkBelowCertainMark( mark , subject , classObj)
//   return studentScored.length
// }
// console.log(studentsScoredBelowCeratinMarkInAllSubject(39,"all", classObj))
// -------------------------------------
//31.Write a function to calculate and print the percentage of students who scored above a certain mark in a specific subject.
// function percentageOfStudentsAboveCertainMarkInSubject(
//   mark: number,
//   subject: string,
//   classObj: ClassObj
// ) {
//   let studentsScored = checkAboveCertainMark(mark, subject, classObj);
//   let studentCountScoredAbove = studentsScored.length;
//   let subjectDetail = subjectDetails(classObj);
//   const totalStudent = subjectDetail[subject].totalStudent;
//   let studentsPercentage = (studentCountScoredAbove / totalStudent) * 100;
//   return studentsPercentage;
// }
// console.log(percentageOfStudentsAboveCertainMarkInSubject(39, "Maths", classObj));
// -------------------------------------
// 32.Write a function to calculate and print the percentage of students who scored below a certain mark in a specific subject.
// function percentageOfStudentsBelowCertainMarkInSubject(
//   mark: number,
//   subject: string,
//   classObj: ClassObj
// ) {
//   let studentsScored = checkBelowCertainMark(mark, subject, classObj);
//   let studentCountScoredAbove = studentsScored.length;
//   let subjectDetail = subjectDetails(classObj);
//   const totalStudent = subjectDetail[subject].totalStudent;
//   let studentsPercentage = (studentCountScoredAbove / totalStudent) * 100;
//   return studentsPercentage;
// }
// console.log(percentageOfStudentsBelowCertainMarkInSubject(39, "Maths", classObj));
// 33.Write a function to calculate and print the percentage of students who scored above a certain mark in all subjects.
// -------------------------------------
// function percentageOfStudentsAboveCertainMarkAllSubject(
//   mark: number,
//   subject: string,
//   classObj: ClassObj
// ) {
//   let studentsScored = checkAboveCertainMark(mark, subject, classObj);
//   let studentCountScoredAbove = studentsScored.length;
//   let totalStudents = classDetails(classObj).totalNumberOfStudents
//   let studentsPercentage = (studentCountScoredAbove / totalStudents) * 100;
//   return studentsPercentage;
// }
// console.log(percentageOfStudentsAboveCertainMarkAllSubject(29, "all", classObj));
// -------------------------------------
// 34.Write a function to calculate and print the percentage of students who scored below a certain mark in all subjects.
// function percentageOfStudentsBelowCertainMarkAllSubject(
//   mark: number,
//   subject: string,
//   classObj: ClassObj
// ) {
//   let studentsScored = checkBelowCertainMark(mark, subject, classObj);
//   let studentCountScoredAbove = studentsScored.length;
//   let totalStudents = classDetails(classObj).totalNumberOfStudents
//   let studentsPercentage = (studentCountScoredAbove / totalStudents) * 100;
//   return studentsPercentage;
// }
// console.log(percentageOfStudentsBelowCertainMarkAllSubject(39, "all", classObj));
// -------------------------------------
// 35. Write a function to find and print the student(s) with the highest percentage of marks.
// function getStudentWithHighstPercentage(classObj:ClassObj){
//  const studentDetail = studentDetails(classObj)
//  const studentsPercentage = Object.entries(studentDetail).map(([key, value]) => {
//     return value.percentageOfStudent
//  })
//  const highestPercentage = calculateHigestAndLowest("highest", studentsPercentage);
//  const studentsWithHighestPercentage = studentFilter(highestPercentage,classObj,"","percentage")
//  return studentsWithHighestPercentage
// }
// console.log(getStudentWithHighstPercentage(classObj))
// -------------------------------------
// 36.Write a function to find and print the student(s) with the lowest percentage of marks.
// function getStudentWithLowestPercentage(classObj:ClassObj){
//   const studentDetail = studentDetails(classObj)
//   const studentsPercentage = Object.entries(studentDetail).map(([key, value]) => {
//      return value.percentageOfStudent
//   })
//   const lowestPercentage = calculateHigestAndLowest("lowest", studentsPercentage);
//   const studentsWithlowestPercentage = studentFilter(lowestPercentage,classObj,"","percentage")
//   return studentsWithlowestPercentage
//  }
//  console.log(getStudentWithLowestPercentage(classObj))
// -------------------------------------
// 37.Write a function to find and print the subject(s) with the highest percentage of marks.
// function getSubjectWithHighestPercentage(classObj: ClassObj){
// const subjectDetail = subjectDetails(classObj)
// const subjectsPercentage = Object.entries(subjectDetail).map(([key, value]) => {
// return value.totalpercentage
// })
// const higestPercentage = calculateHigestAndLowest("highest", subjectsPercentage)
// const subjectWithHighestPercentage = subjectFilter(subjectDetail, higestPercentage, "percentage")
// return subjectWithHighestPercentage
// }
// console.log(getSubjectWithHighestPercentage(classObj))
// -------------------------------------
// 38.Write a function to find and print the subject(s) with the lowest percentage of marks.
// function getSubjectWithLowestPercentage(classObj: ClassObj){
//   const subjectDetail = subjectDetails(classObj)
//   const subjectsPercentage = Object.entries(subjectDetail).map(([key, value]) => {
//   return value.totalpercentage
//   })
//   const lowestPercentage = calculateHigestAndLowest("lowest", subjectsPercentage)
//   const subjectWithLowestPercentage = subjectFilter(subjectDetail, lowestPercentage, "percentage")
//   return subjectWithLowestPercentage
//   }
//   console.log(getSubjectWithLowestPercentage(classObj))
// -------------------------------------
// 39.Write a function to find and print the student(s) with the highest percentage of marks in a specific subject.
// function studentsWithHighestPercentageInSubject(subject:string, classObj:ClassObj){
//   let maxiumMark = 50;
//   let subjectDetail = subjectDetails(classObj)
//   let markDetails = subjectDetail[subject].markDetail
//   let highestValue = calculateHigestAndLowest("highest", markDetails)
//   let studentWithHigestMark = studentFilter(highestValue, classObj, subject,"")
//   let percentageOfStudent = highestValue / maxiumMark * 100
//   return ({"name": studentWithHigestMark, "percentage": percentageOfStudent})
// }
// console.log(studentsWithHighestPercentageInSubject("English", classObj))
// -------------------------------------
// 40.Write a function to find and print the student(s) with the lowest percentage of marks in a specific subject.
// function studentsWithLowestPercentageInSubject(subject:string, classObj:ClassObj){
//   let maxiumMark = 50;
//   let subjectDetail = subjectDetails(classObj)
//   let markDetails = subjectDetail[subject].markDetail
//   let lowestMark = calculateHigestAndLowest("lowest", markDetails)
//   let studentWithlowestMark = studentFilter(lowestMark, classObj, subject,"")
//   let percentageOfStudent = lowestMark / maxiumMark * 100
//   return ({"name": studentWithlowestMark, "percentage": percentageOfStudent})
// }
// console.log(studentsWithLowestPercentageInSubject("English", classObj))
// -------------------------------------
// 41. Write a function to find and print the subject(s) with the highest percentage of marks for a specific student.
// function subjectWithHigestPercentageOfStudent(studentName:string, classObj:ClassObj){
//   let highestPercentageSubject:Array<string> = []
//   let percentage =0;
//   let maxMark = 50;
//   const studentDetail = studentDetails(classObj)
//   const studentMarkDetails = studentDetail[studentName].allMarks
//   const studentHighestMark = calculateHigestAndLowest("highest", studentMarkDetails)
//   const highestPercentageSubjects = studentDetail[studentName].studentSubjectDetails.filter((item) => {
//     return item.mark === studentHighestMark
//   })
//   percentage = (studentHighestMark / maxMark) * 100
//   highestPercentageSubjects.forEach((item)=> {
//     highestPercentageSubject.push(item.subject)
//   })
//   return ({"subjects": highestPercentageSubject, "percentage": percentage})
// }first
// console.log(subjectWithHigestPercentageOfStudent("Binu", classObj))
// -------------------------------------
// 42.Write a function to find and print the subject(s) with the lowest percentage of marks for a specific student.
// function subjectWithLowestPercentageOfStudent(studentName:string, classObj:ClassObj){
//   let lowestPercentageSubject:Array<string> = []
//   let percentage =0;
//   let maxMark = 50;
//   const studentDetail = studentDetails(classObj)
//   const studentMarkDetails = studentDetail[studentName].allMarks
//   const studentLowestMark = calculateHigestAndLowest("lowest", studentMarkDetails)
//   const highestPercentageSubjects = studentDetail[studentName].studentSubjectDetails.filter((item) => {
//     return item.mark === studentLowestMark
//   })
//   percentage = (studentLowestMark / maxMark) * 100
//   highestPercentageSubjects.forEach((item)=> {
//     lowestPercentageSubject.push(item.subject)
//   })
//   return ({"subjects": lowestPercentageSubject, "percentage": percentage})
// }
// console.log(subjectWithLowestPercentageOfStudent("Binu", classObj))
// -------------------------------------
// 43.Write a function to find and print the subject(s) in which all students scored above a certain mark.
// function subjectsAboveCeratinMark(mark: number, classObj: ClassObj) {
//   const filterSubject: Array<string> = [];
//   const subjectDetail = subjectDetails(classObj);
//   Object.entries(subjectDetail).forEach(([key, value]) => {
//     let count = 0;
//     let totalMarksCount = value.markDetail.length;
//     value.markDetail.forEach((item) => {
//       if (item > mark) {
//         count++;
//       }
//     });
//     if (totalMarksCount == count) {
//       filterSubject.push(key);
//     }
//   });
//   return filterSubject
// }
// console.log(subjectsAboveCeratinMark(30, classObj));
// -------------------------------------
// 44. Write a function to find and print the subject(s) in which all students scored below a certain mark.
// function subjectsBelowCertainMark(mark:number, classObj: ClassObj){
//   const filterSubject: Array<string> = [];
//   const subjectDetail = subjectDetails(classObj);
//   Object.entries(subjectDetail).forEach(([key, value]) => {
//     let count = 0;
//     let totalMarksCount = value.markDetail.length;
//     value.markDetail.forEach((item) => {
//       if (item < mark) {
//         count++;
//       }
//     });
//     if (totalMarksCount == count) {
//       filterSubject.push(key);
//     }
//   });
//   return filterSubject
// }
// console.log(subjectsBelowCertainMark(30,classObj))
// -------------------------------------
// 45.Write a function to find and print the subject(s) in which the average marks of all students are above a certain mark.
// function getSubjectsAverageMarkAboveCeratinMark(mark:number, classObj:ClassObj){
//   const subjectDetail = subjectDetails(classObj);
//   const subjectAboveAverageMark:Array<string> =  [];
//   Object.entries(subjectDetail).map(([key, value])=> {
//     if(value.averageMark > mark){
//       subjectAboveAverageMark.push(key)
//     }
//   })
//   return (subjectAboveAverageMark)
// }
// console.log(getSubjectsAverageMarkAboveCeratinMark(31, classObj))
// -------------------------------------
// 46. Write a function to find and print the subject(s) in which the average marks of all students are below a certain mark.
// function getSubjectsAverageMarkBelowCeratinMark(mark:number, classObj:ClassObj){
//   const subjectDetail = subjectDetails(classObj);
//   const subjectBelowAverageMark:Array<string> =  [];
//   Object.entries(subjectDetail).map(([key, value])=> {
//     if(value.averageMark < mark){
//       subjectBelowAverageMark.push(key)
//     }
//   })
//   return (subjectBelowAverageMark)
// }
// console.log(getSubjectsAverageMarkBelowCeratinMark(31, classObj))
// -------------------------------------
//47 .Write a function to find and print the student(s) who scored the highest marks in at least one subject.
// function studentsWithHighestMarkAtLeastOneSubject(classObj:ClassObj){
//   let subjectHighest = 0;
//   let studentsScoreHighestMark: Array<Array<string>> = [];
//   let uniqueStudents:Array<string> = []
//   const subjectDetail = subjectDetails(classObj)
//   Object.entries(subjectDetail).forEach(([key, value]) => {
//        subjectHighest = calculateHigestAndLowest("highest", value.markDetail )
//         let studentsWithHighestInASubject = studentFilter(subjectHighest, classObj, key, " ")
//         studentsScoreHighestMark.push(studentsWithHighestInASubject)
//         uniqueStudents = [... new Set(studentsScoreHighestMark.flat(1))];
//   })
//   return uniqueStudents
// }
// console.log(studentsWithHighestMarkAtLeastOneSubject(classObj))
// -------------------------------------
// 48.Write a function to find and print the student(s) who scored the lowest marks in at least one subject.
// function studentsWithLowestMarkAtLeastOneSubject(classObj:ClassObj){
//   let subjectLowestMark:number;
//   let studentsScoreLowestMark: Array<Array<string>> = [];filterSubject
//   let uniqueStudentsWithLowestMark:Array<string> = []
//   const subjectDetail = subjectDetails(classObj)
//   Object.entries(subjectDetail).forEach(([key, value]) => {
//        subjectLowestMark = calculateHigestAndLowest("lowest", value.markDetail )
//         let studentsWithLowestInASubject = studentFilter(subjectLowestMark, classObj, key, " ")
//         studentsScoreLowestMark.push(studentsWithLowestInASubject)
//         uniqueStudentsWithLowestMark = [... new Set(studentsScoreLowestMark.flat(1))];
//   })
//   return uniqueStudentsWithLowestMark
// }
// console.log(studentsWithLowestMarkAtLeastOneSubject(classObj))
// -------------------------------------
// 49.Write a function to calculate and print the average marks for each student in each subject.
// 50. Write a function to calculate and print the total marks for each student in each subject.
// -------------------------------------
// 51.Write a function to find and print the student(s) who scored the highest marks in each subject.
// function studentsScoredHighestMarksInEverySubject(classObj:ClassObj){
//   let subjectHighestMark:number;
//   let subjectAndStudent:subjectAndStudent = []
//   const subjectDetail = subjectDetails(classObj)
//   Object.entries(subjectDetail).forEach(([key, value]) => {
//        subjectHighestMark = calculateHigestAndLowest("highest", value.markDetail )
//         let studentsWithHighestInASubject = studentFilter(subjectHighestMark, classObj, key, " ")
//         subjectAndStudent.push({"subject": key, "students": studentsWithHighestInASubject})
//       })
//       return subjectAndStudent
// }
// console.log(studentsScoredHighestMarksInEverySubject(classObj))
// -------------------------------------
// 52. Write a function to find and print the student(s) who scored the lowest marks in each subject.
// function studentsScoredLowestMarksInEverySubject(classObj:ClassObj){
//   let subjectLowestMark:number;
//   let subjectAndStudent:subjectAndStudent = []
//   const subjectDetail = subjectDetails(classObj)
//   Object.entries(subjectDetail).forEach(([key, value]) => {
//        subjectLowestMark = calculateHigestAndLowest("lowest", value.markDetail )
//         let studentsWithLowestInASubject = studentFilter(subjectLowestMark, classObj, key, " ")
//         subjectAndStudent.push({"subject": key, "students": studentsWithLowestInASubject})
//       })
//       return subjectAndStudent
// }
// console.log(studentsScoredLowestMarksInEverySubject(classObj))
// -------------------------------------
// 53. Write a function to find and print the subject(s) in which the highest marks were scored.
// function subjectWithHigestMark(classObj: ClassObj) {
//   let subjectHighestMark: number;
//   let subjectAndHighestMark: subjectAndMark = [];
//   const subjectDetail = subjectDetails(classObj);
//   Object.entries(subjectDetail).forEach(([key, value]) => {
//     subjectHighestMark = calculateHigestAndLowest("highest", value.markDetail);
//     subjectAndHighestMark.push({
//       subject: key,
//       highestMark: subjectHighestMark,
//     });
//   });
//   return subjectAndHighestMark;
// }
// console.log(subjectWithHigestMark(classObj));
// 54. Write a function to find and print the subject(s) in which the lowest marks were scored.
// function subjectWitLowestMark(classObj: ClassObj) {
//   let subjectLowestMark: number;
//   let subjectAndLowestMark: subjectAndMark = [];
//   const subjectDetail = subjectDetails(classObj);
//   Object.entries(subjectDetail).forEach(([key, value]) => {
//     subjectLowestMark = calculateHigestAndLowest("lowest", value.markDetail);
//     subjectAndLowestMark.push({
//       subject: key,
//       highestMark: subjectLowestMark,
//     });
//   });
//   return subjectAndLowestMark;
// }
// console.log(subjectWitLowestMark(classObj));
// 55.Write a function to find and print the student(s) who scored above the class average marks.
// function getStudentWithAboveClassAverage(classObj: ClassObj) {
//   const studentsWithAboveAverage: Array<string> = [];
//   const classDetail = classDetails(classObj);
//   const subjectDetail = subjectDetails(classObj);
//   const studentDetail = studentDetails(classObj);
//   const toatlMarkOfClass: number = classDetail.totalMark;
//   const NumberOfStudentWithSubject = Object.entries(subjectDetail).map(
//     ([key, value]) => value.totalStudent
//   );
//   const totalNumberOfSubjectForAllStudent = NumberOfStudentWithSubject.reduce(
//     (acc, currentValue) => acc + currentValue,
//     0
//   );
//   const totalAverageOfSubjectInClass = toatlMarkOfClass / totalNumberOfSubjectForAllStudent;
//   Object.entries(studentDetail).forEach(([key, value]) => {
//     if (totalAverageOfSubjectInClass < value.averageMarkOfStudent) {
//       studentsWithAboveAverage.push(key);
//     }
//   });
//   return studentsWithAboveAverage;
// }
// console.log(getStudentWithAboveClassAverage(classObj));
//56.Write a function to find and print the student(s) who scored below the class average marks.
// function getStudentWithBelowClassAverage(classObj: ClassObj) {
//   const studentsWithBelowAverage: Array<string> = [];
//   const classDetail = classDetails(classObj);
//   const subjectDetail = subjectDetails(classObj);
//   const studentDetail = studentDetails(classObj);
//   const toatlMarkOfClass: number = classDetail.totalMark;
//   const NumberOfStudentWithSubject = Object.entries(subjectDetail).map(
//     ([key, value]) => value.totalStudent
//   );
//   const totalNumberOfSubjectForAllStudent = NumberOfStudentWithSubject.reduce(
//     (acc, currentValue) => acc + currentValue,
//     0
//   );
//   const totalAverageOfSubjectInClass = toatlMarkOfClass / totalNumberOfSubjectForAllStudent;
//   Object.entries(studentDetail).forEach(([key, value]) => {
//     if (totalAverageOfSubjectInClass > value.averageMarkOfStudent) {
//       studentsWithBelowAverage.push(key);
//     }
//   });
//   return studentsWithBelowAverage;
// }
// console.log(getStudentWithBelowClassAverage(classObj));
// 57.Write a function to find and print the subject(s) in which the average marks are above the class average marks.
// function getSubjectsWithAboveAverageMark(classObj: ClassObj) {
//   const subjectsWithAboveAverage: Array<string> = [];
//   const classDetail = classDetails(classObj);
//   const subjectDetail = subjectDetails(classObj);
//   const toatlMarkOfClass: number = classDetail.totalMark;
//   const NumberOfStudentWithSubject = Object.entries(subjectDetail).map(
//     ([key, value]) => value.totalStudent
//   );
//   const totalNumberOfSubjectForAllStudent = NumberOfStudentWithSubject.reduce(
//     (acc, currentValue) => acc + currentValue,
//     0
//   );
//   const totalAverageOfSubjectInClass =
//     toatlMarkOfClass / totalNumberOfSubjectForAllStudent;
//   Object.entries(subjectDetail).forEach(([key, value]) => {
//     if (totalAverageOfSubjectInClass < value.averageMark) {
//       subjectsWithAboveAverage.push(key);
//     }
//   });
//   return subjectsWithAboveAverage;
// }
// console.log(getSubjectsWithAboveAverageMark(classObj));
// 58.Write a function to find and print the subject(s) in which the average marks are below the class average marks.
// function getSubjectsWithBelowAverageMark(classObj: ClassObj) {
//   const subjectsWithBelowAverage: Array<string> = [];
//   const classDetail = classDetails(classObj);
//   const subjectDetail = subjectDetails(classObj);
//   const toatlMarkOfClass: number = classDetail.totalMark;
//   const NumberOfStudentWithSubject = Object.entries(subjectDetail).map(
//     ([key, value]) => value.totalStudent
//   );
//   const totalNumberOfSubjectForAllStudent = NumberOfStudentWithSubject.reduce(
//     (acc, currentValue) => acc + currentValue,
//     0
//   );
//   const totalAverageOfSubjectInClass =
//     toatlMarkOfClass / totalNumberOfSubjectForAllStudent;
//   Object.entries(subjectDetail).forEach(([key, value]) => {
//     if (totalAverageOfSubjectInClass > value.averageMark) {
//       subjectsWithBelowAverage.push(key);
//     }
//   });
//   return subjectsWithBelowAverage;
// }
// console.log(getSubjectsWithBelowAverageMark(classObj));
// 59.Write a function to find and print the subject(s) in which the highest percentage of students scored above a certain mark.
// function subjectsWithHighPercentageAboveCeratinMark(mark: number, classObj: ClassObj) {
//   let filterSubject:any= [];
//   const subjectDetail = subjectDetails(classObj);
//   Object.entries(subjectDetail).forEach(([key, value]) => {
//     let count = 0;
//     let totalMarksCount = value.markDetail.length;
//     value.markDetail.forEach((item) => {
//       if (item > mark) {
//         count++;
//       }
//     });
//     let percentage = (count / totalMarksCount )* 100;
//     filterSubject.push({"subject": key ,"percentage": percentage})
//   });
//   const totalPercentage = filterSubject.map((items:any)=> {
//    return items.percentage
//   })
//   const highestPercentage = calculateHigestAndLowest("highest", totalPercentage)
//   const higestPercentageSubjects = filterSubject.filter((item: any)=> {
//     if(highestPercentage == item.percentage) return item.subject
//   })
//   return higestPercentageSubjects
// }
// console.log(subjectsWithHighPercentageAboveCeratinMark(30, classObj));
// 60.Write a function to find and print the subject(s) in which the highest percentage of students scored below a certain mark.
// function subjectsWithHighPercentageBelowCeratinMark(mark: number, classObj: ClassObj) {
//   let filterSubject:any= [];
//   const subjectDetail = subjectDetails(classObj);
//   Object.entries(subjectDetail).forEach(([key, value]) => {
//     let count = 0;
//     let totalMarksCount = value.markDetail.length;
//     value.markDetail.forEach((item) => {
//       if (item < mark) {
//         count++;
//       }
//     });
//     let percentage = (count / totalMarksCount )* 100;
//     filterSubject.push({"subject": key ,"percentage": percentage})
//   });
//   const totalPercentage = filterSubject.map((items:any)=> {
//    return items.percentage
//   })
//   const highestPercentage = calculateHigestAndLowest("highest", totalPercentage)
//   const highestPercentageSubjects = filterSubject.filter((item: any)=> {
//     if(highestPercentage == item.percentage) return item.subject
//   })
//   return highestPercentageSubjects
// }
// console.log(subjectsWithHighPercentageBelowCeratinMark(30, classObj));
// 61. Write a function to find and print the subject(s) in which the lowest percentage of students scored above a certain mark.
// function subjectsWithLowestPercentageAboveCeratinMark(mark: number, classObj: ClassObj) {
//   let filterSubject:any= [];
//   const subjectDetail = subjectDetails(classObj);
//   Object.entries(subjectDetail).forEach(([key, value]) => {
//     let count = 0;
//     let totalMarksCount = value.markDetail.length;
//     value.markDetail.forEach((item) => {
//       if (item > mark) {
//         count++;
//       }
//     });
//     let percentage = (count / totalMarksCount )* 100;
//     filterSubject.push({"subject": key ,"percentage": percentage})
//   });
//   const totalPercentage = filterSubject.map((items:any)=> {
//    return items.percentage
//   })
//   const lowestPercentage = calculateHigestAndLowest("lowest", totalPercentage)
//   const lowestPercentageSubjects = filterSubject.filter((item: any)=> {
//     if(lowestPercentage == item.percentage) return item.subject
//   })
//   return lowestPercentageSubjects
// }
// console.log(subjectsWithLowestPercentageAboveCeratinMark(30, classObj));
// 62.Write a function to find and print the subject(s) in which the lowest percentage of students scored below a certain mark.
// function subjectsWithLowestPercentageBelowCeratinMark(mark: number, classObj: ClassObj) {
//   let filterSubject:any= [];
//   const subjectDetail = subjectDetails(classObj);
//   Object.entries(subjectDetail).forEach(([key, value]) => {
//     let count = 0;
//     let totalMarksCount = value.markDetail.length;
//     value.markDetail.forEach((item) => {
//       if (item < mark) {
//         count++;
//       }
//     });
//     let percentage = (count / totalMarksCount )* 100;
//     filterSubject.push({"subject": key ,"percentage": percentage})
//   });
//   const totalPercentage = filterSubject.map((items:any)=> {
//    return items.percentage
//   })
//   const lowestPercentage = calculateHigestAndLowest("lowest", totalPercentage)
//   const lowestPercentageSubjects = filterSubject.filter((item: any)=> {
//     if(lowestPercentage == item.percentage) return item.subject
//   })
//   return lowestPercentageSubjects
// }
// console.log(subjectsWithLowestPercentageBelowCeratinMark(30, classObj));
// 63.Write a function to calculate and print the percentage of students who scored above the class average marks in each subject.
// function percentageOfStudentsAboveClassAverage(classObj: ClassObj) {
//   const classDetail = classDetails(classObj);
//   const studentAverageOfClass = classDetail.studentAverage;
//   const totalStudent = classDetail.totalNumberOfStudents;
//   const studentDetail = studentDetails(classObj);
//   let count = 0;
//   for (const key in studentDetail) {
//     const value = studentDetail[key];
//     if(value.averageMarkOfStudent > studentAverageOfClass){
//       count++
//     }
//   }
//   let studentsPercentageAboveAverage = (count / totalStudent) * 100;
//   return studentsPercentageAboveAverage
// }
// console.log(percentageOfStudentsAboveClassAverage(classObj));
// 64.Write a function to calculate and print the percentage of students who scored below the class average marks in each subject.
// function percentageOfStudentsBelowClassAverage(classObj: ClassObj) {
//   const classDetail = classDetails(classObj);
//   const studentAverageOfClass = classDetail.studentAverage;
//   const totalStudent = classDetail.totalNumberOfStudents;
//   const studentDetail = studentDetails(classObj);
//   let count = 0;
//   for (const key in studentDetail) {
//     const value = studentDetail[key];
//     if(value.averageMarkOfStudent < studentAverageOfClass){
//       count++
//     }
//   }
//   let studentsPercentageBelowAverage = (count / totalStudent) * 100;
//   return studentsPercentageBelowAverage
// }
// console.log(percentageOfStudentsBelowClassAverage(classObj));
// 65.Write a function to calculate and print the percentage of students who scored above the class average marks in at least one subject.
// function percentageOfStudentScoredAboveAverageAtLeastOneSubject(classObj: ClassObj){
//   const studentAverageOfClass = classDetails(classObj).studentAverage;
//   const totalStudent = classDetails(classObj).totalNumberOfStudents
//   const studentDetail = studentDetails(classObj)
//   let count = 0;
//   for(const key in studentDetail){
//     const value = studentDetail[key]
//     for(let i = 0; i < value.allMarks.length; i++){
//       if(studentAverageOfClass < value.allMarks[i]){
//         count++
//         break
//       }
//     }
//   }
//   let percentage = (count / totalStudent) * 100
//   return percentage
// }
// console.log(percentageOfStudentScoredAboveAverageAtLeastOneSubject(classObj))
// 66.Write a function to calculate and print the percentage of students who scored below the class average marks in at least one subject.
// function percentageOfStudentScoredBelowAverageAtLeastOneSubject(classObj: ClassObj){
//   const studentAverageOfClass = classDetails(classObj).studentAverage;
//   const totalStudent = classDetails(classObj).totalNumberOfStudents
//   const studentDetail = studentDetails(classObj)
//   let count = 0;
//   for(const key in studentDetail){
//     const value = studentDetail[key]
//     for(let i = 0; i < value.allMarks.length; i++){
//       if(studentAverageOfClass > value.allMarks[i]){
//         count++
//         break
//       }
//     }
//   }
//   let percentage = (count / totalStudent) * 100
//   return percentage
// }
// console.log(percentageOfStudentScoredBelowAverageAtLeastOneSubject(classObj))
// 67.Write a function to find and print the student(s) who scored above the class average marks in all subjects.
// function percentageOfStudentScoredAboveAverageAllSubject(classObj: ClassObj){
//   const studentAverageOfClass = classDetails(classObj).studentAverage;
//   const totalStudent = classDetails(classObj).totalNumberOfStudents
//   const studentDetail = studentDetails(classObj)
//   let count = totalStudent;
//   for(const key in studentDetail){
//     const value = studentDetail[key]
//     for(let i = 0; i < value.allMarks.length; i++){
//       if(studentAverageOfClass > value.allMarks[i]){
//       count--
//       break
//       }
//     }
//   }
//   let percentage = (count / totalStudent) * 100
//   return percentage
// }
// console.log(percentageOfStudentScoredAboveAverageAllSubject(classObj))
// 68.Write a function to find and print the student(s) who scored below the class average marks in all subjects.
// function percentageOfStudentScoredBelowAverageAllSubject(classObj: ClassObj){
//   const studentAverageOfClass = classDetails(classObj).studentAverage;
//   const totalStudent = classDetails(classObj).totalNumberOfStudents
//   const studentDetail = studentDetails(classObj)
//   let count = totalStudent;
//   for(const key in studentDetail){
//     const value = studentDetail[key]
//     for(let i = 0; i < value.allMarks.length; i++){
//       if(studentAverageOfClass < value.allMarks[i]){
//       count--
//       break
//       }
//     }
//   }
//   let percentage = (count / totalStudent) * 100
//   return percentage
// }
// console.log(percentageOfStudentScoredBelowAverageAllSubject(classObj))
// 69.Write a function to find and print the student(s) who scored above the class average marks in the majority of subjects.
// function studentScoredAboveClassAvgInMajoritySubject(classObj: ClassObj) {
//   const studentAverageOfClass = classDetails(classObj).studentAverage;
//   let studentsScoredAbove: Array<string> = [];
//   const studentDetail = studentDetails(classObj);
//   for (const key in studentDetail) {
//     let count = 0;
//     const value = studentDetail[key];
//     let studentSubjectCount = value.studentSubjects.length;
//     for (let i = 0; i < value.allMarks.length; i++) {
//       if (studentAverageOfClass < value.allMarks[i]) {
//         count++;
//       }
//     }
//     if ((count / studentSubjectCount) * 100 > 50) {
//       studentsScoredAbove.push(key);
//     }
//   }
// return studentsScoredAbove
// }
// console.log(studentScoredAboveClassAvgInMajoritySubject(classObj));
// 70.Write a function to find and print the student(s) who scored below the class average marks in the majority of subjects.
// function studentScoredBelowClassAvgInMajoritySubject(classObj: ClassObj) {
//   const studentAverageOfClass = classDetails(classObj).studentAverage;
//   let studentsScoredBelow: Array<string> = [];
//   const studentDetail = studentDetails(classObj);
//   for (const key in studentDetail) {
//     let count = 0;
//     const value = studentDetail[key];
//     let studentSubjectCount = value.studentSubjects.length;
//     for (let i = 0; i < value.allMarks.length; i++) {
//       if (studentAverageOfClass < value.allMarks[i]) {
//         count++;
//       }
//     }
//     if ((count / studentSubjectCount) * 100 < 50) {
//       studentsScoredBelow.push(key);
//     }
//   }
//     return studentsScoredBelow
// }
// console.log(studentScoredBelowClassAvgInMajoritySubject(classObj));
// 71. Write a function to find and print the subject(s) in which the majority of students scored above the class average marks.
// function subjectWithMajorityScoredAboveClassAvg(classObj:ClassObj){
//     const studentAverageOfClass = classDetails(classObj).studentAverage;
//   let subjectScoredAbove: Array<string> = [];
//   const subjectDetail = subjectDetails(classObj);
//   for (const key in subjectDetail) {
//     let count = 0;
//     const value = subjectDetail[key];
//     let studentSubjectCount = value.totalStudent;
//     for (let i = 0; i < value.markDetail.length; i++) {
//       if (studentAverageOfClass > value.markDetail[i]) {
//         count++;
//       }
//     }
//     if ((count / studentSubjectCount) * 100 < 50) {
//       subjectScoredAbove.push(key);
//     }
//   }
//     return subjectScoredAbove
// }
// console.log(subjectWithMajorityScoredAboveClassAvg(classObj))
//72.Write a function to find and print the subject(s) in which the majority of students scored below the class average marks.
// function subjectWithMajorityScoredBelowClassAvg(classObj:ClassObj){
//   const studentAverageOfClass = classDetails(classObj).studentAverage;
// let subjectScoredAbove: Array<string> = [];
// const subjectDetail = subjectDetails(classObj);
// for (const key in subjectDetail) {
//   let count = 0;
//   const value = subjectDetail[key];
//   let studentSubjectCount = value.totalStudent;
//   for (let i = 0; i < value.markDetail.length; i++) {
//     if (studentAverageOfClass < value.markDetail[i]) {
//       count++;
//     }
//   }
//   if ((count / studentSubjectCount) * 100 < 50) {
//     subjectScoredAbove.push(key);
//   }
// }
//   return subjectScoredAbove
// }
// console.log(subjectWithMajorityScoredBelowClassAvg(classObj))
//73.Write a function to calculate and print the percentage of students who scored above the average marks of a specific student in each subject.
// function getPercentageOfStudentsScoredAboveAvgStudentInAllSubject(
//   student: string,
//   classObj: ClassObj
// ) {
//   const studentDetail = studentDetails(classObj);
//   const totalStudents = classDetails(classObj).totalNumberOfStudents -1;
//   const averageMarkOfstudent = studentDetail[student].averageMarkOfStudent;
//   let studentsWereAboveAvg = checkAboveCertainMark(
//     averageMarkOfstudent,
//     "all",
//     classObj
//   );
//   let percentage = (studentsWereAboveAvg.length / totalStudents) * 100;
//   return percentage;
// }
// console.log(
//   getPercentageOfStudentsScoredAboveAvgStudentInAllSubject("Mini SS", classObj)
// );
// 74.Write a function to calculate and print the percentage of students who scored below the average marks of a specific student in each subject.
// function getPercentageOfStudentsScoredBelowAvgStudentInAllSubject(
//   student: string,
//   classObj: ClassObj
// ) {
//   const studentDetail = studentDetails(classObj);
//   const totalStudents = classDetails(classObj).totalNumberOfStudents -1;
//   const averageMarkOfstudent = studentDetail[student].averageMarkOfStudent;
//   let studentsWereBelowAvg = checkBelowCertainMark(
//     averageMarkOfstudent,
//     "all",
//     classObj
//   );
//   let percentage = (studentsWereBelowAvg.length / totalStudents) * 100;
//   return percentage;
// }
// console.log(
//   getPercentageOfStudentsScoredBelowAvgStudentInAllSubject("Ravi", classObj)
// );
// 75.Write a function to calculate and print the percentage of students who scored above the average marks of a specific student in at least one subject.
// function getPercentageOfStudentsScoredAboveAvgStudentInAnySubject(
//   student: string,
//   classObj: ClassObj
// ) {
//   const studentDetail = studentDetails(classObj);
//   let studentsAboveAvg: Array<string> = [];
//   const totalStudents = classDetails(classObj).totalNumberOfStudents - 1;
//   const averageMarkOfStudent = studentDetail[student].averageMarkOfStudent;
//   for (let i = 0; i < classObj.students.length; i++) {
//     let count = 0;
//     for (let j = 0; j < classObj.students[i].marks.length; j++) {
//       if (classObj.students[i].name == student) {
//         continue;
//       }
//       if (classObj.students[i].marks[j].mark > averageMarkOfStudent) {
//         count++;
//         break;
//       }
//     }
//     if (count) {
//       studentsAboveAvg.push(classObj.students[i].name);
//     }
//   }
//   let percentage = (studentsAboveAvg.length / totalStudents) * 100;
//   return percentage
// }
// console.log(
//   getPercentageOfStudentsScoredAboveAvgStudentInAnySubject("Ravi", classObj)
// );
// 76.Write a function to calculate and print the percentage of students who scored below the average marks of a specific student in at least one subject.
// function getPercentageOfStudentsScoredBelowAvgStudentInAnySubject(
//   student: string,
//   classObj: ClassObj
// ) {
//   const studentDetail = studentDetails(classObj);
//   let studentsBelowAvg: Array<string> = [];
//   const totalStudents = classDetails(classObj).totalNumberOfStudents - 1;
//   const averageMarkOfStudent = studentDetail[student].averageMarkOfStudent;
//   for (let i = 0; i < classObj.students.length; i++) {
//     let count = 0;
//     for (let j = 0; j < classObj.students[i].marks.length; j++) {
//       if (classObj.students[i].name == student) {
//         continue;
//       }
//       if (classObj.students[i].marks[j].mark < averageMarkOfStudent) {
//         count++;
//         break;
//       }
//     }
//     if (count) {
//       studentsBelowAvg.push(classObj.students[i].name);
//     }
//   }
//   let percentage = (studentsBelowAvg.length / totalStudents) * 100;
//   return percentage
// }
// console.log(
//   getPercentageOfStudentsScoredBelowAvgStudentInAnySubject("Ravi", classObj)
// );
// 77.Write a function to find and print the student(s) who scored above the average marks of a specific student in all subjects.
// function getStudentsScoredAboveAvgStudentInAllSubject(
//   student: string,
//   classObj: ClassObj
// ) {
//   const studentDetail = studentDetails(classObj);
//   const averageMarkOfstudent = studentDetail[student].averageMarkOfStudent;
//   let studentsWereAboveAvg = checkAboveCertainMark(
//     averageMarkOfstudent,
//     "all",
//     classObj
//   );
//   return studentsWereAboveAvg
// }
// console.log(
//   getStudentsScoredAboveAvgStudentInAllSubject("Mini SS", classObj)
// );
//78.Write a function to find and print the student(s) who scored below the average marks of a specific student in all subjects.
// function getStudentsScoredBelowAvgStudentInAllSubje the specific student. Itct(
//   student: string,
//   classObj: ClassObj
// ) {
//   const studentDetail = studentDetails(classObj);
//   const averageMarkOfstudent = studentDetail[student].averageMarkOfStudent;
//   let studentsWereBelowAvg = checkBelowCertainMark(
//     averageMarkOfstudent,
//     "all",
//     classObj
//   );
//   return studentsWereBelowAvg
// }
// console.log(
//   getStudentsScoredBelowAvgStudentInAllSubject("Mini SS", classObj)
// );
// 79.Write a function to find and print the subject(s) in which the average marks are above the average marks of a specific student.
// function getSubjectsWithAvgMarksAboveSpecificStudent(
//   student: string,
//   classObj: ClassObj
// ) {
//   const subjectAboveAvg: Array<string> = [];
//   const studentDetail = studentDetails(classObj);
//   const subjectDetail = subjectDetails(classObj);
//   const averageMarkOfStudent = studentDetail[student].averageMarkOfStudent;
//   Object.entries(subjectDetail).forEach(([key, value]) => {
//     if (value.averageMark > averageMarkOfStudent) {
//       subjectAboveAvg.push(key);
//     }
//   });
//   return subjectAboveAvg
// }
// console.log(getSubjectsWithAvgMarksAboveSpecificStudent("Ravi", classObj));
//80.Write a function to find and print the subject(s) in which the average marks are below the average marks of a specific student.
// function getSubjectsWithAvgMarksBelowSpecificStudent(
//   student: string,
//   classObj: ClassObj
// ) {
//   const subjectBelowAvg: Array<string> = []; the specific student. It
//   const studentDetail = studentDetails(classObj);
//   const subjectDetail = subjectDetails(classObj);
//   const averageMarkOfStudent = studentDetail[student].averageMarkOfStudent;
//   Object.entries(subjectDetail).forEach(([key, value]) => {
//     if (value.averageMark < averageMarkOfStudent) {
//       subjectBelowAvg.push(key);
//     }
//   });
//   return subjectBelowAvg
// }
// console.log(getSubjectsWithAvgMarksBelowSpecificStudent("Ravi", classObj));
// 81.Write a function to find and print the subject(s) in which the highest percentage of students scored above the average marks of a specific student.
// function getSubjectsHighestPercentageAboveAvgMarkSpacificStudent(
//   student: string,
//   classObj: ClassObj
// ) {
//   let subjectsHighestPercentage: Array<string> = [];
//   const studentDetail = studentDetails(classObj);
//   const studentAndSubjectDetails = studentAndSubAboveAvgMarkSpacificStduent(
//     student,
//     classObj
//   );
//   const totalCount = Object.entries(studentAndSubjectDetails.subjects).map(
//     ([key, value]) => {
//       return studentAndSubjectDetails.subjects[key].count;
//     }
//   );
//   const highestCount = calculateHigestAndLowest("highest", totalCount);
//   Object.entries(studentAndSubjectDetails.subjects).forEach(([key, value]) => {
//     if (studentAndSubjectDetails.subjects[key].count == highestCount) {
//       subjectsHighestPercentage.push(key);
//     }
//   });
//   return subjectsHighestPercentage;
// }
// console.log(
//   getSubjectsHighestPercentageAboveAvgMarkSpacificStudent("Binu", classObj)
// );
//82. Write a function to find and print the subject(s) in which the highest percentage of students scored below the average marks of a specific student.
// function getSubjectsHighestPercentageBelowAvgMarkSpacificStudent(
//   student: string,
//   classObj: ClassObj
// ) {
//   let subjectsHighestPercentage: Array<string> = [];
//   const studentAndSubjectDetails = studentAndSubBelowAvgMarkSpacificStduent(
//     student,
//     classObj
//   );
//   const totalCount = Object.entries(studentAndSubjectDetails.subjects).map(
//     ([key, value]) => {
//       return studentAndSubjectDetails.subjects[key].count;
//     }
//   );
//   const highestCount = calculateHigestAndLowest("highest", totalCount);
//   Object.entries(studentAndSubjectDetails.subjects).forEach(([key, value]) => {
//     if (studentAndSubjectDetails.subjects[key].count == highestCount) {
//       subjectsHighestPercentage.push(key);
//     }
//   });
//   return subjectsHighestPercentage;
// }
// console.log(
//   getSubjectsHighestPercentageBelowAvgMarkSpacificStudent("Binu", classObj)
// );
// 83.Write a function to find and print the subject(s) in which the lowest percentage of students scored above the average marks of a specific student.
// function getSubjectsLowestPercentageAboveAvgMarkSpacificStudent(student:string, classObj:ClassObj){
//   let subjectsLowestPercentage: Array<string> = [];
//   const studentDetail = studentDetails(classObj);
//   const studentAndSubjectDetails = studentAndSubAboveAvgMarkSpacificStduent(
//     student,
//     classObj
//   );
//   const totalCount = Object.entries(studentAndSubjectDetails.subjects).map(
//     ([key, value]) => {
//       return studentAndSubjectDetails.subjects[key].count;
//     }
//   );
//   const lowestCount = calculateHigestAndLowest("lowest", totalCount);
//   Object.entries(studentAndSubjectDetails.subjects).forEach(([key, value]) => {
//     if (studentAndSubjectDetails.subjects[key].count == lowestCount) {
//       subjectsLowestPercentage.push(key);
//     }
//   });
//   return subjectsLowestPercentage;
// }
// console.log(getSubjectsLowestPercentageAboveAvgMarkSpacificStudent("Ravi", classObj))
// 84.Write a function to find and print the subject(s) in which the lowest percentage of students scored below the average marks of a specific student.
// function getSubjectsLowestPercentageBelowAvgMarkSpacificStudent(student:string, classObj:ClassObj){
//   let subjectsLowestPercentage: Array<string> = [];
//   const studentDetail = studentDetails(classObj);
//   const studentAndSubjectDetails = studentAndSubBelowAvgMarkSpacificStduent(
//     student,
//     classObj
//   );
//   const totalCount = Object.entries(studentAndSubjectDetails.subjects).map(
//     ([key, value]) => {
//       return studentAndSubjectDetails.subjects[key].count;
//     }
//   );
//   const lowestCount = calculateHigestAndLowest("lowest", totalCount);
//   Object.entries(studentAndSubjectDetails.subjects).forEach(([key, value]) => {
//     if (studentAndSubjectDetails.subjects[key].count == lowestCount) {
//       subjectsLowestPercentage.push(key);
//     }
//   });
//   return subjectsLowestPercentage;
// }
// console.log(getSubjectsLowestPercentageBelowAvgMarkSpacificStudent("Ravi", classObj))
// 85.Write a function to calculate and print the percentage of students who scored above the average marks of the class in each subject.
// function getPercentageOfStudentsScoredAboveAverageMarksOfClass(classObj:ClassObj){
//   let  studentsAboveAvg: Array<string> = []
//    const classAverage = classDetails(classObj).studentAverage
//    const totalStudent = classDetails(classObj).totalNumberOfStudents;
//    for(let i = 0; i < classObj.students.length; i++){
//     let studentSubjectLength =  classObj.students[i].marks.length 
//     let count = 0
//     for(let j =0; j < classObj.students[i].marks.length; j++){
//       if( classObj.students[i].marks[j].mark > classAverage){
//         count++
//       }
//     }
//     if(studentSubjectLength == count){
//       studentsAboveAvg.push(classObj.students[i].name)
//     }
//    }
//    let percentage = (studentsAboveAvg.length / totalStudent ) * 100
//    return percentage
// }
// console.log(getPercentageOfStudentsScoredAboveAverageMarksOfClass(classObj))
// 86.Write a function to calculate and print the percentage of students who scored below the average marks of the class in each subject.
// function getPercentageOfStudentsScoredBelowAverageMarksOfClass(classObj:ClassObj){
//   let  studentsBelowAvg: Array<string> = []
//    const classAverage = classDetails(classObj).studentAverage
//    const totalStudent = classDetails(classObj).totalNumberOfStudents;
//    for(let i = 0; i < classObj.students.length; i++){
//     let studentSubjectLength =  classObj.students[i].marks.length 
//     let count = 0
//     for(let j =0; j < classObj.students[i].marks.length; j++){
//       if( classObj.students[i].marks[j].mark < classAverage){
//         count++
//       }
//     }
//     if(studentSubjectLength == count){
//       studentsBelowAvg.push(classObj.students[i].name)
//     }
//    }
//    let percentage = (studentsBelowAvg.length / totalStudent ) * 100
//    return percentage
// }
// console.log(getPercentageOfStudentsScoredBelowAverageMarksOfClass(classObj))
// 87.Write a function to calculate and print the percentage of students who scored above the average marks of the class in at least one subject.
// function getPercentageOfStudentsScoredAboveAverageMarksOfClassAtLeastOneSubject(classObj:ClassObj){
//   let  studentsAboveAvg: Array<string> = []
//    const classAverage = classDetails(classObj).studentAverage
//    const totalStudent = classDetails(classObj).totalNumberOfStudents;
//    for(let i = 0; i < classObj.students.length; i++){
//     let count = 0
//     for(let j =0; j < classObj.students[i].marks.length; j++){
//       if( classObj.students[i].marks[j].mark > classAverage){
//         count++
//         break
//       }
//     }
//     if(count){
//       studentsAboveAvg.push(classObj.students[i].name)
//     }
//    }
//    let percentage = (studentsAboveAvg.length / totalStudent ) * 100
//    return percentage
// }
// console.log(getPercentageOfStudentsScoredAboveAverageMarksOfClassAtLeastOneSubject(classObj))
// 88.Write a function to calculate and print the percentage of students who scored below the average marks of the class in at least one subject.
// function getPercentageOfStudentsScoredBelowAverageMarksOfClassAtLeastOneSubject(classObj:ClassObj){
//   let  studentsBelowAvg: Array<string> = []
//    const classAverage = classDetails(classObj).studentAverage
//    const totalStudent = classDetails(classObj).totalNumberOfStudents;
//    for(let i = 0; i < classObj.students.length; i++){
//     let count = 0
//     for(let j =0; j < classObj.students[i].marks.length; j++){
//       if( classObj.students[i].marks[j].mark < classAverage){
//         count++
//         break
//       }
//     }
//     if(count){
//       studentsBelowAvg.push(classObj.students[i].name)
//     }
//    }
//    let percentage = (studentsBelowAvg.length / totalStudent ) * 100
//    return percentage
// }
// console.log(getPercentageOfStudentsScoredBelowAverageMarksOfClassAtLeastOneSubject(classObj))
// 89.Write a function to find and print the student(s) who scored above the average marks of the class in all subjects.
// function getStudentsScoredAboveAverageMarksOfClass(classObj:ClassObj){
//   let  studentsAboveAvg: Array<string> = []
//    const classAverage = classDetails(classObj).studentAverage
//    const totalStudent = classDetails(classObj).totalNumberOfStudents;
//    for(let i = 0; i < classObj.students.length; i++){
//     let studentSubjectLength =  classObj.students[i].marks.length 
//     let count = 0
//     for(let j =0; j < classObj.students[i].marks.length; j++){
//       if( classObj.students[i].marks[j].mark > classAverage){
//         count++
//       }
//     }
//     if(studentSubjectLength == count){
//       studentsAboveAvg.push(classObj.students[i].name)
//     }
//    }
//    return studentsAboveAvg
// }
// console.log(getStudentsScoredAboveAverageMarksOfClass(classObj))
// 90.Write a function to find and print the student(s) who scored below the average marks of the class in all subjects.
// function getStudentsScoredBelowAverageMarksOfClass(classObj:ClassObj){
//   let  studentsBelowAvg: Array<string> = []
//    const classAverage = classDetails(classObj).studentAverage
//    const totalStudent = classDetails(classObj).totalNumberOfStudents;
//    for(let i = 0; i < classObj.students.length; i++){
//     let studentSubjectLength =  classObj.students[i].marks.length 
//     let count = 0
//     for(let j =0; j < classObj.students[i].marks.length; j++){
//       if( classObj.students[i].marks[j].mark < classAverage){
//         count++
//       }
//     }
//     if(studentSubjectLength == count){
//       studentsBelowAvg.push(classObj.students[i].name)
//     }
//    }
//    return studentsBelowAvg
// }
// console.log(getStudentsScoredBelowAverageMarksOfClass(classObj))
//91.Write a function to find and print the student(s) who scored above the average marks of the class in the majority of subjects.
// function getPercentageOfStudentsScoredAboveAverageMarksOfClassMajoritySubject(classObj:ClassObj){
//   let  studentsAboveAvg: Array<string> = []
//    const classAverage = classDetails(classObj).studentAverage
//    for(let i = 0; i < classObj.students.length; i++){
//     let studentSubjectLength =  classObj.students[i].marks.length 
//     let count = 0
//     for(let j =0; j < classObj.students[i].marks.length; j++){
//       if( classObj.students[i].marks[j].mark > classAverage){
//         count++
//       }
//     }
//     if(count > studentSubjectLength/2 ){
//       studentsAboveAvg.push(classObj.students[i].name)
//     }
//    }
//   return studentsAboveAvg
// }
// console.log(getPercentageOfStudentsScoredAboveAverageMarksOfClassMajoritySubject(classObj))
// 92.Write a function to find and print the student(s) who scored below the average marks of the class in the majority of subjects.
// function getPercentageOfStudentsScoredBelowAverageMarksOfClassMajoritySubject(classObj:ClassObj){
//   let  studentsBelowAvg: Array<string> = []
//    const classAverage = classDetails(classObj).studentAverage;
//    for(let i = 0; i < classObj.students.length; i++){
//     let studentSubjectLength =  classObj.students[i].marks.length 
//     let count = 0
//     for(let j =0; j < classObj.students[i].marks.length; j++){
//       if( classObj.students[i].marks[j].mark < classAverage){
//         count++
//       }
//     }
//     if(count > studentSubjectLength/2 ){
//       studentsBelowAvg.push(classObj.students[i].name)
//     }
//    }
//   return studentsBelowAvg
// }
// console.log(getPercentageOfStudentsScoredBelowAverageMarksOfClassMajoritySubject(classObj))
// 93.Write a function to find and print the subject(s) in which the majority of students scored above the average marks of the class.
// function getSubjectsWithMajorityOfStudentsScoredAboveAvgOfClass(classObj:ClassObj){
//   let subjectWithAboveAvg:Array<string> = [];
//   const classAverage = classDetails(classObj).studentAverage;
//   const subjectDetail = subjectDetails(classObj)
//   Object.entries(subjectDetail).forEach(([key, value]) => {
//     let count = 0;
//     let totalStudents = value.markDetail.length
//     value.markDetail.forEach((mark) =>{
//       if(mark > classAverage){
//         count++
//       }
//     })
//     if(count > totalStudents / 2){
//       subjectWithAboveAvg.push(key)
//     }
//   })
//  return subjectWithAboveAvg
// }
// console.log(getSubjectsWithMajorityOfStudentsScoredAboveAvgOfClass(classObj))
// 94.Write a function to find and print the subject(s) in which the majority of students scored below the average marks of the class.
// function getSubjectsWithMajorityOfStudentsScoredBelowAvgOfClass(classObj:ClassObj){
//   let subjectWithBelowAvg:Array<string> = [];
//   const classAverage = classDetails(classObj).studentAverage;
//   const subjectDetail = subjectDetails(classObj)
//   Object.entries(subjectDetail).forEach(([key, value]) => {
//     let count = 0;
//     let totalStudents = value.markDetail.length
//     value.markDetail.forEach((mark) =>{
//       if(mark < classAverage){
//         count++
//       }
//     })
//     if(count > totalStudents / 2){
//       subjectWithBelowAvg.push(key)
//     }
//   })
//  return subjectWithBelowAvg
// }
// console.log(getSubjectsWithMajorityOfStudentsScoredBelowAvgOfClass(classObj))
// 95.Write a function to calculate and print the percentage of students who scored above the average marks of a specific student in the majority of subjects.
function getPercentageOfStudentsScoredAboveAvgStudentInMajoritySubject(student, classObj) {
    const studentDetail = (0, studentDetails_js_1.studentDetails)(classObj);
    let studentsAboveAvg = [];
    const totalStudents = (0, classDetails_js_1.classDetails)(classObj).totalNumberOfStudents;
    const averageMarkOfStudent = studentDetail[student].averageMarkOfStudent;
    for (let i = 0; i < classObj.students.length; i++) {
        let count = 0;
        let totalSubjects = classObj.students[i].marks.length;
        for (let j = 0; j < classObj.students[i].marks.length; j++) {
            if (classObj.students[i].marks[j].mark > averageMarkOfStudent) {
                count++;
            }
        }
        if (count > (totalSubjects / 2)) {
            studentsAboveAvg.push(classObj.students[i].name);
        }
    }
    let percentage = (studentsAboveAvg.length / totalStudents) * 100;
    return percentage;
}
console.log(getPercentageOfStudentsScoredAboveAvgStudentInMajoritySubject("Ravi", classObj));
//  96.Write a function to calculate and print the percentage of students who scored below the average marks of a specific student in the majority of subjects.
function getPercentageOfStudentsScoredBelowAvgStudentInMajoritySubject(student, classObj) {
    const studentDetail = (0, studentDetails_js_1.studentDetails)(classObj);
    let studentsBelowAvg = [];
    const totalStudents = (0, classDetails_js_1.classDetails)(classObj).totalNumberOfStudents;
    const averageMarkOfStudent = studentDetail[student].averageMarkOfStudent;
    for (let i = 0; i < classObj.students.length; i++) {
        let count = 0;
        let totalSubjects = classObj.students[i].marks.length;
        for (let j = 0; j < classObj.students[i].marks.length; j++) {
            if (classObj.students[i].marks[j].mark < averageMarkOfStudent) {
                count++;
            }
        }
        if (count > (totalSubjects / 2)) {
            studentsBelowAvg.push(classObj.students[i].name);
        }
    }
    let percentage = (studentsBelowAvg.length / totalStudents) * 100;
    return percentage;
}
console.log(getPercentageOfStudentsScoredBelowAvgStudentInMajoritySubject("Ravi", classObj));
