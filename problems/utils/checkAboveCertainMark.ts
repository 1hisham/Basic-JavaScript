import { studentDetails } from "./studentDetails"
// comments :- split this into two separate functions
function checkAboveCertainMark(certainMark:number, subject:string, classObj:ClassObj){
   let studentsData:Array<string> = []
   let indexCount:number = 0
   let studentDetail = studentDetails(classObj)
   Object.entries(studentDetail).map(([key, value])=> {
      let count:number = 0;
      value.studentSubjectDetails.map((item, index)=> {
         if(subject !== "all"){
            if(item.subject == subject){
               if(item.mark > certainMark){
                  studentsData.push(key)
               }
            }
         }
         if(subject == "all"){
            if(item.mark > certainMark ){
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
export {checkAboveCertainMark}