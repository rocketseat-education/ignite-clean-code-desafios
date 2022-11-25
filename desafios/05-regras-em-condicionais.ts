const necessaryGradeToBeApproved = 7
const studentGrade = 10

const numberOfAbsensesToFailSchool = 100
const studentNumberOfAbsenses = 109

function checkIfStudentPassedTheSchoolYear() {
  if (studentGrade < necessaryGradeToBeApproved) {
    return { error: true, message: 'Student was not approved because his grade was below the necessary.'}
  } else {
    if(studentNumberOfAbsenses > numberOfAbsensesToFailSchool) {
      return { error: true, message: 'Student was not approved because of his absenses'}
    } else {
      return { error: false, message: 'Student was approved :)'}
    }
  }
}

console.log(checkIfStudentPassedTheSchoolYear())