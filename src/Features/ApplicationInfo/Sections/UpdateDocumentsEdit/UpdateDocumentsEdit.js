import React from "react";
import "./UpdateDocumentsEdit.scss";
import { TextField } from "@mui/material";

const UpdateDocumentsEdit = ({ data }) => {
  let formData = {
    aadhaarNumber: data?.aadhaarNumber,
    rationCard: data?.rationCard,
    bankAccount: data?.bankAccount,
    rent : data?.rent,
    electricity: data?.electricity,
    insurer: data?.insurer,
    salary: data?.salary,
    jain: data?.jain,
    telephone: data?.telephone,
    referral: data?.referral,
    school: data?.school,
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    formData[name] = value
  }

  return (
    <div id="UpdateDocumentsEdit" className="UpdateDocumentsEdit">
      <div className="formHeader">Update Documents</div>
      <div className="updateDocumentsForm">
        <TextField
          id="aadhaarInput"
          className="formElements"
          label="Aadhaar Number"
          variant="outlined"
          type="number"
          name='aadhaarNumber'
          onChange={(event) => handleChange(event)}
          defaultValue={formData?.aadhaarNumber}
          required
        />
        <TextField
          id="rationInput"
          className="formElements"
          label="Ration Card Number"
          variant="outlined"
          type="number"
          name='rationCard'
          onChange={(event) => handleChange(event)}
          defaultValue={formData?.rationCard}
          required
        />
        <TextField
          id="bankInput"
          className="formElements"
          label="Bank Account Number"
          variant="outlined"
          name='bankAccount'
          onChange={(event) => handleChange(event)}
          defaultValue={formData?.bankAccount}
          required
        />
        <TextField
          id="rentInput"
          className="formElements"
          label="Rent / Maintenance Reciept Number"
          variant="outlined"
          name='rent'
          onChange={(event) => handleChange(event)}
          defaultValue={formData?.rent}
        />
        <TextField
          id="electricityInput"
          className="formElements"
          label="Electricity Consumer Number"
          variant="outlined"
          name='electricity'
          onChange={(event) => handleChange(event)}
          defaultValue={formData?.electricity}
        />
        <TextField
          id="insurerInput"
          className="formElements"
          label="Insurer ID Number"
          variant="outlined"
          name='insurer'
          onChange={(event) => handleChange(event)}
          defaultValue={formData?.insurer}
        />
        <TextField
          id="salaryInput"
          className="formElements"
          label="Salary Certificate ID"
          variant="outlined"
          name='salary'
          onChange={(event) => handleChange(event)}
          defaultValue={formData?.salary}
        />
        <TextField
          id="jainInput"
          className="formElements"
          label="Jain Minority Certificate ID"
          variant="outlined"
          name='jain'
          onChange={(event) => handleChange(event)}
          defaultValue={formData?.jain}
        />
        <TextField
          id="telephoneInput"
          className="formElements"
          label="Telephone Account Number"
          variant="outlined"
          name='telephone'
          onChange={(event) => handleChange(event)}
          defaultValue={formData?.telephone}
        />
        <TextField
          id="referralInput"
          className="formElements"
          label="Referral Letter Serial Number"
          variant="outlined"
          name='referral'
          onChange={(event) => handleChange(event)}
          defaultValue={formData?.referral}
        />
        <TextField
          id="schoolInput"
          className="formElements"
          label="School/College Fees Reciept Number"
          variant="outlined"
          name='school'
          onChange={(event) => handleChange(event)}
          defaultValue={formData?.school}
        />
      </div>
    </div>
  );
};

export default UpdateDocumentsEdit;
