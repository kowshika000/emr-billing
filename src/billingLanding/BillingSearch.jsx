import React, { useState } from "react";
import BillingTable from "./BillingTable";
import { Box, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import BillingInput from "../billingComponents/billingInput";
import { searchPatients } from "../Redux/slice/searchPatientSlice";
import { Search } from "@mui/icons-material";
import { useEffect } from "react";

const BillingSearch = ({ navigate }) => {
  const dispatch = useDispatch();
  const [searchData, setSearchData] = useState();
  // const data = useSelector((state) => state.searchPatient || []);

  // console.log(data);

  const status = [
    { label: "Closed", value: "closed" },
    { label: "Pending", value: "pending" },
  ];

  const [formData, setFormData] = useState({
    mrdNo: "",
    consultDate: "",
    patientName: "",
    doctorName: "",
    insurance: "",
    mobile: "",
    national_id: "",
    bill_status: "",
    claim_status: "",
    emr_status: "",
    registered_by: "",
  });

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  useEffect(() => {
    dispatch(searchPatients(formData)).then((resultAction) => {
      if (searchPatients.fulfilled.match(resultAction)) {
        console.log("API Response Data:", resultAction.payload.data.content);
        setSearchData(resultAction.payload.data.content);
      } else {
        console.error("API Error:", resultAction.payload);
      }
    });
  }, [dispatch]);
  const handleClick = () => {
    dispatch(searchPatients(formData)).then((resultAction) => {
      if (searchPatients.fulfilled.match(resultAction)) {
        console.log("API Response Data:", resultAction.payload.data.content);
        setSearchData(resultAction.payload.data.content);
      } else {
        console.error("API Error:", resultAction.payload);
      }
    });
  };

  return (
    <Box>
      <form>
        <div className="billing-form-container">
          <BillingInput
            label={"MRD Number"}
            value={formData.mrdNo}
            onChange={(e) => handleInputChange("mrdNo", e.target.value)}
          />
          <BillingInput
            label={"Consult Date"}
            type="date"
            value={formData.consultDate}
            onChange={(e) => handleInputChange("consultDate", e.target.value)}
          />
          <BillingInput
            label={"Patient Name"}
            value={formData.patientName}
            onChange={(e) => handleInputChange("patientName", e.target.value)}
          />
          <BillingInput
            label={"Doctor"}
            value={formData.doctorName}
            onChange={(e) => handleInputChange("doctorName", e.target.value)}
          />
          <BillingInput
            label={"Insurance"}
            value={formData.insurance}
            onChange={(e) => handleInputChange("insurance", e.target.value)}
          />
          <BillingInput
            label={"Mobile"}
            value={formData.mobile}
            onChange={(e) => handleInputChange("mobile", e.target.value)}
          />
          <BillingInput
            label={"National ID"}
            value={formData.national_id}
            onChange={(e) => handleInputChange("national_id", e.target.value)}
          />
          <BillingInput
            label={"Bill Status"}
            value={formData.bill_status}
            onChange={(value) => handleInputChange("bill_status", value)}
            type="select"
            options={status}
          />
          <BillingInput
            label={"Claim Status"}
            value={formData.claim_status}
            onChange={(value) => handleInputChange("claim_status", value)}
            type="select"
            options={status}
          />
          <BillingInput
            label={"EMR Status"}
            value={formData.emr_status}
            onChange={(value) => handleInputChange("emr_status", value)}
            type="select"
            options={status}
          />
          <BillingInput
            label={"Registered By"}
            value={formData.registered_by}
            onChange={(e) => handleInputChange("registered_by", e.target.value)}
          />
          <Box mt={"auto"}>
            <Button variant="outlined" color="dark" onClick={handleClick}>
              <Search />
              Search
            </Button>
          </Box>
        </div>
      </form>
      <BillingTable navigate={navigate} searchData={searchData} />
    </Box>
  );
};

export default BillingSearch;
