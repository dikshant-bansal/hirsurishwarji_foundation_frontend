import React from "react";
import "./SurveyDetails.scss";
import { TextField, Button } from "@mui/material";

const SurveyDetails = ({ data }) => {
  let formData = {
    surveyDoneBy: null,
    surveyDetails: null,
    specialNotes: null,
    date: null,
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    formData[name] = value
  }

  const submitForm = (event) => {
    event.preventDefault();
  };

  return (
    <div id="SurveyDetails" className="SurveyDetails">
      <div className="formHeader">Survey Details</div>
      <form className="SurveyDetailsForm" onSubmit={submitForm}>
        <TextField
          id="formElements"
          className="formElements"
          label="Survey Done By:"
          variant="outlined"
          name="surveyDoneBy"
          onChange={(event) => handleChange(event)}
        />
        <TextField
          id="formElements"
          className="formElements"
          label="Survey Details:"
          variant="outlined"
          name="surveyDetails"
          onChange={(event) => handleChange(event)}
        />
        <TextField
          id="formElements"
          className="formElements"
          label="Special Notes:"
          variant="outlined"
          name="specialNotes"
          onChange={(event) => handleChange(event)}
        />
        <div className="btnContainer">
          <Button
            id="updateSurveyBtn"
            className="updateSurveyBtn"
            variant="outlined"
            type="submit"
          >
            Update Survey
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SurveyDetails;
