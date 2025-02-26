import AxiosInstance from "../../Redux/api/AxiosInstance";


// Utility to format query parameters
const formatQueryParams = (params) => {
  if (!params) return "";
  // Ensure that only non-null, non-undefined params are included
  return Object.entries(params)
    .filter(([key, value]) => value != null)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join("&");
};

// Generic GET method for the billing module
export const fetchData = async (url, params) => {
  try {
    const queryString = formatQueryParams(params);
    const fullUrl = queryString ? `${url}?${queryString}` : url;

    const response = await AxiosInstance.get(fullUrl);
    return response.data;
  } catch (error) {
    console.error("API request error:", error);
    throw error;
  }
};

export const searchPatientData = async (params) => {
  return fetchData("searchPatient", params);
};
