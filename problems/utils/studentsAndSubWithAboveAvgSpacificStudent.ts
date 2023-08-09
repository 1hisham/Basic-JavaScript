import { studentDetails } from "./studentDetails";
import { subjectDetails } from "./subjectDetails";

// comment :=
function studentAndSubAboveAvgMarkSpacificStduent(
  student: string,
  classObj: ClassObj
) {
  let studentDetail = studentDetails(classObj);
  let studentAndSubjectDetails: any = {};
  let studentsAboveAvgMark: Array<string> = [];
  let subjectAboveAvgMark: Record<string, { count: number }> = {};
  let studentAverage = studentDetail[student].averageMarkOfStudent;

  Object.entries(studentDetail).forEach(([key, value]) => {
    let isStudent = false;
    value.studentSubjectDetails.forEach((items) => {
      if (!subjectAboveAvgMark[items.subject]) {
        subjectAboveAvgMark[items.subject] = { count: 0 };
      } else if (items.mark > studentAverage) {
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

export { studentAndSubAboveAvgMarkSpacificStduent };
