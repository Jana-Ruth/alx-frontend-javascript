


interface Interface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string
}


interface TeacherInterface {
   workFromHome(): string;
  getCoffeeBreak(): string;
  workTeachercTasks(): string
}


class Director  {
workFromHome():string{
return "Work from home"
};

getCoffeeBreak(): string{
  return "Getting a coffee break"
}

workDirectorTasks(): string{
  return "Getting to director task"
}
}


class Teacher  {
workFromHome():string{
return " Cannot work from home"
};

getCoffeeBreak(): string{
  return "Cannot have a break"
}

workTeacherTasks(): string{
  return "Getting to work"
}
}

function creatEmployee (salary: number | string): Teacher | Director {
if (typeof salary === "number" && salary < 500){
  return new Teacher();
} else{
return new Director()
}
}


function isDirector (employee: Teacher | Director): employee is Director{
  return employee instanceof Director;
}

function executeWork (employee: Teacher | Director){
 if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}



type subject = "Math" | "History";
function teachClass(todayClass: "Math" | "History"){
  if(todayClass === "Math"){
    return "Teaching Math"
  } else {
    return "Teaching History"
  }
}