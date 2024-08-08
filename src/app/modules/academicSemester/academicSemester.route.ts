import express from 'express';
import { AcademicSemesterController } from './academicSemester.controller';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemesterValidation } from './academicSemester.validation';

const router = express.Router();

router.post(
  '/create-academic-semester', validateRequest(AcademicSemesterValidation.createAcademicSemesterValidation),
  AcademicSemesterController.createAcademicSemester,
);

router.get(
  '/', AcademicSemesterController.getAllAcademicSemester,
);

router.get('/:academicSemesterId', AcademicSemesterController.getSingleAcademicSemester);

export const AcademicSemesterRoutes = router;
