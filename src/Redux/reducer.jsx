import { combineReducers } from "redux";
import allPatientsReducer from "./slice/allPatientSlice";
import searchPatientsReducer from "./slice/searchPatientSlice";
import patientDetailsReducer from "./slice/patientDetailsSlice";
import consultationReducer from "./slice/consultationSlice";
import labOrderReducer from "./slice/labOrderSlice";
import searchProcedureReducer from "./slice/searchProcedureSlice";
import procedureOrderReducer from "./slice/procedureOrderSlice";
import additionalChargeReducer from "./slice/addtionalChargeSlice";
import searchLabtestsReducer from "./slice/searchLabTestsSlice";

export const rootReducer = combineReducers({
  allPatient: allPatientsReducer,
  searchPatient: searchPatientsReducer,
  patientDetail: patientDetailsReducer,
  consultation: consultationReducer,
  searchLab: searchLabtestsReducer,
  labOrder: labOrderReducer,
  searchProcedure: searchProcedureReducer,
  procedureOrder: procedureOrderReducer,
  additional: additionalChargeReducer,
});
