import React from "react";
import "./ApplicantDetails.scss";
import { TextField } from "@mui/material";

const ApplicantDetails = ({ applicationInfo, surveyInfo }) => {
  let data = {
    applicantName: applicationInfo.personalDetails.name,
    category: applicationInfo.personalDetails.category,
    rationCardNumber: applicationInfo.updateDocuments.rationCard,
    applicationStatus: applicationInfo.status,
    surveyDate: surveyInfo.surveyDate || '--',
    appliedDate: applicationInfo.creationDate,
  };

  return (
    <div id="ApplicantDetails" className="ApplicantDetails">
      <div className="subSections">
        <TextField
          id="applicantNameInput"
          className="formElements"
          label="Applicant Name"
          variant="standard"
          name="applicantName"
          InputProps={{
            readOnly: true,
          }}
          defaultValue={data.applicantName}
        />
        <TextField
          id="categoryInput"
          className="formElements"
          label="Category"
          variant="standard"
          name="category"
          InputProps={{
            readOnly: true,
          }}
          defaultValue={data.category}
        />
        <TextField
          id="rationCardNumberInput"
          className="formElements"
          label="Ration Card Number"
          variant="standard"
          name="rationCardNumber"
          InputProps={{
            readOnly: true,
          }}
          defaultValue={data.rationCardNumber}
        />
      </div>
      <div className="subSections">
        <TextField
          id="applicationStatusInput"
          className="formElements"
          label="Application Status"
          variant="standard"
          name="applicationStatus"
          InputProps={{
            readOnly: true,
          }}
          defaultValue={data.applicationStatus}
        />
        <TextField
          id="surveyDateInput"
          className="formElements"
          label="Survey Date"
          variant="standard"
          name="surveyDate"
          InputProps={{
            readOnly: true,
          }}
          defaultValue={data.surveyDate.includes('T') ? data.surveyDate.split('T')[0] : data.surveyDate}
        />
        <TextField
          id="appliedDateInput"
          className="formElements"
          label="Applied Date"
          variant="standard"
          name="appliedDate"
          InputProps={{
            readOnly: true,
          }}
          defaultValue={data.appliedDate.includes('T') ? data.appliedDate.split('T')[0] : data.appliedDate}
        />
      </div>
    </div>
  );
};

export default ApplicantDetails;
