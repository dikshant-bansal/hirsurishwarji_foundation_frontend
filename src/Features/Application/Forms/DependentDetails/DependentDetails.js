import React from "react";
import "./DependentDetails.scss";
import {
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Button,
} from "@mui/material";
import DependentTable from "./DependentTable/DependentTable";

const DependentDetails = ({ nextForm, backForm }) => {
  const submitForm = (event) => {
    nextForm();
    event.preventDefault();
  };

  return (
    <div id="DependentDetails" className="DependentDetails">
      <div className="formHeader">Dependent Details</div>
      <DependentTable />
      <form className="DependentDetailsForm" onSubmit={submitForm}>
        <div className="formSubHeader">Unemployed Person:</div>
        <TextField
          className="formElements"
          label="Education"
          variant="outlined"
        />
        <TextField
          className="formElements"
          label="Experience"
          variant="outlined"
        />
        <FormControl className="formElements">
          <FormLabel
            id="demo-row-radio-buttons-group-label"
            className="questionLabel"
          >
            Any previous loan Amount? *
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
        <TextField
          className="formElements"
          label="Previous Loan Amount (in Rs.)"
          variant="outlined"
          type="number"
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

export default DependentDetails;
