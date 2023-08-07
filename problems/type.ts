type ClassObj = {
  name: string;
  teacherName: string;
  students: {
    name: string;
    id: string;
    marks: { subject: string; mark: number }[];
  }[];
};
type ClassDetail = {
  totalNumberOfStudents: number;
  totalMark: number;
  totalAverage: number;
  percentageOfClass: number;
  totalMarkOfStudents : Array<number>;
  studentAverage:number;

};

type SubSubjectDetail = {
  totalMark: number;
  totalStudent: number;
  averageMark: number;
  totalpercentage: number;
  markDetail:Array<number>;
 
};

type SubjectDetail = Record<string, SubSubjectDetail>;

type StudentSubjectDetails ={
  subject:string;
  mark:number;
}

type SubStudentDetail = {
  studentId:string;
  studentSubjects:Array<string>;
  allMarks:Array<number>;
  totalMark:number;
  averageMarkOfStudent:number;
  percentageOfStudent:number;
  studentSubjectDetails:Array<StudentSubjectDetails>,
}

type StudentDetail = Record<string, SubStudentDetail>

type subjectAndStudent = {subject: string, students: Array<string>}[]

type subjectAndMark = {subject: string, highestMark: number}[]
  