class Task {
    constructor(
      public description: string,
      public assignedEmployee: Employee,
      public status: 'Pending' | 'In Progress' | 'Completed' = 'Pending'
    ) {}
  
    updateStatus(newStatus: 'Pending' | 'In Progress' | 'Completed') {
      this.status = newStatus;
    }
  }
  
  class Project {
    public employees: Employee[] = [];
    public tasks: Task[] = [];
  
    constructor(public name: string) {}
  
    assignEmployee(employee: Employee) {
      this.employees.push(employee);
      employee.projects.push(this);
    }
  
    addTask(task: Task) {
      this.tasks.push(task);
    }
  }
  
  class Employee {
    public projects: Project[] = [];
  
    constructor(
      public name: string,
      public position: string,
      public salary: number
    ) {}
  }
  
  class Department {
    public employees: Employee[] = [];
  
    constructor(public name: string) {}
  
    addEmployee(employee: Employee) {
      this.employees.push(employee);
    }
  }
  
  class Company {
    public departments: Department[] = [];
  
    constructor(public name: string) {}
  
    addDepartment(department: Department) {
      this.departments.push(department);
    }
  
    getDepartmentEmployees(departmentName: string): Employee[] {
      const dept = this.departments.find(d => d.name === departmentName);
      return dept ? dept.employees : [];
    }
  
    getEmployeeProjects(employee: Employee): Project[] {
      return employee.projects;
    }
  
    summarizeCompany() {
      console.log(`Company: ${this.name}`);
      this.departments.forEach(dept => {
        console.log(`\nDepartment: ${dept.name}`);
        dept.employees.forEach(emp => {
          console.log(`- ${emp.name}, Position: ${emp.position}, Salary: ${emp.salary}`);
        });
      });
    }
  }
  
  const company = new Company('TechCorp');
  
  const it = new Department('IT');
  const hr = new Department('HR');
  const marketing = new Department('Marketing');
  
  company.addDepartment(it);
  company.addDepartment(hr);
  company.addDepartment(marketing);
  
  const alice = new Employee('Alice', 'Frontend Developer', 5000);
  const bob = new Employee('Bob', 'Recruiter', 4000);
  const carol = new Employee('Carol', 'Marketing Specialist', 4500);
  
  it.addEmployee(alice);
  hr.addEmployee(bob);
  marketing.addEmployee(carol);
  
  const websiteProject = new Project('Nowa Strona Internetowa');
  const campaignProject = new Project('Kampania Reklamowa');
  
  websiteProject.assignEmployee(alice);
  campaignProject.assignEmployee(carol);
  
  const task1 = new Task('Zaprojektuj UI', alice);
  const task2 = new Task('Przygotuj kampanię', carol);
  
  websiteProject.addTask(task1);
  campaignProject.addTask(task2);
  
  task1.updateStatus('In Progress');
  task2.updateStatus('Pending');
  
  company.summarizeCompany();
  
  console.log('\nTasks for project:', websiteProject.name);
  websiteProject.tasks.forEach(task => {
    console.log(`- ${task.description}, Assigned to: ${task.assignedEmployee.name}, Status: ${task.status}`);
  });
  