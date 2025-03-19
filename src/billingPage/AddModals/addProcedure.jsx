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
import { searchProcedure } from "../../Redux/slice/searchProcedureSlice";
import { procedureOrder } from "../../Redux/slice/procedureOrderSlice";

const AddProcedure = ({ onClose }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProcedure, setSelectedProcedure] = useState(null);
  const [formValues, setFormValues] = useState({
    procedureTestId: "",
    quantity: "",
    price: "",
    discount: "",
    emergency: "",
    serviceDateTime: "",
    remarks: "",
    branchId: 1,
    doctorId: 2,
    patientId: 3,
  });
  const dispatch = useDispatch();
  const { searchProcedureData } = useSelector(
    (state) => state.searchProcedure || []
  );

  const handleSearchChange = (event, newValue) => {
    setSearchQuery(newValue);
    dispatch(searchProcedure({ procedureName: newValue }));
  };

  const handleOptionSelect = (event, value) => {
    setSelectedProcedure(value);
    setFormValues((prev) => ({
      ...prev,
      procedureTestId: value?.procedureTestId || "",
    }));
  };
  const handleInputChange = (field, value) => {
    setFormValues((prev) => ({ ...prev, [field]: value }));
  };

  const options = searchProcedureData?.data || [];

    const handleSubmit = () => {
      dispatch(procedureOrder(formValues));
      onClose()
    };

  return (
    <Dialog open={true} onClose={onClose} fullWidth maxWidth="md">
      <DialogContent>
        <Box>
          <div className="h5">Add Procedure</div>
          <div className="px-2 py-3">
            <Autocomplete
              options={options}
              inputValue={searchQuery}
              onInputChange={handleSearchChange}
              getOptionLabel={(option) => option?.procedureName || ""}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Enter the procedure name"
                  variant="outlined"
                  placeholder="Type to search..."
                  size="small"
                  color="dark"
                />
              )}
              onChange={handleOptionSelect}
            />
            {selectedProcedure && (
              <div className="d-flex gap-5 justify-content-center py-2">
                <div>Price: {selectedProcedure?.normalRate}</div>
                <div>Lab code: {selectedProcedure?.procedureCode}</div>
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
          <Button type="primary" color="dark" onClick={handleSubmit}>Add Item</Button>
          <Button type="default" onClick={onClose}>
            Close
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default AddProcedure;
