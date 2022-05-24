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
import UmemployedTable from "./UmemployedTable/UmemployedTable";

const DependentDetails = ({ nextForm, backForm, data }) => {
  
  let formData = {
    dependentList: data?.dependentList || null,
    // education: data?.education || null,
    // experience: data?.experience || null,
    unemployedList: data?.unemployedList || null,
    previousLoan: data?.previousLoan || false,
    loanAmount: data?.loanAmount || null,
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
      formData[name] = value
  }

  const submitForm = (event) => {
    nextForm("dependentDetails", formData);
    event.preventDefault();
  };

  const dependentList = (dependentListArray) => {
    formData.dependentList = dependentListArray
  }

  const unemployedList = (unemployedListArray) => {
    formData.unemployedPersonList = unemployedListArray
  }

  return (
    <div id="DependentDetails" className="DependentDetails">
      <div className="formHeader">Dependent Details</div>
      <DependentTable dependentList={dependentList} list={data?.dependentList}/>
      <form className="DependentDetailsForm" onSubmit={submitForm}>
        <div className="formSubHeader">Unemployed Person:</div>
        <UmemployedTable unemployedList={unemployedList} list={data?.unemployedPersonList}/>
        {/* <TextField
          className="formElements"
          label="Education"
          variant="outlined"
          name="education"
          onChange={(event) => handleChange(event)}
          defaultValue={data?.education}
        />
        <TextField
          className="formElements"
          label="Experience"
          variant="outlined"
          name="experience"
          onChange={(event) => handleChange(event)}
          defaultValue={data?.experience}
        /> */}
        <div className="formSubHeader">Previous Loan Info:</div>
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
            defaultValue={formData?.previousLoan}
          >
            <FormControlLabel value={true} control={<Radio />} label="Yes" name="previousLoan" onChange={(event) => handleChange(event)}/>
            <FormControlLabel value={false} control={<Radio />} label="No" name="previousLoan" onChange={(event) => handleChange(event)}/>
          </RadioGroup>
        </FormControl>
        <TextField
          className="formElements"
          label="Previous Loan Amount (in Rs.)"
          variant="outlined"
          type="number"
          name="loanAmount"
          onChange={(event) => handleChange(event)}
          defaultValue={formData?.loanAmount}
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
