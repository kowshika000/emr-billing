import React, { useState } from "react";
import { Tabs, Button, Space, Typography } from "antd";
import {
  PlusOutlined,
  EyeOutlined,
  PrinterOutlined,
  DeleteOutlined,
  EyeInvisibleOutlined,
} from "@ant-design/icons";
import AdditionalCharge from "./AddModals/additionalCharge";
import AddLabtest from "./AddModals/addLabtest";
import AddProcedure from "./AddModals/addProcedure";

const { TabPane } = Tabs;
const { Text } = Typography;

function ActionTab({ actions }) {
  return (
    <Space wrap>
      {actions.map((action) => (
        <Button
          key={action.label}
          icon={action.icon}
          onClick={action.onClick}
          type="default"
          style={{
            borderRadius: "8px",
            padding: "4px 16px",
            backgroundColor: "rgb(156, 202, 194)",
            color: "black",
            fontWeight: 500,
            fontSize: "12px",
            transition: "all 0.3s ease",
            border: "none",
          }}
        >
          {action.label}
        </Button>
      ))}
    </Space>
  );
}

export default function LabTreatment() {
  const [additionalCharge, setAdditionalCharge] = useState(false);
  const [addLabtest, setAddLabtest] = useState(false);
  const [addProcedure, setAddProcedure] = useState(false);

  const [activeTab, setActiveTab] = useState("1");
  const [showActions, setShowActions] = useState(false);

  return (
    <div className="">
      <Tabs
        activeKey={activeTab}
        type="card"
        onChange={(key) => setActiveTab(key)}
        tabBarExtraContent={
          <Button
            icon={showActions ? <EyeInvisibleOutlined /> : <EyeOutlined />}
            onClick={() => setShowActions((prev) => !prev)}
            style={{
              borderRadius: "8px",
              backgroundColor: "rgb(156, 202, 194)",
              color: "black",
              fontWeight: 500,
              fontSize: "12px",
              transition: "all 0.3s ease",
              border: "none",
              marginRight: "10px",
            }}
          >
            {/* {showActions ? "Hide Actions" : "Show Actions"} */}
          </Button>
        }
      >
        <TabPane tab={"Lab | Rad"} key="1">
          {showActions && (
            <ActionTab
              actions={[
                {
                  label: "Add Lab Test",
                  icon: <PlusOutlined />,
                  onClick: () => setAddLabtest(true),
                },
                {
                  label: "Generate Lab Token",
                  icon: <PlusOutlined />,
                  onClick: () => {},
                },
                {
                  label: "Generate Rad Token",
                  icon: <PlusOutlined />,
                  onClick: () => {},
                },
                {
                  label: "Add Requested Lab Test",
                  icon: <PlusOutlined />,
                  onClick: () => {},
                },
                {
                  label: "View History",
                  icon: <EyeOutlined />,
                  onClick: () => {},
                },
                {
                  label: "Print Request",
                  icon: <PrinterOutlined />,
                  onClick: () => {},
                },
                {
                  label: "Delete",
                  icon: <DeleteOutlined />,
                  onClick: () => {},
                },
              ]}
            />
          )}
        </TabPane>

        <TabPane tab={"Treatment | Medicine"} key="2">
          {showActions && (
            <ActionTab
              actions={[
                {
                  label: "Add Procedure",
                  icon: <PlusOutlined />,
                  onClick: () => setAddProcedure(true),
                },
                {
                  label: "Generate Service Token",
                  icon: <PlusOutlined />,
                  onClick: () => {},
                },
                {
                  label: "Add Requested Procedure",
                  icon: <PlusOutlined />,
                  onClick: () => {},
                },
                {
                  label: "Add Salable Consumables",
                  icon: <PlusOutlined />,
                  onClick: () => {},
                },
                {
                  label: "Add Additional Charges",
                  icon: <PlusOutlined />,
                  onClick: () => setAdditionalCharge(true),
                },
                {
                  label: "View Procedure Status",
                  icon: <EyeOutlined />,
                  onClick: () => {},
                },
                {
                  label: "View History",
                  icon: <EyeOutlined />,
                  onClick: () => {},
                },
                {
                  label: "Print Request",
                  icon: <PrinterOutlined />,
                  onClick: () => {},
                },
              ]}
            />
          )}
        </TabPane>

        <TabPane tab={"Document | Remark"} key="3">
          {showActions && (
            <ActionTab
              actions={[
                {
                  label: "Add Document",
                  icon: <PlusOutlined />,
                  onClick: () => {},
                },
                {
                  label: "Add Remark",
                  icon: <PlusOutlined />,
                  onClick: () => {},
                },
                {
                  label: "View Document",
                  icon: <EyeOutlined />,
                  onClick: () => {},
                },
                {
                  label: "View Remark",
                  icon: <EyeOutlined />,
                  onClick: () => {},
                },
              ]}
            />
          )}
        </TabPane>
      </Tabs>

      {additionalCharge && (
        <AdditionalCharge onClose={() => setAdditionalCharge(false)} />
      )}
      {addLabtest && <AddLabtest onClose={() => setAddLabtest(false)} />}
      {addProcedure && <AddProcedure onClose={() => setAddProcedure(false)} />}
    </div>
  );
}
