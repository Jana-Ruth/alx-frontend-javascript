/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />

const cTeacher: Subjects.Teacher = {
  firstName: "John",
  lastName: "Doe",
  experienceTeachingC: 5,
  experienceTeachingReact: 0,
};

const cpp = new Subjects.Cpp();
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());        // Here is the list of requirements for Cpp
console.log(cpp.getAvailableTeacher());    // Available Teacher: John

const java = new Subjects.Java();
java.setTeacher(cTeacher);
console.log(java.getRequirements());       // Here is the list of requirements for Java
console.log(java.getAvailableTeacher());   // No available teacher

const react = new Subjects.React();
react.setTeacher(cTeacher);
console.log(react.getRequirements());      // Here is the list of requirements for React
console.log(react.getAvailableTeacher());  // No available teacher

