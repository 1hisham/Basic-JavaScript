function StudentDetails(classObj:ClassObj){
    let studentsObject ={}
    let studentObject:any = {}
    let allsubject:any = [];
    classObj.students.forEach((student)=> {
    let studentName = student.name
    let studentId = student.id
    student.marks.forEach((item) => {
      allsubject.push(item.subject)
    })
    console.log(allsubject)
    allsubject = []
    })
    console.log(studentObject,allsubject)
    return studentsObject
}
export {StudentDetails}