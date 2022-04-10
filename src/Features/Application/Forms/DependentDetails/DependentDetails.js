import React from "react";
import "./DependentDetails.scss";
import Button from "@mui/material/Button";

const DependentDetails = ({ nextForm }) => {
  const submitForm = (event) => {
    nextForm();
    event.preventDefault();
  };

  return (
    <div id="DependentDetails" className="DependentDetails">
      <div className="formHeader">Dependent Details</div>
      <form className="DependentDetailsForm" onSubmit={submitForm}>
        <Button
          id="nextBtn"
          className="nextBtn"
          variant="contained"
          type="submit"
        >
          Next
        </Button>
      </form>
    </div>
  );
};

export default DependentDetails;
