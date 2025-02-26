import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Billing from "./billingLanding/Billing";
import BillingPage from "./billingPage/BillingPage";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import store from "./Redux/store";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/list" replace />} />
        <Route path="/list" element={<Billing />} />
        <Route path="/secure/billing/details/:mrNo" element={<BillingPage />} />
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById("billing-app"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

export default App;
