import React from "react";
import "./PersonalDetailsEdit.scss";
import {
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";

const PersonalDetailsEdit = ({ data }) => {

  let formData = {
    name: data?.name,
    fatherName: data?.fatherName,
    address1: data?.address1,
    address2: data?.address2,
    city: data?.city,
    state: data?.state,
    pincode: data?.pincode,
    nativeTown: data?.nativeTown,
    mobileNumber: data?.mobileNumber,
    phoneNumber: data?.phoneNumber,
    creed: data?.creed,
    category: data?.category,
    jain: data?.jain,
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    data[name] = value
  }

  return (
    <div id="PersonalDetailsEdit" className="PersonalDetailsEdit">
      <div className="formHeader">Personal Details</div>
      <div className="personalDetailsForm">
        <TextField
          id="nameInput"
          className="formElements"
          label="Name"
          variant="outlined"
          name='name'
          onChange={(event) => handleChange(event)}
          defaultValue={formData?.name}
          required
        />
        <TextField
          id="fatherHusbandNameInput"
          className="formElements"
          label="Father's/Husband's Name"
          variant="outlined"
          name='fatherName'
          onChange={(event) => handleChange(event)}
          defaultValue={formData?.fatherName}
          required
        />
        <TextField
          id="addressLine1Input"
          className="formElements"
          label="Address Line 1"
          variant="outlined"
          name='address1'
          onChange={(event) => handleChange(event)}
          defaultValue={formData?.address1}
          required
        />
        <TextField
          id="addressLine2Input"
          className="formElements"
          label="Address Line 2"
          variant="outlined"
          name='address2'
          onChange={(event) => handleChange(event)}
          defaultValue={formData?.address2}
        />
        <TextField
          id="cityInput"
          className="formElements"
          label="City"
          variant="outlined"
          name='city'
          onChange={(event) => handleChange(event)}
          defaultValue={formData?.address2}
          required
        />
        <TextField
          id="stateInput"
          className="formElements"
          label="State"
          variant="outlined"
          name='state'
          onChange={(event) => handleChange(event)}
          defaultValue={formData?.state}
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
          defaultValue={formData?.pincode}
          required
        />
        <TextField
          id="nativeTownInput"
          className="formElements"
          label="Native Town"
          variant="outlined"
          name='nativeTown'
          onChange={(event) => handleChange(event)}
          defaultValue={formData?.nativeTown}
        />
        <TextField
          id="mobileNumberInput"
          className="formElements"
          label="Mobile Number"
          variant="outlined"
          type="number"
          name='mobileNumber'
          onChange={(event) => handleChange(event)}
          defaultValue={formData?.mobileNumber}
          required
        />
        <TextField
          id="phoneNumberInput"
          className="formElements"
          label="Phone Number"
          variant="outlined"
          name='phoneNumber'
          onChange={(event) => handleChange(event)}
          defaultValue={formData?.phoneNumber}
        />
        <TextField
          id="creedInput"
          className="formElements"
          label="Creed"
          variant="outlined"
          name='creed'
          onChange={(event) => handleChange(event)}
          defaultValue={formData?.creed}
        />
        <FormControl id="categoryInput" className="formElements">
          <FormLabel id="demo-row-radio-buttons-group-label">
            Category *
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            defaultValue={formData?.category}
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
            defaultValue={formData?.jain}
          >
            <FormControlLabel value={true} control={<Radio />} label="Yes" name='jain' onChange={(event) => handleChange(event)}/>
            <FormControlLabel value={false} control={<Radio />} label="No" name='jain' onChange={(event) => handleChange(event)}/>
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
};

export default PersonalDetailsEdit;
