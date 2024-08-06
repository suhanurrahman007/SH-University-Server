import { AcademicSemesterCode, AcademicSemesterName, Months } from "./academicSemester.interface";

export const months: Months[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const academicSemesterName: AcademicSemesterName[] = [
  'Spring',
  'Summer',
  'Fall',
];

export const academicSemesterCode: AcademicSemesterCode[] = ['01', '02', '03'];


 export type TAcademicSemesterNameCodeMapper = {
   [key: string]: string;
 };
 export const academicSemesterNameCodeMapper: TAcademicSemesterNameCodeMapper = {
   Spring: '01',
   Summer: '02',
   Fall: '03',
 };
