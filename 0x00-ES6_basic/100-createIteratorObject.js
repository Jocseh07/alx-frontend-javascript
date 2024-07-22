export default function createIteratorObject(report) {
  const departments = Object.values(report.allEmployees);
  let currentDeptIndex = 0;
  let currentEmpIndex = 0;

  return {
    next() {
      if (currentDeptIndex < departments.length) {
        if (currentEmpIndex < departments[currentDeptIndex].length) {
          const result = {
            value: departments[currentDeptIndex][currentEmpIndex],
            done: false,
          };
          currentEmpIndex += 1;
          return result;
        }
        currentDeptIndex += 1;
        currentEmpIndex = 0;
        return this.next();
      }
      return { done: true };
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}
