import React from "react";
import "./MedicalGrant.scss";
import { TextField, Button } from "@mui/material";

const MedicalGrant = ({ nextForm, backForm, data }) => {

  let formData = {
    hospitalName: data?.hospitalName || null,
    hospitalAddress: data?.hospitalAddress || null,
    diseaseDetails: data?.diseaseDetails || null,
    approxExpenses: data?.approxExpenses || null,
    amountNeeded: data?.amountNeeded || null,
    amountContributed: data?.amountContributed || null,
    anyExisting: data?.anyExisting || null,
    medicalInsuranceDetails: data?.medicalInsuranceDetails || null,
    medicalInsuranceAmount: data?.medicalInsuranceAmount || null,
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
      formData[name] = value
  }

  const submitForm = (event) => {
    nextForm("medicalGrant", formData);
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
          name="hospitalName"
          onChange={(event) => handleChange(event)}
          defaultValue={data?.hospitalName}
          required
        />
        <TextField
          id="pincodeInput"
          className="formElements"
          label="Hospital Address"
          variant="outlined"
          name="hospitalAddress"
          onChange={(event) => handleChange(event)}
          defaultValue={data?.hospitalAddress}
          required
        />
        <TextField
          id="pincodeInput"
          className="formElements"
          label="Disease Details"
          variant="outlined"
          name="diseaseDetails"
          onChange={(event) => handleChange(event)}
          defaultValue={data?.diseaseDetails}
          required
        />
        <TextField
          id="pincodeInput"
          className="formElements"
          label="Approx Expenses"
          variant="outlined"
          type="number"
          name="approxExpenses"
          onChange={(event) => handleChange(event)}
          defaultValue={data?.approxExpenses}
          required
        />
        <TextField
          id="pincodeInput"
          className="formElements"
          label="Amount Needed"
          variant="outlined"
          type="number"
          name="amountNeeded"
          onChange={(event) => handleChange(event)}
          defaultValue={data?.amountNeeded}
          required
        />
        <TextField
          id="pincodeInput"
          className="formElements"
          label="Amount Contributed(self)"
          variant="outlined"
          type="number"
          name="amountContributed"
          onChange={(event) => handleChange(event)}
          defaultValue={data?.amountContributed}
        />
        <TextField
          id="pincodeInput"
          className="formElements"
          label="Any existing medical aid"
          variant="outlined"
          name="anyExisting"
          onChange={(event) => handleChange(event)}
          defaultValue={data?.anyExisting}
        />
        <TextField
          id="pincodeInput"
          className="formElements"
          label="Medical Insurance Details"
          variant="outlined"
          name="medicalInsuranceDetails"
          onChange={(event) => handleChange(event)}
          defaultValue={data?.medicalInsuranceDetails}
        />
        <TextField
          id="pincodeInput"
          className="formElements"
          label="Medical Insurance Amount"
          variant="outlined"
          name="medicalInsuranceAmount"
          onChange={(event) => handleChange(event)}
          defaultValue={data?.medicalInsuranceAmount}
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
