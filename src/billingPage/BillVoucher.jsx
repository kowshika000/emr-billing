import { Box } from "@mui/material";
import React, { useState } from "react";
import ReceiptDetails from "./ReceiptDetails";
import BillingInput from "../billingComponents/billingInput";

const BillVoucher = () => {
  const [billVoucher, setBillVoucher] = useState({
    patientName: "",
    insurenceCompany: "",
    date: "",
    serviceDate: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBillVoucher({
      ...billVoucher,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(billVoucher);
    setBillVoucher({
      patientName: "",
      insurenceCompany: "",
      date: "",
      serviceDate: "",
    });
  };
  return (
    <Box className="form-box mb-5">
      <div className="text-header">Bill/Receipt Voucher</div>
      <form onSubmit={handleSubmit}>
        <div className="bill-form my-4">
          <BillingInput label={"Patient Name"} />
          <BillingInput label={"Insurance Company"} />
          <BillingInput label={"Date"} type="date" />
          <BillingInput label={"Service Date"} type="date" />
        </div>
      </form>
      <ReceiptDetails />
    </Box>
  );
};

export default BillVoucher;
