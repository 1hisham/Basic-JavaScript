type ClassObj = {
    name: string;
    teacherName: string;
    students: {
      name: string;
      id: string;
      marks: { subject: string; mark: number }[];
    }[];
  };