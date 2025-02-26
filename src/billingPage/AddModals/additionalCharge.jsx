import { Box, Dialog, DialogContent } from "@mui/material";
import React, { useState } from "react";
import BillingInput from "../../billingComponents/billingInput";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import { additionalCharge } from "../../Redux/slice/addtionalChargeSlice";

const AdditionalCharge = ({ onClose }) => {
  const dispatch = useDispatch();
  const [formdata, setFormData] = useState({
    testId: "1",
    type: "",
    amount: "",
    note: "",
  });

  // Handle changes for form fields
  const handleChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleAdd = () => {
    dispatch(additionalCharge(formdata));
  };

  return (
    <Dialog open={true} onClose={onClose} fullWidth maxWidth="sm">
      <DialogContent>
        <div>ADD Additional charges</div>{" "}
        <Box
          display={"flex"}
          gap={1}
          my={2}
          justifyContent={"center"}
          flexDirection={"column"}
        >
          <BillingInput
            label={"Type"}
            type="select"
            options={[
              { label: "Admission fee", value: "admission_fee" },
              { label: "Anathesist", value: "anathesist" },
              { label: "Assisting", value: "assisting" },
            ]}
            value={formdata.type}
            onChange={(value) => handleChange("type", value)}
          />
          <BillingInput
            label={"Amount"}
            value={formdata.amount}
            name="amount"
            onChange={(e) => handleChange("amount", e.target.value)}
          />
          <BillingInput
            label={"Note"}
            value={formdata.note}
            name="note"
            onChange={(e) => handleChange("note", e.target.value)}
          />
        </Box>
        <Button onClick={handleAdd}>Add</Button>
      </DialogContent>
    </Dialog>
  );
};

export default AdditionalCharge;
