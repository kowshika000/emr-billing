import React, { useState, useRef } from "react";
import { Box, Modal } from "@mui/material";
import BillingInput from "../billingComponents/billingInput";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const ReceiptDetails = () => {
  const [receiptType, setReceiptType] = useState("");
  const [amount, setAmount] = useState("");
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
          style={{ backgroundColor: "rgb(73, 73, 73)", color: "white", border: "none" }}
          onClick={handleGenerate} // Open modal when clicked
        >
          Generate
        </Button>
        <Button
          className="form-btn"
          style={{ backgroundColor: "rgb(160, 38, 38)", color: "white", border: "none" }}
          onClick={() => navigate("/list")}
        >
          Close
        </Button>
      </div>

      {/* MODAL */}
      <Modal open={open} onClose={handleClose}>
        <Box
          className="modal-content"
          sx={{
            width: 500,
            bgcolor: "white",
            p: 3,
            borderRadius: 2,
            boxShadow: 24,
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Box ref={pdfRef} style={{ padding: "20px", backgroundColor: "#fff" }}>
            <Box className="hospital-header" style={{ textAlign: "center", marginBottom: "20px" }}>
              <h2>XYZ Hospital</h2>
              <p>123, Main Street, City, Country</p>
              <p>Phone: (123) 456-7890 | Email: contact@xyzhospital.com</p>
            </Box>

            <Box className="receipt-details">
              <p><strong>Receipt Type:</strong> {receiptType}</p>
              <p><strong>Amount:</strong> {amount}</p>
              <p><strong>Remarks:</strong> {remarks}</p>
              <p><strong>Balance Payable:</strong> {balancePayable}</p>
            </Box>

            {receiptType === "card" && (
              <Box>
                <Box className="text-header">Card Details</Box>
                <p><strong>Card Number:</strong> {cardDetails.cardNumber}</p>
                <p><strong>Valid Thru:</strong> {cardDetails.validThru}</p>
                <p><strong>Month:</strong> {cardDetails.month}</p>
                <p><strong>Year:</strong> {cardDetails.year}</p>
                <p><strong>Bank:</strong> {cardDetails.bank}</p>
              </Box>
            )}
          </Box>

          <div className="d-flex justify-content-end gap-3 mt-3">
            <Button onClick={handleDownloadPDF} style={{ backgroundColor: "rgb(73, 73, 73)", color: "white" }}>
              Download PDF
            </Button>
            <Button onClick={handleClose} style={{ backgroundColor: "rgb(160, 38, 38)", color: "white" }}>
              Close
            </Button>
          </div>
        </Box>
      </Modal>
    </Box>
  );
};

export default ReceiptDetails;
