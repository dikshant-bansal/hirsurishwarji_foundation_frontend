import React from "react";
import "./MedicalGrantEdit.scss";
import { TextField } from "@mui/material";

const MedicalGrantEdit = ({ data, applicationData }) => {
  let formData = {
    patientName: data?.patientName,
    hospitalName: data?.hospitalName,
    hospitalAddress: data?.hospitalAddress,
    diseaseDetails: data?.diseaseDetails,
    approxExpenses: data?.approxExpenses,
    amountNeeded: data?.amountNeeded,
    amountContributed: data?.amountContributed,
    anyExisting: data?.anyExisting,
    medicalInsuranceDetails: data?.medicalInsuranceDetails,
    medicalInsuranceAmount: data?.medicalInsuranceAmount,
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    data[name] = value;
  };

  return (
    <div id="MedicalGrantEdit" className="MedicalGrantEdit">
      <div className="formHeader">Medical Grant Details</div>
      <div className="formSubHeader">
        {applicationData.personalDetails.category === "Medical"
          ? "Patient Details:"
          : "School/College Details:"}
      </div>
      <div className="MedicalGrantForm">
        {applicationData.personalDetails.category === "Medical" ? (
          <>
            <TextField
              id="pincodeInput"
              className="formElements"
              label="Patient Name"
              variant="outlined"
              name="patientName"
              onChange={(event) => handleChange(event)}
              defaultValue={formData?.patientName}
              required
            />
            <TextField
              id="pincodeInput"
              className="formElements"
              label="Hospital Name"
              variant="outlined"
              name="hospitalName"
              onChange={(event) => handleChange(event)}
              defaultValue={formData?.hospitalName}
              required
            />
            <TextField
              id="pincodeInput"
              className="formElements"
              label="Hospital Address"
              variant="outlined"
              name="hospitalAddress"
              onChange={(event) => handleChange(event)}
              defaultValue={formData?.hospitalAddress}
              required
            />
            <TextField
              id="pincodeInput"
              className="formElements"
              label="Disease Details"
              variant="outlined"
              name="diseaseDetails"
              onChange={(event) => handleChange(event)}
              defaultValue={formData?.diseaseDetails}
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
              defaultValue={formData?.approxExpenses}
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
              defaultValue={formData?.amountNeeded}
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
              defaultValue={formData?.amountContributed}
            />
            <TextField
              id="pincodeInput"
              className="formElements"
              label="Any existing medical aid"
              variant="outlined"
              name="anyExisting"
              onChange={(event) => handleChange(event)}
              defaultValue={formData?.anyExisting}
            />
            <TextField
              id="pincodeInput"
              className="formElements"
              label="Medical Insurance Details"
              variant="outlined"
              name="medicalInsuranceDetails"
              onChange={(event) => handleChange(event)}
              defaultValue={formData?.medicalInsuranceDetails}
            />
            <TextField
              id="pincodeInput"
              className="formElements"
              label="Medical Insurance Amount"
              variant="outlined"
              name="medicalInsuranceAmount"
              onChange={(event) => handleChange(event)}
              defaultValue={formData?.medicalInsuranceAmount}
              required
            />
          </>
        ) : (
          <>
            <TextField
              id="pincodeInput"
              className="formElements"
              label="Course/Degree Name"
              variant="outlined"
              name="patientName"
              onChange={(event) => handleChange(event)}
              defaultValue={formData?.patientName}
              required
            />
            <TextField
              id="pincodeInput"
              className="formElements"
              label="Name"
              variant="outlined"
              name="hospitalName"
              onChange={(event) => handleChange(event)}
              defaultValue={formData?.hospitalName}
              required
            />
            <TextField
              id="pincodeInput"
              className="formElements"
              label="Address"
              variant="outlined"
              name="hospitalAddress"
              onChange={(event) => handleChange(event)}
              defaultValue={formData?.hospitalAddress}
              required
            />
            <TextField
              id="pincodeInput"
              className="formElements"
              label="Course Details"
              variant="outlined"
              name="diseaseDetails"
              onChange={(event) => handleChange(event)}
              defaultValue={formData?.diseaseDetails}
              required
              multiline
            />
            <TextField
              id="pincodeInput"
              className="formElements"
              label="Approx Expenses"
              variant="outlined"
              type="number"
              name="approxExpenses"
              onChange={(event) => handleChange(event)}
              defaultValue={formData?.approxExpenses}
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
              defaultValue={formData?.amountNeeded}
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
              defaultValue={formData?.amountContributed}
            />
            <TextField
              id="pincodeInput"
              className="formElements"
              label="Independent"
              variant="outlined"
              name="anyExisting"
              onChange={(event) => handleChange(event)}
              defaultValue={formData?.anyExisting}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default MedicalGrantEdit;
