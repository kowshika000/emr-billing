import { Box } from "@mui/material";
import React from "react";
import PatientInfo from "./PatientInfo";
import "./billingPage.css";
import LabTreatment from "./LabTreatment";
import Consultation from "./Consultation";
import BillingDetails from "./BillingDetails";
import BillVoucher from "./BillVoucher";
import { useSelector } from "react-redux";
import { Spin } from "antd";

const BillingPage = () => {
  // Destructure and provide a default value in case state.patientDetail is undefined
  // const { loading } = useSelector((state) => state.patientDetail || { loading: false });

  return (
    <Box
      padding={"20px"}
      display={"flex"}
      flexDirection={"column"}
      gap={"2rem"}
      width={"100%"}
      overflow={"auto"}
      height={"100vh"}
    >
      {/* {loading ? (
        <div style={{ alignSelf: "center", height: "100%" }}>
          <Spin size="large" />
        </div>
      ) : (
        <>
          <PatientInfo />
          <LabTreatment />
          <Consultation />
          <BillingDetails />
          <BillVoucher />
        </>
      )} */}
      <PatientInfo />
      <LabTreatment />
      <Consultation />
      {/* <BillingDetails /> */}
      <BillVoucher />
    </Box>
  );
};

export default BillingPage;
