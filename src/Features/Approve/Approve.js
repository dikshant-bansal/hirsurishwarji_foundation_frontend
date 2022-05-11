import React from "react";
import "./Approve.scss";
import { ApplicantDetails, ApprovalDetails, BankDetails } from "./Sections";

const Approve = () => {
  return (
    <div id="Approve" className="Approve">
      <div className="pageHeader">Grant for Application</div>
      <ApplicantDetails />
      <ApprovalDetails />
      <BankDetails />
    </div>
  );
};

export default Approve;
