import { SEARCH_PATIENT, SEARCH_PATIENT_REQUEST, SEARCH_PATIENT_FAILURE } from "../action/actionType";

const initialState = {
  loading: false,
  error: null,
  patientData: null,
};

const billingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_PATIENT_REQUEST:
      return {
        ...state,
        loading: true, 
        error: null,   
      };
    case SEARCH_PATIENT:
      return {
        ...state,
        patientData: action.payload, 
        loading: false, 
        error: null,   
      };
    case SEARCH_PATIENT_FAILURE:
      return {
        ...state,
        loading: false, 
        error: action.payload, 
      };
    default:
      return state;
  }
};

export default billingReducer;
