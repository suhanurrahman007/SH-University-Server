import { academicSemesterNameCodeMapper } from "./academicSemester.constant";
import { TAcademicSemester } from "./academicSemester.interface";
import { academicSemesterModel } from "./academicSemester.model";

const createAcademicSemesterIntoDB = async(payload: TAcademicSemester)=>{
   

    if (academicSemesterNameCodeMapper[payload.name] !== payload.code){
        throw new Error ("Invalid Semester Code")
    }
    const result = await academicSemesterModel.create(payload)
    return result;
}

const getAllAcademicStudentIntoDB = async()=>{
    const result = await academicSemesterModel.find()
    return result;
}

const getSingleAcademicStudentIntoDB = async(id: string)=>{
    const result = await academicSemesterModel.findById(id)
    return result;
}

const getUpdateAcademicStudentIntoDB = async (id: string, payload: Partial<TAcademicSemester>) => {
    if (
        payload.name && payload.code && academicSemesterNameCodeMapper[payload.name] !== payload.code
    ) {
        throw new Error('Invalid Semester Code')
    }
  const result = await academicSemesterModel.findOneAndUpdate({_id: id }, payload, {
    new: true,
  });
  return result;
};

export const AcademicSemesterService = {
    createAcademicSemesterIntoDB,
    getAllAcademicStudentIntoDB,
    getSingleAcademicStudentIntoDB,
    getUpdateAcademicStudentIntoDB
}