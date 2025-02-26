import React from "react";
import { Box } from "@mui/material";
import "./billing.css";
import BillingSearch from "./BillingSearch";

const Billing = ({ navigate }) => {
  const currentDateTime = new Date().toLocaleString("en-US", {
    weekday: "long",
    month: "long",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
  return (
    <Box padding={"20px"} width={"100%"} overflow={"auto"}>
      <div>
        <p className="text-header">Billing: Patients List</p>
        <p>{currentDateTime}</p>
      </div>
      <Box paddingY={"20px"}>
        <BillingSearch navigate={navigate} />
      </Box>
    </Box>
  );
};

export default Billing;
