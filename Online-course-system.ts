class Course {
    public students: Student[] = [];
    public materials: string[] = [];
  
    constructor(
      public name: string,
      public instructor: Instructor,
      public maxStudents: number
    ) {
      instructor.courses.push(this);
    }
  
    enroll(student: Student): boolean {
      if (this.students.length >= this.maxStudents) return false;
      this.students.push(student);
      student.courses.push(this);
      return true;
    }
  
    addMaterial(material: string) {
      this.materials.push(material);
    }
  }
  
  class Student {
    public courses: Course[] = [];
  
    constructor(public name: string) {}
  }
  
  class Instructor {
    public courses: Course[] = [];
  
    constructor(public name: string) {}
  
    showCourses() {
      console.log(`Courses by ${this.name}:`);
      this.courses.forEach(course => console.log(course.name));
    }
  }