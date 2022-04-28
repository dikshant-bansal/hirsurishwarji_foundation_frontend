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

const MonthlyExpenses = ({ nextForm, backForm, data }) => {
  let formData = {
    maintainance: null,
    electric: null, 
    medical: null,
    groceries: null,
    telephone: null,
    education: null,
    tution: null,
    others: null,
    flatArea: null,
    home: null,
  };

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
          value={data?.maintainance}
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
          value={data?.electric}
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
          value={data?.medical}
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
          value={data?.groceries}
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
          value={data?.telephone}
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
          value={data?.education}
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
          value={data?.tution}
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
          value={data?.others}
          required
        />
        <TextField
          id="pincodeInput"
          className="formElements"
          label="Total Area of Flat (in sqft)"
          variant="outlined"
          type="number"
          name='flatArea'
          onChange={(event) => handleChange(event)}
          value={data?.flatArea}
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
            defaultValue={data?.home}
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
