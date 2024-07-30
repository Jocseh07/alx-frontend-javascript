export default function updateStudentGradeByCity(students, city, grades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const grade = grades.filter((grade) => grade.studentId === student.id);
      const studentGrade = grade.length > 0 ? grade[0].grade : 'N/A';
      return { ...student, grade: studentGrade };
    });
}
