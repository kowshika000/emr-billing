import React, { useEffect, useState } from "react";
import { Table, Tag } from "antd";
import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { consultation } from "../Redux/slice/consultationSlice";
import { useLocation } from "react-router-dom";
import BillingDetails from "./BillingDetails";

const Consultation = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const [selectedRowKeys, setSelectedRowKeys] = useState([]); // Stores only selected row keys
  const [consultationData, setConsultationData] = useState([]);

  useEffect(() => {
    const patientId = 27;
    const appointmentId = 46;
    dispatch(consultation({ patientId, appointmentId })).then(
      (resultAction) => {
        if (consultation.fulfilled.match(resultAction)) {
          console.log(
            "API Response Data consult:",
            resultAction.payload.data.data
          );
          setConsultationData(resultAction.payload.data.data);
        } else {
          console.error("API Error:", resultAction.payload);
        }
      }
    );
  }, []);

  const rows =
    consultationData.length > 0
      ? consultationData
      : [
          {
            sno: 1,
            procedureName: "Appendectomy",
            quantity: 2,
            price: 10000,
            status: "Active",
          },
          {
            sno: 2,
            procedureName: "xxxx",
            quantity: 2,
            price: 10000,
            status: "Active",
          },
        ];

  const selectedRowsData = rows.filter((row) =>
    selectedRowKeys.includes(row.sno)
  );
  const totalPrice = selectedRowsData.reduce(
    (sum, row) => sum + (row.price || 0),
    0
  );

  console.log("Selected Rows:", selectedRowsData);
  console.log("Total Price:", totalPrice);

  const columns = [
    { title: "Sl No", dataIndex: "sno", key: "sno" },
    {
      title: "Procedure Name",
      dataIndex: "procedureName",
      key: "procedureName",
    },
    { title: "Quantity", dataIndex: "quantity", key: "quantity" },
    { title: "Amount", dataIndex: "price", key: "price" },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Tag color={status === "Active" ? "green" : "red"}>{status}</Tag>
      ),
    },
  ];

  return (
    <Box className="table-container">
      <Table
        rowSelection={{
          type: "checkbox",
          selectedRowKeys,
          onChange: setSelectedRowKeys,
        }}
        columns={columns}
        dataSource={rows}
        rowKey="sno"
        pagination={false}
      />
      <div className="mt-3">
        <BillingDetails totalPrice={totalPrice} />
      </div>
    </Box>
  );
};

export default Consultation;
