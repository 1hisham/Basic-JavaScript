import { studentDetails } from "./studentDetails";


function studetnFilter(
  filterMark: number,
  classObj: ClassObj,
  subject: string = ""
) {
  let filtedItems:Array<string> = [];
  let studentDetail = studentDetails(classObj)
  classObj.students.forEach((student) => {
    student.marks.forEach((item) => {
    if(subject !== ""){
        if (item.subject === subject) {
          if (item.mark === filterMark) {
            filtedItems.push(student.name);
          }
        }  
    }
    });
    if(subject == ""){
        if(studentDetail[student.name].totalMark === filterMark){
            filtedItems.push(student.name)
        }
    }
  });
  return filtedItems
}
export { studetnFilter };
