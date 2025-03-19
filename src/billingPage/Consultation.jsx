import React, { useEffect, useState } from "react";
import { Table, Tag } from "antd";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { consultation } from "../Redux/slice/consultationSlice";
// import { useLocation } from "react-router-dom";
import BillingDetails from "./BillingDetails";

const Consultation = () => {
  // const location = useLocation();
  const dispatch = useDispatch();

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  // const [consultationData, setConsultationData] = useState([]);

  const { consultationData } = useSelector(
    (state) => state?.billing?.consultation
  );

  useEffect(() => {
    const patientId = localStorage.getItem("billingPatientId");
    dispatch(consultation({ patientId }));
    // setConsultationData(data);
  }, []);

  const rows = consultationData;

  const selectedRowsData = rows?.filter((row) =>
    selectedRowKeys.includes(row.sno)
  );
  const totalPrice = selectedRowsData?.reduce(
    (sum, row) => sum + (row?.procedureTestPrice || 0),
    0
  );

  // console.log("Selected data:", consultationData);
  // console.log("Total Price:", totalPrice);

  const columns = [
    { title: "Sl No", dataIndex: "sno", key: "sno" },
    {
      title: "Procedure Name",
      dataIndex: "procedureName",
      key: "procedureName",
    },
    {
      title: "Quantity",
      dataIndex: "procedureTestQuantity",
      key: "procedureTestQuantity",
    },
    {
      title: "Amount",
      dataIndex: "procedureTestPrice",
      key: "procedureTestPrice",
    },
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
