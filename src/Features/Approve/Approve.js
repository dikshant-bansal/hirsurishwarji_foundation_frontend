import React from "react";
import "./Approve.scss";
import {
  ApplicantDetails,
  ApprovalDetails,
  BankDetails,
  History,
} from "./Sections";
import { useLocation, useParams } from "react-router-dom";

const Approve = ({ getData }) => {
  const location = useLocation();
  const { id } = useParams();
  const approvalInfo = location.state.approvalInfo;
  const bankInfo = location.state.bankInfo;
  const applicationInfo = location.state.applicationInfo;
  const surveyInfo = location.state.surveyInfo;
  const historyData = location.state.historyData;

  return (
    <div id="Approve" className="Approve">
      <div className="pageHeader">Grant for Application</div>
      <div className="apllicationId">Application ID: {id}</div>
      <ApplicantDetails
        applicationInfo={applicationInfo}
        surveyInfo={surveyInfo}
      />
      <History historyData={historyData} id={id} />
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
