import React from "react";
import "./HomeFurniture.scss";
import { TextField, Button } from "@mui/material";

const HomeFurniture = ({ nextForm, backForm, data }) => {
  let formData = {
    tv: null,
    cable: null,
    fridge: null,
    washingMachine: null,
    vehicles: null,
    bikes: null,
    phones: null,
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    formData[name] = value
  }

  const submitForm = (event) => {
    nextForm("homeFurniture", formData);
    event.preventDefault();
  };

  return (
    <div id="HomeFurniture" className="HomeFurniture">
      <div className="formHeader">Home Furniture Details</div>
      <form className="HomeFurnitureForm" onSubmit={submitForm}>
        <TextField
          id="pincodeInput"
          className="formElements"
          label="T.V. (in quantity)"
          variant="outlined"
          type="number"
          name="tv"
          onChange={(event) => handleChange(event)}
          value={data?.tv}
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
          value={data?.cable}
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
          value={data?.fridge}
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
          value={data?.washingMachine}
          required
        />
        <TextField
          id="pincodeInput"
          className="formElements"
          label="Vehicles (in quantity)"
          variant="outlined"
          type="number"
          name="vehicles"
          onChange={(event) => handleChange(event)}
          value={data?.vehicles}
          required
        />
        <TextField
          id="pincodeInput"
          className="formElements"
          label="Bikes (in quantity)"
          variant="outlined"
          type="number"
          name="bikes"
          onChange={(event) => handleChange(event)}
          value={data?.bikes}
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
          value={data?.phones}
          required
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

export default HomeFurniture;
