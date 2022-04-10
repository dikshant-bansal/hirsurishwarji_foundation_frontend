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

const MiscellaneousQuestions = ({ nextForm }) => {
  const submitForm = (event) => {
    nextForm();
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
              <FormLabel id="demo-row-radio-buttons-group-label" className="questionLabel">
                {question}
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
          );
        })}
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

export default MiscellaneousQuestions;
