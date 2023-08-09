import { studentDetails } from "./studentDetails"
// comments :- spilt this into seperate functions
// comments := rename certain to threshold
// comments :- use check, has, is only for functions which returns boolean, rename function to studentsBelowThreshold
function checkBelowCertainMark(certainMark:number, subject:string, classObj:ClassObj){
   // comments :- rename to students
   let studentsData:Array<string> = []
   // comment :- rename to subjectCount
   let indexCount:number = 0
   let studentDetail = studentDetails(classObj)
   Object.entries(studentDetail).map(([key, value])=> {
      let count:number = 0;
      value.studentSubjectDetails.map((item, index)=> {
         if(subject !== "all"){
            if(item.subject == subject){
               if(item.mark < certainMark){
                  studentsData.push(key)
               }
            }
         }
         if(subject == "all"){
            if(item.mark < certainMark ){
             count++
            }
         }
         indexCount = index +1
      })
      if(count == indexCount){
         studentsData.push(key)
      }
   })
   return studentsData

}
export {checkBelowCertainMark}