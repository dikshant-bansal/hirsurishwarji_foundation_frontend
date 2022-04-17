import React from "react";
import "./PersonalDetails.scss";
import {
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Button,
} from "@mui/material";

const PersonalDetails = ({ nextForm, backForm }) => {
  const submitForm = (event) => {
    nextForm();
    event.preventDefault();
  };

  return (
    <div id="PersonalDetails" className="PersonalDetails">
      <div className="formHeader">Personal Details</div>
      <form className="personalDetailsForm" onSubmit={submitForm}>
        <TextField
          id="nameInput"
          className="formElements"
          label="Name"
          variant="outlined"
          required
        />
        <TextField
          id="fatherHusbandNameInput"
          className="formElements"
          label="Father's/Husband's Name"
          variant="outlined"
          required
        />
        <TextField
          id="addressLine1Input"
          className="formElements"
          label="Address Line 1"
          variant="outlined"
          required
        />
        <TextField
          id="addressLine2Input"
          className="formElements"
          label="Address Line 2"
          variant="outlined"
        />
        <TextField
          id="cityInput"
          className="formElements"
          label="City"
          variant="outlined"
          required
        />
        <TextField
          id="stateInput"
          className="formElements"
          label="State"
          variant="outlined"
          required
        />
        <TextField
          id="pincodeInput"
          className="formElements"
          label="PinCode"
          variant="outlined"
          type="number"
          required
        />
        <TextField
          id="nativeTownInput"
          className="formElements"
          label="Native Town"
          variant="outlined"
        />
        <TextField
          id="mobileNumberInput"
          className="formElements"
          label="Mobile Number"
          variant="outlined"
          type="number"
          required
        />
        <TextField
          id="phoneNumberInput"
          className="formElements"
          label="Phone Number"
          variant="outlined"
        />
        <TextField
          id="creedInput"
          className="formElements"
          label="Creed"
          variant="outlined"
        />
        <FormControl id="categoryInput" className="formElements">
          <FormLabel id="demo-row-radio-buttons-group-label">
            Category *
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              value="Financial"
              control={<Radio />}
              label="Financial"
            />
            <FormControlLabel
              value="Medical"
              control={<Radio />}
              label="Medical"
            />
            <FormControlLabel
              value="Education"
              control={<Radio />}
              label="Education"
            />
          </RadioGroup>
        </FormControl>
        <FormControl id="jainInput" className="formElements">
          <FormLabel id="demo-row-radio-buttons-group-label">
            Are you Jain? *
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
        <div className="btnContainer">
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

export default PersonalDetails;
