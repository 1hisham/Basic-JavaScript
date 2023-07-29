
function totalNumberOfStudent(classObj:ClassObj){
    let numberOfStudent = 0;
    classObj.students.forEach((student, index:number)=> {
        numberOfStudent = index + 1
    })
    return numberOfStudent
}
export {totalNumberOfStudent}