import React from "react";
import "./ApplicantDetails.scss";
import { TextField } from "@mui/material";

const ApplicantDetails = () => {
  let data = {
    applicantName: "Keshav",
    category: "Medical",
    rationCardNumber: "86386238967239327",
    applicationStatus: "Pending",
    surveyDate: "12/01/2022",
    appliedDate: "03/01/2022",
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
          defaultValue={data.surveyDate}
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
          defaultValue={data.appliedDate}
        />
      </div>
    </div>
  );
};

export default ApplicantDetails;
