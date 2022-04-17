import React from "react";
import "./HomeFurniture.scss";
import { TextField, Button } from "@mui/material";

const HomeFurniture = ({ nextForm, backForm }) => {
  const submitForm = (event) => {
    nextForm();
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
          required
        />
        <TextField
          id="pincodeInput"
          className="formElements"
          label="Cable (in quantity)"
          variant="outlined"
          type="number"
          required
        />
        <TextField
          id="pincodeInput"
          className="formElements"
          label="Fridge (in quantity)"
          variant="outlined"
          type="number"
          required
        />
        <TextField
          id="pincodeInput"
          className="formElements"
          label="Washing Machine (in quantity)"
          variant="outlined"
          type="number"
          required
        />
        <TextField
          id="pincodeInput"
          className="formElements"
          label="Vehicles (in quantity)"
          variant="outlined"
          type="number"
          required
        />
        <TextField
          id="pincodeInput"
          className="formElements"
          label="Bikes (in quantity)"
          variant="outlined"
          type="number"
          required
        />
        <TextField
          id="pincodeInput"
          className="formElements"
          label="Phones (in quantity)"
          variant="outlined"
          type="number"
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
