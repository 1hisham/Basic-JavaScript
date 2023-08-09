function classDetails(classObj: ClassObj) {
  let totalMark = 0;
  let totalNumberOfStudent = 0;
  let totalpercentage = 0;
  let totalAverage = 0;
  let totalSubject = 0;
  let maxMark = 50;
  let totalMarkOfStudent = 0;
  let totalMarksOfstudents: Array<number> = [];
  let totalNumbersubjectStudyByStudents: number = 0;
  classObj.students.forEach((student, index) => {
    totalNumberOfStudent = index + 1;
    student.marks.forEach((item) => {
      totalNumbersubjectStudyByStudents++;
      totalMark += item.mark;
      totalSubject++;
      totalMarkOfStudent += item.mark;
    });
    totalMarksOfstudents.push(totalMarkOfStudent);
    totalMarkOfStudent = 0;
  });
  totalAverage = totalMark / totalNumberOfStudent;
  totalpercentage = (totalMark / (totalSubject * maxMark)) * 100;
  let studentsAverageMark = totalMark / totalNumbersubjectStudyByStudents;
  
  return {
    totalNumberOfStudents: totalNumberOfStudent,
    totalMark: totalMark,
    totalAverage: totalAverage,
    percentageOfClass: totalpercentage,
    totalMarkOfStudents: totalMarksOfstudents,
    studentAverage: studentsAverageMark,
  };
}
export { classDetails };
