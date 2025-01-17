interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 21,
  location: 'USA',
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 22,
  location: 'Canada',
};

const studentsList: Student[] = [student1, student2];

// Render table
const table = document.createElement('table');
const tbody = document.createElement('tbody');

studentsList.forEach((student): void => {
  const row = document.createElement('tr');
  const firstNameCell = document.createElement('td');
  const locationCell = document.createElement('td');

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);
