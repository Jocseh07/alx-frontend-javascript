export default function getStudentIdsSum(list) {
  if (!Array.isArray(list)) {
    return [];
  }

  return list.reduce((acc, student) => acc + student.id, 0);
}
