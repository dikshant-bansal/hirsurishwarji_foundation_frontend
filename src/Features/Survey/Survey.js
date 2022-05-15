import React from "react";
import "./Survey.scss";
// import { useLocation } from "react-router-dom";
import { TextField, Button } from "@mui/material";

const Survey = () => {
  // const location = useLocation();
  // let surveyInfo = location.state.surveyInfo;

  // let formData = {
  //   surveyDoneBy: surveyInfo?.surveyDoneBy,
  //   surveyDetails: surveyInfo?.surveyDetails,
  //   specialNotes: surveyInfo?.specialNotes,
  //   date: surveyInfo?.date,
  // };

  let formData = {
    surveyDoneBy: null,
    surveyDetails: null,
    specialNotes: null,
    date: null,
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    formData[name] = value;
  };

  const submitForm = (event) => {
    event.preventDefault();
  };

  return (
    <div id="Survey" className="Survey">
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
          multiline
          rows={4}
        />
        <TextField
          id="formElements"
          className="formElements"
          label="Special Notes:"
          variant="outlined"
          name="specialNotes"
          onChange={(event) => handleChange(event)}
          multiline
          rows={4}
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

export default Survey;
