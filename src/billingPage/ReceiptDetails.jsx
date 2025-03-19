import React, { useState, useRef } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import BillingInput from "../billingComponents/billingInput";
// import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const ReceiptDetails = ({patientData}) => {
  const [receiptType, setReceiptType] = useState("");
  const [amount, setAmount] = useState("");
  // const patientData = location.state?.patientInfo;
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    validThru: "",
    month: "",
    year: "",
    bank: "",
  });
  const [remarks, setRemarks] = useState("");
  const [balancePayable, setBalancePayable] = useState("");
  const [open, setOpen] = useState(false); // State for modal visibility
  const navigate = useNavigate();
  const pdfRef = useRef(); // Reference for PDF generation

  const handleCardDetailsChange = (e) => {
    const { name, value } = e.target;
    setCardDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleGenerate = () => {
    setOpen(true); // Show modal when Generate button is clicked
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDownloadPDF = async () => {
    const input = pdfRef.current;
    const canvas = await html2canvas(input);
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const imgWidth = 190;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
    pdf.save("hospital_receipt.pdf");
  };

  return (
    <Box>
      <Box className="text-header">Receipt Details</Box>

      <div className="bill-form my-4">
        <BillingInput
          label={"Receipt Type"}
          value={receiptType}
          type="select"
          options={[
            { label: "Cash", value: "cash" },
            { label: "Card", value: "card" },
          ]}
          onChange={(value) => setReceiptType(value)}
        />
        <BillingInput
          label={"Amount"}
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <BillingInput
          label={"Remarks"}
          value={remarks}
          onChange={(e) => setRemarks(e.target.value)}
        />
        <BillingInput
          label={"Balance Payable Amount"}
          value={balancePayable}
          onChange={(e) => setBalancePayable(e.target.value)}
        />
      </div>

      <div className="d-flex justify-content-end gap-3">
        <Button
          style={{
            backgroundColor: "rgb(73, 73, 73)",
            color: "white",
            border: "none",
          }}
          onClick={handleGenerate} // Open modal when clicked
        >
          Generate
        </Button>
        <Button
          className="form-btn"
          style={{
            backgroundColor: "rgb(160, 38, 38)",
            color: "white",
            border: "none",
          }}
          onClick={() => navigate("/list")}
        >
          Close
        </Button>
      </div>

      {/* MODAL */}

      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        {/* <DialogTitle>XYZ Hospital</DialogTitle> */}
        <DialogContent>
          <Box ref={pdfRef} sx={{ p: 3, backgroundColor: "#fff" }}>
            <Box
              className="hospital-header"
              sx={{ textAlign: "center", mb: 3 }}
            >
              <h2>XYZ Hospital</h2>
              <p>123, Main Street, City, Country</p>
              <p>Phone: (123) 456-7890 | Email: contact@xyzhospital.com</p>
            </Box>
            <hr />
            <Box display="flex" justifyContent="space-between" mb={2}>
              <p className="xl-div">
                <strong>Receipt No:</strong> RN003
              </p>
              <p className="xl-div">
                <strong>Receipt Date:</strong> 2024-9-23
              </p>
            </Box>
            <hr />
            <Box display="flex" justifyContent="space-between" mb={2}>
              <Box>
                <p className="xl-div">
                  <strong>Name:</strong> {patientData?.patientName}
                </p>
                <p className="xl-div">
                  <strong>Mobile:</strong> {patientData?.phoneNo}
                </p>
                <p className="xl-div">
                  <strong>MRD No:</strong> {patientData?.mrdNo}
                </p>
                <p className="xl-div">
                  <strong>Doctor:</strong> {patientData?.doctorName}
                </p>
              </Box>
              <Box>
                <p className="xl-div">
                  <strong>Payable Amount:</strong> xxx
                </p>
                <p className="xl-div">
                  <strong>Paid Amount:</strong> xxxx
                </p>
                <p className="xl-div">
                  <strong>Balance Amount:</strong> xxxx
                </p>
                <p className="xl-div">
                  <strong>Balance Payable:</strong> xxxx
                </p>
              </Box>
            </Box>
            <hr />
            <Box mb={2}>
              <p className="xl-div">
                <strong>Paid By:</strong> {patientData?.patientName}
              </p>
              <p className="xl-div">
                <strong>Amount:</strong> xxxxxxx
              </p>
              <p className="xl-div">
                <strong>Paid Mode:</strong> xxx
              </p>
              <p className="xl-div">
                <strong>For:</strong> {patientData?.patientName}
              </p>
            </Box>
            <hr />
            <Box>
              <div>{patientData?.patientName}</div>
              <div>yyyy-mm-dd</div>
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleDownloadPDF}
            sx={{
              backgroundColor: "rgb(73, 73, 73)",
              color: "white",
              "&:hover": { backgroundColor: "rgb(60, 60, 60)" },
            }}
          >
            Download PDF
          </Button>
          <Button
            onClick={handleClose}
            sx={{
              backgroundColor: "rgb(160, 38, 38)",
              color: "white",
              "&:hover": { backgroundColor: "rgb(140, 30, 30)" },
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ReceiptDetails;
