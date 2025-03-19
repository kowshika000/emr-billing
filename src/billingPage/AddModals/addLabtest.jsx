import React, { useState } from "react";
import {
  Autocomplete,
  Box,
  Dialog,
  DialogContent,
  TextField,
} from "@mui/material";
import BillingInput from "../../billingComponents/billingInput";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { searchLabtest } from "../../Redux/slice/searchLabTestsSlice";
import { labOrder } from "../../Redux/slice/labOrderSlice";
import { consultation } from "../../Redux/slice/consultationSlice";

const AddLabtest = ({ onClose }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLabtest, setSelectedLabtest] = useState(null);
  const [options, setOptions] = useState([]);
  const [formValues, setFormValues] = useState({
    labTestId: "",
    quantity: "",
    price: "",
    discount: "",
    emergency: "",
    insuranceCovered: "",
    patientShare: "",
    preApp: "",
    coInsurance: "",
    serviceBy: "",
    serviceDateTime: "",
    remarks: "",
    branchId: 1,
    doctorId: 2,
    patientId: 3,
  });

  const dispatch = useDispatch();
  // const { searchLabtestData } = useSelector((state) => state.searchLab || []);

  const handleSearchChange = (event, newValue) => {
    setSearchQuery(newValue);
    dispatch(searchLabtest({ testName: newValue })).then((resultAction) => {
      if (searchLabtest.fulfilled.match(resultAction)) {
        setOptions(resultAction.payload.data.data);
      } else {
        console.error("API Error:", resultAction.payload);
      }
    });
  };

  const handleOptionSelect = (event, value) => {
    setSelectedLabtest(value);
    setFormValues((prev) => ({
      ...prev,
      labTestId: value?.labTestId || "",
    }));
  };

  const handleInputChange = (field, value) => {
    setFormValues((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    const patientId = localStorage.getItem("billingPatientId");
    dispatch(labOrder(formValues)).then((resultAction) => {
      if (labOrder.fulfilled.match(resultAction)) {
        console.log(
          "API Response Data labOrder:",
          resultAction.payload.data.data
        );
        dispatch(consultation({ patientId }));
      } else {
        console.error("API Error:", resultAction.payload);
      }
    });
    onClose();
  };

  return (
    <Dialog open={true} onClose={onClose} fullWidth maxWidth="md">
      <DialogContent>
        <Box>
          <div className="h5">Add Lab Test</div>
          <div className="px-2 py-3">
            <Autocomplete
              options={options}
              inputValue={searchQuery}
              onInputChange={handleSearchChange}
              getOptionLabel={(option) => option?.testName || ""}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Enter the test name"
                  variant="outlined"
                  placeholder="Type to search..."
                  size="small"
                  color="dark"
                />
              )}
              onChange={handleOptionSelect}
            />
            {selectedLabtest && (
              <div className="d-flex gap-5 justify-content-center py-2">
                <div>Price: {selectedLabtest?.normalRate}</div>
                <div>Lab code: {selectedLabtest?.labCode}</div>
              </div>
            )}
          </div>
          <Box className="billing-form-container">
            <BillingInput
              label={"Quantity"}
              value={formValues.quantity}
              onChange={(e) => handleInputChange("quantity", e.target.value)}
            />
            <BillingInput
              label={"Price"}
              value={formValues.price}
              onChange={(e) => handleInputChange("price", e.target.value)}
            />
            <BillingInput
              label={"Discount"}
              value={formValues.discount}
              onChange={(e) => handleInputChange("discount", e.target.value)}
            />
            <BillingInput
              label={"Emergency"}
              value={formValues.emergency}
              onChange={(e) => handleInputChange("emergency", e.target.value)}
            />
            <BillingInput
              label={"Insurance Covered"}
              value={formValues.insuranceCovered}
              onChange={(e) =>
                handleInputChange("insuranceCovered", e.target.value)
              }
            />
            <BillingInput
              label={"Patient Share"}
              value={formValues.patientShare}
              onChange={(e) =>
                handleInputChange("patientShare", e.target.value)
              }
            />
            <BillingInput
              label={"Pre App"}
              value={formValues.preApp}
              onChange={(e) => handleInputChange("preApp", e.target.value)}
            />
            <BillingInput
              label={"Co Insurance"}
              value={formValues.coInsurance}
              onChange={(e) => handleInputChange("coInsurance", e.target.value)}
            />
            <BillingInput
              label={"Doctor Name"}
              value={formValues.serviceBy}
              onChange={(e) => handleInputChange("serviceBy", e.target.value)}
            />
            <BillingInput
              label={"Service Date & Time"}
              value={formValues.serviceDateTime}
              onChange={(e) =>
                handleInputChange("serviceDateTime", e.target.value)
              }
              type="datetime-local"
            />
            <BillingInput
              label={"Remarks"}
              value={formValues.remarks}
              onChange={(e) => handleInputChange("remarks", e.target.value)}
            />
          </Box>
        </Box>
        <Box display="flex" justifyContent="center" gap={3} marginTop={2}>
          <Button type="primary" onClick={handleSubmit}>
            Add Item
          </Button>
          <Button type="default" onClick={onClose}>
            Close
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default AddLabtest;
