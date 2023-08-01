import { studentDetails } from "./studentDetails";


function studentFilter(
  filterMark: number,
  classObj: ClassObj,
  subject: string = "",
  filterItem: string
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
      if(filterItem == "totalMark"){
        if(studentDetail[student.name].totalMark === filterMark){
            filtedItems.push(student.name)
        }
      }
      if(filterItem == "averageMark"){
        if(studentDetail[student.name].averageMarkOfStudent == filterMark){
          filtedItems.push(student.name)
        }
      }
      if(filterItem == "percentage"){
        if(studentDetail[student.name].percentageOfStudent == filterMark){
          filtedItems.push(student.name)
        }
      }
    }
  });
  return filtedItems
}
export { studentFilter };
