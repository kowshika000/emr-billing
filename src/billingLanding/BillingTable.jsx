import { Box } from "@mui/material";
import { Space, Table, Tag, Spin } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allPatients } from "../Redux/slice/allPatientSlice";
import { patientDetails } from "../Redux/slice/patientDetailsSlice";
import { useState } from "react";

const BillingTable = ({ navigate, searchData }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allPatients());
  }, [dispatch]);

  const { patientDetailsData } = useSelector(
    (state) => state.billing?.patientDetail
  );
  const [selectedPatient, setSelectedPatient] = useState(null);

  const handleNameClick = (patientId) => {
    dispatch(patientDetails({ patientId }));
    setSelectedPatient(patientId); 

    localStorage.setItem("billingPatientId", patientId);
  };

  // Wait for the data to be available before navigating
  useEffect(() => {
    if (selectedPatient && patientDetailsData?.data) {
      navigate(`/secure/billing/details`, {
        state: { patientInfo: patientDetailsData.data },
      });
    }
  }, [selectedPatient, patientDetailsData, navigate]);

  const columns = [
    {
      id: "sno",
      title: "SI No",
      dataIndex: "sno",
      key: "sno",
      render: (text, record, index) => <span>{index + 1}</span>,
    },
    {
      id: "appointmentDate",
      title: "Consult Date",
      dataIndex: "appointmentDate",
      key: "appointmentDate",
    },
    { id: "mrdNo", title: "MR No", dataIndex: "mrdNo", key: "mrdNo" },
    {
      id: "ptName",
      title: "Patient Name",
      dataIndex: "ptName",
      key: "ptName",
      render: (text, record) => (
        <a
          style={{ color: "rgb(68, 184, 212)", fontWeight: "bold" }}
          onClick={() => handleNameClick(record.patientId)}
        >
          {text}
        </a>
      ),
    },
    {
      id: "specialityName",
      title: "Speciality",
      dataIndex: "specialityName",
      key: "specialityName",
    },
    {
      id: "doctorName",
      title: "Doctor",
      dataIndex: "doctorName",
      key: "doctorName",
    },
    {
      id: "insuranceName",
      title: "Insurance",
      dataIndex: "insuranceName",
      key: "insuranceName",
    },
    {
      id: "billStatus",
      title: "Bill",
      dataIndex: "billStatus",
      key: "billStatus",
      render: (status) => (
        <Tag color={status === "Pending" ? "red" : "green"}>{status}</Tag>
      ),
    },
    {
      id: "claimStatus",
      title: "Claim",
      dataIndex: "claimStatus",
      key: "claimStatus",
      render: (status) => (
        <Tag color={status === "Pending" ? "red" : "green"}>{status}</Tag>
      ),
    },
    {
      id: "emrStatus",
      title: "EMR",
      dataIndex: "emrStatus",
      key: "emrStatus",
      render: (status) => (
        <Tag color={status === "Pending" ? "red" : "green"}>{status}</Tag>
      ),
    },
  ];

  const rows = searchData || [];

  return (
    <Box className="table-container my-4">
      <Table
        dataSource={rows}
        columns={columns}
        rowKey="sno"
        pagination={{
          pageSize: 5,
        }}
      />
    </Box>
  );
};

export default BillingTable;
