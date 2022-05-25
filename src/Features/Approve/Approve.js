import React from "react";
import "./Approve.scss";
import { ApplicantDetails, ApprovalDetails, BankDetails } from "./Sections";
import { useLocation } from "react-router-dom";

const Approve = ({ getData }) => {
  const location = useLocation();
  const approvalInfo = location.state.approvalInfo;
  const bankInfo = location.state.bankInfo;
  const applicationInfo = location.state.applicationInfo;
  const surveyInfo = location.state.surveyInfo;

  return (
    <div id="Approve" className="Approve">
      <div className="pageHeader">Grant for Application</div>
      <ApplicantDetails
        applicationInfo={applicationInfo}
        surveyInfo={surveyInfo}
      />
      <ApprovalDetails
        applicationInfo={applicationInfo}
        approvalInfo={approvalInfo}
        getData={getData}
      />
      <BankDetails
        applicationInfo={applicationInfo}
        bankInfo={bankInfo}
        getData={getData}
      />
    </div>
  );
};

export default Approve;
