import React from "react";
import "./UpdateDocuments.scss";
import Button from "@mui/material/Button";

const UpdateDocuments = ({ nextForm }) => {
  const submitForm = (event) => {
    nextForm();
    event.preventDefault();
  };
  
  return (
    <div id="UpdateDocuments" className="UpdateDocuments">
      <div>Update Documents</div>
      <form className="personalDetailsForm" onSubmit={submitForm}>
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

export default UpdateDocuments;
