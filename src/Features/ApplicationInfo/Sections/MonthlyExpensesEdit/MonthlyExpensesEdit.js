import React from "react";
import "./MonthlyExpensesEdit.scss";
import {
  TextField,
  InputAdornment,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";

const MonthlyExpensesEdit = ({ data }) => {
  let formData = {
    maintainance: data?.maintainance,
    electric: data?.electric, 
    medical: data?.medical,
    groceries: data?.groceries,
    telephone: data?.telephone,
    education: data?.education,
    tution: data?.tution,
    others: data?.others,
    flatArea: data?.flatArea,
    home: data?.home,
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    formData[name] = value
  }

  return (
    <div id="MonthlyExpensesEdit" className="MonthlyExpensesEdit">
      <div className="formHeader">Monthly Expenses Details</div>
      <div className="MonthlyExpensesForm">
        <TextField
          id="pincodeInput"
          className="formElements"
          label="Maintainance Expenses"
          variant="outlined"
          type="number"
          name='maintainance'
          onChange={(event) => handleChange(event)}
          defaultValue={data?.maintainance}
          InputProps={{
            startAdornment: <InputAdornment position="start">Rs. </InputAdornment>,
          }}
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
          defaultValue={data?.electric}
          InputProps={{
            startAdornment: <InputAdornment position="start">Rs. </InputAdornment>,
          }}
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
          defaultValue={data?.medical}
          InputProps={{
            startAdornment: <InputAdornment position="start">Rs. </InputAdornment>,
          }}
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
          defaultValue={data?.groceries}
          InputProps={{
            startAdornment: <InputAdornment position="start">Rs. </InputAdornment>,
          }}
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
          defaultValue={data?.telephone}
          InputProps={{
            startAdornment: <InputAdornment position="start">Rs. </InputAdornment>,
          }}
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
          defaultValue={data?.education}
          InputProps={{
            startAdornment: <InputAdornment position="start">Rs. </InputAdornment>,
          }}
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
          defaultValue={data?.tution}
          InputProps={{
            startAdornment: <InputAdornment position="start">Rs. </InputAdornment>,
          }}
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
          defaultValue={data?.others}
          InputProps={{
            startAdornment: <InputAdornment position="start">Rs. </InputAdornment>,
          }}
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
          defaultValue={data?.flatArea}
          // InputProps={{
          //   startAdornment: <InputAdornment position="end">sqft</InputAdornment>,
          //   // endAdornment: <InputAdornment position="end">sqft</InputAdornment>
          // }}
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
      </div>
    </div>
  );
};

export default MonthlyExpensesEdit;
