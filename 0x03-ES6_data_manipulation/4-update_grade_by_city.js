export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students) || !Array.isArray(newGrades)) {
    return [];
  }
  return students
    .filter((student) => student.city === city)

    .map((student) => {
      const grade = newGrades.find((newGrade) => newGrade.studentId === student.id);

      return {

        ...student,

        grade: grade ? grade.grade : 'N/A',

      };
    });
}
