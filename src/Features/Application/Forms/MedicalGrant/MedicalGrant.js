import React from "react";
import "./MedicalGrant.scss";
import { TextField, Button } from "@mui/material";

const MedicalGrant = ({ nextForm, backForm }) => {
  const submitForm = (event) => {
    nextForm();
    event.preventDefault();
  };

  return (
    <div id="MedicalGrant" className="MedicalGrant">
      <div className="formHeader">Medical Grant Details</div>
      <div className="formSubHeader">Patient Details:</div>
      <form className="MedicalGrantForm" onSubmit={submitForm}>
        <TextField
          id="pincodeInput"
          className="formElements"
          label="Hospital Name"
          variant="outlined"
          required
        />
        <TextField
          id="pincodeInput"
          className="formElements"
          label="Hospital Address"
          variant="outlined"
          required
        />
        <TextField
          id="pincodeInput"
          className="formElements"
          label="Disease Details"
          variant="outlined"
          required
        />
        <TextField
          id="pincodeInput"
          className="formElements"
          label="Approx Expenses"
          variant="outlined"
          type="number"
          required
        />
        <TextField
          id="pincodeInput"
          className="formElements"
          label="Amount Needed"
          variant="outlined"
          type="number"
          required
        />
        <TextField
          id="pincodeInput"
          className="formElements"
          label="Amount Contributed(self)"
          variant="outlined"
          type="number"
        />
        <TextField
          id="pincodeInput"
          className="formElements"
          label="Any existing medical aid"
          variant="outlined"
        />
        <TextField
          id="pincodeInput"
          className="formElements"
          label="Medical Insurance Details"
          variant="outlined"
        />
        <TextField
          id="pincodeInput"
          className="formElements"
          label="Medical Insurance Amount"
          variant="outlined"
          required
        />
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

export default MedicalGrant;
