function classDetails(classObj: ClassObj) {
  let classDetail: ClassDetail;
  let totalMark = 0;
  let totalNumberOfStudent = 0;
  let totalpercentage = 0;
  let totalAverage = 0;
  let totalSubject = 0;
  let maxMark = 50;
  let totalMarkOfStudent = 0
  let totalMarksOfstudents:Array<number> = []
  classObj.students.forEach((student, index) => {
    totalNumberOfStudent = index + 1;
    student.marks.forEach((item) => {
      totalMark += item.mark;
      totalSubject++;
      totalMarkOfStudent += item.mark
    });
    totalMarksOfstudents.push(totalMarkOfStudent)
    totalMarkOfStudent = 0;
  });
  totalAverage = totalMark / totalNumberOfStudent;
  totalpercentage = (totalMark / (totalSubject * maxMark)) * 100;
  classDetail = {
    totalNumberOfStudents: totalNumberOfStudent,
    totalMark: totalMark,
    totalAverage: totalAverage,
    percentageOfClass: totalpercentage,
    totalMarkOfStudents: totalMarksOfstudents,
  };
  return classDetail;
}
export { classDetails };
