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

const PersonalDetails = ({ nextForm, data }) => {

  let formData = {
    name: null,
    fatherName: null,
    address1: null,
    address2: null,
    city: null,
    state: null,
    pincode: null,
    nativeTown: null,
    mobileNumber: null,
    phoneNumber: null,
    creed: null,
    category: null,
    jain: null,
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    formData[name] = value
  }
  
  const submitForm = (event) => {
    nextForm("personalDetails", formData);
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
          name='name'
          onChange={(event) => handleChange(event)}
          value={data?.name}
          required
        />
        <TextField
          id="fatherHusbandNameInput"
          className="formElements"
          label="Father's/Husband's Name"
          variant="outlined"
          name='fatherName'
          onChange={(event) => handleChange(event)}
          value={data?.fatherName}
          required
        />
        <TextField
          id="addressLine1Input"
          className="formElements"
          label="Address Line 1"
          variant="outlined"
          name='address1'
          onChange={(event) => handleChange(event)}
          value={data?.address1}
          required
        />
        <TextField
          id="addressLine2Input"
          className="formElements"
          label="Address Line 2"
          variant="outlined"
          name='address2'
          onChange={(event) => handleChange(event)}
          value={data?.address2}
        />
        <TextField
          id="cityInput"
          className="formElements"
          label="City"
          variant="outlined"
          name='city'
          onChange={(event) => handleChange(event)}
          value={data?.address2}
          required
        />
        <TextField
          id="stateInput"
          className="formElements"
          label="State"
          variant="outlined"
          name='state'
          onChange={(event) => handleChange(event)}
          value={data?.state}
          required
        />
        <TextField
          id="pincodeInput"
          className="formElements"
          label="PinCode"
          variant="outlined"
          type="number"
          name='pincode'
          onChange={(event) => handleChange(event)}
          value={data?.pincode}
          required
        />
        <TextField
          id="nativeTownInput"
          className="formElements"
          label="Native Town"
          variant="outlined"
          name='nativeTown'
          onChange={(event) => handleChange(event)}
          value={data?.nativeTown}
        />
        <TextField
          id="mobileNumberInput"
          className="formElements"
          label="Mobile Number"
          variant="outlined"
          type="number"
          name='mobileNumber'
          onChange={(event) => handleChange(event)}
          value={data?.mobileNumber}
          required
        />
        <TextField
          id="phoneNumberInput"
          className="formElements"
          label="Phone Number"
          variant="outlined"
          name='phoneNumber'
          onChange={(event) => handleChange(event)}
          value={data?.phoneNumber}
        />
        <TextField
          id="creedInput"
          className="formElements"
          label="Creed"
          variant="outlined"
          name='creed'
          onChange={(event) => handleChange(event)}
          value={data?.creed}
        />
        <FormControl id="categoryInput" className="formElements">
          <FormLabel id="demo-row-radio-buttons-group-label">
            Category *
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            defaultValue={data?.category}
          >
            <FormControlLabel
              value="Financial"
              control={<Radio />}
              label="Financial"
              name="category"
              onChange={(event) => handleChange(event)}
            />
            <FormControlLabel
              value="Medical"
              control={<Radio />}
              label="Medical"
              name="category"
              onChange={(event) => handleChange(event)}
            />
            <FormControlLabel
              value="Education"
              control={<Radio />}
              label="Education"
              name="category"
              onChange={(event) => handleChange(event)}
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
            defaultValue={data?.jain}
          >
            <FormControlLabel value={true} control={<Radio />} label="Yes" name='jain' onChange={(event) => handleChange(event)}/>
            <FormControlLabel value={false} control={<Radio />} label="No" name='jain' onChange={(event) => handleChange(event)}/>
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
