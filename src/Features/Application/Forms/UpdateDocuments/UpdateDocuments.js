import React from "react";
import "./UpdateDocuments.scss";
import { TextField, Button } from "@mui/material";

const UpdateDocuments = ({ nextForm, backForm, data }) => {
  let formData = {
    aadhaarNumber: data?.aadhaarNumber || null,
    rationCard: data?.rationCard || null,
    panNumber: data?.panNumber || null,
    bankAccount: data?.bankAccount || null,
    // rent : data?.rent || null,
    // electricity: data?.electricity || null,
    // insurer: data?.insurer || null,
    // salary: data?.salary || null,
    // jain: data?.jain || null,
    // telephone: data?.telephone || null,
    // referral: data?.referral || null,
    // school: data?.school || null,
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    formData[name] = value
  }

  const submitForm = (event) => {
    nextForm("updateDocuments", formData);
    event.preventDefault();
  };

  return (
    <div id="UpdateDocuments" className="UpdateDocuments">
      <div className="formHeader">Update Documents</div>
      <form className="updateDocumentsForm" onSubmit={submitForm}>
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
        {/* <div className="fileUpload">
          <input name="fileUpload" className="fileUploadInput" type="file"></input>
        </div> */}
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
        {/* <div className="fileUpload">
          <input name="fileUpload" className="fileUploadInput" type="file"></input>
        </div> */}
        <TextField
          id="panInput"
          className="formElements"
          label="Pan Number"
          variant="outlined"
          type="number"
          name='panNumber'
          onChange={(event) => handleChange(event)}
          defaultValue={formData?.panNumber}
          required
        />
        {/* <div className="fileUpload">
          <input name="fileUpload" className="fileUploadInput" type="file"></input>
        </div> */}
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
        {/* <div className="fileUpload">
          <input name="fileUpload" className="fileUploadInput" type="file"></input>
        </div> */}
        {/* <TextField
          id="rentInput"
          className="formElements"
          label="Rent / Maintenance Reciept Number"
          variant="outlined"
          name='rent'
          onChange={(event) => handleChange(event)}
          defaultValue={formData?.rent}
        />
        <div className="fileUpload">
          <input name="fileUpload" className="fileUploadInput" type="file"></input>
        </div>
        <TextField
          id="electricityInput"
          className="formElements"
          label="Electricity Consumer Number"
          variant="outlined"
          name='electricity'
          onChange={(event) => handleChange(event)}
          defaultValue={formData?.electricity}
        />
        <div className="fileUpload">
          <input name="fileUpload" className="fileUploadInput" type="file"></input>
        </div>
        <TextField
          id="insurerInput"
          className="formElements"
          label="Insurer ID Number"
          variant="outlined"
          name='insurer'
          onChange={(event) => handleChange(event)}
          defaultValue={formData?.insurer}
        />
        <div className="fileUpload">
          <input name="fileUpload" className="fileUploadInput" type="file"></input>
        </div>
        <TextField
          id="salaryInput"
          className="formElements"
          label="Salary Certificate ID"
          variant="outlined"
          name='salary'
          onChange={(event) => handleChange(event)}
          defaultValue={formData?.salary}
        />
        <div className="fileUpload">
          <input name="fileUpload" className="fileUploadInput" type="file"></input>
        </div>
        <TextField
          id="jainInput"
          className="formElements"
          label="Jain Minority Certificate ID"
          variant="outlined"
          name='jain'
          onChange={(event) => handleChange(event)}
          defaultValue={formData?.jain}
        />
        <div className="fileUpload">
          <input name="fileUpload" className="fileUploadInput" type="file"></input>
        </div>
        <TextField
          id="telephoneInput"
          className="formElements"
          label="Telephone Account Number"
          variant="outlined"
          name='telephone'
          onChange={(event) => handleChange(event)}
          defaultValue={formData?.telephone}
        />
        <div className="fileUpload">
          <input name="fileUpload" className="fileUploadInput" type="file"></input>
        </div>
        <TextField
          id="referralInput"
          className="formElements"
          label="Referral Letter Serial Number"
          variant="outlined"
          name='referral'
          onChange={(event) => handleChange(event)}
          defaultValue={formData?.referral}
        />
        <div className="fileUpload">
          <input name="fileUpload" className="fileUploadInput" type="file"></input>
        </div>
        <TextField
          id="schoolInput"
          className="formElements"
          label="School/College Fees Reciept Number"
          variant="outlined"
          name='school'
          onChange={(event) => handleChange(event)}
          defaultValue={formData?.school}
        />
        <div className="fileUpload">
          <input name="fileUpload" className="fileUploadInput" type="file"></input>
        </div> */}
        <div className="btnContainer">
          <Button
            id="backBtn"
            className="backBtn"
            variant="outlined"
            color="error"
            onClick={backForm}
          >
            Back
          </Button>
          <Button
            id="nextBtn"
            className="nextBtn"
            variant="outlined"
            type="submit"
          >
            Next
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UpdateDocuments;
