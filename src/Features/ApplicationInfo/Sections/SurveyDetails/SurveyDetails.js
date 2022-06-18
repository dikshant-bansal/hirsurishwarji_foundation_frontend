import React, { useState } from "react";
import "./SurveyDetails.scss";
import { TextField, Button } from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SurveyDetails = ({ surveyData, applicationData, getData }) => {
  const navigate = useNavigate();

  let formData = {
    id: surveyData?.id,
    surveyDoneBy: surveyData?.surveyDoneBy,
    surveyDetails: surveyData?.surveyDetails,
    specialNotes: surveyData?.specialNotes,
    surveyDate: surveyData?.surveyDate
      ? new Date(surveyData.surveyDate)
      : new Date(),
  };

  const [data, setData] = useState(formData);

  const handleChange = (event) => {
    const { name, value } = event.target;
    let formDataCopy = { ...data };
    formDataCopy[name] = value;
    setData(formDataCopy);
  };

  const submitForm = (event) => {
    event.preventDefault();
  };

  const setDate = (date) => {
    let formDataCopy = { ...data };
    formDataCopy["surveyDate"] = date;
    setData(formDataCopy);
  };

  const update = () => {
    axios({
      method: "POST",
      url: "https://hs-foundation.herokuapp.com/survey/update",
      data: data,
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        if(response.status === 200){
          axios({
            method: "POST",
            url: "https://hs-foundation.herokuapp.com/update",
            data: {...applicationData},
            headers: { "Content-Type": "application/json" },
          })
            .then((res) => {
              if (res.status === 200) {
                getData();
                navigate(`/applicationList`)
              }
            })
        }
      })
      .catch((error) => console.error("error", error));
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
          defaultValue={formData?.surveyDoneBy}
        />
        <TextField
          id="formElements"
          className="formElements"
          label="Survey Details:"
          variant="outlined"
          name="surveyDetails"
          onChange={(event) => handleChange(event)}
          defaultValue={formData?.surveyDetails}
        />
        <TextField
          id="formElements"
          className="formElements"
          label="Special Notes:"
          variant="outlined"
          name="specialNotes"
          onChange={(event) => handleChange(event)}
          defaultValue={formData?.specialNotes}
        />
        <div id="formElements" className="formElements">
          Date:
          <DatePicker
            selected={data.surveyDate}
            onChange={(date) => {
              setDate(date);
            }}
            name="surveyDate"
          />
        </div>
        <div className="btnContainer">
          <Button
            id="updateSurveyBtn"
            className="updateSurveyBtn"
            variant="outlined"
            type="submit"
            onClick={() => update()}
          >
            Update Survey
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SurveyDetails;
