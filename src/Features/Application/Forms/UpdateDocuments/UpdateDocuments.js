import React from "react";
import "./UpdateDocuments.scss";
import { TextField, Button } from "@mui/material";

const UpdateDocuments = ({ nextForm, backForm }) => {
  const submitForm = (event) => {
    nextForm();
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
          required
        />
        <div className="fileUpload">
          <input name="fileUpload" className="fileUploadInput" type="file"></input>
        </div>
        <TextField
          id="rationInput"
          className="formElements"
          label="Ration Card Number"
          variant="outlined"
          type="number"
          required
        />
        <div className="fileUpload">
          <input name="fileUpload" className="fileUploadInput" type="file"></input>
        </div>
        <TextField
          id="bankInput"
          className="formElements"
          label="Bank Account Number"
          variant="outlined"
          required
        />
        <div className="fileUpload">
          <input name="fileUpload" className="fileUploadInput" type="file"></input>
        </div>
        <TextField
          id="rentInput"
          className="formElements"
          label="Rent / Maintenance Reciept Number"
          variant="outlined"
        />
        <div className="fileUpload">
          <input name="fileUpload" className="fileUploadInput" type="file"></input>
        </div>
        <TextField
          id="rentInput"
          className="formElements"
          label="Rent / Maintenance Reciept Number"
          variant="outlined"
        />
        <div className="fileUpload">
          <input name="fileUpload" className="fileUploadInput" type="file"></input>
        </div>
        <TextField
          id="electricityInput"
          className="formElements"
          label="Electricity Consumer Number"
          variant="outlined"
        />
        <div className="fileUpload">
          <input name="fileUpload" className="fileUploadInput" type="file"></input>
        </div>
        <TextField
          id="insurerInput"
          className="formElements"
          label="Insurer ID Number"
          variant="outlined"
        />
        <div className="fileUpload">
          <input name="fileUpload" className="fileUploadInput" type="file"></input>
        </div>
        <TextField
          id="salaryInput"
          className="formElements"
          label="Salary Certificate ID"
          variant="outlined"
        />
        <div className="fileUpload">
          <input name="fileUpload" className="fileUploadInput" type="file"></input>
        </div>
        <TextField
          id="jainInput"
          className="formElements"
          label="Jain Minority Certificate ID"
          variant="outlined"
        />
        <div className="fileUpload">
          <input name="fileUpload" className="fileUploadInput" type="file"></input>
        </div>
        <TextField
          id="telephoneInput"
          className="formElements"
          label="Telephone Account Number"
          variant="outlined"
        />
        <div className="fileUpload">
          <input name="fileUpload" className="fileUploadInput" type="file"></input>
        </div>
        <TextField
          id="referralInput"
          className="formElements"
          label="Referral Letter Serial Number"
          variant="outlined"
        />
        <div className="fileUpload">
          <input name="fileUpload" className="fileUploadInput" type="file"></input>
        </div>
        <TextField
          id="schoolInput"
          className="formElements"
          label="School/College Fees Reciept Number"
          variant="outlined"
        />
        <div className="fileUpload">
          <input name="fileUpload" className="fileUploadInput" type="file"></input>
        </div>
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
