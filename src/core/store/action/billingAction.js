import { searchPatientData } from "../../service/APIservice";
import { SEARCH_PATIENT, SEARCH_PATIENT_REQUEST, SEARCH_PATIENT_FAILURE } from "./actionType";

export const searchPatient = (params) => {
  
  return async (dispatch) => {
    dispatch({ type: SEARCH_PATIENT_REQUEST }); 

    try {
      // const queryString = new URLSearchParams(params).toString();
      const response = await searchPatientData(params);
      
      dispatch({
        type: SEARCH_PATIENT,
        payload: response.data, 
      });
    } catch (error) {
      dispatch({
        type: SEARCH_PATIENT_FAILURE,
        payload: error.message || "An error occurred",
      });
    }
  };
};
