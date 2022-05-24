import React from "react";
import "./EducationGrant.scss";
import { TextField, Button } from "@mui/material";

const EducationGrant = ({ nextForm, backForm, data }) => {
  let formData = {
    patientName: data?.patientName || null,
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
    formData[name] = value;
  };

  const submitForm = (event) => {
    nextForm("medicalGrant", formData);
    event.preventDefault();
  };

  return (
    <div id="EducationGrant" className="EducationGrant">
      <div className="formHeader">Medical Grant Details</div>
      <div className="formSubHeader">Patient Details:</div>
      <form className="EducationGrantForm" onSubmit={submitForm}>
        <TextField
          id="pincodeInput"
          className="formElements"
          label="Course/Degree Name"
          variant="outlined"
          name="patientName"
          onChange={(event) => handleChange(event)}
          defaultValue={data?.patientName}
          required
        />
        <TextField
          id="pincodeInput"
          className="formElements"
          label="Name"
          variant="outlined"
          name="hospitalName"
          onChange={(event) => handleChange(event)}
          defaultValue={data?.hospitalName}
          required
        />
        <TextField
          id="pincodeInput"
          className="formElements"
          label="Address"
          variant="outlined"
          name="hospitalAddress"
          onChange={(event) => handleChange(event)}
          defaultValue={data?.hospitalAddress}
          required
        />
        <TextField
          id="pincodeInput"
          className="formElements"
          label="Course Details"
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
          label="Independent"
          variant="outlined"
          name="anyExisting"
          onChange={(event) => handleChange(event)}
          defaultValue={data?.anyExisting}
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

export default EducationGrant;
