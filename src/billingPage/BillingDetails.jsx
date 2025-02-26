import { Box } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import BillingInput from "../billingComponents/billingInput";
import { Button, Modal } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const BillingDetails = ({ totalPrice }) => {
  const [billingData, setBillingData] = useState({
    advanceAmount: 0,
    discountApplied: 0,
    paidAmount: 5,
    advanceAdjusted: 0,
    billAmount: totalPrice || 0,
    taxAmount: 0,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const pdfRef = useRef(null); // Reference for PDF generation

  useEffect(() => {
    setBillingData((prevData) => ({
      ...prevData,
      billAmount: totalPrice || 0,
    }));
  }, [totalPrice]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBillingData((prevData) => ({
      ...prevData,
      [name]: Number(value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(true); // Open the modal on submit
  };

  const handleDownloadPDF = () => {
    const input = pdfRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 10, 10, 190, 0);
      pdf.save("Billing_Details.pdf");
    });
  };

  return (
    <Box className="form-box">
      <div className="text-header">Billing Details</div>
      <form onSubmit={handleSubmit}>
        <div className="bill-form my-4">
          <BillingInput label={"Bill Amount"} name="billAmount" value={billingData.billAmount} onChange={handleChange} />
          <BillingInput label={"Advance Amount"} name="advanceAmount" value={billingData.advanceAmount} onChange={handleChange} />
          <BillingInput label={"Discount Applied"} name="discountApplied" value={billingData.discountApplied} onChange={handleChange} />
          <BillingInput label={"Paid Amount"} name="paidAmount" value={billingData.paidAmount} onChange={handleChange} />
          <BillingInput label={"Advance Adjusted"} name="advanceAdjusted" value={billingData.advanceAdjusted} onChange={handleChange} />
          <BillingInput label={"Tax Amount"} name="taxAmount" value={billingData.taxAmount} onChange={handleChange} />
        </div>
        <div className="d-flex justify-content-end gap-3">
          <Button type="primary" htmlType="submit">
            Generate Bill
          </Button>
        </div>
      </form>

      {/* Modal for Billing Details */}
      <Modal
        title="Billing Details"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
        <div ref={pdfRef} className="billing-preview">
          <p><strong>Bill Amount:</strong> {billingData.billAmount}</p>
          <p><strong>Advance Amount:</strong> {billingData.advanceAmount}</p>
          <p><strong>Discount Applied:</strong> {billingData.discountApplied}</p>
          <p><strong>Paid Amount:</strong> {billingData.paidAmount}</p>
          <p><strong>Advance Adjusted:</strong> {billingData.advanceAdjusted}</p>
          <p><strong>Tax Amount:</strong> {billingData.taxAmount}</p>
        </div>
        <Button
          type="primary"
          icon={<DownloadOutlined />}
          onClick={handleDownloadPDF}
          style={{ marginTop: "10px" }}
        >
          Download PDF
        </Button>
      </Modal>
    </Box>
  );
};

export default BillingDetails;
