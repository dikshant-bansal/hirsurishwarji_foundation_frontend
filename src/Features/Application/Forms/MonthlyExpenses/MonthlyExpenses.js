import React, { useState } from "react";
import "./MonthlyExpenses.scss";
import {
  TextField,
  InputAdornment,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Button,
} from "@mui/material";

const MonthlyExpenses = ({ nextForm, backForm, data }) => {
  // const [monthlyExpense, setMonthlyExpense] = useState(0);

  let formData = {
    maintainance: data?.maintainance || null,
    electric: data?.electric || null,
    medical: data?.medical || null,
    groceries: data?.groceries || null,
    telephone: data?.telephone || null,
    education: data?.education || null,
    tution: data?.tution || null,
    others: data?.others || null,
    flatArea: data?.flatArea || null,
    home: data?.home || "Owned",
  };

  // const totalMonthlyExpenseCalculator = () => {
  //   let maintainance = formData?.maintainance ?? 0;
  //   let electric = formData?.electric ?? 0;
  //   let medical = formData?.medical ?? 0;
  //   let groceries = formData?.groceries ?? 0;
  //   let telephone = formData?.telephone ?? 0;
  //   let education = formData?.education ?? 0;
  //   let tution = formData?.tution ?? 0;
  //   let others = formData?.others ?? 0;
  //   console.log(maintainance, electric, medical)
  //   let totalMonthlyExpense =
  //     maintainance +
  //     electric +
  //     medical +
  //     groceries +
  //     telephone +
  //     education +
  //     tution +
  //     others;
  //   setMonthlyExpense(totalMonthlyExpense);
  // };

  const handleChange = (event) => {
    const { name, value } = event.target;
    formData[name] = value;
    // totalMonthlyExpenseCalculator();
  };

  const submitForm = (event) => {
    nextForm("monthlyExpenses", formData);
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
          name="maintainance"
          onChange={(event) => handleChange(event)}
          defaultValue={formData?.maintainance}
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">Rs. </InputAdornment>
            ),
          }}
        />
        <TextField
          id="pincodeInput"
          className="formElements"
          label="Electric Expenses"
          variant="outlined"
          type="number"
          name="electric"
          onChange={(event) => handleChange(event)}
          defaultValue={formData?.electric}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">Rs. </InputAdornment>
            ),
          }}
          required
        />
        <TextField
          id="pincodeInput"
          className="formElements"
          label="Medical Expenses"
          variant="outlined"
          type="number"
          name="medical"
          onChange={(event) => handleChange(event)}
          defaultValue={formData?.medical}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">Rs. </InputAdornment>
            ),
          }}
          required
        />
        <TextField
          id="pincodeInput"
          className="formElements"
          label="Groceries Expenses"
          variant="outlined"
          type="number"
          name="groceries"
          onChange={(event) => handleChange(event)}
          defaultValue={formData?.groceries}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">Rs. </InputAdornment>
            ),
          }}
          required
        />
        <TextField
          id="pincodeInput"
          className="formElements"
          label="Telephone Expenses"
          variant="outlined"
          type="number"
          name="telephone"
          onChange={(event) => handleChange(event)}
          defaultValue={formData?.telephone}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">Rs. </InputAdornment>
            ),
          }}
          required
        />
        <TextField
          id="pincodeInput"
          className="formElements"
          label="Education Expenses"
          variant="outlined"
          type="number"
          name="education"
          onChange={(event) => handleChange(event)}
          defaultValue={formData?.education}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">Rs. </InputAdornment>
            ),
          }}
          required
        />
        <TextField
          id="pincodeInput"
          className="formElements"
          label="Tution Expenses"
          variant="outlined"
          type="number"
          name="tution"
          onChange={(event) => handleChange(event)}
          defaultValue={formData?.tution}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">Rs. </InputAdornment>
            ),
          }}
          required
        />
        <TextField
          id="pincodeInput"
          className="formElements"
          label="Others Expenses"
          variant="outlined"
          type="number"
          name="others"
          onChange={(event) => handleChange(event)}
          defaultValue={formData?.others}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">Rs. </InputAdornment>
            ),
          }}
          required
        />
        {/* <div>Total Monthly Expense: {monthlyExpense}</div> */}
        <TextField
          id="pincodeInput"
          className="formElements"
          label="Total Area of Flat (in sqft)"
          variant="outlined"
          type="number"
          name="flatArea"
          onChange={(event) => handleChange(event)}
          defaultValue={formData?.flatArea}
          // InputProps={{
          //   startAdornment: (
          //     <InputAdornment position="end">sqft</InputAdornment>
          //   ),
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
            defaultValue={formData?.home}
          >
            <FormControlLabel
              value="Rented"
              control={<Radio />}
              label="Rented"
              name="home"
              onChange={(event) => handleChange(event)}
            />
            <FormControlLabel
              value="Owned"
              control={<Radio />}
              label="Owned"
              name="home"
              onChange={(event) => handleChange(event)}
            />
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
