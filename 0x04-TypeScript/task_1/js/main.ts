export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: unknown;
}

export interface Directors extends Teacher {
  numberOfReports: number;
}
export interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

export default function printTeacher(
  firstName: string,
  lastName: string,
): string {
  return `${firstName.charAt(0)}. ${lastName}`;
}

export interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

export class StudentClass {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}
