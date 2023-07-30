function StudentDetails(classObj: ClassObj) {
  let studentsObject = {};
  let studentObject: any = {};
  let allsubject: any = [];
  let initalMark = 0;
  let totalMark = 0;
  classObj.students.forEach((student) => {
    let studentName = student.name;
    let studentId = student.id;
    student.marks.forEach((item) => {
      allsubject.push(item.subject);
      totalMark = totalMark+ item.mark
    });
    console.log(allsubject,totalMark);
    allsubject = [];
  });
  console.log(studentObject, allsubject);
  return studentsObject;
}
export { StudentDetails };
