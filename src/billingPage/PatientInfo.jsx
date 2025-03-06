import React, { useState } from "react";
import profile from "../assets/profile.png";
import {  Tooltip } from "@mui/material";
import { Card, Col, Row } from "antd";
// import { FileTextOutlined, MessageOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

function PatientInfo() {
  const location = useLocation();
  const patientData = location.state?.patientInfo;

  const [showAllInfo, setShowAllInfo] = useState(false);

  const truncateWithTooltip = (text) => {
    if (text.length > 20) {
      return (
        <Tooltip title={text} arrow>
          <span>{text.substring(0, 20) + "..."}</span>
        </Tooltip>
      );
    }
    return text;
  };

  return (
    <div>
      <div>
        {!showAllInfo && (
          <Col span={24}>
            <div className="profile-bg mb-4">
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "20px",
                  transform: "translateY(-50%)",
                  zIndex: 1,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "30px",
                    justifyContent: "space-between",
                  }}
                >
                  <div className="my-auto">
                    <img
                      src={profile}
                      alt="Profile"
                      width={80}
                      height={80}
                      style={{
                        borderRadius: "50px",
                        border: "4px solid gray",
                      }}
                      onClick={() => setShowAllInfo(true)}
                    />
                  </div>

                  <div className="profile_dispaly_label">
                    Name <span>{patientData?.patientName}</span>
                  </div>
                  <div className="profile_dispaly_label">
                    Age <span>{patientData?.age}</span>
                  </div>
                  <div className="profile_dispaly_label">
                    Gender <span>{patientData?.gender}</span>
                  </div>
                  <div className="profile_dispaly_label">
                    Mobile <span>{patientData?.phoneNo}</span>
                  </div>
                  <div className="profile_dispaly_label">
                    Insurance <span>{patientData?.insuranceName}</span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        )}
      </div>
      {showAllInfo && (
        <motion.div
          initial={{ x: "-100%" }} // Start off-screen to the left
          animate={{ x: 0 }} // Slide to its final position
          transition={{ duration: 1.5 }} // Animation duration
        >
          <Row style={{ justifyContent: "space-between" }}>
            <Col span={8}>
              <Card
                title="Patient Demographics"
                bordered={false}
                onClick={() => setShowAllInfo(false)}
              >
                <div style={{ display: "flex", gap: "25px" }}>
                  <div className="my-auto">
                    <img src={profile} alt="Profile" width={120} height={120} />
                  </div>
                  <div className="profile_dispaly">
                    <div className="profile_info_head ">
                      <div>Name</div>
                      <div>Age</div>
                      <div>Gender</div>
                      <div>Address</div>
                      <div>Mobile</div>
                      <div>Email</div>
                    </div>
                    <div className="profile_info_body ">
                      <div>
                        {truncateWithTooltip(patientData?.patientName) || "---"}
                      </div>
                      <div>{patientData?.age || "---"}</div>
                      <div>{patientData?.gender || "---"}</div>
                      <div>{patientData?.address || "---"}</div>
                      <div>{patientData?.phoneNo || "---"}</div>
                      <div>
                        {truncateWithTooltip(patientData?.email) || "---"}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>

            <Col span={5}>
              <Card title="Insurance Info" bordered={false}>
                <div className="profile_dispaly">
                  <div className="profile_info_head ">
                    <div>Insurance</div>
                    <div>Sub Insurance</div>
                    <div>Co Payment</div>
                    <div>Cash</div>
                    <div>Pending</div>
                    <div>Advance</div>
                  </div>
                  <div className="profile_info_body ">
                    <div>{patientData?.insuranceName || "---"}</div>
                    <div>{patientData?.subInsurance || "---"}</div>
                    <div>{patientData?.coPayment || "---"}</div>
                    <div>{patientData?.cash || "---"}</div>
                    <div>{patientData?.pending || "---"}</div>
                    <div>{patientData?.advanced || "---"}</div>
                  </div>
                </div>
              </Card>
            </Col>

            <Col span={5}>
              <Card title="Consultation Info" bordered={false}>
                <div className="profile_dispaly">
                  <div className="profile_info_head ">
                    <div>Visit Type</div>
                    <div>Consult Date</div>
                    <div>Doctor Name</div>
                    <div>Speciality</div>
                    <div>Registered by</div>
                    <div>Registered Time</div>
                  </div>
                  <div className="profile_info_body ">
                    <div>{patientData?.visitType || "---"}</div>
                    <div>{patientData?.visitDate || "---"}</div>
                    <div>{patientData?.doctorName || "---"}</div>
                    <div>{patientData?.speciality || "---"}</div>
                    <div>{patientData?.registerBy || "---"}</div>
                    <div>{patientData?.registerDate || "---"}</div>
                  </div>
                </div>
              </Card>
            </Col>
            {patientData?.previousVisitHistory?.map((data) => (
              <Col span={5}>
                <Card title="Previous Visit" bordered={false}>
                  <div className="profile_dispaly">
                    <div className="profile_info_head ">
                      <div>Visit Type</div>
                      <div>Consult Date</div>
                      <div>Doctor Name</div>
                      <div>Speciality</div>
                      <div>No of days</div>
                    </div>
                    <div className="profile_info_body ">
                      <div>{data?.visitType || "---"}</div>
                      <div>{data?.visitDate || "---"}</div>
                      <div>{data?.doctorName || "---"}</div>
                      <div>{data?.speciality || "---"}</div>
                      <div>{"---"}</div>
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </motion.div>
      )}
    </div>
  );
}

export default PatientInfo;
