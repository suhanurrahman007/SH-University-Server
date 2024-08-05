import { model, Schema } from "mongoose";
import { AcademicSemesterCode, AcademicSemesterName, Months, TAcademicSemester } from "./academicSemester.interface";

const months: Months[] = [
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

const AcademicSemesterName: AcademicSemesterName[] = ['Spring', 'Summer', 'Fall'];

const AcademicSemesterCode: AcademicSemesterCode[] = [
  '01',
  '02',
  '03',
];


const academicSemesterSchema = new Schema<TAcademicSemester>(
  {
    name: {
      type: String,
      required: true,
      enum: AcademicSemesterName,
    },
    code: {
      type: String,
      required: true,
      enum: AcademicSemesterCode,
    },
    year: {
      type: Date,
      required: true,
    },
    startMonth: {
      type: String,
      required: true,
      enum: months,
    },
    endMonth: {
      type: String,
      required: true,
      enum: months
    }
  },
  {
    timestamps: true,
  },
);

export const academicSemesterModel = model<TAcademicSemester>('AcademicSemester',academicSemesterSchema)