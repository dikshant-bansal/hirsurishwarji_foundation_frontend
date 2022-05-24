import React from "react";
import "./HomeFurnitureEdit.scss";
import { TextField } from "@mui/material";

const HomeFurnitureEdit = ({ data }) => {
  let formData = {
    tv: data?.tv,
    cable: data?.cable,
    fridge: data?.fridge,
    washingMachine: data?.washingMachine,
    vehicles: data?.vehicles,
    bikes: data?.bikes,
    phones: data?.phones,
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    data[name] = value
  }

  return (
    <div id="HomeFurnitureEdit" className="HomeFurnitureEdit">
      <div className="formHeader">Home Furniture Details</div>
      <div className="HomeFurnitureForm">
        <TextField
          id="pincodeInput"
          className="formElements"
          label="T.V. (in quantity)"
          variant="outlined"
          type="number"
          name="tv"
          onChange={(event) => handleChange(event)}
          defaultValue={formData?.tv}
          required
        />
        <TextField
          id="pincodeInput"
          className="formElements"
          label="Cable (in quantity)"
          variant="outlined"
          type="number"
          name="cable"
          onChange={(event) => handleChange(event)}
          defaultValue={formData?.cable}
          required
        />
        <TextField
          id="pincodeInput"
          className="formElements"
          label="Fridge (in quantity)"
          variant="outlined"
          type="number"
          name="fridge"
          onChange={(event) => handleChange(event)}
          defaultValue={formData?.fridge}
          required
        />
        <TextField
          id="pincodeInput"
          className="formElements"
          label="Washing Machine (in quantity)"
          variant="outlined"
          type="number"
          name="washingMachine"
          onChange={(event) => handleChange(event)}
          defaultValue={formData?.washingMachine}
          required
        />
        <TextField
          id="pincodeInput"
          className="formElements"
          label="Four Wheelers (in quantity)"
          variant="outlined"
          type="number"
          name="vehicles"
          onChange={(event) => handleChange(event)}
          defaultValue={formData?.vehicles}
          required
        />
        <TextField
          id="pincodeInput"
          className="formElements"
          label="Two Wheelers (in quantity)"
          variant="outlined"
          type="number"
          name="bikes"
          onChange={(event) => handleChange(event)}
          defaultValue={formData?.bikes}
          required
        />
        <TextField
          id="pincodeInput"
          className="formElements"
          label="Phones (in quantity)"
          variant="outlined"
          type="number"
          name="phones"
          onChange={(event) => handleChange(event)}
          defaultValue={formData?.phones}
          required
        />
      </div>
    </div>
  );
};

export default HomeFurnitureEdit;
