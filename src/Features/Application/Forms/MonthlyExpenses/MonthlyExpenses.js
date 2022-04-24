import React from "react";
import "./MonthlyExpenses.scss";
import {
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Button,
} from "@mui/material";

const MonthlyExpenses = ({ nextForm, backForm }) => {
  let formData = {};

  const handleChange = (event) => {
    const { name, value } = event.target;
    formData[name] = value
  }

  const submitForm = (event) => {
    nextForm('monthlyExpenses', formData);
    event.preventDefault();
  };

  return (
    <div id="MonthlyExpenses" className="MonthlyExpenses">
      <div className="formHeader">Monthly Expenses Details</div>
      <form className="MonthlyExpensesForm" onSubmit={submitForm}>
        <TextField
          id="pincodeInput"
          className="formElements"
          label="Maintainance Expenses"
          variant="outlined"
          type="number"
          name='maintainance'
          onChange={(event) => handleChange(event)}
          required
        />
        <TextField
          id="pincodeInput"
          className="formElements"
          label="Electric Expenses"
          variant="outlined"
          type="number"
          name='electric'
          onChange={(event) => handleChange(event)}
          required
        />
        <TextField
          id="pincodeInput"
          className="formElements"
          label="Medical Expenses"
          variant="outlined"
          type="number"
          name='medical'
          onChange={(event) => handleChange(event)}
          required
        />
        <TextField
          id="pincodeInput"
          className="formElements"
          label="Groceries Expenses"
          variant="outlined"
          type="number"
          name='groceries'
          onChange={(event) => handleChange(event)}
          required
        />
        <TextField
          id="pincodeInput"
          className="formElements"
          label="Telephone Expenses"
          variant="outlined"
          type="number"
          name='telephone'
          onChange={(event) => handleChange(event)}
          required
        />
        <TextField
          id="pincodeInput"
          className="formElements"
          label="Education Expenses"
          variant="outlined"
          type="number"
          name='education'
          onChange={(event) => handleChange(event)}
          required
        />
        <TextField
          id="pincodeInput"
          className="formElements"
          label="Tution Expenses"
          variant="outlined"
          type="number"
          name='tution'
          onChange={(event) => handleChange(event)}
          required
        />
        <TextField
          id="pincodeInput"
          className="formElements"
          label="Others Expenses"
          variant="outlined"
          type="number"
          name='others'
          onChange={(event) => handleChange(event)}
          required
        />
        <TextField
          id="pincodeInput"
          className="formElements"
          label="Total Area of Flat (in sqft)"
          variant="outlined"
          type="number"
          name='area'
          onChange={(event) => handleChange(event)}
          required
        />
        <FormControl className="formElements">
          <FormLabel
            id="demo-row-radio-buttons-group-label"
            className="questionLabel"
          >
            Rented Home or Owned? *
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="Rented" control={<Radio />} label="Rented" name='home' onChange={(event) => handleChange(event)}/>
            <FormControlLabel value="Owned" control={<Radio />} label="Owned" name='home' onChange={(event) => handleChange(event)}/>
          </RadioGroup>
        </FormControl>
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

export default MonthlyExpenses;
