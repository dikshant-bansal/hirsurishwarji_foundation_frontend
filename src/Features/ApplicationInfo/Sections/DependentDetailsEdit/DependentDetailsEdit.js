import React from "react";
import "./DependentDetailsEdit.scss";
import {
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";
import DependentTable from "./DependentTable/DependentTable";

const DependentDetailsEdit = ({ data }) => {
  
  let formData = {
    dependentList: data?.dependentList,
    education: data?.education,
    experience: data?.experience,
    previousLoan: data?.previousLoan,
    previousLoanAmount: data?.previousLoanAmount,
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
      formData[name] = value
  }

  const dependentList = (dependentListArray) => {
    formData.dependentList = dependentListArray
  }

  return (
    <div id="DependentDetailsEdit" className="DependentDetailsEdit">
      <div className="formHeader">Dependent Details</div>
      <DependentTable dependentList={dependentList} list={formData?.dependentList}/>
      <div className="DependentDetailsForm">
        <div className="formSubHeader">Unemployed Person:</div>
        <TextField
          className="formElements"
          label="Education"
          variant="outlined"
          name="education"
          onChange={(event) => handleChange(event)}
          defaultValue={formData?.education}
        />
        <TextField
          className="formElements"
          label="Experience"
          variant="outlined"
          name="experience"
          onChange={(event) => handleChange(event)}
          defaultValue={formData?.experience}
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
          name="previousLoanAmount"
          onChange={(event) => handleChange(event)}
          defaultValue={formData?.previousLoanAmount}
        />
      </div>
    </div>
  );
};

export default DependentDetailsEdit;
