import React from "react";
import "./MiscellaneousQuestions.scss";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Button,
} from "@mui/material";

const MiscellaneousQuestions = ({ nextForm, backForm }) => {
  let formData = {};

  const handleChange = (event) => {
    const { name, value } = event.target;
    formData[name] = value
  }

  const submitForm = (event) => {
    nextForm("miscellaneousQuestions", formData);
    event.preventDefault();
  };

  const questionsArray = [
    "Pathshala Children",
    "Religious Education Impart",
    "Temple Pooja",
    "Upashraya Visit",
    "Usage of Kanmool",
    "Kanmool Usage Stopped",
  ];

  return (
    <div id="MiscellaneousQuestions" className="MiscellaneousQuestions">
      <div className="formHeader">Miscellaneous Questions</div>
      <form className="MiscellaneousQuestionsForm" onSubmit={submitForm}>
        {questionsArray.map((question, index) => {
          return (
            <FormControl className="formElements" key={`${question}${index}`}>
              <FormLabel
                id="demo-row-radio-buttons-group-label"
                className="questionLabel"
              >
                {question}
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel value={true} control={<Radio />} label="Yes" name={`${question}`} onChange={(event) => handleChange(event)}/>
                <FormControlLabel value={false} control={<Radio />} label="No" name={`${question}`} onChange={(event) => handleChange(event)}/>
              </RadioGroup>
            </FormControl>
          );
        })}
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

export default MiscellaneousQuestions;
